(this.webpackJsonpkimwitter=this.webpackJsonpkimwitter||[]).push([[0],{47:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),a=n(37),s=n.n(a),i=n(22),u=n(11),j=n(31),o=n(12),b=n(0),l=n.n(b),O=n(2),d=n(38),f=n(26),h=n(39),p=n(27),x=(Object(d.a)({apiKey:"AIzaSyCoOs70bYESeRT4zLNi3JsTbofEysWCO7w",authDomain:"kimwitter-4bc3a.firebaseapp.com",projectId:"kimwitter-4bc3a",storageBucket:"kimwitter-4bc3a.appspot.com",messagingSenderId:"342382103887",appId:"1:342382103887:web:4ab2f41025b8f13a2e093a"}),Object(p.d)()),v=Object(h.a)(),m=p.f,g=p.c,w=p.e,k=new p.b,y=new p.a,C=p.g,D=Object(f.c)(),S=n(6);function U(e){var t=e.refreshUserData,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(""),j=Object(u.a)(i,2),o=j[0],b=j[1],d=Object(c.useState)(!1),f=Object(u.a)(d,2),h=f[0],p=f[1],v=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?s(c):"password"===n&&b(c)},w=function(){var e=Object(O.a)(l.a.mark((function e(n){var c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,!h){e.next=8;break}return e.next=5,g(x,a,o);case 5:e.sent,e.next=11;break;case 8:return e.next=10,m(x,a,o);case 10:e.sent;case 11:t(),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(1),c=e.t0.code,r=e.t0.message,console.log(c,r);case 19:return e.prev=19,e.finish(19);case 21:case"end":return e.stop()}}),e,null,[[1,14,19,21]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("button",{onClick:function(){return p((function(e){return!e}))},children:h?"Log in":"Create New Account"}),Object(S.jsxs)("form",{onSubmit:w,children:[Object(S.jsx)("input",{type:"email",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0,value:a,onChange:v,name:"email"}),Object(S.jsx)("input",{type:"password",placeholder:"********",value:o,onChange:v,name:"password"}),Object(S.jsx)("input",{type:"submit",value:h?"Create New Account":"Login"})]})]})}var I=n(25);function L(e){var t=function(){var e=Object(O.a)(l.a.mark((function e(t){var n,c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.name,e.prev=1,"google"===n?c=k:"gh"===n&&(c=y),e.next=5,Object(I.g)(x,c);case 5:e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),r=e.t0.code,a=e.t0.message,console.log(r,a);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[1,7,12,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{name:"google",onClick:t,children:"Continue with google"}),Object(S.jsx)("button",{name:"gh",onClick:t,children:"Continue with github"})]})}function N(e){var t=e.userObj,n=e.refreshUserData,r=Object(o.g)();return Object(c.useEffect)((function(){t&&r("/")}),[t]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(U,{refreshUserData:n}),Object(S.jsx)(L,{refreshUserData:n})]})}var E=n(17),A=n(24);function F(e){var t=e.kweetObj,n=e.isOwner,r=Object(c.useState)(!1),a=Object(u.a)(r,2),s=a[0],j=a[1],o=Object(c.useState)(t.text),b=Object(u.a)(o,2),d=b[0],f=b[1],h=function(){var e=Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are You suer you want to delete this kweet?")){e.next=15;break}return e.prev=2,e.next=5,Object(E.c)(Object(E.d)(D,"kweets",t.id));case 5:if(""===t.attachmentUrl){e.next=8;break}return e.next=8,Object(A.a)(Object(A.d)(v,t.attachmentUrl));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:e.next=15;break;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){j((function(e){return!e}))},x=function(){var e=Object(O.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,Object(E.j)(Object(E.d)(D,"kweets",t.id),Object(i.a)(Object(i.a)({},t),{},{text:d,createAt:Date.now()}));case 4:j(!1),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{children:[t.attachmentUrl&&Object(S.jsx)("img",{src:t.attachmentUrl,alt:""}),Object(S.jsx)("h4",{children:t.text}),n&&Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{onClick:h,children:"Delete Kweet"}),Object(S.jsx)("button",{onClick:p,children:"Edit Kweet"})]}),s&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{onSubmit:x,children:[Object(S.jsx)("input",{type:"text",value:d,onChange:function(e){var t=e.target.value;console.log(t),f(t)}}),Object(S.jsx)("input",{type:"submit",value:"edit"})]}),Object(S.jsx)("button",{onClick:p,children:"Cancle"})]})]})}var z=n(49);function J(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(null),j=Object(u.a)(i,2),o=j[0],b=j[1],d=function(){var e=Object(O.a)(l.a.mark((function e(n){var c,r,i,u,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),c="",!o){e.next=10;break}return r=Object(A.d)(v,"".concat(t.uid,"/").concat(Object(z.a)())),e.next=6,Object(A.e)(r,o,"data_url");case 6:return i=e.sent,e.next=9,Object(A.b)(i.ref);case 9:c=e.sent;case 10:return u={text:a,createAt:Date.now(),creatorId:t.uid,attachmentUrl:c},e.prev=11,e.next=14,Object(E.a)(Object(E.b)(D,"kweets"),u);case 14:j=e.sent,console.log("Document written with ID: ",j.id),b(""),s(""),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(11),console.error("Error adding document: ",e.t0);case 23:case"end":return e.stop()}}),e,null,[[11,20]])})));return function(t){return e.apply(this,arguments)}}(),f=Object(c.useCallback)((function(e){var t=new FileReader;t.onloadend=function(e){console.log(e);var t=e.currentTarget.result;b(t)},t.readAsDataURL(e)}),[]);return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("form",{onSubmit:d,children:[Object(S.jsx)("input",{type:"text",placeholder:"what's on your mind?",maxLength:120,onChange:function(e){var t=e.target.value;s(t)},value:a}),Object(S.jsx)("input",{type:"submit",value:"kimweet"}),Object(S.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files;if(t){var n=t[0];f(n)}}}),o&&Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:o,width:"50px",height:"50px"}),Object(S.jsx)("button",{type:"button",onClick:function(){b(null)},children:"Clear"})]})]})})}function K(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(u.a)(n,2),a=r[0],s=r[1],j=Object(f.a)(D,"kweets"),o=Object(f.f)(j,Object(f.e)("createAt","desc"));return Object(c.useEffect)(Object(O.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(f.d)(o,(function(e){var t=e.docs.map((function(e){return console.log(e),Object(i.a)({id:e.id},e.data())}));s(t)}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)(J,{userObj:t}),Object(S.jsx)("div",{children:a&&a.map((function(e){return Object(S.jsx)(F,{kweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})}function R(e){var t=e.userObj;return Object(S.jsx)("div",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(j.b,{to:"/",children:"Home"})}),Object(S.jsx)("li",{children:Object(S.jsxs)(j.b,{to:"/profile",children:[t&&null===t.displayName?"default Name ":t.displayName,"profile"]})})]})})}function T(e){var t=e.refreshUserData,n=e.userObj,r=Object(o.g)(),a=Object(c.useState)(n.displayName),s=Object(u.a)(a,2),j=s[0],b=s[1],d=Object(c.useState)([]),f=Object(u.a)(d,2),h=f[0],p=f[1],v=function(){var e=Object(O.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],c=Object(E.b)(D,"kweets"),r=Object(E.i)(c,Object(E.h)("createAt","desc"),Object(E.k)("creatorId","==",t)),e.next=5,Object(E.e)(r);case 5:e.sent.forEach((function(e){var t=Object(i.a)({id:e.id},e.data());n.push(t)})),p([].concat(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(O.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),n.displayName!==j){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(I.i)(x.currentUser,{displayName:j});case 5:t();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){v(n.uid)}),[]),Object(S.jsxs)("div",{children:["profile",Object(S.jsx)("button",{onClick:function(){C(x),r("/login")},children:"Logout"}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{children:"\ub0b4 \ud504\ub85c\ud544"}),Object(S.jsxs)("form",{onSubmit:m,children:[Object(S.jsx)("input",{type:"text",placeholder:"set your new display name",value:j,onChange:function(e){var t=e.target.value;console.log(t),b(t)}}),Object(S.jsx)("input",{type:"submit",value:"change"})]})]}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"\uc0c8\ub85c\uace0\uce68"}),Object(S.jsx)("button",{onClick:function(){v(n.uid)},children:"\uc0c8\ub85c\uace0\uce68"})]}),Object(S.jsx)("h3",{children:"\ub0b4\uac00 \uc4f4 kweets"}),h&&h.length>0&&Object(S.jsx)("div",{children:h.map((function(e){return Object(S.jsx)(F,{kweetObj:e,isOwner:!0},e.id)}))})]})]})}function B(e){var t=e.isLoggedIn,n=e.children,c=Object(o.f)();return t?n:Object(S.jsx)(o.a,{to:"/login",state:{from:c}})}function Y(e){var t=e.refreshUserData,n=e.isLoggedIn,c=e.userObj;return Object(S.jsx)(j.a,{children:Object(S.jsxs)(S.Fragment,{children:[n&&Object(S.jsx)(R,{userObj:c}),Object(S.jsxs)(o.d,{children:[Object(S.jsx)(o.b,{exact:!0,path:"/",element:Object(S.jsx)(B,{isLoggedIn:n,children:Object(S.jsx)(K,{userObj:c})})}),Object(S.jsx)(o.b,{exact:!0,path:"/profile",element:Object(S.jsx)(B,{isLoggedIn:n,children:Object(S.jsx)(T,{refreshUserData:t,userObj:c})})}),Object(S.jsx)(o.b,{exact:!0,path:"/login",element:Object(S.jsx)(N,{refreshUserData:t,userObj:c})})]})]})})}var q=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(u.a)(a,2),j=s[0],o=s[1],b=Object(c.useState)(null),l=Object(u.a)(b,2),O=l[0],d=l[1];return Object(c.useEffect)((function(){return w(x,(function(e){e?(null===e.displayName&&Object(I.i)(e,{displayName:"Default"}),d(Object(i.a)({},e)),o(!0)):(o(!1),d(null)),r(!0)})),function(){}}),[]),Object(S.jsxs)(S.Fragment,{children:[n?Object(S.jsx)(Y,{refreshUserData:function(){d(Object(i.a)({},x.currentUser))},isLoggedIn:j,userObj:O}):"Initailizing...",Object(S.jsx)("footer",{children:"\xa9 footer"})]})};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(q,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0f33569d.chunk.js.map