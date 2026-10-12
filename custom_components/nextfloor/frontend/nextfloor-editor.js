/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var Xt=globalThis,Jt=Xt.ShadowRoot&&(Xt.ShadyCSS===void 0||Xt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jn=Symbol(),hr=new WeakMap,wt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==jn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Jt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=hr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&hr.set(t,e))}return e}toString(){return this.cssText}},ur=r=>new wt(typeof r=="string"?r:r+"",void 0,jn),ge=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new wt(t,r,jn)},fr=(r,e)=>{if(Jt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Xt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},Zn=Jt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ur(t)})(r):r;var{is:oa,defineProperty:sa,getOwnPropertyDescriptor:aa,getOwnPropertyNames:la,getOwnPropertySymbols:ca,getPrototypeOf:da}=Object,en=globalThis,pr=en.trustedTypes,ha=pr?pr.emptyScript:"",ua=en.reactiveElementPolyfillSupport,kt=(r,e)=>r,qn={toAttribute(r,e){switch(e){case Boolean:r=r?ha:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},gr=(r,e)=>!oa(r,e),mr={attribute:!0,type:String,converter:qn,reflect:!1,useDefault:!1,hasChanged:gr};Symbol.metadata??=Symbol("metadata"),en.litPropertyMetadata??=new WeakMap;var Se=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=mr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&sa(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=aa(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mr}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;let e=da(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){let t=this.properties,n=[...la(t),...ca(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(Zn(i))}else e!==void 0&&t.push(Zn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:qn).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:qn;this._$Em=i;let a=s.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??gr)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[kt("elementProperties")]=new Map,Se[kt("finalized")]=new Map,ua?.({ReactiveElement:Se}),(en.reactiveElementVersions??=[]).push("2.1.2");var ni=globalThis,_r=r=>r,tn=ni.trustedTypes,br=tn?tn.createPolicy("lit-html",{createHTML:r=>r}):void 0,$r="$lit$",Te=`lit$${Math.random().toFixed(9).slice(2)}$`,Sr="?"+Te,fa=`<${Sr}>`,Ce=document,$t=()=>Ce.createComment(""),St=r=>r===null||typeof r!="object"&&typeof r!="function",ii=Array.isArray,pa=r=>ii(r)||typeof r?.[Symbol.iterator]=="function",Yn=`[ 	
\f\r]`,xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vr=/-->/g,yr=/>/g,Be=RegExp(`>|${Yn}(?:([^\\s"'>=/]+)(${Yn}*=${Yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wr=/'/g,kr=/"/g,Mr=/^(?:script|style|textarea|title)$/i,ri=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=ri(1),E=ri(2),gc=ri(3),Me=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),xr=new WeakMap,Ne=Ce.createTreeWalker(Ce,129);function Er(r,e){if(!ii(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return br!==void 0?br.createHTML(e):e}var ma=(r,e)=>{let t=r.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=xt;for(let a=0;a<t;a++){let l=r[a],c,d,h=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===xt?d[1]==="!--"?s=vr:d[1]!==void 0?s=yr:d[2]!==void 0?(Mr.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Be):d[3]!==void 0&&(s=Be):s===Be?d[0]===">"?(s=i??xt,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Be:d[3]==='"'?kr:wr):s===kr||s===wr?s=Be:s===vr||s===yr?s=xt:(s=Be,i=void 0);let p=s===Be&&r[a+1].startsWith("/>")?" ":"";o+=s===xt?l+fa:h>=0?(n.push(c),l.slice(0,h)+$r+l.slice(h)+Te+p):l+Te+(h===-2?a:p)}return[Er(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Mt=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,d]=ma(e,t);if(this.el=r.createElement(c,n),Ne.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Ne.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith($r)){let u=d[s++],p=i.getAttribute(h).split(Te),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?Xn:g[1]==="?"?Jn:g[1]==="@"?ei:et}),i.removeAttribute(h)}else h.startsWith(Te)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Mr.test(i.tagName)){let h=i.textContent.split(Te),u=h.length-1;if(u>0){i.textContent=tn?tn.emptyScript:"";for(let p=0;p<u;p++)i.append(h[p],$t()),Ne.nextNode(),l.push({type:2,index:++o});i.append(h[u],$t())}}}else if(i.nodeType===8)if(i.data===Sr)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(Te,h+1))!==-1;)l.push({type:7,index:o}),h+=Te.length-1}o++}}static createElement(e,t){let n=Ce.createElement("template");return n.innerHTML=e,n}};function Je(r,e,t=r,n){if(e===Me)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=St(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Je(r,i._$AS(r,e.values),i,n)),e}var Qn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Ce).importNode(t,!0);Ne.currentNode=i;let o=Ne.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Et(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new ti(o,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=Ne.nextNode(),s++)}return Ne.currentNode=Ce,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Et=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),St(e)?e===_||e==null||e===""?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Me&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pa(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&St(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Mt.createElement(Er(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new Qn(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=xr.get(e.strings);return t===void 0&&xr.set(e.strings,t=new Mt(e)),t}k(e){ii(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new r(this.O($t()),this.O($t()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=_r(e).nextSibling;_r(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},et=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=Je(this,e,t,0),s=!St(e)||e!==this._$AH&&e!==Me,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Je(this,a[n+l],t,l),c===Me&&(c=this._$AH[l]),s||=!St(c)||c!==this._$AH[l],c===_?e=_:e!==_&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Xn=class extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Jn=class extends et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},ei=class extends et{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=Je(this,e,t,0)??_)===Me)return;let n=this._$AH,i=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==_&&(n===_||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ti=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}};var ga=ni.litHtmlPolyfillSupport;ga?.(Mt,Et),(ni.litHtmlVersions??=[]).push("3.3.3");var Ar=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new Et(e.insertBefore($t(),o),o,void 0,t??{})}return i._$AI(r),i};var oi=globalThis,J=class extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ar(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Me}};J._$litElement$=!0,J.finalized=!0,oi.litElementHydrateSupport?.({LitElement:J});var _a=oi.litElementPolyfillSupport;_a?.({LitElement:J});(oi.litElementVersions??=[]).push("4.2.2");var Ee=(r,e,t={})=>r.callWS({type:`nextfloor/${e}`,...t});async function nn(r,e){return(await Ee(r,"image/get",{image_id:e})).data}async function rn(r,e,t){await Ee(r,"image/set",{image_id:e,data:t})}async function zr(r){return(await Ee(r,"history/list")).snapshots}async function Rr(r){await Ee(r,"history/snapshot")}async function Fr(r,e){return(await Ee(r,"history/restore",{snapshot_id:e})).revision}var Ir=(r,e)=>Ee(r,"packs/import",{pack:e});async function Pr(r,e){await Ee(r,"packs/remove",{pack_id:e})}var Tr=r=>Ee(r,"backup/export"),Or=(r,e,t)=>Ee(r,"backup/import",{building:e,packs:t});var si=r=>r.slice(0,r.indexOf(".")),ba={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},W=r=>ba[si(r)]??null,Hr=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Dr=new Set(["light","switch","fan"]),At=r=>r!==null&&r!=="scene"&&r!=="script",tt=r=>!r||r.state==="unavailable"||r.state==="unknown";function L(r,e,t){let n=r?.states[e]?.attributes.friendly_name??r?.entities?.[e]?.name??e;if(!t||n.length<=t.length+1||!n.toLowerCase().startsWith(`${t.toLowerCase()} `))return n;let i=n.slice(t.length+1);return i[0].toUpperCase()+i.slice(1)}var Lr=r=>!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum";function on(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t==="floor")return 1.95;if(r==="light"&&t==="table")return 1.25;if(r==="light"&&t==="wall")return 1.95;switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var va=[],sn=new Map,ya=0,Ke=(r,e)=>`pack:${r}:${e}`,nt=r=>r.startsWith("pack:");function Vr(r){va=r,sn=new Map;for(let e of r)for(let t of e.items)sn.set(Ke(e.id,t.id),t);ya+=1}var wa={};function j(r){if(!nt(r))return;let e=sn.get(r);if(e)return e;let[,t,...n]=r.split(":"),i=wa[t];return i?sn.get(Ke(i,n.join(":"))):void 0}var Br=r=>j(r)?.parts.find(e=>e.screen),Wr=.06;function Nr(r){let e=j(r);if(!e)return!1;let[t,n,i]=e.size;return e.parts.filter(o=>o.screen).some(o=>{let[s,a]=[o.w*t,o.d*n,o.h*i].sort((l,c)=>c-l);return a>=Wr&&s>=Wr})}function Ge(r){return He[r]??j(r)?.size??[.6,.6,.8]}function zt(r){let e=j(r);return Ur.has(r)||!!e?.electric||!!e?.light}function Oe(r,e){return r.name[e.split("-")[0]]??r.name.en??Object.values(r.name)[0]??r.id}var ka={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace",fitness:"Fitness",fahrzeuge:"Vehicles"};function Ae(r,e){if(e.split("-")[0]==="de")return r.name;let t=/^nextfloor\.(.+)$/.exec(r.id)?.[1];return t&&ka[t]||r.name}function ai(r,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Cr;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));let t=j(e.type);if(!t)return Kr(e);switch(t.mount){case"surface":return Gr(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return 0}}var jr=["always","no_power","never"],Zr=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],qr=["navigate","more_info","service","fire_dom_event"];function li(r,e,t){return r?e?!!t.lock_plan:!!r.locked:!1}var Yr=["rain","snow","fog","clouds","lightning","sky"],Qr=["rain","snow","clouds","lightning","sky"],Xr=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],ci={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function di(r){return r==="hedge"||r==="fence"||r==="pergola"}var Jr=["x","-x","z","-z"];function xa(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of r.points){let h=o(c,d);s=Math.min(s,h),a=Math.max(a,h)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function $a(r,e,t,n){return eo(r)+(e.offset??0)+ci[e.type]-xa(e,t,n)}function eo(r){return r.elevation>.3?0:-.2}function to(r,e,t){let n=(r.outdoor??[]).filter(o=>!di(o.type)&&o.type!=="pool"&&I([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?$a(r,i,e,t):eo(r)}var Sa={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},no=["wood","oak","tiles","carpet","stone","concrete"],io={type:"none",pitch:35,overhang:.4},Ma={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...io}};function ro(r,e,t){return{id:r,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Ea=2.75;function oo(r,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Ea*100)/100;let t=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function so(r,e,t){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let c=o+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function ao(r,e,t,n){let i=r.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[a,l]=e,c=r.x-a*(r.w/2)*o+l*(r.d/2)*s,d=r.z-a*(r.w/2)*s-l*(r.d/2)*o,h=t[0]-c,u=t[1]-d,p=v=>Math.max(.1,Math.round(v/n)*n),g=p((h*o+u*s)*a),f=p((-h*s+u*o)*l),b=v=>Math.round(v*1e3)/1e3;return{x:b(c+a*(g/2)*o-l*(f/2)*s),z:b(d+a*(g/2)*s+l*(f/2)*o),w:b(g),d:b(f)}}var hi=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],ui={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},ze=["meter","inverter","home_battery","wallbox","grid_point"],lo=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Cr=1.75;function fi(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:j(r.type)?.mount!=="ceiling"}function ee(r){return lo.has(r)||!!j(r)?.light}var Aa=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function pi(r,e,t,n=0){let i=te(r.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((i.x0+n+o/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(l+.5))*1e3)/1e3];I(d,r.points)&&a.push(d)}return a}function it(r,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(r[0]+i*e),n(r[1]+o*e)]}function Kr(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Gr(r,e,t){let n=0;for(let i of r.furniture)!(Aa.has(i.type)||j(i.type)?.surface)||!I([e,t],vi(i))||(n=Math.max(n,i.h));return n}var Ur=new Set([...lo,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),He={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var mi=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],gi=["standard","bars","glass_wall"];function an(r,e){return r.type==="door"?r.style&&mi.includes(r.style)?r.style:e?"front":"interior":r.style&&gi.includes(r.style)?r.style:"standard"}function co(r,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",o=r-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),a=(o-s)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=o-.5;if(l+c>d){let u=Math.max(0,d)/(l+c);l*=u,c*=u}return i?{panels:[[.02,.02+l],[r-.02-c,r-.02]],x0:.02+l,x1:r-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:r-.02}:{panels:[[r-.02-l,r-.02]],x0:.02,x1:r-.02-l}}function _i(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var ln={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function bi(r){if(r.type==="garage")return"garage";if(r.type==="window"&&r.style==="glass_wall")return"glass_wall";let e=r.leaves===2;return r.type==="door"?!e&&r.style&&_i(r.style)?"front":e?"door_double":"door":r.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function cn(r){r.energy={...Sa,...r.energy??{}},r.presence=r.presence??[],r.settings={...Ma,...r.settings,roof:{...io,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,a,l]=He[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function T(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function Y(r){let e=0;for(let t=0;t<r.length;t++){let[n,i]=r[t],[o,s]=r[(t+1)%r.length];e+=n*s-o*i}return e/2}function _e(r){return Math.abs(Y(r))}function ae(r){let e=Y(r);if(Math.abs(e)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function dn(r){if(r.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=r[e],[i,o]=r[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function te(r){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[o,s]of r)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function vi(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function I(r,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[a,l]=e[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(t=!t)}return t}var ho={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var za=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ra=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Fa=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Ia=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function rt(r,e){let t=r.entities?.[e];return t&&(t.area_id||(t.device_id?r.devices?.[t.device_id]?.area_id:null))||null}var po=(r,e)=>{let t=r.entities?.[e];return!!(t?.hidden||t?.entity_category)};function uo(r,e){let t=W(e),n=r.states[e];if(!t||!n||po(r,e))return!1;let i=n.attributes.device_class;return t==="sensor"?i?za.has(i):Ra.has(String(n.attributes.unit_of_measurement??"")):t==="binary"?i?Fa.has(i):!!r.entities?.[e]?.area_id:!0}function Pa(r,e){let t=r.states[e];return W(e)!=="sensor"||!t?.attributes.unit_of_measurement||po(r,e)||Ia.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||tt(t)}var hn=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power",fo=null;function yi(r,e){let t=r.get(e);return t||r.set(e,t=[]),t}function Ta(r){let e=new Map,t=new Map,n=new Map,i=new Map,o=[],s=c=>{(uo(r,c)||Pa(r,c))&&At(W(c))&&o.push(c)};for(let[c,d]of Object.entries(r.entities??{})){let h=d.device_id;h&&d.area_id&&(i.get(h)??i.set(h,new Set).get(h)).add(d.area_id),h&&hn(r,c)&&yi(t,h).push(c),h&&!d.hidden&&!d.entity_category&&(n.get(h)??n.set(h,new Set).get(h)).add(si(c));let u=rt(r,c);u===null?s(c):uo(r,c)&&yi(e,u).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||s(c);let a=c=>Hr.indexOf(W(c));o.sort((c,d)=>a(c)-a(d)||L(r,c).localeCompare(L(r,d)));for(let[c,d]of e){let h=r.areas?.[c]?.name;d.sort((u,p)=>a(u)-a(p)||L(r,u,h).localeCompare(L(r,p,h)))}let l=new Set;for(let[c,d]of i)d.size>1&&l.add(c);return{entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,byArea:e,powerByDevice:t,withoutArea:o,domainsByDevice:n,hubs:l}}function ot(r){let e=fo;return e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount))?e:fo=Ta(r)}function be(r,e){return!e||!r.entities?[]:ot(r).byArea.get(e)??[]}function mo(r,e){if(!r.entities)return[];let t=[];for(let[n,i]of ot(r).byArea){let o=i.filter(s=>At(W(s)));n!==e&&o.length>0&&t.push({areaId:n,name:r.areas?.[n]?.name??n,ids:o})}return t.sort((n,i)=>n.name.localeCompare(i.name))}var go=r=>r.entities?ot(r).withoutArea:[],_o=(r,e)=>!!r.entities&&ot(r).hubs.has(e),wi=(r,e)=>r.entities?ot(r).powerByDevice.get(e)??[]:[];function ki(r,e){let t=new Map;for(let i of e)yi(t,r.entities?.[i]?.device_id??`entity:${i}`).push(i);let n=new Map(e.map((i,o)=>[i,o]));return[...t.values()].map(i=>{let o=i.find(s=>!r.entities?.[s]?.name)??i[0];return{primary:o,others:i.filter(s=>s!==o)}}).sort((i,o)=>n.get(i.primary)-n.get(o.primary))}var xi=(r,e)=>ki(r,e).map(t=>t.primary),$i={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Oa=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Ha=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Da=new RegExp(`(${Ha.join("|")})`,"i");function Si(r,e){let t=r.entities?.[e]?.device_id,n=t&&!_o(r,t)?ot(r).domainsByDevice.get(t):void 0;return n&&[...n].some(i=>Oa.has(i))?!1:!Da.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function bo(r,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=o.filter(c=>I([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(o.filter(c=>!I([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...be(r,t.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&r.states[c]?.attributes.device_class===$i[n]&&Si(r,c))}var La=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Wa=new Set(["garage","gate"]),Va=new Set(["window","opening"]);function Rt(r,e,t=!1){let n=new Map;return r.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}var vo=(r,e)=>r==="none"?null:r??e??null,un=r=>r&&r!=="none"?r:null;function Mi(r,e){let t=new Map;for(let n of e)for(let i of n.rooms){let o=n.openings.filter(f=>f.room_id===i.id).sort((f,b)=>f.edge-b.edge||f.offset-b.offset);if(o.length===0)continue;let s=be(r,i.area_id),a=f=>r.states[f]?.attributes.device_class,l=f=>s.filter(b=>W(b)==="binary"&&f(a(b)??"")),c=f=>o.filter(b=>b.type===f),d=Rt(c("window"),s.filter(f=>W(f)==="cover"&&La.has(a(f))),!0),h=Rt(c("window"),l(f=>Va.has(f))),u=Rt(c("door"),l(f=>f==="door")),p=Rt(c("garage"),s.filter(f=>W(f)==="cover"&&Wa.has(a(f)??""))),g=Rt(c("garage"),l(f=>f==="garage_door"));for(let f of o){let b=f.type==="window"?d:f.type==="garage"?p:null,v=f.type==="window"?h:f.type==="garage"?g:u,w=f.leaves===2;t.set(f.id,{cover:vo(f.cover,b?.get(f.id)),contact:f.sensor==="handle"&&f.contact==null?null:vo(f.contact,v.get(f.id)),tilt:f.tilt==="none"?null:f.tilt,contact2:w?un(f.contact2):null,tilt2:w?un(f.tilt2):null,position:un(f.position),positionInverted:!!f.position_inverted,tiltAngle:un(f.tilt_angle),tiltMax:f.tilt_max??null,tiltOffset:f.tilt_offset??null,tiltInvert:!!f.tilt_invert,shut:!!f.shut})}}return t}var Ba=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ei(r){if(!r||tt(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:"",r.state]){let n=t.trim(),i=n&&Ba.find(([o])=>o.test(n));if(i)return i[1]}return null}var yo=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,wo=/(kühl|fridge|gefrier|freezer)/i,ko=/(spülmaschine|geschirrspül|dishwasher)/i,Na=/(kochfeld|herd|induktion|cooktop)/i,Ca={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:yo,tv_wall:yo,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:wo,fridge_smart:wo,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:ko,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Na,sink:ko,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},xo={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},$o=new Set(["tv_board","tv_wall"]);var fn=r=>$o.has(r)||!!Br(r),zi=r=>fn(r)||r==="desk"||r==="fridge_smart",Ka=r=>!!r&&r!=="none";function Ga(r,e){if(hn(r,e))return e;let t=r.entities?.[e]?.device_id;return t?wi(r,t).find(n=>n!==e)??null:null}var Ua=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&I([e,t],n.points));function Ai(r,e,t,n){return r.find(i=>e?.test(t(i)))??(n?r[0]??null:null)}function st(r,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(Ka));for(let o of n.furniture){let s=o.type in xo,a=s?xo[o.type]:Ca[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=Ua(n,o.x,o.z),c=(l?xi(r,be(r,l.area_id)):[]).filter(g=>!i.has(g)),d=g=>`${g} ${L(r,g)}`,h=g=>c.filter(f=>W(f)===g),u=o.entity==="none"?null:o.entity??null;if(o.entity==null){if(s)u=Ai(h("light"),a,d,!0);else if(o.type==="robot_vacuum"){let g=l?.area_id??null;u=Object.keys(r.entities??{}).find(f=>f.startsWith("vacuum.")&&!i.has(f)&&rt(r,f)===g)??null}else if(o.type==="radiator")u=Ai(h("climate"),a,d,!0);else if(fn(o.type)){let g=h("media");u=g.find(f=>r.states[f]?.attributes.device_class==="tv")??Ai(g,a,d,$o.has(o.type))}else a&&(u=c.find(g=>["switch","media","fan"].includes(W(g)??"")&&a.test(d(g)))??null);u&&i.add(u)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=u?Ga(r,u):null,!p&&a&&l&&!s&&(p=be(r,l.area_id).find(g=>hn(r,g)&&!i.has(g)&&a.test(d(g)))??null),p&&i.add(p)),(u||p)&&t.set(o.id,{entity:u,power:p})}}return t}function ja(r,e){return Math.min(...e.map((t,n)=>{let i=e[(n+1)%e.length],[o,s]=[i[0]-t[0],i[1]-t[1]],a=Math.min(1,Math.max(0,((r[0]-t[0])*o+(r[1]-t[1])*s)/(o*o+s*s||1)));return Math.hypot(r[0]-t[0]-o*a,r[1]-t[1]-s*a)}))}function Mo(r,e,t=[]){let n=r.points;if(n.length<3||e.length===0)return[];let i=n.map(v=>v[0]),o=n.map(v=>v[1]),[s,a,l,c]=[Math.min(...i),Math.max(...i),Math.min(...o),Math.max(...o)],d=Math.min(a-s,c-l),h=Math.max(.1,Math.min(.25,d/8)),u=Math.min(.35,d/5),p=Math.min(.7,d/4),g=ae(n),f=[];for(let v=s+h/2;v<a;v+=h)for(let w=l+h/2;w<c;w+=h){let y=[v,w];if(!I(y,n))continue;let x=ja(y,n);x>=u&&f.push({at:y,wallDistance:x})}f.length===0&&f.push({at:g,wallDistance:0});let b=[...t];return e.map(v=>{let w=W(v)==="light",y=f[0].at,x=-1/0;for(let{at:S,wallDistance:M}of f){let A=b.length?Math.min(...b.map(z=>Math.hypot(S[0]-z[0],S[1]-z[1]))):3,R=Math.hypot(S[0]-g[0],S[1]-g[1]),F=Math.min(A,3)*2;R<p&&!w&&(F-=10),F-=w?R*.35:M*1.2,F>x+1e-9&&(x=F,y=S)}let k=[Math.round(y[0]*100)/100,Math.round(y[1]*100)/100];return b.push(k),{entity_id:v,x:k[0],z:k[1],y:null,mount:null}})}var So=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Eo(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;return!n||!r.entities?null:Object.values(r.entities).find(o=>o.device_id===n&&o.entity_id.startsWith("sensor.")&&(So.test(o.translation_key??"")||So.test(o.entity_id.split(".")[1])))?.entity_id??null}var N=(r,e,t,n,i="")=>E`<rect class=${i} x=${Math.min(r,t)} y=${Math.min(e,n)} width=${Math.abs(t-r)} height=${Math.abs(n-e)} />`,B=(r,e,t,n,i="")=>E`<line class=${i} x1=${r} y1=${e} x2=${t} y2=${n} />`,Za=(r,e="")=>E`<polygon class=${e} points=${r.map(t=>t.join(",")).join(" ")} />`,K=(r,e,t,n="")=>E`<circle class=${n} cx=${r} cy=${e} r=${t} />`,Ri=(r,e,t,n,i="")=>E`<ellipse class=${i} cx=${r} cy=${e} rx=${t} ry=${n} />`;function Fi(r,e,t){let n=[];for(let i=1;i<t;i++){let o=-r/2+r/t*i;n.push(B(o,e/2,o,e/2-Math.min(.12,e*.3)))}return n}function Ao(r,e,t,n){let i=Math.min(.24,e*.28),o=n?Math.min(.2,r*.12):0,s=[N(-r/2,-e/2,r/2,-e/2+i,"nf-sym-fill")];n&&s.push(N(-r/2,-e/2,-r/2+o,e/2,"nf-sym-fill"),N(r/2-o,-e/2,r/2,e/2,"nf-sym-fill"));let a=r-2*o;for(let l=1;l<t;l++){let c=-r/2+o+a/t*l;s.push(B(c,-e/2+i,c,e/2-.02))}return s}function zo(r,e,t){switch(r){case"sofa":return Ao(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return Ao(e,t,1,!0);case"bench":return[N(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[N(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill"),N(-e/2,-t/2,-e/2+.08,t/2,"nf-sym-fill"),B(-e/2+n,-t/2+n,e/2,-t/2+n),B(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[N(-e/2,-t/2,e/2,-t/2+.06,"nf-sym-fill")];case"office_chair":return[K(0,.03,Math.min(e,t)*.36),N(-e*.35,-t/2+.02,e*.35,-t/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[K(0,0,Math.min(e,t)*.42)];case"stool":return[N(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[N(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return r==="desk"&&n.push(B(-.3,-t/2+.1,.3,-t/2+.1,"nf-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,o=[N(-e/2,-t/2,e/2,-t/2+.07,"nf-sym-fill"),B(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)o.push(N(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Fi(e,t,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[N(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),...Fi(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[B(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[B(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"nf-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[K(-e*.22,-t*.2,n),K(e*.22,-t*.2,n*.8),K(-e*.22,t*.2,n*.8),K(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[N(-n/2,-t/2+.1,n/2,t/2-.08),K(0,-t/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[B(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[K(0,.05,Math.min(e,t)*.3),B(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[N(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),K(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[B(-e/2,-t/2,e/2,t/2),B(e/2,-t/2,-e/2,t/2),K(0,0,.04)];case"wc":return[N(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"nf-sym-fill"),Ri(0,t*.1,e*.36,t*.3)];case"washbasin":return[Ri(0,.03,e*.34,t*.3)];case"tv_board":return[B(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"nf-sym-strong"),...Fi(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[B(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[K(0,0,Math.min(e,t)*.45,"nf-sym-fill"),K(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[K(0,0,Math.min(e,t)*.5,"nf-sym-fill"),K(0,0,Math.min(e,t)*1.6)];case"parking":return[N(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),B(-e*.15,t/2-.5,0,t/2-.22,"nf-sym-strong"),B(0,t/2-.22,e*.15,t/2-.5,"nf-sym-strong")];case"robot_vacuum":return[N(-e*.45,-t/2,e*.45,-t/2+t*.3,"nf-sym-fill"),K(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let o=1;o<i;o++)n.push(B(-e/2+e/i*o,-t/2,-e/2+e/i*o,t/2));return n}case"lamp_panel":return[N(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[K(0,0,n*.9,"nf-sym-fill"),K(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(B(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[N(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),Ri(0,.01,e*.4,t*.4)];case"led_strip":return[B(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[K(0,0,Math.min(e,t)*.46),K(0,0,Math.min(e,t)*.25)];case"rug":return[N(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let o=1;o<n;o++)i.push(B(-e/2,t/2-t/n*o,e/2,t/2-t/n*o));return i.push(B(0,t/2-.1,0,-t/2+.25,"nf-sym-strong"),B(-.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong"),B(.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong")),i}default:{let n=j(r);return n?qa(n,e,t):_}}}function qa(r,e,t){return r.symbol?.length?r.symbol.map(n=>n.shape==="rect"?N((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"nf-sym-fill":""):n.shape==="circle"?K(n.x*e,n.z*t,n.r*Math.min(e,t)):B(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):r.parts.filter(n=>n.shape==="sweep"||n.w<.98||n.d<.98).map(n=>n.shape==="sweep"&&n.stations?.length?Za([...n.stations.map(i=>[(n.x+i[3]/2)*e,i[0]*t]),...[...n.stations].reverse().map(i=>[(n.x-i[3]/2)*e,i[0]*t])]):n.shape==="cyl"&&(n.axis??"y")==="y"?K(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):N((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var O=(r,e)=>[r[0]-e[0],r[1]-e[1]],ve=(r,e)=>[r[0]+e[0],r[1]+e[1]],le=(r,e)=>[r[0]*e,r[1]*e],G=(r,e)=>r[0]*e[0]+r[1]*e[1],ce=(r,e)=>r[0]*e[1]-r[1]*e[0],X=r=>Math.hypot(r[0],r[1]),de=r=>{let e=X(r)||1;return[r[0]/e,r[1]/e]},Ii=r=>[-r[1],r[0]],Pi=r=>[r[1],-r[0]];var Ya=.05,Qa=.2,Xa=.12;function Ja(r){let e=[];return r.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let o=Y(i)>=0;i.forEach((s,a)=>{let l=i[(a+1)%i.length],c=X(O(l,s));if(c<.05)return;let d=[(l[0]-s[0])/c,(l[1]-s[1])/c],h=o?[d[1],-d[0]]:[-d[1],d[0]];(d[1]<-1e-9||Math.abs(d[1])<=1e-9&&d[0]<0)&&(d=[-d[0],-d[1]]);let u=[-d[1],d[0]],[p,g]=[G(s,d),G(l,d)];e.push({room:n,index:a,dir:d,normal:u,offset:G(s,u),outside:G(h,u)>0?1:-1,from:Math.min(p,g),to:Math.max(p,g)})})}),e}function el(r,e,t){if(r.room===e.room||Math.abs(ce(r.dir,e.dir))>Ya||r.outside===e.outside)return null;let n=(e.offset-r.offset)*r.outside;return n>t||n<-Xa||Math.abs(n)<1e-4||Math.min(r.to,e.to)-Math.max(r.from,e.from)<Qa?null:n}var Ti=r=>Math.round(r*1e3)/1e3;function Ro(r,e=.6){let t=Ja(r),n=t.map((h,u)=>u),i=h=>n[h]===h?h:n[h]=i(n[h]),o=[],s=new Set;for(let h=0;h<t.length;h++)for(let u=h+1;u<t.length;u++){let p=el(t[h],t[u],e);p!==null&&(o.push(Ti(p)),n[i(h)]=i(u),s.add(h).add(u))}let a=()=>r.map(h=>({...h,points:h.points.map(u=>[u[0],u[1]])}));if(o.length===0)return{rooms:a(),gaps:o};let l=new Map;for(let h of s)l.set(i(h),[...l.get(i(h))??[],h]);let c=r.map(h=>h.points.map(()=>new Map));for(let[h,u]of l){let p=u.reduce((g,f)=>g+t[f].offset,0)/u.length;for(let g of u){let f=t[g],b=[f.normal[0]*(p-f.offset),f.normal[1]*(p-f.offset)];c[f.room][f.index].set(h,b),c[f.room][(f.index+1)%r[f.room].points.length].set(h,b)}}return{rooms:r.map((h,u)=>({...h,points:h.points.map((p,g)=>{let f=[...c[u][g].values()].reduce((b,v)=>[b[0]+v[0],b[1]+v[1]],[p[0],p[1]]);return[Ti(f[0]),Ti(f[1])]})})),gaps:o}}function Fo(r){let e=r.filter(t=>t>.04).sort((t,n)=>t-n);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var tl=.25,Io=r=>Math.round(r*1e3)/1e3,Po=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&I([e,t],n.points));function Hi(r,e,t,n,i){let o=Po(r,e,t);if(!o)return[n,i];let s=(a,l)=>I([a,l],o.points);return s(n,i)?[n,i]:s(n,t)?[n,t]:s(e,i)?[e,i]:[e,t]}function nl(r,e,t,n){return r.rooms.some(i=>i.id!==e.id&&i.points.some((o,s)=>{let a=i.points[(s+1)%i.points.length];return Math.abs(G(O(o,t),n))<.02&&Math.abs(G(O(a,t),n))<.02}))}var Oi=(r,e)=>Math.abs((r-e+540)%360-180);function Ft(r,e,t,n=tl){let i=Po(r,e.x,e.z);if(!i)return null;let o=i.points,s=Y(o)>=0?1:-1,a=null;return o.forEach((l,c)=>{let d=o[(c+1)%o.length],h=X(O(d,l));if(h<.3)return;let u=[(d[0]-l[0])/h,(d[1]-l[1])/h],p=[-u[1]*s,u[0]*s],g=G(O([e.x,e.z],l),u);if(g<0||g>h)return;let f=nl(r,i,l,p)?t/2:0,b=G(O([e.x,e.z],l),p)-f,v=Math.atan2(-p[0],p[1])*180/Math.PI,y=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((k,S)=>Oi(e.rotation,S.rotation)<Oi(e.rotation,k.rotation)?S:k);if(Oi(e.rotation,y.rotation)>50)return;let x=b-y.extent;Math.abs(x)>n||a&&Math.abs(x)>=Math.abs(a.gap)||(a={x:Io(e.x-p[0]*x),z:Io(e.z-p[1]*x),rotation:(Math.round(y.rotation)%360+360)%360,gap:x})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var il=r=>r.map((e,t)=>[e,r[(t+1)%r.length]]);function rl(r,e,t){let n=O(t,e),i=G(n,n),o=i?Math.max(0,Math.min(1,G(O(r,e),n)/i)):0;return X(O(r,[e[0]+n[0]*o,e[1]+n[1]*o]))}function To(r,e,t=.03){return r.every(n=>I(n,e)||il(e).some(([i,o])=>rl(n,i,o)<=t))}var Oo={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"{n} Erkennungs-Sensoren am Ger\xE4t dieser Kamera: {kinds}. Solange einer etwas meldet, markiert ein Pin es in 3D vor der Kamera.",camera_detect_none:"Am Ger\xE4t dieser Kamera gibt es noch keine Erkennungs-Sensoren. Pins erscheinen, sobald die Integration welche liefert (z. B. Frigate, UniFi Protect, Reolink).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern.",card_motion_trail_hint:"Ein Pfad der Bewegungen der letzten halben Stunde durchs Haus, mit Uhrzeiten",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Alle Kameras nebeneinander. Antippen vergr\xF6\xDFert eine; ein roter Rand hei\xDFt Bewegung.",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Eigene M\xF6bel-Packs sind JSON-Dateien (Format in docs/packs.md). Die mitgelieferten Packs sind immer da.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",feature_text_cameras:"Eine Kamera antippen: die Ansicht fliegt an ihren Platz und schaut in ihre Richtung, dann blendet das Live-Bild ein \u2013 mit dem, was sie gerade erkennt (Person, Fahrzeug, Tier). Die Kamerawand zeigt alle Kameras nebeneinander, die Bewegungsspur zeichnet die letzte halbe Stunde als leuchtenden Pfad durchs Haus, mit Zeiten an jedem Raum.",feature_name_energy:"Energiefluss",feature_name_cameras:"Kameras",feature_name_weather:"Wetter am Haus",feature_name_screens:"TV-Bildschirme",feature_name_sound:"Klang",feature_name_car:"Auto",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Was in NextFloor steckt: die gro\xDFen Funktionen und die M\xF6bel-Packs. Alles ist frei und Open Source \u2013 eigene M\xF6bel-Packs kannst du hier importieren.",ext_pro:"Funktionen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Live-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die Live-Erweiterungen (Wetter, Energie, Auto, Klang, Bildschirme, Kameras) findest du oben unter \u201EErweiterungen\u201C.",feature_text_weather:"Regen, Schnee, Hagel und Schneeregen fallen schr\xE4g mit dem echten Wind, Wolken ziehen mit ihren Schatten \xFCbers Grundst\xFCck, Blitze schlagen neben dem Haus ein, dazu Nebel, Sonne und Mond in ihrer echten Richtung.",feature_text_screens:"Ein Fernseher oder Monitor, der l\xE4uft, zeigt im 3D-Modell, was l\xE4uft: Cover, Titel, Interpret oder Serie und die App \u2013 auf einem Verlauf in der App-Farbe. Dahinter leuchtet ein Ambilight an der Wand, das beim Abspielen sanft atmet.",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",feature_text_sound:"\xDCber jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover, Titel und Interpret \u2013 antippen f\xFCr Zur\xFCck, Abspielen/Pause, Weiter und Lautst\xE4rke. Schallringe in der Farbe der App (Spotify gr\xFCn, Netflix rot \u2026) breiten sich aus, lauter hei\xDFt weiter, und Lautsprecher einer Multiroom-Gruppe sind mit einem Faden verbunden.",feature_text_car:"Eine Glaskarte \xFCber dem Stellplatz zeigt Ladestand mit Farbring, Reichweite, Laden mit Leistung, Stecker und Innentemperatur \u2013 mit Kn\xF6pfen f\xFCr Schloss, Klima und Laden. L\xE4dt das Auto, fliegen Energieteilchen von der Wallbox hinein; ist es weg, steht da, wo es gerade ist. Die Entit\xE4ten findet NextFloor selbst am Ger\xE4t des Autos.",pack_remove:"Entfernen",pack_builtin:"mitgeliefert",live_autarky:"autark",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_now:"jetzt",live_minutes_ago:"vor {n} min",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Ho={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"{n} detection sensors on this camera's device: {kinds}. While one reports something, a pin marks it in front of the camera in 3D.",camera_detect_none:"This camera's device has no detection sensors yet. Pins show up as soon as the integration offers some (e.g. Frigate, UniFi Protect, Reolink).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture.",card_motion_trail_hint:"A path of the last half hour's motion through the house, with times",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"All cameras side by side. Tap one to enlarge it; a red outline means motion.",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Your own furniture packs are JSON files (format in docs/packs.md). The packs that come with NextFloor are always there.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",feature_text_cameras:"Tap a camera: the view flies to where it hangs and looks its way, then the live picture fades in \u2013 with what it detects right now (person, vehicle, animal). The camera wall shows every camera side by side, the motion trail draws the last half hour as a glowing path through the house, with times at every room.",feature_name_energy:"Energy flow",feature_name_cameras:"Cameras",feature_name_weather:"Weather at the house",feature_name_screens:"TV screens",feature_name_sound:"Sound",feature_name_car:"Car",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"What NextFloor brings: its larger features and the furniture packs. Everything is free and open source \u2013 import your own furniture packs here.",ext_pro:"Features",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and live features",ext_teaser_text:'Furniture packs and the live add-ons (weather, energy, car, sound, screens, cameras) are under "Extensions" at the top.',feature_text_weather:"Rain, snow, hail and sleet fall at an angle with the real wind, clouds drift over the plot with their shadows, lightning strikes beside the house, plus fog, sun and moon in their real direction.",feature_text_screens:"A TV or monitor that plays shows in 3D what plays: cover, title, artist or series and the app \u2013 on a gradient in the app's colour. Behind it an ambilight glows on the wall, breathing gently while it plays.",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",feature_text_sound:"A card floats over every speaker or TV that plays, with cover, title and artist \u2013 tap it for previous, play/pause, next and volume. Sound rings in the colour of the app (Spotify green, Netflix red \u2026) spread out, louder reaches further, and speakers of a multiroom group are joined by a thread.",feature_text_car:"A glass card over the parking spot shows the charge with a colour ring, range, charging with its power, plug and inside temperature \u2013 with buttons for lock, climate and charging. While the car charges, energy particles fly into it from the wallbox; when it is away, the card says where it is. NextFloor finds the entities on the car's device by itself.",pack_remove:"Remove",pack_builtin:"built in",live_autarky:"self-sufficient",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_now:"now",live_minutes_ago:"{n} min ago",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},ol=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],It=new Map,Di=new Map;function Li(r){let e=(r??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return ol.includes(t)?t:null}function Do(r){let e=Li(r);return!e||It.has(e)}function Lo(r){let e=Li(r);if(!e||It.has(e))return Promise.resolve();let t=Di.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=be5ce4442bac`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{It.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{It.set(e,{})}).finally(()=>Di.delete(e)),Di.set(e,t)}return t}function ye(r,e,t={}){let n=r?.language??navigator.language,i=n.startsWith("de")?null:Li(n),s=(n.startsWith("de")?Oo:i&&It.get(i)||Ho)[e]??Ho[e]??Oo[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function H(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var sl={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",camera:"M3.5 7.5h11.5v9H3.5zM15 10.5l5.5-3v9l-5.5-3",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Pt=r=>sl[r];var al=[["person",/person|people|human|pedestrian/],["car",/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/],["pet",/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/]];function Wo(r,e){let t=String(r.states[e]?.attributes.friendly_name??""),n=`${e} ${t}`.toLowerCase().replace(/[_.-]/g," ");return al.find(([,i])=>i.test(n))?.[0]??"motion"}function Vo(r,e){let t=r.entities??{},n=t[e]?.device_id;if(!n)return[];let i=new Set(["motion","occupancy","presence"]);return Object.values(t).filter(o=>o.device_id===n&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>i.has(String(r.states[o]?.attributes.device_class)))}var Ot=Math.PI/180,De=r=>Math.tan(Math.min(80,Math.max(0,r))*Ot);function pn(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function Z(r){let{x0:e,x1:t,z0:n,z1:i}=pn(r);return r.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,s)=>[o,r.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(o,s)=>[r.flip?t-s:e+s,o]}}function mn(r,e,t){let{x0:n,x1:i,z0:o,z1:s}=pn(r);return r.axis==="x"?[e,r.flip?s-t:t-o]:[t,r.flip?i-e:e-n]}var Tt=Math.tan(30*Ot);function Wi(r,e,t,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=e+o*n,l=t+s*i,c=Math.min(r-s,Math.max(o,(l-a+Tt*(r-s+o))/(2*Tt))),d=a+(c-o)*Tt;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:u=>u<=o?e+u*n:u<=c?a+(u-o)*Tt:u<=r-s?l+(r-s-u)*Tt:t+(r-u)*i}}function ne(r){let e=Z(r).w,[t,n]=[r.eave_a,r.eave_b],[i,o]=[De(r.pitch_a),De(r.pitch_b)];switch(r.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*i,y:s=>t+s*i};case"mansard":{let s=Wi(e,t,n,i,o);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2;return{vr:s,rh:t+s*i,y:a=>a<=s?t+a*i:n+(e-a)*o}}}}var at=r=>ne(r).rh;function Bo(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function ll(r,e){let t=r.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function cl(r,e,t){if(r.a===e.b)return!1;let n=de(O(t[r.b],t[r.a])),i=de(O(t[e.b],t[e.a]));return Math.abs(ce(n,i))>1e-6||G(n,i)<=0||r.free||e.free?!1:r.height===e.height&&r.exterior===e.exterior&&r.roomLeft===e.roomLeft&&r.roomRight===e.roomRight&&Math.abs(r.left-e.left)<=1e-9&&Math.abs(r.right-e.right)<=1e-9}function No(r,e,t=new Set){let n=r.slice();for(;;){let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b])i.set(l,[...i.get(l)??[],a])});let o=null;for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]].b===s?n[a[0]]:Bo(n[a[0]]),c=n[a[1]].a===s?n[a[1]]:Bo(n[a[1]]);if(!cl(l,c,e))continue;let d={...l,b:c.b,sources:ll(l.sources,c.sources)};o=[...n.filter((h,u)=>u!==a[0]&&u!==a[1]),d];break}if(!o)return n;n=o}}function Co(r,e){let t=new Map;r.forEach((i,o)=>{let s=de(O(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:le(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((l,c)=>l.angle-c.angle);for(let l of o)n.set(l.key,{left:ve(s,le(Ii(l.d),l.left)),right:ve(s,le(Pi(l.d),l.right))});if(o.length<2)continue;let a=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;o.forEach((l,c)=>{let d=o[(c+1)%o.length],h=ve(s,le(Ii(l.d),l.left)),u=ve(s,le(Pi(d.d),d.right)),p=ce(l.d,d.d);if(Math.abs(p)<1e-4)return;let g=ve(h,le(l.d,ce(O(u,h),d.d)/p));X(O(g,s))>a||(n.get(l.key).left=g,n.get(d.key).right=g)})}return n}function Ko(r,e){let t=r.filter((n,i)=>X(O(n,r[(i+1)%r.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((i,o)=>{let s=t[(o+t.length-1)%t.length],a=t[(o+1)%t.length],[l,c]=[O(i,s),O(a,i)];return Math.abs(ce(de(l),de(c)))<1e-7&&G(l,c)>0});if(n===-1)return t;t=t.filter((i,o)=>o!==n)}}function dl(r){let e=[];return{points:e,idOf(t){let n=e.findIndex(i=>Math.abs(i[0]-t[0])<=r&&Math.abs(i[1]-t[1])<=r);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function hl(r,e){let t=[];for(let n of r){let i=n.points;if(i.length<3||Math.abs(Y(i))<1e-6)continue;let o=Y(i)>0,s=i.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(o?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function ul(r,e,t){let n=[];for(let i of r){let[o,s]=[e[i.u],e[i.v]],a=O(s,o),l=X(a),c=le(a,1/l),d=e.map((u,p)=>({id:p,rel:O(u,o)})).filter(({id:u,rel:p})=>u!==i.u&&u!==i.v&&G(p,c)>t&&G(p,c)<l-t&&Math.abs(ce(c,p))<=t).map(({id:u,rel:p})=>({t:G(p,c),id:u})).sort((u,p)=>u.t-p.t),h=[{t:0,id:i.u},...d,{t:l,id:i.v}];for(let u=0;u+1<h.length;u++){let[p,g]=[h[u],h[u+1]];n.push({u:p.id,v:g.id,room:i.room,edge:i.edge,t0:i.forward?p.t:l-g.t,t1:i.forward?g.t:l-p.t})}}return n}var Go=r=>({room_id:r.room,edge:r.edge,t0:r.t0,t1:r.t1});function fl(r,e){let t=new Map(r.map(o=>[o.id,o])),n=new Map;for(let o of e){let s=`${o.room}:${o.edge}`;n.set(s,[...n.get(s)??[],o.t0].sort((a,l)=>a-l))}let i=o=>{let s=t.get(o.room)?.wall_heights?.[o.edge];return Array.isArray(s)?s[(n.get(`${o.room}:${o.edge}`)??[]).indexOf(o.t0)]??null:s};return{heightOf(o){let s=o.map(i).filter(a=>typeof a=="number"&&a>0);return s.length?Math.min(...s):void 0},thicknessOf(o){let s=o.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return s.length?Math.max(...s):void 0},hasNoWall:o=>o.some(s=>i(s)===0)}}function pl(r,e,t,n){let i=fl(e,r),o=new Map;for(let l of r){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;o.set(c,[...o.get(c)??[],l])}let s=[],a=[];for(let l of o.values()){let c=l[0],d=l.find(u=>u!==c&&u.u===c.v&&u.v===c.u&&u.room!==c.room);for(let u of l)u!==c&&u!==d&&u.room!==c.room&&n.push(`overlap:${c.room}:${u.room}`);let h=d?[c,d]:[c];if(i.hasNoWall(h)){d&&a.push([c.room,d.room]);continue}if(d){let u=i.thicknessOf(h)??t.interior;s.push({a:c.u,b:c.v,left:u/2,right:u/2,exterior:!1,roomLeft:c.room,roomRight:d.room,sources:h.map(Go),height:i.heightOf(h)})}else s.push({a:c.u,b:c.v,left:0,right:i.thicknessOf(h)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Go(c)],height:i.heightOf(h)})}return{drafts:s,open:a}}function ml(r,e){let t=n=>de(O(e[n.b],e[n.a]));for(let n of r){if(n.exterior||n.free)continue;let i=new Set;for(let s of[n.a,n.b])for(let a of r)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(ce(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?i.add("left"):a.roomLeft===n.roomRight&&i.add("right"));if(i.size!==1)continue;let o=n.left+n.right;[n.left,n.right]=i.has("left")?[0,o]:[o,0]}}var gl=(r,e)=>{let t=o=>Math.round(o*100),[n,i]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`};function ie(r,e,t=[]){let n=e.eps??.005,i=[],o=dl(n),s=hl(r,o),a=t.filter(v=>Math.hypot(v.b[0]-v.a[0],v.b[1]-v.a[1])>.05),l=a.map(v=>[o.idOf(v.a),o.idOf(v.b)]),c=new Set;for(let v of r){let w=v.points;w.length<3||(v.wall_splits??[]).forEach((y,x)=>{if(!y||x>=w.length)return;let k=w[x],S=O(w[(x+1)%w.length],k),M=X(S);for(let A of y)A>n&&A<M-n&&c.add(o.idOf(ve(k,le(S,A/M))))})}let d=ul(s,o.points,n),{drafts:h,open:u}=pl(d,r,e,i);ml(h,o.points);let p=h;a.forEach((v,w)=>{let[y,x]=l[w];if(y===x)return;let k=[(v.a[0]+v.b[0])/2,(v.a[1]+v.b[1])/2],S=r.find(A=>A.points.length>=3&&I(k,A.points))?.id??null,M=(v.thickness??e.interior)/2;p.push({free:v.id,a:y,b:x,left:M,right:M,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof v.height=="number"&&v.height>0?v.height:void 0})});let g=No(p,o.points,c),f=Co(g,o.points);return{walls:g.map((v,w)=>{let[y,x]=[o.points[v.a],o.points[v.b]],[k,S]=[f.get(`${w}:a`),f.get(`${w}:b`)],M=Ko([k.right,S.left,x,S.right,k.left,y],1e-6);return{id:gl(y,x),a:[y[0],y[1]],b:[x[0],x[1]],left:v.left,right:v.right,exterior:v.exterior,roomLeft:v.roomLeft,roomRight:v.roomRight,sources:v.sources,footprint:M,...v.free?{free:v.free}:{},...v.height!==void 0?{height:v.height}:{}}}),warnings:[...new Set(i)],open:u}}function lt(r,e,t){let n=r.points[e];return ve(n,le(de(O(r.points[(e+1)%r.points.length],n)),t))}function ct(r,e,t){if(r.wall){let i=t.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=de(O(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,ve(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}var Uo=(r,e)=>G(O(e,r.a),de(O(r.b,r.a)));function Vi(r,e,t){if(!e.wall)return _l(r,t.room,t.edge,e.offset);let n=r.find(i=>i.free===e.wall);return n?{wall:n,s:Uo(n,lt(t.room,0,e.offset))}:null}function _l(r,e,t,n){for(let i of r)if(i.sources.some(s=>s.room_id===e.id&&s.edge===t&&n>=s.t0-1e-6&&n<=s.t1+1e-6))return{wall:i,s:Uo(i,lt(e,t,n))};return null}var jo=([r,e])=>{let t=Math.hypot(r,e)||1;return[r/t,e/t]};function bl(r){return r.reduce((e,t,n)=>e+(t[0]*r[(n+1)%r.length][1]-r[(n+1)%r.length][0]*t[1]),0)/2}function Zo(r,e){let t=r.length;if(t<3||Math.abs(e)<1e-9)return r.map(([i,o])=>[i,o]);let n=bl(r)>=0?1:-1;return r.map((i,o)=>{let s=r[(o+t-1)%t],a=r[(o+1)%t],[l,c]=jo([i[0]-s[0],i[1]-s[1]]),[d,h]=jo([a[0]-i[0],a[1]-i[1]]),u=[c*n,-l*n],p=[h*n,-d*n],g=[u[0]+p[0],u[1]+p[1]],f=Math.hypot(g[0],g[1]);if(f<1e-6)return[i[0]+u[0]*e,i[1]+u[1]*e];let b=(g[0]*u[0]+g[1]*u[1])/f,v=Math.min(4,1/Math.max(.25,b));return[i[0]+g[0]/f*e*v,i[1]+g[1]/f*e*v]})}function gn(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function vl(r){let e=([o,s])=>`${Math.round(o*1e3)}:${Math.round(s*1e3)}`,t=new Map;for(let o of r)for(let s of[o.a,o.b])t.set(e(s),[...t.get(e(s))??[],o]);let n=new Set,i=null;for(let o of r){if(n.has(o))continue;n.add(o);let s=[o.a,o.b],a=o.b;for(;;){let c=(t.get(e(a))??[]).find(d=>!n.has(d));if(!c||(n.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!i||Math.abs(_e(s))>Math.abs(_e(i)))&&(i=s)}return i}function Bi(r,e,t,n){let i=ie(r,{exterior:t,interior:n},e).walls.filter(a=>a.exterior&&!a.free),o=i.length?vl(i.map(a=>({a:a.a,b:a.b}))):null;if(!o)return null;let s=o.filter((a,l)=>{let c=o[(l+o.length-1)%o.length],d=o[(l+1)%o.length];return Math.abs((a[0]-c[0])*(d[1]-a[1])-(a[1]-c[1])*(d[0]-a[0]))>1e-6});return s.length>=3?Zo(s,t):null}function dt(r,e){let t=Z(r),n=ne(r),i=t.w,[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(v,w)=>[v,w,n.y(w)],d=c(a,-o),h=c(l,-o),u=c(l,i+s),p=c(a,i+s),[g,f]=[De(r.pitch_a),De(r.pitch_b)],b=v=>[v,n.vr,n.rh];switch(r.shape){case"pent":return{faces:[[d,h,u,p]],rim:[d,h,u,p],ridges:[[u,p]],gable:[[0,n.y(0)],[i,n.y(i)]]};case"hip":case"pyramid":{let v=(t.u1-t.u0)/2,w=r.shape==="pyramid"?v:Math.min(v,Math.min(n.vr,i-n.vr)||i/2),y=b(t.u0+w),x=b(t.u1-w);return r.shape==="pyramid"?{faces:[[d,h,y],[h,u,y],[u,p,y],[p,d,y]],rim:[d,h,u,p],ridges:[[d,y],[p,y],[h,y],[u,y]],gable:null}:{faces:[[d,h,x,y],[y,x,u,p],[p,d,y],[h,u,x]],rim:[d,h,u,p],ridges:[[y,x],[d,y],[p,y],[h,x],[u,x]],gable:null}}case"halfhip":{let v=Math.min(n.y(0),n.y(i)),w=v+(n.rh-v)*.55,y=g>1e-6?Math.min(n.vr,(w-r.eave_a)/g):n.vr,x=f>1e-6?Math.max(n.vr,i-(w-r.eave_b)/f):n.vr,k=Math.min((t.u1-t.u0)/2-.1,(n.rh-w)/Math.max(.2,g)),S=b(t.u0+k),M=b(t.u1-k),A=[a,y,w],R=[a,x,w],F=[l,y,w],z=[l,x,w];return{faces:[[d,h,F,M,S,A],[S,M,z,u,p,R],[R,A,S],[F,z,M]],rim:[d,h,F,z,u,p,R,A],ridges:[[S,M],[A,S],[R,S],[F,M],[z,M]],gable:[[0,n.y(0)],[y,w],[x,w],[i,n.y(i)]]}}case"mansard":{let v=Wi(i,r.eave_a,r.eave_b,g,f),w=[a,v.vla,v.yla],y=[l,v.vla,v.yla],x=[a,i-v.vlb,v.ylb],k=[l,i-v.vlb,v.ylb],S=[a,v.vr,v.rh],M=[l,v.vr,v.rh];return{faces:[[d,h,y,w],[w,y,M,S],[S,M,k,x],[x,k,u,p]],rim:[d,h,y,M,k,u,p,x,S,w],ridges:[[S,M],[w,y],[x,k]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[i-v.vlb,v.ylb],[i,n.y(i)]]}}default:{let v=b(a),w=b(l);return{faces:[[d,h,w,v],[v,w,u,p]],rim:[d,h,w,u,p,v],ridges:[[v,w]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}}}function _n(r,e,t){let n=null;for(let i of r.faces){if(!I([e,t],i.map(([u,p])=>[u,p])))continue;let[o,s]=i,a=i.slice(2).find(u=>Math.abs((s[0]-o[0])*(u[1]-o[1])-(s[1]-o[1])*(u[0]-o[0]))>1e-9);if(!a)continue;let l=[s[0]-o[0],s[2]-o[2],s[1]-o[1]],c=[a[0]-o[0],a[2]-o[2],a[1]-o[1]],d=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(d[1])<1e-9)continue;let h=o[2]-(d[0]*(e-o[0])+d[2]*(t-o[1]))/d[1];n=n===null?h:Math.min(n,h)}return n}function Ni(r,e,t){let n=Z(e),i=r.floors.flatMap(d=>d.rooms.filter(h=>h.points.length>=3&&d.elevation+d.height>e.base+.05)),o=d=>d.some(h=>i.some(u=>I(h,u.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d),c=d=>d?0:t;return{a:c(o(a.map(d=>n.at(d,-s)))),b:c(o(a.map(d=>n.at(d,n.w+s)))),u0:c(o(l.map(d=>n.at(n.u0-s,d)))),u1:c(o(l.map(d=>n.at(n.u1+s,d))))}}var bn=r=>Math.abs((r.x1-r.x0)*(r.z1-r.z0)),qo=r=>r.shape==="flat"||r.shape==="parapet",Ue=r=>Math.round(r*100)/100;function vn(r,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return r.filter(o=>{if(o===e||o.dormer||o.open||qo(o)||bn(o)<bn(e)*1.5)return!1;let s=pn(o);return t>=s.x0&&t<=s.x1&&n>=s.z0&&n<=s.z1}).reduce((o,s)=>o===null||bn(s)<bn(o)?s:o,null)}function Ci(r,e,t,n){let i=Z(r),o=ne(r),s=2,a=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),[l,c]=e==="a"?[r.eave_a,r.pitch_a]:[r.eave_b,r.pitch_b],d=l+1.4,h=d+s/2*Math.tan(35*Ot),u=Math.max(.8,Math.min(i.w/2-.2,(h-l)/Math.max(.15,Math.tan(Math.min(80,c)*Ot)))),[p,g]=e==="a"?[0,u]:[i.w-u,i.w],f=i.at(a,p),b=i.at(a+s,g);return{id:t,x0:Ue(Math.min(f[0],b[0])),z0:Ue(Math.min(f[1],b[1])),x1:Ue(Math.max(f[0],b[0])),z1:Ue(Math.max(f[1],b[1])),shape:"gable",axis:r.axis==="x"?"z":"x",eave_a:Ue(d),eave_b:Ue(d),pitch_a:35,pitch_b:35,base:Ue(o.y(e==="a"?0:i.w)),overhang:.15,dormer:!0}}function wl(r,e){let t=dt(r,{u0:0,u1:0,a:0,b:0}),n=ne(r);return i=>{let[o,s]=e.at(i,e.w/2),[a,l]=mn(r,o,s);return _n(t,a,l)??n.y(l)}}function Ki(r,e){if(qo(e))return e;let t=Z(e),n=ne(e).rh,i=wl(r,t),o=i(t.u0)<=i(t.u1),[s,a]=o?[t.u0,t.u1]:[t.u1,t.u0],l=o?1:-1,c=a;for(let u=.5;u<Math.abs(a-s);u+=.05)if(i(s+l*u)>=n-.02){c=s+l*u;break}if(Math.abs(c-a)<.05)return e;let d={...e},h=a===t.u1;return e.axis==="x"?d[h?"x1":"x0"]=c:d[h?"z1":"z0"]=c,d}var Yo=.14,kl=r=>r.shape==="flat"||r.shape==="parapet";function Gi(r,e){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<e-.05}function Ui(r,e,t){let n=[],i=e+t+Yo;for(let o of r.settings.roof.sections??[]){if(o.open||kl(o)||o.shape==="mansard")continue;let s=Z(o),a=ne(o),[l,c]=[De(o.pitch_a),De(o.pitch_b)],d=[];l>1e-6&&d.push((i-o.eave_a)/l),o.shape==="gable"&&c>1e-6&&d.push(s.w-(i-o.eave_b)/c);for(let h of d)h<=.01||h>=s.w-.01||o.shape==="gable"&&Math.abs(a.y(h)-i)>1e-6||n.push([s.at(s.u0,h),s.at(s.u1,h)])}return n}function ji(r,e,t,n,i){let o=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([e+(n-e)*a,t+(i-t)*l]);let s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&o.some(c=>I(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function Zi(r,e){let t=r.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}var Re=r=>Math.round(r*1e3)/1e3;function qi(r,e=t=>`roof_${t+1}`){let t=r.settings.roof?.pitch??35,n=r.settings.wall_exterior,i=r.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),o=[],s=[],a=(l,c)=>l.some(d=>I(c,d.points));for(let l of i){let c=l.rooms.filter(b=>b.points.length>=3),d=[...new Set(c.flatMap(b=>b.points.map(v=>Re(v[0]))))].sort((b,v)=>b-v),h=[...new Set(c.flatMap(b=>b.points.map(v=>Re(v[1]))))].sort((b,v)=>b-v),u=h.slice(0,-1).map((b,v)=>d.slice(0,-1).map((w,y)=>{let x=[(d[y]+d[y+1])/2,(h[v]+h[v+1])/2];return a(c,x)&&!a(s,x)})),p=u.map(b=>b.map(()=>!1)),g=(b,v)=>u[v][b]&&!p[v][b],f=l.elevation+l.height;for(let b=0;b<u.length;b++)for(let v=0;v<(u[b]?.length??0);v++){if(!g(v,b))continue;let w=v;for(;w+1<u[b].length&&g(w+1,b);)w++;let y=b;for(;y+1<u.length&&Array.from({length:w-v+1},(A,R)=>g(v+R,y+1)).every(Boolean);)y++;for(let A=b;A<=y;A++)for(let R=v;R<=w;R++)p[A][R]=!0;let[x,k]=[d[v]-n,d[w+1]+n],[S,M]=[h[b]-n,h[y+1]+n];Math.min(k-x,M-S)<.8||o.push({id:e(o.length),x0:Re(x),z0:Re(S),x1:Re(k),z1:Re(M),shape:"gable",axis:k-x>=M-S?"x":"z",eave_a:Re(f),eave_b:Re(f),pitch_a:t,pitch_b:t,base:Re(f),overhang:null})}s.push(...c)}return o}var we=Math.PI/180,re=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]],je=(r,e)=>r[0]*e[0]+r[1]*e[1]+r[2]*e[2],ht=r=>Math.hypot(r[0],r[1],r[2]),Ze=r=>{let e=ht(r)||1;return[r[0]/e,r[1]/e,r[2]/e]},Qo=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]],ke=r=>Math.round(r*100)/100,Ht=([r,e],t)=>(Math.atan2(r,-e)/we-t+720)%360;var Jo=.25;function es(r,e,t,n,i,o,s){let a=i-t>=o-n,l=a?i-t:o-n;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?o-n:i-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function ts(r,e){let t=Ze(Qo(r,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var ns=r=>{let e=Ze([-r[0],0,-r[2]]);return[e[0],e[2]]};function Dt(r,e,t,n,i,o,s,a){let l=Ze(re(i,n)),c=Ze(re(o,n));return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:ts(l,c),lu:ht(re(i,n)),ls:ht(re(o,n)),pitch:s,span:a,facing:ns(c)}}function Xo(r,e,t,n,i,o){let s=ht(re(i,n));if(s<.3)return null;let a=Ze(re(i,n)),l=re(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=ht(d);if(h<.3)return null;let u=Ze(d),p=g=>{let f=Math.min(1,Math.max(0,g/h));return[c*f,s-(s-c)*f]};return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:u,n:ts(a,u),lu:s,ls:h,pitch:Math.atan2(u[1],Math.hypot(u[0],u[2]))/we,span:p,facing:ns(u)}}function xl(r,e){let t=Z(r),n=ne(r),i=(w,y,x)=>{let[k,S]=t.at(w,y);return[k,x,S]},[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,d=n.y(-o),h=n.y(t.w+s);if(r.shape==="flat"||r.shape==="parapet"){let[w,y]=[t.at(a,-o),t.at(l,t.w+s)];return[es(r.id,r.id,Math.min(w[0],y[0]),Math.min(w[1],y[1]),Math.max(w[0],y[0]),Math.max(w[1],y[1]),r.eave_a+Jo)]}if(r.shape==="pent")return[Dt(`${r.id}:a`,r.id,"a",i(a,-o,d),i(l,-o,d),i(a,t.w+s,h),r.pitch_a,()=>[0,c])];let u=r.shape==="hip"||r.shape==="pyramid",p=(t.u1-t.u0)/2,g=r.shape==="pyramid"?p:u?Math.min(p,Math.min(n.vr,t.w-n.vr)||t.w/2):0,f=u?t.u0+g-a:0,b=u?l-(t.u1-g):0,v=[];if(n.vr>.3){let w=Math.hypot(n.vr+o,n.rh-d);v.push(Dt(`${r.id}:a`,r.id,"a",i(a,-o,d),i(l,-o,d),i(a,n.vr,n.rh),r.pitch_a,y=>[f*(y/w),c-b*(y/w)]))}if(t.w-n.vr>.3){let w=Math.hypot(t.w+s-n.vr,n.rh-h);v.push(Dt(`${r.id}:b`,r.id,"b",i(l,t.w+s,h),i(a,t.w+s,h),i(l,n.vr,n.rh),r.pitch_b,y=>[b*(y/w),c-f*(y/w)]))}if(u){let w=Xo(`${r.id}:c`,r.id,"c",i(a,t.w+s,h),i(a,-o,d),i(t.u0+g,n.vr,n.rh)),y=Xo(`${r.id}:d`,r.id,"d",i(l,-o,d),i(l,t.w+s,h),i(t.u1-g,n.vr,n.rh));v.push(...[w,y].filter(x=>x!==null))}return v}function is(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function U(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>xl(y,Ni(r,y,y.overhang??e.overhang)));let t=is(r);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(x=>x[0])),i=t.rooms.flatMap(y=>y.points.map(x=>x[1])),o=r.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...n)-o,Math.max(...n)+o],[l,c]=[Math.min(...i)-o,Math.max(...i)+o],d=t.elevation+t.height;if(e.type==="flat")return[es("main",null,s,l,a,c,d+Jo)];let h=a-s>=c-l,u=e.ridge==="short"?!h:h,p=(u?c-l:a-s)/2,g=p*Math.tan(e.pitch*we),f=(y,x,k)=>u?[y,d+k,(l+c)/2+x]:[(s+a)/2+x,d+k,y],[b,v]=u?[s,a]:[l,c],w=()=>[0,v-b];return[Dt("main:a",null,"a",f(b,-p,0),f(v,-p,0),f(b,0,g),e.pitch,w),Dt("main:b",null,"b",f(b,p,0),f(v,p,0),f(b,0,g),e.pitch,w)]}function Le(r,e){let t=[];for(let n of r.floors.filter(i=>!e||i.id===e)){let{walls:i}=ie(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let[s,a]=[o.b[0]-o.a[0],o.b[1]-o.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,d]=[a/l,-s/l],h=Math.min(n.height,o.height??n.height),u=(p,g,f,b)=>t.push({key:p,section:null,side:"top",flat:!1,o:g,eu:f,es:[0,1,0],n:b,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:{floorId:n.id}});u(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+d*o.right],[s/l,0,a/l],[c,0,d]),o.free&&u(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-d*o.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var xe="ground";function rs(r){let e=r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function yn(r,e){let t=(e.rotation??0)*we,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=rs(r),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:to(o,s,a)):e.base??0;return{key:xe,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function he(r,e,t=U(r)){return e.face===xe?yn(r,e):e.face.startsWith("wall:")?Le(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}var wn=1.13,Lt=1.72,oe=.025,We=.07;function qe(r){let e=r.module_w||wn,t=r.module_h||Lt;return r.portrait===!1?[t,e]:[e,t]}function Wt(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Yi(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*we:r.wall?Math.min(90,Math.max(0,e.tilt??0))*we:0}function Vt(r,e){let[,t]=qe(e),n=Yi(r,e);return r.wall?t*Math.cos(n)+oe:r.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+oe}function Bt(r,e){let[t,n]=qe(e),i=Wt(e),o=Math.max(1,...i);return[o*t+(o-1)*oe,(i.length-1)*Vt(r,e)+n*Math.cos(Yi(r,e))]}function se(r,e,t=!1){let[n,i]=qe(e),o=Yi(r,e),s=i*Math.cos(o),a=Vt(r,e),l=Wt(e),c=Math.max(1,...l),d=new Set(e.skip??[]),h=(g,f,b)=>[0,1,2].map(v=>r.o[v]+r.eu[v]*g+r.es[v]*f+r.n[v]*b),u=(g,f)=>{if(r.unbounded)return!0;if(f<-1e-6||f>r.ls+1e-6)return!1;let[b,v]=r.span(f);return g>=b-1e-6&&g<=v+1e-6},p=[];return l.forEach((g,f)=>{let b=e.align==="right"?c-g:e.align==="center"?(c-g)/2:0;for(let v=0;v<g;v++){let w=`${f}:${v}`,y=d.has(w);if(y&&!t)continue;let x=e.u+(v+b)*(n+oe),k=x+n,S=e.v+f*a,M=S+(r.flat||r.wall?s:i);if([[x,S],[k,S],[k,M],[x,M]].every(([A,R])=>u(A,R)))if(r.wall&&o>.001){let A=We+i*Math.sin(o),[R,F]=e.flip?[A,We]:[We,A],z=[h(x,S,R),h(k,S,R),h(k,M,F),h(x,M,F)],P=e.flip?S:M;p.push({corners:z,posts:[x+.05,k-.05].map(V=>[h(V,P,0),h(V,P,A)]),cell:w,skipped:y})}else if(!r.flat)p.push({corners:[h(x,S,We),h(k,S,We),h(k,M,We),h(x,M,We)],posts:[],cell:w,skipped:y});else{let R=.15+i*Math.sin(o),[F,z]=e.flip?[M,S]:[S,M],P=[h(x,F,.15),h(k,F,.15),h(k,z,R),h(x,z,R)],V=[x+.05,k-.05].flatMap(D=>[[h(D,F,0),h(D,F,.15)],[h(D,z,0),h(D,z,R)]]);p.push({corners:P,posts:V,cell:w,skipped:y})}}}),p}function Ve(r,e){if(r.unbounded)return{u:e.u,v:e.v};let[t,n]=Bt(r,e),i=o=>Math.floor(o*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,r.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,r.ls-n)))}}function kn(r,e){let[t,n]=Bt(r,e),[i,o]=[e.u+t/2,e.v+n/2];return[r.o[0]+r.eu[0]*i+r.es[0]*o,r.o[2]+r.eu[2]*i+r.es[2]*o]}var xn=.78,Nt=1.18,Ye=r=>({id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||xn,module_h:r.h||Nt});function Qi(r,e){let t=se(r,Ye(e))[0];if(!t)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return t.corners.map(n)}function Xi(r,e){let[t]=qe(e);return ke((r.lu-(e.cols*t+(e.cols-1)*oe))/2)}var Ct=.4;function Kt(r,e){let t={id:e,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=qe(t),[i,o]=r.span(r.ls/2);for(t.cols=Math.max(1,Math.floor((o-i-2*Ct+oe)/(n+oe))),t.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*Ct)/Vt(r,t))));t.cols>1&&se(r,{...t,u:Xi(r,t),v:Ct}).length<t.rows*t.cols;)t.cols--;return t.u=Xi(r,t),t.v=Ct,t}function $n(r,e){let t={...e,face:r.key,tilt:r.flat?e.tilt??15:null,rotation:null,flip:!1};return t.u=Xi(r,t),t.v=Ct,{...t,...Ve(r,t)}}function Ji(r,e,t){let n=r.settings.north??0,i=a=>a.lu*(1.3+Math.cos((Ht(a.facing,n)-180)*Math.PI/180)),o=Le(r,t).sort((a,l)=>i(l)-i(a))[0];if(!o)return null;let s={...Kt(o,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((o.lu-.8+oe)/(Lt+oe))),s.u=ke((o.lu-(s.cols*Lt+(s.cols-1)*oe))/2),s.v=ke(Math.max(0,o.ls-wn-.3)),s}function Sn(r,e){let t=r.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(o=>o[0]))+3:0,i=t.length?Math.min(...t.map(o=>o[1])):0;return{id:e,face:xe,u:ke(n),v:ke(i),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function ut(r,e,t){let n=yn(r,e),[i,o]=Bt(n,e),[s,a]=[e.u+i/2,e.v+o/2],l=[n.eu[0]*s+n.es[0]*a,n.eu[2]*s+n.es[2]*a],c=t*we,d=l[0]*Math.cos(c)+l[1]*Math.sin(c)-i/2,h=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-o/2;return{u:ke(d),v:ke(h),rotation:(Math.round(t)%360+360)%360}}function Mn(r,e){let[t,n]=r.span(r.ls/2);return{id:e,face:r.key,u:ke((t+n-xn)/2),v:ke(Math.max(0,Math.min(r.ls-Nt,r.ls*.45-Nt/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function Gt(r,e){let[t,n]=[e[0]-r.o[0],e[1]-r.o[2]],[i,o,s,a]=[r.eu[0],r.eu[2],r.es[0],r.es[2]],l=i*a-o*s;if(Math.abs(l)<1e-9)return null;let c=(t*a-n*s)/l,d=(i*n-o*t)/l;if(d<0||d>r.ls)return null;let[h,u]=r.span(d);return c>=h&&c<=u?{u:c,s:d}:null}function er(r,e){let t=null;for(let n of r){if(n.wall){let[s,a]=[e[0]-n.o[0],e[1]-n.o[2]],l=s*n.eu[0]+a*n.eu[2],c=s*n.n[0]+a*n.n[2],d=l>=0&&l<=n.lu;if(d&&c>=-.05&&c<=.35)return{face:n,u:l,s:Number.NaN};d&&c>.35&&c<=.8&&!t&&(t={face:n,u:l,s:Number.NaN,y:-1/0});continue}let i=Gt(n,e);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!t||o>t.y)&&(t={face:n,...i,y:o})}return t&&{face:t.face,u:t.u,s:t.s}}function En(r,e,t){let n=je(t,r.n);if(Math.abs(n)<1e-6)return null;let i=je(re(r.o,e),r.n)/n;if(i<=0)return null;let o=re([e[0]+t[0]*i,e[1]+t[1]*i,e[2]+t[2]*i],r.o);return{t:i,u:je(o,r.eu),s:je(o,r.es)}}function tr(r,e,t){if(r.unbounded)return!0;if(t<0||t>r.ls)return!1;let[n,i]=r.span(t);return e>=n&&e<=i}function nr(r,e,t,n){return se(r,e).some(o=>{let s=o.corners.map(c=>{let d=re(c,r.o);return[je(d,r.eu),je(d,r.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return t>=Math.min(...a)-.05&&t<=Math.max(...a)+.05&&n>=Math.min(...l)-.05&&n<=Math.max(...l)+.05})}var $l=["n","ne","e","se","s","sw","w","nw"],An=(r,e)=>$l[Math.round(Ht(r.facing,e)/45)%8];function Ut(r,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=Math.cos((Ht(n.facing,e)-180)*Math.PI/180);return n.lu*n.ls*(1.2+i)};return[...r].sort((n,i)=>t(i)-t(n))[0]??null}var ls=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],os={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},ss=r=>typeof r=="string"?r:r[0],zn=r=>typeof r=="string"?He[r]:r[1],ft=.05,Sl=.02,as=r=>Math.round(r*1e3)/1e3;function Ml(r,e,t,n){switch(e){case"back":return{x:r.x0+t,z:r.z0+n,turn:0};case"right":return{x:r.x1-n,z:r.z0+t,turn:90};case"front":return{x:r.x1-t,z:r.z1-n,turn:180};case"left":return{x:r.x0+n,z:r.z1-t,turn:270}}}function cs(r,e,t){let n=te(r.points),i=n.x1-n.x0,o=n.z1-n.z0,s=[],a=(l,c,d,h,[u,p,g])=>{s.push({id:t(),type:l,x:as(c),z:as(d),rotation:h,w:u,d:p,h:g,variant:null,entity:null,power:null})};for(let[l,c,d]of os[e].rows){let h=l==="back"||l==="front"?i:o,u=0,p=[];for(let f of d){if(u+zn(f)[0]>h-.1)break;p.push(f),u+=zn(f)[0]}let g=c==="start"?ft:c==="end"?h-u-ft:(h-u)/2;for(let f of p){let b=zn(f),v=Ml(n,l,g+b[0]/2,b[1]/2+Sl);a(ss(f),v.x,v.z,v.turn,b),g+=b[0]}}for(let[l,c,d,h]of os[e].spots){let u=zn(l),p=(b,v,w)=>Math.min(w,Math.max(v,b)),g=p(n.x0+i*c,n.x0+u[0]/2+ft,n.x1-u[0]/2-ft),f=p(n.z0+o*d,n.z0+u[1]/2+ft,n.z1-u[1]/2-ft);a(ss(l),g,f,h,u)}return s}var pt=ge`
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
`,Rn=ge`
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
`;var q=r=>/^(sensor|input_number|number)\./.test(r),ir=r=>/^(binary_sensor|input_boolean)\./.test(r);function Fn(r,e){if(!q(e))return!1;let t=r?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}function El(r,e){let t=r?.entities?.[e],n=t?.area_id??(t?.device_id?r?.devices?.[t.device_id]?.area_id:null);return n?r?.areas?.[n]?.name:void 0}function ue(r,e){return Object.keys(r?.states??{}).filter(e).map(t=>{let n=El(r,t);return{id:t,label:n?`${L(r,t)} \xB7 ${n}`:L(r,t)}}).sort((t,n)=>t.label.localeCompare(n.label))}function In(r,e){return r.power&&r.power!=="none"?r.power:e.get(r.id)?.power??null}var ds={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},hs=r=>(...e)=>({_$litDirective$:r,values:e}),Pn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var jt=class extends Pn{constructor(e){if(super(e),this.it=_,e.type!==ds.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===_||e==null)return this._t=void 0,this.it=e;if(e===Me)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};jt.directiveName="unsafeHTML",jt.resultType=1;var us=hs(jt);var fs=40,rr=class extends J{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(s=>!e||n(s)),o=e?this.options.filter(n):this.options;return[...i,...o.slice(0,fs)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=e?this.options.filter(i=>t.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-fs)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return m`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${e?e.label:this.placeholder}
        .value=${this._open?this._query:e?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?m`<ul class="list" role="listbox">
            ${t.length?_:m`<li class="empty">–</li>`}
            ${t.map((n,i)=>m`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?m`<small>${n.id}</small>`:_}
              </li>`)}
            ${this.leftOut>0?m`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:_}
          </ul>`:_}
    </div>`}static styles=[pt,ge`
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",rr);var Zt=r=>r.target.value,Al=r=>Number.parseFloat(r.replace(",",".")),zl=r=>Math.round(r*1e3)/1e3,ps=r=>r.wide?"nf-field nf-wide":"nf-field";function Fe(r,e,t,n,i=.01,o){return m`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${i}
      min=${o??_}
      .value=${String(zl(t))}
      ?disabled=${!r.admin}
      @change=${s=>{let a=Al(Zt(s));Number.isFinite(a)&&n(a)}}
    />
  </label>`}function mt(r,e,t,n,i={}){return m`<label class=${ps(i)} title=${i.title??_}
    >${e}
    <input type="text" .value=${t} placeholder=${i.placeholder??_} maxlength=${i.maxlength??_} ?disabled=${!r.admin} @change=${o=>n(Zt(o).trim())} />
  </label>`}function qt(r,e,t,n,i,o={}){return m`<label class=${ps(o)} title=${o.title??_}
    >${e}
    <select ?disabled=${!r.admin} @change=${s=>i(Zt(s))}>
      ${n.map(([s,a])=>m`<option value=${s} ?selected=${s===t}>${a}</option>`)}
    </select>
  </label>`}function gt(r,e,t,n,i={}){return m`<label class="nf-check ${i.wide===!1?"":"nf-wide"}" title=${i.title??_}
    ><input type="checkbox" .checked=${t} ?disabled=${!r.admin} @change=${o=>n(o.target.checked)} />
    ${e}</label
  >`}function Q(r,e,t,n,i,o){let s=n===void 0?null:n?r.t("entity_auto",{name:L(r.hass,n)}):r.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:r.t("entity_none")}];return m`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${i}
      .fixed=${a}
      .value=${t??(s!==null?"__auto":"none")}
      .placeholder=${r.t("entity_search")}
      ?disabled=${!r.admin}
      @change=${c=>{c.stopPropagation(),o(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Tn(r,e,t){let n=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return m`<label class="nf-field nf-wide" title=${r.t("marker_icon_hint")}
    >${r.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!r.admin} @change=${i=>t(Zt(i).trim().replace(/^mdi:/,"")||null)} />
      ${n?us(`<ha-icon icon="${n}"></ha-icon>`):_}
    </span>
  </label>`}function ms(r,e,t){return m`<label class="nf-field nf-wide" title=${r.t("marker_show_hint")}
    >${r.t("marker_show")}
    <select ?disabled=${!r.admin} @change=${n=>t(Zt(n)||null)}>
      <option value="" ?selected=${!e}>${r.t("marker_show_auto")}</option>
      ${jr.map(n=>m`<option value=${n} ?selected=${n===e}>${r.t(`marker_show_${n}`)}</option>`)}
    </select>
  </label>`}var Qe=(...r)=>m`<div class="nf-actions">${r}</div>`,C=(r,e="")=>m`<p class="nf-sub ${e}">${r}</p>`;function gs(r,e,t){let n=r.filter(i=>i.person!==e);return t&&t!=="none"?[...n,{person:e,sensor:t}]:n}function _s(r,e){let t=e.slice(e.indexOf(".")+1),n=i=>i.id.includes(t)&&/(area|room|raum|bermuda|espresense)/.test(i.id);return[...r.filter(n),...r.filter(i=>!n(i))]}function bs(r){let e=r.target?`, target: { x: ${r.target.x}, y: ${r.target.y}, z: ${r.target.z} }`:"";return`start_view: { theta: ${r.theta}, phi: ${r.phi}, radius: ${r.radius}${e} }`}function vs(r){let e=r.trim();if(!e)return{ok:!0,value:null};try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?{ok:!0,value:t}:{ok:!1}}catch{return{ok:!1}}}function On(r,e,t){let n=[...r],[i]=n.splice(e,1);return n.splice(Math.max(0,Math.min(n.length,e+t)),0,i),n}var Hn=(r,e)=>r.filter((t,n)=>n!==e),or=(r,e,t)=>r.map((n,i)=>i===e?{...n,...t}:n),Dn=r=>r.length>0?r:void 0;var Rl=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],Fl=40,Il=20,Pl=30,Tl=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],Ol={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},sr=(r,e,t,n=!1)=>m`<button class="nf-pin" title=${r} ?disabled=${n} @click=${t}>${e}</button>`;function Hl(r){let e=r.doc.settings.favorites??[],t=o=>r.change(s=>s.settings.favorites=Dn(o)),n=ue(r.hass,o=>Rl.includes(o.split(".")[0])&&!e.includes(o)),i=(o,s)=>m`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${L(r.hass,o)}</span></span>
    ${sr(r.t("move_up"),"\u2191",()=>t(On(e,s,-1)),s===0)}
    ${sr(r.t("move_down"),"\u2193",()=>t(On(e,s,1)),s===e.length-1)}
    ${sr(r.t("delete"),"\u2715",()=>t(Hn(e,s)))}
  </div>`;return m`<summary>${r.t("favorites")}${e.length>0?m` <span class="nf-lib-count">${e.length}</span>`:_}</summary>
    ${C(r.t("favorites_hint"))} ${e.map(i)}
    ${e.length<Fl?m`<div class="nf-form">${Q(r,r.t("favorites_add"),null,void 0,n,o=>o&&o!=="none"&&!e.includes(o)&&t([...e,o]))}</div>`:_}`}function Dl(r){let e=r.doc.settings.media_presets??[],t=o=>r.change(s=>s.settings.media_presets=Dn(o)),n=(o,s)=>t(or(e,o,s)),i=(o,s)=>m`<div class="nf-form nf-own-button">
    ${mt(r,r.t("own_button_label"),o.label,a=>n(s,{label:a||"Radio"}),{maxlength:60})}
    ${mt(r,r.t("preset_type"),o.type,a=>n(s,{type:a||"music"}),{title:r.t("preset_type_hint")})}
    ${mt(r,r.t("preset_content"),o.content,a=>n(s,{content:a}),{wide:!0,title:r.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>t(Hn(e,s))}>${r.t("delete")}</button></div>
  </div>`;return m`<h4>${r.t("presets")}</h4>
    ${C(r.t("presets_hint"))}
    <datalist id="nf-preset-types">${Tl.map(o=>m`<option value=${o}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<Pl?Qe(m`<button class="nf-btn" @click=${()=>t([...e,{id:T("preset"),label:"Radio",type:"music",content:""}])}>+ ${r.t("preset_add")}</button>`):_}`}function Ll(r,e,t){let n=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',i=o=>{let s=o.target;s.setCustomValidity("");let a=vs(s.value);if(a.ok)return t(a.value);s.setCustomValidity(r.t("own_data_bad")),s.reportValidity()};return m`<label class="nf-field nf-wide" title=${r.t("own_data_hint")}
    >${r.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${n} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${i}></textarea>
  </label>`}function Wl(r){let e=r.doc.settings.buttons??[],t=s=>r.change(a=>a.settings.buttons=Dn(s)),n=(s,a)=>t(or(e,s,a)),i=qr.map(s=>[s,r.t(`own_action_${s}`)]),o=(s,a)=>m`<div class="nf-form nf-own-button">
    ${mt(r,r.t("own_button_label"),s.label,l=>n(a,{label:l||r.t("own_button_new")}),{maxlength:60})}
    ${qt(r,r.t("own_button_action"),s.action,i,l=>n(a,{action:l}))} ${Tn(r,s.icon??null,l=>n(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?mt(r,r.t(`own_target_${s.action}`),s.target??"",l=>n(a,{target:l||null}),{wide:!0,placeholder:Ol[s.action]}):_}
    ${s.action==="service"||s.action==="fire_dom_event"?Ll(r,s,l=>n(a,{data:l})):_}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>t(On(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>t(Hn(e,a))}>${r.t("delete")}</button>
    </div>
  </div>`;return m`<h4>${r.t("own_buttons")}</h4>
    ${C(r.t("own_buttons_hint"))} ${e.map(o)}
    ${e.length<Il?Qe(m`<button class="nf-btn" @click=${()=>t([...e,{id:T("btn"),label:r.t("own_button_new"),action:"navigate",target:null}])}>+ ${r.t("own_button_add")}</button>`):_}`}function ys(r){return m`<details class="nf-section">${Hl(r)} ${Wl(r)} ${Dl(r)}</details>`}function ws(r,e){let t=r.doc.settings.start_view??null,n=()=>{let i=e();i&&r.change(o=>o.settings.start_view=i)};return m`<details class="nf-section">
    <summary>${r.t("start_view")}</summary>
    ${C(r.t("start_view_hint"))}
    ${Qe(m`<button class="nf-btn nf-primary" @click=${n}>${r.t("start_view_set")}</button>`,t?m`<button class="nf-btn" @click=${()=>r.change(i=>i.settings.start_view=null)}>${r.t("start_view_reset")}</button>`:_)}
    ${t?m`${C(r.t("start_view_saved"))} ${C(r.t("start_view_card"))}<code class="nf-code">${bs(t)}</code>`:_}
  </details>`}function ks(r){let e=Object.keys(r.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=ue(r.hass,q),n=i=>Q(r,`${L(r.hass,i)} \xB7 ${r.t("presence_sensor")}`,r.doc.presence.find(o=>o.person===i)?.sensor??null,void 0,_s(t,i),o=>r.replace({...structuredClone(r.doc),presence:gs(r.doc.presence,i,o)}));return m`<details class="nf-section">
    <summary>${r.t("presence")}</summary>
    <div class="nf-form">${e.length>0?e.map(n):m`<p class="nf-sub nf-wide">${r.t("no_persons")}</p>`}</div>
    ${C(r.t("presence_hint"))}
  </details>`}var xs="nextfloor";function Vl(r){let e=structuredClone(r);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.background=null,t.placements=[],t.rooms.forEach(n=>n.area_id=null),t.furniture.forEach(n=>Object.assign(n,{entity:null,power:null})),t.openings.forEach(n=>Object.assign(n,{cover:null,contact:null,tilt:null}));return e}function $s(r,e){return{format:xs,version:1,exported_at:new Date().toISOString(),building:e?Vl(r):structuredClone(r)}}var Bl=r=>!!r&&r.version===1&&Array.isArray(r.floors)&&!!r.settings;function Ss(r){let e;try{e=JSON.parse(r)}catch{throw new Error("not_json")}let t=e,n=t?.format===xs?t.building:e;if(!Bl(n))throw new Error("not_plan");return n.floors.forEach(i=>i.background=null),cn(n)}var Nl=r=>!/^https?:\/\//.test(r)&&!r.startsWith("camera:");function Ms(r){let e=new Set;for(let t of r.floors){t.background?.image_id&&e.add(t.background.image_id);let n=t.furniture.flatMap(i=>i.pictures??[]);for(let{image:i}of n)i&&Nl(i)&&e.add(i)}return[...e]}function Es(r,e){let t=document.createElement("a"),n=URL.createObjectURL(new Blob([e],{type:"application/json"}));Object.assign(t,{href:n,download:r}),t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var Cl={api:{listHistory:zr,restoreSnapshot:Fr,takeSnapshot:Rr,fetchBackup:Tr,restoreBackup:Or,fetchImage:nn,storeImage:rn},alert:r=>alert(r),confirm:r=>confirm(r),download:Es,today:()=>new Date().toISOString().slice(0,10)},Kl=r=>String(r?.message??r),Ln=class{host;deps;history=null;busy=!1;constructor(e,t=Cl){this.host=e,this.deps=t}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:t,t:n}=this.host;!t||!this.deps.confirm(n("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(t,e.id),this.host.say(n("backup_restored")),await this.loadHistory())}exportPlan(e){let t=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${t}-${this.deps.today()}.json`,JSON.stringify($s(this.host.doc,e),null,2))}async importPlan(e){let{hass:t,t:n}=this.host;if(!e||!t)return;let i;try{i=Ss(await e.text())}catch(o){let s=o.message;this.deps.alert(s==="not_json"?n("import_error_not_json"):s==="not_plan"?n("import_error_not_plan"):n("backup_import_error",{error:s}));return}this.deps.confirm(n("backup_import_confirm"))&&(await this.deps.api.takeSnapshot(t).catch(()=>{}),this.host.adopt(i),this.host.say(n("backup_imported")))}async exportFull(){let{hass:e,t}=this.host;if(e){this.busy=!0,this.host.refresh();try{let n=await this.deps.api.fetchBackup(e),i={};for(let o of Ms(n.building))await this.deps.api.fetchImage(e,o).then(s=>i[o]=s,()=>{});this.deps.download(`nextfloor-${t("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...n,exported_at:new Date().toISOString(),images:i}))}catch(n){this.deps.alert(t("backup_import_error",{error:Kl(n)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:t,t:n}=this.host;if(!e||!t)return;let i;try{i=JSON.parse(await e.text())}catch{this.deps.alert(n("import_error_not_json"));return}if(i?.format!=="nextfloor-backup"||!i.building){this.deps.alert(n("backup_full_not_backup"));return}if(this.deps.confirm(n("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let o=await this.deps.api.restoreBackup(t,i.building,i.packs??[]),s=0;for(let[l,c]of Object.entries(i.images??{}))await this.deps.api.storeImage(t,l,c).then(()=>s++,()=>{});this.host.adopt(cn(o.building)),this.host.packsChanged();let a=o.skipped.length>0?` ${n("backup_full_skipped",{packs:o.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(n("backup_full_restored",{packs:o.packs,pictures:s})+a)}catch(o){let{code:s,message:a}=o??{};this.deps.alert(n("backup_import_error",{error:a??s??String(o)}))}finally{this.busy=!1,this.host.refresh()}}}};var As=(r,e)=>m`<label class="nf-btn nf-upload"
  >${r}<input
    type="file"
    accept="application/json,.json"
    @change=${t=>{let n=t.target,i=n.files?.[0];n.value="",e(i)}}
  />
</label>`;function zs(r,e){let t=r.t,n=e.history,i=n===null?C(t("loading")):n.length===0?C(t("backup_none")):m`<div class="nf-room-list">
            ${n.map(o=>m`<div class="nf-row nf-dev-row">
                <span>${e.timeOf(o)} <span class="nf-muted">· ${t("backup_summary",{rooms:o.rooms,furniture:o.furniture})}</span></span>
                <button class="nf-link" @click=${()=>e.restorePoint(o)}>${t("backup_restore")}</button>
              </div>`)}
          </div>`;return m`<details class="nf-section" @toggle=${o=>o.target.open&&void e.loadHistory()}>
    <summary>${t("backup")}</summary>
    <h4 class="nf-lib-head">${t("backup_history")}</h4>
    ${i}
    <h4 class="nf-lib-head">${t("backup_file")}</h4>
    ${Qe(m`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${t("backup_export")}</button>`,m`<button class="nf-btn" title=${t("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${t("backup_export_share")}</button>`,As(t("backup_import"),o=>{e.importPlan(o)}))}
    ${C(t("backup_hint"))}
    <h4 class="nf-lib-head">${t("backup_full")}</h4>
    ${Qe(m`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":t("backup_full_export")}</button>`,As(t("backup_full_import"),o=>{e.importFull(o)}))}
    ${C(t("backup_full_hint"))}
  </details>`}function Rs(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var _t=(r,e,t)=>Math.min(t,Math.max(e,r)),Fs=r=>(Math.round(r)%360+360)%360;function Is(r,e,t){return t?[...new Set([...r,e])]:r.filter(n=>n!==e)}var Gl=["none","flat","gable","custom"];function Ps(r,e){let t=r.t,n=r.doc.settings,i=c=>r.replace({...structuredClone(r.doc),settings:{...structuredClone(r.doc.settings),...c}}),o=c=>i({roof:{...n.roof,...c}}),s=Gl.map(c=>[c,t(`roof_${c}`)]),a=n.weather_effects??Qr,l=n.roof.type==="gable";return m`<details class="nf-section">
    <summary>${t("settings")}</summary>
    <div class="nf-form">
      ${Fe(r,t("wall_exterior"),n.wall_exterior,c=>i({wall_exterior:_t(c,.02,1)}),.01,.02)}
      ${Fe(r,t("wall_interior"),n.wall_interior,c=>i({wall_interior:_t(c,.02,1)}),.01,.02)}
      ${Fe(r,t("grid"),n.grid,c=>i({grid:_t(c,.01,1)}),.01,.01)}
      ${Fe(r,t("north"),n.north,c=>i({north:Fs(c)}),1)}
      ${qt(r,t("roof"),n.roof.type,s,c=>c==="custom"?e.useRoofSections():o({type:c}),{wide:!0})}
      ${l?qt(r,t("roof_ridge"),n.roof.ridge==="short"?"short":"long",[["long",t("roof_ridge_long")],["short",t("roof_ridge_short")]],c=>o({ridge:c==="short"?"short":null}),{wide:!0}):_}
      ${l?Fe(r,t("roof_pitch"),n.roof.pitch,c=>o({pitch:_t(c,5,60)}),1,5):_}
      ${n.roof.type!=="none"?Fe(r,t("roof_overhang"),n.roof.overhang,c=>o({overhang:_t(c,0,2)}),.05,0):_}
      ${r.hass?Q(r,t("weather_entity"),n.weather_entity??null,Rs(r.hass,null),ue(r.hass,c=>c.startsWith("weather.")),c=>i({weather_entity:c})):_}
      <div class="nf-sub nf-wide">${t("weather_effects")}</div>
      ${Yr.map(c=>gt(r,t(`weather_effect_${c}`),a.includes(c),d=>i({weather_effects:Is(a,c,d)}),{wide:!1}))}
      ${gt(r,t("rain_warning"),n.rain_warning!==!1,c=>i({rain_warning:c}))}
      ${gt(r,t("sun_patches"),n.sun_patches!==!1,c=>i({sun_patches:c}),{title:t("sun_patches_hint")})}
    </div>
    ${C(`${t("north_hint")} ${t("weather_entity_hint")}`)}
  </details>`}var Wn=r=>r&&r!=="none"?r:null,Vn=(r,e)=>{e&&!r.includes(e)&&r.push(e)};function ar(r,e=t=>Wn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors.flatMap(i=>i.furniture)){let i=e(n);if(n.type==="meter")t.grid??=i,t.gridExport??=Wn(n.export);else if(n.type==="inverter")Vn(t.solar,i);else if(n.type==="home_battery"){let o=Wn(n.charge);Vn(t.battery,i),Vn(t.charge,o),Vn(t.soc,Wn(n.soc)),(i||o)&&t.batteries.push({power:i,charge:o})}}return t}function Ul(r){for(let e of r.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return r.energy.meter}var jl=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,Zl=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function Bn(r,e,t="power"){let n=e?r.entities?.[e]?.device_id:void 0;if(!e||!n)return null;let i=Object.keys(r.states).filter(a=>a.startsWith("sensor.")&&r.entities?.[a]?.device_id===n&&r.states[a]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let o=i.filter(a=>!jl.test(a)),s=e.replace(/^sensor\./,"").replace(Zl,"");return o.find(a=>s&&a.includes(s))??o[0]??i[0]}function Ts(r,e){let t={},n=(i,o)=>{o&&!t[i]&&(t[i]=o)};for(let i of e.energy_sources??[])if(i.type==="grid")n("grid",Bn(r,i.flow_from?.[0]?.stat_energy_from??i.flow_to?.[0]?.stat_energy_to));else if(i.type==="solar")n("solar",Bn(r,i.stat_energy_from));else if(i.type==="battery"){let o=i.stat_energy_from??i.stat_energy_to;n("battery",Bn(r,o)),n("battery_soc",Bn(r,o,"battery"))}return t}function Ie(r,e=!1){let t=r?Number(r.state):NaN;if(!Number.isFinite(t))return null;let n={kW:1e3,MW:1e6}[String(r.attributes.unit_of_measurement??"W")]??1;return e?-t*n:t*n}var Os=r=>{let e=r.filter(t=>t!==null);return e.length?e.reduce((t,n)=>t+n,0):null};function ql(r,e,t){let n=e.grid??t.grid,i=n?Ie(r.states[n],e.grid_invert):null;if(!e.grid&&t.gridExport){let o=Math.max(0,Ie(r.states[t.gridExport])??0);return Math.max(0,i??0)-o}return i}function Yl(r,e,t){return e.solar?Ie(r.states[e.solar]):t.solar.length?Os(t.solar.map(n=>Ie(r.states[n]))):null}function Ql(r,e,t){return e.battery?Ie(r.states[e.battery],e.battery_invert):Os(t.batteries.map(n=>n.charge?(n.power?Math.max(0,Ie(r.states[n.power])??0):0)-Math.max(0,Ie(r.states[n.charge])??0):n.power?Ie(r.states[n.power],e.battery_invert):null))}function Hs(r,e,t,n=ar(e)){let i=e.energy,o=ql(r,i,n),s=Yl(r,i,n),a=Ql(r,i,n),l=(i.battery_soc?[i.battery_soc]:n.soc).map(p=>Number(r.states[p]?.state)).filter(Number.isFinite),c=l.length?l.reduce((p,g)=>p+g,0)/l.length:null,d=i.tariff?r.states[i.tariff]:void 0,h=Number(d?.state),u=i.consumption?Ie(r.states[i.consumption]):null;return u===null&&(o!==null||s!==null||a!==null)&&(u=(o??0)+Math.max(0,s??0)+(a??0)),u===null&&t.length>0&&(u=t.reduce((p,g)=>p+g.power,0)),{grid:o,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:d&&Number.isFinite(h)?{value:h,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:u===null?null:Math.max(0,u)}}function Xl(r,e,t){let n=r.b[0]-r.a[0],i=r.b[1]-r.a[1],o=Math.hypot(n,i)||1,s=Math.min(1,Math.max(0,((e.x-r.a[0])*n+(e.z-r.a[1])*i)/(o*o))),a=r.a[0]+n*s,l=r.a[1]+i*s,c=i/o*(a-t.x)+-n/o*(l-t.z)<0?-1:1;return{x:a,z:l,nx:c*i/o,nz:-c*n/o,distance:Math.hypot(e.x-a,e.z-l)}}function Ds(r){let e=Ul(r),t=e?r.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!t)return null;let n={exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},i=ie(t.rooms,n,t.walls??[]).walls.filter(c=>c.exterior),o=t.rooms.flatMap(c=>c.points);if(i.length===0||o.length===0)return null;let s={x:o.reduce((c,d)=>c+d[0],0)/o.length,z:o.reduce((c,d)=>c+d[1],0)/o.length},a=i.map(c=>Xl(c,e,s)).reduce((c,d)=>d.distance<c.distance?d:c),l=n.exterior/2+3;return{floorId:t.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function Ls(r,e){let t=r.floors.flatMap(g=>g.furniture.map(f=>({floor:g,item:f}))),n=g=>t.filter(f=>f.item.type===g),i=g=>!!In(g.item,e),o=g=>({kind:"device",...g}),[s,a,l,c,d]=[r.settings.roof.solar??[],n("meter"),n("inverter"),n("home_battery"),n("grid_point")],h=!!r.energy.grid||a.some(i),u=!!r.energy.solar||l.length>0&&l.every(i),p=!!r.energy.battery||c.every(g=>i(g)&&g.item.soc&&g.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:h?"ok":"todo",label:h?"chk_meter":"chk_meter_sensor",target:o(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:u?"ok":"todo",label:u?"chk_inverter":"chk_inverter_sensor",target:o(l.find(g=>!i(g))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:p?"ok":"todo",label:p?"chk_battery":"chk_battery_sensor",target:o(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},d.length>0?{state:"ok",label:"chk_grid",target:o(d[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}var Jl={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},Vs=r=>r.hass?st(r.hass,r.doc.floors):new Map,ec=ze,tc=(r,e)=>e.name||r.t(`furn_${e.type}`);function Bs(r,e){let t=Ls(r.doc,Vs(r)),n=t.filter(i=>i.state==="ok").length;return m`<section class="nf-checklist">
    <h3>☑ ${r.t("chk_title")} <span class="nf-sub">${n}/${t.length}</span></h3>
    ${C(r.t("chk_hint"))}
    ${t.map(i=>m`<button class="nf-chk nf-chk-${i.state}" ?disabled=${!r.admin&&i.state!=="ok"} @click=${()=>e.follow(i.target)}>
        <span>${Jl[i.state]}</span>${r.t(i.label)}
      </button>`)}
  </section>`}function Ns(r,e){let t=r.doc.floors.flatMap(n=>n.furniture.filter(i=>ec.includes(i.type)).map(i=>({floor:n,item:i})));return m`<section>
    <h3>⚡ ${r.t("energy_devices")}</h3>
    ${C(r.t("energy_devices_hint"))}
    ${t.length>0?m`<div class="nf-room-list">
          ${t.map(({floor:n,item:i})=>m`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(n,i)}><span>${tc(r,i)} · ${n.name}</span></button>
            </div>`)}
        </div>`:_}
    <div class="nf-actions">
      ${ze.map(n=>m`<button class="nf-btn" ?disabled=${!r.admin||!r.floor} @click=${()=>e.addDevice(n)}>+ ${r.t(`furn_${n}`)}</button>`)}
    </div>
  </section>`}var Ws=(r,e,t)=>m`<p class="nf-sub nf-pack-error">${r.t(e)} <button class="nf-btn" ?disabled=${!r.admin} @click=${t}>${r.t("energy_sign_flip")}</button></p>`;function Cs(r,e){let{energy:t}=r.doc,n=(b,v)=>r.hass?.states[b]?.attributes[v],i=ue(r.hass,b=>Fn(r.hass,b)),o=ue(r.hass,b=>q(b)&&n(b,"device_class")==="battery"),s=ue(r.hass,b=>q(b)&&(n(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(b,"unit_of_measurement")??""))),a=Vs(r),l=ar(r.doc,b=>In(b,a)),c=b=>r.replace({...structuredClone(r.doc),energy:{...r.doc.energy,...b}}),d=b=>v=>c({[b]:v==="none"?null:v}),h=r.hass?Hs(r.hass,r.doc,[],l):null,u=!!h&&(h.solar??0)<20,p=u&&h.grid!==null&&h.grid<-50,g=u&&h.battery!==null&&h.battery<-50&&(h.grid??0)<=0,f=(b,v)=>gt(r,r.t("energy_invert"),b,w=>c(v(w)));return m`<section>
    <h3>⚖ ${r.t("energy_balance")}</h3>
    ${C(r.t("energy_balance_hint"))}
    ${p?Ws(r,"energy_sign_grid",()=>c({grid_invert:!t.grid_invert})):_}
    ${g?Ws(r,"energy_sign_battery",()=>c({battery_invert:!t.battery_invert})):_}
    <div class="nf-form">
      ${Q(r,r.t("energy_grid"),t.grid,l.grid,i,d("grid"))}
      ${f(t.grid_invert,b=>({grid_invert:b}))}
      ${Q(r,r.t("energy_solar_sensor"),t.solar,l.solar[0]??null,i,d("solar"))}
      ${Q(r,r.t("energy_battery_sensor"),t.battery,l.battery[0]??null,i,d("battery"))}
      ${f(t.battery_invert,b=>({battery_invert:b}))}
      ${Q(r,r.t("energy_battery_soc"),t.battery_soc,l.soc[0]??null,o,d("battery_soc"))}
      ${Q(r,r.t("energy_consumption_sensor"),t.consumption,null,i,d("consumption"))}
      ${Q(r,r.t("energy_tariff_sensor"),t.tariff,void 0,s,d("tariff"))}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!r.admin||!r.hass} @click=${()=>e.importPrefs()}>${r.t("energy_import_prefs")}</button></div>
    ${e.note?C(e.note):_} ${C(r.t("energy_hint"))}
  </section>`}var Ks=r=>m`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${r.t("feature_name_energy")}</b></div>
  ${C(r.t("feature_text_energy"))}
</section>`;function Gs(r){let e=(t,n,i)=>m`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${t}" target="_blank" rel="noopener">${n} ${r.t(i)}</a>`;return m`<section class="nf-help">
    <h3>${r.t("help_title")}</h3>
    ${C(r.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}var Us=(r,e)=>r.floors.flatMap(t=>t.furniture).find(t=>t.type===e),nc=r=>!r||r==="none";async function js(r){let e;try{e=await r.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let t=Ts(r.hass,e),n=0,i=(o,s,a)=>{if(!a)return;let l=Us(r.doc(),o);!l&&r.canAdd()&&(r.addDevice(o),l=Us(r.doc(),o)),!(!l||!nc(l[s]))&&(r.setField(l.id,s,a),n++)};return i("meter","power",t.grid),i("inverter","power",t.solar),i("home_battery","power",t.battery),i("home_battery","soc",t.battery_soc),{kind:"done",filled:n}}var ic=/garage|carport/,rc=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,oc=/flur|diele|eingang|hall|entr|lobby/,Zs=.25,bt=r=>Math.round(r*1e3)/1e3;function sc(r,e,t){let n=e.rooms.filter(d=>d.points.length>=3),i=d=>n.find(h=>d.test(t.roomLabel(h).toLowerCase())),o=n.find(d=>e.furniture.some(h=>h.type==="parking"&&I([h.x,h.z],d.points))),s=i(ic)??o,a=i(rc),l=r==="wallbox"?s:r==="meter"?a??i(oc)??s:a??s,c=[...n].sort((d,h)=>Math.abs(Y(h.points))-Math.abs(Y(d.points)))[0];return l??t.selected??c}function ac(r,e){let[t,n]=ae(r.points),i=r.points.some((s,a)=>!e.has(a)),o=null;return r.points.forEach((s,a)=>{if(i&&e.has(a))return;let l=r.points[(a+1)%r.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(o&&c<=o.length)return;let d=[(s[0]+l[0])/2,(s[1]+l[1])/2],h=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(t-d[0])*h[0]+(n-d[1])*h[1]<0&&(h=[0-h[0],0-h[1]]),o={mid:d,inward:h,length:c}}),o}function qs(r,e,t,n){let[i,o,s]=Ge(r),a={id:T("furniture"),type:r,rotation:0,w:i,d:o,h:s,variant:null};if(r==="grid_point"){let p=Ds(e),[g,f]=p?[p.x,p.z]:n.fallback;return{...a,x:bt(g),z:bt(f)}}let l=sc(r,t,n),[c,d]=l?ae(l.points):n.fallback;if(l){let p=new Set(t.openings.filter(f=>f.room_id===l.id).map(f=>f.edge)),g=ac(l,p);g&&([c,d]=[g.mid[0]+g.inward[0]*(o/2+Zs),g.mid[1]+g.inward[1]*(o/2+Zs)])}let h={...a,x:bt(c),z:bt(d)},u=l?Ft({...t,furniture:[...t.furniture,h]},h,e.settings.wall_interior):null;return u?{...h,x:bt(u.x),z:bt(u.z),rotation:u.rotation}:h}var Nn=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let t=this.undoStack.pop();return t===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(t))}redo(e){let t=this.redoStack.pop();return t===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(t))}};var Ys=ge`
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
`;var lc=new URL(import.meta.url),cc=new URL("./nextfloor-3d.js?v=0593a48cd3b0",lc).href,Qs;function Xs(){return Qs??=import(cc),Qs}function Yt(r,e){if(!nt(e))return ye(r,`furn_${e}`);let t=j(e);return t?Oe(t,r?.language??navigator.language):ye(r,"pack_missing_item")}var Js=["weather","energy","car","sound","screens","cameras"],Cn="https://github.com/therealMRBK/NextFloor";var lr=class extends J{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return ye(this.hass,e,t)}render(){return m`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${Cn}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${Cn}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${Cn}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="nf-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nf-ext-features">
          ${Js.map(e=>m`<div class="nf-ext-feature nf-ext-on">
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
            <b>${Ae(t,this.hass?.language??"de")}</b>
            <span class="nf-sub">${this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.description?m`<span class="nf-sub">${t.description}</span>`:_}
          </div>
          ${t.builtin?m`<span class="nf-ext-state">${this.t("pack_builtin")}</span>`:this.isAdmin?m`<button class="nf-btn nf-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>`:_}
        </div>`)}
      ${this.isAdmin?m`<label class="nf-btn nf-primary nf-pack-import">
            ${this.t("pack_import")}
            <input type="file" accept=".nfpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
          </label>`:_}
      ${this._packMsg?m`<p class="nf-sub ${this._packMsg.ok?"nf-notice":"nf-pack-error"}">${this._packMsg.text}</p>`:_}
      <p class="nf-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],o=[];for(let a of n)try{let l=await Ir(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},h=`pack_error_${c}`,u=this.t(h,{detail:d??String(l)});o.push(`${a.name}: ${u===h?this.t("pack_error_other",{detail:d??String(l)}):u}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:Ae(e,this.hass?.language??"de")}))||(await Pr(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[pt,Rn,ge`
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",lr);var ea=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),Kn=10,$=r=>Math.round(r*1e3)/1e3,ta={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},hc=new Set(["parking","stairwell","rug","grid_point"]),cr=class extends J{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new Nn(100);host=this.makeHost();backup=this.makeBackup();settingsActions={useRoofSections:()=>{this.useRoofSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("nextfloor.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("nextfloor.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(e,t){return ye(this.hass,e,t)}makeBackup(){let e=this;return new Ln({get hass(){return e.hass},get doc(){return e._doc},t:(t,n)=>e.t(t,n),adopt:t=>{e.setDoc(t),e._floorId=t.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:t=>e._notice=t,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(t,n)=>e.t(t,n),change:t=>e.change(t),replace:t=>e.setDoc(t)}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&Vr(this.packs??[]),e.has("hass")&&this.hass&&!Do(this.hass.language)&&Lo(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,o=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(u=>u.id===t);if(!l)continue;let[c,d]=Hi(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let h=Ft(a,l,o);h&&Object.assign(l,h)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(o=>{for(let s of o.floors){let a=s.placements.find(d=>d.entity_id===t);if(!a)continue;let[l,c]=Hi(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return _;let e=this.furnitureItem,t=this.device;if(e){let n=fi(e),i=(o,s,a=.05)=>m`<label class="nf-3d-size" title=${this.t(`size_${o}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[o]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[o]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return m`<div class="nf-3d-bar">
        <span>${Yt(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?m`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??ai(this.floor,e))*100)/100)}
                @change=${o=>{let s=parseFloat(o.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:_}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=W(t.entity_id),i=n==="light",o=n?on(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return m`<div class="nf-3d-bar">
        <span>${L(this.hass,t.entity_id)}</span>
        ${i?m`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>m`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:_}
        <label class="nf-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((t.y??o)*100)/100)}
            @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&a>=0&&this.updateDevice({y:Math.round(a*1e3)/1e3})}}
          />
        </label>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:(((t.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.updateDevice({rotation:((t.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",t.entity_id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteItem("device",t.entity_id)}>${this.t("delete")}</button>
      </div>`}return _}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=U(t),i=null,o=(a,l,c,d,h=!1)=>{if(!c||h)return;let u=En(c,e.o,e.d);!u||!nr(c,d,u.u,u.s)||i&&i.t<=u.t||(i={id:a,win:l,t:u.t,du:u.u-d.u,ds:u.s-d.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])o(a.id,!1,he(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,Ye(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(p=>p.id===t.id):void 0,o=t.win?i?Ye(i):void 0:n.settings.roof.solar?.find(p=>p.id===t.id);if(!o)return;let s=he(n,o),a=s?.unbounded?[s]:t.win?U(n):[...U(n),...Le(n)],l=null;for(let p of a){let g=En(p,e.o,e.d);g&&tr(p,g.u,g.s)&&(!l||g.t<l.t)&&(l={face:p,...g})}if(!l)return;let c=l.face,d=.05,h=p=>$(Math.round(p/d)*d),u=Ve(c,{...o,face:c.key,u:h(l.u-t.du),v:h(l.s-t.ds),tilt:c.flat?o.tilt??15:o.tilt});t.moved=!0,this.change(p=>{if(t.win){let f=p.settings.roof.windows?.find(b=>b.id===t.id);f&&Object.assign(f,{face:c.key,...u});return}let g=p.settings.roof.solar?.find(f=>f.id===t.id);g&&Object.assign(g,{face:c.key,...u},c.flat&&g.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return m`<div class="nf-editor-3d">
      ${this.houseTool?_:m`<div class="nf-seg nf-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?ze:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${e=>{e.detail.id?this.selectFrom3d("furniture",e.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${e=>{e.detail.id?this.selectFrom3d("device",e.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),this._sideOpen=!1}}
        @room-tap=${e=>{e.detail.floorId&&(this._floorId=e.detail.floorId),e.detail.roomId?this.selectFrom3d("room",e.detail.roomId):this._sideOpen=!1}}
      ></nf-view3d>
    </div>`}updated(){for(let t of this.renderRoot.querySelectorAll("select option[selected]"))t.selected||(t.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())!this._images[t]&&!this.loadingImages.has(t)&&this.loadImage(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&this.history.record(t),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(e(i,o),this.setDoc(i,n?t:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this._roomId)||(this._roomId=null),this._vertex=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:o}=this._view;return[(e-i)/n,(t-o)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?te(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,o=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:o,oy:s}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-o)*l,oy:n-(n-s)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=Kn/this._view.scale,o=this.floor?.rooms??[],s=[];for(let g of o)g.points.forEach((f,b)=>{t&&g.id===t.roomId&&(t.index===void 0||t.index===b)||s.push(f)});let a=null,l=i;for(let g of s){let f=Math.hypot(g[0]-e[0],g[1]-e[1]);f<l&&(l=f,a=g)}if(a)return this._guides={point:a},[a[0],a[1]];for(let g of o)if(!(t&&g.id===t.roomId))for(let f=0;f<g.points.length;f++){let b=g.points[f],v=g.points[(f+1)%g.points.length],w=v[0]-b[0],y=v[1]-b[1],x=w*w+y*y;if(x<1e-9)continue;let k=((e[0]-b[0])*w+(e[1]-b[1])*y)/x;if(k<=0||k>=1)continue;let S=[b[0]+k*w,b[1]+k*y],M=Math.hypot(S[0]-e[0],S[1]-e[1]),A=this._doc.settings.grid;Math.abs(y)<1e-9&&(S[0]=Math.min(Math.max(Math.round(S[0]/A)*A,Math.min(b[0],v[0])),Math.max(b[0],v[0]))),Math.abs(w)<1e-9&&(S[1]=Math.min(Math.max(Math.round(S[1]/A)*A,Math.min(b[1],v[1])),Math.max(b[1],v[1]))),M<l&&(l=M,a=S)}if(a)return this._guides={point:a},[$(a[0]),$(a[1])];let c=this._doc.settings.grid,d=[$(Math.round(e[0]/c)*c),$(Math.round(e[1]/c)*c)],h=i,u=i,p={};for(let g of s)Math.abs(g[0]-e[0])<h&&(h=Math.abs(g[0]-e[0]),d[0]=g[0],p.x=g[0]),Math.abs(g[1]-e[1])<u&&(u=Math.abs(g[1]-e[1]),d[1]=g[1],p.z=g[1]);return this._guides=p,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&ea.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=e.target;if(this._bgLevel&&this.isAdmin&&this.floor?.background){let y=[...this._bgLevel,i];y.length<2?this._bgLevel=y:this.applyBgLevel(y[0],y[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let y=this.floor.background,x=this._images[y.image_id],k=y.width*(x?.aspect??1),S=[y.x+y.width/2,y.z+k/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-S[1],i[0]-S[0]),rot:y.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&this.floor?.background){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let y=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:y.x,bz:y.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&this.floor?.background){let y=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:y.x,bz:y.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let y=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:y,end:y};return}if(this._tool==="roof"||this._tool==="energy"){let y=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),x=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),k=o.closest("[data-roof]")?.getAttribute("data-roof"),S=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(S){this._solarId=null,this.selectItem("furniture",S),this.drag=this.isAdmin?{kind:"furniture",id:S,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let M=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,A=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(A&&this.isAdmin){this.drag={kind:"solarturn",id:A,base:this._doc,moved:!1};return}if(M){let z=o.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&M===this._solarId&&z&&this.isAdmin){this.toggleSolarCell(z),this.drag={kind:"pan",last:n};return}M!==this._solarId&&(this._solarPick=!1),this._solarId=M,this._roofId=null;let P=this._doc.settings.roof.solar?.find(fe=>fe.id===M),V=P?he(this._doc,P)??void 0:void 0,D=V?this.faceHit(V,i):null,$e=P&&D?{du:D.u-P.u,ds:Number.isNaN(D.s)?0:D.s-P.v}:null;this.drag=this.isAdmin&&!P?.locked?{kind:"solarmove",id:M,start:i,startScreen:n,base:this._doc,moved:!1,grab:$e}:{kind:"pan",last:n};return}let R=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(R){this._roofWinId=R,this._roofId=null;let z=this._doc.settings.roof.windows?.find($e=>$e.id===R),P=z?U(this._doc).find($e=>$e.key===z.face):void 0,V=P?Gt(P,i):null,D=z&&V?{du:V.u-z.u,ds:V.s-z.v}:null;this.drag=this.isAdmin&&!z?.locked?{kind:"solarmove",id:R,start:i,startScreen:n,base:this._doc,moved:!1,grab:D,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let F=this._tool==="energy"?o.closest(".nf-energy-item")?.getAttribute("data-furniture"):null;if(F){this._solarId=null,this.selectItem("furniture",F),this.drag=this.isAdmin?{kind:"furniture",id:F,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(x&&this.isAdmin){let[z,P]=x.split(":");this.drag={kind:"roofvertex",id:z,index:Number(P),base:this._doc,moved:!1}}else if(y&&this.isAdmin){let[z,P,V]=y.split(":");this.drag={kind:"roofcorner",id:z,corner:[P==="1"?1:0,V==="1"?1:0],base:this._doc,moved:!1}}else if(k){let z=this.roofFixed(this._doc.settings.roof.sections?.find(P=>P.id===k));z&&this._roofId===k&&(this._fixedHint=!0),this._roofId=k,this.drag=this.isAdmin&&!z?{kind:"roofmove",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let z=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:z,end:z,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let y=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:y,end:y,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let s=o.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=o.closest("[data-opening]");if(a){let y=a.getAttribute("data-opening");this.selectItem("opening",y),this.drag=this.isAdmin?{kind:"opening",id:y,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=o.closest("[data-resize]");if(l&&this.isAdmin){let[y,x,k]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:y,corner:[x==="1"?1:-1,k==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=o.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let h=o.closest("[data-furniture]");if(h&&!o.closest("[data-vertex], [data-mid]")){let y=h.getAttribute("data-furniture");this.selectItem("furniture",y),this.drag=this.isAdmin?{kind:"furniture",id:y,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let u=o.closest("[data-vertex]"),p=o.closest("[data-mid]");if(u&&this.room&&this.isAdmin){this._vertex=Number(u.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(p&&this.room&&this.isAdmin){let y=Number(p.getAttribute("data-mid")),x=this.room.points,k=x[y],S=x[(y+1)%x.length],M=[$((k[0]+S[0])/2),$((k[1]+S[1])/2)],A=this._doc,R=this.room.id;this.change((F,z)=>{let P=z.rooms.find(D=>D.id===R);P.points.splice(y+1,0,M),P.wall_heights&&P.wall_heights.splice(y+1,0,P.wall_heights[y]??null),P.wall_thickness&&P.wall_thickness.splice(y+1,0,P.wall_thickness[y]??null);let V=Math.hypot(M[0]-k[0],M[1]-k[1]);for(let D of z.openings)D.room_id!==R||D.wall||(D.edge>y?D.edge+=1:D.edge===y&&D.offset>V&&(D.edge=y+1,D.offset=$(D.offset-V)))},A,!1),this._vertex=y+1,this.drag={kind:"vertex",roomId:R,index:y+1,base:A,moved:!0};return}let g=o.closest("[data-wall-end]");if(g&&this.isAdmin){let[y,x]=g.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:y,end:x,start:i,startScreen:n,base:this._doc,moved:!1};return}let f=o.closest("[data-free-wall]");if(f){let y=f.getAttribute("data-free-wall");this.selectItem("wall",y),this.drag=this.isAdmin?{kind:"wallmove",id:y,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let b=o.closest("[data-out-vertex]");if(b&&this.isAdmin){let[y,x]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:y,index:Number(x),base:this._doc,moved:!1};return}let v=o.closest("[data-outdoor]");if(v&&!o.closest("[data-room]")&&!this.roomAt(i)){let y=v.getAttribute("data-outdoor");this.selectItem("outdoor",y),this.drag=this.isAdmin?{kind:"outdoor",id:y,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let w=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(w){w!==this._roomId&&(this._vertex=null),this.selectItem("room",w),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let o=this.localPoint(e);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,e.altKey);e.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!o)return;let s;if(i.end){let a=this.snap(n,void 0,e.altKey);s=i.end==="a"?{a,b:o.b}:{a:o.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;s={a:[$(o.a[0]+l),$(o.a[1]+c)],b:[$(o.b[0]+l),$(o.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),s),i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!o)return;let s=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>I([c.x,c.z],o.points)).map(c=>c.entity_id));this.change((c,d)=>{let h=d.rooms.find(u=>u.id===i.roomId);h.points=o.points.map(([u,p])=>[$(u+s[0]),$(p+s[1])]),d.placements=a.placements.map(u=>l.has(u.entity_id)?{...u,x:$(u.x+s[0]),z:$(u.z+s[1])}:u)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=$(Math.round((n[0]-i.start[0])/o)*o),a=$(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(h=>h.id===i.id);d&&(Object.assign(d,{x0:$(l.x0+s),x1:$(l.x1+s),z0:$(l.z0+a),z1:$(l.z1+a)}),l.points&&(d.points=l.points.map(([h,u])=>[$(h+s),$(u+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(u=>u.id===i.id),s=o?he(i.base,o):null;if(!o||!s)return;let[a,l]=kn(s,o),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let h=ut(i.base,o,c);this.change(u=>{let p=u.settings.roof.solar?.find(g=>g.id===i.id);p&&Object.assign(p,h)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(b=>b.id===i.id):void 0,s=i.win?o?Ye(o):void 0:i.base.settings.roof.solar?.find(b=>b.id===i.id),a=i.win?U(i.base):[...U(i.base),...this._floorId?Le(i.base,this._floorId):[]],l=s?he(i.base,s,a):null;if(!s||!l)return;let c=e.altKey?.01:.05,d=b=>$(Math.round(b/c)*c),h=l.unbounded?null:er(a,n),u=l,p,g;if(h&&i.grab)u=h.face,p=d(h.u-i.grab.du),g=Number.isNaN(h.s)?h.face.key===s.face?s.v:Math.max(0,h.face.ls-1.5):d(h.s-i.grab.ds);else{let b=n[0]-i.start[0],v=n[1]-i.start[1],w=[l.es[0],l.es[2]],y=w[0]*w[0]+w[1]*w[1]||1;p=d(s.u+b*l.eu[0]+v*l.eu[2]),g=d(s.v+(b*w[0]+v*w[1])/y)}let f=Ve(u,{...s,face:u.key,u:p,v:g,tilt:u.flat?s.tilt??15:s.tilt});this.change(b=>{if(i.win){let w=b.settings.roof.windows?.find(y=>y.id===i.id);w&&Object.assign(w,{face:u.key,...f});return}let v=b.settings.roof.solar?.find(w=>w.id===i.id);v&&Object.assign(v,{face:u.key,...f},u.flat&&v.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!s)return;let a=dn(s.points);this.change((l,c)=>{let d=c.outdoor.find(g=>g.id===i.id);if(!d)return;let h=s.points.map(g=>[...g]),u=i.index,p=s.points[u];h[u]=[$(o[0]),$(o[1])],a&&s.points.forEach((g,f)=>{f!==u&&(Math.abs(g[0]-p[0])<1e-6&&(h[f][0]=$(o[0])),Math.abs(g[1]-p[1])<1e-6&&(h[f][1]=$(o[1])))}),d.points=h},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],s=n[1]-i.start[1];this.change((a,l)=>{l.background&&(l.background.x=$(i.bx+o),l.background.z=$(i.bz+s))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let a=o.width*s.aspect,l=[o.x+o.width/2,o.z+a/2],c=Math.atan2(n[1]-l[1],n[0]-l[0]),d=i.rot+(c-i.start)*180/Math.PI;d=e.shiftKey?Math.round(d/15)*15:Math.round(d*10)/10,d=((d+180)%360+360)%360-180,this.change((h,u)=>{u.background&&(u.background.rotation=d)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,s=o?this._images[o.image_id]:void 0;if(!o||!s)break;let[a]=this.bgLocal(o,n,s.aspect),l=Math.max(.5,$(a));this.change((c,d)=>{d.background&&(d.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[$(o[0]),$(o[1])],Object.assign(a,gn(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=$(o[0]):a.x0=$(o[0]),i.corner[1]?a.z1=$(o[1]):a.z0=$(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId),s=o?.openings.find(c=>c.id===i.id),a=s&&o?ct(s,o.rooms,o.walls??[]):null;if(!s||!a)return;let l=this.offsetOnEdge(a.room,a.edge,n,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(h=>h.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(h=>h.id===this._floorId)?.furniture.find(h=>h.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=$(Math.round((o.x+n[0]-i.start[0])/s)*s),l=$(Math.round((o.z+n[1]-i.start[1])/s)*s),c=o.rotation,d=e.altKey?null:this.snapToWall({...o,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((h,u)=>Object.assign(u.furniture.find(p=>p.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(h=>h.id===i.id).points=o.points.map(([h,u])=>[$(h+a),$(u+l)]),i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!o)return;let s=ao(o,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=e.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{rotation:s,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=$(Math.round((o.x+n[0]-i.start[0])/s)*s),l=$(Math.round((o.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(h=>h.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&ea.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,o]=t.start,[s,a]=t.end;if(Math.abs(s-i)>=.2&&Math.abs(a-o)>=.2){let l=[Math.min(i,s),Math.min(o,a)],c=[Math.max(i,s),Math.max(o,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.hole?this.addHole(l,c):t.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,o=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=Kn/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let h=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);h<a&&(a=h,o=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return o}roomAt(e){return(this.floor?.rooms??[]).filter(i=>I(e,i.points)).sort((i,o)=>_e(i.points)-_e(o.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&_e(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=it(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,it(e,t,"right"),it(it(e,t,"right"),n,"down"),it(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>H(this.hass,a,2);return m`<section>
      <h3>${this.t("measure")}</h3>
      ${t?m`<p class="nf-sub">${this.t("measure_from",{x:s(t[0]),z:s(t[1])})}</p>
            <div class="nf-form">
              <label class="nf-field nf-wide"
                >${this.t("measure_length")}
                <input
                  class="nf-measure-input"
                  type="number"
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${String(this._measureLen)}
                  @input=${a=>this._measureLen=parseFloat(a.target.value.replace(",","."))||0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="nf-arrows nf-wide">
                ${o.map(([a,l])=>m`<button class="nf-btn nf-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?m`<ol class="nf-measure-list">
                  ${e.slice(1).map((a,l)=>m`<li>${s(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:_}
            <div class="nf-actions">
              <button class="nf-btn nf-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="nf-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?m`<p class="nf-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:_}`:m`<p class="nf-sub">${this.t("measure_start")}</p>`}
      <h4 class="nf-lib-head">${this.t("rect_by_size")}</h4>
      <div class="nf-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="nf-btn nf-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="nf-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(e,t){if(!this.floor)return;let n={id:T("wall"),a:[$(e[0]),$(e[1])],b:[$(t[0]),$(t[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(e){let t=this._wallId;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===t),e))}deleteFreeWall(){let e=this._wallId;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this._wallId=null)}renderFreeWalls(e){return E`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[o,s]=this.toScreen(t.b),a=t.id===this._wallId;return E`<g data-free-wall=${t.id} class=${`nf-free-wall${a?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="nf-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!li(t,!0,this._doc.settings)?E`<g class="nf-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="nf-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="nf-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${o} cy=${s} r="16" class="nf-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:_}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=o=>{let a=Math.max(.1,o)/(n||1);this.updateFreeWall({b:[$(e.a[0]+(e.b[0]-e.a[0])*a),$(e.a[1]+(e.b[1]-e.a[1])*a)]})};return m`<section>
      <div class="nf-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="nf-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,o=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,o))}),.01,.02)}
        ${this.num(this.t("wall_height"),e.height??this.floor?.height??2.5,o=>this.updateFreeWall({height:o>=(this.floor?.height??2.5)-.005?null:Math.max(.05,o)}),.05,.05)}
      </div>
      ${t?m`<div class="nf-actions">
            <button class="nf-btn nf-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:_}
      <p class="nf-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(e,t){if(!this.floor)return;let n={id:T("hole"),type:"stairwell",x:$((e[0]+t[0])/2),z:$((e[1]+t[1])/2),w:$(t[0]-e[0]),d:$(t[1]-e[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t={id:T("outdoor"),type:"lawn",points:e.map(([n,i])=>[$(n),$(i)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(e){let t=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===t),e))}deleteOutdoor(){let e=this._outdoorId;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this._outdoorId=null)}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t={...e,id:T("outdoor"),points:e.points.map(([n,i])=>[$(n+.5),$(i+.5)])};this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=T("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:t,name:this.t("new_room",{n}),area_id:null,points:e.map(([s,a])=>[$(s),$(a)]),floor_material:"wood"})),this._roomId=t,this._vertex=null,this._tool="select"}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(ta,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[o,s]=ta[e.key];this.nudge(o*i,s*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let o=s=>[$(s[0]+e),$(s[1]+t)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(a=>a.entity_id===s))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=o([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=o([c.x,c.z]))})}else if(this._openingId){let s=this.opening,a=s?ct(s,n.rooms,n.walls??[]):null;if(!s||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,h=(e*(c[0]-l[0])+t*(c[1]-l[1]))/d;if(Math.abs(h)<1e-9)return!0;let u=Math.min(s.width,d)/2;this.updateOpening({offset:$(Math.min(d-u,Math.max(u,s.offset+h)))})}else if(this._wallId){let s=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[o(c.a),o(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(o))})}else if(this._roomId){let s=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>I([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,h)=>{let u=h.rooms.find(p=>p.id===s);if(a!==null&&a<u.points.length){u.points[a]=o(u.points[a]);return}u.points=u.points.map(o);for(let p of h.placements)c.has(p.entity_id)&&([p.x,p.z]=o([p.x,p.z]))})}else return!1;return!0}get freeHaFloors(){let e=new Set(this._doc.floors.map(t=>t.ha_floor));return Object.values(this.hass?.floors??{}).filter(t=>!e.has(t.floor_id)).sort((t,n)=>(t.level??99)-(n.level??99)||t.name.localeCompare(n.name))}unplacedAreas(e){if(!e.ha_floor)return[];let t=new Set(this._doc.floors.flatMap(n=>n.rooms.map(i=>i.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===e.ha_floor&&!t.has(n.area_id)).sort((n,i)=>n.name.localeCompare(i.name))}addFloor(e=null){let t=this._doc.floors,n=T("floor"),i=e?.name??(t.length===0?this.t("default_floor"):this.t("new_floor",{n:t.length})),o={...ro(n,i,oo(t,e?.level)),ha_floor:e?.floor_id??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(a<0?s.floors.length:a,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(e){let t=this.unplacedAreas(e);if(!t.length)return;let n=so(e,t,()=>T("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._doc.floors.findIndex(o=>o.id===this._floorId),n=t+e;if(t<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[t],i.floors[n]]=[i.floors[n],i.floors[t]],this.setDoc(i)}deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this._roomId=null}deleteRoom(){let e=this._roomId;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>{let i=n.rooms.find(o=>o.id===e);n.rooms=n.rooms.filter(o=>o.id!==e),n.openings=n.openings.filter(o=>o.room_id!==e||o.wall),i&&(n.placements=n.placements.filter(o=>!I([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=T("room");this.change((n,i)=>i.rooms.push({...structuredClone(e),id:t,points:e.points.map(([o,s])=>[$(o+.5),$(s+.5)])})),this._roomId=t}roofFixed(e){return!!e&&(!!e.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let e=[...this._doc.floors].sort((t,n)=>n.elevation-t.elevation);return e.length<2?_:m`<div class="nf-seg nf-dev-source">
      ${e.map(t=>m`<button aria-pressed=${t.id===this._floorId} @click=${()=>this._floorId=t.id}>${t.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(e=>e.id===this._roofId):void 0}useRoofSections(e=!1){if(!this.isAdmin)return;let t=(this._doc.settings.roof.sections??[]).length>0;e&&t&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=qi(n,()=>T("roof")))}),this._roofId=null)}addRoofSection(e,t){if(!this.isAdmin)return;let n=ji(this._doc,e[0],e[1],t[0],t[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),o=n===null,s=$(n??i+2.4),a=o?6:this._doc.settings.roof.pitch||35,l={id:T("roof"),x0:$(e[0]),z0:$(e[1]),x1:$(t[0]),z1:$(t[1]),shape:o?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let e=this.floor,t=this._roofId;if(!e||!t||!this.isAdmin)return;let n=Bi(e.rooms,e.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[$(o),$(s)]);this.updateRoofSection({shape:"flat",points:i,...gn(i)})}addDormer(e){let t=this.roofSection;if(!t||!this.isAdmin)return;let n=Ci(t,e,T("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(e){let t=this._roofId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===t);i&&Object.assign(i,e)})}deleteRoofSection(){let e=this._roofId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this._roofId=null)}duplicateRoofSection(){let e=this.roofSection;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:T("roof"),x0:$(e.x0+1),x1:$(e.x1+1),z0:$(e.z0+1),z1:$(e.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this._roofId=t.id}renderRoofSections(){let e=this._doc.settings.roof,t=e.type==="custom"?e.sections??[]:[];return E`<g class="nf-roof-layer">${t.map((n,i)=>{let o=n.id===this._roofId,s=Z(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=vn(t,n),c=l?Z(Ki(l,n)):s,d=(a??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(v=>this.toScreen(v)),h=(v,w)=>{let[y,x]=this.toScreen(v),[k,S]=this.toScreen(w);return E`<line x1=${y} y1=${x} x2=${k} y2=${S} />`},u=n.shape==="flat"||n.shape==="parapet"?null:dt(n,{u0:0,u1:0,a:0,b:0}),p=u?E`${u.ridges.map(([v,w])=>h(s.at(v[0],v[1]),s.at(w[0],w[1])))}`:_,[g,f]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),b=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${H(this.hass,at(n),1)} m`;return E`<g data-roof=${n.id} class=${`nf-roof-sec${o?" nf-roof-sel":""}`}>
          <polygon points=${d.map(v=>v.join(",")).join(" ")} />
          <g class="nf-roof-ridge">${p}</g>
          <text x=${g} y=${f-14}>${b}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((v,w)=>{let[y,x]=this.toScreen(v);return E`<g class="nf-vertex" data-roof-vertex=${`${n.id}:${w}`}><circle cx=${y} cy=${x} r="16" class="nf-hit" /><circle cx=${y} cy=${x} r="6" /></g>`}):_}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([v,w])=>{let[y,x]=this.toScreen([v?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),w?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return E`<g class="nf-vertex" data-roof-corner=${`${n.id}:${v}:${w}`}><circle cx=${y} cy=${x} r="16" class="nf-hit" /><circle cx=${y} cy=${x} r="6" /></g>`}):_}`})}</g>`}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:Gt(e,t)}renderSolarFields(){let e=this._doc.settings.roof.solar??[];if(!e.length)return _;let t=U(this._doc);return E`<g class="nf-solar-layer">${e.map(n=>{let i=he(this._doc,n,t);if(!i||i.wall&&i.wall.floorId!==this._floorId)return _;let o=n.id===this._solarId,s=_;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=kn(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...se(i,n,!0).flatMap(f=>f.corners.map(b=>Math.hypot(b[0]-a,b[2]-l))))*.5,[h,u]=this.toScreen([a,l]),[p,g]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);s=E`<g class="nf-rotate" data-solar-turn=${n.id}>
          <line x1=${h} y1=${u} x2=${p} y2=${g} />
          <circle cx=${p} cy=${g} r="16" class="nf-hit" />
          <circle cx=${p} cy=${g} r="8" />
          <path d="M${p-4} ${g-1}a4 4 0 1 1 2 3.5" />
        </g>`}return E`<g data-solar=${n.id} class=${`nf-solar${o?" nf-solar-sel":""}${o&&this._solarPick?" nf-solar-pick":""}`}>${se(i,n,o).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[a.corners[0],a.corners[1]].flatMap((d,h)=>{let u=[d[0],d[2]],p=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return h===0?[u,p]:[p,u]}):a.corners.map(d=>[d[0],d[2]]);return E`<polygon data-cell=${a.cell} class=${a.skipped?"nf-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let e=this._doc.settings.roof.windows??[];if(!e.length)return _;let t=new Map(U(this._doc).map(n=>[n.key,n]));return E`<g class="nf-roofwin-layer">${e.map(n=>{let i=t.get(n.face),o=i?Qi(i,n):null;return o?E`<g data-roofwin=${n.id} class=${`nf-roofwin${n.id===this._roofWinId?" nf-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:_})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let e=U(this._doc).filter(i=>!i.flat),t=Ut(e,this._doc.settings.north??0)??U(this._doc)[0];if(!t)return;let n=Mn(t,T("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(e){let t=this._roofWinId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=U(n).find(s=>s.key===i.face);o&&Object.assign(i,Ve(o,Ye(i)))})}deleteRoofWindow(){let e=this._roofWinId;!e||!this.isAdmin||(this.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this._roofWinId=null)}renderRoofWindowList(){let e=this._doc.settings.roof.windows??[],t=new Map(U(this._doc).map(n=>[n.key,n]));return m`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="nf-sub">${this.t(t.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${e.length?m`<div class="nf-room-list">
            ${e.map((n,i)=>{let o=t.get(n.face);return m`<div class="nf-row">
                <button class="nf-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:_}
      <div class="nf-actions"><button class="nf-btn" ?disabled=${!this.isAdmin||!t.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(e){let t=this.isAdmin,n=U(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===e.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>ir(l)||q(l));return m`<button class="nf-btn nf-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="nf-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${t?m`<button class="nf-btn nf-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:_}
        </div>
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!t} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...Mn(c,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})}}>
              ${n.map(l=>m`<option value=${l.key} ?selected=${l.key===e.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.num(this.t("width"),e.w??.78,l=>i({w:Math.max(.3,Math.min(4,$(l)))}),.01,.3)}
          ${this.num(this.t("height_m"),e.h??1.18,l=>i({h:Math.max(.3,Math.min(4,$(l)))}),.01,.3)}
          ${this.num(this.t("solar_u"),e.u,l=>i({u:$(l)}),.05)}
          ${this.num(this.t("solar_v"),e.v,l=>i({v:$(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),e.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),e.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),e.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),e.window??null,void 0,s,l=>i({window:l==="none"?null:l}))}
          <label class="nf-field nf-wide"
            >${this.t("roof_window_name")}
            <input .value=${e.name??""} ?disabled=${!t} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="nf-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="nf-sub">${this.t("roof_window_hint")}</p>
        ${t?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:_}
      </section>`}renderEnergyMarkers(){let e=this.floor;if(!e)return _;let t={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};return E`<g class="nf-energy-markers">${e.furniture.filter(n=>ze.includes(n.type)).map(n=>{let[i,o]=this.toScreen([n.x,n.z]),s=n.id===this._furnitureId;return E`<g data-energy-device=${n.id} class=${`nf-energy-marker${s?" nf-energy-marker-sel":""}`}>
          <circle cx=${i} cy=${o} r="17" />
          <text x=${i} y=${o+6} class="nf-energy-icon">${t[n.type]??"\u26A1"}</text>
          ${s?E`<text x=${i} y=${o+32} class="nf-energy-name">${this.t(`furn_${n.type}`)}</text>`:_}
          <title>${this.t(`furn_${n.type}`)}</title>
        </g>`})}</g>`}faceLabel(e){if(e.key===xe)return this.t("solar_ground");if(e.wall){let i=this._doc.floors.find(o=>o.id===e.wall.floorId);return`${this.t("solar_wall")} ${i?.name??""} \xB7 ${this.t(`compass_${An(e,this._doc.settings.north??0)}`)} \xB7 ${H(this.hass,e.lu,1)} m`}let t=this._doc.settings.roof.sections??[],n=e.section?this.t("solar_section",{n:t.findIndex(i=>i.id===e.section)+1}):this.t("solar_main");return e.flat?`${n} \xB7 ${this.t("solar_flat")}`:`${n} \xB7 ${this.t(`compass_${An(e,this._doc.settings.north??0)}`)} \xB7 ${Math.round(e.pitch)}\xB0`}addSolarField(){if(!this.isAdmin)return;let e=U(this._doc),t=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Ut(e.filter(s=>!t.has(s.key)),n)??Ut(e,n);if(!i)return;let o=Kt(i,T("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(e){this._solarId=e,this._roofId=null;let t=this._doc.settings.roof.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&(this._floorId=t.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let e=this._floorId??this._doc.floors[0]?.id,t=e?Ji(this._doc,T("pv"),e):null;t&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],t]),this._solarId=t.id)}addGroundField(){if(!this.isAdmin)return;let e=Sn(this._doc,T("pv"));this.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this._solarId=e.id}updateSolar(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=he(n,i);o&&Object.assign(i,Ve(o,i))})}setSolarString(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof,o=i.solar?.find(a=>a.id===t);if(!o)return;if(e==="new"){let a=i.strings??[],l={id:T("str"),name:this.t("solar_string_n",{n:a.length+1}),entity:o.entity??null,inverter:null};i.strings=[...a,l],o.string=l.id}else o.string=e;let s=new Set((i.solar??[]).map(a=>a.string).filter(Boolean));i.strings=(i.strings??[]).filter(a=>s.has(a.id))})}updateSolarString(e){let n=this._doc.settings.roof.solar?.find(i=>i.id===this._solarId)?.string;!n||!this.isAdmin||this.change(i=>{let o=i.settings.roof.strings?.find(s=>s.id===n);o&&Object.assign(o,e)})}toggleSolarCell(e){this.updateSolarField(t=>{let n=new Set(t.skip??[]);n.has(e)?n.delete(e):n.add(e),t.skip=n.size?[...n].sort():null})}updateSolarField(e){let t=this._solarId;!t||!this.isAdmin||this.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);i&&e(i)})}deleteSolar(){let e=this._solarId;!e||!this.isAdmin||(this.change(t=>{let n=t.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==e);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let e=this._doc.settings.roof.solar??[],t=U(this._doc),n=new Map(e.map(o=>[o.id,he(this._doc,o,t)])),i=this.isAdmin;return m`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="nf-sub">${this.t(t.length?"solar_hint":"solar_no_roof")}</p>
      ${e.length?m`<div class="nf-room-list">
            ${e.map((o,s)=>{let a=n.get(o.id),l=a?se(a,o).length:0;return m`<div class="nf-row">
                <button
                  class="nf-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:H(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:_}
      <div class="nf-actions">
        <button class="nf-btn nf-primary" ?disabled=${!i||!t.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="nf-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="nf-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?m`<h4 class="nf-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=e.filter(d=>d.string===o.id),a=s.map(d=>n.get(d.id)?se(n.get(d.id),d).length:0),l=a.reduce((d,h)=>d+h,0),c=s.reduce((d,h,u)=>d+a[u]*(h.wp??400)/1e3,0);return m`<p class="nf-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:H(this.hass,c,1)})}</p>`})}`:_}
    </section>`}renderSolarForm(e){let t=this.isAdmin,n=U(this._doc),i=Le(this._doc),o=he(this._doc,e,n),s=e.face===xe,a=o?se(o,e).length:0,l=Wt(e),c=l.reduce((p,g)=>p+g,0)-(e.skip?.length??0),d=this.entityOptions(p=>this.isPowerSensor(p)),h=p=>this.updateSolar(p),u=(this._doc.settings.roof.solar??[]).findIndex(p=>p.id===e.id)+1;return m`<button class="nf-btn nf-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="nf-h3row">
          <h3>☀ ${e.name||`${this.t("solar_field")} ${u}`}</h3>
          ${t?m`<button class="nf-btn nf-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!e.locked})}>
                ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:_}
        </div>
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!t}
              .value=${e.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${p=>h({name:p.target.value.trim()||null})}
          /></label>
          <label class="nf-field nf-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!t}
              @change=${p=>{let g=p.target.value,f={portrait:e.portrait,look:e.look,name:e.name,string:e.string,entity:e.entity,module_w:e.module_w,module_h:e.module_h,wp:e.wp};g===xe&&h({...Sn(this._doc,e.id),...f,rows:e.rows,cols:e.cols});let b=n.find(w=>w.key===g);b&&h($n(b,{...e,...f}));let v=i.find(w=>w.key===g);v&&h($n(v,{...e,...f,rows:1}))}}
            >
              ${o?_:m`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(p=>m`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
              <option value=${xe} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(p=>m`<option value=${p.key} ?selected=${p.key===e.face}>${this.faceLabel(p)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,p=>{let g=Math.max(1,Math.min(40,Math.round(p)));h(e.layout?.length?{layout:Array.from({length:g},(f,b)=>e.layout[b]??e.layout[e.layout.length-1]),rows:g}:{rows:g})},1,1)}
          <label class="nf-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!t}
              .value=${e.layout?.length?e.layout.join(", "):String(e.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${p=>{let g=p.target.value.split(/[,;\s]+/).map(f=>parseInt(f,10)).filter(f=>Number.isFinite(f)&&f>=0);g.length&&(g.length===1?h({cols:Math.max(1,Math.min(60,g[0])),layout:null,skip:null}):h({layout:g.slice(0,40).map(f=>Math.min(60,f)),rows:Math.min(40,g.length),cols:Math.max(1,...g),skip:null}))}}
          /></label>
        </div>
        <p class="nf-sub">
          ${o&&!o.unbounded?m`${this.t("solar_face_size",{w:H(this.hass,o.lu,1),h:H(this.hass,o.ls,1)})} · `:_}${this.t("solar_cols_hint")}
        </p>
        ${e.layout?.length&&new Set(e.layout).size>1?m`<div class="nf-seg nf-dev-source">
              ${["left","center","right"].map(p=>m`<button aria-pressed=${(e.align??"left")===p} ?disabled=${!t} @click=${()=>h({align:p})}>${this.t(`solar_align_${p}`)}</button>`)}
            </div>`:_}
        <div class="nf-seg nf-dev-source">
          <button aria-pressed=${e.portrait!==!1} ?disabled=${!t} @click=${()=>h({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${e.portrait===!1} ?disabled=${!t} @click=${()=>h({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="nf-seg nf-dev-source">
          <button aria-pressed=${e.look!=="blue"} ?disabled=${!t} @click=${()=>h({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${e.look==="blue"} ?disabled=${!t} @click=${()=>h({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="nf-form">
          ${this.num(this.t("solar_module_w"),e.module_w??1.13,p=>h({module_w:Math.max(.3,Math.min(3,$(p)))}),.01,.3)}
          ${this.num(this.t("solar_module_h"),e.module_h??1.72,p=>h({module_h:Math.max(.3,Math.min(3,$(p)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),e.wp??400,p=>h({wp:Math.max(50,Math.min(1500,Math.round(p)))}),5,50)}
        </div>
        <div class="nf-actions">
          <button class="nf-btn" aria-pressed=${this._solarPick} ?disabled=${!t} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${e.skip?.length?m`<button class="nf-btn" ?disabled=${!t} @click=${()=>h({skip:null})}>${this.t("solar_pick_all")}</button>`:_}
        </div>
        ${this._solarPick?m`<p class="nf-sub">${this.t("solar_pick_hint")}</p>`:_}
        <div class="nf-form">
          ${s?m`${this.num(this.t("solar_base"),e.base??0,p=>h({base:p>.001?Math.min(60,$(p)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),e.rotation??0,p=>h(ut(this._doc,e,p)),5)}
                <div class="nf-actions">
                  <button class="nf-chip" ?disabled=${!t} @click=${()=>h(ut(this._doc,e,(e.rotation??0)-15))}>↺ 15°</button>
                  <button class="nf-chip" ?disabled=${!t} @click=${()=>h(ut(this._doc,e,(e.rotation??0)+15))}>↻ 15°</button>
                </div>`:m`${this.num(this.t("solar_u"),e.u,p=>h({u:$(p)}),.05)} ${this.num(this.t(o?.wall?"solar_v_wall":"solar_v"),e.v,p=>h({v:$(p)}),.05)}`}
          ${o?.wall?m`${this.num(this.t("solar_tilt_wall"),e.tilt??0,p=>h({tilt:Math.max(0,Math.min(90,Math.round(p)))}),5,0)}
                <label class="nf-check nf-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>h({flip:p.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:_}
          ${o?.flat?m`${this.num(this.t("solar_tilt"),e.tilt??15,p=>h({tilt:Math.max(0,Math.min(45,Math.round(p)))}),1,0)}
                <label class="nf-check nf-wide"
                  ><input type="checkbox" ?disabled=${!t} .checked=${!!e.flip} @change=${p=>h({flip:p.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:_}
        </div>
        <p class="nf-sub">
          ${this.t("solar_summary",{n:a,kwp:H(this.hass,a*(e.wp??400)/1e3,1)})}${a<c?m` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:_}
        </p>
        <h4 class="nf-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="nf-form">
          <label class="nf-field nf-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!t} @change=${p=>{let g=p.target.value;this.setSolarString(g===""?null:g)}}>
              <option value="" ?selected=${!e.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(p=>m`<option value=${p.id} ?selected=${p.id===e.string}>${p.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let p=this._doc.settings.roof.strings?.find(b=>b.id===e.string);if(!p)return this.entitySelect(this.t("solar_entity"),e.entity??null,void 0,d,b=>h({entity:b==="none"?null:b}));let g=this.hass?st(this.hass,this._doc.floors):null,f=this._doc.floors.flatMap(b=>b.furniture.filter(v=>v.type==="inverter").map(v=>({m:v,fl:b}))).map(({m:b,fl:v},w)=>{let y=g?.get(b.id)?.entity,x=b.name?.trim()||(y&&this.hass?L(this.hass,y):"");return{id:b.id,label:`${x||`${this.t("furn_inverter")} ${w+1}`} \xB7 ${v.name}`}});return m`<label class="nf-field nf-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!t} .value=${p.name} @change=${b=>this.updateSolarString({name:b.target.value.trim()||p.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),p.entity??null,void 0,d,b=>this.updateSolarString({entity:b==="none"?null:b}))}
              <label class="nf-field nf-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!t} @change=${b=>this.updateSolarString({inverter:b.target.value||null})}>
                  <option value="" ?selected=${!p.inverter}>${this.t(f.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${f.map(b=>m`<option value=${b.id} ?selected=${b.id===p.inverter}>${b.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="nf-sub">${this.t("solar_string_hint")}</p>
        <p class="nf-sub">${this.t("solar_form_hint")}</p>
        ${t?m`<div class="nf-actions">
              <button class="nf-btn" ?disabled=${!o} @click=${()=>o&&h({...Kt(o,e.id),portrait:e.portrait})}>${this.t("solar_fit")}</button>
              <button class="nf-btn nf-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:_}
      </section>`}renderRoofPanel(){let e=this._doc.settings.roof,t=this.isAdmin,n=e.type==="custom"?this.roofSection:void 0,i=this._roofWinId?e.windows?.find(s=>s.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=e.type==="custom"?e.sections??[]:[];return m`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="nf-sub">${this.t("roof_sections_hint")}</p>
      ${e.type!=="custom"?m`<div class="nf-actions"><button class="nf-btn nf-primary" ?disabled=${!t} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:m`<div class="nf-room-list">
              ${o.map((s,a)=>m`<div class="nf-row">
                  <button class="nf-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${a+1} · ${s.dormer?this.t("roof_dormer"):this.t(`roof_shape_${s.shape}`)} · ${H(this.hass,Math.abs(s.x1-s.x0),1)} × ${H(this.hass,Math.abs(s.z1-s.z0),1)} m · ${this.t("roof_ridge_height")} ${H(this.hass,at(s),1)} m</span>
                  </button>
                </div>`)}
            </div>
            <div class="nf-actions">
              <button class="nf-btn" ?disabled=${!t} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="nf-btn" ?disabled=${!t} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}entityOptions(e){return ue(this.hass,e)}isPowerSensor(e){return Fn(this.hass,e)}num(e,t,n,i=.01,o){return Fe(this.host,e,t,n,i,o)}entitySelect(e,t,n,i,o){return Q(this.host,e,t,n,i,o)}iconInput(e,t){return Tn(this.host,e,t)}markerSelect(e,t){return ms(this.host,e,t)}energyActions(){return{follow:e=>{e.kind==="solar-field"?this._solarId=e.id:e.kind==="add-solar-field"?this.addSolarField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this._solarId=null,this.addEnergyDevice(e)},openDevice:(e,t)=>this.openEnergyDevice(e,t),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,t){this._floorId=e.id,this._solarId=null,this.selectItem("furniture",t.id),this.showPoint(t.x,t.z)}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;let n=o=>o.area_id&&this.hass?.areas?.[o.area_id]?.name||"",i=qs(e,this._doc,t,{roomLabel:o=>`${o.name} ${n(o)} ${o.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((o,s)=>s.furniture.push(i)),this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}async importEnergy(){if(!this.hass)return;let e=await js({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:t=>this.addEnergyDevice(t),setField:(t,n,i)=>this.change(o=>{let s=o.floors.flatMap(a=>a.furniture).find(a=>a.id===t);s&&(s[n]=i)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this._solarId?this._doc.settings.roof.solar?.find(i=>i.id===this._solarId):void 0;if(e)return this.renderSolarForm(e);let t=this._furnitureId?this.floor?.furniture.find(i=>i.id===this._furnitureId&&ze.includes(i.type)):void 0;if(t)return m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=this.energyActions();return m`${Bs(this.host,n)}${this.renderSolarList()}${Ns(this.host,n)}${Cs(this.host,n)}${Ks(this.host)}`}renderCarForm(e){if(!this.hass)return _;let t=e.car??{},n=this.entityOptions(i=>/^(device_tracker|sensor|binary_sensor|lock|climate)\./.test(i));return m`${this.entitySelect(this.t("live_car_device"),t.device??null,null,n,i=>this.updateFurniture({car:{...t,device:i}}))}
      <p class="nf-sub nf-wide">${this.t("live_car_device_hint")}</p>`}renderRoofSectionForm(e){let t=this.isAdmin,n=u=>this.updateRoofSection(u),i=e.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=e.flip?[i[1],i[0]]:i,a=e.shape==="flat"||e.shape==="parapet",l=e.shape==="pent",c=u=>u.findIndex(p=>p.id===e.id)+1,d=(u,p,g,f=.05,b=0)=>this.num(u,p,v=>g(Math.max(b,$(v))),f,b),h=!!this._doc.settings.lock_plan;return m`<button class="nf-btn nf-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="nf-h3row">
          <h3>${e.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${t?h?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:m`<button class="nf-btn nf-fix" aria-pressed=${!!e.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!e.locked})}>
                  ${e.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:_}
        </div>
        <label class="nf-field nf-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!t} @change=${u=>n({shape:u.target.value})}>
            ${Zr.map(u=>m`<option value=${u} ?selected=${e.shape===u}>${this.t(`roof_shape_${u}`)}</option>`)}
          </select>
        </label>
        ${a?_:m`<div class="nf-seg nf-dev-source">
              <button aria-pressed=${e.axis==="x"} ?disabled=${!t} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${e.axis==="z"} ?disabled=${!t} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="nf-check nf-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${u=>n({open:u.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="nf-form">
          ${a?d(this.t("roof_height"),e.eave_a,u=>n({eave_a:u,eave_b:u})):m`${d(`${this.t("roof_eave")} ${l?"":o}`,e.eave_a,u=>n({eave_a:u}))}
              ${l?_:d(`${this.t("roof_eave")} ${s}`,e.eave_b,u=>n({eave_b:u}))}
              ${d(`${this.t("roof_pitch_short")} ${l?"":o}`,e.pitch_a,u=>n({pitch_a:Math.min(75,u)}),1,0)}
              ${l?_:d(`${this.t("roof_pitch_short")} ${s}`,e.pitch_b,u=>n({pitch_b:Math.min(75,u)}),1,0)}`}
          ${d(this.t("roof_base"),e.base,u=>n({base:u}))}
          <label class="nf-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!t}
              @change=${u=>{let p=this._doc.floors.find(b=>b.id===u.target.value);if(!p)return;let g=$(p.elevation+p.height),f=g-e.base;n({base:g,eave_a:$(e.eave_a+f),eave_b:$(e.eave_b+f)})}}
            >
              ${[...this._doc.floors].filter(u=>u.rooms.length).sort((u,p)=>p.elevation-u.elevation).map(u=>m`<option value=${u.id} ?selected=${Zi(this._doc,e)?.id===u.id}>${u.name}</option>`)}
            </select></label
          >
          <p class="nf-sub nf-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),e.overhang??this._doc.settings.roof.overhang,u=>n({overhang:Math.min(2,u)}),.05,0)}
        </div>
        ${a&&t?m`<div class="nf-actions">
              <button class="nf-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${e.points?m`<button class="nf-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:_}
            </div>
            <p class="nf-sub">${this.t(e.points?"roof_points_hint":"roof_outline_hint")}</p>`:_}
        <p class="nf-sub">${this.t("roof_ridge_height")}: ${H(this.hass,at(e),2)} m · ${this.t("roof_section_hint")}</p>
        ${t?m`<div class="nf-actions">
              ${a?_:m`<button class="nf-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!e.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!e.dormer&&!e.open?m`<button class="nf-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?_:m`<button class="nf-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:_}
              <button class="nf-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="nf-btn nf-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:_}
      </section>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return li(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);this.change((i,o)=>{let s=this.fixItem(o,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=g=>e.closest(`[${g}]`)?.getAttribute(g)??null,o=null,s=i("data-device"),a=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),h=i("data-room")??this.roomAt(n);if(s?o=["device",s]:a?o=["opening",a]:l?o=["furniture",l]:c?o=["wall",c]:d&&!h?o=["outdoor",d]:h&&(o=["room",h]),!o){this._ctx=null;return}let[u,p]=o;this.selectItem(u,p),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??h),this._ctx={x:t[0],y:t[1],kind:u,id:p}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this._deviceId=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return _;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".nf-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return m`<div class="nf-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?m`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:m`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?m`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:_}
      ${e.kind==="furniture"?m`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:_}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return _;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?m`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:_;let n=this.isFixedItem(e,t);return m`<button class="nf-btn nf-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(e,t){if(this._notice=null,t&&(this._sideOpen=!0),this._outdoorId=e==="outdoor"?t:null,this._wallId=e==="wall"?t:null,this._edgeHi=null,(e==="outdoor"||e==="wall")&&(this._roomId=null),(e!=="room"||t!==this._roomId)&&(this._vertex=null),this._roomId=e==="room"?t:this._roomId,this._openingId=e==="opening"?t:null,this._furnitureId=e==="furniture"?t:null,this._deviceId=e==="device"?t:null,e==="device"&&t){let n=this.floor?.placements.find(i=>i.entity_id===t);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}e==="opening"&&t&&(this._roomId=this.floor?.openings.find(n=>n.id===t)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(e,t,n,i,o){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,d=o?.01:this._doc.settings.grid,h=Math.min(i,l)/2;return $(Math.min(l-h,Math.max(h,Math.round(c/d)*d)))}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let f of n.walls??[]){let b=ct({room_id:"",edge:0,wall:f.id},n.rooms,n.walls??[]);if(!b)continue;let[v,w]=this.toScreen(f.a),[y,x]=this.toScreen(f.b),k=(y-v)**2+(x-w)**2||1,S=Math.min(1,Math.max(0,((t[0]-v)*(y-v)+(t[1]-w)*(x-w))/k)),M=Math.hypot(t[0]-v-(y-v)*S,t[1]-w-(x-w)*S),A=[(f.a[0]+f.b[0])/2,(f.a[1]+f.b[1])/2],R=n.rooms.find(F=>F.points.length>=3&&I(A,F.points));M<Kn*2.2&&(!i||M-1<i.d)&&(i={room:b.room,edge:0,d:M-1,wall:f.id,roomId:R?.id??f.id})}for(let f of n.rooms)for(let b=0;b<f.points.length;b++){let[v,w]=this.toScreen(f.points[b]),[y,x]=this.toScreen(f.points[(b+1)%f.points.length]),k=(y-v)**2+(x-w)**2||1,S=Math.min(1,Math.max(0,((t[0]-v)*(y-v)+(t[1]-w)*(x-w))/k)),M=Math.hypot(t[0]-v-(y-v)*S,t[1]-w-(x-w)*S),A=M-(f.id===this._roomId?.5:0);M<Kn*2.2&&(!i||A<i.d)&&(i={room:f,edge:b,d:A})}if(!i)return!1;let{room:o,edge:s,wall:a}=i,l=o.points[s],c=o.points[(s+1)%o.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),h=ln[e],u=h.type,p=$(Math.min(h.width,Math.max(.3,d-.1))),g={id:T("opening"),room_id:i.roomId??o.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...t),p,!1),width:p,type:u,sill:h.sill,height:h.height,hinge:"left",leaves:h.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((f,b)=>b.openings.push(g)),this._tool="select",this.selectItem("opening",g.id),!0}setOpeningPreset(e,t){let n=ln[t];this._openingPreset=t;let i=bi(e)===t,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(e){let t=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===t),e))}deleteOpening(){let e=this._openingId;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this._openingId=null)}glowScaleField(e,t){return m`<label class="nf-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((e??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;t(Math.abs(i-1)<.001?null:i)}}
    /></label>`}furnitureFor(e){let t=W(e),n=this.hass?.language??"en",i=[...hi.map(a=>({type:a,label:this.t(`furn_${a}`)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:Ke(a.id,l.id),label:`${Oe(l,n)} \xB7 ${Ae(a,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,s=a=>t==="light"?ee(a):t==="climate"?a==="radiator":e.startsWith("vacuum.")?a==="robot_vacuum"||nt(a)&&a.endsWith(":robot_vacuum"):t==="media"?zi(a)||zt(a)&&o.test(a):zt(a)&&!ee(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}vehicleToSpot(e){if(!this.isAdmin)return;let[t,n,i]=Ge("parking"),o={id:T("furniture"),type:"parking",x:e.x,z:e.z,rotation:e.rotation,w:Math.max(t,$(e.w+.5)),d:Math.max(n,$(e.d+.4)),h:i,variant:null,vehicle:e.type,...e.name?{name:e.name}:{}};this.change((s,a)=>{a.furniture=a.furniture.filter(l=>l.id!==e.id),a.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let[n,i,o]=Ge(t),s={id:T("furniture"),type:t,x:e.x,z:e.z,rotation:e.rotation??0,w:n,d:i,h:o,variant:null,entity:e.entity_id,name:e.name??null,...e.locked?{locked:!0}:{}};this.change((a,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==e.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n={entity_id:t,x:e.x,z:e.z,y:null,rotation:e.rotation,...e.name?{name:e.name}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==e.id),o.placements.some(s=>s.entity_id===t)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",t)}renderAsFurniture(e){if(!this.isAdmin)return _;let t=this.furnitureFor(e.entity_id);return t.length?m`<label class="nf-field nf-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>m`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:_}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let[n,i,o]=Ge(e),s=this._doc.floors.filter(u=>u.elevation>t.elevation).sort((u,p)=>u.elevation-p.elevation)[0],a=e==="stairs"?$(s?s.elevation-t.elevation:t.height+.25):o,l=this.room,[c,d]=l?ae(l.points):this.toWorld(this._size.w/2,this._size.h/2),h={id:T("furniture"),type:e,x:$(c),z:$(d),rotation:0,w:n,d:i,h:a,variant:null};this.change((u,p)=>p.furniture.push(h)),this.selectItem("furniture",h.id),this.showPoint(h.x,h.z)}snapToWall(e){return this.floor?Ft(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}rotateFurniture(e){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({rotation:((t.rotation+e)%360+360)%360})}deleteFurniture(){let e=this._furnitureId;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this._furnitureId=null)}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t={...structuredClone(e),id:T("furniture"),x:$(e.x+.3),z:$(e.z+.3)};this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}placeDevices(e){let t=this.room;if(!t||!e.length||!this.isAdmin)return;let n=new Set(e);this.change((i,o)=>{for(let a of i.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(ee(l.type)&&l.entity&&n.has(l.entity)));let s=[...o.placements.map(a=>[a.x,a.z]),...o.furniture.filter(a=>ee(a.type)).map(a=>[a.x,a.z])];for(let a of Mo(t,e,s)){if(!a.entity_id.startsWith("light.")){o.placements.push(a);continue}let[l,c,d]=He.lamp_ceiling;o.furniture.push({id:T("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(e){let t=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===t),e))}centreDevice(){let e=this.device,t=e?this.roomAt([e.x,e.z]):null,n=this.floor?.rooms.find(s=>s.id===t);if(!e||!n)return;let[i,o]=ae(n.points);this.updateDevice({x:$(i),z:$(o)})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=t.placements.filter(h=>W(h.entity_id)==="light"&&(h.mount??"ceiling")==="ceiling"&&I([h.x,h.z],e.points));if(n.length<2)return;let i=te(e.points),o=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/a),c=n.map((h,u)=>{let p=Math.floor(u/a),g=p===l-1?n.length-a*(l-1):a,f=u-p*a;return[$(i.x0+o/g*(f+.5)),$(i.z0+s/l*(p+.5))]}),d=n.map(h=>h.entity_id);this.change((h,u)=>{d.forEach((p,g)=>Object.assign(u.placements.find(f=>f.entity_id===p),{x:c[g][0],z:c[g][1]}))})}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=Ro(e.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Fo(n);this.change((o,s)=>{s.rooms=t,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:H(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(e){this.change(t=>{for(let n of t.floors)n.placements=n.placements.filter(i=>i.entity_id!==e),n.furniture=n.furniture.filter(i=>!(ee(i.type)&&i.entity===e))})}deleteVertex(e){let t=this.room;if(!t||t.points.length<=3)return;let n=t.points.length,i=(e-1+n)%n;this.change((o,s)=>{let a=s.rooms.find(l=>l.id===t.id);a.points.splice(e,1),a.wall_heights&&a.wall_heights.splice(e,1),a.wall_thickness&&a.wall_thickness.splice(e,1),s.openings=s.openings.filter(l=>l.room_id!==t.id||l.wall||l.edge!==e&&l.edge!==i).map(l=>l.room_id===t.id&&!l.wall&&l.edge>e?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(e,t){if(!this.isAdmin||!e&&!t)return;let n=o=>[$(o[0]+e),$(o[1]+t)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=$(s.x+e),s.z=$(s.z+t);for(let s of o.placements)s.x=$(s.x+e),s.z=$(s.z+t);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=$(o.background.x+e),o.background.z=$(o.background.z+t))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(e,t){for(let n of e.settings.roof.sections??[]){let i=[t([n.x0,n.z0]),t([n.x1,n.z0]),t([n.x1,n.z1]),t([n.x0,n.z1])];n.x0=Math.min(...i.map(o=>o[0])),n.x1=Math.max(...i.map(o=>o[0])),n.z0=Math.min(...i.map(o=>o[1])),n.z1=Math.max(...i.map(o=>o[1])),n.points&&(n.points=n.points.map(t))}e.energy.meter&&([e.energy.meter.x,e.energy.meter.z]=t([e.energy.meter.x,e.energy.meter.z]))}turnFloor(){let e=this.floor;if(!e||!this.isAdmin)return;let t=(this._shiftAll?this._doc.floors:[e]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!t.length)return;let n=t.map(c=>c[0]),i=t.map(c=>c[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,a=c=>[$(o-(c[1]-s)),$(s+(c[0]-o))],l=c=>{for(let d of c.rooms)d.points=d.points.map(a);for(let d of c.furniture)[d.x,d.z]=a([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=a([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(a);for(let d of c.walls??[])d.a=a(d.a),d.b=a(d.b);c.background&&([c.background.x,c.background.z]=a([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,a)}):this.change((c,d)=>l(d))}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===t),e))}setArea(e){let t=this.room;if(!t)return;let n=e?this.hass?.areas?.[e]:void 0,i=!t.name||/^(Raum|Room) \d+$/.test(t.name)||Object.values(this.hass?.areas??{}).some(o=>o.name===t.name);this.updateRoom({area_id:e||null,...n&&i?{name:n.name}:{}})}setRect(e,t){let n=this.room;if(!n||!Number.isFinite(t))return;let i=te(n.points),{x0:o,z0:s,x1:a,z1:l}=i;e==="x"&&([o,a]=[t,t+(a-o)]),e==="z"&&([s,l]=[t,t+(l-s)]),e==="w"&&t>.05&&(a=o+t),e==="d"&&t>.05&&(l=s+t),this.updateRoom({points:[[$(o),$(s)],[$(a),$(s)],[$(a),$(l)],[$(o),$(l)]]})}setPoint(e,t,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[e][t]=$(n),this.updateRoom({points:o})}async loadImage(e){this.loadingImages.add(e);try{let t=await nn(this.hass,e),n=new Image;n.src=t,await n.decode(),this._images={...this._images,[e]:{url:t,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(e){let t=e.target,n=t.files?.[0];if(t.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=T("img");await rn(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let c=this.floor?.rooms.length?te(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,$(c.x1-c.x0)):12,opacity:.5}})}render(){let e=this.floor,t=e?ie(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return m`
      ${this.renderPreview()}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(n=>m`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!e||!this.isAdmin&&n!=="select"}
                  @click=${()=>{this._tool=n,this._draft=[],this._cursor=null,this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="nf-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              ${this.isAdmin?m`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:_}
            </div>
            ${t?.warnings.length?m`<span class="nf-warn">${this.t("overlap_warning")}</span>`:_}
          </div>
          <div class="nf-stage-pair ${this._split?"nf-split":""}" style=${this._split&&!this.narrow?`--nf-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool?m`<div class="nf-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:_}
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
              ${this.renderBackground(e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):_}
              ${e?this.renderOutdoor(e):_} ${e?this.renderRooms(e):_} ${e?this.renderFurniture(e):_}
              ${e?this.renderFreeWalls(e):_}
              ${e&&t?this.renderOpenings(e,t.walls):_} ${e?this.renderMeter(e):_}
              ${e&&this._tool==="select"?this.renderDevices(e):_}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):_}
              ${e?this.renderOutdoorHandles(e):_}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):_}
              ${e?this.renderHeadroom(e):_}
              ${this._tool==="roof"?E`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?E`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderEnergyMarkers()}`:_} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint?"nf-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?m`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:_}
          ${this._split?this.render3d():_}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderBackground(e){let t=e?.background,n=t?this._images[t.image_id]:void 0;if(!t||!n)return _;let[i,o]=this.toScreen([t.x,t.z]),s=t.width*this._view.scale,a=s*n.aspect,l=t.rotation??0,c=this.bgHandles();return E`<g transform="rotate(${l} ${i+s/2} ${o+a/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${a} opacity=${t.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?E`<rect class="nf-bg-frame" x=${i} y=${o} width=${s} height=${a} />
          <circle class="nf-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+a} r="9" />
          <g class="nf-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="nf-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:_}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let e=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!e?.length)return _;let t=e.map(n=>this.toScreen(n));return E`<g class="nf-bg-ruler">
      ${t.length===2?E`<line x1=${t[0][0]} y1=${t[0][1]} x2=${t[1][0]} y2=${t[1][1]} />`:_}
      ${t.map(([n,i])=>E`<circle cx=${n} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(e,t){let n=this.floor?.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(t[0]-e[0],t[1]-e[1])<.05)return;let o=Math.atan2(t[1]-e[1],t[0]-e[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let a=n.width*i.aspect,l=[n.x+n.width/2,n.z+a/2],c=l[0]-e[0],d=l[1]-e[1],h=[e[0]+c*Math.cos(s)-d*Math.sin(s),e[1]+c*Math.sin(s)+d*Math.cos(s)],u=(n.rotation??0)+s*180/Math.PI;u=Math.round((((u+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:u,x:$(h[0]-n.width/2),z:$(h[1]-a/2)}})}applyBgRuler(e){let n=this.floor?.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(e>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let a=e/s,l=n.width*o.aspect,c=[n.x+n.width/2,n.z+l/2],d=i[0],h=[d[0]+a*(c[0]-d[0]),d[1]+a*(c[1]-d[1])],u=n.width*a,p=l*a;this.updateFloor({background:{...n,width:$(u),x:$(h[0]-u/2),z:$(h[1]-p/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(e,t,n){let i=e.width*n,o=e.x+e.width/2,s=e.z+i/2,a=-(e.rotation??0)*Math.PI/180,l=t[0]-o,c=t[1]-s;return[o+l*Math.cos(a)-c*Math.sin(a)-e.x,s+l*Math.sin(a)+c*Math.cos(a)-e.z]}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,o=e>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),d=[],h=(g,f)=>{for(let b=Math.ceil(s/g)*g;b<=l;b+=g){let v=this.toScreen([b,0])[0];d.push(E`<line class=${f} x1=${v} y1="0" x2=${v} y2=${n} />`)}for(let b=Math.ceil(a/g)*g;b<=c;b+=g){let v=this.toScreen([0,b])[1];d.push(E`<line class=${f} x1="0" y1=${v} x2=${t} y2=${v} />`)}};i<o&&h(i,"nf-grid-minor"),h(o,"nf-grid-major");let[u,p]=this.toScreen([0,0]);return d.push(E`<circle class="nf-origin" cx=${u} cy=${p} r="3" />`),E`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?E`<g pointer-events="none">${t.rooms.map(n=>E`<polygon class="nf-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:_}renderWalls(e){let t=this.floor?.height??2.5;return E`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,o=`nf-wall${n.exterior?" nf-wall-ext":""}${i?" nf-wall-low":""}`;return E`<polygon class=${o} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let o=ie(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===e.id&&a.edge===t).map(a=>a.t0));return o.length?[...new Set(o)].sort((s,a)=>s-a):[0]}setEdgeHeight(e,t,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((c,d)=>{let h=d.rooms.find(f=>f.id===e.id);if(!h)return;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);let p=u[t],g=Array.isArray(p)?[...p]:new Array(l).fill(typeof p=="number"?p:null);for(;g.length<l;)g.push(null);g[i]=n,u[t]=g.every(f=>f===g[0])?g[0]:g,h.wall_heights=u.every(f=>f===null)?void 0:u});return}let a=ie(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===e.id&&c.edge===t)).flatMap(l=>l.sources);a.some(l=>l.room_id===e.id&&l.edge===t)||a.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let h=c.rooms.find(p=>p.id===d.room_id);if(!h)continue;let u=(h.wall_heights??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[d.edge]=n,h.wall_heights=u.every(p=>p===null)?void 0:u}})}renderCameraDetections(e){if(!this.hass)return _;let t=this.hass,n=Vo(t,e),i=[...new Set(n.map(o=>Wo(t,o)))];return m`<p class="nf-sub nf-wide">
      ${n.length?m`${this.t("camera_detect_found",{kinds:i.map(o=>this.t(`detect_${o}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,o=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),s=this.edgeParts(e,t),a=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,h)=>{let u=h.rooms.find(f=>f.id===e.id);if(!u)return;let p=(u.wall_splits??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[t]=[...p[t]??[],c].sort((f,b)=>f-b),u.wall_splits=p;let g=u.wall_heights?.[t];if(Array.isArray(g)){let f=n??0;g.splice(f+1,0,g[f]??null)}})}moveSplit(e,t,n,i){let o=e.points,s=Math.hypot(o[(t+1)%o.length][0]-o[t][0],o[(t+1)%o.length][1]-o[t][1]),a=this.edgeParts(e,t).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let u=d.rooms.find(g=>g.id===e.id)?.wall_splits?.[t];if(!u)return;let p=u.findIndex(g=>Math.abs(g-n)<.001);p>=0&&(u[p]=l),u.sort((g,f)=>g-f)})}joinSplit(e,t,n,i){this.change((o,s)=>{let a=s.rooms.find(d=>d.id===e.id);if(!a?.wall_splits?.[t])return;let l=a.wall_splits[t].filter(d=>Math.abs(d-n)>.001);a.wall_splits[t]=l.length?l:null,a.wall_splits.every(d=>!d)&&(a.wall_splits=void 0);let c=a.wall_heights?.[t];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(a.wall_heights[t]=c[0]??null))})}renderSplitMarks(e){let t=e.points;return E`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let o=t[i],s=t[(i+1)%t.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/a,c=(s[1]-o[1])/a;return n.map(d=>{let[h,u]=this.toScreen([o[0]+l*d,o[1]+c*d]);return E`<line class="nf-split-mark" x1=${h-c*7} y1=${u+l*7} x2=${h+c*7} y2=${u-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,i=this._doc.settings,o=new Set;for(let a of ie(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===e.id&&o.add(l.edge);let s=(a,l)=>this.change((c,d)=>{let h=d.rooms.find(p=>p.id===e.id);if(!h)return;let u=(h.wall_thickness??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[a]=l,h.wall_thickness=u.every(p=>p===null)?void 0:u});return m`<div class="nf-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((a,l)=>{let c=e.points[(l+1)%n],d=Math.hypot(c[0]-a[0],c[1]-a[1]),h=e.wall_heights?.[l]??null,u=()=>this._edgeHi=l,p=()=>this._edgeHi=null,g=this.edgeParts(e,l);return(g.length>1?g.map((b,v)=>v):[void 0]).map(b=>{let v=b===void 0?Array.isArray(h)?h[0]??null:h:Array.isArray(h)?h[b]??null:h,w=b===void 0?d:(g[b+1]??d)-g[b],y=x=>this.setEdgeHeight(e,l,x,b);return m`<div
            class="nf-edge-height${l===this._edgeHi?" nf-edge-on":""}${v!==null?" nf-edge-low":""}"
            @mouseenter=${u}
            @mouseleave=${p}
            @focusin=${u}
            @focusout=${p}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${b===void 0?"":` \xB7 ${this.t("wall_part",{n:b+1})}`}</b><br /><span class="nf-muted"
                >${H(this.hass,w,2)} m</span
              ></span
            >
            ${v===0?m`<span class="nf-muted">${this.t("wall_none")}</span>`:this.num(this.t("wall_height"),v??t,x=>y(x>=t-.005?null:Math.max(.05,x)),.05,.05)}
            ${this.isAdmin&&v!==null?m`<button class="nf-btn" title=${this.t("wall_height_full")} @click=${()=>y(null)}>↥</button>`:_}
            ${this.isAdmin&&v!==0?m`<button class="nf-btn" title=${this.t("wall_none_hint")} @click=${()=>y(0)}>${this.t("wall_none")}</button>`:_}
            ${this.isAdmin&&w>=.4?m`<button class="nf-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,b)}>✂</button>`:_}
            ${(b===void 0||b===0)&&v!==0?m`<span class="nf-wide nf-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.num(this.t("edge_thickness"),e.wall_thickness?.[l]??(o.has(l)?i.wall_exterior:i.wall_interior),x=>{let k=o.has(l)?i.wall_exterior:i.wall_interior,S=Math.min(1.5,Math.max(.02,Math.round(x*1e3)/1e3));s(l,Math.abs(S-k)<5e-4?null:S)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?m`<button class="nf-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:_}</span
                >`:_}
            ${b!==void 0&&b>0&&(e.wall_splits?.[l]??[]).some(x=>Math.abs(x-g[b])<.001)?m`<span class="nf-wide nf-split-row"
                  >${this.num(this.t("wall_split_at"),g[b],x=>this.moveSplit(e,l,g[b],x),.05,.1)}
                  ${this.isAdmin?m`<button class="nf-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,g[b],b)}>⨉</button>`:_}</span
                >`:_}
          </div>`})})}
      <p class="nf-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this._outdoorId?e.outdoor.find(n=>n.id===this._outdoorId):void 0;return!t||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?_:E`${t.points.map((n,i)=>{let[o,s]=this.toScreen(n);return E`<g class="nf-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="nf-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return E`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(ae(t.points)),s=te(t.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return E`<g data-outdoor=${t.id} class=${`nf-out nf-out-${t.type}${t.id===this._outdoorId?" nf-out-sel":""}`}>
        <polygon points=${n} />
        ${a?E`<text x=${i} y=${o+4}>${this.t(`out_${t.type}`)}</text>`:_}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=dn(e.points),i=te(e.points),o=(s,a)=>{let{x0:l,z0:c,x1:d,z1:h}=i;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,h]=[a,a+(h-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(h=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,h],[l,h]].map(([u,p])=>[$(u),$(p)])})};return m`<section>
      <div class="nf-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Xr.map(s=>m`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?m`${this.num(this.t("x"),i.x0,s=>o("x",s))} ${this.num(this.t("z"),i.z0,s=>o("z",s))}
            ${this.num(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:_}
        ${di(e.type)?this.num(this.t("outdoor_height"),e.height??ci[e.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,$(s)))}),.05,.1):_}
        ${this.num(this.t("outdoor_offset"),e.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,$(s)))||null}),.05)}
        ${e.type!=="pool"?m`${this.num(this.t("outdoor_slope"),e.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,$(s)))||null}),.05,0)}
              <label class="nf-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Jr.map(s=>m`<option value=${s} ?selected=${s===(e.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:_}
        <label class="nf-check nf-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?m`<label class="nf-check nf-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:_}
        ${e.type==="pergola"?m`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:_}
        <label class="nf-check nf-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?m`<p class="nf-sub">${this.t("outdoor_slope_hint")}</p>`:_}
      <p class="nf-sub">${this.t("outdoor_hint")}</p>
      ${t?m`<div class="nf-actions">
            <button class="nf-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:_}
    </section>`}renderRooms(e){return E`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return E`<polygon data-room=${t.id} class=${t.id===this._roomId?"nf-room nf-room-sel":"nf-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(ae(t.points));return E`<text class="nf-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="nf-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:H(this.hass,_e(t.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this._edgeHi;if(!e||t===null||t>=e.points.length)return _;let[n,i]=this.toScreen(e.points[t]),[o,s]=this.toScreen(e.points[(t+1)%e.points.length]);return E`<line class="nf-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return _;let[n,i]=this.toScreen([t.x,t.z]);return E`<g class="nf-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return E`<g>${e.furniture.map(n=>{let i=n.id===this._furnitureId,[o,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[d,h]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[u,p]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),g=ee(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return E`<g data-furniture=${n.id} class=${`nf-furn${i?" nf-furn-sel":""}${g?" nf-furn-lit":""}${ze.includes(n.type)?" nf-energy-item":""}`}>
        <g transform="translate(${o} ${s}) rotate(${n.rotation}) scale(${n.mirror?-t:t} ${t})">
          <rect class="nf-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="nf-furn-sym">${zo(n.type,n.w,n.d)}</g>
          <line class="nf-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?E`<text x=${o} y=${s+4}>${Yt(this.hass,n.type)}</text>`:_}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([f,b])=>{let[v,w]=this.toScreen([n.x+f*n.w*Math.cos(l)/2-b*n.d*Math.sin(l)/2,n.z+f*n.w*Math.sin(l)/2+b*n.d*Math.cos(l)/2]);return E`<g class="nf-resize" data-resize=${`${n.id}:${f}:${b}`}>
              <circle cx=${v} cy=${w} r="14" class="nf-hit" />
              <rect x=${v-5} y=${w-5} width="10" height="10" rx="2" />
            </g>`}):_}
      ${i?(()=>{let[f,b]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return E`<text class="nf-dim" x=${f} y=${b+4}>${H(this.hass,n.w,2)} × ${H(this.hass,n.d,2)} m</text>`})():_}
      ${i&&n.locked?E`<text class="nf-lock" x=${d} y=${h+5}>🔒</text>`:_}
      ${i&&this.isAdmin&&!n.locked?E`<g class="nf-rotate" data-rotate=${n.id}>
            <line x1=${u} y1=${p} x2=${d} y2=${h} />
            <circle cx=${d} cy=${h} r="16" class="nf-hit" />
            <circle cx=${d} cy=${h} r="8" />
            <path d="M${d-4} ${h-1}a4 4 0 1 1 2 3.5" />
          </g>`:_}`})}</g>`}renderOpenings(e,t){return E`<g>${e.openings.map(n=>{let i=ct(n,e.rooms,e.walls??[]);if(!i)return _;let{room:o,edge:s}=i,a=Vi(t,n,i),l=lt(o,s,n.offset-n.width/2),c=lt(o,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),h=(c[1]-l[1])/(n.width||1),u=Y(o.points)>=0?1:-1,p=[-h*u,d*u],g=[.06,.06];a&&(g=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let f=(S,M)=>this.toScreen([S[0]+p[0]*M,S[1]+p[1]*M]),b=[f(l,g[0]+.01),f(c,g[0]+.01),f(c,-g[1]-.01),f(l,-g[1]-.01)],v=n.id===this._openingId,w=an(n,a?.wall.exterior??!1),y=n.type==="door"&&_i(w),x=`nf-open nf-open-${n.type}${y?" nf-open-front":""}${v?" nf-open-sel":""}`,k;if(n.type==="garage"){let S=f(l,g[0]-.04),M=f(c,g[0]-.04),A=f(l,g[0]+Math.min(2,n.height)),R=f(c,g[0]+Math.min(2,n.height));k=E`<line x1=${S[0]} y1=${S[1]} x2=${M[0]} y2=${M[1]} />
          <path class="nf-open-track" d="M${S[0]} ${S[1]}L${A[0]} ${A[1]}M${M[0]} ${M[1]}L${R[0]} ${R[1]}" />`}else if(n.type==="door"){let S=n.swing==="out",M=S?-g[1]:g[0],A=n.hinge==="left"==u>0,R=n.leaves===2,F=l,z=c,P=[],V=co(n.width,w,A,n);if(V){let pe=me=>me<=.02?l:me>=n.width-.02?c:lt(o,s,n.offset-n.width/2+me);F=pe(V.x0),z=pe(V.x1),P=V.panels.map(([me,Pe])=>[pe(me),pe(Pe)])}let D=[(F[0]+z[0])/2,(F[1]+z[1])/2],$e=(R?.5:1)*Math.hypot(z[0]-F[0],z[1]-F[1]),fe=(g[0]-g[1])/2,ia=P.map(([pe,me])=>{let Pe=f(pe,fe+.035),Xe=f(me,fe+.035),vt=f(pe,fe-.035),yt=f(me,fe-.035);return E`<line class="nf-open-pane" x1=${Pe[0]} y1=${Pe[1]} x2=${Xe[0]} y2=${Xe[1]} /><line class="nf-open-pane" x1=${vt[0]} y1=${vt[1]} x2=${yt[0]} y2=${yt[1]} />`}),Un=(pe,me)=>{let[Pe,Xe]=f(pe,M),[vt,yt]=f(me,M),Qt=f(pe,M+(S?-$e:$e)),dr=$e*this._view.scale,ra=(Qt[0]-Pe)*(yt-Xe)-(Qt[1]-Xe)*(vt-Pe);return E`<path d="M${Pe} ${Xe}L${Qt[0]} ${Qt[1]}A${dr} ${dr} 0 0 ${ra>0?1:0} ${vt} ${yt}" />`};k=E`${ia}${w==="passage"?E`<line class="nf-open-passage" x1=${f(l,fe)[0]} y1=${f(l,fe)[1]} x2=${f(c,fe)[0]} y2=${f(c,fe)[1]} />`:w==="sliding"?E`<line x1=${f(F,M)[0]} y1=${f(F,M)[1]} x2=${f(z,M)[0]} y2=${f(z,M)[1]} />`:R?E`${Un(F,D)}${Un(z,D)}`:Un(A?F:z,A?z:F)}`}else{let S=(g[0]-g[1])/2,M=f(l,S+.035),A=f(c,S+.035),R=f(l,S-.035),F=f(c,S-.035),z=[(l[0]+c[0])/2,(l[1]+c[1])/2],P=f(z,g[0]),V=f(z,-g[1]);k=E`<line x1=${M[0]} y1=${M[1]} x2=${A[0]} y2=${A[1]} /><line x1=${R[0]} y1=${R[1]} x2=${F[0]} y2=${F[1]} />${n.leaves===2?E`<line x1=${P[0]} y1=${P[1]} x2=${V[0]} y2=${V[1]} />`:_}`}return E`<g data-opening=${n.id} class=${x}>
        <polygon class="nf-open-gap" points=${b.map(S=>S.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return E`<g>${e.placements.map(t=>{let n=W(t.entity_id);if(!n)return _;let[i,o]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this._deviceId,l=`nf-device${s?" nf-device-on":""}${a?" nf-device-sel":""}`;return E`${n==="camera"?this.renderCameraWedge(t,a):_}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${L(this.hass,t.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        <path d=${Pt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?E`<text class="nf-lock" x=${i+16} y=${o-12}>🔒</text>`:_}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),o=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,a=(y,x)=>this.toScreen([e.x-Math.sin(s+y)*x,e.z+Math.cos(s+y)*x]),[l,c]=this.toScreen([e.x,e.z]),d=Math.min(i,359.9)*Math.PI/180/2,[h,u]=a(-d,o),[p,g]=a(d,o),f=o*this._view.scale,b=i>=360?"":`M${l} ${c}L${h} ${u}A${f} ${f} 0 ${d>Math.PI/2?1:0} 1 ${p} ${g}Z`,[v,w]=a(0,o);return E`<g class="nf-wedge ${t?"nf-wedge-sel":""}">
      ${i>=360?E`<circle cx=${l} cy=${c} r=${f} />`:E`<path d=${b} />`}
      ${t&&this.isAdmin&&!e.locked?E`<g class="nf-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${v} y2=${w} />
            <circle cx=${v} cy=${w} r="16" class="nf-hit" />
            <circle cx=${v} cy=${w} r="8" />
            <path d="M${v-4} ${w-1}a4 4 0 1 1 2 3.5" />
          </g>`:_}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,a)=>{let l=t[(a+1)%n],[c,d]=this.toScreen(s),[h,u]=this.toScreen(l),p=Math.hypot(l[0]-s[0],l[1]-s[1]),g=(c+h)/2,f=(d+u)/2,[b,v]=this.toScreen(ae(t)),w=-(u-d),y=h-c,x=Math.hypot(w,y)||1;w/=x,y/=x,w*(g-b)+y*(f-v)<0&&(w=-w,y=-y);let k=Math.hypot(h-c,u-d);return E`
        ${k>50?E`<text class="nf-dim" x=${g+w*16} y=${f+y*16+4}>${H(this.hass,p,2)} m</text>`:_}
        ${k>36?E`<g data-mid=${a} class="nf-mid"><circle cx=${g} cy=${f} r="14" class="nf-hit" /><circle cx=${g} cy=${f} r="6" /><path d="M${g-3} ${f}h6M${g} ${f-3}v6" /></g>`:_}
      `}),o=t.map((s,a)=>{let[l,c]=this.toScreen(s);return E`<g data-vertex=${a} class=${a===this._vertex?"nf-vertex nf-vertex-sel":"nf-vertex"}><circle cx=${l} cy=${c} r="16" class="nf-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="nf-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return E`<g>${i}${o}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[n,i]=this.toScreen(e.start),[o,s]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return E`<g pointer-events="none">
        <line class="nf-draft nf-draft-wall" x1=${n} y1=${i} x2=${o} y2=${s} />
        <text class="nf-dim" x=${(n+o)/2} y=${(i+s)/2-10}>${H(this.hass,a,2)} m</text>
      </g>`}if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[o,s]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return E`<g pointer-events="none">
        <rect class="nf-draft" x=${Math.min(n,o)} y=${Math.min(i,s)} width=${Math.abs(o-n)} height=${Math.abs(s-i)} />
        <text class="nf-dim" x=${(n+o)/2} y=${Math.min(i,s)-8}>${H(this.hass,a,2)} × ${H(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return _;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return E`<g pointer-events="none">
      ${t.length>1?E`<polyline class="nf-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:_}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let o=this.toScreen(this._draft[i]),s=this.toScreen(n);return E`<text class="nf-dim" x=${(o[0]+s[0])/2} y=${(o[1]+s[1])/2-6}>${H(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):_}
      ${this._draft.map((n,i)=>{let[o,s]=this.toScreen(n);return E`<circle class=${i===0&&this._draft.length>=3?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${o} cy=${s} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?E`<circle class="nf-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:_}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return E`<g pointer-events="none">
      ${e.x!==void 0?E`<line class="nf-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:_}
      ${e.z!==void 0?E`<line class="nf-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:_}
      ${e.point?E`<circle class="nf-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:_}
    </g>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("nextfloor.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?m`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:m`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?m`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:_}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:m`<aside class="nf-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?_:m`<div class="nf-pin-row">
      ${e?m`<button class="nf-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:_}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this._doc?.floors??[],n=this.room,i=this.isAdmin,o=Object.values(this.hass?.areas??{}).sort((a,l)=>a.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&i)return m`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):_} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?m`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:m`
      ${i?_:m`<p class="nf-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="nf-floor-list">
          ${[...t].reverse().map(a=>m`<button
              class="nf-chip"
              aria-pressed=${a.id===this._floorId}
              @click=${()=>{this._floorId=a.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${a.name}
            </button>`)}
          ${i?m`<button
                class="nf-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:_}
        </div>
        ${i&&this._floorMenu?m`<div class="nf-floor-menu">
              <p class="nf-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(a=>m`<button class="nf-btn" @click=${()=>this.addFloor(a)}>
                  ${a.name}${a.level!=null?m` <span class="nf-sub">· ${this.t("level",{n:a.level})}</span>`:_}
                </button>`)}
              <button class="nf-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:_}
        ${e?m`<div class="nf-form">
              <label class="nf-field nf-wide"
                >${this.t("floor_name")}
                <input .value=${e.name} ?disabled=${!i} @change=${a=>this.updateFloor({name:a.target.value})}
              /></label>
              ${this.num(this.t("elevation"),e.elevation,a=>this.updateFloor({elevation:a}))}
              ${i?m`<div class="nf-field nf-wide nf-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${a=>this._shiftX=Number(a.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${a=>this._shiftZ=Number(a.target.value)||0} />
                    <button class="nf-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="nf-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="nf-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${e.start_view?m`<button class="nf-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:_}
                    <label class="nf-check nf-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${a=>this._shiftAll=a.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:_}
              ${this.num(this.t("height"),e.height,a=>this.updateFloor({height:Math.max(1,a)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?m`<label class="nf-field nf-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${a=>this.updateFloor({ha_floor:a.target.value||null})}>
                      <option value="" ?selected=${!e.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(a=>a.floor_id===e.ha_floor||!t.some(l=>l.ha_floor===a.floor_id)).map(a=>m`<option value=${a.floor_id} ?selected=${a.floor_id===e.ha_floor}>${a.name}</option>`)}
                    </select></label
                  >`:_}
              ${i&&this.unplacedAreas(e).length?m`<div class="nf-actions nf-wide">
                    <button class="nf-btn nf-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(e)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(e).length})}
                    </button>
                  </div>`:_}
              ${i?m`<div class="nf-actions nf-wide">
                    <button class="nf-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="nf-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="nf-btn nf-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="nf-actions nf-wide">
                    <button class="nf-btn" title=${this.t("gaps_hint")} ?disabled=${e.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                  </div>
                  ${this._notice?m`<p class="nf-sub nf-wide nf-notice">${this._notice}</p>`:_}`:_}
            </div>`:_}
      </section>
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?m`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:e?this.renderRoomList(e):_}
      ${i?ws(this.host,()=>this.paneView()):_} ${i?ys(this.host):_}
      ${Gs(this.host)}
      ${i&&!1?ks(this.host):_}
      ${e&&i?this.renderBackgroundForm(e):_} ${i?Ps(this.host,this.settingsActions):_}
      ${i?zs(this.host,this.backup):_}
    `}renderRoomList(e){return e.rooms.length?m`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="nf-room-list">
        ${e.rooms.map(t=>m`<button class="nf-row" @click=${()=>this.selectItem("room",t.id)}>
            <span>${t.name}</span><span class="nf-muted">${this.t("area_m2",{a:H(this.hass,_e(t.points),1)})}</span>
          </button>`)}
      </div>
    </section>`:_}renderRoomForm(e,t){let n=this.isAdmin,i=dn(e.points),o=te(e.points);return m`<section>
      <div class="nf-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",e.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("room_name")}
          <input .value=${e.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="nf-field nf-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!e.area_id}>${this.t("no_area")}</option>
            ${t.map(s=>m`<option value=${s.area_id} ?selected=${s.area_id===e.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="nf-field nf-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${no.map(s=>m`<option value=${s} ?selected=${s===e.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?m`${this.num(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.num(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.num(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.num(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:_}
      </div>
      <div class="nf-actions">
        <button class="nf-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${e.start_view?m`<button class="nf-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:_}
      </div>
      ${this.renderEdgeHeights(e)} ${this.renderRoomClimate(e)}
      <details class="nf-points" ?open=${!i}>
        <summary>${this.t("points")} (${e.points.length})</summary>
        ${e.points.map((s,a)=>m`<div class="nf-point ${a===this._vertex?"nf-point-sel":""}">
            <span class="nf-muted">${a+1}</span>
            ${this.num(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.num(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?m`<button class="nf-btn" title=${this.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:_}
          </div>`)}
      </details>
      ${n?m`<div class="nf-actions">
            <button class="nf-btn nf-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="nf-btn" @click=${()=>this.openSpotForm(e)}>${this.t("spots_place")}</button>
            <button class="nf-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:_}
      ${this._spots?this.renderSpotForm(e):_}
      ${this._packages?m`<div class="nf-packages">
            ${ls.map(s=>m`<button class="nf-btn" @click=${()=>this.applyPackage(e,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="nf-sub">${this.t("pkg_hint")}</p>
          </div>`:_}
    </section>`}applyPackage(e,t){if(!this.isAdmin)return;let n=cs(e,t,()=>T("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(e){let t=te(e.points),n=this.hass?be(this.hass,e.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:n[0]??null}}placeSpots(e){let t=this._spots;if(!t||!this.isAdmin)return;let[n,i,o]=He[t.type],s=pi(e,t.rows,t.cols).map(([a,l])=>({id:T("furniture"),type:t.type,x:a,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:t.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(e){let t=this._spots,n=pi(e,t.rows,t.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...t,...s};return m`<div class="nf-form nf-spot-form">
      <label class="nf-field nf-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>m`<option value=${s} ?selected=${s===t.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),t.cols,s=>o({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),t.rows,s=>o({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),t.entity,void 0,i,s=>o({entity:s==="none"?null:s}))}
      <div class="nf-actions nf-wide">
        <button class="nf-btn nf-primary" ?disabled=${!n} @click=${()=>this.placeSpots(e)}>${this.t("spots_add",{n})}</button>
        <button class="nf-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="nf-sub nf-wide">${this.t("spots_hint")}</p>
    </div>`}openingIsExterior(e){let t=this.floor,n=t?ct(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=ie(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return Vi(i.walls,e,n)?.wall.exterior??!1}renderSidelightFields(e){if(e.type!=="door")return _;let t=an(e,this.openingIsExterior(e));if(t!=="sidelight"&&t!=="sidelights")return _;let n=this.isAdmin,i=(o,s)=>m`<label class="nf-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${e[o]==null?"":String(e[o])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return t==="sidelight"?m`<label class="nf-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!e.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:m`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(e){let t=e.type==="door"?mi:gi,n=an({type:e.type,style:null},this.openingIsExterior(e)),i=e.style&&t.includes(e.style)?e.style:"";return m`<label class="nf-field nf-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${t.map(o=>m`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(e){let t=this.isAdmin,n=e.type==="window",i=e.type==="garage",o=f=>{if(!this.hass)return null;let b=structuredClone(this._doc.floors);for(let v of b)for(let w of v.openings)w.id===e.id&&(w[f]=null);return Mi(this.hass,b).get(e.id)?.[f]??null},s=f=>this.hass?.states[f]?.attributes.device_class,a=this.entityOptions(f=>f.startsWith("cover.")),l=this.entityOptions(f=>/^(sensor|number|input_number)\./.test(f)&&Number.isFinite(Number(this.hass?.states[f]?.state))),c=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(f)??"")||q(f)&&Ei(this.hass?.states[f])!==null),d=this.entityOptions(f=>{let b=this.hass?.states[f];return f.startsWith("binary_sensor.")?typeof b?.attributes.window_state=="string":q(f)&&(Ei(b)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${f} ${L(this.hass,f)}`))}),h=this.entityOptions(f=>f.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(f)??"")),u=f=>{let b=f===1,v=b?e.tilt:e.tilt2??null,w=b?e.contact:e.contact2,y=(b?e.sensor:e.sensor2)??(v&&v!=="none"?"contact_tilt":"contact"),x=k=>this.updateOpening(b?{contact:k}:{contact2:k==="none"?null:k});return m`<label class="nf-field nf-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!t}
            @change=${k=>{let S=k.target.value,M=S==="contact_tilt"?{}:b?{tilt:null}:{tilt2:null};this.updateOpening({...b?{sensor:S}:{sensor2:S},...M})}}
          >
            ${["contact","handle","contact_tilt"].map(k=>m`<option value=${k} ?selected=${k===y}>${this.t(`sensor_kind_${k}`)}</option>`)}
          </select></label
        >
        ${y==="handle"?this.entitySelect(this.t("handle_entity"),w,void 0,d,k=>x(k==="none"?b?"none":null:k)):this.entitySelect(this.t("contact_entity"),w,b?o("contact"):void 0,h,x)}
        ${y==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),v,void 0,c,k=>this.updateOpening(b?{tilt:k==="none"?null:k}:{tilt2:k==="none"?null:k})):_}
        ${b?m`${this.entitySelect(this.t("tilt_angle_entity"),e.tilt_angle??null,void 0,this.entityOptions(k=>q(k)),k=>this.updateOpening({tilt_angle:k==="none"?null:k}))}
            ${e.tilt_angle&&e.tilt_angle!=="none"?m`${this.num(this.t("tilt_angle_max"),e.tilt_max??15,k=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,k))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),e.tilt_offset??0,k=>this.updateOpening({tilt_offset:k}),.5)}
                <label class="nf-check nf-wide"
                  ><input type="checkbox" .checked=${!!e.tilt_invert} ?disabled=${!t} @change=${k=>this.updateOpening({tilt_invert:k.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:_}`:_}`},p=bi(e),g=e.type==="door";return m`<section>
      <div class="nf-h3row"><h3>${this.t(`preset_${p}`)}</h3>${this.fixButton("opening",e.id)}</div>
      ${t?m`<div class="nf-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(ln).map(f=>m`<button class="nf-chip" aria-pressed=${f===p} @click=${()=>this.setOpeningPreset(e,f)}>${this.t(`preset_${f}`)}</button>`)}
          </div>`:_}
      ${t&&!i?m`<div class="nf-actions">
            <button class="nf-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:e.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(e.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${g?m`<button class="nf-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:e.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:_}
          </div>`:_}
      <div class="nf-form">
        ${this.num(this.t("width"),e.width,f=>this.updateOpening({width:Math.max(.3,f)}),.01,.3)}
        ${this.num(this.t("opening_position"),e.offset,f=>this.updateOpening({offset:Math.max(0,f)}),.01,0)}
        ${n?this.num(this.t("sill"),e.sill,f=>this.updateOpening({sill:Math.max(0,f)}),.01,0):_}
        ${this.num(this.t("opening_height"),e.height,f=>this.updateOpening({height:Math.max(.3,f)}),.01,.3)}
        ${i?_:this.renderStyleSelect(e)}
        ${this.renderSidelightFields(e)}
        <label class="nf-field nf-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${f=>this.updateOpening({mark:f.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${e.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${e.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?_:m`<label class="nf-field nf-wide"
          >${this.t(e.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!t} @change=${f=>this.updateOpening({hinge:f.target.value})}>
            <option value="left" ?selected=${e.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${e.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||g?this.entitySelect(this.t(n?"cover_entity":"door_cover"),e.cover,o("cover"),a,f=>this.updateOpening({cover:f})):_}
        ${(n||i||g)&&e.cover!=="none"&&(e.cover||o("cover"))?m`${this.entitySelect(this.t("cover_position_entity"),e.position??null,void 0,l,f=>this.updateOpening({position:f==="none"?null:f}))}
              ${e.position?m`<label class="nf-check nf-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!t}
                      .checked=${!!e.position_inverted}
                      @change=${f=>this.updateOpening({position_inverted:f.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:_}
              <label class="nf-check nf-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!t} .checked=${!!e.confirm} @change=${f=>this.updateOpening({confirm:f.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:_}
        ${n?m`${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${this.t("leaf_main")}</h4>`:_}
              ${u(1)} ${e.leaves===2?m`<h4 class="nf-lib-head nf-wide">${this.t("leaf_second")}</h4>${u(2)}`:_}`:m`${this.entitySelect(this.t(e.leaves===2?"contact_main":"contact_entity"),e.contact,o("contact"),c,f=>this.updateOpening({contact:f}))}
              ${e.leaves===2&&!i?this.entitySelect(this.t("contact_second"),e.contact2,void 0,c,f=>this.updateOpening({contact2:f==="none"?null:f})):_}
              ${g?m`<label class="nf-check nf-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!e.shut} ?disabled=${!t} @change=${f=>this.updateOpening({shut:f.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:_}`}
      </div>
      <p class="nf-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${t?m`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:_}
    </section>`}renderFurnitureForm(e){let t=this.isAdmin;return m`<section>
      <div class="nf-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${e.name?m`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:_}
        <label class="nf-field nf-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${hi.map(n=>m`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>m`<optgroup label=${Ae(n,this.hass?.language??"de")}>
                ${n.items.map(i=>{let o=Ke(n.id,i.id);return m`<option value=${o} ?selected=${o===e.type}>${Oe(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?m`<option value=${e.type} selected>${Yt(this.hass,e.type)}</option>`:_}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${ee(e.type)?_:m`<label class="nf-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?m`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="nf-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:_}
        ${fi(e)&&this.floor?m`${this.num(this.t("mount_height"),e.mount_y??ai(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?m`<button class="nf-btn nf-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:_}`:_}
      </div>
      ${e.type==="stairs"?m`<p class="nf-sub">${this.t("stairs_hint")}</p>`:_}
      ${e.type==="stairwell"?m`<p class="nf-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&To(vi(e),n.points))?m`<p class="nf-sub nf-pack-error">${this.t("stairwell_outside")}</p>`:_}`:_}
      ${e.type==="inverter"||e.type==="home_battery"?m`<div class="nf-form">
            <label class="nf-field nf-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>m`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:_}
      ${e.type==="lamp_pendant"?m`<div class="nf-form">
            <label class="nf-field nf-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>m`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:_}
      ${(()=>{let n=j(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!n?.length)return _;let i=n.find(s=>s.id===e.variant)??n[0],o=s=>s.name[this.hass?.language??"en"]??s.name.en??Object.values(s.name)[0];return m`<div class="nf-form">
          <div class="nf-field nf-wide">
            <span>${this.t("paint_colour")}: ${o(i)}</span>
            <div class="nf-swatches" role="radiogroup" aria-label=${this.t("paint_colour")}>
              ${n.map((s,a)=>m`<button type="button" class="nf-swatch" role="radio" aria-checked=${s.id===i.id} title=${o(s)} style=${`--sw:${s.hex}`} ?disabled=${!t} @click=${()=>this.updateFurniture({variant:a===0?null:s.id})}></button>`)}
            </div>
          </div>
        </div>`})()}
      ${zt(e.type)?this.renderFurnitureLinks(e):hc.has(e.type)?_:m`<div class="nf-form nf-links">${this.renderStateLinks(e)}</div>`} ${e.type==="parking"?this.renderParkingForm(e):_}
      ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&this.isAdmin?m`<section>
            <p class="nf-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:_}
      ${t?m`<div class="nf-actions">
            <button class="nf-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="nf-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?m`<button class="nf-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:_}
            <button class="nf-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:_}
    </section>`}renderHeadroom(e){let t=e.elevation+e.height;if(!(this._doc.settings.roof.sections??[]).some(o=>Gi(o,t)))return _;let i={settings:this._doc.settings};return E`${[1.5,2].map(o=>Ui(i,e.elevation,o).map(([s,a])=>{let[l,c]=this.toScreen(s),[d,h]=this.toScreen(a);return E`<line class="nf-headroom" x1=${l} y1=${c} x2=${d} y2=${h} />
          <text class="nf-headroom-label" x=${(l+d)/2} y=${(c+h)/2-4}>${H(this.hass,o,1)} m</text>`}))}`}paneView(){let t=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!t)return null;let n=t.target;return{theta:$(t.theta),phi:$(t.phi),radius:$(t.radius),...n?{target:{x:$(n.x),y:$(n.y),z:$(n.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}renderStateLinks(e){return m`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity:t==="none"?null:t}))}
              ${e.state_entity&&e.state_entity!=="none"?m`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity2:t==="none"?null:t}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?m`<label class="nf-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${t=>this.updateFurniture({state_split:t.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:_}`:_}
              <p class="nf-sub nf-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(e){if(!this.hass)return _;let t=this.hass,n=d=>{let h=structuredClone(this._doc.floors);for(let u of h)for(let p of u.furniture)p.id===e.id&&(p[d]=null);return st(t,h).get(e.id)?.[d]??null},i=fn(e.type),o=i&&(!nt(e.type)||Nr(e.type)),s=ee(e.type),a=this.entityOptions(d=>s?/^(light|switch|input_boolean)\./.test(d):o?/^(media_player|switch|input_boolean|light)\./.test(d):e.type==="radiator"?d.startsWith("climate."):e.type==="robot_vacuum"?d.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(d)||Lr(t.states[d])),l=this.entityOptions(d=>this.isPowerSensor(d)),c=e.type==="fridge_smart"?this.entityOptions(d=>d.startsWith("binary_sensor.")):[];return m`<div class="nf-form nf-links">
        ${e.type==="grid_point"?m`<p class="nf-sub nf-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":o?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),a,d=>this.updateFurniture({entity:d}))}
        ${!s&&!ze.includes(e.type)&&!zi(e.type)?this.renderStateLinks(e):_}
        ${s&&e.entity&&e.entity!=="none"?m`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(d=>d.startsWith("light.")&&d!==e.entity),d=>this.updateFurniture({color_entity:d==="none"?null:d}))}
              <p class="nf-sub nf-wide">${this.t("furn_color_entity_hint")}</p>`:_}
        ${s?this.glowScaleField(e.glow_scale,d=>this.updateFurniture({glow_scale:d})):_}
        ${s||e.type==="grid_point"?_:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,n("power"),l,d=>this.updateFurniture({power:d}))}

      </div>
      ${e.type==="meter"?m`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,l,d=>this.updateFurniture({export:d==="none"?null:d}))}
            <p class="nf-sub nf-wide">${this.t("furn_export_hint")}</p>
          </div>`:_}
      ${e.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let d=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===e.id).map(h=>h.name);return m`<p class="nf-sub nf-wide">${d.length?this.t("inverter_strings",{names:d.join(", ")}):this.t("inverter_strings_none")}</p>`})():_}
      ${e.type==="home_battery"?m`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(d=>q(d)&&(t.states[d]?.attributes.device_class==="battery"||t.states[d]?.attributes.unit_of_measurement==="%")),d=>this.updateFurniture({soc:d==="none"?null:d}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,l,d=>this.updateFurniture({charge:d==="none"?null:d}))}
            <p class="nf-sub nf-wide">${this.t("furn_charge_hint")}</p>
          </div>`:_}
      ${e.type==="wallbox"?m`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(d=>ir(d)||q(d)),d=>this.updateFurniture({status:d==="none"?null:d}))}
          </div>`:_}
      ${!s||e.entity?m`<label class="nf-check nf-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="nf-form">${this.markerSelect(e.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(e.icon,d=>this.updateFurniture({icon:d}))}</div>`:_}
      ${e.type==="robot_vacuum"?m`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,Eo(t,st(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(d=>q(d)),d=>this.updateFurniture({room_sensor:d}))}
          </div>`:_}
      ${e.type==="fridge_smart"?m`<div class="nf-form nf-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,c,d=>this.updateFurniture({door_left:d}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,c,d=>this.updateFurniture({door_right:d}))}
            </div>
            <p class="nf-sub">${this.t("fridge_hint")}</p>`:_}
      <p class="nf-sub">${this.t(s?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(w=>w.items.filter(y=>y.vehicle).map(y=>({id:Ke(w.id,y.id),label:`${Oe(y,n)} \xB7 ${Ae(w,n)}`}))),o=w=>w.startsWith("device_tracker.")?this.hass?.states[w]?.attributes.source_type==="router"?2:0:1,s=this.entityOptions(w=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(w)).sort((w,y)=>o(w.id)-o(y.id)),a=this.entityOptions(w=>/^(sensor|input_select|select|input_text)\./.test(w)),l=e.type_entity?this.hass?.states[e.type_entity]:void 0,c=Array.isArray(l?.attributes.options)?l.attributes.options:[],d=e.types??[],h=w=>this.updateFurniture({types:w}),u=(w,y)=>m`<select ?disabled=${!t} @change=${x=>y(x.target.value||null)}>
        <option value="" ?selected=${!w}>${this.t("parking_vehicle_none")}</option>
        ${i.map(x=>m`<option value=${x.id} ?selected=${x.id===w}>${x.label}</option>`)}
      </select>`,p=this.floor,g=p?.rooms.find(w=>w.points.length>=3&&I([e.x,e.z],w.points)),f=e.vehicle?j(e.vehicle):void 0,b=f?f.size[2]*(e.scale??1):0,v=!!g&&!!p&&b>p.height+1e-6;return m`<div class="nf-form nf-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,w=>this.updateFurniture({entity:w==="none"?null:w}))}
        <label class="nf-field nf-wide">${this.t("parking_vehicle")} ${u(e.vehicle??null,w=>this.updateFurniture({vehicle:w}))}</label>
        ${i.length?_:m`<p class="nf-sub nf-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),w=>this.updateFurniture({scale:Math.min(150,Math.max(30,w))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,a,w=>this.updateFurniture({type_entity:w==="none"?null:w}))}
        ${e.type_entity?m`<div class="nf-wide">
              <div class="nf-sub">${this.t("parking_types")}</div>
              ${d.map((w,y)=>m`<div class="nf-parking-row">
                  <input
                    type="text"
                    list="nf-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${w.state}
                    ?disabled=${!t}
                    @change=${x=>h(d.map((k,S)=>S===y?{...k,state:x.target.value}:k))}
                  />
                  ${u(w.vehicle,x=>h(d.map((k,S)=>S===y?{...k,vehicle:x??""}:k)))}
                  <button class="nf-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>h(d.filter((x,k)=>k!==y))}>✕</button>
                </div>`)}
              <datalist id="nf-parking-states">${c.map(w=>m`<option value=${w}></option>`)}</datalist>
              ${t?m`<button class="nf-btn" @click=${()=>h([...d,{state:c[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:_}
            </div>`:_}
      </div>
      ${v?m`<p class="nf-sub nf-warn">${this.t("parking_too_tall",{car:H(this.hass,b,2),room:H(this.hass,p.height,2)})}</p>`:_}
      <p class="nf-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("nextfloor.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let o=Gn(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(l=>{let c=Gn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return o.every(d=>c.includes(d))}):n;if(i&&!s.length)return _;let a=i?!0:this._libOpen.has(e);return m`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>this.toggleLibrary(e)}>
        <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${t} <span class="nf-lib-count">${s.length}</span>
      </button>
      ${a?m`<div class="nf-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:_}`}libraryHasHits(e){let t=Gn(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(ui).flatMap(([o,s])=>s.map(a=>`${this.t(`furn_${a}`)} ${ye(na,`furn_${a}`)} ${a.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(s=>`${Oe(s,n)} ${Object.values(s.name).join(" ")} ${s.id.replace(/_/g," ")} ${o.name} ${Ae(o,"en")}`))].some(o=>{let s=Gn(o);return t.every(a=>s.includes(a))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return m`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="nf-sub">${e?this.t("furniture_into",{room:e.name}):this.t("furniture_pick_room")}</p>
      <input
        class="nf-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${i=>this._furnQuery=i.target.value}
        @keydown=${i=>{i.key==="Escape"&&(this._furnQuery="")}}
      />
      ${t&&!this.libraryHasHits(t)?m`<p class="nf-sub">${this.t("furniture_search_none")}</p>`:_}
      ${Object.entries(ui).map(([i,o])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),o.map(s=>({type:s,label:this.t(`furn_${s}`),search:ye(na,`furn_${s}`)})),t))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,Ae(i,n),i.items.map(o=>({type:Ke(i.id,o.id),label:Oe(o,n),search:Object.values(o.name).join(" ")})),t))}
    </section>
    <div class="nf-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="nf-sub">${this.t("ext_teaser_text")}</span>
      <button class="nf-btn nf-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=o=>{this.showPreview(e,o.currentTarget)},i=ee(e)?"light":zt(e)?"switch":null;return m`<button
      class="nf-btn ${i?"nf-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?m`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Pt(i)} />
          </svg>`:_}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let o=await Xs(),[s,a,l]=Ge(e),c=o.furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:ho[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?m`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?m`<img src=${e.url} alt="" />`:m`<span class="nf-preview-wait"></span>`}
      <b>${Yt(this.hass,e.type)}</b>
    </div>`:_}renderDeviceForm(e){let t=this.isAdmin,n=W(e.entity_id),i=n==="light",o=e.mount??"ceiling",s=n?on(n,this.floor?.height??2.5,i?o:null):1;return m`<section>
      <div class="nf-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="nf-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Pt(n):""} />
        </svg>
        ${L(this.hass,e.entity_id)}
      </p>
      <div class="nf-form">
        ${i?m`<label class="nf-field nf-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>m`<option value=${a} ?selected=${a===o}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(e.glow_scale,a=>this.updateDevice({glow_scale:a}))}`:n==="camera"?m`<label class="nf-field nf-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:_}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?m`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <p class="nf-sub nf-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:_}
        ${n&&Dr.has(n)?m`<label class="nf-check nf-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:_}

        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="nf-field nf-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${L(this.hass,e.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        ${e.name?m`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:_}
        ${this.iconInput(e.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${t?m`<div class="nf-actions">
            <button class="nf-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?m`<button class="nf-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:_}
            ${this.renderAsFurniture(e)}
            <button
              class="nf-btn nf-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:_}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,o=n?be(n,e.area_id).filter(k=>At(W(k))):[],s=new Set([...this.floor?.placements.filter(k=>I([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>ee(k.type)&&k.entity&&I([k.x,k.z],e.points)).map(k=>k.entity)??[]]),a=n?ki(n,o):[],l=a.map(k=>k.primary).filter(k=>!s.has(k)),c=this._deviceQuery.trim().toLowerCase(),d=k=>!c||L(n,k,i).toLowerCase().includes(c)||k.includes(c),h=this.floor?.placements.filter(k=>W(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&I([k.x,k.z],e.points)).length,u=new Set(e.panel??[]),p=new Set(e.hidden??[]),g=new Set(e.no_state??[]),f=new Map;for(let k of this._doc.floors)for(let S of[...k.placements.map(M=>[M.entity_id,M.x,M.z]),...k.furniture.filter(M=>ee(M.type)&&M.entity).map(M=>[M.entity,M.x,M.z])]){let M=k.rooms.find(A=>I([S[1],S[2]],A.points));M&&M.id!==e.id&&f.set(S[0],M.name)}let b=(k,S=!1,M=i)=>{let A=s.has(k),R=A?void 0:f.get(k);return m`<div class="nf-row nf-dev-row ${S?"nf-dev-extra":""} ${p.has(k)?"nf-dev-hidden":""}">
        <button class="nf-dev-name ${A?"":"nf-muted"}" ?disabled=${!A} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Pt(W(k))} />
          </svg>
          <span>${L(n,k,M)}${R?m`<small class="nf-muted"> · ${this.t("devices_placed_in",{room:R})}</small>`:_}</span>
        </button>
        ${t&&!S?m`<button
              class="nf-pin ${p.has(k)?"nf-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:p.has(k)?[...p].filter(F=>F!==k):[...p,k]})}
            >
              ${p.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:_}
        ${t&&!S&&!p.has(k)?m`<button
              class="nf-pin ${g.has(k)?"nf-pin-on":""}"
              aria-pressed=${g.has(k)}
              title=${this.t(g.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:g.has(k)?[...g].filter(F=>F!==k):[...g,k]})}
            >
              ${g.has(k)?"\u2205":"Aa"}
            </button>`:_}
        ${t&&!A?m`<button
              class="nf-pin ${u.has(k)?"nf-pin-on":""}"
              aria-pressed=${u.has(k)}
              title=${this.t(u.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(k)?[...u].filter(F=>F!==k):[...u,k]})}
            >
              ${u.has(k)?"\u2605":"\u2606"}
            </button>`:_}
        ${t?A?m`<button class="nf-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:m`<button class="nf-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:_}
      </div>`},v=t?this._devSource:"area",w=k=>{this._devSource=k,this._deviceQuery=""},y=m`<input
      class="nf-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,x=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return m`<section>
      <h3>${this.t("devices")}</h3>
      <p class="nf-sub">${this.t("devices_panel_hint")}</p>
      ${t?m`<div class="nf-seg nf-dev-source">
            <button aria-pressed=${v==="area"} @click=${()=>w("area")}>${this.t("devices_src_area")}${o.length?` (${a.length})`:""}</button>
            <button aria-pressed=${v==="other"} @click=${()=>w("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${v==="none"} @click=${()=>w("none")}>${this.t("devices_src_none")}</button>
          </div>`:_}
      ${v!=="area"?m`${y}${this.renderDeviceExtras(e,b,v)}`:e.area_id?o.length?m`${t&&(h??0)>=2?m`<button class="nf-btn nf-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:_}
              ${o.length>8?y:_}
              <div class="nf-room-list">
                ${a.map(k=>{let S=k.others.filter(d),M=this._expanded.has(k.primary)||!!c&&S.length>0;return!d(k.primary)&&!S.length?_:m`${b(k.primary)}
                  ${k.others.length?m`<button
                        class="nf-more"
                        @click=${()=>{let A=new Set(this._expanded);A.has(k.primary)?A.delete(k.primary):A.add(k.primary),this._expanded=A}}
                      >
                        ${M?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:_}
                  ${M?(c?S:k.others).map(A=>b(A,!0)):_}`})}
              </div>
              ${t&&l.length>1?m`<button class="nf-link nf-place-all" @click=${x}>${this.t("devices_place_all_n",{n:l.length})}</button>`:_}
              <p class="nf-sub">${this.t("devices_hint")}</p>`:m`<p class="nf-sub">${this.t("devices_none")}</p>`:m`<p class="nf-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return _;let o=50,s=this._deviceQuery.trim().toLowerCase(),a=(d,h)=>!s||`${L(i,d,h)} ${d} ${h??""}`.toLowerCase().includes(s),l=d=>d>0?m`<p class="nf-sub">${this.t("devices_narrow",{n:d})}</p>`:_;if(n==="other"){let d=0,h=0,u=mo(i,e.area_id).map(p=>{let g=p.ids.filter(b=>a(b,p.name)),f=g.slice(0,Math.max(0,o-d));return d+=f.length,h+=g.length-f.length,f.length?m`<div class="nf-dev-area">${p.name}</div>${f.map(b=>t(b,!1,p.name))}`:_});return d?m`<div class="nf-room-list">${u}</div>${l(h)}`:m`<p class="nf-sub">${this.t("devices_none")}</p>`}let c=go(i).filter(d=>a(d));return c.length?m`<div class="nf-room-list">${c.slice(0,o).map(d=>t(d))}</div>${l(c.length-Math.min(c.length,o))}`:m`<p class="nf-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return _;let n=(s,a)=>{let l={...e.climate??{},[s]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!e.climate&&Object.values(e.climate).some(s=>s!=null),o=(s,a)=>{let l=$i[s],c=bo(t,this.floor??null,{...e,climate:null},s),d=this.entityOptions(h=>q(h)&&t.states[h]?.attributes.device_class===l).map(h=>({...h,rank:(rt(t,h.id)===e.area_id?0:1)+(Si(t,h.id)?0:2)})).sort((h,u)=>h.rank-u.rank).map(({id:h,label:u})=>({id:h,label:u}));return this.entitySelect(a,e.climate?.[s]??null,c[0]??null,d,h=>n(s,h))};return m`<details class="nf-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="nf-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="nf-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(e){let t=e.background;return m`<details class="nf-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="nf-form">
        <label class="nf-btn nf-wide nf-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${t?m`${this.num(this.t("x"),t.x,n=>this.updateFloor({background:{...t,x:n}}))}
              ${this.num(this.t("z"),t.z,n=>this.updateFloor({background:{...t,z:n}}))}
              ${this.num(this.t("background_width"),t.width,n=>this.updateFloor({background:{...t,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),t.rotation??0,n=>this.updateFloor({background:{...t,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?m`<button
                      class="nf-btn nf-wide ${this._bgEdit?"nf-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="nf-sub nf-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="nf-btn nf-wide ${this._bgLevel?"nf-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?m`<p class="nf-sub nf-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:_}
                  <button class="nf-btn nf-wide ${this._bgRuler?"nf-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?m`<p class="nf-sub nf-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:m`<p class="nf-sub nf-wide">${this.t("bg_ruler_length_hint",{m:H(this.hass,Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]),2)})}</p>
                          <label class="nf-field"
                            >${this.t("bg_ruler_length")}
                            <input type="number" min="0.01" step="0.01" .value=${this._bgRulerLen?String(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=Number(n.target.value.replace(",","."))||0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="nf-btn nf-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:_}`:_}
              <label class="nf-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(t.opacity)}
                  @change=${n=>this.updateFloor({background:{...t,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="nf-btn nf-danger nf-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:_}
      </div>
    </details>`}static styles=[pt,Rn,Ys]};customElements.get("nf-editor")||customElements.define("nf-editor",cr);function Gn(r){return r.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var na={language:"en"};export{cr as NfEditor};
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
