/*! For license information please see 6714.ac961f02.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6714],{39039:(e,t,a)=>{a.d(t,{A:()=>s});a(65043);const n="LoaderComp_postLoaderContainer__neFg0",o="LoaderComp_PostLoader__4Io7-",r="LoaderComp_PostLoader__item__yL0FD";var i=a(70579);const s=function(){return(0,i.jsx)("div",{className:n,children:(0,i.jsxs)("div",{className:o,children:[(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r}),(0,i.jsx)("div",{className:r})]})})}},32835:(e,t,a)=>{a.d(t,{A:()=>P});var n=a(65043);const o="Notification_notificationBox__container__RmWN6",r="Notification_notificationBox__D15YZ",i="Notification_notificationBox_header__c7o8Z",s="Notification_notificationCount__SaTwe",c="Notification_notification__buttonContainer__u65lK",l="Notification_notificationActionButton__b1NWw",u="Notification_notificationActiveButton__sSz54",_="Notification_notificationActionActiveButton__LcjzR",d="Notification_notificationCloseButton__DLpIS",m="Notification_notification__List__iX4xQ",h="Notification_notification__ListItem__lRrI1",f="Notification_notification__Text__05AbO",p="Notification_notification__time__wiM8W",g="Notification_notification__ListItem_Unread__9xEUD",v="Notification_notification__UnreadDot__hNLYS",x="Notification_notification__readDot__6JBBx",y="Notification_notificationItem__iconContainer__2bDLy",b="Notification_notificationItem__icon__9zIqu",A="Notification_no_notificationBox__qzcYB",j="Notification_no_notificationPrimaryText__Vd5Jf",L="Notification_no_notificationSecondaryText__929Qa";var k=a(92021),R=a(6720),N=a(47196),S=a(21458);var w=a(39039),O=a(86213),C=a(23768),E=a(83003),U=a(70579);const I="http://localhost:8585/api";const P=function(e){let{notificationCounter:t,CbCloseNotification:a}=e;const{email:A}=(0,E.d4)((e=>e.Assessment.currentUser)),[j,L]=(0,n.useState)(!1),[P,V]=(0,n.useState)("All"),[J,W]=(0,n.useState)([]),z=()=>{V("All"),L(!0),O.A.get("".concat(I,"/user/notifications/get-notification/").concat(A)).then((e=>{e.data.success?(W(e.data.notification),t(e.data.notification.filter((e=>e.notificationStatus.toLowerCase()==="Unread".toLowerCase())).length),L(!1)):(W([]),L(!1))})).catch((e=>{L(!1),console.log(e)}))};(0,n.useEffect)(z,[A]);const D=(e,t)=>{e.preventDefault(),V(t),"All"===t?z():W(J.filter((e=>"Unread"===e.notificationStatus)))};return(0,U.jsx)("section",{className:o,children:(0,U.jsxs)("div",{className:r,children:[(0,U.jsxs)("h1",{className:"".concat(i," keep-text-black"),children:[P," Notifications",(0,U.jsx)("span",{className:"".concat(s," keep-text-black"),children:J.length})]}),(0,U.jsxs)("div",{className:c,children:[(0,U.jsxs)("div",{children:[(0,U.jsx)("button",{className:"".concat(l," ").concat("All"===P&&u," keep-text-black"),onClick:e=>D(e,"All"),type:"button",children:"All"}),(0,U.jsx)("button",{className:"".concat(l," ").concat("Unread"===P&&u," keep-text-black"),onClick:e=>D(e,"Unread"),type:"button",children:"Unread"}),(0,U.jsx)("button",{className:"".concat(l," ").concat(J.some((e=>"Unread"===e.notificationStatus))&&_," keep-text-black"),type:"button",onClick:e=>{e.preventDefault(),V("All"),O.A.patch("".concat(I,"/user/notifications/update-all-notification-status/").concat(A)).then((e=>{e.data.success?(C.Ay.success("".concat(e.data.msg)),z()):(C.Ay.error("".concat(e.data.msg)),z())})).catch((e=>{console.log(e),C.Ay.error("Check your internet connection and Try again ! ".concat(e.message)),z()}))},children:"Mark all as read"})]}),(0,U.jsx)(U.Fragment,{children:(0,U.jsx)(k.clO,{className:"".concat(d," keep-text-black"),onClick:e=>a(!1)})})]}),(0,U.jsx)("div",{className:m,children:j?(0,U.jsx)(w.A,{}):(0,U.jsx)(U.Fragment,{children:0===J.length?(0,U.jsx)(T,{}):(0,U.jsx)(U.Fragment,{children:J.sort(((e,t)=>t.notificationTime-e.notificationTime)).map((e=>(0,U.jsxs)("div",{className:"".concat(h," keep-text-black"),children:["Unread"===(null===e||void 0===e?void 0:e.notificationStatus)?(0,U.jsx)("span",{className:v}):(0,U.jsx)("span",{className:x}),(0,U.jsxs)("p",{className:"".concat(f," ").concat("Unread"===(null===e||void 0===e?void 0:e.notificationStatus)&&g," keep-text-black"),children:[e.notificationText,".",(0,U.jsx)("span",{className:"".concat(p," keep-text-black"),children:(0,U.jsx)(S.f,{time:null===e||void 0===e?void 0:e.notificationTime})})]}),(0,U.jsxs)("div",{className:y,children:[(0,U.jsx)(N.Ku6,{onClick:t=>((e,t)=>{V("All"),e.preventDefault(),O.A.delete("".concat(I,"/user/notifications/delete-notification/").concat(t)).then((e=>{e.data.success?(C.Ay.success("".concat(e.data.msg)),z()):(C.Ay.error("".concat(e.data.msg)),z())})).catch((e=>{C.Ay.error("Check your internet connection and Try again ! ".concat(e.message)),z()}))})(t,null===e||void 0===e?void 0:e._id),className:"".concat(b," keep-text-black"),title:"Delete Notification"}),"Unread"===(null===e||void 0===e?void 0:e.notificationStatus)&&(0,U.jsx)(R.WJM,{className:"".concat(b," keep-text-black"),onClick:t=>((e,t)=>{e.preventDefault(),O.A.patch("".concat(I,"/user/notifications/update-notification-status/").concat(t)).then((e=>{e.data.success?(C.Ay.success("".concat(e.data.msg)),z()):(C.Ay.error("".concat(e.data.msg)),z())})).catch((e=>{C.Ay.error("Check your internet connection and Try again ! ".concat(e.message)),z()}))})(t,null===e||void 0===e?void 0:e._id)})]})]},e._id)))})})})]})})},T=()=>(0,U.jsxs)("div",{className:A,children:[(0,U.jsx)("img",{src:"data:image/png;base64,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",alt:"No New Notification"}),(0,U.jsx)("h2",{className:"".concat(j," keep-text-black"),children:"No notifications yet"}),(0,U.jsx)("h3",{className:"".concat(L," keep-text-black"),children:"We will let you know when something needs your attention"})]})},21458:(e,t,a)=>{a.d(t,{f:()=>s});a(65043);var n=a(54852),o=a(88399),r=a(43598),i=a(70579);function s(e){let{time:t}=e;return(0,i.jsx)(n.A,{date:t,locale:"en-us"})}o.A.addDefaultLocale(r.A)},86714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>q});var n=a(65043),o=a(98177),r=a(73216),i=a(35475),s=a(83910),c=a(97929),l=a(81725),u=a.n(l),_=/[A-Z]/g,d=/^ms-/,m={};function h(e){return"-"+e.toLowerCase()}const f=function(e){if(m.hasOwnProperty(e))return m[e];var t=e.replace(_,h);return m[e]=d.test(t)?"-"+t:t};function p(e,t){if(e===t)return!0;if(!e||!t)return!1;const a=Object.keys(e),n=Object.keys(t),o=a.length;if(n.length!==o)return!1;for(let r=0;r<o;r++){const n=a[r];if(e[n]!==t[n]||!Object.prototype.hasOwnProperty.call(t,n))return!1}return!0}var g=a(65173),v=a.n(g);const x=v().oneOfType([v().string,v().number]),y={all:v().bool,grid:v().bool,aural:v().bool,braille:v().bool,handheld:v().bool,print:v().bool,projection:v().bool,screen:v().bool,tty:v().bool,tv:v().bool,embossed:v().bool},b={orientation:v().oneOf(["portrait","landscape"]),scan:v().oneOf(["progressive","interlace"]),aspectRatio:v().string,deviceAspectRatio:v().string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:v().bool,colorIndex:v().bool,monochrome:v().bool,resolution:x,type:Object.keys(y)},{type:A,...j}=b,L={minAspectRatio:v().string,maxAspectRatio:v().string,minDeviceAspectRatio:v().string,maxDeviceAspectRatio:v().string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:v().number,maxColor:v().number,minColorIndex:v().number,maxColorIndex:v().number,minMonochrome:v().number,maxMonochrome:v().number,minResolution:x,maxResolution:x,...j};var k={all:{...y,...L},types:y,matchers:b,features:L};const R=e=>{const t=[];return Object.keys(k.all).forEach((a=>{const n=e[a];null!=n&&t.push(((e,t)=>{const a=f(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?a:!1===t?"not ".concat(a):"(".concat(a,": ").concat(t,")")})(a,n))})),t.join(" and ")},N=(0,n.createContext)(void 0),S=e=>{if(!e)return;return Object.keys(e).reduce(((t,a)=>(t[f(a)]=e[a],t)),{})},w=()=>{const e=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{e.current=!0}),[]),e.current},O=e=>{const t=()=>(e=>e.query||R(e))(e),[a,o]=(0,n.useState)(t);return(0,n.useEffect)((()=>{const e=t();a!==e&&o(e)}),[e]),a},C=(e,t,a)=>{const o=(e=>{const t=(0,n.useContext)(N),a=()=>S(e)||S(t),[o,r]=(0,n.useState)(a);return(0,n.useEffect)((()=>{const e=a();p(o,e)||r(e)}),[e,t]),o})(t),r=O(e);if(!r)throw new Error("Invalid or missing MediaQuery!");const i=((e,t)=>{const a=()=>u()(e,t||{},!!t),[o,r]=(0,n.useState)(a),i=w();return(0,n.useEffect)((()=>{if(i){const e=a();return r(e),()=>{e&&e.dispose()}}}),[e,t]),o})(r,o),s=(e=>{const[t,a]=(0,n.useState)(e.matches);return(0,n.useEffect)((()=>{const t=e=>{a(e.matches)};return e.addListener(t),a(e.matches),()=>{e.removeListener(t)}}),[e]),t})(i),c=w();return(0,n.useEffect)((()=>{c&&a&&a(s)}),[s]),(0,n.useEffect)((()=>()=>{i&&i.dispose()}),[]),s};var E=a(23768),U=a(83003),I=a(52173),P=a(86213),T=a(70579);const V="http://localhost:8585/api";function J(){const e=(0,r.Zp)(),[t,a]=(0,n.useState)(),l=C({maxWidth:950}),u=(0,U.wA)(),{name:_,profileImage:d}=(0,U.d4)((e=>e.Assessment.currentUser));(0,n.useEffect)((()=>{a(l)}),[l]);return(0,T.jsxs)("div",{className:o.A.__navbar_Page,children:[(0,T.jsx)("h2",{className:o.A.__nav_Logo,onClick:()=>e("/hr_dashboard"),children:t?"HCP":"HRCONNECT PRO"}),(0,T.jsxs)("nav",{className:o.A.__navbar,children:[(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/hr_dashboard",children:[" ",(0,T.jsx)(s.g,{icon:c.muz})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Dashboard"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/create_post",children:[(0,T.jsx)(s.g,{icon:c.X46})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Create Post"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/employees",children:[" ",(0,T.jsx)(s.g,{icon:c.gdJ})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Employees"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/payroll",children:[(0,T.jsx)(s.g,{icon:c.VYu})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Payroll"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/analytics",children:[(0,T.jsx)(s.g,{icon:c.s67})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Analytics"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/candidates",children:[(0,T.jsx)(s.g,{icon:c.X46})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Candidates"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/interview_scheduled",children:[" ",(0,T.jsx)(s.g,{icon:c.l6G})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Interview Scheduled"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/chatbot",children:[(0,T.jsx)(s.g,{icon:c.UBk})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Chatbot"})," "]}),(0,T.jsxs)(i.k2,{className:e=>{let{isActive:t}=e;return t?o.A.active:o.A.__navbar_Links},to:"/Setting",children:[(0,T.jsx)(s.g,{icon:c.BH7})," ",(0,T.jsx)("span",{className:o.A.__hide,children:"Setting"})," "]})]}),(0,T.jsxs)("div",{className:o.A.__nav_footer_actions,children:[(0,T.jsxs)("div",{className:o.A.__user_Info,children:[(0,T.jsx)("img",{className:o.A.__user_Img,title:"Profile",src:null!==d&&void 0!==d?d:"https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg",alt:"HrProfilePicture",onError:e=>{e.target.src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg",e.onError=null}}),(0,T.jsx)("span",{style:{fontSize:"20px"},children:_.split(" ")[0]})]}),(0,T.jsxs)("button",{className:o.A.__btn_Logout,onClick:async()=>{try{const t=localStorage.getItem("email");u((0,I.i3)());if(200!==(await P.A.post("".concat(V,"/hr/logout?email=").concat(t))).status)throw new Error("Logout failed");E.Ay.success("".concat(_," Logged out !!")),setTimeout((()=>{e("/login")}),1e3)}catch(t){console.error("Logout failed:",t),E.Ay.error("Logout failed. Please try again.")}},children:[(0,T.jsx)(s.g,{icon:c.PIP})," ",(0,T.jsx)("span",{className:o.A.__logout_Text,children:"Log Out"})]})]})]})}var W=a(35659),z=a(50423),D=a(55749),H=a(98780),Z=a(32835);const F="http://localhost:8585/api",Q="http://localhost:8585";function X(){const e=(0,D.io)("".concat(Q)),{email:t}=(0,U.d4)((e=>e.Assessment.currentUser)),[a,i]=(0,n.useState)(0),[l,u]=(0,n.useState)(!1),_=(0,r.Zp)(),d=()=>{P.A.get("".concat(F,"/user/notifications/get-notification/").concat(t)).then((e=>{e.data.success?i(e.data.notification.filter((e=>e.notificationStatus.toLowerCase()==="Unread".toLowerCase())).length):i(0)})).catch((e=>{console.log(e)}))};(0,n.useEffect)((()=>{e.emit("userConnect",JSON.stringify({userEmail:t})),d()}),[]),(0,n.useEffect)((()=>{e.on("receiveNotification",(e=>{P.A.post("".concat(F,"/user/notifications/save-notification"),JSON.parse(e)).then((e=>{e.data.success&&d()})).catch((e=>{console.log(e)}))}))}),[e]);const m=()=>{_("/search-candidates")};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{className:o.A.__topbar,children:[(0,T.jsxs)("div",{className:o.A.__searchbar,children:[(0,T.jsx)(s.g,{className:o.A.__topbar_Icon,icon:c.$UM,onClick:m}),(0,T.jsx)("input",{className:o.A.__input,type:"text",name:"searchText",id:"searchText",placeholder:"Search Candidates Online...",readOnly:!0,onClick:m,style:{cursor:"pointer"}})]}),(0,T.jsxs)("button",{onClick:()=>_("/addemployee"),className:o.A.__btn_Add_Employee,children:[(0,T.jsx)(s.g,{icon:c.nWR})," Add Employee"]}),(0,T.jsx)(W.Wn$,{className:o.A.__btn_filter,style:{color:"white",fontSize:"25"}}),(0,T.jsx)(H.A,{color:"primary",badgeContent:a,children:(0,T.jsx)(z.Mlm,{className:o.A.__btn_notfication,style:{color:"white",fontSize:"25"},onClick:()=>u(!l)})})]}),l&&(0,T.jsx)(Z.A,{notificationCounter:i,CbCloseNotification:u})]})}function q(){const e=(0,r.Zp)(),{pathname:t}=(0,r.zy)();return(0,n.useEffect)((()=>{"/"===t&&e("/hr_dashboard")}),[t]),(0,T.jsxs)("div",{className:o.A.__mainContainer,children:[(0,T.jsx)(J,{}),(0,T.jsxs)("div",{className:o.A.__subContainer,children:[(0,T.jsx)(X,{}),(0,T.jsx)("div",{className:o.A.__outletContainer,children:(0,T.jsx)(r.sv,{})})]})]})}},41409:(e,t,a)=>{a.d(t,{X:()=>o});var n=a(58168);function o(e,t,a){return void 0===e||"string"===typeof e?t:(0,n.A)({},t,{ownerState:(0,n.A)({},t.ownerState,a)})}},84282:(e,t,a)=>{a.d(t,{Q:()=>_});var n=a(58168),o=a(98587),r=a(47042),i=a(41409),s=a(58387);function c(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"===typeof e[t]))).forEach((a=>{t[a]=e[a]})),t}function l(e){const{getSlotProps:t,additionalProps:a,externalSlotProps:o,externalForwardedProps:r,className:i}=e;if(!t){const e=(0,s.A)(null==a?void 0:a.className,i,null==r?void 0:r.className,null==o?void 0:o.className),t=(0,n.A)({},null==a?void 0:a.style,null==r?void 0:r.style,null==o?void 0:o.style),c=(0,n.A)({},a,r,o);return e.length>0&&(c.className=e),Object.keys(t).length>0&&(c.style=t),{props:c,internalRef:void 0}}const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};const a={};return Object.keys(e).filter((a=>a.match(/^on[A-Z]/)&&"function"===typeof e[a]&&!t.includes(a))).forEach((t=>{a[t]=e[t]})),a}((0,n.A)({},r,o)),u=c(o),_=c(r),d=t(l),m=(0,s.A)(null==d?void 0:d.className,null==a?void 0:a.className,i,null==r?void 0:r.className,null==o?void 0:o.className),h=(0,n.A)({},null==d?void 0:d.style,null==a?void 0:a.style,null==r?void 0:r.style,null==o?void 0:o.style),f=(0,n.A)({},d,a,_,u);return m.length>0&&(f.className=m),Object.keys(h).length>0&&(f.style=h),{props:f,internalRef:d.ref}}const u=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function _(e){var t;const{elementType:a,externalSlotProps:s,ownerState:c,skipResolvingSlotProps:_=!1}=e,d=(0,o.A)(e,u),m=_?{}:function(e,t,a){return"function"===typeof e?e(t,a):e}(s,c),{props:h,internalRef:f}=l((0,n.A)({},d,{externalSlotProps:m})),p=(0,r.A)(f,null==m?void 0:m.ref,null==(t=e.additionalProps)?void 0:t.ref);return(0,i.X)(a,(0,n.A)({},h,{ref:p}),c)}},98780:(e,t,a)=>{a.d(t,{A:()=>b});var n=a(58168),o=a(98587),r=a(65043),i=a(58387);const s=e=>{const t=r.useRef({});return r.useEffect((()=>{t.current=e})),t.current};var c=a(68606);var l=a(84282),u=a(43887),_=a(6431),d=a(6803),m=a(57056),h=a(4579);function f(e){return(0,h.Ay)("MuiBadge",e)}const p=(0,m.A)("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]);var g=a(70579);const v=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],x=(0,u.Ay)("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),y=(0,u.Ay)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.badge,t[a.variant],t["anchorOrigin".concat((0,d.A)(a.anchorOrigin.vertical)).concat((0,d.A)(a.anchorOrigin.horizontal)).concat((0,d.A)(a.overlap))],"default"!==a.color&&t["color".concat((0,d.A)(a.color))],a.invisible&&t.invisible]}})((e=>{let{theme:t}=e;var a;return{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.enteringScreen}),variants:[...Object.keys((null!=(a=t.vars)?a:t).palette).filter((e=>{var a,n;return(null!=(a=t.vars)?a:t).palette[e].main&&(null!=(n=t.vars)?n:t).palette[e].contrastText})).map((e=>({props:{color:e},style:{backgroundColor:(t.vars||t).palette[e].main,color:(t.vars||t).palette[e].contrastText}}))),{props:{variant:"dot"},style:{borderRadius:4,height:8,minWidth:8,padding:0}},{props:e=>{let{ownerState:t}=e;return"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap},style:{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(50%, -50%)"}}},{props:e=>{let{ownerState:t}=e;return"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap},style:{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(50%, 50%)"}}},{props:e=>{let{ownerState:t}=e;return"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap},style:{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:e=>{let{ownerState:t}=e;return"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"rectangular"===t.overlap},style:{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:e=>{let{ownerState:t}=e;return"top"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap},style:{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(50%, -50%)"}}},{props:e=>{let{ownerState:t}=e;return"bottom"===t.anchorOrigin.vertical&&"right"===t.anchorOrigin.horizontal&&"circular"===t.overlap},style:{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(50%, 50%)"}}},{props:e=>{let{ownerState:t}=e;return"top"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap},style:{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(-50%, -50%)"}}},{props:e=>{let{ownerState:t}=e;return"bottom"===t.anchorOrigin.vertical&&"left"===t.anchorOrigin.horizontal&&"circular"===t.overlap},style:{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",["&.".concat(p.invisible)]:{transform:"scale(0) translate(-50%, 50%)"}}},{props:{invisible:!0},style:{transition:t.transitions.create("transform",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.leavingScreen})}}]}})),b=r.forwardRef((function(e,t){var a,r,u,m,h,p;const b=(0,_.b)({props:e,name:"MuiBadge"}),{anchorOrigin:A={vertical:"top",horizontal:"right"},className:j,component:L,components:k={},componentsProps:R={},children:N,overlap:S="rectangular",color:w="default",invisible:O=!1,max:C=99,badgeContent:E,slots:U,slotProps:I,showZero:P=!1,variant:T="standard"}=b,V=(0,o.A)(b,v),{badgeContent:J,invisible:W,max:z,displayValue:D}=function(e){const{badgeContent:t,invisible:a=!1,max:n=99,showZero:o=!1}=e,r=s({badgeContent:t,max:n});let i=a;!1!==a||0!==t||o||(i=!0);const{badgeContent:c,max:l=n}=i?r:e;return{badgeContent:c,invisible:i,max:l,displayValue:c&&Number(c)>l?"".concat(l,"+"):c}}({max:C,invisible:O,badgeContent:E,showZero:P}),H=s({anchorOrigin:A,color:w,overlap:S,variant:T,badgeContent:E}),Z=W||null==J&&"dot"!==T,{color:F=w,overlap:Q=S,anchorOrigin:X=A,variant:q=T}=Z?H:b,Y="dot"!==q?D:void 0,B=(0,n.A)({},b,{badgeContent:J,invisible:Z,max:z,displayValue:Y,showZero:P,anchorOrigin:X,color:F,overlap:Q,variant:q}),K=(e=>{const{color:t,anchorOrigin:a,invisible:n,overlap:o,variant:r,classes:i={}}=e,s={root:["root"],badge:["badge",r,n&&"invisible","anchorOrigin".concat((0,d.A)(a.vertical)).concat((0,d.A)(a.horizontal)),"anchorOrigin".concat((0,d.A)(a.vertical)).concat((0,d.A)(a.horizontal)).concat((0,d.A)(o)),"overlap".concat((0,d.A)(o)),"default"!==t&&"color".concat((0,d.A)(t))]};return(0,c.A)(s,f,i)})(B),G=null!=(a=null!=(r=null==U?void 0:U.root)?r:k.Root)?a:x,M=null!=(u=null!=(m=null==U?void 0:U.badge)?m:k.Badge)?u:y,$=null!=(h=null==I?void 0:I.root)?h:R.root,ee=null!=(p=null==I?void 0:I.badge)?p:R.badge,te=(0,l.Q)({elementType:G,externalSlotProps:$,externalForwardedProps:V,additionalProps:{ref:t,as:L},ownerState:B,className:(0,i.A)(null==$?void 0:$.className,K.root,j)}),ae=(0,l.Q)({elementType:M,externalSlotProps:ee,ownerState:B,className:(0,i.A)(K.badge,null==ee?void 0:ee.className)});return(0,g.jsxs)(G,(0,n.A)({},te,{children:[N,(0,g.jsx)(M,(0,n.A)({},ae,{children:Y}))]}))}))},69184:(e,t,a)=>{function n(e,t){"function"===typeof e?e(t):e&&(e.current=t)}a.d(t,{A:()=>n})},47042:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(65043),o=a(69184);function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return n.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{(0,o.A)(t,e)}))}),t)}},41238:(e,t)=>{t.Y=function(e,t){return s(e).some((function(e){var a=e.inverse,n="all"===e.type||t.type===e.type;if(n&&a||!n&&!a)return!1;var o=e.expressions.every((function(e){var a=e.feature,n=e.modifier,o=e.value,r=t[a];if(!r)return!1;switch(a){case"orientation":case"scan":return r.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=u(o),r=u(r);break;case"resolution":o=l(o),r=l(r);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=c(o),r=c(r);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,r=parseInt(r,10)||0}switch(n){case"min":return r>=o;case"max":return r<=o;default:return r===o}}));return o&&!a||!o&&a}))};var a=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,r=/(em|rem|px|cm|mm|in|pt|pc)?$/,i=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(a),r=t[1],i=t[2],s=t[3]||"",c={};return c.inverse=!!r&&"not"===r.toLowerCase(),c.type=i?i.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],c.expressions=s.map((function(e){var t=e.match(n),a=t[1].toLowerCase().match(o);return{modifier:a[1],feature:a[2],value:t[2]}})),c}))}function c(e){var t,a=Number(e);return a||(a=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),a}function l(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function u(e){var t=parseFloat(e);switch(String(e).match(r)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},81725:(e,t,a)=>{var n=a(41238).Y,o="undefined"!==typeof window?window.matchMedia:null;function r(e,t,a){var r,i=this;function s(e){i.matches=e.matches,i.media=e.media}o&&!a&&(r=o.call(window,e)),r?(this.matches=r.matches,this.media=r.media,r.addListener(s)):(this.matches=n(e,t),this.media=e),this.addListener=function(e){r&&r.addListener(e)},this.removeListener=function(e){r&&r.removeListener(e)},this.dispose=function(){r&&r.removeListener(s)}}e.exports=function(e,t,a){return new r(e,t,a)}},98177:(e,t,a)=>{a.d(t,{A:()=>n});const n={__mainContainer:"RecruiterLayout___mainContainer__AklE3",__subContainer:"RecruiterLayout___subContainer__ByR7t",__outletContainer:"RecruiterLayout___outletContainer__6oxCn",__navbar_Page:"RecruiterLayout___navbar_Page__3IscP",__nav_Logo:"RecruiterLayout___nav_Logo__VBjs3",__navbar:"RecruiterLayout___navbar__UaCu6",__navbar_Links:"RecruiterLayout___navbar_Links__GWoxt",active:"RecruiterLayout_active__OfZvf",__nav_footer_actions:"RecruiterLayout___nav_footer_actions__-SVou",__user_Info:"RecruiterLayout___user_Info__ADUt3",__user_Img:"RecruiterLayout___user_Img__u9PVE",__btn_Edit_Profile:"RecruiterLayout___btn_Edit_Profile__Sq54I",__btn_Logout:"RecruiterLayout___btn_Logout__28HL4",__topbar:"RecruiterLayout___topbar__BHUKA",__searchbar:"RecruiterLayout___searchbar__cdsfU",__searchbar_hr:"RecruiterLayout___searchbar_hr__4UjOy",__input:"RecruiterLayout___input__jRB+B",__topbar_Icon:"RecruiterLayout___topbar_Icon__R1bO2",__btn_filter:"RecruiterLayout___btn_filter__Fmi8g",__btn_notfication:"RecruiterLayout___btn_notfication__KkUGV",__btn_Add_Employee:"RecruiterLayout___btn_Add_Employee__uyW+o",searchItemContainer:"RecruiterLayout_searchItemContainer__N3sp7",SearchList__Item:"RecruiterLayout_SearchList__Item__yoKX5",search_container:"RecruiterLayout_search_container__xP7Iu",fadeIn:"RecruiterLayout_fadeIn__zIeKO",search_title:"RecruiterLayout_search_title__hu3Ld",slideInFromLeft:"RecruiterLayout_slideInFromLeft__ZmQCD",search_form:"RecruiterLayout_search_form__xEshu",slideInFromRight:"RecruiterLayout_slideInFromRight__NwS5s",search_group:"RecruiterLayout_search_group__Z0GGj",search_input:"RecruiterLayout_search_input__Pc-uX",search_textarea:"RecruiterLayout_search_textarea__Q1dTP",search_button:"RecruiterLayout_search_button__gwutw",fadeInUp:"RecruiterLayout_fadeInUp__i-rES",location_filter:"RecruiterLayout_location_filter__JBnRQ",select_input:"RecruiterLayout_select_input__piVJJ",results_container:"RecruiterLayout_results_container__+yu86",results_title:"RecruiterLayout_results_title__6HdwO",slideInFromTop:"RecruiterLayout_slideInFromTop__cWH2l",results_list:"RecruiterLayout_results_list__aLcnV",slideInFromBottom:"RecruiterLayout_slideInFromBottom__1fct7",result_card:"RecruiterLayout_result_card__k2AR5",card_image_container:"RecruiterLayout_card_image_container__5YOMj",profile_image:"RecruiterLayout_profile_image__UIb0b",card_title:"RecruiterLayout_card_title__8hEf+",card_text:"RecruiterLayout_card_text__bCAIU",view_profile_btn:"RecruiterLayout_view_profile_btn__QAd8Q",no_results_text:"RecruiterLayout_no_results_text__11Stb",profile_details_card_container:"RecruiterLayout_profile_details_card_container__jy1qu",fade_in:"RecruiterLayout_fade_in__oi-pN",profile_details_card_header:"RecruiterLayout_profile_details_card_header__GekZL",profile_details_card_title:"RecruiterLayout_profile_details_card_title__OJ8Cz",profile_details_card_body:"RecruiterLayout_profile_details_card_body__xpJkx",profile_details_card_text:"RecruiterLayout_profile_details_card_text__fgKU3",profile_details_card_name:"RecruiterLayout_profile_details_card_name__NlD-C",profile_details_card_image:"RecruiterLayout_profile_details_card_image__U3Duu",read_more_button:"RecruiterLayout_read_more_button__VSSte",biography_paragraph:"RecruiterLayout_biography_paragraph__mpyQV",__hide:"RecruiterLayout___hide__joLjG",__userSection:"RecruiterLayout___userSection__S+Eha",__logout_Text:"RecruiterLayout___logout_Text__ULgph",__posts:"RecruiterLayout___posts__kw1d6"}}}]);
//# sourceMappingURL=6714.ac961f02.chunk.js.map