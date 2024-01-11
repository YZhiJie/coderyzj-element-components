import { defineComponent as y, ref as d, watch as m, resolveComponent as c, openBlock as h, createElementBlock as R, Fragment as O, createCommentVNode as t, createElementVNode as C, normalizeClass as w, createVNode as u, mergeProps as B, withCtx as l, renderSlot as a } from "vue";
const F = /* @__PURE__ */ y({
  __name: "index",
  props: {
    // 是否显示弹出框
    visible: {
      type: Boolean,
      default: !1
    },
    // 表单的配置项数据
    options: {
      type: Array,
      required: !0
    },
    // 表单项中 label 的宽度
    labelWidth: {
      type: String,
      default: ""
    },
    // 只在屏幕区域内滚动
    isScroll: {
      type: Boolean,
      default: !1
    },
    // 下面全是处理上传的事件
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    onExceed: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onSuccess: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(e, { emit: f }) {
    const i = e, p = f, r = d(), n = d(i.visible);
    return m(
      () => i.visible,
      (o) => {
        n.value = o;
      }
    ), m(
      () => n.value,
      (o) => {
        p("update:visible", o);
      }
    ), (o, s) => {
      const v = c("m-form"), b = c("el-dialog");
      return h(), R(
        O,
        null,
        [
          t(" 通过 .el-dialog__body 动态设置 dialog 内容区域的高度 "),
          C(
            "div",
            {
              class: w({ "m-choose-icon-dialog-body-height": e.isScroll })
            },
            [
              t(" https://cn.vuejs.org/api/component-instance.html#attrs "),
              t(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),
              t(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),
              u(b, B({
                modelValue: n.value,
                "onUpdate:modelValue": s[0] || (s[0] = (g) => n.value = g)
              }, o.$attrs), {
                default: l(() => [
                  u(v, {
                    ref_key: "formRef",
                    ref: r,
                    options: e.options,
                    "label-width": e.labelWidth,
                    onOnChange: e.onChange,
                    onBeforeUpload: e.beforeUpload,
                    onBeforeRemove: e.beforeRemove,
                    onOnRemove: e.onRemove,
                    onOnExceed: e.onExceed,
                    onOnPreview: e.onPreview,
                    onOnSuccess: e.onSuccess
                  }, {
                    uploadArea: l(() => [
                      a(o.$slots, "uploadArea")
                    ]),
                    uploadTip: l(() => [
                      a(o.$slots, "uploadTip")
                    ]),
                    _: 3
                    /* FORWARDED */
                  }, 8, ["options", "label-width", "onOnChange", "onBeforeUpload", "onBeforeRemove", "onOnRemove", "onOnExceed", "onOnPreview", "onOnSuccess"])
                ]),
                footer: l(() => [
                  a(o.$slots, "footer", { formRef: r.value })
                ]),
                _: 3
                /* FORWARDED */
              }, 16, ["modelValue"])
            ],
            2
            /* CLASS */
          )
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), V = {
  install(e) {
    e.component("m-modal-form", F);
  }
};
export {
  V as default
};
