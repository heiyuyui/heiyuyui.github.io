(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bec8d34"],{"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),s=n("2d00"),c=o("species");e.exports=function(e){return s>=51||!r((function(){var t=[],n=t.constructor={};return n[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),s=n("5c6c");e.exports=function(e,t,n){var c=r(t);c in e?o.f(e,c,s(0,n)):e[c]=n}},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),s=n("e8b5"),c=n("861d"),a=n("7b0b"),i=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),b=n("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",v=b>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),w=l("concat"),j=function(e){if(!c(e))return!1;var t=e[p];return void 0!==t?!!t:s(e)},O=!v||!w;r({target:"Array",proto:!0,forced:O},{concat:function(e){var t,n,r,o,s,c=a(this),l=d(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(s=-1===t?c:arguments[t],j(s)){if(o=i(s.length),f+o>h)throw TypeError(m);for(n=0;n<o;n++,f++)n in s&&u(l,f,s[n])}else{if(f>=h)throw TypeError(m);u(l,f++,s)}return l.length=f,l}})},a55b:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o={class:"container mt-5"},s={class:"col-md-6"},c=Object(r["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),a={class:"mb-2"},i=Object(r["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},d=Object(r["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),l=Object(r["h"])("div",{class:"text-end mt-4"},[Object(r["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function f(e,t,n,f,b,p){return Object(r["t"])(),Object(r["e"])("div",o,[Object(r["h"])("form",{class:"row justify-content-center",onSubmit:t[3]||(t[3]=Object(r["N"])((function(){return p.signIn&&p.signIn.apply(p,arguments)}),["prevent"]))},[Object(r["h"])("div",s,[c,Object(r["h"])("div",a,[i,Object(r["M"])(Object(r["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.user.username=e})},null,512),[[r["H"],b.user.username]])]),Object(r["h"])("div",u,[d,Object(r["M"])(Object(r["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.user.password=e})},null,512),[[r["H"],b.user.password]])]),l])],32)])}n("99af");var b={data:function(){return{user:{username:"",password:""}}},methods:{signIn:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){var n=t.data,r=n.token,o=n.expired;document.cookie="hexToken=".concat(r,"; expires=").concat(new Date(o)),e.$router.push("/dashboard/products")}else alert("Error !")}))}}};b.render=f;t["default"]=b}}]);
//# sourceMappingURL=chunk-4bec8d34.2b62810f.js.map