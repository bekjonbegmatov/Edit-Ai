(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{18:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(10),a=c.n(s),r=c(3),i=c(5),l=(c(18),c(0)),j=function(e){var t=e.text,c=e.delay,s=Object(n.useState)(""),a=Object(r.a)(s,2),i=a[0],j=a[1];return Object(n.useEffect)((function(){var e=0,n=setInterval((function(){e<t.length?(j((function(c){return c+t.charAt(e)})),e++):clearInterval(n)}),c);return function(){clearInterval(n)}}),[t,c]),Object(l.jsx)("span",{className:"Typewriter",dangerouslySetInnerHTML:{__html:i}})};c(20);var o=function(e){return Object(l.jsxs)("div",{children:[!e.is_user&&Object(l.jsxs)("div",{className:"chatgp",children:[Object(l.jsx)("p",{className:"odamoti",children:"Edith"}),Object(l.jsx)("div",{className:"alert alert-success",role:"alert",children:Object(l.jsx)(j,{text:e.text,delay:50})})]}),e.is_user&&Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("p",{className:"odamoti_user",children:"\u0412\u044b"}),Object(l.jsx)("div",{class:"alert alert-primary",role:"alert",children:e.text})]}),Object(l.jsx)("div",{className:"joy"})]})},u=c.p+"static/media/edith.f180005b.png";c(21);var b=function(){Object(n.useEffect)((function(){}),[]);var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),j=Object(r.a)(a,2),b=(j[0],j[1]),d=Object(n.useState)("1"),h=Object(r.a)(d,2),O=h[0],p=h[1],x=Object(n.useState)([["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Edith AI ! \u042f \u0433\u043e\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0432 \u043b\u044e\u0431\u044b\u0445 \u0434\u0435\u043b\u0430\u0445. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u043d\u0435, \u0447\u0442\u043e \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0438 \u044f \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u044e\u0441\u044c \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e","chat"]]),f=Object(r.a)(x,2),v=f[0],m=f[1],g=Object(n.useState)("\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 Edith AI ! \u042f \u0433\u043e\u0442\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0438\u0442\u044c \u043d\u0430 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u0432 \u043b\u044e\u0431\u044b\u0445 \u0434\u0435\u043b\u0430\u0445. \u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043c\u043d\u0435, \u0447\u0442\u043e \u0432\u044b \u0445\u043e\u0442\u0435\u043b\u0438 \u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0438\u043b\u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c, \u0438 \u044f \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u044e\u0441\u044c \u043f\u043e\u043c\u043e\u0447\u044c \u0432\u0430\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e"),y=Object(r.a)(g,2);function N(){var e=v;if(0==c.length)console.log("Antithiog");else{var t=[];t.push(c),t.push("user"),e.push(t),function(e,t){var c,n=0;"1"==O?n=20:"2"==O?n=100:"3"==O?n=500:"4"==O&&(n=1e3);fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify((c={model:"gpt-3.5-turbo",messages:[{role:"user",content:e}],temperature:1,max_tokens:n,top_p:1},Object(i.a)(c,"temperature",.5),Object(i.a)(c,"frequency_penalty",0),Object(i.a)(c,"presence_penalty",0),c))}).then((function(e){return e.json()})).then((function(e){b(e.choices[0].message.content),function(e){var t=v,c=[];c.push(e),c.push("chat"),t.push(c),m(t),c=[],b("")}(e.choices[0].message.content)}))}(c,"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"),m(e),s("")}}return y[0],y[1],Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"fleks",children:[Object(l.jsx)("h1",{className:"header",children:"Edith AI"}),Object(l.jsx)("img",{src:u,alt:"",width:"50px",height:"50px"})]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{class:"form-floating",children:[Object(l.jsxs)("select",{id:"floatingSelect",class:"form form-control vibor ","aria-label":"Default select example",onChange:function(e){var t=e.target.value;p(t)},children:[Object(l.jsx)("option",{value:"1",selected:!0,children:"\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439"}),Object(l.jsx)("option",{value:"2",children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439"}),Object(l.jsx)("option",{value:"3",children:"\u0414\u043b\u0438\u043d\u043d\u0438\u0439"}),Object(l.jsx)("option",{value:"4",children:"Supper \u0414\u043b\u0438\u043d\u043d\u0438\u0439"})]}),Object(l.jsx)("label",{for:"floatingSelect",children:"\u0414\u043b\u0438\u043d\u0430 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441"})]}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("div",{className:"",children:[v.map((function(e,t){return"user"==e[1]?Object(l.jsx)(o,{is_user:!0,text:e[0]},t):Object(l.jsx)(o,{is_user:!1,text:e[0]},t)})),v.length>=5&&Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:"."}),Object(l.jsx)("div",{children:"."})]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("div",{class:"input-group mb-3 to_vniz",children:[Object(l.jsx)("input",{type:"text",class:"form-control",placeholder:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0441\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t=e.target.value;s(t)},onKeyUp:function(e){"Enter"==e.key&&N()},value:c,"aria-label":"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442 \u0441\u043e\u0431\u0449\u0435\u043d\u0438\u044f","aria-describedby":"button-addon2"}),Object(l.jsx)("button",{onClick:N,class:"btn btn-outline-secondary",type:"button",id:"button-addon2",children:Object(l.jsx)("i",{class:"fa fa-paper-plane-o"})})]})})]})};c(22);var d=c(13),h=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2);t[0],t[1];return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(d.a,{children:Object(l.jsx)(b,{})})})};a.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.c71bfe54.chunk.js.map