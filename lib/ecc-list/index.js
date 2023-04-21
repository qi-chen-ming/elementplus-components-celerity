import { defineComponent as V, resolveComponent as a, openBlock as t, createElementBlock as c, createVNode as k, withCtx as u, Fragment as m, renderList as y, createBlock as f, unref as h, createCommentVNode as l, createElementVNode as p, toDisplayString as r, createTextVNode as $, normalizeClass as z, resolveDynamicComponent as B } from "vue";
const w = (n) => n.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), D = { class: "list-tabs__item" }, E = ["onClick"], T = {
  key: 0,
  class: "avatar"
}, q = { class: "content" }, F = {
  key: 0,
  class: "title"
}, O = {
  key: 1,
  class: "time"
}, S = {
  key: 2,
  class: "time"
}, Z = { class: "actions" }, j = ["onClick"], G = {
  key: 0,
  class: "a-icon"
}, H = { class: "a-text" }, J = /* @__PURE__ */ V({
  __name: "index",
  props: {
    // 列表的内容
    list: {
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
  setup(n, { emit: i }) {
    let _ = (o, d) => {
      i("clickItem", { item: o, index: d });
    }, v = (o, d) => {
      i("clickAction", { item: o, index: d });
    };
    return (o, d) => {
      const x = a("el-avatar"), C = a("el-tag"), b = a("el-scrollbar"), A = a("el-tab-pane"), I = a("el-tabs");
      return t(), c("div", D, [
        k(I, null, {
          default: u(() => [
            (t(!0), c(m, null, y(n.list, (g, L) => (t(), f(A, {
              key: L,
              label: g.title
            }, {
              default: u(() => [
                k(b, { "max-height": "300px" }, {
                  default: u(() => [
                    (t(!0), c(m, null, y(g.content, (e, s) => (t(), c("div", {
                      class: "container",
                      onClick: (N) => h(_)(e, s),
                      key: s
                    }, [
                      e.avatar ? (t(), c("div", T, [
                        k(x, {
                          size: "small",
                          src: e.avatar
                        }, null, 8, ["src"])
                      ])) : l("", !0),
                      p("div", q, [
                        e.title ? (t(), c("div", F, [
                          p("div", null, r(e.title), 1),
                          e.tag ? (t(), f(C, {
                            key: 0,
                            size: "small",
                            type: e.tagType
                          }, {
                            default: u(() => [
                              $(r(e.tag), 1)
                            ]),
                            _: 2
                          }, 1032, ["type"])) : l("", !0)
                        ])) : l("", !0),
                        e.desc ? (t(), c("div", O, r(e.desc), 1)) : l("", !0),
                        e.time ? (t(), c("div", S, r(e.time), 1)) : l("", !0)
                      ])
                    ], 8, E))), 128)),
                    p("div", Z, [
                      (t(!0), c(m, null, y(n.actions, (e, s) => (t(), c("div", {
                        class: z(["a-item", { border: s !== n.actions.length }]),
                        key: s,
                        onClick: (N) => h(v)(e, s)
                      }, [
                        e.icon ? (t(), c("div", G, [
                          (t(), f(B(`el-icon-${h(w)(e.icon)}`)))
                        ])) : l("", !0),
                        p("div", H, r(e.text), 1)
                      ], 10, j))), 128))
                    ])
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["label"]))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const K = (n, i) => {
  const _ = n.__vccOpts || n;
  for (const [v, o] of i)
    _[v] = o;
  return _;
}, M = /* @__PURE__ */ K(J, [["__scopeId", "data-v-6f6c66fc"]]), Q = {
  install(n) {
    n.component("ecc-list", M);
  }
};
export {
  Q as default
};
