(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{293:function(t,e,a){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1tjGp"}},295:function(t,e,a){t.exports={postsBlock:"MyPosts_postsBlock__1lujP",posts:"MyPosts_posts__r0Bs-"}},297:function(t,e,a){t.exports={item:"Post_item__2MqFS"}},299:function(t,e,a){"use strict";a.r(e);var n=a(17),s=a(18),o=a(26),r=a(24),u=a(25),c=a(1),i=a.n(c),l=a(293),p=a.n(l),m=a(51),d=a(8),f=function(t){var e=Object(c.useState)(!1),a=Object(d.a)(e,2),n=a[0],s=a[1],o=Object(c.useState)(t.status),r=Object(d.a)(o,2),u=r[0],l=r[1];Object(c.useEffect)(function(){l(t.status)},[t.status]);return i.a.createElement("div",null,!n&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){s(!0)}},t.status||"------")),n&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(t){l(t.target.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},value:u})))},b=function(t){var e=t.profile,a=t.status,n=t.updateStatus;return e?i.a.createElement("div",null,i.a.createElement("div",{className:p.a.descriptionBlock},i.a.createElement("img",{src:e.photos.large}),i.a.createElement(f,{status:a,updateStatus:n}))):i.a.createElement(m.a,null)},E=a(103),h=a(295),v=a.n(h),g=a(297),j=a.n(g),O=function(t){return i.a.createElement("div",{className:j.a.item},i.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/53/53104.png"}),t.message,i.a.createElement("div",null,i.a.createElement("span",null,"like")," ",t.likesCount))},P=a(76),S=a(77),k=a(94),_=a(36),w=i.a.memo(function(t){var e=t.posts.map(function(t){return i.a.createElement(O,{message:t.message,id:t.id,likesCount:t.likesCount})});return i.a.createElement("div",{className:v.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(x,{onSubmit:function(e){t.addPost(e.newPostText)}}),i.a.createElement("div",{className:v.a.posts},e))}),B=Object(k.a)(10),x=Object(S.a)({form:"profileAddNewPostForm"})(function(t){return i.a.createElement("form",{onSubmit:t.handleSubmit},i.a.createElement("div",null,i.a.createElement(P.a,{name:"newPostText",component:_.b,placeholder:"Post message",validate:[k.b,B]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post")))}),y=w,C=a(20),I=Object(C.b)(function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}},function(t){return{addPost:function(e){t(Object(E.a)(e))}}})(y),M=function(t){return i.a.createElement("div",null,i.a.createElement(b,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),i.a.createElement(I,null))},N=a(0),A=a(13),T=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this.props.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return i.a.createElement(M,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(i.a.Component);e.default=Object(A.d)(Object(C.b)(function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}},{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),function(t){return function(e){var a=Object(N.o)();return i.a.createElement(t,Object.assign({},e,{params:a}))}})(T)}}]);
//# sourceMappingURL=1.1cf18b39.chunk.js.map