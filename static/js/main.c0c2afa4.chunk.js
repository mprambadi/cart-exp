(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},22:function(e,t,a){"use strict";(function(e){var n=a(3),c=a(28),r=a(14),i=a.n(r),l=a(23),s=a(4),o=a(6),m=a(7),u=a(9),d=a(8),f=a(10),h=a(0),v=a.n(h),g=(a(12),a(27)),b=a(30),E=a(29),p=a(25),N=a.n(p),w=a(26),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,m=new Array(r),f=0;f<r;f++)m[f]=arguments[f];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(m)))).state={carts:[],activeTab:0,loading:!1,items:[],filter:""},a.changeCart=function(e){a.setState(function(t){return{carts:t.carts.map(function(t){return t.id===e.id?Object(s.a)({},t,e,{total:e.count*t.price}):t})}})},a.fetchData=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,N.a.get("https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json");case 3:t=e.sent,n=t.data,a.setState({loading:!1,items:n});case 6:case"end":return e.stop()}},e,this)})),a.addItem=function(e){a.setState(function(t){return{carts:t.carts.find(function(t){return t.id===e.id})?t.carts.map(function(t){return t.id===e.id?Object(s.a)({},t,e,{count:t.count+e.count,total:t.total+e.total}):t}):Object(c.a)(t.carts).concat([e])}})},a.changeState=function(e){var t=e.name,c=e.value;a.setState(Object(n.a)({},t,c))},a.removeCart=function(e){a.setState(function(t){return{carts:t.carts.filter(function(t){return t.id!==e.id})}})},a.filter=function(e){return a.state[e].filter(function(e){return-1!==[e.name].join(" ").toLowerCase().indexOf(a.state.filter)})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e={0:E.a,1:b.a}[this.state.activeTab],t=this.filter("items"),a=this.filter("carts"),n=a.map(function(e){return e.total}).reduce(function(e,t){return e+t},0),c=this.state.carts.length;return v.a.createElement("div",{className:"bg-light"},v.a.createElement(g.a,{changeState:this.changeState,state:this.state,carts:a,total:n,count:c}),v.a.createElement(e,{addItem:this.addItem,state:this.state,changeCart:this.changeCart,removeCart:this.removeCart,changeState:this.changeState,items:t,carts:a,total:n}))}}]),t}(h.Component);t.a=Object(w.hot)(e)(x)}).call(this,a(36)(e))},24:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},27:function(e,t,a){"use strict";var n=a(11),c=a(0),r=a.n(c),i=a(2),l=function(e){var t=e.state,a=e.changeState;return r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",{className:"input-group d-flex justify-content-end"},r.a.createElement("input",{type:"text",className:"form-control text-center d-block",placeholder:"search",value:t.filter,name:"filter",onChange:function(e){var t=e.target,n=t.name,c=t.value;return a({name:n,value:c})}}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn",type:"button",id:"button-addon2"},r.a.createElement(i.d,{style:{width:24,height:24}})))))},s=a(24),o=a.n(s),m=function(e){var t=e.changeState;return r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("img",{src:o.a,width:"60",height:"60",alt:"logo",className:"App-logo",onClick:function(){return t({name:"activeTab",value:"0"})}}),r.a.createElement("div",{className:"navbar-brand d-none d-sm-block d-md-block text-white",onClick:function(){return t({name:"activeTab",value:"0"})}},"Store"))},u=function(e){var t=e.changeState,a=e.total,c=Object(n.a)(e,["changeState","total"]);return r.a.createElement("div",{className:"d-flex align-items-center justify-content-between w-25"},a?r.a.createElement("div",{className:"text-white d-none d-sm-block d-md-block"},"Total: $ ",a):r.a.createElement("span",{className:"text-white d-none d-sm-block d-md-block"},"Total:"),r.a.createElement("div",{className:"btn btn-outline-success ml-1",onClick:function(){return t({name:"activeTab",value:"1"})}},r.a.createElement(i.e,{style:{width:24,height:24}}),r.a.createElement("span",{className:"badge badge-primary"},c.count)))};t.a=function(e){var t=e.changeState,a=e.state,c=Object(n.a)(e,["changeState","state"]);return r.a.createElement("div",{className:"fixed-top bg-dark app-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement(m,{changeState:t}),r.a.createElement(l,{state:a,changeState:t}),r.a.createElement(u,Object.assign({changeState:t,state:a},c)))))}},29:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(3),i=a(4),l=a(6),s=a(7),o=a(9),m=a(8),u=a(10),d=a(5),f=a(2),h=(a(12),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={count:1},a.handleCount=function(e){a.setState(function(t){return{count:t.count?parseInt(t.count)+parseInt(e):1}})},a.addItem=function(){var e=Object(d.a)(Object(d.a)(a)),t=e.props,n=t.item,c=t.addItem,r=e.state.count;r>0&&(c(Object(i.a)({id:n.id,count:r,price:n.price,total:n.price*r},n)),a.setState({count:1}))},a.changeCount=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(r.a)({},n,c>0?c.replace(/[^0-9]/g,""):1))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.state,n=t.item;return c.a.createElement("div",{className:"col-lg-3 col-md-3 col-md-6 col-6 mb-5"},c.a.createElement("div",{className:"item-content bg-white ".concat(a.loading&&"item-blur")},c.a.createElement("img",{className:"col",src:n.image,alt:"gambar"}),c.a.createElement("div",{className:"d-flex flex-column align-items-center"},c.a.createElement("div",null,n.name),c.a.createElement("div",null,"$ ",n.price),c.a.createElement("div",{className:"d-flex flex-row align-items-center justify-content-center mb-2"},c.a.createElement("div",{className:"btn p-1"},c.a.createElement(f.c,{style:{width:24,height:24},onClick:function(){return e.state.count>1&&e.handleCount(-1)}})),c.a.createElement("input",{placeholder:"0",className:"form-control w-25 text-center text-success",name:"count",value:this.state.count,onChange:this.changeCount}),c.a.createElement("div",{className:"btn p-1"},c.a.createElement(f.a,{style:{width:24,height:24,color:"#28a745"},onClick:function(){return e.handleCount(1)}}))),c.a.createElement("div",{className:"d-flex flex-row align-items-center justify-content-center mb-2 w-75 d-"},c.a.createElement("span",{className:"text-danger ".concat(this.state.count>0?"d-none":"d-inline")},"Minimal Pembelian adalah 1 barang")),c.a.createElement("button",{className:"btn btn-success mb-3 pl-3 pr-3 ".concat(this.state.count>0||"disabled"),onClick:this.addItem},"Add To Cart"))))}}]),t}(n.Component));t.a=function(e){var t=e.addItem,a=e.state,n=e.removeChart,r=e.items;return c.a.createElement("div",{className:"container content"},c.a.createElement("div",{className:"row"},r.map(function(e){return c.a.createElement(h,{key:e.id,addItem:t,item:e,state:a,removeChart:n})})))}},30:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(2),i=(a(12),function(e){var t=function(t){var a=e.item,n=e.changeCart,c=e.removeCart;a.count<1&&c({id:a.id}),n({id:a.id,count:a.count+t})},a=e.item,n=e.removeCart;return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex justify-content-between  border-bottom align-items-center"},c.a.createElement("div",{className:"d-flex align-items-center ml-2"},c.a.createElement("img",{src:a.image,alt:"gambar",height:"100"}),c.a.createElement("div",{className:"d-flex flex-column align-items-center"},c.a.createElement("div",null,a.name),c.a.createElement("div",null,a.price))),c.a.createElement("div",{className:"d-flex flex-column align-items-end "},c.a.createElement("div",{className:"d-flex flex-row justify-content-end align-items-center  mb-2 mr-2 "},c.a.createElement("div",{className:"btn p-0"},c.a.createElement(r.c,{style:{width:24,height:24},onClick:function(){return t(-1)}})),c.a.createElement("input",{type:"text",placeholder:"0",className:"form-control text-center text-success w-25",name:"count",value:a.count,onChange:function(t){var a=t.target,n=(a.name,a.value),c=e.item;(0,e.changeCart)({id:c.id,count:n>0?n.replace(/[^0-9]/g,""):1})}}),c.a.createElement("div",{className:"btn p-0"},c.a.createElement(r.a,{style:{width:24,height:24,color:"#28a745"},onClick:function(){return t(1)}})),c.a.createElement("div",{className:"btn p-0"},c.a.createElement(r.b,{style:{width:24,height:24},onClick:function(){return n({id:a.id})}}))),c.a.createElement("div",{className:"text-right bg-white mr-2"},"Total $ ",a.total),c.a.createElement("div",{className:"d-flex flex-row align-items-center justify-content-center mb-2 w-75 d-"},c.a.createElement("span",{className:"text-danger ".concat(a.count>0?"d-none":"d-inline")},"Minimal Pembelian adalah 1 barang")))))});t.a=function(e){var t=e.state,a=e.changeCart,n=e.removeCart,r=e.carts,l=e.total,s=e.changeState;return c.a.createElement("div",{className:"container content"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"w-100 bg-white"},r.map(function(e){return c.a.createElement(i,{key:e.id,changeCart:a,item:e,state:t,removeCart:n})}),l>0?c.a.createElement("div",{className:"d-flex justify-content-end mt-2"},c.a.createElement("div",{className:"d-flex flex-column align-items-center mr-5"},c.a.createElement("div",null,"Total $",l),c.a.createElement("button",{className:"btn btn-success mb-3 pl-3 pr-3",onClick:a},"Checkout"))):c.a.createElement("div",{className:"d-flex justify-content-center mt-3",onClick:function(){return s({name:"activeTab",value:"0"})}},c.a.createElement("div",{className:"d-flex flex-column align-items-center mb-5"},c.a.createElement("div",{className:"h1"},"Empty Cart"),c.a.createElement("div",{className:"btn btn-success"},"Add Item"))))))}},31:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),i=a.n(r),l=a(22);a(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(l.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.c0c2afa4.chunk.js.map