(this["webpackJsonpmovie-watchlist-react"]=this["webpackJsonpmovie-watchlist-react"]||[]).push([[0],{59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),i=c.n(s),n=c(29),r=c.n(n),d=c(8),l=function(){return Object(a.jsx)("header",{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"inner-content",children:[Object(a.jsx)("div",{className:"brand",children:Object(a.jsx)(d.b,{to:"/",children:"WatchList"})}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/",children:"Watch List"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/watched",children:"Watched"})}),Object(a.jsx)("li",{children:Object(a.jsx)(d.b,{to:"/add",children:"Add"})})]})]})})})},o=c(12),j=c(13),h=c(15),b=function(e,t){switch(t.type){case m.ADD_TO_WATCHLIST:return{watched:e.watched.filter((function(e){return e.id!=t.payLoad.id})),watchList:[t.payLoad].concat(Object(h.a)(e.watchList))};case m.REMOVE_WATCHLIST:return Object(j.a)(Object(j.a)({},e),{},{watchList:e.watchList.filter((function(e){return e.id!=t.payLoad}))},e.watchList);case m.ADD_TO_WATCHED:return{watchList:e.watchList.filter((function(e){return e.id!=t.payLoad.id})),watched:[t.payLoad].concat(Object(h.a)(e.watched))};case m.REMOVE_WATCHED:return Object(j.a)(Object(j.a)({},e),{},{watched:e.watched.filter((function(e){return e.id!=t.payLoad}))});case m.FROM_WATCHED_TO_WATCHLIST:return{watchList:[t.payLoad].concat(Object(h.a)(e.watchList)),watched:e.watched.filter((function(e){return e.id!=t.payLoad.id}))};default:return e}},O={watchList:localStorage.getItem("watchList")?JSON.parse(localStorage.getItem("watchList")):[],watched:localStorage.getItem("watched")?JSON.parse(localStorage.getItem("watched")):[]},u=i.a.createContext(),m={ADD_TO_WATCHLIST:"addToWatchListFromButton",REMOVE_WATCHLIST:"removeWatchList",ADD_TO_WATCHED:"addToWatched",REMOVE_WATCHED:"removeFromWatched",FROM_WATCHED_TO_WATCHLIST:"fromWatchedToWatchList"},x=function(e){var t=i.a.useReducer(b,O),c=Object(o.a)(t,2),n=c[0],r=c[1];Object(s.useEffect)((function(){localStorage.setItem("watchList",JSON.stringify(n.watchList)),localStorage.setItem("watched",JSON.stringify(n.watched))}),[n]);return Object(a.jsx)(u.Provider,{value:{watchList:n.watchList,watched:n.watched,watchedToWatchList:function(e){r({type:m.FROM_WATCHED_TO_WATCHLIST,payLoad:e})},removeWatched:function(e){r({type:m.REMOVE_WATCHED,payLoad:e})},addToWatched:function(e){r({type:m.ADD_TO_WATCHED,payLoad:e})},addMovie:function(e){r({type:m.ADD_TO_WATCHLIST,payLoad:e})},removeMovie:function(e){r({type:m.REMOVE_WATCHLIST,payLoad:e})}},children:e.children})};function f(e){var t=e.type,c=e.movie,s=i.a.useContext(u),n=s.removeMovie,r=s.addToWatched,d=s.removeWatched,l=s.watchedToWatchList;return Object(a.jsxs)("div",{className:"inner-card-controls",children:["watchList"===t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return r(c)},className:"ctrl-btn",children:Object(a.jsx)("i",{className:"fa-fw far fa-eye"})}),Object(a.jsx)("button",{onClick:function(){return n(c.id)},className:"ctrl-btn",children:Object(a.jsx)("i",{className:"fa-fw fa fa-times"})})]}),"watched"===t&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"ctrl-btn",onClick:function(){return l(c)},children:Object(a.jsx)("i",{className:"fa-fw far fa-eye-slash"})}),Object(a.jsx)("button",{className:"ctrl-btn",onClick:function(){return d(c.id)},children:Object(a.jsx)("i",{className:"fa-fw fa fa-times"})})]})]})}var v=function(e){var t=e.movie,c=e.type;return Object(a.jsxs)("div",{className:"movie-card",style:{borderTop:"1px solid black"},children:[Object(a.jsx)("div",{className:"overlay"}),t.poster_path?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h5",{style:{textAlign:"center"},children:t.title}),Object(a.jsx)("img",{src:"http://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title})]}):Object(a.jsx)("div",{className:"filler-poster"}),Object(a.jsx)(f,{movie:t,type:c})]})},p=function(){var e=Object(s.useContext)(u).watched;return Object(a.jsx)("div",{className:"movie-page",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{className:"heading",children:"Watched"})}),e.length>0?Object(a.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(a.jsx)(v,{movie:e,type:"watched"})}))}):Object(a.jsx)("h2",{className:"no-movies",children:"No movies"})]})})},w=function(){var e=Object(s.useContext)(u).watchList;return Object(a.jsx)("div",{className:"movie-page",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("h1",{className:"heading",children:"My watchList"})}),e.length>0?Object(a.jsx)("div",{className:"movie-grid",children:e.map((function(e){return Object(a.jsx)(v,{movie:e,type:"watchList"})}))}):Object(a.jsx)("h2",{className:"no-movies",children:"No movies"})]})})},L=function(e){var t=e.movie,c=i.a.useContext(u),s=c.watchList,n=c.addMovie,r=c.watched,d=c.addToWatched,l=s.find((function(e){return e.id===t.id})),o=r.find((function(e){return e.id===t.id})),j=l?"disable":"",h=o?"disable":"",b=l?"Added to WatchList":"Add to WatchList",O=o?"Watched":"Add to Watched";return Object(a.jsxs)("div",{className:"result-card",children:[Object(a.jsx)("div",{className:"poster-wrapper",children:t.poster_path?Object(a.jsx)("img",{src:"http://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}):Object(a.jsx)("div",{className:"filler-poster"})}),Object(a.jsxs)("div",{className:"info",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h3",{className:"title",children:t.title}),Object(a.jsx)("h4",{className:"release-date",children:t.release_date?t.release_date.substring(0,4):"-"})]}),Object(a.jsxs)("div",{className:"controls",children:[Object(a.jsx)("button",{disabled:j,className:"btn",onClick:function(){return n(t)},children:b}),Object(a.jsx)("button",{disabled:h,className:"btn",onClick:function(){return d(t)},children:O})]})]})]})},N=c(31),T=c.n(N),g="644e5d89dd54d37ced12e34fb8d9dabc";console.log(g);var W=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),r=Object(o.a)(n,2),d=r[0],l=r[1];return Object(s.useEffect)((function(){T.a.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:g,query:c,language:"en-US",page:1,include_adult:!0}}).then((function(e){console.log(e),l(e.data.results)})).catch((function(e){return console.log(e)}))}),[c]),Object(a.jsx)("div",{className:"add-page",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"add-content",children:[Object(a.jsx)("div",{className:"input-wrapper",children:Object(a.jsx)("input",{type:"text",placeholder:"Search for a movie...",value:c,onChange:function(e){e.preventDefault(),i(e.target.value)}})}),d.length>0&&Object(a.jsx)("ul",{className:"results",children:d.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(L,{movie:e})},e.id)}))})]})})})},y=(c(59),c(60),c(2));var _=function(){return Object(a.jsx)(x,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(l,{}),Object(a.jsxs)(y.c,{children:[Object(a.jsx)(y.a,{exact:!0,path:"/",children:Object(a.jsx)(w,{})}),Object(a.jsx)(y.a,{path:"/watched",children:Object(a.jsx)(p,{})}),Object(a.jsx)(y.a,{path:"/add",children:Object(a.jsx)(W,{})})]})]})})};r.a.render(Object(a.jsx)(_,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f5519d91.chunk.js.map