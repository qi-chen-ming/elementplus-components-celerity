(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.index=t(e.Vue))})(this,function(e){"use strict";const t=e.defineComponent({__name:"index",props:{percentage:{type:Number,required:!0},isAnimate:{type:Boolean,default:!1},time:{type:Number,default:3e3}},setup(o){const n=o;e.ref(0);let r=e.ref(0);return e.onMounted(()=>{if(n.isAnimate){let i=Math.ceil(n.time/n.percentage),p=setInterval(()=>{r.value+=1,r.value>=n.percentage&&(r.value=n.percentage,clearInterval(p))},i)}}),(i,p)=>{const s=e.resolveComponent("el-progress");return e.openBlock(),e.createBlock(s,e.mergeProps({percentage:e.unref(r)},i.$attrs),null,16,["percentage"])}}});return{install(o){o.component("ecc-progress",t)}}});
