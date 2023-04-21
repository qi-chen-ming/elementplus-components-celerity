import { defineComponent as g, ref as s, watch as u, resolveComponent as h, openBlock as T, createElementBlock as y, createElementVNode as p, createVNode as c, mergeProps as f, unref as r, isRef as S } from "vue";
const v = { style: { display: "flex" } }, V = { style: { "margin-right": "20px" } }, C = /* @__PURE__ */ g({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
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
    }
  },
  emits: ["startChange", "endChange"],
  setup(e, { emit: m }) {
    let l = s(""), a = s(""), i = s(!0);
    return u(() => l.value, (t) => {
      t === "" ? (a.value = "", i.value = !0) : (i.value = !1, m("startChange", t));
    }), u(() => a.value, (t) => {
      t !== "" && m("endChange", {
        startTime: l.value,
        endTime: t
      });
    }), (t, d) => {
      const o = h("el-time-select");
      return T(), y("div", v, [
        p("div", V, [
          c(o, f({
            modelValue: r(l),
            "onUpdate:modelValue": d[0] || (d[0] = (n) => S(l) ? l.value = n : l = n),
            placeholder: e.startPlaceholder,
            start: e.startTimeStart,
            step: e.startStep,
            end: e.startTimeEnd
          }, t.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "start", "step", "end"])
        ]),
        p("div", null, [
          c(o, f({
            modelValue: r(a),
            "onUpdate:modelValue": d[1] || (d[1] = (n) => S(a) ? a.value = n : a = n),
            "min-time": r(l),
            placeholder: e.endPlaceholder,
            start: e.endTimeStart,
            step: e.endStep,
            end: e.endTimeEnd,
            disabled: r(i)
          }, t.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), P = {
  install(e) {
    e.component("ecc-choose-time", C);
  }
};
export {
  P as default
};
