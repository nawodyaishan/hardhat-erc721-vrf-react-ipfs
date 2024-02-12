import {
  n as _e,
  s as Ge,
  T,
  t as L,
  a as g,
  o as ee,
  R as nr,
  p as B,
  y as me,
} from './index-CjtLkFai.js';
import {
  M as sr,
  v as ar,
  w as zo,
  x as Ne,
  y as le,
  z as lr,
  A as cr,
  B as dr,
  D as po,
  E as lt,
  F as uo,
  G as Me,
  H as Vo,
  I as go,
  J as Bo,
  K as mr,
} from './lodash-DnZiozLM.js';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const hr = !1,
  Xe = window,
  no =
    Xe.ShadowRoot &&
    (Xe.ShadyCSS === void 0 || Xe.ShadyCSS.nativeShadow) &&
    'adoptedStyleSheets' in Document.prototype &&
    'replace' in CSSStyleSheet.prototype,
  so = Symbol(),
  fo = new WeakMap();
class Ho {
  constructor(e, o, i) {
    if (((this._$cssResult$ = !0), i !== so))
      throw new Error(
        'CSSResult is not constructable. Use `unsafeCSS` or `css` instead.',
      );
    (this.cssText = e), (this._strings = o);
  }
  get styleSheet() {
    let e = this._styleSheet;
    const o = this._strings;
    if (no && e === void 0) {
      const i = o !== void 0 && o.length === 1;
      i && (e = fo.get(o)),
        e === void 0 &&
          ((this._styleSheet = e = new CSSStyleSheet()).replaceSync(
            this.cssText,
          ),
          i && fo.set(o, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
}
const pr = (t) => {
    if (t._$cssResult$ === !0) return t.cssText;
    if (typeof t == 'number') return t;
    throw new Error(
      `Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`,
    );
  },
  ur = (t) => new Ho(typeof t == 'string' ? t : String(t), void 0, so),
  y = (t, ...e) => {
    const o =
      t.length === 1 ? t[0] : e.reduce((i, r, n) => i + pr(r) + t[n + 1], t[0]);
    return new Ho(o, t, so);
  },
  gr = (t, e) => {
    no
      ? (t.adoptedStyleSheets = e.map((o) =>
          o instanceof CSSStyleSheet ? o : o.styleSheet,
        ))
      : e.forEach((o) => {
          const i = document.createElement('style'),
            r = Xe.litNonce;
          r !== void 0 && i.setAttribute('nonce', r),
            (i.textContent = o.cssText),
            t.appendChild(i);
        });
  },
  fr = (t) => {
    let e = '';
    for (const o of t.cssRules) e += o.cssText;
    return ur(e);
  },
  wo = no || hr ? (t) => t : (t) => (t instanceof CSSStyleSheet ? fr(t) : t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var ct, dt, mt, Zo;
const H = window,
  wr = !0;
let Fo, te;
const vo = H.trustedTypes,
  vr = vo ? vo.emptyScript : '',
  Je = H.reactiveElementPolyfillSupportDevMode;
{
  const t =
    (ct = H.litIssuedWarnings) !== null && ct !== void 0
      ? ct
      : (H.litIssuedWarnings = new Set());
  (te = (e, o) => {
    (o += ` See https://lit.dev/msg/${e} for more information.`),
      t.has(o) || (console.warn(o), t.add(o));
  }),
    te('dev-mode', 'Lit is in dev mode. Not recommended for production!'),
    !((dt = H.ShadyDOM) === null || dt === void 0) &&
      dt.inUse &&
      Je === void 0 &&
      te(
        'polyfill-support-missing',
        'Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.',
      ),
    (Fo = (e) => ({
      then: (o, i) => {
        te(
          'request-update-promise',
          `The \`requestUpdate\` method should no longer return a Promise but does so on \`${e}\`. Use \`updateComplete\` instead.`,
        ),
          o !== void 0 && o(!1);
      },
    }));
}
const ht = (t) => {
    H.emitLitDebugLogEvents &&
      H.dispatchEvent(new CustomEvent('lit-debug', { detail: t }));
  },
  qo = (t, e) => t,
  Jt = {
    toAttribute(t, e) {
      switch (e) {
        case Boolean:
          t = t ? vr : null;
          break;
        case Object:
        case Array:
          t = t == null ? t : JSON.stringify(t);
          break;
      }
      return t;
    },
    fromAttribute(t, e) {
      let o = t;
      switch (e) {
        case Boolean:
          o = t !== null;
          break;
        case Number:
          o = t === null ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            o = JSON.parse(t);
          } catch {
            o = null;
          }
          break;
      }
      return o;
    },
  },
  Ko = (t, e) => e !== t && (e === e || t === t),
  pt = {
    attribute: !0,
    type: String,
    converter: Jt,
    reflect: !1,
    hasChanged: Ko,
  },
  eo = 'finalized';
class Z extends HTMLElement {
  constructor() {
    super(),
      (this.__instanceProperties = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this.__reflectingProperty = null),
      this.__initialize();
  }
  static addInitializer(e) {
    var o;
    this.finalize(),
      ((o = this._initializers) !== null && o !== void 0
        ? o
        : (this._initializers = [])
      ).push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this.elementProperties.forEach((o, i) => {
        const r = this.__attributeNameForProperty(i, o);
        r !== void 0 && (this.__attributeToPropertyMap.set(r, i), e.push(r));
      }),
      e
    );
  }
  static createProperty(e, o = pt) {
    var i;
    if (
      (o.state && (o.attribute = !1),
      this.finalize(),
      this.elementProperties.set(e, o),
      !o.noAccessor && !this.prototype.hasOwnProperty(e))
    ) {
      const r = typeof e == 'symbol' ? Symbol() : `__${e}`,
        n = this.getPropertyDescriptor(e, r, o);
      n !== void 0 &&
        (Object.defineProperty(this.prototype, e, n),
        this.hasOwnProperty('__reactivePropertyKeys') ||
          (this.__reactivePropertyKeys = new Set(
            (i = this.__reactivePropertyKeys) !== null && i !== void 0 ? i : [],
          )),
        this.__reactivePropertyKeys.add(e));
    }
  }
  static getPropertyDescriptor(e, o, i) {
    return {
      get() {
        return this[o];
      },
      set(r) {
        const n = this[e];
        (this[o] = r), this.requestUpdate(e, n, i);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || pt;
  }
  static finalize() {
    if (this.hasOwnProperty(eo)) return !1;
    this[eo] = !0;
    const e = Object.getPrototypeOf(this);
    if (
      (e.finalize(),
      e._initializers !== void 0 && (this._initializers = [...e._initializers]),
      (this.elementProperties = new Map(e.elementProperties)),
      (this.__attributeToPropertyMap = new Map()),
      this.hasOwnProperty(qo('properties')))
    ) {
      const o = this.properties,
        i = [
          ...Object.getOwnPropertyNames(o),
          ...Object.getOwnPropertySymbols(o),
        ];
      for (const r of i) this.createProperty(r, o[r]);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    {
      const o = (i, r = !1) => {
        this.prototype.hasOwnProperty(i) &&
          te(
            r ? 'renamed-api' : 'removed-api',
            `\`${i}\` is implemented on class ${this.name}. It has been ${r ? 'renamed' : 'removed'} in this version of LitElement.`,
          );
      };
      o('initialize'), o('requestUpdateInternal'), o('_getUpdateComplete', !0);
    }
    return !0;
  }
  static finalizeStyles(e) {
    const o = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const r of i) o.unshift(wo(r));
    } else e !== void 0 && o.push(wo(e));
    return o;
  }
  static __attributeNameForProperty(e, o) {
    const i = o.attribute;
    return i === !1
      ? void 0
      : typeof i == 'string'
        ? i
        : typeof e == 'string'
          ? e.toLowerCase()
          : void 0;
  }
  __initialize() {
    var e;
    (this.__updatePromise = new Promise((o) => (this.enableUpdating = o))),
      (this._$changedProperties = new Map()),
      this.__saveInstanceProperties(),
      this.requestUpdate(),
      (e = this.constructor._initializers) === null ||
        e === void 0 ||
        e.forEach((o) => o(this));
  }
  addController(e) {
    var o, i;
    ((o = this.__controllers) !== null && o !== void 0
      ? o
      : (this.__controllers = [])
    ).push(e),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((i = e.hostConnected) === null || i === void 0 || i.call(e));
  }
  removeController(e) {
    var o;
    (o = this.__controllers) === null ||
      o === void 0 ||
      o.splice(this.__controllers.indexOf(e) >>> 0, 1);
  }
  __saveInstanceProperties() {
    this.constructor.elementProperties.forEach((e, o) => {
      this.hasOwnProperty(o) &&
        (this.__instanceProperties.set(o, this[o]), delete this[o]);
    });
  }
  createRenderRoot() {
    var e;
    const o =
      (e = this.shadowRoot) !== null && e !== void 0
        ? e
        : this.attachShadow(this.constructor.shadowRootOptions);
    return gr(o, this.constructor.elementStyles), o;
  }
  connectedCallback() {
    var e;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (e = this.__controllers) === null ||
        e === void 0 ||
        e.forEach((o) => {
          var i;
          return (i = o.hostConnected) === null || i === void 0
            ? void 0
            : i.call(o);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    (e = this.__controllers) === null ||
      e === void 0 ||
      e.forEach((o) => {
        var i;
        return (i = o.hostDisconnected) === null || i === void 0
          ? void 0
          : i.call(o);
      });
  }
  attributeChangedCallback(e, o, i) {
    this._$attributeToProperty(e, i);
  }
  __propertyToAttribute(e, o, i = pt) {
    var r;
    const n = this.constructor.__attributeNameForProperty(e, i);
    if (n !== void 0 && i.reflect === !0) {
      const a = (
        ((r = i.converter) === null || r === void 0
          ? void 0
          : r.toAttribute) !== void 0
          ? i.converter
          : Jt
      ).toAttribute(o, i.type);
      this.constructor.enabledWarnings.indexOf('migration') >= 0 &&
        a === void 0 &&
        te(
          'undefined-attribute-value',
          `The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`,
        ),
        (this.__reflectingProperty = e),
        a == null ? this.removeAttribute(n) : this.setAttribute(n, a),
        (this.__reflectingProperty = null);
    }
  }
  _$attributeToProperty(e, o) {
    var i;
    const r = this.constructor,
      n = r.__attributeToPropertyMap.get(e);
    if (n !== void 0 && this.__reflectingProperty !== n) {
      const s = r.getPropertyOptions(n),
        a =
          typeof s.converter == 'function'
            ? { fromAttribute: s.converter }
            : ((i = s.converter) === null || i === void 0
                  ? void 0
                  : i.fromAttribute) !== void 0
              ? s.converter
              : Jt;
      (this.__reflectingProperty = n),
        (this[n] = a.fromAttribute(o, s.type)),
        (this.__reflectingProperty = null);
    }
  }
  requestUpdate(e, o, i) {
    let r = !0;
    return (
      e !== void 0 &&
        ((i = i || this.constructor.getPropertyOptions(e)),
        (i.hasChanged || Ko)(this[e], o)
          ? (this._$changedProperties.has(e) ||
              this._$changedProperties.set(e, o),
            i.reflect === !0 &&
              this.__reflectingProperty !== e &&
              (this.__reflectingProperties === void 0 &&
                (this.__reflectingProperties = new Map()),
              this.__reflectingProperties.set(e, i)))
          : (r = !1)),
      !this.isUpdatePending &&
        r &&
        (this.__updatePromise = this.__enqueueUpdate()),
      wr ? Fo(this.localName) : void 0
    );
  }
  async __enqueueUpdate() {
    this.isUpdatePending = !0;
    try {
      await this.__updatePromise;
    } catch (o) {
      Promise.reject(o);
    }
    const e = this.scheduleUpdate();
    return e != null && (await e), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e, o;
    if (!this.isUpdatePending) return;
    if ((ht == null || ht({ kind: 'update' }), !this.hasUpdated)) {
      const n = [];
      if (
        ((e = this.constructor.__reactivePropertyKeys) === null ||
          e === void 0 ||
          e.forEach((s) => {
            var a;
            this.hasOwnProperty(s) &&
              !(
                !((a = this.__instanceProperties) === null || a === void 0) &&
                a.has(s)
              ) &&
              n.push(s);
          }),
        n.length)
      )
        throw new Error(
          `The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${n.join(', ')}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`,
        );
    }
    this.__instanceProperties &&
      (this.__instanceProperties.forEach((n, s) => (this[s] = n)),
      (this.__instanceProperties = void 0));
    let i = !1;
    const r = this._$changedProperties;
    try {
      (i = this.shouldUpdate(r)),
        i
          ? (this.willUpdate(r),
            (o = this.__controllers) === null ||
              o === void 0 ||
              o.forEach((n) => {
                var s;
                return (s = n.hostUpdate) === null || s === void 0
                  ? void 0
                  : s.call(n);
              }),
            this.update(r))
          : this.__markUpdated();
    } catch (n) {
      throw ((i = !1), this.__markUpdated(), n);
    }
    i && this._$didUpdate(r);
  }
  willUpdate(e) {}
  _$didUpdate(e) {
    var o;
    (o = this.__controllers) === null ||
      o === void 0 ||
      o.forEach((i) => {
        var r;
        return (r = i.hostUpdated) === null || r === void 0
          ? void 0
          : r.call(i);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e),
      this.isUpdatePending &&
        this.constructor.enabledWarnings.indexOf('change-in-update') >= 0 &&
        te(
          'change-in-update',
          `Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`,
        );
  }
  __markUpdated() {
    (this._$changedProperties = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this.__updatePromise;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this.__reflectingProperties !== void 0 &&
      (this.__reflectingProperties.forEach((o, i) =>
        this.__propertyToAttribute(i, this[i], o),
      ),
      (this.__reflectingProperties = void 0)),
      this.__markUpdated();
  }
  updated(e) {}
  firstUpdated(e) {}
}
Zo = eo;
Z[Zo] = !0;
Z.elementProperties = new Map();
Z.elementStyles = [];
Z.shadowRootOptions = { mode: 'open' };
Je == null || Je({ ReactiveElement: Z });
{
  Z.enabledWarnings = ['change-in-update'];
  const t = function (e) {
    e.hasOwnProperty(qo('enabledWarnings')) ||
      (e.enabledWarnings = e.enabledWarnings.slice());
  };
  (Z.enableWarning = function (e) {
    t(this),
      this.enabledWarnings.indexOf(e) < 0 && this.enabledWarnings.push(e);
  }),
    (Z.disableWarning = function (e) {
      t(this);
      const o = this.enabledWarnings.indexOf(e);
      o >= 0 && this.enabledWarnings.splice(o, 1);
    });
}
((mt = H.reactiveElementVersions) !== null && mt !== void 0
  ? mt
  : (H.reactiveElementVersions = [])
).push('1.6.3');
H.reactiveElementVersions.length > 1 &&
  te(
    'multiple-versions',
    'Multiple versions of Lit loaded. Loading multiple versions is not recommended.',
  );
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var ut, gt, ft, wt;
const W = window,
  m = (t) => {
    W.emitLitDebugLogEvents &&
      W.dispatchEvent(new CustomEvent('lit-debug', { detail: t }));
  };
let br = 0,
  tt;
((ut = W.litIssuedWarnings) !== null && ut !== void 0) ||
  (W.litIssuedWarnings = new Set()),
  (tt = (t, e) => {
    (e += t ? ` See https://lit.dev/msg/${t} for more information.` : ''),
      W.litIssuedWarnings.has(e) ||
        (console.warn(e), W.litIssuedWarnings.add(e));
  }),
  tt('dev-mode', 'Lit is in dev mode. Not recommended for production!');
const U =
    !((gt = W.ShadyDOM) === null || gt === void 0) &&
    gt.inUse &&
    ((ft = W.ShadyDOM) === null || ft === void 0 ? void 0 : ft.noPatch) === !0
      ? W.ShadyDOM.wrap
      : (t) => t,
  $e = W.trustedTypes,
  bo = $e ? $e.createPolicy('lit-html', { createHTML: (t) => t }) : void 0,
  yr = (t) => t,
  st = (t, e, o) => yr,
  xr = (t) => {
    if (ue !== st)
      throw new Error(
        'Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.',
      );
    ue = t;
  },
  _r = () => {
    ue = st;
  },
  to = (t, e, o) => ue(t, e, o),
  oo = '$lit$',
  q = `lit$${String(Math.random()).slice(9)}$`,
  Yo = '?' + q,
  $r = `<${Yo}>`,
  he = document,
  Le = () => he.createComment(''),
  We = (t) => t === null || (typeof t != 'object' && typeof t != 'function'),
  Qo = Array.isArray,
  Cr = (t) =>
    Qo(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == 'function',
  vt = `[ 	
\f\r]`,
  Or = `[^ 	
\f\r"'\`<>=]`,
  Er = `[^\\s"'>=/]`,
  Ee = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  yo = 1,
  bt = 2,
  kr = 3,
  xo = /-->/g,
  _o = />/g,
  ie = new RegExp(`>|${vt}(?:(${Er}+)(${vt}*=${vt}*(?:${Or}|("|')|))|$)`, 'g'),
  Pr = 0,
  $o = 1,
  Tr = 2,
  Co = 3,
  yt = /'/g,
  xt = /"/g,
  Go = /^(?:script|style|textarea|title)$/i,
  Sr = 1,
  ot = 2,
  ao = 1,
  rt = 2,
  Ar = 3,
  Ir = 4,
  Rr = 5,
  lo = 6,
  Mr = 7,
  Xo =
    (t) =>
    (e, ...o) => (
      e.some((i) => i === void 0) &&
        console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),
      { _$litType$: t, strings: e, values: o }
    ),
  l = Xo(Sr),
  k = Xo(ot),
  pe = Symbol.for('lit-noChange'),
  A = Symbol.for('lit-nothing'),
  Oo = new WeakMap(),
  ce = he.createTreeWalker(he, 129, null, !1);
let ue = st;
function Jo(t, e) {
  if (!Array.isArray(t) || !t.hasOwnProperty('raw')) {
    let o = 'invalid template strings array';
    throw (
      ((o = `
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `
        .trim()
        .replace(
          /\n */g,
          `
`,
        )),
      new Error(o))
    );
  }
  return bo !== void 0 ? bo.createHTML(e) : e;
}
const Nr = (t, e) => {
  const o = t.length - 1,
    i = [];
  let r = e === ot ? '<svg>' : '',
    n,
    s = Ee;
  for (let c = 0; c < o; c++) {
    const d = t[c];
    let E = -1,
      C,
      u = 0,
      x;
    for (; u < d.length && ((s.lastIndex = u), (x = s.exec(d)), x !== null); )
      if (((u = s.lastIndex), s === Ee)) {
        if (x[yo] === '!--') s = xo;
        else if (x[yo] !== void 0) s = _o;
        else if (x[bt] !== void 0)
          Go.test(x[bt]) && (n = new RegExp(`</${x[bt]}`, 'g')), (s = ie);
        else if (x[kr] !== void 0)
          throw new Error(
            'Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions',
          );
      } else
        s === ie
          ? x[Pr] === '>'
            ? ((s = n ?? Ee), (E = -1))
            : x[$o] === void 0
              ? (E = -2)
              : ((E = s.lastIndex - x[Tr].length),
                (C = x[$o]),
                (s = x[Co] === void 0 ? ie : x[Co] === '"' ? xt : yt))
          : s === xt || s === yt
            ? (s = ie)
            : s === xo || s === _o
              ? (s = Ee)
              : ((s = ie), (n = void 0));
    console.assert(
      E === -1 || s === ie || s === yt || s === xt,
      'unexpected parse state B',
    );
    const O = s === ie && t[c + 1].startsWith('/>') ? ' ' : '';
    r +=
      s === Ee
        ? d + $r
        : E >= 0
          ? (i.push(C), d.slice(0, E) + oo + d.slice(E) + q + O)
          : d + q + (E === -2 ? (i.push(void 0), c) : O);
  }
  const a = r + (t[o] || '<?>') + (e === ot ? '</svg>' : '');
  return [Jo(t, a), i];
};
class De {
  constructor({ strings: e, ['_$litType$']: o }, i) {
    this.parts = [];
    let r,
      n = 0,
      s = 0;
    const a = e.length - 1,
      c = this.parts,
      [d, E] = Nr(e, o);
    if (
      ((this.el = De.createElement(d, i)),
      (ce.currentNode = this.el.content),
      o === ot)
    ) {
      const C = this.el.content,
        u = C.firstChild;
      u.remove(), C.append(...u.childNodes);
    }
    for (; (r = ce.nextNode()) !== null && c.length < a; ) {
      if (r.nodeType === 1) {
        {
          const C = r.localName;
          if (/^(?:textarea|template)$/i.test(C) && r.innerHTML.includes(q)) {
            const u = `Expressions are not supported inside \`${C}\` elements. See https://lit.dev/msg/expression-in-${C} for more information.`;
            if (C === 'template') throw new Error(u);
            tt('', u);
          }
        }
        if (r.hasAttributes()) {
          const C = [];
          for (const u of r.getAttributeNames())
            if (u.endsWith(oo) || u.startsWith(q)) {
              const x = E[s++];
              if ((C.push(u), x !== void 0)) {
                const b = r.getAttribute(x.toLowerCase() + oo).split(q),
                  P = /([.?@])?(.*)/.exec(x);
                c.push({
                  type: ao,
                  index: n,
                  name: P[2],
                  strings: b,
                  ctor:
                    P[1] === '.'
                      ? Wr
                      : P[1] === '?'
                        ? Ur
                        : P[1] === '@'
                          ? jr
                          : at,
                });
              } else c.push({ type: lo, index: n });
            }
          for (const u of C) r.removeAttribute(u);
        }
        if (Go.test(r.tagName)) {
          const C = r.textContent.split(q),
            u = C.length - 1;
          if (u > 0) {
            r.textContent = $e ? $e.emptyScript : '';
            for (let x = 0; x < u; x++)
              r.append(C[x], Le()),
                ce.nextNode(),
                c.push({ type: rt, index: ++n });
            r.append(C[u], Le());
          }
        }
      } else if (r.nodeType === 8)
        if (r.data === Yo) c.push({ type: rt, index: n });
        else {
          let u = -1;
          for (; (u = r.data.indexOf(q, u + 1)) !== -1; )
            c.push({ type: Mr, index: n }), (u += q.length - 1);
        }
      n++;
    }
    m == null ||
      m({
        kind: 'template prep',
        template: this,
        clonableTemplate: this.el,
        parts: this.parts,
        strings: e,
      });
  }
  static createElement(e, o) {
    const i = he.createElement('template');
    return (i.innerHTML = e), i;
  }
}
function Ce(t, e, o = t, i) {
  var r, n, s, a;
  if (e === pe) return e;
  let c =
    i !== void 0
      ? (r = o.__directives) === null || r === void 0
        ? void 0
        : r[i]
      : o.__directive;
  const d = We(e) ? void 0 : e._$litDirective$;
  return (
    (c == null ? void 0 : c.constructor) !== d &&
      ((n = c == null ? void 0 : c._$notifyDirectiveConnectionChanged) ===
        null ||
        n === void 0 ||
        n.call(c, !1),
      d === void 0 ? (c = void 0) : ((c = new d(t)), c._$initialize(t, o, i)),
      i !== void 0
        ? (((s = (a = o).__directives) !== null && s !== void 0
            ? s
            : (a.__directives = []))[i] = c)
        : (o.__directive = c)),
    c !== void 0 && (e = Ce(t, c._$resolve(t, e.values), c, i)),
    e
  );
}
class Lr {
  constructor(e, o) {
    (this._$parts = []),
      (this._$disconnectableChildren = void 0),
      (this._$template = e),
      (this._$parent = o);
  }
  get parentNode() {
    return this._$parent.parentNode;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _clone(e) {
    var o;
    const {
        el: { content: i },
        parts: r,
      } = this._$template,
      n = (
        (o = e == null ? void 0 : e.creationScope) !== null && o !== void 0
          ? o
          : he
      ).importNode(i, !0);
    ce.currentNode = n;
    let s = ce.nextNode(),
      a = 0,
      c = 0,
      d = r[0];
    for (; d !== void 0; ) {
      if (a === d.index) {
        let E;
        d.type === rt
          ? (E = new je(s, s.nextSibling, this, e))
          : d.type === ao
            ? (E = new d.ctor(s, d.name, d.strings, this, e))
            : d.type === lo && (E = new zr(s, this, e)),
          this._$parts.push(E),
          (d = r[++c]);
      }
      a !== (d == null ? void 0 : d.index) && ((s = ce.nextNode()), a++);
    }
    return (ce.currentNode = he), n;
  }
  _update(e) {
    let o = 0;
    for (const i of this._$parts)
      i !== void 0 &&
        (m == null ||
          m({
            kind: 'set part',
            part: i,
            value: e[o],
            valueIndex: o,
            values: e,
            templateInstance: this,
          }),
        i.strings !== void 0
          ? (i._$setValue(e, i, o), (o += i.strings.length - 2))
          : i._$setValue(e[o])),
        o++;
  }
}
class je {
  constructor(e, o, i, r) {
    var n;
    (this.type = rt),
      (this._$committedValue = A),
      (this._$disconnectableChildren = void 0),
      (this._$startNode = e),
      (this._$endNode = o),
      (this._$parent = i),
      (this.options = r),
      (this.__isConnected =
        (n = r == null ? void 0 : r.isConnected) !== null && n !== void 0
          ? n
          : !0),
      (this._textSanitizer = void 0);
  }
  get _$isConnected() {
    var e, o;
    return (o =
      (e = this._$parent) === null || e === void 0
        ? void 0
        : e._$isConnected) !== null && o !== void 0
      ? o
      : this.__isConnected;
  }
  get parentNode() {
    let e = U(this._$startNode).parentNode;
    const o = this._$parent;
    return (
      o !== void 0 &&
        (e == null ? void 0 : e.nodeType) === 11 &&
        (e = o.parentNode),
      e
    );
  }
  get startNode() {
    return this._$startNode;
  }
  get endNode() {
    return this._$endNode;
  }
  _$setValue(e, o = this) {
    var i;
    if (this.parentNode === null)
      throw new Error(
        "This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.",
      );
    if (((e = Ce(this, e, o)), We(e)))
      e === A || e == null || e === ''
        ? (this._$committedValue !== A &&
            (m == null ||
              m({
                kind: 'commit nothing to child',
                start: this._$startNode,
                end: this._$endNode,
                parent: this._$parent,
                options: this.options,
              }),
            this._$clear()),
          (this._$committedValue = A))
        : e !== this._$committedValue && e !== pe && this._commitText(e);
    else if (e._$litType$ !== void 0) this._commitTemplateResult(e);
    else if (e.nodeType !== void 0) {
      if (
        ((i = this.options) === null || i === void 0 ? void 0 : i.host) === e
      ) {
        this._commitText(
          "[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]",
        ),
          console.warn(
            'Attempted to render the template host',
            e,
            'inside itself. This is almost always a mistake, and in dev mode ',
            "we render some warning text. In production however, we'll ",
            'render it, which will usually result in an error, and sometimes ',
            'in the element disappearing from the DOM.',
          );
        return;
      }
      this._commitNode(e);
    } else Cr(e) ? this._commitIterable(e) : this._commitText(e);
  }
  _insert(e) {
    return U(U(this._$startNode).parentNode).insertBefore(e, this._$endNode);
  }
  _commitNode(e) {
    var o;
    if (this._$committedValue !== e) {
      if ((this._$clear(), ue !== st)) {
        const i =
          (o = this._$startNode.parentNode) === null || o === void 0
            ? void 0
            : o.nodeName;
        if (i === 'STYLE' || i === 'SCRIPT') {
          let r = 'Forbidden';
          throw (
            (i === 'STYLE'
              ? (r =
                  'Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.')
              : (r =
                  'Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.'),
            new Error(r))
          );
        }
      }
      m == null ||
        m({
          kind: 'commit node',
          start: this._$startNode,
          parent: this._$parent,
          value: e,
          options: this.options,
        }),
        (this._$committedValue = this._insert(e));
    }
  }
  _commitText(e) {
    if (this._$committedValue !== A && We(this._$committedValue)) {
      const o = U(this._$startNode).nextSibling;
      this._textSanitizer === void 0 &&
        (this._textSanitizer = to(o, 'data', 'property')),
        (e = this._textSanitizer(e)),
        m == null ||
          m({ kind: 'commit text', node: o, value: e, options: this.options }),
        (o.data = e);
    } else {
      const o = he.createTextNode('');
      this._commitNode(o),
        this._textSanitizer === void 0 &&
          (this._textSanitizer = to(o, 'data', 'property')),
        (e = this._textSanitizer(e)),
        m == null ||
          m({ kind: 'commit text', node: o, value: e, options: this.options }),
        (o.data = e);
    }
    this._$committedValue = e;
  }
  _commitTemplateResult(e) {
    var o;
    const { values: i, ['_$litType$']: r } = e,
      n =
        typeof r == 'number'
          ? this._$getTemplate(e)
          : (r.el === void 0 &&
              (r.el = De.createElement(Jo(r.h, r.h[0]), this.options)),
            r);
    if (
      ((o = this._$committedValue) === null || o === void 0
        ? void 0
        : o._$template) === n
    )
      m == null ||
        m({
          kind: 'template updating',
          template: n,
          instance: this._$committedValue,
          parts: this._$committedValue._$parts,
          options: this.options,
          values: i,
        }),
        this._$committedValue._update(i);
    else {
      const s = new Lr(n, this),
        a = s._clone(this.options);
      m == null ||
        m({
          kind: 'template instantiated',
          template: n,
          instance: s,
          parts: s._$parts,
          options: this.options,
          fragment: a,
          values: i,
        }),
        s._update(i),
        m == null ||
          m({
            kind: 'template instantiated and updated',
            template: n,
            instance: s,
            parts: s._$parts,
            options: this.options,
            fragment: a,
            values: i,
          }),
        this._commitNode(a),
        (this._$committedValue = s);
    }
  }
  _$getTemplate(e) {
    let o = Oo.get(e.strings);
    return o === void 0 && Oo.set(e.strings, (o = new De(e))), o;
  }
  _commitIterable(e) {
    Qo(this._$committedValue) || ((this._$committedValue = []), this._$clear());
    const o = this._$committedValue;
    let i = 0,
      r;
    for (const n of e)
      i === o.length
        ? o.push(
            (r = new je(
              this._insert(Le()),
              this._insert(Le()),
              this,
              this.options,
            )),
          )
        : (r = o[i]),
        r._$setValue(n),
        i++;
    i < o.length &&
      (this._$clear(r && U(r._$endNode).nextSibling, i), (o.length = i));
  }
  _$clear(e = U(this._$startNode).nextSibling, o) {
    var i;
    for (
      (i = this._$notifyConnectionChanged) === null ||
      i === void 0 ||
      i.call(this, !1, !0, o);
      e && e !== this._$endNode;

    ) {
      const r = U(e).nextSibling;
      U(e).remove(), (e = r);
    }
  }
  setConnected(e) {
    var o;
    if (this._$parent === void 0)
      (this.__isConnected = e),
        (o = this._$notifyConnectionChanged) === null ||
          o === void 0 ||
          o.call(this, e);
    else
      throw new Error(
        'part.setConnected() may only be called on a RootPart returned from render().',
      );
  }
}
class at {
  constructor(e, o, i, r, n) {
    (this.type = ao),
      (this._$committedValue = A),
      (this._$disconnectableChildren = void 0),
      (this.element = e),
      (this.name = o),
      (this._$parent = r),
      (this.options = n),
      i.length > 2 || i[0] !== '' || i[1] !== ''
        ? ((this._$committedValue = new Array(i.length - 1).fill(new String())),
          (this.strings = i))
        : (this._$committedValue = A),
      (this._sanitizer = void 0);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(e, o = this, i, r) {
    const n = this.strings;
    let s = !1;
    if (n === void 0)
      (e = Ce(this, e, o, 0)),
        (s = !We(e) || (e !== this._$committedValue && e !== pe)),
        s && (this._$committedValue = e);
    else {
      const a = e;
      e = n[0];
      let c, d;
      for (c = 0; c < n.length - 1; c++)
        (d = Ce(this, a[i + c], o, c)),
          d === pe && (d = this._$committedValue[c]),
          s || (s = !We(d) || d !== this._$committedValue[c]),
          d === A ? (e = A) : e !== A && (e += (d ?? '') + n[c + 1]),
          (this._$committedValue[c] = d);
    }
    s && !r && this._commitValue(e);
  }
  _commitValue(e) {
    e === A
      ? U(this.element).removeAttribute(this.name)
      : (this._sanitizer === void 0 &&
          (this._sanitizer = ue(this.element, this.name, 'attribute')),
        (e = this._sanitizer(e ?? '')),
        m == null ||
          m({
            kind: 'commit attribute',
            element: this.element,
            name: this.name,
            value: e,
            options: this.options,
          }),
        U(this.element).setAttribute(this.name, e ?? ''));
  }
}
class Wr extends at {
  constructor() {
    super(...arguments), (this.type = Ar);
  }
  _commitValue(e) {
    this._sanitizer === void 0 &&
      (this._sanitizer = ue(this.element, this.name, 'property')),
      (e = this._sanitizer(e)),
      m == null ||
        m({
          kind: 'commit property',
          element: this.element,
          name: this.name,
          value: e,
          options: this.options,
        }),
      (this.element[this.name] = e === A ? void 0 : e);
  }
}
const Dr = $e ? $e.emptyScript : '';
class Ur extends at {
  constructor() {
    super(...arguments), (this.type = Ir);
  }
  _commitValue(e) {
    m == null ||
      m({
        kind: 'commit boolean attribute',
        element: this.element,
        name: this.name,
        value: !!(e && e !== A),
        options: this.options,
      }),
      e && e !== A
        ? U(this.element).setAttribute(this.name, Dr)
        : U(this.element).removeAttribute(this.name);
  }
}
class jr extends at {
  constructor(e, o, i, r, n) {
    if ((super(e, o, i, r, n), (this.type = Rr), this.strings !== void 0))
      throw new Error(
        `A \`<${e.localName}>\` has a \`@${o}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`,
      );
  }
  _$setValue(e, o = this) {
    var i;
    if (
      ((e = (i = Ce(this, e, o, 0)) !== null && i !== void 0 ? i : A), e === pe)
    )
      return;
    const r = this._$committedValue,
      n =
        (e === A && r !== A) ||
        e.capture !== r.capture ||
        e.once !== r.once ||
        e.passive !== r.passive,
      s = e !== A && (r === A || n);
    m == null ||
      m({
        kind: 'commit event listener',
        element: this.element,
        name: this.name,
        value: e,
        options: this.options,
        removeListener: n,
        addListener: s,
        oldListener: r,
      }),
      n && this.element.removeEventListener(this.name, this, r),
      s && this.element.addEventListener(this.name, this, e),
      (this._$committedValue = e);
  }
  handleEvent(e) {
    var o, i;
    typeof this._$committedValue == 'function'
      ? this._$committedValue.call(
          (i =
            (o = this.options) === null || o === void 0 ? void 0 : o.host) !==
            null && i !== void 0
            ? i
            : this.element,
          e,
        )
      : this._$committedValue.handleEvent(e);
  }
}
class zr {
  constructor(e, o, i) {
    (this.element = e),
      (this.type = lo),
      (this._$disconnectableChildren = void 0),
      (this._$parent = o),
      (this.options = i);
  }
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$setValue(e) {
    m == null ||
      m({
        kind: 'commit to element binding',
        element: this.element,
        value: e,
        options: this.options,
      }),
      Ce(this, e);
  }
}
const _t = W.litHtmlPolyfillSupportDevMode;
_t == null || _t(De, je);
((wt = W.litHtmlVersions) !== null && wt !== void 0
  ? wt
  : (W.litHtmlVersions = [])
).push('2.8.0');
W.litHtmlVersions.length > 1 &&
  tt(
    'multiple-versions',
    'Multiple versions of Lit loaded. Loading multiple versions is not recommended.',
  );
const et = (t, e, o) => {
  var i, r;
  if (e == null)
    throw new TypeError(`The container to render into may not be ${e}`);
  const n = br++,
    s =
      (i = o == null ? void 0 : o.renderBefore) !== null && i !== void 0
        ? i
        : e;
  let a = s._$litPart$;
  if (
    (m == null ||
      m({
        kind: 'begin render',
        id: n,
        value: t,
        container: e,
        options: o,
        part: a,
      }),
    a === void 0)
  ) {
    const c =
      (r = o == null ? void 0 : o.renderBefore) !== null && r !== void 0
        ? r
        : null;
    s._$litPart$ = a = new je(e.insertBefore(Le(), c), c, void 0, o ?? {});
  }
  return (
    a._$setValue(t),
    m == null ||
      m({
        kind: 'end render',
        id: n,
        value: t,
        container: e,
        options: o,
        part: a,
      }),
    a
  );
};
(et.setSanitizer = xr),
  (et.createSanitizer = to),
  (et._testOnlyClearSanitizerFactoryDoNotCallOrElse = _r);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var $t, Ct, Ot;
let co;
{
  const t =
    ($t = globalThis.litIssuedWarnings) !== null && $t !== void 0
      ? $t
      : (globalThis.litIssuedWarnings = new Set());
  co = (e, o) => {
    (o += ` See https://lit.dev/msg/${e} for more information.`),
      t.has(o) || (console.warn(o), t.add(o));
  };
}
class f extends Z {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this.__childPart = void 0);
  }
  createRenderRoot() {
    var e, o;
    const i = super.createRenderRoot();
    return (
      ((e = (o = this.renderOptions).renderBefore) !== null && e !== void 0) ||
        (o.renderBefore = i.firstChild),
      i
    );
  }
  update(e) {
    const o = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this.__childPart = et(o, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      (e = this.__childPart) === null || e === void 0 || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      (e = this.__childPart) === null || e === void 0 || e.setConnected(!1);
  }
  render() {
    return pe;
  }
}
f.finalized = !0;
f._$litElement$ = !0;
(Ct = globalThis.litElementHydrateSupport) === null ||
  Ct === void 0 ||
  Ct.call(globalThis, { LitElement: f });
const Et = globalThis.litElementPolyfillSupportDevMode;
Et == null || Et({ LitElement: f });
f.finalize = function () {
  if (!Z.finalize.call(this)) return !1;
  const e = (o, i, r = !1) => {
    if (o.hasOwnProperty(i)) {
      const n = (typeof o == 'function' ? o : o.constructor).name;
      co(
        r ? 'renamed-api' : 'removed-api',
        `\`${i}\` is implemented on class ${n}. It has been ${r ? 'renamed' : 'removed'} in this version of LitElement.`,
      );
    }
  };
  return (
    e(this, 'render'),
    e(this, 'getStyles', !0),
    e(this.prototype, 'adoptStyles'),
    !0
  );
};
((Ot = globalThis.litElementVersions) !== null && Ot !== void 0
  ? Ot
  : (globalThis.litElementVersions = [])
).push('3.3.3');
globalThis.litElementVersions.length > 1 &&
  co(
    'multiple-versions',
    'Multiple versions of Lit loaded. Loading multiple versions is not recommended.',
  );
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Vr = (t, e) => (customElements.define(t, e), e),
  Br = (t, e) => {
    const { kind: o, elements: i } = e;
    return {
      kind: o,
      elements: i,
      finisher(r) {
        customElements.define(t, r);
      },
    };
  },
  v = (t) => (e) => (typeof e == 'function' ? Vr(t, e) : Br(t, e));
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Hr = (t, e) =>
    e.kind === 'method' && e.descriptor && !('value' in e.descriptor)
      ? {
          ...e,
          finisher(o) {
            o.createProperty(e.key, t);
          },
        }
      : {
          kind: 'field',
          key: Symbol(),
          placement: 'own',
          descriptor: {},
          originalKey: e.key,
          initializer() {
            typeof e.initializer == 'function' &&
              (this[e.key] = e.initializer.call(this));
          },
          finisher(o) {
            o.createProperty(e.key, t);
          },
        },
  Zr = (t, e, o) => {
    e.constructor.createProperty(o, t);
  };
function p(t) {
  return (e, o) => (o !== void 0 ? Zr(t, e, o) : Hr(t, e));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function D(t) {
  return p({ ...t, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var kt;
const Fr = window;
((kt = Fr.HTMLSlotElement) === null || kt === void 0
  ? void 0
  : kt.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const qr = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  Kr =
    (t) =>
    (...e) => ({ _$litDirective$: t, values: e });
class Yr {
  constructor(e) {}
  get _$isConnected() {
    return this._$parent._$isConnected;
  }
  _$initialize(e, o, i) {
    (this.__part = e), (this._$parent = o), (this.__attributeIndex = i);
  }
  _$resolve(e, o) {
    return this.update(e, o);
  }
  update(e, o) {
    return this.render(...o);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Qr extends Yr {
  constructor(e) {
    var o;
    if (
      (super(e),
      e.type !== qr.ATTRIBUTE ||
        e.name !== 'class' ||
        ((o = e.strings) === null || o === void 0 ? void 0 : o.length) > 2)
    )
      throw new Error(
        '`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.',
      );
  }
  render(e) {
    return (
      ' ' +
      Object.keys(e)
        .filter((o) => e[o])
        .join(' ') +
      ' '
    );
  }
  update(e, [o]) {
    var i, r;
    if (this._previousClasses === void 0) {
      (this._previousClasses = new Set()),
        e.strings !== void 0 &&
          (this._staticClasses = new Set(
            e.strings
              .join(' ')
              .split(/\s/)
              .filter((s) => s !== ''),
          ));
      for (const s in o)
        o[s] &&
          !(
            !((i = this._staticClasses) === null || i === void 0) && i.has(s)
          ) &&
          this._previousClasses.add(s);
      return this.render(o);
    }
    const n = e.element.classList;
    this._previousClasses.forEach((s) => {
      s in o || (n.remove(s), this._previousClasses.delete(s));
    });
    for (const s in o) {
      const a = !!o[s];
      a !== this._previousClasses.has(s) &&
        !(!((r = this._staticClasses) === null || r === void 0) && r.has(s)) &&
        (a
          ? (n.add(s), this._previousClasses.add(s))
          : (n.remove(s), this._previousClasses.delete(s)));
    }
    return pe;
  }
}
const K = Kr(Qr),
  Pt = new WeakMap();
function er(t) {
  return (
    Pt.has(t) || Pt.set(t, { transforms: [], values: new Map() }), Pt.get(t)
  );
}
function Gr(t, e) {
  return t.has(e) || t.set(e, new sr()), t.get(e);
}
const Xr = ['', 'X', 'Y', 'Z'],
  Jr = ['translate', 'scale', 'rotate', 'skew'],
  it = { x: 'translateX', y: 'translateY', z: 'translateZ' },
  Eo = {
    syntax: '<angle>',
    initialValue: '0deg',
    toDefaultUnit: (t) => t + 'deg',
  },
  ei = {
    translate: {
      syntax: '<length-percentage>',
      initialValue: '0px',
      toDefaultUnit: (t) => t + 'px',
    },
    rotate: Eo,
    scale: { syntax: '<number>', initialValue: 1, toDefaultUnit: zo },
    skew: Eo,
  },
  Ue = new Map(),
  mo = (t) => `--motion-${t}`,
  nt = ['x', 'y', 'z'];
Jr.forEach((t) => {
  Xr.forEach((e) => {
    nt.push(t + e), Ue.set(mo(t + e), ei[t]);
  });
});
const ti = (t, e) => nt.indexOf(t) - nt.indexOf(e),
  oi = new Set(nt),
  tr = (t) => oi.has(t),
  ri = (t, e) => {
    it[e] && (e = it[e]);
    const { transforms: o } = er(t);
    ar(o, e), (t.style.transform = ii(o));
  },
  ii = (t) => t.sort(ti).reduce(ni, '').trim(),
  ni = (t, e) => `${t} ${e}(var(${mo(e)}))`,
  ro = (t) => t.startsWith('--'),
  ko = new Set();
function si(t) {
  if (!ko.has(t)) {
    ko.add(t);
    try {
      const { syntax: e, initialValue: o } = Ue.has(t) ? Ue.get(t) : {};
      CSS.registerProperty({
        name: t,
        inherits: !1,
        syntax: e,
        initialValue: o,
      });
    } catch {}
  }
}
const Tt = (t, e) => document.createElement('div').animate(t, e),
  Po = {
    cssRegisterProperty: () =>
      typeof CSS < 'u' && Object.hasOwnProperty.call(CSS, 'registerProperty'),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, 'animate'),
    partialKeyframes: () => {
      try {
        Tt({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Tt({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        Tt({ opacity: 0 }, { easing: 'linear(0, 1)' });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  St = {},
  ye = {};
for (const t in Po)
  ye[t] = () => (St[t] === void 0 && (St[t] = Po[t]()), St[t]);
const ai = 0.015,
  li = (t, e) => {
    let o = '';
    const i = Math.round(e / ai);
    for (let r = 0; r < i; r++) o += t(cr(0, i - 1, r)) + ', ';
    return o.substring(0, o.length - 2);
  },
  To = (t, e) =>
    Ne(t)
      ? ye.linearEasing()
        ? `linear(${li(t, e)})`
        : le.easing
      : lr(t)
        ? ci(t)
        : t,
  ci = ([t, e, o, i]) => `cubic-bezier(${t}, ${e}, ${o}, ${i})`;
function di(t, e) {
  for (let o = 0; o < t.length; o++)
    t[o] === null && (t[o] = o ? t[o - 1] : e());
  return t;
}
const mi = (t) => (Array.isArray(t) ? t : [t]);
function io(t) {
  return it[t] && (t = it[t]), tr(t) ? mo(t) : t;
}
const Be = {
  get: (t, e) => {
    e = io(e);
    let o = ro(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
    if (!o && o !== 0) {
      const i = Ue.get(e);
      i && (o = i.initialValue);
    }
    return o;
  },
  set: (t, e, o) => {
    (e = io(e)), ro(e) ? t.style.setProperty(e, o) : (t.style[e] = o);
  },
};
function or(t, e = !0) {
  if (!(!t || t.playState === 'finished'))
    try {
      t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
    } catch {}
}
function hi(t, e) {
  var o;
  let i = (e == null ? void 0 : e.toDefaultUnit) || zo;
  const r = t[t.length - 1];
  if (dr(r)) {
    const n =
      ((o = r.match(/(-?[\d.]+)([a-z%]*)/)) === null || o === void 0
        ? void 0
        : o[2]) || '';
    n && (i = (s) => s + n);
  }
  return i;
}
function pi() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function ui(t, e, o, i = {}, r) {
  const n = pi(),
    s = i.record !== !1 && n;
  let a,
    {
      duration: c = le.duration,
      delay: d = le.delay,
      endDelay: E = le.endDelay,
      repeat: C = le.repeat,
      easing: u = le.easing,
      persist: x = !1,
      direction: O,
      offset: b,
      allowWebkitAcceleration: P = !1,
      autoplay: $ = !0,
    } = i;
  const R = er(t),
    N = tr(e);
  let j = ye.waapi();
  N && ri(t, e);
  const z = io(e),
    ze = Gr(R.values, z),
    Y = Ue.get(z);
  return (
    or(ze.animation, !(po(u) && ze.generator) && i.record !== !1),
    () => {
      const Ve = () => {
        var S, Oe;
        return (Oe =
          (S = Be.get(t, z)) !== null && S !== void 0
            ? S
            : Y == null
              ? void 0
              : Y.initialValue) !== null && Oe !== void 0
          ? Oe
          : 0;
      };
      let I = di(mi(o), Ve);
      const ho = hi(I, Y);
      if (po(u)) {
        const S = u.createAnimation(I, e !== 'opacity', Ve, z, ze);
        (u = S.easing), (I = S.keyframes || I), (c = S.duration || c);
      }
      if (
        (ro(z) && (ye.cssRegisterProperty() ? si(z) : (j = !1)),
        N && !ye.linearEasing() && (Ne(u) || (lt(u) && u.some(Ne))) && (j = !1),
        j)
      ) {
        Y && (I = I.map((re) => (uo(re) ? Y.toDefaultUnit(re) : re))),
          I.length === 1 && (!ye.partialKeyframes() || s) && I.unshift(Ve());
        const S = {
          delay: Me.ms(d),
          duration: Me.ms(c),
          endDelay: Me.ms(E),
          easing: lt(u) ? void 0 : To(u, c),
          direction: O,
          iterations: C + 1,
          fill: 'both',
        };
        (a = t.animate(
          {
            [z]: I,
            offset: b,
            easing: lt(u) ? u.map((re) => To(re, c)) : void 0,
          },
          S,
        )),
          a.finished ||
            (a.finished = new Promise((re, ir) => {
              (a.onfinish = re), (a.oncancel = ir);
            }));
        const Oe = I[I.length - 1];
        a.finished
          .then(() => {
            x || (Be.set(t, z, Oe), a.cancel());
          })
          .catch(Vo),
          P || (a.playbackRate = 1.000001);
      } else if (r && N)
        (I = I.map((S) => (typeof S == 'string' ? parseFloat(S) : S))),
          I.length === 1 && I.unshift(parseFloat(Ve())),
          (a = new r(
            (S) => {
              Be.set(t, z, ho ? ho(S) : S);
            },
            I,
            Object.assign(Object.assign({}, i), { duration: c, easing: u }),
          ));
      else {
        const S = I[I.length - 1];
        Be.set(t, z, Y && uo(S) ? Y.toDefaultUnit(S) : S);
      }
      return (
        s &&
          n(
            t,
            e,
            I,
            { duration: c, delay: d, easing: u, repeat: C, offset: b },
            'motion-one',
          ),
        ze.setAnimation(a),
        a && !$ && a.pause(),
        a
      );
    }
  );
}
const gi = (t, e) =>
  t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
function fi(t, e) {
  var o;
  return (
    typeof t == 'string'
      ? e
        ? (((o = e[t]) !== null && o !== void 0) ||
            (e[t] = document.querySelectorAll(t)),
          (t = e[t]))
        : (t = document.querySelectorAll(t))
      : t instanceof Element && (t = [t]),
    Array.from(t || [])
  );
}
const wi = (t) => t(),
  rr = (t, e, o = le.duration) =>
    new Proxy(
      { animations: t.map(wi).filter(Boolean), duration: o, options: e },
      bi,
    ),
  vi = (t) => t.animations[0],
  bi = {
    get: (t, e) => {
      const o = vi(t);
      switch (e) {
        case 'duration':
          return t.duration;
        case 'currentTime':
          return Me.s((o == null ? void 0 : o[e]) || 0);
        case 'playbackRate':
        case 'playState':
          return o == null ? void 0 : o[e];
        case 'finished':
          return (
            t.finished ||
              (t.finished = Promise.all(t.animations.map(yi)).catch(Vo)),
            t.finished
          );
        case 'stop':
          return () => {
            t.animations.forEach((i) => or(i));
          };
        case 'forEachNative':
          return (i) => {
            t.animations.forEach((r) => i(r, t));
          };
        default:
          return typeof (o == null ? void 0 : o[e]) > 'u'
            ? void 0
            : () => t.animations.forEach((i) => i[e]());
      }
    },
    set: (t, e, o) => {
      switch (e) {
        case 'currentTime':
          o = Me.ms(o);
        case 'playbackRate':
          for (let i = 0; i < t.animations.length; i++) t.animations[i][e] = o;
          return !0;
      }
      return !1;
    },
  },
  yi = (t) => t.finished;
function xi(t, e, o) {
  return Ne(t) ? t(e, o) : t;
}
function _i(t) {
  return function (o, i, r = {}) {
    o = fi(o);
    const n = o.length;
    go(!!n, 'No valid element provided.'), go(!!i, 'No keyframes defined.');
    const s = [];
    for (let a = 0; a < n; a++) {
      const c = o[a];
      for (const d in i) {
        const E = gi(r, d);
        E.delay = xi(E.delay, a, n);
        const C = ui(c, d, i[d], E, t);
        s.push(C);
      }
    }
    return rr(s, r, r.duration);
  };
}
const $i = _i(Bo);
function Ci(t, e = {}) {
  return rr(
    [
      () => {
        const o = new Bo(t, [0, 1], e);
        return o.finished.catch(() => {}), o;
      },
    ],
    e,
    e.duration,
  );
}
function de(t, e, o) {
  return (Ne(t) ? Ci : $i)(t, e, o);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const M = (t) => t ?? A;
var Oi = Object.defineProperty,
  So = Object.getOwnPropertySymbols,
  Ei = Object.prototype.hasOwnProperty,
  ki = Object.prototype.propertyIsEnumerable,
  Ao = (t, e, o) =>
    e in t
      ? Oi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[e] = o),
  At = (t, e) => {
    for (var o in e || (e = {})) Ei.call(e, o) && Ao(t, o, e[o]);
    if (So) for (var o of So(e)) ki.call(e, o) && Ao(t, o, e[o]);
    return t;
  };
function Pi() {
  var t;
  const e = (t = _e.state.themeMode) != null ? t : 'dark',
    o = {
      light: {
        foreground: {
          1: 'rgb(20,20,20)',
          2: 'rgb(121,134,134)',
          3: 'rgb(158,169,169)',
        },
        background: {
          1: 'rgb(255,255,255)',
          2: 'rgb(241,243,243)',
          3: 'rgb(228,231,231)',
        },
        overlay: 'rgba(0,0,0,0.1)',
      },
      dark: {
        foreground: {
          1: 'rgb(228,231,231)',
          2: 'rgb(148,158,158)',
          3: 'rgb(110,119,119)',
        },
        background: {
          1: 'rgb(20,20,20)',
          2: 'rgb(39,42,42)',
          3: 'rgb(59,64,64)',
        },
        overlay: 'rgba(255,255,255,0.1)',
      },
    }[e];
  return {
    '--wcm-color-fg-1': o.foreground[1],
    '--wcm-color-fg-2': o.foreground[2],
    '--wcm-color-fg-3': o.foreground[3],
    '--wcm-color-bg-1': o.background[1],
    '--wcm-color-bg-2': o.background[2],
    '--wcm-color-bg-3': o.background[3],
    '--wcm-color-overlay': o.overlay,
  };
}
function Io() {
  return {
    '--wcm-accent-color': '#3396FF',
    '--wcm-accent-fill-color': '#FFFFFF',
    '--wcm-z-index': '89',
    '--wcm-background-color': '#3396FF',
    '--wcm-background-border-radius': '8px',
    '--wcm-container-border-radius': '30px',
    '--wcm-wallet-icon-border-radius': '15px',
    '--wcm-wallet-icon-large-border-radius': '30px',
    '--wcm-wallet-icon-small-border-radius': '7px',
    '--wcm-input-border-radius': '28px',
    '--wcm-button-border-radius': '10px',
    '--wcm-notification-border-radius': '36px',
    '--wcm-secondary-button-border-radius': '28px',
    '--wcm-icon-button-border-radius': '50%',
    '--wcm-button-hover-highlight-border-radius': '10px',
    '--wcm-text-big-bold-size': '20px',
    '--wcm-text-big-bold-weight': '600',
    '--wcm-text-big-bold-line-height': '24px',
    '--wcm-text-big-bold-letter-spacing': '-0.03em',
    '--wcm-text-big-bold-text-transform': 'none',
    '--wcm-text-xsmall-bold-size': '10px',
    '--wcm-text-xsmall-bold-weight': '700',
    '--wcm-text-xsmall-bold-line-height': '12px',
    '--wcm-text-xsmall-bold-letter-spacing': '0.02em',
    '--wcm-text-xsmall-bold-text-transform': 'uppercase',
    '--wcm-text-xsmall-regular-size': '12px',
    '--wcm-text-xsmall-regular-weight': '600',
    '--wcm-text-xsmall-regular-line-height': '14px',
    '--wcm-text-xsmall-regular-letter-spacing': '-0.03em',
    '--wcm-text-xsmall-regular-text-transform': 'none',
    '--wcm-text-small-thin-size': '14px',
    '--wcm-text-small-thin-weight': '500',
    '--wcm-text-small-thin-line-height': '16px',
    '--wcm-text-small-thin-letter-spacing': '-0.03em',
    '--wcm-text-small-thin-text-transform': 'none',
    '--wcm-text-small-regular-size': '14px',
    '--wcm-text-small-regular-weight': '600',
    '--wcm-text-small-regular-line-height': '16px',
    '--wcm-text-small-regular-letter-spacing': '-0.03em',
    '--wcm-text-small-regular-text-transform': 'none',
    '--wcm-text-medium-regular-size': '16px',
    '--wcm-text-medium-regular-weight': '600',
    '--wcm-text-medium-regular-line-height': '20px',
    '--wcm-text-medium-regular-letter-spacing': '-0.03em',
    '--wcm-text-medium-regular-text-transform': 'none',
    '--wcm-font-family':
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    '--wcm-font-feature-settings': "'tnum' on, 'lnum' on, 'case' on",
    '--wcm-success-color': 'rgb(38,181,98)',
    '--wcm-error-color': 'rgb(242, 90, 103)',
    '--wcm-overlay-background-color': 'rgba(0, 0, 0, 0.3)',
    '--wcm-overlay-backdrop-filter': 'none',
  };
}
const w = {
    getPreset(t) {
      return Io()[t];
    },
    setTheme() {
      const t = document.querySelector(':root'),
        { themeVariables: e } = _e.state;
      if (t) {
        const o = At(At(At({}, Pi()), Io()), e);
        Object.entries(o).forEach(([i, r]) => t.style.setProperty(i, r));
      }
    },
    globalCss: y`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`,
  },
  Ti = y`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var Si = Object.defineProperty,
  Ai = Object.getOwnPropertyDescriptor,
  ge = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ai(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Si(e, o, r), r;
  };
let Q = class extends f {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.iconLeft = void 0),
      (this.iconRight = void 0),
      (this.onClick = () => null),
      (this.variant = 'default');
  }
  render() {
    const t = {
      'wcm-icon-left': this.iconLeft !== void 0,
      'wcm-icon-right': this.iconRight !== void 0,
      'wcm-ghost': this.variant === 'ghost',
      'wcm-outline': this.variant === 'outline',
    };
    let e = 'inverse';
    return (
      this.variant === 'ghost' && (e = 'secondary'),
      this.variant === 'outline' && (e = 'accent'),
      l`<button class="${K(t)}" ?disabled="${this.disabled}" @click="${this.onClick}">${this.iconLeft}<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${this.iconRight}</button>`
    );
  }
};
(Q.styles = [w.globalCss, Ti]),
  ge([p({ type: Boolean })], Q.prototype, 'disabled', 2),
  ge([p()], Q.prototype, 'iconLeft', 2),
  ge([p()], Q.prototype, 'iconRight', 2),
  ge([p()], Q.prototype, 'onClick', 2),
  ge([p()], Q.prototype, 'variant', 2),
  (Q = ge([v('wcm-button')], Q));
const Ii = y`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var Ri = Object.defineProperty,
  Mi = Object.getOwnPropertyDescriptor,
  It = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Mi(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Ri(e, o, r), r;
  };
let ke = class extends f {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.variant = 'primary');
  }
  render() {
    const t = { 'wcm-secondary': this.variant === 'secondary' };
    return l`<button ?disabled="${this.disabled}" class="${K(t)}"><slot></slot></button>`;
  }
};
(ke.styles = [w.globalCss, Ii]),
  It([p({ type: Boolean })], ke.prototype, 'disabled', 2),
  It([p()], ke.prototype, 'variant', 2),
  (ke = It([v('wcm-button-big')], ke));
const Ni = y`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var Li = Object.defineProperty,
  Wi = Object.getOwnPropertyDescriptor,
  Di = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Wi(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Li(e, o, r), r;
  };
let Rt = class extends f {
  render() {
    return l`<div><slot></slot></div>`;
  }
};
(Rt.styles = [w.globalCss, Ni]), (Rt = Di([v('wcm-info-footer')], Rt));
const _ = {
    CROSS_ICON: k`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: k`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: k`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: k`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: k`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: k`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: k`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: k`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: k`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: k`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: k`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: k`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: k`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: k`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: k`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    SEARCH_ICON: k`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    WALLET_PLACEHOLDER: k`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    GLOBE_ICON: k`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
  },
  Ui = y`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var ji = Object.defineProperty,
  zi = Object.getOwnPropertyDescriptor,
  Vi = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? zi(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && ji(e, o, r), r;
  };
let Mt = class extends f {
  render() {
    return l`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${_.WALLET_CONNECT_LOGO} <button @click="${Ge.close}">${_.CROSS_ICON}</button></div>`;
  }
};
(Mt.styles = [w.globalCss, Ui]), (Mt = Vi([v('wcm-modal-backcard')], Mt));
const Bi = y`main{padding:20px;padding-top:0;width:100%}`;
var Hi = Object.defineProperty,
  Zi = Object.getOwnPropertyDescriptor,
  Fi = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Zi(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Hi(e, o, r), r;
  };
let Nt = class extends f {
  render() {
    return l`<main><slot></slot></main>`;
  }
};
(Nt.styles = [w.globalCss, Bi]), (Nt = Fi([v('wcm-modal-content')], Nt));
const qi = y`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var Ki = Object.defineProperty,
  Yi = Object.getOwnPropertyDescriptor,
  Qi = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Yi(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Ki(e, o, r), r;
  };
let Lt = class extends f {
  render() {
    return l`<footer><slot></slot></footer>`;
  }
};
(Lt.styles = [w.globalCss, qi]), (Lt = Qi([v('wcm-modal-footer')], Lt));
const Gi = y`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var Xi = Object.defineProperty,
  Ji = Object.getOwnPropertyDescriptor,
  Pe = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ji(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Xi(e, o, r), r;
  };
let ne = class extends f {
  constructor() {
    super(...arguments),
      (this.title = ''),
      (this.onAction = void 0),
      (this.actionIcon = void 0),
      (this.border = !1);
  }
  backBtnTemplate() {
    return l`<button class="wcm-back-btn" @click="${T.goBack}">${_.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return l`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const t = { 'wcm-border': this.border },
      e = T.state.history.length > 1,
      o = this.title
        ? l`<wcm-text variant="big-bold">${this.title}</wcm-text>`
        : l`<slot></slot>`;
    return l`<header class="${K(t)}">${e ? this.backBtnTemplate() : null} ${o} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
(ne.styles = [w.globalCss, Gi]),
  Pe([p()], ne.prototype, 'title', 2),
  Pe([p()], ne.prototype, 'onAction', 2),
  Pe([p()], ne.prototype, 'actionIcon', 2),
  Pe([p({ type: Boolean })], ne.prototype, 'border', 2),
  (ne = Pe([v('wcm-modal-header')], ne));
const h = {
    MOBILE_BREAKPOINT: 600,
    WCM_RECENT_WALLET_DATA: 'WCM_RECENT_WALLET_DATA',
    EXPLORER_WALLET_URL: 'https://explorer.walletconnect.com/?type=wallet',
    getShadowRootElement(t, e) {
      const o = t.renderRoot.querySelector(e);
      if (!o) throw new Error(`${e} not found`);
      return o;
    },
    getWalletIcon({ id: t, image_id: e }) {
      const { walletImages: o } = me.state;
      return o != null && o[t] ? o[t] : e ? L.getWalletImageUrl(e) : '';
    },
    getWalletName(t, e = !1) {
      return e && t.length > 8 ? `${t.substring(0, 8)}..` : t;
    },
    isMobileAnimation() {
      return window.innerWidth <= h.MOBILE_BREAKPOINT;
    },
    async preloadImage(t) {
      const e = new Promise((o, i) => {
        const r = new Image();
        (r.onload = o),
          (r.onerror = i),
          (r.crossOrigin = 'anonymous'),
          (r.src = t);
      });
      return Promise.race([e, g.wait(3e3)]);
    },
    getErrorMessage(t) {
      return t instanceof Error ? t.message : 'Unknown Error';
    },
    debounce(t, e = 500) {
      let o;
      return (...i) => {
        function r() {
          t(...i);
        }
        o && clearTimeout(o), (o = setTimeout(r, e));
      };
    },
    handleMobileLinking(t) {
      const { walletConnectUri: e } = B.state,
        { mobile: o, name: i } = t,
        r = o == null ? void 0 : o.native,
        n = o == null ? void 0 : o.universal;
      h.setRecentWallet(t);
      function s(a) {
        let c = '';
        r
          ? (c = g.formatUniversalUrl(r, a, i))
          : n && (c = g.formatNativeUrl(n, a, i)),
          g.openHref(c, '_self');
      }
      e && s(e);
    },
    handleAndroidLinking() {
      const { walletConnectUri: t } = B.state;
      t && (g.setWalletConnectAndroidDeepLink(t), g.openHref(t, '_self'));
    },
    async handleUriCopy() {
      const { walletConnectUri: t } = B.state;
      if (t)
        try {
          await navigator.clipboard.writeText(t),
            ee.openToast('Link copied', 'success');
        } catch {
          ee.openToast('Failed to copy', 'error');
        }
    },
    getCustomImageUrls() {
      const { walletImages: t } = me.state,
        e = Object.values(t ?? {});
      return Object.values(e);
    },
    truncate(t, e = 8) {
      return t.length <= e
        ? t
        : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`;
    },
    setRecentWallet(t) {
      try {
        localStorage.setItem(h.WCM_RECENT_WALLET_DATA, JSON.stringify(t));
      } catch {
        console.info('Unable to set recent wallet');
      }
    },
    getRecentWallet() {
      try {
        const t = localStorage.getItem(h.WCM_RECENT_WALLET_DATA);
        return t ? JSON.parse(t) : void 0;
      } catch {
        console.info('Unable to get recent wallet');
      }
    },
    caseSafeIncludes(t, e) {
      return t.toUpperCase().includes(e.toUpperCase());
    },
    openWalletExplorerUrl() {
      g.openHref(h.EXPLORER_WALLET_URL, '_blank');
    },
    getCachedRouterWalletPlatforms() {
      const { desktop: t, mobile: e } = g.getWalletRouterData(),
        o = !!(t != null && t.native),
        i = !!(t != null && t.universal),
        r = !!(e != null && e.native) || !!(e != null && e.universal);
      return { isDesktop: o, isMobile: r, isWeb: i };
    },
    goToConnectingView(t) {
      T.setData({ Wallet: t });
      const e = g.isMobile(),
        {
          isDesktop: o,
          isWeb: i,
          isMobile: r,
        } = h.getCachedRouterWalletPlatforms();
      e
        ? r
          ? T.push('MobileConnecting')
          : i
            ? T.push('WebConnecting')
            : T.push('InstallWallet')
        : o
          ? T.push('DesktopConnecting')
          : i
            ? T.push('WebConnecting')
            : r
              ? T.push('MobileQrcodeConnecting')
              : T.push('InstallWallet');
    },
  },
  en = y`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var tn = Object.defineProperty,
  on = Object.getOwnPropertyDescriptor,
  Wt = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? on(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && tn(e, o, r), r;
  };
let Te = class extends f {
  constructor() {
    super(),
      (this.view = T.state.view),
      (this.prevView = T.state.view),
      (this.unsubscribe = void 0),
      (this.oldHeight = '0px'),
      (this.resizeObserver = void 0),
      (this.unsubscribe = T.subscribe((t) => {
        this.view !== t.view && this.onChangeRoute();
      }));
  }
  firstUpdated() {
    (this.resizeObserver = new ResizeObserver(([t]) => {
      const e = `${t.contentRect.height}px`;
      this.oldHeight !== '0px' &&
        de(this.routerEl, { height: [this.oldHeight, e] }, { duration: 0.2 }),
        (this.oldHeight = e);
    })),
      this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var t, e;
    (t = this.unsubscribe) == null || t.call(this),
      (e = this.resizeObserver) == null || e.disconnect();
  }
  get routerEl() {
    return h.getShadowRootElement(this, '.wcm-router');
  }
  get contentEl() {
    return h.getShadowRootElement(this, '.wcm-content');
  }
  viewTemplate() {
    switch (this.view) {
      case 'ConnectWallet':
        return l`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case 'DesktopConnecting':
        return l`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case 'MobileConnecting':
        return l`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case 'WebConnecting':
        return l`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case 'MobileQrcodeConnecting':
        return l`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case 'WalletExplorer':
        return l`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case 'Qrcode':
        return l`<wcm-qrcode-view></wcm-qrcode-view>`;
      case 'InstallWallet':
        return l`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return l`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await de(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 },
    ).finished,
      (this.view = T.state.view),
      de(
        this.routerEl,
        { opacity: [0, 1], scale: [0.99, 1] },
        { duration: 0.37, delay: 0.05 },
      );
  }
  render() {
    return l`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
(Te.styles = [w.globalCss, en]),
  Wt([D()], Te.prototype, 'view', 2),
  Wt([D()], Te.prototype, 'prevView', 2),
  (Te = Wt([v('wcm-modal-router')], Te));
const rn = y`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var nn = Object.defineProperty,
  sn = Object.getOwnPropertyDescriptor,
  Ro = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? sn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && nn(e, o, r), r;
  };
let He = class extends f {
  constructor() {
    super(),
      (this.open = !1),
      (this.unsubscribe = void 0),
      (this.timeout = void 0),
      (this.unsubscribe = ee.subscribe((t) => {
        t.open
          ? ((this.open = !0),
            (this.timeout = setTimeout(() => ee.closeToast(), 2200)))
          : ((this.open = !1), clearTimeout(this.timeout));
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribe) == null || t.call(this),
      clearTimeout(this.timeout),
      ee.closeToast();
  }
  render() {
    const { message: t, variant: e } = ee.state,
      o = { 'wcm-success': e === 'success', 'wcm-error': e === 'error' };
    return this.open
      ? l`<div class="${K(o)}">${e === 'success' ? _.CHECKMARK_ICON : null} ${e === 'error' ? _.CROSS_ICON : null}<wcm-text variant="small-regular">${t}</wcm-text></div>`
      : null;
  }
};
(He.styles = [w.globalCss, rn]),
  Ro([D()], He.prototype, 'open', 2),
  (He = Ro([v('wcm-modal-toast')], He));
const an = 0.1,
  Mo = 2.5,
  F = 7;
function Dt(t, e, o) {
  return t === e ? !1 : (t - e < 0 ? e - t : t - e) <= o + an;
}
function ln(t, e) {
  const o = Array.prototype.slice.call(
      mr.create(t, { errorCorrectionLevel: e }).modules.data,
      0,
    ),
    i = Math.sqrt(o.length);
  return o.reduce(
    (r, n, s) => (s % i === 0 ? r.push([n]) : r[r.length - 1].push(n)) && r,
    [],
  );
}
const cn = {
    generate(t, e, o) {
      const i = '#141414',
        r = '#ffffff',
        n = [],
        s = ln(t, 'Q'),
        a = e / s.length,
        c = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      c.forEach(({ x: O, y: b }) => {
        const P = (s.length - F) * a * O,
          $ = (s.length - F) * a * b,
          R = 0.45;
        for (let N = 0; N < c.length; N += 1) {
          const j = a * (F - N * 2);
          n.push(
            k`<rect fill="${N % 2 === 0 ? i : r}" height="${j}" rx="${j * R}" ry="${j * R}" width="${j}" x="${P + a * N}" y="${$ + a * N}">`,
          );
        }
      });
      const d = Math.floor((o + 25) / a),
        E = s.length / 2 - d / 2,
        C = s.length / 2 + d / 2 - 1,
        u = [];
      s.forEach((O, b) => {
        O.forEach((P, $) => {
          if (
            s[b][$] &&
            !(
              (b < F && $ < F) ||
              (b > s.length - (F + 1) && $ < F) ||
              (b < F && $ > s.length - (F + 1))
            ) &&
            !(b > E && b < C && $ > E && $ < C)
          ) {
            const R = b * a + a / 2,
              N = $ * a + a / 2;
            u.push([R, N]);
          }
        });
      });
      const x = {};
      return (
        u.forEach(([O, b]) => {
          x[O] ? x[O].push(b) : (x[O] = [b]);
        }),
        Object.entries(x)
          .map(([O, b]) => {
            const P = b.filter(($) => b.every((R) => !Dt($, R, a)));
            return [Number(O), P];
          })
          .forEach(([O, b]) => {
            b.forEach((P) => {
              n.push(k`<circle cx="${O}" cy="${P}" fill="${i}" r="${a / Mo}">`);
            });
          }),
        Object.entries(x)
          .filter(([O, b]) => b.length > 1)
          .map(([O, b]) => {
            const P = b.filter(($) => b.some((R) => Dt($, R, a)));
            return [Number(O), P];
          })
          .map(([O, b]) => {
            b.sort(($, R) => ($ < R ? -1 : 1));
            const P = [];
            for (const $ of b) {
              const R = P.find((N) => N.some((j) => Dt($, j, a)));
              R ? R.push($) : P.push([$]);
            }
            return [O, P.map(($) => [$[0], $[$.length - 1]])];
          })
          .forEach(([O, b]) => {
            b.forEach(([P, $]) => {
              n.push(
                k`<line x1="${O}" x2="${O}" y1="${P}" y2="${$}" stroke="${i}" stroke-width="${a / (Mo / 2)}" stroke-linecap="round">`,
              );
            });
          }),
        n
      );
    },
  },
  dn = y`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var mn = Object.defineProperty,
  hn = Object.getOwnPropertyDescriptor,
  fe = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? hn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && mn(e, o, r), r;
  };
let G = class extends f {
  constructor() {
    super(...arguments),
      (this.uri = ''),
      (this.size = 0),
      (this.imageId = void 0),
      (this.walletId = void 0),
      (this.imageUrl = void 0);
  }
  svgTemplate() {
    const t = _e.state.themeMode === 'light' ? this.size : this.size - 36;
    return k`<svg height="${t}" width="${t}">${cn.generate(this.uri, t, t / 4)}</svg>`;
  }
  render() {
    const t = { 'wcm-dark': _e.state.themeMode === 'dark' };
    return l`<div style="${`width: ${this.size}px`}" class="${K(t)}">${this.walletId || this.imageUrl ? l`<wcm-wallet-image walletId="${M(this.walletId)}" imageId="${M(this.imageId)}" imageUrl="${M(this.imageUrl)}"></wcm-wallet-image>` : _.WALLET_CONNECT_ICON_COLORED} ${this.svgTemplate()}</div>`;
  }
};
(G.styles = [w.globalCss, dn]),
  fe([p()], G.prototype, 'uri', 2),
  fe([p({ type: Number })], G.prototype, 'size', 2),
  fe([p()], G.prototype, 'imageId', 2),
  fe([p()], G.prototype, 'walletId', 2),
  fe([p()], G.prototype, 'imageUrl', 2),
  (G = fe([v('wcm-qrcode')], G));
const pn = y`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var un = Object.defineProperty,
  gn = Object.getOwnPropertyDescriptor,
  No = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? gn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && un(e, o, r), r;
  };
let Ze = class extends f {
  constructor() {
    super(...arguments), (this.onChange = () => null);
  }
  render() {
    return l`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${_.SEARCH_ICON}`;
  }
};
(Ze.styles = [w.globalCss, pn]),
  No([p()], Ze.prototype, 'onChange', 2),
  (Ze = No([v('wcm-search-input')], Ze));
const fn = y`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var wn = Object.defineProperty,
  vn = Object.getOwnPropertyDescriptor,
  bn = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? vn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && wn(e, o, r), r;
  };
let Ut = class extends f {
  render() {
    return l`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
(Ut.styles = [w.globalCss, fn]), (Ut = bn([v('wcm-spinner')], Ut));
const yn = y`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var xn = Object.defineProperty,
  _n = Object.getOwnPropertyDescriptor,
  jt = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? _n(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && xn(e, o, r), r;
  };
let Se = class extends f {
  constructor() {
    super(...arguments),
      (this.variant = 'medium-regular'),
      (this.color = 'primary');
  }
  render() {
    const t = {
      'wcm-big-bold': this.variant === 'big-bold',
      'wcm-medium-regular': this.variant === 'medium-regular',
      'wcm-small-regular': this.variant === 'small-regular',
      'wcm-small-thin': this.variant === 'small-thin',
      'wcm-xsmall-regular': this.variant === 'xsmall-regular',
      'wcm-xsmall-bold': this.variant === 'xsmall-bold',
      'wcm-color-primary': this.color === 'primary',
      'wcm-color-secondary': this.color === 'secondary',
      'wcm-color-tertiary': this.color === 'tertiary',
      'wcm-color-inverse': this.color === 'inverse',
      'wcm-color-accnt': this.color === 'accent',
      'wcm-color-error': this.color === 'error',
    };
    return l`<span><slot class="${K(t)}"></slot></span>`;
  }
};
(Se.styles = [w.globalCss, yn]),
  jt([p()], Se.prototype, 'variant', 2),
  jt([p()], Se.prototype, 'color', 2),
  (Se = jt([v('wcm-text')], Se));
const $n = y`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var Cn = Object.defineProperty,
  On = Object.getOwnPropertyDescriptor,
  X = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? On(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Cn(e, o, r), r;
  };
let V = class extends f {
  constructor() {
    super(...arguments),
      (this.onClick = () => null),
      (this.name = ''),
      (this.walletId = ''),
      (this.label = void 0),
      (this.imageId = void 0),
      (this.installed = !1),
      (this.recent = !1);
  }
  sublabelTemplate() {
    return this.recent
      ? l`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`
      : this.installed
        ? l`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`
        : null;
  }
  handleClick() {
    nr.click({ name: 'WALLET_BUTTON', walletId: this.walletId }),
      this.onClick();
  }
  render() {
    var t;
    return l`<button @click="${this.handleClick.bind(this)}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${M(this.imageId)}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${(t = this.label) != null ? t : h.getWalletName(this.name, !0)}</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
(V.styles = [w.globalCss, $n]),
  X([p()], V.prototype, 'onClick', 2),
  X([p()], V.prototype, 'name', 2),
  X([p()], V.prototype, 'walletId', 2),
  X([p()], V.prototype, 'label', 2),
  X([p()], V.prototype, 'imageId', 2),
  X([p({ type: Boolean })], V.prototype, 'installed', 2),
  X([p({ type: Boolean })], V.prototype, 'recent', 2),
  (V = X([v('wcm-wallet-button')], V));
const En = y`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var kn = Object.defineProperty,
  Pn = Object.getOwnPropertyDescriptor,
  Fe = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Pn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && kn(e, o, r), r;
  };
let we = class extends f {
  constructor() {
    super(...arguments),
      (this.walletId = ''),
      (this.imageId = void 0),
      (this.imageUrl = void 0);
  }
  render() {
    var t;
    const e =
      (t = this.imageUrl) != null && t.length
        ? this.imageUrl
        : h.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return l`${e.length ? l`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>` : _.WALLET_PLACEHOLDER}`;
  }
};
(we.styles = [w.globalCss, En]),
  Fe([p()], we.prototype, 'walletId', 2),
  Fe([p()], we.prototype, 'imageId', 2),
  Fe([p()], we.prototype, 'imageUrl', 2),
  (we = Fe([v('wcm-wallet-image')], we));
var Tn = Object.defineProperty,
  Sn = Object.getOwnPropertyDescriptor,
  Lo = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Sn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Tn(e, o, r), r;
  };
let zt = class extends f {
  constructor() {
    super(), (this.preload = !0), this.preloadData();
  }
  async loadImages(t) {
    try {
      t != null &&
        t.length &&
        (await Promise.all(t.map(async (e) => h.preloadImage(e))));
    } catch {
      console.info('Unsuccessful attempt at preloading some images', t);
    }
  }
  async preloadListings() {
    if (me.state.enableExplorer) {
      await L.getRecomendedWallets(), B.setIsDataLoaded(!0);
      const { recomendedWallets: t } = L.state,
        e = t.map((o) => h.getWalletIcon(o));
      await this.loadImages(e);
    } else B.setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const t = h.getCustomImageUrls();
    await this.loadImages(t);
  }
  async preloadData() {
    try {
      this.preload &&
        ((this.preload = !1),
        await Promise.all([
          this.preloadListings(),
          this.preloadCustomImages(),
        ]));
    } catch (t) {
      console.error(t), ee.openToast('Failed preloading', 'error');
    }
  }
};
Lo([D()], zt.prototype, 'preload', 2),
  (zt = Lo([v('wcm-explorer-context')], zt));
var An = Object.defineProperty,
  In = Object.getOwnPropertyDescriptor,
  Rn = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? In(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && An(e, o, r), r;
  };
let Wo = class extends f {
  constructor() {
    super(),
      (this.unsubscribeTheme = void 0),
      w.setTheme(),
      (this.unsubscribeTheme = _e.subscribe(w.setTheme));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeTheme) == null || t.call(this);
  }
};
Wo = Rn([v('wcm-theme-context')], Wo);
const Mn = y`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var Nn = Object.defineProperty,
  Ln = Object.getOwnPropertyDescriptor,
  Wn = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ln(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Nn(e, o, r), r;
  };
let Vt = class extends f {
  onGoToQrcode() {
    T.push('Qrcode');
  }
  render() {
    const { recomendedWallets: t } = L.state,
      e = [...t, ...t],
      o = g.RECOMMENDED_WALLET_AMOUNT * 2;
    return l`<wcm-modal-header title="Connect your wallet" .onAction="${this.onGoToQrcode}" .actionIcon="${_.QRCODE_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${_.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
      ...Array(o),
    ].map((i, r) => {
      const n = e[r % e.length];
      return n
        ? l`<wcm-wallet-image walletId="${n.id}" imageId="${n.image_id}"></wcm-wallet-image>`
        : _.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${h.handleAndroidLinking}"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
(Vt.styles = [w.globalCss, Mn]),
  (Vt = Wn([v('wcm-android-wallet-selection')], Vt));
const Dn = y`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var Un = Object.defineProperty,
  jn = Object.getOwnPropertyDescriptor,
  ve = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? jn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Un(e, o, r), r;
  };
let J = class extends f {
  constructor() {
    super(...arguments),
      (this.walletId = void 0),
      (this.imageId = void 0),
      (this.isError = !1),
      (this.isStale = !1),
      (this.label = '');
  }
  svgLoaderTemplate() {
    var t, e;
    const o =
      (e =
        (t = _e.state.themeVariables) == null
          ? void 0
          : t['--wcm-wallet-icon-large-border-radius']) != null
        ? e
        : w.getPreset('--wcm-wallet-icon-large-border-radius');
    let i = 0;
    o.includes('%')
      ? (i = (88 / 100) * parseInt(o, 10))
      : (i = parseInt(o, 10)),
      (i *= 1.17);
    const r = 317 - i * 1.57,
      n = 425 - i * 1.8;
    return l`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${i}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${r}" stroke-dashoffset="${n}"></use></svg>`;
  }
  render() {
    const t = { 'wcm-error': this.isError, 'wcm-stale': this.isStale };
    return l`<div class="${K(t)}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${M(this.walletId)}" imageId="${M(this.imageId)}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${this.isError ? 'error' : 'primary'}">${this.isError ? 'Connection declined' : this.label}</wcm-text>`;
  }
};
(J.styles = [w.globalCss, Dn]),
  ve([p()], J.prototype, 'walletId', 2),
  ve([p()], J.prototype, 'imageId', 2),
  ve([p({ type: Boolean })], J.prototype, 'isError', 2),
  ve([p({ type: Boolean })], J.prototype, 'isStale', 2),
  ve([p()], J.prototype, 'label', 2),
  (J = ve([v('wcm-connector-waiting')], J));
const xe = {
    manualWallets() {
      var t, e;
      const { mobileWallets: o, desktopWallets: i } = me.state,
        r = (t = xe.recentWallet()) == null ? void 0 : t.id,
        n = g.isMobile() ? o : i,
        s = n == null ? void 0 : n.filter((a) => r !== a.id);
      return (e = g.isMobile()
        ? s == null
          ? void 0
          : s.map(({ id: a, name: c, links: d }) => ({
              id: a,
              name: c,
              mobile: d,
              links: d,
            }))
        : s == null
          ? void 0
          : s.map(({ id: a, name: c, links: d }) => ({
              id: a,
              name: c,
              desktop: d,
              links: d,
            }))) != null
        ? e
        : [];
    },
    recentWallet() {
      return h.getRecentWallet();
    },
    recomendedWallets(t = !1) {
      var e;
      const o = t || (e = xe.recentWallet()) == null ? void 0 : e.id,
        { recomendedWallets: i } = L.state;
      return i.filter((r) => o !== r.id);
    },
  },
  oe = {
    onConnecting(t) {
      h.goToConnectingView(t);
    },
    manualWalletsTemplate() {
      return xe
        .manualWallets()
        .map(
          (t) =>
            l`<wcm-wallet-button walletId="${t.id}" name="${t.name}" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`,
        );
    },
    recomendedWalletsTemplate(t = !1) {
      return xe
        .recomendedWallets(t)
        .map(
          (e) =>
            l`<wcm-wallet-button name="${e.name}" walletId="${e.id}" imageId="${e.image_id}" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`,
        );
    },
    recentWalletTemplate() {
      const t = xe.recentWallet();
      if (t)
        return l`<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${M(t.image_id)}" .recent="${!0}" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`;
    },
  },
  zn = y`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var Vn = Object.defineProperty,
  Bn = Object.getOwnPropertyDescriptor,
  Hn = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Bn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Vn(e, o, r), r;
  };
let Bt = class extends f {
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = me.state,
      o = t !== 'ALL' && e,
      i = oe.manualWalletsTemplate(),
      r = oe.recomendedWalletsTemplate();
    let n = [oe.recentWalletTemplate(), ...i, ...r];
    n = n.filter(Boolean);
    const s = n.length > 4 || o;
    let a = [];
    s ? (a = n.slice(0, 3)) : (a = n);
    const c = !!a.length;
    return l`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${h.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${_.MOBILE_ICON}<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${_.SCAN_ICON}<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${c ? l`<wcm-modal-footer><div class="wcm-desktop-title">${_.DESKTOP_ICON}<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${a} ${s ? l`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-footer>` : null}`;
  }
};
(Bt.styles = [w.globalCss, zn]),
  (Bt = Hn([v('wcm-desktop-wallet-selection')], Bt));
const Zn = y`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var Fn = Object.defineProperty,
  qn = Object.getOwnPropertyDescriptor,
  Kn = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? qn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Fn(e, o, r), r;
  };
let Ht = class extends f {
  render() {
    const { termsOfServiceUrl: t, privacyPolicyUrl: e } = me.state;
    return t ?? e
      ? l`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${t ? l`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>` : null} ${t && e ? 'and' : null} ${e ? l`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>` : null}</wcm-text></div>`
      : null;
  }
};
(Ht.styles = [w.globalCss, Zn]), (Ht = Kn([v('wcm-legal-notice')], Ht));
const Yn = y`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Qn = Object.defineProperty,
  Gn = Object.getOwnPropertyDescriptor,
  Xn = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Gn(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Qn(e, o, r), r;
  };
let Zt = class extends f {
  onQrcode() {
    T.push('Qrcode');
  }
  render() {
    const { explorerExcludedWalletIds: t, enableExplorer: e } = me.state,
      o = t !== 'ALL' && e,
      i = oe.manualWalletsTemplate(),
      r = oe.recomendedWalletsTemplate();
    let n = [oe.recentWalletTemplate(), ...i, ...r];
    n = n.filter(Boolean);
    const s = n.length > 8 || o;
    let a = [];
    s ? (a = n.slice(0, 7)) : (a = n);
    const c = !!a.length;
    return l`<wcm-modal-header title="Connect your wallet" .onAction="${this.onQrcode}" .actionIcon="${_.QRCODE_ICON}"></wcm-modal-header>${c ? l`<wcm-modal-content><div>${a} ${s ? l`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>` : null}</div></wcm-modal-content>` : null}`;
  }
};
(Zt.styles = [w.globalCss, Yn]),
  (Zt = Xn([v('wcm-mobile-wallet-selection')], Zt));
const Jn = y`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var es = Object.defineProperty,
  ts = Object.getOwnPropertyDescriptor,
  Ft = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ts(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && es(e, o, r), r;
  };
let Ae = class extends f {
  constructor() {
    super(),
      (this.open = !1),
      (this.active = !1),
      (this.unsubscribeModal = void 0),
      (this.abortController = void 0),
      (this.unsubscribeModal = Ge.subscribe((t) => {
        t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
      }));
  }
  disconnectedCallback() {
    var t;
    (t = this.unsubscribeModal) == null || t.call(this);
  }
  get overlayEl() {
    return h.getShadowRootElement(this, '.wcm-overlay');
  }
  get containerEl() {
    return h.getShadowRootElement(this, '.wcm-container');
  }
  toggleBodyScroll(t) {
    if (document.querySelector('body'))
      if (t) {
        const e = document.getElementById('wcm-styles');
        e == null || e.remove();
      } else
        document.head.insertAdjacentHTML(
          'beforeend',
          '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>',
        );
  }
  onCloseModal(t) {
    t.target === t.currentTarget && Ge.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1),
      this.addKeyboardEvents(),
      (this.open = !0),
      setTimeout(async () => {
        const t = h.isMobileAnimation()
            ? { y: ['50vh', '0vh'] }
            : { scale: [0.98, 1] },
          e = 0.1,
          o = 0.2;
        await Promise.all([
          de(this.overlayEl, { opacity: [0, 1] }, { delay: e, duration: o })
            .finished,
          de(this.containerEl, t, { delay: e, duration: o }).finished,
        ]),
          (this.active = !0);
      }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const t = h.isMobileAnimation()
        ? { y: ['0vh', '50vh'] }
        : { scale: [1, 0.98] },
      e = 0.2;
    await Promise.all([
      de(this.overlayEl, { opacity: [1, 0] }, { duration: e }).finished,
      de(this.containerEl, t, { duration: e }).finished,
    ]),
      this.containerEl.removeAttribute('style'),
      (this.active = !1),
      (this.open = !1);
  }
  addKeyboardEvents() {
    (this.abortController = new AbortController()),
      window.addEventListener(
        'keydown',
        (t) => {
          var e;
          t.key === 'Escape'
            ? Ge.close()
            : t.key === 'Tab' &&
              (((e = t.target) != null && e.tagName.includes('wcm-')) ||
                this.containerEl.focus());
        },
        this.abortController,
      ),
      this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var t;
    (t = this.abortController) == null || t.abort(),
      (this.abortController = void 0);
  }
  render() {
    const t = { 'wcm-overlay': !0, 'wcm-active': this.active };
    return l`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${K(t)}" @click="${this.onCloseModal}" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${this.open ? l`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>` : null}</div></div>`;
  }
};
(Ae.styles = [w.globalCss, Jn]),
  Ft([D()], Ae.prototype, 'open', 2),
  Ft([D()], Ae.prototype, 'active', 2),
  (Ae = Ft([v('wcm-modal')], Ae));
const os = y`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var rs = Object.defineProperty,
  is = Object.getOwnPropertyDescriptor,
  Ie = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? is(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && rs(e, o, r), r;
  };
let se = class extends f {
  constructor() {
    super(...arguments),
      (this.isMobile = !1),
      (this.isDesktop = !1),
      (this.isWeb = !1),
      (this.isRetry = !1);
  }
  onMobile() {
    g.isMobile()
      ? T.replace('MobileConnecting')
      : T.replace('MobileQrcodeConnecting');
  }
  onDesktop() {
    T.replace('DesktopConnecting');
  }
  onWeb() {
    T.replace('WebConnecting');
  }
  render() {
    return l`<div>${this.isRetry ? l`<slot></slot>` : null} ${this.isMobile ? l`<wcm-button .onClick="${this.onMobile}" .iconLeft="${_.MOBILE_ICON}" variant="outline">Mobile</wcm-button>` : null} ${this.isDesktop ? l`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${_.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>` : null} ${this.isWeb ? l`<wcm-button .onClick="${this.onWeb}" .iconLeft="${_.GLOBE_ICON}" variant="outline">Web</wcm-button>` : null}</div>`;
  }
};
(se.styles = [w.globalCss, os]),
  Ie([p({ type: Boolean })], se.prototype, 'isMobile', 2),
  Ie([p({ type: Boolean })], se.prototype, 'isDesktop', 2),
  Ie([p({ type: Boolean })], se.prototype, 'isWeb', 2),
  Ie([p({ type: Boolean })], se.prototype, 'isRetry', 2),
  (se = Ie([v('wcm-platform-selection')], se));
const ns = y`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var ss = Object.defineProperty,
  as = Object.getOwnPropertyDescriptor,
  ls = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? as(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && ss(e, o, r), r;
  };
let qt = class extends f {
  onClick() {
    T.push('WalletExplorer');
  }
  render() {
    const { recomendedWallets: t } = L.state,
      e = xe.manualWallets(),
      o = [...t, ...e].reverse().slice(0, 4);
    return l`<button @click="${this.onClick}"><div class="wcm-icons">${o.map(
      (i) => {
        const r = h.getWalletIcon(i);
        if (r) return l`<img crossorigin="anonymous" src="${r}">`;
        const n = h.getWalletIcon({ id: i.id });
        return n
          ? l`<img crossorigin="anonymous" src="${n}">`
          : _.WALLET_PLACEHOLDER;
      },
    )} ${[...Array(4 - o.length)].map(() => _.WALLET_PLACEHOLDER)}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
(qt.styles = [w.globalCss, ns]),
  (qt = ls([v('wcm-view-all-wallets-button')], qt));
const cs = y`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var ds = Object.defineProperty,
  ms = Object.getOwnPropertyDescriptor,
  qe = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ms(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && ds(e, o, r), r;
  };
let be = class extends f {
  constructor() {
    super(),
      (this.walletId = ''),
      (this.imageId = ''),
      (this.uri = ''),
      setTimeout(() => {
        const { walletConnectUri: t } = B.state;
        this.uri = t;
      }, 0);
  }
  get overlayEl() {
    return h.getShadowRootElement(this, '.wcm-qr-container');
  }
  render() {
    return l`<div class="wcm-qr-container">${this.uri ? l`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${M(this.walletId)}" imageId="${M(this.imageId)}"></wcm-qrcode>` : l`<wcm-spinner></wcm-spinner>`}</div>`;
  }
};
(be.styles = [w.globalCss, cs]),
  qe([p()], be.prototype, 'walletId', 2),
  qe([p()], be.prototype, 'imageId', 2),
  qe([D()], be.prototype, 'uri', 2),
  (be = qe([v('wcm-walletconnect-qr')], be));
var hs = Object.defineProperty,
  ps = Object.getOwnPropertyDescriptor,
  us = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ps(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && hs(e, o, r), r;
  };
let Kt = class extends f {
  viewTemplate() {
    return g.isAndroid()
      ? l`<wcm-android-wallet-selection></wcm-android-wallet-selection>`
      : g.isMobile()
        ? l`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`
        : l`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  render() {
    return l`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
(Kt.styles = [w.globalCss]), (Kt = us([v('wcm-connect-wallet-view')], Kt));
const gs = y`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var fs = Object.defineProperty,
  ws = Object.getOwnPropertyDescriptor,
  Do = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ws(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && fs(e, o, r), r;
  };
let Ke = class extends f {
  constructor() {
    super(), (this.isError = !1), this.openDesktopApp();
  }
  onFormatAndRedirect(t) {
    const { desktop: e, name: o } = g.getWalletRouterData(),
      i = e == null ? void 0 : e.native;
    if (i) {
      const r = g.formatNativeUrl(i, t, o);
      g.openHref(r, '_self');
    }
  }
  openDesktopApp() {
    const { walletConnectUri: t } = B.state,
      e = g.getWalletRouterData();
    h.setRecentWallet(e), t && this.onFormatAndRedirect(t);
  }
  render() {
    const { name: t, id: e, image_id: o } = g.getWalletRouterData(),
      { isMobile: i, isWeb: r } = h.getCachedRouterWalletPlatforms();
    return l`<wcm-modal-header title="${t}" .onAction="${h.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${M(o)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isWeb="${r}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(this)}" .iconRight="${_.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
(Ke.styles = [w.globalCss, gs]),
  Do([D()], Ke.prototype, 'isError', 2),
  (Ke = Do([v('wcm-desktop-connecting-view')], Ke));
const vs = y`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var bs = Object.defineProperty,
  ys = Object.getOwnPropertyDescriptor,
  xs = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ys(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && bs(e, o, r), r;
  };
let Yt = class extends f {
  onInstall(t) {
    t && g.openHref(t, '_blank');
  }
  render() {
    const {
      name: t,
      id: e,
      image_id: o,
      homepage: i,
    } = g.getWalletRouterData();
    return l`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${M(o)}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${() => this.onInstall(i)}" .iconLeft="${_.ARROW_DOWN_ICON}">Download</wcm-button></wcm-info-footer>`;
  }
};
(Yt.styles = [w.globalCss, vs]), (Yt = xs([v('wcm-install-wallet-view')], Yt));
const _s = y`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var $s = Object.defineProperty,
  Cs = Object.getOwnPropertyDescriptor,
  Uo = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Cs(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && $s(e, o, r), r;
  };
let Ye = class extends f {
  constructor() {
    super(), (this.isError = !1), this.openMobileApp();
  }
  onFormatAndRedirect(t, e = !1) {
    const { mobile: o, name: i } = g.getWalletRouterData(),
      r = o == null ? void 0 : o.native,
      n = o == null ? void 0 : o.universal;
    if (r && !e) {
      const s = g.formatNativeUrl(r, t, i);
      g.openHref(s, '_self');
    } else if (n) {
      const s = g.formatUniversalUrl(n, t, i);
      g.openHref(s, '_self');
    }
  }
  openMobileApp(t = !1) {
    const { walletConnectUri: e } = B.state,
      o = g.getWalletRouterData();
    h.setRecentWallet(o), e && this.onFormatAndRedirect(e, t);
  }
  onGoToAppStore(t) {
    t && g.openHref(t, '_blank');
  }
  render() {
    const {
        name: t,
        id: e,
        image_id: o,
        app: i,
        mobile: r,
      } = g.getWalletRouterData(),
      { isWeb: n } = h.getCachedRouterWalletPlatforms(),
      s = i == null ? void 0 : i.ios,
      a = r == null ? void 0 : r.universal;
    return l`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${M(o)}" label="Tap 'Open' to continue…" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${() => this.openMobileApp(!1)}" .iconRight="${_.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection>${a ? l`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() => this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>` : null}</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${M(o)}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${_.ARROW_RIGHT_ICON}" .onClick="${() => this.onGoToAppStore(s)}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
(Ye.styles = [w.globalCss, _s]),
  Uo([D()], Ye.prototype, 'isError', 2),
  (Ye = Uo([v('wcm-mobile-connecting-view')], Ye));
const Os = y`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Es = Object.defineProperty,
  ks = Object.getOwnPropertyDescriptor,
  Ps = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? ks(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Es(e, o, r), r;
  };
let Qt = class extends f {
  render() {
    const { name: t, id: e, image_id: o } = g.getWalletRouterData(),
      { isDesktop: i, isWeb: r } = h.getCachedRouterWalletPlatforms();
    return l`<wcm-modal-header title="${t}" .onAction="${h.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${M(o)}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${i}" .isWeb="${r}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
(Qt.styles = [w.globalCss, Os]),
  (Qt = Ps([v('wcm-mobile-qr-connecting-view')], Qt));
var Ts = Object.defineProperty,
  Ss = Object.getOwnPropertyDescriptor,
  As = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ss(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Ts(e, o, r), r;
  };
let Gt = class extends f {
  render() {
    return l`<wcm-modal-header title="Scan the code" .onAction="${h.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
(Gt.styles = [w.globalCss]), (Gt = As([v('wcm-qrcode-view')], Gt));
const Is = y`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var Rs = Object.defineProperty,
  Ms = Object.getOwnPropertyDescriptor,
  Re = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ms(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Rs(e, o, r), r;
  };
const Xt = 40;
let ae = class extends f {
  constructor() {
    super(...arguments),
      (this.loading = !L.state.wallets.listings.length),
      (this.firstFetch = !L.state.wallets.listings.length),
      (this.search = ''),
      (this.endReached = !1),
      (this.intersectionObserver = void 0),
      (this.searchDebounce = h.debounce((t) => {
        t.length >= 1
          ? ((this.firstFetch = !0),
            (this.endReached = !1),
            (this.search = t),
            L.resetSearch(),
            this.fetchWallets())
          : this.search &&
            ((this.search = ''),
            (this.endReached = this.isLastPage()),
            L.resetSearch());
      }));
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var t;
    (t = this.intersectionObserver) == null || t.disconnect();
  }
  get placeholderEl() {
    return h.getShadowRootElement(this, '.wcm-placeholder-block');
  }
  createPaginationObserver() {
    (this.intersectionObserver = new IntersectionObserver(([t]) => {
      t.isIntersecting &&
        !(this.search && this.firstFetch) &&
        this.fetchWallets();
    })),
      this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: t, search: e } = L.state,
      { listings: o, total: i } = this.search ? e : t;
    return i <= Xt || o.length >= i;
  }
  async fetchWallets() {
    var t;
    const { wallets: e, search: o } = L.state,
      { listings: i, total: r, page: n } = this.search ? o : e;
    if (!this.endReached && (this.firstFetch || (r > Xt && i.length < r)))
      try {
        this.loading = !0;
        const s = (t = B.state.chains) == null ? void 0 : t.join(','),
          { listings: a } = await L.getWallets({
            page: this.firstFetch ? 1 : n + 1,
            entries: Xt,
            search: this.search,
            version: 2,
            chains: s,
          }),
          c = a.map((d) => h.getWalletIcon(d));
        await Promise.all([
          ...c.map(async (d) => h.preloadImage(d)),
          g.wait(300),
        ]),
          (this.endReached = this.isLastPage());
      } catch (s) {
        console.error(s), ee.openToast(h.getErrorMessage(s), 'error');
      } finally {
        (this.loading = !1), (this.firstFetch = !1);
      }
  }
  onConnect(t) {
    g.isAndroid() ? h.handleMobileLinking(t) : h.goToConnectingView(t);
  }
  onSearchChange(t) {
    const { value: e } = t.target;
    this.searchDebounce(e);
  }
  render() {
    const { wallets: t, search: e } = L.state,
      { listings: o } = this.search ? e : t,
      i = this.loading && !o.length,
      r = this.search.length >= 3;
    let n = oe.manualWalletsTemplate(),
      s = oe.recomendedWalletsTemplate(!0);
    r &&
      ((n = n.filter(({ values: d }) => h.caseSafeIncludes(d[0], this.search))),
      (s = s.filter(({ values: d }) => h.caseSafeIncludes(d[0], this.search))));
    const a = !this.loading && !o.length && !s.length,
      c = {
        'wcm-loading': i,
        'wcm-end-reached': this.endReached || !this.loading,
        'wcm-empty': a,
      };
    return l`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(this)}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${K(c)}"><div class="wcm-grid">${i ? null : n} ${i ? null : s} ${i ? null : o.map((d) => l`${d ? l`<wcm-wallet-button imageId="${d.image_id}" name="${d.name}" walletId="${d.id}" .onClick="${() => this.onConnect(d)}"></wcm-wallet-button>` : null}`)}</div><div class="wcm-placeholder-block">${a ? l`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>` : null} ${!a && this.loading ? l`<wcm-spinner></wcm-spinner>` : null}</div></wcm-modal-content>`;
  }
};
(ae.styles = [w.globalCss, Is]),
  Re([D()], ae.prototype, 'loading', 2),
  Re([D()], ae.prototype, 'firstFetch', 2),
  Re([D()], ae.prototype, 'search', 2),
  Re([D()], ae.prototype, 'endReached', 2),
  (ae = Re([v('wcm-wallet-explorer-view')], ae));
const Ns = y`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Ls = Object.defineProperty,
  Ws = Object.getOwnPropertyDescriptor,
  jo = (t, e, o, i) => {
    for (
      var r = i > 1 ? void 0 : i ? Ws(e, o) : e, n = t.length - 1, s;
      n >= 0;
      n--
    )
      (s = t[n]) && (r = (i ? s(e, o, r) : s(r)) || r);
    return i && r && Ls(e, o, r), r;
  };
let Qe = class extends f {
  constructor() {
    super(), (this.isError = !1), this.openWebWallet();
  }
  onFormatAndRedirect(t) {
    const { desktop: e, name: o } = g.getWalletRouterData(),
      i = e == null ? void 0 : e.universal;
    if (i) {
      const r = g.formatUniversalUrl(i, t, o);
      g.openHref(r, '_blank');
    }
  }
  openWebWallet() {
    const { walletConnectUri: t } = B.state,
      e = g.getWalletRouterData();
    h.setRecentWallet(e), t && this.onFormatAndRedirect(t);
  }
  render() {
    const { name: t, id: e, image_id: o } = g.getWalletRouterData(),
      { isMobile: i, isDesktop: r } = h.getCachedRouterWalletPlatforms(),
      n = g.isMobile();
    return l`<wcm-modal-header title="${t}" .onAction="${h.handleUriCopy}" .actionIcon="${_.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${M(o)}" label="${`Continue in ${t}...`}" .isError="${this.isError}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${i}" .isDesktop="${n ? !1 : r}" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(this)}" .iconRight="${_.RETRY_ICON}">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
(Qe.styles = [w.globalCss, Ns]),
  jo([D()], Qe.prototype, 'isError', 2),
  (Qe = jo([v('wcm-web-connecting-view')], Qe));
export { Ae as WcmModal, G as WcmQrCode };
