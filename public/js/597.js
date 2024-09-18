/*! For license information please see 597.ts.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[597],{250:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(645),i=r.n(n)()((function(t){return t[1]}));i.push([t.id,"#app{margin:60px;text-align:center}tbody,td,tfoot,th,thead,tr{text-align:left;vertical-align:middle;width:100px}pre{color:#d63384;text-align:left}",""]);const o=i},597:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new k(n||[]);return o(a,"_invoke",{value:L(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function h(){}function y(){}function v(){}var g={};d(g,c,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(j([])));m&&m!==e&&r.call(m,c)&&(g=m);var x=v.prototype=h.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function i(o,a,c,u){var s=p(t[o],t,a);if("throw"!==s.type){var d=s.arg,l=d.value;return l&&"object"==n(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(l).then((function(t){d.value=t,c(d)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return Q()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var c=P(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=p(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,f;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:Q}}function Q(){return{value:void 0,done:!0}}return y.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=d(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,d(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(_.prototype),d(_.prototype,u,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new _(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),d(x,s,"Generator"),d(x,c,(function(){return this})),d(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function o(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,i)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const s={name:"products",props:["canEdit","canApply"],data:function(){return{products:[],calculatedPrice:0,requestedQuantity:0,isLoading:!1,fields:[{key:"productID",label:"ID"},{key:"description",label:"Description"},{key:"quantity",label:"Quantity (Units)"}]}},mounted:function(){this.canApply&&this.fields.push({key:"apply",label:"Calculate application value"}),this.canEdit&&this.fields.push({key:"edit",label:""}),this.getProducts()},methods:{editRowHandler:function(t){this.products[t.index].isEdit&&(this.createOrUpdateProduct(this.products[t.index].description,this.products[t.index].productID),this.getProducts()),this.products[t.index].isEdit=!this.products[t.index].isEdit},inputHandler:function(t,e,r){this.products[e][r]=t,this.$set(this.products,e,this.products[e]),this.$emit("input",this.products)},addRowHandler:function(){var t=this.fields.reduce((function(t,e){return c(c({},t),{},u({},e.key,null))}),{});t.isEdit=!0,this.products.unshift(t),this.$emit("input",this.products)},getProducts:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.axios.get("/api/products").then((function(t){e.products=t.data,e.products=e.products.map((function(t){return c(c({},t),{},{isEdit:!1})})),e.isLoading=!1})).catch((function(t){console.log(t),e.products=[],e.isLoading=!1}));case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))})()},createOrUpdateProduct:function(t,e){var r=this;this.isLoading=!0;var n=0;null!=e&&(n=e),this.axios.put("/api/products/edit/".concat(t,"/").concat(n)).then((function(t){r.getProducts(),r.isLoading=!1})).catch((function(t){console.log(t),r.isLoading=!1}))},getPriceForQuantity:function(t){var e=this;return this.products[t.index].requestedQuantity<=0?(this.products[t.index].invalidQty=!0,void this.$refs.productTable.refresh()):this.products[t.index].requestedQuantity>this.products[t.index].quantity?(this.products[t.index].insufficientQty=!0,void this.$refs.productTable.refresh()):(this.isLoading=!0,void this.axios.get("/api/products/preapply/".concat(this.products[t.index].productID,"/").concat(this.products[t.index].requestedQuantity)).then((function(r){e.products[t.index].calculatedPrice=r.data,e.products[t.index].showPrice=!0,e.$refs.productTable.refresh(),e.isLoading=!1})).catch((function(t){e.isLoading=!1,console.log(t)})))},applyQuantity:function(t){var e=this;this.isLoading=!0,this.axios.put("/api/products/apply/".concat(this.products[t.index].productID,"/").concat(this.products[t.index].requestedQuantity)).then((function(r){e.getProducts(),e.products[t.index].showPrice=!1,e.isLoading=!1})).catch((function(t){e.isLoading=!1,console.log(t)}))},quantityChanged:function(t){this.products[t.index].showPrice=!1,this.products[t.index].invalidQty=!1,this.products[t.index].insufficientQty=!1,this.$refs.productTable.refresh()}}};var d=r(379),l=r.n(d),p=r(250),f={insert:"head",singleton:!1};l()(p.Z,f);p.Z.locals;const h=(0,r(900).Z)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("b-overlay",{attrs:{show:t.isLoading,rounded:"sm"}},[e("b-table",{ref:"productTable",attrs:{items:t.products,fields:t.fields},scopedSlots:t._u([{key:"cell(description)",fn:function(r){return[t.products[r.index].isEdit?e("b-form-input",{attrs:{type:"text"},model:{value:t.products[r.index].description,callback:function(e){t.$set(t.products[r.index],"description",e)},expression:"products[data.index].description"}}):e("span",[t._v(t._s(r.value))])]}},{key:"cell(apply)",fn:function(r){return[e("input",{directives:[{name:"model",rawName:"v-model",value:t.products[r.index].requestedQuantity,expression:"products[data.index].requestedQuantity"}],attrs:{type:"number",min:"0"},domProps:{value:t.products[r.index].requestedQuantity},on:{change:function(e){return t.quantityChanged(r)},input:function(e){e.target.composing||t.$set(t.products[r.index],"requestedQuantity",e.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.getPriceForQuantity(r)}}},[t._v("\n                  Calculate\n                ")]),t._v(" "),t.products[r.index].showPrice?e("h4",[t._v("Value: $"+t._s(t.products[r.index].calculatedPrice))]):t._e(),t._v(" "),t.products[r.index].showPrice?e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.applyQuantity(r)}}},[t._v("Apply\n                ")]):t._e(),t._v(" "),t.products[r.index].showPrice?e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.quantityChanged(r)}}},[t._v("Cancel\n                ")]):t._e(),t._v(" "),e("b-alert",{attrs:{show:t.products[r.index].invalidQty,variant:"warning"}},[e("p",[t._v("Quantity must be greater than zero")])]),t._v(" "),e("b-alert",{attrs:{show:t.products[r.index].insufficientQty,variant:"warning"}},[e("p",[t._v("Quantity to be applied exceeds the quantity on hand")])])]}},{key:"cell(edit)",fn:function(r){return[e("b-button",{on:{click:function(e){return t.editRowHandler(r)}}},[t.products[r.index].isEdit?e("span",[t._v("Save")]):e("span",[t._v("Edit")])])]}}])}),t._v(" "),t.canEdit?e("b-button",{staticClass:"add-button",attrs:{variant:"success"},on:{click:t.addRowHandler}},[t._v("Add Item")]):t._e()],1)],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h4",[this._v("Inventory")])])}],!1,null,null,null).exports}}]);