import { defineComponent as g, ref as r, watch as c, resolveComponent as y, openBlock as V, createElementBlock as C, createCommentVNode as i, createElementVNode as m, createVNode as p, mergeProps as v } from "vue";
const T = { style: { display: "flex" } }, x = { style: { "margin-right": "20px" } }, O = /* @__PURE__ */ g({
  __name: "index",
  props: {
    // 开始日期的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    // 结束日期的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    // 是否禁止选择今天之前的日期
    disableToday: {
      type: Boolean,
      default: !0
    },
    startDateOptions: {
      type: Object
    },
    endDateOptions: {
      type: Object
    }
  },
  emits: ["startChange", "endChange"],
  setup(t, { emit: f }) {
    const h = t, u = f, a = r(), l = r(), o = r(!0), D = (e) => {
      if (h.disableToday)
        return e.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, b = (e) => {
      if (a.value)
        return e.getTime() < a.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return c(
      () => a.value,
      (e) => {
        if (!e)
          l.value = null, o.value = !0;
        else {
          u("startChange", e), o.value = !1;
          const n = a.value, d = l.value;
          +n >= +d && (l.value = null);
        }
      }
    ), c(
      () => l.value,
      (e) => {
        e && u("endChange", {
          startDate: a.value,
          endDate: e
        });
      }
    ), (e, n) => {
      const d = y("el-date-picker");
      return V(), C("div", T, [
        i(" https://cn.vuejs.org/api/component-instance.html#attrs "),
        i(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),
        i(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),
        m("div", x, [
          p(d, v({
            modelValue: a.value,
            "onUpdate:modelValue": n[0] || (n[0] = (s) => a.value = s),
            type: "date",
            placeholder: t.startPlaceholder,
            "disabled-date": D
          }, t.startDateOptions), null, 16, ["modelValue", "placeholder"])
        ]),
        m("div", null, [
          p(d, v({
            modelValue: l.value,
            "onUpdate:modelValue": n[1] || (n[1] = (s) => l.value = s),
            type: "date",
            placeholder: t.endPlaceholder,
            disabled: o.value,
            "disabled-date": b
          }, t.endDateOptions), null, 16, ["modelValue", "placeholder", "disabled"])
        ])
      ]);
    };
  }
}), k = {
  install(t) {
    t.component("m-choose-date", O);
  }
};
export {
  k as default
};
