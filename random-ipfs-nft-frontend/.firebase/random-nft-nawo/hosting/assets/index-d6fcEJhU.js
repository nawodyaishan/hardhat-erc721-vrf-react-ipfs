import {
  r as a,
  a as mt,
  c as Ls,
  s as cr,
  i as Vs,
  h as sn,
  b as js,
  p as Us,
  d as Gs,
  u as Hs,
  e as Fr,
  f as Lr,
  $ as ge,
  g as Ws,
  j as zs,
  k as Bs,
  C as Ks,
  l as Ys,
  _ as Ae,
  m as Vr,
  n as Xs,
  Q as qs,
  W as Zs,
  o as Qs,
  q as Js,
} from './lodash-DnZiozLM.js';
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var jr = { exports: {} },
  yn = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  var e = a,
    t = Symbol.for('react.element'),
    n = Symbol.for('react.portal'),
    r = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    s = Symbol.for('react.profiler'),
    i = Symbol.for('react.provider'),
    c = Symbol.for('react.context'),
    u = Symbol.for('react.forward_ref'),
    l = Symbol.for('react.suspense'),
    m = Symbol.for('react.suspense_list'),
    d = Symbol.for('react.memo'),
    h = Symbol.for('react.lazy'),
    b = Symbol.for('react.offscreen'),
    g = Symbol.iterator,
    p = '@@iterator';
  function v(f) {
    if (f === null || typeof f != 'object') return null;
    var E = (g && f[g]) || f[p];
    return typeof E == 'function' ? E : null;
  }
  var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function y(f) {
    {
      for (
        var E = arguments.length, R = new Array(E > 1 ? E - 1 : 0), k = 1;
        k < E;
        k++
      )
        R[k - 1] = arguments[k];
      x('error', f, R);
    }
  }
  function x(f, E, R) {
    {
      var k = w.ReactDebugCurrentFrame,
        B = k.getStackAddendum();
      B !== '' && ((E += '%s'), (R = R.concat([B])));
      var q = R.map(function (G) {
        return String(G);
      });
      q.unshift('Warning: ' + E),
        Function.prototype.apply.call(console[f], console, q);
    }
  }
  var $ = !1,
    T = !1,
    _ = !1,
    S = !1,
    A = !1,
    I;
  I = Symbol.for('react.module.reference');
  function H(f) {
    return !!(
      typeof f == 'string' ||
      typeof f == 'function' ||
      f === r ||
      f === s ||
      A ||
      f === o ||
      f === l ||
      f === m ||
      S ||
      f === b ||
      $ ||
      T ||
      _ ||
      (typeof f == 'object' &&
        f !== null &&
        (f.$$typeof === h ||
          f.$$typeof === d ||
          f.$$typeof === i ||
          f.$$typeof === c ||
          f.$$typeof === u ||
          f.$$typeof === I ||
          f.getModuleId !== void 0))
    );
  }
  function z(f, E, R) {
    var k = f.displayName;
    if (k) return k;
    var B = E.displayName || E.name || '';
    return B !== '' ? R + '(' + B + ')' : R;
  }
  function D(f) {
    return f.displayName || 'Context';
  }
  function W(f) {
    if (f == null) return null;
    if (
      (typeof f.tag == 'number' &&
        y(
          'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
        ),
      typeof f == 'function')
    )
      return f.displayName || f.name || null;
    if (typeof f == 'string') return f;
    switch (f) {
      case r:
        return 'Fragment';
      case n:
        return 'Portal';
      case s:
        return 'Profiler';
      case o:
        return 'StrictMode';
      case l:
        return 'Suspense';
      case m:
        return 'SuspenseList';
    }
    if (typeof f == 'object')
      switch (f.$$typeof) {
        case c:
          var E = f;
          return D(E) + '.Consumer';
        case i:
          var R = f;
          return D(R._context) + '.Provider';
        case u:
          return z(f, f.render, 'ForwardRef');
        case d:
          var k = f.displayName || null;
          return k !== null ? k : W(f.type) || 'Memo';
        case h: {
          var B = f,
            q = B._payload,
            G = B._init;
          try {
            return W(G(q));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var N = Object.assign,
    O = 0,
    U,
    L,
    K,
    P,
    Y,
    X,
    J;
  function oe() {}
  oe.__reactDisabledLog = !0;
  function he() {
    {
      if (O === 0) {
        (U = console.log),
          (L = console.info),
          (K = console.warn),
          (P = console.error),
          (Y = console.group),
          (X = console.groupCollapsed),
          (J = console.groupEnd);
        var f = { configurable: !0, enumerable: !0, value: oe, writable: !0 };
        Object.defineProperties(console, {
          info: f,
          log: f,
          warn: f,
          error: f,
          group: f,
          groupCollapsed: f,
          groupEnd: f,
        });
      }
      O++;
    }
  }
  function we() {
    {
      if ((O--, O === 0)) {
        var f = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: N({}, f, { value: U }),
          info: N({}, f, { value: L }),
          warn: N({}, f, { value: K }),
          error: N({}, f, { value: P }),
          group: N({}, f, { value: Y }),
          groupCollapsed: N({}, f, { value: X }),
          groupEnd: N({}, f, { value: J }),
        });
      }
      O < 0 &&
        y(
          'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
        );
    }
  }
  var ae = w.ReactCurrentDispatcher,
    de;
  function xe(f, E, R) {
    {
      if (de === void 0)
        try {
          throw Error();
        } catch (B) {
          var k = B.stack.trim().match(/\n( *(at )?)/);
          de = (k && k[1]) || '';
        }
      return (
        `
` +
        de +
        f
      );
    }
  }
  var re = !1,
    $e;
  {
    var qt = typeof WeakMap == 'function' ? WeakMap : Map;
    $e = new qt();
  }
  function ht(f, E) {
    if (!f || re) return '';
    {
      var R = $e.get(f);
      if (R !== void 0) return R;
    }
    var k;
    re = !0;
    var B = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var q;
    (q = ae.current), (ae.current = null), he();
    try {
      if (E) {
        var G = function () {
          throw Error();
        };
        if (
          (Object.defineProperty(G.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(G, []);
          } catch (Ee) {
            k = Ee;
          }
          Reflect.construct(f, [], G);
        } else {
          try {
            G.call();
          } catch (Ee) {
            k = Ee;
          }
          f.call(G.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (Ee) {
          k = Ee;
        }
        f();
      }
    } catch (Ee) {
      if (Ee && k && typeof Ee.stack == 'string') {
        for (
          var j = Ee.stack.split(`
`),
            ie = k.stack.split(`
`),
            ee = j.length - 1,
            te = ie.length - 1;
          ee >= 1 && te >= 0 && j[ee] !== ie[te];

        )
          te--;
        for (; ee >= 1 && te >= 0; ee--, te--)
          if (j[ee] !== ie[te]) {
            if (ee !== 1 || te !== 1)
              do
                if ((ee--, te--, te < 0 || j[ee] !== ie[te])) {
                  var fe =
                    `
` + j[ee].replace(' at new ', ' at ');
                  return (
                    f.displayName &&
                      fe.includes('<anonymous>') &&
                      (fe = fe.replace('<anonymous>', f.displayName)),
                    typeof f == 'function' && $e.set(f, fe),
                    fe
                  );
                }
              while (ee >= 1 && te >= 0);
            break;
          }
      }
    } finally {
      (re = !1), (ae.current = q), we(), (Error.prepareStackTrace = B);
    }
    var ze = f ? f.displayName || f.name : '',
      ir = ze ? xe(ze) : '';
    return typeof f == 'function' && $e.set(f, ir), ir;
  }
  function Zt(f, E, R) {
    return ht(f, !1);
  }
  function Qt(f) {
    var E = f.prototype;
    return !!(E && E.isReactComponent);
  }
  function ve(f, E, R) {
    if (f == null) return '';
    if (typeof f == 'function') return ht(f, Qt(f));
    if (typeof f == 'string') return xe(f);
    switch (f) {
      case l:
        return xe('Suspense');
      case m:
        return xe('SuspenseList');
    }
    if (typeof f == 'object')
      switch (f.$$typeof) {
        case u:
          return Zt(f.render);
        case d:
          return ve(f.type, E, R);
        case h: {
          var k = f,
            B = k._payload,
            q = k._init;
          try {
            return ve(q(B), E, R);
          } catch {}
        }
      }
    return '';
  }
  var Ie = Object.prototype.hasOwnProperty,
    vt = {},
    gt = w.ReactDebugCurrentFrame;
  function Ge(f) {
    if (f) {
      var E = f._owner,
        R = ve(f.type, f._source, E ? E.type : null);
      gt.setExtraStackFrame(R);
    } else gt.setExtraStackFrame(null);
  }
  function Jt(f, E, R, k, B) {
    {
      var q = Function.call.bind(Ie);
      for (var G in f)
        if (q(f, G)) {
          var j = void 0;
          try {
            if (typeof f[G] != 'function') {
              var ie = Error(
                (k || 'React class') +
                  ': ' +
                  R +
                  ' type `' +
                  G +
                  '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                  typeof f[G] +
                  '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
              );
              throw ((ie.name = 'Invariant Violation'), ie);
            }
            j = f[G](
              E,
              G,
              k,
              R,
              null,
              'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
            );
          } catch (ee) {
            j = ee;
          }
          j &&
            !(j instanceof Error) &&
            (Ge(B),
            y(
              '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
              k || 'React class',
              R,
              G,
              typeof j,
            ),
            Ge(null)),
            j instanceof Error &&
              !(j.message in vt) &&
              ((vt[j.message] = !0),
              Ge(B),
              y('Failed %s type: %s', R, j.message),
              Ge(null));
        }
    }
  }
  var He = Array.isArray;
  function en(f) {
    return He(f);
  }
  function $s(f) {
    {
      var E = typeof Symbol == 'function' && Symbol.toStringTag,
        R = (E && f[Symbol.toStringTag]) || f.constructor.name || 'Object';
      return R;
    }
  }
  function Es(f) {
    try {
      return Qn(f), !1;
    } catch {
      return !0;
    }
  }
  function Qn(f) {
    return '' + f;
  }
  function Jn(f) {
    if (Es(f))
      return (
        y(
          'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
          $s(f),
        ),
        Qn(f)
      );
  }
  var st = w.ReactCurrentOwner,
    Cs = { key: !0, ref: !0, __self: !0, __source: !0 },
    er,
    tr,
    tn;
  tn = {};
  function Ts(f) {
    if (Ie.call(f, 'ref')) {
      var E = Object.getOwnPropertyDescriptor(f, 'ref').get;
      if (E && E.isReactWarning) return !1;
    }
    return f.ref !== void 0;
  }
  function Ns(f) {
    if (Ie.call(f, 'key')) {
      var E = Object.getOwnPropertyDescriptor(f, 'key').get;
      if (E && E.isReactWarning) return !1;
    }
    return f.key !== void 0;
  }
  function Rs(f, E) {
    if (
      typeof f.ref == 'string' &&
      st.current &&
      E &&
      st.current.stateNode !== E
    ) {
      var R = W(st.current.type);
      tn[R] ||
        (y(
          'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
          W(st.current.type),
          f.ref,
        ),
        (tn[R] = !0));
    }
  }
  function Ss(f, E) {
    {
      var R = function () {
        er ||
          ((er = !0),
          y(
            '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            E,
          ));
      };
      (R.isReactWarning = !0),
        Object.defineProperty(f, 'key', { get: R, configurable: !0 });
    }
  }
  function Ds(f, E) {
    {
      var R = function () {
        tr ||
          ((tr = !0),
          y(
            '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
            E,
          ));
      };
      (R.isReactWarning = !0),
        Object.defineProperty(f, 'ref', { get: R, configurable: !0 });
    }
  }
  var Ps = function (f, E, R, k, B, q, G) {
    var j = { $$typeof: t, type: f, key: E, ref: R, props: G, _owner: q };
    return (
      (j._store = {}),
      Object.defineProperty(j._store, 'validated', {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1,
      }),
      Object.defineProperty(j, '_self', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k,
      }),
      Object.defineProperty(j, '_source', {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B,
      }),
      Object.freeze && (Object.freeze(j.props), Object.freeze(j)),
      j
    );
  };
  function _s(f, E, R, k, B) {
    {
      var q,
        G = {},
        j = null,
        ie = null;
      R !== void 0 && (Jn(R), (j = '' + R)),
        Ns(E) && (Jn(E.key), (j = '' + E.key)),
        Ts(E) && ((ie = E.ref), Rs(E, B));
      for (q in E) Ie.call(E, q) && !Cs.hasOwnProperty(q) && (G[q] = E[q]);
      if (f && f.defaultProps) {
        var ee = f.defaultProps;
        for (q in ee) G[q] === void 0 && (G[q] = ee[q]);
      }
      if (j || ie) {
        var te =
          typeof f == 'function' ? f.displayName || f.name || 'Unknown' : f;
        j && Ss(G, te), ie && Ds(G, te);
      }
      return Ps(f, j, ie, B, k, st.current, G);
    }
  }
  var nn = w.ReactCurrentOwner,
    nr = w.ReactDebugCurrentFrame;
  function We(f) {
    if (f) {
      var E = f._owner,
        R = ve(f.type, f._source, E ? E.type : null);
      nr.setExtraStackFrame(R);
    } else nr.setExtraStackFrame(null);
  }
  var rn;
  rn = !1;
  function on(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === t;
  }
  function rr() {
    {
      if (nn.current) {
        var f = W(nn.current.type);
        if (f)
          return (
            `

Check the render method of \`` +
            f +
            '`.'
          );
      }
      return '';
    }
  }
  function As(f) {
    {
      if (f !== void 0) {
        var E = f.fileName.replace(/^.*[\\\/]/, ''),
          R = f.lineNumber;
        return (
          `

Check your code at ` +
          E +
          ':' +
          R +
          '.'
        );
      }
      return '';
    }
  }
  var or = {};
  function Ms(f) {
    {
      var E = rr();
      if (!E) {
        var R = typeof f == 'string' ? f : f.displayName || f.name;
        R &&
          (E =
            `

Check the top-level render call using <` +
            R +
            '>.');
      }
      return E;
    }
  }
  function sr(f, E) {
    {
      if (!f._store || f._store.validated || f.key != null) return;
      f._store.validated = !0;
      var R = Ms(E);
      if (or[R]) return;
      or[R] = !0;
      var k = '';
      f &&
        f._owner &&
        f._owner !== nn.current &&
        (k = ' It was passed a child from ' + W(f._owner.type) + '.'),
        We(f),
        y(
          'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
          R,
          k,
        ),
        We(null);
    }
  }
  function ar(f, E) {
    {
      if (typeof f != 'object') return;
      if (en(f))
        for (var R = 0; R < f.length; R++) {
          var k = f[R];
          on(k) && sr(k, E);
        }
      else if (on(f)) f._store && (f._store.validated = !0);
      else if (f) {
        var B = v(f);
        if (typeof B == 'function' && B !== f.entries)
          for (var q = B.call(f), G; !(G = q.next()).done; )
            on(G.value) && sr(G.value, E);
      }
    }
  }
  function Os(f) {
    {
      var E = f.type;
      if (E == null || typeof E == 'string') return;
      var R;
      if (typeof E == 'function') R = E.propTypes;
      else if (typeof E == 'object' && (E.$$typeof === u || E.$$typeof === d))
        R = E.propTypes;
      else return;
      if (R) {
        var k = W(E);
        Jt(R, f.props, 'prop', k, f);
      } else if (E.PropTypes !== void 0 && !rn) {
        rn = !0;
        var B = W(E);
        y(
          'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
          B || 'Unknown',
        );
      }
      typeof E.getDefaultProps == 'function' &&
        !E.getDefaultProps.isReactClassApproved &&
        y(
          'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
        );
    }
  }
  function ks(f) {
    {
      for (var E = Object.keys(f.props), R = 0; R < E.length; R++) {
        var k = E[R];
        if (k !== 'children' && k !== 'key') {
          We(f),
            y(
              'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
              k,
            ),
            We(null);
          break;
        }
      }
      f.ref !== null &&
        (We(f),
        y('Invalid attribute `ref` supplied to `React.Fragment`.'),
        We(null));
    }
  }
  function Is(f, E, R, k, B, q) {
    {
      var G = H(f);
      if (!G) {
        var j = '';
        (f === void 0 ||
          (typeof f == 'object' &&
            f !== null &&
            Object.keys(f).length === 0)) &&
          (j +=
            " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var ie = As(B);
        ie ? (j += ie) : (j += rr());
        var ee;
        f === null
          ? (ee = 'null')
          : en(f)
            ? (ee = 'array')
            : f !== void 0 && f.$$typeof === t
              ? ((ee = '<' + (W(f.type) || 'Unknown') + ' />'),
                (j =
                  ' Did you accidentally export a JSX literal instead of a component?'))
              : (ee = typeof f),
          y(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            ee,
            j,
          );
      }
      var te = _s(f, E, R, B, q);
      if (te == null) return te;
      if (G) {
        var fe = E.children;
        if (fe !== void 0)
          if (k)
            if (en(fe)) {
              for (var ze = 0; ze < fe.length; ze++) ar(fe[ze], f);
              Object.freeze && Object.freeze(fe);
            } else
              y(
                'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
              );
          else ar(fe, f);
      }
      return f === r ? ks(te) : Os(te), te;
    }
  }
  var Fs = Is;
  (yn.Fragment = r), (yn.jsxDEV = Fs);
})();
jr.exports = yn;
var C = jr.exports,
  wn = {},
  an = mt;
{
  var yt = an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  (wn.createRoot = function (e, t) {
    yt.usingClientEntryPoint = !0;
    try {
      return an.createRoot(e, t);
    } finally {
      yt.usingClientEntryPoint = !1;
    }
  }),
    (wn.hydrateRoot = function (e, t, n) {
      yt.usingClientEntryPoint = !0;
      try {
        return an.hydrateRoot(e, t, n);
      } finally {
        yt.usingClientEntryPoint = !1;
      }
    });
}
const Ur = Ls({
    chains: [cr],
    connectors: [Vs()],
    transports: { [cr.id]: sn(), [js.id]: sn(), [Us.id]: sn() },
  }),
  On = '-';
function ea(e) {
  const t = na(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(i) {
    const c = i.split(On);
    return c[0] === '' && c.length !== 1 && c.shift(), Gr(c, t) || ta(i);
  }
  function s(i, c) {
    const u = n[i] || [];
    return c && r[i] ? [...u, ...r[i]] : u;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: s };
}
function Gr(e, t) {
  var i;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Gr(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const s = e.join(On);
  return (i = t.validators.find(({ validator: c }) => c(s))) == null
    ? void 0
    : i.classGroupId;
}
const lr = /^\[(.+)\]$/;
function ta(e) {
  if (lr.test(e)) {
    const t = lr.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(':'));
    if (n) return 'arbitrary..' + n;
  }
}
function na(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    oa(Object.entries(e.classGroups), n).forEach(([s, i]) => {
      xn(i, r, s, t);
    }),
    r
  );
}
function xn(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == 'string') {
      const s = o === '' ? t : ur(t, o);
      s.classGroupId = n;
      return;
    }
    if (typeof o == 'function') {
      if (ra(o)) {
        xn(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      xn(i, ur(t, s), n, r);
    });
  });
}
function ur(e, t) {
  let n = e;
  return (
    t.split(On).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function ra(e) {
  return e.isThemeGetter;
}
function oa(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((s) =>
          typeof s == 'string'
            ? t + s
            : typeof s == 'object'
              ? Object.fromEntries(
                  Object.entries(s).map(([i, c]) => [t + i, c]),
                )
              : s,
        );
        return [n, o];
      })
    : e;
}
function sa(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(s, i) {
    n.set(s, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(s) {
      let i = n.get(s);
      if (i !== void 0) return i;
      if ((i = r.get(s)) !== void 0) return o(s, i), i;
    },
    set(s, i) {
      n.has(s) ? n.set(s, i) : o(s, i);
    },
  };
}
const Hr = '!';
function aa(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (i) {
    const c = [];
    let u = 0,
      l = 0,
      m;
    for (let p = 0; p < i.length; p++) {
      let v = i[p];
      if (u === 0) {
        if (v === r && (n || i.slice(p, p + o) === t)) {
          c.push(i.slice(l, p)), (l = p + o);
          continue;
        }
        if (v === '/') {
          m = p;
          continue;
        }
      }
      v === '[' ? u++ : v === ']' && u--;
    }
    const d = c.length === 0 ? i : i.substring(l),
      h = d.startsWith(Hr),
      b = h ? d.substring(1) : d,
      g = m && m > l ? m - l : void 0;
    return {
      modifiers: c,
      hasImportantModifier: h,
      baseClassName: b,
      maybePostfixModifierPosition: g,
    };
  };
}
function ia(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === '[' ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function ca(e) {
  return { cache: sa(e.cacheSize), splitModifiers: aa(e), ...ea(e) };
}
const la = /\s+/;
function ua(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    s = new Set();
  return e
    .trim()
    .split(la)
    .map((i) => {
      const {
        modifiers: c,
        hasImportantModifier: u,
        baseClassName: l,
        maybePostfixModifierPosition: m,
      } = n(i);
      let d = r(m ? l.substring(0, m) : l),
        h = !!m;
      if (!d) {
        if (!m) return { isTailwindClass: !1, originalClassName: i };
        if (((d = r(l)), !d))
          return { isTailwindClass: !1, originalClassName: i };
        h = !1;
      }
      const b = ia(c).join(':');
      return {
        isTailwindClass: !0,
        modifierId: u ? b + Hr : b,
        classGroupId: d,
        originalClassName: i,
        hasPostfixModifier: h,
      };
    })
    .reverse()
    .filter((i) => {
      if (!i.isTailwindClass) return !0;
      const { modifierId: c, classGroupId: u, hasPostfixModifier: l } = i,
        m = c + u;
      return s.has(m)
        ? !1
        : (s.add(m), o(u, l).forEach((d) => s.add(c + d)), !0);
    })
    .reverse()
    .map((i) => i.originalClassName)
    .join(' ');
}
function da() {
  let e = 0,
    t,
    n,
    r = '';
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Wr(t)) && (r && (r += ' '), (r += n));
  return r;
}
function Wr(e) {
  if (typeof e == 'string') return e;
  let t,
    n = '';
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Wr(e[r])) && (n && (n += ' '), (n += t));
  return n;
}
function fa(e, ...t) {
  let n,
    r,
    o,
    s = i;
  function i(u) {
    const l = t.reduce((m, d) => d(m), e());
    return (n = ca(l)), (r = n.cache.get), (o = n.cache.set), (s = c), c(u);
  }
  function c(u) {
    const l = r(u);
    if (l) return l;
    const m = ua(u, n);
    return o(u, m), m;
  }
  return function () {
    return s(da.apply(null, arguments));
  };
}
function Z(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const zr = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  ma = /^\d+\/\d+$/,
  pa = new Set(['px', 'full', 'screen']),
  ba = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  ha =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  va = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  ga = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ya =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ce(e) {
  return Fe(e) || pa.has(e) || ma.test(e);
}
function De(e) {
  return Je(e, 'length', Ra);
}
function Fe(e) {
  return !!e && !Number.isNaN(Number(e));
}
function wt(e) {
  return Je(e, 'number', Fe);
}
function at(e) {
  return !!e && Number.isInteger(Number(e));
}
function wa(e) {
  return e.endsWith('%') && Fe(e.slice(0, -1));
}
function V(e) {
  return zr.test(e);
}
function Pe(e) {
  return ba.test(e);
}
const xa = new Set(['length', 'size', 'percentage']);
function $a(e) {
  return Je(e, xa, Br);
}
function Ea(e) {
  return Je(e, 'position', Br);
}
const Ca = new Set(['image', 'url']);
function Ta(e) {
  return Je(e, Ca, Da);
}
function Na(e) {
  return Je(e, '', Sa);
}
function it() {
  return !0;
}
function Je(e, t, n) {
  const r = zr.exec(e);
  return r
    ? r[1]
      ? typeof t == 'string'
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function Ra(e) {
  return ha.test(e) && !va.test(e);
}
function Br() {
  return !1;
}
function Sa(e) {
  return ga.test(e);
}
function Da(e) {
  return ya.test(e);
}
function Pa() {
  const e = Z('colors'),
    t = Z('spacing'),
    n = Z('blur'),
    r = Z('brightness'),
    o = Z('borderColor'),
    s = Z('borderRadius'),
    i = Z('borderSpacing'),
    c = Z('borderWidth'),
    u = Z('contrast'),
    l = Z('grayscale'),
    m = Z('hueRotate'),
    d = Z('invert'),
    h = Z('gap'),
    b = Z('gradientColorStops'),
    g = Z('gradientColorStopPositions'),
    p = Z('inset'),
    v = Z('margin'),
    w = Z('opacity'),
    y = Z('padding'),
    x = Z('saturate'),
    $ = Z('scale'),
    T = Z('sepia'),
    _ = Z('skew'),
    S = Z('space'),
    A = Z('translate'),
    I = () => ['auto', 'contain', 'none'],
    H = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
    z = () => ['auto', V, t],
    D = () => [V, t],
    W = () => ['', Ce, De],
    N = () => ['auto', Fe, V],
    O = () => [
      'bottom',
      'center',
      'left',
      'left-bottom',
      'left-top',
      'right',
      'right-bottom',
      'right-top',
      'top',
    ],
    U = () => ['solid', 'dashed', 'dotted', 'double', 'none'],
    L = () => [
      'normal',
      'multiply',
      'screen',
      'overlay',
      'darken',
      'lighten',
      'color-dodge',
      'color-burn',
      'hard-light',
      'soft-light',
      'difference',
      'exclusion',
      'hue',
      'saturation',
      'color',
      'luminosity',
      'plus-lighter',
    ],
    K = () => [
      'start',
      'end',
      'center',
      'between',
      'around',
      'evenly',
      'stretch',
    ],
    P = () => ['', '0', V],
    Y = () => [
      'auto',
      'avoid',
      'all',
      'avoid-page',
      'page',
      'left',
      'right',
      'column',
    ],
    X = () => [Fe, wt],
    J = () => [Fe, V];
  return {
    cacheSize: 500,
    separator: ':',
    theme: {
      colors: [it],
      spacing: [Ce, De],
      blur: ['none', '', Pe, V],
      brightness: X(),
      borderColor: [e],
      borderRadius: ['none', '', 'full', Pe, V],
      borderSpacing: D(),
      borderWidth: W(),
      contrast: X(),
      grayscale: P(),
      hueRotate: J(),
      invert: P(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wa, De],
      inset: z(),
      margin: z(),
      opacity: X(),
      padding: D(),
      saturate: X(),
      scale: X(),
      sepia: P(),
      skew: J(),
      space: D(),
      translate: D(),
    },
    classGroups: {
      aspect: [{ aspect: ['auto', 'square', 'video', V] }],
      container: ['container'],
      columns: [{ columns: [Pe] }],
      'break-after': [{ 'break-after': Y() }],
      'break-before': [{ 'break-before': Y() }],
      'break-inside': [
        { 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] },
      ],
      'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
      box: [{ box: ['border', 'content'] }],
      display: [
        'block',
        'inline-block',
        'inline',
        'flex',
        'inline-flex',
        'table',
        'inline-table',
        'table-caption',
        'table-cell',
        'table-column',
        'table-column-group',
        'table-footer-group',
        'table-header-group',
        'table-row-group',
        'table-row',
        'flow-root',
        'grid',
        'inline-grid',
        'contents',
        'list-item',
        'hidden',
      ],
      float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
      clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
      isolation: ['isolate', 'isolation-auto'],
      'object-fit': [
        { object: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
      ],
      'object-position': [{ object: [...O(), V] }],
      overflow: [{ overflow: H() }],
      'overflow-x': [{ 'overflow-x': H() }],
      'overflow-y': [{ 'overflow-y': H() }],
      overscroll: [{ overscroll: I() }],
      'overscroll-x': [{ 'overscroll-x': I() }],
      'overscroll-y': [{ 'overscroll-y': I() }],
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      inset: [{ inset: [p] }],
      'inset-x': [{ 'inset-x': [p] }],
      'inset-y': [{ 'inset-y': [p] }],
      start: [{ start: [p] }],
      end: [{ end: [p] }],
      top: [{ top: [p] }],
      right: [{ right: [p] }],
      bottom: [{ bottom: [p] }],
      left: [{ left: [p] }],
      visibility: ['visible', 'invisible', 'collapse'],
      z: [{ z: ['auto', at, V] }],
      basis: [{ basis: z() }],
      'flex-direction': [
        { flex: ['row', 'row-reverse', 'col', 'col-reverse'] },
      ],
      'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
      flex: [{ flex: ['1', 'auto', 'initial', 'none', V] }],
      grow: [{ grow: P() }],
      shrink: [{ shrink: P() }],
      order: [{ order: ['first', 'last', 'none', at, V] }],
      'grid-cols': [{ 'grid-cols': [it] }],
      'col-start-end': [{ col: ['auto', { span: ['full', at, V] }, V] }],
      'col-start': [{ 'col-start': N() }],
      'col-end': [{ 'col-end': N() }],
      'grid-rows': [{ 'grid-rows': [it] }],
      'row-start-end': [{ row: ['auto', { span: [at, V] }, V] }],
      'row-start': [{ 'row-start': N() }],
      'row-end': [{ 'row-end': N() }],
      'grid-flow': [
        { 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] },
      ],
      'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', V] }],
      'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', V] }],
      gap: [{ gap: [h] }],
      'gap-x': [{ 'gap-x': [h] }],
      'gap-y': [{ 'gap-y': [h] }],
      'justify-content': [{ justify: ['normal', ...K()] }],
      'justify-items': [
        { 'justify-items': ['start', 'end', 'center', 'stretch'] },
      ],
      'justify-self': [
        { 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      'align-content': [{ content: ['normal', ...K(), 'baseline'] }],
      'align-items': [
        { items: ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'align-self': [
        { self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] },
      ],
      'place-content': [{ 'place-content': [...K(), 'baseline'] }],
      'place-items': [
        { 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] },
      ],
      'place-self': [
        { 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] },
      ],
      p: [{ p: [y] }],
      px: [{ px: [y] }],
      py: [{ py: [y] }],
      ps: [{ ps: [y] }],
      pe: [{ pe: [y] }],
      pt: [{ pt: [y] }],
      pr: [{ pr: [y] }],
      pb: [{ pb: [y] }],
      pl: [{ pl: [y] }],
      m: [{ m: [v] }],
      mx: [{ mx: [v] }],
      my: [{ my: [v] }],
      ms: [{ ms: [v] }],
      me: [{ me: [v] }],
      mt: [{ mt: [v] }],
      mr: [{ mr: [v] }],
      mb: [{ mb: [v] }],
      ml: [{ ml: [v] }],
      'space-x': [{ 'space-x': [S] }],
      'space-x-reverse': ['space-x-reverse'],
      'space-y': [{ 'space-y': [S] }],
      'space-y-reverse': ['space-y-reverse'],
      w: [{ w: ['auto', 'min', 'max', 'fit', 'svw', 'lvw', 'dvw', V, t] }],
      'min-w': [{ 'min-w': [V, t, 'min', 'max', 'fit'] }],
      'max-w': [
        {
          'max-w': [
            V,
            t,
            'none',
            'full',
            'min',
            'max',
            'fit',
            'prose',
            { screen: [Pe] },
            Pe,
          ],
        },
      ],
      h: [{ h: [V, t, 'auto', 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      'min-h': [{ 'min-h': [V, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      'max-h': [{ 'max-h': [V, t, 'min', 'max', 'fit', 'svh', 'lvh', 'dvh'] }],
      size: [{ size: [V, t, 'auto', 'min', 'max', 'fit'] }],
      'font-size': [{ text: ['base', Pe, De] }],
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      'font-style': ['italic', 'not-italic'],
      'font-weight': [
        {
          font: [
            'thin',
            'extralight',
            'light',
            'normal',
            'medium',
            'semibold',
            'bold',
            'extrabold',
            'black',
            wt,
          ],
        },
      ],
      'font-family': [{ font: [it] }],
      'fvn-normal': ['normal-nums'],
      'fvn-ordinal': ['ordinal'],
      'fvn-slashed-zero': ['slashed-zero'],
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      tracking: [
        {
          tracking: [
            'tighter',
            'tight',
            'normal',
            'wide',
            'wider',
            'widest',
            V,
          ],
        },
      ],
      'line-clamp': [{ 'line-clamp': ['none', Fe, wt] }],
      leading: [
        {
          leading: [
            'none',
            'tight',
            'snug',
            'normal',
            'relaxed',
            'loose',
            Ce,
            V,
          ],
        },
      ],
      'list-image': [{ 'list-image': ['none', V] }],
      'list-style-type': [{ list: ['none', 'disc', 'decimal', V] }],
      'list-style-position': [{ list: ['inside', 'outside'] }],
      'placeholder-color': [{ placeholder: [e] }],
      'placeholder-opacity': [{ 'placeholder-opacity': [w] }],
      'text-alignment': [
        { text: ['left', 'center', 'right', 'justify', 'start', 'end'] },
      ],
      'text-color': [{ text: [e] }],
      'text-opacity': [{ 'text-opacity': [w] }],
      'text-decoration': [
        'underline',
        'overline',
        'line-through',
        'no-underline',
      ],
      'text-decoration-style': [{ decoration: [...U(), 'wavy'] }],
      'text-decoration-thickness': [
        { decoration: ['auto', 'from-font', Ce, De] },
      ],
      'underline-offset': [{ 'underline-offset': ['auto', Ce, V] }],
      'text-decoration-color': [{ decoration: [e] }],
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
      indent: [{ indent: D() }],
      'vertical-align': [
        {
          align: [
            'baseline',
            'top',
            'middle',
            'bottom',
            'text-top',
            'text-bottom',
            'sub',
            'super',
            V,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            'normal',
            'nowrap',
            'pre',
            'pre-line',
            'pre-wrap',
            'break-spaces',
          ],
        },
      ],
      break: [{ break: ['normal', 'words', 'all', 'keep'] }],
      hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
      content: [{ content: ['none', V] }],
      'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
      'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
      'bg-opacity': [{ 'bg-opacity': [w] }],
      'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
      'bg-position': [{ bg: [...O(), Ea] }],
      'bg-repeat': [
        { bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] },
      ],
      'bg-size': [{ bg: ['auto', 'cover', 'contain', $a] }],
      'bg-image': [
        {
          bg: [
            'none',
            { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
            Ta,
          ],
        },
      ],
      'bg-color': [{ bg: [e] }],
      'gradient-from-pos': [{ from: [g] }],
      'gradient-via-pos': [{ via: [g] }],
      'gradient-to-pos': [{ to: [g] }],
      'gradient-from': [{ from: [b] }],
      'gradient-via': [{ via: [b] }],
      'gradient-to': [{ to: [b] }],
      rounded: [{ rounded: [s] }],
      'rounded-s': [{ 'rounded-s': [s] }],
      'rounded-e': [{ 'rounded-e': [s] }],
      'rounded-t': [{ 'rounded-t': [s] }],
      'rounded-r': [{ 'rounded-r': [s] }],
      'rounded-b': [{ 'rounded-b': [s] }],
      'rounded-l': [{ 'rounded-l': [s] }],
      'rounded-ss': [{ 'rounded-ss': [s] }],
      'rounded-se': [{ 'rounded-se': [s] }],
      'rounded-ee': [{ 'rounded-ee': [s] }],
      'rounded-es': [{ 'rounded-es': [s] }],
      'rounded-tl': [{ 'rounded-tl': [s] }],
      'rounded-tr': [{ 'rounded-tr': [s] }],
      'rounded-br': [{ 'rounded-br': [s] }],
      'rounded-bl': [{ 'rounded-bl': [s] }],
      'border-w': [{ border: [c] }],
      'border-w-x': [{ 'border-x': [c] }],
      'border-w-y': [{ 'border-y': [c] }],
      'border-w-s': [{ 'border-s': [c] }],
      'border-w-e': [{ 'border-e': [c] }],
      'border-w-t': [{ 'border-t': [c] }],
      'border-w-r': [{ 'border-r': [c] }],
      'border-w-b': [{ 'border-b': [c] }],
      'border-w-l': [{ 'border-l': [c] }],
      'border-opacity': [{ 'border-opacity': [w] }],
      'border-style': [{ border: [...U(), 'hidden'] }],
      'divide-x': [{ 'divide-x': [c] }],
      'divide-x-reverse': ['divide-x-reverse'],
      'divide-y': [{ 'divide-y': [c] }],
      'divide-y-reverse': ['divide-y-reverse'],
      'divide-opacity': [{ 'divide-opacity': [w] }],
      'divide-style': [{ divide: U() }],
      'border-color': [{ border: [o] }],
      'border-color-x': [{ 'border-x': [o] }],
      'border-color-y': [{ 'border-y': [o] }],
      'border-color-t': [{ 'border-t': [o] }],
      'border-color-r': [{ 'border-r': [o] }],
      'border-color-b': [{ 'border-b': [o] }],
      'border-color-l': [{ 'border-l': [o] }],
      'divide-color': [{ divide: [o] }],
      'outline-style': [{ outline: ['', ...U()] }],
      'outline-offset': [{ 'outline-offset': [Ce, V] }],
      'outline-w': [{ outline: [Ce, De] }],
      'outline-color': [{ outline: [e] }],
      'ring-w': [{ ring: W() }],
      'ring-w-inset': ['ring-inset'],
      'ring-color': [{ ring: [e] }],
      'ring-opacity': [{ 'ring-opacity': [w] }],
      'ring-offset-w': [{ 'ring-offset': [Ce, De] }],
      'ring-offset-color': [{ 'ring-offset': [e] }],
      shadow: [{ shadow: ['', 'inner', 'none', Pe, Na] }],
      'shadow-color': [{ shadow: [it] }],
      opacity: [{ opacity: [w] }],
      'mix-blend': [{ 'mix-blend': L() }],
      'bg-blend': [{ 'bg-blend': L() }],
      filter: [{ filter: ['', 'none'] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [u] }],
      'drop-shadow': [{ 'drop-shadow': ['', 'none', Pe, V] }],
      grayscale: [{ grayscale: [l] }],
      'hue-rotate': [{ 'hue-rotate': [m] }],
      invert: [{ invert: [d] }],
      saturate: [{ saturate: [x] }],
      sepia: [{ sepia: [T] }],
      'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
      'backdrop-blur': [{ 'backdrop-blur': [n] }],
      'backdrop-brightness': [{ 'backdrop-brightness': [r] }],
      'backdrop-contrast': [{ 'backdrop-contrast': [u] }],
      'backdrop-grayscale': [{ 'backdrop-grayscale': [l] }],
      'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [m] }],
      'backdrop-invert': [{ 'backdrop-invert': [d] }],
      'backdrop-opacity': [{ 'backdrop-opacity': [w] }],
      'backdrop-saturate': [{ 'backdrop-saturate': [x] }],
      'backdrop-sepia': [{ 'backdrop-sepia': [T] }],
      'border-collapse': [{ border: ['collapse', 'separate'] }],
      'border-spacing': [{ 'border-spacing': [i] }],
      'border-spacing-x': [{ 'border-spacing-x': [i] }],
      'border-spacing-y': [{ 'border-spacing-y': [i] }],
      'table-layout': [{ table: ['auto', 'fixed'] }],
      caption: [{ caption: ['top', 'bottom'] }],
      transition: [
        {
          transition: [
            'none',
            'all',
            '',
            'colors',
            'opacity',
            'shadow',
            'transform',
            V,
          ],
        },
      ],
      duration: [{ duration: J() }],
      ease: [{ ease: ['linear', 'in', 'out', 'in-out', V] }],
      delay: [{ delay: J() }],
      animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', V] }],
      transform: [{ transform: ['', 'gpu', 'none'] }],
      scale: [{ scale: [$] }],
      'scale-x': [{ 'scale-x': [$] }],
      'scale-y': [{ 'scale-y': [$] }],
      rotate: [{ rotate: [at, V] }],
      'translate-x': [{ 'translate-x': [A] }],
      'translate-y': [{ 'translate-y': [A] }],
      'skew-x': [{ 'skew-x': [_] }],
      'skew-y': [{ 'skew-y': [_] }],
      'transform-origin': [
        {
          origin: [
            'center',
            'top',
            'top-right',
            'right',
            'bottom-right',
            'bottom',
            'bottom-left',
            'left',
            'top-left',
            V,
          ],
        },
      ],
      accent: [{ accent: ['auto', e] }],
      appearance: [{ appearance: ['none', 'auto'] }],
      cursor: [
        {
          cursor: [
            'auto',
            'default',
            'pointer',
            'wait',
            'text',
            'move',
            'help',
            'not-allowed',
            'none',
            'context-menu',
            'progress',
            'cell',
            'crosshair',
            'vertical-text',
            'alias',
            'copy',
            'no-drop',
            'grab',
            'grabbing',
            'all-scroll',
            'col-resize',
            'row-resize',
            'n-resize',
            'e-resize',
            's-resize',
            'w-resize',
            'ne-resize',
            'nw-resize',
            'se-resize',
            'sw-resize',
            'ew-resize',
            'ns-resize',
            'nesw-resize',
            'nwse-resize',
            'zoom-in',
            'zoom-out',
            V,
          ],
        },
      ],
      'caret-color': [{ caret: [e] }],
      'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
      resize: [{ resize: ['none', 'y', 'x', ''] }],
      'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
      'scroll-m': [{ 'scroll-m': D() }],
      'scroll-mx': [{ 'scroll-mx': D() }],
      'scroll-my': [{ 'scroll-my': D() }],
      'scroll-ms': [{ 'scroll-ms': D() }],
      'scroll-me': [{ 'scroll-me': D() }],
      'scroll-mt': [{ 'scroll-mt': D() }],
      'scroll-mr': [{ 'scroll-mr': D() }],
      'scroll-mb': [{ 'scroll-mb': D() }],
      'scroll-ml': [{ 'scroll-ml': D() }],
      'scroll-p': [{ 'scroll-p': D() }],
      'scroll-px': [{ 'scroll-px': D() }],
      'scroll-py': [{ 'scroll-py': D() }],
      'scroll-ps': [{ 'scroll-ps': D() }],
      'scroll-pe': [{ 'scroll-pe': D() }],
      'scroll-pt': [{ 'scroll-pt': D() }],
      'scroll-pr': [{ 'scroll-pr': D() }],
      'scroll-pb': [{ 'scroll-pb': D() }],
      'scroll-pl': [{ 'scroll-pl': D() }],
      'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
      'snap-stop': [{ snap: ['normal', 'always'] }],
      'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
      'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
      touch: [{ touch: ['auto', 'none', 'manipulation'] }],
      'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
      'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
      'touch-pz': ['touch-pinch-zoom'],
      select: [{ select: ['none', 'text', 'all', 'auto'] }],
      'will-change': [
        { 'will-change': ['auto', 'scroll', 'contents', 'transform', V] },
      ],
      fill: [{ fill: [e, 'none'] }],
      'stroke-w': [{ stroke: [Ce, De, wt] }],
      stroke: [{ stroke: [e, 'none'] }],
      sr: ['sr-only', 'not-sr-only'],
      'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }],
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: [
        'inset-x',
        'inset-y',
        'start',
        'end',
        'top',
        'right',
        'bottom',
        'left',
      ],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      size: ['w', 'h'],
      'font-size': ['leading'],
      'fvn-normal': [
        'fvn-ordinal',
        'fvn-slashed-zero',
        'fvn-figure',
        'fvn-spacing',
        'fvn-fraction',
      ],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      'line-clamp': ['display', 'overflow'],
      rounded: [
        'rounded-s',
        'rounded-e',
        'rounded-t',
        'rounded-r',
        'rounded-b',
        'rounded-l',
        'rounded-ss',
        'rounded-se',
        'rounded-ee',
        'rounded-es',
        'rounded-tl',
        'rounded-tr',
        'rounded-br',
        'rounded-bl',
      ],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': [
        'border-w-s',
        'border-w-e',
        'border-w-t',
        'border-w-r',
        'border-w-b',
        'border-w-l',
      ],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': [
        'border-color-t',
        'border-color-r',
        'border-color-b',
        'border-color-l',
      ],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': [
        'scroll-mx',
        'scroll-my',
        'scroll-ms',
        'scroll-me',
        'scroll-mt',
        'scroll-mr',
        'scroll-mb',
        'scroll-ml',
      ],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': [
        'scroll-px',
        'scroll-py',
        'scroll-ps',
        'scroll-pe',
        'scroll-pt',
        'scroll-pr',
        'scroll-pb',
        'scroll-pl',
      ],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb'],
      touch: ['touch-x', 'touch-y', 'touch-pz'],
      'touch-x': ['touch'],
      'touch-y': ['touch'],
      'touch-pz': ['touch'],
    },
    conflictingClassGroupModifiers: { 'font-size': ['leading'] },
  };
}
const _a = fa(Pa);
function Q(...e) {
  return _a(Gs(e));
}
const qe = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    'div',
    {
      ref: n,
      className: Q(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        e,
      ),
      ...t,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/card.tsx',
      lineNumber: 9,
      columnNumber: 3,
    },
    void 0,
  ),
);
qe.displayName = 'Card';
const jt = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    'div',
    { ref: n, className: Q('flex flex-col space-y-1.5 p-6', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/card.tsx',
      lineNumber: 24,
      columnNumber: 3,
    },
    void 0,
  ),
);
jt.displayName = 'CardHeader';
const Ut = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    'h3',
    {
      ref: n,
      className: Q('text-2xl font-semibold leading-none tracking-tight', e),
      ...t,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/card.tsx',
      lineNumber: 36,
      columnNumber: 3,
    },
    void 0,
  ),
);
Ut.displayName = 'CardTitle';
const kn = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    'p',
    { ref: n, className: Q('text-sm text-muted-foreground', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/card.tsx',
      lineNumber: 51,
      columnNumber: 3,
    },
    void 0,
  ),
);
kn.displayName = 'CardDescription';
const Aa = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    'div',
    { ref: n, className: Q('p-6 pt-0', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/card.tsx',
      lineNumber: 63,
      columnNumber: 3,
    },
    void 0,
  ),
);
Aa.displayName = 'CardContent';
const Ma = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    'div',
    { ref: n, className: Q('flex items-center p-6 pt-0', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/card.tsx',
      lineNumber: 71,
      columnNumber: 3,
    },
    void 0,
  ),
);
Ma.displayName = 'CardFooter';
function M() {
  return (
    (M = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    M.apply(this, arguments)
  );
}
function Oa(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t);
}
function Gt(...e) {
  return (t) => e.forEach((n) => Oa(n, t));
}
function se(...e) {
  return a.useCallback(Gt(...e), e);
}
const Ze = a.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = a.Children.toArray(n),
    s = o.find(Ia);
  if (s) {
    const i = s.props.children,
      c = o.map((u) =>
        u === s
          ? a.Children.count(i) > 1
            ? a.Children.only(null)
            : a.isValidElement(i)
              ? i.props.children
              : null
          : u,
      );
    return a.createElement(
      $n,
      M({}, r, { ref: t }),
      a.isValidElement(i) ? a.cloneElement(i, void 0, c) : null,
    );
  }
  return a.createElement($n, M({}, r, { ref: t }), n);
});
Ze.displayName = 'Slot';
const $n = a.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  return a.isValidElement(n)
    ? a.cloneElement(n, { ...Fa(r, n.props), ref: t ? Gt(t, n.ref) : n.ref })
    : a.Children.count(n) > 1
      ? a.Children.only(null)
      : null;
});
$n.displayName = 'SlotClone';
const ka = ({ children: e }) => a.createElement(a.Fragment, null, e);
function Ia(e) {
  return a.isValidElement(e) && e.type === ka;
}
function Fa(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      s = t[r];
    /^on[A-Z]/.test(r)
      ? o && s
        ? (n[r] = (...c) => {
            s(...c), o(...c);
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...s })
        : r === 'className' && (n[r] = [o, s].filter(Boolean).join(' '));
  }
  return { ...e, ...n };
}
function Kr(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Kr(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function La() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Kr(e)) && (r && (r += ' '), (r += t));
  return r;
}
const dr = (e) => (typeof e == 'boolean' ? ''.concat(e) : e === 0 ? '0' : e),
  fr = La,
  Yr = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return fr(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className,
      );
    const { variants: o, defaultVariants: s } = t,
      i = Object.keys(o).map((l) => {
        const m = n == null ? void 0 : n[l],
          d = s == null ? void 0 : s[l];
        if (m === null) return null;
        const h = dr(m) || dr(d);
        return o[l][h];
      }),
      c =
        n &&
        Object.entries(n).reduce((l, m) => {
          let [d, h] = m;
          return h === void 0 || (l[d] = h), l;
        }, {}),
      u =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((l, m) => {
              let { class: d, className: h, ...b } = m;
              return Object.entries(b).every((g) => {
                let [p, v] = g;
                return Array.isArray(v)
                  ? v.includes({ ...s, ...c }[p])
                  : { ...s, ...c }[p] === v;
              })
                ? [...l, d, h]
                : l;
            }, []);
    return fr(
      e,
      i,
      u,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className,
    );
  },
  Va = Yr(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive:
            'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline:
            'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary:
            'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-10 w-10',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  Ht = a.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, s) => {
      const i = r ? Ze : 'button';
      return C.jsxDEV(
        i,
        {
          className: Q(Va({ variant: t, size: n, className: e })),
          ref: s,
          ...o,
        },
        void 0,
        !1,
        {
          fileName:
            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/button.tsx',
          lineNumber: 46,
          columnNumber: 7,
        },
        void 0,
      );
    },
  );
Ht.displayName = 'Button';
const En = a.forwardRef(({ className: e, type: t, ...n }, r) =>
  C.jsxDEV(
    'input',
    {
      type: t,
      className: Q(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        e,
      ),
      ref: r,
      ...n,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/input.tsx',
      lineNumber: 11,
      columnNumber: 7,
    },
    void 0,
  ),
);
En.displayName = 'Input';
function ja() {
  const { data: e, error: t, isPending: n, sendTransaction: r } = Hs();
  async function o(c) {
    c.preventDefault();
    const u = new FormData(c.target),
      l = u.get('address'),
      m = u.get('value');
    r({ to: l, value: Lr(m) });
  }
  const { isLoading: s, isSuccess: i } = Fr({ hash: e });
  return C.jsxDEV(
    qe,
    {
      className: 'flex flex-col justify-center items-center p-5 space-y-2',
      children: [
        C.jsxDEV(
          jt,
          {
            className: 'flex-col items-center',
            children: C.jsxDEV(
              Ut,
              { children: 'Send Transaction' },
              void 0,
              !1,
              {
                fileName:
                  '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                lineNumber: 33,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
            lineNumber: 32,
            columnNumber: 7,
          },
          this,
        ),
        C.jsxDEV(
          'form',
          {
            className: 'flex-col items-center',
            onSubmit: o,
            children: [
              C.jsxDEV(
                qe,
                {
                  className:
                    'flex justify-center w-full max-w-sm space-x-4 p-5',
                  children: [
                    C.jsxDEV(
                      En,
                      {
                        name: 'address',
                        placeholder: '0xA0Cf…251e',
                        required: !0,
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                        lineNumber: 37,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    C.jsxDEV(
                      En,
                      { name: 'value', placeholder: '0.05', required: !0 },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                        lineNumber: 38,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName:
                    '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                  lineNumber: 36,
                  columnNumber: 9,
                },
                this,
              ),
              C.jsxDEV(
                'div',
                {
                  className:
                    'flex justify-center w-full max-w-sm space-x-4 p-5',
                  children: [
                    C.jsxDEV(
                      Ht,
                      {
                        className: 'space-y-1',
                        variant: 'destructive',
                        disabled: n,
                        type: 'submit',
                        children: n ? 'Confirming...' : 'Send',
                      },
                      void 0,
                      !1,
                      {
                        fileName:
                          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                        lineNumber: 41,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    e &&
                      C.jsxDEV(
                        'div',
                        { children: ['Transaction Hash: ', e] },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                          lineNumber: 49,
                          columnNumber: 20,
                        },
                        this,
                      ),
                    s &&
                      C.jsxDEV(
                        'div',
                        { children: 'Waiting for confirmation...' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                          lineNumber: 50,
                          columnNumber: 28,
                        },
                        this,
                      ),
                    i &&
                      C.jsxDEV(
                        'div',
                        { children: 'Transaction confirmed.' },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                          lineNumber: 51,
                          columnNumber: 27,
                        },
                        this,
                      ),
                    t &&
                      C.jsxDEV(
                        'div',
                        { children: ['Error: ', t.shortMessage || t.message] },
                        void 0,
                        !0,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                          lineNumber: 53,
                          columnNumber: 13,
                        },
                        this,
                      ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName:
                    '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
                  lineNumber: 40,
                  columnNumber: 9,
                },
                this,
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
            lineNumber: 35,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/SendTransactionCard.tsx',
      lineNumber: 31,
      columnNumber: 5,
    },
    this,
  );
}
const Ua = [
    {
      inputs: [
        { internalType: 'address', name: 'vrfCoordinatorV2', type: 'address' },
        { internalType: 'uint64', name: 'subscriptionId', type: 'uint64' },
        { internalType: 'bytes32', name: 'gasLane', type: 'bytes32' },
        { internalType: 'uint32', name: 'callbackGasLimit', type: 'uint32' },
        { internalType: 'string[20]', name: 'tokenUris', type: 'string[20]' },
        { internalType: 'uint256', name: 'mintFee', type: 'uint256' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        { internalType: 'address', name: 'sender', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        { internalType: 'address', name: 'owner', type: 'address' },
      ],
      name: 'ERC721IncorrectOwner',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'operator', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'ERC721InsufficientApproval',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'approver', type: 'address' }],
      name: 'ERC721InvalidApprover',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'operator', type: 'address' }],
      name: 'ERC721InvalidOperator',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
      name: 'ERC721InvalidOwner',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }],
      name: 'ERC721InvalidReceiver',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'sender', type: 'address' }],
      name: 'ERC721InvalidSender',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'ERC721NonexistentToken',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'have', type: 'address' },
        { internalType: 'address', name: 'want', type: 'address' },
      ],
      name: 'OnlyCoordinatorCanFulfill',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
      name: 'OwnableInvalidOwner',
      type: 'error',
    },
    {
      inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
      name: 'OwnableUnauthorizedAccount',
      type: 'error',
    },
    { inputs: [], name: 'RandomIpfsNft_InsufficientETHSent', type: 'error' },
    { inputs: [], name: 'RandomIpfsNft_RangeOutOfBounds', type: 'error' },
    { inputs: [], name: 'RandomIpfsNft_TransferFailed', type: 'error' },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'approved',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'operator',
          type: 'address',
        },
        { indexed: !1, internalType: 'bool', name: 'approved', type: 'bool' },
      ],
      name: 'ApprovalForAll',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: 'uint256',
          name: '_fromTokenId',
          type: 'uint256',
        },
        {
          indexed: !1,
          internalType: 'uint256',
          name: '_toTokenId',
          type: 'uint256',
        },
      ],
      name: 'BatchMetadataUpdate',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: 'uint256',
          name: '_tokenId',
          type: 'uint256',
        },
      ],
      name: 'MetadataUpdate',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'newTokenID',
          type: 'uint256',
        },
        {
          indexed: !1,
          internalType: 'address',
          name: 'nftOwner',
          type: 'address',
        },
      ],
      name: 'NFTMinted',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: 'uint256',
          name: 'requestId',
          type: 'uint256',
        },
        {
          indexed: !1,
          internalType: 'address',
          name: 'senderAddress',
          type: 'address',
        },
      ],
      name: 'NftRequestedWithNewIdFromVRF',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !0,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: !0,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: !1,
      inputs: [
        { indexed: !0, internalType: 'address', name: 'from', type: 'address' },
        { indexed: !0, internalType: 'address', name: 'to', type: 'address' },
        {
          indexed: !0,
          internalType: 'uint256',
          name: 'tokenId',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'approve',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'getApproved',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getMintFee',
      outputs: [{ internalType: 'uint256', name: 'mintFee', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
      name: 'getNftTypesUris',
      outputs: [{ internalType: 'string', name: 'uris', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'getTokenCounter',
      outputs: [
        { internalType: 'uint256', name: 'tokenCount', type: 'uint256' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'owner', type: 'address' },
        { internalType: 'address', name: 'operator', type: 'address' },
      ],
      name: 'isApprovedForAll',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'ownerOf',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'uint256', name: 'requestId', type: 'uint256' },
        { internalType: 'uint256[]', name: 'randomWords', type: 'uint256[]' },
      ],
      name: 'rawFulfillRandomWords',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'requestNft',
      outputs: [
        { internalType: 'uint256', name: 'requestId', type: 'uint256' },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 's_requestIdToSender',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 's_tokenCounter',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
      ],
      name: 'safeTransferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'operator', type: 'address' },
        { internalType: 'bool', name: 'approved', type: 'bool' },
      ],
      name: 'setApprovalForAll',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
      name: 'supportsInterface',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
      name: 'tokenURI',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        { internalType: 'address', name: 'from', type: 'address' },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      ],
      name: 'transferFrom',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'withdraw',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  Ga = 1,
  Ha = 1e6;
let cn = 0;
function Wa() {
  return (cn = (cn + 1) % Number.MAX_SAFE_INTEGER), cn.toString();
}
const ln = new Map(),
  mr = (e) => {
    if (ln.has(e)) return;
    const t = setTimeout(() => {
      ln.delete(e), ct({ type: 'REMOVE_TOAST', toastId: e });
    }, Ha);
    ln.set(e, t);
  },
  za = (e, t) => {
    switch (t.type) {
      case 'ADD_TOAST':
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Ga) };
      case 'UPDATE_TOAST':
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n,
          ),
        };
      case 'DISMISS_TOAST': {
        const { toastId: n } = t;
        return (
          n
            ? mr(n)
            : e.toasts.forEach((r) => {
                mr(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r,
            ),
          }
        );
      }
      case 'REMOVE_TOAST':
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Dt = [];
let Pt = { toasts: [] };
function ct(e) {
  (Pt = za(Pt, e)),
    Dt.forEach((t) => {
      t(Pt);
    });
}
function Ba({ ...e }) {
  const t = Wa(),
    n = (o) => ct({ type: 'UPDATE_TOAST', toast: { ...o, id: t } }),
    r = () => ct({ type: 'DISMISS_TOAST', toastId: t });
  return (
    ct({
      type: 'ADD_TOAST',
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Xr() {
  const [e, t] = a.useState(Pt);
  return (
    a.useEffect(
      () => (
        Dt.push(t),
        () => {
          const n = Dt.indexOf(t);
          n > -1 && Dt.splice(n, 1);
        }
      ),
      [e],
    ),
    {
      ...e,
      toast: Ba,
      dismiss: (n) => ct({ type: 'DISMISS_TOAST', toastId: n }),
    }
  );
}
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function et(e, t = []) {
  let n = [];
  function r(s, i) {
    const c = a.createContext(i),
      u = n.length;
    n = [...n, i];
    function l(d) {
      const { scope: h, children: b, ...g } = d,
        p = (h == null ? void 0 : h[e][u]) || c,
        v = a.useMemo(() => g, Object.values(g));
      return a.createElement(p.Provider, { value: v }, b);
    }
    function m(d, h) {
      const b = (h == null ? void 0 : h[e][u]) || c,
        g = a.useContext(b);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return (l.displayName = s + 'Provider'), [l, m];
  }
  const o = () => {
    const s = n.map((i) => a.createContext(i));
    return function (c) {
      const u = (c == null ? void 0 : c[e]) || s;
      return a.useMemo(() => ({ [`__scope${e}`]: { ...c, [e]: u } }), [c, u]);
    };
  };
  return (o.scopeName = e), [r, Ka(o, ...t)];
}
function Ka(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const i = r.reduce((c, { useScope: u, scopeName: l }) => {
        const d = u(s)[`__scope${l}`];
        return { ...c, ...d };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function In(e) {
  const t = e + 'CollectionProvider',
    [n, r] = et(t),
    [o, s] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    i = (b) => {
      const { scope: g, children: p } = b,
        v = ge.useRef(null),
        w = ge.useRef(new Map()).current;
      return ge.createElement(o, { scope: g, itemMap: w, collectionRef: v }, p);
    },
    c = e + 'CollectionSlot',
    u = ge.forwardRef((b, g) => {
      const { scope: p, children: v } = b,
        w = s(c, p),
        y = se(g, w.collectionRef);
      return ge.createElement(Ze, { ref: y }, v);
    }),
    l = e + 'CollectionItemSlot',
    m = 'data-radix-collection-item',
    d = ge.forwardRef((b, g) => {
      const { scope: p, children: v, ...w } = b,
        y = ge.useRef(null),
        x = se(g, y),
        $ = s(l, p);
      return (
        ge.useEffect(
          () => (
            $.itemMap.set(y, { ref: y, ...w }), () => void $.itemMap.delete(y)
          ),
        ),
        ge.createElement(Ze, { [m]: '', ref: x }, v)
      );
    });
  function h(b) {
    const g = s(e + 'CollectionConsumer', b);
    return ge.useCallback(() => {
      const v = g.collectionRef.current;
      if (!v) return [];
      const w = Array.from(v.querySelectorAll(`[${m}]`));
      return Array.from(g.itemMap.values()).sort(
        ($, T) => w.indexOf($.ref.current) - w.indexOf(T.ref.current),
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [{ Provider: i, Slot: u, ItemSlot: d }, h, r];
}
const Ya = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  ne = Ya.reduce((e, t) => {
    const n = a.forwardRef((r, o) => {
      const { asChild: s, ...i } = r,
        c = s ? Ze : t;
      return (
        a.useEffect(() => {
          window[Symbol.for('radix-ui')] = !0;
        }, []),
        a.createElement(c, M({}, i, { ref: o }))
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function Fn(e, t) {
  e && mt.flushSync(() => e.dispatchEvent(t));
}
function ce(e) {
  const t = a.useRef(e);
  return (
    a.useEffect(() => {
      t.current = e;
    }),
    a.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      [],
    )
  );
}
function Xa(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ce(e);
  a.useEffect(() => {
    const r = (o) => {
      o.key === 'Escape' && n(o);
    };
    return (
      t.addEventListener('keydown', r),
      () => t.removeEventListener('keydown', r)
    );
  }, [n, t]);
}
const Cn = 'dismissableLayer.update',
  qa = 'dismissableLayer.pointerDownOutside',
  Za = 'dismissableLayer.focusOutside';
let pr;
const qr = a.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Zr = a.forwardRef((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: c,
        onDismiss: u,
        ...l
      } = e,
      m = a.useContext(qr),
      [d, h] = a.useState(null),
      b =
        (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
            ? void 0
            : globalThis.document,
      [, g] = a.useState({}),
      p = se(t, (A) => h(A)),
      v = Array.from(m.layers),
      [w] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = v.indexOf(w),
      x = d ? v.indexOf(d) : -1,
      $ = m.layersWithOutsidePointerEventsDisabled.size > 0,
      T = x >= y,
      _ = Ja((A) => {
        const I = A.target,
          H = [...m.branches].some((z) => z.contains(I));
        !T ||
          H ||
          (s == null || s(A),
          c == null || c(A),
          A.defaultPrevented || u == null || u());
      }, b),
      S = ei((A) => {
        const I = A.target;
        [...m.branches].some((z) => z.contains(I)) ||
          (i == null || i(A),
          c == null || c(A),
          A.defaultPrevented || u == null || u());
      }, b);
    return (
      Xa((A) => {
        x === m.layers.size - 1 &&
          (o == null || o(A),
          !A.defaultPrevented && u && (A.preventDefault(), u()));
      }, b),
      a.useEffect(() => {
        if (d)
          return (
            r &&
              (m.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((pr = b.body.style.pointerEvents),
                (b.body.style.pointerEvents = 'none')),
              m.layersWithOutsidePointerEventsDisabled.add(d)),
            m.layers.add(d),
            br(),
            () => {
              r &&
                m.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (b.body.style.pointerEvents = pr);
            }
          );
      }, [d, b, r, m]),
      a.useEffect(
        () => () => {
          d &&
            (m.layers.delete(d),
            m.layersWithOutsidePointerEventsDisabled.delete(d),
            br());
        },
        [d, m],
      ),
      a.useEffect(() => {
        const A = () => g({});
        return (
          document.addEventListener(Cn, A),
          () => document.removeEventListener(Cn, A)
        );
      }, []),
      a.createElement(
        ne.div,
        M({}, l, {
          ref: p,
          style: {
            pointerEvents: $ ? (T ? 'auto' : 'none') : void 0,
            ...e.style,
          },
          onFocusCapture: F(e.onFocusCapture, S.onFocusCapture),
          onBlurCapture: F(e.onBlurCapture, S.onBlurCapture),
          onPointerDownCapture: F(
            e.onPointerDownCapture,
            _.onPointerDownCapture,
          ),
        }),
      )
    );
  }),
  Qa = a.forwardRef((e, t) => {
    const n = a.useContext(qr),
      r = a.useRef(null),
      o = se(t, r);
    return (
      a.useEffect(() => {
        const s = r.current;
        if (s)
          return (
            n.branches.add(s),
            () => {
              n.branches.delete(s);
            }
          );
      }, [n.branches]),
      a.createElement(ne.div, M({}, e, { ref: o }))
    );
  });
function Ja(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ce(e),
    r = a.useRef(!1),
    o = a.useRef(() => {});
  return (
    a.useEffect(() => {
      const s = (c) => {
          if (c.target && !r.current) {
            let l = function () {
              Qr(qa, n, u, { discrete: !0 });
            };
            const u = { originalEvent: c };
            c.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = l),
                t.addEventListener('click', o.current, { once: !0 }))
              : l();
          } else t.removeEventListener('click', o.current);
          r.current = !1;
        },
        i = window.setTimeout(() => {
          t.addEventListener('pointerdown', s);
        }, 0);
      return () => {
        window.clearTimeout(i),
          t.removeEventListener('pointerdown', s),
          t.removeEventListener('click', o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function ei(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ce(e),
    r = a.useRef(!1);
  return (
    a.useEffect(() => {
      const o = (s) => {
        s.target &&
          !r.current &&
          Qr(Za, n, { originalEvent: s }, { discrete: !1 });
      };
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function br() {
  const e = new CustomEvent(Cn);
  document.dispatchEvent(e);
}
function Qr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Fn(o, s) : o.dispatchEvent(s);
}
const ti = Zr,
  ni = Qa,
  Jr = a.forwardRef((e, t) => {
    var n;
    const {
      container: r = globalThis == null ||
      (n = globalThis.document) === null ||
      n === void 0
        ? void 0
        : n.body,
      ...o
    } = e;
    return r
      ? Ws.createPortal(a.createElement(ne.div, M({}, o, { ref: t })), r)
      : null;
  }),
  Le = globalThis != null && globalThis.document ? a.useLayoutEffect : () => {};
function ri(e, t) {
  return a.useReducer((n, r) => {
    const o = t[n][r];
    return o ?? n;
  }, e);
}
const tt = (e) => {
  const { present: t, children: n } = e,
    r = oi(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : a.Children.only(n),
    s = se(r.ref, o.ref);
  return typeof n == 'function' || r.isPresent
    ? a.cloneElement(o, { ref: s })
    : null;
};
tt.displayName = 'Presence';
function oi(e) {
  const [t, n] = a.useState(),
    r = a.useRef({}),
    o = a.useRef(e),
    s = a.useRef('none'),
    i = e ? 'mounted' : 'unmounted',
    [c, u] = ri(i, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
  return (
    a.useEffect(() => {
      const l = xt(r.current);
      s.current = c === 'mounted' ? l : 'none';
    }, [c]),
    Le(() => {
      const l = r.current,
        m = o.current;
      if (m !== e) {
        const h = s.current,
          b = xt(l);
        e
          ? u('MOUNT')
          : b === 'none' || (l == null ? void 0 : l.display) === 'none'
            ? u('UNMOUNT')
            : u(m && h !== b ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e);
      }
    }, [e, u]),
    Le(() => {
      if (t) {
        const l = (d) => {
            const b = xt(r.current).includes(d.animationName);
            d.target === t && b && mt.flushSync(() => u('ANIMATION_END'));
          },
          m = (d) => {
            d.target === t && (s.current = xt(r.current));
          };
        return (
          t.addEventListener('animationstart', m),
          t.addEventListener('animationcancel', l),
          t.addEventListener('animationend', l),
          () => {
            t.removeEventListener('animationstart', m),
              t.removeEventListener('animationcancel', l),
              t.removeEventListener('animationend', l);
          }
        );
      } else u('ANIMATION_END');
    }, [t, u]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(c),
      ref: a.useCallback((l) => {
        l && (r.current = getComputedStyle(l)), n(l);
      }, []),
    }
  );
}
function xt(e) {
  return (e == null ? void 0 : e.animationName) || 'none';
}
function Ln({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = si({ defaultProp: t, onChange: n }),
    s = e !== void 0,
    i = s ? e : r,
    c = ce(n),
    u = a.useCallback(
      (l) => {
        if (s) {
          const d = typeof l == 'function' ? l(e) : l;
          d !== e && c(d);
        } else o(l);
      },
      [s, e, o, c],
    );
  return [i, u];
}
function si({ defaultProp: e, onChange: t }) {
  const n = a.useState(e),
    [r] = n,
    o = a.useRef(r),
    s = ce(t);
  return (
    a.useEffect(() => {
      o.current !== r && (s(r), (o.current = r));
    }, [r, o, s]),
    n
  );
}
const eo = a.forwardRef((e, t) =>
    a.createElement(
      ne.span,
      M({}, e, {
        ref: t,
        style: {
          position: 'absolute',
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
          ...e.style,
        },
      }),
    ),
  ),
  to = 'ToastProvider',
  [Vn, ai, ii] = In('Toast'),
  [no, Cd] = et('Toast', [ii]),
  [ci, Wt] = no(to),
  ro = (e) => {
    const {
        __scopeToast: t,
        label: n = 'Notification',
        duration: r = 5e3,
        swipeDirection: o = 'right',
        swipeThreshold: s = 50,
        children: i,
      } = e,
      [c, u] = a.useState(null),
      [l, m] = a.useState(0),
      d = a.useRef(!1),
      h = a.useRef(!1);
    return a.createElement(
      Vn.Provider,
      { scope: t },
      a.createElement(
        ci,
        {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: s,
          toastCount: l,
          viewport: c,
          onViewportChange: u,
          onToastAdd: a.useCallback(() => m((b) => b + 1), []),
          onToastRemove: a.useCallback(() => m((b) => b - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: h,
        },
        i,
      ),
    );
  };
ro.propTypes = {
  label(e) {
    if (e.label && typeof e.label == 'string' && !e.label.trim()) {
      const t = `Invalid prop \`label\` supplied to \`${to}\`. Expected non-empty \`string\`.`;
      return new Error(t);
    }
    return null;
  },
};
const li = 'ToastViewport',
  ui = ['F8'],
  Tn = 'toast.viewportPause',
  Nn = 'toast.viewportResume',
  di = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = ui,
        label: o = 'Notifications ({hotkey})',
        ...s
      } = e,
      i = Wt(li, n),
      c = ai(n),
      u = a.useRef(null),
      l = a.useRef(null),
      m = a.useRef(null),
      d = a.useRef(null),
      h = se(t, d, i.onViewportChange),
      b = r.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
      g = i.toastCount > 0;
    a.useEffect(() => {
      const v = (w) => {
        var y;
        r.every(($) => w[$] || w.code === $) &&
          ((y = d.current) === null || y === void 0 || y.focus());
      };
      return (
        document.addEventListener('keydown', v),
        () => document.removeEventListener('keydown', v)
      );
    }, [r]),
      a.useEffect(() => {
        const v = u.current,
          w = d.current;
        if (g && v && w) {
          const y = () => {
              if (!i.isClosePausedRef.current) {
                const _ = new CustomEvent(Tn);
                w.dispatchEvent(_), (i.isClosePausedRef.current = !0);
              }
            },
            x = () => {
              if (i.isClosePausedRef.current) {
                const _ = new CustomEvent(Nn);
                w.dispatchEvent(_), (i.isClosePausedRef.current = !1);
              }
            },
            $ = (_) => {
              !v.contains(_.relatedTarget) && x();
            },
            T = () => {
              v.contains(document.activeElement) || x();
            };
          return (
            v.addEventListener('focusin', y),
            v.addEventListener('focusout', $),
            v.addEventListener('pointermove', y),
            v.addEventListener('pointerleave', T),
            window.addEventListener('blur', y),
            window.addEventListener('focus', x),
            () => {
              v.removeEventListener('focusin', y),
                v.removeEventListener('focusout', $),
                v.removeEventListener('pointermove', y),
                v.removeEventListener('pointerleave', T),
                window.removeEventListener('blur', y),
                window.removeEventListener('focus', x);
            }
          );
        }
      }, [g, i.isClosePausedRef]);
    const p = a.useCallback(
      ({ tabbingDirection: v }) => {
        const y = c().map((x) => {
          const $ = x.ref.current,
            T = [$, ...Ri($)];
          return v === 'forwards' ? T : T.reverse();
        });
        return (v === 'forwards' ? y.reverse() : y).flat();
      },
      [c],
    );
    return (
      a.useEffect(() => {
        const v = d.current;
        if (v) {
          const w = (y) => {
            const x = y.altKey || y.ctrlKey || y.metaKey;
            if (y.key === 'Tab' && !x) {
              const A = document.activeElement,
                I = y.shiftKey;
              if (y.target === v && I) {
                var T;
                (T = l.current) === null || T === void 0 || T.focus();
                return;
              }
              const D = p({ tabbingDirection: I ? 'backwards' : 'forwards' }),
                W = D.findIndex((N) => N === A);
              if (un(D.slice(W + 1))) y.preventDefault();
              else {
                var _, S;
                I
                  ? (_ = l.current) === null || _ === void 0 || _.focus()
                  : (S = m.current) === null || S === void 0 || S.focus();
              }
            }
          };
          return (
            v.addEventListener('keydown', w),
            () => v.removeEventListener('keydown', w)
          );
        }
      }, [c, p]),
      a.createElement(
        ni,
        {
          ref: u,
          role: 'region',
          'aria-label': o.replace('{hotkey}', b),
          tabIndex: -1,
          style: { pointerEvents: g ? void 0 : 'none' },
        },
        g &&
          a.createElement(hr, {
            ref: l,
            onFocusFromOutsideViewport: () => {
              const v = p({ tabbingDirection: 'forwards' });
              un(v);
            },
          }),
        a.createElement(
          Vn.Slot,
          { scope: n },
          a.createElement(ne.ol, M({ tabIndex: -1 }, s, { ref: h })),
        ),
        g &&
          a.createElement(hr, {
            ref: m,
            onFocusFromOutsideViewport: () => {
              const v = p({ tabbingDirection: 'backwards' });
              un(v);
            },
          }),
      )
    );
  }),
  fi = 'ToastFocusProxy',
  hr = a.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      s = Wt(fi, n);
    return a.createElement(
      eo,
      M({ 'aria-hidden': !0, tabIndex: 0 }, o, {
        ref: t,
        style: { position: 'fixed' },
        onFocus: (i) => {
          var c;
          const u = i.relatedTarget;
          !((c = s.viewport) !== null && c !== void 0 && c.contains(u)) && r();
        },
      }),
    );
  }),
  zt = 'Toast',
  mi = 'toast.swipeStart',
  pi = 'toast.swipeMove',
  bi = 'toast.swipeCancel',
  hi = 'toast.swipeEnd',
  vi = a.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: s, ...i } = e,
      [c = !0, u] = Ln({ prop: r, defaultProp: o, onChange: s });
    return a.createElement(
      tt,
      { present: n || c },
      a.createElement(
        oo,
        M({ open: c }, i, {
          ref: t,
          onClose: () => u(!1),
          onPause: ce(e.onPause),
          onResume: ce(e.onResume),
          onSwipeStart: F(e.onSwipeStart, (l) => {
            l.currentTarget.setAttribute('data-swipe', 'start');
          }),
          onSwipeMove: F(e.onSwipeMove, (l) => {
            const { x: m, y: d } = l.detail.delta;
            l.currentTarget.setAttribute('data-swipe', 'move'),
              l.currentTarget.style.setProperty(
                '--radix-toast-swipe-move-x',
                `${m}px`,
              ),
              l.currentTarget.style.setProperty(
                '--radix-toast-swipe-move-y',
                `${d}px`,
              );
          }),
          onSwipeCancel: F(e.onSwipeCancel, (l) => {
            l.currentTarget.setAttribute('data-swipe', 'cancel'),
              l.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-x',
              ),
              l.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-y',
              ),
              l.currentTarget.style.removeProperty('--radix-toast-swipe-end-x'),
              l.currentTarget.style.removeProperty('--radix-toast-swipe-end-y');
          }),
          onSwipeEnd: F(e.onSwipeEnd, (l) => {
            const { x: m, y: d } = l.detail.delta;
            l.currentTarget.setAttribute('data-swipe', 'end'),
              l.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-x',
              ),
              l.currentTarget.style.removeProperty(
                '--radix-toast-swipe-move-y',
              ),
              l.currentTarget.style.setProperty(
                '--radix-toast-swipe-end-x',
                `${m}px`,
              ),
              l.currentTarget.style.setProperty(
                '--radix-toast-swipe-end-y',
                `${d}px`,
              ),
              u(!1);
          }),
        }),
      ),
    );
  }),
  [gi, yi] = no(zt, { onClose() {} }),
  oo = a.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = 'foreground',
        duration: o,
        open: s,
        onClose: i,
        onEscapeKeyDown: c,
        onPause: u,
        onResume: l,
        onSwipeStart: m,
        onSwipeMove: d,
        onSwipeCancel: h,
        onSwipeEnd: b,
        ...g
      } = e,
      p = Wt(zt, n),
      [v, w] = a.useState(null),
      y = se(t, (N) => w(N)),
      x = a.useRef(null),
      $ = a.useRef(null),
      T = o || p.duration,
      _ = a.useRef(0),
      S = a.useRef(T),
      A = a.useRef(0),
      { onToastAdd: I, onToastRemove: H } = p,
      z = ce(() => {
        var N;
        (v == null ? void 0 : v.contains(document.activeElement)) &&
          ((N = p.viewport) === null || N === void 0 || N.focus()),
          i();
      }),
      D = a.useCallback(
        (N) => {
          !N ||
            N === 1 / 0 ||
            (window.clearTimeout(A.current),
            (_.current = new Date().getTime()),
            (A.current = window.setTimeout(z, N)));
        },
        [z],
      );
    a.useEffect(() => {
      const N = p.viewport;
      if (N) {
        const O = () => {
            D(S.current), l == null || l();
          },
          U = () => {
            const L = new Date().getTime() - _.current;
            (S.current = S.current - L),
              window.clearTimeout(A.current),
              u == null || u();
          };
        return (
          N.addEventListener(Tn, U),
          N.addEventListener(Nn, O),
          () => {
            N.removeEventListener(Tn, U), N.removeEventListener(Nn, O);
          }
        );
      }
    }, [p.viewport, T, u, l, D]),
      a.useEffect(() => {
        s && !p.isClosePausedRef.current && D(T);
      }, [s, T, p.isClosePausedRef, D]),
      a.useEffect(() => (I(), () => H()), [I, H]);
    const W = a.useMemo(() => (v ? co(v) : null), [v]);
    return p.viewport
      ? a.createElement(
          a.Fragment,
          null,
          W &&
            a.createElement(
              wi,
              {
                __scopeToast: n,
                role: 'status',
                'aria-live': r === 'foreground' ? 'assertive' : 'polite',
                'aria-atomic': !0,
              },
              W,
            ),
          a.createElement(
            gi,
            { scope: n, onClose: z },
            mt.createPortal(
              a.createElement(
                Vn.ItemSlot,
                { scope: n },
                a.createElement(
                  ti,
                  {
                    asChild: !0,
                    onEscapeKeyDown: F(c, () => {
                      p.isFocusedToastEscapeKeyDownRef.current || z(),
                        (p.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                  },
                  a.createElement(
                    ne.li,
                    M(
                      {
                        role: 'status',
                        'aria-live': 'off',
                        'aria-atomic': !0,
                        tabIndex: 0,
                        'data-state': s ? 'open' : 'closed',
                        'data-swipe-direction': p.swipeDirection,
                      },
                      g,
                      {
                        ref: y,
                        style: {
                          userSelect: 'none',
                          touchAction: 'none',
                          ...e.style,
                        },
                        onKeyDown: F(e.onKeyDown, (N) => {
                          N.key === 'Escape' &&
                            (c == null || c(N.nativeEvent),
                            N.nativeEvent.defaultPrevented ||
                              ((p.isFocusedToastEscapeKeyDownRef.current = !0),
                              z()));
                        }),
                        onPointerDown: F(e.onPointerDown, (N) => {
                          N.button === 0 &&
                            (x.current = { x: N.clientX, y: N.clientY });
                        }),
                        onPointerMove: F(e.onPointerMove, (N) => {
                          if (!x.current) return;
                          const O = N.clientX - x.current.x,
                            U = N.clientY - x.current.y,
                            L = !!$.current,
                            K = ['left', 'right'].includes(p.swipeDirection),
                            P = ['left', 'up'].includes(p.swipeDirection)
                              ? Math.min
                              : Math.max,
                            Y = K ? P(0, O) : 0,
                            X = K ? 0 : P(0, U),
                            J = N.pointerType === 'touch' ? 10 : 2,
                            oe = { x: Y, y: X },
                            he = { originalEvent: N, delta: oe };
                          L
                            ? (($.current = oe),
                              $t(pi, d, he, { discrete: !1 }))
                            : vr(oe, p.swipeDirection, J)
                              ? (($.current = oe),
                                $t(mi, m, he, { discrete: !1 }),
                                N.target.setPointerCapture(N.pointerId))
                              : (Math.abs(O) > J || Math.abs(U) > J) &&
                                (x.current = null);
                        }),
                        onPointerUp: F(e.onPointerUp, (N) => {
                          const O = $.current,
                            U = N.target;
                          if (
                            (U.hasPointerCapture(N.pointerId) &&
                              U.releasePointerCapture(N.pointerId),
                            ($.current = null),
                            (x.current = null),
                            O)
                          ) {
                            const L = N.currentTarget,
                              K = { originalEvent: N, delta: O };
                            vr(O, p.swipeDirection, p.swipeThreshold)
                              ? $t(hi, b, K, { discrete: !0 })
                              : $t(bi, h, K, { discrete: !0 }),
                              L.addEventListener(
                                'click',
                                (P) => P.preventDefault(),
                                { once: !0 },
                              );
                          }
                        }),
                      },
                    ),
                  ),
                ),
              ),
              p.viewport,
            ),
          ),
        )
      : null;
  });
oo.propTypes = {
  type(e) {
    if (e.type && !['foreground', 'background'].includes(e.type)) {
      const t = `Invalid prop \`type\` supplied to \`${zt}\`. Expected \`foreground | background\`.`;
      return new Error(t);
    }
    return null;
  },
};
const wi = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Wt(zt, t),
      [s, i] = a.useState(!1),
      [c, u] = a.useState(!1);
    return (
      Ti(() => i(!0)),
      a.useEffect(() => {
        const l = window.setTimeout(() => u(!0), 1e3);
        return () => window.clearTimeout(l);
      }, []),
      c
        ? null
        : a.createElement(
            Jr,
            { asChild: !0 },
            a.createElement(
              eo,
              r,
              s && a.createElement(a.Fragment, null, o.label, ' ', n),
            ),
          )
    );
  },
  xi = a.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.createElement(ne.div, M({}, r, { ref: t }));
  }),
  $i = a.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return a.createElement(ne.div, M({}, r, { ref: t }));
  }),
  Ei = 'ToastAction',
  so = a.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n
      ? a.createElement(
          io,
          { altText: n, asChild: !0 },
          a.createElement(ao, M({}, r, { ref: t })),
        )
      : null;
  });
so.propTypes = {
  altText(e) {
    return e.altText
      ? null
      : new Error(`Missing prop \`altText\` expected on \`${Ei}\``);
  },
};
const Ci = 'ToastClose',
  ao = a.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = yi(Ci, n);
    return a.createElement(
      io,
      { asChild: !0 },
      a.createElement(
        ne.button,
        M({ type: 'button' }, r, { ref: t, onClick: F(e.onClick, o.onClose) }),
      ),
    );
  }),
  io = a.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return a.createElement(
      ne.div,
      M(
        {
          'data-radix-toast-announce-exclude': '',
          'data-radix-toast-announce-alt': r || void 0,
        },
        o,
        { ref: t },
      ),
    );
  });
function co(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        Ni(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === 'none',
          s = r.dataset.radixToastAnnounceExclude === '';
        if (!o)
          if (s) {
            const i = r.dataset.radixToastAnnounceAlt;
            i && t.push(i);
          } else t.push(...co(r));
      }
    }),
    t
  );
}
function $t(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    s = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? Fn(o, s) : o.dispatchEvent(s);
}
const vr = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    s = r > o;
  return t === 'left' || t === 'right' ? s && r > n : !s && o > n;
};
function Ti(e = () => {}) {
  const t = ce(e);
  Le(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t)),
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function Ni(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Ri(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function un(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t),
  );
}
const Si = ro,
  lo = di,
  uo = vi,
  fo = xi,
  mo = $i,
  po = so,
  bo = ao;
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Di = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pi = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  nt = (e, t) => {
    const n = a.forwardRef(
      (
        {
          color: r = 'currentColor',
          size: o = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: i,
          className: c = '',
          children: u,
          ...l
        },
        m,
      ) =>
        a.createElement(
          'svg',
          {
            ref: m,
            ...Di,
            width: o,
            height: o,
            stroke: r,
            strokeWidth: i ? (Number(s) * 24) / Number(o) : s,
            className: ['lucide', `lucide-${Pi(e)}`, c].join(' '),
            ...l,
          },
          [
            ...t.map(([d, h]) => a.createElement(d, h)),
            ...(Array.isArray(u) ? u : [u]),
          ],
        ),
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _i = nt('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ai = nt('ChevronRight', [
  ['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }],
]);
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mi = nt('Circle', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
]);
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oi = nt('Moon', [
  ['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }],
]);
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ki = nt('Sun', [
  ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
  ['path', { d: 'M12 2v2', key: 'tus03m' }],
  ['path', { d: 'M12 20v2', key: '1lh1kg' }],
  ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
  ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
  ['path', { d: 'M2 12h2', key: '1t8f8n' }],
  ['path', { d: 'M20 12h2', key: '1q8mjw' }],
  ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
  ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
]);
/**
 * @license lucide-react v0.324.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ii = nt('X', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ]),
  Fi = Si,
  ho = a.forwardRef(({ className: e, ...t }, n) =>
    C.jsxDEV(
      lo,
      {
        ref: n,
        className: Q(
          'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
          e,
        ),
        ...t,
      },
      void 0,
      !1,
      {
        fileName:
          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
        lineNumber: 14,
        columnNumber: 3,
      },
      void 0,
    ),
  );
ho.displayName = lo.displayName;
const Li = Yr(
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    {
      variants: {
        variant: {
          default: 'border bg-background text-foreground',
          destructive:
            'destructive group border-destructive bg-destructive text-destructive-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    },
  ),
  vo = a.forwardRef(({ className: e, variant: t, ...n }, r) =>
    C.jsxDEV(
      uo,
      { ref: r, className: Q(Li({ variant: t }), e), ...n },
      void 0,
      !1,
      {
        fileName:
          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
        lineNumber: 47,
        columnNumber: 5,
      },
      void 0,
    ),
  );
vo.displayName = uo.displayName;
const go = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    po,
    {
      ref: n,
      className: Q(
        'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
        e,
      ),
      ...t,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
      lineNumber: 60,
      columnNumber: 3,
    },
    void 0,
  ),
);
go.displayName = po.displayName;
const yo = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    bo,
    {
      ref: n,
      className: Q(
        'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        e,
      ),
      'toast-close': '',
      ...t,
      children: C.jsxDEV(
        Ii,
        { className: 'h-4 w-4' },
        void 0,
        !1,
        {
          fileName:
            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
          lineNumber: 84,
          columnNumber: 5,
        },
        void 0,
      ),
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
      lineNumber: 75,
      columnNumber: 3,
    },
    void 0,
  ),
);
yo.displayName = bo.displayName;
const wo = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    fo,
    { ref: n, className: Q('text-sm font-semibold', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
      lineNumber: 93,
      columnNumber: 3,
    },
    void 0,
  ),
);
wo.displayName = fo.displayName;
const xo = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    mo,
    { ref: n, className: Q('text-sm opacity-90', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toast.tsx',
      lineNumber: 105,
      columnNumber: 3,
    },
    void 0,
  ),
);
xo.displayName = mo.displayName;
const $o = () => {
  const { toast: e } = Xr();
  return ({
    variant: t,
    title: n,
    description: r,
    actionText: o,
    onClickAction: s,
    altTextAction: i,
  }) => {
    e({
      variant: t,
      title: n || void 0,
      description: r,
      action:
        o && i && s
          ? C.jsxDEV(
              go,
              { onClick: s, altText: i, children: o },
              void 0,
              !1,
              {
                fileName:
                  '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/hooks/use-toast-helper.tsx',
                lineNumber: 42,
                columnNumber: 11,
              },
              void 0,
            )
          : void 0,
    });
  };
};
function Vi() {
  const { data: e, error: t, isPending: n, writeContract: r } = zs(),
    o = $o(),
    s = '0.01',
    { isLoading: i, isSuccess: c } = Fr({ hash: e });
  async function u() {
    r({
      address: '0x015c1236978013b69680AdFa7EB07167BBc8F630',
      abi: Ua,
      functionName: 'requestNft',
      args: [],
      value: Lr(s, 'wei'),
    });
  }
  return (
    a.useEffect(() => {
      c &&
        o({
          variant: 'default',
          description: 'Successful operation',
          title: 'Minting NFT Successful',
          actionText: 'Visit Etherscan',
          altTextAction: 'View Etherscan Transaction',
          onClickAction: () =>
            window.open(`https://sepolia.etherscan.io/tx/${e}`, '_blank'),
        });
    }, [c]),
    a.useEffect(() => {
      t &&
        o({
          variant: 'destructive',
          description: `Error: ${t.shortMessage || t.message}`,
          title: 'Minting NFT Failed',
          actionText: 'Retry',
          altTextAction: 'Retry',
          onClickAction: u,
        });
    }, [t]),
    a.useEffect(() => {
      o({
        variant: 'default',
        description: 'Mint process started',
        title: 'Minting NFT',
        actionText: 'Visit Etherscan',
        altTextAction: 'View Etherscan Transaction',
        onClickAction: () =>
          window.open(`https://sepolia.etherscan.io/tx/${e}`, '_blank'),
      });
    }, [e]),
    C.jsxDEV(
      qe,
      {
        className: 'flex flex-col justify-center items-center p-10',
        children: [
          C.jsxDEV(
            jt,
            {
              className: 'flex-col items-center gap-4',
              children: [
                C.jsxDEV(
                  Ut,
                  { children: 'Mint NFT' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/MintNFT.tsx',
                    lineNumber: 82,
                    columnNumber: 9,
                  },
                  this,
                ),
                C.jsxDEV(
                  kn,
                  { children: 'Mint will cost 0.01 ETH' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/MintNFT.tsx',
                    lineNumber: 83,
                    columnNumber: 9,
                  },
                  this,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/MintNFT.tsx',
              lineNumber: 81,
              columnNumber: 7,
            },
            this,
          ),
          C.jsxDEV(
            Ht,
            {
              onClick: () => u(),
              disabled: n && i,
              variant: 'destructive',
              children: [n ? 'Confirming...' : 'Mint', ' '],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/MintNFT.tsx',
              lineNumber: 85,
              columnNumber: 7,
            },
            this,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/MintNFT.tsx',
        lineNumber: 80,
        columnNumber: 5,
      },
      this,
    )
  );
}
function ji() {
  const e = $o(),
    t = Bs({ config: Ur });
  return (
    a.useEffect(() => {
      console.log('🚀 - Connected Account ', t.address, t.chain),
        t.isConnected &&
          e({
            variant: 'default',
            description: 'Wallet Connection successful',
          });
    }, [t.isConnected]),
    C.jsxDEV(
      qe,
      {
        className: 'flex flex-col justify-center',
        children: [
          C.jsxDEV(
            jt,
            {
              className: 'flex-col items-center gap-4',
              children: [
                C.jsxDEV(
                  Ut,
                  { children: 'Wallet Connect' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
                    lineNumber: 30,
                    columnNumber: 9,
                  },
                  this,
                ),
                C.jsxDEV(
                  kn,
                  { children: 'Connect your wallet' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
                    lineNumber: 31,
                    columnNumber: 9,
                  },
                  this,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
              lineNumber: 29,
              columnNumber: 7,
            },
            this,
          ),
          C.jsxDEV(
            'div',
            {
              className: 'flex-col items-center bg-clip p-10',
              children: C.jsxDEV(
                qe,
                {
                  className: 'flex flex-col justify-center items-center p-10',
                  children: C.jsxDEV(
                    Ks,
                    {},
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
                      lineNumber: 35,
                      columnNumber: 11,
                    },
                    this,
                  ),
                },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
                  lineNumber: 34,
                  columnNumber: 9,
                },
                this,
              ),
            },
            void 0,
            !1,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
              lineNumber: 33,
              columnNumber: 7,
            },
            this,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/features/contract-interactions/WalletConnectCard.tsx',
        lineNumber: 28,
        columnNumber: 5,
      },
      this,
    )
  );
}
function Ui() {
  const { toasts: e } = Xr();
  return C.jsxDEV(
    Fi,
    {
      children: [
        e.map(function ({ id: t, title: n, description: r, action: o, ...s }) {
          return C.jsxDEV(
            vo,
            {
              ...s,
              children: [
                C.jsxDEV(
                  'div',
                  {
                    className: 'grid gap-1',
                    children: [
                      n &&
                        C.jsxDEV(
                          wo,
                          { children: n },
                          void 0,
                          !1,
                          {
                            fileName:
                              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
                            lineNumber: 20,
                            columnNumber: 25,
                          },
                          this,
                        ),
                      r &&
                        C.jsxDEV(
                          xo,
                          { children: r },
                          void 0,
                          !1,
                          {
                            fileName:
                              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
                            lineNumber: 22,
                            columnNumber: 17,
                          },
                          this,
                        ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
                    lineNumber: 19,
                    columnNumber: 13,
                  },
                  this,
                ),
                o,
                C.jsxDEV(
                  yo,
                  {},
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
                    lineNumber: 26,
                    columnNumber: 13,
                  },
                  this,
                ),
              ],
            },
            t,
            !0,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
              lineNumber: 18,
              columnNumber: 11,
            },
            this,
          );
        }),
        C.jsxDEV(
          ho,
          {},
          void 0,
          !1,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
            lineNumber: 30,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/toaster.tsx',
      lineNumber: 15,
      columnNumber: 5,
    },
    this,
  );
}
const Gi = { theme: 'system', setTheme: () => null },
  Eo = a.createContext(Gi);
function Hi({
  children: e,
  defaultTheme: t = 'system',
  storageKey: n = 'vite-ui-theme',
  ...r
}) {
  const [o, s] = a.useState(() => localStorage.getItem(n) || t);
  a.useEffect(() => {
    const c = window.document.documentElement;
    if ((c.classList.remove('light', 'dark'), o === 'system')) {
      const u = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      c.classList.add(u);
      return;
    }
    c.classList.add(o);
  }, [o]);
  const i = {
    theme: o,
    setTheme: (c) => {
      localStorage.setItem(n, c), s(c);
    },
  };
  return C.jsxDEV(
    Eo.Provider,
    { ...r, value: i, children: e },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/theme-provider.tsx',
      lineNumber: 60,
      columnNumber: 5,
    },
    this,
  );
}
const Wi = () => {
    const e = a.useContext(Eo);
    if (e === void 0)
      throw new Error('useTheme must be used within a ThemeProvider');
    return e;
  },
  zi = a.createContext(void 0);
function Co(e) {
  const t = a.useContext(zi);
  return e || t || 'ltr';
}
let dn = 0;
function Bi() {
  a.useEffect(() => {
    var e, t;
    const n = document.querySelectorAll('[data-radix-focus-guard]');
    return (
      document.body.insertAdjacentElement(
        'afterbegin',
        (e = n[0]) !== null && e !== void 0 ? e : gr(),
      ),
      document.body.insertAdjacentElement(
        'beforeend',
        (t = n[1]) !== null && t !== void 0 ? t : gr(),
      ),
      dn++,
      () => {
        dn === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach((r) => r.remove()),
          dn--;
      }
    );
  }, []);
}
function gr() {
  const e = document.createElement('span');
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  );
}
const fn = 'focusScope.autoFocusOnMount',
  mn = 'focusScope.autoFocusOnUnmount',
  yr = { bubbles: !1, cancelable: !0 },
  Ki = a.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: s,
        ...i
      } = e,
      [c, u] = a.useState(null),
      l = ce(o),
      m = ce(s),
      d = a.useRef(null),
      h = se(t, (p) => u(p)),
      b = a.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    a.useEffect(() => {
      if (r) {
        let p = function (x) {
            if (b.paused || !c) return;
            const $ = x.target;
            c.contains($) ? (d.current = $) : _e(d.current, { select: !0 });
          },
          v = function (x) {
            if (b.paused || !c) return;
            const $ = x.relatedTarget;
            $ !== null && (c.contains($) || _e(d.current, { select: !0 }));
          },
          w = function (x) {
            if (document.activeElement === document.body)
              for (const T of x) T.removedNodes.length > 0 && _e(c);
          };
        document.addEventListener('focusin', p),
          document.addEventListener('focusout', v);
        const y = new MutationObserver(w);
        return (
          c && y.observe(c, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', p),
              document.removeEventListener('focusout', v),
              y.disconnect();
          }
        );
      }
    }, [r, c, b.paused]),
      a.useEffect(() => {
        if (c) {
          xr.add(b);
          const p = document.activeElement;
          if (!c.contains(p)) {
            const w = new CustomEvent(fn, yr);
            c.addEventListener(fn, l),
              c.dispatchEvent(w),
              w.defaultPrevented ||
                (Yi(Ji(To(c)), { select: !0 }),
                document.activeElement === p && _e(c));
          }
          return () => {
            c.removeEventListener(fn, l),
              setTimeout(() => {
                const w = new CustomEvent(mn, yr);
                c.addEventListener(mn, m),
                  c.dispatchEvent(w),
                  w.defaultPrevented || _e(p ?? document.body, { select: !0 }),
                  c.removeEventListener(mn, m),
                  xr.remove(b);
              }, 0);
          };
        }
      }, [c, l, m, b]);
    const g = a.useCallback(
      (p) => {
        if ((!n && !r) || b.paused) return;
        const v = p.key === 'Tab' && !p.altKey && !p.ctrlKey && !p.metaKey,
          w = document.activeElement;
        if (v && w) {
          const y = p.currentTarget,
            [x, $] = Xi(y);
          x && $
            ? !p.shiftKey && w === $
              ? (p.preventDefault(), n && _e(x, { select: !0 }))
              : p.shiftKey &&
                w === x &&
                (p.preventDefault(), n && _e($, { select: !0 }))
            : w === y && p.preventDefault();
        }
      },
      [n, r, b.paused],
    );
    return a.createElement(
      ne.div,
      M({ tabIndex: -1 }, i, { ref: h, onKeyDown: g }),
    );
  });
function Yi(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((_e(r, { select: t }), document.activeElement !== n)) return;
}
function Xi(e) {
  const t = To(e),
    n = wr(t, e),
    r = wr(t.reverse(), e);
  return [n, r];
}
function To(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wr(e, t) {
  for (const n of e) if (!qi(n, { upTo: t })) return n;
}
function qi(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === 'none') return !0;
    e = e.parentElement;
  }
  return !1;
}
function Zi(e) {
  return e instanceof HTMLInputElement && 'select' in e;
}
function _e(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Zi(e) && t && e.select();
  }
}
const xr = Qi();
function Qi() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = $r(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = $r(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function $r(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ji(e) {
  return e.filter((t) => t.tagName !== 'A');
}
const ec = Ys.useId || (() => {});
let tc = 0;
function Rn(e) {
  const [t, n] = a.useState(ec());
  return (
    Le(() => {
      e || n((r) => r ?? String(tc++));
    }, [e]),
    e || (t ? `radix-${t}` : '')
  );
}
const nc = ['top', 'right', 'bottom', 'left'],
  Me = Math.min,
  le = Math.max,
  kt = Math.round,
  Et = Math.floor,
  Oe = (e) => ({ x: e, y: e }),
  rc = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  oc = { start: 'end', end: 'start' };
function Sn(e, t, n) {
  return le(e, Me(t, n));
}
function Te(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Ne(e) {
  return e.split('-')[0];
}
function rt(e) {
  return e.split('-')[1];
}
function jn(e) {
  return e === 'x' ? 'y' : 'x';
}
function Un(e) {
  return e === 'y' ? 'height' : 'width';
}
function ot(e) {
  return ['top', 'bottom'].includes(Ne(e)) ? 'y' : 'x';
}
function Gn(e) {
  return jn(ot(e));
}
function sc(e, t, n) {
  n === void 0 && (n = !1);
  const r = rt(e),
    o = Gn(e),
    s = Un(o);
  let i =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top';
  return t.reference[s] > t.floating[s] && (i = It(i)), [i, It(i)];
}
function ac(e) {
  const t = It(e);
  return [Dn(e), t, Dn(t)];
}
function Dn(e) {
  return e.replace(/start|end/g, (t) => oc[t]);
}
function ic(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    s = ['top', 'bottom'],
    i = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o;
    case 'left':
    case 'right':
      return t ? s : i;
    default:
      return [];
  }
}
function cc(e, t, n, r) {
  const o = rt(e);
  let s = ic(Ne(e), n === 'start', r);
  return (
    o && ((s = s.map((i) => i + '-' + o)), t && (s = s.concat(s.map(Dn)))), s
  );
}
function It(e) {
  return e.replace(/left|right|bottom|top/g, (t) => rc[t]);
}
function lc(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function No(e) {
  return typeof e != 'number'
    ? lc(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Ft(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Er(e, t, n) {
  let { reference: r, floating: o } = e;
  const s = ot(t),
    i = Gn(t),
    c = Un(i),
    u = Ne(t),
    l = s === 'y',
    m = r.x + r.width / 2 - o.width / 2,
    d = r.y + r.height / 2 - o.height / 2,
    h = r[c] / 2 - o[c] / 2;
  let b;
  switch (u) {
    case 'top':
      b = { x: m, y: r.y - o.height };
      break;
    case 'bottom':
      b = { x: m, y: r.y + r.height };
      break;
    case 'right':
      b = { x: r.x + r.width, y: d };
      break;
    case 'left':
      b = { x: r.x - o.width, y: d };
      break;
    default:
      b = { x: r.x, y: r.y };
  }
  switch (rt(t)) {
    case 'start':
      b[i] -= h * (n && l ? -1 : 1);
      break;
    case 'end':
      b[i] += h * (n && l ? -1 : 1);
      break;
  }
  return b;
}
const uc = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: s = [],
      platform: i,
    } = n,
    c = s.filter(Boolean),
    u = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let l = await i.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: m, y: d } = Er(l, r, u),
    h = r,
    b = {},
    g = 0;
  for (let p = 0; p < c.length; p++) {
    const { name: v, fn: w } = c[p],
      {
        x: y,
        y: x,
        data: $,
        reset: T,
      } = await w({
        x: m,
        y: d,
        initialPlacement: r,
        placement: h,
        strategy: o,
        middlewareData: b,
        rects: l,
        platform: i,
        elements: { reference: e, floating: t },
      });
    (m = y ?? m),
      (d = x ?? d),
      (b = { ...b, [v]: { ...b[v], ...$ } }),
      T &&
        g <= 50 &&
        (g++,
        typeof T == 'object' &&
          (T.placement && (h = T.placement),
          T.rects &&
            (l =
              T.rects === !0
                ? await i.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : T.rects),
          ({ x: m, y: d } = Er(l, h, u))),
        (p = -1));
  }
  return { x: m, y: d, placement: h, strategy: o, middlewareData: b };
};
async function lt(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: s, rects: i, elements: c, strategy: u } = e,
    {
      boundary: l = 'clippingAncestors',
      rootBoundary: m = 'viewport',
      elementContext: d = 'floating',
      altBoundary: h = !1,
      padding: b = 0,
    } = Te(t, e),
    g = No(b),
    v = c[h ? (d === 'floating' ? 'reference' : 'floating') : d],
    w = Ft(
      await s.getClippingRect({
        element:
          (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null ||
          n
            ? v
            : v.contextElement ||
              (await (s.getDocumentElement == null
                ? void 0
                : s.getDocumentElement(c.floating))),
        boundary: l,
        rootBoundary: m,
        strategy: u,
      }),
    ),
    y = d === 'floating' ? { ...i.floating, x: r, y: o } : i.reference,
    x = await (s.getOffsetParent == null
      ? void 0
      : s.getOffsetParent(c.floating)),
    $ = (await (s.isElement == null ? void 0 : s.isElement(x)))
      ? (await (s.getScale == null ? void 0 : s.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    T = Ft(
      s.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: y,
            offsetParent: x,
            strategy: u,
          })
        : y,
    );
  return {
    top: (w.top - T.top + g.top) / $.y,
    bottom: (T.bottom - w.bottom + g.bottom) / $.y,
    left: (w.left - T.left + g.left) / $.x,
    right: (T.right - w.right + g.right) / $.x,
  };
}
const dc = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: s,
          platform: i,
          elements: c,
          middlewareData: u,
        } = t,
        { element: l, padding: m = 0 } = Te(e, t) || {};
      if (l == null) return {};
      const d = No(m),
        h = { x: n, y: r },
        b = Gn(o),
        g = Un(b),
        p = await i.getDimensions(l),
        v = b === 'y',
        w = v ? 'top' : 'left',
        y = v ? 'bottom' : 'right',
        x = v ? 'clientHeight' : 'clientWidth',
        $ = s.reference[g] + s.reference[b] - h[b] - s.floating[g],
        T = h[b] - s.reference[b],
        _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
      let S = _ ? _[x] : 0;
      (!S || !(await (i.isElement == null ? void 0 : i.isElement(_)))) &&
        (S = c.floating[x] || s.floating[g]);
      const A = $ / 2 - T / 2,
        I = S / 2 - p[g] / 2 - 1,
        H = Me(d[w], I),
        z = Me(d[y], I),
        D = H,
        W = S - p[g] - z,
        N = S / 2 - p[g] / 2 + A,
        O = Sn(D, N, W),
        U =
          !u.arrow &&
          rt(o) != null &&
          N !== O &&
          s.reference[g] / 2 - (N < D ? H : z) - p[g] / 2 < 0,
        L = U ? (N < D ? N - D : N - W) : 0;
      return {
        [b]: h[b] + L,
        data: {
          [b]: O,
          centerOffset: N - O - L,
          ...(U && { alignmentOffset: L }),
        },
        reset: U,
      };
    },
  }),
  fc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: s,
              rects: i,
              initialPlacement: c,
              platform: u,
              elements: l,
            } = t,
            {
              mainAxis: m = !0,
              crossAxis: d = !0,
              fallbackPlacements: h,
              fallbackStrategy: b = 'bestFit',
              fallbackAxisSideDirection: g = 'none',
              flipAlignment: p = !0,
              ...v
            } = Te(e, t);
          if ((n = s.arrow) != null && n.alignmentOffset) return {};
          const w = Ne(o),
            y = Ne(c) === c,
            x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)),
            $ = h || (y || !p ? [It(c)] : ac(c));
          !h && g !== 'none' && $.push(...cc(c, p, g, x));
          const T = [c, ...$],
            _ = await lt(t, v),
            S = [];
          let A = ((r = s.flip) == null ? void 0 : r.overflows) || [];
          if ((m && S.push(_[w]), d)) {
            const D = sc(o, i, x);
            S.push(_[D[0]], _[D[1]]);
          }
          if (
            ((A = [...A, { placement: o, overflows: S }]),
            !S.every((D) => D <= 0))
          ) {
            var I, H;
            const D = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1,
              W = T[D];
            if (W)
              return {
                data: { index: D, overflows: A },
                reset: { placement: W },
              };
            let N =
              (H = A.filter((O) => O.overflows[0] <= 0).sort(
                (O, U) => O.overflows[1] - U.overflows[1],
              )[0]) == null
                ? void 0
                : H.placement;
            if (!N)
              switch (b) {
                case 'bestFit': {
                  var z;
                  const O =
                    (z = A.map((U) => [
                      U.placement,
                      U.overflows
                        .filter((L) => L > 0)
                        .reduce((L, K) => L + K, 0),
                    ]).sort((U, L) => U[1] - L[1])[0]) == null
                      ? void 0
                      : z[0];
                  O && (N = O);
                  break;
                }
                case 'initialPlacement':
                  N = c;
                  break;
              }
            if (o !== N) return { reset: { placement: N } };
          }
          return {};
        },
      }
    );
  };
function Cr(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Tr(e) {
  return nc.some((t) => e[t] >= 0);
}
const mc = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = 'referenceHidden', ...o } = Te(e, t);
        switch (r) {
          case 'referenceHidden': {
            const s = await lt(t, { ...o, elementContext: 'reference' }),
              i = Cr(s, n.reference);
            return {
              data: { referenceHiddenOffsets: i, referenceHidden: Tr(i) },
            };
          }
          case 'escaped': {
            const s = await lt(t, { ...o, altBoundary: !0 }),
              i = Cr(s, n.floating);
            return { data: { escapedOffsets: i, escaped: Tr(i) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function pc(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    i = Ne(n),
    c = rt(n),
    u = ot(n) === 'y',
    l = ['left', 'top'].includes(i) ? -1 : 1,
    m = s && u ? -1 : 1,
    d = Te(t, e);
  let {
    mainAxis: h,
    crossAxis: b,
    alignmentAxis: g,
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
  return (
    c && typeof g == 'number' && (b = c === 'end' ? g * -1 : g),
    u ? { x: b * m, y: h * l } : { x: h * l, y: b * m }
  );
}
const bc = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: s, placement: i, middlewareData: c } = t,
            u = await pc(t, e);
          return i === ((n = c.offset) == null ? void 0 : n.placement) &&
            (r = c.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + u.x, y: s + u.y, data: { ...u, placement: i } };
        },
      }
    );
  },
  hc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: s = !0,
              crossAxis: i = !1,
              limiter: c = {
                fn: (v) => {
                  let { x: w, y } = v;
                  return { x: w, y };
                },
              },
              ...u
            } = Te(e, t),
            l = { x: n, y: r },
            m = await lt(t, u),
            d = ot(Ne(o)),
            h = jn(d);
          let b = l[h],
            g = l[d];
          if (s) {
            const v = h === 'y' ? 'top' : 'left',
              w = h === 'y' ? 'bottom' : 'right',
              y = b + m[v],
              x = b - m[w];
            b = Sn(y, b, x);
          }
          if (i) {
            const v = d === 'y' ? 'top' : 'left',
              w = d === 'y' ? 'bottom' : 'right',
              y = g + m[v],
              x = g - m[w];
            g = Sn(y, g, x);
          }
          const p = c.fn({ ...t, [h]: b, [d]: g });
          return { ...p, data: { x: p.x - n, y: p.y - r } };
        },
      }
    );
  },
  vc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: s, middlewareData: i } = t,
            { offset: c = 0, mainAxis: u = !0, crossAxis: l = !0 } = Te(e, t),
            m = { x: n, y: r },
            d = ot(o),
            h = jn(d);
          let b = m[h],
            g = m[d];
          const p = Te(c, t),
            v =
              typeof p == 'number'
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (u) {
            const x = h === 'y' ? 'height' : 'width',
              $ = s.reference[h] - s.floating[x] + v.mainAxis,
              T = s.reference[h] + s.reference[x] - v.mainAxis;
            b < $ ? (b = $) : b > T && (b = T);
          }
          if (l) {
            var w, y;
            const x = h === 'y' ? 'width' : 'height',
              $ = ['top', 'left'].includes(Ne(o)),
              T =
                s.reference[d] -
                s.floating[x] +
                (($ && ((w = i.offset) == null ? void 0 : w[d])) || 0) +
                ($ ? 0 : v.crossAxis),
              _ =
                s.reference[d] +
                s.reference[x] +
                ($ ? 0 : ((y = i.offset) == null ? void 0 : y[d]) || 0) -
                ($ ? v.crossAxis : 0);
            g < T ? (g = T) : g > _ && (g = _);
          }
          return { [h]: b, [d]: g };
        },
      }
    );
  },
  gc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: s } = t,
            { apply: i = () => {}, ...c } = Te(e, t),
            u = await lt(t, c),
            l = Ne(n),
            m = rt(n),
            d = ot(n) === 'y',
            { width: h, height: b } = r.floating;
          let g, p;
          l === 'top' || l === 'bottom'
            ? ((g = l),
              (p =
                m ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(s.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((p = l), (g = m === 'end' ? 'top' : 'bottom'));
          const v = b - u[g],
            w = h - u[p],
            y = !t.middlewareData.shift;
          let x = v,
            $ = w;
          if (d) {
            const _ = h - u.left - u.right;
            $ = m || y ? Me(w, _) : _;
          } else {
            const _ = b - u.top - u.bottom;
            x = m || y ? Me(v, _) : _;
          }
          if (y && !m) {
            const _ = le(u.left, 0),
              S = le(u.right, 0),
              A = le(u.top, 0),
              I = le(u.bottom, 0);
            d
              ? ($ = h - 2 * (_ !== 0 || S !== 0 ? _ + S : le(u.left, u.right)))
              : (x =
                  b - 2 * (A !== 0 || I !== 0 ? A + I : le(u.top, u.bottom)));
          }
          await i({ ...t, availableWidth: $, availableHeight: x });
          const T = await o.getDimensions(s.floating);
          return h !== T.width || b !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ke(e) {
  return Ro(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function ue(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Se(e) {
  var t;
  return (t = (Ro(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Ro(e) {
  return e instanceof Node || e instanceof ue(e).Node;
}
function Re(e) {
  return e instanceof Element || e instanceof ue(e).Element;
}
function ye(e) {
  return e instanceof HTMLElement || e instanceof ue(e).HTMLElement;
}
function Nr(e) {
  return typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof ue(e).ShadowRoot;
}
function pt(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = me(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(o)
  );
}
function yc(e) {
  return ['table', 'td', 'th'].includes(ke(e));
}
function Hn(e) {
  const t = Wn(),
    n = me(e);
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((r) =>
      (n.willChange || '').includes(r),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((r) =>
      (n.contain || '').includes(r),
    )
  );
}
function wc(e) {
  let t = Qe(e);
  for (; ye(t) && !Bt(t); ) {
    if (Hn(t)) return t;
    t = Qe(t);
  }
  return null;
}
function Wn() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function Bt(e) {
  return ['html', 'body', '#document'].includes(ke(e));
}
function me(e) {
  return ue(e).getComputedStyle(e);
}
function Kt(e) {
  return Re(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Qe(e) {
  if (ke(e) === 'html') return e;
  const t = e.assignedSlot || e.parentNode || (Nr(e) && e.host) || Se(e);
  return Nr(t) ? t.host : t;
}
function So(e) {
  const t = Qe(e);
  return Bt(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : ye(t) && pt(t)
      ? t
      : So(t);
}
function ut(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = So(e),
    s = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = ue(o);
  return s
    ? t.concat(
        i,
        i.visualViewport || [],
        pt(o) ? o : [],
        i.frameElement && n ? ut(i.frameElement) : [],
      )
    : t.concat(o, ut(o, [], n));
}
function Do(e) {
  const t = me(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = ye(e),
    s = o ? e.offsetWidth : n,
    i = o ? e.offsetHeight : r,
    c = kt(n) !== s || kt(r) !== i;
  return c && ((n = s), (r = i)), { width: n, height: r, $: c };
}
function zn(e) {
  return Re(e) ? e : e.contextElement;
}
function Xe(e) {
  const t = zn(e);
  if (!ye(t)) return Oe(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: s } = Do(t);
  let i = (s ? kt(n.width) : n.width) / r,
    c = (s ? kt(n.height) : n.height) / o;
  return (
    (!i || !Number.isFinite(i)) && (i = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: i, y: c }
  );
}
const xc = Oe(0);
function Po(e) {
  const t = ue(e);
  return !Wn() || !t.visualViewport
    ? xc
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function $c(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ue(e)) ? !1 : t;
}
function Ve(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    s = zn(e);
  let i = Oe(1);
  t && (r ? Re(r) && (i = Xe(r)) : (i = Xe(e)));
  const c = $c(s, n, r) ? Po(s) : Oe(0);
  let u = (o.left + c.x) / i.x,
    l = (o.top + c.y) / i.y,
    m = o.width / i.x,
    d = o.height / i.y;
  if (s) {
    const h = ue(s),
      b = r && Re(r) ? ue(r) : r;
    let g = h.frameElement;
    for (; g && r && b !== h; ) {
      const p = Xe(g),
        v = g.getBoundingClientRect(),
        w = me(g),
        y = v.left + (g.clientLeft + parseFloat(w.paddingLeft)) * p.x,
        x = v.top + (g.clientTop + parseFloat(w.paddingTop)) * p.y;
      (u *= p.x),
        (l *= p.y),
        (m *= p.x),
        (d *= p.y),
        (u += y),
        (l += x),
        (g = ue(g).frameElement);
    }
  }
  return Ft({ width: m, height: d, x: u, y: l });
}
const Ec = [':popover-open', ':modal'];
function _o(e) {
  return Ec.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Cc(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const s = o === 'fixed',
    i = Se(r),
    c = t ? _o(t.floating) : !1;
  if (r === i || (c && s)) return n;
  let u = { scrollLeft: 0, scrollTop: 0 },
    l = Oe(1);
  const m = Oe(0),
    d = ye(r);
  if (
    (d || (!d && !s)) &&
    ((ke(r) !== 'body' || pt(i)) && (u = Kt(r)), ye(r))
  ) {
    const h = Ve(r);
    (l = Xe(r)), (m.x = h.x + r.clientLeft), (m.y = h.y + r.clientTop);
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + m.x,
    y: n.y * l.y - u.scrollTop * l.y + m.y,
  };
}
function Tc(e) {
  return Array.from(e.getClientRects());
}
function Ao(e) {
  return Ve(Se(e)).left + Kt(e).scrollLeft;
}
function Nc(e) {
  const t = Se(e),
    n = Kt(e),
    r = e.ownerDocument.body,
    o = le(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    s = le(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + Ao(e);
  const c = -n.scrollTop;
  return (
    me(r).direction === 'rtl' && (i += le(t.clientWidth, r.clientWidth) - o),
    { width: o, height: s, x: i, y: c }
  );
}
function Rc(e, t) {
  const n = ue(e),
    r = Se(e),
    o = n.visualViewport;
  let s = r.clientWidth,
    i = r.clientHeight,
    c = 0,
    u = 0;
  if (o) {
    (s = o.width), (i = o.height);
    const l = Wn();
    (!l || (l && t === 'fixed')) && ((c = o.offsetLeft), (u = o.offsetTop));
  }
  return { width: s, height: i, x: c, y: u };
}
function Sc(e, t) {
  const n = Ve(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    s = ye(e) ? Xe(e) : Oe(1),
    i = e.clientWidth * s.x,
    c = e.clientHeight * s.y,
    u = o * s.x,
    l = r * s.y;
  return { width: i, height: c, x: u, y: l };
}
function Rr(e, t, n) {
  let r;
  if (t === 'viewport') r = Rc(e, n);
  else if (t === 'document') r = Nc(Se(e));
  else if (Re(t)) r = Sc(t, n);
  else {
    const o = Po(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return Ft(r);
}
function Mo(e, t) {
  const n = Qe(e);
  return n === t || !Re(n) || Bt(n)
    ? !1
    : me(n).position === 'fixed' || Mo(n, t);
}
function Dc(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ut(e, [], !1).filter((c) => Re(c) && ke(c) !== 'body'),
    o = null;
  const s = me(e).position === 'fixed';
  let i = s ? Qe(e) : e;
  for (; Re(i) && !Bt(i); ) {
    const c = me(i),
      u = Hn(i);
    !u && c.position === 'fixed' && (o = null),
      (
        s
          ? !u && !o
          : (!u &&
              c.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (pt(i) && !u && Mo(e, i))
      )
        ? (r = r.filter((m) => m !== i))
        : (o = c),
      (i = Qe(i));
  }
  return t.set(e, r), r;
}
function Pc(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const i = [...(n === 'clippingAncestors' ? Dc(t, this._c) : [].concat(n)), r],
    c = i[0],
    u = i.reduce(
      (l, m) => {
        const d = Rr(t, m, o);
        return (
          (l.top = le(d.top, l.top)),
          (l.right = Me(d.right, l.right)),
          (l.bottom = Me(d.bottom, l.bottom)),
          (l.left = le(d.left, l.left)),
          l
        );
      },
      Rr(t, c, o),
    );
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top,
  };
}
function _c(e) {
  const { width: t, height: n } = Do(e);
  return { width: t, height: n };
}
function Ac(e, t, n) {
  const r = ye(t),
    o = Se(t),
    s = n === 'fixed',
    i = Ve(e, !0, s, t);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const u = Oe(0);
  if (r || (!r && !s))
    if (((ke(t) !== 'body' || pt(o)) && (c = Kt(t)), r)) {
      const d = Ve(t, !0, s, t);
      (u.x = d.x + t.clientLeft), (u.y = d.y + t.clientTop);
    } else o && (u.x = Ao(o));
  const l = i.left + c.scrollLeft - u.x,
    m = i.top + c.scrollTop - u.y;
  return { x: l, y: m, width: i.width, height: i.height };
}
function Sr(e, t) {
  return !ye(e) || me(e).position === 'fixed'
    ? null
    : t
      ? t(e)
      : e.offsetParent;
}
function Oo(e, t) {
  const n = ue(e);
  if (!ye(e) || _o(e)) return n;
  let r = Sr(e, t);
  for (; r && yc(r) && me(r).position === 'static'; ) r = Sr(r, t);
  return r &&
    (ke(r) === 'html' ||
      (ke(r) === 'body' && me(r).position === 'static' && !Hn(r)))
    ? n
    : r || wc(e) || n;
}
const Mc = async function (e) {
  const t = this.getOffsetParent || Oo,
    n = this.getDimensions;
  return {
    reference: Ac(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, ...(await n(e.floating)) },
  };
};
function Oc(e) {
  return me(e).direction === 'rtl';
}
const kc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Cc,
  getDocumentElement: Se,
  getClippingRect: Pc,
  getOffsetParent: Oo,
  getElementRects: Mc,
  getClientRects: Tc,
  getDimensions: _c,
  getScale: Xe,
  isElement: Re,
  isRTL: Oc,
};
function Ic(e, t) {
  let n = null,
    r;
  const o = Se(e);
  function s() {
    var c;
    clearTimeout(r), (c = n) == null || c.disconnect(), (n = null);
  }
  function i(c, u) {
    c === void 0 && (c = !1), u === void 0 && (u = 1), s();
    const { left: l, top: m, width: d, height: h } = e.getBoundingClientRect();
    if ((c || t(), !d || !h)) return;
    const b = Et(m),
      g = Et(o.clientWidth - (l + d)),
      p = Et(o.clientHeight - (m + h)),
      v = Et(l),
      y = {
        rootMargin: -b + 'px ' + -g + 'px ' + -p + 'px ' + -v + 'px',
        threshold: le(0, Me(1, u)) || 1,
      };
    let x = !0;
    function $(T) {
      const _ = T[0].intersectionRatio;
      if (_ !== u) {
        if (!x) return i();
        _
          ? i(!1, _)
          : (r = setTimeout(() => {
              i(!1, 1e-7);
            }, 100));
      }
      x = !1;
    }
    try {
      n = new IntersectionObserver($, { ...y, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver($, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Fc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: s = !0,
      elementResize: i = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: u = !1,
    } = r,
    l = zn(e),
    m = o || s ? [...(l ? ut(l) : []), ...ut(t)] : [];
  m.forEach((w) => {
    o && w.addEventListener('scroll', n, { passive: !0 }),
      s && w.addEventListener('resize', n);
  });
  const d = l && c ? Ic(l, n) : null;
  let h = -1,
    b = null;
  i &&
    ((b = new ResizeObserver((w) => {
      let [y] = w;
      y &&
        y.target === l &&
        b &&
        (b.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          var x;
          (x = b) == null || x.observe(t);
        }))),
        n();
    })),
    l && !u && b.observe(l),
    b.observe(t));
  let g,
    p = u ? Ve(e) : null;
  u && v();
  function v() {
    const w = Ve(e);
    p &&
      (w.x !== p.x ||
        w.y !== p.y ||
        w.width !== p.width ||
        w.height !== p.height) &&
      n(),
      (p = w),
      (g = requestAnimationFrame(v));
  }
  return (
    n(),
    () => {
      var w;
      m.forEach((y) => {
        o && y.removeEventListener('scroll', n),
          s && y.removeEventListener('resize', n);
      }),
        d == null || d(),
        (w = b) == null || w.disconnect(),
        (b = null),
        u && cancelAnimationFrame(g);
    }
  );
}
const Lc = hc,
  Vc = fc,
  jc = gc,
  Uc = mc,
  Dr = dc,
  Gc = vc,
  Hc = (e, t, n) => {
    const r = new Map(),
      o = { platform: kc, ...n },
      s = { ...o.platform, _c: r };
    return uc(e, t, { ...o, platform: s });
  },
  Wc = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current');
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Dr({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Dr({ element: r, padding: o }).fn(n)
            : {};
      },
    };
  };
var _t = typeof document < 'u' ? a.useLayoutEffect : a.useEffect;
function Lt(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == 'function' && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!Lt(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const s = o[r];
      if (!(s === '_owner' && e.$$typeof) && !Lt(e[s], t[s])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function ko(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Pr(e, t) {
  const n = ko(e);
  return Math.round(t * n) / n;
}
function _r(e) {
  const t = a.useRef(e);
  return (
    _t(() => {
      t.current = e;
    }),
    t
  );
}
function zc(e) {
  e === void 0 && (e = {});
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: s, floating: i } = {},
      transform: c = !0,
      whileElementsMounted: u,
      open: l,
    } = e,
    [m, d] = a.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [h, b] = a.useState(r);
  Lt(h, r) || b(r);
  const [g, p] = a.useState(null),
    [v, w] = a.useState(null),
    y = a.useCallback((L) => {
      L !== _.current && ((_.current = L), p(L));
    }, []),
    x = a.useCallback((L) => {
      L !== S.current && ((S.current = L), w(L));
    }, []),
    $ = s || g,
    T = i || v,
    _ = a.useRef(null),
    S = a.useRef(null),
    A = a.useRef(m),
    I = u != null,
    H = _r(u),
    z = _r(o),
    D = a.useCallback(() => {
      if (!_.current || !S.current) return;
      const L = { placement: t, strategy: n, middleware: h };
      z.current && (L.platform = z.current),
        Hc(_.current, S.current, L).then((K) => {
          const P = { ...K, isPositioned: !0 };
          W.current &&
            !Lt(A.current, P) &&
            ((A.current = P),
            mt.flushSync(() => {
              d(P);
            }));
        });
    }, [h, t, n, z]);
  _t(() => {
    l === !1 &&
      A.current.isPositioned &&
      ((A.current.isPositioned = !1), d((L) => ({ ...L, isPositioned: !1 })));
  }, [l]);
  const W = a.useRef(!1);
  _t(
    () => (
      (W.current = !0),
      () => {
        W.current = !1;
      }
    ),
    [],
  ),
    _t(() => {
      if (($ && (_.current = $), T && (S.current = T), $ && T)) {
        if (H.current) return H.current($, T, D);
        D();
      }
    }, [$, T, D, H, I]);
  const N = a.useMemo(
      () => ({ reference: _, floating: S, setReference: y, setFloating: x }),
      [y, x],
    ),
    O = a.useMemo(() => ({ reference: $, floating: T }), [$, T]),
    U = a.useMemo(() => {
      const L = { position: n, left: 0, top: 0 };
      if (!O.floating) return L;
      const K = Pr(O.floating, m.x),
        P = Pr(O.floating, m.y);
      return c
        ? {
            ...L,
            transform: 'translate(' + K + 'px, ' + P + 'px)',
            ...(ko(O.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: K, top: P };
    }, [n, c, O.floating, m.x, m.y]);
  return a.useMemo(
    () => ({ ...m, update: D, refs: N, elements: O, floatingStyles: U }),
    [m, D, N, O, U],
  );
}
function Bc(e) {
  const [t, n] = a.useState(void 0);
  return (
    Le(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let i, c;
          if ('borderBoxSize' in s) {
            const u = s.borderBoxSize,
              l = Array.isArray(u) ? u[0] : u;
            (i = l.inlineSize), (c = l.blockSize);
          } else (i = e.offsetWidth), (c = e.offsetHeight);
          n({ width: i, height: c });
        });
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
const Io = 'Popper',
  [Fo, Lo] = et(Io),
  [Kc, Vo] = Fo(Io),
  Yc = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = a.useState(null);
    return a.createElement(Kc, { scope: t, anchor: r, onAnchorChange: o }, n);
  },
  Xc = 'PopperAnchor',
  qc = a.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      s = Vo(Xc, n),
      i = a.useRef(null),
      c = se(t, i);
    return (
      a.useEffect(() => {
        s.onAnchorChange((r == null ? void 0 : r.current) || i.current);
      }),
      r ? null : a.createElement(ne.div, M({}, o, { ref: c }))
    );
  }),
  jo = 'PopperContent',
  [Zc, Td] = Fo(jo),
  Qc = a.forwardRef((e, t) => {
    var n, r, o, s, i, c, u, l;
    const {
        __scopePopper: m,
        side: d = 'bottom',
        sideOffset: h = 0,
        align: b = 'center',
        alignOffset: g = 0,
        arrowPadding: p = 0,
        avoidCollisions: v = !0,
        collisionBoundary: w = [],
        collisionPadding: y = 0,
        sticky: x = 'partial',
        hideWhenDetached: $ = !1,
        updatePositionStrategy: T = 'optimized',
        onPlaced: _,
        ...S
      } = e,
      A = Vo(jo, m),
      [I, H] = a.useState(null),
      z = se(t, (ve) => H(ve)),
      [D, W] = a.useState(null),
      N = Bc(D),
      O = (n = N == null ? void 0 : N.width) !== null && n !== void 0 ? n : 0,
      U = (r = N == null ? void 0 : N.height) !== null && r !== void 0 ? r : 0,
      L = d + (b !== 'center' ? '-' + b : ''),
      K =
        typeof y == 'number'
          ? y
          : { top: 0, right: 0, bottom: 0, left: 0, ...y },
      P = Array.isArray(w) ? w : [w],
      Y = P.length > 0,
      X = { padding: K, boundary: P.filter(Jc), altBoundary: Y },
      {
        refs: J,
        floatingStyles: oe,
        placement: he,
        isPositioned: we,
        middlewareData: ae,
      } = zc({
        strategy: 'fixed',
        placement: L,
        whileElementsMounted: (...ve) =>
          Fc(...ve, { animationFrame: T === 'always' }),
        elements: { reference: A.anchor },
        middleware: [
          bc({ mainAxis: h + U, alignmentAxis: g }),
          v &&
            Lc({
              mainAxis: !0,
              crossAxis: !1,
              limiter: x === 'partial' ? Gc() : void 0,
              ...X,
            }),
          v && Vc({ ...X }),
          jc({
            ...X,
            apply: ({
              elements: ve,
              rects: Ie,
              availableWidth: vt,
              availableHeight: gt,
            }) => {
              const { width: Ge, height: Jt } = Ie.reference,
                He = ve.floating.style;
              He.setProperty('--radix-popper-available-width', `${vt}px`),
                He.setProperty('--radix-popper-available-height', `${gt}px`),
                He.setProperty('--radix-popper-anchor-width', `${Ge}px`),
                He.setProperty('--radix-popper-anchor-height', `${Jt}px`);
            },
          }),
          D && Wc({ element: D, padding: p }),
          el({ arrowWidth: O, arrowHeight: U }),
          $ && Uc({ strategy: 'referenceHidden', ...X }),
        ],
      }),
      [de, xe] = Uo(he),
      re = ce(_);
    Le(() => {
      we && (re == null || re());
    }, [we, re]);
    const $e = (o = ae.arrow) === null || o === void 0 ? void 0 : o.x,
      qt = (s = ae.arrow) === null || s === void 0 ? void 0 : s.y,
      ht =
        ((i = ae.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !==
        0,
      [Zt, Qt] = a.useState();
    return (
      Le(() => {
        I && Qt(window.getComputedStyle(I).zIndex);
      }, [I]),
      a.createElement(
        'div',
        {
          ref: J.setFloating,
          'data-radix-popper-content-wrapper': '',
          style: {
            ...oe,
            transform: we ? oe.transform : 'translate(0, -200%)',
            minWidth: 'max-content',
            zIndex: Zt,
            '--radix-popper-transform-origin': [
              (c = ae.transformOrigin) === null || c === void 0 ? void 0 : c.x,
              (u = ae.transformOrigin) === null || u === void 0 ? void 0 : u.y,
            ].join(' '),
          },
          dir: e.dir,
        },
        a.createElement(
          Zc,
          {
            scope: m,
            placedSide: de,
            onArrowChange: W,
            arrowX: $e,
            arrowY: qt,
            shouldHideArrow: ht,
          },
          a.createElement(
            ne.div,
            M({ 'data-side': de, 'data-align': xe }, S, {
              ref: z,
              style: {
                ...S.style,
                animation: we ? void 0 : 'none',
                opacity:
                  (l = ae.hide) !== null && l !== void 0 && l.referenceHidden
                    ? 0
                    : void 0,
              },
            }),
          ),
        ),
      )
    );
  });
function Jc(e) {
  return e !== null;
}
const el = (e) => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var n, r, o, s, i;
    const { placement: c, rects: u, middlewareData: l } = t,
      d =
        ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !==
        0,
      h = d ? 0 : e.arrowWidth,
      b = d ? 0 : e.arrowHeight,
      [g, p] = Uo(c),
      v = { start: '0%', center: '50%', end: '100%' }[p],
      w =
        ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null &&
        r !== void 0
          ? r
          : 0) +
        h / 2,
      y =
        ((s = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null &&
        s !== void 0
          ? s
          : 0) +
        b / 2;
    let x = '',
      $ = '';
    return (
      g === 'bottom'
        ? ((x = d ? v : `${w}px`), ($ = `${-b}px`))
        : g === 'top'
          ? ((x = d ? v : `${w}px`), ($ = `${u.floating.height + b}px`))
          : g === 'right'
            ? ((x = `${-b}px`), ($ = d ? v : `${y}px`))
            : g === 'left' &&
              ((x = `${u.floating.width + b}px`), ($ = d ? v : `${y}px`)),
      { data: { x, y: $ } }
    );
  },
});
function Uo(e) {
  const [t, n = 'center'] = e.split('-');
  return [t, n];
}
const tl = Yc,
  nl = qc,
  rl = Qc,
  pn = 'rovingFocusGroup.onEntryFocus',
  ol = { bubbles: !1, cancelable: !0 },
  Bn = 'RovingFocusGroup',
  [Pn, Go, sl] = In(Bn),
  [al, Ho] = et(Bn, [sl]),
  [il, cl] = al(Bn),
  ll = a.forwardRef((e, t) =>
    a.createElement(
      Pn.Provider,
      { scope: e.__scopeRovingFocusGroup },
      a.createElement(
        Pn.Slot,
        { scope: e.__scopeRovingFocusGroup },
        a.createElement(ul, M({}, e, { ref: t })),
      ),
    ),
  ),
  ul = a.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: s,
        currentTabStopId: i,
        defaultCurrentTabStopId: c,
        onCurrentTabStopIdChange: u,
        onEntryFocus: l,
        ...m
      } = e,
      d = a.useRef(null),
      h = se(t, d),
      b = Co(s),
      [g = null, p] = Ln({ prop: i, defaultProp: c, onChange: u }),
      [v, w] = a.useState(!1),
      y = ce(l),
      x = Go(n),
      $ = a.useRef(!1),
      [T, _] = a.useState(0);
    return (
      a.useEffect(() => {
        const S = d.current;
        if (S)
          return S.addEventListener(pn, y), () => S.removeEventListener(pn, y);
      }, [y]),
      a.createElement(
        il,
        {
          scope: n,
          orientation: r,
          dir: b,
          loop: o,
          currentTabStopId: g,
          onItemFocus: a.useCallback((S) => p(S), [p]),
          onItemShiftTab: a.useCallback(() => w(!0), []),
          onFocusableItemAdd: a.useCallback(() => _((S) => S + 1), []),
          onFocusableItemRemove: a.useCallback(() => _((S) => S - 1), []),
        },
        a.createElement(
          ne.div,
          M({ tabIndex: v || T === 0 ? -1 : 0, 'data-orientation': r }, m, {
            ref: h,
            style: { outline: 'none', ...e.style },
            onMouseDown: F(e.onMouseDown, () => {
              $.current = !0;
            }),
            onFocus: F(e.onFocus, (S) => {
              const A = !$.current;
              if (S.target === S.currentTarget && A && !v) {
                const I = new CustomEvent(pn, ol);
                if ((S.currentTarget.dispatchEvent(I), !I.defaultPrevented)) {
                  const H = x().filter((O) => O.focusable),
                    z = H.find((O) => O.active),
                    D = H.find((O) => O.id === g),
                    N = [z, D, ...H].filter(Boolean).map((O) => O.ref.current);
                  Wo(N);
                }
              }
              $.current = !1;
            }),
            onBlur: F(e.onBlur, () => w(!1)),
          }),
        ),
      )
    );
  }),
  dl = 'RovingFocusGroupItem',
  fl = a.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: s,
        ...i
      } = e,
      c = Rn(),
      u = s || c,
      l = cl(dl, n),
      m = l.currentTabStopId === u,
      d = Go(n),
      { onFocusableItemAdd: h, onFocusableItemRemove: b } = l;
    return (
      a.useEffect(() => {
        if (r) return h(), () => b();
      }, [r, h, b]),
      a.createElement(
        Pn.ItemSlot,
        { scope: n, id: u, focusable: r, active: o },
        a.createElement(
          ne.span,
          M({ tabIndex: m ? 0 : -1, 'data-orientation': l.orientation }, i, {
            ref: t,
            onMouseDown: F(e.onMouseDown, (g) => {
              r ? l.onItemFocus(u) : g.preventDefault();
            }),
            onFocus: F(e.onFocus, () => l.onItemFocus(u)),
            onKeyDown: F(e.onKeyDown, (g) => {
              if (g.key === 'Tab' && g.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const p = bl(g, l.orientation, l.dir);
              if (p !== void 0) {
                g.preventDefault();
                let w = d()
                  .filter((y) => y.focusable)
                  .map((y) => y.ref.current);
                if (p === 'last') w.reverse();
                else if (p === 'prev' || p === 'next') {
                  p === 'prev' && w.reverse();
                  const y = w.indexOf(g.currentTarget);
                  w = l.loop ? hl(w, y + 1) : w.slice(y + 1);
                }
                setTimeout(() => Wo(w));
              }
            }),
          }),
        ),
      )
    );
  }),
  ml = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last',
  };
function pl(e, t) {
  return t !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e;
}
function bl(e, t, n) {
  const r = pl(e.key, n);
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(r)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(r))
  )
    return ml[r];
}
function Wo(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hl(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const vl = ll,
  gl = fl;
var yl = function (e) {
    if (typeof document > 'u') return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Be = new WeakMap(),
  Ct = new WeakMap(),
  Tt = {},
  bn = 0,
  zo = function (e) {
    return e && (e.host || zo(e.parentNode));
  },
  wl = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = zo(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  xl = function (e, t, n, r) {
    var o = wl(t, Array.isArray(e) ? e : [e]);
    Tt[n] || (Tt[n] = new WeakMap());
    var s = Tt[n],
      i = [],
      c = new Set(),
      u = new Set(o),
      l = function (d) {
        !d || c.has(d) || (c.add(d), l(d.parentNode));
      };
    o.forEach(l);
    var m = function (d) {
      !d ||
        u.has(d) ||
        Array.prototype.forEach.call(d.children, function (h) {
          if (c.has(h)) m(h);
          else {
            var b = h.getAttribute(r),
              g = b !== null && b !== 'false',
              p = (Be.get(h) || 0) + 1,
              v = (s.get(h) || 0) + 1;
            Be.set(h, p),
              s.set(h, v),
              i.push(h),
              p === 1 && g && Ct.set(h, !0),
              v === 1 && h.setAttribute(n, 'true'),
              g || h.setAttribute(r, 'true');
          }
        });
    };
    return (
      m(t),
      c.clear(),
      bn++,
      function () {
        i.forEach(function (d) {
          var h = Be.get(d) - 1,
            b = s.get(d) - 1;
          Be.set(d, h),
            s.set(d, b),
            h || (Ct.has(d) || d.removeAttribute(r), Ct.delete(d)),
            b || d.removeAttribute(n);
        }),
          bn--,
          bn ||
            ((Be = new WeakMap()),
            (Be = new WeakMap()),
            (Ct = new WeakMap()),
            (Tt = {}));
      }
    );
  },
  $l = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden');
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = t || yl(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        xl(r, o, n, 'aria-hidden'))
      : function () {
          return null;
        };
  },
  At = 'right-scroll-bar-position',
  Mt = 'width-before-scroll-bar',
  El = 'with-scroll-bars-hidden',
  Cl = '--removed-body-scroll-bar-size';
function hn(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e;
}
function Tl(e, t) {
  var n = a.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Ar = new WeakMap();
function Nl(e, t) {
  var n = Tl(t || null, function (r) {
    return e.forEach(function (o) {
      return hn(o, r);
    });
  });
  return (
    a.useLayoutEffect(
      function () {
        var r = Ar.get(n);
        if (r) {
          var o = new Set(r),
            s = new Set(e),
            i = n.current;
          o.forEach(function (c) {
            s.has(c) || hn(c, null);
          }),
            s.forEach(function (c) {
              o.has(c) || hn(c, i);
            });
        }
        Ar.set(n, e);
      },
      [e],
    ),
    n
  );
}
function Rl(e) {
  return e;
}
function Sl(e, t) {
  t === void 0 && (t = Rl);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (s) {
        var i = t(s, r);
        return (
          n.push(i),
          function () {
            n = n.filter(function (c) {
              return c !== i;
            });
          }
        );
      },
      assignSyncMedium: function (s) {
        for (r = !0; n.length; ) {
          var i = n;
          (n = []), i.forEach(s);
        }
        n = {
          push: function (c) {
            return s(c);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (s) {
        r = !0;
        var i = [];
        if (n.length) {
          var c = n;
          (n = []), c.forEach(s), (i = n);
        }
        var u = function () {
            var m = i;
            (i = []), m.forEach(s);
          },
          l = function () {
            return Promise.resolve().then(u);
          };
        l(),
          (n = {
            push: function (m) {
              i.push(m), l();
            },
            filter: function (m) {
              return (i = i.filter(m)), n;
            },
          });
      },
    };
  return o;
}
function Dl(e) {
  e === void 0 && (e = {});
  var t = Sl(null);
  return (t.options = Ae({ async: !0, ssr: !1 }, e)), t;
}
var Bo = function (e) {
  var t = e.sideCar,
    n = Vr(e, ['sideCar']);
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    );
  var r = t.read();
  if (!r) throw new Error('Sidecar medium not found');
  return a.createElement(r, Ae({}, n));
};
Bo.isSideCarExport = !0;
function Pl(e, t) {
  return e.useMedium(t), Bo;
}
var Ko = Dl(),
  vn = function () {},
  Yt = a.forwardRef(function (e, t) {
    var n = a.useRef(null),
      r = a.useState({
        onScrollCapture: vn,
        onWheelCapture: vn,
        onTouchMoveCapture: vn,
      }),
      o = r[0],
      s = r[1],
      i = e.forwardProps,
      c = e.children,
      u = e.className,
      l = e.removeScrollBar,
      m = e.enabled,
      d = e.shards,
      h = e.sideCar,
      b = e.noIsolation,
      g = e.inert,
      p = e.allowPinchZoom,
      v = e.as,
      w = v === void 0 ? 'div' : v,
      y = Vr(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
      ]),
      x = h,
      $ = Nl([n, t]),
      T = Ae(Ae({}, y), o);
    return a.createElement(
      a.Fragment,
      null,
      m &&
        a.createElement(x, {
          sideCar: Ko,
          removeScrollBar: l,
          shards: d,
          noIsolation: b,
          inert: g,
          setCallbacks: s,
          allowPinchZoom: !!p,
          lockRef: n,
        }),
      i
        ? a.cloneElement(a.Children.only(c), Ae(Ae({}, T), { ref: $ }))
        : a.createElement(w, Ae({}, T, { className: u, ref: $ }), c),
    );
  });
Yt.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Yt.classNames = { fullWidth: Mt, zeroRight: At };
var _l = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
};
function Al() {
  if (!document) return null;
  var e = document.createElement('style');
  e.type = 'text/css';
  var t = _l();
  return t && e.setAttribute('nonce', t), e;
}
function Ml(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function Ol(e) {
  var t = document.head || document.getElementsByTagName('head')[0];
  t.appendChild(e);
}
var kl = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = Al()) && (Ml(t, n), Ol(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  Il = function () {
    var e = kl();
    return function (t, n) {
      a.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n],
      );
    };
  },
  Yo = function () {
    var e = Il(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  Fl = { left: 0, top: 0, right: 0, gap: 0 },
  gn = function (e) {
    return parseInt(e || '', 10) || 0;
  },
  Ll = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight'];
    return [gn(n), gn(r), gn(o)];
  },
  Vl = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Fl;
    var t = Ll(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  jl = Yo(),
  Ul = function (e, t, n, r) {
    var o = e.left,
      s = e.top,
      i = e.right,
      c = e.gap;
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          El,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  s,
                  `px;
    padding-right: `,
                )
                .concat(
                  i,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(c, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(c, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          At,
          ` {
    right: `,
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          Mt,
          ` {
    margin-right: `,
        )
        .concat(c, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(At, ' .')
        .concat(
          At,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(Mt, ' .')
        .concat(
          Mt,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body {
    `,
        )
        .concat(Cl, ': ')
        .concat(
          c,
          `px;
  }
`,
        )
    );
  },
  Gl = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r,
      s = a.useMemo(
        function () {
          return Vl(o);
        },
        [o],
      );
    return a.createElement(jl, { styles: Ul(s, !t, o, n ? '' : '!important') });
  },
  _n = !1;
if (typeof window < 'u')
  try {
    var Nt = Object.defineProperty({}, 'passive', {
      get: function () {
        return (_n = !0), !0;
      },
    });
    window.addEventListener('test', Nt, Nt),
      window.removeEventListener('test', Nt, Nt);
  } catch {
    _n = !1;
  }
var Ke = _n ? { passive: !1 } : !1,
  Hl = function (e) {
    return e.tagName === 'TEXTAREA';
  },
  Xo = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !Hl(e) && n[t] === 'visible')
    );
  },
  Wl = function (e) {
    return Xo(e, 'overflowY');
  },
  zl = function (e) {
    return Xo(e, 'overflowX');
  },
  Mr = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
      var r = qo(e, n);
      if (r) {
        var o = Zo(e, n),
          s = o[1],
          i = o[2];
        if (s > i) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  Bl = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  Kl = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  qo = function (e, t) {
    return e === 'v' ? Wl(t) : zl(t);
  },
  Zo = function (e, t) {
    return e === 'v' ? Bl(t) : Kl(t);
  },
  Yl = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1;
  },
  Xl = function (e, t, n, r, o) {
    var s = Yl(e, window.getComputedStyle(t).direction),
      i = s * r,
      c = n.target,
      u = t.contains(c),
      l = !1,
      m = i > 0,
      d = 0,
      h = 0;
    do {
      var b = Zo(e, c),
        g = b[0],
        p = b[1],
        v = b[2],
        w = p - v - s * g;
      (g || w) && qo(e, c) && ((d += w), (h += g)), (c = c.parentNode);
    } while ((!u && c !== document.body) || (u && (t.contains(c) || t === c)));
    return (
      ((m && ((o && d === 0) || (!o && i > d))) ||
        (!m && ((o && h === 0) || (!o && -i > h)))) &&
        (l = !0),
      l
    );
  },
  Rt = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Or = function (e) {
    return [e.deltaX, e.deltaY];
  },
  kr = function (e) {
    return e && 'current' in e ? e.current : e;
  },
  ql = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  Zl = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      );
  },
  Ql = 0,
  Ye = [];
function Jl(e) {
  var t = a.useRef([]),
    n = a.useRef([0, 0]),
    r = a.useRef(),
    o = a.useState(Ql++)[0],
    s = a.useState(function () {
      return Yo();
    })[0],
    i = a.useRef(e);
  a.useEffect(
    function () {
      i.current = e;
    },
    [e],
  ),
    a.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          var p = Xs([e.lockRef.current], (e.shards || []).map(kr), !0).filter(
            Boolean,
          );
          return (
            p.forEach(function (v) {
              return v.classList.add('allow-interactivity-'.concat(o));
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                p.forEach(function (v) {
                  return v.classList.remove('allow-interactivity-'.concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    );
  var c = a.useCallback(function (p, v) {
      if ('touches' in p && p.touches.length === 2)
        return !i.current.allowPinchZoom;
      var w = Rt(p),
        y = n.current,
        x = 'deltaX' in p ? p.deltaX : y[0] - w[0],
        $ = 'deltaY' in p ? p.deltaY : y[1] - w[1],
        T,
        _ = p.target,
        S = Math.abs(x) > Math.abs($) ? 'h' : 'v';
      if ('touches' in p && S === 'h' && _.type === 'range') return !1;
      var A = Mr(S, _);
      if (!A) return !0;
      if ((A ? (T = S) : ((T = S === 'v' ? 'h' : 'v'), (A = Mr(S, _))), !A))
        return !1;
      if (
        (!r.current && 'changedTouches' in p && (x || $) && (r.current = T), !T)
      )
        return !0;
      var I = r.current || T;
      return Xl(I, v, p, I === 'h' ? x : $, !0);
    }, []),
    u = a.useCallback(function (p) {
      var v = p;
      if (!(!Ye.length || Ye[Ye.length - 1] !== s)) {
        var w = 'deltaY' in v ? Or(v) : Rt(v),
          y = t.current.filter(function (T) {
            return T.name === v.type && T.target === v.target && ql(T.delta, w);
          })[0];
        if (y && y.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!y) {
          var x = (i.current.shards || [])
              .map(kr)
              .filter(Boolean)
              .filter(function (T) {
                return T.contains(v.target);
              }),
            $ = x.length > 0 ? c(v, x[0]) : !i.current.noIsolation;
          $ && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    l = a.useCallback(function (p, v, w, y) {
      var x = { name: p, delta: v, target: w, should: y };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function ($) {
            return $ !== x;
          });
        }, 1);
    }, []),
    m = a.useCallback(function (p) {
      (n.current = Rt(p)), (r.current = void 0);
    }, []),
    d = a.useCallback(function (p) {
      l(p.type, Or(p), p.target, c(p, e.lockRef.current));
    }, []),
    h = a.useCallback(function (p) {
      l(p.type, Rt(p), p.target, c(p, e.lockRef.current));
    }, []);
  a.useEffect(function () {
    return (
      Ye.push(s),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: h,
      }),
      document.addEventListener('wheel', u, Ke),
      document.addEventListener('touchmove', u, Ke),
      document.addEventListener('touchstart', m, Ke),
      function () {
        (Ye = Ye.filter(function (p) {
          return p !== s;
        })),
          document.removeEventListener('wheel', u, Ke),
          document.removeEventListener('touchmove', u, Ke),
          document.removeEventListener('touchstart', m, Ke);
      }
    );
  }, []);
  var b = e.removeScrollBar,
    g = e.inert;
  return a.createElement(
    a.Fragment,
    null,
    g ? a.createElement(s, { styles: Zl(o) }) : null,
    b ? a.createElement(Gl, { gapMode: 'margin' }) : null,
  );
}
const eu = Pl(Ko, Jl);
var Qo = a.forwardRef(function (e, t) {
  return a.createElement(Yt, Ae({}, e, { ref: t, sideCar: eu }));
});
Qo.classNames = Yt.classNames;
const tu = Qo,
  An = ['Enter', ' '],
  nu = ['ArrowDown', 'PageUp', 'Home'],
  Jo = ['ArrowUp', 'PageDown', 'End'],
  ru = [...nu, ...Jo],
  ou = { ltr: [...An, 'ArrowRight'], rtl: [...An, 'ArrowLeft'] },
  su = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
  Xt = 'Menu',
  [dt, au, iu] = In(Xt),
  [je, es] = et(Xt, [iu, Lo, Ho]),
  Kn = Lo(),
  ts = Ho(),
  [cu, Ue] = je(Xt),
  [lu, bt] = je(Xt),
  uu = (e) => {
    const {
        __scopeMenu: t,
        open: n = !1,
        children: r,
        dir: o,
        onOpenChange: s,
        modal: i = !0,
      } = e,
      c = Kn(t),
      [u, l] = a.useState(null),
      m = a.useRef(!1),
      d = ce(s),
      h = Co(o);
    return (
      a.useEffect(() => {
        const b = () => {
            (m.current = !0),
              document.addEventListener('pointerdown', g, {
                capture: !0,
                once: !0,
              }),
              document.addEventListener('pointermove', g, {
                capture: !0,
                once: !0,
              });
          },
          g = () => (m.current = !1);
        return (
          document.addEventListener('keydown', b, { capture: !0 }),
          () => {
            document.removeEventListener('keydown', b, { capture: !0 }),
              document.removeEventListener('pointerdown', g, { capture: !0 }),
              document.removeEventListener('pointermove', g, { capture: !0 });
          }
        );
      }, []),
      a.createElement(
        tl,
        c,
        a.createElement(
          cu,
          {
            scope: t,
            open: n,
            onOpenChange: d,
            content: u,
            onContentChange: l,
          },
          a.createElement(
            lu,
            {
              scope: t,
              onClose: a.useCallback(() => d(!1), [d]),
              isUsingKeyboardRef: m,
              dir: h,
              modal: i,
            },
            r,
          ),
        ),
      )
    );
  },
  ns = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e,
      o = Kn(n);
    return a.createElement(nl, M({}, o, r, { ref: t }));
  }),
  rs = 'MenuPortal',
  [du, os] = je(rs, { forceMount: void 0 }),
  fu = (e) => {
    const { __scopeMenu: t, forceMount: n, children: r, container: o } = e,
      s = Ue(rs, t);
    return a.createElement(
      du,
      { scope: t, forceMount: n },
      a.createElement(
        tt,
        { present: n || s.open },
        a.createElement(Jr, { asChild: !0, container: o }, r),
      ),
    );
  },
  be = 'MenuContent',
  [mu, Yn] = je(be),
  pu = a.forwardRef((e, t) => {
    const n = os(be, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Ue(be, e.__scopeMenu),
      i = bt(be, e.__scopeMenu);
    return a.createElement(
      dt.Provider,
      { scope: e.__scopeMenu },
      a.createElement(
        tt,
        { present: r || s.open },
        a.createElement(
          dt.Slot,
          { scope: e.__scopeMenu },
          i.modal
            ? a.createElement(bu, M({}, o, { ref: t }))
            : a.createElement(hu, M({}, o, { ref: t })),
        ),
      ),
    );
  }),
  bu = a.forwardRef((e, t) => {
    const n = Ue(be, e.__scopeMenu),
      r = a.useRef(null),
      o = se(t, r);
    return (
      a.useEffect(() => {
        const s = r.current;
        if (s) return $l(s);
      }, []),
      a.createElement(
        Xn,
        M({}, e, {
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: n.open,
          disableOutsideScroll: !0,
          onFocusOutside: F(e.onFocusOutside, (s) => s.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
          onDismiss: () => n.onOpenChange(!1),
        }),
      )
    );
  }),
  hu = a.forwardRef((e, t) => {
    const n = Ue(be, e.__scopeMenu);
    return a.createElement(
      Xn,
      M({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1),
      }),
    );
  }),
  Xn = a.forwardRef((e, t) => {
    const {
        __scopeMenu: n,
        loop: r = !1,
        trapFocus: o,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: c,
        onEntryFocus: u,
        onEscapeKeyDown: l,
        onPointerDownOutside: m,
        onFocusOutside: d,
        onInteractOutside: h,
        onDismiss: b,
        disableOutsideScroll: g,
        ...p
      } = e,
      v = Ue(be, n),
      w = bt(be, n),
      y = Kn(n),
      x = ts(n),
      $ = au(n),
      [T, _] = a.useState(null),
      S = a.useRef(null),
      A = se(t, S, v.onContentChange),
      I = a.useRef(0),
      H = a.useRef(''),
      z = a.useRef(0),
      D = a.useRef(null),
      W = a.useRef('right'),
      N = a.useRef(0),
      O = g ? tu : a.Fragment,
      U = g ? { as: Ze, allowPinchZoom: !0 } : void 0,
      L = (P) => {
        var Y, X;
        const J = H.current + P,
          oe = $().filter((re) => !re.disabled),
          he = document.activeElement,
          we =
            (Y = oe.find((re) => re.ref.current === he)) === null ||
            Y === void 0
              ? void 0
              : Y.textValue,
          ae = oe.map((re) => re.textValue),
          de = Au(ae, J, we),
          xe =
            (X = oe.find((re) => re.textValue === de)) === null || X === void 0
              ? void 0
              : X.ref.current;
        (function re($e) {
          (H.current = $e),
            window.clearTimeout(I.current),
            $e !== '' && (I.current = window.setTimeout(() => re(''), 1e3));
        })(J),
          xe && setTimeout(() => xe.focus());
      };
    a.useEffect(() => () => window.clearTimeout(I.current), []), Bi();
    const K = a.useCallback((P) => {
      var Y, X;
      return (
        W.current ===
          ((Y = D.current) === null || Y === void 0 ? void 0 : Y.side) &&
        Ou(P, (X = D.current) === null || X === void 0 ? void 0 : X.area)
      );
    }, []);
    return a.createElement(
      mu,
      {
        scope: n,
        searchRef: H,
        onItemEnter: a.useCallback(
          (P) => {
            K(P) && P.preventDefault();
          },
          [K],
        ),
        onItemLeave: a.useCallback(
          (P) => {
            var Y;
            K(P) ||
              ((Y = S.current) === null || Y === void 0 || Y.focus(), _(null));
          },
          [K],
        ),
        onTriggerLeave: a.useCallback(
          (P) => {
            K(P) && P.preventDefault();
          },
          [K],
        ),
        pointerGraceTimerRef: z,
        onPointerGraceIntentChange: a.useCallback((P) => {
          D.current = P;
        }, []),
      },
      a.createElement(
        O,
        U,
        a.createElement(
          Ki,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: F(s, (P) => {
              var Y;
              P.preventDefault(),
                (Y = S.current) === null || Y === void 0 || Y.focus();
            }),
            onUnmountAutoFocus: i,
          },
          a.createElement(
            Zr,
            {
              asChild: !0,
              disableOutsidePointerEvents: c,
              onEscapeKeyDown: l,
              onPointerDownOutside: m,
              onFocusOutside: d,
              onInteractOutside: h,
              onDismiss: b,
            },
            a.createElement(
              vl,
              M({ asChild: !0 }, x, {
                dir: w.dir,
                orientation: 'vertical',
                loop: r,
                currentTabStopId: T,
                onCurrentTabStopIdChange: _,
                onEntryFocus: F(u, (P) => {
                  w.isUsingKeyboardRef.current || P.preventDefault();
                }),
              }),
              a.createElement(
                rl,
                M(
                  {
                    role: 'menu',
                    'aria-orientation': 'vertical',
                    'data-state': ls(v.open),
                    'data-radix-menu-content': '',
                    dir: w.dir,
                  },
                  y,
                  p,
                  {
                    ref: A,
                    style: { outline: 'none', ...p.style },
                    onKeyDown: F(p.onKeyDown, (P) => {
                      const X =
                          P.target.closest('[data-radix-menu-content]') ===
                          P.currentTarget,
                        J = P.ctrlKey || P.altKey || P.metaKey,
                        oe = P.key.length === 1;
                      X &&
                        (P.key === 'Tab' && P.preventDefault(),
                        !J && oe && L(P.key));
                      const he = S.current;
                      if (P.target !== he || !ru.includes(P.key)) return;
                      P.preventDefault();
                      const ae = $()
                        .filter((de) => !de.disabled)
                        .map((de) => de.ref.current);
                      Jo.includes(P.key) && ae.reverse(), Pu(ae);
                    }),
                    onBlur: F(e.onBlur, (P) => {
                      P.currentTarget.contains(P.target) ||
                        (window.clearTimeout(I.current), (H.current = ''));
                    }),
                    onPointerMove: F(
                      e.onPointerMove,
                      ft((P) => {
                        const Y = P.target,
                          X = N.current !== P.clientX;
                        if (P.currentTarget.contains(Y) && X) {
                          const J = P.clientX > N.current ? 'right' : 'left';
                          (W.current = J), (N.current = P.clientX);
                        }
                      }),
                    ),
                  },
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }),
  vu = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return a.createElement(ne.div, M({}, r, { ref: t }));
  }),
  Mn = 'MenuItem',
  Ir = 'menu.itemSelect',
  qn = a.forwardRef((e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e,
      s = a.useRef(null),
      i = bt(Mn, e.__scopeMenu),
      c = Yn(Mn, e.__scopeMenu),
      u = se(t, s),
      l = a.useRef(!1),
      m = () => {
        const d = s.current;
        if (!n && d) {
          const h = new CustomEvent(Ir, { bubbles: !0, cancelable: !0 });
          d.addEventListener(Ir, (b) => (r == null ? void 0 : r(b)), {
            once: !0,
          }),
            Fn(d, h),
            h.defaultPrevented ? (l.current = !1) : i.onClose();
        }
      };
    return a.createElement(
      ss,
      M({}, o, {
        ref: u,
        disabled: n,
        onClick: F(e.onClick, m),
        onPointerDown: (d) => {
          var h;
          (h = e.onPointerDown) === null || h === void 0 || h.call(e, d),
            (l.current = !0);
        },
        onPointerUp: F(e.onPointerUp, (d) => {
          var h;
          l.current ||
            (h = d.currentTarget) === null ||
            h === void 0 ||
            h.click();
        }),
        onKeyDown: F(e.onKeyDown, (d) => {
          const h = c.searchRef.current !== '';
          n ||
            (h && d.key === ' ') ||
            (An.includes(d.key) &&
              (d.currentTarget.click(), d.preventDefault()));
        }),
      }),
    );
  }),
  ss = a.forwardRef((e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e,
      i = Yn(Mn, n),
      c = ts(n),
      u = a.useRef(null),
      l = se(t, u),
      [m, d] = a.useState(!1),
      [h, b] = a.useState('');
    return (
      a.useEffect(() => {
        const g = u.current;
        if (g) {
          var p;
          b(((p = g.textContent) !== null && p !== void 0 ? p : '').trim());
        }
      }, [s.children]),
      a.createElement(
        dt.ItemSlot,
        { scope: n, disabled: r, textValue: o ?? h },
        a.createElement(
          gl,
          M({ asChild: !0 }, c, { focusable: !r }),
          a.createElement(
            ne.div,
            M(
              {
                role: 'menuitem',
                'data-highlighted': m ? '' : void 0,
                'aria-disabled': r || void 0,
                'data-disabled': r ? '' : void 0,
              },
              s,
              {
                ref: l,
                onPointerMove: F(
                  e.onPointerMove,
                  ft((g) => {
                    r
                      ? i.onItemLeave(g)
                      : (i.onItemEnter(g),
                        g.defaultPrevented || g.currentTarget.focus());
                  }),
                ),
                onPointerLeave: F(
                  e.onPointerLeave,
                  ft((g) => i.onItemLeave(g)),
                ),
                onFocus: F(e.onFocus, () => d(!0)),
                onBlur: F(e.onBlur, () => d(!1)),
              },
            ),
          ),
        ),
      )
    );
  }),
  gu = a.forwardRef((e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return a.createElement(
      is,
      { scope: e.__scopeMenu, checked: n },
      a.createElement(
        qn,
        M(
          { role: 'menuitemcheckbox', 'aria-checked': Vt(n) ? 'mixed' : n },
          o,
          {
            ref: t,
            'data-state': Zn(n),
            onSelect: F(
              o.onSelect,
              () => (r == null ? void 0 : r(Vt(n) ? !0 : !n)),
              { checkForDefaultPrevented: !1 },
            ),
          },
        ),
      ),
    );
  }),
  yu = 'MenuRadioGroup',
  [Nd, wu] = je(yu, { value: void 0, onValueChange: () => {} }),
  xu = 'MenuRadioItem',
  $u = a.forwardRef((e, t) => {
    const { value: n, ...r } = e,
      o = wu(xu, e.__scopeMenu),
      s = n === o.value;
    return a.createElement(
      is,
      { scope: e.__scopeMenu, checked: s },
      a.createElement(
        qn,
        M({ role: 'menuitemradio', 'aria-checked': s }, r, {
          ref: t,
          'data-state': Zn(s),
          onSelect: F(
            r.onSelect,
            () => {
              var i;
              return (i = o.onValueChange) === null || i === void 0
                ? void 0
                : i.call(o, n);
            },
            { checkForDefaultPrevented: !1 },
          ),
        }),
      ),
    );
  }),
  as = 'MenuItemIndicator',
  [is, Eu] = je(as, { checked: !1 }),
  Cu = a.forwardRef((e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e,
      s = Eu(as, n);
    return a.createElement(
      tt,
      { present: r || Vt(s.checked) || s.checked === !0 },
      a.createElement(
        ne.span,
        M({}, o, { ref: t, 'data-state': Zn(s.checked) }),
      ),
    );
  }),
  Tu = a.forwardRef((e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return a.createElement(
      ne.div,
      M({ role: 'separator', 'aria-orientation': 'horizontal' }, r, { ref: t }),
    );
  }),
  Nu = 'MenuSub',
  [Rd, cs] = je(Nu),
  St = 'MenuSubTrigger',
  Ru = a.forwardRef((e, t) => {
    const n = Ue(St, e.__scopeMenu),
      r = bt(St, e.__scopeMenu),
      o = cs(St, e.__scopeMenu),
      s = Yn(St, e.__scopeMenu),
      i = a.useRef(null),
      { pointerGraceTimerRef: c, onPointerGraceIntentChange: u } = s,
      l = { __scopeMenu: e.__scopeMenu },
      m = a.useCallback(() => {
        i.current && window.clearTimeout(i.current), (i.current = null);
      }, []);
    return (
      a.useEffect(() => m, [m]),
      a.useEffect(() => {
        const d = c.current;
        return () => {
          window.clearTimeout(d), u(null);
        };
      }, [c, u]),
      a.createElement(
        ns,
        M({ asChild: !0 }, l),
        a.createElement(
          ss,
          M(
            {
              id: o.triggerId,
              'aria-haspopup': 'menu',
              'aria-expanded': n.open,
              'aria-controls': o.contentId,
              'data-state': ls(n.open),
            },
            e,
            {
              ref: Gt(t, o.onTriggerChange),
              onClick: (d) => {
                var h;
                (h = e.onClick) === null || h === void 0 || h.call(e, d),
                  !(e.disabled || d.defaultPrevented) &&
                    (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
              },
              onPointerMove: F(
                e.onPointerMove,
                ft((d) => {
                  s.onItemEnter(d),
                    !d.defaultPrevented &&
                      !e.disabled &&
                      !n.open &&
                      !i.current &&
                      (s.onPointerGraceIntentChange(null),
                      (i.current = window.setTimeout(() => {
                        n.onOpenChange(!0), m();
                      }, 100)));
                }),
              ),
              onPointerLeave: F(
                e.onPointerLeave,
                ft((d) => {
                  var h;
                  m();
                  const b =
                    (h = n.content) === null || h === void 0
                      ? void 0
                      : h.getBoundingClientRect();
                  if (b) {
                    var g;
                    const p =
                        (g = n.content) === null || g === void 0
                          ? void 0
                          : g.dataset.side,
                      v = p === 'right',
                      w = v ? -5 : 5,
                      y = b[v ? 'left' : 'right'],
                      x = b[v ? 'right' : 'left'];
                    s.onPointerGraceIntentChange({
                      area: [
                        { x: d.clientX + w, y: d.clientY },
                        { x: y, y: b.top },
                        { x, y: b.top },
                        { x, y: b.bottom },
                        { x: y, y: b.bottom },
                      ],
                      side: p,
                    }),
                      window.clearTimeout(c.current),
                      (c.current = window.setTimeout(
                        () => s.onPointerGraceIntentChange(null),
                        300,
                      ));
                  } else {
                    if ((s.onTriggerLeave(d), d.defaultPrevented)) return;
                    s.onPointerGraceIntentChange(null);
                  }
                }),
              ),
              onKeyDown: F(e.onKeyDown, (d) => {
                const h = s.searchRef.current !== '';
                if (
                  !(e.disabled || (h && d.key === ' ')) &&
                  ou[r.dir].includes(d.key)
                ) {
                  var b;
                  n.onOpenChange(!0),
                    (b = n.content) === null || b === void 0 || b.focus(),
                    d.preventDefault();
                }
              }),
            },
          ),
        ),
      )
    );
  }),
  Su = 'MenuSubContent',
  Du = a.forwardRef((e, t) => {
    const n = os(be, e.__scopeMenu),
      { forceMount: r = n.forceMount, ...o } = e,
      s = Ue(be, e.__scopeMenu),
      i = bt(be, e.__scopeMenu),
      c = cs(Su, e.__scopeMenu),
      u = a.useRef(null),
      l = se(t, u);
    return a.createElement(
      dt.Provider,
      { scope: e.__scopeMenu },
      a.createElement(
        tt,
        { present: r || s.open },
        a.createElement(
          dt.Slot,
          { scope: e.__scopeMenu },
          a.createElement(
            Xn,
            M({ id: c.contentId, 'aria-labelledby': c.triggerId }, o, {
              ref: l,
              align: 'start',
              side: i.dir === 'rtl' ? 'left' : 'right',
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              trapFocus: !1,
              onOpenAutoFocus: (m) => {
                var d;
                i.isUsingKeyboardRef.current &&
                  ((d = u.current) === null || d === void 0 || d.focus()),
                  m.preventDefault();
              },
              onCloseAutoFocus: (m) => m.preventDefault(),
              onFocusOutside: F(e.onFocusOutside, (m) => {
                m.target !== c.trigger && s.onOpenChange(!1);
              }),
              onEscapeKeyDown: F(e.onEscapeKeyDown, (m) => {
                i.onClose(), m.preventDefault();
              }),
              onKeyDown: F(e.onKeyDown, (m) => {
                const d = m.currentTarget.contains(m.target),
                  h = su[i.dir].includes(m.key);
                if (d && h) {
                  var b;
                  s.onOpenChange(!1),
                    (b = c.trigger) === null || b === void 0 || b.focus(),
                    m.preventDefault();
                }
              }),
            }),
          ),
        ),
      ),
    );
  });
function ls(e) {
  return e ? 'open' : 'closed';
}
function Vt(e) {
  return e === 'indeterminate';
}
function Zn(e) {
  return Vt(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
}
function Pu(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function _u(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Au(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t,
    s = n ? e.indexOf(n) : -1;
  let i = _u(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((l) => l !== n));
  const u = i.find((l) => l.toLowerCase().startsWith(o.toLowerCase()));
  return u !== n ? u : void 0;
}
function Mu(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const c = t[s].x,
      u = t[s].y,
      l = t[i].x,
      m = t[i].y;
    u > r != m > r && n < ((l - c) * (r - u)) / (m - u) + c && (o = !o);
  }
  return o;
}
function Ou(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Mu(n, t);
}
function ft(e) {
  return (t) => (t.pointerType === 'mouse' ? e(t) : void 0);
}
const ku = uu,
  Iu = ns,
  Fu = fu,
  Lu = pu,
  Vu = vu,
  ju = qn,
  Uu = gu,
  Gu = $u,
  Hu = Cu,
  Wu = Tu,
  zu = Ru,
  Bu = Du,
  us = 'DropdownMenu',
  [Ku, Sd] = et(us, [es]),
  pe = es(),
  [Yu, ds] = Ku(us),
  Xu = (e) => {
    const {
        __scopeDropdownMenu: t,
        children: n,
        dir: r,
        open: o,
        defaultOpen: s,
        onOpenChange: i,
        modal: c = !0,
      } = e,
      u = pe(t),
      l = a.useRef(null),
      [m = !1, d] = Ln({ prop: o, defaultProp: s, onChange: i });
    return a.createElement(
      Yu,
      {
        scope: t,
        triggerId: Rn(),
        triggerRef: l,
        contentId: Rn(),
        open: m,
        onOpenChange: d,
        onOpenToggle: a.useCallback(() => d((h) => !h), [d]),
        modal: c,
      },
      a.createElement(
        ku,
        M({}, u, { open: m, onOpenChange: d, dir: r, modal: c }),
        n,
      ),
    );
  },
  qu = 'DropdownMenuTrigger',
  Zu = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e,
      s = ds(qu, n),
      i = pe(n);
    return a.createElement(
      Iu,
      M({ asChild: !0 }, i),
      a.createElement(
        ne.button,
        M(
          {
            type: 'button',
            id: s.triggerId,
            'aria-haspopup': 'menu',
            'aria-expanded': s.open,
            'aria-controls': s.open ? s.contentId : void 0,
            'data-state': s.open ? 'open' : 'closed',
            'data-disabled': r ? '' : void 0,
            disabled: r,
          },
          o,
          {
            ref: Gt(t, s.triggerRef),
            onPointerDown: F(e.onPointerDown, (c) => {
              !r &&
                c.button === 0 &&
                c.ctrlKey === !1 &&
                (s.onOpenToggle(), s.open || c.preventDefault());
            }),
            onKeyDown: F(e.onKeyDown, (c) => {
              r ||
                (['Enter', ' '].includes(c.key) && s.onOpenToggle(),
                c.key === 'ArrowDown' && s.onOpenChange(!0),
                ['Enter', ' ', 'ArrowDown'].includes(c.key) &&
                  c.preventDefault());
            }),
          },
        ),
      ),
    );
  }),
  Qu = (e) => {
    const { __scopeDropdownMenu: t, ...n } = e,
      r = pe(t);
    return a.createElement(Fu, M({}, r, n));
  },
  Ju = 'DropdownMenuContent',
  ed = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = ds(Ju, n),
      s = pe(n),
      i = a.useRef(!1);
    return a.createElement(
      Lu,
      M({ id: o.contentId, 'aria-labelledby': o.triggerId }, s, r, {
        ref: t,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (c) => {
          var u;
          i.current ||
            (u = o.triggerRef.current) === null ||
            u === void 0 ||
            u.focus(),
            (i.current = !1),
            c.preventDefault();
        }),
        onInteractOutside: F(e.onInteractOutside, (c) => {
          const u = c.detail.originalEvent,
            l = u.button === 0 && u.ctrlKey === !0,
            m = u.button === 2 || l;
          (!o.modal || m) && (i.current = !0);
        }),
        style: {
          ...e.style,
          '--radix-dropdown-menu-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-dropdown-menu-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-dropdown-menu-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-dropdown-menu-trigger-width':
            'var(--radix-popper-anchor-width)',
          '--radix-dropdown-menu-trigger-height':
            'var(--radix-popper-anchor-height)',
        },
      }),
    );
  }),
  td = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(Vu, M({}, o, r, { ref: t }));
  }),
  nd = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(ju, M({}, o, r, { ref: t }));
  }),
  rd = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(Uu, M({}, o, r, { ref: t }));
  }),
  od = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(Gu, M({}, o, r, { ref: t }));
  }),
  sd = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(Hu, M({}, o, r, { ref: t }));
  }),
  ad = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(Wu, M({}, o, r, { ref: t }));
  }),
  id = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(zu, M({}, o, r, { ref: t }));
  }),
  cd = a.forwardRef((e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e,
      o = pe(n);
    return a.createElement(
      Bu,
      M({}, o, r, {
        ref: t,
        style: {
          ...e.style,
          '--radix-dropdown-menu-content-transform-origin':
            'var(--radix-popper-transform-origin)',
          '--radix-dropdown-menu-content-available-width':
            'var(--radix-popper-available-width)',
          '--radix-dropdown-menu-content-available-height':
            'var(--radix-popper-available-height)',
          '--radix-dropdown-menu-trigger-width':
            'var(--radix-popper-anchor-width)',
          '--radix-dropdown-menu-trigger-height':
            'var(--radix-popper-anchor-height)',
        },
      }),
    );
  }),
  ld = Xu,
  ud = Zu,
  dd = Qu,
  fs = ed,
  ms = td,
  ps = nd,
  bs = rd,
  hs = od,
  vs = sd,
  gs = ad,
  ys = id,
  ws = cd,
  fd = ld,
  md = ud,
  pd = a.forwardRef(({ className: e, inset: t, children: n, ...r }, o) =>
    C.jsxDEV(
      ys,
      {
        ref: o,
        className: Q(
          'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
          t && 'pl-8',
          e,
        ),
        ...r,
        children: [
          n,
          C.jsxDEV(
            Ai,
            { className: 'ml-auto h-4 w-4' },
            void 0,
            !1,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
              lineNumber: 35,
              columnNumber: 5,
            },
            void 0,
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName:
          '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
        lineNumber: 25,
        columnNumber: 3,
      },
      void 0,
    ),
  );
pd.displayName = ys.displayName;
const bd = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    ws,
    {
      ref: n,
      className: Q(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        e,
      ),
      ...t,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 45,
      columnNumber: 3,
    },
    void 0,
  ),
);
bd.displayName = ws.displayName;
const xs = a.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
  C.jsxDEV(
    dd,
    {
      children: C.jsxDEV(
        fs,
        {
          ref: r,
          sideOffset: t,
          className: Q(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            e,
          ),
          ...n,
        },
        void 0,
        !1,
        {
          fileName:
            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
          lineNumber: 62,
          columnNumber: 5,
        },
        void 0,
      ),
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 61,
      columnNumber: 3,
    },
    void 0,
  ),
);
xs.displayName = fs.displayName;
const Ot = a.forwardRef(({ className: e, inset: t, ...n }, r) =>
  C.jsxDEV(
    ps,
    {
      ref: r,
      className: Q(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        t && 'pl-8',
        e,
      ),
      ...n,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 81,
      columnNumber: 3,
    },
    void 0,
  ),
);
Ot.displayName = ps.displayName;
const hd = a.forwardRef(({ className: e, children: t, checked: n, ...r }, o) =>
  C.jsxDEV(
    bs,
    {
      ref: o,
      className: Q(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        e,
      ),
      checked: n,
      ...r,
      children: [
        C.jsxDEV(
          'span',
          {
            className:
              'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
            children: C.jsxDEV(
              vs,
              {
                children: C.jsxDEV(
                  _i,
                  { className: 'h-4 w-4' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
                    lineNumber: 108,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
                lineNumber: 107,
                columnNumber: 7,
              },
              void 0,
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
            lineNumber: 106,
            columnNumber: 5,
          },
          void 0,
        ),
        t,
      ],
    },
    void 0,
    !0,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 97,
      columnNumber: 3,
    },
    void 0,
  ),
);
hd.displayName = bs.displayName;
const vd = a.forwardRef(({ className: e, children: t, ...n }, r) =>
  C.jsxDEV(
    hs,
    {
      ref: r,
      className: Q(
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        e,
      ),
      ...n,
      children: [
        C.jsxDEV(
          'span',
          {
            className:
              'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
            children: C.jsxDEV(
              vs,
              {
                children: C.jsxDEV(
                  Mi,
                  { className: 'h-2 w-2 fill-current' },
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
                    lineNumber: 131,
                    columnNumber: 9,
                  },
                  void 0,
                ),
              },
              void 0,
              !1,
              {
                fileName:
                  '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
                lineNumber: 130,
                columnNumber: 7,
              },
              void 0,
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
            lineNumber: 129,
            columnNumber: 5,
          },
          void 0,
        ),
        t,
      ],
    },
    void 0,
    !0,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 121,
      columnNumber: 3,
    },
    void 0,
  ),
);
vd.displayName = hs.displayName;
const gd = a.forwardRef(({ className: e, inset: t, ...n }, r) =>
  C.jsxDEV(
    ms,
    {
      ref: r,
      className: Q('px-2 py-1.5 text-sm font-semibold', t && 'pl-8', e),
      ...n,
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 145,
      columnNumber: 3,
    },
    void 0,
  ),
);
gd.displayName = ms.displayName;
const yd = a.forwardRef(({ className: e, ...t }, n) =>
  C.jsxDEV(
    gs,
    { ref: n, className: Q('-mx-1 my-1 h-px bg-muted', e), ...t },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/dropdown-menu.tsx',
      lineNumber: 161,
      columnNumber: 3,
    },
    void 0,
  ),
);
yd.displayName = gs.displayName;
function wd() {
  const { setTheme: e } = Wi();
  return C.jsxDEV(
    fd,
    {
      children: [
        C.jsxDEV(
          md,
          {
            asChild: !0,
            children: C.jsxDEV(
              Ht,
              {
                variant: 'outline',
                size: 'icon',
                children: [
                  C.jsxDEV(
                    ki,
                    {
                      className:
                        'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0',
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                      lineNumber: 18,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  C.jsxDEV(
                    Oi,
                    {
                      className:
                        'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100',
                    },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                      lineNumber: 19,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  C.jsxDEV(
                    'span',
                    { className: 'sr-only', children: 'Toggle theme' },
                    void 0,
                    !1,
                    {
                      fileName:
                        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                      lineNumber: 20,
                      columnNumber: 11,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              !0,
              {
                fileName:
                  '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                lineNumber: 17,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          !1,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
            lineNumber: 16,
            columnNumber: 7,
          },
          this,
        ),
        C.jsxDEV(
          xs,
          {
            align: 'end',
            children: [
              C.jsxDEV(
                Ot,
                { onClick: () => e('light'), children: 'Light' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                  lineNumber: 24,
                  columnNumber: 9,
                },
                this,
              ),
              C.jsxDEV(
                Ot,
                { onClick: () => e('dark'), children: 'Dark' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                  lineNumber: 27,
                  columnNumber: 9,
                },
                this,
              ),
              C.jsxDEV(
                Ot,
                { onClick: () => e('system'), children: 'System' },
                void 0,
                !1,
                {
                  fileName:
                    '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
                  lineNumber: 30,
                  columnNumber: 9,
                },
                this,
              ),
            ],
          },
          void 0,
          !0,
          {
            fileName:
              '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
            lineNumber: 23,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/components/ui/mode-toggle.tsx',
      lineNumber: 15,
      columnNumber: 5,
    },
    this,
  );
}
const xd = new qs();
function $d() {
  return C.jsxDEV(
    Zs,
    {
      config: Ur,
      children: C.jsxDEV(
        Qs,
        {
          client: xd,
          children: C.jsxDEV(
            Js,
            {
              theme: 'retro',
              mode: 'dark',
              options: {
                embedGoogleFonts: !0,
                disclaimer: C.jsxDEV(
                  C.Fragment,
                  {
                    children: [
                      'By connecting your wallet you agree to the',
                      ' ',
                      C.jsxDEV(
                        'a',
                        {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          href: 'https://en.wikipedia.org/wiki/Terms_of_service',
                          children: 'Terms of Service',
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                          lineNumber: 29,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      ' ',
                      'and',
                      ' ',
                      C.jsxDEV(
                        'a',
                        {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          href: 'https://en.wikipedia.org/wiki/Privacy_policy',
                          children: 'Privacy Policy',
                        },
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                          lineNumber: 37,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                    lineNumber: 27,
                    columnNumber: 15,
                  },
                  this,
                ),
              },
              children: [
                C.jsxDEV(
                  'div',
                  {
                    className: 'grid grid-rows gap-8',
                    children: [
                      C.jsxDEV(
                        wd,
                        {},
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                          lineNumber: 49,
                          columnNumber: 13,
                        },
                        this,
                      ),
                      C.jsxDEV(
                        ji,
                        {},
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                          lineNumber: 50,
                          columnNumber: 13,
                        },
                        this,
                      ),
                      C.jsxDEV(
                        Vi,
                        {},
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                          lineNumber: 51,
                          columnNumber: 13,
                        },
                        this,
                      ),
                      C.jsxDEV(
                        ja,
                        {},
                        void 0,
                        !1,
                        {
                          fileName:
                            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                          lineNumber: 52,
                          columnNumber: 13,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                    lineNumber: 48,
                    columnNumber: 11,
                  },
                  this,
                ),
                C.jsxDEV(
                  Ui,
                  {},
                  void 0,
                  !1,
                  {
                    fileName:
                      '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
                    lineNumber: 54,
                    columnNumber: 11,
                  },
                  this,
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName:
                '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
              lineNumber: 21,
              columnNumber: 9,
            },
            this,
          ),
        },
        void 0,
        !1,
        {
          fileName:
            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
          lineNumber: 20,
          columnNumber: 7,
        },
        this,
      ),
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/App.tsx',
      lineNumber: 19,
      columnNumber: 5,
    },
    this,
  );
}
wn.createRoot(document.getElementById('root')).render(
  C.jsxDEV(
    Hi,
    {
      defaultTheme: 'dark',
      storageKey: 'vite-ui-theme',
      children: C.jsxDEV(
        $d,
        {},
        void 0,
        !1,
        {
          fileName:
            '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/main.tsx',
          lineNumber: 8,
          columnNumber: 5,
        },
        void 0,
      ),
    },
    void 0,
    !1,
    {
      fileName:
        '/Users/nawodyaishan/Documents/GitHub/on-chain-nft/random-ipfs-nft-frontend/src/main.tsx',
      lineNumber: 7,
      columnNumber: 3,
    },
    void 0,
  ),
);
