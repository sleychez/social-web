(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{389:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__2xYGy",mainPhoto:"ProfileInfo_mainPhoto__2c0EC",contact:"ProfileInfo_contact__38m9h"}},391:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1yk8U",posts:"MyPosts_posts__2ibhY"}},393:function(e,t,a){e.exports={item:"Post_item__1TVmr"}},403:function(e,t,a){"use strict";a.r(t);var n=a(47),o=a(52),r=a(110),s=a(82),l=a(106),u=a(0),i=a.n(u),c=a(15),m=a(389),p=a.n(m),f=a(92),d=function(e){var t=Object(u.useState)(!1),a=Object(c.a)(t,2),n=a[0],o=a[1],r=Object(u.useState)(e.status),s=Object(c.a)(r,2),l=s[0],m=s[1];Object(u.useEffect)(function(){m(e.status)},[e.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){o(!0)}},e.status||"------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){m(e.target.value)},autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(l)},value:l})))},b=a(189),E=a.n(b),v=a(64),h=a(107),g=a.n(h),O=a(154),P=Object(O.a)({form:"edit-profile"})(function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.handleSubmit,r=e.error;return i.a.createElement("form",{onSubmit:o},i.a.createElement("div",null,i.a.createElement("button",null,"save")," "),r&&i.a.createElement("div",{className:g.a.formSummaryError},r),i.a.createElement("div",null,Object(v.c)("Full name","fullName",[],v.a)),i.a.createElement(d,{status:a,updateStatus:n}),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),":",Object(v.c)("Looking for a job","lookingForAJobDescription",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),":",Object(v.c)("About me","aboutMe",[],v.b)),i.a.createElement("div",null,i.a.createElement("b",null,"My links"),": ",Object.keys(t.contacts).map(function(e){return i.a.createElement("div",{key:e,className:g.a.contact},i.a.createElement("b",null,e,": ",Object(v.c)(e,"contacts."+e,[],v.a)))})))}),j=function(e){var t=e.profile,a=e.status,n=e.updateStatus,o=e.isOwner,r=e.goToEditMode;return i.a.createElement("div",null,o&&i.a.createElement("div",null," ",i.a.createElement("button",{onClick:r},"edit")," "),i.a.createElement("div",null,t.fullName),i.a.createElement(d,{status:a,updateStatus:n}),i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJobDescription),i.a.createElement("div",null,i.a.createElement("b",null,"About me"),": ",t.aboutMe),i.a.createElement("div",null,i.a.createElement("b",null,"My links"),": ",Object.keys(t.contacts).map(function(e){return i.a.createElement(k,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))},k=function(e){var t=e.contactTitle,a=e.contactValue;return i.a.createElement("div",{className:p.a.contact},i.a.createElement("b",null,t),":",a)},S=function(e){var t=e.profile,a=e.isOwner,n=e.savePhoto,o=e.status,r=e.updateStatus,s=e.saveProfile,l=Object(u.useState)(!1),m=Object(c.a)(l,2),d=m[0],b=m[1];if(!t)return i.a.createElement(f.a,null);return i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:t.photos.large||E.a,className:p.a.mainPhoto}),a&&i.a.createElement("input",{type:"file",onChange:function(e){e.target.files&&e.target.files.length&&n(e.target.files[0])}}),d?i.a.createElement(P,{initialValues:t,profile:t,status:o,updateStatus:r,onSubmit:function(e){s(e).then(function(){b(!1)})}}):i.a.createElement(j,{goToEditMode:function(){b(!0)},profile:t,status:o,updateStatus:r,isOwner:a})))},y=a(350),_=a(33),w=a(391),I=a.n(w),N=a(393),M=a.n(N),A=function(e){return i.a.createElement("div",{className:M.a.item},i.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53104.png"}),e.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",e.likesCount))},C=Object(O.a)({form:"profileAddNewPostForm"})(function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,Object(v.c)("Your post","newPostText",[],v.a)),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),U=function(e){var t=Object(_.a)(e.posts).reverse().map(function(e){return i.a.createElement(A,{key:e.id,message:e.message,id:e.id,likesCount:e.likesCount})});return i.a.createElement("div",{className:I.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(C,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:I.a.posts},t))},x=(i.a.memo(U),U),B=a(25),T=Object(B.b)(function(e){return{posts:e.profilePage.posts}},{addPost:y.a.addPost})(x),D=function(e){return i.a.createElement("div",null,i.a.createElement(S,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),i.a.createElement(T,null))},F=a(1),J=a(35),V=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"refreshProfile",value:function(){var e=+this.props.params.userId;e||(e=this.props.authorizedUserId)||this.props.navigate("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.params.userId!==e.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return i.a.createElement(D,Object.assign({},this.props,{isOwner:!this.props.params.userId,profile:this.props.profile,status:this.props.status,savePhoto:this.props.savePhoto,updateStatus:this.props.updateStatus}))}}]),t}(i.a.Component);t.default=Object(J.d)(Object(B.b)(function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}},{getUserProfile:y.d,getStatus:y.c,updateStatus:y.g,savePhoto:y.e,saveProfile:y.f}),function(e){return function(t){var a=Object(F.o)(),n=Object(F.m)();return i.a.createElement(e,Object.assign({},t,{params:a,navigate:n}))}})(V)}}]);
//# sourceMappingURL=1.7dcf2b2d.chunk.js.map