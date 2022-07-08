(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f69588e"],{"5e61":function(t,r,s){"use strict";s.r(r);var i=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(r){t.isLoading=r}}}),s("div",{staticClass:"container my-5"},[s("div",{staticClass:"row pb-5 mb-5"},[s("div",{staticClass:"col-md-7"},[s("img",{staticClass:"img-fluid rounded",attrs:{src:t.product.imageUrl}})]),t.product.title?s("div",{staticClass:"col-md-5 card-body"},[s("h2",{staticClass:"card-title"},[t._v(t._s(t.product.title))]),s("hr"),s("blockquote",{staticClass:"blockquote mt-3"},[s("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),s("footer",{staticClass:"blockquote-footer text-right"},[t._v("產品規格："+t._s(t.product.description))])]),s("hr"),s("div",{staticClass:"text-right mb-3"},[t.product.origin_price!=t.product.price?s("del",{staticClass:"text-secondary h6 pr-3"},[t._v("原價 "+t._s(t._f("currency")(t.product.origin_price)))]):t._e(),t.product.origin_price!=t.product.price?s("span",{staticClass:"h5"},[t._v("優惠價")]):t._e(),t.product.origin_price===t.product.price?s("span",{staticClass:"h5"},[t._v("售價")]):t._e(),s("span",{staticClass:"text-danger h4"},[t._v(" "+t._s(t._f("currency")(t.product.price)))])]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control",on:{change:function(r){var s=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.product,"num",r.target.multiple?s:s[0])}}},t._l(10,(function(r){return s("option",{key:r,domProps:{value:r}},[t._v(t._s(r)+" "+t._s(t.product.unit))])})),0),s("div",{staticClass:"mt-3 text-right"},[s("span",{staticClass:"text-secondary h6 mr-3"},[t._v("小計 "+t._s(t._f("currency")(t.product.price*t.product.num)))]),s("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.addToCart(r)}}},[s("i",{staticClass:"fas fa-cart-plus"}),t._v(" 加到購物車 ")])])]):t._e()]),s("hr"),s("div",{staticClass:"d-flex justify-content-between align-items-baseline mb-3"},[s("div",{staticClass:"h4"},[t._v("您可能會喜歡的")]),s("router-link",{staticClass:"btn btn-outline-secondary",attrs:{to:"/products"}},[s("i",{staticClass:"fas fa-arrow-left"}),t._v(" 回商品列表 ")])],1),s("div",{staticClass:"row",class:{"d-none":0===t.filterProduct.length,"single-product":1===t.filterProduct.length,"multiple-product":t.filterProduct.length>1&&t.filterProduct.length<=4,"more-product":t.filterProduct.length>4}},t._l(t.filterProduct,(function(r){return s("div",{key:r.id,staticClass:"col-sm-6 col-md-3 mb-4"},[s("a",{staticClass:"card shadow-sm card-round",on:{click:function(s){return t.getProduct(r.id)}}},[s("div",{staticClass:"pic"},[s("div",{staticClass:"pic-enlarge",style:{backgroundImage:"url("+r.image+")"}})]),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary mb-2"},[t._v(t._s(r.category))]),s("h5",{staticClass:"card-title"},[t._v(t._s(r.title))])])])])})),0),s("div",{staticClass:"product-wrap mx-auto",class:{"d-none":0===t.filterProduct.length,"multiple-swiper":t.filterProduct.length>1&&t.filterProduct.length<=4,"single-swiper":1===t.filterProduct.length}},[s("swiper",{attrs:{options:t.swiperOption}},t._l(t.filterProduct,(function(r){return s("swiper-slide",{key:r.id,staticClass:"p-2"},[s("a",{staticClass:"card shadow-sm card-round",on:{click:function(s){return t.getProduct(r.id)}}},[s("div",{staticClass:"pic"},[s("div",{staticClass:"pic-enlarge",style:{backgroundImage:"url("+r.image+")"}})]),s("div",{staticClass:"card-body"},[s("span",{staticClass:"badge badge-secondary mb-2"},[t._v(t._s(r.category))]),s("h5",{staticClass:"card-title"},[t._v(t._s(r.title))])])])])})),1),s("div",{staticClass:"swiper-button swiper-button-left fas fa-chevron-circle-left fa-2x text-primary"}),s("div",{staticClass:"swiper-button swiper-button-right fas fa-chevron-circle-right fa-2x text-primary"})],1)])],1)},e=[],a=(s("99af"),s("4de4"),s("a7a3"),{data:function(){return{swiperOption:{observer:!0,loop:!0,observeParents:!0,slidesPerView:1,breakpoints:{540:{slidesPerView:2},768:{slidesPerView:3},992:{slidesPerView:4}},navigation:{nextEl:".swiper-button-right",prevEl:".swiper-button-left"}},productId:"",product:{}}},methods:{getProductId:function(t){var r=this,s=this;this.$store.dispatch("updataLoading",!0);var i="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/product/").concat(t);s.$http.get(i).then((function(t){s.product=t.data.product,s.product.num=1,s.product.imageUrl=t.data.product.image,r.$store.dispatch("updataLoading",!1)}))},addToCart:function(){this.$store.dispatch("addToCart",{id:this.productId,qty:this.product.num})},getProducts:function(){this.$store.dispatch("getProducts")},getProduct:function(t){var r=this;r.$router.push("/product/".concat(t)),r.productId=t,r.getProductId(t)}},computed:{filterProduct:function(){var t=this;return t.products.filter((function(r){if(r.id!==t.product.id)return r.category===t.product.category}))},isLoading:function(){return this.$store.state.isLoading},products:function(){return this.$store.state.products}},created:function(){var t=this;t.productId=t.$route.params.productId,t.getProductId(t.productId),t.getProducts()}}),c=a,o=s("2877"),d=Object(o["a"])(c,i,e,!1,null,null,null);r["default"]=d.exports},a7a3:function(t,r,s){}}]);
//# sourceMappingURL=chunk-2f69588e.3940ab03.js.map