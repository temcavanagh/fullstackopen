(this.webpackJsonppart2test=this.webpackJsonppart2test||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),u=n(14),i=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return o.a.createElement("li",{className:"note"},e.content,o.a.createElement("button",{onClick:n},a))},m=n(2),s=n.n(m),f="http://localhost:3001/api/notes",p=function(){var t=s.a.get(f),e={id:1e4,content:"This note is not saved to the server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},d=function(t){return s.a.post(f,t).then((function(t){return t.data}))},h=function(t,e){return s.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},v=function(t){var e=t.message;return null===e?null:o.a.createElement("div",{className:"error"},e)},E=function(){return o.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},o.a.createElement("br",null),o.a.createElement("em",null,"Note App, Department of Computer Science, University of Helsinki 2020"))},b=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),r=n[0],c=n[1],m=Object(a.useState)("a new note..."),s=Object(i.a)(m,2),f=s[0],b=s[1],g=Object(a.useState)(!0),O=Object(i.a)(g,2),j=O[0],S=O[1],k=Object(a.useState)("some error happened..."),y=Object(i.a)(k,2),w=y[0],C=y[1];Object(a.useEffect)((function(){p().then((function(t){c(t)}))}),[]);var I=j?r:r.filter((function(t){return!0===t.important}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Notes"),o.a.createElement(v,{message:w}),o.a.createElement("div",null,"                                           ",o.a.createElement("button",{onClick:function(){return S(!j)}},"show ",j?"important":"all")),o.a.createElement("ul",null,"                                            ",I.map((function(t){return o.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){"http://localhost:3001/notes/".concat(t);var e=r.find((function(e){return e.id===t})),n=Object(u.a)({},e,{important:!e.important});h(t,n).then((function(e){c(r.map((function(n){return n.id!==t?n:e})))})).catch((function(n){C("The note '".concat(e.content,"' was already deleted from the server")),setTimeout((function(){C(null)}),5e3),c(r.filter((function(e){return e.id!==t})))}))}(t.id)}})}))),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:f,date:(new Date).toISOString(),important:Math.random()<.5};d(e).then((function(t){c(r.concat(t)),b("")}))}},"                       ",o.a.createElement("input",{value:f,onChange:function(t){console.log(t.target.value),b(t.target.value)}}),o.a.createElement("button",{type:"submit"},"save"),"         "),o.a.createElement(E,null))};n(37);s.a.get("http://localhost:3001/notes").then((function(t){var e=t.data;console.log(e)})),c.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.55f09bd1.chunk.js.map