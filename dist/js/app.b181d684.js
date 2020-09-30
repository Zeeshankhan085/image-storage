(function(t){function e(e){for(var a,c,i=e[0],s=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3549:function(t,e,n){"use strict";var a=n("538c"),o=n.n(a);o.a},"538c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e),n.d(e,"router",(function(){return at}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"ui container"},[n("router-view")],1)],1)},r=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ui secondary pointing menu"},[n("a",{staticClass:"active item"},[t._v("Image Storage")]),n("div",{staticClass:"right menu"},[t.isLoggedIn?n("div",{staticClass:"horizontal"},[n("router-link",{staticClass:"item",attrs:{to:"/"}},[t._v("Galleries")]),n("router-link",{staticClass:"item",attrs:{to:"upload"}},[t._v("Upload")]),n("a",{staticClass:"item",attrs:{href:"#"},on:{click:t.logout}},[t._v("Log Out")])],1):n("a",{staticClass:"ui item",on:{click:t.logIn}},[t._v("Login")])])])])},i=[],s=n("5530"),u=n("2f62"),l={computed:Object(s["a"])({},Object(u["c"])(["isLoggedIn"])),methods:Object(s["a"])({},Object(u["b"])(["logIn","logout"]))},f=l,p=(n("964b"),n("2877")),d=Object(p["a"])(f,c,i,!1,null,"081c02f2",null),g=d.exports,m={name:"App",components:{Header:g}},h=m,v=Object(p["a"])(h,o,r,!1,null,null,null),b=v.exports,w=(n("ac1f"),n("5319"),n("a630"),n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),n("4328")),O=n.n(w),I=n("bc3a"),j=n.n(I),_="30978d12c639dd0",k="https://api.imgur.com",y={uploadImages:function(t,e){var n=Array.from(t).map((function(t){var n=new FormData;return n.append("image",t),j.a.post("".concat(k,"/3/image"),n,{headers:{Authorization:"Bearer ".concat(e)}})}));return Promise.all(n)},fetchImages:function(t){return j.a.get("".concat(k,"/3/account/084zeeshankhan/images"),{headers:{Authorization:"Bearer ".concat(t)}})},logIn:function(){var t={client_id:_,response_type:"token"};window.location="".concat(k,"/oauth2/authorize?").concat(O.a.stringify(t))}},x={token:window.localStorage.getItem("token")},S={isLoggedIn:function(t){return!!t.token}},C={logIn:function(){console.log("hello"),y.logIn()},logout:function(t){var e=t.commit;e("setToken",null),window.localStorage.removeItem("token")},finalizeLogin:function(t,e){var n=t.commit,a=O.a.parse(e.replace("#",""));n("setToken",a.access_token),window.localStorage.setItem("token",a.access_token),at.push("/")}},L={setToken:function(t,e){t.token=e}},P={state:x,getters:S,actions:C,mutations:L},z=(n("96cf"),n("1da1")),T={images:[]},$={allImages:function(t){return t.images}},E={fetchImages:function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,a,o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.rootState,o=a.auth.token,e.next=4,y.fetchImages(o);case 4:r=e.sent,n("setImages",r.data.data);case 6:case"end":return e.stop()}}),e)})))()},uploadImages:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.rootState,o=a.auth.token,n.next=4,y.uploadImages(e,o);case 4:at.push("/");case 5:case"end":return n.stop()}}),n)})))()}},A={setImages:function(t,e){t.images=e}},M={state:T,getters:$,actions:E,mutations:A};a["a"].use(u["a"]);var R=new u["a"].Store({modules:{auth:P,images:M}}),B=n("8c4f"),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Please wait... ")])},H=[],J={methods:Object(s["a"])({},Object(u["b"])(["finalizeLogin"])),created:function(){this.finalizeLogin(window.location.hash)}},F=J,G=Object(p["a"])(F,D,H,!1,null,"06ae7832",null),U=G.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoggedIn?n("div",{staticClass:"image-list"},t._l(t.allImages,(function(t,e){return n("li",{key:e},[n("img",{attrs:{src:t.link,alt:""}})])})),0):n("h2",[t._v("Log In to get started!")])},K=[],N={computed:Object(s["a"])({},Object(u["c"])(["allImages","isLoggedIn"])),methods:Object(s["a"])({},Object(u["b"])(["fetchImages"])),created:function(){this.fetchImages()}},Q=N,V=(n("7c6a"),Object(p["a"])(Q,q,K,!1,null,"34b006ee",null)),W=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropper"},[n("input",{attrs:{type:"file",multiple:"",accept:"image/*"},on:{change:t.upload}}),n("span",[t._v("Drag files here!")])])},Y=[],Z={methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["uploadImages"])),{},{upload:function(t){this.uploadImages(t.target.files)}})},tt=Z,et=(n("3549"),Object(p["a"])(tt,X,Y,!1,null,"7b71bc66",null)),nt=et.exports;a["a"].config.productionTip=!1,a["a"].use(B["a"]);var at=new B["a"]({mode:"history",routes:[{path:"/",component:W},{path:"/upload",component:nt},{path:"/oauth2/callback",component:U}]});new a["a"]({store:R,router:at,render:function(t){return t(b)}}).$mount("#app")},"75a3":function(t,e,n){},"7c6a":function(t,e,n){"use strict";var a=n("8db7"),o=n.n(a);o.a},"8db7":function(t,e,n){},"964b":function(t,e,n){"use strict";var a=n("75a3"),o=n.n(a);o.a}});
//# sourceMappingURL=app.b181d684.js.map