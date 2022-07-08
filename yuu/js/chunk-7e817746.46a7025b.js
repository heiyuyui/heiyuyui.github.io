(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e817746"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example "}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:!t.childPagination.has_pre}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.childChangePage(t.childPagination.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.childPagination.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.childPagination.current_page===a}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.childChangePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:!t.childPagination.has_next}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.childChangePage(t.childPagination.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],o={data:function(){return{}},props:{childPagination:{type:Object}},methods:{childChangePage:function(t){this.$emit("childChangePage",t)}}},r=o,n=e("2877"),c=Object(n["a"])(r,i,s,!1,null,null,null);a["a"]=c.exports},a54c:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"text-right mt-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.openModal(!0)}}},[t._v("建立新產品")])]),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.products,(function(a){return e("tr",{key:a.id},[e("td",{staticClass:"text-nowrap"},[t._v(t._s(a.category))]),e("td",{staticClass:"text-nowrap"},[t._v(t._s(a.title))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.origin_price)))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(a.price)))]),e("td",[a.is_enabled?e("span",{staticClass:"text-success"},[t._v("啟用")]):e("span",{staticClass:"text-danger"},[t._v("未啟用")])]),e("td",[e("div",{staticClass:"btn-group text-nowrap"},[e("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(e){return t.openModal(!1,a)}}},[t._v("編輯")]),e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.delProductModal(a)}}},[t._v("刪除")])])])])})),0)])]),e("Pagination",{attrs:{childPagination:t.Pagination},on:{childChangePage:t.getProducts}}),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[e("div",{staticClass:"modal-header bg-primary text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v(t._s(t.modalTitle))])]),t._m(1)]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.image,expression:"tempProduct.image"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.image},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"image",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.fileUploading?e("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),e("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),e("img",{staticClass:"img-fluid",attrs:{src:t.tempProduct.image,alt:""}})]),e("div",{staticClass:"col-sm-8"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("標題")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"title",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"category"}},[t._v("分類")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"category",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"unit"}},[t._v("單位")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"unit",a.target.value)}}})])]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"origin_price"}},[t._v("原價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"origin_price",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"price"}},[t._v("售價")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"price",a.target.value)}}})])]),e("hr"),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("產品描述")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"description",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"content"}},[t._v("說明內容")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(a){a.target.composing||t.$set(t.tempProduct,"content",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-check"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-vlaue":1,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(a){var e=t.tempProduct.is_enabled,i=a.target,s=!!i.checked&&1;if(Array.isArray(e)){var o=null,r=t._i(e,o);i.checked?r<0&&t.$set(t.tempProduct,"is_enabled",e.concat([o])):r>-1&&t.$set(t.tempProduct,"is_enabled",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.tempProduct,"is_enabled",s)}}}),e("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.updataProduct(t.isNew)}}},[t._v("確認")])])])])]),e("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content border-0"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" 是否刪除 "),e("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deldataProduct}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-nowrap",attrs:{width:"120"}},[t._v("分類")]),e("th",{staticClass:"text-nowrap"},[t._v("產品名稱")]),e("th",{staticClass:"text-nowrap",attrs:{width:"120"}},[t._v("原價")]),e("th",{staticClass:"text-nowrap",attrs:{width:"120"}},[t._v("售價")]),e("th",{staticClass:"text-nowrap",attrs:{width:"120"}},[t._v("是否啟用")]),e("th",{staticClass:"text-nowrap",attrs:{width:"120"}},[t._v("編輯")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[t._v("刪除產品")])]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],o=(e("99af"),e("1157")),r=e.n(o),n=e("1799"),c={data:function(){return{products:[],modalTitle:"建立新產品",tempProduct:{},isNew:!1,fileUploading:!1,Pagination:{}}},components:{Pagination:n["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/admin/products?page=").concat(t);a.$store.dispatch("updataLoading",!0),a.$http.get(e).then((function(t){console.log(t),a.products=t.data.products,a.$store.dispatch("updataLoading",!1),a.Pagination=t.data.pagination}))},openModal:function(t,a){var e=this;t?(e.modalTitle="建立新產品",e.tempProduct={},e.isNew=!0):(e.modalTitle="修改產品",e.tempProduct=Object.assign({},a),e.isNew=!1),r()("#productModal").modal("show")},updataProduct:function(t){var a=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/admin/product"),i="post";t||(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/admin/product/").concat(a.tempProduct.id),i="put"),a.$http[i](e,{data:a.tempProduct}).then((function(t){t.data.success&&(a.getProducts(),r()("#productModal").modal("hide"))}))},delProductModal:function(t){var a=this;a.tempProduct=t,r()("#delProductModal").modal("show")},deldataProduct:function(){var t=this;t.$store.dispatch("updataLoading",!0);var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/admin/product/").concat(t.tempProduct.id);t.$http.delete(a).then((function(a){a.data.success&&t.getProducts()})),r()("#delProductModal").modal("hide")},uploadFile:function(){var t=this,a=this.$refs.files.files[0],e=this.$refs.files.id;t.fileUploading=!0;var i=new FormData;i.append("file-to-upload",a);var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("hheeiiyyuu","/admin/upload");t.$http.post(s,i,{header:{"Content-Type":"multipart/form-data"}}).then((function(a){a.data.success?t.$set(t.tempProduct,"imageUrl",a.data.imageUrl):t.$store.dispatch("updateMessage",{message:a.data.message,status:"danger"}),document.getElementById(e).value="",t.fileUploading=!1}))}},created:function(){var t=this;t.getProducts()},computed:{isLoading:function(){return this.$store.state.isLoading}}},l=c,d=e("2877"),u=Object(d["a"])(l,i,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e817746.46a7025b.js.map