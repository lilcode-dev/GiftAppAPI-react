(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(9),u=(n(15),n(0)),o=function(t){var e=t.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),m=n(8),p=function(){var t=Object(m.a)(l.a.mark((function t(e){var n,a,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"weh46AZ7ZbcImJTNSBKGlUy7pSFgRtM3",n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=").concat("weh46AZ7ZbcImJTNSBKGlUy7pSFgRtM3"),t.next=4,fetch(n);case 4:return t.next=6,t.sent.json();case 6:return a=t.sent,c=a.data,r=c.map((function(t){var e=t.id,n=t.title,a=t.images;return{id:e,title:n,url:null===a||void 0===a?void 0:a.downsized_medium.url}})),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.url,n=t.title;return Object(u.jsxs)("div",{className:"card animate__animated animate__backInLeft",children:[Object(u.jsx)("img",{src:e,alt:n}),Object(u.jsx)("p",{children:n})]})},b=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),c=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__jello",children:e}),r&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(u.jsx)("div",{className:"card-grid animate__animated",children:c.map((function(t){return Object(u.jsx)(f,Object(j.a)({},t),t.id)}))})]})},h=(n(18),function(){var t=Object(a.useState)(["Boku No Hero"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:c}),n.map((function(t){return Object(u.jsx)(b,{category:t},t)}))]})});n(19);r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b287b972.chunk.js.map