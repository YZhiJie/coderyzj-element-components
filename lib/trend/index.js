import { defineComponent as p, useSlots as f, computed as C, resolveComponent as m, openBlock as n, createElementBlock as d, createElementVNode as s, normalizeStyle as c, unref as v, renderSlot as x, toDisplayString as S, createCommentVNode as a, createVNode as w, withCtx as g, createBlock as i, resolveDynamicComponent as u } from "vue";
const I = { class: "trend" }, k = { key: 1 }, h = { class: "icon" }, b = /* @__PURE__ */ p({
  __name: "index",
  props: {
    // 标签当前趋势是上升(up)还是下降(down)
    type: {
      type: String,
      default: "up"
    },
    // 上升趋势显示的图标
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    // 下降趋势显示的图标
    // 趋势显示的文字
    // 1.父组件传递过来的数据
    // 2.插槽
    text: {
      type: String,
      default: "默认文字"
    },
    // 文字大小
    textSize: {
      type: [Number, String],
      default: 14
    },
    // 如果传入同时传入reverseColor和自定义颜色，那么自定义颜色不生效，颜色反转生效
    // 如果不传reverseColor，则使用默认颜色或者自定义颜色
    // 就是将 up图标和down图标 的颜色交换
    reverseColor: {
      type: Boolean,
      default: !1
    },
    // 上升趋势的图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    // 下降趋势的图标颜色
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 上升趋势的文字颜色
    upTextColor: {
      type: String,
      default: "rgb(0, 0, 0)"
    },
    // 下降趋势的文字颜色
    downTextColor: {
      type: String,
      default: "rgb(0, 0, 0)"
    }
  },
  setup(e) {
    const o = e, t = f(), l = C(() => o.type === "up" ? o.upTextColor : o.downTextColor);
    return (r, B) => {
      const y = m("el-icon");
      return n(), d("div", I, [
        s(
          "div",
          {
            class: "text",
            style: c({ color: l.value, fontSize: e.textSize + "px" })
          },
          [
            v(t).default ? x(r.$slots, "default", { key: 0 }, void 0, !0) : (n(), d(
              "div",
              k,
              S(e.text),
              1
              /* TEXT */
            ))
          ],
          4
          /* STYLE */
        ),
        s("div", h, [
          a(` <el-icon :style="{ color: !reverseColor ? upIconColor : '#52c41a' }" v-if="type === 'up'">
        <ArrowUp />
      </el-icon>
      <el-icon :style="{ color: !reverseColor ? downIconColor : '#f5222d' }" v-else>
        <ArrowDown />
      </el-icon> `),
          w(y, null, {
            default: g(() => [
              a(" 动态组件 "),
              e.type === "up" ? (n(), i(u(e.upIcon), {
                key: 0,
                style: c({ color: e.reverseColor ? "#52c41a" : e.upIconColor })
              }, null, 8, ["style"])) : (n(), i(u(e.downIcon), {
                key: 1,
                style: c({ color: e.reverseColor ? "#f5222d" : e.downIconColor })
              }, null, 8, ["style"]))
            ]),
            _: 1
            /* STABLE */
          })
        ])
      ]);
    };
  }
}), z = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, r] of o)
    t[l] = r;
  return t;
}, A = /* @__PURE__ */ z(b, [["__scopeId", "data-v-e649eb5c"]]), N = {
  install(e) {
    e.component("m-trend", A);
  }
};
export {
  N as default
};
