"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{913:function(e,a,n){n.d(a,{Bi:function(){return u},Df:function(){return r},YJ:function(){return i},aB:function(){return s},z1:function(){return c}});var t=n(294).Z.create({baseURL:"https://api.themoviedb.org/3"}),r=function(){return t.get("/trending/movie/day",{params:{api_key:"eaa473c2aabcdb92684db8ef78b61bb0",language:"en-US"}})},c=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n="eaa473c2aabcdb92684db8ef78b61bb0";return t.get("/search/movie",{params:{api_key:n,language:"en-US",include_adult:!1,query:e,page:a}})},i=function(e){return t.get("movie/".concat(e),{params:{api_key:"eaa473c2aabcdb92684db8ef78b61bb0",language:"en-US"}})},u=function(e){return t.get("movie/".concat(e,"/credits"),{params:{api_key:"eaa473c2aabcdb92684db8ef78b61bb0",language:"en-US"}})},s=function(e){return t.get("movie/".concat(e,"/reviews"),{params:{api_key:"eaa473c2aabcdb92684db8ef78b61bb0",language:"en-US"}})}},99:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(861),r=n(439),c=n(757),i=n.n(c),u=n(791),s=n(689),o=n(913),b="cast_imgCast__Akpgt",p="cast_castList__B-gmV",f=n(184),d=function(){var e=(0,u.useState)([]),a=(0,r.Z)(e,2),n=a[0],c=a[1],d=(0,u.useState)(!1),l=(0,r.Z)(d,2),g=l[0],m=l[1],h=(0,u.useState)(null),v=(0,r.Z)(h,2),_=v[0],k=v[1],x=(0,s.UO)().id;(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,o.Bi)(x);case 4:a=e.sent,n=a.data,c(n.cast),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),k(e.t0.message);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);var j=n.map((function(e){var a=e.id,n=e.name,t=e.character,r=e.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{className:b,src:"https://image.tmdb.org/t/p/w300".concat(r),alt:n}),(0,f.jsx)("h4",{children:n}),(0,f.jsxs)("p",{children:["Character: ",t]})]},a)})),w=Boolean(n.length);return(0,f.jsxs)(f.Fragment,{children:[g&&(0,f.jsx)("p",{children:"...Loading"}),_&&(0,f.jsx)("p",{children:_}),w&&(0,f.jsx)("ul",{className:p,children:j})]})}}}]);
//# sourceMappingURL=99.c1cfdc42.chunk.js.map