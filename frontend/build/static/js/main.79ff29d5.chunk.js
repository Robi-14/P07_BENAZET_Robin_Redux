(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,n){},42:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(18),r=n.n(a),o=(n(42),n(2)),s=n(4),i=n(6),l=n.n(i),u="GET_USER",j="DELETE_USER",d=localStorage.getItem("Token"),m=(n(65),Object(c.createContext)()),b=n(12),O=n(5),f=(n(66),n(0));function h(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],j=document.querySelector(".message.error");return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),l.a.post("http://localhost:5000/api/user/login",{email:n,password:i,headers:{"Content-Type":"application/json"}}).then((function(e){localStorage.setItem("Token",e.data.token),window.location="/"})).catch((function(e){return j.innerHTML=e.response.data}))},id:"login-form",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return a(e.target.value)},value:n}),Object(f.jsx)("div",{className:"email error"}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return u(e.target.value)},value:i}),Object(f.jsx)("div",{className:"message error"}),Object(f.jsx)("input",{type:"submit",value:"Se connecter"})]})})}var p=n(13),x=n.n(p),g=n(15);n(69);function v(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(o.a)(r,2),i=s[0],u=s[1],j=Object(c.useState)(""),d=Object(o.a)(j,2),m=d[0],b=d[1],O=Object(c.useState)(""),p=Object(o.a)(O,2),v=p[0],N=p[1],y=Object(c.useState)(""),S=Object(o.a)(y,2),w=S[0],E=S[1],I=document.querySelector(".message.error"),C=function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l.a.post("http://localhost:5000/api/user/register",{lastname:i,firstname:m,email:v,password:w}).then((function(e){a(!0)})).catch((function(e){return I.innerHTML=e.response.data}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(f.Fragment,{children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h,{}),Object(f.jsx)("h4",{className:"ok",children:"Inscription reussi, veuillez-vous connecter!"})]}):Object(f.jsxs)("form",{onSubmit:function(e){return C(e)},id:"register-form",children:[Object(f.jsx)("label",{htmlFor:"name",children:"Nom"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Name",id:"name",value:i}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{htmlFor:"firstname",children:"Prenom"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:function(e){return b(e.target.value)},type:"text",placeholder:"Firstname",id:"firstname",value:m}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Email",id:"email",value:v}),Object(f.jsx)("br",{}),Object(f.jsx)("label",{htmlFor:"password",children:"Mot de passe"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{onChange:function(e){return E(e.target.value)},type:"password",placeholder:"Mot de passe",id:"password",value:w}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"message error"}),Object(f.jsx)("input",{type:"submit",value:"S'inscrire"})]})})}n(70);function N(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(o.a)(r,2),i=s[0],l=s[1],u=function(e){"register"===e.target.id?(l(!1),a(!0)):"login"===e.target.id&&(a(!1),l(!0))};return Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"log-form",children:Object(f.jsxs)("div",{className:"form-container",children:[Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{onClick:u,id:"register",className:n?"active-btn":null,children:"S'inscrire"}),Object(f.jsx)("li",{onClick:u,id:"login",className:i?"active-btn":null,children:"Se connecter"})]}),n&&Object(f.jsx)(v,{}),i&&Object(f.jsx)(h,{})]})})})}n(71),n(72);function y(){return Object(f.jsx)("div",{className:"leftnav-container",children:Object(f.jsxs)("div",{className:"icons",children:[Object(f.jsx)(b.b,{to:"/",exact:!0,activeClassName:"active-leftnav",children:Object(f.jsx)("img",{src:"./img/home.svg",alt:"Logo Home",className:"logo-leftnav"})}),Object(f.jsx)("br",{}),Object(f.jsx)(b.b,{to:"/profil",exact:!0,activeClassName:"active-leftnav",children:Object(f.jsx)("img",{src:"./img/profil.svg",alt:"Logo profil",className:"logo-leftnav"})})]})})}n(75);function S(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.userReducer})),n=function(){var t;e((function(e){return l.a.delete("http://localhost:5000/api/user/".concat(t),{headers:{Authorization:"Bearer ".concat(d)}}).catch((function(e){return console.log(e)}))})),localStorage.removeItem("Token"),window.location="/profil"};return Object(f.jsxs)("div",{className:"profilLogged-container",children:[Object(f.jsx)(y,{}),Object(f.jsx)("div",{className:"profilForm-container",children:Object(f.jsxs)("div",{className:"profilForm",children:[Object(f.jsx)("h3",{className:"titreprofil",children:"Votre Profil"}),Object(f.jsx)("h4",{className:"label",children:"Votre nom"}),Object(f.jsx)("p",{className:"infoprofil",children:t.lastname}),Object(f.jsx)("h4",{className:"label",children:"Votre pr\xe9nom"}),Object(f.jsx)("p",{className:"infoprofil",children:t.firstname}),Object(f.jsx)("h4",{className:"label",children:"Votre email"}),Object(f.jsx)("p",{className:"infoprofil",children:t.email}),Object(f.jsx)("button",{onClick:function(){window.confirm(" Voulez-vous vraiment supprimer ce message ? ")&&n()},className:"edit",children:"Supprimer le compte"})]})})]})}function w(){var e=Object(c.useContext)(m);return Object(f.jsx)("div",{className:"profil-page",children:e?Object(f.jsx)(S,{}):Object(f.jsxs)("div",{className:"log-container",children:[Object(f.jsx)("div",{className:"log",children:Object(f.jsx)(N,{})}),Object(f.jsx)("div",{className:"img-container",children:Object(f.jsx)("img",{src:"./img/icon-left-font.svg",alt:"Logo_groupomania",className:"logo-groupo"})})]})})}var E="GET_POSTS",I="DELETE_POST",C=localStorage.getItem("Token"),k=function(e){return function(t){return l.a.get("http://localhost:5000/api/messages/",{headers:{Authorization:"Bearer ".concat(C)}}).then((function(n){var c=n.data.slice(0,e);t({type:E,payload:c})})).catch((function(e){return console.log(e)}))}},T=function(e,t){return function(n){return l.a.put("http://localhost:5000/api/messages/".concat(e),t,{headers:{Authorization:"Bearer ".concat(C)}})}},D=function(e){return function(t){return l.a.post("http://localhost:5000/api/messages/new",e,{headers:{Authorization:"Bearer ".concat(C)}})}};function F(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.c)((function(e){return e.userReducer})),d=Object(s.b)(),m=function(){var e=Object(g.a)(x.a.mark((function e(t){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!n&&!l){e.next=11;break}return(c=new FormData).append("content",n),c.append("attachment",l),e.next=7,d(D(c));case 7:d(k()),a(""),u(),document.getElementById("file-upload").value="";case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"post-form-container",children:Object(f.jsxs)("form",{action:"",onSubmit:m,children:[Object(f.jsx)("textarea",{name:"textpost",className:"text-post",placeholder:"Quoi de neuf, ".concat(j.firstname),onChange:function(e){return a(e.target.value)},value:n}),Object(f.jsxs)("div",{className:"attchement-picture",children:[Object(f.jsx)("img",{src:"./img/images.svg",alt:"images",className:"btn-img"}),Object(f.jsx)("input",{type:"file",id:"file-upload",name:"attachment",onChange:function(e){return function(e){u(e.target.files[0])}(e)}})]}),Object(f.jsx)("input",{type:"submit",value:"Publier"})]})})}var R=function(e){return new Date(e).toLocaleDateString("fr-FR",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"})},M=(n(33),"GET_COMMENTS"),z="EDDIT_COMMENT",A="DELETE_COMMENT",B=function(e){var t=localStorage.getItem("Token");return function(n){return l.a.get("http://localhost:5000/api/messages/".concat(e,"}/commentaires"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){n({type:M,payload:e.data})})).catch((function(e){return console.log(e)}))}};function _(e){var t=e.comment,n=e.postId,a=Object(c.useState)(!1),r=Object(o.a)(a,2),i=r[0],u=r[1],j=Object(c.useState)(!1),d=Object(o.a)(j,2),b=d[0],O=d[1],h=Object(c.useState)(""),p=Object(o.a)(h,2),x=p[0],g=p[1],v=Object(c.useContext)(m),N=Object(s.b)(),y=function(){N(function(e,t){var n=localStorage.getItem("Token");return function(c){return l.a.delete("http://localhost:5000/api/messages/".concat(e,"/commentaires/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}}).then((function(n){c({type:A,payload:{postId:e,commentId:t}})})).catch((function(e){return console.log(e)}))}}(n,t.id)).then((function(){return N(B())}))};return Object(c.useEffect)((function(){v===t.userId&&u(!0)}),[v,t.userId]),Object(f.jsxs)("div",{children:[i&&!1===b&&Object(f.jsxs)("div",{className:"edit-comment",children:[Object(f.jsx)("div",{onClick:function(){return O(!b)},children:Object(f.jsx)("img",{src:"./img/edit.svg",alt:"edit",className:"btn-img"})}),Object(f.jsx)("div",{onClick:function(){window.confirm(" Voulez-vous vraiment supprimer ce message ? ")&&y()},children:Object(f.jsx)("img",{src:"./img/trash.svg",alt:"delete",className:"btn-img"})})]}),i&&b&&Object(f.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),x&&(N(function(e,t,n){var c=localStorage.getItem("Token");return function(a){return l.a.put("http://localhost:5000/api/messages/".concat(e,"/commentaires/").concat(t),{content:n},{headers:{Authorization:"Bearer ".concat(c)}}).then((function(c){a({type:z,payload:{content:n,commentId:t,postId:e}})})).catch((function(e){return console.log(e)}))}}(n,t.id,x)).then((function(){return N(B())})),g(""),O(!1))},className:"edit-comment-form",children:[Object(f.jsx)("input",{type:"text",name:"text",className:"textcomment edit-comment",onChange:function(e){return g(e.target.value)},defaultValue:t.content}),Object(f.jsxs)("div",{className:"edit-btn",children:[Object(f.jsx)("label",{htmlFor:"text",onClick:function(){return O(!b)},className:"label-edit",children:"annuler"}),Object(f.jsx)("input",{type:"submit",value:"Modifier",className:"submit-edit"})]})]})]})}function L(e){var t=e.post,n=Object(c.useState)(""),a=Object(o.a)(n,2),r=a[0],i=a[1],u=Object(s.b)(),j=Object(s.c)((function(e){return e.commentReducer})),d=Object(s.c)((function(e){return e.usersReducer}));console.log(t.id),Object(c.useEffect)((function(){u(B(t.id))}),[u,t.id]);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:!!j[0]&&j.map((function(e){return t.id===e.messageId?Object(f.jsxs)("div",{className:"comments-container",children:[Object(f.jsxs)("div",{className:"user_date",children:[Object(f.jsxs)("p",{children:[d.map((function(t){return t.id===e.userId?t.firstname:null})).join("")," ",d.map((function(t){return t.id===e.userId?t.lastname:null})).join("")]}),Object(f.jsxs)("p",{children:["Post\xe9 le ",R(e.createdAt)]})]}),Object(f.jsxs)("div",{className:"content_attachment",children:[Object(f.jsx)("p",{className:"content",children:e.content}),t.attachement&&Object(f.jsx)("img",{src:t.attachement,alt:"card-attachement",className:"card-attachement"})]}),Object(f.jsx)(_,{comment:e,postId:t.id})]},e.id):null}))}),Object(f.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),r&&u(function(e,t){var n=localStorage.getItem("Token");return function(c){return l.a.post("http://localhost:5000/api/messages/".concat(e,"/commentaires"),{content:t},{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){c({type:"ADD_COMMENT",payload:{postId:e}})})).catch((function(e){return console.log(e)}))}}(t.id,r)).then((function(){return u(B())})).then((function(){return i("")}))},className:"comment-form",children:[Object(f.jsx)("input",{type:"text",name:"text",onChange:function(e){return i(e.target.value)},value:r,placeholder:"Ecrire un commentaire",className:"textcomment"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"submit",value:"Envoyer"})]})]},j.id)}function V(e){var t=Object(s.b)(),n=function(){var n;t((n=e.id,function(e){return l.a.delete("http://localhost:5000/api/messages/".concat(n),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(t){e({type:I,payload:{postId:n}})})).catch((function(e){return console.log(e)}))}))};return Object(f.jsx)("div",{onClick:function(){window.confirm(" Voulez-vous vraiment supprimer ce message ? ")&&n()},children:Object(f.jsx)("img",{src:"./img/trash.svg",alt:"delete",className:"btn-img"})})}function P(e){var t=e.post,n=Object(s.c)((function(e){return e.usersReducer})),a=Object(s.c)((function(e){return e.userReducer})),r=Object(s.b)(),i=Object(c.useState)(!1),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(c.useState)(null),m=Object(o.a)(d,2),b=m[0],O=m[1],h=Object(c.useState)(!1),p=Object(o.a)(h,2),v=p[0],N=p[1],y=Object(c.useState)(),S=Object(o.a)(y,2),w=S[0],E=S[1],I=function(){var e=Object(g.a)(x.a.mark((function e(n){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b&&!w){e.next=7;break}return(c=new FormData).append("content",b),c.append("attachment",w),e.next=6,r(T(t.id,c));case 6:r(k());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"card-container",children:[Object(f.jsxs)("div",{className:"user_date",children:[Object(f.jsxs)("p",{children:[!!n[0]&&n.map((function(e){return e.id===t.UserId?e.firstname:null})).join("")," ",!!n[0]&&n.map((function(e){return e.id===t.UserId?e.lastname:null})).join("")]}),Object(f.jsxs)("p",{children:["Post\xe9 le ",R(t.createdAt)]})]}),Object(f.jsxs)("div",{className:"content_attachment",children:[u?Object(f.jsxs)("div",{className:"updatde-post",children:[Object(f.jsx)("textarea",{defaultValue:t.content,onChange:function(e){return O(e.target.value)}}),Object(f.jsxs)("div",{className:"button-container",children:[Object(f.jsx)("button",{onClick:function(e){return j(!1),void I()},className:"edit",children:"Modifier"}),Object(f.jsx)("input",{type:"file",id:"file-upload",name:"attachment",onChange:function(e){return function(e){E(e.target.files[0])}(e)}})]})]}):Object(f.jsx)("div",{children:Object(f.jsx)("p",{className:"content",children:t.content})}),t.attachment&&Object(f.jsx)("img",{src:t.attachment,alt:"card-attachement",className:"card-attachement"})]}),Object(f.jsxs)("div",{className:"button",children:[Object(f.jsx)("img",{src:"./img/comment.svg",alt:"icon comment",className:"btn-img",onClick:function(){return N(!v)}}),a.isAdmin||a.id===t.UserId?Object(f.jsxs)("div",{className:"button-container",children:[Object(f.jsxs)("div",{onClick:function(){return j(!u)},children:[Object(f.jsx)("img",{src:"/img/edit.svg",alt:"edit",className:"btn-img"})," "]}),Object(f.jsx)(V,{id:t.id})]}):""]}),v&&Object(f.jsx)(L,{post:t})]},t.id)}n(76);function U(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(10),i=Object(o.a)(r,2),l=i[0],u=i[1],j=Object(s.b)(),d=Object(s.c)((function(e){return e.postReducer})),m=function(){window.innerHeight+document.documentElement.scrollTop+1>document.scrollingElement.scrollHeight&&a(!0)};return Object(c.useEffect)((function(){return n&&(j(k(l)),a(!1),u(l+5)),window.addEventListener("scroll",m),function(){return window.removeEventListener("scroll",m)}}),[n,l,j]),Object(f.jsx)("div",{className:"thread-container",children:Object(f.jsx)("div",{children:!!d[0]&&d.map((function(e){return Object(f.jsx)(P,{post:e},e.id)}))})})}n(77);function H(){var e=Object(c.useContext)(m);return Object(f.jsx)("div",{children:e?Object(f.jsxs)("div",{className:"home",children:[Object(f.jsx)(y,{}),Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)(F,{}),Object(f.jsx)(U,{})]})]}):Object(f.jsx)(w,{})})}n(78);function G(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("img",{src:"./img/log-out.svg",alt:"log-out",className:"logo-log",onClick:function(){localStorage.removeItem("Token"),window.location="/profil"}})})}n(79);function q(){var e=Object(c.useContext)(m),t=Object(s.c)((function(e){return e.userReducer}));return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("nav",{children:Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsx)(b.b,{exact:!0,to:"/",children:Object(f.jsx)("img",{src:"./img/logoBlack.svg",alt:"Logo groupomania",className:"img-log"})}),e?Object(f.jsxs)("div",{className:"profil",children:[Object(f.jsx)(b.b,{exact:!0,to:"/profil",children:Object(f.jsxs)("p",{className:"welcome",children:[t.firstname," ",t.lastname]})}),Object(f.jsx)(G,{})]}):Object(f.jsx)("div",{className:"profil",children:Object(f.jsx)(b.b,{exact:!0,to:"/profil",children:Object(f.jsx)("img",{src:"./img/log-in.svg",alt:"log-in",className:"logo-log"})})})]})})})}function J(){return Object(f.jsxs)(b.a,{children:[Object(f.jsx)(q,{}),Object(f.jsxs)(O.d,{children:[Object(f.jsx)(O.b,{path:"/",exact:!0,component:H}),Object(f.jsx)(O.b,{path:"/profil",exact:!0,component:w}),Object(f.jsx)(O.a,{to:"/"})]})]})}var Q=n(35);var W=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),i=Object(o.a)(r,2),j=i[0],b=i[1],O=Object(s.b)();return Object(c.useEffect)((function(){var e=localStorage.getItem("Token");if(e){var t=Object(Q.a)(e),n=t.exp;a(n);var c=t.userId;b(c),j&&O(function(e){return function(t){return l.a.get("http://localhost:5000/api/user/".concat(e),{headers:{Authorization:"Bearer ".concat(d)}}).then((function(e){t({type:u,payload:e.data})})).catch((function(e){return console.log(e)}))}}(j)),Date.now()>=1e3*n&&(localStorage.removeItem("Token"),window.location="/profil")}}),[j,O,n]),Object(f.jsx)(m.Provider,{value:j,children:Object(f.jsx)(J,{})})},K=n(16),X=n(36),Y={};var Z={};var $="GET_USERS",ee=localStorage.getItem("Token"),te={};var ne=n(24),ce={};var ae=Object(K.combineReducers)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;case j:return e.filter((function(e){return e.id!==t.payload.uid}));default:return e}},postReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.payload;case I:return e.filter((function(e){return e.id!==t.payload.postId}));default:return e}},usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;return t.type===$?t.payload:e},commentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return t.payload;case z:return e.map((function(e){return e.id===t.payload.postId?Object(ne.a)(Object(ne.a)({},e),{},{content:t.payload.content}):e}));case A:return e.map((function(n){return n.id===t.payload.comment.id?e.filter((function(e){return e.id!==t.payload.commentId})):n}));default:return e}}}),re=n(37),oe=Object(K.createStore)(ae,Object(re.composeWithDevTools)(Object(K.applyMiddleware)(X.a)));oe.dispatch((function(e){return l.a.get("http://localhost:5000/api/user/",{headers:{Authorization:"Bearer ".concat(ee)}}).then((function(t){e({type:$,payload:t.data})})).catch((function(e){return console.log(e)}))})),r.a.render(Object(f.jsx)(s.a,{store:oe,children:Object(f.jsx)(W,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.79ff29d5.chunk.js.map