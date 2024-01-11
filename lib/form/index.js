import { defineComponent as Pr, ref as O, onMounted as xr, watch as Er, resolveComponent as K, openBlock as b, createElementBlock as V, Fragment as k, createCommentVNode as _, createBlock as A, mergeProps as R, withCtx as S, renderList as Ae, resolveDynamicComponent as ne, renderSlot as oe, createVNode as Mr } from "vue";
var H = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Fr() {
  this.__data__ = [], this.size = 0;
}
var Lr = Fr;
function Gr(e, r) {
  return e === r || e !== e && r !== r;
}
var Ye = Gr, Ur = Ye;
function Br(e, r) {
  for (var t = e.length; t--; )
    if (Ur(e[t][0], r))
      return t;
  return -1;
}
var Y = Br, Nr = Y, Kr = Array.prototype, Vr = Kr.splice;
function kr(e) {
  var r = this.__data__, t = Nr(r, e);
  if (t < 0)
    return !1;
  var a = r.length - 1;
  return t == a ? r.pop() : Vr.call(r, t, 1), --this.size, !0;
}
var Rr = kr, Hr = Y;
function zr(e) {
  var r = this.__data__, t = Hr(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var qr = zr, Wr = Y;
function Jr(e) {
  return Wr(this.__data__, e) > -1;
}
var Yr = Jr, Xr = Y;
function Zr(e, r) {
  var t = this.__data__, a = Xr(t, e);
  return a < 0 ? (++this.size, t.push([e, r])) : t[a][1] = r, this;
}
var Qr = Zr, et = Lr, rt = Rr, tt = qr, at = Yr, nt = Qr;
function P(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = et;
P.prototype.delete = rt;
P.prototype.get = tt;
P.prototype.has = at;
P.prototype.set = nt;
var X = P, ot = X;
function st() {
  this.__data__ = new ot(), this.size = 0;
}
var it = st;
function ct(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var lt = ct;
function ut(e) {
  return this.__data__.get(e);
}
var pt = ut;
function vt(e) {
  return this.__data__.has(e);
}
var ft = vt, gt = typeof H == "object" && H && H.Object === Object && H, Xe = gt, yt = Xe, bt = typeof self == "object" && self && self.Object === Object && self, $t = yt || bt || Function("return this")(), d = $t, dt = d, ht = dt.Symbol, ve = ht, me = ve, Ze = Object.prototype, _t = Ze.hasOwnProperty, Tt = Ze.toString, L = me ? me.toStringTag : void 0;
function jt(e) {
  var r = _t.call(e, L), t = e[L];
  try {
    e[L] = void 0;
    var a = !0;
  } catch {
  }
  var o = Tt.call(e);
  return a && (r ? e[L] = t : delete e[L]), o;
}
var At = jt, mt = Object.prototype, Ct = mt.toString;
function Ot(e) {
  return Ct.call(e);
}
var St = Ot, Ce = ve, wt = At, It = St, Pt = "[object Null]", xt = "[object Undefined]", Oe = Ce ? Ce.toStringTag : void 0;
function Et(e) {
  return e == null ? e === void 0 ? xt : Pt : Oe && Oe in Object(e) ? wt(e) : It(e);
}
var Z = Et;
function Mt(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var G = Mt, Dt = Z, Ft = G, Lt = "[object AsyncFunction]", Gt = "[object Function]", Ut = "[object GeneratorFunction]", Bt = "[object Proxy]";
function Nt(e) {
  if (!Ft(e))
    return !1;
  var r = Dt(e);
  return r == Gt || r == Ut || r == Lt || r == Bt;
}
var Qe = Nt, Kt = d, Vt = Kt["__core-js_shared__"], kt = Vt, se = kt, Se = function() {
  var e = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Rt(e) {
  return !!Se && Se in e;
}
var Ht = Rt, zt = Function.prototype, qt = zt.toString;
function Wt(e) {
  if (e != null) {
    try {
      return qt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var er = Wt, Jt = Qe, Yt = Ht, Xt = G, Zt = er, Qt = /[\\^$.*+?()[\]{}|]/g, ea = /^\[object .+?Constructor\]$/, ra = Function.prototype, ta = Object.prototype, aa = ra.toString, na = ta.hasOwnProperty, oa = RegExp(
  "^" + aa.call(na).replace(Qt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function sa(e) {
  if (!Xt(e) || Yt(e))
    return !1;
  var r = Jt(e) ? oa : ea;
  return r.test(Zt(e));
}
var ia = sa;
function ca(e, r) {
  return e == null ? void 0 : e[r];
}
var la = ca, ua = ia, pa = la;
function va(e, r) {
  var t = pa(e, r);
  return ua(t) ? t : void 0;
}
var I = va, fa = I, ga = d, ya = fa(ga, "Map"), fe = ya, ba = I, $a = ba(Object, "create"), Q = $a, we = Q;
function da() {
  this.__data__ = we ? we(null) : {}, this.size = 0;
}
var ha = da;
function _a(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Ta = _a, ja = Q, Aa = "__lodash_hash_undefined__", ma = Object.prototype, Ca = ma.hasOwnProperty;
function Oa(e) {
  var r = this.__data__;
  if (ja) {
    var t = r[e];
    return t === Aa ? void 0 : t;
  }
  return Ca.call(r, e) ? r[e] : void 0;
}
var Sa = Oa, wa = Q, Ia = Object.prototype, Pa = Ia.hasOwnProperty;
function xa(e) {
  var r = this.__data__;
  return wa ? r[e] !== void 0 : Pa.call(r, e);
}
var Ea = xa, Ma = Q, Da = "__lodash_hash_undefined__";
function Fa(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = Ma && r === void 0 ? Da : r, this;
}
var La = Fa, Ga = ha, Ua = Ta, Ba = Sa, Na = Ea, Ka = La;
function x(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
x.prototype.clear = Ga;
x.prototype.delete = Ua;
x.prototype.get = Ba;
x.prototype.has = Na;
x.prototype.set = Ka;
var Va = x, Ie = Va, ka = X, Ra = fe;
function Ha() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (Ra || ka)(),
    string: new Ie()
  };
}
var za = Ha;
function qa(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var Wa = qa, Ja = Wa;
function Ya(e, r) {
  var t = e.__data__;
  return Ja(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var ee = Ya, Xa = ee;
function Za(e) {
  var r = Xa(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var Qa = Za, en = ee;
function rn(e) {
  return en(this, e).get(e);
}
var tn = rn, an = ee;
function nn(e) {
  return an(this, e).has(e);
}
var on = nn, sn = ee;
function cn(e, r) {
  var t = sn(this, e), a = t.size;
  return t.set(e, r), this.size += t.size == a ? 0 : 1, this;
}
var ln = cn, un = za, pn = Qa, vn = tn, fn = on, gn = ln;
function E(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var a = e[r];
    this.set(a[0], a[1]);
  }
}
E.prototype.clear = un;
E.prototype.delete = pn;
E.prototype.get = vn;
E.prototype.has = fn;
E.prototype.set = gn;
var yn = E, bn = X, $n = fe, dn = yn, hn = 200;
function _n(e, r) {
  var t = this.__data__;
  if (t instanceof bn) {
    var a = t.__data__;
    if (!$n || a.length < hn - 1)
      return a.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new dn(a);
  }
  return t.set(e, r), this.size = t.size, this;
}
var Tn = _n, jn = X, An = it, mn = lt, Cn = pt, On = ft, Sn = Tn;
function M(e) {
  var r = this.__data__ = new jn(e);
  this.size = r.size;
}
M.prototype.clear = An;
M.prototype.delete = mn;
M.prototype.get = Cn;
M.prototype.has = On;
M.prototype.set = Sn;
var wn = M;
function In(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length; ++t < a && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Pn = In, xn = I, En = function() {
  try {
    var e = xn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Mn = En, Pe = Mn;
function Dn(e, r, t) {
  r == "__proto__" && Pe ? Pe(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var rr = Dn, Fn = rr, Ln = Ye, Gn = Object.prototype, Un = Gn.hasOwnProperty;
function Bn(e, r, t) {
  var a = e[r];
  (!(Un.call(e, r) && Ln(a, t)) || t === void 0 && !(r in e)) && Fn(e, r, t);
}
var tr = Bn, Nn = tr, Kn = rr;
function Vn(e, r, t, a) {
  var o = !t;
  t || (t = {});
  for (var n = -1, i = r.length; ++n < i; ) {
    var c = r[n], g = a ? a(t[c], e[c], c, t, e) : void 0;
    g === void 0 && (g = e[c]), o ? Kn(t, c, g) : Nn(t, c, g);
  }
  return t;
}
var re = Vn;
function kn(e, r) {
  for (var t = -1, a = Array(e); ++t < e; )
    a[t] = r(t);
  return a;
}
var Rn = kn;
function Hn(e) {
  return e != null && typeof e == "object";
}
var U = Hn, zn = Z, qn = U, Wn = "[object Arguments]";
function Jn(e) {
  return qn(e) && zn(e) == Wn;
}
var Yn = Jn, xe = Yn, Xn = U, ar = Object.prototype, Zn = ar.hasOwnProperty, Qn = ar.propertyIsEnumerable, eo = xe(/* @__PURE__ */ function() {
  return arguments;
}()) ? xe : function(e) {
  return Xn(e) && Zn.call(e, "callee") && !Qn.call(e, "callee");
}, ro = eo, to = Array.isArray, ge = to, q = { exports: {} };
function ao() {
  return !1;
}
var no = ao;
q.exports;
(function(e, r) {
  var t = d, a = no, o = r && !r.nodeType && r, n = o && !0 && e && !e.nodeType && e, i = n && n.exports === o, c = i ? t.Buffer : void 0, g = c ? c.isBuffer : void 0, v = g || a;
  e.exports = v;
})(q, q.exports);
var nr = q.exports, oo = 9007199254740991, so = /^(?:0|[1-9]\d*)$/;
function io(e, r) {
  var t = typeof e;
  return r = r ?? oo, !!r && (t == "number" || t != "symbol" && so.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var co = io, lo = 9007199254740991;
function uo(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lo;
}
var or = uo, po = Z, vo = or, fo = U, go = "[object Arguments]", yo = "[object Array]", bo = "[object Boolean]", $o = "[object Date]", ho = "[object Error]", _o = "[object Function]", To = "[object Map]", jo = "[object Number]", Ao = "[object Object]", mo = "[object RegExp]", Co = "[object Set]", Oo = "[object String]", So = "[object WeakMap]", wo = "[object ArrayBuffer]", Io = "[object DataView]", Po = "[object Float32Array]", xo = "[object Float64Array]", Eo = "[object Int8Array]", Mo = "[object Int16Array]", Do = "[object Int32Array]", Fo = "[object Uint8Array]", Lo = "[object Uint8ClampedArray]", Go = "[object Uint16Array]", Uo = "[object Uint32Array]", u = {};
u[Po] = u[xo] = u[Eo] = u[Mo] = u[Do] = u[Fo] = u[Lo] = u[Go] = u[Uo] = !0;
u[go] = u[yo] = u[wo] = u[bo] = u[Io] = u[$o] = u[ho] = u[_o] = u[To] = u[jo] = u[Ao] = u[mo] = u[Co] = u[Oo] = u[So] = !1;
function Bo(e) {
  return fo(e) && vo(e.length) && !!u[po(e)];
}
var No = Bo;
function Ko(e) {
  return function(r) {
    return e(r);
  };
}
var ye = Ko, W = { exports: {} };
W.exports;
(function(e, r) {
  var t = Xe, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, n = o && o.exports === a, i = n && t.process, c = function() {
    try {
      var g = o && o.require && o.require("util").types;
      return g || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(W, W.exports);
var be = W.exports, Vo = No, ko = ye, Ee = be, Me = Ee && Ee.isTypedArray, Ro = Me ? ko(Me) : Vo, Ho = Ro, zo = Rn, qo = ro, Wo = ge, Jo = nr, Yo = co, Xo = Ho, Zo = Object.prototype, Qo = Zo.hasOwnProperty;
function es(e, r) {
  var t = Wo(e), a = !t && qo(e), o = !t && !a && Jo(e), n = !t && !a && !o && Xo(e), i = t || a || o || n, c = i ? zo(e.length, String) : [], g = c.length;
  for (var v in e)
    (r || Qo.call(e, v)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (v == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (v == "offset" || v == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (v == "buffer" || v == "byteLength" || v == "byteOffset") || // Skip index properties.
    Yo(v, g))) && c.push(v);
  return c;
}
var sr = es, rs = Object.prototype;
function ts(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || rs;
  return e === t;
}
var $e = ts;
function as(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var ir = as, ns = ir, os = ns(Object.keys, Object), ss = os, is = $e, cs = ss, ls = Object.prototype, us = ls.hasOwnProperty;
function ps(e) {
  if (!is(e))
    return cs(e);
  var r = [];
  for (var t in Object(e))
    us.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var vs = ps, fs = Qe, gs = or;
function ys(e) {
  return e != null && gs(e.length) && !fs(e);
}
var cr = ys, bs = sr, $s = vs, ds = cr;
function hs(e) {
  return ds(e) ? bs(e) : $s(e);
}
var de = hs, _s = re, Ts = de;
function js(e, r) {
  return e && _s(r, Ts(r), e);
}
var As = js;
function ms(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var Cs = ms, Os = G, Ss = $e, ws = Cs, Is = Object.prototype, Ps = Is.hasOwnProperty;
function xs(e) {
  if (!Os(e))
    return ws(e);
  var r = Ss(e), t = [];
  for (var a in e)
    a == "constructor" && (r || !Ps.call(e, a)) || t.push(a);
  return t;
}
var Es = xs, Ms = sr, Ds = Es, Fs = cr;
function Ls(e) {
  return Fs(e) ? Ms(e, !0) : Ds(e);
}
var he = Ls, Gs = re, Us = he;
function Bs(e, r) {
  return e && Gs(r, Us(r), e);
}
var Ns = Bs, J = { exports: {} };
J.exports;
(function(e, r) {
  var t = d, a = r && !r.nodeType && r, o = a && !0 && e && !e.nodeType && e, n = o && o.exports === a, i = n ? t.Buffer : void 0, c = i ? i.allocUnsafe : void 0;
  function g(v, m) {
    if (m)
      return v.slice();
    var $ = v.length, T = c ? c($) : new v.constructor($);
    return v.copy(T), T;
  }
  e.exports = g;
})(J, J.exports);
var Ks = J.exports;
function Vs(e, r) {
  var t = -1, a = e.length;
  for (r || (r = Array(a)); ++t < a; )
    r[t] = e[t];
  return r;
}
var ks = Vs;
function Rs(e, r) {
  for (var t = -1, a = e == null ? 0 : e.length, o = 0, n = []; ++t < a; ) {
    var i = e[t];
    r(i, t, e) && (n[o++] = i);
  }
  return n;
}
var Hs = Rs;
function zs() {
  return [];
}
var lr = zs, qs = Hs, Ws = lr, Js = Object.prototype, Ys = Js.propertyIsEnumerable, De = Object.getOwnPropertySymbols, Xs = De ? function(e) {
  return e == null ? [] : (e = Object(e), qs(De(e), function(r) {
    return Ys.call(e, r);
  }));
} : Ws, _e = Xs, Zs = re, Qs = _e;
function ei(e, r) {
  return Zs(e, Qs(e), r);
}
var ri = ei;
function ti(e, r) {
  for (var t = -1, a = r.length, o = e.length; ++t < a; )
    e[o + t] = r[t];
  return e;
}
var ur = ti, ai = ir, ni = ai(Object.getPrototypeOf, Object), pr = ni, oi = ur, si = pr, ii = _e, ci = lr, li = Object.getOwnPropertySymbols, ui = li ? function(e) {
  for (var r = []; e; )
    oi(r, ii(e)), e = si(e);
  return r;
} : ci, vr = ui, pi = re, vi = vr;
function fi(e, r) {
  return pi(e, vi(e), r);
}
var gi = fi, yi = ur, bi = ge;
function $i(e, r, t) {
  var a = r(e);
  return bi(e) ? a : yi(a, t(e));
}
var fr = $i, di = fr, hi = _e, _i = de;
function Ti(e) {
  return di(e, _i, hi);
}
var ji = Ti, Ai = fr, mi = vr, Ci = he;
function Oi(e) {
  return Ai(e, Ci, mi);
}
var Si = Oi, wi = I, Ii = d, Pi = wi(Ii, "DataView"), xi = Pi, Ei = I, Mi = d, Di = Ei(Mi, "Promise"), Fi = Di, Li = I, Gi = d, Ui = Li(Gi, "Set"), Bi = Ui, Ni = I, Ki = d, Vi = Ni(Ki, "WeakMap"), ki = Vi, ie = xi, ce = fe, le = Fi, ue = Bi, pe = ki, gr = Z, D = er, Fe = "[object Map]", Ri = "[object Object]", Le = "[object Promise]", Ge = "[object Set]", Ue = "[object WeakMap]", Be = "[object DataView]", Hi = D(ie), zi = D(ce), qi = D(le), Wi = D(ue), Ji = D(pe), w = gr;
(ie && w(new ie(new ArrayBuffer(1))) != Be || ce && w(new ce()) != Fe || le && w(le.resolve()) != Le || ue && w(new ue()) != Ge || pe && w(new pe()) != Ue) && (w = function(e) {
  var r = gr(e), t = r == Ri ? e.constructor : void 0, a = t ? D(t) : "";
  if (a)
    switch (a) {
      case Hi:
        return Be;
      case zi:
        return Fe;
      case qi:
        return Le;
      case Wi:
        return Ge;
      case Ji:
        return Ue;
    }
  return r;
});
var Te = w, Yi = Object.prototype, Xi = Yi.hasOwnProperty;
function Zi(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && Xi.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var Qi = Zi, ec = d, rc = ec.Uint8Array, tc = rc, Ne = tc;
function ac(e) {
  var r = new e.constructor(e.byteLength);
  return new Ne(r).set(new Ne(e)), r;
}
var je = ac, nc = je;
function oc(e, r) {
  var t = r ? nc(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var sc = oc, ic = /\w*$/;
function cc(e) {
  var r = new e.constructor(e.source, ic.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var lc = cc, Ke = ve, Ve = Ke ? Ke.prototype : void 0, ke = Ve ? Ve.valueOf : void 0;
function uc(e) {
  return ke ? Object(ke.call(e)) : {};
}
var pc = uc, vc = je;
function fc(e, r) {
  var t = r ? vc(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var gc = fc, yc = je, bc = sc, $c = lc, dc = pc, hc = gc, _c = "[object Boolean]", Tc = "[object Date]", jc = "[object Map]", Ac = "[object Number]", mc = "[object RegExp]", Cc = "[object Set]", Oc = "[object String]", Sc = "[object Symbol]", wc = "[object ArrayBuffer]", Ic = "[object DataView]", Pc = "[object Float32Array]", xc = "[object Float64Array]", Ec = "[object Int8Array]", Mc = "[object Int16Array]", Dc = "[object Int32Array]", Fc = "[object Uint8Array]", Lc = "[object Uint8ClampedArray]", Gc = "[object Uint16Array]", Uc = "[object Uint32Array]";
function Bc(e, r, t) {
  var a = e.constructor;
  switch (r) {
    case wc:
      return yc(e);
    case _c:
    case Tc:
      return new a(+e);
    case Ic:
      return bc(e, t);
    case Pc:
    case xc:
    case Ec:
    case Mc:
    case Dc:
    case Fc:
    case Lc:
    case Gc:
    case Uc:
      return hc(e, t);
    case jc:
      return new a();
    case Ac:
    case Oc:
      return new a(e);
    case mc:
      return $c(e);
    case Cc:
      return new a();
    case Sc:
      return dc(e);
  }
}
var Nc = Bc, Kc = G, Re = Object.create, Vc = /* @__PURE__ */ function() {
  function e() {
  }
  return function(r) {
    if (!Kc(r))
      return {};
    if (Re)
      return Re(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), kc = Vc, Rc = kc, Hc = pr, zc = $e;
function qc(e) {
  return typeof e.constructor == "function" && !zc(e) ? Rc(Hc(e)) : {};
}
var Wc = qc, Jc = Te, Yc = U, Xc = "[object Map]";
function Zc(e) {
  return Yc(e) && Jc(e) == Xc;
}
var Qc = Zc, el = Qc, rl = ye, He = be, ze = He && He.isMap, tl = ze ? rl(ze) : el, al = tl, nl = Te, ol = U, sl = "[object Set]";
function il(e) {
  return ol(e) && nl(e) == sl;
}
var cl = il, ll = cl, ul = ye, qe = be, We = qe && qe.isSet, pl = We ? ul(We) : ll, vl = pl, fl = wn, gl = Pn, yl = tr, bl = As, $l = Ns, dl = Ks, hl = ks, _l = ri, Tl = gi, jl = ji, Al = Si, ml = Te, Cl = Qi, Ol = Nc, Sl = Wc, wl = ge, Il = nr, Pl = al, xl = G, El = vl, Ml = de, Dl = he, Fl = 1, Ll = 2, Gl = 4, yr = "[object Arguments]", Ul = "[object Array]", Bl = "[object Boolean]", Nl = "[object Date]", Kl = "[object Error]", br = "[object Function]", Vl = "[object GeneratorFunction]", kl = "[object Map]", Rl = "[object Number]", $r = "[object Object]", Hl = "[object RegExp]", zl = "[object Set]", ql = "[object String]", Wl = "[object Symbol]", Jl = "[object WeakMap]", Yl = "[object ArrayBuffer]", Xl = "[object DataView]", Zl = "[object Float32Array]", Ql = "[object Float64Array]", eu = "[object Int8Array]", ru = "[object Int16Array]", tu = "[object Int32Array]", au = "[object Uint8Array]", nu = "[object Uint8ClampedArray]", ou = "[object Uint16Array]", su = "[object Uint32Array]", l = {};
l[yr] = l[Ul] = l[Yl] = l[Xl] = l[Bl] = l[Nl] = l[Zl] = l[Ql] = l[eu] = l[ru] = l[tu] = l[kl] = l[Rl] = l[$r] = l[Hl] = l[zl] = l[ql] = l[Wl] = l[au] = l[nu] = l[ou] = l[su] = !0;
l[Kl] = l[br] = l[Jl] = !1;
function z(e, r, t, a, o, n) {
  var i, c = r & Fl, g = r & Ll, v = r & Gl;
  if (t && (i = o ? t(e, a, o, n) : t(e)), i !== void 0)
    return i;
  if (!xl(e))
    return e;
  var m = wl(e);
  if (m) {
    if (i = Cl(e), !c)
      return hl(e, i);
  } else {
    var $ = ml(e), T = $ == br || $ == Vl;
    if (Il(e))
      return dl(e, c);
    if ($ == $r || $ == yr || T && !o) {
      if (i = g || T ? {} : Sl(e), !c)
        return g ? Tl(e, $l(i, e)) : _l(e, bl(i, e));
    } else {
      if (!l[$])
        return o ? e : {};
      i = Ol(e, $, c);
    }
  }
  n || (n = new fl());
  var B = n.get(e);
  if (B)
    return B;
  n.set(e, i), El(e) ? e.forEach(function(h) {
    i.add(z(h, r, t, h, e, n));
  }) : Pl(e) && e.forEach(function(h, j) {
    i.set(j, z(h, r, t, j, e, n));
  });
  var N = v ? g ? Al : jl : g ? Dl : Ml, te = m ? void 0 : N(e);
  return gl(te || e, function(h, j) {
    te && (j = h, h = e[j]), yl(i, j, z(h, r, t, j, e, n));
  }), i;
}
var iu = z, cu = iu, lu = 1, uu = 4;
function pu(e) {
  return cu(e, lu | uu);
}
var vu = pu;
const Je = /* @__PURE__ */ Dr(vu), fu = /* @__PURE__ */ Pr({
  __name: "index",
  props: {
    // 表单的配置项
    options: {
      type: Array,
      required: !0
    },
    // 用户自定义上传方法：会覆盖默认的 Xhr 行为，允许自行实现上传文件的请求
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "on-exceed",
    "before-upload",
    "before-remove"
  ],
  setup(e, { expose: r, emit: t }) {
    const a = t, o = e, n = O(null), i = O(null), c = O(), g = O({}), v = O(""), m = O(""), $ = (s) => {
      n.value[m.value] = s;
    }, T = O(), B = (s) => {
      T.value = s;
    }, N = () => {
      if (o.options && o.options.length) {
        const s = {}, f = {};
        o.options.map((y) => {
          s[y.prop] = y.value, f[y.prop] = y.rules, y.type === "editor" && (m.value = y.prop, g.value = y.editorConfig, v.value = y.value);
        }), n.value = Je(s), i.value = Je(f);
      }
    };
    r({
      resetFields: () => {
        var s;
        if ((s = c.value) == null || s.resetFields(), o.options && o.options.length) {
          const f = o.options.find((y) => y.type === "editor");
          T.value.setHtml(f == null ? void 0 : f.value);
        }
        console.log("resetFields", n.value);
      },
      validate: () => {
        var s;
        return (s = c.value) == null ? void 0 : s.validate;
      },
      getFormData: () => n.value
    }), xr(() => {
      N();
    }), Er(
      () => o.options,
      () => {
        N();
      },
      { deep: !0 }
    );
    const dr = (s) => {
      a("on-preview", s);
    }, hr = (s, f) => {
      a("on-remove", { uploadFile: s, uploadFiles: f });
    }, _r = (s, f, y) => {
      const ae = o.options.find((F) => F.type === "upload");
      n.value[ae.prop] = { response: s, uploadFile: f, uploadFiles: y }, a("on-success", { response: s, uploadFile: f, uploadFiles: y });
    }, Tr = (s, f, y) => {
      a("on-error", { error: s, uploadFile: f, uploadFiles: y });
    }, jr = (s, f, y) => {
      a("on-progress", { event: s, uploadFile: f, uploadFiles: y });
    }, Ar = (s, f) => {
      a("on-change", { uploadFile: s, uploadFiles: f });
    }, mr = (s, f) => {
      a("on-exceed", { files: s, uploadFiles: f });
    }, Cr = (s) => {
      a("before-upload", s);
    }, Or = (s, f) => {
      a("before-remove", { uploadFile: s, uploadFiles: f });
    };
    return (s, f) => {
      const y = K("el-upload"), ae = K("m-editor"), F = K("el-form-item"), Sr = K("el-form");
      return b(), V(
        k,
        null,
        [
          _(' :validate-on-rule-change="false" => 首次进入该组件时不进行表单规则验证 '),
          n.value ? (b(), A(Sr, R({
            key: 0,
            ref_key: "formRef",
            ref: c,
            "validate-on-rule-change": !1,
            model: n.value,
            rules: i.value
          }, s.$attrs), {
            default: S(() => [
              (b(!0), V(
                k,
                null,
                Ae(e.options, (p, wr) => (b(), V(
                  k,
                  { key: wr },
                  [
                    _(" item 没有 children 或者 children 为空数组时才渲染该组件 "),
                    !p.children || !p.children.length ? (b(), A(F, {
                      key: 0,
                      label: p.label,
                      prop: p.prop
                    }, {
                      default: S(() => [
                        p.type !== "upload" && p.type !== "editor" ? (b(), A(ne(`el-${p.type}`), R({
                          key: 0,
                          modelValue: n.value[p.prop],
                          "onUpdate:modelValue": (C) => n.value[p.prop] = C,
                          placeholde: p.placeholder
                        }, p.attrs), null, 16, ["modelValue", "onUpdate:modelValue", "placeholde"])) : _("v-if", !0),
                        p.type === "upload" ? (b(), A(y, R({ key: 1 }, p.uploadAttrs, {
                          "on-preview": dr,
                          "on-remove": hr,
                          "on-success": _r,
                          "on-error": Tr,
                          "on-progress": jr,
                          "on-change": Ar,
                          "on-exceed": mr,
                          "before-upload": Cr,
                          "before-remove": Or,
                          "http-request": e.httpRequest
                        }), {
                          tip: S(() => [
                            oe(s.$slots, "uploadTip")
                          ]),
                          default: S(() => [
                            oe(s.$slots, "uploadArea")
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["http-request"])) : _("v-if", !0),
                        _(" 富文本编辑器 "),
                        p.type === "editor" ? (b(), A(ae, {
                          key: 2,
                          editorConfig: g.value,
                          value: v.value,
                          onOnChange: $,
                          onGetEditor: B
                        }, null, 8, ["editorConfig", "value"])) : _("v-if", !0)
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["label", "prop"])) : _("v-if", !0),
                    p.children && p.children.length ? (b(), A(F, {
                      key: 1,
                      label: p.label,
                      prop: p.prop
                    }, {
                      default: S(() => [
                        (b(), A(ne(`el-${p.type}`), R({
                          modelValue: n.value[p.prop],
                          "onUpdate:modelValue": (C) => n.value[p.prop] = C,
                          placeholder: p.placeholder
                        }, p.attrs), {
                          default: S(() => [
                            (b(!0), V(
                              k,
                              null,
                              Ae(p.children, (C, Ir) => (b(), A(ne(`el-${C.type}`), {
                                key: Ir,
                                value: C.value,
                                label: C.label
                              }, null, 8, ["value", "label"]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1040, ["modelValue", "onUpdate:modelValue", "placeholder"]))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["label", "prop"])) : _("v-if", !0)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                128
                /* KEYED_FRAGMENT */
              )),
              Mr(F, null, {
                default: S(() => [
                  oe(s.$slots, "action", {
                    formRef: c.value,
                    model: n.value
                  })
                ]),
                _: 3
                /* FORWARDED */
              })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["model", "rules"])) : _("v-if", !0)
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      );
    };
  }
}), yu = {
  install(e) {
    e.component("m-form", fu);
  }
};
export {
  yu as default
};
