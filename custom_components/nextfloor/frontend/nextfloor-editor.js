/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var bn=globalThis,vn=bn.ShadowRoot&&(bn.ShadyCSS===void 0||bn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pr=Symbol(),Ui=new WeakMap,Ot=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==pr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(vn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ui.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ui.set(t,e))}return e}toString(){return this.cssText}},ji=r=>new Ot(typeof r=="string"?r:r+"",void 0,pr),Me=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Ot(t,r,pr)},Zi=(r,e)=>{if(vn)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=bn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,r.appendChild(n)}},fr=vn?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ji(t)})(r):r;var{is:oc,defineProperty:sc,getOwnPropertyDescriptor:ac,getOwnPropertyNames:lc,getOwnPropertySymbols:cc,getPrototypeOf:dc}=Object,yn=globalThis,qi=yn.trustedTypes,uc=qi?qi.emptyScript:"",hc=yn.reactiveElementPolyfillSupport,Dt=(r,e)=>r,mr={toAttribute(r,e){switch(e){case Boolean:r=r?uc:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Qi=(r,e)=>!oc(r,e),Yi={attribute:!0,type:String,converter:mr,reflect:!1,useDefault:!1,hasChanged:Qi};Symbol.metadata??=Symbol("metadata"),yn.litPropertyMetadata??=new WeakMap;var Oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Yi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&sc(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:o}=ac(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Yi}static _$Ei(){if(this.hasOwnProperty(Dt("elementProperties")))return;let e=dc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dt("properties"))){let t=this.properties,n=[...lc(t),...cc(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(fr(i))}else e!==void 0&&t.push(fr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Zi(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:mr).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=n.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:mr;this._$Em=i;let a=s.fromAttribute(t,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Qi)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[i,o]of n){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Oe.elementStyles=[],Oe.shadowRootOptions={mode:"open"},Oe[Dt("elementProperties")]=new Map,Oe[Dt("finalized")]=new Map,hc?.({ReactiveElement:Oe}),(yn.reactiveElementVersions??=[]).push("2.1.2");var xr=globalThis,Xi=r=>r,wn=xr.trustedTypes,Ji=wn?wn.createPolicy("lit-html",{createHTML:r=>r}):void 0,oo="$lit$",Ne=`lit$${Math.random().toFixed(9).slice(2)}$`,so="?"+Ne,pc=`<${so}>`,Xe=document,Ht=()=>Xe.createComment(""),Lt=r=>r===null||typeof r!="object"&&typeof r!="function",kr=Array.isArray,fc=r=>kr(r)||typeof r?.[Symbol.iterator]=="function",gr=`[ 	
\f\r]`,It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eo=/-->/g,to=/>/g,Ye=RegExp(`>|${gr}(?:([^\\s"'>=/]+)(${gr}*=${gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),no=/'/g,ro=/"/g,ao=/^(?:script|style|textarea|title)$/i,$r=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=$r(1),M=$r(2),ju=$r(3),De=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),io=new WeakMap,Qe=Xe.createTreeWalker(Xe,129);function lo(r,e){if(!kr(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ji!==void 0?Ji.createHTML(e):e}var mc=(r,e)=>{let t=r.length-1,n=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=It;for(let a=0;a<t;a++){let l=r[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===It?d[1]==="!--"?s=eo:d[1]!==void 0?s=to:d[2]!==void 0?(ao.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Ye):d[3]!==void 0&&(s=Ye):s===Ye?d[0]===">"?(s=i??It,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Ye:d[3]==='"'?ro:no):s===ro||s===no?s=Ye:s===eo||s===to?s=It:(s=Ye,i=void 0);let _=s===Ye&&r[a+1].startsWith("/>")?" ":"";o+=s===It?l+pc:u>=0?(n.push(c),l.slice(0,u)+oo+l.slice(u)+Ne+_):l+Ne+(u===-2?a:_)}return[lo(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ct=class r{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,d]=mc(e,t);if(this.el=r.createElement(c,n),Qe.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Qe.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(oo)){let h=d[s++],_=i.getAttribute(u).split(Ne),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:f[2],strings:_,ctor:f[1]==="."?br:f[1]==="?"?vr:f[1]==="@"?yr:ct}),i.removeAttribute(u)}else u.startsWith(Ne)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(ao.test(i.tagName)){let u=i.textContent.split(Ne),h=u.length-1;if(h>0){i.textContent=wn?wn.emptyScript:"";for(let _=0;_<h;_++)i.append(u[_],Ht()),Qe.nextNode(),l.push({type:2,index:++o});i.append(u[h],Ht())}}}else if(i.nodeType===8)if(i.data===so)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(Ne,u+1))!==-1;)l.push({type:7,index:o}),u+=Ne.length-1}o++}}static createElement(e,t){let n=Xe.createElement("template");return n.innerHTML=e,n}};function lt(r,e,t=r,n){if(e===De)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl,o=Lt(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=lt(r,i._$AS(r,e.values),i,n)),e}var _r=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Xe).importNode(t,!0);Qe.currentNode=i;let o=Qe.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Bt(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new wr(o,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(o=Qe.nextNode(),s++)}return Qe.currentNode=Xe,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Bt=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=lt(this,e,t),Lt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==De&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ct.createElement(lo(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{let o=new _r(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=io.get(e.strings);return t===void 0&&io.set(e.strings,t=new Ct(e)),t}k(e){kr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let o of e)i===t.length?t.push(n=new r(this.O(Ht()),this.O(Ht()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Xi(e).nextSibling;Xi(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,i){let o=this.strings,s=!1;if(o===void 0)e=lt(this,e,t,0),s=!Lt(e)||e!==this._$AH&&e!==De,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=lt(this,a[n+l],t,l),c===De&&(c=this._$AH[l]),s||=!Lt(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},br=class extends ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},vr=class extends ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},yr=class extends ct{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){if((e=lt(this,e,t,0)??g)===De)return;let n=this._$AH,i=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==g&&(n===g||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){lt(this,e)}};var gc=xr.litHtmlPolyfillSupport;gc?.(Ct,Bt),(xr.litHtmlVersions??=[]).push("3.3.3");var co=(r,e,t)=>{let n=t?.renderBefore??e,i=n._$litPart$;if(i===void 0){let o=t?.renderBefore??null;n._$litPart$=i=new Bt(e.insertBefore(Ht(),o),o,void 0,t??{})}return i._$AI(r),i};var Sr=globalThis,de=class extends Oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=co(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return De}};de._$litElement$=!0,de.finalized=!0,Sr.litElementHydrateSupport?.({LitElement:de});var _c=Sr.litElementPolyfillSupport;_c?.({LitElement:de});(Sr.litElementVersions??=[]).push("4.2.2");var Ie=(r,e,t={})=>r.callWS({type:`nextfloor/${e}`,...t});async function xn(r,e){return(await Ie(r,"image/get",{image_id:e})).data}async function kn(r,e,t){await Ie(r,"image/set",{image_id:e,data:t})}async function uo(r){return(await Ie(r,"history/list")).snapshots}async function ho(r){await Ie(r,"history/snapshot")}async function po(r,e){return(await Ie(r,"history/restore",{snapshot_id:e})).revision}var fo=(r,e)=>Ie(r,"packs/import",{pack:e});async function mo(r,e){await Ie(r,"packs/remove",{pack_id:e})}var go=r=>Ie(r,"backup/export"),_o=(r,e,t)=>Ie(r,"backup/import",{building:e,packs:t});var Mr=r=>r.slice(0,r.indexOf(".")),bc={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},V=r=>bc[Mr(r)]??null,bo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],vo=new Set(["light","switch","fan"]),Wt=r=>r!==null&&r!=="scene"&&r!=="script",dt=r=>!r||r.state==="unavailable"||r.state==="unknown";function B(r,e,t){let n=r?.states[e]?.attributes.friendly_name??r?.entities?.[e]?.name??e;if(!t||n.length<=t.length+1||!n.toLowerCase().startsWith(`${t.toLowerCase()} `))return n;let i=n.slice(t.length+1);return i[0].toUpperCase()+i.slice(1)}var yo=r=>!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum";function $n(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t==="floor")return 1.95;if(r==="light"&&t==="table")return 1.25;if(r==="light"&&t==="wall")return 1.95;switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var vc=[],Sn=new Map,yc=0,Je=(r,e)=>`pack:${r}:${e}`,ut=r=>r.startsWith("pack:");function xo(r){vc=r,Sn=new Map;for(let e of r)for(let t of e.items)Sn.set(Je(e.id,t.id),t);yc+=1}var wc={};function ee(r){if(!ut(r))return;let e=Sn.get(r);if(e)return e;let[,t,...n]=r.split(":"),i=wc[t];return i?Sn.get(Je(i,n.join(":"))):void 0}var ko=r=>ee(r)?.parts.find(e=>e.screen),wo=.06;function $o(r){let e=ee(r);if(!e)return!1;let[t,n,i]=e.size;return e.parts.filter(o=>o.screen).some(o=>{let[s,a]=[o.w*t,o.d*n,o.h*i].sort((l,c)=>c-l);return a>=wo&&s>=wo})}function Ke(r){return Le[r]??ee(r)?.size??[.6,.6,.8]}function Vt(r){let e=ee(r);return Eo.has(r)||!!e?.electric||!!e?.light}function Ge(r,e){return r.name[e.split("-")[0]]??r.name.en??Object.values(r.name)[0]??r.id}var xc={wohnen:"Living & Pets",kino:"Home Cinema & Gaming",kueche:"Kitchen Extras",bad:"Bathroom Extras",schlafen:"Bedroom & Kids",technik:"Office & Homelab",energie:"Energy & Building Services",garten:"Garden & Terrace",fitness:"Fitness",fahrzeuge:"Vehicles"};function He(r,e){if(e.split("-")[0]==="de")return r.name;let t=/^nextfloor\.(.+)$/.exec(r.id)?.[1];return t&&xc[t]||r.name}function Fr(r,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return So;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));let t=ee(e.type);if(!t)return Mo(e);switch(t.mount){case"surface":return Fo(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return 0}}var Ro=["always","no_power","never"],Ao=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],zo=["navigate","more_info","service","fire_dom_event"];function Er(r,e,t){return r?e?!!t.lock_plan:!!r.locked:!1}var Po=["rain","snow","fog","clouds","lightning","sky"],To=["rain","snow","clouds","lightning","sky"],Oo=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola"],Rr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ar(r){return r==="hedge"||r==="fence"||r==="pergola"}var Do=["x","-x","z","-z"];function kc(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of r.points){let u=o(c,d);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,t)-s)/(a-s)));return n*l}function $c(r,e,t,n){return Io(r)+(e.offset??0)+Rr[e.type]-kc(e,t,n)}function Io(r){return r.elevation>.3?0:-.2}function Ho(r,e,t){let n=(r.outdoor??[]).filter(o=>!Ar(o.type)&&o.type!=="pool"&&O([e,t],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?$c(r,i,e,t):Io(r)}var Sc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Lo=["wood","oak","tiles","carpet","stone","concrete"],Co={type:"none",pitch:35,overhang:.4},Mc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Co}};function Bo(r,e,t){return{id:r,name:e,elevation:t,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Fc=2.75;function Wo(r,e){if(e!=null&&Number.isFinite(e))return Math.round(e*Fc*100)/100;let t=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return t?Math.round((t.elevation+t.height+.25)*100)/100:0}function Vo(r,e,t){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return e.map((a,l)=>{let c=o+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:t(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function No(r,e,t,n){let i=r.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[a,l]=e,c=r.x-a*(r.w/2)*o+l*(r.d/2)*s,d=r.z-a*(r.w/2)*s-l*(r.d/2)*o,u=t[0]-c,h=t[1]-d,_=y=>Math.max(.1,Math.round(y/n)*n),f=_((u*o+h*s)*a),m=_((-u*s+h*o)*l),b=y=>Math.round(y*1e3)/1e3;return{x:b(c+a*(f/2)*o-l*(m/2)*s),z:b(d+a*(f/2)*s+l*(m/2)*o),w:b(f),d:b(m)}}var zr=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","parking","fridge_smart","stairwell"],Pr={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","robot_vacuum"],vehicles:["parking"]},Fe=["meter","inverter","home_battery","wallbox","grid_point"],Ko=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),So=1.75;function Tr(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:ee(r.type)?.mount!=="ceiling"}function le(r){return Ko.has(r)||!!ee(r)?.light}var Ec=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Go(r,e,t,n=0){let i=te(r.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<e;l++)for(let c=0;c<t;c++){let d=[Math.round((i.x0+n+o/t*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/e*(l+.5))*1e3)/1e3];O(d,r.points)&&a.push(d)}return a}function ht(r,e,t){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[t];return[n(r[0]+i*e),n(r[1]+o*e)]}function Mo(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Fo(r,e,t){let n=0;for(let i of r.furniture)!(Ec.has(i.type)||ee(i.type)?.surface)||!O([e,t],Hr(i))||(n=Math.max(n,i.h));return n}var Eo=new Set([...Ko,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Le={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Or=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Dr=["standard","bars","glass_wall"];function Nt(r,e){return r.type==="door"?r.style&&Or.includes(r.style)?r.style:e?"front":"interior":r.style&&Dr.includes(r.style)?r.style:"standard"}function Uo(r,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",o=r-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),a=(o-s)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=o-.5;if(l+c>d){let h=Math.max(0,d)/(l+c);l*=h,c*=h}return i?{panels:[[.02,.02+l],[r-.02-c,r-.02]],x0:.02+l,x1:r-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:r-.02}:{panels:[[r-.02-l,r-.02]],x0:.02,x1:r-.02-l}}function Ir(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var pt={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Mn(r){if(r.type==="garage")return"garage";if(r.type==="window"&&r.style==="glass_wall")return"glass_wall";let e=r.leaves===2;return r.type==="door"?!e&&r.style&&Ir(r.style)?"front":e?"door_double":"door":r.sill<.1?e?"terrace_double":"terrace":e?"window_double":"window"}function Fn(r){r.energy={...Sc,...r.energy??{}},r.presence=r.presence??[],r.settings={...Mc,...r.settings,roof:{...Co,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of t){let o=n[i.mount??"ceiling"],[s,a,l]=Le[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function D(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function se(r){let e=0;for(let t=0;t<r.length;t++){let[n,i]=r[t],[o,s]=r[(t+1)%r.length];e+=n*s-o*i}return e/2}function _e(r){return Math.abs(se(r))}function ue(r){let e=se(r);if(Math.abs(e)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let t=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],c=o*l-a*s;t+=(o+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Kt(r){if(r.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=r[e],[i,o]=r[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function te(r){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[o,s]of r)e=Math.min(e,o),t=Math.min(t,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:e,z0:t,x1:n,z1:i}}function Hr(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function O(r,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[o,s]=e[n],[a,l]=e[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(t=!t)}return t}var jo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Rc=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ac=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),zc=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Pc=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ft(r,e){let t=r.entities?.[e];return t&&(t.area_id||(t.device_id?r.devices?.[t.device_id]?.area_id:null))||null}var Yo=(r,e)=>{let t=r.entities?.[e];return!!(t?.hidden||t?.entity_category)};function Zo(r,e){let t=V(e),n=r.states[e];if(!t||!n||Yo(r,e))return!1;let i=n.attributes.device_class;return t==="sensor"?i?Rc.has(i):Ac.has(String(n.attributes.unit_of_measurement??"")):t==="binary"?i?zc.has(i):!!r.entities?.[e]?.area_id:!0}function Tc(r,e){let t=r.states[e];return V(e)!=="sensor"||!t?.attributes.unit_of_measurement||Yo(r,e)||Pc.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||dt(t)}var En=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power",qo=null;function Lr(r,e){let t=r.get(e);return t||r.set(e,t=[]),t}function Oc(r){let e=new Map,t=new Map,n=new Map,i=new Map,o=[],s=c=>{(Zo(r,c)||Tc(r,c))&&Wt(V(c))&&o.push(c)};for(let[c,d]of Object.entries(r.entities??{})){let u=d.device_id;u&&d.area_id&&(i.get(u)??i.set(u,new Set).get(u)).add(d.area_id),u&&En(r,c)&&Lr(t,u).push(c),u&&!d.hidden&&!d.entity_category&&(n.get(u)??n.set(u,new Set).get(u)).add(Mr(c));let h=ft(r,c);h===null?s(c):Zo(r,c)&&Lr(e,h).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||s(c);let a=c=>bo.indexOf(V(c));o.sort((c,d)=>a(c)-a(d)||B(r,c).localeCompare(B(r,d)));for(let[c,d]of e){let u=r.areas?.[c]?.name;d.sort((h,_)=>a(h)-a(_)||B(r,h,u).localeCompare(B(r,_,u)))}let l=new Set;for(let[c,d]of i)d.size>1&&l.add(c);return{entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,byArea:e,powerByDevice:t,withoutArea:o,domainsByDevice:n,hubs:l}}function mt(r){let e=qo;return e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount))?e:qo=Oc(r)}function Ee(r,e){return!e||!r.entities?[]:mt(r).byArea.get(e)??[]}function Qo(r,e){if(!r.entities)return[];let t=[];for(let[n,i]of mt(r).byArea){let o=i.filter(s=>Wt(V(s)));n!==e&&o.length>0&&t.push({areaId:n,name:r.areas?.[n]?.name??n,ids:o})}return t.sort((n,i)=>n.name.localeCompare(i.name))}var Xo=r=>r.entities?mt(r).withoutArea:[],Jo=(r,e)=>!!r.entities&&mt(r).hubs.has(e),Cr=(r,e)=>r.entities?mt(r).powerByDevice.get(e)??[]:[];function Br(r,e){let t=new Map;for(let i of e)Lr(t,r.entities?.[i]?.device_id??`entity:${i}`).push(i);let n=new Map(e.map((i,o)=>[i,o]));return[...t.values()].map(i=>{let o=i.find(s=>!r.entities?.[s]?.name)??i[0];return{primary:o,others:i.filter(s=>s!==o)}}).sort((i,o)=>n.get(i.primary)-n.get(o.primary))}var Wr=(r,e)=>Br(r,e).map(t=>t.primary),Vr={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Dc=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Ic=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Hc=new RegExp(`(${Ic.join("|")})`,"i");function Nr(r,e){let t=r.entities?.[e]?.device_id,n=t&&!Jo(r,t)?mt(r).domainsByDevice.get(t):void 0;return n&&[...n].some(i=>Dc.has(i))?!1:!Hc.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function es(r,e,t,n){let i=t.climate?.[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=o.filter(c=>O([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(o.filter(c=>!O([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...Ee(r,t.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&r.states[c]?.attributes.device_class===Vr[n]&&Nr(r,c))}var Lc=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Cc=new Set(["garage","gate"]),Bc=new Set(["window","opening"]);function Gt(r,e,t=!1){let n=new Map;return r.forEach((i,o)=>{let s=t&&e.length===1?e[0]:e[o];s&&n.set(i.id,s)}),n}var ts=(r,e)=>r==="none"?null:r??e??null,Rn=r=>r&&r!=="none"?r:null;function Kr(r,e){let t=new Map;for(let n of e)for(let i of n.rooms){let o=n.openings.filter(m=>m.room_id===i.id).sort((m,b)=>m.edge-b.edge||m.offset-b.offset);if(o.length===0)continue;let s=Ee(r,i.area_id),a=m=>r.states[m]?.attributes.device_class,l=m=>s.filter(b=>V(b)==="binary"&&m(a(b)??"")),c=m=>o.filter(b=>b.type===m),d=Gt(c("window"),s.filter(m=>V(m)==="cover"&&Lc.has(a(m))),!0),u=Gt(c("window"),l(m=>Bc.has(m))),h=Gt(c("door"),l(m=>m==="door")),_=Gt(c("garage"),s.filter(m=>V(m)==="cover"&&Cc.has(a(m)??""))),f=Gt(c("garage"),l(m=>m==="garage_door"));for(let m of o){let b=m.type==="window"?d:m.type==="garage"?_:null,y=m.type==="window"?u:m.type==="garage"?f:h,w=m.leaves===2;t.set(m.id,{cover:ts(m.cover,b?.get(m.id)),contact:m.sensor==="handle"&&m.contact==null?null:ts(m.contact,y.get(m.id)),tilt:m.tilt==="none"?null:m.tilt,contact2:w?Rn(m.contact2):null,tilt2:w?Rn(m.tilt2):null,position:Rn(m.position),positionInverted:!!m.position_inverted,tiltAngle:Rn(m.tilt_angle),tiltMax:m.tilt_max??null,tiltOffset:m.tilt_offset??null,tiltInvert:!!m.tilt_invert,shut:!!m.shut})}}return t}var Wc=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Gr(r){if(!r||dt(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:"",r.state]){let n=t.trim(),i=n&&Wc.find(([o])=>o.test(n));if(i)return i[1]}return null}var ns=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,rs=/(kühl|fridge|gefrier|freezer)/i,is=/(spülmaschine|geschirrspül|dishwasher)/i,Vc=/(kochfeld|herd|induktion|cooktop)/i,Nc={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:ns,tv_wall:ns,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:rs,fridge_smart:rs,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:is,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Vc,sink:is,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},os={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},ss=new Set(["tv_board","tv_wall"]);var An=r=>ss.has(r)||!!ko(r),jr=r=>An(r)||r==="desk"||r==="fridge_smart",Kc=r=>!!r&&r!=="none";function Gc(r,e){if(En(r,e))return e;let t=r.entities?.[e]?.device_id;return t?Cr(r,t).find(n=>n!==e)??null:null}var Uc=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&O([e,t],n.points));function Ur(r,e,t,n){return r.find(i=>e?.test(t(i)))??(n?r[0]??null:null)}function et(r,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(Kc));for(let o of n.furniture){let s=o.type in os,a=s?os[o.type]:Nc[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=Uc(n,o.x,o.z),c=(l?Wr(r,Ee(r,l.area_id)):[]).filter(f=>!i.has(f)),d=f=>`${f} ${B(r,f)}`,u=f=>c.filter(m=>V(m)===f),h=o.entity==="none"?null:o.entity??null;if(o.entity==null){if(s)h=Ur(u("light"),a,d,!0);else if(o.type==="robot_vacuum"){let f=l?.area_id??null;h=Object.keys(r.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&ft(r,m)===f)??null}else if(o.type==="radiator")h=Ur(u("climate"),a,d,!0);else if(An(o.type)){let f=u("media");h=f.find(m=>r.states[m]?.attributes.device_class==="tv")??Ur(f,a,d,ss.has(o.type))}else a&&(h=c.find(f=>["switch","media","fan"].includes(V(f)??"")&&a.test(d(f)))??null);h&&i.add(h)}let _=o.power==="none"?null:o.power??null;o.power==null&&(_=h?Gc(r,h):null,!_&&a&&l&&!s&&(_=Ee(r,l.area_id).find(f=>En(r,f)&&!i.has(f)&&a.test(d(f)))??null),_&&i.add(_)),(h||_)&&t.set(o.id,{entity:h,power:_})}}return t}function jc(r,e){return Math.min(...e.map((t,n)=>{let i=e[(n+1)%e.length],[o,s]=[i[0]-t[0],i[1]-t[1]],a=Math.min(1,Math.max(0,((r[0]-t[0])*o+(r[1]-t[1])*s)/(o*o+s*s||1)));return Math.hypot(r[0]-t[0]-o*a,r[1]-t[1]-s*a)}))}function ls(r,e,t=[]){let n=r.points;if(n.length<3||e.length===0)return[];let i=n.map(y=>y[0]),o=n.map(y=>y[1]),[s,a,l,c]=[Math.min(...i),Math.max(...i),Math.min(...o),Math.max(...o)],d=Math.min(a-s,c-l),u=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),_=Math.min(.7,d/4),f=ue(n),m=[];for(let y=s+u/2;y<a;y+=u)for(let w=l+u/2;w<c;w+=u){let v=[y,w];if(!O(v,n))continue;let x=jc(v,n);x>=h&&m.push({at:v,wallDistance:x})}m.length===0&&m.push({at:f,wallDistance:0});let b=[...t];return e.map(y=>{let w=V(y)==="light",v=m[0].at,x=-1/0;for(let{at:$,wallDistance:S}of m){let F=b.length?Math.min(...b.map(R=>Math.hypot($[0]-R[0],$[1]-R[1]))):3,P=Math.hypot($[0]-f[0],$[1]-f[1]),T=Math.min(F,3)*2;P<_&&!w&&(T-=10),T-=w?P*.35:S*1.2,T>x+1e-9&&(x=T,v=$)}let k=[Math.round(v[0]*100)/100,Math.round(v[1]*100)/100];return b.push(k),{entity_id:y,x:k[0],z:k[1],y:null,mount:null}})}var as=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function cs(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;return!n||!r.entities?null:Object.values(r.entities).find(o=>o.device_id===n&&o.entity_id.startsWith("sensor.")&&(as.test(o.translation_key??"")||as.test(o.entity_id.split(".")[1])))?.entity_id??null}var Z=(r,e,t,n,i="")=>M`<rect class=${i} x=${Math.min(r,t)} y=${Math.min(e,n)} width=${Math.abs(t-r)} height=${Math.abs(n-e)} />`,U=(r,e,t,n,i="")=>M`<line class=${i} x1=${r} y1=${e} x2=${t} y2=${n} />`,Zc=(r,e="")=>M`<polygon class=${e} points=${r.map(t=>t.join(",")).join(" ")} />`,Y=(r,e,t,n="")=>M`<circle class=${n} cx=${r} cy=${e} r=${t} />`,Zr=(r,e,t,n,i="")=>M`<ellipse class=${i} cx=${r} cy=${e} rx=${t} ry=${n} />`;function qr(r,e,t){let n=[];for(let i=1;i<t;i++){let o=-r/2+r/t*i;n.push(U(o,e/2,o,e/2-Math.min(.12,e*.3)))}return n}function ds(r,e,t,n){let i=Math.min(.24,e*.28),o=n?Math.min(.2,r*.12):0,s=[Z(-r/2,-e/2,r/2,-e/2+i,"nf-sym-fill")];n&&s.push(Z(-r/2,-e/2,-r/2+o,e/2,"nf-sym-fill"),Z(r/2-o,-e/2,r/2,e/2,"nf-sym-fill"));let a=r-2*o;for(let l=1;l<t;l++){let c=-r/2+o+a/t*l;s.push(U(c,-e/2+i,c,e/2-.02))}return s}function us(r,e,t){switch(r){case"sofa":return ds(e,t,Math.max(1,Math.round((e-.4)/.62)),!0);case"armchair":return ds(e,t,1,!0);case"bench":return[Z(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill")];case"corner_bench":{let n=Math.min(.5,t*.4);return[Z(-e/2,-t/2,e/2,-t/2+.08,"nf-sym-fill"),Z(-e/2,-t/2,-e/2+.08,t/2,"nf-sym-fill"),U(-e/2+n,-t/2+n,e/2,-t/2+n),U(-e/2+n,-t/2+n,-e/2+n,t/2)]}case"chair":return[Z(-e/2,-t/2,e/2,-t/2+.06,"nf-sym-fill")];case"office_chair":return[Y(0,.03,Math.min(e,t)*.36),Z(-e*.35,-t/2+.02,e*.35,-t/2+.1,"nf-sym-fill")];case"bar_stool":case"table_round":return[Y(0,0,Math.min(e,t)*.42)];case"stool":return[Z(-e/2+.04,-t/2+.04,e/2-.04,t/2-.04)];case"table":case"coffee_table":case"desk":{let n=[Z(-e/2+.05,-t/2+.05,e/2-.05,t/2-.05)];return r==="desk"&&n.push(U(-.3,-t/2+.1,.3,-t/2+.1,"nf-sym-strong")),n}case"bed":case"bunk_bed":{let n=e>1.2?2:1,i=(e-.2)/n,o=[Z(-e/2,-t/2,e/2,-t/2+.07,"nf-sym-fill"),U(-e/2,-t/2+(t-.1)*.36,e/2,-t/2+(t-.1)*.36)];for(let s=0;s<n;s++)o.push(Z(-e/2+.13+i*s,-t/2+.12,-e/2+.07+i*(s+1),-t/2+.12+Math.min(.4,t*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return qr(e,t,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(e/.5)));case"coat_rack":return[Z(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),...qr(e,t,Math.max(2,Math.round(e/.5)))];case"island":return[U(-e/2,t/2-.3,e/2,t/2-.3)];case"fridge":return[U(-e/2+.06,t/2-.04,e/2-.06,t/2-.04,"nf-sym-strong")];case"stove":{let n=Math.min(e,t)*.14;return[Y(-e*.22,-t*.2,n),Y(e*.22,-t*.2,n*.8),Y(-e*.22,t*.2,n*.8),Y(e*.22,t*.2,n)]}case"sink":{let n=Math.min(.5,e-.2);return[Z(-n/2,-t/2+.1,n/2,t/2-.08),Y(0,-t/2+.06,.025,"nf-sym-fill")]}case"dishwasher":return[U(-e/2+.08,t/2-.05,e/2-.08,t/2-.05,"nf-sym-strong")];case"washer":case"dryer":return[Y(0,.05,Math.min(e,t)*.3),U(-e/2,-t/2+.1,e/2,-t/2+.1)];case"bathtub":return[Z(-e/2+.07,-t/2+.07,e/2-.07,t/2-.07),Y(-e/2+.14,0,.03,"nf-sym-fill")];case"shower":return[U(-e/2,-t/2,e/2,t/2),U(e/2,-t/2,-e/2,t/2),Y(0,0,.04)];case"wc":return[Z(-e/2,-t/2,e/2,-t/2+Math.min(.18,t*.3),"nf-sym-fill"),Zr(0,t*.1,e*.36,t*.3)];case"washbasin":return[Zr(0,.03,e*.34,t*.3)];case"tv_board":return[U(-Math.min(e*.4,.72),-t/2+.14,Math.min(e*.4,.72),-t/2+.14,"nf-sym-strong"),...qr(e,t,Math.max(2,Math.round(e/.6)))];case"tv_wall":return[U(-e/2,0,e/2,0,"nf-sym-strong")];case"lamp_downlight":case"lamp_spot":return[Y(0,0,Math.min(e,t)*.45,"nf-sym-fill"),Y(0,0,Math.min(e,t)*1.4)];case"lamp_bollard":case"lamp_garden":return[Y(0,0,Math.min(e,t)*.5,"nf-sym-fill"),Y(0,0,Math.min(e,t)*1.6)];case"parking":return[Z(-e/2+.08,-t/2+.08,e/2-.08,t/2-.08),U(-e*.15,t/2-.5,0,t/2-.22,"nf-sym-strong"),U(0,t/2-.22,e*.15,t/2-.5,"nf-sym-strong")];case"robot_vacuum":return[Z(-e*.45,-t/2,e*.45,-t/2+t*.3,"nf-sym-fill"),Y(0,t*.14,Math.min(e,t)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(e/.1));for(let o=1;o<i;o++)n.push(U(-e/2+e/i*o,-t/2,-e/2+e/i*o,t/2));return n}case"lamp_panel":return[Z(-e/2+.03,-t/2+.03,e/2-.03,t/2-.03,"nf-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(e,t)/2,i=[Y(0,0,n*.9,"nf-sym-fill"),Y(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(U(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[Z(-e/2,-t/2,e/2,-t/2+.03,"nf-sym-fill"),Zr(0,.01,e*.4,t*.4)];case"led_strip":return[U(-e/2,0,e/2,0,"nf-sym-strong")];case"plant":return[Y(0,0,Math.min(e,t)*.46),Y(0,0,Math.min(e,t)*.25)];case"rug":return[Z(-e/2+.1,-t/2+.1,e/2-.1,t/2-.1)];case"stairs":{let n=Math.max(3,Math.round(t/.26)),i=[];for(let o=1;o<n;o++)i.push(U(-e/2,t/2-t/n*o,e/2,t/2-t/n*o));return i.push(U(0,t/2-.1,0,-t/2+.25,"nf-sym-strong"),U(-.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong"),U(.15,-t/2+.45,0,-t/2+.25,"nf-sym-strong")),i}default:{let n=ee(r);return n?qc(n,e,t):g}}}function qc(r,e,t){return r.symbol?.length?r.symbol.map(n=>n.shape==="rect"?Z((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t,n.fill?"nf-sym-fill":""):n.shape==="circle"?Y(n.x*e,n.z*t,n.r*Math.min(e,t)):U(n.x1*e,n.z1*t,n.x2*e,n.z2*t)):r.parts.filter(n=>n.shape==="sweep"||n.w<.98||n.d<.98).map(n=>n.shape==="sweep"&&n.stations?.length?Zc([...n.stations.map(i=>[(n.x+i[3]/2)*e,i[0]*t]),...[...n.stations].reverse().map(i=>[(n.x-i[3]/2)*e,i[0]*t])]):n.shape==="cyl"&&(n.axis??"y")==="y"?Y(n.x*e,n.z*t,Math.min(n.w*e,n.d*t)/2):Z((n.x-n.w/2)*e,(n.z-n.d/2)*t,(n.x+n.w/2)*e,(n.z+n.d/2)*t))}var L=(r,e)=>[r[0]-e[0],r[1]-e[1]],Re=(r,e)=>[r[0]+e[0],r[1]+e[1]],be=(r,e)=>[r[0]*e,r[1]*e],Q=(r,e)=>r[0]*e[0]+r[1]*e[1],ve=(r,e)=>r[0]*e[1]-r[1]*e[0],ce=r=>Math.hypot(r[0],r[1]),ye=r=>{let e=ce(r)||1;return[r[0]/e,r[1]/e]},Yr=r=>[-r[1],r[0]],Qr=r=>[r[1],-r[0]];var Yc=.05,Qc=.2,Xc=.12;function Jc(r){let e=[];return r.forEach((t,n)=>{let i=t.points;if(i.length<3)return;let o=se(i)>=0;i.forEach((s,a)=>{let l=i[(a+1)%i.length],c=ce(L(l,s));if(c<.05)return;let d=[(l[0]-s[0])/c,(l[1]-s[1])/c],u=o?[d[1],-d[0]]:[-d[1],d[0]];(d[1]<-1e-9||Math.abs(d[1])<=1e-9&&d[0]<0)&&(d=[-d[0],-d[1]]);let h=[-d[1],d[0]],[_,f]=[Q(s,d),Q(l,d)];e.push({room:n,index:a,dir:d,normal:h,offset:Q(s,h),outside:Q(u,h)>0?1:-1,from:Math.min(_,f),to:Math.max(_,f)})})}),e}function ed(r,e,t){if(r.room===e.room||Math.abs(ve(r.dir,e.dir))>Yc||r.outside===e.outside)return null;let n=(e.offset-r.offset)*r.outside;return n>t||n<-Xc||Math.abs(n)<1e-4||Math.min(r.to,e.to)-Math.max(r.from,e.from)<Qc?null:n}var Xr=r=>Math.round(r*1e3)/1e3;function hs(r,e=.6){let t=Jc(r),n=t.map((u,h)=>h),i=u=>n[u]===u?u:n[u]=i(n[u]),o=[],s=new Set;for(let u=0;u<t.length;u++)for(let h=u+1;h<t.length;h++){let _=ed(t[u],t[h],e);_!==null&&(o.push(Xr(_)),n[i(u)]=i(h),s.add(u).add(h))}let a=()=>r.map(u=>({...u,points:u.points.map(h=>[h[0],h[1]])}));if(o.length===0)return{rooms:a(),gaps:o};let l=new Map;for(let u of s)l.set(i(u),[...l.get(i(u))??[],u]);let c=r.map(u=>u.points.map(()=>new Map));for(let[u,h]of l){let _=h.reduce((f,m)=>f+t[m].offset,0)/h.length;for(let f of h){let m=t[f],b=[m.normal[0]*(_-m.offset),m.normal[1]*(_-m.offset)];c[m.room][m.index].set(u,b),c[m.room][(m.index+1)%r[m.room].points.length].set(u,b)}}return{rooms:r.map((u,h)=>({...u,points:u.points.map((_,f)=>{let m=[...c[h][f].values()].reduce((b,y)=>[b[0]+y[0],b[1]+y[1]],[_[0],_[1]]);return[Xr(m[0]),Xr(m[1])]})})),gaps:o}}function ps(r){let e=r.filter(t=>t>.04).sort((t,n)=>t-n);return e.length===0?null:Math.min(.5,Math.max(.08,Math.round(e[Math.floor(e.length/2)]*100)/100))}var td=.25,fs=r=>Math.round(r*1e3)/1e3,ms=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&O([e,t],n.points));function ei(r,e,t,n,i){let o=ms(r,e,t);if(!o)return[n,i];let s=(a,l)=>O([a,l],o.points);return s(n,i)?[n,i]:s(n,t)?[n,t]:s(e,i)?[e,i]:[e,t]}function nd(r,e,t,n){return r.rooms.some(i=>i.id!==e.id&&i.points.some((o,s)=>{let a=i.points[(s+1)%i.points.length];return Math.abs(Q(L(o,t),n))<.02&&Math.abs(Q(L(a,t),n))<.02}))}var Jr=(r,e)=>Math.abs((r-e+540)%360-180);function Ut(r,e,t,n=td){let i=ms(r,e.x,e.z);if(!i)return null;let o=i.points,s=se(o)>=0?1:-1,a=null;return o.forEach((l,c)=>{let d=o[(c+1)%o.length],u=ce(L(d,l));if(u<.3)return;let h=[(d[0]-l[0])/u,(d[1]-l[1])/u],_=[-h[1]*s,h[0]*s],f=Q(L([e.x,e.z],l),h);if(f<0||f>u)return;let m=nd(r,i,l,_)?t/2:0,b=Q(L([e.x,e.z],l),_)-m,y=Math.atan2(-_[0],_[1])*180/Math.PI,v=[{rotation:y,extent:e.d/2},{rotation:y+90,extent:e.w/2},{rotation:y-90,extent:e.w/2}].reduce((k,$)=>Jr(e.rotation,$.rotation)<Jr(e.rotation,k.rotation)?$:k);if(Jr(e.rotation,v.rotation)>50)return;let x=b-v.extent;Math.abs(x)>n||a&&Math.abs(x)>=Math.abs(a.gap)||(a={x:fs(e.x-_[0]*x),z:fs(e.z-_[1]*x),rotation:(Math.round(v.rotation)%360+360)%360,gap:x})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var rd=r=>r.map((e,t)=>[e,r[(t+1)%r.length]]);function id(r,e,t){let n=L(t,e),i=Q(n,n),o=i?Math.max(0,Math.min(1,Q(L(r,e),n)/i)):0;return ce(L(r,[e[0]+n[0]*o,e[1]+n[1]*o]))}function gs(r,e,t=.03){return r.every(n=>O(n,e)||rd(e).some(([i,o])=>id(n,i,o)<=t))}var _s={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"{n} Erkennungs-Sensoren am Ger\xE4t dieser Kamera: {kinds}. Solange einer etwas meldet, markiert ein Pin es in 3D vor der Kamera.",camera_detect_none:"Am Ger\xE4t dieser Kamera gibt es noch keine Erkennungs-Sensoren. Pins erscheinen, sobald die Integration welche liefert (z. B. Frigate, UniFi Protect, Reolink).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern.",card_motion_trail_hint:"Ein Pfad der Bewegungen der letzten halben Stunde durchs Haus, mit Uhrzeiten",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Alle Kameras nebeneinander. Antippen vergr\xF6\xDFert eine; ein roter Rand hei\xDFt Bewegung.",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Eigene M\xF6bel-Packs sind JSON-Dateien (Format in docs/packs.md). Die mitgelieferten Packs sind immer da.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",feature_text_cameras:"Eine Kamera antippen: die Ansicht fliegt an ihren Platz und schaut in ihre Richtung, dann blendet das Live-Bild ein \u2013 mit dem, was sie gerade erkennt (Person, Fahrzeug, Tier). Die Kamerawand zeigt alle Kameras nebeneinander, die Bewegungsspur zeichnet die letzte halbe Stunde als leuchtenden Pfad durchs Haus, mit Zeiten an jedem Raum.",feature_name_energy:"Energiefluss",feature_name_cameras:"Kameras",feature_name_weather:"Wetter am Haus",feature_name_screens:"TV-Bildschirme",feature_name_sound:"Klang",feature_name_car:"Auto",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Was in NextFloor steckt: die gro\xDFen Funktionen und die M\xF6bel-Packs. Alles ist frei und Open Source \u2013 eigene M\xF6bel-Packs kannst du hier importieren.",ext_pro:"Funktionen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Live-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die Live-Erweiterungen (Wetter, Energie, Auto, Klang, Bildschirme, Kameras) findest du oben unter \u201EErweiterungen\u201C.",feature_text_weather:"Regen, Schnee, Hagel und Schneeregen fallen schr\xE4g mit dem echten Wind, Wolken ziehen mit ihren Schatten \xFCbers Grundst\xFCck, Blitze schlagen neben dem Haus ein, dazu Nebel, Sonne und Mond in ihrer echten Richtung.",feature_text_screens:"Ein Fernseher oder Monitor, der l\xE4uft, zeigt im 3D-Modell, was l\xE4uft: Cover, Titel, Interpret oder Serie und die App \u2013 auf einem Verlauf in der App-Farbe. Dahinter leuchtet ein Ambilight an der Wand, das beim Abspielen sanft atmet.",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",feature_text_sound:"\xDCber jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover, Titel und Interpret \u2013 antippen f\xFCr Zur\xFCck, Abspielen/Pause, Weiter und Lautst\xE4rke. Schallringe in der Farbe der App (Spotify gr\xFCn, Netflix rot \u2026) breiten sich aus, lauter hei\xDFt weiter, und Lautsprecher einer Multiroom-Gruppe sind mit einem Faden verbunden.",feature_text_car:"Eine Glaskarte \xFCber dem Stellplatz zeigt Ladestand mit Farbring, Reichweite, Laden mit Leistung, Stecker und Innentemperatur \u2013 mit Kn\xF6pfen f\xFCr Schloss, Klima und Laden. L\xE4dt das Auto, fliegen Energieteilchen von der Wallbox hinein; ist es weg, steht da, wo es gerade ist. Die Entit\xE4ten findet NextFloor selbst am Ger\xE4t des Autos.",pack_remove:"Entfernen",pack_builtin:"mitgeliefert",live_autarky:"autark",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_now:"jetzt",live_minutes_ago:"vor {n} min",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},bs={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"{n} detection sensors on this camera's device: {kinds}. While one reports something, a pin marks it in front of the camera in 3D.",camera_detect_none:"This camera's device has no detection sensors yet. Pins show up as soon as the integration offers some (e.g. Frigate, UniFi Protect, Reolink).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture.",card_motion_trail_hint:"A path of the last half hour's motion through the house, with times",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"All cameras side by side. Tap one to enlarge it; a red outline means motion.",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Your own furniture packs are JSON files (format in docs/packs.md). The packs that come with NextFloor are always there.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",feature_text_cameras:"Tap a camera: the view flies to where it hangs and looks its way, then the live picture fades in \u2013 with what it detects right now (person, vehicle, animal). The camera wall shows every camera side by side, the motion trail draws the last half hour as a glowing path through the house, with times at every room.",feature_name_energy:"Energy flow",feature_name_cameras:"Cameras",feature_name_weather:"Weather at the house",feature_name_screens:"TV screens",feature_name_sound:"Sound",feature_name_car:"Car",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"What NextFloor brings: its larger features and the furniture packs. Everything is free and open source \u2013 import your own furniture packs here.",ext_pro:"Features",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and live features",ext_teaser_text:'Furniture packs and the live add-ons (weather, energy, car, sound, screens, cameras) are under "Extensions" at the top.',feature_text_weather:"Rain, snow, hail and sleet fall at an angle with the real wind, clouds drift over the plot with their shadows, lightning strikes beside the house, plus fog, sun and moon in their real direction.",feature_text_screens:"A TV or monitor that plays shows in 3D what plays: cover, title, artist or series and the app \u2013 on a gradient in the app's colour. Behind it an ambilight glows on the wall, breathing gently while it plays.",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",feature_text_sound:"A card floats over every speaker or TV that plays, with cover, title and artist \u2013 tap it for previous, play/pause, next and volume. Sound rings in the colour of the app (Spotify green, Netflix red \u2026) spread out, louder reaches further, and speakers of a multiroom group are joined by a thread.",feature_text_car:"A glass card over the parking spot shows the charge with a colour ring, range, charging with its power, plug and inside temperature \u2013 with buttons for lock, climate and charging. While the car charges, energy particles fly into it from the wallbox; when it is away, the card says where it is. NextFloor finds the entities on the car's device by itself.",pack_remove:"Remove",pack_builtin:"built in",live_autarky:"self-sufficient",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_now:"now",live_minutes_ago:"{n} min ago",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},od=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],jt=new Map,ti=new Map;function ni(r){let e=(r??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return od.includes(t)?t:null}function vs(r){let e=ni(r);return!e||jt.has(e)}function ys(r){let e=ni(r);if(!e||jt.has(e))return Promise.resolve();let t=ti.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=be5ce4442bac`,import.meta.url).href;t=fetch(n).then(i=>i.ok?i.json():{}).then(i=>{jt.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{jt.set(e,{})}).finally(()=>ti.delete(e)),ti.set(e,t)}return t}function Ae(r,e,t={}){let n=r?.language??navigator.language,i=n.startsWith("de")?null:ni(n),s=(n.startsWith("de")?_s:i&&jt.get(i)||bs)[e]??bs[e]??_s[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function I(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var sd={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",camera:"M3.5 7.5h11.5v9H3.5zM15 10.5l5.5-3v9l-5.5-3",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Zt=r=>sd[r];var ad=[["person",/person|people|human|pedestrian/],["car",/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/],["pet",/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/]];function ws(r,e){let t=String(r.states[e]?.attributes.friendly_name??""),n=`${e} ${t}`.toLowerCase().replace(/[_.-]/g," ");return ad.find(([,i])=>i.test(n))?.[0]??"motion"}function xs(r,e){let t=r.entities??{},n=t[e]?.device_id;if(!n)return[];let i=new Set(["motion","occupancy","presence"]);return Object.values(t).filter(o=>o.device_id===n&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>i.has(String(r.states[o]?.attributes.device_class)))}var Yt=Math.PI/180,Ue=r=>Math.tan(Math.min(80,Math.max(0,r))*Yt);function zn(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function ie(r){let{x0:e,x1:t,z0:n,z1:i}=zn(r);return r.axis==="x"?{u0:e,u1:t,w:i-n,at:(o,s)=>[o,r.flip?i-s:n+s]}:{u0:n,u1:i,w:t-e,at:(o,s)=>[r.flip?t-s:e+s,o]}}function Pn(r,e,t){let{x0:n,x1:i,z0:o,z1:s}=zn(r);return r.axis==="x"?[e,r.flip?s-t:t-o]:[t,r.flip?i-e:e-n]}var qt=Math.tan(30*Yt);function ri(r,e,t,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=e+o*n,l=t+s*i,c=Math.min(r-s,Math.max(o,(l-a+qt*(r-s+o))/(2*qt))),d=a+(c-o)*qt;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:h=>h<=o?e+h*n:h<=c?a+(h-o)*qt:h<=r-s?l+(r-s-h)*qt:t+(r-h)*i}}function he(r){let e=ie(r).w,[t,n]=[r.eave_a,r.eave_b],[i,o]=[Ue(r.pitch_a),Ue(r.pitch_b)];switch(r.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*i,y:s=>t+s*i};case"mansard":{let s=ri(e,t,n,i,o);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=i+o>1e-6?Math.min(e,Math.max(0,(n-t+e*o)/(i+o))):e/2;return{vr:s,rh:t+s*i,y:a=>a<=s?t+a*i:n+(e-a)*o}}}}var tt=r=>he(r).rh;function ks(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function ld(r,e){let t=r.map(n=>({...n}));for(let n of e){let i=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function cd(r,e,t){if(r.a===e.b)return!1;let n=ye(L(t[r.b],t[r.a])),i=ye(L(t[e.b],t[e.a]));return Math.abs(ve(n,i))>1e-6||Q(n,i)<=0||r.free||e.free?!1:r.height===e.height&&r.exterior===e.exterior&&r.roomLeft===e.roomLeft&&r.roomRight===e.roomRight&&Math.abs(r.left-e.left)<=1e-9&&Math.abs(r.right-e.right)<=1e-9}function $s(r,e,t=new Set){let n=r.slice();for(;;){let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b])i.set(l,[...i.get(l)??[],a])});let o=null;for(let[s,a]of i){if(a.length!==2||t.has(s))continue;let l=n[a[0]].b===s?n[a[0]]:ks(n[a[0]]),c=n[a[1]].a===s?n[a[1]]:ks(n[a[1]]);if(!cd(l,c,e))continue;let d={...l,b:c.b,sources:ld(l.sources,c.sources)};o=[...n.filter((u,h)=>h!==a[0]&&h!==a[1]),d];break}if(!o)return n;n=o}}function Ss(r,e){let t=new Map;r.forEach((i,o)=>{let s=ye(L(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:be(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[i,o]of t){let s=e[i];o.sort((l,c)=>l.angle-c.angle);for(let l of o)n.set(l.key,{left:Re(s,be(Yr(l.d),l.left)),right:Re(s,be(Qr(l.d),l.right))});if(o.length<2)continue;let a=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;o.forEach((l,c)=>{let d=o[(c+1)%o.length],u=Re(s,be(Yr(l.d),l.left)),h=Re(s,be(Qr(d.d),d.right)),_=ve(l.d,d.d);if(Math.abs(_)<1e-4)return;let f=Re(u,be(l.d,ve(L(h,u),d.d)/_));ce(L(f,s))>a||(n.get(l.key).left=f,n.get(d.key).right=f)})}return n}function Ms(r,e){let t=r.filter((n,i)=>ce(L(n,r[(i+1)%r.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((i,o)=>{let s=t[(o+t.length-1)%t.length],a=t[(o+1)%t.length],[l,c]=[L(i,s),L(a,i)];return Math.abs(ve(ye(l),ye(c)))<1e-7&&Q(l,c)>0});if(n===-1)return t;t=t.filter((i,o)=>o!==n)}}function dd(r){let e=[];return{points:e,idOf(t){let n=e.findIndex(i=>Math.abs(i[0]-t[0])<=r&&Math.abs(i[1]-t[1])<=r);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function ud(r,e){let t=[];for(let n of r){let i=n.points;if(i.length<3||Math.abs(se(i))<1e-6)continue;let o=se(i)>0,s=i.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(o?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function hd(r,e,t){let n=[];for(let i of r){let[o,s]=[e[i.u],e[i.v]],a=L(s,o),l=ce(a),c=be(a,1/l),d=e.map((h,_)=>({id:_,rel:L(h,o)})).filter(({id:h,rel:_})=>h!==i.u&&h!==i.v&&Q(_,c)>t&&Q(_,c)<l-t&&Math.abs(ve(c,_))<=t).map(({id:h,rel:_})=>({t:Q(_,c),id:h})).sort((h,_)=>h.t-_.t),u=[{t:0,id:i.u},...d,{t:l,id:i.v}];for(let h=0;h+1<u.length;h++){let[_,f]=[u[h],u[h+1]];n.push({u:_.id,v:f.id,room:i.room,edge:i.edge,t0:i.forward?_.t:l-f.t,t1:i.forward?f.t:l-_.t})}}return n}var Fs=r=>({room_id:r.room,edge:r.edge,t0:r.t0,t1:r.t1});function pd(r,e){let t=new Map(r.map(o=>[o.id,o])),n=new Map;for(let o of e){let s=`${o.room}:${o.edge}`;n.set(s,[...n.get(s)??[],o.t0].sort((a,l)=>a-l))}let i=o=>{let s=t.get(o.room)?.wall_heights?.[o.edge];return Array.isArray(s)?s[(n.get(`${o.room}:${o.edge}`)??[]).indexOf(o.t0)]??null:s};return{heightOf(o){let s=o.map(i).filter(a=>typeof a=="number"&&a>0);return s.length?Math.min(...s):void 0},thicknessOf(o){let s=o.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return s.length?Math.max(...s):void 0},hasNoWall:o=>o.some(s=>i(s)===0)}}function fd(r,e,t,n){let i=pd(e,r),o=new Map;for(let l of r){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;o.set(c,[...o.get(c)??[],l])}let s=[],a=[];for(let l of o.values()){let c=l[0],d=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==d&&h.room!==c.room&&n.push(`overlap:${c.room}:${h.room}`);let u=d?[c,d]:[c];if(i.hasNoWall(u)){d&&a.push([c.room,d.room]);continue}if(d){let h=i.thicknessOf(u)??t.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:d.room,sources:u.map(Fs),height:i.heightOf(u)})}else s.push({a:c.u,b:c.v,left:0,right:i.thicknessOf(u)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Fs(c)],height:i.heightOf(u)})}return{drafts:s,open:a}}function md(r,e){let t=n=>ye(L(e[n.b],e[n.a]));for(let n of r){if(n.exterior||n.free)continue;let i=new Set;for(let s of[n.a,n.b])for(let a of r)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(ve(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?i.add("left"):a.roomLeft===n.roomRight&&i.add("right"));if(i.size!==1)continue;let o=n.left+n.right;[n.left,n.right]=i.has("left")?[0,o]:[o,0]}}var gd=(r,e)=>{let t=o=>Math.round(o*100),[n,i]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`};function pe(r,e,t=[]){let n=e.eps??.005,i=[],o=dd(n),s=ud(r,o),a=t.filter(y=>Math.hypot(y.b[0]-y.a[0],y.b[1]-y.a[1])>.05),l=a.map(y=>[o.idOf(y.a),o.idOf(y.b)]),c=new Set;for(let y of r){let w=y.points;w.length<3||(y.wall_splits??[]).forEach((v,x)=>{if(!v||x>=w.length)return;let k=w[x],$=L(w[(x+1)%w.length],k),S=ce($);for(let F of v)F>n&&F<S-n&&c.add(o.idOf(Re(k,be($,F/S))))})}let d=hd(s,o.points,n),{drafts:u,open:h}=fd(d,r,e,i);md(u,o.points);let _=u;a.forEach((y,w)=>{let[v,x]=l[w];if(v===x)return;let k=[(y.a[0]+y.b[0])/2,(y.a[1]+y.b[1])/2],$=r.find(F=>F.points.length>=3&&O(k,F.points))?.id??null,S=(y.thickness??e.interior)/2;_.push({free:y.id,a:v,b:x,left:S,right:S,exterior:!1,roomLeft:$,roomRight:$,sources:[],height:typeof y.height=="number"&&y.height>0?y.height:void 0})});let f=$s(_,o.points,c),m=Ss(f,o.points);return{walls:f.map((y,w)=>{let[v,x]=[o.points[y.a],o.points[y.b]],[k,$]=[m.get(`${w}:a`),m.get(`${w}:b`)],S=Ms([k.right,$.left,x,$.right,k.left,v],1e-6);return{id:gd(v,x),a:[v[0],v[1]],b:[x[0],x[1]],left:y.left,right:y.right,exterior:y.exterior,roomLeft:y.roomLeft,roomRight:y.roomRight,sources:y.sources,footprint:S,...y.free?{free:y.free}:{},...y.height!==void 0?{height:y.height}:{}}}),warnings:[...new Set(i)],open:h}}function gt(r,e,t){let n=r.points[e];return Re(n,be(ye(L(r.points[(e+1)%r.points.length],n)),t))}function je(r,e,t){if(r.wall){let i=t.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ye(L(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,Re(i.a,[-o[1],o[0]])]},edge:0}}let n=e.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}var Es=(r,e)=>Q(L(e,r.a),ye(L(r.b,r.a)));function ii(r,e,t){if(!e.wall)return _d(r,t.room,t.edge,e.offset);let n=r.find(i=>i.free===e.wall);return n?{wall:n,s:Es(n,gt(t.room,0,e.offset))}:null}function _d(r,e,t,n){for(let i of r)if(i.sources.some(s=>s.room_id===e.id&&s.edge===t&&n>=s.t0-1e-6&&n<=s.t1+1e-6))return{wall:i,s:Es(i,gt(e,t,n))};return null}var Rs=([r,e])=>{let t=Math.hypot(r,e)||1;return[r/t,e/t]};function bd(r){return r.reduce((e,t,n)=>e+(t[0]*r[(n+1)%r.length][1]-r[(n+1)%r.length][0]*t[1]),0)/2}function As(r,e){let t=r.length;if(t<3||Math.abs(e)<1e-9)return r.map(([i,o])=>[i,o]);let n=bd(r)>=0?1:-1;return r.map((i,o)=>{let s=r[(o+t-1)%t],a=r[(o+1)%t],[l,c]=Rs([i[0]-s[0],i[1]-s[1]]),[d,u]=Rs([a[0]-i[0],a[1]-i[1]]),h=[c*n,-l*n],_=[u*n,-d*n],f=[h[0]+_[0],h[1]+_[1]],m=Math.hypot(f[0],f[1]);if(m<1e-6)return[i[0]+h[0]*e,i[1]+h[1]*e];let b=(f[0]*h[0]+f[1]*h[1])/m,y=Math.min(4,1/Math.max(.25,b));return[i[0]+f[0]/m*e*y,i[1]+f[1]/m*e*y]})}function Qt(r){let e=r.map(n=>n[0]),t=r.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}function vd(r){let e=([o,s])=>`${Math.round(o*1e3)}:${Math.round(s*1e3)}`,t=new Map;for(let o of r)for(let s of[o.a,o.b])t.set(e(s),[...t.get(e(s))??[],o]);let n=new Set,i=null;for(let o of r){if(n.has(o))continue;n.add(o);let s=[o.a,o.b],a=o.b;for(;;){let c=(t.get(e(a))??[]).find(d=>!n.has(d));if(!c||(n.add(c),a=e(c.a)===e(a)?c.b:c.a,e(a)===e(s[0])))break;s.push(a)}s.length>=3&&e(a)===e(s[0])&&(!i||Math.abs(_e(s))>Math.abs(_e(i)))&&(i=s)}return i}function oi(r,e,t,n){let i=pe(r,{exterior:t,interior:n},e).walls.filter(a=>a.exterior&&!a.free),o=i.length?vd(i.map(a=>({a:a.a,b:a.b}))):null;if(!o)return null;let s=o.filter((a,l)=>{let c=o[(l+o.length-1)%o.length],d=o[(l+1)%o.length];return Math.abs((a[0]-c[0])*(d[1]-a[1])-(a[1]-c[1])*(d[0]-a[0]))>1e-6});return s.length>=3?As(s,t):null}function _t(r,e){let t=ie(r),n=he(r),i=t.w,[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(y,w)=>[y,w,n.y(w)],d=c(a,-o),u=c(l,-o),h=c(l,i+s),_=c(a,i+s),[f,m]=[Ue(r.pitch_a),Ue(r.pitch_b)],b=y=>[y,n.vr,n.rh];switch(r.shape){case"pent":return{faces:[[d,u,h,_]],rim:[d,u,h,_],ridges:[[h,_]],gable:[[0,n.y(0)],[i,n.y(i)]]};case"hip":case"pyramid":{let y=(t.u1-t.u0)/2,w=r.shape==="pyramid"?y:Math.min(y,Math.min(n.vr,i-n.vr)||i/2),v=b(t.u0+w),x=b(t.u1-w);return r.shape==="pyramid"?{faces:[[d,u,v],[u,h,v],[h,_,v],[_,d,v]],rim:[d,u,h,_],ridges:[[d,v],[_,v],[u,v],[h,v]],gable:null}:{faces:[[d,u,x,v],[v,x,h,_],[_,d,v],[u,h,x]],rim:[d,u,h,_],ridges:[[v,x],[d,v],[_,v],[u,x],[h,x]],gable:null}}case"halfhip":{let y=Math.min(n.y(0),n.y(i)),w=y+(n.rh-y)*.55,v=f>1e-6?Math.min(n.vr,(w-r.eave_a)/f):n.vr,x=m>1e-6?Math.max(n.vr,i-(w-r.eave_b)/m):n.vr,k=Math.min((t.u1-t.u0)/2-.1,(n.rh-w)/Math.max(.2,f)),$=b(t.u0+k),S=b(t.u1-k),F=[a,v,w],P=[a,x,w],T=[l,v,w],R=[l,x,w];return{faces:[[d,u,T,S,$,F],[$,S,R,h,_,P],[P,F,$],[T,R,S]],rim:[d,u,T,R,h,_,P,F],ridges:[[$,S],[F,$],[P,$],[T,S],[R,S]],gable:[[0,n.y(0)],[v,w],[x,w],[i,n.y(i)]]}}case"mansard":{let y=ri(i,r.eave_a,r.eave_b,f,m),w=[a,y.vla,y.yla],v=[l,y.vla,y.yla],x=[a,i-y.vlb,y.ylb],k=[l,i-y.vlb,y.ylb],$=[a,y.vr,y.rh],S=[l,y.vr,y.rh];return{faces:[[d,u,v,w],[w,v,S,$],[$,S,k,x],[x,k,h,_]],rim:[d,u,v,S,k,h,_,x,$,w],ridges:[[$,S],[w,v],[x,k]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[i-y.vlb,y.ylb],[i,n.y(i)]]}}default:{let y=b(a),w=b(l);return{faces:[[d,u,w,y],[y,w,h,_]],rim:[d,u,w,h,_,y],ridges:[[y,w]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}}}function Tn(r,e,t){let n=null;for(let i of r.faces){if(!O([e,t],i.map(([h,_])=>[h,_])))continue;let[o,s]=i,a=i.slice(2).find(h=>Math.abs((s[0]-o[0])*(h[1]-o[1])-(s[1]-o[1])*(h[0]-o[0]))>1e-9);if(!a)continue;let l=[s[0]-o[0],s[2]-o[2],s[1]-o[1]],c=[a[0]-o[0],a[2]-o[2],a[1]-o[1]],d=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(d[1])<1e-9)continue;let u=o[2]-(d[0]*(e-o[0])+d[2]*(t-o[1]))/d[1];n=n===null?u:Math.min(n,u)}return n}function si(r,e,t){let n=ie(e),i=r.floors.flatMap(d=>d.rooms.filter(u=>u.points.length>=3&&d.elevation+d.height>e.base+.05)),o=d=>d.some(u=>i.some(h=>O(u,h.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d),c=d=>d?0:t;return{a:c(o(a.map(d=>n.at(d,-s)))),b:c(o(a.map(d=>n.at(d,n.w+s)))),u0:c(o(l.map(d=>n.at(n.u0-s,d)))),u1:c(o(l.map(d=>n.at(n.u1+s,d))))}}var On=r=>Math.abs((r.x1-r.x0)*(r.z1-r.z0)),zs=r=>r.shape==="flat"||r.shape==="parapet",nt=r=>Math.round(r*100)/100;function Dn(r,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return r.filter(o=>{if(o===e||o.dormer||o.open||zs(o)||On(o)<On(e)*1.5)return!1;let s=zn(o);return t>=s.x0&&t<=s.x1&&n>=s.z0&&n<=s.z1}).reduce((o,s)=>o===null||On(s)<On(o)?s:o,null)}function ai(r,e,t,n){let i=ie(r),o=he(r),s=2,a=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),[l,c]=e==="a"?[r.eave_a,r.pitch_a]:[r.eave_b,r.pitch_b],d=l+1.4,u=d+s/2*Math.tan(35*Yt),h=Math.max(.8,Math.min(i.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,c)*Yt)))),[_,f]=e==="a"?[0,h]:[i.w-h,i.w],m=i.at(a,_),b=i.at(a+s,f);return{id:t,x0:nt(Math.min(m[0],b[0])),z0:nt(Math.min(m[1],b[1])),x1:nt(Math.max(m[0],b[0])),z1:nt(Math.max(m[1],b[1])),shape:"gable",axis:r.axis==="x"?"z":"x",eave_a:nt(d),eave_b:nt(d),pitch_a:35,pitch_b:35,base:nt(o.y(e==="a"?0:i.w)),overhang:.15,dormer:!0}}function wd(r,e){let t=_t(r,{u0:0,u1:0,a:0,b:0}),n=he(r);return i=>{let[o,s]=e.at(i,e.w/2),[a,l]=Pn(r,o,s);return Tn(t,a,l)??n.y(l)}}function li(r,e){if(zs(e))return e;let t=ie(e),n=he(e).rh,i=wd(r,t),o=i(t.u0)<=i(t.u1),[s,a]=o?[t.u0,t.u1]:[t.u1,t.u0],l=o?1:-1,c=a;for(let h=.5;h<Math.abs(a-s);h+=.05)if(i(s+l*h)>=n-.02){c=s+l*h;break}if(Math.abs(c-a)<.05)return e;let d={...e},u=a===t.u1;return e.axis==="x"?d[u?"x1":"x0"]=c:d[u?"z1":"z0"]=c,d}var Ps=.14,xd=r=>r.shape==="flat"||r.shape==="parapet";function ci(r,e){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<e-.05}function di(r,e,t){let n=[],i=e+t+Ps;for(let o of r.settings.roof.sections??[]){if(o.open||xd(o)||o.shape==="mansard")continue;let s=ie(o),a=he(o),[l,c]=[Ue(o.pitch_a),Ue(o.pitch_b)],d=[];l>1e-6&&d.push((i-o.eave_a)/l),o.shape==="gable"&&c>1e-6&&d.push(s.w-(i-o.eave_b)/c);for(let u of d)u<=.01||u>=s.w-.01||o.shape==="gable"&&Math.abs(a.y(u)-i)>1e-6||n.push([s.at(s.u0,u),s.at(s.u1,u)])}return n}function ui(r,e,t,n,i){let o=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([e+(n-e)*a,t+(i-t)*l]);let s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&o.some(c=>O(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function hi(r,e){let t=r.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}var Ce=r=>Math.round(r*1e3)/1e3;function pi(r,e=t=>`roof_${t+1}`){let t=r.settings.roof?.pitch??35,n=r.settings.wall_exterior,i=r.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),o=[],s=[],a=(l,c)=>l.some(d=>O(c,d.points));for(let l of i){let c=l.rooms.filter(b=>b.points.length>=3),d=[...new Set(c.flatMap(b=>b.points.map(y=>Ce(y[0]))))].sort((b,y)=>b-y),u=[...new Set(c.flatMap(b=>b.points.map(y=>Ce(y[1]))))].sort((b,y)=>b-y),h=u.slice(0,-1).map((b,y)=>d.slice(0,-1).map((w,v)=>{let x=[(d[v]+d[v+1])/2,(u[y]+u[y+1])/2];return a(c,x)&&!a(s,x)})),_=h.map(b=>b.map(()=>!1)),f=(b,y)=>h[y][b]&&!_[y][b],m=l.elevation+l.height;for(let b=0;b<h.length;b++)for(let y=0;y<(h[b]?.length??0);y++){if(!f(y,b))continue;let w=y;for(;w+1<h[b].length&&f(w+1,b);)w++;let v=b;for(;v+1<h.length&&Array.from({length:w-y+1},(F,P)=>f(y+P,v+1)).every(Boolean);)v++;for(let F=b;F<=v;F++)for(let P=y;P<=w;P++)_[F][P]=!0;let[x,k]=[d[y]-n,d[w+1]+n],[$,S]=[u[b]-n,u[v+1]+n];Math.min(k-x,S-$)<.8||o.push({id:e(o.length),x0:Ce(x),z0:Ce($),x1:Ce(k),z1:Ce(S),shape:"gable",axis:k-x>=S-$?"x":"z",eave_a:Ce(m),eave_b:Ce(m),pitch_a:t,pitch_b:t,base:Ce(m),overhang:null})}s.push(...c)}return o}var ze=Math.PI/180,fe=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]],rt=(r,e)=>r[0]*e[0]+r[1]*e[1]+r[2]*e[2],bt=r=>Math.hypot(r[0],r[1],r[2]),it=r=>{let e=bt(r)||1;return[r[0]/e,r[1]/e,r[2]/e]},Ts=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]],Pe=r=>Math.round(r*100)/100,Xt=([r,e],t)=>(Math.atan2(r,-e)/ze-t+720)%360;var Ds=.25;function Is(r,e,t,n,i,o,s){let a=i-t>=o-n,l=a?i-t:o-n;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?o-n:i-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Hs(r,e){let t=it(Ts(r,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var Ls=r=>{let e=it([-r[0],0,-r[2]]);return[e[0],e[2]]};function Jt(r,e,t,n,i,o,s,a){let l=it(fe(i,n)),c=it(fe(o,n));return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:Hs(l,c),lu:bt(fe(i,n)),ls:bt(fe(o,n)),pitch:s,span:a,facing:Ls(c)}}function Os(r,e,t,n,i,o){let s=bt(fe(i,n));if(s<.3)return null;let a=it(fe(i,n)),l=fe(o,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=bt(d);if(u<.3)return null;let h=it(d),_=f=>{let m=Math.min(1,Math.max(0,f/u));return[c*m,s-(s-c)*m]};return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:Hs(a,h),lu:s,ls:u,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/ze,span:_,facing:Ls(h)}}function kd(r,e){let t=ie(r),n=he(r),i=(w,v,x)=>{let[k,$]=t.at(w,v);return[k,x,$]},[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,d=n.y(-o),u=n.y(t.w+s);if(r.shape==="flat"||r.shape==="parapet"){let[w,v]=[t.at(a,-o),t.at(l,t.w+s)];return[Is(r.id,r.id,Math.min(w[0],v[0]),Math.min(w[1],v[1]),Math.max(w[0],v[0]),Math.max(w[1],v[1]),r.eave_a+Ds)]}if(r.shape==="pent")return[Jt(`${r.id}:a`,r.id,"a",i(a,-o,d),i(l,-o,d),i(a,t.w+s,u),r.pitch_a,()=>[0,c])];let h=r.shape==="hip"||r.shape==="pyramid",_=(t.u1-t.u0)/2,f=r.shape==="pyramid"?_:h?Math.min(_,Math.min(n.vr,t.w-n.vr)||t.w/2):0,m=h?t.u0+f-a:0,b=h?l-(t.u1-f):0,y=[];if(n.vr>.3){let w=Math.hypot(n.vr+o,n.rh-d);y.push(Jt(`${r.id}:a`,r.id,"a",i(a,-o,d),i(l,-o,d),i(a,n.vr,n.rh),r.pitch_a,v=>[m*(v/w),c-b*(v/w)]))}if(t.w-n.vr>.3){let w=Math.hypot(t.w+s-n.vr,n.rh-u);y.push(Jt(`${r.id}:b`,r.id,"b",i(l,t.w+s,u),i(a,t.w+s,u),i(l,n.vr,n.rh),r.pitch_b,v=>[b*(v/w),c-m*(v/w)]))}if(h){let w=Os(`${r.id}:c`,r.id,"c",i(a,t.w+s,u),i(a,-o,d),i(t.u0+f,n.vr,n.rh)),v=Os(`${r.id}:d`,r.id,"d",i(l,-o,d),i(l,t.w+s,u),i(t.u1-f,n.vr,n.rh));y.push(...[w,v].filter(x=>x!==null))}return y}function Cs(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function N(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>kd(v,si(r,v,v.overhang??e.overhang)));let t=Cs(r);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(x=>x[0])),i=t.rooms.flatMap(v=>v.points.map(x=>x[1])),o=r.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...n)-o,Math.max(...n)+o],[l,c]=[Math.min(...i)-o,Math.max(...i)+o],d=t.elevation+t.height;if(e.type==="flat")return[Is("main",null,s,l,a,c,d+Ds)];let u=a-s>=c-l,h=e.ridge==="short"?!u:u,_=(h?c-l:a-s)/2,f=_*Math.tan(e.pitch*ze),m=(v,x,k)=>h?[v,d+k,(l+c)/2+x]:[(s+a)/2+x,d+k,v],[b,y]=h?[s,a]:[l,c],w=()=>[0,y-b];return[Jt("main:a",null,"a",m(b,-_,0),m(y,-_,0),m(b,0,f),e.pitch,w),Jt("main:b",null,"b",m(b,_,0),m(y,_,0),m(b,0,f),e.pitch,w)]}function we(r,e){let t=[];for(let n of r.floors.filter(i=>!e||i.id===e)){let{walls:i}=pe(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let[s,a]=[o.b[0]-o.a[0],o.b[1]-o.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,d]=[a/l,-s/l],u=Math.min(n.height,o.height??n.height),h=(_,f,m,b)=>t.push({key:_,section:null,side:"top",flat:!1,o:f,eu:m,es:[0,1,0],n:b,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[b[0],b[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${o.id}`,[o.a[0]+c*o.right,n.elevation,o.a[1]+d*o.right],[s/l,0,a/l],[c,0,d]),o.free&&h(`wall:${n.id}:${o.id}:back`,[o.b[0]-c*o.left,n.elevation,o.b[1]-d*o.left],[-s/l,0,-a/l],[-c,0,-d])}}return t}var me="ground";function Bs(r){let e=r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function In(r,e){let t=(e.rotation??0)*ze,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],o=Bs(r),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:Ho(o,s,a)):e.base??0;return{key:me,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function ae(r,e,t=N(r)){return e.face===me?In(r,e):e.face.startsWith("wall:")?we(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}var Hn=1.13,en=1.72,ge=.025,Ze=.07;function ot(r){let e=r.module_w||Hn,t=r.module_h||en;return r.portrait===!1?[t,e]:[e,t]}function tn(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function fi(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*ze:r.wall?Math.min(90,Math.max(0,e.tilt??0))*ze:0}function nn(r,e){let[,t]=ot(e),n=fi(r,e);return r.wall?t*Math.cos(n)+ge:r.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+ge}function rn(r,e){let[t,n]=ot(e),i=tn(e),o=Math.max(1,...i);return[o*t+(o-1)*ge,(i.length-1)*nn(r,e)+n*Math.cos(fi(r,e))]}function xe(r,e,t=!1){let[n,i]=ot(e),o=fi(r,e),s=i*Math.cos(o),a=nn(r,e),l=tn(e),c=Math.max(1,...l),d=new Set(e.skip??[]),u=(f,m,b)=>[0,1,2].map(y=>r.o[y]+r.eu[y]*f+r.es[y]*m+r.n[y]*b),h=(f,m)=>{if(r.unbounded)return!0;if(m<-1e-6||m>r.ls+1e-6)return!1;let[b,y]=r.span(m);return f>=b-1e-6&&f<=y+1e-6},_=[];return l.forEach((f,m)=>{let b=e.align==="right"?c-f:e.align==="center"?(c-f)/2:0;for(let y=0;y<f;y++){let w=`${m}:${y}`,v=d.has(w);if(v&&!t)continue;let x=e.u+(y+b)*(n+ge),k=x+n,$=e.v+m*a,S=$+(r.flat||r.wall?s:i);if([[x,$],[k,$],[k,S],[x,S]].every(([F,P])=>h(F,P)))if(r.wall&&o>.001){let F=Ze+i*Math.sin(o),[P,T]=e.flip?[F,Ze]:[Ze,F],R=[u(x,$,P),u(k,$,P),u(k,S,T),u(x,S,T)],H=e.flip?$:S;_.push({corners:R,posts:[x+.05,k-.05].map(G=>[u(G,H,0),u(G,H,F)]),cell:w,skipped:v})}else if(!r.flat)_.push({corners:[u(x,$,Ze),u(k,$,Ze),u(k,S,Ze),u(x,S,Ze)],posts:[],cell:w,skipped:v});else{let P=.15+i*Math.sin(o),[T,R]=e.flip?[S,$]:[$,S],H=[u(x,T,.15),u(k,T,.15),u(k,R,P),u(x,R,P)],G=[x+.05,k-.05].flatMap(W=>[[u(W,T,0),u(W,T,.15)],[u(W,R,0),u(W,R,P)]]);_.push({corners:H,posts:G,cell:w,skipped:v})}}}),_}function Be(r,e){if(r.unbounded)return{u:e.u,v:e.v};let[t,n]=rn(r,e),i=o=>Math.floor(o*100+1e-6)/100;return{u:i(Math.min(Math.max(0,e.u),Math.max(0,r.lu-t))),v:i(Math.min(Math.max(0,e.v),Math.max(0,r.ls-n)))}}function on(r,e){let[t,n]=rn(r,e),[i,o]=[e.u+t/2,e.v+n/2];return[r.o[0]+r.eu[0]*i+r.es[0]*o,r.o[2]+r.eu[2]*i+r.es[2]*o]}var Ln=.78,sn=1.18,qe=r=>({id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||Ln,module_h:r.h||sn});function mi(r,e){let t=xe(r,qe(e))[0];if(!t)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return t.corners.map(n)}function gi(r,e){let[t]=ot(e);return Pe((r.lu-(e.cols*t+(e.cols-1)*ge))/2)}var an=.4;function vt(r,e){let t={id:e,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=ot(t),[i,o]=r.span(r.ls/2);for(t.cols=Math.max(1,Math.floor((o-i-2*an+ge)/(n+ge))),t.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*an)/nn(r,t))));t.cols>1&&xe(r,{...t,u:gi(r,t),v:an}).length<t.rows*t.cols;)t.cols--;return t.u=gi(r,t),t.v=an,t}function Cn(r,e){let t={...e,face:r.key,tilt:r.flat?e.tilt??15:null,rotation:null,flip:!1};return t.u=gi(r,t),t.v=an,{...t,...Be(r,t)}}function _i(r,e,t){let n=r.settings.north??0,i=a=>a.lu*(1.3+Math.cos((Xt(a.facing,n)-180)*Math.PI/180)),o=we(r,t).sort((a,l)=>i(l)-i(a))[0];if(!o)return null;let s={...vt(o,e),portrait:!1,rows:1};return s.cols=Math.max(1,Math.floor((o.lu-.8+ge)/(en+ge))),s.u=Pe((o.lu-(s.cols*en+(s.cols-1)*ge))/2),s.v=Pe(Math.max(0,o.ls-Hn-.3)),s}function ln(r,e){let t=r.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=t.length?Math.max(...t.map(o=>o[0]))+3:0,i=t.length?Math.min(...t.map(o=>o[1])):0;return{id:e,face:me,u:Pe(n),v:Pe(i),rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function cn(r,e,t){let n=In(r,e),[i,o]=rn(n,e),[s,a]=[e.u+i/2,e.v+o/2],l=[n.eu[0]*s+n.es[0]*a,n.eu[2]*s+n.es[2]*a],c=t*ze,d=l[0]*Math.cos(c)+l[1]*Math.sin(c)-i/2,u=l[0]*-Math.sin(c)+l[1]*Math.cos(c)-o/2;return{u:Pe(d),v:Pe(u),rotation:(Math.round(t)%360+360)%360}}function dn(r,e){let[t,n]=r.span(r.ls/2);return{id:e,face:r.key,u:Pe((t+n-Ln)/2),v:Pe(Math.max(0,Math.min(r.ls-sn,r.ls*.45-sn/2))),w:null,h:null,cover:null,contact:null,tilt:null}}function un(r,e){let[t,n]=[e[0]-r.o[0],e[1]-r.o[2]],[i,o,s,a]=[r.eu[0],r.eu[2],r.es[0],r.es[2]],l=i*a-o*s;if(Math.abs(l)<1e-9)return null;let c=(t*a-n*s)/l,d=(i*n-o*t)/l;if(d<0||d>r.ls)return null;let[u,h]=r.span(d);return c>=u&&c<=h?{u:c,s:d}:null}function bi(r,e){let t=null;for(let n of r){if(n.wall){let[s,a]=[e[0]-n.o[0],e[1]-n.o[2]],l=s*n.eu[0]+a*n.eu[2],c=s*n.n[0]+a*n.n[2],d=l>=0&&l<=n.lu;if(d&&c>=-.05&&c<=.35)return{face:n,u:l,s:Number.NaN};d&&c>.35&&c<=.8&&!t&&(t={face:n,u:l,s:Number.NaN,y:-1/0});continue}let i=un(n,e);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!t||o>t.y)&&(t={face:n,...i,y:o})}return t&&{face:t.face,u:t.u,s:t.s}}function Bn(r,e,t){let n=rt(t,r.n);if(Math.abs(n)<1e-6)return null;let i=rt(fe(r.o,e),r.n)/n;if(i<=0)return null;let o=fe([e[0]+t[0]*i,e[1]+t[1]*i,e[2]+t[2]*i],r.o);return{t:i,u:rt(o,r.eu),s:rt(o,r.es)}}function vi(r,e,t){if(r.unbounded)return!0;if(t<0||t>r.ls)return!1;let[n,i]=r.span(t);return e>=n&&e<=i}function yi(r,e,t,n){return xe(r,e).some(o=>{let s=o.corners.map(c=>{let d=fe(c,r.o);return[rt(d,r.eu),rt(d,r.es)]}),a=s.map(c=>c[0]),l=s.map(c=>c[1]);return t>=Math.min(...a)-.05&&t<=Math.max(...a)+.05&&n>=Math.min(...l)-.05&&n<=Math.max(...l)+.05})}var $d=["n","ne","e","se","s","sw","w","nw"],wi=(r,e)=>$d[Math.round(Xt(r.facing,e)/45)%8];function hn(r,e){let t=n=>{if(n.flat)return n.lu*n.ls*.8;let i=Math.cos((Xt(n.facing,e)-180)*Math.PI/180);return n.lu*n.ls*(1.2+i)};return[...r].sort((n,i)=>t(i)-t(n))[0]??null}var Ks=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Ws={kitchen_row:{rows:[["back","start",["fridge","kitchen_tall",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove",["kitchen",[.6,.62,.92]]]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[[["table",[1.2,.8,.75]],.5,.72,0],["lamp_pendant",.5,.72,0],["lamp_ceiling",.5,.3,0]]},kitchen_l:{rows:[["back","start",["fridge",["kitchen",[.9,.62,.92]],"sink","dishwasher","stove"]],["right","start",[["kitchen",[.9,.62,.92]],["kitchen",[.6,.62,.92]],"kitchen_tall"]],["back","start",[["kitchen_wall",[1.2,.35,.7]]]]],spots:[["table",.4,.68,0],["bar_stool",.72,.86,180],["lamp_ceiling",.5,.35,0]]},bath:{rows:[["back","center",["washbasin"]],["back","end",["wc"]],["front","start",["bathtub"]],["left","start",["washer"]]],spots:[["lamp_downlight",.5,.5,0]]},bedroom:{rows:[["back","center",["nightstand","bed","nightstand"]],["left","center",[["wardrobe",[2,.6,2.1]]]],["front","end",["dresser"]]],spots:[["lamp_ceiling",.5,.55,0]]},living:{rows:[["back","center",["tv_board"]],["right","start",["shelf"]]],spots:[["sofa",.5,.72,180],["coffee_table",.5,.52,0],[["rug",[2.2,1.6,.01]],.5,.55,0],["armchair",.14,.5,270],["lamp_floor",.86,.8,0],["plant",.9,.12,0],["lamp_ceiling",.5,.45,0]]},dining:{rows:[["back","center",["sideboard"]]],spots:[["table",.5,.55,0],["chair",.4,.35,0],["chair",.6,.35,0],["chair",.4,.75,180],["chair",.6,.75,180],["lamp_pendant",.5,.55,0]]},office:{rows:[["back","center",["desk"]],["left","center",["shelf","shelf"]]],spots:[["office_chair",.5,.38,180],["lamp_ceiling",.5,.55,0]]},kids:{rows:[["left","start",[["bed",[.9,2,.8]]]],["back","end",[["desk",[1.2,.6,.75]]]],["right","end",["shelf"]]],spots:[[["rug",[1.6,1.2,.01]],.55,.6,0],["lamp_ceiling",.5,.5,0]]},hall:{rows:[["left","start",["coat_rack"]]],spots:[["lamp_downlight",.5,.3,0],["lamp_downlight",.5,.7,0]]}},Vs=r=>typeof r=="string"?r:r[0],Wn=r=>typeof r=="string"?Le[r]:r[1],yt=.05,Sd=.02,Ns=r=>Math.round(r*1e3)/1e3;function Md(r,e,t,n){switch(e){case"back":return{x:r.x0+t,z:r.z0+n,turn:0};case"right":return{x:r.x1-n,z:r.z0+t,turn:90};case"front":return{x:r.x1-t,z:r.z1-n,turn:180};case"left":return{x:r.x0+n,z:r.z1-t,turn:270}}}function Gs(r,e,t){let n=te(r.points),i=n.x1-n.x0,o=n.z1-n.z0,s=[],a=(l,c,d,u,[h,_,f])=>{s.push({id:t(),type:l,x:Ns(c),z:Ns(d),rotation:u,w:h,d:_,h:f,variant:null,entity:null,power:null})};for(let[l,c,d]of Ws[e].rows){let u=l==="back"||l==="front"?i:o,h=0,_=[];for(let m of d){if(h+Wn(m)[0]>u-.1)break;_.push(m),h+=Wn(m)[0]}let f=c==="start"?yt:c==="end"?u-h-yt:(u-h)/2;for(let m of _){let b=Wn(m),y=Md(n,l,f+b[0]/2,b[1]/2+Sd);a(Vs(m),y.x,y.z,y.turn,b),f+=b[0]}}for(let[l,c,d,u]of Ws[e].spots){let h=Wn(l),_=(b,y,w)=>Math.min(w,Math.max(y,b)),f=_(n.x0+i*c,n.x0+h[0]/2+yt,n.x1-h[0]/2-yt),m=_(n.z0+o*d,n.z0+h[1]/2+yt,n.z1-h[1]/2-yt);a(Vs(l),f,m,u,h)}return s}var wt=Me`
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
`,Vn=Me`
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
`;var J=r=>/^(sensor|input_number|number)\./.test(r),Nn=r=>/^(binary_sensor|input_boolean)\./.test(r);function xt(r,e){if(!J(e))return!1;let t=r?.states[e]?.attributes;return t?.device_class==="power"||t?.unit_of_measurement==="W"||t?.unit_of_measurement==="kW"}function Fd(r,e){let t=r?.entities?.[e],n=t?.area_id??(t?.device_id?r?.devices?.[t.device_id]?.area_id:null);return n?r?.areas?.[n]?.name:void 0}function K(r,e){return Object.keys(r?.states??{}).filter(e).map(t=>{let n=Fd(r,t);return{id:t,label:n?`${B(r,t)} \xB7 ${n}`:B(r,t)}}).sort((t,n)=>t.label.localeCompare(n.label))}function Kn(r,e){return r.power&&r.power!=="none"?r.power:e.get(r.id)?.power??null}var Us={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},js=r=>(...e)=>({_$litDirective$:r,values:e}),Gn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var pn=class extends Gn{constructor(e){if(super(e),this.it=g,e.type!==Us.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===g||e==null)return this._t=void 0,this.it=e;if(e===De)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};pn.directiveName="unsafeHTML",pn.resultType=1;var Zs=js(pn);var qs=40,xi=class extends de{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(e=>e.id===this.value)}get hits(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return t.every(l=>a.includes(l))},i=this.fixed.filter(s=>!e||n(s)),o=e?this.options.filter(n):this.options;return[...i,...o.slice(0,qs)]}get leftOut(){let e=this._query.trim().toLowerCase(),t=e.split(/\s+/).filter(Boolean),n=e?this.options.filter(i=>t.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-qs)}choose(e){this.value=e,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:e},bubbles:!0,composed:!0}))}onKey(e){let t=this.hits;e.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(t.length-1,this._cursor+1),e.preventDefault()):e.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),e.preventDefault()):e.key==="Enter"?(this._open&&t[this._cursor]&&this.choose(t[this._cursor].id),e.preventDefault()):e.key==="Escape"&&(this._open=!1,this._query="")}render(){let e=this.current,t=this._open?this.hits:[];return p`<div class="wrap">
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
      ${this._open?p`<ul class="list" role="listbox">
            ${t.length?g:p`<li class="empty">–</li>`}
            ${t.map((n,i)=>p`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?p`<small>${n.id}</small>`:g}
              </li>`)}
            ${this.leftOut>0?p`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:g}
          </ul>`:g}
    </div>`}static styles=[wt,Me`
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
    `]};customElements.get("nf-entity-picker")||customElements.define("nf-entity-picker",xi);var fn=r=>r.target.value,ki=r=>Number.parseFloat(r.replace(",",".")),ne=r=>Math.round(r*1e3)/1e3,Ys=r=>r.wide?"nf-field nf-wide":"nf-field";function A(r,e,t,n,i=.01,o){return p`<label class="nf-field"
    >${e}
    <input
      type="number"
      inputmode="decimal"
      step=${i}
      min=${o??g}
      .value=${String(ne(t))}
      ?disabled=${!r.admin}
      @change=${s=>{let a=ki(fn(s));Number.isFinite(a)&&n(a)}}
    />
  </label>`}function oe(r,e,t,n,i={}){return p`<label class=${Ys(i)} title=${i.title??g}
    >${e}
    <input type="text" .value=${t} placeholder=${i.placeholder??g} maxlength=${i.maxlength??g} ?disabled=${!r.admin} @change=${o=>n(fn(o).trim())} />
  </label>`}function j(r,e,t,n,i,o={}){return p`<label class=${Ys(o)} title=${o.title??g}
    >${e}
    <select ?disabled=${!r.admin} @change=${s=>i(fn(s))}>
      ${n.map(([s,a])=>p`<option value=${s} ?selected=${s===t}>${a}</option>`)}
    </select>
  </label>`}function re(r,e,t,n,i={}){return p`<label class="nf-check ${i.wide===!1?"":"nf-wide"}" title=${i.title??g}
    ><input type="checkbox" .checked=${t} ?disabled=${!r.admin} @change=${o=>n(o.target.checked)} />
    ${e}</label
  >`}function C(r,e,t,n,i,o){let s=n===void 0?null:n?r.t("entity_auto",{name:B(r.hass,n)}):r.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:r.t("entity_none")}];return p`<label class="nf-field nf-wide"
    >${e}
    <nf-entity-picker
      .options=${i}
      .fixed=${a}
      .value=${t??(s!==null?"__auto":"none")}
      .placeholder=${r.t("entity_search")}
      ?disabled=${!r.admin}
      @change=${c=>{c.stopPropagation(),o(c.detail.value==="__auto"?null:c.detail.value)}}
    ></nf-entity-picker>
  </label>`}function Un(r,e,t){let n=e?(e.startsWith("mdi:")?e:`mdi:${e}`).replace(/[^a-z0-9:-]/gi,""):"";return p`<label class="nf-field nf-wide" title=${r.t("marker_icon_hint")}
    >${r.t("marker_icon")}
    <span class="nf-icon-row">
      <input type="text" placeholder="mdi:thermometer" .value=${e??""} ?disabled=${!r.admin} @change=${i=>t(fn(i).trim().replace(/^mdi:/,"")||null)} />
      ${n?Zs(`<ha-icon icon="${n}"></ha-icon>`):g}
    </span>
  </label>`}function Qs(r,e,t){return p`<label class="nf-field nf-wide" title=${r.t("marker_show_hint")}
    >${r.t("marker_show")}
    <select ?disabled=${!r.admin} @change=${n=>t(fn(n)||null)}>
      <option value="" ?selected=${!e}>${r.t("marker_show_auto")}</option>
      ${Ro.map(n=>p`<option value=${n} ?selected=${n===e}>${r.t(`marker_show_${n}`)}</option>`)}
    </select>
  </label>`}var X=(...r)=>p`<div class="nf-actions">${r}</div>`,z=(r,e="")=>p`<p class="nf-sub ${e}">${r}</p>`;function Xs(r,e,t){let n=r.filter(i=>i.person!==e);return t&&t!=="none"?[...n,{person:e,sensor:t}]:n}function Js(r,e){let t=e.slice(e.indexOf(".")+1),n=i=>i.id.includes(t)&&/(area|room|raum|bermuda|espresense)/.test(i.id);return[...r.filter(n),...r.filter(i=>!n(i))]}function ea(r){let e=r.target?`, target: { x: ${r.target.x}, y: ${r.target.y}, z: ${r.target.z} }`:"";return`start_view: { theta: ${r.theta}, phi: ${r.phi}, radius: ${r.radius}${e} }`}function ta(r){let e=r.trim();if(!e)return{ok:!0,value:null};try{let t=JSON.parse(e);return t&&typeof t=="object"&&!Array.isArray(t)?{ok:!0,value:t}:{ok:!1}}catch{return{ok:!1}}}function jn(r,e,t){let n=[...r],[i]=n.splice(e,1);return n.splice(Math.max(0,Math.min(n.length,e+t)),0,i),n}var Zn=(r,e)=>r.filter((t,n)=>n!==e),$i=(r,e,t)=>r.map((n,i)=>i===e?{...n,...t}:n),qn=r=>r.length>0?r:void 0;var Ed=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],Rd=40,Ad=20,zd=30,Pd=["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"],Td={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""},Si=(r,e,t,n=!1)=>p`<button class="nf-pin" title=${r} ?disabled=${n} @click=${t}>${e}</button>`;function Od(r){let e=r.doc.settings.favorites??[],t=o=>r.change(s=>s.settings.favorites=qn(o)),n=K(r.hass,o=>Ed.includes(o.split(".")[0])&&!e.includes(o)),i=(o,s)=>p`<div class="nf-row nf-dev-row">
    <span class="nf-dev-name"><span>${B(r.hass,o)}</span></span>
    ${Si(r.t("move_up"),"\u2191",()=>t(jn(e,s,-1)),s===0)}
    ${Si(r.t("move_down"),"\u2193",()=>t(jn(e,s,1)),s===e.length-1)}
    ${Si(r.t("delete"),"\u2715",()=>t(Zn(e,s)))}
  </div>`;return p`<summary>${r.t("favorites")}${e.length>0?p` <span class="nf-lib-count">${e.length}</span>`:g}</summary>
    ${z(r.t("favorites_hint"))} ${e.map(i)}
    ${e.length<Rd?p`<div class="nf-form">${C(r,r.t("favorites_add"),null,void 0,n,o=>o&&o!=="none"&&!e.includes(o)&&t([...e,o]))}</div>`:g}`}function Dd(r){let e=r.doc.settings.media_presets??[],t=o=>r.change(s=>s.settings.media_presets=qn(o)),n=(o,s)=>t($i(e,o,s)),i=(o,s)=>p`<div class="nf-form nf-own-button">
    ${oe(r,r.t("own_button_label"),o.label,a=>n(s,{label:a||"Radio"}),{maxlength:60})}
    ${oe(r,r.t("preset_type"),o.type,a=>n(s,{type:a||"music"}),{title:r.t("preset_type_hint")})}
    ${oe(r,r.t("preset_content"),o.content,a=>n(s,{content:a}),{wide:!0,title:r.t("preset_content_hint"),placeholder:"https://\u2026 \xB7 spotify:playlist:\u2026 \xB7 Rock Antenne"})}
    <div class="nf-actions nf-wide"><button class="nf-btn nf-danger" @click=${()=>t(Zn(e,s))}>${r.t("delete")}</button></div>
  </div>`;return p`<h4>${r.t("presets")}</h4>
    ${z(r.t("presets_hint"))}
    <datalist id="nf-preset-types">${Pd.map(o=>p`<option value=${o}></option>`)}</datalist>
    ${e.map(i)}
    ${e.length<zd?X(p`<button class="nf-btn" @click=${()=>t([...e,{id:D("preset"),label:"Radio",type:"music",content:""}])}>+ ${r.t("preset_add")}</button>`):g}`}function Id(r,e,t){let n=e.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}',i=o=>{let s=o.target;s.setCustomValidity("");let a=ta(s.value);if(a.ok)return t(a.value);s.setCustomValidity(r.t("own_data_bad")),s.reportValidity()};return p`<label class="nf-field nf-wide" title=${r.t("own_data_hint")}
    >${r.t("own_data")}
    <textarea rows="4" spellcheck="false" placeholder=${n} .value=${e.data?JSON.stringify(e.data,null,1):""} @change=${i}></textarea>
  </label>`}function Hd(r){let e=r.doc.settings.buttons??[],t=s=>r.change(a=>a.settings.buttons=qn(s)),n=(s,a)=>t($i(e,s,a)),i=zo.map(s=>[s,r.t(`own_action_${s}`)]),o=(s,a)=>p`<div class="nf-form nf-own-button">
    ${oe(r,r.t("own_button_label"),s.label,l=>n(a,{label:l||r.t("own_button_new")}),{maxlength:60})}
    ${j(r,r.t("own_button_action"),s.action,i,l=>n(a,{action:l}))} ${Un(r,s.icon??null,l=>n(a,{icon:l}))}
    ${s.action!=="fire_dom_event"?oe(r,r.t(`own_target_${s.action}`),s.target??"",l=>n(a,{target:l||null}),{wide:!0,placeholder:Td[s.action]}):g}
    ${s.action==="service"||s.action==="fire_dom_event"?Id(r,s,l=>n(a,{data:l})):g}
    <div class="nf-actions nf-wide">
      <button class="nf-btn" ?disabled=${a===0} @click=${()=>t(jn(e,a,-1))}>↑</button>
      <button class="nf-btn nf-danger" @click=${()=>t(Zn(e,a))}>${r.t("delete")}</button>
    </div>
  </div>`;return p`<h4>${r.t("own_buttons")}</h4>
    ${z(r.t("own_buttons_hint"))} ${e.map(o)}
    ${e.length<Ad?X(p`<button class="nf-btn" @click=${()=>t([...e,{id:D("btn"),label:r.t("own_button_new"),action:"navigate",target:null}])}>+ ${r.t("own_button_add")}</button>`):g}`}function na(r){return p`<details class="nf-section">${Od(r)} ${Hd(r)} ${Dd(r)}</details>`}function ra(r,e){let t=r.doc.settings.start_view??null,n=()=>{let i=e();i&&r.change(o=>o.settings.start_view=i)};return p`<details class="nf-section">
    <summary>${r.t("start_view")}</summary>
    ${z(r.t("start_view_hint"))}
    ${X(p`<button class="nf-btn nf-primary" @click=${n}>${r.t("start_view_set")}</button>`,t?p`<button class="nf-btn" @click=${()=>r.change(i=>i.settings.start_view=null)}>${r.t("start_view_reset")}</button>`:g)}
    ${t?p`${z(r.t("start_view_saved"))} ${z(r.t("start_view_card"))}<code class="nf-code">${ea(t)}</code>`:g}
  </details>`}function ia(r){let e=Object.keys(r.hass?.states??{}).filter(i=>i.startsWith("person.")).sort(),t=K(r.hass,J),n=i=>C(r,`${B(r.hass,i)} \xB7 ${r.t("presence_sensor")}`,r.doc.presence.find(o=>o.person===i)?.sensor??null,void 0,Js(t,i),o=>r.replace({...structuredClone(r.doc),presence:Xs(r.doc.presence,i,o)}));return p`<details class="nf-section">
    <summary>${r.t("presence")}</summary>
    <div class="nf-form">${e.length>0?e.map(n):p`<p class="nf-sub nf-wide">${r.t("no_persons")}</p>`}</div>
    ${z(r.t("presence_hint"))}
  </details>`}var oa="nextfloor";function Ld(r){let e=structuredClone(r);e.energy={...e.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},e.presence=[];for(let t of e.floors)t.background=null,t.placements=[],t.rooms.forEach(n=>n.area_id=null),t.furniture.forEach(n=>Object.assign(n,{entity:null,power:null})),t.openings.forEach(n=>Object.assign(n,{cover:null,contact:null,tilt:null}));return e}function sa(r,e){return{format:oa,version:1,exported_at:new Date().toISOString(),building:e?Ld(r):structuredClone(r)}}var Cd=r=>!!r&&r.version===1&&Array.isArray(r.floors)&&!!r.settings;function aa(r){let e;try{e=JSON.parse(r)}catch{throw new Error("not_json")}let t=e,n=t?.format===oa?t.building:e;if(!Cd(n))throw new Error("not_plan");return n.floors.forEach(i=>i.background=null),Fn(n)}var Bd=r=>!/^https?:\/\//.test(r)&&!r.startsWith("camera:");function la(r){let e=new Set;for(let t of r.floors){t.background?.image_id&&e.add(t.background.image_id);let n=t.furniture.flatMap(i=>i.pictures??[]);for(let{image:i}of n)i&&Bd(i)&&e.add(i)}return[...e]}function ca(r,e){let t=document.createElement("a"),n=URL.createObjectURL(new Blob([e],{type:"application/json"}));Object.assign(t,{href:n,download:r}),t.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}var Wd={api:{listHistory:uo,restoreSnapshot:po,takeSnapshot:ho,fetchBackup:go,restoreBackup:_o,fetchImage:xn,storeImage:kn},alert:r=>alert(r),confirm:r=>confirm(r),download:ca,today:()=>new Date().toISOString().slice(0,10)},Vd=r=>String(r?.message??r),Yn=class{host;deps;history=null;busy=!1;constructor(e,t=Wd){this.host=e,this.deps=t}async loadHistory(){let{hass:e}=this.host;e&&(this.history=await this.deps.api.listHistory(e).catch(()=>[]),this.host.refresh())}timeOf(e){return new Date(e.saved_at*1e3).toLocaleString(this.host.hass?.language,{dateStyle:"short",timeStyle:"short"})}async restorePoint(e){let{hass:t,t:n}=this.host;!t||!this.deps.confirm(n("backup_restore_confirm",{time:this.timeOf(e)}))||(await this.deps.api.restoreSnapshot(t,e.id),this.host.say(n("backup_restored")),await this.loadHistory())}exportPlan(e){let t=this.host.t(e?"export_name_template":"export_name_backup");this.deps.download(`nextfloor-${t}-${this.deps.today()}.json`,JSON.stringify(sa(this.host.doc,e),null,2))}async importPlan(e){let{hass:t,t:n}=this.host;if(!e||!t)return;let i;try{i=aa(await e.text())}catch(o){let s=o.message;this.deps.alert(s==="not_json"?n("import_error_not_json"):s==="not_plan"?n("import_error_not_plan"):n("backup_import_error",{error:s}));return}this.deps.confirm(n("backup_import_confirm"))&&(await this.deps.api.takeSnapshot(t).catch(()=>{}),this.host.adopt(i),this.host.say(n("backup_imported")))}async exportFull(){let{hass:e,t}=this.host;if(e){this.busy=!0,this.host.refresh();try{let n=await this.deps.api.fetchBackup(e),i={};for(let o of la(n.building))await this.deps.api.fetchImage(e,o).then(s=>i[o]=s,()=>{});this.deps.download(`nextfloor-${t("export_name_full")}-${this.deps.today()}.json`,JSON.stringify({...n,exported_at:new Date().toISOString(),images:i}))}catch(n){this.deps.alert(t("backup_import_error",{error:Vd(n)}))}finally{this.busy=!1,this.host.refresh()}}}async importFull(e){let{hass:t,t:n}=this.host;if(!e||!t)return;let i;try{i=JSON.parse(await e.text())}catch{this.deps.alert(n("import_error_not_json"));return}if(i?.format!=="nextfloor-backup"||!i.building){this.deps.alert(n("backup_full_not_backup"));return}if(this.deps.confirm(n("backup_full_confirm"))){this.busy=!0,this.host.refresh();try{let o=await this.deps.api.restoreBackup(t,i.building,i.packs??[]),s=0;for(let[l,c]of Object.entries(i.images??{}))await this.deps.api.storeImage(t,l,c).then(()=>s++,()=>{});this.host.adopt(Fn(o.building)),this.host.packsChanged();let a=o.skipped.length>0?` ${n("backup_full_skipped",{packs:o.skipped.map(l=>l.id).join(", ")})}`:"";this.host.say(n("backup_full_restored",{packs:o.packs,pictures:s})+a)}catch(o){let{code:s,message:a}=o??{};this.deps.alert(n("backup_import_error",{error:a??s??String(o)}))}finally{this.busy=!1,this.host.refresh()}}}};var da=(r,e)=>p`<label class="nf-btn nf-upload"
  >${r}<input
    type="file"
    accept="application/json,.json"
    @change=${t=>{let n=t.target,i=n.files?.[0];n.value="",e(i)}}
  />
</label>`;function ua(r,e){let t=r.t,n=e.history,i=n===null?z(t("loading")):n.length===0?z(t("backup_none")):p`<div class="nf-room-list">
            ${n.map(o=>p`<div class="nf-row nf-dev-row">
                <span>${e.timeOf(o)} <span class="nf-muted">· ${t("backup_summary",{rooms:o.rooms,furniture:o.furniture})}</span></span>
                <button class="nf-link" @click=${()=>e.restorePoint(o)}>${t("backup_restore")}</button>
              </div>`)}
          </div>`;return p`<details class="nf-section" @toggle=${o=>o.target.open&&void e.loadHistory()}>
    <summary>${t("backup")}</summary>
    <h4 class="nf-lib-head">${t("backup_history")}</h4>
    ${i}
    <h4 class="nf-lib-head">${t("backup_file")}</h4>
    ${X(p`<button class="nf-btn" @click=${()=>e.exportPlan(!1)}>${t("backup_export")}</button>`,p`<button class="nf-btn" title=${t("backup_export_share_hint")} @click=${()=>e.exportPlan(!0)}>${t("backup_export_share")}</button>`,da(t("backup_import"),o=>{e.importPlan(o)}))}
    ${z(t("backup_hint"))}
    <h4 class="nf-lib-head">${t("backup_full")}</h4>
    ${X(p`<button class="nf-btn" ?disabled=${e.busy} @click=${()=>e.exportFull()}>${e.busy?"\u2026":t("backup_full_export")}</button>`,da(t("backup_full_import"),o=>{e.importFull(o)}))}
    ${z(t("backup_full_hint"))}
  </details>`}function ha(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var kt=(r,e,t)=>Math.min(t,Math.max(e,r)),pa=r=>(Math.round(r)%360+360)%360;function fa(r,e,t){return t?[...new Set([...r,e])]:r.filter(n=>n!==e)}var Nd=["none","flat","gable","custom"];function ma(r,e){let t=r.t,n=r.doc.settings,i=c=>r.replace({...structuredClone(r.doc),settings:{...structuredClone(r.doc.settings),...c}}),o=c=>i({roof:{...n.roof,...c}}),s=Nd.map(c=>[c,t(`roof_${c}`)]),a=n.weather_effects??To,l=n.roof.type==="gable";return p`<details class="nf-section">
    <summary>${t("settings")}</summary>
    <div class="nf-form">
      ${A(r,t("wall_exterior"),n.wall_exterior,c=>i({wall_exterior:kt(c,.02,1)}),.01,.02)}
      ${A(r,t("wall_interior"),n.wall_interior,c=>i({wall_interior:kt(c,.02,1)}),.01,.02)}
      ${A(r,t("grid"),n.grid,c=>i({grid:kt(c,.01,1)}),.01,.01)}
      ${A(r,t("north"),n.north,c=>i({north:pa(c)}),1)}
      ${j(r,t("roof"),n.roof.type,s,c=>c==="custom"?e.useRoofSections():o({type:c}),{wide:!0})}
      ${l?j(r,t("roof_ridge"),n.roof.ridge==="short"?"short":"long",[["long",t("roof_ridge_long")],["short",t("roof_ridge_short")]],c=>o({ridge:c==="short"?"short":null}),{wide:!0}):g}
      ${l?A(r,t("roof_pitch"),n.roof.pitch,c=>o({pitch:kt(c,5,60)}),1,5):g}
      ${n.roof.type!=="none"?A(r,t("roof_overhang"),n.roof.overhang,c=>o({overhang:kt(c,0,2)}),.05,0):g}
      ${r.hass?C(r,t("weather_entity"),n.weather_entity??null,ha(r.hass,null),K(r.hass,c=>c.startsWith("weather.")),c=>i({weather_entity:c})):g}
      <div class="nf-sub nf-wide">${t("weather_effects")}</div>
      ${Po.map(c=>re(r,t(`weather_effect_${c}`),a.includes(c),d=>i({weather_effects:fa(a,c,d)}),{wide:!1}))}
      ${re(r,t("rain_warning"),n.rain_warning!==!1,c=>i({rain_warning:c}))}
      ${re(r,t("sun_patches"),n.sun_patches!==!1,c=>i({sun_patches:c}),{title:t("sun_patches_hint")})}
    </div>
    ${z(`${t("north_hint")} ${t("weather_entity_hint")}`)}
  </details>`}var Qn=r=>r&&r!=="none"?r:null,Xn=(r,e)=>{e&&!r.includes(e)&&r.push(e)};function Mi(r,e=t=>Qn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors.flatMap(i=>i.furniture)){let i=e(n);if(n.type==="meter")t.grid??=i,t.gridExport??=Qn(n.export);else if(n.type==="inverter")Xn(t.solar,i);else if(n.type==="home_battery"){let o=Qn(n.charge);Xn(t.battery,i),Xn(t.charge,o),Xn(t.soc,Qn(n.soc)),(i||o)&&t.batteries.push({power:i,charge:o})}}return t}function Kd(r){for(let e of r.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return r.energy.meter}var Gd=/(phase|_l[123]\b|_[abc]$|today|daily|heute)/,Ud=/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g;function Jn(r,e,t="power"){let n=e?r.entities?.[e]?.device_id:void 0;if(!e||!n)return null;let i=Object.keys(r.states).filter(a=>a.startsWith("sensor.")&&r.entities?.[a]?.device_id===n&&r.states[a]?.attributes.device_class===t);if(i.length<=1)return i[0]??null;let o=i.filter(a=>!Gd.test(a)),s=e.replace(/^sensor\./,"").replace(Ud,"");return o.find(a=>s&&a.includes(s))??o[0]??i[0]}function ga(r,e){let t={},n=(i,o)=>{o&&!t[i]&&(t[i]=o)};for(let i of e.energy_sources??[])if(i.type==="grid")n("grid",Jn(r,i.flow_from?.[0]?.stat_energy_from??i.flow_to?.[0]?.stat_energy_to));else if(i.type==="solar")n("solar",Jn(r,i.stat_energy_from));else if(i.type==="battery"){let o=i.stat_energy_from??i.stat_energy_to;n("battery",Jn(r,o)),n("battery_soc",Jn(r,o,"battery"))}return t}function We(r,e=!1){let t=r?Number(r.state):NaN;if(!Number.isFinite(t))return null;let n={kW:1e3,MW:1e6}[String(r.attributes.unit_of_measurement??"W")]??1;return e?-t*n:t*n}var _a=r=>{let e=r.filter(t=>t!==null);return e.length?e.reduce((t,n)=>t+n,0):null};function jd(r,e,t){let n=e.grid??t.grid,i=n?We(r.states[n],e.grid_invert):null;if(!e.grid&&t.gridExport){let o=Math.max(0,We(r.states[t.gridExport])??0);return Math.max(0,i??0)-o}return i}function Zd(r,e,t){return e.solar?We(r.states[e.solar]):t.solar.length?_a(t.solar.map(n=>We(r.states[n]))):null}function qd(r,e,t){return e.battery?We(r.states[e.battery],e.battery_invert):_a(t.batteries.map(n=>n.charge?(n.power?Math.max(0,We(r.states[n.power])??0):0)-Math.max(0,We(r.states[n.charge])??0):n.power?We(r.states[n.power],e.battery_invert):null))}function ba(r,e,t,n=Mi(e)){let i=e.energy,o=jd(r,i,n),s=Zd(r,i,n),a=qd(r,i,n),l=(i.battery_soc?[i.battery_soc]:n.soc).map(_=>Number(r.states[_]?.state)).filter(Number.isFinite),c=l.length?l.reduce((_,f)=>_+f,0)/l.length:null,d=i.tariff?r.states[i.tariff]:void 0,u=Number(d?.state),h=i.consumption?We(r.states[i.consumption]):null;return h===null&&(o!==null||s!==null||a!==null)&&(h=(o??0)+Math.max(0,s??0)+(a??0)),h===null&&t.length>0&&(h=t.reduce((_,f)=>_+f.power,0)),{grid:o,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:d&&Number.isFinite(u)?{value:u,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)}}function Yd(r,e,t){let n=r.b[0]-r.a[0],i=r.b[1]-r.a[1],o=Math.hypot(n,i)||1,s=Math.min(1,Math.max(0,((e.x-r.a[0])*n+(e.z-r.a[1])*i)/(o*o))),a=r.a[0]+n*s,l=r.a[1]+i*s,c=i/o*(a-t.x)+-n/o*(l-t.z)<0?-1:1;return{x:a,z:l,nx:c*i/o,nz:-c*n/o,distance:Math.hypot(e.x-a,e.z-l)}}function va(r){let e=Kd(r),t=e?r.floors.find(c=>c.id===e.floor_id):void 0;if(!e||!t)return null;let n={exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},i=pe(t.rooms,n,t.walls??[]).walls.filter(c=>c.exterior),o=t.rooms.flatMap(c=>c.points);if(i.length===0||o.length===0)return null;let s={x:o.reduce((c,d)=>c+d[0],0)/o.length,z:o.reduce((c,d)=>c+d[1],0)/o.length},a=i.map(c=>Yd(c,e,s)).reduce((c,d)=>d.distance<c.distance?d:c),l=n.exterior/2+3;return{floorId:t.id,x:a.x+a.nx*l,z:a.z+a.nz*l}}function ya(r,e){let t=r.floors.flatMap(f=>f.furniture.map(m=>({floor:f,item:m}))),n=f=>t.filter(m=>m.item.type===f),i=f=>!!Kn(f.item,e),o=f=>({kind:"device",...f}),[s,a,l,c,d]=[r.settings.roof.solar??[],n("meter"),n("inverter"),n("home_battery"),n("grid_point")],u=!!r.energy.grid||a.some(i),h=!!r.energy.solar||l.length>0&&l.every(i),_=!!r.energy.battery||c.every(f=>i(f)&&f.item.soc&&f.item.soc!=="none");return[s.length>0?{state:"ok",label:"chk_solar",target:{kind:"solar-field",id:s[0].id}}:{state:"todo",label:"chk_solar_add",target:{kind:"add-solar-field"}},a.length>0?{state:u?"ok":"todo",label:u?"chk_meter":"chk_meter_sensor",target:o(a[0])}:{state:"todo",label:"chk_meter_add",target:{kind:"add-device",type:"meter"}},l.length>0?{state:h?"ok":"todo",label:h?"chk_inverter":"chk_inverter_sensor",target:o(l.find(f=>!i(f))??l[0])}:{state:"todo",label:"chk_inverter_add",target:{kind:"add-device",type:"inverter"}},c.length>0?{state:_?"ok":"todo",label:_?"chk_battery":"chk_battery_sensor",target:o(c[0])}:{state:"opt",label:"chk_battery_opt",target:{kind:"add-device",type:"home_battery"}},d.length>0?{state:"ok",label:"chk_grid",target:o(d[0])}:{state:"opt",label:"chk_grid_opt",target:{kind:"add-device",type:"grid_point"}}]}var Qd={ok:"\u2713",todo:"\u25CB",opt:"\xB7"},xa=r=>r.hass?et(r.hass,r.doc.floors):new Map,Xd=Fe,Jd=(r,e)=>e.name||r.t(`furn_${e.type}`);function ka(r,e){let t=ya(r.doc,xa(r)),n=t.filter(i=>i.state==="ok").length;return p`<section class="nf-checklist">
    <h3>☑ ${r.t("chk_title")} <span class="nf-sub">${n}/${t.length}</span></h3>
    ${z(r.t("chk_hint"))}
    ${t.map(i=>p`<button class="nf-chk nf-chk-${i.state}" ?disabled=${!r.admin&&i.state!=="ok"} @click=${()=>e.follow(i.target)}>
        <span>${Qd[i.state]}</span>${r.t(i.label)}
      </button>`)}
  </section>`}function $a(r,e){let t=r.doc.floors.flatMap(n=>n.furniture.filter(i=>Xd.includes(i.type)).map(i=>({floor:n,item:i})));return p`<section>
    <h3>⚡ ${r.t("energy_devices")}</h3>
    ${z(r.t("energy_devices_hint"))}
    ${t.length>0?p`<div class="nf-room-list">
          ${t.map(({floor:n,item:i})=>p`<div class="nf-row">
              <button class="nf-dev-name" @click=${()=>e.openDevice(n,i)}><span>${Jd(r,i)} · ${n.name}</span></button>
            </div>`)}
        </div>`:g}
    <div class="nf-actions">
      ${Fe.map(n=>p`<button class="nf-btn" ?disabled=${!r.admin||!r.floor} @click=${()=>e.addDevice(n)}>+ ${r.t(`furn_${n}`)}</button>`)}
    </div>
  </section>`}var wa=(r,e,t)=>p`<p class="nf-sub nf-pack-error">${r.t(e)} <button class="nf-btn" ?disabled=${!r.admin} @click=${t}>${r.t("energy_sign_flip")}</button></p>`;function Sa(r,e){let{energy:t}=r.doc,n=(b,y)=>r.hass?.states[b]?.attributes[y],i=K(r.hass,b=>xt(r.hass,b)),o=K(r.hass,b=>J(b)&&n(b,"device_class")==="battery"),s=K(r.hass,b=>J(b)&&(n(b,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(b,"unit_of_measurement")??""))),a=xa(r),l=Mi(r.doc,b=>Kn(b,a)),c=b=>r.replace({...structuredClone(r.doc),energy:{...r.doc.energy,...b}}),d=b=>y=>c({[b]:y==="none"?null:y}),u=r.hass?ba(r.hass,r.doc,[],l):null,h=!!u&&(u.solar??0)<20,_=h&&u.grid!==null&&u.grid<-50,f=h&&u.battery!==null&&u.battery<-50&&(u.grid??0)<=0,m=(b,y)=>re(r,r.t("energy_invert"),b,w=>c(y(w)));return p`<section>
    <h3>⚖ ${r.t("energy_balance")}</h3>
    ${z(r.t("energy_balance_hint"))}
    ${_?wa(r,"energy_sign_grid",()=>c({grid_invert:!t.grid_invert})):g}
    ${f?wa(r,"energy_sign_battery",()=>c({battery_invert:!t.battery_invert})):g}
    <div class="nf-form">
      ${C(r,r.t("energy_grid"),t.grid,l.grid,i,d("grid"))}
      ${m(t.grid_invert,b=>({grid_invert:b}))}
      ${C(r,r.t("energy_solar_sensor"),t.solar,l.solar[0]??null,i,d("solar"))}
      ${C(r,r.t("energy_battery_sensor"),t.battery,l.battery[0]??null,i,d("battery"))}
      ${m(t.battery_invert,b=>({battery_invert:b}))}
      ${C(r,r.t("energy_battery_soc"),t.battery_soc,l.soc[0]??null,o,d("battery_soc"))}
      ${C(r,r.t("energy_consumption_sensor"),t.consumption,null,i,d("consumption"))}
      ${C(r,r.t("energy_tariff_sensor"),t.tariff,void 0,s,d("tariff"))}
    </div>
    <div class="nf-actions"><button class="nf-btn" ?disabled=${!r.admin||!r.hass} @click=${()=>e.importPrefs()}>${r.t("energy_import_prefs")}</button></div>
    ${e.note?z(e.note):g} ${z(r.t("energy_hint"))}
  </section>`}var Ma=r=>p`<section class="nf-teaser nf-teaser-on">
  <div class="nf-teaser-head"><b>⚡ ${r.t("feature_name_energy")}</b></div>
  ${z(r.t("feature_text_energy"))}
</section>`;function Fa(r){let e=(t,n,i)=>p`<a class="nf-btn" href="https://github.com/therealMRBK/NextFloor/${t}" target="_blank" rel="noopener">${n} ${r.t(i)}</a>`;return p`<section class="nf-help">
    <h3>${r.t("help_title")}</h3>
    ${z(r.t("help_hint"))}
    <div class="nf-actions">${e("issues/new/choose","\u{1F41E}","help_issue")}${e("discussions/categories/ideas","\u{1F4A1}","help_idea")}</div>
  </section>`}var er=(r,e)=>e.map(t=>r.toScreen(t).join(",")).join(" ");var Ea=(r,e)=>M`<circle cx=${r} cy=${e} r="16" class="nf-hit" /><circle cx=${r} cy=${e} r="6" />`,eu=(r,e,t)=>M`<g class="nf-vertex" data-roof-vertex=${t}>${Ea(...r.toScreen(e))}</g>`,tu=(r,e,t)=>M`<g class="nf-vertex" data-roof-corner=${t}>${Ea(...r.toScreen(e))}</g>`;function nu(r,e,t,n){let{t:i,hass:o}=r.host,s=t.dormer?i("roof_dormer"):t.open?i("roof_open_short"):i(`roof_shape_${t.shape}`);return`${e.isFixed(t)?"\u{1F512} ":""}${n+1} \xB7 ${s} \xB7 ${I(o,tt(t),1)} m`}function Fi(r,e){let t=r.host.doc.settings.roof,n=t.type==="custom"?t.sections??[]:[],i=r.host.admin,o=(s,a)=>{let l=s.id===e.sectionId,c=ie(s),d=s.shape==="flat"&&s.points&&s.points.length>=3?s.points:null,u=Dn(n,s),h=u?ie(li(u,s)):c,_=d??[h.at(h.u0,0),h.at(h.u1,0),h.at(h.u1,h.w),h.at(h.u0,h.w)],m=((s.shape==="flat"||s.shape==="parapet"?null:_t(s,{u0:0,u1:0,a:0,b:0}))?.ridges??[]).map(([k,$])=>{let[S,F]=r.toScreen(c.at(k[0],k[1])),[P,T]=r.toScreen(c.at($[0],$[1]));return M`<line x1=${S} y1=${F} x2=${P} y2=${T} />`}),[b,y]=r.toScreen(c.at((c.u0+c.u1)/2,c.w/2)),x=l&&i&&!e.isFixed(s)?d?d.map((k,$)=>eu(r,k,`${s.id}:${$}`)):[[0,0],[1,0],[1,1],[0,1]].map(([k,$])=>{let S=k?Math.max(s.x0,s.x1):Math.min(s.x0,s.x1),F=$?Math.max(s.z0,s.z1):Math.min(s.z0,s.z1);return tu(r,[S,F],`${s.id}:${k}:${$}`)}):g;return M`<g data-roof=${s.id} class=${`nf-roof-sec${l?" nf-roof-sel":""}`}>
        <polygon points=${er(r,_)} />
        <g class="nf-roof-ridge">${m}</g>
        <text x=${b} y=${y-14}>${nu(r,e,s,a)}</text>
      </g>${x}`};return M`<g class="nf-roof-layer">${n.map(o)}</g>`}function ru(r,e,t,n,i){let o=n*Math.PI/180,[s,a]=r.toScreen(t),[l,c]=r.toScreen([t[0]+Math.sin(o)*i,t[1]-Math.cos(o)*i]);return M`<g class="nf-rotate" data-solar-turn=${e}>
    <line x1=${s} y1=${a} x2=${l} y2=${c} />
    <circle cx=${l} cy=${c} r="16" class="nf-hit" />
    <circle cx=${l} cy=${c} r="8" />
    <path d="M${l-4} ${c-1}a4 4 0 1 1 2 3.5" />
  </g>`}function Ra(r,e){let{doc:t,admin:n}=r.host,i=t.settings.roof.solar??[];if(i.length===0)return g;let o=N(t),s=a=>{let l=ae(t,a,o);if(!l||l.wall&&l.wall.floorId!==r.floorId)return g;let c=a.id===e.solarId,d=g;if(c&&l.unbounded&&n&&!a.locked){let _=on(l,a),f=Math.max(...xe(l,a,!0).flatMap(m=>m.corners.map(b=>Math.hypot(b[0]-_[0],b[2]-_[1]))));d=ru(r,a.id,_,a.rotation??0,.9+f*.5)}let u=_=>{let f;if(l.wall){let m=Math.max(.3,..._.corners.map(v=>(v[0]-l.o[0])*l.n[0]+(v[2]-l.o[2])*l.n[2])),[b,y]=[_.corners[0],_.corners[1]],w=v=>[v[0]+l.n[0]*m,v[2]+l.n[2]*m];f=[[b[0],b[2]],w(b),w(y),[y[0],y[2]]]}else f=_.corners.map(m=>[m[0],m[2]]);return M`<polygon data-cell=${_.cell} class=${_.skipped?"nf-solar-off":""} points=${er(r,f)} />`},h=`nf-solar${c?" nf-solar-sel":""}${c&&e.picking?" nf-solar-pick":""}`;return M`<g data-solar=${a.id} class=${h}>${xe(l,a,c).map(u)}</g>${d}`};return M`<g class="nf-solar-layer">${i.map(s)}</g>`}function Aa(r,e){let t=r.host.doc.settings.roof.windows??[];if(t.length===0)return g;let n=new Map(N(r.host.doc).map(o=>[o.key,o])),i=o=>{let s=n.get(o.face),a=s?mi(s,o):null;return a?M`<g data-roofwin=${o.id} class=${`nf-roofwin${o.id===e.windowId?" nf-roofwin-sel":""}`}><polygon points=${er(r,a.map(l=>[l[0],l[2]]))} /></g>`:g};return M`<g class="nf-roofwin-layer">${t.map(i)}</g>`}var iu={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"};function za(r,e,t){if(!e)return g;let n=e.furniture.filter(o=>Fe.includes(o.type)),i=o=>{let[s,a]=r.toScreen([o.x,o.z]),l=o.id===t,c=r.host.t(`furn_${o.type}`);return M`<g data-energy-device=${o.id} class=${`nf-energy-marker${l?" nf-energy-marker-sel":""}`}>
      <circle cx=${s} cy=${a} r="17" />
      <text x=${s} y=${a+6} class="nf-energy-icon">${iu[o.type]??"\u26A1"}</text>
      ${l?M`<text x=${s} y=${a+32} class="nf-energy-name">${c}</text>`:g}
      <title>${c}</title>
    </g>`};return M`<g class="nf-energy-markers">${n.map(i)}</g>`}function Pa(r,e){let{doc:t,hass:n}=r.host;if(!(t.settings.roof.sections??[]).some(s=>ci(s,e.elevation+e.height)))return g;let o=[1.5,2].flatMap(s=>di({settings:t.settings},e.elevation,s).map(([a,l])=>{let[c,d]=r.toScreen(a),[u,h]=r.toScreen(l);return M`<line class="nf-headroom" x1=${c} y1=${d} x2=${u} y2=${h} />
        <text class="nf-headroom-label" x=${(c+u)/2} y=${(d+h)/2-4}>${I(n,s,1)} m</text>`}));return M`${o}`}function ou(r,e,t){let[n,i]=[r+t/2,e-30];return M`<g class="nf-rotate" data-bg-rotate="1">
    <line x1=${n} y1=${e} x2=${n} y2=${i} />
    <circle cx=${n} cy=${i} r="16" class="nf-hit" />
    <circle cx=${n} cy=${i} r="8" />
    <path d="M${n-4} ${i-1}a4 4 0 1 1 2 3.5" />
  </g>`}function su(r,e){let t=e.level?.length?e.level:e.ruler;if(!t?.length)return g;let n=t.map(i=>r.toScreen(i));return M`<g class="nf-bg-ruler">
    ${n.length===2?M`<line x1=${n[0][0]} y1=${n[0][1]} x2=${n[1][0]} y2=${n[1][1]} />`:g}
    ${n.map(([i,o])=>M`<circle cx=${i} cy=${o} r="6" />`)}
  </g>`}function Ta(r,e,t){let n=t?.background,i=e.picture(n?.image_id);if(!n||!i)return g;let[o,s]=r.toScreen([n.x,n.z]),a=n.width*r.scale,l=a*i.aspect,c=e.handlesShown;return M`<g transform="rotate(${n.rotation??0} ${o+a/2} ${s+l/2})">
    <image href=${i.url} x=${o} y=${s} width=${a} height=${l} opacity=${n.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
    ${c?M`<rect class="nf-bg-frame" x=${o} y=${s} width=${a} height=${l} />
        <circle class="nf-bg-handle" data-bg-handle="1" cx=${o+a} cy=${s+l} r="9" />
        ${ou(o,s,a)}`:g}
  </g>${su(r,e)}`}var Ei=r=>Math.round(r*1e3)/1e3,Ri=(r,e)=>r.width*e,$t=(r,e)=>[r.x+r.width/2,r.z+Ri(r,e)/2];function Oa(r,e,t){let[n,i]=[r[0]-e[0],r[1]-e[1]];return[e[0]+n*Math.cos(t)-i*Math.sin(t),e[1]+n*Math.sin(t)+i*Math.cos(t)]}var Da=r=>((r+180)%360+360)%360-180;function Ia(r,e,t){return{x:Ei(r[0]-e/2),z:Ei(r[1]-t/2)}}function Ha(r,e,t,n){if(Math.hypot(n[0]-t[0],n[1]-t[1])<.05)return null;let i=Math.atan2(n[1]-t[1],n[0]-t[0]),o=Math.round(i/(Math.PI/2))*(Math.PI/2)-i;if(Math.abs(o)<1e-4)return null;let s=Oa($t(r,e),t,o),a=Math.round(Da((r.rotation??0)+o*180/Math.PI)*100)/100;return{...r,rotation:a,...Ia(s,r.width,Ri(r,e))}}function La(r,e,t,n,i){let o=Math.hypot(n[0]-t[0],n[1]-t[1]);if(!(i>0)||o<1e-4)return null;let s=i/o,[a,l]=$t(r,e),c=[t[0]+s*(a-t[0]),t[1]+s*(l-t[1])],d=r.width*s;return{...r,width:Ei(d),...Ia(c,d,Ri(r,e)*s)}}function Ca(r,e,t){let n=Oa(t,$t(r,e),-(r.rotation??0)*Math.PI/180);return[n[0]-r.x,n[1]-r.z]}function Ba(r,e,t,n){let i=r+(t-e)*180/Math.PI;return Da(n?Math.round(i/15)*15:Math.round(i*10)/10)}var au=2048;async function Wa(r){let e=await createImageBitmap(r),t=Math.min(1,au/Math.max(e.width,e.height)),n=document.createElement("canvas");return n.width=Math.round(e.width*t),n.height=Math.round(e.height*t),n.getContext("2d").drawImage(e,0,0,n.width,n.height),{data:n.toDataURL("image/jpeg",.85),aspect:n.height/n.width}}var tr=class{deps;editMode=!1;levelPoints=null;rulerPoints=null;rulerMetres=0;sectionOpen=!1;pictures={};loading=new Set;constructor(e){this.deps=e}get edit(){return this.editMode}set edit(e){this.editMode=e,this.deps.refresh()}get level(){return this.levelPoints}set level(e){this.levelPoints=e,this.deps.refresh()}get ruler(){return this.rulerPoints}set ruler(e){this.rulerPoints=e,this.deps.refresh()}get rulerLength(){return this.rulerMetres}set rulerLength(e){this.rulerMetres=e,this.deps.refresh()}get open(){return this.sectionOpen}set open(e){this.sectionOpen=e,this.deps.refresh()}get handlesShown(){let{host:e}=this.deps;return!!e.floor?.background&&e.admin&&this.deps.currentTool()==="select"&&this.editMode}picture(e){return e?this.pictures[e]:void 0}ensureLoaded(e){!this.pictures[e]&&!this.loading.has(e)&&this.load(e)}async load(e){let{host:t,api:n}=this.deps;if(t.hass){this.loading.add(e);try{let i=await n.fetchImage(t.hass,e),o=await this.aspectOf(i);this.pictures={...this.pictures,[e]:{url:i,aspect:o}},this.deps.refresh()}catch{}}}async aspectOf(e){let t=new Image;return t.src=e,await t.decode(),t.naturalHeight/t.naturalWidth}async upload(e){let{host:t,api:n}=this.deps;if(!e||!t.hass)return;let{data:i,aspect:o}=await this.deps.readPicture(e),s=D("img");await n.storeImage(t.hass,s,i),this.pictures={...this.pictures,[s]:{url:i,aspect:o}};let a=t.floor?.rooms??[],l=a.length>0?te(a.flatMap(d=>d.points)):null,c={image_id:s,x:l?l.x0:0,z:l?l.z0:0,width:l?Math.max(4,Math.round((l.x1-l.x0)*1e3)/1e3):12,opacity:.5};this.setBackground(c)}setBackground(e){this.deps.host.change((t,n)=>Object.assign(n,{background:e}))}toggleLevel(){this.levelPoints=this.levelPoints?null:[],this.rulerPoints=null,this.editMode=!1,this.deps.refresh()}toggleRuler(){this.rulerPoints=this.rulerPoints?null:[],this.levelPoints=null,this.editMode=!1,this.deps.refresh()}toggleEdit(){this.edit=!this.editMode,this.editMode&&this.deps.useSelectTool()}tapLevel(e){let t=[...this.levelPoints??[],e];if(t.length<2){this.level=t;return}this.level=null,this.straighten(t[0],t[1])}tapRuler(e){this.rulerPoints&&this.rulerPoints.length<2&&(this.ruler=[...this.rulerPoints,e])}straighten(e,t){let n=this.deps.host.floor?.background,i=this.picture(n?.image_id),o=n&&i?Ha(n,i.aspect,e,t):null;o&&this.setBackground(o)}applyRuler(){let e=this.deps.host.floor?.background,t=this.picture(e?.image_id),n=this.rulerPoints;if(!e||!t||!n||n.length<2)return;let i=La(e,t.aspect,n[0],n[1],this.rulerMetres);i&&(this.setBackground(i),this.rulerPoints=null,this.rulerMetres=0,this.deps.refresh())}};var Va=.1,Ai=(r,e,t)=>p`<button class="nf-btn nf-wide ${r?"nf-primary":""}" aria-pressed=${r} @click=${t}>${e}</button>`;function lu(r,e){let t=e.ruler;if(!t)return g;if(t.length<2)return z(r.t(t.length>0?"bg_ruler_second":"bg_ruler_first"),"nf-wide");let n=Math.hypot(t[1][0]-t[0][0],t[1][1]-t[0][1]),i=()=>e.applyRuler();return p`${z(r.t("bg_ruler_length_hint",{m:I(r.hass,n,2)}),"nf-wide")}
    <label class="nf-field"
      >${r.t("bg_ruler_length")}
      <input
        type="number"
        min="0.01"
        step="0.01"
        .value=${e.rulerLength?String(e.rulerLength):""}
        @input=${o=>e.rulerLength=ki(o.target.value)||0}
        @keydown=${o=>o.key==="Enter"&&i()}
      />
    </label>
    <button class="nf-btn nf-primary" ?disabled=${!(e.rulerLength>0)} @click=${i}>${r.t("bg_ruler_apply")}</button>`}function cu(r,e){if(!r.admin)return g;let t=r.t,n=e.level;return p`${Ai(e.edit,t(e.edit?"background_edit_done":"background_edit"),()=>e.toggleEdit())}
    ${z(t(e.edit?"background_handles_hint":"background_fixed_hint"),"nf-wide")}
    ${Ai(!!n,`\u{1F4D0} ${t(n?"bg_level_cancel":"bg_level")}`,()=>e.toggleLevel())}
    ${n?z(t(n.length>0?"bg_level_second":"bg_level_first"),"nf-wide"):g}
    ${Ai(!!e.ruler,`\u{1F4CF} ${t(e.ruler?"bg_ruler_cancel":"bg_ruler")}`,()=>e.toggleRuler())}
    ${lu(r,e)}`}function Na(r,e,t){let n=t.background,i=r.t,o=s=>n&&e.setBackground({...n,...s});return p`<details class="nf-section" ?open=${e.open} @toggle=${s=>e.open=s.target.open}>
    <summary>${i("background")}</summary>
    <div class="nf-form">
      <label class="nf-btn nf-wide nf-upload"
        >${i("background_upload")}<input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          @change=${s=>{let a=s.target,l=a.files?.[0];a.value="",e.upload(l)}}
        />
      </label>
      ${n?p`${A(r,i("x"),n.x,s=>o({x:s}))} ${A(r,i("z"),n.z,s=>o({z:s}))}
          ${A(r,i("background_width"),n.width,s=>o({width:Math.max(Va,s)}),.01,Va)}
          ${A(r,i("background_rotation"),n.rotation??0,s=>o({rotation:Math.round(s*10)/10}),.5)}
          ${cu(r,e)}
          <label class="nf-field"
            >${i("background_opacity")}
            <input type="range" min="0.05" max="1" step="0.05" .value=${String(ne(n.opacity))} @change=${s=>o({opacity:Number.parseFloat(s.target.value)})} />
          </label>
          <button class="nf-btn nf-danger nf-wide" @click=${()=>e.setBackground(null)}>${i("background_remove")}</button>`:g}
    </div>
  </details>`}var du=["door","window","opening","garage_door"],uu=/griff|handle|fenster|window|drehgriff/i;function hu(r){let{hass:e}=r,t=o=>e?.states[o],n=o=>t(o)?.attributes.device_class,i=o=>o.startsWith("binary_sensor.")&&du.includes(n(o)??"");return{covers:K(e,o=>o.startsWith("cover.")),positions:K(e,o=>/^(sensor|number|input_number)\./.test(o)&&Number.isFinite(Number(t(o)?.state))),contacts:K(e,o=>i(o)||J(o)&&Gr(t(o))!==null),plainContacts:K(e,i),handles:K(e,o=>o.startsWith("binary_sensor.")?typeof t(o)?.attributes.window_state=="string":J(o)&&(Gr(t(o))!==null||uu.test(`${o} ${B(e,o)}`))),numbers:K(e,J)}}function Pi(r,e,t){if(!r.hass)return null;let n=structuredClone(r.doc.floors);for(let i of n)for(let o of i.openings)o.id===e.id&&(o[t]=null);return Kr(r.hass,n).get(e.id)?.[t]??null}var St=r=>r==="none"?null:r;function pu(r,e,t){let n=e.type==="door"?Or:Dr,i=Nt({type:e.type,style:null},t.isExterior(e)),o=e.style&&n.includes(e.style)?e.style:"",s=[["",r.t("style_auto",{style:r.t(`style_${i}`)})],...n.map(a=>[a,r.t(`style_${a}`)])];return j(r,r.t("opening_style"),o,s,a=>t.update({style:a||null}),{wide:!0})}function zi(r,e,t,n,i){return p`<label class="nf-field"
    >${r.t(n)}
    <input
      type="number"
      step="0.05"
      min="0.1"
      max="3"
      placeholder=${r.t("sidelight_auto")}
      .value=${e[t]==null?"":String(e[t])}
      ?disabled=${!r.admin}
      @change=${o=>{let s=Number(o.target.value);i.update({[t]:Number.isFinite(s)&&s>0?Math.min(3,Math.max(.1,Math.round(s*100)/100)):null})}}
    />
  </label>`}function fu(r,e,t){if(e.type!=="door")return g;let n=Nt(e,t.isExterior(e));return n==="sidelight"?p`${re(r,r.t("sidelight_hinge"),!!e.sidelight_hinge,i=>t.update({sidelight_hinge:i}),{wide:!1,title:r.t("sidelight_hinge_hint")})}
      ${zi(r,e,"sidelight_width","sidelight_width",t)}`:n==="sidelights"?p`${zi(r,e,"sidelight_width","sidelight_width_left",t)} ${zi(r,e,"sidelight_width2","sidelight_width_right",t)}`:g}function Ka(r,e,t,n,i){let o=t===1,s=r.t,a=o?e.tilt:e.tilt2??null,l=o?e.contact:e.contact2,c=(o?e.sensor:e.sensor2)??(a&&a!=="none"?"contact_tilt":"contact"),d=["contact","handle","contact_tilt"].map(f=>[f,s(`sensor_kind_${f}`)]),u=f=>{let m=f==="contact_tilt"?{}:o?{tilt:null}:{tilt2:null};n.update({...o?{sensor:f}:{sensor2:f},...m})},h=f=>n.update(o?{contact:f}:{contact2:St(f)}),_=e.tilt_angle&&e.tilt_angle!=="none";return p`${j(r,s("sensor_kind"),c,d,u,{wide:!0})}
    ${c==="handle"?C(r,s("handle_entity"),l,void 0,i.handles,f=>h(f==="none"?o?"none":null:f)):C(r,s("contact_entity"),l,o?Pi(r,e,"contact"):void 0,i.plainContacts,h)}
    ${c==="contact_tilt"?C(r,s("tilt_entity"),a,void 0,i.contacts,f=>n.update(o?{tilt:St(f)}:{tilt2:St(f)})):g}
    ${o?p`${C(r,s("tilt_angle_entity"),e.tilt_angle??null,void 0,i.numbers,f=>n.update({tilt_angle:St(f)}))}
        ${_?p`${A(r,s("tilt_angle_max"),e.tilt_max??15,f=>n.update({tilt_max:Math.min(90,Math.max(1,f))}),1,1)}
            ${A(r,s("tilt_angle_offset"),e.tilt_offset??0,f=>n.update({tilt_offset:f}),.5)}
            ${re(r,s("tilt_angle_invert"),!!e.tilt_invert,f=>n.update({tilt_invert:f}))}`:g}`:g}`}function mu(r,e,t,n){let i=r.t,o=e.type==="window",s=Pi(r,e,"cover"),a=e.cover!=="none"&&(e.cover||s);return p`${C(r,i(o?"cover_entity":"door_cover"),e.cover,s,n.covers,l=>t.update({cover:l}))}
    ${a?p`${C(r,i("cover_position_entity"),e.position??null,void 0,n.positions,l=>t.update({position:St(l)}))}
        ${e.position?re(r,i("cover_position_invert"),!!e.position_inverted,l=>t.update({position_inverted:l})):g}
        ${re(r,i("device_confirm"),!!e.confirm,l=>t.update({confirm:l}),{title:i("cover_confirm_hint")})}`:g}`}function gu(r,e,t,n){let i=r.t,o=e.leaves===2;return p`${C(r,i(o?"contact_main":"contact_entity"),e.contact,Pi(r,e,"contact"),n.contacts,s=>t.update({contact:s}))}
    ${o&&e.type!=="garage"?C(r,i("contact_second"),e.contact2,void 0,n.contacts,s=>t.update({contact2:St(s)})):g}
    ${e.type==="door"?re(r,i("door_shut"),!!e.shut,s=>t.update({shut:s}),{title:i("door_shut_hint")}):g}`}function Ti(r,e,t){let n=r.t,i=hu(r),o=Mn(e),[s,a,l]=[e.type==="window",e.type==="garage",e.type==="door"],c=_=>t.update(_),d=Object.keys(pt).map(_=>p`<button class="nf-chip" aria-pressed=${_===o} @click=${()=>t.setPreset(e,_)}>${n(`preset_${_}`)}</button>`),u=[["left",n("hinge_left")],["right",n("hinge_right")]],h=[["",n("opening_mark_open")],["closed",n("opening_mark_closed")]];return p`<section>
    <div class="nf-h3row"><h3>${n(`preset_${o}`)}</h3>${t.lockButton}</div>
    ${r.admin?p`<div class="nf-presets" role="group" aria-label=${n("opening_type")}>${d}</div>`:g}
    ${r.admin&&!a?p`<div class="nf-actions">
          <button class="nf-btn" title=${n("flip_hinge_hint")} @click=${()=>c({hinge:e.hinge==="left"?"right":"left"})}>⇆ ${n(e.leaves===2?"flip_main_leaf":"flip_hinge")}</button>
          ${l?p`<button class="nf-btn" title=${n("flip_swing_hint")} @click=${()=>c({swing:e.swing==="out"?"in":"out"})}>⇅ ${n("flip_swing")}</button>`:g}
        </div>`:g}
    <div class="nf-form">
      ${A(r,n("width"),e.width,_=>c({width:Math.max(.3,_)}),.01,.3)}
      ${A(r,n("opening_position"),e.offset,_=>c({offset:Math.max(0,_)}),.01,0)}
      ${s?A(r,n("sill"),e.sill,_=>c({sill:Math.max(0,_)}),.01,0):g}
      ${A(r,n("opening_height"),e.height,_=>c({height:Math.max(.3,_)}),.01,.3)}
      ${a?g:pu(r,e,t)} ${fu(r,e,t)}
      ${j(r,n("opening_mark"),e.mark==="closed"?"closed":"",h,_=>c({mark:_==="closed"?"closed":null}),{wide:!0,title:n("opening_mark_hint")})}
      ${a?g:j(r,n(e.leaves===2?"main_leaf":"hinge"),e.hinge,u,_=>c({hinge:_}),{wide:!0})}
      ${mu(r,e,t,i)}
      ${s?p`${e.leaves===2?p`<h4 class="nf-lib-head nf-wide">${n("leaf_main")}</h4>`:g}${Ka(r,e,1,t,i)}
          ${e.leaves===2?p`<h4 class="nf-lib-head nf-wide">${n("leaf_second")}</h4>${Ka(r,e,2,t,i)}`:g}`:gu(r,e,t,i)}
    </div>
    ${z(n(s?"opening_hint":a?"garage_hint":"door_hint"))}
    ${r.admin?p`<div class="nf-actions"><button class="nf-btn nf-danger" @click=${()=>t.remove()}>${n("delete")}</button></div>`:g}
  </section>`}var Mt=r=>Math.round(r*1e3)/1e3,_u=2.4;function Ga(r,e,t){let n=ui(r,e[0],e[1],t[0],t[1]),i=n===null,o=Math.min(...r.floors.map(l=>l.elevation)),s=Mt(n??o+_u),a=i?6:r.settings.roof.pitch||35;return{id:D("roof"),x0:Mt(e[0]),z0:Mt(e[1]),x1:Mt(t[0]),z1:Mt(t[1]),shape:i?"pent":"gable",axis:t[0]-e[0]>=t[1]-e[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:i?.15:null,...i?{open:!0}:{}}}function Ua(r){let e=t=>Mt(t+1);return{...structuredClone(r),id:D("roof"),x0:e(r.x0),x1:e(r.x1),z0:e(r.z0),z1:e(r.z1)}}var ja=(r,e)=>r.findIndex(t=>t.id===e)+1;function Ft(r){let e=r.roof.floorsTopDown();return e.length<2?g:p`<div class="nf-seg nf-dev-source">${e.map(t=>p`<button aria-pressed=${t.id===r.floorId} @click=${()=>r.setFloorId(t.id)}>${t.name}</button>`)}</div>`}function mn(r,e,t){return r.admin?p`<button class="nf-btn nf-fix" aria-pressed=${e} title=${r.t("fix_hint")} @click=${t}>${e?`\u{1F512} ${r.t("unfix")}`:`\u{1F513} ${r.t("fix")}`}</button>`:g}function Et(r,e,t,n){return p`<div class="nf-seg nf-dev-source">${e.map(([i,o])=>p`<button aria-pressed=${i===t} ?disabled=${!r.admin} @click=${()=>n(i)}>${o}</button>`)}</div>`}function st(r,e){let{t,doc:n,hass:i}=r,o=t(`compass_${wi(e,n.settings.north??0)}`);if(e.key===me)return t("solar_ground");if(e.wall){let l=n.floors.find(c=>c.id===e.wall.floorId);return`${t("solar_wall")} ${l?.name??""} \xB7 ${o} \xB7 ${I(i,e.lu,1)} m`}let s=n.settings.roof.sections??[],a=e.section?t("solar_section",{n:s.findIndex(l=>l.id===e.section)+1}):t("solar_main");return e.flat?`${a} \xB7 ${t("solar_flat")}`:`${a} \xB7 ${o} \xB7 ${Math.round(e.pitch)}\xB0`}var qa=(r,e)=>p`<div class="nf-h3row"><h3>${r}</h3>${e}</div>`,Ya=(r,e)=>p`<button class="nf-btn nf-back" @click=${e}>‹ ${r}</button>`,Za=(r,e)=>t=>Math.max(r,Math.min(e,ne(t)));function bu(r,e){let{host:t,roof:n}=r,i=t.t,o=v=>n.patchSection(v),s=e.shape==="flat"||e.shape==="parapet",a=e.shape==="pent",l=e.axis==="x"?[i("roof_side_top"),i("roof_side_bottom")]:[i("roof_side_left"),i("roof_side_right")],[c,d]=e.flip?[l[1],l[0]]:l,u=!!t.doc.settings.lock_plan,h=(v,x,k,$=.05,S=0)=>A(t,v,x,F=>k(Math.max(S,ne(F))),$,S),_=[...t.doc.floors].filter(v=>v.rooms.length>0).sort((v,x)=>x.elevation-v.elevation),f=hi(t.doc,e)?.id,m=v=>{let x=t.doc.floors.find(S=>S.id===v);if(!x)return;let k=ne(x.elevation+x.height),$=k-e.base;o({base:k,eave_a:ne(e.eave_a+$),eave_b:ne(e.eave_b+$)})},b=u?p`<button class="nf-btn nf-fix" aria-pressed="true" title=${i("lock_plan_hint")} @click=${()=>r.toggleLockPlan()}>🔒 ${i("plan_locked")}</button>`:mn(t,!!e.locked,()=>o({locked:!e.locked})),y=Ao.map(v=>[v,i(`roof_shape_${v}`)]),w=(v,x)=>p`<button class="nf-btn" title=${i("roof_dormer_hint")} @click=${()=>n.addDormer(v)}>+ ${i("roof_dormer")} ${x}</button>`;return p`${Ya(i("roof_sections"),()=>n.sectionId=null)}
    <section>
      ${Ft(r)}
      ${qa(`${e.dormer?i("roof_dormer"):i("roof_section")} ${ja(t.doc.settings.roof.sections??[],e.id)}`,t.admin?b:g)}
      ${j(t,i("roof_shape"),e.shape,y,v=>o({shape:v}),{wide:!0})}
      ${s?g:Et(t,[["x",i("roof_axis_x")],["z",i("roof_axis_z")]],e.axis,v=>o({axis:v}))}
      ${re(t,i("roof_open"),!!e.open,v=>o({open:v}),{title:i("roof_open_hint")})}
      <div class="nf-form">
        ${s?h(i("roof_height"),e.eave_a,v=>o({eave_a:v,eave_b:v})):p`${h(`${i("roof_eave")} ${a?"":c}`,e.eave_a,v=>o({eave_a:v}))}
            ${a?g:h(`${i("roof_eave")} ${d}`,e.eave_b,v=>o({eave_b:v}))}
            ${h(`${i("roof_pitch_short")} ${a?"":c}`,e.pitch_a,v=>o({pitch_a:Math.min(75,v)}),1)}
            ${a?g:h(`${i("roof_pitch_short")} ${d}`,e.pitch_b,v=>o({pitch_b:Math.min(75,v)}),1)}`}
        ${h(i("roof_base"),e.base,v=>o({base:v}))}
        ${j(t,i("roof_on_floor"),f??"",_.map(v=>[v.id,v.name]),m,{title:i("roof_on_floor_hint")})}
        ${z(i("roof_base_hint"),"nf-wide")}
        ${h(i("roof_overhang"),e.overhang??t.doc.settings.roof.overhang,v=>o({overhang:Math.min(2,v)}))}
      </div>
      ${s&&t.admin?p`${X(p`<button class="nf-btn" title=${i("roof_outline_hint")} @click=${()=>n.takeOutline()}>${i("roof_outline")}</button>`,e.points?p`<button class="nf-btn" @click=${()=>o({points:null})}>${i("roof_rect")}</button>`:g)}
          ${z(i(e.points?"roof_points_hint":"roof_outline_hint"))}`:g}
      ${z(`${i("roof_ridge_height")}: ${I(t.hass,tt(e),2)} m \xB7 ${i("roof_section_hint")}`)}
      ${t.admin?X(s?g:p`<button class="nf-btn" title=${i("roof_swap_hint")} @click=${()=>o({flip:!e.flip})}>⇅ ${i("roof_swap")}</button>`,!s&&!e.dormer&&!e.open?p`${w("a",c)}${a?g:w("b",d)}`:g,p`<button class="nf-btn" @click=${()=>n.duplicateSection()}>${i("duplicate")}</button>`,p`<button class="nf-btn nf-danger" @click=${()=>n.removeSection()}>${i("delete")}</button>`):g}
    </section>`}function vu(r,e){let{host:t,roof:n}=r,i=t.t,o=N(t.doc),s=h=>n.patchWindow(h),a=K(t.hass,h=>h.startsWith("cover.")),l=K(t.hass,h=>Nn(h)||J(h)),c=(h,_,f,m)=>C(t,i(h),_??null,void 0,f,b=>s({[m]:b==="none"?null:b})),d=h=>{let _=o.find(f=>f.key===h);_&&s({...dn(_,e.id),w:e.w,h:e.h,cover:e.cover,contact:e.contact,tilt:e.tilt,window:e.window,name:e.name})},u=(t.doc.settings.roof.windows??[]).findIndex(h=>h.id===e.id)+1;return p`${Ya(i("roof_sections"),()=>n.windowId=null)}
    <section>
      ${qa(`\u{1FA9F} ${i("roof_window")} ${u}`,mn(t,!!e.locked,()=>s({locked:!e.locked})))}
      <div class="nf-form">
        ${j(t,i("solar_face"),e.face,o.map(h=>[h.key,st(t,h)]),d,{wide:!0})}
        ${A(t,i("width"),e.w??.78,h=>s({w:Za(.3,4)(h)}),.01,.3)}
        ${A(t,i("height_m"),e.h??1.18,h=>s({h:Za(.3,4)(h)}),.01,.3)}
        ${A(t,i("solar_u"),e.u,h=>s({u:ne(h)}),.05)} ${A(t,i("solar_v"),e.v,h=>s({v:ne(h)}),.05)}
        ${c("cover_entity",e.cover,a,"cover")} ${c("contact_entity",e.contact,l,"contact")}
        ${c("roof_window_tilt",e.tilt,l,"tilt")} ${c("roof_window_motor",e.window,a,"window")}
        ${oe(t,i("roof_window_name"),e.name??"",h=>s({name:h||null}),{wide:!0,maxlength:64})}
      </div>
      ${z(i("roof_window_motor_hint"))} ${z(i("roof_window_hint"))}
      ${t.admin?X(p`<button class="nf-btn nf-danger" @click=${()=>n.removeWindow()}>${i("delete")}</button>`):g}
    </section>`}function yu(r){let{host:e,roof:t}=r,n=e.doc.settings.roof.windows??[],i=new Map(N(e.doc).map(s=>[s.key,s])),o=s=>{t.windowId=s,t.sectionId=null};return p`<section>
    <h3>🪟 ${e.t("roof_windows")}</h3>
    ${z(e.t(i.size>0?"roof_windows_hint":"solar_no_roof"))}
    ${n.length>0?p`<div class="nf-room-list">
          ${n.map((s,a)=>{let l=i.get(s.face);return p`<div class="nf-row"><button class="nf-dev-name" @click=${()=>o(s.id)}><span>${e.t("roof_window")} ${a+1} · ${l?st(e,l):e.t("solar_face_gone")}</span></button></div>`})}
        </div>`:g}
    ${X(p`<button class="nf-btn" ?disabled=${!e.admin||i.size===0} @click=${()=>t.addWindow()}>+ ${e.t("roof_window")}</button>`)}
  </section>`}function Qa(r){let{host:e,roof:t}=r,n=e.doc.settings.roof,i=n.type==="custom";if(t.window)return vu(r,t.window);if(i&&t.section)return bu(r,t.section);let o=i?n.sections??[]:[],s=e.t,a=(l,c)=>`${c+1} \xB7 ${l.dormer?s("roof_dormer"):s(`roof_shape_${l.shape}`)} \xB7 ${I(e.hass,Math.abs(l.x1-l.x0),1)} \xD7 ${I(e.hass,Math.abs(l.z1-l.z0),1)} m \xB7 ${s("roof_ridge_height")} ${I(e.hass,tt(l),1)} m`;return p`<section>
      ${Ft(r)}
      <h3>${s("roof_sections")}</h3>
      ${z(s("roof_sections_hint"))}
      ${i?p`<div class="nf-room-list">${o.map((l,c)=>p`<div class="nf-row"><button class="nf-dev-name" @click=${()=>t.sectionId=l.id}><span>${a(l,c)}</span></button></div>`)}</div>
          ${X(p`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>t.useSections(!0)}>${s("roof_sections_regen")}</button>`,p`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>e.change(l=>l.settings.roof.type="gable")}>${s("roof_sections_off")}</button>`)}`:X(p`<button class="nf-btn nf-primary" ?disabled=${!e.admin} @click=${()=>t.useSections()}>${s("roof_sections_start")}</button>`)}
    </section>
    ${yu(r)}`}var Oi=40,Xa=60;function Di(r){let e=new Set((r.solar??[]).map(t=>t.string).filter(Boolean));r.strings=(r.strings??[]).filter(t=>e.has(t.id))}function Ja(r,e,t,n){let i=r.solar?.find(o=>o.id===e);if(i){if(t==="new"){let o=r.strings??[],s={id:n.id,name:n.name(o.length+1),entity:i.entity??null,inverter:null};r.strings=[...o,s],i.string=s.id}else i.string=t;Di(r)}}function el(r,e){let t=new Set(r??[]);return t.delete(e)||t.add(e),t.size>0?[...t].sort():null}function tl(r){let e=r.split(/[,;\s]+/).map(n=>Number.parseInt(n,10)).filter(n=>Number.isFinite(n)&&n>=0);return e.length===0?null:e.length===1?{cols:Math.max(1,Math.min(Xa,e[0])),layout:null,skip:null}:{layout:e.slice(0,Oi).map(n=>Math.min(Xa,n)),rows:Math.min(Oi,e.length),cols:Math.max(1,...e),skip:null}}function nl(r,e){let t=Math.max(1,Math.min(Oi,Math.round(e))),n=r.layout;return n?.length?{rows:t,layout:Array.from({length:t},(i,o)=>n[o]??n[n.length-1])}:{rows:t}}var rl=r=>r.layout?.length?r.layout.join(", "):String(r.cols),wu=["portrait","look","name","string","entity","module_w","module_h","wp"];function xu(r){let e={};for(let t of wu)e[t]=r[t];return e}function il(r,e,t){let n=xu(e);if(t===me)return{...ln(r,e.id),...n,rows:e.rows,cols:e.cols};let i=N(r).find(s=>s.key===t);if(i)return Cn(i,{...e,...n});let o=we(r).find(s=>s.key===t);return o?Cn(o,{...e,...n,rows:1}):null}var ol=400;function Ii(r,e){let t=r?xe(r,e).length:0;return{modules:t,kwp:t*(e.wp??ol)/1e3}}function sl(r){let{host:e,roof:t}=r,n=e.t,i=e.doc.settings.roof.solar??[],o=e.doc.settings.roof.strings??[],s=N(e.doc),a=new Map(i.map(d=>[d.id,ae(e.doc,d,s)])),l=(d,u)=>{let h=a.get(d.id),_=Ii(h,d),f=n("solar_summary",{n:_.modules,kwp:I(e.hass,_.kwp,1)});return p`<div class="nf-row">
      <button class="nf-dev-name" @click=${()=>t.selectField(d.id)}>
        <span>${d.name||`${n("solar_field")} ${u+1}`} · ${h?st(e,h):n("solar_face_gone")} · ${f}</span>
      </button>
    </div>`},c=d=>{let u=i.filter(m=>m.string===d.id),h=u.map(m=>Ii(a.get(m.id),m)),_=h.reduce((m,b)=>m+b.modules,0),f=h.reduce((m,b)=>m+b.kwp,0);return p`<p class="nf-sub">🔗 <b>${d.name}</b> · ${n("solar_string_sum",{fields:u.length,n:_,kwp:I(e.hass,f,1)})}</p>`};return p`<section>
    ${Ft(r)}
    <h3>☀ ${n("solar_fields")}</h3>
    ${z(n(s.length>0?"solar_hint":"solar_no_roof"))}
    ${i.length>0?p`<div class="nf-room-list">${i.map(l)}</div>`:g}
    ${X(p`<button class="nf-btn nf-primary" ?disabled=${!e.admin||s.length===0} @click=${()=>t.addField()}>+ ${n("solar_add")}</button>`,p`<button class="nf-btn" ?disabled=${!e.admin} @click=${()=>t.addGroundField()}>+ ${n("solar_add_ground")}</button>`,p`<button class="nf-btn" ?disabled=${!e.admin||!r.floorId} @click=${()=>t.addWallField()}>+ ${n("solar_add_wall")}</button>`)}
    ${o.length>0?p`<h4 class="nf-lib-head">${n("solar_strings")}</h4>${o.map(c)}`:g}
  </section>`}function ku(r,e){let{host:t,roof:n}=r,i=t.t,o=K(t.hass,h=>xt(t.hass,h)),s=t.doc.settings.roof.strings??[],a=s.find(h=>h.id===e.string),l=[["",i("solar_string_none")],...s.map(h=>[h.id,h.name]),["new",`+ ${i("solar_string_new")}`]],c=j(t,i("solar_string"),e.string??"",l,h=>n.setString(h===""?null:h),{wide:!0});if(!a)return p`${c}${C(t,i("solar_entity"),e.entity??null,void 0,o,h=>n.patchField({entity:h==="none"?null:h}))}`;let d=t.hass?et(t.hass,t.doc.floors):null,u=t.doc.floors.flatMap(h=>h.furniture.filter(_=>_.type==="inverter").map(_=>({item:_,floor:h}))).map(({item:h,floor:_},f)=>{let m=d?.get(h.id)?.entity,b=h.name?.trim()||(m?B(t.hass,m):"");return[h.id,`${b||`${i("furn_inverter")} ${f+1}`} \xB7 ${_.name}`]});return p`${c}
    ${oe(t,i("solar_string_name"),a.name,h=>n.patchString({name:h||a.name}),{wide:!0})}
    ${C(t,i("solar_string_entity"),a.entity??null,void 0,o,h=>n.patchString({entity:h==="none"?null:h}))}
    ${j(t,i("solar_string_inverter"),a.inverter??"",[["",i(u.length>0?"solar_string_inverter_none":"solar_string_inverter_missing")],...u],h=>n.patchString({inverter:h||null}),{wide:!0})}`}function al(r,e){let{host:t,roof:n}=r,i=t.t,o=x=>n.patchField(x),s=N(t.doc),a=ae(t.doc,e,s),l=e.face===me,c=tn(e),d=Ii(a,e),u=c.reduce((x,k)=>x+k,0)-(e.skip?.length??0),h=(t.doc.settings.roof.solar??[]).findIndex(x=>x.id===e.id)+1,_=[...a?[]:[["",i("solar_face_gone")]],...s.map(x=>[x.key,st(t,x)]),[me,i("solar_ground")],...we(t.doc).map(x=>[x.key,st(t,x)])],f=x=>{let k=il(t.doc,e,x);k&&o(k)},m=(x,k,$=ne)=>S=>Math.max(x,Math.min(k,$(S))),b=x=>o(cn(t.doc,e,x)),y=a?.wall?"solar_flip_wall":"solar_flip",w=(x,k,$)=>A(t,i(k),e[x]??$,S=>o({[x]:m(.3,3)(S)}),.01,.3),v=!!e.layout?.length&&new Set(e.layout).size>1;return p`<button class="nf-btn nf-back" @click=${()=>n.solarId=null}>‹ ${i("solar_fields")}</button>
    <section>
      ${Ft(r)}
      <div class="nf-h3row">
        <h3>☀ ${e.name||`${i("solar_field")} ${h}`}</h3>
        ${mn(t,!!e.locked,()=>o({locked:!e.locked}))}
      </div>
      <div class="nf-form">
        ${oe(t,i("solar_name"),e.name??"",x=>o({name:x||null}),{wide:!0,placeholder:i("solar_name_hint")})}
        ${j(t,i("solar_face"),a?e.face:"",_,f,{wide:!0})}
        ${A(t,i("solar_rows"),c.length,x=>o(nl(e,x)),1,1)}
        <label class="nf-field" title=${i("solar_cols_hint")}
          >${i("solar_cols")}
          <input
            type="text"
            inputmode="numeric"
            ?disabled=${!t.admin}
            .value=${rl(e)}
            @change=${x=>{let k=tl(x.target.value);k&&o(k)}}
          />
        </label>
      </div>
      ${z(`${a&&!a.unbounded?`${i("solar_face_size",{w:I(t.hass,a.lu,1),h:I(t.hass,a.ls,1)})} \xB7 `:""}${i("solar_cols_hint")}`)}
      ${v?Et(t,["left","center","right"].map(x=>[x,i(`solar_align_${x}`)]),e.align??"left",x=>o({align:x})):g}
      ${Et(t,[[!0,i("solar_portrait")],[!1,i("solar_landscape")]],e.portrait!==!1,x=>o({portrait:x}))}
      ${Et(t,[["black",i("solar_look_black")],["blue",i("solar_look_blue")]],e.look==="blue"?"blue":"black",x=>o({look:x}))}
      <div class="nf-form">
        ${w("module_w","solar_module_w",1.13)} ${w("module_h","solar_module_h",1.72)}
        ${A(t,i("solar_wp"),e.wp??ol,x=>o({wp:m(50,1500,Math.round)(x)}),5,50)}
      </div>
      ${X(p`<button class="nf-btn" aria-pressed=${n.picking} ?disabled=${!t.admin} @click=${()=>n.picking=!n.picking}>${n.picking?"\u2713 ":""}${i("solar_pick")}</button>`,e.skip?.length?p`<button class="nf-btn" ?disabled=${!t.admin} @click=${()=>o({skip:null})}>${i("solar_pick_all")}</button>`:g)}
      ${n.picking?z(i("solar_pick_hint")):g}
      <div class="nf-form">
        ${l?p`${A(t,i("solar_base"),e.base??0,x=>o({base:x>.001?Math.min(60,ne(x)):null}),.05,0)}
            ${A(t,i("solar_rotation"),e.rotation??0,b,5)}
            ${X(p`<button class="nf-chip" ?disabled=${!t.admin} @click=${()=>b((e.rotation??0)-15)}>↺ 15°</button>`,p`<button class="nf-chip" ?disabled=${!t.admin} @click=${()=>b((e.rotation??0)+15)}>↻ 15°</button>`)}`:p`${A(t,i("solar_u"),e.u,x=>o({u:ne(x)}),.05)} ${A(t,i(a?.wall?"solar_v_wall":"solar_v"),e.v,x=>o({v:ne(x)}),.05)}`}
        ${a?.wall?A(t,i("solar_tilt_wall"),e.tilt??0,x=>o({tilt:m(0,90,Math.round)(x)}),5,0):g}
        ${a?.flat?A(t,i("solar_tilt"),e.tilt??15,x=>o({tilt:m(0,45,Math.round)(x)}),1,0):g}
        ${a?.wall||a?.flat?re(t,i(y),!!e.flip,x=>o({flip:x})):g}
      </div>
      <p class="nf-sub">
        ${i("solar_summary",{n:d.modules,kwp:I(t.hass,d.kwp,1)})}${d.modules<u?p` · <b>${i("solar_partial",{n:d.modules,total:u})}</b>`:g}
      </p>
      <h4 class="nf-lib-head">🔗 ${i("solar_string")}</h4>
      <div class="nf-form">${ku(r,e)}</div>
      ${z(i("solar_string_hint"))} ${z(i("solar_form_hint"))}
      ${t.admin?X(p`<button class="nf-btn" ?disabled=${!a} @click=${()=>a&&o({...vt(a,e.id),portrait:e.portrait})}>${i("solar_fit")}</button>`,p`<button class="nf-btn nf-danger" @click=${()=>n.removeField()}>${i("delete")}</button>`):g}
    </section>`}var ll=r=>Math.round(r*1e3)/1e3,nr=class{ctx;sectionSel=null;windowSel=null;fieldSel=null;pickMode=!1;constructor(e){this.ctx=e}get sectionId(){return this.sectionSel}set sectionId(e){this.sectionSel=e,this.ctx.refresh()}get windowId(){return this.windowSel}set windowId(e){this.windowSel=e,this.ctx.refresh()}get solarId(){return this.fieldSel}set solarId(e){this.fieldSel=e,this.ctx.refresh()}get picking(){return this.pickMode}set picking(e){this.pickMode=e,this.ctx.refresh()}get doc(){return this.ctx.host.doc}get settings(){return this.doc.settings.roof}get admin(){return this.ctx.host.admin}get section(){return this.sectionSel?this.settings.sections?.find(e=>e.id===this.sectionSel):void 0}get window(){return this.windowSel?this.settings.windows?.find(e=>e.id===this.windowSel):void 0}get field(){return this.fieldSel?this.settings.solar?.find(e=>e.id===this.fieldSel):void 0}isFixed(e){return!!e&&(!!e.locked||!!this.doc.settings.lock_plan)}useSections(e=!1){if(!this.admin)return;let t=(this.settings.sections??[]).length>0;e&&t&&!this.ctx.confirm(this.ctx.host.t("roof_regen_confirm"))||(this.ctx.host.change(n=>{n.settings.roof.type="custom",(e||!t)&&(n.settings.roof.sections=pi(n,()=>D("roof")))}),this.sectionId=null)}addSection(e,t){if(!this.admin)return;let n=Ga(this.doc,e,t);this.ctx.host.change(i=>{i.settings.roof.type="custom",i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this.sectionId=n.id}takeOutline(){let e=this.ctx.host.floor;if(!e||!this.sectionSel||!this.admin)return;let{wall_exterior:t,wall_interior:n}=this.doc.settings,i=oi(e.rooms,e.walls??[],t,n);if(!i)return;let o=i.map(([s,a])=>[ll(s),ll(a)]);this.patchSection({shape:"flat",points:o,...Qt(o)})}addDormer(e){let t=this.section;if(!t||!this.admin)return;let n=ai(t,e,D("roof"));this.ctx.host.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this.sectionId=n.id}patchSection(e){let t=this.sectionSel;!t||!this.admin||this.ctx.host.change(n=>{let i=n.settings.roof.sections?.find(o=>o.id===t);i&&Object.assign(i,e)})}removeSection(){let e=this.sectionSel;!e||!this.admin||(this.ctx.host.change(t=>t.settings.roof.sections=(t.settings.roof.sections??[]).filter(n=>n.id!==e)),this.sectionId=null)}duplicateSection(){let e=this.section;if(!e||!this.admin)return;let t=Ua(e);this.ctx.host.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],t]),this.sectionId=t.id}addWindow(){if(!this.admin)return;let e=this.doc.settings.north??0,t=hn(N(this.doc).filter(i=>!i.flat),e)??N(this.doc)[0];if(!t)return;let n=dn(t,D("rwin"));this.ctx.host.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this.windowSel=n.id,this.sectionId=null}patchWindow(e){let t=this.windowSel;!t||!this.admin||this.ctx.host.change(n=>{let i=n.settings.roof.windows?.find(s=>s.id===t);if(!i)return;Object.assign(i,e);let o=N(n).find(s=>s.key===i.face);o&&Object.assign(i,Be(o,qe(i)))})}removeWindow(){let e=this.windowSel;!e||!this.admin||(this.ctx.host.change(t=>t.settings.roof.windows=(t.settings.roof.windows??[]).filter(n=>n.id!==e)),this.windowId=null)}addField(){if(!this.admin)return;let e=N(this.doc),t=new Set((this.settings.solar??[]).map(o=>o.face)),n=this.doc.settings.north??0,i=hn(e.filter(o=>!t.has(o.key)),n)??hn(e,n);i&&(this.appendField(vt(i,D("pv"))),this.sectionSel=null)}addWallField(){let e=this.ctx.floorId()??this.doc.floors[0]?.id,t=this.admin&&e?_i(this.doc,D("pv"),e):null;t&&this.appendField(t)}addGroundField(){this.admin&&this.appendField(ln(this.doc,D("pv")))}appendField(e){this.ctx.host.change(t=>t.settings.roof.solar=[...t.settings.roof.solar??[],e]),this.solarId=e.id}selectField(e){this.fieldSel=e,this.sectionSel=null;let t=this.settings.solar?.find(n=>n.id===e);t?.face.startsWith("wall:")&&this.ctx.setFloorId(t.face.split(":")[1]),this.ctx.refresh()}patchField(e){this.editField((t,n)=>{Object.assign(t,e);let i=ae(n,t);i&&Object.assign(t,Be(i,t))})}toggleCell(e){this.editField(t=>t.skip=el(t.skip,e))}editField(e){let t=this.fieldSel;!t||!this.admin||this.ctx.host.change(n=>{let i=n.settings.roof.solar?.find(o=>o.id===t);i&&e(i,n)})}setString(e){let t=this.fieldSel;!t||!this.admin||this.ctx.host.change(n=>Ja(n.settings.roof,t,e,{id:D("str"),name:i=>this.ctx.host.t("solar_string_n",{n:i})}))}patchString(e){let t=this.field?.string;!t||!this.admin||this.ctx.host.change(n=>{let i=n.settings.roof.strings?.find(o=>o.id===t);i&&Object.assign(i,e)})}removeField(){let e=this.fieldSel;!e||!this.admin||(this.ctx.host.change(t=>{t.settings.roof.solar=(t.settings.roof.solar??[]).filter(n=>n.id!==e),Di(t.settings.roof)}),this.solarId=null)}floorsTopDown(){return[...this.doc.floors].sort((e,t)=>t.elevation-e.elevation)}};var cl=(r,e)=>r.floors.flatMap(t=>t.furniture).find(t=>t.type===e),$u=r=>!r||r==="none";async function dl(r){let e;try{e=await r.hass.callWS({type:"energy/get_prefs"})}catch{return{kind:"failed"}}let t=ga(r.hass,e),n=0,i=(o,s,a)=>{if(!a)return;let l=cl(r.doc(),o);!l&&r.canAdd()&&(r.addDevice(o),l=cl(r.doc(),o)),!(!l||!$u(l[s]))&&(r.setField(l.id,s,a),n++)};return i("meter","power",t.grid),i("inverter","power",t.solar),i("home_battery","power",t.battery),i("home_battery","soc",t.battery_soc),{kind:"done",filled:n}}var Su=/garage|carport/,Mu=/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/,Fu=/flur|diele|eingang|hall|entr|lobby/,ul=.25,Rt=r=>Math.round(r*1e3)/1e3;function Eu(r,e,t){let n=e.rooms.filter(d=>d.points.length>=3),i=d=>n.find(u=>d.test(t.roomLabel(u).toLowerCase())),o=n.find(d=>e.furniture.some(u=>u.type==="parking"&&O([u.x,u.z],d.points))),s=i(Su)??o,a=i(Mu),l=r==="wallbox"?s:r==="meter"?a??i(Fu)??s:a??s,c=[...n].sort((d,u)=>Math.abs(se(u.points))-Math.abs(se(d.points)))[0];return l??t.selected??c}function Ru(r,e){let[t,n]=ue(r.points),i=r.points.some((s,a)=>!e.has(a)),o=null;return r.points.forEach((s,a)=>{if(i&&e.has(a))return;let l=r.points[(a+1)%r.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1]);if(o&&c<=o.length)return;let d=[(s[0]+l[0])/2,(s[1]+l[1])/2],u=[-(l[1]-s[1])/c+0,(l[0]-s[0])/c+0];(t-d[0])*u[0]+(n-d[1])*u[1]<0&&(u=[0-u[0],0-u[1]]),o={mid:d,inward:u,length:c}}),o}function hl(r,e,t,n){let[i,o,s]=Ke(r),a={id:D("furniture"),type:r,rotation:0,w:i,d:o,h:s,variant:null};if(r==="grid_point"){let _=va(e),[f,m]=_?[_.x,_.z]:n.fallback;return{...a,x:Rt(f),z:Rt(m)}}let l=Eu(r,t,n),[c,d]=l?ue(l.points):n.fallback;if(l){let _=new Set(t.openings.filter(m=>m.room_id===l.id).map(m=>m.edge)),f=Ru(l,_);f&&([c,d]=[f.mid[0]+f.inward[0]*(o/2+ul),f.mid[1]+f.inward[1]*(o/2+ul)])}let u={...a,x:Rt(c),z:Rt(d)},h=l?Ut({...t,furniture:[...t.furniture,u]},u,e.settings.wall_interior):null;return h?{...u,x:Rt(h.x),z:Rt(h.z),rotation:h.rotation}:u}var rr=class{limit;undoStack=[];redoStack=[];constructor(e=100){this.limit=e}get canUndo(){return this.undoStack.length>0}get canRedo(){return this.redoStack.length>0}record(e){this.undoStack.push(JSON.stringify(e)),this.undoStack.length>this.limit&&this.undoStack.shift(),this.redoStack=[]}undo(e){let t=this.undoStack.pop();return t===void 0?null:(this.redoStack.push(JSON.stringify(e)),JSON.parse(t))}redo(e){let t=this.redoStack.pop();return t===void 0?null:(this.undoStack.push(JSON.stringify(e)),JSON.parse(t))}};var q=r=>Math.round(r*1e3)/1e3,Au=(r,e)=>((r+e)%360+360)%360;function pl(r,e){return{id:D("wall"),a:[q(r[0]),q(r[1])],b:[q(e[0]),q(e[1])],thickness:null}}function fl(r,e){return{id:D("hole"),type:"stairwell",x:q((r[0]+e[0])/2),z:q((r[1]+e[1])/2),w:q(e[0]-r[0]),d:q(e[1]-r[1]),h:.02,rotation:0,variant:null}}var ml=r=>({id:D("outdoor"),type:"lawn",points:r.map(([e,t])=>[q(e),q(t)])}),gl=r=>({...r,id:D("outdoor"),points:r.points.map(([e,t])=>[q(e+.5),q(t+.5)])});function _l(r,e,t,n){let[i,o,s]=Ke(r),a=e.floors.filter(c=>c.elevation>t.elevation).sort((c,d)=>c.elevation-d.elevation)[0],l=r==="stairs"?q(a?a.elevation-t.elevation:t.height+.25):s;return{id:D("furniture"),type:r,x:q(n[0]),z:q(n[1]),rotation:0,w:i,d:o,h:l,variant:null}}var bl=r=>({...structuredClone(r),id:D("furniture"),x:q(r.x+.3),z:q(r.z+.3)}),vl=(r,e)=>Au(r,e);function yl(r){let[e,t,n]=Ke("parking");return{id:D("furniture"),type:"parking",x:r.x,z:r.z,rotation:r.rotation,w:Math.max(e,q(r.w+.5)),d:Math.max(t,q(r.d+.4)),h:n,variant:null,vehicle:r.type,...r.name?{name:r.name}:{}}}function wl(r,e){let[t,n,i]=Ke(e);return{id:D("furniture"),type:e,x:r.x,z:r.z,rotation:r.rotation??0,w:t,d:n,h:i,variant:null,entity:r.entity_id,name:r.name??null,...r.locked?{locked:!0}:{}}}var xl=(r,e)=>({entity_id:e,x:r.x,z:r.z,y:null,rotation:r.rotation,...r.name?{name:r.name}:{}});function kl(r,e){for(let t of r.floors)t.placements=t.placements.filter(n=>n.entity_id!==e),t.furniture=t.furniture.filter(n=>!(le(n.type)&&n.entity===e))}function $l(r,e,t,n){let i=new Set(n);for(let s of r.floors)s.placements=s.placements.filter(a=>!i.has(a.entity_id)),s.furniture=s.furniture.filter(a=>!(le(a.type)&&a.entity&&i.has(a.entity)));let o=[...e.placements.map(s=>[s.x,s.z]),...e.furniture.filter(s=>le(s.type)).map(s=>[s.x,s.z])];for(let s of ls(t,n,o)){if(!s.entity_id.startsWith("light.")){e.placements.push(s);continue}let[a,l,c]=Le.lamp_ceiling;e.furniture.push({id:D("furniture"),type:"lamp_ceiling",x:s.x,z:s.z,rotation:0,w:a,d:l,h:c,variant:null,entity:s.entity_id,power:null})}}function Sl(r){let[e,t]=ue(r.points);return[q(e),q(t)]}function Ml(r,e,t,n){let i=Math.min(t,r)/2,o=n>0?Math.round(e/n)*n:e;return q(Math.min(r-i,Math.max(i,o)))}function Fl(r,e){let t=pt[e],n=Mn(r)===e?{}:{width:t.width};return{type:t.type,leaves:t.leaves,sill:t.sill,height:t.height,style:t.style??null,...n}}var Hi=r=>Math.round(r*1e3)/1e3,At="unmovable",Li="no change";function El(r,e,t,n){let i=o=>[Hi(o[0]+t),Hi(o[1]+n)];switch(e.kind){case"device":return r.placements.some(o=>o.entity_id===e.id)?{apply(o){let s=o.placements.find(a=>a.entity_id===e.id);s&&([s.x,s.z]=i([s.x,s.z]))}}:At;case"furniture":return{apply(o){let s=o.furniture.find(a=>a.id===e.id);s&&([s.x,s.z]=i([s.x,s.z]))}};case"wall":return{apply(o){let s=(o.walls??[]).find(a=>a.id===e.id);s&&([s.a,s.b]=[i(s.a),i(s.b)])}};case"outdoor":return{apply(o){let s=o.outdoor.find(a=>a.id===e.id);s&&(s.points=s.points.map(i))}};case"opening":{let o=r.openings.find(_=>_.id===e.id),s=o?je(o,r.rooms,r.walls??[]):null;if(!o||!s)return At;let a=s.room.points[s.edge],l=s.room.points[(s.edge+1)%s.room.points.length],c=Math.hypot(l[0]-a[0],l[1]-a[1])||1,d=(t*(l[0]-a[0])+n*(l[1]-a[1]))/c;if(Math.abs(d)<1e-9)return Li;let u=Math.min(o.width,c)/2,h=Hi(Math.min(c-u,Math.max(u,o.offset+d)));return{apply(_){let f=_.openings.find(m=>m.id===e.id);f&&(f.offset=h)}}}case"room":{let o=r.rooms.find(a=>a.id===e.id);if(!o)return At;let s=new Set(r.placements.filter(a=>O([a.x,a.z],o.points)).map(a=>a.entity_id));return{apply(a){let l=a.rooms.find(c=>c.id===e.id);if(l){if(e.corner!==null&&e.corner<l.points.length){l.points[e.corner]=i(l.points[e.corner]);return}l.points=l.points.map(i);for(let c of a.placements)s.has(c.entity_id)&&([c.x,c.z]=i([c.x,c.z]))}}}}}}var zt=r=>Math.round(r*1e3)/1e3,Ci=r=>r.map(([e,t])=>[zt(e),zt(t)]);function Rl(r,e){return{id:D("room"),name:e,area_id:null,points:Ci(r),floor_material:"wood"}}function Al(r){return{...structuredClone(r),id:D("room"),points:Ci(r.points.map(([e,t])=>[e+.5,t+.5]))}}function zl(r,e){let t=r.rooms.find(n=>n.id===e);r.rooms=r.rooms.filter(n=>n.id!==e),r.openings=r.openings.filter(n=>n.room_id!==e||n.wall),t&&(r.placements=r.placements.filter(n=>!O([n.x,n.z],t.points)))}function Pl(r,e,t){let n=r.rooms.find(s=>s.id===e);if(!n||n.points.length<=3)return!1;let i=(t-1+n.points.length)%n.points.length;n.points.splice(t,1),n.wall_heights?.splice(t,1),n.wall_thickness?.splice(t,1);let o=s=>s.room_id===e&&!s.wall;return r.openings=r.openings.filter(s=>!(o(s)&&(s.edge===t||s.edge===i))).map(s=>o(s)&&s.edge>t?{...s,edge:s.edge-1}:s),!0}function Tl(r,e,t){if(!Number.isFinite(t))return null;let n=te(r.points),{x0:i,z0:o,x1:s,z1:a}=n;return e==="x"?[i,s]=[t,t+(s-i)]:e==="z"?[o,a]=[t,t+(a-o)]:t>.05&&(e==="w"?s=i+t:a=o+t),Ci([[i,o],[s,o],[s,a],[i,a]])}function Ol(r,e,t,n){return!Number.isFinite(n)||e<0||e>=r.points.length?null:r.points.map((i,o)=>o===e?t===0?[zt(n),i[1]]:[i[0],zt(n)]:[i[0],i[1]])}var zu=/^(Raum|Room) \d+$/;function Dl(r,e,t){let n=e?t[e]:void 0,i=!r.name||zu.test(r.name)||Object.values(t).some(o=>o.name===r.name);return{area_id:e||null,...n&&i?{name:n.name}:{}}}function Il(r,e){let t=e.filter(l=>V(l.entity_id)==="light"&&(l.mount??"ceiling")==="ceiling"&&O([l.x,l.z],r.points));if(t.length<2)return[];let n=te(r.points),[i,o]=[n.x1-n.x0,n.z1-n.z0],s=Math.max(1,Math.round(Math.sqrt(t.length*i/Math.max(.1,o)))),a=Math.ceil(t.length/s);return t.map((l,c)=>{let d=Math.floor(c/s),u=d===a-1?t.length-s*(a-1):s,h=c-d*s;return{entityId:l.entity_id,x:zt(n.x0+i/u*(h+.5)),z:zt(n.z0+o/a*(d+.5))}})}var ir=r=>Math.round(r*1e3)/1e3,Bi=r=>(r+90)%360;function Hl(r,e,t){let n=i=>[i.x,i.z]=e([i.x,i.z]);for(let i of r.rooms)i.points=i.points.map(e);for(let i of r.furniture)n(i),t&&(i.rotation=Bi(i.rotation));for(let i of r.placements)n(i),t&&(i.rotation=Bi(i.rotation??0));for(let i of r.outdoor)i.points=i.points.map(e);for(let i of r.walls??[])[i.a,i.b]=[e(i.a),e(i.b)];r.background&&(n(r.background),t&&(r.background.rotation=Bi(r.background.rotation??0)))}function Pu(r,e){for(let n of r.settings.roof.sections??[]){let i=[e([n.x0,n.z0]),e([n.x1,n.z0]),e([n.x1,n.z1]),e([n.x0,n.z1])],[o,s]=[i.map(a=>a[0]),i.map(a=>a[1])];[n.x0,n.x1,n.z0,n.z1]=[Math.min(...o),Math.max(...o),Math.min(...s),Math.max(...s)],n.points&&(n.points=n.points.map(e))}let t=r.energy.meter;t&&([t.x,t.z]=e([t.x,t.z]))}function Ll(r,e,t,n){if(e.allFloors){for(let i of r.floors)Hl(i,t,n);Pu(r,t)}else{let i=r.floors.find(o=>o.id===e.floorId);i&&Hl(i,t,n)}}function Cl(r,e,t,n){Ll(r,e,([i,o])=>[ir(i+t),ir(o+n)],!1)}function Tu(r,e){let n=(e.allFloors?r.floors:r.floors.filter(s=>s.id===e.floorId)).flatMap(s=>s.rooms.flatMap(a=>a.points));if(n.length===0)return null;let[i,o]=[n.map(s=>s[0]),n.map(s=>s[1])];return[(Math.min(...i)+Math.max(...i))/2,(Math.min(...o)+Math.max(...o))/2]}function Bl(r,e){let t=Tu(r,e);if(!t)return!1;let[n,i]=t;return Ll(r,e,([o,s])=>[ir(n-(s-i)),ir(i+(o-n))],!0),!0}var or=class{onChange;ids={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};cornerSel=null;edgeSel=null;constructor(e){this.onChange=e}set(e,t){this.ids[e]=t,this.onChange()}get room(){return this.ids.room}set room(e){this.set("room",e)}get opening(){return this.ids.opening}set opening(e){this.set("opening",e)}get furniture(){return this.ids.furniture}set furniture(e){this.set("furniture",e)}get device(){return this.ids.device}set device(e){this.set("device",e)}get outdoor(){return this.ids.outdoor}set outdoor(e){this.set("outdoor",e)}get wall(){return this.ids.wall}set wall(e){this.set("wall",e)}get corner(){return this.cornerSel}set corner(e){this.cornerSel=e,this.onChange()}get edge(){return this.edgeSel}set edge(e){this.edgeSel=e,this.onChange()}select(e,t,n){let i=this.ids.room,o={room:null,opening:null,furniture:null,device:null,outdoor:null,wall:null};o[e]=t,e==="room"?o.room=t:e!=="outdoor"&&e!=="wall"&&(o.room=i),e==="device"&&t&&(o.room=n.roomOfDevice(t)??o.room),e==="opening"&&t&&(o.room=n.roomOfOpening(t)??o.room),(e!=="room"||t!==i)&&(this.cornerSel=null),this.edgeSel=null,this.ids=o,this.onChange()}get target(){for(let e of["device","opening","furniture","wall","outdoor","room"]){let t=this.ids[e];if(t)return{kind:e,id:t}}return null}};var sr=class{onChange;menuOpen=!1;packagesOpen=!1;draft=null;shiftXMetres=0;shiftZMetres=0;wholeHouse=!1;line=null;constructor(e){this.onChange=e}get floorMenu(){return this.menuOpen}set floorMenu(e){this.menuOpen=e,this.onChange()}get packages(){return this.packagesOpen}set packages(e){this.packagesOpen=e,this.onChange()}get spots(){return this.draft}set spots(e){this.draft=e,this.onChange()}get shiftX(){return this.shiftXMetres}set shiftX(e){this.shiftXMetres=e,this.onChange()}get shiftZ(){return this.shiftZMetres}set shiftZ(e){this.shiftZMetres=e,this.onChange()}get shiftAll(){return this.wholeHouse}set shiftAll(e){this.wholeHouse=e,this.onChange()}get notice(){return this.line}set notice(e){this.line=e,this.onChange()}};function Wl(r,e,t){let n=r.floors.length,i=e?.name??(n===0?t.first:t.next(n));return{...Bo(D("floor"),i,Wo(r.floors,e?.level)),ha_floor:e?.floor_id??null}}function Vl(r,e){let t=r.findIndex(i=>i.elevation>e.elevation),n=t<0?r.length:t;return[...r.slice(0,n),e,...r.slice(n)]}function Nl(r,e,t){let n=r.findIndex(s=>s.id===e),i=n+t;if(n<0||i<0||i>=r.length)return[...r];let o=[...r];return[o[n],o[i]]=[o[i],o[n]],o}function Kl(r,e){let t=new Set(r.floors.map(n=>n.ha_floor));return Object.values(e??{}).filter(n=>!t.has(n.floor_id)).sort((n,i)=>(n.level??99)-(i.level??99)||n.name.localeCompare(i.name))}function ar(r,e,t){if(!e.ha_floor)return[];let n=new Set(r.floors.flatMap(i=>i.rooms.map(o=>o.area_id)));return Object.values(t??{}).filter(i=>i.floor_id===e.ha_floor&&!n.has(i.area_id)).sort((i,o)=>i.name.localeCompare(o.name))}function Gl(r,e,t){return Object.values(t??{}).filter(n=>n.floor_id===e.ha_floor||!r.floors.some(i=>i.ha_floor===n.floor_id))}function Ou(r,e,t,n){let i=Kl(r.doc,r.hass?.floors),o=()=>i.length>0?e.floorMenu=!e.floorMenu:t.addFloor(null);return p`<div class="nf-floor-list">
      ${[...r.doc.floors].reverse().map(s=>p`<button class="nf-chip" aria-pressed=${s.id===n} @click=${()=>t.openFloor(s.id)}>${s.name}</button>`)}
      ${r.admin?p`<button class="nf-btn" aria-expanded=${e.floorMenu} @click=${o}>+ ${r.t("add_floor")}</button>`:g}
    </div>
    ${r.admin&&e.floorMenu?p`<div class="nf-floor-menu">
          ${z(r.t("floor_from_ha"))}
          ${i.map(s=>p`<button class="nf-btn" @click=${()=>t.addFloor(s)}>${s.name}${s.level!=null?p` <span class="nf-sub">· ${r.t("level",{n:s.level})}</span>`:g}</button>`)}
          <button class="nf-btn" @click=${()=>t.addFloor(null)}>${r.t("floor_empty")}</button>
        </div>`:g}`}function Du(r,e,t,n){let i=(o,s,a)=>p`<input type="number" step="0.05" .value=${String(s)} aria-label=${o} @change=${l=>a(Number(l.target.value)||0)} />`;return p`<div class="nf-field nf-wide nf-shift" title=${r.t("floor_shift_hint")}>
    <span>${r.t("floor_shift")}</span>
    ${i("X",e.shiftX,o=>e.shiftX=o)} ${i("Z",e.shiftZ,o=>e.shiftZ=o)}
    <button class="nf-btn" ?disabled=${!e.shiftX&&!e.shiftZ} @click=${()=>t.shift()}>${r.t("floor_shift_apply")}</button>
    <button class="nf-btn" title=${r.t("floor_turn_hint")} @click=${()=>t.turn()}>${r.t("floor_turn")}</button>
    <button class="nf-btn" title=${r.t("floor_start_view_hint")} @click=${()=>t.rememberView()}>${r.t("floor_start_view")}</button>
    ${n.start_view?p`<button class="nf-btn" title=${r.t("floor_start_view_reset")} @click=${()=>r.change((o,s)=>s.start_view=null)}>↺</button>`:g}
    <label class="nf-check nf-wide" title=${r.t("floor_shift_all_hint")}
      ><input type="checkbox" .checked=${e.shiftAll} @change=${o=>e.shiftAll=o.target.checked} />
      ${r.t("floor_shift_all")}</label
    >
  </div>`}function Iu(r,e,t,n){let i=r.t,o=c=>r.change((d,u)=>Object.assign(u,c)),s=Gl(r.doc,n,r.hass?.floors),a=ar(r.doc,n,r.hass?.areas),l=[["",i("no_ha_floor")],...s.map(c=>[c.floor_id,c.name])];return p`<div class="nf-form">
    ${oe(r,i("floor_name"),n.name,c=>o({name:c}),{wide:!0})}
    ${A(r,i("elevation"),n.elevation,c=>o({elevation:c}))}
    ${r.admin?Du(r,e,t,n):g}
    ${A(r,i("height"),n.height,c=>o({height:Math.max(1,c)}),.05,1)}
    ${Object.keys(r.hass?.floors??{}).length>0?j(r,i("ha_floor"),n.ha_floor??"",l,c=>o({ha_floor:c||null}),{wide:!0}):g}
    ${r.admin&&a.length>0?p`<div class="nf-actions nf-wide"><button class="nf-btn nf-primary" title=${i("area_rooms_hint")} @click=${()=>t.addAreaRooms(n)}>${i("area_rooms",{n:a.length})}</button></div>`:g}
    ${r.admin?p`<div class="nf-actions nf-wide">
            <button class="nf-btn" @click=${()=>t.moveFloor(1)}>${i("move_up")}</button>
            <button class="nf-btn" @click=${()=>t.moveFloor(-1)}>${i("move_down")}</button>
            <button class="nf-btn nf-danger" @click=${()=>t.deleteFloor()}>${i("delete_floor")}</button>
          </div>
          <div class="nf-actions nf-wide"><button class="nf-btn" title=${i("gaps_hint")} ?disabled=${n.rooms.length<2} @click=${()=>t.closeGaps()}>${i("gaps_close")}</button></div>
          ${e.notice?p`<p class="nf-sub nf-wide nf-notice">${e.notice}</p>`:g}`:g}
  </div>`}function Ul(r,e,t,n,i){return p`<section>
    <h3>${r.t("floors")}</h3>
    ${Ou(r,e,t,i)} ${n?Iu(r,e,t,n):g}
  </section>`}var jl=["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"];function Zl(r,e){let t=te(r.points);return{type:"lamp_downlight",rows:Math.max(1,Math.round((t.z1-t.z0)/1.2)),cols:Math.max(1,Math.round((t.x1-t.x0)/1.2)),entity:e[0]??null}}function lr(r,e){let[t,n,i]=Le[e.type];return Go(r,e.rows,e.cols).map(([o,s])=>({id:D("furniture"),type:e.type,x:o,z:s,rotation:0,w:t,d:n,h:i,variant:null,entity:e.entity??"none",power:null}))}var Wi=r=>Math.max(1,Math.min(12,Math.round(r)));function ql(r,e,t){return e.rooms.length===0?g:p`<section>
    <h3>${r.t("rooms")}</h3>
    <div class="nf-room-list">
      ${e.rooms.map(n=>p`<button class="nf-row" @click=${()=>t.select(n.id)}>
          <span>${n.name}</span><span class="nf-muted">${r.t("area_m2",{a:I(r.hass,_e(n.points),1)})}</span>
        </button>`)}
    </div>
  </section>`}function Hu(r,e,t,n){let i=e.spots,o=c=>e.spots={...i,...c},s=lr(t,i).length,a=K(r.hass,c=>/^(light|switch|input_boolean)\./.test(c)),l=jl.map(c=>[c,r.t(`furn_${c}`)]);return p`<div class="nf-form nf-spot-form">
    ${j(r,r.t("spots_type"),i.type,l,c=>o({type:c}),{wide:!0})}
    ${A(r,r.t("spots_cols"),i.cols,c=>o({cols:Wi(c)}),1,1)}
    ${A(r,r.t("spots_rows"),i.rows,c=>o({rows:Wi(c)}),1,1)}
    ${C(r,r.t("furn_entity_light"),i.entity,void 0,a,c=>o({entity:c==="none"?null:c}))}
    <div class="nf-actions nf-wide">
      <button class="nf-btn nf-primary" ?disabled=${s===0} @click=${()=>n.placeSpots()}>${r.t("spots_add",{n:s})}</button>
      <button class="nf-btn" @click=${()=>e.spots=null}>${r.t("cancel")}</button>
    </div>
    ${z(r.t("spots_hint"),"nf-wide")}
  </div>`}function Lu(r,e,t,n){return p`<details class="nf-points" ?open=${!t}>
    <summary>${r.t("points")} (${e.points.length})</summary>
    ${e.points.map((i,o)=>p`<div class="nf-point ${o===n.corner?"nf-point-sel":""}">
        <span class="nf-muted">${o+1}</span>
        ${A(r,r.t("x"),i[0],s=>n.setCorner(o,0,s))} ${A(r,r.t("z"),i[1],s=>n.setCorner(o,1,s))}
        ${r.admin?p`<button class="nf-btn" title=${r.t("delete_point")} ?disabled=${e.points.length<=3} @click=${()=>n.removeCorner(o)}>×</button>`:g}
      </div>`)}
  </details>`}function Vi(r,e,t,n){let i=r.t,o=Kt(t.points),s=te(t.points),a=Object.values(r.hass?.areas??{}).sort((u,h)=>u.name.localeCompare(h.name)),l=[["",i("no_area")],...a.map(u=>[u.area_id,u.name])],c=Lo.map(u=>[u,i(`mat_${u}`)]),d=u=>p`<button class="nf-btn" @click=${()=>n.applyPackage(u)}><b>${i(`pkg_${u}`)}</b><span>${i(`pkg_${u}_desc`)}</span></button>`;return p`<section>
    <div class="nf-h3row"><h3>${i("room")}</h3>${n.lockButton}</div>
    <div class="nf-form">
      ${oe(r,i("room_name"),t.name,u=>n.patch({name:u}),{wide:!0})}
      ${j(r,i("area"),t.area_id??"",l,u=>n.setArea(u),{wide:!0})}
      ${j(r,i("material"),t.floor_material,c,u=>n.patch({floor_material:u}),{wide:!0})}
      ${o?p`${A(r,i("x"),s.x0,u=>n.setRect("x",u))} ${A(r,i("z"),s.z0,u=>n.setRect("z",u))}
          ${A(r,i("width"),s.x1-s.x0,u=>n.setRect("w",u),.01,.05)}
          ${A(r,i("depth"),s.z1-s.z0,u=>n.setRect("d",u),.01,.05)}`:g}
    </div>
    <div class="nf-actions">
      <button class="nf-btn" title=${i("room_start_view_hint")} ?disabled=${!r.admin} @click=${()=>n.rememberView()}>${i("room_start_view")}</button>
      ${t.start_view?p`<button class="nf-btn" title=${i("room_start_view_reset")} ?disabled=${!r.admin} @click=${()=>n.patch({start_view:null})}>↺</button>`:g}
    </div>
    ${n.wallHeights} ${n.climate} ${Lu(r,t,o,n)}
    ${r.admin?p`<div class="nf-actions">
          <button class="nf-btn nf-primary" @click=${()=>e.packages=!e.packages}>${i("pkg_open")}</button>
          <button class="nf-btn" @click=${()=>n.openSpots()}>${i("spots_place")}</button>
          <button class="nf-btn" @click=${()=>n.duplicate()}>${i("duplicate")}</button>
          <button class="nf-btn nf-danger" @click=${()=>n.remove()}>${i("delete")}</button>
        </div>`:g}
    ${e.spots?Hu(r,e,t,n):g}
    ${e.packages?p`<div class="nf-packages">${Ks.map(d)}${z(i("pkg_hint"))}</div>`:g}
  </section>`}var Yl=Me`
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
`;var Cu=new URL(import.meta.url),Bu=new URL("./nextfloor-3d.js?v=0593a48cd3b0",Cu).href,Ql;function Xl(){return Ql??=import(Bu),Ql}function gn(r,e){if(!ut(e))return Ae(r,`furn_${e}`);let t=ee(e);return t?Ge(t,r?.language??navigator.language):Ae(r,"pack_missing_item")}var Jl=["weather","energy","car","sound","screens","cameras"],cr="https://github.com/therealMRBK/NextFloor";var Ni=class extends de{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(e,t){return Ae(this.hass,e,t)}render(){return p`<div class="nf-ext">
      <header class="nf-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="nf-sub">${this.t("ext_intro")}</p>
        <div class="nf-ext-actions">
          <a class="nf-btn" href="${cr}/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="nf-btn" href="${cr}/discussions" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="nf-btn" href="${cr}#readme" target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="nf-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="nf-ext-features">
          ${Jl.map(e=>p`<div class="nf-ext-feature nf-ext-on">
              <b>✓ ${this.t(`feature_name_${e}`)}</b>
              <span class="nf-sub">${this.t(`feature_text_${e}`)}</span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}renderPacks(){let e=this.packs??[];return p`<section class="nf-ext-card">
      <h3>${this.t("packs")}</h3>
      ${e.map(t=>p`<div class="nf-pack">
          <div>
            <b>${He(t,this.hass?.language??"de")}</b>
            <span class="nf-sub">${this.t("pack_by",{publisher:t.publisher,n:t.items.length})}</span>
            ${t.description?p`<span class="nf-sub">${t.description}</span>`:g}
          </div>
          ${t.builtin?p`<span class="nf-ext-state">${this.t("pack_builtin")}</span>`:this.isAdmin?p`<button class="nf-btn nf-danger" @click=${()=>this.deletePack(t)}>${this.t("pack_remove")}</button>`:g}
        </div>`)}
      ${this.isAdmin?p`<label class="nf-btn nf-primary nf-pack-import">
            ${this.t("pack_import")}
            <input type="file" accept=".nfpack,.json,application/json" multiple hidden @change=${t=>this.importPackFile(t)} />
          </label>`:g}
      ${this._packMsg?p`<p class="nf-sub ${this._packMsg.ok?"nf-notice":"nf-pack-error"}">${this._packMsg.text}</p>`:g}
      <p class="nf-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(e){let t=e.target,n=[...t.files??[]];if(t.value="",!n.length||!this.hass)return;let i=[],o=[];for(let a of n)try{let l=await fo(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},u=`pack_error_${c}`,h=this.t(u,{detail:d??String(l)});o.push(`${a.name}: ${h===u?this.t("pack_error_other",{detail:d??String(l)}):h}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(e){!this.hass||!confirm(this.t("pack_remove_confirm",{name:He(e,this.hass?.language??"de")}))||(await mo(this.hass,e.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[wt,Vn,Me`
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
    `]};customElements.get("nf-extensions")||customElements.define("nf-extensions",Ni);var ec=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","solarmove","solarturn","bgmove","bgscale","bgrotate"]),dr=10,E=r=>Math.round(r*1e3)/1e3,tc={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Vu=new Set(["parking","stairwell","rug","grid_point"]),Ki=class extends de{static properties={hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_energyNote:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;history=new rr(100);side=new sr(()=>this.requestUpdate());sel=new or(()=>this.requestUpdate());host=this.makeHost();backup=this.makeBackup();roof=this.makeRoof();bg=this.makeBackground();settingsActions={useRoofSections:()=>{this.roof.useSections(),this._tool="roof"}};drag=null;pointers=new Map;pinch=null;fitted=!1;resizeObserver;constructor(){super(),this.narrow=!1,this._floorId=null,this._deviceQuery="",this._devSource="area",this.roof.sectionId=null,this.roof.solarId=null,this.roof.picking=!1,this.roof.windowId=null,this._energyNote=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("nextfloor.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._openingPreset="door";let e=!1;try{e=localStorage.getItem("nextfloor.editor3d")==="1"}catch{}this._split=e,this._splitRatio=.55;try{let n=Number(localStorage.getItem("nextfloor.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._wall3d="cut",this._doc3d=this._doc,this._sideOpen=!1;let t=!0;try{t=localStorage.getItem("nextfloor.sidePinned")!=="0"}catch{}this._sidePinned=t,this._preview=null,this._measureLen=3,this._rectSize=[4,3],this._tool="select",this._draft=[],this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._canUndo=!1,this._canRedo=!1}t(e,t){return Ae(this.hass,e,t)}openingActions(){return{update:e=>this.updateOpening(e),setPreset:(e,t)=>this.setOpeningPreset(e,t),remove:()=>this.deleteOpening(),isExterior:e=>this.openingIsExterior(e),lockButton:this.fixButton("opening",this.sel.opening??"")}}makeBackground(){let e=this;return new tr({host:this.host,refresh:()=>e.requestUpdate(),api:{fetchImage:xn,storeImage:kn},readPicture:Wa,useSelectTool:()=>e._tool="select",currentTool:()=>e._tool})}makeRoof(){let e=this;return new nr({host:this.host,floorId:()=>e._floorId,setFloorId:t=>e._floorId=t,confirm:t=>confirm(t),refresh:()=>e.requestUpdate()})}canvasContext(){return{host:this.host,toScreen:e=>this.toScreen(e),scale:this._view.scale,floorId:this._floorId}}roofDeps(){return{host:this.host,roof:this.roof,floorId:this._floorId,setFloorId:e=>this._floorId=e,toggleLockPlan:()=>this.toggleLockPlan()}}makeBackup(){let e=this;return new Yn({get hass(){return e.hass},get doc(){return e._doc},t:(t,n)=>e.t(t,n),adopt:t=>{e.setDoc(t),e._floorId=t.floors[0]?.id??null,e.selectItem("room",null),e.fit()},say:t=>e.side.notice=t,refresh:()=>e.requestUpdate(),packsChanged:()=>e.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}))})}makeHost(){let e=this;return{get hass(){return e.hass},get doc(){return e._doc},get floor(){return e.floor},get admin(){return e.isAdmin},t:(t,n)=>e.t(t,n),change:t=>e.change(t),replace:t=>e.setDoc(t)}}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(e){e.has("packs")&&xo(this.packs??[]),e.has("hass")&&this.hass&&!vs(this.hass.language)&&ys(this.hass.language).then(()=>this.requestUpdate()),e.has("_doc")&&this._split&&this.queue3d(),e.has("_split")&&this._split&&(this._doc3d=this._doc),e.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),e.has("_tool")&&(this.houseTool||e.get("_tool")==="roof"||e.get("_tool")==="energy")&&(this.reframe3d=!0),e.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(t=>t.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this.sel.room)||(this.sel.room=null))}firstUpdated(){let e=this.renderRoot.querySelector(".nf-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:e.clientWidth,h:e.clientHeight},!this.fitted&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(e)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this._doc,150)}onSplitDown(e){let t=e.currentTarget.parentElement,n=e.currentTarget;n.setPointerCapture(e.pointerId);let i=t.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("nextfloor.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),e.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("nextfloor.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(e){let{id:t,x:n,z:i}=e.detail,o=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(h=>h.id===t);if(!l)continue;let[c,d]=ei(a,l.x,l.z,n,i);Object.assign(l,{x:c,z:d});let u=Ut(a,l,o);u&&Object.assign(l,u)}})}onDeviceMoved3d(e){let{id:t,x:n,z:i}=e.detail;this.change(o=>{for(let s of o.floors){let a=s.placements.find(d=>d.entity_id===t);if(!a)continue;let[l,c]=ei(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return g;let e=this.furnitureItem,t=this.device;if(e){let n=Tr(e),i=(o,s,a=.05)=>p`<label class="nf-3d-size" title=${this.t(`size_${o}`)}
        >${s}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min=${a}
          .value=${String(Math.round(e[o]*100)/100)}
          @change=${l=>{let c=parseFloat(l.target.value.replace(",","."));Number.isFinite(c)&&c>=a&&this.updateFurniture({[o]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return p`<div class="nf-3d-bar">
        <span>${gn(this.hass,e.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${n?p`<label class="nf-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type="number"
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${String(Math.round((e.mount_y??Fr(this.floor,e))*100)/100)}
                @change=${o=>{let s=parseFloat(o.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.updateFurniture({mount_y:Math.round(s*1e3)/1e3})}}
              />
            </label>`:g}
        <button class="nf-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="nf-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",e.id)}
        <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(t){let n=V(t.entity_id),i=n==="light",o=n?$n(n,this.floor?.height??2.5,i?t.mount??"ceiling":null):1;return p`<div class="nf-3d-bar">
        <span>${B(this.hass,t.entity_id)}</span>
        ${i?p`<select class="nf-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>p`<option value=${s} ?selected=${s===(t.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:g}
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
      </div>`}return g}grab3d=null;surfaceGrabber={start:e=>this.grab3dStart(e),move:e=>this.grab3dMove(e),end:()=>{let e=this.grab3d;this.grab3d=null,e?.moved&&this.pushHistory(e.base)}};grab3dStart(e){let t=this._doc,n=N(t),i=null,o=(a,l,c,d,u=!1)=>{if(!c||u)return;let h=Bn(c,e.o,e.d);!h||!yi(c,d,h.u,h.s)||i&&i.t<=h.t||(i={id:a,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let a of t.settings.roof.solar??[])o(a.id,!1,ae(t,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of t.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,qe(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:t,moved:!1},s.win?this.roof.windowId=s.id:this.roof.selectField(s.id),!0}grab3dMove(e){let t=this.grab3d;if(!t)return;let n=t.base,i=t.win?n.settings.roof.windows?.find(_=>_.id===t.id):void 0,o=t.win?i?qe(i):void 0:n.settings.roof.solar?.find(_=>_.id===t.id);if(!o)return;let s=ae(n,o),a=s?.unbounded?[s]:t.win?N(n):[...N(n),...we(n)],l=null;for(let _ of a){let f=Bn(_,e.o,e.d);f&&vi(_,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:_,...f})}if(!l)return;let c=l.face,d=.05,u=_=>E(Math.round(_/d)*d),h=Be(c,{...o,face:c.key,u:u(l.u-t.du),v:u(l.s-t.ds),tilt:c.flat?o.tilt??15:o.tilt});t.moved=!0,this.change(_=>{if(t.win){let m=_.settings.roof.windows?.find(b=>b.id===t.id);m&&Object.assign(m,{face:c.key,...h});return}let f=_.settings.roof.solar?.find(m=>m.id===t.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},t.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return p`<div class="nf-editor-3d">
      ${this.houseTool?g:p`<div class="nf-seg nf-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?Fe:this._tool==="roof"?[]:null}
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
    </div>`}updated(){for(let t of this.renderRoot.querySelectorAll("select option[selected]"))t.selected||(t.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("nf-view3d")?.resetView(),250));let e=this.floor?.background;if(e&&this.bg.ensureLoaded(e.image_id),this.furnitureItem?.pictures)for(let t of this.storedPictures())this.bg.ensureLoaded(t)}get floor(){return this._doc?.floors.find(e=>e.id===this._floorId)}get room(){return this.floor?.rooms.find(e=>e.id===this.sel.room)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(e,t=this._doc){t&&this.history.record(t),this._doc=e,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}change(e,t=this._doc,n=!0){let i=structuredClone(t),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(e(i,o),this.setDoc(i,n?t:null))}syncHistoryButtons(){this._canUndo=this.history.canUndo,this._canRedo=this.history.canRedo}undo(){let e=this.history.undo(this._doc);e&&this.restore(e)}redo(){let e=this.history.redo(this._doc);e&&this.restore(e)}restore(e){this._doc=e,e.floors.some(t=>t.id===this._floorId)||(this._floorId=e.floors[0]?.id??null),this.floor?.rooms.some(t=>t.id===this.sel.room)||(this.sel.room=null),this.sel.corner=null,this.syncHistoryButtons(),this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}toScreen(e){let{scale:t,ox:n,oy:i}=this._view;return[e[0]*t+n,e[1]*t+i]}toWorld(e,t){let{scale:n,ox:i,oy:o}=this._view;return[(e-i)/n,(t-o)/n]}localPoint(e){let t=this.renderRoot.querySelector("svg").getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}fit(){let e=this.floor?.rooms.flatMap(a=>a.points)??[],t=e.length?te(e):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=t.x1-t.x0+2*n,o=t.z1-t.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(t.x0+t.x1)/2*s,oy:this._size.h/2-(t.z0+t.z1)/2*s}}showPoint(e,t){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-e*n,oy:this._size.h/2-t*n}}zoomAt(e,t,n){let{scale:i,ox:o,oy:s}=this._view,a=Math.max(8,Math.min(600,i*e)),l=a/i;this._view={scale:a,ox:t-(t-o)*l,oy:n-(n-s)*l}}snap(e,t,n=!1){if(this._guides={},n)return e;let i=dr/this._view.scale,o=this.floor?.rooms??[],s=[];for(let f of o)f.points.forEach((m,b)=>{t&&f.id===t.roomId&&(t.index===void 0||t.index===b)||s.push(m)});let a=null,l=i;for(let f of s){let m=Math.hypot(f[0]-e[0],f[1]-e[1]);m<l&&(l=m,a=f)}if(a)return this._guides={point:a},[a[0],a[1]];for(let f of o)if(!(t&&f.id===t.roomId))for(let m=0;m<f.points.length;m++){let b=f.points[m],y=f.points[(m+1)%f.points.length],w=y[0]-b[0],v=y[1]-b[1],x=w*w+v*v;if(x<1e-9)continue;let k=((e[0]-b[0])*w+(e[1]-b[1])*v)/x;if(k<=0||k>=1)continue;let $=[b[0]+k*w,b[1]+k*v],S=Math.hypot($[0]-e[0],$[1]-e[1]),F=this._doc.settings.grid;Math.abs(v)<1e-9&&($[0]=Math.min(Math.max(Math.round($[0]/F)*F,Math.min(b[0],y[0])),Math.max(b[0],y[0]))),Math.abs(w)<1e-9&&($[1]=Math.min(Math.max(Math.round($[1]/F)*F,Math.min(b[1],y[1])),Math.max(b[1],y[1]))),S<l&&(l=S,a=$)}if(a)return this._guides={point:a},[E(a[0]),E(a[1])];let c=this._doc.settings.grid,d=[E(Math.round(e[0]/c)*c),E(Math.round(e[1]/c)*c)],u=i,h=i,_={};for(let f of s)Math.abs(f[0]-e[0])<u&&(u=Math.abs(f[0]-e[0]),d[0]=f[0],_.x=f[0]),Math.abs(f[1]-e[1])<h&&(h=Math.abs(f[1]-e[1]),d[1]=f[1],_.z=f[1]);return this._guides=_,d}onPointerDown(e){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(e),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(e)),clearTimeout(this.pressTimer),this.pressStart=null,e.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let t=this.localPoint(e),n=e.target;this.pressStart=t,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,t))},550)}}guardFixed(e){let t=this.drag;if(!t)return;let n=null;t.kind==="vertex"||t.kind==="room"?n=["room",t.roomId]:t.kind==="device"||t.kind==="aim"?n=["device",t.entityId]:t.kind==="opening"?n=["opening",t.id]:t.kind==="furniture"||t.kind==="rotate"||t.kind==="resize"?n=["furniture",t.id]:t.kind==="wallmove"?n=["wall",t.id]:t.kind==="outdoor"&&(n=["outdoor",t.id]),!(!n||!this.isFixedItem(...n))&&("moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base),this.drag={kind:"pan",last:e},this.fixedPan=!0)}pointerDown(e){e.currentTarget.setPointerCapture(e.pointerId);let n=this.localPoint(e);if(this.pointers.set(e.pointerId,n),this.pointers.size===2){this.drag&&ec.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(e.button===1||e.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=e.target;if(this.bg.level&&this.isAdmin&&this.floor?.background){this.bg.tapLevel(i);return}if(this.bg.handlesShown&&this.floor.background&&o.closest("[data-bg-rotate]")){let v=this.floor.background,x=this.bg.picture(v.image_id),k=$t(v,x?.aspect??1);this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-k[1],i[0]-k[0]),rot:v.rotation??0};return}if(this.bg.ruler&&this.bg.ruler.length<2&&this.isAdmin&&this.floor?.background){this.bg.tapRuler(i);return}if(this.bg.handlesShown&&this.floor.background&&!this.bg.edit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let v=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:v.x,bz:v.z,base:this._doc,moved:!1};return}if(this.bg.edit&&this.isAdmin&&this.floor?.background){let v=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:v.x,bz:v.z,base:this._doc,moved:!1};return}this.bg.edit=!1}if(this._tool==="wall"){let v=this.snap(i,void 0,e.altKey);this.drag={kind:"freewall",start:v,end:v};return}if(this._tool==="roof"||this._tool==="energy"){let v=o.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),x=o.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),k=o.closest("[data-roof]")?.getAttribute("data-roof"),$=this._tool==="energy"?o.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if($){this.roof.solarId=null,this.selectItem("furniture",$),this.drag=this.isAdmin?{kind:"furniture",id:$,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let S=this._tool==="energy"?o.closest("[data-solar]")?.getAttribute("data-solar"):null,F=this._tool==="energy"?o.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(F&&this.isAdmin){this.drag={kind:"solarturn",id:F,base:this._doc,moved:!1};return}if(S){let R=o.closest("[data-cell]")?.getAttribute("data-cell");if(this.roof.picking&&S===this.roof.solarId&&R&&this.isAdmin){this.roof.toggleCell(R),this.drag={kind:"pan",last:n};return}S!==this.roof.solarId&&(this.roof.picking=!1),this.roof.solarId=S,this.roof.sectionId=null;let H=this._doc.settings.roof.solar?.find(ke=>ke.id===S),G=H?ae(this._doc,H)??void 0:void 0,W=G?this.faceHit(G,i):null,Te=H&&W?{du:W.u-H.u,ds:Number.isNaN(W.s)?0:W.s-H.v}:null;this.drag=this.isAdmin&&!H?.locked?{kind:"solarmove",id:S,start:i,startScreen:n,base:this._doc,moved:!1,grab:Te}:{kind:"pan",last:n};return}let P=this._tool==="roof"?o.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(P){this.roof.windowId=P,this.roof.sectionId=null;let R=this._doc.settings.roof.windows?.find(Te=>Te.id===P),H=R?N(this._doc).find(Te=>Te.key===R.face):void 0,G=H?un(H,i):null,W=R&&G?{du:G.u-R.u,ds:G.s-R.v}:null;this.drag=this.isAdmin&&!R?.locked?{kind:"solarmove",id:P,start:i,startScreen:n,base:this._doc,moved:!1,grab:W,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this.roof.windowId=null);let T=this._tool==="energy"?o.closest(".nf-energy-item")?.getAttribute("data-furniture"):null;if(T){this.roof.solarId=null,this.selectItem("furniture",T),this.drag=this.isAdmin?{kind:"furniture",id:T,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this.roof.solarId=null,this.drag={kind:"pan",last:n};return}if(x&&this.isAdmin){let[R,H]=x.split(":");this.drag={kind:"roofvertex",id:R,index:Number(H),base:this._doc,moved:!1}}else if(v&&this.isAdmin){let[R,H,G]=v.split(":");this.drag={kind:"roofcorner",id:R,corner:[H==="1"?1:0,G==="1"?1:0],base:this._doc,moved:!1}}else if(k){let R=this.roof.isFixed(this._doc.settings.roof.sections?.find(H=>H.id===k));R&&this.roof.sectionId===k&&(this._fixedHint=!0),this.roof.sectionId=k,this.drag=this.isAdmin&&!R?{kind:"roofmove",id:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this.roof.sectionId=null;let R=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:R,end:R,roof:!0}}else this.drag={kind:"pan",last:n};return}if(this._tool==="rect"||this._tool==="outdoor"||this._tool==="hole"){let v=this.snap(i,void 0,e.altKey);this.drag={kind:"rect",start:v,end:v,outdoor:this._tool==="outdoor",hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let s=o.closest("[data-device]");if(s&&this.isAdmin){this.drag={kind:"device",entityId:s.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let a=o.closest("[data-opening]");if(a){let v=a.getAttribute("data-opening");this.selectItem("opening",v),this.drag=this.isAdmin?{kind:"opening",id:v,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let l=o.closest("[data-resize]");if(l&&this.isAdmin){let[v,x,k]=l.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:v,corner:[x==="1"?1:-1,k==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let d=o.closest("[data-aim]");if(d&&this.isAdmin){this.drag={kind:"aim",entityId:d.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=o.closest("[data-furniture]");if(u&&!o.closest("[data-vertex], [data-mid]")){let v=u.getAttribute("data-furniture");this.selectItem("furniture",v),this.drag=this.isAdmin?{kind:"furniture",id:v,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=o.closest("[data-vertex]"),_=o.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this.sel.corner=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this.sel.corner,base:this._doc,moved:!1};return}if(_&&this.room&&this.isAdmin){let v=Number(_.getAttribute("data-mid")),x=this.room.points,k=x[v],$=x[(v+1)%x.length],S=[E((k[0]+$[0])/2),E((k[1]+$[1])/2)],F=this._doc,P=this.room.id;this.change((T,R)=>{let H=R.rooms.find(W=>W.id===P);H.points.splice(v+1,0,S),H.wall_heights&&H.wall_heights.splice(v+1,0,H.wall_heights[v]??null),H.wall_thickness&&H.wall_thickness.splice(v+1,0,H.wall_thickness[v]??null);let G=Math.hypot(S[0]-k[0],S[1]-k[1]);for(let W of R.openings)W.room_id!==P||W.wall||(W.edge>v?W.edge+=1:W.edge===v&&W.offset>G&&(W.edge=v+1,W.offset=E(W.offset-G)))},F,!1),this.sel.corner=v+1,this.drag={kind:"vertex",roomId:P,index:v+1,base:F,moved:!0};return}let f=o.closest("[data-wall-end]");if(f&&this.isAdmin){let[v,x]=f.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:v,end:x,start:i,startScreen:n,base:this._doc,moved:!1};return}let m=o.closest("[data-free-wall]");if(m){let v=m.getAttribute("data-free-wall");this.selectItem("wall",v),this.drag=this.isAdmin?{kind:"wallmove",id:v,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let b=o.closest("[data-out-vertex]");if(b&&this.isAdmin){let[v,x]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:v,index:Number(x),base:this._doc,moved:!1};return}let y=o.closest("[data-outdoor]");if(y&&!o.closest("[data-room]")&&!this.roomAt(i)){let v=y.getAttribute("data-outdoor");this.selectItem("outdoor",v),this.drag=this.isAdmin?{kind:"outdoor",id:v,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let w=o.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(i);if(w){w!==this.sel.room&&(this.sel.corner=null),this.selectItem("room",w),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(e){if(this.pressStart){let o=this.localPoint(e);Math.hypot(o[0]-this.pressStart[0],o[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let t=this.localPoint(e);if(this.pointers.has(e.pointerId)&&this.pointers.set(e.pointerId,t),this.pinch){let o=this.pinchState();o&&(this.zoomAt(o.dist/Math.max(1,this.pinch.dist),...o.mid),this._view={...this._view,ox:this._view.ox+o.mid[0]-this.pinch.mid[0],oy:this._view.oy+o.mid[1]-this.pinch.mid[1]},this.pinch=o);return}let n=this.toWorld(...t),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,e.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]},i.last=t;break;case"tap":(i.panning||Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+t[0]-i.last[0],oy:this._view.oy+t[1]-i.last[1]}),i.last=t;break;case"rect":i.end=this.snap(n,void 0,e.altKey),this.requestUpdate();break;case"freewall":{let o=this.snap(n,void 0,e.altKey);e.shiftKey&&(o=Math.abs(o[0]-i.start[0])>Math.abs(o[1]-i.start[1])?[o[0],i.start[1]]:[i.start[0],o[1]]),i.end=o,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=(i.base.floors.find(a=>a.id===this._floorId)?.walls??[]).find(a=>a.id===i.id);if(!o)return;let s;if(i.end){let a=this.snap(n,void 0,e.altKey);s=i.end==="a"?{a,b:o.b}:{a:o.a,b:a}}else{let a=e.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-i.start[0])/a)*a,c=Math.round((n[1]-i.start[1])/a)*a;s={a:[E(o.a[0]+l),E(o.a[1]+c)],b:[E(o.b[0]+l),E(o.b[1]+c)]}}this.change((a,l)=>Object.assign((l.walls??[]).find(c=>c.id===i.id),s),i.base,!1);break}case"vertex":{let o=this.snap(n,{roomId:i.roomId,index:i.index},e.altKey);i.moved=!0,this.change((s,a)=>{a.rooms.find(l=>l.id===i.roomId).points[i.index]=o},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===i.roomId);if(!o)return;let s=this.roomDelta(o,[n[0]-i.start[0],n[1]-i.start[1]],e.altKey),a=i.base.floors.find(c=>c.id===this._floorId),l=new Set(a.placements.filter(c=>O([c.x,c.z],o.points)).map(c=>c.entity_id));this.change((c,d)=>{let u=d.rooms.find(h=>h.id===i.roomId);u.points=o.points.map(([h,_])=>[E(h+s[0]),E(_+s[1])]),d.placements=a.placements.map(h=>l.has(h.entity_id)?{...h,x:E(h.x+s[0]),z:E(h.z+s[1])}:h)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=e.altKey?.01:this._doc.settings.grid,s=E(Math.round((n[0]-i.start[0])/o)*o),a=E(Math.round((n[1]-i.start[1])/o)*o),l=i.base.settings.roof.sections?.find(c=>c.id===i.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(u=>u.id===i.id);d&&(Object.assign(d,{x0:E(l.x0+s),x1:E(l.x1+s),z0:E(l.z0+a),z1:E(l.z1+a)}),l.points&&(d.points=l.points.map(([u,h])=>[E(u+s),E(h+a)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let o=i.base.settings.roof.solar?.find(h=>h.id===i.id),s=o?ae(i.base,o):null;if(!o||!s)return;let[a,l]=on(s,o),c=Math.atan2(n[0]-a,-(n[1]-l))*180/Math.PI,d=e.altKey?1:15;c=Math.round(c/d)*d;let u=cn(i.base,o,c);this.change(h=>{let _=h.settings.roof.solar?.find(f=>f.id===i.id);_&&Object.assign(_,u)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.win?i.base.settings.roof.windows?.find(b=>b.id===i.id):void 0,s=i.win?o?qe(o):void 0:i.base.settings.roof.solar?.find(b=>b.id===i.id),a=i.win?N(i.base):[...N(i.base),...this._floorId?we(i.base,this._floorId):[]],l=s?ae(i.base,s,a):null;if(!s||!l)return;let c=e.altKey?.01:.05,d=b=>E(Math.round(b/c)*c),u=l.unbounded?null:bi(a,n),h=l,_,f;if(u&&i.grab)h=u.face,_=d(u.u-i.grab.du),f=Number.isNaN(u.s)?u.face.key===s.face?s.v:Math.max(0,u.face.ls-1.5):d(u.s-i.grab.ds);else{let b=n[0]-i.start[0],y=n[1]-i.start[1],w=[l.es[0],l.es[2]],v=w[0]*w[0]+w[1]*w[1]||1;_=d(s.u+b*l.eu[0]+y*l.eu[2]),f=d(s.v+(b*w[0]+y*w[1])/v)}let m=Be(h,{...s,face:h.key,u:_,v:f,tilt:h.flat?s.tilt??15:s.tilt});this.change(b=>{if(i.win){let w=b.settings.roof.windows?.find(v=>v.id===i.id);w&&Object.assign(w,{face:h.key,...m});return}let y=b.settings.roof.solar?.find(w=>w.id===i.id);y&&Object.assign(y,{face:h.key,...m},h.flat&&y.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey),s=i.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===i.id);if(!s)return;let a=Kt(s.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===i.id);if(!d)return;let u=s.points.map(f=>[...f]),h=i.index,_=s.points[h];u[h]=[E(o[0]),E(o[1])],a&&s.points.forEach((f,m)=>{m!==h&&(Math.abs(f[0]-_[0])<1e-6&&(u[m][0]=E(o[0])),Math.abs(f[1]-_[1])<1e-6&&(u[m][1]=E(o[1])))}),d.points=u},i.base,!1);break}case"bgmove":{i.moved=!0;let o=n[0]-i.start[0],s=n[1]-i.start[1];this.change((a,l)=>{l.background&&(l.background.x=E(i.bx+o),l.background.z=E(i.bz+s))},i.base,!1);break}case"bgrotate":{i.moved=!0;let o=this.floor?.background,s=o?this.bg.picture(o.image_id):void 0;if(!o||!s)break;let a=$t(o,s.aspect),l=Ba(i.rot,i.start,Math.atan2(n[1]-a[1],n[0]-a[0]),e.shiftKey);this.change((c,d)=>{d.background&&(d.background.rotation=l)},i.base,!1);break}case"bgscale":{i.moved=!0;let o=this.floor?.background,s=o?this.bg.picture(o.image_id):void 0;if(!o||!s)break;let[a]=Ca(o,s.aspect,n),l=Math.max(.5,E(a));this.change((c,d)=>{d.background&&(d.background.width=l)},i.base,!1);break}case"roofvertex":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);!a?.points||i.index>=a.points.length||(a.points[i.index]=[E(o[0]),E(o[1])],Object.assign(a,Qt(a.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let o=this.snap(n,void 0,e.altKey);this.change(s=>{let a=s.settings.roof.sections?.find(l=>l.id===i.id);a&&(i.corner[0]?a.x1=E(o[0]):a.x0=E(o[0]),i.corner[1]?a.z1=E(o[1]):a.z0=E(o[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId),s=o?.openings.find(c=>c.id===i.id),a=s&&o?je(s,o.rooms,o.walls??[]):null;if(!s||!a)return;let l=this.dropOffset(a.room,a.edge,n,s.width,e.altKey);this.change((c,d)=>Object.assign(d.openings.find(u=>u.id===i.id),{offset:l}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(u=>u.id===this._floorId)?.furniture.find(u=>u.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=E(Math.round((o.x+n[0]-i.start[0])/s)*s),l=E(Math.round((o.z+n[1]-i.start[1])/s)*s),c=o.rotation,d=e.altKey?null:this.snapToWall({...o,x:a,z:l});d&&({x:a,z:l,rotation:c}=d),this.change((u,h)=>Object.assign(h.furniture.find(_=>_.id===i.id),{x:a,z:l,rotation:c}),i.base,!1);break}case"outdoor":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===i.id);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=Math.round((n[0]-i.start[0])/s)*s,l=Math.round((n[1]-i.start[1])/s)*s;this.change((c,d)=>d.outdoor.find(u=>u.id===i.id).points=o.points.map(([u,h])=>[E(u+a),E(h+l)]),i.base,!1);break}case"resize":{i.moved=!0;let o=i.base.floors.find(a=>a.id===this._floorId)?.furniture.find(a=>a.id===i.id);if(!o)return;let s=No(o,i.corner,n,e.altKey?.01:this._doc.settings.grid);this.change((a,l)=>Object.assign(l.furniture.find(c=>c.id===i.id),s),i.base,!1);break}case"rotate":{i.moved=!0;let o=i.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===i.id);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=e.altKey?1:15;s=(Math.round(s/a)*a%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===i.id),{rotation:s}),i.base,!1);break}case"aim":{i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=Math.atan2(-(n[0]-o.x),n[1]-o.z)*180/Math.PI,a=e.altKey?1:5;s=(Math.round(s/a)*a%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-o.x,n[1]-o.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{rotation:s,reach:l}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(t[0]-i.startScreen[0],t[1]-i.startScreen[1])<5)return;i.moved=!0;let o=i.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===i.entityId);if(!o)return;let s=e.altKey?.01:this._doc.settings.grid,a=E(Math.round((o.x+n[0]-i.start[0])/s)*s),l=E(Math.round((o.z+n[1]-i.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(u=>u.entity_id===i.entityId),{x:a,z:l}),i.base,!1);break}}}onPointerUp(e){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(e.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let t=this.drag;if(this.drag=null,!t||e.type==="pointercancel"){t&&ec.has(t.kind)&&"moved"in t&&t.moved&&"base"in t&&this.restoreLive(t.base);return}let n=this.localPoint(e);switch(t.kind){case"freewall":{Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1])>=.2&&this.addFreeWall(t.start,t.end),this._guides={};break}case"wallmove":t.moved&&this.pushHistory(t.base),this._guides={};break;case"rect":{let[i,o]=t.start,[s,a]=t.end;if(Math.abs(s-i)>=.2&&Math.abs(a-o)>=.2){let l=[Math.min(i,s),Math.min(o,a)],c=[Math.max(i,s),Math.max(o,a)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];t.outdoor?this.addOutdoor(d):t.hole?this.addHole(l,c):t.roof?this.roof.addSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(t.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,e.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,e.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"bgmove":case"bgscale":case"bgrotate":t.moved&&this.pushHistory(t.base);break;case"device":t.moved?this.pushHistory(t.base):this.selectItem("device",t.entityId);break;case"vertex":case"room":t.moved&&this.pushHistory(t.base),this._guides={};break;default:break}}onWheel(e){e.preventDefault();let[t,n]=this.localPoint(e);this.zoomAt(Math.exp(-e.deltaY*(e.deltaMode===1?.05:.0015)),t,n)}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t[0]-n[0],t[1]-n[1]),mid:[(t[0]+n[0])/2,(t[1]+n[1])/2]}}pushHistory(e){this.history.record(e),this.syncHistoryButtons()}restoreLive(e){this._doc=e,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:e},bubbles:!0,composed:!0}))}roomDelta(e,t,n){if(n)return t;let i=this._doc.settings.grid,o=[Math.round(t[0]/i)*i,Math.round(t[1]/i)*i],a=dr/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==e.id)for(let c of l.points)for(let d of e.points){let u=Math.hypot(d[0]+t[0]-c[0],d[1]+t[1]-c[1]);u<a&&(a=u,o=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return o}roomAt(e){return(this.floor?.rooms??[]).filter(i=>O(e,i.points)).sort((i,o)=>_e(i.points)-_e(o.points))[0]?.id??null}addDraftPoint(e,t){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-t[0],s-t[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-e[0],i[1]-e[1])<1e-6||(this._draft=[...n,e])}closeDraft(){this._draft.length>=3&&_e(this._draft)>.05&&this.addRoom(this._draft),this._draft=[],this._cursor=null,this._guides={}}measureStep(e){let t=this._draft[this._draft.length-1];if(!t||!(this._measureLen>0))return;let n=ht(t,this._measureLen,e),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let e=this._draft[0]??[0,0],[t,n]=this._rectSize;t>.1&&n>.1&&(this.addRoom([e,ht(e,t,"right"),ht(ht(e,t,"right"),n,"down"),ht(e,n,"down")]),this._draft=[])}renderMeasureForm(){let e=this._draft,t=e[0],n=e[e.length-1],i=t&&n&&e.length>1?Math.hypot(n[0]-t[0],n[1]-t[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>I(this.hass,a,2);return p`<section>
      <h3>${this.t("measure")}</h3>
      ${t?p`<p class="nf-sub">${this.t("measure_from",{x:s(t[0]),z:s(t[1])})}</p>
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
                ${o.map(([a,l])=>p`<button class="nf-btn nf-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${e.length>1?p`<ol class="nf-measure-list">
                  ${e.slice(1).map((a,l)=>p`<li>${s(Math.hypot(a[0]-e[l][0],a[1]-e[l][1]))} m</li>`)}
                </ol>`:g}
            <div class="nf-actions">
              <button class="nf-btn nf-primary" ?disabled=${e.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="nf-btn" ?disabled=${e.length<2} @click=${()=>this._draft=e.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${e.length>=3?p`<p class="nf-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:g}`:p`<p class="nf-sub">${this.t("measure_start")}</p>`}
      <h4 class="nf-lib-head">${this.t("rect_by_size")}</h4>
      <div class="nf-form">
        ${this.num(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.num(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="nf-btn nf-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="nf-sub">${this.t("measure_hint")}</p>
    </section>`}get freeWall(){return this.sel.wall?(this.floor?.walls??[]).find(e=>e.id===this.sel.wall):void 0}updateFreeWall(e){let t=this.sel.wall;t&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===t),e))}deleteFreeWall(){let e=this.sel.wall;!e||!this.isAdmin||!this.confirmFixedDelete("wall",e)||(this.change((t,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==e),n.openings=n.openings.filter(i=>i.wall!==e)}),this.sel.wall=null)}renderFreeWalls(e){return M`<g>${(e.walls??[]).map(t=>{let[n,i]=this.toScreen(t.a),[o,s]=this.toScreen(t.b),a=t.id===this.sel.wall;return M`<g data-free-wall=${t.id} class=${`nf-free-wall${a?" nf-free-wall-sel":""}`}>
        <line class="nf-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="nf-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!Er(t,!0,this._doc.settings)?M`<g class="nf-vertex" data-wall-end=${`${t.id}:a`}><circle cx=${n} cy=${i} r="16" class="nf-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="nf-vertex" data-wall-end=${`${t.id}:b`}><circle cx=${o} cy=${s} r="16" class="nf-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:g}`})}</g>`}renderFreeWallForm(e){let t=this.isAdmin,n=Math.hypot(e.b[0]-e.a[0],e.b[1]-e.a[1]),i=o=>{let a=Math.max(.1,o)/(n||1);this.updateFreeWall({b:[E(e.a[0]+(e.b[0]-e.a[0])*a),E(e.a[1]+(e.b[1]-e.a[1])*a)]})};return p`<section>
      <div class="nf-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",e.id)}</div>
      <div class="nf-form">
        ${this.num(this.t("wall_length"),n,i,.01,.1)}
        ${this.num(this.t("wall_thickness"),e.thickness??this._doc.settings.wall_interior,o=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,o))}),.01,.02)}
        ${this.num(this.t("wall_height"),e.height??this.floor?.height??2.5,o=>this.updateFreeWall({height:o>=(this.floor?.height??2.5)-.005?null:Math.max(.05,o)}),.05,.05)}
      </div>
      ${t?p`<div class="nf-actions">
            <button class="nf-btn nf-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:g}
      <p class="nf-sub">${this.t("free_wall_hint")}</p>
    </section>`}get outdoorArea(){return this.sel.outdoor?this.floor?.outdoor.find(e=>e.id===this.sel.outdoor):void 0}updateOutdoor(e){let t=this.sel.outdoor;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===t),e))}deleteOutdoor(){let e=this.sel.outdoor;!e||!this.isAdmin||!this.confirmFixedDelete("outdoor",e)||(this.change((t,n)=>n.outdoor=n.outdoor.filter(i=>i.id!==e)),this.sel.outdoor=null)}onKey=e=>{if(e.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=e.ctrlKey||e.metaKey;if(n&&e.key.toLowerCase()==="z")e.preventDefault(),e.shiftKey?this.redo():this.undo();else if(n&&e.key.toLowerCase()==="y")e.preventDefault(),this.redo();else if(n&&e.key.toLowerCase()==="d")e.preventDefault(),this.duplicateRoom();else if(e.key==="Delete"||e.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this.sel.device?this.deleteItem("device",this.sel.device):this.sel.outdoor?this.deleteOutdoor():this.sel.wall?this.deleteFreeWall():this.sel.opening?this.deleteOpening():this.sel.furniture?this.deleteFurniture():this.sel.corner!==null?this.deleteVertex(this.sel.corner):this.deleteRoom();else if(e.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roof.section&&!this._doc.settings.lock_plan)this.roof.patchSection({locked:!this.roof.section.locked});else if(e.key.toLowerCase()==="l"&&!n&&(this.sel.furniture||this.sel.device)){let i=this.sel.target;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(tc,e.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=e.altKey?.01:e.shiftKey?.1:this._doc.settings.grid,[o,s]=tc[e.key];this.nudgeSelection(o*i,s*i)&&e.preventDefault()}else if(e.key.toLowerCase()==="r"&&!n&&this.sel.furniture)this.rotateFurniture(e.shiftKey?-90:90);else if(e.key==="Backspace"&&this._tool==="polygon")this._draft=this._draft.slice(0,-1);else if(e.key==="Enter"&&this._tool==="polygon")this.closeDraft();else if(e.key==="Escape"){if(this._ctx){this._ctx=null;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};deleteFloor(){let e=this.floor;if(!e||!confirm(this.t("delete_floor_confirm",{name:e.name})))return;let t=structuredClone(this._doc);t.floors=t.floors.filter(n=>n.id!==e.id),this.setDoc(t),this._floorId=t.floors[0]?.id??null,this.sel.room=null}faceHit(e,t){return e.wall?{u:(t[0]-e.o[0])*e.eu[0]+(t[1]-e.o[2])*e.eu[2],s:Number.NaN}:un(e,t)}addFloor(e=null){let t=Wl(this._doc,e,{first:this.t("default_floor"),next:i=>this.t("new_floor",{n:i})}),n=structuredClone(this._doc);n.floors=Vl(n.floors,t),this.setDoc(n),this._floorId=t.id,this.sel.room=null,this.side.floorMenu=!1,this.fit()}addAreaRooms(e){let t=ar(this._doc,e,this.hass?.areas);if(t.length===0)return;let n=Vo(e,t,()=>D("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(e){let t=this._floorId;if(!t)return;let n=Nl(this._doc.floors,t,e);if(n.every((o,s)=>o.id===this._doc.floors[s].id))return;let i=structuredClone(this._doc);i.floors=n.map(o=>i.floors.find(s=>s.id===o.id)),this.setDoc(i)}floorActions(){return{openFloor:e=>{this._floorId=e,this.sel.room=null,this.sel.corner=null,this._draft=[],this.fit()},addFloor:e=>this.addFloor(e),moveFloor:e=>this.moveFloor(e),deleteFloor:()=>this.deleteFloor(),addAreaRooms:e=>this.addAreaRooms(e),closeGaps:()=>this.closeFloorGaps(),shift:()=>this.shiftFloor(this.side.shiftX,this.side.shiftZ),turn:()=>this.turnFloor(),rememberView:()=>this.rememberFloorView()}}roomActions(e){return{select:t=>this.selectItem("room",t),patch:t=>this.updateRoom(t),setArea:t=>this.setArea(t),setRect:(t,n)=>this.setRect(t,n),setCorner:(t,n,i)=>this.setPoint(t,n,i),removeCorner:t=>this.deleteVertex(t),duplicate:()=>this.duplicateRoom(),remove:()=>this.deleteRoom(),rememberView:()=>this.rememberRoomView(),applyPackage:t=>this.applyPackage(e,t),openSpots:()=>{let t=this.hass?Ee(this.hass,e.area_id).filter(n=>n.startsWith("light.")):[];this.side.spots=Zl(e,t)},placeSpots:()=>this.placeSpots(e),lockButton:this.fixButton("room",e.id),wallHeights:this.renderEdgeHeights(e),climate:this.renderRoomClimate(e),corner:this.sel.corner}}applyPackage(e,t){if(!this.isAdmin)return;let n=Gs(e,t,()=>D("furniture"));this.change((i,o)=>o.furniture.push(...n)),this.side.packages=!1,this.side.notice=this.t("pkg_done",{n:n.length})}placeSpots(e){let t=this.side.spots;if(!t||!this.isAdmin)return;let n=lr(e,t);this.change((i,o)=>o.furniture.push(...n)),this.side.spots=null,this.side.notice=this.t("spots_placed",{n:n.length})}viewCentre(){return this.toWorld(this._size.w/2,this._size.h/2)}addFreeWall(e,t){if(!this.floor)return;let n=pl(e,t);this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}addHole(e,t){if(!this.floor)return;let n=fl(e,t);this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(e){if(!this.floor)return;let t=ml(e);this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id),this._tool="select"}duplicateOutdoor(){let e=this.outdoorArea;if(!e||!this.isAdmin)return;let t=gl(e);this.change((n,i)=>i.outdoor.push(t)),this.selectItem("outdoor",t.id)}addRoom(e){if(!this.floor)return;let t=Rl(e,this.t("new_room",{n:this.floor.rooms.length+1}));this.change((n,i)=>i.rooms.push(t)),this.sel.room=t.id,this.sel.corner=null,this._tool="select"}deleteRoom(){let e=this.sel.room;!e||!this.isAdmin||!this.confirmFixedDelete("room",e)||(this.change((t,n)=>zl(n,e)),this.sel.room=null,this.sel.corner=null)}duplicateRoom(){let e=this.room;if(!e||!this.isAdmin)return;let t=Al(e);this.change((n,i)=>i.rooms.push(t)),this.sel.room=t.id}deleteVertex(e){let t=this.room;t&&(this.change((n,i)=>Pl(i,t.id,e)),this.sel.corner=null)}nudgeSelection(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.sel.target;if(i&&this.isFixedItem(i.kind,i.id))return this._fixedHint=!0,!0;let o=i?i.kind==="room"?{kind:"room",id:i.id,corner:this.sel.corner}:{kind:i.kind,id:i.id}:null,s=o?El(n,o,e,t):At;return s===At?!1:(s!==Li&&this.change((a,l)=>s.apply(l)),!0)}addFurniture(e){let t=this.floor;if(!t||!this.isAdmin)return;let n=this.room,i=_l(e,this._doc,t,n?ue(n.points):this.viewCentre());this.change((o,s)=>s.furniture.push(i)),this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}rotateFurniture(e){let t=this.furnitureItem;t&&this.isAdmin&&this.updateFurniture({rotation:vl(t.rotation,e)})}duplicateFurniture(){let e=this.furnitureItem;if(!e||!this.isAdmin)return;let t=bl(e);this.change((n,i)=>i.furniture.push(t)),this.selectItem("furniture",t.id)}vehicleToSpot(e){if(!this.isAdmin)return;let t=yl(e);this.change((n,i)=>{i.furniture=i.furniture.filter(o=>o.id!==e.id),i.furniture.push(t)}),this.selectItem("furniture",t.id)}deviceToFurniture(e,t){if(!this.isAdmin)return;let n=wl(e,t);this.change((i,o)=>{o.placements=o.placements.filter(s=>s.entity_id!==e.entity_id),o.furniture.push(n)}),this.sel.device=null,this.selectItem("furniture",n.id)}furnitureToDevice(e){let t=e.entity;if(!this.isAdmin||!t||t==="none")return;let n=xl(e,t);this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==e.id),o.placements.some(s=>s.entity_id===t)||o.placements.push(n)}),this.sel.furniture=null,this.selectItem("device",t)}placeDevices(e){let t=this.room;!t||e.length===0||!this.isAdmin||this.change((n,i)=>$l(n,i,t,e))}removeDevice(e){this.change(t=>kl(t,e))}centreDevice(){let e=this.device,t=e?this.floor?.rooms.find(o=>o.id===this.roomAt([e.x,e.z])):void 0;if(!e||!t)return;let[n,i]=Sl(t);this.updateDevice({x:n,z:i})}spreadCeilingLights(e){let t=this.floor;if(!t)return;let n=Il(e,t.placements);n.length!==0&&this.change((i,o)=>{for(let s of n)Object.assign(o.placements.find(a=>a.entity_id===s.entityId),{x:s.x,z:s.z})})}shiftScope(){return{floorId:this._floorId,allFloors:this.side.shiftAll}}shiftFloor(e,t){!this.isAdmin||!e&&!t||(this.change(n=>Cl(n,this.shiftScope(),e,t)),this.side.shiftX=0,this.side.shiftZ=0)}turnFloor(){!this.floor||!this.isAdmin||this.change(e=>Bl(e,this.shiftScope()))}setArea(e){let t=this.room;t&&this.updateRoom(Dl(t,e,this.hass?.areas??{}))}setRect(e,t){let n=this.room,i=n?Tl(n,e,t):null;i&&this.updateRoom({points:i})}setPoint(e,t,n){let i=this.room,o=i?Ol(i,e,t,n):null;o&&this.updateRoom({points:o})}setOpeningPreset(e,t){this._openingPreset=t,this.updateOpening(Fl(e,t))}entityOptions(e){return K(this.hass,e)}isPowerSensor(e){return xt(this.hass,e)}num(e,t,n,i=.01,o){return A(this.host,e,t,n,i,o)}entitySelect(e,t,n,i,o){return C(this.host,e,t,n,i,o)}iconInput(e,t){return Un(this.host,e,t)}markerSelect(e,t){return Qs(this.host,e,t)}energyActions(){return{follow:e=>{e.kind==="solar-field"?this.roof.solarId=e.id:e.kind==="add-solar-field"?this.roof.addField():e.kind==="add-device"?this.addEnergyDevice(e.type):this.openEnergyDevice(e.floor,e.item)},addDevice:e=>{this.roof.solarId=null,this.addEnergyDevice(e)},openDevice:(e,t)=>this.openEnergyDevice(e,t),importPrefs:()=>{this.importEnergy()},note:this._energyNote}}openEnergyDevice(e,t){this._floorId=e.id,this.roof.solarId=null,this.selectItem("furniture",t.id),this.showPoint(t.x,t.z)}addEnergyDevice(e){let t=this.floor;if(!t||!this.isAdmin)return;let n=o=>o.area_id&&this.hass?.areas?.[o.area_id]?.name||"",i=hl(e,this._doc,t,{roomLabel:o=>`${o.name} ${n(o)} ${o.area_id??""}`,selected:this.room,fallback:this.toWorld(this._size.w/2,this._size.h/2)});this.change((o,s)=>s.furniture.push(i)),this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}async importEnergy(){if(!this.hass)return;let e=await dl({hass:this.hass,doc:()=>this._doc,canAdd:()=>!!this.floor,addDevice:t=>this.addEnergyDevice(t),setField:(t,n,i)=>this.change(o=>{let s=o.floors.flatMap(a=>a.furniture).find(a=>a.id===t);s&&(s[n]=i)})});if(e.kind==="failed"){this._energyNote=this.t("energy_import_failed");return}this.selectItem("furniture",null),this._energyNote=e.filled>0?this.t("energy_import_done",{n:e.filled}):this.t("energy_import_none")}renderEnergyPanel(){let e=this.roof.solarId?this._doc.settings.roof.solar?.find(i=>i.id===this.roof.solarId):void 0;if(e)return al(this.roofDeps(),e);let t=this.sel.furniture?this.floor?.furniture.find(i=>i.id===this.sel.furniture&&Fe.includes(i.type)):void 0;if(t)return p`<button class="nf-btn nf-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(t)}`;let n=this.energyActions();return p`${ka(this.host,n)}${sl(this.roofDeps())}${$a(this.host,n)}${Sa(this.host,n)}${Ma(this.host)}`}renderCarForm(e){if(!this.hass)return g;let t=e.car??{},n=this.entityOptions(i=>/^(device_tracker|sensor|binary_sensor|lock|climate)\./.test(i));return p`${this.entitySelect(this.t("live_car_device"),t.device??null,null,n,i=>this.updateFurniture({car:{...t,device:i}}))}
      <p class="nf-sub nf-wide">${this.t("live_car_device_hint")}</p>`}fixItem(e,t,n){if(e)switch(t){case"room":return e.rooms.find(i=>i.id===n);case"opening":return e.openings.find(i=>i.id===n);case"furniture":return e.furniture.find(i=>i.id===n);case"device":return e.placements.find(i=>i.entity_id===n);case"wall":return(e.walls??[]).find(i=>i.id===n);case"outdoor":return e.outdoor.find(i=>i.id===n)}}isFixedItem(e,t){return Er(this.fixItem(this.floor,e,t),e!=="furniture"&&e!=="device",this._doc.settings)}toggleFixed(e,t){if(!this.isAdmin||e!=="furniture"&&e!=="device")return;let n=!this.isFixedItem(e,t);this.change((i,o)=>{let s=this.fixItem(o,e,t);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&this.change(e=>e.settings.lock_plan=!e.settings.lock_plan)}confirmFixedDelete(e,t){return!this.isFixedItem(e,t)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(e){e.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(e.target,this.localPoint(e)))}openContext(e,t){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...t),i=f=>e.closest(`[${f}]`)?.getAttribute(f)??null,o=null,s=i("data-device"),a=i("data-opening"),l=e.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor"),u=i("data-room")??this.roomAt(n);if(s?o=["device",s]:a?o=["opening",a]:l?o=["furniture",l]:c?o=["wall",c]:d&&!u?o=["outdoor",d]:u&&(o=["room",u]),!o){this._ctx=null;return}let[h,_]=o;this.selectItem(h,_),(h==="opening"||h==="furniture")&&(this.sel.room=this.sel.room??u),this._ctx={x:t[0],y:t[1],kind:h,id:_}}deleteItem(e,t){if(e==="device"){if(!this.confirmFixedDelete(e,t))return;this.removeDevice(t),this.sel.device=null;return}e==="room"?this.deleteRoom():e==="opening"?this.deleteOpening():e==="furniture"?this.deleteFurniture():e==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let e=this._ctx;if(!e)return g;let t=this.isFixedItem(e.kind,e.id),n=this.renderRoot.querySelector(".nf-canvas-wrap"),i=Math.max(4,Math.min(e.x,(n?.clientWidth??800)-190)),o=Math.max(4,Math.min(e.y,(n?.clientHeight??600)-190)),s=a=>()=>{this._ctx=null,a()};return p`<div class="nf-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${e.kind==="furniture"||e.kind==="device"?p`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(e.kind,e.id))}>${t?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:p`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${e.kind==="room"?p`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:g}
      ${e.kind==="furniture"?p`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${t} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>`:g}
      <button class="nf-ctx-danger" @click=${s(()=>this.deleteItem(e.kind,e.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(e,t){if(!this.isAdmin)return g;if(e!=="furniture"&&e!=="device")return this._doc.settings.lock_plan?p`<button class="nf-btn nf-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:g;let n=this.isFixedItem(e,t);return p`<button class="nf-btn nf-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(e,t)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}dropOffset(e,t,n,i,o){let s=e.points[t],a=e.points[(t+1)%e.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l;return Ml(l,c,i,o?.01:this._doc.settings.grid)}selectItem(e,t){this.side.notice=null,t&&(this._sideOpen=!0),this.sel.select(e,t,{roomOfDevice:n=>{let i=this.floor?.placements.find(o=>o.entity_id===n);return(i&&this.roomAt([i.x,i.z]))??null},roomOfOpening:n=>this.floor?.openings.find(i=>i.id===n)?.room_id??null})}get opening(){return this.sel.opening?this.floor?.openings.find(e=>e.id===this.sel.opening):void 0}get furnitureItem(){return this.sel.furniture?this.floor?.furniture.find(e=>e.id===this.sel.furniture):void 0}placeOpening(e,t){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let b=je({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!b)continue;let[y,w]=this.toScreen(m.a),[v,x]=this.toScreen(m.b),k=(v-y)**2+(x-w)**2||1,$=Math.min(1,Math.max(0,((t[0]-y)*(v-y)+(t[1]-w)*(x-w))/k)),S=Math.hypot(t[0]-y-(v-y)*$,t[1]-w-(x-w)*$),F=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],P=n.rooms.find(T=>T.points.length>=3&&O(F,T.points));S<dr*2.2&&(!i||S-1<i.d)&&(i={room:b.room,edge:0,d:S-1,wall:m.id,roomId:P?.id??m.id})}for(let m of n.rooms)for(let b=0;b<m.points.length;b++){let[y,w]=this.toScreen(m.points[b]),[v,x]=this.toScreen(m.points[(b+1)%m.points.length]),k=(v-y)**2+(x-w)**2||1,$=Math.min(1,Math.max(0,((t[0]-y)*(v-y)+(t[1]-w)*(x-w))/k)),S=Math.hypot(t[0]-y-(v-y)*$,t[1]-w-(x-w)*$),F=S-(m.id===this.sel.room?.5:0);S<dr*2.2&&(!i||F<i.d)&&(i={room:m,edge:b,d:F})}if(!i)return!1;let{room:o,edge:s,wall:a}=i,l=o.points[s],c=o.points[(s+1)%o.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=pt[e],h=u.type,_=E(Math.min(u.width,Math.max(.3,d-.1))),f={id:D("opening"),room_id:i.roomId??o.id,edge:s,...a?{wall:a}:{},offset:this.dropOffset(o,s,this.toWorld(...t),_,!1),width:_,type:h,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,b)=>b.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}updateOpening(e){let t=this.sel.opening;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===t),e))}deleteOpening(){let e=this.sel.opening;!e||!this.isAdmin||!this.confirmFixedDelete("opening",e)||(this.change((t,n)=>n.openings=n.openings.filter(i=>i.id!==e)),this.sel.opening=null)}glowScaleField(e,t){return p`<label class="nf-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((e??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;t(Math.abs(i-1)<.001?null:i)}}
    /></label>`}furnitureFor(e){let t=V(e),n=this.hass?.language??"en",i=[...zr.map(a=>({type:a,label:this.t(`furn_${a}`)})),...(this.packs??[]).flatMap(a=>a.items.map(l=>({type:Je(a.id,l.id),label:`${Ge(l,n)} \xB7 ${He(a,n)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,s=a=>t==="light"?le(a):t==="climate"?a==="radiator":e.startsWith("vacuum.")?a==="robot_vacuum"||ut(a)&&a.endsWith(":robot_vacuum"):t==="media"?jr(a)||Vt(a)&&o.test(a):Vt(a)&&!le(a);return i.filter(a=>s(a.type)).sort((a,l)=>a.label.localeCompare(l.label))}renderAsFurniture(e){if(!this.isAdmin)return g;let t=this.furnitureFor(e.entity_id);return t.length?p`<label class="nf-field nf-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(e,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${t.map(n=>p`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:g}snapToWall(e){return this.floor?Ut(this.floor,e,this._doc.settings.wall_interior):null}updateFurniture(e){let t=this.sel.furniture;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===t),e))}mirrorFurniture(){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({mirror:!e.mirror})}deleteFurniture(){let e=this.sel.furniture;!e||!this.isAdmin||!this.confirmFixedDelete("furniture",e)||(this.change((t,n)=>n.furniture=n.furniture.filter(i=>i.id!==e)),this.sel.furniture=null)}get device(){return this.sel.device?this.floor?.placements.find(e=>e.entity_id===this.sel.device):void 0}updateDevice(e){let t=this.sel.device;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===t),e))}closeFloorGaps(){let e=this.floor;if(!e||!this.isAdmin)return;let{rooms:t,gaps:n}=hs(e.rooms);if(!n.length){this.side.notice=this.t("gaps_none");return}let i=ps(n);this.change((o,s)=>{s.rooms=t,i&&(o.settings.wall_interior=i)}),this.side.notice=i?this.t("gaps_closed_wall",{n:n.length,t:I(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}updateFloor(e){this.change((t,n)=>Object.assign(n,e))}updateRoom(e){let t=this.sel.room;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===t),e))}render(){let e=this.floor,t=e?pe(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]):null;return p`
      ${this.renderPreview()}
      <div class="nf-editor ${this.narrow?"nf-narrow":""}">
        <div class="nf-main">
          <div class="nf-toolbar">
            <div class="nf-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","hole","roof","energy"].map(n=>p`<button
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
              ${this.isAdmin?p`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:g}
            </div>
            ${t?.warnings.length?p`<span class="nf-warn">${this.t("overlap_warning")}</span>`:g}
          </div>
          <div class="nf-stage-pair ${this._split?"nf-split":""}" style=${this._split&&!this.narrow?`--nf-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="nf-canvas-wrap">
            ${this.houseTool?p`<div class="nf-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:g}
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
              ${Ta(this.canvasContext(),this.bg,e)} ${this.renderGrid()} ${this.renderGhost()} ${t?this.renderWalls(t.walls):g}
              ${e?this.renderOutdoor(e):g} ${e?this.renderRooms(e):g} ${e?this.renderFurniture(e):g}
              ${e?this.renderFreeWalls(e):g}
              ${e&&t?this.renderOpenings(e,t.walls):g} ${e?this.renderMeter(e):g}
              ${e&&this._tool==="select"?this.renderDevices(e):g}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this.sel.opening&&!this.sel.furniture&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):g}
              ${e?this.renderOutdoorHandles(e):g}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):g}
              ${e?Pa(this.canvasContext(),e):g}
              ${this._tool==="roof"?M`${Fi(this.canvasContext(),this.roof)}${Aa(this.canvasContext(),this.roof)}`:this._tool==="energy"?M`${Fi(this.canvasContext(),this.roof)}${Ra(this.canvasContext(),this.roof)}${za(this.canvasContext(),this.floor,this.sel.furniture)}`:g} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="nf-hint ${this._fixedHint?"nf-hint-fixed":""}">${e?this._fixedHint?this.t("fixed_drag_hint"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?p`<div class="nf-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:g}
          ${this._split?this.render3d():g}
          </div>
        </div>
        ${this.renderAside(e)}
      </div>
    `}renderGrid(){let{scale:e}=this._view,{w:t,h:n}=this._size,i=e>=90?.1:e>=30?.5:1,o=e>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(t,n),d=[],u=(f,m)=>{for(let b=Math.ceil(s/f)*f;b<=l;b+=f){let y=this.toScreen([b,0])[0];d.push(M`<line class=${m} x1=${y} y1="0" x2=${y} y2=${n} />`)}for(let b=Math.ceil(a/f)*f;b<=c;b+=f){let y=this.toScreen([0,b])[1];d.push(M`<line class=${m} x1="0" y1=${y} x2=${t} y2=${y} />`)}};i<o&&u(i,"nf-grid-minor"),u(o,"nf-grid-major");let[h,_]=this.toScreen([0,0]);return d.push(M`<circle class="nf-origin" cx=${h} cy=${_} r="3" />`),M`<g pointer-events="none">${d}</g>`}renderGhost(){let e=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,t=e>0?this._doc.floors[e-1]:void 0;return t?M`<g pointer-events="none">${t.rooms.map(n=>M`<polygon class="nf-ghost" points=${n.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:g}renderWalls(e){let t=this.floor?.height??2.5;return M`<g pointer-events="none">${e.map(n=>{let i=n.height!==void 0&&n.height<t-.01,o=`nf-wall${n.exterior?" nf-wall-ext":""}${i?" nf-wall-low":""}`;return M`<polygon class=${o} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(e,t){let n=this.floor;if(!n)return[0];let o=pe(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===e.id&&a.edge===t).map(a=>a.t0));return o.length?[...new Set(o)].sort((s,a)=>s-a):[0]}setEdgeHeight(e,t,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(e,t).length;this.change((c,d)=>{let u=d.rooms.find(m=>m.id===e.id);if(!u)return;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);let _=h[t],f=Array.isArray(_)?[..._]:new Array(l).fill(typeof _=="number"?_:null);for(;f.length<l;)f.push(null);f[i]=n,h[t]=f.every(m=>m===f[0])?f[0]:f,u.wall_heights=h.every(m=>m===null)?void 0:h});return}let a=pe(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===e.id&&c.edge===t)).flatMap(l=>l.sources);a.some(l=>l.room_id===e.id&&l.edge===t)||a.push({room_id:e.id,edge:t,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let u=c.rooms.find(_=>_.id===d.room_id);if(!u)continue;let h=(u.wall_heights??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[d.edge]=n,u.wall_heights=h.every(_=>_===null)?void 0:h}})}renderCameraDetections(e){if(!this.hass)return g;let t=this.hass,n=xs(t,e),i=[...new Set(n.map(o=>ws(t,o)))];return p`<p class="nf-sub nf-wide">
      ${n.length?p`${this.t("camera_detect_found",{kinds:i.map(o=>this.t(`detect_${o}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(e,t,n){if(!this.isAdmin)return;let i=e.points,o=Math.hypot(i[(t+1)%i.length][0]-i[t][0],i[(t+1)%i.length][1]-i[t][1]),s=this.edgeParts(e,t),a=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,u)=>{let h=u.rooms.find(m=>m.id===e.id);if(!h)return;let _=(h.wall_splits??[]).slice(0,h.points.length);for(;_.length<h.points.length;)_.push(null);_[t]=[..._[t]??[],c].sort((m,b)=>m-b),h.wall_splits=_;let f=h.wall_heights?.[t];if(Array.isArray(f)){let m=n??0;f.splice(m+1,0,f[m]??null)}})}moveSplit(e,t,n,i){let o=e.points,s=Math.hypot(o[(t+1)%o.length][0]-o[t][0],o[(t+1)%o.length][1]-o[t][1]),a=this.edgeParts(e,t).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let h=d.rooms.find(f=>f.id===e.id)?.wall_splits?.[t];if(!h)return;let _=h.findIndex(f=>Math.abs(f-n)<.001);_>=0&&(h[_]=l),h.sort((f,m)=>f-m)})}joinSplit(e,t,n,i){this.change((o,s)=>{let a=s.rooms.find(d=>d.id===e.id);if(!a?.wall_splits?.[t])return;let l=a.wall_splits[t].filter(d=>Math.abs(d-n)>.001);a.wall_splits[t]=l.length?l:null,a.wall_splits.every(d=>!d)&&(a.wall_splits=void 0);let c=a.wall_heights?.[t];Array.isArray(c)&&(c.splice(i,1),c.every(d=>d===c[0])&&(a.wall_heights[t]=c[0]??null))})}renderSplitMarks(e){let t=e.points;return M`${(e.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=t.length)return[];let o=t[i],s=t[(i+1)%t.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/a,c=(s[1]-o[1])/a;return n.map(d=>{let[u,h]=this.toScreen([o[0]+l*d,o[1]+c*d]);return M`<line class="nf-split-mark" x1=${u-c*7} y1=${h+l*7} x2=${u+c*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(e){let t=this.floor.height,n=e.points.length,i=this._doc.settings,o=new Set;for(let a of pe(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===e.id&&o.add(l.edge);let s=(a,l)=>this.change((c,d)=>{let u=d.rooms.find(_=>_.id===e.id);if(!u)return;let h=(u.wall_thickness??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[a]=l,u.wall_thickness=h.every(_=>_===null)?void 0:h});return p`<div class="nf-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${e.points.flatMap((a,l)=>{let c=e.points[(l+1)%n],d=Math.hypot(c[0]-a[0],c[1]-a[1]),u=e.wall_heights?.[l]??null,h=()=>this.sel.edge=l,_=()=>this.sel.edge=null,f=this.edgeParts(e,l);return(f.length>1?f.map((b,y)=>y):[void 0]).map(b=>{let y=b===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[b]??null:u,w=b===void 0?d:(f[b+1]??d)-f[b],v=x=>this.setEdgeHeight(e,l,x,b);return p`<div
            class="nf-edge-height${l===this.sel.edge?" nf-edge-on":""}${y!==null?" nf-edge-low":""}"
            @mouseenter=${h}
            @mouseleave=${_}
            @focusin=${h}
            @focusout=${_}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${b===void 0?"":` \xB7 ${this.t("wall_part",{n:b+1})}`}</b><br /><span class="nf-muted"
                >${I(this.hass,w,2)} m</span
              ></span
            >
            ${y===0?p`<span class="nf-muted">${this.t("wall_none")}</span>`:this.num(this.t("wall_height"),y??t,x=>v(x>=t-.005?null:Math.max(.05,x)),.05,.05)}
            ${this.isAdmin&&y!==null?p`<button class="nf-btn" title=${this.t("wall_height_full")} @click=${()=>v(null)}>↥</button>`:g}
            ${this.isAdmin&&y!==0?p`<button class="nf-btn" title=${this.t("wall_none_hint")} @click=${()=>v(0)}>${this.t("wall_none")}</button>`:g}
            ${this.isAdmin&&w>=.4?p`<button class="nf-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(e,l,b)}>✂</button>`:g}
            ${(b===void 0||b===0)&&y!==0?p`<span class="nf-wide nf-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.num(this.t("edge_thickness"),e.wall_thickness?.[l]??(o.has(l)?i.wall_exterior:i.wall_interior),x=>{let k=o.has(l)?i.wall_exterior:i.wall_interior,$=Math.min(1.5,Math.max(.02,Math.round(x*1e3)/1e3));s(l,Math.abs($-k)<5e-4?null:$)},.01,.02)}
                  ${this.isAdmin&&e.wall_thickness?.[l]!=null?p`<button class="nf-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:g}</span
                >`:g}
            ${b!==void 0&&b>0&&(e.wall_splits?.[l]??[]).some(x=>Math.abs(x-f[b])<.001)?p`<span class="nf-wide nf-split-row"
                  >${this.num(this.t("wall_split_at"),f[b],x=>this.moveSplit(e,l,f[b],x),.05,.1)}
                  ${this.isAdmin?p`<button class="nf-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(e,l,f[b],b)}>⨉</button>`:g}</span
                >`:g}
          </div>`})})}
      <p class="nf-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(e){let t=this.sel.outdoor?e.outdoor.find(n=>n.id===this.sel.outdoor):void 0;return!t||!this.isAdmin||this._tool!=="select"||this._doc.settings.lock_plan?g:M`${t.points.map((n,i)=>{let[o,s]=this.toScreen(n);return M`<g class="nf-vertex" data-out-vertex=${`${t.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="nf-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(e){return M`<g>${e.outdoor.map(t=>{let n=t.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(ue(t.points)),s=te(t.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return M`<g data-outdoor=${t.id} class=${`nf-out nf-out-${t.type}${t.id===this.sel.outdoor?" nf-out-sel":""}`}>
        <polygon points=${n} />
        ${a?M`<text x=${i} y=${o+4}>${this.t(`out_${t.type}`)}</text>`:g}
      </g>`})}</g>`}renderOutdoorForm(e){let t=this.isAdmin,n=Kt(e.points),i=te(e.points),o=(s,a)=>{let{x0:l,z0:c,x1:d,z1:u}=i;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,u]=[a,a+(u-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(u=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([h,_])=>[E(h),E(_)])})};return p`<section>
      <div class="nf-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",e.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!t} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Oo.map(s=>p`<option value=${s} ?selected=${s===e.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?p`${this.num(this.t("x"),i.x0,s=>o("x",s))} ${this.num(this.t("z"),i.z0,s=>o("z",s))}
            ${this.num(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.num(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:g}
        ${Ar(e.type)?this.num(this.t("outdoor_height"),e.height??Rr[e.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,E(s)))}),.05,.1):g}
        ${this.num(this.t("outdoor_offset"),e.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,E(s)))||null}),.05)}
        ${e.type!=="pool"?p`${this.num(this.t("outdoor_slope"),e.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,E(s)))||null}),.05,0)}
              <label class="nf-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!t} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Do.map(s=>p`<option value=${s} ?selected=${s===(e.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:g}
        <label class="nf-check nf-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${e.outline!==!1} ?disabled=${!t} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${e.type==="fence"||e.type==="pergola"?p`<label class="nf-check nf-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!e.open} ?disabled=${!t} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:g}
        ${e.type==="pergola"?p`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!e.bracing} ?disabled=${!t} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:g}
        <label class="nf-check nf-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!e.cut} ?disabled=${!t} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${e.slope?p`<p class="nf-sub">${this.t("outdoor_slope_hint")}</p>`:g}
      <p class="nf-sub">${this.t("outdoor_hint")}</p>
      ${t?p`<div class="nf-actions">
            <button class="nf-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:g}
    </section>`}renderRooms(e){return M`
      <g>${e.rooms.map(t=>{let n=t.points.map(i=>this.toScreen(i).join(",")).join(" ");return M`<polygon data-room=${t.id} class=${t.id===this.sel.room?"nf-room nf-room-sel":"nf-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${e.rooms.map(t=>{let[n,i]=this.toScreen(ue(t.points));return M`<text class="nf-room-name" x=${n} y=${i-2}>${t.name}</text>
          <text class="nf-room-area" x=${n} y=${i+14}>${this.t("area_m2",{a:I(this.hass,_e(t.points),1)})}</text>`})}</g>
    `}renderEdgeHighlight(){let e=this.room,t=this.sel.edge;if(!e||t===null||t>=e.points.length)return g;let[n,i]=this.toScreen(e.points[t]),[o,s]=this.toScreen(e.points[(t+1)%e.points.length]);return M`<line class="nf-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(e){let t=this._doc.energy?.meter;if(!t||t.floor_id!==e.id)return g;let[n,i]=this.toScreen([t.x,t.z]);return M`<g class="nf-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(e){let t=this._view.scale;return M`<g>${e.furniture.map(n=>{let i=n.id===this.sel.furniture,[o,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*t>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/t),[d,u]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[h,_]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),f=le(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return M`<g data-furniture=${n.id} class=${`nf-furn${i?" nf-furn-sel":""}${f?" nf-furn-lit":""}${Fe.includes(n.type)?" nf-energy-item":""}`}>
        <g transform="translate(${o} ${s}) rotate(${n.rotation}) scale(${n.mirror?-t:t} ${t})">
          <rect class="nf-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="nf-furn-sym">${us(n.type,n.w,n.d)}</g>
          <line class="nf-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?M`<text x=${o} y=${s+4}>${gn(this.hass,n.type)}</text>`:g}
      </g>
      ${i&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,b])=>{let[y,w]=this.toScreen([n.x+m*n.w*Math.cos(l)/2-b*n.d*Math.sin(l)/2,n.z+m*n.w*Math.sin(l)/2+b*n.d*Math.cos(l)/2]);return M`<g class="nf-resize" data-resize=${`${n.id}:${m}:${b}`}>
              <circle cx=${y} cy=${w} r="14" class="nf-hit" />
              <rect x=${y-5} y=${w-5} width="10" height="10" rx="2" />
            </g>`}):g}
      ${i?(()=>{let[m,b]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/t),n.z-Math.cos(l)*(n.d/2+18/t)]);return M`<text class="nf-dim" x=${m} y=${b+4}>${I(this.hass,n.w,2)} × ${I(this.hass,n.d,2)} m</text>`})():g}
      ${i&&n.locked?M`<text class="nf-lock" x=${d} y=${u+5}>🔒</text>`:g}
      ${i&&this.isAdmin&&!n.locked?M`<g class="nf-rotate" data-rotate=${n.id}>
            <line x1=${h} y1=${_} x2=${d} y2=${u} />
            <circle cx=${d} cy=${u} r="16" class="nf-hit" />
            <circle cx=${d} cy=${u} r="8" />
            <path d="M${d-4} ${u-1}a4 4 0 1 1 2 3.5" />
          </g>`:g}`})}</g>`}renderOpenings(e,t){return M`<g>${e.openings.map(n=>{let i=je(n,e.rooms,e.walls??[]);if(!i)return g;let{room:o,edge:s}=i,a=ii(t,n,i),l=gt(o,s,n.offset-n.width/2),c=gt(o,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),h=se(o.points)>=0?1:-1,_=[-u*h,d*h],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let m=($,S)=>this.toScreen([$[0]+_[0]*S,$[1]+_[1]*S]),b=[m(l,f[0]+.01),m(c,f[0]+.01),m(c,-f[1]-.01),m(l,-f[1]-.01)],y=n.id===this.sel.opening,w=Nt(n,a?.wall.exterior??!1),v=n.type==="door"&&Ir(w),x=`nf-open nf-open-${n.type}${v?" nf-open-front":""}${y?" nf-open-sel":""}`,k;if(n.type==="garage"){let $=m(l,f[0]-.04),S=m(c,f[0]-.04),F=m(l,f[0]+Math.min(2,n.height)),P=m(c,f[0]+Math.min(2,n.height));k=M`<line x1=${$[0]} y1=${$[1]} x2=${S[0]} y2=${S[1]} />
          <path class="nf-open-track" d="M${$[0]} ${$[1]}L${F[0]} ${F[1]}M${S[0]} ${S[1]}L${P[0]} ${P[1]}" />`}else if(n.type==="door"){let $=n.swing==="out",S=$?-f[1]:f[0],F=n.hinge==="left"==h>0,P=n.leaves===2,T=l,R=c,H=[],G=Uo(n.width,w,F,n);if(G){let $e=Se=>Se<=.02?l:Se>=n.width-.02?c:gt(o,s,n.offset-n.width/2+Se);T=$e(G.x0),R=$e(G.x1),H=G.panels.map(([Se,Ve])=>[$e(Se),$e(Ve)])}let W=[(T[0]+R[0])/2,(T[1]+R[1])/2],Te=(P?.5:1)*Math.hypot(R[0]-T[0],R[1]-T[1]),ke=(f[0]-f[1])/2,rc=H.map(([$e,Se])=>{let Ve=m($e,ke+.035),at=m(Se,ke+.035),Pt=m($e,ke-.035),Tt=m(Se,ke-.035);return M`<line class="nf-open-pane" x1=${Ve[0]} y1=${Ve[1]} x2=${at[0]} y2=${at[1]} /><line class="nf-open-pane" x1=${Pt[0]} y1=${Pt[1]} x2=${Tt[0]} y2=${Tt[1]} />`}),hr=($e,Se)=>{let[Ve,at]=m($e,S),[Pt,Tt]=m(Se,S),_n=m($e,S+($?-Te:Te)),Gi=Te*this._view.scale,ic=(_n[0]-Ve)*(Tt-at)-(_n[1]-at)*(Pt-Ve);return M`<path d="M${Ve} ${at}L${_n[0]} ${_n[1]}A${Gi} ${Gi} 0 0 ${ic>0?1:0} ${Pt} ${Tt}" />`};k=M`${rc}${w==="passage"?M`<line class="nf-open-passage" x1=${m(l,ke)[0]} y1=${m(l,ke)[1]} x2=${m(c,ke)[0]} y2=${m(c,ke)[1]} />`:w==="sliding"?M`<line x1=${m(T,S)[0]} y1=${m(T,S)[1]} x2=${m(R,S)[0]} y2=${m(R,S)[1]} />`:P?M`${hr(T,W)}${hr(R,W)}`:hr(F?T:R,F?R:T)}`}else{let $=(f[0]-f[1])/2,S=m(l,$+.035),F=m(c,$+.035),P=m(l,$-.035),T=m(c,$-.035),R=[(l[0]+c[0])/2,(l[1]+c[1])/2],H=m(R,f[0]),G=m(R,-f[1]);k=M`<line x1=${S[0]} y1=${S[1]} x2=${F[0]} y2=${F[1]} /><line x1=${P[0]} y1=${P[1]} x2=${T[0]} y2=${T[1]} />${n.leaves===2?M`<line x1=${H[0]} y1=${H[1]} x2=${G[0]} y2=${G[1]} />`:g}`}return M`<g data-opening=${n.id} class=${x}>
        <polygon class="nf-open-gap" points=${b.map($=>$.join(",")).join(" ")} />
        ${k}
      </g>`})}</g>`}renderDevices(e){return M`<g>${e.placements.map(t=>{let n=V(t.entity_id);if(!n)return g;let[i,o]=this.toScreen([t.x,t.z]),s=this.hass?.states[t.entity_id]?.state==="on",a=t.entity_id===this.sel.device,l=`nf-device${s?" nf-device-on":""}${a?" nf-device-sel":""}`;return M`${n==="camera"?this.renderCameraWedge(t,a):g}<g data-device=${t.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${B(this.hass,t.entity_id)}</title>
        <circle r="18" class="nf-hit" /><circle r="12" />
        <path d=${Zt(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&t.locked?M`<text class="nf-lock" x=${i+16} y=${o-12}>🔒</text>`:g}`})}</g>`}renderCameraWedge(e,t){let n=e.mount==="ceiling",i=e.fov??(n?360:90),o=e.reach??(n?3:4.5),s=(e.rotation??0)*Math.PI/180,a=(v,x)=>this.toScreen([e.x-Math.sin(s+v)*x,e.z+Math.cos(s+v)*x]),[l,c]=this.toScreen([e.x,e.z]),d=Math.min(i,359.9)*Math.PI/180/2,[u,h]=a(-d,o),[_,f]=a(d,o),m=o*this._view.scale,b=i>=360?"":`M${l} ${c}L${u} ${h}A${m} ${m} 0 ${d>Math.PI/2?1:0} 1 ${_} ${f}Z`,[y,w]=a(0,o);return M`<g class="nf-wedge ${t?"nf-wedge-sel":""}">
      ${i>=360?M`<circle cx=${l} cy=${c} r=${m} />`:M`<path d=${b} />`}
      ${t&&this.isAdmin&&!e.locked?M`<g class="nf-rotate" data-aim=${e.entity_id}>
            <line x1=${l} y1=${c} x2=${y} y2=${w} />
            <circle cx=${y} cy=${w} r="16" class="nf-hit" />
            <circle cx=${y} cy=${w} r="8" />
            <path d="M${y-4} ${w-1}a4 4 0 1 1 2 3.5" />
          </g>`:g}
    </g>`}renderHandles(e){let t=e.points,n=t.length,i=t.map((s,a)=>{let l=t[(a+1)%n],[c,d]=this.toScreen(s),[u,h]=this.toScreen(l),_=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(c+u)/2,m=(d+h)/2,[b,y]=this.toScreen(ue(t)),w=-(h-d),v=u-c,x=Math.hypot(w,v)||1;w/=x,v/=x,w*(f-b)+v*(m-y)<0&&(w=-w,v=-v);let k=Math.hypot(u-c,h-d);return M`
        ${k>50?M`<text class="nf-dim" x=${f+w*16} y=${m+v*16+4}>${I(this.hass,_,2)} m</text>`:g}
        ${k>36?M`<g data-mid=${a} class="nf-mid"><circle cx=${f} cy=${m} r="14" class="nf-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:g}
      `}),o=t.map((s,a)=>{let[l,c]=this.toScreen(s);return M`<g data-vertex=${a} class=${a===this.sel.corner?"nf-vertex nf-vertex-sel":"nf-vertex"}><circle cx=${l} cy=${c} r="16" class="nf-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="nf-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return M`<g>${i}${o}</g>`}renderDraft(){let e=this.drag;if(e?.kind==="freewall"){let[n,i]=this.toScreen(e.start),[o,s]=this.toScreen(e.end),a=Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1]);return M`<g pointer-events="none">
        <line class="nf-draft nf-draft-wall" x1=${n} y1=${i} x2=${o} y2=${s} />
        <text class="nf-dim" x=${(n+o)/2} y=${(i+s)/2-10}>${I(this.hass,a,2)} m</text>
      </g>`}if(e?.kind==="rect"){let[n,i]=this.toScreen(e.start),[o,s]=this.toScreen(e.end),a=Math.abs(e.end[0]-e.start[0]),l=Math.abs(e.end[1]-e.start[1]);return M`<g pointer-events="none">
        <rect class="nf-draft" x=${Math.min(n,o)} y=${Math.min(i,s)} width=${Math.abs(o-n)} height=${Math.abs(s-i)} />
        <text class="nf-dim" x=${(n+o)/2} y=${Math.min(i,s)-8}>${I(this.hass,a,2)} × ${I(this.hass,l,2)} m</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure")return g;let t=[...this._draft,...this._cursor?[this._cursor]:[]].map(n=>this.toScreen(n));return M`<g pointer-events="none">
      ${t.length>1?M`<polyline class="nf-draft" points=${t.map(n=>n.join(",")).join(" ")} />`:g}
      ${this._tool==="measure"?this._draft.slice(1).map((n,i)=>{let o=this.toScreen(this._draft[i]),s=this.toScreen(n);return M`<text class="nf-dim" x=${(o[0]+s[0])/2} y=${(o[1]+s[1])/2-6}>${I(this.hass,Math.hypot(n[0]-this._draft[i][0],n[1]-this._draft[i][1]),2)} m</text>`}):g}
      ${this._draft.map((n,i)=>{let[o,s]=this.toScreen(n);return M`<circle class=${i===0&&this._draft.length>=3?"nf-draft-pt nf-draft-first":"nf-draft-pt"} cx=${o} cy=${s} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?M`<circle class="nf-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:g}
    </g>`}renderGuides(){let e=this._guides,{w:t,h:n}=this._size;return M`<g pointer-events="none">
      ${e.x!==void 0?M`<line class="nf-guide" x1=${this.toScreen([e.x,0])[0]} y1="0" x2=${this.toScreen([e.x,0])[0]} y2=${n} />`:g}
      ${e.z!==void 0?M`<line class="nf-guide" x1="0" y1=${this.toScreen([0,e.z])[1]} x2=${t} y2=${this.toScreen([0,e.z])[1]} />`:g}
      ${e.point?M`<circle class="nf-snap" cx=${this.toScreen(e.point)[0]} cy=${this.toScreen(e.point)[1]} r="9" />`:g}
    </g>`}selectFrom3d(e,t){this.selectItem(e,t),this._sideOpen=!1}setSidePinned(e){this._sidePinned=e,this._sideOpen=!1;try{localStorage.setItem("nextfloor.sidePinned",e?"1":"0")}catch{}}renderAside(e){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?p`<aside class="nf-side nf-side-strip"></aside>
      <aside class="nf-side nf-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(e)}
      </aside>`:p`<aside class="nf-side nf-side-strip">
        <button class="nf-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this.sel.furniture||this.sel.device||this.sel.opening?p`<button class="nf-strip-btn nf-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:g}
        <button class="nf-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="nf-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:p`<aside class="nf-side">${this.renderPinRow()}${this.renderSide(e)}</aside>`}renderPinRow(e=!1){return!this._split||this.narrow?g:p`<div class="nf-pin-row">
      ${e?p`<button class="nf-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:g}
      <button class="nf-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(e){let t=this.room,n=this.isAdmin;if(this._tool==="roof")return Qa(this.roofDeps());if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="furniture"&&e&&n)return p`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):g} ${this.renderFurnitureLibrary()}`;let i=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?Ti(this.host,this.opening,this.openingActions()):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return i?p`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",this.sel.room)}>‹ ${this.t(t?"back_to_room":"back_to_floor",{room:t?.name??""})}</button>
        ${i}`:t&&this._tool!=="measure"?p`<button class="nf-btn nf-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${Vi(this.host,this.side,t,this.roomActions(t))} ${this.renderDeviceList(t)}`:p`
      ${n?g:p`<p class="nf-note">${this.t("read_only")}</p>`}
      ${Ul(this.host,this.side,this.floorActions(),e,this._floorId)}
      ${this._tool==="measure"&&e?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?Ti(this.host,this.opening,this.openingActions()):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):t?p`${Vi(this.host,this.side,t,this.roomActions(t))} ${this.renderDeviceList(t)}`:e?ql(this.host,e,{select:o=>this.selectItem("room",o)}):g}
      ${n?ra(this.host,()=>this.paneView()):g} ${n?na(this.host):g}
      ${Fa(this.host)}
      ${n&&!1?ia(this.host):g}
      ${e&&n?Na(this.host,this.bg,e):g} ${n?ma(this.host,this.settingsActions):g}
      ${n?ua(this.host,this.backup):g}
    `}openingIsExterior(e){let t=this.floor,n=t?je(e,t.rooms,t.walls??[]):null;if(!t||!n)return!1;let i=pe(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]);return ii(i.walls,e,n)?.wall.exterior??!1}renderFurnitureForm(e){let t=this.isAdmin;return p`<section>
      <div class="nf-h3row"><h3>${e.name||this.t("furniture")}</h3>${this.fixButton("furniture",e.id)}</div>
      <div class="nf-form">
        <label class="nf-field nf-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${e.name??""} ?disabled=${!t} placeholder=${this.t(`furn_${e.type}`)===`furn_${e.type}`?"":this.t(`furn_${e.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${e.name?p`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:g}
        <label class="nf-field nf-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!t} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${zr.map(n=>p`<option value=${n} ?selected=${n===e.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).map(n=>p`<optgroup label=${He(n,this.hass?.language??"de")}>
                ${n.items.map(i=>{let o=Je(n.id,i.id);return p`<option value=${o} ?selected=${o===e.type}>${Ge(i,this.hass?.language??"en")}</option>`})}
              </optgroup>`)}
            ${e.type.startsWith("pack:")&&!(this.packs??[]).some(n=>e.type.startsWith(`pack:${n.id}:`))?p`<option value=${e.type} selected>${gn(this.hass,e.type)}</option>`:g}
          </select></label
        >
        ${this.num(this.t("x"),e.x,n=>this.updateFurniture({x:n}))} ${this.num(this.t("z"),e.z,n=>this.updateFurniture({z:n}))}
        ${this.num(this.t("width"),e.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("depth"),e.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.num(this.t("height_m"),e.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),e.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${le(e.type)?g:p`<label class="nf-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!e.mirror} ?disabled=${!t} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${e.type==="led_strip"?p`${this.num(this.t("strip_tilt"),e.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="nf-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!e.upright} ?disabled=${!t} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:g}
        ${Tr(e)&&this.floor?p`${this.num(this.t("mount_height"),e.mount_y??Fr(this.floor,e),n=>this.updateFurniture({mount_y:Math.max(0,n)}),.01,0)}
              ${e.mount_y!=null?p`<button class="nf-btn nf-field-btn" ?disabled=${!t} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:g}`:g}
      </div>
      ${e.type==="stairs"?p`<p class="nf-sub">${this.t("stairs_hint")}</p>`:g}
      ${e.type==="stairwell"?p`<p class="nf-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&gs(Hr(e),n.points))?p`<p class="nf-sub nf-pack-error">${this.t("stairwell_outside")}</p>`:g}`:g}
      ${e.type==="inverter"||e.type==="home_battery"?p`<div class="nf-form">
            <label class="nf-field nf-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(e.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>p`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`${e.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:g}
      ${e.type==="lamp_pendant"?p`<div class="nf-form">
            <label class="nf-field nf-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!t} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>p`<option value=${n} ?selected=${(e.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:g}
      ${(()=>{let n=ee(e.type==="parking"?e.vehicle??"":e.type)?.colors;if(!n?.length)return g;let i=n.find(s=>s.id===e.variant)??n[0],o=s=>s.name[this.hass?.language??"en"]??s.name.en??Object.values(s.name)[0];return p`<div class="nf-form">
          <div class="nf-field nf-wide">
            <span>${this.t("paint_colour")}: ${o(i)}</span>
            <div class="nf-swatches" role="radiogroup" aria-label=${this.t("paint_colour")}>
              ${n.map((s,a)=>p`<button type="button" class="nf-swatch" role="radio" aria-checked=${s.id===i.id} title=${o(s)} style=${`--sw:${s.hex}`} ?disabled=${!t} @click=${()=>this.updateFurniture({variant:a===0?null:s.id})}></button>`)}
            </div>
          </div>
        </div>`})()}
      ${Vt(e.type)?this.renderFurnitureLinks(e):Vu.has(e.type)?g:p`<div class="nf-form nf-links">${this.renderStateLinks(e)}</div>`} ${e.type==="parking"?this.renderParkingForm(e):g}
      ${e.type.startsWith("pack:nextfloor.fahrzeuge:")&&this.isAdmin?p`<section>
            <p class="nf-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="nf-actions"><button class="nf-btn nf-primary" @click=${()=>this.vehicleToSpot(e)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:g}
      ${t?p`<div class="nf-actions">
            <button class="nf-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="nf-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            ${e.entity&&e.entity!=="none"&&e.type!=="parking"?p`<button class="nf-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(e)}>${this.t("as_device")}</button>`:g}
            <button class="nf-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="nf-btn nf-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:g}
    </section>`}paneView(){let t=this.renderRoot.querySelector("nf-view3d")?.currentView();if(!t)return null;let n=t.target;return{theta:E(t.theta),phi:E(t.phi),radius:E(t.radius),...n?{target:{x:E(n.x),y:E(n.y),z:E(n.z)}}:{}}}rememberFloorView(){let e=this.paneView();if(!e){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:e})}rememberRoomView(){let e=this.paneView();if(!e){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:e})}renderStateLinks(e){return p`${this.entitySelect(this.t("furn_state_entity"),e.state_entity??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity:t==="none"?null:t}))}
              ${e.state_entity&&e.state_entity!=="none"?p`${this.entitySelect(this.t("furn_state_entity2"),e.state_entity2??null,void 0,this.entityOptions(t=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(t)),t=>this.updateFurniture({state_entity2:t==="none"?null:t}))}
                    ${e.state_entity2&&e.state_entity2!=="none"?p`<label class="nf-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${t=>this.updateFurniture({state_split:t.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${e.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${e.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:g}`:g}
              <p class="nf-sub nf-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(e){if(!this.hass)return g;let t=this.hass,n=d=>{let u=structuredClone(this._doc.floors);for(let h of u)for(let _ of h.furniture)_.id===e.id&&(_[d]=null);return et(t,u).get(e.id)?.[d]??null},i=An(e.type),o=i&&(!ut(e.type)||$o(e.type)),s=le(e.type),a=this.entityOptions(d=>s?/^(light|switch|input_boolean)\./.test(d):o?/^(media_player|switch|input_boolean|light)\./.test(d):e.type==="radiator"?d.startsWith("climate."):e.type==="robot_vacuum"?d.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(d)||yo(t.states[d])),l=this.entityOptions(d=>this.isPowerSensor(d)),c=e.type==="fridge_smart"?this.entityOptions(d=>d.startsWith("binary_sensor.")):[];return p`<div class="nf-form nf-links">
        ${e.type==="grid_point"?p`<p class="nf-sub nf-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":o?"furn_entity_tv":e.type==="radiator"?"furn_entity_climate":e.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),e.entity??null,n("entity"),a,d=>this.updateFurniture({entity:d}))}
        ${!s&&!Fe.includes(e.type)&&!jr(e.type)?this.renderStateLinks(e):g}
        ${s&&e.entity&&e.entity!=="none"?p`${this.entitySelect(this.t("furn_color_entity"),e.color_entity??null,void 0,this.entityOptions(d=>d.startsWith("light.")&&d!==e.entity),d=>this.updateFurniture({color_entity:d==="none"?null:d}))}
              <p class="nf-sub nf-wide">${this.t("furn_color_entity_hint")}</p>`:g}
        ${s?this.glowScaleField(e.glow_scale,d=>this.updateFurniture({glow_scale:d})):g}
        ${s||e.type==="grid_point"?g:this.entitySelect(this.t(e.type==="meter"?"energy_grid":e.type==="inverter"?"energy_solar_sensor":e.type==="home_battery"?"energy_battery_sensor":"furn_power"),e.power??null,n("power"),l,d=>this.updateFurniture({power:d}))}

      </div>
      ${e.type==="meter"?p`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_export"),e.export??null,void 0,l,d=>this.updateFurniture({export:d==="none"?null:d}))}
            <p class="nf-sub nf-wide">${this.t("furn_export_hint")}</p>
          </div>`:g}
      ${e.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let d=(this._doc.settings.roof.strings??[]).filter(u=>u.inverter===e.id).map(u=>u.name);return p`<p class="nf-sub nf-wide">${d.length?this.t("inverter_strings",{names:d.join(", ")}):this.t("inverter_strings_none")}</p>`})():g}
      ${e.type==="home_battery"?p`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_soc"),e.soc??null,void 0,this.entityOptions(d=>J(d)&&(t.states[d]?.attributes.device_class==="battery"||t.states[d]?.attributes.unit_of_measurement==="%")),d=>this.updateFurniture({soc:d==="none"?null:d}))}
            ${this.entitySelect(this.t("furn_charge"),e.charge??null,void 0,l,d=>this.updateFurniture({charge:d==="none"?null:d}))}
            <p class="nf-sub nf-wide">${this.t("furn_charge_hint")}</p>
          </div>`:g}
      ${e.type==="wallbox"?p`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),e.status??null,void 0,this.entityOptions(d=>Nn(d)||J(d)),d=>this.updateFurniture({status:d==="none"?null:d}))}
          </div>`:g}
      ${!s||e.entity?p`<label class="nf-check nf-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="nf-form">${this.markerSelect(e.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(e.icon,d=>this.updateFurniture({icon:d}))}</div>`:g}
      ${e.type==="robot_vacuum"?p`<div class="nf-form nf-links">
            ${this.entitySelect(this.t("furn_robot_room"),e.room_sensor??null,cs(t,et(t,this._doc.floors).get(e.id)?.entity??null,null),this.entityOptions(d=>J(d)),d=>this.updateFurniture({room_sensor:d}))}
          </div>`:g}
      ${e.type==="fridge_smart"?p`<div class="nf-form nf-links">
              ${this.entitySelect(this.t("furn_door_left"),e.door_left??null,void 0,c,d=>this.updateFurniture({door_left:d}))}
              ${this.entitySelect(this.t("furn_door_right"),e.door_right??null,void 0,c,d=>this.updateFurniture({door_right:d}))}
            </div>
            <p class="nf-sub">${this.t("fridge_hint")}</p>`:g}
      <p class="nf-sub">${this.t(s?e.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":i?"furn_links_hint_tv":e.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(e){let t=this.isAdmin,n=this.hass?.language??"en",i=(this.packs??[]).flatMap(w=>w.items.filter(v=>v.vehicle).map(v=>({id:Je(w.id,v.id),label:`${Ge(v,n)} \xB7 ${He(w,n)}`}))),o=w=>w.startsWith("device_tracker.")?this.hass?.states[w]?.attributes.source_type==="router"?2:0:1,s=this.entityOptions(w=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(w)).sort((w,v)=>o(w.id)-o(v.id)),a=this.entityOptions(w=>/^(sensor|input_select|select|input_text)\./.test(w)),l=e.type_entity?this.hass?.states[e.type_entity]:void 0,c=Array.isArray(l?.attributes.options)?l.attributes.options:[],d=e.types??[],u=w=>this.updateFurniture({types:w}),h=(w,v)=>p`<select ?disabled=${!t} @change=${x=>v(x.target.value||null)}>
        <option value="" ?selected=${!w}>${this.t("parking_vehicle_none")}</option>
        ${i.map(x=>p`<option value=${x.id} ?selected=${x.id===w}>${x.label}</option>`)}
      </select>`,_=this.floor,f=_?.rooms.find(w=>w.points.length>=3&&O([e.x,e.z],w.points)),m=e.vehicle?ee(e.vehicle):void 0,b=m?m.size[2]*(e.scale??1):0,y=!!f&&!!_&&b>_.height+1e-6;return p`<div class="nf-form nf-links">
        ${this.entitySelect(this.t("parking_entity"),e.entity??null,void 0,s,w=>this.updateFurniture({entity:w==="none"?null:w}))}
        <label class="nf-field nf-wide">${this.t("parking_vehicle")} ${h(e.vehicle??null,w=>this.updateFurniture({vehicle:w}))}</label>
        ${i.length?g:p`<p class="nf-sub nf-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((e.scale??1)*100),w=>this.updateFurniture({scale:Math.min(150,Math.max(30,w))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),e.type_entity??null,void 0,a,w=>this.updateFurniture({type_entity:w==="none"?null:w}))}
        ${e.type_entity?p`<div class="nf-wide">
              <div class="nf-sub">${this.t("parking_types")}</div>
              ${d.map((w,v)=>p`<div class="nf-parking-row">
                  <input
                    type="text"
                    list="nf-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${w.state}
                    ?disabled=${!t}
                    @change=${x=>u(d.map((k,$)=>$===v?{...k,state:x.target.value}:k))}
                  />
                  ${h(w.vehicle,x=>u(d.map((k,$)=>$===v?{...k,vehicle:x??""}:k)))}
                  <button class="nf-btn" ?disabled=${!t} title=${this.t("delete")} @click=${()=>u(d.filter((x,k)=>k!==v))}>✕</button>
                </div>`)}
              <datalist id="nf-parking-states">${c.map(w=>p`<option value=${w}></option>`)}</datalist>
              ${t?p`<button class="nf-btn" @click=${()=>u([...d,{state:c[d.length]??"",vehicle:i[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:g}
            </div>`:g}
      </div>
      ${y?p`<p class="nf-sub nf-warn">${this.t("parking_too_tall",{car:I(this.hass,b,2),room:I(this.hass,_.height,2)})}</p>`:g}
      <p class="nf-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(e)}`}toggleLibrary(e){let t=new Set(this._libOpen);t.has(e)?t.delete(e):t.add(e),this._libOpen=t;try{localStorage.setItem("nextfloor.library",JSON.stringify([...t]))}catch{}}librarySection(e,t,n,i){let o=ur(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(l=>{let c=ur(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${t}`);return o.every(d=>c.includes(d))}):n;if(i&&!s.length)return g;let a=i?!0:this._libOpen.has(e);return p`<button class="nf-lib-head nf-lib-toggle" aria-expanded=${a} @click=${()=>this.toggleLibrary(e)}>
        <span class="nf-lib-caret">${a?"\u25BE":"\u25B8"}</span>${t} <span class="nf-lib-count">${s.length}</span>
      </button>
      ${a?p`<div class="nf-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:g}`}libraryHasHits(e){let t=ur(e).split(/\s+/).filter(Boolean),n=this.hass?.language??"en";return[...Object.entries(Pr).flatMap(([o,s])=>s.map(a=>`${this.t(`furn_${a}`)} ${Ae(nc,`furn_${a}`)} ${a.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(s=>`${Ge(s,n)} ${Object.values(s.name).join(" ")} ${s.id.replace(/_/g," ")} ${o.name} ${He(o,"en")}`))].some(o=>{let s=ur(o);return t.every(a=>s.includes(a))})}storedPictures(){let e=[];for(let t of this._doc.floors)for(let n of t.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!e.includes(i.image)&&e.push(i.image);return e}renderFurnitureLibrary(){let e=this.room,t=this._furnQuery.trim().toLowerCase(),n=this.hass?.language??"en";return p`<section>
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
      ${t&&!this.libraryHasHits(t)?p`<p class="nf-sub">${this.t("furniture_search_none")}</p>`:g}
      ${Object.entries(Pr).map(([i,o])=>this.librarySection(`group:${i}`,this.t(`furn_group_${i}`),o.map(s=>({type:s,label:this.t(`furn_${s}`),search:Ae(nc,`furn_${s}`)})),t))}
      ${(this.packs??[]).map(i=>this.librarySection(`pack:${i.id}`,He(i,n),i.items.map(o=>({type:Je(i.id,o.id),label:Ge(o,n),search:Object.values(o.name).join(" ")})),t))}
    </section>
    <div class="nf-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="nf-sub">${this.t("ext_teaser_text")}</span>
      <button class="nf-btn nf-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(e,t){let n=o=>{this.showPreview(e,o.currentTarget)},i=le(e)?"light":Vt(e)?"switch":null;return p`<button
      class="nf-btn ${i?"nf-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):t}
      @click=${()=>this.addFurniture(e)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${t}
      ${i?p`<svg class="nf-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Zt(i)} />
          </svg>`:g}
    </button>`}async showPreview(e,t){let n=t.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:e,url:null,...i};try{let o=await Xl(),[s,a,l]=Ke(e),c=o.furniturePreview({type:e,w:s,d:a,h:l,variant:null,lamp:jo[e]??null},180,this.packs??[]);this._preview?.type===e&&(this._preview={type:e,url:c,...i})}catch{this._preview=null}}renderPreview(){let e=this._preview;return e?p`<div class="nf-preview" style="left:${e.left}px;top:${e.top}px" aria-hidden="true">
      ${e.url?p`<img src=${e.url} alt="" />`:p`<span class="nf-preview-wait"></span>`}
      <b>${gn(this.hass,e.type)}</b>
    </div>`:g}renderDeviceForm(e){let t=this.isAdmin,n=V(e.entity_id),i=n==="light",o=e.mount??"ceiling",s=n?$n(n,this.floor?.height??2.5,i?o:null):1;return p`<section>
      <div class="nf-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",e.entity_id)}</div>
      <p class="nf-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Zt(n):""} />
        </svg>
        ${B(this.hass,e.entity_id)}
      </p>
      <div class="nf-form">
        ${i?p`<label class="nf-field nf-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(a=>p`<option value=${a} ?selected=${a===o}>${this.t(`lamp_${a}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(e.glow_scale,a=>this.updateDevice({glow_scale:a}))}`:n==="camera"?p`<label class="nf-field nf-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!t} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
                  <option value="wall" ?selected=${(e.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${e.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:g}
        ${this.num(this.t("x"),e.x,a=>this.updateDevice({x:a}))} ${this.num(this.t("z"),e.z,a=>this.updateDevice({z:a}))}
        ${this.num(this.t("marker_height"),e.y??s,a=>this.updateDevice({y:Math.max(0,a)}),.05,0)}
        ${this.num(this.t("rotation"),e.rotation??0,a=>this.updateDevice({rotation:(a%360+360)%360}),1)}
        ${n==="camera"?p`${this.num(this.t("camera_fov"),e.fov??(e.mount==="ceiling"?360:90),a=>this.updateDevice({fov:Math.min(360,Math.max(10,a))}),5,10)}
            ${this.num(this.t("camera_reach"),e.reach??(e.mount==="ceiling"?3:4.5),a=>this.updateDevice({reach:Math.min(50,Math.max(.5,a))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),e.tilt??(e.mount==="ceiling"?65:20),a=>this.updateDevice({tilt:Math.min(90,Math.max(0,a))}),5,0)}
            <label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${e.cone!==!1} ?disabled=${!t} @change=${a=>this.updateDevice({cone:a.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <p class="nf-sub nf-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(e.entity_id)}`:g}
        ${n&&vo.has(n)?p`<label class="nf-check nf-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!e.confirm} ?disabled=${!t} @change=${a=>this.updateDevice({confirm:a.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:g}

        ${this.markerSelect(e.marker??null,a=>this.updateDevice({marker:a}))}
        <label class="nf-field nf-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${e.name??""} ?disabled=${!t} maxlength="60" placeholder=${B(this.hass,e.entity_id)} @change=${a=>this.updateDevice({name:a.target.value.trim()||null})}
        /></label>
        ${e.name?p`<label class="nf-check nf-wide"
              ><input type="checkbox" .checked=${!!e.show_name} ?disabled=${!t} @change=${a=>this.updateDevice({show_name:a.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:g}
        ${this.iconInput(e.icon,a=>this.updateDevice({icon:a}))}
      </div>
      ${t?p`<div class="nf-actions">
            <button class="nf-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${e.y!==null?p`<button class="nf-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:g}
            ${this.renderAsFurniture(e)}
            <button
              class="nf-btn nf-danger"
              @click=${()=>{this.removeDevice(e.entity_id),this.sel.device=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:g}
    </section>`}renderDeviceList(e){let t=this.isAdmin,n=this.hass,i=e.area_id?n?.areas?.[e.area_id]?.name:void 0,o=n?Ee(n,e.area_id).filter(k=>Wt(V(k))):[],s=new Set([...this.floor?.placements.filter(k=>O([k.x,k.z],e.points)).map(k=>k.entity_id)??[],...this.floor?.furniture.filter(k=>le(k.type)&&k.entity&&O([k.x,k.z],e.points)).map(k=>k.entity)??[]]),a=n?Br(n,o):[],l=a.map(k=>k.primary).filter(k=>!s.has(k)),c=this._deviceQuery.trim().toLowerCase(),d=k=>!c||B(n,k,i).toLowerCase().includes(c)||k.includes(c),u=this.floor?.placements.filter(k=>V(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&O([k.x,k.z],e.points)).length,h=new Set(e.panel??[]),_=new Set(e.hidden??[]),f=new Set(e.no_state??[]),m=new Map;for(let k of this._doc.floors)for(let $ of[...k.placements.map(S=>[S.entity_id,S.x,S.z]),...k.furniture.filter(S=>le(S.type)&&S.entity).map(S=>[S.entity,S.x,S.z])]){let S=k.rooms.find(F=>O([$[1],$[2]],F.points));S&&S.id!==e.id&&m.set($[0],S.name)}let b=(k,$=!1,S=i)=>{let F=s.has(k),P=F?void 0:m.get(k);return p`<div class="nf-row nf-dev-row ${$?"nf-dev-extra":""} ${_.has(k)?"nf-dev-hidden":""}">
        <button class="nf-dev-name ${F?"":"nf-muted"}" ?disabled=${!F} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Zt(V(k))} />
          </svg>
          <span>${B(n,k,S)}${P?p`<small class="nf-muted"> · ${this.t("devices_placed_in",{room:P})}</small>`:g}</span>
        </button>
        ${t&&!$?p`<button
              class="nf-pin ${_.has(k)?"nf-pin-on":""}"
              aria-pressed=${_.has(k)}
              title=${this.t(_.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:_.has(k)?[..._].filter(T=>T!==k):[..._,k]})}
            >
              ${_.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:g}
        ${t&&!$&&!_.has(k)?p`<button
              class="nf-pin ${f.has(k)?"nf-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(k)?[...f].filter(T=>T!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2205":"Aa"}
            </button>`:g}
        ${t&&!F?p`<button
              class="nf-pin ${h.has(k)?"nf-pin-on":""}"
              aria-pressed=${h.has(k)}
              title=${this.t(h.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:h.has(k)?[...h].filter(T=>T!==k):[...h,k]})}
            >
              ${h.has(k)?"\u2605":"\u2606"}
            </button>`:g}
        ${t?F?p`<button class="nf-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:p`<button class="nf-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:g}
      </div>`},y=t?this._devSource:"area",w=k=>{this._devSource=k,this._deviceQuery=""},v=p`<input
      class="nf-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,x=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return p`<section>
      <h3>${this.t("devices")}</h3>
      <p class="nf-sub">${this.t("devices_panel_hint")}</p>
      ${t?p`<div class="nf-seg nf-dev-source">
            <button aria-pressed=${y==="area"} @click=${()=>w("area")}>${this.t("devices_src_area")}${o.length?` (${a.length})`:""}</button>
            <button aria-pressed=${y==="other"} @click=${()=>w("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${y==="none"} @click=${()=>w("none")}>${this.t("devices_src_none")}</button>
          </div>`:g}
      ${y!=="area"?p`${v}${this.renderDeviceExtras(e,b,y)}`:e.area_id?o.length?p`${t&&(u??0)>=2?p`<button class="nf-btn nf-wide-btn" @click=${()=>this.spreadCeilingLights(e)}>${this.t("lights_spread")}</button>`:g}
              ${o.length>8?v:g}
              <div class="nf-room-list">
                ${a.map(k=>{let $=k.others.filter(d),S=this._expanded.has(k.primary)||!!c&&$.length>0;return!d(k.primary)&&!$.length?g:p`${b(k.primary)}
                  ${k.others.length?p`<button
                        class="nf-more"
                        @click=${()=>{let F=new Set(this._expanded);F.has(k.primary)?F.delete(k.primary):F.add(k.primary),this._expanded=F}}
                      >
                        ${S?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:g}
                  ${S?(c?$:k.others).map(F=>b(F,!0)):g}`})}
              </div>
              ${t&&l.length>1?p`<button class="nf-link nf-place-all" @click=${x}>${this.t("devices_place_all_n",{n:l.length})}</button>`:g}
              <p class="nf-sub">${this.t("devices_hint")}</p>`:p`<p class="nf-sub">${this.t("devices_none")}</p>`:p`<p class="nf-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(e,t,n){let i=this.hass;if(!i)return g;let o=50,s=this._deviceQuery.trim().toLowerCase(),a=(d,u)=>!s||`${B(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(s),l=d=>d>0?p`<p class="nf-sub">${this.t("devices_narrow",{n:d})}</p>`:g;if(n==="other"){let d=0,u=0,h=Qo(i,e.area_id).map(_=>{let f=_.ids.filter(b=>a(b,_.name)),m=f.slice(0,Math.max(0,o-d));return d+=m.length,u+=f.length-m.length,m.length?p`<div class="nf-dev-area">${_.name}</div>${m.map(b=>t(b,!1,_.name))}`:g});return d?p`<div class="nf-room-list">${h}</div>${l(u)}`:p`<p class="nf-sub">${this.t("devices_none")}</p>`}let c=Xo(i).filter(d=>a(d));return c.length?p`<div class="nf-room-list">${c.slice(0,o).map(d=>t(d))}</div>${l(c.length-Math.min(c.length,o))}`:p`<p class="nf-sub">${this.t("devices_none")}</p>`}renderRoomClimate(e){let t=this.hass;if(!t)return g;let n=(s,a)=>{let l={...e.climate??{},[s]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!e.climate&&Object.values(e.climate).some(s=>s!=null),o=(s,a)=>{let l=Vr[s],c=es(t,this.floor??null,{...e,climate:null},s),d=this.entityOptions(u=>J(u)&&t.states[u]?.attributes.device_class===l).map(u=>({...u,rank:(ft(t,u.id)===e.area_id?0:1)+(Nr(t,u.id)?0:2)})).sort((u,h)=>u.rank-h.rank).map(({id:u,label:h})=>({id:u,label:h}));return this.entitySelect(a,e.climate?.[s]??null,c[0]??null,d,u=>n(s,u))};return p`<details class="nf-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="nf-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="nf-sub">${this.t("climate_hint")}</p>
    </details>`}static styles=[wt,Vn,Yl]};customElements.get("nf-editor")||customElements.define("nf-editor",Ki);function ur(r){return r.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var nc={language:"en"};export{Ki as NfEditor};
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
