(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(11),a=c.n(s),r=c(2),o=(c(20),c(0)),i=function(e){var t=e.text,c=e.delay,s=Object(n.useState)(""),a=Object(r.a)(s,2),i=a[0],l=a[1];return Object(n.useEffect)((function(){var e=0,n=setInterval((function(){e<t.length?(l((function(c){return c+t.charAt(e)})),e++):clearInterval(n)}),c);return function(){clearInterval(n)}}),[t,c]),Object(o.jsx)("span",{className:"Typewriter",dangerouslySetInnerHTML:{__html:i}})},l=c.p+"static/media/edith.f180005b.png";c(22);var j=function(e){return Object(o.jsxs)("div",{children:[!e.is_user&&Object(o.jsxs)("div",{className:"chatgp",children:[Object(o.jsx)("img",{src:l,width:"40px",alt:""}),Object(o.jsx)("div",{className:"alert alert-success chat_message",role:"alert",children:Object(o.jsx)(i,{text:e.text,delay:25})})]}),e.is_user&&Object(o.jsxs)("div",{className:"user",children:[Object(o.jsx)("p",{className:" odamoti_user ",children:"\u0412\u044b"}),Object(o.jsx)("div",{class:"alert alert-success user_message",role:"alert",children:e.text})]}),Object(o.jsx)("div",{className:"joy"})]})};c(23);var h=function(){Object(n.useEffect)((function(){fetch("https://edithai.pythonanywhere.com/chat/edith/v1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:'\u0441\u0434\u0435\u043b\u0430\u0439 \u043f\u0440\u0438\u0432\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f ChatGPT \u043d\u043e \u0437\u0430\u043c\u0435\u043d\u044f\u0435\u0442 \u0441\u043b\u043e\u0432\u043e ChatGPT \u0438\u043b\u0438 \u043f\u043e\u0445\u043e\u0436\u0435 \u043d\u0430 \u043d\u0435\u0433\u043e \u043d\u0430 "Edith AI"'})}).then((function(e){return e.json()})).then((function(e){d(e[0].Ansver),y(e[0].Ansver)}))}),[]);var e=Object(n.useState)("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"),t=Object(r.a)(e,2),c=(t[0],t[1],Object(n.useState)("")),s=Object(r.a)(c,2),a=s[0],i=s[1],h=Object(n.useState)(""),u=Object(r.a)(h,2),d=(u[0],u[1]),b=Object(n.useState)("1"),O=Object(r.a)(b,2),m=O[0],p=(O[1],Object(n.useState)([])),f=Object(r.a)(p,2),x=f[0],v=f[1];function g(){var e=x;if(0==a.length)console.log("Antithiog");else{var t=[];t.push(a),t.push("user"),e.push(t),function(e,t){"1"==m?20:"2"==m?100:"3"==m?500:"4"==m&&1e3;fetch("https://edithai.pythonanywhere.com/chat/edith/v1",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:e})}).then((function(e){return e.json()})).then((function(e){d(e[0].Ansver),y(e[0].Ansver)}))}(a),v(e),i("")}}function y(e){var t=x,c=[];c.push(e),c.push("chat"),t.push(c),v(t),c=[],d("")}return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"log_out",onClick:function(){window.confirm("\u0432\u044b\u0439\u0442\u0438 \u0438\u0437 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 ?")&&(localStorage.clear(),window.location.reload())},children:"\u0412\u044b\u0439\u0442\u0438"}),Object(o.jsxs)("div",{className:"fleks",children:[Object(o.jsx)("h1",{className:"header",children:"Edith AI"}),Object(o.jsx)("img",{src:l,alt:"",width:"50px",height:"50px"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"text-center",children:localStorage.getItem("user")}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"",children:[x.map((function(e,t){return"user"==e[1]?Object(o.jsx)(j,{is_user:!0,text:e[0]},t):Object(o.jsx)(j,{is_user:!1,text:e[0]},t)})),x.length>=5&&Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:"."}),Object(o.jsx)("div",{children:"."})]})]}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{class:"input-group mb-3 to_vniz",children:[Object(o.jsx)("input",{type:"text",class:"form-control",placeholder:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0441\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t=e.target.value;i(t)},onKeyUp:function(e){"Enter"==e.key&&g()},value:a,"aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0441\u043e\u0431\u0449\u0435\u043d\u0438\u044f","aria-describedby":"button-addon2"}),Object(o.jsx)("button",{onClick:g,class:"btn btn-outline-secondary",type:"submit",id:"button-addon2",children:Object(o.jsx)("i",{class:"fa fa-paper-plane-o"})})]})})]})};c(24);var u=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),l=i[0],j=i[1],h=Object(n.useState)(""),u=Object(r.a)(h,2),d=u[0],b=u[1],O=Object(n.useState)(""),m=Object(r.a)(O,2),p=m[0],f=m[1],x=Object(n.useState)(""),v=Object(r.a)(x,2),g=v[0],y=v[1],S=Object(n.useState)(""),N=Object(r.a)(S,2),w=N[0],C=N[1],I=Object(n.useState)(""),A=Object(r.a)(I,2),_=A[0],T=A[1];return Object(o.jsxs)("div",{className:"",children:[!c&&Object(o.jsxs)("div",{className:"forma",children:[Object(o.jsx)("h1",{children:"Edith Ai"}),Object(o.jsx)("h1",{className:"",children:"A\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(o.jsx)("input",{type:"text",className:"form form-control",onChange:function(e){var t=e.target.value;j(t)},value:l,placeholder:"Login"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",onChange:function(e){var t=e.target.value;b(t)},value:d,className:"form form-control",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(o.jsx)("p",{children:_}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:[" \u0435\u0449\u0451 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 ? ",Object(o.jsx)("i",{className:"blue",onClick:function(){s(!c)},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(o.jsx)("button",{onClick:function(){return 0==l.length||l.length<=4?(alert("\u043b\u043e\u0433\u0435\u043d \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 !"),!1):0==d.length?(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c !"),!1):void fetch("https://edithai.pythonanywhere.com/user/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:l,password:d})}).then((function(e){return e.json()})).then((function(e){console.log(e.Auth),1==e[0].Auth?(localStorage.setItem("is_registred","true"),localStorage.setItem("user",l),localStorage.setItem("email",e[0].email),localStorage.setItem("password",d),window.location.reload()):(console.log(e[0].Error),T(e[0].Error))}))},className:"btn btn-light",children:"\u0432\u043e\u0439\u0442\u0438"})]}),c&&Object(o.jsxs)("div",{className:"forma",children:[Object(o.jsx)("h1",{children:"Edith Ai"}),Object(o.jsx)("h1",{className:"",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(o.jsx)("input",{type:"text",className:"form form-control",onChange:function(e){var t=e.target.value;C(t)},value:w,placeholder:"\u0418\u043c\u044f"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",onChange:function(e){var t=e.target.value;f(t)},value:p,className:"form form-control",placeholder:"Email"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"password",onChange:function(e){var t=e.target.value;y(t)},value:g,className:"form form-control",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:[" \u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 ? ",Object(o.jsx)("i",{className:"blue",onClick:function(){s(!c)},children:"A\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"})]}),Object(o.jsx)("button",{className:"btn btn-light",onClick:function(){return 0==w.length||w.length<=4?(alert("\u0438\u043c\u044f \u043d\u0435\u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 4 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432 !"),!1):0==p.length?(alert("\u0432\u0438\u0434\u0438\u0442\u0435 e-mail"),!1):0==g.length?(alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c !"),!1):void fetch("https://edithai.pythonanywhere.com/create/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:w,password:g,email:p})}).then((function(e){return e.json()})).then((function(e){console.log(e[0].Auth),1==e[0].Auth?(localStorage.setItem("is_registred","true"),localStorage.setItem("user",w),localStorage.setItem("email",p),localStorage.setItem("password",g),window.location.reload()):localStorage.setItem("is_registred","false")}))},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})};c(15),c(25);var d=c(14),b=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];Object(n.useEffect)((function(){"true"==localStorage.getItem("is_registred")?s(!0):s(!1)}));var a=Object(n.useState)(!1),i=Object(r.a)(a,2);i[0],i[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)(d.a,{children:[1==c&&Object(o.jsx)(h,{}),0==c&&Object(o.jsx)(u,{})]})})};a.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.99c23df8.chunk.js.map