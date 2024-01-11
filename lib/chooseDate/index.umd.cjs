(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("vue")):typeof define=="function"&&define.amd?define(["vue"],o):(e=typeof globalThis<"u"?globalThis:e||self,e.index=o(e.Vue))})(this,function(e){"use strict";const o={style:{display:"flex"}},m={style:{"margin-right":"20px"}},u=e.defineComponent({__name:"index",props:{startPlaceholder:{type:String,default:"请选择开始日期"},endPlaceholder:{type:String,default:"请选择结束日期"},disableToday:{type:Boolean,default:!0},startDateOptions:{type:Object},endDateOptions:{type:Object}},emits:["startChange","endChange"],setup(a,{emit:p}){const f=a,c=p,n=e.ref(),l=e.ref(),i=e.ref(!0),h=t=>{if(f.disableToday)return t.getTime()<Date.now()-1e3*60*60*24},D=t=>{if(n.value)return t.getTime()<n.value.getTime()+1e3*60*60*24};return e.watch(()=>n.value,t=>{if(!t)l.value=null,i.value=!0;else{c("startChange",t),i.value=!1;const d=n.value,s=l.value;+d>=+s&&(l.value=null)}}),e.watch(()=>l.value,t=>{t&&c("endChange",{startDate:n.value,endDate:t})}),(t,d)=>{const s=e.resolveComponent("el-date-picker");return e.openBlock(),e.createElementBlock("div",o,[e.createCommentVNode(" https://cn.vuejs.org/api/component-instance.html#attrs "),e.createCommentVNode(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),e.createCommentVNode(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),e.createElementVNode("div",m,[e.createVNode(s,e.mergeProps({modelValue:n.value,"onUpdate:modelValue":d[0]||(d[0]=r=>n.value=r),type:"date",placeholder:a.startPlaceholder,"disabled-date":h},a.startDateOptions),null,16,["modelValue","placeholder"])]),e.createElementVNode("div",null,[e.createVNode(s,e.mergeProps({modelValue:l.value,"onUpdate:modelValue":d[1]||(d[1]=r=>l.value=r),type:"date",placeholder:a.endPlaceholder,disabled:i.value,"disabled-date":D},a.endDateOptions),null,16,["modelValue","placeholder","disabled"])])])}}});return{install(a){a.component("m-choose-date",u)}}});
