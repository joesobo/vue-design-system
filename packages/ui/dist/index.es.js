import { reactive as c, computed as l, openBlock as i, createElementBlock as s, normalizeClass as u, normalizeStyle as y, toDisplayString as m } from "vue";
const b = (t, o) => {
  const r = t.__vccOpts || t;
  for (const [e, n] of o)
    r[e] = n;
  return r;
}, k = {
  name: "my-button",
  props: {
    label: {
      type: String,
      required: !0
    },
    primary: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      validator: function(t) {
        return ["small", "medium", "large"].indexOf(t) !== -1;
      }
    },
    backgroundColor: {
      type: String
    }
  },
  emits: ["click"],
  setup(t, { emit: o }) {
    return t = c(t), {
      classes: l(() => ({
        "storybook-button": !0,
        "storybook-button--primary": t.primary,
        "storybook-button--secondary": !t.primary,
        [`storybook-button--${t.size || "medium"}`]: !0
      })),
      style: l(() => ({
        backgroundColor: t.backgroundColor
      })),
      onClick() {
        o("click");
      }
    };
  }
};
function d(t, o, r, e, n, f) {
  return i(), s("button", {
    type: "button",
    class: u(e.classes),
    onClick: o[0] || (o[0] = (...a) => e.onClick && e.onClick(...a)),
    style: y(e.style)
  }, m(r.label), 7);
}
const C = /* @__PURE__ */ b(k, [["render", d]]);
export {
  C as Button
};
