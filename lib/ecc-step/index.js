import { openBlock as n, createElementBlock as c, renderSlot as D, defineComponent as N, resolveComponent as i, createVNode as r, mergeProps as g, withCtx as o, Fragment as f, renderList as m, createBlock as y, createElementVNode as v, withDirectives as L, createCommentVNode as k, createTextVNode as b, toDisplayString as x, vShow as A } from "vue";
const V = {
  name: "FixBtn"
};
const F = (e, d) => {
  const s = e.__vccOpts || e;
  for (const [u, p] of d)
    s[u] = p;
  return s;
}, q = { class: "fix-btn flex-box flex-ver bottom-tool-bar bar-fixed-bottom" };
function z(e, d, s, u, p, _) {
  return n(), c("div", q, [
    D(e.$slots, "default", {}, void 0, !0)
  ]);
}
const $ = /* @__PURE__ */ F(V, [["render", z], ["__scopeId", "data-v-470f0b14"]]), E = { class: "step-wizard" }, H = { class: "content-step-main step-content" }, M = {
  key: 0,
  class: "step-last flex-box flex-col flex-ver"
}, I = { class: "icon-success" }, O = ["innerHTML"], P = {
  name: "TStepWizard"
}, W = /* @__PURE__ */ N({
  ...P,
  props: {
    // 步骤数据
    stepData: {
      type: Array,
      default: () => [],
      required: !0
    },
    successTitle: {
      // 最后一步骤成功提示语
      type: String,
      default: ""
    },
    lastBtnTitle: {
      // 最后一步骤成功按钮文字
      type: String,
      default: "完成"
    },
    active: {
      type: Number,
      default: 0,
      required: !0
    },
    isShowLastSuccess: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["complete"],
  setup(e, { emit: d }) {
    const s = e, u = () => s.isShowLastSuccess ? s.stepData && s.stepData.slice(0, s.stepData.length - 1) : s.stepData, p = () => {
      d("complete", s.active);
    };
    return (_, j) => {
      const S = i("el-step"), B = i("el-steps"), h = i("el-button"), C = i("el-icon-circlecheck"), T = i("el-icon");
      return n(), c("div", E, [
        r(B, g({
          active: e.active,
          simple: "",
          "finish-status": "success"
        }, _.$attrs), {
          default: o(() => [
            (n(!0), c(f, null, m(e.stepData, (t, l) => (n(), y(S, g(_.$attrs, {
              key: l,
              title: `${l + 1} ${t.title}`,
              icon: t.icon ? t.icon : "",
              description: t.description ? t.description : ""
            }), null, 16, ["title", "icon", "description"]))), 128))
          ]),
          _: 1
        }, 16, ["active"]),
        v("div", H, [
          (n(!0), c(f, null, m(u(), (t, l) => L((n(), c("div", {
            class: "step-first flex-box flex-col flex-ver-h",
            key: l
          }, [
            t.slotName ? D(_.$slots, t.slotName, { key: 0 }) : k("", !0),
            r($, null, {
              default: o(() => [
                (n(!0), c(f, null, m(t.btnArr, (a, w) => (n(), y(h, {
                  key: w,
                  type: a.type || "danger",
                  onClick: (G) => a.fn(a),
                  disabled: t.disable || !1
                }, {
                  default: o(() => [
                    b(x(a.btnTitle), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "onClick", "disabled"]))), 128))
              ]),
              _: 2
            }, 1024)
          ])), [
            [A, e.active === l]
          ])), 128)),
          e.active === e.stepData.length && e.isShowLastSuccess ? (n(), c("div", M, [
            v("div", I, [
              r(T, null, {
                default: o(() => [
                  r(C)
                ]),
                _: 1
              })
            ]),
            v("h2", {
              class: "success-margin",
              innerHTML: e.successTitle
            }, null, 8, O),
            r($, null, {
              default: o(() => [
                e.stepData[e.stepData.length - 1].lastBtnArr ? (n(!0), c(f, { key: 1 }, m(e.stepData[e.stepData.length - 1].lastBtnArr, (t, l) => (n(), y(h, {
                  key: l,
                  type: t.type || "danger",
                  onClick: (a) => t.fn(t),
                  disabled: t.disable || !1
                }, {
                  default: o(() => [
                    b(x(t.btnTitle), 1)
                  ]),
                  _: 2
                }, 1032, ["type", "onClick", "disabled"]))), 128)) : (n(), y(h, {
                  key: 0,
                  type: "danger",
                  onClick: p
                }, {
                  default: o(() => [
                    b(x(e.lastBtnTitle), 1)
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            })
          ])) : k("", !0)
        ])
      ]);
    };
  }
});
const K = {
  install(e) {
    e.component("ecc-step", W);
  }
};
export {
  K as default
};
