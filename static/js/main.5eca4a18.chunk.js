(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a,c,o,i=n(0),r=n.n(i),l=n(3),s=n.n(l),m=(n(18),n(2)),p=n(4),u=n(7),d=n(6),h=n(8),y=n(11),b=(n(22),n(12)),f=n(9),v=(n(24),n(1)),C=new(a=function(){function e(){Object(m.a)(this,e),Object(b.a)(this,"selectedCompanies",c,this)}return Object(p.a)(e,[{key:"addCompany",value:function(e){return this.selectedCompanies.length<=2&&(this.selectedCompanies.push(e),console.log(this.selectedCompanies),!0)}},{key:"toggleCompany",value:function(e){var t=this.selectedCompanies.indexOf(e);return-1===t&&this.selectedCompanies.length<=2?(this.selectedCompanies.push(e),!0):t>-1&&(this.selectedCompanies.splice(t,1),!0)}}]),e}(),c=Object(f.a)(a.prototype,"selectedCompanies",[v.k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(f.a)(a.prototype,"addCompany",[v.d],Object.getOwnPropertyDescriptor(a.prototype,"addCompany"),a.prototype),Object(f.a)(a.prototype,"toggleCompany",[v.d],Object.getOwnPropertyDescriptor(a.prototype,"toggleCompany"),a.prototype),a),O=n(5),j=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={active:!1,priority:null},n.handleClick=n.handleClick.bind(Object(O.a)(Object(O.a)(n))),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){C.toggleCompany(this.props.name)&&this.setState({active:!this.state.active})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"company noselect border-pink ".concat(this.state.active?"back-pink":""),onClick:function(t){return e.handleClick(t)},priority:this.state.priority},this.props.name)}}]),t}(i.Component),E=Object(y.a)(o=function(e){function t(){return Object(m.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-8 col-sm-12 text-center"},r.a.createElement("h1",null,"\u0633\u0644\u0627\u0645 \u062e\u0648\u0628\u06cc \u061f"),r.a.createElement("p",null,"\u0645\u0627 \u0628\u0647 \u0627\u06cc\u0646 \u062f\u0627\u062f\u0647 \u0647\u0627 \u0646\u06cc\u0627\u0632 \u062f\u0627\u0631\u06cc\u0645 \u067e\u0633 \u062c\u0648\u0646 \u0645\u0627\u062f\u0631\u062a \u0627\u06cc\u0646 \u062f\u06cc\u062a\u0627 \u0631\u0648 \u062f\u0631\u0633\u062a \u067e\u0631 \u06a9\u0646 \u0628\u0631\u0627\u0645\u0648\u0646 \u0645\u0633\u0644\u0645\u0648\u0646"),r.a.createElement("ol",null,C.selectedCompanies.map(function(e){return r.a.createElement("li",null,e)})))),r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-md-8 col-sm-12 text-center"},r.a.createElement("form",null,r.a.createElement("label",null,"\u0644\u0637\u0641\u0627 \u0627\u0633\u0645\u200c \u0634\u0631\u06a9\u062a\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0648\u0633\u062a \u062f\u0627\u0631\u06cc \u062a\u0648\u0634\u0648\u0646 \u06a9\u0627\u0631 \u06a9\u0646\u06cc \u0631\u0648 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646!",r.a.createElement("input",{type:"text"})),r.a.createElement("div",{className:"text-center"},r.a.createElement(j,{name:"\u062f\u06cc\u062c\u06cc\u06a9\u0627\u0644\u0627"}),r.a.createElement(j,{name:"\u0627\u0633\u0646\u067e"}),r.a.createElement(j,{name:"\u0627\u0633\u0646\u067e\u200c\u0641\u0648\u062f"}),r.a.createElement(j,{name:"\u0648\u0631\u0632\u0634\u200c\u06f3"}))))))}}]),t}(i.Component))||o;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.5eca4a18.chunk.js.map