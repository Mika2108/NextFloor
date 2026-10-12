/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=r=>r===void 0?r:JSON.parse(JSON.stringify(r)));var zt=globalThis,Ft=zt.ShadowRoot&&(zt.ShadyCSS===void 0||zt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wn=Symbol(),zr=new WeakMap,ot=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==wn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ft&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=zr.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&zr.set(t,e))}return e}toString(){return this.cssText}},Fr=r=>new ot(typeof r=="string"?r:r+"",void 0,wn),U=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new ot(t,r,wn)},Tr=(r,e)=>{if(Ft)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=zt.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},yn=Ft?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Fr(t)})(r):r;var{is:Ms,defineProperty:Es,getOwnPropertyDescriptor:As,getOwnPropertyNames:Rs,getOwnPropertySymbols:zs,getPrototypeOf:Fs}=Object,Tt=globalThis,Hr=Tt.trustedTypes,Ts=Hr?Hr.emptyScript:"",Hs=Tt.reactiveElementPolyfillSupport,it=(r,e)=>r,xn={toAttribute(r,e){switch(e){case Boolean:r=r?Ts:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Pr=(r,e)=>!Ms(r,e),Dr={attribute:!0,type:String,converter:xn,reflect:!1,useDefault:!1,hasChanged:Pr};Symbol.metadata??=Symbol("metadata"),Tt.litPropertyMetadata??=new WeakMap;var ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Dr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Es(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:i}=As(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let a=o?.call(this);i?.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Dr}static _$Ei(){if(this.hasOwnProperty(it("elementProperties")))return;let e=Fs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(it("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(it("properties"))){let t=this.properties,n=[...Rs(t),...zs(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(yn(o))}else e!==void 0&&t.push(yn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Tr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:xn).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:xn;this._$Em=o;let a=s.fromAttribute(t,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,n,o=!1,i){if(e!==void 0){let s=this.constructor;if(o===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Pr)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[it("elementProperties")]=new Map,ue[it("finalized")]=new Map,Hs?.({ReactiveElement:ue}),(Tt.reactiveElementVersions??=[]).push("2.1.2");var Rn=globalThis,Ir=r=>r,Ht=Rn.trustedTypes,Cr=Ht?Ht.createPolicy("lit-html",{createHTML:r=>r}):void 0,Vr="$lit$",fe=`lit$${Math.random().toFixed(9).slice(2)}$`,Kr="?"+fe,Ds=`<${Kr}>`,Te=document,at=()=>Te.createComment(""),lt=r=>r===null||typeof r!="object"&&typeof r!="function",zn=Array.isArray,Ps=r=>zn(r)||typeof r?.[Symbol.iterator]=="function",kn=`[ 	
\f\r]`,st=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Or=/-->/g,Wr=/>/g,ze=RegExp(`>|${kn}(?:([^\\s"'>=/]+)(${kn}*=${kn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lr=/'/g,Nr=/"/g,Gr=/^(?:script|style|textarea|title)$/i,Fn=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=Fn(1),De=Fn(2),pc=Fn(3),He=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Br=new WeakMap,Fe=Te.createTreeWalker(Te,129);function Ur(r,e){if(!zn(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cr!==void 0?Cr.createHTML(e):e}var Is=(r,e)=>{let t=r.length-1,n=[],o,i=e===2?"<svg>":e===3?"<math>":"",s=st;for(let a=0;a<t;a++){let l=r[a],c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===st?u[1]==="!--"?s=Or:u[1]!==void 0?s=Wr:u[2]!==void 0?(Gr.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=ze):u[3]!==void 0&&(s=ze):s===ze?u[0]===">"?(s=o??st,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?ze:u[3]==='"'?Nr:Lr):s===Nr||s===Lr?s=ze:s===Or||s===Wr?s=st:(s=ze,o=void 0);let g=s===ze&&r[a+1].startsWith("/>")?" ":"";i+=s===st?l+Ds:d>=0?(n.push(c),l.slice(0,d)+Vr+l.slice(d)+fe+g):l+fe+(d===-2?a:g)}return[Ur(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ct=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,s=0,a=e.length-1,l=this.parts,[c,u]=Is(e,t);if(this.el=r.createElement(c,n),Fe.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=Fe.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let d of o.getAttributeNames())if(d.endsWith(Vr)){let h=u[s++],g=o.getAttribute(d).split(fe),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:b[2],strings:g,ctor:b[1]==="."?$n:b[1]==="?"?Mn:b[1]==="@"?En:Oe}),o.removeAttribute(d)}else d.startsWith(fe)&&(l.push({type:6,index:i}),o.removeAttribute(d));if(Gr.test(o.tagName)){let d=o.textContent.split(fe),h=d.length-1;if(h>0){o.textContent=Ht?Ht.emptyScript:"";for(let g=0;g<h;g++)o.append(d[g],at()),Fe.nextNode(),l.push({type:2,index:++i});o.append(d[h],at())}}}else if(o.nodeType===8)if(o.data===Kr)l.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(fe,d+1))!==-1;)l.push({type:7,index:i}),d+=fe.length-1}i++}}static createElement(e,t){let n=Te.createElement("template");return n.innerHTML=e,n}};function Ce(r,e,t=r,n){if(e===He)return e;let o=n!==void 0?t._$Co?.[n]:t._$Cl,i=lt(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=Ce(r,o._$AS(r,e.values),o,n)),e}var Sn=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??Te).importNode(t,!0);Fe.currentNode=o;let i=Fe.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new ut(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new An(i,this,e)),this._$AV.push(c),l=n[++a]}s!==l?.index&&(i=Fe.nextNode(),s++)}return Fe.currentNode=Te,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},ut=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ce(this,e,t),lt(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==He&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ps(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&lt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Te.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ct.createElement(Ur(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{let i=new Sn(o,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Br.get(e.strings);return t===void 0&&Br.set(e.strings,t=new ct(e)),t}k(e){zn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let i of e)o===t.length?t.push(n=new r(this.O(at()),this.O(at()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=Ir(e).nextSibling;Ir(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}_$AI(e,t=this,n,o){let i=this.strings,s=!1;if(i===void 0)e=Ce(this,e,t,0),s=!lt(e)||e!==this._$AH&&e!==He,s&&(this._$AH=e);else{let a=e,l,c;for(e=i[0],l=0;l<i.length-1;l++)c=Ce(this,a[n+l],t,l),c===He&&(c=this._$AH[l]),s||=!lt(c)||c!==this._$AH[l],c===m?e=m:e!==m&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},$n=class extends Oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},Mn=class extends Oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},En=class extends Oe{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=Ce(this,e,t,0)??m)===He)return;let n=this._$AH,o=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==m&&(n===m||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},An=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ce(this,e)}};var Cs=Rn.litHtmlPolyfillSupport;Cs?.(ct,ut),(Rn.litHtmlVersions??=[]).push("3.3.3");var jr=(r,e,t)=>{let n=t?.renderBefore??e,o=n._$litPart$;if(o===void 0){let i=t?.renderBefore??null;n._$litPart$=o=new ut(e.insertBefore(at(),i),i,void 0,t??{})}return o._$AI(r),o};var Tn=globalThis,j=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return He}};j._$litElement$=!0,j.finalized=!0,Tn.litElementHydrateSupport?.({LitElement:j});var Os=Tn.litElementPolyfillSupport;Os?.({LitElement:j});(Tn.litElementVersions??=[]).push("4.2.2");var Hn=(r,e,t={})=>r.callWS({type:`nextfloor/${e}`,...t}),qr=r=>Hn(r,"building/get");async function Zr(r,e){return(await Hn(r,"building/save",{building:e})).revision}function Yr(r,e){return r.connection.subscribeMessage(t=>e(t.revision),{type:"nextfloor/building/subscribe"})}async function Jr(r){return(await Hn(r,"packs/list")).packs}var Qr=[],Dt=new Map,Xr=0,eo=(r,e)=>`pack:${r}:${e}`,Dn=r=>r.startsWith("pack:");function to(r){Qr=r,Dt=new Map;for(let e of r)for(let t of e.items)Dt.set(eo(e.id,t.id),t);Xr+=1}var Pn=()=>Qr,Pt=()=>Xr,Ws={};function Y(r){if(!Dn(r))return;let e=Dt.get(r);if(e)return e;let[,t,...n]=r.split(":"),o=Ws[t];return o?Dt.get(eo(o,n.join(":"))):void 0}var no=r=>Y(r)?.parts.find(e=>e.screen);function ro(r,e){return r.name[e.split("-")[0]]??r.name.en??Object.values(r.name)[0]??r.id}function me(r,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return oo;if(e.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,e.h));let t=Y(e.type);if(!t)return io(e);switch(t.mount){case"surface":return It(r,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,r.height-e.h);default:return 0}}var Ns={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Bs(r){return r==="hedge"||r==="fence"||r==="pergola"}function Vs(r,e,t){let n=r.slope??0;if(!n||r.type==="pool")return 0;let o=r.slope_dir??"x",i=(c,u)=>o==="x"?c:o==="-x"?-c:o==="z"?u:-u,s=1/0,a=-1/0;for(let[c,u]of r.points){let d=i(c,u);s=Math.min(s,d),a=Math.max(a,d)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-s)/(a-s)));return n*l}function Ks(r,e,t,n){return ao(r)+(e.offset??0)+Ns[e.type]-Vs(e,t,n)}function ao(r){return r.elevation>.3?0:-.2}function dt(r,e,t){let n=(r.outdoor??[]).filter(i=>!Bs(i.type)&&i.type!=="pool"&&D([e,t],i.points)),o=[...n].reverse().find(i=>i.cut)??n[0];return o?Ks(r,o,e,t):ao(r)}var Gs={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var lo={type:"none",pitch:35,overhang:.4},Us={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...lo}};var co=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),oo=1.75;function uo(r){return["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","stairs","stairwell","parking"].includes(r.type)?!1:Y(r.type)?.mount!=="ceiling"}function In(r){return co.has(r)||!!Y(r)?.light}var js=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function io(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function It(r,e,t){let n=0;for(let o of r.furniture)!(js.has(o.type)||Y(o.type)?.surface)||!D([e,t],Ct(o))||(n=Math.max(n,o.h));return n}var Ls=new Set([...co,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),so={sofa:[2.2,.9,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Cn(r){r.energy={...Gs,...r.energy??{}},r.presence=r.presence??[],r.settings={...Us,...r.settings,roof:{...lo,...r.settings?.roof??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light."));if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of t){let i=n[o.mount??"ceiling"],[s,a,l]=so[i];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:a,h:l,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light."))}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return r}function We(r){let e=0;for(let t=0;t<r.length;t++){let[n,o]=r[t],[i,s]=r[(t+1)%r.length];e+=n*s-i*o}return e/2}function ht(r){let e=We(r);if(Math.abs(e)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let t=0,n=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],c=i*l-a*s;t+=(i+a)*c,n+=(s+l)*c}return[t/(6*e),n/(6*e)]}function Ct(r){let e=r.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*t-a*n,r.z+s*n+a*t])}function D(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[i,s]=e[n],[a,l]=e[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(t=!t)}return t}var ho={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var qs=700,Wn="nextfloor.unsaved",Le="0.5.0";function Zs(){try{let r=localStorage.getItem(Wn);return r?JSON.parse(r):null}catch{return null}}function On(r){try{r?localStorage.setItem(Wn,JSON.stringify(r)):localStorage.removeItem(Wn)}catch{}}var po=r=>r&&typeof r=="object"&&"message"in r?String(r.message):String(r);function Ys(r,e){let t=i=>i.split(/[.-]/).map(s=>Number.parseInt(s,10)||0),[n,o]=[t(r),t(e)];for(let i=0;i<Math.max(n.length,o.length);i++){let s=(n[i]??0)-(o[i]??0);if(s!==0)return s}return 0}var Ne=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;connected=!1;revision=-1;ownRevisions=new Set;stopListening=null;timer;waiting=null;inFlight=null;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.stopListening?.(),this.stopListening=null}edit(e){this.building=e,this.waiting=e,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.flush()},qs),this.host.requestUpdate()}get frontendVersion(){return Le}get versionGap(){let e=this.backendVersion;return!e||Le==="dev"||e===Le?null:Ys(e,Le)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Le!=="dev"&&this.backendVersion!==Le}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Cn(e.building))}discardDraft(){this.draft=null,On(null),this.host.requestUpdate()}async flush(){clearTimeout(this.timer),this.inFlight&&await this.inFlight;let e=this.waiting,t=this.hass;!e||!t||(this.waiting=null,this.saveState="saving",this.host.requestUpdate(),this.inFlight=this.send(t,e),await this.inFlight,this.inFlight=null)}async send(e,t){try{let n=await Zr(e,t);this.ownRevisions.add(n),this.revision=n,this.saveState=this.waiting?"saving":"saved",this.saveError=null,On(null)}catch(n){this.saveState="error",this.saveError=po(n),On({building:t,savedAt:Date.now()})}this.host.requestUpdate()}async start(){let e=this.hass;if(e&&(await Promise.all([this.reloadPacks(),this.reload()]),!(this.stopListening||!this.connected)))try{this.stopListening=await Yr(e,t=>{let n=this.ownRevisions.has(t)||t===this.revision,o=this.waiting!==null||this.inFlight!==null;!n&&!o&&this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Jr(this.hass)}catch{this.packs=[]}to(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await qr(this.hass);this.building=Cn(e.building),this.backendVersion=e.version??null,this.revision=e.revision,this.error=null,this.draft===null&&!this.waiting&&(this.draft=Zs())}catch(e){this.error=po(e)}this.host.requestUpdate()}}};var Ln=r=>r.slice(0,r.indexOf(".")),Js={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},M=r=>Js[Ln(r)]??null,fo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],mo=new Set(["light","switch","fan"]),go=r=>r!==null&&r!=="scene"&&r!=="script",H=r=>!r||r.state==="unavailable"||r.state==="unknown";function T(r,e,t){let n=r?.states[e]?.attributes.friendly_name??r?.entities?.[e]?.name??e;if(!t||n.length<=t.length+1||!n.toLowerCase().startsWith(`${t.toLowerCase()} `))return n;let o=n.slice(t.length+1);return o[0].toUpperCase()+o.slice(1)}var Qs=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]),Nn=r=>!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum";function ge(r){if(!r)return!1;if(r.entity_id.startsWith("vacuum."))return["cleaning","returning"].includes(r.state);let e=M(r.entity_id);return e==="light"||e==="switch"||e==="fan"||e==="binary"?r.state==="on":e==="cover"?r.state==="open"||r.state==="opening":e==="climate"?["heating","cooling"].includes(String(r.attributes.hvac_action)):e==="media"?r.state==="playing":e==="lock"?r.state==="unlocked"||r.state==="open":e==="sensor"?Nn(r)&&Qs.has(r.state.toLowerCase()):!1}var _o=r=>Math.min(1,Math.max(0,r));function Xs(r){let e=_o((r-2200)/4300),t=[1,.66,.26],n=[.78,.9,1];return[0,1,2].map(o=>t[o]+(n[o]-t[o])*e)}function Be(r,e){if(!r||r.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:r.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(_o(t.brightness/255)):1,o=t.rgb_color;return o&&!["color_temp","brightness","onoff"].includes(String(t.color_mode))?{color:[o[0]/255,o[1]/255,o[2]/255],level:n}:typeof t.color_temp_kelvin=="number"?{color:Xs(t.color_temp_kelvin),level:n}:{color:[1,.71,.28],level:n}}function Ve(r,e,t=null){if(r==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(r==="light"&&t==="floor")return 1.95;if(r==="light"&&t==="table")return 1.25;if(r==="light"&&t==="wall")return 1.95;switch(r){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var re=r=>r.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C";function bo(r,e){return e==="\xB0F"?(r-32)*5/9:e==="K"?r-273.15:r}var Ke=(r,e)=>re(r)==="\xB0F"?e*9/5+32:e;var ea=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),ta=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),na=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),ra=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ge(r,e){let t=r.entities?.[e];return t&&(t.area_id||(t.device_id?r.devices?.[t.device_id]?.area_id:null))||null}var yo=(r,e)=>{let t=r.entities?.[e];return!!(t?.hidden||t?.entity_category)};function vo(r,e){let t=M(e),n=r.states[e];if(!t||!n||yo(r,e))return!1;let o=n.attributes.device_class;return t==="sensor"?o?ea.has(o):ta.has(String(n.attributes.unit_of_measurement??"")):t==="binary"?o?na.has(o):!!r.entities?.[e]?.area_id:!0}function oa(r,e){let t=r.states[e];return M(e)!=="sensor"||!t?.attributes.unit_of_measurement||yo(r,e)||ra.has(String(t.attributes.device_class??""))?!1:Number.isFinite(Number(t.state))||H(t)}var Ot=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power",wo=null;function Bn(r,e){let t=r.get(e);return t||r.set(e,t=[]),t}function ia(r){let e=new Map,t=new Map,n=new Map,o=new Map,i=[],s=c=>{(vo(r,c)||oa(r,c))&&go(M(c))&&i.push(c)};for(let[c,u]of Object.entries(r.entities??{})){let d=u.device_id;d&&u.area_id&&(o.get(d)??o.set(d,new Set).get(d)).add(u.area_id),d&&Ot(r,c)&&Bn(t,d).push(c),d&&!u.hidden&&!u.entity_category&&(n.get(d)??n.set(d,new Set).get(d)).add(Ln(c));let h=Ge(r,c);h===null?s(c):vo(r,c)&&Bn(e,h).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||s(c);let a=c=>fo.indexOf(M(c));i.sort((c,u)=>a(c)-a(u)||T(r,c).localeCompare(T(r,u)));for(let[c,u]of e){let d=r.areas?.[c]?.name;u.sort((h,g)=>a(h)-a(g)||T(r,h,d).localeCompare(T(r,g,d)))}let l=new Set;for(let[c,u]of o)u.size>1&&l.add(c);return{entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,byArea:e,powerByDevice:t,withoutArea:i,domainsByDevice:n,hubs:l}}function Wt(r){let e=wo;return e&&e.entities===r.entities&&e.devices===r.devices&&(e.states===r.states||(e.states=r.states,Object.keys(r.states).length===e.stateCount))?e:wo=ia(r)}function V(r,e){return!e||!r.entities?[]:Wt(r).byArea.get(e)??[]}var Vn=(r,e)=>!!r.entities&&Wt(r).hubs.has(e),Lt=(r,e)=>r.entities?Wt(r).powerByDevice.get(e)??[]:[];function Kn(r,e){let t=new Map;for(let o of e)Bn(t,r.entities?.[o]?.device_id??`entity:${o}`).push(o);let n=new Map(e.map((o,i)=>[o,i]));return[...t.values()].map(o=>{let i=o.find(s=>!r.entities?.[s]?.name)??o[0];return{primary:i,others:o.filter(s=>s!==i)}}).sort((o,i)=>n.get(o.primary)-n.get(i.primary))}var Ue=(r,e)=>Kn(r,e).map(t=>t.primary),sa={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},aa=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),la=["vorlauf","r(\xFC|ue)cklauf","flow","return","d(\xFC|ue)se","nozzle","hotend","extruder","druckbett","heatbed","(^|[^a-z])bed($|[^a-z])","chamber","cpu","gpu","chip","soc","akku","batter","wasser","water","kessel","boiler","au(\xDF|ss)en","outdoor","outside","abgas","exhaust","sole","brine","verdampfer","kondensat","verdichter","compressor","motor","k(\xFC|ue)hl","freezer","fridge","gefrier"],ca=new RegExp(`(${la.join("|")})`,"i");function ua(r,e){let t=r.entities?.[e]?.device_id,n=t&&!Vn(r,t)?Wt(r).domainsByDevice.get(t):void 0;return n&&[...n].some(o=>aa.has(o))?!1:!ca.test(`${e} ${r.states[e]?.attributes.friendly_name??""}`)}function Gn(r,e,t,n){let o=t.climate?.[n];if(o==="none")return[];if(o)return r.states[o]?[o]:[];let i=(e?.placements??[]).filter(c=>c.entity_id.startsWith("sensor.")),s=i.filter(c=>D([c.x,c.z],t.points)).map(c=>c.entity_id),a=new Set(i.filter(c=>!D([c.x,c.z],t.points)).map(c=>c.entity_id));return[...new Set([...V(r,t.area_id).filter(c=>!a.has(c)),...s])].filter(c=>c.startsWith("sensor.")&&r.states[c]?.attributes.device_class===sa[n]&&ua(r,c))}function _e(r,e,t,n){let o=Gn(r,e,t,n).map(i=>{let s=Number(r.states[i]?.state);return n==="temperature"?bo(s,r.states[i]?.attributes.unit_of_measurement):s}).filter(Number.isFinite);return o.length?o.reduce((i,s)=>i+s,0)/o.length:null}var da=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),ha=new Set(["garage","gate"]),pa=new Set(["window","opening"]);function pt(r,e,t=!1){let n=new Map;return r.forEach((o,i)=>{let s=t&&e.length===1?e[0]:e[i];s&&n.set(o.id,s)}),n}var xo=(r,e)=>r==="none"?null:r??e??null,Nt=r=>r&&r!=="none"?r:null;function ft(r,e){let t=new Map;for(let n of e)for(let o of n.rooms){let i=n.openings.filter(f=>f.room_id===o.id).sort((f,x)=>f.edge-x.edge||f.offset-x.offset);if(i.length===0)continue;let s=V(r,o.area_id),a=f=>r.states[f]?.attributes.device_class,l=f=>s.filter(x=>M(x)==="binary"&&f(a(x)??"")),c=f=>i.filter(x=>x.type===f),u=pt(c("window"),s.filter(f=>M(f)==="cover"&&da.has(a(f))),!0),d=pt(c("window"),l(f=>pa.has(f))),h=pt(c("door"),l(f=>f==="door")),g=pt(c("garage"),s.filter(f=>M(f)==="cover"&&ha.has(a(f)??""))),b=pt(c("garage"),l(f=>f==="garage_door"));for(let f of i){let x=f.type==="window"?u:f.type==="garage"?g:null,_=f.type==="window"?d:f.type==="garage"?b:h,$=f.leaves===2;t.set(f.id,{cover:xo(f.cover,x?.get(f.id)),contact:f.sensor==="handle"&&f.contact==null?null:xo(f.contact,_.get(f.id)),tilt:f.tilt==="none"?null:f.tilt,contact2:$?Nt(f.contact2):null,tilt2:$?Nt(f.tilt2):null,position:Nt(f.position),positionInverted:!!f.position_inverted,tiltAngle:Nt(f.tilt_angle),tiltMax:f.tilt_max??null,tiltOffset:f.tilt_offset??null,tiltInvert:!!f.tilt_invert,shut:!!f.shut})}}return t}var fa=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ma(r){if(!r||H(r))return null;let e=r.attributes.window_state;for(let t of[typeof e=="string"?e:"",r.state]){let n=t.trim(),o=n&&fa.find(([i])=>i.test(n));if(o)return o[1]}return null}var ga=.5;function _a(r,e){let t=e?r.states[e]:void 0,n=t&&!H(t)?Number(t.state):NaN;if(!Number.isFinite(n))return null;let o=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,o?n/100:n))}function ba(r,e){let t=_a(r,e.position);if(t!==null)return e.positionInverted?t:1-t;let n=e.cover?r.states[e.cover]:void 0;if(n&&!H(n)){let o=n.attributes.current_position;return typeof o=="number"?1-Math.min(100,Math.max(0,o))/100:n.state==="closed"?1:n.state==="opening"||n.state==="closing"?.5:0}return e.cover?0:null}function be(r,e,t="window"){let n=d=>!!d&&r.states[d]?.state==="on",o=d=>!!d&&!!r.states[d]&&!H(r.states[d]),i=d=>d?ma(r.states[d]):null,s=ba(r,e);if(t==="door"){let d=i(e.contact);return{open:d===null?e.shut?0:ga:d==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:s,sensed:d!==null||s!==null}}if(t==="garage"){let d=s!==null||o(e.contact);return{open:0,open2:0,tilt:0,tilt2:0,cover:s??(o(e.contact)&&n(e.contact)?0:1),sensed:d}}let a=n(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",l=n(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",c=l?1:0,u=e.tiltAngle?Number(r.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let d=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,d/(e.tiltMax||15))),c<.08&&(c=0),l=c>0}return{open:i(e.contact)==="open"&&!l?1:0,open2:i(e.contact2)==="open"&&!a?1:0,tilt:c,tilt2:a?1:0,cover:s,sensed:o(e.contact)||o(e.tilt)||Number.isFinite(u)}}var ko=/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,So=/(kühl|fridge|gefrier|freezer)/i,$o=/(spülmaschine|geschirrspül|dishwasher)/i,va=/(kochfeld|herd|induktion|cooktop)/i,wa={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:ko,tv_wall:ko,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:So,fridge_smart:So,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:$o,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:va,sink:$o,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Mo={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i},Eo=new Set(["tv_board","tv_wall"]);var Ao=r=>Eo.has(r)||!!no(r),jn=r=>Ao(r)||r==="desk"||r==="fridge_smart",Bt=r=>!!r&&r!=="none";function ya(r,e){if(Ot(r,e))return e;let t=r.entities?.[e]?.device_id;return t?Lt(r,t).find(n=>n!==e)??null:null}var xa=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&D([e,t],n.points));function Un(r,e,t,n){return r.find(o=>e?.test(t(o)))??(n?r[0]??null:null)}function je(r,e){let t=new Map;for(let n of e){let o=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(Bt));for(let i of n.furniture){let s=i.type in Mo,a=s?Mo[i.type]:wa[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=xa(n,i.x,i.z),c=(l?Ue(r,V(r,l.area_id)):[]).filter(b=>!o.has(b)),u=b=>`${b} ${T(r,b)}`,d=b=>c.filter(f=>M(f)===b),h=i.entity==="none"?null:i.entity??null;if(i.entity==null){if(s)h=Un(d("light"),a,u,!0);else if(i.type==="robot_vacuum"){let b=l?.area_id??null;h=Object.keys(r.entities??{}).find(f=>f.startsWith("vacuum.")&&!o.has(f)&&Ge(r,f)===b)??null}else if(i.type==="radiator")h=Un(d("climate"),a,u,!0);else if(Ao(i.type)){let b=d("media");h=b.find(f=>r.states[f]?.attributes.device_class==="tv")??Un(b,a,u,Eo.has(i.type))}else a&&(h=c.find(b=>["switch","media","fan"].includes(M(b)??"")&&a.test(u(b)))??null);h&&o.add(h)}let g=i.power==="none"?null:i.power??null;i.power==null&&(g=h?ya(r,h):null,!g&&a&&l&&!s&&(g=V(r,l.area_id).find(b=>Ot(r,b)&&!o.has(b)&&a.test(u(b)))??null),g&&o.add(g)),(h||g)&&t.set(i.id,{entity:h,power:g})}}return t}function qe(r,e){let t=new Set,n=je(r,e),o=e.some(i=>i.openings.some(s=>s.confirm))?ft(r,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let a=s.confirm?o?.get(s.id)?.cover:null;Bt(a)&&t.add(a)}for(let s of i.furniture){let a=s.confirm?n.get(s.id)?.entity:null;Bt(a)&&t.add(a)}}return t}function Ro(r,e){let t=o=>Bt(o)&&["on","open"].includes(r.states[o]?.state??""),n=new Map;for(let o of e.flatMap(i=>i.furniture))o.type==="fridge_smart"&&n.set(o.id,{left:t(o.door_left),right:t(o.door_right)});return n}function zo(r,e,t){let n=(u,d)=>D([u,d],t.points),o=je(r,[e]),i=ft(r,[e]),s=new Set(t.hidden??[]),a=[...e.placements.filter(u=>n(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>n(u.x,u.z)).flatMap(u=>[o.get(u.id)?.entity,o.get(u.id)?.power]),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let d=i.get(u.id);return d?[d.cover,d.contact,d.tilt,d.contact2]:[]}),...t.panel??[]],l=[...new Set(a.filter(u=>!!u&&!!r.states[u]))].filter(u=>!s.has(u)),c=new Set(l);return{shown:l,more:V(r,t.area_id).filter(u=>!c.has(u)&&!s.has(u))}}var ka={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./},Sa=/^k?W$/,de=r=>r&&r!=="none"?r:null;function $a(r,e){let t=e.car??{},n=de(t.device)??de(e.entity),o=n?r.entities?.[n]?.device_id:null,i=o&&r.entities?Object.values(r.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],s=(h,g)=>String(r.states[h]?.attributes[g]??""),a=h=>`${h} ${s(h,"friendly_name")} ${r.entities?.[h]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(h,g,b=()=>!0)=>i.find(f=>g.includes(f.split(".")[0])&&ka[h].test(a(f))&&b(f))??null,c=(h,g)=>i.find(b=>b.startsWith(`${h}.`)&&s(b,"device_class")===g)??null,u=h=>i.find(g=>g.startsWith(`${h}.`))??null,d=h=>s(h,"unit_of_measurement");return{soc:de(t.soc)??c("sensor","battery")??l("soc",["sensor"],h=>d(h)==="%"),range:de(t.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:de(t.charging)??l("charging",["sensor"],h=>Sa.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:de(t.plugged)??c("binary_sensor","plug")??l("plugged",["binary_sensor"]),lock:de(t.lock)??u("lock")??l("lock",["binary_sensor"]),climate:de(t.climate)??u("climate")??l("climate",["switch","binary_sensor"]),tracker:de(t.tracker)??u("device_tracker")}}function Fo(r,e){return e.flatMap(n=>n.furniture).filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values($a(r,n))).filter(n=>!!n)}var To=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/;function qn(r,e,t){if(t==="none")return null;if(t)return t;let n=e?r.entities?.[e]?.device_id:null;return!n||!r.entities?null:Object.values(r.entities).find(i=>i.device_id===n&&i.entity_id.startsWith("sensor.")&&(To.test(i.translation_key??"")||To.test(i.entity_id.split(".")[1])))?.entity_id??null}function Ho(r){return r.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Do(r,e,t,n){let o=n?r.states[n]?.state:t?r.states[t]?.attributes.current_room:void 0;if(typeof o!="string"||["","unknown","unavailable"].includes(o))return null;let i=Ho(o);if(!i)return null;let s=l=>[l.name,l.area_id??"",l.area_id&&r.areas?.[l.area_id]?.name||""].map(Ho).filter(Boolean);return e.find(l=>s(l).includes(i))??e.find(l=>s(l).some(c=>c.length>=3&&(c.includes(i)||i.includes(c))))??null}var Ma=new Set(["garage","gate","door"]);function Zn(r,e){let t=new Set,n=new Set,o=i=>{if(!i||i==="none"||!r.states[i])return;let s=M(i);s==="light"&&t.add(i),s==="cover"&&!Ma.has(String(r.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let s=new Set(i.hidden??[]);Ue(r,V(r,i.area_id)).filter(a=>!s.has(a)).forEach(o)}return e.placements.forEach(i=>o(i.entity_id)),e.furniture.forEach(i=>o(i.entity)),{lights:[...t],covers:[...n]}}function Po(r){let e=r.split(".")[0];switch(e){case"scene":case"script":return[e,"turn_on"];case"automation":return[e,"trigger"];case"button":case"input_button":return[e,"press"];default:return["homeassistant","toggle"]}}function Io(r,e,t){let n=t.target?.trim()??"",o=(i,s)=>e.dispatchEvent(new CustomEvent(i,{detail:s,bubbles:!0,composed:!0}));switch(t.action){case"navigate":if(!n)return;history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));return;case"more_info":n&&o("hass-more-info",{entityId:n});return;case"service":{if(!n.includes("."))return;let[i,s]=n.split(".",2);r.callService(i,s,t.data??{});return}case"fire_dom_event":o("ll-custom",t.data??{});return}}var Co={view:"3D",editor:"Editor",all_floors:"Alle Etagen",no_building:"Noch kein Grundriss vorhanden.",no_building_admin:"Noch kein Grundriss vorhanden. Im Editor zeichnest du deine erste Etage.",open_editor:"Editor \xF6ffnen",loading:"L\xE4dt \u2026",load_error:"Laden fehlgeschlagen",saving:"Speichert \u2026",saved:"Gespeichert",save_error:"Speichern fehlgeschlagen",save_failed_detail:"Speichern fehlgeschlagen: {error}. Deine \xC4nderungen bleiben in diesem Browser erhalten.",needs_restart:"Eine neue Version von NextFloor ({frontend}) ist installiert, aber Home Assistant l\xE4uft noch mit {version}. Bitte Home Assistant neu starten \u2013 bis dahin kann das Speichern fehlschlagen.",needs_reload:"Diese Seite zeigt noch NextFloor {frontend}, Home Assistant hat schon {backend}. Bitte die Seite neu laden; in der Companion-App: Einstellungen \u2192 Companion-App \u2192 Frontend-Cache zur\xFCcksetzen.",reload_page:"Neu laden",needs_restart_old:"Eine neue Version von NextFloor ist installiert, aber Home Assistant l\xE4uft noch mit einer \xE4lteren. Bitte Home Assistant neu starten \u2013 bis dahin schl\xE4gt das Speichern fehl.",draft_found:"Nicht gespeicherte \xC4nderungen vom {time} gefunden.",draft_restore:"\xDCbernehmen und speichern",draft_discard:"Verwerfen",walls_auto:"W\xE4nde hoch",walls_cut:"Schnitt",reset_view:"\xDCbersicht",back:"Zur\xFCck",floor:"Etage",floors:"Etagen",add_floor:"Etage hinzuf\xFCgen",floor_from_ha:"Etagen aus Home Assistant:",floor_empty:"Leere Etage",level:"Ebene {n}",ha_floor:"Etage in Home Assistant",no_ha_floor:"\u2013 keine \u2013",area_rooms:"R\xE4ume aus HA-Bereichen anlegen ({n})",area_rooms_hint:"Legt f\xFCr jeden Bereich dieser Etage einen Raum an (4 \xD7 3 m) \u2013 danach an die richtige Stelle ziehen und die Ecken anpassen",floor_name:"Name",elevation:"H\xF6he \xFCber Boden (m)",floor_shift:"Etage verschieben (m)",floor_shift_apply:"Verschieben",floor_shift_hint:"Verschiebt alle R\xE4ume, M\xF6bel, Ger\xE4te, Au\xDFenfl\xE4chen, freien W\xE4nde und das Hintergrundbild dieser Etage um X und Z. Dachfl\xE4chen bleiben liegen.",height:"Raumh\xF6he (m)",cut_height:"Schnitth\xF6he (m)",delete_floor:"Etage l\xF6schen",delete_floor_confirm:"Etage \u201E{name}\u201C mit allen R\xE4umen l\xF6schen?",move_up:"Nach oben",move_down:"Nach unten",default_floor:"Erdgeschoss",new_floor:"Etage {n}",tool_select:"Ausw\xE4hlen",tool_rect:"Rechteck",tool_polygon:"Freie Form",undo:"R\xFCckg\xE4ngig",redo:"Wiederholen",fit:"Alles zeigen",room:"Raum",rooms:"R\xE4ume",room_name:"Name",area:"Bereich",no_area:"Kein Bereich",material:"Boden",x:"X (m)",z:"Y (m)",width:"Breite (m)",depth:"Tiefe (m)",points:"Eckpunkte",delete_point:"Punkt l\xF6schen",duplicate:"Duplizieren",delete:"L\xF6schen",new_room:"Raum {n}",settings:"Einstellungen",pendant_shape:"Form",pendant_shade:"Schirm",paint_colour:"Lackfarbe",pendant_globe:"Kugel",pendant_cone:"Kegel",pendant_drum:"Trommel",pkg_open:"Einrichten \u2026",pkg_hint:"Die M\xF6bel kommen an die W\xE4nde des Raums; Leuchten verbinden sich mit den Lichtern des Bereichs. Danach einzeln anpassen \u2013 Strg+Z nimmt alles zur\xFCck.",pkg_done:"{n} M\xF6bel gesetzt \u2013 Strg+Z nimmt es zur\xFCck.",pkg_kitchen_row:"K\xFCchenzeile",pkg_kitchen_row_desc:"Zeile an der R\xFCckwand mit K\xFChlschrank, Backofen, Sp\xFCle, Sp\xFClmaschine und Herd, Oberschrank, Esstisch mit Pendelleuchte",pkg_kitchen_l:"K\xFCche in L-Form",pkg_kitchen_l_desc:"Zeile hinten und links, Kochinsel mit Barhockern",pkg_bath:"Bad",pkg_bath_desc:"Waschtisch, WC, Badewanne, Waschmaschine, Einbauspot",pkg_bedroom:"Schlafzimmer",pkg_bedroom_desc:"Doppelbett mit zwei Nachttischen, Schrank, Kommode, Deckenleuchte",pkg_living:"Wohnzimmer",pkg_living_desc:"TV-Board, Sofa, Couchtisch, Teppich, Sessel, Regal, Stehlampe, Pflanze",pkg_dining:"Esszimmer",pkg_dining_desc:"Esstisch mit vier St\xFChlen, Sideboard, Pendelleuchte",pkg_office:"B\xFCro",pkg_office_desc:"Schreibtisch mit B\xFCrostuhl, zwei Regale, Deckenleuchte",pkg_kids:"Kinderzimmer",pkg_kids_desc:"Einzelbett, Schreibtisch, Regal, Teppich",pkg_hall:"Flur",pkg_hall_desc:"Garderobe, zwei Einbauspots",spots_place:"Spots setzen",spots_type:"Leuchte",spots_cols:"Spalten (links\u2013rechts)",spots_rows:"Reihen (vorne\u2013hinten)",spots_add:"{n} Leuchten setzen",spots_placed:"{n} Leuchten gesetzt.",spots_hint:"Alle Leuchten folgen dem gew\xE4hlten Licht (z. B. Spots an einem Dimmer). Einzeln verschieben und ein anderes Licht w\xE4hlen geht danach wie bei jedem M\xF6bel.",cancel:"Abbrechen",backup:"Sicherung",backup_history:"Wiederherstellungspunkte",backup_none:"Noch keine. Beim Bearbeiten entsteht h\xF6chstens alle 10 Minuten ein Punkt.",backup_summary:"{rooms} R\xE4ume, {furniture} M\xF6bel",backup_restore:"Wiederherstellen",backup_restore_confirm:"Den Stand vom {time} wiederherstellen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_restored:"Wiederhergestellt.",backup_file:"Datei",backup_export:"Exportieren",backup_export_share:"Als Vorlage teilen",backup_export_share_hint:"Ohne Bereiche, Ger\xE4te, Sensoren und Bilder \u2013 zum Weitergeben an andere.",backup_import:"Importieren \u2026",backup_import_confirm:"Den ganzen Grundriss durch die Datei ersetzen? Der jetzige Stand bleibt als Wiederherstellungspunkt erhalten.",backup_import_error:"Die Datei ist kein NextFloor-Plan ({error}).",backup_imported:"Importiert.",backup_hint:"Hintergrundbilder sind nicht in der Datei enthalten.",backup_full:"Komplett-Backup",backup_full_export:"Alles sichern (Plan, Bilder, Packs)",backup_full_import:"Komplett-Backup wiederherstellen \u2026",backup_full_hint:"Eine Datei mit dem Plan, allen Hintergrund- und Bildschirmbildern und den installierten Packs. Beim Wiederherstellen wird jedes Pack erneut gepr\xFCft; der Lizenzschl\xFCssel ist nicht enthalten.",backup_full_confirm:"Plan, Bilder und Packs durch das Backup ersetzen? Der aktuelle Stand bleibt als Wiederherstellungspunkt erhalten.",backup_full_not_backup:"Das ist kein Komplett-Backup von NextFloor.",backup_full_restored:"Backup wiederhergestellt: {packs} Packs, {pictures} Bilder.",backup_full_skipped:"\xDCbersprungen (nicht lesbar): {packs}.",export_name_full:"komplett",device_confirm:"Vor dem Schalten nachfragen",device_confirm_hint:"Beim Antippen in 3D, im Schnellmen\xFC und im Raumfenster erscheint erst eine R\xFCckfrage. Doppeltipp auf den Raum l\xE4sst dieses Ger\xE4t aus.",cover_confirm_hint:"Auf, Zu und Positionen fragen im Schnellmen\xFC und im Raumfenster erst nach, und Wischen \xFCber das Symbol bewegt den Rollladen nicht mehr (es dreht dann die Ansicht). Stopp fragt nie.",confirm_switch:"{name} wirklich schalten?",split_handle_hint:"Ziehen: Breite von Plan und 3D-Ansicht",wall_exterior:"Au\xDFenwand (m)",wall_interior:"Innenwand (m)",grid:"Raster (m)",background:"Vorlage (Grundriss-Bild)",background_upload:"Bild w\xE4hlen \u2026",background_width:"Breite im Plan (m)",background_opacity:"Deckkraft",background_rotation:"Drehung (\xB0)",background_edit:"Verschieben, skalieren und drehen",background_edit_done:"Fertig",background_edit_hint:"Solange der Modus an ist: Bild ziehen verschiebt es, der Griff unten rechts zieht es gr\xF6\xDFer oder kleiner. Erst das Bild an den Ma\xDFstab anpassen, dann drehen.",background_remove:"Vorlage entfernen",hint_select:"Raum antippen zum Ausw\xE4hlen \xB7 Ecken ziehen \xB7 \u201E+\u201C auf einer Kante f\xFCgt einen Punkt ein \xB7 Pfeiltasten verschieben \xB7 Entf l\xF6scht \xB7 Strg+Z",hint_rect:"Ziehen, um ein Rechteck zu zeichnen",hint_polygon:"Punkte setzen \xB7 auf den ersten Punkt tippen oder Enter schlie\xDFt \xB7 Esc bricht ab",hint_empty:"Lege zuerst eine Etage an.",area_m2:"{a} m\xB2",overlap_warning:"R\xE4ume \xFCberlappen sich \u2013 die W\xE4nde dort sind unvollst\xE4ndig.",read_only:"Nur Administratoren k\xF6nnen den Grundriss bearbeiten.",mat_wood:"Holz",mat_oak:"Eiche",mat_tiles:"Fliesen",mat_carpet:"Teppich",mat_stone:"Stein",mat_concrete:"Beton",card_name:"NextFloor",card_description:"Deine Wohnung in 3D (Neon).",stats:"{calls} Draw-Calls \xB7 {tris} Dreiecke",stats_fps:"{fps} B/s (langsamstes Bild {ms} ms)",stats_idle:"Ruhe (0 B/s)",stats_busy_camera:"Kamera",stats_busy_floors:"Etagen",stats_busy_openings:"T\xFCren/Fenster",stats_busy_flash:"Blitz",stats_busy_roof:"Dach",stats_busy_flow:"Stromfluss",stats_busy_effect:"Farbeffekt",stats_busy_robot:"Roboter",stats_busy_orbit:"Kamerafahrt",stats_busy_tint:"Raumfarbe",stats_low:"Stufe Tablet, Pixeldichte {r}",stats_full:"volle Stufe, Pixeldichte {r}",floors_apart:"Auseinander",floors_stacked:"Gestapelt",roof_keep:"Dach bleibt",roof_keep_hint:"Das Dach bleibt beim Heranzoomen auf dem Haus, statt sich zu heben und auszublenden",floor_rooms_one:"1 Raum",floor_rooms:"{n} R\xE4ume",quality:"Qualit\xE4t",quality_auto:"Auto",quality_low:"Tablet",quality_high:"Hoch",state_on:"An",state_off:"Aus",state_open:"Offen",state_closed:"Zu",state_opening:"\xD6ffnet",state_closing:"Schlie\xDFt",state_playing:"Spielt",state_paused:"Pause",state_idle:"Bereit",state_locked:"Verriegelt",state_unlocked:"Entriegelt",state_detected:"Erkannt",state_clear:"Frei",state_unavailable:"Nicht verf\xFCgbar",state_heat:"Heizen",state_cool:"K\xFChlen",state_auto:"Automatik",state_heat_cool:"Heizen/K\xFChlen",state_dry:"Entfeuchten",state_fan_only:"L\xFCften",devices:"Ger\xE4te",devices_none_area:"Verkn\xFCpfe den Raum mit einem Bereich, dann erscheinen dessen Ger\xE4te hier.",devices_none:"Im Bereich gibt es keine passenden Ger\xE4te.",devices_place_all_n:"Alle {n} platzieren \u2026",devices_place_all_confirm:"{n} Ger\xE4te auf einmal in den Raum setzen? (Strg+Z bzw. \u201ER\xFCckg\xE4ngig\u201C nimmt alle in einem Schritt zur\xFCck.)",devices_src_area:"Dieser Bereich",devices_src_other:"Andere Bereiche",devices_src_none:"Ohne Bereich",panel_hide:"Im Raumfenster ausblenden",panel_unhide:"Im Raumfenster wieder zeigen",panel_state_hide:"Zustand im Raumfenster ausblenden (z. B. ein Rollladen, der nur \u201Eunbekannt\u201C meldet)",panel_state_show:"Zustand im Raumfenster wieder zeigen",devices_place:"Platzieren",devices_remove:"Entfernen",devices_hint:"Platzierte Ger\xE4te erscheinen in 3D. Im Plan lassen sie sich verschieben.",panel_lights:"Licht",panel_covers:"Rolll\xE4den",panel_climate:"Heizung",panel_media:"Medien",panel_switches:"Schalter",panel_sensors:"Sensoren",panel_scenes:"Szenen & Skripte",panel_cameras:"Kameras",camera_live:"Livebild \xF6ffnen",through_camera:"Durch die Kamera schauen",through_back:"Zur\xFCck zur Ansicht",camera_mount:"Montage",camera_mount_wall:"Wand (Blickrichtung = Drehung)",camera_mount_ceiling:"Decke (Dome, rundum)",camera_fov:"Sichtwinkel (\xB0)",camera_reach:"Reichweite (m)",camera_fov_short:"Winkel \xB0",camera_reach_short:"Reichweite m",camera_tilt:"Neigung nach unten (\xB0)",camera_tilt_short:"Neigung \xB0",camera_aim_hint:"Im Plan zeigt der Kegel, wohin die Kamera schaut. Der Griff an seiner Spitze dreht die Kamera und setzt die Reichweite. In 3D endet der Kegel an der ersten Wand.",camera_detect_found:"{n} Erkennungs-Sensoren am Ger\xE4t dieser Kamera: {kinds}. Solange einer etwas meldet, markiert ein Pin es in 3D vor der Kamera.",camera_detect_none:"Am Ger\xE4t dieser Kamera gibt es noch keine Erkennungs-Sensoren. Pins erscheinen, sobald die Integration welche liefert (z. B. Frigate, UniFi Protect, Reolink).",camera_cone:"Sichtkegel in 3D zeigen",state_recording:"Nimmt auf",state_streaming:"Streamt",panel_all_off:"Alle aus",panel_all_on:"Alle an",view_options:"Ansicht: Qualit\xE4t, Look, Symbole, FPS",panel_all_open:"Alle auf",panel_all_close:"Alle zu",central:"Zentral: alle Lichter, Rolll\xE4den und Favoriten",central_house:"Ganzes Haus",central_lights:"Lichter",central_covers:"Rolll\xE4den",central_on:"An",central_off:"Aus",central_open:"Auf",central_close:"Zu",central_sure:"Sicher?",central_favorites:"Favoriten",central_no_favorites:"Noch keine Favoriten. Im Editor unter \u201EFavoriten\u201C legst du Szenen, Skripte und Schalter fest.",card_central:"Stern mit Zentral-Men\xFC",card_central_hint:"Alle Lichter und Rolll\xE4den der Etage oder des Hauses und die Favoriten aus dem Editor.",favorites:"Favoriten",favorites_hint:"Szenen, Skripte, Automationen, Tasten und Schalter f\xFCr das Zentral-Men\xFC (Stern) der 3D-Ansicht \u2013 Party, Anwesenheitssimulation, Verschattung, Bew\xE4sserung.",favorites_add:"Favorit hinzuf\xFCgen",background_handles_hint:"Das Bild hat jetzt Griffe wie ein M\xF6bel: ziehen verschiebt es, die Ecke unten rechts skaliert, der runde Griff oben dreht (mit Umschalt in 15\xB0-Schritten). Passt es, \u201EFertig\u201C tippen \u2013 dann liegt es fest.",background_fixed_hint:"Das Bild liegt fest, du kannst dar\xFCber zeichnen. Zum Anpassen \u201EVerschieben, skalieren und drehen\u201C tippen.",bg_level:"Gerade ausrichten",bg_level_cancel:"Ausrichten abbrechen",bg_level_first:"Tippe auf den Anfang einer Wand im Bild, die gerade (waagerecht oder senkrecht) sein soll.",bg_level_second:"Jetzt auf das Ende dieser Wand tippen \u2013 das Bild dreht sich passend.",bg_ruler:"Ma\xDFstab mit Lineal",bg_ruler_cancel:"Lineal abbrechen",bg_ruler_first:"Tippe im Bild auf den Anfang einer Strecke, deren L\xE4nge du kennst \u2013 etwa eine bema\xDFte Wand.",bg_ruler_second:"Jetzt auf das Ende der Strecke tippen.",bg_ruler_length_hint:"Im Plan gemessen: {m} m. Gib die echte L\xE4nge ein, das Bild wird passend skaliert.",bg_ruler_length:"Echte L\xE4nge (m)",bg_ruler_apply:"Ma\xDFstab \xFCbernehmen",thumbs_fold:"Etagenbilder zu Kn\xF6pfen einklappen",thumbs_show:"Etagenbilder wieder zeigen",room_start_view:"Ansicht als Start des Raums",room_start_view_hint:"Tippst du den Raum in 3D an, fliegt die Kamera genau so hin, wie die 3D-Ansicht rechts gerade steht \u2013 Blickwinkel, Zoom und Bildausschnitt. Erst 3D daneben einschalten, den Raum drehen und heranzoomen, dann tippen.",room_start_view_reset:"Startansicht des Raums entfernen (wieder von oben)",room_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh und zoom den Raum so, wie er sich \xF6ffnen soll.",floor_start_view:"Ansicht als Start der Etage",floor_start_view_hint:"Diese Etage \xF6ffnet sich in 3D so, wie die 3D-Ansicht rechts gerade steht \u2013 etwa das Erdgeschoss von vorn und das Obergeschoss von hinten. Erst 3D daneben einschalten, drehen, dann tippen.",floor_start_view_reset:"Startansicht der Etage entfernen (wieder wie das Haus)",floor_start_view_need_pane:"Schalte zuerst \u201E3D daneben\u201C ein und dreh die Etage so, wie sie sich \xF6ffnen soll.",glow_scale:"Leuchtst\xE4rke in 3D (%)",glow_scale_hint:"Wie kr\xE4ftig die Leuchte in 3D leuchtet: unter 100 % d\xE4mpft helle LED-Streifen, damit der Raum nicht \xFCberstrahlt; \xFCber 100 % l\xE4sst eine schwache Lampe st\xE4rker leuchten. Schaltet nichts in Home Assistant.",vehicle_to_spot:"In Stellplatz umwandeln",vehicle_to_spot_hint:"Ein Fahrzeug als einfaches M\xF6bel steht immer da. Als Stellplatz erscheint es nur, wenn ein Sensor das Auto meldet, und dort verkn\xFCpfst du auch das Auto-Ger\xE4t (Ladestand, Reichweite, Schloss, Klima).",as_furniture:"Als M\xF6bel darstellen",as_furniture_hint:"Ersetzt den Pin durch ein M\xF6bel an derselben Stelle, das mit diesem Ger\xE4t verkn\xFCpft ist \u2013 etwa ein Lautsprecher f\xFCr einen Media Player oder eine Leuchte f\xFCr ein Licht. Strg+Z nimmt es zur\xFCck.",as_furniture_pick:"M\xF6bel w\xE4hlen \u2026",as_device:"Wieder als Ger\xE4te-Pin",as_device_hint:"Ersetzt das M\xF6bel durch den einfachen Pin seines Ger\xE4ts an derselben Stelle.",presets:"Sender und Playlists (Klang)",presets_hint:"Erscheinen im Schnellmen\xFC jedes Lautsprechers unter \u201EAbspielen\u201C, neben den Quellen des Players. F\xFCr einen Echo (Alexa Media Player): Art SPOTIFY, AMAZON_MUSIC oder TUNEIN und als Inhalt, was du sagen w\xFCrdest (\u201ERock Antenne\u201C). F\xFCr Sonos, Music Assistant und andere: Art music oder url mit einer Stream-Adresse oder einer URI.",preset_type:"Art",preset_type_hint:"media_content_type von play_media, z. B. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Inhalt",preset_content_hint:"media_content_id: Stream-URL, URI (spotify:playlist:\u2026) oder bei Alexa ein Suchbegriff",preset_add:"Sender oder Playlist",own_buttons:"Eigene Kn\xF6pfe",own_buttons_hint:"Erscheinen im Zentral-Men\xFC (Stern) unter den Favoriten: eine Dashboard-Seite \xF6ffnen, die Details einer Entit\xE4t zeigen, einen Dienst aufrufen oder ein browser_mod-Popup mit deiner eigenen Karte \xF6ffnen.",own_button_label:"Beschriftung",own_button_action:"Aktion",own_button_new:"Neuer Knopf",own_button_add:"Eigener Knopf",own_action_navigate:"Seite \xF6ffnen",own_action_more_info:"Details einer Entit\xE4t",own_action_service:"Dienst aufrufen",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Pfad",own_target_more_info:"Entit\xE4t",own_target_service:"Dienst (domain.service)",own_data:"Daten (JSON)",own_data_hint:'F\xFCr einen Dienst seine Daten, f\xFCr fire-dom-event der Inhalt des Ereignisses, z. B. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.',own_data_bad:"Kein g\xFCltiges JSON-Objekt.",panel_no_area:"Dieser Raum ist mit keinem Bereich verkn\xFCpft. Im Editor kannst du ihn verkn\xFCpfen.",panel_empty:"F\xFCr diesen Raum sind keine Ger\xE4te im Grundriss. Im Editor lassen sich Ger\xE4te platzieren oder mit \u2606 f\xFCrs Raumfenster ausw\xE4hlen.",close:"Schlie\xDFen",brightness:"Helligkeit",color_temp:"Farbtemperatur",color:"Farbe",position:"Position",cover_open:"Auf",cover_stop:"Stopp",cover_tilt:"Lamellen",cover_tilt_open:"Lamellen auf",cover_tilt_close:"Lamellen zu",cover_close:"Zu",target_temp:"Soll",current_temp:"Ist",temp_down:"K\xE4lter",temp_up:"W\xE4rmer",volume:"Lautst\xE4rke",play_pause:"Wiedergabe/Pause",previous:"Zur\xFCck",next:"Weiter",run:"Ausf\xFChren",details:"Details",hold_hint:"Antippen schaltet \xB7 lange dr\xFCcken \xF6ffnet Details",tool_opening:"T\xFCr & Fenster",tool_furniture:"M\xF6bel",qm_off:"Aus",find:"Suchen",find_placeholder:"Wo ist \u2026? Ger\xE4t oder Raum",find_none:"Nichts gefunden",swipe_off:"Aus",panel_pin:"Im Raumfenster zeigen",panel_unpin:"Nicht im Raumfenster zeigen",devices_panel_hint:"Das Raumfenster zeigt die Ger\xE4te im Grundriss. \u2606 nimmt ein Ger\xE4t zus\xE4tzlich ins Raumfenster auf, ohne es zu platzieren.",card_section_view:"Ansicht",card_size:"Gr\xF6\xDFe",card_size_fixed:"Feste H\xF6he",card_size_fill:"Bildschirm f\xFCllen",card_fill_hint:"Am besten in einer Dashboard-Ansicht vom Typ \u201EPanel (1 Karte)\u201C \u2013 dann nimmt die Karte den ganzen Platz ein.",card_controls:"Schalter in der Karte",card_floor_thumbs:"Etagen als Mini-Ansichten",card_floor_thumbs_hint:"Kleine Bilder der Etagen am Rand \u2013 antippen wechselt die Etage",card_floor_thumbs_hint_start:"Die gew\xE4hlte Etage ist dann die Start-Etage \u2013 mit den Bildern am Rand wechselt man zu den anderen",card_room_names:"Raumnamen anzeigen",card_section_kiosk:"Wandtablet (Kiosk)",card_section_features:"Funktionen",card_weather_plan:"wie im Plan eingestellt",card_pro_hint:"Bewegungsspur und Kamerawand geh\xF6ren zum Kameras: Die Spur zeigt die letzte halbe Stunde, die Wand alle Kameras des Plans.",card_idle_return:"Zur\xFCck zur Startansicht nach",card_idle_off:"Nie",card_idle_min:"{n} min ohne Bedienung",card_idle_hint:"Nach der Wartezeit schlie\xDFt die Karte den Raum und zeigt wieder die Startansicht.",card_night:"Nachtdimmung",card_night_off:"Aus",card_night_sun:"Nach Sonnenstand",card_night_time:"Zeitraum",card_night_range:"Zeitraum (z. B. 22:00-06:00)",card_idle_orbit:"Kamerafahrt als Bildschirmschoner",card_idle_orbit_hint:"Nach der R\xFCckkehr dreht sich die Ansicht langsam, bis jemand das Tablet ber\xFChrt",card_dashboard:"Knopf zu einem Dashboard (Pfad)",card_dashboard_label:"Beschriftung des Knopfs",card_dashboard_hint:"Ein Knopf oben rechts in der Karte \xF6ffnet das Dashboard oder die Ansicht mit diesem Pfad, z. B. /lovelace/home oder /dashboard-haus/0. Ohne Beschriftung zeigt er \u2302.",card_alerts:"Warnungen anzeigen",card_alerts_hint:"Rauch, Gas, CO, Wasser, Alarmanlage und offene Fenster bei Regen: der Raum pulsiert, oben erscheint ein Hinweis",card_alert_jump:"Bei neuer Warnung zum Raum springen",card_alert_jump_hint:"Die Ansicht wechselt selbst zur Etage und zum Raum der Warnung",card_scenes:"Szenen-Kn\xF6pfe im Raum",card_scenes_hint:"Szenen und Skripte des Bereichs als Kn\xF6pfe unter der 3D-Ansicht, wenn ein Raum gew\xE4hlt ist",card_motion_trail:"Bewegungsspur",card_camera_wall:"Knopf \u201EKameras\u201C (Kamera-Wand)",card_camera_wall_hint:"Ein Knopf unten in der Karte \xF6ffnet die Kamera-Wand mit allen Livebildern.",card_motion_trail_hint:"Ein Pfad der Bewegungen der letzten halben Stunde durchs Haus, mit Uhrzeiten",trail_short:"Spur",cameras_short:"Kameras",camera_wall_title:"Kamera-Wand",camera_wall_hint:"Alle Kameras nebeneinander. Antippen vergr\xF6\xDFert eine; ein roter Rand hei\xDFt Bewegung.",detect_person:"Person",detect_car:"Fahrzeug",detect_pet:"Tier",detect_motion:"Bewegung",weather_short:"Wetter",weather_entity:"Wetter-Entit\xE4t",weather_effects:"Wetter-Effekte in 3D",weather_effect_rain:"Regen",weather_effect_snow:"Schnee",weather_effect_fog:"Nebel (graut die Szene ein)",weather_effect_clouds:"Wolken dunkeln Himmel und Sonne ab",weather_effect_lightning:"Blitze bei Gewitter",weather_effect_sky:"Sonne und Mond am Himmel",rain_warning:"Warnung: Fenster offen bei Regen",sun_patches:"Sonnenlicht durch die Fenster",sun_patches_hint:"Mit eingestellter Nordrichtung f\xE4llt das Sonnenlicht aus sun.sun als helle Flecken durch die Fenster auf den Boden. Ohne Haken bleibt der Boden ohne Sonnenflecken.",weather_entity_hint:"Welche Wetter-Entit\xE4t den Himmel ums Haus steuert. \u201EAutomatisch\u201C nimmt die erste gefundene.",weather_hint:"Wetter am Haus: Regen und Schnee fallen mit dem echten Wind, Wolken ziehen mit Schatten \xFCbers Grundst\xFCck, Blitze, Nebel, Sonne und Mond",card_weather:"Wetter drau\xDFen",card_weather_hint:"Regen, Schnee, Hagel, Wolken mit Schatten, Blitze und Nebel aus der ersten Wetter-Entit\xE4t (weather_entity w\xE4hlt eine andere); auf Stufe Tablet weniger Teilchen",trail_hint:"Bewegungsspur: wo in den letzten 30 Minuten Bewegung gemeldet wurde, mit Uhrzeit",alerts:"Warnungen",alert_smoke:"Rauch: {name}",alert_gas:"Gas: {name}",alert_co:"Kohlenmonoxid: {name}",alert_water:"Wasser: {name}",alert_alarm:"Alarm ausgel\xF6st",alert_alarm_pending:"Alarm wird ausgel\xF6st",alert_window_rain:"Fenster offen bei Regen: {name}",room_names_short:"Raumnamen",floor_stack_short_dim:"Abgedunkelt",floor_stack_short_stacked:"Gestapelt",floor_stack_short_single:"Einzeln",size_short_w:"B",size_short_d:"T",size_short_h:"H",import_error_not_json:"Die Datei ist kein JSON.",import_error_not_plan:"Die Datei ist kein NextFloor-Plan.",export_name_template:"vorlage",export_name_backup:"sicherung",card_floor_stack:"Etagen darunter",floor_stack_dim:"Abgedunkelt",floor_stack_stacked:"Gestapelt (ganzes Haus bis hier)",floor_stack_single:"Ausgeblendet (nur diese Etage)",card_control_walls:"W\xE4nde hoch/Schnitt",card_control_floors:"Etagen auseinander",card_control_temperature:"Temperatur",card_control_humidity:"Feuchte",card_control_co2:"CO\u2082",card_controls_hint:"W\xE4nde hoch/Schnitt, Etagen auseinander und Temperatur, Feuchte, CO\u2082 zum Umschalten",controls_hide:"Bedienelemente ausblenden \u2013 nur die 3D-Ansicht bleibt",nav_wrap:"Leiste umbrechen: alle Etagen und R\xE4ume auf mehreren Zeilen",nav_row:"Leiste in einer Zeile (seitlich scrollen)",controls_show:"Bedienelemente wieder einblenden",card_controls_hidden:"Mit ausgeblendeten Bedienelementen starten",card_controls_hidden_hint:"Nur die 3D-Ansicht; ein Auge unten links holt Leisten, Werte und Schalter zur\xFCck",card_controls_hide_after:"Bedienelemente ausblenden nach",card_hide_after_s:"{n} s ohne Ber\xFChrung",card_fullscreen_button:"Vollbild-Taste",card_fullscreen_button_hint:"Blendet das Dashboard drumherum aus (z. B. am Wandtablet)",fullscreen:"Vollbild",fullscreen_exit:"Vollbild beenden",card_section_show:"Anzeigen",card_floor:"Etage",card_floor_house:"Ganzes Haus (Etage antippen zum \xD6ffnen)",card_height:"H\xF6he (Pixel)",card_walls:"W\xE4nde",card_quality_hint:"\u201ETablet\u201C ist die sparsamste Stufe \u2013 ideal f\xFCr Fire-Tablets und andere Wandtablets.",card_flows_switch:"Schalter in der Karte",card_flows_on:"Immer an",card_flows_off:"Immer aus",holos:"Karten",holos_hint:"Die Live-Karten \xFCber dem Haus (Energiebilanz, Auto, Medien) ein- oder ausblenden",card_energy:"Energiewerte oben anzeigen",card_room_panel:"Raum-Details beim Antippen",card_room_panel_hint:"Lichter, Rolll\xE4den und Kameras des Raums in einem Seitenfenster",card_explode:"Etagen in der Hausansicht auseinanderziehen",card_roof_fade:"Dach beim Heranzoomen ausblenden",card_roof_fade_hint:"Aus: Das Dach bleibt auf dem Haus, auch wenn die Kamera nah herankommt.",card_stats:"Leistungsanzeige (Bilder pro Sekunde)",card_stats_hint:"Zum Pr\xFCfen, wie fl\xFCssig die Karte auf dem Ger\xE4t l\xE4uft",packs:"M\xF6bel-Packs",packs_hint:"Eigene M\xF6bel-Packs sind JSON-Dateien (Format in docs/packs.md). Die mitgelieferten Packs sind immer da.",lib_badge_light:"Leuchte: l\xE4sst sich mit einem Licht verkn\xFCpfen und in 3D schalten",lib_badge_electric:"Elektrisch: l\xE4sst sich mit Entit\xE4t und Leistungssensor verkn\xFCpfen (schalten, Bild, Verbrauch)",lib_badge_hint:"M\xF6bel mit Symbol lassen sich mit Entit\xE4ten verkn\xFCpfen: Leuchten schalten, Bildschirme zeigen Bilder, Ger\xE4te ihren Verbrauch.",pack_import:"M\xF6bel-Packs importieren \u2026",pack_imported:"\u201E{name}\u201C von {publisher} importiert \u2013 {n} M\xF6bel",packs_imported_n:"{n} von {total} Packs importiert",pack_by:"von {publisher} \xB7 {n} M\xF6bel",feature_text_cameras:"Eine Kamera antippen: die Ansicht fliegt an ihren Platz und schaut in ihre Richtung, dann blendet das Live-Bild ein \u2013 mit dem, was sie gerade erkennt (Person, Fahrzeug, Tier). Die Kamerawand zeigt alle Kameras nebeneinander, die Bewegungsspur zeichnet die letzte halbe Stunde als leuchtenden Pfad durchs Haus, mit Zeiten an jedem Raum.",feature_name_energy:"Energiefluss",feature_name_cameras:"Kameras",feature_name_weather:"Wetter am Haus",feature_name_screens:"TV-Bildschirme",feature_name_sound:"Klang",feature_name_car:"Auto",ext_tab:"Erweiterungen",ext_title:"Erweiterungen",ext_intro:"Was in NextFloor steckt: die gro\xDFen Funktionen und die M\xF6bel-Packs. Alles ist frei und Open Source \u2013 eigene M\xF6bel-Packs kannst du hier importieren.",ext_pro:"Funktionen",ext_open:"Erweiterungen \xF6ffnen",manual:"Anleitung",manual_more:"Mehr erfahren",ext_teaser_title:"Mehr M\xF6bel und Live-Funktionen",ext_teaser_text:"M\xF6bel-Packs und die Live-Erweiterungen (Wetter, Energie, Auto, Klang, Bildschirme, Kameras) findest du oben unter \u201EErweiterungen\u201C.",feature_text_weather:"Regen, Schnee, Hagel und Schneeregen fallen schr\xE4g mit dem echten Wind, Wolken ziehen mit ihren Schatten \xFCbers Grundst\xFCck, Blitze schlagen neben dem Haus ein, dazu Nebel, Sonne und Mond in ihrer echten Richtung.",feature_text_screens:"Ein Fernseher oder Monitor, der l\xE4uft, zeigt im 3D-Modell, was l\xE4uft: Cover, Titel, Interpret oder Serie und die App \u2013 auf einem Verlauf in der App-Farbe. Dahinter leuchtet ein Ambilight an der Wand, das beim Abspielen sanft atmet.",feature_text_energy:"Energieteilchen fliegen in B\xF6gen von den Solarfeldern zum Wechselrichter, zwischen Haus, Akku, Netz und Verbrauchern \u2013 schneller und dichter, je mehr Strom flie\xDFt. Die Module funkeln mit ihrer Produktion, eine Glaskarte \xFCber dem Dach zeigt die Bilanz und wie autark das Haus gerade ist.",feature_text_sound:"\xDCber jedem spielenden Lautsprecher oder Fernseher schwebt eine Karte mit Cover, Titel und Interpret \u2013 antippen f\xFCr Zur\xFCck, Abspielen/Pause, Weiter und Lautst\xE4rke. Schallringe in der Farbe der App (Spotify gr\xFCn, Netflix rot \u2026) breiten sich aus, lauter hei\xDFt weiter, und Lautsprecher einer Multiroom-Gruppe sind mit einem Faden verbunden.",feature_text_car:"Eine Glaskarte \xFCber dem Stellplatz zeigt Ladestand mit Farbring, Reichweite, Laden mit Leistung, Stecker und Innentemperatur \u2013 mit Kn\xF6pfen f\xFCr Schloss, Klima und Laden. L\xE4dt das Auto, fliegen Energieteilchen von der Wallbox hinein; ist es weg, steht da, wo es gerade ist. Die Entit\xE4ten findet NextFloor selbst am Ger\xE4t des Autos.",pack_remove:"Entfernen",pack_builtin:"mitgeliefert",live_autarky:"autark",live_car_away:"Unterwegs",live_car_charging:"L\xE4dt",live_car_plugged:"Eingesteckt",live_car_lock:"Verriegeln",live_car_unlock:"Entriegeln",live_car_unlock_confirm:"{name} wirklich entriegeln?",live_car_climate:"Klimatisierung",live_car_charge:"Laden starten/stoppen",live_media_prev:"Zur\xFCck",live_media_playpause:"Abspielen/Pause",live_media_next:"Weiter",live_media_volume:"Lautst\xE4rke",live_now:"jetzt",live_minutes_ago:"vor {n} min",live_car_device:"Auto (eine Entit\xE4t des Autos)",live_car_device_hint:"Ladestand, Reichweite, Laden, Stecker, Schloss und Klima findet NextFloor selbst am Ger\xE4t des Autos. Ohne Angabe nimmt es den Anwesenheitssensor des Stellplatzes.",pack_remove_confirm:"Pack \u201E{name}\u201C entfernen? M\xF6bel daraus bleiben als einfache K\xE4sten im Plan.",pack_missing_item:"M\xF6bel aus entferntem Pack",pack_error_not_a_pack:"Das ist keine M\xF6bel-Pack-Datei.",pack_error_builtin:"Ein mitgeliefertes Pack hat schon diese ID.",pack_error_invalid_content:"Das Pack enth\xE4lt ung\xFCltige M\xF6bel: {detail}",pack_error_too_large:"Die Datei ist zu gro\xDF.",pack_error_needs_update:"Diese Erweiterung braucht eine neuere Version von NextFloor. Bitte zuerst aktualisieren (HACS \u203A NextFloor \u203A \u22EE \u203A \u201EInformationen aktualisieren\u201C \u203A \u201EHerunterladen\u201C), Home Assistant neu starten und dann noch einmal installieren.",pack_error_other:"Import fehlgeschlagen: {detail}",back_to_room:"Zur\xFCck zu {room}",back_to_floor:"Zur\xFCck zur Etage",hint_furniture:"Raum antippen, dann rechts ein M\xF6belst\xFCck w\xE4hlen \xB7 M\xF6bel ziehen, an den Ecken die Gr\xF6\xDFe \xE4ndern",furniture_into:"Neue M\xF6bel kommen in die Mitte von \u201E{room}\u201C.",furniture_pick_room:"Tipp: Erst einen Raum antippen \u2013 dann landen neue M\xF6bel in seiner Mitte.",flows:"Stromfluss",flows_hint:"Energieb\xF6gen zwischen Solarfeldern, Wechselrichter, Akku, Netz und Verbrauchern ein- oder ausblenden",chk_title:"Einrichtung",chk_hint:"Was der Energiefluss braucht. Antippen springt an die Stelle.",chk_solar:"Solarfeld angelegt",chk_solar_add:"Ein Solarfeld aufs Dach legen",chk_meter:"Stromz\xE4hler mit Netzsensor",chk_meter_sensor:"Stromz\xE4hler: Netzsensor (W) fehlt",chk_meter_add:"Stromz\xE4hler anlegen",chk_inverter:"Wechselrichter mit Leistungssensor",chk_inverter_sensor:"Wechselrichter: Leistungssensor fehlt",chk_inverter_add:"Wechselrichter anlegen",chk_battery:"Stromspeicher mit Leistung und Ladestand",chk_battery_sensor:"Stromspeicher: Leistung oder Ladestand fehlt",chk_battery_opt:"Stromspeicher (optional)",chk_grid:"Netzanschluss gesetzt",chk_grid_opt:"Netzanschluss (optional, sonst automatisch)",energy_sign_grid:"Das Haus zeigt Einspeisung, obwohl die Sonne nichts liefert. Der Netzsensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_battery:"Der Speicher l\xE4dt ohne Sonne und ohne Netzbezug. Sein Sensor hat wahrscheinlich das umgekehrte Vorzeichen.",energy_sign_flip:"Vorzeichen umkehren",help_title:"Hilfe und R\xFCckmeldung",help_hint:"Fehler bitte als Issue auf GitHub, W\xFCnsche als Diskussion \u2013 so geht nichts verloren, und alle sehen den Stand.",help_issue:"Problem melden",help_idea:"Idee vorschlagen",furn_name:"Name (optional)",furn_mirror:"Spiegeln",furn_mirror_hint:"Links und rechts vertauschen \u2013 das L-Sofa andersherum, der Schrank mit der T\xFCr auf der anderen Seite, die K\xFCchenzeile gespiegelt.",hint_opening:"Auf eine Wand tippen, um eine T\xFCr oder ein Fenster einzusetzen \u2013 die Art w\xE4hlst du danach rechts",preset_door:"T\xFCr",preset_door_double:"Doppelt\xFCr",preset_window:"Fenster",preset_window_double:"Fenster 2-fl\xFCgelig",preset_terrace:"Terrassent\xFCr",preset_terrace_double:"Terrassent\xFCr 2-fl\xFCgelig",preset_garage:"Garagentor",preset_front:"Haust\xFCr",opening_style:"Stil",sidelight_auto:"automatisch",sidelight_hinge:"Seitenteil an der Anschlagseite",sidelight_hinge_hint:"Das Seitenteil sitzt sonst gegen\xFCber dem Anschlag; mit Haken neben den B\xE4ndern.",sidelight_width:"Breite Seitenteil (m)",sidelight_width_left:"Seitenteil links (m)",sidelight_width_right:"Seitenteil rechts (m)",style_auto:"Automatisch ({style})",style_interior:"Zimmert\xFCr",style_front:"Haust\xFCr",style_front_glass:"Haust\xFCr mit Glasausschnitt",style_sidelight:"Haust\xFCr mit Seitenteil",style_sidelights:"Haust\xFCr mit 2 Seitenteilen",style_glass:"Glast\xFCr",style_sliding:"Schiebet\xFCr",style_passage:"Durchbruch (ohne T\xFCr)",style_standard:"Standard",style_bars:"Mit Sprossen",style_glass_wall:"Glaswand (feststehend)",preset_glass_wall:"Glaswand",flip_hinge:"Anschlag wechseln",flip_main_leaf:"Hauptfl\xFCgel wechseln",flip_hinge_hint:"Scharniere auf die andere Seite",flip_swing:"\xD6ffnungsrichtung umdrehen",flip_swing_hint:"Die T\xFCr schwenkt in den Raum oder zur anderen Seite",main_leaf:"Hauptfl\xFCgel (vom Raum aus)",contact_main:"Kontakt Hauptfl\xFCgel",contact_second:"Kontakt zweiter Fl\xFCgel",tool_outdoor:"Au\xDFen",tool_measure:"Nach Ma\xDF",hint_measure:"Startpunkt antippen, dann rechts die Wandl\xE4ngen mit Richtung eingeben",measure:"Raum nach Ma\xDF",measure_start:"Tippe im Plan auf den Startpunkt, z. B. eine Raumecke.",measure_from:"Start bei {x} / {z} m \u2013 antippen verschiebt den Start.",measure_length:"L\xE4nge der n\xE4chsten Wand (m)",measure_close:"Raum schlie\xDFen",measure_undo:"Letzte Wand weg",measure_gap:"L\xFCcke zum Start: {gap} m (wird beim Schlie\xDFen verbunden)",measure_hint:"Tipp: L\xE4nge eintippen und Pfeiltaste dr\xFCcken. Mit gemessenen Innenma\xDFen danach \u201EL\xFCcken schlie\xDFen\u201C.",rect_by_size:"Rechteck nach Ma\xDF",rect_add:"Rechteck anlegen",dir_up:"Nach oben",dir_down:"Nach unten",dir_left:"Nach links",dir_right:"Nach rechts",hint_outdoor:"Ziehen, um eine Au\xDFenfl\xE4che (Rasen, Terrasse, Pool \u2026) aufzuziehen",outdoor:"Au\xDFenfl\xE4che",outdoor_type:"Art",outdoor_height:"H\xF6he (m)",outdoor_offset:"H\xF6henversatz (m, \u2212 = tiefer)",outdoor_outline:"Umrisslinie zeigen",outdoor_outline_hint:"Ohne Haken zeichnet die Fl\xE4che keine Leuchtlinie an ihrem Rand \u2013 f\xFCr gro\xDFe Grundst\xFCcke aus mehreren Rasenfl\xE4chen.",outdoor_hint:"Au\xDFenleuchten (Wegleuchte, Garten-Spot, Wandleuchte au\xDFen) beleuchten alle Au\xDFenfl\xE4chen und die Fassade.",out_lawn:"Rasen",out_terrace:"Terrasse",out_path:"Weg",out_driveway:"Einfahrt",out_pool:"Pool",out_bed:"Beet",out_hedge:"Hecke",out_fence:"Zaun",out_wild:"Wildfl\xE4che",out_pergola:"Pergola / Rahmen",outdoor_open:"Offen (letzte Kante weglassen)",outdoor_open_hint:"Die Kante vom letzten zum ersten Punkt wird nicht gezeichnet \u2013 ein Zaun oder eine Pergola, die ans Haus lehnt.",outdoor_bracing:"X-Verstrebung",outdoor_cut:"Aus Fl\xE4chen darunter ausschneiden",outdoor_cut_hint:"Jede Fl\xE4che, in der diese ganz liegt und die vor ihr gezeichnet wurde, bekommt hier ein Loch \u2013 ein Teich oder eine Wildfl\xE4che im Rasen.",outdoor_slope:"Gef\xE4lle (m)",outdoor_slope_hint:"H\xF6henunterschied von der hohen zur tiefen Kante; die hohe Kante liegt auf dem H\xF6henversatz. Leuchten auf der Fl\xE4che folgen.",outdoor_slope_dir:"F\xE4llt nach",slope_x:"rechts (+X)",slope_nx:"links (\u2212X)",slope_z:"unten (+Z)",slope_nz:"oben (\u2212Z)",north:"Nordrichtung (\xB0 im Uhrzeigersinn von oben)",north_hint:"Die Nordrichtung braucht der Sonnenstand (Licht durch die Fenster).",roof:"Dach",roof_none:"Kein Dach",roof_flat:"Flachdach",roof_gable:"Satteldach",roof_custom:"Dachfl\xE4chen (frei)",roof_sections:"Dachfl\xE4chen",roof_sections_hint:"Jede Dachfl\xE4che deckt ein Rechteck des Hauses ab, etwa das Wohnhaus, die Scheune oder einen Anbau \u2013 jede mit eigener Form, Firstrichtung, Traufh\xF6he und Neigung. Eine neue Fl\xE4che ziehst du im Plan auf; antippen w\xE4hlt sie aus, ziehen verschiebt sie, die Ecken \xE4ndern die Gr\xF6\xDFe.",roof_sections_start:"Dachfl\xE4chen aus den R\xE4umen erzeugen",roof_sections_regen:"Neu aus den R\xE4umen erzeugen",roof_sections_off:"Zur\xFCck zu einem Dach",roof_regen_confirm:"Alle Dachfl\xE4chen durch einen neuen Vorschlag aus den R\xE4umen ersetzen?",roof_section:"Dachfl\xE4che",roof_section_hint:"H\xF6hen z\xE4hlen vom Boden. Eine Seite mit tieferer Traufe zieht weiter herunter (Abschleppdach); Pultd\xE4cher steigen von der ersten Seite an.",roof_shape_gable:"Sattel",roof_shape_hip:"Walm",roof_shape_pent:"Pult",roof_shape_flat:"Flach",roof_shape_halfhip:"Kr\xFCppelwalm",roof_shape_pyramid:"Zelt",roof_shape_mansard:"Mansard",roof_shape_parapet:"Attika",roof_shape:"Form",roof_axis_x:"First \u2194",roof_axis_z:"First \u2195",roof_eave:"Traufe (m)",roof_pitch_short:"Neigung (\xB0)",roof_height:"H\xF6he (m)",roof_base:"Wandoberkante (m)",roof_on_floor:"Sitzt auf Etage",roof_on_floor_hint:"Setzt den Abschnitt auf die Wandoberkante dieser Etage; Grundh\xF6he und Traufen wandern mit. In der 3D-Ansicht geh\xF6rt das Dach zu dieser Etage.",roof_base_hint:"Liegt sie unter der Deckenh\xF6he des Geschosses darunter, enden dessen W\xE4nde an der Dachunterseite: Kniestock an der Traufe, Giebel bis zum First, Innenw\xE4nde an der Schr\xE4ge. Im Grundriss zeigen gestrichelte Linien, wo 1,5 m und 2 m Kopfh\xF6he bleiben.",roof_ridge_height:"Firsth\xF6he",roof_side_top:"oben",roof_side_bottom:"unten",roof_side_left:"links",roof_side_right:"rechts",roof_swap:"Seiten tauschen",roof_open:"\xDCberdachung (Pfosten statt W\xE4nde, durchsichtig)",roof_open_short:"\xDCberdachung",roof_dormer:"Gaube",roof_dormer_hint:"Eine Gaube auf dieser Dachseite: 2 m breit, Front an der Traufwand, Traufe 1,4 m \xFCber der Dachtraufe, Satteldach. Danach verschieben, Breite und H\xF6hen \xE4ndern wie bei jeder Dachfl\xE4che; die Hauptfl\xE4che \xF6ffnet sich darunter, die Wand des Dachgeschosses steigt bis zur Gaube \u2013 dort passt ein Fenster.",roof_outline:"Umriss des Geschosses \xFCbernehmen",roof_outline_hint:"Ein Flachdach als freie Form: \xFCbernimmt den Umriss der R\xE4ume des angezeigten Geschosses (auch L- oder Z-f\xF6rmig) als eine Fl\xE4che ohne Kanten. Die Ecken lassen sich danach ziehen.",roof_points_hint:"Freie Form: Ziehe die Ecken im Plan. Zur\xFCck zum Rechteck l\xF6scht die Form.",roof_rect:"Zur\xFCck zum Rechteck",roof_open_hint:"F\xFCr Terrassendach oder Carport: Statt W\xE4nden tragen Pfosten und Balken das Dach, die Fl\xE4che ist durchsichtig. Wo die \xDCberdachung an die Hauswand st\xF6\xDFt, liegt sie auf der Wand auf.",roof_swap_hint:"Dreht das Dach um: Die beiden Seiten tauschen Traufe und Neigung, ein Pultdach steigt in die andere Richtung.",roof_pitch:"Dachneigung (\xB0)",roof_overhang:"Dach\xFCberstand (m)",roof_ridge:"First",roof_ridge_long:"Entlang der langen Seite",roof_ridge_short:"Entlang der kurzen Seite (z. B. Reihenhaus)",device:"Ger\xE4t",lamp_mount:"Lampe",lamp_ceiling:"Deckenleuchte",lamp_floor:"Stehlampe",lamp_table:"Tischlampe",lamp_wall:"Wandleuchte",marker_height:"H\xF6he des Symbols (m)",height_auto:"H\xF6he automatisch",device_centre:"In Raummitte",lights_spread:"Deckenlampen gleichm\xE4\xDFig verteilen",devices_search:"Ger\xE4te suchen \u2026",devices_more:"+{n} weitere",devices_less:"weniger",panel_more:"Weitere Ger\xE4te des Bereichs ({n})",panel_less:"Weniger anzeigen",gaps_close:"L\xFCcken schlie\xDFen",gaps_hint:"R\xE4ume mit bis zu 60 cm Abstand an einer gemeinsamen Wand zusammenf\xFChren; der Abstand wird die Innenwandst\xE4rke.",gaps_none:"Keine L\xFCcken zwischen R\xE4umen gefunden.",gaps_closed:"{n} Stellen geschlossen.",gaps_closed_wall:"{n} Stellen geschlossen, Innenwand jetzt {t} m.",fps:"FPS",fps_title:"Leistungsanzeige (Bilder pro Sekunde)",hint_garage:"Auf eine Wand tippen, um ein Garagentor einzusetzen",opening_garage:"Garagentor",garage_hint:"Das Tor folgt einem Garagen-Cover (Position oder offen/zu) oder einem Garagentor-Kontakt aus dem Bereich des Raums.",door_hint:"Mit T\xFCrkontakt schwenkt das T\xFCrblatt auf, ohne Sensor steht es halb offen.",hint_door:"Auf eine Wand tippen, um eine T\xFCr einzusetzen",hint_window:"Auf eine Wand tippen, um ein Fenster einzusetzen",opening_door:"T\xFCr",opening_window:"Fenster",opening_type:"Art",opening_position:"Mitte ab Ecke (m)",sill:"Br\xFCstung (m)",opening_height:"H\xF6he (m)",hinge:"Anschlag (vom Raum aus)",hinge_left:"Links",hinge_right:"Rechts",cover_entity:"Rollladen",door_cover:"Antrieb (T\xFCr oder Tor mit Motor)",cover_position_entity:"Positions-Sensor (live)",cover_position_invert:"Sensor z\xE4hlt umgekehrt (0 = offen)",contact_entity:"Kontakt",sensor_kind:"Sensor-Art",sensor_kind_contact:"Fensterkontakt (offen/zu)",sensor_kind_handle:"Griff-Sensor (offen/gekippt/zu)",sensor_kind_contact_tilt:"Kontakt + Kipp-Sensor",handle_entity:"Griff-Sensor",handle_main:"Griff-Sensor Hauptfl\xFCgel",leaf_main:"Hauptfl\xFCgel",leaf_second:"Zweiter Fl\xFCgel",tilt_entity:"Kipp-Sensor",tilt_angle_entity:"Kippwinkel-Sensor (\xB0, optional)",tilt_angle_max:"Winkel f\xFCr \u201Eganz gekippt\u201C (\xB0)",tilt_angle_offset:"Offset: Winkel bei geschlossenem Fenster (\xB0)",tilt_angle_invert:"Winkel z\xE4hlt andersherum",door_shut:"Ohne Sensor geschlossen zeigen",door_shut_hint:"Eine T\xFCr ohne Kontakt steht in 3D halb offen, damit man sie als T\xFCr erkennt. Mit Haken wird sie geschlossen gezeichnet \u2013 Haust\xFCr, Carport, Nebent\xFCr.",entity_auto:"Automatisch ({name})",entity_auto_none:"Automatisch (keiner gefunden)",entity_none:"Keiner",entity_search:"Tippen zum Suchen \u2026",opening_hint:"Sensor-Art: Fensterkontakt (meldet offen/zu), Griff-Sensor (meldet offen, gekippt und zu \u2013 z. B. Homematic-Fenstergriff) oder Kontakt + Kipp-Sensor (ein zweiter Sensor, der nur \u201Egekippt\u201C meldet). Automatisch nimmt Rolll\xE4den und Kontakte aus dem Bereich des Raums. Positions-Sensor: eine Entit\xE4t, die die Rollladen-Position auch w\xE4hrend der Fahrt meldet (z. B. Homematic \u201ELevel\u201C, 0\u2013100 % oder 0\u20131, offen = hoch) \u2013 dann f\xE4hrt der Rollladen in 3D live.",furniture:"M\xF6bel",furniture_add:"M\xF6bel hinzuf\xFCgen",furniture_search:"M\xF6bel suchen \u2026",furniture_search_none:"Nichts gefunden. Versuch ein anderes Wort \u2013 deutsch oder englisch.",furniture_type:"M\xF6belst\xFCck",rotation:"Drehung (\xB0)",strip_tilt:"Neigung um die L\xE4nge (\xB0)",strip_upright:"Senkrecht",strip_upright_hint:"Der Streifen steht hochkant: Seine L\xE4nge l\xE4uft von der H\xF6he \xFCber Boden nach oben \u2013 am T\xFCrrahmen, als Lichts\xE4ule. Die Neigung legt einen liegenden Streifen an die Schr\xE4ge (90\xB0 = Fl\xE4che zeigt zur Seite).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"H\xF6he (m)",furn_sofa:"Sofa",furn_armchair:"Sessel",furn_table:"Tisch",furn_chair:"Stuhl",furn_bed:"Bett",furn_nightstand:"Nachttisch",furn_wardrobe:"Schrank",furn_shelf:"Regal",furn_kitchen:"K\xFCchenzeile",furn_worktop:"Arbeitsplatte",furn_fridge:"K\xFChlschrank",furn_fridge_smart:"Smart-K\xFChlschrank (Side-by-Side)",furn_door_left:"T\xFCrsensor links (Gefrierseite)",furn_door_right:"T\xFCrsensor rechts (K\xFChlseite)",fridge_hint:"Meldet ein T\xFCrsensor \u201Eoffen\u201C, schwingt die T\xFCr in 3D auf.",furn_stove:"Herd",furn_sink:"Sp\xFCle",furn_bathtub:"Badewanne",furn_shower:"Dusche",furn_wc:"WC",furn_washbasin:"Waschtisch",furn_desk:"Schreibtisch",furn_tv_board:"TV-Board",furn_plant:"Pflanze",furn_rug:"Teppich",furn_stairs:"Treppe",furn_stairwell:"Boden\xF6ffnung",stairwell_hint:"Ein Loch im Boden dieser Etage, zum Beispiel \xFCber dem Treppenaufgang oder f\xFCr eine Galerie; von oben sieht man hindurch. Die \xD6ffnung muss ganz in einem Raum liegen; mehrere \xD6ffnungen d\xFCrfen sich \xFCberlappen (zum Beispiel f\xFCr eine L-Form). Eine Treppe auf der Etage darunter, die bis hier hinauf reicht, \xF6ffnet den Boden auch von selbst.",tool_hole:"Boden\xF6ffnung",tool_roof:"Dach",tool_energy:"Energie",tool_wall:"Wand",hint_wall:"Ziehen, um eine einzelne Wand zu zeichnen (Raumteiler, halbe Wand) \xB7 Umschalt h\xE4lt sie gerade \xB7 Alt ohne Fangen",free_wall:"Wand",wall_length:"L\xE4nge (m)",wall_thickness:"Wandst\xE4rke (m)",wall_height:"H\xF6he (m)",wall_height_full:"Volle Raumh\xF6he",wall_none:"Keine Wand",wall_none_hint:"Diese Wand ganz weglassen: f\xFCr offene Grundrisse, bei denen R\xE4ume baulich ein Raum sind, in Home Assistant aber getrennt.",edge_thickness:"Dicke (m)",wall_thickness_hint:"Dicke dieser Wand, z. B. 0,365 an einer dicken Au\xDFenwand oder 0,115 an einer leichten Trennwand. Eine Wand zwischen zwei R\xE4umen nimmt die dickere Angabe.",wall_thickness_reset:"Dicke wie im Haus eingestellt",wall_heights:"Wandh\xF6hen",wall_n:"Wand {a}\u2013{b}",wall_part:"Teil {n}",wall_split_hint:"Wand hier teilen: Das Teilst\xFCck bekommt eine eigene H\xF6he, z. B. 2,5 m neben 1,7 m in einer Flucht",wall_split_at:"Teilpunkt ab Ecke (m)",wall_join_hint:"Teilpunkt entfernen: Das Teilst\xFCck w\xE4chst wieder mit dem davor zusammen",wall_exterior_short:"Au\xDFenwand",room_wall_hint:"Eine niedrigere H\xF6he macht aus der Wand eine Br\xFCstung oder Theke. Teilen sich zwei R\xE4ume die Wand, gilt die niedrigere Einstellung. Fenster und T\xFCren darin enden an der Wandh\xF6he.",free_wall_hint:"Eine frei stehende Wand, zum Beispiel ein Raumteiler. Trifft sie auf eine Raumwand, wird die Ecke verschnitten. Die Endpunkte ziehst du an den Griffen, die ganze Wand verschiebst du an der Linie.",stairwell_outside:"Diese \xD6ffnung ragt \xFCber eine Raumgrenze und wird deshalb nicht ausgeschnitten. Ziehe sie ganz in einen Raum oder verkleinere sie.",hint_hole:"Ziehen, um eine Boden\xF6ffnung aufzuziehen (Treppenaufgang, Galerie)",hint_roof:"Dachfl\xE4che aufziehen \xB7 antippen w\xE4hlt aus \xB7 ziehen verschiebt \xB7 Ecken \xE4ndern die Gr\xF6\xDFe",hint_energy:"Solarfeld antippen w\xE4hlt aus \xB7 ziehen verschiebt, auch auf eine andere Dachfl\xE4che \xB7 neue Felder rechts mit + Solarfeld",furn_parking:"Stellplatz",furn_group_vehicles:"Stellpl\xE4tze",parking_entity:"Sensor \u201EAuto anwesend\u201C",parking_vehicle:"Fahrzeug",parking_vehicle_none:"Keins",parking_no_pack:"Kein Fahrzeug-Pack importiert \u2013 Fahrzeuge kommen aus dem Pack \u201EFahrzeuge\u201C (M\xF6bel \u2192 M\xF6bel-Pack importieren).",parking_scale:"Gr\xF6\xDFe (%)",parking_type_entity:"Fahrzeugtyp-Sensor (optional)",parking_types:"Zustand \u2192 Fahrzeug",parking_type_state:"Zustand (z. B. van)",parking_add_type:"+ Zuordnung",parking_hint:"Ohne Sensor steht das Fahrzeug immer da. Mit Sensor erscheint es, sobald der Sensor \u201Ean\u201C, \u201Ehome\u201C oder \u201Eanwesend\u201C meldet. Ein Fahrzeugtyp-Sensor (z. B. aus einer KI-Kameraauswertung) w\xE4hlt das Modell: Passt sein Zustand zu einer Zuordnung \u2013 auch als Wort im Text \u2013, wird dieses Fahrzeug gezeigt, sonst das Standard-Fahrzeug.",parking_too_tall:"Das Fahrzeug ({car} m) ist h\xF6her als der Raum ({room} m).",furn_lamp_ceiling:"Deckenleuchte",furn_lamp_downlight:"Einbauspot",furn_lamp_spot:"Aufbau-Spot",furn_lamp_panel:"LED-Panel",furn_lamp_uplight:"Deckenfluter",furn_lamp_bollard:"Wegleuchte",furn_lamp_garden:"Garten-Spot",furn_radiator:"Heizk\xF6rper",furn_robot_vacuum:"Saugroboter",furn_entity_vacuum:"Saugroboter",furn_robot_room:"Aktueller Raum (Sensor)",robot_hint:"Saugt der Roboter in Home Assistant, f\xE4hrt er in 3D in Bahnen durch den Raum, den er meldet (Sensor \u201EAktueller Raum\u201C, zugeordnet \xFCber den Raum- oder Bereichsnamen), sonst durch den Raum seiner Station. Die Fahrspur ist simuliert \u2013 Home Assistant kennt meist nicht die genaue Position. Zur\xFCck f\xE4hrt er zur Station.",furn_lamp_pendant:"Pendelleuchte",furn_lamp_floor:"Stehlampe",furn_lamp_table:"Tischlampe",furn_lamp_wall:"Wandleuchte",furn_led_strip:"LED-Streifen",furn_group_lights:"Leuchten",furn_entity_light:"Licht oder Schalter",furn_color_entity:"Farbe und Helligkeit von (optional)",furn_color_entity_hint:"F\xFCr Lampen, die ein Relais (Shelly, Schaltaktor) ein- und ausschaltet, w\xE4hrend die Leuchte selbst Farbe und Helligkeit kennt: An/Aus kommt vom Schalter oben, Farbe und Helligkeit von dieser Entit\xE4t.",furn_entity_climate:"Heizung (Thermostat)",lamp_hint:"Antippen in 3D schaltet die Leuchte, lange dr\xFCcken \xF6ffnet das Schnellmen\xFC. Auch Schalter (z. B. ein Relais f\xFCrs Deckenlicht) sind m\xF6glich \u2013 die Leuchte strahlt dann, solange er an ist. Tischlampen stehen automatisch auf dem M\xF6bel darunter.",lamp_hint_pendant:"H\xF6he = Abh\xE4ngung unter der Decke. Antippen in 3D schaltet, lange dr\xFCcken \xF6ffnet die Details.",theme:"Look",version_hint:"Installierte Version von NextFloor \u2013 Oberfl\xE4che; die Integration in Home Assistant meldet {backend}",accent:"Akzentfarbe",accent_hint:"Eigene Akzentfarbe: Linien und Leuchtkanten im Neon-Look, Kn\xF6pfe und Pins \u2013 \u21BA setzt das Neon-Cyan zur\xFCck",accent_reset:"Zur\xFCck zu Cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Tag",furnish:"Einrichten",split_3d:"3D daneben",mount_height:"H\xF6he \xFCber Boden (m)",side_open:"Seitenleiste \xF6ffnen",side_close:"Schlie\xDFen",side_details:"Details zur Auswahl",side_pin:"Anheften",side_pinned:"Angeheftet",side_pin_hint:"Angeheftet bleibt die Seitenleiste immer offen; sonst klappt sie neben der 3D-Ansicht zu, solange nichts ausgew\xE4hlt ist",split_3d_hint:"Live-3D neben dem Plan: M\xF6bel und Ger\xE4te dort ziehen und drehen \u2013 mit R\xFCckg\xE4ngig, gespeichert wird mit dem Plan",size_w:"Breite (m)",size_d:"Tiefe (m)",size_h:"H\xF6he (m)",furnish_hint:"M\xF6bel, Leuchten und Ger\xE4te mit dem Finger ziehen \xB7 M\xF6bel rasten an W\xE4nden ein \xB7 antippen zum Drehen, f\xFCr H\xF6he und Montage",done:"Fertig",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Feuchte",heat_short_co2:"CO\u2082",heat_short_values:"Werte",heat_temperature:"Temperatur",heat_humidity:"Luftfeuchtigkeit",heat_co2:"CO\u2082",heat_values:"Werte am Raumnamen",heat_none_found:"Keine passenden Sensoren in den Bereichen der R\xE4ume.",markers:"Symbole",markers_none:"Keine",markers_important:"Wichtige",markers_all:"Alle",furn_stool:"Hocker",furn_coffee_table:"Couchtisch",furn_tv_wall:"Fernseher (Wand)",furn_sideboard:"Sideboard",furn_table_round:"Runder Tisch",furn_bench:"Sitzbank",furn_corner_bench:"Eckbank",furn_bar_stool:"Barhocker",furn_kitchen_wall:"Oberschrank",furn_kitchen_tall:"Hochschrank mit Backofen",furn_island:"Kochinsel",furn_dishwasher:"Sp\xFClmaschine",furn_bunk_bed:"Etagenbett",furn_dresser:"Kommode",furn_washer:"Waschmaschine",furn_dryer:"Trockner",furn_office_chair:"B\xFCrostuhl",furn_tall_cabinet:"Hochschrank",furn_coat_rack:"Garderobe",furn_group_living:"Wohnen",furn_group_dining:"Essen",furn_group_kitchen:"K\xFCche",furn_group_sleeping:"Schlafen",furn_group_bath:"Bad & Hauswirtschaft",furn_group_work:"Arbeiten & Sonstiges",furn_group_energy:"Energie & Solar",energy_devices:"Ger\xE4te",wallbox_charging:"l\xE4dt",wallbox_plugged:"angesteckt",furn_soc:"Ladestand (%)",furn_export:"Einspeiseleistung (W, separater Sensor, optional)",furn_export_hint:"Meldet dein Z\xE4hler Bezug und Einspeisung in zwei Sensoren (z. B. Growatt, Tibber Pulse), nimm oben den Bezugs-Sensor als Leistung und hier den Einspeise-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_charge:"Ladeleistung (W, separater Sensor, optional)",furn_charge_hint:"Meldet dein Speicher Laden und Entladen in zwei Sensoren (z. B. Anker Solix), nimm oben den Entlade-Sensor als Leistung und hier den Lade-Sensor. Ein Sensor mit Vorzeichen braucht das nicht.",furn_wallbox_status:"Status (l\xE4dt, angesteckt)",energy_only_note:"\u26A1 Energie: Hier lassen sich nur Solarfelder und Energieger\xE4te verschieben, R\xE4ume und M\xF6bel sind gesperrt.",roof_only_note:"\u{1F3E0} Dach: Hier lassen sich nur Dachfl\xE4chen und Dachfenster verschieben, R\xE4ume und M\xF6bel sind gesperrt.",energy_devices_hint:"Stromz\xE4hler, Wechselrichter, Stromspeicher, Wallbox und Netzanschluss werden hier angelegt: auf der oben gew\xE4hlten Etage, im Grundriss verschiebbar. Mit Leistungssensor zeigen sie ihre Watt; der Z\xE4hler bekommt den Netzsensor, beim Strang w\xE4hlst du den Wechselrichter. Mehrere Wechselrichter und Speicher (etwa eine Balkonanlage dazu) gehen auch: Jeder bekommt seinen eigenen Sensor.",solar_fields:"Solarfelder",solar_hint:"Module aufs Dach legen: Sie liegen in der Neigung der Dachfl\xE4che, auf einem Flachdach stehen sie aufgest\xE4ndert. Im Grundriss l\xE4sst sich ein Feld mit der Maus verschieben.",solar_no_roof:"F\xFCr Solarfelder braucht das Haus ein Dach: unter Einstellungen ein Sattel- oder Flachdach, oder Dachabschnitte hier im Dach-Werkzeug.",solar_face_gone:"Dachfl\xE4che fehlt",solar_summary:"{n} Module \xB7 {kwp} kWp",solar_add:"Solarfeld",solar_field:"Solarfeld",solar_face:"Dachfl\xE4che",solar_rows:"Reihen",solar_cols:"Module pro Reihe",solar_portrait:"Hochformat",solar_landscape:"Querformat",solar_u:"Abstand vom Rand (m)",solar_v:"Abstand von der Traufe (m)",solar_tilt:"Neigung der Aufst\xE4nderung (\xB0)",solar_flip:"In die andere Richtung neigen",solar_partial:"nur {n} von {total} passen auf die Fl\xE4che",solar_form_hint:"Module, die \xFCber die Dachfl\xE4che hinausragen w\xFCrden, fallen weg. \u201EFl\xE4che f\xFCllen\u201C legt so viele Module aufs Dach, wie passen. kWp gerechnet mit 400 W je Modul.",solar_fit:"Fl\xE4che f\xFCllen",roof_windows:"Dachfenster",roof_window:"Dachfenster",roof_windows_hint:"Dachfenster liegen in der Dachfl\xE4che, mit Rollladen und Kontakt wie normale Fenster. Im Grundriss lassen sie sich verschieben, auch auf eine andere Dachfl\xE4che.",roof_window_tilt:"Kippkontakt",roof_window_name:"Name (optional)",roof_window_motor:"Fenstermotor (Cover, optional)",roof_window_motor_hint:"Ein Fenstermotor (Velux, Roto, Fakro) meldet seine Position als Cover: Der Fl\xFCgel \xF6ffnet in 3D so weit, wie der Motor steht. Ein Kontakt oder Kippkontakt geht weiterhin ohne Motor.",roof_window_hint:"Offen klappt der Fl\xFCgel oben angeschlagen nach au\xDFen, gekippt ein St\xFCck, und der Rahmen leuchtet warm; der Rollladen f\xE4hrt von oben \xFCber die Scheibe. In einer Dachfl\xE4che schneidet das Fenster ein Loch in die Schr\xE4ge, so sieht das Dachgeschoss hinaus.",solar_ground:"Frei aufgest\xE4ndert (Garten, Garagendach \u2026)",solar_add_ground:"Frei aufgest\xE4ndert",solar_base:"H\xF6he der Aufstellfl\xE4che (m, 0 = Boden)",solar_add_wall:"An der Wand",solar_wall:"Wand",solar_v_wall:"H\xF6he \xFCber dem Boden (m)",solar_tilt_wall:"Neigung von der Wand (\xB0, 90 = Vordach)",solar_flip_wall:"Unten abstehend statt oben",solar_rotation:"Drehung (\xB0)",solar_name:"Name",solar_name_hint:"z. B. Strang 1 S\xFCd",solar_module_w:"Modulbreite (m)",solar_module_h:"Modulh\xF6he (m)",solar_wp:"Modulleistung (Wp)",solar_string:"Strang",solar_strings:"Str\xE4nge",solar_string_none:"Kein Strang",solar_string_new:"Neuer Strang",solar_string_n:"Strang {n}",solar_string_name:"Name des Strangs",solar_string_entity:"PV-Leistung des Strangs",solar_string_inverter:"Wechselrichter",solar_string_inverter_none:"Kein Wechselrichter gew\xE4hlt",inverter_strings:"Str\xE4nge an diesem Wechselrichter: {names}",inverter_strings_none:"Noch kein Strang an diesem Wechselrichter \u2013 zuordnen beim Solarfeld unter Strang \u203A Wechselrichter.",solar_string_inverter_missing:"Noch kein Wechselrichter im Plan (unten bei Ger\xE4te anlegen)",solar_string_hint:"Felder im selben Strang geh\xF6ren zusammen, auch auf verschiedenen D\xE4chern (z. B. 5 Module auf dem Haus und 5 auf der Garage). Sensor und Wechselrichter gelten f\xFCr den ganzen Strang.",solar_string_sum:"{fields} Felder \xB7 {n} Module \xB7 {kwp} kWp",solar_face_size:"Dachfl\xE4che {w} \xD7 {h} m (entlang der Traufe \xD7 die Schr\xE4ge hoch)",solar_cols_hint:"Eine Zahl f\xFCr gleich lange Reihen, oder eine Liste f\xFCr Reihen eigener L\xE4nge: \u201E4, 4, 3\u201C (von der Traufe aus).",solar_align_left:"Links",solar_align_center:"Mitte",solar_align_right:"Rechts",solar_look_black:"Full Black",solar_look_blue:"Blau",solar_pick:"Module einzeln an/aus",solar_pick_all:"Alle wieder an",solar_pick_hint:"Tippe im Grundriss auf ein Modul, um es wegzunehmen oder wieder dazuzunehmen. Weggenommene sind gestrichelt.",solar_entity:"PV-Leistung dieses Feldes (z. B. sein Strang)",solar_main:"Hauptdach",solar_section:"Abschnitt {n}",solar_flat:"Flachdach",compass_n:"Nord",compass_ne:"Nordost",compass_e:"Ost",compass_se:"S\xFCdost",compass_s:"S\xFCd",compass_sw:"S\xFCdwest",compass_w:"West",compass_nw:"Nordwest",furn_meter:"Stromz\xE4hler",furn_grid_point:"Netzanschluss",grid_point_hint:"Hier steht der Netzanschluss: der \xDCbergabepunkt zum Stromanbieter, zum Beispiel am Ende der Einfahrt. Im Grundriss verschiebbar.",furn_model:"Modell",inverter_std:"Standard (Wandger\xE4t mit Display)",inverter_slim:"Schmal und hoch (Lichtleiste)",inverter_hybrid:"Hybrid (Rund-Display, L\xFCfter)",battery_std:"Turm (gestapelte Module)",battery_wall:"Wandspeicher (flach, h\xE4ngend)",battery_cube:"Kompakt (Balkonspeicher)",furn_inverter:"Wechselrichter",furn_home_battery:"Stromspeicher",furn_wallbox:"Wallbox",furn_entity:"Ger\xE4t (Schalter, Steckdose \u2026)",furn_state_entity:"Zustand von (optional)",furn_state_entity2:"Zweiter Zustand (andere H\xE4lfte)",furn_state_split:"H\xE4lften",furn_state_left_right:"Links / rechts",furn_state_top_bottom:"Unten / oben (Hochbett)",furn_state_hint:"Das M\xF6bel leuchtet, solange die Entit\xE4t an, belegt oder zu Hause meldet \u2013 ein Bett mit Belegungsmatte, ein Sessel, die Sauna. Zwei Entit\xE4ten beleuchten die H\xE4lften: links und rechts, beim Hochbett unten und oben.",furn_entity_tv:"Fernseher (Media-Player oder Steckdose)",fix:"Fixieren",unfix:"L\xF6sen",fix_hint:"Fixiert: l\xE4sst sich nicht mehr versehentlich verschieben (Taste L, Rechtsklick oder langes Dr\xFCcken)",fixed_drag_hint:"\u{1F512} Fixiert \u2013 zum Verschieben erst l\xF6sen (Schloss im Formular, Rechtsklick oder Taste L)",fixed_delete_confirm:"Dieses Element ist fixiert. Trotzdem l\xF6schen?",lock_plan:"\u{1F512} Grundriss",lock_plan_hint:"Grundriss sperren: R\xE4ume, W\xE4nde, T\xFCren, Fenster und Au\xDFenfl\xE4chen lassen sich nicht mehr versehentlich verschieben. M\xF6bel und Ger\xE4te bleiben frei.",start_view:"Startansicht",start_view_hint:"Mit dieser Ansicht \xF6ffnen 3D-Ansicht, Karte und Kiosk das Haus, zum Beispiel von der Gartenseite. Drehe, zoome und verschiebe das Haus in der 3D-Ansicht rechts, bis es passt, und merke sie dir dann.",start_view_card:"Soll eine Karte eine andere Ansicht haben: diese Zeile in ihre YAML-Konfiguration \xFCbernehmen.",start_view_set:"Aktuelle 3D-Ansicht als Start merken",start_view_reset:"Standard",start_view_saved:"Eine eigene Startansicht ist gespeichert.",ctx_rotate:"Drehen 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} weitere \u2013 Suche eingrenzen",climate:"Raumklima",climate_temperature:"Temperatur",climate_humidity:"Luftfeuchte",climate_co2:"CO\u2082",climate_hint:"Diese Sensoren gelten f\xFCr die Heatmap und das Raumfenster. \u201EAutomatisch\u201C nimmt die Sensoren des Bereichs und die im Raum platzierten, aber keine Ger\xE4tetemperaturen (3D-Drucker, W\xE4rmepumpe, Vorlauf \u2026).",plan_locked:"Grundriss gesperrt",plan_lock:"Grundriss sperren",plan_unlock:"Grundriss entsperren",opening_mark:"Markieren in 3D",opening_mark_open:"Wenn offen",opening_mark_closed:"Wenn geschlossen (z. B. WC)",opening_mark_hint:"Ein markiertes Fenster oder eine markierte T\xFCr leuchtet warm. \u201EWenn geschlossen\u201C braucht einen Kontakt; ohne Sensor wird nichts markiert.",marker_show:"Symbol in 3D",marker_show_hint:"Automatisch folgt dem Schalter Keine / Wichtige / Alle in der 3D-Ansicht. Immer zeigen und Ausblenden gelten unabh\xE4ngig davon (au\xDFer bei Keine).",marker_show_auto:"Automatisch",marker_show_always:"Immer zeigen",marker_show_no_power:"Ohne Watt",marker_show_never:"Ausblenden",marker_icon:"Eigenes Symbol (Material-Design-Icon)",device_name:"Eigener Name (optional)",show_name:"Name unter dem Symbol in 3D zeigen",card_marker_names:"Eigene Namen an den Symbolen",card_marker_names_hint:"Jedes Ger\xE4t mit eigenem Namen zeigt ihn klein unter seinem Symbol \u2013 drei Thermometer im Garten bleiben unterscheidbar.",device_name_hint:"Ein Name nur f\xFCr den Plan, z. B. \u201EDekolicht Kochinsel\u201C \u2013 die Entit\xE4t in Home Assistant bleibt, wie sie ist.",floor_turn:"90\xB0 drehen",floor_shift_all:"Alle Etagen mitnehmen (ganzes Haus)",floor_shift_all_hint:"Verschieben und Drehen wirken auf alle Etagen samt Dachfl\xE4chen, Au\xDFenfl\xE4chen, Energieger\xE4ten und Z\xE4hler \u2013 das ganze Haus wandert als Ganzes.",floor_turn_hint:"Dreht alles auf der Etage um 90\xB0 im Uhrzeigersinn um die Mitte der R\xE4ume \u2013 wenn eine Etage verdreht gezeichnet wurde. Dreimal = 270\xB0.",marker_icon_hint:"Name eines Material-Design-Icons wie bei Home Assistant, z. B. mdi:thermometer oder mdi:water-alert. Leer = Symbol nach Ger\xE4teart.",furn_power:"Leistungssensor (W)",furn_links_hint:"Mit Leistungssensor zeigt das M\xF6bel seine Watt und nimmt am Energiefluss teil.",furn_links_hint_tv:"Der Bildschirm leuchtet, solange der Fernseher an ist, in der Farbe der App (Netflix, YouTube \u2026); das Schild zeigt App oder Titel.",stairs_hint:"Die Treppe steigt nach hinten an (weg von der markierten Vorderkante) und \xF6ffnet die Decke der Etage dar\xFCber.",floor_lights:"{n} Licht an",floor_open:"{n} offen",floor_persons:"{n} Pers.",energy_consumption:"Verbrauch",energy_grid_import:"Netzbezug",energy_grid_export:"Einspeisung",energy_solar:"Solar",energy_battery:"Akku",energy_tariff:"Tarif",energy:"Energie",energy_meter:"Z\xE4hlerplatz",energy_grid:"Netz (W, + = Bezug)",energy_solar_sensor:"Solar-Erzeugung (W)",energy_battery_sensor:"Akku-Leistung (W, + = Entladen)",energy_battery_soc:"Akku-Ladestand (%)",energy_tariff_sensor:"Tarif (z. B. \u20AC/kWh)",energy_invert:"Vorzeichen umkehren",energy_hint:"Verbraucher sind platzierte Ger\xE4te mit Leistungssensor (W) \u2013 der Sensor selbst oder einer vom selben Ger\xE4t.",energy_balance:"Energiebilanz",energy_balance_hint:"Netz, Solar und Akku kommen von den Ger\xE4ten im Plan: Stromz\xE4hler, Wechselrichter und Stromspeicher. Hier kannst du andere Sensoren w\xE4hlen, Vorzeichen umkehren und den Hausverbrauch angeben.",energy_consumption_sensor:"Hausverbrauch (W, sonst aus der Bilanz)",energy_import_prefs:"Aus dem Energie-Dashboard \xFCbernehmen",energy_import_done:"{n} Sensoren \xFCbernommen \u2013 bitte die Vorzeichen pr\xFCfen.",energy_import_none:"Im Energie-Dashboard sind keine passenden Leistungssensoren (W) zu finden \u2013 bitte von Hand w\xE4hlen.",energy_import_failed:"Das Energie-Dashboard von Home Assistant ist nicht eingerichtet.",tool_meter:"Z\xE4hler",hint_meter:"Auf die Stelle des Z\xE4hlers tippen",presence:"Anwesenheit",presence_hint:"Raumsensor je Person (z. B. ESPresense, Bermuda): sein Zustand nennt den Raum oder Bereich.",presence_sensor:"Raumsensor",no_persons:"In Home Assistant gibt es keine Personen."},Oo={view:"3D",editor:"Editor",all_floors:"All floors",no_building:"No floor plan yet.",no_building_admin:"No floor plan yet. Draw your first floor in the editor.",open_editor:"Open editor",loading:"Loading \u2026",load_error:"Loading failed",saving:"Saving \u2026",saved:"Saved",save_error:"Saving failed",save_failed_detail:"Saving failed: {error}. Your changes are kept in this browser.",needs_restart:"A new version of NextFloor ({frontend}) is installed, but Home Assistant still runs {version}. Please restart Home Assistant \u2013 until then saving may fail.",needs_reload:"This page still shows NextFloor {frontend}, Home Assistant already has {backend}. Please reload the page; in the companion app: Settings \u2192 Companion app \u2192 Reset frontend cache.",reload_page:"Reload",needs_restart_old:"A new version of NextFloor is installed, but Home Assistant still runs an older one. Please restart Home Assistant \u2013 until then saving fails.",draft_found:"Unsaved changes from {time} found.",draft_restore:"Restore and save",draft_discard:"Discard",walls_auto:"Tall walls",walls_cut:"Cut",reset_view:"Overview",back:"Back",floor:"Floor",floors:"Floors",add_floor:"Add floor",floor_from_ha:"Floors from Home Assistant:",floor_empty:"Empty floor",level:"Level {n}",ha_floor:"Floor in Home Assistant",no_ha_floor:"\u2013 none \u2013",area_rooms:"Add rooms from HA areas ({n})",area_rooms_hint:"Adds a room (4 \xD7 3 m) for each area of this floor \u2013 then drag it into place and adjust the corners",floor_name:"Name",elevation:"Elevation (m)",floor_shift:"Shift the floor (m)",floor_shift_apply:"Shift",floor_shift_hint:"Moves every room, furniture item, device, outdoor area, free wall and the background image of this floor by X and Z. Roof sections stay.",height:"Ceiling height (m)",cut_height:"Cut height (m)",delete_floor:"Delete floor",delete_floor_confirm:"Delete floor \u201C{name}\u201D with all its rooms?",move_up:"Move up",move_down:"Move down",default_floor:"Ground floor",new_floor:"Floor {n}",tool_select:"Select",tool_rect:"Rectangle",tool_polygon:"Free shape",undo:"Undo",redo:"Redo",fit:"Show all",room:"Room",rooms:"Rooms",room_name:"Name",area:"Area",no_area:"No area",material:"Floor",x:"X (m)",z:"Y (m)",width:"Width (m)",depth:"Depth (m)",points:"Corners",delete_point:"Delete corner",duplicate:"Duplicate",delete:"Delete",new_room:"Room {n}",settings:"Settings",pendant_shape:"Shape",pendant_shade:"Shade",paint_colour:"Paint colour",pendant_globe:"Globe",pendant_cone:"Cone",pendant_drum:"Drum",pkg_open:"Furnish \u2026",pkg_hint:"Furniture goes against the room's walls; lamps link to the area's lights. Adjust single items afterwards \u2013 Ctrl+Z takes it all back.",pkg_done:"{n} items placed \u2013 Ctrl+Z takes it back.",pkg_kitchen_row:"Kitchen row",pkg_kitchen_row_desc:"Row on the back wall with fridge, oven, sink, dishwasher and stove, wall cabinet, dining table with pendant",pkg_kitchen_l:"L-shaped kitchen",pkg_kitchen_l_desc:"Rows at the back and left, kitchen island with bar stools",pkg_bath:"Bathroom",pkg_bath_desc:"Washbasin, WC, bathtub, washing machine, downlight",pkg_bedroom:"Bedroom",pkg_bedroom_desc:"Double bed with two nightstands, wardrobe, chest of drawers, ceiling light",pkg_living:"Living room",pkg_living_desc:"TV board, sofa, coffee table, rug, armchair, shelf, floor lamp, plant",pkg_dining:"Dining room",pkg_dining_desc:"Table with four chairs, sideboard, pendant",pkg_office:"Office",pkg_office_desc:"Desk with office chair, two shelves, ceiling light",pkg_kids:"Kids' room",pkg_kids_desc:"Single bed, desk, shelf, rug",pkg_hall:"Hall",pkg_hall_desc:"Coat rack, two downlights",spots_place:"Place spots",spots_type:"Lamp",spots_cols:"Columns (left\u2013right)",spots_rows:"Rows (front\u2013back)",spots_add:"Place {n} lamps",spots_placed:"{n} lamps placed.",spots_hint:"All lamps follow the chosen light (e.g. spots on one dimmer). Afterwards each can be moved and linked to another light like any furniture.",cancel:"Cancel",backup:"Backup",backup_history:"Restore points",backup_none:"None yet. While editing, a restore point is kept at most every 10 minutes.",backup_summary:"{rooms} rooms, {furniture} items",backup_restore:"Restore",backup_restore_confirm:"Restore the state of {time}? The current state is kept as a restore point.",backup_restored:"Restored.",backup_file:"File",backup_export:"Export",backup_export_share:"Share as template",backup_export_share_hint:"Without areas, devices, sensors and images \u2013 for passing on to others.",backup_import:"Import \u2026",backup_import_confirm:"Replace the whole plan with the file? The current state is kept as a restore point.",backup_import_error:"The file is no NextFloor plan ({error}).",backup_imported:"Imported.",backup_hint:"Background images are not part of the file.",backup_full:"Full backup",backup_full_export:"Back up everything (plan, pictures, packs)",backup_full_import:"Restore a full backup \u2026",backup_full_hint:"One file with the plan, every background and screen picture and the installed packs. On restore every pack is checked again; the licence key is not included.",backup_full_confirm:"Replace the plan, the pictures and the packs with the backup? The current state stays as a restore point.",backup_full_not_backup:"This is not a full NextFloor backup.",backup_full_restored:"Backup restored: {packs} packs, {pictures} pictures.",backup_full_skipped:"Skipped (could not be read): {packs}.",export_name_full:"full",device_confirm:"Ask before switching",device_confirm_hint:"A tap in 3D, the quick menu and the room panel ask first. A double tap on the room leaves this device out.",cover_confirm_hint:"Open, close and positions ask first in the quick menu and the room panel, and a swipe on the marker no longer moves the blind (it turns the view instead). Stop never asks.",confirm_switch:"Really switch {name}?",split_handle_hint:"Drag: width of the plan and the 3D view",wall_exterior:"Exterior wall (m)",wall_interior:"Interior wall (m)",grid:"Grid (m)",background:"Template (floor plan image)",background_upload:"Choose image \u2026",background_width:"Width in plan (m)",background_opacity:"Opacity",background_rotation:"Rotation (\xB0)",background_edit:"Move, scale and turn",background_edit_done:"Done",background_edit_hint:"While the mode is on: dragging the picture moves it, the handle at the bottom right scales it. Fit the picture to the scale first, then turn it.",background_remove:"Remove template",hint_select:"Tap a room to select \xB7 drag corners \xB7 \u201C+\u201D on an edge inserts a corner \xB7 arrow keys nudge \xB7 Del deletes \xB7 Ctrl+Z",hint_rect:"Drag to draw a rectangle",hint_polygon:"Place corners \xB7 tap the first corner or press Enter to close \xB7 Esc cancels",hint_empty:"Add a floor first.",area_m2:"{a} m\xB2",overlap_warning:"Rooms overlap \u2013 walls there are incomplete.",read_only:"Only administrators can edit the floor plan.",mat_wood:"Wood",mat_oak:"Oak",mat_tiles:"Tiles",mat_carpet:"Carpet",mat_stone:"Stone",mat_concrete:"Concrete",card_name:"NextFloor",card_description:"Your home in 3D (neon).",stats:"{calls} draw calls \xB7 {tris} triangles",stats_fps:"{fps} fps (slowest frame {ms} ms)",stats_idle:"At rest (0 fps)",stats_busy_camera:"camera",stats_busy_floors:"floors",stats_busy_openings:"doors/windows",stats_busy_flash:"flash",stats_busy_roof:"roof",stats_busy_flow:"power flow",stats_busy_effect:"colour effect",stats_busy_robot:"robot",stats_busy_orbit:"camera turn",stats_busy_tint:"room tint",stats_low:"tablet level, pixel ratio {r}",stats_full:"full level, pixel ratio {r}",floors_apart:"Apart",floors_stacked:"Stacked",roof_keep:"Roof stays",roof_keep_hint:"The roof stays on the house while zooming in instead of lifting and fading out",floor_rooms_one:"1 room",floor_rooms:"{n} rooms",quality:"Quality",quality_auto:"Auto",quality_low:"Tablet",quality_high:"High",state_on:"On",state_off:"Off",state_open:"Open",state_closed:"Closed",state_opening:"Opening",state_closing:"Closing",state_playing:"Playing",state_paused:"Paused",state_idle:"Idle",state_locked:"Locked",state_unlocked:"Unlocked",state_detected:"Detected",state_clear:"Clear",state_unavailable:"Unavailable",state_heat:"Heat",state_cool:"Cool",state_auto:"Auto",state_heat_cool:"Heat/cool",state_dry:"Dry",state_fan_only:"Fan",devices:"Devices",devices_none_area:"Link the room to an area and its devices appear here.",devices_none:"The area has no suitable devices.",devices_place_all_n:"Place all {n} \u2026",devices_place_all_confirm:"Put {n} devices into the room at once? (Ctrl+Z or \u201CUndo\u201D takes them all back in one step.)",devices_src_area:"This area",devices_src_other:"Other areas",devices_src_none:"No area",panel_hide:"Hide from the room panel",panel_unhide:"Show in the room panel again",panel_state_hide:'Hide the state in the room panel (e.g. a cover that only reports "unknown")',panel_state_show:"Show the state in the room panel again",devices_place:"Place",devices_remove:"Remove",devices_hint:"Placed devices appear in 3D. Drag them in the plan to move them.",panel_lights:"Lights",panel_covers:"Covers",panel_climate:"Heating",panel_media:"Media",panel_switches:"Switches",panel_sensors:"Sensors",panel_scenes:"Scenes & scripts",panel_cameras:"Cameras",camera_live:"Open live view",through_camera:"Look through the camera",through_back:"Back to the view",camera_mount:"Mount",camera_mount_wall:"Wall (looks along its rotation)",camera_mount_ceiling:"Ceiling (dome, all round)",camera_fov:"Field of view (\xB0)",camera_reach:"Reach (m)",camera_fov_short:"Angle \xB0",camera_reach_short:"Reach m",camera_tilt:"Tilt down (\xB0)",camera_tilt_short:"Tilt \xB0",camera_aim_hint:"In the plan the wedge shows where the camera looks. The handle at its tip turns the camera and sets its reach. In 3D the wedge ends at the first wall.",camera_detect_found:"{n} detection sensors on this camera's device: {kinds}. While one reports something, a pin marks it in front of the camera in 3D.",camera_detect_none:"This camera's device has no detection sensors yet. Pins show up as soon as the integration offers some (e.g. Frigate, UniFi Protect, Reolink).",camera_cone:"Show the field of view in 3D",state_recording:"Recording",state_streaming:"Streaming",panel_all_off:"All off",panel_all_on:"All on",view_options:"View: quality, look, markers, FPS",panel_all_open:"All up",panel_all_close:"All down",central:"Central: all lights, blinds and favourites",central_house:"Whole house",central_lights:"Lights",central_covers:"Blinds",central_on:"On",central_off:"Off",central_open:"Up",central_close:"Down",central_sure:"Sure?",central_favorites:"Favourites",central_no_favorites:'No favourites yet. Set scenes, scripts and switches in the editor under "Favourites".',card_central:"Star with the central menu",card_central_hint:"All lights and blinds of the floor or the house and the favourites from the editor.",favorites:"Favourites",favorites_hint:"Scenes, scripts, automations, buttons and switches for the central menu (star) of the 3D view \u2013 party, presence simulation, shading, watering.",favorites_add:"Add a favourite",background_handles_hint:'The picture now has handles like a piece of furniture: drag moves it, the lower right corner scales it, the round handle on top turns it (Shift for 15\xB0 steps). When it fits, tap "Done" \u2013 then it stays put.',background_fixed_hint:'The picture stays put, you can draw over it. To adjust it, tap "Move, scale and turn".',bg_level:"Straighten",bg_level_cancel:"Cancel straightening",bg_level_first:"Tap the start of a wall in the picture that should run straight (horizontal or vertical).",bg_level_second:"Now tap the end of that wall \u2013 the picture turns to fit.",bg_ruler:"Scale with a ruler",bg_ruler_cancel:"Cancel the ruler",bg_ruler_first:"Tap the start of a stretch of known length in the picture \u2013 e.g. a dimensioned wall.",bg_ruler_second:"Now tap the end of the stretch.",bg_ruler_length_hint:"Measured in the plan: {m} m. Enter the real length and the picture is scaled to fit.",bg_ruler_length:"Real length (m)",bg_ruler_apply:"Apply the scale",thumbs_fold:"Fold the floor pictures into buttons",thumbs_show:"Show the floor pictures again",room_start_view:"View as this room's start",room_start_view_hint:"When you tap the room in 3D, the camera flies to exactly the view the 3D pane on the right shows now \u2013 angle, zoom and framing. Turn on 3D beside first, turn and zoom in on the room, then tap.",room_start_view_reset:"Remove the room's start view (from above again)",room_start_view_need_pane:'Turn on "3D beside" first, then turn and zoom the room the way it should open.',floor_start_view:"View as this floor's start",floor_start_view_hint:"This floor opens in 3D the way the 3D pane on the right stands right now \u2013 e.g. the ground floor from the front and the upper floor from the back. Turn on 3D beside first, turn it, then tap.",floor_start_view_reset:"Remove the floor's start view (like the house again)",floor_start_view_need_pane:'Turn on "3D beside" first and turn the floor the way it should open.',glow_scale:"Glow in 3D (%)",glow_scale_hint:"How strongly the lamp glows in 3D: below 100 % tones down bright LED strips so the room does not burn out; above 100 % makes a weak lamp glow more. Switches nothing in Home Assistant.",vehicle_to_spot:"Turn into a parking spot",vehicle_to_spot_hint:"A vehicle as plain furniture always stands there. As a parking spot it appears only while a sensor reports the car, and that is where the car device is linked (charge, range, lock, climate).",as_furniture:"Show as furniture",as_furniture_hint:"Replaces the pin by a furniture item in the same place, linked to this device \u2013 a speaker for a media player, a lamp for a light. Ctrl+Z takes it back.",as_furniture_pick:"Pick furniture \u2026",as_device:"Back to a device pin",as_device_hint:"Replaces the furniture by the plain pin of its device in the same place.",presets:"Stations and playlists (Sound)",presets_hint:`Shown in every speaker's quick menu under "Play", next to the player's sources. For an Echo (Alexa Media Player): type SPOTIFY, AMAZON_MUSIC or TUNEIN and as content what you would say ("Rock Antenne"). For Sonos, Music Assistant and others: type music or url with a stream address or a URI.`,preset_type:"Type",preset_type_hint:"media_content_type of play_media, e.g. music, url, playlist, SPOTIFY, AMAZON_MUSIC, TUNEIN",preset_content:"Content",preset_content_hint:"media_content_id: stream URL, URI (spotify:playlist:\u2026) or, for Alexa, a search phrase",preset_add:"Station or playlist",own_buttons:"Own buttons",own_buttons_hint:"Shown in the central menu (star) below the favourites: open a dashboard path, show an entity's details, call a service, or open a browser_mod popup with your own card.",own_button_label:"Label",own_button_action:"Action",own_button_new:"New button",own_button_add:"Own button",own_action_navigate:"Open a path",own_action_more_info:"Entity details",own_action_service:"Call a service",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Path",own_target_more_info:"Entity",own_target_service:"Service (domain.service)",own_data:"Data (JSON)",own_data_hint:`For a service its data, for fire-dom-event the event's content, e.g. {"browser_mod": {"service": "browser_mod.popup", "data": {\u2026}}}.`,own_data_bad:"Not a valid JSON object.",panel_no_area:"This room is not linked to an area. You can link it in the editor.",panel_empty:"No devices of this room are in the plan. In the editor, place devices or pick them for the room panel with \u2606.",close:"Close",brightness:"Brightness",color_temp:"Colour temperature",color:"Colour",position:"Position",cover_open:"Open",cover_stop:"Stop",cover_tilt:"Slats",cover_tilt_open:"Slats open",cover_tilt_close:"Slats closed",cover_close:"Close",target_temp:"Target",current_temp:"Current",temp_down:"Cooler",temp_up:"Warmer",volume:"Volume",play_pause:"Play/pause",previous:"Previous",next:"Next",run:"Run",details:"Details",hold_hint:"Tap toggles \xB7 long press opens details",tool_opening:"Doors & windows",tool_furniture:"Furniture",qm_off:"Off",find:"Search",find_placeholder:"Where is \u2026? Device or room",find_none:"Nothing found",swipe_off:"Off",panel_pin:"Show in the room panel",panel_unpin:"Don't show in the room panel",devices_panel_hint:"The room panel shows the devices in the plan. \u2606 adds a device to the room panel without placing it.",card_section_view:"View",card_size:"Size",card_size_fixed:"Fixed height",card_size_fill:"Fill the screen",card_fill_hint:"Works best in a dashboard view of the type \u201CPanel (single card)\u201D \u2013 the card then takes all the space.",card_controls:"Switches in the card",card_floor_thumbs:"Floors as miniatures",card_floor_thumbs_hint:"Small pictures of the floors at the side \u2013 tap one to switch",card_floor_thumbs_hint_start:"The chosen floor is then where the card starts \u2013 the pictures at the side switch to the others",card_room_names:"Show room names",card_section_kiosk:"Wall tablet (kiosk)",card_section_features:"Features",card_weather_plan:"as set in the plan",card_pro_hint:"Motion trail and camera wall belong to the cameras: the trail shows the last half hour, the wall every camera of the plan.",card_idle_return:"Back to the start view after",card_idle_off:"Never",card_idle_min:"{n} min without a touch",card_idle_hint:"After the wait the card closes the room and shows the start view again.",card_night:"Night dimming",card_night_off:"Off",card_night_sun:"By the sun",card_night_time:"Time range",card_night_range:"Time range (e.g. 22:00-06:00)",card_idle_orbit:"Camera turn as screensaver",card_idle_orbit_hint:"After the return the view turns slowly until someone touches the tablet",card_dashboard:"Button to a dashboard (path)",card_dashboard_label:"Label of the button",card_dashboard_hint:"A button at the top right of the card opens the dashboard or view with this path, e.g. /lovelace/home or /dashboard-house/0. Without a label it shows \u2302.",card_alerts:"Show warnings",card_alerts_hint:"Smoke, gas, CO, water, alarm panel and windows open in the rain: the room pulses, a note appears at the top",card_alert_jump:"Jump to the room of a new warning",card_alert_jump_hint:"The view switches to the floor and room of the warning by itself",card_scenes:"Scene buttons in the room",card_scenes_hint:"Scenes and scripts of the area as buttons under the 3D view while a room is selected",card_motion_trail:"Motion trail",card_camera_wall:'"Cameras" button (camera wall)',card_camera_wall_hint:"A button at the bottom of the card opens the camera wall with every live picture.",card_motion_trail_hint:"A path of the last half hour's motion through the house, with times",trail_short:"Trail",cameras_short:"Cameras",camera_wall_title:"Camera wall",camera_wall_hint:"All cameras side by side. Tap one to enlarge it; a red outline means motion.",detect_person:"Person",detect_car:"Vehicle",detect_pet:"Animal",detect_motion:"Motion",weather_short:"Weather",weather_entity:"Weather entity",weather_effects:"Weather effects in 3D",rain_warning:"Warning: window open while it rains",sun_patches:"Sunlight through the windows",sun_patches_hint:"With north set, the sunlight from sun.sun falls through the windows as bright patches on the floor. Untick it to keep the floor free of sun patches.",weather_effect_rain:"Rain",weather_effect_snow:"Snow",weather_effect_fog:"Fog (greys the scene)",weather_effect_clouds:"Clouds dim the sky and the sun",weather_effect_lightning:"Lightning in storms",weather_effect_sky:"Sun and moon in the sky",weather_entity_hint:"Which weather entity drives the sky around the house. Automatic uses the first one found.",weather_hint:"Weather at the house: rain and snow fall with the real wind, clouds drift over the plot with their shadows, lightning, fog, sun and moon",card_weather:"Weather outside",card_weather_hint:"Rain, snow, hail, clouds with shadows, lightning and fog from the first weather entity (weather_entity picks another); fewer particles on the tablet level",trail_hint:"Motion trail: where motion was reported in the last 30 minutes, with times",alerts:"Warnings",alert_smoke:"Smoke: {name}",alert_gas:"Gas: {name}",alert_co:"Carbon monoxide: {name}",alert_water:"Water: {name}",alert_alarm:"Alarm triggered",alert_alarm_pending:"Alarm pending",alert_window_rain:"Window open in the rain: {name}",room_names_short:"Room names",floor_stack_short_dim:"Dimmed",floor_stack_short_stacked:"Stacked",floor_stack_short_single:"Alone",size_short_w:"W",size_short_d:"D",size_short_h:"H",import_error_not_json:"The file is no JSON.",import_error_not_plan:"The file is no NextFloor plan.",export_name_template:"template",export_name_backup:"backup",card_floor_stack:"Floors below",floor_stack_dim:"Dimmed",floor_stack_stacked:"Stacked (the house up to here)",floor_stack_single:"Hidden (only this floor)",card_control_walls:"Tall walls/cut",card_control_floors:"Floors apart",card_control_temperature:"Temperature",card_control_humidity:"Humidity",card_control_co2:"CO\u2082",card_controls_hint:"Tall walls/cut, floors apart and temperature, humidity, CO\u2082 to switch",controls_hide:"Hide the controls \u2013 only the 3D view remains",nav_wrap:"Wrap the bar: every floor and room on several lines",nav_row:"Bar in one line (scrolls sideways)",controls_show:"Show the controls again",card_controls_hidden:"Start with the controls hidden",card_controls_hidden_hint:"Only the 3D view; an eye at the bottom left brings bars, values and switches back",card_controls_hide_after:"Hide the controls after",card_hide_after_s:"{n} s without a touch",card_fullscreen_button:"Full screen button",card_fullscreen_button_hint:"Hides the dashboard around the card (e.g. on a wall tablet)",fullscreen:"Full screen",fullscreen_exit:"Exit full screen",card_section_show:"Show",card_floor:"Floor",card_floor_house:"Whole house (tap a floor to open it)",card_height:"Height (pixels)",card_walls:"Walls",card_quality_hint:"\u201CTablet\u201D is the lightest setting \u2013 ideal for Fire tablets and other wall tablets.",card_flows_switch:"Switch in the card",card_flows_on:"Always on",card_flows_off:"Always off",holos:"Cards",holos_hint:"Show or hide the live cards over the house (energy balance, car, media)",card_energy:"Show energy values at the top",card_room_panel:"Room details on tap",card_room_panel_hint:"The room's lights, blinds and cameras in a side panel",card_explode:"Pull floors apart in the house view",card_roof_fade:"Fade the roof out while zooming in",card_roof_fade_hint:"Off: the roof stays on the house even when the camera comes close.",card_stats:"Performance display (frames per second)",card_stats_hint:"To check how smoothly the card runs on the device",packs:"Furniture packs",packs_hint:"Your own furniture packs are JSON files (format in docs/packs.md). The packs that come with NextFloor are always there.",lib_badge_light:"Lamp: links to a light and switches in 3D",lib_badge_electric:"Electric: links to an entity and a power sensor (switching, pictures, consumption)",lib_badge_hint:"Items with a symbol link to entities: lamps switch, screens show pictures, appliances show their consumption.",pack_import:"Import furniture packs \u2026",pack_imported:"Imported \u201C{name}\u201D by {publisher} \u2013 {n} items",packs_imported_n:"{n} of {total} packs imported",pack_by:"by {publisher} \xB7 {n} items",feature_text_cameras:"Tap a camera: the view flies to where it hangs and looks its way, then the live picture fades in \u2013 with what it detects right now (person, vehicle, animal). The camera wall shows every camera side by side, the motion trail draws the last half hour as a glowing path through the house, with times at every room.",feature_name_energy:"Energy flow",feature_name_cameras:"Cameras",feature_name_weather:"Weather at the house",feature_name_screens:"TV screens",feature_name_sound:"Sound",feature_name_car:"Car",ext_tab:"Extensions",ext_title:"Extensions",ext_intro:"What NextFloor brings: its larger features and the furniture packs. Everything is free and open source \u2013 import your own furniture packs here.",ext_pro:"Features",ext_open:"Open extensions",manual:"Manual",manual_more:"Learn more",ext_teaser_title:"More furniture and live features",ext_teaser_text:'Furniture packs and the live add-ons (weather, energy, car, sound, screens, cameras) are under "Extensions" at the top.',feature_text_weather:"Rain, snow, hail and sleet fall at an angle with the real wind, clouds drift over the plot with their shadows, lightning strikes beside the house, plus fog, sun and moon in their real direction.",feature_text_screens:"A TV or monitor that plays shows in 3D what plays: cover, title, artist or series and the app \u2013 on a gradient in the app's colour. Behind it an ambilight glows on the wall, breathing gently while it plays.",feature_text_energy:"Energy particles fly in arcs from the solar fields to the inverter, between house, battery, grid and consumers \u2013 faster and denser the more power flows. The modules sparkle with their production, a glass card over the roof shows the balance and how self-sufficient the house is right now.",feature_text_sound:"A card floats over every speaker or TV that plays, with cover, title and artist \u2013 tap it for previous, play/pause, next and volume. Sound rings in the colour of the app (Spotify green, Netflix red \u2026) spread out, louder reaches further, and speakers of a multiroom group are joined by a thread.",feature_text_car:"A glass card over the parking spot shows the charge with a colour ring, range, charging with its power, plug and inside temperature \u2013 with buttons for lock, climate and charging. While the car charges, energy particles fly into it from the wallbox; when it is away, the card says where it is. NextFloor finds the entities on the car's device by itself.",pack_remove:"Remove",pack_builtin:"built in",live_autarky:"self-sufficient",live_car_away:"On the road",live_car_charging:"Charging",live_car_plugged:"Plugged in",live_car_lock:"Lock",live_car_unlock:"Unlock",live_car_unlock_confirm:"Really unlock {name}?",live_car_climate:"Climate",live_car_charge:"Start/stop charging",live_media_prev:"Previous",live_media_playpause:"Play/pause",live_media_next:"Next",live_media_volume:"Volume",live_now:"now",live_minutes_ago:"{n} min ago",live_car_device:"Car (any entity of the car)",live_car_device_hint:"Charge, range, charging, plug, lock and climate are found by NextFloor on the car's device. Without one it takes the spot's presence sensor.",pack_remove_confirm:"Remove the pack \u201C{name}\u201D? Its furniture stays in the plan as plain boxes.",pack_missing_item:"Furniture of a removed pack",pack_error_not_a_pack:"This is not a furniture pack file.",pack_error_builtin:"A pack that comes with NextFloor already has this id.",pack_error_invalid_content:"The pack contains invalid furniture: {detail}",pack_error_too_large:"The file is too large.",pack_error_needs_update:'This add-on needs a newer version of NextFloor. Please update first (HACS \u203A NextFloor \u203A \u22EE \u203A "Update information" \u203A "Download"), restart Home Assistant, then install again.',pack_error_other:"Import failed: {detail}",back_to_room:"Back to {room}",back_to_floor:"Back to the floor",hint_furniture:"Tap a room, then pick an item on the right \xB7 drag items, resize them by their corners",furniture_into:"New items go into the middle of \u201C{room}\u201D.",furniture_pick_room:"Tip: tap a room first \u2013 new items then land in its middle.",flows:"Power flow",flows_hint:"Show or hide the energy arcs between solar fields, inverter, battery, grid and consumers",chk_title:"Setup",chk_hint:"What the energy flow needs. Tap a row to jump there.",chk_solar:"Solar field in place",chk_solar_add:"Put a solar field on the roof",chk_meter:"Meter with grid sensor",chk_meter_sensor:"Meter: grid sensor (W) missing",chk_meter_add:"Add the meter",chk_inverter:"Inverter with power sensor",chk_inverter_sensor:"Inverter: power sensor missing",chk_inverter_add:"Add an inverter",chk_battery:"Home battery with power and charge",chk_battery_sensor:"Home battery: power or charge missing",chk_battery_opt:"Home battery (optional)",chk_grid:"Grid connection set",chk_grid_opt:"Grid connection (optional, else automatic)",energy_sign_grid:"The house shows export while the sun produces nothing. The grid sensor probably has its sign reversed.",energy_sign_battery:"The battery charges with no sun and no grid draw. Its sensor probably has its sign reversed.",energy_sign_flip:"Flip the sign",help_title:"Help and feedback",help_hint:"Please report problems as a GitHub issue and wishes as a discussion \u2013 nothing gets lost, and everyone sees the state.",help_issue:"Report a problem",help_idea:"Propose an idea",furn_name:"Name (optional)",furn_mirror:"Mirror",furn_mirror_hint:"Swap left and right \u2013 the L-sofa the other way round, the cabinet with its door on the other side, the kitchen run mirrored.",hint_opening:"Tap a wall to add a door or window \u2013 choose its kind on the right afterwards",preset_door:"Door",preset_door_double:"Double door",preset_window:"Window",preset_window_double:"Double window",preset_terrace:"Terrace door",preset_terrace_double:"French doors",preset_garage:"Garage door",preset_front:"Front door",opening_style:"Style",sidelight_auto:"automatic",sidelight_hinge:"Sidelight on the hinge side",sidelight_hinge_hint:"The sidelight sits opposite the hinge otherwise; ticked, it sits next to the hinges.",sidelight_width:"Sidelight width (m)",sidelight_width_left:"Left sidelight (m)",sidelight_width_right:"Right sidelight (m)",style_auto:"Automatic ({style})",style_interior:"Room door",style_front:"Front door",style_front_glass:"Front door with glass",style_sidelight:"Front door with sidelight",style_sidelights:"Front door with two sidelights",style_glass:"Glass door",style_sliding:"Sliding door",style_passage:"Opening (no door)",style_standard:"Standard",style_bars:"With glazing bars",style_glass_wall:"Glass wall (fixed)",preset_glass_wall:"Glass wall",flip_hinge:"Swap hinge side",flip_main_leaf:"Swap main leaf",flip_hinge_hint:"Hinges to the other side",flip_swing:"Reverse opening direction",flip_swing_hint:"The door swings into the room or to the other side",main_leaf:"Main leaf (seen from the room)",contact_main:"Contact main leaf",contact_second:"Contact second leaf",tool_outdoor:"Outdoor",tool_measure:"By measure",hint_measure:"Tap the starting point, then type the wall lengths with their direction on the right",measure:"Room by measure",measure_start:"Tap the starting point in the plan, e.g. a room corner.",measure_from:"Start at {x} / {z} m \u2013 tapping moves the start.",measure_length:"Length of the next wall (m)",measure_close:"Close room",measure_undo:"Remove last wall",measure_gap:"Gap to the start: {gap} m (joined when closing)",measure_hint:"Tip: type a length and press an arrow key. With measured inside dimensions, use \u201CClose gaps\u201D afterwards.",rect_by_size:"Rectangle by size",rect_add:"Add rectangle",dir_up:"Up",dir_down:"Down",dir_left:"Left",dir_right:"Right",hint_outdoor:"Drag to draw an outdoor area (lawn, terrace, pool \u2026)",outdoor:"Outdoor area",outdoor_type:"Type",outdoor_height:"Height (m)",outdoor_offset:"Height offset (m, \u2212 = lower)",outdoor_outline:"Show the outline",outdoor_outline_hint:"Unticked, the area draws no glowing line along its edge \u2013 for large plots made of several lawns.",outdoor_hint:"Outdoor lights (path light, garden spot, outdoor wall light) light all outdoor areas and the facade.",out_lawn:"Lawn",out_terrace:"Terrace",out_path:"Path",out_driveway:"Driveway",out_pool:"Pool",out_bed:"Flower bed",out_hedge:"Hedge",out_fence:"Fence",out_wild:"Wild patch",out_pergola:"Pergola / frame",outdoor_open:"Open (leave out the last edge)",outdoor_open_hint:"The edge from the last point back to the first is not drawn \u2013 a fence or pergola leaning against the house.",outdoor_bracing:"X-bracing",outdoor_cut:"Cut out of the areas beneath",outdoor_cut_hint:"Every area drawn before this one that contains it whole gets a hole here \u2013 a pond or a wild patch in the lawn.",outdoor_slope:"Slope (m)",outdoor_slope_hint:"Height difference from the high edge to the low edge; the high edge sits at the height offset. Lamps on the area follow.",outdoor_slope_dir:"Falls towards",slope_x:"right (+X)",slope_nx:"left (\u2212X)",slope_z:"down (+Z)",slope_nz:"up (\u2212Z)",north:"North (\xB0 clockwise from up)",north_hint:"North is needed for the sun (light through the windows).",roof:"Roof",roof_none:"No roof",roof_flat:"Flat roof",roof_gable:"Gable roof",roof_custom:"Roof sections (custom)",roof_sections:"Roof sections",roof_sections_hint:"Each roof section covers a rectangle of the house, e.g. the house, the barn or an extension \u2013 each with its own shape, ridge direction, eave height and pitch. Drag in the plan to draw a new one; tap selects it, dragging moves it, the corners resize it.",roof_sections_start:"Create roof sections from the rooms",roof_sections_regen:"Create again from the rooms",roof_sections_off:"Back to one roof",roof_regen_confirm:"Replace all roof sections with a new proposal from the rooms?",roof_section:"Roof section",roof_section_hint:"Heights count from the ground. A side with a lower eave reaches further down (catslide); pent roofs rise from the first side.",roof_shape_gable:"Gable",roof_shape_hip:"Hip",roof_shape_pent:"Pent",roof_shape_flat:"Flat",roof_shape_halfhip:"Half-hip",roof_shape_pyramid:"Pyramid",roof_shape_mansard:"Mansard",roof_shape_parapet:"Parapet",roof_shape:"Shape",roof_axis_x:"Ridge \u2194",roof_axis_z:"Ridge \u2195",roof_eave:"Eave (m)",roof_pitch_short:"Pitch (\xB0)",roof_height:"Height (m)",roof_base:"Top of walls (m)",roof_on_floor:"Sits on floor",roof_on_floor_hint:"Puts the section on this floor's wall tops; base and eaves move along. In the 3D view the roof belongs to this floor.",roof_base_hint:"Below the ceiling height of the floor underneath, that floor's walls end under the roof: knee walls at the eaves, gables up to the ridge, inner walls cut by the slope. Dashed lines in the plan show where 1.5 m and 2 m of headroom remain.",roof_ridge_height:"Ridge height",roof_side_top:"top",roof_side_bottom:"bottom",roof_side_left:"left",roof_side_right:"right",roof_swap:"Swap sides",roof_open:"Canopy (posts instead of walls, see-through)",roof_open_short:"Canopy",roof_dormer:"Dormer",roof_dormer_hint:"A dormer on this side of the roof: 2 m wide, its front at the eave wall, eaves 1.4 m above the roof's eave, gable roof. Then move it and change its width and heights like any section; the main slope opens under it and the attic wall rises up to the dormer \u2013 a window fits there.",roof_outline:"Take the floor's outline",roof_outline_hint:"A flat roof as a free shape: takes the outline of the shown floor's rooms (L- or Z-shaped too) as one surface without seams. The corners can be dragged afterwards.",roof_points_hint:"Free shape: drag the corners in the plan. Back to the rectangle drops the shape.",roof_rect:"Back to the rectangle",roof_open_hint:"For a terrace roof or a carport: posts and beams carry the roof instead of walls, and it is see-through. Where the canopy meets the house wall, it rests on the wall.",roof_swap_hint:"Turns the roof round: the two sides swap eave and pitch, a pent roof rises the other way.",roof_pitch:"Roof pitch (\xB0)",roof_overhang:"Roof overhang (m)",roof_ridge:"Ridge",roof_ridge_long:"Along the long side",roof_ridge_short:"Along the short side (e.g. terraced house)",device:"Device",lamp_mount:"Lamp",lamp_ceiling:"Ceiling light",lamp_floor:"Floor lamp",lamp_table:"Table lamp",lamp_wall:"Wall light",marker_height:"Marker height (m)",height_auto:"Automatic height",device_centre:"To room centre",lights_spread:"Spread ceiling lights evenly",devices_search:"Search devices \u2026",devices_more:"+{n} more",devices_less:"less",panel_more:"More devices of the area ({n})",panel_less:"Show less",gaps_close:"Close gaps",gaps_hint:"Join rooms up to 60 cm apart at one shared wall; the gap becomes the interior wall thickness.",gaps_none:"No gaps between rooms found.",gaps_closed:"{n} places closed.",gaps_closed_wall:"{n} places closed, interior wall now {t} m.",fps:"FPS",fps_title:"Performance display (frames per second)",hint_garage:"Tap a wall to add a garage door",opening_garage:"Garage door",garage_hint:"The door follows a garage cover (position or open/closed) or a garage door contact of the room's area.",door_hint:"With a door contact the leaf swings open; without a sensor it stands half open.",hint_door:"Tap a wall to add a door",hint_window:"Tap a wall to add a window",opening_door:"Door",opening_window:"Window",opening_type:"Type",opening_position:"Centre from corner (m)",sill:"Sill height (m)",opening_height:"Height (m)",hinge:"Hinge (seen from the room)",hinge_left:"Left",hinge_right:"Right",cover_entity:"Blind",door_cover:"Drive (motorised door or gate)",cover_position_entity:"Position sensor (live)",cover_position_invert:"Sensor counts the other way round (0 = open)",contact_entity:"Contact",sensor_kind:"Sensor type",sensor_kind_contact:"Window contact (open/closed)",sensor_kind_handle:"Handle sensor (open/tilted/closed)",sensor_kind_contact_tilt:"Contact + tilt sensor",handle_entity:"Handle sensor",handle_main:"Handle sensor main leaf",leaf_main:"Main leaf",leaf_second:"Second leaf",tilt_entity:"Tilt sensor",tilt_angle_entity:"Tilt angle sensor (\xB0, optional)",tilt_angle_max:"Angle that counts as fully tilted (\xB0)",tilt_angle_offset:"Offset: angle reported while closed (\xB0)",tilt_angle_invert:"The angle counts the other way round",door_shut:"Show closed without a sensor",door_shut_hint:"A door without a contact stands half open in 3D so it reads as a door. Ticked, it is drawn closed \u2013 front door, carport, side door.",entity_auto:"Automatic ({name})",entity_auto_none:"Automatic (none found)",entity_none:"None",entity_search:"Type to search \u2026",opening_hint:`Sensor type: window contact (reports open/closed), handle sensor (reports open, tilted and closed \u2013 e.g. a Homematic window handle) or contact + tilt sensor (a second sensor that only reports tilted). Automatic uses the blinds and contacts of the room's area. Position sensor: an entity reporting the blind's position while it moves (e.g. a Homematic "level", 0\u2013100 % or 0\u20131, open = high) \u2013 the blind then moves live in 3D.`,furniture:"Furniture",furniture_add:"Add furniture",furniture_search:"Search furniture \u2026",furniture_search_none:"Nothing found. Try another word \u2013 English or German.",furniture_type:"Item",rotation:"Rotation (\xB0)",strip_tilt:"Tilt about its length (\xB0)",strip_upright:"Upright",strip_upright_hint:"The strip stands on end: its length runs up from the height above the floor \u2013 along a door frame, as a light column. The tilt lays a lying strip against a slope (90\xB0 = its face points sideways).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Height (m)",furn_sofa:"Sofa",furn_armchair:"Armchair",furn_table:"Table",furn_chair:"Chair",furn_bed:"Bed",furn_nightstand:"Nightstand",furn_wardrobe:"Wardrobe",furn_shelf:"Shelf",furn_kitchen:"Kitchen unit",furn_worktop:"Worktop",furn_fridge:"Fridge",furn_fridge_smart:"Smart fridge (side by side)",furn_door_left:"Door sensor left (freezer side)",furn_door_right:"Door sensor right (fridge side)",fridge_hint:"While a door sensor reports open, the door swings open in 3D.",furn_stove:"Stove",furn_sink:"Sink",furn_bathtub:"Bathtub",furn_shower:"Shower",furn_wc:"WC",furn_washbasin:"Washbasin",furn_desk:"Desk",furn_tv_board:"TV board",furn_plant:"Plant",furn_rug:"Rug",furn_stairs:"Stairs",furn_stairwell:"Floor opening",stairwell_hint:"A hole in this floor, for example above the staircase or for a gallery; from above you look through it. The opening must lie within one room; several openings may overlap (for an L shape, for example). Stairs on the floor below that reach up here open the floor by themselves as well.",tool_hole:"Floor opening",tool_roof:"Roof",tool_energy:"Energy",tool_wall:"Wall",hint_wall:"Drag to draw a single wall (partition, half wall) \xB7 Shift keeps it straight \xB7 Alt without snapping",free_wall:"Wall",wall_length:"Length (m)",wall_thickness:"Wall thickness (m)",wall_height:"Height (m)",wall_height_full:"Full room height",wall_none:"No wall",wall_none_hint:"Leave this wall out altogether: for open floor plans whose rooms are one space but separate in Home Assistant.",edge_thickness:"Thickness (m)",wall_thickness_hint:"Thickness of this wall, e.g. 0.365 on a thick outer wall or 0.115 on a light partition. A wall between two rooms takes the thicker setting.",wall_thickness_reset:"Thickness as set for the house",wall_heights:"Wall heights",wall_n:"Wall {a}\u2013{b}",wall_part:"part {n}",wall_split_hint:"Split the wall here: the part gets a height of its own, e.g. 2.5 m next to 1.7 m in line",wall_split_at:"Split point from corner (m)",wall_join_hint:"Remove the split point: the part joins the one before it again",wall_exterior_short:"exterior wall",room_wall_hint:"A lower height turns the wall into a parapet or a counter. If two rooms share the wall, the lower setting applies. Windows and doors in it end at the wall height.",free_wall_hint:"A free-standing wall, e.g. a partition. Where it meets a room wall, the corner is mitred. Drag the handles to move its ends, drag the line to move the whole wall.",stairwell_outside:"This opening reaches across a room boundary and is therefore not cut. Move it fully into one room or make it smaller.",hint_hole:"Drag to draw a floor opening (stairwell, gallery)",hint_roof:"Drag to draw a roof section \xB7 tap selects \xB7 drag moves \xB7 corners resize",hint_energy:"Tap a solar field to select it \xB7 drag to move it, also onto another roof face \xB7 new fields with + Solar field on the right",furn_parking:"Parking spot",furn_group_vehicles:"Parking",parking_entity:'Sensor "car present"',parking_vehicle:"Vehicle",parking_vehicle_none:"None",parking_no_pack:'No vehicle pack imported \u2013 vehicles come from the "Vehicles" pack (Furniture \u2192 Import furniture pack).',parking_scale:"Size (%)",parking_type_entity:"Vehicle type sensor (optional)",parking_types:"State \u2192 vehicle",parking_type_state:"State (e.g. van)",parking_add_type:"+ Mapping",parking_hint:'Without a sensor the vehicle always stands there. With one it appears as soon as the sensor reports "on", "home" or "present". A vehicle type sensor (e.g. from an AI camera analysis) picks the model: when its state matches a mapping \u2013 also as a word in the text \u2013 that vehicle is shown, otherwise the default one.',parking_too_tall:"The vehicle ({car} m) is taller than the room ({room} m).",furn_lamp_ceiling:"Ceiling light",furn_lamp_downlight:"Downlight",furn_lamp_spot:"Surface spot",furn_lamp_panel:"LED panel",furn_lamp_uplight:"Floor uplight",furn_lamp_bollard:"Path light",furn_lamp_garden:"Garden spot",furn_radiator:"Radiator",furn_robot_vacuum:"Robot vacuum",furn_entity_vacuum:"Robot vacuum",furn_robot_room:"Current room (sensor)",robot_hint:"While the robot cleans in Home Assistant it drives lanes in 3D through the room it reports (a \u201Ccurrent room\u201D sensor, matched by room or area name), else through the room of its dock. The track is simulated \u2013 Home Assistant usually does not know the exact position. It drives back to the dock when it returns.",furn_lamp_pendant:"Pendant light",furn_lamp_floor:"Floor lamp",furn_lamp_table:"Table lamp",furn_lamp_wall:"Wall light",furn_led_strip:"LED strip",furn_group_lights:"Lights",furn_entity_light:"Light or switch",furn_color_entity:"Colour and brightness from (optional)",furn_color_entity_hint:"For lights that a relay (Shelly, switch actuator) turns on and off while the bulb itself knows its colour and brightness: on/off comes from the switch above, colour and brightness from this entity.",furn_entity_climate:"Heating (thermostat)",lamp_hint:"Tap the lamp in 3D to switch it, long press for the quick menu. Switches work too (e.g. a relay for the ceiling light) \u2013 the lamp shines while it is on. Table lamps stand on the furniture below them.",lamp_hint_pendant:"Height = drop below the ceiling. Tap in 3D to switch, long press for details.",theme:"Look",version_hint:"Installed version of NextFloor \u2013 the frontend; the integration in Home Assistant reports {backend}",accent:"Accent colour",accent_hint:"An accent colour of your own: lines and glowing edges in the neon look, buttons and pins \u2013 \u21BA brings the neon cyan back",accent_reset:"Back to cyan",theme_neon:"Neon",theme_blueprint:"Blueprint",theme_day:"Day",furnish:"Furnish",split_3d:"3D beside",mount_height:"Height above the floor (m)",side_open:"Open the sidebar",side_close:"Close",side_details:"Details of the selection",side_pin:"Pin",side_pinned:"Pinned",side_pin_hint:"Pinned, the sidebar stays open; otherwise it folds away beside the 3D view while nothing is selected",split_3d_hint:"Live 3D next to the plan: drag and turn furniture and devices there \u2013 with undo, saved with the plan",size_w:"Width (m)",size_d:"Depth (m)",size_h:"Height (m)",furnish_hint:"Drag furniture, lamps and devices \xB7 furniture snaps to walls \xB7 tap one to turn it, set its height and mount",done:"Done",heatmap:"Heatmap",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humidity",heat_short_co2:"CO\u2082",heat_short_values:"Values",heat_temperature:"Temperature",heat_humidity:"Humidity",heat_co2:"CO\u2082",heat_values:"Values at the room names",heat_none_found:"No matching sensors in the rooms' areas.",markers:"Markers",markers_none:"None",markers_important:"Important",markers_all:"All",furn_stool:"Stool",furn_coffee_table:"Coffee table",furn_tv_wall:"TV (wall)",furn_sideboard:"Sideboard",furn_table_round:"Round table",furn_bench:"Bench",furn_corner_bench:"Corner bench",furn_bar_stool:"Bar stool",furn_kitchen_wall:"Wall cabinet",furn_kitchen_tall:"Tall unit with oven",furn_island:"Kitchen island",furn_dishwasher:"Dishwasher",furn_bunk_bed:"Bunk bed",furn_dresser:"Chest of drawers",furn_washer:"Washing machine",furn_dryer:"Dryer",furn_office_chair:"Office chair",furn_tall_cabinet:"Tall cabinet",furn_coat_rack:"Coat rack",furn_group_living:"Living",furn_group_dining:"Dining",furn_group_energy:"Energy & solar",energy_devices:"Devices",wallbox_charging:"charging",wallbox_plugged:"plugged in",furn_soc:"State of charge (%)",furn_export:"Export power (W, separate sensor, optional)",furn_export_hint:"If your meter reports import and export in two sensors (e.g. Growatt, Tibber Pulse), take the import sensor as power above and the export sensor here. A signed sensor does not need this.",furn_charge:"Charging power (W, separate sensor, optional)",furn_charge_hint:"If your battery reports charging and discharging in two sensors (e.g. Anker Solix), take the discharging sensor as power above and the charging sensor here. A signed sensor does not need this.",furn_wallbox_status:"Status (charging, plugged in)",energy_only_note:"\u26A1 Energy: only solar fields and energy devices can be moved here; rooms and furniture are locked.",roof_only_note:"\u{1F3E0} Roof: only roof sections and roof windows can be moved here; rooms and furniture are locked.",energy_devices_hint:"Meter, inverters, home batteries, wallboxes and the grid connection are added here: on the floor chosen above, movable in the plan. With a power sensor they show their watts; the meter takes the grid sensor, a string picks its inverter. Several inverters and batteries (say a balcony plant on top) work too: each gets its own sensor.",solar_fields:"Solar fields",solar_hint:"Put modules on the roof: they lie in the slope of the roof face; on a flat roof they stand on frames. Drag a field in the plan to move it.",solar_no_roof:"Solar fields need a roof: a gable or flat roof under Settings, or roof sections here in the Roof tool.",solar_face_gone:"roof face missing",solar_summary:"{n} modules \xB7 {kwp} kWp",solar_add:"Solar field",solar_field:"Solar field",solar_face:"Roof face",solar_rows:"Rows",solar_cols:"Modules per row",solar_portrait:"Portrait",solar_landscape:"Landscape",solar_u:"Distance from the edge (m)",solar_v:"Distance from the eave (m)",solar_tilt:"Tilt of the frames (\xB0)",solar_flip:"Lean the other way",solar_partial:"only {n} of {total} fit on the face",solar_form_hint:"Modules that would reach beyond the roof face are left out. \u201CFill face\u201D puts as many modules on the roof as fit. kWp counted with 400 W per module.",solar_fit:"Fill face",roof_windows:"Roof windows",roof_window:"Roof window",roof_windows_hint:"Roof windows lie in the roof face, with a blind and contacts like windows. Drag them in the plan, also onto another roof face.",roof_window_tilt:"Tilt contact",roof_window_name:"Name (optional)",roof_window_motor:"Window motor (cover, optional)",roof_window_motor_hint:"A window motor (Velux, Roto, Fakro) reports its position as a cover: the sash opens in 3D as far as the motor stands. A contact or tilt contact still works without a motor.",roof_window_hint:"Open, the sash swings out, hinged at the top; tilted, a little; and the frame glows warm; the blind comes down over the glass from the top. In a roof section the window cuts a hole into the slope, so the attic looks out through it.",solar_ground:"Free-standing (garden, garage roof \u2026)",solar_add_ground:"Free-standing",solar_base:"Height of the surface (m, 0 = ground)",solar_add_wall:"On a wall",solar_wall:"Wall",solar_v_wall:"Height above the floor (m)",solar_tilt_wall:"Tilt away from the wall (\xB0, 90 = canopy)",solar_flip_wall:"Standing off at the bottom instead of the top",solar_rotation:"Rotation (\xB0)",solar_name:"Name",solar_name_hint:"e.g. string 1 south",solar_module_w:"Module width (m)",solar_module_h:"Module height (m)",solar_wp:"Module power (Wp)",solar_string:"String",solar_strings:"Strings",solar_string_none:"No string",solar_string_new:"New string",solar_string_n:"String {n}",solar_string_name:"Name of the string",solar_string_entity:"PV power of the string",solar_string_inverter:"Inverter",solar_string_inverter_none:"No inverter chosen",inverter_strings:"Strings on this inverter: {names}",inverter_strings_none:"No string on this inverter yet \u2013 assign it at a solar field under String \u203A Inverter.",solar_string_inverter_missing:"No inverter in the plan yet (add one below under Devices)",solar_string_hint:"Fields in the same string belong together, also on different roofs (e.g. 5 modules on the house and 5 on the garage). Sensor and inverter count for the whole string.",solar_string_sum:"{fields} fields \xB7 {n} modules \xB7 {kwp} kWp",solar_face_size:"Roof face {w} \xD7 {h} m (along the eave \xD7 up the slope)",solar_cols_hint:"One number for rows of equal length, or a list for rows of their own: \u201C4, 4, 3\u201D (from the eave).",solar_align_left:"Left",solar_align_center:"Centre",solar_align_right:"Right",solar_look_black:"Full black",solar_look_blue:"Blue",solar_pick:"Modules on/off one by one",solar_pick_all:"All on again",solar_pick_hint:"Tap a module in the plan to take it away or put it back. Removed ones are dashed.",solar_entity:"PV power of this field (e.g. its string)",solar_main:"Main roof",solar_section:"Section {n}",solar_flat:"flat roof",compass_n:"north",compass_ne:"north-east",compass_e:"east",compass_se:"south-east",compass_s:"south",compass_sw:"south-west",compass_w:"west",compass_nw:"north-west",furn_meter:"Electricity meter",furn_grid_point:"Grid connection",grid_point_hint:"The grid connection stands here: the handover point to the utility, e.g. at the end of the driveway. Movable in the plan.",furn_model:"Model",inverter_std:"Standard (wall unit with display)",inverter_slim:"Slim and tall (light strip)",inverter_hybrid:"Hybrid (round dial, fans)",battery_std:"Tower (stacked modules)",battery_wall:"Wall battery (flat, hanging)",battery_cube:"Compact (balcony battery)",furn_inverter:"Solar inverter",furn_home_battery:"Home battery",furn_wallbox:"Wallbox",furn_group_kitchen:"Kitchen",furn_group_sleeping:"Sleeping",furn_group_bath:"Bath & laundry",furn_group_work:"Work & other",furn_entity:"Device (switch, plug \u2026)",furn_state_entity:"State from (optional)",furn_state_entity2:"Second state (the other half)",furn_state_split:"Halves",furn_state_left_right:"Left / right",furn_state_top_bottom:"Bottom / top (bunk bed)",furn_state_hint:"The item glows while the entity reports on, occupied or home \u2013 a bed with an occupancy mat, an armchair, the sauna. Two entities light the halves: left and right, bottom and top for a bunk bed.",furn_entity_tv:"TV (media player or smart plug)",fix:"Fix",unfix:"Release",fix_hint:"Fixed: cannot be moved by accident any more (key L, right-click or long press)",fixed_drag_hint:"\u{1F512} Fixed \u2013 release it first to move it (lock in the form, right-click or key L)",fixed_delete_confirm:"This item is fixed. Delete it anyway?",lock_plan:"\u{1F512} Floor plan",lock_plan_hint:"Lock the floor plan: rooms, walls, doors, windows and outdoor areas cannot be moved by accident. Furniture and devices stay free.",start_view:"Start view",start_view_hint:"The 3D view, the card and the kiosk open the house with this view, e.g. from the garden side. Turn, zoom and move the house in the 3D pane on the right until it fits, then remember it.",start_view_card:"If a card should open with a different view, put this line into its YAML configuration.",start_view_set:"Remember the current 3D view as the start",start_view_reset:"Default",start_view_saved:"An own start view is saved.",ctx_rotate:"Turn 90\xB0",devices_placed_in:"in {room}",devices_narrow:"{n} more \u2013 narrow the search",climate:"Room climate",climate_temperature:"Temperature",climate_humidity:"Humidity",climate_co2:"CO\u2082",climate_hint:"These sensors count for the heatmap and the room panel. \u201CAutomatic\u201D takes the sensors of the area and the ones placed in the room, but no device temperatures (3D printer, heat pump, flow \u2026).",plan_locked:"Floor plan locked",plan_lock:"Lock floor plan",plan_unlock:"Unlock floor plan",opening_mark:"Highlight in 3D",opening_mark_open:"When open",opening_mark_closed:"When closed (e.g. WC)",opening_mark_hint:"A highlighted window or door glows warm. \u201CWhen closed\u201D needs a contact; without a sensor nothing is highlighted.",marker_show:"Marker in 3D",marker_show_hint:"Automatic follows the None / Important / All switch of the 3D view. Always show and Hide apply regardless (except with None).",marker_show_auto:"Automatic",marker_show_always:"Always show",marker_show_no_power:"Without watts",marker_show_never:"Hide",marker_icon:"Own symbol (Material Design icon)",device_name:"Own name (optional)",show_name:"Show the name under the marker in 3D",card_marker_names:"Own names at the markers",card_marker_names_hint:"Every device with an own name shows it small under its marker \u2013 three thermometers in the garden stay apart.",device_name_hint:'A name for the plan only, e.g. "Island accent light" \u2013 the entity in Home Assistant stays as it is.',floor_turn:"Turn 90\xB0",floor_shift_all:"Take every floor along (whole house)",floor_shift_all_hint:"Shift and turn act on every floor with the roof sections, outdoor areas, energy devices and meter \u2013 the whole house moves as one.",floor_turn_hint:"Turns everything on the floor by 90\xB0 clockwise about the middle of its rooms \u2013 when a floor was drawn the wrong way round. Three times = 270\xB0.",marker_icon_hint:"The name of a Material Design icon as in Home Assistant, e.g. mdi:thermometer or mdi:water-alert. Empty = the symbol of the device kind.",furn_power:"Power sensor (W)",furn_links_hint:"With a power sensor the item shows its watts and takes part in the energy flow.",furn_links_hint_tv:"The screen glows while the TV is on, in the colour of the app (Netflix, YouTube \u2026); the label shows the app or title.",stairs_hint:"The stair rises towards the back (away from the marked front edge) and opens the ceiling of the floor above.",floor_lights:"{n} lights on",floor_open:"{n} open",floor_persons:"{n} people",energy_consumption:"Consumption",energy_grid_import:"Grid import",energy_grid_export:"Export",energy_solar:"Solar",energy_battery:"Battery",energy_tariff:"Tariff",energy:"Energy",energy_meter:"Meter",energy_grid:"Grid (W, + = import)",energy_solar_sensor:"Solar production (W)",energy_battery_sensor:"Battery power (W, + = discharging)",energy_battery_soc:"Battery charge (%)",energy_tariff_sensor:"Tariff (e.g. \u20AC/kWh)",energy_invert:"Invert sign",energy_hint:"Consumers are placed devices with a power sensor (W) \u2013 the sensor itself or one of the same device.",energy_balance:"Energy balance",energy_balance_hint:"Grid, solar and battery come from the devices in the plan: meter, inverter and home battery. Here you can choose other sensors, flip signs and set the house consumption.",energy_consumption_sensor:"House consumption (W, else from the balance)",energy_import_prefs:"Take over from the energy dashboard",energy_import_done:"{n} sensors taken over \u2013 please check the signs.",energy_import_none:"No matching power sensors (W) were found in the energy dashboard \u2013 please choose them by hand.",energy_import_failed:"Home Assistant's energy dashboard is not set up.",tool_meter:"Meter",hint_meter:"Tap the spot of the meter",presence:"Presence",presence_hint:"Room sensor per person (e.g. ESPresense, Bermuda): its state names the room or area.",presence_sensor:"Room sensor",no_persons:"There are no people in Home Assistant."},Ea=["fr","es","nl","it","hu","da","sv","nb","nn","fi","cs","pl","ro","sl"],mt=new Map,Yn=new Map;function Jn(r){let e=(r??navigator.language).toLowerCase(),t=e.startsWith("no")?"nb":e.slice(0,2);return Ea.includes(t)?t:null}function Ze(r){let e=Jn(r);return!e||mt.has(e)}function Vt(r){let e=Jn(r);if(!e||mt.has(e))return Promise.resolve();let t=Yn.get(e);if(!t){let n=new URL(`./lang/${e}.json?v=be5ce4442bac`,import.meta.url).href;t=fetch(n).then(o=>o.ok?o.json():{}).then(o=>{mt.set(e,o&&typeof o=="object"?o:{})}).catch(()=>{mt.set(e,{})}).finally(()=>Yn.delete(e)),Yn.set(e,t)}return t}function S(r,e,t={}){let n=r?.language??navigator.language,o=n.startsWith("de")?null:Jn(n),s=(n.startsWith("de")?Co:o&&mt.get(o)||Oo)[e]??Oo[e]??Co[e]??e;for(let[a,l]of Object.entries(t))s=s.replace(`{${a}}`,String(l));return s}function B(r,e,t=2){return e.toLocaleString(r?.language??void 0,{maximumFractionDigits:t})}var Wo={light:"M8.5 17.5h7M9.5 20.5h5M12 2.5a6.5 6.5 0 0 0-3.5 12v1.5h7V14.5A6.5 6.5 0 0 0 12 2.5z",switch:"M6 5h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zM12 7.5v9M9 12h6",fan:"M12 11.5c-1-3.5 0-7 2.5-7s2 4-2.5 7zm.5.5c3.5-1 7 0 7 2.5s-4 2-7-2.5zm-.5.5c1 3.5 0 7-2.5 7s-2-4 2.5-7zm-.5-.5c-3.5 1-7 0-7-2.5s4-2 7 2.5z",cover:"M3.5 3.5h17v3h-17zM6 6.5v12M18 6.5v12M8.5 9.5h7M8.5 12.5h7M8.5 15.5h7",climate:"M12 15V5.5a2.5 2.5 0 0 0-5 0V15a4.5 4.5 0 1 0 5 0zM9.5 9v7M15 5.5h5M15 9.5h4",media:"M3.5 5.5h17v11h-17zM8 20.5h8M12 16.5v4M10 8.5v5l4.5-2.5z",lock:"M5.5 10.5h13v9.5h-13zM8 10.5V7.5a4 4 0 0 1 8 0v3M12 14v3",sensor:"M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zM12 7.5v4.5l3.5 2",binary:"M5.5 20.5v-17h10v17M3.5 20.5h14M9 20.5v-13h4.5v13M12.5 14h.01",camera:"M3.5 7.5h11.5v9H3.5zM15 10.5l5.5-3v9l-5.5-3",scene:"M5.5 18.5l8-8M14 3.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1zM18.5 12l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z",script:"M8.5 3.5h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-2h9M8.5 3.5a2 2 0 0 0-2 2v10M9.5 8.5h6M9.5 11.5h4"},Kt=r=>Wo[r];function Gt(r){return`<ha-icon icon="mdi:${r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function gt(r){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Wo[r]}"/></svg>`}var ve=(r,e)=>S(r,e),Aa=(r,e)=>ve(r,e?"state_on":"state_off");function Ut(r,e){let t=`state_${e}`,n=S(r,t);return n===t?e:n}var Ra=new Set(["door","window","opening","garage_door"]),za=new Set(["playing","paused","on","idle"]);function Fa(r,e){if(e.state!=="on")return ve(r,"state_off");let t=e.attributes.brightness;return typeof t=="number"?`${Math.round(t/255*100)} %`:ve(r,"state_on")}function Ta(r,e){let t=e.attributes.current_position,n=e.state==="opening"||e.state==="closing";return typeof t=="number"&&!n?`${t} %`:Ut(r,e.state)}function Ha(r,e){let t=e.attributes.current_temperature,n=typeof t=="number"?`${B(r,t,1)} ${r?re(r):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${ve(r,"state_off")}`:ve(r,"state_off"):n??Ut(r,e.state)}function Da(r,e){let t=[e.attributes.app_name,e.attributes.media_title,e.attributes.source].find(n=>typeof n=="string"&&n!=="");return za.has(e.state)&&t?t:Ut(r,e.state)}function Pa(r,e){let t=e.state==="on";return Ra.has(String(e.attributes.device_class))?ve(r,t?"state_open":"state_closed"):ve(r,t?"state_detected":"state_clear")}function Ia(r,e){let t=Number(e.state);if(!Number.isFinite(t))return e.state;let n=r?.entities?.[e.entity_id]?.display_precision??1,o=e.attributes.unit_of_measurement;return`${B(r,t,n)}${typeof o=="string"&&o?` ${o}`:""}`}function Q(r,e){if(!e||H(e))return ve(r,"state_unavailable");switch(M(e.entity_id)){case"light":return Fa(r,e);case"switch":case"fan":return Aa(r,e.state==="on");case"cover":return Ta(r,e);case"climate":return Ha(r,e);case"media":return Da(r,e);case"lock":case"camera":return Ut(r,e.state);case"binary":return Pa(r,e);case"sensor":return Ia(r,e);default:return""}}var Ca=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&D([e,t],n.points))??null;function Qn(r,e){return!r||e==null||e===1?r:{...r,level:Math.min(1.5,Math.max(.02,r.level*e))}}function Oa(r,e,t){let n=M(t.entity_id),o=r.states[t.entity_id];if(!n||!o)return null;let i=Ca(e,t.x,t.z),s=i?.area_id?r.areas?.[i.area_id]?.name:void 0,a=n==="camera";return{id:t.entity_id,floorId:e.id,roomId:i?.id??null,x:t.x,z:t.z,y:t.y??Ve(n,e.height,t.mount??null),lamp:n==="light"?t.mount??"ceiling":null,model:a?t.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:a?Wa(r,t.entity_id):void 0,fov:t.fov??void 0,reach:t.reach??void 0,tilt:t.tilt??void 0,rotation:t.rotation??0,icon:t.icon?Gt(t.icon):gt(n),cone:a&&t.cone===!1?!1:void 0,name:t.name||T(r,t.entity_id,s),ownName:t.name||void 0,showName:!!t.show_name,text:Q(r,o),active:ge(o),unavailable:H(o),glow:n==="light"?Qn(Be(o),t.glow_scale):null,show:t.marker??void 0,fixed:!!t.locked}}function Lo(r,e){return e.floors.flatMap(t=>t.placements.map(n=>Oa(r,t,n)).filter(n=>n!==null))}function Xn(r,e){let t=r.entities??{},n=t[e]?.device_id;if(!n)return[];let o=new Set(["motion","occupancy","presence"]);return Object.values(t).filter(i=>i.device_id===n&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>o.has(String(r.states[i]?.attributes.device_class)))}var Wa=(r,e)=>Xn(r,e).some(t=>r.states[t]?.state==="on"),No=r=>r.floors.flatMap(e=>e.placements.map(t=>t.entity_id));function oe(r,e){r.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Bo(r,e){return r.callService(e.split(".")[0],"toggle",{entity_id:e})}var ie=U`
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
`,we=U`
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
`;function jt(r){return r?.themes?.darkMode===!1?"light":"dark"}var La=4,Na=3e3,Ba=8,Va=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Ye=r=>p`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Kt(r)} />
  </svg>`,qt={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},er=r=>p`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,tr=class extends j{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Na)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return S(this.hass,e,t)}call(e,t,n){this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return T(this.hass,e,this.areaName)}nameButton(e){return p`<button class="nf-rp-name" title=${this.t("details")} @click=${()=>oe(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let o=()=>{this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return p`<button
      class="nf-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${H(e)}
      @click=${o}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return m;let t=V(this.hass,e.area_id),n=this.memo,{shown:o,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?zo(this.hass,this.floor,e):{shown:t,more:[]}},s=Kn(this.hass,i).map(w=>w.primary),a=s.length,l=this._showAll?[...o,...s]:o,c=w=>l.filter(R=>w.includes(M(R))).map(R=>this.hass.states[R]),u=c(["light"]),d=c(["cover"]),h=c(["climate"]),g=c(["media"]),b=c(["switch","fan","lock"]),f=c(["sensor","binary"]),x=c(["camera"]);this.hasCameras=x.length>0;let _=c(["scene","script"]),$=this.facts(h),y=u.filter(w=>w.state==="on");return p`<section class="nf-rp" aria-label=${e.name}>
      <header class="nf-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${$.length?p`<p class="nf-rp-facts">${$.join(" \xB7 ")}</p>`:m}
        </div>
        <button class="nf-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="nf-rp-body">
        ${e.area_id?l.length?m:p`<p class="nf-rp-note">${this.t("panel_empty")}</p>`:p`<p class="nf-rp-note">${this.t("panel_no_area")}</p>`}
        ${u.length?this.section("panel_lights",u.map(w=>this.lightRow(w)),p`${y.length<u.length?p`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:u.filter(w=>!H(w)).map(w=>w.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:m}${y.length?p`<button class="nf-btn nf-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(w=>w.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:m}`):m}
        ${d.length?this.section("panel_covers",d.map(w=>this.coverRow(w)),d.length>1?p`<button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:d.filter(w=>!H(w)).map(w=>w.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="nf-btn nf-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:d.filter(w=>!H(w)).map(w=>w.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:m):m}
        ${h.length?this.section("panel_climate",h.map(w=>this.climateRow(w))):m}
        ${g.length?this.section("panel_media",g.map(w=>this.mediaRow(w))):m}
        ${b.length?this.section("panel_switches",b.map(w=>this.switchRow(w))):m}
        ${x.length?this.section("panel_cameras",x.map(w=>this.cameraTile(w))):m}
        ${f.length?this.section("panel_sensors",f.map(w=>this.sensorRow(w))):m}
        ${_.length?this.section("panel_scenes",[p`<div class="nf-rp-scenes">
                  ${_.map(w=>p`<button
                      class="nf-btn"
                      ?disabled=${H(w)}
                      @click=${()=>this.call(M(w.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:w.entity_id})}
                    >
                      ${this.name(w.entity_id)}
                    </button>`)}
                </div>`]):m}
        ${a?p`<button class="nf-btn nf-rp-small nf-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:m}
      </div>
    </section>`}facts(e){let t=[],n=this.room,o=(l,c)=>{let u=_e(this.hass,this.floor,n,l);if(u===null)return null;if(l==="temperature")return`${B(this.hass,Ke(this.hass,u),1)} ${re(this.hass)}`;let d=Gn(this.hass,this.floor,n,l)[0],h=this.hass.states[d]?.attributes.unit_of_measurement??c;return`${B(this.hass,u,1)} ${h}`},i=e.find(l=>typeof l.attributes.current_temperature=="number"),s=o("temperature","\xB0C");s?t.push(s):i&&n.climate?.temperature!=="none"&&t.push(`${B(this.hass,i.attributes.current_temperature,1)} ${re(this.hass)}`);let a=o("humidity","%");return a&&t.push(a),t}section(e,t,n=m){return p`<div class="nf-rp-sec">
      <div class="nf-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",o=t.supported_color_modes??[],i=o.some(h=>h!=="onoff"),s=o.includes("color_temp"),a=o.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,c=t.min_color_temp_kelvin??2200,u=t.max_color_temp_kelvin??6500,d=e.entity_id;return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n?"nf-rp-on":""}">${Ye("light")}</span>
      ${this.nameButton(d)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&i?p`<label class="nf-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(h.target.value)})}
          /></label>`:m}
      ${n&&s?p`<label class="nf-rp-slider nf-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${c}
              max=${u}
              step="50"
              .value=${String(t.color_temp_kelvin??c)}
              @change=${h=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:m}
      ${n&&a?p`<div class="nf-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Va.map(h=>p`<button
                class="nf-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:h})}
              ></button>`)}
          </div>`:m}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,o=e.entity_id,i=H(e);return p`<div class="nf-rp-row">
      <span class="nf-rp-icon">${Ye("cover")}</span>
      ${this.nameButton(o)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      <div class="nf-rp-buttons">
        <button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","open_cover",{entity_id:o})}>${this.t("cover_open")}</button>
        ${n&Ba?p`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:o})}>${this.t("cover_stop")}</button>`:m}
        <button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.askFor(o)&&this.call("cover","close_cover",{entity_id:o})}>${this.t("cover_close")}</button>
      </div>
      ${n&La&&typeof t.current_position=="number"?p`<label class="nf-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:o,position:Number(s.target.value)})}
          /></label>`:m}
      ${n&128&&typeof t.current_tilt_position=="number"?p`<label class="nf-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:o,tilt_position:Number(s.target.value)})}
          /></label>`:n&48?p`<div class="nf-rp-buttons">
              ${n&16?p`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_open")}</button>`:m}
              ${n&32?p`<button class="nf-btn nf-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:o})}>${this.t("cover_tilt_close")}</button>`:m}
            </div>`:m}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,o=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],c=u=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(u/i)*i))});return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${t.hvac_action==="heating"?"nf-rp-on":""}">${Ye("climate")}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${o!==null?p`<div class="nf-rp-stepper nf-rp-wide">
            <button class="nf-btn" aria-label=${this.t("temp_down")} @click=${()=>c(o-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${B(this.hass,o,1)} ${re(this.hass)}</span>
            <button class="nf-btn" aria-label=${this.t("temp_up")} @click=${()=>c(o+i)}>+</button>
          </div>`:m}
      ${l.length>1?p`<div class="nf-rp-chips">
            ${l.map(u=>p`<button
                class="nf-chip"
                aria-pressed=${e.state===u}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:u})}
              >
                ${this.stateLabel(u)}
              </button>`)}
          </div>`:m}
    </div>`}stateOf(e,t=Q(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=M(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,o=H(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${e.state==="playing"?"nf-rp-on":""}">${Ye("media")}</span>
      ${this.nameButton(n)}
      <span class="nf-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?p`<p class="nf-rp-media nf-rp-wide">${i}</p>`:m}
      <div class="nf-rp-buttons nf-rp-wide">
        <button class="nf-btn nf-rp-small" aria-label=${this.t("previous")} ?disabled=${o} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${er(qt.previous)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("play_pause")} ?disabled=${H(e)} @click=${()=>this.call("media_player","media_play_pause",{entity_id:n})}>
          ${er(e.state==="playing"?qt.pause:qt.play)}
        </button>
        <button class="nf-btn nf-rp-small" aria-label=${this.t("next")} ?disabled=${o} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${er(qt.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?p`<label class="nf-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:m}
    </div>`}switchRow(e){let t=e.entity_id,n=M(t),o=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(o,"toggle",{entity_id:t});return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${i?"nf-rp-on":""}">${Ye(n)}</span>
      ${this.nameButton(t)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,s)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!H(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}nf=${this._tick}`:null,o=this.floor?.placements.some(i=>i.entity_id===e.entity_id);return p`<div class="nf-rp-camera-wrap">
      <button class="nf-rp-camera" title=${this.t("camera_live")} @click=${()=>oe(this,e.entity_id)}>
        ${n?p`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:p`<span class="nf-rp-note">${Q(this.hass,e)}</span>`}
        <span class="nf-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${o?p`<button
            class="nf-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${this.t("through_camera")}
          </button>`:m}
    </div>`}sensorRow(e){let t=M(e.entity_id),n=t==="binary"&&e.state==="on";return p`<div class="nf-rp-row">
      <span class="nf-rp-icon ${n?"nf-rp-on":""}">${Ye(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="nf-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[ie,we,U`
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
    `]};customElements.get("nf-room-panel")||customElements.define("nf-room-panel",tr);function _t(r,e){return e&&r.states[e]?e:Object.keys(r.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}var Ka=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Ga=new Map([["smoke","smoke"],["gas","gas"],["carbon_monoxide","co"],["moisture","water"]]),Vo=(r,e)=>{if(e.startsWith("binary_sensor."))return Ga.get(String(r.states[e]?.attributes.device_class))};function Ko(r,e,t){let n=[];for(let i of e.floors)for(let s of i.rooms){let a=V(r,s.area_id).filter(l=>Vo(r,l));a.length>0&&n.push({floorId:i.id,roomId:s.id,sensors:a})}let o=e.settings.rain_warning!==!1;return{rooms:n,alarms:Object.keys(r.states).filter(i=>i.startsWith("alarm_control_panel.")),weather:o?_t(r,t??e.settings.weather_entity):null}}function Go(r){let e=r.rooms.flatMap(t=>t.sensors).concat(r.alarms);return r.weather&&e.push(r.weather),e}function Ua(r,e){let t=[];for(let{floorId:n,roomId:o,sensors:i}of e.rooms)for(let s of i){let a=Vo(r,s);a&&r.states[s]?.state==="on"&&t.push({kind:a,entity:s,roomId:o,floorId:n})}return t}var ja=(r,e)=>{let t=be(r,e,"window");return Math.max(t.open,t.tilt,t.open2,t.tilt2)>=.5};function qa(r,e,t,n){let o=t.weather?r.states[t.weather]?.state:void 0;if(!o||!Ka.has(o))return[];let i=[];for(let s of e.floors)for(let a of s.openings){let l=n.get(a.id);a.type!=="window"||!l||!ja(r,l)||i.push({kind:"window_rain",entity:l.contact??l.tilt??l.contact2??a.id,roomId:a.room_id,floorId:s.id})}return i}function Za(r,e){let t=[];for(let n of e.alarms){let o=r.states[n]?.state;o==="triggered"&&t.push({kind:"alarm",entity:n,roomId:null,floorId:null}),o==="pending"&&t.push({kind:"alarm_pending",entity:n,roomId:null,floorId:null})}return t}function Uo(r,e,t,n){return[...Ua(r,t),...qa(r,e,t,n),...Za(r,t)]}var Ya={smoke:[1,.2,.25],gas:[1,.2,.25],co:[1,.2,.25],alarm:[1,.2,.25],water:[.2,.6,1],window_rain:[.35,.72,1],alarm_pending:[1,.62,.2]},jo=r=>Ya[r];function nr(r,e,t){let n=r?T(r,t.entity):t.entity,o=S(r,`alert_${t.kind}`,{name:n}),i=t.roomId===null?void 0:e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId);return i?`${i.name} \xB7 ${o}`:o}var K=(r,e)=>[r[0]-e[0],r[1]-e[1]],ye=(r,e)=>[r[0]+e[0],r[1]+e[1]],se=(r,e)=>[r[0]*e,r[1]*e],X=(r,e)=>r[0]*e[0]+r[1]*e[1],xe=(r,e)=>r[0]*e[1]-r[1]*e[0],he=r=>Math.hypot(r[0],r[1]),ke=r=>{let e=he(r)||1;return[r[0]/e,r[1]/e]},rr=r=>[-r[1],r[0]],or=r=>[r[1],-r[0]];function qo(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Ja(r,e){let t=r.map(n=>({...n}));for(let n of e){let o=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):t.push({...n})}return t}function Qa(r,e,t){if(r.a===e.b)return!1;let n=ke(K(t[r.b],t[r.a])),o=ke(K(t[e.b],t[e.a]));return Math.abs(xe(n,o))>1e-6||X(n,o)<=0||r.free||e.free?!1:r.height===e.height&&r.exterior===e.exterior&&r.roomLeft===e.roomLeft&&r.roomRight===e.roomRight&&Math.abs(r.left-e.left)<=1e-9&&Math.abs(r.right-e.right)<=1e-9}function Zo(r,e,t=new Set){let n=r.slice();for(;;){let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b])o.set(l,[...o.get(l)??[],a])});let i=null;for(let[s,a]of o){if(a.length!==2||t.has(s))continue;let l=n[a[0]].b===s?n[a[0]]:qo(n[a[0]]),c=n[a[1]].a===s?n[a[1]]:qo(n[a[1]]);if(!Qa(l,c,e))continue;let u={...l,b:c.b,sources:Ja(l.sources,c.sources)};i=[...n.filter((d,h)=>h!==a[0]&&h!==a[1]),u];break}if(!i)return n;n=i}}function Yo(r,e){let t=new Map;r.forEach((o,i)=>{let s=ke(K(e[o.b],e[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:se(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[o,i]of t){let s=e[o];i.sort((l,c)=>l.angle-c.angle);for(let l of i)n.set(l.key,{left:ye(s,se(rr(l.d),l.left)),right:ye(s,se(or(l.d),l.right))});if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=ye(s,se(rr(l.d),l.left)),h=ye(s,se(or(u.d),u.right)),g=xe(l.d,u.d);if(Math.abs(g)<1e-4)return;let b=ye(d,se(l.d,xe(K(h,d),u.d)/g));he(K(b,s))>a||(n.get(l.key).left=b,n.get(u.key).right=b)})}return n}function Jo(r,e){let t=r.filter((n,o)=>he(K(n,r[(o+1)%r.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((o,i)=>{let s=t[(i+t.length-1)%t.length],a=t[(i+1)%t.length],[l,c]=[K(o,s),K(a,o)];return Math.abs(xe(ke(l),ke(c)))<1e-7&&X(l,c)>0});if(n===-1)return t;t=t.filter((o,i)=>i!==n)}}function Xa(r){let e=[];return{points:e,idOf(t){let n=e.findIndex(o=>Math.abs(o[0]-t[0])<=r&&Math.abs(o[1]-t[1])<=r);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function el(r,e){let t=[];for(let n of r){let o=n.points;if(o.length<3||Math.abs(We(o))<1e-6)continue;let i=We(o)>0,s=o.map(a=>e.idOf(a));s.forEach((a,l)=>{let c=s[(l+1)%s.length];a!==c&&t.push(i?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function tl(r,e,t){let n=[];for(let o of r){let[i,s]=[e[o.u],e[o.v]],a=K(s,i),l=he(a),c=se(a,1/l),u=e.map((h,g)=>({id:g,rel:K(h,i)})).filter(({id:h,rel:g})=>h!==o.u&&h!==o.v&&X(g,c)>t&&X(g,c)<l-t&&Math.abs(xe(c,g))<=t).map(({id:h,rel:g})=>({t:X(g,c),id:h})).sort((h,g)=>h.t-g.t),d=[{t:0,id:o.u},...u,{t:l,id:o.v}];for(let h=0;h+1<d.length;h++){let[g,b]=[d[h],d[h+1]];n.push({u:g.id,v:b.id,room:o.room,edge:o.edge,t0:o.forward?g.t:l-b.t,t1:o.forward?b.t:l-g.t})}}return n}var Qo=r=>({room_id:r.room,edge:r.edge,t0:r.t0,t1:r.t1});function nl(r,e){let t=new Map(r.map(i=>[i.id,i])),n=new Map;for(let i of e){let s=`${i.room}:${i.edge}`;n.set(s,[...n.get(s)??[],i.t0].sort((a,l)=>a-l))}let o=i=>{let s=t.get(i.room)?.wall_heights?.[i.edge];return Array.isArray(s)?s[(n.get(`${i.room}:${i.edge}`)??[]).indexOf(i.t0)]??null:s};return{heightOf(i){let s=i.map(o).filter(a=>typeof a=="number"&&a>0);return s.length?Math.min(...s):void 0},thicknessOf(i){let s=i.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return s.length?Math.max(...s):void 0},hasNoWall:i=>i.some(s=>o(s)===0)}}function rl(r,e,t,n){let o=nl(e,r),i=new Map;for(let l of r){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;i.set(c,[...i.get(c)??[],l])}let s=[],a=[];for(let l of i.values()){let c=l[0],u=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==u&&h.room!==c.room&&n.push(`overlap:${c.room}:${h.room}`);let d=u?[c,u]:[c];if(o.hasNoWall(d)){u&&a.push([c.room,u.room]);continue}if(u){let h=o.thicknessOf(d)??t.interior;s.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:d.map(Qo),height:o.heightOf(d)})}else s.push({a:c.u,b:c.v,left:0,right:o.thicknessOf(d)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Qo(c)],height:o.heightOf(d)})}return{drafts:s,open:a}}function ol(r,e){let t=n=>ke(K(e[n.b],e[n.a]));for(let n of r){if(n.exterior||n.free)continue;let o=new Set;for(let s of[n.a,n.b])for(let a of r)!a.exterior||a.free||a.a!==s&&a.b!==s||Math.abs(xe(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?o.add("left"):a.roomLeft===n.roomRight&&o.add("right"));if(o.size!==1)continue;let i=n.left+n.right;[n.left,n.right]=o.has("left")?[0,i]:[i,0]}}var il=(r,e)=>{let t=i=>Math.round(i*100),[n,o]=r[0]<e[0]||r[0]===e[0]&&r[1]<=e[1]?[r,e]:[e,r];return`w_${t(n[0])}_${t(n[1])}_${t(o[0])}_${t(o[1])}`};function Zt(r,e,t=[]){let n=e.eps??.005,o=[],i=Xa(n),s=el(r,i),a=t.filter(_=>Math.hypot(_.b[0]-_.a[0],_.b[1]-_.a[1])>.05),l=a.map(_=>[i.idOf(_.a),i.idOf(_.b)]),c=new Set;for(let _ of r){let $=_.points;$.length<3||(_.wall_splits??[]).forEach((y,w)=>{if(!y||w>=$.length)return;let R=$[w],z=K($[(w+1)%$.length],R),P=he(z);for(let W of y)W>n&&W<P-n&&c.add(i.idOf(ye(R,se(z,W/P))))})}let u=tl(s,i.points,n),{drafts:d,open:h}=rl(u,r,e,o);ol(d,i.points);let g=d;a.forEach((_,$)=>{let[y,w]=l[$];if(y===w)return;let R=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],z=r.find(W=>W.points.length>=3&&D(R,W.points))?.id??null,P=(_.thickness??e.interior)/2;g.push({free:_.id,a:y,b:w,left:P,right:P,exterior:!1,roomLeft:z,roomRight:z,sources:[],height:typeof _.height=="number"&&_.height>0?_.height:void 0})});let b=Zo(g,i.points,c),f=Yo(b,i.points);return{walls:b.map((_,$)=>{let[y,w]=[i.points[_.a],i.points[_.b]],[R,z]=[f.get(`${$}:a`),f.get(`${$}:b`)],P=Jo([R.right,z.left,w,z.right,R.left,y],1e-6);return{id:il(y,w),a:[y[0],y[1]],b:[w[0],w[1]],left:_.left,right:_.right,exterior:_.exterior,roomLeft:_.roomLeft,roomRight:_.roomRight,sources:_.sources,footprint:P,..._.free?{free:_.free}:{},..._.height!==void 0?{height:_.height}:{}}}),warnings:[...new Set(o)],open:h}}var Yt=r=>r&&r!=="none"?r:null,Jt=(r,e)=>{e&&!r.includes(e)&&r.push(e)};function Qt(r,e=t=>Yt(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors.flatMap(o=>o.furniture)){let o=e(n);if(n.type==="meter")t.grid??=o,t.gridExport??=Yt(n.export);else if(n.type==="inverter")Jt(t.solar,o);else if(n.type==="home_battery"){let i=Yt(n.charge);Jt(t.battery,o),Jt(t.charge,i),Jt(t.soc,Yt(n.soc)),(o||i)&&t.batteries.push({power:o,charge:i})}}return t}function Z(r,e=!1){let t=r?Number(r.state):NaN;if(!Number.isFinite(t))return null;let n={kW:1e3,MW:1e6}[String(r.attributes.unit_of_measurement??"W")]??1;return e?-t*n:t*n}var sl=(r,e)=>e.startsWith("sensor.")&&r.states[e]?.attributes.device_class==="power";function ir(r,e){if(sl(r,e))return e;let t=r.entities?.[e]?.device_id;if(!t)return null;let n=Vn(r,t),o=n?Ge(r,e):null,i=Lt(r,t).filter(s=>s!==e);return(n?i.find(s=>o!==null&&Ge(r,s)===o):i[0])??null}function Xt(r,e){let{grid:t,solar:n,battery:o}=e.energy,i=new Set([t,n,o].filter(a=>!!a)),s=[];for(let a of e.floors)for(let l of a.placements){let c=ir(r,l.entity_id);!c||i.has(c)||(i.add(c),s.push({id:l.entity_id,powerEntity:c,floorId:a.id,x:l.x,z:l.z,power:Math.max(0,Z(r.states[c])??0)}))}return s}var Xo=r=>{let e=r.filter(t=>t!==null);return e.length?e.reduce((t,n)=>t+n,0):null};function al(r,e,t){let n=e.grid??t.grid,o=n?Z(r.states[n],e.grid_invert):null;if(!e.grid&&t.gridExport){let i=Math.max(0,Z(r.states[t.gridExport])??0);return Math.max(0,o??0)-i}return o}function ll(r,e,t){return e.solar?Z(r.states[e.solar]):t.solar.length?Xo(t.solar.map(n=>Z(r.states[n]))):null}function cl(r,e,t){return e.battery?Z(r.states[e.battery],e.battery_invert):Xo(t.batteries.map(n=>n.charge?(n.power?Math.max(0,Z(r.states[n.power])??0):0)-Math.max(0,Z(r.states[n.charge])??0):n.power?Z(r.states[n.power],e.battery_invert):null))}function en(r,e,t,n=Qt(e)){let o=e.energy,i=al(r,o,n),s=ll(r,o,n),a=cl(r,o,n),l=(o.battery_soc?[o.battery_soc]:n.soc).map(g=>Number(r.states[g]?.state)).filter(Number.isFinite),c=l.length?l.reduce((g,b)=>g+b,0)/l.length:null,u=o.tariff?r.states[o.tariff]:void 0,d=Number(u?.state),h=o.consumption?Z(r.states[o.consumption]):null;return h===null&&(i!==null||s!==null||a!==null)&&(h=(i??0)+Math.max(0,s??0)+(a??0)),h===null&&t.length>0&&(h=t.reduce((g,b)=>g+b.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:a,soc:c,tariff:u&&Number.isFinite(d)?{value:d,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:h===null?null:Math.max(0,h)}}var tn=["neon","blueprint","day"],bt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var nn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[16,[.2,.45,1]],[20,[.15,.85,.75]],[22.5,[.95,.8,.3]],[26,[1,.28,.18]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[.95,.6,.2]],[45,[.3,.88,.5]],[60,[.2,.78,1]],[75,[.32,.4,.98]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.88,.5]],[800,[.98,.84,.3]],[1200,[1,.5,.2]],[1600,[.98,.25,.25]]]}},ul=(r,e,t)=>[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t,r[2]+(e[2]-r[2])*t];function ei(r,e){let{stops:t}=nn[r],n=t.findIndex(([l])=>e<=l);if(n===-1)return t[t.length-1][1];if(n===0)return t[0][1];let[o,i]=t[n-1],[s,a]=t[n];return ul(i,a,(e-o)/(s-o))}function ti(r,e,t){let n=new Map;for(let o of e.floors)for(let i of o.rooms){let s=_e(r,o,i,t);s!==null&&n.set(i.id,s)}return n}function ni(r){let{stops:e}=nn[r],t=e[0][0],n=e[e.length-1][0]-t;return`linear-gradient(90deg, ${e.map(([i,s])=>`rgb(${s.map(a=>Math.round(a*255)).join(",")}) ${Math.round((i-t)/n*100)}%`).join(", ")})`}function Se(r,e){if(!Dn(e))return S(r,`furn_${e}`);let t=Y(e);return t?ro(t,r?.language??navigator.language):S(r,"pack_missing_item")}var dl=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]),rn=r=>r&&r!=="none"?r:null,ri=r=>r.trim().toLowerCase();function hl(r,e){let t=ri(e);if(!t||!r.types)return null;let n=r.types.map(s=>({word:ri(s.state),vehicle:s.vehicle})),o=n.find(s=>s.word===t),i=n.find(s=>s.word!==""&&t.includes(s.word));return(o??i)?.vehicle??null}function sr(r,e){if(e.type!=="parking")return null;let t=rn(e.entity);if(t!==null){let i=r.states[t]?.state;if(i===void 0||!dl.has(i.toLowerCase()))return null}let n=e.vehicle??null,o=rn(e.type_entity);return o!==null&&e.types&&e.types.length>0&&(n=hl(e,r.states[o]?.state??"")??n),n!==null&&Y(n)?n:null}function ar(r,e){let t=new Map;for(let n of e.floors.flatMap(o=>o.furniture)){let o=sr(r,n);o&&t.set(n.id,o)}return t}function oi(r){let e=[];for(let t of r.flatMap(n=>n.furniture))t.type==="parking"&&e.push(rn(t.entity),rn(t.type_entity));return e.filter(t=>t!==null)}function ii(r,e){let t=Y(e);if(!t)return null;let n=r.scale??1,[o,i,s]=t.size.map(a=>a*n);return{id:`${r.id}:vehicle`,type:e,x:r.x,z:r.z,rotation:r.rotation,w:o,d:i,h:s,variant:r.variant??null,entity:null,power:null}}var pl={sunny:{cloud:0},"clear-night":{cloud:0},partlycloudy:{cloud:.4},cloudy:{cloud:.85},fog:{fog:.9,cloud:.5},rainy:{rain:.5,cloud:.8},pouring:{rain:1,cloud:1,wind:.3},"lightning-rainy":{rain:.75,cloud:1,lightning:!0,wind:.35},lightning:{cloud:.85,lightning:!0},hail:{hail:.8,rain:.3,cloud:1},snowy:{snow:.7,cloud:.85},"snowy-rainy":{snow:.45,rain:.3,cloud:.95},windy:{wind:.7,cloud:.25},"windy-variant":{wind:.7,cloud:.65},exceptional:{cloud:.6,wind:.5}},Je=r=>typeof r=="number"&&Number.isFinite(r)?r:typeof r=="string"&&r.trim()!==""&&Number.isFinite(Number(r))?Number(r):null,on=r=>Math.min(1,Math.max(0,r));function si(r,e){switch(e){case"m/s":return r*3.6;case"mph":return r*1.609;case"kn":return r*1.852;case"ft/s":return r*1.097;default:return r}}function fl(r){let e=Je(r);if(e!==null)return(e%360+360)%360;if(typeof r!="string")return null;let n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"].indexOf(r.trim().toUpperCase().replace("O","E"));return n<0?null:n*22.5}function ai(r,e){let t=e?r.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=pl[t.state];if(!n)return null;let o=t.attributes,i={rain:n.rain??0,snow:n.snow??0,hail:n.hail??0,fog:n.fog??0,cloud:n.cloud??0,wind:n.wind??0,windFrom:fl(o.wind_bearing),lightning:n.lightning??!1},s=Je(o.cloud_coverage);s!==null&&(i.cloud=Math.max(on(s/100),i.rain||i.snow?.6:0));let a=Je(o.wind_speed);a!==null&&(i.wind=Math.max(i.wind,on(si(a,o.wind_speed_unit)/70)));let l=Je(o.wind_gust_speed);l!==null&&(i.wind=Math.max(i.wind,on(si(l,o.wind_speed_unit)/100)));let c=Je(o.precipitation);if(c!==null&&c>0&&(i.rain>0||i.snow>0)){let g=on(.25+c/8);i.rain>0&&(i.rain=Math.max(i.rain*.6,g)),i.snow>0&&(i.snow=Math.max(i.snow*.6,g))}let u=Je(o.temperature),d=o.temperature_unit??r.config?.unit_system?.temperature,h=u===null?null:d==="\xB0F"?(u-32)*5/9:u;return h!==null&&h<=.5&&i.rain>0&&i.snow===0&&(i.snow=i.rain*.6,i.rain*=.4),i}function li(r,e){let t=new Set(e??["rain","snow","clouds","lightning","sky"]);return{...r,rain:t.has("rain")?r.rain:0,hail:t.has("rain")?r.hail:0,snow:t.has("snow")?r.snow:0,fog:t.has("fog")?r.fog:0,cloud:t.has("clouds")?r.cloud:0,lightning:t.has("lightning")&&r.lightning}}var lr=Math.PI/180,sn=r=>Math.tan(Math.min(80,Math.max(0,r))*lr);function ci(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function $e(r){let{x0:e,x1:t,z0:n,z1:o}=ci(r);return r.axis==="x"?{u0:e,u1:t,w:o-n,at:(i,s)=>[i,r.flip?o-s:n+s]}:{u0:n,u1:o,w:t-e,at:(i,s)=>[r.flip?t-s:e+s,i]}}var vt=Math.tan(30*lr);function ui(r,e,t,n,o){let i=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,o>1e-6?2.4/o:r*.3),a=e+i*n,l=t+s*o,c=Math.min(r-s,Math.max(i,(l-a+vt*(r-s+i))/(2*vt))),u=a+(c-i)*vt;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=i?e+h*n:h<=c?a+(h-i)*vt:h<=r-s?l+(r-s-h)*vt:t+(r-h)*o}}function Qe(r){let e=$e(r).w,[t,n]=[r.eave_a,r.eave_b],[o,i]=[sn(r.pitch_a),sn(r.pitch_b)];switch(r.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*o,y:s=>t+s*o};case"mansard":{let s=ui(e,t,n,o,i);return{vr:s.vr,rh:s.rh,y:s.y}}default:{let s=o+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(o+i))):e/2;return{vr:s,rh:t+s*o,y:a=>a<=s?t+a*o:n+(e-a)*i}}}}function cr(r,e,t){let n=$e(e),o=r.floors.flatMap(u=>u.rooms.filter(d=>d.points.length>=3&&u.elevation+u.height>e.base+.05)),i=u=>u.some(d=>o.some(h=>D(d,h.points))),s=.35,a=[.15,.5,.85].map(u=>n.u0+(n.u1-n.u0)*u),l=[.15,.5,.85].map(u=>n.w*u),c=u=>u?0:t;return{a:c(i(a.map(u=>n.at(u,-s)))),b:c(i(a.map(u=>n.at(u,n.w+s)))),u0:c(i(l.map(u=>n.at(n.u0-s,u)))),u1:c(i(l.map(u=>n.at(n.u1+s,u))))}}var Me=Math.PI/180,pe=(r,e)=>[r[0]-e[0],r[1]-e[1],r[2]-e[2]];var Xe=r=>Math.hypot(r[0],r[1],r[2]),Pe=r=>{let e=Xe(r)||1;return[r[0]/e,r[1]/e,r[2]/e]},fi=(r,e)=>[r[1]*e[2]-r[2]*e[1],r[2]*e[0]-r[0]*e[2],r[0]*e[1]-r[1]*e[0]];var gi=.25;function _i(r,e,t,n,o,i,s){let a=o-t>=i-n,l=a?o-t:i-n;return{key:`${r}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?i-n:o-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function bi(r,e){let t=Pe(fi(r,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var vi=r=>{let e=Pe([-r[0],0,-r[2]]);return[e[0],e[2]]};function wt(r,e,t,n,o,i,s,a){let l=Pe(pe(o,n)),c=Pe(pe(i,n));return{key:r,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:bi(l,c),lu:Xe(pe(o,n)),ls:Xe(pe(i,n)),pitch:s,span:a,facing:vi(c)}}function mi(r,e,t,n,o,i){let s=Xe(pe(o,n));if(s<.3)return null;let a=Pe(pe(o,n)),l=pe(i,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],d=Xe(u);if(d<.3)return null;let h=Pe(u),g=b=>{let f=Math.min(1,Math.max(0,b/d));return[c*f,s-(s-c)*f]};return{key:r,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:bi(a,h),lu:s,ls:d,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/Me,span:g,facing:vi(h)}}function vl(r,e){let t=$e(r),n=Qe(r),o=($,y,w)=>{let[R,z]=t.at($,y);return[R,w,z]},[i,s]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=n.y(-i),d=n.y(t.w+s);if(r.shape==="flat"||r.shape==="parapet"){let[$,y]=[t.at(a,-i),t.at(l,t.w+s)];return[_i(r.id,r.id,Math.min($[0],y[0]),Math.min($[1],y[1]),Math.max($[0],y[0]),Math.max($[1],y[1]),r.eave_a+gi)]}if(r.shape==="pent")return[wt(`${r.id}:a`,r.id,"a",o(a,-i,u),o(l,-i,u),o(a,t.w+s,d),r.pitch_a,()=>[0,c])];let h=r.shape==="hip"||r.shape==="pyramid",g=(t.u1-t.u0)/2,b=r.shape==="pyramid"?g:h?Math.min(g,Math.min(n.vr,t.w-n.vr)||t.w/2):0,f=h?t.u0+b-a:0,x=h?l-(t.u1-b):0,_=[];if(n.vr>.3){let $=Math.hypot(n.vr+i,n.rh-u);_.push(wt(`${r.id}:a`,r.id,"a",o(a,-i,u),o(l,-i,u),o(a,n.vr,n.rh),r.pitch_a,y=>[f*(y/$),c-x*(y/$)]))}if(t.w-n.vr>.3){let $=Math.hypot(t.w+s-n.vr,n.rh-d);_.push(wt(`${r.id}:b`,r.id,"b",o(l,t.w+s,d),o(a,t.w+s,d),o(l,n.vr,n.rh),r.pitch_b,y=>[x*(y/$),c-f*(y/$)]))}if(h){let $=mi(`${r.id}:c`,r.id,"c",o(a,t.w+s,d),o(a,-i,u),o(t.u0+b,n.vr,n.rh)),y=mi(`${r.id}:d`,r.id,"d",o(l,-i,u),o(l,t.w+s,d),o(t.u1-b,n.vr,n.rh));_.push(...[$,y].filter(w=>w!==null))}return _}function an(r){return r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function ln(r){let e=r.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>vl(y,cr(r,y,y.overhang??e.overhang)));let t=an(r);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(w=>w[0])),o=t.rooms.flatMap(y=>y.points.map(w=>w[1])),i=r.settings.wall_exterior+e.overhang,[s,a]=[Math.min(...n)-i,Math.max(...n)+i],[l,c]=[Math.min(...o)-i,Math.max(...o)+i],u=t.elevation+t.height;if(e.type==="flat")return[_i("main",null,s,l,a,c,u+gi)];let d=a-s>=c-l,h=e.ridge==="short"?!d:d,g=(h?c-l:a-s)/2,b=g*Math.tan(e.pitch*Me),f=(y,w,R)=>h?[y,u+R,(l+c)/2+w]:[(s+a)/2+w,u+R,y],[x,_]=h?[s,a]:[l,c],$=()=>[0,_-x];return[wt("main:a",null,"a",f(x,-g,0),f(_,-g,0),f(x,0,b),e.pitch,$),wt("main:b",null,"b",f(x,g,0),f(_,g,0),f(x,0,b),e.pitch,$)]}function yt(r,e){let t=[];for(let n of r.floors.filter(o=>!e||o.id===e)){let{walls:o}=Zt(n.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},n.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let[s,a]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],l=Math.hypot(s,a);if(l<1.2)continue;let[c,u]=[a/l,-s/l],d=Math.min(n.height,i.height??n.height),h=(g,b,f,x)=>t.push({key:g,section:null,side:"top",flat:!1,o:b,eu:f,es:[0,1,0],n:x,lu:l,ls:d,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${i.id}`,[i.a[0]+c*i.right,n.elevation,i.a[1]+u*i.right],[s/l,0,a/l],[c,0,u]),i.free&&h(`wall:${n.id}:${i.id}:back`,[i.b[0]-c*i.left,n.elevation,i.b[1]-u*i.left],[-s/l,0,-a/l],[-c,0,-u])}}return t}var et="ground";function xt(r){let e=r.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??r.floors[0]??null}function ur(r,e){let t=(e.rotation??0)*Me,n=[Math.cos(t),0,Math.sin(t)],o=[-Math.sin(t),0,Math.cos(t)],i=xt(r),s=n[0]*e.u+o[0]*e.v,a=n[2]*e.u+o[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:dt(i,s,a)):e.base??0;return{key:et,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function dr(r,e,t=ln(r)){return e.face===et?ur(r,e):e.face.startsWith("wall:")?yt(r,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}var hr=1.13,pr=1.72,kt=.025,Ee=.07;function cn(r){let e=r.module_w||hr,t=r.module_h||pr;return r.portrait===!1?[t,e]:[e,t]}function wi(r){return r.layout?.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function yi(r,e){return r.flat?Math.min(45,Math.max(0,e.tilt??15))*Me:r.wall?Math.min(90,Math.max(0,e.tilt??0))*Me:0}function fr(r,e){let[,t]=cn(e),n=yi(r,e);return r.wall?t*Math.cos(n)+kt:r.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+kt}function St(r,e,t=!1){let[n,o]=cn(e),i=yi(r,e),s=o*Math.cos(i),a=fr(r,e),l=wi(e),c=Math.max(1,...l),u=new Set(e.skip??[]),d=(b,f,x)=>[0,1,2].map(_=>r.o[_]+r.eu[_]*b+r.es[_]*f+r.n[_]*x),h=(b,f)=>{if(r.unbounded)return!0;if(f<-1e-6||f>r.ls+1e-6)return!1;let[x,_]=r.span(f);return b>=x-1e-6&&b<=_+1e-6},g=[];return l.forEach((b,f)=>{let x=e.align==="right"?c-b:e.align==="center"?(c-b)/2:0;for(let _=0;_<b;_++){let $=`${f}:${_}`,y=u.has($);if(y&&!t)continue;let w=e.u+(_+x)*(n+kt),R=w+n,z=e.v+f*a,P=z+(r.flat||r.wall?s:o);if([[w,z],[R,z],[R,P],[w,P]].every(([W,F])=>h(W,F)))if(r.wall&&i>.001){let W=Ee+o*Math.sin(i),[F,C]=e.flip?[W,Ee]:[Ee,W],L=[d(w,z,F),d(R,z,F),d(R,P,C),d(w,P,C)],q=e.flip?z:P;g.push({corners:L,posts:[w+.05,R-.05].map(ee=>[d(ee,q,0),d(ee,q,W)]),cell:$,skipped:y})}else if(!r.flat)g.push({corners:[d(w,z,Ee),d(R,z,Ee),d(R,P,Ee),d(w,P,Ee)],posts:[],cell:$,skipped:y});else{let F=.15+o*Math.sin(i),[C,L]=e.flip?[P,z]:[z,P],q=[d(w,C,.15),d(R,C,.15),d(R,L,F),d(w,L,F)],ee=[w+.05,R-.05].flatMap(ne=>[[d(ne,C,0),d(ne,C,.15)],[d(ne,L,0),d(ne,L,F)]]);g.push({corners:q,posts:ee,cell:$,skipped:y})}}}),g}var Ie={solar:[255,196,46],battery:[74,222,128],import:[248,96,120],export:[56,220,245],house:[150,170,255],wallbox:[80,175,255]},tt=15;function nt(r,e){let t=[];for(let n of r.floors)for(let o of n.furniture)o.type===e&&t.push({id:o.id,floorId:n.id,x:o.x,z:o.z,y:Math.max(.4,Math.min(1.4,o.h*.8))});return t}function $l(r){if(!r?.rooms.length)return null;let e=0,t=0,n=0;for(let o of r.rooms)for(let[i,s]of o.points)e+=i,t+=s,n++;return n?{floorId:r.id,x:e/n,z:t/n,y:1}:null}function un(r){return nt(r,"meter")[0]??nt(r,"inverter")[0]??$l(xt(r))}function Ml(r,e){let t=nt(r,"grid_point")[0];if(t)return t;let n=r.floors.find(a=>a.id===e.floorId);if(!n?.rooms.length)return null;let o=1/0,i=-1/0,s=-1/0;for(let a of n.rooms)for(let[l,c]of a.points)o=Math.min(o,l),i=Math.max(i,l),s=Math.max(s,c);return{floorId:e.floorId,x:Math.max(o,Math.min(i,e.x)),z:s+3,y:.2}}var mr=r=>Math.max(1,r.rows*r.cols-(r.skip?.length??0));function El(r,e,t){let n=e.settings.roof.solar??[],o=new Map,i=0,s=[];for(let c of n){let u=c.entity&&c.entity!=="none"?Z(r.states[c.entity]):null;u!==null?(o.set(c.id,Math.max(0,u)),i+=Math.max(0,u)):s.push(c)}let a=Math.max(0,(t??0)-i),l=s.reduce((c,u)=>c+mr(u),0);for(let c of s)o.set(c.id,l?a*mr(c)/l:0);return o}function Al(r,e){if(e.face===et)return xt(r)?.id??null;let t=/^wall:([^:]+):/.exec(e.face);return t?t[1]:an(r)?.id??null}function xi(r,e,t=Xt(r,e)){let n=en(r,e,t),o=[],i=[],s=un(e),a=n.consumption??0,l=n.grid===null||a<=0?null:Math.max(0,Math.min(1,1-Math.max(0,n.grid)/a));if(!s)return{arcs:o,sparks:i,summary:n,autarky:l};let c=nt(e,"inverter")[0]??s,u=[...ln(e),...yt(e)],d=El(r,e,n.solar);for(let f of e.settings.roof.solar??[]){let x=dr(e,f,u);if(!x)continue;let _=St(x,f);if(!_.length)continue;let $=d.get(f.id)??0,y=mr(f)*(f.wp??400),w=$>tt?Math.pow(Math.min(1,$/y),.6):0,R=Al(e,f);if(i.push({floorId:R,quads:_.map(L=>L.corners),level:w}),$<=tt)continue;let z=0,P=0,W=0;for(let L of _)for(let q of L.corners)z+=q[0],P+=q[1],W+=q[2];let F=_.length*4,C=e.floors.find(L=>L.id===R)?.elevation??0;o.push({key:`solar:${f.id}`,from:{floorId:R,x:z/F,y:P/F-C+.1,z:W/F},to:c,power:$,color:Ie.solar})}let h=nt(e,"home_battery")[0];if(h&&n.battery!==null&&Math.abs(n.battery)>tt){let f=n.battery>0;o.push({key:"battery",from:f?h:s,to:f?s:h,power:Math.abs(n.battery),color:Ie.battery})}c!==s&&(n.solar??0)>tt&&o.push({key:"inverter",from:c,to:s,power:n.solar??0,color:Ie.solar});let g=Ml(e,s);if(g&&n.grid!==null&&Math.abs(n.grid)>tt){let f=n.grid>0;o.push({key:"grid",from:f?g:s,to:f?s:g,power:Math.abs(n.grid),color:f?Ie.import:Ie.export})}let b=new Set(nt(e,"wallbox").map(f=>`${f.floorId}:${f.x.toFixed(1)}:${f.z.toFixed(1)}`));for(let f of t){if(f.power<=tt)continue;let x=f.wallbox||b.has(`${f.floorId}:${f.x.toFixed(1)}:${f.z.toFixed(1)}`);o.push({key:`use:${f.id}`,from:s,to:{floorId:f.floorId,x:f.x,z:f.z,y:.9},power:f.power,color:x?Ie.wallbox:Ie.house})}return{arcs:o,sparks:i,summary:n,autarky:l}}var J=r=>r&&r!=="none"?r:null,dn=r=>{let e=Number(r?.state);return r&&Number.isFinite(e)?e:null},ki=(r,e)=>r?.attributes?.[e],ae=(r,...e)=>e.some(t=>r.includes(t));function Rl(r,e){if(!e)return[];let t=r.entities?.[e]?.device_id;return t?Object.values(r.entities??{}).filter(n=>n.device_id===t&&!n.hidden).map(n=>n.entity_id).filter(n=>r.states[n]):[e]}function le(r,e,t,n){return e&&r.states[e]?e:t.find(o=>n(o,r.states[o]))??null}function Si(r,e){let t=e.car??{},n=J(t.device)??J(t.tracker)??J(e.entity),o=Rl(r,n);if(!o.length&&!J(t.soc))return null;let i=k=>k.split(".")[0],s=k=>String(ki(k,"device_class")??""),a=k=>String(ki(k,"unit_of_measurement")??""),l=le(r,J(t.soc),o,(k,I)=>i(k)==="sensor"&&a(I)==="%"&&(s(I)==="battery"||ae(k,"battery_level","soc","state_of_charge","ladezustand"))&&!ae(k,"usable")),c=le(r,J(t.range),o,(k,I)=>i(k)==="sensor"&&(s(I)==="distance"||ae(k,"range","reichweite"))&&!ae(k,"odometer","ideal","elevation","kilometerstand")),u=le(r,null,o,(k,I)=>i(k)==="sensor"&&s(I)==="power"&&ae(k,"charg","lade")),d=J(t.charging),h=le(r,d&&i(d)==="binary_sensor"?d:null,o,(k,I)=>i(k)==="binary_sensor"&&(s(I)==="battery_charging"||ae(k,"charging","charger","laden"))),g=le(r,J(t.plugged),o,(k,I)=>i(k)==="binary_sensor"&&(s(I)==="plug"||ae(k,"plug","cable","kabel"))),b=le(r,J(t.lock),o,k=>i(k)==="lock"),f=le(r,J(t.climate),o,k=>i(k)==="climate"),x=le(r,d&&/^(switch|input_boolean)\./.test(d)?d:null,o,k=>i(k)==="switch"&&ae(k,"charg","laden")&&!ae(k,"port","klappe")),_=le(r,J(t.tracker),o,k=>i(k)==="device_tracker")??(J(e.entity)?.startsWith("device_tracker.")?J(e.entity):null),$=le(r,null,o,(k,I)=>i(k)==="sensor"&&s(I)==="temperature"&&ae(k,"inside","innen","interior","cabin")),y=k=>k?r.states[k]:void 0,w=dn(y(l)),R=y(c),z=null,P=y(u)??(d&&i(d)==="sensor"?y(d):void 0);if(P){let k=dn(P);k!==null&&(z=Math.max(0,a(P).toLowerCase()==="kw"?k*1e3:k))}let F=(y(h)?.state??y(x)?.state)==="on"||z!==null&&z>50,C=y(g)?.state,L=y(b)?.state,q=y(f),ee=y(_),ne=y(J(e.entity)),v=ne?["on","home","true","present","occupied","detected","parked"].includes(ne.state.toLowerCase()):ee?.state==="home",E=ee&&ee.state!=="home"&&ee.state!=="not_home"?ee.state:null,O=E?String(y(`zone.${E}`)?.attributes.friendly_name??E):null;return{home:v,soc:w,range:dn(R),rangeUnit:R&&a(R)||"km",chargingW:z,charging:F,plugged:C===void 0?null:C==="on",locked:L===void 0?null:L==="locked",climateOn:q?q.state!=="off"&&q.state!=="unavailable":null,inside:dn(y($)),where:v?null:O,entities:{lock:b,climate:f,charge:x,tracker:_}}}function $i(r){return r===null?"#8aa0c8":r<20?"#f87171":r<50?"#facc15":"#4ade80"}function $t(r,e){let t=Math.abs(e);return t>=1e3?`${B(r,t/1e3,t>=1e4?1:2)} kW`:`${Math.round(t)} W`}function Mi(r,e){let n=2*Math.PI*22;return p`<svg class="live-ring" viewBox="0 0 54 54" aria-hidden="true">
    ${De`<circle cx="27" cy="27" r=${22} class="live-ring-bg"></circle>
    <circle cx="27" cy="27" r=${22} stroke=${e} stroke-dasharray=${`${(n*Math.max(0,Math.min(1,r))).toFixed(1)} ${n.toFixed(1)}`} transform="rotate(-90 27 27)" class="live-ring-fg"></circle>`}
  </svg>`}function zl(r,e,t){let n=e.summary,o=a=>S(r,a),i=[];if(n.solar!==null&&i.push(p`<div class="live-row live-solar"><span>☀ ${o("energy_solar")}</span><b>${$t(r,n.solar)}</b></div>`),n.consumption!==null&&i.push(p`<div class="live-row live-house"><span>⌂ ${o("energy_consumption")}</span><b>${$t(r,n.consumption)}</b></div>`),n.battery!==null||n.soc!==null){let a=n.battery===null||Math.abs(n.battery)<15?"":n.battery>0?" \u2193":" \u2191";i.push(p`<div class="live-row live-battery"><span>▮ ${o("energy_battery")}${a}</span><b>${n.soc!==null?`${Math.round(n.soc)} %`:""}${n.battery!==null&&Math.abs(n.battery)>=15?` \xB7 ${$t(r,n.battery)}`:""}</b></div>`)}if(n.grid!==null){let a=n.grid<-15;i.push(p`<div class="live-row ${a?"live-export":"live-import"}"><span>⇄ ${o(a?"energy_grid_export":"energy_grid_import")}</span><b>${$t(r,n.grid)}</b></div>`)}let s=e.autarky;return p`<div class="live-card live-card-house" data-i=${t}>
    ${s!==null?p`<div class="live-own">${Mi(s,s>.95?"#4ade80":s>.6?"#facc15":"#f87171")}<div class="live-own-text"><b>${Math.round(s*100)} %</b><span>${o("live_autarky")}</span></div></div>`:m}
    <div class="live-rows">${i}</div>
  </div>`}function Fl(r,e,t,n){let o=e.car,i=(u,d)=>S(r,u,d),s=$i(o.soc),a=o.home?o.charging?`\u26A1 ${i("live_car_charging")}${o.chargingW?` \xB7 ${$t(r,o.chargingW)}`:""}`:o.plugged?`\u{1F50C} ${i("live_car_plugged")}`:"":`${i("live_car_away")}${o.where?` \xB7 ${o.where}`:""}`,l=o.entities,c=(u,d,h,g)=>p`<button class="live-btn ${u?"live-on":""}" title=${d} aria-label=${d} aria-pressed=${u??!1} @click=${b=>(b.stopPropagation(),g())}>${h}</button>`;return p`<div class="live-card live-card-car ${o.charging?"live-charging":""} ${o.home?"":"live-away"}" data-i=${t} style=${`--live-soc:${s}`}>
    <div class="live-own">
      ${Mi((o.soc??0)/100,s)}
      <div class="live-own-text"><b>${o.soc!==null?`${Math.round(o.soc)} %`:"\u2013"}</b><span>${o.range!==null?`${Math.round(o.range)} ${o.rangeUnit}`:""}</span></div>
    </div>
    <div class="live-rows">
      <div class="live-title">${e.name}</div>
      ${a?p`<div class="live-status">${a}</div>`:m}
      ${o.inside!==null?p`<div class="live-status">🌡 ${B(r,o.inside,1)} °C</div>`:m}
      <div class="live-actions">
        ${l.lock?c(o.locked,i(o.locked?"live_car_unlock":"live_car_lock"),o.locked?"\u{1F512}":"\u{1F513}",()=>{o.locked&&!confirm(i("live_car_unlock_confirm",{name:e.name}))||n("lock",o.locked?"unlock":"lock",l.lock)}):m}
        ${l.climate?c(o.climateOn,i("live_car_climate"),"\u2744",()=>n(l.climate.split(".")[0],o.climateOn?"turn_off":"turn_on",l.climate)):m}
        ${l.charge&&o.home?c(o.charging,i("live_car_charge"),"\u26A1",()=>n(l.charge.split(".")[0],"toggle",l.charge)):m}
      </div>
    </div>
  </div>`}function Tl(r,e,t,n){let o=e.media,i=l=>S(r,l),s=`rgb(${o.color.join(",")})`,a=(l,c,u)=>p`<button class="live-btn" title=${l} aria-label=${l} @click=${d=>(d.stopPropagation(),n("media_player",u,o.entity))}>${c}</button>`;return p`<div class="live-card live-card-media" data-i=${t} style=${`--live-soc:${s}`} @click=${l=>l.currentTarget.classList.toggle("live-open")}>
    ${o.picture?p`<img class="live-cover" src=${o.picture} alt="" loading="lazy" />`:p`<div class="live-cover live-cover-none">♪</div>`}
    <div class="live-rows">
      <div class="live-title" title=${o.title}>${o.title||o.name}</div>
      <div class="live-status">${o.artist||o.app||o.name}</div>
      <div class="live-actions">
        ${a(i("live_media_prev"),"\u23EE","media_previous_track")} ${a(i("live_media_playpause"),"\u23EF","media_play_pause")} ${a(i("live_media_next"),"\u23ED","media_next_track")}
        ${o.volume!==null?p`<input
              class="live-volume"
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(o.volume*100))}
              aria-label=${i("live_media_volume")}
              @click=${l=>l.stopPropagation()}
              @change=${l=>n("media_player","volume_set",o.entity,{volume_level:Number(l.target.value)/100})}
            />`:m}
      </div>
    </div>
  </div>`}function Ei(r){let e=[...r.querySelectorAll(".live-card")].filter(o=>o.style.visibility!=="hidden"),t=[],n=e.map(o=>({el:o,x:Number(o.dataset.x),y:Number(o.dataset.y),w:o.offsetWidth,h:o.offsetHeight})).sort((o,i)=>i.y-o.y);for(let o of n){let i=o.y;for(let a=0;a<12;a++){let l={x0:o.x-o.w/2,x1:o.x+o.w/2,y0:i-o.h,y1:i},c=t.find(u=>l.x0<u.x1+6&&l.x1>u.x0-6&&l.y0<u.y1+6&&l.y1>u.y0-6);if(!c)break;i=c.y0-8}t.push({x0:o.x-o.w/2,x1:o.x+o.w/2,y0:i-o.h,y1:i});let s=o.y-i;o.el.style.transform=`translate(${Math.round(o.x)}px, ${Math.round(i)}px) translate(-50%, -100%)`,o.el.style.setProperty("--live-thread",`${Math.round(18+s)}px`)}}function Ai(r,e,t){return e.length?p`<div class="live-cards">
    ${e.map((n,o)=>n.kind==="house"?zl(r,n,o):n.kind==="car"?Fl(r,n,o,t):Tl(r,n,o,t))}
  </div>`:m}var Ri=U`
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
`;var Hl=[[/spotify/i,[30,215,96]],[/netflix/i,[229,9,20]],[/youtube/i,[255,0,51]],[/prime|amazon/i,[0,168,225]],[/disney/i,[17,60,207]],[/apple ?music|itunes/i,[250,45,72]],[/apple ?tv/i,[200,200,210]],[/plex/i,[229,160,13]],[/tidal/i,[0,255,255]],[/deezer/i,[162,56,255]],[/radio|tunein/i,[255,140,60]]],zi=[34,211,238];function gr(r){return r?Hl.find(([e])=>e.test(r))?.[1]??zi:zi}function Fi(r,e){let t=[],n=new Set;for(let o of e){if(!o.entity.startsWith("media_player.")||n.has(o.entity))continue;n.add(o.entity);let i=r.states[o.entity];if(!i)continue;let s=i.attributes,a=u=>typeof s[u]=="string"?s[u]:"",l=a("app_name")||a("source")||a("app_id")||null,c=typeof s.volume_level=="number"?s.volume_level:null;t.push({entity:o.entity,name:o.name,at:o.at,playing:i.state==="playing",title:a("media_title")||a("media_channel")||l||"",artist:a("media_artist")||a("media_album_name")||a("media_series_title"),picture:a("entity_picture")||null,volume:c,color:gr(l),app:l,group:Array.isArray(s.group_members)?s.group_members.filter(u=>typeof u=="string"&&u!==o.entity):[]})}return t}function Ti(r){let e=new Map(r.filter(o=>o.playing).map(o=>[o.entity,o])),t=[],n=new Set;for(let o of e.values())for(let i of o.group){let s=e.get(i),a=[o.entity,i].sort().join("|");s&&!n.has(a)&&(n.add(a),t.push([o,s]))}return t}var Hi=Math.PI/180;function hn(r,e){let t=[];for(let n of e.floors)for(let o of n.placements){if(!o.entity_id.startsWith("camera."))continue;let i=o.mount==="ceiling";t.push({entity:o.entity_id,name:o.name||String(r.states[o.entity_id]?.attributes.friendly_name??o.entity_id),floorId:n.id,x:o.x,z:o.z,y:o.y??(i?n.height-.1:2.3),rotation:o.rotation??0,tilt:o.tilt??(i?65:20),dome:i})}return t}function Pi(r,e,t=3){let n=r.rotation*Hi,o=Math.min(85,Math.max(0,r.tilt))*Hi,i=-Math.sin(n),s=Math.cos(n),a=[i*Math.cos(o),-Math.sin(o),s*Math.cos(o)],l=t+.35;return{target:[r.x+a[0]*l,e+r.y+a[1]*l,r.z+a[2]*l],radius:t,theta:Math.atan2(-a[0],-a[2]),phi:Math.acos(Math.max(-1,Math.min(1,-a[1])))}}function _r(r,e,t=Date.now()){let n=r.states[e];if(!n)return{stream:null,snapshot:null};let o=n.attributes.access_token,i=typeof n.attributes.entity_picture=="string"?n.attributes.entity_picture:null;return{stream:typeof o=="string"?`/api/camera_proxy_stream/${e}?token=${o}`:null,snapshot:i?i.startsWith("data:")?i:`${i}${i.includes("?")?"&":"?"}t=${Math.floor(t/2e3)}`:null}}var Dl=[["person",/person|people|human|mensch/],["vehicle",/vehicle|car\b|_car_|auto|fahrzeug|truck/],["animal",/animal|pet|dog|cat|bird|tier|hund|katze/]];function pn(r,e){let t=r.entities?.[e]?.device_id,n=e.split(".")[1],o=Object.keys(r.states).filter(s=>s.startsWith("binary_sensor.")&&(t?r.entities?.[s]?.device_id===t:s.includes(n))),i=new Set;for(let s of o){if(r.states[s]?.state!=="on")continue;let a=Dl.find(([,l])=>l.test(s))?.[0];a&&i.add(a)}return[...i]}var br={person:"\u{1F9CD}",vehicle:"\u{1F697}",animal:"\u{1F43E}"},Di=(r,e)=>e.startsWith("binary_sensor.")&&(["motion","occupancy","presence","moving"].includes(String(r.states[e]?.attributes.device_class??""))||/motion|bewegung|praesenz|presence/.test(e));function Pl(r,e){let t=r.entities?.[e];return t?.area_id?t.area_id:t?.device_id?r.devices?.[t.device_id]?.area_id??null:null}function vr(r,e){let t=[],n=new Set;for(let i of e.floors)for(let s of i.placements)!Di(r,s.entity_id)||n.has(s.entity_id)||(n.add(s.entity_id),t.push({entity:s.entity_id,at:{floorId:i.id,x:s.x,z:s.z,y:.4}}));let o=new Map;for(let i of Object.keys(r.states)){if(n.has(i)||!Di(r,i))continue;let s=Pl(r,i);s&&o.set(s,[...o.get(s)??[],i])}for(let i of e.floors)for(let s of i.rooms){let a=s.area_id?o.get(s.area_id):void 0;if(!a?.length||s.points.length<3)continue;let l=s.points.reduce((u,d)=>u+d[0],0)/s.points.length,c=s.points.reduce((u,d)=>u+d[1],0)/s.points.length;for(let u of a)n.has(u)||(n.add(u),t.push({entity:u,at:{floorId:i.id,x:l,z:c,y:.4}}))}return t}async function Ii(r,e,t=30){if(!e.length)return[];let n=new Date(Date.now()-t*6e4).toISOString(),o=await r.callWS({type:"history/history_during_period",start_time:n,entity_ids:e.map(a=>a.entity),minimal_response:!0,no_attributes:!0,significant_changes_only:!1}),i=new Map(e.map(a=>[a.entity,a.at])),s=[];for(let[a,l]of Object.entries(o??{})){let c=i.get(a);if(c)for(let u of l)u.s==="on"&&s.push({entity:a,at:c,t:u.lu})}return s.sort((a,l)=>a.t-l.t),s.filter((a,l)=>l===0||a.entity!==s[l-1].entity)}function fn(r){return r.toLocaleLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Ci=r=>r.points.length>=3;function Il(r,e,t){return r.rooms.filter(Ci).find(n=>D([e,t],n.points))}function Cl(r,e,t,n){let o=[];for(let a of e.rooms.filter(Ci)){let[l,c]=ht(a.points);o.push({kind:"room",name:a.name,where:n?e.name:"",floorId:e.id,roomId:a.id,entity:null,icon:null,x:l,z:c,y:0})}let i=new Set,s=(a,l,c,u)=>{if(i.has(a)||!(a in r.states))return;i.add(a);let d=Il(e,l,c),h=[d?.name,n?e.name:void 0].filter(g=>!!g).join(" \xB7 ");o.push({kind:"device",name:T(r,a),where:h,floorId:e.id,roomId:d?.id??null,entity:a,icon:M(a),x:l,z:c,y:u})};for(let a of e.placements){let l=a.y??Ve(M(a.entity_id)??"sensor",e.height,a.mount);s(a.entity_id,a.x,a.z,l)}for(let a of e.furniture){let l=t.get(a.id),c=l?.entity??l?.power;if(!c)continue;let u=e.height-.3;s(c,a.x,a.z,Math.min(u,Math.max(.5,a.h)))}return o}function Oi(r,e){let t=je(r,e.floors),n=e.floors.length>1;return e.floors.flatMap(o=>Cl(r,o,t,n))}function Ol(r,e){return(fn(r.name).startsWith(e)?0:2)+(r.kind==="room"?0:1)}function Wi(r,e,t=8){let n=fn(e).split(/\s+/).filter(Boolean);if(n.length===0)return[];let o=fn(e.trim());return r.filter(i=>{let s=fn([i.name,i.where,i.entity].filter(Boolean).join(" "));return n.every(a=>s.includes(a))}).map(i=>({item:i,cost:Ol(i,o)})).sort((i,s)=>i.cost-s.cost||i.item.name.localeCompare(s.item.name)).slice(0,t).map(i=>i.item)}var Wl=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ll=[2200,2700,3200,4e3,5e3,6500],Nl=["hs","rgb","rgbw","rgbww","xy"],Bl=4,Li=16,Ni=32,Vl=128;function yr(r){let e=r.attributes.supported_color_modes??[],t=e.some(n=>Nl.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function xr(r){return((r.attributes.supported_features??0)&Bl)!==0&&typeof r.attributes.current_position=="number"}var wr=class extends j{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{M(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}nf=${this._tick}`:null;return p`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?p`<img src=${n} alt=${T(this.hass,this.entity)} />`:p`<span class="qm-note">${Q(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.t("through_camera")}
      </button>`}t(e,t){return S(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:T(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){oe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,o)=>{let i=o/t*Math.PI*2-Math.PI/2;return p`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=yr(e),n=e.state==="on",o=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?Wl.map(s=>p`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Ll.map(s=>p`<button class="qm-swatch" style="background:${Kl(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return p`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${o} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?p`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,o))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:m}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",o=xr(e),i=(c,u,d,h=!1)=>p`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${u} @click=${d}>${c}</button>`,s=c=>t!==null&&Math.abs(t-c)<3,a=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),s(100)),...o?[75,50].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),s(0)),...o?[25].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),s(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return p`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:Q(this.hass,e)}</b>
        </button>
      </div>
      ${o?p`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:m}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Vl&&n!==null?p`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${o=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(o.target.value)})}
      /></label>`:t&(Li|Ni)?p`<div class="qm-tilt-buttons">
        ${t&Li?p`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:m}
        ${t&Ni?p`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:m}
      </div>`:m}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return p`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${Q(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return m;let t=M(this.entity),n=H(e)?p`<p class="qm-note">${Q(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):this.renderToggle(e);return p`<div class="qm" role="dialog" aria-label=${T(this.hass,this.entity)}>
      <div class="qm-title">${T(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[ie,U`
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
    `]};function Kl(r){let e=Math.min(1,Math.max(0,(r-2200)/4300)),t=(n,o)=>Math.round(n+(o-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("nf-quick-menu")||customElements.define("nf-quick-menu",wr);var Gl=new URL(import.meta.url),Ul=new URL("./nextfloor-3d.js?v=14108c6d6a77",Gl).href,Bi;function Vi(){return Bi??=import(Ul),Bi}var Ki=r=>r.toLowerCase().replace(/[_-]+/g," ").replace(/\s+/g," ").trim(),jl=new Set(["","unknown","unavailable","not home","away"]);function ql(r,e,t){let n=Ki(t);if(jl.has(n))return null;for(let o of e.floors)for(let i of o.rooms){let s=i.area_id?r.areas?.[i.area_id]?.name:void 0;if([i.name,i.area_id,s].map(l=>Ki(l??"")).includes(n))return{floorId:o.id,room:i}}return null}function Zl(r){let e=r.split(/\s+/).filter(Boolean);return e.length===0?"?":(e.length===1?e[0].slice(0,2):e[0][0]+e[e.length-1][0]).toUpperCase()}function Yl(r,e){let[t,n]=ht(r.points),o=e*1.15-Math.PI/2+.9;return[t+.75*Math.cos(o),n+.75*Math.sin(o)]}function Gi(r,e){let t=[],n=new Map;for(let{person:o,sensor:i}of e.presence){let s=r.states[o],a=i?r.states[i]:void 0;if(!s||!a||s.state!=="home"&&s.state!=="on")continue;let l=ql(r,e,a.state);if(!l)continue;let c=n.get(l.room.id)??0;n.set(l.room.id,c+1);let[u,d]=Yl(l.room,c),h=String(s.attributes.friendly_name??o),g=s.attributes.entity_picture;t.push({id:o,name:h,initials:Zl(h),picture:typeof g=="string"?g:null,floorId:l.floorId,roomId:l.room.id,x:u,z:d})}return t}function Jl(r,e){let t=new Set;for(let n of e.rooms)for(let o of Ue(r,V(r,n.area_id)))M(o)==="light"&&t.add(o);for(let n of e.placements)M(n.entity_id)==="light"&&t.add(n.entity_id);return[...t].filter(n=>r.states[n]?.state==="on").length}function Ql(r,e,t){let n=i=>!!i&&r.states[i]?.state==="on",o=0;for(let i of e.openings){let s=t.get(i.id);if(s)if(i.type==="garage")(be(r,s,"garage").cover??1)<.95&&o++;else if(i.type==="door")(n(s.contact)||n(s.contact2))&&o++;else{let a=be(r,s,"window");Math.max(a.open,a.tilt,a.open2,a.tilt2)>.5&&o++}}return o}function Ui(r,e,t,n){return new Map(e.floors.map(o=>[o.id,{rooms:o.rooms.length,lightsOn:Jl(r,o),open:Ql(r,o,t),persons:n.filter(i=>i.floorId===o.id).length}]))}function ji(r,e){let t=[e.rooms===1?S(r,"floor_rooms_one"):S(r,"floor_rooms",{n:e.rooms})];return e.lightsOn>0&&t.push(S(r,"floor_lights",{n:e.lightsOn})),e.open>0&&t.push(S(r,"floor_open",{n:e.open})),e.persons>0&&t.push(S(r,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var kr=class extends j{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_flows:{state:!0},_liveEnergy:{state:!0},_liveCards:{state:!0},_liveCardOn:{state:!0},_liveLive:{state:!0},_liveTrail:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0}};get liveCardsOn(){return this.holograms??this._liveCardOn}cloud=0;confirmSet=new Set;trailTimer;shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];cameraTick=0;cameraTimer;throughFloor=null;constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this.showEnergy=!0,this.flows=null,this._liveEnergy=null,this._liveCards=[],this._liveLive=!1,this._liveTrail=[],this._liveCardOn=localStorage.getItem("nextfloor.cards")!=="0",this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("nextfloor.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("nextfloor.flows")==="1"}catch{this._flows=!1}}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.start()}observeStage(){let e=this.renderRoot.querySelector(".nf-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Vi();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".nf-stage");t.addEventListener("pointerdown",n=>{this._central&&!n.target?.closest?.(".nf-central, .nf-central-btn")&&(this._central=!1)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,o)=>this.fire("room-tap",{floorId:n,roomId:o}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?S(this.hass,"floor_rooms_one"):S(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,o,i)=>this.onDeviceTap(n,o,i),onDeviceHold:(n,o,i)=>this.onDeviceHold(n,o,i),onRoomDoubleTap:(n,o)=>this.onRoomDoubleTap(n,o),onDeviceSwipe:(n,o,i,s,a)=>this.onDeviceSwipe(n,o,i,s,a),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,o,i)=>this.fire("furniture-move",{id:n,x:o,z:i}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,o,i)=>this.fire("device-move",{id:n,x:o,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setMeshSource(n=>this.hass?.fetchWithAuth?this.hass.fetchWithAuth(`/api/nextfloor/mesh/${encodeURIComponent(n)}`).then(o=>o.ok?o.arrayBuffer():null):Promise.resolve(null)),this.viewer.setPacks([...Pn()]),this.shownPacks=Pt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Pt()&&(this.shownPacks=Pt(),t.setPacks([...Pn()]),this.hass&&this.building&&t.setParked(ar(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let o=JSON.stringify(this.startViewOf()),i=this.shownStartView!==void 0&&this.shownStartView!==o;this.shownStartView=o,t.setStartView(this.startViewOf()),t.setBuilding(this.building),i&&this.floorId===null&&t.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(o=>e.has(o));(n||e.has("hass"))&&this.syncDevices(n),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),e.has("trail")&&this.watchTrail(),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e){let t=this.viewer,n=this.building;if(!t||!n||!this.hass)return;let o=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==o.entities){this.openingLinks=ft(o,n.floors),this.furnitureLinks=je(o,n.floors),this.linkedRegistry=o.entities,this.findIndex=null;let v=[...this.openingLinks.values()].flatMap(A=>[A.cover,A.contact,A.tilt,A.contact2??null,A.tilt2??null,A.position??null,A.tiltAngle??null]),E=No(n),O=E.filter(A=>M(A)==="camera").flatMap(A=>Xn(o,A)),k=E.map(A=>ir(o,A)),I=n.energy,G=n.presence.flatMap(A=>[A.person,A.sensor]),rt=n.floors.flatMap(A=>A.rooms.flatMap(N=>V(o,N.area_id).filter(Re=>M(Re)==="light"))),te=[...this.furnitureLinks.values()].flatMap(A=>[A.entity,A.power]),Rt=n.floors.flatMap(A=>A.furniture.flatMap(N=>[N.state_entity??null,N.state_entity2??null,N.color_entity??null])),ms=n.floors.flatMap(A=>A.furniture.flatMap(N=>[N.door_left??null,N.door_right??null,N.soc??null,N.status??null,N.charge??null,N.export??null])),gs=(n.settings.roof?.windows??[]).flatMap(A=>[A.cover,A.contact,A.tilt]).filter(A=>!!A&&A!=="none"),_s=[...(n.settings.roof?.solar??[]).map(A=>A.entity),...(n.settings.roof?.strings??[]).map(A=>A.entity)].filter(A=>!!A&&A!=="none"),bs=n.floors.flatMap(A=>A.furniture.filter(N=>N.type==="robot_vacuum").map(N=>qn(o,this.furnitureLinks.get(N.id)?.entity??null,N.room_sensor))),vs=n.floors.flatMap(A=>A.furniture.flatMap(N=>(N.pictures??[]).flatMap(Re=>[Re.entity,...Re.image.startsWith("camera:")?[Re.image.slice(7)]:[]]))),ws=this.heatMode==="none"&&!this.roomLabels?[]:n.floors.flatMap(A=>A.rooms.flatMap(N=>V(o,N.area_id).filter(Re=>Re.startsWith("sensor."))));this.alertSrc=this.alerts?Ko(o,n,this.weatherEntityId):null;let ys=this.alertSrc?Go(this.alertSrc):[],xs=[...oi(n.floors),...Fo(o,n.floors)],ks=this.trail?vr(o,n).map(A=>A.entity):[],Ss=_t(o,this.weatherEntityId??n.settings.weather_entity),$s=[...E,...O,...v,...k,...te,...Rt,...ms,...bs,...gs,..._s,...vs,I.grid,I.solar,I.battery,I.battery_soc,I.consumption,I.tariff,...G,...rt,...ws,...ys,...xs,...ks,Ss,"sun.sun"];this.watched=[...new Set($s.filter(A=>!!A))],e=!0}if(!(e||this.watched.some(v=>this.shownStates.get(v)!==o.states[v])))return;this.shownStates=new Map(this.watched.map(v=>[v,o.states[v]]));let s=Xt(o,n),a=Lo(o,n),l=this.furnitureMarkers(o,n,new Set(a.map(v=>v.id)),new Set(s.map(v=>v.powerEntity)));s.push(...l.consumers);let c=en(o,n,s,Qt(n,v=>this.furnitureLinks?.get(v.id)?.power??null)),u=new Map(s.filter(v=>v.id!==v.powerEntity).map(v=>[v.id,v.power]));this.confirmSet=qe(o,n.floors);let d=this.trail&&!this.dimmed?this._liveTrail:[],h=new Set(this.liveCardsOn?this._liveCards.flatMap(v=>v.kind==="media"?[v.media.entity]:v.kind==="car"?[v.spot]:[]):[]);t.setDevices([...[...a,...l.markers].map(v=>{let E=v.show==="no_power"||"energyDevice"in v&&v.energyDevice?null:u.get(v.id)??null,O={...v,power:E,powerText:E===null?void 0:ce(o,E),effect:this.dimmed?!1:v.effect},k=v.ownName&&(v.showName||this.markerNames)?v.ownName:"",I=h.has(v.id)||!!v.furnitureId&&h.has(v.furnitureId);return{...O,pin:this.showPin(O)&&!I,full:v.show==="always",caption:k}}),...this.dimmed?[]:this.liveDetectionPins(o,n),...d.map((v,E)=>({id:`trail:${E}`,floorId:v.at.floorId??n.floors[0]?.id??"",roomId:null,x:v.at.x,z:v.at.z,y:.3+.4*d.slice(0,E).filter(O=>O.entity===v.entity).length,icon:tc,name:T(o,v.entity),text:nc(o,v.t),active:E===d.length-1,unavailable:!1,glow:null,pin:!0}))]),t.setPickTargets(l.targets,this.openingTargets()),t.setScreens(l.screens),t.setFridgeDoors(Ro(o,n.floors)),t.setRobots(this.robotInfos(o,n));let g=new Map;for(let v of n.settings.roof?.windows??[]){let E=G=>G&&G!=="none"?G:null,O=be(o,{cover:E(v.cover),contact:E(v.contact),tilt:E(v.tilt)},"window"),k=E(v.window)?o.states[E(v.window)]:void 0,I=O.open;if(k&&!H(k)){let G=k.attributes.current_position;I=typeof G=="number"?Math.min(1,Math.max(0,G/100)):k.state==="open"||k.state==="opening"?1:0}g.set(v.id,{open:I,tilt:O.tilt,cover:O.cover??0})}t.setRoofWindows(g),t.setParked(ar(o,n));let b=new Map(n.floors.flatMap(v=>v.openings.map(E=>[E.id,E.type]))),f=new Map([...this.openingLinks].map(([v,E])=>[v,be(o,E,b.get(v))]));t.setOpeningStates(f),this.setAlerts(this.alertSrc?Uo(o,n,this.alertSrc,this.openingLinks):[]);let x=[...a,...l.markers].map(v=>`${v.id}:${v.glow?`${v.glow.level.toFixed(1)}/${v.glow.color.map(E=>E.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...f].map(([v,E])=>`${v}:${E.open}:${E.cover===null?"-":E.cover.toFixed(1)}`).join(";");if(x!==this.thumbSig){let v=this.thumbSig==="";this.thumbSig=x,v||this.scheduleThumbs(1500)}let _=xi(o,n,s),$=this.liveCars(o,n);for(let v of $){if(!v.car.home||!v.car.charging)continue;let E=n.floors.flatMap(O=>O.furniture.filter(k=>k.type==="wallbox").map(k=>({floorId:O.id,x:k.x,z:k.z,y:1}))).sort((O,k)=>Math.hypot(O.x-v.at.x,O.z-v.at.z)-Math.hypot(k.x-v.at.x,k.z-v.at.z))[0]??un(n);E&&_.arcs.push({key:`car:${v.spot}`,from:E,to:{...v.at,y:.8},power:v.car.chargingW??7e3,color:[80,175,255]})}let y=(this.flows??this._flows)&&!this.dimmed;t.setLiveEnergy(y?_.arcs:[],y?_.sparks:[]),JSON.stringify(_)!==JSON.stringify(this._liveEnergy)&&(this._liveEnergy=_);let R=this.liveMedia(o,n).filter(v=>v.playing&&!this.dimmed);t.setLiveSound(R.map(v=>({id:v.entity,at:v.at,color:v.color,level:v.volume??.5})),Ti(R).map(([v,E])=>[v.at,E.at])),this.syncLhCards(t,n,_,$,R);let z=[];if(!this.dimmed)for(let v of n.floors)for(let E of v.furniture){if(!jn(E.type))continue;let O=this.furnitureLinks?.get(E.id)?.entity??null;O?.startsWith("media_player.")||(O=v.placements.filter(te=>te.entity_id.startsWith("media_player.")&&Math.hypot(te.x-E.x,te.z-E.z)<Math.max(2,E.w)).sort((te,Rt)=>Math.hypot(te.x-E.x,te.z-E.z)-Math.hypot(Rt.x-E.x,Rt.z-E.z))[0]?.entity_id??null);let k=O?o.states[O]:void 0;if(!k||!["playing","paused"].includes(k.state))continue;let I=k.attributes,G=te=>typeof I[te]=="string"?I[te]:"",rt=G("app_name")||G("source")||null;z.push({id:E.id,furnitureId:E.id,floorId:v.id,color:gr(rt),title:G("media_title")||G("media_channel")||rt||"",subtitle:G("media_artist")||G("media_series_title")||G("media_album_name"),app:rt,picture:G("entity_picture")||null,playing:k.state==="playing"})}t.setLiveScreens(z);let P=[];t.setPersons(P);let W=Ui(o,n,this.openingLinks,P);t.setFloorInfo(new Map([...W].map(([v,E])=>[v,ji(o,E)])));let F=o.states["sun.sun"]?.attributes,C=typeof F?.elevation=="number"?F.elevation:null;t.setSun(C!==null&&typeof F?.azimuth=="number"?{elevation:C,azimuth:F.azimuth}:null);let L=this.weather&&!this.dimmed?ai(o,_t(o,this.weatherEntityId??n.settings.weather_entity)):null,q=L?li(L,n.settings.weather_effects):null;this.cloud=q?.cloud??0,this._sky=(C===null?0:Math.min(1,Math.max(0,(C+4)/16)))*(1-.45*this.cloud),t.setSky(this.weather&&!this.dimmed?{weather:q,sun:C!==null&&typeof F?.azimuth=="number"?{elevation:C,azimuth:F.azimuth}:null,north:n.settings.north??0,sky:this.skyColor(),disc:(n.settings.weather_effects??["sky"]).includes("sky"),low:this._low}:null),this.applyTint();let ne=c.grid!==null||c.solar!==null||c.battery!==null||c.tariff!==null?c:null;JSON.stringify(ne)!==JSON.stringify(this._energy)&&(this._energy=ne)}liveDetectionPins(e,t){let n=[];for(let o of hn(e,t)){let i=pn(e,o.entity),s=o.rotation*Math.PI/180;i.forEach((a,l)=>{n.push({id:`detect:${o.entity}:${a}`,floorId:o.floorId,roomId:null,x:o.x+(o.dome?0:-Math.sin(s)*1.2),z:o.z+(o.dome?0:Math.cos(s)*1.2),y:1.4+.45*l,icon:rc[a],name:o.name,text:S(e,`detect_${a==="vehicle"?"car":a}`),active:!0,unavailable:!1,glow:null,pin:!0})})}return n}setAlerts(e){let t=e.map(o=>`${o.kind}:${o.entity}`),n=e.filter((o,i)=>!this.seenAlerts.has(t[i]));this.seenAlerts=new Set(t),t.join()!==this._alerts.map(o=>`${o.kind}:${o.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),!e.length&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,o=this.hass,i=n?.floors.find(u=>u.id===e),s=i?.rooms.find(u=>u.id===t);if(!n||!o||!i||!s)return;let a=new Set(V(o,s.area_id).filter(u=>M(u)==="light"));for(let u of i.placements)M(u.entity_id)==="light"&&D([u.x,u.z],s.points)&&a.add(u.entity_id);for(let u of i.furniture){let d=this.furnitureLinks.get(u.id)?.entity;d&&In(u.type)&&D([u.x,u.z],s.points)&&a.add(d)}let l=[...a].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let c=l.some(u=>o.states[u]?.state==="on");o.callService("homeassistant",c?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600)}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let o=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=ti(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,o=new Map([...l].map(([c,u])=>[c,ei(a,u)]))}let i=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of a.rooms){let c=_e(n,a,l,"temperature"),u=_e(n,a,l,"humidity"),d=_e(n,a,l,"co2"),h=[c!==null?`${B(n,Ke(n,c),1)} ${re(n)}`:null,u!==null?`${B(n,u,0)} %`:null,d!==null?`${B(n,d,0)} ppm`:null].filter(g=>!!g);h.length&&i.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){o??=new Map;let a=.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let c=jo(l.kind).map(u=>u*a);if(l.roomId)o.set(l.roomId,c);else for(let u of t.floors)for(let d of u.rooms)o.set(d.id,c)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(o??=new Map,o.set(this.roomFlash.roomId,[.9,.95,1]));let s=o?[...o].map(([a,l])=>`${a}:${l.map(c=>c.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(o))}furnitureMarkers(e,t,n,o){let i=[],s=[],a=new Map,l=new Map;for(let c of t.floors)for(let u of c.furniture){let d=this.furnitureLinks.get(u.id),h=this.stateFaces(e,u);if(h.length&&a.set(u.id,{color:h[0].color,level:h[0].level,faces:h}),In(u.type)){i.push(this.lampMarker(e,c,u,d?.entity??null));continue}let g=u.type==="home_battery"?u.soc:u.type==="wallbox"?u.status:null,b=g&&g!=="none"?g:null,f=d??(b?{entity:null,power:null}:void 0);if(!f)continue;let x=u.type==="home_battery"?b??f.entity??f.power:f.entity??f.power??b;l.set(u.id,x);let _=f.entity?e.states[f.entity]:void 0,$=u.type==="meter"?t.energy.grid_invert&&!u.export:u.type==="home_battery"?t.energy.battery_invert&&!u.charge:!1,y=f.power?Z(e.states[f.power],$):null,w=u.type==="home_battery"&&u.charge&&u.charge!=="none"?u.charge:u.type==="meter"&&u.export&&u.export!=="none"?u.export:null,R=w?Z(e.states[w]):null;R!==null&&(y=Math.max(0,y??0)-Math.max(0,R)),f.power&&y!==null&&!o.has(f.power)&&(o.add(f.power),s.push({id:x,powerEntity:f.power,floorId:c.id,x:u.x,z:u.z,power:Math.max(0,y),wallbox:u.type==="wallbox"||void 0}));let z=(y??0)>10||_?.state==="on"||_?.state==="running"||Nn(_)&&ge(_);if(u.type==="radiator"&&_&&M(_.entity_id)==="climate"){let F=_.attributes;if(F.hvac_action==="heating"){let C=typeof F.temperature=="number"&&typeof F.current_temperature=="number"?F.temperature-F.current_temperature:1;a.set(u.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,C))})}}else(u.type==="washer"||u.type==="dryer"||u.type==="dishwasher")&&z&&a.set(u.id,{color:[.3,.85,1],level:.8});if(_&&jn(u.type)){let F=M(_.entity_id)==="light"?Be(_):null,C=M(_.entity_id)==="media"&&["playing","on","paused","idle"].includes(_.state),L=F?F.color:ge(_)||C?[.22,.88,1]:null;L&&a.set(u.id,{color:L,level:_.state==="playing"?1:.6})}if(n.has(x))continue;n.add(x);let P=f.entity?M(f.entity):null,W=c.rooms.find(F=>F.points.length>=3&&D([u.x,u.z],F.points));i.push({id:x,floorId:c.id,roomId:W?.id??null,x:u.x,z:u.z,y:ec(u)+me(c,u),icon:u.icon?Gt(u.icon):gt(P??"switch"),name:u.name||(f.entity?T(e,f.entity):Se(e,u.type)),ownName:u.name||void 0,showName:!!u.show_name,text:u.type==="home_battery"?this.batteryText(e,b,y):u.type==="wallbox"?this.wallboxText(e,b,y):u.type==="meter"?this.meterText(e,y):_?Q(e,_):y!==null?ce(e,Math.max(0,y)):"",active:_?ge(_):(y??0)>5,unavailable:_?H(_):!1,glow:null,furnitureId:u.id,energyDevice:u.type==="inverter"||u.type==="home_battery"||u.type==="wallbox"||u.type==="meter",show:u.marker??void 0,fromFurniture:!0})}return this.watchCameras(!!this._through||this.cameraWall),{markers:i,consumers:s,screens:a,targets:l}}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,!this.trail){this._liveTrail=[],this.viewer?.setLiveTrail([]),this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;try{this._liveTrail=await Ii(t,vr(t,n))}catch{this._liveTrail=[]}let o=this._liveTrail.length,i=o?this._liveTrail[0].t:0,s=o?this._liveTrail[o-1].t:1;this.viewer?.setLiveTrail(this._liveTrail.map(a=>({at:a.at,age:s>i?(a.t-i)/(s-i):1}))),this.syncDevices(!0)};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(o=>{if(n.has(o.type)||o.type.startsWith("lamp_")&&o.type!=="lamp_floor"&&o.type!=="lamp_uplight"||o.h<.04||me(e,o)>.12)return!1;let i=Y(o.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(o.type))?!1:D([o.x,o.z],t)||Ct(o).some(s=>D(s,t))}).map(o=>Ct(o))}robotInfos(e,t){let n=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="robot_vacuum")continue;let s=this.furnitureLinks.get(i.id)?.entity??null,a=s?e.states[s]?.state:void 0,l=a==="cleaning"?"cleaning":a==="returning"?"returning":a==="error"?"error":a==="docked"||!a?"docked":"idle",c=i.rotation*Math.PI/180,u=i.d*.14,d=[i.x-Math.sin(c)*u,i.z+Math.cos(c)*u],h=o.rooms.filter(x=>x.points.length>=3),b=(l==="cleaning"?Do(e,h,s,qn(e,s,i.room_sensor)):null)??h.find(x=>D(d,x.points)),f=l==="cleaning"&&b?this.robotObstacles(o,b.points):[];n.push({id:i.id,floorId:o.id,rest:d,restHeading:-c,mode:l,room:b?.points??null,roomId:b?.id??null,obstacles:f})}return n}batteryText(e,t,n){let o=t?Number(e.states[t]?.state):Number.NaN,i=[];return Number.isFinite(o)&&i.push(`${B(e,o,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${ce(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ce(e,0):`${S(e,t<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(t))}`}wallboxText(e,t,n){let o=t?e.states[t]:void 0,i=String(o?.state??"").toLowerCase(),s=(n??0)>50||/charg|laden|lädt/.test(i),a=o?.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=s?S(e,"wallbox_charging"):a?S(e,"wallbox_plugged"):o&&!H(o)&&!o.entity_id.startsWith("binary_sensor.")?Q(e,o):"",c=n!==null&&n>50?ce(e,n):"";return[l,c].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],o=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,s]of o){if(!i||i==="none")continue;let a=e.states[i];if(!a||H(a)||!(ge(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let c=M(i)==="light"?Be(a):null;n.push({part:s,color:c?c.color:[1,.71,.28],level:c?c.level:.85})}return n}lampMarker(e,t,n,o){let i=o?e.states[o]:void 0,s=Y(n.type),a=ho[n.type]??s?.light??"floor",l=t.rooms.some(g=>g.points.length>=3&&D([n.x,n.z],g.points)),c=a==="strip"&&!l?dt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||a==="wall"||a==="strip"?me(t,n):a==="table"?It(t,n.x,n.z):a==="bollard"||a==="garden"?dt(t,n.x,n.z):0,u=t.rooms.find(g=>g.points.length>=3&&D([n.x,n.z],g.points)),d=t.height,h=s?s.mount==="ceiling"?Math.max(.5,c-.15):c+n.h+.2:{ceiling:d-.3,downlight:d-.25,spot:d-.35,panel:d-.25,pendant:Math.max(.6,d-n.h-.25),floor:c+n.h+.25,uplight:c+n.h+.25,table:c+n.h+.2,wall:c+n.h+.2,strip:n.upright?c+n.w+.15:Math.max(.3,c-.2),bollard:c+n.h+.25,garden:c+n.h+.25}[a];return{id:o??`lamp:${n.id}`,floorId:t.id,roomId:u?.id??null,x:n.x,z:n.z,y:h,icon:gt("light"),name:n.name||(o?T(e,o):Se(e,n.type)),text:i?Q(e,i):"",active:i?ge(i):!1,unavailable:i?H(i):!1,glow:i?Qn(Be(i,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.glow_scale):null,lamp:a,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,size:[n.w,n.d,n.h],base:c,pickable:!!o,furnitureId:n.id,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?c:c+n.h*.85:void 0,effect:!!i&&i.state==="on"&&typeof i.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(i.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=M(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let o=n.cover??n.contact??n.tilt;o&&e.set(t,o)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(o=>o.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return m;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,s)=>(this.building.floors.find(a=>a.id===s.floorId)?.elevation??0)-(this.building.floors.find(a=>a.id===i.floorId)?.elevation??0)),n=this._thumbsCompact,o=()=>{this._thumbsCompact=!n;try{localStorage.setItem("nextfloor.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return p`<nav class="nf-thumbs ${this.narrowThumbs?"nf-thumbs-small":""} ${n?"nf-thumbs-compact":""}" aria-label=${S(this.hass,"floors")}>
      <button class="nf-thumbs-fold" title=${S(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${S(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${o}>${n?"\u25B8":"\u25C2"}</button>
      <button class="nf-thumb nf-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${S(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>p`<button class="nf-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?m:p`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){let o=M(e);o==="light"||o==="cover"||o==="switch"||o==="fan"||o==="lock"||o==="camera"?this._menu={entity:e,x:t,y:n}:oe(this,e)}onDeviceSwipe(e,t,n,o,i){let s=this.hass?.states[e];if(t==="start"){if(!s||H(s)||this.confirmSet.has(e))return!1;let l=M(e);if(l==="light"&&yr(s).dim){let c=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:o,y:i},!0}if(l==="cover"&&xr(s)){let c=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:o,y:i},!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,a.start-n/220*100)));l!==a.value&&(this._swipe={...a,value:l});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return m;let t=this._alerts.slice(0,3);return p`<div class="nf-alert-banner" role="alert">
      ${t.map(n=>p`<button class="nf-alert nf-alert-${n.kind}" title=${nr(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${nr(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?p`<span class="nf-alert-more">+${this._alerts.length-3}</span>`:m}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass)return m;let t=e.floors.flatMap(i=>i.rooms).find(i=>i.id===this.roomId),n=t?V(this.hass,t.area_id).filter(i=>M(i)==="scene"||M(i)==="script").slice(0,6):[];if(!n.length)return m;let o=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return p`<div class="nf-scenes">
      ${n.map(i=>p`<button class="nf-chip" aria-pressed=${this._sceneFired===i} @click=${()=>this.runScene(i)}>${T(this.hass,i,o)}</button>`)}
    </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return m;if(this._find===null)return p`<button class="nf-find-btn" title=${S(this.hass,"find")} aria-label=${S(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Wi(this.findIndex??=Oi(this.hass,e),this._find);return p`<div class="nf-find">
      <input
        type="search"
        placeholder=${S(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="nf-find-close" aria-label=${S(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?p`<div class="nf-find-list">
            ${t.length?t.map(n=>p`<button @click=${()=>this.goTo(n)}>
                    <span class="nf-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Kt(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?p`<small>${n.where}</small>`:m}</span>
                  </button>`):p`<p>${S(this.hass,"find_none")}</p>`}
          </div>`:m}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null)return m;let n=(f,x)=>S(t,f,x),o=p`<button
      class="nf-central-btn ${this._central?"nf-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return o;let i=this.floorId?e.floors.find(f=>f.id===this.floorId):void 0,s=i?[i]:e.floors,a=s.flatMap(f=>Zn(t,f).lights),l=s.flatMap(f=>Zn(t,f).covers),c=a.filter(f=>t.states[f]?.state==="on").length,u=!i,d=(f,x,_,$)=>{if($.length){if(u&&this._armed!==f){this._armed=f,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(x,_,{entity_id:$})}},h=(f,x,_,$,y)=>p`<button class="nf-btn ${this._armed===f?"nf-central-armed":""}" ?disabled=${!y.length} @click=${()=>d(f,_,$,y)}>
        ${this._armed===f?n("central_sure"):n(x)}
      </button>`,g=(e.settings.favorites??[]).filter(f=>t.states[f]),b=this.buttons??e.settings.buttons??[];return p`${o}
      <div class="nf-central" role="dialog" aria-label=${n("central")}>
        <b>${i?i.name:n("central_house")}</b>
        <div class="nf-central-row">
          <span>${n("central_lights")}${a.length?p` <small>${c}/${a.length}</small>`:m}</span>
          ${h("lights_on","central_on","light","turn_on",a.filter(f=>t.states[f]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",a.filter(f=>t.states[f]?.state==="on"))}
        </div>
        ${l.length?p`<div class="nf-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:m}
        <b>${n("central_favorites")}</b>
        ${g.length?p`<div class="nf-central-favs">
              ${g.map(f=>{let[x,_]=Po(f),$=t.states[f],y=x==="homeassistant"&&$?.state==="on";return p`<button
                  class="nf-chip"
                  aria-pressed=${y||this._sceneFired===f}
                  ?disabled=${H($)}
                  @click=${()=>{t.callService(x,_,{entity_id:f}),this._sceneFired=f,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${T(t,f)}
                </button>`})}
            </div>`:b.length?m:p`<p class="nf-central-hint">${n("central_no_favorites")}</p>`}
        ${b.length?p`<div class="nf-central-favs">
              ${b.map(f=>p`<button
                  class="nf-chip nf-own-btn"
                  @click=${x=>{Io(t,x.currentTarget,f),f.action!=="service"&&(this._central=!1)}}
                >
                  ${f.icon?p`<ha-icon .icon=${f.icon.startsWith("mdi:")?f.icon:`mdi:${f.icon}`}></ha-icon>`:m}${f.label}
                </button>`)}
            </div>`:m}
      </div>`}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return m;let e=S(this.hass,this.clean?"controls_show":"controls_hide");return p`<button
      class="nf-eye ${this.clean?"nf-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?De`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:De`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return m;let t=e.kind==="light"&&e.value<=0;return p`<div class="nf-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${T(this.hass,e.entity)}</span>
      <b>${t?S(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building,o=this.hass;if(!t||!n||!o)return;let i=hn(o,n).find(a=>a.entity===e);if(!i)return;this._menu=null,this._liveLive=!1,this._through={entity:e,back:this._through?.back??t.getView()},this.watchCameras(!0);let s=()=>{this._through?.entity===e&&(this.viewer?.liveFlyInto(i.floorId,Pi(i,0)),setTimeout(()=>{this._through?.entity===e&&(this._liveLive=!0)},1150))};this.floorId!==i.floorId?(this.throughFloor=i.floorId,this.fire("floor-tap",{floorId:i.floorId}),setTimeout(s,450)):s()}endThrough(){let e=this._through;e&&(this._through=null,this._liveLive=!1,this.viewer?.flyTo(e.back,1e3),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building)return m;let e=this.hass,t=hn(e,this.building);this.watchCameras(!0);let n=()=>this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0})),o=Math.max(1,Math.min(4,Math.ceil(Math.sqrt(t.length))));return p`<div class="live-wall">
      <div class="live-wall-head">
        <b>${S(e,"camera_wall_title")}</b><span>· ${t.length}</span><span class="live-spacer"></span>
        <button class="nf-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      <div class="live-wall-grid" style=${`grid-template-columns: repeat(${o}, 1fr)`}>
        ${t.map(i=>{let{snapshot:s}=_r(e,i.entity,this.cameraTick*5e3),a=pn(e,i.entity);return p`<button
            class="live-wall-cam ${a.length?"live-seen":""}"
            @click=${()=>{this.throughWall=!0,n(),this.lookThrough(i.entity)}}
          >
            ${s?p`<img src=${s} alt="" />`:p`<div class="live-wall-none">${S(e,"state_unavailable")}</div>`}
            <span class="live-wall-name">${i.name} ${a.map(l=>br[l]).join(" ")}</span>
          </button>`})}
      </div>
    </div>`}renderThrough(){let e=this._through;if(!e||!this.hass)return m;let t=this.hass,n=_r(t,e.entity,this.cameraTick*5e3),o=pn(t,e.entity);return p`<div class="live-through ${this._liveLive?"live-live":""}">
      ${this._liveLive&&(n.stream||n.snapshot)?p`<img class="live-through-img" src=${n.stream??n.snapshot} alt="" @error=${i=>n.snapshot&&(i.target.src=n.snapshot)} />`:m}
      <div class="live-through-bar">
        <span class="live-rec">●</span>
        <b>${T(t,e.entity)}</b>
        ${o.map(i=>p`<span class="live-detect">${br[i]} ${S(t,`detect_${i==="vehicle"?"car":i}`)}</span>`)}
        <span class="live-spacer"></span>
        <button class="nf-chip" @click=${()=>this.endThrough()}>${S(t,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass)return m;let t=this.renderRoot.querySelector(".nf-stage"),n=t?.clientWidth??800,o=t?.clientHeight??600,i=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(o-360,e.y-170));return p`<div class="nf-menu-backdrop" @click=${()=>this._menu=null}></div>
      <nf-quick-menu
        style="left:${i}px;top:${s}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        @close=${()=>this._menu=null}
        @camera-look=${a=>this.lookThrough(a.detail.entity)}
      ></nf-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e==="grid"){let i=this.building,s=i?i.energy.grid??Qt(i,a=>this.furnitureLinks?.get(a.id)?.power??null).grid:null;s&&oe(this,s);return}if(e.startsWith("detect:")){oe(this,e.slice(7));return}let o=M(e);if(o==="cover"||o==="camera"){this._menu={entity:e,x:t,y:n};return}if(o&&mo.has(o)){if(this.confirmSet.has(e)&&!confirm(S(this.hass,"confirm_switch",{name:T(this.hass,e)})))return;Bo(this.hass,e)}else oe(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("nextfloor.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}liveCars(e,t){let n=[];for(let o of t.floors)for(let i of o.furniture){if(i.type!=="parking")continue;let s=Si(e,i);if(!s||s.soc===null&&s.range===null&&s.locked===null&&s.climateOn===null)continue;let a=sr(e,i),l=a?ii(i,a):null,c=i.name||(a?Se(e,a):Se(e,i.type));n.push({spot:i.id,name:c,at:{floorId:o.id,x:i.x,z:i.z,y:me(o,i)+(l?.h??.2)+.6},car:s})}return n}liveMedia(e,t){let n=[];for(let o of t.floors){for(let i of o.furniture){let s=this.furnitureLinks?.get(i.id)?.entity;s?.startsWith("media_player.")&&n.push({entity:s,name:i.name||Se(e,i.type),at:{floorId:o.id,x:i.x,z:i.z,y:me(o,i)+i.h+.15}})}for(let i of o.placements)i.entity_id.startsWith("media_player.")&&n.push({entity:i.entity_id,name:i.name||T(e,i.entity_id),at:{floorId:o.id,x:i.x,z:i.z,y:(i.y??1.1)+.15}})}return Fi(e,n)}syncLhCards(e,t,n,o,i){let s=[],a=n.summary,l=a.solar!==null||a.grid!==null||a.battery!==null||a.consumption!==null,c=un(t),u=[...t.floors].sort((d,h)=>h.elevation-d.elevation)[0];if(this.liveCardsOn&&!this.dimmed&&!this.roomId&&l&&c&&u){let d=0,h=0,g=0;for(let b of u.rooms)for(let[f,x]of b.points)d+=f,h+=x,g++;s.push({kind:"house",at:{floorId:u.id,x:g?d/g:c.x,z:g?h/g:c.z,y:u.height+3.2},summary:a,autarky:n.autarky})}if(this.liveCardsOn&&!this.dimmed&&!this.roomId){for(let d of o)s.push({kind:"car",at:d.at,spot:d.spot,name:d.name,car:d.car});for(let d of i)s.push({kind:"media",at:{...d.at,y:d.at.y+.5},media:d})}JSON.stringify(s)!==JSON.stringify(this._liveCards)&&(this._liveCards=s),e.setLiveAnchors(s.map(d=>d.at),s.length?(d,h,g,b)=>this.placeLhCard(d,h,g,b):null)}placeLhCard(e,t,n,o){let i=this.renderRoot.querySelector(`.live-card[data-i="${e}"]`);i&&(i.dataset.x=String(t),i.dataset.y=String(n),i.style.visibility=o?"visible":"hidden",e===this._liveCards.length-1&&Ei(this.renderRoot))}toggleLhCards(){this._liveCardOn=!this._liveCardOn;try{localStorage.setItem("nextfloor.cards",this._liveCardOn?"1":"0")}catch{}this.syncDevices(!0)}renderLhEnergy(){let e=this._liveEnergy?.summary;if(!e||this.roomId||!this.showEnergy||!this.hass)return m;if(e.consumption===null&&e.grid===null&&e.solar===null&&e.battery===null)return m;let t=o=>S(this.hass,o),n=[];if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ce(this.hass,e.solar)}),e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ce(this.hass,e.consumption)}),e.battery!==null||e.soc!==null){let o=[e.battery!==null?ce(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:o.join(" \xB7 ")})}if(e.grid!==null){let o=e.grid<0;n.push({cls:o?"export":"grid",label:t(o?"energy_grid_export":"energy_grid_import"),value:ce(this.hass,Math.abs(e.grid))})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${B(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),p`<div class="nf-energy" aria-live="off">
      ${this.liveCardsOn&&this._liveCards.some(o=>o.kind==="house")?m:n.map(o=>p`<div class="nf-energy-item nf-energy-${o.cls}"><span>${o.label}</span><b>${o.value}</b></div>`)}
      ${this.flows!==null?m:p`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._flows} title=${t("flows_hint")} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
            <span>${t("flows")}</span><b>⚡</b>
          </button>`}
      ${this.holograms!==null?m:p`<button class="nf-energy-item nf-flow-toggle" aria-pressed=${this._liveCardOn} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleLhCards()}>
            <span>${t("holos")}</span><b>◫</b>
          </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return m;let e=nn[this.heatMode],t=this.heatMode==="temperature",n=t?Ke(this.hass,e.stops[0][0]):e.stops[0][0],o=t?Ke(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?re(this.hass):e.unit,s=a=>S(this.hass,a);return p`<div class="nf-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="nf-legend-bar" style="background:${ni(this.heatMode)}"></span>
      <span class="nf-legend-range"><span>${B(this.hass,n,0)} ${i}</span><span>${B(this.hass,o,0)} ${i}</span></span>
      ${this.heatValues.size?m:p`<span class="nf-legend-none">${s("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=bt[this.theme]??bt.neon,t=this._sky;return e.night[0].map((n,o)=>Math.round(n+(e.day[0][o]-n)*t))}render(){let e=this._sky,t=(i,s)=>`rgb(${i.map((a,l)=>Math.round(a+(s[l]-a)*e)).join(",")})`,n=bt[this.theme]??bt.neon,o=`--nf-sky:${t(n.night[0],n.day[0])};--nf-ground:${t(n.night[1],n.day[1])}`;return p`<div
      class="nf-stage ${this.roomLabels?"":"nf-no-room-names"} ${this._low?"nf-low":""} ${this.panelOpen?"nf-panel-open":""} ${this._alerts.length?"nf-has-alerts":""} ${this._through?"nf-through-on":""} ${this._narrowStage?"nf-narrow":""}"
      style=${o}
    >
      ${this._error?p`<p class="nf-error">${this._error}</p>`:m} ${this.clean?m:this.renderLhEnergy()} ${Ai(this.hass,this.roomId||this.panelOpen||this._through||this.cameraWall?[]:this._liveCards,(i,s,a,l)=>this.hass?.callService(i,s,{entity_id:a,...l}))} ${this.clean?m:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean?m:p`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.renderSwipe()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?p`<span class="nf-stats"
            ><b>${this._stats.fps?S(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):S(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?p`(${this._stats.busy.map(i=>S(this.hass,`stats_busy_${i}`)).join(", ")})`:m} ·
            ${S(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${S(this.hass,this._stats.low?"stats_low":"stats_full",{r:B(this.hass,this._stats.pixelRatio,2)})}</span
          >`:m}
    </div>`}static styles=[ie,we,Ri,U`
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
    `]};customElements.get("nf-view3d")||customElements.define("nf-view3d",kr);function ce(r,e){return Math.abs(e)>=1e3?`${B(r,e/1e3,1)} kW`:`${Math.round(e)} W`}function ec(r){return r.type==="tv_board"?r.h+.9:r.type==="tv_wall"||r.type==="kitchen_wall"?r.h+.25:r.h+.35}var tc='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8 3c1.7 0 2.8 1.9 2.8 4.3S9.7 11 8 11 5.2 9.7 5.2 7.3 6.3 3 8 3m-1.8 9.5h3.6l-.6 3.4c-.2 1.2-1.1 2.1-2.2 2.1-1.2 0-1.9-1.1-1.7-2.3zM16 7c1.7 0 2.8 1.9 2.8 4.3S17.7 15 16 15s-2.8-1.3-2.8-3.7S14.3 7 16 7m-1.8 9.5h3.6l.9 2.4c.4 1.2-.4 2.1-1.6 2.1-1.1 0-2-.9-2.2-2.1z"/></svg>';function nc(r,e){let t=Math.max(0,Math.round((Date.now()/1e3-e)/60));return t<1?S(r,"live_now"):S(r,"live_minutes_ago",{n:t})}var rc={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="2.6"/><path d="M8.5 9.5h7l-1 6h-1.4L12.6 22h-1.2l-.5-6.5H9.5z"/></svg>',vehicle:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.6-4.2C6.9 6 7.6 5.5 8.4 5.5h7.2c.8 0 1.5.5 1.8 1.3L19 11h1v6h-2v1.5h-2.5V17h-7v1.5H6V17H4v-6zm2.4 0h9.2l-1-2.9H8.4zM7 14.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6m10 0a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6"/></svg>',animal:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><circle cx="6.5" cy="9" r="2"/><circle cx="17.5" cy="9" r="2"/><circle cx="9.5" cy="5" r="2"/><circle cx="14.5" cy="5" r="2"/><path d="M12 11c3 0 5.5 3.5 5.5 6.2 0 2-1.6 2.8-3.4 2.3-1.3-.4-2.9-.4-4.2 0-1.8.5-3.4-.3-3.4-2.3C6.5 14.5 9 11 12 11"/></svg>'};var qi;function Zi(){let r=new URL("./nextfloor-editor.js?v=edffce069b22",new URL(import.meta.url)).href;return qi??=import(r),qi}var oc=.25,Yi=r=>Math.round(r*1e3)/1e3,Ji=(r,e,t)=>r.rooms.find(n=>n.points.length>=3&&D([e,t],n.points));function $r(r,e,t,n,o){let i=Ji(r,e,t);if(!i)return[n,o];let s=(a,l)=>D([a,l],i.points);return s(n,o)?[n,o]:s(n,t)?[n,t]:s(e,o)?[e,o]:[e,t]}function ic(r,e,t,n){return r.rooms.some(o=>o.id!==e.id&&o.points.some((i,s)=>{let a=o.points[(s+1)%o.points.length];return Math.abs(X(K(i,t),n))<.02&&Math.abs(X(K(a,t),n))<.02}))}var Sr=(r,e)=>Math.abs((r-e+540)%360-180);function Qi(r,e,t,n=oc){let o=Ji(r,e.x,e.z);if(!o)return null;let i=o.points,s=We(i)>=0?1:-1,a=null;return i.forEach((l,c)=>{let u=i[(c+1)%i.length],d=he(K(u,l));if(d<.3)return;let h=[(u[0]-l[0])/d,(u[1]-l[1])/d],g=[-h[1]*s,h[0]*s],b=X(K([e.x,e.z],l),h);if(b<0||b>d)return;let f=ic(r,o,l,g)?t/2:0,x=X(K([e.x,e.z],l),g)-f,_=Math.atan2(-g[0],g[1])*180/Math.PI,y=[{rotation:_,extent:e.d/2},{rotation:_+90,extent:e.w/2},{rotation:_-90,extent:e.w/2}].reduce((R,z)=>Sr(e.rotation,z.rotation)<Sr(e.rotation,R.rotation)?z:R);if(Sr(e.rotation,y.rotation)>50)return;let w=x-y.extent;Math.abs(w)>n||a&&Math.abs(w)>=Math.abs(a.gap)||(a={x:Yi(e.x-g[0]*w),z:Yi(e.z-g[1]*w),rotation:(Math.round(y.rotation)%360+360)%360,gap:w})}),a&&{x:a.x,z:a.z,rotation:a.rotation}}function mn(r,e,t){let n=structuredClone(r);for(let o of n.floors){let i=o.furniture.find(s=>s.id===e);i&&t(i,o)}return n}function gn(r,e,t){let n=structuredClone(r);for(let o of n.floors){let i=o.placements.find(s=>s.entity_id===e);i&&t(i,o)}return n}function Xi(r,e){let t=structuredClone(r);for(let n of t.floors)n.furniture=n.furniture.filter(o=>o.id!==e);return t}function es(r,e){let t=structuredClone(r);for(let n of t.floors)n.placements=n.placements.filter(o=>o.entity_id!==e);return t}function ts(r,e,t,n){return gn(r,e,(o,i)=>{[o.x,o.z]=$r(i,o.x,o.z,t,n)})}function ns(r,e,t,n){let o=r.settings.wall_interior??.12;return mn(r,e,(i,s)=>{[i.x,i.z]=$r(s,i.x,i.z,t,n);let a=Qi(s,i,o);a&&Object.assign(i,a)})}var Mr=(r,e)=>((r+e)%360+360)%360,rs=r=>r==="camera"?15:45,os=r=>Number.parseFloat(r.replace(",",".")),Mt=(r,e)=>Math.round(r*10**e)/10**e;function _n(r){let{min:e,max:t,accepts:n=()=>!0}=r,o=i=>{let s=os(i.target.value);!Number.isFinite(s)||!n(s)||r.apply(t===void 0?s:Math.min(t,Math.max(e,s)))};return p`<label class="nf-size" title=${r.title}
    >${r.label}
    <input type="number" inputmode="decimal" step=${r.step} min=${e} max=${t??m} .value=${String(Mt(r.value,2))} @change=${o} />
  </label>`}var ss=(r,e)=>p`<button class="nf-chip" @click=${e}>${r.t("height_auto")}</button>`,is=(r,e)=>p`<button class="nf-chip" @click=${()=>e(-r)}>↺ ${r}°</button><button class="nf-chip" @click=${()=>e(r)}>↻ ${r}°</button>`;function sc(r,e){let t=r.building.floors.find(s=>s.furniture.some(a=>a.id===e)),n=t?.furniture.find(s=>s.id===e);if(!t||!n)return m;let o=(s,a)=>_n({label:r.t(a),title:r.t(`size_${s}`),value:n[s],step:.05,min:.05,accepts:l=>l>0,apply:l=>r.editFurniture(e,c=>c[s]=Mt(l,3))}),i=uo(n)?p`${_n({label:"\u2195",title:r.t("mount_height"),value:n.mount_y??me(t,n),step:.05,min:0,accepts:s=>s>=0,apply:s=>r.editFurniture(e,a=>a.mount_y=Mt(s,3))})}
      ${n.mount_y!=null?ss(r,()=>r.editFurniture(e,s=>s.mount_y=null)):m}`:m;return p`${o("w","size_short_w")}${o("d","size_short_d")}${o("h","size_short_h")} ${i}`}function ac(r,e){let t=r.building.floors.find(u=>u.placements.some(d=>d.entity_id===e)),n=t?.placements.find(u=>u.entity_id===e);if(!t||!n)return m;let o=M(e),i=n.mount==="ceiling",s=(u,d,h)=>p`<select class="nf-size-select" title=${r.t(u)} @change=${g=>r.editDevice(e,b=>Object.assign(b,{mount:g.target.value,y:null}))}>
      ${d.map(([g,b])=>p`<option value=${g} ?selected=${g===h}>${b}</option>`)}
    </select>`,a=(u,d,h,g,b,f)=>_n({label:r.t(d),title:r.t(d),value:n[u]??h,step:g,min:b,max:f,apply:x=>r.editDevice(e,_=>_[u]=x)}),l=["ceiling","floor","table","wall"].map(u=>[u,r.t(`lamp_${u}`)]),c=o?Ve(o,t.height,o==="light"||o==="camera"?n.mount??(o==="camera"?"wall":"ceiling"):null):1;return p`${o==="light"?s("lamp_mount",l,n.mount??"ceiling"):m}
    ${o==="camera"?p`${s("camera_mount",[["wall",r.t("camera_mount_wall")],["ceiling",r.t("camera_mount_ceiling")]],i?"ceiling":"wall")}
        ${a("fov","camera_fov_short",i?360:90,5,10,360)} ${a("reach","camera_reach_short",i?3:4.5,.5,.5,50)}
        ${a("tilt","camera_tilt_short",i?65:20,5,0,90)}`:m}
    ${_n({label:r.t("size_short_h"),title:r.t("marker_height"),value:n.y??c,step:.05,min:0,accepts:u=>u>=0,apply:u=>r.editDevice(e,d=>d.y=Mt(u,3))})}
    ${n.y!==null?ss(r,()=>r.editDevice(e,u=>u.y=null)):m}`}function as(r,e,t){let n=r.t,o;if(e){let i=r.building.floors.flatMap(s=>s.furniture).find(s=>s.id===e)?.type;o=p`<span>${i?Se(r.hass,i):""}</span>
      ${sc(r,e)} ${is(45,s=>r.turnFurniture(e,s))}
      <button class="nf-chip" title=${n("furn_mirror_hint")} @click=${()=>r.editFurniture(e,s=>s.mirror=!s.mirror)}>⇋ ${n("furn_mirror")}</button>
      <button class="nf-chip nf-danger-chip" @click=${()=>r.removeFurniture(e)}>${n("delete")}</button>`}else t?o=p`<span>${T(r.hass,t)}</span>
      ${ac(r,t)} ${is(rs(M(t)),i=>r.turnDevice(t,i))}
      <button class="nf-chip nf-danger-chip" @click=${()=>r.removeDevice(t)}>${n("delete")}</button>`:o=p`<span>${n("furnish_hint")}</span>`;return p`<div class="nf-furnish-bar">${o}<button class="nf-chip nf-chip-on" @click=${()=>r.finish()}>${n("done")}</button></div>`}var ls=De`<svg class="nf-mark" viewBox="60 40 392 420" aria-hidden="true">
  <polygon points="106,150 256,66 406,150 256,234" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="12" stroke-dasharray="6 22" stroke-linecap="round"/>
  <polygon points="106,382 256,466 256,488 106,404" fill="#34507d"/><polygon points="406,382 256,466 256,488 406,404" fill="#2a4068"/><polygon points="106,382 256,298 406,382 256,466" fill="#5f7fb6"/>
  <polygon points="106,310 256,394 256,416 106,332" fill="#4a72b8"/><polygon points="406,310 256,394 256,416 406,332" fill="#3b5c98"/><polygon points="106,310 256,226 406,310 256,394" fill="#8ab6f5"/>
  <polygon points="106,238 256,322 256,344 106,260" fill="#2a74d8"/><polygon points="406,238 256,322 256,344 406,260" fill="#2161b8"/><polygon points="106,238 256,154 406,238 256,322" fill="#4fb6ff"/>
  <circle cx="256" cy="236" r="16" fill="#ffe08a"/>
</svg>`;var Ae=(r,e)=>({name:r,fallback:e,read:t=>e?t!=="0":t==="1",write:t=>t?"1":"0"}),Et=(r,e,t)=>({name:r,fallback:t,read:n=>e.find(o=>o===n)??t,write:n=>n}),Er={explode:Ae("explode",!0),keepRoof:Ae("roof",!1),quality:Et("quality",["auto","low","high"],"auto"),stats:Ae("stats",!1),markers:Et("markers",["none","important","all"],"important"),heat:Et("heat",["none","temperature","humidity","co2","values"],"none"),theme:Et("theme",tn,"neon"),accent:{name:"accent",fallback:null,read:r=>/^#[0-9a-f]{6}$/i.test(r)?r:null,write:r=>r??""},floorStack:Et("floor_stack",["dim","stacked","single"],"dim"),roomNames:Ae("room_names",!0),trail:Ae("trail",!1),clean:Ae("clean",!1),navWrap:Ae("nav_wrap",!1),weather:Ae("weather",!0)};function cs(){try{return localStorage}catch{return null}}var bn=class{storage;constructor(e){this.storage=e}raw(e){try{return this.storage?.getItem(`nextfloor.${e}`)??null}catch{return null}}load(e=""){let t={};for(let n of Object.keys(Er)){let o=Er[n],i=this.raw(o.name);t[n]=i===null?o.fallback:o.read(i)}return new URLSearchParams(e).has("nf_stats")&&(t.stats=!0),t}save(e,t){let n=Er[e];try{this.storage?.setItem(`nextfloor.${n.name}`,n.write(t))}catch{}}};var us=U`
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
`;var Ar=class extends j{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_prefs:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_cameraWall:{state:!0},_optsOpen:{state:!0}};data=new Ne(this);store=new bn(cs());constructor(){super(),this.narrow=!1,this._mode="view",this._editorReady=!!customElements.get("nf-editor"),this._floorId=null,this._roomId=null,this._wallMode="auto",this._prefs=this.store.load(location.search),this._furnish=!1,this._selFurniture=null,this._selDevice=null,this._cameraWall=!1,this._optsOpen=!1}t=(e,t)=>S(this.hass,e,t);setPref(e,t){this._prefs={...this._prefs,[e]:t},this.store.save(e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.style.colorScheme=jt(this.hass),this.data.setHass(this.hass),Ze(this.hass.language)||Vt(this.hass.language).then(()=>this.requestUpdate()));let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(e==="view"&&this.data.flush(),this._mode=e)}openFloor(e){this._floorId=e,this._roomId=null}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t)return this.openFloor(t);n&&(this._roomId=n===this._roomId?null:n)}furnishHost={hass:void 0,building:void 0,t:this.t,editFurniture:(e,t)=>this.applyEdit(n=>mn(n,e,t)),editDevice:(e,t)=>this.applyEdit(n=>gn(n,e,t)),turnFurniture:(e,t)=>this.applyEdit(n=>mn(n,e,o=>o.rotation=Mr(o.rotation,t))),turnDevice:(e,t)=>this.applyEdit(n=>gn(n,e,o=>o.rotation=Mr(o.rotation??0,t))),removeFurniture:e=>{this.applyEdit(t=>Xi(t,e)),this._selFurniture=null},removeDevice:e=>{this.applyEdit(t=>es(t,e)),this._selDevice=null},finish:()=>{this._furnish=!1,this._selFurniture=null,this._selDevice=null}};applyEdit(e){let t=this.data.building;t&&this.data.edit(e(t))}view3d(){return this.renderRoot.querySelector("nf-view3d")}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key==="Escape"&&this._mode==="view"&&this.back()};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey)}render(){if(this.hass&&!Ze(this.hass.language))return m;let e=this.data.building,t=this._prefs.clean&&this._mode==="view",n=m;return e&&(this._mode==="editor"&&this.isAdmin?n=this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?n=this.renderExtensions():n=this.renderView(e)),p`<div class="nf-app ${t?"nf-clean":""}" style=${this._prefs.accent?`--nf-accent:${this._prefs.accent}`:""}>
      ${t?m:p`${this.renderHeader(e)}${this.renderNotices()}`}
      ${this.data.error&&!e?p`<p class="nf-message">${this.t("load_error")}: ${this.data.error}</p>`:m}
      ${!e&&!this.data.error?p`<p class="nf-message">${this.t("loading")}</p>`:m}
      ${n}
    </div>`}choiceRow(e,t,n,o,i,s=m){return p`<div class="nf-seg nf-quality" role=${e?"group":m} aria-label=${e?this.t(e):m}>
      ${t.map(a=>p`<button aria-pressed=${n===a} title=${e==="markers"?this.t("markers"):m} @click=${()=>i(a)}>${o(a)}</button>`)}${s}
    </div>`}accentPicker(){let e=this._prefs.accent;return p`<label class="nf-accent-pick" title=${this.t("accent_hint")}>
      <input type="color" .value=${e??"#37e0ff"} aria-label=${this.t("accent")} @input=${t=>this.setPref("accent",t.target.value)} />
      ${e?p`<button class="nf-accent-reset" title=${this.t("accent_reset")} aria-label=${this.t("accent_reset")} @click=${()=>this.setPref("accent",null)}>↺</button>`:m}
    </label>`}renderViewOptions(){let e=this._prefs;return p`<button class="nf-opts-btn" aria-expanded=${this._optsOpen} title=${this.t("view_options")} aria-label=${this.t("view_options")} @click=${()=>this._optsOpen=!this._optsOpen}>⚙</button>
      <div class="nf-view-opts ${this._optsOpen?"nf-opts-open":""}">
        ${this.choiceRow("quality",["auto","low","high"],e.quality,t=>this.t(`quality_${t}`),t=>this.setPref("quality",t))}
        ${this.choiceRow("theme",tn,e.theme,t=>this.t(`theme_${t}`),t=>this.setPref("theme",t),this.accentPicker())}
        ${this.choiceRow("markers",["none","important","all"],e.markers,t=>this.t(`markers_${t}`),t=>this.setPref("markers",t))}
        <div class="nf-seg nf-quality">
          <button aria-pressed=${e.stats} title=${this.t("fps_title")} @click=${()=>this.setPref("stats",!e.stats)}>${this.t("fps")}</button>
        </div>
      </div>`}renderHeader(e){let t=this.data.saveState,n=(i,s,a="")=>p`<button role="tab" class=${a} aria-pressed=${this._mode===i} @click=${()=>this.setMode(i)}>${s}</button>`,o=t==="saving"?"saving":t==="saved"?"saved":"save_error";return p`<header class="nf-header">
      <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
      <h1>${ls}NextFloor</h1>
      ${this.isAdmin?p`<div class="nf-seg" role="tablist">${n("view",this.t("view"))}${n("editor",this.t("editor"))}${n("extensions",`\u2726 ${this.t("ext_tab")}`,"nf-tab-ext")}</div>`:m}
      <span class="nf-grow"></span>
      ${this._mode==="view"&&e?.floors.some(i=>i.rooms.length)?this.renderViewOptions():m}
      ${this._mode==="editor"&&t!=="idle"?p`<span class="nf-save nf-save-${t}">${this.t(o)}</span>`:m}
      <span class="nf-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
    </header>`}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&t.push(e.versionGap==="frontend"?p`<div class="nf-notice nf-notice-warn">
              ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
              <button class="nf-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
            </div>`:p`<div class="nf-notice nf-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`),e.saveState==="error"&&e.saveError&&t.push(p`<div class="nf-notice nf-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(p`<div class="nf-notice">
        <span>${this.t("draft_found",{time:n})}</span>
        <button class="nf-btn nf-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
        <button class="nf-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
      </div>`)}return t.length>0?p`<div class="nf-notices">${t}</div>`:m}whenEditorLoaded(e){return this._editorReady?e():(Zi().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),p`<div class="nf-empty"><p>${this.t("loading")}</p></div>`)}renderExtensions(){return this.whenEditorLoaded(()=>p`<nf-extensions class="nf-body" .hass=${this.hass} .packs=${this.data.packs} @packs-changed=${()=>{this.data.reloadPacks()}}></nf-extensions>`)}renderEditor(e){return this.whenEditorLoaded(()=>p`<nf-editor
        class="nf-body"
        .hass=${this.hass}
        .building=${e}
        .narrow=${this.narrow}
        .packs=${this.data.packs}
        @packs-changed=${()=>{this.data.reloadPacks()}}
        @open-extensions=${()=>this.setMode("extensions")}
        @building-changed=${t=>this.data.edit(t.detail.building)}
      ></nf-editor>`)}onNavWheel=e=>{if(this._prefs.navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderNav(e){let t=e.floors.filter(l=>!this._floorId||l.id===this._floorId),n=e.floors.length>1,o=this._prefs.navWrap,i=n?p`<button class="nf-chip" aria-pressed=${this._floorId===null} @click=${()=>this.openFloor(null)}>${this.t("all_floors")}</button>
          ${[...e.floors].reverse().map(l=>p`<button class="nf-chip" aria-pressed=${l.id===this._floorId} @click=${()=>this.openFloor(l.id)}>${l.name}</button>`)}
          <span class="nf-sep"></span>`:m,s=t.flatMap(l=>[t.length>1&&l.rooms.length?p`<span class="nf-nav-floor">${l.name}</span>`:m,...l.rooms.map(c=>p`<button
          class="nf-chip nf-room-chip"
          aria-pressed=${c.id===this._roomId}
          @click=${()=>{n&&(this._floorId=l.id),this._roomId=c.id===this._roomId?null:c.id}}
        >
          ${c.name}
        </button>`)]),a=this.t(o?"nav_row":"nav_wrap");return p`<nav class="nf-nav ${o?"nf-nav-wrap":""}" @wheel=${this.onNavWheel}>
      ${i}${s}
      <button class="nf-chip nf-nav-toggle" title=${a} aria-label=${a} aria-pressed=${o} @click=${()=>this.setPref("navWrap",!o)}>${o?"\u2194":"\u2261"}</button>
    </nav>`}toggleChip(e,t,n){return p`<button class="nf-chip" aria-pressed=${this._prefs[e]} title=${n?this.t(n):m} @click=${()=>this.setPref(e,!this._prefs[e])}>${this.t(t)}</button>`}renderOverlay(e){let t=this._prefs,n=this.t,o=(l,c)=>p`<div class="nf-seg">${[l,c].map(([u,d,h])=>p`<button aria-pressed=${u} @click=${d}>${h}</button>`)}</div>`,i=["none","temperature","humidity","co2","values"],s=["dim","stacked","single"],a=e.floors.length>1;return p`<div class="nf-overlay">
      ${o([this._wallMode==="auto",()=>this._wallMode="auto",n("walls_auto")],[this._wallMode==="cut",()=>this._wallMode="cut",n("walls_cut")])}
      ${a&&!this._floorId?o([t.explode,()=>this.setPref("explode",!0),n("floors_apart")],[!t.explode,()=>this.setPref("explode",!1),n("floors_stacked")]):m}
      ${!this._floorId&&e.settings.roof.type!=="none"?p`<div class="nf-seg"><button aria-pressed=${t.keepRoof} title=${n("roof_keep_hint")} @click=${()=>this.setPref("keepRoof",!t.keepRoof)}>${n("roof_keep")}</button></div>`:m}
      ${a&&this._floorId?p`<div class="nf-seg" role="group" aria-label=${n("card_floor_stack")}>
            ${s.map(l=>p`<button aria-pressed=${t.floorStack===l} @click=${()=>this.setPref("floorStack",l)}>${n(`floor_stack_short_${l}`)}</button>`)}
          </div>`:m}
      <div class="nf-seg" role="group" aria-label=${n("heatmap")}>
        ${i.map(l=>p`<button aria-pressed=${t.heat===l} @click=${()=>this.setPref("heat",l)}>${n(l==="none"?"heat_off":`heat_short_${l}`)}</button>`)}
      </div>
      ${this.toggleChip("roomNames","room_names_short")} ${this.toggleChip("trail","trail_short","trail_hint")}
      <button class="nf-chip" aria-pressed=${this._cameraWall} title=${n("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${n("cameras_short")}</button>
      ${this.toggleChip("weather","weather_short","weather_hint")}
      ${this._roomId||this._floorId&&a?p`<button class="nf-chip" @click=${()=>this.back()}>${n("back")}</button>`:m}
    </div>`}renderView(e){if(!e.floors.some(o=>o.rooms.length))return p`<div class="nf-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?p`<button class="nf-btn nf-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>`:m}
      </div>`;let t=this._prefs,n=e.floors.flatMap(o=>o.rooms).find(o=>o.id===this._roomId)??null;return this.furnishHost.hass=this.hass,this.furnishHost.building=e,p`
      ${t.clean?m:this.renderNav(e)}
      <div class="nf-stage-wrap ${this._roomId?"nf-room-open":""}">
        <nf-view3d
          class="nf-body"
          .hass=${this.hass}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${t.floorStack}
          .roomLabels=${t.roomNames}
          ?trail=${t.trail}
          .cameraWall=${this._cameraWall}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${t.clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>this.setPref("clean",!t.clean)}
          ?weather=${t.weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${t.explode}
          .keepRoof=${t.keepRoof}
          .markerMode=${t.markers}
          .heatMode=${t.heat}
          .theme=${t.theme}
          .accent=${t.accent}
          ?furnish=${this._furnish}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${o=>this._selFurniture=o.detail.id}
          @furniture-move=${o=>this.applyEdit(i=>ns(i,o.detail.id,o.detail.x,o.detail.z))}
          @device-select=${o=>this._selDevice=o.detail.id}
          @device-move=${o=>this.applyEdit(i=>ts(i,o.detail.id,o.detail.x,o.detail.z))}
          .quality=${t.quality}
          ?showStats=${t.stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${o=>this.openFloor(o.detail.floorId)}
          @back=${()=>this.back()}
        ></nf-view3d>
        ${n?p`<nf-room-panel
              class="nf-room-panel"
              @camera-look=${o=>this.view3d()?.lookThrough(o.detail.entity)}
              .hass=${this.hass}
              .room=${n}
              .floor=${e.floors.find(o=>o.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${qe(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></nf-room-panel>`:m}
        ${t.clean?m:this.renderOverlay(e)}
        ${this._furnish?as(this.furnishHost,this._selFurniture,this._selDevice):m}
      </div>
    `}static styles=[ie,we,us]};customElements.get("nextfloor-panel")||customElements.define("nextfloor-panel",Ar);var lc=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/,ds=(r,e)=>Number(r)*60+Number(e);function At(r,e,t=new Date){if(!r||r==="off")return!1;if(r==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=lc.exec(r.trim());if(!n)return!1;let o=ds(n[1],n[2]),i=ds(n[3],n[4]),s=t.getHours()*60+t.getMinutes();return o>i?s>=o||s<i:s>=o&&s<i}var vn=class{host;cleanTimer;idleTimer;nightTimer;constructor(e){this.host=e}armClean(e=!1){clearTimeout(this.cleanTimer);let t=this.host.config()?.controls_hide_after??0;t>0&&(e&&this.host.isClean()&&this.host.setClean(!1),this.cleanTimer=setTimeout(()=>this.host.setClean(!0),t*1e3))}stopClean(){clearTimeout(this.cleanTimer)}armIdle(){clearTimeout(this.idleTimer);let e=this.host.config()?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.host.goHome(),e*1e3))}touched(){this.host.isOrbit()&&this.host.setOrbit(!1),this.armIdle(),this.armClean(!0)}start(){this.armIdle(),this.nightTimer=setInterval(()=>this.host.setNight(At(this.host.config()?.night,this.host.hass())),6e4)}stop(){clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}};var hs=U`
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
`;var ps;function fs(){let r=new URL("./nextfloor-card-editor.js?v=9ba76c7a9edb",new URL(import.meta.url)).href;return ps??=import(r),ps}var Rr=class extends j{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;data=new Ne(this);kiosk=new vn({config:()=>this._config,hass:()=>this.hass,setClean:e=>this._clean=e,isClean:()=>this._clean,setOrbit:e=>this._orbit=e,isOrbit:()=>this._orbit,setNight:e=>this._night=e,goHome:()=>this.returnHome()});constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._fullscreen=!1,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}view3d(){return this.shadowRoot?.querySelector("nf-view3d")}returnHome(){this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0;connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),this.kiosk.start()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),this.kiosk.stop()}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await fs(),document.createElement("nextfloor-card-editor")}static getStubConfig(){return{type:"custom:nextfloor-card"}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=null,this._heat=null,this._explode=null,this._orbit=!1,this._night=At(e.night,this.hass),this._clean=e.controls_hidden===!0,this.kiosk.armClean(),this.kiosk.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&(this.style.colorScheme=jt(this.hass)),!e.has("hass")||!this.hass)return;this.data.setHass(this.hass),Ze(this.hass.language)||Vt(this.hass.language).then(()=>this.requestUpdate());let t=At(this._config?.night,this.hass);t!==this._night&&(this._night=t)}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}t=e=>S(this.hass,e);stage(){let e=this.data.building,t=this._config,n=this._floorId===void 0?t?.floor??null:this._floorId,o=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(a=>a.id===n)?n:null,i=!!this._roomId&&t?.room_panel!==!1,s=!!this._roomId&&t?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!o&&(e?.floors.length??0)>1;return{floorId:o,walls:this._walls??t?.walls??"auto",heat:this._heat??t?.heatmap??"none",explode:this._explode??t?.explode??!0,canGoBack:s,showBar:!!e&&!this._clean&&(s||!!t?.controls&&!i)}}shows(e){let t=this._config?.controls;return t===!0||Array.isArray(t)&&t.includes(e)}renderBar(e){let t=this.data.building,n=this._config,o=this.t,i=["temperature","humidity","co2"].filter(a=>this.shows(a)),s=(a,l)=>p`<div class="nf-seg" role=${a?"group":m} aria-label=${a??m}>${l.map(([c,u,d])=>p`<button aria-pressed=${c} @click=${u}>${d}</button>`)}</div>`;return p`<div class="nf-card-controls">
      ${e.canGoBack?p`<button class="nf-chip" @click=${()=>this.back()}>${o("back")}</button>`:m}
      ${n?.camera_wall?p`<button class="nf-chip" aria-pressed=${this._cameraWall} title=${o("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${o("cameras_short")}</button>`:m}
      ${this.shows("walls")?s(void 0,[[e.walls==="auto",()=>this._walls="auto",o("walls_auto")],[e.walls==="cut",()=>this._walls="cut",o("walls_cut")]]):m}
      ${this.shows("floors")&&t.floors.length>1&&!e.floorId?s(void 0,[[e.explode,()=>this._explode=!0,o("floors_apart")],[!e.explode,()=>this._explode=!1,o("floors_stacked")]]):m}
      ${i.length>0?s(o("heatmap"),["none",...i].map(a=>[e.heat===a,()=>this._heat=a,o(a==="none"?"heat_off":`heat_short_${a}`)])):m}
    </div>`}renderCorners(){let e=this._config,t=this.t,n=this._clean||!!this._roomId&&e?.room_panel!==!1;return p`${e?.fullscreen_button&&!n?p`<button class="nf-card-full" title=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${t(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
          ${this._fullscreen?"\u2715":"\u26F6"}
        </button>`:m}
    ${e?.dashboard&&!n?p`<button class="nf-card-full nf-card-dash ${e.fullscreen_button?"nf-card-dash-2":""}" title=${e.dashboard_label||e.dashboard} aria-label=${e.dashboard_label||e.dashboard} @click=${()=>this.openDashboard(e.dashboard)}>
          ${e.dashboard_label?p`<span>${e.dashboard_label}</span>`:"\u2302"}
        </button>`:m}`}renderStage(e){let t=this.data.building,n=this._config,o=()=>{this._clean=!this._clean,this._clean?this.kiosk.stopClean():this.kiosk.armClean()},i=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0;return p`<nf-view3d
      .hass=${this.hass}
      .building=${t}
      .packs=${this.data.packs}
      .floorId=${e.floorId}
      .roomId=${this._roomId}
      .wallMode=${e.walls}
      .explode=${e.explode}
      .keepRoof=${n?.roof_fade===!1}
      .quality=${n?.quality??"auto"}
      ?showStats=${n?.stats??!1}
      .markerMode=${n?.markers??"important"}
      .markerNames=${n?.marker_names===!0}
      .central=${n?.central!==!1}
      .buttons=${n?.buttons?.map((s,a)=>({id:`card_${a}`,...s}))??null}
      .heatMode=${e.heat}
      .theme=${n?.theme??"neon"}
      .accent=${n?.accent??null}
      .showEnergy=${n?.energy??!0}
      .flows=${n?.flows??null}
      .holograms=${n?.holograms??null}
      .floorThumbs=${this.thumbs}
      .roomLabels=${n?.room_names!==!1}
      .floorStack=${n?.floor_stack??"dim"}
      .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
      .alerts=${n?.alerts!==!1}
      .alertJump=${!!n?.alert_jump}
      .scenes=${n?.scenes!==!1}
      ?trail=${!!n?.motion_trail}
      .cameraWall=${this._cameraWall}
      @camera-wall-close=${()=>this._cameraWall=!1}
      @camera-wall-open=${()=>this._cameraWall=!0}
      .clean=${this._clean}
      .cleanButton=${i}
      @clean-toggle=${o}
      ?weather=${n?.weather!==!1}
      .weatherEntityId=${n?.weather_entity??null}
      .dimmed=${this._night}
      .autoOrbit=${this._orbit}
      .startView=${n?.start_view??null}
      style=${e.showBar?"--nf-bottom-inset: 52px":""}
      @room-tap=${s=>{this.canSwitch&&t.floors.length>1&&s.detail.floorId&&e.floorId!==s.detail.floorId?(this._floorId=s.detail.floorId,this._roomId=null):s.detail.roomId&&(this._roomId=s.detail.roomId===this._roomId?null:s.detail.roomId)}}
      @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
      @back=${()=>this.back()}
    ></nf-view3d>`}renderRoomPanel(){let e=this.data.building;return p`<nf-room-panel
      @camera-look=${t=>this.view3d()?.lookThrough(t.detail.entity)}
      class="nf-card-panel"
      .hass=${this.hass}
      .room=${e.floors.flatMap(t=>t.rooms).find(t=>t.id===this._roomId)??null}
      .floor=${e.floors.find(t=>t.rooms.some(n=>n.id===this._roomId))??null}
      .confirmEntities=${qe(this.hass,e.floors)}
      @close=${()=>this._roomId=null}
    ></nf-room-panel>`}render(){if(this.hass&&!Ze(this.hass.language))return m;let e=this.data.building,t=this._config;!this.roomApplied&&e&&t?.room&&(this.roomApplied=!0,e.floors.some(a=>a.rooms.some(l=>l.id===t.room))&&(this._roomId=t.room));let n=this.stage(),o=this._fullscreen?"100vh":t?.fill?"calc(100vh - var(--header-height, 56px) - 16px)":`${t?.height??420}px`,i=/^#[0-9a-f]{6}$/i.test(t?.accent??"")?t.accent:null,s=()=>this.kiosk.touched();return p`<ha-card class=${this._night?"nf-night":""} style=${i?`--nf-accent:${i}`:""} @pointerdown=${s} @keydown=${s} @wheel=${s}>
      <div class="nf-card-body" style="height:${o}">
        ${e&&e.floors.some(a=>a.rooms.length)?this.renderStage(n):p`<p class="nf-card-msg">${this.data.error??(e?S(this.hass,"no_building"):S(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&t?.room_panel!==!1?this.renderRoomPanel():m}
        ${n.showBar&&e?this.renderBar(n):m}
        ${this.renderCorners()}
      </div>
    </ha-card>`}static styles=[ie,we,hs]};if(!customElements.get("nextfloor-card")){customElements.define("nextfloor-card",Rr);let r=window;r.customCards=r.customCards??[],r.customCards.push({type:"nextfloor-card",name:S(void 0,"card_name"),description:S(void 0,"card_description"),preview:!1})}
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
