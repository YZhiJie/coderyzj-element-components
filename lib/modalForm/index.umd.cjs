(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.index=t(e.Vue))})(this,function(e){"use strict";const t=e.defineComponent({__name:"index",props:{visible:{type:Boolean,default:!1},options:{type:Array,required:!0},labelWidth:{type:String,default:""},isScroll:{type:Boolean,default:!1},onChange:{type:Function},beforeUpload:{type:Function},beforeRemove:{type:Function},onRemove:{type:Function},onExceed:{type:Function},onPreview:{type:Function},onSuccess:{type:Function}},emits:["update:visible"],setup(o,{emit:r}){const l=o,s=r,a=e.ref(),i=e.ref(l.visible);return e.watch(()=>l.visible,n=>{i.value=n}),e.watch(()=>i.value,n=>{s("update:visible",n)}),(n,d)=>{const m=e.resolveComponent("m-form"),c=e.resolveComponent("el-dialog");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createCommentVNode(" 通过 .el-dialog__body 动态设置 dialog 内容区域的高度 "),e.createElementVNode("div",{class:e.normalizeClass({"m-choose-icon-dialog-body-height":o.isScroll})},[e.createCommentVNode(" https://cn.vuejs.org/api/component-instance.html#attrs "),e.createCommentVNode(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),e.createCommentVNode(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),e.createVNode(c,e.mergeProps({modelValue:i.value,"onUpdate:modelValue":d[0]||(d[0]=f=>i.value=f)},n.$attrs),{default:e.withCtx(()=>[e.createVNode(m,{ref_key:"formRef",ref:a,options:o.options,"label-width":o.labelWidth,onOnChange:o.onChange,onBeforeUpload:o.beforeUpload,onBeforeRemove:o.beforeRemove,onOnRemove:o.onRemove,onOnExceed:o.onExceed,onOnPreview:o.onPreview,onOnSuccess:o.onSuccess},{uploadArea:e.withCtx(()=>[e.renderSlot(n.$slots,"uploadArea")]),uploadTip:e.withCtx(()=>[e.renderSlot(n.$slots,"uploadTip")]),_:3},8,["options","label-width","onOnChange","onBeforeUpload","onBeforeRemove","onOnRemove","onOnExceed","onOnPreview","onOnSuccess"])]),footer:e.withCtx(()=>[e.renderSlot(n.$slots,"footer",{formRef:a.value})]),_:3},16,["modelValue"])],2)],2112)}}});return{install(o){o.component("m-modal-form",t)}}});
