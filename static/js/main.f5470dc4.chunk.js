(this["webpackJsonpreact-komponenter"]=this["webpackJsonpreact-komponenter"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),i=n.n(s),r=n(3),o=n.n(r),a=(n(10),n(4));n(11);function l(e){var t=e.imgText,n=e.title,s=e.color;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"dest",style:{backgroundImage:"url($image;)"},children:[Object(c.jsx)("h2",{style:{color:s},className:"destTitle",children:n}),Object(c.jsx)("p",{className:"destText",children:t})]})})}var u=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){fetch("./dest.json").then((function(e){return e.json()})).then((function(e){i(e)}))}),[]),Object(c.jsx)("div",{className:"allDests",children:n.map((function(e){return Object(c.jsx)(l,{image:e.image,imgText:e.imgText,title:e.title,color:e.color})}))})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.f5470dc4.chunk.js.map