import { defineComponent as g, ref as s, watch as u, resolveComponent as h, openBlock as S, createElementBlock as y, createCommentVNode as r, createElementVNode as c, createVNode as p, mergeProps as f } from "vue";
const T = { style: { display: "flex" } }, V = { style: { "margin-right": "20px" } }, x = /* @__PURE__ */ g({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 开始时间的开始选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    // 开始时间的结束选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    // 结束时间的开始选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    // 结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    // 结束时间的结束选择
    endTimeEnd: {
      type: String,
      default: "24:00"
    },
    startOptions: {
      type: Object
    },
    endOptions: {
      type: Object
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: v }) {
    const m = v, n = s(""), a = s(""), d = s(!0);
    return u(
      () => n.value,
      (t) => {
        t === "" ? (a.value = "", d.value = !0) : (d.value = !1, m("startChange", t));
      }
    ), u(
      () => a.value,
      (t) => {
        t !== "" && m("endChange", {
          startTime: n.value,
          endTime: t
        });
      }
    ), (t, l) => {
      const o = h("el-time-select");
      return S(), y("div", T, [
        r(" https://cn.vuejs.org/api/component-instance.html#attrs "),
        r(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),
        r(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),
        c("div", V, [
          p(o, f({
            modelValue: n.value,
            "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i),
            "max-time": a.value,
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, e.startOptions), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        c("div", null, [
          p(o, f({
            modelValue: a.value,
            "onUpdate:modelValue": l[1] || (l[1] = (i) => a.value = i),
            "min-time": n.value,
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: d.value
          }, e.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), C = {
  install(e) {
    e.component("m-choose-time", x);
  }
};
export {
  C as default
};
