/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var cp=0,ju=1,up=2;var No=1,hp=2,Rr=3,hi=0,Qt=1,St=2,fi=0,di=1,mt=2,Qu=3,Oo=4,fp=5;var Ps=100,dp=101,pp=102,mp=103,gp=104,xp=200,bp=201,_p=202,yp=203,eh=204,th=205,vp=206,Mp=207,Sp=208,wp=209,Tp=210,Ap=211,Ep=212,Rp=213,Cp=214,tl=0,nl=1,il=2,pr=3,sl=4,rl=5,ol=6,al=7,El=0,Ip=1,Pp=2,Kn=0,nh=1,ih=2,sh=3,rh=4,oh=5,ah=6,lh=7,Ou="attached",Lp="detached",ch=300,es=301,Ls=302,Rl=303,Cl=304,Uo=306,$n=1e3,fn=1001,mr=1002,Ot=1003,Il=1004;var Fs=1005;var Ut=1006,Cr=1007;var Zn=1008;var vn=1009,uh=1010,hh=1011,Ir=1012,Pl=1013,Jn=1014,Pn=1015,jn=1016,Ll=1017,Fl=1018,Pr=1020,fh=35902,dh=35899,ph=1021,mh=1022,Ln=1023,ri=1026,ts=1027,Dl=1028,Nl=1029,ns=1030,Ol=1031;var Ul=1033,Bo=33776,ko=33777,zo=33778,Vo=33779,Bl=35840,kl=35841,zl=35842,Vl=35843,Gl=36196,Hl=37492,Wl=37496,Xl=37488,ql=37489,Go=37490,Yl=37491,$l=37808,Kl=37809,Zl=37810,Jl=37811,jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,uc=36495,hc=36283,fc=36284,Ho=36285,dc=36286;var bs=2300,_s=2301,ja=2302,Uu=2303,Bu=2400,ku=2401,zu=2402,Fp=2500;var gh=0,Wo=1,Lr=2,Dp=3200;var Xo=0,Np=1,Ni="",Mt="srgb",dn="srgb-linear",ho="linear",pt="srgb";var Qa=7680;var Op=519,Up=512,Bp=513,kp=514,pc=515,zp=516,Vp=517,mc=518,Gp=519,xh=35044,bh=35048;var _h="300 es",qn=2e3,gr=2001;function Yg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $g(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hp(){let s=xr("canvas");return s.style.display="block",s}var _d={},br=null;function fo(...s){let e="THREE."+s.shift();br?br("log",e,...s):console.log(e,...s)}function Wp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=Wp(s);let e="THREE."+s.shift();if(br)br("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=Wp(s);let e="THREE."+s.shift();if(br)br("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function xs(...s){let e=s.join(" ");e in _d||(_d[e]=!0,Ie(...s))}function Xp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qp={[tl]:nl,[il]:ol,[sl]:al,[pr]:rl,[nl]:tl,[ol]:il,[al]:sl,[rl]:pr},oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=1234567,co=Math.PI/180,ys=180/Math.PI;function Yn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function yh(s,e){return(s%e+e)%e}function Kg(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zg(s,e,t){return s!==e?(t-s)/(e-s):0}function uo(s,e,t){return(1-t)*s+t*e}function Jg(s,e,t,n){return uo(s,e,1-Math.exp(-t*n))}function jg(s,e=1){return e-Math.abs(yh(s,e*2)-e)}function Qg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ex(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function tx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function nx(s,e){return s+Math.random()*(e-s)}function ix(s){return s*(.5-Math.random())}function sx(s){s!==void 0&&(yd=s);let e=yd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rx(s){return s*co}function ox(s){return s*ys}function ax(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function lx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ux(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*m,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*m,a*c);break;case"ZYZ":s.set(l*m,l*p,a*h,a*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var vh={DEG2RAD:co,RAD2DEG:ys,generateUUID:Yn,clamp:tt,euclideanModulo:yh,mapLinear:Kg,inverseLerp:Zg,lerp:uo,damp:Jg,pingpong:jg,smoothstep:Qg,smootherstep:ex,randInt:tx,randFloat:nx,randFloatSpread:ix,seededRandom:sx,degToRad:rx,radToDeg:ox,isPowerOfTwo:ax,ceilPowerOfTwo:lx,floorPowerOfTwo:cx,setQuaternionFromProperEuler:ux,normalize:_t,denormalize:Xn},Ah=class Ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ah.prototype.isVector2=!0;var Oe=Ah,En=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==p||h!==m){let g=l*f+c*p+h*m+u*x;g<0&&(f=-f,p=-p,m=-m,x=-x,g=-g);let d=1-a;if(g<.9995){let _=Math.acos(g),y=Math.sin(_);d=Math.sin(d*_)/y,a=Math.sin(a*_)/y,l=l*d+f*a,c=c*d+p*a,h=h*d+m*a,u=u*d+x*a}else{l=l*d+f*a,c=c*d+p*a,h=h*d+m*a,u=u*d+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*p-c*f,e[t+1]=l*m+h*f+c*u-a*p,e[t+2]=c*m+h*p+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),p=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Eh=class Eh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hu.copy(this).projectOnVector(e),this.sub(hu)}reflect(e){return this.sub(hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Eh.prototype.isVector3=!0;var k=Eh,hu=new k,vd=new En,Rh=class Rh{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],x=i[0],g=i[3],d=i[6],_=i[1],y=i[4],b=i[7],v=i[2],S=i[5],T=i[8];return r[0]=o*x+a*_+l*v,r[3]=o*g+a*y+l*S,r[6]=o*d+a*b+l*T,r[1]=c*x+h*_+u*v,r[4]=c*g+h*y+u*S,r[7]=c*d+h*b+u*T,r[2]=f*x+p*_+m*v,r[5]=f*g+p*y+m*S,r[8]=f*d+p*b+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,m=t*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fu.makeScale(e,t)),this}rotate(e){return xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rh.prototype.isMatrix3=!0;var We=Rh,fu=new We,Md=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){let s={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dn]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Md,fromXYZ:Sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),s}var Je=hx();function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ks,ll=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ks===void 0&&(Ks=xr("canvas")),Ks.width=e.width,Ks.height=e.height;let i=Ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fx=0,_r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(du(i[o].image)):r.push(du(i[o]))}else r=du(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function du(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ll.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var dx=0,pu=new k,qt=class s extends oi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=fn,i=fn,r=Ut,o=Zn,a=Ln,l=vn,c=s.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Yn(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pu).x}get height(){return this.source.getSize(pu).y}get depth(){return this.source.getSize(pu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ch;qt.DEFAULT_ANISOTROPY=1;var Ch=class Ch{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,b=(p+1)/2,v=(d+1)/2,S=(h+f)/4,T=(u+x)/4,M=(m+g)/4;return y>b&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=S/n,r=T/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=M/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=T/r,i=M/r),this.set(n,i,r,t),this}let _=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(g-m)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ch.prototype.isVector4=!0;var yt=Ch,cl=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new qt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends cl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},po=class extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ul=class extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Al=class Al{constructor(e,t,n,i,r,o,a,l,c,h,u,f,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,p,m,x,g)}set(e,t,n,i,r,o,a,l,c,h,u,f,p,m,x,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Al().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,m=c*h,x=c*u;t[0]=f+x*a,t[4]=m*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,m=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,m=a*h,x=a*u;t[0]=l*h,t[4]=m*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,p=o*c,m=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){let i=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Gi.crossVectors(n,Tn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Gi.crossVectors(n,Tn)),Gi.normalize(),Ma.crossVectors(Tn,Gi),i[0]=Gi.x,i[4]=Ma.x,i[8]=Tn.x,i[1]=Gi.y,i[5]=Ma.y,i[9]=Tn.y,i[2]=Gi.z,i[6]=Ma.z,i[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],_=n[3],y=n[7],b=n[11],v=n[15],S=i[0],T=i[4],M=i[8],E=i[12],C=i[1],A=i[5],L=i[9],P=i[13],R=i[2],F=i[6],O=i[10],U=i[14],V=i[3],z=i[7],B=i[11],H=i[15];return r[0]=o*S+a*C+l*R+c*V,r[4]=o*T+a*A+l*F+c*z,r[8]=o*M+a*L+l*O+c*B,r[12]=o*E+a*P+l*U+c*H,r[1]=h*S+u*C+f*R+p*V,r[5]=h*T+u*A+f*F+p*z,r[9]=h*M+u*L+f*O+p*B,r[13]=h*E+u*P+f*U+p*H,r[2]=m*S+x*C+g*R+d*V,r[6]=m*T+x*A+g*F+d*z,r[10]=m*M+x*L+g*O+d*B,r[14]=m*E+x*P+g*U+d*H,r[3]=_*S+y*C+b*R+v*V,r[7]=_*T+y*A+b*F+v*z,r[11]=_*M+y*L+b*O+v*B,r[15]=_*E+y*P+b*U+v*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],m=e[3],x=e[7],g=e[11],d=e[15],_=l*p-c*f,y=a*p-c*u,b=a*f-l*u,v=o*p-c*h,S=o*f-l*h,T=o*u-a*h;return t*(x*_-g*y+d*b)-n*(m*_-g*v+d*S)+i*(m*y-x*v+d*T)-r*(m*b-x*S+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],_=t*a-n*o,y=t*l-i*o,b=t*c-r*o,v=n*l-i*a,S=n*c-r*a,T=i*c-r*l,M=h*x-u*m,E=h*g-f*m,C=h*d-p*m,A=u*g-f*x,L=u*d-p*x,P=f*d-p*g,R=_*P-y*L+b*A+v*C-S*E+T*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/R;return e[0]=(a*P-l*L+c*A)*F,e[1]=(i*L-n*P-r*A)*F,e[2]=(x*T-g*S+d*v)*F,e[3]=(f*S-u*T-p*v)*F,e[4]=(l*C-o*P-c*E)*F,e[5]=(t*P-i*C+r*E)*F,e[6]=(g*b-m*T-d*y)*F,e[7]=(h*T-f*b+p*y)*F,e[8]=(o*L-a*C+c*M)*F,e[9]=(n*C-t*L-r*M)*F,e[10]=(m*S-x*b+d*_)*F,e[11]=(u*b-h*S-p*_)*F,e[12]=(a*E-o*A-l*M)*F,e[13]=(t*A-n*E+i*M)*F,e[14]=(x*y-m*v-g*_)*F,e[15]=(h*v-u*y+f*_)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,m=r*u,x=o*h,g=o*u,d=a*u,_=l*c,y=l*h,b=l*u,v=n.x,S=n.y,T=n.z;return i[0]=(1-(x+d))*v,i[1]=(p+b)*v,i[2]=(m-y)*v,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(f+d))*S,i[6]=(g+_)*S,i[7]=0,i[8]=(m+y)*T,i[9]=(g-_)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Zs.set(i[0],i[1],i[2]).length(),a=Zs.set(i[4],i[5],i[6]).length(),l=Zs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Vn.copy(this);let c=1/o,h=1/a,u=1/l;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=qn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===qn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===gr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=qn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===qn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===gr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Al.prototype.isMatrix4=!0;var Xe=Al,Zs=new k,Vn=new Xe,px=new k(0,0,0),mx=new k(1,1,1),Gi=new k,Ma=new k,Tn=new k,wd=new Xe,Td=new En,ai=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Td.setFromEuler(this),this.setFromQuaternion(Td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gx=0,Ad=new k,Js=new En,yi=new Xe,Sa=new k,Jr=new k,xx=new k,bx=new En,Ed=new k(1,0,0),Rd=new k(0,1,0),Cd=new k(0,0,1),Id={type:"added"},_x={type:"removed"},js={type:"childadded",child:null},mu={type:"childremoved",child:null},At=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new k,t=new ai,n=new En,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Ed,e)}rotateY(e){return this.rotateOnAxis(Rd,e)}rotateZ(e){return this.rotateOnAxis(Cd,e)}translateOnAxis(e,t){return Ad.copy(e).applyQuaternion(this.quaternion),this.position.add(Ad.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ed,e)}translateY(e){return this.translateOnAxis(Rd,e)}translateZ(e){return this.translateOnAxis(Cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sa.copy(e):Sa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(Jr,Sa,this.up):yi.lookAt(Sa,Jr,this.up),this.quaternion.setFromRotationMatrix(yi),i&&(yi.extractRotation(i.matrixWorld),Js.setFromRotationMatrix(yi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Id),js.child=e,this.dispatchEvent(js),js.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),mu.child=e,this.dispatchEvent(mu),mu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Id),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new k(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},yx={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},wa={h:0,s:0,l:0};function gu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=yh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=gu(o,r,e+1/3),this.g=gu(o,r,e),this.b=gu(o,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Yp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(sn.copy(this),e),Math.round(tt(sn.r*255,0,255))*65536+Math.round(tt(sn.g*255,0,255))*256+Math.round(tt(sn.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Mt){Je.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(wa);let n=uo(Hi.h,wa.h,t),i=uo(Hi.s,wa.s,t),r=uo(Hi.l,wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new j;j.NAMES=Yp;var vs=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ri=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Gn=new k,vi=new k,xu=new k,Mi=new k,Qs=new k,er=new k,Pd=new k,bu=new k,_u=new k,yu=new k,vu=new yt,Mu=new yt,Su=new yt,Ai=class s{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gn.subVectors(e,t),i.cross(Gn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gn.subVectors(i,t),vi.subVectors(n,t),xu.subVectors(e,t);let o=Gn.dot(Gn),a=Gn.dot(vi),l=Gn.dot(xu),c=vi.dot(vi),h=vi.dot(xu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return vu.setScalar(0),Mu.setScalar(0),Su.setScalar(0),vu.fromBufferAttribute(e,t),Mu.fromBufferAttribute(e,n),Su.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(vu,r.x),o.addScaledVector(Mu,r.y),o.addScaledVector(Su,r.z),o}static isFrontFacing(e,t,n,i){return Gn.subVectors(n,t),vi.subVectors(e,t),Gn.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Gn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Qs.subVectors(i,n),er.subVectors(r,n),bu.subVectors(e,n);let l=Qs.dot(bu),c=er.dot(bu);if(l<=0&&c<=0)return t.copy(n);_u.subVectors(e,i);let h=Qs.dot(_u),u=er.dot(_u);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Qs,o);yu.subVectors(e,r);let p=Qs.dot(yu),m=er.dot(yu);if(m>=0&&p<=m)return t.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(er,a);let g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return Pd.subVectors(r,i),a=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Pd,a);let d=1/(g+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Qs,o).addScaledVector(er,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bt=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Aa.subVectors(this.max,jr),tr.subVectors(e.a,jr),nr.subVectors(e.b,jr),ir.subVectors(e.c,jr),Wi.subVectors(nr,tr),Xi.subVectors(ir,nr),ds.subVectors(tr,ir);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ds.z,ds.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ds.z,0,-ds.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ds.y,ds.x,0];return!wu(t,tr,nr,ir,Aa)||(t=[1,0,0,0,1,0,0,0,1],!wu(t,tr,nr,ir,Aa))?!1:(Ea.crossVectors(Wi,Xi),t=[Ea.x,Ea.y,Ea.z],wu(t,tr,nr,ir,Aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Si=[new k,new k,new k,new k,new k,new k,new k,new k],Hn=new k,Ta=new Bt,tr=new k,nr=new k,ir=new k,Wi=new k,Xi=new k,ds=new k,jr=new k,Aa=new k,Ea=new k,ps=new k;function wu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ps.fromArray(s,r);let a=i.x*Math.abs(ps.x)+i.y*Math.abs(ps.y)+i.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ht=new k,Ra=new Oe,vx=0,Xt=class extends oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var mo=class extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ms=class extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mx=new Bt,Qr=new k,Tu=new k,gn=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Tu)),this.expandByPoint(Qr.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Sx=0,Dn=new Xe,Au=new At,sr=new k,An=new Bt,eo=new Bt,jt=new k,Ge=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yg(e)?Ms:mo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Au.lookAt(e),Au.updateMatrix(),this.applyMatrix4(Au.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];An.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(An.min,eo.min),An.expandByPoint(jt),jt.addVectors(An.max,eo.max),An.expandByPoint(jt)):(An.expandByPoint(eo.min),An.expandByPoint(eo.max))}An.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(e,c),jt.add(sr)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new k,l[M]=new k;let c=new k,h=new k,u=new k,f=new Oe,p=new Oe,m=new Oe,x=new k,g=new k;function d(M,E,C){c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,E),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),p.sub(f),m.sub(f);let A=1/(p.x*m.y-m.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(A),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(A),a[M].add(x),a[E].add(x),a[C].add(x),l[M].add(g),l[E].add(g),l[C].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let M=0,E=_.length;M<E;++M){let C=_[M],A=C.start,L=C.count;for(let P=A,R=A+L;P<R;P+=3)d(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new k,b=new k,v=new k,S=new k;function T(M){v.fromBufferAttribute(i,M),S.copy(v);let E=a[M];y.copy(E),y.sub(v.multiplyScalar(v.dot(E))).normalize(),b.crossVectors(S,E);let A=b.dot(l[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,A)}for(let M=0,E=_.length;M<E;++M){let C=_[M],A=C.start,L=C.count;for(let P=A,R=A+L;P<R;P+=3)T(e.getX(P+0)),T(e.getX(P+1)),T(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new Xt(f,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ss=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xh,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hn=new k,$i=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Eu=new k,wx=new k,Tx=new We,Wn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Eu.subVectors(n,t).cross(wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tx.getNormalMatrix(e),i=this.coplanarPoint(Eu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ax=0,on=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=di,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qa,this.stencilZFail=Qa,this.stencilZPass=Qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new j().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Wn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rr,to=new k,or=new k,ar=new k,lr=new Oe,no=new Oe,$p=new Xe,Ca=new k,io=new k,Ia=new k,Ld=new Oe,Ru=new Oe,Fd=new Oe,ws=class extends At{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ss(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new $i(n,3,0,!1)),rr.setAttribute("uv",new $i(n,2,3,!1))}this.geometry=rr,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),$p.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ar.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-ar.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Pa(Ca.set(-.5,-.5,0),ar,o,or,i,r),Pa(io.set(.5,-.5,0),ar,o,or,i,r),Pa(Ia.set(.5,.5,0),ar,o,or,i,r),Ld.set(0,0),Ru.set(1,0),Fd.set(1,1);let a=e.ray.intersectTriangle(Ca,io,Ia,!1,to);if(a===null&&(Pa(io.set(-.5,.5,0),ar,o,or,i,r),Ru.set(0,1),a=e.ray.intersectTriangle(Ca,Ia,io,!1,to),a===null))return;let l=e.ray.origin.distanceTo(to);l<e.near||l>e.far||t.push({distance:l,point:to.clone(),uv:Ai.getInterpolation(to,Ca,io,Ia,Ld,Ru,Fd,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Pa(s,e,t,n,i,r){lr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(no.x=r*lr.x-i*lr.y,no.y=i*lr.x+r*lr.y):no.copy(lr),s.copy(e),s.x+=no.x,s.y+=no.y,s.applyMatrix4($p)}var wi=new k,Cu=new k,La=new k,Fa=new k,Zi=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Cu.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Fa.copy(this.origin).sub(Cu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=Fa.dot(this.direction),l=-Fa.dot(La),c=Fa.lengthSq(),h=Math.abs(1-o*o),u,f,p,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Cu).addScaledVector(La,f),p}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);let n=wi.dot(this.direction),i=wi.dot(wi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,p=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,d=n.x-o.x,_=n.y-o.y,y=n.z-o.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(h),T,M,E,C,A,L,P,R,F,O,U,V;if(b>=v&&b>=S?(E=l,L=u,F=m,V=d,l>=0?(T=c,M=h,C=f,A=p,P=x,R=g,O=_,U=y):(T=h,M=c,C=p,A=f,P=g,R=x,O=y,U=_)):v>=S?(E=c,L=f,F=x,V=_,c>=0?(T=h,M=l,C=p,A=u,P=g,R=m,O=y,U=d):(T=l,M=h,C=u,A=p,P=m,R=g,O=d,U=y)):(E=h,L=p,F=g,V=y,h>=0?(T=l,M=c,C=u,A=f,P=m,R=x,O=d,U=_):(T=c,M=l,C=f,A=u,P=x,R=m,O=_,U=d)),E===0)return null;let z=T/E,B=M/E,H=1/E,ee=C-z*L,Q=A-B*L,ce=P-z*F,ue=R-B*F,Be=O-z*V,q=U-B*V,Z=Be*ue-q*ce,ae=ee*q-Q*Be,we=ce*Q-ue*ee;if(i){if(Z<0||ae<0||we<0)return null}else if((Z<0||ae<0||we<0)&&(Z>0||ae>0||we>0))return null;let ge=Z+ae+we;if(ge===0)return null;let ze=H*(Z*L+ae*F+we*V);return(ge>0?ze<0:ze>0)?null:this.at(ze/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=El,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dd=new Xe,ms=new Zi,Da=new gn,Nd=new k,Na=new k,Oa=new k,Ua=new k,Iu=new k,Ba=new k,Od=new k,ka=new k,Fe=class extends At{constructor(e=new Ge,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Iu.fromBufferAttribute(u,e),o?Ba.addScaledVector(Iu,h):Ba.addScaledVector(Iu.sub(t),h))}t.add(Ba)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(Da.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Da,Nd)===null||ms.origin.distanceToSquared(Nd)>(e.far-e.near)**2))&&(Dd.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Dd),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=_,v=y;b<v;b+=3){let S=a.getX(b),T=a.getX(b+1),M=a.getX(b+2);i=za(this,d,e,n,c,h,u,S,T,M),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let _=a.getX(g),y=a.getX(g+1),b=a.getX(g+2);i=za(this,o,e,n,c,h,u,_,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],d=o[g.materialIndex],_=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let b=_,v=y;b<v;b+=3){let S=b,T=b+1,M=b+2;i=za(this,d,e,n,c,h,u,S,T,M),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){let _=g,y=g+1,b=g+2;i=za(this,o,e,n,c,h,u,_,y,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Ex(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===hi,a),l===null)return null;ka.copy(a),ka.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(ka);return c<t.near||c>t.far?null:{distance:c,point:ka.clone(),object:s}}function za(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Na),s.getVertexPosition(l,Oa),s.getVertexPosition(c,Ua);let h=Ex(s,e,t,n,Na,Oa,Ua,Od);if(h){let u=new k;Ai.getBarycoord(Od,Na,Oa,Ua,u),i&&(h.uv=Ai.getInterpolatedAttribute(i,a,l,c,u,new Oe)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,u,new Oe)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new k,materialIndex:0};Ai.getNormal(Na,Oa,Ua,f.normal),h.face=f,h.barycoord=u}return h}var so=new yt,Ud=new yt,Bd=new yt,Rx=new yt,kd=new Xe,Va=new k,Pu=new gn,zd=new Xe,Lu=new Zi,go=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ou,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Va),this.boundingBox.expandByPoint(Va)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Va),this.boundingSphere.expandByPoint(Va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pu.copy(this.boundingSphere),Pu.applyMatrix4(i),e.ray.intersectsSphere(Pu)!==!1&&(zd.copy(i).invert(),Lu.copy(e.ray).applyMatrix4(zd),!(this.boundingBox!==null&&Lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ou?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ud.fromBufferAttribute(i.attributes.skinIndex,e),Bd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(so.copy(t),t.set(0,0,0,0)):(so.set(...t,1),t.set(0,0,0)),so.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Bd.getComponent(r);if(o!==0){let a=Ud.getComponent(r);kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rx.copy(so).applyMatrix4(kd),o)}}return t.isVector4&&(t.w=so.w),t.applyMatrix4(this.bindMatrixInverse)}},Mr=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sr=class extends qt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Ot,h=Ot,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vd=new Xe,Cx=new Xe,xo=class s{constructor(e=[],t=[]){this.uuid=Yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Cx;Vd.multiplyMatrices(a,t[r]),Vd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Sr(t,e,e,Ln,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ie("Skeleton: No bone found with UUID:",r),o=new Mr),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ci=class extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new Xe,Gd=new Xe,Ga=[],Hd=new Bt,Ix=new Xe,ro=new Fe,oo=new gn,Ts=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ci(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ix)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Hd.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),oo.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,cr),Gd.multiplyMatrices(n,cr),ro.matrixWorld=Gd,ro.raycast(e,Ga);for(let o=0,a=Ga.length;o<a;o++){let l=Ga[o];l.instanceId=r,l.object=this,t.push(l)}Ga.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ci(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sr(new Float32Array(i*this.count),i,this.count,Dl,Pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new gn,Px=new Oe(.5,.5),Ha=new k,wr=class{constructor(e=new Wn,t=new Wn,n=new Wn,i=new Wn,r=new Wn,o=new Wn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],_=r[12],y=r[13],b=r[14],v=r[15];if(i[0].setComponents(c-o,p-h,d-m,v-_).normalize(),i[1].setComponents(c+o,p+h,d+m,v+_).normalize(),i[2].setComponents(c+a,p+u,d+x,v+y).normalize(),i[3].setComponents(c-a,p-u,d-x,v-y).normalize(),n)i[4].setComponents(l,f,g,b).normalize(),i[5].setComponents(c-l,p-f,d-g,v-b).normalize();else if(i[4].setComponents(c-l,p-f,d-g,v-b).normalize(),t===qn)i[5].setComponents(c+l,p+f,d+g,v+b).normalize();else if(t===gr)i[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=Px.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ha.x=i.normal.x>0?e.max.x:e.min.x,Ha.y=i.normal.y>0?e.max.y:e.min.y,Ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var kt=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hl=new k,fl=new k,Wd=new Xe,ao=new Zi,Wa=new gn,Fu=new k,Xd=new k,Rn=class extends At{constructor(e=new Ge,t=new kt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)hl.fromBufferAttribute(t,i-1),fl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hl.distanceTo(fl);e.setAttribute("lineDistance",new Ue(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;Wd.copy(i).invert(),ao.copy(e.ray).applyMatrix4(Wd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let d=h.getX(x),_=h.getX(x+1),y=Xa(this,e,ao,l,d,_,x);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(p),d=Xa(this,e,ao,l,x,g,m-1);d&&t.push(d)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m-1;x<g;x+=c){let d=Xa(this,e,ao,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=Xa(this,e,ao,l,m-1,p,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Xa(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(hl.fromBufferAttribute(a,i),fl.fromBufferAttribute(a,r),t.distanceSqToSegment(hl,fl,Fu,Xd)>n)return;Fu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Fu);if(!(c<e.near||c>e.far))return{distance:c,point:Xd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var qd=new k,Yd=new k,xn=class extends Rn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qd.fromBufferAttribute(t,i),Yd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new Ue(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},bo=class extends Rn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bn=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Xe,Vu=new Zi,qa=new gn,Ya=new k,Cn=class extends At{constructor(e=new Ge,t=new bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(i),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;$d.copy(i).invert(),Vu.copy(e.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,x=p;m<x;m++){let g=c.getX(m);Ya.fromBufferAttribute(u,g),Kd(Ya,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=f,x=p;m<x;m++)Ya.fromBufferAttribute(u,m),Kd(Ya,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kd(s,e,t,n,i,r,o){let a=Vu.distanceSqToPoint(s);if(a<t){let l=new k;Vu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var _o=class extends qt{constructor(e=[],t=es,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},an=class extends qt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ji=class extends qt{constructor(e,t,n=Jn,i,r,o,a=Ot,l=Ot,c,h=ri,u=1){if(h!==ri&&h!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},dl=class extends Ji{constructor(e,t=Jn,n=es,i,r,o=Ot,a=Ot,l,c=ri){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yo=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ji=class s extends Ge{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(u,2));function m(x,g,d,_,y,b,v,S,T,M,E){let C=b/T,A=v/M,L=b/2,P=v/2,R=S/2,F=T+1,O=M+1,U=0,V=0,z=new k;for(let B=0;B<O;B++){let H=B*A-P;for(let ee=0;ee<F;ee++){let Q=ee*C-L;z[x]=Q*_,z[g]=H*y,z[d]=R,c.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[d]=S>0?1:-1,h.push(z.x,z.y,z.z),u.push(ee/T),u.push(1-B/M),U+=1}}for(let B=0;B<M;B++)for(let H=0;H<T;H++){let ee=f+H+F*B,Q=f+H+F*(B+1),ce=f+(H+1)+F*(B+1),ue=f+(H+1)+F*B;l.push(ee,Q,ue),l.push(Q,ce,ue),V+=6}a.addGroup(p,V,E),p+=V,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Lx(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Kp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ux(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){let p=s[f],m=s[f+1];p<a&&(a=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return vo(r,o,t,a,l,c,0),o}function Kp(s,e,t,n,i){let r;if(i===$x(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Zd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Zd(o/n|0,s[o],s[o+1],r);return r&&Tr(r,r.next)&&(So(r),r=r.next),r}function As(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Tr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(So(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function vo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Gx(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Dx(s,n,i,r):Fx(s)){e.push(l.i,s.i,c.i),So(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Nx(As(s),e),vo(s,e,t,n,i,r,2)):o===2&&Ox(s,e,t,n,i,r):vo(As(s),e,t,n,i,r,1);break}}}function Fx(s){let e=s.prev,t=s,n=s.next;if(Lt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),p=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=p&&lo(i,a,r,l,o,c,m.x,m.y)&&Lt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Dx(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Lt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,p=Math.min(a,l,c),m=Math.min(h,u,f),x=Math.max(a,l,c),g=Math.max(h,u,f),d=Gu(p,m,e,t,n),_=Gu(x,g,e,t,n),y=s.prevZ,b=s.nextZ;for(;y&&y.z>=d&&b&&b.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&lo(a,h,l,u,c,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&lo(a,h,l,u,c,f,b.x,b.y)&&Lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=d;){if(y.x>=p&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&lo(a,h,l,u,c,f,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&lo(a,h,l,u,c,f,b.x,b.y)&&Lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Nx(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Tr(n,i)&&Jp(n,t,t.next,i)&&Mo(n,i)&&Mo(i,n)&&(e.push(n.i,t.i,i.i),So(t),So(t.next),t=s=i),t=t.next}while(t!==s);return As(t)}function Ox(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xx(o,a)){let l=jp(o,a);o=As(o,o.next),l=As(l,l.next),vo(o,e,t,n,i,r,0),vo(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ux(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Kp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Wx(c))}i.sort(Bx);for(let r=0;r<i.length;r++)t=kx(i[r],t);return t}function Bx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function kx(s,e){let t=zx(s,e);if(!t)return e;let n=jp(t,s);return As(n,n.next),As(t,t.next)}function zx(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(Tr(s,t))return t;do{if(Tr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zp(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Mo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Vx(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Vx(s,e){return Lt(s.prev,s,e.prev)<0&&Lt(e.next,s,s.next)<0}function Gx(s,e,t,n){let i=s;do i.z===0&&(i.z=Gu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hx(i)}function Hx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Gu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Wx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Zp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function lo(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Zp(s,e,t,n,i,r,o,a)}function Xx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!qx(s,e)&&(Mo(s,e)&&Mo(e,s)&&Yx(s,e)&&(Lt(s.prev,s,e.prev)||Lt(s,e.prev,e))||Tr(s,e)&&Lt(s.prev,s,s.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Tr(s,e){return s.x===e.x&&s.y===e.y}function Jp(s,e,t,n){let i=Ka(Lt(s,e,t)),r=Ka(Lt(s,e,n)),o=Ka(Lt(t,n,s)),a=Ka(Lt(t,n,e));return!!(i!==r&&o!==a||i===0&&$a(s,t,e)||r===0&&$a(s,n,e)||o===0&&$a(t,s,n)||a===0&&$a(t,e,n))}function $a(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ka(s){return s>0?1:s<0?-1:0}function qx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Mo(s,e){return Lt(s.prev,s,s.next)<0?Lt(s,e,s.next)>=0&&Lt(s,s.prev,e)>=0:Lt(s,e,s.prev)<0||Lt(s,s.next,e)<0}function Yx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function jp(s,e){let t=Hu(s.i,s.x,s.y),n=Hu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zd(s,e,t,n){let i=Hu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function So(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $x(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Wu=class{static triangulate(e,t,n=2){return Lx(e,t,n)}},wo=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Jd(e),jd(n,e);let o=e.length;t.forEach(Jd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,jd(n,t[l]);let a=Wu.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Jd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function jd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Nn=class s extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){let _=d*f-o;for(let y=0;y<c;y++){let b=y*u-r;m.push(b,-_,0),x.push(0,0,1),g.push(y/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){let y=_+c*d,b=_+c*(d+1),v=_+1+c*(d+1),S=_+1+c*d;p.push(y,b,S),p.push(b,v,S)}this.setIndex(p),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Es=class s extends Ge{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,p=new k,m=new Oe;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let d=r+g/n*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let d=0;d<n;d++){let _=d+g,y=_,b=_+n+1,v=_+n+2,S=_+1;a.push(y,b,S),a.push(b,v,S)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var To=class s extends Ge{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,f=new k,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){let _=[],y=d/n,b=o+y*a,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let M=0;M<=t;M++){let E=M/t,C=i+E*r;u.x=-S*Math.cos(C),u.y=v,u.z=S*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(E+T,1-y),_.push(c++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<t;_++){let y=h[d][_+1],b=h[d][_],v=h[d+1][_],S=h[d+1][_+1];(d!==0||o>0)&&p.push(y,b,S),(d!==n-1||l<Math.PI)&&p.push(b,v,S)}this.setIndex(p),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ds(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Qd(i))i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Qd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Ds(s[t]);for(let i in n)e[i]=n[i]}return e}function Qd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Kx(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Mh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Qp={clone:Ds,merge:ln},Zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zx,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(i.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new k().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new We().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},pl=class extends In{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},li=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends li{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ao=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=El,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ml=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},gl=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function el(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function jx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ep(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Qx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ci=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xl=class extends ci{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bu,endingEnd:Bu}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ku:r=e,a=2*t-n;break;case zu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ku:o=e,l=2*n-t;break;case zu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,d=-f*g+2*f*x-f*m,_=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,y=(-1-p)*g+(1.5+p)*x+.5*m,b=p*g-p*x;for(let v=0;v!==a;++v)r[v]=d*o[h+v]+_*o[c+v]+y*o[l+v]+b*o[u+v];return r}},bl=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},_l=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yl=class extends ci{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,p=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],d=p*f+m*2,_=u[d],y=u[d+1],b=e*f+m*2,v=h[b],S=h[b+1],T=tb(n,t,_,v,i);r[m]=em(T,x,y,S,g)}return r}};function em(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function eb(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function tb(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=em(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=eb(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yi(t,this.TimeBufferType),this.values=Yi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yi(e.times,Array),values:Yi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),el(e.settings)&&(n.settings={inTangents:Yi(e.settings.inTangents,Array),outTangents:Yi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new yl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case bs:t=this.InterpolantFactoryMethodDiscrete;break;case _s:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break;case Uu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return _s;case this.InterpolantFactoryMethodSmooth:return ja;case this.InterpolantFactoryMethodBezier:return Uu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;el(this.settings)&&(tp(this.settings.inTangents,e),tp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&$g(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[p+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,el(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function tp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=_s;var Ii=class extends yn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=bs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Eo.prototype.ValueTypeName="color";var Pi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Pi.prototype.ValueTypeName="number";var vl=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Li=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}};Li.prototype.ValueTypeName="quaternion";Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends yn{constructor(e,t,n){super(e,t,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=bs;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Qi.prototype.ValueTypeName="vector";var Ro=class{constructor(e="",t=-1,n=[],i=Fp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ib(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=jx(l);l=ep(l,1,h),c=ep(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Pi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function nb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Pi;case"vector":case"vector2":case"vector3":case"vector4":return Qi;case"color":return Eo;case"quaternion":return Li;case"bool":case"boolean":return Ii;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ib(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=nb(s.type);if(s.times===void 0){let n=[],i=[];Qx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),el(s.settings)&&(t.settings={inTangents:Yi(s.settings.inTangents,Float32Array),outTangents:Yi(s.settings.outTangents,Float32Array)}),t}var si={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(np(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!np(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function np(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ml=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new Ml,ui=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ui.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti={},Xu=class extends Error{constructor(e,t){super(e),this.response=t}},Ar=class extends ui{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=si.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:n,onError:i});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ti[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,x=0,g=new ReadableStream({start(d){_();function _(){u.read().then(({done:y,value:b})=>{if(y)d.close();else{x+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:p});for(let S=0,T=h.length;S<T;S++){let M=h[S];M.onProgress&&M.onProgress(v)}d.enqueue(b),_()}},y=>{d.error(y)})}}});return new Response(g)}else throw new Xu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{si.add(`file:${e}`,c);let h=Ti[e];delete Ti[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Ti[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,Sl=class extends ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=si.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ur.get(o);u===void 0&&(u=[],ur.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=xr("img");function l(){h(),t&&t(this);let u=ur.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),si.remove(`image:${e}`);let f=ur.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onError&&m.onError(u)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),si.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Co=class extends ui{constructor(e){super(e)}load(e,t,n,i){let r=new qt,o=new Sl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Rs=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new j(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Io=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Du=new Xe,ip=new k,sp=new k,Er=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Du,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===gr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Za=new k,Ja=new En,ii=new k,Po=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Ja,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,ii.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Za,Ja,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Ja,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new k,rp=new Oe,op=new Oe,Wt=class extends Po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,rp,op),t.subVectors(op,rp)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qu=class extends Er{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ys*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Lo=class extends Rs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Yu=class extends Er{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0}},Cs=class extends Rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},On=class extends Po{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$u=class extends Er{constructor(){super(new On(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new $u}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Di=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nu=new WeakMap,Fo=class extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=si.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Nu.has(o)===!0?(i&&i(Nu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return si.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Nu.set(l,c),si.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hr=-90,fr=1,wl=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wt(hr,fr,e,t);i.layers=this.layers,this.add(i);let r=new Wt(hr,fr,e,t);r.layers=this.layers,this.add(r);let o=new Wt(hr,fr,e,t);o.layers=this.layers,this.add(o);let a=new Wt(hr,fr,e,t);a.layers=this.layers,this.add(a);let l=new Wt(hr,fr,e,t);l.layers=this.layers,this.add(l);let c=new Wt(hr,fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Tl=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Sh="\\[\\]\\.:\\/",sb=new RegExp("["+Sh+"]","g"),wh="[^"+Sh+"]",rb="[^"+Sh.replace("\\.","")+"]",ob=/((?:WC+[\/:])*)/.source.replace("WC",wh),ab=/(WCOD+)?/.source.replace("WCOD",rb),lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),cb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),ub=new RegExp("^"+ob+ab+lb+cb+"$"),hb=["material","materials","bones","map"],Ku=class{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sb,"")}static parseTrackName(e){let t=ub.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Ku;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vw=new Float32Array(1);var ap=new Xe,Do=class{constructor(e,t,n=0,i=1/0){this.ray=new Zi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,n=[]){return Zu(e,this,n,t),n.sort(lp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zu(e[i],this,n,t);return n.sort(lp),n}};function lp(s,e){return s.distance-e.distance}function Zu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Zu(r[o],e,t,!0)}}var Ih=class Ih{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Ih.prototype.isMatrix2=!0;var Ju=Ih;function Th(s,e,t,n){let i=fb(n);switch(t){case ph:return s*e;case Dl:return s*e/i.components*i.byteLength;case Nl:return s*e/i.components*i.byteLength;case ns:return s*e*2/i.components*i.byteLength;case Ol:return s*e*2/i.components*i.byteLength;case mh:return s*e*3/i.components*i.byteLength;case Ln:return s*e*4/i.components*i.byteLength;case Ul:return s*e*4/i.components*i.byteLength;case Bo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zo:case Vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kl:case Vl:return Math.max(s,16)*Math.max(e,8)/4;case Bl:case zl:return Math.max(s,8)*Math.max(e,8)/2;case Gl:case Hl:case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wl:case Go:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case uc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ho:case dc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fb(s){switch(s){case vn:case uh:return{byteLength:1,components:1};case Ir:case hh:case jn:return{byteLength:2,components:1};case Ll:case Fl:return{byteLength:2,components:4};case Jn:case Pl:case Pn:return{byteLength:4,components:1};case fh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Sm(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pb(s){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var mb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gb=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
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
#endif`,Mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sb=`#ifdef USE_BATCHING
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
#endif`,wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rb=`#ifdef USE_IRIDESCENCE
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
#endif`,Cb=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bb=`#define PI 3.141592653589793
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
} // validated`,kb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zb=`vec3 transformedNormal = objectNormal;
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
#endif`,Vb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n_=`#ifdef USE_GRADIENTMAP
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
}`,i_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f_=`PhysicalMaterial material;
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
#endif`,d_=`uniform sampler2D dfgLUT;
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
}`,p_=`
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
#endif`,m_=`#if defined( RE_IndirectDiffuse )
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
#endif`,g_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,b_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,__=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T_=`#if defined( USE_POINTS_UV )
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
#endif`,A_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P_=`#ifdef USE_MORPHTARGETS
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,k_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ty=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ny=`#ifdef USE_SKINNING
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
#endif`,iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,ry=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ly=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cy=`#ifdef USE_TRANSMISSION
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
#endif`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,my=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gy=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`#include <common>
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
}`,My=`#if DEPTH_PACKING == 3200
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
}`,Sy=`#define DISTANCE
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
}`,wy=`#define DISTANCE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Py=`#define LAMBERT
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
}`,Ly=`#define LAMBERT
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
}`,Fy=`#define MATCAP
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
}`,Dy=`#define MATCAP
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
}`,Ny=`#define NORMAL
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
}`,Oy=`#define NORMAL
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
}`,Uy=`#define PHONG
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
}`,By=`#define PHONG
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
}`,ky=`#define STANDARD
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
}`,zy=`#define STANDARD
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
}`,Vy=`#define TOON
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
}`,Gy=`#define TOON
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
}`,Hy=`uniform float size;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,Yy=`uniform float rotation;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:mb,alphahash_pars_fragment:gb,alphamap_fragment:xb,alphamap_pars_fragment:bb,alphatest_fragment:_b,alphatest_pars_fragment:yb,aomap_fragment:vb,aomap_pars_fragment:Mb,batching_pars_vertex:Sb,batching_vertex:wb,begin_vertex:Tb,beginnormal_vertex:Ab,bsdfs:Eb,iridescence_fragment:Rb,bumpmap_pars_fragment:Cb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Pb,clipping_planes_pars_vertex:Lb,clipping_planes_vertex:Fb,color_fragment:Db,color_pars_fragment:Nb,color_pars_vertex:Ob,color_vertex:Ub,common:Bb,cube_uv_reflection_fragment:kb,defaultnormal_vertex:zb,displacementmap_pars_vertex:Vb,displacementmap_vertex:Gb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Wb,colorspace_fragment:Xb,colorspace_pars_fragment:qb,envmap_fragment:Yb,envmap_common_pars_fragment:$b,envmap_pars_fragment:Kb,envmap_pars_vertex:Zb,envmap_physical_pars_fragment:a_,envmap_vertex:Jb,fog_vertex:jb,fog_pars_vertex:Qb,fog_fragment:e_,fog_pars_fragment:t_,gradientmap_pars_fragment:n_,lightmap_pars_fragment:i_,lights_lambert_fragment:s_,lights_lambert_pars_fragment:r_,lights_pars_begin:o_,lights_toon_fragment:l_,lights_toon_pars_fragment:c_,lights_phong_fragment:u_,lights_phong_pars_fragment:h_,lights_physical_fragment:f_,lights_physical_pars_fragment:d_,lights_fragment_begin:p_,lights_fragment_maps:m_,lights_fragment_end:g_,lightprobes_pars_fragment:x_,logdepthbuf_fragment:b_,logdepthbuf_pars_fragment:__,logdepthbuf_pars_vertex:y_,logdepthbuf_vertex:v_,map_fragment:M_,map_pars_fragment:S_,map_particle_fragment:w_,map_particle_pars_fragment:T_,metalnessmap_fragment:A_,metalnessmap_pars_fragment:E_,morphinstance_vertex:R_,morphcolor_vertex:C_,morphnormal_vertex:I_,morphtarget_pars_vertex:P_,morphtarget_vertex:L_,normal_fragment_begin:F_,normal_fragment_maps:D_,normal_pars_fragment:N_,normal_pars_vertex:O_,normal_vertex:U_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:k_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:G_,opaque_fragment:H_,packing:W_,premultiplied_alpha_fragment:X_,project_vertex:q_,dithering_fragment:Y_,dithering_pars_fragment:$_,roughnessmap_fragment:K_,roughnessmap_pars_fragment:Z_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:j_,shadowmap_vertex:Q_,shadowmask_pars_fragment:ey,skinbase_vertex:ty,skinning_pars_vertex:ny,skinning_vertex:iy,skinnormal_vertex:sy,specularmap_fragment:ry,specularmap_pars_fragment:oy,tonemapping_fragment:ay,tonemapping_pars_fragment:ly,transmission_fragment:cy,transmission_pars_fragment:uy,uv_pars_fragment:hy,uv_pars_vertex:fy,uv_vertex:dy,worldpos_vertex:py,background_vert:my,background_frag:gy,backgroundCube_vert:xy,backgroundCube_frag:by,cube_vert:_y,cube_frag:yy,depth_vert:vy,depth_frag:My,distance_vert:Sy,distance_frag:wy,equirect_vert:Ty,equirect_frag:Ay,linedashed_vert:Ey,linedashed_frag:Ry,meshbasic_vert:Cy,meshbasic_frag:Iy,meshlambert_vert:Py,meshlambert_frag:Ly,meshmatcap_vert:Fy,meshmatcap_frag:Dy,meshnormal_vert:Ny,meshnormal_frag:Oy,meshphong_vert:Uy,meshphong_frag:By,meshphysical_vert:ky,meshphysical_frag:zy,meshtoon_vert:Vy,meshtoon_frag:Gy,points_vert:Hy,points_frag:Wy,shadow_vert:Xy,shadow_frag:qy,sprite_vert:Yy,sprite_frag:$y},be={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},mi={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new j(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};mi.physical={uniforms:ln([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var gc={r:0,b:0,g:0},Ky=new Xe,wm=new We;wm.set(-1,0,0,0,1,0,0,0,1);function Zy(s,e,t,n,i,r){let o=new j(0),a=i===!0?0:1,l,c,h=null,u=0,f=null;function p(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let b=_.backgroundBlurriness>0;y=e.get(y,b)}return y}function m(_){let y=!1,b=p(_);b===null?g(o,a):b&&b.isColor&&(g(b,1),y=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(_,y){let b=p(y);b&&(b.isCubeTexture||b.mapping===Uo)?(c===void 0&&(c=new Fe(new ji(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ds(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(y.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wm),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==pt,(h!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Fe(new Nn(2,2),new In({name:"BackgroundMaterial",uniforms:Ds(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function g(_,y){_.getRGB(gc,Mh(s)),t.buffers.color.setClear(gc.r,gc.g,gc.b,y,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,g(o,a)},render:m,addToRenderList:x,dispose:d}}function Jy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(A,L,P,R,F){let O=!1,U=u(A,R,P,L);r!==U&&(r=U,c(r.object)),O=p(A,R,P,F),O&&m(A,R,P,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,b(A,L,P,R),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(A){return s.bindVertexArray(A)}function h(A){return s.deleteVertexArray(A)}function u(A,L,P,R){let F=R.wireframe===!0,O=n[L.id];O===void 0&&(O={},n[L.id]=O);let U=A.isInstancedMesh===!0?A.id:0,V=O[U];V===void 0&&(V={},O[U]=V);let z=V[P.id];z===void 0&&(z={},V[P.id]=z);let B=z[F];return B===void 0&&(B=f(l()),z[F]=B),B}function f(A){let L=[],P=[],R=[];for(let F=0;F<t;F++)L[F]=0,P[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:R,object:A,attributes:{},index:null}}function p(A,L,P,R){let F=r.attributes,O=L.attributes,U=0,V=P.getAttributes();for(let z in V)if(V[z].location>=0){let H=F[z],ee=O[z];if(ee===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(ee=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(ee=A.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;U++}return r.attributesNum!==U||r.index!==R}function m(A,L,P,R){let F={},O=L.attributes,U=0,V=P.getAttributes();for(let z in V)if(V[z].location>=0){let H=O[z];H===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(H=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(H=A.instanceColor));let ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),F[z]=ee,U++}r.attributes=F,r.attributesNum=U,r.index=R}function x(){let A=r.newAttributes;for(let L=0,P=A.length;L<P;L++)A[L]=0}function g(A){d(A,0)}function d(A,L){let P=r.newAttributes,R=r.enabledAttributes,F=r.attributeDivisors;P[A]=1,R[A]===0&&(s.enableVertexAttribArray(A),R[A]=1),F[A]!==L&&(s.vertexAttribDivisor(A,L),F[A]=L)}function _(){let A=r.newAttributes,L=r.enabledAttributes;for(let P=0,R=L.length;P<R;P++)L[P]!==A[P]&&(s.disableVertexAttribArray(P),L[P]=0)}function y(A,L,P,R,F,O,U){U===!0?s.vertexAttribIPointer(A,L,P,F,O):s.vertexAttribPointer(A,L,P,R,F,O)}function b(A,L,P,R){x();let F=R.attributes,O=P.getAttributes(),U=L.defaultAttributeValues;for(let V in O){let z=O[V];if(z.location>=0){let B=F[V];if(B===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),B!==void 0){let H=B.normalized,ee=B.itemSize,Q=e.get(B);if(Q===void 0)continue;let ce=Q.buffer,ue=Q.type,Be=Q.bytesPerElement,q=ue===s.INT||ue===s.UNSIGNED_INT||B.gpuType===Pl;if(B.isInterleavedBufferAttribute){let Z=B.data,ae=Z.stride,we=B.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<z.locationSize;ge++)d(z.location+ge,Z.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<z.locationSize;ge++)g(z.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let ge=0;ge<z.locationSize;ge++)y(z.location+ge,ee/z.locationSize,ue,H,ae*Be,(we+ee/z.locationSize*ge)*Be,q)}else{if(B.isInstancedBufferAttribute){for(let Z=0;Z<z.locationSize;Z++)d(z.location+Z,B.meshPerAttribute);A.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Z=0;Z<z.locationSize;Z++)g(z.location+Z);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Z=0;Z<z.locationSize;Z++)y(z.location+Z,ee/z.locationSize,ue,H,ee*Be,ee/z.locationSize*Z*Be,q)}}else if(U!==void 0){let H=U[V];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(z.location,H);break;case 3:s.vertexAttrib3fv(z.location,H);break;case 4:s.vertexAttrib4fv(z.location,H);break;default:s.vertexAttrib1fv(z.location,H)}}}}_()}function v(){E();for(let A in n){let L=n[A];for(let P in L){let R=L[P];for(let F in R){let O=R[F];for(let U in O)h(O[U].object),delete O[U];delete R[F]}}delete n[A]}}function S(A){if(n[A.id]===void 0)return;let L=n[A.id];for(let P in L){let R=L[P];for(let F in R){let O=R[F];for(let U in O)h(O[U].object),delete O[U];delete R[F]}}delete n[A.id]}function T(A){for(let L in n){let P=n[L];for(let R in P){let F=P[R];if(F[A.id]===void 0)continue;let O=F[A.id];for(let U in O)h(O[U].object),delete O[U];delete F[A.id]}}}function M(A){for(let L in n){let P=n[L],R=A.isInstancedMesh===!0?A.id:0,F=P[R];if(F!==void 0){for(let O in F){let U=F[O];for(let V in U)h(U[V].object),delete U[V];delete F[O]}delete P[R],Object.keys(P).length===0&&delete n[L]}}}function E(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function jy(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Qy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Ln&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let M=T===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==vn&&T!==Pn&&!M&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ie("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,maxSamples:v,samples:S}}function ev(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Wn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,d=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let _=r?0:n,y=_*4,b=d.clippingState||null;l.value=b,b=h(m,f,y,p);for(let v=0;v!==y;++v)b[v]=t[v];d.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let d=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let y=0,b=p;y!==x;++y,b+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Dr=4,tv=6,nv=20,iv=256,qo=new On,nm=new j,Ph=null,Lh=0,Fh=0,Dh=!1,sv=new k,Ns=new k,Or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=sv}=r;Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ph,Lh,Fh),this._renderer.xr.enabled=Dh,e.scissorTest=!1,Fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===es||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ph=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:jn,format:Ln,colorSpace:dn,depthBuffer:!1},i=im(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rv(r)),this._blurMaterial=av(r,e,t),this._ggxMaterial=ov(r,e,t)}return i}_compileMaterial(e){let t=new Fe(new Ge,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,i,r){let l=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(nm),u.toneMapping=Kn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new ji,new Ye({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,d=!1,_=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,d=!0):(g.color.copy(nm),d=!0);for(let y=0;y<6;y++){let b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let v=this._cubeSize;Fr(i,b*v,y>2?v:0,v,v),u.setRenderTarget(i),d&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===es||e.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,p=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Dr?n-m+Dr:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,Fr(r,g,d,3*x,2*x),i.setRenderTarget(r),i.render(a,qo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Fr(e,g,d,3*x,2*x),i.setRenderTarget(e),i.render(a,qo)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Dr?i-this._lodMax+Dr:0),f=4*(this._cubeSize-h);Fr(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(l,qo)}};function rv(s){let e=[],t=[],n=s,i=s-Dr+1+tv;for(let r=0;r<i;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,p=3,m=new Float32Array(p*f*u),x=new Float32Array(p*f*u);for(let d=0;d<u;d++){let _=d%3*2/3-1,y=d>2?0:-1,b=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];m.set(b,p*f*d);for(let v=0;v<f;v++){let S=h[v*2]*2-1,T=h[v*2+1]*2-1;d===0?Ns.set(1,T,S):d===1?Ns.set(-S,1,-T):d===2?Ns.set(-S,T,1):d===3?Ns.set(-1,T,-S):d===4?Ns.set(-S,-1,T):Ns.set(S,T,-1),Ns.toArray(x,(d*f+v)*p)}}let g=new Ge;g.setAttribute("position",new Xt(m,p)),g.setAttribute("outputDirection",new Xt(x,p)),t.push(new Fe(g,null)),n>Dr&&n--}return{lodMeshes:t,sizeLods:e}}function im(s,e,t){let n=new rn(s,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ov(s,e,t){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function av(s,e,t){return new In({name:"SphericalGaussianBlur",defines:{SAMPLES:nv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function sm(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function rm(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bc=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _o(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ji(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:fi});r.uniforms.tEquirect.value=t;let o=new Fe(i,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Ut),new wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};function lv(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Rl||p===Cl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new bc(m.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let p=f.mapping,m=p===Rl||p===Cl,x=p===es||p===Ls;if(m||x){let g=t.get(f),d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Or(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let _=f.image;return m&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Or(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function a(f,p){return p===Rl?f.mapping=es:p===Cl&&(f.mapping=Ls),f}function l(f){let p=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function cv(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&xs("WebGLRenderer: "+n+" extension not supported."),i}}}function uv(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],s.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(p!==null){let _=p.array;x=p.version;for(let y=0,b=_.length;y<b;y+=3){let v=_[y+0],S=_[y+1],T=_[y+2];f.push(v,S,S,T,T,v)}}else{let _=m.array;x=m.version;for(let y=0,b=_.length/3-1;y<b;y+=3){let v=y+0,S=y+1,T=y+2;f.push(v,S,S,T,T,v)}}let g=new(m.count>=65535?Ms:mo)(f,1);g.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hv(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,u*o,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let x=0;for(let g=0;g<p;g++)x+=f[g];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function fv(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dv(s,e,t){let n=new WeakMap,i=new yt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;p===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let b=a.attributes.position.count*y,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*u),T=new po(S,b,v,u);T.type=Pn,T.needsUpdate=!0;let M=y*4;for(let C=0;C<u;C++){let A=g[C],L=d[C],P=_[C],R=b*v*4*C;for(let F=0;F<A.count;F++){let O=F*M;p===!0&&(i.fromBufferAttribute(A,F),S[R+O+0]=i.x,S[R+O+1]=i.y,S[R+O+2]=i.z,S[R+O+3]=0),m===!0&&(i.fromBufferAttribute(L,F),S[R+O+4]=i.x,S[R+O+5]=i.y,S[R+O+6]=i.z,S[R+O+7]=0),x===!0&&(i.fromBufferAttribute(P,F),S[R+O+8]=i.x,S[R+O+9]=i.y,S[R+O+10]=i.z,S[R+O+11]=P.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new Oe(b,v)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function pv(s,e,t,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var mv={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[rh]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function gv(s,e,t,n,i,r){let o=new rn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ge;c.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let h=new pl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Fe(c,h),f=new On(-1,1,1,-1,0,1),p=null,m=null,x=!1,g,d=null,_=[],y=!1;this.setSize=function(b,v){o.setSize(b,v),a!==null&&a.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<_.length;S++){let T=_[S];T.setSize&&T.setSize(b,v)}},this.setEffects=function(b){_=b,y=_.length>0&&_[0].isRenderPass===!0;let v=o.width,S=o.height;_.length>0&&a===null&&(a=new rn(v,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(v,S,{type:jn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<_.length;T++){let M=_[T];M.setSize&&M.setSize(v,S)}},this.begin=function(b,v){if(x||b.toneMapping===Kn&&_.length===0)return!1;if(d=v,v!==null){let S=v.width,T=v.height;(o.width!==S||o.height!==T)&&this.setSize(S,T)}return y===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=Kn,!0},this.hasRenderPass=function(){return y},this.end=function(b,v){b.toneMapping=g,x=!0;let S=o,T=a;for(let M=0;M<_.length;M++){let E=_[M];E.enabled!==!1&&(E.render(b,T,S,v),E.needsSwap!==!1&&(S=T,T=T===a?l:a))}if(p!==b.outputColorSpace||m!==b.toneMapping){p=b.outputColorSpace,m=b.toneMapping,h.defines={},Je.getTransfer(p)===pt&&(h.defines.SRGB_TRANSFER="");let M=mv[m];M&&(h.defines[M]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(d),b.render(u,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Tm=new qt,Uh=new Ji(1,1),Am=new po,Em=new ul,Rm=new _o,om=[],am=[],lm=new Float32Array(16),cm=new Float32Array(9),um=new Float32Array(4);function Br(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=om[i];if(r===void 0&&(r=new Float32Array(i),om[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yc(s,e){let t=am[e];t===void 0&&(t=new Int32Array(e),am[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function xv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function _v(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function yv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function vv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;um.set(n),s.uniformMatrix2fv(this.addr,!1,um),$t(t,n)}}function Mv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;cm.set(n),s.uniformMatrix3fv(this.addr,!1,cm),$t(t,n)}}function Sv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;lm.set(n),s.uniformMatrix4fv(this.addr,!1,lm),$t(t,n)}}function wv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Tv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function Av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function Ev(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function Rv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Cv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function Iv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function Pv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function Lv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uh.compareFunction=t.isReversedDepthBuffer()?mc:pc,r=Uh):r=Tm,t.setTexture2D(e||r,i)}function Fv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Em,i)}function Dv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rm,i)}function Nv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Am,i)}function Ov(s){switch(s){case 5126:return xv;case 35664:return bv;case 35665:return _v;case 35666:return yv;case 35674:return vv;case 35675:return Mv;case 35676:return Sv;case 5124:case 35670:return wv;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Ev;case 5125:return Rv;case 36294:return Cv;case 36295:return Iv;case 36296:return Pv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Dv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Uv(s,e){s.uniform1fv(this.addr,e)}function Bv(s,e){let t=Br(e,this.size,2);s.uniform2fv(this.addr,t)}function kv(s,e){let t=Br(e,this.size,3);s.uniform3fv(this.addr,t)}function zv(s,e){let t=Br(e,this.size,4);s.uniform4fv(this.addr,t)}function Vv(s,e){let t=Br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Gv(s,e){let t=Br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hv(s,e){let t=Br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Wv(s,e){s.uniform1iv(this.addr,e)}function Xv(s,e){s.uniform2iv(this.addr,e)}function qv(s,e){s.uniform3iv(this.addr,e)}function Yv(s,e){s.uniform4iv(this.addr,e)}function $v(s,e){s.uniform1uiv(this.addr,e)}function Kv(s,e){s.uniform2uiv(this.addr,e)}function Zv(s,e){s.uniform3uiv(this.addr,e)}function Jv(s,e){s.uniform4uiv(this.addr,e)}function jv(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Uh:o=Tm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Qv(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Em,r[o])}function eM(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rm,r[o])}function tM(s,e,t){let n=this.cache,i=e.length,r=yc(t,i);Yt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Am,r[o])}function nM(s){switch(s){case 5126:return Uv;case 35664:return Bv;case 35665:return kv;case 35666:return zv;case 35674:return Vv;case 35675:return Gv;case 35676:return Hv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Yv;case 5125:return $v;case 36294:return Kv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}var Bh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}},kh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nM(t.type)}},zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function hm(s,e){s.seq.push(e),s.map[e.id]=e}function iM(s,e,t){let n=s.name,i=n.length;for(Nh.lastIndex=0;;){let r=Nh.exec(n),o=Nh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){hm(t,c===void 0?new Bh(a,s,e):new kh(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new zh(a),hm(t,u)),t=u}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);iM(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function fm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var sM=37297,rM=0;function oM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var dm=new We;function aM(s){Je._getMatrix(dm,Je.workingColorSpace,s);let e=`mat3( ${dm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case ho:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+oM(s.getShaderSource(e),a)}else return r}function lM(s,e){let t=aM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var cM={[nh]:"Linear",[ih]:"Reinhard",[sh]:"Cineon",[rh]:"ACESFilmic",[ah]:"AgX",[lh]:"Neutral",[oh]:"Custom"};function uM(s,e){let t=cM[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xc=new k;function hM(){Je.getLuminanceCoefficients(xc);let s=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function dM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $o(s){return s!==""}function mm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(s){return s.replace(mM,xM)}var gM=new Map;function xM(s,e){let t=Ke[e];if(t===void 0){let n=gM.get(e);if(n!==void 0)t=Ke[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vh(t)}var bM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(s){return s.replace(bM,_M)}function _M(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function bm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var yM={[No]:"SHADOWMAP_TYPE_PCF",[Rr]:"SHADOWMAP_TYPE_VSM"};function vM(s){return yM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MM={[es]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Uo]:"ENVMAP_TYPE_CUBE_UV"};function SM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":MM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var wM={[Ls]:"ENVMAP_MODE_REFRACTION"};function TM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":wM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var AM={[El]:"ENVMAP_BLENDING_MULTIPLY",[Ip]:"ENVMAP_BLENDING_MIX",[Pp]:"ENVMAP_BLENDING_ADD"};function EM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":AM[s.combine]||"ENVMAP_BLENDING_NONE"}function RM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function CM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=vM(t),c=SM(t),h=TM(t),u=EM(t),f=RM(t),p=fM(t),m=dM(r),x=i.createProgram(),g,d,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($o).join(`
`),d.length>0&&(d+=`
`)):(g=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),d=[bm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Kn?uM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,lM("linearToOutputTexel",t.outputColorSpace),hM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=Vh(o),o=mm(o,t),o=gm(o,t),a=Vh(a),a=mm(a,t),a=gm(a,t),o=xm(o),a=xm(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let y=_+g+o,b=_+d+a,v=fm(i,i.VERTEX_SHADER,y),S=fm(i,i.FRAGMENT_SHADER,b);i.attachShader(x,v),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(A){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x)||"",P=i.getShaderInfoLog(v)||"",R=i.getShaderInfoLog(S)||"",F=L.trim(),O=P.trim(),U=R.trim(),V=!0,z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,v,S);else{let B=pm(i,v,"vertex"),H=pm(i,S,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+B+`
`+H)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(O===""||U==="")&&(z=!1);z&&(A.diagnostics={runnable:V,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:U,prefix:d}})}i.deleteShader(v),i.deleteShader(S),M=new Nr(i,x),E=pM(i,x)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,sM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=S,this}var IM=0,Gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hh(e),t.set(e,n)),n}},Hh=class{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}};function PM(s){return s===ns||s===Go||s===Ho}function LM(s,e,t,n,i,r){let o=new yr,a=new Gh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,E,C,A,L,P){let R=A.fog,F=L.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?A.environment:null,U=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=e.get(M.envMap||O,U),z=V&&V.mapping===Uo?V.image.height:null,B=p[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Ie("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=H!==void 0?H.length:0,Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let ce,ue,Be,q;if(B){let Et=mi[B];ce=Et.vertexShader,ue=Et.fragmentShader}else{ce=M.vertexShader,ue=M.fragmentShader;let Et=a.getVertexShaderStage(M),ht=a.getFragmentShaderStage(M);a.update(M,Et,ht),Be=Et.id,q=ht.id}let Z=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,ze=!!M.map,st=!!M.matcap,Ne=!!V,Ze=!!M.aoMap,ot=!!M.lightMap,je=!!M.bumpMap&&M.wireframe===!1,It=!!M.normalMap,Jt=!!M.displacementMap,mn=!!M.emissiveMap,Pt=!!M.metalnessMap,Vt=!!M.roughnessMap,X=M.anisotropy>0,en=M.clearcoat>0,bt=M.dispersion>0,N=M.retroreflectivity>0,w=M.iridescence>0,Y=M.sheen>0,J=M.transmission>0,ne=X&&!!M.anisotropyMap,le=en&&!!M.clearcoatMap,he=en&&!!M.clearcoatNormalMap,ie=en&&!!M.clearcoatRoughnessMap,re=w&&!!M.iridescenceMap,fe=w&&!!M.iridescenceThicknessMap,Pe=Y&&!!M.sheenColorMap,xe=Y&&!!M.sheenRoughnessMap,de=!!M.specularMap,Le=!!M.specularColorMap,ke=!!M.specularIntensityMap,qe=J&&!!M.transmissionMap,W=J&&!!M.thicknessMap,pe=!!M.gradientMap,se=!!M.alphaMap,me=M.alphaTest>0,ve=!!M.alphaHash,oe=!!M.extensions,De=Kn;M.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=s.toneMapping);let Re={shaderID:B,shaderType:M.type,shaderName:M.name,vertexShader:ce,fragmentShader:ue,defines:M.defines,customVertexShaderID:Be,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ze,matcap:st,envMap:Ne,envMapMode:Ne&&V.mapping,envMapCubeUVHeight:z,aoMap:Ze,lightMap:ot,bumpMap:je,normalMap:It,displacementMap:Jt,emissiveMap:mn,normalMapObjectSpace:It&&M.normalMapType===Np,normalMapTangentSpace:It&&M.normalMapType===Xo,packedNormalMap:It&&M.normalMapType===Xo&&PM(M.normalMap.format),metalnessMap:Pt,roughnessMap:Vt,anisotropy:X,anisotropyMap:ne,clearcoat:en,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:ie,dispersion:bt,retroreflection:N,iridescence:w,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:de,specularColorMap:Le,specularIntensityMap:ke,transmission:J,transmissionMap:qe,thicknessMap:W,gradientMap:pe,opaque:M.transparent===!1&&M.blending===di&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:ve,combine:M.combine,mapUv:ze&&m(M.map.channel),aoMapUv:Ze&&m(M.aoMap.channel),lightMapUv:ot&&m(M.lightMap.channel),bumpMapUv:je&&m(M.bumpMap.channel),normalMapUv:It&&m(M.normalMap.channel),displacementMapUv:Jt&&m(M.displacementMap.channel),emissiveMapUv:mn&&m(M.emissiveMap.channel),metalnessMapUv:Pt&&m(M.metalnessMap.channel),roughnessMapUv:Vt&&m(M.roughnessMap.channel),anisotropyMapUv:ne&&m(M.anisotropyMap.channel),clearcoatMapUv:le&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(M.sheenRoughnessMap.channel),specularMapUv:de&&m(M.specularMap.channel),specularColorMapUv:Le&&m(M.specularColorMap.channel),specularIntensityMapUv:ke&&m(M.specularIntensityMap.channel),transmissionMapUv:qe&&m(M.transmissionMap.channel),thicknessMapUv:W&&m(M.thicknessMap.channel),alphaMapUv:se&&m(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(It||X),vertexNormals:!!F.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ze||se),fog:!!R,useFog:M.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||F.attributes.normal===void 0&&It===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:ze&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===pt,decodeVideoTextureEmissive:mn&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===pt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===St,flipSided:M.side===Qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&M.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)E.push(C),E.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(d(E,M),_(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function d(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numSunLights),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numSunLightShadows),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function y(M){let E=p[M.type],C;if(E){let A=mi[E];C=Qp.clone(A.uniforms)}else C=M.uniforms;return C}function b(M,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new CM(s,E,M,i),c.push(C),h.set(E,C)),C}function v(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),h.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:T}}function FM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function DM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function _m(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ym(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,x,g,d){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},s[e]=_):(_.id=f.id,_.object=f,_.geometry=p,_.material=m,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=g,_.group=d),e++,_}function l(f,p,m,x,g,d,_){_.reversedDepth===!0&&(g=-g);let y=a(f,p,m,x,g,d);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):t.push(y)}function c(f,p,m,x,g,d){let _=a(f,p,m,x,g,d);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function h(f,p){t.length>1&&t.sort(f||DM),n.length>1&&n.sort(p||_m),i.length>1&&i.sort(p||_m)}function u(){for(let f=e,p=s.length;f<p;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function NM(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ym,s.set(n,[o])):i>=r.length?(o=new ym,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function OM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new j};break;case"SpotLight":t={position:new k,direction:new k,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function UM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var BM=0;function kM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zM(s){let e=new OM,t=UM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,r=new Xe,o=new Xe;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,_=0,y=0,b=0,v=0,S=0,T=0,M=0,E=0,C=0;c.sort(kM);for(let L=0,P=c.length;L<P;L++){let R=c[L],F=R.color,O=R.intensity,U=R.distance,V=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ns?V=R.shadow.map.texture:V=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],O);C++}else if(R.isSunLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let B=R.shadow,H=t.get(R);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=V;let ee=B.getViewportCount();for(let Q=0;Q<ee;Q++)n.sunShadowMatrix[x+Q]=B.getMatrix(Q),n.sunShadowCascade[x+Q]=B._cascadeData[Q];x+=ee,m++}n.sun[p]=z,p++}else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let B=R.shadow,H=t.get(R);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=R.shadow.matrix,v++}n.directional[g]=z,g++}else if(R.isSpotLight){let z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(F).multiplyScalar(O),z.distance=U,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[_]=z;let B=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,B.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=B.matrix,R.castShadow){let H=t.get(R);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=V,T++}_++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(F).multiplyScalar(O),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=z,y++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let B=R.shadow,H=t.get(R);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,n.pointShadow[d]=H,n.pointShadowMap[d]=V,n.pointShadowMatrix[d]=R.shadow.matrix,S++}n.point[d]=z,d++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(O),z.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[b]=z,b++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.sunLength!==p||A.directionalLength!==g||A.pointLength!==d||A.spotLength!==_||A.rectAreaLength!==y||A.hemiLength!==b||A.numSunShadows!==m||A.numDirectionalShadows!==v||A.numPointShadows!==S||A.numSpotShadows!==T||A.numSpotMaps!==M||A.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=g,n.spot.length=_,n.rectArea.length=y,n.point.length=d,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,A.sunLength=p,A.directionalLength=g,A.pointLength=d,A.spotLength=_,A.rectAreaLength=y,A.hemiLength=b,A.numSunShadows=m,A.numDirectionalShadows=v,A.numPointShadows=S,A.numSpotShadows=T,A.numSpotMaps=M,A.numLightProbes=C,n.version=BM++)}function l(c,h){let u=0,f=0,p=0,m=0,x=0,g=0,d=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let b=c[_];if(b.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(d),u++}else if(b.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(d),f++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(d),m++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(d),o.identity(),r.copy(b.matrixWorld),r.premultiply(d),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(d),g++}}}return{setup:a,setupView:l,state:n}}function vm(s){let e=new zM(s),t=[],n=[],i=[];function r(f){u.camera=f,t.length=0,n.length=0,i.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function VM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new vm(s),e.set(i,[a])):r>=o.length?(a=new vm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`,WM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],XM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Mm=new Xe,Yo=new k,Oh=new k;function qM(s,e,t){let n=new wr,i=new Oe,r=new Oe,o=new yt,a=new ml,l=new gl,c={},h=t.maxTextureSize,u={[hi]:Qt,[Qt]:hi,[St]:St},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:GM,fragmentShader:HM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let d=this.type;this.render=function(S,T,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===hp&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);let E=s.getRenderTarget(),C=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),L=s.state;L.setBlending(fi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=d!==this.type;P&&T.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(F=>F.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,F=S.length;R<F;R++){let O=S[R],U=O.shadow;if(U===void 0){Ie("WebGLShadowMap:",O,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();i.multiply(V),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,U.mapSize.y=r.y));let z=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=z,U.map===null||P===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Rr){if(O.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new rn(i.x,i.y,{format:ns,type:jn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),U.map.texture.name=O.name+".shadowMap",U.map.depthTexture=new Ji(i.x,i.y,Pn),U.map.depthTexture.name=O.name+".shadowMapDepth",U.map.depthTexture.format=ri,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot}else O.isPointLight?(U.map=new bc(i.x),U.map.depthTexture=new dl(i.x,Jn)):(U.map=new rn(i.x,i.y),U.map.depthTexture=new Ji(i.x,i.y,Jn)),U.map.depthTexture.name=O.name+".shadowMap",U.map.depthTexture.format=ri,this.type===No?(U.map.depthTexture.compareFunction=z?mc:pc,U.map.depthTexture.minFilter=Ut,U.map.depthTexture.magFilter=Ut):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let B=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();O.isPointLight!==!0&&U.updateMatrices(O,M);for(let H=0;H<B;H++){let ee=U.getCamera(H);if(O.isPointLight){let Q=U.camera,ce=U.matrix,ue=O.distance||Q.far;ue!==Q.far&&(Q.far=ue,Q.updateProjectionMatrix()),Yo.setFromMatrixPosition(O.matrixWorld),Q.position.copy(Yo),Oh.copy(Q.position),Oh.add(WM[H]),Q.up.copy(XM[H]),Q.lookAt(Oh),Q.updateMatrixWorld(),ce.makeTranslation(-Yo.x,-Yo.y,-Yo.z),Mm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Mm,Q.coordinateSystem,Q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,H),s.clear();else{H===0&&(s.setRenderTarget(U.map),s.clear());let Q=U.getViewport(H);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o)}n=U.getFrustum(H),b(T,M,ee,O,this.type)}U.isPointLightShadow!==!0&&this.type===Rr&&_(U,M),U.needsUpdate=!1}d=this.type,g.needsUpdate=!1,s.setRenderTarget(E,C,A)};function _(S,T){let M=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new rn(i.x,i.y,{format:ns,type:jn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(T,null,M,f,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(T,null,M,p,x,null)}function y(S,T,M,E){let C=null,A=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)C=A;else if(C=M.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=C.uuid,P=T.uuid,R=c[L];R===void 0&&(R={},c[L]=R);let F=R[P];F===void 0&&(F=C.clone(),R[P]=F,T.addEventListener("dispose",v)),C=F}if(C.visible=T.visible,C.wireframe=T.wireframe,E===Rr?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=s.properties.get(C);L.light=M}return C}function b(S,T,M,E,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Rr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let P=e.update(S),R=S.material;if(Array.isArray(R)){let F=P.groups;for(let O=0,U=F.length;O<U;O++){let V=F[O],z=R[V.materialIndex];if(z&&z.visible){let B=y(S,z,E,C);S.onBeforeShadow(s,S,T,M,P,B,V),s.renderBufferDirect(M,null,P,B,S,V),S.onAfterShadow(s,S,T,M,P,B,V)}}}else if(R.visible){let F=y(S,R,E,C);S.onBeforeShadow(s,S,T,M,P,F,null),s.renderBufferDirect(M,null,P,F,S,null),S.onAfterShadow(s,S,T,M,P,F,null)}}let L=S.children;for(let P=0,R=L.length;P<R;P++)b(L[P],T,M,E,C)}function v(S){S.target.removeEventListener("dispose",v);for(let M in c){let E=c[M],C=S.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function YM(s,e){function t(){let W=!1,pe=new yt,se=null,me=new yt(0,0,0,0);return{setMask:function(ve){se!==ve&&!W&&(s.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){W=ve},setClear:function(ve,oe,De,Re,Et){Et===!0&&(ve*=Re,oe*=Re,De*=Re),pe.set(ve,oe,De,Re),me.equals(pe)===!1&&(s.clearColor(ve,oe,De,Re),me.copy(pe))},reset:function(){W=!1,se=null,me.set(-1,0,0,0)}}}function n(){let W=!1,pe=!1,se=null,me=null,ve=null;return{setReversed:function(oe){if(pe!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=oe;let Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(oe){oe?Z(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(oe){se!==oe&&!W&&(s.depthMask(oe),se=oe)},setFunc:function(oe){if(pe&&(oe=qp[oe]),me!==oe){switch(oe){case tl:s.depthFunc(s.NEVER);break;case nl:s.depthFunc(s.ALWAYS);break;case il:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case sl:s.depthFunc(s.EQUAL);break;case rl:s.depthFunc(s.GEQUAL);break;case ol:s.depthFunc(s.GREATER);break;case al:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=oe}},setLocked:function(oe){W=oe},setClear:function(oe){ve!==oe&&(ve=oe,pe&&(oe=1-oe),s.clearDepth(oe))},reset:function(){W=!1,se=null,me=null,ve=null,pe=!1}}}function i(){let W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,Et=null;return{setTest:function(ht){W||(ht?Z(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(ht){pe!==ht&&!W&&(s.stencilMask(ht),pe=ht)},setFunc:function(ht,zn,ti){(se!==ht||me!==zn||ve!==ti)&&(s.stencilFunc(ht,zn,ti),se=ht,me=zn,ve=ti)},setOp:function(ht,zn,ti){(oe!==ht||De!==zn||Re!==ti)&&(s.stencilOp(ht,zn,ti),oe=ht,De=zn,Re=ti)},setLocked:function(ht){W=ht},setClear:function(ht){Et!==ht&&(s.clearStencil(ht),Et=ht)},reset:function(){W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,Et=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,_=null,y=null,b=null,v=null,S=null,T=null,M=new j(0,0,0),E=0,C=!1,A=null,L=null,P=null,R=null,F=null,O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),U=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),U=V>=2);let B=null,H={},ee=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),ce=new yt().fromArray(ee),ue=new yt().fromArray(Q);function Be(W,pe,se,me){let ve=new Uint8Array(4),oe=s.createTexture();s.bindTexture(W,oe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<se;De++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(pe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return oe}let q={};q[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(pr),je(!1),It(ju),Z(s.CULL_FACE),Ze(fi);function Z(W){h[W]!==!0&&(s.enable(W),h[W]=!0)}function ae(W){h[W]!==!1&&(s.disable(W),h[W]=!1)}function we(W,pe){return f[W]!==pe?(s.bindFramebuffer(W,pe),f[W]=pe,W===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=pe),W===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function ge(W,pe){let se=m,me=!1;if(W){se=p.get(pe),se===void 0&&(se=[],p.set(pe,se));let ve=W.textures;if(se.length!==ve.length||se[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,De=ve.length;oe<De;oe++)se[oe]=s.COLOR_ATTACHMENT0+oe;se.length=ve.length,me=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,me=!0);me&&s.drawBuffers(se)}function ze(W){return x!==W?(s.useProgram(W),x=W,!0):!1}let st={[Ps]:s.FUNC_ADD,[dp]:s.FUNC_SUBTRACT,[pp]:s.FUNC_REVERSE_SUBTRACT};st[mp]=s.MIN,st[gp]=s.MAX;let Ne={[xp]:s.ZERO,[bp]:s.ONE,[_p]:s.SRC_COLOR,[eh]:s.SRC_ALPHA,[Tp]:s.SRC_ALPHA_SATURATE,[Sp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[yp]:s.ONE_MINUS_SRC_COLOR,[th]:s.ONE_MINUS_SRC_ALPHA,[wp]:s.ONE_MINUS_DST_COLOR,[Mp]:s.ONE_MINUS_DST_ALPHA,[Ap]:s.CONSTANT_COLOR,[Ep]:s.ONE_MINUS_CONSTANT_COLOR,[Rp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function Ze(W,pe,se,me,ve,oe,De,Re,Et,ht){if(W===fi){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&(Z(s.BLEND),g=!0),W!==fp){if(W!==d||ht!==C){if((_!==Ps||v!==Ps)&&(s.blendEquation(s.FUNC_ADD),_=Ps,v=Ps),ht)switch(W){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mt:s.blendFunc(s.ONE,s.ONE);break;case Qu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",W);break}else switch(W){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oo:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",W);break}y=null,b=null,S=null,T=null,M.set(0,0,0),E=0,d=W,C=ht}return}ve=ve||pe,oe=oe||se,De=De||me,(pe!==_||ve!==v)&&(s.blendEquationSeparate(st[pe],st[ve]),_=pe,v=ve),(se!==y||me!==b||oe!==S||De!==T)&&(s.blendFuncSeparate(Ne[se],Ne[me],Ne[oe],Ne[De]),y=se,b=me,S=oe,T=De),(Re.equals(M)===!1||Et!==E)&&(s.blendColor(Re.r,Re.g,Re.b,Et),M.copy(Re),E=Et),d=W,C=!1}function ot(W,pe){W.side===St?ae(s.CULL_FACE):Z(s.CULL_FACE);let se=W.side===Qt;pe&&(se=!se),je(se),W.blending===di&&W.transparent===!1?Ze(fi):Ze(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let me=W.stencilWrite;a.setTest(me),me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),mn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function It(W){W!==cp?(Z(s.CULL_FACE),W!==L&&(W===ju?s.cullFace(s.BACK):W===up?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),L=W}function Jt(W){W!==P&&(U&&s.lineWidth(W),P=W)}function mn(W,pe,se){W?(Z(s.POLYGON_OFFSET_FILL),(R!==pe||F!==se)&&(R=pe,F=se,o.getReversed()&&(pe=-pe),s.polygonOffset(pe,se))):ae(s.POLYGON_OFFSET_FILL)}function Pt(W){W?Z(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function Vt(W){W===void 0&&(W=s.TEXTURE0+O-1),B!==W&&(s.activeTexture(W),B=W)}function X(W,pe,se){se===void 0&&(B===null?se=s.TEXTURE0+O-1:se=B);let me=H[se];me===void 0&&(me={type:void 0,texture:void 0},H[se]=me),(me.type!==W||me.texture!==pe)&&(B!==se&&(s.activeTexture(se),B=se),s.bindTexture(W,pe||q[W]),me.type=W,me.texture=pe)}function en(){let W=H[B];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function bt(){try{s.compressedTexImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function N(){try{s.compressedTexImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function w(){try{s.texSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Y(){try{s.texSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ne(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function le(){try{s.texStorage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function he(){try{s.texStorage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ie(){try{s.texImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function re(){try{s.texImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function fe(W){return u[W]!==void 0?u[W]:s.getParameter(W)}function Pe(W,pe){u[W]!==pe&&(s.pixelStorei(W,pe),u[W]=pe)}function xe(W){ce.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function de(W){ue.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ue.copy(W))}function Le(W,pe){let se=c.get(pe);se===void 0&&(se=new WeakMap,c.set(pe,se));let me=se.get(W);me===void 0&&(me=s.getUniformBlockIndex(pe,W.name),se.set(W,me))}function ke(W,pe){let me=c.get(pe).get(W);l.get(pe)!==me&&(s.uniformBlockBinding(pe,me,W.__bindingPointIndex),l.set(pe,me))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},B=null,H={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,_=null,y=null,b=null,v=null,S=null,T=null,M=new j(0,0,0),E=0,C=!1,A=null,L=null,P=null,R=null,F=null,ce.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ae,bindFramebuffer:we,drawBuffers:ge,useProgram:ze,setBlending:Ze,setMaterial:ot,setFlipSided:je,setCullFace:It,setLineWidth:Jt,setPolygonOffset:mn,setScissorTest:Pt,activeTexture:Vt,bindTexture:X,unbindTexture:en,compressedTexImage2D:bt,compressedTexImage3D:N,texImage2D:ie,texImage3D:re,pixelStorei:Pe,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:ke,texStorage2D:le,texStorage3D:he,texSubImage2D:w,texSubImage3D:Y,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:xe,viewport:de,reset:qe}}function $M(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,u=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,w){return m?new OffscreenCanvas(N,w):xr("canvas")}function g(N,w,Y){let J=1,ne=bt(N);if((ne.width>Y||ne.height>Y)&&(J=Y/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let le=Math.floor(J*ne.width),he=Math.floor(J*ne.height);f===void 0&&(f=x(le,he));let ie=w?x(le,he):f;return ie.width=le,ie.height=he,ie.getContext("2d").drawImage(N,0,0,le,he),Ie("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+le+"x"+he+")."),ie}else return"data"in N&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),N;return N}function d(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(N,w,Y,J,ne,le=!1){if(N!==null){if(s[N]!==void 0)return s[N];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let he;J&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=w;if(w===s.RED&&(Y===s.FLOAT&&(ie=s.R32F),Y===s.HALF_FLOAT&&(ie=s.R16F),Y===s.UNSIGNED_BYTE&&(ie=s.R8),Y===s.UNSIGNED_SHORT&&he&&(ie=he.R16_EXT),Y===s.SHORT&&he&&(ie=he.R16_SNORM_EXT)),w===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.R8UI),Y===s.UNSIGNED_SHORT&&(ie=s.R16UI),Y===s.UNSIGNED_INT&&(ie=s.R32UI),Y===s.BYTE&&(ie=s.R8I),Y===s.SHORT&&(ie=s.R16I),Y===s.INT&&(ie=s.R32I)),w===s.RG&&(Y===s.FLOAT&&(ie=s.RG32F),Y===s.HALF_FLOAT&&(ie=s.RG16F),Y===s.UNSIGNED_BYTE&&(ie=s.RG8),Y===s.UNSIGNED_SHORT&&he&&(ie=he.RG16_EXT),Y===s.SHORT&&he&&(ie=he.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RG16UI),Y===s.UNSIGNED_INT&&(ie=s.RG32UI),Y===s.BYTE&&(ie=s.RG8I),Y===s.SHORT&&(ie=s.RG16I),Y===s.INT&&(ie=s.RG32I)),w===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),Y===s.UNSIGNED_INT&&(ie=s.RGB32UI),Y===s.BYTE&&(ie=s.RGB8I),Y===s.SHORT&&(ie=s.RGB16I),Y===s.INT&&(ie=s.RGB32I)),w===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ie=s.RGBA32UI),Y===s.BYTE&&(ie=s.RGBA8I),Y===s.SHORT&&(ie=s.RGBA16I),Y===s.INT&&(ie=s.RGBA32I)),w===s.RGB&&(Y===s.UNSIGNED_SHORT&&he&&(ie=he.RGB16_EXT),Y===s.SHORT&&he&&(ie=he.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),w===s.RGBA){let re=le?ho:Je.getTransfer(ne);Y===s.FLOAT&&(ie=s.RGBA32F),Y===s.HALF_FLOAT&&(ie=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ie=re===pt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&he&&(ie=he.RGBA16_EXT),Y===s.SHORT&&he&&(ie=he.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(N,w){let Y;return N?w===null||w===Jn||w===Pr?Y=s.DEPTH24_STENCIL8:w===Pn?Y=s.DEPTH32F_STENCIL8:w===Ir&&(Y=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Jn||w===Pr?Y=s.DEPTH_COMPONENT24:w===Pn?Y=s.DEPTH_COMPONENT32F:w===Ir&&(Y=s.DEPTH_COMPONENT16),Y}function S(N,w){return d(N)===!0||N.isFramebufferTexture&&N.minFilter!==Ot&&N.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function T(N){let w=N.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function M(N){let w=N.target;w.removeEventListener("dispose",M),A(w)}function E(N){let w=n.get(N);if(w.__webglInit===void 0)return;let Y=N.source,J=p.get(Y);if(J){let ne=J[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&C(N),Object.keys(J).length===0&&p.delete(Y)}n.remove(N)}function C(N){let w=n.get(N);s.deleteTexture(w.__webglTexture);let Y=N.source,J=p.get(Y);delete J[w.__cacheKey],o.memory.textures--}function A(N){let w=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let ne=0;ne<w.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(w.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)s.deleteFramebuffer(w.__webglFramebuffer[J]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let Y=N.textures;for(let J=0,ne=Y.length;J<ne;J++){let le=n.get(Y[J]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Y[J])}n.remove(N)}let L=0;function P(){L=0}function R(){return L}function F(N){L=N}function O(){let N=L;return N>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,N}function U(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function V(N,w){let Y=n.get(N);if(N.isVideoTexture&&X(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){let J=N.image;if(J===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,N,w);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+w)}function z(N,w){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ae(Y,N,w);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+w)}function B(N,w){let Y=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){ae(Y,N,w);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+w)}function H(N,w){let Y=n.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){we(Y,N,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+w)}let ee={[$n]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[mr]:s.MIRRORED_REPEAT},Q={[Ot]:s.NEAREST,[Il]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},ce={[Up]:s.NEVER,[Gp]:s.ALWAYS,[Bp]:s.LESS,[pc]:s.LEQUAL,[kp]:s.EQUAL,[mc]:s.GEQUAL,[zp]:s.GREATER,[Vp]:s.NOTEQUAL};function ue(N,w){if(w.type===Pn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===Cr||w.magFilter===Fs||w.magFilter===Zn||w.minFilter===Ut||w.minFilter===Cr||w.minFilter===Fs||w.minFilter===Zn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ee[w.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ee[w.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ee[w.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,Q[w.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ot||w.minFilter!==Fs&&w.minFilter!==Zn||w.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Be(N,w){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",T));let J=w.source,ne=p.get(J);ne===void 0&&(ne={},p.set(J,ne));let le=U(w);if(le!==N.__cacheKey){ne[le]===void 0&&(ne[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[le].usedTimes++;let he=ne[N.__cacheKey];he!==void 0&&(ne[N.__cacheKey].usedTimes--,he.usedTimes===0&&C(w)),N.__cacheKey=le,N.__webglTexture=ne[le].texture}return Y}function q(N,w,Y){return Math.floor(Math.floor(N/Y)/w)}function Z(N,w,Y,J){let le=N.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Y,J,w.data);else{le.sort((Pe,xe)=>Pe.start-xe.start);let he=0;for(let Pe=1;Pe<le.length;Pe++){let xe=le[he],de=le[Pe],Le=xe.start+xe.count,ke=q(de.start,w.width,4),qe=q(xe.start,w.width,4);de.start<=Le+1&&ke===qe&&q(de.start+de.count-1,w.width,4)===ke?xe.count=Math.max(xe.count,de.start+de.count-xe.start):(++he,le[he]=de)}le.length=he+1;let ie=t.getParameter(s.UNPACK_ROW_LENGTH),re=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Pe=0,xe=le.length;Pe<xe;Pe++){let de=le[Pe],Le=Math.floor(de.start/4),ke=Math.ceil(de.count/4),qe=Le%w.width,W=Math.floor(Le/w.width),pe=ke,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,qe,W,pe,se,Y,J,w.data)}N.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ie),t.pixelStorei(s.UNPACK_SKIP_PIXELS,re),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function ae(N,w,Y){let J=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=s.TEXTURE_3D);let ne=Be(N,w),le=w.source;t.bindTexture(J,N.__webglTexture,s.TEXTURE0+Y);let he=n.get(le);if(le.version!==he.__version||ne===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),me=w.colorSpace===Ni?null:Je.getPrimaries(w.colorSpace),ve=w.colorSpace===Ni||se===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let re=g(w.image,!1,i.maxTextureSize);re=en(w,re);let fe=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type),xe=b(w.internalFormat,fe,Pe,w.normalized,w.colorSpace,w.isVideoTexture);ue(J,w);let de,Le=w.mipmaps,ke=w.isVideoTexture!==!0,qe=he.__version===void 0||ne===!0,W=le.dataReady,pe=S(w,re);if(w.isDepthTexture)xe=v(w.format===ts,w.type),qe&&(ke?t.texStorage2D(s.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Pe,null));else if(w.isDataTexture)if(Le.length>0){ke&&qe&&t.texStorage2D(s.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],ke?W&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,xe,de.width,de.height,0,fe,Pe,de.data);w.generateMipmaps=!1}else ke?(qe&&t.texStorage2D(s.TEXTURE_2D,pe,xe,re.width,re.height),W&&Z(w,re,fe,Pe)):t.texImage2D(s.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Pe,re.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ke&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,xe,Le[0].width,Le[0].height,re.depth);for(let se=0,me=Le.length;se<me;se++)if(de=Le[se],w.format!==Ln)if(fe!==null)if(ke){if(W)if(w.layerUpdates.size>0){let ve=Th(de.width,de.height,w.format,w.type);for(let oe of w.layerUpdates){let De=de.data.subarray(oe*ve/de.data.BYTES_PER_ELEMENT,(oe+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,oe,de.width,de.height,1,fe,De)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,xe,de.width,de.height,re.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,Pe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,xe,de.width,de.height,re.depth,0,fe,Pe,de.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ke&&qe&&t.texStorage2D(s.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],w.format!==Ln?fe!==null?ke?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(s.TEXTURE_2D,se,xe,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?W&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,xe,de.width,de.height,0,fe,Pe,de.data)}else if(w.isDataArrayTexture)if(ke){if(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,xe,re.width,re.height,re.depth),W)if(w.layerUpdates.size>0){let se=Th(re.width,re.height,w.format,w.type);for(let me of w.layerUpdates){let ve=re.data.subarray(me*se/re.data.BYTES_PER_ELEMENT,(me+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,re.width,re.height,1,fe,Pe,ve)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(w.isData3DTexture)ke?(qe&&t.texStorage3D(s.TEXTURE_3D,pe,xe,re.width,re.height,re.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)):t.texImage3D(s.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(w.isFramebufferTexture){if(qe)if(ke)t.texStorage2D(s.TEXTURE_2D,pe,xe,re.width,re.height);else{let se=re.width,me=re.height;for(let ve=0;ve<pe;ve++)t.texImage2D(s.TEXTURE_2D,ve,xe,se,me,0,fe,Pe,null),se>>=1,me>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),u.add(w),se.onpaint=me=>{let ve=me.changedElements;for(let oe of u)ve.includes(oe.image)&&(oe.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,re);else{let ve=s.RGBA,oe=s.RGBA,De=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ve,oe,De,re)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Le.length>0){if(ke&&qe){let se=bt(Le[0]);t.texStorage2D(s.TEXTURE_2D,pe,xe,se.width,se.height)}for(let se=0,me=Le.length;se<me;se++)de=Le[se],ke?W&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,fe,Pe,de):t.texImage2D(s.TEXTURE_2D,se,xe,fe,Pe,de);w.generateMipmaps=!1}else if(ke){if(qe){let se=bt(re);t.texStorage2D(s.TEXTURE_2D,pe,xe,se.width,se.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Pe,re)}else t.texImage2D(s.TEXTURE_2D,0,xe,fe,Pe,re);d(w)&&_(J),he.__version=le.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function we(N,w,Y){if(w.image.length!==6)return;let J=Be(N,w),ne=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+Y);let le=n.get(ne);if(ne.version!==le.__version||J===!0){t.activeTexture(s.TEXTURE0+Y);let he=Je.getPrimaries(Je.workingColorSpace),ie=w.colorSpace===Ni?null:Je.getPrimaries(w.colorSpace),re=w.colorSpace===Ni||he===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let fe=w.isCompressedTexture||w.image[0].isCompressedTexture,Pe=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!fe&&!Pe?xe[oe]=g(w.image[oe],!0,i.maxCubemapSize):xe[oe]=Pe?w.image[oe].image:w.image[oe],xe[oe]=en(w,xe[oe]);let de=xe[0],Le=r.convert(w.format,w.colorSpace),ke=r.convert(w.type),qe=b(w.internalFormat,Le,ke,w.normalized,w.colorSpace),W=w.isVideoTexture!==!0,pe=le.__version===void 0||J===!0,se=ne.dataReady,me=S(w,de);ue(s.TEXTURE_CUBE_MAP,w);let ve;if(fe){W&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,qe,de.width,de.height);for(let oe=0;oe<6;oe++){ve=xe[oe].mipmaps;for(let De=0;De<ve.length;De++){let Re=ve[De];w.format!==Ln?Le!==null?W?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,ke,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Le,ke,Re.data)}}}else{if(ve=w.mipmaps,W&&pe){ve.length>0&&me++;let oe=bt(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Pe){W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Le,ke,xe[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,xe[oe].width,xe[oe].height,0,Le,ke,xe[oe].data);for(let De=0;De<ve.length;De++){let Et=ve[De].image[oe].image;W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Et.width,Et.height,Le,ke,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,Et.width,Et.height,0,Le,ke,Et.data)}}else{W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,ke,xe[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Le,ke,xe[oe]);for(let De=0;De<ve.length;De++){let Re=ve[De];W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Le,ke,Re.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,Le,ke,Re.image[oe])}}}d(w)&&_(s.TEXTURE_CUBE_MAP),le.__version=ne.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ge(N,w,Y,J,ne,le){let he=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),re=b(Y.internalFormat,he,ie,Y.normalized,Y.colorSpace),fe=n.get(w),Pe=n.get(Y);if(Pe.__renderTarget=w,!fe.__hasExternalTextures){let xe=Math.max(1,w.width>>le),de=Math.max(1,w.height>>le);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,le,re,xe,de,w.depth,0,he,ie,null):t.texImage2D(ne,le,re,xe,de,0,he,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),Vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ne,Pe.__webglTexture,0,Pt(w)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ne,Pe.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(N,w,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,N),w.depthBuffer){let J=w.depthTexture,ne=J&&J.isDepthTexture?J.type:null,le=v(w.stencilBuffer,ne),he=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(w),le,w.width,w.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(w),le,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,le,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,N)}else{let J=w.textures;for(let ne=0;ne<J.length;ne++){let le=J[ne],he=r.convert(le.format,le.colorSpace),ie=r.convert(le.type),re=b(le.internalFormat,he,ie,le.normalized,le.colorSpace);Vt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pt(w),re,w.width,w.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt(w),re,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,re,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(N,w,Y){let J=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(w.depthTexture);if(ne.__renderTarget=w,(!ne.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),ue(s.TEXTURE_CUBE_MAP,w.depthTexture);let fe=r.convert(w.depthTexture.format),Pe=r.convert(w.depthTexture.type),xe;w.depthTexture.format===ri?xe=s.DEPTH_COMPONENT24:w.depthTexture.format===ts&&(xe=s.DEPTH24_STENCIL8);for(let de=0;de<6;de++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,xe,w.width,w.height,0,fe,Pe,null)}}else V(w.depthTexture,0);let le=ne.__webglTexture,he=Pt(w),ie=J?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,re=w.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ri)Vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,le,0);else if(w.depthTexture.format===ts)Vt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(N){let w=n.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let J=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){let ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=J}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let J=0;J<6;J++)st(w.__webglFramebuffer[J],N,J);else{let J=N.texture.mipmaps;J&&J.length>0?st(w.__webglFramebuffer[0],N,0):st(w.__webglFramebuffer,N,0)}else if(Y){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=s.createRenderbuffer(),ze(w.__webglDepthbuffer[J],N,!1);else{let ne=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,le)}}else{let J=N.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ze(w.__webglDepthbuffer,N,!1);else{let ne=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(N,w,Y){let J=n.get(N);w!==void 0&&ge(J.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Ne(N)}function ot(N){let w=N.texture,Y=n.get(N),J=n.get(w);N.addEventListener("dispose",M);let ne=N.textures,le=N.isWebGLCubeRenderTarget===!0,he=ne.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=w.version,o.memory.textures++),le){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let re=0;re<w.mipmaps.length;re++)Y.__webglFramebuffer[ie][re]=s.createFramebuffer()}else Y.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(he)for(let ie=0,re=ne.length;ie<re;ie++){let fe=n.get(ne[ie]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(N.samples>0&&Vt(N)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let re=ne[ie];Y.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let fe=r.convert(re.format,re.colorSpace),Pe=r.convert(re.type),xe=b(re.internalFormat,fe,Pe,re.normalized,re.colorSpace,N.isXRRenderTarget===!0),de=Pt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,xe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(Y.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ue(s.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let re=0;re<w.mipmaps.length;re++)ge(Y.__webglFramebuffer[ie][re],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else ge(Y.__webglFramebuffer[ie],N,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);d(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ie=0,re=ne.length;ie<re;ie++){let fe=ne[ie],Pe=n.get(fe),xe=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(xe=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),ue(xe,fe),ge(Y.__webglFramebuffer,N,fe,s.COLOR_ATTACHMENT0+ie,xe,0),d(fe)&&_(xe)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ie=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),ue(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let re=0;re<w.mipmaps.length;re++)ge(Y.__webglFramebuffer[re],N,w,s.COLOR_ATTACHMENT0,ie,re);else ge(Y.__webglFramebuffer,N,w,s.COLOR_ATTACHMENT0,ie,0);d(w)&&_(ie),t.unbindTexture()}N.depthBuffer&&Ne(N)}function je(N){let w=N.textures;for(let Y=0,J=w.length;Y<J;Y++){let ne=w[Y];if(d(ne)){let le=y(N),he=n.get(ne).__webglTexture;t.bindTexture(le,he),_(le),t.unbindTexture()}}}let It=[],Jt=[];function mn(N){if(N.samples>0){if(Vt(N)===!1){let w=N.textures,Y=N.width,J=N.height,ne=s.COLOR_BUFFER_BIT,le=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(N),ie=w.length>1;if(ie)for(let fe=0;fe<w.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let re=N.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<w.length;fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(w[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,Y,J,0,0,Y,J,ne,s.NEAREST),l===!0&&(It.length=0,Jt.length=0,It.push(s.COLOR_ATTACHMENT0+fe),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(It.push(le),Jt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Jt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let fe=0;fe<w.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(w[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Pt(N){return Math.min(i.maxSamples,N.samples)}function Vt(N){let w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(N){let w=o.render.frame;h.get(N)!==w&&(h.set(N,w),N.update())}function en(N,w){let Y=N.colorSpace,J=N.format,ne=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==dn&&Y!==Ni&&(Je.getTransfer(Y)===pt?(J!==Ln||ne!==vn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",Y)),w}function bt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.getTextureUnits=R,this.setTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=H,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function KM(s,e){function t(n,i=Ni){let r,o=Je.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===Ll)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return s.BYTE;if(n===hh)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===Pl)return s.INT;if(n===Jn)return s.UNSIGNED_INT;if(n===Pn)return s.FLOAT;if(n===jn)return s.HALF_FLOAT;if(n===ph)return s.ALPHA;if(n===mh)return s.RGB;if(n===Ln)return s.RGBA;if(n===ri)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===Dl)return s.RED;if(n===Nl)return s.RED_INTEGER;if(n===ns)return s.RG;if(n===Ol)return s.RG_INTEGER;if(n===Ul)return s.RGBA_INTEGER;if(n===Bo||n===ko||n===zo||n===Vo)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bl||n===kl||n===zl||n===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Go||n===Yl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gl||n===Hl)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xl)return r.COMPRESSED_R11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Go)return r.COMPRESSED_RG11_EAC;if(n===Yl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$l||n===Kl||n===Zl||n===Jl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$l)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jl)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ql)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ec)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ic)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===rc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lc||n===cc||n===uc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lc)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hc||n===fc||n===Ho||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ZM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JM=`
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

}`,Wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new yo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new In({vertexShader:ZM,fragmentShader:JM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xh=class extends oi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null,x=typeof XRWebGLBinding<"u",g=new Wh,d={},_=t.getContextAttributes(),y=null,b=null,v=[],S=[],T=new Oe,M=null,E=null,C=new Wt;C.viewport=new yt;let A=new Wt;A.viewport=new yt;let L=[C,A],P=new Tl,R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=v[q];return Z===void 0&&(Z=new vr,v[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=v[q];return Z===void 0&&(Z=new vr,v[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=v[q];return Z===void 0&&(Z=new vr,v[q]=Z),Z.getHandSpace()};function O(q){let Z=S.indexOf(q.inputSource);if(Z===-1)return;let ae=v[Z];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||o),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",V);for(let q=0;q<v.length;q++){let Z=S[q];Z!==null&&(S[q]=null,v[q].disconnect(Z))}R=null,F=null,g.reset();for(let q in d)delete d[q];if(e.setRenderTarget(y),p=null,f=null,u=null,i=null,b=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",U),i.addEventListener("inputsourceschange",V),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,we=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=_.stencil?ts:ri,we=_.stencil?Pr:Jn);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new rn(f.textureWidth,f.textureHeight,{format:Ln,type:vn,depthTexture:new Ji(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new rn(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let Z=0;Z<q.removed.length;Z++){let ae=q.removed[Z],we=S.indexOf(ae);we>=0&&(S[we]=null,v[we].disconnect(ae))}for(let Z=0;Z<q.added.length;Z++){let ae=q.added[Z],we=S.indexOf(ae);if(we===-1){for(let ze=0;ze<v.length;ze++)if(ze>=S.length){S.push(ae),we=ze;break}else if(S[ze]===null){S[ze]=ae,we=ze;break}if(we===-1)break}let ge=v[we];ge&&ge.connect(ae)}}let z=new k,B=new k;function H(q,Z,ae){z.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);let we=z.distanceTo(B),ge=Z.projectionMatrix.elements,ze=ae.projectionMatrix.elements,st=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],ot=(ge[9]-1)/ge[5],je=(ge[8]-1)/ge[0],It=(ze[8]+1)/ze[0],Jt=st*je,mn=st*It,Pt=we/(-je+It),Vt=Pt*-je;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Vt),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let X=st+Pt,en=Ne+Pt,bt=Jt-Vt,N=mn+(we-Vt),w=Ze*Ne/en*X,Y=ot*Ne/en*X;q.projectionMatrix.makePerspective(bt,N,w,Y,X,en),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,ae=q.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),P.near=A.near=C.near=Z,P.far=A.far=C.far=ae,(R!==P.near||F!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,F=P.far),P.layers.mask=q.layers.mask|6,C.layers.mask=P.layers.mask&-5,A.layers.mask=P.layers.mask&-3;let we=q.parent,ge=P.cameras;ee(P,we);for(let ze=0;ze<ge.length;ze++)ee(ge[ze],we);ge.length===2?H(P,C,A):P.projectionMatrix.copy(C.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,P,we)};function Q(q,Z,ae){ae===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(q){return d[q]};let ce=null;function ue(q,Z){if(h=Z.getViewerPose(c||o),m=Z,h!==null){let ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let we=!1;ae.length!==P.cameras.length&&(P.cameras.length=0,we=!0);for(let Ne=0;Ne<ae.length;Ne++){let Ze=ae[Ne],ot=null;if(p!==null)ot=p.getViewport(Ze);else{let It=u.getViewSubImage(f,Ze);ot=It.viewport,Ne===0&&(e.setRenderTargetTextures(b,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(b))}let je=L[Ne];je===void 0&&(je=new Wt,je.layers.enable(Ne),je.viewport=new yt,L[Ne]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(P.matrix.copy(je.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),we===!0&&P.cameras.push(je)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ne=u.getDepthInformation(ae[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,i.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ne=0;Ne<ae.length;Ne++){let Ze=ae[Ne].camera;if(Ze){let ot=d[Ze];ot||(ot=new yo,d[Ze]=ot);let je=u.getCameraImage(Ze);ot.sourceTexture=je}}}}for(let ae=0;ae<v.length;ae++){let we=S[ae],ge=v[ae];we!==null&&ge!==void 0&&ge.update(we,Z,c||o)}ce&&ce(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let Be=new Sm;Be.setAnimationLoop(ue),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}},jM=new Xe,Cm=new We;Cm.set(-1,0,0,0,1,0,0,0,1);function QM(s,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Mh(s)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,_,y,b){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,b)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,y):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Qt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Qt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let _=e.get(d),y=_.envMap,b=_.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(jM.makeRotationFromEuler(b)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cm),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,y){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=y*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){let _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function e1(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=i[b.id];S===void 0&&(g(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",_));let T=v.program;n.updateUBOMapping(b,T);let M=e.render.frame;r[b.id]!==M&&(f(b),r[b.id]=M)}function h(b){let v=u();b.__bindingPointIndex=v;let S=s.createBuffer(),T=b.__size,M=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,T,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=i[b.id],S=b.uniforms,T=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let M=0,E=S.length;M<E;M++){let C=S[M];if(Array.isArray(C))for(let A=0,L=C.length;A<L;A++)p(C[A],M,A,T);else p(C,M,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,v,S,T){if(x(b,v,S,T)===!0){let M=b.__offset,E=b.value;if(Array.isArray(E)){let C=0;for(let A=0;A<E.length;A++){let L=E[A],P=d(L);m(L,b.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,M,b.__data)}}function m(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function x(b,v,S,T){let M=b.value,E=v+"_"+S;if(T[E]===void 0)return typeof M=="number"||typeof M=="boolean"?T[E]=M:ArrayBuffer.isView(M)?T[E]=M.slice():T[E]=M.clone(),!0;{let C=T[E];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return T[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function g(b){let v=b.uniforms,S=0,T=16;for(let E=0,C=v.length;E<C;E++){let A=Array.isArray(v[E])?v[E]:[v[E]];for(let L=0,P=A.length;L<P;L++){let R=A[L],F=Array.isArray(R.value)?R.value:[R.value];for(let O=0,U=F.length;O<U;O++){let V=F[O],z=d(V),B=S%T,H=B%z.boundary,ee=B+H;S+=H,ee!==0&&T-ee<z.storage&&(S+=T-ee),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=z.storage}}}let M=S%T;return M>0&&(S+=T-M),b.__size=S,b.__cache={},this}function d(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),v}function _(b){let v=b.target;v.removeEventListener("dispose",_);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function y(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:y}}var t1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function n1(){return pi===null&&(pi=new Sr(t1,16,16,ns,jn),pi.name="DFG_LUT",pi.minFilter=Ut,pi.magFilter=Ut,pi.wrapS=fn,pi.wrapT=fn,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var Ur=class{constructor(e={}){let{canvas:t=Hp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=p,g=new Set([Ul,Ol,Nl]),d=new Set([vn,Jn,Ir,Pr,Ll,Fl]),_=new Uint32Array(4),y=new Int32Array(4),b=new k,v=null,S=null,T=[],M=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,A=!1,L=null,P=null,R=null,F=null;this._outputColorSpace=Mt;let O=0,U=0,V=null,z=-1,B=null,H=new yt,ee=new yt,Q=null,ce=new j(0),ue=0,Be=t.width,q=t.height,Z=1,ae=null,we=null,ge=new yt(0,0,Be,q),ze=new yt(0,0,Be,q),st=!1,Ne=new wr,Ze=!1,ot=!1,je=new Xe,It=new k,Jt=new yt,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pt=!1;function Vt(){return V===null?Z:1}let X=n;function en(I,G){return t.getContext(I,G)}let bt,N,w,Y,J,ne,le,he,ie,re,fe,Pe,xe,de,Le,ke,qe,W,pe,se,me,ve,oe;try{let I={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",zn,!1),X===null){let G="webgl2";if(X=en(G,I),X===null)throw en(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(I){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",zn,!1),Ve("WebGLRenderer: "+I.message),I}function De(){bt=new cv(X),bt.init(),me=new KM(X,bt),N=new Qy(X,bt,e,me),w=new YM(X,bt),N.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),P=X.createFramebuffer(),R=X.createFramebuffer(),F=X.createFramebuffer(),Y=new fv(X),J=new FM,ne=new $M(X,bt,w,J,N,me,Y),le=new lv(C),he=new pb(X),ve=new Jy(X,he),ie=new uv(X,he,Y,ve),re=new pv(X,ie,he,ve,Y),W=new dv(X,N,ne),Le=new ev(J),fe=new LM(C,le,bt,N,ve,Le),Pe=new QM(C,J),xe=new NM,de=new VM(bt),qe=new Zy(C,le,w,re,m,l),ke=new qM(C,re,N),oe=new e1(X,Y,N,w),pe=new jy(X,bt,Y),se=new hv(X,bt,Y),Y.programs=fe.programs,C.capabilities=N,C.extensions=bt,C.properties=J,C.renderLists=xe,C.shadowMap=ke,C.state=w,C.info=Y}x!==vn&&(E=new gv(x,t.width,t.height,a,i,r));let Re=new Xh(C,X);this.xr=Re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=bt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=bt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(I){I!==void 0&&(Z=I,this.setSize(Be,q,!1))},this.getSize=function(I){return I.set(Be,q)},this.setSize=function(I,G,te=!0){if(Re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=I,q=G,t.width=Math.floor(I*Z),t.height=Math.floor(G*Z),te===!0&&(t.style.width=I+"px",t.style.height=G+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,I,G)},this.getDrawingBufferSize=function(I){return I.set(Be*Z,q*Z).floor()},this.setDrawingBufferSize=function(I,G,te){Be=I,q=G,Z=te,t.width=Math.floor(I*te),t.height=Math.floor(G*te),this.setViewport(0,0,I,G)},this.setEffects=function(I){if(x===vn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let G=0;G<I.length;G++)if(I[G].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(H)},this.getViewport=function(I){return I.copy(ge)},this.setViewport=function(I,G,te,$){I.isVector4?ge.set(I.x,I.y,I.z,I.w):ge.set(I,G,te,$),w.viewport(H.copy(ge).multiplyScalar(Z).round())},this.getScissor=function(I){return I.copy(ze)},this.setScissor=function(I,G,te,$){I.isVector4?ze.set(I.x,I.y,I.z,I.w):ze.set(I,G,te,$),w.scissor(ee.copy(ze).multiplyScalar(Z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(I){w.setScissorTest(st=I)},this.setOpaqueSort=function(I){ae=I},this.setTransparentSort=function(I){we=I},this.getClearColor=function(I){return I.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(I=!0,G=!0,te=!0){let $=0;if(I){let K=!1;if(V!==null){let ye=V.texture.format;K=g.has(ye)}if(K){let ye=V.texture.type,Te=d.has(ye),_e=qe.getClearColor(),Ae=qe.getClearAlpha(),Ce=_e.r,$e=_e.g,et=_e.b;Te?(_[0]=Ce,_[1]=$e,_[2]=et,_[3]=Ae,X.clearBufferuiv(X.COLOR,0,_)):(y[0]=Ce,y[1]=$e,y[2]=et,y[3]=Ae,X.clearBufferiv(X.COLOR,0,y))}else $|=X.COLOR_BUFFER_BIT}G&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),L=I},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",zn,!1),qe.dispose(),xe.dispose(),de.dispose(),J.dispose(),le.dispose(),re.dispose(),ve.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ud),Re.removeEventListener("sessionend",hd),fs.stop()};function Et(I){I.preventDefault(),fo("WebGLRenderer: Context Lost."),A=!0}function ht(){fo("WebGLRenderer: Context Restored."),A=!1;let I=Y.autoReset,G=ke.enabled,te=ke.autoUpdate,$=ke.needsUpdate,K=ke.type;De(),Y.autoReset=I,ke.enabled=G,ke.autoUpdate=te,ke.needsUpdate=$,ke.type=K}function zn(I){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ti(I){let G=I.target;G.removeEventListener("dispose",ti),zg(G)}function zg(I){Vg(I),J.remove(I)}function Vg(I){let G=J.get(I).programs;G!==void 0&&(G.forEach(function(te){fe.releaseProgram(te)}),I.isShaderMaterial&&fe.releaseShaderCache(I))}this.renderBufferDirect=function(I,G,te,$,K,ye){G===null&&(G=mn);let Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,_e=Wg(I,G,te,$,K);w.setMaterial($,Te);let Ae=te.index,Ce=1;if($.wireframe===!0){if(Ae=ie.getWireframeAttribute(te),Ae===void 0)return;Ce=2}let $e=te.drawRange,et=te.attributes.position,Ee=$e.start*Ce,ft=($e.start+$e.count)*Ce;ye!==null&&(Ee=Math.max(Ee,ye.start*Ce),ft=Math.min(ft,(ye.start+ye.count)*Ce)),Ae!==null?(Ee=Math.max(Ee,0),ft=Math.min(ft,Ae.count)):et!=null&&(Ee=Math.max(Ee,0),ft=Math.min(ft,et.count));let Gt=ft-Ee;if(Gt<0||Gt===1/0)return;ve.setup(K,$,_e,te,Ae);let Ct,wt=pe;if(Ae!==null&&(Ct=he.get(Ae),wt=se,wt.setIndex(Ct)),K.isMesh)$.wireframe===!0?(w.setLineWidth($.wireframeLinewidth*Vt()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(K.isLine){let tn=$.linewidth;tn===void 0&&(tn=1),w.setLineWidth(tn*Vt()),K.isLineSegments?wt.setMode(X.LINES):K.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else K.isPoints?wt.setMode(X.POINTS):K.isSprite&&wt.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))wt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let tn=K._multiDrawStarts,Se=K._multiDrawCounts,un=K._multiDrawCount,at=Ae?he.get(Ae).bytesPerElement:1,Fn=J.get($).currentProgram.getUniforms();for(let ni=0;ni<un;ni++)Fn.setValue(X,"_gl_DrawID",ni),wt.render(tn[ni]/at,Se[ni])}else if(K.isInstancedMesh)wt.renderInstances(Ee,Gt,K.count);else if(te.isInstancedBufferGeometry){let tn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Se=Math.min(te.instanceCount,tn);wt.renderInstances(Ee,Gt,Se)}else wt.render(Ee,Gt)};function cd(I,G,te,$){L!==null&&I.isNodeMaterial&&L.setObject($,I),Ze===!0&&Le.setState(I,te,!1),I.transparent===!0&&I.side===St&&I.forceSinglePass===!1?(I.side=Qt,I.needsUpdate=!0,va(I,G,$),I.side=hi,I.needsUpdate=!0,va(I,G,$),I.side=St):va(I,G,$)}this.compile=function(I,G,te=null){te===null&&(te=I),L!==null&&L.renderStart(I,G,te),S=de.get(te),S.init(G),M.push(S),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),I!==te&&I.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),Ze===!0&&Le.setGlobalState(this.clippingPlanes,G),L!==null&&ke.render(S.state.shadowsArray,te,G);let $=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let ye=K.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let _e=ye[Te];cd(_e,te,G,K),$.add(_e)}else cd(ye,te,G,K),$.add(ye)}),S=M.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(I,G,te=null){let $=this.compile(I,G,te);return new Promise(K=>{function ye(){if($.forEach(function(Te){let Ae=J.get(Te).currentProgram;(Ae===void 0||Ae.isReady())&&$.delete(Te)}),$.size===0){K(I);return}setTimeout(ye,10)}bt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let cu=null;function Gg(I){cu&&cu(I)}function ud(){fs.stop()}function hd(){fs.start()}let fs=new Sm;fs.setAnimationLoop(Gg),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(I){cu=I,Re.setAnimationLoop(I),I===null?fs.stop():fs.start()},Re.addEventListener("sessionstart",ud),Re.addEventListener("sessionend",hd),this.render=function(I,G){if(G!==void 0&&G.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;L!==null&&L.renderStart(I,G);let te=Re.enabled===!0&&Re.isPresenting===!0,$=E!==null&&(V===null||te)&&E.begin(C,V);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(G),G=Re.getCamera()),I.isScene===!0&&I.onBeforeRender(C,I,G,V),S=de.get(I,M.length),S.init(G),S.state.textureUnits=ne.getTextureUnits(),M.push(S),je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ne.setFromProjectionMatrix(je,qn,G.reversedDepth),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),v=xe.get(I,T.length),v.init(),T.push(v),Re.enabled===!0&&Re.isPresenting===!0){let Te=C.xr.getDepthSensingMesh();Te!==null&&uu(Te,G,-1/0,C.sortObjects)}uu(I,G,0,C.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),C.sortObjects===!0&&v.sort(ae,we),Pt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Pt&&qe.addToRenderList(v,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Le.beginShadows();let K=S.state.shadowsArray;if(ke.render(K,I,G),Ze===!0&&Le.endShadows(),($&&E.hasRenderPass())===!1){let Te=v.opaque,_e=v.transmissive;if(S.setupLights(),G.isArrayCamera){let Ae=G.cameras;if(_e.length>0)for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];dd(Te,_e,I,et)}Pt&&qe.render(I);for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];fd(v,I,et,et.viewport)}}else _e.length>0&&dd(Te,_e,I,G),Pt&&qe.render(I),fd(v,I,G)}V!==null&&U===0&&(ne.updateMultisampleRenderTarget(V),ne.updateRenderTargetMipmap(V)),$&&E.end(C),I.isScene===!0&&I.onAfterRender(C,I,G),ve.resetDefaultState(),z=-1,B=null,M.pop(),M.length>0?(S=M[M.length-1],ne.setTextureUnits(S.state.textureUnits),Ze===!0&&Le.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,L!==null&&L.renderEnd()};function uu(I,G,te,$){if(I.visible===!1)return;if(I.layers.test(G.layers)){if(I.isGroup)te=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(G);else if(I.isLightProbeGrid)S.pushLightProbeGrid(I);else if(I.isLight)S.pushLight(I),I.castShadow&&S.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(Ne)){$&&Jt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(je);let Te=re.update(I),_e=I.material;_e.visible&&v.push(I,Te,_e,te,Jt.z,null,G)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(Ne))){let Te=re.update(I),_e=I.material;if($&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Jt.copy(I.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Jt.copy(Te.boundingSphere.center)),Jt.applyMatrix4(I.matrixWorld).applyMatrix4(je)),Array.isArray(_e)){let Ae=Te.groups;for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce],Ee=_e[et.materialIndex];Ee&&Ee.visible&&v.push(I,Te,Ee,te,Jt.z,et,G)}}else _e.visible&&v.push(I,Te,_e,te,Jt.z,null,G)}}let ye=I.children;for(let Te=0,_e=ye.length;Te<_e;Te++)uu(ye[Te],G,te,$)}function fd(I,G,te,$){let{opaque:K,transmissive:ye,transparent:Te}=I;S.setupLightsView(te),Ze===!0&&Le.setGlobalState(C.clippingPlanes,te),$&&w.viewport(H.copy($)),K.length>0&&ya(K,G,te),ye.length>0&&ya(ye,G,te),Te.length>0&&ya(Te,G,te),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function dd(I,G,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Ee=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new rn(1,1,{generateMipmaps:!0,type:Ee?jn:vn,minFilter:Zn,samples:Math.max(4,N.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ye=S.state.transmissionRenderTarget[$.id],Te=$.viewport||H;ye.setSize(Te.z*C.transmissionResolutionScale,Te.w*C.transmissionResolutionScale);let _e=C.getRenderTarget(),Ae=C.getActiveCubeFace(),Ce=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(ce),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),Pt&&qe.render(te);let $e=C.toneMapping;C.toneMapping=Kn;let et=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),Ze===!0&&Le.setGlobalState(C.clippingPlanes,$),ya(I,te,$),ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ft=0,Gt=G.length;ft<Gt;ft++){let Ct=G[ft],{object:wt,geometry:tn,material:Se,group:un}=Ct;if(Se.side===St&&wt.layers.test($.layers)){let at=Se.side;Se.side=Qt,Se.needsUpdate=!0,pd(wt,te,$,tn,Se,un),Se.side=at,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye))}C.setRenderTarget(_e,Ae,Ce),C.setClearColor(ce,ue),et!==void 0&&($.viewport=et),C.toneMapping=$e}function ya(I,G,te){let $=G.isScene===!0?G.overrideMaterial:null;for(let K=0,ye=I.length;K<ye;K++){let Te=I[K],{object:_e,geometry:Ae,group:Ce}=Te,$e=Te.material;$e.allowOverride===!0&&$!==null&&($e=$),_e.layers.test(te.layers)&&pd(_e,G,te,Ae,$e,Ce)}}function pd(I,G,te,$,K,ye){L!==null&&K.isNodeMaterial&&L.setObject(I,K),I.onBeforeRender(C,G,te,$,K,ye),I.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(C,G,te,$,I,ye),K.transparent===!0&&K.side===St&&K.forceSinglePass===!1?(K.side=Qt,K.needsUpdate=!0,C.renderBufferDirect(te,G,$,K,I,ye),K.side=hi,K.needsUpdate=!0,C.renderBufferDirect(te,G,$,K,I,ye),K.side=St):C.renderBufferDirect(te,G,$,K,I,ye),I.onAfterRender(C,G,te,$,K,ye)}function va(I,G,te){G.isScene!==!0&&(G=mn);let $=J.get(I),K=S.state.lights,ye=S.state.shadowsArray,Te=K.state.version,_e=fe.getParameters(I,K.state,ye,G,te,S.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(_e),Ce=$.programs;$.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let $e=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;$.envMap=le.get(I.envMap||$.environment,$e),$.envMapRotation=$.environment!==null&&I.envMap===null?G.environmentRotation:I.envMapRotation,Ce===void 0&&(I.addEventListener("dispose",ti),Ce=new Map,$.programs=Ce);let et=Ce.get(Ae);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Te)return gd(I,_e),et}else _e.uniforms=fe.getUniforms(I),L!==null&&I.isNodeMaterial&&L.build(I,te,_e),I.onBeforeCompile(_e,C),et=fe.acquireProgram(_e,Ae),Ce.set(Ae,et),$.uniforms=_e.uniforms;let Ee=$.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ee.clippingPlanes=Le.uniform),gd(I,_e),$.needsLights=qg(I),$.lightsStateVersion=Te,$.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.sunLights.value=K.state.sun,Ee.sunLightShadows.value=K.state.sunShadow,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.sunShadowMatrix.value=K.state.sunShadowMatrix,Ee.sunShadowCascade.value=K.state.sunShadowCascade,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotLightMatrix.value=K.state.spotLightMatrix,Ee.spotLightMap.value=K.state.spotLightMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=et,$.uniformsList=null,et}function md(I){if(I.uniformsList===null){let G=I.currentProgram.getUniforms();I.uniformsList=Nr.seqWithValue(G.seq,I.uniforms)}return I.uniformsList}function gd(I,G){let te=J.get(I);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Hg(I,G){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let te=0,$=I.length;te<$;te++){let K=I[te];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function Wg(I,G,te,$,K){G.isScene!==!0&&(G=mn),ne.resetTextureUnits();let ye=G.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,_e=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ce=le.get($.envMap||Te,Ae),$e=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!te.morphAttributes.position,ft=!!te.morphAttributes.normal,Gt=!!te.morphAttributes.color,Ct=Kn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ct=C.toneMapping);let wt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,tn=wt!==void 0?wt.length:0,Se=J.get($),un=S.state.lights;if(Ze===!0&&(ot===!0||I!==B)){let Rt=I===B&&$.id===z;Le.setState($,I,Rt)}let at=!1;$.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==un.state.version||Se.outputColorSpace!==_e||K.isBatchedMesh&&Se.batching===!1||!K.isBatchedMesh&&Se.batching===!0||K.isBatchedMesh&&Se.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Se.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Se.instancing===!1||!K.isInstancedMesh&&Se.instancing===!0||K.isSkinnedMesh&&Se.skinning===!1||!K.isSkinnedMesh&&Se.skinning===!0||K.isInstancedMesh&&Se.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Se.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Se.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Se.instancingMorph===!1&&K.morphTexture!==null||Se.envMap!==Ce||$.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Le.numPlanes||Se.numIntersection!==Le.numIntersection)||Se.vertexAlphas!==$e||Se.vertexTangents!==et||Se.morphTargets!==Ee||Se.morphNormals!==ft||Se.morphColors!==Gt||Se.toneMapping!==Ct||Se.morphTargetsCount!==tn||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Se.__version=$.version);let Fn=Se.currentProgram;at===!0&&(Fn=va($,G,K),L&&$.isNodeMaterial&&L.onUpdateProgram($,Fn,Se));let ni=!1,ki=!1,Ys=!1,vt=Fn.getUniforms(),Nt=Se.uniforms;if(w.useProgram(Fn.program)&&(ni=!0,ki=!0,Ys=!0),$.id!==z&&(z=$.id,ki=!0),Se.needsLights){let Rt=Hg(S.state.lightProbeGridArray,K);Se.lightProbeGrid!==Rt&&(Se.lightProbeGrid=Rt,ki=!0)}if(ni||B!==I){w.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),vt.setValue(X,"projectionMatrix",I.projectionMatrix),vt.setValue(X,"viewMatrix",I.matrixWorldInverse);let Vi=vt.map.cameraPosition;Vi!==void 0&&Vi.setValue(X,It.setFromMatrixPosition(I.matrixWorld)),N.logarithmicDepthBuffer&&vt.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&vt.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),B!==I&&(B=I,ki=!0,Ys=!0)}if(Se.needsLights&&(un.state.sunShadowMap.length>0&&vt.setValue(X,"sunShadowMap",un.state.sunShadowMap,ne),un.state.directionalShadowMap.length>0&&vt.setValue(X,"directionalShadowMap",un.state.directionalShadowMap,ne),un.state.spotShadowMap.length>0&&vt.setValue(X,"spotShadowMap",un.state.spotShadowMap,ne),un.state.pointShadowMap.length>0&&vt.setValue(X,"pointShadowMap",un.state.pointShadowMap,ne)),K.isSkinnedMesh){vt.setOptional(X,K,"bindMatrix"),vt.setOptional(X,K,"bindMatrixInverse");let Rt=K.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),vt.setValue(X,"boneTexture",Rt.boneTexture,ne))}K.isBatchedMesh&&(vt.setOptional(X,K,"batchingTexture"),vt.setValue(X,"batchingTexture",K._matricesTexture,ne),vt.setOptional(X,K,"batchingIdTexture"),vt.setValue(X,"batchingIdTexture",K._indirectTexture,ne),vt.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&vt.setValue(X,"batchingColorTexture",K._colorsTexture,ne));let zi=te.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&W.update(K,te,Fn),(ki||Se.receiveShadow!==K.receiveShadow)&&(Se.receiveShadow=K.receiveShadow,vt.setValue(X,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Nt.envMapIntensity.value=G.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=n1()),ki){if(vt.setValue(X,"toneMappingExposure",C.toneMappingExposure),Se.needsLights&&Xg(Nt,Ys),ye&&$.fog===!0&&Pe.refreshFogUniforms(Nt,ye),Pe.refreshMaterialUniforms(Nt,$,Z,q,S.state.transmissionRenderTarget[I.id]),Se.needsLights&&Se.lightProbeGrid){let Rt=Se.lightProbeGrid;Nt.probesSH.value=Rt.texture,Nt.probesMin.value.copy(Rt.boundingBox.min),Nt.probesMax.value.copy(Rt.boundingBox.max),Nt.probesResolution.value.copy(Rt.resolution)}Nr.upload(X,md(Se),Nt,ne)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Nr.upload(X,md(Se),Nt,ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&vt.setValue(X,"center",K.center),vt.setValue(X,"modelViewMatrix",K.modelViewMatrix),vt.setValue(X,"normalMatrix",K.normalMatrix),vt.setValue(X,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){let Rt=$.uniformsGroups;for(let Vi=0,$s=Rt.length;Vi<$s;Vi++){let bd=Rt[Vi];oe.update(bd,Fn),oe.bind(bd,Fn)}}return Fn}function Xg(I,G){I.ambientLightColor.needsUpdate=G,I.lightProbe.needsUpdate=G,I.sunLights.needsUpdate=G,I.sunLightShadows.needsUpdate=G,I.directionalLights.needsUpdate=G,I.directionalLightShadows.needsUpdate=G,I.pointLights.needsUpdate=G,I.pointLightShadows.needsUpdate=G,I.spotLights.needsUpdate=G,I.spotLightShadows.needsUpdate=G,I.rectAreaLights.needsUpdate=G,I.hemisphereLights.needsUpdate=G}function qg(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(I,G,te){let $=J.get(I);$.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(I.texture).__webglTexture=G,J.get(I.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,G){let te=J.get(I);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(I,G=0,te=0){V=I,O=G,U=te;let $=null,K=!1,ye=!1;if(I){let _e=J.get(I);if(_e.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,_e.__webglFramebuffer),H.copy(I.viewport),ee.copy(I.scissor),Q=I.scissorTest,w.viewport(H),w.scissor(ee),w.setScissorTest(Q),z=-1;return}else if(_e.__webglFramebuffer===void 0)ne.setupRenderTarget(I);else if(_e.__hasExternalTextures)ne.rebindTextures(I,J.get(I.texture).__webglTexture,J.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let $e=I.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&J.has($e)&&(I.width!==$e.image.width||I.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(I)}}let Ae=I.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);let Ce=J.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?$=Ce[G][te]:$=Ce[G],K=!0):I.samples>0&&ne.useMultisampledRTT(I)===!1?$=J.get(I).__webglMultisampledFramebuffer:Array.isArray(Ce)?$=Ce[te]:$=Ce,H.copy(I.viewport),ee.copy(I.scissor),Q=I.scissorTest}else H.copy(ge).multiplyScalar(Z).floor(),ee.copy(ze).multiplyScalar(Z).floor(),Q=st;if(te!==0&&($=P),w.bindFramebuffer(X.FRAMEBUFFER,$)&&w.drawBuffers(I,$),w.viewport(H),w.scissor(ee),w.setScissorTest(Q),K){let _e=J.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,_e.__webglTexture,te)}else if(ye){let _e=G;for(let Ae=0;Ae<I.textures.length;Ae++){let Ce=J.get(I.textures[Ae]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,te,_e)}}else if(I!==null&&te!==0){let _e=J.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_e.__webglTexture,te)}z=-1};function xd(I){let G=J.get(I);return(G.__readFormat!==I.format||G.__readType!==I.type)&&(G.__readFormat=I.format,G.__readType=I.type,G.__formatReadable=N.textureFormatReadable(I.format),G.__typeReadable=N.textureTypeReadable(I.type)),G}this.readRenderTargetPixels=function(I,G,te,$,K,ye,Te,_e=0){if(!(I&&I.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){w.bindFramebuffer(X.FRAMEBUFFER,Ae);try{let Ce=I.textures[_e],$e=Ce.format,et=Ce.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_e);let Ee=xd(Ce);if(Ee.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=I.width-$&&te>=0&&te<=I.height-K&&X.readPixels(G,te,$,K,me.convert($e),me.convert(et),ye)}finally{let Ce=V!==null?J.get(V).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(I,G,te,$,K,ye,Te,_e=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=J.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(G>=0&&G<=I.width-$&&te>=0&&te<=I.height-K){w.bindFramebuffer(X.FRAMEBUFFER,Ae);let Ce=I.textures[_e],$e=Ce.format,et=Ce.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_e);let Ee=xd(Ce);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.bufferData(X.PIXEL_PACK_BUFFER,ye.byteLength,X.STREAM_READ),X.readPixels(G,te,$,K,me.convert($e),me.convert(et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Gt=V!==null?J.get(V).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Gt);let Ct=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Xp(X,Ct,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ft),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ye),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ft),X.deleteSync(Ct),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,G=null,te=0){let $=Math.pow(2,-te),K=Math.floor(I.image.width*$),ye=Math.floor(I.image.height*$),Te=G!==null?G.x:0,_e=G!==null?G.y:0;ne.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Te,_e,K,ye),w.unbindTexture()},this.copyTextureToTexture=function(I,G,te=null,$=null,K=0,ye=0){let Te,_e,Ae,Ce,$e,et,Ee,ft,Gt,Ct=I.isCompressedTexture?I.mipmaps[ye]:I.image;if(te!==null)Te=te.max.x-te.min.x,_e=te.max.y-te.min.y,Ae=te.isBox3?te.max.z-te.min.z:1,Ce=te.min.x,$e=te.min.y,et=te.isBox3?te.min.z:0;else{let Nt=Math.pow(2,-K);Te=Math.floor(Ct.width*Nt),_e=Math.floor(Ct.height*Nt),I.isDataArrayTexture?Ae=Ct.depth:I.isData3DTexture?Ae=Math.floor(Ct.depth*Nt):Ae=1,Ce=0,$e=0,et=0}$!==null?(Ee=$.x,ft=$.y,Gt=$.z):(Ee=0,ft=0,Gt=0);let wt=me.convert(G.format),tn=me.convert(G.type),Se;G.isData3DTexture?(ne.setTexture3D(G,0),Se=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),Se=X.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),Se=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);let un=w.getParameter(X.UNPACK_ROW_LENGTH),at=w.getParameter(X.UNPACK_IMAGE_HEIGHT),Fn=w.getParameter(X.UNPACK_SKIP_PIXELS),ni=w.getParameter(X.UNPACK_SKIP_ROWS),ki=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,Ct.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(X.UNPACK_SKIP_ROWS,$e),w.pixelStorei(X.UNPACK_SKIP_IMAGES,et);let Ys=I.isDataArrayTexture||I.isData3DTexture,vt=G.isDataArrayTexture||G.isData3DTexture;if(I.isDepthTexture){let Nt=J.get(I),zi=J.get(G),Rt=J.get(Nt.__renderTarget),Vi=J.get(zi.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,Rt.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let $s=0;$s<Ae;$s++)Ys&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(I).__webglTexture,K,et+$s),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(G).__webglTexture,ye,Gt+$s)),X.blitFramebuffer(Ce,$e,Te,_e,Ee,ft,Te,_e,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||I.isRenderTargetTexture||J.has(I)){let Nt=J.get(I),zi=J.get(G);w.bindFramebuffer(X.READ_FRAMEBUFFER,R),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,F);for(let Rt=0;Rt<Ae;Rt++)Ys?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Nt.__webglTexture,K,et+Rt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Nt.__webglTexture,K),vt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zi.__webglTexture,ye,Gt+Rt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,zi.__webglTexture,ye),K!==0?X.blitFramebuffer(Ce,$e,Te,_e,Ee,ft,Te,_e,X.COLOR_BUFFER_BIT,X.NEAREST):vt?X.copyTexSubImage3D(Se,ye,Ee,ft,Gt+Rt,Ce,$e,Te,_e):X.copyTexSubImage2D(Se,ye,Ee,ft,Ce,$e,Te,_e);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else vt?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(Se,ye,Ee,ft,Gt,Te,_e,Ae,wt,tn,Ct.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Se,ye,Ee,ft,Gt,Te,_e,Ae,wt,Ct.data):X.texSubImage3D(Se,ye,Ee,ft,Gt,Te,_e,Ae,wt,tn,Ct):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ye,Ee,ft,Te,_e,wt,tn,Ct.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ye,Ee,ft,Ct.width,Ct.height,wt,Ct.data):X.texSubImage2D(X.TEXTURE_2D,ye,Ee,ft,Te,_e,wt,tn,Ct);w.pixelStorei(X.UNPACK_ROW_LENGTH,un),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at),w.pixelStorei(X.UNPACK_SKIP_PIXELS,Fn),w.pixelStorei(X.UNPACK_SKIP_ROWS,ni),w.pixelStorei(X.UNPACK_SKIP_IMAGES,ki),ye===0&&G.generateMipmaps&&X.generateMipmap(Se),w.unbindTexture()},this.initRenderTarget=function(I){J.get(I).__webglFramebuffer===void 0&&ne.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?ne.setTextureCube(I,0):I.isData3DTexture?ne.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?ne.setTexture2DArray(I,0):ne.setTexture2D(I,0),w.unbindTexture()},this.resetState=function(){O=0,U=0,V=null,w.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function Im(s){let e=s.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let i=s[n*3+1];s[n*3]===0&&s[n*3+2]===0&&i>0&&(t[n]=i)}return t}function Pm(s,e,t,n){for(let i=t.start*3;i<t.end*3;i++){let r=e[i];r<=0||(s[i*3]=Math.min(1,n[0]*r),s[i*3+1]=Math.min(1,n[1]*r),s[i*3+2]=Math.min(1,n[2]*r))}}var i1=[],Ko=new Map,s1=0,Lm=(s,e)=>`pack:${s}:${e}`,r1=s=>s.startsWith("pack:");function vc(s){i1=s,Ko=new Map;for(let e of s)for(let t of e.items)Ko.set(Lm(e.id,t.id),t);s1+=1}var o1={};function Kt(s){if(!r1(s))return;let e=Ko.get(s);if(e)return e;let[,t,...n]=s.split(":"),i=o1[t];return i?Ko.get(Lm(i,n.join(":"))):void 0}var Fm=s=>Kt(s)?.parts.find(e=>e.screen);function Un(s,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Sc;if(e.type==="led_strip")return Math.max(0,s.height-.04-Math.max(.02,e.h));let t=Kt(e.type);if(!t)return Zo(e);switch(t.mount){case"surface":return km(s,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,s.height-e.h);default:return 0}}var Dm=null,Nm=new Set,Om=s=>{Dm=s},Um=()=>Dm,Bm=s=>{Nm.add(s)};function Mc(s){let e=Ko.get(s)?.mesh;return e!==void 0&&Nm.has(e)}var wc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Os(s){return s==="hedge"||s==="fence"||s==="pergola"}function qh(s,e,t){let n=s.slope??0;if(!n||s.type==="pool")return 0;let i=s.slope_dir??"x",r=(c,h)=>i==="x"?c:i==="-x"?-c:i==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of s.points){let u=r(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-o)/(a-o)));return n*l}function l1(s,e,t,n){return Jo(s)+(e.offset??0)+wc[e.type]-qh(e,t,n)}function Jo(s){return s.elevation>.3?0:-.2}function zm(s,e,t){let n=(s.outdoor??[]).filter(r=>!Os(r.type)&&r.type!=="pool"&&gt([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?l1(s,i,e,t):Jo(s)}var c1={type:"none",pitch:35,overhang:.4},YA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...c1}};var Vm=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Sc=1.75;function Gm(s){return Vm.has(s)||!!Kt(s)?.light}var u1=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Zo(s){switch(s.type){case"home_battery":return s.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-s.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function km(s,e,t){let n=0;for(let i of s.furniture)!(u1.has(i.type)||Kt(i.type)?.surface)||!gt([e,t],Ac(i))||(n=Math.max(n,i.h));return n}var a1=new Set([...Vm,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var h1=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],f1=["standard","bars","glass_wall"];function Us(s,e){return s.type==="door"?s.style&&h1.includes(s.style)?s.style:e?"front":"interior":s.style&&f1.includes(s.style)?s.style:"standard"}function Hm(s,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=s-.04,o=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-o)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let h=r-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return i?{panels:[[.02,.02+l],[s-.02-c,s-.02]],x0:.02+l,x1:s-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:s-.02}:{panels:[[s-.02-l,s-.02]],x0:.02,x1:s-.02-l}}function Wm(s){return s==="front"||s==="front_glass"||s==="sidelight"||s==="sidelights"}function Bs(s){let e=0;for(let t=0;t<s.length;t++){let[n,i]=s[t],[r,o]=s[(t+1)%s.length];e+=n*o-r*i}return e/2}function jo(s){return Math.abs(Bs(s))}function Tc(s){let e=Bs(s);if(Math.abs(e)<1e-9){let i=s.length||1;return[s.reduce((r,o)=>r+o[0],0)/i,s.reduce((r,o)=>r+o[1],0)/i]}let t=0,n=0;for(let i=0;i<s.length;i++){let[r,o]=s[i],[a,l]=s[(i+1)%s.length],c=r*l-a*o;t+=(r+a)*c,n+=(o+l)*c}return[t/(6*e),n/(6*e)]}function Xm(s){if(s.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=s[e],[i,r]=s[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function qm(s){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[r,o]of s)e=Math.min(e,r),t=Math.min(t,o),n=Math.max(n,r),i=Math.max(i,o);return{x0:e,z0:t,x1:n,z1:i}}function Ac(s){let e=s.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=s.w/2,r=s.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([o,a])=>[s.x+o*t-a*n,s.z+o*n+a*t])}function gt(s,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,o]=e[n],[a,l]=e[i];o>s[1]!=l>s[1]&&s[0]<(a-r)*(s[1]-o)/(l-o)+r&&(t=!t)}return t}var Yh=Math.PI/180,kr=s=>Math.tan(Math.min(80,Math.max(0,s))*Yh);function Ec(s){return{x0:Math.min(s.x0,s.x1),x1:Math.max(s.x0,s.x1),z0:Math.min(s.z0,s.z1),z1:Math.max(s.z0,s.z1)}}function Mn(s){let{x0:e,x1:t,z0:n,z1:i}=Ec(s);return s.axis==="x"?{u0:e,u1:t,w:i-n,at:(r,o)=>[r,s.flip?i-o:n+o]}:{u0:n,u1:i,w:t-e,at:(r,o)=>[s.flip?t-o:e+o,r]}}function gi(s,e,t){let{x0:n,x1:i,z0:r,z1:o}=Ec(s);return s.axis==="x"?[e,s.flip?o-t:t-r]:[t,s.flip?i-e:e-n]}var Qo=Math.tan(30*Yh);function $h(s,e,t,n,i){let r=Math.min(s*.3,n>1e-6?2.4/n:s*.3),o=Math.min(s*.3,i>1e-6?2.4/i:s*.3),a=e+r*n,l=t+o*i,c=Math.min(s-o,Math.max(r,(l-a+Qo*(s-o+r))/(2*Qo))),h=a+(c-r)*Qo;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=r?e+f*n:f<=c?a+(f-r)*Qo:f<=s-o?l+(s-o-f)*Qo:t+(s-f)*i}}function pn(s){let e=Mn(s).w,[t,n]=[s.eave_a,s.eave_b],[i,r]=[kr(s.pitch_a),kr(s.pitch_b)];switch(s.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*i,y:o=>t+o*i};case"mansard":{let o=$h(e,t,n,i,r);return{vr:o.vr,rh:o.rh,y:o.y}}default:{let o=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2;return{vr:o,rh:t+o*i,y:a=>a<=o?t+a*i:n+(e-a)*r}}}}var Kh=s=>pn(s).rh;var ct=(s,e)=>[s[0]-e[0],s[1]-e[1]],xi=(s,e)=>[s[0]+e[0],s[1]+e[1]],Qn=(s,e)=>[s[0]*e,s[1]*e],Sn=(s,e)=>s[0]*e[0]+s[1]*e[1],wn=(s,e)=>s[0]*e[1]-s[1]*e[0],Bn=s=>Math.hypot(s[0],s[1]),ei=s=>{let e=Bn(s)||1;return[s[0]/e,s[1]/e]},Zh=s=>[-s[1],s[0]],Jh=s=>[s[1],-s[0]];function Ym(s){return{...s,a:s.b,b:s.a,left:s.right,right:s.left,roomLeft:s.roomRight,roomRight:s.roomLeft}}function d1(s,e){let t=s.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function p1(s,e,t){if(s.a===e.b)return!1;let n=ei(ct(t[s.b],t[s.a])),i=ei(ct(t[e.b],t[e.a]));return Math.abs(wn(n,i))>1e-6||Sn(n,i)<=0||s.free||e.free?!1:s.height===e.height&&s.exterior===e.exterior&&s.roomLeft===e.roomLeft&&s.roomRight===e.roomRight&&Math.abs(s.left-e.left)<=1e-9&&Math.abs(s.right-e.right)<=1e-9}function $m(s,e,t=new Set){let n=s.slice();for(;;){let i=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b])i.set(l,[...i.get(l)??[],a])});let r=null;for(let[o,a]of i){if(a.length!==2||t.has(o))continue;let l=n[a[0]].b===o?n[a[0]]:Ym(n[a[0]]),c=n[a[1]].a===o?n[a[1]]:Ym(n[a[1]]);if(!p1(l,c,e))continue;let h={...l,b:c.b,sources:d1(l.sources,c.sources)};r=[...n.filter((u,f)=>f!==a[0]&&f!==a[1]),h];break}if(!r)return n;n=r}}function Km(s,e){let t=new Map;s.forEach((i,r)=>{let o=ei(ct(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${r}:b`,d:Qn(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[i,r]of t){let o=e[i];r.sort((l,c)=>l.angle-c.angle);for(let l of r)n.set(l.key,{left:xi(o,Qn(Zh(l.d),l.left)),right:xi(o,Qn(Jh(l.d),l.right))});if(r.length<2)continue;let a=4*Math.max(...r.map(l=>Math.max(l.left,l.right)))+1e-9;r.forEach((l,c)=>{let h=r[(c+1)%r.length],u=xi(o,Qn(Zh(l.d),l.left)),f=xi(o,Qn(Jh(h.d),h.right)),p=wn(l.d,h.d);if(Math.abs(p)<1e-4)return;let m=xi(u,Qn(l.d,wn(ct(f,u),h.d)/p));Bn(ct(m,o))>a||(n.get(l.key).left=m,n.get(h.key).right=m)})}return n}function Zm(s,e){let t=s.filter((n,i)=>Bn(ct(n,s[(i+1)%s.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((i,r)=>{let o=t[(r+t.length-1)%t.length],a=t[(r+1)%t.length],[l,c]=[ct(i,o),ct(a,i)];return Math.abs(wn(ei(l),ei(c)))<1e-7&&Sn(l,c)>0});if(n===-1)return t;t=t.filter((i,r)=>r!==n)}}function m1(s){let e=[];return{points:e,idOf(t){let n=e.findIndex(i=>Math.abs(i[0]-t[0])<=s&&Math.abs(i[1]-t[1])<=s);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function g1(s,e){let t=[];for(let n of s){let i=n.points;if(i.length<3||Math.abs(Bs(i))<1e-6)continue;let r=Bs(i)>0,o=i.map(a=>e.idOf(a));o.forEach((a,l)=>{let c=o[(l+1)%o.length];a!==c&&t.push(r?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function x1(s,e,t){let n=[];for(let i of s){let[r,o]=[e[i.u],e[i.v]],a=ct(o,r),l=Bn(a),c=Qn(a,1/l),h=e.map((f,p)=>({id:p,rel:ct(f,r)})).filter(({id:f,rel:p})=>f!==i.u&&f!==i.v&&Sn(p,c)>t&&Sn(p,c)<l-t&&Math.abs(wn(c,p))<=t).map(({id:f,rel:p})=>({t:Sn(p,c),id:f})).sort((f,p)=>f.t-p.t),u=[{t:0,id:i.u},...h,{t:l,id:i.v}];for(let f=0;f+1<u.length;f++){let[p,m]=[u[f],u[f+1]];n.push({u:p.id,v:m.id,room:i.room,edge:i.edge,t0:i.forward?p.t:l-m.t,t1:i.forward?m.t:l-p.t})}}return n}var Jm=s=>({room_id:s.room,edge:s.edge,t0:s.t0,t1:s.t1});function b1(s,e){let t=new Map(s.map(r=>[r.id,r])),n=new Map;for(let r of e){let o=`${r.room}:${r.edge}`;n.set(o,[...n.get(o)??[],r.t0].sort((a,l)=>a-l))}let i=r=>{let o=t.get(r.room)?.wall_heights?.[r.edge];return Array.isArray(o)?o[(n.get(`${r.room}:${r.edge}`)??[]).indexOf(r.t0)]??null:o};return{heightOf(r){let o=r.map(i).filter(a=>typeof a=="number"&&a>0);return o.length?Math.min(...o):void 0},thicknessOf(r){let o=r.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return o.length?Math.max(...o):void 0},hasNoWall:r=>r.some(o=>i(o)===0)}}function _1(s,e,t,n){let i=b1(e,s),r=new Map;for(let l of s){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;r.set(c,[...r.get(c)??[],l])}let o=[],a=[];for(let l of r.values()){let c=l[0],h=l.find(f=>f!==c&&f.u===c.v&&f.v===c.u&&f.room!==c.room);for(let f of l)f!==c&&f!==h&&f.room!==c.room&&n.push(`overlap:${c.room}:${f.room}`);let u=h?[c,h]:[c];if(i.hasNoWall(u)){h&&a.push([c.room,h.room]);continue}if(h){let f=i.thicknessOf(u)??t.interior;o.push({a:c.u,b:c.v,left:f/2,right:f/2,exterior:!1,roomLeft:c.room,roomRight:h.room,sources:u.map(Jm),height:i.heightOf(u)})}else o.push({a:c.u,b:c.v,left:0,right:i.thicknessOf(u)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[Jm(c)],height:i.heightOf(u)})}return{drafts:o,open:a}}function y1(s,e){let t=n=>ei(ct(e[n.b],e[n.a]));for(let n of s){if(n.exterior||n.free)continue;let i=new Set;for(let o of[n.a,n.b])for(let a of s)!a.exterior||a.free||a.a!==o&&a.b!==o||Math.abs(wn(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?i.add("left"):a.roomLeft===n.roomRight&&i.add("right"));if(i.size!==1)continue;let r=n.left+n.right;[n.left,n.right]=i.has("left")?[0,r]:[r,0]}}var v1=(s,e)=>{let t=r=>Math.round(r*100),[n,i]=s[0]<e[0]||s[0]===e[0]&&s[1]<=e[1]?[s,e]:[e,s];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`};function ea(s,e,t=[]){let n=e.eps??.005,i=[],r=m1(n),o=g1(s,r),a=t.filter(d=>Math.hypot(d.b[0]-d.a[0],d.b[1]-d.a[1])>.05),l=a.map(d=>[r.idOf(d.a),r.idOf(d.b)]),c=new Set;for(let d of s){let _=d.points;_.length<3||(d.wall_splits??[]).forEach((y,b)=>{if(!y||b>=_.length)return;let v=_[b],S=ct(_[(b+1)%_.length],v),T=Bn(S);for(let M of y)M>n&&M<T-n&&c.add(r.idOf(xi(v,Qn(S,M/T))))})}let h=x1(o,r.points,n),{drafts:u,open:f}=_1(h,s,e,i);y1(u,r.points);let p=u;a.forEach((d,_)=>{let[y,b]=l[_];if(y===b)return;let v=[(d.a[0]+d.b[0])/2,(d.a[1]+d.b[1])/2],S=s.find(M=>M.points.length>=3&&gt(v,M.points))?.id??null,T=(d.thickness??e.interior)/2;p.push({free:d.id,a:y,b,left:T,right:T,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof d.height=="number"&&d.height>0?d.height:void 0})});let m=$m(p,r.points,c),x=Km(m,r.points);return{walls:m.map((d,_)=>{let[y,b]=[r.points[d.a],r.points[d.b]],[v,S]=[x.get(`${_}:a`),x.get(`${_}:b`)],T=Zm([v.right,S.left,b,S.right,v.left,y],1e-6);return{id:v1(y,b),a:[y[0],y[1]],b:[b[0],b[1]],left:d.left,right:d.right,exterior:d.exterior,roomLeft:d.roomLeft,roomRight:d.roomRight,sources:d.sources,footprint:T,...d.free?{free:d.free}:{},...d.height!==void 0?{height:d.height}:{}}}),warnings:[...new Set(i)],open:f}}function jm(s,e,t){let n=s.points[e];return xi(n,Qn(ei(ct(s.points[(e+1)%s.points.length],n)),t))}function Qm(s,e,t){if(s.wall){let i=t.find(a=>a.id===s.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=ei(ct(i.b,i.a));return{room:{id:s.room_id,name:"",area_id:null,points:[i.a,i.b,xi(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===s.room_id);return n&&s.edge<n.points.length?{room:n,edge:s.edge}:null}var e0=(s,e)=>Sn(ct(e,s.a),ei(ct(s.b,s.a)));function t0(s,e,t){if(!e.wall)return M1(s,t.room,t.edge,e.offset);let n=s.find(i=>i.free===e.wall);return n?{wall:n,s:e0(n,jm(t.room,0,e.offset))}:null}function M1(s,e,t,n){for(let i of s)if(i.sources.some(o=>o.room_id===e.id&&o.edge===t&&n>=o.t0-1e-6&&n<=o.t1+1e-6))return{wall:i,s:e0(i,jm(e,t,n))};return null}var n0=([s,e])=>{let t=Math.hypot(s,e)||1;return[s/t,e/t]};function S1(s){return s.reduce((e,t,n)=>e+(t[0]*s[(n+1)%s.length][1]-s[(n+1)%s.length][0]*t[1]),0)/2}function Rc(s,e){let t=s.length;if(t<3||Math.abs(e)<1e-9)return s.map(([i,r])=>[i,r]);let n=S1(s)>=0?1:-1;return s.map((i,r)=>{let o=s[(r+t-1)%t],a=s[(r+1)%t],[l,c]=n0([i[0]-o[0],i[1]-o[1]]),[h,u]=n0([a[0]-i[0],a[1]-i[1]]),f=[c*n,-l*n],p=[u*n,-h*n],m=[f[0]+p[0],f[1]+p[1]],x=Math.hypot(m[0],m[1]);if(x<1e-6)return[i[0]+f[0]*e,i[1]+f[1]*e];let g=(m[0]*f[0]+m[1]*f[1])/x,d=Math.min(4,1/Math.max(.25,g));return[i[0]+m[0]/x*e*d,i[1]+m[1]/x*e*d]})}function jh(s,e){if(s.points&&s.points.length>=3)return Rc(s.points,e);let t=Math.min(s.x0,s.x1)-e,n=Math.max(s.x0,s.x1)+e,i=Math.min(s.z0,s.z1)-e,r=Math.max(s.z0,s.z1)+e;return[[t,i],[n,i],[n,r],[t,r]]}function is(s,e){let t=Mn(s),n=pn(s),i=t.w,[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(d,_)=>[d,_,n.y(_)],h=c(a,-r),u=c(l,-r),f=c(l,i+o),p=c(a,i+o),[m,x]=[kr(s.pitch_a),kr(s.pitch_b)],g=d=>[d,n.vr,n.rh];switch(s.shape){case"pent":return{faces:[[h,u,f,p]],rim:[h,u,f,p],ridges:[[f,p]],gable:[[0,n.y(0)],[i,n.y(i)]]};case"hip":case"pyramid":{let d=(t.u1-t.u0)/2,_=s.shape==="pyramid"?d:Math.min(d,Math.min(n.vr,i-n.vr)||i/2),y=g(t.u0+_),b=g(t.u1-_);return s.shape==="pyramid"?{faces:[[h,u,y],[u,f,y],[f,p,y],[p,h,y]],rim:[h,u,f,p],ridges:[[h,y],[p,y],[u,y],[f,y]],gable:null}:{faces:[[h,u,b,y],[y,b,f,p],[p,h,y],[u,f,b]],rim:[h,u,f,p],ridges:[[y,b],[h,y],[p,y],[u,b],[f,b]],gable:null}}case"halfhip":{let d=Math.min(n.y(0),n.y(i)),_=d+(n.rh-d)*.55,y=m>1e-6?Math.min(n.vr,(_-s.eave_a)/m):n.vr,b=x>1e-6?Math.max(n.vr,i-(_-s.eave_b)/x):n.vr,v=Math.min((t.u1-t.u0)/2-.1,(n.rh-_)/Math.max(.2,m)),S=g(t.u0+v),T=g(t.u1-v),M=[a,y,_],E=[a,b,_],C=[l,y,_],A=[l,b,_];return{faces:[[h,u,C,T,S,M],[S,T,A,f,p,E],[E,M,S],[C,A,T]],rim:[h,u,C,A,f,p,E,M],ridges:[[S,T],[M,S],[E,S],[C,T],[A,T]],gable:[[0,n.y(0)],[y,_],[b,_],[i,n.y(i)]]}}case"mansard":{let d=$h(i,s.eave_a,s.eave_b,m,x),_=[a,d.vla,d.yla],y=[l,d.vla,d.yla],b=[a,i-d.vlb,d.ylb],v=[l,i-d.vlb,d.ylb],S=[a,d.vr,d.rh],T=[l,d.vr,d.rh];return{faces:[[h,u,y,_],[_,y,T,S],[S,T,v,b],[b,v,f,p]],rim:[h,u,y,T,v,f,p,b,S,_],ridges:[[S,T],[_,y],[b,v]],gable:[[0,n.y(0)],[d.vla,d.yla],[d.vr,d.rh],[i-d.vlb,d.ylb],[i,n.y(i)]]}}default:{let d=g(a),_=g(l);return{faces:[[h,u,_,d],[d,_,f,p]],rim:[h,u,_,f,p,d],ridges:[[d,_]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}}}function ks(s,e,t){let n=null;for(let i of s.faces){if(!gt([e,t],i.map(([f,p])=>[f,p])))continue;let[r,o]=i,a=i.slice(2).find(f=>Math.abs((o[0]-r[0])*(f[1]-r[1])-(o[1]-r[1])*(f[0]-r[0]))>1e-9);if(!a)continue;let l=[o[0]-r[0],o[2]-r[2],o[1]-r[1]],c=[a[0]-r[0],a[2]-r[2],a[1]-r[1]],h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(h[1])<1e-9)continue;let u=r[2]-(h[0]*(e-r[0])+h[2]*(t-r[1]))/h[1];n=n===null?u:Math.min(n,u)}return n}function zr(s,e,t,n){let i=o=>n?o[e]<=t+1e-9:o[e]>=t-1e-9,r=[];return s.forEach((o,a)=>{let l=s[(a+1)%s.length];if(i(o)&&r.push(o),i(o)!==i(l)){let c=(t-o[e])/(l[e]-o[e]);r.push([o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c])}}),r}function Cc(s,e){let t=zr(zr(s,0,e.u0,!1),0,e.u1,!0);return[zr(s,0,e.u0,!0),zr(s,0,e.u1,!1),zr(t,1,e.v0,!0),zr(t,1,e.v1,!1)].filter(i=>i.length>=3&&Math.abs(jo(i.map(([r,o])=>[r,o])))>1e-6)}function ta(s,e,t){let n=Mn(e),i=s.floors.flatMap(h=>h.rooms.filter(u=>u.points.length>=3&&h.elevation+h.height>e.base+.05)),r=h=>h.some(u=>i.some(f=>gt(u,f.points))),o=.35,a=[.15,.5,.85].map(h=>n.u0+(n.u1-n.u0)*h),l=[.15,.5,.85].map(h=>n.w*h),c=h=>h?0:t;return{a:c(r(a.map(h=>n.at(h,-o)))),b:c(r(a.map(h=>n.at(h,n.w+o)))),u0:c(r(l.map(h=>n.at(n.u0-o,h)))),u1:c(r(l.map(h=>n.at(n.u1+o,h))))}}var Ic=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),i0=s=>s.shape==="flat"||s.shape==="parapet";function Vr(s,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return s.filter(r=>{if(r===e||r.dormer||r.open||i0(r)||Ic(r)<Ic(e)*1.5)return!1;let o=Ec(r);return t>=o.x0&&t<=o.x1&&n>=o.z0&&n<=o.z1}).reduce((r,o)=>r===null||Ic(o)<Ic(r)?o:r,null)}function s0(s,e){let t=is(s,{u0:0,u1:0,a:0,b:0}),n=pn(s);return i=>{let[r,o]=e.at(i,e.w/2),[a,l]=gi(s,r,o);return ks(t,a,l)??n.y(l)}}function Pc(s,e){if(i0(e))return e;let t=Mn(e),n=pn(e).rh,i=s0(s,t),r=i(t.u0)<=i(t.u1),[o,a]=r?[t.u0,t.u1]:[t.u1,t.u0],l=r?1:-1,c=a;for(let f=.5;f<Math.abs(a-o);f+=.05)if(i(o+l*f)>=n-.02){c=o+l*f;break}if(Math.abs(c-a)<.05)return e;let h={...e},u=a===t.u1;return e.axis==="x"?h[u?"x1":"x0"]=c:h[u?"z1":"z0"]=c,h}function Qh(s,e){let t=Pc(s,e),n=Mn(t),i=pn(t),r=s0(s,n),o=r(n.u0)<=r(n.u1),a=n.u1-n.u0,l=Math.max(1,Math.ceil(a/.15)),c=[];for(let h=0;h<l;h++){let[u,f]=[a*h/l,a*(h+1)/l],[p,m]=o?[n.u0+u,n.u0+f]:[n.u1-u,n.u1-f],x=r(m),g=1/0,d=-1/0;for(let b=0;b<=40;b++){let v=n.w*b/40;i.y(v)>x+.02&&(g=Math.min(g,v),d=Math.max(d,v))}if(!(d-g>.05))continue;let _=gi(s,...n.at(p,g)),y=gi(s,...n.at(m,d));c.push({u0:Math.min(_[0],y[0]),u1:Math.max(_[0],y[0]),v0:Math.min(_[1],y[1]),v1:Math.max(_[1],y[1])})}return c}var r0=.14,w1=s=>s.shape==="flat"||s.shape==="parapet";function ef(s,e){return!s.open&&Math.min(s.base,s.eave_a,s.eave_b)<e-.05}function tf(s,e,t){let n=Math.max(0,s.settings.roof.overhang??0),i=1e-6,r=[];for(let o of s.settings.roof.sections??[]){if(o.open)continue;let[a,l,c,h]=[Math.min(o.x0,o.x1),Math.max(o.x0,o.x1),Math.min(o.z0,o.z1),Math.max(o.z0,o.z1)];if(e<a-i||e>l+i||t<c-i||t>h+i||o.points&&o.points.length>=3&&!gt([e,t],o.points))continue;let[u,f]=gi(o,e,t),p=Math.max(0,o.overhang??n),m=w1(o)?null:ks(is(o,{u0:p,u1:p,a:p,b:p}),u,f);r.push((m??pn(o).y(f))-r0)}return r.length?Math.max(...r):null}function nf(s,e){let t=s.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}function sf(s,e,t){let n=s.settings.roof.sections??[],i=n.filter(l=>t.includes(l.id)).map(l=>Vr(n,l)??l);if(i.length===0)return e.id;let r=Math.max(...i.map(Kh)),o=l=>l.rooms.some(c=>{if(c.points.length<3)return!1;let h=c.points.reduce((f,p)=>f+p[0],0)/c.points.length,u=c.points.reduce((f,p)=>f+p[1],0)/c.points.length;return i.some(f=>h>=Math.min(f.x0,f.x1)&&h<=Math.max(f.x0,f.x1)&&u>=Math.min(f.z0,f.z1)&&u<=Math.max(f.z0,f.z1))});return s.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}var Oi=1e-4;function o0(s){return s.reduce((e,t,n)=>e+wn(t,s[(n+1)%s.length]),0)/2}var a0=s=>o0(s)>=0?[...s]:[...s].reverse();function l0(s,e,t,n){let i=ct(e,s),r=ct(n,t),o=wn(i,r);if(Math.abs(o)<1e-12)return null;let a=wn(ct(t,s),r)/o,l=wn(ct(t,s),i)/o;return a>Oi&&a<1-Oi&&l>-Oi&&l<1+Oi?a:null}function rf(s,e,t){let n=ct(t,e),i=Sn(n,n);if(i<1e-12)return null;let r=Sn(ct(s,e),n)/i;return r<=Oi||r>=1-Oi?null:Math.abs(wn(ct(s,e),n))/Math.sqrt(i)<Oi?r:null}var na=(s,e,t=Oi)=>Bn(ct(s,e))<t,ia=s=>s.map((e,t)=>[e,s[(t+1)%s.length]]);function T1(s,e){for(let[t,n]of ia(s))for(let[i,r]of ia(e))if(l0(t,n,i,r)!==null||rf(i,t,n)!==null||rf(t,i,r)!==null||na(t,i))return!0;return gt(s[0],e)||gt(e[0],s)}function A1(s){let e=s.map(a0),t=[];e.forEach((r,o)=>{for(let[a,l]of ia(r)){let c=[0,1];e.forEach((h,u)=>{if(u!==o)for(let[f,p]of ia(h)){let m=l0(a,l,f,p)??rf(f,a,l);m!==null&&c.push(m)}}),c.sort((h,u)=>h-u);for(let h=1;h<c.length;h++){if(c[h]-c[h-1]<Oi)continue;let u=[a[0]+(l[0]-a[0])*c[h-1],a[1]+(l[1]-a[1])*c[h-1]],f=[a[0]+(l[0]-a[0])*c[h],a[1]+(l[1]-a[1])*c[h]],p=Bn(ct(f,u)),m=[(u[0]+f[0])/2+(f[1]-u[1])/p*.001,(u[1]+f[1])/2-(f[0]-u[0])/p*.001];e.some((x,g)=>g!==o&&gt(m,x))||t.some(([x,g])=>na(x,u)&&na(g,f))||t.push([u,f])}}});let n=[],i=new Set;return t.forEach(([r,o],a)=>{if(i.has(a))return;i.add(a);let l=[r],c=o;for(let h=0;h<t.length&&!na(c,l[0],.001);h++){let u=t.findIndex(([f],p)=>!i.has(p)&&na(f,c,.001));if(u<0)break;i.add(u),l.push(t[u][0]),c=t[u][1]}l.length>=3&&o0(l)>1e-6&&n.push(l)}),n}function of(s){let e=s.filter(r=>r.length>=3),t=e.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);e.forEach((r,o)=>{for(let a=o+1;a<e.length;a++)n(o)!==n(a)&&T1(r,e[a])&&(t[n(a)]=n(o))});let i=new Map;return e.forEach((r,o)=>i.set(n(o),[...i.get(n(o))??[],r])),[...i.values()].flatMap(r=>r.length===1?r:A1(r))}function E1(s,e,t){let n=ct(t,e),i=Sn(n,n),r=i?Math.max(0,Math.min(1,Sn(ct(s,e),n)/i)):0;return Bn(ct(s,[e[0]+n[0]*r,e[1]+n[1]*r]))}function c0(s,e,t=.03){return s.every(n=>gt(n,e)||ia(e).some(([i,r])=>E1(n,i,r)<=t))}function u0(s,e){let t=a0(s),n=(i,r)=>{let o=ct(r,i),a=Bn(o)||1;return[-o[1]/a,o[0]/a]};return t.map((i,r)=>{let o=n(t[(r-1+t.length)%t.length],i),a=n(i,t[(r+1)%t.length]),l=1+Sn(o,a);return l<.1?i:[i[0]+(o[0]+a[0])/l*e,i[1]+(o[1]+a[1])/l*e]})}var zs=He(3662079,.95),af=He(3662079,1),ss=He(5995775,.34),h0=He(5995775,.22),Gr=[-.55,.83],rt=-1,Lc=16,Vs=32,f0=48,lf=64,xt=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,i,r=i,o=i,a,l=rt,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(i.r,i.g,i.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ge;return e.setAttribute("position",new Ue(this.p,3)),e.setAttribute("color",new Ue(this.c,3)),e.setAttribute("fold",new Ue(this.f,1)),this.uv&&e.setAttribute("uv",new Ue(this.uv,2)),this.tile&&e.setAttribute("tile",new Ue(this.tile,2)),e.computeBoundingSphere(),e}},cn=class{p=[];c=[];f=[];seg(e,t,n=zs,i=rt){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(i,i)}segSplit(e,t,n,i,r){let[o,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=i+1e-6||r<0)return this.seg(o,a,n,rt);if(o[1]>=i-1e-6)return this.seg(o,a,n,r);let l=(i-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,i,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,rt),this.seg(c,a,n,r)}geometry(){let e=new Ge;return e.setAttribute("position",new Ue(this.p,3)),e.setAttribute("color",new Ue(this.c,3)),e.setAttribute("fold",new Ue(this.f,1)),e}};function d0(s,e,t,n){let r=s.uv?2:0,o=(u,f)=>{let p=u*3+f;return{p:s.p.slice(p*3,p*3+3),c:s.c.slice(p*3,p*3+3),uv:s.uv?s.uv.slice(p*2,p*2+2):null,tile:s.tile?s.tile.slice(p*2,p*2+2):null}},a=(u,f,p)=>({p:u.p.map((m,x)=>m+(f.p[x]-m)*p),c:u.c.map((m,x)=>m+(f.c[x]-m)*p),uv:u.uv&&f.uv?u.uv.map((m,x)=>m+(f.uv[x]-m)*p):null,tile:u.tile}),l=(u,f,p)=>{for(let m=0;m<3;m++){let x=u*3+m;for(let g=0;g<3;g++)s.p[x*3+g]=f[m].p[g],s.c[x*3+g]=f[m].c[g];if(s.uv&&f[m].uv)for(let g=0;g<r;g++)s.uv[x*2+g]=f[m].uv[g];if(s.tile&&f[m].tile)for(let g=0;g<2;g++)s.tile[x*2+g]=f[m].tile[g];s.f[x]=p}},c=(u,f)=>{let p=s.p.length/9;for(let m of u)s.p.push(...m.p),s.c.push(...m.c),s.f.push(f),s.uv?.push(...m.uv??[.5,.5]),s.tile?.push(...m.tile??[0,1]);return p},h=s.p.length/9;for(let u=e;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],p=f.map(M=>M.p[1]>t+1e-6),m=f.map(M=>M.p[1]<t-1e-6);if(!p.some(Boolean))continue;if(!m.some(Boolean)){for(let M=0;M<3;M++)s.f[u*3+M]=n;continue}let x=s.f[u*3],g=(M,E)=>a(M,E,(t-M.p[1])/(E.p[1]-M.p[1])),d=p.filter(Boolean).length,_=d===1?p.indexOf(!0):p.indexOf(!1),y=f[_],b=f[(_+1)%3],v=f[(_+2)%3],S=g(y,b),T=g(v,y);d===1?(l(u,[y,S,T],n),c([S,b,v],x),c([S,v,T],x)):(l(u,[y,S,T],x),c([S,b,v],n),c([S,v,T],n))}}function p0(s,e,t,n){let i=s.p.length/6;for(let r=e;r<i;r++){let o=s.p.slice(r*6,r*6+3),a=s.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){s.f[r*2]=n,s.f[r*2+1]=n;continue}let h=(t-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,t,l[2]+(c[2]-l[2])*h];for(let p=0;p<3;p++)s.p[r*6+p]=l[p],s.p[r*6+3+p]=u[p];let f=s.c.slice(r*6,r*6+3);s.p.push(...u,...c),s.c.push(...f,...f),s.f.push(n,n)}}var Ft=Math.PI/180;function He(s,e){let t=new j(s).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function R1(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e}function sa(s,e=[]){let t=s.map(([n,i])=>new Oe(n,i));return wo.triangulateShape(t,e.map(n=>n.map(([i,r])=>new Oe(i,r))))}function m0(s,e,t,n,i,r,o){let a=new j(o),l=p=>.5+.5*Math.min(1,Math.max(0,p/1.6));for(let p=0;p<4;p++){let m=e[p],x=e[(p+1)%4],g=t[p],d=t[(p+1)%4],_=x[0]-m[0],y=x[1]-m[1],b=Math.hypot(_,y);if(b<1e-6)continue;let S=.8+.28*((y/b*Gr[0]-_/b*Gr[1]+1)/2),T=(g[0]+d[0]-m[0]-x[0])/2*(-y/b)+(g[1]+d[1]-m[1]-x[1])/2*(_/b),M=Math.max(0,Math.min(1,T/Math.max(1e-6,Math.hypot(T,i-n)))),E=He(r,l(n)*S).lerp(a,M),C=He(r,l(i)*S).lerp(a,M);s.tri([m[0],n,m[1]],[g[0],i,g[1]],[d[0],i,d[1]],E,C,C),s.tri([m[0],n,m[1]],[d[0],i,d[1]],[x[0],n,x[1]],E,C,E)}let[c,h,u,f]=t;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(s.tri([c[0],i,c[1]],[u[0],i,u[1]],[h[0],i,h[1]],a),s.tri([c[0],i,c[1]],[f[0],i,f[1]],[u[0],i,u[1]],a))}function g0(s,e,t,n){let i=e.length;if(i<2)return;let r=e[0].length,o=new j(n),a=(m,x)=>[m[0]-x[0],m[1]-x[1],m[2]-x[2]],l=(m,x)=>[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],c=m=>{let x=Math.hypot(m[0],m[1],m[2])||1;return[m[0]/x,m[1]/x,m[2]/x]},h=e.map(m=>[0,1,2].map(x=>m.reduce((g,d)=>g+d[x],0)/r)),u=e.map((m,x)=>m.map((g,d)=>{let _=a(e[Math.min(i-1,x+1)][d],e[Math.max(0,x-1)][d]),y=a(m[(d+1)%r],m[(d+r-1)%r]),b=c(l(_,y)),v=a(g,h[x]);return b[0]*v[0]+b[1]*v[1]+b[2]*v[2]<0&&(b=[-b[0],-b[1],-b[2]]),b})),f=(m,x)=>{let g=.5+.5*Math.min(1,Math.max(0,m[1]/1.6)),d=(x[0]*Gr[0]+x[2]*Gr[1]+1)/2;return He(t,g*(.8+.28*d)).lerp(o,Math.max(0,x[1])*.9)},p=(m,x,g,d,_,y,b)=>{let v=l(a(x,m),a(g,m));v[0]*d[0]+v[1]*d[1]+v[2]*d[2]>=0?s.tri(m,x,g,_,y,b):s.tri(m,g,x,_,b,y)};for(let m=0;m+1<i;m++)for(let x=0;x<r;x++){let g=(x+1)%r,d=e[m][x],_=e[m][g],y=e[m+1][g],b=e[m+1][x],v=u[m][x],S=u[m][g],T=u[m+1][g],M=u[m+1][x],E=f(d,v),C=f(_,S),A=f(y,T),L=f(b,M),P=[v[0]+S[0]+T[0]+M[0],v[1]+S[1]+T[1]+M[1],v[2]+S[2]+T[2]+M[2]];p(d,_,y,P,E,C,A),p(d,y,b,P,E,A,L)}for(let[m,x]of[[0,-1],[i-1,1]]){let g=e[m],d=h[m],_=a(e[m===0?1:i-2][0],g[0]),y=c([_[0]*-x,_[1]*-x,_[2]*-x]),b=f(d,y);for(let v=0;v<r;v++)p(g[v],g[(v+1)%r],d,y,b,b,b)}}function x0(s,e,t,n,i,r,o,a,l,c){let h=new j(l),u=[];for(let p=0;p<c;p++){let m=p/c*Math.PI*2;u.push({y:r+Math.cos(m)*o,s:i+Math.sin(m)*o})}let f=(p,m)=>{let x=e(p,u[m%c].s);return[x[0],u[m%c].y,x[1]]};for(let p=0;p<c;p++){let m=(p+.5)/c*Math.PI*2,x=He(a,.62+.4*Math.max(0,Math.cos(m)));s.tri(f(t,p),f(n,p+1),f(n,p),x),s.tri(f(t,p),f(t,p+1),f(n,p+1),x)}for(let p of[t,n]){let m=e(p,i),x=[m[0],r,m[1]];for(let g=0;g<c;g++)s.tri(x,f(p,g),f(p,g+1),h)}}function Dt(s,e,t,n,i,r,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(t+.002,n(m[0],m[1])),l=o.aoFrom??t,c=o.fold??rt,h=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),u=(o.holes??[]).map(m=>R1(m)>0?[...m].reverse():m),f=u.length?[...e,...u.flat()]:e,p=o.topFace===!1&&!o.bottom?[]:sa(e,u);if(o.topFace!==!1){let m=new j(r);for(let[x,g,d]of p){let _=f[x],y=f[g],b=f[d];s.tri([_[0],a(_),_[1]],[b[0],a(b),b[1]],[y[0],a(y),y[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=He(i,.55);for(let[x,g,d]of p){let _=f[x],y=f[g],b=f[d];s.tri([_[0],t,_[1]],[y[0],t,y[1]],[b[0],t,b[1]],m,m,m,void 0,c)}}for(let m of[e,...u])for(let x=0;x<m.length;x++){let g=m[x],d=m[(x+1)%m.length],_=d[0]-g[0],y=d[1]-g[1],b=Math.hypot(_,y);if(b<1e-6||o.skipSide?.(g,d))continue;let S=.8+.28*((y/b*Gr[0]-_/b*Gr[1]+1)/2),T=a(g),M=a(d),E=He(i,h(t)*S),C=He(i,h(T)*S),A=He(i,h(M)*S);s.tri([g[0],t,g[1]],[g[0],T,g[1]],[d[0],M,d[1]],E,C,A,void 0,c),s.tri([g[0],t,g[1]],[d[0],M,d[1]],[d[0],t,d[1]],E,A,E,void 0,c)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},Me=He(5995775,.3),ut=He(5995775,.17),nt=He(3662079,.45),ra=class s{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=S0(n)}rotated(e,t,n){let i=n*Ft,r=Math.cos(i),o=Math.sin(i),a=this.tf;return new s(this.buf,this.lines,(l,c)=>a(e+(l-e)*r-(c-t)*o,t+(l-e)*o+(c-t)*r))}box(e,t,n,i,r,o,a,l=a,c=null){if(t-e<1e-4||o-r<1e-4||i-n<1e-4)return;let h=[this.tf(e,r),this.tf(e,o),this.tf(t,o),this.tf(t,r)];Dt(this.buf,cf(h),n,i,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,i,c)}loft(e,t,n,i,r,o=r,a=null){if(i-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==cf(l)&&(l.reverse(),c.reverse()),m0(this.buf,l,c,n,i,r,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],i,i,a),this.line(l[h],c[h],n,i,a)}sweep(e,t,n=t,i=16,r=2.6,o=null){if(e.length<2)return;let a=e.map(l=>{let c=Math.max(.004,(l.y1-l.y0)/2),h=Math.max(.004,l.hw),u=(l.y0+l.y1)/2,f=[];for(let p=0;p<i;p++){let m=p/i*Math.PI*2,x=Math.cos(m),g=Math.sin(m),[d,_]=this.tf(l.x+h*Math.sign(x)*Math.abs(x)**(2/r),l.z);f.push([d,u+c*Math.sign(g)*Math.abs(g)**(2/r),_])}return f});if(g0(this.buf,a,t,n),o){let l=Math.round(i/4);for(let c=0;c+1<a.length;c++){let h=a[c][l],u=a[c+1][l];this.lines.seg(h,u,o,rt)}}}pad(e,t,n,i,r,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(t-e)/2-.005,(o-r)/2-.005,(i-n)/2),c<.008)return this.box(e,t,n,i,r,o,a,l,h);this.loft([e+c,t-c,r+c,o-c],[e,t,r,o],n,n+c,a),i-n-2*c>.005&&this.box(e,t,n+c,i-c,r,o,a,a,h),this.loft([e,t,r,o],[e+c,t-c,r+c,o-c],i-c,i,a,l)}lyingCyl(e,t,n,i,r,o,a,l,c=l,h=12,u=null){let f=Math.min(a,r-i)/2;if(f<1e-4||o<1e-4)return;let p=(i+r)/2,m=e==="x"?t:n,x=e==="x"?n:t,g=(_,y)=>e==="x"?this.tf(_,y):this.tf(y,_),d=this.buf.p.length;if(x0(this.buf,g,m-o/2,m+o/2,x,p,f,l,c,h),this.mirrored&&df(this.buf,d),u)for(let _ of[m-o/2,m+o/2])for(let y=0;y<h;y++){let b=y/h*Math.PI*2,v=(y+1)/h*Math.PI*2;this.line(g(_,x+Math.sin(b)*f),g(_,x+Math.sin(v)*f),p+Math.cos(b)*f,p+Math.cos(v)*f,u)}}cyl(e,t,n,i,r,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(e+Math.cos(f)*n,t+Math.sin(f)*n))}if(Dt(this.buf,cf(h),i,r,o,a,{aoFrom:0,bottom:i>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],r,r,c)}seg(e,t,n,i,r,o,a=Me){this.line(this.tf(e,n),this.tf(i,o),t,r,a)}line(e,t,n,i,r){this.lines.seg([e[0],n,e[1]],[t[0],i,t[1]],r,rt)}outline(e,t,n,i){for(let r=0;r<4;r++){let o=e[r],a=e[(r+1)%4];this.line(o,a,n,n,i),this.line(o,o,t,n,i)}}};function S0(s){let e=s(0,0),t=s(1,0),n=s(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function cf(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e>=0?s:[...s].reverse()}function Gs(s,e,t,n,i,r,o=D.metal,a=!1){let l=e/2-r-i,c=t/2-r-i;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,p=u*c;a?s.loft([f-i*.3,f+i*.3,p-i*.3,p+i*.3],[f-i/2,f+i/2,p-i/2,p+i/2],0,n,o):s.box(f-i/2,f+i/2,0,n,p-i/2,p+i/2,o)}}function oa(s,e,t,n,i,r,o,a=null,l=!1){let c=(t-e)/o;for(let h=1;h<o;h++){let u=e+c*h;s.seg(u,n,r,u,i,r,ut)}for(let h=0;h<o;h++){let u=e+c*(h+.5),f=a??i-.08;if(l)s.seg(u-Math.min(.1,c/4),f,r+.012,u+Math.min(.1,c/4),f,r+.012,nt);else{let p=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;s.seg(p,f-.08,r+.012,p,f+.08,r+.012,nt)}}}function b0(s,e,t,n,i){let r=-e/2,o=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),h=n*.5,u=Math.min(.24,t*.28);Gs(s,e,t,.07,.05,.05,D.wood,!0),s.pad(r,o,.07,h-.08,a+.02,l,D.fabric,D.fabricTop,.04,Me),s.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],h-.08,n,D.fabric,D.fabricTop,Me),s.pad(r,r+c,h-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me),s.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me);let p=(o-c-(r+c))/i;for(let m=0;m<i;m++){let x=r+c+p*m+.02,g=x+p-.04;s.pad(x,g,h-.08,h+.05,a+u+.02,l-.06,D.cushion,D.cushion,.04),s.loft([x+.01,g-.01,a+u*.55,a+u+.14],[x+.03,g-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,D.cushion)}}function C1(s,e,t,n){let i=-t/2,r=t/2,o=-e/2,a=e/2,l=Math.min(.32,n*.36);Gs(s,e,t,.08,.06,.03,D.wood,!0),s.box(o,a,.08,l,i+.06,r,D.wood,D.woodTop,Me),s.pad(o+.03,a-.03,l,l+.2,i+.08,r-.03,D.white,D.whiteTop,.03),s.box(o,a,.08,n-.05,i,i+.07,D.wood,D.woodTop,Me),s.box(o,a,n-.05,n,i,i+.09,D.wood,D.woodTop,ut);let c=l+.2,h=i+(t-.1)*.36;s.pad(o+.01,a-.01,c-.1,c+.05,h,r-.01,D.cushion,D.fabricTop,.025,ut),s.lyingCyl("x",0,h+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let u=e>1.2?2:1,f=(e-.2)/u;for(let p=0;p<u;p++){let m=o+.1+f*p,x=i+.12,g=Math.min(.42,t*.2),d=.1;s.loft([m+.03+d,m+f-.03-d,x+d*.5,x+g-d*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,D.whiteTop),s.loft([m+.03,m+f-.03,x,x+g],[m+.03+d,m+f-.03-d,x+d*.5,x+g-d*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,ut)}}function I1(s,e,t,n){let i=Math.min(.46,n*.52);Gs(s,e,t,i-.04,.035,.02,D.wood,!0),s.box(-e/2,e/2,i-.04,i,-t/2,t/2,D.wood,D.woodTop,Me),s.pad(-e/2+.02,e/2-.02,i,i+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),s.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],i,n,D.wood,D.woodTop,Me)}function P1(s,e,t,n){Gs(s,e,t,n-.04,.06,.05,D.wood,!0),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,nt),s.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function L1(s,e,t,n){let i=-e/2,r=e/2;s.box(i,r,n-.035,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(i,i+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let o=Math.min(.42,e*.32);s.box(r-o,r,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,Me);let a=t/2-.02;for(let l of[n*.35,n*.66])s.seg(r-o,l,a,r,l,a,ut);for(let l of[n*.2,n*.5,n*.82])s.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,nt);s.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,nt),s.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function rs(s,e,t,n,i,r=null,o=!1){s.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),s.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),oa(s,-e/2,e/2,.08,n,t/2-.02,i,r,o)}function F1(s,e,t,n){s.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(s.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,ut),o<r){let l=-e/2+.025+.04,c=o*3;for(;l<e/2-.025-.12;){let h=.03+c*7%5*.008,u=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&s.box(l,l+h,a+.025,a+.025+u,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=h+.006,c++}}}}function D1(s,e,t,n){let i=Math.max(1,Math.round(e/.6));rs(s,e,t-.02,n-.04,i,n-.2),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function N1(s,e,t,n){s.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,Me);let i=n*.62;s.seg(-e/2,i,t/2,e/2,i,t/2,ut);let r=e/2-.06;s.seg(r,i+.08,t/2+.015,r,i+.4,t/2+.015,nt),s.seg(r,i-.4,t/2+.015,r,i-.08,t/2+.015,nt)}function O1(s,e,t,n){let i=t/2-w0;s.box(-e/2,e/2,.02,n,-t/2,i,D.body,D.bodyTop,Me),s.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,i-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(s.seg(-e/2+.03,r,i+.001,-.03,r,i+.001,ut),s.seg(.03,r,i+.001,e/2-.03,r,i+.001,ut))}var w0=.06;function T0(s,e,t,n,i){let r=s.p.length;U1(s,e,t,n,i),e.mirror&&df(s,r)}function U1(s,e,t,n,i){let r=e.rotation*Ft,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(b,v)=>[e.x+l*b*o-v*a,e.z+l*b*a+v*o],h=t+.05,u=t+e.h-.02,f=new j(.75,.1,.14),p=new j(D.dark),m=new j(D.accent),x=e.w/2-.006,g=(b,v,S)=>{let T=S/d,M=new j(2043212).lerp(f,T),E=new j(D.body).lerp(f,T*.8),C=Math.cos(S),A=Math.sin(S),L=(F,O)=>c(b+v*(F*C-O*A),e.d/2+F*A+O*C),P=(F,O,U,V)=>{let[z,B,H,ee]=F;s.tri([z[0],O,z[1]],[B[0],O,B[1]],[H[0],U,H[1]],V),s.tri([z[0],O,z[1]],[H[0],U,H[1]],[ee[0],U,ee[1]],V)},R=(F,O,U,V,z,B,H,ee=H)=>{let Q=[L(F,B),L(O,B),L(O,z),L(F,z)];P([Q[0],Q[1],Q[1],Q[0]],U,V,ee),P([Q[3],Q[2],Q[2],Q[3]],U,V,H),P([Q[0],Q[3],Q[3],Q[0]],U,V,H),P([Q[1],Q[2],Q[2],Q[1]],U,V,H),P([Q[0],Q[1],Q[2],Q[3]],V,V,H),P([Q[3],Q[2],Q[1],Q[0]],U,U,H)};return R(0,x,h,u,-w0,0,E,M),R(x-.05,x-.03,t+e.h*.45,t+e.h*.75,.005,.025,m),R},d=1.83;g(-e.w/2,1,n*d)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,p),g(e.w/2,-1,i*d)(.06,x-.06,t+e.h*.52,t+e.h*.86,.001,.005,p)}function B1(s,e,t,n){rs(s,e,t-.02,n-.04,1,n-.24,!0),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,Me);for(let[i,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=i*e/.6,l=r*t/.62;s.cyl(a,l,o,n,n+.004,D.dark,1451583,12,nt)}}function k1(s,e,t,n){rs(s,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let i=Math.min(.5,e-.2);s.box(-e/2,-i/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),s.box(i/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),s.box(-i/2,i/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),s.box(-i/2,i/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),s.box(-i/2,i/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,nt),s.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),s.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function z1(s,e,t,n){s.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,Me),s.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),s.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),s.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),s.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),s.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,nt),s.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function V1(s,e,t,n){s.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,Me),s.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[i,r,o,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])s.seg(i,.05,r,o,.05,a,nt),s.seg(i,n,r,o,n,a,nt),s.seg(o,.05,a,o,n,a,nt);s.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),s.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,nt)}function G1(s,e,t,n){let i=Math.min(.18,t*.3);s.box(-e/2,e/2,.45,n,-t/2,-t/2+i,D.white,D.whiteTop,Me),s.box(-e*.3,e*.3,0,.36,-t/2+i-.02,t/2-.12,D.white,D.whiteTop),s.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,Me),s.box(-e/2+.02,e/2-.02,.41,.43,-t/2+i,-t/2+i+.05,D.whiteTop)}function H1(s,e,t,n){rs(s,e,t-.02,n-.12,e>.8?2:1,n-.3),s.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,Me),s.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,nt),s.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),s.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,nt)}function W1(s,e,t,n){rs(s,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let i=Math.min(e*.8,1.45),r=i*.56;s.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),s.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),s.box(-i/2,i/2,n+.1,n+.1+r,-t/2+.12,-t/2+.16,D.dark,D.dark,nt)}function X1(s,e,t,n){let i=Math.min(e,t)/2,r=Math.min(.4,n*.34);s.cyl(0,0,i*.62,0,r,D.pot,D.pot,10,Me),s.cyl(0,0,i*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=i*(.95-.55*l),h=r+(n-r)*(.18+.2*a);s.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?ut:null)}}function q1(s,e,t){s.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[i,r,o,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])s.seg(i,.014,r,o,.014,a,Me)}function Y1(s,e,t,n){let i=Math.max(3,Math.round(n/.18)),r=n/i,o=t/i;for(let h=0;h<i;h++){let u=t/2-o*h,f=u-o,p=r*(h+1);s.box(-e/2,e/2,0,p,f,u,D.wood,D.woodTop),s.seg(-e/2,p,u,e/2,p,u,Me)}s.seg(-e/2,0,t/2,-e/2,r,t/2,Me);for(let h of[-e/2,e/2])s.seg(h,r,t/2,h,n,-t/2+o,ut);let a=.9,l=e/2-.03,c=Math.max(1,i-4);s.seg(l,r+a,t/2-o/2,l,r*c+a,t/2-o*(c-.5),nt);for(let h=0;h<c;h+=3){let u=t/2-o*(h+.5),f=r*(h+1);s.seg(l,f,u,l,f+a,u,ut)}}function $1(s,e,t,n){Gs(s,e,t,.12,.03,.04,D.metal),s.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),oa(s,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function K1(s,e,t,n){s.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),s.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let i=Math.max(3,Math.round((n-.06)/.22)),r=t/2-.02;for(let o=1;o<i;o++){let a=.06+(n-.06)/i*o;s.seg(-e/2,a,r,e/2,a,r,ut)}for(let o=0;o<i;o++){let a=.06+(n-.06)/i*(o+.5);s.seg(-.08,a,r+.012,.08,a,r+.012,nt)}}function Z1(s,e,t,n){s.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,Me),oa(s,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),s.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,Me),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Me);let i=Math.max(2,Math.round(e/.25));for(let r=0;r<i;r++){let o=-e/2+e/i*(r+.5);s.box(o-.015,o+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function _0(s,e,t,n,i){let o=Math.min(.5,i?t*.4:t),a=.08;s.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+o,D.wood,D.woodTop,Me),s.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,Me),s.box(-e/2+(i?o:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+o,D.cushion,D.cushion,ut),i&&(s.box(-e/2,-e/2+o,0,.45-.06,-t/2+o,t/2,D.wood,D.woodTop,Me),s.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,Me),s.box(-e/2+a,-e/2+o,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,ut))}function J1(s,e,t,n){let i=Math.min(e,t)/2;s.cyl(0,0,i*.8,0,.02,D.metal,D.metal,12),s.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),s.cyl(0,0,i*.75,n*.35,n*.35+.015,D.metal,D.metal,12,ut),s.cyl(0,0,i,n-.05,n,D.cushion,D.fabricTop,14,Me)}function j1(s,e,t,n){let i=Math.min(e,t)/2;s.box(-i,i,.04,.08,-.03,.03,D.metal),s.box(-.03,.03,.04,.08,-i,i,D.metal),s.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),s.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),s.box(-i*.75,i*.75,.44,.52,-i*.7,i*.75,D.fabric,D.cushion,Me),s.box(-i*.7,i*.7,.58,n,-i*.78,-i*.62,D.fabric,D.fabricTop,Me),s.box(-.03,.03,.5,.62,-i*.72,-i*.62,D.metal)}function Q1(s,e,t,n){Gs(s,e,t,.08,.04,.05,D.wood),s.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,Me)}function eS(s,e,t,n){s.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,Me),oa(s,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function tS(s,e,t,n){s.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),s.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let i=t/2-.02;s.box(-e/2+.03,e/2-.03,.85,1.45,i,i+.01,D.dark,D.dark,nt),s.seg(-e/2+.08,1.4,i+.02,e/2-.08,1.4,i+.02,nt);for(let r of[.85,1.45])s.seg(-e/2,r,i,e/2,r,i,ut);s.seg(e/2-.06,.5,i+.012,e/2-.06,.7,i+.012,nt),s.seg(e/2-.06,1.6,i+.012,e/2-.06,1.8,i+.012,nt)}function nS(s,e,t,n){let i=t-.3;s.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+i,D.body,D.bodyTop,Me),s.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+i-.04,D.dark),oa(s,-e/2+.05,e/2-.05,.08,n-.04,-t/2+i,Math.max(2,Math.round(e/.6)),n-.2),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function iS(s,e,t,n){s.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,Me),s.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),s.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,nt),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function y0(s,e,t,n,i){s.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,Me);let r=t/2-.012;s.seg(-e/2,n-.14,r,e/2,n-.14,r,ut),s.seg(e/2-.16,n-.07,r,e/2-.08,n-.07,r,nt);let o=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;s.seg(Math.cos(h)*a,o+Math.sin(h)*a,r,Math.cos(u)*a,o+Math.sin(u)*a,r,nt),i||s.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,ut)}}function sS(s,e,t,n){for(let o of[-1,1])for(let a of[-1,1])s.box(o*(e/2)-(o>0?.05:0),o*(e/2)+(o<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])s.box(-e/2,e/2,o,o+.08,-t/2,t/2,D.wood,D.woodTop,Me),s.box(-e/2+.04,e/2-.04,o+.08,o+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,ut),s.box(-e/2+.05,e/2-.05,o+.24,o+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);s.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let r=e/2-.35;for(let o of[r-.18,r+.18])s.seg(o,0,t/2+.02,o,n-.15,t/2+.02,Me);for(let o=.3;o<n-.2;o+=.28)s.seg(r-.18,o,t/2+.02,r+.18,o,t/2+.02,ut)}function rS(s,e,t,n){let i=Math.min(e,t)/2;s.cyl(0,0,i*.4,0,.03,D.metal,D.metal,12),s.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),s.cyl(0,0,i,n-.04,n,D.wood,D.woodTop,20,Me)}function oS(s,e,t,n){Gs(s,e,t,n-.03,.04,.03,D.wood),s.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,ut)}function aS(s,e,t,n){let i=1.3-n/2;s.box(-.12,.12,i+n*.3,i+n*.7,-t/2,-t/2+.03,D.metal),s.box(-e/2,e/2,i,i+n,-t/2+.03,t/2,D.dark,D.dark,nt)}function lS(s,e,t,n){let i=hf;s.box(-e/2+.05,-e/2+.08,0,i,-t/2,-t/2+.03,D.metal),s.box(e/2-.08,e/2-.05,0,i,-t/2,-t/2+.03,D.metal),s.box(-e/2,e/2,i,i+n,-t/2+.02,t/2,D.white,D.whiteTop,Me);let r=Math.max(3,Math.round(e/.1));for(let o=1;o<r;o++){let a=-e/2+e/r*o;s.seg(a,i+.03,t/2+.002,a,i+n-.03,t/2+.002,ut)}}function v0(s,e,t,n,i,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;s.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,i,e+Math.cos(l)*n,t+Math.sin(l)*n,i,nt)}}function cS(s,e,t,n,i){let o=t/2;if(i==="slim"){s.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,Me),s.seg(-e*.25,1.1+n*.15,o+.004,-e*.25,1.1+n*.85,o+.004,nt),s.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(i==="hybrid"){s.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),v0(s,0,1.1+n*.66,Math.min(e,n)*.22,o+.004),s.seg(-e*.08,1.1+n*.66,o+.005,e*.08,1.1+n*.66,o+.005,nt);for(let a of[-1,1])v0(s,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}s.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),s.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),s.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,nt);for(let a of[-1,1])for(let l=1;l<6;l++)s.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,ut)}function uS(s,e,t,n){s.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,Me),s.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),s.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,nt),s.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,ut)}function hS(s,e,t,n){s.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,Me);let r=Math.min(e,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;s.seg(Math.cos(c)*r,o+Math.sin(c)*r,t/2+.003,Math.cos(h)*r,o+Math.sin(h)*r,t/2+.003,nt)}s.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),s.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function fS(s,e,t,n){s.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,Me),s.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,ut),s.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,ut),s.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),s.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),s.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,nt)}function dS(s,e,t,n,i){if(i==="wall"){s.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,Me),s.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,nt),s.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,ut);return}if(i==="cube"){s.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),s.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,Me),s.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,nt),s.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}s.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)s.box(-e/2,e/2,.06+a*o+.004,.06+(a+1)*o,-t/2,t/2,D.white,D.whiteTop,Me);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);s.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,nt)}}var hf=.12;function ff(s,e){let t=pS(s,e);return t&&s.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function pS(s,e){let t=Math.max(.05,s.w),n=Math.max(.05,s.d),i=Math.max(.005,s.h),r=Fm(s.type);if(r){let l=e?Un(e,s):0,c=(r.x-r.w/2)*t,h=(r.x+r.w/2)*t,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+r.y*i+u,y1:l+(r.y+r.h)*i-u,z:(r.z+r.d/2)*n}}let o=e&&s.type!=="fridge_smart"?Un(e,s)-Zo(s):0,a=mS(s,t,n,i,e);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function mS(s,e,t,n,i){if(s.type==="tv_board"){let r=Math.min(e*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-t/2+.165}}if(s.type==="tv_wall"){let r=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:r+.02,y1:r+n-.02,z:t/2+.003}}if(s.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(s.type==="fridge_smart"){let r=i?Un(i,s):0;return{x0:.06,x1:e/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:t/2+.006}}if(s.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:hf+.02,y1:hf+n-.02,z:t/2+.004};if(s.type==="washer"||s.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:t/2-.004}}return s.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function gS(s,e,t,n,i){let r=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),o=new j(1-i,1-i,1-i),a=new j(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],h=[e(-t/2-r,-n/2-r),e(t/2+r,-n/2-r),e(t/2+r,n/2+r),e(-t/2-r,n/2+r)],u=p=>[p[0],l,p[1]],f=s.p.length;s.tri(u(c[0]),u(c[1]),u(c[2]),o),s.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let p=0;p<4;p++){let m=(p+1)%4;s.tri(u(c[p]),u(h[p]),u(h[m]),o,a,a),s.tri(u(c[p]),u(h[m]),u(c[m]),o,a,o)}S0(e)&&df(s,f)}function Fc(s,e,t,n,i=0){xS(s,e,t,n,i)}function df(s,e){let t=(n,i,r)=>{if(n)for(let o=0;o<r;o++){let a=i+r+o,l=i+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<s.p.length;n+=9){let i=n/9;t(s.p,n,3),t(s.c,n,3),t(s.f,i*3,1),t(s.uv,i*6,2),t(s.tile,i*6,2)}}function xS(s,e,t,n,i){let r=Kt(n.type)?0:i-Zo(n);if(Kt(n.type)||Math.abs(r)<.001)return M0(s,e,t,n,i);let o=s.p.length,a=e.p.length;M0(s,e,i<.05?t:new xt,n,0);for(let l=o+1;l<s.p.length;l+=3)s.p[l]+=r;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=r}function M0(s,e,t,n,i){let r=n.rotation*Ft,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],h=new ra(s,e,c),u=Math.max(.05,n.w),f=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":b0(h,u,f,p,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":b0(h,u,f,p,1);break;case"bed":C1(h,u,f,p);break;case"chair":I1(h,u,f,p);break;case"table":P1(h,u,f,p);break;case"desk":L1(h,u,f,p);break;case"nightstand":rs(h,u,f,p,1,p*.72,!0),h.seg(-u/2,p*.5,f/2-.02,u/2,p*.5,f/2-.02,ut);break;case"wardrobe":rs(h,u,f,p,Math.max(2,Math.round(u/.5)),p*.5);break;case"shelf":F1(h,u,f,p);break;case"kitchen":D1(h,u,f,p);break;case"fridge":N1(h,u,f,p);break;case"fridge_smart":O1(h,u,f,p);break;case"stove":B1(h,u,f,p);break;case"sink":k1(h,u,f,p);break;case"bathtub":z1(h,u,f,p);break;case"shower":V1(h,u,f,p);break;case"wc":G1(h,u,f,p);break;case"washbasin":H1(h,u,f,p);break;case"tv_board":W1(h,u,f,p);break;case"plant":X1(h,u,f,p);break;case"rug":q1(h,u,f);return;case"stairs":Y1(h,u,f,p);break;case"stairwell":return;case"sideboard":$1(h,u,f,p);break;case"dresser":K1(h,u,f,p);break;case"tall_cabinet":rs(h,u,f,p,1,p*.5);break;case"coat_rack":Z1(h,u,f,p);break;case"bench":_0(h,u,f,p,!1);break;case"corner_bench":_0(h,u,f,p,!0);break;case"bar_stool":J1(h,u,f,p);break;case"office_chair":j1(h,u,f,p);break;case"stool":Q1(h,u,f,p);break;case"kitchen_wall":eS(h,u,f,p);return;case"kitchen_tall":tS(h,u,f,p);break;case"island":nS(h,u,f,p);break;case"worktop":h.box(-u/2,u/2,Math.max(0,p-.04),p,-f/2,f/2,D.whiteTop,D.whiteTop,Me);return;case"dishwasher":iS(h,u,f,p);break;case"washer":y0(h,u,f,p,!1);break;case"dryer":y0(h,u,f,p,!0);break;case"bunk_bed":sS(h,u,f,p);break;case"table_round":rS(h,u,f,p);break;case"coffee_table":oS(h,u,f,p);break;case"tv_wall":aS(h,u,f,p);return;case"parking":{let x=[[-u/2,-f/2],[u/2,-f/2],[u/2,f/2],[-u/2,f/2]];for(let g=0;g<4;g++)h.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],ut);h.seg(-u*.15,.012,f/2-.45,0,.012,f/2-.2,Me),h.seg(0,.012,f/2-.2,u*.15,.012,f/2-.45,Me);return}case"robot_vacuum":h.box(-u*.45,u*.45,0,p,-f/2,-f/2+f*.3,D.white,D.whiteTop,Me),h.box(-u*.2,u*.2,p*.5,p*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":lS(h,u,f,p);return;case"inverter":cS(h,u,f,p,n.variant??null);return;case"grid_point":uS(h,u,f,p);break;case"wallbox":hS(h,u,f,p);return;case"meter":fS(h,u,f,p);return;case"home_battery":if(dS(h,u,f,p,n.variant??null),n.variant==="wall")return;break;default:{let m=Kt(n.type);if(m){if(A0(h,m,u,f,p,i,null,null,n.variant??null),i>.05)return}else h.box(-u/2,u/2,0,p,-f/2,f/2,D.body,D.bodyTop,Me)}}gS(t,c,u,f,n.type==="plant"?.35:.5)}function uf(s,e){if(!s)return null;if(s.startsWith("#"))return parseInt(s.slice(1),16);let t=D;return(e?t[`${s}Top`]:void 0)??t[s]??null}function A0(s,e,t,n,i,r,o,a=null,l=null){let c=e.colors?.length?(e.colors.find(u=>u.id===l)??e.colors[0]).hex:null,h=!!a;for(let u of e.parts){if(a&&!a(u))continue;let f=h?{...u,glow:!0,w:u.w+.006/t,d:u.d+.006/n,y:Math.max(0,u.y-.002/i),h:u.h+.004/i}:u,p=f.glow&&o!==null,m=f.paint&&c?c:f.color,x=p?o:uf(m,!1)??D.body,g=p?o:uf(f.paint&&c?void 0:f.top,!1)??uf(m,!0)??He(x,1.25).getHex(),d=r+f.y*i,_=r+Math.min(i,(f.y+f.h)*i),y=f.edges==="glow"?zs:f.edges==="faint"?ut:f.edges?Me:null,b=f.rot?s.rotated(f.x*t,f.z*n,f.rot):s;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))b.lyingCyl(f.axis,f.x*t,f.z*n,d,_,f.axis==="x"?f.w*t:f.d*n,f.axis==="x"?f.d*n:f.w*t,x,g,14,y);else if(f.shape==="cyl")b.cyl(f.x*t,f.z*n,Math.min(f.w*t,f.d*n)/2,d,_,x,g,14,y);else if(f.shape==="loft"){let v=f.tx??f.x,S=f.tz??f.z,T=f.tw??f.w,M=f.td??f.d;b.loft([(f.x-f.w/2)*t,(f.x+f.w/2)*t,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(v-T/2)*t,(v+T/2)*t,(S-M/2)*n,(S+M/2)*n],d,_,x,g,y)}else if(f.shape==="sweep"){let v=(f.stations??[]).map(([S,T,M,E])=>({x:f.x*t,z:S*n,y0:r+T*i,y1:r+M*i,hw:E*t/2}));b.sweep(v,x,g,f.n??16,f.exp??2.6,y)}else b.box((f.x-f.w/2)*t,(f.x+f.w/2)*t,d,_,(f.z-f.d/2)*n,(f.z+f.d/2)*n,x,g,y)}}function E0(s,e,t,n,i,r){let o=r*Ft,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[t+m*a-x*l,i+m*l+x*a],h=new ra(s,new cn,c),u=1713728,f=2373216,p=725279;if(e==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,p,u),h.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,p,D.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Dc(s,e,t,n,i){let r=t.rotation*Ft,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(h,u)=>[t.x+l*h*o-u*a,t.z+l*h*a+u*o];A0(new ra(s,new cn,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,i)}var bS={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}};function C0(s,e){return Jo(s)+(e.offset??0)+(Os(e.type)?.01:wc[e.type])}function aa(s){return Bs(s)>=0?s:[...s].reverse()}function _S(s,e){let t=s[e];if(Os(t.type)||t.type==="pool")return[];let n=[];for(let i=e+1;i<s.length;i++){let r=s[i];!r.cut||r.points.length<3||r.points.every(o=>gt(o,t.points))&&n.push(aa(r.points))}return n}function R0(s,e,t,n,i,r,o,a,l=0){let c=t[0]-e[0],h=t[1]-e[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,p=c/u*n*.5;if(Math.abs(l)<1e-4){Dt(s,aa([[e[0]+f,e[1]+p],[t[0]+f,t[1]+p],[t[0]-f,t[1]-p],[e[0]-f,e[1]-p]]),i,r,o,a,{aoFrom:i-1});return}let m=(b,v)=>[e[0]+f*v,b,e[1]+p*v],x=(b,v)=>[t[0]+f*v,b+l,t[1]+p*v],g=(b,v)=>{s.tri(b[0],b[1],b[2],v,v,v,void 0,rt),s.tri(b[0],b[2],b[3],v,v,v,void 0,rt),s.tri(b[0],b[2],b[1],v,v,v,void 0,rt),s.tri(b[0],b[3],b[2],v,v,v,void 0,rt)},d=new j(a),_=new j(He(o,.9)),y=new j(He(o,.6));g([m(r,1),x(r,1),x(r,-1),m(r,-1)],d),g([m(i,1),x(i,1),x(i,-1),m(i,-1)],y),g([m(i,1),x(i,1),x(r,1),m(r,1)],_),g([m(i,-1),x(i,-1),x(r,-1),m(r,-1)],_),g([m(i,1),m(i,-1),m(r,-1),m(r,1)],_),g([x(i,1),x(i,-1),x(r,-1),x(r,1)],_)}function I0(s,e,t){let n=Jo(t),i=t.outdoor??[];i.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=(g,d)=>a-qh(r,g,d),c=a-(r.type==="pool"?0:r.slope??0),h=Os(r.type)&&r.height?r.height:wc[r.type],u={...bS[r.type],top:h},f=aa(r.points),p=He(u.edge,u.edgeAlpha),m=r.open&&(r.type==="fence"||r.type==="pergola")?f.length-1:-1,x=g=>{if(r.outline!==!1)for(let d=0;d<f.length;d++){if(d===m)continue;let _=f[d],y=f[(d+1)%f.length];e.seg([_[0],g(_[0],_[1]),_[1]],[y[0],g(y[0],y[1]),y[1]],p,rt)}};switch(r.type){case"pool":{let g=new j(u.color);for(let[_,y,b]of sa(f)){let v=f[_],S=f[y],T=f[b];s.tri([v[0],a+u.top,v[1]],[T[0],a+u.top,T[1]],[S[0],a+u.top,S[1]],g,g,g,void 0,rt)}let d=new j(u.side);for(let _=0;_<f.length;_++){let y=f[_],b=f[(_+1)%f.length];s.tri([b[0],a+u.top,b[1]],[b[0],a+.06,b[1]],[y[0],a+.06,y[1]],d,d,d,void 0,rt),s.tri([b[0],a+u.top,b[1]],[y[0],a+.06,y[1]],[y[0],a+u.top,y[1]],d,d,d,void 0,rt)}x(()=>a+.06),x(()=>a+u.top+.005);break}case"fence":{for(let g=0;g<f.length;g++){if(g===m)continue;let d=f[g],_=f[(g+1)%f.length],y=Math.hypot(_[0]-d[0],_[1]-d[1]),b=Math.max(1,Math.round(y/2)),v=m>=0&&g===m-1?b:b-1;for(let S=0;S<=v;S++){let T=S/b,M=d[0]+(_[0]-d[0])*T,E=d[1]+(_[1]-d[1])*T,C=l(M,E);Dt(s,aa([[M-.04,E-.04],[M+.04,E-.04],[M+.04,E+.04],[M-.04,E+.04]]),C,C+u.top,u.side,u.color)}for(let S of[.35,.85])e.seg([d[0],l(d[0],d[1])+S*u.top,d[1]],[_[0],l(_[0],_[1])+S*u.top,_[1]],p,rt)}break}case"pergola":{let g=u.top;for(let[d,_]of f){let y=l(d,_);Dt(s,aa([[d-.06,_-.06],[d+.06,_-.06],[d+.06,_+.06],[d-.06,_+.06]]),y,y+g,u.side,u.color)}for(let d=0;d<f.length;d++){if(d===m)continue;let _=f[d],y=f[(d+1)%f.length],b=l(_[0],_[1])+g;if(R0(s,_,y,.12,b-.16,b,u.side,u.color,l(y[0],y[1])-l(_[0],_[1])),r.bracing){let v=l(_[0],_[1]),S=l(y[0],y[1]);e.seg([_[0],v+.25,_[1]],[y[0],S+g-.25,y[1]],p,rt),e.seg([y[0],S+.25,y[1]],[_[0],v+g-.25,_[1]],p,rt)}}if(Xm(f)){let d=qm(f),_=d.x1-d.x0,y=d.z1-d.z0,b=_>=y,v=b?_:y,S=Math.max(1,Math.round(v/.6));for(let T=1;T<S;T++){let M=(b?d.x0:d.z0)+v*T/S,E=b?[M,d.z0+.06]:[d.x0+.06,M],C=b?[M,d.z1-.06]:[d.x1-.06,M],A=l(E[0],E[1])+g;R0(s,E,C,.06,A-.04,A+.08,u.side,u.color,l(C[0],C[1])-l(E[0],E[1]))}}x((d,_)=>l(d,_)+g+.004);break}default:{let g=(_,y)=>l(_,y)+u.top,d=_S(i,o);if(Dt(s,f,c,r.slope?g:a+u.top,u.side,u.color,{aoFrom:c,holes:d}),x((_,y)=>g(_,y)+.004),r.type==="hedge"&&x((_,y)=>l(_,y)+.004),r.outline!==!1)for(let _ of d)for(let y=0;y<_.length;y++){let b=_[y],v=_[(y+1)%_.length];e.seg([b[0],g(b[0],b[1])+.004,b[1]],[v[0],g(v[0],v[1])+.004,v[1]],p,rt)}}}})}var os=Math.PI/180,Ui=(s,e)=>[s[0]-e[0],s[1]-e[1],s[2]-e[2]];var Hr=s=>Math.hypot(s[0],s[1],s[2]),Hs=s=>{let e=Hr(s)||1;return[s[0]/e,s[1]/e,s[2]/e]},P0=(s,e)=>[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]];var F0=.25;function D0(s,e,t,n,i,r,o){let a=i-t>=r-n,l=a?i-t:r-n;return{key:`${s}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?r-n:i-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function N0(s,e){let t=Hs(P0(s,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var O0=s=>{let e=Hs([-s[0],0,-s[2]]);return[e[0],e[2]]};function la(s,e,t,n,i,r,o,a){let l=Hs(Ui(i,n)),c=Hs(Ui(r,n));return{key:s,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:N0(l,c),lu:Hr(Ui(i,n)),ls:Hr(Ui(r,n)),pitch:o,span:a,facing:O0(c)}}function L0(s,e,t,n,i,r){let o=Hr(Ui(i,n));if(o<.3)return null;let a=Hs(Ui(i,n)),l=Ui(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=Hr(h);if(u<.3)return null;let f=Hs(h),p=m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,o-(o-c)*x]};return{key:s,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:N0(a,f),lu:o,ls:u,pitch:Math.atan2(f[1],Math.hypot(f[0],f[2]))/os,span:p,facing:O0(f)}}function yS(s,e){let t=Mn(s),n=pn(s),i=(_,y,b)=>{let[v,S]=t.at(_,y);return[v,b,S]},[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,h=n.y(-r),u=n.y(t.w+o);if(s.shape==="flat"||s.shape==="parapet"){let[_,y]=[t.at(a,-r),t.at(l,t.w+o)];return[D0(s.id,s.id,Math.min(_[0],y[0]),Math.min(_[1],y[1]),Math.max(_[0],y[0]),Math.max(_[1],y[1]),s.eave_a+F0)]}if(s.shape==="pent")return[la(`${s.id}:a`,s.id,"a",i(a,-r,h),i(l,-r,h),i(a,t.w+o,u),s.pitch_a,()=>[0,c])];let f=s.shape==="hip"||s.shape==="pyramid",p=(t.u1-t.u0)/2,m=s.shape==="pyramid"?p:f?Math.min(p,Math.min(n.vr,t.w-n.vr)||t.w/2):0,x=f?t.u0+m-a:0,g=f?l-(t.u1-m):0,d=[];if(n.vr>.3){let _=Math.hypot(n.vr+r,n.rh-h);d.push(la(`${s.id}:a`,s.id,"a",i(a,-r,h),i(l,-r,h),i(a,n.vr,n.rh),s.pitch_a,y=>[x*(y/_),c-g*(y/_)]))}if(t.w-n.vr>.3){let _=Math.hypot(t.w+o-n.vr,n.rh-u);d.push(la(`${s.id}:b`,s.id,"b",i(l,t.w+o,u),i(a,t.w+o,u),i(l,n.vr,n.rh),s.pitch_b,y=>[g*(y/_),c-x*(y/_)]))}if(f){let _=L0(`${s.id}:c`,s.id,"c",i(a,t.w+o,u),i(a,-r,h),i(t.u0+m,n.vr,n.rh)),y=L0(`${s.id}:d`,s.id,"d",i(l,-r,h),i(l,t.w+o,u),i(t.u1-m,n.vr,n.rh));d.push(...[_,y].filter(b=>b!==null))}return d}function U0(s){return s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function ca(s){let e=s.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>yS(y,ta(s,y,y.overhang??e.overhang)));let t=U0(s);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(b=>b[0])),i=t.rooms.flatMap(y=>y.points.map(b=>b[1])),r=s.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-r,Math.max(...n)+r],[l,c]=[Math.min(...i)-r,Math.max(...i)+r],h=t.elevation+t.height;if(e.type==="flat")return[D0("main",null,o,l,a,c,h+F0)];let u=a-o>=c-l,f=e.ridge==="short"?!u:u,p=(f?c-l:a-o)/2,m=p*Math.tan(e.pitch*os),x=(y,b,v)=>f?[y,h+v,(l+c)/2+b]:[(o+a)/2+b,h+v,y],[g,d]=f?[o,a]:[l,c],_=()=>[0,d-g];return[la("main:a",null,"a",x(g,-p,0),x(d,-p,0),x(g,0,m),e.pitch,_),la("main:b",null,"b",x(g,p,0),x(d,p,0),x(g,0,m),e.pitch,_)]}function Nc(s,e){let t=[];for(let n of s.floors.filter(i=>!e||i.id===e)){let{walls:i}=ea(n.rooms,{exterior:s.settings.wall_exterior,interior:s.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let[o,a]=[r.b[0]-r.a[0],r.b[1]-r.a[1]],l=Math.hypot(o,a);if(l<1.2)continue;let[c,h]=[a/l,-o/l],u=Math.min(n.height,r.height??n.height),f=(p,m,x,g)=>t.push({key:p,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+h*r.right],[o/l,0,a/l],[c,0,h]),r.free&&f(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-h*r.left],[-o/l,0,-a/l],[-c,0,-h])}}return t}var ua="ground";function Oc(s){let e=s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??s.floors[0]??null}function Uc(s,e){let t=(e.rotation??0)*os,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=Oc(s),o=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:zm(r,o,a)):e.base??0;return{key:ua,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}var pf=1.13,mf=1.72,ha=.025,as=.07;function Bc(s){let e=s.module_w||pf,t=s.module_h||mf;return s.portrait===!1?[t,e]:[e,t]}function B0(s){return s.layout?.length?s.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,s.rows)},()=>Math.max(1,s.cols))}function k0(s,e){return s.flat?Math.min(45,Math.max(0,e.tilt??15))*os:s.wall?Math.min(90,Math.max(0,e.tilt??0))*os:0}function gf(s,e){let[,t]=Bc(e),n=k0(s,e);return s.wall?t*Math.cos(n)+ha:s.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+ha}function Wr(s,e,t=!1){let[n,i]=Bc(e),r=k0(s,e),o=i*Math.cos(r),a=gf(s,e),l=B0(e),c=Math.max(1,...l),h=new Set(e.skip??[]),u=(m,x,g)=>[0,1,2].map(d=>s.o[d]+s.eu[d]*m+s.es[d]*x+s.n[d]*g),f=(m,x)=>{if(s.unbounded)return!0;if(x<-1e-6||x>s.ls+1e-6)return!1;let[g,d]=s.span(x);return m>=g-1e-6&&m<=d+1e-6},p=[];return l.forEach((m,x)=>{let g=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let d=0;d<m;d++){let _=`${x}:${d}`,y=h.has(_);if(y&&!t)continue;let b=e.u+(d+g)*(n+ha),v=b+n,S=e.v+x*a,T=S+(s.flat||s.wall?o:i);if([[b,S],[v,S],[v,T],[b,T]].every(([M,E])=>f(M,E)))if(s.wall&&r>.001){let M=as+i*Math.sin(r),[E,C]=e.flip?[M,as]:[as,M],A=[u(b,S,E),u(v,S,E),u(v,T,C),u(b,T,C)],L=e.flip?S:T;p.push({corners:A,posts:[b+.05,v-.05].map(P=>[u(P,L,0),u(P,L,M)]),cell:_,skipped:y})}else if(!s.flat)p.push({corners:[u(b,S,as),u(v,S,as),u(v,T,as),u(b,T,as)],posts:[],cell:_,skipped:y});else{let E=.15+i*Math.sin(r),[C,A]=e.flip?[T,S]:[S,T],L=[u(b,C,.15),u(v,C,.15),u(v,A,E),u(b,A,E)],P=[b+.05,v-.05].flatMap(R=>[[u(R,C,0),u(R,C,.15)],[u(R,A,0),u(R,A,E)]]);p.push({corners:L,posts:P,cell:_,skipped:y})}}}),p}var xf=.78,bf=1.18,z0=s=>({id:s.id,face:s.face,u:s.u,v:s.v,rows:1,cols:1,portrait:!0,module_w:s.w||xf,module_h:s.h||bf});function kc(s,e){let t=Wr(s,z0(e))[0];if(!t)return null;let n=i=>[i[0]-s.n[0]*.05,i[1]-s.n[1]*.05,i[2]-s.n[2]*.05];return t.corners.map(n)}var fa=1712952,da=2239816,H0=1318193,Ws=He(3662079,.9),Xr=He(5995775,.45),Zt=.14,wS=9427199,TS=13226982,AS=14936565,ES={black:{glass:new j(329483),edge:He(9082544,.32),cells:He(2766160,.22)},blue:{glass:new j(1386842),edge:He(10467583,.55),cells:He(4025599,.35)}},RS=He(13226982,.5),CS=He(13226982,.85),IS=He(16757575,.95),V0=new j(2845583),G0=new j(3818072);function PS(s){return s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function W0(s,e=new Map){let t=s.settings.roof,n=t?.type==="custom"?null:DS(s),i=t?.type==="custom"?NS(s,t.sections??[],t.overhang):n?[n]:[];return FS(s,i),LS(s,i,e),i}function LS(s,e,t){let n=s.settings.roof?.windows??[];if(!n.length||!e.length)return;let i=new Map(ca(s).map(r=>[r.key,r]));for(let r of n){let o=i.get(r.face),a=o?kc(o,r):null;if(!o||!a)continue;let l=o.section?e.find(A=>A.sections?.includes(o.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,h=A=>[A[0],A[1]-c,A[2]],[u,f,p,m]=a.map(h),x=t.get(r.id)??{open:0,tilt:0,cover:0},g=(A,L)=>[A[0]+o.n[0]*L,A[1]+o.n[1]*L,A[2]+o.n[2]*L],d=(A,L,P)=>[A[0]+(L[0]-A[0])*P,A[1]+(L[1]-A[1])*P,A[2]+(L[2]-A[2])*P],_=x.open>.02||x.tilt>.02?IS:CS,y=[u,f,p,m].map(A=>g(A,.06));for(let A=0;A<4;A++)l.lines.seg(y[A],y[(A+1)%4],_);let b=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*Ft,v=Math.hypot(p[0]-f[0],p[1]-f[1],p[2]-f[2]),S=A=>{let L=o.es;return[A[0]-L[0]*v*Math.cos(b)+o.n[0]*v*Math.sin(b),A[1]-L[1]*v*Math.cos(b)+o.n[1]*v*Math.sin(b),A[2]-L[2]*v*Math.cos(b)+o.n[2]*v*Math.sin(b)]},T=g(m,.065),M=g(p,.065),E=S(T),C=S(M);l.solid.tri(E,C,M,V0),l.solid.tri(E,M,T,V0);for(let[A,L]of[[E,C],[C,M],[M,T],[T,E]])l.lines.seg(A,L,_);if(x.cover>.02){let A=Math.min(1,x.cover),L=g(d(T,E,A),.01),P=g(d(M,C,A),.01),R=g(T,.01),F=g(M,.01);l.solid.tri(L,P,F,G0),l.solid.tri(L,F,R,G0)}}}function FS(s,e){let t=s.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(ca(s).map(i=>[i.key,i]));for(let i of t){let r=n.get(i.face);if(!r)continue;let o=r.section?e.find(a=>a.sections?.includes(r.section)):e[0];o&&_f(o.solid,o.lines,r,i,o.floor.elevation+o.base)}}function _f(s,e,t,n,i){let r=c=>[c[0],c[1]-i,c[2]],o=ES[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Wr(t,n)){let[h,u,f,p]=c.corners.map(r);s.tri(h,u,f,o.glass),s.tri(h,f,p,o.glass),s.tri(h,f,u,o.glass),s.tri(h,p,f,o.glass);let m=(d,_=.004)=>[d[0]+t.n[0]*_,d[1]+t.n[1]*_,d[2]+t.n[2]*_],x=(d,_,y)=>[d[0]+(_[0]-d[0])*y,d[1]+(_[1]-d[1])*y,d[2]+(_[2]-d[2])*y],g=[h,u,f,p].map(d=>m(d));for(let d=0;d<4;d++)e.seg(g[d],g[(d+1)%4],o.edge);for(let d=1;d<a;d++)e.seg(m(x(h,u,d/a)),m(x(p,f,d/a)),o.cells);for(let d=1;d<l;d++)e.seg(m(x(h,p,d/l)),m(x(u,f,d/l)),o.cells);for(let[d,_]of c.posts)e.seg(r(d),r(_),RS)}}function DS(s){let e=s.settings.roof,t=PS(s);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(C=>C.points.map(A=>A[0])),i=t.rooms.flatMap(C=>C.points.map(A=>A[1])),r=s.settings.wall_exterior+e.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,h=new xt,u=new cn;if(e.type==="flat"){Dt(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,fa,da,{bottom:!0});let C=.252;for(let[A,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([A[0],C,A[1]],[L[0],C,L[1]],Ws),u.seg([A[0],0,A[1]],[L[0],0,L[1]],Xr);return{floor:t,base:t.height,solid:h,lines:u,glass:new xt}}let f=a-o>=c-l,p=e.ridge==="short"?!f:f,m=(p?c-l:a-o)/2,x=m*Math.tan(e.pitch*Ft),g=(C,A,L)=>p?[C,L,(l+c)/2+A]:[(o+a)/2+A,L,C],[d,_]=p?[o,a]:[l,c],y=new j(da),b=new j(fa),v=(C,A,L,P,R)=>{h.tri(C,A,L,R),h.tri(C,L,P,R)};for(let C of[-1,1]){v(g(d,C*m,0),g(_,C*m,0),g(_,0,x),g(d,0,x),y),v(g(d,C*m,-Zt),g(d,0,x-Zt),g(_,0,x-Zt),g(_,C*m,-Zt),b),v(g(d,C*m,-Zt),g(_,C*m,-Zt),g(_,C*m,0),g(d,C*m,0),b);for(let A of[d,_])v(g(A,C*m,-Zt),g(A,C*m,0),g(A,0,x),g(A,0,x-Zt),b);u.seg(g(d,C*m,0),g(_,C*m,0),Xr);for(let A of[d,_])u.seg(g(A,C*m,0),g(A,0,x),Xr)}let S=e.overhang,T=new j(H0),M=m-S,E=M*Math.tan(e.pitch*Ft);for(let C of[d+S,_-S])h.tri(g(C,-M,-Zt),g(C,M,-Zt),g(C,0,E-Zt),T),h.tri(g(C,M,-Zt),g(C,-M,-Zt),g(C,0,E-Zt),T);return u.seg(g(d,0,x+.004),g(_,0,x+.004),Ws),{floor:t,base:t.height,solid:h,lines:u,glass:new xt}}function NS(s,e,t){let n=s.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let i=new Map,r=new Map(ca(s).map(o=>[o.key,o]));for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=nf(s,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=i.get(l);c||i.set(l,c={floor:a,base:0,solid:new xt,lines:new cn,glass:new xt,sections:[],lift:!o.open}),c.sections.push(o.id);let h=Vr(e,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!h,f=e.filter(x=>x!==o&&Vr(e,x)===o).flatMap(x=>Qh(o,x));for(let x of s.settings.roof.windows??[]){let g=r.get(x.face),d=g&&g.section===o.id?kc(g,x):null;if(!d)continue;let _=d.map(y=>gi(o,y[0],y[2]));f.push({u0:Math.min(..._.map(y=>y[0])),u1:Math.max(..._.map(y=>y[0])),v0:Math.min(..._.map(y=>y[1])),v1:Math.max(..._.map(y=>y[1]))})}let p=h?Pc(h,o):o,m=null;if(h){let x=Mn(p),g=is(h,{u0:0,u1:0,a:0,b:0}),d=_=>{let[y,b]=x.at(_,x.w/2),[v,S]=gi(h,y,b);return ks(g,v,S)??pn(h).y(S)};m=d(x.u0)<=d(x.u1)?0:1}OS(c.solid,c.lines,p,ta(s,p,p.overhang??t),a.elevation,c.glass,u,f,m)}return[...i.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function OS(s,e,t,n,i,r=s,o=!1,a=[],l=null){let c=Mn(t),h=pn(t),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,u.a),p=Math.max(0,u.b),m=c.w,x=c.u0-Math.max(0,u.u0),g=c.u1+Math.max(0,u.u1),d=(P,R,F)=>{let[O,U]=c.at(P,R);return[O,F-i,U]},_=new j(da),y=new j(fa),b=new j(H0),v=(P,R)=>{for(let F=1;F+1<P.length;F++)s.tri(P[0],P[F],P[F+1],R)},S=[],T=[],M=[],E=null;if(t.shape==="flat"||t.shape==="parapet"){let P=t.eave_a,R=t.shape==="parapet",F=t.points&&t.points.length>=3?jh(t,R?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):R?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+p),c.at(x,m+p)];Dt(s,F,P-i,P-i+.25,fa,da,{bottom:!0});for(let O=0;O<F.length;O++){let U=F[O],V=F[(O+1)%F.length];e.seg([U[0],P-i+.252,U[1]],[V[0],P-i+.252,V[1]],Ws),e.seg([U[0],P-i,U[1]],[V[0],P-i,V[1]],Xr)}if(R){let O=B=>jo(B)>=0?B:[...B].reverse(),U=O(F),V=Rc(U,-.2),z=U.length;for(let B=0;B<z;B++){let H=O([U[B],U[(B+1)%z],V[(B+1)%z],V[B]]);Dt(s,H,P-i+.25,P-i+.65,fa,da),e.seg([U[B][0],P-i+.652,U[B][1]],[U[(B+1)%z][0],P-i+.652,U[(B+1)%z][1]],Ws),e.seg([V[B][0],P-i+.652,V[B][1]],[V[(B+1)%z][0],P-i+.652,V[(B+1)%z][1]],Ws)}}}else{let P=is(t,u);S=P.faces;for(let R of a)S=S.flatMap(F=>Cc(F,R));T=P.rim,M=P.ridges,E=P.gable}let C=!!t.open,A=new j(wS);for(let P of S){if(C){for(let R=1;R+1<P.length;R++)r.tri(d(P[0][0],P[0][1],P[0][2]),d(P[R][0],P[R][1],P[R][2]),d(P[R+1][0],P[R+1][1],P[R+1][2]),A);continue}v(P.map(([R,F,O])=>d(R,F,O)),_),v(P.map(([R,F,O])=>d(R,F,O-Zt)),y)}for(let P=0;P<T.length;P++){let[R,F,O]=T[P],[U,V,z]=T[(P+1)%T.length];C||v([d(R,F,O),d(U,V,z),d(U,V,z-Zt),d(R,F,O-Zt)],y),e.seg(d(R,F,O),d(U,V,z),C?Ws:Xr)}if(C){US(s,e,c,h,u,d,i);return}for(let[[P,R,F],[O,U,V]]of M)e.seg(d(P,R,F+.004),d(O,U,V+.004),Ws);let L=t.base;if(!o){if(E){let P=BS(E,L-Zt),R=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(P.length>=3)for(let F of R)v(P.map(([O,U])=>d(F,O,U)),b)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let P of[0,m]){let R=h.y(P)-Zt;R>L+.02&&v([d(c.u0,P,L),d(c.u1,P,L),d(c.u1,P,R),d(c.u0,P,R)],b)}else if(t.eave_a>L+.02)for(let[P,R,F,O]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])v([d(P,R,L),d(F,O,L),d(F,O,t.eave_a),d(P,R,t.eave_a)],b)}}function US(s,e,t,n,i,r,o){let a=t.w,l=.12,c=.16,h=i.a>0,u=i.b>0,f=i.u0>0,p=i.u1>0,m=(d,_,y,b,v,S)=>{let T=[t.at(d,y),t.at(_,y),t.at(_,b),t.at(d,b)],M=(T[1][0]-T[0][0])*(T[2][1]-T[0][1])-(T[2][0]-T[0][0])*(T[1][1]-T[0][1]);Dt(s,M<0?[...T].reverse():T,v-o,S-o,TS,AS,{bottom:!0})},x=o;for(let[d,_]of[[0,h],[a,u]]){if(!_)continue;let y=n.y(d)-.03,b=d===0?0:a-l;m(t.u0,t.u1,b,b+l,y-c,y),e.seg(r(t.u0,d,y-c),r(t.u1,d,y-c),Xr)}for(let[d,_]of[[t.u0,f],[t.u1-l,p]])if(_)for(let y=0;y<6;y++){let b=a*y/6,v=a*(y+1)/6,S=Math.min(n.y(b),n.y(v))-.03;m(d,d+l,b,v,S-c,S)}let g=[];for(let[d,_]of[[0,h],[a-l,u]]){if(!_)continue;let y=t.u1-t.u0-l,b=Math.max(1,Math.ceil(y/3.5));for(let v=0;v<=b;v++){let S=t.u0+y*v/b;v===0&&!f||v===b&&!p||g.push([S,d])}}if(!h&&!u)for(let d of[t.u0,t.u1-l])(d===t.u0&&f||d!==t.u0&&p)&&g.push([d,a/2-l/2]);for(let[d,_]of g){let y=n.y(_+l/2)-.03-c;m(d,d+l,_,_+l,x,y)}}function BS(s,e){let t=[];for(let r=0;r<s.length;r++){let[o,a]=s[r];a>=e&&t.push([o,a]);let l=s[r+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([o+(l[0]-o)*c,e])}}if(t.length<2)return[];let n=t[0],i=t[t.length-1];return i[1]>e&&t.push([i[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var pa={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},X0={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},ls=.2,ma=8,zc=.42,yf=.42;function Z0(s,e,t,n=[],i=[],r){let{walls:o,open:a}=ea(s.rooms,{exterior:e,interior:t},s.walls??[]),l=(A,L,P)=>{let R=r?r(A,L):null;return R===null?P:Math.max(.05,Math.min(P,R))},c=(A,L,P,R,F)=>{if(!r)return F;let O=F,U=Math.max(2,Math.ceil((R-P)/.25)+1);for(let V=0;V<U;V++){let z=P+(R-P)*V/(U-1);O=Math.min(O,l(A[0]+L[0]*z,A[1]+L[1]*z,F))}return O},h=new xt(!0,!0),u=[],f=new cn,p=[];for(let A of s.rooms){if(A.points.length<3)continue;let L=K0(A.points),P=X0[A.floor_material]??X0.wood,R=new j(P.color),F=n.filter(B=>c0(B,L)).map(B=>u0(B,.003));p.push(...F);let O=[...L,...F.flat()],U=h.count;for(let[B,H,ee]of sa(L,F)){let Q=O[B],ce=O[H],ue=O[ee];h.tri([Q[0],0,Q[1]],[ue[0],0,ue[1]],[ce[0],0,ce[1]],R,R,R,[Q[0],Q[1],ue[0],ue[1],ce[0],ce[1]],rt,P.tile)}u.push({roomId:A.id,start:U,end:h.count,color:P.color});let V=new j(pa.slab),z=B=>{for(let H=0;H<B.length;H++){let ee=B[H],Q=B[(H+1)%B.length];h.tri([ee[0],-ls,ee[1]],[ee[0],0,ee[1]],[Q[0],0,Q[1]],V),h.tri([ee[0],-ls,ee[1]],[Q[0],0,Q[1]],[Q[0],-ls,Q[1]],V)}};z(L);for(let B of F){z([...K0(B)].reverse());for(let H=0;H<B.length;H++){let ee=B[H],Q=B[(H+1)%B.length];f.seg([ee[0],.006,ee[1]],[Q[0],.006,Q[1]],zs),f.seg([ee[0],-ls,ee[1]],[Q[0],-ls,Q[1]],ss)}}}let m=new Map,x=[],g=new Map;for(let A of o){let L="interior",P=null;if(A.exterior){let F=A.b[0]-A.a[0],O=A.b[1]-A.a[1],U=Math.hypot(F,O)||1,V=[O/U,-F/U],z=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*ma)%ma+ma)%ma;L=`s${z}`;let B=z/ma*2*Math.PI;P=[Math.cos(B),Math.sin(B)]}let R=m.get(L);R===void 0&&(R=x.length,m.set(L,R),x.push(P)),g.set(A,R)}let d=new Map,_=[];for(let A of s.openings){let L=Qm(A,s.rooms,s.walls??[]);if(!L)continue;let P=t0(o,A,L);if(!P)continue;let{wall:R,s:F}=P,O=Hc([R.b[0]-R.a[0],R.b[1]-R.a[1]]),U=Math.hypot(R.b[0]-R.a[0],R.b[1]-R.a[1]),V=Math.min(A.width,U),z=Math.max(0,Math.min(U-V,F-V/2)),B=L.room.points,H=R.free?O[0]*(B[1][0]-B[0][0])+O[1]*(B[1][1]-B[0][1])>0:R.roomLeft===A.room_id,ee=[-O[1],O[0]],Q=H?ee:[-ee[0],-ee[1]],ce=Math.min(c(R.a,O,z,z+V,Vc(R,s.height))-.02,A.sill+A.height),ue=Math.max(0,Math.min(A.sill,ce-.1)),Be=[Q[1],-Q[0]],q=O[0]*Be[0]+O[1]*Be[1]>0,Z={opening:A,bucket:g.get(R),start:[R.a[0]+O[0]*z,R.a[1]+O[1]*z],axis:O,width:V,toRoom:Q,faceRoom:H?R.left:R.right,faceOut:H?R.right:R.left,sill:ue,top:ce,hingeAtStart:A.hinge==="left"===q,exterior:R.exterior};_.push(Z);let ae=d.get(R);ae||d.set(R,ae=[]),ae.push({s0:z,s1:z+V,sill:ue,top:ce,info:Z})}let y=Math.min(s.cut_height,s.height),b=new xt;for(let A of o){let L=g.get(A),P=Hc([A.b[0]-A.a[0],A.b[1]-A.a[1]]),R=(d.get(A)??[]).sort((ee,Q)=>ee.s0-Q.s0),F=Vc(A,s.height),O=[],U=[-1/0,...new Set(R.flatMap(ee=>[ee.s0,ee.s1])).values(),1/0].sort((ee,Q)=>ee-Q);for(let ee=0;ee+1<U.length;ee++){let Q=U[ee],ce=U[ee+1];if(ce-Q<1e-6)continue;let ue=Number.isFinite(Q)&&Number.isFinite(ce)?(Q+ce)/2:Number.isFinite(Q)?Q+1:ce-1,Be=R.filter(ae=>ae.s0<ue&&ae.s1>ue).map(ae=>[ae.sill,ae.top]).sort((ae,we)=>ae[0]-we[0]),q=[],Z=-ls;for(let[ae,we]of Be)ae>Z+1e-4&&q.push([Z,ae]),Z=Math.max(Z,we);F>Z+1e-4&&q.push([Z,F]),O.push({t0:Q,t1:ce,ranges:q})}let V=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),z=r&&c(A.a,P,0,V,F)<F-.001,B=z?O.flatMap(ee=>{let Q=Math.max(ee.t0,-.5),ce=Math.min(ee.t1,V+.5),ue=Math.max(1,Math.ceil((ce-Q)/.3));return Array.from({length:ue},(Be,q)=>({t0:q===0?ee.t0:Q+(ce-Q)*q/ue,t1:q===ue-1?ee.t1:Q+(ce-Q)*(q+1)/ue,ranges:ee.ranges,inner0:q>0,inner1:q<ue-1}))}):O.map(ee=>({...ee,inner0:!1,inner1:!1})),H=ee=>(ee[0]-A.a[0])*P[0]+(ee[1]-A.a[1])*P[1];for(let ee of B){let Q=zS(A.footprint,A.a,P,ee.t0,ee.t1);if(Q.length<3)continue;let ce=(q,Z)=>Math.abs(H(q)-Z)<1e-4,ue=(q,Z)=>ee.inner0&&ce(q,ee.t0)&&ce(Z,ee.t0)||ee.inner1&&ce(q,ee.t1)&&ce(Z,ee.t1),Be=z?Math.min(...Q.map(([q,Z])=>l(q,Z,F))):F;for(let[q,Z]of ee.ranges){let ae=Math.min(Z,z?Math.max(...Q.map(([st,Ne])=>l(st,Ne,F))):Z);if(ae-q<1e-4||Be-q<.01)continue;let we=q>.01,ge=z&&Z>Be,ze=(st,Ne)=>Math.min(Z,l(st,Ne,F));if(q<y-1e-6){let st=ae>y+1e-6?f0+L:Vs+L,Ne=ge&&Be<y?(Ze,ot)=>Math.min(y,ze(Ze,ot)):Math.min(ae,y);Dt(b,Q,q,Ne,pa.wall,pa.wallTop,{aoFrom:0,bottom:we,fold:Vs+L,topFold:st,skipSide:ue})}ae>y+1e-6&&Be>y+1e-6&&Dt(b,Q,Math.max(q,y),ge?ze:ae,pa.wall,pa.wallTop,{aoFrom:0,fold:L,bottom:we&&q>=y,skipSide:ue})}}}let v=o.flatMap(A=>A.footprint),S=GS(o,v),T=new cn;T.p.push(...f.p),T.c.push(...f.c),T.f.push(...f.f);let M=(A,L)=>(d.get(A)??[]).filter(L);for(let A of S.edges){let L=g.get(A.wall);for(let[R,F]of Gc(A,M(A.wall,O=>O.sill<=.005)))T.seg([R[0],.004,R[1]],[F[0],.004,F[1]],h0);for(let[R,F]of Gc(A,M(A.wall,O=>O.sill<y&&O.top>y)))T.seg([R[0],y,R[1]],[F[0],y,F[1]],af,Lc+L);let P=Vc(A.wall,s.height);for(let[R,F]of Gc(A,M(A.wall,O=>O.top>=P-.021))){if(!r){T.seg([R[0],P,R[1]],[F[0],P,F[1]],zs,P<=y+1e-6?Vs+L:L);continue}let O=Math.max(1,Math.ceil(Math.hypot(F[0]-R[0],F[1]-R[1])/.3));for(let U=0;U<O;U++){let V=[R[0]+(F[0]-R[0])*U/O,R[1]+(F[1]-R[1])*U/O],z=[R[0]+(F[0]-R[0])*(U+1)/O,R[1]+(F[1]-R[1])*(U+1)/O],B=l(V[0],V[1],P),H=l(z[0],z[1],P);T.seg([V[0],B,V[1]],[z[0],H,z[1]],zs,Math.max(B,H)<=y+1e-6?Vs+L:L)}}}for(let A of S.corners){let L=l(A.p[0],A.p[1],Vc(A.wall,s.height));T.segSplit([A.p[0],.004,A.p[1]],[A.p[0],L,A.p[1]],ss,Math.min(y,L),g.get(A.wall))}for(let A of d.values())for(let L of A)kS(T,L,y);let E=HS(S.edges,s.rooms,d);I0(b,T,s);for(let A of i)_f(b,T,A.face,A.field,s.elevation);let C=[];for(let A of s.furniture){if(Gm(A.type))continue;let L=b.count,P=T.p.length/6,R=Un(s,A);Mc(A.type)||Fc(b,T,E,A,R),R+A.h>y+.05&&(d0(b,L,y,lf),p0(T,P,y,lf)),C.push({id:A.id,start:L,end:b.count})}return{floor:h.geometry(),roomTris:u,holes:p,walls:b.geometry(),lines:T.geometry(),shadow:E.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(A=>g.get(A)),furnitureTris:C,roofUnder:r}}function kS(s,e,t){let{info:n}=e,i=n.bucket,r=(l,c,h)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],o=l=>l>t+1e-6?i:rt,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])s.segSplit(r(c,l,a),r(c,l,e.top),ss,t,i);s.seg(r(e.s0,l,e.top),r(e.s1,l,e.top),ss,o(e.top)),e.sill>.01&&s.seg(r(e.s0,l,e.sill),r(e.s1,l,e.sill),ss,o(e.sill))}for(let l of[e.s0,e.s1])s.seg(r(l,n.faceRoom,e.top),r(l,-n.faceOut,e.top),ss,o(e.top)),e.sill>.01&&s.seg(r(l,n.faceRoom,e.sill),r(l,-n.faceOut,e.sill),ss,o(e.sill)),e.sill<t&&e.top>t&&s.seg(r(l,n.faceRoom,t),r(l,-n.faceOut,t),af,Lc+i)}function zS(s,e,t,n,i){let r=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],o=s;return Number.isFinite(n)&&(o=q0(o,a=>r(a)-n)),Number.isFinite(i)&&(o=q0(o,a=>i-r(a))),o}function q0(s,e){let t=[];for(let n=0;n<s.length;n++){let i=s[n],r=s[(n+1)%s.length],o=e(i),a=e(r);if(o>=0&&t.push(i),o>=0!=a>=0){let l=o/(o-a);t.push([i[0]+(r[0]-i[0])*l,i[1]+(r[1]-i[1])*l])}}return t}var Y0=s=>Math.round(s*1e3),ga=s=>`${Y0(s[0])},${Y0(s[1])}`,$0=(s,e)=>{let t=ga(s),n=ga(e);return t<n?`${t}|${n}`:`${n}|${t}`};function VS(s,e){let t=[];for(let n=0;n<s.length;n++){let i=s[n],r=s[(n+1)%s.length],o=r[0]-i[0],a=r[1]-i[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of e){let f=((u[0]-i[0])*o+(u[1]-i[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-i[0])*a-(u[1]-i[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=i;for(let u of c){let f=[i[0]+o*u,i[1]+a*u];ga(f)!==ga(h)&&t.push([h,f]),h=f}t.push([h,r])}return t}function GS(s,e){let t=s.map(l=>({wall:l,edges:VS(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,h]of l){let u=$0(c,h);n.set(u,(n.get(u)??0)+1)}let i=[],r=new Map,o=(l,c,h)=>{let u=ga(l),f=r.get(u);f||r.set(u,f={p:l,wall:c,d:[]}),f.d.push(h)};for(let{wall:l,edges:c}of t)for(let[h,u]of c){if(n.get($0(h,u))!==1)continue;let f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(f<1e-4)continue;i.push({a:h,b:u,wall:l});let p=[(u[0]-h[0])/f,(u[1]-h[1])/f];o(h,l,p),o(u,l,p)}let a=[];for(let{p:l,wall:c,d:h}of r.values())h.some(u=>h.some(f=>Math.abs(u[0]*f[1]-u[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:i,corners:a}}function Gc(s,e){if(!e.length)return[[s.a,s.b]];let t=Hc([s.wall.b[0]-s.wall.a[0],s.wall.b[1]-s.wall.a[1]]),n=Hc([s.b[0]-s.a[0],s.b[1]-s.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[s.a,s.b]];let i=u=>(u[0]-s.wall.a[0])*t[0]+(u[1]-s.wall.a[1])*t[1],r=i(s.a),o=i(s.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let u of e)c=c.flatMap(([f,p])=>{if(u.s1<=f||u.s0>=p)return[[f,p]];let m=[];return u.s0>f&&m.push([f,u.s0]),u.s1<p&&m.push([u.s1,p]),m});let h=u=>{let f=(u-r)/(o-r||1);return[s.a[0]+(s.b[0]-s.a[0])*f,s.a[1]+(s.b[1]-s.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>r<=o?[h(u),h(f)]:[h(f),h(u)])}function HS(s,e,t){let n=new xt,i=new j(yf,yf,yf),r=new j(1,1,1),o=.002;for(let a of s)for(let[l,c]of Gc(a,(t.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let p=[u/f,-h/f],m=[(l[0]+c[0])/2+p[0]*.05,(l[1]+c[1])/2+p[1]*.05];if(!e.some(d=>d.points.length>=3&&gt(m,d.points)))continue;let x=[l[0]+p[0]*zc,l[1]+p[1]*zc],g=[c[0]+p[0]*zc,c[1]+p[1]*zc];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],i,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],i,r,i)}return n}function J0(s,e){let t=e.furniture.filter(r=>r.type==="stairwell").map(Ac),n=s.filter(r=>r.elevation<e.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return of(t);let i=n.furniture.filter(r=>(r.type==="stairs"||Kt(r.type)?.hole)&&n.elevation+r.h>=e.elevation-.3).map(Ac);return of([...t,...i])}function Vc(s,e){return Math.min(e,s.height??e)}function Hc(s){let e=Math.hypot(s[0],s[1])||1;return[s[0]/e,s[1]/e]}function K0(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e>=0?s:[...s].reverse()}var WS=500,j0=.12,Q0=1.35,XS=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Wc=class{view={target:new k,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let i=(r,o,a)=>{e.addEventListener(r,o,a),this.listeners.push([r,o])};i("pointerdown",r=>this.onDown(r)),i("pointermove",r=>this.onMove(r)),i("pointerup",r=>this.onUp(r)),i("pointercancel",r=>this.onUp(r)),i("wheel",r=>this.onWheel(r),{passive:!1}),i("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(e-c)/h),f=XS(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=vf(this.view.phi+this.velocity.phi,j0,Q0),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:i,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+i*Math.sin(o)*Math.sin(r),n.y+i*Math.cos(o),n.z+i*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},i=e.theta??n.theta;for(;i-n.theta>Math.PI;)i-=2*Math.PI;for(;i-n.theta<-Math.PI;)i+=2*Math.PI;let r={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:i,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,i))},WS)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,i=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}if(t.button===1||t.button===2||e.shiftKey)this.pan(n,i);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-i/o*2.4;this.view.theta+=a,this.view.phi=vf(this.view.phi+l,j0,Q0),this.velocity={theta:a,phi:l}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,i)):(this.lastTap=r,this.events.tap(n,i))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=vf(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,i=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new k(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new k(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-e*i),this.view.target.addScaledVector(o,t*i/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function vf(s,e,t){return Math.min(t,Math.max(e,s))}function cs(s,e,t="plain"){return s.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},s.customProgramCacheKey=()=>`nf-fold-${t}`,s}function qS(s,e){let t=Kt(e);if(!t)return null;let n=s.scale??1,[i,r,o]=t.size.map(a=>a*n);return{id:`${s.id}:vehicle`,type:e,x:s.x,z:s.z,rotation:s.rotation,w:i,d:r,h:o,variant:s.variant??null,entity:null,power:null}}function Xc(s,e){let t=[],n=!1;for(let i of s.furniture){t.push(i);let r=i.type==="parking"?e.get(i.id):void 0,o=r?qS(i,r):null;o&&(t.push(o),n=!0)}return n?{...s,furniture:t}:s}var eg=["neon","blueprint","day"];function tg(s){return eg.indexOf(s)}var qc={value:new k(.22,.88,1)},Yc={value:0};function ng(s){let e=/^#?([0-9a-f]{6})$/i.exec(s?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var YS=`
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
`;function bi(s,e,t=!1){let n=s.onBeforeCompile.bind(s),i=s.customProgramCacheKey.bind(s);return s.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=e,r.uniforms.uAccent=qc,r.uniforms.uAccentOn=Yc,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${YS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${t?"true":"false"});`)},s.customProgramCacheKey=()=>`${i()}-themed-${t?"l":"s"}`,s}function $c(s){return s==="day"?di:mt}var xa=.012,$S=.012;function sg(s,e,t,n,i,r=[],o){let a=[],l=[],c=[],h=[],u=(x,g,d,_,y,b,v)=>{for(let S of[x,g,d,x,d,_])a.push(S[0],S[1],S[2]),l.push(y[0],y[1],y[2]),c.push(b),h.push(v)};s.rooms.forEach((x,g)=>{if(x.points.length<3)return;let d=x.points.map(T=>T[0]),_=x.points.map(T=>T[1]),y=Math.min(...d),b=Math.min(..._),v=Math.max(1,Math.ceil((Math.max(...d)-y)/i)),S=Math.max(1,Math.ceil((Math.max(..._)-b)/i));for(let T=0;T<v;T++)for(let M=0;M<S;M++){let E=y+(T+.5)*i,C=b+(M+.5)*i;if(!gt([E,C],x.points)||r.some(P=>gt([E,C],P)))continue;let A=y+T*i,L=b+M*i;u([A,xa,L],[A,xa,L+i],[A+i,xa,L+i],[A+i,xa,L],[0,1,0],g,-1)}});let f=s.rooms.length;for(let x of s.outdoor??[]){if(x.points.length<3||Os(x.type))continue;let g=C0(s,x)+xa,d=x.points.map(T=>T[0]),_=x.points.map(T=>T[1]),y=Math.min(...d),b=Math.min(..._),v=Math.max(1,Math.ceil((Math.max(...d)-y)/i)),S=Math.max(1,Math.ceil((Math.max(..._)-b)/i));for(let T=0;T<v;T++)for(let M=0;M<S;M++){if(!gt([y+(T+.5)*i,b+(M+.5)*i],x.points))continue;let E=y+T*i,C=b+M*i;u([E,g,C],[E,g,C+i],[E+i,g,C+i],[E+i,g,C],[0,1,0],f,-1)}}let p=Math.min(s.cut_height,s.height);e.forEach((x,g)=>{let d=Math.min(s.height,x.height??s.height),_=Math.min(p,d-.02),y=x.b[0]-x.a[0],b=x.b[1]-x.a[1],v=Math.hypot(y,b);if(v<.05)return;let S=[y/v,b/v],T=[-S[1],S[0]],M=t[g],E=KS(x,S,v,n),C=(P,R,F)=>[R,F,...P.filter(O=>O>R+.005&&O<F-.005)].sort((O,U)=>O-U).filter((O,U,V)=>U===0||O>V[U-1]+.005),A=C([_,(_+d)/2,...E.flatMap(P=>[P.y0+.01,P.y1-.01])],.02,d-.02),L=C(E.flatMap(P=>[P.s0,P.s1]),0,v);for(let P of[1,-1]){let R=P>0?x.roomLeft:x.roomRight,F=R?s.rooms.findIndex(B=>B.id===R):x.exterior?f:-1;if(F<0)continue;let O=(P>0?x.left:x.right)+$S,U=[T[0]*P,T[1]*P],V=(B,H)=>[x.a[0]+S[0]*B+U[0]*O,H,x.a[1]+S[1]*B+U[1]*O],z=B=>{let H=V(B,0),ee=o?.(H[0],H[2]);return ee==null?1/0:ee-.02};for(let B=0;B<L.length-1;B++){let H=L[B+1]-L[B],ee=Math.max(1,Math.ceil(H/i));for(let Q=0;Q<ee;Q++){let ce=L[B]+H/ee*Q,ue=L[B]+H/ee*(Q+1),Be=(ce+ue)/2;for(let q=0;q<A.length-1;q++){let Z=A[q],ae=A[q+1];if(ae-Z<.01)continue;let we=(Z+ae)/2;if(E.some(Ne=>Be>Ne.s0&&Be<Ne.s1&&we>Ne.y0&&we<Ne.y1))continue;let ge=Z>=p-1e-6?M:Vs+M,ze=Math.min(ae,z(ce)),st=Math.min(ae,z(ue));ze<=Z+.005&&st<=Z+.005||u(V(ce,Z),V(ue,Z),V(ue,Math.max(Z,st)),V(ce,Math.max(Z,ze)),[U[0],0,U[1]],F,ge)}}}}});let m=[];for(let x of n){if(x.opening.type!=="door")continue;let g=e.find(y=>rg(y,x));if(!g||!g.roomLeft||!g.roomRight)continue;let d=s.rooms.findIndex(y=>y.id===g.roomLeft),_=s.rooms.findIndex(y=>y.id===g.roomRight);d<0||_<0||m.push({id:x.opening.id,a:d,b:_,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:m}}function rg(s,e){let t=s.b[0]-s.a[0],n=s.b[1]-s.a[1],i=Math.hypot(t,n)||1;return Math.abs((e.start[0]-s.a[0])*n-(e.start[1]-s.a[1])*t)/i<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/i)>.99}function KS(s,e,t,n){let i=[];for(let r of n){if(!rg(s,r))continue;let o=(r.start[0]-s.a[0])*e[0]+(r.start[1]-s.a[1])*e[1],l=r.axis[0]*e[0]+r.axis[1]*e[1]>0?o:o-r.width;l>t||l+r.width<0||i.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return i}function ZS(s,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(s){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function JS(s){return(s.kind==="spot"?2:s.kind==="wall"?1.4:2.4)*(.55+.45*s.level)}function ig(s,e,t,n,i,r,o){let a=e-s.x,l=t-s.y,c=n-s.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=JS(s),p=1/(1+h/(f*f)),m=p*Math.sqrt(p),x=Math.max(0,-(a*i+l*r+c*o)/u);return s.level*m*(.2+.8*x)*ZS(s.kind,l/u)}function og(s,e,t=.7,n=[]){let i=[...e];s.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[p,m]of[[h.a,h.b],[h.b,h.a]]){let x=[0,0,0];for(let d of e){if(d.room!==p)continue;let _=d.x-h.x,y=d.y-h.y,b=d.z-h.z,v=Math.hypot(_,y,b)||1,S=ig(d,h.x,h.y,h.z,_/v,y/v,b/v);x[0]+=d.color[0]*S,x[1]+=d.color[1]*S,x[2]+=d.color[2]*S}let g=Math.max(x[0],x[1],x[2]);g<.01||i.push({x:h.x,y:h.y,z:h.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let r=new Map;for(let h of i){let u={...h,color:h.color.map(f=>Math.pow(f,1.5))};r.set(h.room,[...r.get(h.room)??[],u])}let{pos:o,normal:a,room:l}=s,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=r.get(l[h]);if(!u)continue;let f=h*3,p=0,m=0,x=0;for(let g of u){let d=ig(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);p+=g.color[0]*d,m+=g.color[1]*d,x+=g.color[2]*d}c[f]=1-Math.exp(-p*t*1.6),c[f+1]=1-Math.exp(-m*t*1.6),c[f+2]=1-Math.exp(-x*t*1.6)}return c}function ag(s,e,t){let n=s.rooms.findIndex(i=>i.points.length>=3&&gt([e,t],i.points));return n<0?s.rooms.length:n}function lg(s,e){return s&&e>=0&&e<s.length?s[e]:e}var Zc={open:0,open2:0,tilt:0,tilt2:0,cover:null},cg=2043986,ug=2769520,jS=2242399,Mf=1845831,QS=1450554,Bi=16758087,ew=1.2,tw=1.5,nw=1846349,iw=2572395,sw=1120816,rw=1845831,hg=5995775,fg=9085695,qr=He(3662079,.08),ow=.2;function Kc(s,e,t,n,i,r,o,a,l,c,h){let u=(p,m,x)=>e(p,m,x),f=[[u(t,i,a),u(n,i,a),u(n,r,a),u(t,r,a),c],[u(t,i,o),u(n,i,o),u(n,r,o),u(t,r,o),He(l.getHex(),.6)],[u(t,r,o),u(n,r,o),u(n,r,a),u(t,r,a),l],[u(t,i,o),u(n,i,o),u(n,i,a),u(t,i,a),He(l.getHex(),.85)],[u(t,i,o),u(t,r,o),u(t,r,a),u(t,i,a),He(l.getHex(),.92)],[u(n,i,o),u(n,r,o),u(n,r,a),u(n,i,a),He(l.getHex(),.92)]];for(let[p,m,x,g,d]of f)s.tri(p,m,x,d,d,d,void 0,h),s.tri(p,x,g,d,d,d,void 0,h)}function lt(s,e,t,n,i,r,o,a,l,c,h,u){if(a<=h+1e-6)return Kc(s,e,t,n,i,r,o,a,l,c,rt);if(o>=h-1e-6)return Kc(s,e,t,n,i,r,o,a,l,c,u);Kc(s,e,t,n,i,r,o,h,l,c,rt),Kc(s,e,t,n,i,r,h,a,l,c,u)}function us(s,e,t,n,i,r,o,a,l,c,h=0){let u=(f,p,m)=>{let x=b=>h?(o-b)/h:.5,g=e(t,i,f),d=e(n,i,f),_=e(n,i,p),y=e(t,i,p);s.tri(g,d,_,a,a,a,[0,x(f),1,x(f),1,x(p)],m),s.tri(g,_,y,a,a,a,[0,x(f),1,x(p),0,x(p)],m)};o<=l+1e-6?u(r,o,rt):r>=l-1e-6?u(r,o,c):(u(r,l,rt),u(l,o,c))}function aw(s,e,t,n,i,r,o,a,l,c){let h=e(t,i,o),u=e(n,i,o),f=e(n,r,o),p=e(t,r,o),m=0,x=(r-i)/c;s.tri(h,u,f,a,a,a,[0,m,1,m,1,x],l),s.tri(h,f,p,a,a,a,[0,m,1,x,0,x],l)}function dg(s,e,t){let n=new xt,i=new xt,r=new xt(!0),o=new j(cg),a=new j(ug),l=[],c=[],h=[];for(let u of s){let f=n.count,p=i.count,m=r.count,x=e.get(u.opening.id)??Zc,g=u.width,{sill:d,top:_,bucket:y}=u,b=(M,E,C)=>[u.start[0]+u.axis[0]*M+u.toRoom[0]*E,C,u.start[1]+u.axis[1]*M+u.toRoom[1]*E],v=(u.faceRoom-u.faceOut)/2,S=u.opening.mark==="closed",T=u.opening.type==="door"&&Us(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!T||u.opening.type==="garage"){let M=-u.faceOut-.012,E=u.faceRoom+.012,C=u.opening.type==="garage"&&(S?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),A=C?He(Bi,.8):new j(cg),L=C?He(Bi,1):new j(ug);lt(n,b,-.045,.02,M,E,0,_+.045,A,L,t,y),lt(n,b,g-.02,g+.045,M,E,0,_+.045,A,L,t,y),lt(n,b,.02,g-.02,M,E,_-.02,_+.045,A,L,t,y)}if(u.opening.type==="door"){let M=Us(u.opening,u.exterior),E=Wm(M),C=u.opening.swing==="out"?-1:1,A=C>0?u.faceRoom:-u.faceOut,L=u.opening.leaves===2,P=.02,R=g-.02,F=Hm(g,M,u.hingeAtStart,u.opening);if(F){for(let[z,B]of F.panels)lt(n,b,z,z+.04,v-.03,v+.03,.02,_-.02,o,a,t,y),lt(n,b,B-.04,B,v-.03,v+.03,.02,_-.02,o,a,t,y),lt(n,b,z,B,v-.03,v+.03,.02,.1,o,a,t,y),us(i,b,z+.04,B-.04,v,.1,_-.02,qr,t,y);P=F.x0,R=F.x1}let O=L?(R-P)/2-.004:R-P,U=E?.06:.04;E&&(lt(n,b,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new j(Mf),a,t,y),u.exterior&&lt(n,b,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,_+.1,_+.17,He(Bi,.55),He(Bi,.85),t,rt));let V=T?[]:[[u.hingeAtStart,x.open]];L&&!T&&V.push([!u.hingeAtStart,x.open2??0]);for(let[z,B]of V){let H=Math.min(1,Math.max(0,B)),ee=M==="sliding"?0:H*tw,Q=M==="sliding"?H*O:0,ce=(st,Ne,Ze)=>{let ot=st*Math.cos(ee)-Ne*Math.sin(ee)-Q,je=A+C*(Ne*Math.cos(ee)+st*Math.sin(ee)+(Q?.05:0));return b(z?P+ot:R-ot,je,Ze)},ue=H>.05?rt:y,Be=S?!!x.sensed&&H<.05:H>.9,q=Be?He(Bi,.7):new j(E?sw:nw),Z=Be?He(Bi,.9):new j(E?rw:iw);M==="glass"?(lt(n,ce,0,.05,-U,0,.01,_-.01,q,Z,t,ue),lt(n,ce,O-.05,O,-U,0,.01,_-.01,q,Z,t,ue),lt(n,ce,.05,O-.05,-U,0,.01,.12,q,Z,t,ue),lt(n,ce,.05,O-.05,-U,0,_-.08,_-.01,q,Z,t,ue),us(i,ce,.05,O-.05,-U/2,.12,_-.08,qr,t,ue)):lt(n,ce,0,O,-U,0,.01,_-.01,q,Z,t,ue),M==="front_glass"?us(i,ce,.12,O-.12,.001,_*.55,_-.18,qr,t,ue):E&&us(i,ce,.1,.18,.001,.3,_-.3,qr,t,ue);let ae=Math.min(1.05,_*.5),we=E?.3:.012,ge=E?O-.11:O-.16,ze=E?O-.08:O-.05;lt(n,ce,ge,ze,.004,.05,ae-we,ae+we,new j(hg),new j(fg),t,ue),lt(n,ce,ge,ze,-U-.05,-U-.004,ae-we,ae+we,new j(hg),new j(fg),t,ue)}}else if(u.opening.type==="garage"){let M=Math.min(1,Math.max(0,x.cover??1)),E=new j(13951231),C=u.faceRoom-.03,A=_*(1-M);M>.01&&us(r,b,.02,g-.02,C,A,_,E,t,y,.5);let L=(1-M)*_;L>.01&&aw(r,b,.02,g-.02,C,C+L,_+.03,E,y,.5)}else if(Us(u.opening,u.exterior)==="glass_wall"){lt(n,b,0,.04,v-.025,v+.025,d,_,o,a,t,y),lt(n,b,g-.04,g,v-.025,v+.025,d,_,o,a,t,y),lt(n,b,.04,g-.04,v-.025,v+.025,d,d+.03,o,a,t,y),lt(n,b,.04,g-.04,v-.025,v+.025,_-.04,_,o,a,t,y);let C=Math.max(1,Math.round((g-2*.04)/.9)),A=(g-2*.04)/C;for(let L=1;L<C;L++){let P=.04+L*A;lt(n,b,P-.02,P+.02,v-.025,v+.025,d+.03,_-.04,o,a,t,y)}for(let L=0;L<C;L++){let P=.04+L*A+(L?.02:0),R=.04+(L+1)*A-(L<C-1?.02:0);us(i,b,P,R,v,d+.03,_-.04,qr,t,y)}}else{lt(n,b,0,.06,v-.035,v+.035,d,_,o,a,t,y),lt(n,b,g-.06,g,v-.035,v+.035,d,_,o,a,t,y),lt(n,b,.06,g-.06,v-.035,v+.035,d,d+(d>.05?.06:.03),o,a,t,y),lt(n,b,.06,g-.06,v-.035,v+.035,_-.06,_,o,a,t,y),d>.3&&(lt(n,b,-.04,g+.04,v+.035,u.faceRoom+.07,d-.03,d,new j(Mf),a,t,y),u.exterior&&lt(n,b,-.03,g+.03,-u.faceOut-.06,v-.035,d-.04,d-.02,new j(Mf),a,t,y));let C=.055,A=d+(d>.05?.06:.03),L=_-.06,P=v+.035,R=v+.035+.06,O=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let U of O){let V=U.open>.02||U.tilt>.02,z=S?!!x.sensed&&!V:V,B=z?He(Bi,.75):new j(jS),H=z?He(Bi,.95):a,ee=U.x0,Q=U.x1,ce=Q-ee,ue=U.open*ew,Be=U.tilt*ow,q=(ae,we,ge)=>{let ze=ge-A,st=we+ze*Math.sin(Be),Ne=A+ze*Math.cos(Be),Ze=ae*Math.cos(ue)-(st-P)*Math.sin(ue);st=P+(st-P)*Math.cos(ue)+ae*Math.sin(ue);let ot=U.atStart?ee+Ze:Q-Ze;return b(ot,st,Ne)},Z=ue>.05?rt:y;if(lt(n,q,0,C,P,R,A,L,B,H,t,Z),lt(n,q,ce-C,ce,P,R,A,L,B,H,t,Z),lt(n,q,C,ce-C,P,R,A,A+C,B,H,t,Z),lt(n,q,C,ce-C,P,R,L-C,L,B,H,t,Z),us(i,q,C,ce-C,(P+R)/2,A+C,L-C,z?He(Bi,.16):qr,t,Z),Us(u.opening,u.exterior)==="bars"){let ae=(A+L)/2,we=(P+R)/2;lt(n,q,C,ce-C,we-.012,we+.012,ae-.012,ae+.012,B,H,t,Z),lt(n,q,ce/2-.012,ce/2+.012,we-.012,we+.012,A+C,L-C,B,H,t,Z)}}}if(x.cover!==null){let M=-u.faceOut,E=_+.2;lt(n,b,-.05,g+.05,M-.15,M,_,E,new j(QS),a,t,y);let C=Math.min(1,Math.max(0,x.cover));if(C>.01){let A=_-C*(_-d);us(r,b,0,g,M-.07,A,_,new j(16777215),t,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:p,end:i.count}),h.push({id:u.opening.id,start:m,end:r.count})}return{frames:n.geometry(),glass:i.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:h}}var Sf=Math.PI/180,ba=2400,Yr=1600,wf=9;function Jc(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[r,o]of s)i.addColorStop(r,o);return n.fillStyle=i,n.fillRect(0,0,e,e),new an(t)}function lw(s){let t=document.createElement("canvas");t.width=128,t.height=128/2;let n=t.getContext("2d"),i=s*9301+49297,r=()=>(i=(i*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*r()),l=128/2*(.45+.25*r()),c=128*(.12+.14*r()),h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(.6,"rgba(255,255,255,0.45)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,128,128/2)}return new an(t)}var jc=class{group=new dt;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(ba*3);snow;snowPhase=new Float32Array(Yr);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(e){this.scene=e,this.group.name="live-weather",this.group.renderOrder=5;let t=new Ge;t.setAttribute("position",new Ue(new Float32Array(ba*6),3)),this.rain=new xn(t,new kt({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=Jc([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),i=new Ge;i.setAttribute("position",new Ue(new Float32Array(Yr*3),3)),this.snow=new Cn(i,new bn({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<Yr;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let r=new Ge;r.setAttribute("position",new Ue(new Float32Array(600*3),3)),this.hail=new Cn(r,new bn({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=Jc([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<wf;c++){let h=new ws(new Ki({map:lw(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),u=new Fe(new Nn(1,1),new Ye({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:di}));u.rotation.x=-Math.PI/2,u.renderOrder=-1,this.clouds.push({sprite:h,shadow:u,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(h,u)}let a=new Ge;a.setAttribute("position",new Ue(new Float32Array(144),3)),this.bolt=new xn(a,new kt({color:14674175,transparent:!0,opacity:1,blending:mt,depthWrite:!1})),this.bolt.visible=!1;let l=Jc([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new ws(new Ki({map:l,transparent:!0,depthWrite:!1,blending:mt,fog:!1})),this.halo=new ws(new Ki({map:Jc([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:mt,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,e.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(e){this.bounds=e,this.seed()}set(e){let t=this.view;this.view=e,this.group.visible=!!e;let n=e?.weather??null;if(e&&n&&n.fog>.02&&!e.low){let i=new j(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255);this.scene.fog=new vs(i,.008+.04*n.fog)}else this.scene.fog instanceof vs&&(this.scene.fog=null);(!t||t.low!==e?.low||!!t.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let e=this.view?.weather;if(!e)return[0,0];let n=((e.windFrom??270)+(this.view?.north??0)+180)*Sf,i=.4+7*e.wind;return[Math.sin(n)*i,-Math.cos(n)*i]}count(e,t){let n=this.view?.low??!1;return Math.round(Math.min(1,e)*t*(n?.3:1))}seed(){let e=this.bounds,t=this.view?.weather,n=()=>e.x0+Math.random()*(e.x1-e.x0),i=()=>e.z0+Math.random()*(e.z1-e.z0),r=()=>e.y0+Math.random()*(e.y1-e.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<ba;c++){let h=n(),u=r(),f=i();o.setXYZ(c*2,h,u,f),o.setXYZ(c*2+1,h,u-.4,f),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<Yr;c++)a.setXYZ(c,n(),r(),i());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),r(),i());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(t?.rain??0,ba)*2),this.snow.geometry.setDrawRange(0,this.count(t?.snow??0,Yr)),this.hail.geometry.setDrawRange(0,this.count(t?.hail??0,600)),this.rain.visible=!!t&&t.rain>.01,this.snow.visible=!!t&&t.snow>.01,this.hail.visible=!!t&&t.hail>.01,this.clouds.forEach((c,h)=>{c.angle=h/wf*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=e.x0+Math.random()*(e.x1-e.x0),c.sz=e.z0+Math.random()*(e.z1-e.z0)}),this.placeClouds(0)}placeClouds(e){let t=this.view,n=t?.weather,i=n?.cloud??0,r=this.bounds,o=(r.x0+r.x1)/2,a=(r.z0+r.z1)/2,l=Math.max(r.x1-r.x0,r.z1-r.z0),[c,h]=this.windVector(),u=Math.round(i*wf),f=t?.sky??[20,28,44],p=(f[0]+f[1]+f[2])/765,m=n?.rain||n?.lightning?.3:0,x=Math.max(.12,Math.min(1,.28+p*.9-m-.25*Math.max(0,i-.6))),g=Math.hypot(c,h)/Math.max(20,l*4)*e*Math.sign(c||1);this.clouds.forEach((d,_)=>{let y=_<u;d.angle+=g*d.speed;let b=l*d.ring,v=d.sprite.material;v.color.setRGB(x,x*1.02,Math.min(1,x*1.12)),v.opacity=y?.3+.45*i:0,d.sprite.visible=y,d.sprite.position.set(o+Math.cos(d.angle)*b,r.y0+l*d.lift,a+Math.sin(d.angle)*b),d.sprite.scale.set(l*d.scale*1.6,l*d.scale*.6,1),d.sx+=c*.45*d.speed*e,d.sz+=h*.45*d.speed*e;let S=l*.4;d.sx>r.x1+S&&(d.sx=r.x0-S),d.sx<r.x0-S&&(d.sx=r.x1+S),d.sz>r.z1+S&&(d.sz=r.z0-S),d.sz<r.z0-S&&(d.sz=r.z1+S);let T=d.shadow.material;T.opacity=y?.12+.2*i:0,d.shadow.visible=y,d.shadow.position.set(d.sx,r.y0+.03,d.sz),d.shadow.scale.set(l*d.scale*.55,l*d.scale*.35,1)})}placeDisc(){let e=this.view,t=e?.sun,n=e?.weather?.cloud??0,i=!t||t.elevation<-3;if(!e||!t||!e.disc||n>.9||!i&&t.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let r=this.bounds,o=new k((r.x0+r.x1)/2,r.y0,(r.z0+r.z1)/2),a=Math.max(70,Math.max(r.x1-r.x0,r.z1-r.z0)*3.5),l=((i?t.azimuth+180:t.azimuth)+e.north)*Sf,c=Math.max(8,Math.abs(t.elevation))*Sf,h=new k(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),u=o.addScaledVector(h,a),f=a*(i?.07:.1);this.disc.position.copy(u),this.halo.position.copy(u),this.disc.scale.setScalar(f),this.halo.scale.setScalar(f*3.2);let p=this.disc.material,m=this.halo.material,x=i?0:Math.max(0,1-t.elevation/20);p.color.set(i?14016242:new j(1,.9-.25*x,.6-.35*x)),m.color.copy(p.color),p.opacity=(i?.7:.95)*(1-n),m.opacity=(i?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(e){let t=this.bounds,i=(Math.random()<.5?-1:1)<0?t.x0-2-Math.random()*6:t.x1+2+Math.random()*6,r=t.z0+Math.random()*(t.z1-t.z0),o=t.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let h=0;h<l;h++){let u=o-(h+1)/l*(o-t.y0),f=i+(Math.random()-.5)*1.6,p=r+(Math.random()-.5)*1.6;a.setXYZ(h*2,i,c,r),a.setXYZ(h*2+1,f,u,p),i=f,r=p,c=u}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=e+90+Math.random()*120,this.onFlash?.(!0)}step(e){let t=this.view,n=t?.weather;if(!t||!n)return this.last=0,!1;let i=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e;let r=this.bounds,o=r.y1-r.y0,[a,l]=this.windVector();if(this.rain.visible&&i){let c=this.rain.geometry.getAttribute("position"),h=c.array,u=this.count(n.rain,ba);for(let f=0;f<u;f++){let p=f*6,m=this.rainVel[f*3+1],x=h[p]+a*i,g=h[p+1]-m*i,d=h[p+2]+l*i;g<r.y0&&(g+=o,x=r.x0+Math.random()*(r.x1-r.x0)-a*.4,d=r.z0+Math.random()*(r.z1-r.z0)-l*.4);let _=.05;h[p]=x,h[p+1]=g,h[p+2]=d,h[p+3]=x-a*_,h[p+4]=g+m*_,h[p+5]=d-l*_}c.needsUpdate=!0}if(this.snow.visible&&i){let c=this.snow.geometry.getAttribute("position"),h=c.array,u=this.count(n.snow,Yr),f=e/1e3;for(let p=0;p<u;p++){let m=p*3,x=this.snowPhase[p],g=h[m]+(a*.35+Math.sin(f*1.3+x)*.35)*i,d=h[m+1]-(.7+.5*(x*7%1))*i,_=h[m+2]+(l*.35+Math.cos(f*1.1+x)*.35)*i;d<r.y0&&(d+=o,g=r.x0+Math.random()*(r.x1-r.x0),_=r.z0+Math.random()*(r.z1-r.z0)),h[m]=g,h[m+1]=d,h[m+2]=_}c.needsUpdate=!0}if(this.hail.visible&&i){let c=this.hail.geometry.getAttribute("position"),h=c.array,u=this.count(n.hail,600);for(let f=0;f<u;f++){let p=f*3,m=h[p+1]-14*i;m<r.y0&&(m+=o),h[p]+=a*.5*i,h[p+1]=m,h[p+2]+=l*.5*i}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(i),n.lightning&&!t.low?(this.nextBolt||(this.nextBolt=e+2500+Math.random()*6e3),e>=this.nextBolt&&(this.strike(e),this.nextBolt=e+3500+Math.random()*9e3),this.bolt.visible&&e>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof vs&&(this.scene.fog=null)}};var Qc=46,Xs=900;function cw(){let s=document.createElement("canvas");s.width=s.height=32;let e=s.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new an(s)}var eu=class{group=new dt;scene;lift;tex=cw();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(Xs*3);sparkField=new Int16Array(Xs);sparkPhase=new Float32Array(Xs);sparkCount=0;last=0;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-energy";let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(Xs*3),3)),n.setAttribute("color",new Ue(new Float32Array(Xs*3),3)),this.sparks=new Cn(n,new bn({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:mt})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),e.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(e){let t=new Set(e.map(n=>n.key));for(let[n,i]of this.arcs)t.has(n)||(this.group.remove(i.line,i.points),i.line.geometry.dispose(),i.line.material.dispose(),i.points.geometry.dispose(),i.points.material.dispose(),this.arcs.delete(n));for(let n of e){let i=this.arcs.get(n.key);if(!i){let o=new Ge;o.setAttribute("position",new Ue(new Float32Array(99),3));let a=new Rn(o,new kt({transparent:!0,opacity:.4,depthWrite:!1,blending:mt})),l=new Ge;l.setAttribute("position",new Ue(new Float32Array(Qc*3),3));let c=new Cn(l,new bn({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:mt}));a.frustumCulled=c.frustumCulled=!1;let h=new Float32Array(Qc);for(let u=0;u<Qc;u++)h[u]=Math.random();i={arc:n,line:a,points:c,phase:h,count:0,speed:0,a:new k,b:new k,c:new k},this.arcs.set(n.key,i),this.group.add(a,c)}i.arc=n;let r=new j(n.color[0]/255,n.color[1]/255,n.color[2]/255);i.line.material.color.copy(r),i.points.material.color.copy(r),i.count=Math.max(3,Math.min(Qc,Math.round(3+Math.sqrt(n.power)/2.2))),i.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),i.points.geometry.setDrawRange(0,i.count)}this.place()}setSparks(e){this.sparkFields=e;let t=e.reduce((i,r)=>i+r.quads.length*r.level,0),n=0;t>0&&e.forEach((i,r)=>{if(i.level<=0)return;let o=Math.round(Xs*i.quads.length*i.level/Math.max(t,e.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<Xs;a++,n++){let l=i.quads[Math.floor(Math.random()*i.quads.length)],c=Math.random(),h=Math.random();for(let u=0;u<3;u++){let f=l[0][u]+(l[1][u]-l[0][u])*c,p=l[3][u]+(l[2][u]-l[3][u])*c;this.sparkBase[n*3+u]=f+(p-f)*h+(u===1?.12:0)}this.sparkField[n]=r,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(e,t){let n=this.lift(e.floorId);return t.set(e.x,n.y+e.y,e.z),n.visible}place(){for(let e of this.arcs.values()){let t=this.world(e.arc.from,e.a),n=this.world(e.arc.to,e.b),i=e.a.distanceTo(e.b);e.c.copy(e.a).add(e.b).multiplyScalar(.5),e.c.y=Math.max(e.a.y,e.b.y)+.6+i*.22;let r=t&&n;e.line.visible=e.points.visible=r;let o=e.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(e,l))}o.needsUpdate=!0}}bezier(e,t){let n=1-t;return[n*n*e.a.x+2*n*t*e.c.x+t*t*e.b.x,n*n*e.a.y+2*n*t*e.c.y+t*t*e.b.y,n*n*e.a.z+2*n*t*e.c.z+t*t*e.b.z]}step(e){if(!this.active||!this.group.visible)return this.last=0,!1;let t=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let i=n.points.geometry.getAttribute("position");for(let r=0;r<n.count;r++)n.phase[r]=(n.phase[r]+n.speed*t)%1,i.setXYZ(r,...this.bezier(n,n.phase[r]));i.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),i=this.sparks.geometry.getAttribute("color"),r=e/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(r*2.4+this.sparkPhase[o]*3))**6,h=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;i.setXYZ(o,h,h*.86,h*.35)}n.needsUpdate=!0,i.needsUpdate=!0}return!0}setVisible(e){this.group.visible=e}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var pg=3,tu=class{group=new dt;scene;lift;ringGeo=new Es(.92,1,48);spots=new Map;links=[];constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-sound",e.add(this.group)}get active(){return this.spots.size>0}set(e,t){let n=new Set(e.map(i=>i.id));for(let[i,r]of this.spots)if(!n.has(i)){for(let o of r.rings)this.group.remove(o),o.material.dispose();this.spots.delete(i)}for(let i of e){let r=this.spots.get(i.id);if(!r){let a=Array.from({length:pg},()=>{let l=new Fe(this.ringGeo,new Ye({transparent:!0,opacity:0,depthWrite:!1,blending:mt,side:St}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});r={spot:i,rings:a},this.spots.set(i.id,r)}r.spot=i;let o=new j(i.color[0]/255,i.color[1]/255,i.color[2]/255);for(let a of r.rings)a.material.color.copy(o)}for(let i of this.links)this.group.remove(i.line),i.line.geometry.dispose(),i.line.material.dispose();this.links=t.map(([i,r])=>{let o=new Ge;o.setAttribute("position",new Ue(new Float32Array(51),3));let a=new Rn(o,new kt({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:mt}));return a.frustumCulled=!1,this.group.add(a),{a:i,b:r,line:a}})}step(e){if(!this.spots.size&&!this.links.length)return!1;let t=e/1e3;for(let n of this.spots.values()){let i=this.lift(n.spot.at.floorId),r=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(t*.55+a/pg)%1;o.visible=i.visible,o.position.set(n.spot.at.x,i.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*r),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let i=this.lift(n.a.floorId),r=this.lift(n.b.floorId);n.line.visible=i.visible&&r.visible;let o=n.line.geometry.getAttribute("position"),a=i.y+n.a.y,l=r.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let h=0;h<=16;h++){let u=h/16,f=Math.sin(Math.PI*u)*(.3+c*.12)+Math.sin(t*3+u*12)*.03;o.setXYZ(h,n.a.x+(n.b.x-n.a.x)*u,a+(l-a)*u+f,n.a.z+(n.b.z-n.a.z)*u)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var uw=Math.PI/180;function hw(){let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new an(s)}var nu=class{group=new dt;scene;lift;glowTex=hw();views=new Map;onChange=null;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-screens",e.add(this.group)}get active(){return[...this.views.values()].some(e=>e.s.playing)}set(e){let t=new Set(e.map(n=>n.id));for(let[n,i]of this.views)t.has(n)||this.drop(n,i);for(let n of e){let i=this.views.get(n.id);if(!i){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new an(o);a.colorSpace=Mt;let l=new Fe(new Nn(1,1),new Ye({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Fe(new Nn(1,1),new Ye({map:this.glowTex,transparent:!0,depthWrite:!1,blending:mt,side:St}));c.renderOrder=2,this.group.add(l,c),i={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,i)}i.s=n;let r=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(r!==i.sig){let o=i.sig.split("|")[3]!==(n.picture??"");i.sig=r,o&&this.loadPicture(i),this.draw(i)}this.place(i)}}loadPicture(e){e.image=null;let t=e.s.picture;if(!t)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{e.s.picture!==t||!this.views.has(e.s.id)||(e.image=n,this.draw(e),this.onChange?.())},n.src=t}draw(e){let t=e.s,n=e.canvas.getContext("2d"),i=e.canvas.width,r=e.canvas.height,[o,a,l]=t.color,c=n.createLinearGradient(0,0,i,r);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,i,r);let h=22,u=h;if(e.image){let f=r-h*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let p=e.image.naturalWidth||1,m=e.image.naturalHeight||1,x=Math.max(f/p,f/m),g=f/x,d=f/x;n.drawImage(e.image,(p-g)/2,(m-d)/2,g,d,h,h,f,f),n.restore(),u=h*2+f}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,t.title||t.app||"",u,r/2-18,i-u-h),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,t.subtitle,u,r/2+22,i-u-h),t.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(t.playing?"\u25B6 ":"\u275A\u275A ")+t.app,u,r-h-14,i-u-h)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,r-6,i*(t.playing?1:.4),6),e.texture.needsUpdate=!0}text(e,t,n,i,r){let o=t;for(;o.length>1&&e.measureText(o).width>r;)o=o.slice(0,-2);e.fillText(o===t?o:`${o}\u2026`,n,i)}place(e){let t=e.s,n=t.rect,i=t.rotation*uw,r=this.lift(t.floorId),o=(n.x0+n.x1)/2,a=(m,x)=>[t.x+m*Math.cos(i)-x*Math.sin(i),t.z+m*Math.sin(i)+x*Math.cos(i)],l=n.x1-n.x0,c=n.y1-n.y0,[h,u]=a(o,n.z+.012);e.screen.position.set(h,r.y+(n.y0+n.y1)/2,u),e.screen.rotation.set(0,-i,0),e.screen.scale.set(l,c,1);let[f,p]=a(o,n.z-.18);e.glow.position.set(f,r.y+(n.y0+n.y1)/2,p),e.glow.rotation.set(0,-i,0),e.glow.scale.set(l*2.4,c*2.6,1),e.glow.material.color=new j(t.color[0]/255,t.color[1]/255,t.color[2]/255),e.screen.visible=e.glow.visible=r.visible}step(e){let t=!1;for(let n of this.views.values()){this.place(n);let i=n.glow.material;i.opacity=n.s.playing?.55+.25*Math.sin(e/900+n.s.x):.25,t||=n.s.playing}return t}drop(e,t){this.group.remove(t.screen,t.glow),t.screen.geometry.dispose(),t.screen.material.dispose(),t.texture.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose(),this.views.delete(e)}dispose(){for(let[e,t]of this.views)this.drop(e,t);this.glowTex.dispose(),this.scene.remove(this.group)}};var mg=new j(.25,.55,1),Tf=new j(1,.3,.75),iu=10,su=class{group=new dt;scene;lift;points=[];line;comet;rings=[];ringGeo=new Es(.18,.26,32);constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-trail";let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(3),3)),n.setAttribute("color",new Ue(new Float32Array(3),3)),this.line=new Rn(n,new kt({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:mt})),this.line.frustumCulled=!1,this.comet=new Fe(new To(.12,12,8),new Ye({color:Tf,transparent:!0,depthWrite:!1,blending:mt})),this.group.add(this.line,this.comet),this.group.visible=!1,e.add(this.group)}set(e){this.points=e;for(let i of this.rings)this.group.remove(i),i.material.dispose();this.rings=e.map(i=>{let r=new Fe(this.ringGeo,new Ye({color:mg.clone().lerp(Tf,i.age),transparent:!0,opacity:.4+.6*i.age,depthWrite:!1,blending:mt,side:St}));return r.rotation.x=-Math.PI/2,this.group.add(r),r});let t=Math.max(1,(e.length-1)*iu+1);this.line.geometry.dispose();let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(t*3),3)),n.setAttribute("color",new Ue(new Float32Array(t*3),3)),this.line.geometry=n,this.group.visible=e.length>0}at(e,t){let n=this.points[e].at,i=this.points[Math.min(this.points.length-1,e+1)].at,r=this.lift(n.floorId),o=this.lift(i.floorId),a=r.y+n.y,l=o.y+i.y,c=Math.sin(Math.PI*t)*(.25+Math.hypot(n.x-i.x,n.z-i.z)*.08);return[n.x+(i.x-n.x)*t,a+(l-a)*t+c,n.z+(i.z-n.z)*t]}step(e){let t=this.points.length;if(!t)return!1;let n=this.line.geometry.getAttribute("position"),i=this.line.geometry.getAttribute("color"),r=0,o=new j;for(let a=0;a<Math.max(1,t-1);a++)for(let l=0;l<=iu;l++){if(l===iu&&a<t-2)continue;if(t===1&&l>0)break;let c=l/iu;n.setXYZ(r,...this.at(a,t===1?0:c));let h=t===1?1:this.points[a].age+(this.points[Math.min(t-1,a+1)].age-this.points[a].age)*c;o.copy(mg).lerp(Tf,h).multiplyScalar(.3+.7*h),i.setXYZ(r,o.r,o.g,o.b),r++}if(this.line.geometry.setDrawRange(0,r),n.needsUpdate=i.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===t-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(e/250))}),t>1){let a=e/1e3%(1.2*(t-1)+1)/1.2,l=Math.min(t-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var ru=class extends Ri{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ji;e.deleteAttribute("uv");let t=new li({side:Qt}),n=new li,i=new Cs(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ts(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Fe(e,$r(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Fe(e,$r(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Fe(e,$r(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Fe(e,$r(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Fe(e,$r(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let p=new Fe(e,$r(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function $r(s){return new Ao({color:0,emissive:16777215,emissiveIntensity:s})}function Af(s,e){if(e===gh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Lr||e===Wo){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Lr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function gg(s,e=Math.PI/3){let t=s.index?s.toNonIndexed():s,n=t.attributes.position,i=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(i*3);for(let b=0;b<i;b++)r[3*b+0]=n.getX(b),r[3*b+1]=n.getY(b),r[3*b+2]=n.getZ(b)}let o=Math.cos(e),a=(1+1e-10)*100,l=i/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let v=9*b,S=r[v+0],T=r[v+1],M=r[v+2],E=r[v+3],C=r[v+4],A=r[v+5],L=r[v+6],P=r[v+7],R=r[v+8],F=L-E,O=P-C,U=R-A,V=S-E,z=T-C,B=M-A,H=O*B-U*z,ee=U*V-F*B,Q=F*z-O*V,ce=1/(Math.sqrt(H*H+ee*ee+Q*Q)||1);c[3*b+0]=H*ce,c[3*b+1]=ee*ce,c[3*b+2]=Q*ce}let h=new Int32Array(i),u=new Float64Array(i*3),f=1;for(;f<i*2;)f<<=1;let p=f-1,m=new Int32Array(f),x=0;for(let b=0;b<i;b++){let v=3*b,S=Math.trunc(r[v+0]*a),T=Math.trunc(r[v+1]*a),M=Math.trunc(r[v+2]*a),E=(Math.imul(S,73856093)^Math.imul(T,19349663)^Math.imul(M,83492791))&p;for(;;){let C=m[E];if(C===0){let L=3*x;u[L+0]=S,u[L+1]=T,u[L+2]=M,m[E]=x+1,h[b]=x++;break}let A=3*(C-1);if(u[A+0]===S&&u[A+1]===T&&u[A+2]===M){h[b]=C-1;break}E=E+1&p}}let g=new Int32Array(x+1);for(let b=0;b<i;b++)g[h[b]+1]++;for(let b=0;b<x;b++)g[b+1]+=g[b];let d=new Int32Array(i),_=g.slice(0,x);for(let b=0;b<l;b++){let v=3*b;d[_[h[v+0]]++]=b,d[_[h[v+1]]++]=b,d[_[h[v+2]]++]=b}let y=new Float32Array(i*3);for(let b=0;b<l;b++){let v=3*b,S=c[v+0],T=c[v+1],M=c[v+2];for(let E=0;E<3;E++){let C=v+E,A=h[C],L=0,P=0,R=0;for(let O=g[A],U=g[A+1];O<U;O++){let V=3*d[O],z=c[V+0],B=c[V+1],H=c[V+2];S*z+T*B+M*H>o&&(L+=z,P+=B,R+=H)}let F=1/(Math.sqrt(L*L+P*P+R*R)||1);y[3*C+0]=L*F,y[3*C+1]=P*F,y[3*C+2]=R*F}}return t.setAttribute("normal",new Xt(y,3,!1)),t}function xg(s){let e=new Map,t=new Map,n=s.clone();return bg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function bg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)bg(s.children[n],e.children[n],t)}var ou=class extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ff(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new au(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new au(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new qf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Di.extractUrlBase(e);o=Di.resolveURL(c,this.path)}else o=Di.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ar(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Sg){try{o[Qe.KHR_BINARY_GLTF]=new Yf(e)}catch(u){i&&i(u);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ed(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:o[u]=new Pf;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new $f(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[u]=new Kf;break;case Qe.KHR_MESH_QUANTIZATION:o[u]=new Zf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function fw(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function zt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},If=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new j(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],dn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Is(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cs(h),c.distance=u;break;case"spot":c=new Lo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Pf=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ye}extendParams(e,t,n){let i=[];e.color=new j(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Mt))}return Promise.all(i)}},Lf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ff=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(i)}},Df=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Nf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Of=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new j(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Uf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Bf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new j().setRGB(r[0],r[1],r[2],dn),Promise.all(i)}},kf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},zf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new j().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(i)}},Vf=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Gf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return zt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Hf=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Wf=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Xf=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},au=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}},qf=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let m of u){let x=new Xe,g=new k,d=new En,_=new k(1,1,1),y=new Ts(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,v),l.SCALE&&_.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,x.compose(g,d,_));let b=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];y.instanceColor=new Ci(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let T=y.geometry;b=new Ge,b.name=T.name;for(let M in T.attributes)b.setAttribute(M,T.attributes[M]);for(let M in T.morphAttributes)b.morphAttributes[M]=T.morphAttributes[M];T.index!==null&&b.setIndex(T.index),b.morphTargetsRelative=T.morphTargetsRelative;for(let M of T.groups)b.addGroup(M.start,M.count,M.materialIndex);T.boundingBox!==null&&(b.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(b.boundingSphere=T.boundingSphere.clone()),b.drawRange.start=T.drawRange.start,b.drawRange.count=T.drawRange.count,b.userData=Object.assign({},T.userData),y.geometry=b}let S=l[v];b.setAttribute(v,new Ci(S.array,S.itemSize,S.normalized))}At.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Sg="glTF",_a=12,_g={JSON:1313821514,BIN:5130562},Yf=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,_a),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Sg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-_a,r=new DataView(e,_a),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===_g.JSON){let c=new Uint8Array(e,_a+o,a);this.content=n.decode(c)}else if(l===_g.BIN){let c=_a+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},$f=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=jf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=jf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Kr[f.componentType];c[u]=p.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let x=p.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(p)},a,c,dn,f)})})}},Kf=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Zf=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},lu=class extends ci{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,m=e*c,x=m-c,g=-2*p+3*f,d=p-f,_=1-g,y=d-f+u;for(let b=0;b!==a;b++){let v=o[x+b+a],S=o[x+b+l]*h,T=o[m+b+a],M=o[m+b]*h;r[b]=_*v+y*S+g*T+d*M}return r}},dw=new En,Jf=class extends lu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return dw.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yg={9728:Ot,9729:Ut,9984:Il,9985:Cr,9986:Fs,9987:Zn},vg={33071:fn,33648:mr,10497:$n},Ef={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},jf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},pw={CUBICSPLINE:void 0,LINEAR:_s,STEP:bs},Rf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mw(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new li({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hi})),s.DefaultMaterial}function qs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _i(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function gw(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function xw(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bw(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cf(t.attributes):e=s.indices+":"+Cf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Cf(s.targets[n]);return e}function Cf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _w(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var yw=new Xe,ed=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new fw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Co(this.options.manager):this.textureLoader=new Fo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return qs(r,a,i),_i(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Di.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ef[i.type],a=Kr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ef[i.type],c=Kr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(p&&p!==u){let d=Math.floor(f/p),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,y=t.cache.get(_);y||(x=new c(a,d*p,i.count*p/h),y=new Ss(x,p/h),t.cache.add(_,y)),g=new $i(y,l,f%p/h,m)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new Xt(x,l,m);if(i.sparse!==void 0){let d=Ef.SCALAR,_=Kr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,v=new _(o[1],y,i.sparse.count*d),S=new c(o[2],b,i.sparse.count*l);a!==null&&(g=new Xt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,M=v.length;T<M;T++){let E=v[T];if(g.setX(E,S[T*l]),l>=2&&g.setY(E,S[T*l+1]),l>=3&&g.setZ(E,S[T*l+2]),l>=4&&g.setW(E,S[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=yg[f.magFilter]||Ut,h.minFilter=yg[f.minFilter]||Zn,h.wrapS=vg[f.wrapS]||$n,h.wrapT=vg[f.wrapT]||$n,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ot&&h.minFilter!==Ut,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,p){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new qt(x);g.needsUpdate=!0,f(g)}),t.load(Di.resolveURL(u,r.path),m,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),_i(u,o),u.userData.mimeType=o.mimeType||_w(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bn,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new kt,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return li}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=i[Qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new j(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Mt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=St);let h=r.alphaMode||Rf.OPAQUE;if(h===Rf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Rf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ye){let u=r.emissiveFactor;a.emissive=new j().setRGB(u[0],u[1],u[2],dn)}return r.emissiveTexture!==void 0&&o!==Ye&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Mt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),_i(u,r),t.associations.set(u,{materials:e}),r.extensions&&qs(i,u,r),u})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=bw(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Mg(new Ge,c,t),c.mode===kn.TRIANGLE_STRIP?f=f.then(p=>Af(p,Wo)):c.mode===kn.TRIANGLE_FAN&&(f=f.then(p=>Af(p,Lr))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?mw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let x=h[p],g=o[p],d,_=c[p];if(g.mode===kn.TRIANGLES||g.mode===kn.TRIANGLE_STRIP||g.mode===kn.TRIANGLE_FAN||g.mode===void 0){let y=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),d=y&&b?new go(x,_):new Fe(x,_),d.isSkinnedMesh===!0&&d.normalizeSkinWeights()}else if(g.mode===kn.LINES)d=new xn(x,_);else if(g.mode===kn.LINE_STRIP)d=new Rn(x,_);else if(g.mode===kn.LINE_LOOP)d=new bo(x,_);else if(g.mode===kn.POINTS)d=new Cn(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(d.geometry.morphAttributes).length>0&&xw(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),_i(d,r),g.extensions&&qs(i,d,g),t.assignFinalMaterial(d),u.push(d)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&qs(i,u[0],r),u[0];let f=new dt;r.extensions&&qs(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,m=u.length;p<m;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(vh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new On(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_i(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xo(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let p=i.channels[u],m=i.samplers[p.sampler],x=p.target,g=x.node,d=i.parameters!==void 0?i.parameters[m.input]:m.input,_=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",_)),c.push(m),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],m=u[2],x=u[3],g=u[4],d=[];for(let y=0,b=f.length;y<b;y++){let v=f[y],S=p[y],T=m[y],M=x[y],E=g[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,S,T,M,E);if(C)for(let A=0;A<C.length;A++)d.push(C[A])}let _=new Ro(r,void 0,d);return _i(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,yw)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,m=u[0];h.pivot=new k().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Mr:c.length>1?h=new dt:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),_i(h,r),r.extensions&&qs(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new dt;n.name&&(r.name=i.createUniqueName(n.name)),_i(r,n),n.extensions&&qs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(xg(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,p]of i.associations)(f instanceof on||f instanceof qt)&&u.set(f,p);return h.traverse(f=>{let p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}hs[r.path]===hs.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(hs[r.path]){case hs.weights:h=Pi;break;case hs.rotation:h=Li;break;case hs.translation:case hs.scale:h=Qi;break;default:n.itemSize===1?h=Pi:h=Qi;break}let u=i.interpolation!==void 0?pw[i.interpolation]:_s,f=this._getArrayFromAccessor(n);for(let p=0,m=l.length;p<m;p++){let x=new h(l[p]+"."+hs[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Qf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Li?Jf:lu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function vw(s,e,t){let n=e.attributes,i=new Bt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){let h=Qf(Kr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new k,l=new k;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){let x=Qf(Kr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Mg(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=jf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Je.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),_i(s,e),vw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?gw(s,e.targets,t):s})}var wg=new Map,Tg=new Map,Mw=50*Math.PI/180;function Sw(s){s.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.geometry,i=t.material,r=i.name??"";t.userData.paint=!!i.userData?.paint||/^Paint/.test(r),n.getAttribute("normal")||(t.userData.paint?n.computeVertexNormals():t.geometry=gg(n,Mw)),i.flatShading=!1;let o=/glass/i.test(r);i.metalness=t.userData.paint?.55:o?0:Math.min(i.metalness??0,.4),i.roughness=t.userData.paint?.28:o?.05:Math.max(i.roughness??.6,.45),o&&(i.transparent=!0,i.depthWrite=!1,i.opacity=Math.max(i.opacity,.9))})}function Ag(s){let e=wg.get(s);if(!e){let t=Um();if(!t)return Promise.resolve(!1);e=t(s).then(n=>n&&new Promise(i=>{new ou().parse(n,"",r=>{Sw(r.scene);let o=new Bt().setFromObject(r.scene),a=[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z];r.scene.position.set(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2);let l=new dt;l.add(r.scene),Tg.set(s,{root:l,size:a}),Bm(s),i({root:l,size:a})},()=>i(null))})).catch(()=>null),wg.set(s,e)}return e.then(t=>!!t)}function Eg(s,e){let t=Tg.get(s);if(!t)return null;let n=t.root.clone(!0),i=[];n.traverse(o=>{let a=o;if(!a.isMesh)return;let l=a.material.clone();a.userData.paint&&e.paint&&(l.color=new j(e.paint)),a.material=l,i.push(l)});let r=new dt;return r.add(n),r.scale.set((e.mirror?-1:1)*(e.w/t.size[0]),e.h/t.size[1],e.d/t.size[2]),r.position.set(e.x,e.y,e.z),r.rotation.y=-e.rotation*Math.PI/180,r.userData.own=i,r}function td(s){for(let e of s.userData.own??[])e.dispose()}function Rg(s,e){let t=new Or(e),n=t.fromScene(new ru,.04).texture;t.dispose();let i=new Io(16777215,9081766,.9),r=new Is(16777215,1.6);return r.position.set(-4,9,6),s.add(i,r),{env:n,dispose:()=>{n.dispose(),i.removeFromParent(),r.removeFromParent()}}}function Cg(s,e){for(let t of s.userData.own??[])t.envMap=e,t.envMapIntensity=.9}var ww=.3,Ig=2.6;function Pg(s,e=.32,t=.22,n=[]){let i=s.map(v=>v[0]),r=s.map(v=>v[1]),o=Math.min(...i),a=Math.max(...i),l=Math.min(...r),c=Math.max(...r),h=c-l>=a-o,u=t*.7071,f=v=>{let S=[v,[v[0]+t,v[1]],[v[0]-t,v[1]],[v[0],v[1]+t],[v[0],v[1]-t]],T=[...S,[v[0]+u,v[1]+u],[v[0]-u,v[1]+u],[v[0]+u,v[1]-u],[v[0]-u,v[1]-u]];return S.every(M=>gt(M,s))&&!n.some(M=>T.some(E=>gt(E,M)))},p=(v,S)=>f(h?[v,S]:[S,v]),m=(v,S)=>{let T=Math.ceil(Math.hypot(S[0]-v[0],S[1]-v[1])/.05);for(let M=1;M<T;M++)if(!f([v[0]+(S[0]-v[0])*M/T,v[1]+(S[1]-v[1])*M/T]))return!1;return!0},[x,g,d,_]=h?[o,a,l,c]:[l,c,o,a],y=[],b=!0;for(let v=x+t;v<=g-t+1e-6;v+=e){let S=null,T=null,M=.05;for(let L=d;L<=_+1e-6;L+=M)if(p(v,L)&&(T??=L),(!p(v,L)||L+M>_+1e-6)&&T!==null){let P=p(v,L)?L:L-M;(!S||P-T>S[1]-S[0])&&(S=[T,P]),T=null}if(!S||S[1]-S[0]<.2)continue;let E=L=>{let[P,R]=L?S:[S[1],S[0]];return[h?[v,P]:[P,v],h?[v,R]:[R,v]]},C=E(b),A=y[y.length-1];if(A&&n.length&&!m(A,C[0])){let L=E(!b);if(!m(A,L[0]))continue;C=L,b=!b}y.push(C[0],C[1]),b=!b}return y}function id(s,e=.7,t=12){return Array.from({length:t},(n,i)=>{let r=i/t*Math.PI*2;return[s[0]+Math.cos(r)*e,s[1]+Math.sin(r)*e]})}var nd=s=>Math.atan2(Math.sin(s),Math.cos(s));function Lg(s,e,t){let n=null;if(e.mode==="cleaning"){if(!s.path.length)return!1;n=s.path[s.next%s.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let i=n[0]-s.pos[0],r=n[1]-s.pos[1],o=Math.hypot(i,r);if(o<.02){if(e.mode==="cleaning")return s.next=(s.next+1)%s.path.length,!0;let c=nd(e.restHeading-s.heading);return Math.abs(c)<.02?!1:(s.heading+=Math.sign(c)*Math.min(Math.abs(c),Ig*t),!0)}let a=Math.atan2(i,r),l=nd(a-s.heading);if(s.heading=nd(s.heading+Math.sign(l)*Math.min(Math.abs(l),Ig*t)),Math.abs(l)<.35){let c=Math.min(o,ww*t);s.pos=[s.pos[0]+i/o*c,s.pos[1]+r/o*c]}return!0}var Zr=null,Fg=new Map;function Tw(s,e=180,t,n=1.3){let i=`${s.type}|${s.w}|${s.d}|${s.h}|${s.variant??""}|${e}|${n}`,r=Fg.get(i);if(r)return r;t&&vc(t),Zr??=new Ur({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Zr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Zr.setSize(e,e,!1),Zr.setClearColor(0,0);let o=new xt,a=new cn,l=Kt(s.type);if(l?.light)Dc(o,l,{x:0,z:0,rotation:0,w:s.w,d:s.d,h:s.h},0,16758087);else if(s.lamp)sd(o,{x:0,z:0,size:[s.w,s.d,s.h],base:0,rotation:0,variant:s.variant??null,lamp:s.lamp},Math.max(s.h+.15,.6),16758087);else{let _={id:"preview",type:s.type,x:0,z:0,rotation:0,w:s.w,d:s.d,h:s.h,variant:s.variant??null,entity:null,power:null};Fc(o,a,new xt,_)}let c=new Ri,h=new Fe(o.geometry(),new Ye({vertexColors:!0,color:new j(n,n,n)})),u=new xn(a.geometry(),new kt({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));c.add(h,u);let f=new Bt().setFromObject(h),p=f.getCenter(new k),m=new On(-1,1,1,-1,.01,100);m.position.copy(p).add(new k(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(p),m.updateMatrixWorld();let x=.05;for(let _ of[f.min.x,f.max.x])for(let y of[f.min.y,f.max.y])for(let b of[f.min.z,f.max.z]){let v=new k(_,y,b).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(v.x),Math.abs(v.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),Zr.render(c,m);let d=Zr.domElement.toDataURL("image/png");return h.geometry.dispose(),h.material.dispose(),u.geometry.dispose(),u.material.dispose(),Fg.set(i,d),d}var Ng={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},Aw=2.4,Ew=1.4,Rw=.22,Og=140,od=32,Cw=500,Ug=160,it=2767456,Iw=1911110,Pw=1,Bg=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),rd=450,kg=125,Lw=.08,ad={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},Fw=new j(1714765);function Dw(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var ld=class{host;options;renderer;scene=new Ri;camera=new Wt(38,1,.1,400);controls;labels;root=new dt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;meshes=[];meshLight=null;meshAsked=new Set;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",e.append(this.labels),this.patternTexture=Nw(),this.blindTexture=Uw(),this.haloTexture=kw(),this.ground=new Fe(new Nn(1,1),new Ye({transparent:!0,blending:mt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new jc(this.scene),this.energyLayer=new eu(this.scene,this.liftOf),this.soundLayer=new tu(this.scene,this.liftOf),this.screenLayer=new nu(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new su(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let i=n.some(r=>r.isIntersecting);i!==this.onScreen&&(this.onScreen=i,i&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,i])=>`${n}=${i}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let i=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=i,this.resize()}setMeshSource(e){Om(e)}setPacks(e){vc(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(h=>h.floor.rooms.some(u=>u.id===e)),n=t?.floor.rooms.find(h=>h.id===e);if(!t||!n)return;let i=n.start_view;if(i){let h=t.floor.elevation+t.ty,[u,f]=Tc(n.points),p=i.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new k(p.x,p.y+h,p.z),radius:i.radius,phi:i.phi,theta:i.theta});return}let[r,o]=Tc(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new k(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new k(r,t.floor.elevation+t.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let i=this.devicePins.get(n.id);i||(i={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,i),this.labels.append(i.el));let r=i.el;i.icon!==n.icon&&(i.icon=n.icon,r.querySelector(".nf-dev-icon").innerHTML=n.icon),i.text!==n.text&&(i.text=n.text,r.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";i.caption!==o&&(i.caption=o,r.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";i.watt!==a&&(i.watt=a,r.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;i.label!==l&&(i.label=l,r.title=n.name,r.setAttribute("aria-label",l)),i.active!==n.active&&(i.active=n.active,r.classList.toggle("nf-dev-on",n.active)),i.unavailable!==n.unavailable&&(i.unavailable=n.unavailable,r.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";i.glow!==c&&(i.glow=c,c?r.style.setProperty("--nf-glow",c):r.style.removeProperty("--nf-glow"))}for(let[n,i]of this.devicePins)t.has(n)||(i.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let i=this.personPins.get(n.id);if(i||(i=document.createElement("div"),i.className="nf-person",i.dataset.entity=n.id,this.personPins.set(n.id,i),this.labels.append(i)),i.title=n.name,i.setAttribute("aria-label",n.name),i.dataset.picture!==(n.picture??"")||i.dataset.initials!==n.initials)if(i.dataset.picture=n.picture??"",i.dataset.initials=n.initials,i.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),i.append(r)}else i.textContent=n.initials}for(let[n,i]of this.personPins)t.has(n)||(i.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=ng(e),n=t?1:0;n===Yc.value&&(!t||qc.value.equals(new k(...t)))||(Yc.value=n,t&&qc.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=tg(e);let t=$c(e),n=[...this.floors.map(i=>i.materials.lines),...this.roof?[this.roof.lines]:[]];for(let i of n)i.blending=t,i.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.invalidate()}liftOf=e=>{if(!e)return{y:0,dy:0,visible:!0};let t=this.floorMap.get(e);return t?{y:t.floor.elevation+t.y,dy:t.y,visible:t.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(e,t){this.energyLayer.setArcs(e),this.energyLayer.setSparks(t),this.invalidate()}setLiveSound(e,t){this.soundLayer.set(e,t),this.invalidate()}setLiveTrail(e){this.trailLayer.set(e),this.invalidate()}setLiveScreens(e){let t=[];for(let n of e){let i=this.building?.floors.find(a=>a.id===n.floorId),r=i?.furniture.find(a=>a.id===n.furnitureId),o=r&&i?ff(r,i):null;!r||!o||t.push({...n,x:r.x,z:r.z,rotation:r.rotation,rect:o})}this.screenLayer.set(t),this.invalidate()}setLiveAnchors(e,t){this.liveAnchors=e,this.liveAnchorCb=t,this.invalidate()}placeLhAnchors(){let e=this.liveAnchorCb;if(!e||!this.liveAnchors.length)return;let t=new k;this.liveAnchors.forEach((n,i)=>{let r=this.liftOf(n.floorId);t.set(n.x,r.y+n.y,n.z).project(this.camera);let o=r.visible&&t.z<1&&Math.abs(t.x)<1.15&&Math.abs(t.y)<1.15;e(i,(t.x+1)/2*this.size.w,(1-t.y)/2*this.size.h,o)})}setSky(e){this.skyView=e,this.weatherLayer.set(e?{...e,low:e.low||this.lowQuality}:null);for(let t of this.floors)this.buildSun(t);this.invalidate()}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let i=document.createElement("small");i.textContent=n,e.append(i),e.classList.add("nf-pin-info")}else e.classList.remove("nf-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,i])=>this.roomInfo.get(n)===i))){this.roomInfo=e;for(let n of this.floors)for(let i of n.roomPins)this.fillRoomPin(i.pin,i.room.name,e.get(i.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),i=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==i&&(n.textContent=i,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let i=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};i.tl=n.left?1:0,i.tr=n.right?1:0,this.fridges.set(t,i)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/Ug),n=new Set;for(let[i,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(i));continue}r[o]+=l*t,n.add(i)}if(!n.size)return!1;for(let i of this.floors)i.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(i);return!0}buildFridges(e){let t=new xt;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let i=this.fridges.get(n.id);T0(t,n,Un(e.floor,n),i?.l??0,i?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:e.theta,phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.meshLight?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&Dw();this.lowQuality=t,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||t}),this.highQuality=e==="high";let n=new Ur({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Mt,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Wc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,i)=>this.swipeStart(e,t,n,i),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.meshes)e.group.removeFromParent(),td(e.group);this.meshes=[];for(let e of this.floors){e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="nf-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="nf-dev-icon";let i=document.createElement("span");i.className="nf-dev-text";let r=document.createElement("span");r.className="nf-dev-watt";let o=document.createElement("span");o.className="nf-dev-name",t.append(n,i,r,o);let a,l=!1;t.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=e;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},Cw)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",h=>h.preventDefault()),t.addEventListener("click",h=>{if(h.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),t.addEventListener("keydown",h=>{if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let u=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=sg(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),i=Bw(e.floor,e.geo.openRooms);if(e.lightZones=i.some((a,l)=>a!==l)?i:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<i.length&&(n.room[a]=i[l])}for(let a of n.doors)a.a>=0&&a.a<i.length&&(a.a=i[a.a]),a.b>=0&&a.b<i.length&&(a.b=i[a.b])}e.lightSurface=n;let r=new Ge;r.setAttribute("position",new Ue(n.pos,3)),r.setAttribute("color",new Ue(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Ue(n.fold,1));let o=new Ms(new Uint32Array(n.pos.length/3),1);o.setUsage(bh),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=r,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let i of this.devices){let r=this.glowOf(i);if(i.floorId!==e.floor.id||!r)continue;let o=ag(e.floor,i.x,i.z),a=lg(e.lightZones,o),[l,,c]=i.size??(i.lamp?ad[i.lamp]:[.3,.3,.3]),h=i.base??0,u={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<Pw?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,p]=i.lamp?u[i.lamp]:[i.y,"omni"],m=i.lightY??f,x=r.color;if(i.lamp==="strip"){let g=(i.rotation??0)*Ft,d=!!i.upright||Math.abs(i.roll??0)>45;for(let _ of[-1/3,0,1/3])i.upright?n.push({x:i.x,y:h+l*(.5+_),z:i.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:i.x+Math.cos(g)*l*_,y:m,z:i.z+Math.sin(g)*l*_,color:x,level:r.level*.55,kind:d?"omni":p,room:a})}else n.push({x:i.x,y:m,z:i.z,color:x,level:r.level,kind:p,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),i=t.doors.map(u=>{let f=e.geo.openings.find(m=>m.opening.id===u.id);if(f&&Us(f.opening,f.exterior)==="passage")return 1;let p=e.openings.get(u.id);return p?Math.max(p.open,p.open2??0):.5}),r=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+i.map(u=>u.toFixed(1)).join(",");if(r===e.glowSig)return;e.glowSig=r;let o=e.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=og(t,n,.42,i);if(this.roomTint){let u=e.floor.rooms.length;for(let f=0;f<t.room.length;f++)if(t.room[f]!==u)for(let p=0;p<3;p++)l[f*3+p]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let p=u*18;p<u*18+18&&!f;p++)f=l[p]>.004;if(f)for(let p=0;p<6;p++)c[h++]=u*6+p}o.index.needsUpdate=!0,o.setDrawRange(0,h),e.glowMesh.visible=h>0}makeMaterials(e){return{floor:bi(new Ye({vertexColors:!0}),this.themeUniform),pattern:Ow(this.patternTexture),wall:bi(cs(new Ye({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:cs(new Ye({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new Ye({vertexColors:!0,blending:Oo,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:St,polygonOffset:!0,polygonOffsetFactor:-1}),lines:bi(cs(new kt({vertexColors:!0,transparent:!0,blending:$c(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:cs(new Ye({vertexColors:!0,transparent:!0,blending:mt,depthWrite:!1,side:St,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:bi(cs(new Ye({vertexColors:!0,side:St}),e),this.themeUniform),glass:cs(new Ye({vertexColors:!0,transparent:!0,blending:mt,depthWrite:!1,side:St}),e),blinds:bi(cs(new Ye({map:this.blindTexture,vertexColors:!0,side:St}),e),this.themeUniform),lamps:bi(new Ye({vertexColors:!0}),this.themeUniform),halos:new bn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:mt,depthWrite:!1}),cones:new Ye({vertexColors:!0,transparent:!0,blending:mt,depthWrite:!1,side:St}),screens:new Ye({vertexColors:!0,transparent:!0,blending:mt,depthWrite:!1,side:St})}}rebuild(){let e=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),t=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let i=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=Oc(n)?.id===r.id?o.filter(B=>B.face===ua).map(B=>({field:B,face:Uc(n,B)})):[],l=o.filter(B=>B.face.startsWith(`wall:${r.id}:`));if(l.length){let B=new Map(Nc(n,r.id).map(H=>[H.key,H]));for(let H of l){let ee=B.get(H.face);ee&&a.push({field:H,face:ee})}}let h=(n.settings.roof.sections??[]).some(B=>ef(B,r.elevation+r.height))?(B,H)=>{let ee=tf(n,B,H);return ee===null?null:ee-r.elevation}:void 0,u=Z0(Xc(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,J0(n.floors,r),a,h),f={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(f),m=new dt,x=new Fe(u.floor,p.floor),g=new Fe(u.shadow,p.shadow);g.renderOrder=1;let d=new Fe(u.floor,p.pattern);d.renderOrder=2;let _=new Fe(new Ge,p.glow);_.renderOrder=3,_.visible=!1;let y=new Fe(new Ge,p.frames),b=new Fe(new Ge,p.blinds),v=new Fe(new Ge,p.glass);v.renderOrder=4;let S=new Fe(new Ge,p.lamps);S.visible=!1;let T=new Fe(new Ge,p.cones);T.visible=!1,T.renderOrder=3;let M=new Cn(new Ge,p.halos);M.visible=!1,M.renderOrder=7;let E=new Fe(new Ge,p.cones);E.visible=!1,E.renderOrder=7;let C=new Fe(new Ge,p.lamps);C.visible=!1;let A=new Fe(new Ge,p.screens);A.visible=!1,A.renderOrder=5;for(let B of[y,b,v])B.frustumCulled=!1;let L=new Fe(u.walls,p.glassWall),P=new Fe(u.walls,p.wall);L.renderOrder=6,m.add(x,g,d,_,P,new xn(u.lines,p.lines),y,b,v,S,T,M,E,C,A,L),this.root.add(m);let R=document.createElement("button");R.className="nf-pin nf-pin-floor",R.dataset.floor=r.id;let F=document.createElement("b");F.textContent=r.name||"\u2013";let O=document.createElement("span");O.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",R.append(F,O),R.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(R);let U=e.get(r.id),V=[],z=null;for(let B of r.rooms){let H=document.createElement("button");H.className="nf-pin",H.dataset.room=B.id,H.dataset.floor=r.id,this.fillRoomPin(H,B.name,this.roomInfo.get(B.id)),H.addEventListener("click",()=>this.options.onRoomTap?.(r.id,B.id)),this.labels.append(H);let[ee,Q]=Tc(B.points);V.push({pin:H,room:B,cx:ee,cz:Q});for(let[ce,ue]of B.points)z??={x0:ce,x1:ce,z0:ue,z1:ue},z.x0=Math.min(z.x0,ce),z.x1=Math.max(z.x1,ce),z.z0=Math.min(z.z0,ue),z.z1=Math.max(z.z1,ue)}this.floors.push({floor:r,rank:i.indexOf(r),group:m,geo:u,floorMesh:x,shadowMesh:g,patternMesh:d,glowMesh:_,lightSurface:null,lightZones:null,framesMesh:y,glassMesh:v,blindsMesh:b,lampMesh:S,sunMesh:T,sunSig:"",haloMesh:M,coneMesh:E,fridgeMesh:C,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:P,screenMesh:A,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:z,roomPins:V,labelSize:null,materials:p,mask:f,openings:new Map,y:U?.y??0,o:U?.o??1,ty:0,to:1,appliedO:-1,label:R})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=t.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??Zc);this.buildOpenings(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost(),this.placeMeshes()}placeMeshes(){for(let e of this.meshes)e.group.removeFromParent(),td(e.group);this.meshes=[];for(let e of this.floors)for(let t of Xc(e.floor,this.parked).furniture){let n=Kt(t.type);if(!n?.mesh)continue;let i=n.mesh;if(!Mc(t.type)){this.meshAsked.has(i)||(this.meshAsked.add(i),Ag(i).then(a=>{a&&!this.disposed&&this.rebuild()}));continue}let r=n.colors?.length?(n.colors.find(a=>a.id===t.variant)??n.colors[0]).hex:null,o=Eg(i,{x:t.x,z:t.z,y:Un(e.floor,t),rotation:t.rotation,mirror:t.mirror,w:t.w,d:t.d,h:t.h,paint:r});o&&(this.meshLight||(this.meshLight=Rg(this.root,this.renderer)),Cg(o,this.meshLight.env),e.group.add(o),this.meshes.push({group:o,furnitureId:t.id}))}this.invalidate()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?W0(this.building,this.roofWindows):[];if(!e.length)return;let t=new dt,n=bi(new Ye({vertexColors:!0,transparent:!0,side:St}),this.themeUniform),i=bi(new kt({vertexColors:!0,transparent:!0,blending:$c(this.theme),depthWrite:!1}),this.themeUniform,!0),r=bi(new Ye({vertexColors:!0,transparent:!0,side:St,depthWrite:!1}),this.themeUniform),o=e.map(a=>{let l=new dt;return l.add(new Fe(a.solid.geometry(),n),new xn(a.lines.geometry(),i)),a.glass.count&&l.add(new Fe(a.glass.geometry(),r)),l.renderOrder=8,t.add(l),{group:l,floorId:a.floor.id,rideId:sf(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});t.renderOrder=8,this.scene.add(t),this.roof={group:t,parts:o,solid:n,lines:i,glass:r},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/Og),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+(1-this.roofO)*2.2+(l.lift?u*Ew:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let i=0,r=1;t?n.rank>t.rank?(i=5+n.rank,r=0):n.rank<t.rank&&(this.floorStack==="stacked"?i=0:(i=-.4,r=this.floorStack==="single"?0:Rw)):i=this.explode?n.rank*Aw:0,n.ty=i,n.to=r,e&&(n.y=i,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let i of[t.floor,t.wall,t.frames,t.blinds,t.lamps])i.transparent===n&&(i.transparent=!n,i.depthWrite=n,i.needsUpdate=!0),i.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o}stepFloors(e){let t=!1,n=1-Math.exp(-e/Og);for(let i of this.floors){let r=i.ty-i.y,o=i.to-i.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(i.y=i.ty,i.o=i.to,this.labelsDirty=!0,this.applyFloor(i));continue}i.y+=r*n,i.o+=o*n,t=!0,this.applyFloor(i)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/Ug);for(let i of this.floors){let r=!1;for(let[o,a]of i.openings){let l=this.openingTargets.get(o)??Zc,c=(f,p)=>(f??null)===(p??null)||typeof f=="number"&&typeof p=="number"&&Math.abs(f-p)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let f of["open","open2","tilt","tilt2"]){let p=l[f]??0,m=a[f]??0,x=p-m;Math.abs(x)<.003?h[f]=p:(h[f]=m+x*n,u=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,u=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed)&&(i.openings.set(o,h),r=!0),t||=u}r&&(this.buildOpenings(i),this.buildGlow(i),this.buildSun(i))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new j(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let i=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*Lw+i)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=t)return 0;let f=u-t,p=f>rd?.5+.5*Math.sin(f/140):f/rd;return Math.round(p*10)/10},i=this.devices.filter(h=>h.floorId===e.floor.id&&(h.lamp||h.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+i.map(h=>`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.size?.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`).join(";"),o=i.map(h=>this.glowOf(h)),a=i.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=r,e.lampColorSig="";let h=new xt,u=[],f=[],p=new Map,m=e.floor.height;for(let x of i){let g=x.lamp==="strip"?(x.base??m)>Math.min(e.floor.cut_height,m):x.lamp?Bg.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let d=h.count,_=x.pack?Kt(x.pack):void 0,[y,b,v]=x.size??[.3,.3,.3];x.model?E0(h,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):_?Dc(h,_,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:b,h:v,mirror:x.mirror},x.base??0,65280):sd(h,{...x,lamp:x.lamp},m,65280),p.set(x.furnitureId??x.id,{start:d,end:h.count}),x.pickable!==!1&&u.push({id:x.id,start:d,end:h.count}),x.furnitureId&&f.push({id:x.furnitureId,start:d,end:h.count})}e.lampTris=u,e.lampFurnTris=f,e.lampRanges=p,e.lampShade=Im(h.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=h.geometry(),e.lampMesh.visible=h.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;i.forEach((h,u)=>{let f=e.lampRanges.get(h.furnitureId??h.id);if(!f)return;let p=o[u],m=p?.55+.45*p.level:0,x=p?new j(...p.color.map(_=>Math.min(1,_*m))):new j(Iw),g=n(h.id);g>0&&x.lerp(new j(1,1,1),.7*g);let d=new j(x.getHex());Pm(c,e.lampShade,f,[d.r,d.g,d.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Ft,i=this.weatherLayer?.cloud??0,r=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${i.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===e.sunSig)return;e.sunSig=r;let o=new xt;if(t&&t.elevation>2&&i<.97){let a=Math.min(1,t.elevation/12)*(1-.8*i),l=t.elevation*Ft,c=t.azimuth*Ft,h=[Math.sin(n+c),-Math.cos(n+c)],u=1/Math.tan(l);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let p=[-f.toRoom[0],-f.toRoom[1]],m=p[0]*h[0]+p[1]*h[1];if(m<.05)continue;let x=e.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let d=(M,E)=>{let C=Math.min(7,E*u);return[f.start[0]+f.axis[0]*M+f.toRoom[0]*f.faceRoom-h[0]*C,.02,f.start[1]+f.axis[1]*M+f.toRoom[1]*f.faceRoom-h[1]*C]},_=.14*a*Math.min(1,m*1.5),y=new j(1*_,.82*_,.55*_),b=y.clone().multiplyScalar(.45),v=e.floor.rooms.find(M=>M.id===f.opening.room_id);if(!v||v.points.length<3)continue;let S=Math.max(1,Math.ceil(Math.min(7,g*u)/.25)),T=Math.max(1,Math.ceil(f.width/.3));for(let M=0;M<S;M++){let E=f.sill+(g-f.sill)*M/S,C=f.sill+(g-f.sill)*(M+1)/S,A=M/S,L=(M+1)/S,P=y.clone().lerp(b,A),R=y.clone().lerp(b,L);for(let F=0;F<T;F++){let O=f.width*F/T,U=f.width*(F+1)/T,V=d((O+U)/2,(E+C)/2);if(!gt([V[0],V[2]],v.points))continue;let z=d(O,E),B=d(U,E),H=d(U,C),ee=d(O,C);o.tri(z,B,H,P,P,R),o.tri(z,H,ee,P,R,R)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=o.geometry(),e.sunMesh.visible=o.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],i=[],r=new xt,o=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let d=(l.rotation??0)*Ft,_=[-Math.sin(d),Math.cos(d)],y=l.model==="camera_ceiling",b=l.reach??(y?3:4.5),v=(l.fov??(y?360:90))*Ft/2,S=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),T=new j(0,0,0),M=Math.max(4,Math.round(v/.15)),E=.015,C=e.geo.walls2d,A=R=>{let F=_[0]*Math.cos(R)-_[1]*Math.sin(R),O=_[1]*Math.cos(R)+_[0]*Math.sin(R),U=b;for(let V of C){let z=V.b[0]-V.a[0],B=V.b[1]-V.a[1],H=F*B-O*z;if(Math.abs(H)<1e-9)continue;let ee=((V.a[0]-l.x)*B-(V.a[1]-l.z)*z)/H,Q=((V.a[0]-l.x)*O-(V.a[1]-l.z)*F)/H;ee>.45&&ee<U&&Q>=0&&Q<=1&&(U=ee)}return U},L=R=>{let F=A(R);return[l.x+(_[0]*Math.cos(R)-_[1]*Math.sin(R))*F,E,l.z+(_[1]*Math.cos(R)+_[0]*Math.sin(R))*F]},P=r.count;for(let R=0;R<M;R++)r.tri([l.x,E,l.z],L(-v+2*v*(R+1)/M),L(-v+2*v*R/M),S,T,T);o.push({id:l.id,start:P,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||Bg.has(l.lamp)&&this.wallMode==="cut")continue;let[h,u,f]=l.size??ad[l.lamp],p=l.base??0,m=(l.rotation??0)*Ft,x={ceiling:t-.07,downlight:t-.03,spot:t-f,panel:t-.03,pendant:Math.max(.4,t-f)+.08,floor:p+f-.15,uplight:p+f,table:p+f-.09,wall:p+f/2,strip:p+Math.max(.02,f)-.01,bollard:p+f-.08,garden:p+f-.03}[l.lamp],g=(d,_,y=1)=>{n.push(d,x,_),i.push(...c.color.map(b=>b*c.level*.7*y))};if(l.lamp==="strip")for(let d of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,p+h*(.5+d),l.z),i.push(...c.color.map(_=>_*c.level*.7*.6))):g(l.x+Math.cos(m)*h*d,l.z+Math.sin(m)*h*d,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(u/2+.05),l.z+Math.cos(m)*(u/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let d=new j(...c.color.map(S=>S*.09*c.level)),_=new j(0,0,0),y=Math.max(.03,h/2),b=.45+.35*c.level,v=16;for(let S=0;S<v;S++){let T=S/v*Math.PI*2,M=(S+1)/v*Math.PI*2,E=[l.x+Math.cos(T)*y,x,l.z+Math.sin(T)*y],C=[l.x+Math.cos(M)*y,x,l.z+Math.sin(M)*y],A=[l.x+Math.cos(T)*b,.02,l.z+Math.sin(T)*b],L=[l.x+Math.cos(M)*b,.02,l.z+Math.sin(M)*b];r.tri(E,A,L,d,_,_),r.tri(E,L,C,d,_,d)}}}let a=new Ge;a.setAttribute("position",new Ue(n,3)),a.setAttribute("color",new Ue(i,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=r.geometry(),e.coneMesh.visible=r.count>0,e.coneTris=o}buildScreens(e){let t=Xc(e.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=t.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return;e.screenSig=n;let i=new xt;for(let r of t){let o=this.screens.get(r.id),a=r.rotation*Ft,l=Math.cos(a),c=Math.sin(a),h=(y,b,v)=>[r.x+y*l-v*c,b,r.z+y*c+v*l];if(o.faces){let y=Math.max(.05,r.w)*(r.mirror?-1:1),b=Math.max(.05,r.d),v=Math.max(.005,r.h),S=Un(e.floor,r);for(let T of o.faces){let M=T.part==="right"?.03:-Math.abs(y)/2+.03,E=T.part==="left"?-.03:Math.abs(y)/2-.03,C=S+(T.part==="bottom"?v*.45:v)+.006,A=new j(...T.color.map(V=>Math.min(1,V*(.35+.65*T.level)))),L=new j(0,0,0),P=(V,z,B=C)=>h(V*Math.sign(y),B,z),R=[P(M,-b/2+.03),P(E,-b/2+.03),P(E,b/2-.03),P(M,b/2-.03)];i.tri(R[0],R[2],R[1],A),i.tri(R[0],R[3],R[2],A);let F=.12+.1*T.level,O=A.clone().multiplyScalar(.5),U=[P(M-F,-b/2-F,C+.004),P(E+F,-b/2-F,C+.004),P(E+F,b/2+F,C+.004),P(M-F,b/2+F,C+.004)];for(let V=0;V<4;V++){let z=(V+1)%4;i.tri(R[V],U[z],U[V],O,L,L),i.tri(R[V],R[z],U[z],O,O,L)}}continue}let u=ff(r,e.floor);if(!u)continue;let f=new j(...o.color.map(y=>Math.min(1,y*(.35+.65*o.level)))),p=new j(0,0,0),m=u.z+.004;i.tri(h(u.x0,u.y0,m),h(u.x1,u.y0,m),h(u.x1,u.y1,m),f),i.tri(h(u.x0,u.y0,m),h(u.x1,u.y1,m),h(u.x0,u.y1,m),f);let x=.18+.12*o.level,g=f.clone().multiplyScalar(.5),d=[h(u.x0,u.y0,m),h(u.x1,u.y0,m),h(u.x1,u.y1,m),h(u.x0,u.y1,m)],_=[h(u.x0-x,u.y0-x,m+.01),h(u.x1+x,u.y0-x,m+.01),h(u.x1+x,u.y1+x,m+.01),h(u.x0-x,u.y1+x,m+.01)];for(let y=0;y<4;y++){let b=(y+1)%4;i.tri(d[y],_[y],_[b],g,p,p),i.tri(d[y],_[b],d[b],g,p,g)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=i.geometry(),e.screenMesh.visible=i.count>0}buildOpenings(e){let t=dg(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,i]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=i,n.visible=i.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let i=new j(n.color),r=this.roomTint?.get(n.roomId);r&&i.lerp(new j(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&i.lerp(Fw,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)t.setXYZ(o,i.r,i.g,i.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".nf-pin"))e.classList.toggle("nf-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new Bt;for(let u of this.activeFloors()){let f=u.floor.elevation+u.ty;for(let p of u.floor.rooms)for(let[m,x]of p.points)t.expandByPoint(new k(m,f,x)),t.expandByPoint(new k(m,f+u.floor.height,x))}t.isEmpty()&&t.set(new k(-4,0,-4),new k(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:t.min.x-8,x1:t.max.x+8,z0:t.min.z-8,z1:t.max.z+8,y0:t.min.y,y1:t.max.y+6});let n=t.getCenter(new k),i=t.getSize(new k),r=Math.max(8,this.distanceFor(i)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=t.min.y+i.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new Bt,t=1/0;for(let o of this.floors){t=Math.min(t,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new k(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new k(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=zw();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=e.getCenter(new k),i=e.getSize(new k),r=od*Math.ceil((Math.max(i.x,i.z)+16)/od);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,t-ls-.02,n.z)}distanceFor(e){let t=this.camera.fov*Ft,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),i=new Do;return i.setFromCamera(new Oe(e/n.width*2-1,-(t/n.height)*2+1),this.camera),i}pick(e,t){let n=this.rayAt(e,t),i=this.activeFloors();if(this.meshes.length){let a=n.intersectObjects(this.meshes.map(l=>l.group),!0)[0];if(a){let l=a.object;for(;l&&!this.meshes.some(h=>h.group===l);)l=l.parent;let c=l?this.pickFurniture.get(this.meshes.find(h=>h.group===l).furnitureId):void 0;if(c)return{entity:c}}}let r=i.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=i.find(h=>h.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let h=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(h)return{entity:h}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??rt;if(f!==rt&&Math.floor(f/16)===0)continue}let h=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),u=h?this.pickOpenings.get(h):void 0;if(u)return{entity:u}}else if(a.object===c.wallMesh){let h=o(c.geo.furnitureTris,l),u=h?this.pickFurniture.get(h):void 0;if(u)return{entity:u};if(a.face&&!h){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,p=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&p===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let d=n.ray.direction,_=Math.hypot(d.x,d.z)||1,y=[a.point.x-d.x/_*.3,a.point.z-d.z/_*.3],b=c.floor.rooms.find(v=>v.points.length>=3&&gt(y,v.points))?.id??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:c.floor.id,roomId:b}}else if(!g&&b)return{floorId:c.floor.id,roomId:b}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(h=>({id:h.roomId,start:h.start,end:h.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+rd),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),i=this.activeFloors(),r=i.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=i.find(h=>h.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(h=>o.faceIndex>=h.start&&o.faceIndex<h.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let i=this.rayAt(t,n),r=e.floor.elevation+e.y,o=i.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-i.ray.origin.y)/o.y;return a<=0?null:[i.ray.origin.x+o.x*a,i.ray.origin.z+o.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let i=this.furnishTypes;if(i){let o=n?this.devices.find(u=>u.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(e,t),l=o??a?.id,c=l?this.floors.find(u=>u.floor.furniture.some(f=>f.id===l)):void 0,h=c?.floor.furniture.find(u=>u.id===l)?.type;return!!(c&&l&&h&&i.has(h))&&this.grabItem(c,l,e,t)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,e,t):this.grabItem(a,o,e,t)}let r=this.furnitureAt(e,t);if(!r){let o=this.pick(e,t);return o&&"entity"in o?this.grabDevice(o.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,e,t)}grabItem(e,t,n,i){let r=e.floor.furniture.find(a=>a.id===t),o=this.floorPoint(e,n,i);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:e.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(e,t,n){let i=this.devices.find(a=>a.id===e),r=i&&this.floorMap.get(i.floorId),o=r&&this.floorPoint(r,t,n);return!i||!r||!o?!1:i.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:r.floor.id,offset:[i.x-o[0],i.z-o[1]],x:i.x,z:i.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),h=l&&this.floorPoint(l,e,t);if(!l||!c||!h)return;let u=this.building?.settings.grid??.05;n.x=c.x=Math.round((h[0]+n.offset[0])/u)*u,n.z=c.z=Math.round((h[1]+n.offset[1])/u)*u,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let i=this.grab,r=i&&this.floorMap.get(i.floorId);if(!i||!r)return;let o=this.floorPoint(r,e,t);if(!o)return;let a=this.building?.settings.grid??.05;i.x=Math.round((o[0]+i.offset[0])/a)*a,i.z=Math.round((o[1]+i.offset[1])/a)*a,i.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(d=>d.floor.furniture.some(_=>_.id===e)):void 0,n=t?.floor.furniture.find(d=>d.id===e);if(!t||!n)return;let i=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=Kt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Un(t.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Un(t.floor,n),h=n.rotation*Ft,u=Math.cos(h),f=Math.sin(h),p=(d,_,y)=>[i+d*u-_*f,y,r+d*f+_*u],m=new cn,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new j(.25,.9,1);for(let d=0;d<4;d++){let[_,y]=x[d],[b,v]=x[(d+1)%4];m.seg(p(_,y,c+.01),p(b,v,c+.01),g),m.seg(p(_,y,c+l),p(b,v,c+l),g),m.seg(p(_,y,c+.01),p(_,y,c+l),g)}m.seg(p(-n.w/2,n.d/2+.03,c+.02),p(n.w/2,n.d/2+.03,c+.02),new j(1,1,1)),this.ghost=new xn(m.geometry(),new kt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,i){if(this.furnish||Math.abs(i)<Math.abs(n)*1.2)return!1;let r=this.pick(e,t);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:r.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(d=>d.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let i=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(e*i),o=Math.round(t*i),a=new rn(r,o);a.texture.colorSpace=Mt;let l=new On(-1,1,1,-1,.1,400),c=this.floors.map(d=>({fv:d,visible:d.group.visible,y:d.y,o:d.o,standing:d.mask.standing.value,glass:d.mask.glass.value})),h=this.roof?.group.visible??!1,u=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),p=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let d of n){for(let P of this.floors)P.group.visible=P===d;d.y=0,d.o=1,this.applyFloor(d),d.group.visible=!0,d.mask.standing.value=0,d.mask.glass.value=0;let _=d.floor.rooms.flatMap(P=>P.points),y=d.floor.elevation,b=new Bt(new k(Math.min(..._.map(P=>P[0]))-.3,y,Math.min(..._.map(P=>P[1]))-.3),new k(Math.max(..._.map(P=>P[0]))+.3,y+Math.min(d.floor.cut_height,d.floor.height),Math.max(..._.map(P=>P[1]))+.3)),v=b.getCenter(new k),S=-.6,T=.8,M=new k(Math.sin(T)*Math.sin(S),Math.cos(T),Math.sin(T)*Math.cos(S));l.position.copy(v).addScaledVector(M,100),l.lookAt(v),l.updateMatrixWorld();let E=.5,C=.5;for(let P of[b.min.x,b.max.x])for(let R of[b.min.y,b.max.y])for(let F of[b.min.z,b.max.z]){let O=new k(P,R,F).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(O.x)),C=Math.max(C,Math.abs(O.y))}let A=r/o;E/C>A?C=E/A:E=C*A,l.left=-E*1.05,l.right=E*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,p);let L=x.createImageData(r,o);for(let P=0;P<o;P++)L.data.set(p.subarray((o-1-P)*r*4,(o-P)*r*4),P*r*4);x.putImageData(L,0,0),g.push({floorId:d.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let d of c)d.fv.y=d.y,d.fv.o=d.o,d.fv.mask.standing.value=d.standing,d.fv.mask.glass.value=d.glass,this.applyFloor(d.fv),d.fv.group.visible=d.visible;this.roof&&(this.roof.group.visible=h),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let i=this.robots.get(n.id);i||(i=this.makeRobot(n),this.robots.set(n.id,i));let r=i.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((i.info.roomId??null)!==(n.roomId??null)||JSON.stringify(i.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(i.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!i.motion.path.length)){let a=n.room?Pg(n.room,void 0,void 0,n.obstacles):id(n.rest),l=a.length?a:id(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-i.motion.pos[0],h[1]-i.motion.pos[1])<Math.hypot(l[c][0]-i.motion.pos[0],l[c][1]-i.motion.pos[1])&&(c=u)}),i.motion.path=l,i.motion.next=c,n.room&&!gt(i.motion.pos,n.room)&&(i.motion.pos=[l[c][0],l[c][1]])}i.led.color.setHex(Ng[n.mode])}for(let[n,i]of this.robots)t.has(n)||(i.group.removeFromParent(),i.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let i=new xt,r=(a,l,c,h,u)=>{let f=[];for(let p=0;p<20;p++)f.push([Math.cos(p/20*Math.PI*2)*a,Math.sin(p/20*Math.PI*2)*a]);Dt(i,f,l,c,h,u,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=i.geometry(),this.robotMat=new Ye({vertexColors:!0});let o=new xt;Dt(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let t=new dt,n=new Ye({color:Ng[e.mode]});return t.add(new Fe(this.robotGeo,this.robotMat),new Fe(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let i of this.robots.values()){let r=this.floorMap.get(i.info.floorId);r&&(i.group.parent!==r.group&&r.group.add(i.group),t>0?n=Lg(i.motion,i.info,t)||n:n||=i.info.mode==="cleaning"||i.info.mode==="returning",i.group.position.set(i.motion.pos[0],0,i.motion.pos[1]),i.group.rotation.y=i.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}liveFlyInto(e,t,n=1100){let i=this.floorMap.get(e),r=i?i.floor.elevation+i.ty:0;this.controls.flyTo({target:new k(t.target[0],r+t.target[1],t.target[2]),radius:t.radius,theta:t.theta,phi:Math.max(.08,t.phi)},n)}focus(e,t,n,i,r){let o=this.floorMap.get(e);if(o){if(this.controls.flyTo({target:new k(t,o.floor.elevation+o.ty+i,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let i=this.controls.update(e),r=this.stepFloors(t),o=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let d=this.deviceFloor.get(x);d&&m.add(d),g<=e&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(t),c=this.stepRobots(e),u=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(e)).some(Boolean),f=i||r||o||a||l,p=[];if(i&&p.push("camera"),r&&p.push("floors"),o&&p.push("openings"),a&&p.push("flash"),l&&p.push("roof"),this.effectTick&&p.push("effect"),c&&p.push("robot"),n&&p.push("orbit"),this.tintTick&&p.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,p),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*kg:kg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/r+h[1]*i/r>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new k,i=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(i&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,h,g).project(this.camera);let d=(n.x+1)/2*e,_=(1-n.y)/2*t;(!l||d<l.x)&&(l={x:d,y:_}),(!c||d>c.x)&&(c={x:d,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,p=l.x-u-14,m=l.y;p<f&&this.labelInset&&(p=c.x+14,m=c.y),r.push({fv:o,left:Math.max(f,Math.min(e-u-8,p)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(e,t);for(let o of this.floors){let a=o.to<.99||o.o<.9||i||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new k,i=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||i||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||i&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let h=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==h&&(this.pinMode.set(o,h),o.classList.toggle("nf-dev-full",h==="full"),o.classList.toggle("nf-dev-dim",h==="dim")),this.place(o,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let i=e-this.fpsStart;if(i>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/i):0,busy:t,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function Nw(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(o,a,l,c,h)=>{t.strokeStyle=`rgba(55,224,255,${h})`,t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let i=(o,a,l)=>{t.save(),t.beginPath(),t.rect(o*256,a*256,256,256),t.clip(),l(o*256,a*256),t.restore()};i(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),i(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),i(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),i(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),i(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new an(e);return r.flipY=!1,r.wrapS=fn,r.wrapT=fn,r.anisotropy=4,r.colorSpace=Mt,r}function Ow(s){let e=new Ye({map:s,transparent:!0,blending:mt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNfTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"nf-pattern",e}function Uw(){let s=document.createElement("canvas");s.width=8,s.height=32;let e=s.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new an(s);return t.wrapS=$n,t.wrapT=$n,t.colorSpace=Mt,t}function Bw(s,e){let t=s.rooms.map((i,r)=>r),n=i=>t[i]===i?i:t[i]=n(t[i]);for(let[i,r]of e){let o=s.rooms.findIndex(h=>h.id===i),a=s.rooms.findIndex(h=>h.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((i,r)=>n(r))}function kw(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let i=new an(e);return i.colorSpace=Mt,i}function zw(){let e=od,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=e;o++){let a=Math.round(o/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let i=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,1024,1024);let r=new an(t);return r.anisotropy=4,r.colorSpace=Mt,r}function d3(s,e){return new ld(s,e)}function sd(s,e,t,n){let[i,r,o]=e.size??ad[e.lamp],a=e.base??0,l=(e.rotation??0)*Ft,c=Math.cos(l),h=Math.sin(l),u=(x,g)=>[e.x+x*c-g*h,e.z+x*h+g*c],f=(x,g,d,_,y,b=14)=>{let v=[];for(let S=0;S<b;S++){let T=S/b*Math.PI*2;v.push([e.x+Math.cos(T)*x,e.z+Math.sin(T)*x])}Dt(s,v,g,d,_,y,{aoFrom:0,bottom:!0})},p=(x,g,d,_,y,b,v,S=v)=>Dt(s,[u(x,d),u(g,d),u(g,_),u(x,_)],y,b,v,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(i,r)/2);switch(e.lamp){case"ceiling":f(m*.25,t-.04,t,it,it,8),f(m,t-Math.max(.04,o)-.035,t-.04,n,n);break;case"pendant":{let x=Math.max(.4,t-o);f(.06,t-.02,t,it,it,8);let g=e.variant==="globe"?x+2*m:e.variant==="drum"?x+.24:x+.2;if(f(.008,g,t-.02,it,it,5),e.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),b=Math.PI*((_+1)/7);f(m*Math.max(.2,Math.sin((y+b)/2)),x+m-m*Math.cos(y),x+m-m*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let _=0;_<4;_++)f(m*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else e.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,t-.012,t,it,it,12),f(m*.7,t-.02,t-.012,n,n,12);break;case"spot":f(m*.6,t-.02,t,it,it,10),f(m,t-Math.max(.06,o),t-.02,it,it,12),f(m*.8,t-Math.max(.06,o)-.008,t-Math.max(.06,o),n,n,12);break;case"panel":p(-i/2,i/2,-r/2,r/2,t-Math.max(.015,o),t,it,it),p(-i/2+.02,i/2-.02,-r/2+.02,r/2-.02,t-Math.max(.015,o)-.004,t-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,it,it),f(.014,a+.03,a+o-.12,it,it,6),f(m,a+o-.14,a+o-.02,it,it),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,it,it,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,it,it,10);break;case"garden":f(.012,a,a+o-.08,it,it,5),f(m,a+o-.08,a+o-.01,it,it,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,it,it),f(.014,a+.03,a+o-.28,it,it,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,it,it),f(.012,a+.03,a+o-.16,it,it,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=e.base??Sc;p(-i/2+.03,i/2-.03,-r/2,-r/2+.02,x,x+o,it),p(-i/2,i/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=e.base!=null?e.base+x:t-.04;if(!e.roll&&!e.upright){p(-i/2,i/2,-r/2,r/2,g-x,g,n);break}let d=(e.roll??0)*Ft,_=Math.cos(d),y=Math.sin(d),b=e.upright?a+i/2:g-x/2,v=(C,A,L)=>{let P=C,R=A*_-L*y,F=A*y+L*_;return e.upright&&([P,R]=[-R,P]),[e.x+P*c-F*h,b+R,e.z+P*h+F*c]},S=[v(-i/2,-x/2,-r/2),v(i/2,-x/2,-r/2),v(i/2,-x/2,r/2),v(-i/2,-x/2,r/2),v(-i/2,x/2,-r/2),v(i/2,x/2,-r/2),v(i/2,x/2,r/2),v(-i/2,x/2,r/2)],T=new j(n),M=[e.x,b,e.z],E=(C,A,L,P)=>{let[R,F,O]=[S[C],S[A],S[L]],U=[(F[1]-R[1])*(O[2]-R[2])-(F[2]-R[2])*(O[1]-R[1]),(F[2]-R[2])*(O[0]-R[0])-(F[0]-R[0])*(O[2]-R[2]),(F[0]-R[0])*(O[1]-R[1])-(F[1]-R[1])*(O[0]-R[0])],V=[R[0]-M[0],R[1]-M[1],R[2]-M[2]],z=U[0]*V[0]+U[1]*V[1]+U[2]*V[2]<0,[B,H,ee,Q]=z?[S[P],S[L],S[A],S[C]]:[S[C],S[A],S[L],S[P]];s.tri(B,H,ee,T,T,T),s.tri(B,ee,Q,T,T,T)};E(0,1,2,3),E(4,5,6,7),E(0,1,5,4),E(1,2,6,5),E(2,3,7,6),E(3,0,4,7);break}}}export{ld as NextFloorViewer,d3 as createViewer,Tw as furniturePreview,Dw as isLowEnd,sd as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
