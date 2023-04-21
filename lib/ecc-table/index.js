import { defineComponent as At, ref as K, watch as Ae, computed as V, resolveComponent as C, resolveDirective as mt, openBlock as y, createElementBlock as _, Fragment as M, withDirectives as St, createBlock as R, mergeProps as wt, unref as p, withCtx as ae, renderList as Ct, createVNode as D, createElementVNode as Ot, renderSlot as H, withModifiers as ne, toDisplayString as me, resolveDynamicComponent as It, createCommentVNode as oe, normalizeStyle as xt, isRef as Pt, nextTick as Et } from "vue";
const Lt = (e) => e.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
var q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kt() {
  this.__data__ = [], this.size = 0;
}
var Mt = kt;
function Dt(e, t) {
  return e === t || e !== e && t !== t;
}
var Ye = Dt, Bt = Ye;
function Ft(e, t) {
  for (var r = e.length; r--; )
    if (Bt(e[r][0], t))
      return r;
  return -1;
}
var Y = Ft, Gt = Y, Ut = Array.prototype, Nt = Ut.splice;
function zt(e) {
  var t = this.__data__, r = Gt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Nt.call(t, r, 1), --this.size, !0;
}
var Kt = zt, Vt = Y;
function Rt(e) {
  var t = this.__data__, r = Vt(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var Ht = Rt, qt = Y;
function Wt(e) {
  return qt(this.__data__, e) > -1;
}
var Jt = Wt, Yt = Y;
function Xt(e, t) {
  var r = this.__data__, a = Yt(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var Zt = Xt, Qt = Mt, er = Kt, tr = Ht, rr = Jt, ar = Zt;
function I(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
I.prototype.clear = Qt;
I.prototype.delete = er;
I.prototype.get = tr;
I.prototype.has = rr;
I.prototype.set = ar;
var X = I, nr = X;
function or() {
  this.__data__ = new nr(), this.size = 0;
}
var ir = or;
function sr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var cr = sr;
function lr(e) {
  return this.__data__.get(e);
}
var ur = lr;
function gr(e) {
  return this.__data__.has(e);
}
var fr = gr, vr = typeof q == "object" && q && q.Object === Object && q, Xe = vr, pr = Xe, dr = typeof self == "object" && self && self.Object === Object && self, yr = pr || dr || Function("return this")(), T = yr, br = T, $r = br.Symbol, fe = $r, Se = fe, Ze = Object.prototype, hr = Ze.hasOwnProperty, _r = Ze.toString, B = Se ? Se.toStringTag : void 0;
function Tr(e) {
  var t = hr.call(e, B), r = e[B];
  try {
    e[B] = void 0;
    var a = !0;
  } catch {
  }
  var i = _r.call(e);
  return a && (t ? e[B] = r : delete e[B]), i;
}
var jr = Tr, Ar = Object.prototype, mr = Ar.toString;
function Sr(e) {
  return mr.call(e);
}
var wr = Sr, we = fe, Cr = jr, Or = wr, Ir = "[object Null]", xr = "[object Undefined]", Ce = we ? we.toStringTag : void 0;
function Pr(e) {
  return e == null ? e === void 0 ? xr : Ir : Ce && Ce in Object(e) ? Cr(e) : Or(e);
}
var Z = Pr;
function Er(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var G = Er, Lr = Z, kr = G, Mr = "[object AsyncFunction]", Dr = "[object Function]", Br = "[object GeneratorFunction]", Fr = "[object Proxy]";
function Gr(e) {
  if (!kr(e))
    return !1;
  var t = Lr(e);
  return t == Dr || t == Br || t == Mr || t == Fr;
}
var Qe = Gr, Ur = T, Nr = Ur["__core-js_shared__"], zr = Nr, ie = zr, Oe = function() {
  var e = /[^.]+$/.exec(ie && ie.keys && ie.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Kr(e) {
  return !!Oe && Oe in e;
}
var Vr = Kr, Rr = Function.prototype, Hr = Rr.toString;
function qr(e) {
  if (e != null) {
    try {
      return Hr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var et = qr, Wr = Qe, Jr = Vr, Yr = G, Xr = et, Zr = /[\\^$.*+?()[\]{}|]/g, Qr = /^\[object .+?Constructor\]$/, ea = Function.prototype, ta = Object.prototype, ra = ea.toString, aa = ta.hasOwnProperty, na = RegExp(
  "^" + ra.call(aa).replace(Zr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oa(e) {
  if (!Yr(e) || Jr(e))
    return !1;
  var t = Wr(e) ? na : Qr;
  return t.test(Xr(e));
}
var ia = oa;
function sa(e, t) {
  return e == null ? void 0 : e[t];
}
var ca = sa, la = ia, ua = ca;
function ga(e, t) {
  var r = ua(e, t);
  return la(r) ? r : void 0;
}
var S = ga, fa = S, va = T, pa = fa(va, "Map"), ve = pa, da = S, ya = da(Object, "create"), Q = ya, Ie = Q;
function ba() {
  this.__data__ = Ie ? Ie(null) : {}, this.size = 0;
}
var $a = ba;
function ha(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var _a = ha, Ta = Q, ja = "__lodash_hash_undefined__", Aa = Object.prototype, ma = Aa.hasOwnProperty;
function Sa(e) {
  var t = this.__data__;
  if (Ta) {
    var r = t[e];
    return r === ja ? void 0 : r;
  }
  return ma.call(t, e) ? t[e] : void 0;
}
var wa = Sa, Ca = Q, Oa = Object.prototype, Ia = Oa.hasOwnProperty;
function xa(e) {
  var t = this.__data__;
  return Ca ? t[e] !== void 0 : Ia.call(t, e);
}
var Pa = xa, Ea = Q, La = "__lodash_hash_undefined__";
function ka(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ea && t === void 0 ? La : t, this;
}
var Ma = ka, Da = $a, Ba = _a, Fa = wa, Ga = Pa, Ua = Ma;
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = Da;
x.prototype.delete = Ba;
x.prototype.get = Fa;
x.prototype.has = Ga;
x.prototype.set = Ua;
var Na = x, xe = Na, za = X, Ka = ve;
function Va() {
  this.size = 0, this.__data__ = {
    hash: new xe(),
    map: new (Ka || za)(),
    string: new xe()
  };
}
var Ra = Va;
function Ha(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var qa = Ha, Wa = qa;
function Ja(e, t) {
  var r = e.__data__;
  return Wa(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ee = Ja, Ya = ee;
function Xa(e) {
  var t = Ya(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var Za = Xa, Qa = ee;
function en(e) {
  return Qa(this, e).get(e);
}
var tn = en, rn = ee;
function an(e) {
  return rn(this, e).has(e);
}
var nn = an, on = ee;
function sn(e, t) {
  var r = on(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var cn = sn, ln = Ra, un = Za, gn = tn, fn = nn, vn = cn;
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = ln;
P.prototype.delete = un;
P.prototype.get = gn;
P.prototype.has = fn;
P.prototype.set = vn;
var pn = P, dn = X, yn = ve, bn = pn, $n = 200;
function hn(e, t) {
  var r = this.__data__;
  if (r instanceof dn) {
    var a = r.__data__;
    if (!yn || a.length < $n - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new bn(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var _n = hn, Tn = X, jn = ir, An = cr, mn = ur, Sn = fr, wn = _n;
function E(e) {
  var t = this.__data__ = new Tn(e);
  this.size = t.size;
}
E.prototype.clear = jn;
E.prototype.delete = An;
E.prototype.get = mn;
E.prototype.has = Sn;
E.prototype.set = wn;
var Cn = E;
function On(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var In = On, xn = S, Pn = function() {
  try {
    var e = xn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), En = Pn, Pe = En;
function Ln(e, t, r) {
  t == "__proto__" && Pe ? Pe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var tt = Ln, kn = tt, Mn = Ye, Dn = Object.prototype, Bn = Dn.hasOwnProperty;
function Fn(e, t, r) {
  var a = e[t];
  (!(Bn.call(e, t) && Mn(a, r)) || r === void 0 && !(t in e)) && kn(e, t, r);
}
var rt = Fn, Gn = rt, Un = tt;
function Nn(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var c = t[s], v = a ? a(r[c], e[c], c, r, e) : void 0;
    v === void 0 && (v = e[c]), i ? Un(r, c, v) : Gn(r, c, v);
  }
  return r;
}
var te = Nn;
function zn(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var Kn = zn;
function Vn(e) {
  return e != null && typeof e == "object";
}
var U = Vn, Rn = Z, Hn = U, qn = "[object Arguments]";
function Wn(e) {
  return Hn(e) && Rn(e) == qn;
}
var Jn = Wn, Ee = Jn, Yn = U, at = Object.prototype, Xn = at.hasOwnProperty, Zn = at.propertyIsEnumerable, Qn = Ee(function() {
  return arguments;
}()) ? Ee : function(e) {
  return Yn(e) && Xn.call(e, "callee") && !Zn.call(e, "callee");
}, eo = Qn, to = Array.isArray, pe = to, F = {}, ro = {
  get exports() {
    return F;
  },
  set exports(e) {
    F = e;
  }
};
function ao() {
  return !1;
}
var no = ao;
(function(e, t) {
  var r = T, a = no, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, c = o ? r.Buffer : void 0, v = c ? c.isBuffer : void 0, f = v || a;
  e.exports = f;
})(ro, F);
var oo = 9007199254740991, io = /^(?:0|[1-9]\d*)$/;
function so(e, t) {
  var r = typeof e;
  return t = t ?? oo, !!t && (r == "number" || r != "symbol" && io.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var co = so, lo = 9007199254740991;
function uo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lo;
}
var nt = uo, go = Z, fo = nt, vo = U, po = "[object Arguments]", yo = "[object Array]", bo = "[object Boolean]", $o = "[object Date]", ho = "[object Error]", _o = "[object Function]", To = "[object Map]", jo = "[object Number]", Ao = "[object Object]", mo = "[object RegExp]", So = "[object Set]", wo = "[object String]", Co = "[object WeakMap]", Oo = "[object ArrayBuffer]", Io = "[object DataView]", xo = "[object Float32Array]", Po = "[object Float64Array]", Eo = "[object Int8Array]", Lo = "[object Int16Array]", ko = "[object Int32Array]", Mo = "[object Uint8Array]", Do = "[object Uint8ClampedArray]", Bo = "[object Uint16Array]", Fo = "[object Uint32Array]", g = {};
g[xo] = g[Po] = g[Eo] = g[Lo] = g[ko] = g[Mo] = g[Do] = g[Bo] = g[Fo] = !0;
g[po] = g[yo] = g[Oo] = g[bo] = g[Io] = g[$o] = g[ho] = g[_o] = g[To] = g[jo] = g[Ao] = g[mo] = g[So] = g[wo] = g[Co] = !1;
function Go(e) {
  return vo(e) && fo(e.length) && !!g[go(e)];
}
var Uo = Go;
function No(e) {
  return function(t) {
    return e(t);
  };
}
var de = No, O = {}, zo = {
  get exports() {
    return O;
  },
  set exports(e) {
    O = e;
  }
};
(function(e, t) {
  var r = Xe, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s && r.process, c = function() {
    try {
      var v = i && i.require && i.require("util").types;
      return v || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(zo, O);
var Ko = Uo, Vo = de, Le = O, ke = Le && Le.isTypedArray, Ro = ke ? Vo(ke) : Ko, Ho = Ro, qo = Kn, Wo = eo, Jo = pe, Yo = F, Xo = co, Zo = Ho, Qo = Object.prototype, ei = Qo.hasOwnProperty;
function ti(e, t) {
  var r = Jo(e), a = !r && Wo(e), i = !r && !a && Yo(e), s = !r && !a && !i && Zo(e), o = r || a || i || s, c = o ? qo(e.length, String) : [], v = c.length;
  for (var f in e)
    (t || ei.call(e, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Xo(f, v))) && c.push(f);
  return c;
}
var ot = ti, ri = Object.prototype;
function ai(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ri;
  return e === r;
}
var ye = ai;
function ni(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var it = ni, oi = it, ii = oi(Object.keys, Object), si = ii, ci = ye, li = si, ui = Object.prototype, gi = ui.hasOwnProperty;
function fi(e) {
  if (!ci(e))
    return li(e);
  var t = [];
  for (var r in Object(e))
    gi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var vi = fi, pi = Qe, di = nt;
function yi(e) {
  return e != null && di(e.length) && !pi(e);
}
var st = yi, bi = ot, $i = vi, hi = st;
function _i(e) {
  return hi(e) ? bi(e) : $i(e);
}
var be = _i, Ti = te, ji = be;
function Ai(e, t) {
  return e && Ti(t, ji(t), e);
}
var mi = Ai;
function Si(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var wi = Si, Ci = G, Oi = ye, Ii = wi, xi = Object.prototype, Pi = xi.hasOwnProperty;
function Ei(e) {
  if (!Ci(e))
    return Ii(e);
  var t = Oi(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !Pi.call(e, a)) || r.push(a);
  return r;
}
var Li = Ei, ki = ot, Mi = Li, Di = st;
function Bi(e) {
  return Di(e) ? ki(e, !0) : Mi(e);
}
var $e = Bi, Fi = te, Gi = $e;
function Ui(e, t) {
  return e && Fi(t, Gi(t), e);
}
var Ni = Ui, J = {}, zi = {
  get exports() {
    return J;
  },
  set exports(e) {
    J = e;
  }
};
(function(e, t) {
  var r = T, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, c = o ? o.allocUnsafe : void 0;
  function v(f, j) {
    if (j)
      return f.slice();
    var b = f.length, $ = c ? c(b) : new f.constructor(b);
    return f.copy($), $;
  }
  e.exports = v;
})(zi, J);
function Ki(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var Vi = Ki;
function Ri(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, s = []; ++r < a; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
var Hi = Ri;
function qi() {
  return [];
}
var ct = qi, Wi = Hi, Ji = ct, Yi = Object.prototype, Xi = Yi.propertyIsEnumerable, Me = Object.getOwnPropertySymbols, Zi = Me ? function(e) {
  return e == null ? [] : (e = Object(e), Wi(Me(e), function(t) {
    return Xi.call(e, t);
  }));
} : Ji, he = Zi, Qi = te, es = he;
function ts(e, t) {
  return Qi(e, es(e), t);
}
var rs = ts;
function as(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var lt = as, ns = it, os = ns(Object.getPrototypeOf, Object), ut = os, is = lt, ss = ut, cs = he, ls = ct, us = Object.getOwnPropertySymbols, gs = us ? function(e) {
  for (var t = []; e; )
    is(t, cs(e)), e = ss(e);
  return t;
} : ls, gt = gs, fs = te, vs = gt;
function ps(e, t) {
  return fs(e, vs(e), t);
}
var ds = ps, ys = lt, bs = pe;
function $s(e, t, r) {
  var a = t(e);
  return bs(e) ? a : ys(a, r(e));
}
var ft = $s, hs = ft, _s = he, Ts = be;
function js(e) {
  return hs(e, Ts, _s);
}
var As = js, ms = ft, Ss = gt, ws = $e;
function Cs(e) {
  return ms(e, ws, Ss);
}
var Os = Cs, Is = S, xs = T, Ps = Is(xs, "DataView"), Es = Ps, Ls = S, ks = T, Ms = Ls(ks, "Promise"), Ds = Ms, Bs = S, Fs = T, Gs = Bs(Fs, "Set"), Us = Gs, Ns = S, zs = T, Ks = Ns(zs, "WeakMap"), Vs = Ks, se = Es, ce = ve, le = Ds, ue = Us, ge = Vs, vt = Z, L = et, De = "[object Map]", Rs = "[object Object]", Be = "[object Promise]", Fe = "[object Set]", Ge = "[object WeakMap]", Ue = "[object DataView]", Hs = L(se), qs = L(ce), Ws = L(le), Js = L(ue), Ys = L(ge), m = vt;
(se && m(new se(new ArrayBuffer(1))) != Ue || ce && m(new ce()) != De || le && m(le.resolve()) != Be || ue && m(new ue()) != Fe || ge && m(new ge()) != Ge) && (m = function(e) {
  var t = vt(e), r = t == Rs ? e.constructor : void 0, a = r ? L(r) : "";
  if (a)
    switch (a) {
      case Hs:
        return Ue;
      case qs:
        return De;
      case Ws:
        return Be;
      case Js:
        return Fe;
      case Ys:
        return Ge;
    }
  return t;
});
var _e = m, Xs = Object.prototype, Zs = Xs.hasOwnProperty;
function Qs(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && Zs.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var ec = Qs, tc = T, rc = tc.Uint8Array, ac = rc, Ne = ac;
function nc(e) {
  var t = new e.constructor(e.byteLength);
  return new Ne(t).set(new Ne(e)), t;
}
var Te = nc, oc = Te;
function ic(e, t) {
  var r = t ? oc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var sc = ic, cc = /\w*$/;
function lc(e) {
  var t = new e.constructor(e.source, cc.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var uc = lc, ze = fe, Ke = ze ? ze.prototype : void 0, Ve = Ke ? Ke.valueOf : void 0;
function gc(e) {
  return Ve ? Object(Ve.call(e)) : {};
}
var fc = gc, vc = Te;
function pc(e, t) {
  var r = t ? vc(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var dc = pc, yc = Te, bc = sc, $c = uc, hc = fc, _c = dc, Tc = "[object Boolean]", jc = "[object Date]", Ac = "[object Map]", mc = "[object Number]", Sc = "[object RegExp]", wc = "[object Set]", Cc = "[object String]", Oc = "[object Symbol]", Ic = "[object ArrayBuffer]", xc = "[object DataView]", Pc = "[object Float32Array]", Ec = "[object Float64Array]", Lc = "[object Int8Array]", kc = "[object Int16Array]", Mc = "[object Int32Array]", Dc = "[object Uint8Array]", Bc = "[object Uint8ClampedArray]", Fc = "[object Uint16Array]", Gc = "[object Uint32Array]";
function Uc(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Ic:
      return yc(e);
    case Tc:
    case jc:
      return new a(+e);
    case xc:
      return bc(e, r);
    case Pc:
    case Ec:
    case Lc:
    case kc:
    case Mc:
    case Dc:
    case Bc:
    case Fc:
    case Gc:
      return _c(e, r);
    case Ac:
      return new a();
    case mc:
    case Cc:
      return new a(e);
    case Sc:
      return $c(e);
    case wc:
      return new a();
    case Oc:
      return hc(e);
  }
}
var Nc = Uc, zc = G, Re = Object.create, Kc = function() {
  function e() {
  }
  return function(t) {
    if (!zc(t))
      return {};
    if (Re)
      return Re(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), Vc = Kc, Rc = Vc, Hc = ut, qc = ye;
function Wc(e) {
  return typeof e.constructor == "function" && !qc(e) ? Rc(Hc(e)) : {};
}
var Jc = Wc, Yc = _e, Xc = U, Zc = "[object Map]";
function Qc(e) {
  return Xc(e) && Yc(e) == Zc;
}
var el = Qc, tl = el, rl = de, He = O, qe = He && He.isMap, al = qe ? rl(qe) : tl, nl = al, ol = _e, il = U, sl = "[object Set]";
function cl(e) {
  return il(e) && ol(e) == sl;
}
var ll = cl, ul = ll, gl = de, We = O, Je = We && We.isSet, fl = Je ? gl(Je) : ul, vl = fl, pl = Cn, dl = In, yl = rt, bl = mi, $l = Ni, hl = J, _l = Vi, Tl = rs, jl = ds, Al = As, ml = Os, Sl = _e, wl = ec, Cl = Nc, Ol = Jc, Il = pe, xl = F, Pl = nl, El = G, Ll = vl, kl = be, Ml = $e, Dl = 1, Bl = 2, Fl = 4, pt = "[object Arguments]", Gl = "[object Array]", Ul = "[object Boolean]", Nl = "[object Date]", zl = "[object Error]", dt = "[object Function]", Kl = "[object GeneratorFunction]", Vl = "[object Map]", Rl = "[object Number]", yt = "[object Object]", Hl = "[object RegExp]", ql = "[object Set]", Wl = "[object String]", Jl = "[object Symbol]", Yl = "[object WeakMap]", Xl = "[object ArrayBuffer]", Zl = "[object DataView]", Ql = "[object Float32Array]", eu = "[object Float64Array]", tu = "[object Int8Array]", ru = "[object Int16Array]", au = "[object Int32Array]", nu = "[object Uint8Array]", ou = "[object Uint8ClampedArray]", iu = "[object Uint16Array]", su = "[object Uint32Array]", l = {};
l[pt] = l[Gl] = l[Xl] = l[Zl] = l[Ul] = l[Nl] = l[Ql] = l[eu] = l[tu] = l[ru] = l[au] = l[Vl] = l[Rl] = l[yt] = l[Hl] = l[ql] = l[Wl] = l[Jl] = l[nu] = l[ou] = l[iu] = l[su] = !0;
l[zl] = l[dt] = l[Yl] = !1;
function W(e, t, r, a, i, s) {
  var o, c = t & Dl, v = t & Bl, f = t & Fl;
  if (r && (o = i ? r(e, a, i, s) : r(e)), o !== void 0)
    return o;
  if (!El(e))
    return e;
  var j = Il(e);
  if (j) {
    if (o = wl(e), !c)
      return _l(e, o);
  } else {
    var b = Sl(e), $ = b == dt || b == Kl;
    if (xl(e))
      return hl(e, c);
    if (b == yt || b == pt || $ && !i) {
      if (o = v || $ ? {} : Ol(e), !c)
        return v ? jl(e, $l(o, e)) : Tl(e, bl(o, e));
    } else {
      if (!l[b])
        return i ? e : {};
      o = Cl(e, b, c);
    }
  }
  s || (s = new pl());
  var N = s.get(e);
  if (N)
    return N;
  s.set(e, o), Ll(e) ? e.forEach(function(h) {
    o.add(W(h, t, r, h, e, s));
  }) : Pl(e) && e.forEach(function(h, n) {
    o.set(n, W(h, t, r, n, e, s));
  });
  var re = f ? v ? ml : Al : v ? Ml : kl, z = j ? void 0 : re(e);
  return dl(z || e, function(h, n) {
    z && (n = h, h = e[n]), yl(o, n, W(h, t, r, n, e, s));
  }), o;
}
var cu = W, lu = cu, uu = 1, gu = 4;
function fu(e) {
  return lu(e, uu | gu);
}
var vu = fu;
const pu = {
  key: 0,
  style: { display: "flex" }
}, du = {
  key: 1,
  class: "action-icon"
}, yu = { key: 1 }, bu = { key: 2 }, $u = /* @__PURE__ */ At({
  __name: "index",
  props: {
    // 表格配置选项
    options: {
      type: Array,
      required: !0
    },
    // 表格数据
    data: {
      type: Array,
      required: !0
    },
    // 加载文案
    elementLoadingText: {
      type: String
    },
    // 加载图标名
    elementLoadingSpinner: {
      type: String
    },
    // 加载背景颜色
    elementLoadingBackground: {
      type: String
    },
    // 加载图标是svg
    elementLoadingSvg: {
      type: String
    },
    // 加载团是svg的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 编辑显示的图标
    editIcon: {
      type: String,
      default: "Edit"
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: !1
    },
    // 编辑行按钮的标识
    editRowIndex: {
      type: String,
      default: ""
    },
    // 是否显示分页
    pagination: {
      type: Boolean,
      default: !1
    },
    // 显示分页的对齐方式
    paginationAlign: {
      type: String,
      default: "left"
    },
    // 当前是第几页
    currentPage: {
      type: Number,
      default: 1
    },
    // 当前一页多少条数据
    pageSize: {
      type: Number,
      default: 10
    },
    // 显示分页数据多少条的选项
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "confirm",
    "close",
    "update:editRowIndex",
    "size-change",
    "current-change"
  ],
  setup(e, { emit: t }) {
    const r = e;
    let a = K(1);
    Ae(
      () => r.currentPage,
      (n) => {
        a.value = n;
      }
    );
    let i = (n) => {
      t("size-change", n);
    }, s = (n) => {
      t("current-change", n);
    }, o = K(""), c = K(vu(r.data));
    Ae(
      () => r.data,
      (n) => {
        c.value = n;
      },
      { deep: !0 }
    );
    let v = V(() => r.options.filter((n) => !n.action)), f = V(() => r.options.find((n) => n.action)), j = V(() => !r.data), b = V(() => r.paginationAlign === "left" ? "flex-start" : r.paginationAlign === "right" ? "flex-end" : "center"), $ = K(""), N = (n, A) => {
      $.value = A, o.value = n.$index + n.column.id;
    }, re = (n) => {
      t("confirm", n), n.isKeep = !1, o.value = "", console.log("点击对钩图标");
    }, z = (n, A) => {
      t("close", n), n[A] = $.value, o.value = "", Et(() => {
      }), console.log("点击叉子图标");
    }, h = (n, A) => {
      r.isEditRow && r.editRowIndex === "edit" && (n.rowEdit = !n.rowEdit, c.value.map((k) => {
        k !== n && (k.rowEdit = !1);
      }), n.rowEdit && t("update:editRowIndex", ""));
    };
    return (n, A) => {
      const k = C("el-input"), bt = C("el-icon-check"), $t = C("el-icon-close"), je = C("el-table-column"), ht = C("el-table"), _t = C("el-pagination"), Tt = mt("loading");
      return y(), _(M, null, [
        St((y(), R(ht, wt({
          data: p(c),
          "element-loading-text": e.elementLoadingText,
          "element-loading-spinner": e.elementLoadingSpinner,
          "element-loading-background": e.elementLoadingBackground,
          "element-loading-svg": e.elementLoadingSvg,
          "element-loading-svg-view-box": e.elementLoadingSvgViewBox,
          onRowClick: p(h)
        }, n.$attrs), {
          default: ae(() => [
            (y(!0), _(M, null, Ct(p(v), (u, jt) => (y(), _(M, { key: jt }, [
              u.prop && !u.action ? (y(), R(je, {
                key: 0,
                label: u.label,
                prop: u.prop,
                width: u.width,
                align: u.align
              }, {
                default: ae((d) => [
                  d.row.rowEdit ? (y(), R(k, {
                    key: 0,
                    size: "small",
                    modelValue: d.row[u.prop],
                    "onUpdate:modelValue": (w) => d.row[u.prop] = w
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (y(), _(M, { key: 1 }, [
                    d.$index + d.column.id === p(o) ? (y(), _("div", pu, [
                      D(k, {
                        size: "small",
                        modelValue: d.row[u.prop],
                        "onUpdate:modelValue": (w) => d.row[u.prop] = w
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      Ot("div", null, [
                        n.$slots.cellEdit ? H(n.$slots, "cellEdit", {
                          key: 0,
                          scope: d
                        }, void 0, !0) : (y(), _("div", du, [
                          D(bt, {
                            class: "check",
                            onClick: ne((w) => p(re)(d.row), ["stop"])
                          }, null, 8, ["onClick"]),
                          D($t, {
                            class: "close",
                            onClick: ne((w) => p(z)(d.row, u.prop), ["stop"])
                          }, null, 8, ["onClick"])
                        ]))
                      ])
                    ])) : (y(), _(M, { key: 1 }, [
                      u.slot ? H(n.$slots, u.slot, {
                        key: 0,
                        scope: d
                      }, void 0, !0) : d.row.isKeep && d.row[u.prop] !== p($) ? (y(), _("span", yu, me(d.row[u.prop] = p($)), 1)) : (y(), _("span", bu, me(d.row[u.prop]), 1)),
                      u.editable ? (y(), R(It(`el-icon-${p(Lt)(e.editIcon)}`), {
                        key: 3,
                        class: "edit",
                        onClick: ne((w) => p(N)(d, d.row[u.prop]), ["stop"])
                      }, null, 8, ["onClick"])) : oe("", !0)
                    ], 64))
                  ], 64))
                ]),
                _: 2
              }, 1032, ["label", "prop", "width", "align"])) : oe("", !0)
            ], 64))), 128)),
            D(je, {
              label: p(f).label,
              width: p(f).width,
              align: p(f).align
            }, {
              default: ae((u) => [
                u.row.rowEdit ? H(n.$slots, "editRow", {
                  key: 0,
                  scope: u
                }, void 0, !0) : H(n.$slots, "action", {
                  key: 1,
                  scope: u
                }, void 0, !0)
              ]),
              _: 3
            }, 8, ["label", "width", "align"])
          ]),
          _: 3
        }, 16, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-view-box", "onRowClick"])), [
          [Tt, p(j)]
        ]),
        e.pagination && !p(j) ? (y(), _("div", {
          key: 0,
          class: "pagination",
          style: xt({ justifyContent: p(b) })
        }, [
          D(_t, {
            currentPage: p(a),
            "onUpdate:currentPage": A[0] || (A[0] = (u) => Pt(a) ? a.value = u : a = u),
            "page-sizes": e.pageSizes,
            "page-size": e.pageSize,
            layout: "total, sizes, prev, pager, next, jumper",
            total: e.total,
            onSizeChange: p(i),
            onCurrentChange: p(s)
          }, null, 8, ["currentPage", "page-sizes", "page-size", "total", "onSizeChange", "onCurrentChange"])
        ], 4)) : oe("", !0)
      ], 64);
    };
  }
});
const hu = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, _u = /* @__PURE__ */ hu($u, [["__scopeId", "data-v-cbcc4c4f"]]), ju = {
  install(e) {
    e.component("ecc-table", _u);
  }
};
export {
  ju as default
};
