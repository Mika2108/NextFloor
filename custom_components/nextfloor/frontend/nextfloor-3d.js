/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var kp=0,hh=1,zp=2;var Go=1,Vp=2,Fr=3,fi=0,en=1,St=2,di=0,pi=1,gt=2,fh=3,Ho=4,Gp=5;var Us=100,Hp=101,Wp=102,Xp=103,qp=104,Yp=200,$p=201,Kp=202,Zp=203,dh=204,ph=205,Jp=206,jp=207,Qp=208,em=209,tm=210,nm=211,im=212,sm=213,rm=214,ul=0,hl=1,fl=2,yr=3,dl=4,pl=5,ml=6,gl=7,Ol=0,om=1,am=2,Zn=0,mh=1,gh=2,xh=3,bh=4,yh=5,_h=6,vh=7,Ku="attached",lm="detached",Mh=300,rs=301,Bs=302,Ul=303,Bl=304,Wo=306,Kn=1e3,fn=1001,_r=1002,Ot=1003,kl=1004;var ks=1005;var Ut=1006,Dr=1007;var Jn=1008;var vn=1009,Sh=1010,wh=1011,Nr=1012,zl=1013,jn=1014,Pn=1015,Qn=1016,Vl=1017,Gl=1018,Or=1020,Th=35902,Ah=35899,Eh=1021,Rh=1022,Ln=1023,oi=1026,os=1027,Hl=1028,Wl=1029,as=1030,Xl=1031;var ql=1033,Xo=33776,qo=33777,Yo=33778,$o=33779,Yl=35840,$l=35841,Kl=35842,Zl=35843,Jl=36196,jl=37492,Ql=37496,ec=37488,tc=37489,Ko=37490,nc=37491,ic=37808,sc=37809,rc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,hc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,xc=36492,bc=36494,yc=36495,_c=36283,vc=36284,Zo=36285,Mc=36286;var ws=2300,Ts=2301,al=2302,Zu=2303,Ju=2400,ju=2401,Qu=2402,cm=2500;var Ch=0,Jo=1,Ur=2,um=3200;var jo=0,hm=1,Oi="",Mt="srgb",dn="srgb-linear",yo="linear",mt="srgb";var ll=7680;var fm=519,dm=512,pm=513,mm=514,Sc=515,gm=516,xm=517,wc=518,bm=519,Ih=35044,Ph=35048;var Lh="300 es",Yn=2e3,vr=2001;function Bx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ym(){let i=Mr("canvas");return i.style.display="block",i}var Kd={},Sr=null;function _o(...i){let e="THREE."+i.shift();Sr?Sr("log",e,...i):console.log(e,...i)}function _m(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=_m(i);let e="THREE."+i.shift();if(Sr)Sr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Be(...i){i=_m(i);let e="THREE."+i.shift();if(Sr)Sr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ss(...i){let e=i.join(" ");e in Kd||(Kd[e]=!0,Ie(...i))}function vm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mm={[ul]:hl,[fl]:ml,[dl]:gl,[yr]:pl,[hl]:ul,[ml]:fl,[gl]:dl,[pl]:yr},ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zd=1234567,xo=Math.PI/180,As=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Fh(i,e){return(i%e+e)%e}function zx(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Vx(i,e,t){return i!==e?(t-i)/(e-i):0}function bo(i,e,t){return(1-t)*i+t*e}function Gx(i,e,t,n){return bo(i,e,1-Math.exp(-t*n))}function Hx(i,e=1){return e-Math.abs(Fh(i,e*2)-e)}function Wx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yx(i,e){return i+Math.random()*(e-i)}function $x(i){return i*(.5-Math.random())}function Kx(i){i!==void 0&&(Zd=i);let e=Zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zx(i){return i*xo}function Jx(i){return i*As}function jx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Qx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function eb(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tb(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Dh={DEG2RAD:xo,RAD2DEG:As,generateUUID:$n,clamp:tt,euclideanModulo:Fh,mapLinear:zx,inverseLerp:Vx,lerp:bo,damp:Gx,pingpong:Hx,smoothstep:Wx,smootherstep:Xx,randInt:qx,randFloat:Yx,randFloatSpread:$x,seededRandom:Kx,degToRad:Zx,radToDeg:Jx,isPowerOfTwo:jx,ceilPowerOfTwo:Qx,floorPowerOfTwo:eb,setQuaternionFromProperEuler:tb,normalize:yt,denormalize:qn},kh=class kh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kh.prototype.isVector2=!0;var Ne=kh,En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),v=Math.sin(y);p=Math.sin(p*y)/v,a=Math.sin(a*y)/v,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},zh=class zh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zh.prototype.isVector3=!0;var B=zh,wu=new B,Jd=new En,Vh=class Vh{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=s[0],g=s[3],p=s[6],y=s[1],v=s[4],b=s[7],_=s[2],S=s[5],E=s[8];return r[0]=o*x+a*y+l*_,r[3]=o*g+a*v+l*S,r[6]=o*p+a*b+l*E,r[1]=c*x+u*y+h*_,r[4]=c*g+u*v+h*S,r[7]=c*p+u*b+h*E,r[2]=f*x+d*y+m*_,r[5]=f*g+d*v+m*S,r[8]=f*p+d*b+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=t*h+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tu.makeScale(e,t)),this}rotate(e){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tu.makeRotation(-e)),this}translate(e,t){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;var We=Vh,Tu=new We,jd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nb(){let i={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dn]:{primaries:e,whitePoint:n,transfer:yo,toXYZ:jd,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:jd,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var Je=nb();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var er,xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{er===void 0&&(er=Mr("canvas")),er.width=e.width,er.height=e.height;let s=er.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=er}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ri(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ib=0,wr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Au(s[o].image)):r.push(Au(s[o]))}else r=Au(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Au(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var sb=0,Eu=new B,Yt=class i extends ai{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fn,s=fn,r=Ut,o=Jn,a=Ln,l=vn,c=i.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=$n(),this.name="",this.source=new wr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eu).x}get height(){return this.source.getSize(Eu).y}get depth(){return this.source.getSize(Eu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case _r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case _r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Mh;Yt.DEFAULT_ANISOTROPY=1;var Gh=class Gh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,b=(d+1)/2,_=(p+1)/2,S=(u+f)/4,E=(h+x)/4,M=(m+g)/4;return v>b&&v>_?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=S/n,r=E/n):b>_?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=S/s,r=M/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=E/r,s=M/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;var _t=Gh,bl=class extends ai{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Yt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new wr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vo=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Nl=class Nl{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,m,x,g)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,ob)}lookAt(e,t,n){let s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Yi.crossVectors(n,Tn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Yi.crossVectors(n,Tn)),Yi.normalize(),Pa.crossVectors(Tn,Yi),s[0]=Yi.x,s[4]=Pa.x,s[8]=Tn.x,s[1]=Yi.y,s[5]=Pa.y,s[9]=Tn.y,s[2]=Yi.z,s[6]=Pa.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],v=n[7],b=n[11],_=n[15],S=s[0],E=s[4],M=s[8],A=s[12],P=s[1],C=s[5],I=s[9],L=s[13],T=s[2],F=s[6],O=s[10],U=s[14],V=s[3],k=s[7],z=s[11],H=s[15];return r[0]=o*S+a*P+l*T+c*V,r[4]=o*E+a*C+l*F+c*k,r[8]=o*M+a*I+l*O+c*z,r[12]=o*A+a*L+l*U+c*H,r[1]=u*S+h*P+f*T+d*V,r[5]=u*E+h*C+f*F+d*k,r[9]=u*M+h*I+f*O+d*z,r[13]=u*A+h*L+f*U+d*H,r[2]=m*S+x*P+g*T+p*V,r[6]=m*E+x*C+g*F+p*k,r[10]=m*M+x*I+g*O+p*z,r[14]=m*A+x*L+g*U+p*H,r[3]=y*S+v*P+b*T+_*V,r[7]=y*E+v*C+b*F+_*k,r[11]=y*M+v*I+b*O+_*z,r[15]=y*A+v*L+b*U+_*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],y=l*d-c*f,v=a*d-c*h,b=a*f-l*h,_=o*d-c*u,S=o*f-l*u,E=o*h-a*u;return t*(x*y-g*v+p*b)-n*(m*y-g*_+p*S)+s*(m*v-x*_+p*E)-r*(m*b-x*S+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],y=t*a-n*o,v=t*l-s*o,b=t*c-r*o,_=n*l-s*a,S=n*c-r*a,E=s*c-r*l,M=u*x-h*m,A=u*g-f*m,P=u*p-d*m,C=h*g-f*x,I=h*p-d*x,L=f*p-d*g,T=y*L-v*I+b*C+_*P-S*A+E*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/T;return e[0]=(a*L-l*I+c*C)*F,e[1]=(s*I-n*L-r*C)*F,e[2]=(x*E-g*S+p*_)*F,e[3]=(f*S-h*E-d*_)*F,e[4]=(l*P-o*L-c*A)*F,e[5]=(t*L-s*P+r*A)*F,e[6]=(g*b-m*E-p*v)*F,e[7]=(u*E-f*b+d*v)*F,e[8]=(o*I-a*P+c*M)*F,e[9]=(n*P-t*I-r*M)*F,e[10]=(m*S-x*b+p*y)*F,e[11]=(h*b-u*S-d*y)*F,e[12]=(a*A-o*C-l*M)*F,e[13]=(t*C-n*A+s*M)*F,e[14]=(x*v-m*_-g*y)*F,e[15]=(u*_-h*v+f*y)*F,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,x=o*u,g=o*h,p=a*h,y=l*c,v=l*u,b=l*h,_=n.x,S=n.y,E=n.z;return s[0]=(1-(x+p))*_,s[1]=(d+b)*_,s[2]=(m-v)*_,s[3]=0,s[4]=(d-b)*S,s[5]=(1-(f+p))*S,s[6]=(g+y)*S,s[7]=0,s[8]=(m+v)*E,s[9]=(g-y)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),l=tr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Gn.copy(this);let c=1/o,u=1/a,h=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Yn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===vr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Yn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Yn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===vr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Nl.prototype.isMatrix4=!0;var Xe=Nl,tr=new B,Gn=new Xe,rb=new B(0,0,0),ob=new B(1,1,1),Yi=new B,Pa=new B,Tn=new B,ep=new Xe,tp=new En,li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};li.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ab=0,np=new B,nr=new En,vi=new Xe,La=new B,so=new B,lb=new B,cb=new En,ip=new B(1,0,0),sp=new B(0,1,0),rp=new B(0,0,1),op={type:"added"},ub={type:"removed"},ir={type:"childadded",child:null},Ru={type:"childremoved",child:null},At=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new li,n=new En,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(so,La,this.up):vi.lookAt(La,so,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(vi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),ir.child=e,this.dispatchEvent(ir),ir.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ub),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new B(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},hb={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Cu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Fh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cu(o,r,e+1/3),this.g=Cu(o,r,e),this.b=Cu(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(rn.copy(this),e),Math.round(tt(rn.r*255,0,255))*65536+Math.round(tt(rn.g*255,0,255))*256+Math.round(tt(rn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Mt){Je.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Fa);let n=bo($i.h,Fa.h,t),s=bo($i.s,Fa.s,t),r=bo($i.l,Fa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Q;Q.NAMES=Sm;var Es=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ci=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=new B,Mi=new B,Iu=new B,Si=new B,sr=new B,rr=new B,ap=new B,Pu=new B,Lu=new B,Fu=new B,Du=new _t,Nu=new _t,Ou=new _t,Ei=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),Mi.subVectors(n,t),Iu.subVectors(e,t);let o=Hn.dot(Hn),a=Hn.dot(Mi),l=Hn.dot(Iu),c=Mi.dot(Mi),u=Mi.dot(Iu),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Du.setScalar(0),Nu.setScalar(0),Ou.setScalar(0),Du.fromBufferAttribute(e,t),Nu.fromBufferAttribute(e,n),Ou.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Du,r.x),o.addScaledVector(Nu,r.y),o.addScaledVector(Ou,r.z),o}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),Mi.subVectors(e,t),Hn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Hn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,n),rr.subVectors(r,n),Pu.subVectors(e,n);let l=sr.dot(Pu),c=rr.dot(Pu);if(l<=0&&c<=0)return t.copy(n);Lu.subVectors(e,s);let u=sr.dot(Lu),h=rr.dot(Lu);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(sr,o);Fu.subVectors(e,r);let d=sr.dot(Fu),m=rr.dot(Fu);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(rr,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return ap.subVectors(r,s),a=(h-u)/(h-u+(d-m)),t.copy(s).addScaledVector(ap,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bt=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Da.copy(n.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Na.subVectors(this.max,ro),or.subVectors(e.a,ro),ar.subVectors(e.b,ro),lr.subVectors(e.c,ro),Ki.subVectors(ar,or),Zi.subVectors(lr,ar),ys.subVectors(or,lr);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-ys.z,ys.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,ys.z,0,-ys.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-ys.y,ys.x,0];return!Uu(t,or,ar,lr,Na)||(t=[1,0,0,0,1,0,0,0,1],!Uu(t,or,ar,lr,Na))?!1:(Oa.crossVectors(Ki,Zi),t=[Oa.x,Oa.y,Oa.z],Uu(t,or,ar,lr,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wi=[new B,new B,new B,new B,new B,new B,new B,new B],Wn=new B,Da=new Bt,or=new B,ar=new B,lr=new B,Ki=new B,Zi=new B,ys=new B,ro=new B,Na=new B,Oa=new B,_s=new B;function Uu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wt=new B,Ua=new Ne,fb=0,qt=class extends ai{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Mo=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Rs=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},db=new Bt,oo=new B,Bu=new B,gn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):db.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);let t=oo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(oo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Bu)),this.expandByPoint(oo.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},pb=0,Dn=new Xe,ku=new At,cr=new B,An=new Bt,ao=new Bt,jt=new B,ze=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bx(e)?Rs:Mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return ku.lookAt(e),ku.updateMatrix(),this.applyMatrix4(ku.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(An.min,ao.min),An.expandByPoint(jt),jt.addVectors(An.max,ao.max),An.expandByPoint(jt)):(An.expandByPoint(ao.min),An.expandByPoint(ao.max))}An.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)jt.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(e,c),jt.add(cr)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new B,l[M]=new B;let c=new B,u=new B,h=new B,f=new Ne,d=new Ne,m=new Ne,x=new B,g=new B;function p(M,A,P){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,A),h.fromBufferAttribute(n,P),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,P),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(C),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(C),a[M].add(x),a[A].add(x),a[P].add(x),l[M].add(g),l[A].add(g),l[P].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,A=y.length;M<A;++M){let P=y[M],C=P.start,I=P.count;for(let L=C,T=C+I;L<T;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new B,b=new B,_=new B,S=new B;function E(M){_.fromBufferAttribute(s,M),S.copy(_);let A=a[M];v.copy(A),v.sub(_.multiplyScalar(_.dot(A))).normalize(),b.crossVectors(S,A);let C=b.dot(l[M])<0?-1:1;o.setXYZW(M,v.x,v.y,v.z,C)}for(let M=0,A=y.length;M<A;++M){let P=y[M],C=P.start,I=P.count;for(let L=C,T=C+I;L<T;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new qt(f,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hn=new B,Qi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},zu=new B,mb=new B,gb=new We,Xn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=zu.subVectors(n,t).cross(mb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(zu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||gb.getNormalMatrix(e),s=this.coplanarPoint(zu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xb=0,an=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=pi,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ll,this.stencilZFail=ll,this.stencilZPass=ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},es=class extends an{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,lo=new B,hr=new B,fr=new B,dr=new Ne,co=new Ne,wm=new Xe,Ba=new B,uo=new B,ka=new B,lp=new Ne,Vu=new Ne,cp=new Ne,Is=class extends At{constructor(e=new es){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cs(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Qi(n,3,0,!1)),ur.setAttribute("uv",new Qi(n,2,3,!1))}this.geometry=ur,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Be('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),wm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-fr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;za(Ba.set(-.5,-.5,0),fr,o,hr,s,r),za(uo.set(.5,-.5,0),fr,o,hr,s,r),za(ka.set(.5,.5,0),fr,o,hr,s,r),lp.set(0,0),Vu.set(1,0),cp.set(1,1);let a=e.ray.intersectTriangle(Ba,uo,ka,!1,lo);if(a===null&&(za(uo.set(-.5,.5,0),fr,o,hr,s,r),Vu.set(0,1),a=e.ray.intersectTriangle(Ba,ka,uo,!1,lo),a===null))return;let l=e.ray.origin.distanceTo(lo);l<e.near||l>e.far||t.push({distance:l,point:lo.clone(),uv:Ei.getInterpolation(lo,Ba,uo,ka,lp,Vu,cp,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function za(i,e,t,n,s,r){dr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(co.x=r*dr.x-s*dr.y,co.y=s*dr.x+r*dr.y):co.copy(dr),i.copy(e),i.x+=co.x,i.y+=co.y,i.applyMatrix4(wm)}var Ti=new B,Gu=new B,Va=new B,Ga=new B,ts=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Gu.copy(e).add(t).multiplyScalar(.5),Va.copy(t).sub(e).normalize(),Ga.copy(this.origin).sub(Gu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Va),a=Ga.dot(this.direction),l=-Ga.dot(Va),c=Ga.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Gu).addScaledVector(Va,f),d}intersectSphere(e,t){if(e.radius<0)return null;Ti.subVectors(e.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=n.x-o.x,y=n.y-o.y,v=n.z-o.z,b=Math.abs(l),_=Math.abs(c),S=Math.abs(u),E,M,A,P,C,I,L,T,F,O,U,V;if(b>=_&&b>=S?(A=l,I=h,F=m,V=p,l>=0?(E=c,M=u,P=f,C=d,L=x,T=g,O=y,U=v):(E=u,M=c,P=d,C=f,L=g,T=x,O=v,U=y)):_>=S?(A=c,I=f,F=x,V=y,c>=0?(E=u,M=l,P=d,C=h,L=g,T=m,O=v,U=p):(E=l,M=u,P=h,C=d,L=m,T=g,O=p,U=v)):(A=u,I=d,F=g,V=v,u>=0?(E=l,M=c,P=h,C=f,L=m,T=x,O=p,U=y):(E=c,M=l,P=f,C=h,L=x,T=m,O=y,U=p)),A===0)return null;let k=E/A,z=M/A,H=1/A,te=P-k*I,Z=C-z*I,ce=L-k*F,ue=T-z*F,Oe=O-k*V,q=U-z*V,j=Oe*ue-q*ce,ae=te*q-Z*Oe,Te=ce*Z-ue*te;if(s){if(j<0||ae<0||Te<0)return null}else if((j<0||ae<0||Te<0)&&(j>0||ae>0||Te>0))return null;let be=j+ae+Te;if(be===0)return null;let Ge=H*(j*I+ae*F+Te*V);return(be>0?Ge<0:Ge>0)?null:this.at(Ge/be,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},up=new Xe,vs=new ts,Ha=new gn,hp=new B,Wa=new B,Xa=new B,qa=new B,Hu=new B,Ya=new B,fp=new B,$a=new B,Fe=class extends At{constructor(e=new ze,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(Hu.fromBufferAttribute(h,e),o?Ya.addScaledVector(Hu,u):Ya.addScaledVector(Hu.sub(t),u))}t.add(Ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Ha.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ha,hp)===null||vs.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(up.copy(r).invert(),vs.copy(e.ray).applyMatrix4(up),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,_=v;b<_;b+=3){let S=a.getX(b),E=a.getX(b+1),M=a.getX(b+2);s=Ka(this,p,e,n,c,u,h,S,E,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);s=Ka(this,o,e,n,c,u,h,y,v,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,_=v;b<_;b+=3){let S=b,E=b+1,M=b+2;s=Ka(this,p,e,n,c,u,h,S,E,M),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=g,v=g+1,b=g+2;s=Ka(this,o,e,n,c,u,h,y,v,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function bb(i,e,t,n,s,r,o,a){let l;if(e.side===en?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===fi,a),l===null)return null;$a.copy(a),$a.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($a);return c<t.near||c>t.far?null:{distance:c,point:$a.clone(),object:i}}function Ka(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Wa),i.getVertexPosition(l,Xa),i.getVertexPosition(c,qa);let u=bb(i,e,t,n,Wa,Xa,qa,fp);if(u){let h=new B;Ei.getBarycoord(fp,Wa,Xa,qa,h),s&&(u.uv=Ei.getInterpolatedAttribute(s,a,l,c,h,new Ne)),r&&(u.uv1=Ei.getInterpolatedAttribute(r,a,l,c,h,new Ne)),o&&(u.normal=Ei.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new B,materialIndex:0};Ei.getNormal(Wa,Xa,qa,f.normal),u.face=f,u.barycoord=h}return u}var ho=new _t,dp=new _t,pp=new _t,yb=new _t,mp=new Xe,Za=new B,Wu=new gn,gp=new Xe,Xu=new ts,So=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ku,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wu.copy(this.boundingSphere),Wu.applyMatrix4(s),e.ray.intersectsSphere(Wu)!==!1&&(gp.copy(s).invert(),Xu.copy(e.ray).applyMatrix4(gp),!(this.boundingBox!==null&&Xu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===lm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;dp.fromBufferAttribute(s.attributes.skinIndex,e),pp.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ho.copy(t),t.set(0,0,0,0)):(ho.set(...t,1),t.set(0,0,0)),ho.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=pp.getComponent(r);if(o!==0){let a=dp.getComponent(r);mp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(yb.copy(ho).applyMatrix4(mp),o)}}return t.isVector4&&(t.w=ho.w),t.applyMatrix4(this.bindMatrixInverse)}},Er=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rr=class extends Yt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ot,u=Ot,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xp=new Xe,_b=new Xe,wo=class i{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:_b;xp.multiplyMatrices(a,t[r]),xp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rr(t,e,e,Ln,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ie("Skeleton: No bone found with UUID:",r),o=new Er),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ii=class extends qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new Xe,bp=new Xe,Ja=[],yp=new Bt,vb=new Xe,fo=new Fe,po=new gn,Ps=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vb)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),yp.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),po.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(po)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fo.geometry=this.geometry,fo.material=this.material,fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),po.copy(this.boundingSphere),po.applyMatrix4(n),e.ray.intersectsSphere(po)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),bp.multiplyMatrices(n,pr),fo.matrixWorld=bp,fo.raycast(e,Ja);for(let o=0,a=Ja.length;o<a;o++){let l=Ja[o];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rr(new Float32Array(s*this.count),s,this.count,Hl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new gn,Mb=new Ne(.5,.5),ja=new B,Cr=class{constructor(e=new Xn,t=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],v=r[13],b=r[14],_=r[15];if(s[0].setComponents(c-o,d-u,p-m,_-y).normalize(),s[1].setComponents(c+o,d+u,p+m,_+y).normalize(),s[2].setComponents(c+a,d+h,p+x,_+v).normalize(),s[3].setComponents(c-a,d-h,p-x,_-v).normalize(),n)s[4].setComponents(l,f,g,b).normalize(),s[5].setComponents(c-l,d-f,p-g,_-b).normalize();else if(s[4].setComponents(c-l,d-f,p-g,_-b).normalize(),t===Yn)s[5].setComponents(c+l,d+f,p+g,_+b).normalize();else if(t===vr)s[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=Mb.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ja.x=s.normal.x>0?e.max.x:e.min.x,ja.y=s.normal.y>0?e.max.y:e.min.y,ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var kt=class extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Q(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_l=new B,vl=new B,_p=new Xe,mo=new ts,Qa=new gn,qu=new B,vp=new B,Rn=class extends At{constructor(e=new ze,t=new kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_l.fromBufferAttribute(t,s-1),vl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_l.distanceTo(vl);e.setAttribute("lineDistance",new He(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;_p.copy(s).invert(),mo.copy(e.ray).applyMatrix4(_p);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),y=u.getX(x+1),v=el(this,e,mo,l,p,y,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=el(this,e,mo,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=el(this,e,mo,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=el(this,e,mo,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function el(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(_l.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,r),t.distanceSqToSegment(_l,vl,qu,vp)>n)return;qu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(qu);if(!(c<e.near||c>e.far))return{distance:c,point:vp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Mp=new B,Sp=new B,xn=class extends Rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Mp.fromBufferAttribute(t,s),Sp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Mp.distanceTo(Sp);e.setAttribute("lineDistance",new He(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},To=class extends Rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bn=class extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wp=new Xe,eh=new ts,tl=new gn,nl=new B,Cn=class extends At{constructor(e=new ze,t=new bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;wp.copy(s).invert(),eh.copy(e.ray).applyMatrix4(wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);nl.fromBufferAttribute(h,g),Tp(nl,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)nl.fromBufferAttribute(h,m),Tp(nl,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Tp(i,e,t,n,s,r,o){let a=eh.distanceSqToPoint(i);if(a<t){let l=new B;eh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ao=class extends Yt{constructor(e=[],t=rs,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ln=class extends Yt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ns=class extends Yt{constructor(e,t,n=jn,s,r,o,a=Ot,l=Ot,c,u=oi,h=1){if(u!==oi&&u!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ml=class extends ns{constructor(e,t=jn,n=rs,s,r,o=Ot,a=Ot,l,c=oi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Eo=class extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},is=class i extends ze{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(u,3)),this.setAttribute("uv",new He(h,2));function m(x,g,p,y,v,b,_,S,E,M,A){let P=b/E,C=_/M,I=b/2,L=_/2,T=S/2,F=E+1,O=M+1,U=0,V=0,k=new B;for(let z=0;z<O;z++){let H=z*C-L;for(let te=0;te<F;te++){let Z=te*P-I;k[x]=Z*y,k[g]=H*v,k[p]=T,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[p]=S>0?1:-1,u.push(k.x,k.y,k.z),h.push(te/E),h.push(1-z/M),U+=1}}for(let z=0;z<M;z++)for(let H=0;H<E;H++){let te=f+H+F*z,Z=f+H+F*(z+1),ce=f+(H+1)+F*(z+1),ue=f+(H+1)+F*z;l.push(te,Z,ue),l.push(Z,ce,ue),V+=6}a.addGroup(d,V,A),d+=V,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Sb(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Tm(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Rb(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let f=t;f<s;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ro(r,o,t,a,l,c,0),o}function Tm(i,e,t,n,s){let r;if(s===kb(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ap(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ap(o/n|0,i[o],i[o+1],r);return r&&Ir(r,r.next)&&(Io(r),r=r.next),r}function Ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ir(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ro(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Fb(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Tb(i,n,s,r):wb(i)){e.push(l.i,i.i,c.i),Io(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ab(Ls(i),e),Ro(i,e,t,n,s,r,2)):o===2&&Eb(i,e,t,n,s,r):Ro(Ls(i),e,t,n,s,r,1);break}}}function wb(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&go(s,a,r,l,o,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Tb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Dt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),p=th(d,m,e,t,n),y=th(x,g,e,t,n),v=i.prevZ,b=i.nextZ;for(;v&&v.z>=p&&b&&b.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&go(a,u,l,h,c,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&go(a,u,l,h,c,f,b.x,b.y)&&Dt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==o&&go(a,u,l,h,c,f,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==s&&b!==o&&go(a,u,l,h,c,f,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ab(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Ir(n,s)&&Em(n,t,t.next,s)&&Co(n,s)&&Co(s,n)&&(e.push(n.i,t.i,s.i),Io(t),Io(t.next),t=i=s),t=t.next}while(t!==i);return Ls(t)}function Eb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ob(o,a)){let l=Rm(o,a);o=Ls(o,o.next),l=Ls(l,l.next),Ro(o,e,t,n,s,r,0),Ro(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rb(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Tm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Nb(c))}s.sort(Cb);for(let r=0;r<s.length;r++)t=Ib(s[r],t);return t}function Cb(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Ib(i,e){let t=Pb(i,e);if(!t)return e;let n=Rm(t,i);return Ls(n,n.next),Ls(t,t.next)}function Pb(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Ir(i,t))return t;do{if(Ir(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Am(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Co(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Lb(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Lb(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Fb(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Db(s)}function Db(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Nb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Am(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function go(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Am(i,e,t,n,s,r,o,a)}function Ob(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ub(i,e)&&(Co(i,e)&&Co(e,i)&&Bb(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Ir(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ir(i,e){return i.x===e.x&&i.y===e.y}function Em(i,e,t,n){let s=sl(Dt(i,e,t)),r=sl(Dt(i,e,n)),o=sl(Dt(t,n,i)),a=sl(Dt(t,n,e));return!!(s!==r&&o!==a||s===0&&il(i,t,e)||r===0&&il(i,n,e)||o===0&&il(t,i,n)||a===0&&il(t,e,n))}function il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function Ub(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Em(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Co(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function Bb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rm(i,e){let t=nh(i.i,i.x,i.y),n=nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ap(i,e,t,n){let s=nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Io(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kb(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ih=class{static triangulate(e,t,n=2){return Sb(e,t,n)}},Po=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ep(e),Rp(n,e);let o=e.length;t.forEach(Ep);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Rp(n,t[l]);let a=ih.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Ep(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Rp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Nn=class i extends ze{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*f-o;for(let v=0;v<c;v++){let b=v*h-r;m.push(b,-y,0),x.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,b=y+c*(p+1),_=y+1+c*(p+1),S=y+1+c*p;d.push(v,b,S),d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Fs=class i extends ze{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new B,m=new Ne;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,v=y,b=y+n+1,_=y+n+2,S=y+1;a.push(v,b,S),a.push(b,_,S)}}this.setIndex(a),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Lo=class i extends ze{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new B,f=new B,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],v=p/n,b=o+v*a,_=e*Math.cos(b),S=Math.sqrt(e*e-_*_),E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let M=0;M<=t;M++){let A=M/t,P=s+A*r;h.x=-S*Math.cos(P),h.y=_,h.z=S*Math.sin(P),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(A+E,1-v),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let v=u[p][y+1],b=u[p][y],_=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&d.push(v,b,S),(p!==n-1||l<Math.PI)&&d.push(b,_,S)}this.setIndex(d),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function zs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Cp(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Cp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function cn(i){let e={};for(let t=0;t<i.length;t++){let n=zs(i[t]);for(let s in n)e[s]=n[s]}return e}function Cp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Cm={clone:zs,merge:cn},Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Q().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new We().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sl=class extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ci=class extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends ci{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Q(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Fo=class extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ol,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wl=class extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Hb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Ip(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Wb(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Al=class extends ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ju:r=e,a=2*t-n;break;case Qu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ju:o=e,l=2*n-t;break;case Qu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let _=0;_!==a;++_)r[_]=p*o[u+_]+y*o[c+_]+v*o[l+_]+b*o[h+_];return r}},El=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Rl=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cl=class extends ui{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(s-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,y=h[p],v=h[p+1],b=e*f+m*2,_=u[b],S=u[b+1],E=qb(n,t,y,_,s);r[m]=Im(E,x,v,S,g)}return r}};function Im(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Xb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function qb(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Im(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Xb(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),cl(e.settings)&&(n.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case Ts:t=this.InterpolantFactoryMethodLinear;break;case al:t=this.InterpolantFactoryMethodSmooth;break;case Zu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Ts;case this.InterpolantFactoryMethodSmooth:return al;case this.InterpolantFactoryMethodBezier:return Zu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;cl(this.settings)&&(Pp(this.settings.inTangents,e),Pp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Be("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Be("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&kx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Be("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===al,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,cl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pp(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ts;var Pi=class extends _n{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=ws;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="color";var Li=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="number";var Il=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fi=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends _n{constructor(e,t,n){super(e,t,n)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ws;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};ss.prototype.ValueTypeName="vector";var No=class{constructor(e="",t=-1,n=[],s=cm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($b(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Hb(l);l=Ip(l,1,u),c=Ip(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Li(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Yb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Li;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Do;case"quaternion":return Fi;case"bool":case"boolean":return Pi;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $b(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Yb(i.type);if(i.times===void 0){let n=[],s=[];Wb(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),cl(i.settings)&&(t.settings={inTangents:ji(i.settings.inTangents,Float32Array),outTangents:ji(i.settings.outTangents,Float32Array)}),t}var ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Lp(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Lp(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Lp(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Pl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pm=new Pl,hi=class{constructor(e){this.manager=e!==void 0?e:Pm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ai={},sh=class extends Error{constructor(e,t){super(e),this.response=t}},Pr=class extends hi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:n,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ai[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:v,value:b})=>{if(v)p.close();else{x+=b.byteLength;let _=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let S=0,E=u.length;S<E;S++){let M=u[S];M.onProgress&&M.onProgress(_)}p.enqueue(b),y()}},v=>{p.error(v)})}}});return new Response(g)}else throw new sh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{ri.add(`file:${e}`,c);let u=Ai[e];delete Ai[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var mr=new WeakMap,Ll=class extends hi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=mr.get(o);h===void 0&&(h=[],mr.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Mr("img");function l(){u(),t&&t(this);let h=mr.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}mr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),ri.remove(`image:${e}`);let f=mr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}mr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ri.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Oo=class extends hi{constructor(e){super(e)}load(e,t,n,s){let r=new Yt,o=new Ll(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ds=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Uo=class extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yu=new Xe,Fp=new B,Dp=new B,Lr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fp),Dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===vr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rl=new B,ol=new En,si=new B,Bo=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(rl,ol,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,ol,si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(rl,ol,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(rl,ol,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new B,Np=new Ne,Op=new Ne,Xt=class extends Bo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Np,Op),t.subVectors(Op,Np)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},rh=class extends Lr{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=As*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ko=class extends Ds{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},oh=class extends Lr{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},Ns=class extends Ds{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},On=class extends Bo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends Lr{constructor(){super(new On(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Os=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ni=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var $u=new WeakMap,zo=class extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{$u.has(o)===!0?(s&&s($u.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),$u.set(l,c),ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var gr=-90,xr=1,Fl=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(gr,xr,e,t);s.layers=this.layers,this.add(s);let r=new Xt(gr,xr,e,t);r.layers=this.layers,this.add(r);let o=new Xt(gr,xr,e,t);o.layers=this.layers,this.add(o);let a=new Xt(gr,xr,e,t);a.layers=this.layers,this.add(a);let l=new Xt(gr,xr,e,t);l.layers=this.layers,this.add(l);let c=new Xt(gr,xr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Dl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Oh="\\[\\]\\.:\\/",Kb=new RegExp("["+Oh+"]","g"),Uh="[^"+Oh+"]",Zb="[^"+Oh.replace("\\.","")+"]",Jb=/((?:WC+[\/:])*)/.source.replace("WC",Uh),jb=/(WCOD+)?/.source.replace("WCOD",Zb),Qb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),ty=new RegExp("^"+Jb+jb+Qb+ey+"$"),ny=["material","materials","bones","map"],lh=class{constructor(e,t,n){let s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kb,"")}static parseTrackName(e){let t=ty.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ny.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Be("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=lh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E2=new Float32Array(1);var Up=new Xe,Vo=class{constructor(e,t,n=0,s=1/0){this.ray=new ts(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Up.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Up),this}intersectObject(e,t=!0,n=[]){return ch(e,this,n,t),n.sort(Bp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ch(e[s],this,n,t);return n.sort(Bp),n}};function Bp(i,e){return i.distance-e.distance}function ch(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ch(r[o],e,t,!0)}}var Hh=class Hh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Hh.prototype.isMatrix2=!0;var uh=Hh;function Bh(i,e,t,n){let s=iy(n);switch(t){case Eh:return i*e;case Hl:return i*e/s.components*s.byteLength;case Wl:return i*e/s.components*s.byteLength;case as:return i*e*2/s.components*s.byteLength;case Xl:return i*e*2/s.components*s.byteLength;case Rh:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case ql:return i*e*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:case Zl:return Math.max(i,16)*Math.max(e,8)/4;case Yl:case Kl:return Math.max(i,8)*Math.max(e,8)/2;case Jl:case jl:case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ql:case Ko:case nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xc:case bc:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _c:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zo:case Mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iy(i){switch(i){case vn:case Sh:return{byteLength:1,components:1};case Nr:case wh:case Qn:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case jn:case zl:case Pn:return{byteLength:4,components:1};case Th:case Ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Qm(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ry(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yy=`#ifdef USE_IRIDESCENCE
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
#endif`,_y=`#ifdef USE_BUMPMAP
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
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cy=`#define PI 3.141592653589793
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
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Py=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,$y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,e_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,i_=`PhysicalMaterial material;
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
#endif`,s_=`uniform sampler2D dfgLUT;
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
}`,r_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,a_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,p_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,m_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,g_=`#if defined( USE_POINTS_UV )
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
#endif`,x_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,__=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M_=`#ifdef USE_MORPHTARGETS
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
#endif`,S_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,C_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,P_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,B_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,V_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,q_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,Z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fv=`#include <common>
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
}`,dv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`uniform float scale;
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
}`,yv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,vv=`uniform vec3 diffuse;
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
}`,Mv=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,wv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Ev=`#define NORMAL
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
}`,Rv=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Iv=`#define STANDARD
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
}`,Pv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Fv=`#define TOON
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
}`,Dv=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Uv=`uniform vec3 color;
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
}`,Bv=`uniform float rotation;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:oy,alphahash_pars_fragment:ay,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:hy,aomap_fragment:fy,aomap_pars_fragment:dy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:xy,bsdfs:by,iridescence_fragment:yy,bumpmap_pars_fragment:_y,clipping_planes_fragment:vy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:wy,color_fragment:Ty,color_pars_fragment:Ay,color_pars_vertex:Ey,color_vertex:Ry,common:Cy,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Py,displacementmap_pars_vertex:Ly,displacementmap_vertex:Fy,emissivemap_fragment:Dy,emissivemap_pars_fragment:Ny,colorspace_fragment:Oy,colorspace_pars_fragment:Uy,envmap_fragment:By,envmap_common_pars_fragment:ky,envmap_pars_fragment:zy,envmap_pars_vertex:Vy,envmap_physical_pars_fragment:jy,envmap_vertex:Gy,fog_vertex:Hy,fog_pars_vertex:Wy,fog_fragment:Xy,fog_pars_fragment:qy,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:$y,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:Zy,lights_pars_begin:Jy,lights_toon_fragment:Qy,lights_toon_pars_fragment:e_,lights_phong_fragment:t_,lights_phong_pars_fragment:n_,lights_physical_fragment:i_,lights_physical_pars_fragment:s_,lights_fragment_begin:r_,lights_fragment_maps:o_,lights_fragment_end:a_,lightprobes_pars_fragment:l_,logdepthbuf_fragment:c_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:h_,logdepthbuf_vertex:f_,map_fragment:d_,map_pars_fragment:p_,map_particle_fragment:m_,map_particle_pars_fragment:g_,metalnessmap_fragment:x_,metalnessmap_pars_fragment:b_,morphinstance_vertex:y_,morphcolor_vertex:__,morphnormal_vertex:v_,morphtarget_pars_vertex:M_,morphtarget_vertex:S_,normal_fragment_begin:w_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:E_,normal_vertex:R_,normalmap_pars_fragment:C_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:P_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:F_,opaque_fragment:D_,packing:N_,premultiplied_alpha_fragment:O_,project_vertex:U_,dithering_fragment:B_,dithering_pars_fragment:k_,roughnessmap_fragment:z_,roughnessmap_pars_fragment:V_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:H_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:q_,skinning_pars_vertex:Y_,skinning_vertex:$_,skinnormal_vertex:K_,specularmap_fragment:Z_,specularmap_pars_fragment:J_,tonemapping_fragment:j_,tonemapping_pars_fragment:Q_,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:lv,backgroundCube_frag:cv,cube_vert:uv,cube_frag:hv,depth_vert:fv,depth_frag:dv,distance_vert:pv,distance_frag:mv,equirect_vert:gv,equirect_frag:xv,linedashed_vert:bv,linedashed_frag:yv,meshbasic_vert:_v,meshbasic_frag:vv,meshlambert_vert:Mv,meshlambert_frag:Sv,meshmatcap_vert:wv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:Ev,meshphong_vert:Rv,meshphong_frag:Cv,meshphysical_vert:Iv,meshphysical_frag:Pv,meshtoon_vert:Lv,meshtoon_frag:Fv,points_vert:Dv,points_frag:Nv,shadow_vert:Ov,shadow_frag:Uv,sprite_vert:Bv,sprite_frag:kv},xe={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},gi={basic:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Q(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Q(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([xe.points,xe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([xe.common,xe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([xe.sprite,xe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:cn([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:cn([xe.lights,xe.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};gi.physical={uniforms:cn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Tc={r:0,b:0,g:0},zv=new Xe,e0=new We;e0.set(-1,0,0,0,1,0,0,0,1);function Vv(i,e,t,n,s,r){let o=new Q(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let v=y.isScene===!0?y.background:null;if(v&&v.isTexture){let b=y.backgroundBlurriness>0;v=e.get(v,b)}return v}function m(y){let v=!1,b=d(y);b===null?g(o,a):b&&b.isColor&&(g(b,1),v=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,v){let b=d(v);b&&(b.isCubeTexture||b.mapping===Wo)?(c===void 0&&(c=new Fe(new is(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:zs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zv.makeRotationFromEuler(v.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(e0),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==mt,(u!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Fe(new Nn(2,2),new In({name:"BackgroundMaterial",uniforms:zs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==mt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,v){y.getRGB(Tc,Nh(i)),t.buffers.color.setClear(Tc.r,Tc.g,Tc.b,v,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Gv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(C,I,L,T,F){let O=!1,U=h(C,T,L,I);r!==U&&(r=U,c(r.object)),O=d(C,T,L,F),O&&m(C,T,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,b(C,I,L,T),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function u(C){return i.deleteVertexArray(C)}function h(C,I,L,T){let F=T.wireframe===!0,O=n[I.id];O===void 0&&(O={},n[I.id]=O);let U=C.isInstancedMesh===!0?C.id:0,V=O[U];V===void 0&&(V={},O[U]=V);let k=V[L.id];k===void 0&&(k={},V[L.id]=k);let z=k[F];return z===void 0&&(z=f(l()),k[F]=z),z}function f(C){let I=[],L=[],T=[];for(let F=0;F<t;F++)I[F]=0,L[F]=0,T[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:T,object:C,attributes:{},index:null}}function d(C,I,L,T){let F=r.attributes,O=I.attributes,U=0,V=L.getAttributes();for(let k in V)if(V[k].location>=0){let H=F[k],te=O[k];if(te===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(te=C.instanceColor)),H===void 0||H.attribute!==te||te&&H.data!==te.data)return!0;U++}return r.attributesNum!==U||r.index!==T}function m(C,I,L,T){let F={},O=I.attributes,U=0,V=L.getAttributes();for(let k in V)if(V[k].location>=0){let H=O[k];H===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(H=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(H=C.instanceColor));let te={};te.attribute=H,H&&H.data&&(te.data=H.data),F[k]=te,U++}r.attributes=F,r.attributesNum=U,r.index=T}function x(){let C=r.newAttributes;for(let I=0,L=C.length;I<L;I++)C[I]=0}function g(C){p(C,0)}function p(C,I){let L=r.newAttributes,T=r.enabledAttributes,F=r.attributeDivisors;L[C]=1,T[C]===0&&(i.enableVertexAttribArray(C),T[C]=1),F[C]!==I&&(i.vertexAttribDivisor(C,I),F[C]=I)}function y(){let C=r.newAttributes,I=r.enabledAttributes;for(let L=0,T=I.length;L<T;L++)I[L]!==C[L]&&(i.disableVertexAttribArray(L),I[L]=0)}function v(C,I,L,T,F,O,U){U===!0?i.vertexAttribIPointer(C,I,L,F,O):i.vertexAttribPointer(C,I,L,T,F,O)}function b(C,I,L,T){x();let F=T.attributes,O=L.getAttributes(),U=I.defaultAttributeValues;for(let V in O){let k=O[V];if(k.location>=0){let z=F[V];if(z===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),z!==void 0){let H=z.normalized,te=z.itemSize,Z=e.get(z);if(Z===void 0)continue;let ce=Z.buffer,ue=Z.type,Oe=Z.bytesPerElement,q=ue===i.INT||ue===i.UNSIGNED_INT||z.gpuType===zl;if(z.isInterleavedBufferAttribute){let j=z.data,ae=j.stride,Te=z.offset;if(j.isInstancedInterleavedBuffer){for(let be=0;be<k.locationSize;be++)p(k.location+be,j.meshPerAttribute);C.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let be=0;be<k.locationSize;be++)g(k.location+be);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let be=0;be<k.locationSize;be++)v(k.location+be,te/k.locationSize,ue,H,ae*Oe,(Te+te/k.locationSize*be)*Oe,q)}else{if(z.isInstancedBufferAttribute){for(let j=0;j<k.locationSize;j++)p(k.location+j,z.meshPerAttribute);C.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let j=0;j<k.locationSize;j++)g(k.location+j);i.bindBuffer(i.ARRAY_BUFFER,ce);for(let j=0;j<k.locationSize;j++)v(k.location+j,te/k.locationSize,ue,H,te*Oe,te/k.locationSize*j*Oe,q)}}else if(U!==void 0){let H=U[V];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(k.location,H);break;case 3:i.vertexAttrib3fv(k.location,H);break;case 4:i.vertexAttrib4fv(k.location,H);break;default:i.vertexAttrib1fv(k.location,H)}}}}y()}function _(){A();for(let C in n){let I=n[C];for(let L in I){let T=I[L];for(let F in T){let O=T[F];for(let U in O)u(O[U].object),delete O[U];delete T[F]}}delete n[C]}}function S(C){if(n[C.id]===void 0)return;let I=n[C.id];for(let L in I){let T=I[L];for(let F in T){let O=T[F];for(let U in O)u(O[U].object),delete O[U];delete T[F]}}delete n[C.id]}function E(C){for(let I in n){let L=n[I];for(let T in L){let F=L[T];if(F[C.id]===void 0)continue;let O=F[C.id];for(let U in O)u(O[U].object),delete O[U];delete F[C.id]}}}function M(C){for(let I in n){let L=n[I],T=C.isInstancedMesh===!0?C.id:0,F=L[T];if(F!==void 0){for(let O in F){let U=F[O];for(let V in U)u(U[V].object),delete U[V];delete F[O]}delete L[T],Object.keys(L).length===0&&delete n[I]}}}function A(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Hv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Wv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Ln&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let M=E===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==vn&&E!==Pn&&!M&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:b,maxSamples:_,samples:S}}function Xv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Xn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,v=y*4,b=p.clippingState||null;l.value=b,b=u(m,f,v,d);for(let _=0;_!==v;++_)b[_]=t[_];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,b=d;v!==x;++v,b+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var kr=4,qv=6,Yv=20,$v=256,Qo=new On,Lm=new Q,Wh=null,Xh=0,qh=0,Yh=!1,Kv=new B,Vs=new B,Vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Kv}=r;Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wh,Xh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Qn,format:Ln,colorSpace:dn,depthBuffer:!1},s=Fm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Zv(r)),this._blurMaterial=jv(r,e,t),this._ggxMaterial=Jv(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new ze,e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,s,r){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Lm),h.toneMapping=Zn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new is,new Ye({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Lm),p=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let _=this._cubeSize;Br(s,b*_,v>2?_:0,_,_),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Br(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-kr?n-m+kr:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Br(r,g,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Qo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Br(e,g,p,3*x,2*x),s.setRenderTarget(e),s.render(a,Qo)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-kr?s-this._lodMax+kr:0),f=4*(this._cubeSize-u);Br(t,h,f,3*u,2*u),o.setRenderTarget(t),o.render(l,Qo)}};function Zv(i){let e=[],t=[],n=i,s=i-kr+1+qv;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,v=p>2?0:-1,b=[y,v,0,y+2/3,v,0,y+2/3,v+1,0,y,v,0,y+2/3,v+1,0,y,v+1,0];m.set(b,d*f*p);for(let _=0;_<f;_++){let S=u[_*2]*2-1,E=u[_*2+1]*2-1;p===0?Vs.set(1,E,S):p===1?Vs.set(-S,1,-E):p===2?Vs.set(-S,E,1):p===3?Vs.set(-1,E,-S):p===4?Vs.set(-S,-1,E):Vs.set(S,E,-1),Vs.toArray(x,(p*f+_)*d)}}let g=new ze;g.setAttribute("position",new qt(m,d)),g.setAttribute("outputDirection",new qt(x,d)),t.push(new Fe(g,null)),n>kr&&n--}return{lodMeshes:t,sizeLods:e}}function Fm(i,e,t){let n=new on(i,e,t);return n.texture.mapping=Wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jv(i,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function jv(i,e,t){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:Yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Dm(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Nm(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ao(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new is(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:di});r.uniforms.tEquirect.value=t;let o=new Fe(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Ut),new Fl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function Qv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ul||d===Bl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new Ec(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Ul||d===Bl,x=d===rs||d===Bs;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Vr(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Vr(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===Ul?f.mapping=rs:d===Bl&&(f.mapping=Bs),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function eM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ss("WebGLRenderer: "+n+" extension not supported."),s}}}function tM(i,e,t,n){let s={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let v=0,b=y.length;v<b;v+=3){let _=y[v+0],S=y[v+1],E=y[v+2];f.push(_,S,S,E,E,_)}}else{let y=m.array;x=m.version;for(let v=0,b=y.length/3-1;v<b;v+=3){let _=v+0,S=v+1,E=v+2;f.push(_,S,S,E,E,_)}}let g=new(m.count>=65535?Rs:Mo)(f,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function nM(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function iM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Be("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sM(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let A=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let b=a.attributes.position.count*v,_=1;b>e.maxTextureSize&&(_=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*_*4*h),E=new vo(S,b,_,h);E.type=Pn,E.needsUpdate=!0;let M=v*4;for(let P=0;P<h;P++){let C=g[P],I=p[P],L=y[P],T=b*_*4*P;for(let F=0;F<C.count;F++){let O=F*M;d===!0&&(s.fromBufferAttribute(C,F),S[T+O+0]=s.x,S[T+O+1]=s.y,S[T+O+2]=s.z,S[T+O+3]=0),m===!0&&(s.fromBufferAttribute(I,F),S[T+O+4]=s.x,S[T+O+5]=s.y,S[T+O+6]=s.z,S[T+O+7]=0),x===!0&&(s.fromBufferAttribute(L,F),S[T+O+8]=s.x,S[T+O+9]=s.y,S[T+O+10]=s.z,S[T+O+11]=L.itemSize===4?s.w:1)}}f={count:h,texture:E,size:new Ne(b,_)},n.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function rM(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var oM={[mh]:"LINEAR_TONE_MAPPING",[gh]:"REINHARD_TONE_MAPPING",[xh]:"CINEON_TONE_MAPPING",[bh]:"ACES_FILMIC_TONE_MAPPING",[_h]:"AGX_TONE_MAPPING",[vh]:"NEUTRAL_TONE_MAPPING",[yh]:"CUSTOM_TONE_MAPPING"};function aM(i,e,t,n,s,r){let o=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ze;c.setAttribute("position",new He([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new He([0,2,0,0,2,0],2));let u=new Sl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Fe(c,u),f=new On(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,y=[],v=!1;this.setSize=function(b,_){o.setSize(b,_),a!==null&&a.setSize(b,_),l!==null&&l.setSize(b,_);for(let S=0;S<y.length;S++){let E=y[S];E.setSize&&E.setSize(b,_)}},this.setEffects=function(b){y=b,v=y.length>0&&y[0].isRenderPass===!0;let _=o.width,S=o.height;y.length>0&&a===null&&(a=new on(_,S,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new on(_,S,{type:Qn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let M=y[E];M.setSize&&M.setSize(_,S)}},this.begin=function(b,_){if(x||b.toneMapping===Zn&&y.length===0)return!1;if(p=_,_!==null){let S=_.width,E=_.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return v===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(b,_){b.toneMapping=g,x=!0;let S=o,E=a;for(let M=0;M<y.length;M++){let A=y[M];A.enabled!==!1&&(A.render(b,E,S,_),A.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},Je.getTransfer(d)===mt&&(u.defines.SRGB_TRANSFER="");let M=oM[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var t0=new Yt,Zh=new ns(1,1),n0=new vo,i0=new yl,s0=new Ao,Om=[],Um=[],Bm=new Float32Array(16),km=new Float32Array(9),zm=new Float32Array(4);function Hr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Om[s];if(r===void 0&&(r=new Float32Array(s),Om[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cc(i,e){let t=Um[e];t===void 0&&(t=new Int32Array(e),Um[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function uM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function hM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function fM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;zm.set(n),i.uniformMatrix2fv(this.addr,!1,zm),Kt(t,n)}}function dM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;km.set(n),i.uniformMatrix3fv(this.addr,!1,km),Kt(t,n)}}function pM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if($t(t,n))return;Bm.set(n),i.uniformMatrix4fv(this.addr,!1,Bm),Kt(t,n)}}function mM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function xM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function bM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function yM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function vM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function MM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function SM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?wc:Sc,r=Zh):r=t0,t.setTexture2D(e||r,s)}function wM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||i0,s)}function TM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||s0,s)}function AM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||n0,s)}function EM(i){switch(i){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return hM;case 35674:return fM;case 35675:return dM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return xM;case 35669:case 35673:return bM;case 5125:return yM;case 36294:return _M;case 36295:return vM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return AM}}function RM(i,e){i.uniform1fv(this.addr,e)}function CM(i,e){let t=Hr(e,this.size,2);i.uniform2fv(this.addr,t)}function IM(i,e){let t=Hr(e,this.size,3);i.uniform3fv(this.addr,t)}function PM(i,e){let t=Hr(e,this.size,4);i.uniform4fv(this.addr,t)}function LM(i,e){let t=Hr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function FM(i,e){let t=Hr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function DM(i,e){let t=Hr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function NM(i,e){i.uniform1iv(this.addr,e)}function OM(i,e){i.uniform2iv(this.addr,e)}function UM(i,e){i.uniform3iv(this.addr,e)}function BM(i,e){i.uniform4iv(this.addr,e)}function kM(i,e){i.uniform1uiv(this.addr,e)}function zM(i,e){i.uniform2uiv(this.addr,e)}function VM(i,e){i.uniform3uiv(this.addr,e)}function GM(i,e){i.uniform4uiv(this.addr,e)}function HM(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zh:o=t0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function WM(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function XM(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function qM(i,e,t){let n=this.cache,s=e.length,r=Cc(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function YM(i){switch(i){case 5126:return RM;case 35664:return CM;case 35665:return IM;case 35666:return PM;case 35674:return LM;case 35675:return FM;case 35676:return DM;case 5124:case 35670:return NM;case 35667:case 35671:return OM;case 35668:case 35672:return UM;case 35669:case 35673:return BM;case 5125:return kM;case 36294:return zM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return qM}}var Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=EM(t.type)}},jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YM(t.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},$h=/(\w+)(\])?(\[|\.)?/g;function Vm(i,e){i.seq.push(e),i.map[e.id]=e}function $M(i,e,t){let n=i.name,s=n.length;for($h.lastIndex=0;;){let r=$h.exec(n),o=$h.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Vm(t,c===void 0?new Jh(a,i,e):new jh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Qh(a),Vm(t,h)),t=h}}}var zr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);$M(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Gm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var KM=37297,ZM=0;function JM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Hm=new We;function jM(i){Je._getMatrix(Hm,Je.workingColorSpace,i);let e=`mat3( ${Hm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case yo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+JM(i.getShaderSource(e),a)}else return r}function QM(i,e){let t=jM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var e1={[mh]:"Linear",[gh]:"Reinhard",[xh]:"Cineon",[bh]:"ACESFilmic",[_h]:"AgX",[vh]:"Neutral",[yh]:"Custom"};function t1(i,e){let t=e1[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ac=new B;function n1(){Je.getLuminanceCoefficients(Ac);let i=Ac.x.toFixed(4),e=Ac.y.toFixed(4),t=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function s1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ta(i){return i!==""}function Xm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var o1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(i){return i.replace(o1,l1)}var a1=new Map;function l1(i,e){let t=Ke[e];if(t===void 0){let n=a1.get(e);if(n!==void 0)t=Ke[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ef(t)}var c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ym(i){return i.replace(c1,u1)}function u1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $m(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var h1={[Go]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function f1(i){return h1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d1={[rs]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE_UV"};function p1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var m1={[Bs]:"ENVMAP_MODE_REFRACTION"};function g1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x1={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[om]:"ENVMAP_BLENDING_MIX",[am]:"ENVMAP_BLENDING_ADD"};function b1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x1[i.combine]||"ENVMAP_BLENDING_NONE"}function y1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f1(t),c=p1(t),u=g1(t),h=b1(t),f=y1(t),d=i1(t),m=s1(r),x=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ta).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ta).join(`
`),p.length>0&&(p+=`
`)):(g=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),p=[$m(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zn?"#define TONE_MAPPING":"",t.toneMapping!==Zn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Zn?t1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,QM("linearToOutputTexel",t.outputColorSpace),n1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=ef(o),o=Xm(o,t),o=qm(o,t),a=ef(a),a=Xm(a,t),a=qm(a,t),o=Ym(o),a=Ym(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+g+o,b=y+p+a,_=Gm(s,s.VERTEX_SHADER,v),S=Gm(s,s.FRAGMENT_SHADER,b);s.attachShader(x,_),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(_)||"",T=s.getShaderInfoLog(S)||"",F=I.trim(),O=L.trim(),U=T.trim(),V=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,_,S);else{let z=Wm(s,_,"vertex"),H=Wm(s,S,"fragment");Be("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+z+`
`+H)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(O===""||U==="")&&(k=!1);k&&(C.diagnostics={runnable:V,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:U,prefix:p}})}s.deleteShader(_),s.deleteShader(S),M=new zr(s,x),A=r1(s,x)}let M;this.getUniforms=function(){return M===void 0&&E(this),M};let A;this.getAttributes=function(){return A===void 0&&E(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,KM)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=S,this}var v1=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nf(e),t.set(e,n)),n}},nf=class{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}};function M1(i){return i===as||i===Ko||i===Zo}function S1(i,e,t,n,s,r){let o=new Tr,a=new tf,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,A,P,C,I,L){let T=C.fog,F=I.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?C.environment:null,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=e.get(M.envMap||O,U),k=V&&V.mapping===Wo?V.image.height:null,z=d[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Ie("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=H!==void 0?H.length:0,Z=0;F.morphAttributes.position!==void 0&&(Z=1),F.morphAttributes.normal!==void 0&&(Z=2),F.morphAttributes.color!==void 0&&(Z=3);let ce,ue,Oe,q;if(z){let Et=gi[z];ce=Et.vertexShader,ue=Et.fragmentShader}else{ce=M.vertexShader,ue=M.fragmentShader;let Et=a.getVertexShaderStage(M),ft=a.getFragmentShaderStage(M);a.update(M,Et,ft),Oe=Et.id,q=ft.id}let j=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),Te=I.isInstancedMesh===!0,be=I.isBatchedMesh===!0,Ge=!!M.map,rt=!!M.matcap,Ve=!!V,Ze=!!M.aoMap,ot=!!M.lightMap,je=!!M.bumpMap&&M.wireframe===!1,Pt=!!M.normalMap,Jt=!!M.displacementMap,mn=!!M.emissiveMap,Ft=!!M.metalnessMap,Gt=!!M.roughnessMap,X=M.anisotropy>0,tn=M.clearcoat>0,bt=M.dispersion>0,N=M.retroreflectivity>0,w=M.iridescence>0,Y=M.sheen>0,J=M.transmission>0,ne=X&&!!M.anisotropyMap,le=tn&&!!M.clearcoatMap,he=tn&&!!M.clearcoatNormalMap,ie=tn&&!!M.clearcoatRoughnessMap,re=w&&!!M.iridescenceMap,fe=w&&!!M.iridescenceThicknessMap,Pe=Y&&!!M.sheenColorMap,ge=Y&&!!M.sheenRoughnessMap,de=!!M.specularMap,Le=!!M.specularColorMap,Ue=!!M.specularIntensityMap,qe=J&&!!M.transmissionMap,W=J&&!!M.thicknessMap,pe=!!M.gradientMap,se=!!M.alphaMap,me=M.alphaTest>0,ve=!!M.alphaHash,oe=!!M.extensions,De=Zn;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(De=i.toneMapping);let Re={shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:ue,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:be,batchingColor:be&&I._colorsTexture!==null,instancing:Te,instancingColor:Te&&I.instanceColor!==null,instancingMorph:Te&&I.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:rt,envMap:Ve,envMapMode:Ve&&V.mapping,envMapCubeUVHeight:k,aoMap:Ze,lightMap:ot,bumpMap:je,normalMap:Pt,displacementMap:Jt,emissiveMap:mn,normalMapObjectSpace:Pt&&M.normalMapType===hm,normalMapTangentSpace:Pt&&M.normalMapType===jo,packedNormalMap:Pt&&M.normalMapType===jo&&M1(M.normalMap.format),metalnessMap:Ft,roughnessMap:Gt,anisotropy:X,anisotropyMap:ne,clearcoat:tn,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:ie,dispersion:bt,retroreflection:N,iridescence:w,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:ge,specularMap:de,specularColorMap:Le,specularIntensityMap:Ue,transmission:J,transmissionMap:qe,thicknessMap:W,gradientMap:pe,opaque:M.transparent===!1&&M.blending===pi&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:ve,combine:M.combine,mapUv:Ge&&m(M.map.channel),aoMapUv:Ze&&m(M.aoMap.channel),lightMapUv:ot&&m(M.lightMap.channel),bumpMapUv:je&&m(M.bumpMap.channel),normalMapUv:Pt&&m(M.normalMap.channel),displacementMapUv:Jt&&m(M.displacementMap.channel),emissiveMapUv:mn&&m(M.emissiveMap.channel),metalnessMapUv:Ft&&m(M.metalnessMap.channel),roughnessMapUv:Gt&&m(M.roughnessMap.channel),anisotropyMapUv:ne&&m(M.anisotropyMap.channel),clearcoatMapUv:le&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(M.sheenRoughnessMap.channel),specularMapUv:de&&m(M.specularMap.channel),specularColorMapUv:Le&&m(M.specularColorMap.channel),specularIntensityMapUv:Ue&&m(M.specularIntensityMap.channel),transmissionMapUv:qe&&m(M.transmissionMap.channel),thicknessMapUv:W&&m(M.thicknessMap.channel),alphaMapUv:se&&m(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Pt||X),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ge||se),fog:!!T,useFog:M.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&Pt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Z,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===mt,decodeVideoTextureEmissive:mn&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===St,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&M.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)A.push(P),A.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(p(A,M),y(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function p(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numSunLights),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numSunLightShadows),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function y(M,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function v(M){let A=d[M.type],P;if(A){let C=gi[A];P=Cm.clone(C.uniforms)}else P=M.uniforms;return P}function b(M,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new _1(i,A,M,s),c.push(P),u.set(A,P)),P}function _(M){if(--M.usedTimes===0){let A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:v,acquireProgram:b,releaseProgram:_,releaseShaderCache:S,programs:c,dispose:E}}function w1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function T1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Km(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zm(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=p),e++,y}function l(f,d,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let v=a(f,d,m,x,g,p);m.transmission>0?n.push(v):m.transparent===!0?s.push(v):t.push(v)}function c(f,d,m,x,g,p){let y=a(f,d,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||T1),n.length>1&&n.sort(d||Km),s.length>1&&s.sort(d||Km)}function h(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function A1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Zm,i.set(n,[o])):s>=r.length?(o=new Zm,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function E1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Q};break;case"SpotLight":t={position:new B,direction:new B,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Q,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":t={color:new Q,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function R1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var C1=0;function I1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P1(i){let e=new E1,t=R1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Xe,o=new Xe;function a(c){let u=0,h=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,v=0,b=0,_=0,S=0,E=0,M=0,A=0,P=0;c.sort(I1);for(let I=0,L=c.length;I<L;I++){let T=c[I],F=T.color,O=T.intensity,U=T.distance,V=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===as?V=T.shadow.map.texture:V=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=F.r*O,h+=F.g*O,f+=F.b*O;else if(T.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(T.sh.coefficients[k],O);P++}else if(T.isSunLight){let k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let z=T.shadow,H=t.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=V;let te=z.getViewportCount();for(let Z=0;Z<te;Z++)n.sunShadowMatrix[x+Z]=z.getMatrix(Z),n.sunShadowCascade[x+Z]=z._cascadeData[Z];x+=te,m++}n.sun[d]=k,d++}else if(T.isDirectionalLight){let k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let z=T.shadow,H=t.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=T.shadow.matrix,_++}n.directional[g]=k,g++}else if(T.isSpotLight){let k=e.get(T);k.position.setFromMatrixPosition(T.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=U,k.coneCos=Math.cos(T.angle),k.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),k.decay=T.decay,n.spot[y]=k;let z=T.shadow;if(T.map&&(n.spotLightMap[M]=T.map,M++,z.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[y]=z.matrix,T.castShadow){let H=t.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=V,E++}y++}else if(T.isRectAreaLight){let k=e.get(T);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(T.width*.5,0,0),k.halfHeight.set(0,T.height*.5,0),n.rectArea[v]=k,v++}else if(T.isPointLight){let k=e.get(T);if(k.color.copy(T.color).multiplyScalar(T.intensity),k.distance=T.distance,k.decay=T.decay,T.castShadow){let z=T.shadow,H=t.get(T);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=T.shadow.matrix,S++}n.point[p]=k,p++}else if(T.isHemisphereLight){let k=e.get(T);k.skyColor.copy(T.color).multiplyScalar(O),k.groundColor.copy(T.groundColor).multiplyScalar(O),n.hemi[b]=k,b++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.sunLength!==d||C.directionalLength!==g||C.pointLength!==p||C.spotLength!==y||C.rectAreaLength!==v||C.hemiLength!==b||C.numSunShadows!==m||C.numDirectionalShadows!==_||C.numPointShadows!==S||C.numSpotShadows!==E||C.numSpotMaps!==M||C.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=v,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,C.sunLength=d,C.directionalLength=g,C.pointLength=p,C.spotLength=y,C.rectAreaLength=v,C.hemiLength=b,C.numSunShadows=m,C.numDirectionalShadows=_,C.numPointShadows=S,C.numSpotShadows=E,C.numSpotMaps=M,C.numLightProbes=P,n.version=C1++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){let b=c[y];if(b.isSunLight){let _=n.sun[h];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let _=n.directional[f];_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(b.isSpotLight){let _=n.spot[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let _=n.rectArea[x];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let _=n.hemi[g];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Jm(i){let e=new P1(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function L1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Jm(i),e.set(s,[a])):r>=o.length?(a=new Jm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
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
}`,N1=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],O1=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],jm=new Xe,ea=new B,Kh=new B;function U1(i,e,t){let n=new Cr,s=new Ne,r=new Ne,o=new _t,a=new wl,l=new Tl,c={},u=t.maxTextureSize,h={[fi]:en,[en]:fi,[St]:St},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:F1,fragmentShader:D1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let p=this.type;this.render=function(S,E,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Vp&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Go);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(di),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let L=p!==this.type;L&&E.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(F=>F.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,F=S.length;T<F;T++){let O=S[T],U=O.shadow;if(U===void 0){Ie("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let V=U.getFrameExtents();s.multiply(V),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,U.mapSize.y=r.y));let k=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||L===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Fr){if(O.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new on(s.x,s.y,{format:as,type:Qn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new ns(s.x,s.y,Pn),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=oi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot}else O.isPointLight?(U.map=new Ec(s.x),U.map.depthTexture=new Ml(s.x,jn)):(U.map=new on(s.x,s.y),U.map.depthTexture=new ns(s.x,s.y,jn)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=oi,this.type===Go?(U.map.depthTexture.compareFunction=k?wc:Sc,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let z=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();O.isPointLight!==!0&&U.updateMatrices(O,M);for(let H=0;H<z;H++){let te=U.getCamera(H);if(O.isPointLight){let Z=U.camera,ce=U.matrix,ue=O.distance||Z.far;ue!==Z.far&&(Z.far=ue,Z.updateProjectionMatrix()),ea.setFromMatrixPosition(O.matrixWorld),Z.position.copy(ea),Kh.copy(Z.position),Kh.add(N1[H]),Z.up.copy(O1[H]),Z.lookAt(Kh),Z.updateMatrixWorld(),ce.makeTranslation(-ea.x,-ea.y,-ea.z),jm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),U._frustum.setFromProjectionMatrix(jm,Z.coordinateSystem,Z.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,H),i.clear();else{H===0&&(i.setRenderTarget(U.map),i.clear());let Z=U.getViewport(H);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(o)}n=U.getFrustum(H),b(E,M,te,O,this.type)}U.isPointLightShadow!==!0&&this.type===Fr&&y(U,M),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,P,C)};function y(S,E){let M=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new on(s.x,s.y,{format:as,type:Qn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(E,null,M,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(E,null,M,d,x,null)}function v(S,E,M,A){let P=null,C=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(C!==void 0)P=C;else if(P=M.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=P.uuid,L=E.uuid,T=c[I];T===void 0&&(T={},c[I]=T);let F=T[L];F===void 0&&(F=P.clone(),T[L]=F,E.addEventListener("dispose",_)),P=F}if(P.visible=E.visible,P.wireframe=E.wireframe,A===Fr?P.side=E.shadowSide!==null?E.shadowSide:E.side:P.side=E.shadowSide!==null?E.shadowSide:h[E.side],P.alphaMap=E.alphaMap,P.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,P.map=E.map,P.clipShadows=E.clipShadows,P.clippingPlanes=E.clippingPlanes,P.clipIntersection=E.clipIntersection,P.displacementMap=E.displacementMap,P.displacementScale=E.displacementScale,P.displacementBias=E.displacementBias,P.wireframeLinewidth=E.wireframeLinewidth,P.linewidth=E.linewidth,M.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let I=i.properties.get(P);I.light=M}return P}function b(S,E,M,A,P){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Fr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let L=e.update(S),T=S.material;if(Array.isArray(T)){let F=L.groups;for(let O=0,U=F.length;O<U;O++){let V=F[O],k=T[V.materialIndex];if(k&&k.visible){let z=v(S,k,A,P);S.onBeforeShadow(i,S,E,M,L,z,V),i.renderBufferDirect(M,null,L,z,S,V),S.onAfterShadow(i,S,E,M,L,z,V)}}}else if(T.visible){let F=v(S,T,A,P);S.onBeforeShadow(i,S,E,M,L,F,null),i.renderBufferDirect(M,null,L,F,S,null),S.onAfterShadow(i,S,E,M,L,F,null)}}let I=S.children;for(let L=0,T=I.length;L<T;L++)b(I[L],E,M,A,P)}function _(S){S.target.removeEventListener("dispose",_);for(let M in c){let A=c[M],P=S.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function B1(i,e){function t(){let W=!1,pe=new _t,se=null,me=new _t(0,0,0,0);return{setMask:function(ve){se!==ve&&!W&&(i.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){W=ve},setClear:function(ve,oe,De,Re,Et){Et===!0&&(ve*=Re,oe*=Re,De*=Re),pe.set(ve,oe,De,Re),me.equals(pe)===!1&&(i.clearColor(ve,oe,De,Re),me.copy(pe))},reset:function(){W=!1,se=null,me.set(-1,0,0,0)}}}function n(){let W=!1,pe=!1,se=null,me=null,ve=null;return{setReversed:function(oe){if(pe!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=oe;let Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(oe){oe?j(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(oe){se!==oe&&!W&&(i.depthMask(oe),se=oe)},setFunc:function(oe){if(pe&&(oe=Mm[oe]),me!==oe){switch(oe){case ul:i.depthFunc(i.NEVER);break;case hl:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=oe}},setLocked:function(oe){W=oe},setClear:function(oe){ve!==oe&&(ve=oe,pe&&(oe=1-oe),i.clearDepth(oe))},reset:function(){W=!1,se=null,me=null,ve=null,pe=!1}}}function s(){let W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,Et=null;return{setTest:function(ft){W||(ft?j(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(ft){pe!==ft&&!W&&(i.stencilMask(ft),pe=ft)},setFunc:function(ft,Vn,ni){(se!==ft||me!==Vn||ve!==ni)&&(i.stencilFunc(ft,Vn,ni),se=ft,me=Vn,ve=ni)},setOp:function(ft,Vn,ni){(oe!==ft||De!==Vn||Re!==ni)&&(i.stencilOp(ft,Vn,ni),oe=ft,De=Vn,Re=ni)},setLocked:function(ft){W=ft},setClear:function(ft){Et!==ft&&(i.clearStencil(ft),Et=ft)},reset:function(){W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,Et=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,v=null,b=null,_=null,S=null,E=null,M=new Q(0,0,0),A=0,P=!1,C=null,I=null,L=null,T=null,F=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=V>=2);let z=null,H={},te=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ce=new _t().fromArray(te),ue=new _t().fromArray(Z);function Oe(W,pe,se,me){let ve=new Uint8Array(4),oe=i.createTexture();i.bindTexture(W,oe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<se;De++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(pe+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return oe}let q={};q[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(yr),je(!1),Pt(hh),j(i.CULL_FACE),Ze(di);function j(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function ae(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function Te(W,pe){return f[W]!==pe?(i.bindFramebuffer(W,pe),f[W]=pe,W===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),W===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function be(W,pe){let se=m,me=!1;if(W){se=d.get(pe),se===void 0&&(se=[],d.set(pe,se));let ve=W.textures;if(se.length!==ve.length||se[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,De=ve.length;oe<De;oe++)se[oe]=i.COLOR_ATTACHMENT0+oe;se.length=ve.length,me=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,me=!0);me&&i.drawBuffers(se)}function Ge(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let rt={[Us]:i.FUNC_ADD,[Hp]:i.FUNC_SUBTRACT,[Wp]:i.FUNC_REVERSE_SUBTRACT};rt[Xp]=i.MIN,rt[qp]=i.MAX;let Ve={[Yp]:i.ZERO,[$p]:i.ONE,[Kp]:i.SRC_COLOR,[dh]:i.SRC_ALPHA,[tm]:i.SRC_ALPHA_SATURATE,[Qp]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[Zp]:i.ONE_MINUS_SRC_COLOR,[ph]:i.ONE_MINUS_SRC_ALPHA,[em]:i.ONE_MINUS_DST_COLOR,[jp]:i.ONE_MINUS_DST_ALPHA,[nm]:i.CONSTANT_COLOR,[im]:i.ONE_MINUS_CONSTANT_COLOR,[sm]:i.CONSTANT_ALPHA,[rm]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(W,pe,se,me,ve,oe,De,Re,Et,ft){if(W===di){g===!0&&(ae(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),W!==Gp){if(W!==p||ft!==P){if((y!==Us||_!==Us)&&(i.blendEquation(i.FUNC_ADD),y=Us,_=Us),ft)switch(W){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gt:i.blendFunc(i.ONE,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Be("WebGLState: Invalid blending: ",W);break}else switch(W){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case fh:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ho:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",W);break}v=null,b=null,S=null,E=null,M.set(0,0,0),A=0,p=W,P=ft}return}ve=ve||pe,oe=oe||se,De=De||me,(pe!==y||ve!==_)&&(i.blendEquationSeparate(rt[pe],rt[ve]),y=pe,_=ve),(se!==v||me!==b||oe!==S||De!==E)&&(i.blendFuncSeparate(Ve[se],Ve[me],Ve[oe],Ve[De]),v=se,b=me,S=oe,E=De),(Re.equals(M)===!1||Et!==A)&&(i.blendColor(Re.r,Re.g,Re.b,Et),M.copy(Re),A=Et),p=W,P=!1}function ot(W,pe){W.side===St?ae(i.CULL_FACE):j(i.CULL_FACE);let se=W.side===en;pe&&(se=!se),je(se),W.blending===pi&&W.transparent===!1?Ze(di):Ze(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let me=W.stencilWrite;a.setTest(me),me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),mn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(W){C!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),C=W)}function Pt(W){W!==kp?(j(i.CULL_FACE),W!==I&&(W===hh?i.cullFace(i.BACK):W===zp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),I=W}function Jt(W){W!==L&&(U&&i.lineWidth(W),L=W)}function mn(W,pe,se){W?(j(i.POLYGON_OFFSET_FILL),(T!==pe||F!==se)&&(T=pe,F=se,o.getReversed()&&(pe=-pe),i.polygonOffset(pe,se))):ae(i.POLYGON_OFFSET_FILL)}function Ft(W){W?j(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=i.TEXTURE0+O-1),z!==W&&(i.activeTexture(W),z=W)}function X(W,pe,se){se===void 0&&(z===null?se=i.TEXTURE0+O-1:se=z);let me=H[se];me===void 0&&(me={type:void 0,texture:void 0},H[se]=me),(me.type!==W||me.texture!==pe)&&(z!==se&&(i.activeTexture(se),z=se),i.bindTexture(W,pe||q[W]),me.type=W,me.texture=pe)}function tn(){let W=H[z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function w(){try{i.texSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function Y(){try{i.texSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function le(){try{i.texStorage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function he(){try{i.texStorage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function ie(){try{i.texImage2D(...arguments)}catch(W){Be("WebGLState:",W)}}function re(){try{i.texImage3D(...arguments)}catch(W){Be("WebGLState:",W)}}function fe(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Pe(W,pe){h[W]!==pe&&(i.pixelStorei(W,pe),h[W]=pe)}function ge(W){ce.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function de(W){ue.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ue.copy(W))}function Le(W,pe){let se=c.get(pe);se===void 0&&(se=new WeakMap,c.set(pe,se));let me=se.get(W);me===void 0&&(me=i.getUniformBlockIndex(pe,W.name),se.set(W,me))}function Ue(W,pe){let me=c.get(pe).get(W);l.get(pe)!==me&&(i.uniformBlockBinding(pe,me,W.__bindingPointIndex),l.set(pe,me))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},z=null,H={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,v=null,b=null,_=null,S=null,E=null,M=new Q(0,0,0),A=0,P=!1,C=null,I=null,L=null,T=null,F=null,ce.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:ae,bindFramebuffer:Te,drawBuffers:be,useProgram:Ge,setBlending:Ze,setMaterial:ot,setFlipSided:je,setCullFace:Pt,setLineWidth:Jt,setPolygonOffset:mn,setScissorTest:Ft,activeTexture:Gt,bindTexture:X,unbindTexture:tn,compressedTexImage2D:bt,compressedTexImage3D:N,texImage2D:ie,texImage3D:re,pixelStorei:Pe,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:Ue,texStorage2D:le,texStorage3D:he,texSubImage2D:w,texSubImage3D:Y,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:ge,viewport:de,reset:qe}}function k1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,w){return m?new OffscreenCanvas(N,w):Mr("canvas")}function g(N,w,Y){let J=1,ne=bt(N);if((ne.width>Y||ne.height>Y)&&(J=Y/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let le=Math.floor(J*ne.width),he=Math.floor(J*ne.height);f===void 0&&(f=x(le,he));let ie=w?x(le,he):f;return ie.width=le,ie.height=he,ie.getContext("2d").drawImage(N,0,0,le,he),Ie("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+le+"x"+he+")."),ie}else return"data"in N&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function p(N){return N.generateMipmaps}function y(N){i.generateMipmap(N)}function v(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(N,w,Y,J,ne,le=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he;J&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=w;if(w===i.RED&&(Y===i.FLOAT&&(ie=i.R32F),Y===i.HALF_FLOAT&&(ie=i.R16F),Y===i.UNSIGNED_BYTE&&(ie=i.R8),Y===i.UNSIGNED_SHORT&&he&&(ie=he.R16_EXT),Y===i.SHORT&&he&&(ie=he.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.R8UI),Y===i.UNSIGNED_SHORT&&(ie=i.R16UI),Y===i.UNSIGNED_INT&&(ie=i.R32UI),Y===i.BYTE&&(ie=i.R8I),Y===i.SHORT&&(ie=i.R16I),Y===i.INT&&(ie=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(ie=i.RG32F),Y===i.HALF_FLOAT&&(ie=i.RG16F),Y===i.UNSIGNED_BYTE&&(ie=i.RG8),Y===i.UNSIGNED_SHORT&&he&&(ie=he.RG16_EXT),Y===i.SHORT&&he&&(ie=he.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Y===i.UNSIGNED_INT&&(ie=i.RG32UI),Y===i.BYTE&&(ie=i.RG8I),Y===i.SHORT&&(ie=i.RG16I),Y===i.INT&&(ie=i.RG32I)),w===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Y===i.UNSIGNED_INT&&(ie=i.RGB32UI),Y===i.BYTE&&(ie=i.RGB8I),Y===i.SHORT&&(ie=i.RGB16I),Y===i.INT&&(ie=i.RGB32I)),w===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Y===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Y===i.BYTE&&(ie=i.RGBA8I),Y===i.SHORT&&(ie=i.RGBA16I),Y===i.INT&&(ie=i.RGBA32I)),w===i.RGB&&(Y===i.UNSIGNED_SHORT&&he&&(ie=he.RGB16_EXT),Y===i.SHORT&&he&&(ie=he.RGB16_SNORM_EXT),Y===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),Y===i.UNSIGNED_INT_10F_11F_11F_REV&&(ie=i.R11F_G11F_B10F)),w===i.RGBA){let re=le?yo:Je.getTransfer(ne);Y===i.FLOAT&&(ie=i.RGBA32F),Y===i.HALF_FLOAT&&(ie=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ie=re===mt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT&&he&&(ie=he.RGBA16_EXT),Y===i.SHORT&&he&&(ie=he.RGBA16_SNORM_EXT),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(N,w){let Y;return N?w===null||w===jn||w===Or?Y=i.DEPTH24_STENCIL8:w===Pn?Y=i.DEPTH32F_STENCIL8:w===Nr&&(Y=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===jn||w===Or?Y=i.DEPTH_COMPONENT24:w===Pn?Y=i.DEPTH_COMPONENT32F:w===Nr&&(Y=i.DEPTH_COMPONENT16),Y}function S(N,w){return p(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ot&&N.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function E(N){let w=N.target;w.removeEventListener("dispose",E),A(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function M(N){let w=N.target;w.removeEventListener("dispose",M),C(w)}function A(N){let w=n.get(N);if(w.__webglInit===void 0)return;let Y=N.source,J=d.get(Y);if(J){let ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(N),Object.keys(J).length===0&&d.delete(Y)}n.remove(N)}function P(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let Y=N.source,J=d.get(Y);delete J[w.__cacheKey],o.memory.textures--}function C(N){let w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)i.deleteFramebuffer(w.__webglFramebuffer[J]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Y=N.textures;for(let J=0,ne=Y.length;J<ne;J++){let le=n.get(Y[J]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Y[J])}n.remove(N)}let I=0;function L(){I=0}function T(){return I}function F(N){I=N}function O(){let N=I;return N>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,N}function U(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function V(N,w){let Y=n.get(N);if(N.isVideoTexture&&X(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let J=N.image;if(J===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,N,w);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function k(N,w){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ae(Y,N,w);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function z(N,w){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ae(Y,N,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function H(N,w){let Y=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){Te(Y,N,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}let te={[Kn]:i.REPEAT,[fn]:i.CLAMP_TO_EDGE,[_r]:i.MIRRORED_REPEAT},Z={[Ot]:i.NEAREST,[kl]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},ce={[dm]:i.NEVER,[bm]:i.ALWAYS,[pm]:i.LESS,[Sc]:i.LEQUAL,[mm]:i.EQUAL,[wc]:i.GEQUAL,[gm]:i.GREATER,[xm]:i.NOTEQUAL};function ue(N,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===Dr||w.magFilter===ks||w.magFilter===Jn||w.minFilter===Ut||w.minFilter===Dr||w.minFilter===ks||w.minFilter===Jn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,te[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,te[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,te[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Z[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Z[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ot||w.minFilter!==ks&&w.minFilter!==Jn||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Oe(N,w){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",E));let J=w.source,ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));let le=U(w);if(le!==N.__cacheKey){ne[le]===void 0&&(ne[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[le].usedTimes++;let he=ne[N.__cacheKey];he!==void 0&&(ne[N.__cacheKey].usedTimes--,he.usedTimes===0&&P(w)),N.__cacheKey=le,N.__webglTexture=ne[le].texture}return Y}function q(N,w,Y){return Math.floor(Math.floor(N/Y)/w)}function j(N,w,Y,J){let le=N.updateRanges;if(le.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Y,J,w.data);else{le.sort((Pe,ge)=>Pe.start-ge.start);let he=0;for(let Pe=1;Pe<le.length;Pe++){let ge=le[he],de=le[Pe],Le=ge.start+ge.count,Ue=q(de.start,w.width,4),qe=q(ge.start,w.width,4);de.start<=Le+1&&Ue===qe&&q(de.start+de.count-1,w.width,4)===Ue?ge.count=Math.max(ge.count,de.start+de.count-ge.start):(++he,le[he]=de)}le.length=he+1;let ie=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),fe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Pe=0,ge=le.length;Pe<ge;Pe++){let de=le[Pe],Le=Math.floor(de.start/4),Ue=Math.ceil(de.count/4),qe=Le%w.width,W=Math.floor(Le/w.width),pe=Ue,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,qe,W,pe,se,Y,J,w.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ie),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ae(N,w,Y){let J=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=i.TEXTURE_3D);let ne=Oe(N,w),le=w.source;t.bindTexture(J,N.__webglTexture,i.TEXTURE0+Y);let he=n.get(le);if(le.version!==he.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),me=w.colorSpace===Oi?null:Je.getPrimaries(w.colorSpace),ve=w.colorSpace===Oi||se===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let re=g(w.image,!1,s.maxTextureSize);re=tn(w,re);let fe=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type),ge=b(w.internalFormat,fe,Pe,w.normalized,w.colorSpace,w.isVideoTexture);ue(J,w);let de,Le=w.mipmaps,Ue=w.isVideoTexture!==!0,qe=he.__version===void 0||ne===!0,W=le.dataReady,pe=S(w,re);if(w.isDepthTexture)ge=_(w.format===os,w.type),qe&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,ge,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ge,re.width,re.height,0,fe,Pe,null));else if(w.isDataTexture)if(Le.length>0){Ue&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],Ue?W&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(i.TEXTURE_2D,se,ge,de.width,de.height,0,fe,Pe,de.data);w.generateMipmaps=!1}else Ue?(qe&&t.texStorage2D(i.TEXTURE_2D,pe,ge,re.width,re.height),W&&j(w,re,fe,Pe)):t.texImage2D(i.TEXTURE_2D,0,ge,re.width,re.height,0,fe,Pe,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ue&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,Le[0].width,Le[0].height,re.depth);for(let se=0,me=Le.length;se<me;se++)if(de=Le[se],w.format!==Ln)if(fe!==null)if(Ue){if(W)if(w.layerUpdates.size>0){let ve=Bh(de.width,de.height,w.format,w.type);for(let oe of w.layerUpdates){let De=de.data.subarray(oe*ve/de.data.BYTES_PER_ELEMENT,(oe+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,oe,de.width,de.height,1,fe,De)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ge,de.width,de.height,re.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,Pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ge,de.width,de.height,re.depth,0,fe,Pe,de.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ue&&qe&&t.texStorage2D(i.TEXTURE_2D,pe,ge,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],w.format!==Ln?fe!==null?Ue?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ge,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?W&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(i.TEXTURE_2D,se,ge,de.width,de.height,0,fe,Pe,de.data)}else if(w.isDataArrayTexture)if(Ue){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,ge,re.width,re.height,re.depth),W)if(w.layerUpdates.size>0){let se=Bh(re.width,re.height,w.format,w.type);for(let me of w.layerUpdates){let ve=re.data.subarray(me*se/re.data.BYTES_PER_ELEMENT,(me+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,me,re.width,re.height,1,fe,Pe,ve)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ge,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(w.isData3DTexture)Ue?(qe&&t.texStorage3D(i.TEXTURE_3D,pe,ge,re.width,re.height,re.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)):t.texImage3D(i.TEXTURE_3D,0,ge,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(w.isFramebufferTexture){if(qe)if(Ue)t.texStorage2D(i.TEXTURE_2D,pe,ge,re.width,re.height);else{let se=re.width,me=re.height;for(let ve=0;ve<pe;ve++)t.texImage2D(i.TEXTURE_2D,ve,ge,se,me,0,fe,Pe,null),se>>=1,me>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),h.add(w),se.onpaint=me=>{let ve=me.changedElements;for(let oe of h)ve.includes(oe.image)&&(oe.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let ve=i.RGBA,oe=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ve,oe,De,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Ue&&qe){let se=bt(Le[0]);t.texStorage2D(i.TEXTURE_2D,pe,ge,se.width,se.height)}for(let se=0,me=Le.length;se<me;se++)de=Le[se],Ue?W&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,fe,Pe,de):t.texImage2D(i.TEXTURE_2D,se,ge,fe,Pe,de);w.generateMipmaps=!1}else if(Ue){if(qe){let se=bt(re);t.texStorage2D(i.TEXTURE_2D,pe,ge,se.width,se.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Pe,re)}else t.texImage2D(i.TEXTURE_2D,0,ge,fe,Pe,re);p(w)&&y(J),he.__version=le.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Te(N,w,Y){if(w.image.length!==6)return;let J=Oe(N,w),ne=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Y);let le=n.get(ne);if(ne.version!==le.__version||J===!0){t.activeTexture(i.TEXTURE0+Y);let he=Je.getPrimaries(Je.workingColorSpace),ie=w.colorSpace===Oi?null:Je.getPrimaries(w.colorSpace),re=w.colorSpace===Oi||he===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let fe=w.isCompressedTexture||w.image[0].isCompressedTexture,Pe=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let oe=0;oe<6;oe++)!fe&&!Pe?ge[oe]=g(w.image[oe],!0,s.maxCubemapSize):ge[oe]=Pe?w.image[oe].image:w.image[oe],ge[oe]=tn(w,ge[oe]);let de=ge[0],Le=r.convert(w.format,w.colorSpace),Ue=r.convert(w.type),qe=b(w.internalFormat,Le,Ue,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,pe=le.__version===void 0||J===!0,se=ne.dataReady,me=S(w,de);ue(i.TEXTURE_CUBE_MAP,w);let ve;if(fe){W&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,de.width,de.height);for(let oe=0;oe<6;oe++){ve=ge[oe].mipmaps;for(let De=0;De<ve.length;De++){let Re=ve[De];w.format!==Ln?Le!==null?W?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,Ue,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Le,Ue,Re.data)}}}else{if(ve=w.mipmaps,W&&pe){ve.length>0&&me++;let oe=bt(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Pe){W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ge[oe].width,ge[oe].height,Le,Ue,ge[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,ge[oe].width,ge[oe].height,0,Le,Ue,ge[oe].data);for(let De=0;De<ve.length;De++){let Et=ve[De].image[oe].image;W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Et.width,Et.height,Le,Ue,Et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,Et.width,Et.height,0,Le,Ue,Et.data)}}else{W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,Ue,ge[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Le,Ue,ge[oe]);for(let De=0;De<ve.length;De++){let Re=ve[De];W?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Le,Ue,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,Le,Ue,Re.image[oe])}}}p(w)&&y(i.TEXTURE_CUBE_MAP),le.__version=ne.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function be(N,w,Y,J,ne,le){let he=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),re=b(Y.internalFormat,he,ie,Y.normalized,Y.colorSpace),fe=n.get(w),Pe=n.get(Y);if(Pe.__renderTarget=w,!fe.__hasExternalTextures){let ge=Math.max(1,w.width>>le),de=Math.max(1,w.height>>le);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,le,re,ge,de,w.depth,0,he,ie,null):t.texImage2D(ne,le,re,ge,de,0,he,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,Pe.__webglTexture,0,Ft(w)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,Pe.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(N,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,le=_(w.stencilBuffer,ne),he=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(w),le,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(w),le,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,N)}else{let J=w.textures;for(let ne=0;ne<J.length;ne++){let le=J[ne],he=r.convert(le.format,le.colorSpace),ie=r.convert(le.type),re=b(le.internalFormat,he,ie,le.normalized,le.colorSpace);Gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(w),re,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(w),re,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,re,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(N,w,Y){let J=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(w.depthTexture);if(ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,w.depthTexture.addEventListener("dispose",E)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ue(i.TEXTURE_CUBE_MAP,w.depthTexture);let fe=r.convert(w.depthTexture.format),Pe=r.convert(w.depthTexture.type),ge;w.depthTexture.format===oi?ge=i.DEPTH_COMPONENT24:w.depthTexture.format===os&&(ge=i.DEPTH24_STENCIL8);for(let de=0;de<6;de++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ge,w.width,w.height,0,fe,Pe,null)}}else V(w.depthTexture,0);let le=ne.__webglTexture,he=Ft(w),ie=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+Y:i.TEXTURE_2D,re=w.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===oi)Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,le,0);else if(w.depthTexture.format===os)Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ie,le,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,re,ie,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(N){let w=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let J=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let J=0;J<6;J++)rt(w.__webglFramebuffer[J],N,J);else{let J=N.texture.mipmaps;J&&J.length>0?rt(w.__webglFramebuffer[0],N,0):rt(w.__webglFramebuffer,N,0)}else if(Y){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=i.createRenderbuffer(),Ge(w.__webglDepthbuffer[J],N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,le)}}else{let J=N.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ge(w.__webglDepthbuffer,N,!1);else{let ne=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,le)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(N,w,Y){let J=n.get(N);w!==void 0&&be(J.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&Ve(N)}function ot(N){let w=N.texture,Y=n.get(N),J=n.get(w);N.addEventListener("dispose",M);let ne=N.textures,le=N.isWebGLCubeRenderTarget===!0,he=ne.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=w.version,o.memory.textures++),le){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let re=0;re<w.mipmaps.length;re++)Y.__webglFramebuffer[ie][re]=i.createFramebuffer()}else Y.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(he)for(let ie=0,re=ne.length;ie<re;ie++){let fe=n.get(ne[ie]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(N.samples>0&&Gt(N)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let re=ne[ie];Y.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let fe=r.convert(re.format,re.colorSpace),Pe=r.convert(re.type),ge=b(re.internalFormat,fe,Pe,re.normalized,re.colorSpace,N.isXRRenderTarget===!0),de=Ft(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ge,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ue(i.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let re=0;re<w.mipmaps.length;re++)be(Y.__webglFramebuffer[ie][re],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else be(Y.__webglFramebuffer[ie],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(w)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ie=0,re=ne.length;ie<re;ie++){let fe=ne[ie],Pe=n.get(fe),ge=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ge=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,Pe.__webglTexture),ue(ge,fe),be(Y.__webglFramebuffer,N,fe,i.COLOR_ATTACHMENT0+ie,ge,0),p(fe)&&y(ge)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),ue(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let re=0;re<w.mipmaps.length;re++)be(Y.__webglFramebuffer[re],N,w,i.COLOR_ATTACHMENT0,ie,re);else be(Y.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,ie,0);p(w)&&y(ie),t.unbindTexture()}N.depthBuffer&&Ve(N)}function je(N){let w=N.textures;for(let Y=0,J=w.length;Y<J;Y++){let ne=w[Y];if(p(ne)){let le=v(N),he=n.get(ne).__webglTexture;t.bindTexture(le,he),y(le),t.unbindTexture()}}}let Pt=[],Jt=[];function mn(N){if(N.samples>0){if(Gt(N)===!1){let w=N.textures,Y=N.width,J=N.height,ne=i.COLOR_BUFFER_BIT,le=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(N),ie=w.length>1;if(ie)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let re=N.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(w[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,Y,J,0,0,Y,J,ne,i.NEAREST),l===!0&&(Pt.length=0,Jt.length=0,Pt.push(i.COLOR_ATTACHMENT0+fe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Pt.push(le),Jt.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Jt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(w[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ft(N){return Math.min(s.maxSamples,N.samples)}function Gt(N){let w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(N){let w=o.render.frame;u.get(N)!==w&&(u.set(N,w),N.update())}function tn(N,w){let Y=N.colorSpace,J=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==dn&&Y!==Oi&&(Je.getTransfer(Y)===mt?(J!==Ln||ne!==vn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",Y)),w}function bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.getTextureUnits=T,this.setTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function z1(i,e){function t(n,s=Oi){let r,o=Je.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Th)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sh)return i.BYTE;if(n===wh)return i.SHORT;if(n===Nr)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===Rh)return i.RGB;if(n===Ln)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===as)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===$o)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===$l||n===Kl||n===Zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jl||n===jl||n===Ql||n===ec||n===tc||n===Ko||n===nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jl||n===jl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ec)return r.COMPRESSED_R11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ko)return r.COMPRESSED_RG11_EAC;if(n===nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xc||n===bc||n===yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===vc||n===Zo||n===Mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var V1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G1=`
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

}`,sf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new In({vertexShader:V1,fragmentShader:G1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rf=class extends ai{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new sf,p={},y=t.getContextAttributes(),v=null,b=null,_=[],S=[],E=new Ne,M=null,A=null,P=new Xt;P.viewport=new _t;let C=new Xt;C.viewport=new _t;let I=[P,C],L=new Dl,T=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=_[q];return j===void 0&&(j=new Ar,_[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=_[q];return j===void 0&&(j=new Ar,_[q]=j),j.getGripSpace()},this.getHand=function(q){let j=_[q];return j===void 0&&(j=new Ar,_[q]=j),j.getHandSpace()};function O(q){let j=S.indexOf(q.inputSource);if(j===-1)return;let ae=_[j];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||o),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let q=0;q<_.length;q++){let j=S[q];j!==null&&(S[q]=null,_[q].disconnect(j))}T=null,F=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(v),d=null,f=null,h=null,s=null,b=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),A!==null){let q=A.camera;q.fov=A.fov,q.zoom=A.zoom,q.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Te=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?os:oi,Te=y.stencil?Or:jn);let Ge={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new on(f.textureWidth,f.textureHeight,{format:Ln,type:vn,depthTexture:new ns(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new on(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let j=0;j<q.removed.length;j++){let ae=q.removed[j],Te=S.indexOf(ae);Te>=0&&(S[Te]=null,_[Te].disconnect(ae))}for(let j=0;j<q.added.length;j++){let ae=q.added[j],Te=S.indexOf(ae);if(Te===-1){for(let Ge=0;Ge<_.length;Ge++)if(Ge>=S.length){S.push(ae),Te=Ge;break}else if(S[Ge]===null){S[Ge]=ae,Te=Ge;break}if(Te===-1)break}let be=_[Te];be&&be.connect(ae)}}let k=new B,z=new B;function H(q,j,ae){k.setFromMatrixPosition(j.matrixWorld),z.setFromMatrixPosition(ae.matrixWorld);let Te=k.distanceTo(z),be=j.projectionMatrix.elements,Ge=ae.projectionMatrix.elements,rt=be[14]/(be[10]-1),Ve=be[14]/(be[10]+1),Ze=(be[9]+1)/be[5],ot=(be[9]-1)/be[5],je=(be[8]-1)/be[0],Pt=(Ge[8]+1)/Ge[0],Jt=rt*je,mn=rt*Pt,Ft=Te/(-je+Pt),Gt=Ft*-je;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Gt),q.translateZ(Ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let X=rt+Ft,tn=Ve+Ft,bt=Jt-Gt,N=mn+(Te-Gt),w=Ze*Ve/tn*X,Y=ot*Ve/tn*X;q.projectionMatrix.makePerspective(bt,N,w,Y,X,tn),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ae=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),L.near=C.near=P.near=j,L.far=C.far=P.far=ae,(T!==L.near||F!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),T=L.near,F=L.far),L.layers.mask=q.layers.mask|6,P.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let Te=q.parent,be=L.cameras;te(L,Te);for(let Ge=0;Ge<be.length;Ge++)te(be[Ge],Te);be.length===2?H(L,P,C):L.projectionMatrix.copy(P.projectionMatrix),A===null&&q.isPerspectiveCamera&&(A={camera:q,fov:q.fov,zoom:q.zoom}),Z(q,L,Te)};function Z(q,j,ae){ae===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=As*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let ce=null;function ue(q,j){if(u=j.getViewerPose(c||o),m=j,u!==null){let ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Te=!1;ae.length!==L.cameras.length&&(L.cameras.length=0,Te=!0);for(let Ve=0;Ve<ae.length;Ve++){let Ze=ae[Ve],ot=null;if(d!==null)ot=d.getViewport(Ze);else{let Pt=h.getViewSubImage(f,Ze);ot=Pt.viewport,Ve===0&&(e.setRenderTargetTextures(b,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(b))}let je=I[Ve];je===void 0&&(je=new Xt,je.layers.enable(Ve),je.viewport=new _t,I[Ve]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(L.matrix.copy(je.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Te===!0&&L.cameras.push(je)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ve=h.getDepthInformation(ae[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ve=0;Ve<ae.length;Ve++){let Ze=ae[Ve].camera;if(Ze){let ot=p[Ze];ot||(ot=new Eo,p[Ze]=ot);let je=h.getCameraImage(Ze);ot.sourceTexture=je}}}}for(let ae=0;ae<_.length;ae++){let Te=S[ae],be=_[ae];Te!==null&&be!==void 0&&be.update(Te,j,c||o)}ce&&ce(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let Oe=new Qm;Oe.setAnimationLoop(ue),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}},H1=new Xe,r0=new We;r0.set(-1,0,0,0,1,0,0,0,1);function W1(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Nh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,v,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),v=y.envMap,b=y.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(H1.makeRotationFromEuler(b)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(r0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X1(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let S=_.program;n.uniformBlockBinding(b,S)}function c(b,_){let S=s[b.id];S===void 0&&(g(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",y));let E=_.program;n.updateUBOMapping(b,E);let M=e.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function u(b){let _=h();b.__bindingPointIndex=_;let S=i.createBuffer(),E=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let _=s[b.id],S=b.uniforms,E=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let M=0,A=S.length;M<A;M++){let P=S[M];if(Array.isArray(P))for(let C=0,I=P.length;C<I;C++)d(P[C],M,C,E);else d(P,M,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,_,S,E){if(x(b,_,S,E)===!0){let M=b.__offset,A=b.value;if(Array.isArray(A)){let P=0;for(let C=0;C<A.length;C++){let I=A[C],L=p(I);m(I,b.__data,P),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(P+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function m(b,_,S){typeof b=="number"||typeof b=="boolean"?_[0]=b:b.isMatrix3?(_[0]=b.elements[0],_[1]=b.elements[1],_[2]=b.elements[2],_[3]=0,_[4]=b.elements[3],_[5]=b.elements[4],_[6]=b.elements[5],_[7]=0,_[8]=b.elements[6],_[9]=b.elements[7],_[10]=b.elements[8],_[11]=0):ArrayBuffer.isView(b)?_.set(new b.constructor(b.buffer,b.byteOffset,_.length)):b.toArray(_,S)}function x(b,_,S,E){let M=b.value,A=_+"_"+S;if(E[A]===void 0)return typeof M=="number"||typeof M=="boolean"?E[A]=M:ArrayBuffer.isView(M)?E[A]=M.slice():E[A]=M.clone(),!0;{let P=E[A];if(typeof M=="number"||typeof M=="boolean"){if(P!==M)return E[A]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(P.equals(M)===!1)return P.copy(M),!0}}return!1}function g(b){let _=b.uniforms,S=0,E=16;for(let A=0,P=_.length;A<P;A++){let C=Array.isArray(_[A])?_[A]:[_[A]];for(let I=0,L=C.length;I<L;I++){let T=C[I],F=Array.isArray(T.value)?T.value:[T.value];for(let O=0,U=F.length;O<U;O++){let V=F[O],k=p(V),z=S%E,H=z%k.boundary,te=z+H;S+=H,te!==0&&E-te<k.storage&&(S+=E-te),T.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=S,S+=k.storage}}}let M=S%E;return M>0&&(S+=E-M),b.__size=S,b.__cache={},this}function p(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(_.boundary=16,_.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),_}function y(b){let _=b.target;_.removeEventListener("dispose",y);let S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function v(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:v}}var q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mi=null;function Y1(){return mi===null&&(mi=new Rr(q1,16,16,as,Qn),mi.name="DFG_LUT",mi.minFilter=Ut,mi.magFilter=Ut,mi.wrapS=fn,mi.wrapT=fn,mi.generateMipmaps=!1,mi.needsUpdate=!0),mi}var Gr=class{constructor(e={}){let{canvas:t=ym(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([ql,Xl,Wl]),p=new Set([vn,jn,Nr,Or,Vl,Gl]),y=new Uint32Array(4),v=new Int32Array(4),b=new B,_=null,S=null,E=[],M=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,C=!1,I=null,L=null,T=null,F=null;this._outputColorSpace=Mt;let O=0,U=0,V=null,k=-1,z=null,H=new _t,te=new _t,Z=null,ce=new Q(0),ue=0,Oe=t.width,q=t.height,j=1,ae=null,Te=null,be=new _t(0,0,Oe,q),Ge=new _t(0,0,Oe,q),rt=!1,Ve=new Cr,Ze=!1,ot=!1,je=new Xe,Pt=new B,Jt=new _t,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Gt(){return V===null?j:1}let X=n;function tn(R,G){return t.getContext(R,G)}let bt,N,w,Y,J,ne,le,he,ie,re,fe,Pe,ge,de,Le,Ue,qe,W,pe,se,me,ve,oe;try{let R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Vn,!1),X===null){let G="webgl2";if(X=tn(G,R),X===null)throw tn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(R){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),Be("WebGLRenderer: "+R.message),R}function De(){bt=new eM(X),bt.init(),me=new z1(X,bt),N=new Wv(X,bt,e,me),w=new B1(X,bt),N.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),L=X.createFramebuffer(),T=X.createFramebuffer(),F=X.createFramebuffer(),Y=new iM(X),J=new w1,ne=new k1(X,bt,w,J,N,me,Y),le=new Qv(P),he=new ry(X),ve=new Gv(X,he),ie=new tM(X,he,Y,ve),re=new rM(X,ie,he,ve,Y),W=new sM(X,N,ne),Le=new Xv(J),fe=new S1(P,le,bt,N,ve,Le),Pe=new W1(P,J),ge=new A1,de=new L1(bt),qe=new Vv(P,le,w,re,m,l),Ue=new U1(P,re,N),oe=new X1(X,Y,N,w),pe=new Hv(X,bt,Y),se=new nM(X,bt,Y),Y.programs=fe.programs,P.capabilities=N,P.extensions=bt,P.properties=J,P.renderLists=ge,P.shadowMap=Ue,P.state=w,P.info=Y}x!==vn&&(A=new aM(x,t.width,t.height,a,s,r));let Re=new rf(P,X);this.xr=Re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=bt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=bt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(Oe,q,!1))},this.getSize=function(R){return R.set(Oe,q)},this.setSize=function(R,G,ee=!0){if(Re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=R,q=G,t.width=Math.floor(R*j),t.height=Math.floor(G*j),ee===!0&&(t.style.width=R+"px",t.style.height=G+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(Oe*j,q*j).floor()},this.setDrawingBufferSize=function(R,G,ee){Oe=R,q=G,j=ee,t.width=Math.floor(R*ee),t.height=Math.floor(G*ee),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(x===vn){Be("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,G,ee,$){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,G,ee,$),w.viewport(H.copy(be).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Ge)},this.setScissor=function(R,G,ee,$){R.isVector4?Ge.set(R.x,R.y,R.z,R.w):Ge.set(R,G,ee,$),w.scissor(te.copy(Ge).multiplyScalar(j).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(R){w.setScissorTest(rt=R)},this.setOpaqueSort=function(R){ae=R},this.setTransparentSort=function(R){Te=R},this.getClearColor=function(R){return R.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,ee=!0){let $=0;if(R){let K=!1;if(V!==null){let _e=V.texture.format;K=g.has(_e)}if(K){let _e=V.texture.type,we=p.has(_e),ye=qe.getClearColor(),Ae=qe.getClearAlpha(),Ce=ye.r,$e=ye.g,et=ye.b;we?(y[0]=Ce,y[1]=$e,y[2]=et,y[3]=Ae,X.clearBufferuiv(X.COLOR,0,y)):(v[0]=Ce,v[1]=$e,v[2]=et,v[3]=Ae,X.clearBufferiv(X.COLOR,0,v))}else $|=X.COLOR_BUFFER_BIT}G&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),I=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Vn,!1),qe.dispose(),ge.dispose(),de.dispose(),J.dispose(),le.dispose(),re.dispose(),ve.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",zd),Re.removeEventListener("sessionend",Vd),bs.stop()};function Et(R){R.preventDefault(),_o("WebGLRenderer: Context Lost."),C=!0}function ft(){_o("WebGLRenderer: Context Restored."),C=!1;let R=Y.autoReset,G=Ue.enabled,ee=Ue.autoUpdate,$=Ue.needsUpdate,K=Ue.type;De(),Y.autoReset=R,Ue.enabled=G,Ue.autoUpdate=ee,Ue.needsUpdate=$,Ue.type=K}function Vn(R){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ni(R){let G=R.target;G.removeEventListener("dispose",ni),Px(G)}function Px(R){Lx(R),J.remove(R)}function Lx(R){let G=J.get(R).programs;G!==void 0&&(G.forEach(function(ee){fe.releaseProgram(ee)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,ee,$,K,_e){G===null&&(G=mn);let we=K.isMesh&&K.matrixWorld.determinantAffine()<0,ye=Nx(R,G,ee,$,K);w.setMaterial($,we);let Ae=ee.index,Ce=1;if($.wireframe===!0){if(Ae=ie.getWireframeAttribute(ee),Ae===void 0)return;Ce=2}let $e=ee.drawRange,et=ee.attributes.position,Ee=$e.start*Ce,dt=($e.start+$e.count)*Ce;_e!==null&&(Ee=Math.max(Ee,_e.start*Ce),dt=Math.min(dt,(_e.start+_e.count)*Ce)),Ae!==null?(Ee=Math.max(Ee,0),dt=Math.min(dt,Ae.count)):et!=null&&(Ee=Math.max(Ee,0),dt=Math.min(dt,et.count));let Ht=dt-Ee;if(Ht<0||Ht===1/0)return;ve.setup(K,$,ye,ee,Ae);let Ct,wt=pe;if(Ae!==null&&(Ct=he.get(Ae),wt=se,wt.setIndex(Ct)),K.isMesh)$.wireframe===!0?(w.setLineWidth($.wireframeLinewidth*Gt()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(K.isLine){let nn=$.linewidth;nn===void 0&&(nn=1),w.setLineWidth(nn*Gt()),K.isLineSegments?wt.setMode(X.LINES):K.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else K.isPoints?wt.setMode(X.POINTS):K.isSprite&&wt.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let nn=K._multiDrawStarts,Se=K._multiDrawCounts,un=K._multiDrawCount,at=Ae?he.get(Ae).bytesPerElement:1,Fn=J.get($).currentProgram.getUniforms();for(let ii=0;ii<un;ii++)Fn.setValue(X,"_gl_DrawID",ii),wt.render(nn[ii]/at,Se[ii])}else if(K.isInstancedMesh)wt.renderInstances(Ee,Ht,K.count);else if(ee.isInstancedBufferGeometry){let nn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Se=Math.min(ee.instanceCount,nn);wt.renderInstances(Ee,Ht,Se)}else wt.render(Ee,Ht)};function kd(R,G,ee,$){I!==null&&R.isNodeMaterial&&I.setObject($,R),Ze===!0&&Le.setState(R,ee,!1),R.transparent===!0&&R.side===St&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,Ia(R,G,$),R.side=fi,R.needsUpdate=!0,Ia(R,G,$),R.side=St):Ia(R,G,$)}this.compile=function(R,G,ee=null){ee===null&&(ee=R),I!==null&&I.renderStart(R,G,ee),S=de.get(ee),S.init(G),M.push(S),ee.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),R!==ee&&R.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),I!==null&&I.updateLights(S.state.lightsArray),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),Ze===!0&&Le.setGlobalState(this.clippingPlanes,G),I!==null&&Ue.render(S.state.shadowsArray,ee,G);let $=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let _e=K.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){let ye=_e[we];kd(ye,ee,G,K),$.add(ye)}else kd(_e,ee,G,K),$.add(_e)}),S=M.pop(),I!==null&&I.renderEnd(),$},this.compileAsync=function(R,G,ee=null){let $=this.compile(R,G,ee);return new Promise(K=>{function _e(){if($.forEach(function(we){let Ae=J.get(we).currentProgram;(Ae===void 0||Ae.isReady())&&$.delete(we)}),$.size===0){K(R);return}setTimeout(_e,10)}bt.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Mu=null;function Fx(R){Mu&&Mu(R)}function zd(){bs.stop()}function Vd(){bs.start()}let bs=new Qm;bs.setAnimationLoop(Fx),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(R){Mu=R,Re.setAnimationLoop(R),R===null?bs.stop():bs.start()},Re.addEventListener("sessionstart",zd),Re.addEventListener("sessionend",Vd),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(R,G);let ee=Re.enabled===!0&&Re.isPresenting===!0,$=A!==null&&(V===null||ee)&&A.begin(P,V);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(G),G=Re.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,G,V),S=de.get(R,M.length),S.init(G),S.state.textureUnits=ne.getTextureUnits(),M.push(S),je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ve.setFromProjectionMatrix(je,Yn,G.reversedDepth),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),_=ge.get(R,E.length),_.init(),E.push(_),Re.enabled===!0&&Re.isPresenting===!0){let we=P.xr.getDepthSensingMesh();we!==null&&Su(we,G,-1/0,P.sortObjects)}Su(R,G,0,P.sortObjects),_.finish(),I!==null&&I.updateLights(S.state.lightsArray),P.sortObjects===!0&&_.sort(ae,Te),Ft=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ft&&qe.addToRenderList(_,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Le.beginShadows();let K=S.state.shadowsArray;if(Ue.render(K,R,G),Ze===!0&&Le.endShadows(),($&&A.hasRenderPass())===!1){let we=_.opaque,ye=_.transmissive;if(S.setupLights(),G.isArrayCamera){let Ae=G.cameras;if(ye.length>0)for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];Hd(we,ye,R,et)}Ft&&qe.render(R);for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];Gd(_,R,et,et.viewport)}}else ye.length>0&&Hd(we,ye,R,G),Ft&&qe.render(R),Gd(_,R,G)}V!==null&&U===0&&(ne.updateMultisampleRenderTarget(V),ne.updateRenderTargetMipmap(V)),$&&A.end(P),R.isScene===!0&&R.onAfterRender(P,R,G),ve.resetDefaultState(),k=-1,z=null,M.pop(),M.length>0?(S=M[M.length-1],ne.setTextureUnits(S.state.textureUnits),Ze===!0&&Le.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?_=E[E.length-1]:_=null,I!==null&&I.renderEnd()};function Su(R,G,ee,$){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)S.pushLightProbeGrid(R);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum(Ve)){$&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(je);let we=re.update(R),ye=R.material;ye.visible&&_.push(R,we,ye,ee,Jt.z,null,G)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum(Ve))){let we=re.update(R),ye=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Jt.copy(we.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(je)),Array.isArray(ye)){let Ae=we.groups;for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce],Ee=ye[et.materialIndex];Ee&&Ee.visible&&_.push(R,we,Ee,ee,Jt.z,et,G)}}else ye.visible&&_.push(R,we,ye,ee,Jt.z,null,G)}}let _e=R.children;for(let we=0,ye=_e.length;we<ye;we++)Su(_e[we],G,ee,$)}function Gd(R,G,ee,$){let{opaque:K,transmissive:_e,transparent:we}=R;S.setupLightsView(ee),Ze===!0&&Le.setGlobalState(P.clippingPlanes,ee),$&&w.viewport(H.copy($)),K.length>0&&Ca(K,G,ee),_e.length>0&&Ca(_e,G,ee),we.length>0&&Ca(we,G,ee),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Hd(R,G,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Ee=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new on(1,1,{generateMipmaps:!0,type:Ee?Qn:vn,minFilter:Jn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let _e=S.state.transmissionRenderTarget[$.id],we=$.viewport||H;_e.setSize(we.z*P.transmissionResolutionScale,we.w*P.transmissionResolutionScale);let ye=P.getRenderTarget(),Ae=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(ce),ue=P.getClearAlpha(),ue<1&&P.setClearColor(16777215,.5),P.clear(),Ft&&qe.render(ee);let $e=P.toneMapping;P.toneMapping=Zn;let et=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),Ze===!0&&Le.setGlobalState(P.clippingPlanes,$),Ca(R,ee,$),ne.updateMultisampleRenderTarget(_e),ne.updateRenderTargetMipmap(_e),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let dt=0,Ht=G.length;dt<Ht;dt++){let Ct=G[dt],{object:wt,geometry:nn,material:Se,group:un}=Ct;if(Se.side===St&&wt.layers.test($.layers)){let at=Se.side;Se.side=en,Se.needsUpdate=!0,Wd(wt,ee,$,nn,Se,un),Se.side=at,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(ne.updateMultisampleRenderTarget(_e),ne.updateRenderTargetMipmap(_e))}P.setRenderTarget(ye,Ae,Ce),P.setClearColor(ce,ue),et!==void 0&&($.viewport=et),P.toneMapping=$e}function Ca(R,G,ee){let $=G.isScene===!0?G.overrideMaterial:null;for(let K=0,_e=R.length;K<_e;K++){let we=R[K],{object:ye,geometry:Ae,group:Ce}=we,$e=we.material;$e.allowOverride===!0&&$!==null&&($e=$),ye.layers.test(ee.layers)&&Wd(ye,G,ee,Ae,$e,Ce)}}function Wd(R,G,ee,$,K,_e){I!==null&&K.isNodeMaterial&&I.setObject(R,K),R.onBeforeRender(P,G,ee,$,K,_e),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(P,G,ee,$,R,_e),K.transparent===!0&&K.side===St&&K.forceSinglePass===!1?(K.side=en,K.needsUpdate=!0,P.renderBufferDirect(ee,G,$,K,R,_e),K.side=fi,K.needsUpdate=!0,P.renderBufferDirect(ee,G,$,K,R,_e),K.side=St):P.renderBufferDirect(ee,G,$,K,R,_e),R.onAfterRender(P,G,ee,$,K,_e)}function Ia(R,G,ee){G.isScene!==!0&&(G=mn);let $=J.get(R),K=S.state.lights,_e=S.state.shadowsArray,we=K.state.version,ye=fe.getParameters(R,K.state,_e,G,ee,S.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(ye),Ce=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let $e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=le.get(R.envMap||$.environment,$e),$.envMapRotation=$.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Ce===void 0&&(R.addEventListener("dispose",ni),Ce=new Map,$.programs=Ce);let et=Ce.get(Ae);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===we)return qd(R,ye),et}else ye.uniforms=fe.getUniforms(R),I!==null&&R.isNodeMaterial&&I.build(R,ee,ye),R.onBeforeCompile(ye,P),et=fe.acquireProgram(ye,Ae),Ce.set(Ae,et),$.uniforms=ye.uniforms;let Ee=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ee.clippingPlanes=Le.uniform),qd(R,ye),$.needsLights=Ux(R),$.lightsStateVersion=we,$.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.sunLights.value=K.state.sun,Ee.sunLightShadows.value=K.state.sunShadow,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.sunShadowMatrix.value=K.state.sunShadowMatrix,Ee.sunShadowCascade.value=K.state.sunShadowCascade,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotLightMatrix.value=K.state.spotLightMatrix,Ee.spotLightMap.value=K.state.spotLightMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=et,$.uniformsList=null,et}function Xd(R){if(R.uniformsList===null){let G=R.currentProgram.getUniforms();R.uniformsList=zr.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function qd(R,G){let ee=J.get(R);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function Dx(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let ee=0,$=R.length;ee<$;ee++){let K=R[ee];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function Nx(R,G,ee,$,K){G.isScene!==!0&&(G=mn),ne.resetTextureUnits();let _e=G.fog,we=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,ye=V===null?P.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ce=le.get($.envMap||we,Ae),$e=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,et=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!ee.morphAttributes.position,dt=!!ee.morphAttributes.normal,Ht=!!ee.morphAttributes.color,Ct=Zn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ct=P.toneMapping);let wt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,nn=wt!==void 0?wt.length:0,Se=J.get($),un=S.state.lights;if(Ze===!0&&(ot===!0||R!==z)){let Rt=R===z&&$.id===k;Le.setState($,R,Rt)}let at=!1;$.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==un.state.version||Se.outputColorSpace!==ye||K.isBatchedMesh&&Se.batching===!1||!K.isBatchedMesh&&Se.batching===!0||K.isBatchedMesh&&Se.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Se.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Se.instancing===!1||!K.isInstancedMesh&&Se.instancing===!0||K.isSkinnedMesh&&Se.skinning===!1||!K.isSkinnedMesh&&Se.skinning===!0||K.isInstancedMesh&&Se.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Se.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Se.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Se.instancingMorph===!1&&K.morphTexture!==null||Se.envMap!==Ce||$.fog===!0&&Se.fog!==_e||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Le.numPlanes||Se.numIntersection!==Le.numIntersection)||Se.vertexAlphas!==$e||Se.vertexTangents!==et||Se.morphTargets!==Ee||Se.morphNormals!==dt||Se.morphColors!==Ht||Se.toneMapping!==Ct||Se.morphTargetsCount!==nn||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Se.__version=$.version);let Fn=Se.currentProgram;at===!0&&(Fn=Ia($,G,K),I&&$.isNodeMaterial&&I.onUpdateProgram($,Fn,Se));let ii=!1,Wi=!1,js=!1,vt=Fn.getUniforms(),Nt=Se.uniforms;if(w.useProgram(Fn.program)&&(ii=!0,Wi=!0,js=!0),$.id!==k&&(k=$.id,Wi=!0),Se.needsLights){let Rt=Dx(S.state.lightProbeGridArray,K);Se.lightProbeGrid!==Rt&&(Se.lightProbeGrid=Rt,Wi=!0)}if(ii||z!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),vt.setValue(X,"projectionMatrix",R.projectionMatrix),vt.setValue(X,"viewMatrix",R.matrixWorldInverse);let qi=vt.map.cameraPosition;qi!==void 0&&qi.setValue(X,Pt.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&vt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,Wi=!0,js=!0)}if(Se.needsLights&&(un.state.sunShadowMap.length>0&&vt.setValue(X,"sunShadowMap",un.state.sunShadowMap,ne),un.state.directionalShadowMap.length>0&&vt.setValue(X,"directionalShadowMap",un.state.directionalShadowMap,ne),un.state.spotShadowMap.length>0&&vt.setValue(X,"spotShadowMap",un.state.spotShadowMap,ne),un.state.pointShadowMap.length>0&&vt.setValue(X,"pointShadowMap",un.state.pointShadowMap,ne)),K.isSkinnedMesh){vt.setOptional(X,K,"bindMatrix"),vt.setOptional(X,K,"bindMatrixInverse");let Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),vt.setValue(X,"boneTexture",Rt.boneTexture,ne))}K.isBatchedMesh&&(vt.setOptional(X,K,"batchingTexture"),vt.setValue(X,"batchingTexture",K._matricesTexture,ne),vt.setOptional(X,K,"batchingIdTexture"),vt.setValue(X,"batchingIdTexture",K._indirectTexture,ne),vt.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&vt.setValue(X,"batchingColorTexture",K._colorsTexture,ne));let Xi=ee.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&W.update(K,ee,Fn),(Wi||Se.receiveShadow!==K.receiveShadow)&&(Se.receiveShadow=K.receiveShadow,vt.setValue(X,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Nt.envMapIntensity.value=G.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=Y1()),Wi){if(vt.setValue(X,"toneMappingExposure",P.toneMappingExposure),Se.needsLights&&Ox(Nt,js),_e&&$.fog===!0&&Pe.refreshFogUniforms(Nt,_e),Pe.refreshMaterialUniforms(Nt,$,j,q,S.state.transmissionRenderTarget[R.id]),Se.needsLights&&Se.lightProbeGrid){let Rt=Se.lightProbeGrid;Nt.probesSH.value=Rt.texture,Nt.probesMin.value.copy(Rt.boundingBox.min),Nt.probesMax.value.copy(Rt.boundingBox.max),Nt.probesResolution.value.copy(Rt.resolution)}zr.upload(X,Xd(Se),Nt,ne)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(zr.upload(X,Xd(Se),Nt,ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(X,"center",K.center),vt.setValue(X,"modelViewMatrix",K.modelViewMatrix),vt.setValue(X,"normalMatrix",K.normalMatrix),vt.setValue(X,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){let Rt=$.uniformsGroups;for(let qi=0,Qs=Rt.length;qi<Qs;qi++){let $d=Rt[qi];oe.update($d,Fn),oe.bind($d,Fn)}}return Fn}function Ox(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.sunLights.needsUpdate=G,R.sunLightShadows.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Ux(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,G,ee){let $=J.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(R.texture).__webglTexture=G,J.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){let ee=J.get(R);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,ee=0){V=R,O=G,U=ee;let $=null,K=!1,_e=!1;if(R){let ye=J.get(R);if(ye.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,ye.__webglFramebuffer),H.copy(R.viewport),te.copy(R.scissor),Z=R.scissorTest,w.viewport(H),w.scissor(te),w.setScissorTest(Z),k=-1;return}else if(ye.__webglFramebuffer===void 0)ne.setupRenderTarget(R);else if(ye.__hasExternalTextures)ne.rebindTextures(R,J.get(R.texture).__webglTexture,J.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let $e=R.depthTexture;if(ye.__boundDepthTexture!==$e){if($e!==null&&J.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(R)}}let Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(_e=!0);let Ce=J.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?$=Ce[G][ee]:$=Ce[G],K=!0):R.samples>0&&ne.useMultisampledRTT(R)===!1?$=J.get(R).__webglMultisampledFramebuffer:Array.isArray(Ce)?$=Ce[ee]:$=Ce,H.copy(R.viewport),te.copy(R.scissor),Z=R.scissorTest}else H.copy(be).multiplyScalar(j).floor(),te.copy(Ge).multiplyScalar(j).floor(),Z=rt;if(ee!==0&&($=L),w.bindFramebuffer(X.FRAMEBUFFER,$)&&w.drawBuffers(R,$),w.viewport(H),w.scissor(te),w.setScissorTest(Z),K){let ye=J.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,ye.__webglTexture,ee)}else if(_e){let ye=G;for(let Ae=0;Ae<R.textures.length;Ae++){let Ce=J.get(R.textures[Ae]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,ee,ye)}}else if(R!==null&&ee!==0){let ye=J.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ye.__webglTexture,ee)}k=-1};function Yd(R){let G=J.get(R);return(G.__readFormat!==R.format||G.__readType!==R.type)&&(G.__readFormat=R.format,G.__readType=R.type,G.__formatReadable=N.textureFormatReadable(R.format),G.__typeReadable=N.textureTypeReadable(R.type)),G}this.readRenderTargetPixels=function(R,G,ee,$,K,_e,we,ye=0){if(!(R&&R.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){w.bindFramebuffer(X.FRAMEBUFFER,Ae);try{let Ce=R.textures[ye],$e=Ce.format,et=Ce.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ye);let Ee=Yd(Ce);if(Ee.__formatReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-$&&ee>=0&&ee<=R.height-K&&X.readPixels(G,ee,$,K,me.convert($e),me.convert(et),_e)}finally{let Ce=V!==null?J.get(V).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(R,G,ee,$,K,_e,we,ye=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=J.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae)if(G>=0&&G<=R.width-$&&ee>=0&&ee<=R.height-K){w.bindFramebuffer(X.FRAMEBUFFER,Ae);let Ce=R.textures[ye],$e=Ce.format,et=Ce.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ye);let Ee=Yd(Ce);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,dt),X.bufferData(X.PIXEL_PACK_BUFFER,_e.byteLength,X.STREAM_READ),X.readPixels(G,ee,$,K,me.convert($e),me.convert(et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Ht=V!==null?J.get(V).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Ht);let Ct=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await vm(X,Ct,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,dt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,_e),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(dt),X.deleteSync(Ct),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,ee=0){let $=Math.pow(2,-ee),K=Math.floor(R.image.width*$),_e=Math.floor(R.image.height*$),we=G!==null?G.x:0,ye=G!==null?G.y:0;ne.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,we,ye,K,_e),w.unbindTexture()},this.copyTextureToTexture=function(R,G,ee=null,$=null,K=0,_e=0){let we,ye,Ae,Ce,$e,et,Ee,dt,Ht,Ct=R.isCompressedTexture?R.mipmaps[_e]:R.image;if(ee!==null)we=ee.max.x-ee.min.x,ye=ee.max.y-ee.min.y,Ae=ee.isBox3?ee.max.z-ee.min.z:1,Ce=ee.min.x,$e=ee.min.y,et=ee.isBox3?ee.min.z:0;else{let Nt=Math.pow(2,-K);we=Math.floor(Ct.width*Nt),ye=Math.floor(Ct.height*Nt),R.isDataArrayTexture?Ae=Ct.depth:R.isData3DTexture?Ae=Math.floor(Ct.depth*Nt):Ae=1,Ce=0,$e=0,et=0}$!==null?(Ee=$.x,dt=$.y,Ht=$.z):(Ee=0,dt=0,Ht=0);let wt=me.convert(G.format),nn=me.convert(G.type),Se;G.isData3DTexture?(ne.setTexture3D(G,0),Se=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),Se=X.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),Se=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);let un=w.getParameter(X.UNPACK_ROW_LENGTH),at=w.getParameter(X.UNPACK_IMAGE_HEIGHT),Fn=w.getParameter(X.UNPACK_SKIP_PIXELS),ii=w.getParameter(X.UNPACK_SKIP_ROWS),Wi=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Ct.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(X.UNPACK_SKIP_ROWS,$e),w.pixelStorei(X.UNPACK_SKIP_IMAGES,et);let js=R.isDataArrayTexture||R.isData3DTexture,vt=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){let Nt=J.get(R),Xi=J.get(G),Rt=J.get(Nt.__renderTarget),qi=J.get(Xi.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Rt.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let Qs=0;Qs<Ae;Qs++)js&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(R).__webglTexture,K,et+Qs),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(G).__webglTexture,_e,Ht+Qs)),X.blitFramebuffer(Ce,$e,we,ye,Ee,dt,we,ye,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||J.has(R)){let Nt=J.get(R),Xi=J.get(G);w.bindFramebuffer(X.READ_FRAMEBUFFER,T),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,F);for(let Rt=0;Rt<Ae;Rt++)js?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nt.__webglTexture,K,et+Rt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nt.__webglTexture,K),vt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Xi.__webglTexture,_e,Ht+Rt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Xi.__webglTexture,_e),K!==0?X.blitFramebuffer(Ce,$e,we,ye,Ee,dt,we,ye,X.COLOR_BUFFER_BIT,X.NEAREST):vt?X.copyTexSubImage3D(Se,_e,Ee,dt,Ht+Rt,Ce,$e,we,ye):X.copyTexSubImage2D(Se,_e,Ee,dt,Ce,$e,we,ye);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else vt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Se,_e,Ee,dt,Ht,we,ye,Ae,wt,nn,Ct.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Se,_e,Ee,dt,Ht,we,ye,Ae,wt,Ct.data):X.texSubImage3D(Se,_e,Ee,dt,Ht,we,ye,Ae,wt,nn,Ct):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,_e,Ee,dt,we,ye,wt,nn,Ct.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,_e,Ee,dt,Ct.width,Ct.height,wt,Ct.data):X.texSubImage2D(X.TEXTURE_2D,_e,Ee,dt,we,ye,wt,nn,Ct);w.pixelStorei(X.UNPACK_ROW_LENGTH,un),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Fn),w.pixelStorei(X.UNPACK_SKIP_ROWS,ii),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Wi),_e===0&&G.generateMipmaps&&X.generateMipmap(Se),w.unbindTexture()},this.initRenderTarget=function(R){J.get(R).__webglFramebuffer===void 0&&ne.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ne.setTextureCube(R,0):R.isData3DTexture?ne.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ne.setTexture2DArray(R,0):ne.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){O=0,U=0,V=null,w.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function o0(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(t[n]=s)}return t}function a0(i,e,t,n){for(let s=t.start*3;s<t.end*3;s++){let r=e[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}var $1=[],na=new Map,K1=0,l0=(i,e)=>`pack:${i}:${e}`,Z1=i=>i.startsWith("pack:");function Ic(i){$1=i,na=new Map;for(let e of i)for(let t of e.items)na.set(l0(e.id,t.id),t);K1+=1}var J1={};function Zt(i){if(!Z1(i))return;let e=na.get(i);if(e)return e;let[,t,...n]=i.split(":"),s=J1[t];return s?na.get(l0(s,n.join(":"))):void 0}var c0=i=>Zt(i)?.parts.find(e=>e.screen);function Un(i,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Lc;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));let t=Zt(e.type);if(!t)return ia(e);switch(t.mount){case"surface":return m0(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return 0}}var u0=null,h0=new Set,f0=i=>{u0=i},d0=()=>u0,p0=i=>{h0.add(i)};function Pc(i){let e=na.get(i)?.mesh;return e!==void 0&&h0.has(e)}var Fc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Gs(i){return i==="hedge"||i==="fence"||i==="pergola"}function of(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,u)=>s==="x"?c:s==="-x"?-c:s==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=r(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-o)/(a-o)));return n*l}function Q1(i,e,t,n){return sa(i)+(e.offset??0)+Fc[e.type]-of(e,t,n)}function sa(i){return i.elevation>.3?0:-.2}function g0(i,e,t){let n=(i.outdoor??[]).filter(r=>!Gs(r.type)&&r.type!=="pool"&&xt([e,t],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?Q1(i,s,e,t):sa(i)}var eS={type:"none",pitch:35,overhang:.4},FE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...eS}};var x0=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Lc=1.75;function b0(i){return x0.has(i)||!!Zt(i)?.light}var tS=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ia(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function m0(i,e,t){let n=0;for(let s of i.furniture)!(tS.has(s.type)||Zt(s.type)?.surface)||!xt([e,t],Nc(s))||(n=Math.max(n,s.h));return n}var j1=new Set([...x0,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var nS=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],iS=["standard","bars","glass_wall"];function Hs(i,e){return i.type==="door"?i.style&&nS.includes(i.style)?i.style:e?"front":"interior":i.style&&iS.includes(i.style)?i.style:"standard"}function y0(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let s=e==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let u=r-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function _0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Ws(i){let e=0;for(let t=0;t<i.length;t++){let[n,s]=i[t],[r,o]=i[(t+1)%i.length];e+=n*o-r*s}return e/2}function ra(i){return Math.abs(Ws(i))}function Dc(i){let e=Ws(i);if(Math.abs(e)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let t=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;t+=(r+a)*c,n+=(o+l)*c}return[t/(6*e),n/(6*e)]}function v0(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[s,r]=i[(e+1)%4];if(Math.abs(t-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function M0(i){let e=1/0,t=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)e=Math.min(e,r),t=Math.min(t,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:e,z0:t,x1:n,z1:s}}function Nc(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*t-a*n,i.z+o*n+a*t])}function xt(i,e){let t=!1;for(let n=0,s=e.length-1;n<e.length;s=n++){let[r,o]=e[n],[a,l]=e[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(t=!t)}return t}var af=Math.PI/180,Wr=i=>Math.tan(Math.min(80,Math.max(0,i))*af);function Oc(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Mn(i){let{x0:e,x1:t,z0:n,z1:s}=Oc(i);return i.axis==="x"?{u0:e,u1:t,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:t-e,at:(r,o)=>[i.flip?t-o:e+o,r]}}function xi(i,e,t){let{x0:n,x1:s,z0:r,z1:o}=Oc(i);return i.axis==="x"?[e,i.flip?o-t:t-r]:[t,i.flip?s-e:e-n]}var oa=Math.tan(30*af);function lf(i,e,t,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=e+r*n,l=t+o*s,c=Math.min(i-o,Math.max(r,(l-a+oa*(i-o+r))/(2*oa))),u=a+(c-r)*oa;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=r?e+f*n:f<=c?a+(f-r)*oa:f<=i-o?l+(i-o-f)*oa:t+(i-f)*s}}function pn(i){let e=Mn(i).w,[t,n]=[i.eave_a,i.eave_b],[s,r]=[Wr(i.pitch_a),Wr(i.pitch_b)];switch(i.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*s,y:o=>t+o*s};case"mansard":{let o=lf(e,t,n,s,r);return{vr:o.vr,rh:o.rh,y:o.y}}default:{let o=s+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(s+r))):e/2;return{vr:o,rh:t+o*s,y:a=>a<=o?t+a*s:n+(e-a)*r}}}}var cf=i=>pn(i).rh;var ct=(i,e)=>[i[0]-e[0],i[1]-e[1]],bi=(i,e)=>[i[0]+e[0],i[1]+e[1]],ei=(i,e)=>[i[0]*e,i[1]*e],Sn=(i,e)=>i[0]*e[0]+i[1]*e[1],wn=(i,e)=>i[0]*e[1]-i[1]*e[0],Bn=i=>Math.hypot(i[0],i[1]),ti=i=>{let e=Bn(i)||1;return[i[0]/e,i[1]/e]},uf=i=>[-i[1],i[0]],hf=i=>[i[1],-i[0]];function S0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function sS(i,e){let t=i.map(n=>({...n}));for(let n of e){let s=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):t.push({...n})}return t}function rS(i,e,t){if(i.a===e.b)return!1;let n=ti(ct(t[i.b],t[i.a])),s=ti(ct(t[e.b],t[e.a]));return Math.abs(wn(n,s))>1e-6||Sn(n,s)<=0||i.free||e.free?!1:i.height===e.height&&i.exterior===e.exterior&&i.roomLeft===e.roomLeft&&i.roomRight===e.roomRight&&Math.abs(i.left-e.left)<=1e-9&&Math.abs(i.right-e.right)<=1e-9}function w0(i,e,t=new Set){let n=i.slice();for(;;){let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b])s.set(l,[...s.get(l)??[],a])});let r=null;for(let[o,a]of s){if(a.length!==2||t.has(o))continue;let l=n[a[0]].b===o?n[a[0]]:S0(n[a[0]]),c=n[a[1]].a===o?n[a[1]]:S0(n[a[1]]);if(!rS(l,c,e))continue;let u={...l,b:c.b,sources:sS(l.sources,c.sources)};r=[...n.filter((h,f)=>f!==a[0]&&f!==a[1]),u];break}if(!r)return n;n=r}}function T0(i,e){let t=new Map;i.forEach((s,r)=>{let o=ti(ct(e[s.b],e[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:ei(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[s,r]of t){let o=e[s];r.sort((l,c)=>l.angle-c.angle);for(let l of r)n.set(l.key,{left:bi(o,ei(uf(l.d),l.left)),right:bi(o,ei(hf(l.d),l.right))});if(r.length<2)continue;let a=4*Math.max(...r.map(l=>Math.max(l.left,l.right)))+1e-9;r.forEach((l,c)=>{let u=r[(c+1)%r.length],h=bi(o,ei(uf(l.d),l.left)),f=bi(o,ei(hf(u.d),u.right)),d=wn(l.d,u.d);if(Math.abs(d)<1e-4)return;let m=bi(h,ei(l.d,wn(ct(f,h),u.d)/d));Bn(ct(m,o))>a||(n.get(l.key).left=m,n.get(u.key).right=m)})}return n}function A0(i,e){let t=i.filter((n,s)=>Bn(ct(n,i[(s+1)%i.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((s,r)=>{let o=t[(r+t.length-1)%t.length],a=t[(r+1)%t.length],[l,c]=[ct(s,o),ct(a,s)];return Math.abs(wn(ti(l),ti(c)))<1e-7&&Sn(l,c)>0});if(n===-1)return t;t=t.filter((s,r)=>r!==n)}}function oS(i){let e=[];return{points:e,idOf(t){let n=e.findIndex(s=>Math.abs(s[0]-t[0])<=i&&Math.abs(s[1]-t[1])<=i);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function aS(i,e){let t=[];for(let n of i){let s=n.points;if(s.length<3||Math.abs(Ws(s))<1e-6)continue;let r=Ws(s)>0,o=s.map(a=>e.idOf(a));o.forEach((a,l)=>{let c=o[(l+1)%o.length];a!==c&&t.push(r?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function lS(i,e,t){let n=[];for(let s of i){let[r,o]=[e[s.u],e[s.v]],a=ct(o,r),l=Bn(a),c=ei(a,1/l),u=e.map((f,d)=>({id:d,rel:ct(f,r)})).filter(({id:f,rel:d})=>f!==s.u&&f!==s.v&&Sn(d,c)>t&&Sn(d,c)<l-t&&Math.abs(wn(c,d))<=t).map(({id:f,rel:d})=>({t:Sn(d,c),id:f})).sort((f,d)=>f.t-d.t),h=[{t:0,id:s.u},...u,{t:l,id:s.v}];for(let f=0;f+1<h.length;f++){let[d,m]=[h[f],h[f+1]];n.push({u:d.id,v:m.id,room:s.room,edge:s.edge,t0:s.forward?d.t:l-m.t,t1:s.forward?m.t:l-d.t})}}return n}var E0=i=>({room_id:i.room,edge:i.edge,t0:i.t0,t1:i.t1});function cS(i,e){let t=new Map(i.map(r=>[r.id,r])),n=new Map;for(let r of e){let o=`${r.room}:${r.edge}`;n.set(o,[...n.get(o)??[],r.t0].sort((a,l)=>a-l))}let s=r=>{let o=t.get(r.room)?.wall_heights?.[r.edge];return Array.isArray(o)?o[(n.get(`${r.room}:${r.edge}`)??[]).indexOf(r.t0)]??null:o};return{heightOf(r){let o=r.map(s).filter(a=>typeof a=="number"&&a>0);return o.length?Math.min(...o):void 0},thicknessOf(r){let o=r.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return o.length?Math.max(...o):void 0},hasNoWall:r=>r.some(o=>s(o)===0)}}function uS(i,e,t,n){let s=cS(e,i),r=new Map;for(let l of i){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;r.set(c,[...r.get(c)??[],l])}let o=[],a=[];for(let l of r.values()){let c=l[0],u=l.find(f=>f!==c&&f.u===c.v&&f.v===c.u&&f.room!==c.room);for(let f of l)f!==c&&f!==u&&f.room!==c.room&&n.push(`overlap:${c.room}:${f.room}`);let h=u?[c,u]:[c];if(s.hasNoWall(h)){u&&a.push([c.room,u.room]);continue}if(u){let f=s.thicknessOf(h)??t.interior;o.push({a:c.u,b:c.v,left:f/2,right:f/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:h.map(E0),height:s.heightOf(h)})}else o.push({a:c.u,b:c.v,left:0,right:s.thicknessOf(h)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[E0(c)],height:s.heightOf(h)})}return{drafts:o,open:a}}function hS(i,e){let t=n=>ti(ct(e[n.b],e[n.a]));for(let n of i){if(n.exterior||n.free)continue;let s=new Set;for(let o of[n.a,n.b])for(let a of i)!a.exterior||a.free||a.a!==o&&a.b!==o||Math.abs(wn(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?s.add("left"):a.roomLeft===n.roomRight&&s.add("right"));if(s.size!==1)continue;let r=n.left+n.right;[n.left,n.right]=s.has("left")?[0,r]:[r,0]}}var fS=(i,e)=>{let t=r=>Math.round(r*100),[n,s]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(s[0])}_${t(s[1])}`};function aa(i,e,t=[]){let n=e.eps??.005,s=[],r=oS(n),o=aS(i,r),a=t.filter(p=>Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1])>.05),l=a.map(p=>[r.idOf(p.a),r.idOf(p.b)]),c=new Set;for(let p of i){let y=p.points;y.length<3||(p.wall_splits??[]).forEach((v,b)=>{if(!v||b>=y.length)return;let _=y[b],S=ct(y[(b+1)%y.length],_),E=Bn(S);for(let M of v)M>n&&M<E-n&&c.add(r.idOf(bi(_,ei(S,M/E))))})}let u=lS(o,r.points,n),{drafts:h,open:f}=uS(u,i,e,s);hS(h,r.points);let d=h;a.forEach((p,y)=>{let[v,b]=l[y];if(v===b)return;let _=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],S=i.find(M=>M.points.length>=3&&xt(_,M.points))?.id??null,E=(p.thickness??e.interior)/2;d.push({free:p.id,a:v,b,left:E,right:E,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof p.height=="number"&&p.height>0?p.height:void 0})});let m=w0(d,r.points,c),x=T0(m,r.points);return{walls:m.map((p,y)=>{let[v,b]=[r.points[p.a],r.points[p.b]],[_,S]=[x.get(`${y}:a`),x.get(`${y}:b`)],E=A0([_.right,S.left,b,S.right,_.left,v],1e-6);return{id:fS(v,b),a:[v[0],v[1]],b:[b[0],b[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:E,...p.free?{free:p.free}:{},...p.height!==void 0?{height:p.height}:{}}}),warnings:[...new Set(s)],open:f}}function R0(i,e,t){let n=i.points[e];return bi(n,ei(ti(ct(i.points[(e+1)%i.points.length],n)),t))}function C0(i,e,t){if(i.wall){let s=t.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=ti(ct(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,bi(s.a,[-r[1],r[0]])]},edge:0}}let n=e.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}var I0=(i,e)=>Sn(ct(e,i.a),ti(ct(i.b,i.a)));function P0(i,e,t){if(!e.wall)return dS(i,t.room,t.edge,e.offset);let n=i.find(s=>s.free===e.wall);return n?{wall:n,s:I0(n,R0(t.room,0,e.offset))}:null}function dS(i,e,t,n){for(let s of i)if(s.sources.some(o=>o.room_id===e.id&&o.edge===t&&n>=o.t0-1e-6&&n<=o.t1+1e-6))return{wall:s,s:I0(s,R0(e,t,n))};return null}var L0=([i,e])=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function pS(i){return i.reduce((e,t,n)=>e+(t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1]),0)/2}function Uc(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(([s,r])=>[s,r]);let n=pS(i)>=0?1:-1;return i.map((s,r)=>{let o=i[(r+t-1)%t],a=i[(r+1)%t],[l,c]=L0([s[0]-o[0],s[1]-o[1]]),[u,h]=L0([a[0]-s[0],a[1]-s[1]]),f=[c*n,-l*n],d=[h*n,-u*n],m=[f[0]+d[0],f[1]+d[1]],x=Math.hypot(m[0],m[1]);if(x<1e-6)return[s[0]+f[0]*e,s[1]+f[1]*e];let g=(m[0]*f[0]+m[1]*f[1])/x,p=Math.min(4,1/Math.max(.25,g));return[s[0]+m[0]/x*e*p,s[1]+m[1]/x*e*p]})}function ff(i,e){if(i.points&&i.points.length>=3)return Uc(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,s=Math.min(i.z0,i.z1)-e,r=Math.max(i.z0,i.z1)+e;return[[t,s],[n,s],[n,r],[t,r]]}function ls(i,e){let t=Mn(i),n=pn(i),s=t.w,[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(p,y)=>[p,y,n.y(y)],u=c(a,-r),h=c(l,-r),f=c(l,s+o),d=c(a,s+o),[m,x]=[Wr(i.pitch_a),Wr(i.pitch_b)],g=p=>[p,n.vr,n.rh];switch(i.shape){case"pent":return{faces:[[u,h,f,d]],rim:[u,h,f,d],ridges:[[f,d]],gable:[[0,n.y(0)],[s,n.y(s)]]};case"hip":case"pyramid":{let p=(t.u1-t.u0)/2,y=i.shape==="pyramid"?p:Math.min(p,Math.min(n.vr,s-n.vr)||s/2),v=g(t.u0+y),b=g(t.u1-y);return i.shape==="pyramid"?{faces:[[u,h,v],[h,f,v],[f,d,v],[d,u,v]],rim:[u,h,f,d],ridges:[[u,v],[d,v],[h,v],[f,v]],gable:null}:{faces:[[u,h,b,v],[v,b,f,d],[d,u,v],[h,f,b]],rim:[u,h,f,d],ridges:[[v,b],[u,v],[d,v],[h,b],[f,b]],gable:null}}case"halfhip":{let p=Math.min(n.y(0),n.y(s)),y=p+(n.rh-p)*.55,v=m>1e-6?Math.min(n.vr,(y-i.eave_a)/m):n.vr,b=x>1e-6?Math.max(n.vr,s-(y-i.eave_b)/x):n.vr,_=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),S=g(t.u0+_),E=g(t.u1-_),M=[a,v,y],A=[a,b,y],P=[l,v,y],C=[l,b,y];return{faces:[[u,h,P,E,S,M],[S,E,C,f,d,A],[A,M,S],[P,C,E]],rim:[u,h,P,C,f,d,A,M],ridges:[[S,E],[M,S],[A,S],[P,E],[C,E]],gable:[[0,n.y(0)],[v,y],[b,y],[s,n.y(s)]]}}case"mansard":{let p=lf(s,i.eave_a,i.eave_b,m,x),y=[a,p.vla,p.yla],v=[l,p.vla,p.yla],b=[a,s-p.vlb,p.ylb],_=[l,s-p.vlb,p.ylb],S=[a,p.vr,p.rh],E=[l,p.vr,p.rh];return{faces:[[u,h,v,y],[y,v,E,S],[S,E,_,b],[b,_,f,d]],rim:[u,h,v,E,_,f,d,b,S,y],ridges:[[S,E],[y,v],[b,_]],gable:[[0,n.y(0)],[p.vla,p.yla],[p.vr,p.rh],[s-p.vlb,p.ylb],[s,n.y(s)]]}}default:{let p=g(a),y=g(l);return{faces:[[u,h,y,p],[p,y,f,d]],rim:[u,h,y,f,d,p],ridges:[[p,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}}}function Xs(i,e,t){let n=null;for(let s of i.faces){if(!xt([e,t],s.map(([f,d])=>[f,d])))continue;let[r,o]=s,a=s.slice(2).find(f=>Math.abs((o[0]-r[0])*(f[1]-r[1])-(o[1]-r[1])*(f[0]-r[0]))>1e-9);if(!a)continue;let l=[o[0]-r[0],o[2]-r[2],o[1]-r[1]],c=[a[0]-r[0],a[2]-r[2],a[1]-r[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let h=r[2]-(u[0]*(e-r[0])+u[2]*(t-r[1]))/u[1];n=n===null?h:Math.min(n,h)}return n}function Xr(i,e,t,n){let s=o=>n?o[e]<=t+1e-9:o[e]>=t-1e-9,r=[];return i.forEach((o,a)=>{let l=i[(a+1)%i.length];if(s(o)&&r.push(o),s(o)!==s(l)){let c=(t-o[e])/(l[e]-o[e]);r.push([o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c])}}),r}function Bc(i,e){let t=Xr(Xr(i,0,e.u0,!1),0,e.u1,!0);return[Xr(i,0,e.u0,!0),Xr(i,0,e.u1,!1),Xr(t,1,e.v0,!0),Xr(t,1,e.v1,!1)].filter(s=>s.length>=3&&Math.abs(ra(s.map(([r,o])=>[r,o])))>1e-6)}function la(i,e,t){let n=Mn(e),s=i.floors.flatMap(u=>u.rooms.filter(h=>h.points.length>=3&&u.elevation+u.height>e.base+.05)),r=u=>u.some(h=>s.some(f=>xt(h,f.points))),o=.35,a=[.15,.5,.85].map(u=>n.u0+(n.u1-n.u0)*u),l=[.15,.5,.85].map(u=>n.w*u),c=u=>u?0:t;return{a:c(r(a.map(u=>n.at(u,-o)))),b:c(r(a.map(u=>n.at(u,n.w+o)))),u0:c(r(l.map(u=>n.at(n.u0-o,u)))),u1:c(r(l.map(u=>n.at(n.u1+o,u))))}}var kc=i=>Math.abs((i.x1-i.x0)*(i.z1-i.z0)),F0=i=>i.shape==="flat"||i.shape==="parapet";function qr(i,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return i.filter(r=>{if(r===e||r.dormer||r.open||F0(r)||kc(r)<kc(e)*1.5)return!1;let o=Oc(r);return t>=o.x0&&t<=o.x1&&n>=o.z0&&n<=o.z1}).reduce((r,o)=>r===null||kc(o)<kc(r)?o:r,null)}function D0(i,e){let t=ls(i,{u0:0,u1:0,a:0,b:0}),n=pn(i);return s=>{let[r,o]=e.at(s,e.w/2),[a,l]=xi(i,r,o);return Xs(t,a,l)??n.y(l)}}function zc(i,e){if(F0(e))return e;let t=Mn(e),n=pn(e).rh,s=D0(i,t),r=s(t.u0)<=s(t.u1),[o,a]=r?[t.u0,t.u1]:[t.u1,t.u0],l=r?1:-1,c=a;for(let f=.5;f<Math.abs(a-o);f+=.05)if(s(o+l*f)>=n-.02){c=o+l*f;break}if(Math.abs(c-a)<.05)return e;let u={...e},h=a===t.u1;return e.axis==="x"?u[h?"x1":"x0"]=c:u[h?"z1":"z0"]=c,u}function df(i,e){let t=zc(i,e),n=Mn(t),s=pn(t),r=D0(i,n),o=r(n.u0)<=r(n.u1),a=n.u1-n.u0,l=Math.max(1,Math.ceil(a/.15)),c=[];for(let u=0;u<l;u++){let[h,f]=[a*u/l,a*(u+1)/l],[d,m]=o?[n.u0+h,n.u0+f]:[n.u1-h,n.u1-f],x=r(m),g=1/0,p=-1/0;for(let b=0;b<=40;b++){let _=n.w*b/40;s.y(_)>x+.02&&(g=Math.min(g,_),p=Math.max(p,_))}if(!(p-g>.05))continue;let y=xi(i,...n.at(d,g)),v=xi(i,...n.at(m,p));c.push({u0:Math.min(y[0],v[0]),u1:Math.max(y[0],v[0]),v0:Math.min(y[1],v[1]),v1:Math.max(y[1],v[1])})}return c}var N0=.14,mS=i=>i.shape==="flat"||i.shape==="parapet";function pf(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function mf(i,e,t){let n=Math.max(0,i.settings.roof.overhang??0),s=1e-6,r=[];for(let o of i.settings.roof.sections??[]){if(o.open)continue;let[a,l,c,u]=[Math.min(o.x0,o.x1),Math.max(o.x0,o.x1),Math.min(o.z0,o.z1),Math.max(o.z0,o.z1)];if(e<a-s||e>l+s||t<c-s||t>u+s||o.points&&o.points.length>=3&&!xt([e,t],o.points))continue;let[h,f]=xi(o,e,t),d=Math.max(0,o.overhang??n),m=mS(o)?null:Xs(ls(o,{u0:d,u1:d,a:d,b:d}),h,f);r.push((m??pn(o).y(f))-N0)}return r.length?Math.max(...r):null}function gf(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}function xf(i,e,t){let n=i.settings.roof.sections??[],s=n.filter(l=>t.includes(l.id)).map(l=>qr(n,l)??l);if(s.length===0)return e.id;let r=Math.max(...s.map(cf)),o=l=>l.rooms.some(c=>{if(c.points.length<3)return!1;let u=c.points.reduce((f,d)=>f+d[0],0)/c.points.length,h=c.points.reduce((f,d)=>f+d[1],0)/c.points.length;return s.some(f=>u>=Math.min(f.x0,f.x1)&&u<=Math.max(f.x0,f.x1)&&h>=Math.min(f.z0,f.z1)&&h<=Math.max(f.z0,f.z1))});return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}var Ui=1e-4;function O0(i){return i.reduce((e,t,n)=>e+wn(t,i[(n+1)%i.length]),0)/2}var U0=i=>O0(i)>=0?[...i]:[...i].reverse();function B0(i,e,t,n){let s=ct(e,i),r=ct(n,t),o=wn(s,r);if(Math.abs(o)<1e-12)return null;let a=wn(ct(t,i),r)/o,l=wn(ct(t,i),s)/o;return a>Ui&&a<1-Ui&&l>-Ui&&l<1+Ui?a:null}function bf(i,e,t){let n=ct(t,e),s=Sn(n,n);if(s<1e-12)return null;let r=Sn(ct(i,e),n)/s;return r<=Ui||r>=1-Ui?null:Math.abs(wn(ct(i,e),n))/Math.sqrt(s)<Ui?r:null}var ca=(i,e,t=Ui)=>Bn(ct(i,e))<t,ua=i=>i.map((e,t)=>[e,i[(t+1)%i.length]]);function gS(i,e){for(let[t,n]of ua(i))for(let[s,r]of ua(e))if(B0(t,n,s,r)!==null||bf(s,t,n)!==null||bf(t,s,r)!==null||ca(t,s))return!0;return xt(i[0],e)||xt(e[0],i)}function xS(i){let e=i.map(U0),t=[];e.forEach((r,o)=>{for(let[a,l]of ua(r)){let c=[0,1];e.forEach((u,h)=>{if(h!==o)for(let[f,d]of ua(u)){let m=B0(a,l,f,d)??bf(f,a,l);m!==null&&c.push(m)}}),c.sort((u,h)=>u-h);for(let u=1;u<c.length;u++){if(c[u]-c[u-1]<Ui)continue;let h=[a[0]+(l[0]-a[0])*c[u-1],a[1]+(l[1]-a[1])*c[u-1]],f=[a[0]+(l[0]-a[0])*c[u],a[1]+(l[1]-a[1])*c[u]],d=Bn(ct(f,h)),m=[(h[0]+f[0])/2+(f[1]-h[1])/d*.001,(h[1]+f[1])/2-(f[0]-h[0])/d*.001];e.some((x,g)=>g!==o&&xt(m,x))||t.some(([x,g])=>ca(x,h)&&ca(g,f))||t.push([h,f])}}});let n=[],s=new Set;return t.forEach(([r,o],a)=>{if(s.has(a))return;s.add(a);let l=[r],c=o;for(let u=0;u<t.length&&!ca(c,l[0],.001);u++){let h=t.findIndex(([f],d)=>!s.has(d)&&ca(f,c,.001));if(h<0)break;s.add(h),l.push(t[h][0]),c=t[h][1]}l.length>=3&&O0(l)>1e-6&&n.push(l)}),n}function yf(i){let e=i.filter(r=>r.length>=3),t=e.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);e.forEach((r,o)=>{for(let a=o+1;a<e.length;a++)n(o)!==n(a)&&gS(r,e[a])&&(t[n(a)]=n(o))});let s=new Map;return e.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:xS(r))}function bS(i,e,t){let n=ct(t,e),s=Sn(n,n),r=s?Math.max(0,Math.min(1,Sn(ct(i,e),n)/s)):0;return Bn(ct(i,[e[0]+n[0]*r,e[1]+n[1]*r]))}function k0(i,e,t=.03){return i.every(n=>xt(n,e)||ua(e).some(([s,r])=>bS(n,s,r)<=t))}function z0(i,e){let t=U0(i),n=(s,r)=>{let o=ct(r,s),a=Bn(o)||1;return[-o[1]/a,o[0]/a]};return t.map((s,r)=>{let o=n(t[(r-1+t.length)%t.length],s),a=n(s,t[(r+1)%t.length]),l=1+Sn(o,a);return l<.1?s:[s[0]+(o[0]+a[0])/l*e,s[1]+(o[1]+a[1])/l*e]})}var Lt=Math.PI/180;function ke(i,e){let t=new Q(i).multiplyScalar(e);return t.setRGB(Math.min(1,t.r),Math.min(1,t.g),Math.min(1,t.b))}var Bi=ke(3662079,.95),Vc=ke(3662079,1),ki=ke(5995775,.34),_f=ke(5995775,.22),ha=[-.55,.83],fa=i=>.5+.5*Math.min(1,Math.max(0,i/1.6));function vf(i,e){let t=Math.hypot(i,e);return .8+.28*((e/t*ha[0]-i/t*ha[1]+1)/2)}var st=-1,da=16,us=32,Mf=48,Gc=64,cs=(i,e)=>new He(i,e),ut=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,s,r=s,o=s,a,l=st,c=[0,1]){this.p.push(...e,...t,...n);for(let u of[s,r,o])this.c.push(u.r,u.g,u.b);this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new ze;return e.setAttribute("position",cs(this.p,3)),e.setAttribute("color",cs(this.c,3)),e.setAttribute("fold",cs(this.f,1)),this.uv&&e.setAttribute("uv",cs(this.uv,2)),this.tile&&e.setAttribute("tile",cs(this.tile,2)),e.computeBoundingSphere(),e}},Qt=class{p=[];c=[];f=[];seg(e,t,n=Bi,s=st){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(e,t,n,s,r){let[o,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,st);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,st),this.seg(c,a,n,r)}geometry(){let e=new ze;return e.setAttribute("position",cs(this.p,3)),e.setAttribute("color",cs(this.c,3)),e.setAttribute("fold",cs(this.f,1)),e}};var Sf=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function V0(i,e,t){let n=(t-i.p[1])/(e.p[1]-i.p[1]);return{p:Sf(i.p,e.p,n),c:Sf(i.c,e.c,n),uv:i.uv&&e.uv?Sf(i.uv,e.uv,n):null,tile:i.tile}}function yS(i,e){return{p:i.p.slice(e*3,e*3+3),c:i.c.slice(e*3,e*3+3),uv:i.uv?i.uv.slice(e*2,e*2+2):null,tile:i.tile?i.tile.slice(e*2,e*2+2):null}}function _S(i,e,t,n){t.forEach((s,r)=>{let o=e*3+r;s.p.forEach((a,l)=>i.p[o*3+l]=a),s.c.forEach((a,l)=>i.c[o*3+l]=a),i.uv&&s.uv&&s.uv.forEach((a,l)=>i.uv[o*2+l]=a),i.tile&&s.tile&&s.tile.forEach((a,l)=>i.tile[o*2+l]=a),i.f[o]=n})}function G0(i,e,t){for(let n of e)i.p.push(...n.p),i.c.push(...n.c),i.f.push(t),i.uv?.push(...n.uv??[.5,.5]),i.tile?.push(...n.tile??[0,1])}function wf(i,e,t,n){let s=i.count;for(let r=e;r<s;r++){let o=[0,1,2].map(v=>yS(i,r*3+v)),a=o.map(v=>v.p[1]>t+1e-6),l=o.map(v=>v.p[1]<t-1e-6);if(!a.some(Boolean))continue;if(!l.some(Boolean)){for(let v=0;v<3;v++)i.f[r*3+v]=n;continue}let c=i.f[r*3],u=a.filter(Boolean).length,h=u===1?a.indexOf(!0):a.indexOf(!1),[f,d,m]=[o[h],o[(h+1)%3],o[(h+2)%3]],x=V0(f,d,t),g=V0(m,f,t),[p,y]=u===1?[n,c]:[c,n];_S(i,r,[f,x,g],p),G0(i,[x,d,m],y),G0(i,[x,m,g],y)}}function Tf(i,e,t,n){let s=i.p.length/6;for(let r=e;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u],f=i.c.slice(r*6,r*6+3);i.p.splice(r*6,6,...l,...h),i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var vS=i=>i.reduce((e,t,n)=>e+t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1],0),H0=([i,e])=>new Ne(i,e);function $r(i,e=[]){return Po.triangulateShape(i.map(H0),e.map(t=>t.map(H0)))}var Yr=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],W0=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],X0=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],q0=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function Af(i,e,t,n,s,r,o){let a=new Q(o);for(let f=0;f<4;f++){let[d,m]=[e[f],e[(f+1)%4]],[x,g]=[t[f],t[(f+1)%4]],[p,y]=[m[0]-d[0],m[1]-d[1]],v=Math.hypot(p,y);if(v<1e-6)continue;let b=(x[0]+g[0]-d[0]-m[0])/2*(-y/v)+(x[1]+g[1]-d[1]-m[1])/2*(p/v),_=Math.max(0,Math.min(1,b/Math.max(1e-6,Math.hypot(b,s-n)))),S=vf(p,y),E=ke(r,fa(n)*S).lerp(a,_),M=ke(r,fa(s)*S).lerp(a,_);i.tri([d[0],n,d[1]],[x[0],s,x[1]],[g[0],s,g[1]],E,M,M),i.tri([d[0],n,d[1]],[g[0],s,g[1]],[m[0],n,m[1]],E,M,E)}let[l,c,u,h]=t;Math.hypot(u[0]-l[0],u[1]-l[1])>1e-4&&(i.tri([l[0],s,l[1]],[u[0],s,u[1]],[c[0],s,c[1]],a),i.tri([l[0],s,l[1]],[h[0],s,h[1]],[u[0],s,u[1]],a))}function Ef(i,e,t,n){let s=e.length;if(s<2)return;let r=e[0].length,o=new Q(n),a=e.map(h=>[0,1,2].map(f=>h.reduce((d,m)=>d+m[f],0)/r)),l=e.map((h,f)=>h.map((d,m)=>{let x=Yr(e[Math.min(s-1,f+1)][m],e[Math.max(0,f-1)][m]),g=Yr(h[(m+1)%r],h[(m+r-1)%r]),p=q0(W0(x,g));return X0(p,Yr(d,a[f]))<0?p.map(y=>-y):p})),c=(h,f)=>{let d=(f[0]*ha[0]+f[2]*ha[1]+1)/2;return ke(t,fa(h[1])*(.8+.28*d)).lerp(o,Math.max(0,f[1])*.9)},u=(h,f,d,m,x,g,p)=>{X0(W0(Yr(f,h),Yr(d,h)),m)>=0?i.tri(h,f,d,x,g,p):i.tri(h,d,f,x,p,g)};for(let h=0;h+1<s;h++)for(let f=0;f<r;f++){let d=(f+1)%r,m=[e[h][f],e[h][d],e[h+1][d],e[h+1][f]],x=[l[h][f],l[h][d],l[h+1][d],l[h+1][f]],[g,p,y,v]=m.map((_,S)=>c(_,x[S])),b=[0,1,2].map(_=>x.reduce((S,E)=>S+E[_],0));u(m[0],m[1],m[2],b,g,p,y),u(m[0],m[2],m[3],b,g,y,v)}for(let[h,f]of[[0,-1],[s-1,1]]){let d=e[h],m=Yr(e[h===0?1:s-2][0],d[0]),x=q0(m.map(p=>p*-f)),g=c(a[h],x);for(let p=0;p<r;p++)u(d[p],d[(p+1)%r],a[h],x,g,g,g)}}function Rf(i,e,t,n,s,r,o,a,l,c){let u=new Q(l),h=Array.from({length:c},(d,m)=>{let x=m/c*Math.PI*2;return{y:r+Math.cos(x)*o,across:s+Math.sin(x)*o}}),f=(d,m)=>{let{y:x,across:g}=h[m%c],[p,y]=e(d,g);return[p,x,y]};for(let d=0;d<c;d++){let m=ke(a,.62+.4*Math.max(0,Math.cos((d+.5)/c*Math.PI*2)));i.tri(f(t,d),f(n,d+1),f(n,d),m),i.tri(f(t,d),f(t,d+1),f(n,d+1),m)}for(let d of[t,n]){let[m,x]=e(d,s);for(let g=0;g<c;g++)i.tri([m,r,x],f(d,g),f(d,g+1),u)}}function It(i,e,t,n,s,r,o={}){let a=typeof n=="number"?()=>n:x=>Math.max(t+.002,n(x[0],x[1])),l=o.aoFrom??t,c=o.fold??st,u=x=>fa(x-l),h=(o.holes??[]).map(x=>vS(x)>0?[...x].reverse():x),f=h.length?[...e,...h.flat()]:e,d=o.topFace!==!1,m=!d&&!o.bottom?[]:$r(e,h);if(d){let x=new Q(r);for(let[g,p,y]of m){let[v,b,_]=[f[g],f[p],f[y]];i.tri([v[0],a(v),v[1]],[_[0],a(_),_[1]],[b[0],a(b),b[1]],x,x,x,void 0,o.topFold??c)}}if(o.bottom){let x=ke(s,.55);for(let[g,p,y]of m){let[v,b,_]=[f[g],f[p],f[y]];i.tri([v[0],t,v[1]],[b[0],t,b[1]],[_[0],t,_[1]],x,x,x,void 0,c)}}for(let x of[e,...h])x.forEach((g,p)=>{let y=x[(p+1)%x.length];if(Math.hypot(y[0]-g[0],y[1]-g[1])<1e-6||o.skipSide?.(g,y))return;let v=vf(y[0]-g[0],y[1]-g[1]),[b,_]=[a(g),a(y)],S=ke(s,u(t)*v),E=ke(s,u(b)*v),M=ke(s,u(_)*v);i.tri([g[0],t,g[1]],[g[0],b,g[1]],[y[0],_,y[1]],S,E,M,void 0,c),i.tri([g[0],t,g[1]],[y[0],_,y[1]],[y[0],t,y[1]],S,M,S,void 0,c)})}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},Me=ke(5995775,.3),ht=ke(5995775,.17),nt=ke(3662079,.45),pa=class i{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=j0(n)}rotated(e,t,n){let s=n*Lt,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(e+(l-e)*r-(c-t)*o,t+(l-e)*o+(c-t)*r))}box(e,t,n,s,r,o,a,l=a,c=null){if(t-e<1e-4||o-r<1e-4||s-n<1e-4)return;let u=[this.tf(e,r),this.tf(e,o),this.tf(t,o),this.tf(t,r)];It(this.buf,Cf(u),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,s,c)}loft(e,t,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Cf(l)&&(l.reverse(),c.reverse()),Af(this.buf,l,c,n,s,r,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],s,s,a),this.line(l[u],c[u],n,s,a)}sweep(e,t,n=t,s=16,r=2.6,o=null){if(e.length<2)return;let a=e.map(l=>{let c=Math.max(.004,(l.y1-l.y0)/2),u=Math.max(.004,l.hw),h=(l.y0+l.y1)/2,f=[];for(let d=0;d<s;d++){let m=d/s*Math.PI*2,x=Math.cos(m),g=Math.sin(m),[p,y]=this.tf(l.x+u*Math.sign(x)*Math.abs(x)**(2/r),l.z);f.push([p,h+c*Math.sign(g)*Math.abs(g)**(2/r),y])}return f});if(Ef(this.buf,a,t,n),o){let l=Math.round(s/4);for(let c=0;c+1<a.length;c++){let u=a[c][l],h=a[c+1][l];this.lines.seg(u,h,o,st)}}}pad(e,t,n,s,r,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(e,t,n,s,r,o,a,l,u);this.loft([e+c,t-c,r+c,o-c],[e,t,r,o],n,n+c,a),s-n-2*c>.005&&this.box(e,t,n+c,s-c,r,o,a,a,u),this.loft([e,t,r,o],[e+c,t-c,r+c,o-c],s-c,s,a,l)}lyingCyl(e,t,n,s,r,o,a,l,c=l,u=12,h=null){let f=Math.min(a,r-s)/2;if(f<1e-4||o<1e-4)return;let d=(s+r)/2,m=e==="x"?t:n,x=e==="x"?n:t,g=(y,v)=>e==="x"?this.tf(y,v):this.tf(v,y),p=this.buf.p.length;if(Rf(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,u),this.mirrored&&Ff(this.buf,p),h)for(let y of[m-o/2,m+o/2])for(let v=0;v<u;v++){let b=v/u*Math.PI*2,_=(v+1)/u*Math.PI*2;this.line(g(y,x+Math.sin(b)*f),g(y,x+Math.sin(_)*f),d+Math.cos(b)*f,d+Math.cos(_)*f,h)}}cyl(e,t,n,s,r,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(e+Math.cos(f)*n,t+Math.sin(f)*n))}if(It(this.buf,Cf(u),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],r,r,c)}seg(e,t,n,s,r,o,a=Me){this.line(this.tf(e,n),this.tf(s,o),t,r,a)}line(e,t,n,s,r){this.lines.seg([e[0],n,e[1]],[t[0],s,t[1]],r,st)}outline(e,t,n,s){for(let r=0;r<4;r++){let o=e[r],a=e[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,t,n,s)}}};function j0(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Cf(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e>=0?i:[...i].reverse()}function qs(i,e,t,n,s,r,o=D.metal,a=!1){let l=e/2-r-s,c=t/2-r-s;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?i.loft([f-s*.3,f+s*.3,d-s*.3,d+s*.3],[f-s/2,f+s/2,d-s/2,d+s/2],0,n,o):i.box(f-s/2,f+s/2,0,n,d-s/2,d+s/2,o)}}function ma(i,e,t,n,s,r,o,a=null,l=!1){let c=(t-e)/o;for(let u=1;u<o;u++){let h=e+c*u;i.seg(h,n,r,h,s,r,ht)}for(let u=0;u<o;u++){let h=e+c*(u+.5),f=a??s-.08;if(l)i.seg(h-Math.min(.1,c/4),f,r+.012,h+Math.min(.1,c/4),f,r+.012,nt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,r+.012,d,f+.08,r+.012,nt)}}}function Y0(i,e,t,n,s){let r=-e/2,o=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,h=Math.min(.24,t*.28);qs(i,e,t,.07,.05,.05,D.wood,!0),i.pad(r,o,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,Me),i.loft([r,o,a,a+h],[r+.01,o-.01,a,a+h*.5],u-.08,n,D.fabric,D.fabricTop,Me),i.pad(r,r+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me);let d=(o-c-(r+c))/s;for(let m=0;m<s;m++){let x=r+c+d*m+.02,g=x+d-.04;i.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,D.cushion,D.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,D.cushion)}}function MS(i,e,t,n){let s=-t/2,r=t/2,o=-e/2,a=e/2,l=Math.min(.32,n*.36);qs(i,e,t,.08,.06,.03,D.wood,!0),i.box(o,a,.08,l,s+.06,r,D.wood,D.woodTop,Me),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,D.white,D.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,D.wood,D.woodTop,Me),i.box(o,a,n-.05,n,s,s+.09,D.wood,D.woodTop,ht);let c=l+.2,u=s+(t-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,r-.01,D.cushion,D.fabricTop,.025,ht),i.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let h=e>1.2?2:1,f=(e-.2)/h;for(let d=0;d<h;d++){let m=o+.1+f*d,x=s+.12,g=Math.min(.42,t*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,D.whiteTop),i.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,ht)}}function SS(i,e,t,n){let s=Math.min(.46,n*.52);qs(i,e,t,s-.04,.035,.02,D.wood,!0),i.box(-e/2,e/2,s-.04,s,-t/2,t/2,D.wood,D.woodTop,Me),i.pad(-e/2+.02,e/2-.02,s,s+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],s,n,D.wood,D.woodTop,Me)}function wS(i,e,t,n){qs(i,e,t,n-.04,.06,.05,D.wood,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,nt),i.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function TS(i,e,t,n){let s=-e/2,r=e/2;i.box(s,r,n-.035,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(s,s+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let o=Math.min(.42,e*.32);i.box(r-o,r,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,Me);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,ht);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,nt);i.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,nt),i.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function hs(i,e,t,n,s,r=null,o=!1){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),ma(i,-e/2,e/2,.08,n,t/2-.02,s,r,o)}function AS(i,e,t,n){i.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,ht),o<r){let l=-e/2+.025+.04,c=o*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,h=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+h,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function ES(i,e,t,n){let s=Math.max(1,Math.round(e/.6));hs(i,e,t-.02,n-.04,s,n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function RS(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,Me);let s=n*.62;i.seg(-e/2,s,t/2,e/2,s,t/2,ht);let r=e/2-.06;i.seg(r,s+.08,t/2+.015,r,s+.4,t/2+.015,nt),i.seg(r,s-.4,t/2+.015,r,s-.08,t/2+.015,nt)}function CS(i,e,t,n){let s=t/2-Q0;i.box(-e/2,e/2,.02,n,-t/2,s,D.body,D.bodyTop,Me),i.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,s-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-e/2+.03,r,s+.001,-.03,r,s+.001,ht),i.seg(.03,r,s+.001,e/2-.03,r,s+.001,ht))}var Q0=.06;function eg(i,e,t,n,s){let r=i.p.length;IS(i,e,t,n,s),e.mirror&&Ff(i,r)}function IS(i,e,t,n,s){let r=e.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(b,_)=>[e.x+l*b*o-_*a,e.z+l*b*a+_*o],u=t+.05,h=t+e.h-.02,f=new Q(.75,.1,.14),d=new Q(D.dark),m=new Q(D.accent),x=e.w/2-.006,g=(b,_,S)=>{let E=S/p,M=new Q(2043212).lerp(f,E),A=new Q(D.body).lerp(f,E*.8),P=Math.cos(S),C=Math.sin(S),I=(F,O)=>c(b+_*(F*P-O*C),e.d/2+F*C+O*P),L=(F,O,U,V)=>{let[k,z,H,te]=F;i.tri([k[0],O,k[1]],[z[0],O,z[1]],[H[0],U,H[1]],V),i.tri([k[0],O,k[1]],[H[0],U,H[1]],[te[0],U,te[1]],V)},T=(F,O,U,V,k,z,H,te=H)=>{let Z=[I(F,z),I(O,z),I(O,k),I(F,k)];L([Z[0],Z[1],Z[1],Z[0]],U,V,te),L([Z[3],Z[2],Z[2],Z[3]],U,V,H),L([Z[0],Z[3],Z[3],Z[0]],U,V,H),L([Z[1],Z[2],Z[2],Z[1]],U,V,H),L([Z[0],Z[1],Z[2],Z[3]],V,V,H),L([Z[3],Z[2],Z[1],Z[0]],U,U,H)};return T(0,x,u,h,-Q0,0,A,M),T(x-.05,x-.03,t+e.h*.45,t+e.h*.75,.005,.025,m),T},p=1.83;g(-e.w/2,1,n*p)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,d),g(e.w/2,-1,s*p)(.06,x-.06,t+e.h*.52,t+e.h*.86,.001,.005,d)}function PS(i,e,t,n){hs(i,e,t-.02,n-.04,1,n-.24,!0),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,Me);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*e/.6,l=r*t/.62;i.cyl(a,l,o,n,n+.004,D.dark,1451583,12,nt)}}function LS(i,e,t,n){hs(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let s=Math.min(.5,e-.2);i.box(-e/2,-s/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),i.box(s/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),i.box(-s/2,s/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,nt),i.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),i.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function FS(i,e,t,n){i.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,Me),i.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),i.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),i.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),i.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,nt),i.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function DS(i,e,t,n){i.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,Me),i.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[s,r,o,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(s,.05,r,o,.05,a,nt),i.seg(s,n,r,o,n,a,nt),i.seg(o,.05,a,o,n,a,nt);i.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),i.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,nt)}function NS(i,e,t,n){let s=Math.min(.18,t*.3);i.box(-e/2,e/2,.45,n,-t/2,-t/2+s,D.white,D.whiteTop,Me),i.box(-e*.3,e*.3,0,.36,-t/2+s-.02,t/2-.12,D.white,D.whiteTop),i.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,Me),i.box(-e/2+.02,e/2-.02,.41,.43,-t/2+s,-t/2+s+.05,D.whiteTop)}function OS(i,e,t,n){hs(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,Me),i.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,nt),i.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),i.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,nt)}function US(i,e,t,n){hs(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let s=Math.min(e*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),i.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-t/2+.12,-t/2+.16,D.dark,D.dark,nt)}function BS(i,e,t,n){let s=Math.min(e,t)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,D.pot,D.pot,10,Me),i.cyl(0,0,s*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),u=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?ht:null)}}function kS(i,e,t){i.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[s,r,o,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])i.seg(s,.014,r,o,.014,a,Me)}function zS(i,e,t,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=t/s;for(let u=0;u<s;u++){let h=t/2-o*u,f=h-o,d=r*(u+1);i.box(-e/2,e/2,0,d,f,h,D.wood,D.woodTop),i.seg(-e/2,d,h,e/2,d,h,Me)}i.seg(-e/2,0,t/2,-e/2,r,t/2,Me);for(let u of[-e/2,e/2])i.seg(u,r,t/2,u,n,-t/2+o,ht);let a=.9,l=e/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,t/2-o/2,l,r*c+a,t/2-o*(c-.5),nt);for(let u=0;u<c;u+=3){let h=t/2-o*(u+.5),f=r*(u+1);i.seg(l,f,h,l,f+a,h,ht)}}function VS(i,e,t,n){qs(i,e,t,.12,.03,.04,D.metal),i.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),ma(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function GS(i,e,t,n){i.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=t/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-e/2,a,r,e/2,a,r,ht)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,nt)}}function HS(i,e,t,n){i.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,Me),ma(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,Me),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Me);let s=Math.max(2,Math.round(e/.25));for(let r=0;r<s;r++){let o=-e/2+e/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function $0(i,e,t,n,s){let o=Math.min(.5,s?t*.4:t),a=.08;i.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+o,D.wood,D.woodTop,Me),i.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,Me),i.box(-e/2+(s?o:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+o,D.cushion,D.cushion,ht),s&&(i.box(-e/2,-e/2+o,0,.45-.06,-t/2+o,t/2,D.wood,D.woodTop,Me),i.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,Me),i.box(-e/2+a,-e/2+o,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,ht))}function WS(i,e,t,n){let s=Math.min(e,t)/2;i.cyl(0,0,s*.8,0,.02,D.metal,D.metal,12),i.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,D.metal,D.metal,12,ht),i.cyl(0,0,s,n-.05,n,D.cushion,D.fabricTop,14,Me)}function XS(i,e,t,n){let s=Math.min(e,t)/2;i.box(-s,s,.04,.08,-.03,.03,D.metal),i.box(-.03,.03,.04,.08,-s,s,D.metal),i.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),i.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,D.fabric,D.cushion,Me),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,D.fabric,D.fabricTop,Me),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,D.metal)}function qS(i,e,t,n){qs(i,e,t,.08,.04,.05,D.wood),i.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,Me)}function YS(i,e,t,n){i.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,Me),ma(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function $S(i,e,t,n){i.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let s=t/2-.02;i.box(-e/2+.03,e/2-.03,.85,1.45,s,s+.01,D.dark,D.dark,nt),i.seg(-e/2+.08,1.4,s+.02,e/2-.08,1.4,s+.02,nt);for(let r of[.85,1.45])i.seg(-e/2,r,s,e/2,r,s,ht);i.seg(e/2-.06,.5,s+.012,e/2-.06,.7,s+.012,nt),i.seg(e/2-.06,1.6,s+.012,e/2-.06,1.8,s+.012,nt)}function KS(i,e,t,n){let s=t-.3;i.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+s,D.body,D.bodyTop,Me),i.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+s-.04,D.dark),ma(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+s,Math.max(2,Math.round(e/.6)),n-.2),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function ZS(i,e,t,n){i.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,Me),i.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,nt),i.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function K0(i,e,t,n,s){i.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,Me);let r=t/2-.012;i.seg(-e/2,n-.14,r,e/2,n-.14,r,ht),i.seg(e/2-.16,n-.07,r,e/2-.08,n-.07,r,nt);let o=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,r,Math.cos(h)*a,o+Math.sin(h)*a,r,nt),s||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,ht)}}function JS(i,e,t,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(e/2)-(o>0?.05:0),o*(e/2)+(o<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])i.box(-e/2,e/2,o,o+.08,-t/2,t/2,D.wood,D.woodTop,Me),i.box(-e/2+.04,e/2-.04,o+.08,o+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,ht),i.box(-e/2+.05,e/2-.05,o+.24,o+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);i.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let r=e/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,t/2+.02,o,n-.15,t/2+.02,Me);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,t/2+.02,r+.18,o,t/2+.02,ht)}function jS(i,e,t,n){let s=Math.min(e,t)/2;i.cyl(0,0,s*.4,0,.03,D.metal,D.metal,12),i.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),i.cyl(0,0,s,n-.04,n,D.wood,D.woodTop,20,Me)}function QS(i,e,t,n){qs(i,e,t,n-.03,.04,.03,D.wood),i.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,Me),i.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,ht)}function ew(i,e,t,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,s,s+n,-t/2+.03,t/2,D.dark,D.dark,nt)}function tw(i,e,t,n){let s=Pf;i.box(-e/2+.05,-e/2+.08,0,s,-t/2,-t/2+.03,D.metal),i.box(e/2-.08,e/2-.05,0,s,-t/2,-t/2+.03,D.metal),i.box(-e/2,e/2,s,s+n,-t/2+.02,t/2,D.white,D.whiteTop,Me);let r=Math.max(3,Math.round(e/.1));for(let o=1;o<r;o++){let a=-e/2+e/r*o;i.seg(a,s+.03,t/2+.002,a,s+n-.03,t/2+.002,ht)}}function Z0(i,e,t,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,s,e+Math.cos(l)*n,t+Math.sin(l)*n,s,nt)}}function nw(i,e,t,n,s){let o=t/2;if(s==="slim"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,Me),i.seg(-e*.25,1.1+n*.15,o+.004,-e*.25,1.1+n*.85,o+.004,nt),i.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(s==="hybrid"){i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),Z0(i,0,1.1+n*.66,Math.min(e,n)*.22,o+.004),i.seg(-e*.08,1.1+n*.66,o+.005,e*.08,1.1+n*.66,o+.005,nt);for(let a of[-1,1])Z0(i,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}i.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),i.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,nt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,ht)}function iw(i,e,t,n){i.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,Me),i.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,nt),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,ht)}function sw(i,e,t,n){i.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,Me);let r=Math.min(e,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,t/2+.003,Math.cos(u)*r,o+Math.sin(u)*r,t/2+.003,nt)}i.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),i.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function rw(i,e,t,n){i.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,Me),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,ht),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,ht),i.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),i.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,nt)}function ow(i,e,t,n,s){if(s==="wall"){i.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,Me),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,nt),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,ht);return}if(s==="cube"){i.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),i.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,Me),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,nt),i.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}i.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-e/2,e/2,.06+a*o+.004,.06+(a+1)*o,-t/2,t/2,D.white,D.whiteTop,Me);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,nt)}}var Pf=.12;function Lf(i,e){let t=aw(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function aw(i,e){let t=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=c0(i.type);if(r){let l=e?Un(e,i):0,c=(r.x-r.w/2)*t,u=(r.x+r.w/2)*t,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+r.y*s+h,y1:l+(r.y+r.h)*s-h,z:(r.z+r.d/2)*n}}let o=e&&i.type!=="fridge_smart"?Un(e,i)-ia(i):0,a=lw(i,t,n,s,e);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function lw(i,e,t,n,s){if(i.type==="tv_board"){let r=Math.min(e*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-t/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:r+.02,y1:r+n-.02,z:t/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(i.type==="fridge_smart"){let r=s?Un(s,i):0;return{x0:.06,x1:e/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:t/2+.006}}if(i.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Pf+.02,y1:Pf+n-.02,z:t/2+.004};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:t/2-.004}}return i.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function cw(i,e,t,n,s){let r=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),o=new Q(1-s,1-s,1-s),a=new Q(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-r,-n/2-r),e(t/2+r,-n/2-r),e(t/2+r,n/2+r),e(-t/2-r,n/2+r)],h=d=>[d[0],l,d[1]],f=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;i.tri(h(c[d]),h(u[d]),h(u[m]),o,a,a),i.tri(h(c[d]),h(u[m]),h(c[m]),o,a,o)}j0(e)&&Ff(i,f)}function Hc(i,e,t,n,s=0){uw(i,e,t,n,s)}function Ff(i,e){let t=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<i.p.length;n+=9){let s=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,s*3,1),t(i.uv,s*6,2),t(i.tile,s*6,2)}}function uw(i,e,t,n,s){let r=Zt(n.type)?0:s-ia(n);if(Zt(n.type)||Math.abs(r)<.001)return J0(i,e,t,n,s);let o=i.p.length,a=e.p.length;J0(i,e,s<.05?t:new ut,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=r}function J0(i,e,t,n,s){let r=n.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new pa(i,e,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":Y0(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":Y0(u,h,f,d,1);break;case"bed":MS(u,h,f,d);break;case"chair":SS(u,h,f,d);break;case"table":wS(u,h,f,d);break;case"desk":TS(u,h,f,d);break;case"nightstand":hs(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,ht);break;case"wardrobe":hs(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":AS(u,h,f,d);break;case"kitchen":ES(u,h,f,d);break;case"fridge":RS(u,h,f,d);break;case"fridge_smart":CS(u,h,f,d);break;case"stove":PS(u,h,f,d);break;case"sink":LS(u,h,f,d);break;case"bathtub":FS(u,h,f,d);break;case"shower":DS(u,h,f,d);break;case"wc":NS(u,h,f,d);break;case"washbasin":OS(u,h,f,d);break;case"tv_board":US(u,h,f,d);break;case"plant":BS(u,h,f,d);break;case"rug":kS(u,h,f);return;case"stairs":zS(u,h,f,d);break;case"stairwell":return;case"sideboard":VS(u,h,f,d);break;case"dresser":GS(u,h,f,d);break;case"tall_cabinet":hs(u,h,f,d,1,d*.5);break;case"coat_rack":HS(u,h,f,d);break;case"bench":$0(u,h,f,d,!1);break;case"corner_bench":$0(u,h,f,d,!0);break;case"bar_stool":WS(u,h,f,d);break;case"office_chair":XS(u,h,f,d);break;case"stool":qS(u,h,f,d);break;case"kitchen_wall":YS(u,h,f,d);return;case"kitchen_tall":$S(u,h,f,d);break;case"island":KS(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,D.whiteTop,D.whiteTop,Me);return;case"dishwasher":ZS(u,h,f,d);break;case"washer":K0(u,h,f,d,!1);break;case"dryer":K0(u,h,f,d,!0);break;case"bunk_bed":JS(u,h,f,d);break;case"table_round":jS(u,h,f,d);break;case"coffee_table":QS(u,h,f,d);break;case"tv_wall":ew(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],ht);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,Me),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,Me);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,D.white,D.whiteTop,Me),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":tw(u,h,f,d);return;case"inverter":nw(u,h,f,d,n.variant??null);return;case"grid_point":iw(u,h,f,d);break;case"wallbox":sw(u,h,f,d);return;case"meter":rw(u,h,f,d);return;case"home_battery":if(ow(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=Zt(n.type);if(m){if(tg(u,m,h,f,d,s,null,null,n.variant??null),s>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,D.body,D.bodyTop,Me)}}cw(t,c,h,f,n.type==="plant"?.35:.5)}function If(i,e){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let t=D;return(e?t[`${i}Top`]:void 0)??t[i]??null}function tg(i,e,t,n,s,r,o,a=null,l=null){let c=e.colors?.length?(e.colors.find(h=>h.id===l)??e.colors[0]).hex:null,u=!!a;for(let h of e.parts){if(a&&!a(h))continue;let f=u?{...h,glow:!0,w:h.w+.006/t,d:h.d+.006/n,y:Math.max(0,h.y-.002/s),h:h.h+.004/s}:h,d=f.glow&&o!==null,m=f.paint&&c?c:f.color,x=d?o:If(m,!1)??D.body,g=d?o:If(f.paint&&c?void 0:f.top,!1)??If(m,!0)??ke(x,1.25).getHex(),p=r+f.y*s,y=r+Math.min(s,(f.y+f.h)*s),v=f.edges==="glow"?Bi:f.edges==="faint"?ht:f.edges?Me:null,b=f.rot?i.rotated(f.x*t,f.z*n,f.rot):i;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))b.lyingCyl(f.axis,f.x*t,f.z*n,p,y,f.axis==="x"?f.w*t:f.d*n,f.axis==="x"?f.d*n:f.w*t,x,g,14,v);else if(f.shape==="cyl")b.cyl(f.x*t,f.z*n,Math.min(f.w*t,f.d*n)/2,p,y,x,g,14,v);else if(f.shape==="loft"){let _=f.tx??f.x,S=f.tz??f.z,E=f.tw??f.w,M=f.td??f.d;b.loft([(f.x-f.w/2)*t,(f.x+f.w/2)*t,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(_-E/2)*t,(_+E/2)*t,(S-M/2)*n,(S+M/2)*n],p,y,x,g,v)}else if(f.shape==="sweep"){let _=(f.stations??[]).map(([S,E,M,A])=>({x:f.x*t,z:S*n,y0:r+E*s,y1:r+M*s,hw:A*t/2}));b.sweep(_,x,g,f.n??16,f.exp??2.6,v)}else b.box((f.x-f.w/2)*t,(f.x+f.w/2)*t,p,y,(f.z-f.d/2)*n,(f.z+f.d/2)*n,x,g,v)}}function ng(i,e,t,n,s,r){let o=r*Lt,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[t+m*a-x*l,s+m*l+x*a],u=new pa(i,new Qt,c),h=1713728,f=2373216,d=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Wc(i,e,t,n,s){let r=t.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(u,h)=>[t.x+l*u*o-h*a,t.z+l*u*a+h*o];tg(new pa(i,new Qt,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,s)}var ga=i=>Ws(i)>=0?i:[...i].reverse();function Df(i,[e,t],n,s,r,o,a){It(i,ga([[e-n,t-n],[e+n,t-n],[e+n,t+n],[e-n,t+n]]),s,r,o,a)}function Nf(i,e,t,n,s,r,o,a,l=0){let[c,u]=[t[0]-e[0],t[1]-e[1]],h=Math.hypot(c,u);if(h<1e-6)return;let[f,d]=[-u/h*n*.5,c/h*n*.5];if(Math.abs(l)<1e-4){It(i,ga([[e[0]+f,e[1]+d],[t[0]+f,t[1]+d],[t[0]-f,t[1]-d],[e[0]-f,e[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let m=(b,_)=>[e[0]+f*_,b,e[1]+d*_],x=(b,_)=>[t[0]+f*_,b+l,t[1]+d*_],g=(b,_)=>{for(let[S,E,M]of[[0,1,2],[0,2,3],[0,2,1],[0,3,2]])i.tri(b[S],b[E],b[M],_,_,_,void 0,st)},p=new Q(a),y=ke(o,.9),v=ke(o,.6);g([m(r,1),x(r,1),x(r,-1),m(r,-1)],p),g([m(s,1),x(s,1),x(s,-1),m(s,-1)],v),g([m(s,1),x(s,1),x(r,1),m(r,1)],y),g([m(s,-1),x(s,-1),x(r,-1),m(r,-1)],y),g([m(s,1),m(s,-1),m(r,-1),m(r,1)],y),g([x(s,1),x(s,-1),x(r,-1),x(r,1)],y)}var ig={lawn:{color:927778,side:729115,edge:4121250,edgeAlpha:.16},terrace:{color:1841968,side:1447464,edge:5995775,edgeAlpha:.32},path:{color:1778228,side:1383209,edge:5995775,edgeAlpha:.22},driveway:{color:1514796,side:1185573,edge:5995775,edgeAlpha:.18},pool:{color:736091,side:861497,edge:3662079,edgeAlpha:.6},bed:{color:1775123,side:1380623,edge:4121250,edgeAlpha:.2},wild:{color:1384987,side:1055509,edge:10146383,edgeAlpha:.14},hedge:{color:1524016,side:1126693,edge:4121250,edgeAlpha:.35},fence:{color:1976903,side:1976903,edge:5995775,edgeAlpha:.45},pergola:{color:2827065,side:2104109,edge:5995775,edgeAlpha:.5}};function Of(i,e){return sa(i)+(e.offset??0)+(Gs(e.type)?.01:Fc[e.type])}function sg(i,e){let t=i[e];return Gs(t.type)||t.type==="pool"?[]:i.slice(e+1).filter(n=>n.cut&&n.points.length>=3&&n.points.every(s=>xt(s,t.points))).map(n=>ga(n.points))}var Xc=(i,e)=>i.map((t,n)=>[n,t,i[(n+1)%i.length]]).filter(([t])=>t!==e);function xa(i,e){if(i.area.outline!==!1)for(let[,t,n]of Xc(i.poly,i.openEdge))i.lines.seg([t[0],e(t[0],t[1]),t[1]],[n[0],e(n[0],n[1]),n[1]],i.edge,st)}function hw(i){let{buf:e,poly:t,base:n,top:s,look:r}=i,o=new Q(r.color);for(let[l,c,u]of $r(t)){let[h,f,d]=[t[l],t[c],t[u]];e.tri([h[0],n+s,h[1]],[d[0],n+s,d[1]],[f[0],n+s,f[1]],o,o,o,void 0,st)}let a=new Q(r.side);for(let[,l,c]of Xc(t,-1))e.tri([c[0],n+s,c[1]],[c[0],n+.06,c[1]],[l[0],n+.06,l[1]],a,a,a,void 0,st),e.tri([c[0],n+s,c[1]],[l[0],n+.06,l[1]],[l[0],n+s,l[1]],a,a,a,void 0,st);xa(i,()=>n+.06),xa(i,()=>n+s+.005)}function fw(i){let{buf:e,lines:t,poly:n,top:s,look:r,groundAt:o,edge:a,openEdge:l}=i;for(let[c,u,h]of Xc(n,l)){let f=Math.max(1,Math.round(Math.hypot(h[0]-u[0],h[1]-u[1])/2)),d=l>=0&&c===l-1?f:f-1;for(let m=0;m<=d;m++){let x=u[0]+(h[0]-u[0])*m/f,g=u[1]+(h[1]-u[1])*m/f,p=o(x,g);Df(e,[x,g],.04,p,p+s,r.side,r.color)}for(let m of[.35,.85])t.seg([u[0],o(u[0],u[1])+m*s,u[1]],[h[0],o(h[0],h[1])+m*s,h[1]],a,st)}}function dw(i){let{buf:e,lines:t,poly:n,area:s,top:r,look:o,groundAt:a,edge:l,openEdge:c}=i;for(let u of n){let h=a(u[0],u[1]);Df(e,u,.06,h,h+r,o.side,o.color)}for(let[,u,h]of Xc(n,c)){let[f,d]=[a(u[0],u[1]),a(h[0],h[1])];Nf(e,u,h,.12,f+r-.16,f+r,o.side,o.color,d-f),s.bracing&&(t.seg([u[0],f+.25,u[1]],[h[0],d+r-.25,h[1]],l,st),t.seg([h[0],d+.25,h[1]],[u[0],f+r-.25,u[1]],l,st))}if(v0(n)){let u=M0(n),h=u.x1-u.x0>=u.z1-u.z0,[f,d]=h?[u.x0,u.x1-u.x0]:[u.z0,u.z1-u.z0],m=Math.max(1,Math.round(d/.6));for(let x=1;x<m;x++){let g=f+d*x/m,p=h?[g,u.z0+.06]:[u.x0+.06,g],y=h?[g,u.z1-.06]:[u.x1-.06,g],v=a(p[0],p[1]);Nf(e,p,y,.06,v+r-.04,v+r+.08,o.side,o.color,a(y[0],y[1])-v)}}xa(i,(u,h)=>a(u,h)+r+.004)}function pw(i,e,t){let{buf:n,lines:s,poly:r,area:o,top:a,look:l,groundAt:c,base:u,edge:h}=i,f=u-(o.slope??0),d=(x,g)=>c(x,g)+a,m=sg(e,t);if(It(n,r,f,o.slope?d:u+a,l.side,l.color,{aoFrom:f,holes:m}),xa(i,(x,g)=>d(x,g)+.004),o.type==="hedge"&&xa(i,(x,g)=>c(x,g)+.004),o.outline!==!1)for(let x of m)x.forEach((g,p)=>{let y=x[(p+1)%x.length];s.seg([g[0],d(g[0],g[1])+.004,g[1]],[y[0],d(y[0],y[1])+.004,y[1]],h,st)})}function Uf(i,e,t){let n=sa(t),s=t.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=ig[r.type],c=ga(r.points),u={buf:i,lines:e,area:r,poly:c,base:a,groundAt:(h,f)=>a-of(r,h,f),top:Gs(r.type)&&r.height?r.height:Fc[r.type],look:l,edge:ke(l.edge,l.edgeAlpha),openEdge:r.open&&(r.type==="fence"||r.type==="pergola")?c.length-1:-1};r.type==="pool"?hw(u):r.type==="fence"?fw(u):r.type==="pergola"?dw(u):pw(u,s,o)})}var fs=Math.PI/180,zi=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]];var Kr=i=>Math.hypot(i[0],i[1],i[2]),Ys=i=>{let e=Kr(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},rg=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];var ag=.25;function lg(i,e,t,n,s,r,o){let a=s-t>=r-n,l=a?s-t:r-n;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?r-n:s-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function cg(i,e){let t=Ys(rg(i,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var ug=i=>{let e=Ys([-i[0],0,-i[2]]);return[e[0],e[2]]};function ba(i,e,t,n,s,r,o,a){let l=Ys(zi(s,n)),c=Ys(zi(r,n));return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:cg(l,c),lu:Kr(zi(s,n)),ls:Kr(zi(r,n)),pitch:o,span:a,facing:ug(c)}}function og(i,e,t,n,s,r){let o=Kr(zi(s,n));if(o<.3)return null;let a=Ys(zi(s,n)),l=zi(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Kr(u);if(h<.3)return null;let f=Ys(u),d=m=>{let x=Math.min(1,Math.max(0,m/h));return[c*x,o-(o-c)*x]};return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:cg(a,f),lu:o,ls:h,pitch:Math.atan2(f[1],Math.hypot(f[0],f[2]))/fs,span:d,facing:ug(f)}}function mw(i,e){let t=Mn(i),n=pn(i),s=(y,v,b)=>{let[_,S]=t.at(y,v);return[_,b,S]},[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=n.y(-r),h=n.y(t.w+o);if(i.shape==="flat"||i.shape==="parapet"){let[y,v]=[t.at(a,-r),t.at(l,t.w+o)];return[lg(i.id,i.id,Math.min(y[0],v[0]),Math.min(y[1],v[1]),Math.max(y[0],v[0]),Math.max(y[1],v[1]),i.eave_a+ag)]}if(i.shape==="pent")return[ba(`${i.id}:a`,i.id,"a",s(a,-r,u),s(l,-r,u),s(a,t.w+o,h),i.pitch_a,()=>[0,c])];let f=i.shape==="hip"||i.shape==="pyramid",d=(t.u1-t.u0)/2,m=i.shape==="pyramid"?d:f?Math.min(d,Math.min(n.vr,t.w-n.vr)||t.w/2):0,x=f?t.u0+m-a:0,g=f?l-(t.u1-m):0,p=[];if(n.vr>.3){let y=Math.hypot(n.vr+r,n.rh-u);p.push(ba(`${i.id}:a`,i.id,"a",s(a,-r,u),s(l,-r,u),s(a,n.vr,n.rh),i.pitch_a,v=>[x*(v/y),c-g*(v/y)]))}if(t.w-n.vr>.3){let y=Math.hypot(t.w+o-n.vr,n.rh-h);p.push(ba(`${i.id}:b`,i.id,"b",s(l,t.w+o,h),s(a,t.w+o,h),s(l,n.vr,n.rh),i.pitch_b,v=>[g*(v/y),c-x*(v/y)]))}if(f){let y=og(`${i.id}:c`,i.id,"c",s(a,t.w+o,h),s(a,-r,u),s(t.u0+m,n.vr,n.rh)),v=og(`${i.id}:d`,i.id,"d",s(l,-r,u),s(l,t.w+o,h),s(t.u1-m,n.vr,n.rh));p.push(...[y,v].filter(b=>b!==null))}return p}function hg(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Zr(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>mw(v,la(i,v,v.overhang??e.overhang)));let t=hg(i);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(b=>b[0])),s=t.rooms.flatMap(v=>v.points.map(b=>b[1])),r=i.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-r,Math.max(...n)+r],[l,c]=[Math.min(...s)-r,Math.max(...s)+r],u=t.elevation+t.height;if(e.type==="flat")return[lg("main",null,o,l,a,c,u+ag)];let h=a-o>=c-l,f=e.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,m=d*Math.tan(e.pitch*fs),x=(v,b,_)=>f?[v,u+_,(l+c)/2+b]:[(o+a)/2+b,u+_,v],[g,p]=f?[o,a]:[l,c],y=()=>[0,p-g];return[ba("main:a",null,"a",x(g,-d,0),x(p,-d,0),x(g,0,m),e.pitch,y),ba("main:b",null,"b",x(g,d,0),x(p,d,0),x(g,0,m),e.pitch,y)]}function qc(i,e){let t=[];for(let n of i.floors.filter(s=>!e||s.id===e)){let{walls:s}=aa(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let r of s){if(!r.exterior&&!r.free)continue;let[o,a]=[r.b[0]-r.a[0],r.b[1]-r.a[1]],l=Math.hypot(o,a);if(l<1.2)continue;let[c,u]=[a/l,-o/l],h=Math.min(n.height,r.height??n.height),f=(d,m,x,g)=>t.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+u*r.right],[o/l,0,a/l],[c,0,u]),r.free&&f(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-u*r.left],[-o/l,0,-a/l],[-c,0,-u])}}return t}var ya="ground";function Yc(i){let e=i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function $c(i,e){let t=(e.rotation??0)*fs,n=[Math.cos(t),0,Math.sin(t)],s=[-Math.sin(t),0,Math.cos(t)],r=Yc(i),o=n[0]*e.u+s[0]*e.v,a=n[2]*e.u+s[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:g0(r,o,a)):e.base??0;return{key:ya,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}var Bf=1.13,kf=1.72,_a=.025,ds=.07;function Kc(i){let e=i.module_w||Bf,t=i.module_h||kf;return i.portrait===!1?[t,e]:[e,t]}function fg(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function dg(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*fs:i.wall?Math.min(90,Math.max(0,e.tilt??0))*fs:0}function zf(i,e){let[,t]=Kc(e),n=dg(i,e);return i.wall?t*Math.cos(n)+_a:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+_a}function Jr(i,e,t=!1){let[n,s]=Kc(e),r=dg(i,e),o=s*Math.cos(r),a=zf(i,e),l=fg(e),c=Math.max(1,...l),u=new Set(e.skip??[]),h=(m,x,g)=>[0,1,2].map(p=>i.o[p]+i.eu[p]*m+i.es[p]*x+i.n[p]*g),f=(m,x)=>{if(i.unbounded)return!0;if(x<-1e-6||x>i.ls+1e-6)return!1;let[g,p]=i.span(x);return m>=g-1e-6&&m<=p+1e-6},d=[];return l.forEach((m,x)=>{let g=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let p=0;p<m;p++){let y=`${x}:${p}`,v=u.has(y);if(v&&!t)continue;let b=e.u+(p+g)*(n+_a),_=b+n,S=e.v+x*a,E=S+(i.flat||i.wall?o:s);if([[b,S],[_,S],[_,E],[b,E]].every(([M,A])=>f(M,A)))if(i.wall&&r>.001){let M=ds+s*Math.sin(r),[A,P]=e.flip?[M,ds]:[ds,M],C=[h(b,S,A),h(_,S,A),h(_,E,P),h(b,E,P)],I=e.flip?S:E;d.push({corners:C,posts:[b+.05,_-.05].map(L=>[h(L,I,0),h(L,I,M)]),cell:y,skipped:v})}else if(!i.flat)d.push({corners:[h(b,S,ds),h(_,S,ds),h(_,E,ds),h(b,E,ds)],posts:[],cell:y,skipped:v});else{let A=.15+s*Math.sin(r),[P,C]=e.flip?[E,S]:[S,E],I=[h(b,P,.15),h(_,P,.15),h(_,C,A),h(b,C,A)],L=[b+.05,_-.05].flatMap(T=>[[h(T,P,0),h(T,P,.15)],[h(T,C,0),h(T,C,A)]]);d.push({corners:I,posts:L,cell:y,skipped:v})}}}),d}var Vf=.78,Gf=1.18,pg=i=>({id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Vf,module_h:i.h||Gf});function va(i,e){let t=Jr(i,pg(e))[0];if(!t)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return t.corners.map(n)}var $s=1712952,Ks=2239816,Zc=1318193,Vi=ke(3662079,.9),Gi=ke(5995775,.45),zt=.14,mg=9427199,gg=13226982,xg=14936565,bg={black:{glass:new Q(329483),edge:ke(9082544,.32),cells:ke(2766160,.22)},blue:{glass:new Q(1386842),edge:ke(10467583,.55),cells:ke(4025599,.35)}},yg=ke(13226982,.5),_g=ke(13226982,.85),vg=ke(16757575,.95),Hf=new Q(2845583),Wf=new Q(3818072);var jr=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],Jc=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],Mg=(i,e)=>e.section?i.find(t=>t.sections?.includes(e.section)):i[0];function Sg(i,e,t){let n=i.settings.roof?.windows??[];if(n.length===0||e.length===0)return;let s=new Map(Zr(i).map(r=>[r.key,r]));for(let r of n){let o=s.get(r.face),a=o?va(o,r):null,l=o&&a?Mg(e,o):void 0;if(!o||!a||!l)continue;let c=l.floor.elevation+l.base,[u,h,f,d]=a.map(A=>[A[0],A[1]-c,A[2]]),m=t.get(r.id)??{open:0,tilt:0,cover:0},x=(A,P)=>Jc(A,o.n,P),g=m.open>.02||m.tilt>.02?vg:_g,p=[u,h,f,d].map(A=>x(A,.06));p.forEach((A,P)=>l.lines.seg(A,p[(P+1)%4],g));let y=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*Lt,v=Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2]),b=A=>Jc(Jc(A,o.es,-v*Math.cos(y)),o.n,v*Math.sin(y)),[_,S]=[x(d,.065),x(f,.065)],[E,M]=[b(_),b(S)];l.solid.tri(E,M,S,Hf),l.solid.tri(E,S,_,Hf);for(let[A,P]of[[E,M],[M,S],[S,_],[_,E]])l.lines.seg(A,P,g);if(m.cover>.02){let A=Math.min(1,m.cover),[P,C]=[x(jr(_,E,A),.01),x(jr(S,M,A),.01)],[I,L]=[x(_,.01),x(S,.01)];l.solid.tri(P,C,L,Wf),l.solid.tri(P,L,I,Wf)}}}function jc(i,e,t,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=bg[n.look==="blue"?"blue":"black"],[a,l]=n.portrait===!1?[10,6]:[6,10];for(let c of Jr(t,n)){let[u,h,f,d]=c.corners.map(r);for(let[g,p,y]of[[u,h,f],[u,f,d],[u,f,h],[u,d,f]])i.tri(g,p,y,o.glass);let m=g=>Jc(g,t.n,.004),x=[u,h,f,d].map(m);x.forEach((g,p)=>e.seg(g,x[(p+1)%4],o.edge));for(let g=1;g<a;g++)e.seg(m(jr(u,h,g/a)),m(jr(d,f,g/a)),o.cells);for(let g=1;g<l;g++)e.seg(m(jr(u,d,g/l)),m(jr(h,f,g/l)),o.cells);for(let[g,p]of c.posts)e.seg(r(g),r(p),yg)}}function wg(i,e){let t=i.settings.roof?.solar??[];if(t.length===0||e.length===0)return;let n=new Map(Zr(i).map(s=>[s.key,s]));for(let s of t){let r=n.get(s.face),o=r?Mg(e,r):void 0;r&&o&&jc(o.solid,o.lines,r,s,o.floor.elevation+o.base)}}var kn=.12,Ma=.16;function Tg(i,e,t,n,s,r,o){let a=t.w,[l,c,u,h]=[s.a>0,s.b>0,s.u0>0,s.u1>0],f=(m,x,g,p,y,v)=>{let b=[t.at(m,g),t.at(x,g),t.at(x,p),t.at(m,p)],_=(b[1][0]-b[0][0])*(b[2][1]-b[0][1])-(b[2][0]-b[0][0])*(b[1][1]-b[0][1]);It(i,_<0?[...b].reverse():b,y-o,v-o,gg,xg,{bottom:!0})};for(let[m,x]of[[0,l],[a,c]]){if(!x)continue;let g=n.y(m)-.03,p=m===0?0:a-kn;f(t.u0,t.u1,p,p+kn,g-Ma,g),e.seg(r(t.u0,m,g-Ma),r(t.u1,m,g-Ma),Gi)}for(let[m,x]of[[t.u0,u],[t.u1-kn,h]])if(x)for(let g=0;g<6;g++){let[p,y]=[a*g/6,a*(g+1)/6],v=Math.min(n.y(p),n.y(y))-.03;f(m,m+kn,p,y,v-Ma,v)}let d=[];for(let[m,x]of[[0,l],[a-kn,c]]){if(!x)continue;let g=t.u1-t.u0-kn,p=Math.max(1,Math.ceil(g/3.5));for(let y=0;y<=p;y++)y===0&&!u||y===p&&!h||d.push([t.u0+g*y/p,m])}!l&&!c&&(u&&d.push([t.u0,a/2-kn/2]),h&&d.push([t.u1-kn,a/2-kn/2]));for(let[m,x]of d)f(m,m+kn,x,x+kn,o,n.y(x+kn/2)-.03-Ma)}function yw(i,e){let t=[];if(i.forEach(([r,o],a)=>{o>=e&&t.push([r,o]);let l=i[a+1];if(l&&(o-e)*(l[1]-e)<0){let c=(e-o)/(l[1]-o);t.push([r+(l[0]-r)*c,e])}}),t.length<2)return[];let[n,s]=[t[0],t[t.length-1]];return s[1]>e&&t.push([s[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var Ag=i=>ra(i)>=0?i:[...i].reverse();function Eg(i,e,t,n,s,r=i,o=!1,a=[],l=null){let c=Mn(t),u=pn(t),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,[f,d]=[Math.max(0,h.a),Math.max(0,h.b)],m=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),p=(T,F,O)=>{let[U,V]=c.at(T,F);return[U,O-s,V]},y=new Q(Ks),v=new Q($s),b=new Q(Zc),_=(T,F)=>{for(let O=1;O+1<T.length;O++)i.tri(T[0],T[O],T[O+1],F)},S=([T,F,O],U=0)=>p(T,F,O-U),E=[],M=[],A=[],P=null;if(t.shape==="flat"||t.shape==="parapet"){let T=t.eave_a-s,F=t.shape==="parapet",O=t.points&&t.points.length>=3?ff(t,F?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):F?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];if(It(i,O,T,T+.25,$s,Ks,{bottom:!0}),O.forEach((U,V)=>{let k=O[(V+1)%O.length];e.seg([U[0],T+.252,U[1]],[k[0],T+.252,k[1]],Vi),e.seg([U[0],T,U[1]],[k[0],T,k[1]],Gi)}),F){let U=Ag(O),V=Uc(U,-.2);U.forEach((k,z)=>{let H=(z+1)%U.length;It(i,Ag([k,U[H],V[H],V[z]]),T+.25,T+.65,$s,Ks),e.seg([k[0],T+.652,k[1]],[U[H][0],T+.652,U[H][1]],Vi),e.seg([V[z][0],T+.652,V[z][1]],[V[H][0],T+.652,V[H][1]],Vi)})}}else{let T=ls(t,h);E=a.reduce((F,O)=>F.flatMap(U=>Bc(U,O)),T.faces),M=T.rim,A=T.ridges,P=T.gable}let C=!!t.open,I=new Q(mg);for(let T of E)if(C)for(let F=1;F+1<T.length;F++)r.tri(S(T[0]),S(T[F]),S(T[F+1]),I);else _(T.map(F=>S(F)),y),_(T.map(F=>S(F,zt)),v);if(M.forEach((T,F)=>{let O=M[(F+1)%M.length];C||_([S(T),S(O),S(O,zt),S(T,zt)],v),e.seg(S(T),S(O),C?Vi:Gi)}),C){Tg(i,e,c,u,h,(T,F,O)=>p(T,F,O),s);return}for(let[T,F]of A)e.seg(S([T[0],T[1],T[2]+.004]),S([F[0],F[1],F[2]+.004]),Vi);let L=t.base;if(!o){if(P){let T=yw(P,L-zt),F=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(T.length>=3)for(let O of F)_(T.map(([U,V])=>p(O,U,V)),b)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let T of[0,m]){let F=u.y(T)-zt;F>L+.02&&_([p(c.u0,T,L),p(c.u1,T,L),p(c.u1,T,F),p(c.u0,T,F)],b)}else if(t.eave_a>L+.02){let T=[[c.u0,0],[c.u1,0],[c.u1,m],[c.u0,m]];T.forEach(([F,O],U)=>{let[V,k]=T[(U+1)%4];_([p(F,O,L),p(V,k,L),p(V,k,t.eave_a),p(F,O,t.eave_a)],b)})}}}function Rg(i,e,t){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(n.length===0)return[];let s=new Map,r=new Map(Zr(i).map(o=>[o.key,o]));for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=gf(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new ut,lines:new Qt,glass:new ut,sections:[],lift:!o.open}),c.sections.push(o.id);let u=qr(e,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=e.filter(x=>x!==o&&qr(e,x)===o).flatMap(x=>df(o,x));for(let x of i.settings.roof.windows??[]){let g=r.get(x.face),p=g&&g.section===o.id?va(g,x):null;if(!p)continue;let y=p.map(v=>xi(o,v[0],v[2]));f.push({u0:Math.min(...y.map(v=>v[0])),u1:Math.max(...y.map(v=>v[0])),v0:Math.min(...y.map(v=>v[1])),v1:Math.max(...y.map(v=>v[1]))})}let d=u?zc(u,o):o,m=null;if(u){let x=Mn(d),g=ls(u,{u0:0,u1:0,a:0,b:0}),p=y=>{let[v,b]=x.at(y,x.w/2),[_,S]=xi(u,v,b);return Xs(g,_,S)??pn(u).y(S)};m=p(x.u0)<=p(x.u1)?0:1}Eg(c.solid,c.lines,d,la(i,d,d.overhang??t),a.elevation,c.glass,h,f,m)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function Cg(i){return i.floors.filter(e=>e.rooms.some(t=>t.points.length>=3)).sort((e,t)=>t.elevation-e.elevation)[0]??null}function Ig(i){let e=i.settings.roof,t=Cg(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(I=>I.points.map(L=>L[0])),s=t.rooms.flatMap(I=>I.points.map(L=>L[1])),r=i.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-r,Math.max(...n)+r],[l,c]=[Math.min(...s)-r,Math.max(...s)+r],u=new ut,h=new Qt,f={floor:t,base:t.height,solid:u,lines:h,glass:new ut};if(e.type==="flat"){let I=[[o,l],[a,l],[a,c],[o,c]];return It(u,I,0,.25,$s,Ks,{bottom:!0}),I.forEach(([L,T],F)=>{let[O,U]=I[(F+1)%4];h.seg([L,.252,T],[O,.252,U],Vi),h.seg([L,0,T],[O,0,U],Gi)}),f}let d=a-o>=c-l,m=e.ridge==="short"?!d:d,x=(m?c-l:a-o)/2,g=Math.tan(e.pitch*Lt),p=x*g,y=(I,L,T)=>m?[I,T,(l+c)/2+L]:[(o+a)/2+L,T,I],[v,b]=m?[o,a]:[l,c],_=new Q(Ks),S=new Q($s),E=(I,L,T,F,O)=>{u.tri(I,L,T,O),u.tri(I,T,F,O)};for(let I of[-1,1]){E(y(v,I*x,0),y(b,I*x,0),y(b,0,p),y(v,0,p),_),E(y(v,I*x,-zt),y(v,0,p-zt),y(b,0,p-zt),y(b,I*x,-zt),S),E(y(v,I*x,-zt),y(b,I*x,-zt),y(b,I*x,0),y(v,I*x,0),S);for(let L of[v,b])E(y(L,I*x,-zt),y(L,I*x,0),y(L,0,p),y(L,0,p-zt),S);h.seg(y(v,I*x,0),y(b,I*x,0),Gi);for(let L of[v,b])h.seg(y(L,I*x,0),y(L,0,p),Gi)}let M=e.overhang,A=new Q(Zc),P=x-M,C=P*g;for(let I of[v+M,b-M])u.tri(y(I,-P,-zt),y(I,P,-zt),y(I,0,C-zt),A),u.tri(y(I,P,-zt),y(I,-P,-zt),y(I,0,C-zt),A);return h.seg(y(v,0,p+.004),y(b,0,p+.004),Vi),f}function Xf(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:Ig(i),s=t?.type==="custom"?Rg(i,t.sections??[],t.overhang):n?[n]:[];return wg(i,s),Sg(i,s,e),s}var Sa={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Pg={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},ps=.2,wa=8,Qc=.42,qf=.42;function Og(i,e,t,n=[],s=[],r){let{walls:o,open:a}=aa(i.rooms,{exterior:e,interior:t},i.walls??[]),l=(C,I,L)=>{let T=r?r(C,I):null;return T===null?L:Math.max(.05,Math.min(L,T))},c=(C,I,L,T,F)=>{if(!r)return F;let O=F,U=Math.max(2,Math.ceil((T-L)/.25)+1);for(let V=0;V<U;V++){let k=L+(T-L)*V/(U-1);O=Math.min(O,l(C[0]+I[0]*k,C[1]+I[1]*k,F))}return O},u=new ut(!0,!0),h=[],f=new Qt,d=[];for(let C of i.rooms){if(C.points.length<3)continue;let I=Ng(C.points),L=Pg[C.floor_material]??Pg.wood,T=new Q(L.color),F=n.filter(z=>k0(z,I)).map(z=>z0(z,.003));d.push(...F);let O=[...I,...F.flat()],U=u.count;for(let[z,H,te]of $r(I,F)){let Z=O[z],ce=O[H],ue=O[te];u.tri([Z[0],0,Z[1]],[ue[0],0,ue[1]],[ce[0],0,ce[1]],T,T,T,[Z[0],Z[1],ue[0],ue[1],ce[0],ce[1]],st,L.tile)}h.push({roomId:C.id,start:U,end:u.count,color:L.color});let V=new Q(Sa.slab),k=z=>{for(let H=0;H<z.length;H++){let te=z[H],Z=z[(H+1)%z.length];u.tri([te[0],-ps,te[1]],[te[0],0,te[1]],[Z[0],0,Z[1]],V),u.tri([te[0],-ps,te[1]],[Z[0],0,Z[1]],[Z[0],-ps,Z[1]],V)}};k(I);for(let z of F){k([...Ng(z)].reverse());for(let H=0;H<z.length;H++){let te=z[H],Z=z[(H+1)%z.length];f.seg([te[0],.006,te[1]],[Z[0],.006,Z[1]],Bi),f.seg([te[0],-ps,te[1]],[Z[0],-ps,Z[1]],ki)}}}let m=new Map,x=[],g=new Map;for(let C of o){let I="interior",L=null;if(C.exterior){let F=C.b[0]-C.a[0],O=C.b[1]-C.a[1],U=Math.hypot(F,O)||1,V=[O/U,-F/U],k=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*wa)%wa+wa)%wa;I=`s${k}`;let z=k/wa*2*Math.PI;L=[Math.cos(z),Math.sin(z)]}let T=m.get(I);T===void 0&&(T=x.length,m.set(I,T),x.push(L)),g.set(C,T)}let p=new Map,y=[];for(let C of i.openings){let I=C0(C,i.rooms,i.walls??[]);if(!I)continue;let L=P0(o,C,I);if(!L)continue;let{wall:T,s:F}=L,O=nu([T.b[0]-T.a[0],T.b[1]-T.a[1]]),U=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),V=Math.min(C.width,U),k=Math.max(0,Math.min(U-V,F-V/2)),z=I.room.points,H=T.free?O[0]*(z[1][0]-z[0][0])+O[1]*(z[1][1]-z[0][1])>0:T.roomLeft===C.room_id,te=[-O[1],O[0]],Z=H?te:[-te[0],-te[1]],ce=Math.min(c(T.a,O,k,k+V,eu(T,i.height))-.02,C.sill+C.height),ue=Math.max(0,Math.min(C.sill,ce-.1)),Oe=[Z[1],-Z[0]],q=O[0]*Oe[0]+O[1]*Oe[1]>0,j={opening:C,bucket:g.get(T),start:[T.a[0]+O[0]*k,T.a[1]+O[1]*k],axis:O,width:V,toRoom:Z,faceRoom:H?T.left:T.right,faceOut:H?T.right:T.left,sill:ue,top:ce,hingeAtStart:C.hinge==="left"===q,exterior:T.exterior};y.push(j);let ae=p.get(T);ae||p.set(T,ae=[]),ae.push({s0:k,s1:k+V,sill:ue,top:ce,info:j})}let v=Math.min(i.cut_height,i.height),b=new ut;for(let C of o){let I=g.get(C),L=nu([C.b[0]-C.a[0],C.b[1]-C.a[1]]),T=(p.get(C)??[]).sort((te,Z)=>te.s0-Z.s0),F=eu(C,i.height),O=[],U=[-1/0,...new Set(T.flatMap(te=>[te.s0,te.s1])).values(),1/0].sort((te,Z)=>te-Z);for(let te=0;te+1<U.length;te++){let Z=U[te],ce=U[te+1];if(ce-Z<1e-6)continue;let ue=Number.isFinite(Z)&&Number.isFinite(ce)?(Z+ce)/2:Number.isFinite(Z)?Z+1:ce-1,Oe=T.filter(ae=>ae.s0<ue&&ae.s1>ue).map(ae=>[ae.sill,ae.top]).sort((ae,Te)=>ae[0]-Te[0]),q=[],j=-ps;for(let[ae,Te]of Oe)ae>j+1e-4&&q.push([j,ae]),j=Math.max(j,Te);F>j+1e-4&&q.push([j,F]),O.push({t0:Z,t1:ce,ranges:q})}let V=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),k=r&&c(C.a,L,0,V,F)<F-.001,z=k?O.flatMap(te=>{let Z=Math.max(te.t0,-.5),ce=Math.min(te.t1,V+.5),ue=Math.max(1,Math.ceil((ce-Z)/.3));return Array.from({length:ue},(Oe,q)=>({t0:q===0?te.t0:Z+(ce-Z)*q/ue,t1:q===ue-1?te.t1:Z+(ce-Z)*(q+1)/ue,ranges:te.ranges,inner0:q>0,inner1:q<ue-1}))}):O.map(te=>({...te,inner0:!1,inner1:!1})),H=te=>(te[0]-C.a[0])*L[0]+(te[1]-C.a[1])*L[1];for(let te of z){let Z=vw(C.footprint,C.a,L,te.t0,te.t1);if(Z.length<3)continue;let ce=(q,j)=>Math.abs(H(q)-j)<1e-4,ue=(q,j)=>te.inner0&&ce(q,te.t0)&&ce(j,te.t0)||te.inner1&&ce(q,te.t1)&&ce(j,te.t1),Oe=k?Math.min(...Z.map(([q,j])=>l(q,j,F))):F;for(let[q,j]of te.ranges){let ae=Math.min(j,k?Math.max(...Z.map(([rt,Ve])=>l(rt,Ve,F))):j);if(ae-q<1e-4||Oe-q<.01)continue;let Te=q>.01,be=k&&j>Oe,Ge=(rt,Ve)=>Math.min(j,l(rt,Ve,F));if(q<v-1e-6){let rt=ae>v+1e-6?Mf+I:us+I,Ve=be&&Oe<v?(Ze,ot)=>Math.min(v,Ge(Ze,ot)):Math.min(ae,v);It(b,Z,q,Ve,Sa.wall,Sa.wallTop,{aoFrom:0,bottom:Te,fold:us+I,topFold:rt,skipSide:ue})}ae>v+1e-6&&Oe>v+1e-6&&It(b,Z,Math.max(q,v),be?Ge:ae,Sa.wall,Sa.wallTop,{aoFrom:0,fold:I,bottom:Te&&q>=v,skipSide:ue})}}}let _=o.flatMap(C=>C.footprint),S=Sw(o,_),E=new Qt;E.p.push(...f.p),E.c.push(...f.c),E.f.push(...f.f);let M=(C,I)=>(p.get(C)??[]).filter(I);for(let C of S.edges){let I=g.get(C.wall);for(let[T,F]of tu(C,M(C.wall,O=>O.sill<=.005)))E.seg([T[0],.004,T[1]],[F[0],.004,F[1]],_f);for(let[T,F]of tu(C,M(C.wall,O=>O.sill<v&&O.top>v)))E.seg([T[0],v,T[1]],[F[0],v,F[1]],Vc,da+I);let L=eu(C.wall,i.height);for(let[T,F]of tu(C,M(C.wall,O=>O.top>=L-.021))){if(!r){E.seg([T[0],L,T[1]],[F[0],L,F[1]],Bi,L<=v+1e-6?us+I:I);continue}let O=Math.max(1,Math.ceil(Math.hypot(F[0]-T[0],F[1]-T[1])/.3));for(let U=0;U<O;U++){let V=[T[0]+(F[0]-T[0])*U/O,T[1]+(F[1]-T[1])*U/O],k=[T[0]+(F[0]-T[0])*(U+1)/O,T[1]+(F[1]-T[1])*(U+1)/O],z=l(V[0],V[1],L),H=l(k[0],k[1],L);E.seg([V[0],z,V[1]],[k[0],H,k[1]],Bi,Math.max(z,H)<=v+1e-6?us+I:I)}}}for(let C of S.corners){let I=l(C.p[0],C.p[1],eu(C.wall,i.height));E.segSplit([C.p[0],.004,C.p[1]],[C.p[0],I,C.p[1]],ki,Math.min(v,I),g.get(C.wall))}for(let C of p.values())for(let I of C)_w(E,I,v);let A=ww(S.edges,i.rooms,p);Uf(b,E,i);for(let C of s)jc(b,E,C.face,C.field,i.elevation);let P=[];for(let C of i.furniture){if(b0(C.type))continue;let I=b.count,L=E.p.length/6,T=Un(i,C);Pc(C.type)||Hc(b,E,A,C,T),T+C.h>v+.05&&(wf(b,I,v,Gc),Tf(E,L,v,Gc)),P.push({id:C.id,start:I,end:b.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:b.geometry(),lines:E.geometry(),shadow:A.geometry(),buckets:x,openings:y,walls2d:o,openRooms:a,wallBuckets:o.map(C=>g.get(C)),furnitureTris:P,roofUnder:r}}function _w(i,e,t){let{info:n}=e,s=n.bucket,r=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],o=l=>l>t+1e-6?s:st,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(r(c,l,a),r(c,l,e.top),ki,t,s);i.seg(r(e.s0,l,e.top),r(e.s1,l,e.top),ki,o(e.top)),e.sill>.01&&i.seg(r(e.s0,l,e.sill),r(e.s1,l,e.sill),ki,o(e.sill))}for(let l of[e.s0,e.s1])i.seg(r(l,n.faceRoom,e.top),r(l,-n.faceOut,e.top),ki,o(e.top)),e.sill>.01&&i.seg(r(l,n.faceRoom,e.sill),r(l,-n.faceOut,e.sill),ki,o(e.sill)),e.sill<t&&e.top>t&&i.seg(r(l,n.faceRoom,t),r(l,-n.faceOut,t),Vc,da+s)}function vw(i,e,t,n,s){let r=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],o=i;return Number.isFinite(n)&&(o=Lg(o,a=>r(a)-n)),Number.isFinite(s)&&(o=Lg(o,a=>s-r(a))),o}function Lg(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=e(s),a=e(r);if(o>=0&&t.push(s),o>=0!=a>=0){let l=o/(o-a);t.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return t}var Fg=i=>Math.round(i*1e3),Ta=i=>`${Fg(i[0])},${Fg(i[1])}`,Dg=(i,e)=>{let t=Ta(i),n=Ta(e);return t<n?`${t}|${n}`:`${n}|${t}`};function Mw(i,e){let t=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of e){let f=((h[0]-s[0])*o+(h[1]-s[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-s[0])*a-(h[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=s;for(let h of c){let f=[s[0]+o*h,s[1]+a*h];Ta(f)!==Ta(u)&&t.push([u,f]),u=f}t.push([u,r])}return t}function Sw(i,e){let t=i.map(l=>({wall:l,edges:Mw(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let h=Dg(c,u);n.set(h,(n.get(h)??0)+1)}let s=[],r=new Map,o=(l,c,u)=>{let h=Ta(l),f=r.get(h);f||r.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,h]of c){if(n.get(Dg(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;s.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of r.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function tu(i,e){if(!e.length)return[[i.a,i.b]];let t=nu([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=nu([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let s=h=>(h[0]-i.wall.a[0])*t[0]+(h[1]-i.wall.a[1])*t[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let h of e)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let m=[];return h.s0>f&&m.push([f,h.s0]),h.s1<d&&m.push([h.s1,d]),m});let u=h=>{let f=(h-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>r<=o?[u(h),u(f)]:[u(f),u(h)])}function ww(i,e,t){let n=new ut,s=new Q(qf,qf,qf),r=new Q(1,1,1),o=.002;for(let a of i)for(let[l,c]of tu(a,(t.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!e.some(p=>p.points.length>=3&&xt(m,p.points)))continue;let x=[l[0]+d[0]*Qc,l[1]+d[1]*Qc],g=[c[0]+d[0]*Qc,c[1]+d[1]*Qc];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],s,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],s,r,s)}return n}function Ug(i,e){let t=e.furniture.filter(r=>r.type==="stairwell").map(Nc),n=i.filter(r=>r.elevation<e.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return yf(t);let s=n.furniture.filter(r=>(r.type==="stairs"||Zt(r.type)?.hole)&&n.elevation+r.h>=e.elevation-.3).map(Nc);return yf([...t,...s])}function eu(i,e){return Math.min(e,i.height??e)}function nu(i){let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]}function Ng(i){let e=0;for(let t=0;t<i.length;t++){let n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e>=0?i:[...i].reverse()}var Bg=.12,kg=1.35,iu=(i,e,t)=>Math.min(t,Math.max(e,i)),Tw=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,zg=i=>({...i,target:i.target.clone()});function Vg({target:i,radius:e,theta:t,phi:n}){return new B(i.x+e*Math.sin(n)*Math.sin(t),i.y+e*Math.cos(n),i.z+e*Math.sin(n)*Math.cos(t))}function Gg(i,e,t){let n=Tw(t);return{target:new B().lerpVectors(i.target,e.target,n),radius:i.radius+(e.radius-i.radius)*n,theta:i.theta+(e.theta-i.theta)*n,phi:i.phi+(e.phi-i.phi)*n}}function Hg(i,e){let t=e.theta??i.theta;for(;t-i.theta>Math.PI;)t-=2*Math.PI;for(;t-i.theta<-Math.PI;)t+=2*Math.PI;return{target:(e.target??i.target).clone(),radius:e.radius??i.radius,theta:t,phi:e.phi??i.phi}}function Yf(i,e,t,n,s){let r=2*i.radius*Math.tan(s*Math.PI/360)/(n||1),o=new B(Math.cos(i.theta),0,-Math.sin(i.theta)),a=new B(-Math.sin(i.theta),0,-Math.cos(i.theta));i.target.addScaledVector(o,-e*r),i.target.addScaledVector(a,t*r/Math.max(.35,Math.cos(i.phi)))}function Wg(i,e,t,n){let s=n||1,r={theta:-e/s*3.2,phi:-t/s*2.4};return i.theta+=r.theta,i.phi=iu(i.phi+r.phi,Bg,kg),r}function Xg(i,e){return Math.abs(e.theta)<=1e-4&&Math.abs(e.phi)<=1e-4?!1:(i.theta+=e.theta,i.phi=iu(i.phi+e.phi,Bg,kg),e.theta*=.9,e.phi*=.9,!0)}var Aw=500,Ew=400,Rw=320,Cw=6,Aa=class{view={target:new B,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;press=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;listeners=[];el;camera;events;constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let s=(r,o,a)=>{e.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}get busy(){return this.active}update(e){let t=!1;if(this.flight){let{from:n,to:s,start:r,duration:o}=this.flight,a=Math.min(1,(e-r)/o);this.view=Gg(n,s,a),a>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(t=Xg(this.view,this.velocity));return this.camera.position.copy(Vg(this.view)),this.camera.lookAt(this.view.target),t}flyTo(e,t=700){let n=Hg(this.view,e),s=zg(this.view);this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=n,this.flight=null):this.flight={from:s,to:n,start:performance.now(),duration:t},this.events.change()}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}stopMotion(){this.flight=null,this.velocity={theta:0,phi:0}}onDown(e){this.el.setPointerCapture(e.pointerId);let t=this.pointers.size===0;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button}),this.stopMotion(),t&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0;return}if(clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.press={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let[n,s]=this.local(e);this.holdTimer=setTimeout(()=>{!this.press||this.press.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,s))},Aw)}else this.press=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing)return void this.events.drag?.(...this.local(e));if(this.swiping)return void this.events.swipeMove?.(e.clientY-this.swiping.startY);let[n,s]=[e.clientX-t.x,e.clientY-t.y];if(this.press&&!this.press.moved&&Math.hypot(e.clientX-this.press.x,e.clientY-this.press.y)>Cw){this.press.moved=!0,clearTimeout(this.holdTimer);let[r,o]=this.local({clientX:this.press.x,clientY:this.press.y});if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(r,o,e.clientX-this.press.x,e.clientY-this.press.y))return this.swiping={startY:this.press.y},this.velocity={theta:0,phi:0},void this.events.swipeMove?.(e.clientY-this.press.y)}if(this.pointers.size===1)this.press&&!this.press.moved||(t.button===1||t.button===2||e.shiftKey?Yf(this.view,n,s,this.el.clientHeight,this.camera.fov):this.velocity=Wg(this.view,n,s,this.el.clientHeight)),[t.x,t.y]=[e.clientX,e.clientY];else{[t.x,t.y]=[e.clientX,e.clientY];let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),Yf(this.view,r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1],this.el.clientHeight,this.camera.fov)),this.pinch=r}this.pointers.size===1&&this.press&&!this.press.moved||this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.pointers.delete(e.pointerId),this.grabbing)return this.grabbing=!1,void this.events.drop?.();if(this.swiping)return this.swiping=null,this.press=null,void this.events.swipeEnd?.();if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.press=null;else if(this.press&&!this.press.moved&&e.type==="pointerup"&&performance.now()-this.press.time<Ew){let[t,n]=this.local(e),s=performance.now(),r=s-this.lastTap<Rw;this.lastTap=r?0:s,r?this.events.doubleTap(t,n):this.events.tap(t,n)}this.pointers.size===0&&(this.press=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=iu(this.view.radius*e,this.minRadius,this.maxRadius)}pinchState(){let[e,t]=[...this.pointers.values()];return t?{dist:Math.hypot(e.x-t.x,e.y-t.y),mid:[(e.x+t.x)/2,(e.y+t.y)/2]}:null}};function ms(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`nf-fold-${t}`,i}function Iw(i,e){let t=Zt(e);if(!t)return null;let n=i.scale??1,[s,r,o]=t.size.map(a=>a*n);return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:s,d:r,h:o,variant:i.variant??null,entity:null,power:null}}function su(i,e){let t=[],n=!1;for(let s of i.furniture){t.push(s);let r=s.type==="parking"?e.get(s.id):void 0,o=r?Iw(s,r):null;o&&(t.push(o),n=!0)}return n?{...i,furniture:t}:i}var qg=["neon","blueprint","day"];function Yg(i){return qg.indexOf(i)}var ru={value:new B(.22,.88,1)},ou={value:0};function $g(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var Pw=`
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
`;function yi(i,e,t=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=e,r.uniforms.uAccent=ru,r.uniforms.uAccentOn=ou,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${Pw}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${t?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${t?"l":"s"}`,i}function au(i){return i==="day"?pi:gt}var Kg=.012,Lw=.012;function Fw(){let i=[],e=[],t=[],n=[];return{add(s,r,o,a,l,c,u){for(let h of[s,r,o,s,o,a])i.push(h[0],h[1],h[2]),e.push(l[0],l[1],l[2]),t.push(c),n.push(u)},finish:s=>({pos:new Float32Array(i),normal:new Float32Array(e),room:Int16Array.from(t),fold:new Float32Array(n),doors:s})}}function jg(i,e){let[t,n]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],s=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/s<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/s)>.99}function Dw(i,e,t,n){let s=[];for(let r of n.filter(o=>jg(i,o))){let o=(r.start[0]-i.a[0])*e[0]+(r.start[1]-i.a[1])*e[1],a=r.axis[0]*e[0]+r.axis[1]*e[1]>0?o:o-r.width;a>t||a+r.width<0||s.push({s0:a,s1:a+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function Zg(i,e,t){let n=[e,t,...i.filter(s=>s>e+.005&&s<t-.005)].sort((s,r)=>s-r);return n.filter((s,r)=>r===0||s>n[r-1]+.005)}function Jg(i,e,t=()=>!1){let n=i.map(u=>u[0]),s=i.map(u=>u[1]),[r,o]=[Math.min(...n),Math.min(...s)],[a,l]=[Math.max(1,Math.ceil((Math.max(...n)-r)/e)),Math.max(1,Math.ceil((Math.max(...s)-o)/e))],c=[];for(let u=0;u<a;u++)for(let h=0;h<l;h++){let[f,d]=[r+(u+.5)*e,o+(h+.5)*e];xt([f,d],i)&&!t(f,d)&&c.push({a:r+u*e,b:o+h*e})}return c}function $f(i,e,t,n,s,r=[],o){let a=Fw(),l=(f,d,m,x)=>a.add([f,m,d],[f,m,d+s],[f+s,m,d+s],[f+s,m,d],[0,1,0],x,-1);i.rooms.forEach((f,d)=>{if(!(f.points.length<3))for(let{a:m,b:x}of Jg(f.points,s,(g,p)=>r.some(y=>xt([g,p],y))))l(m,x,Kg,d)});let c=i.rooms.length;for(let f of i.outdoor??[]){if(f.points.length<3||Gs(f.type))continue;let d=Of(i,f)+Kg;for(let{a:m,b:x}of Jg(f.points,s))l(m,x,d,c)}let u=Math.min(i.cut_height,i.height);e.forEach((f,d)=>{let m=Math.min(i.height,f.height??i.height),x=Math.min(u,m-.02),[g,p]=[f.b[0]-f.a[0],f.b[1]-f.a[1]],y=Math.hypot(g,p);if(y<.05)return;let v=[g/y,p/y],b=[-v[1],v[0]],_=t[d],S=Dw(f,v,y,n),E=Zg([x,(x+m)/2,...S.flatMap(A=>[A.y0+.01,A.y1-.01])],.02,m-.02),M=Zg(S.flatMap(A=>[A.s0,A.s1]),0,y);for(let A of[1,-1]){let P=A>0?f.roomLeft:f.roomRight,C=P?i.rooms.findIndex(O=>O.id===P):f.exterior?c:-1;if(C<0)continue;let I=(A>0?f.left:f.right)+Lw,L=[b[0]*A,b[1]*A],T=(O,U)=>[f.a[0]+v[0]*O+L[0]*I,U,f.a[1]+v[1]*O+L[1]*I],F=O=>{let U=T(O,0),V=o?.(U[0],U[2]);return V==null?1/0:V-.02};for(let O=0;O+1<M.length;O++){let U=M[O+1]-M[O],V=Math.max(1,Math.ceil(U/s));for(let k=0;k<V;k++){let z=M[O]+U/V*k,H=M[O]+U/V*(k+1);for(let te=0;te+1<E.length;te++){let[Z,ce]=[E[te],E[te+1]];if(ce-Z<.01)continue;let[ue,Oe]=[(z+H)/2,(Z+ce)/2];if(S.some(ae=>ue>ae.s0&&ue<ae.s1&&Oe>ae.y0&&Oe<ae.y1))continue;let[q,j]=[Math.min(ce,F(z)),Math.min(ce,F(H))];q<=Z+.005&&j<=Z+.005||a.add(T(z,Z),T(H,Z),T(H,Math.max(Z,j)),T(z,Math.max(Z,q)),[L[0],0,L[1]],C,Z>=u-1e-6?_:us+_)}}}}});let h=[];for(let f of n.filter(d=>d.opening.type==="door")){let d=e.find(g=>jg(g,f));if(!d?.roomLeft||!d.roomRight)continue;let[m,x]=[i.rooms.findIndex(g=>g.id===d.roomLeft),i.rooms.findIndex(g=>g.id===d.roomRight)];m<0||x<0||h.push({id:f.opening.id,a:m,b:x,x:f.start[0]+f.axis[0]*(f.width/2),y:Math.min(1.1,f.top*.55),z:f.start[1]+f.axis[1]*(f.width/2)})}return a.finish(h)}function Nw(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function Ow(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Qg(i,e,t){let[n,s,r]=[e[0]-i.x,e[1]-i.y,e[2]-i.z],o=n*n+s*s+r*r,a=Math.sqrt(o)||1e-6,l=Ow(i),c=1/(1+o/(l*l)),u=c*Math.sqrt(c),h=Math.max(0,-(n*t[0]+s*t[1]+r*t[2])/a);return i.level*u*(.2+.8*h)*Nw(i.kind,s/a)}function Uw(i,e,t){let n=[];return i.doors.forEach((s,r)=>{let o=t[r]??.5;if(!(o<=.01))for(let[a,l]of[[s.a,s.b],[s.b,s.a]]){let c=[0,0,0];for(let h of e.filter(f=>f.room===a)){let f=[h.x-s.x,h.y-s.y,h.z-s.z],d=Math.hypot(...f)||1,m=Qg(h,[s.x,s.y,s.z],[f[0]/d,f[1]/d,f[2]/d]);for(let x=0;x<3;x++)c[x]+=h.color[x]*m}let u=Math.max(...c);u<.01||n.push({x:s.x,y:s.y,z:s.z,color:[c[0]/u,c[1]/u,c[2]/u],level:Math.min(1,u*.9*(.35+.65*o)),kind:"wall",room:l})}}),n}function Kf(i,e,t=.7,n=[]){let s=new Map;for(let c of[...e,...Uw(i,e,n)]){let u={...c,color:c.color.map(h=>h**1.5)};s.set(c.room,[...s.get(c.room)??[],u])}let{pos:r,normal:o,room:a}=i,l=new Float32Array(r.length);for(let c=0;c<a.length;c++){let u=s.get(a[c]);if(!u)continue;let h=c*3,f=[0,0,0];for(let d of u){let m=Qg(d,[r[h],r[h+1],r[h+2]],[o[h],o[h+1],o[h+2]]);for(let x=0;x<3;x++)f[x]+=d.color[x]*m}for(let d=0;d<3;d++)l[h+d]=1-Math.exp(-f[d]*t*1.6)}return l}function Zf(i,e,t){let n=i.rooms.findIndex(s=>s.points.length>=3&&xt([e,t],s.points));return n<0?i.rooms.length:n}var Jf=(i,e)=>i&&e>=0&&e<i.length?i[e]:e;var cu={open:0,open2:0,tilt:0,tilt2:0,cover:null},ex=2043986,tx=2769520,Bw=2242399,jf=1845831,kw=1450554,Hi=16758087,zw=1.2,Vw=1.5,Gw=1846349,Hw=2572395,Ww=1120816,Xw=1845831,nx=5995775,ix=9085695,Qr=ke(3662079,.08),qw=.2;function lu(i,e,t,n,s,r,o,a,l,c,u){let h=(d,m,x)=>e(d,m,x),f=[[h(t,s,a),h(n,s,a),h(n,r,a),h(t,r,a),c],[h(t,s,o),h(n,s,o),h(n,r,o),h(t,r,o),ke(l.getHex(),.6)],[h(t,r,o),h(n,r,o),h(n,r,a),h(t,r,a),l],[h(t,s,o),h(n,s,o),h(n,s,a),h(t,s,a),ke(l.getHex(),.85)],[h(t,s,o),h(t,r,o),h(t,r,a),h(t,s,a),ke(l.getHex(),.92)],[h(n,s,o),h(n,r,o),h(n,r,a),h(n,s,a),ke(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)i.tri(d,m,x,p,p,p,void 0,u),i.tri(d,x,g,p,p,p,void 0,u)}function lt(i,e,t,n,s,r,o,a,l,c,u,h){if(a<=u+1e-6)return lu(i,e,t,n,s,r,o,a,l,c,st);if(o>=u-1e-6)return lu(i,e,t,n,s,r,o,a,l,c,h);lu(i,e,t,n,s,r,o,u,l,c,st),lu(i,e,t,n,s,r,u,a,l,c,h)}function gs(i,e,t,n,s,r,o,a,l,c,u=0){let h=(f,d,m)=>{let x=b=>u?(o-b)/u:.5,g=e(t,s,f),p=e(n,s,f),y=e(n,s,d),v=e(t,s,d);i.tri(g,p,y,a,a,a,[0,x(f),1,x(f),1,x(d)],m),i.tri(g,y,v,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?h(r,o,st):r>=l-1e-6?h(r,o,c):(h(r,l,st),h(l,o,c))}function Yw(i,e,t,n,s,r,o,a,l,c){let u=e(t,s,o),h=e(n,s,o),f=e(n,r,o),d=e(t,r,o),m=0,x=(r-s)/c;i.tri(u,h,f,a,a,a,[0,m,1,m,1,x],l),i.tri(u,f,d,a,a,a,[0,m,1,x,0,x],l)}function sx(i,e,t){let n=new ut,s=new ut,r=new ut(!0),o=new Q(ex),a=new Q(tx),l=[],c=[],u=[];for(let h of i){let f=n.count,d=s.count,m=r.count,x=e.get(h.opening.id)??cu,g=h.width,{sill:p,top:y,bucket:v}=h,b=(M,A,P)=>[h.start[0]+h.axis[0]*M+h.toRoom[0]*A,P,h.start[1]+h.axis[1]*M+h.toRoom[1]*A],_=(h.faceRoom-h.faceOut)/2,S=h.opening.mark==="closed",E=h.opening.type==="door"&&Hs(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!E||h.opening.type==="garage"){let M=-h.faceOut-.012,A=h.faceRoom+.012,P=h.opening.type==="garage"&&(S?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),C=P?ke(Hi,.8):new Q(ex),I=P?ke(Hi,1):new Q(tx);lt(n,b,-.045,.02,M,A,0,y+.045,C,I,t,v),lt(n,b,g-.02,g+.045,M,A,0,y+.045,C,I,t,v),lt(n,b,.02,g-.02,M,A,y-.02,y+.045,C,I,t,v)}if(h.opening.type==="door"){let M=Hs(h.opening,h.exterior),A=_0(M),P=h.opening.swing==="out"?-1:1,C=P>0?h.faceRoom:-h.faceOut,I=h.opening.leaves===2,L=.02,T=g-.02,F=y0(g,M,h.hingeAtStart,h.opening);if(F){for(let[k,z]of F.panels)lt(n,b,k,k+.04,_-.03,_+.03,.02,y-.02,o,a,t,v),lt(n,b,z-.04,z,_-.03,_+.03,.02,y-.02,o,a,t,v),lt(n,b,k,z,_-.03,_+.03,.02,.1,o,a,t,v),gs(s,b,k+.04,z-.04,_,.1,y-.02,Qr,t,v);L=F.x0,T=F.x1}let O=I?(T-L)/2-.004:T-L,U=A?.06:.04;A&&(lt(n,b,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new Q(jf),a,t,v),h.exterior&&lt(n,b,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,y+.1,y+.17,ke(Hi,.55),ke(Hi,.85),t,st));let V=E?[]:[[h.hingeAtStart,x.open]];I&&!E&&V.push([!h.hingeAtStart,x.open2??0]);for(let[k,z]of V){let H=Math.min(1,Math.max(0,z)),te=M==="sliding"?0:H*Vw,Z=M==="sliding"?H*O:0,ce=(rt,Ve,Ze)=>{let ot=rt*Math.cos(te)-Ve*Math.sin(te)-Z,je=C+P*(Ve*Math.cos(te)+rt*Math.sin(te)+(Z?.05:0));return b(k?L+ot:T-ot,je,Ze)},ue=H>.05?st:v,Oe=S?!!x.sensed&&H<.05:H>.9,q=Oe?ke(Hi,.7):new Q(A?Ww:Gw),j=Oe?ke(Hi,.9):new Q(A?Xw:Hw);M==="glass"?(lt(n,ce,0,.05,-U,0,.01,y-.01,q,j,t,ue),lt(n,ce,O-.05,O,-U,0,.01,y-.01,q,j,t,ue),lt(n,ce,.05,O-.05,-U,0,.01,.12,q,j,t,ue),lt(n,ce,.05,O-.05,-U,0,y-.08,y-.01,q,j,t,ue),gs(s,ce,.05,O-.05,-U/2,.12,y-.08,Qr,t,ue)):lt(n,ce,0,O,-U,0,.01,y-.01,q,j,t,ue),M==="front_glass"?gs(s,ce,.12,O-.12,.001,y*.55,y-.18,Qr,t,ue):A&&gs(s,ce,.1,.18,.001,.3,y-.3,Qr,t,ue);let ae=Math.min(1.05,y*.5),Te=A?.3:.012,be=A?O-.11:O-.16,Ge=A?O-.08:O-.05;lt(n,ce,be,Ge,.004,.05,ae-Te,ae+Te,new Q(nx),new Q(ix),t,ue),lt(n,ce,be,Ge,-U-.05,-U-.004,ae-Te,ae+Te,new Q(nx),new Q(ix),t,ue)}}else if(h.opening.type==="garage"){let M=Math.min(1,Math.max(0,x.cover??1)),A=new Q(13951231),P=h.faceRoom-.03,C=y*(1-M);M>.01&&gs(r,b,.02,g-.02,P,C,y,A,t,v,.5);let I=(1-M)*y;I>.01&&Yw(r,b,.02,g-.02,P,P+I,y+.03,A,v,.5)}else if(Hs(h.opening,h.exterior)==="glass_wall"){lt(n,b,0,.04,_-.025,_+.025,p,y,o,a,t,v),lt(n,b,g-.04,g,_-.025,_+.025,p,y,o,a,t,v),lt(n,b,.04,g-.04,_-.025,_+.025,p,p+.03,o,a,t,v),lt(n,b,.04,g-.04,_-.025,_+.025,y-.04,y,o,a,t,v);let P=Math.max(1,Math.round((g-2*.04)/.9)),C=(g-2*.04)/P;for(let I=1;I<P;I++){let L=.04+I*C;lt(n,b,L-.02,L+.02,_-.025,_+.025,p+.03,y-.04,o,a,t,v)}for(let I=0;I<P;I++){let L=.04+I*C+(I?.02:0),T=.04+(I+1)*C-(I<P-1?.02:0);gs(s,b,L,T,_,p+.03,y-.04,Qr,t,v)}}else{lt(n,b,0,.06,_-.035,_+.035,p,y,o,a,t,v),lt(n,b,g-.06,g,_-.035,_+.035,p,y,o,a,t,v),lt(n,b,.06,g-.06,_-.035,_+.035,p,p+(p>.05?.06:.03),o,a,t,v),lt(n,b,.06,g-.06,_-.035,_+.035,y-.06,y,o,a,t,v),p>.3&&(lt(n,b,-.04,g+.04,_+.035,h.faceRoom+.07,p-.03,p,new Q(jf),a,t,v),h.exterior&&lt(n,b,-.03,g+.03,-h.faceOut-.06,_-.035,p-.04,p-.02,new Q(jf),a,t,v));let P=.055,C=p+(p>.05?.06:.03),I=y-.06,L=_+.035,T=_+.035+.06,O=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let U of O){let V=U.open>.02||U.tilt>.02,k=S?!!x.sensed&&!V:V,z=k?ke(Hi,.75):new Q(Bw),H=k?ke(Hi,.95):a,te=U.x0,Z=U.x1,ce=Z-te,ue=U.open*zw,Oe=U.tilt*qw,q=(ae,Te,be)=>{let Ge=be-C,rt=Te+Ge*Math.sin(Oe),Ve=C+Ge*Math.cos(Oe),Ze=ae*Math.cos(ue)-(rt-L)*Math.sin(ue);rt=L+(rt-L)*Math.cos(ue)+ae*Math.sin(ue);let ot=U.atStart?te+Ze:Z-Ze;return b(ot,rt,Ve)},j=ue>.05?st:v;if(lt(n,q,0,P,L,T,C,I,z,H,t,j),lt(n,q,ce-P,ce,L,T,C,I,z,H,t,j),lt(n,q,P,ce-P,L,T,C,C+P,z,H,t,j),lt(n,q,P,ce-P,L,T,I-P,I,z,H,t,j),gs(s,q,P,ce-P,(L+T)/2,C+P,I-P,k?ke(Hi,.16):Qr,t,j),Hs(h.opening,h.exterior)==="bars"){let ae=(C+I)/2,Te=(L+T)/2;lt(n,q,P,ce-P,Te-.012,Te+.012,ae-.012,ae+.012,z,H,t,j),lt(n,q,ce/2-.012,ce/2+.012,Te-.012,Te+.012,C+P,I-P,z,H,t,j)}}}if(x.cover!==null){let M=-h.faceOut,A=y+.2;lt(n,b,-.05,g+.05,M-.15,M,y,A,new Q(kw),a,t,v);let P=Math.min(1,Math.max(0,x.cover));if(P>.01){let C=y-P*(y-p);gs(r,b,0,g,M-.07,C,y,new Q(16777215),t,v,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:s.count}),u.push({id:h.opening.id,start:m,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:u}}var Qf=Math.PI/180,Ea=2400,eo=1600,ed=9;function uu(i,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[r,o]of i)s.addColorStop(r,o);return n.fillStyle=s,n.fillRect(0,0,e,e),new ln(t)}function $w(i){let t=document.createElement("canvas");t.width=128,t.height=128/2;let n=t.getContext("2d"),s=i*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*r()),l=128/2*(.45+.25*r()),c=128*(.12+.14*r()),u=n.createRadialGradient(a,l,0,a,l,c);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.6,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.fillRect(0,0,128,128/2)}return new ln(t)}var hu=class{group=new pt;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(Ea*3);snow;snowPhase=new Float32Array(eo);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(e){this.scene=e,this.group.name="live-weather",this.group.renderOrder=5;let t=new ze;t.setAttribute("position",new He(new Float32Array(Ea*6),3)),this.rain=new xn(t,new kt({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=uu([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),s=new ze;s.setAttribute("position",new He(new Float32Array(eo*3),3)),this.snow=new Cn(s,new bn({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<eo;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let r=new ze;r.setAttribute("position",new He(new Float32Array(600*3),3)),this.hail=new Cn(r,new bn({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=uu([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<ed;c++){let u=new Is(new es({map:$w(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),h=new Fe(new Nn(1,1),new Ye({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:pi}));h.rotation.x=-Math.PI/2,h.renderOrder=-1,this.clouds.push({sprite:u,shadow:h,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(u,h)}let a=new ze;a.setAttribute("position",new He(new Float32Array(144),3)),this.bolt=new xn(a,new kt({color:14674175,transparent:!0,opacity:1,blending:gt,depthWrite:!1})),this.bolt.visible=!1;let l=uu([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new Is(new es({map:l,transparent:!0,depthWrite:!1,blending:gt,fog:!1})),this.halo=new Is(new es({map:uu([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:gt,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,e.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(e){this.bounds=e,this.seed()}set(e){let t=this.view;this.view=e,this.group.visible=!!e;let n=e?.weather??null;if(e&&n&&n.fog>.02&&!e.low){let s=new Q(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255);this.scene.fog=new Es(s,.008+.04*n.fog)}else this.scene.fog instanceof Es&&(this.scene.fog=null);(!t||t.low!==e?.low||!!t.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let e=this.view?.weather;if(!e)return[0,0];let n=((e.windFrom??270)+(this.view?.north??0)+180)*Qf,s=.4+7*e.wind;return[Math.sin(n)*s,-Math.cos(n)*s]}count(e,t){let n=this.view?.low??!1;return Math.round(Math.min(1,e)*t*(n?.3:1))}seed(){let e=this.bounds,t=this.view?.weather,n=()=>e.x0+Math.random()*(e.x1-e.x0),s=()=>e.z0+Math.random()*(e.z1-e.z0),r=()=>e.y0+Math.random()*(e.y1-e.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<Ea;c++){let u=n(),h=r(),f=s();o.setXYZ(c*2,u,h,f),o.setXYZ(c*2+1,u,h-.4,f),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<eo;c++)a.setXYZ(c,n(),r(),s());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),r(),s());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(t?.rain??0,Ea)*2),this.snow.geometry.setDrawRange(0,this.count(t?.snow??0,eo)),this.hail.geometry.setDrawRange(0,this.count(t?.hail??0,600)),this.rain.visible=!!t&&t.rain>.01,this.snow.visible=!!t&&t.snow>.01,this.hail.visible=!!t&&t.hail>.01,this.clouds.forEach((c,u)=>{c.angle=u/ed*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=e.x0+Math.random()*(e.x1-e.x0),c.sz=e.z0+Math.random()*(e.z1-e.z0)}),this.placeClouds(0)}placeClouds(e){let t=this.view,n=t?.weather,s=n?.cloud??0,r=this.bounds,o=(r.x0+r.x1)/2,a=(r.z0+r.z1)/2,l=Math.max(r.x1-r.x0,r.z1-r.z0),[c,u]=this.windVector(),h=Math.round(s*ed),f=t?.sky??[20,28,44],d=(f[0]+f[1]+f[2])/765,m=n?.rain||n?.lightning?.3:0,x=Math.max(.12,Math.min(1,.28+d*.9-m-.25*Math.max(0,s-.6))),g=Math.hypot(c,u)/Math.max(20,l*4)*e*Math.sign(c||1);this.clouds.forEach((p,y)=>{let v=y<h;p.angle+=g*p.speed;let b=l*p.ring,_=p.sprite.material;_.color.setRGB(x,x*1.02,Math.min(1,x*1.12)),_.opacity=v?.3+.45*s:0,p.sprite.visible=v,p.sprite.position.set(o+Math.cos(p.angle)*b,r.y0+l*p.lift,a+Math.sin(p.angle)*b),p.sprite.scale.set(l*p.scale*1.6,l*p.scale*.6,1),p.sx+=c*.45*p.speed*e,p.sz+=u*.45*p.speed*e;let S=l*.4;p.sx>r.x1+S&&(p.sx=r.x0-S),p.sx<r.x0-S&&(p.sx=r.x1+S),p.sz>r.z1+S&&(p.sz=r.z0-S),p.sz<r.z0-S&&(p.sz=r.z1+S);let E=p.shadow.material;E.opacity=v?.12+.2*s:0,p.shadow.visible=v,p.shadow.position.set(p.sx,r.y0+.03,p.sz),p.shadow.scale.set(l*p.scale*.55,l*p.scale*.35,1)})}placeDisc(){let e=this.view,t=e?.sun,n=e?.weather?.cloud??0,s=!t||t.elevation<-3;if(!e||!t||!e.disc||n>.9||!s&&t.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let r=this.bounds,o=new B((r.x0+r.x1)/2,r.y0,(r.z0+r.z1)/2),a=Math.max(70,Math.max(r.x1-r.x0,r.z1-r.z0)*3.5),l=((s?t.azimuth+180:t.azimuth)+e.north)*Qf,c=Math.max(8,Math.abs(t.elevation))*Qf,u=new B(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),h=o.addScaledVector(u,a),f=a*(s?.07:.1);this.disc.position.copy(h),this.halo.position.copy(h),this.disc.scale.setScalar(f),this.halo.scale.setScalar(f*3.2);let d=this.disc.material,m=this.halo.material,x=s?0:Math.max(0,1-t.elevation/20);d.color.set(s?14016242:new Q(1,.9-.25*x,.6-.35*x)),m.color.copy(d.color),d.opacity=(s?.7:.95)*(1-n),m.opacity=(s?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(e){let t=this.bounds,s=(Math.random()<.5?-1:1)<0?t.x0-2-Math.random()*6:t.x1+2+Math.random()*6,r=t.z0+Math.random()*(t.z1-t.z0),o=t.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let u=0;u<l;u++){let h=o-(u+1)/l*(o-t.y0),f=s+(Math.random()-.5)*1.6,d=r+(Math.random()-.5)*1.6;a.setXYZ(u*2,s,c,r),a.setXYZ(u*2+1,f,h,d),s=f,r=d,c=h}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=e+90+Math.random()*120,this.onFlash?.(!0)}step(e){let t=this.view,n=t?.weather;if(!t||!n)return this.last=0,!1;let s=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e;let r=this.bounds,o=r.y1-r.y0,[a,l]=this.windVector();if(this.rain.visible&&s){let c=this.rain.geometry.getAttribute("position"),u=c.array,h=this.count(n.rain,Ea);for(let f=0;f<h;f++){let d=f*6,m=this.rainVel[f*3+1],x=u[d]+a*s,g=u[d+1]-m*s,p=u[d+2]+l*s;g<r.y0&&(g+=o,x=r.x0+Math.random()*(r.x1-r.x0)-a*.4,p=r.z0+Math.random()*(r.z1-r.z0)-l*.4);let y=.05;u[d]=x,u[d+1]=g,u[d+2]=p,u[d+3]=x-a*y,u[d+4]=g+m*y,u[d+5]=p-l*y}c.needsUpdate=!0}if(this.snow.visible&&s){let c=this.snow.geometry.getAttribute("position"),u=c.array,h=this.count(n.snow,eo),f=e/1e3;for(let d=0;d<h;d++){let m=d*3,x=this.snowPhase[d],g=u[m]+(a*.35+Math.sin(f*1.3+x)*.35)*s,p=u[m+1]-(.7+.5*(x*7%1))*s,y=u[m+2]+(l*.35+Math.cos(f*1.1+x)*.35)*s;p<r.y0&&(p+=o,g=r.x0+Math.random()*(r.x1-r.x0),y=r.z0+Math.random()*(r.z1-r.z0)),u[m]=g,u[m+1]=p,u[m+2]=y}c.needsUpdate=!0}if(this.hail.visible&&s){let c=this.hail.geometry.getAttribute("position"),u=c.array,h=this.count(n.hail,600);for(let f=0;f<h;f++){let d=f*3,m=u[d+1]-14*s;m<r.y0&&(m+=o),u[d]+=a*.5*s,u[d+1]=m,u[d+2]+=l*.5*s}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(s),n.lightning&&!t.low?(this.nextBolt||(this.nextBolt=e+2500+Math.random()*6e3),e>=this.nextBolt&&(this.strike(e),this.nextBolt=e+3500+Math.random()*9e3),this.bolt.visible&&e>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof Es&&(this.scene.fog=null)}};var fu=46,Zs=900;function Kw(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new ln(i)}var du=class{group=new pt;scene;lift;tex=Kw();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(Zs*3);sparkField=new Int16Array(Zs);sparkPhase=new Float32Array(Zs);sparkCount=0;last=0;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-energy";let n=new ze;n.setAttribute("position",new He(new Float32Array(Zs*3),3)),n.setAttribute("color",new He(new Float32Array(Zs*3),3)),this.sparks=new Cn(n,new bn({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:gt})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),e.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(e){let t=new Set(e.map(n=>n.key));for(let[n,s]of this.arcs)t.has(n)||(this.group.remove(s.line,s.points),s.line.geometry.dispose(),s.line.material.dispose(),s.points.geometry.dispose(),s.points.material.dispose(),this.arcs.delete(n));for(let n of e){let s=this.arcs.get(n.key);if(!s){let o=new ze;o.setAttribute("position",new He(new Float32Array(99),3));let a=new Rn(o,new kt({transparent:!0,opacity:.4,depthWrite:!1,blending:gt})),l=new ze;l.setAttribute("position",new He(new Float32Array(fu*3),3));let c=new Cn(l,new bn({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:gt}));a.frustumCulled=c.frustumCulled=!1;let u=new Float32Array(fu);for(let h=0;h<fu;h++)u[h]=Math.random();s={arc:n,line:a,points:c,phase:u,count:0,speed:0,a:new B,b:new B,c:new B},this.arcs.set(n.key,s),this.group.add(a,c)}s.arc=n;let r=new Q(n.color[0]/255,n.color[1]/255,n.color[2]/255);s.line.material.color.copy(r),s.points.material.color.copy(r),s.count=Math.max(3,Math.min(fu,Math.round(3+Math.sqrt(n.power)/2.2))),s.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),s.points.geometry.setDrawRange(0,s.count)}this.place()}setSparks(e){this.sparkFields=e;let t=e.reduce((s,r)=>s+r.quads.length*r.level,0),n=0;t>0&&e.forEach((s,r)=>{if(s.level<=0)return;let o=Math.round(Zs*s.quads.length*s.level/Math.max(t,e.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<Zs;a++,n++){let l=s.quads[Math.floor(Math.random()*s.quads.length)],c=Math.random(),u=Math.random();for(let h=0;h<3;h++){let f=l[0][h]+(l[1][h]-l[0][h])*c,d=l[3][h]+(l[2][h]-l[3][h])*c;this.sparkBase[n*3+h]=f+(d-f)*u+(h===1?.12:0)}this.sparkField[n]=r,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(e,t){let n=this.lift(e.floorId);return t.set(e.x,n.y+e.y,e.z),n.visible}place(){for(let e of this.arcs.values()){let t=this.world(e.arc.from,e.a),n=this.world(e.arc.to,e.b),s=e.a.distanceTo(e.b);e.c.copy(e.a).add(e.b).multiplyScalar(.5),e.c.y=Math.max(e.a.y,e.b.y)+.6+s*.22;let r=t&&n;e.line.visible=e.points.visible=r;let o=e.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(e,l))}o.needsUpdate=!0}}bezier(e,t){let n=1-t;return[n*n*e.a.x+2*n*t*e.c.x+t*t*e.b.x,n*n*e.a.y+2*n*t*e.c.y+t*t*e.b.y,n*n*e.a.z+2*n*t*e.c.z+t*t*e.b.z]}step(e){if(!this.active||!this.group.visible)return this.last=0,!1;let t=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let s=n.points.geometry.getAttribute("position");for(let r=0;r<n.count;r++)n.phase[r]=(n.phase[r]+n.speed*t)%1,s.setXYZ(r,...this.bezier(n,n.phase[r]));s.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),s=this.sparks.geometry.getAttribute("color"),r=e/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(r*2.4+this.sparkPhase[o]*3))**6,u=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;s.setXYZ(o,u,u*.86,u*.35)}n.needsUpdate=!0,s.needsUpdate=!0}return!0}setVisible(e){this.group.visible=e}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var rx=3,pu=class{group=new pt;scene;lift;ringGeo=new Fs(.92,1,48);spots=new Map;links=[];constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-sound",e.add(this.group)}get active(){return this.spots.size>0}set(e,t){let n=new Set(e.map(s=>s.id));for(let[s,r]of this.spots)if(!n.has(s)){for(let o of r.rings)this.group.remove(o),o.material.dispose();this.spots.delete(s)}for(let s of e){let r=this.spots.get(s.id);if(!r){let a=Array.from({length:rx},()=>{let l=new Fe(this.ringGeo,new Ye({transparent:!0,opacity:0,depthWrite:!1,blending:gt,side:St}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});r={spot:s,rings:a},this.spots.set(s.id,r)}r.spot=s;let o=new Q(s.color[0]/255,s.color[1]/255,s.color[2]/255);for(let a of r.rings)a.material.color.copy(o)}for(let s of this.links)this.group.remove(s.line),s.line.geometry.dispose(),s.line.material.dispose();this.links=t.map(([s,r])=>{let o=new ze;o.setAttribute("position",new He(new Float32Array(51),3));let a=new Rn(o,new kt({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:gt}));return a.frustumCulled=!1,this.group.add(a),{a:s,b:r,line:a}})}step(e){if(!this.spots.size&&!this.links.length)return!1;let t=e/1e3;for(let n of this.spots.values()){let s=this.lift(n.spot.at.floorId),r=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(t*.55+a/rx)%1;o.visible=s.visible,o.position.set(n.spot.at.x,s.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*r),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let s=this.lift(n.a.floorId),r=this.lift(n.b.floorId);n.line.visible=s.visible&&r.visible;let o=n.line.geometry.getAttribute("position"),a=s.y+n.a.y,l=r.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let u=0;u<=16;u++){let h=u/16,f=Math.sin(Math.PI*h)*(.3+c*.12)+Math.sin(t*3+h*12)*.03;o.setXYZ(u,n.a.x+(n.b.x-n.a.x)*h,a+(l-a)*h+f,n.a.z+(n.b.z-n.a.z)*h)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var Zw=Math.PI/180;function Jw(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ln(i)}var mu=class{group=new pt;scene;lift;glowTex=Jw();views=new Map;onChange=null;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-screens",e.add(this.group)}get active(){return[...this.views.values()].some(e=>e.s.playing)}set(e){let t=new Set(e.map(n=>n.id));for(let[n,s]of this.views)t.has(n)||this.drop(n,s);for(let n of e){let s=this.views.get(n.id);if(!s){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new ln(o);a.colorSpace=Mt;let l=new Fe(new Nn(1,1),new Ye({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Fe(new Nn(1,1),new Ye({map:this.glowTex,transparent:!0,depthWrite:!1,blending:gt,side:St}));c.renderOrder=2,this.group.add(l,c),s={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,s)}s.s=n;let r=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(r!==s.sig){let o=s.sig.split("|")[3]!==(n.picture??"");s.sig=r,o&&this.loadPicture(s),this.draw(s)}this.place(s)}}loadPicture(e){e.image=null;let t=e.s.picture;if(!t)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{e.s.picture!==t||!this.views.has(e.s.id)||(e.image=n,this.draw(e),this.onChange?.())},n.src=t}draw(e){let t=e.s,n=e.canvas.getContext("2d"),s=e.canvas.width,r=e.canvas.height,[o,a,l]=t.color,c=n.createLinearGradient(0,0,s,r);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,s,r);let u=22,h=u;if(e.image){let f=r-u*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let d=e.image.naturalWidth||1,m=e.image.naturalHeight||1,x=Math.max(f/d,f/m),g=f/x,p=f/x;n.drawImage(e.image,(d-g)/2,(m-p)/2,g,p,u,u,f,f),n.restore(),h=u*2+f}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,t.title||t.app||"",h,r/2-18,s-h-u),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,t.subtitle,h,r/2+22,s-h-u),t.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(t.playing?"\u25B6 ":"\u275A\u275A ")+t.app,h,r-u-14,s-h-u)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,r-6,s*(t.playing?1:.4),6),e.texture.needsUpdate=!0}text(e,t,n,s,r){let o=t;for(;o.length>1&&e.measureText(o).width>r;)o=o.slice(0,-2);e.fillText(o===t?o:`${o}\u2026`,n,s)}place(e){let t=e.s,n=t.rect,s=t.rotation*Zw,r=this.lift(t.floorId),o=(n.x0+n.x1)/2,a=(m,x)=>[t.x+m*Math.cos(s)-x*Math.sin(s),t.z+m*Math.sin(s)+x*Math.cos(s)],l=n.x1-n.x0,c=n.y1-n.y0,[u,h]=a(o,n.z+.012);e.screen.position.set(u,r.y+(n.y0+n.y1)/2,h),e.screen.rotation.set(0,-s,0),e.screen.scale.set(l,c,1);let[f,d]=a(o,n.z-.18);e.glow.position.set(f,r.y+(n.y0+n.y1)/2,d),e.glow.rotation.set(0,-s,0),e.glow.scale.set(l*2.4,c*2.6,1),e.glow.material.color=new Q(t.color[0]/255,t.color[1]/255,t.color[2]/255),e.screen.visible=e.glow.visible=r.visible}step(e){let t=!1;for(let n of this.views.values()){this.place(n);let s=n.glow.material;s.opacity=n.s.playing?.55+.25*Math.sin(e/900+n.s.x):.25,t||=n.s.playing}return t}drop(e,t){this.group.remove(t.screen,t.glow),t.screen.geometry.dispose(),t.screen.material.dispose(),t.texture.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose(),this.views.delete(e)}dispose(){for(let[e,t]of this.views)this.drop(e,t);this.glowTex.dispose(),this.scene.remove(this.group)}};var ox=new Q(.25,.55,1),td=new Q(1,.3,.75),gu=10,xu=class{group=new pt;scene;lift;points=[];line;comet;rings=[];ringGeo=new Fs(.18,.26,32);constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-trail";let n=new ze;n.setAttribute("position",new He(new Float32Array(3),3)),n.setAttribute("color",new He(new Float32Array(3),3)),this.line=new Rn(n,new kt({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:gt})),this.line.frustumCulled=!1,this.comet=new Fe(new Lo(.12,12,8),new Ye({color:td,transparent:!0,depthWrite:!1,blending:gt})),this.group.add(this.line,this.comet),this.group.visible=!1,e.add(this.group)}set(e){this.points=e;for(let s of this.rings)this.group.remove(s),s.material.dispose();this.rings=e.map(s=>{let r=new Fe(this.ringGeo,new Ye({color:ox.clone().lerp(td,s.age),transparent:!0,opacity:.4+.6*s.age,depthWrite:!1,blending:gt,side:St}));return r.rotation.x=-Math.PI/2,this.group.add(r),r});let t=Math.max(1,(e.length-1)*gu+1);this.line.geometry.dispose();let n=new ze;n.setAttribute("position",new He(new Float32Array(t*3),3)),n.setAttribute("color",new He(new Float32Array(t*3),3)),this.line.geometry=n,this.group.visible=e.length>0}at(e,t){let n=this.points[e].at,s=this.points[Math.min(this.points.length-1,e+1)].at,r=this.lift(n.floorId),o=this.lift(s.floorId),a=r.y+n.y,l=o.y+s.y,c=Math.sin(Math.PI*t)*(.25+Math.hypot(n.x-s.x,n.z-s.z)*.08);return[n.x+(s.x-n.x)*t,a+(l-a)*t+c,n.z+(s.z-n.z)*t]}step(e){let t=this.points.length;if(!t)return!1;let n=this.line.geometry.getAttribute("position"),s=this.line.geometry.getAttribute("color"),r=0,o=new Q;for(let a=0;a<Math.max(1,t-1);a++)for(let l=0;l<=gu;l++){if(l===gu&&a<t-2)continue;if(t===1&&l>0)break;let c=l/gu;n.setXYZ(r,...this.at(a,t===1?0:c));let u=t===1?1:this.points[a].age+(this.points[Math.min(t-1,a+1)].age-this.points[a].age)*c;o.copy(ox).lerp(td,u).multiplyScalar(.3+.7*u),s.setXYZ(r,o.r,o.g,o.b),r++}if(this.line.geometry.setDrawRange(0,r),n.needsUpdate=s.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===t-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(e/250))}),t>1){let a=e/1e3%(1.2*(t-1)+1)/1.2,l=Math.min(t-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var bu=class extends Ci{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new is;e.deleteAttribute("uv");let t=new ci({side:en}),n=new ci,s=new Ns(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ps(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Fe(e,to(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Fe(e,to(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Fe(e,to(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Fe(e,to(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Fe(e,to(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Fe(e,to(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function to(i){return new Fo({color:0,emissive:16777215,emissiveIntensity:i})}function nd(i,e){if(e===Ch)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ur||e===Jo){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ur)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function ax(i,e=Math.PI/3){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,s=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(s*3);for(let b=0;b<s;b++)r[3*b+0]=n.getX(b),r[3*b+1]=n.getY(b),r[3*b+2]=n.getZ(b)}let o=Math.cos(e),a=(1+1e-10)*100,l=s/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let _=9*b,S=r[_+0],E=r[_+1],M=r[_+2],A=r[_+3],P=r[_+4],C=r[_+5],I=r[_+6],L=r[_+7],T=r[_+8],F=I-A,O=L-P,U=T-C,V=S-A,k=E-P,z=M-C,H=O*z-U*k,te=U*V-F*z,Z=F*k-O*V,ce=1/(Math.sqrt(H*H+te*te+Z*Z)||1);c[3*b+0]=H*ce,c[3*b+1]=te*ce,c[3*b+2]=Z*ce}let u=new Int32Array(s),h=new Float64Array(s*3),f=1;for(;f<s*2;)f<<=1;let d=f-1,m=new Int32Array(f),x=0;for(let b=0;b<s;b++){let _=3*b,S=Math.trunc(r[_+0]*a),E=Math.trunc(r[_+1]*a),M=Math.trunc(r[_+2]*a),A=(Math.imul(S,73856093)^Math.imul(E,19349663)^Math.imul(M,83492791))&d;for(;;){let P=m[A];if(P===0){let I=3*x;h[I+0]=S,h[I+1]=E,h[I+2]=M,m[A]=x+1,u[b]=x++;break}let C=3*(P-1);if(h[C+0]===S&&h[C+1]===E&&h[C+2]===M){u[b]=P-1;break}A=A+1&d}}let g=new Int32Array(x+1);for(let b=0;b<s;b++)g[u[b]+1]++;for(let b=0;b<x;b++)g[b+1]+=g[b];let p=new Int32Array(s),y=g.slice(0,x);for(let b=0;b<l;b++){let _=3*b;p[y[u[_+0]]++]=b,p[y[u[_+1]]++]=b,p[y[u[_+2]]++]=b}let v=new Float32Array(s*3);for(let b=0;b<l;b++){let _=3*b,S=c[_+0],E=c[_+1],M=c[_+2];for(let A=0;A<3;A++){let P=_+A,C=u[P],I=0,L=0,T=0;for(let O=g[C],U=g[C+1];O<U;O++){let V=3*p[O],k=c[V+0],z=c[V+1],H=c[V+2];S*k+E*z+M*H>o&&(I+=k,L+=z,T+=H)}let F=1/(Math.sqrt(I*I+L*L+T*T)||1);v[3*P+0]=I*F,v[3*P+1]=L*F,v[3*P+2]=T*F}}return t.setAttribute("normal",new qt(v,3,!1)),t}function lx(i){let e=new Map,t=new Map,n=i.clone();return cx(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function cx(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)cx(i.children[n],e.children[n],t)}var yu=class extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new cd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new _u(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new _u(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Md(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ni.extractUrlBase(e);o=Ni.resolveURL(c,this.path)}else o=Ni.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Pr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===px){try{o[Qe.KHR_BINARY_GLTF]=new Sd(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Id(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new ad;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new wd(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new Td;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new Ad;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function jw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Vt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},od=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Q(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],dn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Os(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ns(u),c.distance=h;break;case"spot":c=new ko(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},ad=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ye}extendParams(e,t,n){let s=[];e.color=new Q(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(s)}},ld=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},cd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(r,r)}return Promise.all(s)}},ud=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},hd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},fd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new Q(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},dd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},pd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Q().setRGB(r[0],r[1],r[2],dn),Promise.all(s)}},md=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},gd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Q().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(s)}},xd=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},bd=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?yn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},yd=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},_d=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},vd=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},_u=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Md=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==zn.TRIANGLES&&c.mode!==zn.TRIANGLE_STRIP&&c.mode!==zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new Xe,g=new B,p=new En,y=new B(1,1,1),v=new Ps(m.geometry,m.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(g,p,y));let b=null;for(let _ in l)if(_==="_COLOR_0"){let S=l[_];v.instanceColor=new Ii(S.array,S.itemSize,S.normalized)}else if(_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"){if(b===null){let E=v.geometry;b=new ze,b.name=E.name;for(let M in E.attributes)b.setAttribute(M,E.attributes[M]);for(let M in E.morphAttributes)b.morphAttributes[M]=E.morphAttributes[M];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(let M of E.groups)b.addGroup(M.start,M.count,M.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),v.geometry=b}let S=l[_];b.setAttribute(_,new Ii(S.array,S.itemSize,S.normalized))}At.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),d.push(v)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},px="glTF",Ra=12,ux={JSON:1313821514,BIN:5130562},Sd=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==px)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Ra,r=new DataView(e,Ra),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ux.JSON){let c=new Uint8Array(e,Ra+o,a);this.content=n.decode(c)}else if(l===ux.BIN){let c=Ra+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Rd[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Rd[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=no[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(d)},a,c,dn,f)})})}},Td=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ad=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},vu=class extends ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,y=1-g,v=p-f+h;for(let b=0;b!==a;b++){let _=o[x+b+a],S=o[x+b+l]*u,E=o[m+b+a],M=o[m+b]*u;r[b]=y*_+v*S+g*E+p*M}return r}},Qw=new En,Ed=class extends vu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Qw.fromArray(r).normalize().toArray(r),r}},zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},hx={9728:Ot,9729:Ut,9984:kl,9985:Dr,9986:ks,9987:Jn},fx={33071:fn,33648:_r,10497:Kn},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},e2={CUBICSPLINE:void 0,LINEAR:Ts,STEP:ws},sd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ci({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fi})),i.DefaultMaterial}function Js(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function n2(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function i2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function s2(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+rd(t.attributes):e=i.indices+":"+rd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+rd(i.targets[n]);return e}function rd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Cd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function r2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var o2=new Xe,Id=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Oo(this.options.manager):this.textureLoader=new zo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Js(r,a,s),_i(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ni.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=id[s.type],a=no[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new qt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=id[s.type],c=no[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(y);v||(x=new c(a,p*d,s.count*d/u),v=new Cs(x,d/u),t.cache.add(y,v)),g=new Qi(v,l,f%d/u,m)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),g=new qt(x,l,m);if(s.sparse!==void 0){let p=id.SCALAR,y=no[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,_=new y(o[1],v,s.sparse.count*p),S=new c(o[2],b,s.sparse.count*l);a!==null&&(g=new qt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,M=_.length;E<M;E++){let A=_[E];if(g.setX(A,S[E*l]),l>=2&&g.setY(A,S[E*l+1]),l>=3&&g.setZ(A,S[E*l+2]),l>=4&&g.setW(A,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=hx[f.magFilter]||Ut,u.minFilter=hx[f.minFilter]||Jn,u.wrapS=fx[f.wrapS]||Kn,u.wrapT=fx[f.wrapT]||Kn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ot&&u.minFilter!==Ut,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Yt(x);g.needsUpdate=!0,f(g)}),t.load(Ni.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),_i(h,o),h.userData.mimeType=o.mimeType||r2(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bn,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new kt,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ci}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let h=s[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Q(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=St);let u=r.alphaMode||sd.OPAQUE;if(u===sd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===sd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ne(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ye){let h=r.emissiveFactor;a.emissive=new Q().setRGB(h[0],h[1],h[2],dn)}return r.emissiveTexture!==void 0&&o!==Ye&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),_i(h,r),t.associations.set(h,{materials:e}),r.extensions&&Js(s,h,r),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return dx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=s2(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=dx(new ze,c,t),c.mode===zn.TRIANGLE_STRIP?f=f.then(d=>nd(d,Jo)):c.mode===zn.TRIANGLE_FAN&&(f=f.then(d=>nd(d,Ur))),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?t2(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=o[d],p,y=c[d];if(g.mode===zn.TRIANGLES||g.mode===zn.TRIANGLE_STRIP||g.mode===zn.TRIANGLE_FAN||g.mode===void 0){let v=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");v&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=v&&b?new So(x,y):new Fe(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===zn.LINES)p=new xn(x,y);else if(g.mode===zn.LINE_STRIP)p=new Rn(x,y);else if(g.mode===zn.LINE_LOOP)p=new To(x,y);else if(g.mode===zn.POINTS)p=new Cn(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&i2(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),_i(p,r),g.extensions&&Js(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Js(s,h[0],r),h[0];let f=new pt;r.extensions&&Js(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Dh.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new On(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wo(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],m=s.samplers[d.sampler],x=d.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let v=0,b=f.length;v<b;v++){let _=f[v],S=d[v],E=m[v],M=x[v],A=g[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let P=n._createAnimationTracks(_,S,E,M,A);if(P)for(let C=0;C<P.length;C++)p.push(P[C])}let y=new No(r,void 0,p);return _i(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,o2)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new B().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Er:c.length>1?u=new pt:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),_i(u,r),r.extensions&&Js(n,u,r),r.matrix!==void 0){let h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new pt;n.name&&(r.name=s.createUniqueName(n.name)),_i(r,n),n.extensions&&Js(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(lx(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof an||f instanceof Yt)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}xs[r.path]===xs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(xs[r.path]){case xs.weights:u=Li;break;case xs.rotation:u=Fi;break;case xs.translation:case xs.scale:u=ss;break;default:n.itemSize===1?u=Li:u=ss;break}let h=s.interpolation!==void 0?e2[s.interpolation]:Ts,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let x=new u(l[d]+"."+xs[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Cd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Fi?Ed:vu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function a2(i,e,t){let n=e.attributes,s=new Bt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){let u=Cd(no[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new B,l=new B;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Cd(no[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function dx(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Rd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),_i(i,e),a2(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?n2(i,e.targets,t):i})}var mx=new Map,gx=new Map,l2=50*Math.PI/180;function c2(i){i.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.geometry,s=t.material,r=s.name??"";t.userData.paint=!!s.userData?.paint||/^Paint/.test(r),n.getAttribute("normal")||(t.userData.paint?n.computeVertexNormals():t.geometry=ax(n,l2)),s.flatShading=!1;let o=/glass/i.test(r);s.metalness=t.userData.paint?.55:o?0:Math.min(s.metalness??0,.4),s.roughness=t.userData.paint?.28:o?.05:Math.max(s.roughness??.6,.45),o&&(s.transparent=!0,s.depthWrite=!1,s.opacity=Math.max(s.opacity,.9))})}function xx(i){let e=mx.get(i);if(!e){let t=d0();if(!t)return Promise.resolve(!1);e=t(i).then(n=>n&&new Promise(s=>{new yu().parse(n,"",r=>{c2(r.scene);let o=new Bt().setFromObject(r.scene),a=[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z];r.scene.position.set(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2);let l=new pt;l.add(r.scene),gx.set(i,{root:l,size:a}),p0(i),s({root:l,size:a})},()=>s(null))})).catch(()=>null),mx.set(i,e)}return e.then(t=>!!t)}function bx(i,e){let t=gx.get(i);if(!t)return null;let n=t.root.clone(!0),s=[];n.traverse(o=>{let a=o;if(!a.isMesh)return;let l=a.material.clone();a.userData.paint&&e.paint&&(l.color=new Q(e.paint)),a.material=l,s.push(l)});let r=new pt;return r.add(n),r.scale.set((e.mirror?-1:1)*(e.w/t.size[0]),e.h/t.size[1],e.d/t.size[2]),r.position.set(e.x,e.y,e.z),r.rotation.y=-e.rotation*Math.PI/180,r.userData.own=s,r}function Pd(i){for(let e of i.userData.own??[])e.dispose()}function yx(i,e){let t=new Vr(e),n=t.fromScene(new bu,.04).texture;t.dispose();let s=new Uo(16777215,9081766,.9),r=new Os(16777215,1.6);return r.position.set(-4,9,6),i.add(s,r),{env:n,dispose:()=>{n.dispose(),s.removeFromParent(),r.removeFromParent()}}}function _x(i,e){for(let t of i.userData.own??[])t.envMap=e,t.envMapIntensity=.9}var u2=.3,vx=2.6;function Mx(i,e=.32,t=.22,n=[]){let s=i.map(_=>_[0]),r=i.map(_=>_[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),u=c-l>=a-o,h=t*.7071,f=_=>{let S=[_,[_[0]+t,_[1]],[_[0]-t,_[1]],[_[0],_[1]+t],[_[0],_[1]-t]],E=[...S,[_[0]+h,_[1]+h],[_[0]-h,_[1]+h],[_[0]+h,_[1]-h],[_[0]-h,_[1]-h]];return S.every(M=>xt(M,i))&&!n.some(M=>E.some(A=>xt(A,M)))},d=(_,S)=>f(u?[_,S]:[S,_]),m=(_,S)=>{let E=Math.ceil(Math.hypot(S[0]-_[0],S[1]-_[1])/.05);for(let M=1;M<E;M++)if(!f([_[0]+(S[0]-_[0])*M/E,_[1]+(S[1]-_[1])*M/E]))return!1;return!0},[x,g,p,y]=u?[o,a,l,c]:[l,c,o,a],v=[],b=!0;for(let _=x+t;_<=g-t+1e-6;_+=e){let S=null,E=null,M=.05;for(let I=p;I<=y+1e-6;I+=M)if(d(_,I)&&(E??=I),(!d(_,I)||I+M>y+1e-6)&&E!==null){let L=d(_,I)?I:I-M;(!S||L-E>S[1]-S[0])&&(S=[E,L]),E=null}if(!S||S[1]-S[0]<.2)continue;let A=I=>{let[L,T]=I?S:[S[1],S[0]];return[u?[_,L]:[L,_],u?[_,T]:[T,_]]},P=A(b),C=v[v.length-1];if(C&&n.length&&!m(C,P[0])){let I=A(!b);if(!m(C,I[0]))continue;P=I,b=!b}v.push(P[0],P[1]),b=!b}return v}function Fd(i,e=.7,t=12){return Array.from({length:t},(n,s)=>{let r=s/t*Math.PI*2;return[i[0]+Math.cos(r)*e,i[1]+Math.sin(r)*e]})}var Ld=i=>Math.atan2(Math.sin(i),Math.cos(i));function Sx(i,e,t){let n=null;if(e.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Ld(e.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),vx*t),!0)}let a=Math.atan2(s,r),l=Ld(a-i.heading);if(i.heading=Ld(i.heading+Math.sign(l)*Math.min(Math.abs(l),vx*t)),Math.abs(l)<.35){let c=Math.min(o,u2*t);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var io=null,wx=new Map;function h2(i,e=180,t,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${e}|${n}`,r=wx.get(s);if(r)return r;t&&Ic(t),io??=new Gr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),io.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),io.setSize(e,e,!1),io.setClearColor(0,0);let o=new ut,a=new Qt,l=Zt(i.type);if(l?.light)Wc(o,l,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Dd(o,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let y={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Hc(o,a,new ut,y)}let c=new Ci,u=new Fe(o.geometry(),new Ye({vertexColors:!0,color:new Q(n,n,n)})),h=new xn(a.geometry(),new kt({vertexColors:!0,color:new Q(n*1.8,n*1.8,n*1.8)}));c.add(u,h);let f=new Bt().setFromObject(u),d=f.getCenter(new B),m=new On(-1,1,1,-1,.01,100);m.position.copy(d).add(new B(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let y of[f.min.x,f.max.x])for(let v of[f.min.y,f.max.y])for(let b of[f.min.z,f.max.z]){let _=new B(y,v,b).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(_.x),Math.abs(_.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),io.render(c,m);let p=io.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),h.geometry.dispose(),h.material.dispose(),wx.set(s,p),p}var Ax={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},f2=2.4,d2=1.4,p2=.22,Ex=140,Od=32,m2=500,Rx=160,it=2767456,g2=1911110,x2=1,Cx=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Nd=450,Ix=125,b2=.08,Ud={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},y2=new Q(1714765);function _2(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Bd=class{host;options;renderer;scene=new Ci;camera=new Xt(38,1,.1,400);controls;labels;root=new pt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;meshes=[];meshLight=null;meshAsked=new Set;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",e.append(this.labels),this.patternTexture=v2(),this.blindTexture=S2(),this.haloTexture=T2(),this.ground=new Fe(new Nn(1,1),new Ye({transparent:!0,blending:gt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new hu(this.scene),this.energyLayer=new du(this.scene,this.liftOf),this.soundLayer=new pu(this.scene,this.liftOf),this.screenLayer=new mu(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new xu(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,s])=>`${n}=${s}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setMeshSource(e){f0(e)}setPacks(e){Ic(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(h=>h.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let s=n.start_view;if(s){let u=t.floor.elevation+t.ty,[h,f]=Dc(n.points),d=s.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new B(d.x,d.y+u,d.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=Dc(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new B(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new B(r,t.floor.elevation+t.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".nf-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("nf-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--nf-glow",c):r.style.removeProperty("--nf-glow"))}for(let[n,s]of this.devicePins)t.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="nf-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)t.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=$g(e),n=t?1:0;n===ou.value&&(!t||ru.value.equals(new B(...t)))||(ou.value=n,t&&ru.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=Yg(e);let t=au(e),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=t,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.invalidate()}liftOf=e=>{if(!e)return{y:0,dy:0,visible:!0};let t=this.floorMap.get(e);return t?{y:t.floor.elevation+t.y,dy:t.y,visible:t.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(e,t){this.energyLayer.setArcs(e),this.energyLayer.setSparks(t),this.invalidate()}setLiveSound(e,t){this.soundLayer.set(e,t),this.invalidate()}setLiveTrail(e){this.trailLayer.set(e),this.invalidate()}setLiveScreens(e){let t=[];for(let n of e){let s=this.building?.floors.find(a=>a.id===n.floorId),r=s?.furniture.find(a=>a.id===n.furnitureId),o=r&&s?Lf(r,s):null;!r||!o||t.push({...n,x:r.x,z:r.z,rotation:r.rotation,rect:o})}this.screenLayer.set(t),this.invalidate()}setLiveAnchors(e,t){this.liveAnchors=e,this.liveAnchorCb=t,this.invalidate()}placeLhAnchors(){let e=this.liveAnchorCb;if(!e||!this.liveAnchors.length)return;let t=new B;this.liveAnchors.forEach((n,s)=>{let r=this.liftOf(n.floorId);t.set(n.x,r.y+n.y,n.z).project(this.camera);let o=r.visible&&t.z<1&&Math.abs(t.x)<1.15&&Math.abs(t.y)<1.15;e(s,(t.x+1)/2*this.size.w,(1-t.y)/2*this.size.h,o)})}setSky(e){this.skyView=e,this.weatherLayer.set(e?{...e,low:e.low||this.lowQuality}:null);for(let t of this.floors)this.buildSun(t);this.invalidate()}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let s=document.createElement("small");s.textContent=n,e.append(s),e.classList.add("nf-pin-info")}else e.classList.remove("nf-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=e;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,e.get(s.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),s=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==s&&(n.textContent=s,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let s=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(t,s)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/Rx),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*t,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(e){let t=new ut;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);eg(t,n,Un(e.floor,n),s?.l??0,s?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:e.theta,phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.meshLight?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&_2();this.lowQuality=t,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||t}),this.highQuality=e==="high";let n=new Gr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Mt,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Aa(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,s)=>this.swipeStart(e,t,n,s),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.meshes)e.group.removeFromParent(),Pd(e.group);this.meshes=[];for(let e of this.floors){e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="nf-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="nf-dev-icon";let s=document.createElement("span");s.className="nf-dev-text";let r=document.createElement("span");r.className="nf-dev-watt";let o=document.createElement("span");o.className="nf-dev-name",t.append(n,s,r,o);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},m2)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let h=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=$f(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),s=w2(e.floor,e.geo.openRooms);if(e.lightZones=s.some((a,l)=>a!==l)?s:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b])}e.lightSurface=n;let r=new ze;r.setAttribute("position",new He(n.pos,3)),r.setAttribute("color",new He(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new He(n.fold,1));let o=new Rs(new Uint32Array(n.pos.length/3),1);o.setUsage(Ph),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=r,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let s of this.devices){let r=this.glowOf(s);if(s.floorId!==e.floor.id||!r)continue;let o=Zf(e.floor,s.x,s.z),a=Jf(e.lightZones,o),[l,,c]=s.size??(s.lamp?Ud[s.lamp]:[.3,.3,.3]),u=s.base??0,h={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<x2?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=s.lamp?h[s.lamp]:[s.y,"omni"],m=s.lightY??f,x=r.color;if(s.lamp==="strip"){let g=(s.rotation??0)*Lt,p=!!s.upright||Math.abs(s.roll??0)>45;for(let y of[-1/3,0,1/3])s.upright?n.push({x:s.x,y:u+l*(.5+y),z:s.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:s.x+Math.cos(g)*l*y,y:m,z:s.z+Math.sin(g)*l*y,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else n.push({x:s.x,y:m,z:s.z,color:x,level:r.level,kind:d,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),s=t.doors.map(h=>{let f=e.geo.openings.find(m=>m.opening.id===h.id);if(f&&Hs(f.opening,f.exterior)==="passage")return 1;let d=e.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+s.map(h=>h.toFixed(1)).join(",");if(r===e.glowSig)return;e.glowSig=r;let o=e.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Kf(t,n,.42,s);if(this.roomTint){let h=e.floor.rooms.length;for(let f=0;f<t.room.length;f++)if(t.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:yi(new Ye({vertexColors:!0}),this.themeUniform),pattern:M2(this.patternTexture),wall:yi(ms(new Ye({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:ms(new Ye({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new Ye({vertexColors:!0,blending:Ho,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:St,polygonOffset:!0,polygonOffsetFactor:-1}),lines:yi(ms(new kt({vertexColors:!0,transparent:!0,blending:au(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:ms(new Ye({vertexColors:!0,transparent:!0,blending:gt,depthWrite:!1,side:St,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:yi(ms(new Ye({vertexColors:!0,side:St}),e),this.themeUniform),glass:ms(new Ye({vertexColors:!0,transparent:!0,blending:gt,depthWrite:!1,side:St}),e),blinds:yi(ms(new Ye({map:this.blindTexture,vertexColors:!0,side:St}),e),this.themeUniform),lamps:yi(new Ye({vertexColors:!0}),this.themeUniform),halos:new bn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:gt,depthWrite:!1}),cones:new Ye({vertexColors:!0,transparent:!0,blending:gt,depthWrite:!1,side:St}),screens:new Ye({vertexColors:!0,transparent:!0,blending:gt,depthWrite:!1,side:St})}}rebuild(){let e=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),t=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=Yc(n)?.id===r.id?o.filter(z=>z.face===ya).map(z=>({field:z,face:$c(n,z)})):[],l=o.filter(z=>z.face.startsWith(`wall:${r.id}:`));if(l.length){let z=new Map(qc(n,r.id).map(H=>[H.key,H]));for(let H of l){let te=z.get(H.face);te&&a.push({field:H,face:te})}}let u=(n.settings.roof.sections??[]).some(z=>pf(z,r.elevation+r.height))?(z,H)=>{let te=mf(n,z,H);return te===null?null:te-r.elevation}:void 0,h=Og(su(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Ug(n.floors,r),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new pt,x=new Fe(h.floor,d.floor),g=new Fe(h.shadow,d.shadow);g.renderOrder=1;let p=new Fe(h.floor,d.pattern);p.renderOrder=2;let y=new Fe(new ze,d.glow);y.renderOrder=3,y.visible=!1;let v=new Fe(new ze,d.frames),b=new Fe(new ze,d.blinds),_=new Fe(new ze,d.glass);_.renderOrder=4;let S=new Fe(new ze,d.lamps);S.visible=!1;let E=new Fe(new ze,d.cones);E.visible=!1,E.renderOrder=3;let M=new Cn(new ze,d.halos);M.visible=!1,M.renderOrder=7;let A=new Fe(new ze,d.cones);A.visible=!1,A.renderOrder=7;let P=new Fe(new ze,d.lamps);P.visible=!1;let C=new Fe(new ze,d.screens);C.visible=!1,C.renderOrder=5;for(let z of[v,b,_])z.frustumCulled=!1;let I=new Fe(h.walls,d.glassWall),L=new Fe(h.walls,d.wall);I.renderOrder=6,m.add(x,g,p,y,L,new xn(h.lines,d.lines),v,b,_,S,E,M,A,P,C,I),this.root.add(m);let T=document.createElement("button");T.className="nf-pin nf-pin-floor",T.dataset.floor=r.id;let F=document.createElement("b");F.textContent=r.name||"\u2013";let O=document.createElement("span");O.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",T.append(F,O),T.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(T);let U=e.get(r.id),V=[],k=null;for(let z of r.rooms){let H=document.createElement("button");H.className="nf-pin",H.dataset.room=z.id,H.dataset.floor=r.id,this.fillRoomPin(H,z.name,this.roomInfo.get(z.id)),H.addEventListener("click",()=>this.options.onRoomTap?.(r.id,z.id)),this.labels.append(H);let[te,Z]=Dc(z.points);V.push({pin:H,room:z,cx:te,cz:Z});for(let[ce,ue]of z.points)k??={x0:ce,x1:ce,z0:ue,z1:ue},k.x0=Math.min(k.x0,ce),k.x1=Math.max(k.x1,ce),k.z0=Math.min(k.z0,ue),k.z1=Math.max(k.z1,ue)}this.floors.push({floor:r,rank:s.indexOf(r),group:m,geo:h,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:v,glassMesh:_,blindsMesh:b,lampMesh:S,sunMesh:E,sunSig:"",haloMesh:M,coneMesh:A,fridgeMesh:P,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:L,screenMesh:C,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:k,roomPins:V,labelSize:null,materials:d,mask:f,openings:new Map,y:U?.y??0,o:U?.o??1,ty:0,to:1,appliedO:-1,label:T})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=t.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??cu);this.buildOpenings(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost(),this.placeMeshes()}placeMeshes(){for(let e of this.meshes)e.group.removeFromParent(),Pd(e.group);this.meshes=[];for(let e of this.floors)for(let t of su(e.floor,this.parked).furniture){let n=Zt(t.type);if(!n?.mesh)continue;let s=n.mesh;if(!Pc(t.type)){this.meshAsked.has(s)||(this.meshAsked.add(s),xx(s).then(a=>{a&&!this.disposed&&this.rebuild()}));continue}let r=n.colors?.length?(n.colors.find(a=>a.id===t.variant)??n.colors[0]).hex:null,o=bx(s,{x:t.x,z:t.z,y:Un(e.floor,t),rotation:t.rotation,mirror:t.mirror,w:t.w,d:t.d,h:t.h,paint:r});o&&(this.meshLight||(this.meshLight=yx(this.root,this.renderer)),_x(o,this.meshLight.env),e.group.add(o),this.meshes.push({group:o,furnitureId:t.id}))}this.invalidate()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?Xf(this.building,this.roofWindows):[];if(!e.length)return;let t=new pt,n=yi(new Ye({vertexColors:!0,transparent:!0,side:St}),this.themeUniform),s=yi(new kt({vertexColors:!0,transparent:!0,blending:au(this.theme),depthWrite:!1}),this.themeUniform,!0),r=yi(new Ye({vertexColors:!0,transparent:!0,side:St,depthWrite:!1}),this.themeUniform),o=e.map(a=>{let l=new pt;return l.add(new Fe(a.solid.geometry(),n),new xn(a.lines.geometry(),s)),a.glass.count&&l.add(new Fe(a.glass.geometry(),r)),l.renderOrder=8,t.add(l),{group:l,floorId:a.floor.id,rideId:xf(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});t.renderOrder=8,this.scene.add(t),this.roof={group:t,parts:o,solid:n,lines:s,glass:r},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/Ex),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?h*d2:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;t?n.rank>t.rank?(s=5+n.rank,r=0):n.rank<t.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:p2)):s=this.explode?n.rank*f2:0,n.ty=s,n.to=r,e&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let s of[t.floor,t.wall,t.frames,t.blinds,t.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o}stepFloors(e){let t=!1,n=1-Math.exp(-e/Ex);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,t=!0,this.applyFloor(s)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/Rx);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??cu,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?u[f]=d:(u[f]=m+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(s.openings.set(o,u),r=!0),t||=h}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new Q(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let s=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*b2+s)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=t)return 0;let f=h-t,d=f>Nd?.5+.5*Math.sin(f/140):f/Nd;return Math.round(d*10)/10},s=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=s.map(u=>this.glowOf(u)),a=s.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=r,e.lampColorSig="";let u=new ut,h=[],f=[],d=new Map,m=e.floor.height;for(let x of s){let g=x.lamp==="strip"?(x.base??m)>Math.min(e.floor.cut_height,m):x.lamp?Cx.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,y=x.pack?Zt(x.pack):void 0,[v,b,_]=x.size??[.3,.3,.3];x.model?ng(u,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):y?Wc(u,y,{x:x.x,z:x.z,rotation:x.rotation??0,w:v,d:b,h:_,mirror:x.mirror},x.base??0,65280):Dd(u,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:p,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:u.count})}e.lampTris=h,e.lampFurnTris=f,e.lampRanges=d,e.lampShade=o0(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((u,h)=>{let f=e.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],m=d?.55+.45*d.level:0,x=d?new Q(...d.color.map(y=>Math.min(1,y*m))):new Q(g2),g=n(u.id);g>0&&x.lerp(new Q(1,1,1),.7*g);let p=new Q(x.getHex());a0(c,e.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Lt,s=this.weatherLayer?.cloud??0,r=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===e.sunSig)return;e.sunSig=r;let o=new ut;if(t&&t.elevation>2&&s<.97){let a=Math.min(1,t.elevation/12)*(1-.8*s),l=t.elevation*Lt,c=t.azimuth*Lt,u=[Math.sin(n+c),-Math.cos(n+c)],h=1/Math.tan(l);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let d=[-f.toRoom[0],-f.toRoom[1]],m=d[0]*u[0]+d[1]*u[1];if(m<.05)continue;let x=e.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let p=(M,A)=>{let P=Math.min(7,A*h);return[f.start[0]+f.axis[0]*M+f.toRoom[0]*f.faceRoom-u[0]*P,.02,f.start[1]+f.axis[1]*M+f.toRoom[1]*f.faceRoom-u[1]*P]},y=.14*a*Math.min(1,m*1.5),v=new Q(1*y,.82*y,.55*y),b=v.clone().multiplyScalar(.45),_=e.floor.rooms.find(M=>M.id===f.opening.room_id);if(!_||_.points.length<3)continue;let S=Math.max(1,Math.ceil(Math.min(7,g*h)/.25)),E=Math.max(1,Math.ceil(f.width/.3));for(let M=0;M<S;M++){let A=f.sill+(g-f.sill)*M/S,P=f.sill+(g-f.sill)*(M+1)/S,C=M/S,I=(M+1)/S,L=v.clone().lerp(b,C),T=v.clone().lerp(b,I);for(let F=0;F<E;F++){let O=f.width*F/E,U=f.width*(F+1)/E,V=p((O+U)/2,(A+P)/2);if(!xt([V[0],V[2]],_.points))continue;let k=p(O,A),z=p(U,A),H=p(U,P),te=p(O,P);o.tri(k,z,H,L,L,T),o.tri(k,H,te,L,T,T)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=o.geometry(),e.sunMesh.visible=o.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],s=[],r=new ut,o=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*Lt,y=[-Math.sin(p),Math.cos(p)],v=l.model==="camera_ceiling",b=l.reach??(v?3:4.5),_=(l.fov??(v?360:90))*Lt/2,S=l.motion?new Q(.9,.12,.16):new Q(.04,.22,.28),E=new Q(0,0,0),M=Math.max(4,Math.round(_/.15)),A=.015,P=e.geo.walls2d,C=T=>{let F=y[0]*Math.cos(T)-y[1]*Math.sin(T),O=y[1]*Math.cos(T)+y[0]*Math.sin(T),U=b;for(let V of P){let k=V.b[0]-V.a[0],z=V.b[1]-V.a[1],H=F*z-O*k;if(Math.abs(H)<1e-9)continue;let te=((V.a[0]-l.x)*z-(V.a[1]-l.z)*k)/H,Z=((V.a[0]-l.x)*O-(V.a[1]-l.z)*F)/H;te>.45&&te<U&&Z>=0&&Z<=1&&(U=te)}return U},I=T=>{let F=C(T);return[l.x+(y[0]*Math.cos(T)-y[1]*Math.sin(T))*F,A,l.z+(y[1]*Math.cos(T)+y[0]*Math.sin(T))*F]},L=r.count;for(let T=0;T<M;T++)r.tri([l.x,A,l.z],I(-_+2*_*(T+1)/M),I(-_+2*_*T/M),S,E,E);o.push({id:l.id,start:L,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||Cx.has(l.lamp)&&this.wallMode==="cut")continue;let[u,h,f]=l.size??Ud[l.lamp],d=l.base??0,m=(l.rotation??0)*Lt,x={ceiling:t-.07,downlight:t-.03,spot:t-f,panel:t-.03,pendant:Math.max(.4,t-f)+.08,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[l.lamp],g=(p,y,v=1)=>{n.push(p,x,y),s.push(...c.color.map(b=>b*c.level*.7*v))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),s.push(...c.color.map(y=>y*c.level*.7*.6))):g(l.x+Math.cos(m)*u*p,l.z+Math.sin(m)*u*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(h/2+.05),l.z+Math.cos(m)*(h/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new Q(...c.color.map(S=>S*.09*c.level)),y=new Q(0,0,0),v=Math.max(.03,u/2),b=.45+.35*c.level,_=16;for(let S=0;S<_;S++){let E=S/_*Math.PI*2,M=(S+1)/_*Math.PI*2,A=[l.x+Math.cos(E)*v,x,l.z+Math.sin(E)*v],P=[l.x+Math.cos(M)*v,x,l.z+Math.sin(M)*v],C=[l.x+Math.cos(E)*b,.02,l.z+Math.sin(E)*b],I=[l.x+Math.cos(M)*b,.02,l.z+Math.sin(M)*b];r.tri(A,C,I,p,y,y),r.tri(A,I,P,p,y,p)}}}let a=new ze;a.setAttribute("position",new He(n,3)),a.setAttribute("color",new He(s,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=r.geometry(),e.coneMesh.visible=r.count>0,e.coneTris=o}buildScreens(e){let t=su(e.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=t.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return;e.screenSig=n;let s=new ut;for(let r of t){let o=this.screens.get(r.id),a=r.rotation*Lt,l=Math.cos(a),c=Math.sin(a),u=(v,b,_)=>[r.x+v*l-_*c,b,r.z+v*c+_*l];if(o.faces){let v=Math.max(.05,r.w)*(r.mirror?-1:1),b=Math.max(.05,r.d),_=Math.max(.005,r.h),S=Un(e.floor,r);for(let E of o.faces){let M=E.part==="right"?.03:-Math.abs(v)/2+.03,A=E.part==="left"?-.03:Math.abs(v)/2-.03,P=S+(E.part==="bottom"?_*.45:_)+.006,C=new Q(...E.color.map(V=>Math.min(1,V*(.35+.65*E.level)))),I=new Q(0,0,0),L=(V,k,z=P)=>u(V*Math.sign(v),z,k),T=[L(M,-b/2+.03),L(A,-b/2+.03),L(A,b/2-.03),L(M,b/2-.03)];s.tri(T[0],T[2],T[1],C),s.tri(T[0],T[3],T[2],C);let F=.12+.1*E.level,O=C.clone().multiplyScalar(.5),U=[L(M-F,-b/2-F,P+.004),L(A+F,-b/2-F,P+.004),L(A+F,b/2+F,P+.004),L(M-F,b/2+F,P+.004)];for(let V=0;V<4;V++){let k=(V+1)%4;s.tri(T[V],U[k],U[V],O,I,I),s.tri(T[V],T[k],U[k],O,O,I)}}continue}let h=Lf(r,e.floor);if(!h)continue;let f=new Q(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),d=new Q(0,0,0),m=h.z+.004;s.tri(u(h.x0,h.y0,m),u(h.x1,h.y0,m),u(h.x1,h.y1,m),f),s.tri(u(h.x0,h.y0,m),u(h.x1,h.y1,m),u(h.x0,h.y1,m),f);let x=.18+.12*o.level,g=f.clone().multiplyScalar(.5),p=[u(h.x0,h.y0,m),u(h.x1,h.y0,m),u(h.x1,h.y1,m),u(h.x0,h.y1,m)],y=[u(h.x0-x,h.y0-x,m+.01),u(h.x1+x,h.y0-x,m+.01),u(h.x1+x,h.y1+x,m+.01),u(h.x0-x,h.y1+x,m+.01)];for(let v=0;v<4;v++){let b=(v+1)%4;s.tri(p[v],y[v],y[b],g,d,d),s.tri(p[v],y[b],p[b],g,d,g)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=s.geometry(),e.screenMesh.visible=s.count>0}buildOpenings(e){let t=sx(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,s]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let s=new Q(n.color),r=this.roomTint?.get(n.roomId);r&&s.lerp(new Q(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&s.lerp(y2,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)t.setXYZ(o,s.r,s.g,s.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".nf-pin"))e.classList.toggle("nf-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new Bt;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[m,x]of d.points)t.expandByPoint(new B(m,f,x)),t.expandByPoint(new B(m,f+h.floor.height,x))}t.isEmpty()&&t.set(new B(-4,0,-4),new B(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:t.min.x-8,x1:t.max.x+8,z0:t.min.z-8,z1:t.max.z+8,y0:t.min.y,y1:t.max.y+6});let n=t.getCenter(new B),s=t.getSize(new B),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=t.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new Bt,t=1/0;for(let o of this.floors){t=Math.min(t,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new B(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new B(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=A2();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=e.getCenter(new B),s=e.getSize(new B),r=Od*Math.ceil((Math.max(s.x,s.z)+16)/Od);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,t-ps-.02,n.z)}distanceFor(e){let t=this.camera.fov*Lt,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),s=new Vo;return s.setFromCamera(new Ne(e/n.width*2-1,-(t/n.height)*2+1),this.camera),s}pick(e,t){let n=this.rayAt(e,t),s=this.activeFloors();if(this.meshes.length){let a=n.intersectObjects(this.meshes.map(l=>l.group),!0)[0];if(a){let l=a.object;for(;l&&!this.meshes.some(u=>u.group===l);)l=l.parent;let c=l?this.pickFurniture.get(this.meshes.find(u=>u.group===l).furnitureId):void 0;if(c)return{entity:c}}}let r=s.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=s.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??st;if(f!==st&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,y=Math.hypot(p.x,p.z)||1,v=[a.point.x-p.x/y*.3,a.point.z-p.z/y*.3],b=c.floor.rooms.find(_=>_.points.length>=3&&xt(v,_.points))?.id??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:c.floor.id,roomId:b}}else if(!g&&b)return{floorId:c.floor.id,roomId:b}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Nd),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),s=this.activeFloors(),r=s.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=s.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let s=this.rayAt(t,n),r=e.floor.elevation+e.y,o=s.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-s.ray.origin.y)/o.y;return a<=0?null:[s.ray.origin.x+o.x*a,s.ray.origin.z+o.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(e,t),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&s.has(u))&&this.grabItem(c,l,e,t)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,e,t):this.grabItem(a,o,e,t)}let r=this.furnitureAt(e,t);if(!r){let o=this.pick(e,t);return o&&"entity"in o?this.grabDevice(o.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,e,t)}grabItem(e,t,n,s){let r=e.floor.furniture.find(a=>a.id===t),o=this.floorPoint(e,n,s);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:e.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(e,t,n){let s=this.devices.find(a=>a.id===e),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,t,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),u=l&&this.floorPoint(l,e,t);if(!l||!c||!u)return;let h=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/h)*h,n.z=c.z=Math.round((u[1]+n.offset[1])/h)*h,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=this.floorPoint(r,e,t);if(!o)return;let a=this.building?.settings.grid??.05;s.x=Math.round((o[0]+s.offset[0])/a)*a,s.z=Math.round((o[1]+s.offset[1])/a)*a,s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(p=>p.floor.furniture.some(y=>y.id===e)):void 0,n=t?.floor.furniture.find(p=>p.id===e);if(!t||!n)return;let s=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=Zt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Un(t.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Un(t.floor,n),u=n.rotation*Lt,h=Math.cos(u),f=Math.sin(u),d=(p,y,v)=>[s+p*h-y*f,v,r+p*f+y*h],m=new Qt,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new Q(.25,.9,1);for(let p=0;p<4;p++){let[y,v]=x[p],[b,_]=x[(p+1)%4];m.seg(d(y,v,c+.01),d(b,_,c+.01),g),m.seg(d(y,v,c+l),d(b,_,c+l),g),m.seg(d(y,v,c+.01),d(y,v,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new Q(1,1,1)),this.ghost=new xn(m.geometry(),new kt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,s){if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(e,t);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:r.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(p=>p.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(e*s),o=Math.round(t*s),a=new on(r,o);a.texture.colorSpace=Mt;let l=new On(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let L of this.floors)L.group.visible=L===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let y=p.floor.rooms.flatMap(L=>L.points),v=p.floor.elevation,b=new Bt(new B(Math.min(...y.map(L=>L[0]))-.3,v,Math.min(...y.map(L=>L[1]))-.3),new B(Math.max(...y.map(L=>L[0]))+.3,v+Math.min(p.floor.cut_height,p.floor.height),Math.max(...y.map(L=>L[1]))+.3)),_=b.getCenter(new B),S=-.6,E=.8,M=new B(Math.sin(E)*Math.sin(S),Math.cos(E),Math.sin(E)*Math.cos(S));l.position.copy(_).addScaledVector(M,100),l.lookAt(_),l.updateMatrixWorld();let A=.5,P=.5;for(let L of[b.min.x,b.max.x])for(let T of[b.min.y,b.max.y])for(let F of[b.min.z,b.max.z]){let O=new B(L,T,F).applyMatrix4(l.matrixWorldInverse);A=Math.max(A,Math.abs(O.x)),P=Math.max(P,Math.abs(O.y))}let C=r/o;A/P>C?P=A/C:A=P*C,l.left=-A*1.05,l.right=A*1.05,l.top=P*1.05,l.bottom=-P*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let I=x.createImageData(r,o);for(let L=0;L<o;L++)I.data.set(d.subarray((o-1-L)*r*4,(o-L)*r*4),L*r*4);x.putImageData(I,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?Mx(n.room,void 0,void 0,n.obstacles):Fd(n.rest),l=a.length?a:Fd(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-s.motion.pos[0],u[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=h)}),s.motion.path=l,s.motion.next=c,n.room&&!xt(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(Ax[n.mode])}for(let[n,s]of this.robots)t.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let s=new ut,r=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);It(s,f,l,c,u,h,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new Ye({vertexColors:!0});let o=new ut;It(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let t=new pt,n=new Ye({color:Ax[e.mode]});return t.add(new Fe(this.robotGeo,this.robotMat),new Fe(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),t>0?n=Sx(s.motion,s.info,t)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}liveFlyInto(e,t,n=1100){let s=this.floorMap.get(e),r=s?s.floor.elevation+s.ty:0;this.controls.flyTo({target:new B(t.target[0],r+t.target[1],t.target[2]),radius:t.radius,theta:t.theta,phi:Math.max(.08,t.phi)},n)}focus(e,t,n,s,r){let o=this.floorMap.get(e);if(o){if(this.controls.flyTo({target:new B(t,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let s=this.controls.update(e),r=this.stepFloors(t),o=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let p=this.deviceFloor.get(x);p&&m.add(p),g<=e&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(t),c=this.stepRobots(e),h=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(e)).some(Boolean),f=s||r||o||a||l,d=[];if(s&&d.push("camera"),r&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.effectTick&&d.push("effect"),c&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*Ix:Ix;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,s=e.z-t.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/r+u[1]*s/r>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new B,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||p<l.x)&&(l={x:p,y}),(!c||p>c.x)&&(c={x:p,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),r.push({fv:o,left:Math.max(f,Math.min(e-h-8,d)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(e,t);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new B,s=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||s||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||s&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("nf-dev-full",u==="full"),o.classList.toggle("nf-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let s=e-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:t,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function v2(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(o,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let s=(o,a,l)=>{t.save(),t.beginPath(),t.rect(o*256,a*256,256,256),t.clip(),l(o*256,a*256),t.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new ln(e);return r.flipY=!1,r.wrapS=fn,r.wrapT=fn,r.anisotropy=4,r.colorSpace=Mt,r}function M2(i){let e=new Ye({map:i,transparent:!0,blending:gt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNfTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"nf-pattern",e}function S2(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new ln(i);return t.wrapS=Kn,t.wrapT=Kn,t.colorSpace=Mt,t}function w2(i,e){let t=i.rooms.map((s,r)=>r),n=s=>t[s]===s?s:t[s]=n(t[s]);for(let[s,r]of e){let o=i.rooms.findIndex(u=>u.id===s),a=i.rooms.findIndex(u=>u.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((s,r)=>n(r))}function T2(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let s=new ln(e);return s.colorSpace=Mt,s}function A2(){let e=Od,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=e;o++){let a=Math.round(o/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new ln(t);return r.anisotropy=4,r.colorSpace=Mt,r}function nP(i,e){return new Bd(i,e)}function Dd(i,e,t,n){let[s,r,o]=e.size??Ud[e.lamp],a=e.base??0,l=(e.rotation??0)*Lt,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[e.x+x*c-g*u,e.z+x*u+g*c],f=(x,g,p,y,v,b=14)=>{let _=[];for(let S=0;S<b;S++){let E=S/b*Math.PI*2;_.push([e.x+Math.cos(E)*x,e.z+Math.sin(E)*x])}It(i,_,g,p,y,v,{aoFrom:0,bottom:!0})},d=(x,g,p,y,v,b,_,S=_)=>It(i,[h(x,p),h(g,p),h(g,y),h(x,y)],v,b,_,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(s,r)/2);switch(e.lamp){case"ceiling":f(m*.25,t-.04,t,it,it,8),f(m,t-Math.max(.04,o)-.035,t-.04,n,n);break;case"pendant":{let x=Math.max(.4,t-o);f(.06,t-.02,t,it,it,8);let g=e.variant==="globe"?x+2*m:e.variant==="drum"?x+.24:x+.2;if(f(.008,g,t-.02,it,it,5),e.variant==="globe")for(let y=0;y<7;y++){let v=Math.PI*(y/7),b=Math.PI*((y+1)/7);f(m*Math.max(.2,Math.sin((v+b)/2)),x+m-m*Math.cos(v),x+m-m*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)f(m*(.25+.75*(4-y)/4),x+.06*y,x+.06*(y+1),n,n,16);else e.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,t-.012,t,it,it,12),f(m*.7,t-.02,t-.012,n,n,12);break;case"spot":f(m*.6,t-.02,t,it,it,10),f(m,t-Math.max(.06,o),t-.02,it,it,12),f(m*.8,t-Math.max(.06,o)-.008,t-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,t-Math.max(.015,o),t,it,it),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,t-Math.max(.015,o)-.004,t-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,it,it),f(.014,a+.03,a+o-.12,it,it,6),f(m,a+o-.14,a+o-.02,it,it),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,it,it,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,it,it,10);break;case"garden":f(.012,a,a+o-.08,it,it,5),f(m,a+o-.08,a+o-.01,it,it,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,it,it),f(.014,a+.03,a+o-.28,it,it,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,it,it),f(.012,a+.03,a+o-.16,it,it,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=e.base??Lc;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,it),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=e.base!=null?e.base+x:t-.04;if(!e.roll&&!e.upright){d(-s/2,s/2,-r/2,r/2,g-x,g,n);break}let p=(e.roll??0)*Lt,y=Math.cos(p),v=Math.sin(p),b=e.upright?a+s/2:g-x/2,_=(P,C,I)=>{let L=P,T=C*y-I*v,F=C*v+I*y;return e.upright&&([L,T]=[-T,L]),[e.x+L*c-F*u,b+T,e.z+L*u+F*c]},S=[_(-s/2,-x/2,-r/2),_(s/2,-x/2,-r/2),_(s/2,-x/2,r/2),_(-s/2,-x/2,r/2),_(-s/2,x/2,-r/2),_(s/2,x/2,-r/2),_(s/2,x/2,r/2),_(-s/2,x/2,r/2)],E=new Q(n),M=[e.x,b,e.z],A=(P,C,I,L)=>{let[T,F,O]=[S[P],S[C],S[I]],U=[(F[1]-T[1])*(O[2]-T[2])-(F[2]-T[2])*(O[1]-T[1]),(F[2]-T[2])*(O[0]-T[0])-(F[0]-T[0])*(O[2]-T[2]),(F[0]-T[0])*(O[1]-T[1])-(F[1]-T[1])*(O[0]-T[0])],V=[T[0]-M[0],T[1]-M[1],T[2]-M[2]],k=U[0]*V[0]+U[1]*V[1]+U[2]*V[2]<0,[z,H,te,Z]=k?[S[L],S[I],S[C],S[P]]:[S[P],S[C],S[I],S[L]];i.tri(z,H,te,E,E,E),i.tri(z,te,Z,E,E,E)};A(0,1,2,3),A(4,5,6,7),A(0,1,5,4),A(1,2,6,5),A(2,3,7,6),A(3,0,4,7);break}}}export{Bd as NextFloorViewer,nP as createViewer,h2 as furniturePreview,_2 as isLowEnd,Dd as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
