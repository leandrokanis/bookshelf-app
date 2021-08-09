(this["webpackJsonpbookshelf-app"]=this["webpackJsonpbookshelf-app"]||[]).push([[0],{66:function(n,e){},68:function(n,e,t){"use strict";t.r(e);var A,o,i,r,g,a=t(1),s=t.n(a),c=t(25),C=t.n(c),l=t(2),I=t(3),E=Object(I.a)(A||(A=Object(l.a)(['\n\n  /* reset */\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\n@import url(\'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    font-family: \'Roboto\', sans-serif;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: \'\';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n\n[hidden] {\n    display: none;\n}\n\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n\na:focus {\n    outline: thin dotted;\n}\n\n\na:active,\na:hover {\n    outline: 0;\n}\n\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n\nfigure {\n    margin: 0;\n}\n\nform {\n    margin: 0;\n}\n\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\n\n']))),b=I.b.h1(o||(o=Object(l.a)(["\n  color: inherit;\n  font-family: 'Roboto', sans-serif;\n  font-size: 22px;\n  line-height: 26px;\n  text-align: left;\n  margin-bottom: 0.5em;\n  font-weight: 500;\n"]))),u=I.b.div(i||(i=Object(l.a)(["\n  > img {\n    max-height: 30px;\n  }\n"]))),Q=t(0),B=function(){return Object(Q.jsx)(u,{children:Object(Q.jsx)("img",{src:"data:image/png;base64,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",alt:"Google Livros"})})},d=t(5),p=I.b.nav(r||(r=Object(l.a)(["\n  background: #EFFAFF;\n  height: 56px;\n  box-sizing: border-box;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));!function(n){n[n.show=0]="show",n[n.search=1]="search",n[n.results=2]="results"}(g||(g={}));var f,x,h=function(n){var e=Object(a.useState)(g.show),t=Object(d.a)(e,2),A=t[0],o=t[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),s=r[0],c=r[1],C={q:s,maxResults:40};return Object(Q.jsxs)(Q.Fragment,{children:[A===g.show&&Object(Q.jsxs)(p,{children:[Object(Q.jsx)(B,{}),Object(Q.jsx)("button",{onClick:function(){return o(g.search)},children:"buscar"})]}),A===g.search&&Object(Q.jsxs)(p,{children:[Object(Q.jsx)("input",{value:s,onChange:function(n){return c(n.currentTarget.value)}}),Object(Q.jsx)("button",{onClick:function(){n.onSearch(C),o(g.results)},children:"buscar"})]}),A===g.results&&Object(Q.jsxs)(p,{children:[Object(Q.jsx)("button",{onClick:function(){c(""),n.onGoBack(),o(g.show)},children:"voltar"}),Object(Q.jsx)("p",{children:"Resultados de busca"})]})]})},v=I.b.div(f||(f=Object(l.a)(["\n  padding: 17px 0;\n  margin-bottom: 40px;\n  color: #2D2D2E;\n  \n  &.is-featured {\n    background-color: #47B7ED;\n    padding: 26px 17px;\n    margin-left: -17px;\n    margin-right: -17px;\n    \n    color: #FFFFFF;\n  }\n"]))),F=I.b.div(x||(x=Object(l.a)(["\n  display: flex;\n  color: #595A5C;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  \n  &.is-featured {\n    color: #FFFFFF;\n  }\n"]))),k=function(n){var e;return Object(Q.jsxs)(v,{className:n.isFeatured?"is-featured":"",children:[Object(Q.jsx)(b,{children:n.title}),Object(Q.jsx)(F,{className:n.isFeatured?"is-featured":"",children:null===(e=n.volumes)||void 0===e?void 0:e.map((function(n,e){return Object(Q.jsx)(X,{volume:n},e)}))})]})};k.defaultProps={isFeatured:!1};var m,j,w,y,L,U=k,O=I.b.img(m||(m=Object(l.a)(["\n  height: 138px;\n  width: 94px;\n  border-top-right-radius: 10px;\n  border-bottom-right-radius: 10px;\n  object-fit: cover;\n"]))),K=I.b.div(j||(j=Object(l.a)(["\n  width: 94px;\n  margin-right: 10px;\n  "]))),M=I.b.h4(w||(w=Object(l.a)(["\n  color: inherit;\n  font-family: Roboto;\n  font-size: 12px;\n  line-height: 14px;\n  width: auto;\n  text-align: left;\n  margin-top: 10px;\n"]))),X=function(n){var e;return Object(Q.jsxs)(K,{children:[Object(Q.jsx)(O,{src:(null===(e=n.volume.volumeInfo.imageLinks)||void 0===e?void 0:e.thumbnail)||"data:image/png;base64,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",alt:n.volume.volumeInfo.title}),Object(Q.jsx)(M,{children:n.volume.volumeInfo.title})]})},R=I.b.div(y||(y=Object(l.a)(["\n  padding: 30px 17px 20px;\n  box-sizing: border-box;\n  left: 0;\n  right: 0;\n  height: calc(100vh - 56px);\n  overflow-x: clip;\n\n  scrollbar-width: thin;\n  scrollbar-color: #CCCCCC transparent;\n\n  &::-webkit-scrollbar {\n    z-index: 999;\n    width: 20px;\n    height: 20px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #FFFFFF;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #DDDDDD;\n    border: 8px solid #FFFFFF;\n\n    &:hover {\n      background-color: #CCCCCC;\n    }\n  }\n"]))),S=function(n){return Object(Q.jsx)(R,{children:n.children})},V=I.b.div(L||(L=Object(l.a)(["\n  padding: 30px 17px 20px;\n  box-sizing: border-box;\n  left: 0;\n  right: 0;\n  height: calc(100vh - 56px);\n  overflow-x: clip;\n\n  scrollbar-width: thin;\n  scrollbar-color: #CCCCCC transparent;\n\n  &::-webkit-scrollbar {\n    z-index: 999;\n    width: 20px;\n    height: 20px;\n  }\n\n  &::-webkit-scrollbar-track {\n    background-color: #FFFFFF;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: #DDDDDD;\n    border: 8px solid #FFFFFF;\n\n    &:hover {\n      background-color: #CCCCCC;\n    }\n  }\n\n\n  display: flex;\n  flex-wrap: wrap;\n\n  > div {\n    margin: 0 15px 30px 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),z=function(n){return Object(Q.jsx)(V,{children:n.children})},Z=t(6),G=t(13),H=t.n(G),J=t(29),q=t(30),Y=t.n(q),T=t(31),P=t.n(T),W=Y.a.create({baseURL:"https://www.googleapis.com/books/",paramsSerializer:function(n){return P.a.stringify(n,{indices:!1})}});W.interceptors.response.use((function(n){return function(n){return 200===n.status||201===n.status?n:null===(e=n.data)||void 0===e?void 0:e.messages;var e}(n)}),(function(n){var e;console.warn("Error status",null===n||void 0===n||null===(e=n.response)||void 0===e?void 0:e.status)}));var D=W,N=function(n){return D.get("v1/volumes",Object(Z.a)(Object(Z.a)({},$),{},{params:n}))},$={startIndex:0,maxResults:10,q:""},_={createMultiple:function(n){return n?n.items:null}},nn={useList:function(n){var e=Object(a.useState)(null),t=Object(d.a)(e,2),A=t[0],o=t[1];function i(n){return new Promise(function(){var e=Object(J.a)(H.a.mark((function e(t,A){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(n).then((function(n){var e=_.createMultiple(null===n||void 0===n?void 0:n.data);o(e),t(e)})).catch(A);case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}())}return Object(a.useEffect)((function(){n&&i(n)}),[]),[A,i]}},en=Object(Z.a)(Object(Z.a)({},_),nn),tn=function(){var n=en.useList,e=n({q:"adventure"}),t=Object(d.a)(e,1)[0],A=n({q:"kids"}),o=Object(d.a)(A,1)[0],i=n({q:"top"}),r=Object(d.a)(i,1)[0],g=n({q:"action"}),s=Object(d.a)(g,1)[0],c=n(),C=Object(d.a)(c,2),l=C[0],I=C[1],E=Object(a.useState)(!1),b=Object(d.a)(E,2),u=b[0],B=b[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(h,{onSearch:function(n){B(!0),I(n)},onGoBack:function(){return B(!1)}}),u?Object(Q.jsx)(z,{children:Object(Q.jsx)(Q.Fragment,{children:null===l||void 0===l?void 0:l.map((function(n){return Object(Q.jsx)(X,{volume:n},n.id)}))})}):Object(Q.jsx)(S,{children:Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(U,{title:"Aventura",volumes:t}),Object(Q.jsx)(U,{title:"Infantil",volumes:o}),Object(Q.jsx)(U,{title:"Destaque",volumes:r,isFeatured:!0}),Object(Q.jsx)(U,{title:"Acao",volumes:s})]})})]})};var An=function(){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(E,{}),Object(Q.jsx)(tn,{})]})},on=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,69)).then((function(e){var t=e.getCLS,A=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),A(n),o(n),i(n),r(n)}))};C.a.render(Object(Q.jsx)(s.a.StrictMode,{children:Object(Q.jsx)(An,{})}),document.getElementById("root")),on()}},[[68,1,2]]]);
//# sourceMappingURL=main.2c1ae179.chunk.js.map