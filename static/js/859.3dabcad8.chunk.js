"use strict";(self.webpackChunktapeseeker=self.webpackChunktapeseeker||[]).push([[859],{2859:(e,s,t)=>{t.r(s),t.d(s,{default:()=>W});var i=t(2791),a=t(6227);const l="SearchBar_form__gW7Gj",o="SearchBar_formButton__C-ydM",n="SearchBar_input__bIy50";var r=t(1686),c=t.n(r),v=t(2187),m=t(184);const u=e=>{let{onSubmit:s}=e;const[t,a]=(0,i.useState)("");return(0,m.jsxs)("form",{className:l,onSubmit:e=>{e.preventDefault(),t?(s({query:t}),a("")):c().Notify.failure("Enter your search term")},children:[(0,m.jsx)("button",{className:o,type:"submit",children:(0,m.jsx)(v.eaK,{size:"1.3em"})}),(0,m.jsx)("input",{className:n,type:"text",placeholder:"Search movies",onChange:e=>{a(e.target.value)},value:t})]})};var d=t(7689),_=t(1087);const h={moviesList:"MoviesList_moviesList__P6SP5",movieList2:"MoviesList_movieList2__Au0SC",title:"MoviesList_title__PB2c8",moviesListItem:"MoviesList_moviesListItem__OFqms",img:"MoviesList_img__v4jFC",movieTitle:"MoviesList_movieTitle__CxO8p",thumbsContainer:"MoviesList_thumbsContainer__8kNDv",thumb:"MoviesList_thumb__xQkCm"},x={moviesList:"MoviesList2_moviesList__tXi97",moviesListItem:"MoviesList2_moviesListItem__NXhtt",img:"MoviesList2_img__bTQSX",textContainer:"MoviesList2_textContainer__DwkmC",movieTitle:"MoviesList2_movieTitle__k7FX4",movieOverview:"MoviesList2_movieOverview__B+YnM",thumbsContainer:"MoviesList2_thumbsContainer__4DeK7",thumb:"MoviesList2_thumb__h+Al6",actionButtonsWrap:"MoviesList2_actionButtonsWrap__YtzlU",actionButton:"MoviesList2_actionButton__kBwSa"};var j=t(4869),p=t(1909);const b=e=>{let{movies:s,location:t,listStyle:i}=e;var a=i?h:x;return(0,m.jsx)("ul",{className:a.moviesList,children:s?null===s||void 0===s?void 0:s.map((e=>{var s,l;return(0,m.jsx)(_.rU,{className:a.moviesListItem,to:"/"===t.pathname?"movies/".concat(e.id):"".concat(e.id),state:{from:t},children:i?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{className:a.img,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg",alt:e.title}),(0,m.jsx)("h3",{className:a.movieTitle,children:e.title?e.title:e.name}),(0,m.jsxs)("div",{className:a.thumbsContainer,children:[(0,m.jsxs)("span",{className:a.thumb,children:[" ",(0,m.jsx)(j.cZx,{size:"1.2em"})," ",e.release_date?e.release_date.split("-")[0]:null===e||void 0===e||null===(s=e.first_air_date)||void 0===s?void 0:s.split("-")[0]]}),(0,m.jsxs)("span",{className:a.thumb,children:[" ",(0,m.jsx)(p.MVI,{size:"1.2em"}),e.vote_average.toFixed(1)]}),(0,m.jsxs)("span",{className:a.thumb,children:[" ",(0,m.jsx)(p.$lZ,{size:"1.2em"}),e.original_language]})]})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("img",{className:a.img,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg",alt:e.title}),(0,m.jsxs)("div",{className:a.textContainer,children:[(0,m.jsx)("h3",{className:a.movieTitle,children:e.title?e.title:e.name}),(0,m.jsx)("p",{className:a.movieOverview,children:e.overview}),(0,m.jsxs)("div",{className:a.thumbsContainer,children:[(0,m.jsxs)("span",{className:a.thumb,children:[" ",(0,m.jsx)(j.cZx,{size:"1.2em"})," ",e.release_date?e.release_date.split("-")[0]:null===e||void 0===e||null===(l=e.first_air_date)||void 0===l?void 0:l.split("-")[0]]}),(0,m.jsxs)("span",{className:a.thumb,children:[" ",(0,m.jsx)(p.MVI,{size:"1.2em"}),e.vote_average.toFixed(1)]}),(0,m.jsxs)("span",{className:a.thumb,children:[" ",(0,m.jsx)(p.$lZ,{size:"1.2em"}),e.original_language]})]}),(0,m.jsxs)("div",{className:a.actionButtonsWrap,children:[console.log(e),(0,m.jsx)("button",{className:a.actionButton,children:"Add to watchlist"}),(0,m.jsx)("button",{className:a.actionButton,children:"Add to favorite"})]})]})]})},e.id)})):(0,m.jsx)("h1",{className:a.title,children:"Search for Movies"})})};var g=t(1472),N=t(2202);const M=[{value:"all",label:"All"},{value:"28",label:"Action"},{value:"16",label:"Animations"},{value:"35",label:"Comedy"},{value:"80",label:"Crime"},{value:"99",label:"Documentary"},{value:"18",label:"Drama"},{value:"10751",label:"Family"},{value:"14",label:"Fantasy"},{value:"36",label:"Histroy"},{value:"27",label:"Horror"},{value:"10402",label:"Music"},{value:"878",label:"Sci-fi"},{value:"53",label:"Thriler"},{value:"10752",label:"War"}],y=[{value:"popularity.desc",label:(0,m.jsxs)("div",{children:["Popularity ",(0,m.jsx)(N.r_,{})]})},{value:"popularity.asc",label:(0,m.jsxs)("div",{children:["Popularity ",(0,m.jsx)(N.ZF,{})]})},{value:"primary_release_date.asc",label:(0,m.jsxs)("div",{children:["Date ",(0,m.jsx)(N.ZF,{})]})},{value:"primary_release_date.desc",label:(0,m.jsxs)("div",{children:["Date ",(0,m.jsx)(N.r_,{})]})},{value:"vote_average.desc",label:(0,m.jsxs)("div",{children:["Rating ",(0,m.jsx)(N.r_,{})]})},{value:"vote_average.asc",label:(0,m.jsxs)("div",{children:["Rating ",(0,m.jsx)(N.ZF,{})]})}],C="Movies_moviesHeader__oVnRS",f="Movies_filterMenu__mF2Qt",L="Movies_filterMenuItem__t7qlz",S="Movies_listStyle__KJzzC",k="Movies_listStyleButton__jAuUG",w="Movies_styleButtonActive__n7IfG",B="Movies_backToTopButton__7yEpE",F="Movies_mediaButtonContainer__MvXa2",T="Movies_mediaButton__mlGKA",z="Movies_mediaButtonActive__Dd-q0",A="Movies_pagination__wqHtT",D="Movies_paginationButton__abiwn",q="Movies_paginationPage__1TCym",I="Movies_loadingOverlay__LQyG1",P="Movies_loadingText__z-CtK",Z="Movies_control__Yzdsv",G="Movies_optionsSyles__QB30N";var O=t(9329);const W=()=>{const[e,s]=(0,i.useState)(!0),[t,l]=(0,i.useState)(!0),[o,n]=(0,i.useState)(!1),[r,h]=(0,i.useState)(null),[x,j]=(0,i.useState)(M[0]),[p,W]=(0,i.useState)(y[0]),[E,H]=(0,i.useState)(1),K=(0,d.TH)(),Q=(0,d.s0)(),[R,U]=(0,_.lr)(),V="/movies"===K.pathname?"movie":"tv";(0,i.useEffect)((()=>{var e=R.get("q");e?(async e=>{try{n(!0);const s=await a.z1(e,E,V);if(0===s.length)return c().Notify.failure("Could't find \"".concat(e,'"')),void Q("/movies");h(s),n(!1)}catch(s){c().Notify.failure("Error")}})(e):(async()=>{if(n(!0),"movie"===V)if(x&&"All"!==(null===x||void 0===x?void 0:x.label)){const e=await a.qt("movie",null===x||void 0===x?void 0:x.value,p.value,E);h(e.results)}else{const e=await a.aV("/discover/movie",E,p.value);h(e)}else if(x&&"All"!==(null===x||void 0===x?void 0:x.label)){const e=await a.qt("tv",null===x||void 0===x?void 0:x.value,p.value,E);if(0===e.results.length)return c().Notify.failure("Could't find shows with this genre"),void Q("/movies");h(e.results)}else{const e=await a.aV("/discover/tv",E,p.value);h(e)}n(!1)})()}),[E,R,V,Q,x,p]);const X=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},Y=t=>{e&&"Movies"===t.target.textContent||!e&&"Shows"===t.target.textContent||(h(null),H(1),s((e=>!e)))},$=e=>{X(),"dec"===e.target.id?H((e=>e-1)):H((e=>e+1))},J=e=>{t&&"grid"===e.currentTarget.id||!t&&"list"===e.currentTarget.id||(l((e=>!e)),console.log("Change style"),console.log(r))};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:F,children:[(0,m.jsx)(_.rU,{to:"/movies",onClick:e=>Y(e),className:"".concat(T," ").concat("movie"===V&&z),children:"Movies"}),(0,m.jsx)(_.rU,{to:"/tv",onClick:e=>Y(e),className:"".concat(T," ").concat("tv"===V&&z),children:"Shows"})]}),o&&(0,m.jsx)("div",{className:I,children:(0,m.jsx)("div",{className:P,children:(0,m.jsx)(O.NB,{colors:["#F3D056","#F3D056","#F3D056","#F3D056","#F3D056"]})})}),(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)(u,{onSubmit:e=>{let{query:s}=e;H(1),U({q:s}),h(null),j(null)}}),0===R.size&&(0,m.jsxs)("ul",{className:f,children:[(0,m.jsxs)("li",{className:L,children:[(0,m.jsx)("span",{children:"Genre: "}),(0,m.jsx)(g.ZP,{placeholder:"All",value:x,onChange:e=>(e=>{console.log(e),j(e),H(1)})(e),options:M,theme:e=>({...e,borderRadius:8,colors:{neutral0:"rgb(33, 33, 33)",neutral20:"#757575",primary25:"#505050",primary:"rgb(243, 218, 92)"}}),classNames:{control:()=>Z,option:()=>G}})]}),(0,m.jsxs)("li",{className:L,children:[(0,m.jsx)("span",{children:"Sort by:"}),(0,m.jsx)(g.ZP,{placeholder:p,value:p,onChange:e=>(e=>{console.log(e),W(e),H(1)})(e),options:y,theme:e=>({...e,borderRadius:8,colors:{neutral0:"rgb(33, 33, 33)",neutral20:"#757575",primary25:"#505050",primary:"rgb(243, 218, 92)"}}),classNames:{control:()=>Z,option:()=>G}})]})]}),(0,m.jsxs)("ul",{className:S,children:[(0,m.jsx)("button",{onClick:J,id:"grid",className:"".concat(k," ").concat(t&&w),children:(0,m.jsx)(v.idP,{})}),(0,m.jsx)("button",{onClick:J,id:"list",className:"".concat(k," ").concat(!t&&w),children:(0,m.jsx)(N.AeW,{})})]})]}),(0,m.jsx)(b,{movies:r,location:K,currentPage:E,listStyle:t}),!o&&(0,m.jsxs)("div",{className:A,children:[(0,m.jsx)("button",{className:D,disabled:1===E,onClick:e=>$(e),id:"dec",children:"Back"}),(0,m.jsx)("span",{className:q,children:E}),(0,m.jsx)("button",{className:D,onClick:e=>$(e),id:"inc",children:"Next"})]}),(0,m.jsx)("button",{onClick:X,className:B,children:(0,m.jsx)(N.ZTc,{size:"2em"})})]})}}}]);
//# sourceMappingURL=859.3dabcad8.chunk.js.map