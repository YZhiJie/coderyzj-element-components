import { defineComponent as B, resolveComponent as l, openBlock as e, createElementBlock as n, createVNode as u, withCtx as i, createCommentVNode as s, Fragment as p, renderList as y, createBlock as f, createElementVNode as h, toDisplayString as r, createTextVNode as D, normalizeClass as E, resolveDynamicComponent as T } from "vue";
const $ = { class: "list-tabs__item" }, q = ["onClick"], w = {
  key: 0,
  class: "avatar"
}, F = { class: "content" }, L = {
  key: 0,
  class: "title"
}, O = {
  key: 1,
  class: "time"
}, S = {
  key: 2,
  class: "time"
}, j = { class: "actions" }, G = ["onClick"], H = {
  key: 0,
  class: "a-icon"
}, J = {
  key: 1,
  class: "a-text"
}, K = /* @__PURE__ */ B({
  __name: "index",
  props: {
    // 列表的内容
    list: {
      // https://cn.vuejs.org/api/utility-types.html#proptype-t
      type: Array,
      required: !0
    },
    // 操作的内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(c, { emit: v }) {
    const a = v, m = (_, d) => {
      a("clickItem", { item: _, index: d });
    }, k = (_, d) => {
      a("clickAction", { item: _, index: d });
    };
    return (_, d) => {
      const b = l("el-avatar"), g = l("el-tag"), C = l("el-scrollbar"), A = l("el-icon"), I = l("el-tab-pane"), N = l("el-tabs");
      return e(), n("div", $, [
        u(N, null, {
          default: i(() => [
            s(" 如果只是展示数据，可以使用 index 作为 key 值，但是最好传递一个唯一标识 "),
            (e(!0), n(
              p,
              null,
              y(c.list, (x, V) => (e(), f(I, {
                key: V,
                label: x.title
              }, {
                default: i(() => [
                  u(
                    C,
                    { "max-height": "300px" },
                    {
                      default: i(() => [
                        (e(!0), n(
                          p,
                          null,
                          y(x.content, (t, o) => (e(), n("div", {
                            class: "container",
                            onClick: (z) => m(t, o),
                            key: o
                          }, [
                            t.avatar ? (e(), n("div", w, [
                              u(b, {
                                size: "small",
                                src: t.avatar
                              }, null, 8, ["src"])
                            ])) : s("v-if", !0),
                            h("div", F, [
                              t.title ? (e(), n("div", L, [
                                h(
                                  "div",
                                  null,
                                  r(t.title),
                                  1
                                  /* TEXT */
                                ),
                                t.tag ? (e(), f(g, {
                                  key: 0,
                                  size: "small",
                                  type: t.tagType
                                }, {
                                  default: i(() => [
                                    D(
                                      r(t.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : s("v-if", !0)
                              ])) : s("v-if", !0),
                              t.desc ? (e(), n(
                                "div",
                                O,
                                r(t.desc),
                                1
                                /* TEXT */
                              )) : s("v-if", !0),
                              t.time ? (e(), n(
                                "div",
                                S,
                                r(t.time),
                                1
                                /* TEXT */
                              )) : s("v-if", !0)
                            ])
                          ], 8, q))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  ),
                  h("div", j, [
                    s(` <div class="actions" v-if="item.title === '代办'"> `),
                    (e(!0), n(
                      p,
                      null,
                      y(c.actions, (t, o) => (e(), n("div", {
                        class: E(["a-item", { border: o !== c.actions.length - 1 }]),
                        key: o,
                        onClick: (z) => k(t, o)
                      }, [
                        t.icon ? (e(), n("div", H, [
                          u(
                            A,
                            null,
                            {
                              default: i(() => [
                                s(" 动态组件 "),
                                (e(), f(T(t.icon)))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ])) : s("v-if", !0),
                        t.text ? (e(), n(
                          "div",
                          J,
                          r(t.text),
                          1
                          /* TEXT */
                        )) : s("v-if", !0)
                      ], 10, G))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
}), M = (c, v) => {
  const a = c.__vccOpts || c;
  for (const [m, k] of v)
    a[m] = k;
  return a;
}, P = /* @__PURE__ */ M(K, [["__scopeId", "data-v-6342b873"]]), R = {
  install(c) {
    c.component("m-list", P);
  }
};
export {
  R as default
};
