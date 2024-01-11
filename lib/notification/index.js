import { defineComponent as p, resolveComponent as i, openBlock as s, createElementBlock as m, createCommentVNode as d, createVNode as c, withCtx as t, renderSlot as f, normalizeStyle as u, createBlock as _, resolveDynamicComponent as v } from "vue";
const y = { class: "notification" }, b = /* @__PURE__ */ p({
  __name: "index",
  props: {
    // 显示的图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 设置图标的大小
    iconSize: {
      type: [Number, String],
      default: 16
    },
    // 通知数量
    value: {
      type: [Number, String],
      default: ""
    },
    // 最大值
    max: {
      type: Number,
      default: 99
    },
    //是否显示小圆点
    isDot: {
      type: Boolean,
      default: !1
    },
    // 是否禁用通知菜单
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (o, n) => {
      const l = i("el-icon"), a = i("el-badge"), r = i("el-popover");
      return s(), m("div", y, [
        d(" https://element-plus.gitee.io/zh-CN/component/popover.html "),
        d(" 也可以通过 popper-class 给 el-popper 组件添加类样式 "),
        c(r, {
          "popper-style": "padding: 0;",
          disabled: e.disabled,
          placement: "bottom",
          width: 300,
          trigger: "click"
        }, {
          default: t(() => [
            f(o.$slots, "default", {}, void 0, !0)
          ]),
          reference: t(() => [
            c(a, {
              value: e.value,
              max: e.max,
              isDot: e.isDot
            }, {
              default: t(() => [
                c(l, {
                  style: u({ fontSize: e.iconSize + "px" })
                }, {
                  default: t(() => [
                    (s(), _(v(e.icon)))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["style"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["value", "max", "isDot"])
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["disabled"])
      ]);
    };
  }
}), g = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [l, a] of o)
    n[l] = a;
  return n;
}, x = /* @__PURE__ */ g(b, [["__scopeId", "data-v-f2270010"]]), h = {
  install(e) {
    e.component("m-notification", x);
  }
};
export {
  h as default
};
