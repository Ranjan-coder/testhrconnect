const mongoose = require("mongoose");

const BookmarkedSchema = new mongoose.Schema({
    employeeEmail: {
        type: String,
    },
    email: {
        type: String,
    },
    Job_title: {
        type: String,
    },
    profileImage: {
        type: String,
    },
    name: {
        type: String,
    },
    biography: {
        type: String,
    },
    country: {
        type: String,
    },
    employmentType: {
        type: String,
    },
    jobDescription: {
        type: String,
    },
    skills: [
        {
            name: { type: String },
            index: { type: Number },
        },
    ],
    resume: [
        {
            filename: String,
            url: String,
            uploadedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    location: {
        type: String,
    },
});

const bookmarkedCollection = mongoose.model("BookmarkedUser", BookmarkedSchema);

module.exports = bookmarkedCollection;
