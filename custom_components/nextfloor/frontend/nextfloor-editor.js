/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var bn=globalThis,vn=bn.ShadowRoot&&(bn.ShadyCSS===void 0||bn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kr=Symbol(),oi=new WeakMap,Lt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==kr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(vn&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=oi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&oi.set(t,e))}return e}toString(){return this.cssText}},ii=n=>new Lt(typeof n=="string"?n:n+"",void 0,kr),Me=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new Lt(t,n,kr)},si=(n,e)=>{if(vn)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),o=bn.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}},$r=vn?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return ii(t)})(n):n;var{is:sd,defineProperty:ad,getOwnPropertyDescriptor:ld,getOwnPropertyNames:cd,getOwnPropertySymbols:dd,getPrototypeOf:ud}=Object,yn=globalThis,ai=yn.trustedTypes,hd=ai?ai.emptyScript:"",fd=yn.reactiveElementPolyfillSupport,Ct=(n,e)=>n,Sr={toAttribute(n,e){switch(e){case Boolean:n=n?hd:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ci=(n,e)=>!sd(n,e),li={attribute:!0,type:String,converter:Sr,reflect:!1,useDefault:!1,hasChanged:ci};Symbol.metadata??=Symbol("metadata"),yn.litPropertyMetadata??=new WeakMap;var Pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=li){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&ad(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=ld(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??li}static _$Ei(){if(this.hasOwnProperty(Ct("elementProperties")))return;let e=ud(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ct("properties"))){let t=this.properties,r=[...cd(t),...dd(t)];for(let o of r)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)t.unshift($r(o))}else e!==void 0&&t.push($r(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return si(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:Sr).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Sr;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??ci)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[Ct("elementProperties")]=new Map,Pe[Ct("finalized")]=new Map,fd?.({ReactiveElement:Pe}),(yn.reactiveElementVersions??=[]).push("2.1.2");var Tr=globalThis,di=n=>n,wn=Tr.trustedTypes,ui=wn?wn.createPolicy("lit-html",{createHTML:n=>n}):void 0,_i="$lit$",We=`lit$${Math.random().toFixed(9).slice(2)}$`,bi="?"+We,pd=`<${bi}>`,Qe=document,Vt=()=>Qe.createComment(""),Wt=n=>n===null||typeof n!="object"&&typeof n!="function",Pr=Array.isArray,md=n=>Pr(n)||typeof n?.[Symbol.iterator]=="function",Mr=`[ 	
\f\r]`,Bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hi=/-->/g,fi=/>/g,Ye=RegExp(`>|${Mr}(?:([^\\s"'>=/]+)(${Mr}*=${Mr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pi=/'/g,mi=/"/g,vi=/^(?:script|style|textarea|title)$/i,Or=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),m=Or(1),k=Or(2),Lf=Or(3),Oe=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),gi=new WeakMap,Xe=Qe.createTreeWalker(Qe,129);function yi(n,e){if(!Pr(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ui!==void 0?ui.createHTML(e):e}var gd=(n,e)=>{let t=n.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=Bt;for(let a=0;a<t;a++){let l=n[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===Bt?d[1]==="!--"?s=hi:d[1]!==void 0?s=fi:d[2]!==void 0?(vi.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Ye):d[3]!==void 0&&(s=Ye):s===Ye?d[0]===">"?(s=o??Bt,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Ye:d[3]==='"'?mi:pi):s===mi||s===pi?s=Ye:s===hi||s===fi?s=Bt:(s=Ye,o=void 0);let p=s===Ye&&n[a+1].startsWith("/>")?" ":"";i+=s===Bt?l+pd:u>=0?(r.push(c),l.slice(0,u)+_i+l.slice(u)+We+p):l+We+(u===-2?a:p)}return[yi(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Nt=class n{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,d]=gd(e,t);if(this.el=n.createElement(c,r),Xe.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(o=Xe.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let u of o.getAttributeNames())if(u.endsWith(_i)){let h=d[s++],p=o.getAttribute(u).split(We),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Fr:f[1]==="?"?Er:f[1]==="@"?Ar:ct}),o.removeAttribute(u)}else u.startsWith(We)&&(l.push({type:6,index:i}),o.removeAttribute(u));if(vi.test(o.tagName)){let u=o.textContent.split(We),h=u.length-1;if(h>0){o.textContent=wn?wn.emptyScript:"";for(let p=0;p<h;p++)o.append(u[p],Vt()),Xe.nextNode(),l.push({type:2,index:++i});o.append(u[h],Vt())}}}else if(o.nodeType===8)if(o.data===bi)l.push({type:2,index:i});else{let u=-1;for(;(u=o.data.indexOf(We,u+1))!==-1;)l.push({type:7,index:i}),u+=We.length-1}i++}}static createElement(e,t){let r=Qe.createElement("template");return r.innerHTML=e,r}};function lt(n,e,t=n,r){if(e===Oe)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl,i=Wt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=lt(n,o._$AS(n,e.values),o,r)),e}var Rr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Qe).importNode(t,!0);Xe.currentNode=o;let i=Xe.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Kt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new zr(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=Xe.nextNode(),s++)}return Xe.currentNode=Qe,o}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Kt=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lt(this,e,t),Wt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):md(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Qe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nt.createElement(yi(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Rr(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=gi.get(e.strings);return t===void 0&&gi.set(e.strings,t=new Nt(e)),t}k(e){Pr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new n(this.O(Vt()),this.O(Vt()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=di(e).nextSibling;di(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=lt(this,e,t,0),s=!Wt(e)||e!==this._$AH&&e!==Oe,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=lt(this,a[r+l],t,l),c===Oe&&(c=this._$AH[l]),s||=!Wt(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fr=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Er=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Ar=class extends ct{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=lt(this,e,t,0)??g)===Oe)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},zr=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}};var _d=Tr.litHtmlPolyfillSupport;_d?.(Nt,Kt),(Tr.litHtmlVersions??=[]).push("3.3.3");var wi=(n,e,t)=>{let r=t?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=t?.renderBefore??null;r._$litPart$=o=new Kt(e.insertBefore(Vt(),i),i,void 0,t??{})}return o._$AI(n),o};var Hr=globalThis,ue=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wi(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Oe}};ue._$litElement$=!0,ue.finalized=!0,Hr.litElementHydrateSupport?.({LitElement:ue});var bd=Hr.litElementPolyfillSupport;bd?.({LitElement:ue});(Hr.litElementVersions??=[]).push("4.2.2");var He=(n,e,t={})=>n.callWS({type:`nextfloor/${e}`,...t});async function xn(n,e){return(await He(n,"image/get",{image_id:e})).data}async function kn(n,e,t){await He(n,"image/set",{image_id:e,data:t})}async function xi(n){return(await He(n,"history/list")).snapshots}async function ki(n){await He(n,"history/snapshot")}async function $i(n,e){return(await He(n,"history/restore",{snapshot_id:e})).revision}var Si=(n,e)=>He(n,"packs/import",{pack:e});async function Mi(n,e){await He(n,"packs/remove",{pack_id:e})}var Ri=n=>He(n,"backup/export"),Fi=(n,e,t)=>He(n,"backup/import",{building:e,packs:t});var Ir=n=>n.slice(0,n.indexOf(".")),vd={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},V=n=>vd[Ir(n)]??null,Ei=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ai=new Set(["light","switch","fan"]),dt=n=>n!==null&&n!=="scene"&&n!=="script",ut=n=>!n||n.state==="unavailable"||n.state==="unknown";function C(n,e,t){let r=n?.states[e]?.attributes.friendly_name??n?.entities?.[e]?.name??e;if(!t||r.length<=t.length+1||!r.toLowerCase().startsWith(`${t.toLowerCase()} `))return r;let o=r.slice(t.length+1);return o[0].toUpperCase()+o.slice(1)}var zi=n=>!!n&&n.entity_id.startsWith("sensor.")&&n.attributes.device_class==="enum";function Gt(n,e,t=null){if(n==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(n==="light"&&t==="floor")return 1.95;if(n==="light"&&t==="table")return 1.25;if(n==="light"&&t==="wall")return 1.95;switch(n){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var yd=[],$n=new Map,wd=0,ve=(n,e)=>`pack:${n}:${e}`,Je=n=>n.startsWith("pack:");function Pi(n){yd=n,$n=new Map;for(let e of n)for(let t of e.items)$n.set(ve(e.id,t.id),t);wd+=1}var xd={};function re(n){if(!Je(n))return;let e=$n.get(n);if(e)return e;let[,t,...r]=n.split(":"),o=xd[t];return o?$n.get(ve(o,r.join(":"))):void 0}var Oi=n=>re(n)?.parts.find(e=>e.screen),Ti=.06;function Hi(n){let e=re(n);if(!e)return!1;let[t,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*t,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=Ti&&s>=Ti})}function Ne(n){return Ie[n]??re(n)?.size??[.6,.6,.8]}function et(n){let e=re(n);return Ci.has(n)||!!e?.electric||!!e?.light}function Re(n,e){return n.name[e.split("-")[0]]??n.name.en??Object.values(n.name)[0]??n.id}var kd={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace",fitness:"Fitness",fahrzeuge:"Vehicles"};function ye(n,e){if(e.split("-")[0]==="de")return n.name;let t=/^nextfloor\.(.+)$/.exec(n.id)?.[1];return t&&kd[t]||n.name}function Sn(n,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Ii;if(e.type==="led_strip")return Math.max(0,n.height-.04-Math.max(.02,e.h));let t=re(e.type);if(!t)return Di(e);switch(t.mount){case"surface":return Li(n,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,n.height-e.h);default:return 0}}var Bi=["always","no_power","never"],Vi=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Wi=["navigate","more_info","service","fire_dom_event"];function Mn(n,e,t){return n?e?!!t.lock_plan:!!n.locked:!1}var Ni=["rain","snow","fog","clouds","lightning","sky"],Ki=["rain","snow","clouds","lightning","sky"],Gi=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Dr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Lr(n){return n==="hedge"||n==="fence"||n==="pergola"}var Ui=["x","-x","z","-z"];function $d(n,e,t){let r=n.slope??0;if(!r||n.type==="pool")return 0;let o=n.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of n.points){let u=i(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return r*l}function Sd(n,e,t,r){return ji(n)+(e.offset??0)+Dr[e.type]-$d(e,t,r)}function ji(n){return n.elevation>.3?0:-.2}function Zi(n,e,t){let r=(n.outdoor??[]).filter(i=>!Lr(i.type)&&i.type!=="pool"&&T([e,t],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?Sd(n,o,e,t):ji(n)}var Md={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},qi=["wood","oak","tiles","carpet","stone","concrete"],Yi={type:"none",pitch:35,overhang:.4},Rd={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Yi}};function Xi(n,e,t){return{id:n,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Fd=2.75;function Qi(n,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Fd*100)/100;let t=n.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function Ji(n,e,t){let r=n.rooms.flatMap(a=>a.points.map(l=>l[0])),o=n.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function es(n,e,t,r){let o=n.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=n.x-a*(n.w/2)*i+l*(n.d/2)*s,d=n.z-a*(n.w/2)*s-l*(n.d/2)*i,u=t[0]-c,h=t[1]-d,p=b=>Math.max(.1,Math.round(b/r)*r),f=p((u*i+h*s)*a),_=p((-u*s+h*i)*l),y=b=>Math.round(b*1e3)/1e3;return{x:y(c+a*(f/2)*i-l*(_/2)*s),z:y(d+a*(f/2)*s+l*(_/2)*i),w:y(f),d:y(_)}}var Rn=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],ts={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},he=["meter","inverter","home_battery","wallbox","grid_point"],ns=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ii=1.75;function Fn(n){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(n.type)?!1:re(n.type)?.mount!=="ceiling"}function J(n){return ns.has(n)||!!re(n)?.light}var Ed=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function rs(n,e,t,r=0){let o=Q(n.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((o.x0+r+i/t*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];T(d,n.points)&&a.push(d)}return a}function ht(n,e,t){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[r(n[0]+o*e),r(n[1]+i*e)]}function Di(n){switch(n.type){case"home_battery":return n.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-n.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Li(n,e,t){let r=0;for(let o of n.furniture)!(Ed.has(o.type)||re(o.type)?.surface)||!T([e,t],Wr(o))||(r=Math.max(r,o.h));return r}var Ci=new Set([...ns,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Ie={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Cr=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Br=["standard","bars","glass_wall"];function ft(n,e){return n.type==="door"?n.style&&Cr.includes(n.style)?n.style:e?"front":"interior":n.style&&Br.includes(n.style)?n.style:"standard"}function os(n,e,t,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=n-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let h=Math.max(0,d)/(l+c);l*=h,c*=h}return o?{panels:[[.02,.02+l],[n-.02-c,n-.02]],x0:.02+l,x1:n-.02-c}:(t?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:n-.02}:{panels:[[n-.02-l,n-.02]],x0:.02,x1:n-.02-l}}function Vr(n){return n==="front"||n==="front_glass"||n==="sidelight"||n==="sidelights"}var pt={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function En(n){if(n.type==="garage")return"garage";if(n.type==="window"&&n.style==="glass_wall")return"glass_wall";let e=n.leaves===2;return n.type==="door"?!e&&n.style&&Vr(n.style)?"front":e?"door_double":"door":n.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function An(n){n.energy={...Md,...n.energy??{}},n.presence=n.presence??[],n.settings={...Rd,...n.settings,roof:{...Yi,...n.settings?.roof??{}}};for(let e of n.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let t=e.placements.filter(r=>r.entity_id.startsWith("light."));if(t.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=r[o.mount??"ceiling"],[s,a,l]=Ie[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return n}function P(n){return`${n}_${Math.random().toString(36).slice(2,10)}`}function ae(n){let e=0;for(let t=0;t<n.length;t++){let[r,o]=n[t],[i,s]=n[(t+1)%n.length];e+=r*s-i*o}return e/2}function fe(n){return Math.abs(ae(n))}function ce(n){let e=ae(n);if(Math.abs(e)<1e-9){let o=n.length||1;return[n.reduce((i,s)=>i+s[0],0)/o,n.reduce((i,s)=>i+s[1],0)/o]}let t=0,r=0;for(let o=0;o<n.length;o++){let[i,s]=n[o],[a,l]=n[(o+1)%n.length],c=i*l-a*s;t+=(i+a)*c,r+=(s+l)*c}return[t/(6*e),r/(6*e)]}function mt(n){if(n.length!==4)return!1;for(let e=0;e<4;e++){let[t,r]=n[e],[o,i]=n[(e+1)%4];if(Math.abs(t-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function Q(n){let e=1/0,t=1/0,r=-1/0,o=-1/0;for(let[i,s]of n)e=Math.min(e,i),t=Math.min(t,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:t,x1:r,z1:o}}function Wr(n){let e=n.rotation*Math.PI/180,t=Math.cos(e),r=Math.sin(e),o=n.w/2,i=n.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[n.x+s*t-a*r,n.z+s*r+a*t])}function T(n,e){let t=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>n[1]!=l>n[1]&&n[0]<(a-i)*(n[1]-s)/(l-s)+i&&(t=!t)}return t}var is={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ad=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),zd=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Td=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Pd=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function gt(n,e){let t=n.entities?.[e];return t&&(t.area_id||(t.device_id?n.devices?.[t.device_id]?.area_id:null))||null}var ls=(n,e)=>{let t=n.entities?.[e];return!!(t?.hidden||t?.entity_category)};function ss(n,e){let t=V(e),r=n.states[e];if(!t||!r||ls(n,e))return!1;let o=r.attributes.device_class;return t==="sensor"?o?Ad.has(o):zd.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?o?Td.has(o):!!n.entities?.[e]?.area_id:!0}function Od(n,e){let t=n.states[e];return V(e)!=="sensor"||!t?.attributes.unit_of_measurement||ls(n,e)||Pd.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||ut(t)}var zn=(n,e)=>e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power",as=null;function Nr(n,e){let t=n.get(e);return t||n.set(e,t=[]),t}function Hd(n){let e=new Map,t=new Map,r=new Map,o=new Map,i=[],s=c=>{(ss(n,c)||Od(n,c))&&dt(V(c))&&i.push(c)};for(let[c,d]of Object.entries(n.entities??{})){let u=d.device_id;u&&d.area_id&&(o.get(u)??o.set(u,new Set).get(u)).add(d.area_id),u&&zn(n,c)&&Nr(t,u).push(c),u&&!d.hidden&&!d.entity_category&&(r.get(u)??r.set(u,new Set).get(u)).add(Ir(c));let h=gt(n,c);h===null?s(c):ss(n,c)&&Nr(e,h).push(c)}if(n.entities)for(let c of Object.keys(n.states))n.entities[c]||s(c);let a=c=>Ei.indexOf(V(c));i.sort((c,d)=>a(c)-a(d)||C(n,c).localeCompare(C(n,d)));for(let[c,d]of e){let u=n.areas?.[c]?.name;d.sort((h,p)=>a(h)-a(p)||C(n,h,u).localeCompare(C(n,p,u)))}let l=new Set;for(let[c,d]of o)d.size>1&&l.add(c);return{entities:n.entities,devices:n.devices,states:n.states,stateCount:Object.keys(n.states).length,byArea:e,powerByDevice:t,withoutArea:i,domainsByDevice:r,hubs:l}}function _t(n){let e=as;return e&&e.entities===n.entities&&e.devices===n.devices&&(e.states===n.states||(e.states=n.states,Object.keys(n.states).length===e.stateCount))?e:as=Hd(n)}function pe(n,e){return!e||!n.entities?[]:_t(n).byArea.get(e)??[]}function cs(n,e){if(!n.entities)return[];let t=[];for(let[r,o]of _t(n).byArea){let i=o.filter(s=>dt(V(s)));r!==e&&i.length>0&&t.push({areaId:r,name:n.areas?.[r]?.name??r,ids:i})}return t.sort((r,o)=>r.name.localeCompare(o.name))}var ds=n=>n.entities?_t(n).withoutArea:[],us=(n,e)=>!!n.entities&&_t(n).hubs.has(e),Kr=(n,e)=>n.entities?_t(n).powerByDevice.get(e)??[]:[];function Tn(n,e){let t=new Map;for(let o of e)Nr(t,n.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...t.values()].map(o=>{let i=o.find(s=>!n.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var Gr=(n,e)=>Tn(n,e).map(t=>t.primary),Ur={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Id=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Dd=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Ld=new RegExp(`(${Dd.join("|")})`,"i");function jr(n,e){let t=n.entities?.[e]?.device_id,r=t&&!us(n,t)?_t(n).domainsByDevice.get(t):void 0;return r&&[...r].some(o=>Id.has(o))?!1:!Ld.test(`${e} ${n.states[e]?.attributes.friendly_name??""}`)}function hs(n,e,t,r){let o=t.climate?.[r];if(o==="none")return[];if(o)return n.states[o]?[o]:[];let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>T([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!T([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...pe(n,t.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&n.states[c]?.attributes.device_class===Ur[r]&&jr(n,c))}var Cd=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Bd=new Set(["garage","gate"]),Vd=new Set(["window","opening"]);function Ut(n,e,t=!1){let r=new Map;return n.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var fs=(n,e)=>n==="none"?null:n??e??null,Pn=n=>n&&n!=="none"?n:null;function Zr(n,e){let t=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,y)=>_.edge-y.edge||_.offset-y.offset);if(i.length===0)continue;let s=pe(n,o.area_id),a=_=>n.states[_]?.attributes.device_class,l=_=>s.filter(y=>V(y)==="binary"&&_(a(y)??"")),c=_=>i.filter(y=>y.type===_),d=Ut(c("window"),s.filter(_=>V(_)==="cover"&&Cd.has(a(_))),!0),u=Ut(c("window"),l(_=>Vd.has(_))),h=Ut(c("door"),l(_=>_==="door")),p=Ut(c("garage"),s.filter(_=>V(_)==="cover"&&Bd.has(a(_)??""))),f=Ut(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let y=_.type==="window"?d:_.type==="garage"?p:null,b=_.type==="window"?u:_.type==="garage"?f:h,x=_.leaves===2;t.set(_.id,{cover:fs(_.cover,y?.get(_.id)),contact:_.sensor==="handle"&&_.contact==null?null:fs(_.contact,b.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:x?Pn(_.contact2):null,tilt2:x?Pn(_.tilt2):null,position:Pn(_.position),positionInverted:!!_.position_inverted,tiltAngle:Pn(_.tilt_angle),tiltMax:_.tilt_max??null,tiltOffset:_.tilt_offset??null,tiltInvert:!!_.tilt_invert,shut:!!_.shut})}}return t}var Wd=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function qr(n){if(!n||ut(n))return null;let e=n.attributes.window_state;for(let t of[typeof e=="string"?e:"",n.state]){let r=t.trim(),o=r&&Wd.find(([i])=>i.test(r));if(o)return o[1]}return null}var ps=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,ms=/(kühl|fridge|gefrier|freezer)/i,gs=/(spülmaschine|geschirrspül|dishwasher)/i,Nd=/(kochfeld|herd|induktion|cooktop)/i,Kd={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:ps,tv_wall:ps,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:ms,fridge_smart:ms,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:gs,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Nd,sink:gs,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},_s={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},bs=new Set(["tv_board","tv_wall"]);var jt=n=>bs.has(n)||!!Oi(n),On=n=>jt(n)||n==="desk"||n==="fridge_smart",Gd=n=>!!n&&n!=="none";function Ud(n,e){if(zn(n,e))return e;let t=n.entities?.[e]?.device_id;return t?Kr(n,t).find(r=>r!==e)??null:null}var jd=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&T([e,t],r.points));function Yr(n,e,t,r){return n.find(o=>e?.test(t(o)))??(r?n[0]??null:null)}function tt(n,e){let t=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power]),...r.placements.map(i=>i.entity_id)].filter(Gd));for(let i of r.furniture){let s=i.type in _s,a=s?_s[i.type]:Kd[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=jd(r,i.x,i.z),c=(l?Gr(n,pe(n,l.area_id)):[]).filter(f=>!o.has(f)),d=f=>`${f} ${C(n,f)}`,u=f=>c.filter(_=>V(_)===f),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(s)h=Yr(u("light"),a,d,!0);else if(i.type==="robot_vacuum"){let f=l?.area_id??null;h=Object.keys(n.entities??{}).find(_=>_.startsWith("vacuum.")&&!o.has(_)&&gt(n,_)===f)??null}else if(i.type==="radiator")h=Yr(u("climate"),a,d,!0);else if(jt(i.type)){let f=u("media");h=f.find(_=>n.states[_]?.attributes.device_class==="tv")??Yr(f,a,d,bs.has(i.type))}else a&&(h=c.find(f=>["switch","media","fan"].includes(V(f)??"")&&a.test(d(f)))??null);h&&o.add(h)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=h?Ud(n,h):null,!p&&a&&l&&!s&&(p=pe(n,l.area_id).find(f=>zn(n,f)&&!o.has(f)&&a.test(d(f)))??null),p&&o.add(p)),(h||p)&&t.set(i.id,{entity:h,power:p})}}return t}function Zd(n,e){return Math.min(...e.map((t,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-t[0],o[1]-t[1]],a=Math.min(1,Math.max(0,((n[0]-t[0])*i+(n[1]-t[1])*s)/(i*i+s*s||1)));return Math.hypot(n[0]-t[0]-i*a,n[1]-t[1]-s*a)}))}function ys(n,e,t=[]){let r=n.points;if(r.length<3||e.length===0)return[];let o=r.map(b=>b[0]),i=r.map(b=>b[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],d=Math.min(a-s,c-l),u=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),p=Math.min(.7,d/4),f=ce(r),_=[];for(let b=s+u/2;b<a;b+=u)for(let x=l+u/2;x<c;x+=u){let v=[b,x];if(!T(v,r))continue;let w=Zd(v,r);w>=h&&_.push({at:v,wallDistance:w})}_.length===0&&_.push({at:f,wallDistance:0});let y=[...t];return e.map(b=>{let x=V(b)==="light",v=_[0].at,w=-1/0;for(let{at:S,wallDistance:F}of _){let E=y.length?Math.min(...y.map(I=>Math.hypot(S[0]-I[0],S[1]-I[1]))):3,O=Math.hypot(S[0]-f[0],S[1]-f[1]),N=Math.min(E,3)*2;O<p&&!x&&(N-=10),N-=x?O*.35:F*1.2,N>w+1e-9&&(w=N,v=S)}let $=[Math.round(v[0]*100)/100,Math.round(v[1]*100)/100];return y.push($),{entity_id:b,x:$[0],z:$[1],y:null,mount:null}})}var vs=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function ws(n,e,t){if(t==="none")return null;if(t)return t;let r=e?n.entities?.[e]?.device_id:null;return!r||!n.entities?null:Object.values(n.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(vs.test(i.translation_key??"")||vs.test(i.entity_id.split(".")[1])))?.entity_id??null}var W=(n,e)=>[n[0]-e[0],n[1]-e[1]],Fe=(n,e)=>[n[0]+e[0],n[1]+e[1]],we=(n,e)=>[n[0]*e,n[1]*e],Y=(n,e)=>n[0]*e[0]+n[1]*e[1],xe=(n,e)=>n[0]*e[1]-n[1]*e[0],de=n=>Math.hypot(n[0],n[1]),ke=n=>{let e=de(n)||1;return[n[0]/e,n[1]/e]},Xr=n=>[-n[1],n[0]],Qr=n=>[n[1],-n[0]];var qd=.05,Yd=.2,Xd=.12;function Qd(n){let e=[];return n.forEach((t,r)=>{let o=t.points;if(o.length<3)return;let i=ae(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=de(W(l,s));if(c<.05)return;let d=[(l[0]-s[0])/c,(l[1]-s[1])/c],u=i?[d[1],-d[0]]:[-d[1],d[0]];(d[1]<-1e-9||Math.abs(d[1])<=1e-9&&d[0]<0)&&(d=[-d[0],-d[1]]);let h=[-d[1],d[0]],[p,f]=[Y(s,d),Y(l,d)];e.push({room:r,index:a,dir:d,normal:h,offset:Y(s,h),outside:Y(u,h)>0?1:-1,from:Math.min(p,f),to:Math.max(p,f)})})}),e}function Jd(n,e,t){if(n.room===e.room||Math.abs(xe(n.dir,e.dir))>qd||n.outside===e.outside)return null;let r=(e.offset-n.offset)*n.outside;return r>t||r<-Xd||Math.abs(r)<1e-4||Math.min(n.to,e.to)-Math.max(n.from,e.from)<Yd?null:r}var Jr=n=>Math.round(n*1e3)/1e3;function xs(n,e=.6){let t=Qd(n),r=t.map((u,h)=>h),o=u=>r[u]===u?u:r[u]=o(r[u]),i=[],s=new Set;for(let u=0;u<t.length;u++)for(let h=u+1;h<t.length;h++){let p=Jd(t[u],t[h],e);p!==null&&(i.push(Jr(p)),r[o(u)]=o(h),s.add(u).add(h))}let a=()=>n.map(u=>({...u,points:u.points.map(h=>[h[0],h[1]])}));if(i.length===0)return{rooms:a(),gaps:i};let l=new Map;for(let u of s)l.set(o(u),[...l.get(o(u))??[],u]);let c=n.map(u=>u.points.map(()=>new Map));for(let[u,h]of l){let p=h.reduce((f,_)=>f+t[_].offset,0)/h.length;for(let f of h){let _=t[f],y=[_.normal[0]*(p-_.offset),_.normal[1]*(p-_.offset)];c[_.room][_.index].set(u,y),c[_.room][(_.index+1)%n[_.room].points.length].set(u,y)}}return{rooms:n.map((u,h)=>({...u,points:u.points.map((p,f)=>{let _=[...c[h][f].values()].reduce((y,b)=>[y[0]+b[0],y[1]+b[1]],[p[0],p[1]]);return[Jr(_[0]),Jr(_[1])]})})),gaps:i}}function ks(n){let e=n.filter(t=>t>.04).sort((t,r)=>t-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var eu=.25,$s=n=>Math.round(n*1e3)/1e3,Ss=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&T([e,t],r.points));function to(n,e,t,r,o){let i=Ss(n,e,t);if(!i)return[r,o];let s=(a,l)=>T([a,l],i.points);return s(r,o)?[r,o]:s(r,t)?[r,t]:s(e,o)?[e,o]:[e,t]}function tu(n,e,t,r){return n.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(Y(W(i,t),r))<.02&&Math.abs(Y(W(a,t),r))<.02}))}var eo=(n,e)=>Math.abs((n-e+540)%360-180);function Zt(n,e,t,r=eu){let o=Ss(n,e.x,e.z);if(!o)return null;let i=o.points,s=ae(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let d=i[(c+1)%i.length],u=de(W(d,l));if(u<.3)return;let h=[(d[0]-l[0])/u,(d[1]-l[1])/u],p=[-h[1]*s,h[0]*s],f=Y(W([e.x,e.z],l),h);if(f<0||f>u)return;let _=tu(n,o,l,p)?t/2:0,y=Y(W([e.x,e.z],l),p)-_,b=Math.atan2(-p[0],p[1])*180/Math.PI,v=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce(($,S)=>eo(e.rotation,S.rotation)<eo(e.rotation,$.rotation)?S:$);if(eo(e.rotation,v.rotation)>50)return;let w=y-v.extent;Math.abs(w)>r||a&&Math.abs(w)>=Math.abs(a.gap)||(a={x:$s(e.x-p[0]*w),z:$s(e.z-p[1]*w),rotation:(Math.round(v.rotation)%360+360)%360,gap:w})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var Yt=Math.PI/180,Ke=n=>Math.tan(Math.min(80,Math.max(0,n))*Yt);function Hn(n){return{x0:Math.min(n.x0,n.x1),x1:Math.max(n.x0,n.x1),z0:Math.min(n.z0,n.z1),z1:Math.max(n.z0,n.z1)}}function se(n){let{x0:e,x1:t,z0:r,z1:o}=Hn(n);return n.axis==="x"?{u0:e,u1:t,w:o-r,at:(i,s)=>[i,n.flip?o-s:r+s]}:{u0:r,u1:o,w:t-e,at:(i,s)=>[n.flip?t-s:e+s,i]}}function In(n,e,t){let{x0:r,x1:o,z0:i,z1:s}=Hn(n);return n.axis==="x"?[e,n.flip?s-t:t-i]:[t,n.flip?o-e:e-r]}var qt=Math.tan(30*Yt);function no(n,e,t,r,o){let i=Math.min(n*.3,r>1e-6?2.4/r:n*.3),s=Math.min(n*.3,o>1e-6?2.4/o:n*.3),a=e+i*r,l=t+s*o,c=Math.min(n-s,Math.max(i,(l-a+qt*(n-s+i))/(2*qt))),d=a+(c-i)*qt;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=i?e+h*r:h<=c?a+(h-i)*qt:h<=n-s?l+(n-s-h)*qt:t+(n-h)*o}}function me(n){let e=se(n).w,[t,r]=[n.eave_a,n.eave_b],[o,i]=[Ke(n.pitch_a),Ke(n.pitch_b)];switch(n.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*o,y:s=>t+s*o};case"mansard":{let s=no(e,t,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-t+e*i)/(o+i))):e/2;return{vr:s,rh:t+s*o,y:a=>a<=s?t+a*o:r+(e-a)*i}}}}var nt=n=>me(n).rh;function Ms(n){return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft}}function nu(n,e){let t=n.map(r=>({...r}));for(let r of e){let o=t.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):t.push({...r})}return t}function ru(n,e,t){if(n.a===e.b)return!1;let r=ke(W(t[n.b],t[n.a])),o=ke(W(t[e.b],t[e.a]));return Math.abs(xe(r,o))>1e-6||Y(r,o)<=0||n.free||e.free?!1:n.height===e.height&&n.exterior===e.exterior&&n.roomLeft===e.roomLeft&&n.roomRight===e.roomRight&&Math.abs(n.left-e.left)<=1e-9&&Math.abs(n.right-e.right)<=1e-9}function Rs(n,e,t=new Set){let r=n.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:Ms(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:Ms(r[a[1]]);if(!ru(l,c,e))continue;let d={...l,b:c.b,sources:nu(l.sources,c.sources)};i=[...r.filter((u,h)=>h!==a[0]&&h!==a[1]),d];break}if(!i)return r;r=i}}function Fs(n,e){let t=new Map;n.forEach((o,i)=>{let s=ke(W(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:we(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let r=new Map;for(let[o,i]of t){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:Fe(s,we(Xr(l.d),l.left)),right:Fe(s,we(Qr(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let d=i[(c+1)%i.length],u=Fe(s,we(Xr(l.d),l.left)),h=Fe(s,we(Qr(d.d),d.right)),p=xe(l.d,d.d);if(Math.abs(p)<1e-4)return;let f=Fe(u,we(l.d,xe(W(h,u),d.d)/p));de(W(f,s))>a||(r.get(l.key).left=f,r.get(d.key).right=f)})}return r}function Es(n,e){let t=n.filter((r,o)=>de(W(r,n[(o+1)%n.length]))>e);for(;;){if(t.length<=3)return t;let r=t.findIndex((o,i)=>{let s=t[(i+t.length-1)%t.length],a=t[(i+1)%t.length],[l,c]=[W(o,s),W(a,o)];return Math.abs(xe(ke(l),ke(c)))<1e-7&&Y(l,c)>0});if(r===-1)return t;t=t.filter((o,i)=>i!==r)}}function ou(n){let e=[];return{points:e,idOf(t){let r=e.findIndex(o=>Math.abs(o[0]-t[0])<=n&&Math.abs(o[1]-t[1])<=n);return r>=0?r:(e.push([t[0],t[1]]),e.length-1)}}}function iu(n,e){let t=[];for(let r of n){let o=r.points;if(o.length<3||Math.abs(ae(o))<1e-6)continue;let i=ae(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return t}function su(n,e,t){let r=[];for(let o of n){let[i,s]=[e[o.u],e[o.v]],a=W(s,i),l=de(a),c=we(a,1/l),d=e.map((h,p)=>({id:p,rel:W(h,i)})).filter(({id:h,rel:p})=>h!==o.u&&h!==o.v&&Y(p,c)>t&&Y(p,c)<l-t&&Math.abs(xe(c,p))<=t).map(({id:h,rel:p})=>({t:Y(p,c),id:h})).sort((h,p)=>h.t-p.t),u=[{t:0,id:o.u},...d,{t:l,id:o.v}];for(let h=0;h+1<u.length;h++){let[p,f]=[u[h],u[h+1]];r.push({u:p.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?p.t:l-f.t,t1:o.forward?f.t:l-p.t})}}return r}var As=n=>({room_id:n.room,edge:n.edge,t0:n.t0,t1:n.t1});function au(n,e){let t=new Map(n.map(i=>[i.id,i])),r=new Map;for(let i of e){let s=`${i.room}:${i.edge}`;r.set(s,[...r.get(s)??[],i.t0].sort((a,l)=>a-l))}let o=i=>{let s=t.get(i.room)?.wall_heights?.[i.edge];return Array.isArray(s)?s[(r.get(`${i.room}:${i.edge}`)??[]).indexOf(i.t0)]??null:s};return{heightOf(i){let s=i.map(o).filter(a=>typeof a=="number"&&a>0);return s.length?Math.min(...s):void 0},thicknessOf(i){let s=i.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return s.length?Math.max(...s):void 0},hasNoWall:i=>i.some(s=>o(s)===0)}}function lu(n,e,t,r){let o=au(e,n),i=new Map;for(let l of n){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],d=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==d&&h.room!==c.room&&r.push(`overlap:${c.room}:${h.room}`);let u=d?[c,d]:[c];if(o.hasNoWall(u)){d&&a.push([c.room,d.room]);continue}if(d){let h=o.thicknessOf(u)??t.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:d.room,sources:u.map(As),height:o.heightOf(u)})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(u)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[As(c)],height:o.heightOf(u)})}return{drafts:s,open:a}}function cu(n,e){let t=r=>ke(W(e[r.b],e[r.a]));for(let r of n){if(r.exterior||r.free)continue;let o=new Set;for(let s of[r.a,r.b])for(let a of n)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(xe(t(r),t(a)))>1e-6||(a.roomLeft===r.roomLeft?o.add("left"):a.roomLeft===r.roomRight&&o.add("right"));if(o.size!==1)continue;let i=r.left+r.right;[r.left,r.right]=o.has("left")?[0,i]:[i,0]}}var du=(n,e)=>{let t=i=>Math.round(i*100),[r,o]=n[0]<e[0]||n[0]===e[0]&&n[1]<=e[1]?[n,e]:[e,n];return`w_${t(r[0])}_${t(r[1])}_${t(o[0])}_${t(o[1])}`};function Ee(n,e,t=[]){let r=e.eps??.005,o=[],i=ou(r),s=iu(n,i),a=t.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),l=a.map(b=>[i.idOf(b.a),i.idOf(b.b)]),c=new Set;for(let b of n){let x=b.points;x.length<3||(b.wall_splits??[]).forEach((v,w)=>{if(!v||w>=x.length)return;let $=x[w],S=W(x[(w+1)%x.length],$),F=de(S);for(let E of v)E>r&&E<F-r&&c.add(i.idOf(Fe($,we(S,E/F))))})}let d=su(s,i.points,r),{drafts:u,open:h}=lu(d,n,e,o);cu(u,i.points);let p=u;a.forEach((b,x)=>{let[v,w]=l[x];if(v===w)return;let $=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],S=n.find(E=>E.points.length>=3&&T($,E.points))?.id??null,F=(b.thickness??e.interior)/2;p.push({free:b.id,a:v,b:w,left:F,right:F,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0})});let f=Rs(p,i.points,c),_=Fs(f,i.points);return{walls:f.map((b,x)=>{let[v,w]=[i.points[b.a],i.points[b.b]],[$,S]=[_.get(`${x}:a`),_.get(`${x}:b`)],F=Es([$.right,S.left,w,S.right,$.left,v],1e-6);return{id:du(v,w),a:[v[0],v[1]],b:[w[0],w[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:F,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(o)],open:h}}function bt(n,e,t){let r=n.points[e];return Fe(r,we(ke(W(n.points[(e+1)%n.points.length],r)),t))}function De(n,e,t){if(n.wall){let o=t.find(a=>a.id===n.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=ke(W(o.b,o.a));return{room:{id:n.room_id,name:"",area_id:null,points:[o.a,o.b,Fe(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===n.room_id);return r&&n.edge<r.points.length?{room:r,edge:n.edge}:null}var zs=(n,e)=>Y(W(e,n.a),ke(W(n.b,n.a)));function Dn(n,e,t){if(!e.wall)return uu(n,t.room,t.edge,e.offset);let r=n.find(o=>o.free===e.wall);return r?{wall:r,s:zs(r,bt(t.room,0,e.offset))}:null}function uu(n,e,t,r){for(let o of n)if(o.sources.some(s=>s.room_id===e.id&&s.edge===t&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:zs(o,bt(e,t,r))};return null}var Ts=([n,e])=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function hu(n){return n.reduce((e,t,r)=>e+(t[0]*n[(r+1)%n.length][1]-n[(r+1)%n.length][0]*t[1]),0)/2}function Ps(n,e){let t=n.length;if(t<3||Math.abs(e)<1e-9)return n.map(([o,i])=>[o,i]);let r=hu(n)>=0?1:-1;return n.map((o,i)=>{let s=n[(i+t-1)%t],a=n[(i+1)%t],[l,c]=Ts([o[0]-s[0],o[1]-s[1]]),[d,u]=Ts([a[0]-o[0],a[1]-o[1]]),h=[c*r,-l*r],p=[u*r,-d*r],f=[h[0]+p[0],h[1]+p[1]],_=Math.hypot(f[0],f[1]);if(_<1e-6)return[o[0]+h[0]*e,o[1]+h[1]*e];let y=(f[0]*h[0]+f[1]*h[1])/_,b=Math.min(4,1/Math.max(.25,y));return[o[0]+f[0]/_*e*b,o[1]+f[1]/_*e*b]})}function Xt(n){let e=n.map(r=>r[0]),t=n.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function fu(n){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,t=new Map;for(let i of n)for(let s of[i.a,i.b])t.set(e(s),[...t.get(e(s))??[],i]);let r=new Set,o=null;for(let i of n){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(t.get(e(a))??[]).find(d=>!r.has(d));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(fe(s))>Math.abs(fe(o)))&&(o=s)}return o}function ro(n,e,t,r){let o=Ee(n,{exterior:t,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?fu(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],d=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(d[1]-a[1])-(a[1]-c[1])*(d[0]-a[0]))>1e-6});return s.length>=3?Ps(s,t):null}function vt(n,e){let t=se(n),r=me(n),o=t.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(b,x)=>[b,x,r.y(x)],d=c(a,-i),u=c(l,-i),h=c(l,o+s),p=c(a,o+s),[f,_]=[Ke(n.pitch_a),Ke(n.pitch_b)],y=b=>[b,r.vr,r.rh];switch(n.shape){case"pent":return{faces:[[d,u,h,p]],rim:[d,u,h,p],ridges:[[h,p]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let b=(t.u1-t.u0)/2,x=n.shape==="pyramid"?b:Math.min(b,Math.min(r.vr,o-r.vr)||o/2),v=y(t.u0+x),w=y(t.u1-x);return n.shape==="pyramid"?{faces:[[d,u,v],[u,h,v],[h,p,v],[p,d,v]],rim:[d,u,h,p],ridges:[[d,v],[p,v],[u,v],[h,v]],gable:null}:{faces:[[d,u,w,v],[v,w,h,p],[p,d,v],[u,h,w]],rim:[d,u,h,p],ridges:[[v,w],[d,v],[p,v],[u,w],[h,w]],gable:null}}case"halfhip":{let b=Math.min(r.y(0),r.y(o)),x=b+(r.rh-b)*.55,v=f>1e-6?Math.min(r.vr,(x-n.eave_a)/f):r.vr,w=_>1e-6?Math.max(r.vr,o-(x-n.eave_b)/_):r.vr,$=Math.min((t.u1-t.u0)/2-.1,(r.rh-x)/Math.max(.2,f)),S=y(t.u0+$),F=y(t.u1-$),E=[a,v,x],O=[a,w,x],N=[l,v,x],I=[l,w,x];return{faces:[[d,u,N,F,S,E],[S,F,I,h,p,O],[O,E,S],[N,I,F]],rim:[d,u,N,I,h,p,O,E],ridges:[[S,F],[E,S],[O,S],[N,F],[I,F]],gable:[[0,r.y(0)],[v,x],[w,x],[o,r.y(o)]]}}case"mansard":{let b=no(o,n.eave_a,n.eave_b,f,_),x=[a,b.vla,b.yla],v=[l,b.vla,b.yla],w=[a,o-b.vlb,b.ylb],$=[l,o-b.vlb,b.ylb],S=[a,b.vr,b.rh],F=[l,b.vr,b.rh];return{faces:[[d,u,v,x],[x,v,F,S],[S,F,$,w],[w,$,h,p]],rim:[d,u,v,F,$,h,p,w,S,x],ridges:[[S,F],[x,v],[w,$]],gable:[[0,r.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,r.y(o)]]}}default:{let b=y(a),x=y(l);return{faces:[[d,u,x,b],[b,x,h,p]],rim:[d,u,x,h,p,b],ridges:[[b,x]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function Ln(n,e,t){let r=null;for(let o of n.faces){if(!T([e,t],o.map(([h,p])=>[h,p])))continue;let[i,s]=o,a=o.slice(2).find(h=>Math.abs((s[0]-i[0])*(h[1]-i[1])-(s[1]-i[1])*(h[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],d=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(d[1])<1e-9)continue;let u=i[2]-(d[0]*(e-i[0])+d[2]*(t-i[1]))/d[1];r=r===null?u:Math.min(r,u)}return r}function oo(n,e,t){let r=se(e),o=n.floors.flatMap(d=>d.rooms.filter(u=>u.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(u=>o.some(h=>T(u,h.points))),s=.35,a=[.15,.5,.85].map(d=>r.u0+(r.u1-r.u0)*d),l=[.15,.5,.85].map(d=>r.w*d),c=d=>d?0:t;return{a:c(i(a.map(d=>r.at(d,-s)))),b:c(i(a.map(d=>r.at(d,r.w+s)))),u0:c(i(l.map(d=>r.at(r.u0-s,d)))),u1:c(i(l.map(d=>r.at(r.u1+s,d))))}}var Cn=n=>Math.abs((n.x1-n.x0)*(n.z1-n.z0)),Os=n=>n.shape==="flat"||n.shape==="parapet",rt=n=>Math.round(n*100)/100;function Bn(n,e){let[t,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return n.filter(i=>{if(i===e||i.dormer||i.open||Os(i)||Cn(i)<Cn(e)*1.5)return!1;let s=Hn(i);return t>=s.x0&&t<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||Cn(s)<Cn(i)?s:i,null)}function io(n,e,t,r){let o=se(n),i=me(n),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[n.eave_a,n.pitch_a]:[n.eave_b,n.pitch_b],d=l+1.4,u=d+s/2*Math.tan(35*Yt),h=Math.max(.8,Math.min(o.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,c)*Yt)))),[p,f]=e==="a"?[0,h]:[o.w-h,o.w],_=o.at(a,p),y=o.at(a+s,f);return{id:t,x0:rt(Math.min(_[0],y[0])),z0:rt(Math.min(_[1],y[1])),x1:rt(Math.max(_[0],y[0])),z1:rt(Math.max(_[1],y[1])),shape:"gable",axis:n.axis==="x"?"z":"x",eave_a:rt(d),eave_b:rt(d),pitch_a:35,pitch_b:35,base:rt(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function mu(n,e){let t=vt(n,{u0:0,u1:0,a:0,b:0}),r=me(n);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=In(n,i,s);return Ln(t,a,l)??r.y(l)}}function so(n,e){if(Os(e))return e;let t=se(e),r=me(e).rh,o=mu(n,t),i=o(t.u0)<=o(t.u1),[s,a]=i?[t.u0,t.u1]:[t.u1,t.u0],l=i?1:-1,c=a;for(let h=.5;h<Math.abs(a-s);h+=.05)if(o(s+l*h)>=r-.02){c=s+l*h;break}if(Math.abs(c-a)<.05)return e;let d={...e},u=a===t.u1;return e.axis==="x"?d[u?"x1":"x0"]=c:d[u?"z1":"z0"]=c,d}var Hs=.14,gu=n=>n.shape==="flat"||n.shape==="parapet";function ao(n,e){return!n.open&&Math.min(n.base,n.eave_a,n.eave_b)<e-.05}function lo(n,e,t){let r=[],o=e+t+Hs;for(let i of n.settings.roof.sections??[]){if(i.open||gu(i)||i.shape==="mansard")continue;let s=se(i),a=me(i),[l,c]=[Ke(i.pitch_a),Ke(i.pitch_b)],d=[];l>1e-6&&d.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&d.push(s.w-(o-i.eave_b)/c);for(let u of d)u<=.01||u>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(u)-o)>1e-6||r.push([s.at(s.u0,u),s.at(s.u1,u)])}return r}function co(n,e,t,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,t+(o-t)*l]);let s=n.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>T(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function uo(n,e){let t=n.floors.filter(r=>r.rooms.length>0).sort((r,o)=>r.elevation-o.elevation);return t.findLast(r=>r.elevation<e.base-.05)??t[0]}var Le=n=>Math.round(n*1e3)/1e3;function ho(n,e=t=>`roof_${t+1}`){let t=n.settings.roof?.pitch??35,r=n.settings.wall_exterior,o=n.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(d=>T(c,d.points));for(let l of o){let c=l.rooms.filter(y=>y.points.length>=3),d=[...new Set(c.flatMap(y=>y.points.map(b=>Le(b[0]))))].sort((y,b)=>y-b),u=[...new Set(c.flatMap(y=>y.points.map(b=>Le(b[1]))))].sort((y,b)=>y-b),h=u.slice(0,-1).map((y,b)=>d.slice(0,-1).map((x,v)=>{let w=[(d[v]+d[v+1])/2,(u[b]+u[b+1])/2];return a(c,w)&&!a(s,w)})),p=h.map(y=>y.map(()=>!1)),f=(y,b)=>h[b][y]&&!p[b][y],_=l.elevation+l.height;for(let y=0;y<h.length;y++)for(let b=0;b<(h[y]?.length??0);b++){if(!f(b,y))continue;let x=b;for(;x+1<h[y].length&&f(x+1,y);)x++;let v=y;for(;v+1<h.length&&Array.from({length:x-b+1},(E,O)=>f(b+O,v+1)).every(Boolean);)v++;for(let E=y;E<=v;E++)for(let O=b;O<=x;O++)p[E][O]=!0;let[w,$]=[d[b]-r,d[x+1]+r],[S,F]=[u[y]-r,u[v+1]+r];Math.min($-w,F-S)<.8||i.push({id:e(i.length),x0:Le(w),z0:Le(S),x1:Le($),z1:Le(F),shape:"gable",axis:$-w>=F-S?"x":"z",eave_a:Le(_),eave_b:Le(_),pitch_a:t,pitch_b:t,base:Le(_),overhang:null})}s.push(...c)}return i}var Ae=Math.PI/180,ge=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],ot=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],yt=n=>Math.hypot(n[0],n[1],n[2]),it=n=>{let e=yt(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Is=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],ze=n=>Math.round(n*100)/100,Qt=([n,e],t)=>(Math.atan2(n,-e)/Ae-t+720)%360;var Ls=.25;function Cs(n,e,t,r,o,i,s){let a=o-t>=i-r,l=a?o-t:i-r;return{key:`${n}:top`,section:e,side:"top",flat:!0,o:[t,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Bs(n,e){let t=it(Is(n,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var Vs=n=>{let e=it([-n[0],0,-n[2]]);return[e[0],e[2]]};function Jt(n,e,t,r,o,i,s,a){let l=it(ge(o,r)),c=it(ge(i,r));return{key:n,section:e,side:t,flat:!1,o:r,eu:l,es:c,n:Bs(l,c),lu:yt(ge(o,r)),ls:yt(ge(i,r)),pitch:s,span:a,facing:Vs(c)}}function Ds(n,e,t,r,o,i){let s=yt(ge(o,r));if(s<.3)return null;let a=it(ge(o,r)),l=ge(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=yt(d);if(u<.3)return null;let h=it(d),p=f=>{let _=Math.min(1,Math.max(0,f/u));return[c*_,s-(s-c)*_]};return{key:n,section:e,side:t,flat:!1,o:r,eu:a,es:h,n:Bs(a,h),lu:s,ls:u,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/Ae,span:p,facing:Vs(h)}}function _u(n,e){let t=se(n),r=me(n),o=(x,v,w)=>{let[$,S]=t.at(x,v);return[$,w,S]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,d=r.y(-i),u=r.y(t.w+s);if(n.shape==="flat"||n.shape==="parapet"){let[x,v]=[t.at(a,-i),t.at(l,t.w+s)];return[Cs(n.id,n.id,Math.min(x[0],v[0]),Math.min(x[1],v[1]),Math.max(x[0],v[0]),Math.max(x[1],v[1]),n.eave_a+Ls)]}if(n.shape==="pent")return[Jt(`${n.id}:a`,n.id,"a",o(a,-i,d),o(l,-i,d),o(a,t.w+s,u),n.pitch_a,()=>[0,c])];let h=n.shape==="hip"||n.shape==="pyramid",p=(t.u1-t.u0)/2,f=n.shape==="pyramid"?p:h?Math.min(p,Math.min(r.vr,t.w-r.vr)||t.w/2):0,_=h?t.u0+f-a:0,y=h?l-(t.u1-f):0,b=[];if(r.vr>.3){let x=Math.hypot(r.vr+i,r.rh-d);b.push(Jt(`${n.id}:a`,n.id,"a",o(a,-i,d),o(l,-i,d),o(a,r.vr,r.rh),n.pitch_a,v=>[_*(v/x),c-y*(v/x)]))}if(t.w-r.vr>.3){let x=Math.hypot(t.w+s-r.vr,r.rh-u);b.push(Jt(`${n.id}:b`,n.id,"b",o(l,t.w+s,u),o(a,t.w+s,u),o(l,r.vr,r.rh),n.pitch_b,v=>[y*(v/x),c-_*(v/x)]))}if(h){let x=Ds(`${n.id}:c`,n.id,"c",o(a,t.w+s,u),o(a,-i,d),o(t.u0+f,r.vr,r.rh)),v=Ds(`${n.id}:d`,n.id,"d",o(l,-i,d),o(l,t.w+s,u),o(t.u1-f,r.vr,r.rh));b.push(...[x,v].filter(w=>w!==null))}return b}function Ws(n){return n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>r.elevation-t.elevation)[0]??null}function U(n){let e=n.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>_u(v,oo(n,v,v.overhang??e.overhang)));let t=Ws(n);if(!t)return[];let r=t.rooms.flatMap(v=>v.points.map(w=>w[0])),o=t.rooms.flatMap(v=>v.points.map(w=>w[1])),i=n.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],d=t.elevation+t.height;if(e.type==="flat")return[Cs("main",null,s,l,a,c,d+Ls)];let u=a-s>=c-l,h=e.ridge==="short"?!u:u,p=(h?c-l:a-s)/2,f=p*Math.tan(e.pitch*Ae),_=(v,w,$)=>h?[v,d+$,(l+c)/2+w]:[(s+a)/2+w,d+$,v],[y,b]=h?[s,a]:[l,c],x=()=>[0,b-y];return[Jt("main:a",null,"a",_(y,-p,0),_(b,-p,0),_(y,0,f),e.pitch,x),Jt("main:b",null,"b",_(y,p,0),_(b,p,0),_(y,0,f),e.pitch,x)]}function $e(n,e){let t=[];for(let r of n.floors.filter(o=>!e||o.id===e)){let{walls:o}=Ee(r.rooms,{exterior:n.settings.wall_exterior,interior:n.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,d]=[a/l,-s/l],u=Math.min(r.height,i.height??r.height),h=(p,f,_,y)=>t.push({key:p,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:y,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[y[0],y[2]],wall:{floorId:r.id}});h(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+d*i.right],[s/l,0,a/l],[c,0,d]),i.free&&h(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-d*i.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var _e="ground";function Ns(n){let e=n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>t.elevation-r.elevation);return e.find(t=>t.elevation>-.5)??e[0]??n.floors[0]??null}function Vn(n,e){let t=(e.rotation??0)*Ae,r=[Math.cos(t),0,Math.sin(t)],o=[-Math.sin(t),0,Math.cos(t)],i=Ns(n),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Zi(i,s,a)):e.base??0;return{key:_e,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function le(n,e,t=U(n)){return e.face===_e?Vn(n,e):e.face.startsWith("wall:")?$e(n,e.face.split(":")[1]).find(r=>r.key===e.face)??null:t.find(r=>r.key===e.face)??null}var Wn=1.13,en=1.72,be=.025,Ge=.07;function st(n){let e=n.module_w||Wn,t=n.module_h||en;return n.portrait===!1?[t,e]:[e,t]}function tn(n){return n.layout?.length?n.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,n.rows)},()=>Math.max(1,n.cols))}function fo(n,e){return n.flat?Math.min(45,Math.max(0,e.tilt??15))*Ae:n.wall?Math.min(90,Math.max(0,e.tilt??0))*Ae:0}function nn(n,e){let[,t]=st(e),r=fo(n,e);return n.wall?t*Math.cos(r)+be:n.flat?t*Math.cos(r)+Math.max(.3,2*t*Math.sin(r)):t+be}function rn(n,e){let[t,r]=st(e),o=tn(e),i=Math.max(1,...o);return[i*t+(i-1)*be,(o.length-1)*nn(n,e)+r*Math.cos(fo(n,e))]}function Se(n,e,t=!1){let[r,o]=st(e),i=fo(n,e),s=o*Math.cos(i),a=nn(n,e),l=tn(e),c=Math.max(1,...l),d=new Set(e.skip??[]),u=(f,_,y)=>[0,1,2].map(b=>n.o[b]+n.eu[b]*f+n.es[b]*_+n.n[b]*y),h=(f,_)=>{if(n.unbounded)return!0;if(_<-1e-6||_>n.ls+1e-6)return!1;let[y,b]=n.span(_);return f>=y-1e-6&&f<=b+1e-6},p=[];return l.forEach((f,_)=>{let y=e.align==="right"?c-f:e.align==="center"?(c-f)/2:0;for(let b=0;b<f;b++){let x=`${_}:${b}`,v=d.has(x);if(v&&!t)continue;let w=e.u+(b+y)*(r+be),$=w+r,S=e.v+_*a,F=S+(n.flat||n.wall?s:o);if([[w,S],[$,S],[$,F],[w,F]].every(([E,O])=>h(E,O)))if(n.wall&&i>.001){let E=Ge+o*Math.sin(i),[O,N]=e.flip?[E,Ge]:[Ge,E],I=[u(w,S,O),u($,S,O),u($,F,N),u(w,F,N)],K=e.flip?S:F;p.push({corners:I,posts:[w+.05,$-.05].map(ie=>[u(ie,K,0),u(ie,K,E)]),cell:x,skipped:v})}else if(!n.flat)p.push({corners:[u(w,S,Ge),u($,S,Ge),u($,F,Ge),u(w,F,Ge)],posts:[],cell:x,skipped:v});else{let O=.15+o*Math.sin(i),[N,I]=e.flip?[F,S]:[S,F],K=[u(w,N,.15),u($,N,.15),u($,I,O),u(w,I,O)],ie=[w+.05,$-.05].flatMap(Z=>[[u(Z,N,0),u(Z,N,.15)],[u(Z,I,0),u(Z,I,O)]]);p.push({corners:K,posts:ie,cell:x,skipped:v})}}}),p}function Ce(n,e){if(n.unbounded)return{u:e.u,v:e.v};let[t,r]=rn(n,e),o=i=>Math.floor(i*100+1e-6)/100;return{u:o(Math.min(Math.max(0,e.u),Math.max(0,n.lu-t))),v:o(Math.min(Math.max(0,e.v),Math.max(0,n.ls-r)))}}function on(n,e){let[t,r]=rn(n,e),[o,i]=[e.u+t/2,e.v+r/2];return[n.o[0]+n.eu[0]*o+n.es[0]*i,n.o[2]+n.eu[2]*o+n.es[2]*i]}var Nn=.78,sn=1.18,Ue=n=>({id:n.id,face:n.face,u:n.u,v:n.v,rows:1,cols:1,portrait:!0,module_w:n.w||Nn,module_h:n.h||sn});function po(n,e){let t=Se(n,Ue(e))[0];if(!t)return null;let r=o=>[o[0]-n.n[0]*.05,o[1]-n.n[1]*.05,o[2]-n.n[2]*.05];return t.corners.map(r)}function mo(n,e){let[t]=st(e);return ze((n.lu-(e.cols*t+(e.cols-1)*be))/2)}var an=.4;function wt(n,e){let t={id:e,face:n.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:n.flat?15:null,flip:!1,entity:null,look:"black"},[r]=st(t),[o,i]=n.span(n.ls/2);for(t.cols=Math.max(1,Math.floor((i-o-2*an+be)/(r+be))),t.rows=Math.max(1,Math.min(4,Math.floor((n.ls-2*an)/nn(n,t))));t.cols>1&&Se(n,{...t,u:mo(n,t),v:an}).length<t.rows*t.cols;)t.cols--;return t.u=mo(n,t),t.v=an,t}function Kn(n,e){let t={...e,face:n.key,tilt:n.flat?e.tilt??15:null,rotation:null,flip:!1};return t.u=mo(n,t),t.v=an,{...t,...Ce(n,t)}}function go(n,e,t){let r=n.settings.north??0,o=a=>a.lu*(1.3+Math.cos((Qt(a.facing,r)-180)*Math.PI/180)),i=$e(n,t).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...wt(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+be)/(en+be))),s.u=ze((i.lu-(s.cols*en+(s.cols-1)*be))/2),s.v=ze(Math.max(0,i.ls-Wn-.3)),s}function ln(n,e){let t=n.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=t.length?Math.max(...t.map(i=>i[0]))+3:0,o=t.length?Math.min(...t.map(i=>i[1])):0;return{id:e,face:_e,u:ze(r),v:ze(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(n.settings.north??0)||0,look:"black",entity:null}}function cn(n,e,t){let r=Vn(n,e),[o,i]=rn(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=t*Ae,d=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,u=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:ze(d),v:ze(u),rotation:(Math.round(t)%360+360)%360}}function dn(n,e){let[t,r]=n.span(n.ls/2);return{id:e,face:n.key,u:ze((t+r-Nn)/2),v:ze(Math.max(0,Math.min(n.ls-sn,n.ls*.45-sn/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function un(n,e){let[t,r]=[e[0]-n.o[0],e[1]-n.o[2]],[o,i,s,a]=[n.eu[0],n.eu[2],n.es[0],n.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(t*a-r*s)/l,d=(o*r-i*t)/l;if(d<0||d>n.ls)return null;let[u,h]=n.span(d);return c>=u&&c<=h?{u:c,s:d}:null}function _o(n,e){let t=null;for(let r of n){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],d=l>=0&&l<=r.lu;if(d&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};d&&c>.35&&c<=.8&&!t&&(t={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=un(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!t||i>t.y)&&(t={face:r,...o,y:i})}return t&&{face:t.face,u:t.u,s:t.s}}function Gn(n,e,t){let r=ot(t,n.n);if(Math.abs(r)<1e-6)return null;let o=ot(ge(n.o,e),n.n)/r;if(o<=0)return null;let i=ge([e[0]+t[0]*o,e[1]+t[1]*o,e[2]+t[2]*o],n.o);return{t:o,u:ot(i,n.eu),s:ot(i,n.es)}}function bo(n,e,t){if(n.unbounded)return!0;if(t<0||t>n.ls)return!1;let[r,o]=n.span(t);return e>=r&&e<=o}function vo(n,e,t,r){return Se(n,e).some(i=>{let s=i.corners.map(c=>{let d=ge(c,n.o);return[ot(d,n.eu),ot(d,n.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return t>=Math.min(...a)-.05&&t<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var bu=["n","ne","e","se","s","sw","w","nw"],yo=(n,e)=>bu[Math.round(Qt(n.facing,e)/45)%8];function hn(n,e){let t=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Qt(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...n].sort((r,o)=>t(o)-t(r))[0]??null}var js=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Ks={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Gs=n=>typeof n=="string"?n:n[0],Un=n=>typeof n=="string"?Ie[n]:n[1],xt=.05,vu=.02,Us=n=>Math.round(n*1e3)/1e3;function yu(n,e,t,r){switch(e){case"back":return{x:n.x0+t,z:n.z0+r,turn:0};case"right":return{x:n.x1-r,z:n.z0+t,turn:90};case"front":return{x:n.x1-t,z:n.z1-r,turn:180};case"left":return{x:n.x0+r,z:n.z1-t,turn:270}}}function Zs(n,e,t){let r=Q(n.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,d,u,[h,p,f])=>{s.push({id:t(),type:l,x:Us(c),z:Us(d),rotation:u,w:h,d:p,h:f,variant:null,entity:null,power:null})};for(let[l,c,d]of Ks[e].rows){let u=l==="back"||l==="front"?o:i,h=0,p=[];for(let _ of d){if(h+Un(_)[0]>u-.1)break;p.push(_),h+=Un(_)[0]}let f=c==="start"?xt:c==="end"?u-h-xt:(u-h)/2;for(let _ of p){let y=Un(_),b=yu(r,l,f+y[0]/2,y[1]/2+vu);a(Gs(_),b.x,b.z,b.turn,y),f+=y[0]}}for(let[l,c,d,u]of Ks[e].spots){let h=Un(l),p=(y,b,x)=>Math.min(x,Math.max(b,y)),f=p(r.x0+o*c,r.x0+h[0]/2+xt,r.x1-h[0]/2-xt),_=p(r.z0+i*d,r.z0+h[1]/2+xt,r.z1-h[1]/2-xt);a(Gs(l),f,_,u,h)}return s}var qs={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"{n} Erkennungs-Sensoren am Ger\xE4t dieser Kamera: {kinds}. Solange einer etwas meldet, markiert ein Pin es in 3D vor der Kamera.",camera_detect_none:"Am Ger\xE4t dieser Kamera gibt es noch keine Erkennungs-Sensoren. Pins erscheinen, sobald die Integration welche liefert (z. B. Frigate, UniFi Protect, Reolink).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern.",card_motion_trail_hint:"Ein Pfad der Bewegungen der letzten halben Stunde durchs Haus, mit Uhrzeiten",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Alle Kameras nebeneinander. Antippen vergr\xF6\xDFert eine; ein roter Rand hei\xDFt Bewegung.",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Eigene M\xF6bel-Packs sind JSON-Dateien (Format in docs/packs.md). Die mitgelieferten Packs sind immer da.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",feature_text_cameras:"Eine Kamera antippen: die Ansicht fliegt an ihren Platz und schaut in ihre Richtung, dann blendet das Live-Bild ein \u2013 mit dem, was sie gerade erkennt (Person, Fahrzeug, Tier). Die Kamerawand zeigt alle Kameras nebeneinander, die Bewegungsspur zeichnet die letzte halbe Stunde als leuchtenden Pfad durchs Haus, mit Zeiten an jedem Raum.",feature_name_energy:"Energiefluss",feature_name_cameras:"Kameras",feature_name_weather:"Wetter am Haus",feature_name_screens:"TV-Bildschirme",feature_name_sound:"Klang",feature_name_car:"Auto",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Was in NextFloor steckt: die gro\xDFen Funktionen und die M\xF6bel-Packs. Alles ist frei und Open Source \u2013 eigene M\xF6bel-Packs kannst du hier importieren.",ext_pro:"Funktionen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Live-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die Live-Erweiterungen (Wetter, Energie, Auto, Klang, Bildschirme, Kameras) findest du oben unter \u201EErweiterungen\u201C.",feature_text_weather:"Regen, Schnee, Hagel und Schneeregen fallen schr\xE4g mit dem echten Wind, Wolken ziehen mit ihren Schatten \xFCbers Grundst\xFCck, Blitze schlagen neben dem Haus ein, dazu Nebel, Sonne und Mond in ihrer echten Richtung.",feature_text_screens:"Ein Fernseher oder Monitor, der l\xE4uft, zeigt im 3D-Modell, was l\xE4uft: Cover, Titel, Interpret oder Serie und die App \u2013 auf einem Verlauf in der App-Farbe. Dahinter leuchtet ein Ambilight an der Wand, das beim Abspielen sanft atmet.",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",feature_text_sound:"\xDCber jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover, Titel und Interpret \u2013 antippen f\xFCr Zur\xFCck, Abspielen/Pause, Weiter und Lautst\xE4rke. Schallringe in der Farbe der App (Spotify gr\xFCn, Netflix rot \u2026) breiten sich aus, lauter hei\xDFt weiter, und Lautsprecher einer Multiroom-Gruppe sind mit einem Faden verbunden.",feature_text_car:"Eine Glaskarte \xFCber dem Stellplatz zeigt Ladestand mit Farbring, Reichweite, Laden mit Leistung, Stecker und Innentemperatur \u2013 mit Kn\xF6pfen f\xFCr Schloss, Klima und Laden. L\xE4dt das Auto, fliegen Energieteilchen von der Wallbox hinein; ist es weg, steht da, wo es gerade ist. Die Entit\xE4ten findet NextFloor selbst am Ger\xE4t des Autos.",pack_remove:"Entfernen",pack_builtin:"mitgeliefert",live_autarky:"autark",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_now:"jetzt",live_minutes_ago:"vor {n} min",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Ys={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"{n} detection sensors on this camera's device: {kinds}. While one reports something, a pin marks it in front of the camera in 3D.",camera_detect_none:"This camera's device has no detection sensors yet. Pins show up as soon as the integration offers some (e.g. Frigate, UniFi Protect, Reolink).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture.",card_motion_trail_hint:"A path of the last half hour's motion through the house, with times",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"All cameras side by side. Tap one to enlarge it; a red outline means motion.",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Your own furniture packs are JSON files (format in docs/packs.md). The packs that come with NextFloor are always there.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",feature_text_cameras:"Tap a camera: the view flies to where it hangs and looks its way, then the live picture fades in \u2013 with what it detects right now (person, vehicle, animal). The camera wall shows every camera side by side, the motion trail draws the last half hour as a glowing path through the house, with times at every room.",feature_name_energy:"Energy flow",feature_name_cameras:"Cameras",feature_name_weather:"Weather at the house",feature_name_screens:"TV screens",feature_name_sound:"Sound",feature_name_car:"Car",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"What NextFloor brings: its larger features and the furniture packs. Everything is free and open source \u2013 import your own furniture packs here.",ext_pro:"Features",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and live features",ext_teaser_text:'Furniture packs and the live add-ons (weather, energy, car, sound, screens, cameras) are under "Extensions" at the top.',feature_text_weather:"Rain, snow, hail and sleet fall at an angle with the real wind, clouds drift over the plot with their shadows, lightning strikes beside the house, plus fog, sun and moon in their real direction.",feature_text_screens:"A TV or monitor that plays shows in 3D what plays: cover, title, artist or series and the app \u2013 on a gradient in the app's colour. Behind it an ambilight glows on the wall, breathing gently while it plays.",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",feature_text_sound:"A card floats over every speaker or TV that plays, with cover, title and artist \u2013 tap it for previous, play/pause, next and volume. Sound rings in the colour of the app (Spotify green, Netflix red \u2026) spread out, louder reaches further, and speakers of a multiroom group are joined by a thread.",feature_text_car:"A glass card over the parking spot shows the charge with a colour ring, range, charging with its power, plug and inside temperature \u2013 with buttons for lock, climate and charging. While the car charges, energy particles fly into it from the wallbox; when it is away, the card says where it is. NextFloor finds the entities on the car's device by itself.",pack_remove:"Remove",pack_builtin:"built in",live_autarky:"self-sufficient",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_now:"now",live_minutes_ago:"{n} min ago",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},wu=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],fn=new Map,wo=new Map;function xo(n){let e=(n??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return wu.includes(t)?t:null}function Xs(n){let e=xo(n);return!e||fn.has(e)}function Qs(n){let e=xo(n);if(!e||fn.has(e))return Promise.resolve();let t=wo.get(e);if(!t){let r=new URL(`./lang/${e}.json?v=be5ce4442bac`,import.meta.url).href;t=fetch(r).then(o=>o.ok?o.json():{}).then(o=>{fn.set(e,o&&typeof o=="object"?o:{})}).catch(()=>{fn.set(e,{})}).finally(()=>wo.delete(e)),wo.set(e,t)}return t}function Te(n,e,t={}){let r=n?.language??navigator.language,o=r.startsWith("de")?null:xo(r),s=(r.startsWith("de")?qs:o&&fn.get(o)||Ys)[e]??Ys[e]??qs[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function H(n,e,t=2){return e.toLocaleString(n?.language??void 0,{maximumFractionDigits:t})}var kt=Me`
  :host {
    --nf-text: var(--primary-text-color, #e1e1e1);
    --nf-muted: var(--secondary-text-color, #9b9b9b);
    --nf-accent: var(--primary-color, #03a9f4);
    --nf-accent-text: var(--text-primary-color, #ffffff);
    --nf-surface: var(--ha-card-background, var(--card-background-color, #1c1c1c));
    --nf-bg: var(--primary-background-color, #111111);
    --nf-bg2: var(--secondary-background-color, #1c1c1c);
    /* floating bars and cards over the 3D view: the card colour, a little see-through */
    --nf-chrome: color-mix(in srgb, var(--nf-surface) 84%, transparent);
    --nf-chrome-solid: var(--nf-surface);
    --nf-line: var(--divider-color, rgba(255, 255, 255, 0.12));
    /* quiet fills for buttons and fields, and the tonal accent of an active control */
    --nf-fill: color-mix(in srgb, var(--nf-text) 7%, transparent);
    --nf-fill-strong: color-mix(in srgb, var(--nf-text) 13%, transparent);
    --nf-tonal: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    --nf-soft: var(--info-color, #4a90e2);
    --nf-warm: var(--state-light-active-color, #ffa726);
    --nf-danger: var(--error-color, #db4437);
    --nf-good: var(--success-color, #43a047);
    --nf-radius: var(--ha-card-border-radius, 12px);
    --nf-shadow: var(--ha-card-box-shadow, 0 1px 2px rgba(0, 0, 0, 0.18), 0 6px 20px rgba(0, 0, 0, 0.2));
    --nf-font: var(--primary-font-family, Roboto, "Noto Sans", system-ui, -apple-system, "Segoe UI", sans-serif);
    --nf-title-font: var(--nf-font);
    font-family: var(--nf-font);
    color: var(--nf-text);
  }
`,jn=Me`
  /* a group of switches: one rounded pill, the active one tinted with the accent */
  .nf-seg {
    display: inline-flex;
    padding: 4px;
    gap: 2px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }
  .nf-seg button,
  .nf-chip {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--nf-muted);
    padding: 7px 14px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 36px;
    transition:
      background 0.15s,
      color 0.15s;
  }
  .nf-seg button:hover:not(:disabled),
  .nf-chip:hover {
    background: var(--nf-fill);
    color: var(--nf-text);
  }
  .nf-seg button[aria-pressed="true"],
  .nf-chip[aria-pressed="true"] {
    background: color-mix(in srgb, var(--nf-accent) 24%, var(--nf-chrome-solid));
    color: var(--nf-accent);
    font-weight: 600;
  }
  .nf-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  /* a single pill, like the chips of the Mushroom cards */
  .nf-chip {
    background: var(--nf-chrome);
    color: var(--nf-text);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(10px);
  }

  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  /* the round icon badge every row and card starts with */
  .nf-ico {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--nf-tonal);
    color: var(--nf-accent);
    --mdc-icon-size: 20px;
  }
  .nf-ico.nf-warm {
    background: color-mix(in srgb, var(--nf-warm) 22%, transparent);
    color: var(--nf-warm);
  }
  .nf-ico.nf-off {
    background: var(--nf-fill);
    color: var(--nf-muted);
  }
  .nf-btn {
    font: inherit;
    font-size: 14px;
    font-weight: 500;
    border: none;
    background: var(--nf-fill);
    color: var(--nf-text);
    border-radius: var(--nf-radius);
    padding: 7px 14px;
    cursor: pointer;
    min-height: 36px;
    transition: background 0.15s;
  }
  .nf-btn:hover {
    background: var(--nf-fill-strong);
  }
  .nf-btn.nf-danger {
    color: var(--nf-danger);
  }
  .nf-btn.nf-primary {
    background: var(--nf-accent);
    color: var(--nf-accent-text);
  }
  .nf-btn.nf-primary:hover {
    background: color-mix(in srgb, var(--nf-accent) 88%, var(--nf-text));
  }
  .nf-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-field input,
  .nf-field select {
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: var(--nf-fill);
    border: none;
    border-bottom: 1px solid var(--nf-line);
    border-radius: 10px 10px 4px 4px;
    padding: 8px 10px;
    min-width: 0;
  }
  .nf-field input:focus,
  .nf-field select:focus {
    border-bottom-color: var(--nf-accent);
  }
  .nf-field input[type="range"] {
    padding: 0;
    accent-color: var(--nf-accent);
  }
  .nf-field select option {
    background: var(--nf-chrome-solid);
    color: var(--nf-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .nf-seg button,
    .nf-chip,
    .nf-btn {
      min-height: 40px;
    }
  }
`;var te=n=>/^(sensor|input_number|number)\./.test(n),Zn=n=>/^(binary_sensor|input_boolean)\./.test(n);function $t(n,e){if(!te(e))return!1;let t=n?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}function xu(n,e){let t=n?.entities?.[e],r=t?.area_id??(t?.device_id?n?.devices?.[t.device_id]?.area_id:null);return r?n?.areas?.[r]?.name:void 0}function L(n,e){return Object.keys(n?.states??{}).filter(e).map(t=>{let r=xu(n,t);return{id:t,label:r?`${C(n,t)} \xB7 ${r}`:C(n,t)}}).sort((t,r)=>t.label.localeCompare(r.label))}function qn(n,e){return n.power&&n.power!=="none"?n.power:e.get(n.id)?.power??null}var Js={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ea=n=>(...e)=>({_$litDirective$:n,values:e}),Yn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var pn=class extends Yn{constructor(e){if(super(e),this.it=g,e.type!==Js.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===Oe)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};pn.directiveName="unsafeHTML",pn.resultType=1;var ta=ea(pn);var na=40,ko=class extends ue{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,na)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>t.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-na)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return m`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${r=>{this._query=r.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${t.length?g:m`<li class="empty">–</li>`}
            ${t.map((r,o)=>m`<li
                role="option"
                aria-selected=${r.id===this.value}
                class="${o===this._cursor?"cursor":""} ${r.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(r.id)}
              >
                <span>${r.label}</span>${r.id.includes(".")?m`<small>${r.id}</small>`:g}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:g}
          </ul>`:g}
    </div>`}static styles=[kt,Me`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--nf-text);
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--nf-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--nf-muted);
      }
      input:focus {
        outline: 2px solid var(--nf-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        box-shadow: var(--nf-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--nf-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--nf-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--nf-accent);
      }
      li.empty {
        color: var(--nf-muted);
        cursor: default;
      }
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",ko);var St=n=>n.target.value,$o=n=>Number.parseFloat(n.replace(",",".")),ne=n=>Math.round(n*1e3)/1e3,ra=n=>n.wide?"nf-field nf-wide":"nf-field";function R(n,e,t,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(ne(t))}
      ?disabled=${!n.admin}
      @change=${s=>{let a=$o(St(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function oe(n,e,t,r,o={}){return m`<label class=${ra(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${t} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!n.admin} @change=${i=>r(St(i).trim())} />
  </label>`}function D(n,e,t,r,o,i={}){return m`<label class=${ra(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!n.admin} @change=${s=>o(St(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===t}>${a}</option>`)}
    </select>
  </label>`}function B(n,e,t,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${t} ?disabled=${!n.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function z(n,e,t,r,o,i){let s=r===void 0?null:r?n.t("entity_auto",{name:C(n.hass,r)}):n.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:n.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${o}
      .fixed=${a}
      .value=${t??(s!==null?"__auto":"none")}
      .placeholder=${n.t("entity_search")}
      ?disabled=${!n.admin}
      @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Mt(n,e,t){let r=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${n.t("marker_icon_hint")}
    >${n.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!n.admin} @change=${o=>t(St(o).trim().replace(/^mdi:/,"")||null)} />
      ${r?ta(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function Xn(n,e,t){return m`<label class="nf-field nf-wide" title=${n.t("marker_show_hint")}
    >${n.t("marker_show")}
    <select ?disabled=${!n.admin} @change=${r=>t(St(r)||null)}>
      <option value="" ?selected=${!e}>${n.t("marker_show_auto")}</option>
      ${Bi.map(r=>m`<option value=${r} ?selected=${r===e}>${n.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}var ee=(...n)=>m`<div class="nf-actions">${n}</div>`,M=(n,e="")=>m`<p class="nf-sub ${e}">${n}</p>`;function Qn(n,e,t){return m`<label class="nf-field" title=${n.t("glow_scale_hint")}
    >${n.t("glow_scale")}
    <input
      type="number"
      min="10"
      max="150"
      step="5"
      .value=${String(Math.round((e??1)*100))}
      ?disabled=${!n.admin}
      @change=${r=>{let o=Math.min(150,Math.max(10,Number(St(r))||100))/100;t(Math.abs(o-1)<.001?null:o)}}
    />
  </label>`}function oa(n,e,t){let r=n.filter(o=>o.person!==e);return t&&t!=="none"?[...r,{person:e,sensor:t}]:r}function ia(n,e){let t=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(t)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...n.filter(r),...n.filter(o=>!r(o))]}function sa(n){let e=n.target?`, target: { x: ${n.target.x}, y: ${n.target.y}, z: ${n.target.z} }`:"";return`start_view: { theta: ${n.theta}, phi: ${n.phi}, radius: ${n.radius}${e} }`}function aa(n){let e=n.trim();if(!e)return{ok:!0,value:null};try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?{ok:!0,value:t}:{ok:!1}}catch{return{ok:!1}}}function Jn(n,e,t){let r=[...n],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+t)),0,o),r}var er=(n,e)=>n.filter((t,r)=>r!==e),So=(n,e,t)=>n.map((r,o)=>o===e?{...r,...t}:r),tr=n=>n.length>0?n:void 0;var ku=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],$u=40,Su=20,Mu=30,Ru=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],Fu={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},Mo=(n,e,t,r=!1)=>m`<button class="nf-pin" title=${n} ?disabled=${r} @click=${t}>${e}</button>`;function Eu(n){let e=n.doc.settings.favorites??[],t=i=>n.change(s=>s.settings.favorites=tr(i)),r=L(n.hass,i=>ku.includes(i.split(".")[0])&&!e.includes(i)),o=(i,s)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${C(n.hass,i)}</span></span>
    ${Mo(n.t("move_up"),"\u2191",()=>t(Jn(e,s,-1)),s===0)}
    ${Mo(n.t("move_down"),"\u2193",()=>t(Jn(e,s,1)),s===e.length-1)}
    ${Mo(n.t("delete"),"\u2715",()=>t(er(e,s)))}
  </div>`;return m`<summary>${n.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${M(n.t("favorites_hint"))} ${e.map(o)}
    ${e.length<$u?m`<div class="nf-form">${z(n,n.t("favorites_add"),null,void 0,r,i=>i&&i!=="none"&&!e.includes(i)&&t([...e,i]))}</div>`:g}`}function Au(n){let e=n.doc.settings.media_presets??[],t=i=>n.change(s=>s.settings.media_presets=tr(i)),r=(i,s)=>t(So(e,i,s)),o=(i,s)=>m`<div class="nf-form nf-own-button">
    ${oe(n,n.t("own_button_label"),i.label,a=>r(s,{label:a||"Radio"}),{maxlength:60})}
    ${oe(n,n.t("preset_type"),i.type,a=>r(s,{type:a||"music"}),{title:n.t("preset_type_hint")})}
    ${oe(n,n.t("preset_content"),i.content,a=>r(s,{content:a}),{wide:!0,title:n.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>t(er(e,s))}>${n.t("delete")}</button></div>
  </div>`;return m`<h4>${n.t("presets")}</h4>
    ${M(n.t("presets_hint"))}
    <datalist id="nf-preset-types">${Ru.map(i=>m`<option value=${i}></option>`)}</datalist>
    ${e.map(o)}
    ${e.length<Mu?ee(m`<button class="nf-btn" @click=${()=>t([...e,{id:P("preset"),label:"Radio",type:"music",content:""}])}>+ ${n.t("preset_add")}</button>`):g}`}function zu(n,e,t){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let a=aa(s.value);if(a.ok)return t(a.value);s.setCustomValidity(n.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${n.t("own_data_hint")}
    >${n.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function Tu(n){let e=n.doc.settings.buttons??[],t=s=>n.change(a=>a.settings.buttons=tr(s)),r=(s,a)=>t(So(e,s,a)),o=Wi.map(s=>[s,n.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${oe(n,n.t("own_button_label"),s.label,l=>r(a,{label:l||n.t("own_button_new")}),{maxlength:60})}
    ${D(n,n.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${Mt(n,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?oe(n,n.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:Fu[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?zu(n,s,l=>r(a,{data:l})):g}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>t(Jn(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>t(er(e,a))}>${n.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${n.t("own_buttons")}</h4>
    ${M(n.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<Su?ee(m`<button class="nf-btn" @click=${()=>t([...e,{id:P("btn"),label:n.t("own_button_new"),action:"navigate",target:null}])}>+ ${n.t("own_button_add")}</button>`):g}`}function la(n){return m`<details class="nf-section">${Eu(n)} ${Tu(n)} ${Au(n)}</details>`}function ca(n,e){let t=n.doc.settings.start_view??null,r=()=>{let o=e();o&&n.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${n.t("start_view")}</summary>
    ${M(n.t("start_view_hint"))}
    ${ee(m`<button class="nf-btn nf-primary" @click=${r}>${n.t("start_view_set")}</button>`,t?m`<button class="nf-btn" @click=${()=>n.change(o=>o.settings.start_view=null)}>${n.t("start_view_reset")}</button>`:g)}
    ${t?m`${M(n.t("start_view_saved"))} ${M(n.t("start_view_card"))}<code class="nf-code">${sa(t)}</code>`:g}
  </details>`}function da(n){let e=Object.keys(n.hass?.states??{}).filter(o=>o.startsWith("person.")).sort(),t=L(n.hass,te),r=o=>z(n,`${C(n.hass,o)} \xB7 ${n.t("presence_sensor")}`,n.doc.presence.find(i=>i.person===o)?.sensor??null,void 0,ia(t,o),i=>n.replace({...structuredClone(n.doc),presence:oa(n.doc.presence,o,i)}));return m`<details class="nf-section">
    <summary>${n.t("presence")}</summary>
    <div class="nf-form">${e.length>0?e.map(r):m`<p class="nf-sub nf-wide">${n.t("no_persons")}</p>`}</div>
    ${M(n.t("presence_hint"))}
  </details>`}var ua="nextfloor";function Pu(n){let e=structuredClone(n);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.background=null,t.placements=[],t.rooms.forEach(r=>r.area_id=null),t.furniture.forEach(r=>Object.assign(r,{entity:null,power:null})),t.openings.forEach(r=>Object.assign(r,{cover:null,contact:null,tilt:null}));return e}function ha(n,e){return{format:ua,version:1,exported_at:new Date().toISOString(),building:e?Pu(n):structuredClone(n)}}var Ou=n=>!!n&&n.version===1&&Array.isArray(n.floors)&&!!n.settings;function fa(n){let e;try{e=JSON.parse(n)}catch{throw new Error("not_json")}let t=e,r=t?.format===ua?t.building:e;if(!Ou(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),An(r)}var Hu=n=>!/^https?:\/\//.test(n)&&!n.startsWith("camera:");function pa(n){let e=new Set;for(let t of n.floors){t.background?.image_id&&e.add(t.background.image_id);let r=t.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&Hu(o)&&e.add(o)}return[...e]}function ma(n,e){let t=document.createElement("a"),r=URL.createObjectURL(new Blob([e],{type:"application/json"}));Object.assign(t,{href:r,download:n}),t.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}var Iu={api:{listHistory:xi,restoreSnapshot:$i,takeSnapshot:ki,fetchBackup:Ri,restoreBackup:Fi,fetchImage:xn,storeImage:kn},alert:n=>alert(n),confirm:n=>confirm(n),download:ma,today:()=>new Date().toISOString().slice(0,10)},Du=n=>String(n?.message??n),nr=class{host;deps;history=null;busy=!1;constructor(e,t=Iu){this.host=e,this.deps=t}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:t,t:r}=this.host;!t||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(t,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}exportPlan(e){let t=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${t}-${this.deps.today()}.json`,JSON.stringify(ha(this.host.doc,e),null,2))}async importPlan(e){let{hass:t,t:r}=this.host;if(!e||!t)return;let o;try{o=fa(await e.text())}catch(i){let s=i.message;this.deps.alert(s==="not_json"?r("import_error_not_json"):s==="not_plan"?r("import_error_not_plan"):r("backup_import_error",{error:s}));return}this.deps.confirm(r("backup_import_confirm"))&&(await this.deps.api.takeSnapshot(t).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of pa(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${t("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(t("backup_import_error",{error:Du(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:t,t:r}=this.host;if(!e||!t)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(t,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(t,l,c).then(()=>s++,()=>{});this.host.adopt(An(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};var ga=(n,e)=>m`<label class="nf-btn nf-upload"
  >${n}<input
    type="file"
    accept="application/json,.json"
    @change=${t=>{let r=t.target,o=r.files?.[0];r.value="",e(o)}}
  />
</label>`;function _a(n,e){let t=n.t,r=e.history,o=r===null?M(t("loading")):r.length===0?M(t("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                <span>${e.timeOf(i)} <span class="nf-muted">· ${t("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                <button class="nf-link" @click=${()=>e.restorePoint(i)}>${t("backup_restore")}</button>
              </div>`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${t("backup")}</summary>
    <h4 class="nf-lib-head">${t("backup_history")}</h4>
    ${o}
    <h4 class="nf-lib-head">${t("backup_file")}</h4>
    ${ee(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${t("backup_export")}</button>`,m`<button class="nf-btn" title=${t("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${t("backup_export_share")}</button>`,ga(t("backup_import"),i=>{e.importPlan(i)}))}
    ${M(t("backup_hint"))}
    <h4 class="nf-lib-head">${t("backup_full")}</h4>
    ${ee(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":t("backup_full_export")}</button>`,ga(t("backup_full_import"),i=>{e.importFull(i)}))}
    ${M(t("backup_full_hint"))}
  </details>`}function ba(n,e){return e&&n.states[e]?e:Object.keys(n.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var Rt=(n,e,t)=>Math.min(t,Math.max(e,n)),va=n=>(Math.round(n)%360+360)%360;function ya(n,e,t){return t?[...new Set([...n,e])]:n.filter(r=>r!==e)}var Lu=["none","flat","gable","custom"];function wa(n,e){let t=n.t,r=n.doc.settings,o=c=>n.replace({...structuredClone(n.doc),settings:{...structuredClone(n.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=Lu.map(c=>[c,t(`roof_${c}`)]),a=r.weather_effects??Ki,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${t("settings")}</summary>
    <div class="nf-form">
      ${R(n,t("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:Rt(c,.02,1)}),.01,.02)}
      ${R(n,t("wall_interior"),r.wall_interior,c=>o({wall_interior:Rt(c,.02,1)}),.01,.02)}
      ${R(n,t("grid"),r.grid,c=>o({grid:Rt(c,.01,1)}),.01,.01)}
      ${R(n,t("north"),r.north,c=>o({north:va(c)}),1)}
      ${D(n,t("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?D(n,t("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",t("roof_ridge_long")],["short",t("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?R(n,t("roof_pitch"),r.roof.pitch,c=>i({pitch:Rt(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?R(n,t("roof_overhang"),r.roof.overhang,c=>i({overhang:Rt(c,0,2)}),.05,0):g}
      ${n.hass?z(n,t("weather_entity"),r.weather_entity??null,ba(n.hass,null),L(n.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${t("weather_effects")}</div>
      ${Ni.map(c=>B(n,t(`weather_effect_${c}`),a.includes(c),d=>o({weather_effects:ya(a,c,d)}),{wide:!1}))}
      ${B(n,t("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${B(n,t("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:t("sun_patches_hint")})}
    </div>
    ${M(`${t("north_hint")} ${t("weather_entity_hint")}`)}
  </details>`}var rr=n=>n&&n!=="none"?n:null,or=(n,e)=>{e&&!n.includes(e)&&n.push(e)};function Ro(n,e=t=>rr(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of n.floors.flatMap(o=>o.furniture)){let o=e(r);if(r.type==="meter")t.grid??=o,t.gridExport??=rr(r.export);else if(r.type==="inverter")or(t.solar,o);else if(r.type==="home_battery"){let i=rr(r.charge);or(t.battery,o),or(t.charge,i),or(t.soc,rr(r.soc)),(o||i)&&t.batteries.push({power:o,charge:i})}}return t}function Cu(n){for(let e of n.floors){let t=e.furniture.find(r=>r.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return n.energy.meter}var Bu=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,Vu=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function ir(n,e,t="power"){let r=e?n.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(n.states).filter(a=>a.startsWith("sensor.")&&n.entities?.[a]?.device_id===r&&n.states[a]?.attributes.device_class===t);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!Bu.test(a)),s=e.replace(/^sensor\./,"").replace(Vu,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function xa(n,e){let t={},r=(o,i)=>{i&&!t[o]&&(t[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",ir(n,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",ir(n,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",ir(n,i)),r("battery_soc",ir(n,i,"battery"))}return t}function Be(n,e=!1){let t=n?Number(n.state):NaN;if(!Number.isFinite(t))return null;let r={kW:1e3,MW:1e6}[String(n.attributes.unit_of_measurement??"W")]??1;return e?-t*r:t*r}var ka=n=>{let e=n.filter(t=>t!==null);return e.length?e.reduce((t,r)=>t+r,0):null};function Wu(n,e,t){let r=e.grid??t.grid,o=r?Be(n.states[r],e.grid_invert):null;if(!e.grid&&t.gridExport){let i=Math.max(0,Be(n.states[t.gridExport])??0);return Math.max(0,o??0)-i}return o}function Nu(n,e,t){return e.solar?Be(n.states[e.solar]):t.solar.length?ka(t.solar.map(r=>Be(n.states[r]))):null}function Ku(n,e,t){return e.battery?Be(n.states[e.battery],e.battery_invert):ka(t.batteries.map(r=>r.charge?(r.power?Math.max(0,Be(n.states[r.power])??0):0)-Math.max(0,Be(n.states[r.charge])??0):r.power?Be(n.states[r.power],e.battery_invert):null))}function $a(n,e,t,r=Ro(e)){let o=e.energy,i=Wu(n,o,r),s=Nu(n,o,r),a=Ku(n,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(p=>Number(n.states[p]?.state)).filter(Number.isFinite),c=l.length?l.reduce((p,f)=>p+f,0)/l.length:null,d=o.tariff?n.states[o.tariff]:void 0,u=Number(d?.state),h=o.consumption?Be(n.states[o.consumption]):null;return h===null&&(i!==null||s!==null||a!==null)&&(h=(i??0)+Math.max(0,s??0)+(a??0)),h===null&&t.length>0&&(h=t.reduce((p,f)=>p+f.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:d&&Number.isFinite(u)?{value:u,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)}}function Gu(n,e,t){let r=n.b[0]-n.a[0],o=n.b[1]-n.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-n.a[0])*r+(e.z-n.a[1])*o)/(i*i))),a=n.a[0]+r*s,l=n.a[1]+o*s,c=o/i*(a-t.x)+-r/i*(l-t.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function Sa(n){let e=Cu(n),t=e?n.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!t)return null;let r={exterior:n.settings.wall_exterior,interior:n.settings.wall_interior},o=Ee(t.rooms,r,t.walls??[]).walls.filter(c=>c.exterior),i=t.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,d)=>c+d[0],0)/i.length,z:i.reduce((c,d)=>c+d[1],0)/i.length},a=o.map(c=>Gu(c,e,s)).reduce((c,d)=>d.distance<c.distance?d:c),l=r.exterior/2+3;return{floorId:t.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function Ma(n,e){let t=n.floors.flatMap(f=>f.furniture.map(_=>({floor:f,item:_}))),r=f=>t.filter(_=>_.item.type===f),o=f=>!!qn(f.item,e),i=f=>({kind:"device",...f}),[s,a,l,c,d]=[n.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],u=!!n.energy.grid||a.some(o),h=!!n.energy.solar||l.length>0&&l.every(o),p=!!n.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:u?"ok":"todo",label:u?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:h?"ok":"todo",label:h?"chk_inverter":"chk_inverter_sensor",target:i(l.find(f=>!o(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:p?"ok":"todo",label:p?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},d.length>0?{state:"ok",label:"chk_grid",target:i(d[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}var Uu={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},Fa=n=>n.hass?tt(n.hass,n.doc.floors):new Map,ju=he,Zu=(n,e)=>e.name||n.t(`furn_${e.type}`);function Ea(n,e){let t=Ma(n.doc,Fa(n)),r=t.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${n.t("chk_title")} <span class="nf-sub">${r}/${t.length}</span></h3>
    ${M(n.t("chk_hint"))}
    ${t.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!n.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${Uu[o.state]}</span>${n.t(o.label)}
      </button>`)}
  </section>`}function Aa(n,e){let t=n.doc.floors.flatMap(r=>r.furniture.filter(o=>ju.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${n.t("energy_devices")}</h3>
    ${M(n.t("energy_devices_hint"))}
    ${t.length>0?m`<div class="nf-room-list">
          ${t.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${Zu(n,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${he.map(r=>m`<button class="nf-btn" ?disabled=${!n.admin||!n.floor} @click=${()=>e.addDevice(r)}>+ ${n.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var Ra=(n,e,t)=>m`<p class="nf-sub nf-pack-error">${n.t(e)} <button class="nf-btn" ?disabled=${!n.admin} @click=${t}>${n.t("energy_sign_flip")}</button></p>`;function za(n,e){let{energy:t}=n.doc,r=(y,b)=>n.hass?.states[y]?.attributes[b],o=L(n.hass,y=>$t(n.hass,y)),i=L(n.hass,y=>te(y)&&r(y,"device_class")==="battery"),s=L(n.hass,y=>te(y)&&(r(y,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(y,"unit_of_measurement")??""))),a=Fa(n),l=Ro(n.doc,y=>qn(y,a)),c=y=>n.replace({...structuredClone(n.doc),energy:{...n.doc.energy,...y}}),d=y=>b=>c({[y]:b==="none"?null:b}),u=n.hass?$a(n.hass,n.doc,[],l):null,h=!!u&&(u.solar??0)<20,p=h&&u.grid!==null&&u.grid<-50,f=h&&u.battery!==null&&u.battery<-50&&(u.grid??0)<=0,_=(y,b)=>B(n,n.t("energy_invert"),y,x=>c(b(x)));return m`<section>
    <h3>⚖ ${n.t("energy_balance")}</h3>
    ${M(n.t("energy_balance_hint"))}
    ${p?Ra(n,"energy_sign_grid",()=>c({grid_invert:!t.grid_invert})):g}
    ${f?Ra(n,"energy_sign_battery",()=>c({battery_invert:!t.battery_invert})):g}
    <div class="nf-form">
      ${z(n,n.t("energy_grid"),t.grid,l.grid,o,d("grid"))}
      ${_(t.grid_invert,y=>({grid_invert:y}))}
      ${z(n,n.t("energy_solar_sensor"),t.solar,l.solar[0]??null,o,d("solar"))}
      ${z(n,n.t("energy_battery_sensor"),t.battery,l.battery[0]??null,o,d("battery"))}
      ${_(t.battery_invert,y=>({battery_invert:y}))}
      ${z(n,n.t("energy_battery_soc"),t.battery_soc,l.soc[0]??null,i,d("battery_soc"))}
      ${z(n,n.t("energy_consumption_sensor"),t.consumption,null,o,d("consumption"))}
      ${z(n,n.t("energy_tariff_sensor"),t.tariff,void 0,s,d("tariff"))}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!n.admin||!n.hass} @click=${()=>e.importPrefs()}>${n.t("energy_import_prefs")}</button></div>
    ${e.note?M(e.note):g} ${M(n.t("energy_hint"))}
  </section>`}var Ta=n=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${n.t("feature_name_energy")}</b></div>
  ${M(n.t("feature_text_energy"))}
</section>`;function Pa(n){let e=(t,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${t}" target="_blank" rel="noopener">${r} ${n.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${n.t("help_title")}</h3>
    ${M(n.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}var Ve=(n,e)=>e.map(t=>n.toScreen(t).join(",")).join(" ");var Oa=(n,e)=>k`<circle cx=${n} cy=${e} r="16" class="nf-hit" /><circle cx=${n} cy=${e} r="6" />`,qu=(n,e,t)=>k`<g class="nf-vertex" data-roof-vertex=${t}>${Oa(...n.toScreen(e))}</g>`,Yu=(n,e,t)=>k`<g class="nf-vertex" data-roof-corner=${t}>${Oa(...n.toScreen(e))}</g>`;function Xu(n,e,t,r){let{t:o,hass:i}=n.host,s=t.dormer?o("roof_dormer"):t.open?o("roof_open_short"):o(`roof_shape_${t.shape}`);return`${e.isFixed(t)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${H(i,nt(t),1)} m`}function Fo(n,e){let t=n.host.doc.settings.roof,r=t.type==="custom"?t.sections??[]:[],o=n.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=se(s),d=s.shape==="flat"&&s.points&&s.points.length>=3?s.points:null,u=Bn(r,s),h=u?se(so(u,s)):c,p=d??[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,h.w),h.at(h.u0,h.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:vt(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([$,S])=>{let[F,E]=n.toScreen(c.at($[0],$[1])),[O,N]=n.toScreen(c.at(S[0],S[1]));return k`<line x1=${F} y1=${E} x2=${O} y2=${N} />`}),[y,b]=n.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),w=l&&o&&!e.isFixed(s)?d?d.map(($,S)=>qu(n,$,`${s.id}:${S}`)):[[0,0],[1,0],[1,1],[0,1]].map(([$,S])=>{let F=$?Math.max(s.x0,s.x1):Math.min(s.x0,s.x1),E=S?Math.max(s.z0,s.z1):Math.min(s.z0,s.z1);return Yu(n,[F,E],`${s.id}:${$}:${S}`)}):g;return k`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${Ve(n,p)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${y} y=${b-14}>${Xu(n,e,s,a)}</text>
      </g>${w}`};return k`<g class="nf-roof-layer">${r.map(i)}</g>`}function Qu(n,e,t,r,o){let i=r*Math.PI/180,[s,a]=n.toScreen(t),[l,c]=n.toScreen([t[0]+Math.sin(i)*o,t[1]-Math.cos(i)*o]);return k`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Ha(n,e){let{doc:t,admin:r}=n.host,o=t.settings.roof.solar??[];if(o.length===0)return g;let i=U(t),s=a=>{let l=le(t,a,i);if(!l||l.wall&&l.wall.floorId!==n.floorId)return g;let c=a.id===e.solarId,d=g;if(c&&l.unbounded&&r&&!a.locked){let p=on(l,a),f=Math.max(...Se(l,a,!0).flatMap(_=>_.corners.map(y=>Math.hypot(y[0]-p[0],y[2]-p[1]))));d=Qu(n,a.id,p,a.rotation??0,.9+f*.5)}let u=p=>{let f;if(l.wall){let _=Math.max(.3,...p.corners.map(v=>(v[0]-l.o[0])*l.n[0]+(v[2]-l.o[2])*l.n[2])),[y,b]=[p.corners[0],p.corners[1]],x=v=>[v[0]+l.n[0]*_,v[2]+l.n[2]*_];f=[[y[0],y[2]],x(y),x(b),[b[0],b[2]]]}else f=p.corners.map(_=>[_[0],_[2]]);return k`<polygon data-cell=${p.cell} class=${p.skipped?"nf-solar-off":""} points=${Ve(n,f)} />`},h=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return k`<g data-solar=${a.id} class=${h}>${Se(l,a,c).map(u)}</g>${d}`};return k`<g class="nf-solar-layer">${o.map(s)}</g>`}function Ia(n,e){let t=n.host.doc.settings.roof.windows??[];if(t.length===0)return g;let r=new Map(U(n.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?po(s,i):null;return a?k`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${Ve(n,a.map(l=>[l[0],l[2]]))} /></g>`:g};return k`<g class="nf-roofwin-layer">${t.map(o)}</g>`}var Ju={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function Da(n,e,t){if(!e)return g;let r=e.furniture.filter(i=>he.includes(i.type)),o=i=>{let[s,a]=n.toScreen([i.x,i.z]),l=i.id===t,c=n.host.t(`furn_${i.type}`);return k`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${Ju[i.type]??"\u26A1"}</text>
      ${l?k`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return k`<g class="nf-energy-markers">${r.map(o)}</g>`}function La(n,e){let{doc:t,hass:r}=n.host;if(!(t.settings.roof.sections??[]).some(s=>ao(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>lo({settings:t.settings},e.elevation,s).map(([a,l])=>{let[c,d]=n.toScreen(a),[u,h]=n.toScreen(l);return k`<line class="nf-headroom" x1=${c} y1=${d} x2=${u} y2=${h} />
        <text class="nf-headroom-label" x=${(c+u)/2} y=${(d+h)/2-4}>${H(r,s,1)} m</text>`}));return k`${i}`}function eh(n,e,t){let[r,o]=[n+t/2,e-30];return k`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function th(n,e){let t=e.level?.length?e.level:e.ruler;if(!t?.length)return g;let r=t.map(o=>n.toScreen(o));return k`<g class="nf-bg-ruler">
    ${r.length===2?k`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>k`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function Ca(n,e,t){let r=t?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=n.toScreen([r.x,r.z]),a=r.width*n.scale,l=a*o.aspect,c=e.handlesShown;return k`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?k`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${eh(i,s,a)}`:g}
  </g>${th(n,e)}`}var Eo=n=>Math.round(n*1e3)/1e3,Ao=(n,e)=>n.width*e,Ft=(n,e)=>[n.x+n.width/2,n.z+Ao(n,e)/2];function Ba(n,e,t){let[r,o]=[n[0]-e[0],n[1]-e[1]];return[e[0]+r*Math.cos(t)-o*Math.sin(t),e[1]+r*Math.sin(t)+o*Math.cos(t)]}var Va=n=>((n+180)%360+360)%360-180;function Wa(n,e,t){return{x:Eo(n[0]-e/2),z:Eo(n[1]-t/2)}}function Na(n,e,t,r){if(Math.hypot(r[0]-t[0],r[1]-t[1])<.05)return null;let o=Math.atan2(r[1]-t[1],r[0]-t[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Ba(Ft(n,e),t,i),a=Math.round(Va((n.rotation??0)+i*180/Math.PI)*100)/100;return{...n,rotation:a,...Wa(s,n.width,Ao(n,e))}}function Ka(n,e,t,r,o){let i=Math.hypot(r[0]-t[0],r[1]-t[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=Ft(n,e),c=[t[0]+s*(a-t[0]),t[1]+s*(l-t[1])],d=n.width*s;return{...n,width:Eo(d),...Wa(c,d,Ao(n,e)*s)}}function Ga(n,e,t){let r=Ba(t,Ft(n,e),-(n.rotation??0)*Math.PI/180);return[r[0]-n.x,r[1]-n.z]}function Ua(n,e,t,r){let o=n+(t-e)*180/Math.PI;return Va(r?Math.round(o/15)*15:Math.round(o*10)/10)}var nh=2048;async function ja(n){let e=await createImageBitmap(n),t=Math.min(1,nh/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*t),r.height=Math.round(e.height*t),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var sr=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:t,api:r}=this.deps;if(t.hass){this.loading.add(e);try{let o=await r.fetchImage(t.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let t=new Image;return t.src=e,await t.decode(),t.naturalHeight/t.naturalWidth}async upload(e){let{host:t,api:r}=this.deps;if(!e||!t.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=P("img");await r.storeImage(t.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=t.floor?.rooms??[],l=a.length>0?Q(a.flatMap(d=>d.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((t,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let t=[...this.levelPoints??[],e];if(t.length<2){this.level=t;return}this.level=null,this.straighten(t[0],t[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,t){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Na(r,o.aspect,e,t):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,t=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!t||!r||r.length<2)return;let o=Ka(e,t.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var Za=.1,zo=(n,e,t)=>m`<button class="nf-btn nf-wide ${n?"nf-primary":""}" aria-pressed=${n} @click=${t}>${e}</button>`;function rh(n,e){let t=e.ruler;if(!t)return g;if(t.length<2)return M(n.t(t.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(t[1][0]-t[0][0],t[1][1]-t[0][1]),o=()=>e.applyRuler();return m`${M(n.t("bg_ruler_length_hint",{m:H(n.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${n.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=$o(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${n.t("bg_ruler_apply")}</button>`}function oh(n,e){if(!n.admin)return g;let t=n.t,r=e.level;return m`${zo(e.edit,t(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${M(t(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${zo(!!r,`\u{1F4D0} ${t(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?M(t(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${zo(!!e.ruler,`\u{1F4CF} ${t(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${rh(n,e)}`}function qa(n,e,t){let r=t.background,o=n.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${r?m`${R(n,o("x"),r.x,s=>i({x:s}))} ${R(n,o("z"),r.z,s=>i({z:s}))}
          ${R(n,o("background_width"),r.width,s=>i({width:Math.max(Za,s)}),.01,Za)}
          ${R(n,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${oh(n,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ne(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var G=n=>Math.round(n*1e3)/1e3,ih=(n,e)=>((n+e)%360+360)%360;function Ya(n,e){return{id:P("wall"),a:[G(n[0]),G(n[1])],b:[G(e[0]),G(e[1])],thickness:null}}function Xa(n,e){let t=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1])||1,r=Math.max(.1,e)/t;return[G(n.a[0]+(n.b[0]-n.a[0])*r),G(n.a[1]+(n.b[1]-n.a[1])*r)]}var Qa=(n,e)=>({height:n>=e-.005?null:Math.max(.05,n)});function Ja(n,e){return{id:P("hole"),type:"stairwell",x:G((n[0]+e[0])/2),z:G((n[1]+e[1])/2),w:G(e[0]-n[0]),d:G(e[1]-n[1]),h:.02,rotation:0,variant:null}}var el=n=>({id:P("outdoor"),type:"lawn",points:n.map(([e,t])=>[G(e),G(t)])}),tl=n=>({...n,id:P("outdoor"),points:n.points.map(([e,t])=>[G(e+.5),G(t+.5)])});function nl(n,e,t,r){let[o,i,s]=Ne(n),a=e.floors.filter(c=>c.elevation>t.elevation).sort((c,d)=>c.elevation-d.elevation)[0],l=n==="stairs"?G(a?a.elevation-t.elevation:t.height+.25):s;return{id:P("furniture"),type:n,x:G(r[0]),z:G(r[1]),rotation:0,w:o,d:i,h:l,variant:null}}var rl=n=>({...structuredClone(n),id:P("furniture"),x:G(n.x+.3),z:G(n.z+.3)}),ol=(n,e)=>ih(n,e);function il(n){let[e,t,r]=Ne("parking");return{id:P("furniture"),type:"parking",x:n.x,z:n.z,rotation:n.rotation,w:Math.max(e,G(n.w+.5)),d:Math.max(t,G(n.d+.4)),h:r,variant:null,vehicle:n.type,...n.name?{name:n.name}:{}}}function sl(n,e){let[t,r,o]=Ne(e);return{id:P("furniture"),type:e,x:n.x,z:n.z,rotation:n.rotation??0,w:t,d:r,h:o,variant:null,entity:n.entity_id,name:n.name??null,...n.locked?{locked:!0}:{}}}var al=(n,e)=>({entity_id:e,x:n.x,z:n.z,y:null,rotation:n.rotation,...n.name?{name:n.name}:{}});function ll(n,e){for(let t of n.floors)t.placements=t.placements.filter(r=>r.entity_id!==e),t.furniture=t.furniture.filter(r=>!(J(r.type)&&r.entity===e))}function cl(n,e,t,r){let o=new Set(r);for(let s of n.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(J(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>J(s.type)).map(s=>[s.x,s.z])];for(let s of ys(t,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=Ie.lamp_ceiling;e.furniture.push({id:P("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function dl(n){let[e,t]=ce(n.points);return[G(e),G(t)]}function ul(n,e,t,r){let o=Math.min(t,n)/2,i=r>0?Math.round(e/r)*r:e;return G(Math.min(n-o,Math.max(o,i)))}function hl(n,e){let t=pt[e],r=En(n)===e?{}:{width:t.width};return{type:t.type,leaves:t.leaves,sill:t.sill,height:t.height,style:t.style??null,...r}}function fl(n,e,t){let r=Q(n.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[t,t+(s-o)]:e==="z"?[i,a]=[t,t+(a-i)]:e==="w"?s=o+Math.max(.1,t):a=i+Math.max(.1,t),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[G(l),G(c)])}var ar=(n,e,t)=>Math.min(e,Math.max(n,ne(t)));function To(n,e,t){let r=n.t,o=l=>t.update(l),i=Q(e.points),s=Gi.map(l=>[l,r(`out_${l}`)]),a=Ui.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${t.lockButton}</div>
    <div class="nf-form">
      ${D(n,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${mt(e.points)?m`${R(n,r("x"),i.x0,l=>t.setRectangle("x",l))} ${R(n,r("z"),i.z0,l=>t.setRectangle("z",l))}
          ${R(n,r("width"),i.x1-i.x0,l=>t.setRectangle("w",l),.01,.1)} ${R(n,r("depth"),i.z1-i.z0,l=>t.setRectangle("d",l),.01,.1)}`:g}
      ${Lr(e.type)?R(n,r("outdoor_height"),e.height??Dr[e.type],l=>o({height:ar(.1,6,l)}),.05,.1):g}
      ${R(n,r("outdoor_offset"),e.offset??0,l=>o({offset:ar(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${R(n,r("outdoor_slope"),e.slope??0,l=>o({slope:ar(0,20,l)||null}),.05,0)}
          ${D(n,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${B(n,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?B(n,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?B(n,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${B(n,r("outdoor_cut"),!!e.cut,l=>o({cut:l||void 0}),{title:r("outdoor_cut_hint")})}
    </div>
    ${e.slope?M(r("outdoor_slope_hint")):g} ${M(r("outdoor_hint"))}
    ${n.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>t.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button></div>`:g}
  </section>`}var sh=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],ah={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function pl(n,e,t){let r=n.t,{draft:o}=e,i=u=>H(n.hass,u,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=u=>{let h=ah[u.key];h?(u.preventDefault(),t.step(h)):u.key==="Enter"&&t.close()},d=s?m`${M(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${u=>t.setLength(Number.parseFloat(u.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${sh.map(([u,h])=>m`<button class="nf-btn nf-arrow-${u}" title=${r(`dir_${u}`)} @click=${()=>t.step(u)}>${h}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((u,h)=>m`<li>${i(Math.hypot(u[0]-o[h][0],u[1]-o[h][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>t.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>t.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?M(r("measure_gap",{gap:i(l)})):g}`:M(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${d}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${R(n,r("width"),e.rectSize[0],u=>t.setRectSize([Math.max(.1,u),e.rectSize[1]]),.01,.1)}
      ${R(n,r("depth"),e.rectSize[1],u=>t.setRectSize([e.rectSize[0],Math.max(.1,u)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>t.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${M(r("measure_hint"))}
  </section>`}function Po(n,e,t){let r=n.t,o=n.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${t.lockButton}</div>
    <div class="nf-form">
      ${R(n,r("wall_length"),i,s=>t.update({b:Xa(e,s)}),.01,.1)}
      ${R(n,r("wall_thickness"),e.thickness??n.doc.settings.wall_interior,s=>t.update({thickness:ar(.02,1,s)}),.01,.02)}
      ${R(n,r("wall_height"),e.height??o,s=>t.update(Qa(s,o)),.05,.05)}
    </div>
    ${n.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button></div>`:g}
    ${M(r("free_wall_hint"))}
  </section>`}var lh={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",camera:"M3.5 7.5h11.5v9H3.5zM15 10.5l5.5-3v9l-5.5-3",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},je=n=>lh[n];function ml(n,e){let t=new Set;for(let r of n?.placements??[])T([r.x,r.z],e.points)&&t.add(r.entity_id);for(let r of n?.furniture??[])J(r.type)&&r.entity&&T([r.x,r.z],e.points)&&t.add(r.entity);return t}function gl(n,e){let t=new Map;for(let r of n.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>J(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>T([s,a],c.points));l&&l.id!==e.id&&t.set(i,l.name)}}return t}var _l=(n,e)=>(n??[]).includes(e)?(n??[]).filter(t=>t!==e):[...n??[],e];function lr(n,...e){let t=n.trim().toLowerCase();return!t||e.some(r=>(r??"").toLowerCase().includes(t))}function bl(n,e){return n.map(t=>({o:t,r:e(t.id)})).sort((t,r)=>t.r-r.r).map(({o:t})=>t)}function vl(n,e){let t=e,r=0;return{taken:n.map(i=>{let s=i.ids.slice(0,Math.max(0,t));return t-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var Oo=50;function Ho(n,e,t,r,o,i,s){let a=e.includes(t);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${n.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:_l(e,t)})}>${a?o[0]:o[1]}</button>`}function ch(n,e,t,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,d=!1,u=o)=>{let h=t.has(c),p=h?void 0:r.get(c),f=s.includes(c);return m`<div class="nf-row nf-dev-row ${d?"nf-dev-extra":""} ${f?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${h?"":"nf-muted"}" ?disabled=${!h} @click=${()=>i.select(c)}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${je(V(c))} /></svg>
        <span>${C(n.hass,c,u)}${p?m`<small class="nf-muted"> · ${n.t("devices_placed_in",{room:p})}</small>`:g}</span>
      </button>
      ${n.admin&&!d?Ho(n,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${n.admin&&!d&&!f?Ho(n,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${n.admin&&!h?Ho(n,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${n.admin?h?m`<button class="nf-link" @click=${()=>i.remove(c)}>${n.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${n.t("devices_place")}</button>`:g}
    </div>`}}function dh(n,e,t,r,o){let{hass:i}=n;if(!i)return m``;let s=d=>d>0?M(n.t("devices_narrow",{n:d})):g,a=M(n.t("devices_none")),l=e.deviceQuery;if(o==="other"){let d=cs(i,t.area_id).map(f=>({...f,ids:f.ids.filter(_=>lr(l,`${C(i,_,f.name)} ${_} ${f.name}`))})),{taken:u,left:h}=vl(d,Oo),p=d.map((f,_)=>u[_].length>0?m`<div class="nf-dev-area">${f.name}</div>${u[_].map(y=>r(y,!1,f.name))}`:g);return u.some(f=>f.length>0)?m`<div class="nf-room-list">${p}</div>${s(h)}`:a}let c=ds(i).filter(d=>lr(l,`${C(i,d)} ${d} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,Oo).map(d=>r(d))}</div>${s(c.length-Math.min(c.length,Oo))}`:a}function uh(n,e,t,r,o,i,s){let{hass:a}=n,l=a?pe(a,t.area_id).filter(b=>dt(V(b))):[];if(!t.area_id)return M(n.t("devices_none_area"));if(l.length===0)return M(n.t("devices_none"));let c=a?Tn(a,l):[],d=c.map(b=>b.primary).filter(b=>!o.has(b)),u=e.deviceQuery,h=(n.floor?.placements??[]).filter(b=>V(b.entity_id)==="light"&&(b.mount??"ceiling")==="ceiling"&&T([b.x,b.z],t.points)).length,p=m`<input class="nf-search" type="search" placeholder=${n.t("devices_search")} .value=${u} @input=${b=>e.deviceQuery=b.target.value} />`,f=b=>lr(u,C(a,b,i),b),_=b=>{let x=b.others.filter(f),v=e.isUnfolded(b.primary)||!!u.trim()&&x.length>0;return!f(b.primary)&&x.length===0?g:m`${r(b.primary)}
      ${b.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(b.primary)}>${v?n.t("devices_less"):n.t("devices_more",{n:b.others.length})}</button>`:g}
      ${v?(u.trim()?x:b.others).map(w=>r(w,!0)):g}`},y=()=>s.confirm(n.t("devices_place_all_confirm",{n:d.length}))&&s.place(d);return m`${n.admin&&h>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(t)}>${n.t("lights_spread")}</button>`:g}
    ${l.length>8?p:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${n.admin&&d.length>1?m`<button class="nf-link nf-place-all" @click=${y}>${n.t("devices_place_all_n",{n:d.length})}</button>`:g}
    ${M(n.t("devices_hint"))}`}function Io(n,e,t,r){let{hass:o}=n,i=t.area_id?o?.areas?.[t.area_id]?.name:void 0,s=ml(n.floor,t),a=ch(n,t,s,gl(n.doc,t),i,r),l=n.admin?e.deviceSource:"area",c=o?Tn(o,pe(o,t.area_id).filter(h=>dt(V(h)))).length:0,d=[["area",`${n.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",n.t("devices_src_other")],["none",n.t("devices_src_none")]],u=m`<input class="nf-search" type="search" placeholder=${n.t("devices_search")} .value=${e.deviceQuery} @input=${h=>e.deviceQuery=h.target.value} />`;return m`<section>
    <h3>${n.t("devices")}</h3>
    ${M(n.t("devices_panel_hint"))}
    ${n.admin?m`<div class="nf-seg nf-dev-source">${d.map(([h,p])=>m`<button aria-pressed=${l===h} @click=${()=>e.deviceSource=h}>${p}</button>`)}</div>`:g}
    ${l!=="area"?m`${u}${dh(n,e,t,a,l)}`:uh(n,e,t,a,s,i,r)}
  </section>`}function yl(n,e,t){let{hass:r}=n;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};t({climate:Object.values(c).every(d=>d==null)?null:c})},s=(a,l)=>{let c=hs(r,n.floor??null,{...e,climate:null},a),d=L(r,h=>te(h)&&r.states[h]?.attributes.device_class===Ur[a]),u=bl(d,h=>(gt(r,h)===e.area_id?0:1)+(jr(r,h)?0:2));return z(n,l,e.climate?.[a]??null,c[0]??null,u,h=>i(a,h))};return m`<details class="nf-points" ?open=${o}>
    <summary>${n.t("climate")}</summary>
    <div class="nf-form">${s("temperature",n.t("climate_temperature"))} ${s("humidity",n.t("climate_humidity"))} ${s("co2",n.t("climate_co2"))}</div>
    ${M(n.t("climate_hint"))}
  </details>`}function Ze(n,e){if(!Je(e))return Te(n,`furn_${e}`);let t=re(e);return t?Re(t,n?.language??navigator.language):Te(n,"pack_missing_item")}var hh=new URL(import.meta.url),fh=new URL("./nextfloor-3d.js?v=0593a48cd3b0",hh).href,wl;function xl(){return wl??=import(fh),wl}var kl=n=>n.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),ph=n=>kl(n).split(/\s+/).filter(Boolean),mh=(n,e)=>{let t=kl(e);return n.every(r=>t.includes(r))};function Do(n,e){let t=ph(e);return t.length===0?n.items:n.items.filter(r=>mh(t,`${r.label} ${r.search??""} ${r.type.replace(/[_:.]/g," ")} ${n.title}`))}var $l=(n,e)=>n.some(t=>Do(t,e).length>0);function Sl(n,e){let t=new Set(n);return t.delete(e)||t.add(e),t}var Ml="nextfloor.library",gh=["group:lights","group:living"],_h={language:"en"},cr=class{onChange;text="";openKeys;shown=null;constructor(e){this.onChange=e,this.openKeys=new Set(gh);try{let t=localStorage.getItem(Ml);t&&(this.openKeys=new Set(JSON.parse(t)))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e){return this.openKeys.has(e)}toggle(e){this.openKeys=Sl(this.openKeys,e),this.onChange();try{localStorage.setItem(Ml,JSON.stringify([...this.openKeys]))}catch{}}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,t,r){let o=t.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=Ne(e),c=(await xl()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:is[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function bh(n,e){let t=n.hass?.language??"en",r=Object.entries(ts).map(([i,s])=>({key:`group:${i}`,title:n.t(`furn_group_${i}`),items:s.map(a=>({type:a,label:n.t(`furn_${a}`),search:Te(_h,`furn_${a}`)}))})),o=e.map(i=>({key:`pack:${i.id}`,title:ye(i,t),items:i.items.map(s=>({type:ve(i.id,s.id),label:Re(s,t),search:Object.values(s.name).join(" ")}))}));return[...r,...o]}function vh(n,e,t,r){let o=s=>{e.showPreview(t.type,s.currentTarget,r.packs)},i=J(t.type)?"light":et(t.type)?"switch":null;return m`<button
    class="nf-btn ${i?"nf-lib-electric":""}"
    title=${i?n.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t.label}
    @click=${()=>r.add(t.type)}
    @mouseenter=${o}
    @focus=${o}
    @mouseleave=${()=>e.hidePreview()}
    @blur=${()=>e.hidePreview()}
  >
    ${t.label}
    ${i?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${je(i)} /></svg>`:g}
  </button>`}function yh(n,e,t,r){let o=e.query.trim(),i=Do(t,o);if(o&&i.length===0)return g;let s=!!o||e.isOpen(t.key);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${s} @click=${()=>e.toggle(t.key)}>
      <span class="nf-lib-caret">${s?"\u25BE":"\u25B8"}</span>${t.title} <span class="nf-lib-count">${i.length}</span>
    </button>
    ${s?m`<div class="nf-library">${i.map(a=>vh(n,e,a,r))}</div>`:g}`}function Rl(n,e,t,r){let o=n.t,i=bh(n,r.packs),s=e.query.trim();return m`<section>
      <h3>${o("furniture_add")}</h3>
      <p class="nf-sub">${t?o("furniture_into",{room:t}):o("furniture_pick_room")}</p>
      <input
        class="nf-search"
        type="search"
        placeholder=${o("furniture_search")}
        .value=${e.query}
        @input=${a=>e.query=a.target.value}
        @keydown=${a=>a.key==="Escape"&&(e.query="")}
      />
      ${s&&!$l(i,s)?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${i.map(a=>yh(n,e,a,r))}
    </section>
    <div class="nf-ext-teaser">
      <b>${o("ext_teaser_title")}</b>
      <span class="nf-sub">${o("ext_teaser_text")}</span>
      <button class="nf-btn nf-primary" @click=${()=>r.openExtensions()}>${o("ext_open")}</button>
    </div>`}function Fl(n,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${Ze(n.hass,e.type)}</b>
  </div>`:g}var dr=(n,e)=>H(n.host.hass,e,2);function wh(n,e){let[t,r]=[n.toScreen(e.start),n.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return k`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${t[0]} y1=${t[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(t[0]+r[0])/2} y=${(t[1]+r[1])/2-10}>${dr(n,s)} m</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return k`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(t[0],r[0])} y=${Math.min(t[1],r[1])} width=${Math.abs(r[0]-t[0])} height=${Math.abs(r[1]-t[1])} />
    <text class="nf-dim" x=${(t[0]+r[0])/2} y=${Math.min(t[1],r[1])-8}>${dr(n,o)} × ${dr(n,i)} m</text>
  </g>`}function xh(n,e,t,r){let o=[...e,...t?[t]:[]].map(d=>n.toScreen(d)),i=e.length>=3,s=r?e.slice(1).map((d,u)=>{let[h,p]=[n.toScreen(e[u]),n.toScreen(d)];return k`<text class="nf-dim" x=${(h[0]+p[0])/2} y=${(h[1]+p[1])/2-6}>${dr(n,Math.hypot(d[0]-e[u][0],d[1]-e[u][1]))} m</text>`}):g,a=e.map((d,u)=>{let[h,p]=n.toScreen(d),f=u===0&&i;return k`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${h} cy=${p} r=${f?9:5} />`}),[l,c]=t?n.toScreen(t):[0,0];return k`<g pointer-events="none">
    ${o.length>1?k`<polyline class="nf-draft" points=${o.map(d=>d.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${t?k`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function El(n,e,t){let r=e.x!==void 0?n.toScreen([e.x,0])[0]:null,o=e.z!==void 0?n.toScreen([0,e.z])[1]:null,[i,s]=e.point?n.toScreen(e.point):[0,0];return k`<g pointer-events="none">
    ${r!==null?k`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${t.h} />`:g}
    ${o!==null?k`<line class="nf-guide" x1="0" y1=${o} x2=${t.w} y2=${o} />`:g}
    ${e.point?k`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function Al(n,e,t,r,o){return e?wh(n,e):t!=="polygon"&&t!=="measure"?g:xh(n,r,o,t==="measure")}var q=(n,e,t,r,o="")=>k`<rect class=${o} x=${Math.min(n,t)} y=${Math.min(e,r)} width=${Math.abs(t-n)} height=${Math.abs(r-e)} />`,j=(n,e,t,r,o="")=>k`<line class=${o} x1=${n} y1=${e} x2=${t} y2=${r} />`,kh=(n,e="")=>k`<polygon class=${e} points=${n.map(t=>t.join(",")).join(" ")} />`,X=(n,e,t,r="")=>k`<circle class=${r} cx=${n} cy=${e} r=${t} />`,Lo=(n,e,t,r,o="")=>k`<ellipse class=${o} cx=${n} cy=${e} rx=${t} ry=${r} />`;function Co(n,e,t){let r=[];for(let o=1;o<t;o++){let i=-n/2+n/t*o;r.push(j(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function zl(n,e,t,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,n*.12):0,s=[q(-n/2,-e/2,n/2,-e/2+o,"nf-sym-fill")];r&&s.push(q(-n/2,-e/2,-n/2+i,e/2,"nf-sym-fill"),q(n/2-i,-e/2,n/2,e/2,"nf-sym-fill"));let a=n-2*i;for(let l=1;l<t;l++){let c=-n/2+i+a/t*l;s.push(j(c,-e/2+o,c,e/2-.02))}return s}function Tl(n,e,t){switch(n){case"sofa":return zl(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return zl(e,t,1,!0);case"bench":return[q(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill")];case"corner_bench":{let r=Math.min(.5,t*.4);return[q(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill"),q(-e/2,-t/2,-e/2+.08,t/2,"nf-sym-fill"),j(-e/2+r,-t/2+r,e/2,-t/2+r),j(-e/2+r,-t/2+r,-e/2+r,t/2)]}case"chair":return[q(-e/2,-t/2,e/2,-t/2+.06,"nf-sym-fill")];case"office_chair":return[X(0,.03,Math.min(e,t)*.36),q(-e*.35,-t/2+.02,e*.35,-t/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[X(0,0,Math.min(e,t)*.42)];case"stool":return[q(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let r=[q(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return n==="desk"&&r.push(j(-.3,-t/2+.1,.3,-t/2+.1,"nf-sym-strong")),r}case"bed":case"bunk_bed":{let r=e>1.2?2:1,o=(e-.2)/r,i=[q(-e/2,-t/2,e/2,-t/2+.07,"nf-sym-fill"),j(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<r;s++)i.push(q(-e/2+.13+o*s,-t/2+.12,-e/2+.07+o*(s+1),-t/2+.12+Math.min(.4,t*.18)));return i}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Co(e,t,n==="nightstand"||n==="tall_cabinet"||n==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[q(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),...Co(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[j(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[j(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"nf-sym-strong")];case"stove":{let r=Math.min(e,t)*.14;return[X(-e*.22,-t*.2,r),X(e*.22,-t*.2,r*.8),X(-e*.22,t*.2,r*.8),X(e*.22,t*.2,r)]}case"sink":{let r=Math.min(.5,e-.2);return[q(-r/2,-t/2+.1,r/2,t/2-.08),X(0,-t/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[j(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[X(0,.05,Math.min(e,t)*.3),j(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[q(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),X(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[j(-e/2,-t/2,e/2,t/2),j(e/2,-t/2,-e/2,t/2),X(0,0,.04)];case"wc":return[q(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"nf-sym-fill"),Lo(0,t*.1,e*.36,t*.3)];case"washbasin":return[Lo(0,.03,e*.34,t*.3)];case"tv_board":return[j(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"nf-sym-strong"),...Co(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[j(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[X(0,0,Math.min(e,t)*.45,"nf-sym-fill"),X(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[X(0,0,Math.min(e,t)*.5,"nf-sym-fill"),X(0,0,Math.min(e,t)*1.6)];case"parking":return[q(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),j(-e*.15,t/2-.5,0,t/2-.22,"nf-sym-strong"),j(0,t/2-.22,e*.15,t/2-.5,"nf-sym-strong")];case"robot_vacuum":return[q(-e*.45,-t/2,e*.45,-t/2+t*.3,"nf-sym-fill"),X(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let r=[],o=Math.max(3,Math.round(e/.1));for(let i=1;i<o;i++)r.push(j(-e/2+e/o*i,-t/2,-e/2+e/o*i,t/2));return r}case"lamp_panel":return[q(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let r=Math.min(e,t)/2,o=[X(0,0,r*.9,"nf-sym-fill"),X(0,0,r*.3)];if(n==="lamp_ceiling"||n==="lamp_pendant")for(let i=0;i<8;i++){let s=i/8*Math.PI*2;o.push(j(Math.cos(s)*r*1.05,Math.sin(s)*r*1.05,Math.cos(s)*r*1.35,Math.sin(s)*r*1.35))}return o}case"lamp_wall":return[q(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),Lo(0,.01,e*.4,t*.4)];case"led_strip":return[j(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[X(0,0,Math.min(e,t)*.46),X(0,0,Math.min(e,t)*.25)];case"rug":return[q(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let r=Math.max(3,Math.round(t/.26)),o=[];for(let i=1;i<r;i++)o.push(j(-e/2,t/2-t/r*i,e/2,t/2-t/r*i));return o.push(j(0,t/2-.1,0,-t/2+.25,"nf-sym-strong"),j(-.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong"),j(.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong")),o}default:{let r=re(n);return r?$h(r,e,t):g}}}function $h(n,e,t){return n.symbol?.length?n.symbol.map(r=>r.shape==="rect"?q((r.x-r.w/2)*e,(r.z-r.d/2)*t,(r.x+r.w/2)*e,(r.z+r.d/2)*t,r.fill?"nf-sym-fill":""):r.shape==="circle"?X(r.x*e,r.z*t,r.r*Math.min(e,t)):j(r.x1*e,r.z1*t,r.x2*e,r.z2*t)):n.parts.filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?kh([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*t]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*t])]):r.shape==="cyl"&&(r.axis??"y")==="y"?X(r.x*e,r.z*t,Math.min(r.w*e,r.d*t)/2):q((r.x-r.w/2)*e,(r.z-r.d/2)*t,(r.x+r.w/2)*e,(r.z+r.d/2)*t))}var ur=Math.PI/180,Pl=(n,e,t,r)=>{let[o,i]=r,s=k`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=k`<line x1=${t[0]} y1=${t[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return n==="data-rotate"?k`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:k`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function Sh(n,e){let t=e.rotation*ur;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=n.toScreen([e.x+r*e.w*Math.cos(t)/2-o*e.d*Math.sin(t)/2,e.z+r*e.w*Math.sin(t)/2+o*e.d*Math.cos(t)/2]);return k`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}function Ol(n,e,t){let{host:r,scale:o}=n,i=s=>{let a=s.id===t,l=a&&r.admin&&!s.locked,[c,d]=n.toScreen([s.x,s.z]),u=s.rotation*ur,h=Math.min(s.w,s.d)*o>44,p=J(s.type)&&!!s.entity&&s.entity!=="none"&&r.hass?.states[s.entity]?.state==="on",f=he.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${p?" nf-furn-lit":""}${f?" nf-energy-item":""}`,y=s.d/2+Math.max(.3,26/o),b=n.toScreen([s.x-Math.sin(u)*y,s.z+Math.cos(u)*y]),x=n.toScreen([s.x-Math.sin(u)*(s.d/2),s.z+Math.cos(u)*(s.d/2)]),[v,w]=n.toScreen([s.x+Math.sin(u)*(s.d/2+18/o),s.z-Math.cos(u)*(s.d/2+18/o)]);return k`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${d}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${Tl(s.type,s.w,s.d)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${h?k`<text x=${c} y=${d+4}>${Ze(r.hass,s.type)}</text>`:g}
      </g>
      ${l?Sh(n,s):g}
      ${a?k`<text class="nf-dim" x=${v} y=${w+4}>${H(r.hass,s.w,2)} × ${H(r.hass,s.d,2)} m</text>`:g}
      ${a&&s.locked?k`<text class="nf-lock" x=${b[0]} y=${b[1]+5}>🔒</text>`:g}
      ${l?Pl("data-rotate",s.id,x,b):g}`};return k`<g>${e.furniture.map(i)}</g>`}function Mh(n,e,t){let r=e.mount==="ceiling",o=e.fov??(r?360:90),i=e.reach??(r?3:4.5),s=(e.rotation??0)*ur,a=(b,x)=>n.toScreen([e.x-Math.sin(s+b)*x,e.z+Math.cos(s+b)*x]),[l,c]=n.toScreen([e.x,e.z]),d=Math.min(o,359.9)*ur/2,[u,h,p]=[a(-d,i),a(d,i),a(0,i)],f=i*n.scale,_=o>=360?k`<circle cx=${l} cy=${c} r=${f} />`:k`<path d=${`M${l} ${c}L${u[0]} ${u[1]}A${f} ${f} 0 ${d>Math.PI/2?1:0} 1 ${h[0]} ${h[1]}Z`} />`,y=t&&n.host.admin&&!e.locked?Pl("data-aim",e.entity_id,[l,c],p):g;return k`<g class="nf-wedge ${t?"nf-wedge-sel":""}">${_}${y}</g>`}function Hl(n,e,t){let{host:r}=n,o=i=>{let s=V(i.entity_id);if(!s)return g;let[a,l]=n.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",d=i.entity_id===t;return k`${s==="camera"?Mh(n,i,d):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${d?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${C(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        <path d=${je(s)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${d&&i.locked?k`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return k`<g>${e.placements.map(o)}</g>`}function Rh(n,e,t,r){let o=De(e,t.rooms,t.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=Dn(r,e,o),l=bt(i,s,e.offset-e.width/2),c=bt(i,s,e.offset+e.width/2),d=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],u=ae(i.points)>=0?1:-1,h=[-d[1]*u,d[0]*u],p=[.06,.06];return a&&(p=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:h,direction:u,across:p,exterior:a?.wall.exterior??!1,at:(f,_)=>n.toScreen([f[0]+h[0]*_,f[1]+h[1]*_])}}var qe=(n,e,t="")=>k`<line class=${t} x1=${n[0]} y1=${n[1]} x2=${e[0]} y2=${e[1]} />`;function Fh(n,e){let t=n.across[0]-.04,r=n.across[0]+Math.min(2,e.height),[o,i,s,a]=[n.at(n.p0,t),n.at(n.p1,t),n.at(n.p0,r),n.at(n.p1,r)];return k`${qe(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function Eh(n,e,t){let r=t.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=t.hinge==="left"==e.direction>0,a=ft(t,e.exterior),l=t.leaves===2,[c,d]=[e.p0,e.p1],u=[],h=os(t.width,a,s,t);if(h){let x=v=>v<=.02?e.p0:v>=t.width-.02?e.p1:bt(e.room,e.edge,t.offset-t.width/2+v);[c,d]=[x(h.x0),x(h.x1)],u=h.panels.map(([v,w])=>[x(v),x(w)])}let p=[(c[0]+d[0])/2,(c[1]+d[1])/2],f=(l?.5:1)*Math.hypot(d[0]-c[0],d[1]-c[1]),_=u.map(([x,v])=>k`${qe(e.at(x,i+.035),e.at(v,i+.035),"nf-open-pane")}${qe(e.at(x,i-.035),e.at(v,i-.035),"nf-open-pane")}`),y=(x,v)=>{let[w,$]=e.at(x,o),[S,F]=e.at(v,o),E=e.at(x,o+(r?-f:f)),O=f*n.scale,N=(E[0]-w)*(F-$)-(E[1]-$)*(S-w)>0?1:0;return k`<path d="M${w} ${$}L${E[0]} ${E[1]}A${O} ${O} 0 0 ${N} ${S} ${F}" />`},b;return a==="passage"?b=qe(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?b=qe(e.at(c,o),e.at(d,o)):l?b=k`${y(c,p)}${y(d,p)}`:b=s?y(c,d):y(d,c),k`${_}${b}`}function Ah(n,e){let t=(n.across[0]-n.across[1])/2,r=e.leaves===2?qe(n.at([(n.p0[0]+n.p1[0])/2,(n.p0[1]+n.p1[1])/2],n.across[0]),n.at([(n.p0[0]+n.p1[0])/2,(n.p0[1]+n.p1[1])/2],-n.across[1])):g;return k`${qe(n.at(n.p0,t+.035),n.at(n.p1,t+.035))}${qe(n.at(n.p0,t-.035),n.at(n.p1,t-.035))}${r}`}function Il(n,e,t,r){let o=i=>{let s=Rh(n,i,e,t);if(!s)return g;let a=[s.at(s.p0,s.across[0]+.01),s.at(s.p1,s.across[0]+.01),s.at(s.p1,-s.across[1]-.01),s.at(s.p0,-s.across[1]-.01)],l=i.type==="door"&&Vr(ft(i,s.exterior)),c=`nf-open nf-open-${i.type}${l?" nf-open-front":""}${i.id===r?" nf-open-sel":""}`,d=i.type==="garage"?Fh(s,i):i.type==="door"?Eh(n,s,i):Ah(s,i);return k`<g data-opening=${i.id} class=${c}><polygon class="nf-open-gap" points=${a.map(u=>u.join(",")).join(" ")} />${d}</g>`};return k`<g>${e.openings.map(o)}</g>`}var hr=(n,e,t=6)=>k`<circle cx=${n} cy=${e} r="16" class="nf-hit" /><circle cx=${n} cy=${e} r=${t} />`;function Dl(n,e){let{scale:t}=n,r=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,i=n.toWorld(0,0),s=n.toWorld(e.w,e.h),a=[],l=(u,h)=>{for(let p=Math.ceil(i[0]/u)*u;p<=s[0];p+=u){let f=n.toScreen([p,0])[0];a.push(k`<line class=${h} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let p=Math.ceil(i[1]/u)*u;p<=s[1];p+=u){let f=n.toScreen([0,p])[1];a.push(k`<line class=${h} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,d]=n.toScreen([0,0]);return a.push(k`<circle class="nf-origin" cx=${c} cy=${d} r="3" />`),k`<g pointer-events="none">${a}</g>`}function Ll(n){let e=n.host.doc.floors,t=e.findIndex(o=>o.id===n.floorId),r=t>0?e[t-1]:void 0;return r?k`<g pointer-events="none">${r.rooms.map(o=>k`<polygon class="nf-ghost" points=${Ve(n,o.points)} />`)}</g>`:g}function Cl(n,e){let t=n.host.floor?.height??2.5;return k`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<t-.01;return k`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${Ve(n,r.footprint)} />`})}</g>`}function Bl(n,e,t){let r=o=>{let[i,s]=n.toScreen(ce(o.points)),a=Q(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*n.scale>40;return k`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===t?" nf-out-sel":""}`}>
      <polygon points=${Ve(n,o.points)} />
      ${l?k`<text x=${i} y=${s+4}>${n.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return k`<g>${e.outdoor.map(r)}</g>`}function Vl(n,e,t){let{host:r}=n;return!e||!r.admin||t!=="select"||r.doc.settings.lock_plan?g:k`${e.points.map((o,i)=>k`<g class="nf-vertex" data-out-vertex=${`${e.id}:${i}`}>${hr(...n.toScreen(o))}</g>`)}`}function Wl(n,e,t,r){let o=e.rooms.find(s=>s.id===t),i=o&&r!==null&&r<o.points.length?[n.toScreen(o.points[r]),n.toScreen(o.points[(r+1)%o.points.length])]:null;return k`<g>${e.rooms.map(s=>k`<polygon data-room=${s.id} class=${s.id===t?"nf-room nf-room-sel":"nf-room"} points=${Ve(n,s.points)} />`)}</g>
    ${i?k`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=n.toScreen(ce(s.points));return k`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${n.host.t("area_m2",{a:H(n.host.hass,fe(s.points),1)})}</text>`})}</g>`}function Nl(n,e){let t=n.host.doc.energy?.meter;if(!t||t.floor_id!==e.id)return g;let[r,o]=n.toScreen([t.x,t.z]);return k`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function Kl(n,e,t){let{host:r}=n,o=i=>{let[s,a]=[n.toScreen(i.a),n.toScreen(i.b)],l=i.id===t,c=l&&r.admin&&!Mn(i,!0,r.doc.settings);return k`<g data-free-wall=${i.id} class=${`nf-free-wall${l?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
      </g>
      ${c?k`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${hr(s[0],s[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${hr(a[0],a[1])}</g>`:g}`};return k`<g>${(e.walls??[]).map(o)}</g>`}function Gl(n,e){let t=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=t.length)return[];let[s,a]=[t[i],t[(i+1)%t.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,d]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(u=>{let[h,p]=n.toScreen([s[0]+c*u,s[1]+d*u]);return k`<line class="nf-split-mark" x1=${h-d*7} y1=${p+c*7} x2=${h+d*7} y2=${p-c*7} />`})});return k`${r}`}function Ul(n,e,t){let r=e.points,[o,i]=n.toScreen(ce(r)),s=(l,c,d)=>{let[[u,h],[p,f]]=[n.toScreen(l),n.toScreen(c)],[_,y]=[(u+p)/2,(h+f)/2],b=Math.hypot(p-u,f-h),[x,v]=[-(f-h),p-u],w=Math.hypot(x,v)||1;return[x,v]=[x/w,v/w],x*(_-o)+v*(y-i)<0&&([x,v]=[-x,-v]),k`${b>50?k`<text class="nf-dim" x=${_+x*16} y=${y+v*16+4}>${H(n.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]),2)} m</text>`:g}
      ${b>36?k`<g data-mid=${d} class="nf-mid"><circle cx=${_} cy=${y} r="14" class="nf-hit" /><circle cx=${_} cy=${y} r="6" /><path d="M${_-3} ${y}h6M${_} ${y-3}v6" /></g>`:g}`},a=(l,c)=>{let[d,u]=n.toScreen(l);return k`<g data-vertex=${c} class=${c===t?"nf-vertex nf-vertex-sel":"nf-vertex"}>${hr(d,u)}</g><text class="nf-vertex-no" x=${d+9} y=${u-9}>${c+1}</text>`};return k`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}var zh=n=>Math.round(n*1e3)/1e3,jl=n=>Math.round(n*100)/100;function fr(n,e){let t=[...n??[]].slice(0,e);for(;t.length<e;)t.push(null);return t}var Bo=n=>n.every(e=>e===null);function mn(n,e){let[t,r]=[n.points[e],n.points[(e+1)%n.points.length]];return Math.hypot(r[0]-t[0],r[1]-t[1])}function Zl(n,e,t){let r=fr(n.wall_heights,n.points.length);r[e]=t,n.wall_heights=Bo(r)?void 0:r}function ql(n,e,t,r,o){let i=fr(n.wall_heights,n.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[t]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,n.wall_heights=Bo(i)?void 0:i}function Yl(n,e,t,r){let o=mn(n,e),i=t===void 0?0:r[t],s=t===void 0?o:r[t+1]??o;if(s-i<.4)return!1;let a=jl((i+s)/2),l=fr(n.wall_splits,n.points.length);l[e]=[...l[e]??[],a].sort((d,u)=>d-u),n.wall_splits=l;let c=n.wall_heights?.[e];return Array.isArray(c)&&c.splice((t??0)+1,0,c[t??0]??null),!0}function Xl(n,e,t,r,o){let i=mn(n,e),s=o.filter(d=>Math.abs(d-t)>.001&&d>0),a=Math.max(.1,Math.min(i-.1,jl(r)));s.some(d=>Math.abs(d-a)<.1)&&(a=t);let l=n.wall_splits?.[e];if(!l)return;let c=l.findIndex(d=>Math.abs(d-t)<.001);c>=0&&(l[c]=a),l.sort((d,u)=>d-u)}function Ql(n,e,t,r){let o=n.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-t)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(n.wall_splits=void 0);let s=n.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(n.wall_heights[e]=s[0]??null))}function Jl(n,e,t){let r=fr(n.wall_thickness,n.points.length);r[e]=t,n.wall_thickness=Bo(r)?void 0:r}function ec(n,e){let t=Math.min(1.5,Math.max(.02,zh(n)));return Math.abs(t-e)<5e-4?null:t}var Th=.005;function tc(n,e,t){let r=n.t,o=n.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=n.doc.settings,l=c=>{let d=e.wall_heights?.[c]??null,u=t.partsOf(e,c);return(u.length>1?u.map((p,f)=>f):[void 0]).map(p=>{let f=Array.isArray(d)?d[p??0]??null:d,_=p===void 0?mn(e,c):(u[p+1]??mn(e,c))-u[p],y=S=>t.setHeight(e,c,p,S),b=t.isOuter(e,c)?s:a,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${p===void 0?"":` \xB7 ${r("wall_part",{n:p+1})}`}`,v=p!==void 0&&p>0&&(e.wall_splits?.[c]??[]).some(S=>Math.abs(S-u[p])<.001),w=()=>t.light(c),$=()=>t.light(null);return m`<div class="nf-edge-height${c===t.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${w} @mouseleave=${$} @focusin=${w} @focusout=${$}>
        <span><b>${x}</b><br /><span class="nf-muted">${H(n.hass,_,2)} m</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:R(n,r("wall_height"),f??o,S=>y(S>=o-Th?null:Math.max(.05,S)),.05,.05)}
        ${n.admin&&f!==null?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>y(null)}>↥</button>`:g}
        ${n.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>y(0)}>${r("wall_none")}</button>`:g}
        ${n.admin&&_>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>t.cut(e,c,p)}>✂</button>`:g}
        ${(p===void 0||p===0)&&f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${R(n,r("edge_thickness"),e.wall_thickness?.[c]??b,S=>t.setThickness(e,c,ec(S,b)),.01,.02)}
              ${n.admin&&e.wall_thickness?.[c]!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>t.setThickness(e,c,null)}>↺</button>`:g}</span
            >`:g}
        ${v?m`<span class="nf-wide nf-split-row"
              >${R(n,r("wall_split_at"),u[p],S=>t.moveCut(e,c,u[p],S),.05,.1)}
              ${n.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>t.join(e,c,u[p],p)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,d)=>l(d))} ${M(r("room_wall_hint"))}
  </div>`}var Ph=[["person",/person|people|human|pedestrian/],["car",/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/],["pet",/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/]];function nc(n,e){let t=String(n.states[e]?.attributes.friendly_name??""),r=`${e} ${t}`.toLowerCase().replace(/[_.-]/g," ");return Ph.find(([,o])=>o.test(r))?.[0]??"motion"}function rc(n,e){let t=n.entities??{},r=t[e]?.device_id;if(!r)return[];let o=new Set(["motion","occupancy","presence"]);return Object.values(t).filter(i=>i.device_id===r&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>o.has(String(n.states[i]?.attributes.device_class)))}var Oh=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function Hh(n,e,t){let r=V(e),o=n.hass?.language??"en",i=[...Rn.map(a=>({type:a,label:n.t(`furn_${a}`)})),...t.flatMap(a=>a.items.map(l=>({type:ve(a.id,l.id),label:`${Re(l,o)} \xB7 ${ye(a,o)}`})))],s=a=>r==="light"?J(a):r==="climate"?a==="radiator":e.startsWith("vacuum.")?a==="robot_vacuum"||Je(a)&&a.endsWith(":robot_vacuum"):r==="media"?On(a)||et(a)&&Oh.test(a):et(a)&&!J(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function Ih(n,e){let{hass:t}=n;if(!t)return g;let r=rc(t,e),o=[...new Set(r.map(s=>nc(t,s)))],i=r.length>0?n.t("camera_detect_found",{kinds:o.map(s=>n.t(`detect_${s}`)).join(", "),n:r.length}):n.t("camera_detect_none");return M(i,"nf-wide")}function Dh(n,e,t){let r=n.t,o=e.mount==="ceiling",i=s=>t.update(s);return m`${R(n,r("camera_fov"),e.fov??(o?360:90),s=>i({fov:Math.min(360,Math.max(10,s))}),5,10)}
    ${R(n,r("camera_reach"),e.reach??(o?3:4.5),s=>i({reach:Math.min(50,Math.max(.5,s))}),.5,.5)}
    ${R(n,r("camera_tilt"),e.tilt??(o?65:20),s=>i({tilt:Math.min(90,Math.max(0,s))}),5,0)}
    ${B(n,r("camera_cone"),e.cone!==!1,s=>i({cone:s?null:!1}))}
    ${M(r("camera_aim_hint"),"nf-wide")} ${Ih(n,e.entity_id)}`}function Lh(n,e,t){if(!n.admin)return g;let r=Hh(n,e.entity_id,t.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${n.t("as_furniture_hint")}
    >${n.t("as_furniture")}
    <select @change=${o=>o.target.value&&t.asFurniture(e,o.target.value)}>
      <option value="" selected>${n.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function Vo(n,e,t){let r=n.t,o=V(e.entity_id),i=o==="light",s=o==="camera",a=e.mount??"ceiling",l=o?Gt(o,n.floor?.height??2.5,i?a:null):1,c=p=>t.update(p),d=p=>c({mount:p,y:null}),u=["ceiling","floor","table","wall"].map(p=>[p,r(`lamp_${p}`)]),h=[["wall",r("camera_mount_wall")],["ceiling",r("camera_mount_ceiling")]];return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${t.lockButton}</div>
    <p class="nf-dev-title">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?je(o):""} /></svg>
      ${C(n.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${D(n,r("lamp_mount"),a,u,d,{wide:!0})}${Qn(n,e.glow_scale,p=>c({glow_scale:p}))}`:g}
      ${s?D(n,r("camera_mount"),e.mount??"wall",h,d,{wide:!0}):g}
      ${R(n,r("x"),e.x,p=>c({x:p}))} ${R(n,r("z"),e.z,p=>c({z:p}))}
      ${R(n,r("marker_height"),e.y??l,p=>c({y:Math.max(0,p)}),.05,0)}
      ${R(n,r("rotation"),e.rotation??0,p=>c({rotation:(p%360+360)%360}),1)}
      ${s?Dh(n,e,t):g}
      ${o&&Ai.has(o)?B(n,r("device_confirm"),!!e.confirm,p=>c({confirm:p}),{title:r("device_confirm_hint")}):g}
      ${Xn(n,e.marker??null,p=>c({marker:p}))}
      ${oe(n,r("device_name"),e.name??"",p=>c({name:p||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:C(n.hass,e.entity_id)})}
      ${e.name?B(n,r("show_name"),!!e.show_name,p=>c({show_name:p||void 0})):g}
      ${Mt(n,e.icon,p=>c({icon:p}))}
    </div>
    ${n.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>t.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>c({y:null})}>${r("height_auto")}</button>`:g}
          ${Lh(n,e,t)}
          <button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var Ch=n=>n.map((e,t)=>[e,n[(t+1)%n.length]]);function Bh(n,e,t){let r=W(t,e),o=Y(r,r),i=o?Math.max(0,Math.min(1,Y(W(n,e),r)/o)):0;return de(W(n,[e[0]+r[0]*i,e[1]+r[1]*i]))}function oc(n,e,t=.03){return n.every(r=>T(r,e)||Ch(e).some(([o,i])=>Bh(r,o,i)<=t))}var Vh=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,Wo=n=>n==="none"?null:n;function No(n,e,t){let r=n.t,o=L(n.hass,l=>Vh.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${z(n,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>t.update({state_entity:Wo(l)}))}
    ${i?z(n,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>t.update({state_entity2:Wo(l)})):g}
    ${s?D(n,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>t.update({state_split:l})):g}
    ${M(r("furn_state_hint"),"nf-wide")}`}function Wh(n,e){let r=jt(n.type)&&(!Je(n.type)||Hi(n.type));return J(n.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:n.type==="radiator"?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:n.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(o)||zi(e?.states[o]),label:"furn_entity"}}function ic(n,e,t){if(!n.hass)return null;let r=structuredClone(n.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[t]=null);return tt(n.hass,r).get(e.id)?.[t]??null}var Nh=n=>n==="meter"?"energy_grid":n==="inverter"?"energy_solar_sensor":n==="home_battery"?"energy_battery_sensor":"furn_power",Et=(...n)=>m`<div class="nf-form nf-links">${n}</div>`;function sc(n,e,t){let{hass:r}=n;if(!r)return g;let o=n.t,i=J(e.type),s=Wh(e,r),a=L(r,f=>$t(r,f)),l=f=>_=>t.update({[f]:Wo(_)}),c=f=>L(r,f),d=(n.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),u=!!e.entity&&e.entity!=="none",h=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],p=i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":jt(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${Et(e.type==="grid_point"?M(o("grid_point_hint"),"nf-wide"):z(n,o(s.label),e.entity??null,ic(n,e,"entity"),c(s.accept),f=>t.update({entity:f})),!i&&!he.includes(e.type)&&!On(e.type)?No(n,e,t):g,i&&u?m`${z(n,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),l("color_entity"))}${M(o("furn_color_entity_hint"),"nf-wide")}`:g,i?Qn(n,e.glow_scale,f=>t.update({glow_scale:f})):g,i||e.type==="grid_point"?g:z(n,o(Nh(e.type)),e.power??null,ic(n,e,"power"),a,f=>t.update({power:f})))}
    ${e.type==="meter"?Et(z(n,o("furn_export"),e.export??null,void 0,a,l("export")),M(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(n.doc.settings.roof.solar??[]).length>0?M(d.length>0?o("inverter_strings",{names:d.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?Et(z(n,o("furn_soc"),e.soc??null,void 0,c(f=>te(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),l("soc")),z(n,o("furn_charge"),e.charge??null,void 0,a,l("charge")),M(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?Et(z(n,o("furn_wallbox_status"),e.status??null,void 0,c(f=>Zn(f)||te(f)),l("status"))):g}
    ${!i||e.entity?m`${B(n,o("device_confirm"),!!e.confirm,f=>t.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${Xn(n,e.marker??null,f=>t.update({marker:f}))}${Mt(n,e.icon,f=>t.update({icon:f}))}</div>`:g}
    ${e.type==="robot_vacuum"?Et(z(n,o("furn_robot_room"),e.room_sensor??null,ws(r,tt(r,n.doc.floors).get(e.id)?.entity??null,null),c(te),f=>t.update({room_sensor:f}))):g}
    ${e.type==="fridge_smart"?m`${Et(z(n,o("furn_door_left"),e.door_left??null,void 0,h,f=>t.update({door_left:f})),z(n,o("furn_door_right"),e.door_right??null,void 0,h,f=>t.update({door_right:f})))}
        ${M(o("fridge_hint"))}`:g}
    ${M(o(p))}`}var Kh=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,Gh=/^(sensor|input_select|select|input_text)\./,Uh=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,jh=(n,e)=>n.flatMap(t=>t.items.filter(r=>r.vehicle).map(r=>({id:ve(t.id,r.id),label:`${Re(r,e)} \xB7 ${ye(t,e)}`})));function ac(n,e){return e.startsWith("device_tracker.")?n.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function lc(n,e,t,r){return m`<select ?disabled=${!n.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!t}>${n.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===t}>${o.label}</option>`)}
  </select>`}function Zh(n,e,t,r){let o=n.t,i=e.type_entity?n.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=d=>r.update({types:d}),c=(d,u)=>l(a.map((h,p)=>p===d?{...h,...u}:h));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((d,u)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${d.state} ?disabled=${!n.admin} @change=${h=>c(u,{state:h.target.value})} />
        ${lc(n,t,d.vehicle,h=>c(u,{vehicle:h??""}))}
        <button class="nf-btn" ?disabled=${!n.admin} title=${o("delete")} @click=${()=>l(a.filter((h,p)=>p!==u))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(d=>m`<option value=${d}></option>`)}</datalist>
    ${n.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:t[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function cc(n,e,t,r){let o=n.t,i=jh(t,n.hass?.language??"en"),s=L(n.hass,f=>Kh.test(f)).sort((f,_)=>ac(n,f.id)-ac(n,_.id)),a=L(n.hass,f=>Gh.test(f)),l=e.car??{},c=n.floor,d=c?.rooms.find(f=>f.points.length>=3&&T([e.x,e.z],f.points)),u=e.vehicle?re(e.vehicle):void 0,h=u?u.size[2]*(e.scale??1):0,p=!!d&&!!c&&h>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${z(n,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${lc(n,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?g:M(o("parking_no_pack"),"nf-wide")}
      ${R(n,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${z(n,o("parking_type_entity"),e.type_entity??null,void 0,a,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?Zh(n,e,i,r):g}
    </div>
    ${p?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:H(n.hass,h,2),room:H(n.hass,c.height,2)})}</p>`:g}
    ${M(o("parking_hint"))}
    ${n.hass?m`${z(n,o("live_car_device"),l.device??null,null,L(n.hass,f=>Uh.test(f)),f=>r.update({car:{...l,device:f}}))}
        ${M(o("live_car_device_hint"),"nf-wide")}`:g}`}var qh=new Set(["parking","stairwell","rug","grid_point"]),Yh={inverter:{label:"furn_model",values:["","slim","hybrid"],text:n=>`inverter_${n||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:n=>`battery_${n||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:n=>`pendant_${n||"shade"}`}};function Xh(n,e,t,r){let o=n.hass?.language??"en",i=t.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${n.t("furniture_type")}
    <select ?disabled=${!n.admin} @change=${s=>r.update({type:s.target.value})}>
      ${Rn.map(s=>m`<option value=${s} ?selected=${s===e.type}>${n.t(`furn_${s}`)}</option>`)}
      ${t.map(s=>m`<optgroup label=${ye(s,n.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${ve(s.id,a.id)} ?selected=${ve(s.id,a.id)===e.type}>${Re(a,o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${Ze(n.hass,e.type)}</option>`:g}
    </select>
  </label>`}function Qh(n,e,t){let r=re(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=n.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>a.name[o]??a.name.en??Object.values(a.name)[0];return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${n.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${n.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!n.admin} @click=${()=>t.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function Jh(n,e,t){let r=Yh[e.type];if(!r)return g;let o=r.values.map(i=>[i,n.t(r.text(i))]);return m`<div class="nf-form">${D(n,n.t(r.label),e.variant??"",o,i=>t.update({variant:i||null}),{wide:!0})}</div>`}function ef(n,e,t){let r=n.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${n.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!n.admin} placeholder=${o} @change=${i=>t.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?B(n,n.t("show_name"),!!e.show_name,i=>t.update({show_name:i||void 0})):g}`}function tf(n,e,t){let r=n.t,o=s=>t.update(s),i=n.floor;return m`${R(n,r("x"),e.x,s=>o({x:s}))} ${R(n,r("z"),e.z,s=>o({z:s}))}
    ${R(n,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${R(n,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${R(n,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${R(n,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${J(e.type)?g:B(n,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${R(n,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${B(n,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${Fn(e)&&i?m`${R(n,r("mount_height"),e.mount_y??Sn(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!n.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}`}function nf(n,e){if(e.type==="stairs")return M(n.t("stairs_hint"));if(e.type!=="stairwell")return g;let t=n.floor&&!n.floor.rooms.some(r=>r.points.length>=3&&oc(Wr(e),r.points));return m`${M(n.t("stairwell_hint"))}${t?m`<p class="nf-sub nf-pack-error">${n.t("stairwell_outside")}</p>`:g}`}function rf(n,e,t){if(!n.admin)return g;let r=n.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking";return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>t.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>t.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>t.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>t.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button>
  </div>`}function gn(n,e,t){let r=et(e.type)?sc(n,e,t):qh.has(e.type)?g:m`<div class="nf-form nf-links">${No(n,e,t)}</div>`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||n.t("furniture")}</h3>${t.lockButton}</div>
    <div class="nf-form">${ef(n,e,t)} ${Xh(n,e,t.packs,t)} ${tf(n,e,t)}</div>
    ${nf(n,e)} ${Jh(n,e,t)} ${Qh(n,e,t)}
    ${r} ${e.type==="parking"?cc(n,e,t.packs,t):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&n.admin?m`<section>${M(n.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>t.toSpot(e)}>🅿 ${n.t("vehicle_to_spot")}</button></div></section>`:g}
    ${rf(n,e,t)}
  </section>`}var of=["door","window","opening","garage_door"],sf=/griff|handle|fenster|window|drehgriff/i;function af(n){let{hass:e}=n,t=i=>e?.states[i],r=i=>t(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&of.includes(r(i)??"");return{covers:L(e,i=>i.startsWith("cover.")),positions:L(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(t(i)?.state))),contacts:L(e,i=>o(i)||te(i)&&qr(t(i))!==null),plainContacts:L(e,o),handles:L(e,i=>i.startsWith("binary_sensor.")?typeof t(i)?.attributes.window_state=="string":te(i)&&(qr(t(i))!==null||sf.test(`${i} ${C(e,i)}`))),numbers:L(e,te)}}function Go(n,e,t){if(!n.hass)return null;let r=structuredClone(n.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[t]=null);return Zr(n.hass,r).get(e.id)?.[t]??null}var At=n=>n==="none"?null:n;function lf(n,e,t){let r=e.type==="door"?Cr:Br,o=ft({type:e.type,style:null},t.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",n.t("style_auto",{style:n.t(`style_${o}`)})],...r.map(a=>[a,n.t(`style_${a}`)])];return D(n,n.t("opening_style"),i,s,a=>t.update({style:a||null}),{wide:!0})}function Ko(n,e,t,r,o){return m`<label class="nf-field"
    >${n.t(r)}
    <input
      type="number"
      step="0.05"
      min="0.1"
      max="3"
      placeholder=${n.t("sidelight_auto")}
      .value=${e[t]==null?"":String(e[t])}
      ?disabled=${!n.admin}
      @change=${i=>{let s=Number(i.target.value);o.update({[t]:Number.isFinite(s)&&s>0?Math.min(3,Math.max(.1,Math.round(s*100)/100)):null})}}
    />
  </label>`}function cf(n,e,t){if(e.type!=="door")return g;let r=ft(e,t.isExterior(e));return r==="sidelight"?m`${B(n,n.t("sidelight_hinge"),!!e.sidelight_hinge,o=>t.update({sidelight_hinge:o}),{wide:!1,title:n.t("sidelight_hinge_hint")})}
      ${Ko(n,e,"sidelight_width","sidelight_width",t)}`:r==="sidelights"?m`${Ko(n,e,"sidelight_width","sidelight_width_left",t)} ${Ko(n,e,"sidelight_width2","sidelight_width_right",t)}`:g}function dc(n,e,t,r,o){let i=t===1,s=n.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),d=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),u=f=>{let _=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},..._})},h=f=>r.update(i?{contact:f}:{contact2:At(f)}),p=e.tilt_angle&&e.tilt_angle!=="none";return m`${D(n,s("sensor_kind"),c,d,u,{wide:!0})}
    ${c==="handle"?z(n,s("handle_entity"),l,void 0,o.handles,f=>h(f==="none"?i?"none":null:f)):z(n,s("contact_entity"),l,i?Go(n,e,"contact"):void 0,o.plainContacts,h)}
    ${c==="contact_tilt"?z(n,s("tilt_entity"),a,void 0,o.contacts,f=>r.update(i?{tilt:At(f)}:{tilt2:At(f)})):g}
    ${i?m`${z(n,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:At(f)}))}
        ${p?m`${R(n,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${R(n,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${B(n,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:g}`:g}`}function df(n,e,t,r){let o=n.t,i=e.type==="window",s=Go(n,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${z(n,o(i?"cover_entity":"door_cover"),e.cover,s,r.covers,l=>t.update({cover:l}))}
    ${a?m`${z(n,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>t.update({position:At(l)}))}
        ${e.position?B(n,o("cover_position_invert"),!!e.position_inverted,l=>t.update({position_inverted:l})):g}
        ${B(n,o("device_confirm"),!!e.confirm,l=>t.update({confirm:l}),{title:o("cover_confirm_hint")})}`:g}`}function uf(n,e,t,r){let o=n.t,i=e.leaves===2;return m`${z(n,o(i?"contact_main":"contact_entity"),e.contact,Go(n,e,"contact"),r.contacts,s=>t.update({contact:s}))}
    ${i&&e.type!=="garage"?z(n,o("contact_second"),e.contact2,void 0,r.contacts,s=>t.update({contact2:At(s)})):g}
    ${e.type==="door"?B(n,o("door_shut"),!!e.shut,s=>t.update({shut:s}),{title:o("door_shut_hint")}):g}`}function Uo(n,e,t){let r=n.t,o=af(n),i=En(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=p=>t.update(p),d=Object.keys(pt).map(p=>m`<button class="nf-chip" aria-pressed=${p===i} @click=${()=>t.setPreset(e,p)}>${r(`preset_${p}`)}</button>`),u=[["left",r("hinge_left")],["right",r("hinge_right")]],h=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${t.lockButton}</div>
    ${n.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${d}</div>`:g}
    ${n.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${R(n,r("width"),e.width,p=>c({width:Math.max(.3,p)}),.01,.3)}
      ${R(n,r("opening_position"),e.offset,p=>c({offset:Math.max(0,p)}),.01,0)}
      ${s?R(n,r("sill"),e.sill,p=>c({sill:Math.max(0,p)}),.01,0):g}
      ${R(n,r("opening_height"),e.height,p=>c({height:Math.max(.3,p)}),.01,.3)}
      ${a?g:lf(n,e,t)} ${cf(n,e,t)}
      ${D(n,r("opening_mark"),e.mark==="closed"?"closed":"",h,p=>c({mark:p==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:D(n,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,u,p=>c({hinge:p}),{wide:!0})}
      ${df(n,e,t,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${dc(n,e,1,t,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${dc(n,e,2,t,o)}`:g}`:uf(n,e,t,o)}
    </div>
    ${M(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${n.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button></div>`:g}
  </section>`}var zt=n=>Math.round(n*1e3)/1e3,hf=2.4;function uc(n,e,t){let r=co(n,e[0],e[1],t[0],t[1]),o=r===null,i=Math.min(...n.floors.map(l=>l.elevation)),s=zt(r??i+hf),a=o?6:n.settings.roof.pitch||35;return{id:P("roof"),x0:zt(e[0]),z0:zt(e[1]),x1:zt(t[0]),z1:zt(t[1]),shape:o?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function hc(n){let e=t=>zt(t+1);return{...structuredClone(n),id:P("roof"),x0:e(n.x0),x1:e(n.x1),z0:e(n.z0),z1:e(n.z1)}}var fc=(n,e)=>n.findIndex(t=>t.id===e)+1;function Tt(n){let e=n.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(t=>m`<button aria-pressed=${t.id===n.floorId} @click=${()=>n.setFloorId(t.id)}>${t.name}</button>`)}</div>`}function _n(n,e,t){return n.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${n.t("fix_hint")} @click=${t}>${e?`\u{1F512} ${n.t("unfix")}`:`\u{1F513} ${n.t("fix")}`}</button>`:g}function Pt(n,e,t,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===t} ?disabled=${!n.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function at(n,e){let{t,doc:r,hass:o}=n,i=t(`compass_${yo(e,r.settings.north??0)}`);if(e.key===_e)return t("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${t("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${H(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],a=e.section?t("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):t("solar_main");return e.flat?`${a} \xB7 ${t("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var mc=(n,e)=>m`<div class="nf-h3row"><h3>${n}</h3>${e}</div>`,gc=(n,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${n}</button>`,pc=(n,e)=>t=>Math.max(n,Math.min(e,ne(t)));function ff(n,e){let{host:t,roof:r}=n,o=t.t,i=v=>r.patchSection(v),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,d]=e.flip?[l[1],l[0]]:l,u=!!t.doc.settings.lock_plan,h=(v,w,$,S=.05,F=0)=>R(t,v,w,E=>$(Math.max(F,ne(E))),S,F),p=[...t.doc.floors].filter(v=>v.rooms.length>0).sort((v,w)=>w.elevation-v.elevation),f=uo(t.doc,e)?.id,_=v=>{let w=t.doc.floors.find(F=>F.id===v);if(!w)return;let $=ne(w.elevation+w.height),S=$-e.base;i({base:$,eave_a:ne(e.eave_a+S),eave_b:ne(e.eave_b+S)})},y=u?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>n.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:_n(t,!!e.locked,()=>i({locked:!e.locked})),b=Vi.map(v=>[v,o(`roof_shape_${v}`)]),x=(v,w)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(v)}>+ ${o("roof_dormer")} ${w}</button>`;return m`${gc(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${Tt(n)}
      ${mc(`${e.dormer?o("roof_dormer"):o("roof_section")} ${fc(t.doc.settings.roof.sections??[],e.id)}`,t.admin?y:g)}
      ${D(t,o("roof_shape"),e.shape,b,v=>i({shape:v}),{wide:!0})}
      ${s?g:Pt(t,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,v=>i({axis:v}))}
      ${B(t,o("roof_open"),!!e.open,v=>i({open:v}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?h(o("roof_height"),e.eave_a,v=>i({eave_a:v,eave_b:v})):m`${h(`${o("roof_eave")} ${a?"":c}`,e.eave_a,v=>i({eave_a:v}))}
            ${a?g:h(`${o("roof_eave")} ${d}`,e.eave_b,v=>i({eave_b:v}))}
            ${h(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,v=>i({pitch_a:Math.min(75,v)}),1)}
            ${a?g:h(`${o("roof_pitch_short")} ${d}`,e.pitch_b,v=>i({pitch_b:Math.min(75,v)}),1)}`}
        ${h(o("roof_base"),e.base,v=>i({base:v}))}
        ${D(t,o("roof_on_floor"),f??"",p.map(v=>[v.id,v.name]),_,{title:o("roof_on_floor_hint")})}
        ${M(o("roof_base_hint"),"nf-wide")}
        ${h(o("roof_overhang"),e.overhang??t.doc.settings.roof.overhang,v=>i({overhang:Math.min(2,v)}))}
      </div>
      ${s&&t.admin?m`${ee(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${M(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${M(`${o("roof_ridge_height")}: ${H(t.hass,nt(e),2)} m \xB7 ${o("roof_section_hint")}`)}
      ${t.admin?ee(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${x("a",c)}${a?g:x("b",d)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function pf(n,e){let{host:t,roof:r}=n,o=t.t,i=U(t.doc),s=h=>r.patchWindow(h),a=L(t.hass,h=>h.startsWith("cover.")),l=L(t.hass,h=>Zn(h)||te(h)),c=(h,p,f,_)=>z(t,o(h),p??null,void 0,f,y=>s({[_]:y==="none"?null:y})),d=h=>{let p=i.find(f=>f.key===h);p&&s({...dn(p,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},u=(t.doc.settings.roof.windows??[]).findIndex(h=>h.id===e.id)+1;return m`${gc(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${mc(`\u{1FA9F} ${o("roof_window")} ${u}`,_n(t,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${D(t,o("solar_face"),e.face,i.map(h=>[h.key,at(t,h)]),d,{wide:!0})}
        ${R(t,o("width"),e.w??.78,h=>s({w:pc(.3,4)(h)}),.01,.3)}
        ${R(t,o("height_m"),e.h??1.18,h=>s({h:pc(.3,4)(h)}),.01,.3)}
        ${R(t,o("solar_u"),e.u,h=>s({u:ne(h)}),.05)} ${R(t,o("solar_v"),e.v,h=>s({v:ne(h)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${oe(t,o("roof_window_name"),e.name??"",h=>s({name:h||null}),{wide:!0,maxlength:64})}
      </div>
      ${M(o("roof_window_motor_hint"))} ${M(o("roof_window_hint"))}
      ${t.admin?ee(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function mf(n){let{host:e,roof:t}=n,r=e.doc.settings.roof.windows??[],o=new Map(U(e.doc).map(s=>[s.key,s])),i=s=>{t.windowId=s,t.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${M(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?at(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${ee(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>t.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function _c(n){let{host:e,roof:t}=n,r=e.doc.settings.roof,o=r.type==="custom";if(t.window)return pf(n,t.window);if(o&&t.section)return ff(n,t.section);let i=o?r.sections??[]:[],s=e.t,a=(l,c)=>`${c+1} \xB7 ${l.dormer?s("roof_dormer"):s(`roof_shape_${l.shape}`)} \xB7 ${H(e.hass,Math.abs(l.x1-l.x0),1)} \xD7 ${H(e.hass,Math.abs(l.z1-l.z0),1)} m \xB7 ${s("roof_ridge_height")} ${H(e.hass,nt(l),1)} m`;return m`<section>
      ${Tt(n)}
      <h3>${s("roof_sections")}</h3>
      ${M(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((l,c)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>t.sectionId=l.id}><span>${a(l,c)}</span></button></div>`)}</div>
          ${ee(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>t.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(l=>l.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:ee(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>t.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${mf(n)}`}var jo=40,bc=60;function Zo(n){let e=new Set((n.solar??[]).map(t=>t.string).filter(Boolean));n.strings=(n.strings??[]).filter(t=>e.has(t.id))}function vc(n,e,t,r){let o=n.solar?.find(i=>i.id===e);if(o){if(t==="new"){let i=n.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};n.strings=[...i,s],o.string=s.id}else o.string=t;Zo(n)}}function yc(n,e){let t=new Set(n??[]);return t.delete(e)||t.add(e),t.size>0?[...t].sort():null}function wc(n){let e=n.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(bc,e[0])),layout:null,skip:null}:{layout:e.slice(0,jo).map(r=>Math.min(bc,r)),rows:Math.min(jo,e.length),cols:Math.max(1,...e),skip:null}}function xc(n,e){let t=Math.max(1,Math.min(jo,Math.round(e))),r=n.layout;return r?.length?{rows:t,layout:Array.from({length:t},(o,i)=>r[i]??r[r.length-1])}:{rows:t}}var kc=n=>n.layout?.length?n.layout.join(", "):String(n.cols),gf=["portrait","look","name","string","entity","module_w","module_h","wp"];function _f(n){let e={};for(let t of gf)e[t]=n[t];return e}function $c(n,e,t){let r=_f(e);if(t===_e)return{...ln(n,e.id),...r,rows:e.rows,cols:e.cols};let o=U(n).find(s=>s.key===t);if(o)return Kn(o,{...e,...r});let i=$e(n).find(s=>s.key===t);return i?Kn(i,{...e,...r,rows:1}):null}var Sc=400;function qo(n,e){let t=n?Se(n,e).length:0;return{modules:t,kwp:t*(e.wp??Sc)/1e3}}function Mc(n){let{host:e,roof:t}=n,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=U(e.doc),a=new Map(o.map(d=>[d.id,le(e.doc,d,s)])),l=(d,u)=>{let h=a.get(d.id),p=qo(h,d),f=r("solar_summary",{n:p.modules,kwp:H(e.hass,p.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>t.selectField(d.id)}>
        <span>${d.name||`${r("solar_field")} ${u+1}`} · ${h?at(e,h):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=d=>{let u=o.filter(_=>_.string===d.id),h=u.map(_=>qo(a.get(_.id),_)),p=h.reduce((_,y)=>_+y.modules,0),f=h.reduce((_,y)=>_+y.kwp,0);return m`<p class="nf-sub">🔗 <b>${d.name}</b> · ${r("solar_string_sum",{fields:u.length,n:p,kwp:H(e.hass,f,1)})}</p>`};return m`<section>
    ${Tt(n)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${M(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${ee(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>t.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>t.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!n.floorId} @click=${()=>t.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function bf(n,e){let{host:t,roof:r}=n,o=t.t,i=L(t.hass,h=>$t(t.hass,h)),s=t.doc.settings.roof.strings??[],a=s.find(h=>h.id===e.string),l=[["",o("solar_string_none")],...s.map(h=>[h.id,h.name]),["new",`+ ${o("solar_string_new")}`]],c=D(t,o("solar_string"),e.string??"",l,h=>r.setString(h===""?null:h),{wide:!0});if(!a)return m`${c}${z(t,o("solar_entity"),e.entity??null,void 0,i,h=>r.patchField({entity:h==="none"?null:h}))}`;let d=t.hass?tt(t.hass,t.doc.floors):null,u=t.doc.floors.flatMap(h=>h.furniture.filter(p=>p.type==="inverter").map(p=>({item:p,floor:h}))).map(({item:h,floor:p},f)=>{let _=d?.get(h.id)?.entity,y=h.name?.trim()||(_?C(t.hass,_):"");return[h.id,`${y||`${o("furn_inverter")} ${f+1}`} \xB7 ${p.name}`]});return m`${c}
    ${oe(t,o("solar_string_name"),a.name,h=>r.patchString({name:h||a.name}),{wide:!0})}
    ${z(t,o("solar_string_entity"),a.entity??null,void 0,i,h=>r.patchString({entity:h==="none"?null:h}))}
    ${D(t,o("solar_string_inverter"),a.inverter??"",[["",o(u.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...u],h=>r.patchString({inverter:h||null}),{wide:!0})}`}function Rc(n,e){let{host:t,roof:r}=n,o=t.t,i=w=>r.patchField(w),s=U(t.doc),a=le(t.doc,e,s),l=e.face===_e,c=tn(e),d=qo(a,e),u=c.reduce((w,$)=>w+$,0)-(e.skip?.length??0),h=(t.doc.settings.roof.solar??[]).findIndex(w=>w.id===e.id)+1,p=[...a?[]:[["",o("solar_face_gone")]],...s.map(w=>[w.key,at(t,w)]),[_e,o("solar_ground")],...$e(t.doc).map(w=>[w.key,at(t,w)])],f=w=>{let $=$c(t.doc,e,w);$&&i($)},_=(w,$,S=ne)=>F=>Math.max(w,Math.min($,S(F))),y=w=>i(cn(t.doc,e,w)),b=a?.wall?"solar_flip_wall":"solar_flip",x=(w,$,S)=>R(t,o($),e[w]??S,F=>i({[w]:_(.3,3)(F)}),.01,.3),v=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${Tt(n)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${h}`}</h3>
        ${_n(t,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${oe(t,o("solar_name"),e.name??"",w=>i({name:w||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${D(t,o("solar_face"),a?e.face:"",p,f,{wide:!0})}
        ${R(t,o("solar_rows"),c.length,w=>i(xc(e,w)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!t.admin}
            .value=${kc(e)}
            @change=${w=>{let $=wc(w.target.value);$&&i($)}}
          />
        </label>
      </div>
      ${M(`${a&&!a.unbounded?`${o("solar_face_size",{w:H(t.hass,a.lu,1),h:H(t.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${v?Pt(t,["left","center","right"].map(w=>[w,o(`solar_align_${w}`)]),e.align??"left",w=>i({align:w})):g}
      ${Pt(t,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,w=>i({portrait:w}))}
      ${Pt(t,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",w=>i({look:w}))}
      <div class="nf-form">
        ${x("module_w","solar_module_w",1.13)} ${x("module_h","solar_module_h",1.72)}
        ${R(t,o("solar_wp"),e.wp??Sc,w=>i({wp:_(50,1500,Math.round)(w)}),5,50)}
      </div>
      ${ee(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!t.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?M(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${R(t,o("solar_base"),e.base??0,w=>i({base:w>.001?Math.min(60,ne(w)):null}),.05,0)}
            ${R(t,o("solar_rotation"),e.rotation??0,y,5)}
            ${ee(m`<button class="nf-chip" ?disabled=${!t.admin} @click=${()=>y((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!t.admin} @click=${()=>y((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${R(t,o("solar_u"),e.u,w=>i({u:ne(w)}),.05)} ${R(t,o(a?.wall?"solar_v_wall":"solar_v"),e.v,w=>i({v:ne(w)}),.05)}`}
        ${a?.wall?R(t,o("solar_tilt_wall"),e.tilt??0,w=>i({tilt:_(0,90,Math.round)(w)}),5,0):g}
        ${a?.flat?R(t,o("solar_tilt"),e.tilt??15,w=>i({tilt:_(0,45,Math.round)(w)}),1,0):g}
        ${a?.wall||a?.flat?B(t,o(b),!!e.flip,w=>i({flip:w})):g}
      </div>
      <p class="nf-sub">
        ${o("solar_summary",{n:d.modules,kwp:H(t.hass,d.kwp,1)})}${d.modules<u?m` · <b>${o("solar_partial",{n:d.modules,total:u})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${bf(n,e)}</div>
      ${M(o("solar_string_hint"))} ${M(o("solar_form_hint"))}
      ${t.admin?ee(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...wt(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var Fc=n=>Math.round(n*1e3)/1e3,pr=class{ctx;sectionSel=null;windowSel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let t=(this.settings.sections??[]).length>0;e&&t&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!t)&&(r.settings.roof.sections=ho(r,()=>P("roof")))}),this.sectionId=null)}addSection(e,t){if(!this.admin)return;let r=uc(this.doc,e,t);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:t,wall_interior:r}=this.doc.settings,o=ro(e.rooms,e.walls??[],t,r);if(!o)return;let i=o.map(([s,a])=>[Fc(s),Fc(a)]);this.patchSection({shape:"flat",points:i,...Xt(i)})}addDormer(e){let t=this.section;if(!t||!this.admin)return;let r=io(t,e,P("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let t=this.sectionSel;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===t);o&&Object.assign(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let t=hc(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],t]),this.sectionId=t.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,t=hn(U(this.doc).filter(o=>!o.flat),e)??U(this.doc)[0];if(!t)return;let r=dn(t,P("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let t=this.windowSel;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===t);if(!o)return;Object.assign(o,e);let i=U(r).find(s=>s.key===o.face);i&&Object.assign(o,Ce(i,Ue(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addField(){if(!this.admin)return;let e=U(this.doc),t=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=hn(e.filter(i=>!t.has(i.key)),r)??hn(e,r);o&&(this.appendField(wt(o,P("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,t=this.admin&&e?go(this.doc,P("pv"),e):null;t&&this.appendField(t)}addGroundField(){this.admin&&this.appendField(ln(this.doc,P("pv")))}appendField(e){this.ctx.host.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let t=this.settings.solar?.find(r=>r.id===e);t?.face.startsWith("wall:")&&this.ctx.setFloorId(t.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((t,r)=>{Object.assign(t,e);let o=le(r,t);o&&Object.assign(t,Ce(o,t))})}toggleCell(e){this.editField(t=>t.skip=yc(t.skip,e))}editField(e){let t=this.fieldSel;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===t);o&&e(o,r)})}setString(e){let t=this.fieldSel;!t||!this.admin||this.ctx.host.change(r=>vc(r.settings.roof,t,e,{id:P("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let t=this.field?.string;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===t);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(t=>{t.settings.roof.solar=(t.settings.roof.solar??[]).filter(r=>r.id!==e),Zo(t.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,t)=>t.elevation-e.elevation)}};var Ec=(n,e)=>n.floors.flatMap(t=>t.furniture).find(t=>t.type===e),vf=n=>!n||n==="none";async function Ac(n){let e;try{e=await n.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let t=xa(n.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Ec(n.doc(),i);!l&&n.canAdd()&&(n.addDevice(i),l=Ec(n.doc(),i)),!(!l||!vf(l[s]))&&(n.setField(l.id,s,a),r++)};return o("meter","power",t.grid),o("inverter","power",t.solar),o("home_battery","power",t.battery),o("home_battery","soc",t.battery_soc),{kind:"done",filled:r}}var yf=/garage|carport/,wf=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,xf=/flur|diele|eingang|hall|entr|lobby/,zc=.25,Ot=n=>Math.round(n*1e3)/1e3;function kf(n,e,t){let r=e.rooms.filter(d=>d.points.length>=3),o=d=>r.find(u=>d.test(t.roomLabel(u).toLowerCase())),i=r.find(d=>e.furniture.some(u=>u.type==="parking"&&T([u.x,u.z],d.points))),s=o(yf)??i,a=o(wf),l=n==="wallbox"?s:n==="meter"?a??o(xf)??s:a??s,c=[...r].sort((d,u)=>Math.abs(ae(u.points))-Math.abs(ae(d.points)))[0];return l??t.selected??c}function $f(n,e){let[t,r]=ce(n.points),o=n.points.some((s,a)=>!e.has(a)),i=null;return n.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=n.points[(a+1)%n.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let d=[(s[0]+l[0])/2,(s[1]+l[1])/2],u=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(t-d[0])*u[0]+(r-d[1])*u[1]<0&&(u=[0-u[0],0-u[1]]),i={mid:d,inward:u,length:c}}),i}function Tc(n,e,t,r){let[o,i,s]=Ne(n),a={id:P("furniture"),type:n,rotation:0,w:o,d:i,h:s,variant:null};if(n==="grid_point"){let p=Sa(e),[f,_]=p?[p.x,p.z]:r.fallback;return{...a,x:Ot(f),z:Ot(_)}}let l=kf(n,t,r),[c,d]=l?ce(l.points):r.fallback;if(l){let p=new Set(t.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),f=$f(l,p);f&&([c,d]=[f.mid[0]+f.inward[0]*(i/2+zc),f.mid[1]+f.inward[1]*(i/2+zc)])}let u={...a,x:Ot(c),z:Ot(d)},h=l?Zt({...t,furniture:[...t.furniture,u]},u,e.settings.wall_interior):null;return h?{...u,x:Ot(h.x),z:Ot(h.z),rotation:h.rotation}:u}var mr=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let t=this.undoStack.pop();return t===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(t))}redo(e){let t=this.redoStack.pop();return t===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(t))}};var Yo=n=>Math.round(n*1e3)/1e3,Ht="unmovable",Xo="no change";function Pc(n,e,t,r){let o=i=>[Yo(i[0]+t),Yo(i[1]+r)];switch(e.kind){case"device":return n.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:Ht;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=n.openings.find(p=>p.id===e.id),s=i?De(i,n.rooms,n.walls??[]):null;if(!i||!s)return Ht;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,d=(t*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(d)<1e-9)return Xo;let u=Math.min(i.width,c)/2,h=Yo(Math.min(c-u,Math.max(u,i.offset+d)));return{apply(p){let f=p.openings.find(_=>_.id===e.id);f&&(f.offset=h)}}}case"room":{let i=n.rooms.find(a=>a.id===e.id);if(!i)return Ht;let s=new Set(n.placements.filter(a=>T([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var It=n=>Math.round(n*1e3)/1e3,Qo=n=>n.map(([e,t])=>[It(e),It(t)]);function Oc(n,e){return{id:P("room"),name:e,area_id:null,points:Qo(n),floor_material:"wood"}}function Hc(n){return{...structuredClone(n),id:P("room"),points:Qo(n.points.map(([e,t])=>[e+.5,t+.5]))}}function Ic(n,e){let t=n.rooms.find(r=>r.id===e);n.rooms=n.rooms.filter(r=>r.id!==e),n.openings=n.openings.filter(r=>r.room_id!==e||r.wall),t&&(n.placements=n.placements.filter(r=>!T([r.x,r.z],t.points)))}function Dc(n,e,t){let r=n.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(t-1+r.points.length)%r.points.length;r.points.splice(t,1),r.wall_heights?.splice(t,1),r.wall_thickness?.splice(t,1);let i=s=>s.room_id===e&&!s.wall;return n.openings=n.openings.filter(s=>!(i(s)&&(s.edge===t||s.edge===o))).map(s=>i(s)&&s.edge>t?{...s,edge:s.edge-1}:s),!0}function Lc(n,e,t){if(!Number.isFinite(t))return null;let r=Q(n.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[t,t+(s-o)]:e==="z"?[i,a]=[t,t+(a-i)]:t>.05&&(e==="w"?s=o+t:a=i+t),Qo([[o,i],[s,i],[s,a],[o,a]])}function Cc(n,e,t,r){return!Number.isFinite(r)||e<0||e>=n.points.length?null:n.points.map((o,i)=>i===e?t===0?[It(r),o[1]]:[o[0],It(r)]:[o[0],o[1]])}var Sf=/^(Raum|Room) \d+$/;function Bc(n,e,t){let r=e?t[e]:void 0,o=!n.name||Sf.test(n.name)||Object.values(t).some(i=>i.name===n.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function Vc(n,e){let t=e.filter(l=>V(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&T([l.x,l.z],n.points));if(t.length<2)return[];let r=Q(n.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(t.length*o/Math.max(.1,i)))),a=Math.ceil(t.length/s);return t.map((l,c)=>{let d=Math.floor(c/s),u=d===a-1?t.length-s*(a-1):s,h=c-d*s;return{entityId:l.entity_id,x:It(r.x0+o/u*(h+.5)),z:It(r.z0+i/a*(d+.5))}})}var gr=n=>Math.round(n*1e3)/1e3,Jo=n=>(n+90)%360;function Wc(n,e,t){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of n.rooms)o.points=o.points.map(e);for(let o of n.furniture)r(o),t&&(o.rotation=Jo(o.rotation));for(let o of n.placements)r(o),t&&(o.rotation=Jo(o.rotation??0));for(let o of n.outdoor)o.points=o.points.map(e);for(let o of n.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];n.background&&(r(n.background),t&&(n.background.rotation=Jo(n.background.rotation??0)))}function Mf(n,e){for(let r of n.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let t=n.energy.meter;t&&([t.x,t.z]=e([t.x,t.z]))}function Nc(n,e,t,r){if(e.allFloors){for(let o of n.floors)Wc(o,t,r);Mf(n,t)}else{let o=n.floors.find(i=>i.id===e.floorId);o&&Wc(o,t,r)}}function Kc(n,e,t,r){Nc(n,e,([o,i])=>[gr(o+t),gr(i+r)],!1)}function Rf(n,e){let r=(e.allFloors?n.floors:n.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function Gc(n,e){let t=Rf(n,e);if(!t)return!1;let[r,o]=t;return Nc(n,e,([i,s])=>[gr(r-(s-o)),gr(o+(i-r))],!0),!0}var _r=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,t){this.ids[e]=t,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,t,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=t,e==="room"?i.room=t:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&t&&(i.room=r.roomOfDevice(t)??i.room),e==="opening"&&t&&(i.room=r.roomOfOpening(t)??i.room),(e!=="room"||t!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let t=this.ids[e];if(t)return{kind:e,id:t}}return null}};var br=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let t=new Set(this.unfolded);t.delete(e)||t.add(e),this.unfolded=t,this.onChange()}};function Uc(n,e,t){let r=n.floors.length,o=e?.name??(r===0?t.first:t.next(r));return{...Xi(P("floor"),o,Qi(n.floors,e?.level)),ha_floor:e?.floor_id??null}}function jc(n,e){let t=n.findIndex(o=>o.elevation>e.elevation),r=t<0?n.length:t;return[...n.slice(0,r),e,...n.slice(r)]}function Zc(n,e,t){let r=n.findIndex(s=>s.id===e),o=r+t;if(r<0||o<0||o>=n.length)return[...n];let i=[...n];return[i[r],i[o]]=[i[o],i[r]],i}function qc(n,e){let t=new Set(n.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!t.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function vr(n,e,t){if(!e.ha_floor)return[];let r=new Set(n.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(t??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function Yc(n,e,t){return Object.values(t??{}).filter(r=>r.floor_id===e.ha_floor||!n.floors.some(o=>o.ha_floor===r.floor_id))}function Ff(n,e,t,r){let o=qc(n.doc,n.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:t.addFloor(null);return m`<div class="nf-floor-list">
      ${[...n.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>t.openFloor(s.id)}>${s.name}</button>`)}
      ${n.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${n.t("add_floor")}</button>`:g}
    </div>
    ${n.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${M(n.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>t.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${n.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>t.addFloor(null)}>${n.t("floor_empty")}</button>
        </div>`:g}`}function Ef(n,e,t,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${n.t("floor_shift_hint")}>
    <span>${n.t("floor_shift")}</span>
    ${o("X",e.shiftX,i=>e.shiftX=i)} ${o("Z",e.shiftZ,i=>e.shiftZ=i)}
    <button class="nf-btn" ?disabled=${!e.shiftX&&!e.shiftZ} @click=${()=>t.shift()}>${n.t("floor_shift_apply")}</button>
    <button class="nf-btn" title=${n.t("floor_turn_hint")} @click=${()=>t.turn()}>${n.t("floor_turn")}</button>
    <button class="nf-btn" title=${n.t("floor_start_view_hint")} @click=${()=>t.rememberView()}>${n.t("floor_start_view")}</button>
    ${r.start_view?m`<button class="nf-btn" title=${n.t("floor_start_view_reset")} @click=${()=>n.change((i,s)=>s.start_view=null)}>↺</button>`:g}
    <label class="nf-check nf-wide" title=${n.t("floor_shift_all_hint")}
      ><input type="checkbox" .checked=${e.shiftAll} @change=${i=>e.shiftAll=i.target.checked} />
      ${n.t("floor_shift_all")}</label
    >
  </div>`}function Af(n,e,t,r){let o=n.t,i=c=>n.change((d,u)=>Object.assign(u,c)),s=Yc(n.doc,r,n.hass?.floors),a=vr(n.doc,r,n.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${oe(n,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${R(n,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${n.admin?Ef(n,e,t,r):g}
    ${R(n,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(n.hass?.floors??{}).length>0?D(n,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${n.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>t.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${n.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>t.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>t.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn nf-danger" @click=${()=>t.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>t.closeGaps()}>${o("gaps_close")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function Xc(n,e,t,r,o){return m`<section>
    <h3>${n.t("floors")}</h3>
    ${Ff(n,e,t,o)} ${r?Af(n,e,t,r):g}
  </section>`}var Qc=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Jc(n,e){let t=Q(n.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:e[0]??null}}function yr(n,e){let[t,r,o]=Ie[e.type];return rs(n,e.rows,e.cols).map(([i,s])=>({id:P("furniture"),type:e.type,x:i,z:s,rotation:0,w:t,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var ei=n=>Math.max(1,Math.min(12,Math.round(n)));function ed(n,e,t){return e.rooms.length===0?g:m`<section>
    <h3>${n.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>t.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${n.t("area_m2",{a:H(n.hass,fe(r.points),1)})}</span>
        </button>`)}
    </div>
  </section>`}function zf(n,e,t,r){let o=e.spots,i=c=>e.spots={...o,...c},s=yr(t,o).length,a=L(n.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=Qc.map(c=>[c,n.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${D(n,n.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${R(n,n.t("spots_cols"),o.cols,c=>i({cols:ei(c)}),1,1)}
    ${R(n,n.t("spots_rows"),o.rows,c=>i({rows:ei(c)}),1,1)}
    ${z(n,n.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${n.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${n.t("cancel")}</button>
    </div>
    ${M(n.t("spots_hint"),"nf-wide")}
  </div>`}function Tf(n,e,t,r){return m`<details class="nf-points" ?open=${!t}>
    <summary>${n.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${R(n,n.t("x"),o[0],s=>r.setCorner(i,0,s))} ${R(n,n.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${n.admin?m`<button class="nf-btn" title=${n.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function ti(n,e,t,r){let o=n.t,i=mt(t.points),s=Q(t.points),a=Object.values(n.hass?.areas??{}).sort((u,h)=>u.name.localeCompare(h.name)),l=[["",o("no_area")],...a.map(u=>[u.area_id,u.name])],c=qi.map(u=>[u,o(`mat_${u}`)]),d=u=>m`<button class="nf-btn" @click=${()=>r.applyPackage(u)}><b>${o(`pkg_${u}`)}</b><span>${o(`pkg_${u}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${oe(n,o("room_name"),t.name,u=>r.patch({name:u}),{wide:!0})}
      ${D(n,o("area"),t.area_id??"",l,u=>r.setArea(u),{wide:!0})}
      ${D(n,o("material"),t.floor_material,c,u=>r.patch({floor_material:u}),{wide:!0})}
      ${i?m`${R(n,o("x"),s.x0,u=>r.setRect("x",u))} ${R(n,o("z"),s.z0,u=>r.setRect("z",u))}
          ${R(n,o("width"),s.x1-s.x0,u=>r.setRect("w",u),.01,.05)}
          ${R(n,o("depth"),s.z1-s.z0,u=>r.setRect("d",u),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!n.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${t.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!n.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${Tf(n,t,i,r)}
    ${n.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?zf(n,e,t,r):g}
    ${e.packages?m`<div class="nf-packages">${js.map(d)}${M(o("pkg_hint"))}</div>`:g}
  </section>`}var td=Me`
  :host {
    display: block;
    height: 100%;
  }
  .nf-editor {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 320px;
    height: 100%;
    min-height: 0;
  }
  .nf-editor:has(> .nf-side-strip) {
    grid-template-columns: 1fr 52px;
  }
  .nf-side-strip {
    padding: 10px 6px;
    gap: 8px;
    align-items: center;
  }
  .nf-strip-btn {
    width: 40px;
    height: 40px;
    border: 1px solid var(--nf-line);
    border-radius: 12px;
    background: var(--nf-chrome);
    color: var(--nf-text);
    font-size: 18px;
    cursor: pointer;
  }
  .nf-strip-hot {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-side-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(340px, 60%);
    z-index: 6;
    box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
  }
  .nf-pin-row {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }
  .nf-3d-size {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--nf-muted);
    font-size: 12px;
  }
  .nf-3d-size input {
    width: 58px;
    padding: 4px 6px;
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
  }
  .nf-3d-select {
    font: inherit;
    color: var(--nf-text);
    background: var(--nf-chrome-solid);
    border: 1px solid var(--nf-line);
    border-radius: 999px;
    padding: 4px 10px;
  }
  .nf-editor.nf-narrow {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(360px, 62vh) auto;
    height: auto;
  }
  .nf-main {
    display: grid;
    grid-template-rows: auto 1fr;
    min-height: 0;
    min-width: 0;
  }
  .nf-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    padding: 10px 12px;
  }
  .nf-warn {
    color: var(--nf-warm);
    font-size: 12.5px;
  }
  .nf-picture-group {
    display: grid;
    gap: 6px;
    margin: 6px 0 10px;
    padding: 8px;
    border: 1px solid var(--nf-line);
    border-radius: 10px;
  }
  .nf-picture-group > select {
    min-width: 0;
  }
  .nf-picture-row {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 6px;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    background: color-mix(in srgb, var(--nf-line) 40%, transparent);
  }
  .nf-picture-row input[type="url"] {
    grid-column: 1 / -1;
    min-width: 0;
  }
  .nf-picture-row > .nf-sub,
  .nf-picture-row > .nf-picture-camera {
    grid-column: 1 / -1;
  }
  .nf-picture-row.nf-rule-hit {
    outline: 1px solid var(--nf-accent);
  }
  .nf-rule-now {
    grid-column: 1 / -1;
  }
  .nf-rule-hit {
    color: var(--nf-accent);
  }
  .nf-picture-reuse {
    grid-column: 1 / -1;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }
  .nf-picture-reuse-btn {
    padding: 2px;
    border: 1px solid var(--nf-line);
    border-radius: 6px;
    background: var(--nf-chrome-solid);
    cursor: pointer;
  }
  .nf-picture-reuse-btn img {
    display: block;
    height: 28px;
    max-width: 60px;
    object-fit: contain;
  }
  .nf-picture-reuse-btn:hover {
    border-color: var(--nf-accent);
  }
  .nf-picture-thumb {
    max-height: 60px;
    max-width: 100%;
    border-radius: 6px;
    justify-self: start;
  }
  .nf-picture-pick {
    justify-self: start;
  }
  .nf-parking-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin: 4px 0;
  }
  .nf-parking-row input,
  .nf-parking-row select {
    flex: 1;
    min-width: 0;
  }
  .nf-stage-pair {
    display: flex;
    min-height: 0;
    min-width: 0;
  }
  .nf-stage-pair > .nf-canvas-wrap {
    flex: 1 1 var(--nf-split, 55%);
    min-width: 0;
  }
  .nf-split > .nf-canvas-wrap {
    flex: 0 0 var(--nf-split, 55%);
  }
  .nf-split-handle {
    flex: 0 0 8px;
    cursor: col-resize;
    background: var(--nf-line);
    touch-action: none;
  }
  .nf-split-handle:hover {
    background: var(--nf-accent);
  }
  .nf-editor-3d {
    position: relative;
    flex: 1 1 0;
    min-width: 240px;
    min-height: 0;
    border-left: 1px solid var(--nf-line);
    container-type: size;
    container-name: nf;
  }
  .nf-editor-3d nf-view3d {
    display: block;
    height: 100%;
  }
  .nf-3d-walls {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
  }
  .nf-3d-bar {
    position: absolute;
    left: 50%;
    bottom: 12px;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    max-width: calc(100% - 24px);
    padding: 6px 8px 6px 14px;
    border-radius: 999px;
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    font-size: 13px;
  }
  .nf-danger-chip {
    color: var(--nf-danger, #ff6b7a);
  }
  .nf-narrow .nf-stage-pair.nf-split {
    flex-direction: column;
  }
  .nf-narrow .nf-split > .nf-canvas-wrap {
    flex: 1 1 auto;
  }
  .nf-narrow .nf-editor-3d {
    flex: 0 0 42%;
    min-width: 0;
    border-left: none;
    border-top: 1px solid var(--nf-line);
  }
  .nf-canvas-wrap {
    position: relative;
    min-height: 0;
    overflow: hidden;
    background: radial-gradient(ellipse at 50% 35%, var(--nf-bg2), var(--nf-bg) 75%);
  }
  svg.nf-plan {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    touch-action: none;
    user-select: none;
    -webkit-user-select: none;
    cursor: default;
  }
  svg.nf-tool-rect,
  svg.nf-tool-polygon {
    cursor: crosshair;
  }
  .nf-grid-minor {
    stroke: color-mix(in srgb, var(--nf-accent) 5%, transparent);
    stroke-width: 1;
  }
  .nf-grid-major {
    stroke: color-mix(in srgb, var(--nf-soft) 16%, transparent);
    stroke-width: 1;
  }
  .nf-origin {
    fill: color-mix(in srgb, var(--nf-soft) 50%, transparent);
  }
  .nf-ghost {
    fill: none;
    stroke: rgba(138, 155, 184, 0.35);
    stroke-dasharray: 4 4;
  }
  .nf-wall {
    fill: #1b2a47;
  }
  .nf-wall-ext {
    fill: #22345a;
  }
  .nf-room {
    fill: color-mix(in srgb, var(--nf-accent) 5%, transparent);
    stroke: color-mix(in srgb, var(--nf-accent) 75%, transparent);
    stroke-width: 1.5;
    stroke-linejoin: round;
    cursor: pointer;
  }
  .nf-room:hover {
    fill: color-mix(in srgb, var(--nf-accent) 9%, transparent);
  }
  .nf-room-sel {
    fill: color-mix(in srgb, var(--nf-accent) 14%, transparent);
    stroke: var(--nf-accent);
    stroke-width: 2.5;
  }
  .nf-room-name {
    fill: var(--nf-text);
    font: 600 13px var(--nf-title-font);
    text-anchor: middle;
  }
  .nf-room-area {
    fill: var(--nf-muted);
    font: 500 11.5px var(--nf-font);
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
  }
  .nf-dim {
    fill: var(--nf-accent);
    font: 600 11.5px var(--nf-font);
    text-anchor: middle;
    font-variant-numeric: tabular-nums;
    paint-order: stroke;
    stroke: var(--nf-bg);
    stroke-width: 3px;
  }
  .nf-vertex circle:not(.nf-hit) {
    fill: var(--nf-bg);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-vertex-sel circle:not(.nf-hit) {
    fill: var(--nf-accent);
  }
  .nf-vertex,
  .nf-mid {
    cursor: grab;
  }
  .nf-hit {
    fill: transparent;
  }
  .nf-mid circle:not(.nf-hit) {
    fill: color-mix(in srgb, var(--nf-soft) 35%, transparent);
    stroke: var(--nf-soft);
  }
  .nf-mid path {
    stroke: var(--nf-text);
    stroke-width: 1.5;
  }
  .nf-draft {
    fill: rgba(255, 181, 71, 0.08);
    stroke: var(--nf-warm);
    stroke-width: 2;
    stroke-dasharray: 6 4;
  }
  polyline.nf-draft {
    fill: none;
  }
  .nf-draft-pt {
    fill: var(--nf-warm);
  }
  .nf-draft-first {
    fill: transparent;
    stroke: var(--nf-warm);
    stroke-width: 2;
  }
  .nf-cursor {
    fill: var(--nf-warm);
  }
  .nf-guide {
    stroke: rgba(255, 95, 210, 0.55);
    stroke-dasharray: 3 5;
  }
  .nf-snap {
    fill: none;
    stroke: #ff5fd2;
    stroke-width: 2;
  }
  .nf-hint {
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 8px;
    margin: 0;
    font-size: 12px;
    color: var(--nf-muted);
    pointer-events: none;
  }
  .nf-side {
    border-left: 1px solid var(--nf-line);
    background: var(--nf-chrome-solid);
    overflow-y: auto;
    padding: 12px 14px 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-height: 0;
  }
  .nf-narrow .nf-side {
    border-left: none;
    border-top: 1px solid var(--nf-line);
  }
  h3,
  summary {
    margin: 0 0 8px;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--nf-muted);
    font-weight: 600;
  }
  summary {
    cursor: pointer;
    margin: 0;
  }
  details[open] > summary {
    margin-bottom: 8px;
  }
  .nf-floor-list,
  .nf-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .nf-floor-list .nf-chip {
    box-shadow: none;
    border: 1px solid var(--nf-line);
  }
  .nf-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 10px;
  }
  .nf-wide {
    grid-column: 1 / -1;
  }
  .nf-room-list {
    display: grid;
    gap: 2px;
  }
  .nf-row {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font: inherit;
    color: var(--nf-text);
    background: none;
    border: none;
    border-bottom: 1px solid var(--nf-line);
    padding: 9px 2px;
    cursor: pointer;
    text-align: left;
  }
  .nf-row:hover {
    color: var(--nf-accent);
  }
  .nf-check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--nf-muted);
  }
  .nf-check input {
    accent-color: var(--nf-accent);
  }
  .nf-meter rect {
    fill: #2a2a10;
    stroke: #ffc633;
    stroke-width: 1.5;
  }
  .nf-meter path {
    fill: #ffc633;
  }
  .nf-packages {
    display: grid;
    gap: 6px;
    margin-top: 10px;
  }
  .nf-packages .nf-btn {
    display: grid;
    text-align: left;
    gap: 2px;
  }
  .nf-packages .nf-btn span {
    font-weight: 400;
    font-size: 12px;
    color: var(--nf-muted);
  }
  .nf-arrows {
    display: grid;
    grid-template-columns: repeat(3, 52px);
    grid-template-areas: ". up ." "left . right" ". down .";
    gap: 6px;
    justify-content: center;
  }
  .nf-arrows .nf-btn {
    font-size: 20px;
    padding: 6px 0;
  }
  .nf-arrow-up {
    grid-area: up;
  }
  .nf-arrow-left {
    grid-area: left;
  }
  .nf-arrow-right {
    grid-area: right;
  }
  .nf-arrow-down {
    grid-area: down;
  }
  .nf-measure-list {
    margin: 8px 0;
    padding-left: 22px;
    color: var(--nf-muted);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
  }
  .nf-library {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
    gap: 6px;
    margin-top: 8px;
  }
  .nf-library .nf-btn {
    font-weight: 500;
    font-size: 13px;
  }
  /* the background picture while it is edited: a dashed frame and a corner handle */
  .nf-bg-frame {
    fill: none;
    stroke: var(--nf-accent);
    stroke-width: 1.5;
    stroke-dasharray: 6 4;
    pointer-events: none;
  }
  .nf-bg-handle {
    fill: var(--nf-accent);
    stroke: #041018;
    stroke-width: 2;
    cursor: nwse-resize;
  }
  .nf-furn-body {
    fill: color-mix(in srgb, var(--nf-soft) 10%, transparent);
    stroke: color-mix(in srgb, var(--nf-soft) 55%, transparent);
    stroke-width: 1.2;
    vector-effect: non-scaling-stroke;
    cursor: grab;
  }
  .nf-furn-sym * {
    fill: none;
    stroke: rgba(150, 175, 255, 0.55);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
    pointer-events: none;
  }
  .nf-furn-sym .nf-sym-fill {
    fill: color-mix(in srgb, var(--nf-soft) 28%, transparent);
  }
  .nf-furn-sym .nf-sym-strong {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-out polygon {
    fill: color-mix(in srgb, var(--nf-soft) 6%, transparent);
    stroke: color-mix(in srgb, var(--nf-soft) 40%, transparent);
    stroke-width: 1;
    stroke-dasharray: 4 3;
    cursor: grab;
  }
  .nf-out-lawn polygon,
  .nf-out-bed polygon,
  .nf-out-wild polygon,
  .nf-out-hedge polygon {
    fill: rgba(61, 224, 160, 0.1);
    stroke: rgba(61, 224, 160, 0.5);
  }
  .nf-out-pool polygon {
    fill: color-mix(in srgb, var(--nf-accent) 18%, transparent);
    stroke: var(--nf-accent);
  }
  .nf-out-terrace polygon {
    fill: rgba(150, 130, 255, 0.12);
  }
  .nf-free-wall {
    cursor: grab;
  }
  .nf-vertex-no {
    fill: var(--nf-accent);
    font-size: 11px;
    font-weight: 700;
    pointer-events: none;
  }
  .nf-edge-box {
    margin: 12px 0;
    padding: 10px 12px;
    border: 1px solid color-mix(in srgb, var(--nf-accent) 45%, transparent);
    border-radius: 12px;
    background: color-mix(in srgb, var(--nf-accent) 6%, transparent);
  }
  .nf-edge-box h4 {
    margin: 0 0 4px;
    color: var(--nf-accent);
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
     a split point gets a line of its own below */
  .nf-edge-height {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: end;
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: 8px;
  }
  .nf-edge-height > span:first-child {
    flex: 1 1 84px;
    min-width: 84px;
  }
  .nf-edge-height > .nf-field {
    flex: 1 1 90px;
    min-width: 0;
  }
  .nf-edge-height > .nf-muted {
    flex: 1 1 90px;
    align-self: center;
  }
  .nf-edge-height > .nf-btn {
    flex: 0 0 auto;
    white-space: nowrap;
    padding-left: 10px;
    padding-right: 10px;
  }
  .nf-edge-height > .nf-split-row {
    flex: 1 1 100%;
    display: flex;
    gap: 6px;
    align-items: end;
  }
  .nf-edge-height > .nf-split-row > .nf-field {
    flex: 1;
  }
  .nf-edge-on {
    background: color-mix(in srgb, var(--nf-accent) 14%, transparent);
  }
  .nf-edge-low b {
    color: var(--nf-accent);
  }
  .nf-wall-low {
    opacity: 0.55;
  }
  .nf-dev-source {
    display: flex;
    margin: 8px 0;
  }
  .nf-dev-source button {
    flex: 1 1 0;
    min-width: 0;
    padding: 6px 4px;
    font-size: 12px;
    line-height: 1.2;
    white-space: normal;
    text-align: center;
    border-radius: 10px;
  }
  .nf-place-all {
    margin: 10px 0 0;
  }
  .nf-roof-sec polygon {
    fill: color-mix(in srgb, #ffb547 10%, transparent);
    stroke: #ffb547;
    stroke-width: 2;
    stroke-dasharray: 8 6;
    cursor: move;
  }
  .nf-roof-sel polygon {
    fill: color-mix(in srgb, var(--nf-accent) 14%, transparent);
    stroke: var(--nf-accent);
    stroke-dasharray: none;
  }
  /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
  .nf-roofwin polygon {
    fill: color-mix(in srgb, #2b6b8f 70%, transparent);
    stroke: #e3e9f5;
    stroke-width: 2;
    cursor: move;
  }
  .nf-roofwin-sel polygon {
    stroke: #ffd75a;
  }
  .nf-tool-energy .nf-roof-layer {
    opacity: 0.45;
  }
  .nf-tool-energy .nf-energy-item {
    pointer-events: auto;
  }
  .nf-swatches {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-top: 4px;
  }
  .nf-swatch {
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
    border: 2px solid var(--nf-line);
    background: var(--sw);
    cursor: pointer;
  }
  .nf-swatch[aria-checked="true"] {
    border-color: var(--nf-text);
    outline: 2px solid var(--nf-accent);
    outline-offset: 2px;
  }
  .nf-energy-marker {
    cursor: move;
  }
  .nf-checklist .nf-chk {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin: 2px 0;
    padding: 6px 8px;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }
  .nf-checklist .nf-chk:hover {
    background: rgba(127, 127, 127, 0.12);
  }
  .nf-checklist .nf-chk span {
    width: 18px;
    text-align: center;
    font-weight: 700;
  }
  .nf-chk-ok span {
    color: #59ff8c;
  }
  .nf-chk-todo span {
    color: #ffc633;
  }
  .nf-chk-opt {
    opacity: 0.75;
  }
  .nf-teaser-on {
    border-color: rgba(89, 255, 140, 0.5);
  }
  .nf-teaser {
    margin-top: 12px;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
    background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
  }
  .nf-teaser-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
  }
  .nf-teaser-soon {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--nf-chrome-solid);
    background: #ffd75a;
    border-radius: 999px;
    padding: 2px 8px;
    white-space: nowrap;
  }
  .nf-teaser img {
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid color-mix(in srgb, var(--nf-accent) 40%, transparent);
  }
  .nf-teaser ul {
    margin: 8px 0 4px;
    padding-left: 18px;
    font-size: 13px;
  }
  /* the roof and energy tools say what can be moved there (everything else is locked) */
  .nf-tool-note {
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    max-width: calc(100% - 24px);
    padding: 5px 12px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--nf-chrome-solid) 85%, transparent);
    border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
    color: #ffe7a3;
    font-size: 12px;
    text-align: center;
    pointer-events: none;
  }
  .nf-energy-marker circle {
    fill: color-mix(in srgb, var(--nf-chrome-solid) 80%, transparent);
    stroke: #ffd75a;
    stroke-width: 2;
  }
  .nf-energy-marker-sel circle {
    stroke: var(--nf-accent);
    stroke-width: 3;
    fill: color-mix(in srgb, var(--nf-accent) 25%, var(--nf-chrome-solid));
  }
  .nf-energy-marker text {
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-energy-icon {
    font-size: 17px;
  }
  .nf-energy-name {
    font-size: 11px;
    font-weight: 700;
    fill: #ffd75a;
    paint-order: stroke;
    stroke: rgba(0, 0, 0, 0.65);
    stroke-width: 3px;
  }
  .nf-solar polygon {
    fill: color-mix(in srgb, #1b3a8f 75%, transparent);
    stroke: #9fb8ff;
    stroke-width: 1.5;
    cursor: move;
  }
  .nf-solar-sel polygon {
    fill: color-mix(in srgb, #1b3a8f 80%, transparent);
    stroke: #ffd75a;
    stroke-width: 2;
  }
  .nf-solar polygon.nf-solar-off {
    fill: transparent;
    stroke-dasharray: 4 4;
    stroke-width: 1.5;
  }
  .nf-solar-pick polygon {
    cursor: pointer;
  }
  .nf-roof-ridge line {
    stroke: #ffb547;
    stroke-width: 2.5;
    pointer-events: none;
  }
  .nf-roof-sel .nf-roof-ridge line {
    stroke: var(--nf-accent);
  }
  .nf-roof-sec text {
    fill: #ffd28a;
    font-size: 12px;
    font-weight: 700;
    text-anchor: middle;
    paint-order: stroke;
    stroke: rgba(0, 0, 0, 0.6);
    stroke-width: 3px;
    pointer-events: none;
  }
  .nf-tool-energy .nf-room,
  .nf-tool-energy [data-furniture],
  .nf-tool-energy [data-device],
  .nf-tool-energy [data-opening],
  .nf-tool-energy [data-free-wall],
  .nf-tool-energy [data-outdoor],
  .nf-tool-energy .nf-roof-layer,
  .nf-tool-roof .nf-room,
  .nf-tool-roof [data-furniture],
  .nf-tool-roof [data-device],
  .nf-tool-roof [data-opening],
  .nf-tool-roof [data-free-wall],
  .nf-tool-roof [data-outdoor] {
    pointer-events: none;
  }
  .nf-dev-area {
    margin: 10px 0 2px;
    color: var(--nf-muted);
    font-size: 12px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .nf-h3row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .nf-h3row h3 {
    margin-bottom: 0;
  }
  .nf-fix {
    min-height: 30px;
    padding: 4px 10px;
    font-size: 13px;
  }
  .nf-fix[aria-pressed="true"] {
    border-color: var(--nf-accent);
    color: var(--nf-accent);
  }
  .nf-lock {
    font-size: 13px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-hint-fixed {
    color: var(--nf-accent);
  }
  .nf-ctx {
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
    min-width: 170px;
    padding: 4px;
    border: 1px solid var(--nf-line);
    border-radius: 10px;
    background: var(--nf-panel, #111a2e);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  }
  .nf-ctx button {
    padding: 8px 12px;
    border: none;
    border-radius: 7px;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
  }
  .nf-ctx button:hover:not(:disabled) {
    background: color-mix(in srgb, var(--nf-accent) 16%, transparent);
  }
  .nf-ctx button:disabled {
    opacity: 0.45;
    cursor: default;
  }
  .nf-ctx-danger {
    color: var(--nf-danger, #ff6b7a) !important;
  }
  .nf-edge-hi {
    stroke: var(--nf-accent);
    stroke-width: 6;
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px var(--nf-accent));
  }
  .nf-free-wall .nf-hit {
    stroke: transparent;
    stroke-width: 18;
  }
  .nf-free-wall-line {
    stroke: transparent;
    stroke-width: 1;
  }
  .nf-free-wall-sel .nf-free-wall-line {
    stroke: var(--nf-accent);
    stroke-width: 2;
    stroke-dasharray: 6 4;
  }
  .nf-draft-wall {
    stroke-width: 4;
  }
  .nf-open-passage {
    stroke-dasharray: 4 4;
  }
  .nf-out-sel polygon {
    stroke: var(--nf-accent);
    stroke-width: 2;
    stroke-dasharray: none;
  }
  .nf-out text {
    fill: var(--nf-muted);
    font-size: 11px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-furn-lit .nf-furn-body {
    fill: rgba(255, 181, 71, 0.35);
    stroke: var(--nf-warm);
  }
  .nf-rotate {
    cursor: grab;
  }
  .nf-preview {
    position: fixed;
    z-index: 20;
    width: 180px;
    padding: 8px 8px 10px;
    border-radius: 16px;
    background: var(--nf-bg2);
    box-shadow: var(--nf-shadow), 0 0 0 1px var(--nf-line);
    text-align: center;
    pointer-events: none;
    animation: nf-pop 120ms ease-out;
  }
  @keyframes nf-pop {
    from {
      opacity: 0;
      transform: translateX(8px);
    }
  }
  .nf-preview img,
  .nf-preview-wait {
    display: block;
    width: 164px;
    height: 164px;
  }
  .nf-preview-wait {
    margin: 0 auto;
    border-radius: 12px;
    background: rgba(127, 127, 127, 0.1);
  }
  .nf-preview b {
    display: block;
    margin-top: 2px;
    font-size: 13px;
    color: #e8eeff;
  }
  .nf-lib-badge {
    margin-left: 4px;
    color: var(--nf-accent);
    vertical-align: -2px;
  }
  .nf-ext-teaser {
    display: grid;
    gap: 6px;
    margin: 12px 0;
    padding: 12px;
    border: 1px solid var(--nf-accent);
    border-radius: 12px;
    background: linear-gradient(135deg, color-mix(in srgb, var(--nf-accent) 8%, transparent), color-mix(in srgb, var(--nf-soft) 8%, transparent));
  }
  .nf-pin {
    border: 0;
    background: none;
    padding: 2px 6px;
    font-size: 17px;
    line-height: 1;
    color: var(--nf-muted);
    cursor: pointer;
  }
  .nf-pin-on {
    color: var(--nf-warm);
  }
  .nf-back {
    margin-bottom: 12px;
  }
  .nf-presets {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  }
  .nf-resize {
    cursor: nwse-resize;
  }
  .nf-resize rect {
    fill: var(--nf-accent);
    stroke: var(--nf-chrome-solid);
    stroke-width: 1.5;
  }
  .nf-code {
    display: block;
    font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
    padding: 6px 8px;
    border-radius: 8px;
    background: rgba(127, 127, 127, 0.12);
    user-select: all;
    word-break: break-all;
  }
  .nf-shift {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
  }
  .nf-shift input {
    width: 5.5em;
  }
  .nf-headroom {
    stroke: rgba(255, 214, 90, 0.55);
    stroke-width: 1;
    stroke-dasharray: 6 4;
    pointer-events: none;
  }
  .nf-headroom-label {
    font-size: 10px;
    fill: rgba(255, 214, 90, 0.75);
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-split-mark {
    stroke: color-mix(in srgb, var(--nf-accent) 90%, transparent);
    stroke-width: 2;
    pointer-events: none;
  }
  .nf-floor-menu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 8px 0;
    padding: 10px;
    border-radius: 12px;
    background: rgba(127, 127, 127, 0.1);
    max-width: 100%;
    box-sizing: border-box;
  }
  .nf-icon-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .nf-icon-row input {
    flex: 1;
    min-width: 0;
  }
  .nf-icon-row ha-icon {
    --mdc-icon-size: 22px;
    color: var(--nf-accent);
  }
  .nf-floor-menu .nf-btn {
    text-align: left;
    width: 100%;
    min-width: 0;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .nf-rotate line {
    stroke: var(--nf-accent);
    stroke-dasharray: 3 3;
  }
  .nf-rotate circle:not(.nf-hit) {
    fill: var(--nf-chrome-solid);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-rotate path {
    fill: none;
    stroke: var(--nf-accent);
    stroke-width: 1.5;
    stroke-linecap: round;
  }
  .nf-lib-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    padding: 6px 0;
    border: 0;
    background: none;
    font: inherit;
    cursor: pointer;
    text-align: left;
  }
  .nf-lib-toggle:hover {
    color: var(--nf-text);
  }
  .nf-lib-caret {
    width: 12px;
    color: var(--nf-accent);
  }
  .nf-lib-count {
    margin-left: auto;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
    opacity: 0.7;
  }
  .nf-lib-head {
    margin: 10px 0 0;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--nf-muted);
  }
  .nf-furn-front {
    stroke: var(--nf-accent);
    stroke-width: 2.5;
    vector-effect: non-scaling-stroke;
    opacity: 0.8;
    pointer-events: none;
  }
  .nf-furn text {
    fill: var(--nf-muted);
    font-size: 11px;
    text-anchor: middle;
    pointer-events: none;
  }
  .nf-furn-sel .nf-furn-body {
    fill: color-mix(in srgb, var(--nf-accent) 16%, transparent);
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open {
    cursor: grab;
  }
  .nf-open-gap {
    fill: var(--nf-chrome-solid);
    stroke: none;
  }
  .nf-open path,
  .nf-open line {
    fill: none;
    stroke-width: 1.6;
    stroke-linecap: round;
  }
  .nf-open-door path {
    stroke: var(--nf-warm);
    stroke-dasharray: 3 3;
  }
  .nf-open-front path,
  .nf-open-door line {
    stroke: var(--nf-warm);
    stroke-width: 3;
    stroke-dasharray: none;
  }
  .nf-open-door line.nf-open-pane {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open-garage line {
    stroke: var(--nf-warm);
    stroke-width: 3;
  }
  .nf-open-track {
    stroke: var(--nf-warm);
    stroke-dasharray: 4 4;
    opacity: 0.6;
  }
  .nf-open-window line {
    stroke: var(--nf-accent);
    stroke-width: 2;
  }
  .nf-open-sel .nf-open-gap {
    fill: color-mix(in srgb, var(--nf-accent) 25%, transparent);
  }
  .nf-open-sel path,
  .nf-open-sel line {
    stroke-width: 2.4;
  }
  .nf-bg-rotate {
    cursor: grab;
  }
  .nf-bg-ruler line {
    stroke: #ffb020;
    stroke-width: 2.5;
    stroke-dasharray: 6 4;
  }
  .nf-bg-ruler circle {
    fill: #ffb020;
    stroke: #1a1000;
    stroke-width: 1.5;
  }
  .nf-own-button {
    padding: 10px 0;
    border-top: 1px solid var(--nf-line);
  }
  .nf-own-button textarea {
    font: 12px/1.4 ui-monospace, monospace;
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    color: var(--nf-text);
    background: color-mix(in srgb, var(--nf-text) 4%, transparent);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
  }
  .nf-search {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: var(--nf-panel, #0d1424);
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    font-size: 14px;
    color: var(--nf-text);
    background: color-mix(in srgb, var(--nf-text) 4%, transparent);
    border: 1px solid var(--nf-line);
    border-radius: 8px;
    padding: 7px 9px;
    margin: 2px 0 6px;
  }
  .nf-more {
    font: inherit;
    font-size: 12px;
    color: var(--nf-muted);
    background: none;
    border: none;
    text-align: left;
    padding: 2px 26px 8px;
    cursor: pointer;
  }
  .nf-more:hover {
    color: var(--nf-accent);
  }
  .nf-dev-hidden .nf-dev-name {
    opacity: 0.45;
    text-decoration: line-through;
  }
  .nf-dev-extra {
    padding-left: 18px;
    font-size: 13px;
  }
  .nf-dev-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 8px;
    font-weight: 600;
  }
  .nf-notice {
    color: var(--nf-accent);
  }
  .nf-device-sel circle:not(.nf-hit) {
    stroke: var(--nf-accent);
    stroke-width: 3;
  }
  .nf-dev-row {
    align-items: center;
    cursor: default;
  }
  .nf-dev-row:hover {
    color: var(--nf-text);
  }
  .nf-dev-name {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
  }
  .nf-dev-name:disabled {
    cursor: default;
  }
  .nf-dev-name span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .nf-dev-name svg {
    flex: none;
  }
  .nf-link {
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    color: var(--nf-accent);
    background: none;
    border: none;
    padding: 4px 2px;
    cursor: pointer;
    white-space: nowrap;
  }
  .nf-wide-btn {
    width: 100%;
    margin-bottom: 6px;
  }
  .nf-device {
    cursor: grab;
  }
  .nf-wedge path,
  .nf-wedge circle:not(.nf-hit) {
    fill: color-mix(in srgb, var(--nf-accent) 12%, transparent);
    stroke: color-mix(in srgb, var(--nf-accent) 45%, transparent);
    stroke-width: 1;
    pointer-events: none;
  }
  .nf-wedge-sel path,
  .nf-wedge-sel > circle {
    fill: color-mix(in srgb, var(--nf-accent) 20%, transparent);
    stroke: var(--nf-accent);
  }
  .nf-wedge .nf-rotate circle {
    pointer-events: auto;
  }
  .nf-device circle:not(.nf-hit) {
    fill: #111a2e;
    stroke: var(--nf-soft);
    stroke-width: 1.5;
    vector-effect: non-scaling-stroke;
  }
  .nf-device path {
    fill: none;
    stroke: var(--nf-text);
    stroke-width: 2.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .nf-device-on circle:not(.nf-hit) {
    fill: var(--nf-warm);
    stroke: var(--nf-warm);
  }
  .nf-device-on path {
    stroke: #2a1a00;
  }
  .nf-muted {
    color: var(--nf-muted);
    font-variant-numeric: tabular-nums;
  }
  .nf-points {
    margin: 12px 0;
  }
  .nf-point {
    display: grid;
    grid-template-columns: 18px 1fr 1fr auto;
    gap: 6px;
    align-items: end;
    padding: 4px 0;
  }
  .nf-point-sel .nf-muted {
    color: var(--nf-accent);
  }
  .nf-point .nf-btn {
    min-height: 34px;
    padding: 4px 10px;
  }
  .nf-upload {
    position: relative;
    text-align: center;
    overflow: hidden;
  }
  .nf-upload input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
  }
  .nf-sub {
    margin: 8px 0 0;
    font-size: 12.5px;
    color: var(--nf-muted);
  }
  .nf-note {
    margin: 0;
    font-size: 12.5px;
    color: var(--nf-warm);
  }
`;var nd=["weather","energy","car","sound","screens","cameras"],wr="https://github.com/therealMRBK/NextFloor";var ni=class extends ue{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return Te(this.hass,e,t)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${wr}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${wr}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${wr}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="nf-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nf-ext-features">
          ${nd.map(e=>m`<div class="nf-ext-feature nf-ext-on">
              <b>✓ ${this.t(`feature_name_${e}`)}</b>
              <span class="nf-sub">${this.t(`feature_text_${e}`)}</span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}renderPacks(){let e=this.packs??[];return m`<section class="nf-ext-card">
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>m`<div class="nf-pack">
          <div>
            <b>${ye(t,this.hass?.language??"de")}</b>
            <span class="nf-sub">${this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.description?m`<span class="nf-sub">${t.description}</span>`:g}
          </div>
          ${t.builtin?m`<span class="nf-ext-state">${this.t("pack_builtin")}</span>`:this.isAdmin?m`<button class="nf-btn nf-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>`:g}
        </div>`)}
      ${this.isAdmin?m`<label class="nf-btn nf-primary nf-pack-import">
            ${this.t("pack_import")}
            <input type="file" accept=".nfpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
          </label>`:g}
      ${this._packMsg?m`<p class="nf-sub ${this._packMsg.ok?"nf-notice":"nf-pack-error"}">${this._packMsg.text}</p>`:g}
      <p class="nf-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,r=[...t.files??[]];if(t.value="",!r.length||!this.hass)return;let o=[],i=[];for(let a of r)try{let l=await Si(this.hass,await a.text());o.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},u=`pack_error_${c}`,h=this.t(u,{detail:d??String(l)});i.push(`${a.name}: ${h===u?this.t("pack_error_other",{detail:d??String(l)}):h}`)}o.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=r.length>1?[this.t("packs_imported_n",{n:o.length,total:r.length})]:[];this._packMsg={ok:i.length===0,text:[...s,...o,...i].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:ye(e,this.hass?.language??"de")}))||(await Mi(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[kt,jn,Me`
      .nf-updates {
        border-color: color-mix(in srgb, var(--nf-accent) 60%, transparent);
        background: color-mix(in srgb, var(--nf-accent) 8%, transparent);
      }
      .nf-updates p {
        margin: 4px 0;
      }
      .nf-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .nf-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .nf-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .nf-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--nf-accent) 4%, transparent);
      }
      .nf-offer:hover {
        border-color: var(--nf-accent);
      }
      .nf-offer img,
      .nf-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .nf-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--nf-accent);
      }
      .nf-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .nf-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .nf-offer-kind {
        color: var(--nf-accent);
        font-size: 12px;
      }
      :host {
        display: block;
        overflow: auto;
      }
      .nf-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .nf-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .nf-ext-head a {
        text-decoration: none;
      }
      .nf-ext-actions,
      .nf-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .nf-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .nf-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: var(--nf-chrome);
      }
      .nf-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--nf-soft);
      }
      .nf-ext-features {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .nf-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
      }
      .nf-ext-on {
        border-color: var(--nf-accent);
      }
      .nf-ext-state {
        color: var(--nf-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .nf-ext-link {
        color: var(--nf-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .nf-sub {
        color: var(--nf-soft);
        font-size: 13px;
      }
      .nf-notice {
        color: var(--nf-accent);
      }
      .nf-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-pack div {
        display: grid;
        gap: 2px;
      }
      .nf-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .nf-pack-error {
        color: var(--nf-danger);
      }
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",ni);var rd=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),xr=10,A=n=>Math.round(n*1e3)/1e3,od={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},ri=class extends ue{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new mr(100);lib=new cr(()=>this.requestUpdate());side=new br(()=>this.requestUpdate());sel=new _r(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=t,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,t){return Te(this.hass,e,t)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}freeWallActions(){return{update:e=>this.updateFreeWall(e),remove:()=>this.deleteFreeWall(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,t)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:fl(r,e,t)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),openExtensions:()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0})),packs:this.packs??[]}}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,t)=>this.deviceToFurniture(e,t),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,t)=>this.setOpeningPreset(e,t),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new sr({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:xn,storeImage:kn},readPicture:ja,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new pr({host:this.host,floorId:()=>e._floorId,setFloorId:t=>e._floorId=t,confirm:t=>confirm(t),refresh:()=>e.requestUpdate()})}canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,t)=>this.toWorld(e,t),scale:this._view.scale,floorId:this._floorId}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new nr({get hass(){return e.hass},get doc(){return e._doc},t:(t,r)=>e.t(t,r),adopt:t=>{e.setDoc(t),e._floorId=t.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:t=>e.side.notice=t,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(t,r)=>e.t(t,r),change:t=>e.change(t),replace:t=>e.setDoc(t)}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Pi(this.packs??[]),e.has("hass")&&this.hass&&!Xs(this.hass.language)&&Qs(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=t.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(h=>h.id===t);if(!l)continue;let[c,d]=to(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:d});let u=Zt(a,l,i);u&&Object.assign(l,u)}})}onDeviceMoved3d(e){let{id:t,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(d=>d.entity_id===t);if(!a)continue;let[l,c]=to(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,t=this.device;if(e){let r=Fn(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[i]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[i]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="nf-3d-bar">
        <span>${Ze(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Sn(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let r=V(t.entity_id),o=r==="light",i=r?Gt(r,this.floor?.height??2.5,o?t.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${C(this.hass,t.entity_id)}</span>
        ${o?m`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>m`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:g}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??i)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,r=U(t),o=null,i=(a,l,c,d,u=!1)=>{if(!c||u)return;let h=Gn(c,e.o,e.d);!h||!vo(c,d,h.u,h.s)||o&&o.t<=h.t||(o={id:a,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])i(a.id,!1,le(t,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,Ue(a),!!a.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let r=t.base,o=t.win?r.settings.roof.windows?.find(p=>p.id===t.id):void 0,i=t.win?o?Ue(o):void 0:r.settings.roof.solar?.find(p=>p.id===t.id);if(!i)return;let s=le(r,i),a=s?.unbounded?[s]:t.win?U(r):[...U(r),...$e(r)],l=null;for(let p of a){let f=Gn(p,e.o,e.d);f&&bo(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let c=l.face,d=.05,u=p=>A(Math.round(p/d)*d),h=Ce(c,{...i,face:c.key,u:u(l.u-t.du),v:u(l.s-t.ds),tilt:c.flat?i.tilt??15:i.tilt});t.moved=!0,this.change(p=>{if(t.win){let _=p.settings.roof.windows?.find(y=>y.id===t.id);_&&Object.assign(_,{face:c.key,...h});return}let f=p.settings.roof.solar?.find(_=>_.id===t.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
      ${this.houseTool?g:m`<div class="nf-seg nf-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this._wall3d="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this._wall3d="cut"}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <nf-view3d
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?he:this._tool==="roof"?[]:null}
        .selectedFurniture=${this.sel.furniture}
        .selectedDevice=${this.sel.device}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this.sel.furniture&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this.sel.device&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></nf-view3d>
    </div>`}updated(){for(let t of this.renderRoot.querySelectorAll("select option[selected]"))t.selected||(t.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())this.bg.ensureLoaded(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&this.history.record(t),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,r=!0){let o=structuredClone(t),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?t:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:r,oy:o}=this._view;return[e[0]*t+r,e[1]*t+o]}toWorld(e,t){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(t-i)/r]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?Q(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=t.x1-t.x0+2*r,i=t.z1-t.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}showPoint(e,t){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-t*r}}zoomAt(e,t,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:t-(t-i)*l,oy:r-(r-s)*l}}snap(e,t,r=!1){if(this._guides={},r)return e;let o=xr/this._view.scale,i=this.floor?.rooms??[],s=[];for(let f of i)f.points.forEach((_,y)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===y)||s.push(_)});let a=null,l=o;for(let f of s){let _=Math.hypot(f[0]-e[0],f[1]-e[1]);_<l&&(l=_,a=f)}if(a)return this._guides={point:a},[a[0],a[1]];for(let f of i)if(!(t&&f.id===t.roomId))for(let _=0;_<f.points.length;_++){let y=f.points[_],b=f.points[(_+1)%f.points.length],x=b[0]-y[0],v=b[1]-y[1],w=x*x+v*v;if(w<1e-9)continue;let $=((e[0]-y[0])*x+(e[1]-y[1])*v)/w;if($<=0||$>=1)continue;let S=[y[0]+$*x,y[1]+$*v],F=Math.hypot(S[0]-e[0],S[1]-e[1]),E=this._doc.settings.grid;Math.abs(v)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/E)*E,Math.min(y[0],b[0])),Math.max(y[0],b[0]))),Math.abs(x)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/E)*E,Math.min(y[1],b[1])),Math.max(y[1],b[1]))),F<l&&(l=F,a=S)}if(a)return this._guides={point:a},[A(a[0]),A(a[1])];let c=this._doc.settings.grid,d=[A(Math.round(e[0]/c)*c),A(Math.round(e[1]/c)*c)],u=o,h=o,p={};for(let f of s)Math.abs(f[0]-e[0])<u&&(u=Math.abs(f[0]-e[0]),d[0]=f[0],p.x=f[0]),Math.abs(f[1]-e[1])<h&&(h=Math.abs(f[1]-e[1]),d[1]=f[1],p.z=f[1]);return this._guides=p,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),r=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(r,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let r=null;t.kind==="vertex"||t.kind==="room"?r=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?r=["device",t.entityId]:t.kind==="opening"?r=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?r=["furniture",t.id]:t.kind==="wallmove"?r=["wall",t.id]:t.kind==="outdoor"&&(r=["outdoor",t.id]),!(!r||!this.isFixedItem(...r))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let r=this.localPoint(e);if(this.pointers.set(e.pointerId,r),this.pointers.size===2){this.drag&&rd.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:r};return}let o=this.toWorld(...r),i=e.target;if(this.bg.level&&this.isAdmin&&this.floor?.background){this.bg.tapLevel(o);return}if(this.bg.handlesShown&&this.floor.background&&i.closest("[data-bg-rotate]")){let v=this.floor.background,w=this.bg.picture(v.image_id),$=Ft(v,w?.aspect??1);this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(o[1]-$[1],o[0]-$[0]),rot:v.rotation??0};return}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&this.floor?.background){this.bg.tapRuler(o);return}if(this.bg.handlesShown&&this.floor.background&&!this.bg.edit&&(i.closest("[data-bg-handle]")||i.closest("[data-bg]"))){let v=this.floor.background;this.drag=i.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:o,bx:v.x,bz:v.z,base:this._doc,moved:!1};return}if(this.bg.edit&&this.isAdmin&&this.floor?.background){let v=this.floor.background;if(i.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(i.closest("[data-bg]")){this.drag={kind:"bgmove",start:o,bx:v.x,bz:v.z,base:this._doc,moved:!1};return}this.bg.edit=!1}if(this._tool==="wall"){let v=this.snap(o,void 0,e.altKey);this.drag={kind:"freewall",start:v,end:v};return}if(this._tool==="roof"||this._tool==="energy"){let v=i.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),w=i.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),$=i.closest("[data-roof]")?.getAttribute("data-roof"),S=this._tool==="energy"?i.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(S){this.roof.solarId=null,this.selectItem("furniture",S),this.drag=this.isAdmin?{kind:"furniture",id:S,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}let F=this._tool==="energy"?i.closest("[data-solar]")?.getAttribute("data-solar"):null,E=this._tool==="energy"?i.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(E&&this.isAdmin){this.drag={kind:"solarturn",id:E,base:this._doc,moved:!1};return}if(F){let I=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&F===this.roof.solarId&&I&&this.isAdmin){this.roof.toggleCell(I),this.drag={kind:"pan",last:r};return}F!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=F,this.roof.sectionId=null;let K=this._doc.settings.roof.solar?.find(id=>id.id===F),ie=K?le(this._doc,K)??void 0:void 0,Z=ie?this.faceHit(ie,o):null,Dt=K&&Z?{du:Z.u-K.u,ds:Number.isNaN(Z.s)?0:Z.s-K.v}:null;this.drag=this.isAdmin&&!K?.locked?{kind:"solarmove",id:F,start:o,startScreen:r,base:this._doc,moved:!1,grab:Dt}:{kind:"pan",last:r};return}let O=this._tool==="roof"?i.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(O){this.roof.windowId=O,this.roof.sectionId=null;let I=this._doc.settings.roof.windows?.find(Dt=>Dt.id===O),K=I?U(this._doc).find(Dt=>Dt.key===I.face):void 0,ie=K?un(K,o):null,Z=I&&ie?{du:ie.u-I.u,ds:ie.s-I.v}:null;this.drag=this.isAdmin&&!I?.locked?{kind:"solarmove",id:O,start:o,startScreen:r,base:this._doc,moved:!1,grab:Z,win:!0}:{kind:"pan",last:r};return}this._tool==="roof"&&(this.roof.windowId=null);let N=this._tool==="energy"?i.closest(".nf-energy-item")?.getAttribute("data-furniture"):null;if(N){this.roof.solarId=null,this.selectItem("furniture",N),this.drag=this.isAdmin?{kind:"furniture",id:N,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}if(this._tool==="energy"){this.selectItem("furniture",null),this.roof.solarId=null,this.drag={kind:"pan",last:r};return}if(w&&this.isAdmin){let[I,K]=w.split(":");this.drag={kind:"roofvertex",id:I,index:Number(K),base:this._doc,moved:!1}}else if(v&&this.isAdmin){let[I,K,ie]=v.split(":");this.drag={kind:"roofcorner",id:I,corner:[K==="1"?1:0,ie==="1"?1:0],base:this._doc,moved:!1}}else if($){let I=this.roof.isFixed(this._doc.settings.roof.sections?.find(K=>K.id===$));I&&this.roof.sectionId===$&&(this._fixedHint=!0),this.roof.sectionId=$,this.drag=this.isAdmin&&!I?{kind:"roofmove",id:$,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r}}else if(this.isAdmin){this.roof.sectionId=null;let I=this.snap(o,void 0,e.altKey);this.drag={kind:"rect",start:I,end:I,roof:!0}}else this.drag={kind:"pan",last:r};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let v=this.snap(o,void 0,e.altKey);this.drag={kind:"rect",start:v,end:v,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:r,last:r,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,r)||(this.drag={kind:"pan",last:r});return}let s=i.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:o,startScreen:r,base:this._doc,moved:!1};return}let a=i.closest("[data-opening]");if(a){let v=a.getAttribute("data-opening");this.selectItem("opening",v),this.drag=this.isAdmin?{kind:"opening",id:v,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}let l=i.closest("[data-resize]");if(l&&this.isAdmin){let[v,w,$]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:v,corner:[w==="1"?1:-1,$==="1"?1:-1],base:this._doc,moved:!1};return}let c=i.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=i.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=i.closest("[data-furniture]");if(u&&!i.closest("[data-vertex], [data-mid]")){let v=u.getAttribute("data-furniture");this.selectItem("furniture",v),this.drag=this.isAdmin?{kind:"furniture",id:v,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}let h=i.closest("[data-vertex]"),p=i.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this.sel.corner=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:this._doc,moved:!1};return}if(p&&this.room&&this.isAdmin){let v=Number(p.getAttribute("data-mid")),w=this.room.points,$=w[v],S=w[(v+1)%w.length],F=[A(($[0]+S[0])/2),A(($[1]+S[1])/2)],E=this._doc,O=this.room.id;this.change((N,I)=>{let K=I.rooms.find(Z=>Z.id===O);K.points.splice(v+1,0,F),K.wall_heights&&K.wall_heights.splice(v+1,0,K.wall_heights[v]??null),K.wall_thickness&&K.wall_thickness.splice(v+1,0,K.wall_thickness[v]??null);let ie=Math.hypot(F[0]-$[0],F[1]-$[1]);for(let Z of I.openings)Z.room_id!==O||Z.wall||(Z.edge>v?Z.edge+=1:Z.edge===v&&Z.offset>ie&&(Z.edge=v+1,Z.offset=A(Z.offset-ie)))},E,!1),this.sel.corner=v+1,this.drag={kind:"vertex",roomId:O,index:v+1,base:E,moved:!0};return}let f=i.closest("[data-wall-end]");if(f&&this.isAdmin){let[v,w]=f.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:v,end:w,start:o,startScreen:r,base:this._doc,moved:!1};return}let _=i.closest("[data-free-wall]");if(_){let v=_.getAttribute("data-free-wall");this.selectItem("wall",v),this.drag=this.isAdmin?{kind:"wallmove",id:v,end:null,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}let y=i.closest("[data-out-vertex]");if(y&&this.isAdmin){let[v,w]=y.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:v,index:Number(w),base:this._doc,moved:!1};return}let b=i.closest("[data-outdoor]");if(b&&!i.closest("[data-room]")&&!this.roomAt(o)){let v=b.getAttribute("data-outdoor");this.selectItem("outdoor",v),this.drag=this.isAdmin?{kind:"outdoor",id:v,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}let x=i.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(o);if(x){x!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",x),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:x,start:o,startScreen:r,base:this._doc,moved:!1}:{kind:"pan",last:r};return}this.selectItem("room",null),this.drag={kind:"pan",last:r}}onPointerMove(e){if(this.pressStart){let i=this.localPoint(e);Math.hypot(i[0]-this.pressStart[0],i[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let i=this.pinchState();i&&(this.zoomAt(i.dist/Math.max(1,this.pinch.dist),...i.mid),this._view={...this._view,ox:this._view.ox+i.mid[0]-this.pinch.mid[0],oy:this._view.oy+i.mid[1]-this.pinch.mid[1]},this.pinch=i);return}let r=this.toWorld(...t),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}switch(o.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-o.last[0],oy:this._view.oy+t[1]-o.last[1]},o.last=t;break;case"tap":(o.panning||Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])>6)&&(o.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-o.last[0],oy:this._view.oy+t[1]-o.last[1]}),o.last=t;break;case"rect":o.end=this.snap(r,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let i=this.snap(r,void 0,e.altKey);e.shiftKey&&(i=Math.abs(i[0]-o.start[0])>Math.abs(i[1]-o.start[1])?[i[0],o.start[1]]:[o.start[0],i[1]]),o.end=i,this.requestUpdate();break}case"wallmove":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=(o.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===o.id);if(!i)return;let s;if(o.end){let a=this.snap(r,void 0,e.altKey);s=o.end==="a"?{a,b:i.b}:{a:i.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((r[0]-o.start[0])/a)*a,c=Math.round((r[1]-o.start[1])/a)*a;s={a:[A(i.a[0]+l),A(i.a[1]+c)],b:[A(i.b[0]+l),A(i.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===o.id),s),o.base,!1);break}case"vertex":{let i=this.snap(r,{roomId:o.roomId,index:o.index},e.altKey);o.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===o.roomId).points[o.index]=i},o.base,!1);break}case"room":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===o.roomId);if(!i)return;let s=this.roomDelta(i,[r[0]-o.start[0],r[1]-o.start[1]],e.altKey),a=o.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>T([c.x,c.z],i.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(h=>h.id===o.roomId);u.points=i.points.map(([h,p])=>[A(h+s[0]),A(p+s[1])]),d.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:A(h.x+s[0]),z:A(h.z+s[1])}:h)},o.base,!1);break}case"roofmove":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=e.altKey?.01:this._doc.settings.grid,s=A(Math.round((r[0]-o.start[0])/i)*i),a=A(Math.round((r[1]-o.start[1])/i)*i),l=o.base.settings.roof.sections?.find(c=>c.id===o.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===o.id);d&&(Object.assign(d,{x0:A(l.x0+s),x1:A(l.x1+s),z0:A(l.z0+a),z1:A(l.z1+a)}),l.points&&(d.points=l.points.map(([u,h])=>[A(u+s),A(h+a)])))},o.base,!1);break}case"solarturn":{o.moved=!0;let i=o.base.settings.roof.solar?.find(h=>h.id===o.id),s=i?le(o.base,i):null;if(!i||!s)return;let[a,l]=on(s,i),c=Math.atan2(r[0]-a,-(r[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let u=cn(o.base,i,c);this.change(h=>{let p=h.settings.roof.solar?.find(f=>f.id===o.id);p&&Object.assign(p,u)},o.base,!1);break}case"solarmove":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.win?o.base.settings.roof.windows?.find(y=>y.id===o.id):void 0,s=o.win?i?Ue(i):void 0:o.base.settings.roof.solar?.find(y=>y.id===o.id),a=o.win?U(o.base):[...U(o.base),...this._floorId?$e(o.base,this._floorId):[]],l=s?le(o.base,s,a):null;if(!s||!l)return;let c=e.altKey?.01:.05,d=y=>A(Math.round(y/c)*c),u=l.unbounded?null:_o(a,r),h=l,p,f;if(u&&o.grab)h=u.face,p=d(u.u-o.grab.du),f=Number.isNaN(u.s)?u.face.key===s.face?s.v:Math.max(0,u.face.ls-1.5):d(u.s-o.grab.ds);else{let y=r[0]-o.start[0],b=r[1]-o.start[1],x=[l.es[0],l.es[2]],v=x[0]*x[0]+x[1]*x[1]||1;p=d(s.u+y*l.eu[0]+b*l.eu[2]),f=d(s.v+(y*x[0]+b*x[1])/v)}let _=Ce(h,{...s,face:h.key,u:p,v:f,tilt:h.flat?s.tilt??15:s.tilt});this.change(y=>{if(o.win){let x=y.settings.roof.windows?.find(v=>v.id===o.id);x&&Object.assign(x,{face:h.key,..._});return}let b=y.settings.roof.solar?.find(x=>x.id===o.id);b&&Object.assign(b,{face:h.key,..._},h.flat&&b.tilt==null?{tilt:15}:{})},o.base,!1);break}case"outvertex":{o.moved=!0;let i=this.snap(r,void 0,e.altKey),s=o.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===o.id);if(!s)return;let a=mt(s.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===o.id);if(!d)return;let u=s.points.map(f=>[...f]),h=o.index,p=s.points[h];u[h]=[A(i[0]),A(i[1])],a&&s.points.forEach((f,_)=>{_!==h&&(Math.abs(f[0]-p[0])<1e-6&&(u[_][0]=A(i[0])),Math.abs(f[1]-p[1])<1e-6&&(u[_][1]=A(i[1])))}),d.points=u},o.base,!1);break}case"bgmove":{o.moved=!0;let i=r[0]-o.start[0],s=r[1]-o.start[1];this.change((a,l)=>{l.background&&(l.background.x=A(o.bx+i),l.background.z=A(o.bz+s))},o.base,!1);break}case"bgrotate":{o.moved=!0;let i=this.floor?.background,s=i?this.bg.picture(i.image_id):void 0;if(!i||!s)break;let a=Ft(i,s.aspect),l=Ua(o.rot,o.start,Math.atan2(r[1]-a[1],r[0]-a[0]),e.shiftKey);this.change((c,d)=>{d.background&&(d.background.rotation=l)},o.base,!1);break}case"bgscale":{o.moved=!0;let i=this.floor?.background,s=i?this.bg.picture(i.image_id):void 0;if(!i||!s)break;let[a]=Ga(i,s.aspect,r),l=Math.max(.5,A(a));this.change((c,d)=>{d.background&&(d.background.width=l)},o.base,!1);break}case"roofvertex":{o.moved=!0;let i=this.snap(r,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===o.id);!a?.points||o.index>=a.points.length||(a.points[o.index]=[A(i[0]),A(i[1])],Object.assign(a,Xt(a.points)))},o.base,!1);break}case"roofcorner":{o.moved=!0;let i=this.snap(r,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===o.id);a&&(o.corner[0]?a.x1=A(i[0]):a.x0=A(i[0]),o.corner[1]?a.z1=A(i[1]):a.z0=A(i[1]))},o.base,!1);break}case"opening":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId),s=i?.openings.find(c=>c.id===o.id),a=s&&i?De(s,i.rooms,i.walls??[]):null;if(!s||!a)return;let l=this.dropOffset(a.room,a.edge,r,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(u=>u.id===o.id),{offset:l}),o.base,!1);break}case"furniture":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===o.id);if(!i)return;let s=e.altKey?.01:this._doc.settings.grid,a=A(Math.round((i.x+r[0]-o.start[0])/s)*s),l=A(Math.round((i.z+r[1]-o.start[1])/s)*s),c=i.rotation,d=e.altKey?null:this.snapToWall({...i,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((u,h)=>Object.assign(h.furniture.find(p=>p.id===o.id),{x:a,z:l,rotation:c}),o.base,!1);break}case"outdoor":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===o.id);if(!i)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((r[0]-o.start[0])/s)*s,l=Math.round((r[1]-o.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(u=>u.id===o.id).points=i.points.map(([u,h])=>[A(u+a),A(h+l)]),o.base,!1);break}case"resize":{o.moved=!0;let i=o.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===o.id);if(!i)return;let s=es(i,o.corner,r,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===o.id),s),o.base,!1);break}case"rotate":{o.moved=!0;let i=o.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===o.id);if(!i)return;let s=Math.atan2(-(r[0]-i.x),r[1]-i.z)*180/Math.PI,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===o.id),{rotation:s}),o.base,!1);break}case"aim":{o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===o.entityId);if(!i)return;let s=Math.atan2(-(r[0]-i.x),r[1]-i.z)*180/Math.PI,a=e.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(r[0]-i.x,r[1]-i.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===o.entityId),{rotation:s,reach:l}),o.base,!1);break}case"device":{if(!o.moved&&Math.hypot(t[0]-o.startScreen[0],t[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===o.entityId);if(!i)return;let s=e.altKey?.01:this._doc.settings.grid,a=A(Math.round((i.x+r[0]-o.start[0])/s)*s),l=A(Math.round((i.z+r[1]-o.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===o.entityId),{x:a,z:l}),o.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&rd.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let r=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[o,i]=t.start,[s,a]=t.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.hole?this.addHole(l,c):t.roof?this.roof.addSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,r]=e;return{dist:Math.hypot(t[0]-r[0],t[1]-r[1]),mid:[(t[0]+r[0])/2,(t[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,r){if(r)return t;let o=this._doc.settings.grid,i=[Math.round(t[0]/o)*o,Math.round(t[1]/o)*o],a=xr/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let u=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);u<a&&(a=u,i=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>T(e,o.points)).sort((o,i)=>fe(o.points)-fe(i.points))[0]?.id??null}addDraftPoint(e,t){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-t[0],s-t[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&fe(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let r=ht(t,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[t,r]=this._rectSize;t>.1&&r>.1&&(this.addRoom([e,ht(e,t,"right"),ht(ht(e,t,"right"),r,"down"),ht(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let t=this.sel.wall;t&&this.change((r,o)=>Object.assign((o.walls??[]).find(i=>i.id===t),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let t=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===t),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(od,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=od[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(r=>r.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this.sel.room=null}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:un(e,t)}planLayers(e,t){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return k`${Ca(r,this.bg,e)} ${Dl(r,this._size)} ${Ll(r)} ${t?Cl(r,t):g}
      ${e?k`${Bl(r,e,this.sel.outdoor)} ${Wl(r,e,this.sel.room,this.sel.edge)} ${Ol(r,e,this.sel.furniture)}
        ${Kl(r,e,this.sel.wall)} ${t?Il(r,e,t,this.sel.opening):g} ${Nl(r,e)}
        ${this._tool==="select"?Hl(r,e,this.sel.device):g}
        ${i?Ul(r,o,this.sel.corner):g}
        ${Vl(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?Gl(r,o):g}
        ${La(r,e)}`:g}
      ${this._tool==="roof"?k`${Fo(r,this.roof)}${Ia(r,this.roof)}`:this._tool==="energy"?k`${Fo(r,this.roof)}${Ha(r,this.roof)}${Da(r,this.floor,this.sel.furniture)}`:g}
      ${Al(r,s,this._tool,this._draft,this._cursor)} ${El(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor,{wall_exterior:t,wall_interior:r}=this._doc.settings;return e?Ee(e.rooms,{exterior:t,interior:r},e.walls??[]).walls:[]}edgeParts(e,t){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===t).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,t){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&t(i)})}edgeActions(){return{partsOf:(e,t)=>this.edgeParts(e,t),isOuter:(e,t)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===t)),setHeight:(e,t,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,t).length;this.changeRoom(e,a=>ql(a,t,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===t)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===t)||i.push({room_id:e.id,edge:t,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(d=>d.id===l.room_id);c&&Zl(c,l.edge,o)}})},setThickness:(e,t,r)=>this.changeRoom(e,o=>Jl(o,t,r)),cut:(e,t,r)=>{let o=this.edgeParts(e,t);this.changeRoom(e,i=>Yl(i,t,r,o))},moveCut:(e,t,r,o)=>{let i=this.edgeParts(e,t);this.changeRoom(e,s=>Xl(s,t,r,o,i))},join:(e,t,r,o)=>this.changeRoom(e,i=>Ql(i,t,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let t=Uc(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=jc(r.floors,t),this.setDoc(r),this._floorId=t.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let t=vr(this._doc,e,this.hass?.areas);if(t.length===0)return;let r=Ji(e,t,()=>P("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}moveFloor(e){let t=this._floorId;if(!t)return;let r=Zc(this._doc.floors,t,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:t=>this.selectItem("room",t),patch:t=>this.updateRoom(t),setArea:t=>this.setArea(t),setRect:(t,r)=>this.setRect(t,r),setCorner:(t,r,o)=>this.setPoint(t,r,o),removeCorner:t=>this.deleteVertex(t),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:t=>this.applyPackage(e,t),openSpots:()=>{let t=this.hass?pe(this.hass,e.area_id).filter(r=>r.startsWith("light.")):[];this.side.spots=Jc(e,t)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:tc(this.host,e,this.edgeActions()),climate:yl(this.host,e,t=>this.updateRoom(t)),corner:this.sel.corner}}applyPackage(e,t){if(!this.isAdmin)return;let r=Zs(e,t,()=>P("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let t=this.side.spots;if(!t||!this.isAdmin)return;let r=yr(e,t);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,t){if(!this.floor)return;let r=Ya(e,t);this.change((o,i)=>i.walls=[...i.walls??[],r]),this.selectItem("wall",r.id)}addHole(e,t){if(!this.floor)return;let r=Ja(e,t);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t=el(e);this.change((r,o)=>o.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t=tl(e);this.change((r,o)=>o.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=Oc(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(t)),this.sel.room=t.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,r)=>Ic(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=Hc(e);this.change((r,o)=>o.rooms.push(t)),this.sel.room=t.id}deleteVertex(e){let t=this.room;t&&(this.change((r,o)=>Dc(o,t.id,e)),this.sel.corner=null)}nudgeSelection(e,t){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?Pc(r,i,e,t):Ht;return s===Ht?!1:(s!==Xo&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let r=this.room,o=nl(e,this._doc,t,r?ce(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let t=this.furnitureItem;t&&this.isAdmin&&this.updateFurniture({rotation:ol(t.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t=rl(e);this.change((r,o)=>o.furniture.push(t)),this.selectItem("furniture",t.id)}vehicleToSpot(e){if(!this.isAdmin)return;let t=il(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(t)}),this.selectItem("furniture",t.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let r=sl(e,t);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let r=al(e,t);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===t)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",t)}placeDevices(e){let t=this.room;!t||e.length===0||!this.isAdmin||this.change((r,o)=>cl(r,o,t,e))}removeDevice(e){this.change(t=>ll(t,e))}centreDevice(){let e=this.device,t=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!t)return;let[r,o]=dl(t);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let r=Vc(e,t.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,t){!this.isAdmin||!e&&!t||(this.change(r=>Kc(r,this.shiftScope(),e,t)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Gc(e,this.shiftScope()))}setArea(e){let t=this.room;t&&this.updateRoom(Bc(t,e,this.hass?.areas??{}))}setRect(e,t){let r=this.room,o=r?Lc(r,e,t):null;o&&this.updateRoom({points:o})}setPoint(e,t,r){let o=this.room,i=o?Cc(o,e,t,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,t){this._openingPreset=t,this.updateOpening(hl(e,t))}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,t)=>this.openEnergyDevice(e,t),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,t){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",t.id),this.showPoint(t.x,t.z)}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=Tc(e,this._doc,t,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Ac({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:t=>this.addEnergyDevice(t),setField:(t,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===t);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return Rc(this.roofDeps(),e);let t=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&he.includes(o.type)):void 0;if(t)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${gn(this.host,t,this.furnitureActions())}`;let r=this.energyActions();return m`${Ea(this.host,r)}${Mc(this.roofDeps())}${Aa(this.host,r)}${za(this.host,r)}${Ta(this.host)}`}fixItem(e,t,r){if(e)switch(t){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,t){return Mn(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,t);this.change((o,i)=>{let s=this.fixItem(i,e,t);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...t),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),d=o("data-outdoor"),u=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:d&&!u?i=["outdoor",d]:u&&(i=["room",u]),!i){this._ctx=null;return}let[h,p]=i;this.selectItem(h,p),(h==="opening"||h==="furniture")&&(this.sel.room=this.sel.room??u),this._ctx={x:t[0],y:t[1],kind:h,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let t=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:g}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:g}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return g;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:g;let r=this.isFixedItem(e,t);return m`<button class="nf-btn nf-fix" aria-pressed=${r} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${r?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}dropOffset(e,t,r,o,i){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return ul(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,t){this.side.notice=null,t&&(this._sideOpen=!0),this.sel.select(e,t,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){return this.sel.opening?this.floor?.openings.find(e=>e.id===this.sel.opening):void 0}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,t){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let y=De({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!y)continue;let[b,x]=this.toScreen(_.a),[v,w]=this.toScreen(_.b),$=(v-b)**2+(w-x)**2||1,S=Math.min(1,Math.max(0,((t[0]-b)*(v-b)+(t[1]-x)*(w-x))/$)),F=Math.hypot(t[0]-b-(v-b)*S,t[1]-x-(w-x)*S),E=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],O=r.rooms.find(N=>N.points.length>=3&&T(E,N.points));F<xr*2.2&&(!o||F-1<o.d)&&(o={room:y.room,edge:0,d:F-1,wall:_.id,roomId:O?.id??_.id})}for(let _ of r.rooms)for(let y=0;y<_.points.length;y++){let[b,x]=this.toScreen(_.points[y]),[v,w]=this.toScreen(_.points[(y+1)%_.points.length]),$=(v-b)**2+(w-x)**2||1,S=Math.min(1,Math.max(0,((t[0]-b)*(v-b)+(t[1]-x)*(w-x))/$)),F=Math.hypot(t[0]-b-(v-b)*S,t[1]-x-(w-x)*S),E=F-(_.id===this.sel.room?.5:0);F<xr*2.2&&(!o||E<o.d)&&(o={room:_,edge:y,d:E})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=pt[e],h=u.type,p=A(Math.min(u.width,Math.max(.3,d-.1))),f={id:P("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...t),p,!1),width:p,type:h,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((_,y)=>y.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let t=this.sel.opening;this.change((r,o)=>Object.assign(o.openings.find(i=>i.id===t),e))}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,r)=>r.openings=r.openings.filter(o=>o.id!==e)),this.sel.opening=null)}snapToWall(e){return this.floor?Zt(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let t=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===t),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:r}=xs(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=ks(r);this.change((i,s)=>{s.rooms=t,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:H(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}updateFloor(e){this.change((t,r)=>Object.assign(r,e))}updateRoom(e){let t=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===t),e))}render(){let e=this.floor,t=e?Ee(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${Fl(this.host,this.lib.preview)}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(r=>m`<button
                  aria-pressed=${this._tool===r}
                  ?disabled=${!e||!this.isAdmin&&r!=="select"}
                  @click=${()=>{this._tool=r,this._draft=[],this._cursor=null,this._sideOpen=r!=="select"}}
                >
                  ${this.t(`tool_${r}`)}
                </button>`)}
            </div>
            <div class="nf-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?m`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:g}
            </div>
            ${t?.warnings.length?m`<span class="nf-warn">${this.t("overlap_warning")}</span>`:g}
          </div>
          <div class="nf-stage-pair ${this._split?"nf-split":""}" style=${this._split&&!this.narrow?`--nf-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool?m`<div class="nf-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:g}
            <svg
              class="nf-plan nf-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.planLayers(e,t?.walls??null)}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint?"nf-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?m`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:g}
          ${this._split?this.render3d():g}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("nextfloor.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?m`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:m`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this.sel.furniture||this.sel.device||this.sel.opening?m`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:g}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:m`<aside class="nf-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?g:m`<div class="nf-pin-row">
      ${e?m`<button class="nf-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:g}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this.room,r=this.isAdmin;if(this._tool==="roof")return _c(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return m`${this.furnitureItem?gn(this.host,this.furnitureItem,this.furnitureActions()):g} ${Rl(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?gn(this.host,this.furnitureItem,this.furnitureActions()):this.opening?Uo(this.host,this.opening,this.openingActions()):this.device?Vo(this.host,this.device,this.deviceActions()):this.outdoorArea?To(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?Po(this.host,this.freeWall,this.freeWallActions()):null;return o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(t?"back_to_room":"back_to_floor",{room:t?.name??""})}</button>
        ${o}`:t&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${ti(this.host,this.side,t,this.roomActions(t))} ${Io(this.host,this.side,t,this.deviceListActions())}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${Xc(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?pl(this.host,this.measureState(),this.measureActions()):this.freeWall?Po(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?To(this.host,this.outdoorArea,this.outdoorActions()):this.opening?Uo(this.host,this.opening,this.openingActions()):this.furnitureItem?gn(this.host,this.furnitureItem,this.furnitureActions()):this.device?Vo(this.host,this.device,this.deviceActions()):t?m`${ti(this.host,this.side,t,this.roomActions(t))} ${Io(this.host,this.side,t,this.deviceListActions())}`:e?ed(this.host,e,{select:i=>this.selectItem("room",i)}):g}
      ${r?ca(this.host,()=>this.paneView()):g} ${r?la(this.host):g}
      ${Pa(this.host)}
      ${r&&!1?da(this.host):g}
      ${e&&r?qa(this.host,this.bg,e):g} ${r?wa(this.host,this.settingsActions):g}
      ${r?_a(this.host,this.backup):g}
    `}openingIsExterior(e){let t=this.floor,r=t?De(e,t.rooms,t.walls??[]):null;if(!t||!r)return!1;let o=Ee(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return Dn(o.walls,e,r)?.wall.exterior??!1}paneView(){let t=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!t)return null;let r=t.target;return{theta:A(t.theta),phi:A(t.phi),radius:A(t.radius),...r?{target:{x:A(r.x),y:A(r.y),z:A(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let r of t.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[kt,jn,td]};customElements.get("nf-editor")||customElements.define("nf-editor",ri);export{ri as NfEditor};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
lit-html/directive.js:
lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
