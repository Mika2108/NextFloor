/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var Kp=0,mh=1,Zp=2;var Zo=1,Jp=2,Ur=3,mi=0,Qt=1,_t=2,gi=0,xi=1,dt=2,gh=3,Jo=4,jp=5;var Vs=100,Qp=101,em=102,tm=103,nm=104,im=200,sm=201,rm=202,om=203,xh=204,bh=205,am=206,lm=207,cm=208,um=209,hm=210,fm=211,dm=212,pm=213,mm=214,gl=0,xl=1,bl=2,Sr=3,yl=4,_l=5,vl=6,Ml=7,Gl=0,gm=1,xm=2,Zn=0,yh=1,_h=2,vh=3,Mh=4,Sh=5,wh=6,Th=7,Qu="attached",bm="detached",Ah=300,ls=301,Gs=302,Hl=303,Wl=304,jo=306,Kn=1e3,hn=1001,wr=1002,Dt=1003,Xl=1004;var Hs=1005;var Ot=1006,Br=1007;var Jn=1008;var vn=1009,Eh=1010,Rh=1011,kr=1012,ql=1013,jn=1014,Pn=1015,Qn=1016,Yl=1017,$l=1018,zr=1020,Ch=35902,Ih=35899,Ph=1021,Lh=1022,Ln=1023,ci=1026,cs=1027,Kl=1028,Zl=1029,us=1030,Jl=1031;var jl=1033,Qo=33776,ea=33777,ta=33778,na=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37488,ac=37489,ia=37490,lc=37491,cc=37808,uc=37809,hc=37810,fc=37811,dc=37812,pc=37813,mc=37814,gc=37815,xc=37816,bc=37817,yc=37818,_c=37819,vc=37820,Mc=37821,Sc=36492,wc=36494,Tc=36495,Ac=36283,Ec=36284,sa=36285,Rc=36286;var Rs=2300,Cs=2301,dl=2302,eh=2303,th=2400,nh=2401,ih=2402,ym=2500;var Fh=0,ra=1,Vr=2,_m=3200;var oa=0,vm=1,Vi="",yt="srgb",fn="srgb-linear",Eo="linear",ft="srgb";var pl=7680;var Mm=519,Sm=512,wm=513,Tm=514,Cc=515,Am=516,Em=517,Ic=518,Rm=519,Dh=35044,Oh=35048;var Nh="300 es",Yn=2e3,Tr=2001;function cb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ub(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cm(){let i=Ar("canvas");return i.style.display="block",i}var rp={},Er=null;function Ro(...i){let e="THREE."+i.shift();Er?Er("log",e,...i):console.log(e,...i)}function Im(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=Im(i);let e="THREE."+i.shift();if(Er)Er("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=Im(i);let e="THREE."+i.shift();if(Er)Er("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Es(...i){let e=i.join(" ");e in rp||(rp[e]=!0,Ee(...i))}function Pm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Lm={[gl]:xl,[bl]:vl,[yl]:Ml,[Sr]:_l,[xl]:gl,[vl]:bl,[Ml]:yl,[_l]:Sr},ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],op=1234567,To=Math.PI/180,Is=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Uh(i,e){return(i%e+e)%e}function hb(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function fb(i,e,t){return i!==e?(t-i)/(e-i):0}function Ao(i,e,t){return(1-t)*i+t*e}function db(i,e,t,n){return Ao(i,e,1-Math.exp(-t*n))}function pb(i,e=1){return e-Math.abs(Uh(i,e*2)-e)}function mb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gb(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function xb(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bb(i,e){return i+Math.random()*(e-i)}function yb(i){return i*(.5-Math.random())}function _b(i){i!==void 0&&(op=i);let e=op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vb(i){return i*To}function Mb(i){return i*Is}function Sb(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wb(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ab(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*f,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*f,a*c);break;case"ZXZ":i.set(l*f,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Bh={DEG2RAD:To,RAD2DEG:Is,generateUUID:$n,clamp:et,euclideanModulo:Uh,mapLinear:hb,inverseLerp:fb,lerp:Ao,damp:db,pingpong:pb,smoothstep:mb,smootherstep:gb,randInt:xb,randFloat:bb,randFloatSpread:yb,seededRandom:_b,degToRad:vb,radToDeg:Mb,isPowerOfTwo:Sb,ceilPowerOfTwo:wb,floorPowerOfTwo:Tb,setQuaternionFromProperEuler:Ab,normalize:gt,denormalize:qn},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;var Le=Hh,En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(f!==x||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*x;g<0&&(h=-h,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),v=Math.sin(y);p=Math.sin(p*y)/v,a=Math.sin(a*y)/v,l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+x*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+m*a,f=f*p+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-a*d,e[t+2]=c*m+u*d+a*h-l*f,e[t+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wh=class Wh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ap.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wh.prototype.isVector3=!0;var U=Wh,Ru=new U,ap=new En,Xh=class Xh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],v=s[4],b=s[7],_=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+l*_,r[3]=o*g+a*v+l*S,r[6]=o*p+a*b+l*A,r[1]=c*x+u*y+f*_,r[4]=c*g+u*v+f*S,r[7]=c*p+u*b+f*A,r[2]=h*x+d*y+m*_,r[5]=h*g+d*v+m*S,r[8]=h*p+d*b+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=t*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=f*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xh.prototype.isMatrix3=!0;var ze=Xh,Cu=new ze,lp=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eb(){let i={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fn]:{primaries:e,whitePoint:n,transfer:Eo,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var $e=Eb();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var sr,Sl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{sr===void 0&&(sr=Ar("canvas")),sr.width=e.width,sr.height=e.height;let s=sr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rb=0,Rr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Iu(s[o].image)):r.push(Iu(s[o]))}else r=Iu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var Cb=0,Pu=new U,qt=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,s=hn,r=Ot,o=Jn,a=Ln,l=vn,c=i.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=$n(),this.name="",this.source=new Rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Pu).x}get height(){return this.source.getSize(Pu).y}get depth(){return this.source.getSize(Pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Ah;qt.DEFAULT_ANISOTROPY=1;var qh=class qh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(d+1)/2,_=(p+1)/2,S=(u+h)/4,A=(f+x)/4,M=(m+g)/4;return v>b&&v>_?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=A/n):b>_?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=M/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=A/r,s=M/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qh.prototype.isVector4=!0;var xt=qh,wl=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new qt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Co=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tl=class extends qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Vl=class Vl{constructor(e,t,n,s,r,o,a,l,c,u,f,h,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,f,h,d,m,x,g)}set(e,t,n,s,r,o,a,l,c,u,f,h,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/rr.setFromMatrixColumn(e,0).length(),r=1/rr.setFromMatrixColumn(e,1).length(),o=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,d=o*f,m=a*u,x=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-x*c,t[9]=-a*l,t[2]=x-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,m=c*u,x=c*f;t[0]=h-x*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*u,d=o*f,m=a*u,x=a*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-x*f}else if(e.order==="XZY"){let h=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+x,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ib,e,Pb)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Zi.crossVectors(n,Tn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Zi.crossVectors(n,Tn)),Zi.normalize(),Ua.crossVectors(Tn,Zi),s[0]=Zi.x,s[4]=Ua.x,s[8]=Tn.x,s[1]=Zi.y,s[5]=Ua.y,s[9]=Tn.y,s[2]=Zi.z,s[6]=Ua.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],v=n[7],b=n[11],_=n[15],S=s[0],A=s[4],M=s[8],T=s[12],C=s[1],D=s[5],P=s[9],F=s[13],R=s[2],O=s[6],N=s[10],B=s[14],H=s[3],z=s[7],W=s[11],q=s[15];return r[0]=o*S+a*C+l*R+c*H,r[4]=o*A+a*D+l*O+c*z,r[8]=o*M+a*P+l*N+c*W,r[12]=o*T+a*F+l*B+c*q,r[1]=u*S+f*C+h*R+d*H,r[5]=u*A+f*D+h*O+d*z,r[9]=u*M+f*P+h*N+d*W,r[13]=u*T+f*F+h*B+d*q,r[2]=m*S+x*C+g*R+p*H,r[6]=m*A+x*D+g*O+p*z,r[10]=m*M+x*P+g*N+p*W,r[14]=m*T+x*F+g*B+p*q,r[3]=y*S+v*C+b*R+_*H,r[7]=y*A+v*D+b*O+_*z,r[11]=y*M+v*P+b*N+_*W,r[15]=y*T+v*F+b*B+_*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],y=l*d-c*h,v=a*d-c*f,b=a*h-l*f,_=o*d-c*u,S=o*h-l*u,A=o*f-a*u;return t*(x*y-g*v+p*b)-n*(m*y-g*_+p*S)+s*(m*v-x*_+p*A)-r*(m*b-x*S+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],y=t*a-n*o,v=t*l-s*o,b=t*c-r*o,_=n*l-s*a,S=n*c-r*a,A=s*c-r*l,M=u*x-f*m,T=u*g-h*m,C=u*p-d*m,D=f*g-h*x,P=f*p-d*x,F=h*p-d*g,R=y*F-v*P+b*D+_*C-S*T+A*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return e[0]=(a*F-l*P+c*D)*O,e[1]=(s*P-n*F-r*D)*O,e[2]=(x*A-g*S+p*_)*O,e[3]=(h*S-f*A-d*_)*O,e[4]=(l*C-o*F-c*T)*O,e[5]=(t*F-s*C+r*T)*O,e[6]=(g*b-m*A-p*v)*O,e[7]=(u*A-h*b+d*v)*O,e[8]=(o*P-a*C+c*M)*O,e[9]=(n*C-t*P-r*M)*O,e[10]=(m*S-x*b+p*y)*O,e[11]=(f*b-u*S-d*y)*O,e[12]=(a*T-o*D-l*M)*O,e[13]=(t*D-n*T+s*M)*O,e[14]=(x*v-m*_-g*y)*O,e[15]=(u*_-f*v+h*y)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,x=o*u,g=o*f,p=a*f,y=l*c,v=l*u,b=l*f,_=n.x,S=n.y,A=n.z;return s[0]=(1-(x+p))*_,s[1]=(d+b)*_,s[2]=(m-v)*_,s[3]=0,s[4]=(d-b)*S,s[5]=(1-(h+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+v)*A,s[9]=(g-y)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=rr.set(s[0],s[1],s[2]).length(),a=rr.set(s[4],s[5],s[6]).length(),l=rr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,f=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,t.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Yn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Tr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Yn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Tr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vl.prototype.isMatrix4=!0;var Ge=Vl,rr=new U,Gn=new Ge,Ib=new U(0,0,0),Pb=new U(1,1,1),Zi=new U,Ua=new U,Tn=new U,up=new Ge,hp=new En,hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hi.DEFAULT_ORDER="XYZ";var Cr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lb=0,fp=new U,or=new En,Ai=new Ge,Ba=new U,fo=new U,Fb=new U,Db=new En,dp=new U(1,0,0),pp=new U(0,1,0),mp=new U(0,0,1),gp={type:"added"},Ob={type:"removed"},ar={type:"childadded",child:null},Lu={type:"childremoved",child:null},St=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new U,t=new hi,n=new En,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(fo,Ba,this.up):Ai.lookAt(Ba,fo,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),or.setFromRotationMatrix(Ai),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),ar.child=e,this.dispatchEvent(ar),ar.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ob),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,Fb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,Db,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new U(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nb={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ka={h:0,s:0,l:0};function Fu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=Uh(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fu(o,r,e+1/3),this.g=Fu(o,r,e),this.b=Fu(o,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=Fm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return $e.workingToColorSpace(sn.copy(this),e),Math.round(et(sn.r*255,0,255))*65536+Math.round(et(sn.g*255,0,255))*256+Math.round(et(sn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=yt){$e.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ka);let n=Ao(Ji.h,ka.h,t),s=Ao(Ji.s,ka.s,t),r=Ao(Ji.l,ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new K;K.NAMES=Fm;var Ps=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Di=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new U,Ei=new U,Du=new U,Ri=new U,lr=new U,cr=new U,xp=new U,Ou=new U,Nu=new U,Uu=new U,Bu=new xt,ku=new xt,zu=new xt,Li=class i{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),Ei.subVectors(n,t),Du.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(Ei),l=Hn.dot(Du),c=Ei.dot(Ei),u=Ei.dot(Du),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Bu.setScalar(0),ku.setScalar(0),zu.setScalar(0),Bu.fromBufferAttribute(e,t),ku.fromBufferAttribute(e,n),zu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bu,r.x),o.addScaledVector(ku,r.y),o.addScaledVector(zu,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),Ei.subVectors(e,t),Hn.cross(Ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Hn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,n),cr.subVectors(r,n),Ou.subVectors(e,n);let l=lr.dot(Ou),c=cr.dot(Ou);if(l<=0&&c<=0)return t.copy(n);Nu.subVectors(e,s);let u=lr.dot(Nu),f=cr.dot(Nu);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(lr,o);Uu.subVectors(e,r);let d=lr.dot(Uu),m=cr.dot(Uu);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(cr,a);let g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return xp.subVectors(r,s),a=(f-u)/(f-u+(d-m)),t.copy(s).addScaledVector(xp,a);let p=1/(g+x+h);return o=x*p,a=h*p,t.copy(n).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(po),Va.subVectors(this.max,po),ur.subVectors(e.a,po),hr.subVectors(e.b,po),fr.subVectors(e.c,po),ji.subVectors(hr,ur),Qi.subVectors(fr,hr),Ss.subVectors(ur,fr);let t=[0,-ji.z,ji.y,0,-Qi.z,Qi.y,0,-Ss.z,Ss.y,ji.z,0,-ji.x,Qi.z,0,-Qi.x,Ss.z,0,-Ss.x,-ji.y,ji.x,0,-Qi.y,Qi.x,0,-Ss.y,Ss.x,0];return!Vu(t,ur,hr,fr,Va)||(t=[1,0,0,0,1,0,0,0,1],!Vu(t,ur,hr,fr,Va))?!1:(Ga.crossVectors(ji,Qi),t=[Ga.x,Ga.y,Ga.z],Vu(t,ur,hr,fr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new U,new U,new U,new U,new U,new U,new U,new U],Wn=new U,za=new Nt,ur=new U,hr=new U,fr=new U,ji=new U,Qi=new U,Ss=new U,po=new U,Va=new U,Ga=new U,ws=new U;function Vu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Gt=new U,Ha=new Le,Ub=0,Wt=class extends ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ub++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ha.fromBufferAttribute(this,t),Ha.applyMatrix3(e),this.setXY(t,Ha.x,Ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Io=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ls=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bb=new Nt,mo=new U,Gu=new U,gn=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mo.subVectors(e,this.center);let t=mo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(mo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mo.copy(e.center).add(Gu)),this.expandByPoint(mo.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kb=0,Dn=new Ge,Hu=new St,dr=new U,An=new Nt,go=new Nt,jt=new U,Ue=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cb(e)?Ls:Io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Hu.lookAt(e),Hu.updateMatrix(),this.applyMatrix4(Hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];go.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(An.min,go.min),An.expandByPoint(jt),jt.addVectors(An.max,go.max),An.expandByPoint(jt)):(An.expandByPoint(go.min),An.expandByPoint(go.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(dr.fromBufferAttribute(e,c),jt.add(dr)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new U,l[M]=new U;let c=new U,u=new U,f=new U,h=new Le,d=new Le,m=new Le,x=new U,g=new U;function p(M,T,C){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,C),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),u.sub(c),f.sub(c),d.sub(h),m.sub(h);let D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),a[M].add(x),a[T].add(x),a[C].add(x),l[M].add(g),l[T].add(g),l[C].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,T=y.length;M<T;++M){let C=y[M],D=C.start,P=C.count;for(let F=D,R=D+P;F<R;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new U,b=new U,_=new U,S=new U;function A(M){_.fromBufferAttribute(s,M),S.copy(_);let T=a[M];v.copy(T),v.sub(_.multiplyScalar(_.dot(T))).normalize(),b.crossVectors(S,T);let D=b.dot(l[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,D)}for(let M=0,T=y.length;M<T;++M){let C=y[M],D=C.start,P=C.count;for(let F=D,R=D+P;F<R;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,d=e.count;h<d;h+=3){let m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new Wt(h,u,f)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dh,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},un=new U,ns=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wu=new U,zb=new U,Vb=new ze,Xn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wu.subVectors(n,t).cross(zb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Vb.getNormalMatrix(e),s=this.coplanarPoint(Wu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gb=0,on=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=xi,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=bh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=Sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pl,this.stencilZFail=pl,this.stencilZPass=pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},is=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pr,xo=new U,mr=new U,gr=new U,xr=new Le,bo=new Le,Dm=new Ge,Wa=new U,yo=new U,Xa=new U,bp=new Le,Xu=new Le,yp=new Le,Ds=class extends St{constructor(e=new is){if(super(),this.isSprite=!0,this.type="Sprite",pr===void 0){pr=new Ue;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fs(t,5);pr.setIndex([0,1,2,0,2,3]),pr.setAttribute("position",new ns(n,3,0,!1)),pr.setAttribute("uv",new ns(n,2,3,!1))}this.geometry=pr,this.material=e,this.center=new Le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mr.setFromMatrixScale(this.matrixWorld),Dm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mr.multiplyScalar(-gr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;qa(Wa.set(-.5,-.5,0),gr,o,mr,s,r),qa(yo.set(.5,-.5,0),gr,o,mr,s,r),qa(Xa.set(.5,.5,0),gr,o,mr,s,r),bp.set(0,0),Xu.set(1,0),yp.set(1,1);let a=e.ray.intersectTriangle(Wa,yo,Xa,!1,xo);if(a===null&&(qa(yo.set(-.5,.5,0),gr,o,mr,s,r),Xu.set(0,1),a=e.ray.intersectTriangle(Wa,Xa,yo,!1,xo),a===null))return;let l=e.ray.origin.distanceTo(xo);l<e.near||l>e.far||t.push({distance:l,point:xo.clone(),uv:Li.getInterpolation(xo,Wa,yo,Xa,bp,Xu,yp,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qa(i,e,t,n,s,r){xr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(bo.x=r*xr.x-s*xr.y,bo.y=s*xr.x+r*xr.y):bo.copy(xr),i.copy(e),i.x+=bo.x,i.y+=bo.y,i.applyMatrix4(Dm)}var Ii=new U,qu=new U,Ya=new U,$a=new U,ss=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qu.copy(e).add(t).multiplyScalar(.5),Ya.copy(t).sub(e).normalize(),$a.copy(this.origin).sub(qu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ya),a=$a.dot(this.direction),l=-$a.dot(Ya),c=$a.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(qu).addScaledVector(Ya,h),d}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=n.x-o.x,y=n.y-o.y,v=n.z-o.z,b=Math.abs(l),_=Math.abs(c),S=Math.abs(u),A,M,T,C,D,P,F,R,O,N,B,H;if(b>=_&&b>=S?(T=l,P=f,O=m,H=p,l>=0?(A=c,M=u,C=h,D=d,F=x,R=g,N=y,B=v):(A=u,M=c,C=d,D=h,F=g,R=x,N=v,B=y)):_>=S?(T=c,P=h,O=x,H=y,c>=0?(A=u,M=l,C=d,D=f,F=g,R=m,N=v,B=p):(A=l,M=u,C=f,D=d,F=m,R=g,N=p,B=v)):(T=u,P=d,O=g,H=v,u>=0?(A=l,M=c,C=f,D=h,F=m,R=x,N=p,B=y):(A=c,M=l,C=h,D=f,F=x,R=m,N=y,B=p)),T===0)return null;let z=A/T,W=M/T,q=1/T,oe=C-z*P,se=D-W*P,Be=F-z*O,De=R-W*O,Xe=N-z*H,j=B-W*H,ie=Xe*De-j*Be,be=oe*j-se*Xe,Ve=Be*se-De*oe;if(s){if(ie<0||be<0||Ve<0)return null}else if((ie<0||be<0||Ve<0)&&(ie>0||be>0||Ve>0))return null;let ve=ie+be+Ve;if(ve===0)return null;let Ze=q*(ie*P+be*O+Ve*H);return(ve>0?Ze<0:Ze>0)?null:this.at(Ze/ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_p=new Ge,Ts=new ss,Ka=new gn,vp=new U,Za=new U,Ja=new U,ja=new U,Yu=new U,Qa=new U,Mp=new U,el=new U,Ie=class extends St{constructor(e=new Ue,t=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(Yu.fromBufferAttribute(f,e),o?Qa.addScaledVector(Yu,u):Qa.addScaledVector(Yu.sub(t),u))}t.add(Qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(Ka.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Ka,vp)===null||Ts.origin.distanceToSquared(vp)>(e.far-e.near)**2))&&(_p.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(_p),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,_=v;b<_;b+=3){let S=a.getX(b),A=a.getX(b+1),M=a.getX(b+2);s=tl(this,p,e,n,c,u,f,S,A,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);s=tl(this,o,e,n,c,u,f,y,v,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=h.length;m<x;m++){let g=h[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,_=v;b<_;b+=3){let S=b,A=b+1,M=b+2;s=tl(this,p,e,n,c,u,f,S,A,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=g,v=g+1,b=g+2;s=tl(this,o,e,n,c,u,f,y,v,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Hb(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;el.copy(a),el.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:i}}function tl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Za),i.getVertexPosition(l,Ja),i.getVertexPosition(c,ja);let u=Hb(i,e,t,n,Za,Ja,ja,Mp);if(u){let f=new U;Li.getBarycoord(Mp,Za,Ja,ja,f),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,f,new Le)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,f,new Le)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new U,materialIndex:0};Li.getNormal(Za,Ja,ja,h.normal),u.face=h,u.barycoord=f}return u}var _o=new xt,Sp=new xt,wp=new xt,Wb=new xt,Tp=new Ge,nl=new U,$u=new gn,Ap=new Ge,Ku=new ss,Po=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qu,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingBox.expandByPoint(nl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nl),this.boundingSphere.expandByPoint(nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$u.copy(this.boundingSphere),$u.applyMatrix4(s),e.ray.intersectsSphere($u)!==!1&&(Ap.copy(s).invert(),Ku.copy(e.ray).applyMatrix4(Ap),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ku)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Sp.fromBufferAttribute(s.attributes.skinIndex,e),wp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(_o.copy(t),t.set(0,0,0,0)):(_o.set(...t,1),t.set(0,0,0)),_o.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=wp.getComponent(r);if(o!==0){let a=Sp.getComponent(r);Tp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Wb.copy(_o).applyMatrix4(Tp),o)}}return t.isVector4&&(t.w=_o.w),t.applyMatrix4(this.bindMatrixInverse)}},Pr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},Lr=class extends qt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Dt,u=Dt,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ep=new Ge,Xb=new Ge,Lo=class i{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Xb;Ep.multiplyMatrices(a,t[r]),Ep.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Lr(t,e,e,Ln,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ee("Skeleton: No bone found with UUID:",r),o=new Pr),this.bones.push(o),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Oi=class extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},br=new Ge,Rp=new Ge,il=[],Cp=new Nt,qb=new Ge,vo=new Ie,Mo=new gn,Os=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Cp.copy(e.boundingBox).applyMatrix4(br),this.boundingBox.union(Cp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,br),Mo.copy(e.boundingSphere).applyMatrix4(br),this.boundingSphere.union(Mo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mo.copy(this.boundingSphere),Mo.applyMatrix4(n),e.ray.intersectsSphere(Mo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,br),Rp.multiplyMatrices(n,br),vo.matrixWorld=Rp,vo.raycast(e,il);for(let o=0,a=il.length;o<a;o++){let l=il[o];l.instanceId=r,l.object=this,t.push(l)}il.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lr(new Float32Array(s*this.count),s,this.count,Kl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new gn,Yb=new Le(.5,.5),sl=new U,Fr=class{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],v=r[13],b=r[14],_=r[15];if(s[0].setComponents(c-o,d-u,p-m,_-y).normalize(),s[1].setComponents(c+o,d+u,p+m,_+y).normalize(),s[2].setComponents(c+a,d+f,p+x,_+v).normalize(),s[3].setComponents(c-a,d-f,p-x,_-v).normalize(),n)s[4].setComponents(l,h,g,b).normalize(),s[5].setComponents(c-l,d-h,p-g,_-b).normalize();else if(s[4].setComponents(c-l,d-h,p-g,_-b).normalize(),t===Yn)s[5].setComponents(c+l,d+h,p+g,_+b).normalize();else if(t===Tr)s[5].setComponents(l,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=Yb.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sl.x=s.normal.x>0?e.max.x:e.min.x,sl.y=s.normal.y>0?e.max.y:e.min.y,sl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ut=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Al=new U,El=new U,Ip=new Ge,So=new ss,rl=new gn,Zu=new U,Pp=new U,Rn=class extends St{constructor(e=new Ue,t=new Ut){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Al.fromBufferAttribute(t,s-1),El.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Al.distanceTo(El);e.setAttribute("lineDistance",new ke(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),rl.radius+=r,e.ray.intersectsSphere(rl)===!1)return;Ip.copy(s).invert(),So.copy(e.ray).applyMatrix4(Ip);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),y=u.getX(x+1),v=ol(this,e,So,l,p,y,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=ol(this,e,So,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=ol(this,e,So,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ol(this,e,So,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ol(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Al.fromBufferAttribute(a,s),El.fromBufferAttribute(a,r),t.distanceSqToSegment(Al,El,Zu,Pp)>n)return;Zu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zu);if(!(c<e.near||c>e.far))return{distance:c,point:Pp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Lp=new U,Fp=new U,xn=class extends Rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lp.fromBufferAttribute(t,s),Fp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lp.distanceTo(Fp);e.setAttribute("lineDistance",new ke(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fo=class extends Rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bn=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new Ge,sh=new ss,al=new gn,ll=new U,Cn=class extends St{constructor(e=new Ue,t=new bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),al.copy(n.boundingSphere),al.applyMatrix4(s),al.radius+=r,e.ray.intersectsSphere(al)===!1)return;Dp.copy(s).invert(),sh.copy(e.ray).applyMatrix4(Dp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,x=d;m<x;m++){let g=c.getX(m);ll.fromBufferAttribute(f,g),Op(ll,g,l,s,e,t,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,x=d;m<x;m++)ll.fromBufferAttribute(f,m),Op(ll,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Op(i,e,t,n,s,r,o){let a=sh.distanceSqToPoint(i);if(a<t){let l=new U;sh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Do=class extends qt{constructor(e=[],t=ls,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},an=class extends qt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var rs=class extends qt{constructor(e,t,n=jn,s,r,o,a=Dt,l=Dt,c,u=ci,f=1){if(u!==ci&&u!==cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Rl=class extends rs{constructor(e,t=jn,n=ls,s,r,o=Dt,a=Dt,l,c=ci){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oo=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},os=class i extends Ue{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(f,2));function m(x,g,p,y,v,b,_,S,A,M,T){let C=b/A,D=_/M,P=b/2,F=_/2,R=S/2,O=A+1,N=M+1,B=0,H=0,z=new U;for(let W=0;W<N;W++){let q=W*D-F;for(let oe=0;oe<O;oe++){let se=oe*C-P;z[x]=se*y,z[g]=q*v,z[p]=R,c.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[p]=S>0?1:-1,u.push(z.x,z.y,z.z),f.push(oe/A),f.push(1-W/M),B+=1}}for(let W=0;W<M;W++)for(let q=0;q<A;q++){let oe=h+q+O*W,se=h+q+O*(W+1),Be=h+(q+1)+O*(W+1),De=h+(q+1)+O*W;l.push(oe,se,De),l.push(se,Be,De),H+=6}a.addGroup(d,H,T),d+=H,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $b(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Om(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Qb(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,f=l;for(let h=t;h<s;h+=t){let d=i[h],m=i[h+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return No(r,o,t,a,l,c,0),o}function Om(i,e,t,n,s){let r;if(s===uy(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Np(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Np(o/n|0,i[o],i[o+1],r);return r&&Dr(r,r.next)&&(Bo(r),r=r.next),r}function Ns(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Dr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function No(i,e,t,n,s,r,o){if(!i)return;!o&&r&&sy(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Zb(i,n,s,r):Kb(i)){e.push(l.i,i.i,c.i),Bo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Jb(Ns(i),e),No(i,e,t,n,s,r,2)):o===2&&jb(i,e,t,n,s,r):No(Ns(i),e,t,n,s,r,1);break}}}function Kb(i){let e=i.prev,t=i,n=i.next;if(Lt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&wo(s,a,r,l,o,c,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Zb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),m=Math.min(u,f,h),x=Math.max(a,l,c),g=Math.max(u,f,h),p=rh(d,m,e,t,n),y=rh(x,g,e,t,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=p&&b&&b.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&wo(a,u,l,f,c,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&wo(a,u,l,f,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&wo(a,u,l,f,c,h,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&wo(a,u,l,f,c,h,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Jb(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Dr(n,s)&&Um(n,t,t.next,s)&&Uo(n,s)&&Uo(s,n)&&(e.push(n.i,t.i,s.i),Bo(t),Bo(t.next),t=i=s),t=t.next}while(t!==i);return Ns(t)}function jb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ay(o,a)){let l=Bm(o,a);o=Ns(o,o.next),l=Ns(l,l.next),No(o,e,t,n,s,r,0),No(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Qb(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Om(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(oy(c))}s.sort(ey);for(let r=0;r<s.length;r++)t=ty(s[r],t);return t}function ey(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ty(i,e){let t=ny(i,e);if(!t)return e;let n=Bm(t,i);return Ns(n,n.next),Ns(t,t.next)}function ny(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Dr(i,t))return t;do{if(Dr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Nm(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Uo(t,i)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&iy(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function iy(i,e){return Lt(i.prev,i,e.prev)<0&&Lt(e.next,i,i.next)<0}function sy(i,e,t,n){let s=i;do s.z===0&&(s.z=rh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ry(s)}function ry(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function rh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function oy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nm(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function wo(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Nm(i,e,t,n,s,r,o,a)}function ay(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ly(i,e)&&(Uo(i,e)&&Uo(e,i)&&cy(i,e)&&(Lt(i.prev,i,e.prev)||Lt(i,e.prev,e))||Dr(i,e)&&Lt(i.prev,i,i.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Dr(i,e){return i.x===e.x&&i.y===e.y}function Um(i,e,t,n){let s=ul(Lt(i,e,t)),r=ul(Lt(i,e,n)),o=ul(Lt(t,n,i)),a=ul(Lt(t,n,e));return!!(s!==r&&o!==a||s===0&&cl(i,t,e)||r===0&&cl(i,n,e)||o===0&&cl(t,i,n)||a===0&&cl(t,e,n))}function cl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ul(i){return i>0?1:i<0?-1:0}function ly(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Um(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Uo(i,e){return Lt(i.prev,i,i.next)<0?Lt(i,e,i.next)>=0&&Lt(i,i.prev,e)>=0:Lt(i,e,i.prev)<0||Lt(i,i.next,e)<0}function cy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bm(i,e){let t=oh(i.i,i.x,i.y),n=oh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Np(i,e,t,n){let s=oh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uy(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ah=class{static triangulate(e,t,n=2){return $b(e,t,n)}},ko=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Up(e),Bp(n,e);let o=e.length;t.forEach(Up);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bp(n,t[l]);let a=ah.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Up(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Bp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var On=class i extends Ue{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*h-o;for(let v=0;v<c;v++){let b=v*f-r;m.push(b,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,b=y+c*(p+1),_=y+1+c*(p+1),S=y+1+c*p;d.push(v,b,S),d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Us=class i extends Ue{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new U,m=new Le;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}f+=h}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,v=y,b=y+n+1,_=y+n+2,S=y+1;a.push(v,b,S),a.push(b,_,S)}}this.setIndex(a),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zo=class i extends Ue{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],f=new U,h=new U,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,b=o+v*a,_=e*Math.cos(b),S=Math.sqrt(e*e-_*_),A=0;p===0&&o===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let T=M/t,C=s+T*r;f.x=-S*Math.cos(C),f.y=_,f.z=S*Math.sin(C),m.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(T+A,1-v),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=u[p][y+1],b=u[p][y],_=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&d.push(v,b,S),(p!==n-1||l<Math.PI)&&d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(x,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(kp(s))s.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(kp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Ws(i[t]);for(let s in n)e[s]=n[s]}return e}function kp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var km={clone:Ws,merge:ln},fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ze().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ge().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Cl=class extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fi=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends fi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Vo=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oa,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Gl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Il=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ts(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ml(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function py(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function zp(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function my(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ll=class extends di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:th,endingEnd:th}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nh:r=e,a=2*t-n;break;case ih:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nh:o=e,l=2*n-t;break;case ih:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-h*g+2*h*x-h*m,y=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,v=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let _=0;_!==a;++_)r[_]=p*o[u+_]+y*o[c+_]+v*o[l+_]+b*o[f+_];return r}},Fl=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},Dl=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ol=class extends di{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let h=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*h+m*2,y=f[p],v=f[p+1],b=e*h+m*2,_=u[b],S=u[b+1],A=xy(n,t,y,_,s);r[m]=zm(A,x,v,S,g)}return r}};function zm(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function gy(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function xy(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=zm(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=gy(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ts(t,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ts(e.times,Array),values:ts(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),ml(e.settings)&&(n.settings={inTangents:ts(e.settings.inTangents,Array),outTangents:ts(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case dl:t=this.InterpolantFactoryMethodSmooth;break;case eh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return dl;case this.InterpolantFactoryMethodBezier:return eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;ml(this.settings)&&(Vp(this.settings.inTangents,e),Vp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Oe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&ub(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let x=t[f+m];if(x!==t[h+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Vp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Cs;var Ni=class extends _n{constructor(e,t,n){super(e,t,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Rs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="color";var Ui=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Ui.prototype.ValueTypeName="number";var Nl=class extends di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Bi=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Nl(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends _n{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Rs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};as.prototype.ValueTypeName="vector";var Ho=class{constructor(e="",t=-1,n=[],s=ym){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=py(l);l=zp(l,1,u),c=zp(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let f=u[1],h=s[f];h||(s[f]=h=[]),h.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function by(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return as;case"color":return Go;case"quaternion":return Bi;case"bool":case"boolean":return Ni;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=by(i.type);if(i.times===void 0){let n=[],s=[];my(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),ml(i.settings)&&(t.settings={inTangents:ts(i.settings.inTangents,Float32Array),outTangents:ts(i.settings.outTangents,Float32Array)}),t}var li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Gp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Gp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Gp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ul=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vm=new Ul,pi=class{constructor(e){this.manager=e!==void 0?e:Vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pi={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},Or=class extends pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=li.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Pi[e]!==void 0){Pi[e].push({onLoad:t,onProgress:n,onError:s});return}Pi[e]=[],Pi[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Pi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0,x=0,g=new ReadableStream({start(p){y();function y(){f.read().then(({done:v,value:b})=>{if(v)p.close();else{x+=b.byteLength;let _=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let S=0,A=u.length;S<A;S++){let M=u[S];M.onProgress&&M.onProgress(_)}p.enqueue(b),y()}},v=>{p.error(v)})}}});return new Response(g)}else throw new lh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{li.add(`file:${e}`,c);let u=Pi[e];delete Pi[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Pi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Pi[e];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var yr=new WeakMap,Bl=class extends pi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=li.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=yr.get(o);f===void 0&&(f=[],yr.set(o,f)),f.push({onLoad:t,onError:s})}return o}let a=Ar("img");function l(){u(),t&&t(this);let f=yr.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}yr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),li.remove(`image:${e}`);let h=yr.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}yr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),li.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Wo=class extends pi{constructor(e){super(e)}load(e,t,n,s){let r=new qt,o=new Bl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Bs=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xo=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ju=new Ge,Hp=new U,Wp=new U,Nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fr,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ju.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ju,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Tr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hl=new U,fl=new En,ai=new U,qo=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hl,fl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hl,fl,ai.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(hl,fl,ai),ai.x===1&&ai.y===1&&ai.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hl,fl,ai.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},es=new U,Xp=new Le,qp=new Le,Ht=class extends qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,Xp,qp),t.subVectors(qp,Xp)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(To*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ch=class extends Nr{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Yo=class extends Bs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ch}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uh=class extends Nr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},ks=class extends Bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Nn=class extends qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hh=class extends Nr{constructor(){super(new Nn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zs=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new hh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var zi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ju=new WeakMap,$o=class extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=li.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ju.has(o)===!0?(s&&s(ju.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ju.set(l,c),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _r=-90,vr=1,kl=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(_r,vr,e,t);s.layers=this.layers,this.add(s);let r=new Ht(_r,vr,e,t);r.layers=this.layers,this.add(r);let o=new Ht(_r,vr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(_r,vr,e,t);a.layers=this.layers,this.add(a);let l=new Ht(_r,vr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},zl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var zh="\\[\\]\\.:\\/",_y=new RegExp("["+zh+"]","g"),Vh="[^"+zh+"]",vy="[^"+zh.replace("\\.","")+"]",My=/((?:WC+[\/:])*)/.source.replace("WC",Vh),Sy=/(WCOD+)?/.source.replace("WCOD",vy),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh),Ay=new RegExp("^"+My+Sy+wy+Ty+"$"),Ey=["material","materials","bones","map"],fh=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_y,"")}static parseTrackName(e){let t=Ay.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=fh;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var z2=new Float32Array(1);var Yp=new Ge,Ko=class{constructor(e,t,n=0,s=1/0){this.ray=new ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yp),this}intersectObject(e,t=!0,n=[]){return dh(e,this,n,t),n.sort($p),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)dh(e[s],this,n,t);return n.sort($p),n}};function $p(i,e){return i.distance-e.distance}function dh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)dh(r[o],e,t,!0)}}var Yh=class Yh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Yh.prototype.isMatrix2=!0;var ph=Yh;function Gh(i,e,t,n){let s=Ry(n);switch(t){case Ph:return i*e;case Kl:return i*e/s.components*s.byteLength;case Zl:return i*e/s.components*s.byteLength;case us:return i*e*2/s.components*s.byteLength;case Jl:return i*e*2/s.components*s.byteLength;case Lh:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case jl:return i*e*4/s.components*s.byteLength;case Qo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(i,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(i,8)*Math.max(e,8)/2;case ic:case sc:case oc:case ac:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rc:case ia:case lc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Sc:case wc:case Tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ac:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ry(i){switch(i){case vn:case Eh:return{byteLength:1,components:1};case kr:case Rh:case Qn:return{byteLength:2,components:1};case Yl:case $l:return{byteLength:2,components:4};case jn:case ql:case Pn:return{byteLength:4,components:1};case Ch:case Ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function c0(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Iy(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],x=f[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,By=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,e_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,S_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,w_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,I_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,P_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ov=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_v=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$v=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Py,alphahash_pars_fragment:Ly,alphamap_fragment:Fy,alphamap_pars_fragment:Dy,alphatest_fragment:Oy,alphatest_pars_fragment:Ny,aomap_fragment:Uy,aomap_pars_fragment:By,batching_pars_vertex:ky,batching_vertex:zy,begin_vertex:Vy,beginnormal_vertex:Gy,bsdfs:Hy,iridescence_fragment:Wy,bumpmap_pars_fragment:Xy,clipping_planes_fragment:qy,clipping_planes_pars_fragment:Yy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:Ky,color_fragment:Zy,color_pars_fragment:Jy,color_pars_vertex:jy,color_vertex:Qy,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:s_,emissivemap_fragment:r_,emissivemap_pars_fragment:o_,colorspace_fragment:a_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:u_,envmap_pars_fragment:h_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:S_,envmap_vertex:d_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:x_,gradientmap_pars_fragment:b_,lightmap_pars_fragment:y_,lights_lambert_fragment:__,lights_lambert_pars_fragment:v_,lights_pars_begin:M_,lights_toon_fragment:w_,lights_toon_pars_fragment:T_,lights_phong_fragment:A_,lights_phong_pars_fragment:E_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:I_,lights_fragment_maps:P_,lights_fragment_end:L_,lightprobes_pars_fragment:F_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:O_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:U_,map_fragment:B_,map_pars_fragment:k_,map_particle_fragment:z_,map_particle_pars_fragment:V_,metalnessmap_fragment:G_,metalnessmap_pars_fragment:H_,morphinstance_vertex:W_,morphcolor_vertex:X_,morphnormal_vertex:q_,morphtarget_pars_vertex:Y_,morphtarget_vertex:$_,normal_fragment_begin:K_,normal_fragment_maps:Z_,normal_pars_fragment:J_,normal_pars_vertex:j_,normal_vertex:Q_,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:tv,clearcoat_normal_fragment_maps:nv,clearcoat_pars_fragment:iv,iridescence_pars_fragment:sv,opaque_fragment:rv,packing:ov,premultiplied_alpha_fragment:av,project_vertex:lv,dithering_fragment:cv,dithering_pars_fragment:uv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:dv,shadowmap_pars_vertex:pv,shadowmap_vertex:mv,shadowmask_pars_fragment:gv,skinbase_vertex:xv,skinning_pars_vertex:bv,skinning_vertex:yv,skinnormal_vertex:_v,specularmap_fragment:vv,specularmap_pars_fragment:Mv,tonemapping_fragment:Sv,tonemapping_pars_fragment:wv,transmission_fragment:Tv,transmission_pars_fragment:Av,uv_pars_fragment:Ev,uv_pars_vertex:Rv,uv_vertex:Cv,worldpos_vertex:Iv,background_vert:Pv,background_frag:Lv,backgroundCube_vert:Fv,backgroundCube_frag:Dv,cube_vert:Ov,cube_frag:Nv,depth_vert:Uv,depth_frag:Bv,distance_vert:kv,distance_frag:zv,equirect_vert:Vv,equirect_frag:Gv,linedashed_vert:Hv,linedashed_frag:Wv,meshbasic_vert:Xv,meshbasic_frag:qv,meshlambert_vert:Yv,meshlambert_frag:$v,meshmatcap_vert:Kv,meshmatcap_frag:Zv,meshnormal_vert:Jv,meshnormal_frag:jv,meshphong_vert:Qv,meshphong_frag:eM,meshphysical_vert:tM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:sM,points_vert:rM,points_frag:oM,shadow_vert:aM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},pe={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},yi={basic:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:ln([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:ln([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:ln([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new K(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:ln([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:ln([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:ln([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:ln([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:ln([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:ln([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:ln([pe.lights,pe.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};yi.physical={uniforms:ln([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Pc={r:0,b:0,g:0},hM=new Ge,u0=new ze;u0.set(-1,0,0,0,1,0,0,0,1);function fM(i,e,t,n,s,r){let o=new K(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let b=y.backgroundBlurriness>0;v=e.get(v,b)}return v}function m(y){let v=!1,b=d(y);b===null?g(o,a):b&&b.isColor&&(g(b,1),v=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,v){let b=d(v);b&&(b.isCubeTexture||b.mapping===jo)?(c===void 0&&(c=new Ie(new os(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ws(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(u0),c.material.toneMapped=$e.getTransfer(b.colorSpace)!==ft,(u!==b||f!==b.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ie(new On(2,2),new In({name:"BackgroundMaterial",uniforms:Ws(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,v){y.getRGB(Pc,kh(i)),t.buffers.color.setClear(Pc.r,Pc.g,Pc.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function dM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(D,P,F,R,O){let N=!1,B=f(D,R,F,P);r!==B&&(r=B,c(r.object)),N=d(D,R,F,O),N&&m(D,R,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,b(D,P,F,R),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,P,F,R){let O=R.wireframe===!0,N=n[P.id];N===void 0&&(N={},n[P.id]=N);let B=D.isInstancedMesh===!0?D.id:0,H=N[B];H===void 0&&(H={},N[B]=H);let z=H[F.id];z===void 0&&(z={},H[F.id]=z);let W=z[O];return W===void 0&&(W=h(l()),z[O]=W),W}function h(D){let P=[],F=[],R=[];for(let O=0;O<t;O++)P[O]=0,F[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:R,object:D,attributes:{},index:null}}function d(D,P,F,R){let O=r.attributes,N=P.attributes,B=0,H=F.getAttributes();for(let z in H)if(H[z].location>=0){let q=O[z],oe=N[z];if(oe===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(oe=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(oe=D.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;B++}return r.attributesNum!==B||r.index!==R}function m(D,P,F,R){let O={},N=P.attributes,B=0,H=F.getAttributes();for(let z in H)if(H[z].location>=0){let q=N[z];q===void 0&&(z==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),z==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));let oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),O[z]=oe,B++}r.attributes=O,r.attributesNum=B,r.index=R}function x(){let D=r.newAttributes;for(let P=0,F=D.length;P<F;P++)D[P]=0}function g(D){p(D,0)}function p(D,P){let F=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;F[D]=1,R[D]===0&&(i.enableVertexAttribArray(D),R[D]=1),O[D]!==P&&(i.vertexAttribDivisor(D,P),O[D]=P)}function y(){let D=r.newAttributes,P=r.enabledAttributes;for(let F=0,R=P.length;F<R;F++)P[F]!==D[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function v(D,P,F,R,O,N,B){B===!0?i.vertexAttribIPointer(D,P,F,O,N):i.vertexAttribPointer(D,P,F,R,O,N)}function b(D,P,F,R){x();let O=R.attributes,N=F.getAttributes(),B=P.defaultAttributeValues;for(let H in N){let z=N[H];if(z.location>=0){let W=O[H];if(W===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(W=D.instanceColor)),W!==void 0){let q=W.normalized,oe=W.itemSize,se=e.get(W);if(se===void 0)continue;let Be=se.buffer,De=se.type,Xe=se.bytesPerElement,j=De===i.INT||De===i.UNSIGNED_INT||W.gpuType===ql;if(W.isInterleavedBufferAttribute){let ie=W.data,be=ie.stride,Ve=W.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve,ie.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<z.locationSize;ve++)g(z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ve=0;ve<z.locationSize;ve++)v(z.location+ve,oe/z.locationSize,De,q,be*Xe,(Ve+oe/z.locationSize*ve)*Xe,j)}else{if(W.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)p(z.location+ie,W.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ie=0;ie<z.locationSize;ie++)g(z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let ie=0;ie<z.locationSize;ie++)v(z.location+ie,oe/z.locationSize,De,q,oe*Xe,oe/z.locationSize*ie*Xe,j)}}else if(B!==void 0){let q=B[H];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(z.location,q);break;case 3:i.vertexAttrib3fv(z.location,q);break;case 4:i.vertexAttrib4fv(z.location,q);break;default:i.vertexAttrib1fv(z.location,q)}}}}y()}function _(){T();for(let D in n){let P=n[D];for(let F in P){let R=P[F];for(let O in R){let N=R[O];for(let B in N)u(N[B].object),delete N[B];delete R[O]}}delete n[D]}}function S(D){if(n[D.id]===void 0)return;let P=n[D.id];for(let F in P){let R=P[F];for(let O in R){let N=R[O];for(let B in N)u(N[B].object),delete N[B];delete R[O]}}delete n[D.id]}function A(D){for(let P in n){let F=n[P];for(let R in F){let O=F[R];if(O[D.id]===void 0)continue;let N=O[D.id];for(let B in N)u(N[B].object),delete N[B];delete O[D.id]}}}function M(D){for(let P in n){let F=n[P],R=D.isInstancedMesh===!0?D.id:0,O=F[R];if(O!==void 0){for(let N in O){let B=O[N];for(let H in B)u(B[H].object),delete B[H];delete O[N]}delete F[R],Object.keys(F).length===0&&delete n[P]}}}function T(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function pM(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let M=A===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==vn&&A!==Pn&&!M&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,maxSamples:_,samples:S}}function gM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Xn,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,v=y*4,b=p.clippingState||null;l.value=b,b=u(m,h,v,d);for(let _=0;_!==v;++_)b[_]=t[_];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){let x=f!==null?f.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,b=d;v!==x;++v,b+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Hr=4,xM=6,bM=20,yM=256,aa=new Nn,Gm=new K,$h=null,Kh=0,Zh=0,Jh=!1,_M=new U,Xs=new U,Xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=_M}=r;$h=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($h,Kh,Zh),this._renderer.xr.enabled=Jh,e.scissorTest=!1,Gr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$h=this._renderer.getRenderTarget(),Kh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Qn,format:Ln,colorSpace:fn,depthBuffer:!1},s=Hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vM(r)),this._blurMaterial=SM(r,e,t),this._ggxMaterial=MM(r,e,t)}return s}_compileMaterial(e){let t=new Ie(new Ue,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,s,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Gm),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new os,new We({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Gm),p=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let _=this._cubeSize;Gr(s,b*_,v>2?_:0,_,_),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ls||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Gr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,aa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Hr?n-m+Hr:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Gr(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,aa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Gr(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(a,aa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),h=4*(this._cubeSize-u);Gr(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(l,aa)}};function vM(i){let e=[],t=[],n=i,s=i-Hr+1+xM;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,m=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let y=p%3*2/3-1,v=p>2?0:-1,b=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];m.set(b,d*h*p);for(let _=0;_<h;_++){let S=u[_*2]*2-1,A=u[_*2+1]*2-1;p===0?Xs.set(1,A,S):p===1?Xs.set(-S,1,-A):p===2?Xs.set(-S,A,1):p===3?Xs.set(-1,A,-S):p===4?Xs.set(-S,-1,A):Xs.set(S,A,-1),Xs.toArray(x,(p*h+_)*d)}}let g=new Ue;g.setAttribute("position",new Wt(m,d)),g.setAttribute("outputDirection",new Wt(x,d)),t.push(new Ie(g,null)),n>Hr&&n--}return{lodMeshes:t,sizeLods:e}}function Hm(i,e,t){let n=new rn(i,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function MM(i,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function SM(i,e,t){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:bM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Wm(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Xm(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Do(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new os(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:gi});r.uniforms.tEquirect.value=t;let o=new Ie(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Ot),new kl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function wM(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Hl||d===Wl)if(e.has(h)){let m=e.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let x=new Fc(m.height);return x.fromEquirectangularTexture(i,h),e.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,m=d===Hl||d===Wl,x=d===ls||d===Gs;if(m||x){let g=t.get(h),p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Xr(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{let y=h.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Xr(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===Hl?h.mapping=ls:d===Wl&&(h.mapping=Gs),h}function l(h){let d=0,m=6;for(let x=0;x<m;x++)h[x]!==void 0&&d++;return d===m}function c(h){let d=h.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function TM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Es("WebGLRenderer: "+n+" extension not supported."),s}}}function AM(i,e,t,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,m=f.attributes.position,x=0;if(m===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let v=0,b=y.length;v<b;v+=3){let _=y[v+0],S=y[v+1],A=y[v+2];h.push(_,S,S,A,A,_)}}else{let y=m.array;x=m.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let _=v+0,S=v+1,A=v+2;h.push(_,S,S,A,A,_)}}let g=new(m.count>=65535?Ls:Io)(h,1);g.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function EM(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),t.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let g=0;g<d;g++)x+=h[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function RM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function CM(i,e,t){let n=new WeakMap,s=new xt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*_*4*f),A=new Co(S,b,_,f);A.type=Pn,A.needsUpdate=!0;let M=v*4;for(let C=0;C<f;C++){let D=g[C],P=p[C],F=y[C],R=b*_*4*C;for(let O=0;O<D.count;O++){let N=O*M;d===!0&&(s.fromBufferAttribute(D,O),S[R+N+0]=s.x,S[R+N+1]=s.y,S[R+N+2]=s.z,S[R+N+3]=0),m===!0&&(s.fromBufferAttribute(P,O),S[R+N+4]=s.x,S[R+N+5]=s.y,S[R+N+6]=s.z,S[R+N+7]=0),x===!0&&(s.fromBufferAttribute(F,O),S[R+N+8]=s.x,S[R+N+9]=s.y,S[R+N+10]=s.z,S[R+N+11]=F.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new Le(b,_)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function IM(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var PM={[yh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[vh]:"CINEON_TONE_MAPPING",[Mh]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function LM(i,e,t,n,s,r){let o=new rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ue;c.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new Cl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ie(c,u),h=new Nn(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,y=[],v=!1;this.setSize=function(b,_){o.setSize(b,_),a!==null&&a.setSize(b,_),l!==null&&l.setSize(b,_);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(b,_)}},this.setEffects=function(b){y=b,v=y.length>0&&y[0].isRenderPass===!0;let _=o.width,S=o.height;y.length>0&&a===null&&(a=new rn(_,S,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(_,S,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let M=y[A];M.setSize&&M.setSize(_,S)}},this.begin=function(b,_){if(x||b.toneMapping===Zn&&y.length===0)return!1;if(p=_,_!==null){let S=_.width,A=_.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(b,_){b.toneMapping=g,x=!0;let S=o,A=a;for(let M=0;M<y.length;M++){let T=y[M];T.enabled!==!1&&(T.render(b,A,S,_),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},$e.getTransfer(d)===ft&&(u.defines.SRGB_TRANSFER="");let M=PM[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var h0=new qt,ef=new rs(1,1),f0=new Co,d0=new Tl,p0=new Do,qm=[],Ym=[],$m=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function Yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qm[s];if(r===void 0&&(r=new Float32Array(s),qm[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oc(i,e){let t=Ym[e];t===void 0&&(t=new Int32Array(e),Ym[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function FM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function OM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function UM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Zm.set(n),i.uniformMatrix2fv(this.addr,!1,Zm),$t(t,n)}}function BM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;Km.set(n),i.uniformMatrix3fv(this.addr,!1,Km),$t(t,n)}}function kM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;$m.set(n),i.uniformMatrix4fv(this.addr,!1,$m),$t(t,n)}}function zM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function VM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function GM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function HM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function WM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function XM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function qM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function YM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function $M(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ef.compareFunction=t.isReversedDepthBuffer()?Ic:Cc,r=ef):r=h0,t.setTexture2D(e||r,s)}function KM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||d0,s)}function ZM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||p0,s)}function JM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||f0,s)}function jM(i){switch(i){case 5126:return FM;case 35664:return DM;case 35665:return OM;case 35666:return NM;case 35674:return UM;case 35675:return BM;case 35676:return kM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return GM;case 35669:case 35673:return HM;case 5125:return WM;case 36294:return XM;case 36295:return qM;case 36296:return YM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return KM;case 35680:case 36300:case 36308:case 36293:return ZM;case 36289:case 36303:case 36311:case 36292:return JM}}function QM(i,e){i.uniform1fv(this.addr,e)}function e1(i,e){let t=Yr(e,this.size,2);i.uniform2fv(this.addr,t)}function t1(i,e){let t=Yr(e,this.size,3);i.uniform3fv(this.addr,t)}function n1(i,e){let t=Yr(e,this.size,4);i.uniform4fv(this.addr,t)}function i1(i,e){let t=Yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s1(i,e){let t=Yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r1(i,e){let t=Yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function o1(i,e){i.uniform1iv(this.addr,e)}function a1(i,e){i.uniform2iv(this.addr,e)}function l1(i,e){i.uniform3iv(this.addr,e)}function c1(i,e){i.uniform4iv(this.addr,e)}function u1(i,e){i.uniform1uiv(this.addr,e)}function h1(i,e){i.uniform2uiv(this.addr,e)}function f1(i,e){i.uniform3uiv(this.addr,e)}function d1(i,e){i.uniform4uiv(this.addr,e)}function p1(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ef:o=h0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function m1(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||d0,r[o])}function g1(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||p0,r[o])}function x1(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||f0,r[o])}function b1(i){switch(i){case 5126:return QM;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return s1;case 35676:return r1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return h1;case 36295:return f1;case 36296:return d1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return x1}}var tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jM(t.type)}},nf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b1(t.type)}},sf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},jh=/(\w+)(\])?(\[|\.)?/g;function Jm(i,e){i.seq.push(e),i.map[e.id]=e}function y1(i,e,t){let n=i.name,s=n.length;for(jh.lastIndex=0;;){let r=jh.exec(n),o=jh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jm(t,c===void 0?new tf(a,i,e):new nf(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new sf(a),Jm(t,f)),t=f}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);y1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function jm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var _1=37297,v1=0;function M1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Qm=new ze;function S1(i){$e._getMatrix(Qm,$e.workingColorSpace,i);let e=`mat3( ${Qm.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Eo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function e0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+M1(i.getShaderSource(e),a)}else return r}function w1(i,e){let t=S1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var T1={[yh]:"Linear",[_h]:"Reinhard",[vh]:"Cineon",[Mh]:"ACESFilmic",[wh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function A1(i,e){let t=T1[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Lc=new U;function E1(){$e.getLuminanceCoefficients(Lc);let i=Lc.x.toFixed(4),e=Lc.y.toFixed(4),t=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function C1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ca(i){return i!==""}function t0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(i){return i.replace(P1,F1)}var L1=new Map;function F1(i,e){let t=Ye[e];if(t===void 0){let n=L1.get(e);if(n!==void 0)t=Ye[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rf(t)}var D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(i){return i.replace(D1,O1)}function O1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function s0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var N1={[Zo]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function U1(i){return N1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B1={[ls]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};function k1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var z1={[Gs]:"ENVMAP_MODE_REFRACTION"};function V1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G1={[Gl]:"ENVMAP_BLENDING_MULTIPLY",[gm]:"ENVMAP_BLENDING_MIX",[xm]:"ENVMAP_BLENDING_ADD"};function H1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G1[i.combine]||"ENVMAP_BLENDING_NONE"}function W1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=U1(t),c=k1(t),u=V1(t),f=H1(t),h=W1(t),d=R1(t),m=C1(r),x=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ca).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(g=[s0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[s0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Zn?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,w1("linearToOutputTexel",t.outputColorSpace),E1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),o=rf(o),o=t0(o,t),o=n0(o,t),a=rf(a),a=t0(a,t),a=n0(a,t),o=i0(o),a=i0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,b=y+p+a,_=jm(s,s.VERTEX_SHADER,v),S=jm(s,s.FRAGMENT_SHADER,b);s.attachShader(x,_),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(D){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(_)||"",R=s.getShaderInfoLog(S)||"",O=P.trim(),N=F.trim(),B=R.trim(),H=!0,z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,S);else{let W=e0(s,_,"vertex"),q=e0(s,S,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+O+`
`+W+`
`+q)}else O!==""?Ee("WebGLProgram: Program Info Log:",O):(N===""||B==="")&&(z=!1);z&&(D.diagnostics={runnable:H,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(_),s.deleteShader(S),M=new Wr(s,x),T=I1(s,x)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(x,_1)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=S,this}var q1=0,of=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new af(e),t.set(e,n)),n}},af=class{constructor(e){this.id=q1++,this.code=e,this.usedTimes=0}};function Y1(i){return i===us||i===ia||i===sa}function $1(i,e,t,n,s,r){let o=new Cr,a=new of,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,T,C,D,P,F){let R=D.fog,O=P.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,H=e.get(M.envMap||N,B),z=H&&H.mapping===jo?H.image.height:null,W=d[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Ee("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));let q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,oe=q!==void 0?q.length:0,se=0;O.morphAttributes.position!==void 0&&(se=1),O.morphAttributes.normal!==void 0&&(se=2),O.morphAttributes.color!==void 0&&(se=3);let Be,De,Xe,j;if(W){let Tt=yi[W];Be=Tt.vertexShader,De=Tt.fragmentShader}else{Be=M.vertexShader,De=M.fragmentShader;let Tt=a.getVertexShaderStage(M),ct=a.getFragmentShaderStage(M);a.update(M,Tt,ct),Xe=Tt.id,j=ct.id}let ie=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),Ve=P.isInstancedMesh===!0,ve=P.isBatchedMesh===!0,Ze=!!M.map,Xt=!!M.matcap,je=!!H,ot=!!M.aoMap,wt=!!M.lightMap,it=!!M.bumpMap&&M.wireframe===!1,Ct=!!M.normalMap,Jt=!!M.displacementMap,mn=!!M.emissiveMap,Pt=!!M.metalnessMap,zt=!!M.roughnessMap,G=M.anisotropy>0,en=M.clearcoat>0,mt=M.dispersion>0,L=M.retroreflectivity>0,w=M.iridescence>0,X=M.sheen>0,Z=M.transmission>0,Q=G&&!!M.anisotropyMap,ae=en&&!!M.clearcoatMap,le=en&&!!M.clearcoatNormalMap,ee=en&&!!M.clearcoatRoughnessMap,ne=w&&!!M.iridescenceMap,ce=w&&!!M.iridescenceThicknessMap,Re=X&&!!M.sheenColorMap,de=X&&!!M.sheenRoughnessMap,ue=!!M.specularMap,Ce=!!M.specularColorMap,Fe=!!M.specularIntensityMap,He=Z&&!!M.transmissionMap,V=Z&&!!M.thicknessMap,he=!!M.gradientMap,te=!!M.alphaMap,fe=M.alphaTest>0,xe=!!M.alphaHash,re=!!M.extensions,Pe=Zn;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let Te={shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:De,defines:M.defines,customVertexShaderID:Xe,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:ve,batchingColor:ve&&P._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&P.instanceColor!==null,instancingMorph:Ve&&P.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ze,matcap:Xt,envMap:je,envMapMode:je&&H.mapping,envMapCubeUVHeight:z,aoMap:ot,lightMap:wt,bumpMap:it,normalMap:Ct,displacementMap:Jt,emissiveMap:mn,normalMapObjectSpace:Ct&&M.normalMapType===vm,normalMapTangentSpace:Ct&&M.normalMapType===oa,packedNormalMap:Ct&&M.normalMapType===oa&&Y1(M.normalMap.format),metalnessMap:Pt,roughnessMap:zt,anisotropy:G,anisotropyMap:Q,clearcoat:en,clearcoatMap:ae,clearcoatNormalMap:le,clearcoatRoughnessMap:ee,dispersion:mt,retroreflection:L,iridescence:w,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:X,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:ue,specularColorMap:Ce,specularIntensityMap:Fe,transmission:Z,transmissionMap:He,thicknessMap:V,gradientMap:he,opaque:M.transparent===!1&&M.blending===xi&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:xe,combine:M.combine,mapUv:Ze&&m(M.map.channel),aoMapUv:ot&&m(M.aoMap.channel),lightMapUv:wt&&m(M.lightMap.channel),bumpMapUv:it&&m(M.bumpMap.channel),normalMapUv:Ct&&m(M.normalMap.channel),displacementMapUv:Jt&&m(M.displacementMap.channel),emissiveMapUv:mn&&m(M.emissiveMap.channel),metalnessMapUv:Pt&&m(M.metalnessMap.channel),roughnessMapUv:zt&&m(M.roughnessMap.channel),anisotropyMapUv:Q&&m(M.anisotropyMap.channel),clearcoatMapUv:ae&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(M.sheenRoughnessMap.channel),specularMapUv:ue&&m(M.specularMap.channel),specularColorMapUv:Ce&&m(M.specularColorMap.channel),specularIntensityMapUv:Fe&&m(M.specularIntensityMap.channel),transmissionMapUv:He&&m(M.transmissionMap.channel),thicknessMapUv:V&&m(M.thicknessMap.channel),alphaMapUv:te&&m(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ct||G),vertexNormals:!!O.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Ze||te),fog:!!R,useFog:M.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||O.attributes.normal===void 0&&Ct===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ze&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===ft,decodeVideoTextureEmissive:mn&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===ft,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_t,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:re&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&M.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)T.push(C),T.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(p(T,M),y(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function p(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let T=d[M.type],C;if(T){let D=yi[T];C=km.clone(D.uniforms)}else C=M.uniforms;return C}function b(M,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new X1(i,T,M,s),c.push(C),u.set(T,C)),C}function _(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:A}}function K1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Z1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function r0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function o0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,x,g,p){let y=i[e];return y===void 0?(y={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:g,group:p},i[e]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=m,y.materialVariant=o(h),y.groupOrder=x,y.renderOrder=h.renderOrder,y.z=g,y.group=p),e++,y}function l(h,d,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let v=a(h,d,m,x,g,p);m.transmission>0?n.push(v):m.transparent===!0?s.push(v):t.push(v)}function c(h,d,m,x,g,p){let y=a(h,d,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function u(h,d){t.length>1&&t.sort(h||Z1),n.length>1&&n.sort(d||r0),s.length>1&&s.sort(d||r0)}function f(){for(let h=e,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function J1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new o0,i.set(n,[o])):s>=r.length?(o=new o0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function j1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new K};break;case"SpotLight":t={position:new U,direction:new U,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new K,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new K,groundColor:new K};break;case"RectAreaLight":t={color:new K,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Q1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var eS=0;function tS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nS(i){let e=new j1,t=Q1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new Ge,o=new Ge;function a(c){let u=0,f=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,v=0,b=0,_=0,S=0,A=0,M=0,T=0,C=0;c.sort(tS);for(let P=0,F=c.length;P<F;P++){let R=c[P],O=R.color,N=R.intensity,B=R.distance,H=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===us?H=R.shadow.map.texture:H=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*N,f+=O.g*N,h+=O.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],N);C++}else if(R.isSunLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,q=t.get(R);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[m]=q,n.sunShadowMap[m]=H;let oe=W.getViewportCount();for(let se=0;se<oe;se++)n.sunShadowMatrix[x+se]=W.getMatrix(se),n.sunShadowCascade[x+se]=W._cascadeData[se];x+=oe,m++}n.sun[d]=z,d++}else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let W=R.shadow,q=t.get(R);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=H,n.directionalShadowMatrix[g]=R.shadow.matrix,_++}n.directional[g]=z,g++}else if(R.isSpotLight){let z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(O).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[y]=z;let W=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,W.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[y]=W.matrix,R.castShadow){let q=t.get(R);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,n.spotShadow[y]=q,n.spotShadowMap[y]=H,A++}y++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(O).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=z,v++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let W=R.shadow,q=t.get(R);q.shadowIntensity=W.intensity,q.shadowBias=W.bias,q.shadowNormalBias=W.normalBias,q.shadowRadius=W.radius,q.shadowMapSize=W.mapSize,q.shadowCameraNear=W.camera.near,q.shadowCameraFar=W.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=H,n.pointShadowMatrix[p]=R.shadow.matrix,S++}n.point[p]=z,p++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[b]=z,b++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let D=n.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==v||D.hemiLength!==b||D.numSunShadows!==m||D.numDirectionalShadows!==_||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==M||D.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=v,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=d,D.directionalLength=g,D.pointLength=p,D.spotLength=y,D.rectAreaLength=v,D.hemiLength=b,D.numSunShadows=m,D.numDirectionalShadows=_,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=M,D.numLightProbes=C,n.version=eS++)}function l(c,u){let f=0,h=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let b=c[y];if(b.isSunLight){let _=n.sun[f];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),f++}else if(b.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),h++}else if(b.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function a0(i){let e=new nS(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function iS(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new a0(i),e.set(s,[a])):r>=o.length?(a=new a0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var sS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oS=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],aS=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],l0=new Ge,la=new U,Qh=new U;function lS(i,e,t){let n=new Fr,s=new Le,r=new Le,o=new xt,a=new Il,l=new Pl,c={},u=t.maxTextureSize,f={[mi]:Qt,[Qt]:mi,[_t]:_t},h=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:sS,fragmentShader:rS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ue;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let p=this.type;this.render=function(S,A,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Jp&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zo);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),P=i.state;P.setBlending(gi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=p!==this.type;F&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=S.length;R<O;R++){let N=S[R],B=N.shadow;if(B===void 0){Ee("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let H=B.getFrameExtents();s.multiply(H),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/H.x),s.x=r.x*H.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/H.y),s.y=r.y*H.y,B.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ur){if(N.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new rn(s.x,s.y,{format:us,type:Qn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new rs(s.x,s.y,Pn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=ci,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dt,B.map.depthTexture.magFilter=Dt}else N.isPointLight?(B.map=new Fc(s.x),B.map.depthTexture=new Rl(s.x,jn)):(B.map=new rn(s.x,s.y),B.map.depthTexture=new rs(s.x,s.y,jn)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=ci,this.type===Zo?(B.map.depthTexture.compareFunction=z?Ic:Cc,B.map.depthTexture.minFilter=Ot,B.map.depthTexture.magFilter=Ot):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dt,B.map.depthTexture.magFilter=Dt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();N.isPointLight!==!0&&B.updateMatrices(N,M);for(let q=0;q<W;q++){let oe=B.getCamera(q);if(N.isPointLight){let se=B.camera,Be=B.matrix,De=N.distance||se.far;De!==se.far&&(se.far=De,se.updateProjectionMatrix()),la.setFromMatrixPosition(N.matrixWorld),se.position.copy(la),Qh.copy(se.position),Qh.add(oS[q]),se.up.copy(aS[q]),se.lookAt(Qh),se.updateMatrixWorld(),Be.makeTranslation(-la.x,-la.y,-la.z),l0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),B._frustum.setFromProjectionMatrix(l0,se.coordinateSystem,se.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,q),i.clear();else{q===0&&(i.setRenderTarget(B.map),i.clear());let se=B.getViewport(q);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),P.viewport(o)}n=B.getFrustum(q),b(A,M,oe,N,this.type)}B.isPointLightShadow!==!0&&this.type===Ur&&y(B,M),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,D)};function y(S,A){let M=e.update(x);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new rn(s.x,s.y,{format:us,type:Qn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,M,h,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,M,d,x,null)}function v(S,A,M,T){let C=null,D=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=M.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=C.uuid,F=A.uuid,R=c[P];R===void 0&&(R={},c[P]=R);let O=R[F];O===void 0&&(O=C.clone(),R[F]=O,A.addEventListener("dispose",_)),C=O}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Ur?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:f[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=M}return C}function b(S,A,M,T,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Ur)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let F=e.update(S),R=S.material;if(Array.isArray(R)){let O=F.groups;for(let N=0,B=O.length;N<B;N++){let H=O[N],z=R[H.materialIndex];if(z&&z.visible){let W=v(S,z,T,C);S.onBeforeShadow(i,S,A,M,F,W,H),i.renderBufferDirect(M,null,F,W,S,H),S.onAfterShadow(i,S,A,M,F,W,H)}}}else if(R.visible){let O=v(S,R,T,C);S.onBeforeShadow(i,S,A,M,F,O,null),i.renderBufferDirect(M,null,F,O,S,null),S.onAfterShadow(i,S,A,M,F,O,null)}}let P=S.children;for(let F=0,R=P.length;F<R;F++)b(P[F],A,M,T,C)}function _(S){S.target.removeEventListener("dispose",_);for(let M in c){let T=c[M],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function cS(i,e){function t(){let V=!1,he=new xt,te=null,fe=new xt(0,0,0,0);return{setMask:function(xe){te!==xe&&!V&&(i.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){V=xe},setClear:function(xe,re,Pe,Te,Tt){Tt===!0&&(xe*=Te,re*=Te,Pe*=Te),he.set(xe,re,Pe,Te),fe.equals(he)===!1&&(i.clearColor(xe,re,Pe,Te),fe.copy(he))},reset:function(){V=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let V=!1,he=!1,te=null,fe=null,xe=null;return{setReversed:function(re){if(he!==re){let Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),he=re;let Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(re){re?ie(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(re){te!==re&&!V&&(i.depthMask(re),te=re)},setFunc:function(re){if(he&&(re=Lm[re]),fe!==re){switch(re){case gl:i.depthFunc(i.NEVER);break;case xl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Sr:i.depthFunc(i.LEQUAL);break;case yl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=re}},setLocked:function(re){V=re},setClear:function(re){xe!==re&&(xe=re,he&&(re=1-re),i.clearDepth(re))},reset:function(){V=!1,te=null,fe=null,xe=null,he=!1}}}function s(){let V=!1,he=null,te=null,fe=null,xe=null,re=null,Pe=null,Te=null,Tt=null;return{setTest:function(ct){V||(ct?ie(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(ct){he!==ct&&!V&&(i.stencilMask(ct),he=ct)},setFunc:function(ct,Vn,ri){(te!==ct||fe!==Vn||xe!==ri)&&(i.stencilFunc(ct,Vn,ri),te=ct,fe=Vn,xe=ri)},setOp:function(ct,Vn,ri){(re!==ct||Pe!==Vn||Te!==ri)&&(i.stencilOp(ct,Vn,ri),re=ct,Pe=Vn,Te=ri)},setLocked:function(ct){V=ct},setClear:function(ct){Tt!==ct&&(i.clearStencil(ct),Tt=ct)},reset:function(){V=!1,he=null,te=null,fe=null,xe=null,re=null,Pe=null,Te=null,Tt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,v=null,b=null,_=null,S=null,A=null,M=new K(0,0,0),T=0,C=!1,D=null,P=null,F=null,R=null,O=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,H=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=H>=2);let W=null,q={},oe=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),Be=new xt().fromArray(oe),De=new xt().fromArray(se);function Xe(V,he,te,fe){let xe=new Uint8Array(4),re=i.createTexture();i.bindTexture(V,re),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<te;Pe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(he+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return re}let j={};j[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Sr),it(!1),Ct(mh),ie(i.CULL_FACE),ot(gi);function ie(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function be(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Ve(V,he){return h[V]!==he?(i.bindFramebuffer(V,he),h[V]=he,V===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),V===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(V,he){let te=m,fe=!1;if(V){te=d.get(he),te===void 0&&(te=[],d.set(he,te));let xe=V.textures;if(te.length!==xe.length||te[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Pe=xe.length;re<Pe;re++)te[re]=i.COLOR_ATTACHMENT0+re;te.length=xe.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function Ze(V){return x!==V?(i.useProgram(V),x=V,!0):!1}let Xt={[Vs]:i.FUNC_ADD,[Qp]:i.FUNC_SUBTRACT,[em]:i.FUNC_REVERSE_SUBTRACT};Xt[tm]=i.MIN,Xt[nm]=i.MAX;let je={[im]:i.ZERO,[sm]:i.ONE,[rm]:i.SRC_COLOR,[xh]:i.SRC_ALPHA,[hm]:i.SRC_ALPHA_SATURATE,[cm]:i.DST_COLOR,[am]:i.DST_ALPHA,[om]:i.ONE_MINUS_SRC_COLOR,[bh]:i.ONE_MINUS_SRC_ALPHA,[um]:i.ONE_MINUS_DST_COLOR,[lm]:i.ONE_MINUS_DST_ALPHA,[fm]:i.CONSTANT_COLOR,[dm]:i.ONE_MINUS_CONSTANT_COLOR,[pm]:i.CONSTANT_ALPHA,[mm]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(V,he,te,fe,xe,re,Pe,Te,Tt,ct){if(V===gi){g===!0&&(be(i.BLEND),g=!1);return}if(g===!1&&(ie(i.BLEND),g=!0),V!==jp){if(V!==p||ct!==C){if((y!==Vs||_!==Vs)&&(i.blendEquation(i.FUNC_ADD),y=Vs,_=Vs),ct)switch(V){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dt:i.blendFunc(i.ONE,i.ONE);break;case gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",V);break}else switch(V){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gh:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jo:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",V);break}v=null,b=null,S=null,A=null,M.set(0,0,0),T=0,p=V,C=ct}return}xe=xe||he,re=re||te,Pe=Pe||fe,(he!==y||xe!==_)&&(i.blendEquationSeparate(Xt[he],Xt[xe]),y=he,_=xe),(te!==v||fe!==b||re!==S||Pe!==A)&&(i.blendFuncSeparate(je[te],je[fe],je[re],je[Pe]),v=te,b=fe,S=re,A=Pe),(Te.equals(M)===!1||Tt!==T)&&(i.blendColor(Te.r,Te.g,Te.b,Tt),M.copy(Te),T=Tt),p=V,C=!1}function wt(V,he){V.side===_t?be(i.CULL_FACE):ie(i.CULL_FACE);let te=V.side===Qt;he&&(te=!te),it(te),V.blending===xi&&V.transparent===!1?ot(gi):ot(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);let fe=V.stencilWrite;a.setTest(fe),fe&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),mn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(V){D!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),D=V)}function Ct(V){V!==Kp?(ie(i.CULL_FACE),V!==P&&(V===mh?i.cullFace(i.BACK):V===Zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),P=V}function Jt(V){V!==F&&(B&&i.lineWidth(V),F=V)}function mn(V,he,te){V?(ie(i.POLYGON_OFFSET_FILL),(R!==he||O!==te)&&(R=he,O=te,o.getReversed()&&(he=-he),i.polygonOffset(he,te))):be(i.POLYGON_OFFSET_FILL)}function Pt(V){V?ie(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function zt(V){V===void 0&&(V=i.TEXTURE0+N-1),W!==V&&(i.activeTexture(V),W=V)}function G(V,he,te){te===void 0&&(W===null?te=i.TEXTURE0+N-1:te=W);let fe=q[te];fe===void 0&&(fe={type:void 0,texture:void 0},q[te]=fe),(fe.type!==V||fe.texture!==he)&&(W!==te&&(i.activeTexture(te),W=te),i.bindTexture(V,he||j[V]),fe.type=V,fe.texture=he)}function en(){let V=q[W];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function w(){try{i.texSubImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function X(){try{i.texSubImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function ae(){try{i.texStorage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function le(){try{i.texStorage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function ee(){try{i.texImage2D(...arguments)}catch(V){Oe("WebGLState:",V)}}function ne(){try{i.texImage3D(...arguments)}catch(V){Oe("WebGLState:",V)}}function ce(V){return f[V]!==void 0?f[V]:i.getParameter(V)}function Re(V,he){f[V]!==he&&(i.pixelStorei(V,he),f[V]=he)}function de(V){Be.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Be.copy(V))}function ue(V){De.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function Ce(V,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let fe=te.get(V);fe===void 0&&(fe=i.getUniformBlockIndex(he,V.name),te.set(V,fe))}function Fe(V,he){let fe=c.get(he).get(V);l.get(he)!==fe&&(i.uniformBlockBinding(he,fe,V.__bindingPointIndex),l.set(he,fe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},W=null,q={},h={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,v=null,b=null,_=null,S=null,A=null,M=new K(0,0,0),T=0,C=!1,D=null,P=null,F=null,R=null,O=null,Be.set(0,0,i.canvas.width,i.canvas.height),De.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:be,bindFramebuffer:Ve,drawBuffers:ve,useProgram:Ze,setBlending:ot,setMaterial:wt,setFlipSided:it,setCullFace:Ct,setLineWidth:Jt,setPolygonOffset:mn,setScissorTest:Pt,activeTexture:zt,bindTexture:G,unbindTexture:en,compressedTexImage2D:mt,compressedTexImage3D:L,texImage2D:ee,texImage3D:ne,pixelStorei:Re,getParameter:ce,updateUBOMapping:Ce,uniformBlockBinding:Fe,texStorage2D:ae,texStorage3D:le,texSubImage2D:w,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:de,viewport:ue,reset:He}}function uS(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,w){return m?new OffscreenCanvas(L,w):Ar("canvas")}function g(L,w,X){let Z=1,Q=mt(L);if((Q.width>X||Q.height>X)&&(Z=X/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ae=Math.floor(Z*Q.width),le=Math.floor(Z*Q.height);h===void 0&&(h=x(ae,le));let ee=w?x(ae,le):h;return ee.width=ae,ee.height=le,ee.getContext("2d").drawImage(L,0,0,ae,le),Ee("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+le+")."),ee}else return"data"in L&&Ee("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function p(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(L,w,X,Z,Q,ae=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let le;Z&&(le=e.get("EXT_texture_norm16"),le||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===i.RED&&(X===i.FLOAT&&(ee=i.R32F),X===i.HALF_FLOAT&&(ee=i.R16F),X===i.UNSIGNED_BYTE&&(ee=i.R8),X===i.UNSIGNED_SHORT&&le&&(ee=le.R16_EXT),X===i.SHORT&&le&&(ee=le.R16_SNORM_EXT)),w===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.R8UI),X===i.UNSIGNED_SHORT&&(ee=i.R16UI),X===i.UNSIGNED_INT&&(ee=i.R32UI),X===i.BYTE&&(ee=i.R8I),X===i.SHORT&&(ee=i.R16I),X===i.INT&&(ee=i.R32I)),w===i.RG&&(X===i.FLOAT&&(ee=i.RG32F),X===i.HALF_FLOAT&&(ee=i.RG16F),X===i.UNSIGNED_BYTE&&(ee=i.RG8),X===i.UNSIGNED_SHORT&&le&&(ee=le.RG16_EXT),X===i.SHORT&&le&&(ee=le.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RG8UI),X===i.UNSIGNED_SHORT&&(ee=i.RG16UI),X===i.UNSIGNED_INT&&(ee=i.RG32UI),X===i.BYTE&&(ee=i.RG8I),X===i.SHORT&&(ee=i.RG16I),X===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),X===i.UNSIGNED_INT&&(ee=i.RGB32UI),X===i.BYTE&&(ee=i.RGB8I),X===i.SHORT&&(ee=i.RGB16I),X===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),X===i.UNSIGNED_INT&&(ee=i.RGBA32UI),X===i.BYTE&&(ee=i.RGBA8I),X===i.SHORT&&(ee=i.RGBA16I),X===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&(X===i.UNSIGNED_SHORT&&le&&(ee=le.RGB16_EXT),X===i.SHORT&&le&&(ee=le.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),w===i.RGBA){let ne=ae?Eo:$e.getTransfer(Q);X===i.FLOAT&&(ee=i.RGBA32F),X===i.HALF_FLOAT&&(ee=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ee=ne===ft?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&le&&(ee=le.RGBA16_EXT),X===i.SHORT&&le&&(ee=le.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(L,w){let X;return L?w===null||w===jn||w===zr?X=i.DEPTH24_STENCIL8:w===Pn?X=i.DEPTH32F_STENCIL8:w===kr&&(X=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===jn||w===zr?X=i.DEPTH_COMPONENT24:w===Pn?X=i.DEPTH_COMPONENT32F:w===kr&&(X=i.DEPTH_COMPONENT16),X}function S(L,w){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dt&&L.minFilter!==Ot?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function A(L){let w=L.target;w.removeEventListener("dispose",A),T(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&f.delete(w)}function M(L){let w=L.target;w.removeEventListener("dispose",M),D(w)}function T(L){let w=n.get(L);if(w.__webglInit===void 0)return;let X=L.source,Z=d.get(X);if(Z){let Q=Z[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(L),Object.keys(Z).length===0&&d.delete(X)}n.remove(L)}function C(L){let w=n.get(L);i.deleteTexture(w.__webglTexture);let X=L.source,Z=d.get(X);delete Z[w.__cacheKey],o.memory.textures--}function D(L){let w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let Q=0;Q<w.__webglFramebuffer[Z].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[Z][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)i.deleteFramebuffer(w.__webglFramebuffer[Z]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=L.textures;for(let Z=0,Q=X.length;Z<Q;Z++){let ae=n.get(X[Z]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(X[Z])}n.remove(L)}let P=0;function F(){P=0}function R(){return P}function O(L){P=L}function N(){let L=P;return L>=s.maxTextures&&Ee("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function B(L){let w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function H(L,w){let X=n.get(L);if(L.isVideoTexture&&G(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let Z=L.image;if(Z===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{be(X,L,w);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+w)}function z(L,w){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){be(X,L,w);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+w)}function W(L,w){let X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){be(X,L,w);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+w)}function q(L,w){let X=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){Ve(X,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+w)}let oe={[Kn]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[wr]:i.MIRRORED_REPEAT},se={[Dt]:i.NEAREST,[Xl]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},Be={[Sm]:i.NEVER,[Rm]:i.ALWAYS,[wm]:i.LESS,[Cc]:i.LEQUAL,[Tm]:i.EQUAL,[Ic]:i.GEQUAL,[Am]:i.GREATER,[Em]:i.NOTEQUAL};function De(L,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ot||w.magFilter===Br||w.magFilter===Hs||w.magFilter===Jn||w.minFilter===Ot||w.minFilter===Br||w.minFilter===Hs||w.minFilter===Jn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,oe[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,oe[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,oe[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Be[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Dt||w.minFilter!==Hs&&w.minFilter!==Jn||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Xe(L,w){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",A));let Z=w.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let ae=B(w);if(ae!==L.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[ae].usedTimes++;let le=Q[L.__cacheKey];le!==void 0&&(Q[L.__cacheKey].usedTimes--,le.usedTimes===0&&C(w)),L.__cacheKey=ae,L.__webglTexture=Q[ae].texture}return X}function j(L,w,X){return Math.floor(Math.floor(L/X)/w)}function ie(L,w,X,Z){let ae=L.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,X,Z,w.data);else{ae.sort((Re,de)=>Re.start-de.start);let le=0;for(let Re=1;Re<ae.length;Re++){let de=ae[le],ue=ae[Re],Ce=de.start+de.count,Fe=j(ue.start,w.width,4),He=j(de.start,w.width,4);ue.start<=Ce+1&&Fe===He&&j(ue.start+ue.count-1,w.width,4)===Fe?de.count=Math.max(de.count,ue.start+ue.count-de.start):(++le,ae[le]=ue)}ae.length=le+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Re=0,de=ae.length;Re<de;Re++){let ue=ae[Re],Ce=Math.floor(ue.start/4),Fe=Math.ceil(ue.count/4),He=Ce%w.width,V=Math.floor(Ce/w.width),he=Fe,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,He,V,he,te,X,Z,w.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function be(L,w,X){let Z=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=i.TEXTURE_3D);let Q=Xe(L,w),ae=w.source;t.bindTexture(Z,L.__webglTexture,i.TEXTURE0+X);let le=n.get(ae);if(ae.version!==le.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let te=$e.getPrimaries($e.workingColorSpace),fe=w.colorSpace===Vi?null:$e.getPrimaries(w.colorSpace),xe=w.colorSpace===Vi||te===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ne=g(w.image,!1,s.maxTextureSize);ne=en(w,ne);let ce=r.convert(w.format,w.colorSpace),Re=r.convert(w.type),de=b(w.internalFormat,ce,Re,w.normalized,w.colorSpace,w.isVideoTexture);De(Z,w);let ue,Ce=w.mipmaps,Fe=w.isVideoTexture!==!0,He=le.__version===void 0||Q===!0,V=ae.dataReady,he=S(w,ne);if(w.isDepthTexture)de=_(w.format===cs,w.type),He&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,ce,Re,null));else if(w.isDataTexture)if(Ce.length>0){Fe&&He&&t.texStorage2D(i.TEXTURE_2D,he,de,Ce[0].width,Ce[0].height);for(let te=0,fe=Ce.length;te<fe;te++)ue=Ce[te],Fe?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,Re,ue.data):t.texImage2D(i.TEXTURE_2D,te,de,ue.width,ue.height,0,ce,Re,ue.data);w.generateMipmaps=!1}else Fe?(He&&t.texStorage2D(i.TEXTURE_2D,he,de,ne.width,ne.height),V&&ie(w,ne,ce,Re)):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,ce,Re,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,Ce[0].width,Ce[0].height,ne.depth);for(let te=0,fe=Ce.length;te<fe;te++)if(ue=Ce[te],w.format!==Ln)if(ce!==null)if(Fe){if(V)if(w.layerUpdates.size>0){let xe=Gh(ue.width,ue.height,w.format,w.type);for(let re of w.layerUpdates){let Pe=ue.data.subarray(re*xe/ue.data.BYTES_PER_ELEMENT,(re+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,re,ue.width,ue.height,1,ce,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,ce,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,ue.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,ce,Re,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,ce,Re,ue.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Fe&&He&&t.texStorage2D(i.TEXTURE_2D,he,de,Ce[0].width,Ce[0].height);for(let te=0,fe=Ce.length;te<fe;te++)ue=Ce[te],w.format!==Ln?ce!==null?Fe?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,de,ue.width,ue.height,0,ue.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,Re,ue.data):t.texImage2D(i.TEXTURE_2D,te,de,ue.width,ue.height,0,ce,Re,ue.data)}else if(w.isDataArrayTexture)if(Fe){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,ne.width,ne.height,ne.depth),V)if(w.layerUpdates.size>0){let te=Gh(ne.width,ne.height,w.format,w.type);for(let fe of w.layerUpdates){let xe=ne.data.subarray(fe*te/ne.data.BYTES_PER_ELEMENT,(fe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ne.width,ne.height,1,ce,Re,xe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ce,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,ce,Re,ne.data);else if(w.isData3DTexture)Fe?(He&&t.texStorage3D(i.TEXTURE_3D,he,de,ne.width,ne.height,ne.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ce,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,ce,Re,ne.data);else if(w.isFramebufferTexture){if(He)if(Fe)t.texStorage2D(i.TEXTURE_2D,he,de,ne.width,ne.height);else{let te=ne.width,fe=ne.height;for(let xe=0;xe<he;xe++)t.texImage2D(i.TEXTURE_2D,xe,de,te,fe,0,ce,Re,null),te>>=1,fe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),f.add(w),te.onpaint=fe=>{let xe=fe.changedElements;for(let re of f)xe.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let xe=i.RGBA,re=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,re,Pe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Fe&&He){let te=mt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,he,de,te.width,te.height)}for(let te=0,fe=Ce.length;te<fe;te++)ue=Ce[te],Fe?V&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce,Re,ue):t.texImage2D(i.TEXTURE_2D,te,de,ce,Re,ue);w.generateMipmaps=!1}else if(Fe){if(He){let te=mt(ne);t.texStorage2D(i.TEXTURE_2D,he,de,te.width,te.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,de,ce,Re,ne);p(w)&&y(Z),le.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ve(L,w,X){if(w.image.length!==6)return;let Z=Xe(L,w),Q=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);let ae=n.get(Q);if(Q.version!==ae.__version||Z===!0){t.activeTexture(i.TEXTURE0+X);let le=$e.getPrimaries($e.workingColorSpace),ee=w.colorSpace===Vi?null:$e.getPrimaries(w.colorSpace),ne=w.colorSpace===Vi||le===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ce=w.isCompressedTexture||w.image[0].isCompressedTexture,Re=w.image[0]&&w.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!ce&&!Re?de[re]=g(w.image[re],!0,s.maxCubemapSize):de[re]=Re?w.image[re].image:w.image[re],de[re]=en(w,de[re]);let ue=de[0],Ce=r.convert(w.format,w.colorSpace),Fe=r.convert(w.type),He=b(w.internalFormat,Ce,Fe,w.normalized,w.colorSpace),V=w.isVideoTexture!==!0,he=ae.__version===void 0||Z===!0,te=Q.dataReady,fe=S(w,ue);De(i.TEXTURE_CUBE_MAP,w);let xe;if(ce){V&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,He,ue.width,ue.height);for(let re=0;re<6;re++){xe=de[re].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){let Te=xe[Pe];w.format!==Ln?Ce!==null?V?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,He,Te.width,Te.height,0,Te.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,Te.width,Te.height,Ce,Fe,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,He,Te.width,Te.height,0,Ce,Fe,Te.data)}}}else{if(xe=w.mipmaps,V&&he){xe.length>0&&fe++;let re=mt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,He,re.width,re.height)}for(let re=0;re<6;re++)if(Re){V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,Ce,Fe,de[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,de[re].width,de[re].height,0,Ce,Fe,de[re].data);for(let Pe=0;Pe<xe.length;Pe++){let Tt=xe[Pe].image[re].image;V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Tt.width,Tt.height,Ce,Fe,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,He,Tt.width,Tt.height,0,Ce,Fe,Tt.data)}}else{V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,Fe,de[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,He,Ce,Fe,de[re]);for(let Pe=0;Pe<xe.length;Pe++){let Te=xe[Pe];V?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Ce,Fe,Te.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,He,Ce,Fe,Te.image[re])}}}p(w)&&y(i.TEXTURE_CUBE_MAP),ae.__version=Q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ve(L,w,X,Z,Q,ae){let le=r.convert(X.format,X.colorSpace),ee=r.convert(X.type),ne=b(X.internalFormat,le,ee,X.normalized,X.colorSpace),ce=n.get(w),Re=n.get(X);if(Re.__renderTarget=w,!ce.__hasExternalTextures){let de=Math.max(1,w.width>>ae),ue=Math.max(1,w.height>>ae);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,ne,de,ue,w.depth,0,le,ee,null):t.texImage2D(Q,ae,ne,de,ue,0,le,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,Q,Re.__webglTexture,0,Pt(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,Q,Re.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(L,w,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){let Z=w.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ae=_(w.stencilBuffer,Q),le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt(w),ae,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt(w),ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,L)}else{let Z=w.textures;for(let Q=0;Q<Z.length;Q++){let ae=Z[Q],le=r.convert(ae.format,ae.colorSpace),ee=r.convert(ae.type),ne=b(ae.internalFormat,le,ee,ae.normalized,ae.colorSpace);zt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt(w),ne,w.width,w.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt(w),ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Xt(L,w,X){let Z=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),De(i.TEXTURE_CUBE_MAP,w.depthTexture);let ce=r.convert(w.depthTexture.format),Re=r.convert(w.depthTexture.type),de;w.depthTexture.format===ci?de=i.DEPTH_COMPONENT24:w.depthTexture.format===cs&&(de=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,de,w.width,w.height,0,ce,Re,null)}}else H(w.depthTexture,0);let ae=Q.__webglTexture,le=Pt(w),ee=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,ne=w.depthTexture.format===cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===ci)zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ae,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ae,0);else if(w.depthTexture.format===cs)zt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ae,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(L){let w=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){let Z=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=Z}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)Xt(w.__webglFramebuffer[Z],L,Z);else{let Z=L.texture.mipmaps;Z&&Z.length>0?Xt(w.__webglFramebuffer[0],L,0):Xt(w.__webglFramebuffer,L,0)}else if(X){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ze(w.__webglDepthbuffer[Z],L,!1);else{let Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}}else{let Z=L.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ze(w.__webglDepthbuffer,L,!1);else{let Q=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(L,w,X){let Z=n.get(L);w!==void 0&&ve(Z.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&je(L)}function wt(L){let w=L.texture,X=n.get(L),Z=n.get(w);L.addEventListener("dispose",M);let Q=L.textures,ae=L.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=w.version,o.memory.textures++),ae){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ne=0;ne<w.mipmaps.length;ne++)X.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else X.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)X.__webglFramebuffer[ee]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(le)for(let ee=0,ne=Q.length;ee<ne;ee++){let ce=n.get(Q[ee]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&zt(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let ne=Q[ee];X.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);let ce=r.convert(ne.format,ne.colorSpace),Re=r.convert(ne.type),de=b(ne.internalFormat,ce,Re,ne.normalized,ne.colorSpace,L.isXRRenderTarget===!0),ue=Pt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,de,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),De(i.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)ve(X.__webglFramebuffer[ee][ne],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else ve(X.__webglFramebuffer[ee],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(w)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ee=0,ne=Q.length;ee<ne;ee++){let ce=Q[ee],Re=n.get(ce),de=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Re.__webglTexture),De(de,ce),ve(X.__webglFramebuffer,L,ce,i.COLOR_ATTACHMENT0+ee,de,0),p(ce)&&y(de)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,Z.__webglTexture),De(ee,w),w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)ve(X.__webglFramebuffer[ne],L,w,i.COLOR_ATTACHMENT0,ee,ne);else ve(X.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,ee,0);p(w)&&y(ee),t.unbindTexture()}L.depthBuffer&&je(L)}function it(L){let w=L.textures;for(let X=0,Z=w.length;X<Z;X++){let Q=w[X];if(p(Q)){let ae=v(L),le=n.get(Q).__webglTexture;t.bindTexture(ae,le),y(ae),t.unbindTexture()}}}let Ct=[],Jt=[];function mn(L){if(L.samples>0){if(zt(L)===!1){let w=L.textures,X=L.width,Z=L.height,Q=i.COLOR_BUFFER_BIT,ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(L),ee=w.length>1;if(ee)for(let ce=0;ce<w.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let ne=L.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Re=n.get(w[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,X,Z,0,0,X,Z,Q,i.NEAREST),l===!0&&(Ct.length=0,Jt.length=0,Ct.push(i.COLOR_ATTACHMENT0+ce),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Ct.push(ae),Jt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ce=0;ce<w.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Re=n.get(w[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Pt(L){return Math.min(s.maxSamples,L.samples)}function zt(L){let w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function G(L){let w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function en(L,w){let X=L.colorSpace,Z=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==fn&&X!==Vi&&($e.getTransfer(X)===ft?(Z!==Ln||Q!==vn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",X)),w}function mt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=F,this.getTextureUnits=R,this.setTextureUnits=O,this.setTexture2D=H,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=q,this.rebindTextures=ot,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hS(i,e){function t(n,s=Vi){let r,o=$e.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Yl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Eh)return i.BYTE;if(n===Rh)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===ql)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===Ph)return i.ALPHA;if(n===Lh)return i.RGB;if(n===Ln)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===cs)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===Zl)return i.RED_INTEGER;if(n===us)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===jl)return i.RGBA_INTEGER;if(n===Qo||n===ea||n===ta||n===na)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===ec||n===tc||n===nc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===ia||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ic||n===sc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return r.COMPRESSED_R11_EAC;if(n===ac)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===lc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===bc||n===yc||n===_c||n===vc||n===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_c)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sc||n===wc||n===Tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sc)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ac||n===Ec||n===sa||n===Rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ac)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var fS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new In({vertexShader:fS,fragmentShader:dS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cf=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new lf,p={},y=t.getContextAttributes(),v=null,b=null,_=[],S=[],A=new Le,M=null,T=null,C=new Ht;C.viewport=new xt;let D=new Ht;D.viewport=new xt;let P=[C,D],F=new zl,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=_[j];return ie===void 0&&(ie=new Ir,_[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=_[j];return ie===void 0&&(ie=new Ir,_[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=_[j];return ie===void 0&&(ie=new Ir,_[j]=ie),ie.getHandSpace()};function N(j){let ie=S.indexOf(j.inputSource);if(ie===-1)return;let be=_[ie];be!==void 0&&(be.update(j.inputSource,j.frame,c||o),be.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let j=0;j<_.length;j++){let ie=S[j];ie!==null&&(S[j]=null,_[j].disconnect(ie))}R=null,O=null,g.reset();for(let j in p)delete p[j];if(e.setRenderTarget(v),d=null,h=null,f=null,s=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),T!==null){let j=T.camera;j.fov=T.fov,j.zoom=T.zoom,j.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ve=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?cs:ci,Ve=y.stencil?zr:jn);let Ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new rn(h.textureWidth,h.textureHeight,{format:Ln,type:vn,depthTexture:new rs(h.textureWidth,h.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new rn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H(j){for(let ie=0;ie<j.removed.length;ie++){let be=j.removed[ie],Ve=S.indexOf(be);Ve>=0&&(S[Ve]=null,_[Ve].disconnect(be))}for(let ie=0;ie<j.added.length;ie++){let be=j.added[ie],Ve=S.indexOf(be);if(Ve===-1){for(let Ze=0;Ze<_.length;Ze++)if(Ze>=S.length){S.push(be),Ve=Ze;break}else if(S[Ze]===null){S[Ze]=be,Ve=Ze;break}if(Ve===-1)break}let ve=_[Ve];ve&&ve.connect(be)}}let z=new U,W=new U;function q(j,ie,be){z.setFromMatrixPosition(ie.matrixWorld),W.setFromMatrixPosition(be.matrixWorld);let Ve=z.distanceTo(W),ve=ie.projectionMatrix.elements,Ze=be.projectionMatrix.elements,Xt=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),ot=(ve[9]+1)/ve[5],wt=(ve[9]-1)/ve[5],it=(ve[8]-1)/ve[0],Ct=(Ze[8]+1)/Ze[0],Jt=Xt*it,mn=Xt*Ct,Pt=Ve/(-it+Ct),zt=Pt*-it;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(zt),j.translateZ(Pt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ve[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let G=Xt+Pt,en=je+Pt,mt=Jt-zt,L=mn+(Ve-zt),w=ot*je/en*G,X=wt*je/en*G;j.projectionMatrix.makePerspective(mt,L,w,X,G,en),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function oe(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ie=j.near,be=j.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(be=g.depthFar)),F.near=D.near=C.near=ie,F.far=D.far=C.far=be,(R!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),R=F.near,O=F.far),F.layers.mask=j.layers.mask|6,C.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Ve=j.parent,ve=F.cameras;oe(F,Ve);for(let Ze=0;Ze<ve.length;Ze++)oe(ve[Ze],Ve);ve.length===2?q(F,C,D):F.projectionMatrix.copy(C.projectionMatrix),T===null&&j.isPerspectiveCamera&&(T={camera:j,fov:j.fov,zoom:j.zoom}),se(j,F,Ve)};function se(j,ie,be){be===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(be.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Is*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(j){return p[j]};let Be=null;function De(j,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){let be=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ve=!1;be.length!==F.cameras.length&&(F.cameras.length=0,Ve=!0);for(let je=0;je<be.length;je++){let ot=be[je],wt=null;if(d!==null)wt=d.getViewport(ot);else{let Ct=f.getViewSubImage(h,ot);wt=Ct.viewport,je===0&&(e.setRenderTargetTextures(b,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(b))}let it=P[je];it===void 0&&(it=new Ht,it.layers.enable(je),it.viewport=new xt,P[je]=it),it.matrix.fromArray(ot.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(ot.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(wt.x,wt.y,wt.width,wt.height),je===0&&(F.matrix.copy(it.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ve===!0&&F.cameras.push(it)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let je=f.getDepthInformation(be[0]);je&&je.isValid&&je.texture&&g.init(je,s.renderState)}if(ve&&ve.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let je=0;je<be.length;je++){let ot=be[je].camera;if(ot){let wt=p[ot];wt||(wt=new Oo,p[ot]=wt);let it=f.getCameraImage(ot);wt.sourceTexture=it}}}}for(let be=0;be<_.length;be++){let Ve=S[be],ve=_[be];Ve!==null&&ve!==void 0&&ve.update(Ve,ie,c||o)}Be&&Be(j,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}let Xe=new c0;Xe.setAnimationLoop(De),this.setAnimationLoop=function(j){Be=j},this.dispose=function(){}}},pS=new Ge,m0=new ze;m0.set(-1,0,0,0,1,0,0,0,1);function mS(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,kh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,b=y.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(pS.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(m0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gS(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let S=_.program;n.uniformBlockBinding(b,S)}function c(b,_){let S=s[b.id];S===void 0&&(g(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",y));let A=_.program;n.updateUBOMapping(b,A);let M=e.render.frame;r[b.id]!==M&&(h(b),r[b.id]=M)}function u(b){let _=f();b.__bindingPointIndex=_;let S=i.createBuffer(),A=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let _=s[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,T=S.length;M<T;M++){let C=S[M];if(Array.isArray(C))for(let D=0,P=C.length;D<P;D++)d(C[D],M,D,A);else d(C,M,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,_,S,A){if(x(b,_,S,A)===!0){let M=b.__offset,T=b.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let P=T[D],F=p(P);m(P,b.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function m(b,_,S){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,S)}function x(b,_,S,A){let M=b.value,T=_+"_"+S;if(A[T]===void 0)return typeof M=="number"||typeof M=="boolean"?A[T]=M:ArrayBuffer.isView(M)?A[T]=M.slice():A[T]=M.clone(),!0;{let C=A[T];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(b){let _=b.uniforms,S=0,A=16;for(let T=0,C=_.length;T<C;T++){let D=Array.isArray(_[T])?_[T]:[_[T]];for(let P=0,F=D.length;P<F;P++){let R=D[P],O=Array.isArray(R.value)?R.value:[R.value];for(let N=0,B=O.length;N<B;N++){let H=O[N],z=p(H),W=S%A,q=W%z.boundary,oe=W+q;S+=q,oe!==0&&A-oe<z.storage&&(S+=A-oe),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=z.storage}}}let M=S%A;return M>0&&(S+=A-M),b.__size=S,b.__cache={},this}function p(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",b),_}function y(b){let _=b.target;_.removeEventListener("dispose",y);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}var xS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function bS(){return bi===null&&(bi=new Lr(xS,16,16,us,Qn),bi.name="DFG_LUT",bi.minFilter=Ot,bi.magFilter=Ot,bi.wrapS=hn,bi.wrapT=hn,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var qr=class{constructor(e={}){let{canvas:t=Cm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([jl,Jl,Zl]),p=new Set([vn,jn,kr,zr,Yl,$l]),y=new Uint32Array(4),v=new Int32Array(4),b=new U,_=null,S=null,A=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,P=null,F=null,R=null,O=null;this._outputColorSpace=yt;let N=0,B=0,H=null,z=-1,W=null,q=new xt,oe=new xt,se=null,Be=new K(0),De=0,Xe=t.width,j=t.height,ie=1,be=null,Ve=null,ve=new xt(0,0,Xe,j),Ze=new xt(0,0,Xe,j),Xt=!1,je=new Fr,ot=!1,wt=!1,it=new Ge,Ct=new U,Jt=new xt,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function zt(){return H===null?ie:1}let G=n;function en(E,k){return t.getContext(E,k)}let mt,L,w,X,Z,Q,ae,le,ee,ne,ce,Re,de,ue,Ce,Fe,He,V,he,te,fe,xe,re;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),G===null){let k="webgl2";if(G=en(k,E),G===null)throw en(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(E){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Oe("WebGLRenderer: "+E.message),E}function Pe(){mt=new TM(G),mt.init(),fe=new hS(G,mt),L=new mM(G,mt,e,fe),w=new cS(G,mt),L.reversedDepthBuffer&&h&&w.buffers.depth.setReversed(!0),F=G.createFramebuffer(),R=G.createFramebuffer(),O=G.createFramebuffer(),X=new RM(G),Z=new K1,Q=new uS(G,mt,w,Z,L,fe,X),ae=new wM(C),le=new Iy(G),xe=new dM(G,le),ee=new AM(G,le,X,xe),ne=new IM(G,ee,le,xe,X),V=new CM(G,L,Q),Ce=new gM(Z),ce=new $1(C,ae,mt,L,xe,Ce),Re=new mS(C,Z),de=new J1,ue=new iS(mt),He=new fM(C,ae,w,ne,m,l),Fe=new lS(C,ne,L),re=new gS(G,X,L,w),he=new pM(G,mt,X),te=new EM(G,mt,X),X.programs=ce.programs,C.capabilities=L,C.extensions=mt,C.properties=Z,C.renderLists=de,C.shadowMap=Fe,C.state=w,C.info=X}x!==vn&&(T=new LM(x,t.width,t.height,a,s,r));let Te=new cf(C,G);this.xr=Te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(Xe,j,!1))},this.getSize=function(E){return E.set(Xe,j)},this.setSize=function(E,k,J=!0){if(Te.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=E,j=k,t.width=Math.floor(E*ie),t.height=Math.floor(k*ie),J===!0&&(t.style.width=E+"px",t.style.height=k+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(Xe*ie,j*ie).floor()},this.setDrawingBufferSize=function(E,k,J){Xe=E,j=k,ie=J,t.width=Math.floor(E*J),t.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(x===vn){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(q)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,k,J,Y){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,k,J,Y),w.viewport(q.copy(ve).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(Ze)},this.setScissor=function(E,k,J,Y){E.isVector4?Ze.set(E.x,E.y,E.z,E.w):Ze.set(E,k,J,Y),w.scissor(oe.copy(Ze).multiplyScalar(ie).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(E){w.setScissorTest(Xt=E)},this.setOpaqueSort=function(E){be=E},this.setTransparentSort=function(E){Ve=E},this.getClearColor=function(E){return E.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,J=!0){let Y=0;if(E){let $=!1;if(H!==null){let ge=H.texture.format;$=g.has(ge)}if($){let ge=H.texture.type,Me=p.has(ge),me=He.getClearColor(),Se=He.getClearAlpha(),Ae=me.r,qe=me.g,Qe=me.b;Me?(y[0]=Ae,y[1]=qe,y[2]=Qe,y[3]=Se,G.clearBufferuiv(G.COLOR,0,y)):(v[0]=Ae,v[1]=qe,v[2]=Qe,v[3]=Se,G.clearBufferiv(G.COLOR,0,v))}else Y|=G.COLOR_BUFFER_BIT}k&&(Y|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&G.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),He.dispose(),de.dispose(),ue.dispose(),Z.dispose(),ae.dispose(),ne.dispose(),xe.dispose(),re.dispose(),ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Zd),Te.removeEventListener("sessionend",Jd),Ms.stop()};function Tt(E){E.preventDefault(),Ro("WebGLRenderer: Context Lost."),D=!0}function ct(){Ro("WebGLRenderer: Context Restored."),D=!1;let E=X.autoReset,k=Fe.enabled,J=Fe.autoUpdate,Y=Fe.needsUpdate,$=Fe.type;Pe(),X.autoReset=E,Fe.enabled=k,Fe.autoUpdate=J,Fe.needsUpdate=Y,Fe.type=$}function Vn(E){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ri(E){let k=E.target;k.removeEventListener("dispose",ri),nb(k)}function nb(E){ib(E),Z.remove(E)}function ib(E){let k=Z.get(E).programs;k!==void 0&&(k.forEach(function(J){ce.releaseProgram(J)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,Y,$,ge){k===null&&(k=mn);let Me=$.isMesh&&$.matrixWorld.determinantAffine()<0,me=ob(E,k,J,Y,$);w.setMaterial(Y,Me);let Se=J.index,Ae=1;if(Y.wireframe===!0){if(Se=ee.getWireframeAttribute(J),Se===void 0)return;Ae=2}let qe=J.drawRange,Qe=J.attributes.position,we=qe.start*Ae,ut=(qe.start+qe.count)*Ae;ge!==null&&(we=Math.max(we,ge.start*Ae),ut=Math.min(ut,(ge.start+ge.count)*Ae)),Se!==null?(we=Math.max(we,0),ut=Math.min(ut,Se.count)):Qe!=null&&(we=Math.max(we,0),ut=Math.min(ut,Qe.count));let Vt=ut-we;if(Vt<0||Vt===1/0)return;xe.setup($,Y,me,J,Se);let Et,vt=he;if(Se!==null&&(Et=le.get(Se),vt=te,vt.setIndex(Et)),$.isMesh)Y.wireframe===!0?(w.setLineWidth(Y.wireframeLinewidth*zt()),vt.setMode(G.LINES)):vt.setMode(G.TRIANGLES);else if($.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),w.setLineWidth(tn*zt()),$.isLineSegments?vt.setMode(G.LINES):$.isLineLoop?vt.setMode(G.LINE_LOOP):vt.setMode(G.LINE_STRIP)}else $.isPoints?vt.setMode(G.POINTS):$.isSprite&&vt.setMode(G.TRIANGLES);if($.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let tn=$._multiDrawStarts,_e=$._multiDrawCounts,cn=$._multiDrawCount,st=Se?le.get(Se).bytesPerElement:1,Fn=Z.get(Y).currentProgram.getUniforms();for(let oi=0;oi<cn;oi++)Fn.setValue(G,"_gl_DrawID",oi),vt.render(tn[oi]/st,_e[oi])}else if($.isInstancedMesh)vt.renderInstances(we,Vt,$.count);else if(J.isInstancedBufferGeometry){let tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,_e=Math.min(J.instanceCount,tn);vt.renderInstances(we,Vt,_e)}else vt.render(we,Vt)};function Kd(E,k,J,Y){P!==null&&E.isNodeMaterial&&P.setObject(Y,E),ot===!0&&Ce.setState(E,J,!1),E.transparent===!0&&E.side===_t&&E.forceSinglePass===!1?(E.side=Qt,E.needsUpdate=!0,Na(E,k,Y),E.side=mi,E.needsUpdate=!0,Na(E,k,Y),E.side=_t):Na(E,k,Y)}this.compile=function(E,k,J=null){J===null&&(J=E),P!==null&&P.renderStart(E,k,J),S=ue.get(J),S.init(k),M.push(S),J.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),E!==J&&E.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),wt=this.localClippingEnabled,ot=Ce.init(this.clippingPlanes,wt),ot===!0&&Ce.setGlobalState(this.clippingPlanes,k),P!==null&&Fe.render(S.state.shadowsArray,J,k);let Y=new Set;return E.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let ge=$.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let me=ge[Me];Kd(me,J,k,$),Y.add(me)}else Kd(ge,J,k,$),Y.add(ge)}),S=M.pop(),P!==null&&P.renderEnd(),Y},this.compileAsync=function(E,k,J=null){let Y=this.compile(E,k,J);return new Promise($=>{function ge(){if(Y.forEach(function(Me){let Se=Z.get(Me).currentProgram;(Se===void 0||Se.isReady())&&Y.delete(Me)}),Y.size===0){$(E);return}setTimeout(ge,10)}mt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Au=null;function sb(E){Au&&Au(E)}function Zd(){Ms.stop()}function Jd(){Ms.start()}let Ms=new c0;Ms.setAnimationLoop(sb),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(E){Au=E,Te.setAnimationLoop(E),E===null?Ms.stop():Ms.start()},Te.addEventListener("sessionstart",Zd),Te.addEventListener("sessionend",Jd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;P!==null&&P.renderStart(E,k);let J=Te.enabled===!0&&Te.isPresenting===!0,Y=T!==null&&(H===null||J)&&T.begin(C,H);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(k),k=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,k,H),S=ue.get(E,M.length),S.init(k),S.state.textureUnits=Q.getTextureUnits(),M.push(S),it.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),je.setFromProjectionMatrix(it,Yn,k.reversedDepth),wt=this.localClippingEnabled,ot=Ce.init(this.clippingPlanes,wt),_=de.get(E,A.length),_.init(),A.push(_),Te.enabled===!0&&Te.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&Eu(Me,k,-1/0,C.sortObjects)}Eu(E,k,0,C.sortObjects),_.finish(),P!==null&&P.updateLights(S.state.lightsArray),C.sortObjects===!0&&_.sort(be,Ve),Pt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Pt&&He.addToRenderList(_,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&Ce.beginShadows();let $=S.state.shadowsArray;if(Fe.render($,E,k),ot===!0&&Ce.endShadows(),(Y&&T.hasRenderPass())===!1){let Me=_.opaque,me=_.transmissive;if(S.setupLights(),k.isArrayCamera){let Se=k.cameras;if(me.length>0)for(let Ae=0,qe=Se.length;Ae<qe;Ae++){let Qe=Se[Ae];Qd(Me,me,E,Qe)}Pt&&He.render(E);for(let Ae=0,qe=Se.length;Ae<qe;Ae++){let Qe=Se[Ae];jd(_,E,Qe,Qe.viewport)}}else me.length>0&&Qd(Me,me,E,k),Pt&&He.render(E),jd(_,E,k)}H!==null&&B===0&&(Q.updateMultisampleRenderTarget(H),Q.updateRenderTargetMipmap(H)),Y&&T.end(C),E.isScene===!0&&E.onAfterRender(C,E,k),xe.resetDefaultState(),z=-1,W=null,M.pop(),M.length>0?(S=M[M.length-1],Q.setTextureUnits(S.state.textureUnits),ot===!0&&Ce.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,P!==null&&P.renderEnd()};function Eu(E,k,J,Y){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(je)){Y&&Jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(it);let Me=ne.update(E),me=E.material;me.visible&&_.push(E,Me,me,J,Jt.z,null,k)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(je))){let Me=ne.update(E),me=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Jt.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Jt.copy(Me.boundingSphere.center)),Jt.applyMatrix4(E.matrixWorld).applyMatrix4(it)),Array.isArray(me)){let Se=Me.groups;for(let Ae=0,qe=Se.length;Ae<qe;Ae++){let Qe=Se[Ae],we=me[Qe.materialIndex];we&&we.visible&&_.push(E,Me,we,J,Jt.z,Qe,k)}}else me.visible&&_.push(E,Me,me,J,Jt.z,null,k)}}let ge=E.children;for(let Me=0,me=ge.length;Me<me;Me++)Eu(ge[Me],k,J,Y)}function jd(E,k,J,Y){let{opaque:$,transmissive:ge,transparent:Me}=E;S.setupLightsView(J),ot===!0&&Ce.setGlobalState(C.clippingPlanes,J),Y&&w.viewport(q.copy(Y)),$.length>0&&Oa($,k,J),ge.length>0&&Oa(ge,k,J),Me.length>0&&Oa(Me,k,J),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Qd(E,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let we=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new rn(1,1,{generateMipmaps:!0,type:we?Qn:vn,minFilter:Jn,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let ge=S.state.transmissionRenderTarget[Y.id],Me=Y.viewport||q;ge.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(Be),De=C.getClearAlpha(),De<1&&C.setClearColor(16777215,.5),C.clear(),Pt&&He.render(J);let qe=C.toneMapping;C.toneMapping=Zn;let Qe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),ot===!0&&Ce.setGlobalState(C.clippingPlanes,Y),Oa(E,J,Y),Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge),mt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ut=0,Vt=k.length;ut<Vt;ut++){let Et=k[ut],{object:vt,geometry:tn,material:_e,group:cn}=Et;if(_e.side===_t&&vt.layers.test(Y.layers)){let st=_e.side;_e.side=Qt,_e.needsUpdate=!0,ep(vt,J,Y,tn,_e,cn),_e.side=st,_e.needsUpdate=!0,we=!0}}we===!0&&(Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Se,Ae),C.setClearColor(Be,De),Qe!==void 0&&(Y.viewport=Qe),C.toneMapping=qe}function Oa(E,k,J){let Y=k.isScene===!0?k.overrideMaterial:null;for(let $=0,ge=E.length;$<ge;$++){let Me=E[$],{object:me,geometry:Se,group:Ae}=Me,qe=Me.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),me.layers.test(J.layers)&&ep(me,k,J,Se,qe,Ae)}}function ep(E,k,J,Y,$,ge){P!==null&&$.isNodeMaterial&&P.setObject(E,$),E.onBeforeRender(C,k,J,Y,$,ge),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(C,k,J,Y,E,ge),$.transparent===!0&&$.side===_t&&$.forceSinglePass===!1?($.side=Qt,$.needsUpdate=!0,C.renderBufferDirect(J,k,Y,$,E,ge),$.side=mi,$.needsUpdate=!0,C.renderBufferDirect(J,k,Y,$,E,ge),$.side=_t):C.renderBufferDirect(J,k,Y,$,E,ge),E.onAfterRender(C,k,J,Y,$,ge)}function Na(E,k,J){k.isScene!==!0&&(k=mn);let Y=Z.get(E),$=S.state.lights,ge=S.state.shadowsArray,Me=$.state.version,me=ce.getParameters(E,$.state,ge,k,J,S.state.lightProbeGridArray),Se=ce.getProgramCacheKey(me),Ae=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;let qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=ae.get(E.envMap||Y.environment,qe),Y.envMapRotation=Y.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ri),Ae=new Map,Y.programs=Ae);let Qe=Ae.get(Se);if(Qe!==void 0){if(Y.currentProgram===Qe&&Y.lightsStateVersion===Me)return np(E,me),Qe}else me.uniforms=ce.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,J,me),E.onBeforeCompile(me,C),Qe=ce.acquireProgram(me,Se),Ae.set(Se,Qe),Y.uniforms=me.uniforms;let we=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=Ce.uniform),np(E,me),Y.needsLights=lb(E),Y.lightsStateVersion=Me,Y.needsLights&&(we.ambientLightColor.value=$.state.ambient,we.lightProbe.value=$.state.probe,we.sunLights.value=$.state.sun,we.sunLightShadows.value=$.state.sunShadow,we.directionalLights.value=$.state.directional,we.directionalLightShadows.value=$.state.directionalShadow,we.spotLights.value=$.state.spot,we.spotLightShadows.value=$.state.spotShadow,we.rectAreaLights.value=$.state.rectArea,we.ltc_1.value=$.state.rectAreaLTC1,we.ltc_2.value=$.state.rectAreaLTC2,we.pointLights.value=$.state.point,we.pointLightShadows.value=$.state.pointShadow,we.hemisphereLights.value=$.state.hemi,we.sunShadowMatrix.value=$.state.sunShadowMatrix,we.sunShadowCascade.value=$.state.sunShadowCascade,we.directionalShadowMatrix.value=$.state.directionalShadowMatrix,we.spotLightMatrix.value=$.state.spotLightMatrix,we.spotLightMap.value=$.state.spotLightMap,we.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=Qe,Y.uniformsList=null,Qe}function tp(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=Wr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function np(E,k){let J=Z.get(E);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function rb(E,k){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(k.matrixWorld);for(let J=0,Y=E.length;J<Y;J++){let $=E[J];if($.texture!==null&&$.boundingBox.containsPoint(b))return $}return null}function ob(E,k,J,Y,$){k.isScene!==!0&&(k=mn),Q.resetTextureUnits();let ge=k.fog,Me=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,me=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:$e.workingColorSpace,Se=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ae=ae.get(Y.envMap||Me,Se),qe=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),we=!!J.morphAttributes.position,ut=!!J.morphAttributes.normal,Vt=!!J.morphAttributes.color,Et=Zn;Y.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Et=C.toneMapping);let vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tn=vt!==void 0?vt.length:0,_e=Z.get(Y),cn=S.state.lights;if(ot===!0&&(wt===!0||E!==W)){let At=E===W&&Y.id===z;Ce.setState(Y,E,At)}let st=!1;Y.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==cn.state.version||_e.outputColorSpace!==me||$.isBatchedMesh&&_e.batching===!1||!$.isBatchedMesh&&_e.batching===!0||$.isBatchedMesh&&_e.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&_e.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&_e.instancing===!1||!$.isInstancedMesh&&_e.instancing===!0||$.isSkinnedMesh&&_e.skinning===!1||!$.isSkinnedMesh&&_e.skinning===!0||$.isInstancedMesh&&_e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&_e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&_e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&_e.instancingMorph===!1&&$.morphTexture!==null||_e.envMap!==Ae||Y.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ce.numPlanes||_e.numIntersection!==Ce.numIntersection)||_e.vertexAlphas!==qe||_e.vertexTangents!==Qe||_e.morphTargets!==we||_e.morphNormals!==ut||_e.morphColors!==Vt||_e.toneMapping!==Et||_e.morphTargetsCount!==tn||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,_e.__version=Y.version);let Fn=_e.currentProgram;st===!0&&(Fn=Na(Y,k,$),P&&Y.isNodeMaterial&&P.onUpdateProgram(Y,Fn,_e));let oi=!1,Yi=!1,nr=!1,bt=Fn.getUniforms(),Ft=_e.uniforms;if(w.useProgram(Fn.program)&&(oi=!0,Yi=!0,nr=!0),Y.id!==z&&(z=Y.id,Yi=!0),_e.needsLights){let At=rb(S.state.lightProbeGridArray,$);_e.lightProbeGrid!==At&&(_e.lightProbeGrid=At,Yi=!0)}if(oi||W!==E){w.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),bt.setValue(G,"projectionMatrix",E.projectionMatrix),bt.setValue(G,"viewMatrix",E.matrixWorldInverse);let Ki=bt.map.cameraPosition;Ki!==void 0&&Ki.setValue(G,Ct.setFromMatrixPosition(E.matrixWorld)),L.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(G,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,Yi=!0,nr=!0)}if(_e.needsLights&&(cn.state.sunShadowMap.length>0&&bt.setValue(G,"sunShadowMap",cn.state.sunShadowMap,Q),cn.state.directionalShadowMap.length>0&&bt.setValue(G,"directionalShadowMap",cn.state.directionalShadowMap,Q),cn.state.spotShadowMap.length>0&&bt.setValue(G,"spotShadowMap",cn.state.spotShadowMap,Q),cn.state.pointShadowMap.length>0&&bt.setValue(G,"pointShadowMap",cn.state.pointShadowMap,Q)),$.isSkinnedMesh){bt.setOptional(G,$,"bindMatrix"),bt.setOptional(G,$,"bindMatrixInverse");let At=$.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),bt.setValue(G,"boneTexture",At.boneTexture,Q))}$.isBatchedMesh&&(bt.setOptional(G,$,"batchingTexture"),bt.setValue(G,"batchingTexture",$._matricesTexture,Q),bt.setOptional(G,$,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",$._indirectTexture,Q),bt.setOptional(G,$,"batchingColorTexture"),$._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",$._colorsTexture,Q));let $i=J.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&V.update($,J,Fn),(Yi||_e.receiveShadow!==$.receiveShadow)&&(_e.receiveShadow=$.receiveShadow,bt.setValue(G,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ft.envMapIntensity.value=k.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=bS()),Yi){if(bt.setValue(G,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&ab(Ft,nr),ge&&Y.fog===!0&&Re.refreshFogUniforms(Ft,ge),Re.refreshMaterialUniforms(Ft,Y,ie,j,S.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){let At=_e.lightProbeGrid;Ft.probesSH.value=At.texture,Ft.probesMin.value.copy(At.boundingBox.min),Ft.probesMax.value.copy(At.boundingBox.max),Ft.probesResolution.value.copy(At.resolution)}Wr.upload(G,tp(_e),Ft,Q)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wr.upload(G,tp(_e),Ft,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(G,"center",$.center),bt.setValue(G,"modelViewMatrix",$.modelViewMatrix),bt.setValue(G,"normalMatrix",$.normalMatrix),bt.setValue(G,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let At=Y.uniformsGroups;for(let Ki=0,ir=At.length;Ki<ir;Ki++){let sp=At[Ki];re.update(sp,Fn),re.bind(sp,Fn)}}return Fn}function ab(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.sunLights.needsUpdate=k,E.sunLightShadows.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function lb(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(E,k,J){let Y=Z.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Z.get(E.texture).__webglTexture=k,Z.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let J=Z.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,J=0){H=E,N=k,B=J;let Y=null,$=!1,ge=!1;if(E){let me=Z.get(E);if(me.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(G.FRAMEBUFFER,me.__webglFramebuffer),q.copy(E.viewport),oe.copy(E.scissor),se=E.scissorTest,w.viewport(q),w.scissor(oe),w.setScissorTest(se),z=-1;return}else if(me.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(me.__hasExternalTextures)Q.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let qe=E.depthTexture;if(me.__boundDepthTexture!==qe){if(qe!==null&&Z.has(qe)&&(E.width!==qe.image.width||E.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Ae=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?Y=Ae[k][J]:Y=Ae[k],$=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?Y=Z.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?Y=Ae[J]:Y=Ae,q.copy(E.viewport),oe.copy(E.scissor),se=E.scissorTest}else q.copy(ve).multiplyScalar(ie).floor(),oe.copy(Ze).multiplyScalar(ie).floor(),se=Xt;if(J!==0&&(Y=F),w.bindFramebuffer(G.FRAMEBUFFER,Y)&&w.drawBuffers(E,Y),w.viewport(q),w.scissor(oe),w.setScissorTest(se),$){let me=Z.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,J)}else if(ge){let me=k;for(let Se=0;Se<E.textures.length;Se++){let Ae=Z.get(E.textures[Se]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,J,me)}}else if(E!==null&&J!==0){let me=Z.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,me.__webglTexture,J)}z=-1};function ip(E){let k=Z.get(E);return(k.__readFormat!==E.format||k.__readType!==E.type)&&(k.__readFormat=E.format,k.__readType=E.type,k.__formatReadable=L.textureFormatReadable(E.format),k.__typeReadable=L.textureTypeReadable(E.type)),k}this.readRenderTargetPixels=function(E,k,J,Y,$,ge,Me,me=0){if(!(E&&E.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se){w.bindFramebuffer(G.FRAMEBUFFER,Se);try{let Ae=E.textures[me],qe=Ae.format,Qe=Ae.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+me);let we=ip(Ae);if(we.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-Y&&J>=0&&J<=E.height-$&&G.readPixels(k,J,Y,$,fe.convert(qe),fe.convert(Qe),ge)}finally{let Ae=H!==null?Z.get(H).__webglFramebuffer:null;w.bindFramebuffer(G.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,k,J,Y,$,ge,Me,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se)if(k>=0&&k<=E.width-Y&&J>=0&&J<=E.height-$){w.bindFramebuffer(G.FRAMEBUFFER,Se);let Ae=E.textures[me],qe=Ae.format,Qe=Ae.type;E.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+me);let we=ip(Ae);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ut),G.bufferData(G.PIXEL_PACK_BUFFER,ge.byteLength,G.STREAM_READ),G.readPixels(k,J,Y,$,fe.convert(qe),fe.convert(Qe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Vt=H!==null?Z.get(H).__webglFramebuffer:null;w.bindFramebuffer(G.FRAMEBUFFER,Vt);let Et=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Pm(G,Et,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ut),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ge),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ut),G.deleteSync(Et),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,J=0){let Y=Math.pow(2,-J),$=Math.floor(E.image.width*Y),ge=Math.floor(E.image.height*Y),Me=k!==null?k.x:0,me=k!==null?k.y:0;Q.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,J,0,0,Me,me,$,ge),w.unbindTexture()},this.copyTextureToTexture=function(E,k,J=null,Y=null,$=0,ge=0){let Me,me,Se,Ae,qe,Qe,we,ut,Vt,Et=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(J!==null)Me=J.max.x-J.min.x,me=J.max.y-J.min.y,Se=J.isBox3?J.max.z-J.min.z:1,Ae=J.min.x,qe=J.min.y,Qe=J.isBox3?J.min.z:0;else{let Ft=Math.pow(2,-$);Me=Math.floor(Et.width*Ft),me=Math.floor(Et.height*Ft),E.isDataArrayTexture?Se=Et.depth:E.isData3DTexture?Se=Math.floor(Et.depth*Ft):Se=1,Ae=0,qe=0,Qe=0}Y!==null?(we=Y.x,ut=Y.y,Vt=Y.z):(we=0,ut=0,Vt=0);let vt=fe.convert(k.format),tn=fe.convert(k.type),_e;k.isData3DTexture?(Q.setTexture3D(k,0),_e=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Q.setTexture2DArray(k,0),_e=G.TEXTURE_2D_ARRAY):(Q.setTexture2D(k,0),_e=G.TEXTURE_2D),w.activeTexture(G.TEXTURE0),w.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),w.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),w.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);let cn=w.getParameter(G.UNPACK_ROW_LENGTH),st=w.getParameter(G.UNPACK_IMAGE_HEIGHT),Fn=w.getParameter(G.UNPACK_SKIP_PIXELS),oi=w.getParameter(G.UNPACK_SKIP_ROWS),Yi=w.getParameter(G.UNPACK_SKIP_IMAGES);w.pixelStorei(G.UNPACK_ROW_LENGTH,Et.width),w.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Et.height),w.pixelStorei(G.UNPACK_SKIP_PIXELS,Ae),w.pixelStorei(G.UNPACK_SKIP_ROWS,qe),w.pixelStorei(G.UNPACK_SKIP_IMAGES,Qe);let nr=E.isDataArrayTexture||E.isData3DTexture,bt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let Ft=Z.get(E),$i=Z.get(k),At=Z.get(Ft.__renderTarget),Ki=Z.get($i.__renderTarget);w.bindFramebuffer(G.READ_FRAMEBUFFER,At.__webglFramebuffer),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let ir=0;ir<Se;ir++)nr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Z.get(E).__webglTexture,$,Qe+ir),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Z.get(k).__webglTexture,ge,Vt+ir)),G.blitFramebuffer(Ae,qe,Me,me,we,ut,Me,me,G.DEPTH_BUFFER_BIT,G.NEAREST);w.bindFramebuffer(G.READ_FRAMEBUFFER,null),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if($!==0||E.isRenderTargetTexture||Z.has(E)){let Ft=Z.get(E),$i=Z.get(k);w.bindFramebuffer(G.READ_FRAMEBUFFER,R),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,O);for(let At=0;At<Se;At++)nr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.__webglTexture,$,Qe+At):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,$),bt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$i.__webglTexture,ge,Vt+At):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,$i.__webglTexture,ge),$!==0?G.blitFramebuffer(Ae,qe,Me,me,we,ut,Me,me,G.COLOR_BUFFER_BIT,G.NEAREST):bt?G.copyTexSubImage3D(_e,ge,we,ut,Vt+At,Ae,qe,Me,me):G.copyTexSubImage2D(_e,ge,we,ut,Ae,qe,Me,me);w.bindFramebuffer(G.READ_FRAMEBUFFER,null),w.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else bt?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(_e,ge,we,ut,Vt,Me,me,Se,vt,tn,Et.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(_e,ge,we,ut,Vt,Me,me,Se,vt,Et.data):G.texSubImage3D(_e,ge,we,ut,Vt,Me,me,Se,vt,tn,Et):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ge,we,ut,Me,me,vt,tn,Et.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ge,we,ut,Et.width,Et.height,vt,Et.data):G.texSubImage2D(G.TEXTURE_2D,ge,we,ut,Me,me,vt,tn,Et);w.pixelStorei(G.UNPACK_ROW_LENGTH,cn),w.pixelStorei(G.UNPACK_IMAGE_HEIGHT,st),w.pixelStorei(G.UNPACK_SKIP_PIXELS,Fn),w.pixelStorei(G.UNPACK_SKIP_ROWS,oi),w.pixelStorei(G.UNPACK_SKIP_IMAGES,Yi),ge===0&&k.generateMipmaps&&G.generateMipmap(_e),w.unbindTexture()},this.initRenderTarget=function(E){Z.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),w.unbindTexture()},this.resetState=function(){N=0,B=0,H=null,w.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};function g0(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(t[n]=s)}return t}function x0(i,e,t,n){for(let s=t.start*3;s<t.end*3;s++){let r=e[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}var yS=[],ua=new Map,_S=0,b0=(i,e)=>`pack:${i}:${e}`,vS=i=>i.startsWith("pack:");function Nc(i){yS=i,ua=new Map;for(let e of i)for(let t of e.items)ua.set(b0(e.id,t.id),t);_S+=1}var MS={};function Kt(i){if(!vS(i))return;let e=ua.get(i);if(e)return e;let[,t,...n]=i.split(":"),s=MS[t];return s?ua.get(b0(s,n.join(":"))):void 0}var y0=i=>Kt(i)?.parts.find(e=>e.screen);function Un(i,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Bc;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));let t=Kt(e.type);if(!t)return ha(e);switch(t.mount){case"surface":return T0(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return 0}}var _0=null,v0=new Set,M0=i=>{_0=i},S0=()=>_0,w0=i=>{v0.add(i)};function Uc(i){let e=ua.get(i)?.mesh;return e!==void 0&&v0.has(e)}var kc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function qs(i){return i==="hedge"||i==="fence"||i==="pergola"}function uf(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,u)=>s==="x"?c:s==="-x"?-c:s==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let f=r(c,u);o=Math.min(o,f),a=Math.max(a,f)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-o)/(a-o)));return n*l}function wS(i,e,t,n){return fa(i)+(e.offset??0)+kc[e.type]-uf(e,t,n)}function fa(i){return i.elevation>.3?0:-.2}function A0(i,e,t){let n=(i.outdoor??[]).filter(r=>!qs(r.type)&&r.type!=="pool"&&pt([e,t],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?wS(i,s,e,t):fa(i)}var TS={type:"none",pitch:35,overhang:.4},qE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...TS}};var E0=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Bc=1.75;function R0(i){return E0.has(i)||!!Kt(i)?.light}var AS=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ha(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function T0(i,e,t){let n=0;for(let s of i.furniture)!(AS.has(s.type)||Kt(s.type)?.surface)||!pt([e,t],Vc(s))||(n=Math.max(n,s.h));return n}var SS=new Set([...E0,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var ES=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],RS=["standard","bars","glass_wall"];function hs(i,e){return i.type==="door"?i.style&&ES.includes(i.style)?i.style:e?"front":"interior":i.style&&RS.includes(i.style)?i.style:"standard"}function C0(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let s=e==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let u=r-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function I0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Ys(i){let e=0;for(let t=0;t<i.length;t++){let[n,s]=i[t],[r,o]=i[(t+1)%i.length];e+=n*o-r*s}return e/2}function da(i){return Math.abs(Ys(i))}function zc(i){let e=Ys(i);if(Math.abs(e)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let t=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;t+=(r+a)*c,n+=(o+l)*c}return[t/(6*e),n/(6*e)]}function P0(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[s,r]=i[(e+1)%4];if(Math.abs(t-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function L0(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)e=Math.min(e,r),t=Math.min(t,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:e,z0:t,x1:n,z1:s}}function Vc(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*t-a*n,i.z+o*n+a*t])}function pt(i,e){let t=!1;for(let n=0,s=e.length-1;n<e.length;s=n++){let[r,o]=e[n],[a,l]=e[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(t=!t)}return t}var hf=Math.PI/180,$r=i=>Math.tan(Math.min(80,Math.max(0,i))*hf);function Gc(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Mn(i){let{x0:e,x1:t,z0:n,z1:s}=Gc(i);return i.axis==="x"?{u0:e,u1:t,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:t-e,at:(r,o)=>[i.flip?t-o:e+o,r]}}function _i(i,e,t){let{x0:n,x1:s,z0:r,z1:o}=Gc(i);return i.axis==="x"?[e,i.flip?o-t:t-r]:[t,i.flip?s-e:e-n]}var pa=Math.tan(30*hf);function ff(i,e,t,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=e+r*n,l=t+o*s,c=Math.min(i-o,Math.max(r,(l-a+pa*(i-o+r))/(2*pa))),u=a+(c-r)*pa;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=r?e+h*n:h<=c?a+(h-r)*pa:h<=i-o?l+(i-o-h)*pa:t+(i-h)*s}}function dn(i){let e=Mn(i).w,[t,n]=[i.eave_a,i.eave_b],[s,r]=[$r(i.pitch_a),$r(i.pitch_b)];switch(i.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*s,y:o=>t+o*s};case"mansard":{let o=ff(e,t,n,s,r);return{vr:o.vr,rh:o.rh,y:o.y}}default:{let o=s+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(s+r))):e/2;return{vr:o,rh:t+o*s,y:a=>a<=o?t+a*s:n+(e-a)*r}}}}var df=i=>dn(i).rh;var at=(i,e)=>[i[0]-e[0],i[1]-e[1]],vi=(i,e)=>[i[0]+e[0],i[1]+e[1]],ei=(i,e)=>[i[0]*e,i[1]*e],Sn=(i,e)=>i[0]*e[0]+i[1]*e[1],wn=(i,e)=>i[0]*e[1]-i[1]*e[0],Bn=i=>Math.hypot(i[0],i[1]),ti=i=>{let e=Bn(i)||1;return[i[0]/e,i[1]/e]},pf=i=>[-i[1],i[0]],mf=i=>[i[1],-i[0]];function F0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function CS(i,e){let t=i.map(n=>({...n}));for(let n of e){let s=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):t.push({...n})}return t}function IS(i,e,t){if(i.a===e.b)return!1;let n=ti(at(t[i.b],t[i.a])),s=ti(at(t[e.b],t[e.a]));return Math.abs(wn(n,s))>1e-6||Sn(n,s)<=0||i.free||e.free?!1:i.height===e.height&&i.exterior===e.exterior&&i.roomLeft===e.roomLeft&&i.roomRight===e.roomRight&&Math.abs(i.left-e.left)<=1e-9&&Math.abs(i.right-e.right)<=1e-9}function D0(i,e,t=new Set){let n=i.slice();for(;;){let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b])s.set(l,[...s.get(l)??[],a])});let r=null;for(let[o,a]of s){if(a.length!==2||t.has(o))continue;let l=n[a[0]].b===o?n[a[0]]:F0(n[a[0]]),c=n[a[1]].a===o?n[a[1]]:F0(n[a[1]]);if(!IS(l,c,e))continue;let u={...l,b:c.b,sources:CS(l.sources,c.sources)};r=[...n.filter((f,h)=>h!==a[0]&&h!==a[1]),u];break}if(!r)return n;n=r}}function O0(i,e){let t=new Map;i.forEach((s,r)=>{let o=ti(at(e[s.b],e[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:ei(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[s,r]of t){let o=e[s];r.sort((l,c)=>l.angle-c.angle);for(let l of r)n.set(l.key,{left:vi(o,ei(pf(l.d),l.left)),right:vi(o,ei(mf(l.d),l.right))});if(r.length<2)continue;let a=4*Math.max(...r.map(l=>Math.max(l.left,l.right)))+1e-9;r.forEach((l,c)=>{let u=r[(c+1)%r.length],f=vi(o,ei(pf(l.d),l.left)),h=vi(o,ei(mf(u.d),u.right)),d=wn(l.d,u.d);if(Math.abs(d)<1e-4)return;let m=vi(f,ei(l.d,wn(at(h,f),u.d)/d));Bn(at(m,o))>a||(n.get(l.key).left=m,n.get(u.key).right=m)})}return n}function N0(i,e){let t=i.filter((n,s)=>Bn(at(n,i[(s+1)%i.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((s,r)=>{let o=t[(r+t.length-1)%t.length],a=t[(r+1)%t.length],[l,c]=[at(s,o),at(a,s)];return Math.abs(wn(ti(l),ti(c)))<1e-7&&Sn(l,c)>0});if(n===-1)return t;t=t.filter((s,r)=>r!==n)}}function PS(i){let e=[];return{points:e,idOf(t){let n=e.findIndex(s=>Math.abs(s[0]-t[0])<=i&&Math.abs(s[1]-t[1])<=i);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function LS(i,e){let t=[];for(let n of i){let s=n.points;if(s.length<3||Math.abs(Ys(s))<1e-6)continue;let r=Ys(s)>0,o=s.map(a=>e.idOf(a));o.forEach((a,l)=>{let c=o[(l+1)%o.length];a!==c&&t.push(r?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function FS(i,e,t){let n=[];for(let s of i){let[r,o]=[e[s.u],e[s.v]],a=at(o,r),l=Bn(a),c=ei(a,1/l),u=e.map((h,d)=>({id:d,rel:at(h,r)})).filter(({id:h,rel:d})=>h!==s.u&&h!==s.v&&Sn(d,c)>t&&Sn(d,c)<l-t&&Math.abs(wn(c,d))<=t).map(({id:h,rel:d})=>({t:Sn(d,c),id:h})).sort((h,d)=>h.t-d.t),f=[{t:0,id:s.u},...u,{t:l,id:s.v}];for(let h=0;h+1<f.length;h++){let[d,m]=[f[h],f[h+1]];n.push({u:d.id,v:m.id,room:s.room,edge:s.edge,t0:s.forward?d.t:l-m.t,t1:s.forward?m.t:l-d.t})}}return n}var U0=i=>({room_id:i.room,edge:i.edge,t0:i.t0,t1:i.t1});function DS(i,e){let t=new Map(i.map(r=>[r.id,r])),n=new Map;for(let r of e){let o=`${r.room}:${r.edge}`;n.set(o,[...n.get(o)??[],r.t0].sort((a,l)=>a-l))}let s=r=>{let o=t.get(r.room)?.wall_heights?.[r.edge];return Array.isArray(o)?o[(n.get(`${r.room}:${r.edge}`)??[]).indexOf(r.t0)]??null:o};return{heightOf(r){let o=r.map(s).filter(a=>typeof a=="number"&&a>0);return o.length?Math.min(...o):void 0},thicknessOf(r){let o=r.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return o.length?Math.max(...o):void 0},hasNoWall:r=>r.some(o=>s(o)===0)}}function OS(i,e,t,n){let s=DS(e,i),r=new Map;for(let l of i){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;r.set(c,[...r.get(c)??[],l])}let o=[],a=[];for(let l of r.values()){let c=l[0],u=l.find(h=>h!==c&&h.u===c.v&&h.v===c.u&&h.room!==c.room);for(let h of l)h!==c&&h!==u&&h.room!==c.room&&n.push(`overlap:${c.room}:${h.room}`);let f=u?[c,u]:[c];if(s.hasNoWall(f)){u&&a.push([c.room,u.room]);continue}if(u){let h=s.thicknessOf(f)??t.interior;o.push({a:c.u,b:c.v,left:h/2,right:h/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:f.map(U0),height:s.heightOf(f)})}else o.push({a:c.u,b:c.v,left:0,right:s.thicknessOf(f)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[U0(c)],height:s.heightOf(f)})}return{drafts:o,open:a}}function NS(i,e){let t=n=>ti(at(e[n.b],e[n.a]));for(let n of i){if(n.exterior||n.free)continue;let s=new Set;for(let o of[n.a,n.b])for(let a of i)!a.exterior||a.free||a.a!==o&&a.b!==o||Math.abs(wn(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?s.add("left"):a.roomLeft===n.roomRight&&s.add("right"));if(s.size!==1)continue;let r=n.left+n.right;[n.left,n.right]=s.has("left")?[0,r]:[r,0]}}var US=(i,e)=>{let t=r=>Math.round(r*100),[n,s]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(s[0])}_${t(s[1])}`};function ma(i,e,t=[]){let n=e.eps??.005,s=[],r=PS(n),o=LS(i,r),a=t.filter(p=>Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1])>.05),l=a.map(p=>[r.idOf(p.a),r.idOf(p.b)]),c=new Set;for(let p of i){let y=p.points;y.length<3||(p.wall_splits??[]).forEach((v,b)=>{if(!v||b>=y.length)return;let _=y[b],S=at(y[(b+1)%y.length],_),A=Bn(S);for(let M of v)M>n&&M<A-n&&c.add(r.idOf(vi(_,ei(S,M/A))))})}let u=FS(o,r.points,n),{drafts:f,open:h}=OS(u,i,e,s);NS(f,r.points);let d=f;a.forEach((p,y)=>{let[v,b]=l[y];if(v===b)return;let _=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],S=i.find(M=>M.points.length>=3&&pt(_,M.points))?.id??null,A=(p.thickness??e.interior)/2;d.push({free:p.id,a:v,b,left:A,right:A,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof p.height=="number"&&p.height>0?p.height:void 0})});let m=D0(d,r.points,c),x=O0(m,r.points);return{walls:m.map((p,y)=>{let[v,b]=[r.points[p.a],r.points[p.b]],[_,S]=[x.get(`${y}:a`),x.get(`${y}:b`)],A=N0([_.right,S.left,b,S.right,_.left,v],1e-6);return{id:US(v,b),a:[v[0],v[1]],b:[b[0],b[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:A,...p.free?{free:p.free}:{},...p.height!==void 0?{height:p.height}:{}}}),warnings:[...new Set(s)],open:h}}function B0(i,e,t){let n=i.points[e];return vi(n,ei(ti(at(i.points[(e+1)%i.points.length],n)),t))}function k0(i,e,t){if(i.wall){let s=t.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=ti(at(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,vi(s.a,[-r[1],r[0]])]},edge:0}}let n=e.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}var z0=(i,e)=>Sn(at(e,i.a),ti(at(i.b,i.a)));function V0(i,e,t){if(!e.wall)return BS(i,t.room,t.edge,e.offset);let n=i.find(s=>s.free===e.wall);return n?{wall:n,s:z0(n,B0(t.room,0,e.offset))}:null}function BS(i,e,t,n){for(let s of i)if(s.sources.some(o=>o.room_id===e.id&&o.edge===t&&n>=o.t0-1e-6&&n<=o.t1+1e-6))return{wall:s,s:z0(s,B0(e,t,n))};return null}var G0=([i,e])=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function kS(i){return i.reduce((e,t,n)=>e+(t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1]),0)/2}function Hc(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(([s,r])=>[s,r]);let n=kS(i)>=0?1:-1;return i.map((s,r)=>{let o=i[(r+t-1)%t],a=i[(r+1)%t],[l,c]=G0([s[0]-o[0],s[1]-o[1]]),[u,f]=G0([a[0]-s[0],a[1]-s[1]]),h=[c*n,-l*n],d=[f*n,-u*n],m=[h[0]+d[0],h[1]+d[1]],x=Math.hypot(m[0],m[1]);if(x<1e-6)return[s[0]+h[0]*e,s[1]+h[1]*e];let g=(m[0]*h[0]+m[1]*h[1])/x,p=Math.min(4,1/Math.max(.25,g));return[s[0]+m[0]/x*e*p,s[1]+m[1]/x*e*p]})}function gf(i,e){if(i.points&&i.points.length>=3)return Hc(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,s=Math.min(i.z0,i.z1)-e,r=Math.max(i.z0,i.z1)+e;return[[t,s],[n,s],[n,r],[t,r]]}function fs(i,e){let t=Mn(i),n=dn(i),s=t.w,[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(p,y)=>[p,y,n.y(y)],u=c(a,-r),f=c(l,-r),h=c(l,s+o),d=c(a,s+o),[m,x]=[$r(i.pitch_a),$r(i.pitch_b)],g=p=>[p,n.vr,n.rh];switch(i.shape){case"pent":return{faces:[[u,f,h,d]],rim:[u,f,h,d],ridges:[[h,d]],gable:[[0,n.y(0)],[s,n.y(s)]]};case"hip":case"pyramid":{let p=(t.u1-t.u0)/2,y=i.shape==="pyramid"?p:Math.min(p,Math.min(n.vr,s-n.vr)||s/2),v=g(t.u0+y),b=g(t.u1-y);return i.shape==="pyramid"?{faces:[[u,f,v],[f,h,v],[h,d,v],[d,u,v]],rim:[u,f,h,d],ridges:[[u,v],[d,v],[f,v],[h,v]],gable:null}:{faces:[[u,f,b,v],[v,b,h,d],[d,u,v],[f,h,b]],rim:[u,f,h,d],ridges:[[v,b],[u,v],[d,v],[f,b],[h,b]],gable:null}}case"halfhip":{let p=Math.min(n.y(0),n.y(s)),y=p+(n.rh-p)*.55,v=m>1e-6?Math.min(n.vr,(y-i.eave_a)/m):n.vr,b=x>1e-6?Math.max(n.vr,s-(y-i.eave_b)/x):n.vr,_=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),S=g(t.u0+_),A=g(t.u1-_),M=[a,v,y],T=[a,b,y],C=[l,v,y],D=[l,b,y];return{faces:[[u,f,C,A,S,M],[S,A,D,h,d,T],[T,M,S],[C,D,A]],rim:[u,f,C,D,h,d,T,M],ridges:[[S,A],[M,S],[T,S],[C,A],[D,A]],gable:[[0,n.y(0)],[v,y],[b,y],[s,n.y(s)]]}}case"mansard":{let p=ff(s,i.eave_a,i.eave_b,m,x),y=[a,p.vla,p.yla],v=[l,p.vla,p.yla],b=[a,s-p.vlb,p.ylb],_=[l,s-p.vlb,p.ylb],S=[a,p.vr,p.rh],A=[l,p.vr,p.rh];return{faces:[[u,f,v,y],[y,v,A,S],[S,A,_,b],[b,_,h,d]],rim:[u,f,v,A,_,h,d,b,S,y],ridges:[[S,A],[y,v],[b,_]],gable:[[0,n.y(0)],[p.vla,p.yla],[p.vr,p.rh],[s-p.vlb,p.ylb],[s,n.y(s)]]}}default:{let p=g(a),y=g(l);return{faces:[[u,f,y,p],[p,y,h,d]],rim:[u,f,y,h,d,p],ridges:[[p,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}}}function $s(i,e,t){let n=null;for(let s of i.faces){if(!pt([e,t],s.map(([h,d])=>[h,d])))continue;let[r,o]=s,a=s.slice(2).find(h=>Math.abs((o[0]-r[0])*(h[1]-r[1])-(o[1]-r[1])*(h[0]-r[0]))>1e-9);if(!a)continue;let l=[o[0]-r[0],o[2]-r[2],o[1]-r[1]],c=[a[0]-r[0],a[2]-r[2],a[1]-r[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let f=r[2]-(u[0]*(e-r[0])+u[2]*(t-r[1]))/u[1];n=n===null?f:Math.min(n,f)}return n}function Kr(i,e,t,n){let s=o=>n?o[e]<=t+1e-9:o[e]>=t-1e-9,r=[];return i.forEach((o,a)=>{let l=i[(a+1)%i.length];if(s(o)&&r.push(o),s(o)!==s(l)){let c=(t-o[e])/(l[e]-o[e]);r.push([o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c])}}),r}function Wc(i,e){let t=Kr(Kr(i,0,e.u0,!1),0,e.u1,!0);return[Kr(i,0,e.u0,!0),Kr(i,0,e.u1,!1),Kr(t,1,e.v0,!0),Kr(t,1,e.v1,!1)].filter(s=>s.length>=3&&Math.abs(da(s.map(([r,o])=>[r,o])))>1e-6)}function ga(i,e,t){let n=Mn(e),s=i.floors.flatMap(u=>u.rooms.filter(f=>f.points.length>=3&&u.elevation+u.height>e.base+.05)),r=u=>u.some(f=>s.some(h=>pt(f,h.points))),o=.35,a=[.15,.5,.85].map(u=>n.u0+(n.u1-n.u0)*u),l=[.15,.5,.85].map(u=>n.w*u),c=u=>u?0:t;return{a:c(r(a.map(u=>n.at(u,-o)))),b:c(r(a.map(u=>n.at(u,n.w+o)))),u0:c(r(l.map(u=>n.at(n.u0-o,u)))),u1:c(r(l.map(u=>n.at(n.u1+o,u))))}}var Xc=i=>Math.abs((i.x1-i.x0)*(i.z1-i.z0)),H0=i=>i.shape==="flat"||i.shape==="parapet";function Zr(i,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return i.filter(r=>{if(r===e||r.dormer||r.open||H0(r)||Xc(r)<Xc(e)*1.5)return!1;let o=Gc(r);return t>=o.x0&&t<=o.x1&&n>=o.z0&&n<=o.z1}).reduce((r,o)=>r===null||Xc(o)<Xc(r)?o:r,null)}function W0(i,e){let t=fs(i,{u0:0,u1:0,a:0,b:0}),n=dn(i);return s=>{let[r,o]=e.at(s,e.w/2),[a,l]=_i(i,r,o);return $s(t,a,l)??n.y(l)}}function qc(i,e){if(H0(e))return e;let t=Mn(e),n=dn(e).rh,s=W0(i,t),r=s(t.u0)<=s(t.u1),[o,a]=r?[t.u0,t.u1]:[t.u1,t.u0],l=r?1:-1,c=a;for(let h=.5;h<Math.abs(a-o);h+=.05)if(s(o+l*h)>=n-.02){c=o+l*h;break}if(Math.abs(c-a)<.05)return e;let u={...e},f=a===t.u1;return e.axis==="x"?u[f?"x1":"x0"]=c:u[f?"z1":"z0"]=c,u}function xf(i,e){let t=qc(i,e),n=Mn(t),s=dn(t),r=W0(i,n),o=r(n.u0)<=r(n.u1),a=n.u1-n.u0,l=Math.max(1,Math.ceil(a/.15)),c=[];for(let u=0;u<l;u++){let[f,h]=[a*u/l,a*(u+1)/l],[d,m]=o?[n.u0+f,n.u0+h]:[n.u1-f,n.u1-h],x=r(m),g=1/0,p=-1/0;for(let b=0;b<=40;b++){let _=n.w*b/40;s.y(_)>x+.02&&(g=Math.min(g,_),p=Math.max(p,_))}if(!(p-g>.05))continue;let y=_i(i,...n.at(d,g)),v=_i(i,...n.at(m,p));c.push({u0:Math.min(y[0],v[0]),u1:Math.max(y[0],v[0]),v0:Math.min(y[1],v[1]),v1:Math.max(y[1],v[1])})}return c}var X0=.14,zS=i=>i.shape==="flat"||i.shape==="parapet";function bf(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function yf(i,e,t){let n=Math.max(0,i.settings.roof.overhang??0),s=1e-6,r=[];for(let o of i.settings.roof.sections??[]){if(o.open)continue;let[a,l,c,u]=[Math.min(o.x0,o.x1),Math.max(o.x0,o.x1),Math.min(o.z0,o.z1),Math.max(o.z0,o.z1)];if(e<a-s||e>l+s||t<c-s||t>u+s||o.points&&o.points.length>=3&&!pt([e,t],o.points))continue;let[f,h]=_i(o,e,t),d=Math.max(0,o.overhang??n),m=zS(o)?null:$s(fs(o,{u0:d,u1:d,a:d,b:d}),f,h);r.push((m??dn(o).y(h))-X0)}return r.length?Math.max(...r):null}function _f(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}function vf(i,e,t){let n=i.settings.roof.sections??[],s=n.filter(l=>t.includes(l.id)).map(l=>Zr(n,l)??l);if(s.length===0)return e.id;let r=Math.max(...s.map(df)),o=l=>l.rooms.some(c=>{if(c.points.length<3)return!1;let u=c.points.reduce((h,d)=>h+d[0],0)/c.points.length,f=c.points.reduce((h,d)=>h+d[1],0)/c.points.length;return s.some(h=>u>=Math.min(h.x0,h.x1)&&u<=Math.max(h.x0,h.x1)&&f>=Math.min(h.z0,h.z1)&&f<=Math.max(h.z0,h.z1))});return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}var Gi=1e-4;function q0(i){return i.reduce((e,t,n)=>e+wn(t,i[(n+1)%i.length]),0)/2}var Y0=i=>q0(i)>=0?[...i]:[...i].reverse();function $0(i,e,t,n){let s=at(e,i),r=at(n,t),o=wn(s,r);if(Math.abs(o)<1e-12)return null;let a=wn(at(t,i),r)/o,l=wn(at(t,i),s)/o;return a>Gi&&a<1-Gi&&l>-Gi&&l<1+Gi?a:null}function Mf(i,e,t){let n=at(t,e),s=Sn(n,n);if(s<1e-12)return null;let r=Sn(at(i,e),n)/s;return r<=Gi||r>=1-Gi?null:Math.abs(wn(at(i,e),n))/Math.sqrt(s)<Gi?r:null}var xa=(i,e,t=Gi)=>Bn(at(i,e))<t,ba=i=>i.map((e,t)=>[e,i[(t+1)%i.length]]);function VS(i,e){for(let[t,n]of ba(i))for(let[s,r]of ba(e))if($0(t,n,s,r)!==null||Mf(s,t,n)!==null||Mf(t,s,r)!==null||xa(t,s))return!0;return pt(i[0],e)||pt(e[0],i)}function GS(i){let e=i.map(Y0),t=[];e.forEach((r,o)=>{for(let[a,l]of ba(r)){let c=[0,1];e.forEach((u,f)=>{if(f!==o)for(let[h,d]of ba(u)){let m=$0(a,l,h,d)??Mf(h,a,l);m!==null&&c.push(m)}}),c.sort((u,f)=>u-f);for(let u=1;u<c.length;u++){if(c[u]-c[u-1]<Gi)continue;let f=[a[0]+(l[0]-a[0])*c[u-1],a[1]+(l[1]-a[1])*c[u-1]],h=[a[0]+(l[0]-a[0])*c[u],a[1]+(l[1]-a[1])*c[u]],d=Bn(at(h,f)),m=[(f[0]+h[0])/2+(h[1]-f[1])/d*.001,(f[1]+h[1])/2-(h[0]-f[0])/d*.001];e.some((x,g)=>g!==o&&pt(m,x))||t.some(([x,g])=>xa(x,f)&&xa(g,h))||t.push([f,h])}}});let n=[],s=new Set;return t.forEach(([r,o],a)=>{if(s.has(a))return;s.add(a);let l=[r],c=o;for(let u=0;u<t.length&&!xa(c,l[0],.001);u++){let f=t.findIndex(([h],d)=>!s.has(d)&&xa(h,c,.001));if(f<0)break;s.add(f),l.push(t[f][0]),c=t[f][1]}l.length>=3&&q0(l)>1e-6&&n.push(l)}),n}function Sf(i){let e=i.filter(r=>r.length>=3),t=e.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);e.forEach((r,o)=>{for(let a=o+1;a<e.length;a++)n(o)!==n(a)&&VS(r,e[a])&&(t[n(a)]=n(o))});let s=new Map;return e.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:GS(r))}function HS(i,e,t){let n=at(t,e),s=Sn(n,n),r=s?Math.max(0,Math.min(1,Sn(at(i,e),n)/s)):0;return Bn(at(i,[e[0]+n[0]*r,e[1]+n[1]*r]))}function K0(i,e,t=.03){return i.every(n=>pt(n,e)||ba(e).some(([s,r])=>HS(n,s,r)<=t))}function Z0(i,e){let t=Y0(i),n=(s,r)=>{let o=at(r,s),a=Bn(o)||1;return[-o[1]/a,o[0]/a]};return t.map((s,r)=>{let o=n(t[(r-1+t.length)%t.length],s),a=n(s,t[(r+1)%t.length]),l=1+Sn(o,a);return l<.1?s:[s[0]+(o[0]+a[0])/l*e,s[1]+(o[1]+a[1])/l*e]})}var It=Math.PI/180;function Ne(i,e){let t=new K(i).multiplyScalar(e);return t.setRGB(Math.min(1,t.r),Math.min(1,t.g),Math.min(1,t.b))}var Mi=Ne(3662079,.95),Yc=Ne(3662079,1),Si=Ne(5995775,.34),wf=Ne(5995775,.22),ya=[-.55,.83],_a=i=>.5+.5*Math.min(1,Math.max(0,i/1.6));function Tf(i,e){let t=Math.hypot(i,e);return .8+.28*((e/t*ya[0]-i/t*ya[1]+1)/2)}var Ke=-1,va=16,Hi=32,Af=48,$c=64,ds=(i,e)=>new ke(i,e),rt=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,s,r=s,o=s,a,l=Ke,c=[0,1]){this.p.push(...e,...t,...n);for(let u of[s,r,o])this.c.push(u.r,u.g,u.b);this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ue;return e.setAttribute("position",ds(this.p,3)),e.setAttribute("color",ds(this.c,3)),e.setAttribute("fold",ds(this.f,1)),this.uv&&e.setAttribute("uv",ds(this.uv,2)),this.tile&&e.setAttribute("tile",ds(this.tile,2)),e.computeBoundingSphere(),e}},Zt=class{p=[];c=[];f=[];seg(e,t,n=Mi,s=Ke){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(e,t,n,s,r){let[o,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,Ke);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Ke),this.seg(c,a,n,r)}geometry(){let e=new Ue;return e.setAttribute("position",ds(this.p,3)),e.setAttribute("color",ds(this.c,3)),e.setAttribute("fold",ds(this.f,1)),e}};var Ef=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function J0(i,e,t){let n=(t-i.p[1])/(e.p[1]-i.p[1]);return{p:Ef(i.p,e.p,n),c:Ef(i.c,e.c,n),uv:i.uv&&e.uv?Ef(i.uv,e.uv,n):null,tile:i.tile}}function WS(i,e){return{p:i.p.slice(e*3,e*3+3),c:i.c.slice(e*3,e*3+3),uv:i.uv?i.uv.slice(e*2,e*2+2):null,tile:i.tile?i.tile.slice(e*2,e*2+2):null}}function XS(i,e,t,n){t.forEach((s,r)=>{let o=e*3+r;s.p.forEach((a,l)=>i.p[o*3+l]=a),s.c.forEach((a,l)=>i.c[o*3+l]=a),i.uv&&s.uv&&s.uv.forEach((a,l)=>i.uv[o*2+l]=a),i.tile&&s.tile&&s.tile.forEach((a,l)=>i.tile[o*2+l]=a),i.f[o]=n})}function j0(i,e,t){for(let n of e)i.p.push(...n.p),i.c.push(...n.c),i.f.push(t),i.uv?.push(...n.uv??[.5,.5]),i.tile?.push(...n.tile??[0,1])}function Rf(i,e,t,n){let s=i.count;for(let r=e;r<s;r++){let o=[0,1,2].map(v=>WS(i,r*3+v)),a=o.map(v=>v.p[1]>t+1e-6),l=o.map(v=>v.p[1]<t-1e-6);if(!a.some(Boolean))continue;if(!l.some(Boolean)){for(let v=0;v<3;v++)i.f[r*3+v]=n;continue}let c=i.f[r*3],u=a.filter(Boolean).length,f=u===1?a.indexOf(!0):a.indexOf(!1),[h,d,m]=[o[f],o[(f+1)%3],o[(f+2)%3]],x=J0(h,d,t),g=J0(m,h,t),[p,y]=u===1?[n,c]:[c,n];XS(i,r,[h,x,g],p),j0(i,[x,d,m],y),j0(i,[x,m,g],y)}}function Cf(i,e,t,n){let s=i.p.length/6;for(let r=e;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u],h=i.c.slice(r*6,r*6+3);i.p.splice(r*6,6,...l,...f),i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var qS=i=>i.reduce((e,t,n)=>e+t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1],0),Q0=([i,e])=>new Le(i,e);function jr(i,e=[]){return ko.triangulateShape(i.map(Q0),e.map(t=>t.map(Q0)))}var Jr=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],eg=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],tg=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],ng=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function If(i,e,t,n,s,r,o){let a=new K(o);for(let h=0;h<4;h++){let[d,m]=[e[h],e[(h+1)%4]],[x,g]=[t[h],t[(h+1)%4]],[p,y]=[m[0]-d[0],m[1]-d[1]],v=Math.hypot(p,y);if(v<1e-6)continue;let b=(x[0]+g[0]-d[0]-m[0])/2*(-y/v)+(x[1]+g[1]-d[1]-m[1])/2*(p/v),_=Math.max(0,Math.min(1,b/Math.max(1e-6,Math.hypot(b,s-n)))),S=Tf(p,y),A=Ne(r,_a(n)*S).lerp(a,_),M=Ne(r,_a(s)*S).lerp(a,_);i.tri([d[0],n,d[1]],[x[0],s,x[1]],[g[0],s,g[1]],A,M,M),i.tri([d[0],n,d[1]],[g[0],s,g[1]],[m[0],n,m[1]],A,M,A)}let[l,c,u,f]=t;Math.hypot(u[0]-l[0],u[1]-l[1])>1e-4&&(i.tri([l[0],s,l[1]],[u[0],s,u[1]],[c[0],s,c[1]],a),i.tri([l[0],s,l[1]],[f[0],s,f[1]],[u[0],s,u[1]],a))}function Pf(i,e,t,n){let s=e.length;if(s<2)return;let r=e[0].length,o=new K(n),a=e.map(f=>[0,1,2].map(h=>f.reduce((d,m)=>d+m[h],0)/r)),l=e.map((f,h)=>f.map((d,m)=>{let x=Jr(e[Math.min(s-1,h+1)][m],e[Math.max(0,h-1)][m]),g=Jr(f[(m+1)%r],f[(m+r-1)%r]),p=ng(eg(x,g));return tg(p,Jr(d,a[h]))<0?p.map(y=>-y):p})),c=(f,h)=>{let d=(h[0]*ya[0]+h[2]*ya[1]+1)/2;return Ne(t,_a(f[1])*(.8+.28*d)).lerp(o,Math.max(0,h[1])*.9)},u=(f,h,d,m,x,g,p)=>{tg(eg(Jr(h,f),Jr(d,f)),m)>=0?i.tri(f,h,d,x,g,p):i.tri(f,d,h,x,p,g)};for(let f=0;f+1<s;f++)for(let h=0;h<r;h++){let d=(h+1)%r,m=[e[f][h],e[f][d],e[f+1][d],e[f+1][h]],x=[l[f][h],l[f][d],l[f+1][d],l[f+1][h]],[g,p,y,v]=m.map((_,S)=>c(_,x[S])),b=[0,1,2].map(_=>x.reduce((S,A)=>S+A[_],0));u(m[0],m[1],m[2],b,g,p,y),u(m[0],m[2],m[3],b,g,y,v)}for(let[f,h]of[[0,-1],[s-1,1]]){let d=e[f],m=Jr(e[f===0?1:s-2][0],d[0]),x=ng(m.map(p=>p*-h)),g=c(a[f],x);for(let p=0;p<r;p++)u(d[p],d[(p+1)%r],a[f],x,g,g,g)}}function Lf(i,e,t,n,s,r,o,a,l,c){let u=new K(l),f=Array.from({length:c},(d,m)=>{let x=m/c*Math.PI*2;return{y:r+Math.cos(x)*o,across:s+Math.sin(x)*o}}),h=(d,m)=>{let{y:x,across:g}=f[m%c],[p,y]=e(d,g);return[p,x,y]};for(let d=0;d<c;d++){let m=Ne(a,.62+.4*Math.max(0,Math.cos((d+.5)/c*Math.PI*2)));i.tri(h(t,d),h(n,d+1),h(n,d),m),i.tri(h(t,d),h(t,d+1),h(n,d+1),m)}for(let d of[t,n]){let[m,x]=e(d,s);for(let g=0;g<c;g++)i.tri([m,r,x],h(d,g),h(d,g+1),u)}}function Rt(i,e,t,n,s,r,o={}){let a=typeof n=="number"?()=>n:x=>Math.max(t+.002,n(x[0],x[1])),l=o.aoFrom??t,c=o.fold??Ke,u=x=>_a(x-l),f=(o.holes??[]).map(x=>qS(x)>0?[...x].reverse():x),h=f.length?[...e,...f.flat()]:e,d=o.topFace!==!1,m=!d&&!o.bottom?[]:jr(e,f);if(d){let x=new K(r);for(let[g,p,y]of m){let[v,b,_]=[h[g],h[p],h[y]];i.tri([v[0],a(v),v[1]],[_[0],a(_),_[1]],[b[0],a(b),b[1]],x,x,x,void 0,o.topFold??c)}}if(o.bottom){let x=Ne(s,.55);for(let[g,p,y]of m){let[v,b,_]=[h[g],h[p],h[y]];i.tri([v[0],t,v[1]],[b[0],t,b[1]],[_[0],t,_[1]],x,x,x,void 0,c)}}for(let x of[e,...f])x.forEach((g,p)=>{let y=x[(p+1)%x.length];if(Math.hypot(y[0]-g[0],y[1]-g[1])<1e-6||o.skipSide?.(g,y))return;let v=Tf(y[0]-g[0],y[1]-g[1]),[b,_]=[a(g),a(y)],S=Ne(s,u(t)*v),A=Ne(s,u(b)*v),M=Ne(s,u(_)*v);i.tri([g[0],t,g[1]],[g[0],b,g[1]],[y[0],_,y[1]],S,A,M,void 0,c),i.tri([g[0],t,g[1]],[y[0],_,y[1]],[y[0],t,y[1]],S,M,S,void 0,c)})}var I={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},ye=Ne(5995775,.3),lt=Ne(5995775,.17),tt=Ne(3662079,.45),Ma=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=lg(n)}rotated(e,t,n){let s=n*It,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*r-(c-t)*o,t+(l-e)*o+(c-t)*r))}box(e,t,n,s,r,o,a,l=a,c=null){if(t-e<1e-4||o-r<1e-4||s-n<1e-4)return;let u=[this.tf(e,r),this.tf(e,o),this.tf(t,o),this.tf(t,r)];Rt(this.buf,Ff(u),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,s,c)}loft(e,t,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Ff(l)&&(l.reverse(),c.reverse()),If(this.buf,l,c,n,s,r,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],s,s,a),this.line(l[u],c[u],n,s,a)}sweep(e,t,n=t,s=16,r=2.6,o=null){if(e.length<2)return;let a=e.map(l=>{let c=Math.max(.004,(l.y1-l.y0)/2),u=Math.max(.004,l.hw),f=(l.y0+l.y1)/2,h=[];for(let d=0;d<s;d++){let m=d/s*Math.PI*2,x=Math.cos(m),g=Math.sin(m),[p,y]=this.tf(l.x+u*Math.sign(x)*Math.abs(x)**(2/r),l.z);h.push([p,f+c*Math.sign(g)*Math.abs(g)**(2/r),y])}return h});if(Pf(this.buf,a,t,n),o){let l=Math.round(s/4);for(let c=0;c+1<a.length;c++){let u=a[c][l],f=a[c+1][l];this.lines.seg(u,f,o,Ke)}}}pad(e,t,n,s,r,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(e,t,n,s,r,o,a,l,u);this.loft([e+c,t-c,r+c,o-c],[e,t,r,o],n,n+c,a),s-n-2*c>.005&&this.box(e,t,n+c,s-c,r,o,a,a,u),this.loft([e,t,r,o],[e+c,t-c,r+c,o-c],s-c,s,a,l)}lyingCyl(e,t,n,s,r,o,a,l,c=l,u=12,f=null){let h=Math.min(a,r-s)/2;if(h<1e-4||o<1e-4)return;let d=(s+r)/2,m=e==="x"?t:n,x=e==="x"?n:t,g=(y,v)=>e==="x"?this.tf(y,v):this.tf(v,y),p=this.buf.p.length;if(Lf(this.buf,g,m-o/2,m+o/2,x,d,h,l,c,u),this.mirrored&&Uf(this.buf,p),f)for(let y of[m-o/2,m+o/2])for(let v=0;v<u;v++){let b=v/u*Math.PI*2,_=(v+1)/u*Math.PI*2;this.line(g(y,x+Math.sin(b)*h),g(y,x+Math.sin(_)*h),d+Math.cos(b)*h,d+Math.cos(_)*h,f)}}cyl(e,t,n,s,r,o,a=o,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(e+Math.cos(h)*n,t+Math.sin(h)*n))}if(Rt(this.buf,Ff(u),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],r,r,c)}seg(e,t,n,s,r,o,a=ye){this.line(this.tf(e,n),this.tf(s,o),t,r,a)}line(e,t,n,s,r){this.lines.seg([e[0],n,e[1]],[t[0],s,t[1]],r,Ke)}outline(e,t,n,s){for(let r=0;r<4;r++){let o=e[r],a=e[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,t,n,s)}}};function lg(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Ff(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e>=0?i:[...i].reverse()}function Ks(i,e,t,n,s,r,o=I.metal,a=!1){let l=e/2-r-s,c=t/2-r-s;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,d=f*c;a?i.loft([h-s*.3,h+s*.3,d-s*.3,d+s*.3],[h-s/2,h+s/2,d-s/2,d+s/2],0,n,o):i.box(h-s/2,h+s/2,0,n,d-s/2,d+s/2,o)}}function Sa(i,e,t,n,s,r,o,a=null,l=!1){let c=(t-e)/o;for(let u=1;u<o;u++){let f=e+c*u;i.seg(f,n,r,f,s,r,lt)}for(let u=0;u<o;u++){let f=e+c*(u+.5),h=a??s-.08;if(l)i.seg(f-Math.min(.1,c/4),h,r+.012,f+Math.min(.1,c/4),h,r+.012,tt);else{let d=o>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(d,h-.08,r+.012,d,h+.08,r+.012,tt)}}}function ig(i,e,t,n,s){let r=-e/2,o=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,f=Math.min(.24,t*.28);Ks(i,e,t,.07,.05,.05,I.wood,!0),i.pad(r,o,.07,u-.08,a+.02,l,I.fabric,I.fabricTop,.04,ye),i.loft([r,o,a,a+f],[r+.01,o-.01,a,a+f*.5],u-.08,n,I.fabric,I.fabricTop,ye),i.pad(r,r+c,u-.08,n*.72,a+.02,l-.02,I.fabric,I.fabricTop,.04,ye),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,I.fabric,I.fabricTop,.04,ye);let d=(o-c-(r+c))/s;for(let m=0;m<s;m++){let x=r+c+d*m+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+f+.02,l-.06,I.cushion,I.cushion,.04),i.loft([x+.01,g-.01,a+f*.55,a+f+.14],[x+.03,g-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,I.cushion)}}function YS(i,e,t,n){let s=-t/2,r=t/2,o=-e/2,a=e/2,l=Math.min(.32,n*.36);Ks(i,e,t,.08,.06,.03,I.wood,!0),i.box(o,a,.08,l,s+.06,r,I.wood,I.woodTop,ye),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,I.white,I.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,I.wood,I.woodTop,ye),i.box(o,a,n-.05,n,s,s+.09,I.wood,I.woodTop,lt);let c=l+.2,u=s+(t-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,r-.01,I.cushion,I.fabricTop,.025,lt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,I.cushion,I.fabricTop,8);let f=e>1.2?2:1,h=(e-.2)/f;for(let d=0;d<f;d++){let m=o+.1+h*d,x=s+.12,g=Math.min(.42,t*.2),p=.1;i.loft([m+.03+p,m+h-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+h-.03,x,x+g],c,c+.06,I.whiteTop),i.loft([m+.03,m+h-.03,x,x+g],[m+.03+p,m+h-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,I.whiteTop,I.whiteTop,lt)}}function $S(i,e,t,n){let s=Math.min(.46,n*.52);Ks(i,e,t,s-.04,.035,.02,I.wood,!0),i.box(-e/2,e/2,s-.04,s,-t/2,t/2,I.wood,I.woodTop,ye),i.pad(-e/2+.02,e/2-.02,s,s+.04,-t/2+.05,t/2-.03,I.cushion,I.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],s,n,I.wood,I.woodTop,ye)}function KS(i,e,t,n){Ks(i,e,t,n-.04,.06,.05,I.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.wood,I.woodTop,tt),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,I.body)}function ZS(i,e,t,n){let s=-e/2,r=e/2;i.box(s,r,n-.035,n,-t/2,t/2,I.wood,I.woodTop,ye),i.box(s,s+.03,0,n-.035,-t/2+.03,t/2-.03,I.metal);let o=Math.min(.42,e*.32);i.box(r-o,r,0,n-.035,-t/2+.03,t/2-.02,I.body,I.bodyTop,ye);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,lt);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,tt);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,I.dark,I.dark,tt),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,I.metal)}function ps(i,e,t,n,s,r=null,o=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,I.body,I.bodyTop,ye),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,I.dark),Sa(i,-e/2,e/2,.08,n,t/2-.02,s,r,o)}function JS(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,I.wood,I.woodTop,ye),i.box(e/2-.025,e/2,0,n,-t/2,t/2,I.wood,I.woodTop,ye),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,I.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,I.wood,I.woodTop,lt),o<r){let l=-e/2+.025+.04,c=o*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,f=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-t/2+.04,t/2-.05,c%3?I.fabric:I.cushion,I.fabricTop),l+=u+.006,c++}}}}function jS(i,e,t,n){let s=Math.max(1,Math.round(e/.6));ps(i,e,t-.02,n-.04,s,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,ye)}function QS(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,I.white,I.whiteTop,ye);let s=n*.62;i.seg(-e/2,s,t/2,e/2,s,t/2,lt);let r=e/2-.06;i.seg(r,s+.08,t/2+.015,r,s+.4,t/2+.015,tt),i.seg(r,s-.4,t/2+.015,r,s-.08,t/2+.015,tt)}function ew(i,e,t,n){let s=t/2-cg;i.box(-e/2,e/2,.02,n,-t/2,s,I.body,I.bodyTop,ye),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,s-.05,I.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-e/2+.03,r,s+.001,-.03,r,s+.001,lt),i.seg(.03,r,s+.001,e/2-.03,r,s+.001,lt))}var cg=.06;function ug(i,e,t,n,s){let r=i.p.length;tw(i,e,t,n,s),e.mirror&&Uf(i,r)}function tw(i,e,t,n,s){let r=e.rotation*It,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(b,_)=>[e.x+l*b*o-_*a,e.z+l*b*a+_*o],u=t+.05,f=t+e.h-.02,h=new K(.75,.1,.14),d=new K(I.dark),m=new K(I.accent),x=e.w/2-.006,g=(b,_,S)=>{let A=S/p,M=new K(2043212).lerp(h,A),T=new K(I.body).lerp(h,A*.8),C=Math.cos(S),D=Math.sin(S),P=(O,N)=>c(b+_*(O*C-N*D),e.d/2+O*D+N*C),F=(O,N,B,H)=>{let[z,W,q,oe]=O;i.tri([z[0],N,z[1]],[W[0],N,W[1]],[q[0],B,q[1]],H),i.tri([z[0],N,z[1]],[q[0],B,q[1]],[oe[0],B,oe[1]],H)},R=(O,N,B,H,z,W,q,oe=q)=>{let se=[P(O,W),P(N,W),P(N,z),P(O,z)];F([se[0],se[1],se[1],se[0]],B,H,oe),F([se[3],se[2],se[2],se[3]],B,H,q),F([se[0],se[3],se[3],se[0]],B,H,q),F([se[1],se[2],se[2],se[1]],B,H,q),F([se[0],se[1],se[2],se[3]],H,H,q),F([se[3],se[2],se[1],se[0]],B,B,q)};return R(0,x,u,f,-cg,0,T,M),R(x-.05,x-.03,t+e.h*.45,t+e.h*.75,.005,.025,m),R},p=1.83;g(-e.w/2,1,n*p)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,d),g(e.w/2,-1,s*p)(.06,x-.06,t+e.h*.52,t+e.h*.86,.001,.005,d)}function nw(i,e,t,n){ps(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.dark,I.dark,ye);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*e/.6,l=r*t/.62;i.cyl(a,l,o,n,n+.004,I.dark,1451583,12,tt)}}function iw(i,e,t,n){ps(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let s=Math.min(.5,e-.2);i.box(-e/2,-s/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,ye),i.box(s/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,ye),i.box(-s/2,s/2,n-.04,n,-t/2,-t/2+.1,I.whiteTop,I.whiteTop),i.box(-s/2,s/2,n-.04,n,t/2-.08,t/2,I.whiteTop,I.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-t/2+.1,t/2-.08,I.metal,I.metal,tt),i.cyl(0,-t/2+.05,.02,n,n+.28,I.metal,I.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,I.metal)}function sw(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,I.white,I.whiteTop,ye),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,I.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,I.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,I.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,I.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,I.glass,I.glass,tt),i.cyl(-e/2+.04,0,.02,n,n+.12,I.metal,I.metal,8)}function rw(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,I.whiteTop,I.whiteTop,ye),i.cyl(0,0,.04,.05,.052,I.metal,I.metal,8);for(let[s,r,o,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(s,.05,r,o,.05,a,tt),i.seg(s,n,r,o,n,a,tt),i.seg(o,.05,a,o,n,a,tt);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,I.metal,I.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,I.metal,I.metal,12,tt)}function ow(i,e,t,n){let s=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+s,I.white,I.whiteTop,ye),i.box(-e*.3,e*.3,0,.36,-t/2+s-.02,t/2-.12,I.white,I.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,I.white,I.whiteTop,12,ye),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+s,-t/2+s+.05,I.whiteTop)}function aw(i,e,t,n){ps(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,I.white,I.whiteTop,ye),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,I.glass,I.glass,tt),i.cyl(0,-t/2+.06,.018,n,n+.2,I.metal,I.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,I.glass,I.glass,tt)}function lw(i,e,t,n){ps(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let s=Math.min(e*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,I.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,I.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-t/2+.12,-t/2+.16,I.dark,I.dark,tt)}function cw(i,e,t,n){let s=Math.min(e,t)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,I.pot,I.pot,10,ye),i.cyl(0,0,s*.08,r,n*.55,I.wood,I.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),u=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-r)*.16,I.plant,I.plantTop,8,a===o-1?lt:null)}}function uw(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,I.fabric,I.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[s,r,o,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(s,.014,r,o,.014,a,ye)}function hw(i,e,t,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=t/s;for(let u=0;u<s;u++){let f=t/2-o*u,h=f-o,d=r*(u+1);i.box(-e/2,e/2,0,d,h,f,I.wood,I.woodTop),i.seg(-e/2,d,f,e/2,d,f,ye)}i.seg(-e/2,0,t/2,-e/2,r,t/2,ye);for(let u of[-e/2,e/2])i.seg(u,r,t/2,u,n,-t/2+o,lt);let a=.9,l=e/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,t/2-o/2,l,r*c+a,t/2-o*(c-.5),tt);for(let u=0;u<c;u+=3){let f=t/2-o*(u+.5),h=r*(u+1);i.seg(l,h,f,l,h+a,f,lt)}}function fw(i,e,t,n){Ks(i,e,t,.12,.03,.04,I.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,I.wood,I.woodTop,ye),Sa(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function dw(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,I.wood,I.woodTop,ye),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,I.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=t/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-e/2,a,r,e/2,a,r,lt)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,tt)}}function pw(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,I.wood,I.woodTop,ye),Sa(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,I.body,I.bodyTop,ye),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.wood,I.woodTop,ye);let s=Math.max(2,Math.round(e/.25));for(let r=0;r<s;r++){let o=-e/2+e/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,I.metal,I.metal)}}function sg(i,e,t,n,s){let o=Math.min(.5,s?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+o,I.wood,I.woodTop,ye),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,I.wood,I.woodTop,ye),i.box(-e/2+(s?o:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+o,I.cushion,I.cushion,lt),s&&(i.box(-e/2,-e/2+o,0,.45-.06,-t/2+o,t/2,I.wood,I.woodTop,ye),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,I.wood,I.woodTop,ye),i.box(-e/2+a,-e/2+o,.45-.06,.45+.02,-t/2+a,t/2-.02,I.cushion,I.cushion,lt))}function mw(i,e,t,n){let s=Math.min(e,t)/2;i.cyl(0,0,s*.8,0,.02,I.metal,I.metal,12),i.cyl(0,0,.025,.02,n-.05,I.metal,I.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,I.metal,I.metal,12,lt),i.cyl(0,0,s,n-.05,n,I.cushion,I.fabricTop,14,ye)}function gw(i,e,t,n){let s=Math.min(e,t)/2;i.box(-s,s,.04,.08,-.03,.03,I.metal),i.box(-.03,.03,.04,.08,-s,s,I.metal),i.cyl(0,0,.06,.02,.1,I.dark,I.dark,8),i.cyl(0,0,.025,.1,.44,I.metal,I.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,I.fabric,I.cushion,ye),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,I.fabric,I.fabricTop,ye),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,I.metal)}function xw(i,e,t,n){Ks(i,e,t,.08,.04,.05,I.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,I.fabric,I.cushion,ye)}function bw(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,I.body,I.bodyTop,ye),Sa(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function yw(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,I.body,I.bodyTop,ye),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,I.dark);let s=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,s,s+.01,I.dark,I.dark,tt),i.seg(-e/2+.08,1.4,s+.02,e/2-.08,1.4,s+.02,tt);for(let r of[.85,1.45])i.seg(-e/2,r,s,e/2,r,s,lt);i.seg(e/2-.06,.5,s+.012,e/2-.06,.7,s+.012,tt),i.seg(e/2-.06,1.6,s+.012,e/2-.06,1.8,s+.012,tt)}function _w(i,e,t,n){let s=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+s,I.body,I.bodyTop,ye),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+s-.04,I.dark),Sa(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+s,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,ye)}function vw(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,I.body,I.bodyTop,ye),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,I.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,tt),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,I.whiteTop,I.whiteTop,ye)}function rg(i,e,t,n,s){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,I.white,I.whiteTop,ye);let r=t/2-.012;i.seg(-e/2,n-.14,r,e/2,n-.14,r,lt),i.seg(e/2-.16,n-.07,r,e/2-.08,n-.07,r,tt);let o=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,f=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,r,Math.cos(f)*a,o+Math.sin(f)*a,r,tt),s||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,r,lt)}}function Mw(i,e,t,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(e/2)-(o>0?.05:0),o*(e/2)+(o<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),I.wood,I.woodTop);for(let o of[.25,n-.55])i.box(-e/2,e/2,o,o+.08,-t/2,t/2,I.wood,I.woodTop,ye),i.box(-e/2+.04,e/2-.04,o+.08,o+.24,-t/2+.05,t/2-.05,I.white,I.whiteTop,lt),i.box(-e/2+.05,e/2-.05,o+.24,o+.33,-t/2+.08,-t/2+.4,I.whiteTop,I.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,I.wood,I.woodTop);let r=e/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,t/2+.02,o,n-.15,t/2+.02,ye);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,t/2+.02,r+.18,o,t/2+.02,lt)}function Sw(i,e,t,n){let s=Math.min(e,t)/2;i.cyl(0,0,s*.4,0,.03,I.metal,I.metal,12),i.cyl(0,0,.05,.03,n-.04,I.wood,I.wood,8),i.cyl(0,0,s,n-.04,n,I.wood,I.woodTop,20,ye)}function ww(i,e,t,n){Ks(i,e,t,n-.03,.04,.03,I.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,I.wood,I.woodTop,ye),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,I.body,I.bodyTop,lt)}function Tw(i,e,t,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-t/2,-t/2+.03,I.metal),i.box(-e/2,e/2,s,s+n,-t/2+.03,t/2,I.dark,I.dark,tt)}function Aw(i,e,t,n){let s=Of;i.box(-e/2+.05,-e/2+.08,0,s,-t/2,-t/2+.03,I.metal),i.box(e/2-.08,e/2-.05,0,s,-t/2,-t/2+.03,I.metal),i.box(-e/2,e/2,s,s+n,-t/2+.02,t/2,I.white,I.whiteTop,ye);let r=Math.max(3,Math.round(e/.1));for(let o=1;o<r;o++){let a=-e/2+e/r*o;i.seg(a,s+.03,t/2+.002,a,s+n-.03,t/2+.002,lt)}}function og(i,e,t,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,s,e+Math.cos(l)*n,t+Math.sin(l)*n,s,tt)}}function Ew(i,e,t,n,s){let o=t/2;if(s==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,I.dark,I.body,ye),i.seg(-e*.25,1.1+n*.15,o+.004,-e*.25,1.1+n*.85,o+.004,tt),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,o,o+.005,I.dark);return}if(s==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,I.white,I.whiteTop,ye),og(i,0,1.1+n*.66,Math.min(e,n)*.22,o+.004),i.seg(-e*.08,1.1+n*.66,o+.005,e*.08,1.1+n*.66,o+.005,tt);for(let a of[-1,1])og(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,I.white,I.whiteTop,ye),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,I.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,tt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,lt)}function Rw(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,I.dark,I.body,ye),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,I.dark,I.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,tt),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,lt)}function Cw(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,I.dark,I.body,ye);let r=Math.min(e,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,t/2+.003,Math.cos(u)*r,o+Math.sin(u)*r,t/2+.003,tt)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,I.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,I.dark,I.body)}function Iw(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,I.white,I.whiteTop,ye),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,lt),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,lt),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,I.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,I.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,tt)}function Pw(i,e,t,n,s){if(s==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,I.white,I.whiteTop,ye),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,tt),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,lt);return}if(s==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,I.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,I.dark,I.body,ye),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,tt),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,I.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,I.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-e/2,e/2,.06+a*o+.004,.06+(a+1)*o,-t/2,t/2,I.white,I.whiteTop,ye);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,tt)}}var Of=.12;function Nf(i,e){let t=Lw(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function Lw(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=y0(i.type);if(r){let l=e?Un(e,i):0,c=(r.x-r.w/2)*t,u=(r.x+r.w/2)*t,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+r.y*s+f,y1:l+(r.y+r.h)*s-f,z:(r.z+r.d/2)*n}}let o=e&&i.type!=="fridge_smart"?Un(e,i)-ha(i):0,a=Fw(i,t,n,s,e);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Fw(i,e,t,n,s){if(i.type==="tv_board"){let r=Math.min(e*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-t/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:r+.02,y1:r+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let r=s?Un(s,i):0;return{x0:.06,x1:e/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Of+.02,y1:Of+n-.02,z:t/2+.004};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function Dw(i,e,t,n,s){let r=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),o=new K(1-s,1-s,1-s),a=new K(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-r,-n/2-r),e(t/2+r,-n/2-r),e(t/2+r,n/2+r),e(-t/2-r,n/2+r)],f=d=>[d[0],l,d[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),o),i.tri(f(c[0]),f(c[2]),f(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(f(c[d]),f(u[d]),f(u[m]),o,a,a),i.tri(f(c[d]),f(u[m]),f(c[m]),o,a,o)}lg(e)&&Uf(i,h)}function Kc(i,e,t,n,s=0){Ow(i,e,t,n,s)}function Uf(i,e){let t=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let s=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,s*3,1),t(i.uv,s*6,2),t(i.tile,s*6,2)}}function Ow(i,e,t,n,s){let r=Kt(n.type)?0:s-ha(n);if(Kt(n.type)||Math.abs(r)<.001)return ag(i,e,t,n,s);let o=i.p.length,a=e.p.length;ag(i,e,s<.05?t:new rt,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=r}function ag(i,e,t,n,s){let r=n.rotation*It,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new Ma(i,e,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":ig(u,f,h,d,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":ig(u,f,h,d,1);break;case"bed":YS(u,f,h,d);break;case"chair":$S(u,f,h,d);break;case"table":KS(u,f,h,d);break;case"desk":ZS(u,f,h,d);break;case"nightstand":ps(u,f,h,d,1,d*.72,!0),u.seg(-f/2,d*.5,h/2-.02,f/2,d*.5,h/2-.02,lt);break;case"wardrobe":ps(u,f,h,d,Math.max(2,Math.round(f/.5)),d*.5);break;case"shelf":JS(u,f,h,d);break;case"kitchen":jS(u,f,h,d);break;case"fridge":QS(u,f,h,d);break;case"fridge_smart":ew(u,f,h,d);break;case"stove":nw(u,f,h,d);break;case"sink":iw(u,f,h,d);break;case"bathtub":sw(u,f,h,d);break;case"shower":rw(u,f,h,d);break;case"wc":ow(u,f,h,d);break;case"washbasin":aw(u,f,h,d);break;case"tv_board":lw(u,f,h,d);break;case"plant":cw(u,f,h,d);break;case"rug":uw(u,f,h);return;case"stairs":hw(u,f,h,d);break;case"stairwell":return;case"sideboard":fw(u,f,h,d);break;case"dresser":dw(u,f,h,d);break;case"tall_cabinet":ps(u,f,h,d,1,d*.5);break;case"coat_rack":pw(u,f,h,d);break;case"bench":sg(u,f,h,d,!1);break;case"corner_bench":sg(u,f,h,d,!0);break;case"bar_stool":mw(u,f,h,d);break;case"office_chair":gw(u,f,h,d);break;case"stool":xw(u,f,h,d);break;case"kitchen_wall":bw(u,f,h,d);return;case"kitchen_tall":yw(u,f,h,d);break;case"island":_w(u,f,h,d);break;case"worktop":u.box(-f/2,f/2,Math.max(0,d-.04),d,-h/2,h/2,I.whiteTop,I.whiteTop,ye);return;case"dishwasher":vw(u,f,h,d);break;case"washer":rg(u,f,h,d,!1);break;case"dryer":rg(u,f,h,d,!0);break;case"bunk_bed":Mw(u,f,h,d);break;case"table_round":Sw(u,f,h,d);break;case"coffee_table":ww(u,f,h,d);break;case"tv_wall":Tw(u,f,h,d);return;case"parking":{let x=[[-f/2,-h/2],[f/2,-h/2],[f/2,h/2],[-f/2,h/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],lt);u.seg(-f*.15,.012,h/2-.45,0,.012,h/2-.2,ye),u.seg(0,.012,h/2-.2,f*.15,.012,h/2-.45,ye);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,d,-h/2,-h/2+h*.3,I.white,I.whiteTop,ye),u.box(-f*.2,f*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,I.accent);return;case"radiator":Aw(u,f,h,d);return;case"inverter":Ew(u,f,h,d,n.variant??null);return;case"grid_point":Rw(u,f,h,d);break;case"wallbox":Cw(u,f,h,d);return;case"meter":Iw(u,f,h,d);return;case"home_battery":if(Pw(u,f,h,d,n.variant??null),n.variant==="wall")return;break;default:{let m=Kt(n.type);if(m){if(hg(u,m,f,h,d,s,null,null,n.variant??null),s>.05)return}else u.box(-f/2,f/2,0,d,-h/2,h/2,I.body,I.bodyTop,ye)}}Dw(t,c,f,h,n.type==="plant"?.35:.5)}function Df(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=I;return(e?t[`${i}Top`]:void 0)??t[i]??null}function hg(i,e,t,n,s,r,o,a=null,l=null){let c=e.colors?.length?(e.colors.find(f=>f.id===l)??e.colors[0]).hex:null,u=!!a;for(let f of e.parts){if(a&&!a(f))continue;let h=u?{...f,glow:!0,w:f.w+.006/t,d:f.d+.006/n,y:Math.max(0,f.y-.002/s),h:f.h+.004/s}:f,d=h.glow&&o!==null,m=h.paint&&c?c:h.color,x=d?o:Df(m,!1)??I.body,g=d?o:Df(h.paint&&c?void 0:h.top,!1)??Df(m,!0)??Ne(x,1.25).getHex(),p=r+h.y*s,y=r+Math.min(s,(h.y+h.h)*s),v=h.edges==="glow"?Mi:h.edges==="faint"?lt:h.edges?ye:null,b=h.rot?i.rotated(h.x*t,h.z*n,h.rot):i;if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))b.lyingCyl(h.axis,h.x*t,h.z*n,p,y,h.axis==="x"?h.w*t:h.d*n,h.axis==="x"?h.d*n:h.w*t,x,g,14,v);else if(h.shape==="cyl")b.cyl(h.x*t,h.z*n,Math.min(h.w*t,h.d*n)/2,p,y,x,g,14,v);else if(h.shape==="loft"){let _=h.tx??h.x,S=h.tz??h.z,A=h.tw??h.w,M=h.td??h.d;b.loft([(h.x-h.w/2)*t,(h.x+h.w/2)*t,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(_-A/2)*t,(_+A/2)*t,(S-M/2)*n,(S+M/2)*n],p,y,x,g,v)}else if(h.shape==="sweep"){let _=(h.stations??[]).map(([S,A,M,T])=>({x:h.x*t,z:S*n,y0:r+A*s,y1:r+M*s,hw:T*t/2}));b.sweep(_,x,g,h.n??16,h.exp??2.6,v)}else b.box((h.x-h.w/2)*t,(h.x+h.w/2)*t,p,y,(h.z-h.d/2)*n,(h.z+h.d/2)*n,x,g,v)}}function fg(i,e,t,n,s,r){let o=r*It,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[t+m*a-x*l,s+m*l+x*a],u=new Ma(i,new Zt,c),f=1713728,h=2373216,d=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,f),u.cyl(0,0,.012,n-.075,n-.06,I.accent,I.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,I.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Zc(i,e,t,n,s){let r=t.rotation*It,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(u,f)=>[t.x+l*u*o-f*a,t.z+l*u*a+f*o];hg(new Ma(i,new Zt,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,s)}var wa=i=>Ys(i)>=0?i:[...i].reverse();function Bf(i,[e,t],n,s,r,o,a){Rt(i,wa([[e-n,t-n],[e+n,t-n],[e+n,t+n],[e-n,t+n]]),s,r,o,a)}function kf(i,e,t,n,s,r,o,a,l=0){let[c,u]=[t[0]-e[0],t[1]-e[1]],f=Math.hypot(c,u);if(f<1e-6)return;let[h,d]=[-u/f*n*.5,c/f*n*.5];if(Math.abs(l)<1e-4){Rt(i,wa([[e[0]+h,e[1]+d],[t[0]+h,t[1]+d],[t[0]-h,t[1]-d],[e[0]-h,e[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let m=(b,_)=>[e[0]+h*_,b,e[1]+d*_],x=(b,_)=>[t[0]+h*_,b+l,t[1]+d*_],g=(b,_)=>{for(let[S,A,M]of[[0,1,2],[0,2,3],[0,2,1],[0,3,2]])i.tri(b[S],b[A],b[M],_,_,_,void 0,Ke)},p=new K(a),y=Ne(o,.9),v=Ne(o,.6);g([m(r,1),x(r,1),x(r,-1),m(r,-1)],p),g([m(s,1),x(s,1),x(s,-1),m(s,-1)],v),g([m(s,1),x(s,1),x(r,1),m(r,1)],y),g([m(s,-1),x(s,-1),x(r,-1),m(r,-1)],y),g([m(s,1),m(s,-1),m(r,-1),m(r,1)],y),g([x(s,1),x(s,-1),x(r,-1),x(r,1)],y)}var dg={lawn:{color:927778,side:729115,edge:4121250,edgeAlpha:.16},terrace:{color:1841968,side:1447464,edge:5995775,edgeAlpha:.32},path:{color:1778228,side:1383209,edge:5995775,edgeAlpha:.22},driveway:{color:1514796,side:1185573,edge:5995775,edgeAlpha:.18},pool:{color:736091,side:861497,edge:3662079,edgeAlpha:.6},bed:{color:1775123,side:1380623,edge:4121250,edgeAlpha:.2},wild:{color:1384987,side:1055509,edge:10146383,edgeAlpha:.14},hedge:{color:1524016,side:1126693,edge:4121250,edgeAlpha:.35},fence:{color:1976903,side:1976903,edge:5995775,edgeAlpha:.45},pergola:{color:2827065,side:2104109,edge:5995775,edgeAlpha:.5}};function zf(i,e){return fa(i)+(e.offset??0)+(qs(e.type)?.01:kc[e.type])}function pg(i,e){let t=i[e];return qs(t.type)||t.type==="pool"?[]:i.slice(e+1).filter(n=>n.cut&&n.points.length>=3&&n.points.every(s=>pt(s,t.points))).map(n=>wa(n.points))}var Jc=(i,e)=>i.map((t,n)=>[n,t,i[(n+1)%i.length]]).filter(([t])=>t!==e);function Ta(i,e){if(i.area.outline!==!1)for(let[,t,n]of Jc(i.poly,i.openEdge))i.lines.seg([t[0],e(t[0],t[1]),t[1]],[n[0],e(n[0],n[1]),n[1]],i.edge,Ke)}function Nw(i){let{buf:e,poly:t,base:n,top:s,look:r}=i,o=new K(r.color);for(let[l,c,u]of jr(t)){let[f,h,d]=[t[l],t[c],t[u]];e.tri([f[0],n+s,f[1]],[d[0],n+s,d[1]],[h[0],n+s,h[1]],o,o,o,void 0,Ke)}let a=new K(r.side);for(let[,l,c]of Jc(t,-1))e.tri([c[0],n+s,c[1]],[c[0],n+.06,c[1]],[l[0],n+.06,l[1]],a,a,a,void 0,Ke),e.tri([c[0],n+s,c[1]],[l[0],n+.06,l[1]],[l[0],n+s,l[1]],a,a,a,void 0,Ke);Ta(i,()=>n+.06),Ta(i,()=>n+s+.005)}function Uw(i){let{buf:e,lines:t,poly:n,top:s,look:r,groundAt:o,edge:a,openEdge:l}=i;for(let[c,u,f]of Jc(n,l)){let h=Math.max(1,Math.round(Math.hypot(f[0]-u[0],f[1]-u[1])/2)),d=l>=0&&c===l-1?h:h-1;for(let m=0;m<=d;m++){let x=u[0]+(f[0]-u[0])*m/h,g=u[1]+(f[1]-u[1])*m/h,p=o(x,g);Bf(e,[x,g],.04,p,p+s,r.side,r.color)}for(let m of[.35,.85])t.seg([u[0],o(u[0],u[1])+m*s,u[1]],[f[0],o(f[0],f[1])+m*s,f[1]],a,Ke)}}function Bw(i){let{buf:e,lines:t,poly:n,area:s,top:r,look:o,groundAt:a,edge:l,openEdge:c}=i;for(let u of n){let f=a(u[0],u[1]);Bf(e,u,.06,f,f+r,o.side,o.color)}for(let[,u,f]of Jc(n,c)){let[h,d]=[a(u[0],u[1]),a(f[0],f[1])];kf(e,u,f,.12,h+r-.16,h+r,o.side,o.color,d-h),s.bracing&&(t.seg([u[0],h+.25,u[1]],[f[0],d+r-.25,f[1]],l,Ke),t.seg([f[0],d+.25,f[1]],[u[0],h+r-.25,u[1]],l,Ke))}if(P0(n)){let u=L0(n),f=u.x1-u.x0>=u.z1-u.z0,[h,d]=f?[u.x0,u.x1-u.x0]:[u.z0,u.z1-u.z0],m=Math.max(1,Math.round(d/.6));for(let x=1;x<m;x++){let g=h+d*x/m,p=f?[g,u.z0+.06]:[u.x0+.06,g],y=f?[g,u.z1-.06]:[u.x1-.06,g],v=a(p[0],p[1]);kf(e,p,y,.06,v+r-.04,v+r+.08,o.side,o.color,a(y[0],y[1])-v)}}Ta(i,(u,f)=>a(u,f)+r+.004)}function kw(i,e,t){let{buf:n,lines:s,poly:r,area:o,top:a,look:l,groundAt:c,base:u,edge:f}=i,h=u-(o.slope??0),d=(x,g)=>c(x,g)+a,m=pg(e,t);if(Rt(n,r,h,o.slope?d:u+a,l.side,l.color,{aoFrom:h,holes:m}),Ta(i,(x,g)=>d(x,g)+.004),o.type==="hedge"&&Ta(i,(x,g)=>c(x,g)+.004),o.outline!==!1)for(let x of m)x.forEach((g,p)=>{let y=x[(p+1)%x.length];s.seg([g[0],d(g[0],g[1])+.004,g[1]],[y[0],d(y[0],y[1])+.004,y[1]],f,Ke)})}function Vf(i,e,t){let n=fa(t),s=t.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=dg[r.type],c=wa(r.points),u={buf:i,lines:e,area:r,poly:c,base:a,groundAt:(f,h)=>a-uf(r,f,h),top:qs(r.type)&&r.height?r.height:kc[r.type],look:l,edge:Ne(l.edge,l.edgeAlpha),openEdge:r.open&&(r.type==="fence"||r.type==="pergola")?c.length-1:-1};r.type==="pool"?Nw(u):r.type==="fence"?Uw(u):r.type==="pergola"?Bw(u):kw(u,s,o)})}var ms=Math.PI/180,Wi=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]];var Qr=i=>Math.hypot(i[0],i[1],i[2]),Zs=i=>{let e=Qr(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},mg=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];var xg=.25;function bg(i,e,t,n,s,r,o){let a=s-t>=r-n,l=a?s-t:r-n;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?r-n:s-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function yg(i,e){let t=Zs(mg(i,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var _g=i=>{let e=Zs([-i[0],0,-i[2]]);return[e[0],e[2]]};function Aa(i,e,t,n,s,r,o,a){let l=Zs(Wi(s,n)),c=Zs(Wi(r,n));return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:yg(l,c),lu:Qr(Wi(s,n)),ls:Qr(Wi(r,n)),pitch:o,span:a,facing:_g(c)}}function gg(i,e,t,n,s,r){let o=Qr(Wi(s,n));if(o<.3)return null;let a=Zs(Wi(s,n)),l=Wi(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=Qr(u);if(f<.3)return null;let h=Zs(u),d=m=>{let x=Math.min(1,Math.max(0,m/f));return[c*x,o-(o-c)*x]};return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:h,n:yg(a,h),lu:o,ls:f,pitch:Math.atan2(h[1],Math.hypot(h[0],h[2]))/ms,span:d,facing:_g(h)}}function zw(i,e){let t=Mn(i),n=dn(i),s=(y,v,b)=>{let[_,S]=t.at(y,v);return[_,b,S]},[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=n.y(-r),f=n.y(t.w+o);if(i.shape==="flat"||i.shape==="parapet"){let[y,v]=[t.at(a,-r),t.at(l,t.w+o)];return[bg(i.id,i.id,Math.min(y[0],v[0]),Math.min(y[1],v[1]),Math.max(y[0],v[0]),Math.max(y[1],v[1]),i.eave_a+xg)]}if(i.shape==="pent")return[Aa(`${i.id}:a`,i.id,"a",s(a,-r,u),s(l,-r,u),s(a,t.w+o,f),i.pitch_a,()=>[0,c])];let h=i.shape==="hip"||i.shape==="pyramid",d=(t.u1-t.u0)/2,m=i.shape==="pyramid"?d:h?Math.min(d,Math.min(n.vr,t.w-n.vr)||t.w/2):0,x=h?t.u0+m-a:0,g=h?l-(t.u1-m):0,p=[];if(n.vr>.3){let y=Math.hypot(n.vr+r,n.rh-u);p.push(Aa(`${i.id}:a`,i.id,"a",s(a,-r,u),s(l,-r,u),s(a,n.vr,n.rh),i.pitch_a,v=>[x*(v/y),c-g*(v/y)]))}if(t.w-n.vr>.3){let y=Math.hypot(t.w+o-n.vr,n.rh-f);p.push(Aa(`${i.id}:b`,i.id,"b",s(l,t.w+o,f),s(a,t.w+o,f),s(l,n.vr,n.rh),i.pitch_b,v=>[g*(v/y),c-x*(v/y)]))}if(h){let y=gg(`${i.id}:c`,i.id,"c",s(a,t.w+o,f),s(a,-r,u),s(t.u0+m,n.vr,n.rh)),v=gg(`${i.id}:d`,i.id,"d",s(l,-r,u),s(l,t.w+o,f),s(t.u1-m,n.vr,n.rh));p.push(...[y,v].filter(b=>b!==null))}return p}function vg(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function eo(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>zw(v,ga(i,v,v.overhang??e.overhang)));let t=vg(i);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(b=>b[0])),s=t.rooms.flatMap(v=>v.points.map(b=>b[1])),r=i.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-r,Math.max(...n)+r],[l,c]=[Math.min(...s)-r,Math.max(...s)+r],u=t.elevation+t.height;if(e.type==="flat")return[bg("main",null,o,l,a,c,u+xg)];let f=a-o>=c-l,h=e.ridge==="short"?!f:f,d=(h?c-l:a-o)/2,m=d*Math.tan(e.pitch*ms),x=(v,b,_)=>h?[v,u+_,(l+c)/2+b]:[(o+a)/2+b,u+_,v],[g,p]=h?[o,a]:[l,c],y=()=>[0,p-g];return[Aa("main:a",null,"a",x(g,-d,0),x(p,-d,0),x(g,0,m),e.pitch,y),Aa("main:b",null,"b",x(g,d,0),x(p,d,0),x(g,0,m),e.pitch,y)]}function jc(i,e){let t=[];for(let n of i.floors.filter(s=>!e||s.id===e)){let{walls:s}=ma(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let[o,a]=[r.b[0]-r.a[0],r.b[1]-r.a[1]],l=Math.hypot(o,a);if(l<1.2)continue;let[c,u]=[a/l,-o/l],f=Math.min(n.height,r.height??n.height),h=(d,m,x,g)=>t.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:f,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});h(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+u*r.right],[o/l,0,a/l],[c,0,u]),r.free&&h(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-u*r.left],[-o/l,0,-a/l],[-c,0,-u])}}return t}var Ea="ground";function Qc(i){let e=i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function eu(i,e){let t=(e.rotation??0)*ms,n=[Math.cos(t),0,Math.sin(t)],s=[-Math.sin(t),0,Math.cos(t)],r=Qc(i),o=n[0]*e.u+s[0]*e.v,a=n[2]*e.u+s[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:A0(r,o,a)):e.base??0;return{key:Ea,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}var Gf=1.13,Hf=1.72,Ra=.025,gs=.07;function tu(i){let e=i.module_w||Gf,t=i.module_h||Hf;return i.portrait===!1?[t,e]:[e,t]}function Mg(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Sg(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*ms:i.wall?Math.min(90,Math.max(0,e.tilt??0))*ms:0}function Wf(i,e){let[,t]=tu(e),n=Sg(i,e);return i.wall?t*Math.cos(n)+Ra:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Ra}function to(i,e,t=!1){let[n,s]=tu(e),r=Sg(i,e),o=s*Math.cos(r),a=Wf(i,e),l=Mg(e),c=Math.max(1,...l),u=new Set(e.skip??[]),f=(m,x,g)=>[0,1,2].map(p=>i.o[p]+i.eu[p]*m+i.es[p]*x+i.n[p]*g),h=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,p]=i.span(x);return m>=g-1e-6&&m<=p+1e-6},d=[];return l.forEach((m,x)=>{let g=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let p=0;p<m;p++){let y=`${x}:${p}`,v=u.has(y);if(v&&!t)continue;let b=e.u+(p+g)*(n+Ra),_=b+n,S=e.v+x*a,A=S+(i.flat||i.wall?o:s);if([[b,S],[_,S],[_,A],[b,A]].every(([M,T])=>h(M,T)))if(i.wall&&r>.001){let M=gs+s*Math.sin(r),[T,C]=e.flip?[M,gs]:[gs,M],D=[f(b,S,T),f(_,S,T),f(_,A,C),f(b,A,C)],P=e.flip?S:A;d.push({corners:D,posts:[b+.05,_-.05].map(F=>[f(F,P,0),f(F,P,M)]),cell:y,skipped:v})}else if(!i.flat)d.push({corners:[f(b,S,gs),f(_,S,gs),f(_,A,gs),f(b,A,gs)],posts:[],cell:y,skipped:v});else{let T=.15+s*Math.sin(r),[C,D]=e.flip?[A,S]:[S,A],P=[f(b,C,.15),f(_,C,.15),f(_,D,T),f(b,D,T)],F=[b+.05,_-.05].flatMap(R=>[[f(R,C,0),f(R,C,.15)],[f(R,D,0),f(R,D,T)]]);d.push({corners:P,posts:F,cell:y,skipped:v})}}}),d}var Xf=.78,qf=1.18,wg=i=>({id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Xf,module_h:i.h||qf});function Ca(i,e){let t=to(i,wg(e))[0];if(!t)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return t.corners.map(n)}var Js=1712952,js=2239816,nu=1318193,Xi=Ne(3662079,.9),qi=Ne(5995775,.45),Bt=.14,Tg=9427199,Ag=13226982,Eg=14936565,Rg={black:{glass:new K(329483),edge:Ne(9082544,.32),cells:Ne(2766160,.22)},blue:{glass:new K(1386842),edge:Ne(10467583,.55),cells:Ne(4025599,.35)}},Cg=Ne(13226982,.5),Ig=Ne(13226982,.85),Pg=Ne(16757575,.95),Yf=new K(2845583),$f=new K(3818072);var no=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],iu=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],Lg=(i,e)=>e.section?i.find(t=>t.sections?.includes(e.section)):i[0];function Fg(i,e,t){let n=i.settings.roof?.windows??[];if(n.length===0||e.length===0)return;let s=new Map(eo(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?Ca(o,r):null,l=o&&a?Lg(e,o):void 0;if(!o||!a||!l)continue;let c=l.floor.elevation+l.base,[u,f,h,d]=a.map(T=>[T[0],T[1]-c,T[2]]),m=t.get(r.id)??{open:0,tilt:0,cover:0},x=(T,C)=>iu(T,o.n,C),g=m.open>.02||m.tilt>.02?Pg:Ig,p=[u,f,h,d].map(T=>x(T,.06));p.forEach((T,C)=>l.lines.seg(T,p[(C+1)%4],g));let y=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*It,v=Math.hypot(h[0]-f[0],h[1]-f[1],h[2]-f[2]),b=T=>iu(iu(T,o.es,-v*Math.cos(y)),o.n,v*Math.sin(y)),[_,S]=[x(d,.065),x(h,.065)],[A,M]=[b(_),b(S)];l.solid.tri(A,M,S,Yf),l.solid.tri(A,S,_,Yf);for(let[T,C]of[[A,M],[M,S],[S,_],[_,A]])l.lines.seg(T,C,g);if(m.cover>.02){let T=Math.min(1,m.cover),[C,D]=[x(no(_,A,T),.01),x(no(S,M,T),.01)],[P,F]=[x(_,.01),x(S,.01)];l.solid.tri(C,D,F,$f),l.solid.tri(C,F,P,$f)}}}function su(i,e,t,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=Rg[n.look==="blue"?"blue":"black"],[a,l]=n.portrait===!1?[10,6]:[6,10];for(let c of to(t,n)){let[u,f,h,d]=c.corners.map(r);for(let[g,p,y]of[[u,f,h],[u,h,d],[u,h,f],[u,d,h]])i.tri(g,p,y,o.glass);let m=g=>iu(g,t.n,.004),x=[u,f,h,d].map(m);x.forEach((g,p)=>e.seg(g,x[(p+1)%4],o.edge));for(let g=1;g<a;g++)e.seg(m(no(u,f,g/a)),m(no(d,h,g/a)),o.cells);for(let g=1;g<l;g++)e.seg(m(no(u,d,g/l)),m(no(f,h,g/l)),o.cells);for(let[g,p]of c.posts)e.seg(r(g),r(p),Cg)}}function Dg(i,e){let t=i.settings.roof?.solar??[];if(t.length===0||e.length===0)return;let n=new Map(eo(i).map(s=>[s.key,s]));for(let s of t){let r=n.get(s.face),o=r?Lg(e,r):void 0;r&&o&&su(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}var kn=.12,Ia=.16;function Og(i,e,t,n,s,r,o){let a=t.w,[l,c,u,f]=[s.a>0,s.b>0,s.u0>0,s.u1>0],h=(m,x,g,p,y,v)=>{let b=[t.at(m,g),t.at(x,g),t.at(x,p),t.at(m,p)],_=(b[1][0]-b[0][0])*(b[2][1]-b[0][1])-(b[2][0]-b[0][0])*(b[1][1]-b[0][1]);Rt(i,_<0?[...b].reverse():b,y-o,v-o,Ag,Eg,{bottom:!0})};for(let[m,x]of[[0,l],[a,c]]){if(!x)continue;let g=n.y(m)-.03,p=m===0?0:a-kn;h(t.u0,t.u1,p,p+kn,g-Ia,g),e.seg(r(t.u0,m,g-Ia),r(t.u1,m,g-Ia),qi)}for(let[m,x]of[[t.u0,u],[t.u1-kn,f]])if(x)for(let g=0;g<6;g++){let[p,y]=[a*g/6,a*(g+1)/6],v=Math.min(n.y(p),n.y(y))-.03;h(m,m+kn,p,y,v-Ia,v)}let d=[];for(let[m,x]of[[0,l],[a-kn,c]]){if(!x)continue;let g=t.u1-t.u0-kn,p=Math.max(1,Math.ceil(g/3.5));for(let y=0;y<=p;y++)y===0&&!u||y===p&&!f||d.push([t.u0+g*y/p,m])}!l&&!c&&(u&&d.push([t.u0,a/2-kn/2]),f&&d.push([t.u1-kn,a/2-kn/2]));for(let[m,x]of d)h(m,m+kn,x,x+kn,o,n.y(x+kn/2)-.03-Ia)}function Ww(i,e){let t=[];if(i.forEach(([r,o],a)=>{o>=e&&t.push([r,o]);let l=i[a+1];if(l&&(o-e)*(l[1]-e)<0){let c=(e-o)/(l[1]-o);t.push([r+(l[0]-r)*c,e])}}),t.length<2)return[];let[n,s]=[t[0],t[t.length-1]];return s[1]>e&&t.push([s[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Ng=i=>da(i)>=0?i:[...i].reverse();function Ug(i,e,t,n,s,r=i,o=!1,a=[],l=null){let c=Mn(t),u=dn(t),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,[h,d]=[Math.max(0,f.a),Math.max(0,f.b)],m=c.w,x=c.u0-Math.max(0,f.u0),g=c.u1+Math.max(0,f.u1),p=(R,O,N)=>{let[B,H]=c.at(R,O);return[B,N-s,H]},y=new K(js),v=new K(Js),b=new K(nu),_=(R,O)=>{for(let N=1;N+1<R.length;N++)i.tri(R[0],R[N],R[N+1],O)},S=([R,O,N],B=0)=>p(R,O,N-B),A=[],M=[],T=[],C=null;if(t.shape==="flat"||t.shape==="parapet"){let R=t.eave_a-s,O=t.shape==="parapet",N=t.points&&t.points.length>=3?gf(t,O?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):O?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-h),c.at(g,-h),c.at(g,m+d),c.at(x,m+d)];if(Rt(i,N,R,R+.25,Js,js,{bottom:!0}),N.forEach((B,H)=>{let z=N[(H+1)%N.length];e.seg([B[0],R+.252,B[1]],[z[0],R+.252,z[1]],Xi),e.seg([B[0],R,B[1]],[z[0],R,z[1]],qi)}),O){let B=Ng(N),H=Hc(B,-.2);B.forEach((z,W)=>{let q=(W+1)%B.length;Rt(i,Ng([z,B[q],H[q],H[W]]),R+.25,R+.65,Js,js),e.seg([z[0],R+.652,z[1]],[B[q][0],R+.652,B[q][1]],Xi),e.seg([H[W][0],R+.652,H[W][1]],[H[q][0],R+.652,H[q][1]],Xi)})}}else{let R=fs(t,f);A=a.reduce((O,N)=>O.flatMap(B=>Wc(B,N)),R.faces),M=R.rim,T=R.ridges,C=R.gable}let D=!!t.open,P=new K(Tg);for(let R of A)if(D)for(let O=1;O+1<R.length;O++)r.tri(S(R[0]),S(R[O]),S(R[O+1]),P);else _(R.map(O=>S(O)),y),_(R.map(O=>S(O,Bt)),v);if(M.forEach((R,O)=>{let N=M[(O+1)%M.length];D||_([S(R),S(N),S(N,Bt),S(R,Bt)],v),e.seg(S(R),S(N),D?Xi:qi)}),D){Og(i,e,c,u,f,(R,O,N)=>p(R,O,N),s);return}for(let[R,O]of T)e.seg(S([R[0],R[1],R[2]+.004]),S([O[0],O[1],O[2]+.004]),Xi);let F=t.base;if(!o){if(C){let R=Ww(C,F-Bt),O=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(R.length>=3)for(let N of O)_(R.map(([B,H])=>p(N,B,H)),b)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let R of[0,m]){let O=u.y(R)-Bt;O>F+.02&&_([p(c.u0,R,F),p(c.u1,R,F),p(c.u1,R,O),p(c.u0,R,O)],b)}else if(t.eave_a>F+.02){let R=[[c.u0,0],[c.u1,0],[c.u1,m],[c.u0,m]];R.forEach(([O,N],B)=>{let[H,z]=R[(B+1)%4];_([p(O,N,F),p(H,z,F),p(H,z,t.eave_a),p(O,N,t.eave_a)],b)})}}}function Bg(i,e,t){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(n.length===0)return[];let s=new Map,r=new Map(eo(i).map(o=>[o.key,o]));for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=_f(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new rt,lines:new Zt,glass:new rt,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Zr(e,o),f=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,h=e.filter(x=>x!==o&&Zr(e,x)===o).flatMap(x=>xf(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),p=g&&g.section===o.id?Ca(g,x):null;if(!p)continue;let y=p.map(v=>_i(o,v[0],v[2]));h.push({u0:Math.min(...y.map(v=>v[0])),u1:Math.max(...y.map(v=>v[0])),v0:Math.min(...y.map(v=>v[1])),v1:Math.max(...y.map(v=>v[1]))})}let d=u?qc(u,o):o,m=null;if(u){let x=Mn(d),g=fs(u,{u0:0,u1:0,a:0,b:0}),p=y=>{let[v,b]=x.at(y,x.w/2),[_,S]=_i(u,v,b);return $s(g,_,S)??dn(u).y(S)};m=p(x.u0)<=p(x.u1)?0:1}Ug(c.solid,c.lines,d,ga(i,d,d.overhang??t),a.elevation,c.glass,f,h,m)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function kg(i){return i.floors.filter(e=>e.rooms.some(t=>t.points.length>=3)).sort((e,t)=>t.elevation-e.elevation)[0]??null}function zg(i){let e=i.settings.roof,t=kg(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(P=>P.points.map(F=>F[0])),s=t.rooms.flatMap(P=>P.points.map(F=>F[1])),r=i.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-r,Math.max(...n)+r],[l,c]=[Math.min(...s)-r,Math.max(...s)+r],u=new rt,f=new Zt,h={floor:t,base:t.height,solid:u,lines:f,glass:new rt};if(e.type==="flat"){let P=[[o,l],[a,l],[a,c],[o,c]];return Rt(u,P,0,.25,Js,js,{bottom:!0}),P.forEach(([F,R],O)=>{let[N,B]=P[(O+1)%4];f.seg([F,.252,R],[N,.252,B],Xi),f.seg([F,0,R],[N,0,B],qi)}),h}let d=a-o>=c-l,m=e.ridge==="short"?!d:d,x=(m?c-l:a-o)/2,g=Math.tan(e.pitch*It),p=x*g,y=(P,F,R)=>m?[P,R,(l+c)/2+F]:[(o+a)/2+F,R,P],[v,b]=m?[o,a]:[l,c],_=new K(js),S=new K(Js),A=(P,F,R,O,N)=>{u.tri(P,F,R,N),u.tri(P,R,O,N)};for(let P of[-1,1]){A(y(v,P*x,0),y(b,P*x,0),y(b,0,p),y(v,0,p),_),A(y(v,P*x,-Bt),y(v,0,p-Bt),y(b,0,p-Bt),y(b,P*x,-Bt),S),A(y(v,P*x,-Bt),y(b,P*x,-Bt),y(b,P*x,0),y(v,P*x,0),S);for(let F of[v,b])A(y(F,P*x,-Bt),y(F,P*x,0),y(F,0,p),y(F,0,p-Bt),S);f.seg(y(v,P*x,0),y(b,P*x,0),qi);for(let F of[v,b])f.seg(y(F,P*x,0),y(F,0,p),qi)}let M=e.overhang,T=new K(nu),C=x-M,D=C*g;for(let P of[v+M,b-M])u.tri(y(P,-C,-Bt),y(P,C,-Bt),y(P,0,D-Bt),T),u.tri(y(P,C,-Bt),y(P,-C,-Bt),y(P,0,D-Bt),T);return f.seg(y(v,0,p+.004),y(b,0,p+.004),Xi),h}function Kf(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:zg(i),s=t?.type==="custom"?Bg(i,t.sections??[],t.overhang):n?[n]:[];return Dg(i,s),Fg(i,s,e),s}var io=i=>{let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]};function Jf(i){return i.reduce((t,n,s)=>t+n[0]*i[(s+1)%i.length][1]-i[(s+1)%i.length][0]*n[1],0)>=0?i:[...i].reverse()}function Vg(i,e){let t=[];return i.forEach((n,s)=>{let r=i[(s+1)%i.length],[o,a]=[e(n),e(r)];if(o>=0&&t.push(n),o>=0!=a>=0){let l=o/(o-a);t.push([n[0]+(r[0]-n[0])*l,n[1]+(r[1]-n[1])*l])}}),t}function jf(i,e,t,n,s){let r=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],o=i;return Number.isFinite(n)&&(o=Vg(o,a=>r(a)-n)),Number.isFinite(s)&&(o=Vg(o,a=>s-r(a))),o}var Gg=i=>Math.round(i*1e3),Pa=i=>`${Gg(i[0])},${Gg(i[1])}`,Zf=(i,e)=>{let[t,n]=[Pa(i),Pa(e)];return t<n?`${t}|${n}`:`${n}|${t}`};function Xw(i,e){let t=[];return i.forEach((n,s)=>{let r=i[(s+1)%i.length],[o,a]=[r[0]-n[0],r[1]-n[1]],l=o*o+a*a;if(l<1e-8)return;let c=e.map(f=>({t:((f[0]-n[0])*o+(f[1]-n[1])*a)/l,off:Math.abs((f[0]-n[0])*a-(f[1]-n[1])*o)/Math.sqrt(l)})).filter(({t:f,off:h})=>f>1e-6&&f<1-1e-6&&h<1e-4).map(({t:f})=>f).sort((f,h)=>f-h),u=n;for(let f of c){let h=[n[0]+o*f,n[1]+a*f];Pa(h)!==Pa(u)&&t.push([u,h]),u=h}t.push([u,r])}),t}function Qf(i,e){let t=i.map(l=>({wall:l,edges:Xw(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l)n.set(Zf(c,u),(n.get(Zf(c,u))??0)+1);let s=[],r=new Map,o=(l,c,u)=>{let f=Pa(l);r.has(f)||r.set(f,{p:l,wall:c,d:[]}),r.get(f).d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,f]of c){let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(n.get(Zf(u,f))!==1||h<1e-4)continue;s.push({a:u,b:f,wall:l});let d=[(f[0]-u[0])/h,(f[1]-u[1])/h];o(u,l,d),o(f,l,d)}let a=[...r.values()].filter(({d:l})=>l.some(c=>l.some(u=>Math.abs(c[0]*u[1]-c[1]*u[0])>.05))).map(({p:l,wall:c})=>({p:l,wall:c}));return{edges:s,corners:a}}function so(i,e){if(e.length===0)return[[i.a,i.b]];let t=io([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=io([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let s=c=>(c[0]-i.wall.a[0])*t[0]+(c[1]-i.wall.a[1])*t[1],[r,o]=[s(i.a),s(i.b)],a=[[Math.min(r,o),Math.max(r,o)]];for(let c of e)a=a.flatMap(([u,f])=>{if(c.s1<=u||c.s0>=f)return[[u,f]];let h=[];return c.s0>u&&h.push([u,c.s0]),c.s1<f&&h.push([c.s1,f]),h});let l=c=>{let u=(c-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*u,i.a[1]+(i.b[1]-i.a[1])*u]};return a.filter(([c,u])=>u-c>1e-4).map(([c,u])=>r<=o?[l(c),l(u)]:[l(u),l(c)])}var xs={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},ru={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},ni=.2,ro=8;var Qs=(i,e)=>Math.min(e,i.height??e);function Hg(i){let e=new Map,t=[],n=new Map;for(let s of i){let r="interior",o=null;if(s.exterior){let[a,l]=[s.b[0]-s.a[0],s.b[1]-s.a[1]],c=Math.hypot(a,l)||1,u=[l/c,-a/c],f=(Math.round(Math.atan2(u[1],u[0])/(2*Math.PI)*ro)%ro+ro)%ro;r=`s${f}`;let h=f/ro*2*Math.PI;o=[Math.cos(h),Math.sin(h)]}e.has(r)||(e.set(r,t.length),t.push(o)),n.set(s,e.get(r))}return{buckets:t,wallBucket:n}}function Wg(i){let e=(n,s,r)=>{let o=i?i(n,s):null;return o===null?r:Math.max(.05,Math.min(r,o))};return{topAt:e,lowestTop:(n,s,r,o,a)=>{if(!i)return a;let l=Math.max(2,Math.ceil((o-r)/.25)+1),c=a;for(let u=0;u<l;u++){let f=r+(o-r)*u/(l-1);c=Math.min(c,e(n[0]+s[0]*f,n[1]+s[1]*f,a))}return c}}}function Xg(i,e,t,n){let s=new Map,r=[];for(let o of i.openings){let a=k0(o,i.rooms,i.walls??[]),l=a&&V0(e,o,a);if(!a||!l)continue;let{wall:c,s:u}=l,f=io([c.b[0]-c.a[0],c.b[1]-c.a[1]]),h=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]),d=Math.min(o.width,h),m=Math.max(0,Math.min(h-d,u-d/2)),x=a.room.points,g=c.free?f[0]*(x[1][0]-x[0][0])+f[1]*(x[1][1]-x[0][1])>0:c.roomLeft===o.room_id,p=[-f[1],f[0]],y=g?p:[-p[0],-p[1]],v=Math.min(n(c.a,f,m,m+d,Qs(c,i.height))-.02,o.sill+o.height),b=Math.max(0,Math.min(o.sill,v-.1)),_=[y[1],-y[0]],S=f[0]*_[0]+f[1]*_[1]>0,A={opening:o,bucket:t.get(c),start:[c.a[0]+f[0]*m,c.a[1]+f[1]*m],axis:f,width:d,toRoom:y,faceRoom:g?c.left:c.right,faceOut:g?c.right:c.left,sill:b,top:v,hingeAtStart:o.hinge==="left"===S,exterior:c.exterior};r.push(A),s.set(c,[...s.get(c)??[],{s0:m,s1:m+d,sill:b,top:v,info:A}])}return{openings:r,spans:s}}function qw(i,e,t){let{info:n}=e,s=n.bucket,r=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],o=l=>l>t+1e-6?s:Ke,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(r(c,l,a),r(c,l,e.top),Si,t,s);i.seg(r(e.s0,l,e.top),r(e.s1,l,e.top),Si,o(e.top)),e.sill>.01&&i.seg(r(e.s0,l,e.sill),r(e.s1,l,e.sill),Si,o(e.sill))}for(let l of[e.s0,e.s1])i.seg(r(l,n.faceRoom,e.top),r(l,-n.faceOut,e.top),Si,o(e.top)),e.sill>.01&&i.seg(r(l,n.faceRoom,e.sill),r(l,-n.faceOut,e.sill),Si,o(e.sill)),e.sill<t&&e.top>t&&i.seg(r(l,n.faceRoom,t),r(l,-n.faceOut,t),Yc,va+s)}function qg(i,e,t,n,s,r,o){let{topAt:a}=r,l=Math.min(e.cut_height,e.height),c=(u,f)=>(s.get(u)??[]).filter(f);for(let u of t.edges){let f=n.get(u.wall);for(let[d,m]of so(u,c(u.wall,x=>x.sill<=.005)))i.seg([d[0],.004,d[1]],[m[0],.004,m[1]],wf);for(let[d,m]of so(u,c(u.wall,x=>x.sill<l&&x.top>l)))i.seg([d[0],l,d[1]],[m[0],l,m[1]],Yc,va+f);let h=Qs(u.wall,e.height);for(let[d,m]of so(u,c(u.wall,x=>x.top>=h-.021))){if(!o){i.seg([d[0],h,d[1]],[m[0],h,m[1]],Mi,h<=l+1e-6?Hi+f:f);continue}let x=Math.max(1,Math.ceil(Math.hypot(m[0]-d[0],m[1]-d[1])/.3)),g=p=>[d[0]+(m[0]-d[0])*p/x,d[1]+(m[1]-d[1])*p/x];for(let p=0;p<x;p++){let[y,v]=[g(p),g(p+1)],[b,_]=[a(y[0],y[1],h),a(v[0],v[1],h)];i.seg([y[0],b,y[1]],[v[0],_,v[1]],Mi,Math.max(b,_)<=l+1e-6?Hi+f:f)}}}for(let u of t.corners){let f=a(u.p[0],u.p[1],Qs(u.wall,e.height));i.segSplit([u.p[0],.004,u.p[1]],[u.p[0],f,u.p[1]],Si,Math.min(l,f),n.get(u.wall))}for(let u of s.values())for(let f of u)qw(i,f,l)}function Yg(i,e){let t=new rt(!0,!0),n=[],s=new Zt,r=[],o=new K(xs.slab),a=l=>{l.forEach((c,u)=>{let f=l[(u+1)%l.length];t.tri([c[0],-ni,c[1]],[c[0],0,c[1]],[f[0],0,f[1]],o),t.tri([c[0],-ni,c[1]],[f[0],0,f[1]],[f[0],-ni,f[1]],o)})};for(let l of i.rooms){if(l.points.length<3)continue;let c=Jf(l.points),u=ru[l.floor_material]??ru.wood,f=new K(u.color),h=e.filter(x=>K0(x,c)).map(x=>Z0(x,.003));r.push(...h);let d=[...c,...h.flat()],m=t.count;for(let[x,g,p]of jr(c,h)){let[y,v,b]=[d[x],d[g],d[p]];t.tri([y[0],0,y[1]],[b[0],0,b[1]],[v[0],0,v[1]],f,f,f,[y[0],y[1],b[0],b[1],v[0],v[1]],Ke,u.tile)}n.push({roomId:l.id,start:m,end:t.count,color:u.color}),a(c);for(let x of h)a([...Jf(x)].reverse()),x.forEach((g,p)=>{let y=x[(p+1)%x.length];s.seg([g[0],.006,g[1]],[y[0],.006,y[1]],Mi),s.seg([g[0],-ni,g[1]],[y[0],-ni,y[1]],Si)})}return{buffer:t,roomTris:n,holeLines:s,cutHoles:r}}var ou=.42,ed=.42;function $g(i,e,t){let n=new rt,s=new K(ed,ed,ed),r=new K(1,1,1),o=.002;for(let a of i)for(let[l,c]of so(a,(t.get(a.wall)??[]).filter(u=>u.sill<=.005))){let[u,f]=[c[0]-l[0],c[1]-l[1]],h=Math.hypot(u,f);if(h<.05)continue;let d=[f/h,-u/h],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!e.some(p=>p.points.length>=3&&pt(m,p.points)))continue;let x=[l[0]+d[0]*ou,l[1]+d[1]*ou],g=[c[0]+d[0]*ou,c[1]+d[1]*ou];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function Yw(i,e){let t=[-1/0,...new Set(i.flatMap(s=>[s.s0,s.s1])).values(),1/0].sort((s,r)=>s-r),n=[];for(let s=0;s+1<t.length;s++){let[r,o]=[t[s],t[s+1]];if(o-r<1e-6)continue;let a=Number.isFinite(r)&&Number.isFinite(o)?(r+o)/2:Number.isFinite(r)?r+1:o-1,l=i.filter(f=>f.s0<a&&f.s1>a).map(f=>[f.sill,f.top]).sort((f,h)=>f[0]-h[0]),c=[],u=-ni;for(let[f,h]of l)f>u+1e-4&&c.push([u,f]),u=Math.max(u,h);e>u+1e-4&&c.push([u,e]),n.push({t0:r,t1:o,ranges:c})}return n}function Kg(i,e,t,n,s,r,o){let{topAt:a,lowestTop:l}=r,c=Math.min(e.cut_height,e.height);for(let u of t){let f=n.get(u),h=io([u.b[0]-u.a[0],u.b[1]-u.a[1]]),d=(s.get(u)??[]).sort((b,_)=>b.s0-_.s0),m=Qs(u,e.height),x=Yw(d,m),g=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1]),p=o&&l(u.a,h,0,g,m)<m-.001,y=p?x.flatMap(b=>{let _=Math.max(b.t0,-.5),S=Math.min(b.t1,g+.5),A=Math.max(1,Math.ceil((S-_)/.3));return Array.from({length:A},(M,T)=>({t0:T===0?b.t0:_+(S-_)*T/A,t1:T===A-1?b.t1:_+(S-_)*(T+1)/A,ranges:b.ranges,inner0:T>0,inner1:T<A-1}))}):x.map(b=>({...b,inner0:!1,inner1:!1})),v=b=>(b[0]-u.a[0])*h[0]+(b[1]-u.a[1])*h[1];for(let b of y){let _=jf(u.footprint,u.a,h,b.t0,b.t1);if(_.length<3)continue;let S=(T,C)=>Math.abs(v(T)-C)<1e-4,A=(T,C)=>b.inner0&&S(T,b.t0)&&S(C,b.t0)||b.inner1&&S(T,b.t1)&&S(C,b.t1),M=p?Math.min(..._.map(([T,C])=>a(T,C,m))):m;for(let[T,C]of b.ranges){let D=Math.min(C,p?Math.max(..._.map(([O,N])=>a(O,N,m))):C);if(D-T<1e-4||M-T<.01)continue;let P=T>.01,F=p&&C>M,R=(O,N)=>Math.min(C,a(O,N,m));if(T<c-1e-6){let O=D>c+1e-6?Af+f:Hi+f,N=F&&M<c?(B,H)=>Math.min(c,R(B,H)):Math.min(D,c);Rt(i,_,T,N,xs.wall,xs.wallTop,{aoFrom:0,bottom:P,fold:Hi+f,topFold:O,skipSide:A})}D>c+1e-6&&M>c+1e-6&&Rt(i,_,Math.max(T,c),F?R:D,xs.wall,xs.wallTop,{aoFrom:0,fold:f,bottom:P&&T>=c,skipSide:A})}}}}function td(i,e,t,n=[],s=[],r){let{walls:o,open:a}=ma(i.rooms,{exterior:e,interior:t},i.walls??[]),l=Wg(r),c=!!r,u=Yg(i,n),{buckets:f,wallBucket:h}=Hg(o),{openings:d,spans:m}=Xg(i,o,h,l.lowestTop),x=new rt;Kg(x,i,o,h,m,l,c);let g=Qf(o,o.flatMap(_=>_.footprint)),p=new Zt;p.p.push(...u.holeLines.p),p.c.push(...u.holeLines.c),p.f.push(...u.holeLines.f),qg(p,i,g,h,m,l,c);let y=$g(g.edges,i.rooms,m);Vf(x,p,i);for(let _ of s)su(x,p,_.face,_.field,i.elevation);let v=Math.min(i.cut_height,i.height),b=[];for(let _ of i.furniture.filter(S=>!R0(S.type))){let S=x.count,A=p.p.length/6,M=Un(i,_);Uc(_.type)||Kc(x,p,y,_,M),M+_.h>v+.05&&(Rf(x,S,v,$c),Cf(p,A,v,$c)),b.push({id:_.id,start:S,end:x.count})}return{floor:u.buffer.geometry(),roomTris:u.roomTris,holes:u.cutHoles,walls:x.geometry(),lines:p.geometry(),shadow:y.geometry(),buckets:f,openings:d,walls2d:o,openRooms:a,wallBuckets:o.map(_=>h.get(_)),furnitureTris:b,roofUnder:r}}function nd(i,e){let t=e.furniture.filter(r=>r.type==="stairwell").map(Vc),n=i.filter(r=>r.elevation<e.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return Sf(t);let s=n.furniture.filter(r=>(r.type==="stairs"||Kt(r.type)?.hole)&&n.elevation+r.h>=e.elevation-.3).map(Vc);return Sf([...t,...s])}var Zg=.12,Jg=1.35,au=(i,e,t)=>Math.min(t,Math.max(e,i)),$w=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,jg=i=>({...i,target:i.target.clone()});function Qg({target:i,radius:e,theta:t,phi:n}){return new U(i.x+e*Math.sin(n)*Math.sin(t),i.y+e*Math.cos(n),i.z+e*Math.sin(n)*Math.cos(t))}function ex(i,e,t){let n=$w(t);return{target:new U().lerpVectors(i.target,e.target,n),radius:i.radius+(e.radius-i.radius)*n,theta:i.theta+(e.theta-i.theta)*n,phi:i.phi+(e.phi-i.phi)*n}}function tx(i,e){let t=e.theta??i.theta;for(;t-i.theta>Math.PI;)t-=2*Math.PI;for(;t-i.theta<-Math.PI;)t+=2*Math.PI;return{target:(e.target??i.target).clone(),radius:e.radius??i.radius,theta:t,phi:e.phi??i.phi}}function id(i,e,t,n,s){let r=2*i.radius*Math.tan(s*Math.PI/360)/(n||1),o=new U(Math.cos(i.theta),0,-Math.sin(i.theta)),a=new U(-Math.sin(i.theta),0,-Math.cos(i.theta));i.target.addScaledVector(o,-e*r),i.target.addScaledVector(a,t*r/Math.max(.35,Math.cos(i.phi)))}function nx(i,e,t,n){let s=n||1,r={theta:-e/s*3.2,phi:-t/s*2.4};return i.theta+=r.theta,i.phi=au(i.phi+r.phi,Zg,Jg),r}function ix(i,e){return Math.abs(e.theta)<=1e-4&&Math.abs(e.phi)<=1e-4?!1:(i.theta+=e.theta,i.phi=au(i.phi+e.phi,Zg,Jg),e.theta*=.9,e.phi*=.9,!0)}var Kw=500,Zw=400,Jw=320,jw=6,La=class{view={target:new U,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;press=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;listeners=[];el;camera;events;constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let s=(r,o,a)=>{e.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}get busy(){return this.active}update(e){let t=!1;if(this.flight){let{from:n,to:s,start:r,duration:o}=this.flight,a=Math.min(1,(e-r)/o);this.view=ex(n,s,a),a>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(t=ix(this.view,this.velocity));return this.camera.position.copy(Qg(this.view)),this.camera.lookAt(this.view.target),t}flyTo(e,t=700){let n=tx(this.view,e),s=jg(this.view);this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=n,this.flight=null):this.flight={from:s,to:n,start:performance.now(),duration:t},this.events.change()}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}stopMotion(){this.flight=null,this.velocity={theta:0,phi:0}}onDown(e){this.el.setPointerCapture(e.pointerId);let t=this.pointers.size===0;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button}),this.stopMotion(),t&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0;return}if(clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.press={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let[n,s]=this.local(e);this.holdTimer=setTimeout(()=>{!this.press||this.press.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},Kw)}else this.press=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing)return void this.events.drag?.(...this.local(e));if(this.swiping)return void this.events.swipeMove?.(e.clientY-this.swiping.startY);let[n,s]=[e.clientX-t.x,e.clientY-t.y];if(this.press&&!this.press.moved&&Math.hypot(e.clientX-this.press.x,e.clientY-this.press.y)>jw){this.press.moved=!0,clearTimeout(this.holdTimer);let[r,o]=this.local({clientX:this.press.x,clientY:this.press.y});if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(r,o,e.clientX-this.press.x,e.clientY-this.press.y))return this.swiping={startY:this.press.y},this.velocity={theta:0,phi:0},void this.events.swipeMove?.(e.clientY-this.press.y)}if(this.pointers.size===1)this.press&&!this.press.moved||(t.button===1||t.button===2||e.shiftKey?id(this.view,n,s,this.el.clientHeight,this.camera.fov):this.velocity=nx(this.view,n,s,this.el.clientHeight)),[t.x,t.y]=[e.clientX,e.clientY];else{[t.x,t.y]=[e.clientX,e.clientY];let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),id(this.view,r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1],this.el.clientHeight,this.camera.fov)),this.pinch=r}this.pointers.size===1&&this.press&&!this.press.moved||this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.pointers.delete(e.pointerId),this.grabbing)return this.grabbing=!1,void this.events.drop?.();if(this.swiping)return this.swiping=null,this.press=null,void this.events.swipeEnd?.();if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.press=null;else if(this.press&&!this.press.moved&&e.type==="pointerup"&&performance.now()-this.press.time<Zw){let[t,n]=this.local(e),s=performance.now(),r=s-this.lastTap<Jw;this.lastTap=r?0:s,r?this.events.doubleTap(t,n):this.events.tap(t,n)}this.pointers.size===0&&(this.press=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=au(this.view.radius*e,this.minRadius,this.maxRadius)}pinchState(){let[e,t]=[...this.pointers.values()];return t?{dist:Math.hypot(e.x-t.x,e.y-t.y),mid:[(e.x+t.x)/2,(e.y+t.y)/2]}:null}};function bs(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool nfShow = ${t==="glass"?"false":"true"};
        if (fold > -0.5) {
          int nfFold = int(fold + 0.5);
          int nfKind = nfFold / 16;
          int nfBucket = nfFold - nfKind * 16;
          bool nfStanding = ((uStanding >> nfBucket) & 1) == 1;
          bool nfGlass = ((uGlass >> nfBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          nfShow = nfKind == 0 || nfKind == 4 ? nfStanding : nfKind == 1 || nfKind == 3 ? !nfStanding : true;
          bool nfWall = nfKind == 0 || nfKind == 2;
          ${t==="solid"?"if (nfGlass && nfWall) nfShow = false;":""}
          ${t==="glass"?"nfShow = nfShow && nfGlass && nfWall;":""}
        }
        if (!nfShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),t==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`nf-fold-${t}`,i}function Qw(i,e){let t=Kt(e);if(!t)return null;let n=i.scale??1,[s,r,o]=t.size.map(a=>a*n);return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:s,d:r,h:o,variant:i.variant??null,entity:null,power:null}}function lu(i,e){let t=[],n=!1;for(let s of i.furniture){t.push(s);let r=s.type==="parking"?e.get(s.id):void 0,o=r?Qw(s,r):null;o&&(t.push(o),n=!0)}return n?{...i,furniture:t}:i}var sx=["neon","blueprint","day"];function rx(i){return sx.indexOf(i)}var cu={value:new U(.22,.88,1)},uu={value:0};function ox(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var e2=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 nfThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function wi(i,e,t=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=e,r.uniforms.uAccent=cu,r.uniforms.uAccentOn=uu,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${e2}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${t?"l":"s"}`,i}function hu(i){return i==="day"?xi:dt}var ax=.012,t2=.012;function n2(){let i=[],e=[],t=[],n=[];return{add(s,r,o,a,l,c,u){for(let f of[s,r,o,s,o,a])i.push(f[0],f[1],f[2]),e.push(l[0],l[1],l[2]),t.push(c),n.push(u)},finish:s=>({pos:new Float32Array(i),normal:new Float32Array(e),room:Int16Array.from(t),fold:new Float32Array(n),doors:s})}}function ux(i,e){let[t,n]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],s=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/s<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/s)>.99}function i2(i,e,t,n){let s=[];for(let r of n.filter(o=>ux(i,o))){let o=(r.start[0]-i.a[0])*e[0]+(r.start[1]-i.a[1])*e[1],a=r.axis[0]*e[0]+r.axis[1]*e[1]>0?o:o-r.width;a>t||a+r.width<0||s.push({s0:a,s1:a+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function lx(i,e,t){let n=[e,t,...i.filter(s=>s>e+.005&&s<t-.005)].sort((s,r)=>s-r);return n.filter((s,r)=>r===0||s>n[r-1]+.005)}function cx(i,e,t=()=>!1){let n=i.map(u=>u[0]),s=i.map(u=>u[1]),[r,o]=[Math.min(...n),Math.min(...s)],[a,l]=[Math.max(1,Math.ceil((Math.max(...n)-r)/e)),Math.max(1,Math.ceil((Math.max(...s)-o)/e))],c=[];for(let u=0;u<a;u++)for(let f=0;f<l;f++){let[h,d]=[r+(u+.5)*e,o+(f+.5)*e];pt([h,d],i)&&!t(h,d)&&c.push({a:r+u*e,b:o+f*e})}return c}function sd(i,e,t,n,s,r=[],o){let a=n2(),l=(h,d,m,x)=>a.add([h,m,d],[h,m,d+s],[h+s,m,d+s],[h+s,m,d],[0,1,0],x,-1);i.rooms.forEach((h,d)=>{if(!(h.points.length<3))for(let{a:m,b:x}of cx(h.points,s,(g,p)=>r.some(y=>pt([g,p],y))))l(m,x,ax,d)});let c=i.rooms.length;for(let h of i.outdoor??[]){if(h.points.length<3||qs(h.type))continue;let d=zf(i,h)+ax;for(let{a:m,b:x}of cx(h.points,s))l(m,x,d,c)}let u=Math.min(i.cut_height,i.height);e.forEach((h,d)=>{let m=Math.min(i.height,h.height??i.height),x=Math.min(u,m-.02),[g,p]=[h.b[0]-h.a[0],h.b[1]-h.a[1]],y=Math.hypot(g,p);if(y<.05)return;let v=[g/y,p/y],b=[-v[1],v[0]],_=t[d],S=i2(h,v,y,n),A=lx([x,(x+m)/2,...S.flatMap(T=>[T.y0+.01,T.y1-.01])],.02,m-.02),M=lx(S.flatMap(T=>[T.s0,T.s1]),0,y);for(let T of[1,-1]){let C=T>0?h.roomLeft:h.roomRight,D=C?i.rooms.findIndex(N=>N.id===C):h.exterior?c:-1;if(D<0)continue;let P=(T>0?h.left:h.right)+t2,F=[b[0]*T,b[1]*T],R=(N,B)=>[h.a[0]+v[0]*N+F[0]*P,B,h.a[1]+v[1]*N+F[1]*P],O=N=>{let B=R(N,0),H=o?.(B[0],B[2]);return H==null?1/0:H-.02};for(let N=0;N+1<M.length;N++){let B=M[N+1]-M[N],H=Math.max(1,Math.ceil(B/s));for(let z=0;z<H;z++){let W=M[N]+B/H*z,q=M[N]+B/H*(z+1);for(let oe=0;oe+1<A.length;oe++){let[se,Be]=[A[oe],A[oe+1]];if(Be-se<.01)continue;let[De,Xe]=[(W+q)/2,(se+Be)/2];if(S.some(be=>De>be.s0&&De<be.s1&&Xe>be.y0&&Xe<be.y1))continue;let[j,ie]=[Math.min(Be,O(W)),Math.min(Be,O(q))];j<=se+.005&&ie<=se+.005||a.add(R(W,se),R(q,se),R(q,Math.max(se,ie)),R(W,Math.max(se,j)),[F[0],0,F[1]],D,se>=u-1e-6?_:Hi+_)}}}}});let f=[];for(let h of n.filter(d=>d.opening.type==="door")){let d=e.find(g=>ux(g,h));if(!d?.roomLeft||!d.roomRight)continue;let[m,x]=[i.rooms.findIndex(g=>g.id===d.roomLeft),i.rooms.findIndex(g=>g.id===d.roomRight)];m<0||x<0||f.push({id:h.opening.id,a:m,b:x,x:h.start[0]+h.axis[0]*(h.width/2),y:Math.min(1.1,h.top*.55),z:h.start[1]+h.axis[1]*(h.width/2)})}return a.finish(f)}function s2(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function r2(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function hx(i,e,t){let[n,s,r]=[e[0]-i.x,e[1]-i.y,e[2]-i.z],o=n*n+s*s+r*r,a=Math.sqrt(o)||1e-6,l=r2(i),c=1/(1+o/(l*l)),u=c*Math.sqrt(c),f=Math.max(0,-(n*t[0]+s*t[1]+r*t[2])/a);return i.level*u*(.2+.8*f)*s2(i.kind,s/a)}function o2(i,e,t){let n=[];return i.doors.forEach((s,r)=>{let o=t[r]??.5;if(!(o<=.01))for(let[a,l]of[[s.a,s.b],[s.b,s.a]]){let c=[0,0,0];for(let f of e.filter(h=>h.room===a)){let h=[f.x-s.x,f.y-s.y,f.z-s.z],d=Math.hypot(...h)||1,m=hx(f,[s.x,s.y,s.z],[h[0]/d,h[1]/d,h[2]/d]);for(let x=0;x<3;x++)c[x]+=f.color[x]*m}let u=Math.max(...c);u<.01||n.push({x:s.x,y:s.y,z:s.z,color:[c[0]/u,c[1]/u,c[2]/u],level:Math.min(1,u*.9*(.35+.65*o)),kind:"wall",room:l})}}),n}function rd(i,e,t=.7,n=[]){let s=new Map;for(let c of[...e,...o2(i,e,n)]){let u={...c,color:c.color.map(f=>f**1.5)};s.set(c.room,[...s.get(c.room)??[],u])}let{pos:r,normal:o,room:a}=i,l=new Float32Array(r.length);for(let c=0;c<a.length;c++){let u=s.get(a[c]);if(!u)continue;let f=c*3,h=[0,0,0];for(let d of u){let m=hx(d,[r[f],r[f+1],r[f+2]],[o[f],o[f+1],o[f+2]]);for(let x=0;x<3;x++)h[x]+=d.color[x]*m}for(let d=0;d<3;d++)l[f+d]=1-Math.exp(-h[d]*t*1.6)}return l}function od(i,e,t){let n=i.rooms.findIndex(s=>s.points.length>=3&&pt([e,t],s.points));return n<0?i.rooms.length:n}var ad=(i,e)=>i&&e>=0&&e<i.length?i[e]:e;var oo=2043986,ys=2769520,fx=2242399,fu=1845831,dx=1450554,ii=16758087,px=1846349,mx=2572395,gx=1120816,xx=1845831,bx=5995775,yx=9085695,_s=Ne(3662079,.08),_x=1.2,vx=1.5,Mx=.2;function du(i,e,t,n,s,r){let o=(x,g,p)=>e(x,g,p),{x0:a,x1:l,n0:c,n1:u,y0:f,y1:h}=t,d=x=>Ne(n.getHex(),x),m=[[o(a,c,h),o(l,c,h),o(l,u,h),o(a,u,h),s],[o(a,c,f),o(l,c,f),o(l,u,f),o(a,u,f),d(.6)],[o(a,u,f),o(l,u,f),o(l,u,h),o(a,u,h),n],[o(a,c,f),o(l,c,f),o(l,c,h),o(a,c,h),d(.85)],[o(a,c,f),o(a,u,f),o(a,u,h),o(a,c,h),d(.92)],[o(l,c,f),o(l,u,f),o(l,u,h),o(l,c,h),d(.92)]];for(let[x,g,p,y,v]of m)i.tri(x,g,p,v,v,v,void 0,r),i.tri(x,p,y,v,v,v,void 0,r)}function pn(i,e,t,n,s,{cut:r,bucket:o}){if(t.y1<=r+1e-6)return du(i,e,t,n,s,Ke);if(t.y0>=r-1e-6)return du(i,e,t,n,s,o);du(i,e,{...t,y1:r},n,s,Ke),du(i,e,{...t,y0:r},n,s,o)}function si(i,e,t,n,s,r,o,a,{cut:l,bucket:c},u=0){let f=(h,d,m)=>{let x=b=>u?(o-b)/u:.5,[g,p,y,v]=[e(t,s,h),e(n,s,h),e(n,s,d),e(t,s,d)];i.tri(g,p,y,a,a,a,[0,x(h),1,x(h),1,x(d)],m),i.tri(g,y,v,a,a,a,[0,x(h),1,x(d),0,x(d)],m)};o<=l+1e-6?f(r,o,Ke):r>=l-1e-6?f(r,o,c):(f(r,l,Ke),f(l,o,c))}function Sx(i,e,t,n,s,r,o,a,l,c){let[u,f,h,d]=[e(t,s,o),e(n,s,o),e(n,r,o),e(t,r,o)],m=(r-s)/c;i.tri(u,f,h,a,a,a,[0,0,1,0,1,m],l),i.tri(u,h,d,a,a,a,[0,0,1,m,0,m],l)}function wx(i){let{info:e,state:t,frame:n,fold:s}=i;if(t.cover===null)return;let[r,o,a]=[e.width,e.sill,e.top],l=-e.faceOut;pn(i.frames,n,{x0:-.05,x1:r+.05,n0:l-.15,n1:l,y0:a,y1:a+.2},new K(dx),new K(ys),s);let c=Math.min(1,Math.max(0,t.cover));c>.01&&si(i.blinds,n,0,r,l-.07,a-c*(a-o),a,new K(16777215),s,.045)}function Tx(i){let{info:e,state:t,frame:n,fold:s}=i,[r,o]=[e.width,e.top],a=e.opening.type==="garage"&&(i.markClosed?!!t.sensed&&(t.cover??1)>=.95:(t.cover??1)<.95),l=a?Ne(ii,.8):new K(oo),c=a?Ne(ii,1):new K(ys),[u,f]=[-e.faceOut-.012,e.faceRoom+.012],h=(d,m,x)=>pn(i.frames,n,{x0:d,x1:m,n0:u,n1:f,y0:x,y1:o+.045},l,c,s);h(-.045,.02,0),h(r-.02,r+.045,0),h(.02,r-.02,o-.02)}function Ax(i){let{info:e,state:t,frame:n,fold:s,mid:r}=i,[o,a]=[e.width,e.top],l=hs(e.opening,e.exterior),c=l==="passage",u=I0(l),f=e.opening.swing==="out"?-1:1,h=f>0?e.faceRoom:-e.faceOut,d=e.opening.leaves===2,m=new K(oo),x=new K(ys),g=.02,p=o-.02,y=C0(o,l,e.hingeAtStart,e.opening);if(y){for(let[S,A]of y.panels){let M=(T,C,D,P)=>pn(i.frames,n,{x0:T,x1:C,n0:r-.03,n1:r+.03,y0:D,y1:P},m,x,s);M(S,S+.04,.02,a-.02),M(A-.04,A,.02,a-.02),M(S,A,.02,.1),si(i.glass,n,S+.04,A-.04,r,.1,a-.02,_s,s)}g=y.x0,p=y.x1}let v=d?(p-g)/2-.004:p-g,b=u?.06:.04;u&&(pn(i.frames,n,{x0:.02,x1:o-.02,n0:-e.faceOut-.02,n1:e.faceRoom,y0:0,y1:.02},new K(fu),x,s),e.exterior&&pn(i.frames,n,{x0:o/2-.08,x1:o/2+.08,n0:-e.faceOut-.1,n1:-e.faceOut,y0:a+.1,y1:a+.17},Ne(ii,.55),Ne(ii,.85),{cut:s.cut,bucket:Ke}));let _=c?[]:[[e.hingeAtStart,t.open]];d&&!c&&_.push([!e.hingeAtStart,t.open2??0]);for(let[S,A]of _){let M=Math.min(1,Math.max(0,A)),T=l==="sliding"?0:M*vx,C=l==="sliding"?M*v:0,D=(oe,se,Be)=>{let De=oe*Math.cos(T)-se*Math.sin(T)-C,Xe=h+f*(se*Math.cos(T)+oe*Math.sin(T)+(C?.05:0));return n(S?g+De:p-De,Xe,Be)},P={cut:s.cut,bucket:M>.05?Ke:s.bucket},F=i.markClosed?!!t.sensed&&M<.05:M>.9,R=F?Ne(ii,.7):new K(u?gx:px),O=F?Ne(ii,.9):new K(u?xx:mx),N=(oe,se,Be,De,Xe=-b,j=0)=>pn(i.frames,D,{x0:oe,x1:se,n0:Xe,n1:j,y0:Be,y1:De},R,O,P);l==="glass"?(N(0,.05,.01,a-.01),N(v-.05,v,.01,a-.01),N(.05,v-.05,.01,.12),N(.05,v-.05,a-.08,a-.01),si(i.glass,D,.05,v-.05,-b/2,.12,a-.08,_s,P)):N(0,v,.01,a-.01),l==="front_glass"?si(i.glass,D,.12,v-.12,.001,a*.55,a-.18,_s,P):u&&si(i.glass,D,.1,.18,.001,.3,a-.3,_s,P);let B=Math.min(1.05,a*.5),H=u?.3:.012,[z,W]=u?[v-.11,v-.08]:[v-.16,v-.05],q=(oe,se)=>pn(i.frames,D,{x0:z,x1:W,n0:oe,n1:se,y0:B-H,y1:B+H},new K(bx),new K(yx),P);q(.004,.05),q(-b-.05,-b-.004)}}function Ex(i){let{info:e,state:t,frame:n,fold:s}=i,[r,o]=[e.width,e.top],a=Math.min(1,Math.max(0,t.cover??1)),l=new K(13951231),c=e.faceRoom-.03;a>.01&&si(i.blinds,n,.02,r-.02,c,o*(1-a),o,l,s,.5);let u=(1-a)*o;u>.01&&Sx(i.blinds,n,.02,r-.02,c,c+u,o+.03,l,s.bucket,.5)}var ao={open:0,open2:0,tilt:0,tilt2:0,cover:null};function Rx(i){let{info:e,frame:t,fold:n,mid:s}=i,[r,o,a]=[e.width,e.sill,e.top],[l,c]=[.04,.025],u=new K(oo),f=new K(ys),h=(x,g,p,y)=>pn(i.frames,t,{x0:x,x1:g,n0:s-c,n1:s+c,y0:p,y1:y},u,f,n);h(0,l,o,a),h(r-l,r,o,a),h(l,r-l,o,o+.03),h(l,r-l,a-l,a);let d=Math.max(1,Math.round((r-2*l)/.9)),m=(r-2*l)/d;for(let x=1;x<d;x++)h(l+x*m-.02,l+x*m+.02,o+.03,a-l);for(let x=0;x<d;x++){let g=l+x*m+(x?.02:0),p=l+(x+1)*m-(x<d-1?.02:0);si(i.glass,t,g,p,s,o+.03,a-l,_s,n)}}function Cx(i){let{info:e,state:t,frame:n,fold:s,mid:r}=i,[o,a,l]=[e.width,e.sill,e.top],[c,u]=[.06,.035],f=new K(oo),h=new K(ys),d=new K(fu),m=(M,T,C,D)=>pn(i.frames,n,{x0:M,x1:T,n0:r-u,n1:r+u,y0:C,y1:D},f,h,s),x=a+(a>.05?c:.03);m(0,c,a,l),m(o-c,o,a,l),m(c,o-c,a,x),m(c,o-c,l-c,l),a>.3&&(pn(i.frames,n,{x0:-.04,x1:o+.04,n0:r+u,n1:e.faceRoom+.07,y0:a-.03,y1:a},d,h,s),e.exterior&&pn(i.frames,n,{x0:-.03,x1:o+.03,n0:-e.faceOut-.06,n1:r-u,y0:a-.04,y1:a-.02},d,h,s));let g=.055,[p,y]=[x,l-c],[v,b]=[r+u,r+u+.06],_=e.hingeAtStart,S=e.opening.leaves===2?[{atStart:_,x0:_?c:o/2,x1:_?o/2:o-c,open:t.open,tilt:t.tilt},{atStart:!_,x0:_?o/2:c,x1:_?o-c:o/2,open:t.open2??0,tilt:t.tilt2??0}]:[{atStart:_,x0:c,x1:o-c,open:t.open,tilt:t.tilt}],A=hs(e.opening,e.exterior);for(let M of S){let T=M.open>.02||M.tilt>.02,C=i.markClosed?!!t.sensed&&!T:T,D=C?Ne(ii,.75):new K(fx),P=C?Ne(ii,.95):h,F=M.x1-M.x0,R=M.open*_x,O=M.tilt*Mx,N=(z,W,q)=>{let oe=q-p,se=W+oe*Math.sin(O),Be=p+oe*Math.cos(O),De=z*Math.cos(R)-(se-v)*Math.sin(R),Xe=v+(se-v)*Math.cos(R)+z*Math.sin(R);return n(M.atStart?M.x0+De:M.x1-De,Xe,Be)},B={cut:s.cut,bucket:R>.05?Ke:s.bucket},H=(z,W,q,oe,se=v,Be=b)=>pn(i.frames,N,{x0:z,x1:W,n0:se,n1:Be,y0:q,y1:oe},D,P,B);if(H(0,g,p,y),H(F-g,F,p,y),H(g,F-g,p,p+g),H(g,F-g,y-g,y),si(i.glass,N,g,F-g,(v+b)/2,p+g,y-g,C?Ne(ii,.16):_s,B),A==="bars"){let[z,W]=[(p+y)/2,(v+b)/2];H(g,F-g,z-.012,z+.012,W-.012,W+.012),H(F/2-.012,F/2+.012,p+g,y-g,W-.012,W+.012)}}}function ld(i,e,t){let n=new rt,s=new rt,r=new rt(!0),o=[],a=[],l=[];for(let c of i){let u={frames:n.count,glass:s.count,blinds:r.count},f=c.opening.type,h=hs(c.opening,c.exterior),d={info:c,state:e.get(c.opening.id)??ao,frame:(m,x,g)=>[c.start[0]+c.axis[0]*m+c.toRoom[0]*x,g,c.start[1]+c.axis[1]*m+c.toRoom[1]*x],mid:(c.faceRoom-c.faceOut)/2,markClosed:c.opening.mark==="closed",fold:{cut:t,bucket:c.bucket},frames:n,glass:s,blinds:r};(f==="door"&&h!=="passage"||f==="garage")&&Tx(d),f==="door"?Ax(d):f==="garage"?Ex(d):h==="glass_wall"?Rx(d):Cx(d),wx(d),o.push({id:c.opening.id,start:u.frames,end:n.count}),a.push({id:c.opening.id,start:u.glass,end:s.count}),l.push({id:c.opening.id,start:u.blinds,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:o,glassTris:a,blindTris:l}}var cd=Math.PI/180,Fa=2400,lo=1600,ud=9;function pu(i,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[r,o]of i)s.addColorStop(r,o);return n.fillStyle=s,n.fillRect(0,0,e,e),new an(t)}function a2(i){let t=document.createElement("canvas");t.width=128,t.height=128/2;let n=t.getContext("2d"),s=i*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*r()),l=128/2*(.45+.25*r()),c=128*(.12+.14*r()),u=n.createRadialGradient(a,l,0,a,l,c);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.6,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.fillRect(0,0,128,128/2)}return new an(t)}var mu=class{group=new ht;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(Fa*3);snow;snowPhase=new Float32Array(lo);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(e){this.scene=e,this.group.name="live-weather",this.group.renderOrder=5;let t=new Ue;t.setAttribute("position",new ke(new Float32Array(Fa*6),3)),this.rain=new xn(t,new Ut({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=pu([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),s=new Ue;s.setAttribute("position",new ke(new Float32Array(lo*3),3)),this.snow=new Cn(s,new bn({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<lo;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let r=new Ue;r.setAttribute("position",new ke(new Float32Array(600*3),3)),this.hail=new Cn(r,new bn({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=pu([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<ud;c++){let u=new Ds(new is({map:a2(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),f=new Ie(new On(1,1),new We({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:xi}));f.rotation.x=-Math.PI/2,f.renderOrder=-1,this.clouds.push({sprite:u,shadow:f,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(u,f)}let a=new Ue;a.setAttribute("position",new ke(new Float32Array(144),3)),this.bolt=new xn(a,new Ut({color:14674175,transparent:!0,opacity:1,blending:dt,depthWrite:!1})),this.bolt.visible=!1;let l=pu([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new Ds(new is({map:l,transparent:!0,depthWrite:!1,blending:dt,fog:!1})),this.halo=new Ds(new is({map:pu([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:dt,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,e.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(e){this.bounds=e,this.seed()}set(e){let t=this.view;this.view=e,this.group.visible=!!e;let n=e?.weather??null;if(e&&n&&n.fog>.02&&!e.low){let s=new K(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255);this.scene.fog=new Ps(s,.008+.04*n.fog)}else this.scene.fog instanceof Ps&&(this.scene.fog=null);(!t||t.low!==e?.low||!!t.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let e=this.view?.weather;if(!e)return[0,0];let n=((e.windFrom??270)+(this.view?.north??0)+180)*cd,s=.4+7*e.wind;return[Math.sin(n)*s,-Math.cos(n)*s]}count(e,t){let n=this.view?.low??!1;return Math.round(Math.min(1,e)*t*(n?.3:1))}seed(){let e=this.bounds,t=this.view?.weather,n=()=>e.x0+Math.random()*(e.x1-e.x0),s=()=>e.z0+Math.random()*(e.z1-e.z0),r=()=>e.y0+Math.random()*(e.y1-e.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<Fa;c++){let u=n(),f=r(),h=s();o.setXYZ(c*2,u,f,h),o.setXYZ(c*2+1,u,f-.4,h),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<lo;c++)a.setXYZ(c,n(),r(),s());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),r(),s());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(t?.rain??0,Fa)*2),this.snow.geometry.setDrawRange(0,this.count(t?.snow??0,lo)),this.hail.geometry.setDrawRange(0,this.count(t?.hail??0,600)),this.rain.visible=!!t&&t.rain>.01,this.snow.visible=!!t&&t.snow>.01,this.hail.visible=!!t&&t.hail>.01,this.clouds.forEach((c,u)=>{c.angle=u/ud*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=e.x0+Math.random()*(e.x1-e.x0),c.sz=e.z0+Math.random()*(e.z1-e.z0)}),this.placeClouds(0)}placeClouds(e){let t=this.view,n=t?.weather,s=n?.cloud??0,r=this.bounds,o=(r.x0+r.x1)/2,a=(r.z0+r.z1)/2,l=Math.max(r.x1-r.x0,r.z1-r.z0),[c,u]=this.windVector(),f=Math.round(s*ud),h=t?.sky??[20,28,44],d=(h[0]+h[1]+h[2])/765,m=n?.rain||n?.lightning?.3:0,x=Math.max(.12,Math.min(1,.28+d*.9-m-.25*Math.max(0,s-.6))),g=Math.hypot(c,u)/Math.max(20,l*4)*e*Math.sign(c||1);this.clouds.forEach((p,y)=>{let v=y<f;p.angle+=g*p.speed;let b=l*p.ring,_=p.sprite.material;_.color.setRGB(x,x*1.02,Math.min(1,x*1.12)),_.opacity=v?.3+.45*s:0,p.sprite.visible=v,p.sprite.position.set(o+Math.cos(p.angle)*b,r.y0+l*p.lift,a+Math.sin(p.angle)*b),p.sprite.scale.set(l*p.scale*1.6,l*p.scale*.6,1),p.sx+=c*.45*p.speed*e,p.sz+=u*.45*p.speed*e;let S=l*.4;p.sx>r.x1+S&&(p.sx=r.x0-S),p.sx<r.x0-S&&(p.sx=r.x1+S),p.sz>r.z1+S&&(p.sz=r.z0-S),p.sz<r.z0-S&&(p.sz=r.z1+S);let A=p.shadow.material;A.opacity=v?.12+.2*s:0,p.shadow.visible=v,p.shadow.position.set(p.sx,r.y0+.03,p.sz),p.shadow.scale.set(l*p.scale*.55,l*p.scale*.35,1)})}placeDisc(){let e=this.view,t=e?.sun,n=e?.weather?.cloud??0,s=!t||t.elevation<-3;if(!e||!t||!e.disc||n>.9||!s&&t.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let r=this.bounds,o=new U((r.x0+r.x1)/2,r.y0,(r.z0+r.z1)/2),a=Math.max(70,Math.max(r.x1-r.x0,r.z1-r.z0)*3.5),l=((s?t.azimuth+180:t.azimuth)+e.north)*cd,c=Math.max(8,Math.abs(t.elevation))*cd,u=new U(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),f=o.addScaledVector(u,a),h=a*(s?.07:.1);this.disc.position.copy(f),this.halo.position.copy(f),this.disc.scale.setScalar(h),this.halo.scale.setScalar(h*3.2);let d=this.disc.material,m=this.halo.material,x=s?0:Math.max(0,1-t.elevation/20);d.color.set(s?14016242:new K(1,.9-.25*x,.6-.35*x)),m.color.copy(d.color),d.opacity=(s?.7:.95)*(1-n),m.opacity=(s?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(e){let t=this.bounds,s=(Math.random()<.5?-1:1)<0?t.x0-2-Math.random()*6:t.x1+2+Math.random()*6,r=t.z0+Math.random()*(t.z1-t.z0),o=t.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let u=0;u<l;u++){let f=o-(u+1)/l*(o-t.y0),h=s+(Math.random()-.5)*1.6,d=r+(Math.random()-.5)*1.6;a.setXYZ(u*2,s,c,r),a.setXYZ(u*2+1,h,f,d),s=h,r=d,c=f}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=e+90+Math.random()*120,this.onFlash?.(!0)}step(e){let t=this.view,n=t?.weather;if(!t||!n)return this.last=0,!1;let s=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e;let r=this.bounds,o=r.y1-r.y0,[a,l]=this.windVector();if(this.rain.visible&&s){let c=this.rain.geometry.getAttribute("position"),u=c.array,f=this.count(n.rain,Fa);for(let h=0;h<f;h++){let d=h*6,m=this.rainVel[h*3+1],x=u[d]+a*s,g=u[d+1]-m*s,p=u[d+2]+l*s;g<r.y0&&(g+=o,x=r.x0+Math.random()*(r.x1-r.x0)-a*.4,p=r.z0+Math.random()*(r.z1-r.z0)-l*.4);let y=.05;u[d]=x,u[d+1]=g,u[d+2]=p,u[d+3]=x-a*y,u[d+4]=g+m*y,u[d+5]=p-l*y}c.needsUpdate=!0}if(this.snow.visible&&s){let c=this.snow.geometry.getAttribute("position"),u=c.array,f=this.count(n.snow,lo),h=e/1e3;for(let d=0;d<f;d++){let m=d*3,x=this.snowPhase[d],g=u[m]+(a*.35+Math.sin(h*1.3+x)*.35)*s,p=u[m+1]-(.7+.5*(x*7%1))*s,y=u[m+2]+(l*.35+Math.cos(h*1.1+x)*.35)*s;p<r.y0&&(p+=o,g=r.x0+Math.random()*(r.x1-r.x0),y=r.z0+Math.random()*(r.z1-r.z0)),u[m]=g,u[m+1]=p,u[m+2]=y}c.needsUpdate=!0}if(this.hail.visible&&s){let c=this.hail.geometry.getAttribute("position"),u=c.array,f=this.count(n.hail,600);for(let h=0;h<f;h++){let d=h*3,m=u[d+1]-14*s;m<r.y0&&(m+=o),u[d]+=a*.5*s,u[d+1]=m,u[d+2]+=l*.5*s}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(s),n.lightning&&!t.low?(this.nextBolt||(this.nextBolt=e+2500+Math.random()*6e3),e>=this.nextBolt&&(this.strike(e),this.nextBolt=e+3500+Math.random()*9e3),this.bolt.visible&&e>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof Ps&&(this.scene.fog=null)}};var gu=46,er=900;function l2(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new an(i)}var xu=class{group=new ht;scene;lift;tex=l2();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(er*3);sparkField=new Int16Array(er);sparkPhase=new Float32Array(er);sparkCount=0;last=0;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-energy";let n=new Ue;n.setAttribute("position",new ke(new Float32Array(er*3),3)),n.setAttribute("color",new ke(new Float32Array(er*3),3)),this.sparks=new Cn(n,new bn({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:dt})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),e.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(e){let t=new Set(e.map(n=>n.key));for(let[n,s]of this.arcs)t.has(n)||(this.group.remove(s.line,s.points),s.line.geometry.dispose(),s.line.material.dispose(),s.points.geometry.dispose(),s.points.material.dispose(),this.arcs.delete(n));for(let n of e){let s=this.arcs.get(n.key);if(!s){let o=new Ue;o.setAttribute("position",new ke(new Float32Array(99),3));let a=new Rn(o,new Ut({transparent:!0,opacity:.4,depthWrite:!1,blending:dt})),l=new Ue;l.setAttribute("position",new ke(new Float32Array(gu*3),3));let c=new Cn(l,new bn({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:dt}));a.frustumCulled=c.frustumCulled=!1;let u=new Float32Array(gu);for(let f=0;f<gu;f++)u[f]=Math.random();s={arc:n,line:a,points:c,phase:u,count:0,speed:0,a:new U,b:new U,c:new U},this.arcs.set(n.key,s),this.group.add(a,c)}s.arc=n;let r=new K(n.color[0]/255,n.color[1]/255,n.color[2]/255);s.line.material.color.copy(r),s.points.material.color.copy(r),s.count=Math.max(3,Math.min(gu,Math.round(3+Math.sqrt(n.power)/2.2))),s.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),s.points.geometry.setDrawRange(0,s.count)}this.place()}setSparks(e){this.sparkFields=e;let t=e.reduce((s,r)=>s+r.quads.length*r.level,0),n=0;t>0&&e.forEach((s,r)=>{if(s.level<=0)return;let o=Math.round(er*s.quads.length*s.level/Math.max(t,e.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<er;a++,n++){let l=s.quads[Math.floor(Math.random()*s.quads.length)],c=Math.random(),u=Math.random();for(let f=0;f<3;f++){let h=l[0][f]+(l[1][f]-l[0][f])*c,d=l[3][f]+(l[2][f]-l[3][f])*c;this.sparkBase[n*3+f]=h+(d-h)*u+(f===1?.12:0)}this.sparkField[n]=r,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(e,t){let n=this.lift(e.floorId);return t.set(e.x,n.y+e.y,e.z),n.visible}place(){for(let e of this.arcs.values()){let t=this.world(e.arc.from,e.a),n=this.world(e.arc.to,e.b),s=e.a.distanceTo(e.b);e.c.copy(e.a).add(e.b).multiplyScalar(.5),e.c.y=Math.max(e.a.y,e.b.y)+.6+s*.22;let r=t&&n;e.line.visible=e.points.visible=r;let o=e.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(e,l))}o.needsUpdate=!0}}bezier(e,t){let n=1-t;return[n*n*e.a.x+2*n*t*e.c.x+t*t*e.b.x,n*n*e.a.y+2*n*t*e.c.y+t*t*e.b.y,n*n*e.a.z+2*n*t*e.c.z+t*t*e.b.z]}step(e){if(!this.active||!this.group.visible)return this.last=0,!1;let t=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let s=n.points.geometry.getAttribute("position");for(let r=0;r<n.count;r++)n.phase[r]=(n.phase[r]+n.speed*t)%1,s.setXYZ(r,...this.bezier(n,n.phase[r]));s.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),s=this.sparks.geometry.getAttribute("color"),r=e/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(r*2.4+this.sparkPhase[o]*3))**6,u=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;s.setXYZ(o,u,u*.86,u*.35)}n.needsUpdate=!0,s.needsUpdate=!0}return!0}setVisible(e){this.group.visible=e}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var Ix=3,bu=class{group=new ht;scene;lift;ringGeo=new Us(.92,1,48);spots=new Map;links=[];constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-sound",e.add(this.group)}get active(){return this.spots.size>0}set(e,t){let n=new Set(e.map(s=>s.id));for(let[s,r]of this.spots)if(!n.has(s)){for(let o of r.rings)this.group.remove(o),o.material.dispose();this.spots.delete(s)}for(let s of e){let r=this.spots.get(s.id);if(!r){let a=Array.from({length:Ix},()=>{let l=new Ie(this.ringGeo,new We({transparent:!0,opacity:0,depthWrite:!1,blending:dt,side:_t}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});r={spot:s,rings:a},this.spots.set(s.id,r)}r.spot=s;let o=new K(s.color[0]/255,s.color[1]/255,s.color[2]/255);for(let a of r.rings)a.material.color.copy(o)}for(let s of this.links)this.group.remove(s.line),s.line.geometry.dispose(),s.line.material.dispose();this.links=t.map(([s,r])=>{let o=new Ue;o.setAttribute("position",new ke(new Float32Array(51),3));let a=new Rn(o,new Ut({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:dt}));return a.frustumCulled=!1,this.group.add(a),{a:s,b:r,line:a}})}step(e){if(!this.spots.size&&!this.links.length)return!1;let t=e/1e3;for(let n of this.spots.values()){let s=this.lift(n.spot.at.floorId),r=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(t*.55+a/Ix)%1;o.visible=s.visible,o.position.set(n.spot.at.x,s.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*r),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let s=this.lift(n.a.floorId),r=this.lift(n.b.floorId);n.line.visible=s.visible&&r.visible;let o=n.line.geometry.getAttribute("position"),a=s.y+n.a.y,l=r.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let u=0;u<=16;u++){let f=u/16,h=Math.sin(Math.PI*f)*(.3+c*.12)+Math.sin(t*3+f*12)*.03;o.setXYZ(u,n.a.x+(n.b.x-n.a.x)*f,a+(l-a)*f+h,n.a.z+(n.b.z-n.a.z)*f)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var c2=Math.PI/180;function u2(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new an(i)}var yu=class{group=new ht;scene;lift;glowTex=u2();views=new Map;onChange=null;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-screens",e.add(this.group)}get active(){return[...this.views.values()].some(e=>e.s.playing)}set(e){let t=new Set(e.map(n=>n.id));for(let[n,s]of this.views)t.has(n)||this.drop(n,s);for(let n of e){let s=this.views.get(n.id);if(!s){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new an(o);a.colorSpace=yt;let l=new Ie(new On(1,1),new We({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Ie(new On(1,1),new We({map:this.glowTex,transparent:!0,depthWrite:!1,blending:dt,side:_t}));c.renderOrder=2,this.group.add(l,c),s={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,s)}s.s=n;let r=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(r!==s.sig){let o=s.sig.split("|")[3]!==(n.picture??"");s.sig=r,o&&this.loadPicture(s),this.draw(s)}this.place(s)}}loadPicture(e){e.image=null;let t=e.s.picture;if(!t)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{e.s.picture!==t||!this.views.has(e.s.id)||(e.image=n,this.draw(e),this.onChange?.())},n.src=t}draw(e){let t=e.s,n=e.canvas.getContext("2d"),s=e.canvas.width,r=e.canvas.height,[o,a,l]=t.color,c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,s,r);let u=22,f=u;if(e.image){let h=r-u*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let d=e.image.naturalWidth||1,m=e.image.naturalHeight||1,x=Math.max(h/d,h/m),g=h/x,p=h/x;n.drawImage(e.image,(d-g)/2,(m-p)/2,g,p,u,u,h,h),n.restore(),f=u*2+h}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,t.title||t.app||"",f,r/2-18,s-f-u),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,t.subtitle,f,r/2+22,s-f-u),t.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(t.playing?"\u25B6 ":"\u275A\u275A ")+t.app,f,r-u-14,s-f-u)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,r-6,s*(t.playing?1:.4),6),e.texture.needsUpdate=!0}text(e,t,n,s,r){let o=t;for(;o.length>1&&e.measureText(o).width>r;)o=o.slice(0,-2);e.fillText(o===t?o:`${o}\u2026`,n,s)}place(e){let t=e.s,n=t.rect,s=t.rotation*c2,r=this.lift(t.floorId),o=(n.x0+n.x1)/2,a=(m,x)=>[t.x+m*Math.cos(s)-x*Math.sin(s),t.z+m*Math.sin(s)+x*Math.cos(s)],l=n.x1-n.x0,c=n.y1-n.y0,[u,f]=a(o,n.z+.012);e.screen.position.set(u,r.y+(n.y0+n.y1)/2,f),e.screen.rotation.set(0,-s,0),e.screen.scale.set(l,c,1);let[h,d]=a(o,n.z-.18);e.glow.position.set(h,r.y+(n.y0+n.y1)/2,d),e.glow.rotation.set(0,-s,0),e.glow.scale.set(l*2.4,c*2.6,1),e.glow.material.color=new K(t.color[0]/255,t.color[1]/255,t.color[2]/255),e.screen.visible=e.glow.visible=r.visible}step(e){let t=!1;for(let n of this.views.values()){this.place(n);let s=n.glow.material;s.opacity=n.s.playing?.55+.25*Math.sin(e/900+n.s.x):.25,t||=n.s.playing}return t}drop(e,t){this.group.remove(t.screen,t.glow),t.screen.geometry.dispose(),t.screen.material.dispose(),t.texture.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose(),this.views.delete(e)}dispose(){for(let[e,t]of this.views)this.drop(e,t);this.glowTex.dispose(),this.scene.remove(this.group)}};var Px=new K(.25,.55,1),hd=new K(1,.3,.75),_u=10,vu=class{group=new ht;scene;lift;points=[];line;comet;rings=[];ringGeo=new Us(.18,.26,32);constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-trail";let n=new Ue;n.setAttribute("position",new ke(new Float32Array(3),3)),n.setAttribute("color",new ke(new Float32Array(3),3)),this.line=new Rn(n,new Ut({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:dt})),this.line.frustumCulled=!1,this.comet=new Ie(new zo(.12,12,8),new We({color:hd,transparent:!0,depthWrite:!1,blending:dt})),this.group.add(this.line,this.comet),this.group.visible=!1,e.add(this.group)}set(e){this.points=e;for(let s of this.rings)this.group.remove(s),s.material.dispose();this.rings=e.map(s=>{let r=new Ie(this.ringGeo,new We({color:Px.clone().lerp(hd,s.age),transparent:!0,opacity:.4+.6*s.age,depthWrite:!1,blending:dt,side:_t}));return r.rotation.x=-Math.PI/2,this.group.add(r),r});let t=Math.max(1,(e.length-1)*_u+1);this.line.geometry.dispose();let n=new Ue;n.setAttribute("position",new ke(new Float32Array(t*3),3)),n.setAttribute("color",new ke(new Float32Array(t*3),3)),this.line.geometry=n,this.group.visible=e.length>0}at(e,t){let n=this.points[e].at,s=this.points[Math.min(this.points.length-1,e+1)].at,r=this.lift(n.floorId),o=this.lift(s.floorId),a=r.y+n.y,l=o.y+s.y,c=Math.sin(Math.PI*t)*(.25+Math.hypot(n.x-s.x,n.z-s.z)*.08);return[n.x+(s.x-n.x)*t,a+(l-a)*t+c,n.z+(s.z-n.z)*t]}step(e){let t=this.points.length;if(!t)return!1;let n=this.line.geometry.getAttribute("position"),s=this.line.geometry.getAttribute("color"),r=0,o=new K;for(let a=0;a<Math.max(1,t-1);a++)for(let l=0;l<=_u;l++){if(l===_u&&a<t-2)continue;if(t===1&&l>0)break;let c=l/_u;n.setXYZ(r,...this.at(a,t===1?0:c));let u=t===1?1:this.points[a].age+(this.points[Math.min(t-1,a+1)].age-this.points[a].age)*c;o.copy(Px).lerp(hd,u).multiplyScalar(.3+.7*u),s.setXYZ(r,o.r,o.g,o.b),r++}if(this.line.geometry.setDrawRange(0,r),n.needsUpdate=s.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===t-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(e/250))}),t>1){let a=e/1e3%(1.2*(t-1)+1)/1.2,l=Math.min(t-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var Mu=class extends Di{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new os;e.deleteAttribute("uv");let t=new fi({side:Qt}),n=new fi,s=new ks(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Os(e,n,6),a=new St;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ie(e,co(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ie(e,co(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ie(e,co(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Ie(e,co(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new Ie(e,co(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new Ie(e,co(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function co(i){return new Vo({color:0,emissive:16777215,emissiveIntensity:i})}function fd(i,e){if(e===Fh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vr||e===ra){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Vr)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Lx(i,e=Math.PI/3){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(s*3);for(let b=0;b<s;b++)r[3*b+0]=n.getX(b),r[3*b+1]=n.getY(b),r[3*b+2]=n.getZ(b)}let o=Math.cos(e),a=(1+1e-10)*100,l=s/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let _=9*b,S=r[_+0],A=r[_+1],M=r[_+2],T=r[_+3],C=r[_+4],D=r[_+5],P=r[_+6],F=r[_+7],R=r[_+8],O=P-T,N=F-C,B=R-D,H=S-T,z=A-C,W=M-D,q=N*W-B*z,oe=B*H-O*W,se=O*z-N*H,Be=1/(Math.sqrt(q*q+oe*oe+se*se)||1);c[3*b+0]=q*Be,c[3*b+1]=oe*Be,c[3*b+2]=se*Be}let u=new Int32Array(s),f=new Float64Array(s*3),h=1;for(;h<s*2;)h<<=1;let d=h-1,m=new Int32Array(h),x=0;for(let b=0;b<s;b++){let _=3*b,S=Math.trunc(r[_+0]*a),A=Math.trunc(r[_+1]*a),M=Math.trunc(r[_+2]*a),T=(Math.imul(S,73856093)^Math.imul(A,19349663)^Math.imul(M,83492791))&d;for(;;){let C=m[T];if(C===0){let P=3*x;f[P+0]=S,f[P+1]=A,f[P+2]=M,m[T]=x+1,u[b]=x++;break}let D=3*(C-1);if(f[D+0]===S&&f[D+1]===A&&f[D+2]===M){u[b]=C-1;break}T=T+1&d}}let g=new Int32Array(x+1);for(let b=0;b<s;b++)g[u[b]+1]++;for(let b=0;b<x;b++)g[b+1]+=g[b];let p=new Int32Array(s),y=g.slice(0,x);for(let b=0;b<l;b++){let _=3*b;p[y[u[_+0]]++]=b,p[y[u[_+1]]++]=b,p[y[u[_+2]]++]=b}let v=new Float32Array(s*3);for(let b=0;b<l;b++){let _=3*b,S=c[_+0],A=c[_+1],M=c[_+2];for(let T=0;T<3;T++){let C=_+T,D=u[C],P=0,F=0,R=0;for(let N=g[D],B=g[D+1];N<B;N++){let H=3*p[N],z=c[H+0],W=c[H+1],q=c[H+2];S*z+A*W+M*q>o&&(P+=z,F+=W,R+=q)}let O=1/(Math.sqrt(P*P+F*F+R*R)||1);v[3*C+0]=P*O,v[3*C+1]=F*O,v[3*C+2]=R*O}}return t.setAttribute("normal",new Wt(v,3,!1)),t}function Fx(i){let e=new Map,t=new Map,n=i.clone();return Dx(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Dx(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Dx(i.children[n],e.children[n],t)}var Su=class extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new wd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new wu(t,Je.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wu(t,Je.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Ld(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=zi.extractUrlBase(e);o=zi.resolveURL(c,this.path)}else o=zi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===kx){try{o[Je.KHR_BINARY_GLTF]=new Fd(e)}catch(f){s&&s(f);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new zd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:o[f]=new xd;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[f]=new Dd(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[f]=new Od;break;case Je.KHR_MESH_QUANTIZATION:o[f]=new Nd;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function h2(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function kt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},gd=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new K(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],fn);let f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ks(u),c.distance=f;break;case"spot":c=new Yo(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ti(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},xd=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return We}extendParams(e,t,n){let s=[];e.color=new K(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},yd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(r,r)}return Promise.all(s)}},_d=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},vd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Md=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new K(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],fn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,yt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},wd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new K().setRGB(r[0],r[1],r[2],fn),Promise.all(s)}},Td=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Ad=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new K().setRGB(r[0],r[1],r[2],fn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,yt)),Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Rd=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Cd=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Id=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Pd=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},wu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}},Ld=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(let m of f){let x=new Ge,g=new U,p=new En,y=new U(1,1,1),v=new Os(m.geometry,m.material,h);for(let _=0;_<h;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(g,p,y));let b=null;for(let _ in l)if(_==="_COLOR_0"){let S=l[_];v.instanceColor=new Oi(S.array,S.itemSize,S.normalized)}else if(_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"){if(b===null){let A=v.geometry;b=new Ue,b.name=A.name;for(let M in A.attributes)b.setAttribute(M,A.attributes[M]);for(let M in A.morphAttributes)b.morphAttributes[M]=A.morphAttributes[M];A.index!==null&&b.setIndex(A.index),b.morphTargetsRelative=A.morphTargetsRelative;for(let M of A.groups)b.addGroup(M.start,M.count,M.materialIndex);A.boundingBox!==null&&(b.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(b.boundingSphere=A.boundingSphere.clone()),b.drawRange.start=A.drawRange.start,b.drawRange.count=A.drawRange.count,b.userData=Object.assign({},A.userData),v.geometry=b}let S=l[_];b.setAttribute(_,new Oi(S.array,S.itemSize,S.normalized))}St.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},kx="glTF",Da=12,Ox={JSON:1313821514,BIN:5130562},Fd=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Da,r=new DataView(e,Da),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ox.JSON){let c=new Uint8Array(e,Da+o,a);this.content=n.decode(c)}else if(l===Ox.BIN){let c=Da+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Dd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let f=Bd[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=Bd[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],d=uo[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}f(d)},a,c,fn,h)})})}},Od=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nd=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Tu=class extends di{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(n-t)/u,h=f*f,d=h*f,m=e*c,x=m-c,g=-2*d+3*h,p=d-h,y=1-g,v=p-h+f;for(let b=0;b!==a;b++){let _=o[x+b+a],S=o[x+b+l]*u,A=o[m+b+a],M=o[m+b]*u;r[b]=y*_+v*S+g*A+p*M}return r}},f2=new En,Ud=class extends Tu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return f2.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},uo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nx={9728:Dt,9729:Ot,9984:Xl,9985:Br,9986:Hs,9987:Jn},Ux={33071:hn,33648:wr,10497:Kn},dd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},d2={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},pd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function p2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),i.DefaultMaterial}function tr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ti(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function m2(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let f=e[c];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(s){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],f=c[1],h=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function g2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function x2(i){let e,t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+md(t.attributes):e=i.indices+":"+md(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+md(i.targets[n]);return e}function md(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function kd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var y2=new Ge,zd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new h2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Wo(this.options.manager):this.textureLoader=new $o(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return tr(r,a,s),Ti(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(zi.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=dd[s.type],a=uo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Wt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=dd[s.type],c=uo[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(d&&d!==f){let p=Math.floor(h/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(y);v||(x=new c(a,p*d,s.count*d/u),v=new Fs(x,d/u),t.cache.add(y,v)),g=new ns(v,l,h%d/u,m)}else a===null?x=new c(s.count*l):x=new c(a,h,s.count*l),g=new Wt(x,l,m);if(s.sparse!==void 0){let p=dd.SCALAR,y=uo[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,_=new y(o[1],v,s.sparse.count*p),S=new c(o[2],b,s.sparse.count*l);a!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,M=_.length;A<M;A++){let T=_[A];if(g.setX(T,S[A*l]),l>=2&&g.setY(T,S[A*l+1]),l>=3&&g.setZ(T,S[A*l+2]),l>=4&&g.setW(T,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Nx[h.magFilter]||Ot,u.minFilter=Nx[h.minFilter]||Jn,u.wrapS=Ux[h.wrapS]||Kn,u.wrapT=Ux[h.wrapT]||Kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Dt&&u.minFilter!==Ot,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(x){let g=new qt(x);g.needsUpdate=!0,h(g)}),t.load(zi.resolveURL(f,r.path),m,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Ti(f,o),f.userData.mimeType=o.mimeType||b2(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bn,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ut,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let f=s[Je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new K(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],fn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,yt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=_t);let u=r.alphaMode||pd.OPAQUE;if(u===pd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===pd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==We&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==We){let f=r.emissiveFactor;a.emissive=new K().setRGB(f[0],f[1],f[2],fn)}return r.emissiveTexture!==void 0&&o!==We&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Ti(f,r),t.associations.set(f,{materials:e}),r.extensions&&tr(s,f,r),f})}createUniqueName(e){let t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Bx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=x2(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Bx(new Ue,c,t),c.mode===zn.TRIANGLE_STRIP?h=h.then(d=>fd(d,ra)):c.mode===zn.TRIANGLE_FAN&&(h=h.then(d=>fd(d,Vr))),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?p2(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=o[d],p,y=c[d];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0){let v=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");v&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=v&&b?new Po(x,y):new Ie(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===zn.LINES)p=new xn(x,y);else if(g.mode===zn.LINE_STRIP)p=new Rn(x,y);else if(g.mode===zn.LINE_LOOP)p=new Fo(x,y);else if(g.mode===zn.POINTS)p=new Cn(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&g2(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ti(p,r),g.extensions&&tr(s,p,g),t.assignFinalMaterial(p),f.push(p)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&tr(s,f[0],r),f[0];let h=new ht;r.extensions&&tr(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Bh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Nn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ti(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let f=o[c];if(f){a.push(f);let h=new Ge;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Lo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){let d=s.channels[f],m=s.samplers[d.sampler],x=d.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){let h=f[0],d=f[1],m=f[2],x=f[3],g=f[4],p=[];for(let v=0,b=h.length;v<b;v++){let _=h[v],S=d[v],A=m[v],M=x[v],T=g[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let C=n._createAnimationTracks(_,S,A,M,T);if(C)for(let D=0;D<C.length;D++)p.push(C[D])}let y=new Ho(r,void 0,p);return Ti(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,y2)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){let d=u.userData.pivot,m=f[0];u.pivot=new U().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Pr:c.length>1?u=new ht:c.length===1?u=c[0]:u=new St,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Ti(u,r),r.extensions&&tr(n,u,r),r.matrix!==void 0){let f=new Ge;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ht;n.name&&(r.name=s.createUniqueName(n.name)),Ti(r,n),n.extensions&&tr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++){let h=l[u];h.parent!==null?r.add(Fx(h)):r.add(h)}let c=u=>{let f=new Map;for(let[h,d]of s.associations)(h instanceof on||h instanceof qt)&&f.set(h,d);return u.traverse(h=>{let d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}vs[r.path]===vs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(vs[r.path]){case vs.weights:u=Ui;break;case vs.rotation:u=Bi;break;case vs.translation:case vs.scale:u=as;break;default:n.itemSize===1?u=Ui:u=as;break}let f=s.interpolation!==void 0?d2[s.interpolation]:Cs,h=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let x=new u(l[d]+"."+vs[r.path],t.array,h,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=kd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Bi?Ud:Tu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _2(i,e,t){let n=e.attributes,s=new Nt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){let u=kd(uo[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){let f=r[c];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){let x=kd(uo[h.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Bx(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Bd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return $e.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Ti(i,e),_2(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?m2(i,e.targets,t):i})}var zx=new Map,Vx=new Map,v2=50*Math.PI/180;function M2(i){i.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.geometry,s=t.material,r=s.name??"";t.userData.paint=!!s.userData?.paint||/^Paint/.test(r),n.getAttribute("normal")||(t.userData.paint?n.computeVertexNormals():t.geometry=Lx(n,v2)),s.flatShading=!1;let o=/glass/i.test(r);s.metalness=t.userData.paint?.55:o?0:Math.min(s.metalness??0,.4),s.roughness=t.userData.paint?.28:o?.05:Math.max(s.roughness??.6,.45),o&&(s.transparent=!0,s.depthWrite=!1,s.opacity=Math.max(s.opacity,.9))})}function Gx(i){let e=zx.get(i);if(!e){let t=S0();if(!t)return Promise.resolve(!1);e=t(i).then(n=>n&&new Promise(s=>{new Su().parse(n,"",r=>{M2(r.scene);let o=new Nt().setFromObject(r.scene),a=[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z];r.scene.position.set(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2);let l=new ht;l.add(r.scene),Vx.set(i,{root:l,size:a}),w0(i),s({root:l,size:a})},()=>s(null))})).catch(()=>null),zx.set(i,e)}return e.then(t=>!!t)}function Hx(i,e){let t=Vx.get(i);if(!t)return null;let n=t.root.clone(!0),s=[];n.traverse(o=>{let a=o;if(!a.isMesh)return;let l=a.material.clone();a.userData.paint&&e.paint&&(l.color=new K(e.paint)),a.material=l,s.push(l)});let r=new ht;return r.add(n),r.scale.set((e.mirror?-1:1)*(e.w/t.size[0]),e.h/t.size[1],e.d/t.size[2]),r.position.set(e.x,e.y,e.z),r.rotation.y=-e.rotation*Math.PI/180,r.userData.own=s,r}function Vd(i){for(let e of i.userData.own??[])e.dispose()}function Wx(i,e){let t=new Xr(e),n=t.fromScene(new Mu,.04).texture;t.dispose();let s=new Xo(16777215,9081766,.9),r=new zs(16777215,1.6);return r.position.set(-4,9,6),i.add(s,r),{env:n,dispose:()=>{n.dispose(),s.removeFromParent(),r.removeFromParent()}}}function Xx(i,e){for(let t of i.userData.own??[])t.envMap=e,t.envMapIntensity=.9}var S2=.3,qx=2.6;function Yx(i,e=.32,t=.22,n=[]){let s=i.map(_=>_[0]),r=i.map(_=>_[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),u=c-l>=a-o,f=t*.7071,h=_=>{let S=[_,[_[0]+t,_[1]],[_[0]-t,_[1]],[_[0],_[1]+t],[_[0],_[1]-t]],A=[...S,[_[0]+f,_[1]+f],[_[0]-f,_[1]+f],[_[0]+f,_[1]-f],[_[0]-f,_[1]-f]];return S.every(M=>pt(M,i))&&!n.some(M=>A.some(T=>pt(T,M)))},d=(_,S)=>h(u?[_,S]:[S,_]),m=(_,S)=>{let A=Math.ceil(Math.hypot(S[0]-_[0],S[1]-_[1])/.05);for(let M=1;M<A;M++)if(!h([_[0]+(S[0]-_[0])*M/A,_[1]+(S[1]-_[1])*M/A]))return!1;return!0},[x,g,p,y]=u?[o,a,l,c]:[l,c,o,a],v=[],b=!0;for(let _=x+t;_<=g-t+1e-6;_+=e){let S=null,A=null,M=.05;for(let P=p;P<=y+1e-6;P+=M)if(d(_,P)&&(A??=P),(!d(_,P)||P+M>y+1e-6)&&A!==null){let F=d(_,P)?P:P-M;(!S||F-A>S[1]-S[0])&&(S=[A,F]),A=null}if(!S||S[1]-S[0]<.2)continue;let T=P=>{let[F,R]=P?S:[S[1],S[0]];return[u?[_,F]:[F,_],u?[_,R]:[R,_]]},C=T(b),D=v[v.length-1];if(D&&n.length&&!m(D,C[0])){let P=T(!b);if(!m(D,P[0]))continue;C=P,b=!b}v.push(C[0],C[1]),b=!b}return v}function Hd(i,e=.7,t=12){return Array.from({length:t},(n,s)=>{let r=s/t*Math.PI*2;return[i[0]+Math.cos(r)*e,i[1]+Math.sin(r)*e]})}var Gd=i=>Math.atan2(Math.sin(i),Math.cos(i));function $x(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Gd(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),qx*t),!0)}let a=Math.atan2(s,r),l=Gd(a-i.heading);if(i.heading=Gd(i.heading+Math.sign(l)*Math.min(Math.abs(l),qx*t)),Math.abs(l)<.35){let c=Math.min(o,S2*t);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var ho=null,Kx=new Map;function w2(i,e=180,t,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,r=Kx.get(s);if(r)return r;t&&Nc(t),ho??=new qr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),ho.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),ho.setSize(e,e,!1),ho.setClearColor(0,0);let o=new rt,a=new Zt,l=Kt(i.type);if(l?.light)Zc(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Wd(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let y={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Kc(o,a,new rt,y)}let c=new Di,u=new Ie(o.geometry(),new We({vertexColors:!0,color:new K(n,n,n)})),f=new xn(a.geometry(),new Ut({vertexColors:!0,color:new K(n*1.8,n*1.8,n*1.8)}));c.add(u,f);let h=new Nt().setFromObject(u),d=h.getCenter(new U),m=new Nn(-1,1,1,-1,.01,100);m.position.copy(d).add(new U(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let y of[h.min.x,h.max.x])for(let v of[h.min.y,h.max.y])for(let b of[h.min.z,h.max.z]){let _=new U(y,v,b).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(_.x),Math.abs(_.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),ho.render(c,m);let p=ho.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),f.geometry.dispose(),f.material.dispose(),Kx.set(s,p),p}var Jx={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},T2=2.4,A2=1.4,E2=.22,jx=140,qd=32,R2=500,Qx=160,nt=2767456,C2=1911110,I2=1,eb=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Xd=450,tb=125,P2=.08,Yd={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},L2=new K(1714765);function F2(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var $d=class{host;options;renderer;scene=new Di;camera=new Ht(38,1,.1,400);controls;labels;root=new ht;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;meshes=[];meshLight=null;meshAsked=new Set;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",e.append(this.labels),this.patternTexture=D2(),this.blindTexture=N2(),this.haloTexture=B2(),this.ground=new Ie(new On(1,1),new We({transparent:!0,blending:dt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new mu(this.scene),this.energyLayer=new xu(this.scene,this.liftOf),this.soundLayer=new bu(this.scene,this.liftOf),this.screenLayer=new yu(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new vu(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,s])=>`${n}=${s}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setMeshSource(e){M0(e)}setPacks(e){Nc(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(f=>f.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let s=n.start_view;if(s){let u=t.floor.elevation+t.ty,[f,h]=zc(n.points),d=s.target??{x:f,y:.3,z:h};this.controls.flyTo({target:new U(d.x,d.y+u,d.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=zc(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new U(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new U(r,t.floor.elevation+t.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".nf-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("nf-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--nf-glow",c):r.style.removeProperty("--nf-glow"))}for(let[n,s]of this.devicePins)t.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="nf-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)t.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=ox(e),n=t?1:0;n===uu.value&&(!t||cu.value.equals(new U(...t)))||(uu.value=n,t&&cu.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=rx(e);let t=hu(e),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=t,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.invalidate()}liftOf=e=>{if(!e)return{y:0,dy:0,visible:!0};let t=this.floorMap.get(e);return t?{y:t.floor.elevation+t.y,dy:t.y,visible:t.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(e,t){this.energyLayer.setArcs(e),this.energyLayer.setSparks(t),this.invalidate()}setLiveSound(e,t){this.soundLayer.set(e,t),this.invalidate()}setLiveTrail(e){this.trailLayer.set(e),this.invalidate()}setLiveScreens(e){let t=[];for(let n of e){let s=this.building?.floors.find(a=>a.id===n.floorId),r=s?.furniture.find(a=>a.id===n.furnitureId),o=r&&s?Nf(r,s):null;!r||!o||t.push({...n,x:r.x,z:r.z,rotation:r.rotation,rect:o})}this.screenLayer.set(t),this.invalidate()}setLiveAnchors(e,t){this.liveAnchors=e,this.liveAnchorCb=t,this.invalidate()}placeLhAnchors(){let e=this.liveAnchorCb;if(!e||!this.liveAnchors.length)return;let t=new U;this.liveAnchors.forEach((n,s)=>{let r=this.liftOf(n.floorId);t.set(n.x,r.y+n.y,n.z).project(this.camera);let o=r.visible&&t.z<1&&Math.abs(t.x)<1.15&&Math.abs(t.y)<1.15;e(s,(t.x+1)/2*this.size.w,(1-t.y)/2*this.size.h,o)})}setSky(e){this.skyView=e,this.weatherLayer.set(e?{...e,low:e.low||this.lowQuality}:null);for(let t of this.floors)this.buildSun(t);this.invalidate()}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let s=document.createElement("small");s.textContent=n,e.append(s),e.classList.add("nf-pin-info")}else e.classList.remove("nf-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=e;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,e.get(s.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),s=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==s&&(n.textContent=s,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let s=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(t,s)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/Qx),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*t,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(e){let t=new rt;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);ug(t,n,Un(e.floor,n),s?.l??0,s?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:e.theta,phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.meshLight?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&F2();this.lowQuality=t,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||t}),this.highQuality=e==="high";let n=new qr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=yt,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new La(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,s)=>this.swipeStart(e,t,n,s),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.meshes)e.group.removeFromParent(),Vd(e.group);this.meshes=[];for(let e of this.floors){e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="nf-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="nf-dev-icon";let s=document.createElement("span");s.className="nf-dev-text";let r=document.createElement("span");r.className="nf-dev-watt";let o=document.createElement("span");o.className="nf-dev-name",t.append(n,s,r,o);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let f=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},R2)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let f=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let f=t.getBoundingClientRect(),h=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=sd(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),s=U2(e.floor,e.geo.openRooms);if(e.lightZones=s.some((a,l)=>a!==l)?s:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b])}e.lightSurface=n;let r=new Ue;r.setAttribute("position",new ke(n.pos,3)),r.setAttribute("color",new ke(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new ke(n.fold,1));let o=new Ls(new Uint32Array(n.pos.length/3),1);o.setUsage(Oh),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=r,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let s of this.devices){let r=this.glowOf(s);if(s.floorId!==e.floor.id||!r)continue;let o=od(e.floor,s.x,s.z),a=ad(e.lightZones,o),[l,,c]=s.size??(s.lamp?Yd[s.lamp]:[.3,.3,.3]),u=s.base??0,f={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<I2?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[h,d]=s.lamp?f[s.lamp]:[s.y,"omni"],m=s.lightY??h,x=r.color;if(s.lamp==="strip"){let g=(s.rotation??0)*It,p=!!s.upright||Math.abs(s.roll??0)>45;for(let y of[-1/3,0,1/3])s.upright?n.push({x:s.x,y:u+l*(.5+y),z:s.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:s.x+Math.cos(g)*l*y,y:m,z:s.z+Math.sin(g)*l*y,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else n.push({x:s.x,y:m,z:s.z,color:x,level:r.level,kind:d,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),s=t.doors.map(f=>{let h=e.geo.openings.find(m=>m.opening.id===f.id);if(h&&hs(h.opening,h.exterior)==="passage")return 1;let d=e.openings.get(f.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+s.map(f=>f.toFixed(1)).join(",");if(r===e.glowSig)return;e.glowSig=r;let o=e.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=rd(t,n,.42,s);if(this.roomTint){let f=e.floor.rooms.length;for(let h=0;h<t.room.length;h++)if(t.room[h]!==f)for(let d=0;d<3;d++)l[h*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let d=f*18;d<f*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[u++]=f*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:wi(new We({vertexColors:!0}),this.themeUniform),pattern:O2(this.patternTexture),wall:wi(bs(new We({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:bs(new We({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new We({vertexColors:!0,blending:Jo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:_t,polygonOffset:!0,polygonOffsetFactor:-1}),lines:wi(bs(new Ut({vertexColors:!0,transparent:!0,blending:hu(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:bs(new We({vertexColors:!0,transparent:!0,blending:dt,depthWrite:!1,side:_t,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:wi(bs(new We({vertexColors:!0,side:_t}),e),this.themeUniform),glass:bs(new We({vertexColors:!0,transparent:!0,blending:dt,depthWrite:!1,side:_t}),e),blinds:wi(bs(new We({map:this.blindTexture,vertexColors:!0,side:_t}),e),this.themeUniform),lamps:wi(new We({vertexColors:!0}),this.themeUniform),halos:new bn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:dt,depthWrite:!1}),cones:new We({vertexColors:!0,transparent:!0,blending:dt,depthWrite:!1,side:_t}),screens:new We({vertexColors:!0,transparent:!0,blending:dt,depthWrite:!1,side:_t})}}rebuild(){let e=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),t=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=Qc(n)?.id===r.id?o.filter(W=>W.face===Ea).map(W=>({field:W,face:eu(n,W)})):[],l=o.filter(W=>W.face.startsWith(`wall:${r.id}:`));if(l.length){let W=new Map(jc(n,r.id).map(q=>[q.key,q]));for(let q of l){let oe=W.get(q.face);oe&&a.push({field:q,face:oe})}}let u=(n.settings.roof.sections??[]).some(W=>bf(W,r.elevation+r.height))?(W,q)=>{let oe=yf(n,W,q);return oe===null?null:oe-r.elevation}:void 0,f=td(lu(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,nd(n.floors,r),a,u),h={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(h),m=new ht,x=new Ie(f.floor,d.floor),g=new Ie(f.shadow,d.shadow);g.renderOrder=1;let p=new Ie(f.floor,d.pattern);p.renderOrder=2;let y=new Ie(new Ue,d.glow);y.renderOrder=3,y.visible=!1;let v=new Ie(new Ue,d.frames),b=new Ie(new Ue,d.blinds),_=new Ie(new Ue,d.glass);_.renderOrder=4;let S=new Ie(new Ue,d.lamps);S.visible=!1;let A=new Ie(new Ue,d.cones);A.visible=!1,A.renderOrder=3;let M=new Cn(new Ue,d.halos);M.visible=!1,M.renderOrder=7;let T=new Ie(new Ue,d.cones);T.visible=!1,T.renderOrder=7;let C=new Ie(new Ue,d.lamps);C.visible=!1;let D=new Ie(new Ue,d.screens);D.visible=!1,D.renderOrder=5;for(let W of[v,b,_])W.frustumCulled=!1;let P=new Ie(f.walls,d.glassWall),F=new Ie(f.walls,d.wall);P.renderOrder=6,m.add(x,g,p,y,F,new xn(f.lines,d.lines),v,b,_,S,A,M,T,C,D,P),this.root.add(m);let R=document.createElement("button");R.className="nf-pin nf-pin-floor",R.dataset.floor=r.id;let O=document.createElement("b");O.textContent=r.name||"\u2013";let N=document.createElement("span");N.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",R.append(O,N),R.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(R);let B=e.get(r.id),H=[],z=null;for(let W of r.rooms){let q=document.createElement("button");q.className="nf-pin",q.dataset.room=W.id,q.dataset.floor=r.id,this.fillRoomPin(q,W.name,this.roomInfo.get(W.id)),q.addEventListener("click",()=>this.options.onRoomTap?.(r.id,W.id)),this.labels.append(q);let[oe,se]=zc(W.points);H.push({pin:q,room:W,cx:oe,cz:se});for(let[Be,De]of W.points)z??={x0:Be,x1:Be,z0:De,z1:De},z.x0=Math.min(z.x0,Be),z.x1=Math.max(z.x1,Be),z.z0=Math.min(z.z0,De),z.z1=Math.max(z.z1,De)}this.floors.push({floor:r,rank:s.indexOf(r),group:m,geo:f,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:v,glassMesh:_,blindsMesh:b,lampMesh:S,sunMesh:A,sunSig:"",haloMesh:M,coneMesh:T,fridgeMesh:C,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:F,screenMesh:D,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:z,roomPins:H,labelSize:null,materials:d,mask:h,openings:new Map,y:B?.y??0,o:B?.o??1,ty:0,to:1,appliedO:-1,label:R})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=t.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??ao);this.buildOpenings(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost(),this.placeMeshes()}placeMeshes(){for(let e of this.meshes)e.group.removeFromParent(),Vd(e.group);this.meshes=[];for(let e of this.floors)for(let t of lu(e.floor,this.parked).furniture){let n=Kt(t.type);if(!n?.mesh)continue;let s=n.mesh;if(!Uc(t.type)){this.meshAsked.has(s)||(this.meshAsked.add(s),Gx(s).then(a=>{a&&!this.disposed&&this.rebuild()}));continue}let r=n.colors?.length?(n.colors.find(a=>a.id===t.variant)??n.colors[0]).hex:null,o=Hx(s,{x:t.x,z:t.z,y:Un(e.floor,t),rotation:t.rotation,mirror:t.mirror,w:t.w,d:t.d,h:t.h,paint:r});o&&(this.meshLight||(this.meshLight=Wx(this.root,this.renderer)),Xx(o,this.meshLight.env),e.group.add(o),this.meshes.push({group:o,furnitureId:t.id}))}this.invalidate()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?Kf(this.building,this.roofWindows):[];if(!e.length)return;let t=new ht,n=wi(new We({vertexColors:!0,transparent:!0,side:_t}),this.themeUniform),s=wi(new Ut({vertexColors:!0,transparent:!0,blending:hu(this.theme),depthWrite:!1}),this.themeUniform,!0),r=wi(new We({vertexColors:!0,transparent:!0,side:_t,depthWrite:!1}),this.themeUniform),o=e.map(a=>{let l=new ht;return l.add(new Ie(a.solid.geometry(),n),new xn(a.lines.geometry(),s)),a.glass.count&&l.add(new Ie(a.glass.geometry(),r)),l.renderOrder=8,t.add(l),{group:l,floorId:a.floor.id,rideId:vf(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});t.renderOrder=8,this.scene.add(t),this.roof={group:t,parts:o,solid:n,lines:s,glass:r},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/jx),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,f=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?f*A2:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;t?n.rank>t.rank?(s=5+n.rank,r=0):n.rank<t.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:E2)):s=this.explode?n.rank*T2:0,n.ty=s,n.to=r,e&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let s of[t.floor,t.wall,t.frames,t.blinds,t.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o}stepFloors(e){let t=!1,n=1-Math.exp(-e/jx);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,t=!0,this.applyFloor(s)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/Qx);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??ao,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,m=a[h]??0,x=d-m;Math.abs(x)<.003?u[h]=d:(u[h]=m+x*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(s.openings.set(o,u),r=!0),t||=f}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new K(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let s=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*P2+s)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=t)return 0;let h=f-t,d=h>Xd?.5+.5*Math.sin(h/140):h/Xd;return Math.round(d*10)/10},s=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=s.map(u=>this.glowOf(u)),a=s.map((u,f)=>`${n(u.id)},${o[f]?`${o[f].level.toFixed(3)},${o[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=r,e.lampColorSig="";let u=new rt,f=[],h=[],d=new Map,m=e.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??m)>Math.min(e.floor.cut_height,m):x.lamp?eb.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,y=x.pack?Kt(x.pack):void 0,[v,b,_]=x.size??[.3,.3,.3];x.model?fg(u,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):y?Zc(u,y,{x:x.x,z:x.z,rotation:x.rotation??0,w:v,d:b,h:_,mirror:x.mirror},x.base??0,65280):Wd(u,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&f.push({id:x.id,start:p,end:u.count}),x.furnitureId&&h.push({id:x.furnitureId,start:p,end:u.count})}e.lampTris=f,e.lampFurnTris=h,e.lampRanges=d,e.lampShade=g0(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((u,f)=>{let h=e.lampRanges.get(u.furnitureId??u.id);if(!h)return;let d=o[f],m=d?.55+.45*d.level:0,x=d?new K(...d.color.map(y=>Math.min(1,y*m))):new K(C2),g=n(u.id);g>0&&x.lerp(new K(1,1,1),.7*g);let p=new K(x.getHex());x0(c,e.lampShade,h,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*It,s=this.weatherLayer?.cloud??0,r=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===e.sunSig)return;e.sunSig=r;let o=new rt;if(t&&t.elevation>2&&s<.97){let a=Math.min(1,t.elevation/12)*(1-.8*s),l=t.elevation*It,c=t.azimuth*It,u=[Math.sin(n+c),-Math.cos(n+c)],f=1/Math.tan(l);for(let h of e.geo.openings){if(h.opening.type!=="window"||!h.exterior)continue;let d=[-h.toRoom[0],-h.toRoom[1]],m=d[0]*u[0]+d[1]*u[1];if(m<.05)continue;let x=e.openings.get(h.opening.id),g=h.top-(x?.cover??0)*(h.top-h.sill);if(g-h.sill<.05)continue;let p=(M,T)=>{let C=Math.min(7,T*f);return[h.start[0]+h.axis[0]*M+h.toRoom[0]*h.faceRoom-u[0]*C,.02,h.start[1]+h.axis[1]*M+h.toRoom[1]*h.faceRoom-u[1]*C]},y=.14*a*Math.min(1,m*1.5),v=new K(1*y,.82*y,.55*y),b=v.clone().multiplyScalar(.45),_=e.floor.rooms.find(M=>M.id===h.opening.room_id);if(!_||_.points.length<3)continue;let S=Math.max(1,Math.ceil(Math.min(7,g*f)/.25)),A=Math.max(1,Math.ceil(h.width/.3));for(let M=0;M<S;M++){let T=h.sill+(g-h.sill)*M/S,C=h.sill+(g-h.sill)*(M+1)/S,D=M/S,P=(M+1)/S,F=v.clone().lerp(b,D),R=v.clone().lerp(b,P);for(let O=0;O<A;O++){let N=h.width*O/A,B=h.width*(O+1)/A,H=p((N+B)/2,(T+C)/2);if(!pt([H[0],H[2]],_.points))continue;let z=p(N,T),W=p(B,T),q=p(B,C),oe=p(N,C);o.tri(z,W,q,F,F,R),o.tri(z,q,oe,F,R,R)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=o.geometry(),e.sunMesh.visible=o.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],s=[],r=new rt,o=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*It,y=[-Math.sin(p),Math.cos(p)],v=l.model==="camera_ceiling",b=l.reach??(v?3:4.5),_=(l.fov??(v?360:90))*It/2,S=l.motion?new K(.9,.12,.16):new K(.04,.22,.28),A=new K(0,0,0),M=Math.max(4,Math.round(_/.15)),T=.015,C=e.geo.walls2d,D=R=>{let O=y[0]*Math.cos(R)-y[1]*Math.sin(R),N=y[1]*Math.cos(R)+y[0]*Math.sin(R),B=b;for(let H of C){let z=H.b[0]-H.a[0],W=H.b[1]-H.a[1],q=O*W-N*z;if(Math.abs(q)<1e-9)continue;let oe=((H.a[0]-l.x)*W-(H.a[1]-l.z)*z)/q,se=((H.a[0]-l.x)*N-(H.a[1]-l.z)*O)/q;oe>.45&&oe<B&&se>=0&&se<=1&&(B=oe)}return B},P=R=>{let O=D(R);return[l.x+(y[0]*Math.cos(R)-y[1]*Math.sin(R))*O,T,l.z+(y[1]*Math.cos(R)+y[0]*Math.sin(R))*O]},F=r.count;for(let R=0;R<M;R++)r.tri([l.x,T,l.z],P(-_+2*_*(R+1)/M),P(-_+2*_*R/M),S,A,A);o.push({id:l.id,start:F,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||eb.has(l.lamp)&&this.wallMode==="cut")continue;let[u,f,h]=l.size??Yd[l.lamp],d=l.base??0,m=(l.rotation??0)*It,x={ceiling:t-.07,downlight:t-.03,spot:t-h,panel:t-.03,pendant:Math.max(.4,t-h)+.08,floor:d+h-.15,uplight:d+h,table:d+h-.09,wall:d+h/2,strip:d+Math.max(.02,h)-.01,bollard:d+h-.08,garden:d+h-.03}[l.lamp],g=(p,y,v=1)=>{n.push(p,x,y),s.push(...c.color.map(b=>b*c.level*.7*v))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),s.push(...c.color.map(y=>y*c.level*.7*.6))):g(l.x+Math.cos(m)*u*p,l.z+Math.sin(m)*u*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(f/2+.05),l.z+Math.cos(m)*(f/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new K(...c.color.map(S=>S*.09*c.level)),y=new K(0,0,0),v=Math.max(.03,u/2),b=.45+.35*c.level,_=16;for(let S=0;S<_;S++){let A=S/_*Math.PI*2,M=(S+1)/_*Math.PI*2,T=[l.x+Math.cos(A)*v,x,l.z+Math.sin(A)*v],C=[l.x+Math.cos(M)*v,x,l.z+Math.sin(M)*v],D=[l.x+Math.cos(A)*b,.02,l.z+Math.sin(A)*b],P=[l.x+Math.cos(M)*b,.02,l.z+Math.sin(M)*b];r.tri(T,D,P,p,y,y),r.tri(T,P,C,p,y,p)}}}let a=new Ue;a.setAttribute("position",new ke(n,3)),a.setAttribute("color",new ke(s,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=r.geometry(),e.coneMesh.visible=r.count>0,e.coneTris=o}buildScreens(e){let t=lu(e.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=t.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return;e.screenSig=n;let s=new rt;for(let r of t){let o=this.screens.get(r.id),a=r.rotation*It,l=Math.cos(a),c=Math.sin(a),u=(v,b,_)=>[r.x+v*l-_*c,b,r.z+v*c+_*l];if(o.faces){let v=Math.max(.05,r.w)*(r.mirror?-1:1),b=Math.max(.05,r.d),_=Math.max(.005,r.h),S=Un(e.floor,r);for(let A of o.faces){let M=A.part==="right"?.03:-Math.abs(v)/2+.03,T=A.part==="left"?-.03:Math.abs(v)/2-.03,C=S+(A.part==="bottom"?_*.45:_)+.006,D=new K(...A.color.map(H=>Math.min(1,H*(.35+.65*A.level)))),P=new K(0,0,0),F=(H,z,W=C)=>u(H*Math.sign(v),W,z),R=[F(M,-b/2+.03),F(T,-b/2+.03),F(T,b/2-.03),F(M,b/2-.03)];s.tri(R[0],R[2],R[1],D),s.tri(R[0],R[3],R[2],D);let O=.12+.1*A.level,N=D.clone().multiplyScalar(.5),B=[F(M-O,-b/2-O,C+.004),F(T+O,-b/2-O,C+.004),F(T+O,b/2+O,C+.004),F(M-O,b/2+O,C+.004)];for(let H=0;H<4;H++){let z=(H+1)%4;s.tri(R[H],B[z],B[H],N,P,P),s.tri(R[H],R[z],B[z],N,N,P)}}continue}let f=Nf(r,e.floor);if(!f)continue;let h=new K(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),d=new K(0,0,0),m=f.z+.004;s.tri(u(f.x0,f.y0,m),u(f.x1,f.y0,m),u(f.x1,f.y1,m),h),s.tri(u(f.x0,f.y0,m),u(f.x1,f.y1,m),u(f.x0,f.y1,m),h);let x=.18+.12*o.level,g=h.clone().multiplyScalar(.5),p=[u(f.x0,f.y0,m),u(f.x1,f.y0,m),u(f.x1,f.y1,m),u(f.x0,f.y1,m)],y=[u(f.x0-x,f.y0-x,m+.01),u(f.x1+x,f.y0-x,m+.01),u(f.x1+x,f.y1+x,m+.01),u(f.x0-x,f.y1+x,m+.01)];for(let v=0;v<4;v++){let b=(v+1)%4;s.tri(p[v],y[v],y[b],g,d,d),s.tri(p[v],y[b],p[b],g,d,g)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=s.geometry(),e.screenMesh.visible=s.count>0}buildOpenings(e){let t=ld(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,s]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let s=new K(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new K(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(L2,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)t.setXYZ(o,s.r,s.g,s.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".nf-pin"))e.classList.toggle("nf-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new Nt;for(let f of this.activeFloors()){let h=f.floor.elevation+f.ty;for(let d of f.floor.rooms)for(let[m,x]of d.points)t.expandByPoint(new U(m,h,x)),t.expandByPoint(new U(m,h+f.floor.height,x))}t.isEmpty()&&t.set(new U(-4,0,-4),new U(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:t.min.x-8,x1:t.max.x+8,z0:t.min.z-8,z1:t.max.z+8,y0:t.min.y,y1:t.max.y+6});let n=t.getCenter(new U),s=t.getSize(new U),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=t.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new Nt,t=1/0;for(let o of this.floors){t=Math.min(t,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new U(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new U(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=k2();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=e.getCenter(new U),s=e.getSize(new U),r=qd*Math.ceil((Math.max(s.x,s.z)+16)/qd);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,t-ni-.02,n.z)}distanceFor(e){let t=this.camera.fov*It,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),s=new Ko;return s.setFromCamera(new Le(e/n.width*2-1,-(t/n.height)*2+1),this.camera),s}pick(e,t){let n=this.rayAt(e,t),s=this.activeFloors();if(this.meshes.length){let a=n.intersectObjects(this.meshes.map(l=>l.group),!0)[0];if(a){let l=a.object;for(;l&&!this.meshes.some(u=>u.group===l);)l=l.parent;let c=l?this.pickFurniture.get(this.meshes.find(u=>u.group===l).furnitureId):void 0;if(c)return{entity:c}}}let r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let h=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Ke;if(h!==Ke&&Math.floor(h/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),f=u?this.pickOpenings.get(u):void 0;if(f)return{entity:f}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),f=u?this.pickFurniture.get(u):void 0;if(f)return{entity:f};if(a.face&&!u){let h=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(h/16),m=h%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,y=Math.hypot(p.x,p.z)||1,v=[a.point.x-p.x/y*.3,a.point.z-p.z/y*.3],b=c.floor.rooms.find(_=>_.points.length>=3&&pt(v,_.points))?.id??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:c.floor.id,roomId:b}}else if(!g&&b)return{floorId:c.floor.id,roomId:b}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Xd),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),s=this.activeFloors(),r=s.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=s.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let s=this.rayAt(t,n),r=e.floor.elevation+e.y,o=s.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-s.ray.origin.y)/o.y;return a<=0?null:[s.ray.origin.x+o.x*a,s.ray.origin.z+o.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(f=>f.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(e,t),l=o??a?.id,c=l?this.floors.find(f=>f.floor.furniture.some(h=>h.id===l)):void 0,u=c?.floor.furniture.find(f=>f.id===l)?.type;return!!(c&&l&&u&&s.has(u))&&this.grabItem(c,l,e,t)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,e,t):this.grabItem(a,o,e,t)}let r=this.furnitureAt(e,t);if(!r){let o=this.pick(e,t);return o&&"entity"in o?this.grabDevice(o.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,e,t)}grabItem(e,t,n,s){let r=e.floor.furniture.find(a=>a.id===t),o=this.floorPoint(e,n,s);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:e.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(e,t,n){let s=this.devices.find(a=>a.id===e),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,t,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(h=>h.id===n.id),u=l&&this.floorPoint(l,e,t);if(!l||!c||!u)return;let f=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/f)*f,n.z=c.z=Math.round((u[1]+n.offset[1])/f)*f,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=this.floorPoint(r,e,t);if(!o)return;let a=this.building?.settings.grid??.05;s.x=Math.round((o[0]+s.offset[0])/a)*a,s.z=Math.round((o[1]+s.offset[1])/a)*a,s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(p=>p.floor.furniture.some(y=>y.id===e)):void 0,n=t?.floor.furniture.find(p=>p.id===e);if(!t||!n)return;let s=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=Kt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Un(t.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Un(t.floor,n),u=n.rotation*It,f=Math.cos(u),h=Math.sin(u),d=(p,y,v)=>[s+p*f-y*h,v,r+p*h+y*f],m=new Zt,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new K(.25,.9,1);for(let p=0;p<4;p++){let[y,v]=x[p],[b,_]=x[(p+1)%4];m.seg(d(y,v,c+.01),d(b,_,c+.01),g),m.seg(d(y,v,c+l),d(b,_,c+l),g),m.seg(d(y,v,c+.01),d(y,v,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new K(1,1,1)),this.ghost=new xn(m.geometry(),new Ut({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(e,t);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:r.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(p=>p.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(e*s),o=Math.round(t*s),a=new rn(r,o);a.texture.colorSpace=yt;let l=new Nn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,f=this.ghost?.visible??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let F of this.floors)F.group.visible=F===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let y=p.floor.rooms.flatMap(F=>F.points),v=p.floor.elevation,b=new Nt(new U(Math.min(...y.map(F=>F[0]))-.3,v,Math.min(...y.map(F=>F[1]))-.3),new U(Math.max(...y.map(F=>F[0]))+.3,v+Math.min(p.floor.cut_height,p.floor.height),Math.max(...y.map(F=>F[1]))+.3)),_=b.getCenter(new U),S=-.6,A=.8,M=new U(Math.sin(A)*Math.sin(S),Math.cos(A),Math.sin(A)*Math.cos(S));l.position.copy(_).addScaledVector(M,100),l.lookAt(_),l.updateMatrixWorld();let T=.5,C=.5;for(let F of[b.min.x,b.max.x])for(let R of[b.min.y,b.max.y])for(let O of[b.min.z,b.max.z]){let N=new U(F,R,O).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(N.x)),C=Math.max(C,Math.abs(N.y))}let D=r/o;T/C>D?C=T/D:T=C*D,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let P=x.createImageData(r,o);for(let F=0;F<o;F++)P.data.set(d.subarray((o-1-F)*r*4,(o-F)*r*4),F*r*4);x.putImageData(P,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return g}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?Yx(n.room,void 0,void 0,n.obstacles):Hd(n.rest),l=a.length?a:Hd(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-s.motion.pos[0],u[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=f)}),s.motion.path=l,s.motion.next=c,n.room&&!pt(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(Jx[n.mode])}for(let[n,s]of this.robots)t.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let s=new rt,r=(a,l,c,u,f)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Rt(s,h,l,c,u,f,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new We({vertexColors:!0});let o=new rt;Rt(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let t=new ht,n=new We({color:Jx[e.mode]});return t.add(new Ie(this.robotGeo,this.robotMat),new Ie(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),t>0?n=$x(s.motion,s.info,t)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}liveFlyInto(e,t,n=1100){let s=this.floorMap.get(e),r=s?s.floor.elevation+s.ty:0;this.controls.flyTo({target:new U(t.target[0],r+t.target[1],t.target[2]),radius:t.radius,theta:t.theta,phi:Math.max(.08,t.phi)},n)}focus(e,t,n,s,r){let o=this.floorMap.get(e);if(o){if(this.controls.flyTo({target:new U(t,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let s=this.controls.update(e),r=this.stepFloors(t),o=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let p=this.deviceFloor.get(x);p&&m.add(p),g<=e&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(t),c=this.stepRobots(e),f=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(e)).some(Boolean),h=s||r||o||a||l,d=[];if(s&&d.push("camera"),r&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.effectTick&&d.push("effect"),c&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?e:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,d),h&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*tb:tb;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!h&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,f)=>{let h=u?u[0]*n/r+u[1]*s/r>=.25:a;!l&&h&&(c|=1<<f)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new U,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||p<l.x)&&(l={x:p,y}),(!c||p>c.x)&&(c={x:p,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let f=o.labelSize.w,h=8+this.labelInset,d=l.x-f-14,m=l.y;d<h&&this.labelInset&&(d=c.x+14,m=c.y),r.push({fv:o,left:Math.max(h,Math.min(e-f-8,d)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(e,t);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new U,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("nf-dev-full",u==="full"),o.classList.toggle("nf-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let s=e-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:t,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function D2(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(o,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let s=(o,a,l)=>{t.save(),t.beginPath(),t.rect(o*256,a*256,256,256),t.clip(),l(o*256,a*256),t.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(o+f+.75,c,o+f+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new an(e);return r.flipY=!1,r.wrapS=hn,r.wrapT=hn,r.anisotropy=4,r.colorSpace=yt,r}function O2(i){let e=new We({map:i,transparent:!0,blending:dt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNfTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"nf-pattern",e}function N2(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new an(i);return t.wrapS=Kn,t.wrapT=Kn,t.colorSpace=yt,t}function U2(i,e){let t=i.rooms.map((s,r)=>r),n=s=>t[s]===s?s:t[s]=n(t[s]);for(let[s,r]of e){let o=i.rooms.findIndex(u=>u.id===s),a=i.rooms.findIndex(u=>u.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((s,r)=>n(r))}function B2(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new an(e);return s.colorSpace=yt,s}function k2(){let e=qd,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=e;o++){let a=Math.round(o/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new an(t);return r.anisotropy=4,r.colorSpace=yt,r}function wL(i,e){return new $d(i,e)}function Wd(i,e,t,n){let[s,r,o]=e.size??Yd[e.lamp],a=e.base??0,l=(e.rotation??0)*It,c=Math.cos(l),u=Math.sin(l),f=(x,g)=>[e.x+x*c-g*u,e.z+x*u+g*c],h=(x,g,p,y,v,b=14)=>{let _=[];for(let S=0;S<b;S++){let A=S/b*Math.PI*2;_.push([e.x+Math.cos(A)*x,e.z+Math.sin(A)*x])}Rt(i,_,g,p,y,v,{aoFrom:0,bottom:!0})},d=(x,g,p,y,v,b,_,S=_)=>Rt(i,[f(x,p),f(g,p),f(g,y),f(x,y)],v,b,_,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(s,r)/2);switch(e.lamp){case"ceiling":h(m*.25,t-.04,t,nt,nt,8),h(m,t-Math.max(.04,o)-.035,t-.04,n,n);break;case"pendant":{let x=Math.max(.4,t-o);h(.06,t-.02,t,nt,nt,8);let g=e.variant==="globe"?x+2*m:e.variant==="drum"?x+.24:x+.2;if(h(.008,g,t-.02,nt,nt,5),e.variant==="globe")for(let y=0;y<7;y++){let v=Math.PI*(y/7),b=Math.PI*((y+1)/7);h(m*Math.max(.2,Math.sin((v+b)/2)),x+m-m*Math.cos(v),x+m-m*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)h(m*(.25+.75*(4-y)/4),x+.06*y,x+.06*(y+1),n,n,16);else e.variant==="drum"?h(m,x,x+.24,n,n,18):(h(m*.35,x+.14,x+.2,n,n,12),h(m,x,x+.14,n,n,16));break}case"downlight":h(m,t-.012,t,nt,nt,12),h(m*.7,t-.02,t-.012,n,n,12);break;case"spot":h(m*.6,t-.02,t,nt,nt,10),h(m,t-Math.max(.06,o),t-.02,nt,nt,12),h(m*.8,t-Math.max(.06,o)-.008,t-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,t-Math.max(.015,o),t,nt,nt),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,t-Math.max(.015,o)-.004,t-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,m*.6),a,a+.03,nt,nt),h(.014,a+.03,a+o-.12,nt,nt,6),h(m,a+o-.14,a+o-.02,nt,nt),h(m*.92,a+o-.02,a+o,n,n);break;case"bollard":h(m,a,a+o-.14,nt,nt,10),h(m*.9,a+o-.14,a+o-.03,n,n,10),h(m*1.1,a+o-.03,a+o,nt,nt,10);break;case"garden":h(.012,a,a+o-.08,nt,nt,5),h(m,a+o-.08,a+o-.01,nt,nt,10),h(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,m*.7),a,a+.03,nt,nt),h(.014,a+.03,a+o-.28,nt,nt,6),h(m,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,m*.55),a,a+.03,nt,nt),h(.012,a+.03,a+o-.16,nt,nt,6),h(m,a+o-.18,a+o,n,n);break;case"wall":{let x=e.base??Bc;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,nt),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=e.base!=null?e.base+x:t-.04;if(!e.roll&&!e.upright){d(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let p=(e.roll??0)*It,y=Math.cos(p),v=Math.sin(p),b=e.upright?a+s/2:g-x/2,_=(C,D,P)=>{let F=C,R=D*y-P*v,O=D*v+P*y;return e.upright&&([F,R]=[-R,F]),[e.x+F*c-O*u,b+R,e.z+F*u+O*c]},S=[_(-s/2,-x/2,-r/2),_(s/2,-x/2,-r/2),_(s/2,-x/2,r/2),_(-s/2,-x/2,r/2),_(-s/2,x/2,-r/2),_(s/2,x/2,-r/2),_(s/2,x/2,r/2),_(-s/2,x/2,r/2)],A=new K(n),M=[e.x,b,e.z],T=(C,D,P,F)=>{let[R,O,N]=[S[C],S[D],S[P]],B=[(O[1]-R[1])*(N[2]-R[2])-(O[2]-R[2])*(N[1]-R[1]),(O[2]-R[2])*(N[0]-R[0])-(O[0]-R[0])*(N[2]-R[2]),(O[0]-R[0])*(N[1]-R[1])-(O[1]-R[1])*(N[0]-R[0])],H=[R[0]-M[0],R[1]-M[1],R[2]-M[2]],z=B[0]*H[0]+B[1]*H[1]+B[2]*H[2]<0,[W,q,oe,se]=z?[S[F],S[P],S[D],S[C]]:[S[C],S[D],S[P],S[F]];i.tri(W,q,oe,A,A,A),i.tri(W,oe,se,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{$d as NextFloorViewer,wL as createViewer,w2 as furniturePreview,F2 as isLowEnd,Wd as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
