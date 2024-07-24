const jobCollection = require("../model/Job.Model");
const rejectedCollection = require("../model/RejectedUser.model");
const shortlistedCollection = require("../model/ShortlistedUser.model");
const HrUser = require("../model/users/HrUserModel");



const createShortlist = async (req, res) => {
    const { HrEmail } = req.params;
    const {
        _id, 
        email,
        profileImage,
        name,
        jobTitle,
        jobID,
        biography,
        country,
        employmentType,
        jobDescription,
        skills,
        resume,
        location,
        salaryRange
    } = req.body;

    try {
        
        const existCandidate = await shortlistedCollection.findOne({
            email: email,
            Job_title: jobTitle
        });

        if (existCandidate) {
            // Update the existing candidate's status to 'selected'
            existCandidate.status = 'selected';
            await existCandidate.save();

            // Update the jobCollection to reflect the status change
            await jobCollection.updateOne(
                { employeeEmail:HrEmail,_id:jobID, 'appliedBy.email': email },
                {
                    $set: { 'appliedBy.$.status': 'selected' },
                }
            );

            return res.status(200).json({
                success: true,
                msg: "User status updated to selected"
            });
        }

        // Create a new entry in shortlistedCollection
        const mongooseResponse = await shortlistedCollection.create({
            userId:_id,
            employeeEmail: HrEmail,
            email: email,
            Job_title: jobTitle,
            profileImage,
            name: name,
            biography: biography,
            country: country,
            employmentType: employmentType,
            jobDescription: jobDescription,
            skills: skills,
            resume: resume,
            location: location,
            salaryRange: salaryRange,
            status: 'selected' // Example field for status        
            });

        // Update the HrUser collection with the shortlisted user
        await HrUser.updateOne(
            { email: HrEmail },
            {
                $push: {
                    shortlistedUser: {
                        email: email,
                        job_title: jobTitle
                    }
                }
            }
        );

        // Update the jobCollection to reflect the status change
        await jobCollection.updateOne(
            { employeeEmail:HrEmail,_id:jobID, 'appliedBy.email': email },
            {
                $set: { 'appliedBy.$.status': 'selected' },
            }
        );

        if (mongooseResponse) {
            return res.status(200).json({
                success: true,
                msg: "User added to Shortlisted collection"
            });
        } else {
            return res.status(200).json({
                success: false,
                msg: "Something went wrong, Try again later"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(`Internal server Error : ${error.message}`);
    }
};
const getShortlist = async (req, res) => {
    const { HrEmail } = req.params;

    try {
        const mongooseResponse = await shortlistedCollection.find({ employeeEmail: HrEmail });

        if (mongooseResponse.length > 0) {
            res.status(200).json({
                success: true,
                shortlistedUser: mongooseResponse
            })
        } else {
            res.status(200).json({
                success: false,
                shortlistedUser: mongooseResponse
            })
        }
    } catch (error) {
        res.status(500).send(`Internal server Error : ${error.message}`)
    }
}

const removeShortlist = async (req, res) => {

    const [employeeEmail, email, Job_title] = req.params.HrEmail.split("-");
    try {
        const mongooseResponse = await shortlistedCollection.deleteMany({
            employeeEmail: employeeEmail,
            email: email,
            // Job_title: Job_title,
        });
        const mongooseUser = await HrUser.findOne({ email: employeeEmail });

        await HrUser.updateOne({ email: employeeEmail }, {
            shortlistedUsers: mongooseUser.shortlistedUsers.filter((data) => data.email === email).filter((data) => data.job_title !== Job_title)
        });

        if (mongooseResponse) {
            return res.status(200).json({
                success: true,
                msg: "User removed from  shortlisted collection"
            })

        } else {
            return res.status(200).json({
                success: false,
                msg: "Something went wrong, Try again later"
            })
        }


    } catch (error) {
        res.status(500).send(`Internal server Error : ${error.message}`)
    }
}


module.exports = {
    createShortlist,
    getShortlist,
    removeShortlist,
}
