(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=a(3),u=a(4),i=a(7),s=a(6),g=(a(13),a(14),a(5)),m=a.n(g);var p=r.a.memo((function(e){var t=e.total,a=e.perPage,n=e.page,c=e.onPage,o=e.onNext,l=e.onPrev,u=e.withInfo,i=Math.ceil(t/a),s=function(e,t){for(var a=[],n=e;n<=t;n+=1)a.push(n);return a}(1,i),g=(n-1)*a+1,p=n*a>t?t:n*a;return r.a.createElement("nav",{className:"is-flex is-align-items-center my-5"},u&&r.a.createElement("p",null,"".concat(g," - ").concat(p," of ").concat(t)),r.a.createElement("ul",{className:"is-flex ml-3"},r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"button",onClick:l,disabled:1===n},"Prev")),s.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement("button",{type:"button",className:m()({button:!0,"is-info":e===n}),onClick:function(){return c(e)}},e))})),r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"button",onClick:o,disabled:n===i},"Next"))))}));p.defaultProps={perPage:5,page:1,withInfo:!1};var P=[3,5,10,20],f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:1,perPage:5},e.onPerPageChange=function(t){e.setState({perPage:t.target.value})},e.onPageChange=function(t){e.setState({currentPage:t})},e.nextPage=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.prevPage=function(){e.setState((function(e){return{currentPage:e.currentPage-1}}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentPage,a=e.perPage;return r.a.createElement("div",{className:"app"},r.a.createElement("label",null,r.a.createElement("span",{className:"is-size-5"},"Number of items per page: "),r.a.createElement("div",{className:"select is-info"},r.a.createElement("select",{onChange:this.onPerPageChange},P.map((function(e){return r.a.createElement("option",{value:e},e)}))))),r.a.createElement(p,{total:42,perPage:a,page:t,onPage:this.onPageChange,onPrev:this.prevPage,onNext:this.nextPage,withInfo:!0}))}}]),a}(r.a.PureComponent);o.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e702fa4f.chunk.js.map