(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),a=n.n(s),i=n(8),o=n(5),l=n(1),u=(n(13),n(14),n(4)),b=n.n(u),r=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.Default=0]="Default",t[t.Alphabetical=1]="Alphabetical",t[t.Length=2]="Length"}(c||(c={}));var j=function(){var t=[].concat(h),e=Object(l.useState)(t),n=Object(o.a)(e,2),s=n[0],a=n[1],u=Object(l.useState)(c.Default),j=Object(o.a)(u,2),f=j[0],g=j[1],d=Object(l.useState)(!1),p=Object(o.a)(d,2),O=p[0],m=p[1];return Object(l.useEffect)((function(){!function(){var t=Object(i.a)(s);switch(f){case c.Alphabetical:t=t.sort();break;case c.Length:t=t.sort((function(t,e){return t.length-e.length}))}O&&t.reverse(),a(t)}()}),[f,O]),Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:b()("button","is-info",{"is-light":f!==c.Alphabetical}),onClick:function(){g(c.Alphabetical)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:b()("button","is-success",{"is-light":f!==c.Length}),onClick:function(){g(c.Length)},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:b()("button","is-warning",{"is-light":!O}),onClick:function(){m(!O)},children:"Reverse"}),f!==c.Default||O?Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g(c.Default),m(!1),a(t)},children:"Reset"}):null]}),Object(r.jsx)("ul",{children:s.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d5cf3ec2.chunk.js.map