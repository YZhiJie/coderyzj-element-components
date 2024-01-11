import { defineComponent as p, ref as c, onMounted as l, resolveComponent as i, openBlock as m, createElementBlock as u, Fragment as g, createCommentVNode as o, createVNode as d, mergeProps as f } from "vue";
const v = /* @__PURE__ */ p({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      required: !0
    },
    // 进度条是否有动画效果
    isAnimation: {
      type: Boolean,
      default: !1
    },
    // 动画时长(毫秒数)
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(n) {
    const e = n, t = c(0);
    return l(() => {
      if (e.isAnimation) {
        const r = Math.ceil(e.time / e.percentage), a = setInterval(() => {
          t.value += 1, t.value >= e.percentage && (t.value = e.percentage, clearInterval(a));
        }, r);
      } else
        t.value = e.percentage;
    }), (r, a) => {
      const s = i("el-progress");
      return m(), u(
        g,
        null,
        [
          o(" https://cn.vuejs.org/api/component-instance.html#attrs "),
          o(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),
          o(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),
          d(s, f({ percentage: t.value }, r.$attrs), null, 16, ["percentage"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), b = {
  install(n) {
    n.component("m-progress", v);
  }
};
export {
  b as default
};
