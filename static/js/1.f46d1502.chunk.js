(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{395:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2xYGy",mainPhoto:"ProfileInfo_mainPhoto__2c0EC",contact:"ProfileInfo_contact__38m9h",editButton:"ProfileInfo_editButton__1sXWh",inputPhoto:"ProfileInfo_inputPhoto__1V8iH",saveButton:"ProfileInfo_saveButton__2M1b6"}},397:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1yk8U",posts:"MyPosts_posts__2ibhY",postsDev:"MyPosts_postsDev__2nlMN"}},399:function(e,t,a){e.exports={item:"Post_item__1TVmr"}},411:function(e,t,a){"use strict";a.r(t);var n=a(47),o=a(52),s=a(155),r=a(82),l=a(153),i=a(0),c=a.n(i),u=a(14),m=a(395),p=a.n(m),f=a(89),d=function(e){var t=Object(i.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],s=Object(i.useState)(e.status),r=Object(u.a)(s,2),l=r[0],m=r[1];Object(i.useEffect)(function(){m(e.status)},[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",{style:{marginTop:"5px"}},c.a.createElement("div",{style:{fontSize:"15px",fontWeight:"400"},onDoubleClick:function(){o(!0)}},e.status||"------")),n&&c.a.createElement("div",null,c.a.createElement("input",{onChange:function(e){m(e.target.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(l)},value:l})))},E=a(198),b=a.n(E),v=a(62),h=a(154),g=a.n(h),P=a(182),O=Object(P.a)({form:"edit-profile"})(function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.handleSubmit,s=e.error;return c.a.createElement("form",{onSubmit:o},c.a.createElement("div",{className:g.a.saveButton},c.a.createElement("button",{style:{margin:"5px"}},"Save")),s&&c.a.createElement("div",{className:g.a.formSummaryError},s),c.a.createElement("div",null,Object(v.c)("Full name","fullName",[],v.a)),c.a.createElement(d,{status:a,updateStatus:n}),c.a.createElement("div",null,c.a.createElement("b",null,"Looking for a job"),":",Object(v.c)("Looking for a job","lookingForAJobDescription",[],v.b)),c.a.createElement("div",null,c.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),c.a.createElement("div",null,c.a.createElement("b",null,"My links"),": ",Object.keys(t.contacts).map(function(e){return c.a.createElement("div",{key:e,className:g.a.contact},c.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))})))}),j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,s=e.goToEditMode;return c.a.createElement("div",null,o&&c.a.createElement("div",null,c.a.createElement("button",{className:p.a.editButton,onClick:s},"Edit profile info")," "),c.a.createElement("div",{style:{fontSize:"20px"}},t.fullName),c.a.createElement(d,{status:a,updateStatus:n}),c.a.createElement("div",{style:{marginTop:"5px"}},c.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJobDescription),c.a.createElement("div",{style:{marginTop:"5px"}},c.a.createElement("b",null,"About me"),": ",t.aboutMe),c.a.createElement("div",{style:{marginTop:"5px"}},c.a.createElement("b",null,"My links"),": ",Object.keys(t.contacts).map(function(e){return c.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},k=function(e){var t=e.contactTitle,a=e.contactValue;return c.a.createElement("div",{className:p.a.contact},c.a.createElement("b",null,t),":",a)},_=function(e){var t=e.profile,a=e.isOwner,n=e.savePhoto,o=e.status,s=e.updateStatus,r=e.saveProfile,l=Object(i.useState)(!1),m=Object(u.a)(l,2),d=m[0],E=m[1];if(!t)return c.a.createElement(f.a,null);return c.a.createElement("div",null,c.a.createElement("div",{className:p.a.descriptionBlock},c.a.createElement("img",{src:t.photos.large||b.a,className:p.a.mainPhoto}),a&&c.a.createElement("input",{className:p.a.inputPhoto,type:"file",onChange:function(e){e.target.files&&e.target.files.length&&n(e.target.files[0])}}),d?c.a.createElement(O,{initialValues:t,profile:t,status:o,updateStatus:s,onSubmit:function(e){r(e).then(function(){E(!1)})}}):c.a.createElement(j,{goToEditMode:function(){E(!0)},profile:t,status:o,updateStatus:s,isOwner:a})))},S=a(196),y=a(33),N=a(397),I=a.n(N),w=a(399),x=a.n(w),M=function(e){return c.a.createElement("div",{className:x.a.item},c.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53104.png"}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"like")," ",e.likesCount))},T=Object(P.a)({form:"profileAddNewPostForm"})(function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,Object(v.c)("Your post","newPostText",[],v.b)),c.a.createElement("div",{style:{marginTop:"5px"}},c.a.createElement("button",null,"Add post")))}),B=function(e){var t=Object(y.a)(e.posts).reverse().map(function(e){return c.a.createElement(M,{key:e.id,message:e.message,id:e.id,likesCount:e.likesCount})});return c.a.createElement("div",{className:I.a.postsBlock},c.a.createElement("h1",{className:I.a.postsDev},"IN DEVELOPMENT STAGE"),c.a.createElement("h3",null,"My posts"),c.a.createElement(T,{onSubmit:function(t){e.addPost(t.newPostText)}}),c.a.createElement("div",{className:I.a.posts},t))},A=(c.a.memo(B),B),D=a(25),C=Object(D.b)(function(e){return{posts:e.profilePage.posts}},{addPost:S.a.addPost})(A),U=function(e){return c.a.createElement("div",null,c.a.createElement(_,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),c.a.createElement(C,null))},V=a(1),z=a(35),F=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=+this.props.params.userId;e||(e=this.props.authorizedUserId)||this.props.navigate("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.params.userId!==e.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(U,Object.assign({},this.props,{isOwner:!this.props.params.userId,profile:this.props.profile,status:this.props.status,savePhoto:this.props.savePhoto,updateStatus:this.props.updateStatus}))}}]),t}(c.a.Component);t.default=Object(z.d)(Object(D.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:S.d,getStatus:S.c,updateStatus:S.g,savePhoto:S.e,saveProfile:S.f}),function(e){return function(t){var a=Object(V.o)(),n=Object(V.m)();return c.a.createElement(e,Object.assign({},t,{params:a,navigate:n}))}})(F)}}]);
//# sourceMappingURL=1.f46d1502.chunk.js.map