(this["webpackJsonpema-jonh-ecommerce"]=this["webpackJsonpema-jonh-ecommerce"]||[]).push([[0],{53:function(e,t,c){},54:function(e,t,c){},57:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c.n(n),i=c(39),s=c.n(i),j=(c(53),c(19)),a=c(12),o=(c(54),c(9)),l=c(30),b=c(40),d={apiKey:"AIzaSyBbzyRzW8Yp-Obr7MHq6qVDRjqSsPvugJo",authDomain:"ema-jonh-ecommerce.firebaseapp.com",projectId:"ema-jonh-ecommerce",storageBucket:"ema-jonh-ecommerce.appspot.com",messagingSenderId:"25179724132",appId:"1:25179724132:web:b14ab77b6874f38f024271"};(function(){Object(b.a)(d)})();var u=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(l.b)(),s=new l.a;return Object(n.useEffect)((function(){Object(l.c)(i,(function(e){e&&r(e)}))}),[]),{signInUsingGoogle:function(){return Object(l.d)(i,s)},user:c,logOut:function(){Object(l.e)(i).then((function(){r({})}))}}},h=c(3),O=Object(n.createContext)(),x=function(e){var t=e.children,c=u();return Object(h.jsx)(O.Provider,{value:c,children:t})},p=function(){return Object(n.useContext)(O)},f=c.p+"static/media/logo.0dd9a510.png",m=(c(57),function(){var e=p(),t=e.user,c=e.logOut;return Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("img",{src:f,alt:""}),Object(h.jsxs)("li",{children:[Object(h.jsx)(j.c,{to:"/shop",children:"Shop"}),Object(h.jsx)(j.c,{to:"/orders",children:"Orders"}),Object(h.jsx)(j.c,{to:"/inventory",children:"Manage Inventory"}),Object(h.jsx)(j.c,{to:"/register",children:"Register"}),t.email&&Object(h.jsxs)("span",{style:{color:"white"},children:["Hello, ",t.displayName]}),t.email?Object(h.jsx)("button",{onClick:c,children:"Log Out"}):Object(h.jsx)(j.c,{to:"/login",children:"Login"})]})]})}),v=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"This is inventory"})})},g=(c(62),function(){var e,t=p().signInUsingGoogle,c=Object(a.g)(),n=(null===(e=Object(a.h)().state)||void 0===e?void 0:e.from)||"/shop";return Object(h.jsx)("div",{className:"loginForm",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:"",children:[Object(h.jsx)("label",{htmlFor:"email",children:"You Email: "}),Object(h.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",id:""})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(h.jsx)("input",{type:"password",name:"password",placeholder:"You Password",id:""})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]}),Object(h.jsxs)("p",{children:["New To Ema-Jonh Website ? ",Object(h.jsx)(j.b,{to:"/register",children:"Create Account"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){t().then((function(e){c.push(n)})).catch((function(e){console.log(e.message)}))},className:"btn__regular",children:"Google Sign In"})})]})})}),y=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Error 404"}),Object(h.jsx)("p",{children:"This is wrong place now"})]})},S=function(){return localStorage.getItem("shopping_cart")},_=function(e){localStorage.setItem("shopping_cart",JSON.stringify(e))},N=function(){var e=S();return e?JSON.parse(e):{}},w=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){if(e.length){var t=N(),c=[],n=function(n){var r=e.find((function(e){return e.key===n}));if(r){var i=t[n];r.quantity=i,c.push(r)}};for(var r in t)n(r);i(c)}}),[e]),[r,i]},k=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("./products.json").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),[c]},C=c(13),F=(c(63),function(e){var t,c=e.cart,n=0,r=0,i=0,s=0,j=0,a=0,o=Object(C.a)(c);try{for(o.s();!(t=o.n()).done;){var l=t.value;l.quantity||(l.quantity=1),n+=l.quantity,j=l.price,i=l.shipping}}catch(b){o.e(b)}finally{o.f()}return a=(r=(r+j)*n)+(s=r/10)+i,Object(h.jsxs)("div",{className:"cart__style",children:[Object(h.jsx)("h2",{children:"Order Summary"}),Object(h.jsxs)("p",{children:["Items Ordered: ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("p",{children:["Shipping and Handling: ",Object(h.jsxs)("span",{children:["$",i.toFixed(2)]})]}),Object(h.jsxs)("p",{children:["Total before tax: ",Object(h.jsxs)("span",{children:["$",r.toFixed(2)]})]}),Object(h.jsxs)("p",{children:["Estimated Tax: ",Object(h.jsxs)("span",{children:["$",s.toFixed(2)]})]}),Object(h.jsxs)("h3",{children:["Order Total: ",Object(h.jsxs)("span",{children:["$",a.toFixed(2)]})]}),e.children]})}),I=function(e){var t=e.product,c=t.name,n=t.price,r=t.quantity,i=t.img,s=t.key,j=e.handleRemove;return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:i,alt:""})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:c}),Object(h.jsxs)("h4",{children:["$",n]}),Object(h.jsxs)("p",{children:["Quantity: ",r]}),Object(h.jsx)("button",{onClick:function(){return j(s)},className:"btn__regular",children:"Remove"})]})]})},E=function(){var e=k(),t=Object(o.a)(e,1)[0],c=w(t),n=Object(o.a)(c,2),r=n[0],i=n[1],s=Object(a.g)(),j=function(e){var t=r.filter((function(t){return t.key!==e}));i(t),function(e){var t=S();if(t){var c=JSON.parse(t);delete c[e],_(c)}}(e)};return Object(h.jsxs)("div",{className:"shop",children:[Object(h.jsx)("div",{className:"product__container",children:r.map((function(e){return Object(h.jsx)(I,{handleRemove:j,product:e},e.key)}))}),Object(h.jsx)("div",{className:"cart__container",children:Object(h.jsx)(F,{cart:r,children:Object(h.jsx)("button",{onClick:function(){s.push("/shipping")},className:"btn__regular",children:"Proceed to Shipping"})})})]})},T=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Order Taken"})})},q=c(29),P=c(48),R=function(e){var t=e.children,c=Object(P.a)(e,["children"]),n=p().user;return Object(h.jsx)(a.b,Object(q.a)(Object(q.a)({},c),{},{render:function(e){var c=e.location;return n.email?t:Object(h.jsx)(a.a,{to:{pathname:"/login",state:{from:c}}})}}))},Y=(c(64),function(){return Object(h.jsx)("div",{className:"registerForm",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Register"}),Object(h.jsxs)("form",{onChange:"",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Your Name: "}),Object(h.jsx)("input",{type:"text",name:"name",id:""})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"email",children:"Your Email: "}),Object(h.jsx)("input",{type:"email",name:"email",id:""})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"You Password: "}),Object(h.jsx)("input",{type:"password",name:"password",id:""})," ",Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"password",children:"Re-Enter Your  vPassword: "}),Object(h.jsx)("input",{type:"password",name:"password",id:""})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]}),Object(h.jsxs)("p",{children:["Already have an account ",Object(h.jsx)(j.b,{to:"/login",children:"Login"})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn__regular",children:"Google Sign In"})})]})})}),J=c(43),L=(c(65),function(){var e=Object(J.a)(),t=e.register,c=e.handleSubmit,n=e.formState.errors,r=p().user;return Object(h.jsx)("div",{children:Object(h.jsxs)("form",{className:"shipping__form",onSubmit:c((function(e){console.log(e)})),children:[Object(h.jsx)("input",Object(q.a)({defaultValue:r.displayName},t("name"))),Object(h.jsx)("input",Object(q.a)({defaultValue:r.email},t("email",{required:!0}))),n.email&&Object(h.jsx)("span",{className:"error",children:"This field is required"}),Object(h.jsx)("input",{type:"submit"})]})})}),A=c(14),$=c(46),B=c(44),G=c(45),z=(c(69),function(e){var t=e.product,c=t.name,n=t.img,r=t.price,i=t.seller,s=t.stock,j=t.star;return Object(h.jsxs)("div",{className:"product",children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:n,alt:""})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{style:{color:"#0000ff",fontWeight:"500"},children:c}),Object(h.jsxs)("p",{children:["by: ",i]}),Object(h.jsxs)("h4",{children:["$",r]}),Object(h.jsxs)("p",{children:["only ",s," left in stock - Order Soon"]}),Object(h.jsx)(G.a,{initialRating:j,emptySymbol:"far fa-star icon__style",fullSymbol:"fas fa-star icon__style"})," ",Object(h.jsx)("br",{}),Object(h.jsxs)("button",{onClick:function(){return e.handleAddToCart(e.product)},className:"btn__regular",children:[Object(h.jsx)(B.a,{icon:$.a}),"  Add to Cart"]})]})]})}),D=(c(70),function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(o.a)(i,2),j=s[0],a=s[1],l=Object(n.useState)([]),b=Object(o.a)(l,2),d=b[0],u=b[1];Object(n.useEffect)((function(){fetch("./products.json").then((function(e){return e.json()})).then((function(e){r(e),u(e)}))}),[]);var O=function(e){var t=[].concat(Object(A.a)(j),[e]);a(t),function(e){var t=S(),c={};if(t)if((c=JSON.parse(t))[e]){var n=c[e]+1;c[e]=n}else c[e]=1;else c[e]=1;_(c)}(e.key)};return Object(n.useEffect)((function(){var e=N(),t=[],n=function(n){var r=c.find((function(e){return e.key===n}));if(r){var i=e[n];r.quantity=i,t.push(r)}a(t)};for(var r in e)n(r)}),[c]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"search__container",children:Object(h.jsx)("input",{onChange:function(e){var t=e.target.value,n=c.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));u(n)},type:"text",placeholder:"Search Your Products"})}),Object(h.jsxs)("div",{className:"shop",children:[Object(h.jsx)("div",{className:"shop__container",children:d.map((function(e){return Object(h.jsx)(z,{handleAddToCart:O,product:e},e.key)}))}),Object(h.jsx)("div",{className:"order__container",children:Object(h.jsx)(F,{cart:j})})]})]})});var H=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(x,{children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(a.d,{children:[Object(h.jsx)(a.b,{exact:!0,path:"/",children:Object(h.jsx)(D,{})}),Object(h.jsx)(a.b,{path:"/shop",children:Object(h.jsx)(D,{})}),Object(h.jsx)(a.b,{path:"/orders",children:Object(h.jsx)(E,{})}),Object(h.jsx)(R,{path:"/inventory",children:Object(h.jsx)(v,{})}),Object(h.jsx)(R,{path:"/placeorder",children:Object(h.jsx)(T,{})}),Object(h.jsx)(R,{path:"/shipping",children:Object(h.jsx)(L,{})}),Object(h.jsx)(j.a,{path:"/login",children:Object(h.jsx)(g,{})}),Object(h.jsx)(j.a,{path:"/register",children:Object(h.jsx)(Y,{})}),Object(h.jsx)(a.b,{path:"*",children:Object(h.jsx)(y,{})})]})]})})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root")),M()}},[[71,1,2]]]);
//# sourceMappingURL=main.1bae2661.chunk.js.map