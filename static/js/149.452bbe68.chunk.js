"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[149],{454:function(t,n,e){e.d(n,{O:function(){return c}});var r=e(689),a=e(731),u=e(184),c=function(t){var n=t.movies,e=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})})}},149:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(885),a=e(731),u=e(281),c=e(791),i=e(454),o=e(184),s=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],f=(0,a.lr)(),p=(0,r.Z)(f,2),d=p[0],v=p[1];return(0,c.useEffect)((function(){var t=d.get("movieTitle");t&&u.z1(t).then((function(t){return s(t)}))}),[d]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(t){v({movieTitle:t.target[0].value}),t.preventDefault()},children:[(0,o.jsx)("input",{type:"text",placeholder:"Search..."}),(0,o.jsx)("button",{type:"submit",children:"Search"})]}),(0,o.jsx)(i.O,{movies:e})]})},f=function(){return(0,o.jsx)(s,{})}},281:function(t,n,e){e.d(n,{Hg:function(){return o},TP:function(){return f},q5:function(){return d},z1:function(){return s},zv:function(){return p}});var r=e(531),a=e(757),u=e.n(a),c=e(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="?api_key=a851ba45df8e0cc0523773a8cadd00ba",o=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/day".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/search/movie".concat(i,"&query=").concat(n,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n).concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=149.452bbe68.chunk.js.map