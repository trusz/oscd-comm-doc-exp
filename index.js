var pe = Object.defineProperty;
var ge = (e, t, n) => t in e ? pe(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var O = (e, t, n) => ge(e, typeof t != "symbol" ? t + "" : t, n);
function _() {
}
function ne(e) {
  return e();
}
function Q() {
  return /* @__PURE__ */ Object.create(null);
}
function L(e) {
  e.forEach(ne);
}
function G(e) {
  return typeof e == "function";
}
function J(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function _e(e) {
  return Object.keys(e).length === 0;
}
function oe(e, ...t) {
  if (e == null) {
    for (const o of t)
      o(void 0);
    return _;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function z(e, t, n) {
  e.$$.on_destroy.push(oe(t, n));
}
function y(e, t) {
  e.appendChild(t);
}
function w(e, t, n) {
  e.insertBefore(t, n || null);
}
function $(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function re(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function x(e) {
  return document.createTextNode(e);
}
function I() {
  return x(" ");
}
function be(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function k(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function ye(e) {
  return Array.from(e.childNodes);
}
function U(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
let D;
function q(e) {
  D = e;
}
function $e() {
  if (!D) throw new Error("Function called outside component initialization");
  return D;
}
function we(e) {
  $e().$$.on_destroy.push(e);
}
const C = [], H = [];
let P = [];
const W = [], ve = /* @__PURE__ */ Promise.resolve();
let V = !1;
function Ee() {
  V || (V = !0, ve.then(ie));
}
function F(e) {
  P.push(e);
}
const M = /* @__PURE__ */ new Set();
let A = 0;
function ie() {
  if (A !== 0)
    return;
  const e = D;
  do {
    try {
      for (; A < C.length; ) {
        const t = C[A];
        A++, q(t), xe(t.$$);
      }
    } catch (t) {
      throw C.length = 0, A = 0, t;
    }
    for (q(null), C.length = 0, A = 0; H.length; ) H.pop()();
    for (let t = 0; t < P.length; t += 1) {
      const n = P[t];
      M.has(n) || (M.add(n), n());
    }
    P.length = 0;
  } while (C.length);
  for (; W.length; )
    W.pop()();
  V = !1, M.clear(), q(e);
}
function xe(e) {
  if (e.fragment !== null) {
    e.update(), L(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(F);
  }
}
function Se(e) {
  const t = [], n = [];
  P.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), P = t;
}
const B = /* @__PURE__ */ new Set();
let S;
function le() {
  S = {
    r: 0,
    c: [],
    p: S
    // parent group
  };
}
function ue() {
  S.r || L(S.c), S = S.p;
}
function E(e, t) {
  e && e.i && (B.delete(e), e.i(t));
}
function j(e, t, n, o) {
  if (e && e.o) {
    if (B.has(e)) return;
    B.add(e), S.c.push(() => {
      B.delete(e), o && (n && e.d(1), o());
    }), e.o(t);
  } else o && o();
}
function R(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Ae(e) {
  e && e.c();
}
function se(e, t, n) {
  const { fragment: o, after_update: u } = e.$$;
  o && o.m(t, n), F(() => {
    const s = e.$$.on_mount.map(ne).filter(G);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : L(s), e.$$.on_mount = [];
  }), u.forEach(F);
}
function ce(e, t) {
  const n = e.$$;
  n.fragment !== null && (Se(n.after_update), L(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Ne(e, t) {
  e.$$.dirty[0] === -1 && (C.push(e), Ee(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function fe(e, t, n, o, u, s, r = null, c = [-1]) {
  const i = D;
  q(e);
  const l = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: _,
    not_equal: u,
    bound: Q(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: Q(),
    dirty: c,
    skip_bound: !1,
    root: t.target || i.$$.root
  };
  r && r(l.root);
  let f = !1;
  if (l.ctx = n ? n(e, t.props || {}, (m, b, ...a) => {
    const d = a.length ? a[0] : b;
    return l.ctx && u(l.ctx[m], l.ctx[m] = d) && (!l.skip_bound && l.bound[m] && l.bound[m](d), f && Ne(e, m)), b;
  }) : [], l.update(), f = !0, L(l.before_update), l.fragment = o ? o(l.ctx) : !1, t.target) {
    if (t.hydrate) {
      const m = ye(t.target);
      l.fragment && l.fragment.l(m), m.forEach($);
    } else
      l.fragment && l.fragment.c();
    t.intro && E(e.$$.fragment), se(e, t.target, t.anchor), ie();
  }
  q(i);
}
class ae {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    O(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ce(this, 1), this.$destroy = _;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!G(n))
      return _;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const u = o.indexOf(n);
      u !== -1 && o.splice(u, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !_e(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ce = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ce);
const de = "oscd-comm-doc-exp", he = "0.0.1", N = [];
function ke(e, t) {
  return {
    subscribe: me(e, t).subscribe
  };
}
function me(e, t = _) {
  let n;
  const o = /* @__PURE__ */ new Set();
  function u(c) {
    if (J(e, c) && (e = c, n)) {
      const i = !N.length;
      for (const l of o)
        l[1](), N.push(l, e);
      if (i) {
        for (let l = 0; l < N.length; l += 2)
          N[l][0](N[l + 1]);
        N.length = 0;
      }
    }
  }
  function s(c) {
    u(c(e));
  }
  function r(c, i = _) {
    const l = [c, i];
    return o.add(l), o.size === 1 && (n = t(u, s) || _), c(e), () => {
      o.delete(l), o.size === 0 && n && (n(), n = null);
    };
  }
  return { set: u, update: s, subscribe: r };
}
function Pe(e, t, n) {
  const o = !Array.isArray(e), u = o ? [e] : e;
  if (!u.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return ke(n, (r, c) => {
    let i = !1;
    const l = [];
    let f = 0, m = _;
    const b = () => {
      if (f)
        return;
      m();
      const d = t(o ? l[0] : l, r, c);
      s ? r(d) : m = G(d) ? d : _;
    }, a = u.map(
      (d, h) => oe(
        d,
        (g) => {
          l[h] = g, f &= ~(1 << h), i && b();
        },
        () => {
          f |= 1 << h;
        }
      )
    );
    return i = !0, b(), function() {
      L(a), m(), i = !1;
    };
  });
}
function T(e, t, n) {
  const o = me(void 0), u = Pe(o, (i) => i);
  let s = e;
  if (!s) {
    console.error(`sclObserver: query "${n}" not found in xmlDocument`);
    return;
  }
  const r = { attributes: !0, childList: !0, subtree: !1 }, c = new MutationObserver((i) => {
    const l = t(s, i);
    o.set(l);
  });
  return c.observe(s, r), we(() => {
    console.log("disconnecting observer"), c.disconnect();
  }), o.set(t(s, [])), u;
}
function X(e, t, n) {
  const o = e.slice();
  return o[10] = t[n], o;
}
function Y(e) {
  let t, n = (
    /*lnName*/
    e[10] + ""
  ), o;
  return {
    c() {
      t = v("li"), o = x(n);
    },
    m(u, s) {
      w(u, t, s), y(t, o);
    },
    p(u, s) {
      s & /*$logicalNodeNames*/
      8 && n !== (n = /*lnName*/
      u[10] + "") && U(o, n);
    },
    d(u) {
      u && $(t);
    }
  };
}
function Le(e) {
  let t, n, o, u, s, r, c, i, l, f, m, b, a = R(
    /*$logicalNodeNames*/
    e[3]
  ), d = [];
  for (let h = 0; h < a.length; h += 1)
    d[h] = Y(X(e, a, h));
  return {
    c() {
      t = v("x-ied"), n = v("h3"), o = x("name: "), u = x(
        /*$name*/
        e[1]
      ), s = x("; AP: "), r = x(
        /*$accessPoint*/
        e[2]
      ), c = I(), i = v("input"), l = x(`
	LN Names
	`), f = v("ul");
      for (let h = 0; h < d.length; h += 1)
        d[h].c();
      k(i, "type", "text"), k(i, "name", "iedName"), i.value = /*$name*/
      e[1];
    },
    m(h, g) {
      w(h, t, g), y(t, n), y(n, o), y(n, u), y(n, s), y(n, r), y(t, c), y(t, i), y(t, l), y(t, f);
      for (let p = 0; p < d.length; p += 1)
        d[p] && d[p].m(f, null);
      e[9](t), m || (b = be(
        i,
        "input",
        /*handleInput*/
        e[7]
      ), m = !0);
    },
    p(h, [g]) {
      if (g & /*$name*/
      2 && U(
        u,
        /*$name*/
        h[1]
      ), g & /*$accessPoint*/
      4 && U(
        r,
        /*$accessPoint*/
        h[2]
      ), g & /*$name*/
      2 && i.value !== /*$name*/
      h[1] && (i.value = /*$name*/
      h[1]), g & /*$logicalNodeNames*/
      8) {
        a = R(
          /*$logicalNodeNames*/
          h[3]
        );
        let p;
        for (p = 0; p < a.length; p += 1) {
          const K = X(h, a, p);
          d[p] ? d[p].p(K, g) : (d[p] = Y(K), d[p].c(), d[p].m(f, null));
        }
        for (; p < d.length; p += 1)
          d[p].d(1);
        d.length = a.length;
      }
    },
    i: _,
    o: _,
    d(h) {
      h && $(t), re(d, h), e[9](null), m = !1, b();
    }
  };
}
function Oe(e, t, n) {
  let o, u, s, { iedElement: r } = t, c, i = T(r, (a) => a.getAttribute("name"));
  z(e, i, (a) => n(1, o = a));
  let l = T(r.querySelector("AccessPoint"), (a) => a.getAttribute("name"));
  z(e, l, (a) => n(2, u = a));
  let f = T(r.querySelector("LDevice"), (a) => Array.from(a.querySelectorAll("LN")).map((d) => d.getAttribute("lnType")));
  z(e, f, (a) => n(3, s = a));
  function m(a) {
    const d = a.target;
    if (!r)
      return;
    const h = {
      action: {
        element: r,
        oldAttributes: { name: "" },
        newAttributes: { name: d.value }
      }
    }, g = new CustomEvent("editor-action", { detail: h, composed: !0, bubbles: !0 });
    c.dispatchEvent(g);
  }
  function b(a) {
    H[a ? "unshift" : "push"](() => {
      c = a, n(0, c);
    });
  }
  return e.$$set = (a) => {
    "iedElement" in a && n(8, r = a.iedElement);
  }, [
    c,
    o,
    u,
    s,
    i,
    l,
    f,
    m,
    r,
    b
  ];
}
class qe extends ae {
  constructor(t) {
    super(), fe(this, t, Oe, Le, J, { iedElement: 8 });
  }
}
function Z(e, t, n) {
  const o = e.slice();
  return o[2] = t[n], o;
}
function ee(e) {
  let t, n, o, u, s = R(
    /*ieds*/
    e[1]
  ), r = [];
  for (let i = 0; i < s.length; i += 1)
    r[i] = te(Z(e, s, i));
  const c = (i) => j(r[i], 1, 1, () => {
    r[i] = null;
  });
  return {
    c() {
      t = v("h2"), t.textContent = "these are the IEDs", n = I(), o = v("ul");
      for (let i = 0; i < r.length; i += 1)
        r[i].c();
    },
    m(i, l) {
      w(i, t, l), w(i, n, l), w(i, o, l);
      for (let f = 0; f < r.length; f += 1)
        r[f] && r[f].m(o, null);
      u = !0;
    },
    p(i, l) {
      if (l & /*ieds, doc*/
      3) {
        s = R(
          /*ieds*/
          i[1]
        );
        let f;
        for (f = 0; f < s.length; f += 1) {
          const m = Z(i, s, f);
          r[f] ? (r[f].p(m, l), E(r[f], 1)) : (r[f] = te(m), r[f].c(), E(r[f], 1), r[f].m(o, null));
        }
        for (le(), f = s.length; f < r.length; f += 1)
          c(f);
        ue();
      }
    },
    i(i) {
      if (!u) {
        for (let l = 0; l < s.length; l += 1)
          E(r[l]);
        u = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        j(r[l]);
      u = !1;
    },
    d(i) {
      i && ($(t), $(n), $(o)), re(r, i);
    }
  };
}
function te(e) {
  let t, n;
  return t = new qe({
    props: {
      iedElement: (
        /*ied*/
        e[2]
      ),
      xmlDocument: (
        /*doc*/
        e[0]
      )
    }
  }), {
    c() {
      Ae(t.$$.fragment);
    },
    m(o, u) {
      se(t, o, u), n = !0;
    },
    p(o, u) {
      const s = {};
      u & /*ieds*/
      2 && (s.iedElement = /*ied*/
      o[2]), u & /*doc*/
      1 && (s.xmlDocument = /*doc*/
      o[0]), t.$set(s);
    },
    i(o) {
      n || (E(t.$$.fragment, o), n = !0);
    },
    o(o) {
      j(t.$$.fragment, o), n = !1;
    },
    d(o) {
      ce(t, o);
    }
  };
}
function De(e) {
  let t, n, o, u, s, r = (
    /*doc*/
    e[0] && ee(e)
  );
  return {
    c() {
      r && r.c(), t = I(), n = v("input"), o = I(), u = v("input"), k(n, "type", "hidden"), k(n, "name", "package-name"), n.value = de, k(u, "type", "hidden"), k(u, "name", "package-version"), u.value = he;
    },
    m(c, i) {
      r && r.m(c, i), w(c, t, i), w(c, n, i), w(c, o, i), w(c, u, i), s = !0;
    },
    p(c, [i]) {
      /*doc*/
      c[0] ? r ? (r.p(c, i), i & /*doc*/
      1 && E(r, 1)) : (r = ee(c), r.c(), E(r, 1), r.m(t.parentNode, t)) : r && (le(), j(r, 1, 1, () => {
        r = null;
      }), ue());
    },
    i(c) {
      s || (E(r), s = !0);
    },
    o(c) {
      j(r), s = !1;
    },
    d(c) {
      c && ($(t), $(n), $(o), $(u)), r && r.d(c);
    }
  };
}
function je(e, t, n) {
  let o, { doc: u } = t;
  return e.$$set = (s) => {
    "doc" in s && n(0, u = s.doc);
  }, e.$$.update = () => {
    e.$$.dirty & /*doc*/
    1 && n(1, o = u == null ? void 0 : u.querySelectorAll("IED"));
  }, [u, o];
}
class Be extends ae {
  constructor(t) {
    super(), fe(this, t, je, De, J, { doc: 0 });
  }
}
class Me extends HTMLElement {
  constructor() {
    super(...arguments);
    O(this, "plugin");
    O(this, "_doc");
  }
  connectedCallback() {
    var o;
    this.attachShadow({ mode: "open" }), this.plugin = new Be({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const n = Ie();
    (o = this.shadowRoot) == null || o.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.plugin && this.plugin.$set({ doc: n });
  }
  set editCount(n) {
    this.plugin && this.plugin.$set({ editCount: n });
  }
}
function Ie() {
  const e = `${de}-v${he}-style`, t = Re(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = t, n.id = e, n;
}
function Re() {
  const e = new URL(import.meta.url), t = e.origin, n = e.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [t, n, "style.css"].filter(Boolean).join("/");
}
export {
  Me as default
};
