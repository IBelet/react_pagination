(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),u=a(3),l=a(4),i=a(7),s=a(6),m=(a(13),a(5)),p=a.n(m);var g=r.a.memo((function(e){var t=e.total,a=e.perPage,n=e.page,c=e.onPage,o=e.onNext,u=e.onPrev,l=e.withInfo,i=Math.ceil(t/a),s=function(e,t){var a=[];return a.push(1),t>3&&a.push("..."),t>2&&a.push(t-1),1!==t&&t!==e&&a.push(t),e-1>t&&a.push(t+1),e-2>t&&a.push("..."),1!==e&&a.push(e),a}(i,n),m=(n-1)*a+1,g=n*a>t?t:n*a,P=s.map((function(e,t){return{name:e,id:t}}));return r.a.createElement("nav",{className:"is-flex is-align-items-center my-5"},l&&r.a.createElement("p",null,"".concat(m," - ").concat(g," of ").concat(t)),r.a.createElement("ul",{className:"is-flex ml-3"},r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"button",onClick:u,disabled:1===n},"<")),P.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("button",{type:"button",className:p()({button:!0,"is-info":e.name===n}),onClick:function(){return c(e.name)},disabled:"..."===e.name},e.name))})),r.a.createElement("li",null,r.a.createElement("button",{type:"button",className:"button",onClick:o,disabled:n===i},">"))))}));g.defaultProps={perPage:5,page:1,withInfo:!1};var P=[3,5,10,20,50],f=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={currentPage:9,perPage:5,total:42},e.onPerPageChange=function(t){e.setState({perPage:+t.target.value,currentPage:1})},e.onPageChange=function(t){e.setState({currentPage:t})},e.nextPage=function(){e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.prevPage=function(){e.setState((function(e){return{currentPage:e.currentPage-1}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.currentPage,a=e.perPage,n=e.total;return r.a.createElement("div",{className:"app"},r.a.createElement("label",null,r.a.createElement("span",{className:"is-size-5"},"Number of items per page: "),r.a.createElement("div",{className:"select is-info"},r.a.createElement("select",{value:a,onChange:this.onPerPageChange},P.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement(g,{total:n,perPage:a,page:t,onPage:this.onPageChange,onPrev:this.prevPage,onNext:this.nextPage,withInfo:!0}))}}]),a}(r.a.PureComponent);o.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.62700815.chunk.js.map