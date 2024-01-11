import { defineComponent as Mt, ref as C, watch as Oe, onMounted as Bt, computed as H, resolveComponent as O, resolveDirective as Ft, openBlock as b, createElementBlock as T, Fragment as E, createCommentVNode as $, withDirectives as Gt, createBlock as G, mergeProps as Nt, withCtx as k, createVNode as j, renderList as Ut, createElementVNode as Ie, withModifiers as xe, renderSlot as q, toDisplayString as zt, resolveDynamicComponent as Vt, normalizeStyle as Rt } from "vue";
var W = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ht() {
  this.__data__ = [], this.size = 0;
}
var qt = Ht;
function Wt(e, t) {
  return e === t || e !== e && t !== t;
}
var rt = Wt, Jt = rt;
function Yt(e, t) {
  for (var r = e.length; r--; )
    if (Jt(e[r][0], t))
      return r;
  return -1;
}
var Q = Yt, Xt = Q, Zt = Array.prototype, Qt = Zt.splice;
function er(e) {
  var t = this.__data__, r = Xt(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Qt.call(t, r, 1), --this.size, !0;
}
var tr = er, rr = Q;
function ar(e) {
  var t = this.__data__, r = rr(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var nr = ar, or = Q;
function ir(e) {
  return or(this.__data__, e) > -1;
}
var sr = ir, lr = Q;
function cr(e, t) {
  var r = this.__data__, a = lr(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
var ur = cr, vr = qt, fr = tr, gr = nr, pr = sr, dr = ur;
function L(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
L.prototype.clear = vr;
L.prototype.delete = fr;
L.prototype.get = gr;
L.prototype.has = pr;
L.prototype.set = dr;
var ee = L, yr = ee;
function br() {
  this.__data__ = new yr(), this.size = 0;
}
var $r = br;
function hr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var _r = hr;
function mr(e) {
  return this.__data__.get(e);
}
var Tr = mr;
function Cr(e) {
  return this.__data__.has(e);
}
var jr = Cr, wr = typeof W == "object" && W && W.Object === Object && W, at = wr, Ar = at, Sr = typeof self == "object" && self && self.Object === Object && self, Or = Ar || Sr || Function("return this")(), m = Or, Ir = m, xr = Ir.Symbol, pe = xr, Pe = pe, nt = Object.prototype, Pr = nt.hasOwnProperty, Er = nt.toString, N = Pe ? Pe.toStringTag : void 0;
function kr(e) {
  var t = Pr.call(e, N), r = e[N];
  try {
    e[N] = void 0;
    var a = !0;
  } catch {
  }
  var i = Er.call(e);
  return a && (t ? e[N] = r : delete e[N]), i;
}
var Lr = kr, Dr = Object.prototype, Mr = Dr.toString;
function Br(e) {
  return Mr.call(e);
}
var Fr = Br, Ee = pe, Gr = Lr, Nr = Fr, Ur = "[object Null]", zr = "[object Undefined]", ke = Ee ? Ee.toStringTag : void 0;
function Vr(e) {
  return e == null ? e === void 0 ? zr : Ur : ke && ke in Object(e) ? Gr(e) : Nr(e);
}
var te = Vr;
function Rr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var U = Rr, Kr = te, Hr = U, qr = "[object AsyncFunction]", Wr = "[object Function]", Jr = "[object GeneratorFunction]", Yr = "[object Proxy]";
function Xr(e) {
  if (!Hr(e))
    return !1;
  var t = Kr(e);
  return t == Wr || t == Jr || t == qr || t == Yr;
}
var ot = Xr, Zr = m, Qr = Zr["__core-js_shared__"], ea = Qr, se = ea, Le = function() {
  var e = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ta(e) {
  return !!Le && Le in e;
}
var ra = ta, aa = Function.prototype, na = aa.toString;
function oa(e) {
  if (e != null) {
    try {
      return na.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var it = oa, ia = ot, sa = ra, la = U, ca = it, ua = /[\\^$.*+?()[\]{}|]/g, va = /^\[object .+?Constructor\]$/, fa = Function.prototype, ga = Object.prototype, pa = fa.toString, da = ga.hasOwnProperty, ya = RegExp(
  "^" + pa.call(da).replace(ua, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ba(e) {
  if (!la(e) || sa(e))
    return !1;
  var t = ia(e) ? ya : va;
  return t.test(ca(e));
}
var $a = ba;
function ha(e, t) {
  return e == null ? void 0 : e[t];
}
var _a = ha, ma = $a, Ta = _a;
function Ca(e, t) {
  var r = Ta(e, t);
  return ma(r) ? r : void 0;
}
var x = Ca, ja = x, wa = m, Aa = ja(wa, "Map"), de = Aa, Sa = x, Oa = Sa(Object, "create"), re = Oa, De = re;
function Ia() {
  this.__data__ = De ? De(null) : {}, this.size = 0;
}
var xa = Ia;
function Pa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ea = Pa, ka = re, La = "__lodash_hash_undefined__", Da = Object.prototype, Ma = Da.hasOwnProperty;
function Ba(e) {
  var t = this.__data__;
  if (ka) {
    var r = t[e];
    return r === La ? void 0 : r;
  }
  return Ma.call(t, e) ? t[e] : void 0;
}
var Fa = Ba, Ga = re, Na = Object.prototype, Ua = Na.hasOwnProperty;
function za(e) {
  var t = this.__data__;
  return Ga ? t[e] !== void 0 : Ua.call(t, e);
}
var Va = za, Ra = re, Ka = "__lodash_hash_undefined__";
function Ha(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Ra && t === void 0 ? Ka : t, this;
}
var qa = Ha, Wa = xa, Ja = Ea, Ya = Fa, Xa = Va, Za = qa;
function D(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
D.prototype.clear = Wa;
D.prototype.delete = Ja;
D.prototype.get = Ya;
D.prototype.has = Xa;
D.prototype.set = Za;
var Qa = D, Me = Qa, en = ee, tn = de;
function rn() {
  this.size = 0, this.__data__ = {
    hash: new Me(),
    map: new (tn || en)(),
    string: new Me()
  };
}
var an = rn;
function nn(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var on = nn, sn = on;
function ln(e, t) {
  var r = e.__data__;
  return sn(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var ae = ln, cn = ae;
function un(e) {
  var t = cn(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var vn = un, fn = ae;
function gn(e) {
  return fn(this, e).get(e);
}
var pn = gn, dn = ae;
function yn(e) {
  return dn(this, e).has(e);
}
var bn = yn, $n = ae;
function hn(e, t) {
  var r = $n(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
var _n = hn, mn = an, Tn = vn, Cn = pn, jn = bn, wn = _n;
function M(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
M.prototype.clear = mn;
M.prototype.delete = Tn;
M.prototype.get = Cn;
M.prototype.has = jn;
M.prototype.set = wn;
var An = M, Sn = ee, On = de, In = An, xn = 200;
function Pn(e, t) {
  var r = this.__data__;
  if (r instanceof Sn) {
    var a = r.__data__;
    if (!On || a.length < xn - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new In(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
var En = Pn, kn = ee, Ln = $r, Dn = _r, Mn = Tr, Bn = jr, Fn = En;
function B(e) {
  var t = this.__data__ = new kn(e);
  this.size = t.size;
}
B.prototype.clear = Ln;
B.prototype.delete = Dn;
B.prototype.get = Mn;
B.prototype.has = Bn;
B.prototype.set = Fn;
var Gn = B;
function Nn(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Un = Nn, zn = x, Vn = function() {
  try {
    var e = zn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Rn = Vn, Be = Rn;
function Kn(e, t, r) {
  t == "__proto__" && Be ? Be(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var st = Kn, Hn = st, qn = rt, Wn = Object.prototype, Jn = Wn.hasOwnProperty;
function Yn(e, t, r) {
  var a = e[t];
  (!(Jn.call(e, t) && qn(a, r)) || r === void 0 && !(t in e)) && Hn(e, t, r);
}
var lt = Yn, Xn = lt, Zn = st;
function Qn(e, t, r, a) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var l = t[s], g = a ? a(r[l], e[l], l, r, e) : void 0;
    g === void 0 && (g = e[l]), i ? Zn(r, l, g) : Xn(r, l, g);
  }
  return r;
}
var ne = Qn;
function eo(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var to = eo;
function ro(e) {
  return e != null && typeof e == "object";
}
var z = ro, ao = te, no = z, oo = "[object Arguments]";
function io(e) {
  return no(e) && ao(e) == oo;
}
var so = io, Fe = so, lo = z, ct = Object.prototype, co = ct.hasOwnProperty, uo = ct.propertyIsEnumerable, vo = Fe(/* @__PURE__ */ function() {
  return arguments;
}()) ? Fe : function(e) {
  return lo(e) && co.call(e, "callee") && !uo.call(e, "callee");
}, fo = vo, go = Array.isArray, ye = go, Y = { exports: {} };
function po() {
  return !1;
}
var yo = po;
Y.exports;
(function(e, t) {
  var r = m, a = yo, i = t && !t.nodeType && t, s = i && !0 && e && !e.nodeType && e, o = s && s.exports === i, l = o ? r.Buffer : void 0, g = l ? l.isBuffer : void 0, p = g || a;
  e.exports = p;
})(Y, Y.exports);
var ut = Y.exports, bo = 9007199254740991, $o = /^(?:0|[1-9]\d*)$/;
function ho(e, t) {
  var r = typeof e;
  return t = t ?? bo, !!t && (r == "number" || r != "symbol" && $o.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var _o = ho, mo = 9007199254740991;
function To(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mo;
}
var vt = To, Co = te, jo = vt, wo = z, Ao = "[object Arguments]", So = "[object Array]", Oo = "[object Boolean]", Io = "[object Date]", xo = "[object Error]", Po = "[object Function]", Eo = "[object Map]", ko = "[object Number]", Lo = "[object Object]", Do = "[object RegExp]", Mo = "[object Set]", Bo = "[object String]", Fo = "[object WeakMap]", Go = "[object ArrayBuffer]", No = "[object DataView]", Uo = "[object Float32Array]", zo = "[object Float64Array]", Vo = "[object Int8Array]", Ro = "[object Int16Array]", Ko = "[object Int32Array]", Ho = "[object Uint8Array]", qo = "[object Uint8ClampedArray]", Wo = "[object Uint16Array]", Jo = "[object Uint32Array]", u = {};
u[Uo] = u[zo] = u[Vo] = u[Ro] = u[Ko] = u[Ho] = u[qo] = u[Wo] = u[Jo] = !0;
u[Ao] = u[So] = u[Go] = u[Oo] = u[No] = u[Io] = u[xo] = u[Po] = u[Eo] = u[ko] = u[Lo] = u[Do] = u[Mo] = u[Bo] = u[Fo] = !1;
function Yo(e) {
  return wo(e) && jo(e.length) && !!u[Co(e)];
}
var Xo = Yo;
function Zo(e) {
  return function(t) {
    return e(t);
  };
}
var be = Zo, X = { exports: {} };
X.exports;
(function(e, t) {
  var r = at, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s && r.process, l = function() {
    try {
      var g = i && i.require && i.require("util").types;
      return g || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = l;
})(X, X.exports);
var $e = X.exports, Qo = Xo, ei = be, Ge = $e, Ne = Ge && Ge.isTypedArray, ti = Ne ? ei(Ne) : Qo, ri = ti, ai = to, ni = fo, oi = ye, ii = ut, si = _o, li = ri, ci = Object.prototype, ui = ci.hasOwnProperty;
function vi(e, t) {
  var r = oi(e), a = !r && ni(e), i = !r && !a && ii(e), s = !r && !a && !i && li(e), o = r || a || i || s, l = o ? ai(e.length, String) : [], g = l.length;
  for (var p in e)
    (t || ui.call(e, p)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (p == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (p == "offset" || p == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (p == "buffer" || p == "byteLength" || p == "byteOffset") || // Skip index properties.
    si(p, g))) && l.push(p);
  return l;
}
var ft = vi, fi = Object.prototype;
function gi(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || fi;
  return e === r;
}
var he = gi;
function pi(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var gt = pi, di = gt, yi = di(Object.keys, Object), bi = yi, $i = he, hi = bi, _i = Object.prototype, mi = _i.hasOwnProperty;
function Ti(e) {
  if (!$i(e))
    return hi(e);
  var t = [];
  for (var r in Object(e))
    mi.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var Ci = Ti, ji = ot, wi = vt;
function Ai(e) {
  return e != null && wi(e.length) && !ji(e);
}
var pt = Ai, Si = ft, Oi = Ci, Ii = pt;
function xi(e) {
  return Ii(e) ? Si(e) : Oi(e);
}
var _e = xi, Pi = ne, Ei = _e;
function ki(e, t) {
  return e && Pi(t, Ei(t), e);
}
var Li = ki;
function Di(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Mi = Di, Bi = U, Fi = he, Gi = Mi, Ni = Object.prototype, Ui = Ni.hasOwnProperty;
function zi(e) {
  if (!Bi(e))
    return Gi(e);
  var t = Fi(e), r = [];
  for (var a in e)
    a == "constructor" && (t || !Ui.call(e, a)) || r.push(a);
  return r;
}
var Vi = zi, Ri = ft, Ki = Vi, Hi = pt;
function qi(e) {
  return Hi(e) ? Ri(e, !0) : Ki(e);
}
var me = qi, Wi = ne, Ji = me;
function Yi(e, t) {
  return e && Wi(t, Ji(t), e);
}
var Xi = Yi, Z = { exports: {} };
Z.exports;
(function(e, t) {
  var r = m, a = t && !t.nodeType && t, i = a && !0 && e && !e.nodeType && e, s = i && i.exports === a, o = s ? r.Buffer : void 0, l = o ? o.allocUnsafe : void 0;
  function g(p, w) {
    if (w)
      return p.slice();
    var d = p.length, A = l ? l(d) : new p.constructor(d);
    return p.copy(A), A;
  }
  e.exports = g;
})(Z, Z.exports);
var Zi = Z.exports;
function Qi(e, t) {
  var r = -1, a = e.length;
  for (t || (t = Array(a)); ++r < a; )
    t[r] = e[r];
  return t;
}
var es = Qi;
function ts(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, i = 0, s = []; ++r < a; ) {
    var o = e[r];
    t(o, r, e) && (s[i++] = o);
  }
  return s;
}
var rs = ts;
function as() {
  return [];
}
var dt = as, ns = rs, os = dt, is = Object.prototype, ss = is.propertyIsEnumerable, Ue = Object.getOwnPropertySymbols, ls = Ue ? function(e) {
  return e == null ? [] : (e = Object(e), ns(Ue(e), function(t) {
    return ss.call(e, t);
  }));
} : os, Te = ls, cs = ne, us = Te;
function vs(e, t) {
  return cs(e, us(e), t);
}
var fs = vs;
function gs(e, t) {
  for (var r = -1, a = t.length, i = e.length; ++r < a; )
    e[i + r] = t[r];
  return e;
}
var yt = gs, ps = gt, ds = ps(Object.getPrototypeOf, Object), bt = ds, ys = yt, bs = bt, $s = Te, hs = dt, _s = Object.getOwnPropertySymbols, ms = _s ? function(e) {
  for (var t = []; e; )
    ys(t, $s(e)), e = bs(e);
  return t;
} : hs, $t = ms, Ts = ne, Cs = $t;
function js(e, t) {
  return Ts(e, Cs(e), t);
}
var ws = js, As = yt, Ss = ye;
function Os(e, t, r) {
  var a = t(e);
  return Ss(e) ? a : As(a, r(e));
}
var ht = Os, Is = ht, xs = Te, Ps = _e;
function Es(e) {
  return Is(e, Ps, xs);
}
var ks = Es, Ls = ht, Ds = $t, Ms = me;
function Bs(e) {
  return Ls(e, Ms, Ds);
}
var Fs = Bs, Gs = x, Ns = m, Us = Gs(Ns, "DataView"), zs = Us, Vs = x, Rs = m, Ks = Vs(Rs, "Promise"), Hs = Ks, qs = x, Ws = m, Js = qs(Ws, "Set"), Ys = Js, Xs = x, Zs = m, Qs = Xs(Zs, "WeakMap"), el = Qs, ce = zs, ue = de, ve = Hs, fe = Ys, ge = el, _t = te, F = it, ze = "[object Map]", tl = "[object Object]", Ve = "[object Promise]", Re = "[object Set]", Ke = "[object WeakMap]", He = "[object DataView]", rl = F(ce), al = F(ue), nl = F(ve), ol = F(fe), il = F(ge), I = _t;
(ce && I(new ce(new ArrayBuffer(1))) != He || ue && I(new ue()) != ze || ve && I(ve.resolve()) != Ve || fe && I(new fe()) != Re || ge && I(new ge()) != Ke) && (I = function(e) {
  var t = _t(e), r = t == tl ? e.constructor : void 0, a = r ? F(r) : "";
  if (a)
    switch (a) {
      case rl:
        return He;
      case al:
        return ze;
      case nl:
        return Ve;
      case ol:
        return Re;
      case il:
        return Ke;
    }
  return t;
});
var Ce = I, sl = Object.prototype, ll = sl.hasOwnProperty;
function cl(e) {
  var t = e.length, r = new e.constructor(t);
  return t && typeof e[0] == "string" && ll.call(e, "index") && (r.index = e.index, r.input = e.input), r;
}
var ul = cl, vl = m, fl = vl.Uint8Array, gl = fl, qe = gl;
function pl(e) {
  var t = new e.constructor(e.byteLength);
  return new qe(t).set(new qe(e)), t;
}
var je = pl, dl = je;
function yl(e, t) {
  var r = t ? dl(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.byteLength);
}
var bl = yl, $l = /\w*$/;
function hl(e) {
  var t = new e.constructor(e.source, $l.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var _l = hl, We = pe, Je = We ? We.prototype : void 0, Ye = Je ? Je.valueOf : void 0;
function ml(e) {
  return Ye ? Object(Ye.call(e)) : {};
}
var Tl = ml, Cl = je;
function jl(e, t) {
  var r = t ? Cl(e.buffer) : e.buffer;
  return new e.constructor(r, e.byteOffset, e.length);
}
var wl = jl, Al = je, Sl = bl, Ol = _l, Il = Tl, xl = wl, Pl = "[object Boolean]", El = "[object Date]", kl = "[object Map]", Ll = "[object Number]", Dl = "[object RegExp]", Ml = "[object Set]", Bl = "[object String]", Fl = "[object Symbol]", Gl = "[object ArrayBuffer]", Nl = "[object DataView]", Ul = "[object Float32Array]", zl = "[object Float64Array]", Vl = "[object Int8Array]", Rl = "[object Int16Array]", Kl = "[object Int32Array]", Hl = "[object Uint8Array]", ql = "[object Uint8ClampedArray]", Wl = "[object Uint16Array]", Jl = "[object Uint32Array]";
function Yl(e, t, r) {
  var a = e.constructor;
  switch (t) {
    case Gl:
      return Al(e);
    case Pl:
    case El:
      return new a(+e);
    case Nl:
      return Sl(e, r);
    case Ul:
    case zl:
    case Vl:
    case Rl:
    case Kl:
    case Hl:
    case ql:
    case Wl:
    case Jl:
      return xl(e, r);
    case kl:
      return new a();
    case Ll:
    case Bl:
      return new a(e);
    case Dl:
      return Ol(e);
    case Ml:
      return new a();
    case Fl:
      return Il(e);
  }
}
var Xl = Yl, Zl = U, Xe = Object.create, Ql = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Zl(t))
      return {};
    if (Xe)
      return Xe(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}(), ec = Ql, tc = ec, rc = bt, ac = he;
function nc(e) {
  return typeof e.constructor == "function" && !ac(e) ? tc(rc(e)) : {};
}
var oc = nc, ic = Ce, sc = z, lc = "[object Map]";
function cc(e) {
  return sc(e) && ic(e) == lc;
}
var uc = cc, vc = uc, fc = be, Ze = $e, Qe = Ze && Ze.isMap, gc = Qe ? fc(Qe) : vc, pc = gc, dc = Ce, yc = z, bc = "[object Set]";
function $c(e) {
  return yc(e) && dc(e) == bc;
}
var hc = $c, _c = hc, mc = be, et = $e, tt = et && et.isSet, Tc = tt ? mc(tt) : _c, Cc = Tc, jc = Gn, wc = Un, Ac = lt, Sc = Li, Oc = Xi, Ic = Zi, xc = es, Pc = fs, Ec = ws, kc = ks, Lc = Fs, Dc = Ce, Mc = ul, Bc = Xl, Fc = oc, Gc = ye, Nc = ut, Uc = pc, zc = U, Vc = Cc, Rc = _e, Kc = me, Hc = 1, qc = 2, Wc = 4, mt = "[object Arguments]", Jc = "[object Array]", Yc = "[object Boolean]", Xc = "[object Date]", Zc = "[object Error]", Tt = "[object Function]", Qc = "[object GeneratorFunction]", eu = "[object Map]", tu = "[object Number]", Ct = "[object Object]", ru = "[object RegExp]", au = "[object Set]", nu = "[object String]", ou = "[object Symbol]", iu = "[object WeakMap]", su = "[object ArrayBuffer]", lu = "[object DataView]", cu = "[object Float32Array]", uu = "[object Float64Array]", vu = "[object Int8Array]", fu = "[object Int16Array]", gu = "[object Int32Array]", pu = "[object Uint8Array]", du = "[object Uint8ClampedArray]", yu = "[object Uint16Array]", bu = "[object Uint32Array]", c = {};
c[mt] = c[Jc] = c[su] = c[lu] = c[Yc] = c[Xc] = c[cu] = c[uu] = c[vu] = c[fu] = c[gu] = c[eu] = c[tu] = c[Ct] = c[ru] = c[au] = c[nu] = c[ou] = c[pu] = c[du] = c[yu] = c[bu] = !0;
c[Zc] = c[Tt] = c[iu] = !1;
function J(e, t, r, a, i, s) {
  var o, l = t & Hc, g = t & qc, p = t & Wc;
  if (r && (o = i ? r(e, a, i, s) : r(e)), o !== void 0)
    return o;
  if (!zc(e))
    return e;
  var w = Gc(e);
  if (w) {
    if (o = Mc(e), !l)
      return xc(e, o);
  } else {
    var d = Dc(e), A = d == Tt || d == Qc;
    if (Nc(e))
      return Ic(e, l);
    if (d == Ct || d == mt || A && !i) {
      if (o = g || A ? {} : Fc(e), !l)
        return g ? Ec(e, Oc(o, e)) : Pc(e, Sc(o, e));
    } else {
      if (!c[d])
        return i ? e : {};
      o = Bc(e, d, l);
    }
  }
  s || (s = new jc());
  var V = s.get(e);
  if (V)
    return V;
  s.set(e, o), Vc(e) ? e.forEach(function(h) {
    o.add(J(h, t, r, h, e, s));
  }) : Uc(e) && e.forEach(function(h, _) {
    o.set(_, J(h, t, r, _, e, s));
  });
  var oe = p ? g ? Lc : kc : g ? Kc : Rc, R = w ? void 0 : oe(e);
  return wc(R || e, function(h, _) {
    R && (_ = h, h = e[_]), Ac(o, _, J(h, t, r, _, e, s));
  }), o;
}
var $u = J, hu = $u, _u = 1, mu = 4;
function Tu(e) {
  return hu(e, _u | mu);
}
var Cu = Tu;
const le = /* @__PURE__ */ Kt(Cu), ju = {
  key: 0,
  style: { display: "flex" }
}, wu = ["onClick"], Au = {
  key: 1,
  class: "icons"
}, Su = /* @__PURE__ */ Mt({
  __name: "index",
  props: {
    // 表格的配置
    options: {
      type: Array,
      requried: !0
    },
    // 表格数据
    data: {
      type: Array,
      required: !0
    },
    // 显示在加载图标下方的加载文案
    elementLoadingText: {
      type: String
    },
    // 自定义加载图标
    elementLoadingSpinner: {
      type: String
    },
    // 自定义 svg 加载图标 (与 element-loading-spinner 相同)
    elementLoadingSvg: {
      type: String
    },
    // 加载 svg 图标的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 背景遮罩的颜色
    elementLoadingBackground: {
      type: String
    },
    // 可编辑单元格显示的图标
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
    // 当前是第几页的数据
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页数据条数的选择
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    // 每页的数据条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 总数据条数
    total: {
      type: Number
    },
    // 分页的排列方式
    paginationAlign: {
      type: String,
      default: "left"
    }
  },
  emits: [
    "confirm",
    "cancel",
    "update:editRowIndex",
    "sizeChange",
    "currentChange"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = e, i = r, s = C(""), o = C(le(a.data)), l = C(a.editRowIndex);
    let g = C(!1);
    const p = Oe(
      () => a.data,
      (n) => {
        g.value = !0, o.value = n, o.value.map((v) => {
          v.rowEdit = !1;
        }), g.value && p();
      },
      { deep: !0 }
    );
    Oe(
      () => a.editRowIndex,
      (n) => {
        n && (l.value = n);
      }
    ), Bt(() => {
      o.value.map((n) => {
        n.rowEdit = !1;
      });
    });
    const w = C(""), d = C({}), A = (n, v) => {
      s.value = n.$index + n.column.id, d.value = le(n.row), w.value = v;
    }, V = (n) => {
      s.value = "", console.log(n, d.value);
    }, oe = (n) => {
      i("confirm", n);
    }, R = (n) => {
      const v = w.value;
      n.row[v] = d.value[v], i("cancel", n);
    }, h = (n, v) => {
      (v == null ? void 0 : v.label) === K.value.label && a.isEditRow && l.value === a.editRowIndex && (n.rowEdit = !n.rowEdit, d.value = le(n), o.value.map((P) => {
        P !== n && (P.rowEdit = !1);
      }), n.rowEdit || i("update:editRowIndex", ""));
    }, _ = C(a.currentPage), we = C(a.pageSize), jt = (n) => {
      i("sizeChange", n);
    }, wt = (n) => {
      i("currentChange", n);
    }, At = H(() => a.options.filter((n) => !n.action)), K = H(() => {
      var n;
      return (n = a.options) == null ? void 0 : n.find((v) => v.action);
    }), Ae = H(() => !a.data || !a.data.length), St = H(() => a.paginationAlign === "left" ? "flex-start" : a.paginationAlign === "center" ? "center" : "flex-end"), Ot = (n, v) => {
      console.log(n, v);
    }, It = (n) => {
      console.log(n);
    };
    return t({
      cancelClick: (n) => {
        for (const v in n.row)
          n.row[v] = d.value[v];
        console.log("cancelClick", n.row);
      }
    }), (n, v) => {
      const P = O("el-table-column"), Se = O("el-input"), xt = O("Check"), ie = O("el-icon"), Pt = O("Close"), Et = O("el-table"), kt = O("el-pagination"), Lt = Ft("loading");
      return b(), T(
        E,
        null,
        [
          $(" https://cn.vuejs.org/api/component-instance.html#attrs "),
          $(" $attrs：一个包含了组件所有透传 attributes 的对象(不包含 defineProps 中接收的属性) "),
          $(' v-bind="$attrs" 表示将父组件传递的所有属性作为当前组件的属性 '),
          Gt((b(), G(Et, Nt({
            data: o.value,
            "element-loading-text": e.elementLoadingText,
            "element-loading-background": e.elementLoadingBackground,
            "element-loading-svg": e.elementLoadingSvg,
            "element-loading-spinner": e.elementLoadingSpinner,
            "element-loading-svg-view-box": e.elementLoadingSvgViewBox,
            onRowClick: h
          }, n.$attrs, {
            highlightCurrentRow: "",
            onCurrentChange: Ot,
            onSelectionChange: It
          }), {
            default: k(() => [
              j(P, {
                type: "selection",
                width: 55
              }),
              (b(!0), T(
                E,
                null,
                Ut(At.value, (f, Dt) => (b(), G(P, {
                  key: Dt,
                  label: f.label,
                  prop: f.prop,
                  align: f.align,
                  width: f.width,
                  sortable: f.sortable
                }, {
                  default: k((y) => [
                    y.row.rowEdit ? (b(), G(Se, {
                      key: 0,
                      size: "small",
                      modelValue: y.row[f.prop],
                      "onUpdate:modelValue": (S) => y.row[f.prop] = S
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (b(), T(
                      E,
                      { key: 1 },
                      [
                        $(" 编辑状态 "),
                        y.$index + y.column.id === s.value ? (b(), T("div", ju, [
                          j(Se, {
                            size: "small",
                            modelValue: y.row[f.prop],
                            "onUpdate:modelValue": (S) => y.row[f.prop] = S
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          Ie("div", {
                            class: "edit-cell",
                            onClick: xe((S) => V(y), ["stop"])
                          }, [
                            $(` 
                  $slots.slotName：如果父组件有向插槽名为 slotName 的插槽传入内容，那么 $slots.slotName 是有值的
                    反之，则 $slots 对象中没有随影 slotName 属性
                `),
                            n.$slots.editCell ? q(n.$slots, "editCell", {
                              key: 0,
                              scope: y
                            }, void 0, !0) : (b(), T("div", Au, [
                              j(ie, {
                                class: "icon check",
                                onClick: (S) => oe(y)
                              }, {
                                default: k(() => [
                                  j(xt)
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onClick"]),
                              j(ie, {
                                class: "icon close",
                                onClick: (S) => R(y)
                              }, {
                                default: k(() => [
                                  j(Pt)
                                ]),
                                _: 2
                                /* DYNAMIC */
                              }, 1032, ["onClick"])
                            ]))
                          ], 8, wu)
                        ])) : (b(), T(
                          E,
                          { key: 1 },
                          [
                            $(" 原有状态 "),
                            $(" 需要自定义内容时 "),
                            f.slot ? q(n.$slots, f.slot, {
                              key: 0,
                              scope: y
                            }, void 0, !0) : (b(), T(
                              E,
                              { key: 1 },
                              [
                                $(" 不需要自定义内容时 "),
                                Ie(
                                  "span",
                                  null,
                                  zt(y.row[f.prop]),
                                  1
                                  /* TEXT */
                                )
                              ],
                              2112
                              /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                            )),
                            $(" @click.stop 停止点击事件的冒泡 "),
                            f.editable ? (b(), G(ie, {
                              key: 2,
                              class: "edit",
                              onClick: xe((S) => A(y, f.prop), ["stop"])
                            }, {
                              default: k(() => [
                                (b(), G(Vt(e.editIcon)))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["onClick"])) : $("v-if", !0)
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["label", "prop", "align", "width", "sortable"]))),
                128
                /* KEYED_FRAGMENT */
              )),
              j(P, {
                label: K.value.label,
                align: K.value.align,
                width: K.value.width
              }, {
                default: k((f) => [
                  f.row.rowEdit ? q(n.$slots, "editRow", {
                    key: 0,
                    scope: f
                  }, void 0, !0) : (b(), T(
                    E,
                    { key: 1 },
                    [
                      $(" 自定义的作用域插槽 "),
                      q(n.$slots, "action", { scope: f }, void 0, !0)
                    ],
                    2112
                    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                  ))
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["label", "align", "width"])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data", "element-loading-text", "element-loading-background", "element-loading-svg", "element-loading-spinner", "element-loading-svg-view-box"])), [
            [Lt, Ae.value]
          ]),
          e.pagination && !Ae.value ? (b(), T(
            "div",
            {
              key: 0,
              class: "pagination",
              style: Rt({ justifyContent: St.value })
            },
            [
              j(kt, {
                "current-page": _.value,
                "onUpdate:currentPage": v[0] || (v[0] = (f) => _.value = f),
                "page-size": we.value,
                "onUpdate:pageSize": v[1] || (v[1] = (f) => we.value = f),
                "page-sizes": e.pageSizes,
                layout: "total, sizes, prev, pager, next, jumper",
                total: e.total,
                onSizeChange: jt,
                onCurrentChange: wt
              }, null, 8, ["current-page", "page-size", "page-sizes", "total"])
            ],
            4
            /* STYLE */
          )) : $("v-if", !0)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), Ou = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, i] of t)
    r[a] = i;
  return r;
}, Iu = /* @__PURE__ */ Ou(Su, [["__scopeId", "data-v-f70d6a96"]]), Eu = {
  install(e) {
    e.component("m-table", Iu);
  }
};
export {
  Eu as default
};
