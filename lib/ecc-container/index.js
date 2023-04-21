import { defineComponent as f, resolveComponent as t, openBlock as i, createElementBlock as g, createElementVNode as h, unref as s, createBlock as r, ref as y, withCtx as _, createVNode as l, isRef as b } from "vue";
const k = { class: "header" }, B = /* @__PURE__ */ f({
  __name: "index",
  props: {
    collapse: { type: Boolean }
  },
  emits: ["update:collapse"],
  setup(n, { emit: e }) {
    const c = n;
    let o = () => {
      e("update:collapse", !c.collapse);
    };
    return (a, d) => {
      const m = t("el-icon-expand"), u = t("el-icon-fold");
      return i(), g("div", k, [
        h("span", {
          onClick: d[0] || (d[0] = //@ts-ignore
          (...p) => s(o) && s(o)(...p))
        }, [
          n.collapse ? (i(), r(m, { key: 0 })) : (i(), r(u, { key: 1 }))
        ])
      ]);
    };
  }
});
const v = (n, e) => {
  const c = n.__vccOpts || n;
  for (const [o, a] of e)
    c[o] = a;
  return c;
}, C = /* @__PURE__ */ v(B, [["__scopeId", "data-v-f42712c0"]]), w = /* @__PURE__ */ f({
  __name: "index",
  props: {
    collapse: { type: Boolean }
  },
  setup(n) {
    let e = [
      {
        icon: "HomeFilled",
        name: "首页",
        index: "/"
      },
      {
        icon: "Location",
        name: "省市区选择",
        index: "/chooseArea"
      },
      {
        icon: "TurnOff",
        name: "城市选择",
        index: "/chooseCity"
      },
      {
        icon: "Timer",
        name: "时间选择",
        index: "/chooseDateAndTime"
      },
      {
        icon: "Setting",
        name: "表单",
        index: "/form"
      },
      {
        icon: "Menu",
        name: "导航菜单",
        index: "/menu"
      },
      {
        icon: "Setting",
        name: "弹出框表单",
        index: "/modalForm"
      },
      {
        icon: "Bell",
        name: "通知菜单",
        index: "/notification"
      },
      {
        icon: "Management",
        name: "步骤",
        index: "/step"
      },
      {
        icon: "ShoppingBag",
        name: "表格",
        index: "/table"
      }
    ];
    return (c, o) => {
      const a = t("ecc-menu");
      return i(), r(a, {
        collapse: n.collapse,
        data: s(e),
        router: "",
        defaultActive: c.$route.path
      }, null, 8, ["collapse", "data", "defaultActive"]);
    };
  }
}), A = /* @__PURE__ */ f({
  __name: "index",
  setup(n) {
    let e = y(!1);
    return (c, o) => {
      const a = t("el-aside"), d = t("el-header"), m = t("router-view"), u = t("el-main"), p = t("el-container");
      return i(), r(p, null, {
        default: _(() => [
          l(a, { width: "auto" }, {
            default: _(() => [
              l(w, { collapse: s(e) }, null, 8, ["collapse"])
            ]),
            _: 1
          }),
          l(p, null, {
            default: _(() => [
              l(d, null, {
                default: _(() => [
                  l(C, {
                    collapse: s(e),
                    "onUpdate:collapse": o[0] || (o[0] = (x) => b(e) ? e.value = x : e = x)
                  }, null, 8, ["collapse"])
                ]),
                _: 1
              }),
              l(u, null, {
                default: _(() => [
                  l(m)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const N = /* @__PURE__ */ v(A, [["__scopeId", "data-v-b54bb2dd"]]), T = {
  install(n) {
    n.component("ecc-container", N);
  }
};
export {
  T as default
};
