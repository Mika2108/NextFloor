/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var wn=globalThis,xn=wn.ShadowRoot&&(wn.ShadyCSS===void 0||wn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Er=Symbol(),hi=new WeakMap,Lt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Er)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xn&&e===void 0){let r=t!==void 0&&t.length===1;r&&(e=hi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&hi.set(t,e))}return e}toString(){return this.cssText}},pi=n=>new Lt(typeof n=="string"?n:n+"",void 0,Er),$e=(n,...e)=>{let t=n.length===1?n[0]:e.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+n[i+1],n[0]);return new Lt(t,n,Er)},fi=(n,e)=>{if(xn)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let r=document.createElement("style"),o=wn.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,n.appendChild(r)}},Ar=xn?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return pi(t)})(n):n;var{is:yu,defineProperty:wu,getOwnPropertyDescriptor:xu,getOwnPropertyNames:ku,getOwnPropertySymbols:$u,getPrototypeOf:Su}=Object,kn=globalThis,mi=kn.trustedTypes,Mu=mi?mi.emptyScript:"",Ru=kn.reactiveElementPolyfillSupport,Ct=(n,e)=>n,zr={toAttribute(n,e){switch(e){case Boolean:n=n?Mu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},_i=(n,e)=>!yu(n,e),gi={attribute:!0,type:String,converter:zr,reflect:!1,useDefault:!1,hasChanged:_i};Symbol.metadata??=Symbol("metadata"),kn.litPropertyMetadata??=new WeakMap;var ze=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=gi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&wu(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){let{get:o,set:i}=xu(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??gi}static _$Ei(){if(this.hasOwnProperty(Ct("elementProperties")))return;let e=Su(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ct("properties"))){let t=this.properties,r=[...ku(t),...$u(t)];for(let o of r)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(let[t,r]of this.elementProperties){let o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let o of r)t.unshift(Ar(o))}else e!==void 0&&t.push(Ar(e));return t}static _$Eu(e,t){let r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){let r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){let i=(r.converter?.toAttribute!==void 0?r.converter:zr).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:zr;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,r,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??_i)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},ze[Ct("elementProperties")]=new Map,ze[Ct("finalized")]=new Map,Ru?.({ReactiveElement:ze}),(kn.reactiveElementVersions??=[]).push("2.1.2");var Lr=globalThis,bi=n=>n,$n=Lr.trustedTypes,vi=$n?$n.createPolicy("lit-html",{createHTML:n=>n}):void 0,Si="$lit$",Ve=`lit$${Math.random().toFixed(9).slice(2)}$`,Mi="?"+Ve,Fu=`<${Mi}>`,Ye=document,Bt=()=>Ye.createComment(""),Wt=n=>n===null||typeof n!="object"&&typeof n!="function",Cr=Array.isArray,Eu=n=>Cr(n)||typeof n?.[Symbol.iterator]=="function",Tr=`[ 	
\f\r]`,Vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yi=/-->/g,wi=/>/g,Ze=RegExp(`>|${Tr}(?:([^\\s"'>=/]+)(${Tr}*=${Tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xi=/'/g,ki=/"/g,Ri=/^(?:script|style|textarea|title)$/i,Vr=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),m=Vr(1),k=Vr(2),ef=Vr(3),Te=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),$i=new WeakMap,qe=Ye.createTreeWalker(Ye,129);function Fi(n,e){if(!Cr(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return vi!==void 0?vi.createHTML(e):e}var Au=(n,e)=>{let t=n.length-1,r=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=Vt;for(let a=0;a<t;a++){let l=n[a],c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===Vt?u[1]==="!--"?s=yi:u[1]!==void 0?s=wi:u[2]!==void 0?(Ri.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Ze):u[3]!==void 0&&(s=Ze):s===Ze?u[0]===">"?(s=o??Vt,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Ze:u[3]==='"'?ki:xi):s===ki||s===xi?s=Ze:s===yi||s===wi?s=Vt:(s=Ze,o=void 0);let p=s===Ze&&n[a+1].startsWith("/>")?" ":"";i+=s===Vt?l+Fu:d>=0?(r.push(c),l.slice(0,d)+Si+l.slice(d)+Ve+p):l+Ve+(d===-2?a:p)}return[Fi(n,i+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Nt=class n{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Au(e,t);if(this.el=n.createElement(c,r),qe.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=qe.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Si)){let h=u[s++],p=o.getAttribute(d).split(Ve),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:f[2],strings:p,ctor:f[1]==="."?Or:f[1]==="?"?Dr:f[1]==="@"?Hr:ct}),o.removeAttribute(d)}else d.startsWith(Ve)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Ri.test(o.tagName)){let d=o.textContent.split(Ve),h=d.length-1;if(h>0){o.textContent=$n?$n.emptyScript:"";for(let p=0;p<h;p++)o.append(d[p],Bt()),qe.nextNode(),l.push({type:2,index:++i});o.append(d[h],Bt())}}}else if(o.nodeType===8)if(o.data===Mi)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Ve,d+1))!==-1;)l.push({type:7,index:i}),d+=Ve.length-1}i++}}static createElement(e,t){let r=Ye.createElement("template");return r.innerHTML=e,r}};function lt(n,e,t=n,r){if(e===Te)return e;let o=r!==void 0?t._$Co?.[r]:t._$Cl,i=Wt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(n),o._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=o:t._$Cl=o),o!==void 0&&(e=lt(n,o._$AS(n,e.values),o,r)),e}var Pr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Ye).importNode(t,!0);qe.currentNode=o;let i=qe.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Kt(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new Ir(i,this,e)),this._$AV.push(c),l=r[++a]}s!==l?.index&&(i=qe.nextNode(),s++)}return qe.currentNode=Ye,o}p(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Kt=class n{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lt(this,e,t),Wt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Te&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Eu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nt.createElement(Fi(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Pr(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=$i.get(e.strings);return t===void 0&&$i.set(e.strings,t=new Nt(e)),t}k(e){Cr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,o=0;for(let i of e)o===t.length?t.push(r=new n(this.O(Bt()),this.O(Bt()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let r=bi(e).nextSibling;bi(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,t=this,r,o){let i=this.strings,s=!1;if(i===void 0)e=lt(this,e,t,0),s=!Wt(e)||e!==this._$AH&&e!==Te,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=lt(this,a[r+l],t,l),c===Te&&(c=this._$AH[l]),s||=!Wt(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Or=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Dr=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Hr=class extends ct{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=lt(this,e,t,0)??g)===Te)return;let r=this._$AH,o=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ir=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}};var zu=Lr.litHtmlPolyfillSupport;zu?.(Nt,Kt),(Lr.litHtmlVersions??=[]).push("3.3.3");var Ei=(n,e,t)=>{let r=t?.renderBefore??e,o=r._$litPart$;if(o===void 0){let i=t?.renderBefore??null;r._$litPart$=o=new Kt(e.insertBefore(Bt(),i),i,void 0,t??{})}return o._$AI(n),o};var Br=globalThis,ae=class extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ei(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};ae._$litElement$=!0,ae.finalized=!0,Br.litElementHydrateSupport?.({LitElement:ae});var Tu=Br.litElementPolyfillSupport;Tu?.({LitElement:ae});(Br.litElementVersions??=[]).push("4.2.2");var Pe=(n,e,t={})=>n.callWS({type:`nextfloor/${e}`,...t});async function Sn(n,e){return(await Pe(n,"image/get",{image_id:e})).data}async function Mn(n,e,t){await Pe(n,"image/set",{image_id:e,data:t})}async function Ai(n){return(await Pe(n,"history/list")).snapshots}async function zi(n){await Pe(n,"history/snapshot")}async function Ti(n,e){return(await Pe(n,"history/restore",{snapshot_id:e})).revision}var Pi=(n,e)=>Pe(n,"packs/import",{pack:e});async function Oi(n,e){await Pe(n,"packs/remove",{pack_id:e})}var Di=n=>Pe(n,"backup/export"),Hi=(n,e,t)=>Pe(n,"backup/import",{building:e,packs:t});var Wr=n=>n.slice(0,n.indexOf(".")),Pu={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},L=n=>Pu[Wr(n)]??null,Ii=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Li=new Set(["light","switch","fan"]),ut=n=>n!==null&&n!=="scene"&&n!=="script",dt=n=>!n||n.state==="unavailable"||n.state==="unknown";function H(n,e,t){let r=n?.states[e]?.attributes.friendly_name??n?.entities?.[e]?.name??e;if(!t||r.length<=t.length+1||!r.toLowerCase().startsWith(`${t.toLowerCase()} `))return r;let o=r.slice(t.length+1);return o[0].toUpperCase()+o.slice(1)}var Ci=n=>!!n&&n.entity_id.startsWith("sensor.")&&n.attributes.device_class==="enum";function Gt(n,e,t=null){if(n==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(n==="light"&&t==="floor")return 1.95;if(n==="light"&&t==="table")return 1.25;if(n==="light"&&t==="wall")return 1.95;switch(n){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Ou=[],Rn=new Map,Du=0,_e=(n,e)=>`pack:${n}:${e}`,Xe=n=>n.startsWith("pack:");function Bi(n){Ou=n,Rn=new Map;for(let e of n)for(let t of e.items)Rn.set(_e(e.id,t.id),t);Du+=1}var Hu={};function J(n){if(!Xe(n))return;let e=Rn.get(n);if(e)return e;let[,t,...r]=n.split(":"),o=Hu[t];return o?Rn.get(_e(o,r.join(":"))):void 0}var Wi=n=>J(n)?.parts.find(e=>e.screen),Vi=.06;function Ni(n){let e=J(n);if(!e)return!1;let[t,r,o]=e.size;return e.parts.filter(i=>i.screen).some(i=>{let[s,a]=[i.w*t,i.d*r,i.h*o].sort((l,c)=>c-l);return a>=Vi&&s>=Vi})}function Be(n){return Oe[n]??J(n)?.size??[.6,.6,.8]}function Qe(n){let e=J(n);return ji.has(n)||!!e?.electric||!!e?.light}function Se(n,e){return n.name[e.split("-")[0]]??n.name.en??Object.values(n.name)[0]??n.id}var Iu={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace",fitness:"Fitness",fahrzeuge:"Vehicles"};function be(n,e){if(e.split("-")[0]==="de")return n.name;let t=/^nextfloor\.(.+)$/.exec(n.id)?.[1];return t&&Iu[t]||n.name}function Fn(n,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Ki;if(e.type==="led_strip")return Math.max(0,n.height-.04-Math.max(.02,e.h));let t=J(e.type);if(!t)return Gi(e);switch(t.mount){case"surface":return Ui(n,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,n.height-e.h);default:return 0}}var Zi=["always","no_power","never"],qi=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Yi=["navigate","more_info","service","fire_dom_event"];function En(n,e,t){return n?e?!!t.lock_plan:!!n.locked:!1}var Xi=["rain","snow","fog","clouds","lightning","sky"],Qi=["rain","snow","clouds","lightning","sky"],Ji=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Nr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Kr(n){return n==="hedge"||n==="fence"||n==="pergola"}var es=["x","-x","z","-z"];function Lu(n,e,t){let r=n.slope??0;if(!r||n.type==="pool")return 0;let o=n.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of n.points){let d=i(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return r*l}function Cu(n,e,t,r){return ts(n)+(e.offset??0)+Nr[e.type]-Lu(e,t,r)}function ts(n){return n.elevation>.3?0:-.2}function ns(n,e,t){let r=(n.outdoor??[]).filter(i=>!Kr(i.type)&&i.type!=="pool"&&A([e,t],i.points)),o=[...r].reverse().find(i=>i.cut)??r[0];return o?Cu(n,o,e,t):ts(n)}var Vu={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},rs=["wood","oak","tiles","carpet","stone","concrete"],os={type:"none",pitch:35,overhang:.4},Bu={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...os}};function is(n,e,t){return{id:n,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Wu=2.75;function ss(n,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Wu*100)/100;let t=n.reduce((r,o)=>!r||o.elevation>r.elevation?o:r,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function as(n,e,t){let r=n.rooms.flatMap(a=>a.points.map(l=>l[0])),o=n.rooms.flatMap(a=>a.points.map(l=>l[1])),i=r.length?Math.ceil(Math.max(...r))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return e.map((a,l)=>{let c=i+l%3*4.5,u=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,u],[c+4,u],[c+4,u+3],[c,u+3]],floor_material:"wood"}})}function ls(n,e,t,r){let o=n.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=e,c=n.x-a*(n.w/2)*i+l*(n.d/2)*s,u=n.z-a*(n.w/2)*s-l*(n.d/2)*i,d=t[0]-c,h=t[1]-u,p=b=>Math.max(.1,Math.round(b/r)*r),f=p((d*i+h*s)*a),_=p((-d*s+h*i)*l),v=b=>Math.round(b*1e3)/1e3;return{x:v(c+a*(f/2)*i-l*(_/2)*s),z:v(u+a*(f/2)*s+l*(_/2)*i),w:v(f),d:v(_)}}var An=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],cs={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},le=["meter","inverter","home_battery","wallbox","grid_point"],us=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ki=1.75;function zn(n){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(n.type)?!1:J(n.type)?.mount!=="ceiling"}function q(n){return us.has(n)||!!J(n)?.light}var Nu=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ds(n,e,t,r=0){let o=Z(n.points),i=o.x1-o.x0-2*r,s=o.z1-o.z0-2*r,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let u=[Math.round((o.x0+r+i/t*(c+.5))*1e3)/1e3,Math.round((o.z0+r+s/e*(l+.5))*1e3)/1e3];A(u,n.points)&&a.push(u)}return a}function ht(n,e,t){let r=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[r(n[0]+o*e),r(n[1]+i*e)]}function Gi(n){switch(n.type){case"home_battery":return n.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-n.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Ui(n,e,t){let r=0;for(let o of n.furniture)!(Nu.has(o.type)||J(o.type)?.surface)||!A([e,t],Zr(o))||(r=Math.max(r,o.h));return r}var ji=new Set([...us,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Oe={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Gr=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Ur=["standard","bars","glass_wall"];function pt(n,e){return n.type==="door"?n.style&&Gr.includes(n.style)?n.style:e?"front":"interior":n.style&&Ur.includes(n.style)?n.style:"standard"}function hs(n,e,t,r){if(e!=="sidelight"&&e!=="sidelights")return null;let o=e==="sidelights",i=n-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=r.sidelight_width??a,c=o?r.sidelight_width2??r.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let u=i-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return o?{panels:[[.02,.02+l],[n-.02-c,n-.02]],x0:.02+l,x1:n-.02-c}:(t?!!r.sidelight_hinge:!r.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:n-.02}:{panels:[[n-.02-l,n-.02]],x0:.02,x1:n-.02-l}}function jr(n){return n==="front"||n==="front_glass"||n==="sidelight"||n==="sidelights"}var ft={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Tn(n){if(n.type==="garage")return"garage";if(n.type==="window"&&n.style==="glass_wall")return"glass_wall";let e=n.leaves===2;return n.type==="door"?!e&&n.style&&jr(n.style)?"front":e?"door_double":"door":n.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Pn(n){n.energy={...Vu,...n.energy??{}},n.presence=n.presence??[],n.settings={...Bu,...n.settings,roof:{...os,...n.settings?.roof??{}}};for(let e of n.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(r=>({...r,panel:r.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),e.furniture=e.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let t=e.placements.filter(r=>r.entity_id.startsWith("light."));if(t.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=r[o.mount??"ceiling"],[s,a,l]=Oe[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return n}function T(n){return`${n}_${Math.random().toString(36).slice(2,10)}`}function re(n){let e=0;for(let t=0;t<n.length;t++){let[r,o]=n[t],[i,s]=n[(t+1)%n.length];e+=r*s-i*o}return e/2}function ce(n){return Math.abs(re(n))}function ie(n){let e=re(n);if(Math.abs(e)<1e-9){let o=n.length||1;return[n.reduce((i,s)=>i+s[0],0)/o,n.reduce((i,s)=>i+s[1],0)/o]}let t=0,r=0;for(let o=0;o<n.length;o++){let[i,s]=n[o],[a,l]=n[(o+1)%n.length],c=i*l-a*s;t+=(i+a)*c,r+=(s+l)*c}return[t/(6*e),r/(6*e)]}function mt(n){if(n.length!==4)return!1;for(let e=0;e<4;e++){let[t,r]=n[e],[o,i]=n[(e+1)%4];if(Math.abs(t-o)>1e-6&&Math.abs(r-i)>1e-6)return!1}return!0}function Z(n){let e=1/0,t=1/0,r=-1/0,o=-1/0;for(let[i,s]of n)e=Math.min(e,i),t=Math.min(t,s),r=Math.max(r,i),o=Math.max(o,s);return{x0:e,z0:t,x1:r,z1:o}}function Zr(n){let e=n.rotation*Math.PI/180,t=Math.cos(e),r=Math.sin(e),o=n.w/2,i=n.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[n.x+s*t-a*r,n.z+s*r+a*t])}function A(n,e){let t=!1;for(let r=0,o=e.length-1;r<e.length;o=r++){let[i,s]=e[r],[a,l]=e[o];s>n[1]!=l>n[1]&&n[0]<(a-i)*(n[1]-s)/(l-s)+i&&(t=!t)}return t}var ps={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ku=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Gu=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Uu=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),ju=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function gt(n,e){let t=n.entities?.[e];return t&&(t.area_id||(t.device_id?n.devices?.[t.device_id]?.area_id:null))||null}var gs=(n,e)=>{let t=n.entities?.[e];return!!(t?.hidden||t?.entity_category)};function fs(n,e){let t=L(e),r=n.states[e];if(!t||!r||gs(n,e))return!1;let o=r.attributes.device_class;return t==="sensor"?o?Ku.has(o):Gu.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?o?Uu.has(o):!!n.entities?.[e]?.area_id:!0}function Zu(n,e){let t=n.states[e];return L(e)!=="sensor"||!t?.attributes.unit_of_measurement||gs(n,e)||ju.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||dt(t)}var On=(n,e)=>e.startsWith("sensor.")&&n.states[e]?.attributes.device_class==="power",ms=null;function qr(n,e){let t=n.get(e);return t||n.set(e,t=[]),t}function qu(n){let e=new Map,t=new Map,r=new Map,o=new Map,i=[],s=c=>{(fs(n,c)||Zu(n,c))&&ut(L(c))&&i.push(c)};for(let[c,u]of Object.entries(n.entities??{})){let d=u.device_id;d&&u.area_id&&(o.get(d)??o.set(d,new Set).get(d)).add(u.area_id),d&&On(n,c)&&qr(t,d).push(c),d&&!u.hidden&&!u.entity_category&&(r.get(d)??r.set(d,new Set).get(d)).add(Wr(c));let h=gt(n,c);h===null?s(c):fs(n,c)&&qr(e,h).push(c)}if(n.entities)for(let c of Object.keys(n.states))n.entities[c]||s(c);let a=c=>Ii.indexOf(L(c));i.sort((c,u)=>a(c)-a(u)||H(n,c).localeCompare(H(n,u)));for(let[c,u]of e){let d=n.areas?.[c]?.name;u.sort((h,p)=>a(h)-a(p)||H(n,h,d).localeCompare(H(n,p,d)))}let l=new Set;for(let[c,u]of o)u.size>1&&l.add(c);return{entities:n.entities,devices:n.devices,states:n.states,stateCount:Object.keys(n.states).length,byArea:e,powerByDevice:t,withoutArea:i,domainsByDevice:r,hubs:l}}function _t(n){let e=ms;return e&&e.entities===n.entities&&e.devices===n.devices&&(e.states===n.states||(e.states=n.states,Object.keys(n.states).length===e.stateCount))?e:ms=qu(n)}function ue(n,e){return!e||!n.entities?[]:_t(n).byArea.get(e)??[]}function _s(n,e){if(!n.entities)return[];let t=[];for(let[r,o]of _t(n).byArea){let i=o.filter(s=>ut(L(s)));r!==e&&i.length>0&&t.push({areaId:r,name:n.areas?.[r]?.name??r,ids:i})}return t.sort((r,o)=>r.name.localeCompare(o.name))}var bs=n=>n.entities?_t(n).withoutArea:[],vs=(n,e)=>!!n.entities&&_t(n).hubs.has(e),Yr=(n,e)=>n.entities?_t(n).powerByDevice.get(e)??[]:[];function Dn(n,e){let t=new Map;for(let o of e)qr(t,n.entities?.[o]?.device_id??`entity:${o}`).push(o);let r=new Map(e.map((o,i)=>[o,i]));return[...t.values()].map(o=>{let i=o.find(s=>!n.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>r.get(o.primary)-r.get(i.primary))}var Xr=(n,e)=>Dn(n,e).map(t=>t.primary),Qr={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Yu=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Xu=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Qu=new RegExp(`(${Xu.join("|")})`,"i");function Jr(n,e){let t=n.entities?.[e]?.device_id,r=t&&!vs(n,t)?_t(n).domainsByDevice.get(t):void 0;return r&&[...r].some(o=>Yu.has(o))?!1:!Qu.test(`${e} ${n.states[e]?.attributes.friendly_name??""}`)}function ys(n,e,t,r){let o=t.climate?.[r];if(o==="none")return[];if(o)return n.states[o]?[o]:[];let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>A([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!A([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...ue(n,t.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&n.states[c]?.attributes.device_class===Qr[r]&&Jr(n,c))}var Ju=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),ed=new Set(["garage","gate"]),td=new Set(["window","opening"]);function Ut(n,e,t=!1){let r=new Map;return n.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&r.set(o.id,s)}),r}var ws=(n,e)=>n==="none"?null:n??e??null,Hn=n=>n&&n!=="none"?n:null;function eo(n,e){let t=new Map;for(let r of e)for(let o of r.rooms){let i=r.openings.filter(_=>_.room_id===o.id).sort((_,v)=>_.edge-v.edge||_.offset-v.offset);if(i.length===0)continue;let s=ue(n,o.area_id),a=_=>n.states[_]?.attributes.device_class,l=_=>s.filter(v=>L(v)==="binary"&&_(a(v)??"")),c=_=>i.filter(v=>v.type===_),u=Ut(c("window"),s.filter(_=>L(_)==="cover"&&Ju.has(a(_))),!0),d=Ut(c("window"),l(_=>td.has(_))),h=Ut(c("door"),l(_=>_==="door")),p=Ut(c("garage"),s.filter(_=>L(_)==="cover"&&ed.has(a(_)??""))),f=Ut(c("garage"),l(_=>_==="garage_door"));for(let _ of i){let v=_.type==="window"?u:_.type==="garage"?p:null,b=_.type==="window"?d:_.type==="garage"?f:h,x=_.leaves===2;t.set(_.id,{cover:ws(_.cover,v?.get(_.id)),contact:_.sensor==="handle"&&_.contact==null?null:ws(_.contact,b.get(_.id)),tilt:_.tilt==="none"?null:_.tilt,contact2:x?Hn(_.contact2):null,tilt2:x?Hn(_.tilt2):null,position:Hn(_.position),positionInverted:!!_.position_inverted,tiltAngle:Hn(_.tilt_angle),tiltMax:_.tilt_max??null,tiltOffset:_.tilt_offset??null,tiltInvert:!!_.tilt_invert,shut:!!_.shut})}}return t}var nd=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function to(n){if(!n||dt(n))return null;let e=n.attributes.window_state;for(let t of[typeof e=="string"?e:"",n.state]){let r=t.trim(),o=r&&nd.find(([i])=>i.test(r));if(o)return o[1]}return null}var xs=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,ks=/(kühl|fridge|gefrier|freezer)/i,$s=/(spülmaschine|geschirrspül|dishwasher)/i,rd=/(kochfeld|herd|induktion|cooktop)/i,od={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:xs,tv_wall:xs,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:ks,fridge_smart:ks,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:$s,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:rd,sink:$s,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Ss={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},Ms=new Set(["tv_board","tv_wall"]);var jt=n=>Ms.has(n)||!!Wi(n),In=n=>jt(n)||n==="desk"||n==="fridge_smart",id=n=>!!n&&n!=="none";function sd(n,e){if(On(n,e))return e;let t=n.entities?.[e]?.device_id;return t?Yr(n,t).find(r=>r!==e)??null:null}var ad=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&A([e,t],r.points));function no(n,e,t,r){return n.find(o=>e?.test(t(o)))??(r?n[0]??null:null)}function Je(n,e){let t=new Map;for(let r of e){let o=new Set([...r.furniture.flatMap(i=>[i.entity,i.power]),...r.placements.map(i=>i.entity_id)].filter(id));for(let i of r.furniture){let s=i.type in Ss,a=s?Ss[i.type]:od[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=ad(r,i.x,i.z),c=(l?Xr(n,ue(n,l.area_id)):[]).filter(f=>!o.has(f)),u=f=>`${f} ${H(n,f)}`,d=f=>c.filter(_=>L(_)===f),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(s)h=no(d("light"),a,u,!0);else if(i.type==="robot_vacuum"){let f=l?.area_id??null;h=Object.keys(n.entities??{}).find(_=>_.startsWith("vacuum.")&&!o.has(_)&&gt(n,_)===f)??null}else if(i.type==="radiator")h=no(d("climate"),a,u,!0);else if(jt(i.type)){let f=d("media");h=f.find(_=>n.states[_]?.attributes.device_class==="tv")??no(f,a,u,Ms.has(i.type))}else a&&(h=c.find(f=>["switch","media","fan"].includes(L(f)??"")&&a.test(u(f)))??null);h&&o.add(h)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=h?sd(n,h):null,!p&&a&&l&&!s&&(p=ue(n,l.area_id).find(f=>On(n,f)&&!o.has(f)&&a.test(u(f)))??null),p&&o.add(p)),(h||p)&&t.set(i.id,{entity:h,power:p})}}return t}function ld(n,e){return Math.min(...e.map((t,r)=>{let o=e[(r+1)%e.length],[i,s]=[o[0]-t[0],o[1]-t[1]],a=Math.min(1,Math.max(0,((n[0]-t[0])*i+(n[1]-t[1])*s)/(i*i+s*s||1)));return Math.hypot(n[0]-t[0]-i*a,n[1]-t[1]-s*a)}))}function Fs(n,e,t=[]){let r=n.points;if(r.length<3||e.length===0)return[];let o=r.map(b=>b[0]),i=r.map(b=>b[1]),[s,a,l,c]=[Math.min(...o),Math.max(...o),Math.min(...i),Math.max(...i)],u=Math.min(a-s,c-l),d=Math.max(.1,Math.min(.25,u/8)),h=Math.min(.35,u/5),p=Math.min(.7,u/4),f=ie(r),_=[];for(let b=s+d/2;b<a;b+=d)for(let x=l+d/2;x<c;x+=d){let y=[b,x];if(!A(y,r))continue;let w=ld(y,r);w>=h&&_.push({at:y,wallDistance:w})}_.length===0&&_.push({at:f,wallDistance:0});let v=[...t];return e.map(b=>{let x=L(b)==="light",y=_[0].at,w=-1/0;for(let{at:S,wallDistance:F}of _){let z=v.length?Math.min(...v.map(ne=>Math.hypot(S[0]-ne[0],S[1]-ne[1]))):3,V=Math.hypot(S[0]-f[0],S[1]-f[1]),N=Math.min(z,3)*2;V<p&&!x&&(N-=10),N-=x?V*.35:F*1.2,N>w+1e-9&&(w=N,y=S)}let R=[Math.round(y[0]*100)/100,Math.round(y[1]*100)/100];return v.push(R),{entity_id:b,x:R[0],z:R[1],y:null,mount:null}})}var Rs=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Es(n,e,t){if(t==="none")return null;if(t)return t;let r=e?n.entities?.[e]?.device_id:null;return!r||!n.entities?null:Object.values(n.entities).find(i=>i.device_id===r&&i.entity_id.startsWith("sensor.")&&(Rs.test(i.translation_key??"")||Rs.test(i.entity_id.split(".")[1])))?.entity_id??null}var C=(n,e)=>[n[0]-e[0],n[1]-e[1]],Me=(n,e)=>[n[0]+e[0],n[1]+e[1]],ve=(n,e)=>[n[0]*e,n[1]*e],U=(n,e)=>n[0]*e[0]+n[1]*e[1],ye=(n,e)=>n[0]*e[1]-n[1]*e[0],se=n=>Math.hypot(n[0],n[1]),we=n=>{let e=se(n)||1;return[n[0]/e,n[1]/e]},ro=n=>[-n[1],n[0]],oo=n=>[n[1],-n[0]];var cd=.05,ud=.2,dd=.12;function hd(n){let e=[];return n.forEach((t,r)=>{let o=t.points;if(o.length<3)return;let i=re(o)>=0;o.forEach((s,a)=>{let l=o[(a+1)%o.length],c=se(C(l,s));if(c<.05)return;let u=[(l[0]-s[0])/c,(l[1]-s[1])/c],d=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let h=[-u[1],u[0]],[p,f]=[U(s,u),U(l,u)];e.push({room:r,index:a,dir:u,normal:h,offset:U(s,h),outside:U(d,h)>0?1:-1,from:Math.min(p,f),to:Math.max(p,f)})})}),e}function pd(n,e,t){if(n.room===e.room||Math.abs(ye(n.dir,e.dir))>cd||n.outside===e.outside)return null;let r=(e.offset-n.offset)*n.outside;return r>t||r<-dd||Math.abs(r)<1e-4||Math.min(n.to,e.to)-Math.max(n.from,e.from)<ud?null:r}var io=n=>Math.round(n*1e3)/1e3;function As(n,e=.6){let t=hd(n),r=t.map((d,h)=>h),o=d=>r[d]===d?d:r[d]=o(r[d]),i=[],s=new Set;for(let d=0;d<t.length;d++)for(let h=d+1;h<t.length;h++){let p=pd(t[d],t[h],e);p!==null&&(i.push(io(p)),r[o(d)]=o(h),s.add(d).add(h))}let a=()=>n.map(d=>({...d,points:d.points.map(h=>[h[0],h[1]])}));if(i.length===0)return{rooms:a(),gaps:i};let l=new Map;for(let d of s)l.set(o(d),[...l.get(o(d))??[],d]);let c=n.map(d=>d.points.map(()=>new Map));for(let[d,h]of l){let p=h.reduce((f,_)=>f+t[_].offset,0)/h.length;for(let f of h){let _=t[f],v=[_.normal[0]*(p-_.offset),_.normal[1]*(p-_.offset)];c[_.room][_.index].set(d,v),c[_.room][(_.index+1)%n[_.room].points.length].set(d,v)}}return{rooms:n.map((d,h)=>({...d,points:d.points.map((p,f)=>{let _=[...c[h][f].values()].reduce((v,b)=>[v[0]+b[0],v[1]+b[1]],[p[0],p[1]]);return[io(_[0]),io(_[1])]})})),gaps:i}}function zs(n){let e=n.filter(t=>t>.04).sort((t,r)=>t-r);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var fd=.25,Ts=n=>Math.round(n*1e3)/1e3,Ps=(n,e,t)=>n.rooms.find(r=>r.points.length>=3&&A([e,t],r.points));function ao(n,e,t,r,o){let i=Ps(n,e,t);if(!i)return[r,o];let s=(a,l)=>A([a,l],i.points);return s(r,o)?[r,o]:s(r,t)?[r,t]:s(e,o)?[e,o]:[e,t]}function md(n,e,t,r){return n.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(U(C(i,t),r))<.02&&Math.abs(U(C(a,t),r))<.02}))}var so=(n,e)=>Math.abs((n-e+540)%360-180);function Zt(n,e,t,r=fd){let o=Ps(n,e.x,e.z);if(!o)return null;let i=o.points,s=re(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=se(C(u,l));if(d<.3)return;let h=[(u[0]-l[0])/d,(u[1]-l[1])/d],p=[-h[1]*s,h[0]*s],f=U(C([e.x,e.z],l),h);if(f<0||f>d)return;let _=md(n,o,l,p)?t/2:0,v=U(C([e.x,e.z],l),p)-_,b=Math.atan2(-p[0],p[1])*180/Math.PI,y=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((R,S)=>so(e.rotation,S.rotation)<so(e.rotation,R.rotation)?S:R);if(so(e.rotation,y.rotation)>50)return;let w=v-y.extent;Math.abs(w)>r||a&&Math.abs(w)>=Math.abs(a.gap)||(a={x:Ts(e.x-p[0]*w),z:Ts(e.z-p[1]*w),rotation:(Math.round(y.rotation)%360+360)%360,gap:w})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var Yt=Math.PI/180,We=n=>Math.tan(Math.min(80,Math.max(0,n))*Yt);function Ln(n){return{x0:Math.min(n.x0,n.x1),x1:Math.max(n.x0,n.x1),z0:Math.min(n.z0,n.z1),z1:Math.max(n.z0,n.z1)}}function te(n){let{x0:e,x1:t,z0:r,z1:o}=Ln(n);return n.axis==="x"?{u0:e,u1:t,w:o-r,at:(i,s)=>[i,n.flip?o-s:r+s]}:{u0:r,u1:o,w:t-e,at:(i,s)=>[n.flip?t-s:e+s,i]}}function Cn(n,e,t){let{x0:r,x1:o,z0:i,z1:s}=Ln(n);return n.axis==="x"?[e,n.flip?s-t:t-i]:[t,n.flip?o-e:e-r]}var qt=Math.tan(30*Yt);function lo(n,e,t,r,o){let i=Math.min(n*.3,r>1e-6?2.4/r:n*.3),s=Math.min(n*.3,o>1e-6?2.4/o:n*.3),a=e+i*r,l=t+s*o,c=Math.min(n-s,Math.max(i,(l-a+qt*(n-s+i))/(2*qt))),u=a+(c-i)*qt;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=i?e+h*r:h<=c?a+(h-i)*qt:h<=n-s?l+(n-s-h)*qt:t+(n-h)*o}}function de(n){let e=te(n).w,[t,r]=[n.eave_a,n.eave_b],[o,i]=[We(n.pitch_a),We(n.pitch_b)];switch(n.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*o,y:s=>t+s*o};case"mansard":{let s=lo(e,t,r,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(r-t+e*i)/(o+i))):e/2;return{vr:s,rh:t+s*o,y:a=>a<=s?t+a*o:r+(e-a)*i}}}}var et=n=>de(n).rh;function Os(n){return{...n,a:n.b,b:n.a,left:n.right,right:n.left,roomLeft:n.roomRight,roomRight:n.roomLeft}}function gd(n,e){let t=n.map(r=>({...r}));for(let r of e){let o=t.find(i=>i.room_id===r.room_id&&i.edge===r.edge&&(Math.abs(i.t1-r.t0)<1e-6||Math.abs(r.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,r.t0),o.t1=Math.max(o.t1,r.t1)):t.push({...r})}return t}function _d(n,e,t){if(n.a===e.b)return!1;let r=we(C(t[n.b],t[n.a])),o=we(C(t[e.b],t[e.a]));return Math.abs(ye(r,o))>1e-6||U(r,o)<=0||n.free||e.free?!1:n.height===e.height&&n.exterior===e.exterior&&n.roomLeft===e.roomLeft&&n.roomRight===e.roomRight&&Math.abs(n.left-e.left)<=1e-9&&Math.abs(n.right-e.right)<=1e-9}function Ds(n,e,t=new Set){let r=n.slice();for(;;){let o=new Map;r.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=r[a[0]].b===s?r[a[0]]:Os(r[a[0]]),c=r[a[1]].a===s?r[a[1]]:Os(r[a[1]]);if(!_d(l,c,e))continue;let u={...l,b:c.b,sources:gd(l.sources,c.sources)};i=[...r.filter((d,h)=>h!==a[0]&&h!==a[1]),u];break}if(!i)return r;r=i}}function Hs(n,e){let t=new Map;n.forEach((o,i)=>{let s=we(C(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:ve(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let r=new Map;for(let[o,i]of t){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)r.set(l.key,{left:Me(s,ve(ro(l.d),l.left)),right:Me(s,ve(oo(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=Me(s,ve(ro(l.d),l.left)),h=Me(s,ve(oo(u.d),u.right)),p=ye(l.d,u.d);if(Math.abs(p)<1e-4)return;let f=Me(d,ve(l.d,ye(C(h,d),u.d)/p));se(C(f,s))>a||(r.get(l.key).left=f,r.get(u.key).right=f)})}return r}function Is(n,e){let t=n.filter((r,o)=>se(C(r,n[(o+1)%n.length]))>e);for(;;){if(t.length<=3)return t;let r=t.findIndex((o,i)=>{let s=t[(i+t.length-1)%t.length],a=t[(i+1)%t.length],[l,c]=[C(o,s),C(a,o)];return Math.abs(ye(we(l),we(c)))<1e-7&&U(l,c)>0});if(r===-1)return t;t=t.filter((o,i)=>i!==r)}}function bd(n){let e=[];return{points:e,idOf(t){let r=e.findIndex(o=>Math.abs(o[0]-t[0])<=n&&Math.abs(o[1]-t[1])<=n);return r>=0?r:(e.push([t[0],t[1]]),e.length-1)}}}function vd(n,e){let t=[];for(let r of n){let o=r.points;if(o.length<3||Math.abs(re(o))<1e-6)continue;let i=re(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(i?{u:a,v:c,room:r.id,edge:l,forward:!0}:{u:c,v:a,room:r.id,edge:l,forward:!1})})}return t}function yd(n,e,t){let r=[];for(let o of n){let[i,s]=[e[o.u],e[o.v]],a=C(s,i),l=se(a),c=ve(a,1/l),u=e.map((h,p)=>({id:p,rel:C(h,i)})).filter(({id:h,rel:p})=>h!==o.u&&h!==o.v&&U(p,c)>t&&U(p,c)<l-t&&Math.abs(ye(c,p))<=t).map(({id:h,rel:p})=>({t:U(p,c),id:h})).sort((h,p)=>h.t-p.t),d=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let h=0;h+1<d.length;h++){let[p,f]=[d[h],d[h+1]];r.push({u:p.id,v:f.id,room:o.room,edge:o.edge,t0:o.forward?p.t:l-f.t,t1:o.forward?f.t:l-p.t})}}return r}var Ls=n=>({room_id:n.room,edge:n.edge,t0:n.t0,t1:n.t1});function wd(n,e){let t=new Map(n.map(i=>[i.id,i])),r=new Map;for(let i of e){let s=`${i.room}:${i.edge}`;r.set(s,[...r.get(s)??[],i.t0].sort((a,l)=>a-l))}let o=i=>{let s=t.get(i.room)?.wall_heights?.[i.edge];return Array.isArray(s)?s[(r.get(`${i.room}:${i.edge}`)??[]).indexOf(i.t0)]??null:s};return{heightOf(i){let s=i.map(o).filter(a=>typeof a=="number"&&a>0);return s.length?Math.min(...s):void 0},thicknessOf(i){let s=i.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return s.length?Math.max(...s):void 0},hasNoWall:i=>i.some(s=>o(s)===0)}}function xd(n,e,t,r){let o=wd(e,n),i=new Map;for(let l of n){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==u&&h.room!==c.room&&r.push(`overlap:${c.room}:${h.room}`);let d=u?[c,u]:[c];if(o.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let h=o.thicknessOf(d)??t.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(Ls),height:o.heightOf(d)})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(d)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Ls(c)],height:o.heightOf(d)})}return{drafts:s,open:a}}function kd(n,e){let t=r=>we(C(e[r.b],e[r.a]));for(let r of n){if(r.exterior||r.free)continue;let o=new Set;for(let s of[r.a,r.b])for(let a of n)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(ye(t(r),t(a)))>1e-6||(a.roomLeft===r.roomLeft?o.add("left"):a.roomLeft===r.roomRight&&o.add("right"));if(o.size!==1)continue;let i=r.left+r.right;[r.left,r.right]=o.has("left")?[0,i]:[i,0]}}var $d=(n,e)=>{let t=i=>Math.round(i*100),[r,o]=n[0]<e[0]||n[0]===e[0]&&n[1]<=e[1]?[n,e]:[e,n];return`w_${t(r[0])}_${t(r[1])}_${t(o[0])}_${t(o[1])}`};function Re(n,e,t=[]){let r=e.eps??.005,o=[],i=bd(r),s=vd(n,i),a=t.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),l=a.map(b=>[i.idOf(b.a),i.idOf(b.b)]),c=new Set;for(let b of n){let x=b.points;x.length<3||(b.wall_splits??[]).forEach((y,w)=>{if(!y||w>=x.length)return;let R=x[w],S=C(x[(w+1)%x.length],R),F=se(S);for(let z of y)z>r&&z<F-r&&c.add(i.idOf(Me(R,ve(S,z/F))))})}let u=yd(s,i.points,r),{drafts:d,open:h}=xd(u,n,e,o);kd(d,i.points);let p=d;a.forEach((b,x)=>{let[y,w]=l[x];if(y===w)return;let R=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],S=n.find(z=>z.points.length>=3&&A(R,z.points))?.id??null,F=(b.thickness??e.interior)/2;p.push({free:b.id,a:y,b:w,left:F,right:F,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof b.height=="number"&&b.height>0?b.height:void 0})});let f=Ds(p,i.points,c),_=Hs(f,i.points);return{walls:f.map((b,x)=>{let[y,w]=[i.points[b.a],i.points[b.b]],[R,S]=[_.get(`${x}:a`),_.get(`${x}:b`)],F=Is([R.right,S.left,w,S.right,R.left,y],1e-6);return{id:$d(y,w),a:[y[0],y[1]],b:[w[0],w[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:F,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(o)],open:h}}function bt(n,e,t){let r=n.points[e];return Me(r,ve(we(C(n.points[(e+1)%n.points.length],r)),t))}function De(n,e,t){if(n.wall){let o=t.find(a=>a.id===n.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=we(C(o.b,o.a));return{room:{id:n.room_id,name:"",area_id:null,points:[o.a,o.b,Me(o.a,[-i[1],i[0]])]},edge:0}}let r=e.find(o=>o.id===n.room_id);return r&&n.edge<r.points.length?{room:r,edge:n.edge}:null}var Cs=(n,e)=>U(C(e,n.a),we(C(n.b,n.a)));function Vn(n,e,t){if(!e.wall)return Sd(n,t.room,t.edge,e.offset);let r=n.find(o=>o.free===e.wall);return r?{wall:r,s:Cs(r,bt(t.room,0,e.offset))}:null}function Sd(n,e,t,r){for(let o of n)if(o.sources.some(s=>s.room_id===e.id&&s.edge===t&&r>=s.t0-1e-6&&r<=s.t1+1e-6))return{wall:o,s:Cs(o,bt(e,t,r))};return null}var Vs=([n,e])=>{let t=Math.hypot(n,e)||1;return[n/t,e/t]};function Md(n){return n.reduce((e,t,r)=>e+(t[0]*n[(r+1)%n.length][1]-n[(r+1)%n.length][0]*t[1]),0)/2}function Bs(n,e){let t=n.length;if(t<3||Math.abs(e)<1e-9)return n.map(([o,i])=>[o,i]);let r=Md(n)>=0?1:-1;return n.map((o,i)=>{let s=n[(i+t-1)%t],a=n[(i+1)%t],[l,c]=Vs([o[0]-s[0],o[1]-s[1]]),[u,d]=Vs([a[0]-o[0],a[1]-o[1]]),h=[c*r,-l*r],p=[d*r,-u*r],f=[h[0]+p[0],h[1]+p[1]],_=Math.hypot(f[0],f[1]);if(_<1e-6)return[o[0]+h[0]*e,o[1]+h[1]*e];let v=(f[0]*h[0]+f[1]*h[1])/_,b=Math.min(4,1/Math.max(.25,v));return[o[0]+f[0]/_*e*b,o[1]+f[1]/_*e*b]})}function Xt(n){let e=n.map(r=>r[0]),t=n.map(r=>r[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function Rd(n){let e=([i,s])=>`${Math.round(i*1e3)}:${Math.round(s*1e3)}`,t=new Map;for(let i of n)for(let s of[i.a,i.b])t.set(e(s),[...t.get(e(s))??[],i]);let r=new Set,o=null;for(let i of n){if(r.has(i))continue;r.add(i);let s=[i.a,i.b],a=i.b;for(;;){let c=(t.get(e(a))??[]).find(u=>!r.has(u));if(!c||(r.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!o||Math.abs(ce(s))>Math.abs(ce(o)))&&(o=s)}return o}function co(n,e,t,r){let o=Re(n,{exterior:t,interior:r},e).walls.filter(a=>a.exterior&&!a.free),i=o.length?Rd(o.map(a=>({a:a.a,b:a.b}))):null;if(!i)return null;let s=i.filter((a,l)=>{let c=i[(l+i.length-1)%i.length],u=i[(l+1)%i.length];return Math.abs((a[0]-c[0])*(u[1]-a[1])-(a[1]-c[1])*(u[0]-a[0]))>1e-6});return s.length>=3?Bs(s,t):null}function vt(n,e){let t=te(n),r=de(n),o=t.w,[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(b,x)=>[b,x,r.y(x)],u=c(a,-i),d=c(l,-i),h=c(l,o+s),p=c(a,o+s),[f,_]=[We(n.pitch_a),We(n.pitch_b)],v=b=>[b,r.vr,r.rh];switch(n.shape){case"pent":return{faces:[[u,d,h,p]],rim:[u,d,h,p],ridges:[[h,p]],gable:[[0,r.y(0)],[o,r.y(o)]]};case"hip":case"pyramid":{let b=(t.u1-t.u0)/2,x=n.shape==="pyramid"?b:Math.min(b,Math.min(r.vr,o-r.vr)||o/2),y=v(t.u0+x),w=v(t.u1-x);return n.shape==="pyramid"?{faces:[[u,d,y],[d,h,y],[h,p,y],[p,u,y]],rim:[u,d,h,p],ridges:[[u,y],[p,y],[d,y],[h,y]],gable:null}:{faces:[[u,d,w,y],[y,w,h,p],[p,u,y],[d,h,w]],rim:[u,d,h,p],ridges:[[y,w],[u,y],[p,y],[d,w],[h,w]],gable:null}}case"halfhip":{let b=Math.min(r.y(0),r.y(o)),x=b+(r.rh-b)*.55,y=f>1e-6?Math.min(r.vr,(x-n.eave_a)/f):r.vr,w=_>1e-6?Math.max(r.vr,o-(x-n.eave_b)/_):r.vr,R=Math.min((t.u1-t.u0)/2-.1,(r.rh-x)/Math.max(.2,f)),S=v(t.u0+R),F=v(t.u1-R),z=[a,y,x],V=[a,w,x],N=[l,y,x],ne=[l,w,x];return{faces:[[u,d,N,F,S,z],[S,F,ne,h,p,V],[V,z,S],[N,ne,F]],rim:[u,d,N,ne,h,p,V,z],ridges:[[S,F],[z,S],[V,S],[N,F],[ne,F]],gable:[[0,r.y(0)],[y,x],[w,x],[o,r.y(o)]]}}case"mansard":{let b=lo(o,n.eave_a,n.eave_b,f,_),x=[a,b.vla,b.yla],y=[l,b.vla,b.yla],w=[a,o-b.vlb,b.ylb],R=[l,o-b.vlb,b.ylb],S=[a,b.vr,b.rh],F=[l,b.vr,b.rh];return{faces:[[u,d,y,x],[x,y,F,S],[S,F,R,w],[w,R,h,p]],rim:[u,d,y,F,R,h,p,w,S,x],ridges:[[S,F],[x,y],[w,R]],gable:[[0,r.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,r.y(o)]]}}default:{let b=v(a),x=v(l);return{faces:[[u,d,x,b],[b,x,h,p]],rim:[u,d,x,h,p,b],ridges:[[b,x]],gable:[[0,r.y(0)],[r.vr,r.rh],[o,r.y(o)]]}}}}function Bn(n,e,t){let r=null;for(let o of n.faces){if(!A([e,t],o.map(([h,p])=>[h,p])))continue;let[i,s]=o,a=o.slice(2).find(h=>Math.abs((s[0]-i[0])*(h[1]-i[1])-(s[1]-i[1])*(h[0]-i[0]))>1e-9);if(!a)continue;let l=[s[0]-i[0],s[2]-i[2],s[1]-i[1]],c=[a[0]-i[0],a[2]-i[2],a[1]-i[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let d=i[2]-(u[0]*(e-i[0])+u[2]*(t-i[1]))/u[1];r=r===null?d:Math.min(r,d)}return r}function uo(n,e,t){let r=te(e),o=n.floors.flatMap(u=>u.rooms.filter(d=>d.points.length>=3&&u.elevation+u.height>e.base+.05)),i=u=>u.some(d=>o.some(h=>A(d,h.points))),s=.35,a=[.15,.5,.85].map(u=>r.u0+(r.u1-r.u0)*u),l=[.15,.5,.85].map(u=>r.w*u),c=u=>u?0:t;return{a:c(i(a.map(u=>r.at(u,-s)))),b:c(i(a.map(u=>r.at(u,r.w+s)))),u0:c(i(l.map(u=>r.at(r.u0-s,u)))),u1:c(i(l.map(u=>r.at(r.u1+s,u))))}}var Wn=n=>Math.abs((n.x1-n.x0)*(n.z1-n.z0)),Ws=n=>n.shape==="flat"||n.shape==="parapet",tt=n=>Math.round(n*100)/100;function Nn(n,e){let[t,r]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return n.filter(i=>{if(i===e||i.dormer||i.open||Ws(i)||Wn(i)<Wn(e)*1.5)return!1;let s=Ln(i);return t>=s.x0&&t<=s.x1&&r>=s.z0&&r<=s.z1}).reduce((i,s)=>i===null||Wn(s)<Wn(i)?s:i,null)}function ho(n,e,t,r){let o=te(n),i=de(n),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(r??(o.u0+o.u1)/2)-s/2)),[l,c]=e==="a"?[n.eave_a,n.pitch_a]:[n.eave_b,n.pitch_b],u=l+1.4,d=u+s/2*Math.tan(35*Yt),h=Math.max(.8,Math.min(o.w/2-.2,(d-l)/Math.max(.15,Math.tan(Math.min(80,c)*Yt)))),[p,f]=e==="a"?[0,h]:[o.w-h,o.w],_=o.at(a,p),v=o.at(a+s,f);return{id:t,x0:tt(Math.min(_[0],v[0])),z0:tt(Math.min(_[1],v[1])),x1:tt(Math.max(_[0],v[0])),z1:tt(Math.max(_[1],v[1])),shape:"gable",axis:n.axis==="x"?"z":"x",eave_a:tt(u),eave_b:tt(u),pitch_a:35,pitch_b:35,base:tt(i.y(e==="a"?0:o.w)),overhang:.15,dormer:!0}}function Ed(n,e){let t=vt(n,{u0:0,u1:0,a:0,b:0}),r=de(n);return o=>{let[i,s]=e.at(o,e.w/2),[a,l]=Cn(n,i,s);return Bn(t,a,l)??r.y(l)}}function po(n,e){if(Ws(e))return e;let t=te(e),r=de(e).rh,o=Ed(n,t),i=o(t.u0)<=o(t.u1),[s,a]=i?[t.u0,t.u1]:[t.u1,t.u0],l=i?1:-1,c=a;for(let h=.5;h<Math.abs(a-s);h+=.05)if(o(s+l*h)>=r-.02){c=s+l*h;break}if(Math.abs(c-a)<.05)return e;let u={...e},d=a===t.u1;return e.axis==="x"?u[d?"x1":"x0"]=c:u[d?"z1":"z0"]=c,u}var Ns=.14,Ad=n=>n.shape==="flat"||n.shape==="parapet";function fo(n,e){return!n.open&&Math.min(n.base,n.eave_a,n.eave_b)<e-.05}function mo(n,e,t){let r=[],o=e+t+Ns;for(let i of n.settings.roof.sections??[]){if(i.open||Ad(i)||i.shape==="mansard")continue;let s=te(i),a=de(i),[l,c]=[We(i.pitch_a),We(i.pitch_b)],u=[];l>1e-6&&u.push((o-i.eave_a)/l),i.shape==="gable"&&c>1e-6&&u.push(s.w-(o-i.eave_b)/c);for(let d of u)d<=.01||d>=s.w-.01||i.shape==="gable"&&Math.abs(a.y(d)-o)>1e-6||r.push([s.at(s.u0,d),s.at(s.u1,d)])}return r}function go(n,e,t,r,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([e+(r-e)*a,t+(o-t)*l]);let s=n.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>A(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function _o(n,e){let t=n.floors.filter(r=>r.rooms.length>0).sort((r,o)=>r.elevation-o.elevation);return t.findLast(r=>r.elevation<e.base-.05)??t[0]}var He=n=>Math.round(n*1e3)/1e3;function bo(n,e=t=>`roof_${t+1}`){let t=n.settings.roof?.pitch??35,r=n.settings.wall_exterior,o=n.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],a=(l,c)=>l.some(u=>A(c,u.points));for(let l of o){let c=l.rooms.filter(v=>v.points.length>=3),u=[...new Set(c.flatMap(v=>v.points.map(b=>He(b[0]))))].sort((v,b)=>v-b),d=[...new Set(c.flatMap(v=>v.points.map(b=>He(b[1]))))].sort((v,b)=>v-b),h=d.slice(0,-1).map((v,b)=>u.slice(0,-1).map((x,y)=>{let w=[(u[y]+u[y+1])/2,(d[b]+d[b+1])/2];return a(c,w)&&!a(s,w)})),p=h.map(v=>v.map(()=>!1)),f=(v,b)=>h[b][v]&&!p[b][v],_=l.elevation+l.height;for(let v=0;v<h.length;v++)for(let b=0;b<(h[v]?.length??0);b++){if(!f(b,v))continue;let x=b;for(;x+1<h[v].length&&f(x+1,v);)x++;let y=v;for(;y+1<h.length&&Array.from({length:x-b+1},(z,V)=>f(b+V,y+1)).every(Boolean);)y++;for(let z=v;z<=y;z++)for(let V=b;V<=x;V++)p[z][V]=!0;let[w,R]=[u[b]-r,u[x+1]+r],[S,F]=[d[v]-r,d[y+1]+r];Math.min(R-w,F-S)<.8||i.push({id:e(i.length),x0:He(w),z0:He(S),x1:He(R),z1:He(F),shape:"gable",axis:R-w>=F-S?"x":"z",eave_a:He(_),eave_b:He(_),pitch_a:t,pitch_b:t,base:He(_),overhang:null})}s.push(...c)}return i}var Fe=Math.PI/180,he=(n,e)=>[n[0]-e[0],n[1]-e[1],n[2]-e[2]],nt=(n,e)=>n[0]*e[0]+n[1]*e[1]+n[2]*e[2],yt=n=>Math.hypot(n[0],n[1],n[2]),rt=n=>{let e=yt(n)||1;return[n[0]/e,n[1]/e,n[2]/e]},Ks=(n,e)=>[n[1]*e[2]-n[2]*e[1],n[2]*e[0]-n[0]*e[2],n[0]*e[1]-n[1]*e[0]],Ee=n=>Math.round(n*100)/100,Qt=([n,e],t)=>(Math.atan2(n,-e)/Fe-t+720)%360;var Us=.25;function js(n,e,t,r,o,i,s){let a=o-t>=i-r,l=a?o-t:i-r;return{key:`${n}:top`,section:e,side:"top",flat:!0,o:[t,s,r],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-r:o-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Zs(n,e){let t=rt(Ks(n,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var qs=n=>{let e=rt([-n[0],0,-n[2]]);return[e[0],e[2]]};function Jt(n,e,t,r,o,i,s,a){let l=rt(he(o,r)),c=rt(he(i,r));return{key:n,section:e,side:t,flat:!1,o:r,eu:l,es:c,n:Zs(l,c),lu:yt(he(o,r)),ls:yt(he(i,r)),pitch:s,span:a,facing:qs(c)}}function Gs(n,e,t,r,o,i){let s=yt(he(o,r));if(s<.3)return null;let a=rt(he(o,r)),l=he(i,r),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=yt(u);if(d<.3)return null;let h=rt(u),p=f=>{let _=Math.min(1,Math.max(0,f/d));return[c*_,s-(s-c)*_]};return{key:n,section:e,side:t,flat:!1,o:r,eu:a,es:h,n:Zs(a,h),lu:s,ls:d,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/Fe,span:p,facing:qs(h)}}function zd(n,e){let t=te(n),r=de(n),o=(x,y,w)=>{let[R,S]=t.at(x,y);return[R,w,S]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=r.y(-i),d=r.y(t.w+s);if(n.shape==="flat"||n.shape==="parapet"){let[x,y]=[t.at(a,-i),t.at(l,t.w+s)];return[js(n.id,n.id,Math.min(x[0],y[0]),Math.min(x[1],y[1]),Math.max(x[0],y[0]),Math.max(x[1],y[1]),n.eave_a+Us)]}if(n.shape==="pent")return[Jt(`${n.id}:a`,n.id,"a",o(a,-i,u),o(l,-i,u),o(a,t.w+s,d),n.pitch_a,()=>[0,c])];let h=n.shape==="hip"||n.shape==="pyramid",p=(t.u1-t.u0)/2,f=n.shape==="pyramid"?p:h?Math.min(p,Math.min(r.vr,t.w-r.vr)||t.w/2):0,_=h?t.u0+f-a:0,v=h?l-(t.u1-f):0,b=[];if(r.vr>.3){let x=Math.hypot(r.vr+i,r.rh-u);b.push(Jt(`${n.id}:a`,n.id,"a",o(a,-i,u),o(l,-i,u),o(a,r.vr,r.rh),n.pitch_a,y=>[_*(y/x),c-v*(y/x)]))}if(t.w-r.vr>.3){let x=Math.hypot(t.w+s-r.vr,r.rh-d);b.push(Jt(`${n.id}:b`,n.id,"b",o(l,t.w+s,d),o(a,t.w+s,d),o(l,r.vr,r.rh),n.pitch_b,y=>[v*(y/x),c-_*(y/x)]))}if(h){let x=Gs(`${n.id}:c`,n.id,"c",o(a,t.w+s,d),o(a,-i,u),o(t.u0+f,r.vr,r.rh)),y=Gs(`${n.id}:d`,n.id,"d",o(l,-i,u),o(l,t.w+s,d),o(t.u1-f,r.vr,r.rh));b.push(...[x,y].filter(w=>w!==null))}return b}function Ys(n){return n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>r.elevation-t.elevation)[0]??null}function W(n){let e=n.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>zd(y,uo(n,y,y.overhang??e.overhang)));let t=Ys(n);if(!t)return[];let r=t.rooms.flatMap(y=>y.points.map(w=>w[0])),o=t.rooms.flatMap(y=>y.points.map(w=>w[1])),i=n.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...r)-i,Math.max(...r)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=t.elevation+t.height;if(e.type==="flat")return[js("main",null,s,l,a,c,u+Us)];let d=a-s>=c-l,h=e.ridge==="short"?!d:d,p=(h?c-l:a-s)/2,f=p*Math.tan(e.pitch*Fe),_=(y,w,R)=>h?[y,u+R,(l+c)/2+w]:[(s+a)/2+w,u+R,y],[v,b]=h?[s,a]:[l,c],x=()=>[0,b-v];return[Jt("main:a",null,"a",_(v,-p,0),_(b,-p,0),_(v,0,f),e.pitch,x),Jt("main:b",null,"b",_(v,p,0),_(b,p,0),_(v,0,f),e.pitch,x)]}function xe(n,e){let t=[];for(let r of n.floors.filter(o=>!e||o.id===e)){let{walls:o}=Re(r.rooms,{exterior:n.settings.wall_exterior,interior:n.settings.wall_interior},r.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(r.height,i.height??r.height),h=(p,f,_,v)=>t.push({key:p,section:null,side:"top",flat:!1,o:f,eu:_,es:[0,1,0],n:v,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:{floorId:r.id}});h(`wall:${r.id}:${i.id}`,[i.a[0]+c*i.right,r.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&h(`wall:${r.id}:${i.id}:back`,[i.b[0]-c*i.left,r.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var pe="ground";function Xs(n){let e=n.floors.filter(t=>t.rooms.some(r=>r.points.length>=3)).sort((t,r)=>t.elevation-r.elevation);return e.find(t=>t.elevation>-.5)??e[0]??n.floors[0]??null}function Kn(n,e){let t=(e.rotation??0)*Fe,r=[Math.cos(t),0,Math.sin(t)],o=[-Math.sin(t),0,Math.cos(t)],i=Xs(n),s=r[0]*e.u+o[0]*e.v,a=r[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:ns(i,s,a)):e.base??0;return{key:pe,section:null,side:"top",flat:!0,o:[0,l,0],eu:r,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function oe(n,e,t=W(n)){return e.face===pe?Kn(n,e):e.face.startsWith("wall:")?xe(n,e.face.split(":")[1]).find(r=>r.key===e.face)??null:t.find(r=>r.key===e.face)??null}var Gn=1.13,en=1.72,fe=.025,Ne=.07;function ot(n){let e=n.module_w||Gn,t=n.module_h||en;return n.portrait===!1?[t,e]:[e,t]}function tn(n){return n.layout?.length?n.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,n.rows)},()=>Math.max(1,n.cols))}function vo(n,e){return n.flat?Math.min(45,Math.max(0,e.tilt??15))*Fe:n.wall?Math.min(90,Math.max(0,e.tilt??0))*Fe:0}function nn(n,e){let[,t]=ot(e),r=vo(n,e);return n.wall?t*Math.cos(r)+fe:n.flat?t*Math.cos(r)+Math.max(.3,2*t*Math.sin(r)):t+fe}function rn(n,e){let[t,r]=ot(e),o=tn(e),i=Math.max(1,...o);return[i*t+(i-1)*fe,(o.length-1)*nn(n,e)+r*Math.cos(vo(n,e))]}function ke(n,e,t=!1){let[r,o]=ot(e),i=vo(n,e),s=o*Math.cos(i),a=nn(n,e),l=tn(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=(f,_,v)=>[0,1,2].map(b=>n.o[b]+n.eu[b]*f+n.es[b]*_+n.n[b]*v),h=(f,_)=>{if(n.unbounded)return!0;if(_<-1e-6||_>n.ls+1e-6)return!1;let[v,b]=n.span(_);return f>=v-1e-6&&f<=b+1e-6},p=[];return l.forEach((f,_)=>{let v=e.align==="right"?c-f:e.align==="center"?(c-f)/2:0;for(let b=0;b<f;b++){let x=`${_}:${b}`,y=u.has(x);if(y&&!t)continue;let w=e.u+(b+v)*(r+fe),R=w+r,S=e.v+_*a,F=S+(n.flat||n.wall?s:o);if([[w,S],[R,S],[R,F],[w,F]].every(([z,V])=>h(z,V)))if(n.wall&&i>.001){let z=Ne+o*Math.sin(i),[V,N]=e.flip?[z,Ne]:[Ne,z],ne=[d(w,S,V),d(R,S,V),d(R,F,N),d(w,F,N)],bn=e.flip?S:F;p.push({corners:ne,posts:[w+.05,R-.05].map(vn=>[d(vn,bn,0),d(vn,bn,z)]),cell:x,skipped:y})}else if(!n.flat)p.push({corners:[d(w,S,Ne),d(R,S,Ne),d(R,F,Ne),d(w,F,Ne)],posts:[],cell:x,skipped:y});else{let V=.15+o*Math.sin(i),[N,ne]=e.flip?[F,S]:[S,F],bn=[d(w,N,.15),d(R,N,.15),d(R,ne,V),d(w,ne,V)],vn=[w+.05,R-.05].flatMap(yn=>[[d(yn,N,0),d(yn,N,.15)],[d(yn,ne,0),d(yn,ne,V)]]);p.push({corners:bn,posts:vn,cell:x,skipped:y})}}}),p}function Ie(n,e){if(n.unbounded)return{u:e.u,v:e.v};let[t,r]=rn(n,e),o=i=>Math.floor(i*100+1e-6)/100;return{u:o(Math.min(Math.max(0,e.u),Math.max(0,n.lu-t))),v:o(Math.min(Math.max(0,e.v),Math.max(0,n.ls-r)))}}function on(n,e){let[t,r]=rn(n,e),[o,i]=[e.u+t/2,e.v+r/2];return[n.o[0]+n.eu[0]*o+n.es[0]*i,n.o[2]+n.eu[2]*o+n.es[2]*i]}var Un=.78,sn=1.18,Ke=n=>({id:n.id,face:n.face,u:n.u,v:n.v,rows:1,cols:1,portrait:!0,module_w:n.w||Un,module_h:n.h||sn});function yo(n,e){let t=ke(n,Ke(e))[0];if(!t)return null;let r=o=>[o[0]-n.n[0]*.05,o[1]-n.n[1]*.05,o[2]-n.n[2]*.05];return t.corners.map(r)}function wo(n,e){let[t]=ot(e);return Ee((n.lu-(e.cols*t+(e.cols-1)*fe))/2)}var an=.4;function wt(n,e){let t={id:e,face:n.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:n.flat?15:null,flip:!1,entity:null,look:"black"},[r]=ot(t),[o,i]=n.span(n.ls/2);for(t.cols=Math.max(1,Math.floor((i-o-2*an+fe)/(r+fe))),t.rows=Math.max(1,Math.min(4,Math.floor((n.ls-2*an)/nn(n,t))));t.cols>1&&ke(n,{...t,u:wo(n,t),v:an}).length<t.rows*t.cols;)t.cols--;return t.u=wo(n,t),t.v=an,t}function jn(n,e){let t={...e,face:n.key,tilt:n.flat?e.tilt??15:null,rotation:null,flip:!1};return t.u=wo(n,t),t.v=an,{...t,...Ie(n,t)}}function xo(n,e,t){let r=n.settings.north??0,o=a=>a.lu*(1.3+Math.cos((Qt(a.facing,r)-180)*Math.PI/180)),i=xe(n,t).sort((a,l)=>o(l)-o(a))[0];if(!i)return null;let s={...wt(i,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((i.lu-.8+fe)/(en+fe))),s.u=Ee((i.lu-(s.cols*en+(s.cols-1)*fe))/2),s.v=Ee(Math.max(0,i.ls-Gn-.3)),s}function ln(n,e){let t=n.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),r=t.length?Math.max(...t.map(i=>i[0]))+3:0,o=t.length?Math.min(...t.map(i=>i[1])):0;return{id:e,face:pe,u:Ee(r),v:Ee(o),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(n.settings.north??0)||0,look:"black",entity:null}}function cn(n,e,t){let r=Kn(n,e),[o,i]=rn(r,e),[s,a]=[e.u+o/2,e.v+i/2],l=[r.eu[0]*s+r.es[0]*a,r.eu[2]*s+r.es[2]*a],c=t*Fe,u=l[0]*Math.cos(c)+l[1]*Math.sin(c)-o/2,d=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-i/2;return{u:Ee(u),v:Ee(d),rotation:(Math.round(t)%360+360)%360}}function un(n,e){let[t,r]=n.span(n.ls/2);return{id:e,face:n.key,u:Ee((t+r-Un)/2),v:Ee(Math.max(0,Math.min(n.ls-sn,n.ls*.45-sn/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function dn(n,e){let[t,r]=[e[0]-n.o[0],e[1]-n.o[2]],[o,i,s,a]=[n.eu[0],n.eu[2],n.es[0],n.es[2]],l=o*a-i*s;if(Math.abs(l)<1e-9)return null;let c=(t*a-r*s)/l,u=(o*r-i*t)/l;if(u<0||u>n.ls)return null;let[d,h]=n.span(u);return c>=d&&c<=h?{u:c,s:u}:null}function ko(n,e){let t=null;for(let r of n){if(r.wall){let[s,a]=[e[0]-r.o[0],e[1]-r.o[2]],l=s*r.eu[0]+a*r.eu[2],c=s*r.n[0]+a*r.n[2],u=l>=0&&l<=r.lu;if(u&&c>=-.05&&c<=.35)return{face:r,u:l,s:Number.NaN};u&&c>.35&&c<=.8&&!t&&(t={face:r,u:l,s:Number.NaN,y:-1/0});continue}let o=dn(r,e);if(!o)continue;let i=r.o[1]+r.es[1]*o.s;(!t||i>t.y)&&(t={face:r,...o,y:i})}return t&&{face:t.face,u:t.u,s:t.s}}function Zn(n,e,t){let r=nt(t,n.n);if(Math.abs(r)<1e-6)return null;let o=nt(he(n.o,e),n.n)/r;if(o<=0)return null;let i=he([e[0]+t[0]*o,e[1]+t[1]*o,e[2]+t[2]*o],n.o);return{t:o,u:nt(i,n.eu),s:nt(i,n.es)}}function $o(n,e,t){if(n.unbounded)return!0;if(t<0||t>n.ls)return!1;let[r,o]=n.span(t);return e>=r&&e<=o}function So(n,e,t,r){return ke(n,e).some(i=>{let s=i.corners.map(c=>{let u=he(c,n.o);return[nt(u,n.eu),nt(u,n.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return t>=Math.min(...a)-.05&&t<=Math.max(...a)+.05&&r>=Math.min(...l)-.05&&r<=Math.max(...l)+.05})}var Td=["n","ne","e","se","s","sw","w","nw"],Mo=(n,e)=>Td[Math.round(Qt(n.facing,e)/45)%8];function hn(n,e){let t=r=>{if(r.flat)return r.lu*r.ls*.8;let o=Math.cos((Qt(r.facing,e)-180)*Math.PI/180);return r.lu*r.ls*(1.2+o)};return[...n].sort((r,o)=>t(o)-t(r))[0]??null}var ta=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Qs={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Js=n=>typeof n=="string"?n:n[0],qn=n=>typeof n=="string"?Oe[n]:n[1],xt=.05,Pd=.02,ea=n=>Math.round(n*1e3)/1e3;function Od(n,e,t,r){switch(e){case"back":return{x:n.x0+t,z:n.z0+r,turn:0};case"right":return{x:n.x1-r,z:n.z0+t,turn:90};case"front":return{x:n.x1-t,z:n.z1-r,turn:180};case"left":return{x:n.x0+r,z:n.z1-t,turn:270}}}function na(n,e,t){let r=Z(n.points),o=r.x1-r.x0,i=r.z1-r.z0,s=[],a=(l,c,u,d,[h,p,f])=>{s.push({id:t(),type:l,x:ea(c),z:ea(u),rotation:d,w:h,d:p,h:f,variant:null,entity:null,power:null})};for(let[l,c,u]of Qs[e].rows){let d=l==="back"||l==="front"?o:i,h=0,p=[];for(let _ of u){if(h+qn(_)[0]>d-.1)break;p.push(_),h+=qn(_)[0]}let f=c==="start"?xt:c==="end"?d-h-xt:(d-h)/2;for(let _ of p){let v=qn(_),b=Od(r,l,f+v[0]/2,v[1]/2+Pd);a(Js(_),b.x,b.z,b.turn,v),f+=v[0]}}for(let[l,c,u,d]of Qs[e].spots){let h=qn(l),p=(v,b,x)=>Math.min(x,Math.max(b,v)),f=p(r.x0+o*c,r.x0+h[0]/2+xt,r.x1-h[0]/2-xt),_=p(r.z0+i*u,r.z0+h[1]/2+xt,r.z1-h[1]/2-xt);a(Js(l),f,_,d,h)}return s}var ra={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"{n} Erkennungs-Sensoren am Ger\xE4t dieser Kamera: {kinds}. Solange einer etwas meldet, markiert ein Pin es in 3D vor der Kamera.",camera_detect_none:"Am Ger\xE4t dieser Kamera gibt es noch keine Erkennungs-Sensoren. Pins erscheinen, sobald die Integration welche liefert (z. B. Frigate, UniFi Protect, Reolink).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern.",card_motion_trail_hint:"Ein Pfad der Bewegungen der letzten halben Stunde durchs Haus, mit Uhrzeiten",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Alle Kameras nebeneinander. Antippen vergr\xF6\xDFert eine; ein roter Rand hei\xDFt Bewegung.",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Eigene M\xF6bel-Packs sind JSON-Dateien (Format in docs/packs.md). Die mitgelieferten Packs sind immer da.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",feature_text_cameras:"Eine Kamera antippen: die Ansicht fliegt an ihren Platz und schaut in ihre Richtung, dann blendet das Live-Bild ein \u2013 mit dem, was sie gerade erkennt (Person, Fahrzeug, Tier). Die Kamerawand zeigt alle Kameras nebeneinander, die Bewegungsspur zeichnet die letzte halbe Stunde als leuchtenden Pfad durchs Haus, mit Zeiten an jedem Raum.",feature_name_energy:"Energiefluss",feature_name_cameras:"Kameras",feature_name_weather:"Wetter am Haus",feature_name_screens:"TV-Bildschirme",feature_name_sound:"Klang",feature_name_car:"Auto",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Was in NextFloor steckt: die gro\xDFen Funktionen und die M\xF6bel-Packs. Alles ist frei und Open Source \u2013 eigene M\xF6bel-Packs kannst du hier importieren.",ext_pro:"Funktionen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Live-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die Live-Erweiterungen (Wetter, Energie, Auto, Klang, Bildschirme, Kameras) findest du oben unter \u201EErweiterungen\u201C.",feature_text_weather:"Regen, Schnee, Hagel und Schneeregen fallen schr\xE4g mit dem echten Wind, Wolken ziehen mit ihren Schatten \xFCbers Grundst\xFCck, Blitze schlagen neben dem Haus ein, dazu Nebel, Sonne und Mond in ihrer echten Richtung.",feature_text_screens:"Ein Fernseher oder Monitor, der l\xE4uft, zeigt im 3D-Modell, was l\xE4uft: Cover, Titel, Interpret oder Serie und die App \u2013 auf einem Verlauf in der App-Farbe. Dahinter leuchtet ein Ambilight an der Wand, das beim Abspielen sanft atmet.",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",feature_text_sound:"\xDCber jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover, Titel und Interpret \u2013 antippen f\xFCr Zur\xFCck, Abspielen/Pause, Weiter und Lautst\xE4rke. Schallringe in der Farbe der App (Spotify gr\xFCn, Netflix rot \u2026) breiten sich aus, lauter hei\xDFt weiter, und Lautsprecher einer Multiroom-Gruppe sind mit einem Faden verbunden.",feature_text_car:"Eine Glaskarte \xFCber dem Stellplatz zeigt Ladestand mit Farbring, Reichweite, Laden mit Leistung, Stecker und Innentemperatur \u2013 mit Kn\xF6pfen f\xFCr Schloss, Klima und Laden. L\xE4dt das Auto, fliegen Energieteilchen von der Wallbox hinein; ist es weg, steht da, wo es gerade ist. Die Entit\xE4ten findet NextFloor selbst am Ger\xE4t des Autos.",pack_remove:"Entfernen",pack_builtin:"mitgeliefert",live_autarky:"autark",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_now:"jetzt",live_minutes_ago:"vor {n} min",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},oa={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"{n} detection sensors on this camera's device: {kinds}. While one reports something, a pin marks it in front of the camera in 3D.",camera_detect_none:"This camera's device has no detection sensors yet. Pins show up as soon as the integration offers some (e.g. Frigate, UniFi Protect, Reolink).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture.",card_motion_trail_hint:"A path of the last half hour's motion through the house, with times",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"All cameras side by side. Tap one to enlarge it; a red outline means motion.",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Your own furniture packs are JSON files (format in docs/packs.md). The packs that come with NextFloor are always there.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",feature_text_cameras:"Tap a camera: the view flies to where it hangs and looks its way, then the live picture fades in \u2013 with what it detects right now (person, vehicle, animal). The camera wall shows every camera side by side, the motion trail draws the last half hour as a glowing path through the house, with times at every room.",feature_name_energy:"Energy flow",feature_name_cameras:"Cameras",feature_name_weather:"Weather at the house",feature_name_screens:"TV screens",feature_name_sound:"Sound",feature_name_car:"Car",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"What NextFloor brings: its larger features and the furniture packs. Everything is free and open source \u2013 import your own furniture packs here.",ext_pro:"Features",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and live features",ext_teaser_text:'Furniture packs and the live add-ons (weather, energy, car, sound, screens, cameras) are under "Extensions" at the top.',feature_text_weather:"Rain, snow, hail and sleet fall at an angle with the real wind, clouds drift over the plot with their shadows, lightning strikes beside the house, plus fog, sun and moon in their real direction.",feature_text_screens:"A TV or monitor that plays shows in 3D what plays: cover, title, artist or series and the app \u2013 on a gradient in the app's colour. Behind it an ambilight glows on the wall, breathing gently while it plays.",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",feature_text_sound:"A card floats over every speaker or TV that plays, with cover, title and artist \u2013 tap it for previous, play/pause, next and volume. Sound rings in the colour of the app (Spotify green, Netflix red \u2026) spread out, louder reaches further, and speakers of a multiroom group are joined by a thread.",feature_text_car:"A glass card over the parking spot shows the charge with a colour ring, range, charging with its power, plug and inside temperature \u2013 with buttons for lock, climate and charging. While the car charges, energy particles fly into it from the wallbox; when it is away, the card says where it is. NextFloor finds the entities on the car's device by itself.",pack_remove:"Remove",pack_builtin:"built in",live_autarky:"self-sufficient",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_now:"now",live_minutes_ago:"{n} min ago",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Dd=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],pn=new Map,Ro=new Map;function Fo(n){let e=(n??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Dd.includes(t)?t:null}function ia(n){let e=Fo(n);return!e||pn.has(e)}function sa(n){let e=Fo(n);if(!e||pn.has(e))return Promise.resolve();let t=Ro.get(e);if(!t){let r=new URL(`./lang/${e}.json?v=be5ce4442bac`,import.meta.url).href;t=fetch(r).then(o=>o.ok?o.json():{}).then(o=>{pn.set(e,o&&typeof o=="object"?o:{})}).catch(()=>{pn.set(e,{})}).finally(()=>Ro.delete(e)),Ro.set(e,t)}return t}function Ae(n,e,t={}){let r=n?.language??navigator.language,o=r.startsWith("de")?null:Fo(r),s=(r.startsWith("de")?ra:o&&pn.get(o)||oa)[e]??oa[e]??ra[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function P(n,e,t=2){return e.toLocaleString(n?.language??void 0,{maximumFractionDigits:t})}var kt=$e`
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
`,Yn=$e`
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
`;var X=n=>/^(sensor|input_number|number)\./.test(n),Xn=n=>/^(binary_sensor|input_boolean)\./.test(n);function $t(n,e){if(!X(e))return!1;let t=n?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}function Hd(n,e){let t=n?.entities?.[e],r=t?.area_id??(t?.device_id?n?.devices?.[t.device_id]?.area_id:null);return r?n?.areas?.[r]?.name:void 0}function D(n,e){return Object.keys(n?.states??{}).filter(e).map(t=>{let r=Hd(n,t);return{id:t,label:r?`${H(n,t)} \xB7 ${r}`:H(n,t)}}).sort((t,r)=>t.label.localeCompare(r.label))}function Qn(n,e){return n.power&&n.power!=="none"?n.power:e.get(n.id)?.power??null}var aa={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},la=n=>(...e)=>({_$litDirective$:n,values:e}),Jn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var fn=class extends Jn{constructor(e){if(super(e),this.it=g,e.type!==aa.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===Te)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};fn.directiveName="unsafeHTML",fn.resultType=1;var ca=la(fn);var ua=40,Eo=class extends ae{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),r=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},o=this.fixed.filter(s=>!e||r(s)),i=e?this.options.filter(r):this.options;return[...o,...i.slice(0,ua)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),r=e?this.options.filter(o=>t.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,r-ua)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return m`<div class="wrap">
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
    </div>`}static styles=[kt,$e`
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",Eo);var St=n=>n.target.value,Ao=n=>Number.parseFloat(n.replace(",",".")),Q=n=>Math.round(n*1e3)/1e3,da=n=>n.wide?"nf-field nf-wide":"nf-field";function M(n,e,t,r,o=.01,i){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${o}
      min=${i??g}
      .value=${String(Q(t))}
      ?disabled=${!n.admin}
      @change=${s=>{let a=Ao(St(s));Number.isFinite(a)&&r(a)}}
    />
  </label>`}function ee(n,e,t,r,o={}){return m`<label class=${da(o)} title=${o.title??g}
    >${e}
    <input type="text" .value=${t} placeholder=${o.placeholder??g} maxlength=${o.maxlength??g} ?disabled=${!n.admin} @change=${i=>r(St(i).trim())} />
  </label>`}function O(n,e,t,r,o,i={}){return m`<label class=${da(i)} title=${i.title??g}
    >${e}
    <select ?disabled=${!n.admin} @change=${s=>o(St(s))}>
      ${r.map(([s,a])=>m`<option value=${s} ?selected=${s===t}>${a}</option>`)}
    </select>
  </label>`}function I(n,e,t,r,o={}){return m`<label class="nf-check ${o.wide===!1?"":"nf-wide"}" title=${o.title??g}
    ><input type="checkbox" .checked=${t} ?disabled=${!n.admin} @change=${i=>r(i.target.checked)} />
    ${e}</label
  >`}function E(n,e,t,r,o,i){let s=r===void 0?null:r?n.t("entity_auto",{name:H(n.hass,r)}):n.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:n.t("entity_none")}];return m`<label class="nf-field nf-wide"
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
      ${r?ca(`<ha-icon icon="${r}"></ha-icon>`):g}
    </span>
  </label>`}function er(n,e,t){return m`<label class="nf-field nf-wide" title=${n.t("marker_show_hint")}
    >${n.t("marker_show")}
    <select ?disabled=${!n.admin} @change=${r=>t(St(r)||null)}>
      <option value="" ?selected=${!e}>${n.t("marker_show_auto")}</option>
      ${Zi.map(r=>m`<option value=${r} ?selected=${r===e}>${n.t(`marker_show_${r}`)}</option>`)}
    </select>
  </label>`}var Y=(...n)=>m`<div class="nf-actions">${n}</div>`,$=(n,e="")=>m`<p class="nf-sub ${e}">${n}</p>`;function tr(n,e,t){return m`<label class="nf-field" title=${n.t("glow_scale_hint")}
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
  </label>`}function ha(n,e,t){let r=n.filter(o=>o.person!==e);return t&&t!=="none"?[...r,{person:e,sensor:t}]:r}function pa(n,e){let t=e.slice(e.indexOf(".")+1),r=o=>o.id.includes(t)&&/(area|room|raum|bermuda|espresense)/.test(o.id);return[...n.filter(r),...n.filter(o=>!r(o))]}function fa(n){let e=n.target?`, target: { x: ${n.target.x}, y: ${n.target.y}, z: ${n.target.z} }`:"";return`start_view: { theta: ${n.theta}, phi: ${n.phi}, radius: ${n.radius}${e} }`}function ma(n){let e=n.trim();if(!e)return{ok:!0,value:null};try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?{ok:!0,value:t}:{ok:!1}}catch{return{ok:!1}}}function nr(n,e,t){let r=[...n],[o]=r.splice(e,1);return r.splice(Math.max(0,Math.min(r.length,e+t)),0,o),r}var rr=(n,e)=>n.filter((t,r)=>r!==e),zo=(n,e,t)=>n.map((r,o)=>o===e?{...r,...t}:r),or=n=>n.length>0?n:void 0;var Id=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],Ld=40,Cd=20,Vd=30,Bd=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],Wd={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},To=(n,e,t,r=!1)=>m`<button class="nf-pin" title=${n} ?disabled=${r} @click=${t}>${e}</button>`;function Nd(n){let e=n.doc.settings.favorites??[],t=i=>n.change(s=>s.settings.favorites=or(i)),r=D(n.hass,i=>Id.includes(i.split(".")[0])&&!e.includes(i)),o=(i,s)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${H(n.hass,i)}</span></span>
    ${To(n.t("move_up"),"\u2191",()=>t(nr(e,s,-1)),s===0)}
    ${To(n.t("move_down"),"\u2193",()=>t(nr(e,s,1)),s===e.length-1)}
    ${To(n.t("delete"),"\u2715",()=>t(rr(e,s)))}
  </div>`;return m`<summary>${n.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${$(n.t("favorites_hint"))} ${e.map(o)}
    ${e.length<Ld?m`<div class="nf-form">${E(n,n.t("favorites_add"),null,void 0,r,i=>i&&i!=="none"&&!e.includes(i)&&t([...e,i]))}</div>`:g}`}function Kd(n){let e=n.doc.settings.media_presets??[],t=i=>n.change(s=>s.settings.media_presets=or(i)),r=(i,s)=>t(zo(e,i,s)),o=(i,s)=>m`<div class="nf-form nf-own-button">
    ${ee(n,n.t("own_button_label"),i.label,a=>r(s,{label:a||"Radio"}),{maxlength:60})}
    ${ee(n,n.t("preset_type"),i.type,a=>r(s,{type:a||"music"}),{title:n.t("preset_type_hint")})}
    ${ee(n,n.t("preset_content"),i.content,a=>r(s,{content:a}),{wide:!0,title:n.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>t(rr(e,s))}>${n.t("delete")}</button></div>
  </div>`;return m`<h4>${n.t("presets")}</h4>
    ${$(n.t("presets_hint"))}
    <datalist id="nf-preset-types">${Bd.map(i=>m`<option value=${i}></option>`)}</datalist>
    ${e.map(o)}
    ${e.length<Vd?Y(m`<button class="nf-btn" @click=${()=>t([...e,{id:T("preset"),label:"Radio",type:"music",content:""}])}>+ ${n.t("preset_add")}</button>`):g}`}function Gd(n,e,t){let r=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',o=i=>{let s=i.target;s.setCustomValidity("");let a=ma(s.value);if(a.ok)return t(a.value);s.setCustomValidity(n.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${n.t("own_data_hint")}
    >${n.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${r} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${o}></textarea>
  </label>`}function Ud(n){let e=n.doc.settings.buttons??[],t=s=>n.change(a=>a.settings.buttons=or(s)),r=(s,a)=>t(zo(e,s,a)),o=Yi.map(s=>[s,n.t(`own_action_${s}`)]),i=(s,a)=>m`<div class="nf-form nf-own-button">
    ${ee(n,n.t("own_button_label"),s.label,l=>r(a,{label:l||n.t("own_button_new")}),{maxlength:60})}
    ${O(n,n.t("own_button_action"),s.action,o,l=>r(a,{action:l}))} ${Mt(n,s.icon??null,l=>r(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?ee(n,n.t(`own_target_${s.action}`),s.target??"",l=>r(a,{target:l||null}),{wide:!0,placeholder:Wd[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?Gd(n,s,l=>r(a,{data:l})):g}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>t(nr(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>t(rr(e,a))}>${n.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${n.t("own_buttons")}</h4>
    ${$(n.t("own_buttons_hint"))} ${e.map(i)}
    ${e.length<Cd?Y(m`<button class="nf-btn" @click=${()=>t([...e,{id:T("btn"),label:n.t("own_button_new"),action:"navigate",target:null}])}>+ ${n.t("own_button_add")}</button>`):g}`}function ga(n){return m`<details class="nf-section">${Nd(n)} ${Ud(n)} ${Kd(n)}</details>`}function _a(n,e){let t=n.doc.settings.start_view??null,r=()=>{let o=e();o&&n.change(i=>i.settings.start_view=o)};return m`<details class="nf-section">
    <summary>${n.t("start_view")}</summary>
    ${$(n.t("start_view_hint"))}
    ${Y(m`<button class="nf-btn nf-primary" @click=${r}>${n.t("start_view_set")}</button>`,t?m`<button class="nf-btn" @click=${()=>n.change(o=>o.settings.start_view=null)}>${n.t("start_view_reset")}</button>`:g)}
    ${t?m`${$(n.t("start_view_saved"))} ${$(n.t("start_view_card"))}<code class="nf-code">${fa(t)}</code>`:g}
  </details>`}function ba(n){let e=Object.keys(n.hass?.states??{}).filter(o=>o.startsWith("person.")).sort(),t=D(n.hass,X),r=o=>E(n,`${H(n.hass,o)} \xB7 ${n.t("presence_sensor")}`,n.doc.presence.find(i=>i.person===o)?.sensor??null,void 0,pa(t,o),i=>n.replace({...structuredClone(n.doc),presence:ha(n.doc.presence,o,i)}));return m`<details class="nf-section">
    <summary>${n.t("presence")}</summary>
    <div class="nf-form">${e.length>0?e.map(r):m`<p class="nf-sub nf-wide">${n.t("no_persons")}</p>`}</div>
    ${$(n.t("presence_hint"))}
  </details>`}var va="nextfloor";function jd(n){let e=structuredClone(n);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.background=null,t.placements=[],t.rooms.forEach(r=>r.area_id=null),t.furniture.forEach(r=>Object.assign(r,{entity:null,power:null})),t.openings.forEach(r=>Object.assign(r,{cover:null,contact:null,tilt:null}));return e}function ya(n,e){return{format:va,version:1,exported_at:new Date().toISOString(),building:e?jd(n):structuredClone(n)}}var Zd=n=>!!n&&n.version===1&&Array.isArray(n.floors)&&!!n.settings;function wa(n){let e;try{e=JSON.parse(n)}catch{throw new Error("not_json")}let t=e,r=t?.format===va?t.building:e;if(!Zd(r))throw new Error("not_plan");return r.floors.forEach(o=>o.background=null),Pn(r)}var qd=n=>!/^https?:\/\//.test(n)&&!n.startsWith("camera:");function xa(n){let e=new Set;for(let t of n.floors){t.background?.image_id&&e.add(t.background.image_id);let r=t.furniture.flatMap(o=>o.pictures??[]);for(let{image:o}of r)o&&qd(o)&&e.add(o)}return[...e]}function ka(n,e){let t=document.createElement("a"),r=URL.createObjectURL(new Blob([e],{type:"application/json"}));Object.assign(t,{href:r,download:n}),t.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}var Yd={api:{listHistory:Ai,restoreSnapshot:Ti,takeSnapshot:zi,fetchBackup:Di,restoreBackup:Hi,fetchImage:Sn,storeImage:Mn},alert:n=>alert(n),confirm:n=>confirm(n),download:ka,today:()=>new Date().toISOString().slice(0,10)},Xd=n=>String(n?.message??n),ir=class{host;deps;history=null;busy=!1;constructor(e,t=Yd){this.host=e,this.deps=t}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:t,t:r}=this.host;!t||!this.deps.confirm(r("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(t,e.id),this.host.say(r("backup_restored")),await this.loadHistory())}exportPlan(e){let t=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${t}-${this.deps.today()}.json`,JSON.stringify(ya(this.host.doc,e),null,2))}async importPlan(e){let{hass:t,t:r}=this.host;if(!e||!t)return;let o;try{o=wa(await e.text())}catch(i){let s=i.message;this.deps.alert(s==="not_json"?r("import_error_not_json"):s==="not_plan"?r("import_error_not_plan"):r("backup_import_error",{error:s}));return}this.deps.confirm(r("backup_import_confirm"))&&(await this.deps.api.takeSnapshot(t).catch(()=>{}),this.host.adopt(o),this.host.say(r("backup_imported")))}async exportFull(){let{hass:e,t}=this.host;if(e){this.busy=!0,this.host.refresh();try{let r=await this.deps.api.fetchBackup(e),o={};for(let i of xa(r.building))await this.deps.api.fetchImage(e,i).then(s=>o[i]=s,()=>{});this.deps.download(`nextfloor-${t("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...r,exported_at:new Date().toISOString(),images:o}))}catch(r){this.deps.alert(t("backup_import_error",{error:Xd(r)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:t,t:r}=this.host;if(!e||!t)return;let o;try{o=JSON.parse(await e.text())}catch{this.deps.alert(r("import_error_not_json"));return}if(o?.format!=="nextfloor-backup"||!o.building){this.deps.alert(r("backup_full_not_backup"));return}if(this.deps.confirm(r("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let i=await this.deps.api.restoreBackup(t,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))await this.deps.api.storeImage(t,l,c).then(()=>s++,()=>{});this.host.adopt(Pn(i.building)),this.host.packsChanged();let a=i.skipped.length>0?` ${r("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(r("backup_full_restored",{packs:i.packs,pictures:s})+a)}catch(i){let{code:s,message:a}=i??{};this.deps.alert(r("backup_import_error",{error:a??s??String(i)}))}finally{this.busy=!1,this.host.refresh()}}}};var $a=(n,e)=>m`<label class="nf-btn nf-upload"
  >${n}<input
    type="file"
    accept="application/json,.json"
    @change=${t=>{let r=t.target,o=r.files?.[0];r.value="",e(o)}}
  />
</label>`;function Sa(n,e){let t=n.t,r=e.history,o=r===null?$(t("loading")):r.length===0?$(t("backup_none")):m`<div class="nf-room-list">
            ${r.map(i=>m`<div class="nf-row nf-dev-row">
                <span>${e.timeOf(i)} <span class="nf-muted">· ${t("backup_summary",{rooms:i.rooms,furniture:i.furniture})}</span></span>
                <button class="nf-link" @click=${()=>e.restorePoint(i)}>${t("backup_restore")}</button>
              </div>`)}
          </div>`;return m`<details class="nf-section" @toggle=${i=>i.target.open&&void e.loadHistory()}>
    <summary>${t("backup")}</summary>
    <h4 class="nf-lib-head">${t("backup_history")}</h4>
    ${o}
    <h4 class="nf-lib-head">${t("backup_file")}</h4>
    ${Y(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${t("backup_export")}</button>`,m`<button class="nf-btn" title=${t("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${t("backup_export_share")}</button>`,$a(t("backup_import"),i=>{e.importPlan(i)}))}
    ${$(t("backup_hint"))}
    <h4 class="nf-lib-head">${t("backup_full")}</h4>
    ${Y(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":t("backup_full_export")}</button>`,$a(t("backup_full_import"),i=>{e.importFull(i)}))}
    ${$(t("backup_full_hint"))}
  </details>`}function Ma(n,e){return e&&n.states[e]?e:Object.keys(n.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var Rt=(n,e,t)=>Math.min(t,Math.max(e,n)),Ra=n=>(Math.round(n)%360+360)%360;function Fa(n,e,t){return t?[...new Set([...n,e])]:n.filter(r=>r!==e)}var Qd=["none","flat","gable","custom"];function Ea(n,e){let t=n.t,r=n.doc.settings,o=c=>n.replace({...structuredClone(n.doc),settings:{...structuredClone(n.doc.settings),...c}}),i=c=>o({roof:{...r.roof,...c}}),s=Qd.map(c=>[c,t(`roof_${c}`)]),a=r.weather_effects??Qi,l=r.roof.type==="gable";return m`<details class="nf-section">
    <summary>${t("settings")}</summary>
    <div class="nf-form">
      ${M(n,t("wall_exterior"),r.wall_exterior,c=>o({wall_exterior:Rt(c,.02,1)}),.01,.02)}
      ${M(n,t("wall_interior"),r.wall_interior,c=>o({wall_interior:Rt(c,.02,1)}),.01,.02)}
      ${M(n,t("grid"),r.grid,c=>o({grid:Rt(c,.01,1)}),.01,.01)}
      ${M(n,t("north"),r.north,c=>o({north:Ra(c)}),1)}
      ${O(n,t("roof"),r.roof.type,s,c=>c==="custom"?e.useRoofSections():i({type:c}),{wide:!0})}
      ${l?O(n,t("roof_ridge"),r.roof.ridge==="short"?"short":"long",[["long",t("roof_ridge_long")],["short",t("roof_ridge_short")]],c=>i({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?M(n,t("roof_pitch"),r.roof.pitch,c=>i({pitch:Rt(c,5,60)}),1,5):g}
      ${r.roof.type!=="none"?M(n,t("roof_overhang"),r.roof.overhang,c=>i({overhang:Rt(c,0,2)}),.05,0):g}
      ${n.hass?E(n,t("weather_entity"),r.weather_entity??null,Ma(n.hass,null),D(n.hass,c=>c.startsWith("weather.")),c=>o({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${t("weather_effects")}</div>
      ${Xi.map(c=>I(n,t(`weather_effect_${c}`),a.includes(c),u=>o({weather_effects:Fa(a,c,u)}),{wide:!1}))}
      ${I(n,t("rain_warning"),r.rain_warning!==!1,c=>o({rain_warning:c}))}
      ${I(n,t("sun_patches"),r.sun_patches!==!1,c=>o({sun_patches:c}),{title:t("sun_patches_hint")})}
    </div>
    ${$(`${t("north_hint")} ${t("weather_entity_hint")}`)}
  </details>`}var sr=n=>n&&n!=="none"?n:null,ar=(n,e)=>{e&&!n.includes(e)&&n.push(e)};function Po(n,e=t=>sr(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let r of n.floors.flatMap(o=>o.furniture)){let o=e(r);if(r.type==="meter")t.grid??=o,t.gridExport??=sr(r.export);else if(r.type==="inverter")ar(t.solar,o);else if(r.type==="home_battery"){let i=sr(r.charge);ar(t.battery,o),ar(t.charge,i),ar(t.soc,sr(r.soc)),(o||i)&&t.batteries.push({power:o,charge:i})}}return t}function Jd(n){for(let e of n.floors){let t=e.furniture.find(r=>r.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return n.energy.meter}var eh=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,th=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function lr(n,e,t="power"){let r=e?n.entities?.[e]?.device_id:void 0;if(!e||!r)return null;let o=Object.keys(n.states).filter(a=>a.startsWith("sensor.")&&n.entities?.[a]?.device_id===r&&n.states[a]?.attributes.device_class===t);if(o.length<=1)return o[0]??null;let i=o.filter(a=>!eh.test(a)),s=e.replace(/^sensor\./,"").replace(th,"");return i.find(a=>s&&a.includes(s))??i[0]??o[0]}function Aa(n,e){let t={},r=(o,i)=>{i&&!t[o]&&(t[o]=i)};for(let o of e.energy_sources??[])if(o.type==="grid")r("grid",lr(n,o.flow_from?.[0]?.stat_energy_from??o.flow_to?.[0]?.stat_energy_to));else if(o.type==="solar")r("solar",lr(n,o.stat_energy_from));else if(o.type==="battery"){let i=o.stat_energy_from??o.stat_energy_to;r("battery",lr(n,i)),r("battery_soc",lr(n,i,"battery"))}return t}function Le(n,e=!1){let t=n?Number(n.state):NaN;if(!Number.isFinite(t))return null;let r={kW:1e3,MW:1e6}[String(n.attributes.unit_of_measurement??"W")]??1;return e?-t*r:t*r}var za=n=>{let e=n.filter(t=>t!==null);return e.length?e.reduce((t,r)=>t+r,0):null};function nh(n,e,t){let r=e.grid??t.grid,o=r?Le(n.states[r],e.grid_invert):null;if(!e.grid&&t.gridExport){let i=Math.max(0,Le(n.states[t.gridExport])??0);return Math.max(0,o??0)-i}return o}function rh(n,e,t){return e.solar?Le(n.states[e.solar]):t.solar.length?za(t.solar.map(r=>Le(n.states[r]))):null}function oh(n,e,t){return e.battery?Le(n.states[e.battery],e.battery_invert):za(t.batteries.map(r=>r.charge?(r.power?Math.max(0,Le(n.states[r.power])??0):0)-Math.max(0,Le(n.states[r.charge])??0):r.power?Le(n.states[r.power],e.battery_invert):null))}function Ta(n,e,t,r=Po(e)){let o=e.energy,i=nh(n,o,r),s=rh(n,o,r),a=oh(n,o,r),l=(o.battery_soc?[o.battery_soc]:r.soc).map(p=>Number(n.states[p]?.state)).filter(Number.isFinite),c=l.length?l.reduce((p,f)=>p+f,0)/l.length:null,u=o.tariff?n.states[o.tariff]:void 0,d=Number(u?.state),h=o.consumption?Le(n.states[o.consumption]):null;return h===null&&(i!==null||s!==null||a!==null)&&(h=(i??0)+Math.max(0,s??0)+(a??0)),h===null&&t.length>0&&(h=t.reduce((p,f)=>p+f.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)}}function ih(n,e,t){let r=n.b[0]-n.a[0],o=n.b[1]-n.a[1],i=Math.hypot(r,o)||1,s=Math.min(1,Math.max(0,((e.x-n.a[0])*r+(e.z-n.a[1])*o)/(i*i))),a=n.a[0]+r*s,l=n.a[1]+o*s,c=o/i*(a-t.x)+-r/i*(l-t.z)<0?-1:1;return{x:a,z:l,nx:c*o/i,nz:-c*r/i,distance:Math.hypot(e.x-a,e.z-l)}}function Pa(n){let e=Jd(n),t=e?n.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!t)return null;let r={exterior:n.settings.wall_exterior,interior:n.settings.wall_interior},o=Re(t.rooms,r,t.walls??[]).walls.filter(c=>c.exterior),i=t.rooms.flatMap(c=>c.points);if(o.length===0||i.length===0)return null;let s={x:i.reduce((c,u)=>c+u[0],0)/i.length,z:i.reduce((c,u)=>c+u[1],0)/i.length},a=o.map(c=>ih(c,e,s)).reduce((c,u)=>u.distance<c.distance?u:c),l=r.exterior/2+3;return{floorId:t.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function Oa(n,e){let t=n.floors.flatMap(f=>f.furniture.map(_=>({floor:f,item:_}))),r=f=>t.filter(_=>_.item.type===f),o=f=>!!Qn(f.item,e),i=f=>({kind:"device",...f}),[s,a,l,c,u]=[n.settings.roof.solar??[],r("meter"),r("inverter"),r("home_battery"),r("grid_point")],d=!!n.energy.grid||a.some(o),h=!!n.energy.solar||l.length>0&&l.every(o),p=!!n.energy.battery||c.every(f=>o(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:d?"ok":"todo",label:d?"chk_meter":"chk_meter_sensor",target:i(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:h?"ok":"todo",label:h?"chk_inverter":"chk_inverter_sensor",target:i(l.find(f=>!o(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:p?"ok":"todo",label:p?"chk_battery":"chk_battery_sensor",target:i(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},u.length>0?{state:"ok",label:"chk_grid",target:i(u[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}var sh={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},Ha=n=>n.hass?Je(n.hass,n.doc.floors):new Map,ah=le,lh=(n,e)=>e.name||n.t(`furn_${e.type}`);function Ia(n,e){let t=Oa(n.doc,Ha(n)),r=t.filter(o=>o.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${n.t("chk_title")} <span class="nf-sub">${r}/${t.length}</span></h3>
    ${$(n.t("chk_hint"))}
    ${t.map(o=>m`<button class="nf-chk nf-chk-${o.state}" ?disabled=${!n.admin&&o.state!=="ok"} @click=${()=>e.follow(o.target)}>
        <span>${sh[o.state]}</span>${n.t(o.label)}
      </button>`)}
  </section>`}function La(n,e){let t=n.doc.floors.flatMap(r=>r.furniture.filter(o=>ah.includes(o.type)).map(o=>({floor:r,item:o})));return m`<section>
    <h3>⚡ ${n.t("energy_devices")}</h3>
    ${$(n.t("energy_devices_hint"))}
    ${t.length>0?m`<div class="nf-room-list">
          ${t.map(({floor:r,item:o})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(r,o)}><span>${lh(n,o)} · ${r.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${le.map(r=>m`<button class="nf-btn" ?disabled=${!n.admin||!n.floor} @click=${()=>e.addDevice(r)}>+ ${n.t(`furn_${r}`)}</button>`)}
    </div>
  </section>`}var Da=(n,e,t)=>m`<p class="nf-sub nf-pack-error">${n.t(e)} <button class="nf-btn" ?disabled=${!n.admin} @click=${t}>${n.t("energy_sign_flip")}</button></p>`;function Ca(n,e){let{energy:t}=n.doc,r=(v,b)=>n.hass?.states[v]?.attributes[b],o=D(n.hass,v=>$t(n.hass,v)),i=D(n.hass,v=>X(v)&&r(v,"device_class")==="battery"),s=D(n.hass,v=>X(v)&&(r(v,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(r(v,"unit_of_measurement")??""))),a=Ha(n),l=Po(n.doc,v=>Qn(v,a)),c=v=>n.replace({...structuredClone(n.doc),energy:{...n.doc.energy,...v}}),u=v=>b=>c({[v]:b==="none"?null:b}),d=n.hass?Ta(n.hass,n.doc,[],l):null,h=!!d&&(d.solar??0)<20,p=h&&d.grid!==null&&d.grid<-50,f=h&&d.battery!==null&&d.battery<-50&&(d.grid??0)<=0,_=(v,b)=>I(n,n.t("energy_invert"),v,x=>c(b(x)));return m`<section>
    <h3>⚖ ${n.t("energy_balance")}</h3>
    ${$(n.t("energy_balance_hint"))}
    ${p?Da(n,"energy_sign_grid",()=>c({grid_invert:!t.grid_invert})):g}
    ${f?Da(n,"energy_sign_battery",()=>c({battery_invert:!t.battery_invert})):g}
    <div class="nf-form">
      ${E(n,n.t("energy_grid"),t.grid,l.grid,o,u("grid"))}
      ${_(t.grid_invert,v=>({grid_invert:v}))}
      ${E(n,n.t("energy_solar_sensor"),t.solar,l.solar[0]??null,o,u("solar"))}
      ${E(n,n.t("energy_battery_sensor"),t.battery,l.battery[0]??null,o,u("battery"))}
      ${_(t.battery_invert,v=>({battery_invert:v}))}
      ${E(n,n.t("energy_battery_soc"),t.battery_soc,l.soc[0]??null,i,u("battery_soc"))}
      ${E(n,n.t("energy_consumption_sensor"),t.consumption,null,o,u("consumption"))}
      ${E(n,n.t("energy_tariff_sensor"),t.tariff,void 0,s,u("tariff"))}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!n.admin||!n.hass} @click=${()=>e.importPrefs()}>${n.t("energy_import_prefs")}</button></div>
    ${e.note?$(e.note):g} ${$(n.t("energy_hint"))}
  </section>`}var Va=n=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${n.t("feature_name_energy")}</b></div>
  ${$(n.t("feature_text_energy"))}
</section>`;function Ba(n){let e=(t,r,o)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${t}" target="_blank" rel="noopener">${r} ${n.t(o)}</a>`;return m`<section class="nf-help">
    <h3>${n.t("help_title")}</h3>
    ${$(n.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}var Ce=(n,e)=>e.map(t=>n.toScreen(t).join(",")).join(" ");var Wa=(n,e)=>k`<circle cx=${n} cy=${e} r="16" class="nf-hit" /><circle cx=${n} cy=${e} r="6" />`,ch=(n,e,t)=>k`<g class="nf-vertex" data-roof-vertex=${t}>${Wa(...n.toScreen(e))}</g>`,uh=(n,e,t)=>k`<g class="nf-vertex" data-roof-corner=${t}>${Wa(...n.toScreen(e))}</g>`;function dh(n,e,t,r){let{t:o,hass:i}=n.host,s=t.dormer?o("roof_dormer"):t.open?o("roof_open_short"):o(`roof_shape_${t.shape}`);return`${e.isFixed(t)?"\u{1F512} ":""}${r+1} \xB7 ${s} \xB7 ${P(i,et(t),1)} m`}function Oo(n,e){let t=n.host.doc.settings.roof,r=t.type==="custom"?t.sections??[]:[],o=n.host.admin,i=(s,a)=>{let l=s.id===e.sectionId,c=te(s),u=s.shape==="flat"&&s.points&&s.points.length>=3?s.points:null,d=Nn(r,s),h=d?te(po(d,s)):c,p=u??[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,h.w),h.at(h.u0,h.w)],_=((s.shape==="flat"||s.shape==="parapet"?null:vt(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([R,S])=>{let[F,z]=n.toScreen(c.at(R[0],R[1])),[V,N]=n.toScreen(c.at(S[0],S[1]));return k`<line x1=${F} y1=${z} x2=${V} y2=${N} />`}),[v,b]=n.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),w=l&&o&&!e.isFixed(s)?u?u.map((R,S)=>ch(n,R,`${s.id}:${S}`)):[[0,0],[1,0],[1,1],[0,1]].map(([R,S])=>{let F=R?Math.max(s.x0,s.x1):Math.min(s.x0,s.x1),z=S?Math.max(s.z0,s.z1):Math.min(s.z0,s.z1);return uh(n,[F,z],`${s.id}:${R}:${S}`)}):g;return k`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${Ce(n,p)} />
        <g class="nf-roof-ridge">${_}</g>
        <text x=${v} y=${b-14}>${dh(n,e,s,a)}</text>
      </g>${w}`};return k`<g class="nf-roof-layer">${r.map(i)}</g>`}function hh(n,e,t,r,o){let i=r*Math.PI/180,[s,a]=n.toScreen(t),[l,c]=n.toScreen([t[0]+Math.sin(i)*o,t[1]-Math.cos(i)*o]);return k`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Na(n,e){let{doc:t,admin:r}=n.host,o=t.settings.roof.solar??[];if(o.length===0)return g;let i=W(t),s=a=>{let l=oe(t,a,i);if(!l||l.wall&&l.wall.floorId!==n.floorId)return g;let c=a.id===e.solarId,u=g;if(c&&l.unbounded&&r&&!a.locked){let p=on(l,a),f=Math.max(...ke(l,a,!0).flatMap(_=>_.corners.map(v=>Math.hypot(v[0]-p[0],v[2]-p[1]))));u=hh(n,a.id,p,a.rotation??0,.9+f*.5)}let d=p=>{let f;if(l.wall){let _=Math.max(.3,...p.corners.map(y=>(y[0]-l.o[0])*l.n[0]+(y[2]-l.o[2])*l.n[2])),[v,b]=[p.corners[0],p.corners[1]],x=y=>[y[0]+l.n[0]*_,y[2]+l.n[2]*_];f=[[v[0],v[2]],x(v),x(b),[b[0],b[2]]]}else f=p.corners.map(_=>[_[0],_[2]]);return k`<polygon data-cell=${p.cell} class=${p.skipped?"nf-solar-off":""} points=${Ce(n,f)} />`},h=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return k`<g data-solar=${a.id} class=${h}>${ke(l,a,c).map(d)}</g>${u}`};return k`<g class="nf-solar-layer">${o.map(s)}</g>`}function Ka(n,e){let t=n.host.doc.settings.roof.windows??[];if(t.length===0)return g;let r=new Map(W(n.host.doc).map(i=>[i.key,i])),o=i=>{let s=r.get(i.face),a=s?yo(s,i):null;return a?k`<g data-roofwin=${i.id} class=${`nf-roofwin${i.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${Ce(n,a.map(l=>[l[0],l[2]]))} /></g>`:g};return k`<g class="nf-roofwin-layer">${t.map(o)}</g>`}var ph={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function Ga(n,e,t){if(!e)return g;let r=e.furniture.filter(i=>le.includes(i.type)),o=i=>{let[s,a]=n.toScreen([i.x,i.z]),l=i.id===t,c=n.host.t(`furn_${i.type}`);return k`<g data-energy-device=${i.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${ph[i.type]??"\u26A1"}</text>
      ${l?k`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return k`<g class="nf-energy-markers">${r.map(o)}</g>`}function Ua(n,e){let{doc:t,hass:r}=n.host;if(!(t.settings.roof.sections??[]).some(s=>fo(s,e.elevation+e.height)))return g;let i=[1.5,2].flatMap(s=>mo({settings:t.settings},e.elevation,s).map(([a,l])=>{let[c,u]=n.toScreen(a),[d,h]=n.toScreen(l);return k`<line class="nf-headroom" x1=${c} y1=${u} x2=${d} y2=${h} />
        <text class="nf-headroom-label" x=${(c+d)/2} y=${(u+h)/2-4}>${P(r,s,1)} m</text>`}));return k`${i}`}function fh(n,e,t){let[r,o]=[n+t/2,e-30];return k`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${r} y1=${e} x2=${r} y2=${o} />
    <circle cx=${r} cy=${o} r="16" class="nf-hit" />
    <circle cx=${r} cy=${o} r="8" />
    <path d="M${r-4} ${o-1}a4 4 0 1 1 2 3.5" />
  </g>`}function mh(n,e){let t=e.level?.length?e.level:e.ruler;if(!t?.length)return g;let r=t.map(o=>n.toScreen(o));return k`<g class="nf-bg-ruler">
    ${r.length===2?k`<line x1=${r[0][0]} y1=${r[0][1]} x2=${r[1][0]} y2=${r[1][1]} />`:g}
    ${r.map(([o,i])=>k`<circle cx=${o} cy=${i} r="6" />`)}
  </g>`}function ja(n,e,t){let r=t?.background,o=e.picture(r?.image_id);if(!r||!o)return g;let[i,s]=n.toScreen([r.x,r.z]),a=r.width*n.scale,l=a*o.aspect,c=e.handlesShown;return k`<g transform="rotate(${r.rotation??0} ${i+a/2} ${s+l/2})">
    <image href=${o.url} x=${i} y=${s} width=${a} height=${l} opacity=${r.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?k`<rect class="nf-bg-frame" x=${i} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+a} cy=${s+l} r="9" />
        ${fh(i,s,a)}`:g}
  </g>${mh(n,e)}`}var Do=n=>Math.round(n*1e3)/1e3,Ho=(n,e)=>n.width*e,Ft=(n,e)=>[n.x+n.width/2,n.z+Ho(n,e)/2];function Za(n,e,t){let[r,o]=[n[0]-e[0],n[1]-e[1]];return[e[0]+r*Math.cos(t)-o*Math.sin(t),e[1]+r*Math.sin(t)+o*Math.cos(t)]}var qa=n=>((n+180)%360+360)%360-180;function Ya(n,e,t){return{x:Do(n[0]-e/2),z:Do(n[1]-t/2)}}function Xa(n,e,t,r){if(Math.hypot(r[0]-t[0],r[1]-t[1])<.05)return null;let o=Math.atan2(r[1]-t[1],r[0]-t[0]),i=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(i)<1e-4)return null;let s=Za(Ft(n,e),t,i),a=Math.round(qa((n.rotation??0)+i*180/Math.PI)*100)/100;return{...n,rotation:a,...Ya(s,n.width,Ho(n,e))}}function Qa(n,e,t,r,o){let i=Math.hypot(r[0]-t[0],r[1]-t[1]);if(!(o>0)||i<1e-4)return null;let s=o/i,[a,l]=Ft(n,e),c=[t[0]+s*(a-t[0]),t[1]+s*(l-t[1])],u=n.width*s;return{...n,width:Do(u),...Ya(c,u,Ho(n,e)*s)}}function Ja(n,e,t){let r=Za(t,Ft(n,e),-(n.rotation??0)*Math.PI/180);return[r[0]-n.x,r[1]-n.z]}function el(n,e,t,r){let o=n+(t-e)*180/Math.PI;return qa(r?Math.round(o/15)*15:Math.round(o*10)/10)}var gh=2048;async function tl(n){let e=await createImageBitmap(n),t=Math.min(1,gh/Math.max(e.width,e.height)),r=document.createElement("canvas");return r.width=Math.round(e.width*t),r.height=Math.round(e.height*t),r.getContext("2d").drawImage(e,0,0,r.width,r.height),{data:r.toDataURL("image/jpeg",.85),aspect:r.height/r.width}}var cr=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:t,api:r}=this.deps;if(t.hass){this.loading.add(e);try{let o=await r.fetchImage(t.hass,e),i=await this.aspectOf(o);this.pictures={...this.pictures,[e]:{url:o,aspect:i}},this.deps.refresh()}catch{}}}async aspectOf(e){let t=new Image;return t.src=e,await t.decode(),t.naturalHeight/t.naturalWidth}async upload(e){let{host:t,api:r}=this.deps;if(!e||!t.hass)return;let{data:o,aspect:i}=await this.deps.readPicture(e),s=T("img");await r.storeImage(t.hass,s,o),this.pictures={...this.pictures,[s]:{url:o,aspect:i}};let a=t.floor?.rooms??[],l=a.length>0?Z(a.flatMap(u=>u.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((t,r)=>Object.assign(r,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let t=[...this.levelPoints??[],e];if(t.length<2){this.level=t;return}this.level=null,this.straighten(t[0],t[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,t){let r=this.deps.host.floor?.background,o=this.picture(r?.image_id),i=r&&o?Xa(r,o.aspect,e,t):null;i&&this.setBackground(i)}applyRuler(){let e=this.deps.host.floor?.background,t=this.picture(e?.image_id),r=this.rulerPoints;if(!e||!t||!r||r.length<2)return;let o=Qa(e,t.aspect,r[0],r[1],this.rulerMetres);o&&(this.setBackground(o),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var nl=.1,Io=(n,e,t)=>m`<button class="nf-btn nf-wide ${n?"nf-primary":""}" aria-pressed=${n} @click=${t}>${e}</button>`;function _h(n,e){let t=e.ruler;if(!t)return g;if(t.length<2)return $(n.t(t.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let r=Math.hypot(t[1][0]-t[0][0],t[1][1]-t[0][1]),o=()=>e.applyRuler();return m`${$(n.t("bg_ruler_length_hint",{m:P(n.hass,r,2)}),"nf-wide")}
    <label class="nf-field"
      >${n.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${i=>e.rulerLength=Ao(i.target.value)||0}
        @keydown=${i=>i.key==="Enter"&&o()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${o}>${n.t("bg_ruler_apply")}</button>`}function bh(n,e){if(!n.admin)return g;let t=n.t,r=e.level;return m`${Io(e.edit,t(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${$(t(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${Io(!!r,`\u{1F4D0} ${t(r?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${r?$(t(r.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${Io(!!e.ruler,`\u{1F4CF} ${t(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${_h(n,e)}`}function rl(n,e,t){let r=t.background,o=n.t,i=s=>r&&e.setBackground({...r,...s});return m`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${o("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${o("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${r?m`${M(n,o("x"),r.x,s=>i({x:s}))} ${M(n,o("z"),r.z,s=>i({z:s}))}
          ${M(n,o("background_width"),r.width,s=>i({width:Math.max(nl,s)}),.01,nl)}
          ${M(n,o("background_rotation"),r.rotation??0,s=>i({rotation:Math.round(s*10)/10}),.5)}
          ${bh(n,e)}
          <label class="nf-field"
            >${o("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(Q(r.opacity))} @change=${s=>i({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${o("background_remove")}</button>`:g}
    </div>
  </details>`}var B=n=>Math.round(n*1e3)/1e3,vh=(n,e)=>((n+e)%360+360)%360;function ol(n,e){return{id:T("wall"),a:[B(n[0]),B(n[1])],b:[B(e[0]),B(e[1])],thickness:null}}function il(n,e){let t=Math.hypot(n.b[0]-n.a[0],n.b[1]-n.a[1])||1,r=Math.max(.1,e)/t;return[B(n.a[0]+(n.b[0]-n.a[0])*r),B(n.a[1]+(n.b[1]-n.a[1])*r)]}var sl=(n,e)=>({height:n>=e-.005?null:Math.max(.05,n)});function al(n,e){return{id:T("hole"),type:"stairwell",x:B((n[0]+e[0])/2),z:B((n[1]+e[1])/2),w:B(e[0]-n[0]),d:B(e[1]-n[1]),h:.02,rotation:0,variant:null}}var ll=n=>({id:T("outdoor"),type:"lawn",points:n.map(([e,t])=>[B(e),B(t)])}),cl=n=>({...n,id:T("outdoor"),points:n.points.map(([e,t])=>[B(e+.5),B(t+.5)])});function ul(n,e,t,r){let[o,i,s]=Be(n),a=e.floors.filter(c=>c.elevation>t.elevation).sort((c,u)=>c.elevation-u.elevation)[0],l=n==="stairs"?B(a?a.elevation-t.elevation:t.height+.25):s;return{id:T("furniture"),type:n,x:B(r[0]),z:B(r[1]),rotation:0,w:o,d:i,h:l,variant:null}}var dl=n=>({...structuredClone(n),id:T("furniture"),x:B(n.x+.3),z:B(n.z+.3)}),hl=(n,e)=>vh(n,e);function pl(n){let[e,t,r]=Be("parking");return{id:T("furniture"),type:"parking",x:n.x,z:n.z,rotation:n.rotation,w:Math.max(e,B(n.w+.5)),d:Math.max(t,B(n.d+.4)),h:r,variant:null,vehicle:n.type,...n.name?{name:n.name}:{}}}function fl(n,e){let[t,r,o]=Be(e);return{id:T("furniture"),type:e,x:n.x,z:n.z,rotation:n.rotation??0,w:t,d:r,h:o,variant:null,entity:n.entity_id,name:n.name??null,...n.locked?{locked:!0}:{}}}var ml=(n,e)=>({entity_id:e,x:n.x,z:n.z,y:null,rotation:n.rotation,...n.name?{name:n.name}:{}});function gl(n,e){for(let t of n.floors)t.placements=t.placements.filter(r=>r.entity_id!==e),t.furniture=t.furniture.filter(r=>!(q(r.type)&&r.entity===e))}function _l(n,e,t,r){let o=new Set(r);for(let s of n.floors)s.placements=s.placements.filter(a=>!o.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(q(a.type)&&a.entity&&o.has(a.entity)));let i=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>q(s.type)).map(s=>[s.x,s.z])];for(let s of Fs(t,r,i)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=Oe.lamp_ceiling;e.furniture.push({id:T("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function bl(n){let[e,t]=ie(n.points);return[B(e),B(t)]}function vl(n,e,t,r){let o=Math.min(t,n)/2,i=r>0?Math.round(e/r)*r:e;return B(Math.min(n-o,Math.max(o,i)))}function yl(n,e){let t=ft[e],r=Tn(n)===e?{}:{width:t.width};return{type:t.type,leaves:t.leaves,sill:t.sill,height:t.height,style:t.style??null,...r}}function wl(n,e,t){let r=Z(n.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[t,t+(s-o)]:e==="z"?[i,a]=[t,t+(a-i)]:e==="w"?s=o+Math.max(.1,t):a=i+Math.max(.1,t),[[o,i],[s,i],[s,a],[o,a]].map(([l,c])=>[B(l),B(c)])}var ur=(n,e,t)=>Math.min(e,Math.max(n,Q(t)));function Lo(n,e,t){let r=n.t,o=l=>t.update(l),i=Z(e.points),s=Ji.map(l=>[l,r(`out_${l}`)]),a=es.map(l=>[l,r(`slope_${l.replace("-","n")}`)]);return m`<section>
    <div class="nf-h3row"><h3>${r("outdoor")}</h3>${t.lockButton}</div>
    <div class="nf-form">
      ${O(n,r("outdoor_type"),e.type,s,l=>o({type:l}),{wide:!0})}
      ${mt(e.points)?m`${M(n,r("x"),i.x0,l=>t.setRectangle("x",l))} ${M(n,r("z"),i.z0,l=>t.setRectangle("z",l))}
          ${M(n,r("width"),i.x1-i.x0,l=>t.setRectangle("w",l),.01,.1)} ${M(n,r("depth"),i.z1-i.z0,l=>t.setRectangle("d",l),.01,.1)}`:g}
      ${Kr(e.type)?M(n,r("outdoor_height"),e.height??Nr[e.type],l=>o({height:ur(.1,6,l)}),.05,.1):g}
      ${M(n,r("outdoor_offset"),e.offset??0,l=>o({offset:ur(-10,10,l)||null}),.05)}
      ${e.type!=="pool"?m`${M(n,r("outdoor_slope"),e.slope??0,l=>o({slope:ur(0,20,l)||null}),.05,0)}
          ${O(n,r("outdoor_slope_dir"),e.slope_dir??"x",a,l=>o({slope_dir:l}))}`:g}
      ${I(n,r("outdoor_outline"),e.outline!==!1,l=>o({outline:l?void 0:!1}),{title:r("outdoor_outline_hint")})}
      ${e.type==="fence"||e.type==="pergola"?I(n,r("outdoor_open"),!!e.open,l=>o({open:l||void 0}),{title:r("outdoor_open_hint")}):g}
      ${e.type==="pergola"?I(n,r("outdoor_bracing"),!!e.bracing,l=>o({bracing:l||void 0})):g}
      ${I(n,r("outdoor_cut"),!!e.cut,l=>o({cut:l||void 0}),{title:r("outdoor_cut_hint")})}
    </div>
    ${e.slope?$(r("outdoor_slope_hint")):g} ${$(r("outdoor_hint"))}
    ${n.admin?m`<div class="nf-actions"><button class="nf-btn" @click=${()=>t.duplicate()}>${r("duplicate")}</button><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button></div>`:g}
  </section>`}var yh=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],wh={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"};function xl(n,e,t){let r=n.t,{draft:o}=e,i=d=>P(n.hass,d,2),[s,a]=[o[0],o[o.length-1]],l=s&&o.length>1?Math.hypot(a[0]-s[0],a[1]-s[1]):0,c=d=>{let h=wh[d.key];h?(d.preventDefault(),t.step(h)):d.key==="Enter"&&t.close()},u=s?m`${$(r("measure_from",{x:i(s[0]),z:i(s[1])}))}
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${r("measure_length")}
            <input class="nf-measure-input" type="number" inputmode="decimal" step="0.01" min="0.05" .value=${String(e.length)} @input=${d=>t.setLength(Number.parseFloat(d.target.value.replace(",","."))||0)} @keydown=${c} />
          </label>
          <div class="nf-arrows nf-wide">${yh.map(([d,h])=>m`<button class="nf-btn nf-arrow-${d}" title=${r(`dir_${d}`)} @click=${()=>t.step(d)}>${h}</button>`)}</div>
        </div>
        ${o.length>1?m`<ol class="nf-measure-list">${o.slice(1).map((d,h)=>m`<li>${i(Math.hypot(d[0]-o[h][0],d[1]-o[h][1]))} m</li>`)}</ol>`:g}
        <div class="nf-actions">
          <button class="nf-btn nf-primary" ?disabled=${o.length<3} @click=${()=>t.close()}>${r("measure_close")}</button>
          <button class="nf-btn" ?disabled=${o.length<2} @click=${()=>t.undo()}>${r("measure_undo")}</button>
        </div>
        ${o.length>=3?$(r("measure_gap",{gap:i(l)})):g}`:$(r("measure_start"));return m`<section>
    <h3>${r("measure")}</h3>
    ${u}
    <h4 class="nf-lib-head">${r("rect_by_size")}</h4>
    <div class="nf-form">
      ${M(n,r("width"),e.rectSize[0],d=>t.setRectSize([Math.max(.1,d),e.rectSize[1]]),.01,.1)}
      ${M(n,r("depth"),e.rectSize[1],d=>t.setRectSize([e.rectSize[0],Math.max(.1,d)]),.01,.1)}
      <button class="nf-btn nf-wide" @click=${()=>t.addRectangle()}>${r("rect_add")}</button>
    </div>
    ${$(r("measure_hint"))}
  </section>`}function Co(n,e,t){let r=n.t,o=n.floor?.height??2.5,i=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]);return m`<section>
    <div class="nf-h3row"><h3>${r("free_wall")}</h3>${t.lockButton}</div>
    <div class="nf-form">
      ${M(n,r("wall_length"),i,s=>t.update({b:il(e,s)}),.01,.1)}
      ${M(n,r("wall_thickness"),e.thickness??n.doc.settings.wall_interior,s=>t.update({thickness:ur(.02,1,s)}),.01,.02)}
      ${M(n,r("wall_height"),e.height??o,s=>t.update(sl(s,o)),.05,.05)}
    </div>
    ${n.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button></div>`:g}
    ${$(r("free_wall_hint"))}
  </section>`}var xh={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",camera:"M3.5 7.5h11.5v9H3.5zM15 10.5l5.5-3v9l-5.5-3",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Ge=n=>xh[n];function kl(n,e){let t=new Set;for(let r of n?.placements??[])A([r.x,r.z],e.points)&&t.add(r.entity_id);for(let r of n?.furniture??[])q(r.type)&&r.entity&&A([r.x,r.z],e.points)&&t.add(r.entity);return t}function $l(n,e){let t=new Map;for(let r of n.floors){let o=[...r.placements.map(i=>[i.entity_id,i.x,i.z]),...r.furniture.filter(i=>q(i.type)&&i.entity).map(i=>[i.entity,i.x,i.z])];for(let[i,s,a]of o){let l=r.rooms.find(c=>A([s,a],c.points));l&&l.id!==e.id&&t.set(i,l.name)}}return t}var Sl=(n,e)=>(n??[]).includes(e)?(n??[]).filter(t=>t!==e):[...n??[],e];function dr(n,...e){let t=n.trim().toLowerCase();return!t||e.some(r=>(r??"").toLowerCase().includes(t))}function Ml(n,e){return n.map(t=>({o:t,r:e(t.id)})).sort((t,r)=>t.r-r.r).map(({o:t})=>t)}function Rl(n,e){let t=e,r=0;return{taken:n.map(i=>{let s=i.ids.slice(0,Math.max(0,t));return t-=s.length,r+=i.ids.length-s.length,[...s]}),left:r}}var Vo=50;function Bo(n,e,t,r,o,i,s){let a=e.includes(t);return m`<button class="nf-pin ${a?"nf-pin-on":""}" aria-pressed=${a} title=${n.t(a?i[0]:i[1])} @click=${()=>s.patchRoom({[r]:Sl(e,t)})}>${a?o[0]:o[1]}</button>`}function kh(n,e,t,r,o,i){let[s,a,l]=[e.hidden??[],e.no_state??[],e.panel??[]];return(c,u=!1,d=o)=>{let h=t.has(c),p=h?void 0:r.get(c),f=s.includes(c);return m`<div class="nf-row nf-dev-row ${u?"nf-dev-extra":""} ${f?"nf-dev-hidden":""}">
      <button class="nf-dev-name ${h?"":"nf-muted"}" ?disabled=${!h} @click=${()=>i.select(c)}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Ge(L(c))} /></svg>
        <span>${H(n.hass,c,d)}${p?m`<small class="nf-muted"> · ${n.t("devices_placed_in",{room:p})}</small>`:g}</span>
      </button>
      ${n.admin&&!u?Bo(n,s,c,"hidden",["\u{1F648}","\u{1F441}"],["panel_unhide","panel_hide"],i):g}
      ${n.admin&&!u&&!f?Bo(n,a,c,"no_state",["\u2205","Aa"],["panel_state_show","panel_state_hide"],i):g}
      ${n.admin&&!h?Bo(n,l,c,"panel",["\u2605","\u2606"],["panel_unpin","panel_pin"],i):g}
      ${n.admin?h?m`<button class="nf-link" @click=${()=>i.remove(c)}>${n.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>i.place([c])}>${n.t("devices_place")}</button>`:g}
    </div>`}}function $h(n,e,t,r,o){let{hass:i}=n;if(!i)return m``;let s=u=>u>0?$(n.t("devices_narrow",{n:u})):g,a=$(n.t("devices_none")),l=e.deviceQuery;if(o==="other"){let u=_s(i,t.area_id).map(f=>({...f,ids:f.ids.filter(_=>dr(l,`${H(i,_,f.name)} ${_} ${f.name}`))})),{taken:d,left:h}=Rl(u,Vo),p=u.map((f,_)=>d[_].length>0?m`<div class="nf-dev-area">${f.name}</div>${d[_].map(v=>r(v,!1,f.name))}`:g);return d.some(f=>f.length>0)?m`<div class="nf-room-list">${p}</div>${s(h)}`:a}let c=bs(i).filter(u=>dr(l,`${H(i,u)} ${u} `));return c.length>0?m`<div class="nf-room-list">${c.slice(0,Vo).map(u=>r(u))}</div>${s(c.length-Math.min(c.length,Vo))}`:a}function Sh(n,e,t,r,o,i,s){let{hass:a}=n,l=a?ue(a,t.area_id).filter(b=>ut(L(b))):[];if(!t.area_id)return $(n.t("devices_none_area"));if(l.length===0)return $(n.t("devices_none"));let c=a?Dn(a,l):[],u=c.map(b=>b.primary).filter(b=>!o.has(b)),d=e.deviceQuery,h=(n.floor?.placements??[]).filter(b=>L(b.entity_id)==="light"&&(b.mount??"ceiling")==="ceiling"&&A([b.x,b.z],t.points)).length,p=m`<input class="nf-search" type="search" placeholder=${n.t("devices_search")} .value=${d} @input=${b=>e.deviceQuery=b.target.value} />`,f=b=>dr(d,H(a,b,i),b),_=b=>{let x=b.others.filter(f),y=e.isUnfolded(b.primary)||!!d.trim()&&x.length>0;return!f(b.primary)&&x.length===0?g:m`${r(b.primary)}
      ${b.others.length>0?m`<button class="nf-more" @click=${()=>e.toggleUnfolded(b.primary)}>${y?n.t("devices_less"):n.t("devices_more",{n:b.others.length})}</button>`:g}
      ${y?(d.trim()?x:b.others).map(w=>r(w,!0)):g}`},v=()=>s.confirm(n.t("devices_place_all_confirm",{n:u.length}))&&s.place(u);return m`${n.admin&&h>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>s.spreadLights(t)}>${n.t("lights_spread")}</button>`:g}
    ${l.length>8?p:g}
    <div class="nf-room-list">${c.map(_)}</div>
    ${n.admin&&u.length>1?m`<button class="nf-link nf-place-all" @click=${v}>${n.t("devices_place_all_n",{n:u.length})}</button>`:g}
    ${$(n.t("devices_hint"))}`}function Wo(n,e,t,r){let{hass:o}=n,i=t.area_id?o?.areas?.[t.area_id]?.name:void 0,s=kl(n.floor,t),a=kh(n,t,s,$l(n.doc,t),i,r),l=n.admin?e.deviceSource:"area",c=o?Dn(o,ue(o,t.area_id).filter(h=>ut(L(h)))).length:0,u=[["area",`${n.t("devices_src_area")}${c>0?` (${c})`:""}`],["other",n.t("devices_src_other")],["none",n.t("devices_src_none")]],d=m`<input class="nf-search" type="search" placeholder=${n.t("devices_search")} .value=${e.deviceQuery} @input=${h=>e.deviceQuery=h.target.value} />`;return m`<section>
    <h3>${n.t("devices")}</h3>
    ${$(n.t("devices_panel_hint"))}
    ${n.admin?m`<div class="nf-seg nf-dev-source">${u.map(([h,p])=>m`<button aria-pressed=${l===h} @click=${()=>e.deviceSource=h}>${p}</button>`)}</div>`:g}
    ${l!=="area"?m`${d}${$h(n,e,t,a,l)}`:Sh(n,e,t,a,s,i,r)}
  </section>`}function Fl(n,e,t){let{hass:r}=n;if(!r)return g;let o=!!e.climate&&Object.values(e.climate).some(a=>a!=null),i=(a,l)=>{let c={...e.climate??{},[a]:l};t({climate:Object.values(c).every(u=>u==null)?null:c})},s=(a,l)=>{let c=ys(r,n.floor??null,{...e,climate:null},a),u=D(r,h=>X(h)&&r.states[h]?.attributes.device_class===Qr[a]),d=Ml(u,h=>(gt(r,h)===e.area_id?0:1)+(Jr(r,h)?0:2));return E(n,l,e.climate?.[a]??null,c[0]??null,d,h=>i(a,h))};return m`<details class="nf-points" ?open=${o}>
    <summary>${n.t("climate")}</summary>
    <div class="nf-form">${s("temperature",n.t("climate_temperature"))} ${s("humidity",n.t("climate_humidity"))} ${s("co2",n.t("climate_co2"))}</div>
    ${$(n.t("climate_hint"))}
  </details>`}function Ue(n,e){if(!Xe(e))return Ae(n,`furn_${e}`);let t=J(e);return t?Se(t,n?.language??navigator.language):Ae(n,"pack_missing_item")}var Mh=new URL(import.meta.url),Rh=new URL("./nextfloor-3d.js?v=ad90a63c3c45",Mh).href,El;function Al(){return El??=import(Rh),El}var zl=n=>n.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),""),Fh=n=>zl(n).split(/\s+/).filter(Boolean),Eh=(n,e)=>{let t=zl(e);return n.every(r=>t.includes(r))};function No(n,e){let t=Fh(e);return t.length===0?n.items:n.items.filter(r=>Eh(t,`${r.label} ${r.search??""} ${r.type.replace(/[_:.]/g," ")} ${n.title}`))}var Tl=(n,e)=>n.some(t=>No(t,e).length>0);function Pl(n,e){let t=new Set(n);return t.delete(e)||t.add(e),t}var Ol="nextfloor.library",Ah=["group:lights","group:living"],zh={language:"en"},hr=class{onChange;text="";openKeys;shown=null;constructor(e){this.onChange=e,this.openKeys=new Set(Ah);try{let t=localStorage.getItem(Ol);t&&(this.openKeys=new Set(JSON.parse(t)))}catch{}}get query(){return this.text}set query(e){this.text=e,this.onChange()}isOpen(e){return this.openKeys.has(e)}toggle(e){this.openKeys=Pl(this.openKeys,e),this.onChange();try{localStorage.setItem(Ol,JSON.stringify([...this.openKeys]))}catch{}}get preview(){return this.shown}hidePreview(){this.shown=null,this.onChange()}async showPreview(e,t,r){let o=t.getBoundingClientRect(),i={left:Math.max(8,o.left-196),top:Math.max(8,Math.min(window.innerHeight-200,o.top+o.height/2-95))};this.shown={type:e,url:null,...i},this.onChange();try{let[s,a,l]=Be(e),c=(await Al()).furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:ps[e]??null},180,[...r]);this.shown?.type===e&&(this.shown={type:e,url:c,...i})}catch{this.shown=null}this.onChange()}};function Th(n,e){let t=n.hass?.language??"en",r=Object.entries(cs).map(([i,s])=>({key:`group:${i}`,title:n.t(`furn_group_${i}`),items:s.map(a=>({type:a,label:n.t(`furn_${a}`),search:Ae(zh,`furn_${a}`)}))})),o=e.map(i=>({key:`pack:${i.id}`,title:be(i,t),items:i.items.map(s=>({type:_e(i.id,s.id),label:Se(s,t),search:Object.values(s.name).join(" ")}))}));return[...r,...o]}function Ph(n,e,t,r){let o=s=>{e.showPreview(t.type,s.currentTarget,r.packs)},i=q(t.type)?"light":Qe(t.type)?"switch":null;return m`<button
    class="nf-btn ${i?"nf-lib-electric":""}"
    title=${i?n.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t.label}
    @click=${()=>r.add(t.type)}
    @mouseenter=${o}
    @focus=${o}
    @mouseleave=${()=>e.hidePreview()}
    @blur=${()=>e.hidePreview()}
  >
    ${t.label}
    ${i?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${Ge(i)} /></svg>`:g}
  </button>`}function Oh(n,e,t,r){let o=e.query.trim(),i=No(t,o);if(o&&i.length===0)return g;let s=!!o||e.isOpen(t.key);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${s} @click=${()=>e.toggle(t.key)}>
      <span class="nf-lib-caret">${s?"\u25BE":"\u25B8"}</span>${t.title} <span class="nf-lib-count">${i.length}</span>
    </button>
    ${s?m`<div class="nf-library">${i.map(a=>Ph(n,e,a,r))}</div>`:g}`}function Dl(n,e,t,r){let o=n.t,i=Th(n,r.packs),s=e.query.trim();return m`<section>
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
      ${s&&!Tl(i,s)?m`<p class="nf-sub">${o("furniture_search_none")}</p>`:g}
      ${i.map(a=>Oh(n,e,a,r))}
    </section>
    <div class="nf-ext-teaser">
      <b>${o("ext_teaser_title")}</b>
      <span class="nf-sub">${o("ext_teaser_text")}</span>
      <button class="nf-btn nf-primary" @click=${()=>r.openExtensions()}>${o("ext_open")}</button>
    </div>`}function Hl(n,e){return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
    ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
    <b>${Ue(n.hass,e.type)}</b>
  </div>`:g}var it=n=>Math.round(n*1e3)/1e3,Ko=n=>n.map(([e,t])=>[it(e),it(t)]);function Il(n,e){return{id:T("room"),name:e,area_id:null,points:Ko(n),floor_material:"wood"}}function Ll(n){return{...structuredClone(n),id:T("room"),points:Ko(n.points.map(([e,t])=>[e+.5,t+.5]))}}function Cl(n,e){let t=n.rooms.find(r=>r.id===e);n.rooms=n.rooms.filter(r=>r.id!==e),n.openings=n.openings.filter(r=>r.room_id!==e||r.wall),t&&(n.placements=n.placements.filter(r=>!A([r.x,r.z],t.points)))}function Vl(n,e,t){let r=n.rooms.find(s=>s.id===e);if(!r||r.points.length<=3)return!1;let o=(t-1+r.points.length)%r.points.length;r.points.splice(t,1),r.wall_heights?.splice(t,1),r.wall_thickness?.splice(t,1);let i=s=>s.room_id===e&&!s.wall;return n.openings=n.openings.filter(s=>!(i(s)&&(s.edge===t||s.edge===o))).map(s=>i(s)&&s.edge>t?{...s,edge:s.edge-1}:s),!0}function Bl(n,e,t){if(!Number.isFinite(t))return null;let r=Z(n.points),{x0:o,z0:i,x1:s,z1:a}=r;return e==="x"?[o,s]=[t,t+(s-o)]:e==="z"?[i,a]=[t,t+(a-i)]:t>.05&&(e==="w"?s=o+t:a=i+t),Ko([[o,i],[s,i],[s,a],[o,a]])}function Wl(n,e,t,r){return!Number.isFinite(r)||e<0||e>=n.points.length?null:n.points.map((o,i)=>i===e?t===0?[it(r),o[1]]:[o[0],it(r)]:[o[0],o[1]])}var Dh=/^(Raum|Room) \d+$/;function Nl(n,e,t){let r=e?t[e]:void 0,o=!n.name||Dh.test(n.name)||Object.values(t).some(i=>i.name===n.name);return{area_id:e||null,...r&&o?{name:r.name}:{}}}function Kl(n,e){let t=e.filter(l=>L(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&A([l.x,l.z],n.points));if(t.length<2)return[];let r=Z(n.points),[o,i]=[r.x1-r.x0,r.z1-r.z0],s=Math.max(1,Math.round(Math.sqrt(t.length*o/Math.max(.1,i)))),a=Math.ceil(t.length/s);return t.map((l,c)=>{let u=Math.floor(c/s),d=u===a-1?t.length-s*(a-1):s,h=c-u*s;return{entityId:l.entity_id,x:it(r.x0+o/d*(h+.5)),z:it(r.z0+i/a*(u+.5))}})}function Gl(n,e,t,r){let o=n.rooms.find(a=>a.id===e);if(!o)return;let i=o.points[t];o.points.splice(t+1,0,r),o.wall_heights?.splice(t+1,0,o.wall_heights[t]??null),o.wall_thickness?.splice(t+1,0,o.wall_thickness[t]??null);let s=Math.hypot(r[0]-i[0],r[1]-i[1]);for(let a of n.openings)a.room_id!==e||a.wall||(a.edge>t?a.edge+=1:a.edge===t&&a.offset>s&&(a.edge=t+1,a.offset=it(a.offset-s)))}var Et=n=>Math.round(n*1e3)/1e3;function pr(n,e,t){return[Math.round((e[0]-n[0])/t)*t,Math.round((e[1]-n[1])/t)*t]}var st=(n,e)=>e?.01:n,At=(n,e,t=5)=>Math.hypot(n[0]-e[0],n[1]-e[1])>=t;function Ul(n,e,t){return t?Math.abs(e[0]-n[0])>Math.abs(e[1]-n[1])?[e[0],n[1]]:[n[0],e[1]]:e}var me=(n,e)=>[Et(n[0]+e[0]),Et(n[1]+e[1])];function Go(n,e,t,r){return[Et(Math.round((n[0]+t[0]-e[0])/r)*r),Et(Math.round((n[1]+t[1]-e[1])/r)*r)]}function Uo(n,e,t){let r=Math.atan2(-(e[0]-n[0]),e[1]-n[1])*180/Math.PI;return(Math.round(r/t)*t%360+360)%360}function jl(n,e,t){let r=Math.atan2(e[0]-n[0],-(e[1]-n[1]))*180/Math.PI;return Math.round(r/t)*t}var Zl=(n,e)=>Math.min(50,Math.max(.5,Math.round(Math.hypot(e[0]-n[0],e[1]-n[1])*10)/10));function ql(n,e,t){let r=mt([...n]),o=n[e],i=[Et(t[0]),Et(t[1])];return n.map((s,a)=>a===e?i:r?[Math.abs(s[0]-o[0])<1e-6?i[0]:s[0],Math.abs(s[1]-o[1])<1e-6?i[1]:s[1]]:[s[0],s[1]])}var fr=n=>Math.round(n*1e3)/1e3,Yl=(n,e)=>Math.hypot(n[0]-e[0],n[1]-e[1]);function Hh(n,e,t){let r=null,o=t;for(let i of n){let s=Yl(i,e);s<o&&([r,o]=[i,s])}return r}function Ih(n,e,t){let r=null,o=t.reach;for(let i of n)t.skip&&i.id===t.skip.roomId||i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],[c,u]=[l[0]-s[0],l[1]-s[1]],d=c*c+u*u;if(d<1e-9)return;let h=((e[0]-s[0])*c+(e[1]-s[1])*u)/d;if(h<=0||h>=1)return;let p=[s[0]+h*c,s[1]+h*u],f=Yl(p,e),_=(v,b,x)=>Math.min(Math.max(v,Math.min(b,x)),Math.max(b,x));Math.abs(u)<1e-9&&(p[0]=_(Math.round(p[0]/t.grid)*t.grid,s[0],l[0])),Math.abs(c)<1e-9&&(p[1]=_(Math.round(p[1]/t.grid)*t.grid,s[1],l[1])),f<o&&([r,o]=[p,f])});return r}function Lh(n,e,t){let r=[fr(Math.round(e[0]/t.grid)*t.grid),fr(Math.round(e[1]/t.grid)*t.grid)],o={},[i,s]=[t.reach,t.reach];for(let a of n)Math.abs(a[0]-e[0])<i&&(i=Math.abs(a[0]-e[0]),r[0]=a[0],o.x=a[0]),Math.abs(a[1]-e[1])<s&&(s=Math.abs(a[1]-e[1]),r[1]=a[1],o.z=a[1]);return{point:r,guides:o}}function Xl(n,e){let t=e.rooms.flatMap(i=>i.points.filter((s,a)=>!(e.skip&&i.id===e.skip.roomId&&(e.skip.index===void 0||e.skip.index===a)))),r=Hh(t,n,e.reach);if(r)return{point:[r[0],r[1]],guides:{point:r}};let o=Ih(e.rooms,n,e);return o?{point:[fr(o[0]),fr(o[1])],guides:{point:o}}:Lh(t,n,e)}var mr=(n,e)=>P(n.host.hass,e,2);function Ch(n,e){let[t,r]=[n.toScreen(e.start),n.toScreen(e.end)];if(e.kind==="freewall"){let s=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return k`<g pointer-events="none">
      <line class="nf-draft nf-draft-wall" x1=${t[0]} y1=${t[1]} x2=${r[0]} y2=${r[1]} />
      <text class="nf-dim" x=${(t[0]+r[0])/2} y=${(t[1]+r[1])/2-10}>${mr(n,s)} m</text>
    </g>`}let[o,i]=[Math.abs(e.end[0]-e.start[0]),Math.abs(e.end[1]-e.start[1])];return k`<g pointer-events="none">
    <rect class="nf-draft" x=${Math.min(t[0],r[0])} y=${Math.min(t[1],r[1])} width=${Math.abs(r[0]-t[0])} height=${Math.abs(r[1]-t[1])} />
    <text class="nf-dim" x=${(t[0]+r[0])/2} y=${Math.min(t[1],r[1])-8}>${mr(n,o)} × ${mr(n,i)} m</text>
  </g>`}function Vh(n,e,t,r){let o=[...e,...t?[t]:[]].map(u=>n.toScreen(u)),i=e.length>=3,s=r?e.slice(1).map((u,d)=>{let[h,p]=[n.toScreen(e[d]),n.toScreen(u)];return k`<text class="nf-dim" x=${(h[0]+p[0])/2} y=${(h[1]+p[1])/2-6}>${mr(n,Math.hypot(u[0]-e[d][0],u[1]-e[d][1]))} m</text>`}):g,a=e.map((u,d)=>{let[h,p]=n.toScreen(u),f=d===0&&i;return k`<circle class=${f?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${h} cy=${p} r=${f?9:5} />`}),[l,c]=t?n.toScreen(t):[0,0];return k`<g pointer-events="none">
    ${o.length>1?k`<polyline class="nf-draft" points=${o.map(u=>u.join(",")).join(" ")} />`:g}
    ${s}${a}
    ${t?k`<circle class="nf-cursor" cx=${l} cy=${c} r="4" />`:g}
  </g>`}function Ql(n,e,t){let r=e.x!==void 0?n.toScreen([e.x,0])[0]:null,o=e.z!==void 0?n.toScreen([0,e.z])[1]:null,[i,s]=e.point?n.toScreen(e.point):[0,0];return k`<g pointer-events="none">
    ${r!==null?k`<line class="nf-guide" x1=${r} y1="0" x2=${r} y2=${t.h} />`:g}
    ${o!==null?k`<line class="nf-guide" x1="0" y1=${o} x2=${t.w} y2=${o} />`:g}
    ${e.point?k`<circle class="nf-snap" cx=${i} cy=${s} r="9" />`:g}
  </g>`}function Jl(n,e,t,r,o){return e?Ch(n,e):t!=="polygon"&&t!=="measure"?g:Vh(n,r,o,t==="measure")}var G=(n,e,t,r,o="")=>k`<rect class=${o} x=${Math.min(n,t)} y=${Math.min(e,r)} width=${Math.abs(t-n)} height=${Math.abs(r-e)} />`,K=(n,e,t,r,o="")=>k`<line class=${o} x1=${n} y1=${e} x2=${t} y2=${r} />`,Bh=(n,e="")=>k`<polygon class=${e} points=${n.map(t=>t.join(",")).join(" ")} />`,j=(n,e,t,r="")=>k`<circle class=${r} cx=${n} cy=${e} r=${t} />`,jo=(n,e,t,r,o="")=>k`<ellipse class=${o} cx=${n} cy=${e} rx=${t} ry=${r} />`;function Zo(n,e,t){let r=[];for(let o=1;o<t;o++){let i=-n/2+n/t*o;r.push(K(i,e/2,i,e/2-Math.min(.12,e*.3)))}return r}function ec(n,e,t,r){let o=Math.min(.24,e*.28),i=r?Math.min(.2,n*.12):0,s=[G(-n/2,-e/2,n/2,-e/2+o,"nf-sym-fill")];r&&s.push(G(-n/2,-e/2,-n/2+i,e/2,"nf-sym-fill"),G(n/2-i,-e/2,n/2,e/2,"nf-sym-fill"));let a=n-2*i;for(let l=1;l<t;l++){let c=-n/2+i+a/t*l;s.push(K(c,-e/2+o,c,e/2-.02))}return s}function tc(n,e,t){switch(n){case"sofa":return ec(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return ec(e,t,1,!0);case"bench":return[G(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill")];case"corner_bench":{let r=Math.min(.5,t*.4);return[G(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill"),G(-e/2,-t/2,-e/2+.08,t/2,"nf-sym-fill"),K(-e/2+r,-t/2+r,e/2,-t/2+r),K(-e/2+r,-t/2+r,-e/2+r,t/2)]}case"chair":return[G(-e/2,-t/2,e/2,-t/2+.06,"nf-sym-fill")];case"office_chair":return[j(0,.03,Math.min(e,t)*.36),G(-e*.35,-t/2+.02,e*.35,-t/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[j(0,0,Math.min(e,t)*.42)];case"stool":return[G(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let r=[G(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return n==="desk"&&r.push(K(-.3,-t/2+.1,.3,-t/2+.1,"nf-sym-strong")),r}case"bed":case"bunk_bed":{let r=e>1.2?2:1,o=(e-.2)/r,i=[G(-e/2,-t/2,e/2,-t/2+.07,"nf-sym-fill"),K(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<r;s++)i.push(G(-e/2+.13+o*s,-t/2+.12,-e/2+.07+o*(s+1),-t/2+.12+Math.min(.4,t*.18)));return i}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Zo(e,t,n==="nightstand"||n==="tall_cabinet"||n==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[G(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),...Zo(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[K(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[K(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"nf-sym-strong")];case"stove":{let r=Math.min(e,t)*.14;return[j(-e*.22,-t*.2,r),j(e*.22,-t*.2,r*.8),j(-e*.22,t*.2,r*.8),j(e*.22,t*.2,r)]}case"sink":{let r=Math.min(.5,e-.2);return[G(-r/2,-t/2+.1,r/2,t/2-.08),j(0,-t/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[K(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[j(0,.05,Math.min(e,t)*.3),K(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[G(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),j(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[K(-e/2,-t/2,e/2,t/2),K(e/2,-t/2,-e/2,t/2),j(0,0,.04)];case"wc":return[G(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"nf-sym-fill"),jo(0,t*.1,e*.36,t*.3)];case"washbasin":return[jo(0,.03,e*.34,t*.3)];case"tv_board":return[K(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"nf-sym-strong"),...Zo(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[K(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[j(0,0,Math.min(e,t)*.45,"nf-sym-fill"),j(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[j(0,0,Math.min(e,t)*.5,"nf-sym-fill"),j(0,0,Math.min(e,t)*1.6)];case"parking":return[G(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),K(-e*.15,t/2-.5,0,t/2-.22,"nf-sym-strong"),K(0,t/2-.22,e*.15,t/2-.5,"nf-sym-strong")];case"robot_vacuum":return[G(-e*.45,-t/2,e*.45,-t/2+t*.3,"nf-sym-fill"),j(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let r=[],o=Math.max(3,Math.round(e/.1));for(let i=1;i<o;i++)r.push(K(-e/2+e/o*i,-t/2,-e/2+e/o*i,t/2));return r}case"lamp_panel":return[G(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let r=Math.min(e,t)/2,o=[j(0,0,r*.9,"nf-sym-fill"),j(0,0,r*.3)];if(n==="lamp_ceiling"||n==="lamp_pendant")for(let i=0;i<8;i++){let s=i/8*Math.PI*2;o.push(K(Math.cos(s)*r*1.05,Math.sin(s)*r*1.05,Math.cos(s)*r*1.35,Math.sin(s)*r*1.35))}return o}case"lamp_wall":return[G(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),jo(0,.01,e*.4,t*.4)];case"led_strip":return[K(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[j(0,0,Math.min(e,t)*.46),j(0,0,Math.min(e,t)*.25)];case"rug":return[G(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let r=Math.max(3,Math.round(t/.26)),o=[];for(let i=1;i<r;i++)o.push(K(-e/2,t/2-t/r*i,e/2,t/2-t/r*i));return o.push(K(0,t/2-.1,0,-t/2+.25,"nf-sym-strong"),K(-.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong"),K(.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong")),o}default:{let r=J(n);return r?Wh(r,e,t):g}}}function Wh(n,e,t){return n.symbol?.length?n.symbol.map(r=>r.shape==="rect"?G((r.x-r.w/2)*e,(r.z-r.d/2)*t,(r.x+r.w/2)*e,(r.z+r.d/2)*t,r.fill?"nf-sym-fill":""):r.shape==="circle"?j(r.x*e,r.z*t,r.r*Math.min(e,t)):K(r.x1*e,r.z1*t,r.x2*e,r.z2*t)):n.parts.filter(r=>r.shape==="sweep"||r.w<.98||r.d<.98).map(r=>r.shape==="sweep"&&r.stations?.length?Bh([...r.stations.map(o=>[(r.x+o[3]/2)*e,o[0]*t]),...[...r.stations].reverse().map(o=>[(r.x-o[3]/2)*e,o[0]*t])]):r.shape==="cyl"&&(r.axis??"y")==="y"?j(r.x*e,r.z*t,Math.min(r.w*e,r.d*t)/2):G((r.x-r.w/2)*e,(r.z-r.d/2)*t,(r.x+r.w/2)*e,(r.z+r.d/2)*t))}var gr=Math.PI/180,nc=(n,e,t,r)=>{let[o,i]=r,s=k`<path d="M${o-4} ${i-1}a4 4 0 1 1 2 3.5" />`,a=k`<line x1=${t[0]} y1=${t[1]} x2=${o} y2=${i} /><circle cx=${o} cy=${i} r="16" class="nf-hit" /><circle cx=${o} cy=${i} r="8" />${s}`;return n==="data-rotate"?k`<g class="nf-rotate" data-rotate=${e}>${a}</g>`:k`<g class="nf-rotate" data-aim=${e}>${a}</g>`};function Nh(n,e){let t=e.rotation*gr;return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([r,o])=>{let[i,s]=n.toScreen([e.x+r*e.w*Math.cos(t)/2-o*e.d*Math.sin(t)/2,e.z+r*e.w*Math.sin(t)/2+o*e.d*Math.cos(t)/2]);return k`<g class="nf-resize" data-resize=${`${e.id}:${r}:${o}`}><circle cx=${i} cy=${s} r="14" class="nf-hit" /><rect x=${i-5} y=${s-5} width="10" height="10" rx="2" /></g>`})}function rc(n,e,t){let{host:r,scale:o}=n,i=s=>{let a=s.id===t,l=a&&r.admin&&!s.locked,[c,u]=n.toScreen([s.x,s.z]),d=s.rotation*gr,h=Math.min(s.w,s.d)*o>44,p=q(s.type)&&!!s.entity&&s.entity!=="none"&&r.hass?.states[s.entity]?.state==="on",f=le.includes(s.type),_=`nf-furn${a?" nf-furn-sel":""}${p?" nf-furn-lit":""}${f?" nf-energy-item":""}`,v=s.d/2+Math.max(.3,26/o),b=n.toScreen([s.x-Math.sin(d)*v,s.z+Math.cos(d)*v]),x=n.toScreen([s.x-Math.sin(d)*(s.d/2),s.z+Math.cos(d)*(s.d/2)]),[y,w]=n.toScreen([s.x+Math.sin(d)*(s.d/2+18/o),s.z-Math.cos(d)*(s.d/2+18/o)]);return k`<g data-furniture=${s.id} class=${_}>
        <g transform="translate(${c} ${u}) rotate(${s.rotation}) scale(${s.mirror?-o:o} ${o})">
          <rect class="nf-furn-body" x=${-s.w/2} y=${-s.d/2} width=${s.w} height=${s.d} />
          <g class="nf-furn-sym">${tc(s.type,s.w,s.d)}</g>
          <line class="nf-furn-front" x1=${-s.w/2} y1=${s.d/2} x2=${s.w/2} y2=${s.d/2} />
        </g>
        ${h?k`<text x=${c} y=${u+4}>${Ue(r.hass,s.type)}</text>`:g}
      </g>
      ${l?Nh(n,s):g}
      ${a?k`<text class="nf-dim" x=${y} y=${w+4}>${P(r.hass,s.w,2)} × ${P(r.hass,s.d,2)} m</text>`:g}
      ${a&&s.locked?k`<text class="nf-lock" x=${b[0]} y=${b[1]+5}>🔒</text>`:g}
      ${l?nc("data-rotate",s.id,x,b):g}`};return k`<g>${e.furniture.map(i)}</g>`}function Kh(n,e,t){let r=e.mount==="ceiling",o=e.fov??(r?360:90),i=e.reach??(r?3:4.5),s=(e.rotation??0)*gr,a=(b,x)=>n.toScreen([e.x-Math.sin(s+b)*x,e.z+Math.cos(s+b)*x]),[l,c]=n.toScreen([e.x,e.z]),u=Math.min(o,359.9)*gr/2,[d,h,p]=[a(-u,i),a(u,i),a(0,i)],f=i*n.scale,_=o>=360?k`<circle cx=${l} cy=${c} r=${f} />`:k`<path d=${`M${l} ${c}L${d[0]} ${d[1]}A${f} ${f} 0 ${u>Math.PI/2?1:0} 1 ${h[0]} ${h[1]}Z`} />`,v=t&&n.host.admin&&!e.locked?nc("data-aim",e.entity_id,[l,c],p):g;return k`<g class="nf-wedge ${t?"nf-wedge-sel":""}">${_}${v}</g>`}function oc(n,e,t){let{host:r}=n,o=i=>{let s=L(i.entity_id);if(!s)return g;let[a,l]=n.toScreen([i.x,i.z]),c=r.hass?.states[i.entity_id]?.state==="on",u=i.entity_id===t;return k`${s==="camera"?Kh(n,i,u):g}<g data-device=${i.entity_id} class=${`nf-device${c?" nf-device-on":""}${u?" nf-device-sel":""}`} transform="translate(${a} ${l})">
        <title>${H(r.hass,i.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        <path d=${Ge(s)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${u&&i.locked?k`<text class="nf-lock" x=${a+16} y=${l-12}>🔒</text>`:g}`};return k`<g>${e.placements.map(o)}</g>`}function Gh(n,e,t,r){let o=De(e,t.rooms,t.walls??[]);if(!o)return null;let{room:i,edge:s}=o,a=Vn(r,e,o),l=bt(i,s,e.offset-e.width/2),c=bt(i,s,e.offset+e.width/2),u=[(c[0]-l[0])/(e.width||1),(c[1]-l[1])/(e.width||1)],d=re(i.points)>=0?1:-1,h=[-u[1]*d,u[0]*d],p=[.06,.06];return a&&(p=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]),{room:i,edge:s,p0:l,p1:c,inward:h,direction:d,across:p,exterior:a?.wall.exterior??!1,at:(f,_)=>n.toScreen([f[0]+h[0]*_,f[1]+h[1]*_])}}var je=(n,e,t="")=>k`<line class=${t} x1=${n[0]} y1=${n[1]} x2=${e[0]} y2=${e[1]} />`;function Uh(n,e){let t=n.across[0]-.04,r=n.across[0]+Math.min(2,e.height),[o,i,s,a]=[n.at(n.p0,t),n.at(n.p1,t),n.at(n.p0,r),n.at(n.p1,r)];return k`${je(o,i)}<path class="nf-open-track" d="M${o[0]} ${o[1]}L${s[0]} ${s[1]}M${i[0]} ${i[1]}L${a[0]} ${a[1]}" />`}function jh(n,e,t){let r=t.swing==="out",o=r?-e.across[1]:e.across[0],i=(e.across[0]-e.across[1])/2,s=t.hinge==="left"==e.direction>0,a=pt(t,e.exterior),l=t.leaves===2,[c,u]=[e.p0,e.p1],d=[],h=hs(t.width,a,s,t);if(h){let x=y=>y<=.02?e.p0:y>=t.width-.02?e.p1:bt(e.room,e.edge,t.offset-t.width/2+y);[c,u]=[x(h.x0),x(h.x1)],d=h.panels.map(([y,w])=>[x(y),x(w)])}let p=[(c[0]+u[0])/2,(c[1]+u[1])/2],f=(l?.5:1)*Math.hypot(u[0]-c[0],u[1]-c[1]),_=d.map(([x,y])=>k`${je(e.at(x,i+.035),e.at(y,i+.035),"nf-open-pane")}${je(e.at(x,i-.035),e.at(y,i-.035),"nf-open-pane")}`),v=(x,y)=>{let[w,R]=e.at(x,o),[S,F]=e.at(y,o),z=e.at(x,o+(r?-f:f)),V=f*n.scale,N=(z[0]-w)*(F-R)-(z[1]-R)*(S-w)>0?1:0;return k`<path d="M${w} ${R}L${z[0]} ${z[1]}A${V} ${V} 0 0 ${N} ${S} ${F}" />`},b;return a==="passage"?b=je(e.at(e.p0,i),e.at(e.p1,i),"nf-open-passage"):a==="sliding"?b=je(e.at(c,o),e.at(u,o)):l?b=k`${v(c,p)}${v(u,p)}`:b=s?v(c,u):v(u,c),k`${_}${b}`}function Zh(n,e){let t=(n.across[0]-n.across[1])/2,r=e.leaves===2?je(n.at([(n.p0[0]+n.p1[0])/2,(n.p0[1]+n.p1[1])/2],n.across[0]),n.at([(n.p0[0]+n.p1[0])/2,(n.p0[1]+n.p1[1])/2],-n.across[1])):g;return k`${je(n.at(n.p0,t+.035),n.at(n.p1,t+.035))}${je(n.at(n.p0,t-.035),n.at(n.p1,t-.035))}${r}`}function ic(n,e,t,r){let o=i=>{let s=Gh(n,i,e,t);if(!s)return g;let a=[s.at(s.p0,s.across[0]+.01),s.at(s.p1,s.across[0]+.01),s.at(s.p1,-s.across[1]-.01),s.at(s.p0,-s.across[1]-.01)],l=i.type==="door"&&jr(pt(i,s.exterior)),c=`nf-open nf-open-${i.type}${l?" nf-open-front":""}${i.id===r?" nf-open-sel":""}`,u=i.type==="garage"?Uh(s,i):i.type==="door"?jh(n,s,i):Zh(s,i);return k`<g data-opening=${i.id} class=${c}><polygon class="nf-open-gap" points=${a.map(d=>d.join(",")).join(" ")} />${u}</g>`};return k`<g>${e.openings.map(o)}</g>`}var _r=(n,e,t=6)=>k`<circle cx=${n} cy=${e} r="16" class="nf-hit" /><circle cx=${n} cy=${e} r=${t} />`;function sc(n,e){let{scale:t}=n,r=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,i=n.toWorld(0,0),s=n.toWorld(e.w,e.h),a=[],l=(d,h)=>{for(let p=Math.ceil(i[0]/d)*d;p<=s[0];p+=d){let f=n.toScreen([p,0])[0];a.push(k`<line class=${h} x1=${f} y1="0" x2=${f} y2=${e.h} />`)}for(let p=Math.ceil(i[1]/d)*d;p<=s[1];p+=d){let f=n.toScreen([0,p])[1];a.push(k`<line class=${h} x1="0" y1=${f} x2=${e.w} y2=${f} />`)}};r<o&&l(r,"nf-grid-minor"),l(o,"nf-grid-major");let[c,u]=n.toScreen([0,0]);return a.push(k`<circle class="nf-origin" cx=${c} cy=${u} r="3" />`),k`<g pointer-events="none">${a}</g>`}function ac(n){let e=n.host.doc.floors,t=e.findIndex(o=>o.id===n.floorId),r=t>0?e[t-1]:void 0;return r?k`<g pointer-events="none">${r.rooms.map(o=>k`<polygon class="nf-ghost" points=${Ce(n,o.points)} />`)}</g>`:g}function lc(n,e){let t=n.host.floor?.height??2.5;return k`<g pointer-events="none">${e.map(r=>{let o=r.height!==void 0&&r.height<t-.01;return k`<polygon class=${`nf-wall${r.exterior?" nf-wall-ext":""}${o?" nf-wall-low":""}`} points=${Ce(n,r.footprint)} />`})}</g>`}function cc(n,e,t){let r=o=>{let[i,s]=n.toScreen(ie(o.points)),a=Z(o.points),l=Math.min(a.x1-a.x0,a.z1-a.z0)*n.scale>40;return k`<g data-outdoor=${o.id} class=${`nf-out nf-out-${o.type}${o.id===t?" nf-out-sel":""}`}>
      <polygon points=${Ce(n,o.points)} />
      ${l?k`<text x=${i} y=${s+4}>${n.host.t(`out_${o.type}`)}</text>`:g}
    </g>`};return k`<g>${e.outdoor.map(r)}</g>`}function uc(n,e,t){let{host:r}=n;return!e||!r.admin||t!=="select"||r.doc.settings.lock_plan?g:k`${e.points.map((o,i)=>k`<g class="nf-vertex" data-out-vertex=${`${e.id}:${i}`}>${_r(...n.toScreen(o))}</g>`)}`}function dc(n,e,t,r){let o=e.rooms.find(s=>s.id===t),i=o&&r!==null&&r<o.points.length?[n.toScreen(o.points[r]),n.toScreen(o.points[(r+1)%o.points.length])]:null;return k`<g>${e.rooms.map(s=>k`<polygon data-room=${s.id} class=${s.id===t?"nf-room nf-room-sel":"nf-room"} points=${Ce(n,s.points)} />`)}</g>
    ${i?k`<line class="nf-edge-hi" pointer-events="none" x1=${i[0][0]} y1=${i[0][1]} x2=${i[1][0]} y2=${i[1][1]} />`:g}
    <g pointer-events="none">${e.rooms.map(s=>{let[a,l]=n.toScreen(ie(s.points));return k`<text class="nf-room-name" x=${a} y=${l-2}>${s.name}</text>
        <text class="nf-room-area" x=${a} y=${l+14}>${n.host.t("area_m2",{a:P(n.host.hass,ce(s.points),1)})}</text>`})}</g>`}function hc(n,e){let t=n.host.doc.energy?.meter;if(!t||t.floor_id!==e.id)return g;let[r,o]=n.toScreen([t.x,t.z]);return k`<g class="nf-meter" transform="translate(${r} ${o})" pointer-events="none">
    <rect x="-11" y="-11" width="22" height="22" rx="5" />
    <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
  </g>`}function pc(n,e,t){let{host:r}=n,o=i=>{let[s,a]=[n.toScreen(i.a),n.toScreen(i.b)],l=i.id===t,c=l&&r.admin&&!En(i,!0,r.doc.settings);return k`<g data-free-wall=${i.id} class=${`nf-free-wall${l?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
        <line class="nf-free-wall-line" x1=${s[0]} y1=${s[1]} x2=${a[0]} y2=${a[1]} />
      </g>
      ${c?k`<g class="nf-vertex" data-wall-end=${`${i.id}:a`}>${_r(s[0],s[1])}</g><g class="nf-vertex" data-wall-end=${`${i.id}:b`}>${_r(a[0],a[1])}</g>`:g}`};return k`<g>${(e.walls??[]).map(o)}</g>`}function fc(n,e){let t=e.points,r=(e.wall_splits??[]).flatMap((o,i)=>{if(!o||i>=t.length)return[];let[s,a]=[t[i],t[(i+1)%t.length]],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,[c,u]=[(a[0]-s[0])/l,(a[1]-s[1])/l];return o.map(d=>{let[h,p]=n.toScreen([s[0]+c*d,s[1]+u*d]);return k`<line class="nf-split-mark" x1=${h-u*7} y1=${p+c*7} x2=${h+u*7} y2=${p-c*7} />`})});return k`${r}`}function mc(n,e,t){let r=e.points,[o,i]=n.toScreen(ie(r)),s=(l,c,u)=>{let[[d,h],[p,f]]=[n.toScreen(l),n.toScreen(c)],[_,v]=[(d+p)/2,(h+f)/2],b=Math.hypot(p-d,f-h),[x,y]=[-(f-h),p-d],w=Math.hypot(x,y)||1;return[x,y]=[x/w,y/w],x*(_-o)+y*(v-i)<0&&([x,y]=[-x,-y]),k`${b>50?k`<text class="nf-dim" x=${_+x*16} y=${v+y*16+4}>${P(n.host.hass,Math.hypot(c[0]-l[0],c[1]-l[1]),2)} m</text>`:g}
      ${b>36?k`<g data-mid=${u} class="nf-mid"><circle cx=${_} cy=${v} r="14" class="nf-hit" /><circle cx=${_} cy=${v} r="6" /><path d="M${_-3} ${v}h6M${_} ${v-3}v6" /></g>`:g}`},a=(l,c)=>{let[u,d]=n.toScreen(l);return k`<g data-vertex=${c} class=${c===t?"nf-vertex nf-vertex-sel":"nf-vertex"}>${_r(u,d)}</g><text class="nf-vertex-no" x=${u+9} y=${d-9}>${c+1}</text>`};return k`<g>${r.map((l,c)=>s(l,r[(c+1)%r.length],c))}${r.map(a)}</g>`}var qh=n=>Math.round(n*1e3)/1e3,gc=n=>Math.round(n*100)/100;function br(n,e){let t=[...n??[]].slice(0,e);for(;t.length<e;)t.push(null);return t}var qo=n=>n.every(e=>e===null);function mn(n,e){let[t,r]=[n.points[e],n.points[(e+1)%n.points.length]];return Math.hypot(r[0]-t[0],r[1]-t[1])}function _c(n,e,t){let r=br(n.wall_heights,n.points.length);r[e]=t,n.wall_heights=qo(r)?void 0:r}function bc(n,e,t,r,o){let i=br(n.wall_heights,n.points.length),s=i[e],a=Array.isArray(s)?[...s]:new Array(o).fill(typeof s=="number"?s:null);for(;a.length<o;)a.push(null);a[t]=r,i[e]=a.every(l=>l===a[0])?a[0]:a,n.wall_heights=qo(i)?void 0:i}function vc(n,e,t,r){let o=mn(n,e),i=t===void 0?0:r[t],s=t===void 0?o:r[t+1]??o;if(s-i<.4)return!1;let a=gc((i+s)/2),l=br(n.wall_splits,n.points.length);l[e]=[...l[e]??[],a].sort((u,d)=>u-d),n.wall_splits=l;let c=n.wall_heights?.[e];return Array.isArray(c)&&c.splice((t??0)+1,0,c[t??0]??null),!0}function yc(n,e,t,r,o){let i=mn(n,e),s=o.filter(u=>Math.abs(u-t)>.001&&u>0),a=Math.max(.1,Math.min(i-.1,gc(r)));s.some(u=>Math.abs(u-a)<.1)&&(a=t);let l=n.wall_splits?.[e];if(!l)return;let c=l.findIndex(u=>Math.abs(u-t)<.001);c>=0&&(l[c]=a),l.sort((u,d)=>u-d)}function wc(n,e,t,r){let o=n.wall_splits;if(!o?.[e])return;let i=o[e].filter(a=>Math.abs(a-t)>.001);o[e]=i.length>0?i:null,o.every(a=>!a)&&(n.wall_splits=void 0);let s=n.wall_heights?.[e];Array.isArray(s)&&(s.splice(r,1),s.every(a=>a===s[0])&&(n.wall_heights[e]=s[0]??null))}function xc(n,e,t){let r=br(n.wall_thickness,n.points.length);r[e]=t,n.wall_thickness=qo(r)?void 0:r}function kc(n,e){let t=Math.min(1.5,Math.max(.02,qh(n)));return Math.abs(t-e)<5e-4?null:t}var Yh=.005;function $c(n,e,t){let r=n.t,o=n.floor.height,i=e.points.length,{wall_exterior:s,wall_interior:a}=n.doc.settings,l=c=>{let u=e.wall_heights?.[c]??null,d=t.partsOf(e,c);return(d.length>1?d.map((p,f)=>f):[void 0]).map(p=>{let f=Array.isArray(u)?u[p??0]??null:u,_=p===void 0?mn(e,c):(d[p+1]??mn(e,c))-d[p],v=S=>t.setHeight(e,c,p,S),b=t.isOuter(e,c)?s:a,x=`${r("wall_n",{a:c+1,b:(c+1)%i+1})}${p===void 0?"":` \xB7 ${r("wall_part",{n:p+1})}`}`,y=p!==void 0&&p>0&&(e.wall_splits?.[c]??[]).some(S=>Math.abs(S-d[p])<.001),w=()=>t.light(c),R=()=>t.light(null);return m`<div class="nf-edge-height${c===t.lit?" nf-edge-on":""}${f!==null?" nf-edge-low":""}" @mouseenter=${w} @mouseleave=${R} @focusin=${w} @focusout=${R}>
        <span><b>${x}</b><br /><span class="nf-muted">${P(n.hass,_,2)} m</span></span>
        ${f===0?m`<span class="nf-muted">${r("wall_none")}</span>`:M(n,r("wall_height"),f??o,S=>v(S>=o-Yh?null:Math.max(.05,S)),.05,.05)}
        ${n.admin&&f!==null?m`<button class="nf-btn" title=${r("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
        ${n.admin&&f!==0?m`<button class="nf-btn" title=${r("wall_none_hint")} @click=${()=>v(0)}>${r("wall_none")}</button>`:g}
        ${n.admin&&_>=.4?m`<button class="nf-btn" title=${r("wall_split_hint")} @click=${()=>t.cut(e,c,p)}>✂</button>`:g}
        ${(p===void 0||p===0)&&f!==0?m`<span class="nf-wide nf-split-row" title=${r("wall_thickness_hint")}
              >${M(n,r("edge_thickness"),e.wall_thickness?.[c]??b,S=>t.setThickness(e,c,kc(S,b)),.01,.02)}
              ${n.admin&&e.wall_thickness?.[c]!=null?m`<button class="nf-btn" title=${r("wall_thickness_reset")} @click=${()=>t.setThickness(e,c,null)}>↺</button>`:g}</span
            >`:g}
        ${y?m`<span class="nf-wide nf-split-row"
              >${M(n,r("wall_split_at"),d[p],S=>t.moveCut(e,c,d[p],S),.05,.1)}
              ${n.admin?m`<button class="nf-btn" title=${r("wall_join_hint")} @click=${()=>t.join(e,c,d[p],p)}>⨉</button>`:g}</span
            >`:g}
      </div>`})};return m`<div class="nf-edge-box">
    <h4>${r("wall_heights")}</h4>
    ${e.points.flatMap((c,u)=>l(u))} ${$(r("room_wall_hint"))}
  </div>`}var Xh=[["person",/person|people|human|pedestrian/],["car",/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/],["pet",/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/]];function Sc(n,e){let t=String(n.states[e]?.attributes.friendly_name??""),r=`${e} ${t}`.toLowerCase().replace(/[_.-]/g," ");return Xh.find(([,o])=>o.test(r))?.[0]??"motion"}function Mc(n,e){let t=n.entities??{},r=t[e]?.device_id;if(!r)return[];let o=new Set(["motion","occupancy","presence"]);return Object.values(t).filter(i=>i.device_id===r&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>o.has(String(n.states[i]?.attributes.device_class)))}var Qh=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/;function Jh(n,e,t){let r=L(e),o=n.hass?.language??"en",i=[...An.map(a=>({type:a,label:n.t(`furn_${a}`)})),...t.flatMap(a=>a.items.map(l=>({type:_e(a.id,l.id),label:`${Se(l,o)} \xB7 ${be(a,o)}`})))],s=a=>r==="light"?q(a):r==="climate"?a==="radiator":e.startsWith("vacuum.")?a==="robot_vacuum"||Xe(a)&&a.endsWith(":robot_vacuum"):r==="media"?In(a)||Qe(a)&&Qh.test(a):Qe(a)&&!q(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}function ep(n,e){let{hass:t}=n;if(!t)return g;let r=Mc(t,e),o=[...new Set(r.map(s=>Sc(t,s)))],i=r.length>0?n.t("camera_detect_found",{kinds:o.map(s=>n.t(`detect_${s}`)).join(", "),n:r.length}):n.t("camera_detect_none");return $(i,"nf-wide")}function tp(n,e,t){let r=n.t,o=e.mount==="ceiling",i=s=>t.update(s);return m`${M(n,r("camera_fov"),e.fov??(o?360:90),s=>i({fov:Math.min(360,Math.max(10,s))}),5,10)}
    ${M(n,r("camera_reach"),e.reach??(o?3:4.5),s=>i({reach:Math.min(50,Math.max(.5,s))}),.5,.5)}
    ${M(n,r("camera_tilt"),e.tilt??(o?65:20),s=>i({tilt:Math.min(90,Math.max(0,s))}),5,0)}
    ${I(n,r("camera_cone"),e.cone!==!1,s=>i({cone:s?null:!1}))}
    ${$(r("camera_aim_hint"),"nf-wide")} ${ep(n,e.entity_id)}`}function np(n,e,t){if(!n.admin)return g;let r=Jh(n,e.entity_id,t.packs);return r.length===0?g:m`<label class="nf-field nf-wide" title=${n.t("as_furniture_hint")}
    >${n.t("as_furniture")}
    <select @change=${o=>o.target.value&&t.asFurniture(e,o.target.value)}>
      <option value="" selected>${n.t("as_furniture_pick")}</option>
      ${r.map(o=>m`<option value=${o.type}>${o.label}</option>`)}
    </select>
  </label>`}function Yo(n,e,t){let r=n.t,o=L(e.entity_id),i=o==="light",s=o==="camera",a=e.mount??"ceiling",l=o?Gt(o,n.floor?.height??2.5,i?a:null):1,c=p=>t.update(p),u=p=>c({mount:p,y:null}),d=["ceiling","floor","table","wall"].map(p=>[p,r(`lamp_${p}`)]),h=[["wall",r("camera_mount_wall")],["ceiling",r("camera_mount_ceiling")]];return m`<section>
    <div class="nf-h3row"><h3>${r("device")}</h3>${t.lockButton}</div>
    <p class="nf-dev-title">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d=${o?Ge(o):""} /></svg>
      ${H(n.hass,e.entity_id)}
    </p>
    <div class="nf-form">
      ${i?m`${O(n,r("lamp_mount"),a,d,u,{wide:!0})}${tr(n,e.glow_scale,p=>c({glow_scale:p}))}`:g}
      ${s?O(n,r("camera_mount"),e.mount??"wall",h,u,{wide:!0}):g}
      ${M(n,r("x"),e.x,p=>c({x:p}))} ${M(n,r("z"),e.z,p=>c({z:p}))}
      ${M(n,r("marker_height"),e.y??l,p=>c({y:Math.max(0,p)}),.05,0)}
      ${M(n,r("rotation"),e.rotation??0,p=>c({rotation:(p%360+360)%360}),1)}
      ${s?tp(n,e,t):g}
      ${o&&Li.has(o)?I(n,r("device_confirm"),!!e.confirm,p=>c({confirm:p}),{title:r("device_confirm_hint")}):g}
      ${er(n,e.marker??null,p=>c({marker:p}))}
      ${ee(n,r("device_name"),e.name??"",p=>c({name:p||null}),{wide:!0,maxlength:60,title:r("device_name_hint"),placeholder:H(n.hass,e.entity_id)})}
      ${e.name?I(n,r("show_name"),!!e.show_name,p=>c({show_name:p||void 0})):g}
      ${Mt(n,e.icon,p=>c({icon:p}))}
    </div>
    ${n.admin?m`<div class="nf-actions">
          <button class="nf-btn" @click=${()=>t.centre()}>${r("device_centre")}</button>
          ${e.y!==null?m`<button class="nf-btn" @click=${()=>c({y:null})}>${r("height_auto")}</button>`:g}
          ${np(n,e,t)}
          <button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("devices_remove")}</button>
        </div>`:g}
  </section>`}var rp=n=>n.map((e,t)=>[e,n[(t+1)%n.length]]);function op(n,e,t){let r=C(t,e),o=U(r,r),i=o?Math.max(0,Math.min(1,U(C(n,e),r)/o)):0;return se(C(n,[e[0]+r[0]*i,e[1]+r[1]*i]))}function Rc(n,e,t=.03){return n.every(r=>A(r,e)||rp(e).some(([o,i])=>op(r,o,i)<=t))}var ip=/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./,Xo=n=>n==="none"?null:n;function Qo(n,e,t){let r=n.t,o=D(n.hass,l=>ip.test(l)),i=!!e.state_entity&&e.state_entity!=="none",s=i&&!!e.state_entity2&&e.state_entity2!=="none",a=[["left_right",r("furn_state_left_right")],["top_bottom",r("furn_state_top_bottom")]];return m`${E(n,r("furn_state_entity"),e.state_entity??null,void 0,o,l=>t.update({state_entity:Xo(l)}))}
    ${i?E(n,r("furn_state_entity2"),e.state_entity2??null,void 0,o,l=>t.update({state_entity2:Xo(l)})):g}
    ${s?O(n,r("furn_state_split"),e.state_split==="top_bottom"?"top_bottom":"left_right",a,l=>t.update({state_split:l})):g}
    ${$(r("furn_state_hint"),"nf-wide")}`}function sp(n,e){let r=jt(n.type)&&(!Xe(n.type)||Ni(n.type));return q(n.type)?{accept:o=>/^(light|switch|input_boolean)\./.test(o),label:"furn_entity_light"}:r?{accept:o=>/^(media_player|switch|input_boolean|light)\./.test(o),label:"furn_entity_tv"}:n.type==="radiator"?{accept:o=>o.startsWith("climate."),label:"furn_entity_climate"}:n.type==="robot_vacuum"?{accept:o=>o.startsWith("vacuum."),label:"furn_entity_vacuum"}:{accept:o=>/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(o)||Ci(e?.states[o]),label:"furn_entity"}}function Fc(n,e,t){if(!n.hass)return null;let r=structuredClone(n.doc.floors);for(let o of r)for(let i of o.furniture)i.id===e.id&&(i[t]=null);return Je(n.hass,r).get(e.id)?.[t]??null}var ap=n=>n==="meter"?"energy_grid":n==="inverter"?"energy_solar_sensor":n==="home_battery"?"energy_battery_sensor":"furn_power",zt=(...n)=>m`<div class="nf-form nf-links">${n}</div>`;function Ec(n,e,t){let{hass:r}=n;if(!r)return g;let o=n.t,i=q(e.type),s=sp(e,r),a=D(r,f=>$t(r,f)),l=f=>_=>t.update({[f]:Xo(_)}),c=f=>D(r,f),u=(n.doc.settings.roof.strings??[]).filter(f=>f.inverter===e.id).map(f=>f.name),d=!!e.entity&&e.entity!=="none",h=e.type==="fridge_smart"?c(f=>f.startsWith("binary_sensor.")):[],p=i?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":jt(e.type)?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint";return m`${zt(e.type==="grid_point"?$(o("grid_point_hint"),"nf-wide"):E(n,o(s.label),e.entity??null,Fc(n,e,"entity"),c(s.accept),f=>t.update({entity:f})),!i&&!le.includes(e.type)&&!In(e.type)?Qo(n,e,t):g,i&&d?m`${E(n,o("furn_color_entity"),e.color_entity??null,void 0,c(f=>f.startsWith("light.")&&f!==e.entity),l("color_entity"))}${$(o("furn_color_entity_hint"),"nf-wide")}`:g,i?tr(n,e.glow_scale,f=>t.update({glow_scale:f})):g,i||e.type==="grid_point"?g:E(n,o(ap(e.type)),e.power??null,Fc(n,e,"power"),a,f=>t.update({power:f})))}
    ${e.type==="meter"?zt(E(n,o("furn_export"),e.export??null,void 0,a,l("export")),$(o("furn_export_hint"),"nf-wide")):g}
    ${e.type==="inverter"&&(n.doc.settings.roof.solar??[]).length>0?$(u.length>0?o("inverter_strings",{names:u.join(", ")}):o("inverter_strings_none"),"nf-wide"):g}
    ${e.type==="home_battery"?zt(E(n,o("furn_soc"),e.soc??null,void 0,c(f=>X(f)&&(r.states[f]?.attributes.device_class==="battery"||r.states[f]?.attributes.unit_of_measurement==="%")),l("soc")),E(n,o("furn_charge"),e.charge??null,void 0,a,l("charge")),$(o("furn_charge_hint"),"nf-wide")):g}
    ${e.type==="wallbox"?zt(E(n,o("furn_wallbox_status"),e.status??null,void 0,c(f=>Xn(f)||X(f)),l("status"))):g}
    ${!i||e.entity?m`${I(n,o("device_confirm"),!!e.confirm,f=>t.update({confirm:f}),{title:o("device_confirm_hint")})}
        <div class="nf-form">${er(n,e.marker??null,f=>t.update({marker:f}))}${Mt(n,e.icon,f=>t.update({icon:f}))}</div>`:g}
    ${e.type==="robot_vacuum"?zt(E(n,o("furn_robot_room"),e.room_sensor??null,Es(r,Je(r,n.doc.floors).get(e.id)?.entity??null,null),c(X),f=>t.update({room_sensor:f}))):g}
    ${e.type==="fridge_smart"?m`${zt(E(n,o("furn_door_left"),e.door_left??null,void 0,h,f=>t.update({door_left:f})),E(n,o("furn_door_right"),e.door_right??null,void 0,h,f=>t.update({door_right:f})))}
        ${$(o("fridge_hint"))}`:g}
    ${$(o(p))}`}var lp=/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./,cp=/^(sensor|input_select|select|input_text)\./,up=/^(device_tracker|sensor|binary_sensor|lock|climate)\./,dp=(n,e)=>n.flatMap(t=>t.items.filter(r=>r.vehicle).map(r=>({id:_e(t.id,r.id),label:`${Se(r,e)} \xB7 ${be(t,e)}`})));function Ac(n,e){return e.startsWith("device_tracker.")?n.hass?.states[e]?.attributes.source_type==="router"?2:0:1}function zc(n,e,t,r){return m`<select ?disabled=${!n.admin} @change=${o=>r(o.target.value||null)}>
    <option value="" ?selected=${!t}>${n.t("parking_vehicle_none")}</option>
    ${e.map(o=>m`<option value=${o.id} ?selected=${o.id===t}>${o.label}</option>`)}
  </select>`}function hp(n,e,t,r){let o=n.t,i=e.type_entity?n.hass?.states[e.type_entity]:void 0,s=Array.isArray(i?.attributes.options)?i.attributes.options:[],a=e.types??[],l=u=>r.update({types:u}),c=(u,d)=>l(a.map((h,p)=>p===u?{...h,...d}:h));return m`<div class="nf-wide">
    <div class="nf-sub">${o("parking_types")}</div>
    ${a.map((u,d)=>m`<div class="nf-parking-row">
        <input type="text" list="nf-parking-states" placeholder=${o("parking_type_state")} .value=${u.state} ?disabled=${!n.admin} @change=${h=>c(d,{state:h.target.value})} />
        ${zc(n,t,u.vehicle,h=>c(d,{vehicle:h??""}))}
        <button class="nf-btn" ?disabled=${!n.admin} title=${o("delete")} @click=${()=>l(a.filter((h,p)=>p!==d))}>✕</button>
      </div>`)}
    <datalist id="nf-parking-states">${s.map(u=>m`<option value=${u}></option>`)}</datalist>
    ${n.admin?m`<button class="nf-btn" @click=${()=>l([...a,{state:s[a.length]??"",vehicle:t[0]?.id??""}])}>${o("parking_add_type")}</button>`:g}
  </div>`}function Tc(n,e,t,r){let o=n.t,i=dp(t,n.hass?.language??"en"),s=D(n.hass,f=>lp.test(f)).sort((f,_)=>Ac(n,f.id)-Ac(n,_.id)),a=D(n.hass,f=>cp.test(f)),l=e.car??{},c=n.floor,u=c?.rooms.find(f=>f.points.length>=3&&A([e.x,e.z],f.points)),d=e.vehicle?J(e.vehicle):void 0,h=d?d.size[2]*(e.scale??1):0,p=!!u&&!!c&&h>c.height+1e-6;return m`<div class="nf-form nf-links">
      ${E(n,o("parking_entity"),e.entity??null,void 0,s,f=>r.update({entity:f==="none"?null:f}))}
      <label class="nf-field nf-wide">${o("parking_vehicle")} ${zc(n,i,e.vehicle??null,f=>r.update({vehicle:f}))}</label>
      ${i.length>0?g:$(o("parking_no_pack"),"nf-wide")}
      ${M(n,o("parking_scale"),Math.round((e.scale??1)*100),f=>r.update({scale:Math.min(150,Math.max(30,f))/100}),5,30)}
      ${E(n,o("parking_type_entity"),e.type_entity??null,void 0,a,f=>r.update({type_entity:f==="none"?null:f}))}
      ${e.type_entity?hp(n,e,i,r):g}
    </div>
    ${p?m`<p class="nf-sub nf-warn">${o("parking_too_tall",{car:P(n.hass,h,2),room:P(n.hass,c.height,2)})}</p>`:g}
    ${$(o("parking_hint"))}
    ${n.hass?m`${E(n,o("live_car_device"),l.device??null,null,D(n.hass,f=>up.test(f)),f=>r.update({car:{...l,device:f}}))}
        ${$(o("live_car_device_hint"),"nf-wide")}`:g}`}var pp=new Set(["parking","stairwell","rug","grid_point"]),fp={inverter:{label:"furn_model",values:["","slim","hybrid"],text:n=>`inverter_${n||"std"}`},home_battery:{label:"furn_model",values:["","wall","cube"],text:n=>`battery_${n||"std"}`},lamp_pendant:{label:"pendant_shape",values:["","globe","cone","drum"],text:n=>`pendant_${n||"shade"}`}};function mp(n,e,t,r){let o=n.hass?.language??"en",i=t.some(s=>e.type.startsWith(`pack:${s.id}:`));return m`<label class="nf-field nf-wide"
    >${n.t("furniture_type")}
    <select ?disabled=${!n.admin} @change=${s=>r.update({type:s.target.value})}>
      ${An.map(s=>m`<option value=${s} ?selected=${s===e.type}>${n.t(`furn_${s}`)}</option>`)}
      ${t.map(s=>m`<optgroup label=${be(s,n.hass?.language??"de")}>
          ${s.items.map(a=>m`<option value=${_e(s.id,a.id)} ?selected=${_e(s.id,a.id)===e.type}>${Se(a,o)}</option>`)}
        </optgroup>`)}
      ${e.type.startsWith("pack:")&&!i?m`<option value=${e.type} selected>${Ue(n.hass,e.type)}</option>`:g}
    </select>
  </label>`}function gp(n,e,t){let r=J(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!r?.length)return g;let o=n.hass?.language??"en",i=r.find(a=>a.id===e.variant)??r[0],s=a=>a.name[o]??a.name.en??Object.values(a.name)[0];return m`<div class="nf-form">
    <div class="nf-field nf-wide">
      <span>${n.t("paint_colour")}: ${s(i)}</span>
      <div class="nf-swatches" role="radiogroup" aria-label=${n.t("paint_colour")}>
        ${r.map((a,l)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${a.id===i.id} title=${s(a)} style=${`--sw:${a.hex}`} ?disabled=${!n.admin} @click=${()=>t.update({variant:l===0?null:a.id})}></button>`)}
      </div>
    </div>
  </div>`}function _p(n,e,t){let r=fp[e.type];if(!r)return g;let o=r.values.map(i=>[i,n.t(r.text(i))]);return m`<div class="nf-form">${O(n,n.t(r.label),e.variant??"",o,i=>t.update({variant:i||null}),{wide:!0})}</div>`}function bp(n,e,t){let r=n.t(`furn_${e.type}`),o=r===`furn_${e.type}`?"":r;return m`<label class="nf-field nf-wide"
      >${n.t("furn_name")}
      <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!n.admin} placeholder=${o} @change=${i=>t.update({name:i.target.value.trim()||null})} />
    </label>
    ${e.name?I(n,n.t("show_name"),!!e.show_name,i=>t.update({show_name:i||void 0})):g}`}function vp(n,e,t){let r=n.t,o=s=>t.update(s),i=n.floor;return m`${M(n,r("x"),e.x,s=>o({x:s}))} ${M(n,r("z"),e.z,s=>o({z:s}))}
    ${M(n,r("width"),e.w,s=>o({w:Math.max(.05,s)}),.01,.05)} ${M(n,r("depth"),e.d,s=>o({d:Math.max(.05,s)}),.01,.05)}
    ${M(n,r("height_m"),e.h,s=>o({h:Math.max(.005,s)}),.01,0)}
    ${M(n,r("rotation"),e.rotation,s=>o({rotation:(s%360+360)%360}),1)}
    ${q(e.type)?g:I(n,r("furn_mirror"),!!e.mirror,s=>o({mirror:s}),{wide:!1,title:r("furn_mirror_hint")})}
    ${e.type==="led_strip"?m`${M(n,r("strip_tilt"),e.tilt??0,s=>o({tilt:Math.max(-90,Math.min(90,Math.round(s)))}),5)}
        ${I(n,r("strip_upright"),!!e.upright,s=>o({upright:s}),{wide:!1,title:r("strip_upright_hint")})}`:g}
    ${zn(e)&&i?m`${M(n,r("mount_height"),e.mount_y??Fn(i,e),s=>o({mount_y:Math.max(0,s)}),.01,0)}
        ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!n.admin} @click=${()=>o({mount_y:null})}>${r("height_auto")}</button>`:g}`:g}`}function yp(n,e){if(e.type==="stairs")return $(n.t("stairs_hint"));if(e.type!=="stairwell")return g;let t=n.floor&&!n.floor.rooms.some(r=>r.points.length>=3&&Rc(Zr(e),r.points));return m`${$(n.t("stairwell_hint"))}${t?m`<p class="nf-sub nf-pack-error">${n.t("stairwell_outside")}</p>`:g}`}function wp(n,e,t){if(!n.admin)return g;let r=n.t,o=!!e.entity&&e.entity!=="none"&&e.type!=="parking";return m`<div class="nf-actions">
    <button class="nf-btn" @click=${()=>t.rotate(-90)}>${r("rotate_left")}</button>
    <button class="nf-btn" @click=${()=>t.rotate(90)}>${r("rotate_right")}</button>
    ${o?m`<button class="nf-btn" title=${r("as_device_hint")} @click=${()=>t.toDevice(e)}>${r("as_device")}</button>`:g}
    <button class="nf-btn" @click=${()=>t.duplicate()}>${r("duplicate")}</button>
    <button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button>
  </div>`}function gn(n,e,t){let r=Qe(e.type)?Ec(n,e,t):pp.has(e.type)?g:m`<div class="nf-form nf-links">${Qo(n,e,t)}</div>`;return m`<section>
    <div class="nf-h3row"><h3>${e.name||n.t("furniture")}</h3>${t.lockButton}</div>
    <div class="nf-form">${bp(n,e,t)} ${mp(n,e,t.packs,t)} ${vp(n,e,t)}</div>
    ${yp(n,e)} ${_p(n,e,t)} ${gp(n,e,t)}
    ${r} ${e.type==="parking"?Tc(n,e,t.packs,t):g}
    ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&n.admin?m`<section>${$(n.t("vehicle_to_spot_hint"))}<div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>t.toSpot(e)}>🅿 ${n.t("vehicle_to_spot")}</button></div></section>`:g}
    ${wp(n,e,t)}
  </section>`}var xp=["door","window","opening","garage_door"],kp=/griff|handle|fenster|window|drehgriff/i;function $p(n){let{hass:e}=n,t=i=>e?.states[i],r=i=>t(i)?.attributes.device_class,o=i=>i.startsWith("binary_sensor.")&&xp.includes(r(i)??"");return{covers:D(e,i=>i.startsWith("cover.")),positions:D(e,i=>/^(sensor|number|input_number)\./.test(i)&&Number.isFinite(Number(t(i)?.state))),contacts:D(e,i=>o(i)||X(i)&&to(t(i))!==null),plainContacts:D(e,o),handles:D(e,i=>i.startsWith("binary_sensor.")?typeof t(i)?.attributes.window_state=="string":X(i)&&(to(t(i))!==null||kp.test(`${i} ${H(e,i)}`))),numbers:D(e,X)}}function ei(n,e,t){if(!n.hass)return null;let r=structuredClone(n.doc.floors);for(let o of r)for(let i of o.openings)i.id===e.id&&(i[t]=null);return eo(n.hass,r).get(e.id)?.[t]??null}var Tt=n=>n==="none"?null:n;function Sp(n,e,t){let r=e.type==="door"?Gr:Ur,o=pt({type:e.type,style:null},t.isExterior(e)),i=e.style&&r.includes(e.style)?e.style:"",s=[["",n.t("style_auto",{style:n.t(`style_${o}`)})],...r.map(a=>[a,n.t(`style_${a}`)])];return O(n,n.t("opening_style"),i,s,a=>t.update({style:a||null}),{wide:!0})}function Jo(n,e,t,r,o){return m`<label class="nf-field"
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
  </label>`}function Mp(n,e,t){if(e.type!=="door")return g;let r=pt(e,t.isExterior(e));return r==="sidelight"?m`${I(n,n.t("sidelight_hinge"),!!e.sidelight_hinge,o=>t.update({sidelight_hinge:o}),{wide:!1,title:n.t("sidelight_hinge_hint")})}
      ${Jo(n,e,"sidelight_width","sidelight_width",t)}`:r==="sidelights"?m`${Jo(n,e,"sidelight_width","sidelight_width_left",t)} ${Jo(n,e,"sidelight_width2","sidelight_width_right",t)}`:g}function Pc(n,e,t,r,o){let i=t===1,s=n.t,a=i?e.tilt:e.tilt2??null,l=i?e.contact:e.contact2,c=(i?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),u=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),d=f=>{let _=f==="contact_tilt"?{}:i?{tilt:null}:{tilt2:null};r.update({...i?{sensor:f}:{sensor2:f},..._})},h=f=>r.update(i?{contact:f}:{contact2:Tt(f)}),p=e.tilt_angle&&e.tilt_angle!=="none";return m`${O(n,s("sensor_kind"),c,u,d,{wide:!0})}
    ${c==="handle"?E(n,s("handle_entity"),l,void 0,o.handles,f=>h(f==="none"?i?"none":null:f)):E(n,s("contact_entity"),l,i?ei(n,e,"contact"):void 0,o.plainContacts,h)}
    ${c==="contact_tilt"?E(n,s("tilt_entity"),a,void 0,o.contacts,f=>r.update(i?{tilt:Tt(f)}:{tilt2:Tt(f)})):g}
    ${i?m`${E(n,s("tilt_angle_entity"),e.tilt_angle??null,void 0,o.numbers,f=>r.update({tilt_angle:Tt(f)}))}
        ${p?m`${M(n,s("tilt_angle_max"),e.tilt_max??15,f=>r.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${M(n,s("tilt_angle_offset"),e.tilt_offset??0,f=>r.update({tilt_offset:f}),.5)}
            ${I(n,s("tilt_angle_invert"),!!e.tilt_invert,f=>r.update({tilt_invert:f}))}`:g}`:g}`}function Rp(n,e,t,r){let o=n.t,i=e.type==="window",s=ei(n,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return m`${E(n,o(i?"cover_entity":"door_cover"),e.cover,s,r.covers,l=>t.update({cover:l}))}
    ${a?m`${E(n,o("cover_position_entity"),e.position??null,void 0,r.positions,l=>t.update({position:Tt(l)}))}
        ${e.position?I(n,o("cover_position_invert"),!!e.position_inverted,l=>t.update({position_inverted:l})):g}
        ${I(n,o("device_confirm"),!!e.confirm,l=>t.update({confirm:l}),{title:o("cover_confirm_hint")})}`:g}`}function Fp(n,e,t,r){let o=n.t,i=e.leaves===2;return m`${E(n,o(i?"contact_main":"contact_entity"),e.contact,ei(n,e,"contact"),r.contacts,s=>t.update({contact:s}))}
    ${i&&e.type!=="garage"?E(n,o("contact_second"),e.contact2,void 0,r.contacts,s=>t.update({contact2:Tt(s)})):g}
    ${e.type==="door"?I(n,o("door_shut"),!!e.shut,s=>t.update({shut:s}),{title:o("door_shut_hint")}):g}`}function ti(n,e,t){let r=n.t,o=$p(n),i=Tn(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=p=>t.update(p),u=Object.keys(ft).map(p=>m`<button class="nf-chip" aria-pressed=${p===i} @click=${()=>t.setPreset(e,p)}>${r(`preset_${p}`)}</button>`),d=[["left",r("hinge_left")],["right",r("hinge_right")]],h=[["",r("opening_mark_open")],["closed",r("opening_mark_closed")]];return m`<section>
    <div class="nf-h3row"><h3>${r(`preset_${i}`)}</h3>${t.lockButton}</div>
    ${n.admin?m`<div class="nf-presets" role="group" aria-label=${r("opening_type")}>${u}</div>`:g}
    ${n.admin&&!a?m`<div class="nf-actions">
          <button class="nf-btn" title=${r("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${r(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?m`<button class="nf-btn" title=${r("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${r("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${M(n,r("width"),e.width,p=>c({width:Math.max(.3,p)}),.01,.3)}
      ${M(n,r("opening_position"),e.offset,p=>c({offset:Math.max(0,p)}),.01,0)}
      ${s?M(n,r("sill"),e.sill,p=>c({sill:Math.max(0,p)}),.01,0):g}
      ${M(n,r("opening_height"),e.height,p=>c({height:Math.max(.3,p)}),.01,.3)}
      ${a?g:Sp(n,e,t)} ${Mp(n,e,t)}
      ${O(n,r("opening_mark"),e.mark==="closed"?"closed":"",h,p=>c({mark:p==="closed"?"closed":null}),{wide:!0,title:r("opening_mark_hint")})}
      ${a?g:O(n,r(e.leaves===2?"main_leaf":"hinge"),e.hinge,d,p=>c({hinge:p}),{wide:!0})}
      ${Rp(n,e,t,o)}
      ${s?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_main")}</h4>`:g}${Pc(n,e,1,t,o)}
          ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${r("leaf_second")}</h4>${Pc(n,e,2,t,o)}`:g}`:Fp(n,e,t,o)}
    </div>
    ${$(r(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${n.admin?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${r("delete")}</button></div>`:g}
  </section>`}var Pt=n=>Math.round(n*1e3)/1e3,Ep=2.4;function Oc(n,e,t){let r=go(n,e[0],e[1],t[0],t[1]),o=r===null,i=Math.min(...n.floors.map(l=>l.elevation)),s=Pt(r??i+Ep),a=o?6:n.settings.roof.pitch||35;return{id:T("roof"),x0:Pt(e[0]),z0:Pt(e[1]),x1:Pt(t[0]),z1:Pt(t[1]),shape:o?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}}}function Dc(n){let e=t=>Pt(t+1);return{...structuredClone(n),id:T("roof"),x0:e(n.x0),x1:e(n.x1),z0:e(n.z0),z1:e(n.z1)}}var Hc=(n,e)=>n.findIndex(t=>t.id===e)+1;function Ot(n){let e=n.roof.floorsTopDown();return e.length<2?g:m`<div class="nf-seg nf-dev-source">${e.map(t=>m`<button aria-pressed=${t.id===n.floorId} @click=${()=>n.setFloorId(t.id)}>${t.name}</button>`)}</div>`}function _n(n,e,t){return n.admin?m`<button class="nf-btn nf-fix" aria-pressed=${e} title=${n.t("fix_hint")} @click=${t}>${e?`\u{1F512} ${n.t("unfix")}`:`\u{1F513} ${n.t("fix")}`}</button>`:g}function Dt(n,e,t,r){return m`<div class="nf-seg nf-dev-source">${e.map(([o,i])=>m`<button aria-pressed=${o===t} ?disabled=${!n.admin} @click=${()=>r(o)}>${i}</button>`)}</div>`}function at(n,e){let{t,doc:r,hass:o}=n,i=t(`compass_${Mo(e,r.settings.north??0)}`);if(e.key===pe)return t("solar_ground");if(e.wall){let l=r.floors.find(c=>c.id===e.wall.floorId);return`${t("solar_wall")} ${l?.name??""} \xB7 ${i} \xB7 ${P(o,e.lu,1)} m`}let s=r.settings.roof.sections??[],a=e.section?t("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):t("solar_main");return e.flat?`${a} \xB7 ${t("solar_flat")}`:`${a} \xB7 ${i} \xB7 ${Math.round(e.pitch)}\xB0`}var Lc=(n,e)=>m`<div class="nf-h3row"><h3>${n}</h3>${e}</div>`,Cc=(n,e)=>m`<button class="nf-btn nf-back" @click=${e}>‹ ${n}</button>`,Ic=(n,e)=>t=>Math.max(n,Math.min(e,Q(t)));function Ap(n,e){let{host:t,roof:r}=n,o=t.t,i=y=>r.patchSection(y),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[o("roof_side_top"),o("roof_side_bottom")]:[o("roof_side_left"),o("roof_side_right")],[c,u]=e.flip?[l[1],l[0]]:l,d=!!t.doc.settings.lock_plan,h=(y,w,R,S=.05,F=0)=>M(t,y,w,z=>R(Math.max(F,Q(z))),S,F),p=[...t.doc.floors].filter(y=>y.rooms.length>0).sort((y,w)=>w.elevation-y.elevation),f=_o(t.doc,e)?.id,_=y=>{let w=t.doc.floors.find(F=>F.id===y);if(!w)return;let R=Q(w.elevation+w.height),S=R-e.base;i({base:R,eave_a:Q(e.eave_a+S),eave_b:Q(e.eave_b+S)})},v=d?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${o("lock_plan_hint")} @click=${()=>n.toggleLockPlan()}>🔒 ${o("plan_locked")}</button>`:_n(t,!!e.locked,()=>i({locked:!e.locked})),b=qi.map(y=>[y,o(`roof_shape_${y}`)]),x=(y,w)=>m`<button class="nf-btn" title=${o("roof_dormer_hint")} @click=${()=>r.addDormer(y)}>+ ${o("roof_dormer")} ${w}</button>`;return m`${Cc(o("roof_sections"),()=>r.sectionId=null)}
    <section>
      ${Ot(n)}
      ${Lc(`${e.dormer?o("roof_dormer"):o("roof_section")} ${Hc(t.doc.settings.roof.sections??[],e.id)}`,t.admin?v:g)}
      ${O(t,o("roof_shape"),e.shape,b,y=>i({shape:y}),{wide:!0})}
      ${s?g:Dt(t,[["x",o("roof_axis_x")],["z",o("roof_axis_z")]],e.axis,y=>i({axis:y}))}
      ${I(t,o("roof_open"),!!e.open,y=>i({open:y}),{title:o("roof_open_hint")})}
      <div class="nf-form">
        ${s?h(o("roof_height"),e.eave_a,y=>i({eave_a:y,eave_b:y})):m`${h(`${o("roof_eave")} ${a?"":c}`,e.eave_a,y=>i({eave_a:y}))}
            ${a?g:h(`${o("roof_eave")} ${u}`,e.eave_b,y=>i({eave_b:y}))}
            ${h(`${o("roof_pitch_short")} ${a?"":c}`,e.pitch_a,y=>i({pitch_a:Math.min(75,y)}),1)}
            ${a?g:h(`${o("roof_pitch_short")} ${u}`,e.pitch_b,y=>i({pitch_b:Math.min(75,y)}),1)}`}
        ${h(o("roof_base"),e.base,y=>i({base:y}))}
        ${O(t,o("roof_on_floor"),f??"",p.map(y=>[y.id,y.name]),_,{title:o("roof_on_floor_hint")})}
        ${$(o("roof_base_hint"),"nf-wide")}
        ${h(o("roof_overhang"),e.overhang??t.doc.settings.roof.overhang,y=>i({overhang:Math.min(2,y)}))}
      </div>
      ${s&&t.admin?m`${Y(m`<button class="nf-btn" title=${o("roof_outline_hint")} @click=${()=>r.takeOutline()}>${o("roof_outline")}</button>`,e.points?m`<button class="nf-btn" @click=${()=>i({points:null})}>${o("roof_rect")}</button>`:g)}
          ${$(o(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${$(`${o("roof_ridge_height")}: ${P(t.hass,et(e),2)} m \xB7 ${o("roof_section_hint")}`)}
      ${t.admin?Y(s?g:m`<button class="nf-btn" title=${o("roof_swap_hint")} @click=${()=>i({flip:!e.flip})}>⇅ ${o("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?m`${x("a",c)}${a?g:x("b",u)}`:g,m`<button class="nf-btn" @click=${()=>r.duplicateSection()}>${o("duplicate")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeSection()}>${o("delete")}</button>`):g}
    </section>`}function zp(n,e){let{host:t,roof:r}=n,o=t.t,i=W(t.doc),s=h=>r.patchWindow(h),a=D(t.hass,h=>h.startsWith("cover.")),l=D(t.hass,h=>Xn(h)||X(h)),c=(h,p,f,_)=>E(t,o(h),p??null,void 0,f,v=>s({[_]:v==="none"?null:v})),u=h=>{let p=i.find(f=>f.key===h);p&&s({...un(p,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},d=(t.doc.settings.roof.windows??[]).findIndex(h=>h.id===e.id)+1;return m`${Cc(o("roof_sections"),()=>r.windowId=null)}
    <section>
      ${Lc(`\u{1FA9F} ${o("roof_window")} ${d}`,_n(t,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${O(t,o("solar_face"),e.face,i.map(h=>[h.key,at(t,h)]),u,{wide:!0})}
        ${M(t,o("width"),e.w??.78,h=>s({w:Ic(.3,4)(h)}),.01,.3)}
        ${M(t,o("height_m"),e.h??1.18,h=>s({h:Ic(.3,4)(h)}),.01,.3)}
        ${M(t,o("solar_u"),e.u,h=>s({u:Q(h)}),.05)} ${M(t,o("solar_v"),e.v,h=>s({v:Q(h)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${ee(t,o("roof_window_name"),e.name??"",h=>s({name:h||null}),{wide:!0,maxlength:64})}
      </div>
      ${$(o("roof_window_motor_hint"))} ${$(o("roof_window_hint"))}
      ${t.admin?Y(m`<button class="nf-btn nf-danger" @click=${()=>r.removeWindow()}>${o("delete")}</button>`):g}
    </section>`}function Tp(n){let{host:e,roof:t}=n,r=e.doc.settings.roof.windows??[],o=new Map(W(e.doc).map(s=>[s.key,s])),i=s=>{t.windowId=s,t.sectionId=null};return m`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${$(e.t(o.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${r.length>0?m`<div class="nf-room-list">
          ${r.map((s,a)=>{let l=o.get(s.face);return m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>i(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?at(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${Y(m`<button class="nf-btn" ?disabled=${!e.admin||o.size===0} @click=${()=>t.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function Vc(n){let{host:e,roof:t}=n,r=e.doc.settings.roof,o=r.type==="custom";if(t.window)return zp(n,t.window);if(o&&t.section)return Ap(n,t.section);let i=o?r.sections??[]:[],s=e.t,a=(l,c)=>`${c+1} \xB7 ${l.dormer?s("roof_dormer"):s(`roof_shape_${l.shape}`)} \xB7 ${P(e.hass,Math.abs(l.x1-l.x0),1)} \xD7 ${P(e.hass,Math.abs(l.z1-l.z0),1)} m \xB7 ${s("roof_ridge_height")} ${P(e.hass,et(l),1)} m`;return m`<section>
      ${Ot(n)}
      <h3>${s("roof_sections")}</h3>
      ${$(s("roof_sections_hint"))}
      ${o?m`<div class="nf-room-list">${i.map((l,c)=>m`<div class="nf-row"><button class="nf-dev-name" @click=${()=>t.sectionId=l.id}><span>${a(l,c)}</span></button></div>`)}</div>
          ${Y(m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>t.useSections(!0)}>${s("roof_sections_regen")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(l=>l.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:Y(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>t.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${Tp(n)}`}var ni=40,Bc=60;function ri(n){let e=new Set((n.solar??[]).map(t=>t.string).filter(Boolean));n.strings=(n.strings??[]).filter(t=>e.has(t.id))}function Wc(n,e,t,r){let o=n.solar?.find(i=>i.id===e);if(o){if(t==="new"){let i=n.strings??[],s={id:r.id,name:r.name(i.length+1),entity:o.entity??null,inverter:null};n.strings=[...i,s],o.string=s.id}else o.string=t;ri(n)}}function Nc(n,e){let t=new Set(n??[]);return t.delete(e)||t.add(e),t.size>0?[...t].sort():null}function Kc(n){let e=n.split(/[,;\s]+/).map(r=>Number.parseInt(r,10)).filter(r=>Number.isFinite(r)&&r>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(Bc,e[0])),layout:null,skip:null}:{layout:e.slice(0,ni).map(r=>Math.min(Bc,r)),rows:Math.min(ni,e.length),cols:Math.max(1,...e),skip:null}}function Gc(n,e){let t=Math.max(1,Math.min(ni,Math.round(e))),r=n.layout;return r?.length?{rows:t,layout:Array.from({length:t},(o,i)=>r[i]??r[r.length-1])}:{rows:t}}var Uc=n=>n.layout?.length?n.layout.join(", "):String(n.cols),Pp=["portrait","look","name","string","entity","module_w","module_h","wp"];function Op(n){let e={};for(let t of Pp)e[t]=n[t];return e}function jc(n,e,t){let r=Op(e);if(t===pe)return{...ln(n,e.id),...r,rows:e.rows,cols:e.cols};let o=W(n).find(s=>s.key===t);if(o)return jn(o,{...e,...r});let i=xe(n).find(s=>s.key===t);return i?jn(i,{...e,...r,rows:1}):null}var Zc=400;function oi(n,e){let t=n?ke(n,e).length:0;return{modules:t,kwp:t*(e.wp??Zc)/1e3}}function qc(n){let{host:e,roof:t}=n,r=e.t,o=e.doc.settings.roof.solar??[],i=e.doc.settings.roof.strings??[],s=W(e.doc),a=new Map(o.map(u=>[u.id,oe(e.doc,u,s)])),l=(u,d)=>{let h=a.get(u.id),p=oi(h,u),f=r("solar_summary",{n:p.modules,kwp:P(e.hass,p.kwp,1)});return m`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>t.selectField(u.id)}>
        <span>${u.name||`${r("solar_field")} ${d+1}`} · ${h?at(e,h):r("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=u=>{let d=o.filter(_=>_.string===u.id),h=d.map(_=>oi(a.get(_.id),_)),p=h.reduce((_,v)=>_+v.modules,0),f=h.reduce((_,v)=>_+v.kwp,0);return m`<p class="nf-sub">🔗 <b>${u.name}</b> · ${r("solar_string_sum",{fields:d.length,n:p,kwp:P(e.hass,f,1)})}</p>`};return m`<section>
    ${Ot(n)}
    <h3>☀ ${r("solar_fields")}</h3>
    ${$(r(s.length>0?"solar_hint":"solar_no_roof"))}
    ${o.length>0?m`<div class="nf-room-list">${o.map(l)}</div>`:g}
    ${Y(m`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>t.addField()}>+ ${r("solar_add")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>t.addGroundField()}>+ ${r("solar_add_ground")}</button>`,m`<button class="nf-btn" ?disabled=${!e.admin||!n.floorId} @click=${()=>t.addWallField()}>+ ${r("solar_add_wall")}</button>`)}
    ${i.length>0?m`<h4 class="nf-lib-head">${r("solar_strings")}</h4>${i.map(c)}`:g}
  </section>`}function Dp(n,e){let{host:t,roof:r}=n,o=t.t,i=D(t.hass,h=>$t(t.hass,h)),s=t.doc.settings.roof.strings??[],a=s.find(h=>h.id===e.string),l=[["",o("solar_string_none")],...s.map(h=>[h.id,h.name]),["new",`+ ${o("solar_string_new")}`]],c=O(t,o("solar_string"),e.string??"",l,h=>r.setString(h===""?null:h),{wide:!0});if(!a)return m`${c}${E(t,o("solar_entity"),e.entity??null,void 0,i,h=>r.patchField({entity:h==="none"?null:h}))}`;let u=t.hass?Je(t.hass,t.doc.floors):null,d=t.doc.floors.flatMap(h=>h.furniture.filter(p=>p.type==="inverter").map(p=>({item:p,floor:h}))).map(({item:h,floor:p},f)=>{let _=u?.get(h.id)?.entity,v=h.name?.trim()||(_?H(t.hass,_):"");return[h.id,`${v||`${o("furn_inverter")} ${f+1}`} \xB7 ${p.name}`]});return m`${c}
    ${ee(t,o("solar_string_name"),a.name,h=>r.patchString({name:h||a.name}),{wide:!0})}
    ${E(t,o("solar_string_entity"),a.entity??null,void 0,i,h=>r.patchString({entity:h==="none"?null:h}))}
    ${O(t,o("solar_string_inverter"),a.inverter??"",[["",o(d.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...d],h=>r.patchString({inverter:h||null}),{wide:!0})}`}function Yc(n,e){let{host:t,roof:r}=n,o=t.t,i=w=>r.patchField(w),s=W(t.doc),a=oe(t.doc,e,s),l=e.face===pe,c=tn(e),u=oi(a,e),d=c.reduce((w,R)=>w+R,0)-(e.skip?.length??0),h=(t.doc.settings.roof.solar??[]).findIndex(w=>w.id===e.id)+1,p=[...a?[]:[["",o("solar_face_gone")]],...s.map(w=>[w.key,at(t,w)]),[pe,o("solar_ground")],...xe(t.doc).map(w=>[w.key,at(t,w)])],f=w=>{let R=jc(t.doc,e,w);R&&i(R)},_=(w,R,S=Q)=>F=>Math.max(w,Math.min(R,S(F))),v=w=>i(cn(t.doc,e,w)),b=a?.wall?"solar_flip_wall":"solar_flip",x=(w,R,S)=>M(t,o(R),e[w]??S,F=>i({[w]:_(.3,3)(F)}),.01,.3),y=!!e.layout?.length&&new Set(e.layout).size>1;return m`<button class="nf-btn nf-back" @click=${()=>r.solarId=null}>‹ ${o("solar_fields")}</button>
    <section>
      ${Ot(n)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${o("solar_field")} ${h}`}</h3>
        ${_n(t,!!e.locked,()=>i({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${ee(t,o("solar_name"),e.name??"",w=>i({name:w||null}),{wide:!0,placeholder:o("solar_name_hint")})}
        ${O(t,o("solar_face"),a?e.face:"",p,f,{wide:!0})}
        ${M(t,o("solar_rows"),c.length,w=>i(Gc(e,w)),1,1)}
        <label class="nf-field" title=${o("solar_cols_hint")}
          >${o("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!t.admin}
            .value=${Uc(e)}
            @change=${w=>{let R=Kc(w.target.value);R&&i(R)}}
          />
        </label>
      </div>
      ${$(`${a&&!a.unbounded?`${o("solar_face_size",{w:P(t.hass,a.lu,1),h:P(t.hass,a.ls,1)})} \xB7 `:""}${o("solar_cols_hint")}`)}
      ${y?Dt(t,["left","center","right"].map(w=>[w,o(`solar_align_${w}`)]),e.align??"left",w=>i({align:w})):g}
      ${Dt(t,[[!0,o("solar_portrait")],[!1,o("solar_landscape")]],e.portrait!==!1,w=>i({portrait:w}))}
      ${Dt(t,[["black",o("solar_look_black")],["blue",o("solar_look_blue")]],e.look==="blue"?"blue":"black",w=>i({look:w}))}
      <div class="nf-form">
        ${x("module_w","solar_module_w",1.13)} ${x("module_h","solar_module_h",1.72)}
        ${M(t,o("solar_wp"),e.wp??Zc,w=>i({wp:_(50,1500,Math.round)(w)}),5,50)}
      </div>
      ${Y(m`<button class="nf-btn" aria-pressed=${r.picking} ?disabled=${!t.admin} @click=${()=>r.picking=!r.picking}>${r.picking?"\u2713 ":""}${o("solar_pick")}</button>`,e.skip?.length?m`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>i({skip:null})}>${o("solar_pick_all")}</button>`:g)}
      ${r.picking?$(o("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?m`${M(t,o("solar_base"),e.base??0,w=>i({base:w>.001?Math.min(60,Q(w)):null}),.05,0)}
            ${M(t,o("solar_rotation"),e.rotation??0,v,5)}
            ${Y(m`<button class="nf-chip" ?disabled=${!t.admin} @click=${()=>v((e.rotation??0)-15)}>↺ 15°</button>`,m`<button class="nf-chip" ?disabled=${!t.admin} @click=${()=>v((e.rotation??0)+15)}>↻ 15°</button>`)}`:m`${M(t,o("solar_u"),e.u,w=>i({u:Q(w)}),.05)} ${M(t,o(a?.wall?"solar_v_wall":"solar_v"),e.v,w=>i({v:Q(w)}),.05)}`}
        ${a?.wall?M(t,o("solar_tilt_wall"),e.tilt??0,w=>i({tilt:_(0,90,Math.round)(w)}),5,0):g}
        ${a?.flat?M(t,o("solar_tilt"),e.tilt??15,w=>i({tilt:_(0,45,Math.round)(w)}),1,0):g}
        ${a?.wall||a?.flat?I(t,o(b),!!e.flip,w=>i({flip:w})):g}
      </div>
      <p class="nf-sub">
        ${o("solar_summary",{n:u.modules,kwp:P(t.hass,u.kwp,1)})}${u.modules<d?m` · <b>${o("solar_partial",{n:u.modules,total:d})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${o("solar_string")}</h4>
      <div class="nf-form">${Dp(n,e)}</div>
      ${$(o("solar_string_hint"))} ${$(o("solar_form_hint"))}
      ${t.admin?Y(m`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&i({...wt(a,e.id),portrait:e.portrait})}>${o("solar_fit")}</button>`,m`<button class="nf-btn nf-danger" @click=${()=>r.removeField()}>${o("delete")}</button>`):g}
    </section>`}var Xc=n=>Math.round(n*1e3)/1e3,vr=class{ctx;sectionSel=null;windowSel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let t=(this.settings.sections??[]).length>0;e&&t&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(r=>{r.settings.roof.type="custom",(e||!t)&&(r.settings.roof.sections=bo(r,()=>T("roof")))}),this.sectionId=null)}addSection(e,t){if(!this.admin)return;let r=Oc(this.doc,e,t);this.ctx.host.change(o=>{o.settings.roof.type="custom",o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:t,wall_interior:r}=this.doc.settings,o=co(e.rooms,e.walls??[],t,r);if(!o)return;let i=o.map(([s,a])=>[Xc(s),Xc(a)]);this.patchSection({shape:"flat",points:i,...Xt(i)})}addDormer(e){let t=this.section;if(!t||!this.admin)return;let r=ho(t,e,T("roof"));this.ctx.host.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],r]}),this.sectionId=r.id}patchSection(e){let t=this.sectionSel;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.sections?.find(i=>i.id===t);o&&Object.assign(o,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(r=>r.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let t=Dc(e);this.ctx.host.change(r=>r.settings.roof.sections=[...r.settings.roof.sections??[],t]),this.sectionId=t.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,t=hn(W(this.doc).filter(o=>!o.flat),e)??W(this.doc)[0];if(!t)return;let r=un(t,T("rwin"));this.ctx.host.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],r]),this.windowSel=r.id,this.sectionId=null}patchWindow(e){let t=this.windowSel;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.windows?.find(s=>s.id===t);if(!o)return;Object.assign(o,e);let i=W(r).find(s=>s.key===o.face);i&&Object.assign(o,Ie(i,Ke(o)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(r=>r.id!==e)),this.windowId=null)}addField(){if(!this.admin)return;let e=W(this.doc),t=new Set((this.settings.solar??[]).map(i=>i.face)),r=this.doc.settings.north??0,o=hn(e.filter(i=>!t.has(i.key)),r)??hn(e,r);o&&(this.appendField(wt(o,T("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,t=this.admin&&e?xo(this.doc,T("pv"),e):null;t&&this.appendField(t)}addGroundField(){this.admin&&this.appendField(ln(this.doc,T("pv")))}appendField(e){this.ctx.host.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let t=this.settings.solar?.find(r=>r.id===e);t?.face.startsWith("wall:")&&this.ctx.setFloorId(t.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((t,r)=>{Object.assign(t,e);let o=oe(r,t);o&&Object.assign(t,Ie(o,t))})}toggleCell(e){this.editField(t=>t.skip=Nc(t.skip,e))}editField(e){let t=this.fieldSel;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.solar?.find(i=>i.id===t);o&&e(o,r)})}setString(e){let t=this.fieldSel;!t||!this.admin||this.ctx.host.change(r=>Wc(r.settings.roof,t,e,{id:T("str"),name:o=>this.ctx.host.t("solar_string_n",{n:o})}))}patchString(e){let t=this.field?.string;!t||!this.admin||this.ctx.host.change(r=>{let o=r.settings.roof.strings?.find(i=>i.id===t);o&&Object.assign(o,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(t=>{t.settings.roof.solar=(t.settings.roof.solar??[]).filter(r=>r.id!==e),ri(t.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,t)=>t.elevation-e.elevation)}};var Qc=(n,e)=>n.floors.flatMap(t=>t.furniture).find(t=>t.type===e),Hp=n=>!n||n==="none";async function Jc(n){let e;try{e=await n.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let t=Aa(n.hass,e),r=0,o=(i,s,a)=>{if(!a)return;let l=Qc(n.doc(),i);!l&&n.canAdd()&&(n.addDevice(i),l=Qc(n.doc(),i)),!(!l||!Hp(l[s]))&&(n.setField(l.id,s,a),r++)};return o("meter","power",t.grid),o("inverter","power",t.solar),o("home_battery","power",t.battery),o("home_battery","soc",t.battery_soc),{kind:"done",filled:r}}var Ip=/garage|carport/,Lp=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,Cp=/flur|diele|eingang|hall|entr|lobby/,eu=.25,Ht=n=>Math.round(n*1e3)/1e3;function Vp(n,e,t){let r=e.rooms.filter(u=>u.points.length>=3),o=u=>r.find(d=>u.test(t.roomLabel(d).toLowerCase())),i=r.find(u=>e.furniture.some(d=>d.type==="parking"&&A([d.x,d.z],u.points))),s=o(Ip)??i,a=o(Lp),l=n==="wallbox"?s:n==="meter"?a??o(Cp)??s:a??s,c=[...r].sort((u,d)=>Math.abs(re(d.points))-Math.abs(re(u.points)))[0];return l??t.selected??c}function Bp(n,e){let[t,r]=ie(n.points),o=n.points.some((s,a)=>!e.has(a)),i=null;return n.points.forEach((s,a)=>{if(o&&e.has(a))return;let l=n.points[(a+1)%n.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(i&&c<=i.length)return;let u=[(s[0]+l[0])/2,(s[1]+l[1])/2],d=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(t-u[0])*d[0]+(r-u[1])*d[1]<0&&(d=[0-d[0],0-d[1]]),i={mid:u,inward:d,length:c}}),i}function tu(n,e,t,r){let[o,i,s]=Be(n),a={id:T("furniture"),type:n,rotation:0,w:o,d:i,h:s,variant:null};if(n==="grid_point"){let p=Pa(e),[f,_]=p?[p.x,p.z]:r.fallback;return{...a,x:Ht(f),z:Ht(_)}}let l=Vp(n,t,r),[c,u]=l?ie(l.points):r.fallback;if(l){let p=new Set(t.openings.filter(_=>_.room_id===l.id).map(_=>_.edge)),f=Bp(l,p);f&&([c,u]=[f.mid[0]+f.inward[0]*(i/2+eu),f.mid[1]+f.inward[1]*(i/2+eu)])}let d={...a,x:Ht(c),z:Ht(u)},h=l?Zt({...t,furniture:[...t.furniture,d]},d,e.settings.wall_interior):null;return h?{...d,x:Ht(h.x),z:Ht(h.z),rotation:h.rotation}:d}var yr=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let t=this.undoStack.pop();return t===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(t))}redo(e){let t=this.redoStack.pop();return t===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(t))}};var ii=n=>Math.round(n*1e3)/1e3,It="unmovable",si="no change";function nu(n,e,t,r){let o=i=>[ii(i[0]+t),ii(i[1]+r)];switch(e.kind){case"device":return n.placements.some(i=>i.entity_id===e.id)?{apply(i){let s=i.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}}:It;case"furniture":return{apply(i){let s=i.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=o([s.x,s.z]))}};case"wall":return{apply(i){let s=(i.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[o(s.a),o(s.b)])}};case"outdoor":return{apply(i){let s=i.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(o))}};case"opening":{let i=n.openings.find(p=>p.id===e.id),s=i?De(i,n.rooms,n.walls??[]):null;if(!i||!s)return It;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,u=(t*(l[0]-a[0])+r*(l[1]-a[1]))/c;if(Math.abs(u)<1e-9)return si;let d=Math.min(i.width,c)/2,h=ii(Math.min(c-d,Math.max(d,i.offset+u)));return{apply(p){let f=p.openings.find(_=>_.id===e.id);f&&(f.offset=h)}}}case"room":{let i=n.rooms.find(a=>a.id===e.id);if(!i)return It;let s=new Set(n.placements.filter(a=>A([a.x,a.z],i.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=o(l.points[e.corner]);return}l.points=l.points.map(o);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=o([c.x,c.z]))}}}}}}var wr=n=>Math.round(n*1e3)/1e3,ai=n=>(n+90)%360;function ru(n,e,t){let r=o=>[o.x,o.z]=e([o.x,o.z]);for(let o of n.rooms)o.points=o.points.map(e);for(let o of n.furniture)r(o),t&&(o.rotation=ai(o.rotation));for(let o of n.placements)r(o),t&&(o.rotation=ai(o.rotation??0));for(let o of n.outdoor)o.points=o.points.map(e);for(let o of n.walls??[])[o.a,o.b]=[e(o.a),e(o.b)];n.background&&(r(n.background),t&&(n.background.rotation=ai(n.background.rotation??0)))}function Wp(n,e){for(let r of n.settings.roof.sections??[]){let o=[e([r.x0,r.z0]),e([r.x1,r.z0]),e([r.x1,r.z1]),e([r.x0,r.z1])],[i,s]=[o.map(a=>a[0]),o.map(a=>a[1])];[r.x0,r.x1,r.z0,r.z1]=[Math.min(...i),Math.max(...i),Math.min(...s),Math.max(...s)],r.points&&(r.points=r.points.map(e))}let t=n.energy.meter;t&&([t.x,t.z]=e([t.x,t.z]))}function ou(n,e,t,r){if(e.allFloors){for(let o of n.floors)ru(o,t,r);Wp(n,t)}else{let o=n.floors.find(i=>i.id===e.floorId);o&&ru(o,t,r)}}function iu(n,e,t,r){ou(n,e,([o,i])=>[wr(o+t),wr(i+r)],!1)}function Np(n,e){let r=(e.allFloors?n.floors:n.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(r.length===0)return null;let[o,i]=[r.map(s=>s[0]),r.map(s=>s[1])];return[(Math.min(...o)+Math.max(...o))/2,(Math.min(...i)+Math.max(...i))/2]}function su(n,e){let t=Np(n,e);if(!t)return!1;let[r,o]=t;return ou(n,e,([i,s])=>[wr(r-(s-o)),wr(o+(i-r))],!0),!0}var xr=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,t){this.ids[e]=t,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,t,r){let o=this.ids.room,i={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};i[e]=t,e==="room"?i.room=t:e!=="outdoor"&&e!=="wall"&&(i.room=o),e==="device"&&t&&(i.room=r.roomOfDevice(t)??i.room),e==="opening"&&t&&(i.room=r.roomOfOpening(t)??i.room),(e!=="room"||t!==o)&&(this.cornerSel=null),this.edgeSel=null,this.ids=i,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let t=this.ids[e];if(t)return{kind:e,id:t}}return null}};var kr=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;query="";source="area";unfolded=new Set;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}get deviceQuery(){return this.query}set deviceQuery(e){this.query=e,this.onChange()}get deviceSource(){return this.source}set deviceSource(e){this.source=e,this.query="",this.onChange()}isUnfolded(e){return this.unfolded.has(e)}toggleUnfolded(e){let t=new Set(this.unfolded);t.delete(e)||t.add(e),this.unfolded=t,this.onChange()}};function au(n,e,t){let r=n.floors.length,o=e?.name??(r===0?t.first:t.next(r));return{...is(T("floor"),o,ss(n.floors,e?.level)),ha_floor:e?.floor_id??null}}function lu(n,e){let t=n.findIndex(o=>o.elevation>e.elevation),r=t<0?n.length:t;return[...n.slice(0,r),e,...n.slice(r)]}function cu(n,e,t){let r=n.findIndex(s=>s.id===e),o=r+t;if(r<0||o<0||o>=n.length)return[...n];let i=[...n];return[i[r],i[o]]=[i[o],i[r]],i}function uu(n,e){let t=new Set(n.floors.map(r=>r.ha_floor));return Object.values(e??{}).filter(r=>!t.has(r.floor_id)).sort((r,o)=>(r.level??99)-(o.level??99)||r.name.localeCompare(o.name))}function $r(n,e,t){if(!e.ha_floor)return[];let r=new Set(n.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(t??{}).filter(o=>o.floor_id===e.ha_floor&&!r.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}function du(n,e,t){return Object.values(t??{}).filter(r=>r.floor_id===e.ha_floor||!n.floors.some(o=>o.ha_floor===r.floor_id))}function Kp(n,e,t,r){let o=uu(n.doc,n.hass?.floors),i=()=>o.length>0?e.floorMenu=!e.floorMenu:t.addFloor(null);return m`<div class="nf-floor-list">
      ${[...n.doc.floors].reverse().map(s=>m`<button class="nf-chip" aria-pressed=${s.id===r} @click=${()=>t.openFloor(s.id)}>${s.name}</button>`)}
      ${n.admin?m`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${i}>+ ${n.t("add_floor")}</button>`:g}
    </div>
    ${n.admin&&e.floorMenu?m`<div class="nf-floor-menu">
          ${$(n.t("floor_from_ha"))}
          ${o.map(s=>m`<button class="nf-btn" @click=${()=>t.addFloor(s)}>${s.name}${s.level!=null?m` <span class="nf-sub">· ${n.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>t.addFloor(null)}>${n.t("floor_empty")}</button>
        </div>`:g}`}function Gp(n,e,t,r){let o=(i,s,a)=>m`<input type="number" step="0.05" .value=${String(s)} aria-label=${i} @change=${l=>a(Number(l.target.value)||0)} />`;return m`<div class="nf-field nf-wide nf-shift" title=${n.t("floor_shift_hint")}>
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
  </div>`}function Up(n,e,t,r){let o=n.t,i=c=>n.change((u,d)=>Object.assign(d,c)),s=du(n.doc,r,n.hass?.floors),a=$r(n.doc,r,n.hass?.areas),l=[["",o("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return m`<div class="nf-form">
    ${ee(n,o("floor_name"),r.name,c=>i({name:c}),{wide:!0})}
    ${M(n,o("elevation"),r.elevation,c=>i({elevation:c}))}
    ${n.admin?Gp(n,e,t,r):g}
    ${M(n,o("height"),r.height,c=>i({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(n.hass?.floors??{}).length>0?O(n,o("ha_floor"),r.ha_floor??"",l,c=>i({ha_floor:c||null}),{wide:!0}):g}
    ${n.admin&&a.length>0?m`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${o("area_rooms_hint")} @click=${()=>t.addAreaRooms(r)}>${o("area_rooms",{n:a.length})}</button></div>`:g}
    ${n.admin?m`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>t.moveFloor(1)}>${o("move_up")}</button>
            <button class="nf-btn" @click=${()=>t.moveFloor(-1)}>${o("move_down")}</button>
            <button class="nf-btn nf-danger" @click=${()=>t.deleteFloor()}>${o("delete_floor")}</button>
          </div>
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${o("gaps_hint")} ?disabled=${r.rooms.length<2} @click=${()=>t.closeGaps()}>${o("gaps_close")}</button></div>
          ${e.notice?m`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function hu(n,e,t,r,o){return m`<section>
    <h3>${n.t("floors")}</h3>
    ${Kp(n,e,t,o)} ${r?Up(n,e,t,r):g}
  </section>`}var pu=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function fu(n,e){let t=Z(n.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:e[0]??null}}function Sr(n,e){let[t,r,o]=Oe[e.type];return ds(n,e.rows,e.cols).map(([i,s])=>({id:T("furniture"),type:e.type,x:i,z:s,rotation:0,w:t,d:r,h:o,variant:null,entity:e.entity??"none",power:null}))}var li=n=>Math.max(1,Math.min(12,Math.round(n)));function mu(n,e,t){return e.rooms.length===0?g:m`<section>
    <h3>${n.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(r=>m`<button class="nf-row" @click=${()=>t.select(r.id)}>
          <span>${r.name}</span><span class="nf-muted">${n.t("area_m2",{a:P(n.hass,ce(r.points),1)})}</span>
        </button>`)}
    </div>
  </section>`}function jp(n,e,t,r){let o=e.spots,i=c=>e.spots={...o,...c},s=Sr(t,o).length,a=D(n.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=pu.map(c=>[c,n.t(`furn_${c}`)]);return m`<div class="nf-form nf-spot-form">
    ${O(n,n.t("spots_type"),o.type,l,c=>i({type:c}),{wide:!0})}
    ${M(n,n.t("spots_cols"),o.cols,c=>i({cols:li(c)}),1,1)}
    ${M(n,n.t("spots_rows"),o.rows,c=>i({rows:li(c)}),1,1)}
    ${E(n,n.t("furn_entity_light"),o.entity,void 0,a,c=>i({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>r.placeSpots()}>${n.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${n.t("cancel")}</button>
    </div>
    ${$(n.t("spots_hint"),"nf-wide")}
  </div>`}function Zp(n,e,t,r){return m`<details class="nf-points" ?open=${!t}>
    <summary>${n.t("points")} (${e.points.length})</summary>
    ${e.points.map((o,i)=>m`<div class="nf-point ${i===r.corner?"nf-point-sel":""}">
        <span class="nf-muted">${i+1}</span>
        ${M(n,n.t("x"),o[0],s=>r.setCorner(i,0,s))} ${M(n,n.t("z"),o[1],s=>r.setCorner(i,1,s))}
        ${n.admin?m`<button class="nf-btn" title=${n.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>r.removeCorner(i)}>×</button>`:g}
      </div>`)}
  </details>`}function ci(n,e,t,r){let o=n.t,i=mt(t.points),s=Z(t.points),a=Object.values(n.hass?.areas??{}).sort((d,h)=>d.name.localeCompare(h.name)),l=[["",o("no_area")],...a.map(d=>[d.area_id,d.name])],c=rs.map(d=>[d,o(`mat_${d}`)]),u=d=>m`<button class="nf-btn" @click=${()=>r.applyPackage(d)}><b>${o(`pkg_${d}`)}</b><span>${o(`pkg_${d}_desc`)}</span></button>`;return m`<section>
    <div class="nf-h3row"><h3>${o("room")}</h3>${r.lockButton}</div>
    <div class="nf-form">
      ${ee(n,o("room_name"),t.name,d=>r.patch({name:d}),{wide:!0})}
      ${O(n,o("area"),t.area_id??"",l,d=>r.setArea(d),{wide:!0})}
      ${O(n,o("material"),t.floor_material,c,d=>r.patch({floor_material:d}),{wide:!0})}
      ${i?m`${M(n,o("x"),s.x0,d=>r.setRect("x",d))} ${M(n,o("z"),s.z0,d=>r.setRect("z",d))}
          ${M(n,o("width"),s.x1-s.x0,d=>r.setRect("w",d),.01,.05)}
          ${M(n,o("depth"),s.z1-s.z0,d=>r.setRect("d",d),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${o("room_start_view_hint")} ?disabled=${!n.admin} @click=${()=>r.rememberView()}>${o("room_start_view")}</button>
      ${t.start_view?m`<button class="nf-btn" title=${o("room_start_view_reset")} ?disabled=${!n.admin} @click=${()=>r.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${r.wallHeights} ${r.climate} ${Zp(n,t,i,r)}
    ${n.admin?m`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${o("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>r.openSpots()}>${o("spots_place")}</button>
          <button class="nf-btn" @click=${()=>r.duplicate()}>${o("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>r.remove()}>${o("delete")}</button>
        </div>`:g}
    ${e.spots?jp(n,e,t,r):g}
    ${e.packages?m`<div class="nf-packages">${ta.map(u)}${$(o("pkg_hint"))}</div>`:g}
  </section>`}var gu=$e`
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
`;var _u=["weather","energy","car","sound","screens","cameras"],Mr="https://github.com/therealMRBK/NextFloor";var ui=class extends ae{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return Ae(this.hass,e,t)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${Mr}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${Mr}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${Mr}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="nf-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nf-ext-features">
          ${_u.map(e=>m`<div class="nf-ext-feature nf-ext-on">
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
            <b>${be(t,this.hass?.language??"de")}</b>
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
    </section>`}async importPackFile(e){let t=e.target,r=[...t.files??[]];if(t.value="",!r.length||!this.hass)return;let o=[],i=[];for(let a of r)try{let l=await Pi(this.hass,await a.text());o.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:u}=l??{},d=`pack_error_${c}`,h=this.t(d,{detail:u??String(l)});i.push(`${a.name}: ${h===d?this.t("pack_error_other",{detail:u??String(l)}):h}`)}o.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=r.length>1?[this.t("packs_imported_n",{n:o.length,total:r.length})]:[];this._packMsg={ok:i.length===0,text:[...s,...o,...i].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:be(e,this.hass?.language??"de")}))||(await Oi(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[kt,Yn,$e`
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",ui);var Rr="handled",bu=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Fr=10,ge=n=>Math.round(n*1e3)/1e3,vu={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},di=class extends ae{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_energyNote:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new yr(100);lib=new hr(()=>this.requestUpdate());side=new kr(()=>this.requestUpdate());sel=new xr(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this._energyNote=null,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let r=Number(localStorage.getItem("nextfloor.editorSplit"));r>=20&&r<=80&&(this._splitRatio=r/100)}catch{}this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=t,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,t){return Ae(this.hass,e,t)}measureState(){return{draft:this._draft,length:this._measureLen,rectSize:this._rectSize}}measureActions(){return{setLength:e=>this._measureLen=e,step:e=>this.measureStep(e),close:()=>this.closeDraft(),undo:()=>this._draft=this._draft.slice(0,-1),setRectSize:e=>this._rectSize=e,addRectangle:()=>this.rectBySize()}}freeWallActions(){return{update:e=>this.updateFreeWall(e),remove:()=>this.deleteFreeWall(),lockButton:this.fixButton("wall",this.sel.wall??"")}}outdoorActions(){return{update:e=>this.updateOutdoor(e),setRectangle:(e,t)=>{let r=this.outdoorArea;r&&this.updateOutdoor({points:wl(r,e,t)})},duplicate:()=>this.duplicateOutdoor(),remove:()=>this.deleteOutdoor(),lockButton:this.fixButton("outdoor",this.sel.outdoor??"")}}libraryActions(){return{add:e=>this.addFurniture(e),openExtensions:()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0})),packs:this.packs??[]}}deviceActions(){return{update:e=>this.updateDevice(e),centre:()=>this.centreDevice(),remove:()=>{this.removeDevice(this.sel.device??""),this.sel.device=null},asFurniture:(e,t)=>this.deviceToFurniture(e,t),packs:this.packs??[],lockButton:this.fixButton("device",this.sel.device??"")}}deviceListActions(){return{select:e=>this.selectItem("device",e),place:e=>this.placeDevices(e),remove:e=>this.removeDevice(e),patchRoom:e=>this.updateRoom(e),spreadLights:e=>this.spreadCeilingLights(e),confirm:e=>confirm(e)}}furnitureActions(){return{update:e=>this.updateFurniture(e),rotate:e=>this.rotateFurniture(e),duplicate:()=>this.duplicateFurniture(),remove:()=>this.deleteFurniture(),toDevice:e=>this.furnitureToDevice(e),toSpot:e=>this.vehicleToSpot(e),packs:this.packs??[],lockButton:this.fixButton("furniture",this.sel.furniture??"")}}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,t)=>this.setOpeningPreset(e,t),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new cr({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:Sn,storeImage:Mn},readPicture:tl,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new vr({host:this.host,floorId:()=>e._floorId,setFloorId:t=>e._floorId=t,confirm:t=>confirm(t),refresh:()=>e.requestUpdate()})}canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),toWorld:(e,t)=>this.toWorld(e,t),scale:this._view.scale,floorId:this._floorId}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new ir({get hass(){return e.hass},get doc(){return e._doc},t:(t,r)=>e.t(t,r),adopt:t=>{e.setDoc(t),e._floorId=t.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:t=>e.side.notice=t,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(t,r)=>e.t(t,r),change:t=>e.change(t),replace:t=>e.setDoc(t)}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Bi(this.packs??[]),e.has("hass")&&this.hass&&!ia(this.hass.language)&&sa(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,r=e.currentTarget;r.setPointerCapture(e.pointerId);let o=t.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{r.removeEventListener("pointermove",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};r.addEventListener("pointermove",i),r.addEventListener("pointerup",s),r.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:r,z:o}=e.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(h=>h.id===t);if(!l)continue;let[c,u]=ao(a,l.x,l.z,r,o);Object.assign(l,{x:c,z:u});let d=Zt(a,l,i);d&&Object.assign(l,d)}})}onDeviceMoved3d(e){let{id:t,x:r,z:o}=e.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(u=>u.entity_id===t);if(!a)continue;let[l,c]=ao(s,a.x,a.z,r,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,t=this.device;if(e){let r=zn(e),o=(i,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${i}`)}
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
        <span>${Ue(this.hass,e.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${r?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Fn(this.floor,e))*100)/100)}
                @change=${i=>{let s=parseFloat(i.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let r=L(t.entity_id),o=r==="light",i=r?Gt(r,this.floor?.height??2.5,o?t.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${H(this.hass,t.entity_id)}</span>
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
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,r=W(t),o=null,i=(a,l,c,u,d=!1)=>{if(!c||d)return;let h=Zn(c,e.o,e.d);!h||!So(c,u,h.u,h.s)||o&&o.t<=h.t||(o={id:a,win:l,t:h.t,du:h.u-u.u,ds:h.s-u.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])i(a.id,!1,oe(t,a,r),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])i(a.id,!0,r.find(l=>l.key===a.face)??null,Ke(a),!!a.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let r=t.base,o=t.win?r.settings.roof.windows?.find(p=>p.id===t.id):void 0,i=t.win?o?Ke(o):void 0:r.settings.roof.solar?.find(p=>p.id===t.id);if(!i)return;let s=oe(r,i),a=s?.unbounded?[s]:t.win?W(r):[...W(r),...xe(r)],l=null;for(let p of a){let f=Zn(p,e.o,e.d);f&&$o(p,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:p,...f})}if(!l)return;let c=l.face,u=.05,d=p=>ge(Math.round(p/u)*u),h=Ie(c,{...i,face:c.key,u:d(l.u-t.du),v:d(l.s-t.ds),tilt:c.flat?i.tilt??15:i.tilt});t.moved=!0,this.change(p=>{if(t.win){let _=p.settings.roof.windows?.find(v=>v.id===t.id);_&&Object.assign(_,{face:c.key,...h});return}let f=p.settings.roof.solar?.find(_=>_.id===t.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
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
        .furnishTypes=${this._tool==="energy"?le:this._tool==="roof"?[]:null}
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
    </div>`}updated(){for(let t of this.renderRoot.querySelectorAll("select option[selected]"))t.selected||(t.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())this.bg.ensureLoaded(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&this.history.record(t),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,r=!0){let o=structuredClone(t),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(e(o,i),this.setDoc(o,r?t:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:r,oy:o}=this._view;return[e[0]*t+r,e[1]*t+o]}toWorld(e,t){let{scale:r,ox:o,oy:i}=this._view;return[(e-o)/r,(t-i)/r]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?Z(e):{x0:0,z0:0,x1:10,z1:8},r=1.5,o=t.x1-t.x0+2*r,i=t.z1-t.z0+2*r,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}showPoint(e,t){let r=Math.max(this._view.scale,70);this._view={scale:r,ox:this._size.w/2-e*r,oy:this._size.h/2-t*r}}zoomAt(e,t,r){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*e)),l=a/o;this._view={scale:a,ox:t-(t-i)*l,oy:r-(r-s)*l}}snap(e,t,r=!1){if(this._guides={},r)return e;let o=Xl(e,{rooms:this.floor?.rooms??[],grid:this._doc.settings.grid,reach:Fr/this._view.scale,skip:t});return this._guides=o.guides,o.point}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),r=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(r,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let r=null;t.kind==="vertex"||t.kind==="room"?r=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?r=["device",t.entityId]:t.kind==="opening"?r=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?r=["furniture",t.id]:t.kind==="wallmove"?r=["wall",t.id]:t.kind==="outdoor"&&(r=["outdoor",t.id]),!(!r||!this.isFixedItem(...r))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let t=this.localPoint(e);if(this.pointers.set(e.pointerId,t),this.pointers.size===2){let i=this.drag;i&&bu.has(i.kind)&&"moved"in i&&i.moved&&"base"in i&&this.restoreLive(i.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:t};return}let r={local:t,world:this.toWorld(...t),target:e.target,fine:e.altKey},o=this.pressBackground(r)??this.pressWallTool(r)??this.pressRoofTools(r)??this.pressDrawingTool(r)??this.pressItem(r)??this.pressRoom(r);o!==Rr&&(this.drag=o)}pan(e){return{kind:"pan",last:e.local}}moves(e,t){return this.isAdmin?t:this.pan(e)}pressBackground(e){let{world:t,target:r}=e,o=this.floor?.background;if(this.bg.level&&this.isAdmin&&o)return this.bg.tapLevel(t),Rr;if(this.bg.handlesShown&&o&&r.closest("[data-bg-rotate]")){let s=Ft(o,this.bg.picture(o.image_id)?.aspect??1);return{kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(t[1]-s[1],t[0]-s[0]),rot:o.rotation??0}}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&o)return this.bg.tapRuler(t),Rr;let i=!!r.closest("[data-bg-handle]")||!!r.closest("[data-bg]");if(o&&this.bg.handlesShown&&!this.bg.edit&&i)return this.pictureGesture(e,o);if(this.bg.edit&&this.isAdmin&&o){if(i)return this.pictureGesture(e,o);this.bg.edit=!1}}pictureGesture(e,t){return e.target.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:e.world,bx:t.x,bz:t.z,base:this._doc,moved:!1}}pressWallTool(e){if(this._tool!=="wall")return;let t=this.snap(e.world,void 0,e.fine);return{kind:"freewall",start:t,end:t}}pressRoofTools(e){if(this._tool!=="roof"&&this._tool!=="energy")return;let{local:t,world:r,target:o}=e,i=(v,b)=>o.closest(v)?.getAttribute(b)??null,s=this._tool==="energy",a=s?i("[data-energy-device]","data-energy-device"):null;if(a)return this.pressEnergyDevice(e,a);let l=s?i("[data-solar-turn]","data-solar-turn"):null;if(l&&this.isAdmin)return{kind:"solarturn",id:l,base:this._doc,moved:!1};let c=s?i("[data-solar]","data-solar"):null;if(c)return this.pressSolarField(e,c);let u=this._tool==="roof"?i("[data-roofwin]","data-roofwin"):null;if(u)return this.pressRoofWindow(e,u);this._tool==="roof"&&(this.roof.windowId=null);let d=s?i(".nf-energy-item","data-furniture"):null;if(d)return this.pressEnergyDevice(e,d);if(s)return this.selectItem("furniture",null),this.roof.solarId=null,this.pan(e);let h=i("[data-roof-vertex]","data-roof-vertex"),p=i("[data-roof-corner]","data-roof-corner"),f=i("[data-roof]","data-roof");if(h&&this.isAdmin){let[v,b]=h.split(":");return{kind:"roofvertex",id:v,index:Number(b),base:this._doc,moved:!1}}if(p&&this.isAdmin){let[v,b,x]=p.split(":");return{kind:"roofcorner",id:v,corner:[b==="1"?1:0,x==="1"?1:0],base:this._doc,moved:!1}}if(f){let v=this.roof.isFixed(this._doc.settings.roof.sections?.find(b=>b.id===f));return v&&this.roof.sectionId===f&&(this._fixedHint=!0),this.roof.sectionId=f,this.isAdmin&&!v?{kind:"roofmove",id:f,start:r,startScreen:t,base:this._doc,moved:!1}:this.pan(e)}if(!this.isAdmin)return this.pan(e);this.roof.sectionId=null;let _=this.snap(r,void 0,e.fine);return{kind:"rect",start:_,end:_,roof:!0}}pressEnergyDevice(e,t){return this.roof.solarId=null,this.selectItem("furniture",t),this.moves(e,{kind:"furniture",id:t,start:e.world,startScreen:e.local,base:this._doc,moved:!1})}pressSolarField(e,t){let{local:r,world:o,target:i}=e,s=i.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&t===this.roof.solarId&&s&&this.isAdmin)return this.roof.toggleCell(s),this.pan(e);t!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=t,this.roof.sectionId=null;let a=this._doc.settings.roof.solar?.find(d=>d.id===t),l=a?oe(this._doc,a)??void 0:void 0,c=l?this.faceHit(l,o):null,u=a&&c?{du:c.u-a.u,ds:Number.isNaN(c.s)?0:c.s-a.v}:null;return this.isAdmin&&!a?.locked?{kind:"solarmove",id:t,start:o,startScreen:r,base:this._doc,moved:!1,grab:u}:this.pan(e)}pressRoofWindow(e,t){this.roof.windowId=t,this.roof.sectionId=null;let r=this._doc.settings.roof.windows?.find(a=>a.id===t),o=r?W(this._doc).find(a=>a.key===r.face):void 0,i=o?dn(o,e.world):null,s=r&&i?{du:i.u-r.u,ds:i.s-r.v}:null;return this.isAdmin&&!r?.locked?{kind:"solarmove",id:t,start:e.world,startScreen:e.local,base:this._doc,moved:!1,grab:s,win:!0}:this.pan(e)}pressDrawingTool(e){let t=this._tool;if(t==="rect"||t==="outdoor"||t==="hole"){let r=this.snap(e.world,void 0,e.fine);return{kind:"rect",start:r,end:r,outdoor:t==="outdoor",hole:t==="hole"}}if(t==="polygon"||t==="measure")return{kind:"tap",startScreen:e.local,last:e.local,panning:!1};if(t==="opening")return this.placeOpening(this._openingPreset,e.local)?Rr:this.pan(e)}pressItem(e){let{local:t,world:r,target:o}=e,i=(y,w)=>o.closest(y)?.getAttribute(w)??null,s=this._doc,a=i("[data-device]","data-device");if(a&&this.isAdmin)return{kind:"device",entityId:a,start:r,startScreen:t,base:s,moved:!1};let l=i("[data-opening]","data-opening");if(l)return this.selectItem("opening",l),this.moves(e,{kind:"opening",id:l,startScreen:t,base:s,moved:!1});let c=i("[data-resize]","data-resize");if(c&&this.isAdmin){let[y,w,R]=c.split(":");return{kind:"resize",id:y,corner:[w==="1"?1:-1,R==="1"?1:-1],base:s,moved:!1}}let u=i("[data-rotate]","data-rotate");if(u&&this.isAdmin)return{kind:"rotate",id:u,base:s,moved:!1};let d=i("[data-aim]","data-aim");if(d&&this.isAdmin)return{kind:"aim",entityId:d,base:s,moved:!1};let h=o.closest("[data-vertex], [data-mid]")?null:i("[data-furniture]","data-furniture");if(h)return this.selectItem("furniture",h),this.moves(e,{kind:"furniture",id:h,start:r,startScreen:t,base:s,moved:!1});let p=i("[data-vertex]","data-vertex"),f=i("[data-mid]","data-mid");if(p!==null&&this.room&&this.isAdmin)return this.sel.corner=Number(p),{kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:s,moved:!1};if(f!==null&&this.room&&this.isAdmin)return this.splitEdgeGesture(this.room,Number(f));let _=i("[data-wall-end]","data-wall-end");if(_&&this.isAdmin){let[y,w]=_.split(":");return{kind:"wallmove",id:y,end:w,start:r,startScreen:t,base:s,moved:!1}}let v=i("[data-free-wall]","data-free-wall");if(v)return this.selectItem("wall",v),this.moves(e,{kind:"wallmove",id:v,end:null,start:r,startScreen:t,base:s,moved:!1});let b=i("[data-out-vertex]","data-out-vertex");if(b&&this.isAdmin){let[y,w]=b.split(":");return{kind:"outvertex",id:y,index:Number(w),base:s,moved:!1}}let x=i("[data-outdoor]","data-outdoor");if(x&&!o.closest("[data-room]")&&!this.roomAt(r))return this.selectItem("outdoor",x),this.moves(e,{kind:"outdoor",id:x,start:r,startScreen:t,base:s,moved:!1})}splitEdgeGesture(e,t){let[r,o]=[e.points[t],e.points[(t+1)%e.points.length]],i=me([(r[0]+o[0])/2,(r[1]+o[1])/2],[0,0]),s=this._doc;return this.change((a,l)=>Gl(l,e.id,t,i),s,!1),this.sel.corner=t+1,{kind:"vertex",roomId:e.id,index:t+1,base:s,moved:!0}}pressRoom(e){let t=e.target.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(e.world);return t?(t!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",t),!this.isAdmin||this._tool==="furniture"?this.pan(e):{kind:"room",roomId:t,start:e.world,startScreen:e.local,base:this._doc,moved:!1}):(this.selectItem("room",null),this.pan(e))}onPointerMove(e){let t=this.localPoint(e);if(this.pressStart?At(t,this.pressStart,8)&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0)):this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0),this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){this.pinchMove();return}let r=this.toWorld(...t),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(r,void 0,e.altKey));return}this.moveDrag(o,{local:t,world:r,fine:e.altKey,straight:e.shiftKey})}pinchMove(){let e=this.pinchState();!e||!this.pinch||(this.zoomAt(e.dist/Math.max(1,this.pinch.dist),...e.mid),this._view={...this._view,ox:this._view.ox+e.mid[0]-this.pinch.mid[0],oy:this._view.oy+e.mid[1]-this.pinch.mid[1]},this.pinch=e)}panBy(e,t){this._view={...this._view,ox:this._view.ox+t[0]-e[0],oy:this._view.oy+t[1]-e[1]}}live(e,t){this.change(t,e.base,!1)}floorOf(e){return e.base.floors.find(t=>t.id===this._floorId)}moveDrag(e,t){let{local:r,world:o,fine:i}=t,s=this._doc.settings.grid,a=l=>l.moved||At(r,l.startScreen);switch(e.kind){case"pan":this.panBy(e.last,r),e.last=r;return;case"tap":(e.panning||At(r,e.startScreen,6))&&(e.panning=!0,this.panBy(e.last,r)),e.last=r;return;case"rect":e.end=this.snap(o,void 0,i),this.requestUpdate();return;case"freewall":e.end=Ul(e.start,this.snap(o,void 0,i),t.straight),this.requestUpdate();return;case"wallmove":{if(!a(e))return;e.moved=!0;let l=(this.floorOf(e)?.walls??[]).find(u=>u.id===e.id);if(!l)return;let c;if(e.end){let u=this.snap(o,void 0,i);c=e.end==="a"?{a:u,b:l.b}:{a:l.a,b:u}}else{let u=pr(e.start,o,st(s,i));c={a:me(l.a,u),b:me(l.b,u)}}this.live(e,(u,d)=>Object.assign((d.walls??[]).find(h=>h.id===e.id),c));return}case"vertex":{let l=this.snap(o,{roomId:e.roomId,index:e.index},i);e.moved=!0,this.live(e,(c,u)=>{u.rooms.find(d=>d.id===e.roomId).points[e.index]=l});return}case"room":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.rooms.find(h=>h.id===e.roomId);if(!l||!c)return;let u=this.roomDelta(c,[o[0]-e.start[0],o[1]-e.start[1]],i),d=new Set(l.placements.filter(h=>A([h.x,h.z],c.points)).map(h=>h.entity_id));this.live(e,(h,p)=>{p.rooms.find(f=>f.id===e.roomId).points=c.points.map(f=>me(f,u)),p.placements=l.placements.map(f=>{if(!d.has(f.entity_id))return f;let[_,v]=me([f.x,f.z],u);return{...f,x:_,z:v}})});return}case"opening":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e),c=l?.openings.find(h=>h.id===e.id),u=c&&l?De(c,l.rooms,l.walls??[]):null;if(!c||!u)return;let d=this.dropOffset(u.room,u.edge,o,c.width,i);this.live(e,(h,p)=>{p.openings.find(f=>f.id===e.id).offset=d});return}case"furniture":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.furniture.find(p=>p.id===e.id);if(!l)return;let[c,u]=Go([l.x,l.z],e.start,o,st(s,i)),h=(i?null:this.snapToWall({...l,x:c,z:u}))??{x:c,z:u,rotation:l.rotation};this.live(e,(p,f)=>{Object.assign(f.furniture.find(_=>_.id===e.id),h)});return}case"resize":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=ls(l,e.corner,o,st(s,i));this.live(e,(u,d)=>{Object.assign(d.furniture.find(h=>h.id===e.id),c)});return}case"rotate":{e.moved=!0;let l=this.floorOf(e)?.furniture.find(u=>u.id===e.id);if(!l)return;let c=Uo([l.x,l.z],o,i?1:15);this.live(e,(u,d)=>{d.furniture.find(h=>h.id===e.id).rotation=c});return}case"aim":{e.moved=!0;let l=this.floorOf(e)?.placements.find(u=>u.entity_id===e.entityId);if(!l)return;let c={rotation:Uo([l.x,l.z],o,i?1:5),reach:Zl([l.x,l.z],o)};this.live(e,(u,d)=>{Object.assign(d.placements.find(h=>h.entity_id===e.entityId),c)});return}case"device":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.placements.find(d=>d.entity_id===e.entityId);if(!l)return;let[c,u]=Go([l.x,l.z],e.start,o,st(s,i));this.live(e,(d,h)=>{Object.assign(h.placements.find(p=>p.entity_id===e.entityId),{x:c,z:u})});return}case"outdoor":{if(!a(e))return;e.moved=!0;let l=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!l)return;let c=pr(e.start,o,st(s,i));this.live(e,(u,d)=>{d.outdoor.find(h=>h.id===e.id).points=l.points.map(h=>me(h,c))});return}case"outvertex":{e.moved=!0;let l=this.snap(o,void 0,i),c=this.floorOf(e)?.outdoor.find(u=>u.id===e.id);if(!c)return;this.live(e,(u,d)=>{let h=d.outdoor.find(p=>p.id===e.id);h&&(h.points=ql(c.points,e.index,l))});return}case"bgmove":e.moved=!0,this.live(e,(l,c)=>{c.background&&([c.background.x,c.background.z]=me([e.bx,e.bz],[o[0]-e.start[0],o[1]-e.start[1]]))});return;case"bgrotate":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Ft(l,c.aspect),d=el(e.rot,e.start,Math.atan2(o[1]-u[1],o[0]-u[0]),t.straight);this.live(e,(h,p)=>{p.background&&(p.background.rotation=d)});return}case"bgscale":{e.moved=!0;let l=this.floor?.background,c=l?this.bg.picture(l.image_id):void 0;if(!l||!c)return;let u=Math.max(.5,ge(Ja(l,c.aspect,o)[0]));this.live(e,(d,h)=>{h.background&&(h.background.width=u)});return}default:this.moveRoofDrag(e,t)}}moveRoofDrag(e,t){let{local:r,world:o,fine:i}=t,s=this._doc.settings.grid;switch(e.kind){case"roofmove":{if(!e.moved&&!At(r,e.startScreen))return;e.moved=!0;let a=pr(e.start,o,st(s,i)),l=e.base.settings.roof.sections?.find(c=>c.id===e.id);if(!l)return;this.live(e,c=>{let u=c.settings.roof.sections?.find(_=>_.id===e.id);if(!u)return;let[d,h]=me([l.x0,l.z0],a),[p,f]=me([l.x1,l.z1],a);Object.assign(u,{x0:d,x1:p,z0:h,z1:f}),l.points&&(u.points=l.points.map(_=>me(_,a)))});return}case"roofvertex":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);!c?.points||e.index>=c.points.length||(c.points[e.index]=me(a,[0,0]),Object.assign(c,Xt(c.points)))});return}case"roofcorner":{e.moved=!0;let a=this.snap(o,void 0,i);this.live(e,l=>{let c=l.settings.roof.sections?.find(u=>u.id===e.id);c&&(c[e.corner[0]?"x1":"x0"]=ge(a[0]),c[e.corner[1]?"z1":"z0"]=ge(a[1]))});return}case"solarturn":{e.moved=!0;let a=e.base.settings.roof.solar?.find(u=>u.id===e.id),l=a?oe(e.base,a):null;if(!a||!l)return;let c=cn(e.base,a,jl(on(l,a),o,i?1:15));this.live(e,u=>{let d=u.settings.roof.solar?.find(h=>h.id===e.id);d&&Object.assign(d,c)});return}case"solarmove":this.moveSolar(e,t);return;default:return}}moveSolar(e,t){let{local:r,world:o,fine:i}=t;if(!e.moved&&!At(r,e.startScreen))return;e.moved=!0;let s=e.win?e.base.settings.roof.windows?.find(b=>b.id===e.id):void 0,a=e.win?s?Ke(s):void 0:e.base.settings.roof.solar?.find(b=>b.id===e.id),l=e.win?W(e.base):[...W(e.base),...this._floorId?xe(e.base,this._floorId):[]],c=a?oe(e.base,a,l):null;if(!a||!c)return;let u=i?.01:.05,d=b=>ge(Math.round(b/u)*u),h=c.unbounded?null:ko(l,o),p=c,f,_;if(h&&e.grab)p=h.face,f=d(h.u-e.grab.du),_=Number.isNaN(h.s)?h.face.key===a.face?a.v:Math.max(0,h.face.ls-1.5):d(h.s-e.grab.ds);else{let[b,x]=[o[0]-e.start[0],o[1]-e.start[1]],y=[c.es[0],c.es[2]];f=d(a.u+b*c.eu[0]+x*c.eu[2]),_=d(a.v+(b*y[0]+x*y[1])/(y[0]*y[0]+y[1]*y[1]||1))}let v=Ie(p,{...a,face:p.key,u:f,v:_,tilt:p.flat?a.tilt??15:a.tilt});this.live(e,b=>{if(e.win){let y=b.settings.roof.windows?.find(w=>w.id===e.id);y&&Object.assign(y,{face:p.key,...v});return}let x=b.settings.roof.solar?.find(y=>y.id===e.id);x&&Object.assign(x,{face:p.key,...v},p.flat&&x.tilt==null?{tilt:15}:{})})}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&bu.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let r=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[o,i]=t.start,[s,a]=t.end;if(Math.abs(s-o)>=.2&&Math.abs(a-i)>=.2){let l=[Math.min(o,s),Math.min(i,a)],c=[Math.max(o,s),Math.max(i,a)],u=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(u):t.hole?this.addHole(l,c):t.roof?this.roof.addSection(l,c):this.addRoom(u)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...r),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...r),void 0,e.altKey),r);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,r]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,r)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,r]=e;return{dist:Math.hypot(t[0]-r[0],t[1]-r[1]),mid:[(t[0]+r[0])/2,(t[1]+r[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,r){if(r)return t;let o=this._doc.settings.grid,i=[Math.round(t[0]/o)*o,Math.round(t[1]/o)*o],a=Fr/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let u of e.points){let d=Math.hypot(u[0]+t[0]-c[0],u[1]+t[1]-c[1]);d<a&&(a=d,i=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return i}roomAt(e){return(this.floor?.rooms??[]).filter(o=>A(e,o.points)).sort((o,i)=>ce(o.points)-ce(i.points))[0]?.id??null}addDraftPoint(e,t){let r=this._draft;if(r.length>=3){let[i,s]=this.toScreen(r[0]);if(Math.hypot(i-t[0],s-t[1])<14){this.closeDraft();return}}let o=r[r.length-1];o&&Math.hypot(o[0]-e[0],o[1]-e[1])<1e-6||(this._draft=[...r,e])}closeDraft(){this._draft.length>=3&&ce(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let r=ht(t,this._measureLen,e),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(r[0]-o[0],r[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,r]}rectBySize(){let e=this._draft[0]??[0,0],[t,r]=this._rectSize;t>.1&&r>.1&&(this.addRoom([e,ht(e,t,"right"),ht(ht(e,t,"right"),r,"down"),ht(e,r,"down")]),this._draft=[])}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let t=this.sel.wall;t&&this.change((r,o)=>Object.assign((o.walls??[]).find(i=>i.id===t),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,r)=>{r.walls=(r.walls??[]).filter(o=>o.id!==e),r.openings=r.openings.filter(o=>o.wall!==e)}),this.sel.wall=null)}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let t=this.sel.outdoor;this.change((r,o)=>Object.assign(o.outdoor.find(i=>i.id===t),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,r)=>r.outdoor=r.outdoor.filter(o=>o.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let r=e.ctrlKey||e.metaKey;if(r&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(r&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(r&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!r&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!r&&(this.sel.furniture||this.sel.device)){let o=this.sel.target;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(vu,e.key)&&!r&&(this._tool==="select"||this._tool==="furniture")){let o=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[i,s]=vu[e.key];this.nudgeSelection(i*o,s*o)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!r&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(r=>r.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this.sel.room=null}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:dn(e,t)}planLayers(e,t){let r=this.canvasContext(),o=this.room,i=!!o&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",o.id),s=this.drag?.kind==="freewall"||this.drag?.kind==="rect"?this.drag:null;return k`${ja(r,this.bg,e)} ${sc(r,this._size)} ${ac(r)} ${t?lc(r,t):g}
      ${e?k`${cc(r,e,this.sel.outdoor)} ${dc(r,e,this.sel.room,this.sel.edge)} ${rc(r,e,this.sel.furniture)}
        ${pc(r,e,this.sel.wall)} ${t?ic(r,e,t,this.sel.opening):g} ${hc(r,e)}
        ${this._tool==="select"?oc(r,e,this.sel.device):g}
        ${i?mc(r,o,this.sel.corner):g}
        ${uc(r,this.outdoorArea,this._tool)}
        ${o&&this._tool==="select"?fc(r,o):g}
        ${Ua(r,e)}`:g}
      ${this._tool==="roof"?k`${Oo(r,this.roof)}${Ka(r,this.roof)}`:this._tool==="energy"?k`${Oo(r,this.roof)}${Na(r,this.roof)}${Ga(r,this.floor,this.sel.furniture)}`:g}
      ${Jl(r,s,this._tool,this._draft,this._cursor)} ${Ql(r,this._guides,this._size)}`}wallsOfFloor(){let e=this.floor,{wall_exterior:t,wall_interior:r}=this._doc.settings;return e?Re(e.rooms,{exterior:t,interior:r},e.walls??[]).walls:[]}edgeParts(e,t){let r=this.wallsOfFloor().flatMap(o=>o.sources.filter(i=>i.room_id===e.id&&i.edge===t).map(i=>i.t0));return r.length>0?[...new Set(r)].sort((o,i)=>o-i):[0]}changeRoom(e,t){this.isAdmin&&this.change((r,o)=>{let i=o.rooms.find(s=>s.id===e.id);i&&t(i)})}edgeActions(){return{partsOf:(e,t)=>this.edgeParts(e,t),isOuter:(e,t)=>this.wallsOfFloor().some(r=>r.exterior&&r.sources.some(o=>o.room_id===e.id&&o.edge===t)),setHeight:(e,t,r,o)=>{if(r!==void 0){let s=this.edgeParts(e,t).length;this.changeRoom(e,a=>bc(a,t,r,o,s));return}let i=this.wallsOfFloor().filter(s=>s.sources.some(a=>a.room_id===e.id&&a.edge===t)).flatMap(s=>s.sources);i.some(s=>s.room_id===e.id&&s.edge===t)||i.push({room_id:e.id,edge:t,t0:0,t1:0}),this.isAdmin&&this.change((s,a)=>{for(let l of i){let c=a.rooms.find(u=>u.id===l.room_id);c&&_c(c,l.edge,o)}})},setThickness:(e,t,r)=>this.changeRoom(e,o=>xc(o,t,r)),cut:(e,t,r)=>{let o=this.edgeParts(e,t);this.changeRoom(e,i=>vc(i,t,r,o))},moveCut:(e,t,r,o)=>{let i=this.edgeParts(e,t);this.changeRoom(e,s=>yc(s,t,r,o,i))},join:(e,t,r,o)=>this.changeRoom(e,i=>wc(i,t,r,o)),lit:this.sel.edge,light:e=>this.sel.edge=e}}addFloor(e=null){let t=au(this._doc,e,{first:this.t("default_floor"),next:o=>this.t("new_floor",{n:o})}),r=structuredClone(this._doc);r.floors=lu(r.floors,t),this.setDoc(r),this._floorId=t.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let t=$r(this._doc,e,this.hass?.areas);if(t.length===0)return;let r=as(e,t,()=>T("room"));this.change((o,i)=>i.rooms.push(...r)),this.fit()}moveFloor(e){let t=this._floorId;if(!t)return;let r=cu(this._doc.floors,t,e);if(r.every((i,s)=>i.id===this._doc.floors[s].id))return;let o=structuredClone(this._doc);o.floors=r.map(i=>o.floors.find(s=>s.id===i.id)),this.setDoc(o)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:t=>this.selectItem("room",t),patch:t=>this.updateRoom(t),setArea:t=>this.setArea(t),setRect:(t,r)=>this.setRect(t,r),setCorner:(t,r,o)=>this.setPoint(t,r,o),removeCorner:t=>this.deleteVertex(t),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:t=>this.applyPackage(e,t),openSpots:()=>{let t=this.hass?ue(this.hass,e.area_id).filter(r=>r.startsWith("light.")):[];this.side.spots=fu(e,t)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:$c(this.host,e,this.edgeActions()),climate:Fl(this.host,e,t=>this.updateRoom(t)),corner:this.sel.corner}}applyPackage(e,t){if(!this.isAdmin)return;let r=na(e,t,()=>T("furniture"));this.change((o,i)=>i.furniture.push(...r)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:r.length})}placeSpots(e){let t=this.side.spots;if(!t||!this.isAdmin)return;let r=Sr(e,t);this.change((o,i)=>i.furniture.push(...r)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:r.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,t){if(!this.floor)return;let r=ol(e,t);this.change((o,i)=>i.walls=[...i.walls??[],r]),this.selectItem("wall",r.id)}addHole(e,t){if(!this.floor)return;let r=al(e,t);this.change((o,i)=>i.furniture.push(r)),this.selectItem("furniture",r.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t=ll(e);this.change((r,o)=>o.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t=cl(e);this.change((r,o)=>o.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=Il(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((r,o)=>o.rooms.push(t)),this.sel.room=t.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,r)=>Cl(r,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=Ll(e);this.change((r,o)=>o.rooms.push(t)),this.sel.room=t.id}deleteVertex(e){let t=this.room;t&&(this.change((r,o)=>Vl(o,t.id,e)),this.sel.corner=null)}nudgeSelection(e,t){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=this.sel.target;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=o?o.kind==="room"?{kind:"room",id:o.id,corner:this.sel.corner}:{kind:o.kind,id:o.id}:null,s=i?nu(r,i,e,t):It;return s===It?!1:(s!==si&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let r=this.room,o=ul(e,this._doc,t,r?ie(r.points):this.viewCentre());this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}rotateFurniture(e){let t=this.furnitureItem;t&&this.isAdmin&&this.updateFurniture({rotation:hl(t.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t=dl(e);this.change((r,o)=>o.furniture.push(t)),this.selectItem("furniture",t.id)}vehicleToSpot(e){if(!this.isAdmin)return;let t=pl(e);this.change((r,o)=>{o.furniture=o.furniture.filter(i=>i.id!==e.id),o.furniture.push(t)}),this.selectItem("furniture",t.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let r=fl(e,t);this.change((o,i)=>{i.placements=i.placements.filter(s=>s.entity_id!==e.entity_id),i.furniture.push(r)}),this.sel.device=null,this.selectItem("furniture",r.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let r=ml(e,t);this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==e.id),i.placements.some(s=>s.entity_id===t)||i.placements.push(r)}),this.sel.furniture=null,this.selectItem("device",t)}placeDevices(e){let t=this.room;!t||e.length===0||!this.isAdmin||this.change((r,o)=>_l(r,o,t,e))}removeDevice(e){this.change(t=>gl(t,e))}centreDevice(){let e=this.device,t=e?this.floor?.rooms.find(i=>i.id===this.roomAt([e.x,e.z])):void 0;if(!e||!t)return;let[r,o]=bl(t);this.updateDevice({x:r,z:o})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let r=Kl(e,t.placements);r.length!==0&&this.change((o,i)=>{for(let s of r)Object.assign(i.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,t){!this.isAdmin||!e&&!t||(this.change(r=>iu(r,this.shiftScope(),e,t)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>su(e,this.shiftScope()))}setArea(e){let t=this.room;t&&this.updateRoom(Nl(t,e,this.hass?.areas??{}))}setRect(e,t){let r=this.room,o=r?Bl(r,e,t):null;o&&this.updateRoom({points:o})}setPoint(e,t,r){let o=this.room,i=o?Wl(o,e,t,r):null;i&&this.updateRoom({points:i})}setOpeningPreset(e,t){this._openingPreset=t,this.updateOpening(yl(e,t))}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,t)=>this.openEnergyDevice(e,t),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,t){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",t.id),this.showPoint(t.x,t.z)}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;let r=i=>i.area_id&&this.hass?.areas?.[i.area_id]?.name||"",o=tu(e,this._doc,t,{roomLabel:i=>`${i.name} ${r(i)} ${i.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((i,s)=>s.furniture.push(o)),this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}async importEnergy(){if(!this.hass)return;let e=await Jc({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:t=>this.addEnergyDevice(t),setField:(t,r,o)=>this.change(i=>{let s=i.floors.flatMap(a=>a.furniture).find(a=>a.id===t);s&&(s[r]=o)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(o=>o.id===this.roof.solarId):void 0;if(e)return Yc(this.roofDeps(),e);let t=this.sel.furniture?this.floor?.furniture.find(o=>o.id===this.sel.furniture&&le.includes(o.type)):void 0;if(t)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${gn(this.host,t,this.furnitureActions())}`;let r=this.energyActions();return m`${Ia(this.host,r)}${qc(this.roofDeps())}${La(this.host,r)}${Ca(this.host,r)}${Va(this.host)}`}fixItem(e,t,r){if(e)switch(t){case"room":return e.rooms.find(o=>o.id===r);case"opening":return e.openings.find(o=>o.id===r);case"furniture":return e.furniture.find(o=>o.id===r);case"device":return e.placements.find(o=>o.entity_id===r);case"wall":return(e.walls??[]).find(o=>o.id===r);case"outdoor":return e.outdoor.find(o=>o.id===r)}}isFixedItem(e,t){return En(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let r=!this.isFixedItem(e,t);this.change((o,i)=>{let s=this.fixItem(i,e,t);s&&(s.locked=r)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let r=this.toWorld(...t),o=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),a=o("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),u=o("data-outdoor"),d=o("data-room")??this.roomAt(r);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:u&&!d?i=["outdoor",u]:d&&(i=["room",d]),!i){this._ctx=null;return}let[h,p]=i;this.selectItem(h,p),(h==="opening"||h==="furniture")&&(this.sel.room=this.sel.room??d),this._ctx={x:t[0],y:t[1],kind:h,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let t=this.isFixedItem(e.kind,e.id),r=this.renderRoot.querySelector(".nf-canvas-wrap"),o=Math.max(4,Math.min(e.x,(r?.clientWidth??800)-190)),i=Math.max(4,Math.min(e.y,(r?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
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
    </button>`}dropOffset(e,t,r,o,i){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((r[0]-s[0])*(a[0]-s[0])+(r[1]-s[1])*(a[1]-s[1]))/l;return vl(l,c,o,i?.01:this._doc.settings.grid)}selectItem(e,t){this.side.notice=null,t&&(this._sideOpen=!0),this.sel.select(e,t,{roomOfDevice:r=>{let o=this.floor?.placements.find(i=>i.entity_id===r);return(o&&this.roomAt([o.x,o.z]))??null},roomOfOpening:r=>this.floor?.openings.find(o=>o.id===r)?.room_id??null})}get opening(){return this.sel.opening?this.floor?.openings.find(e=>e.id===this.sel.opening):void 0}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,t){let r=this.floor;if(!r||!this.isAdmin)return!1;let o=null;for(let _ of r.walls??[]){let v=De({room_id:"",edge:0,wall:_.id},r.rooms,r.walls??[]);if(!v)continue;let[b,x]=this.toScreen(_.a),[y,w]=this.toScreen(_.b),R=(y-b)**2+(w-x)**2||1,S=Math.min(1,Math.max(0,((t[0]-b)*(y-b)+(t[1]-x)*(w-x))/R)),F=Math.hypot(t[0]-b-(y-b)*S,t[1]-x-(w-x)*S),z=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],V=r.rooms.find(N=>N.points.length>=3&&A(z,N.points));F<Fr*2.2&&(!o||F-1<o.d)&&(o={room:v.room,edge:0,d:F-1,wall:_.id,roomId:V?.id??_.id})}for(let _ of r.rooms)for(let v=0;v<_.points.length;v++){let[b,x]=this.toScreen(_.points[v]),[y,w]=this.toScreen(_.points[(v+1)%_.points.length]),R=(y-b)**2+(w-x)**2||1,S=Math.min(1,Math.max(0,((t[0]-b)*(y-b)+(t[1]-x)*(w-x))/R)),F=Math.hypot(t[0]-b-(y-b)*S,t[1]-x-(w-x)*S),z=F-(_.id===this.sel.room?.5:0);F<Fr*2.2&&(!o||z<o.d)&&(o={room:_,edge:v,d:z})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],u=Math.hypot(c[0]-l[0],c[1]-l[1]),d=ft[e],h=d.type,p=ge(Math.min(d.width,Math.max(.3,u-.1))),f={id:T("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(i,s,this.toWorld(...t),p,!1),width:p,type:h,sill:d.sill,height:d.height,hinge:"left",leaves:d.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((_,v)=>v.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let t=this.sel.opening;this.change((r,o)=>Object.assign(o.openings.find(i=>i.id===t),e))}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,r)=>r.openings=r.openings.filter(o=>o.id!==e)),this.sel.opening=null)}snapToWall(e){return this.floor?Zt(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this.sel.furniture;this.change((r,o)=>Object.assign(o.furniture.find(i=>i.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,r)=>r.furniture=r.furniture.filter(o=>o.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let t=this.sel.device;this.change((r,o)=>Object.assign(o.placements.find(i=>i.entity_id===t),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:r}=As(e.rooms);if(!r.length){this.side.notice=this.t("gaps_none");return}let o=zs(r);this.change((i,s)=>{s.rooms=t,o&&(i.settings.wall_interior=o)}),this.side.notice=o?this.t("gaps_closed_wall",{n:r.length,t:P(this.hass,o,2)}):this.t("gaps_closed",{n:r.length})}updateFloor(e){this.change((t,r)=>Object.assign(r,e))}updateRoom(e){let t=this.sel.room;this.change((r,o)=>Object.assign(o.rooms.find(i=>i.id===t),e))}render(){let e=this.floor,t=e?Re(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${Hl(this.host,this.lib.preview)}
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
    </div>`}renderSide(e){let t=this.room,r=this.isAdmin;if(this._tool==="roof")return Vc(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&r)return m`${this.furnitureItem?gn(this.host,this.furnitureItem,this.furnitureActions()):g} ${Dl(this.host,this.lib,this.room?.name,this.libraryActions())}`;let o=this._tool==="measure"?null:this.furnitureItem?gn(this.host,this.furnitureItem,this.furnitureActions()):this.opening?ti(this.host,this.opening,this.openingActions()):this.device?Yo(this.host,this.device,this.deviceActions()):this.outdoorArea?Lo(this.host,this.outdoorArea,this.outdoorActions()):this.freeWall?Co(this.host,this.freeWall,this.freeWallActions()):null;return o?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(t?"back_to_room":"back_to_floor",{room:t?.name??""})}</button>
        ${o}`:t&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${ci(this.host,this.side,t,this.roomActions(t))} ${Wo(this.host,this.side,t,this.deviceListActions())}`:m`
      ${r?g:m`<p class="nf-note">${this.t("read_only")}</p>`}
      ${hu(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?xl(this.host,this.measureState(),this.measureActions()):this.freeWall?Co(this.host,this.freeWall,this.freeWallActions()):this.outdoorArea?Lo(this.host,this.outdoorArea,this.outdoorActions()):this.opening?ti(this.host,this.opening,this.openingActions()):this.furnitureItem?gn(this.host,this.furnitureItem,this.furnitureActions()):this.device?Yo(this.host,this.device,this.deviceActions()):t?m`${ci(this.host,this.side,t,this.roomActions(t))} ${Wo(this.host,this.side,t,this.deviceListActions())}`:e?mu(this.host,e,{select:i=>this.selectItem("room",i)}):g}
      ${r?_a(this.host,()=>this.paneView()):g} ${r?ga(this.host):g}
      ${Ba(this.host)}
      ${r&&!1?ba(this.host):g}
      ${e&&r?rl(this.host,this.bg,e):g} ${r?Ea(this.host,this.settingsActions):g}
      ${r?Sa(this.host,this.backup):g}
    `}openingIsExterior(e){let t=this.floor,r=t?De(e,t.rooms,t.walls??[]):null;if(!t||!r)return!1;let o=Re(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return Vn(o.walls,e,r)?.wall.exterior??!1}paneView(){let t=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!t)return null;let r=t.target;return{theta:ge(t.theta),phi:ge(t.phi),radius:ge(t.radius),...r?{target:{x:ge(r.x),y:ge(r.y),z:ge(r.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let r of t.furniture)for(let o of r.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!e.includes(o.image)&&e.push(o.image);return e}static styles=[kt,Yn,gu]};customElements.get("nf-editor")||customElements.define("nf-editor",di);export{di as NfEditor};
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
