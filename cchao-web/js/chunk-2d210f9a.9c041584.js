(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210f9a"],{b9d1:function(t,a,s){"use strict";s.r(a);var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container my-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-9"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-around"},[s("div",{staticClass:"col-md-3 p-2 rounded-pill border border-primary text-primary text-center"},[t._v("1.填寫訂購資料")]),s("div",{staticClass:"col-md-3 p-2 rounded-pill border border-primary text-primary text-center my-3 my-md-0",class:{"alert-primary":!t.order.is_paid}},[t._v("2.金流付款")]),s("div",{staticClass:"col-md-3 p-2 rounded-pill border border-primary text-primary text-center",class:{"alert-primary":t.order.is_paid}},[t._v("3.訂單完成")])])])]),s("form",{staticClass:"col-md-6 mt-5",on:{submit:function(a){return a.preventDefault(),t.payOrder(a)}}},[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.order.products,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"text-nowrap align-middle"},[t._v(t._s(a.product.title))]),s("td",{staticClass:"text-nowrap align-middle"},[t._v(t._s(a.qty)+"/"+t._s(a.product.unit))]),s("td",{staticClass:"text-nowrap align-middle text-right"},[t._v(t._s(t._f("currency")(a.final_total)))])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(t.order.total)))])])])])]),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table"},[s("tbody",[s("tr",[s("th",{staticClass:"text-nowrap",attrs:{width:"100"}},[t._v("Email")]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t.order.user.email))])]),s("tr",[s("th",{staticClass:"text-nowrap"},[t._v("姓名")]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t.order.user.name))])]),s("tr",[s("th",{staticClass:"text-nowrap"},[t._v("收件人電話")]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t.order.user.tel))])]),s("tr",[s("th",{staticClass:"text-nowrap"},[t._v("收件人地址")]),s("td",{staticClass:"text-nowrap"},[t._v(t._s(t.order.user.address))])]),s("tr",[s("th",{staticClass:"text-nowrap"},[t._v("付款狀態")]),s("td",{staticClass:"text-nowrap"},[t.order.is_paid?s("span",{staticClass:"text-success"},[t._v("付款完成")]):s("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])])])]),!1===t.order.is_paid?s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e(),!0===t.order.is_paid?s("div",{staticClass:"text-center"},[s("router-link",{staticClass:"btn btn-outline-secondary mr-1",attrs:{to:"/"}},[t._v("回首頁")]),s("router-link",{staticClass:"btn btn-outline-primary ml-1",attrs:{to:"/products"}},[t._v("繼續購物去")])],1):t._e()])])])],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",{staticClass:"text-nowrap"},[t._v("品名")]),s("th",{staticClass:"text-nowrap",attrs:{width:"100"}},[t._v("數量")]),s("th",{staticClass:"text-nowrap text-right",attrs:{width:"150"}},[t._v("總價格")])])}],i=(s("99af"),{data:function(){return{orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this;t.$store.dispatch("updataLoading",!0);var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("cchao","/order/").concat(t.orderId);t.$http.get(a).then((function(a){t.order=a.data.order,t.$store.dispatch("updataLoading",!1)}))},payOrder:function(){var t=this;t.$store.dispatch("updataLoading",!0);var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("cchao","/pay/").concat(t.orderId);t.$http.post(a).then((function(a){t.getOrder(),t.$store.dispatch("updataLoading",!1)}))}},created:function(){var t=this;t.orderId=t.$route.params.orderId,t.getOrder()},computed:{isLoading:function(){return this.$store.state.isLoading}}}),o=i,d=s("2877"),n=Object(d["a"])(o,r,e,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d210f9a.9c041584.js.map