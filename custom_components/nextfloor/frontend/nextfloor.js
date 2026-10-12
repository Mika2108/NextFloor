/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let n=Math.trunc(e)||0;return this[n<0?this.length+n:n]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var Et=globalThis,At=Et.ShadowRoot&&(Et.ShadyCSS===void 0||Et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hn=Symbol(),xr=new WeakMap,it=class{constructor(e,n,t){if(this._$cssResult$=!0,t!==hn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o,n=this.t;if(At&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=xr.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&xr.set(n,e))}return e}toString(){return this.cssText}},kr=r=>new it(typeof r=="string"?r:r+"",void 0,hn),j=(r,...e)=>{let n=r.length===1?r[0]:e.reduce((t,i,o)=>t+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new it(n,r,hn)},Sr=(r,e)=>{if(At)r.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of e){let t=document.createElement("style"),i=Et.litNonce;i!==void 0&&t.setAttribute("nonce",i),t.textContent=n.cssText,r.appendChild(t)}},pn=At?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(let t of e.cssRules)n+=t.cssText;return kr(n)})(r):r;var{is,defineProperty:os,getOwnPropertyDescriptor:ss,getOwnPropertyNames:as,getOwnPropertySymbols:ls,getPrototypeOf:cs}=Object,zt=globalThis,$r=zt.trustedTypes,us=$r?$r.emptyScript:"",ds=zt.reactiveElementPolyfillSupport,ot=(r,e)=>r,fn={toAttribute(r,e){switch(e){case Boolean:r=r?us:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},Er=(r,e)=>!is(r,e),Mr={attribute:!0,type:String,converter:fn,reflect:!1,useDefault:!1,hasChanged:Er};Symbol.metadata??=Symbol("metadata"),zt.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Mr){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(e,n),!n.noAccessor){let t=Symbol(),i=this.getPropertyDescriptor(e,t,n);i!==void 0&&os(this.prototype,e,i)}}static getPropertyDescriptor(e,n,t){let{get:i,set:o}=ss(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get:i,set(s){let a=i?.call(this);o?.call(this,s),this.requestUpdate(e,a,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Mr}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;let e=cs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){let n=this.properties,t=[...as(n),...ls(n)];for(let i of t)this.createProperty(i,n[i])}let e=this[Symbol.metadata];if(e!==null){let n=litPropertyMetadata.get(e);if(n!==void 0)for(let[t,i]of n)this.elementProperties.set(t,i)}this._$Eh=new Map;for(let[n,t]of this.elementProperties){let i=this._$Eu(n,t);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let n=[];if(Array.isArray(e)){let t=new Set(e.flat(1/0).reverse());for(let i of t)n.unshift(pn(i))}else e!==void 0&&n.push(pn(e));return n}static _$Eu(e,n){let t=n.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,n=this.constructor.elementProperties;for(let t of n.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Sr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,n,t){this._$AK(e,t)}_$ET(e,n){let t=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,t);if(i!==void 0&&t.reflect===!0){let o=(t.converter?.toAttribute!==void 0?t.converter:fn).toAttribute(n,t.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,n){let t=this.constructor,i=t._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let o=t.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:fn;this._$Em=i;let a=s.fromAttribute(n,o.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,n,t,i=!1,o){if(e!==void 0){let s=this.constructor;if(i===!1&&(o=this[e]),t??=s.getPropertyOptions(e),!((t.hasChanged??Er)(o,n)||t.useDefault&&t.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,t))))return;this.C(e,n,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,n,{useDefault:t,reflect:i,wrapped:o},s){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??n??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(n=void 0),this._$AL.set(e,n)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[i,o]of t){let{wrapped:s}=o,a=this[i];s!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,o,a)}}let e=!1,n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(n)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(n)}willUpdate(e){}_$AE(e){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:"open"},de[ot("elementProperties")]=new Map,de[ot("finalized")]=new Map,ds?.({ReactiveElement:de}),(zt.reactiveElementVersions??=[]).push("2.1.2");var yn=globalThis,Ar=r=>r,Rt=yn.trustedTypes,zr=Rt?Rt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ir="$lit$",me=`lit$${Math.random().toFixed(9).slice(2)}$`,Cr="?"+me,hs=`<${Cr}>`,Te=document,at=()=>Te.createComment(""),lt=r=>r===null||typeof r!="object"&&typeof r!="function",xn=Array.isArray,ps=r=>xn(r)||typeof r?.[Symbol.iterator]=="function",mn=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rr=/-->/g,Fr=/>/g,Re=RegExp(`>|${mn}(?:([^\\s"'>=/]+)(${mn}*=${mn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Tr=/'/g,Dr=/"/g,Pr=/^(?:script|style|textarea|title)$/i,kn=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),f=kn(1),He=kn(2),Gl=kn(3),De=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Hr=new WeakMap,Fe=Te.createTreeWalker(Te,129);function Or(r,e){if(!xn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return zr!==void 0?zr.createHTML(e):e}var fs=(r,e)=>{let n=r.length-1,t=[],i,o=e===2?"<svg>":e===3?"<math>":"",s=st;for(let a=0;a<n;a++){let l=r[a],c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===st?u[1]==="!--"?s=Rr:u[1]!==void 0?s=Fr:u[2]!==void 0?(Pr.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Re):u[3]!==void 0&&(s=Re):s===Re?u[0]===">"?(s=i??st,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Re:u[3]==='"'?Dr:Tr):s===Dr||s===Tr?s=Re:s===Rr||s===Fr?s=st:(s=Re,i=void 0);let _=s===Re&&r[a+1].startsWith("/>")?" ":"";o+=s===st?l+hs:d>=0?(t.push(c),l.slice(0,d)+Ir+l.slice(d)+me+_):l+me+(d===-2?a:_)}return[Or(r,o+(r[n]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]},ct=class r{constructor({strings:e,_$litType$:n},t){let i;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,u]=fs(e,n);if(this.el=r.createElement(c,t),Fe.currentNode=this.el.content,n===2||n===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Fe.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let d of i.getAttributeNames())if(d.endsWith(Ir)){let h=u[s++],_=i.getAttribute(d).split(me),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:b[2],strings:_,ctor:b[1]==="."?_n:b[1]==="?"?bn:b[1]==="@"?vn:Oe}),i.removeAttribute(d)}else d.startsWith(me)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(Pr.test(i.tagName)){let d=i.textContent.split(me),h=d.length-1;if(h>0){i.textContent=Rt?Rt.emptyScript:"";for(let _=0;_<h;_++)i.append(d[_],at()),Fe.nextNode(),l.push({type:2,index:++o});i.append(d[h],at())}}}else if(i.nodeType===8)if(i.data===Cr)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(me,d+1))!==-1;)l.push({type:7,index:o}),d+=me.length-1}o++}}static createElement(e,n){let t=Te.createElement("template");return t.innerHTML=e,t}};function Pe(r,e,n=r,t){if(e===De)return e;let i=t!==void 0?n._$Co?.[t]:n._$Cl,o=lt(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,n,t)),t!==void 0?(n._$Co??=[])[t]=i:n._$Cl=i),i!==void 0&&(e=Pe(r,i._$AS(r,e.values),i,t)),e}var gn=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:n},parts:t}=this._$AD,i=(e?.creationScope??Te).importNode(n,!0);Fe.currentNode=i;let o=Fe.nextNode(),s=0,a=0,l=t[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ut(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new wn(o,this,e)),this._$AV.push(c),l=t[++a]}s!==l?.index&&(o=Fe.nextNode(),s++)}return Fe.currentNode=Te,i}p(e){let n=0;for(let t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,n),n+=t.strings.length-2):t._$AI(e[n])),n++}},ut=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,n,t,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=t,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,n=this._$AM;return n!==void 0&&e?.nodeType===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Pe(this,e,n),lt(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==De&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ps(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Te.createTextNode(e)),this._$AH=e}$(e){let{values:n,_$litType$:t}=e,i=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=ct.createElement(Or(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===i)this._$AH.p(n);else{let o=new gn(i,this),s=o.u(this.options);o.p(n),this.T(s),this._$AH=o}}_$AC(e){let n=Hr.get(e.strings);return n===void 0&&Hr.set(e.strings,n=new ct(e)),n}k(e){xn(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,t,i=0;for(let o of e)i===n.length?n.push(t=new r(this.O(at()),this.O(at()),this,this.options)):t=n[i],t._$AI(o),i++;i<n.length&&(this._$AR(t&&t._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);e!==this._$AB;){let t=Ar(e).nextSibling;Ar(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,t,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=g}_$AI(e,n=this,t,i){let o=this.strings,s=!1;if(o===void 0)e=Pe(this,e,n,0),s=!lt(e)||e!==this._$AH&&e!==De,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=Pe(this,a[t+l],n,l),c===De&&(c=this._$AH[l]),s||=!lt(c)||c!==this._$AH[l],c===g?e=g:e!==g&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},_n=class extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},bn=class extends Oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},vn=class extends Oe{constructor(e,n,t,i,o){super(e,n,t,i,o),this.type=5}_$AI(e,n=this){if((e=Pe(this,e,n,0)??g)===De)return;let t=this._$AH,i=e===g&&t!==g||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,o=e!==g&&(t===g||i);i&&this.element.removeEventListener(this.name,this,t),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wn=class{constructor(e,n,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}};var ms=yn.litHtmlPolyfillSupport;ms?.(ct,ut),(yn.litHtmlVersions??=[]).push("3.3.3");var Wr=(r,e,n)=>{let t=n?.renderBefore??e,i=t._$litPart$;if(i===void 0){let o=n?.renderBefore??null;t._$litPart$=i=new ut(e.insertBefore(at(),o),o,void 0,n??{})}return i._$AI(r),i};var Sn=globalThis,q=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wr(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return De}};q._$litElement$=!0,q.finalized=!0,Sn.litElementHydrateSupport?.({LitElement:q});var gs=Sn.litElementPolyfillSupport;gs?.({LitElement:q});(Sn.litElementVersions??=[]).push("4.2.2");var $n=(r,e,n={})=>r.callWS({type:`nextfloor/${e}`,...n}),Lr=r=>$n(r,"building/get");async function Nr(r,e){return(await $n(r,"building/save",{building:e})).revision}function Br(r,e){return r.connection.subscribeMessage(n=>e(n.revision),{type:"nextfloor/building/subscribe"})}async function Vr(r){return(await $n(r,"packs/list")).packs}var Gr=[],Ft=new Map,Kr=0,Ur=(r,e)=>`pack:${r}:${e}`,Mn=r=>r.startsWith("pack:");function jr(r){Gr=r,Ft=new Map;for(let e of r)for(let n of e.items)Ft.set(Ur(e.id,n.id),n);Kr+=1}var En=()=>Gr,Tt=()=>Kr,_s={};function Q(r){if(!Mn(r))return;let e=Ft.get(r);if(e)return e;let[,n,...t]=r.split(":"),i=_s[n];return i?Ft.get(Ur(i,t.join(":"))):void 0}var qr=r=>Q(r)?.parts.find(e=>e.screen);function Zr(r,e){return r.name[e.split("-")[0]]??r.name.en??Object.values(r.name)[0]??r.id}function ge(r,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Yr;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));let n=Q(e.type);if(!n)return Qr(e);switch(n.mount){case"surface":return Dt(r,e.x,e.z);case"wall":return n.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return 0}}var vs={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function ws(r){return r==="hedge"||r==="fence"||r==="pergola"}function ys(r,e,n){let t=r.slope??0;if(!t||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(c,u)=>i==="x"?c:i==="-x"?-c:i==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of r.points){let d=o(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(e,n)-s)/(a-s)));return t*l}function xs(r,e,n,t){return Xr(r)+(e.offset??0)+vs[e.type]-ys(e,n,t)}function Xr(r){return r.elevation>.3?0:-.2}function dt(r,e,n){let t=(r.outdoor??[]).filter(o=>!ws(o.type)&&o.type!=="pool"&&H([e,n],o.points)),i=[...t].reverse().find(o=>o.cut)??t[0];return i?xs(r,i,e,n):Xr(r)}var ks={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ei={type:"none",pitch:35,overhang:.4},Ss={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ei}};var ti=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Yr=1.75;function ni(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:Q(r.type)?.mount!=="ceiling"}function An(r){return ti.has(r)||!!Q(r)?.light}var $s=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Qr(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Dt(r,e,n){let t=0;for(let i of r.furniture)!($s.has(i.type)||Q(i.type)?.surface)||!H([e,n],Ht(i))||(t=Math.max(t,i.h));return t}var bs=new Set([...ti,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Jr={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function zn(r){r.energy={...ks,...r.energy??{}},r.presence=r.presence??[],r.settings={...Ss,...r.settings,roof:{...ei,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(t=>({...t,panel:t.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(t=>({...t,mount:t.mount??null,rotation:t.rotation??0})),e.furniture=e.furniture.map(t=>({...t,entity:t.entity??null,power:t.power??null}));let n=e.placements.filter(t=>t.entity_id.startsWith("light."));if(n.length){let t={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let o=t[i.mount??"ceiling"],[s,a,l]=Jr[o];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:o,x:i.x,z:i.z,rotation:0,w:s,d:a,h:l,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light."))}e.openings=e.openings.map(t=>({...t,hinge:t.hinge??"left",leaves:t.leaves??1,swing:t.swing??"in",style:t.style??null,cover:t.cover??null,contact:t.contact??null,contact2:t.contact2??null,tilt:t.tilt??null}))}return r}function We(r){let e=0;for(let n=0;n<r.length;n++){let[t,i]=r[n],[o,s]=r[(n+1)%r.length];e+=t*s-o*i}return e/2}function ht(r){let e=We(r);if(Math.abs(e)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let n=0,t=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],c=o*l-a*s;n+=(o+a)*c,t+=(s+l)*c}return[n/(6*e),t/(6*e)]}function Ht(r){let e=r.rotation*Math.PI/180,n=Math.cos(e),t=Math.sin(e),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*n-a*t,r.z+s*t+a*n])}function H(r,e){let n=!1;for(let t=0,i=e.length-1;t<e.length;i=t++){let[o,s]=e[t],[a,l]=e[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(n=!n)}return n}var ri={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ms=700,Fn="nextfloor.unsaved",Le="0.5.0";function Es(){try{let r=localStorage.getItem(Fn);return r?JSON.parse(r):null}catch{return null}}function Rn(r){try{r?localStorage.setItem(Fn,JSON.stringify(r)):localStorage.removeItem(Fn)}catch{}}var ii=r=>r&&typeof r=="object"&&"message"in r?String(r.message):String(r);function As(r,e){let n=o=>o.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),[t,i]=[n(r),n(e)];for(let o=0;o<Math.max(t.length,i.length);o++){let s=(t[o]??0)-(i[o]??0);if(s!==0)return s}return 0}var Ne=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;connected=!1;revision=-1;ownRevisions=new Set;stopListening=null;timer;waiting=null;inFlight=null;constructor(e){this.host=e,e.addController(this)}setHass(e){let n=this.hass===null;this.hass=e,n&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.stopListening?.(),this.stopListening=null}edit(e){this.building=e,this.waiting=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.flush()},Ms),this.host.requestUpdate()}get frontendVersion(){return Le}get versionGap(){let e=this.backendVersion;return!e||Le==="dev"||e===Le?null:As(e,Le)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Le!=="dev"&&this.backendVersion!==Le}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(zn(e.building))}discardDraft(){this.draft=null,Rn(null),this.host.requestUpdate()}async flush(){clearTimeout(this.timer),this.inFlight&&await this.inFlight;let e=this.waiting,n=this.hass;!e||!n||(this.waiting=null,this.saveState="saving",this.host.requestUpdate(),this.inFlight=this.send(n,e),await this.inFlight,this.inFlight=null)}async send(e,n){try{let t=await Nr(e,n);this.ownRevisions.add(t),this.revision=t,this.saveState=this.waiting?"saving":"saved",this.saveError=null,Rn(null)}catch(t){this.saveState="error",this.saveError=ii(t),Rn({building:n,savedAt:Date.now()})}this.host.requestUpdate()}async start(){let e=this.hass;if(e&&(await Promise.all([this.reloadPacks(),this.reload()]),!(this.stopListening||!this.connected)))try{this.stopListening=await Br(e,n=>{let t=this.ownRevisions.has(n)||n===this.revision,i=this.waiting!==null||this.inFlight!==null;!t&&!i&&this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Vr(this.hass)}catch{this.packs=[]}jr(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Lr(this.hass);this.building=zn(e.building),this.backendVersion=e.version??null,this.revision=e.revision,this.error=null,this.draft===null&&!this.waiting&&(this.draft=Es())}catch(e){this.error=ii(e)}this.host.requestUpdate()}}};var oi;function Tn(){let r=new URL("./nextfloor-editor.js?v=84a27bd6b477",new URL(import.meta.url)).href;return oi??=import(r),oi}var Dn=r=>r.slice(0,r.indexOf(".")),zs={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},M=r=>zs[Dn(r)]??null,si=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ai=new Set(["light","switch","fan"]),li=r=>r!==null&&r!=="scene"&&r!=="script",D=r=>!r||r.state==="unavailable"||r.state==="unknown";function T(r,e,n){let t=r.states[e]?.attributes.friendly_name??r.entities?.[e]?.name??e;if(!n||t.length<=n.length+1||!t.toLowerCase().startsWith(`${n.toLowerCase()} `))return t;let i=t.slice(n.length+1);return i[0].toUpperCase()+i.slice(1)}var Rs=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]),Hn=r=>!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum";function _e(r){if(!r)return!1;if(r.entity_id.startsWith("vacuum."))return["cleaning","returning"].includes(r.state);let e=M(r.entity_id);return e==="light"||e==="switch"||e==="fan"||e==="binary"?r.state==="on":e==="cover"?r.state==="open"||r.state==="opening":e==="climate"?["heating","cooling"].includes(String(r.attributes.hvac_action)):e==="media"?r.state==="playing":e==="lock"?r.state==="unlocked"||r.state==="open":e==="sensor"?Hn(r)&&Rs.has(r.state.toLowerCase()):!1}var ci=r=>Math.min(1,Math.max(0,r));function Fs(r){let e=ci((r-2200)/4300),n=[1,.66,.26],t=[.78,.9,1];return[0,1,2].map(i=>n[i]+(t[i]-n[i])*e)}function Be(r,e){if(!r||r.state!=="on")return null;let n=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,t=typeof n.brightness=="number"?.2+.8*Math.sqrt(ci(n.brightness/255)):1,i=n.rgb_color;return i&&!["color_temp","brightness","onoff"].includes(String(n.color_mode))?{color:[i[0]/255,i[1]/255,i[2]/255],level:t}:typeof n.color_temp_kelvin=="number"?{color:Fs(n.color_temp_kelvin),level:t}:{color:[1,.71,.28],level:t}}function Ve(r,e,n=null){if(r==="camera")return n==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&n==="floor")return 1.95;if(r==="light"&&n==="table")return 1.25;if(r==="light"&&n==="wall")return 1.95;switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var ie=r=>r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C";function ui(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}var Ge=(r,e)=>ie(r)==="\xB0F"?e*9/5+32:e;var Ts=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ds=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Hs=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Is=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ke(r,e){let n=r.entities?.[e];return n&&(n.area_id||(n.device_id?r.devices?.[n.device_id]?.area_id:null))||null}var pi=(r,e)=>{let n=r.entities?.[e];return!!(n?.hidden||n?.entity_category)};function di(r,e){let n=M(e),t=r.states[e];if(!n||!t||pi(r,e))return!1;let i=t.attributes.device_class;return n==="sensor"?i?Ts.has(i):Ds.has(String(t.attributes.unit_of_measurement??"")):n==="binary"?i?Hs.has(i):!!r.entities?.[e]?.area_id:!0}function Cs(r,e){let n=r.states[e];return M(e)!=="sensor"||!n?.attributes.unit_of_measurement||pi(r,e)||Is.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||D(n)}var It=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power",hi=null;function In(r,e){let n=r.get(e);return n||r.set(e,n=[]),n}function Ps(r){let e=new Map,n=new Map,t=new Map,i=new Map,o=[],s=c=>{(di(r,c)||Cs(r,c))&&li(M(c))&&o.push(c)};for(let[c,u]of Object.entries(r.entities??{})){let d=u.device_id;d&&u.area_id&&(i.get(d)??i.set(d,new Set).get(d)).add(u.area_id),d&&It(r,c)&&In(n,d).push(c),d&&!u.hidden&&!u.entity_category&&(t.get(d)??t.set(d,new Set).get(d)).add(Dn(c));let h=Ke(r,c);h===null?s(c):di(r,c)&&In(e,h).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||s(c);let a=c=>si.indexOf(M(c));o.sort((c,u)=>a(c)-a(u)||T(r,c).localeCompare(T(r,u)));for(let[c,u]of e){let d=r.areas?.[c]?.name;u.sort((h,_)=>a(h)-a(_)||T(r,h,d).localeCompare(T(r,_,d)))}let l=new Set;for(let[c,u]of i)u.size>1&&l.add(c);return{entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,byArea:e,powerByDevice:n,withoutArea:o,domainsByDevice:t,hubs:l}}function Ct(r){let e=hi;return e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount))?e:hi=Ps(r)}function G(r,e){return!e||!r.entities?[]:Ct(r).byArea.get(e)??[]}var Cn=(r,e)=>!!r.entities&&Ct(r).hubs.has(e),Pt=(r,e)=>r.entities?Ct(r).powerByDevice.get(e)??[]:[];function Pn(r,e){let n=new Map;for(let i of e)In(n,r.entities?.[i]?.device_id??`entity:${i}`).push(i);let t=new Map(e.map((i,o)=>[i,o]));return[...n.values()].map(i=>{let o=i.find(s=>!r.entities?.[s]?.name)??i[0];return{primary:o,others:i.filter(s=>s!==o)}}).sort((i,o)=>t.get(i.primary)-t.get(o.primary))}var Ue=(r,e)=>Pn(r,e).map(n=>n.primary),Os={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ws=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Ls=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],Ns=new RegExp(`(${Ls.join("|")})`,"i");function Bs(r,e){let n=r.entities?.[e]?.device_id,t=n&&!Cn(r,n)?Ct(r).domainsByDevice.get(n):void 0;return t&&[...t].some(i=>Ws.has(i))?!1:!Ns.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function On(r,e,n,t){let i=n.climate?.[t];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=o.filter(c=>H([c.x,c.z],n.points)).map(c=>c.entity_id),a=new Set(o.filter(c=>!H([c.x,c.z],n.points)).map(c=>c.entity_id));return[...new Set([...G(r,n.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&r.states[c]?.attributes.device_class===Os[t]&&Bs(r,c))}function be(r,e,n,t){let i=On(r,e,n,t).map(o=>{let s=Number(r.states[o]?.state);return t==="temperature"?ui(s,r.states[o]?.attributes.unit_of_measurement):s}).filter(Number.isFinite);return i.length?i.reduce((o,s)=>o+s,0)/i.length:null}var Vs=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Gs=new Set(["garage","gate"]),Ks=new Set(["window","opening"]);function pt(r,e,n=!1){let t=new Map;return r.forEach((i,o)=>{let s=n&&e.length===1?e[0]:e[o];s&&t.set(i.id,s)}),t}var fi=(r,e)=>r==="none"?null:r??e??null,Ot=r=>r&&r!=="none"?r:null;function ft(r,e){let n=new Map;for(let t of e)for(let i of t.rooms){let o=t.openings.filter(p=>p.room_id===i.id).sort((p,x)=>p.edge-x.edge||p.offset-x.offset);if(o.length===0)continue;let s=G(r,i.area_id),a=p=>r.states[p]?.attributes.device_class,l=p=>s.filter(x=>M(x)==="binary"&&p(a(x)??"")),c=p=>o.filter(x=>x.type===p),u=pt(c("window"),s.filter(p=>M(p)==="cover"&&Vs.has(a(p))),!0),d=pt(c("window"),l(p=>Ks.has(p))),h=pt(c("door"),l(p=>p==="door")),_=pt(c("garage"),s.filter(p=>M(p)==="cover"&&Gs.has(a(p)??""))),b=pt(c("garage"),l(p=>p==="garage_door"));for(let p of o){let x=p.type==="window"?u:p.type==="garage"?_:null,m=p.type==="window"?d:p.type==="garage"?b:h,k=p.leaves===2;n.set(p.id,{cover:fi(p.cover,x?.get(p.id)),contact:p.sensor==="handle"&&p.contact==null?null:fi(p.contact,m.get(p.id)),tilt:p.tilt==="none"?null:p.tilt,contact2:k?Ot(p.contact2):null,tilt2:k?Ot(p.tilt2):null,position:Ot(p.position),positionInverted:!!p.position_inverted,tiltAngle:Ot(p.tilt_angle),tiltMax:p.tilt_max??null,tiltOffset:p.tilt_offset??null,tiltInvert:!!p.tilt_invert,shut:!!p.shut})}}return n}var Us=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function js(r){if(!r||D(r))return null;let e=r.attributes.window_state;for(let n of[typeof e=="string"?e:"",r.state]){let t=n.trim(),i=t&&Us.find(([o])=>o.test(t));if(i)return i[1]}return null}var qs=.5;function Zs(r,e){let n=e?r.states[e]:void 0,t=n&&!D(n)?Number(n.state):NaN;if(!Number.isFinite(t))return null;let i=n.attributes.unit_of_measurement==="%"||t>1;return Math.min(1,Math.max(0,i?t/100:t))}function Ys(r,e){let n=Zs(r,e.position);if(n!==null)return e.positionInverted?n:1-n;let t=e.cover?r.states[e.cover]:void 0;if(t&&!D(t)){let i=t.attributes.current_position;return typeof i=="number"?1-Math.min(100,Math.max(0,i))/100:t.state==="closed"?1:t.state==="opening"||t.state==="closing"?.5:0}return e.cover?0:null}function ve(r,e,n="window"){let t=d=>!!d&&r.states[d]?.state==="on",i=d=>!!d&&!!r.states[d]&&!D(r.states[d]),o=d=>d?js(r.states[d]):null,s=Ys(r,e);if(n==="door"){let d=o(e.contact);return{open:d===null?e.shut?0:qs:d==="closed"?0:1,open2:o(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:s,sensed:d!==null||s!==null}}if(n==="garage"){let d=s!==null||i(e.contact);return{open:0,open2:0,tilt:0,tilt2:0,cover:s??(i(e.contact)&&t(e.contact)?0:1),sensed:d}}let a=t(e.tilt2)||o(e.tilt2)==="tilted"||o(e.contact2)==="tilted",l=t(e.tilt)||o(e.tilt)==="tilted"||o(e.contact)==="tilted",c=l?1:0,u=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let d=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,d/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}return{open:o(e.contact)==="open"&&!l?1:0,open2:o(e.contact2)==="open"&&!a?1:0,tilt:c,tilt2:a?1:0,cover:s,sensed:i(e.contact)||i(e.tilt)||Number.isFinite(u)}}var mi=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,gi=/(kühl|fridge|gefrier|freezer)/i,_i=/(spülmaschine|geschirrspül|dishwasher)/i,Qs=/(kochfeld|herd|induktion|cooktop)/i,Js={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:mi,tv_wall:mi,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:gi,fridge_smart:gi,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:_i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:Qs,sink:_i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},bi={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},vi=new Set(["tv_board","tv_wall"]);var wi=r=>vi.has(r)||!!qr(r),Ln=r=>wi(r)||r==="desk"||r==="fridge_smart",Wt=r=>!!r&&r!=="none";function Xs(r,e){if(It(r,e))return e;let n=r.entities?.[e]?.device_id;return n?Pt(r,n).find(t=>t!==e)??null:null}var ea=(r,e,n)=>r.rooms.find(t=>t.points.length>=3&&H([e,n],t.points));function Wn(r,e,n,t){return r.find(i=>e?.test(n(i)))??(t?r[0]??null:null)}function je(r,e){let n=new Map;for(let t of e){let i=new Set([...t.furniture.flatMap(o=>[o.entity,o.power]),...t.placements.map(o=>o.entity_id)].filter(Wt));for(let o of t.furniture){let s=o.type in bi,a=s?bi[o.type]:Js[o.type];if(!a&&o.entity==null&&o.power==null)continue;let l=ea(t,o.x,o.z),c=(l?Ue(r,G(r,l.area_id)):[]).filter(b=>!i.has(b)),u=b=>`${b} ${T(r,b)}`,d=b=>c.filter(p=>M(p)===b),h=o.entity==="none"?null:o.entity??null;if(o.entity==null){if(s)h=Wn(d("light"),a,u,!0);else if(o.type==="robot_vacuum"){let b=l?.area_id??null;h=Object.keys(r.entities??{}).find(p=>p.startsWith("vacuum.")&&!i.has(p)&&Ke(r,p)===b)??null}else if(o.type==="radiator")h=Wn(d("climate"),a,u,!0);else if(wi(o.type)){let b=d("media");h=b.find(p=>r.states[p]?.attributes.device_class==="tv")??Wn(b,a,u,vi.has(o.type))}else a&&(h=c.find(b=>["switch","media","fan"].includes(M(b)??"")&&a.test(u(b)))??null);h&&i.add(h)}let _=o.power==="none"?null:o.power??null;o.power==null&&(_=h?Xs(r,h):null,!_&&a&&l&&!s&&(_=G(r,l.area_id).find(b=>It(r,b)&&!i.has(b)&&a.test(u(b)))??null),_&&i.add(_)),(h||_)&&n.set(o.id,{entity:h,power:_})}}return n}function qe(r,e){let n=new Set,t=je(r,e),i=e.some(o=>o.openings.some(s=>s.confirm))?ft(r,e):null;for(let o of e){for(let s of o.placements)s.confirm&&n.add(s.entity_id);for(let s of o.openings){let a=s.confirm?i?.get(s.id)?.cover:null;Wt(a)&&n.add(a)}for(let s of o.furniture){let a=s.confirm?t.get(s.id)?.entity:null;Wt(a)&&n.add(a)}}return n}function yi(r,e){let n=i=>Wt(i)&&["on","open"].includes(r.states[i]?.state??""),t=new Map;for(let i of e.flatMap(o=>o.furniture))i.type==="fridge_smart"&&t.set(i.id,{left:n(i.door_left),right:n(i.door_right)});return t}function xi(r,e,n){let t=(u,d)=>H([u,d],n.points),i=je(r,[e]),o=ft(r,[e]),s=new Set(n.hidden??[]),a=[...e.placements.filter(u=>t(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>t(u.x,u.z)).flatMap(u=>[i.get(u.id)?.entity,i.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===n.id).flatMap(u=>{let d=o.get(u.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...n.panel??[]],l=[...new Set(a.filter(u=>!!u&&!!r.states[u]))].filter(u=>!s.has(u)),c=new Set(l);return{shown:l,more:G(r,n.area_id).filter(u=>!c.has(u)&&!s.has(u))}}var ta={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./},na=/^k?W$/,he=r=>r&&r!=="none"?r:null;function ra(r,e){let n=e.car??{},t=he(n.device)??he(e.entity),i=t?r.entities?.[t]?.device_id:null,o=i&&r.entities?Object.values(r.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],s=(h,_)=>String(r.states[h]?.attributes[_]??""),a=h=>`${h} ${s(h,"friendly_name")} ${r.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,_,b=()=>!0)=>o.find(p=>_.includes(p.split(".")[0])&&ta[h].test(a(p))&&b(p))??null,c=(h,_)=>o.find(b=>b.startsWith(`${h}.`)&&s(b,"device_class")===_)??null,u=h=>o.find(_=>_.startsWith(`${h}.`))??null,d=h=>s(h,"unit_of_measurement");return{soc:he(n.soc)??c("sensor","battery")??l("soc",["sensor"],h=>d(h)==="%"),range:he(n.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:he(n.charging)??l("charging",["sensor"],h=>na.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:he(n.plugged)??c("binary_sensor","plug")??l("plugged",["binary_sensor"]),lock:he(n.lock)??u("lock")??l("lock",["binary_sensor"]),climate:he(n.climate)??u("climate")??l("climate",["switch","binary_sensor"]),tracker:he(n.tracker)??u("device_tracker")}}function ki(r,e){return e.flatMap(t=>t.furniture).filter(t=>t.type==="parking"&&t.car).flatMap(t=>Object.values(ra(r,t))).filter(t=>!!t)}var Si=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function Nn(r,e,n){if(n==="none")return null;if(n)return n;let t=e?r.entities?.[e]?.device_id:null;return!t||!r.entities?null:Object.values(r.entities).find(o=>o.device_id===t&&o.entity_id.startsWith("sensor.")&&(Si.test(o.translation_key??"")||Si.test(o.entity_id.split(".")[1])))?.entity_id??null}function $i(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Mi(r,e,n,t){let i=t?r.states[t]?.state:n?r.states[n]?.attributes.current_room:void 0;if(typeof i!="string"||["","unknown","unavailable"].includes(i))return null;let o=$i(i);if(!o)return null;let s=l=>[l.name,l.area_id??"",l.area_id&&r.areas?.[l.area_id]?.name||""].map($i).filter(Boolean);return e.find(l=>s(l).includes(o))??e.find(l=>s(l).some(c=>c.length>=3&&(c.includes(o)||o.includes(c))))??null}var ia=new Set(["garage","gate","door"]);function Bn(r,e){let n=new Set,t=new Set,i=o=>{if(!o||o==="none"||!r.states[o])return;let s=M(o);s==="light"&&n.add(o),s==="cover"&&!ia.has(String(r.states[o].attributes.device_class??""))&&t.add(o)};for(let o of e.rooms){let s=new Set(o.hidden??[]);Ue(r,G(r,o.area_id)).filter(a=>!s.has(a)).forEach(i)}return e.placements.forEach(o=>i(o.entity_id)),e.furniture.forEach(o=>i(o.entity)),{lights:[...n],covers:[...t]}}function Ei(r){let e=r.split(".")[0];switch(e){case"scene":case"script":return[e,"turn_on"];case"automation":return[e,"trigger"];case"button":case"input_button":return[e,"press"];default:return["homeassistant","toggle"]}}function Ai(r,e,n){let t=n.target?.trim()??"",i=(o,s)=>e.dispatchEvent(new CustomEvent(o,{detail:s,bubbles:!0,composed:!0}));switch(n.action){case"navigate":if(!t)return;history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return;case"more_info":t&&i("hass-more-info",{entityId:t});return;case"service":{if(!t.includes("."))return;let[o,s]=t.split(".",2);r.callService(o,s,n.data??{});return}case"fire_dom_event":i("ll-custom",n.data??{});return}}var zi={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"{n} Erkennungs-Sensoren am Ger\xE4t dieser Kamera: {kinds}. Solange einer etwas meldet, markiert ein Pin es in 3D vor der Kamera.",camera_detect_none:"Am Ger\xE4t dieser Kamera gibt es noch keine Erkennungs-Sensoren. Pins erscheinen, sobald die Integration welche liefert (z. B. Frigate, UniFi Protect, Reolink).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern.",card_motion_trail_hint:"Ein Pfad der Bewegungen der letzten halben Stunde durchs Haus, mit Uhrzeiten",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Alle Kameras nebeneinander. Antippen vergr\xF6\xDFert eine; ein roter Rand hei\xDFt Bewegung.",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Eigene M\xF6bel-Packs sind JSON-Dateien (Format in docs/packs.md). Die mitgelieferten Packs sind immer da.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",feature_text_cameras:"Eine Kamera antippen: die Ansicht fliegt an ihren Platz und schaut in ihre Richtung, dann blendet das Live-Bild ein \u2013 mit dem, was sie gerade erkennt (Person, Fahrzeug, Tier). Die Kamerawand zeigt alle Kameras nebeneinander, die Bewegungsspur zeichnet die letzte halbe Stunde als leuchtenden Pfad durchs Haus, mit Zeiten an jedem Raum.",feature_name_energy:"Energiefluss",feature_name_cameras:"Kameras",feature_name_weather:"Wetter am Haus",feature_name_screens:"TV-Bildschirme",feature_name_sound:"Klang",feature_name_car:"Auto",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Was in NextFloor steckt: die gro\xDFen Funktionen und die M\xF6bel-Packs. Alles ist frei und Open Source \u2013 eigene M\xF6bel-Packs kannst du hier importieren.",ext_pro:"Funktionen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Live-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die Live-Erweiterungen (Wetter, Energie, Auto, Klang, Bildschirme, Kameras) findest du oben unter \u201EErweiterungen\u201C.",feature_text_weather:"Regen, Schnee, Hagel und Schneeregen fallen schr\xE4g mit dem echten Wind, Wolken ziehen mit ihren Schatten \xFCbers Grundst\xFCck, Blitze schlagen neben dem Haus ein, dazu Nebel, Sonne und Mond in ihrer echten Richtung.",feature_text_screens:"Ein Fernseher oder Monitor, der l\xE4uft, zeigt im 3D-Modell, was l\xE4uft: Cover, Titel, Interpret oder Serie und die App \u2013 auf einem Verlauf in der App-Farbe. Dahinter leuchtet ein Ambilight an der Wand, das beim Abspielen sanft atmet.",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",feature_text_sound:"\xDCber jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover, Titel und Interpret \u2013 antippen f\xFCr Zur\xFCck, Abspielen/Pause, Weiter und Lautst\xE4rke. Schallringe in der Farbe der App (Spotify gr\xFCn, Netflix rot \u2026) breiten sich aus, lauter hei\xDFt weiter, und Lautsprecher einer Multiroom-Gruppe sind mit einem Faden verbunden.",feature_text_car:"Eine Glaskarte \xFCber dem Stellplatz zeigt Ladestand mit Farbring, Reichweite, Laden mit Leistung, Stecker und Innentemperatur \u2013 mit Kn\xF6pfen f\xFCr Schloss, Klima und Laden. L\xE4dt das Auto, fliegen Energieteilchen von der Wallbox hinein; ist es weg, steht da, wo es gerade ist. Die Entit\xE4ten findet NextFloor selbst am Ger\xE4t des Autos.",pack_remove:"Entfernen",pack_builtin:"mitgeliefert",live_autarky:"autark",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_now:"jetzt",live_minutes_ago:"vor {n} min",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Ri={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"{n} detection sensors on this camera's device: {kinds}. While one reports something, a pin marks it in front of the camera in 3D.",camera_detect_none:"This camera's device has no detection sensors yet. Pins show up as soon as the integration offers some (e.g. Frigate, UniFi Protect, Reolink).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture.",card_motion_trail_hint:"A path of the last half hour's motion through the house, with times",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"All cameras side by side. Tap one to enlarge it; a red outline means motion.",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Your own furniture packs are JSON files (format in docs/packs.md). The packs that come with NextFloor are always there.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",feature_text_cameras:"Tap a camera: the view flies to where it hangs and looks its way, then the live picture fades in \u2013 with what it detects right now (person, vehicle, animal). The camera wall shows every camera side by side, the motion trail draws the last half hour as a glowing path through the house, with times at every room.",feature_name_energy:"Energy flow",feature_name_cameras:"Cameras",feature_name_weather:"Weather at the house",feature_name_screens:"TV screens",feature_name_sound:"Sound",feature_name_car:"Car",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"What NextFloor brings: its larger features and the furniture packs. Everything is free and open source \u2013 import your own furniture packs here.",ext_pro:"Features",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and live features",ext_teaser_text:'Furniture packs and the live add-ons (weather, energy, car, sound, screens, cameras) are under "Extensions" at the top.',feature_text_weather:"Rain, snow, hail and sleet fall at an angle with the real wind, clouds drift over the plot with their shadows, lightning strikes beside the house, plus fog, sun and moon in their real direction.",feature_text_screens:"A TV or monitor that plays shows in 3D what plays: cover, title, artist or series and the app \u2013 on a gradient in the app's colour. Behind it an ambilight glows on the wall, breathing gently while it plays.",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",feature_text_sound:"A card floats over every speaker or TV that plays, with cover, title and artist \u2013 tap it for previous, play/pause, next and volume. Sound rings in the colour of the app (Spotify green, Netflix red \u2026) spread out, louder reaches further, and speakers of a multiroom group are joined by a thread.",feature_text_car:"A glass card over the parking spot shows the charge with a colour ring, range, charging with its power, plug and inside temperature \u2013 with buttons for lock, climate and charging. While the car charges, energy particles fly into it from the wallbox; when it is away, the card says where it is. NextFloor finds the entities on the car's device by itself.",pack_remove:"Remove",pack_builtin:"built in",live_autarky:"self-sufficient",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_now:"now",live_minutes_ago:"{n} min ago",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},oa=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],mt=new Map,Vn=new Map;function Gn(r){let e=(r??navigator.language).toLowerCase(),n=e.startsWith("no")?"nb":e.slice(0,2);return oa.includes(n)?n:null}function Ze(r){let e=Gn(r);return!e||mt.has(e)}function Lt(r){let e=Gn(r);if(!e||mt.has(e))return Promise.resolve();let n=Vn.get(e);if(!n){let t=new URL(`./lang/${e}.json?v=be5ce4442bac`,import.meta.url).href;n=fetch(t).then(i=>i.ok?i.json():{}).then(i=>{mt.set(e,i&&typeof i=="object"?i:{})}).catch(()=>{mt.set(e,{})}).finally(()=>Vn.delete(e)),Vn.set(e,n)}return n}function $(r,e,n={}){let t=r?.language??navigator.language,i=t.startsWith("de")?null:Gn(t),s=(t.startsWith("de")?zi:i&&mt.get(i)||Ri)[e]??Ri[e]??zi[e]??e;for(let[a,l]of Object.entries(n))s=s.replace(`{${a}}`,String(l));return s}function V(r,e,n=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:n})}var Fi={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",camera:"M3.5 7.5h11.5v9H3.5zM15 10.5l5.5-3v9l-5.5-3",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Nt=r=>Fi[r];function Bt(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function gt(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Fi[r]}"/></svg>`}var we=(r,e)=>$(r,e),sa=(r,e)=>we(r,e?"state_on":"state_off");function Vt(r,e){let n=`state_${e}`,t=$(r,n);return t===n?e:t}var aa=new Set(["door","window","opening","garage_door"]),la=new Set(["playing","paused","on","idle"]);function ca(r,e){if(e.state!=="on")return we(r,"state_off");let n=e.attributes.brightness;return typeof n=="number"?`${Math.round(n/255*100)} %`:we(r,"state_on")}function ua(r,e){let n=e.attributes.current_position,t=e.state==="opening"||e.state==="closing";return typeof n=="number"&&!t?`${n} %`:Vt(r,e.state)}function da(r,e){let n=e.attributes.current_temperature,t=typeof n=="number"?`${V(r,n,1)} ${r?ie(r):"\xB0C"}`:null;return e.state==="off"?t?`${t} \xB7 ${we(r,"state_off")}`:we(r,"state_off"):t??Vt(r,e.state)}function ha(r,e){let n=[e.attributes.app_name,e.attributes.media_title,e.attributes.source].find(t=>typeof t=="string"&&t!=="");return la.has(e.state)&&n?n:Vt(r,e.state)}function pa(r,e){let n=e.state==="on";return aa.has(String(e.attributes.device_class))?we(r,n?"state_open":"state_closed"):we(r,n?"state_detected":"state_clear")}function fa(r,e){let n=Number(e.state);if(!Number.isFinite(n))return e.state;let t=r?.entities?.[e.entity_id]?.display_precision??1,i=e.attributes.unit_of_measurement;return`${V(r,n,t)}${typeof i=="string"&&i?` ${i}`:""}`}function X(r,e){if(!e||D(e))return we(r,"state_unavailable");switch(M(e.entity_id)){case"light":return ca(r,e);case"switch":case"fan":return sa(r,e.state==="on");case"cover":return ua(r,e);case"climate":return da(r,e);case"media":return ha(r,e);case"lock":case"camera":return Vt(r,e.state);case"binary":return pa(r,e);case"sensor":return fa(r,e);default:return""}}var ma=(r,e,n)=>r.rooms.find(t=>t.points.length>=3&&H([e,n],t.points))??null;function Kn(r,e){return!r||e==null||e===1?r:{...r,level:Math.min(1.5,Math.max(.02,r.level*e))}}function ga(r,e,n){let t=M(n.entity_id),i=r.states[n.entity_id];if(!t||!i)return null;let o=ma(e,n.x,n.z),s=o?.area_id?r.areas?.[o.area_id]?.name:void 0,a=t==="camera";return{id:n.entity_id,floorId:e.id,roomId:o?.id??null,x:n.x,z:n.z,y:n.y??Ve(t,e.height,n.mount??null),lamp:t==="light"?n.mount??"ceiling":null,model:a?n.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:a?_a(r,n.entity_id):void 0,fov:n.fov??void 0,reach:n.reach??void 0,tilt:n.tilt??void 0,rotation:n.rotation??0,icon:n.icon?Bt(n.icon):gt(t),cone:a&&n.cone===!1?!1:void 0,name:n.name||T(r,n.entity_id,s),ownName:n.name||void 0,showName:!!n.show_name,text:X(r,i),active:_e(i),unavailable:D(i),glow:t==="light"?Kn(Be(i),n.glow_scale):null,show:n.marker??void 0,fixed:!!n.locked}}function Ti(r,e){return e.floors.flatMap(n=>n.placements.map(t=>ga(r,n,t)).filter(t=>t!==null))}function Un(r,e){let n=r.entities??{},t=n[e]?.device_id;if(!t)return[];let i=new Set(["motion","occupancy","presence"]);return Object.values(n).filter(o=>o.device_id===t&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>i.has(String(r.states[o]?.attributes.device_class)))}var _a=(r,e)=>Un(r,e).some(n=>r.states[n]?.state==="on"),Di=r=>r.floors.flatMap(e=>e.placements.map(n=>n.entity_id));function oe(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Hi(r,e){return r.callService(e.split(".")[0],"toggle",{entity_id:e})}var se=j`
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
`,ye=j`
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
`;function Gt(r){return r?.themes?.darkMode===!1?"light":"dark"}var ba=4,va=3e3,wa=8,ya=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Ye=r=>f`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Nt(r)} />
  </svg>`,Kt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},jn=r=>f`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,qn=class extends q{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},va)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,n){return $(this.hass,e,n)}call(e,n,t){this.hass.callService(e,n,t)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return T(this.hass,e,this.areaName)}nameButton(e){return f`<button class="nf-rp-name" title=${this.t("details")} @click=${()=>oe(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,n,t){let i=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||t()};return f`<button
      class="nf-switch"
      role="switch"
      aria-checked=${n?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${D(e)}
      @click=${i}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return g;let n=G(this.hass,e.area_id),t=this.memo,{shown:i,more:o}=t&&t.entities===this.hass.entities&&t.floor===this.floor&&t.room===e?t:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?xi(this.hass,this.floor,e):{shown:n,more:[]}},s=Pn(this.hass,o).map(w=>w.primary),a=s.length,l=this._showAll?[...i,...s]:i,c=w=>l.filter(z=>w.includes(M(z))).map(z=>this.hass.states[z]),u=c(["light"]),d=c(["cover"]),h=c(["climate"]),_=c(["media"]),b=c(["switch","fan","lock"]),p=c(["sensor","binary"]),x=c(["camera"]);this.hasCameras=x.length>0;let m=c(["scene","script"]),k=this.facts(h),y=u.filter(w=>w.state==="on");return f`<section class="nf-rp" aria-label=${e.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${k.length?f`<p class="nf-rp-facts">${k.join(" \xB7 ")}</p>`:g}
        </div>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body">
        ${e.area_id?l.length?g:f`<p class="nf-rp-note">${this.t("panel_empty")}</p>`:f`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`}
        ${u.length?this.section("panel_lights",u.map(w=>this.lightRow(w)),f`${y.length<u.length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:u.filter(w=>!D(w)).map(w=>w.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:g}${y.length?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(w=>w.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:g}`):g}
        ${d.length?this.section("panel_covers",d.map(w=>this.coverRow(w)),d.length>1?f`<button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:d.filter(w=>!D(w)).map(w=>w.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:d.filter(w=>!D(w)).map(w=>w.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:g):g}
        ${h.length?this.section("panel_climate",h.map(w=>this.climateRow(w))):g}
        ${_.length?this.section("panel_media",_.map(w=>this.mediaRow(w))):g}
        ${b.length?this.section("panel_switches",b.map(w=>this.switchRow(w))):g}
        ${x.length?this.section("panel_cameras",x.map(w=>this.cameraTile(w))):g}
        ${p.length?this.section("panel_sensors",p.map(w=>this.sensorRow(w))):g}
        ${m.length?this.section("panel_scenes",[f`<div class="nf-rp-scenes">
                  ${m.map(w=>f`<button
                      class="nf-btn"
                      ?disabled=${D(w)}
                      @click=${()=>this.call(M(w.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:w.entity_id})}
                    >
                      ${this.name(w.entity_id)}
                    </button>`)}
                </div>`]):g}
        ${a?f`<button class="nf-btn nf-rp-small nf-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:g}
      </div>
    </section>`}facts(e){let n=[],t=this.room,i=(l,c)=>{let u=be(this.hass,this.floor,t,l);if(u===null)return null;if(l==="temperature")return`${V(this.hass,Ge(this.hass,u),1)} ${ie(this.hass)}`;let d=On(this.hass,this.floor,t,l)[0],h=this.hass.states[d]?.attributes.unit_of_measurement??c;return`${V(this.hass,u,1)} ${h}`},o=e.find(l=>typeof l.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?n.push(s):o&&t.climate?.temperature!=="none"&&n.push(`${V(this.hass,o.attributes.current_temperature,1)} ${ie(this.hass)}`);let a=i("humidity","%");return a&&n.push(a),n}section(e,n,t=g){return f`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(e)}</h3>${t}</div>
      ${n}
    </div>`}lightRow(e){let n=e.attributes,t=e.state==="on",i=n.supported_color_modes??[],o=i.some(h=>h!=="onoff"),s=i.includes("color_temp"),a=i.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof n.brightness=="number"?Math.round(n.brightness/255*100):100,c=n.min_color_temp_kelvin??2200,u=n.max_color_temp_kelvin??6500,d=e.entity_id;return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t?"nf-rp-on":""}">${Ye("light")}</span>
      ${this.nameButton(d)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,t,()=>this.call("light","toggle",{entity_id:d}))}
      ${t&&o?f`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(h.target.value)})}
          /></label>`:g}
      ${t&&s?f`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${u}
              step="50"
              .value=${String(n.color_temp_kelvin??c)}
              @change=${h=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:g}
      ${t&&a?f`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${ya.map(h=>f`<button
                class="nf-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:h})}
              ></button>`)}
          </div>`:g}
    </div>`}coverRow(e){let n=e.attributes,t=n.supported_features??0,i=e.entity_id,o=D(e);return f`<div class="nf-rp-row">
      <span class="nf-rp-icon">${Ye("cover")}</span>
      ${this.nameButton(i)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","open_cover",{entity_id:i})}>${this.t("cover_open")}</button>
        ${t&wa?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","stop_cover",{entity_id:i})}>${this.t("cover_stop")}</button>`:g}
        <button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.askFor(i)&&this.call("cover","close_cover",{entity_id:i})}>${this.t("cover_close")}</button>
      </div>
      ${t&ba&&typeof n.current_position=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(n.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:i,position:Number(s.target.value)})}
          /></label>`:g}
      ${t&128&&typeof n.current_tilt_position=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${o}
              .value=${String(n.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:Number(s.target.value)})}
          /></label>`:t&48?f`<div class="nf-rp-buttons">
              ${t&16?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:g}
              ${t&32?f`<button class="nf-btn nf-rp-small" ?disabled=${o} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:g}
            </div>`:g}
    </div>`}climateRow(e){let n=e.attributes,t=e.entity_id,i=typeof n.temperature=="number"?n.temperature:null,o=n.target_temp_step??.5,s=n.min_temp??5,a=n.max_temp??30,l=n.hvac_modes??[],c=u=>this.call("climate","set_temperature",{entity_id:t,temperature:Math.min(a,Math.max(s,Math.round(u/o)*o))});return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n.hvac_action==="heating"?"nf-rp-on":""}">${Ye("climate")}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${i!==null?f`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${()=>c(i-o)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${V(this.hass,i,1)} ${ie(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${()=>c(i+o)}>+</button>
          </div>`:g}
      ${l.length>1?f`<div class="nf-rp-chips">
            ${l.map(u=>f`<button
                class="nf-chip"
                aria-pressed=${e.state===u}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:t,hvac_mode:u})}
              >
                ${this.stateLabel(u)}
              </button>`)}
          </div>`:g}
    </div>`}stateOf(e,n=X(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let t=M(e.entity_id);return e.state==="unknown"&&t!=="sensor"&&t!=="binary"?"":n}stateLabel(e){let n=`state_${e}`,t=this.t(n);return t===n?e:t}mediaRow(e){let n=e.attributes,t=e.entity_id,i=D(e)||e.state==="off",o=[n.media_title,n.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${e.state==="playing"?"nf-rp-on":""}">${Ye("media")}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${o?f`<p class="nf-rp-media nf-rp-wide">${o}</p>`:g}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:t})}>
          ${jn(Kt.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${D(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:t})}>
          ${jn(e.state==="playing"?Kt.pause:Kt.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:t})}>
          ${jn(Kt.next)}
        </button>
      </div>
      ${typeof n.volume_level=="number"?f`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(n.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:t,volume_level:Number(s.target.value)/100})}
          /></label>`:g}
    </div>`}switchRow(e){let n=e.entity_id,t=M(n),i=n.slice(0,n.indexOf(".")),o=t==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>t==="lock"?this.call("lock",o?"lock":"unlock",{entity_id:n}):this.call(i,"toggle",{entity_id:n});return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${o?"nf-rp-on":""}">${Ye(t)}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,o,s)}
    </div>`}cameraTile(e){let n=e.attributes.entity_picture,t=n&&!D(e)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}nf=${this._tick}`:null,i=this.floor?.placements.some(o=>o.entity_id===e.entity_id);return f`<div class="nf-rp-camera-wrap">
      <button class="nf-rp-camera" title=${this.t("camera_live")} @click=${()=>oe(this,e.entity_id)}>
        ${t?f`<img src=${t} alt=${this.name(e.entity_id)} loading="lazy" />`:f`<span class="nf-rp-note">${X(this.hass,e)}</span>`}
        <span class="nf-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?f`<button
            class="nf-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:g}
    </div>`}sensorRow(e){let n=M(e.entity_id),t=n==="binary"&&e.state==="on";return f`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t?"nf-rp-on":""}">${Ye(n)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[se,ye,j`
      :host {
        display: block;
      }
      .nf-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 18px;
        box-shadow: var(--nf-shadow);
        overflow: hidden;
      }
      .nf-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      h2 {
        margin: 0;
        font: 700 21px var(--nf-title-font);
        letter-spacing: -0.01em;
      }
      .nf-rp-facts {
        margin: 2px 0 0;
        color: var(--nf-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .nf-rp-close {
          width: 40px;
          height: 40px;
        }
        .nf-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .nf-rp-small {
          min-height: 36px;
        }
      }
      .nf-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: color-mix(in srgb, var(--nf-text) 6%, transparent);
        color: var(--nf-text);
        cursor: pointer;
      }
      .nf-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .nf-rp-note {
        color: var(--nf-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .nf-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--nf-muted);
      }
      .nf-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--nf-line);
      }
      .nf-rp-row:last-child {
        border-bottom: none;
      }
      .nf-rp-row > :nth-child(n + 5),
      .nf-rp-row > .nf-rp-wide {
        grid-column: 2 / -1;
      }
      .nf-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--nf-muted);
        background: color-mix(in srgb, var(--nf-soft) 12%, transparent);
      }
      .nf-rp-on {
        color: #2a1a00;
        background: var(--nf-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .nf-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--nf-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .nf-rp-state {
        font-size: 12.5px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-rp-row > .nf-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .nf-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: color-mix(in srgb, var(--nf-text) 10%, transparent);
        cursor: pointer;
      }
      .nf-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .nf-switch[aria-checked="true"] {
        background: var(--nf-warm);
      }
      .nf-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .nf-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .nf-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-rp-slider input {
        width: 100%;
        accent-color: var(--nf-accent);
      }
      .nf-rp-ct input {
        accent-color: var(--nf-warm);
      }
      .nf-rp-swatches,
      .nf-rp-buttons,
      .nf-rp-chips,
      .nf-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nf-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid color-mix(in srgb, var(--nf-text) 20%, transparent);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .nf-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--nf-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .nf-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .nf-rp-camera-wrap {
        position: relative;
      }
      .nf-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--nf-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--nf-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .nf-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--nf-text);
        font-size: 12px;
        font-weight: 600;
      }
      .nf-rp-more {
        justify-self: start;
      }
      .nf-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .nf-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .nf-rp-stepper small {
        color: var(--nf-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .nf-rp-stepper .nf-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .nf-rp-chips .nf-chip {
        box-shadow: none;
        border: 1px solid var(--nf-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .nf-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--nf-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("nf-room-panel")||customElements.define("nf-room-panel",qn);function _t(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(n=>n.startsWith("weather.")).sort()[0]??null}var xa=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),ka=new Map([["smoke","smoke"],["gas","gas"],["carbon_monoxide","co"],["moisture","water"]]),Ii=(r,e)=>{if(e.startsWith("binary_sensor."))return ka.get(String(r.states[e]?.attributes.device_class))};function Ci(r,e,n){let t=[];for(let o of e.floors)for(let s of o.rooms){let a=G(r,s.area_id).filter(l=>Ii(r,l));a.length>0&&t.push({floorId:o.id,roomId:s.id,sensors:a})}let i=e.settings.rain_warning!==!1;return{rooms:t,alarms:Object.keys(r.states).filter(o=>o.startsWith("alarm_control_panel.")),weather:i?_t(r,n??e.settings.weather_entity):null}}function Pi(r){let e=r.rooms.flatMap(n=>n.sensors).concat(r.alarms);return r.weather&&e.push(r.weather),e}function Sa(r,e){let n=[];for(let{floorId:t,roomId:i,sensors:o}of e.rooms)for(let s of o){let a=Ii(r,s);a&&r.states[s]?.state==="on"&&n.push({kind:a,entity:s,roomId:i,floorId:t})}return n}var $a=(r,e)=>{let n=ve(r,e,"window");return Math.max(n.open,n.tilt,n.open2,n.tilt2)>=.5};function Ma(r,e,n,t){let i=n.weather?r.states[n.weather]?.state:void 0;if(!i||!xa.has(i))return[];let o=[];for(let s of e.floors)for(let a of s.openings){let l=t.get(a.id);a.type!=="window"||!l||!$a(r,l)||o.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}return o}function Ea(r,e){let n=[];for(let t of e.alarms){let i=r.states[t]?.state;i==="triggered"&&n.push({kind:"alarm",entity:t,roomId:null,floorId:null}),i==="pending"&&n.push({kind:"alarm_pending",entity:t,roomId:null,floorId:null})}return n}function Oi(r,e,n,t){return[...Sa(r,n),...Ma(r,e,n,t),...Ea(r,n)]}var Aa={smoke:[1,.2,.25],gas:[1,.2,.25],co:[1,.2,.25],alarm:[1,.2,.25],water:[.2,.6,1],window_rain:[.35,.72,1],alarm_pending:[1,.62,.2]},Wi=r=>Aa[r];function Zn(r,e,n){let t=r?T(r,n.entity):n.entity,i=$(r,`alert_${n.kind}`,{name:t}),o=n.roomId===null?void 0:e.floors.flatMap(s=>s.rooms).find(s=>s.id===n.roomId);return o?`${o.name} \xB7 ${i}`:i}var K=(r,e)=>[r[0]-e[0],r[1]-e[1]],xe=(r,e)=>[r[0]+e[0],r[1]+e[1]],ae=(r,e)=>[r[0]*e,r[1]*e],ee=(r,e)=>r[0]*e[0]+r[1]*e[1],ke=(r,e)=>r[0]*e[1]-r[1]*e[0],pe=r=>Math.hypot(r[0],r[1]),Se=r=>{let e=pe(r)||1;return[r[0]/e,r[1]/e]},Yn=r=>[-r[1],r[0]],Qn=r=>[r[1],-r[0]];function Li(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function za(r,e){let n=r.map(t=>({...t}));for(let t of e){let i=n.find(o=>o.room_id===t.room_id&&o.edge===t.edge&&(Math.abs(o.t1-t.t0)<1e-6||Math.abs(t.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,t.t0),i.t1=Math.max(i.t1,t.t1)):n.push({...t})}return n}function Ra(r,e,n){if(r.a===e.b)return!1;let t=Se(K(n[r.b],n[r.a])),i=Se(K(n[e.b],n[e.a]));return Math.abs(ke(t,i))>1e-6||ee(t,i)<=0||r.free||e.free?!1:r.height===e.height&&r.exterior===e.exterior&&r.roomLeft===e.roomLeft&&r.roomRight===e.roomRight&&Math.abs(r.left-e.left)<=1e-9&&Math.abs(r.right-e.right)<=1e-9}function Ni(r,e,n=new Set){let t=r.slice();for(;;){let i=new Map;t.forEach((s,a)=>{for(let l of[s.a,s.b])i.set(l,[...i.get(l)??[],a])});let o=null;for(let[s,a]of i){if(a.length!==2||n.has(s))continue;let l=t[a[0]].b===s?t[a[0]]:Li(t[a[0]]),c=t[a[1]].a===s?t[a[1]]:Li(t[a[1]]);if(!Ra(l,c,e))continue;let u={...l,b:c.b,sources:za(l.sources,c.sources)};o=[...t.filter((d,h)=>h!==a[0]&&h!==a[1]),u];break}if(!o)return t;t=o}}function Bi(r,e){let n=new Map;r.forEach((i,o)=>{let s=Se(K(e[i.b],e[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:ae(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)n.set(l,[...n.get(l)??[],c])});let t=new Map;for(let[i,o]of n){let s=e[i];o.sort((l,c)=>l.angle-c.angle);for(let l of o)t.set(l.key,{left:xe(s,ae(Yn(l.d),l.left)),right:xe(s,ae(Qn(l.d),l.right))});if(o.length<2)continue;let a=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;o.forEach((l,c)=>{let u=o[(c+1)%o.length],d=xe(s,ae(Yn(l.d),l.left)),h=xe(s,ae(Qn(u.d),u.right)),_=ke(l.d,u.d);if(Math.abs(_)<1e-4)return;let b=xe(d,ae(l.d,ke(K(h,d),u.d)/_));pe(K(b,s))>a||(t.get(l.key).left=b,t.get(u.key).right=b)})}return t}function Vi(r,e){let n=r.filter((t,i)=>pe(K(t,r[(i+1)%r.length]))>e);for(;;){if(n.length<=3)return n;let t=n.findIndex((i,o)=>{let s=n[(o+n.length-1)%n.length],a=n[(o+1)%n.length],[l,c]=[K(i,s),K(a,i)];return Math.abs(ke(Se(l),Se(c)))<1e-7&&ee(l,c)>0});if(t===-1)return n;n=n.filter((i,o)=>o!==t)}}function Fa(r){let e=[];return{points:e,idOf(n){let t=e.findIndex(i=>Math.abs(i[0]-n[0])<=r&&Math.abs(i[1]-n[1])<=r);return t>=0?t:(e.push([n[0],n[1]]),e.length-1)}}}function Ta(r,e){let n=[];for(let t of r){let i=t.points;if(i.length<3||Math.abs(We(i))<1e-6)continue;let o=We(i)>0,s=i.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&n.push(o?{u:a,v:c,room:t.id,edge:l,forward:!0}:{u:c,v:a,room:t.id,edge:l,forward:!1})})}return n}function Da(r,e,n){let t=[];for(let i of r){let[o,s]=[e[i.u],e[i.v]],a=K(s,o),l=pe(a),c=ae(a,1/l),u=e.map((h,_)=>({id:_,rel:K(h,o)})).filter(({id:h,rel:_})=>h!==i.u&&h!==i.v&&ee(_,c)>n&&ee(_,c)<l-n&&Math.abs(ke(c,_))<=n).map(({id:h,rel:_})=>({t:ee(_,c),id:h})).sort((h,_)=>h.t-_.t),d=[{t:0,id:i.u},...u,{t:l,id:i.v}];for(let h=0;h+1<d.length;h++){let[_,b]=[d[h],d[h+1]];t.push({u:_.id,v:b.id,room:i.room,edge:i.edge,t0:i.forward?_.t:l-b.t,t1:i.forward?b.t:l-_.t})}}return t}var Gi=r=>({room_id:r.room,edge:r.edge,t0:r.t0,t1:r.t1});function Ha(r,e){let n=new Map(r.map(o=>[o.id,o])),t=new Map;for(let o of e){let s=`${o.room}:${o.edge}`;t.set(s,[...t.get(s)??[],o.t0].sort((a,l)=>a-l))}let i=o=>{let s=n.get(o.room)?.wall_heights?.[o.edge];return Array.isArray(s)?s[(t.get(`${o.room}:${o.edge}`)??[]).indexOf(o.t0)]??null:s};return{heightOf(o){let s=o.map(i).filter(a=>typeof a=="number"&&a>0);return s.length?Math.min(...s):void 0},thicknessOf(o){let s=o.map(a=>n.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return s.length?Math.max(...s):void 0},hasNoWall:o=>o.some(s=>i(s)===0)}}function Ia(r,e,n,t){let i=Ha(e,r),o=new Map;for(let l of r){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;o.set(c,[...o.get(c)??[],l])}let s=[],a=[];for(let l of o.values()){let c=l[0],u=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==u&&h.room!==c.room&&t.push(`overlap:${c.room}:${h.room}`);let d=u?[c,u]:[c];if(i.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let h=i.thicknessOf(d)??n.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(Gi),height:i.heightOf(d)})}else s.push({a:c.u,b:c.v,left:0,right:i.thicknessOf(d)??n.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Gi(c)],height:i.heightOf(d)})}return{drafts:s,open:a}}function Ca(r,e){let n=t=>Se(K(e[t.b],e[t.a]));for(let t of r){if(t.exterior||t.free)continue;let i=new Set;for(let s of[t.a,t.b])for(let a of r)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(ke(n(t),n(a)))>1e-6||(a.roomLeft===t.roomLeft?i.add("left"):a.roomLeft===t.roomRight&&i.add("right"));if(i.size!==1)continue;let o=t.left+t.right;[t.left,t.right]=i.has("left")?[0,o]:[o,0]}}var Pa=(r,e)=>{let n=o=>Math.round(o*100),[t,i]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${n(t[0])}_${n(t[1])}_${n(i[0])}_${n(i[1])}`};function Ut(r,e,n=[]){let t=e.eps??.005,i=[],o=Fa(t),s=Ta(r,o),a=n.filter(m=>Math.hypot(m.b[0]-m.a[0],m.b[1]-m.a[1])>.05),l=a.map(m=>[o.idOf(m.a),o.idOf(m.b)]),c=new Set;for(let m of r){let k=m.points;k.length<3||(m.wall_splits??[]).forEach((y,w)=>{if(!y||w>=k.length)return;let z=k[w],R=K(k[(w+1)%k.length],z),I=pe(R);for(let L of y)L>t&&L<I-t&&c.add(o.idOf(xe(z,ae(R,L/I))))})}let u=Da(s,o.points,t),{drafts:d,open:h}=Ia(u,r,e,i);Ca(d,o.points);let _=d;a.forEach((m,k)=>{let[y,w]=l[k];if(y===w)return;let z=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],R=r.find(L=>L.points.length>=3&&H(z,L.points))?.id??null,I=(m.thickness??e.interior)/2;_.push({free:m.id,a:y,b:w,left:I,right:I,exterior:!1,roomLeft:R,roomRight:R,sources:[],height:typeof m.height=="number"&&m.height>0?m.height:void 0})});let b=Ni(_,o.points,c),p=Bi(b,o.points);return{walls:b.map((m,k)=>{let[y,w]=[o.points[m.a],o.points[m.b]],[z,R]=[p.get(`${k}:a`),p.get(`${k}:b`)],I=Vi([z.right,R.left,w,R.right,z.left,y],1e-6);return{id:Pa(y,w),a:[y[0],y[1]],b:[w[0],w[1]],left:m.left,right:m.right,exterior:m.exterior,roomLeft:m.roomLeft,roomRight:m.roomRight,sources:m.sources,footprint:I,...m.free?{free:m.free}:{},...m.height!==void 0?{height:m.height}:{}}}),warnings:[...new Set(i)],open:h}}var jt=r=>r&&r!=="none"?r:null,qt=(r,e)=>{e&&!r.includes(e)&&r.push(e)};function Zt(r,e=n=>jt(n.power)){let n={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let t of r.floors.flatMap(i=>i.furniture)){let i=e(t);if(t.type==="meter")n.grid??=i,n.gridExport??=jt(t.export);else if(t.type==="inverter")qt(n.solar,i);else if(t.type==="home_battery"){let o=jt(t.charge);qt(n.battery,i),qt(n.charge,o),qt(n.soc,jt(t.soc)),(i||o)&&n.batteries.push({power:i,charge:o})}}return n}function Y(r,e=!1){let n=r?Number(r.state):NaN;if(!Number.isFinite(n))return null;let t={kW:1e3,MW:1e6}[String(r.attributes.unit_of_measurement??"W")]??1;return e?-n*t:n*t}var Oa=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power";function Jn(r,e){if(Oa(r,e))return e;let n=r.entities?.[e]?.device_id;if(!n)return null;let t=Cn(r,n),i=t?Ke(r,e):null,o=Pt(r,n).filter(s=>s!==e);return(t?o.find(s=>i!==null&&Ke(r,s)===i):o[0])??null}function Yt(r,e){let{grid:n,solar:t,battery:i}=e.energy,o=new Set([n,t,i].filter(a=>!!a)),s=[];for(let a of e.floors)for(let l of a.placements){let c=Jn(r,l.entity_id);!c||o.has(c)||(o.add(c),s.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,Y(r.states[c])??0)}))}return s}var Ki=r=>{let e=r.filter(n=>n!==null);return e.length?e.reduce((n,t)=>n+t,0):null};function Wa(r,e,n){let t=e.grid??n.grid,i=t?Y(r.states[t],e.grid_invert):null;if(!e.grid&&n.gridExport){let o=Math.max(0,Y(r.states[n.gridExport])??0);return Math.max(0,i??0)-o}return i}function La(r,e,n){return e.solar?Y(r.states[e.solar]):n.solar.length?Ki(n.solar.map(t=>Y(r.states[t]))):null}function Na(r,e,n){return e.battery?Y(r.states[e.battery],e.battery_invert):Ki(n.batteries.map(t=>t.charge?(t.power?Math.max(0,Y(r.states[t.power])??0):0)-Math.max(0,Y(r.states[t.charge])??0):t.power?Y(r.states[t.power],e.battery_invert):null))}function Qt(r,e,n,t=Zt(e)){let i=e.energy,o=Wa(r,i,t),s=La(r,i,t),a=Na(r,i,t),l=(i.battery_soc?[i.battery_soc]:t.soc).map(_=>Number(r.states[_]?.state)).filter(Number.isFinite),c=l.length?l.reduce((_,b)=>_+b,0)/l.length:null,u=i.tariff?r.states[i.tariff]:void 0,d=Number(u?.state),h=i.consumption?Y(r.states[i.consumption]):null;return h===null&&(o!==null||s!==null||a!==null)&&(h=(o??0)+Math.max(0,s??0)+(a??0)),h===null&&n.length>0&&(h=n.reduce((_,b)=>_+b.power,0)),{grid:o,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)}}var Xn=["neon","blueprint","day"],bt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Jt={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[16,[.2,.45,1]],[20,[.15,.85,.75]],[22.5,[.95,.8,.3]],[26,[1,.28,.18]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[.95,.6,.2]],[45,[.3,.88,.5]],[60,[.2,.78,1]],[75,[.32,.4,.98]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.88,.5]],[800,[.98,.84,.3]],[1200,[1,.5,.2]],[1600,[.98,.25,.25]]]}},Ba=(r,e,n)=>[r[0]+(e[0]-r[0])*n,r[1]+(e[1]-r[1])*n,r[2]+(e[2]-r[2])*n];function Ui(r,e){let{stops:n}=Jt[r],t=n.findIndex(([l])=>e<=l);if(t===-1)return n[n.length-1][1];if(t===0)return n[0][1];let[i,o]=n[t-1],[s,a]=n[t];return Ba(o,a,(e-i)/(s-i))}function ji(r,e,n){let t=new Map;for(let i of e.floors)for(let o of i.rooms){let s=be(r,i,o,n);s!==null&&t.set(o.id,s)}return t}function qi(r){let{stops:e}=Jt[r],n=e[0][0],t=e[e.length-1][0]-n;return`linear-gradient(90deg, ${e.map(([o,s])=>`rgb(${s.map(a=>Math.round(a*255)).join(",")}) ${Math.round((o-n)/t*100)}%`).join(", ")})`}function $e(r,e){if(!Mn(e))return $(r,`furn_${e}`);let n=Q(e);return n?Zr(n,r?.language??navigator.language):$(r,"pack_missing_item")}var Va=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]),Xt=r=>r&&r!=="none"?r:null,Zi=r=>r.trim().toLowerCase();function Ga(r,e){let n=Zi(e);if(!n||!r.types)return null;let t=r.types.map(s=>({word:Zi(s.state),vehicle:s.vehicle})),i=t.find(s=>s.word===n),o=t.find(s=>s.word!==""&&n.includes(s.word));return(i??o)?.vehicle??null}function er(r,e){if(e.type!=="parking")return null;let n=Xt(e.entity);if(n!==null){let o=r.states[n]?.state;if(o===void 0||!Va.has(o.toLowerCase()))return null}let t=e.vehicle??null,i=Xt(e.type_entity);return i!==null&&e.types&&e.types.length>0&&(t=Ga(e,r.states[i]?.state??"")??t),t!==null&&Q(t)?t:null}function tr(r,e){let n=new Map;for(let t of e.floors.flatMap(i=>i.furniture)){let i=er(r,t);i&&n.set(t.id,i)}return n}function Yi(r){let e=[];for(let n of r.flatMap(t=>t.furniture))n.type==="parking"&&e.push(Xt(n.entity),Xt(n.type_entity));return e.filter(n=>n!==null)}function Qi(r,e){let n=Q(e);if(!n)return null;let t=r.scale??1,[i,o,s]=n.size.map(a=>a*t);return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:i,d:o,h:s,variant:r.variant??null,entity:null,power:null}}var Ka={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.4},cloudy:{cloud:.85},fog:{fog:.9,cloud:.5},rainy:{rain:.5,cloud:.8},pouring:{rain:1,cloud:1,wind:.3},"lightning-rainy":{rain:.75,cloud:1,lightning:!0,wind:.35},lightning:{cloud:.85,lightning:!0},hail:{hail:.8,rain:.3,cloud:1},snowy:{snow:.7,cloud:.85},"snowy-rainy":{snow:.45,rain:.3,cloud:.95},windy:{wind:.7,cloud:.25},"windy-variant":{wind:.7,cloud:.65},exceptional:{cloud:.6,wind:.5}},Qe=r=>typeof r=="number"&&Number.isFinite(r)?r:typeof r=="string"&&r.trim()!==""&&Number.isFinite(Number(r))?Number(r):null,en=r=>Math.min(1,Math.max(0,r));function Ji(r,e){switch(e){case"m/s":return r*3.6;case"mph":return r*1.609;case"kn":return r*1.852;case"ft/s":return r*1.097;default:return r}}function Ua(r){let e=Qe(r);if(e!==null)return(e%360+360)%360;if(typeof r!="string")return null;let t=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].indexOf(r.trim().toUpperCase().replace("O","E"));return t<0?null:t*22.5}function Xi(r,e){let n=e?r.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let t=Ka[n.state];if(!t)return null;let i=n.attributes,o={rain:t.rain??0,snow:t.snow??0,hail:t.hail??0,fog:t.fog??0,cloud:t.cloud??0,wind:t.wind??0,windFrom:Ua(i.wind_bearing),lightning:t.lightning??!1},s=Qe(i.cloud_coverage);s!==null&&(o.cloud=Math.max(en(s/100),o.rain||o.snow?.6:0));let a=Qe(i.wind_speed);a!==null&&(o.wind=Math.max(o.wind,en(Ji(a,i.wind_speed_unit)/70)));let l=Qe(i.wind_gust_speed);l!==null&&(o.wind=Math.max(o.wind,en(Ji(l,i.wind_speed_unit)/100)));let c=Qe(i.precipitation);if(c!==null&&c>0&&(o.rain>0||o.snow>0)){let _=en(.25+c/8);o.rain>0&&(o.rain=Math.max(o.rain*.6,_)),o.snow>0&&(o.snow=Math.max(o.snow*.6,_))}let u=Qe(i.temperature),d=i.temperature_unit??r.config?.unit_system?.temperature,h=u===null?null:d==="\xB0F"?(u-32)*5/9:u;return h!==null&&h<=.5&&o.rain>0&&o.snow===0&&(o.snow=o.rain*.6,o.rain*=.4),o}function eo(r,e){let n=new Set(e??["rain","snow","clouds","lightning","sky"]);return{...r,rain:n.has("rain")?r.rain:0,hail:n.has("rain")?r.hail:0,snow:n.has("snow")?r.snow:0,fog:n.has("fog")?r.fog:0,cloud:n.has("clouds")?r.cloud:0,lightning:n.has("lightning")&&r.lightning}}var nr=Math.PI/180,tn=r=>Math.tan(Math.min(80,Math.max(0,r))*nr);function to(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function Me(r){let{x0:e,x1:n,z0:t,z1:i}=to(r);return r.axis==="x"?{u0:e,u1:n,w:i-t,at:(o,s)=>[o,r.flip?i-s:t+s]}:{u0:t,u1:i,w:n-e,at:(o,s)=>[r.flip?n-s:e+s,o]}}var vt=Math.tan(30*nr);function no(r,e,n,t,i){let o=Math.min(r*.3,t>1e-6?2.4/t:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=e+o*t,l=n+s*i,c=Math.min(r-s,Math.max(o,(l-a+vt*(r-s+o))/(2*vt))),u=a+(c-o)*vt;return{vla:o,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=o?e+h*t:h<=c?a+(h-o)*vt:h<=r-s?l+(r-s-h)*vt:n+(r-h)*i}}function Je(r){let e=Me(r).w,[n,t]=[r.eave_a,r.eave_b],[i,o]=[tn(r.pitch_a),tn(r.pitch_b)];switch(r.shape){case"flat":case"parapet":return{vr:e/2,rh:n,y:()=>n};case"pent":return{vr:e,rh:n+e*i,y:s=>n+s*i};case"mansard":{let s=no(e,n,t,i,o);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=i+o>1e-6?Math.min(e,Math.max(0,(t-n+e*o)/(i+o))):e/2;return{vr:s,rh:n+s*i,y:a=>a<=s?n+a*i:t+(e-a)*o}}}}function rr(r,e,n){let t=Me(e),i=r.floors.flatMap(u=>u.rooms.filter(d=>d.points.length>=3&&u.elevation+u.height>e.base+.05)),o=u=>u.some(d=>i.some(h=>H(d,h.points))),s=.35,a=[.15,.5,.85].map(u=>t.u0+(t.u1-t.u0)*u),l=[.15,.5,.85].map(u=>t.w*u),c=u=>u?0:n;return{a:c(o(a.map(u=>t.at(u,-s)))),b:c(o(a.map(u=>t.at(u,t.w+s)))),u0:c(o(l.map(u=>t.at(t.u0-s,u)))),u1:c(o(l.map(u=>t.at(t.u1+s,u))))}}var Ee=Math.PI/180,fe=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]];var Xe=r=>Math.hypot(r[0],r[1],r[2]),Ie=r=>{let e=Xe(r)||1;return[r[0]/e,r[1]/e,r[2]/e]},so=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]];var lo=.25;function co(r,e,n,t,i,o,s){let a=i-n>=o-t,l=a?i-n:o-t;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[n,s,t],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?o-t:i-n,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function uo(r,e){let n=Ie(so(r,e));return n[1]<0?[-n[0],-n[1],-n[2]]:n}var ho=r=>{let e=Ie([-r[0],0,-r[2]]);return[e[0],e[2]]};function wt(r,e,n,t,i,o,s,a){let l=Ie(fe(i,t)),c=Ie(fe(o,t));return{key:r,section:e,side:n,flat:!1,o:t,eu:l,es:c,n:uo(l,c),lu:Xe(fe(i,t)),ls:Xe(fe(o,t)),pitch:s,span:a,facing:ho(c)}}function ao(r,e,n,t,i,o){let s=Xe(fe(i,t));if(s<.3)return null;let a=Ie(fe(i,t)),l=fe(o,t),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=Xe(u);if(d<.3)return null;let h=Ie(u),_=b=>{let p=Math.min(1,Math.max(0,b/d));return[c*p,s-(s-c)*p]};return{key:r,section:e,side:n,flat:!1,o:t,eu:a,es:h,n:uo(a,h),lu:s,ls:d,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/Ee,span:_,facing:ho(h)}}function Qa(r,e){let n=Me(r),t=Je(r),i=(k,y,w)=>{let[z,R]=n.at(k,y);return[z,w,R]},[o,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=n.u0-Math.max(0,e.u0),l=n.u1+Math.max(0,e.u1),c=l-a,u=t.y(-o),d=t.y(n.w+s);if(r.shape==="flat"||r.shape==="parapet"){let[k,y]=[n.at(a,-o),n.at(l,n.w+s)];return[co(r.id,r.id,Math.min(k[0],y[0]),Math.min(k[1],y[1]),Math.max(k[0],y[0]),Math.max(k[1],y[1]),r.eave_a+lo)]}if(r.shape==="pent")return[wt(`${r.id}:a`,r.id,"a",i(a,-o,u),i(l,-o,u),i(a,n.w+s,d),r.pitch_a,()=>[0,c])];let h=r.shape==="hip"||r.shape==="pyramid",_=(n.u1-n.u0)/2,b=r.shape==="pyramid"?_:h?Math.min(_,Math.min(t.vr,n.w-t.vr)||n.w/2):0,p=h?n.u0+b-a:0,x=h?l-(n.u1-b):0,m=[];if(t.vr>.3){let k=Math.hypot(t.vr+o,t.rh-u);m.push(wt(`${r.id}:a`,r.id,"a",i(a,-o,u),i(l,-o,u),i(a,t.vr,t.rh),r.pitch_a,y=>[p*(y/k),c-x*(y/k)]))}if(n.w-t.vr>.3){let k=Math.hypot(n.w+s-t.vr,t.rh-d);m.push(wt(`${r.id}:b`,r.id,"b",i(l,n.w+s,d),i(a,n.w+s,d),i(l,t.vr,t.rh),r.pitch_b,y=>[x*(y/k),c-p*(y/k)]))}if(h){let k=ao(`${r.id}:c`,r.id,"c",i(a,n.w+s,d),i(a,-o,u),i(n.u0+b,t.vr,t.rh)),y=ao(`${r.id}:d`,r.id,"d",i(l,-o,u),i(l,n.w+s,d),i(n.u1-b,t.vr,t.rh));m.push(...[k,y].filter(w=>w!==null))}return m}function nn(r){return r.floors.filter(n=>n.rooms.some(t=>t.points.length>=3)).sort((n,t)=>t.elevation-n.elevation)[0]??null}function rn(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>Qa(y,rr(r,y,y.overhang??e.overhang)));let n=nn(r);if(!n)return[];let t=n.rooms.flatMap(y=>y.points.map(w=>w[0])),i=n.rooms.flatMap(y=>y.points.map(w=>w[1])),o=r.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...t)-o,Math.max(...t)+o],[l,c]=[Math.min(...i)-o,Math.max(...i)+o],u=n.elevation+n.height;if(e.type==="flat")return[co("main",null,s,l,a,c,u+lo)];let d=a-s>=c-l,h=e.ridge==="short"?!d:d,_=(h?c-l:a-s)/2,b=_*Math.tan(e.pitch*Ee),p=(y,w,z)=>h?[y,u+z,(l+c)/2+w]:[(s+a)/2+w,u+z,y],[x,m]=h?[s,a]:[l,c],k=()=>[0,m-x];return[wt("main:a",null,"a",p(x,-_,0),p(m,-_,0),p(x,0,b),e.pitch,k),wt("main:b",null,"b",p(x,_,0),p(m,_,0),p(x,0,b),e.pitch,k)]}function yt(r,e){let n=[];for(let t of r.floors.filter(i=>!e||i.id===e)){let{walls:i}=Ut(t.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},t.walls??[]);for(let o of i){if(!o.exterior&&!o.free)continue;let[s,a]=[o.b[0]-o.a[0],o.b[1]-o.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(t.height,o.height??t.height),h=(_,b,p,x)=>n.push({key:_,section:null,side:"top",flat:!1,o:b,eu:p,es:[0,1,0],n:x,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:{floorId:t.id}});h(`wall:${t.id}:${o.id}`,[o.a[0]+c*o.right,t.elevation,o.a[1]+u*o.right],[s/l,0,a/l],[c,0,u]),o.free&&h(`wall:${t.id}:${o.id}:back`,[o.b[0]-c*o.left,t.elevation,o.b[1]-u*o.left],[-s/l,0,-a/l],[-c,0,-u])}}return n}var et="ground";function xt(r){let e=r.floors.filter(n=>n.rooms.some(t=>t.points.length>=3)).sort((n,t)=>n.elevation-t.elevation);return e.find(n=>n.elevation>-.5)??e[0]??r.floors[0]??null}function ir(r,e){let n=(e.rotation??0)*Ee,t=[Math.cos(n),0,Math.sin(n)],i=[-Math.sin(n),0,Math.cos(n)],o=xt(r),s=t[0]*e.u+i[0]*e.v,a=t[2]*e.u+i[2]*e.v,l=o?o.elevation+(e.base!=null?e.base:dt(o,s,a)):e.base??0;return{key:et,section:null,side:"top",flat:!0,o:[0,l,0],eu:t,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function or(r,e,n=rn(r)){return e.face===et?ir(r,e):e.face.startsWith("wall:")?yt(r,e.face.split(":")[1]).find(t=>t.key===e.face)??null:n.find(t=>t.key===e.face)??null}var sr=1.13,ar=1.72,kt=.025,Ae=.07;function on(r){let e=r.module_w||sr,n=r.module_h||ar;return r.portrait===!1?[n,e]:[e,n]}function po(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function fo(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*Ee:r.wall?Math.min(90,Math.max(0,e.tilt??0))*Ee:0}function lr(r,e){let[,n]=on(e),t=fo(r,e);return r.wall?n*Math.cos(t)+kt:r.flat?n*Math.cos(t)+Math.max(.3,2*n*Math.sin(t)):n+kt}function St(r,e,n=!1){let[t,i]=on(e),o=fo(r,e),s=i*Math.cos(o),a=lr(r,e),l=po(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=(b,p,x)=>[0,1,2].map(m=>r.o[m]+r.eu[m]*b+r.es[m]*p+r.n[m]*x),h=(b,p)=>{if(r.unbounded)return!0;if(p<-1e-6||p>r.ls+1e-6)return!1;let[x,m]=r.span(p);return b>=x-1e-6&&b<=m+1e-6},_=[];return l.forEach((b,p)=>{let x=e.align==="right"?c-b:e.align==="center"?(c-b)/2:0;for(let m=0;m<b;m++){let k=`${p}:${m}`,y=u.has(k);if(y&&!n)continue;let w=e.u+(m+x)*(t+kt),z=w+t,R=e.v+p*a,I=R+(r.flat||r.wall?s:i);if([[w,R],[z,R],[z,I],[w,I]].every(([L,F])=>h(L,F)))if(r.wall&&o>.001){let L=Ae+i*Math.sin(o),[F,O]=e.flip?[L,Ae]:[Ae,L],N=[d(w,R,F),d(z,R,F),d(z,I,O),d(w,I,O)],Z=e.flip?R:I;_.push({corners:N,posts:[w+.05,z-.05].map(te=>[d(te,Z,0),d(te,Z,L)]),cell:k,skipped:y})}else if(!r.flat)_.push({corners:[d(w,R,Ae),d(z,R,Ae),d(z,I,Ae),d(w,I,Ae)],posts:[],cell:k,skipped:y});else{let F=.15+i*Math.sin(o),[O,N]=e.flip?[I,R]:[R,I],Z=[d(w,O,.15),d(z,O,.15),d(z,N,F),d(w,N,F)],te=[w+.05,z-.05].flatMap(re=>[[d(re,O,0),d(re,O,.15)],[d(re,N,0),d(re,N,F)]]);_.push({corners:Z,posts:te,cell:k,skipped:y})}}}),_}var Ce={solar:[255,196,46],battery:[74,222,128],import:[248,96,120],export:[56,220,245],house:[150,170,255],wallbox:[80,175,255]},tt=15;function nt(r,e){let n=[];for(let t of r.floors)for(let i of t.furniture)i.type===e&&n.push({id:i.id,floorId:t.id,x:i.x,z:i.z,y:Math.max(.4,Math.min(1.4,i.h*.8))});return n}function rl(r){if(!r?.rooms.length)return null;let e=0,n=0,t=0;for(let i of r.rooms)for(let[o,s]of i.points)e+=o,n+=s,t++;return t?{floorId:r.id,x:e/t,z:n/t,y:1}:null}function sn(r){return nt(r,"meter")[0]??nt(r,"inverter")[0]??rl(xt(r))}function il(r,e){let n=nt(r,"grid_point")[0];if(n)return n;let t=r.floors.find(a=>a.id===e.floorId);if(!t?.rooms.length)return null;let i=1/0,o=-1/0,s=-1/0;for(let a of t.rooms)for(let[l,c]of a.points)i=Math.min(i,l),o=Math.max(o,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(i,Math.min(o,e.x)),z:s+3,y:.2}}var cr=r=>Math.max(1,r.rows*r.cols-(r.skip?.length??0));function ol(r,e,n){let t=e.settings.roof.solar??[],i=new Map,o=0,s=[];for(let c of t){let u=c.entity&&c.entity!=="none"?Y(r.states[c.entity]):null;u!==null?(i.set(c.id,Math.max(0,u)),o+=Math.max(0,u)):s.push(c)}let a=Math.max(0,(n??0)-o),l=s.reduce((c,u)=>c+cr(u),0);for(let c of s)i.set(c.id,l?a*cr(c)/l:0);return i}function sl(r,e){if(e.face===et)return xt(r)?.id??null;let n=/^wall:([^:]+):/.exec(e.face);return n?n[1]:nn(r)?.id??null}function mo(r,e,n=Yt(r,e)){let t=Qt(r,e,n),i=[],o=[],s=sn(e),a=t.consumption??0,l=t.grid===null||a<=0?null:Math.max(0,Math.min(1,1-Math.max(0,t.grid)/a));if(!s)return{arcs:i,sparks:o,summary:t,autarky:l};let c=nt(e,"inverter")[0]??s,u=[...rn(e),...yt(e)],d=ol(r,e,t.solar);for(let p of e.settings.roof.solar??[]){let x=or(e,p,u);if(!x)continue;let m=St(x,p);if(!m.length)continue;let k=d.get(p.id)??0,y=cr(p)*(p.wp??400),w=k>tt?Math.pow(Math.min(1,k/y),.6):0,z=sl(e,p);if(o.push({floorId:z,quads:m.map(N=>N.corners),level:w}),k<=tt)continue;let R=0,I=0,L=0;for(let N of m)for(let Z of N.corners)R+=Z[0],I+=Z[1],L+=Z[2];let F=m.length*4,O=e.floors.find(N=>N.id===z)?.elevation??0;i.push({key:`solar:${p.id}`,from:{floorId:z,x:R/F,y:I/F-O+.1,z:L/F},to:c,power:k,color:Ce.solar})}let h=nt(e,"home_battery")[0];if(h&&t.battery!==null&&Math.abs(t.battery)>tt){let p=t.battery>0;i.push({key:"battery",from:p?h:s,to:p?s:h,power:Math.abs(t.battery),color:Ce.battery})}c!==s&&(t.solar??0)>tt&&i.push({key:"inverter",from:c,to:s,power:t.solar??0,color:Ce.solar});let _=il(e,s);if(_&&t.grid!==null&&Math.abs(t.grid)>tt){let p=t.grid>0;i.push({key:"grid",from:p?_:s,to:p?s:_,power:Math.abs(t.grid),color:p?Ce.import:Ce.export})}let b=new Set(nt(e,"wallbox").map(p=>`${p.floorId}:${p.x.toFixed(1)}:${p.z.toFixed(1)}`));for(let p of n){if(p.power<=tt)continue;let x=p.wallbox||b.has(`${p.floorId}:${p.x.toFixed(1)}:${p.z.toFixed(1)}`);i.push({key:`use:${p.id}`,from:s,to:{floorId:p.floorId,x:p.x,z:p.z,y:.9},power:p.power,color:x?Ce.wallbox:Ce.house})}return{arcs:i,sparks:o,summary:t,autarky:l}}var J=r=>r&&r!=="none"?r:null,an=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},go=(r,e)=>r?.attributes?.[e],le=(r,...e)=>e.some(n=>r.includes(n));function al(r,e){if(!e)return[];let n=r.entities?.[e]?.device_id;return n?Object.values(r.entities??{}).filter(t=>t.device_id===n&&!t.hidden).map(t=>t.entity_id).filter(t=>r.states[t]):[e]}function ce(r,e,n,t){return e&&r.states[e]?e:n.find(i=>t(i,r.states[i]))??null}function _o(r,e){let n=e.car??{},t=J(n.device)??J(n.tracker)??J(e.entity),i=al(r,t);if(!i.length&&!J(n.soc))return null;let o=S=>S.split(".")[0],s=S=>String(go(S,"device_class")??""),a=S=>String(go(S,"unit_of_measurement")??""),l=ce(r,J(n.soc),i,(S,P)=>o(S)==="sensor"&&a(P)==="%"&&(s(P)==="battery"||le(S,"battery_level","soc","state_of_charge","ladezustand"))&&!le(S,"usable")),c=ce(r,J(n.range),i,(S,P)=>o(S)==="sensor"&&(s(P)==="distance"||le(S,"range","reichweite"))&&!le(S,"odometer","ideal","elevation","kilometerstand")),u=ce(r,null,i,(S,P)=>o(S)==="sensor"&&s(P)==="power"&&le(S,"charg","lade")),d=J(n.charging),h=ce(r,d&&o(d)==="binary_sensor"?d:null,i,(S,P)=>o(S)==="binary_sensor"&&(s(P)==="battery_charging"||le(S,"charging","charger","laden"))),_=ce(r,J(n.plugged),i,(S,P)=>o(S)==="binary_sensor"&&(s(P)==="plug"||le(S,"plug","cable","kabel"))),b=ce(r,J(n.lock),i,S=>o(S)==="lock"),p=ce(r,J(n.climate),i,S=>o(S)==="climate"),x=ce(r,d&&/^(switch|input_boolean)\./.test(d)?d:null,i,S=>o(S)==="switch"&&le(S,"charg","laden")&&!le(S,"port","klappe")),m=ce(r,J(n.tracker),i,S=>o(S)==="device_tracker")??(J(e.entity)?.startsWith("device_tracker.")?J(e.entity):null),k=ce(r,null,i,(S,P)=>o(S)==="sensor"&&s(P)==="temperature"&&le(S,"inside","innen","interior","cabin")),y=S=>S?r.states[S]:void 0,w=an(y(l)),z=y(c),R=null,I=y(u)??(d&&o(d)==="sensor"?y(d):void 0);if(I){let S=an(I);S!==null&&(R=Math.max(0,a(I).toLowerCase()==="kw"?S*1e3:S))}let F=(y(h)?.state??y(x)?.state)==="on"||R!==null&&R>50,O=y(_)?.state,N=y(b)?.state,Z=y(p),te=y(m),re=y(J(e.entity)),v=re?["on","home","true","present","occupied","detected","parked"].includes(re.state.toLowerCase()):te?.state==="home",E=te&&te.state!=="home"&&te.state!=="not_home"?te.state:null,W=E?String(y(`zone.${E}`)?.attributes.friendly_name??E):null;return{home:v,soc:w,range:an(z),rangeUnit:z&&a(z)||"km",chargingW:R,charging:F,plugged:O===void 0?null:O==="on",locked:N===void 0?null:N==="locked",climateOn:Z?Z.state!=="off"&&Z.state!=="unavailable":null,inside:an(y(k)),where:v?null:W,entities:{lock:b,climate:p,charge:x,tracker:m}}}function bo(r){return r===null?"#8aa0c8":r<20?"#f87171":r<50?"#facc15":"#4ade80"}function $t(r,e){let n=Math.abs(e);return n>=1e3?`${V(r,n/1e3,n>=1e4?1:2)} kW`:`${Math.round(n)} W`}function vo(r,e){let t=2*Math.PI*22;return f`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${He`<circle cx="27" cy="27" r=${22} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${22} stroke=${e} stroke-dasharray=${`${(t*Math.max(0,Math.min(1,r))).toFixed(1)} ${t.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`}function ll(r,e,n){let t=e.summary,i=a=>$(r,a),o=[];if(t.solar!==null&&o.push(f`<div class="live-row live-solar"><span>☀ ${i("energy_solar")}</span><b>${$t(r,t.solar)}</b></div>`),t.consumption!==null&&o.push(f`<div class="live-row live-house"><span>⌂ ${i("energy_consumption")}</span><b>${$t(r,t.consumption)}</b></div>`),t.battery!==null||t.soc!==null){let a=t.battery===null||Math.abs(t.battery)<15?"":t.battery>0?" \u2193":" \u2191";o.push(f`<div class="live-row live-battery"><span>▮ ${i("energy_battery")}${a}</span><b>${t.soc!==null?`${Math.round(t.soc)} %`:""}${t.battery!==null&&Math.abs(t.battery)>=15?` \xB7 ${$t(r,t.battery)}`:""}</b></div>`)}if(t.grid!==null){let a=t.grid<-15;o.push(f`<div class="live-row ${a?"live-export":"live-import"}"><span>⇄ ${i(a?"energy_grid_export":"energy_grid_import")}</span><b>${$t(r,t.grid)}</b></div>`)}let s=e.autarky;return f`<div class="live-card live-card-house" data-i=${n}>
    ${s!==null?f`<div class="live-own">${vo(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)} %</b><span>${i("live_autarky")}</span></div></div>`:g}
    <div class="live-rows">${o}</div>
  </div>`}function cl(r,e,n,t){let i=e.car,o=(u,d)=>$(r,u,d),s=bo(i.soc),a=i.home?i.charging?`\u26A1 ${o("live_car_charging")}${i.chargingW?` \xB7 ${$t(r,i.chargingW)}`:""}`:i.plugged?`\u{1F50C} ${o("live_car_plugged")}`:"":`${o("live_car_away")}${i.where?` \xB7 ${i.where}`:""}`,l=i.entities,c=(u,d,h,_)=>f`<button class="live-btn ${u?"live-on":""}" title=${d} aria-label=${d} aria-pressed=${u??!1} @click=${b=>(b.stopPropagation(),_())}>${h}</button>`;return f`<div class="live-card live-card-car ${i.charging?"live-charging":""} ${i.home?"":"live-away"}" data-i=${n} style=${`--live-soc:${s}`}>
    <div class="live-own">
      ${vo((i.soc??0)/100,s)}
      <div class="live-own-text"><b>${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b><span>${i.range!==null?`${Math.round(i.range)} ${i.rangeUnit}`:""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${a?f`<div class="live-status">${a}</div>`:g}
      ${i.inside!==null?f`<div class="live-status">🌡 ${V(r,i.inside,1)} °C</div>`:g}
      <div class="live-actions">
        ${l.lock?c(i.locked,o(i.locked?"live_car_unlock":"live_car_lock"),i.locked?"\u{1F512}":"\u{1F513}",()=>{i.locked&&!confirm(o("live_car_unlock_confirm",{name:e.name}))||t("lock",i.locked?"unlock":"lock",l.lock)}):g}
        ${l.climate?c(i.climateOn,o("live_car_climate"),"\u2744",()=>t(l.climate.split(".")[0],i.climateOn?"turn_off":"turn_on",l.climate)):g}
        ${l.charge&&i.home?c(i.charging,o("live_car_charge"),"\u26A1",()=>t(l.charge.split(".")[0],"toggle",l.charge)):g}
      </div>
    </div>
  </div>`}function ul(r,e,n,t){let i=e.media,o=l=>$(r,l),s=`rgb(${i.color.join(",")})`,a=(l,c,u)=>f`<button class="live-btn" title=${l} aria-label=${l} @click=${d=>(d.stopPropagation(),t("media_player",u,i.entity))}>${c}</button>`;return f`<div class="live-card live-card-media" data-i=${n} style=${`--live-soc:${s}`} @click=${l=>l.currentTarget.classList.toggle("live-open")}>
    ${i.picture?f`<img class="live-cover" src=${i.picture} alt="" loading="lazy" />`:f`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${i.title}>${i.title||i.name}</div>
      <div class="live-status">${i.artist||i.app||i.name}</div>
      <div class="live-actions">
        ${a(o("live_media_prev"),"\u23EE","media_previous_track")} ${a(o("live_media_playpause"),"\u23EF","media_play_pause")} ${a(o("live_media_next"),"\u23ED","media_next_track")}
        ${i.volume!==null?f`<input
              class="live-volume"
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(i.volume*100))}
              aria-label=${o("live_media_volume")}
              @click=${l=>l.stopPropagation()}
              @change=${l=>t("media_player","volume_set",i.entity,{volume_level:Number(l.target.value)/100})}
            />`:g}
      </div>
    </div>
  </div>`}function wo(r){let e=[...r.querySelectorAll(".live-card")].filter(i=>i.style.visibility!=="hidden"),n=[],t=e.map(i=>({el:i,x:Number(i.dataset.x),y:Number(i.dataset.y),w:i.offsetWidth,h:i.offsetHeight})).sort((i,o)=>o.y-i.y);for(let i of t){let o=i.y;for(let a=0;a<12;a++){let l={x0:i.x-i.w/2,x1:i.x+i.w/2,y0:o-i.h,y1:o},c=n.find(u=>l.x0<u.x1+6&&l.x1>u.x0-6&&l.y0<u.y1+6&&l.y1>u.y0-6);if(!c)break;o=c.y0-8}n.push({x0:i.x-i.w/2,x1:i.x+i.w/2,y0:o-i.h,y1:o});let s=i.y-o;i.el.style.transform=`translate(${Math.round(i.x)}px, ${Math.round(o)}px) translate(-50%, -100%)`,i.el.style.setProperty("--live-thread",`${Math.round(18+s)}px`)}}function yo(r,e,n){return e.length?f`<div class="live-cards">
    ${e.map((t,i)=>t.kind==="house"?ll(r,t,i):t.kind==="car"?cl(r,t,i,n):ul(r,t,i,n))}
  </div>`:g}var xo=j`
  .live-cards {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 2;
  }
  .live-card {
    position: absolute;
    left: 0;
    top: 0;
    visibility: hidden;
    pointer-events: auto;
    display: flex;
    gap: 12px;
    align-items: center;
    padding: 10px 14px;
    border-radius: calc(var(--nf-radius) + 4px);
    background: var(--nf-chrome);
    box-shadow: var(--nf-shadow);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: var(--nf-text);
    font-size: 12.5px;
    line-height: 1.35;
    white-space: nowrap;
    will-change: transform;
  }
  .live-card::after {
    /* a thin glowing thread down to the point the card belongs to */
    content: "";
    position: absolute;
    left: 50%;
    bottom: calc(-1 * var(--live-thread, 18px));
    width: 1px;
    height: var(--live-thread, 18px);
    background: linear-gradient(color-mix(in srgb, var(--nf-text) 45%, transparent), transparent);
  }
  .live-rows {
    display: grid;
    gap: 2px;
    min-width: 150px;
  }
  .live-row {
    display: flex;
    justify-content: space-between;
    gap: 14px;
  }
  .live-row span {
    opacity: 0.8;
  }
  .live-solar b {
    color: color-mix(in srgb, #ffd166 72%, var(--nf-text));
  }
  .live-battery b {
    color: color-mix(in srgb, #4ade80 72%, var(--nf-text));
  }
  .live-import b {
    color: color-mix(in srgb, #f87193 72%, var(--nf-text));
  }
  .live-export b {
    color: color-mix(in srgb, #38dcf5 72%, var(--nf-text));
  }
  .live-house b {
    color: color-mix(in srgb, #b6c2ff 72%, var(--nf-text));
  }
  .live-title {
    font-weight: 600;
    font-size: 13px;
  }
  .live-status {
    opacity: 0.85;
  }
  .live-actions {
    display: flex;
    gap: 6px;
    margin-top: 4px;
  }
  .live-btn {
    font: inherit;
    font-size: 14px;
    width: 32px;
    height: 28px;
    border-radius: 9px;
    border: none;
    background: var(--nf-fill);
    color: inherit;
    cursor: pointer;
  }
  .live-btn.live-on {
    background: color-mix(in srgb, var(--live-soc, #4ade80) 30%, transparent);
    border-color: var(--live-soc, #4ade80);
  }
  .live-card-car {
    border-color: color-mix(in srgb, var(--live-soc) 60%, transparent);
    box-shadow: 0 0 22px color-mix(in srgb, var(--live-soc) 30%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.06);
  }
  .live-card-car.live-charging {
    animation: live-charge 1.6s ease-in-out infinite;
  }
  @keyframes live-charge {
    50% {
      box-shadow: 0 0 34px color-mix(in srgb, var(--live-soc) 55%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.1);
    }
  }
  .live-card-car.live-away {
    opacity: 0.85;
    border-style: dashed;
  }
  /* phones: only the house and the car, the media cards would cover the rooms */
  .nf-narrow .live-card-media {
    display: none;
  }
  .live-card-media {
    border-color: color-mix(in srgb, var(--live-soc) 55%, transparent);
    box-shadow: 0 0 22px color-mix(in srgb, var(--live-soc) 28%, transparent), inset 0 0 18px rgba(120, 200, 255, 0.06);
  }
  .live-card-media .live-title {
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .live-card-media {
    cursor: pointer;
    padding: 7px 12px 7px 7px;
  }
  .live-card-media .live-actions {
    display: none;
  }
  .live-card-media.live-open .live-actions {
    display: flex;
  }
  .live-card-media.live-open {
    z-index: 5;
  }
  .live-cover {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 0 14px color-mix(in srgb, var(--live-soc) 40%, transparent);
  }
  .live-cover-none {
    display: grid;
    place-items: center;
    font-size: 24px;
    background: color-mix(in srgb, var(--live-soc) 25%, transparent);
  }
  .live-volume {
    width: 80px;
    accent-color: var(--live-soc);
  }
  /* cameras: the live picture after the flight into the camera, and the camera wall */
  .live-through {
    position: absolute;
    inset: 0;
    z-index: 6;
    pointer-events: none;
  }
  .live-through-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000;
    opacity: 0;
    animation: live-fade-in 0.6s ease forwards;
  }
  @keyframes live-fade-in {
    to {
      opacity: 1;
    }
  }
  .live-through-bar,
  .live-wall-head {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 12px;
    color: #fff;
    background: linear-gradient(rgba(6, 10, 20, 0.85), rgba(6, 10, 20, 0.5));
    pointer-events: auto;
  }
  .live-through-bar {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
  .live-rec {
    color: #ff4d6d;
    animation: live-blink 1.2s steps(2) infinite;
  }
  @keyframes live-blink {
    50% {
      opacity: 0.2;
    }
  }
  .live-detect {
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(255, 77, 109, 0.25);
    border: 1px solid rgba(255, 77, 109, 0.6);
  }
  .live-spacer {
    flex: 1;
  }
  .live-wall {
    position: absolute;
    inset: 0;
    z-index: 6;
    display: flex;
    flex-direction: column;
    background: rgba(4, 8, 16, 0.92);
    color: #fff;
  }
  .live-wall-grid {
    flex: 1;
    display: grid;
    gap: 8px;
    padding: 8px;
    overflow: auto;
    align-content: start;
  }
  .live-wall-cam {
    position: relative;
    aspect-ratio: 16 / 9;
    padding: 0;
    border: 1px solid rgba(120, 200, 255, 0.3);
    border-radius: 10px;
    overflow: hidden;
    background: #000;
    cursor: pointer;
  }
  .live-wall-cam.live-seen {
    border-color: #ff4d6d;
    box-shadow: 0 0 16px rgba(255, 77, 109, 0.5);
  }
  .live-wall-cam img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .live-wall-none {
    display: grid;
    place-items: center;
    height: 100%;
    color: #8aa0c8;
  }
  .live-wall-name {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4px 8px;
    font-size: 12px;
    color: #fff;
    text-align: left;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  }
  .live-own {
    position: relative;
    width: 54px;
    height: 54px;
  }
  .live-ring {
    width: 54px;
    height: 54px;
  }
  .live-ring-bg {
    fill: none;
    stroke: color-mix(in srgb, var(--nf-text) 10%, transparent);
    stroke-width: 5;
  }
  .live-ring-fg {
    fill: none;
    stroke-width: 5;
    stroke-linecap: round;
    transition: stroke-dasharray 0.6s ease;
  }
  .live-own-text {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    text-align: center;
  }
  .live-own-text b {
    font-size: 13px;
  }
  .live-own-text span {
    font-size: 8.5px;
    opacity: 0.75;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;var dl=[[/spotify/i,[30,215,96]],[/netflix/i,[229,9,20]],[/youtube/i,[255,0,51]],[/prime|amazon/i,[0,168,225]],[/disney/i,[17,60,207]],[/apple ?music|itunes/i,[250,45,72]],[/apple ?tv/i,[200,200,210]],[/plex/i,[229,160,13]],[/tidal/i,[0,255,255]],[/deezer/i,[162,56,255]],[/radio|tunein/i,[255,140,60]]],ko=[34,211,238];function ur(r){return r?dl.find(([e])=>e.test(r))?.[1]??ko:ko}function So(r,e){let n=[],t=new Set;for(let i of e){if(!i.entity.startsWith("media_player.")||t.has(i.entity))continue;t.add(i.entity);let o=r.states[i.entity];if(!o)continue;let s=o.attributes,a=u=>typeof s[u]=="string"?s[u]:"",l=a("app_name")||a("source")||a("app_id")||null,c=typeof s.volume_level=="number"?s.volume_level:null;n.push({entity:i.entity,name:i.name,at:i.at,playing:o.state==="playing",title:a("media_title")||a("media_channel")||l||"",artist:a("media_artist")||a("media_album_name")||a("media_series_title"),picture:a("entity_picture")||null,volume:c,color:ur(l),app:l,group:Array.isArray(s.group_members)?s.group_members.filter(u=>typeof u=="string"&&u!==i.entity):[]})}return n}function $o(r){let e=new Map(r.filter(i=>i.playing).map(i=>[i.entity,i])),n=[],t=new Set;for(let i of e.values())for(let o of i.group){let s=e.get(o),a=[i.entity,o].sort().join("|");s&&!t.has(a)&&(t.add(a),n.push([i,s]))}return n}var Mo=Math.PI/180;function ln(r,e){let n=[];for(let t of e.floors)for(let i of t.placements){if(!i.entity_id.startsWith("camera."))continue;let o=i.mount==="ceiling";n.push({entity:i.entity_id,name:i.name||String(r.states[i.entity_id]?.attributes.friendly_name??i.entity_id),floorId:t.id,x:i.x,z:i.z,y:i.y??(o?t.height-.1:2.3),rotation:i.rotation??0,tilt:i.tilt??(o?65:20),dome:o})}return n}function Ao(r,e,n=3){let t=r.rotation*Mo,i=Math.min(85,Math.max(0,r.tilt))*Mo,o=-Math.sin(t),s=Math.cos(t),a=[o*Math.cos(i),-Math.sin(i),s*Math.cos(i)],l=n+.35;return{target:[r.x+a[0]*l,e+r.y+a[1]*l,r.z+a[2]*l],radius:n,theta:Math.atan2(-a[0],-a[2]),phi:Math.acos(Math.max(-1,Math.min(1,-a[1])))}}function dr(r,e,n=Date.now()){let t=r.states[e];if(!t)return{stream:null,snapshot:null};let i=t.attributes.access_token,o=typeof t.attributes.entity_picture=="string"?t.attributes.entity_picture:null;return{stream:typeof i=="string"?`/api/camera_proxy_stream/${e}?token=${i}`:null,snapshot:o?o.startsWith("data:")?o:`${o}${o.includes("?")?"&":"?"}t=${Math.floor(n/2e3)}`:null}}var hl=[["person",/person|people|human|mensch/],["vehicle",/vehicle|car\b|_car_|auto|fahrzeug|truck/],["animal",/animal|pet|dog|cat|bird|tier|hund|katze/]];function cn(r,e){let n=r.entities?.[e]?.device_id,t=e.split(".")[1],i=Object.keys(r.states).filter(s=>s.startsWith("binary_sensor.")&&(n?r.entities?.[s]?.device_id===n:s.includes(t))),o=new Set;for(let s of i){if(r.states[s]?.state!=="on")continue;let a=hl.find(([,l])=>l.test(s))?.[0];a&&o.add(a)}return[...o]}var hr={person:"\u{1F9CD}",vehicle:"\u{1F697}",animal:"\u{1F43E}"},Eo=(r,e)=>e.startsWith("binary_sensor.")&&(["motion","occupancy","presence","moving"].includes(String(r.states[e]?.attributes.device_class??""))||/motion|bewegung|praesenz|presence/.test(e));function pl(r,e){let n=r.entities?.[e];return n?.area_id?n.area_id:n?.device_id?r.devices?.[n.device_id]?.area_id??null:null}function pr(r,e){let n=[],t=new Set;for(let o of e.floors)for(let s of o.placements)!Eo(r,s.entity_id)||t.has(s.entity_id)||(t.add(s.entity_id),n.push({entity:s.entity_id,at:{floorId:o.id,x:s.x,z:s.z,y:.4}}));let i=new Map;for(let o of Object.keys(r.states)){if(t.has(o)||!Eo(r,o))continue;let s=pl(r,o);s&&i.set(s,[...i.get(s)??[],o])}for(let o of e.floors)for(let s of o.rooms){let a=s.area_id?i.get(s.area_id):void 0;if(!a?.length||s.points.length<3)continue;let l=s.points.reduce((u,d)=>u+d[0],0)/s.points.length,c=s.points.reduce((u,d)=>u+d[1],0)/s.points.length;for(let u of a)t.has(u)||(t.add(u),n.push({entity:u,at:{floorId:o.id,x:l,z:c,y:.4}}))}return n}async function zo(r,e,n=30){if(!e.length)return[];let t=new Date(Date.now()-n*6e4).toISOString(),i=await r.callWS({type:"history/history_during_period",start_time:t,entity_ids:e.map(a=>a.entity),minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),o=new Map(e.map(a=>[a.entity,a.at])),s=[];for(let[a,l]of Object.entries(i??{})){let c=o.get(a);if(c)for(let u of l)u.s==="on"&&s.push({entity:a,at:c,t:u.lu})}return s.sort((a,l)=>a.t-l.t),s.filter((a,l)=>l===0||a.entity!==s[l-1].entity)}function un(r){return r.toLocaleLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Ro=r=>r.points.length>=3;function fl(r,e,n){return r.rooms.filter(Ro).find(t=>H([e,n],t.points))}function ml(r,e,n,t){let i=[];for(let a of e.rooms.filter(Ro)){let[l,c]=ht(a.points);i.push({kind:"room",name:a.name,where:t?e.name:"",floorId:e.id,roomId:a.id,entity:null,icon:null,x:l,z:c,y:0})}let o=new Set,s=(a,l,c,u)=>{if(o.has(a)||!(a in r.states))return;o.add(a);let d=fl(e,l,c),h=[d?.name,t?e.name:void 0].filter(_=>!!_).join(" \xB7 ");i.push({kind:"device",name:T(r,a),where:h,floorId:e.id,roomId:d?.id??null,entity:a,icon:M(a),x:l,z:c,y:u})};for(let a of e.placements){let l=a.y??Ve(M(a.entity_id)??"sensor",e.height,a.mount);s(a.entity_id,a.x,a.z,l)}for(let a of e.furniture){let l=n.get(a.id),c=l?.entity??l?.power;if(!c)continue;let u=e.height-.3;s(c,a.x,a.z,Math.min(u,Math.max(.5,a.h)))}return i}function Fo(r,e){let n=je(r,e.floors),t=e.floors.length>1;return e.floors.flatMap(i=>ml(r,i,n,t))}function gl(r,e){return(un(r.name).startsWith(e)?0:2)+(r.kind==="room"?0:1)}function To(r,e,n=8){let t=un(e).split(/\s+/).filter(Boolean);if(t.length===0)return[];let i=un(e.trim());return r.filter(o=>{let s=un([o.name,o.where,o.entity].filter(Boolean).join(" "));return t.every(a=>s.includes(a))}).map(o=>({item:o,cost:gl(o,i)})).sort((o,s)=>o.cost-s.cost||o.item.name.localeCompare(s.item.name)).slice(0,n).map(o=>o.item)}var _l=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],bl=[2200,2700,3200,4e3,5e3,6500],vl=["hs","rgb","rgbw","rgbww","xy"],wl=4,Do=16,Ho=32,yl=128;function mr(r){let e=r.attributes.supported_color_modes??[],n=e.some(t=>vl.includes(t));return{dim:e.some(t=>t!=="onoff"),color:n,temp:e.includes("color_temp")}}function gr(r){return((r.attributes.supported_features??0)&wl)!==0&&typeof r.attributes.current_position=="number"}var fr=class extends q{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{M(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let n=e.attributes.entity_picture,t=n?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}nf=${this._tick}`:null;return f`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${t?f`<img src=${t} alt=${T(this.hass,this.entity)} />`:f`<span class="qm-note">${X(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.t("through_camera")}
      </button>`}t(e,n){return $(this.hass,e,n)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:T(this.hass,this.entity)}))}call(e,n,t={}){this.hass.callService(e,n,{entity_id:this.entity,...t})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){oe(this,this.entity),this.close()}ring(e){let n=e.length;return e.map((t,i)=>{let o=i/n*Math.PI*2-Math.PI/2;return f`<div class="qm-at" style="left:${50+Math.cos(o)*39}%;top:${50+Math.sin(o)*39}%">${t}</div>`})}renderLight(e){let n=mr(e),t=e.state==="on",i=t&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):t?100:0,o=n.color?_l.map(s=>f`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):n.temp?bl.map(s=>f`<button class="qm-swatch" style="background:${xl(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return f`<div class="qm-ring ${o.length?"":"qm-ring-small"}">
        ${this.ring(o)}
        <button class="qm-power ${t?"qm-on":""}" aria-pressed=${t} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${t?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${n.dim?f`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:g}`}renderCover(e){let n=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,t=e.state==="opening"||e.state==="closing",i=gr(e),o=(c,u,d,h=!1)=>f`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${u} @click=${d}>${c}</button>`,s=c=>n!==null&&Math.abs(n-c)<3,a=[o("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...i?[75,50].map(c=>o(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],o("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...i?[25].map(c=>o(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],o("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),t)],l=n===null?e.state==="closed"?100:0:100-n;return f`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${t?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>t?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${n!==null?`${n} %`:X(this.hass,e)}</b>
        </button>
      </div>
      ${i?f`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(n??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:g}
      ${this.renderTilt(e)}`}renderTilt(e){let n=(e.attributes.supported_features??0)|0,t=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return n&yl&&t!==null?f`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${t} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(t)}
          aria-label=${this.t("cover_tilt")}
          @change=${i=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(i.target.value)})}
      /></label>`:n&(Do|Ho)?f`<div class="qm-tilt-buttons">
        ${n&Do?f`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:g}
        ${n&Ho?f`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:g}
      </div>`:g}renderToggle(e){let n=e.state==="on"||e.state==="unlocked"||e.state==="playing",t=e.entity_id.split(".")[0];return f`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${n?"qm-on":""}"
        aria-pressed=${n}
        @click=${()=>this.ask()&&(t==="lock"?this.call("lock",n?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${X(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return g;let n=M(this.entity),t=D(e)?f`<p class="qm-note">${X(this.hass,e)}</p>`:n==="light"?this.renderLight(e):n==="cover"?this.renderCover(e):n==="camera"?this.renderCamera(e):this.renderToggle(e);return f`<div class="qm" role="dialog" aria-label=${T(this.hass,this.entity)}>
      <div class="qm-title">${T(this.hass,this.entity)}</div>
      ${t}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[se,j`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--nf-accent, var(--nf-accent));
      color: var(--nf-accent, var(--nf-accent));
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow), 0 0 0 1px var(--nf-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--nf-line);
        animation: none;
        color: var(--nf-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--nf-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid color-mix(in srgb, var(--nf-text) 25%, transparent);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--nf-bg2);
        color: var(--nf-muted);
        box-shadow: inset 0 0 0 2px var(--nf-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--nf-title-font);
        color: var(--nf-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--nf-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--nf-line);
        background: var(--nf-bg2);
        color: var(--nf-text);
        font: 700 12px var(--nf-title-font);
      }
      .qm-slot-on {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--nf-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--nf-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--nf-muted);
      }
    `]};function xl(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),n=(t,i)=>Math.round(t+(i-t)*e);return`rgb(${n(255,200)},${n(170,225)},${n(80,255)})`}customElements.get("nf-quick-menu")||customElements.define("nf-quick-menu",fr);var kl=new URL(import.meta.url),Sl=new URL("./nextfloor-3d.js?v=7be1822b3786",kl).href,Io;function Co(){return Io??=import(Sl),Io}var Po=r=>r.toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),$l=new Set(["","unknown","unavailable","not home","away"]);function Ml(r,e,n){let t=Po(n);if($l.has(t))return null;for(let i of e.floors)for(let o of i.rooms){let s=o.area_id?r.areas?.[o.area_id]?.name:void 0;if([o.name,o.area_id,s].map(l=>Po(l??"")).includes(t))return{floorId:i.id,room:o}}return null}function El(r){let e=r.split(/\s+/).filter(Boolean);return e.length===0?"?":(e.length===1?e[0].slice(0,2):e[0][0]+e[e.length-1][0]).toUpperCase()}function Al(r,e){let[n,t]=ht(r.points),i=e*1.15-Math.PI/2+.9;return[n+.75*Math.cos(i),t+.75*Math.sin(i)]}function Oo(r,e){let n=[],t=new Map;for(let{person:i,sensor:o}of e.presence){let s=r.states[i],a=o?r.states[o]:void 0;if(!s||!a||s.state!=="home"&&s.state!=="on")continue;let l=Ml(r,e,a.state);if(!l)continue;let c=t.get(l.room.id)??0;t.set(l.room.id,c+1);let[u,d]=Al(l.room,c),h=String(s.attributes.friendly_name??i),_=s.attributes.entity_picture;n.push({id:i,name:h,initials:El(h),picture:typeof _=="string"?_:null,floorId:l.floorId,roomId:l.room.id,x:u,z:d})}return n}function zl(r,e){let n=new Set;for(let t of e.rooms)for(let i of Ue(r,G(r,t.area_id)))M(i)==="light"&&n.add(i);for(let t of e.placements)M(t.entity_id)==="light"&&n.add(t.entity_id);return[...n].filter(t=>r.states[t]?.state==="on").length}function Rl(r,e,n){let t=o=>!!o&&r.states[o]?.state==="on",i=0;for(let o of e.openings){let s=n.get(o.id);if(s)if(o.type==="garage")(ve(r,s,"garage").cover??1)<.95&&i++;else if(o.type==="door")(t(s.contact)||t(s.contact2))&&i++;else{let a=ve(r,s,"window");Math.max(a.open,a.tilt,a.open2,a.tilt2)>.5&&i++}}return i}function Wo(r,e,n,t){return new Map(e.floors.map(i=>[i.id,{rooms:i.rooms.length,lightsOn:zl(r,i),open:Rl(r,i,n),persons:t.filter(o=>o.floorId===i.id).length}]))}function Lo(r,e){let n=[e.rooms===1?$(r,"floor_rooms_one"):$(r,"floor_rooms",{n:e.rooms})];return e.lightsOn>0&&n.push($(r,"floor_lights",{n:e.lightsOn})),e.open>0&&n.push($(r,"floor_open",{n:e.open})),e.persons>0&&n.push($(r,"floor_persons",{n:e.persons})),n.join(" \xB7 ")}var _r=class extends q{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_liveEnergy:{state:!0},_liveCards:{state:!0},_liveCardOn:{state:!0},_liveLive:{state:!0},_liveTrail:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};get liveCardsOn(){return this.holograms??this._liveCardOn}cloud=0;confirmSet=new Set;trailTimer;shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];cameraTick=0;cameraTimer;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this.showEnergy=!0,this.flows=null,this._liveEnergy=null,this._liveCards=[],this._liveLive=!1,this._liveTrail=[],this._liveCardOn=localStorage.getItem("nextfloor.cards")!=="0",this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("nextfloor.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("nextfloor.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nf-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(n=>{let t=(n[0]?.contentRect.width??1e3)<700;t!==this._narrowStage&&(this._narrowStage=t,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Co();if(!this.isConnected)return;let n=this.renderRoot.querySelector(".nf-stage");n.addEventListener("pointerdown",t=>{this._central&&!t.target?.closest?.(".nf-central, .nf-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(n,{quality:this.quality,explode:this.explode,onRoomTap:(t,i)=>this.fire("room-tap",{floorId:t,roomId:i}),onFloorTap:t=>this.fire("floor-tap",{floorId:t}),floorInfo:t=>t.rooms.length===1?$(this.hass,"floor_rooms_one"):$(this.hass,"floor_rooms",{n:t.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(t,i,o)=>this.onDeviceTap(t,i,o),onDeviceHold:(t,i,o)=>this.onDeviceHold(t,i,o),onRoomDoubleTap:(t,i)=>this.onRoomDoubleTap(t,i),onDeviceSwipe:(t,i,o,s,a)=>this.onDeviceSwipe(t,i,o,s,a),onFurnitureSelect:t=>this.fire("furniture-select",{id:t}),onFurnitureMove:(t,i,o)=>this.fire("furniture-move",{id:t,x:i,z:o}),onDeviceSelect:t=>this.fire("device-select",{id:t}),onDeviceMove:(t,i,o)=>this.fire("device-move",{id:t,x:i,z:o}),onStats:t=>{this.showStats&&(this._stats=t)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setMeshSource(t=>this.hass?.fetchWithAuth?this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(t)}`).then(i=>i.ok?i.arrayBuffer():null):Promise.resolve(null)),this.viewer.setPacks([...En()]),this.shownPacks=Tt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let n=this.viewer;if(!n)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Tt()&&(this.shownPacks=Tt(),n.setPacks([...En()]),this.hass&&this.building&&n.setParked(tr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let i=JSON.stringify(this.startViewOf()),o=this.shownStartView!==void 0&&this.shownStartView!==i;this.shownStartView=i,n.setStartView(this.startViewOf()),n.setBuilding(this.building),o&&this.floorId===null&&n.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(n.setStartView(this.startViewOf()),this.floorId===null&&n.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let t=["building","markerMode","heatMode","flows","alerts","dimmed"].some(i=>e.has(i));(t||e.has("hass"))&&this.syncDevices(t),e.has("autoOrbit")&&n.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&n.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&n.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&n.selectRoom(this.roomId),e.has("wallMode")&&n.setWallMode(this.wallMode),e.has("explode")&&n.setExplode(this.explode),e.has("keepRoof")&&n.setKeepRoof(this.keepRoof),e.has("floorStack")&&n.setFloorStack(this.floorStack),e.has("theme")&&n.setTheme(this.theme),e.has("accent")&&n.setAccent(this.accent??null),e.has("surfaceGrab")&&n.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&n.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(n.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&n.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&n.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(n.setQuality(this.quality),this._low=n.low),e.has("showStats")&&n.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let n=this.viewer,t=this.building;if(!n||!t||!this.hass)return;let i=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==i.entities){this.openingLinks=ft(i,t.floors),this.furnitureLinks=je(i,t.floors),this.linkedRegistry=i.entities,this.findIndex=null;let v=[...this.openingLinks.values()].flatMap(A=>[A.cover,A.contact,A.tilt,A.contact2??null,A.tilt2??null,A.position??null,A.tiltAngle??null]),E=Di(t),W=E.filter(A=>M(A)==="camera").flatMap(A=>Un(i,A)),S=E.map(A=>Jn(i,A)),P=t.energy,U=t.presence.flatMap(A=>[A.person,A.sensor]),rt=t.floors.flatMap(A=>A.rooms.flatMap(B=>G(i,B.area_id).filter(ze=>M(ze)==="light"))),ne=[...this.furnitureLinks.values()].flatMap(A=>[A.entity,A.power]),Mt=t.floors.flatMap(A=>A.furniture.flatMap(B=>[B.state_entity??null,B.state_entity2??null,B.color_entity??null])),jo=t.floors.flatMap(A=>A.furniture.flatMap(B=>[B.door_left??null,B.door_right??null,B.soc??null,B.status??null,B.charge??null,B.export??null])),qo=(t.settings.roof?.windows??[]).flatMap(A=>[A.cover,A.contact,A.tilt]).filter(A=>!!A&&A!=="none"),Zo=[...(t.settings.roof?.solar??[]).map(A=>A.entity),...(t.settings.roof?.strings??[]).map(A=>A.entity)].filter(A=>!!A&&A!=="none"),Yo=t.floors.flatMap(A=>A.furniture.filter(B=>B.type==="robot_vacuum").map(B=>Nn(i,this.furnitureLinks.get(B.id)?.entity??null,B.room_sensor))),Qo=t.floors.flatMap(A=>A.furniture.flatMap(B=>(B.pictures??[]).flatMap(ze=>[ze.entity,...ze.image.startsWith("camera:")?[ze.image.slice(7)]:[]]))),Jo=this.heatMode==="none"&&!this.roomLabels?[]:t.floors.flatMap(A=>A.rooms.flatMap(B=>G(i,B.area_id).filter(ze=>ze.startsWith("sensor."))));this.alertSrc=this.alerts?Ci(i,t,this.weatherEntityId):null;let Xo=this.alertSrc?Pi(this.alertSrc):[],es=[...Yi(t.floors),...ki(i,t.floors)],ts=this.trail?pr(i,t).map(A=>A.entity):[],ns=_t(i,this.weatherEntityId??t.settings.weather_entity),rs=[...E,...W,...v,...S,...ne,...Mt,...jo,...Yo,...qo,...Zo,...Qo,P.grid,P.solar,P.battery,P.battery_soc,P.consumption,P.tariff,...U,...rt,...Jo,...Xo,...es,...ts,ns,"sun.sun"];this.watched=[...new Set(rs.filter(A=>!!A))],e=!0}if(!(e||this.watched.some(v=>this.shownStates.get(v)!==i.states[v])))return;this.shownStates=new Map(this.watched.map(v=>[v,i.states[v]]));let s=Yt(i,t),a=Ti(i,t),l=this.furnitureMarkers(i,t,new Set(a.map(v=>v.id)),new Set(s.map(v=>v.powerEntity)));s.push(...l.consumers);let c=Qt(i,t,s,Zt(t,v=>this.furnitureLinks?.get(v.id)?.power??null)),u=new Map(s.filter(v=>v.id!==v.powerEntity).map(v=>[v.id,v.power]));this.confirmSet=qe(i,t.floors);let d=this.trail&&!this.dimmed?this._liveTrail:[],h=new Set(this.liveCardsOn?this._liveCards.flatMap(v=>v.kind==="media"?[v.media.entity]:v.kind==="car"?[v.spot]:[]):[]);n.setDevices([...[...a,...l.markers].map(v=>{let E=v.show==="no_power"||"energyDevice"in v&&v.energyDevice?null:u.get(v.id)??null,W={...v,power:E,powerText:E===null?void 0:ue(i,E),effect:this.dimmed?!1:v.effect},S=v.ownName&&(v.showName||this.markerNames)?v.ownName:"",P=h.has(v.id)||!!v.furnitureId&&h.has(v.furnitureId);return{...W,pin:this.showPin(W)&&!P,full:v.show==="always",caption:S}}),...this.dimmed?[]:this.liveDetectionPins(i,t),...d.map((v,E)=>({id:`trail:${E}`,floorId:v.at.floorId??t.floors[0]?.id??"",roomId:null,x:v.at.x,z:v.at.z,y:.3+.4*d.slice(0,E).filter(W=>W.entity===v.entity).length,icon:Dl,name:T(i,v.entity),text:Hl(i,v.t),active:E===d.length-1,unavailable:!1,glow:null,pin:!0}))]),n.setPickTargets(l.targets,this.openingTargets()),n.setScreens(l.screens),n.setFridgeDoors(yi(i,t.floors)),n.setRobots(this.robotInfos(i,t));let _=new Map;for(let v of t.settings.roof?.windows??[]){let E=U=>U&&U!=="none"?U:null,W=ve(i,{cover:E(v.cover),contact:E(v.contact),tilt:E(v.tilt)},"window"),S=E(v.window)?i.states[E(v.window)]:void 0,P=W.open;if(S&&!D(S)){let U=S.attributes.current_position;P=typeof U=="number"?Math.min(1,Math.max(0,U/100)):S.state==="open"||S.state==="opening"?1:0}_.set(v.id,{open:P,tilt:W.tilt,cover:W.cover??0})}n.setRoofWindows(_),n.setParked(tr(i,t));let b=new Map(t.floors.flatMap(v=>v.openings.map(E=>[E.id,E.type]))),p=new Map([...this.openingLinks].map(([v,E])=>[v,ve(i,E,b.get(v))]));n.setOpeningStates(p),this.setAlerts(this.alertSrc?Oi(i,t,this.alertSrc,this.openingLinks):[]);let x=[...a,...l.markers].map(v=>`${v.id}:${v.glow?`${v.glow.level.toFixed(1)}/${v.glow.color.map(E=>E.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...p].map(([v,E])=>`${v}:${E.open}:${E.cover===null?"-":E.cover.toFixed(1)}`).join(";");if(x!==this.thumbSig){let v=this.thumbSig==="";this.thumbSig=x,v||this.scheduleThumbs(1500)}let m=mo(i,t,s),k=this.liveCars(i,t);for(let v of k){if(!v.car.home||!v.car.charging)continue;let E=t.floors.flatMap(W=>W.furniture.filter(S=>S.type==="wallbox").map(S=>({floorId:W.id,x:S.x,z:S.z,y:1}))).sort((W,S)=>Math.hypot(W.x-v.at.x,W.z-v.at.z)-Math.hypot(S.x-v.at.x,S.z-v.at.z))[0]??sn(t);E&&m.arcs.push({key:`car:${v.spot}`,from:E,to:{...v.at,y:.8},power:v.car.chargingW??7e3,color:[80,175,255]})}let y=(this.flows??this._flows)&&!this.dimmed;n.setLiveEnergy(y?m.arcs:[],y?m.sparks:[]),JSON.stringify(m)!==JSON.stringify(this._liveEnergy)&&(this._liveEnergy=m);let z=this.liveMedia(i,t).filter(v=>v.playing&&!this.dimmed);n.setLiveSound(z.map(v=>({id:v.entity,at:v.at,color:v.color,level:v.volume??.5})),$o(z).map(([v,E])=>[v.at,E.at])),this.syncLhCards(n,t,m,k,z);let R=[];if(!this.dimmed)for(let v of t.floors)for(let E of v.furniture){if(!Ln(E.type))continue;let W=this.furnitureLinks?.get(E.id)?.entity??null;W?.startsWith("media_player.")||(W=v.placements.filter(ne=>ne.entity_id.startsWith("media_player.")&&Math.hypot(ne.x-E.x,ne.z-E.z)<Math.max(2,E.w)).sort((ne,Mt)=>Math.hypot(ne.x-E.x,ne.z-E.z)-Math.hypot(Mt.x-E.x,Mt.z-E.z))[0]?.entity_id??null);let S=W?i.states[W]:void 0;if(!S||!["playing","paused"].includes(S.state))continue;let P=S.attributes,U=ne=>typeof P[ne]=="string"?P[ne]:"",rt=U("app_name")||U("source")||null;R.push({id:E.id,furnitureId:E.id,floorId:v.id,color:ur(rt),title:U("media_title")||U("media_channel")||rt||"",subtitle:U("media_artist")||U("media_series_title")||U("media_album_name"),app:rt,picture:U("entity_picture")||null,playing:S.state==="playing"})}n.setLiveScreens(R);let I=[];n.setPersons(I);let L=Wo(i,t,this.openingLinks,I);n.setFloorInfo(new Map([...L].map(([v,E])=>[v,Lo(i,E)])));let F=i.states["sun.sun"]?.attributes,O=typeof F?.elevation=="number"?F.elevation:null;n.setSun(O!==null&&typeof F?.azimuth=="number"?{elevation:O,azimuth:F.azimuth}:null);let N=this.weather&&!this.dimmed?Xi(i,_t(i,this.weatherEntityId??t.settings.weather_entity)):null,Z=N?eo(N,t.settings.weather_effects):null;this.cloud=Z?.cloud??0,this._sky=(O===null?0:Math.min(1,Math.max(0,(O+4)/16)))*(1-.45*this.cloud),n.setSky(this.weather&&!this.dimmed?{weather:Z,sun:O!==null&&typeof F?.azimuth=="number"?{elevation:O,azimuth:F.azimuth}:null,north:t.settings.north??0,sky:this.skyColor(),disc:(t.settings.weather_effects??["sky"]).includes("sky"),low:this._low}:null),this.applyTint();let re=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(re)!==JSON.stringify(this._energy)&&(this._energy=re)}liveDetectionPins(e,n){let t=[];for(let i of ln(e,n)){let o=cn(e,i.entity),s=i.rotation*Math.PI/180;o.forEach((a,l)=>{t.push({id:`detect:${i.entity}:${a}`,floorId:i.floorId,roomId:null,x:i.x+(i.dome?0:-Math.sin(s)*1.2),z:i.z+(i.dome?0:Math.cos(s)*1.2),y:1.4+.45*l,icon:Il[a],name:i.name,text:$(e,`detect_${a==="vehicle"?"car":a}`),active:!0,unavailable:!1,glow:null,pin:!0})})}return t}setAlerts(e){let n=e.map(i=>`${i.kind}:${i.entity}`),t=e.filter((i,o)=>!this.seenAlerts.has(n[o]));this.seenAlerts=new Set(n),n.join()!==this._alerts.map(i=>`${i.kind}:${i.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),t.length&&this.alertJump&&this.jumpTo(t[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,n){let t=this.building,i=this.hass,o=t?.floors.find(u=>u.id===e),s=o?.rooms.find(u=>u.id===n);if(!t||!i||!o||!s)return;let a=new Set(G(i,s.area_id).filter(u=>M(u)==="light"));for(let u of o.placements)M(u.entity_id)==="light"&&H([u.x,u.z],s.points)&&a.add(u.entity_id);for(let u of o.furniture){let d=this.furnitureLinks.get(u.id)?.entity;d&&An(u.type)&&H([u.x,u.z],s.points)&&a.add(d)}let l=[...a].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let c=l.some(u=>i.states[u]?.state==="on");i.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:n,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,n=this.building,t=this.hass;if(!e||!n||!t)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=ji(t,n,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([c,u])=>[c,Ui(a,u)]))}let o=new Map;if(this.heatMode==="values")for(let a of n.floors)for(let l of a.rooms){let c=be(t,a,l,"temperature"),u=be(t,a,l,"humidity"),d=be(t,a,l,"co2"),h=[c!==null?`${V(t,Ge(t,c),1)} ${ie(t)}`:null,u!==null?`${V(t,u,0)} %`:null,d!==null?`${V(t,d,0)} ppm`:null].filter(_=>!!_);h.length&&o.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(o),this._alerts.length){i??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let c=Wi(l.kind).map(u=>u*a);if(l.roomId)i.set(l.roomId,c);else for(let u of n.floors)for(let d of u.rooms)i.set(d.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,n,t,i){let o=[],s=[],a=new Map,l=new Map;for(let c of n.floors)for(let u of c.furniture){let d=this.furnitureLinks.get(u.id),h=this.stateFaces(e,u);if(h.length&&a.set(u.id,{color:h[0].color,level:h[0].level,faces:h}),An(u.type)){o.push(this.lampMarker(e,c,u,d?.entity??null));continue}let _=u.type==="home_battery"?u.soc:u.type==="wallbox"?u.status:null,b=_&&_!=="none"?_:null,p=d??(b?{entity:null,power:null}:void 0);if(!p)continue;let x=u.type==="home_battery"?b??p.entity??p.power:p.entity??p.power??b;l.set(u.id,x);let m=p.entity?e.states[p.entity]:void 0,k=u.type==="meter"?n.energy.grid_invert&&!u.export:u.type==="home_battery"?n.energy.battery_invert&&!u.charge:!1,y=p.power?Y(e.states[p.power],k):null,w=u.type==="home_battery"&&u.charge&&u.charge!=="none"?u.charge:u.type==="meter"&&u.export&&u.export!=="none"?u.export:null,z=w?Y(e.states[w]):null;z!==null&&(y=Math.max(0,y??0)-Math.max(0,z)),p.power&&y!==null&&!i.has(p.power)&&(i.add(p.power),s.push({id:x,powerEntity:p.power,floorId:c.id,x:u.x,z:u.z,power:Math.max(0,y),wallbox:u.type==="wallbox"||void 0}));let R=(y??0)>10||m?.state==="on"||m?.state==="running"||Hn(m)&&_e(m);if(u.type==="radiator"&&m&&M(m.entity_id)==="climate"){let F=m.attributes;if(F.hvac_action==="heating"){let O=typeof F.temperature=="number"&&typeof F.current_temperature=="number"?F.temperature-F.current_temperature:1;a.set(u.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,O))})}}else(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&R&&a.set(u.id,{color:[.3,.85,1],level:.8});if(m&&Ln(u.type)){let F=M(m.entity_id)==="light"?Be(m):null,O=M(m.entity_id)==="media"&&["playing","on","paused","idle"].includes(m.state),N=F?F.color:_e(m)||O?[.22,.88,1]:null;N&&a.set(u.id,{color:N,level:m.state==="playing"?1:.6})}if(t.has(x))continue;t.add(x);let I=p.entity?M(p.entity):null,L=c.rooms.find(F=>F.points.length>=3&&H([u.x,u.z],F.points));o.push({id:x,floorId:c.id,roomId:L?.id??null,x:u.x,z:u.z,y:Tl(u)+ge(c,u),icon:u.icon?Bt(u.icon):gt(I??"switch"),name:u.name||(p.entity?T(e,p.entity):$e(e,u.type)),ownName:u.name||void 0,showName:!!u.show_name,text:u.type==="home_battery"?this.batteryText(e,b,y):u.type==="wallbox"?this.wallboxText(e,b,y):u.type==="meter"?this.meterText(e,y):m?X(e,m):y!==null?ue(e,Math.max(0,y)):"",active:m?_e(m):(y??0)>5,unavailable:m?D(m):!1,glow:null,furnitureId:u.id,energyDevice:u.type==="inverter"||u.type==="home_battery"||u.type==="wallbox"||u.type==="meter",show:u.marker??void 0,fromFurniture:!0})}return this.watchCameras(!!this._through||this.cameraWall),{markers:o,consumers:s,screens:a,targets:l}}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail){this._liveTrail=[],this.viewer?.setLiveTrail([]),this.syncDevices(!0);return}let e=async()=>{let n=this.hass,t=this.building;if(!n||!t||document.hidden)return;try{this._liveTrail=await zo(n,pr(n,t))}catch{this._liveTrail=[]}let i=this._liveTrail.length,o=i?this._liveTrail[0].t:0,s=i?this._liveTrail[i-1].t:1;this.viewer?.setLiveTrail(this._liveTrail.map(a=>({at:a.at,age:s>o?(a.t-o)/(s-o):1}))),this.syncDevices(!0)};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}robotObstacles(e,n){let t=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(t.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||ge(e,i)>.12)return!1;let o=Q(i.type);return o&&(o.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:H([i.x,i.z],n)||Ht(i).some(s=>H(s,n))}).map(i=>Ht(i))}robotInfos(e,n){let t=[];for(let i of n.floors)for(let o of i.furniture){if(o.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(o.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=o.rotation*Math.PI/180,u=o.d*.14,d=[o.x-Math.sin(c)*u,o.z+Math.cos(c)*u],h=i.rooms.filter(x=>x.points.length>=3),b=(l==="cleaning"?Mi(e,h,s,Nn(e,s,o.room_sensor)):null)??h.find(x=>H(d,x.points)),p=l==="cleaning"&&b?this.robotObstacles(i,b.points):[];t.push({id:o.id,floorId:i.id,rest:d,restHeading:-c,mode:l,room:b?.points??null,roomId:b?.id??null,obstacles:p})}return t}batteryText(e,n,t){let i=n?Number(e.states[n]?.state):Number.NaN,o=[];return Number.isFinite(i)&&o.push(`${V(e,i,0)} %`),t!==null&&Math.abs(t)>=10&&o.push(`${t<0?"\u25B2":"\u25BC"} ${ue(e,Math.abs(t))}`),o.join(" \xB7 ")}meterText(e,n){return n===null?"":Math.abs(n)<5?ue(e,0):`${$(e,n<0?"energy_grid_export":"energy_grid_import")} ${ue(e,Math.abs(n))}`}wallboxText(e,n,t){let i=n?e.states[n]:void 0,o=String(i?.state??"").toLowerCase(),s=(t??0)>50||/charg|laden|lädt/.test(o),a=i?.entity_id.startsWith("binary_sensor.")?o==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(o),l=s?$(e,"wallbox_charging"):a?$(e,"wallbox_plugged"):i&&!D(i)&&!i.entity_id.startsWith("binary_sensor.")?X(e,i):"",c=t!==null&&t>50?ue(e,t):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,n){let t=[],i=n.state_entity2&&n.state_entity2!=="none"?[[n.state_entity,n.state_split==="top_bottom"?"bottom":"left"],[n.state_entity2,n.state_split==="top_bottom"?"top":"right"]]:[[n.state_entity,"all"]];for(let[o,s]of i){if(!o||o==="none")continue;let a=e.states[o];if(!a||D(a)||!(_e(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=M(o)==="light"?Be(a):null;t.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return t}lampMarker(e,n,t,i){let o=i?e.states[i]:void 0,s=Q(t.type),a=ri[t.type]??s?.light??"floor",l=n.rooms.some(_=>_.points.length>=3&&H([t.x,t.z],_.points)),c=a==="strip"&&!l?dt(n,t.x,t.z)+(t.mount_y??0):t.mount_y!=null&&!s?t.mount_y:s||a==="wall"||a==="strip"?ge(n,t):a==="table"?Dt(n,t.x,t.z):a==="bollard"||a==="garden"?dt(n,t.x,t.z):0,u=n.rooms.find(_=>_.points.length>=3&&H([t.x,t.z],_.points)),d=n.height,h=s?s.mount==="ceiling"?Math.max(.5,c-.15):c+t.h+.2:{ceiling:d-.3,downlight:d-.25,spot:d-.35,panel:d-.25,pendant:Math.max(.6,d-t.h-.25),floor:c+t.h+.25,uplight:c+t.h+.25,table:c+t.h+.2,wall:c+t.h+.2,strip:t.upright?c+t.w+.15:Math.max(.3,c-.2),bollard:c+t.h+.25,garden:c+t.h+.25}[a];return{id:i??`lamp:${t.id}`,floorId:n.id,roomId:u?.id??null,x:t.x,z:t.z,y:h,icon:gt("light"),name:t.name||(i?T(e,i):$e(e,t.type)),text:o?X(e,o):"",active:o?_e(o):!1,unavailable:o?D(o):!1,glow:o?Kn(Be(o,t.color_entity&&t.color_entity!=="none"?e.states[t.color_entity]:void 0),t.glow_scale):null,lamp:a,rotation:t.rotation,mirror:!!t.mirror,roll:t.tilt??0,upright:!!t.upright,size:[t.w,t.d,t.h],base:c,pickable:!!i,furnitureId:t.id,pack:s?t.type:null,lightY:s?s.mount==="ceiling"?c:c+t.h*.85:void 0,effect:!!o&&o.state==="on"&&typeof o.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(o.attributes.effect),variant:t.variant,show:t.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let n=M(e.id);return n==="light"?!1:e.fromFurniture?(e.power??0)>=1||n==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[n,t]of this.openingLinks??[]){let i=t.cover??t.contact??t.tilt;i&&e.set(n,i)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let n=this.building?.floors.filter(i=>i.rooms.length).length??0;if(!this.floorThumbs||n<2){this._thumbs=[];return}let t=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},t)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return g;let e=new Map(this.building.floors.map(o=>[o.id,o.name])),n=[...this._thumbs].sort((o,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===o.floorId)?.elevation??0)),t=this._thumbsCompact,i=()=>{this._thumbsCompact=!t;try{localStorage.setItem("nextfloor.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return f`<nav class="nf-thumbs ${this.narrowThumbs?"nf-thumbs-small":""} ${t?"nf-thumbs-compact":""}" aria-label=${$(this.hass,"floors")}>
      <button class="nf-thumbs-fold" title=${$(this.hass,t?"thumbs_show":"thumbs_fold")} aria-label=${$(this.hass,t?"thumbs_show":"thumbs_fold")} @click=${i}>${t?"\u25B8":"\u25C2"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${$(this.hass,"all_floors")}</span>
      </button>
      ${n.map(o=>f`<button class="nf-thumb" aria-pressed=${this.floorId===o.floorId} @click=${()=>this.fire("floor-tap",{floorId:o.floorId})}>
          ${t?g:f`<img src=${o.url} alt="" />`}
          <span>${e.get(o.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,n,t){let i=M(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:n,y:t}:oe(this,e)}onDeviceSwipe(e,n,t,i,o){let s=this.hass?.states[e];if(n==="start"){if(!s||D(s)||this.confirmSet.has(e))return!1;let l=M(e);if(l==="light"&&mr(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:i,y:o},!0}if(l==="cover"&&gr(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:i,y:o},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(n==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-t/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return g;let n=this._alerts.slice(0,3);return f`<div class="nf-alert-banner" role="alert">
      ${n.map(t=>f`<button class="nf-alert nf-alert-${t.kind}" title=${Zn(this.hass,e,t)} @click=${()=>this.jumpTo(t)}>${Zn(this.hass,e,t)}</button>`)}
      ${this._alerts.length>3?f`<span class="nf-alert-more">+${this._alerts.length-3}</span>`:g}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return g;let n=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this.roomId),t=n?G(this.hass,n.area_id).filter(o=>M(o)==="scene"||M(o)==="script").slice(0,6):[];if(!t.length)return g;let i=n?.area_id?this.hass.areas?.[n.area_id]?.name:void 0;return f`<div class="nf-scenes">
      ${t.map(o=>f`<button class="nf-chip" aria-pressed=${this._sceneFired===o} @click=${()=>this.runScene(o)}>${T(this.hass,o,i)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return g;if(this._find===null)return f`<button class="nf-find-btn" title=${$(this.hass,"find")} aria-label=${$(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let n=To(this.findIndex??=Fo(this.hass,e),this._find);return f`<div class="nf-find">
      <input
        type="search"
        placeholder=${$(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${t=>this._find=t.target.value}
        @keydown=${t=>{t.key==="Escape"&&(this._find=null),t.key==="Enter"&&n[0]&&this.goTo(n[0])}}
      />
      <button class="nf-find-close" aria-label=${$(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?f`<div class="nf-find-list">
            ${n.length?n.map(t=>f`<button @click=${()=>this.goTo(t)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${t.icon?Nt(t.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${t.name}</b>${t.where?f`<small>${t.where}</small>`:g}</span>
                  </button>`):f`<p>${$(this.hass,"find_none")}</p>`}
          </div>`:g}
    </div>`}renderCentral(){let e=this.building,n=this.hass;if(!e||!n||!this.central||this._find!==null)return g;let t=(p,x)=>$(n,p,x),i=f`<button
      class="nf-central-btn ${this._central?"nf-central-on":""}"
      title=${t("central")}
      aria-label=${t("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let o=this.floorId?e.floors.find(p=>p.id===this.floorId):void 0,s=o?[o]:e.floors,a=s.flatMap(p=>Bn(n,p).lights),l=s.flatMap(p=>Bn(n,p).covers),c=a.filter(p=>n.states[p]?.state==="on").length,u=!o,d=(p,x,m,k)=>{if(k.length){if(u&&this._armed!==p){this._armed=p,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,n.callService(x,m,{entity_id:k})}},h=(p,x,m,k,y)=>f`<button class="nf-btn ${this._armed===p?"nf-central-armed":""}" ?disabled=${!y.length} @click=${()=>d(p,m,k,y)}>
        ${this._armed===p?t("central_sure"):t(x)}
      </button>`,_=(e.settings.favorites??[]).filter(p=>n.states[p]),b=this.buttons??e.settings.buttons??[];return f`${i}
      <div class="nf-central" role="dialog" aria-label=${t("central")}>
        <b>${o?o.name:t("central_house")}</b>
        <div class="nf-central-row">
          <span>${t("central_lights")}${a.length?f` <small>${c}/${a.length}</small>`:g}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(p=>n.states[p]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(p=>n.states[p]?.state==="on"))}
        </div>
        ${l.length?f`<div class="nf-central-row">
              <span>${t("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:g}
        <b>${t("central_favorites")}</b>
        ${_.length?f`<div class="nf-central-favs">
              ${_.map(p=>{let[x,m]=Ei(p),k=n.states[p],y=x==="homeassistant"&&k?.state==="on";return f`<button
                  class="nf-chip"
                  aria-pressed=${y||this._sceneFired===p}
                  ?disabled=${D(k)}
                  @click=${()=>{n.callService(x,m,{entity_id:p}),this._sceneFired=p,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${T(n,p)}
                </button>`})}
            </div>`:b.length?g:f`<p class="nf-central-hint">${t("central_no_favorites")}</p>`}
        ${b.length?f`<div class="nf-central-favs">
              ${b.map(p=>f`<button
                  class="nf-chip nf-own-btn"
                  @click=${x=>{Ai(n,x.currentTarget,p),p.action!=="service"&&(this._central=!1)}}
                >
                  ${p.icon?f`<ha-icon .icon=${p.icon.startsWith("mdi:")?p.icon:`mdi:${p.icon}`}></ha-icon>`:g}${p.label}
                </button>`)}
            </div>`:g}
      </div>`}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return g;let e=$(this.hass,this.clean?"controls_show":"controls_hide");return f`<button
      class="nf-eye ${this.clean?"nf-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?He`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:He`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return g;let n=e.kind==="light"&&e.value<=0;return f`<div class="nf-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${T(this.hass,e.entity)}</span>
      <b>${n?$(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let n=this.viewer,t=this.building,i=this.hass;if(!n||!t||!i)return;let o=ln(i,t).find(a=>a.entity===e);if(!o)return;this._menu=null,this._liveLive=!1,this._through={entity:e,back:this._through?.back??n.getView()},this.watchCameras(!0);let s=()=>{this._through?.entity===e&&(this.viewer?.liveFlyInto(o.floorId,Ao(o,0)),setTimeout(()=>{this._through?.entity===e&&(this._liveLive=!0)},1150))};this.floorId!==o.floorId?(this.throughFloor=o.floorId,this.fire("floor-tap",{floorId:o.floorId}),setTimeout(s,450)):s()}endThrough(){let e=this._through;e&&(this._through=null,this._liveLive=!1,this.viewer?.flyTo(e.back,1e3),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building)return g;let e=this.hass,n=ln(e,this.building);this.watchCameras(!0);let t=()=>this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0})),i=Math.max(1,Math.min(4,Math.ceil(Math.sqrt(n.length))));return f`<div class="live-wall">
      <div class="live-wall-head">
        <b>${$(e,"camera_wall_title")}</b><span>· ${n.length}</span><span class="live-spacer"></span>
        <button class="nf-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="live-wall-grid" style=${`grid-template-columns: repeat(${i}, 1fr)`}>
        ${n.map(o=>{let{snapshot:s}=dr(e,o.entity,this.cameraTick*5e3),a=cn(e,o.entity);return f`<button
            class="live-wall-cam ${a.length?"live-seen":""}"
            @click=${()=>{this.throughWall=!0,t(),this.lookThrough(o.entity)}}
          >
            ${s?f`<img src=${s} alt="" />`:f`<div class="live-wall-none">${$(e,"state_unavailable")}</div>`}
            <span class="live-wall-name">${o.name} ${a.map(l=>hr[l]).join(" ")}</span>
          </button>`})}
      </div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return g;let n=this.hass,t=dr(n,e.entity,this.cameraTick*5e3),i=cn(n,e.entity);return f`<div class="live-through ${this._liveLive?"live-live":""}">
      ${this._liveLive&&(t.stream||t.snapshot)?f`<img class="live-through-img" src=${t.stream??t.snapshot} alt="" @error=${o=>t.snapshot&&(o.target.src=t.snapshot)} />`:g}
      <div class="live-through-bar">
        <span class="live-rec">●</span>
        <b>${T(n,e.entity)}</b>
        ${i.map(o=>f`<span class="live-detect">${hr[o]} ${$(n,`detect_${o==="vehicle"?"car":o}`)}</span>`)}
        <span class="live-spacer"></span>
        <button class="nf-chip" @click=${()=>this.endThrough()}>${$(n,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return g;let n=this.renderRoot.querySelector(".nf-stage"),t=n?.clientWidth??800,i=n?.clientHeight??600,o=Math.max(8,Math.min(t-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return f`<div class="nf-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nf-quick-menu
        style="left:${o}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></nf-quick-menu>`}onDeviceTap(e,n=0,t=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e==="grid"){let o=this.building,s=o?o.energy.grid??Zt(o,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&oe(this,s);return}if(e.startsWith("detect:")){oe(this,e.slice(7));return}let i=M(e);if(i==="cover"||i==="camera"){this._menu={entity:e,x:n,y:t};return}if(i&&ai.has(i)){if(this.confirmSet.has(e)&&!confirm($(this.hass,"confirm_switch",{name:T(this.hass,e)})))return;Hi(this.hass,e)}else oe(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("nextfloor.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}liveCars(e,n){let t=[];for(let i of n.floors)for(let o of i.furniture){if(o.type!=="parking")continue;let s=_o(e,o);if(!s||s.soc===null&&s.range===null&&s.locked===null&&s.climateOn===null)continue;let a=er(e,o),l=a?Qi(o,a):null,c=o.name||(a?$e(e,a):$e(e,o.type));t.push({spot:o.id,name:c,at:{floorId:i.id,x:o.x,z:o.z,y:ge(i,o)+(l?.h??.2)+.6},car:s})}return t}liveMedia(e,n){let t=[];for(let i of n.floors){for(let o of i.furniture){let s=this.furnitureLinks?.get(o.id)?.entity;s?.startsWith("media_player.")&&t.push({entity:s,name:o.name||$e(e,o.type),at:{floorId:i.id,x:o.x,z:o.z,y:ge(i,o)+o.h+.15}})}for(let o of i.placements)o.entity_id.startsWith("media_player.")&&t.push({entity:o.entity_id,name:o.name||T(e,o.entity_id),at:{floorId:i.id,x:o.x,z:o.z,y:(o.y??1.1)+.15}})}return So(e,t)}syncLhCards(e,n,t,i,o){let s=[],a=t.summary,l=a.solar!==null||a.grid!==null||a.battery!==null||a.consumption!==null,c=sn(n),u=[...n.floors].sort((d,h)=>h.elevation-d.elevation)[0];if(this.liveCardsOn&&!this.dimmed&&!this.roomId&&l&&c&&u){let d=0,h=0,_=0;for(let b of u.rooms)for(let[p,x]of b.points)d+=p,h+=x,_++;s.push({kind:"house",at:{floorId:u.id,x:_?d/_:c.x,z:_?h/_:c.z,y:u.height+3.2},summary:a,autarky:t.autarky})}if(this.liveCardsOn&&!this.dimmed&&!this.roomId){for(let d of i)s.push({kind:"car",at:d.at,spot:d.spot,name:d.name,car:d.car});for(let d of o)s.push({kind:"media",at:{...d.at,y:d.at.y+.5},media:d})}JSON.stringify(s)!==JSON.stringify(this._liveCards)&&(this._liveCards=s),e.setLiveAnchors(s.map(d=>d.at),s.length?(d,h,_,b)=>this.placeLhCard(d,h,_,b):null)}placeLhCard(e,n,t,i){let o=this.renderRoot.querySelector(`.live-card[data-i="${e}"]`);o&&(o.dataset.x=String(n),o.dataset.y=String(t),o.style.visibility=i?"visible":"hidden",e===this._liveCards.length-1&&wo(this.renderRoot))}toggleLhCards(){this._liveCardOn=!this._liveCardOn;try{localStorage.setItem("nextfloor.cards",this._liveCardOn?"1":"0")}catch{}this.syncDevices(!0)}renderLhEnergy(){let e=this._liveEnergy?.summary;if(!e||this.roomId||!this.showEnergy||!this.hass)return g;if(e.consumption===null&&e.grid===null&&e.solar===null&&e.battery===null)return g;let n=i=>$(this.hass,i),t=[];if(e.solar!==null&&t.push({cls:"solar",label:n("energy_solar"),value:ue(this.hass,e.solar)}),e.consumption!==null&&t.push({cls:"total",label:n("energy_consumption"),value:ue(this.hass,e.consumption)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?ue(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);t.push({cls:"battery",label:n("energy_battery"),value:i.join(" \xB7 ")})}if(e.grid!==null){let i=e.grid<0;t.push({cls:i?"export":"grid",label:n(i?"energy_grid_export":"energy_grid_import"),value:ue(this.hass,Math.abs(e.grid))})}return e.tariff&&t.push({cls:"tariff",label:n("energy_tariff"),value:`${V(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),f`<div class="nf-energy" aria-live="off">
      ${this.liveCardsOn&&this._liveCards.some(i=>i.kind==="house")?g:t.map(i=>f`<div class="nf-energy-item nf-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?g:f`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${n("flows_hint")} aria-label=${n("flows")} @click=${()=>this.toggleFlows()}>
            <span>${n("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms!==null?g:f`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${n("holos_hint")} aria-label=${n("holos")} @click=${()=>this.toggleLhCards()}>
            <span>${n("holos")}</span><b>◫</b>
          </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return g;let e=Jt[this.heatMode],n=this.heatMode==="temperature",t=n?Ge(this.hass,e.stops[0][0]):e.stops[0][0],i=n?Ge(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],o=n?ie(this.hass):e.unit,s=a=>$(this.hass,a);return f`<div class="nf-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="nf-legend-bar" style="background:${qi(this.heatMode)}"></span>
      <span class="nf-legend-range"><span>${V(this.hass,t,0)} ${o}</span><span>${V(this.hass,i,0)} ${o}</span></span>
      ${this.heatValues.size?g:f`<span class="nf-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=bt[this.theme]??bt.neon,n=this._sky;return e.night[0].map((t,i)=>Math.round(t+(e.day[0][i]-t)*n))}render(){let e=this._sky,n=(o,s)=>`rgb(${o.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,t=bt[this.theme]??bt.neon,i=`--nf-sky:${n(t.night[0],t.day[0])};--nf-ground:${n(t.night[1],t.day[1])}`;return f`<div
      class="nf-stage ${this.roomLabels?"":"nf-no-room-names"} ${this._low?"nf-low":""} ${this.panelOpen?"nf-panel-open":""} ${this._alerts.length?"nf-has-alerts":""} ${this._through?"nf-through-on":""} ${this._narrowStage?"nf-narrow":""}"
      style=${i}
    >
      ${this._error?f`<p class="nf-error">${this._error}</p>`:g} ${this.clean?g:this.renderLhEnergy()} ${yo(this.hass,this.roomId||this.panelOpen||this._through||this.cameraWall?[]:this._liveCards,(o,s,a,l)=>this.hass?.callService(o,s,{entity_id:a,...l}))} ${this.clean?g:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean?g:f`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?f`<span class="nf-stats"
            ><b>${this._stats.fps?$(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):$(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?f`(${this._stats.busy.map(o=>$(this.hass,`stats_busy_${o}`)).join(", ")})`:g} ·
            ${$(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${$(this.hass,this._stats.low?"stats_low":"stats_full",{r:V(this.hass,this._stats.pixelRatio,2)})}</span
          >`:g}
    </div>`}static styles=[se,ye,xo,j`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .nf-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .nf-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--nf-chrome-solid);
        color: var(--nf-text);
        font: 600 13.5px var(--nf-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: nf-alert-pulse 1.2s ease-in-out infinite;
      }
      .nf-alert-water,
      .nf-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .nf-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .nf-alert-more {
        align-self: center;
        color: var(--nf-muted);
        font-size: 13px;
      }
      @keyframes nf-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .nf-has-alerts .nf-energy {
        top: 58px;
      }
      .nf-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .nf-scenes .nf-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .nf-alert,
        .nf-dev-found {
          animation: none;
        }
      }
      .nf-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: nf;
        background: radial-gradient(ellipse at 50% 35%, var(--nf-sky, var(--nf-bg2)), var(--nf-ground, var(--nf-bg)) 72%);
        transition: background 2s ease;
      }
      .nf-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .nf-canvas:active {
        cursor: grabbing;
      }
      .nf-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .nf-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .nf-pin-info small {
        font-size: 11px;
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .nf-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--nf-title-font);
        color: var(--nf-text);
        background: var(--nf-chrome);
        border: 1px solid var(--nf-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--nf-shadow);
      }
      .nf-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      .nf-pin-floor b {
        font: 700 15px var(--nf-title-font);
        letter-spacing: -0.01em;
      }
      .nf-pin-floor span {
        font: 500 12px var(--nf-font);
        opacity: 0.78;
      }
      .nf-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome);
        color: var(--nf-muted);
        font: 600 12px var(--nf-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .nf-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: color-mix(in srgb, var(--nf-soft) 14%, transparent);
      }
      .nf-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: color-mix(in srgb, var(--nf-accent) 50%, transparent);
      }
      .nf-dev[data-entity^="trail:"] .nf-dev-icon {
        color: var(--nf-accent);
      }
      .nf-dev[data-entity^="trail:"] .nf-dev-text {
        display: inline;
      }
      .nf-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--nf-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nf-dev-watt:empty {
        display: none;
      }
      .nf-dev-watt {
        padding: 1px 6px 1px 0;
        color: var(--nf-accent);
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .nf-dev-on .nf-dev-watt {
        color: #2a1a00;
      }
      .nf-person {
        position: absolute;
        left: 0;
        top: 0;
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--nf-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .nf-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .nf-person[hidden] {
        display: none;
      }
      .nf-no-room-names .nf-pin {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .nf-stage.nf-low {
        transition: none;
      }
      .nf-low .nf-pin,
      .nf-low .nf-dev,
      .nf-low .nf-dev-on,
      .nf-low .nf-energy-item,
      .nf-low .nf-find input,
      .nf-low .nf-find-list,
      .nf-low .nf-find-btn,
      .nf-low .nf-swipe,
      .nf-low .nf-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      .nf-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .nf-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--nf-chrome) 70%, transparent);
        color: var(--nf-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--nf-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .nf-thumb:hover,
      .nf-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .nf-thumb[aria-pressed="true"] {
        border-color: var(--nf-accent);
        box-shadow: var(--nf-shadow), 0 0 0 2px var(--nf-accent);
      }
      .nf-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .nf-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
      }
      .nf-thumb img + span {
        inset: auto 0 0 0;
        padding: 18px 10px 6px;
        color: #fff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.62));
      }
      .nf-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--nf-line);
        border-radius: 8px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .nf-thumbs-compact .nf-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .nf-thumbs-compact .nf-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .nf-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .nf-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .nf-thumbs-small .nf-thumb {
        width: 104px;
      }
      .nf-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .nf-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--nf-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .nf-central-on {
        color: var(--nf-accent);
      }
      .nf-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--nf-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--nf-line);
        border-radius: 16px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .nf-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .nf-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .nf-central-row small {
        opacity: 0.6;
      }
      .nf-central .nf-btn {
        min-width: 64px;
      }
      .nf-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .nf-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .nf-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .nf-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .nf-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .nf-low .nf-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .nf-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--nf-text);
        cursor: pointer;
        z-index: 4;
      }
      .nf-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .nf-eye:hover,
      .nf-eye-clean:hover {
        opacity: 1;
      }
      .nf-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--nf-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      .nf-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--nf-line);
        border-radius: 14px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(8px);
      }
      .nf-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nf-muted);
        cursor: pointer;
      }
      .nf-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(8px);
      }
      .nf-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--nf-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .nf-find-list button:hover,
      .nf-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .nf-find-list b {
        display: block;
        font-weight: 600;
      }
      .nf-find-list small,
      .nf-find-list p {
        color: var(--nf-muted);
        font-size: 12px;
        margin: 0;
      }
      .nf-find-list p {
        padding: 8px 10px;
      }
      .nf-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .nf-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .nf-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      .nf-swipe span {
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-swipe b {
        grid-row: 2;
        font: 700 22px var(--nf-title-font);
      }
      .nf-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .nf-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--nf-warm);
      }
      .nf-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .nf-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .nf-wall {
        position: absolute;
        inset: 56px 12px calc(var(--nf-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: var(--nf-shadow);
        overflow: auto;
      }
      .nf-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: var(--nf-text);
      }
      .nf-wall-head .nf-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .nf-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .nf-wall-tools {
        display: flex;
        gap: 6px;
      }
      .nf-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .nf-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .nf-wall-big > hui-picture-entity-card,
      .nf-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .nf-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .nf-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .nf-wall-cam img,
      .nf-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .nf-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .nf-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: var(--nf-text);
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .nf-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      /* a lightning bolt of the weather layer lights up the whole stage for a moment */
      .live-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: radial-gradient(circle at 50% 20%, rgba(235, 242, 255, 0.55), rgba(200, 215, 255, 0.18) 70%);
        pointer-events: none;
      }
      .nf-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--nf-blend);
      }
      .nf-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--nf-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nf-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--nf-line);
        pointer-events: auto;
      }
      .nf-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .nf-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .nf-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--nf-accent);
      }
      .nf-through-on :is(.nf-pin, .nf-dev, .nf-energy, .nf-legend, .nf-thumbs, .nf-scenes, .nf-find-btn, .nf-stats) {
        display: none;
      }
      nf-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .nf-dev-found {
        animation: nf-found 0.6s ease-in-out 4;
      }
      @keyframes nf-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--nf-accent));
        }
      }
      .nf-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--nf-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .nf-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .nf-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
      }
      .nf-legend-none {
        color: var(--nf-warm);
      }
      .nf-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .nf-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--nf-chrome);
        border-left: 3px solid var(--nf-line);
        box-shadow: var(--nf-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .nf-energy-item span {
        font-size: 11px;
        color: var(--nf-muted);
      }
      .nf-energy-item b {
        font: 700 15px var(--nf-title-font);
      }
      .nf-energy-total {
        border-left-color: #6fd8ff;
      }
      .nf-energy-grid {
        border-left-color: var(--nf-accent);
      }
      .nf-energy-export,
      .nf-energy-solar {
        border-left-color: #ffc633;
      }
      .nf-energy-battery {
        border-left-color: #59ff8c;
      }
      .nf-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--nf-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .nf-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--nf-accent);
      }
      .nf-flow-toggle span {
        display: none;
      }
      .nf-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .nf-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .nf-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container nf (max-width: 900px) {
        .nf-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .nf-legend {
          bottom: auto;
          top: 62px;
        }
        .nf-has-alerts .nf-legend {
          top: 110px;
        }
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nf-panel-open :is(.nf-find-btn, .nf-find, .nf-thumbs, .nf-legend, .nf-stats, .nf-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .nf-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .nf-dev {
          padding: 6px;
        }
        .nf-pin {
          padding: 8px 12px;
        }
      }
      .nf-dev-full .nf-dev-text {
        display: inline;
      }
      .nf-dev-name:empty {
        display: none;
      }
      .nf-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--nf-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .nf-dev-sel {
        outline: 2px solid var(--nf-accent);
        outline-offset: 2px;
      }
      .nf-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--nf-glow, var(--nf-warm));
        box-shadow: 0 0 16px var(--nf-glow, var(--nf-warm));
      }
      .nf-dev-on .nf-dev-icon {
        background: color-mix(in srgb, var(--nf-text) 28%, transparent);
      }
      .nf-dev-on .nf-dev-text {
        color: #2a1a00;
      }
      .nf-dev-na {
        opacity: 0.45;
      }
      .nf-dev-dim {
        opacity: 0.35;
      }
      .nf-dev[hidden],
      .nf-pin[hidden] {
        display: none;
      }
      .nf-pin-active {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
        border-color: transparent;
        box-shadow: var(--nf-shadow);
      }
      .nf-stats b {
        color: var(--nf-accent);
        font-weight: 700;
      }
      .nf-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--nf-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--nf-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--nf-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .nf-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--nf-danger);
      }
    `]};customElements.get("nf-view3d")||customElements.define("nf-view3d",_r);function ue(r,e){return Math.abs(e)>=1e3?`${V(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function Tl(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}var Dl='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 3c1.7 0 2.8 1.9 2.8 4.3S9.7 11 8 11 5.2 9.7 5.2 7.3 6.3 3 8 3m-1.8 9.5h3.6l-.6 3.4c-.2 1.2-1.1 2.1-2.2 2.1-1.2 0-1.9-1.1-1.7-2.3zM16 7c1.7 0 2.8 1.9 2.8 4.3S17.7 15 16 15s-2.8-1.3-2.8-3.7S14.3 7 16 7m-1.8 9.5h3.6l.9 2.4c.4 1.2-.4 2.1-1.6 2.1-1.1 0-2-.9-2.2-2.1z"/></svg>';function Hl(r,e){let n=Math.max(0,Math.round((Date.now()/1e3-e)/60));return n<1?$(r,"live_now"):$(r,"live_minutes_ago",{n})}var Il={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2.6"/><path d="M8.5 9.5h7l-1 6h-1.4L12.6 22h-1.2l-.5-6.5H9.5z"/></svg>',vehicle:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.6-4.2C6.9 6 7.6 5.5 8.4 5.5h7.2c.8 0 1.5.5 1.8 1.3L19 11h1v6h-2v1.5h-2.5V17h-7v1.5H6V17H4v-6zm2.4 0h9.2l-1-2.9H8.4zM7 14.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6m10 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6"/></svg>',animal:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><circle cx="6.5" cy="9" r="2"/><circle cx="17.5" cy="9" r="2"/><circle cx="9.5" cy="5" r="2"/><circle cx="14.5" cy="5" r="2"/><path d="M12 11c3 0 5.5 3.5 5.5 6.2 0 2-1.6 2.8-3.4 2.3-1.3-.4-2.9-.4-4.2 0-1.8.5-3.4-.3-3.4-2.3C6.5 14.5 9 11 12 11"/></svg>'};var Cl=.25,No=r=>Math.round(r*1e3)/1e3,Bo=(r,e,n)=>r.rooms.find(t=>t.points.length>=3&&H([e,n],t.points));function vr(r,e,n,t,i){let o=Bo(r,e,n);if(!o)return[t,i];let s=(a,l)=>H([a,l],o.points);return s(t,i)?[t,i]:s(t,n)?[t,n]:s(e,i)?[e,i]:[e,n]}function Pl(r,e,n,t){return r.rooms.some(i=>i.id!==e.id&&i.points.some((o,s)=>{let a=i.points[(s+1)%i.points.length];return Math.abs(ee(K(o,n),t))<.02&&Math.abs(ee(K(a,n),t))<.02}))}var br=(r,e)=>Math.abs((r-e+540)%360-180);function Vo(r,e,n,t=Cl){let i=Bo(r,e.x,e.z);if(!i)return null;let o=i.points,s=We(o)>=0?1:-1,a=null;return o.forEach((l,c)=>{let u=o[(c+1)%o.length],d=pe(K(u,l));if(d<.3)return;let h=[(u[0]-l[0])/d,(u[1]-l[1])/d],_=[-h[1]*s,h[0]*s],b=ee(K([e.x,e.z],l),h);if(b<0||b>d)return;let p=Pl(r,i,l,_)?n/2:0,x=ee(K([e.x,e.z],l),_)-p,m=Math.atan2(-_[0],_[1])*180/Math.PI,y=[{rotation:m,extent:e.d/2},{rotation:m+90,extent:e.w/2},{rotation:m-90,extent:e.w/2}].reduce((z,R)=>br(e.rotation,R.rotation)<br(e.rotation,z.rotation)?R:z);if(br(e.rotation,y.rotation)>50)return;let w=x-y.extent;Math.abs(w)>t||a&&Math.abs(w)>=Math.abs(a.gap)||(a={x:No(e.x-_[0]*w),z:No(e.z-_[1]*w),rotation:(Math.round(y.rotation)%360+360)%360,gap:w})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}var C={get(r){try{return localStorage.getItem(`nextfloor.${r}`)}catch{return null}},set(r,e){try{localStorage.setItem(`nextfloor.${r}`,e)}catch{}}},Ol=He`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`,wr=class extends q{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};data=new Ne(this);constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("nf-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._explode=C.get("explode")!=="0",this._keepRoof=C.get("roof")==="1";let e=C.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=C.get("stats")==="1"||new URLSearchParams(location.search).has("nf_stats");let n=C.get("markers");this._markers=n==="none"||n==="all"?n:"important";let t=C.get("heat");this._heat=t==="temperature"||t==="humidity"||t==="co2"||t==="values"?t:"none";let i=C.get("theme");this._theme=i&&Xn.includes(i)?i:"neon";let o=C.get("accent");this._accent=o&&/^#[0-9a-f]{6}$/i.test(o)?o:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let s=C.get("floor_stack");this._floorStack=s==="stacked"||s==="single"?s:"dim",this._roomNames=C.get("room_names")!=="0",this._trail=C.get("trail")==="1",this._cameraWall=!1,this._clean=C.get("clean")==="1",this._navWrap=C.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=C.get("weather")!=="0"}t(e,n){return $(this.hass,e,n)}willUpdate(e){e.has("hass")&&(this.style.colorScheme=Gt(this.hass)),e.has("hass")&&this.hass&&this.data.setHass(this.hass),e.has("hass")&&this.hass&&!Ze(this.hass.language)&&Lt(this.hass.language).then(()=>this.requestUpdate());let n=this.data.building;n&&this._floorId&&!n.floors.some(t=>t.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:n,roomId:t}=e.detail;if((this.data.building?.floors.length??0)>1&&n&&this._floorId!==n){this._floorId=n,this._roomId=null;return}t&&(this._roomId=t===this._roomId?null:t)}setKeepRoof(e){this._keepRoof=e,C.set("roof",e?"1":"0")}setExplode(e){this._explode=e,C.set("explode",e?"1":"0")}setQuality(e){this._quality=e,C.set("quality",e)}editFurniture(e,n){let t=this.data.building;if(!t)return;let i=structuredClone(t);for(let o of i.floors){let s=o.furniture.find(a=>a.id===e);s&&n(s,o)}this.data.edit(i)}editDevice(e,n){let t=this.data.building;if(!t)return;let i=structuredClone(t);for(let o of i.floors){let s=o.placements.find(a=>a.entity_id===e);s&&n(s,o)}this.data.edit(i)}moveDevice(e){let{id:n,x:t,z:i}=e.detail;this.editDevice(n,(o,s)=>{let[a,l]=vr(s,o.x,o.z,t,i);Object.assign(o,{x:a,z:l})})}turnStep(){return M(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,n=>n.rotation=(((n.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let i of t.floors)i.placements=i.placements.filter(o=>o.entity_id!==e);this.data.edit(t),this._selDevice=null}renderDeviceFields(e){let t=this.data.building?.floors.find(d=>d.placements.some(h=>h.entity_id===e)),i=t?.placements.find(d=>d.entity_id===e);if(!t||!i)return g;let o=M(e),s=o==="light",a=o==="camera",l=i.mount==="ceiling",c=o?Ve(o,t.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,u=(d,h,_,b,p,x)=>f`<label class="nf-size" title=${d}
        >${d}
        <input
          type="number"
          inputmode="decimal"
          step=${_}
          min=${b}
          max=${p}
          .value=${String(Math.round(h*100)/100)}
          @change=${m=>{let k=parseFloat(m.target.value.replace(",","."));Number.isFinite(k)&&x(Math.min(p,Math.max(b,k)))}}
        />
      </label>`;return f`${s?f`<select class="nf-size-select" title=${this.t("lamp_mount")} @change=${d=>this.editDevice(e,h=>Object.assign(h,{mount:d.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(d=>f`<option value=${d} ?selected=${d===(i.mount??"ceiling")}>${this.t(`lamp_${d}`)}</option>`)}
          </select>`:g}
      ${a?f`<select class="nf-size-select" title=${this.t("camera_mount")} @change=${d=>this.editDevice(e,h=>Object.assign(h,{mount:d.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${u(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,d=>this.editDevice(e,h=>h.fov=d))}
            ${u(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,d=>this.editDevice(e,h=>h.reach=d))}
            ${u(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,d=>this.editDevice(e,h=>h.tilt=d))}`:g}
      <label class="nf-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??c)*100)/100)}
          @change=${d=>{let h=parseFloat(d.target.value.replace(",","."));Number.isFinite(h)&&h>=0&&this.editDevice(e,_=>_.y=Math.round(h*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?f`<button class="nf-chip" @click=${()=>this.editDevice(e,d=>d.y=null)}>${this.t("height_auto")}</button>`:g}`}furnitureName(e){let n=this.data.building?.floors.flatMap(t=>t.furniture).find(t=>t.id===e);return n?$e(this.hass,n.type):""}moveFurniture(e){let{id:n,x:t,z:i}=e.detail,o=this.data.building?.settings.wall_interior??.12;this.editFurniture(n,(s,a)=>{let[l,c]=vr(a,s.x,s.z,t,i);Object.assign(s,{x:l,z:c});let u=Vo(a,s,o);u&&Object.assign(s,u)})}renderSizeFields(e){let n=this.data.building?.floors.flatMap(o=>o.furniture).find(o=>o.id===e);if(!n)return g;let t=(o,s)=>f`<label class="nf-size" title=${this.t(`size_${o}`)}
      >${s}
      <input
        type="number"
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${String(Math.round(n[o]*100)/100)}
        @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>0&&this.editFurniture(e,c=>c[o]=Math.round(l*1e3)/1e3)}}
    /></label>`,i=this.data.building?.floors.find(o=>o.furniture.some(s=>s.id===e));return f`${t("w",this.t("size_short_w"))}${t("d",this.t("size_short_d"))}${t("h",this.t("size_short_h"))}
    ${i&&ni(n)?f`<label class="nf-size" title=${this.t("mount_height")}
            >↕
            <input
              type="number"
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${String(Math.round((n.mount_y??ge(i,n))*100)/100)}
              @change=${o=>{let s=parseFloat(o.target.value.replace(",","."));Number.isFinite(s)&&s>=0&&this.editFurniture(e,a=>a.mount_y=Math.round(s*1e3)/1e3)}}
          /></label>
          ${n.mount_y!=null?f`<button class="nf-chip" @click=${()=>this.editFurniture(e,o=>o.mount_y=null)}>${this.t("height_auto")}</button>`:g}`:g}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,n=>n.rotation=((n.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,n=this.data.building;if(!e||!n)return;let t=structuredClone(n);for(let i of t.floors)i.furniture=i.furniture.filter(o=>o.id!==e);this.data.edit(t),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("nf-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&!Ze(this.hass.language))return g;let e=this.data.building,n=this.data.saveState;return f`
      <div class="nf-app ${this._clean&&this._mode==="view"?"nf-clean":""}" style=${this._accent?`--nf-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?g:f`<header class="nf-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>${Ol}NextFloor</h1>
          ${this.isAdmin?f`<div class="nf-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="nf-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:g}
          <span class="nf-grow"></span>
          ${this._mode==="view"&&e?.floors.some(t=>t.rooms.length)?f`<button
                  class="nf-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="nf-view-opts ${this._optsOpen?"nf-opts-open":""}">
                <div class="nf-seg nf-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(t=>f`<button aria-pressed=${this._quality===t} @click=${()=>this.setQuality(t)}>${this.t(`quality_${t}`)}</button>`)}
              </div>
              <div class="nf-seg nf-quality" role="group" aria-label=${this.t("theme")}>
                ${Xn.map(t=>f`<button
                      aria-pressed=${this._theme===t}
                      @click=${()=>{this._theme=t,C.set("theme",t)}}
                    >
                      ${this.t(`theme_${t}`)}
                    </button>`)}
                <label class="nf-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${t=>{this._accent=t.target.value,C.set("accent",this._accent)}}
                  />
                  ${this._accent?f`<button
                        class="nf-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,C.set("accent","")}}
                      >
                        ↺
                      </button>`:g}
                </label>
              </div>
              <div class="nf-seg nf-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(t=>f`<button
                      aria-pressed=${this._markers===t}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=t,C.set("markers",t)}}
                    >
                      ${this.t(`markers_${t}`)}
                    </button>`)}
              </div>
              <div class="nf-seg nf-quality">
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,C.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:g}
          ${this._mode==="editor"&&n!=="idle"?f`<span class="nf-save nf-save-${n}">${this.t(n==="saving"?"saving":n==="saved"?"saved":"save_error")}</span>`:g}
          <span class="nf-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?g:this.renderNotices()}
        ${this.data.error&&!e?f`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>`:g}
        ${!e&&!this.data.error?f`<p class="nf-message">${this.t("loading")}</p>`:g}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):g}
      </div>
    `}renderNotices(){let e=this.data,n=[];if(e.needsRestart&&(e.versionGap==="frontend"?n.push(f`<div class="nf-notice nf-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="nf-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):n.push(f`<div class="nf-notice nf-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&n.push(f`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let t=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);n.push(f`<div class="nf-notice">
          <span>${this.t("draft_found",{time:t})}</span>
          <button class="nf-btn nf-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="nf-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return n.length?f`<div class="nf-notices">${n}</div>`:g}renderExtensions(){return this._editorReady?f`<nf-extensions
      class="nf-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></nf-extensions>`:(Tn().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),f`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?f`<nf-editor
      class="nf-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${n=>this.data.edit(n.detail.building)}
    ></nf-editor>`:(Tn().then(()=>this._editorReady=!0,n=>this.data.error=String(n)),f`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let n=e.currentTarget;n.scrollWidth<=n.clientWidth||(n.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(i=>i.rooms.length))return f`<div class="nf-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?f`<button class="nf-btn nf-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:g}
      </div>`;let n=e.floors.find(i=>i.id===this._floorId),t=n?[n]:e.floors;return f`
      ${this._clean?g:f`<nav class="nf-nav ${this._navWrap?"nf-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?f`<button class="nf-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(i=>f`<button
                  class="nf-chip"
                  aria-pressed=${i.id===this._floorId}
                  @click=${()=>{this._floorId=i.id,this._roomId=null}}
                >
                  ${i.name}
                </button>`)}
              <span class="nf-sep"></span>`:g}
        ${t.flatMap(i=>[t.length>1&&i.rooms.length?f`<span class="nf-nav-floor">${i.name}</span>`:g,...i.rooms.map(o=>f`<button
              class="nf-chip nf-room-chip"
              aria-pressed=${o.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=i.id),this._roomId=o.id===this._roomId?null:o.id}}
            >
              ${o.name}
            </button>`)])}
        <button
          class="nf-chip nf-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,C.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="nf-stage-wrap ${this._roomId?"nf-room-open":""}">
        <nf-view3d
          class="nf-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,C.set("clean",this._clean?"1":"0")}}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .accent=${this._accent}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${i=>this._selFurniture=i.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${i=>this._selDevice=i.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${i=>{this._floorId=i.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></nf-view3d>
        ${this._roomId?f`<nf-room-panel
              class="nf-room-panel"
              @camera-look=${i=>this.view3d()?.lookThrough(i.detail.entity)}
              .hass=${this.hass}
              .room=${e.floors.flatMap(i=>i.rooms).find(i=>i.id===this._roomId)??null}
              .floor=${e.floors.find(i=>i.rooms.some(o=>o.id===this._roomId))??null}
              .confirmEntities=${qe(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:g}
        ${this._clean?g:f`<div class="nf-overlay">
          <div class="nf-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this._wallMode="auto"}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this._wallMode="cut"}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?f`<div class="nf-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:g}
          ${!this._floorId&&e.settings.roof.type!=="none"?f`<div class="nf-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:g}
          ${e.floors.length>1&&this._floorId?f`<div class="nf-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(i=>f`<button
                      aria-pressed=${this._floorStack===i}
                      @click=${()=>{this._floorStack=i,C.set("floor_stack",i)}}
                    >
                      ${this.t(`floor_stack_short_${i}`)}
                    </button>`)}
              </div>`:g}
          <div class="nf-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(i=>f`<button
                  aria-pressed=${this._heat===i}
                  @click=${()=>{this._heat=i,C.set("heat",i)}}
                >
                  ${this.t(i==="none"?"heat_off":`heat_short_${i}`)}
                </button>`)}
          </div>
          <button
            class="nf-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,C.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="nf-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,C.set("trail",this._trail?"1":"0")}}
          >
            ${this.t("trail_short")}
          </button>
          <button
            class="nf-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${this.t("cameras_short")}
          </button>
          <button
            class="nf-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,C.set("weather",this._weather?"1":"0")}}
          >
            ${this.t("weather_short")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?f`<button class="nf-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:g}
        </div>`}
        ${this._furnish?f`<div class="nf-furnish-bar">
              ${this._selFurniture?f`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="nf-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="nf-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="nf-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,i=>i.mirror=!i.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?f`<span>${T(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="nf-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="nf-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="nf-chip nf-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:f`<span>${this.t("furnish_hint")}</span>`}
              <button class="nf-chip nf-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:g}
      </div>
    `}static styles=[se,ye,j`
      .nf-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--nf-bg);
      }
      .nf-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .nf-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 56px;
        border-bottom: var(--app-header-border-bottom, 1px solid var(--nf-line));
        background: var(--app-header-background-color, var(--nf-chrome-solid));
        color: var(--app-header-text-color, var(--nf-text));
        flex-wrap: wrap;
      }
      ha-menu-button {
        color: var(--app-header-text-color, var(--nf-text));
      }
      h1 {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 400;
        font-size: 20px;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .nf-mark {
        width: 26px;
        height: 28px;
        color: var(--nf-accent);
      }
      .nf-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .nf-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--nf-line);
        background: var(--nf-chrome-solid);
        font-size: 13.5px;
      }
      .nf-notice span {
        flex: 1;
        min-width: 200px;
      }
      .nf-notice-warn {
        border-color: color-mix(in srgb, var(--nf-warm) 60%, transparent);
        color: var(--nf-warm);
      }
      .nf-notice-error {
        border-color: color-mix(in srgb, var(--nf-danger) 60%, transparent);
        color: var(--nf-danger);
        word-break: break-word;
      }
      .nf-chip-on {
        background: var(--nf-accent);
        color: var(--nf-accent-text);
      }
      .nf-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--nf-chrome);
        box-shadow: var(--nf-shadow);
        font-size: 13.5px;
      }
      .nf-size-select {
        font: inherit;
        color: var(--nf-text);
        background: var(--nf-chrome-solid);
        border: 1px solid var(--nf-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .nf-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--nf-muted);
      }
      .nf-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .nf-danger-chip {
        color: var(--nf-danger);
      }
      .nf-grow {
        flex: 1;
      }
      .nf-save {
        font-size: 12.5px;
        color: var(--nf-muted);
      }
      .nf-view-opts {
        display: contents;
      }
      .nf-opts-btn {
        display: none;
      }
      /* phones: the view options fold behind ⚙ (one header row instead of three) */
      @media (max-width: 700px) {
        .nf-opts-btn {
          display: grid;
          place-items: center;
          order: 3;
          width: 36px;
          height: 36px;
          border: 1px solid var(--nf-line);
          border-radius: 10px;
          background: transparent;
          color: var(--nf-text);
          font-size: 17px;
          cursor: pointer;
        }
        .nf-opts-btn[aria-expanded="true"] {
          color: var(--nf-accent);
          border-color: var(--nf-accent);
        }
        .nf-view-opts {
          display: none;
        }
        .nf-view-opts.nf-opts-open {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          order: 5;
          width: 100%;
        }
        .nf-version {
          order: 4;
        }
        .nf-header .nf-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .nf-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--nf-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .nf-save-error {
        color: var(--nf-danger);
      }
      .nf-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .nf-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .nf-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--nf-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .nf-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .nf-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .nf-accent-reset {
        border: none;
        background: none;
        color: var(--nf-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .nf-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .nf-nav:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .nf-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .nf-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--nf-muted);
        margin-left: 6px;
      }
      .nf-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .nf-nav .nf-chip {
        box-shadow: none;
        border: 1px solid var(--nf-line);
      }
      .nf-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--nf-line);
      }
      .nf-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: nf;
      }
      .nf-stage-wrap nf-view3d {
        flex: 1;
      }
      .nf-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      nf-view3d {
        --nf-bottom-inset: 52px;
      }
      .nf-clean nf-view3d {
        --nf-bottom-inset: 0px;
      }
      .nf-furnish-bar {
        bottom: 68px;
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nf-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .nf-room-open .nf-overlay {
          display: none;
        }
      }
      .nf-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .nf-overlay > * {
        pointer-events: auto;
      }
      .nf-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .nf-message,
      .nf-empty {
        padding: 32px 20px;
        color: var(--nf-muted);
        text-align: center;
      }
      .nf-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("nextfloor-panel")||customElements.define("nextfloor-panel",wr);var Wl=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/,Go=(r,e)=>Number(r)*60+Number(e);function dn(r,e,n=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let t=Wl.exec(r.trim());if(!t)return!1;let i=Go(t[1],t[2]),o=Go(t[3],t[4]),s=n.getHours()*60+n.getMinutes();return i>o?s>=i||s<o:s>=i&&s<o}var Ko;function Uo(){let r=new URL("./nextfloor-card-editor.js?v=275986c6400f",new URL(import.meta.url)).href;return Ko??=import(r),Ko}var yr=class extends q{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new Ne(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let n=this._config?.controls_hide_after??0;n>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,n*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("nf-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.armIdle(),this.nightTimer=setInterval(()=>this._night=dn(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Uo(),document.createElement("nextfloor-card-editor")}static getStubConfig(){return{type:"custom:nextfloor-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=dn(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&(this.style.colorScheme=Gt(this.hass)),e.has("hass")&&this.hass){this.data.setHass(this.hass),Ze(this.hass.language)||Lt(this.hass.language).then(()=>this.requestUpdate());let n=dn(this._config?.night,this.hass);n!==this._night&&(this._night=n)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){if(this.hass&&!Ze(this.hass.language))return g;let e=this.data.building,n=this._config?.height??420,t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(m=>m.rooms.some(k=>k.id===t.room))&&(this._roomId=t.room));let i=this._floorId===void 0?t?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(m=>m.id===i)?i:null,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1,a=m=>t?.controls===!0||Array.isArray(t?.controls)&&t.controls.includes(m),l=["temperature","humidity","co2"].filter(m=>a(m)),c=this._walls??t?.walls??"auto",u=this._heat??t?.heatmap??"none",d=this._explode??t?.explode??!0,h=this._fullscreen?"100vh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${n}px`,_=!!e&&!this._clean&&(s||!!t?.controls&&!(this._roomId&&t.room_panel!==!1)),b=t?.controls_hidden!==void 0||(t?.controls_hide_after??0)>0,p=m=>$(this.hass,m),x=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null;return f`<ha-card class=${this._night?"nf-night":""} style=${x?`--nf-accent:${x}`:""} @pointerdown=${this.touch} @keydown=${this.touch} @wheel=${this.touch}>
      <div class="nf-card-body" style="height:${h}">
        ${e&&e.floors.some(m=>m.rooms.length)?f`<nf-view3d
              .hass=${this.hass}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${o}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${d}
              .keepRoof=${t?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .buttons=${this._config?.buttons?.map((m,k)=>({id:`card_${k}`,...m}))??null}
              .heatMode=${u}
              .theme=${this._config?.theme??"neon"}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${t?.room_names!==!1}
              .floorStack=${t?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&t?.room_panel!==!1}
              .alerts=${t?.alerts!==!1}
              .alertJump=${!!t?.alert_jump}
              .scenes=${t?.scenes!==!1}
              ?trail=${!!t?.motion_trail}
              .cameraWall=${this._cameraWall}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${b}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              ?weather=${t?.weather!==!1}
              .weatherEntityId=${t?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${t?.start_view??null}
              style=${_?"--nf-bottom-inset: 52px":""}
              @room-tap=${m=>{if(this.canSwitch&&(e?.floors.length??0)>1&&m.detail.floorId&&o!==m.detail.floorId){this._floorId=m.detail.floorId,this._roomId=null;return}m.detail.roomId&&(this._roomId=m.detail.roomId===this._roomId?null:m.detail.roomId)}}
              @floor-tap=${m=>{this._floorId=m.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></nf-view3d>`:f`<p class="nf-card-msg">${this.data.error??(e?$(this.hass,"no_building"):$(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?f`<nf-room-panel
              @camera-look=${m=>this.view3d()?.lookThrough(m.detail.entity)}
              class="nf-card-panel"
              .hass=${this.hass}
              .room=${e.floors.flatMap(m=>m.rooms).find(m=>m.id===this._roomId)??null}
              .floor=${e.floors.find(m=>m.rooms.some(k=>k.id===this._roomId))??null}
              .confirmEntities=${qe(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:g}
        ${_&&e?f`<div class="nf-card-controls">
              ${s?f`<button class="nf-chip" @click=${()=>this.back()}>${p("back")}</button>`:g}
              ${t?.camera_wall?f`<button class="nf-chip" aria-pressed=${this._cameraWall} title=${p("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${p("cameras_short")}</button>`:g}
              ${a("walls")?f`<div class="nf-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this._walls="auto"}>${p("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this._walls="cut"}>${p("walls_cut")}</button>
                  </div>`:g}
              ${a("floors")&&e.floors.length>1&&!o?f`<div class="nf-seg">
                    <button aria-pressed=${d} @click=${()=>this._explode=!0}>${p("floors_apart")}</button>
                    <button aria-pressed=${!d} @click=${()=>this._explode=!1}>${p("floors_stacked")}</button>
                  </div>`:g}
              ${l.length?f`<div class="nf-seg" role="group" aria-label=${p("heatmap")}>
                    ${["none",...l].map(m=>f`<button aria-pressed=${u===m} @click=${()=>this._heat=m}>
                          ${p(m==="none"?"heat_off":`heat_short_${m}`)}
                        </button>`)}
                  </div>`:g}
            </div>`:g}
        ${t?.fullscreen_button&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?f`<button class="nf-card-full" title=${p(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${p(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:g}
        ${t?.dashboard&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?f`<button class="nf-card-full nf-card-dash ${t.fullscreen_button?"nf-card-dash-2":""}" title=${t.dashboard_label||t.dashboard} aria-label=${t.dashboard_label||t.dashboard} @click=${()=>this.openDashboard(t.dashboard)}>
              ${t.dashboard_label?f`<span>${t.dashboard_label}</span>`:"\u2302"}
            </button>`:g}
      </div>
    </ha-card>`}static styles=[se,ye,j`
      .nf-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .nf-card-controls > * {
        pointer-events: auto;
      }
      .nf-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .nf-card-dash-2 {
        right: 56px;
      }
      .nf-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--nf-chrome);
        color: var(--nf-text);
        box-shadow: var(--nf-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      ha-card {
        overflow: hidden;
        background: var(--nf-bg);
        height: 100%;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.nf-night .nf-card-body {
        filter: brightness(0.55);
      }
      .nf-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: nf;
      }
      nf-view3d {
        flex: 1;
      }
      .nf-card-msg {
        margin: auto;
        color: var(--nf-muted);
        padding: 16px;
        text-align: center;
      }
      .nf-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container nf ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .nf-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
      }
    `]};if(!customElements.get("nextfloor-card")){customElements.define("nextfloor-card",yr);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"nextfloor-card",name:$(void 0,"card_name"),description:$(void 0,"card_description"),preview:!1})}
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
