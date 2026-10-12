/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var jd=0,Gu=1,Qd=2;var Io=1,ep=2,wr=3,ai=0,Qt=1,Mt=2,li=0,ci=1,pt=2,Hu=3,Po=4,tp=5;var As=100,np=101,ip=102,sp=103,rp=104,op=200,ap=201,lp=202,cp=203,Wu=204,Xu=205,up=206,hp=207,fp=208,dp=209,pp=210,mp=211,gp=212,xp=213,bp=214,Ya=0,$a=1,Ka=2,ur=3,Za=4,Ja=5,ja=6,Qa=7,_l=0,_p=1,yp=2,qn=0,qu=1,Yu=2,$u=3,Ku=4,Zu=5,Ju=6,ju=7,Au="attached",vp="detached",Qu=300,Ki=301,Es=302,yl=303,vl=304,Lo=306,Xn=1e3,fn=1001,hr=1002,Nt=1003,Ml=1004;var Rs=1005;var Ot=1006,Tr=1007;var Yn=1008;var vn=1009,eh=1010,th=1011,Ar=1012,Sl=1013,$n=1014,Cn=1015,Kn=1016,wl=1017,Tl=1018,Er=1020,nh=35902,ih=35899,sh=1021,rh=1022,In=1023,ti=1026,Zi=1027,Al=1028,El=1029,Ji=1030,Rl=1031;var Cl=1033,Fo=33776,Do=33777,No=33778,Oo=33779,Il=35840,Pl=35841,Ll=35842,Fl=35843,Dl=36196,Nl=37492,Ol=37496,Ul=37488,Bl=37489,Uo=37490,kl=37491,zl=37808,Vl=37809,Gl=37810,Hl=37811,Wl=37812,Xl=37813,ql=37814,Yl=37815,$l=37816,Kl=37817,Zl=37818,Jl=37819,jl=37820,Ql=37821,ec=36492,tc=36494,nc=36495,ic=36283,sc=36284,Bo=36285,rc=36286;var ds=2300,ps=2301,Wa=2302,Eu=2303,Ru=2400,Cu=2401,Iu=2402,Mp=2500;var oh=0,ko=1,Rr=2,Sp=3200;var zo=0,wp=1,Pi="",vt="srgb",dn="srgb-linear",oo="linear",dt="srgb";var Xa=7680;var Tp=519,Ap=512,Ep=513,Rp=514,oc=515,Cp=516,Ip=517,ac=518,Pp=519,ah=35044,lh=35048;var ch="300 es",Hn=2e3,fr=2001;function Rg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lp(){let s=dr("canvas");return s.style.display="block",s}var ld={},pr=null;function ao(...s){let e="THREE."+s.shift();pr?pr("log",e,...s):console.log(e,...s)}function Fp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ie(...s){s=Fp(s);let e="THREE."+s.shift();if(pr)pr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=Fp(s);let e="THREE."+s.shift();if(pr)pr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fs(...s){let e=s.join(" ");e in ld||(ld[e]=!0,Ie(...s))}function Dp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Np={[Ya]:$a,[Ka]:ja,[Za]:Qa,[ur]:Ja,[$a]:Ya,[ja]:Ka,[Qa]:Za,[Ja]:ur},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,so=Math.PI/180,ms=180/Math.PI;function Wn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function tt(s,e,t){return Math.max(e,Math.min(t,s))}function uh(s,e){return(s%e+e)%e}function Ig(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pg(s,e,t){return s!==e?(t-s)/(e-s):0}function ro(s,e,t){return(1-t)*s+t*e}function Lg(s,e,t,n){return ro(s,e,1-Math.exp(-t*n))}function Fg(s,e=1){return e-Math.abs(uh(s,e*2)-e)}function Dg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ng(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Og(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ug(s,e){return s+Math.random()*(e-s)}function Bg(s){return s*(.5-Math.random())}function kg(s){s!==void 0&&(cd=s);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zg(s){return s*so}function Vg(s){return s*ms}function Gg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Hg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Wg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Xg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*d,a*u,a*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Gn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var hh={DEG2RAD:so,RAD2DEG:ms,generateUUID:Wn,clamp:tt,euclideanModulo:uh,mapLinear:Ig,inverseLerp:Pg,lerp:ro,damp:Lg,pingpong:Fg,smoothstep:Dg,smootherstep:Ng,randInt:Og,randFloat:Ug,randFloatSpread:Bg,seededRandom:kg,degToRad:zg,radToDeg:Vg,isPowerOfTwo:Gg,ceilPowerOfTwo:Hg,floorPowerOfTwo:Wg,setQuaternionFromProperEuler:Xg,normalize:bt,denormalize:Gn},gh=class gh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gh.prototype.isVector2=!0;var Oe=gh,Tn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(h!==x||l!==f||c!==d||u!==m){let g=l*f+c*d+u*m+h*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+x*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xh=class xh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xh.prototype.isVector3=!0;var z=xh,tu=new z,ud=new Tn,bh=class bh{constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],y=i[1],M=i[4],b=i[7],v=i[2],S=i[5],E=i[8];return r[0]=o*x+a*y+l*v,r[3]=o*g+a*M+l*S,r[6]=o*p+a*b+l*E,r[1]=c*x+u*y+h*v,r[4]=c*g+u*M+h*S,r[7]=c*p+u*b+h*E,r[2]=f*x+d*y+m*v,r[5]=f*g+d*M+m*S,r[8]=f*p+d*b+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*c-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(u*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;var We=bh,nu=new We,hd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qg(){let s={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===dt&&(i.r=Si(i.r),i.g=Si(i.g),i.b=Si(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===dt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pi?oo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[dn]:{primaries:e,whitePoint:n,transfer:oo,toXYZ:hd,fromXYZ:fd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:hd,fromXYZ:fd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),s}var Je=qg();function Si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function cr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Xs,el=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=dr("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yg=0,mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(iu(i[o].image)):r.push(iu(i[o]))}else r=iu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function iu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?el.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var $g=0,su=new z,Xt=class s extends ni{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=fn,i=fn,r=Ot,o=Yn,a=In,l=vn,c=s.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=Wn(),this.name="",this.source=new mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Qu;Xt.DEFAULT_ANISOTROPY=1;var _h=class _h{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,b=(d+1)/2,v=(p+1)/2,S=(u+f)/4,E=(h+x)/4,_=(m+g)/4;return M>b&&M>v?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=S/n,r=E/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=S/i,r=_/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=E/r,i=_/r),this.set(n,i,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(h-x)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_h.prototype.isVector4=!0;var _t=_h,tl=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new Xt(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new mr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends tl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lo=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var bl=class bl{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,m,x,g)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f+x*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,x=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-x*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kg,e,Zg)}lookAt(e,t,n){let i=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ui.crossVectors(n,Sn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ui.crossVectors(n,Sn)),Ui.normalize(),pa.crossVectors(Sn,Ui),i[0]=Ui.x,i[4]=pa.x,i[8]=Sn.x,i[1]=Ui.y,i[5]=pa.y,i[9]=Sn.y,i[2]=Ui.z,i[6]=pa.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],y=n[3],M=n[7],b=n[11],v=n[15],S=i[0],E=i[4],_=i[8],w=i[12],R=i[1],T=i[5],L=i[9],I=i[13],C=i[2],F=i[6],N=i[10],U=i[14],V=i[3],k=i[7],B=i[11],H=i[15];return r[0]=o*S+a*R+l*C+c*V,r[4]=o*E+a*T+l*F+c*k,r[8]=o*_+a*L+l*N+c*B,r[12]=o*w+a*I+l*U+c*H,r[1]=u*S+h*R+f*C+d*V,r[5]=u*E+h*T+f*F+d*k,r[9]=u*_+h*L+f*N+d*B,r[13]=u*w+h*I+f*U+d*H,r[2]=m*S+x*R+g*C+p*V,r[6]=m*E+x*T+g*F+p*k,r[10]=m*_+x*L+g*N+p*B,r[14]=m*w+x*I+g*U+p*H,r[3]=y*S+M*R+b*C+v*V,r[7]=y*E+M*T+b*F+v*k,r[11]=y*_+M*L+b*N+v*B,r[15]=y*w+M*I+b*U+v*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],y=l*d-c*f,M=a*d-c*h,b=a*f-l*h,v=o*d-c*u,S=o*f-l*u,E=o*h-a*u;return t*(x*y-g*M+p*b)-n*(m*y-g*v+p*S)+i*(m*M-x*v+p*E)-r*(m*b-x*S+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],y=t*a-n*o,M=t*l-i*o,b=t*c-r*o,v=n*l-i*a,S=n*c-r*a,E=i*c-r*l,_=u*x-h*m,w=u*g-f*m,R=u*p-d*m,T=h*g-f*x,L=h*p-d*x,I=f*p-d*g,C=y*I-M*L+b*T+v*R-S*w+E*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/C;return e[0]=(a*I-l*L+c*T)*F,e[1]=(i*L-n*I-r*T)*F,e[2]=(x*E-g*S+p*v)*F,e[3]=(f*S-h*E-d*v)*F,e[4]=(l*R-o*I-c*w)*F,e[5]=(t*I-i*R+r*w)*F,e[6]=(g*b-m*E-p*M)*F,e[7]=(u*E-f*b+d*M)*F,e[8]=(o*L-a*R+c*_)*F,e[9]=(n*R-t*L-r*_)*F,e[10]=(m*S-x*b+p*y)*F,e[11]=(h*b-u*S-d*y)*F,e[12]=(a*w-o*T-l*_)*F,e[13]=(t*T-n*w+i*_)*F,e[14]=(x*M-m*v-g*y)*F,e[15]=(u*v-h*M+f*y)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,m=r*h,x=o*u,g=o*h,p=a*h,y=l*c,M=l*u,b=l*h,v=n.x,S=n.y,E=n.z;return i[0]=(1-(x+p))*v,i[1]=(d+b)*v,i[2]=(m-M)*v,i[3]=0,i[4]=(d-b)*S,i[5]=(1-(f+p))*S,i[6]=(g+y)*S,i[7]=0,i[8]=(m+M)*E,i[9]=(g-y)*E,i[10]=(1-(f+x))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=qs.set(i[0],i[1],i[2]).length(),a=qs.set(i[4],i[5],i[6]).length(),l=qs.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Bn.copy(this);let c=1/o,u=1/a,h=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Hn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(l)m=r/(o-r),x=o*r/(o-r);else if(a===Hn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Hn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(l)m=1/(o-r),x=o/(o-r);else if(a===Hn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bl.prototype.isMatrix4=!0;var Xe=bl,qs=new z,Bn=new Xe,Kg=new z(0,0,0),Zg=new z(1,1,1),Ui=new z,pa=new z,Sn=new z,dd=new Xe,pd=new Tn,ii=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jg=0,md=new z,Ys=new Tn,gi=new Xe,ma=new z,qr=new z,jg=new z,Qg=new Tn,gd=new z(1,0,0),xd=new z(0,1,0),bd=new z(0,0,1),_d={type:"added"},ex={type:"removed"},$s={type:"childadded",child:null},ru={type:"childremoved",child:null},Tt=class s extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new z,t=new ii,n=new Tn,i=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new We}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(bd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ma.copy(e):ma.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(qr,ma,this.up):gi.lookAt(ma,qr,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),Ys.setFromRotationMatrix(gi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),$s.child=e,this.dispatchEvent($s),$s.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ex),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,e,jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Tt.DEFAULT_UP=new z(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ft=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},tx={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Op={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},ga={h:0,s:0,l:0};function ou(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=uh(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ou(o,r,e+1/3),this.g=ou(o,r,e),this.b=ou(o,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Op[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Je.workingToColorSpace(sn.copy(this),e),Math.round(tt(sn.r*255,0,255))*65536+Math.round(tt(sn.g*255,0,255))*256+Math.round(tt(sn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=vt){Je.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(ga);let n=ro(Bi.h,ga.h,t),i=ro(Bi.s,ga.s,t),r=ro(Bi.l,ga.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new j;j.NAMES=Op;var gs=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new j(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wi=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new z,xi=new z,au=new z,bi=new z,Ks=new z,Zs=new z,yd=new z,lu=new z,cu=new z,uu=new z,hu=new _t,fu=new _t,du=new _t,Mi=class s{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),xi.subVectors(n,t),au.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(xi),l=kn.dot(au),c=xi.dot(xi),u=xi.dot(au),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return hu.setScalar(0),fu.setScalar(0),du.setScalar(0),hu.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(hu,r.x),o.addScaledVector(fu,r.y),o.addScaledVector(du,r.z),o}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),xi.subVectors(e,t),kn.cross(xi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),kn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ks.subVectors(i,n),Zs.subVectors(r,n),lu.subVectors(e,n);let l=Ks.dot(lu),c=Zs.dot(lu);if(l<=0&&c<=0)return t.copy(n);cu.subVectors(e,i);let u=Ks.dot(cu),h=Zs.dot(cu);if(u>=0&&h<=u)return t.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Ks,o);uu.subVectors(e,r);let d=Ks.dot(uu),m=Zs.dot(uu);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Zs,a);let g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return yd.subVectors(r,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(yd,a);let p=1/(g+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(Ks,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ut=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),ba.subVectors(this.max,Yr),Js.subVectors(e.a,Yr),js.subVectors(e.b,Yr),Qs.subVectors(e.c,Yr),ki.subVectors(js,Js),zi.subVectors(Qs,js),ls.subVectors(Js,Qs);let t=[0,-ki.z,ki.y,0,-zi.z,zi.y,0,-ls.z,ls.y,ki.z,0,-ki.x,zi.z,0,-zi.x,ls.z,0,-ls.x,-ki.y,ki.x,0,-zi.y,zi.x,0,-ls.y,ls.x,0];return!pu(t,Js,js,Qs,ba)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,Js,js,Qs,ba))?!1:(_a.crossVectors(ki,zi),t=[_a.x,_a.y,_a.z],pu(t,Js,js,Qs,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_i=[new z,new z,new z,new z,new z,new z,new z,new z],zn=new z,xa=new Ut,Js=new z,js=new z,Qs=new z,ki=new z,zi=new z,ls=new z,Yr=new z,ba=new z,_a=new z,cs=new z;function pu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){cs.fromArray(s,r);let a=i.x*Math.abs(cs.x)+i.y*Math.abs(cs.y)+i.z*Math.abs(cs.z),l=e.dot(cs),c=t.dot(cs),u=n.dot(cs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Gt=new z,ya=new Oe,nx=0,Wt=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ah,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var co=class extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xs=class extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ue=class extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ix=new Ut,$r=new z,mu=new z,gn=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ix.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);let t=$r.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector($r,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(mu)),this.expandByPoint($r.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sx=0,Ln=new Xe,gu=new Tt,er=new z,wn=new Ut,Kr=new Ut,Jt=new z,Ge=class s extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rg(e)?xs:co)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ut);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(wn.min,Kr.min),wn.expandByPoint(Jt),Jt.addVectors(wn.max,Kr.max),wn.expandByPoint(Jt)):(wn.expandByPoint(Kr.min),wn.expandByPoint(Kr.max))}wn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Jt.fromBufferAttribute(a,c),l&&(er.fromBufferAttribute(e,c),Jt.add(er)),i=Math.max(i,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new z,l[_]=new z;let c=new z,u=new z,h=new z,f=new Oe,d=new Oe,m=new Oe,x=new z,g=new z;function p(_,w,R){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(T),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(T),a[_].add(x),a[w].add(x),a[R].add(x),l[_].add(g),l[w].add(g),l[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,w=y.length;_<w;++_){let R=y[_],T=R.start,L=R.count;for(let I=T,C=T+L;I<C;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let M=new z,b=new z,v=new z,S=new z;function E(_){v.fromBufferAttribute(i,_),S.copy(v);let w=a[_];M.copy(w),M.sub(v.multiplyScalar(v.dot(w))).normalize(),b.crossVectors(S,w);let T=b.dot(l[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,T)}for(let _=0,w=y.length;_<w;++_){let R=y[_],T=R.start,L=R.count;for(let I=T,C=T+L;I<C;I+=3)E(e.getX(I+0)),E(e.getX(I+1)),E(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new Wt(f,u,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hn=new z,Hi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),i=bt(i,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xu=new z,rx=new z,ox=new We,Vn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xu.subVectors(n,t).cross(rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ox.getNormalMatrix(e),i=this.coplanarPoint(xu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ax=0,on=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=ci,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new j().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Wi=class extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tr,Zr=new z,nr=new z,ir=new z,sr=new Oe,Jr=new Oe,Up=new Xe,va=new z,jr=new z,Ma=new z,vd=new Oe,bu=new Oe,Md=new Oe,_s=class extends Tt{constructor(e=new Wi){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bs(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new Hi(n,3,0,!1)),tr.setAttribute("uv",new Hi(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Sa(va.set(-.5,-.5,0),ir,o,nr,i,r),Sa(jr.set(.5,-.5,0),ir,o,nr,i,r),Sa(Ma.set(.5,.5,0),ir,o,nr,i,r),vd.set(0,0),bu.set(1,0),Md.set(1,1);let a=e.ray.intersectTriangle(va,jr,Ma,!1,Zr);if(a===null&&(Sa(jr.set(-.5,.5,0),ir,o,nr,i,r),bu.set(0,1),a=e.ray.intersectTriangle(va,Ma,jr,!1,Zr),a===null))return;let l=e.ray.origin.distanceTo(Zr);l<e.near||l>e.far||t.push({distance:l,point:Zr.clone(),uv:Mi.getInterpolation(Zr,va,jr,Ma,vd,bu,Md,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sa(s,e,t,n,i,r){sr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Jr.x=r*sr.x-i*sr.y,Jr.y=i*sr.x+r*sr.y):Jr.copy(sr),s.copy(e),s.x+=Jr.x,s.y+=Jr.y,s.applyMatrix4(Up)}var yi=new z,_u=new z,wa=new z,Ta=new z,Xi=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_u.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ta.copy(this.origin).sub(_u);let r=e.distanceTo(t)*.5,o=-this.direction.dot(wa),a=Ta.dot(this.direction),l=-Ta.dot(wa),c=Ta.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=r*u,h>=0)if(f>=-m)if(f<=m){let x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(_u).addScaledVector(wa,f),d}intersectSphere(e,t){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);let n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,x=t.y-o.y,g=t.z-o.z,p=n.x-o.x,y=n.y-o.y,M=n.z-o.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(u),E,_,w,R,T,L,I,C,F,N,U,V;if(b>=v&&b>=S?(w=l,L=h,F=m,V=p,l>=0?(E=c,_=u,R=f,T=d,I=x,C=g,N=y,U=M):(E=u,_=c,R=d,T=f,I=g,C=x,N=M,U=y)):v>=S?(w=c,L=f,F=x,V=y,c>=0?(E=u,_=l,R=d,T=h,I=g,C=m,N=M,U=p):(E=l,_=u,R=h,T=d,I=m,C=g,N=p,U=M)):(w=u,L=d,F=g,V=M,u>=0?(E=l,_=c,R=h,T=f,I=m,C=x,N=p,U=y):(E=c,_=l,R=f,T=h,I=x,C=m,N=y,U=p)),w===0)return null;let k=E/w,B=_/w,H=1/w,ee=R-k*L,Q=T-B*L,ce=I-k*F,ue=C-B*F,Be=N-k*V,q=U-B*V,Z=Be*ue-q*ce,ae=ee*q-Q*Be,we=ce*Q-ue*ee;if(i){if(Z<0||ae<0||we<0)return null}else if((Z<0||ae<0||we<0)&&(Z>0||ae>0||we>0))return null;let ge=Z+ae+we;if(ge===0)return null;let ze=H*(Z*L+ae*F+we*V);return(ge>0?ze<0:ze>0)?null:this.at(ze/ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ye=class extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sd=new Xe,us=new Xi,Aa=new gn,wd=new z,Ea=new z,Ra=new z,Ca=new z,yu=new z,Ia=new z,Td=new z,Pa=new z,Fe=class extends Tt{constructor(e=new Ge,t=new Ye){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(yu.fromBufferAttribute(h,e),o?Ia.addScaledVector(yu,u):Ia.addScaledVector(yu.sub(t),u))}t.add(Ia)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Aa.containsPoint(us.origin)===!1&&(us.intersectSphere(Aa,wd)===null||us.origin.distanceToSquared(wd)>(e.far-e.near)**2))&&(Sd.copy(r).invert(),us.copy(e.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,v=M;b<v;b+=3){let S=a.getX(b),E=a.getX(b+1),_=a.getX(b+2);i=La(this,p,e,n,c,u,h,S,E,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=a.getX(g),M=a.getX(g+1),b=a.getX(g+2);i=La(this,o,e,n,c,u,h,y,M,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=o[g.materialIndex],y=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=y,v=M;b<v;b+=3){let S=b,E=b+1,_=b+2;i=La(this,p,e,n,c,u,h,S,E,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let y=g,M=g+1,b=g+2;i=La(this,o,e,n,c,u,h,y,M,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function lx(s,e,t,n,i,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ai,a),l===null)return null;Pa.copy(a),Pa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:s}}function La(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ea),s.getVertexPosition(l,Ra),s.getVertexPosition(c,Ca);let u=lx(s,e,t,n,Ea,Ra,Ca,Td);if(u){let h=new z;Mi.getBarycoord(Td,Ea,Ra,Ca,h),i&&(u.uv=Mi.getInterpolatedAttribute(i,a,l,c,h,new Oe)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,a,l,c,h,new Oe)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Mi.getNormal(Ea,Ra,Ca,f.normal),u.face=f,u.barycoord=h}return u}var Qr=new _t,Ad=new _t,Ed=new _t,cx=new _t,Rd=new Xe,Fa=new z,vu=new gn,Cd=new Xe,Mu=new Xi,uo=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Au,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ut),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingBox.expandByPoint(Fa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fa),this.boundingSphere.expandByPoint(Fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vu.copy(this.boundingSphere),vu.applyMatrix4(i),e.ray.intersectsSphere(vu)!==!1&&(Cd.copy(i).invert(),Mu.copy(e.ray).applyMatrix4(Cd),!(this.boundingBox!==null&&Mu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Mu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Ad.fromBufferAttribute(i.attributes.skinIndex,e),Ed.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Qr.copy(t),t.set(0,0,0,0)):(Qr.set(...t,1),t.set(0,0,0)),Qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ed.getComponent(r);if(o!==0){let a=Ad.getComponent(r);Rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cx.copy(Qr).applyMatrix4(Rd),o)}}return t.isVector4&&(t.w=Qr.w),t.applyMatrix4(this.bindMatrixInverse)}},br=class extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}},_r=class extends Xt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Nt,u=Nt,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Id=new Xe,ux=new Xe,ho=class s{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ux;Id.multiplyMatrices(a,t[r]),Id.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _r(t,e,e,In,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ie("Skeleton: No bone found with UUID:",r),o=new br),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ti=class extends Wt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new Xe,Pd=new Xe,Da=[],Ld=new Ut,hx=new Xe,eo=new Fe,to=new gn,ys=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ti(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Ld.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(Ld)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),to.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(n),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,rr),Pd.multiplyMatrices(n,rr),eo.matrixWorld=Pd,eo.raycast(e,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,t.push(l)}Da.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ti(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _r(new Float32Array(i*this.count),i,this.count,Al,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},hs=new gn,fx=new Oe(.5,.5),Na=new z,yr=class{constructor(e=new Vn,t=new Vn,n=new Vn,i=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],y=r[12],M=r[13],b=r[14],v=r[15];if(i[0].setComponents(c-o,d-u,p-m,v-y).normalize(),i[1].setComponents(c+o,d+u,p+m,v+y).normalize(),i[2].setComponents(c+a,d+h,p+x,v+M).normalize(),i[3].setComponents(c-a,d-h,p-x,v-M).normalize(),n)i[4].setComponents(l,f,g,b).normalize(),i[5].setComponents(c-l,d-f,p-g,v-b).normalize();else if(i[4].setComponents(c-l,d-f,p-g,v-b).normalize(),t===Hn)i[5].setComponents(c+l,d+f,p+g,v+b).normalize();else if(t===fr)i[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=fx.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Na.x=i.normal.x>0?e.max.x:e.min.x,Na.y=i.normal.y>0?e.max.y:e.min.y,Na.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Bt=class extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},il=new z,sl=new z,Fd=new Xe,no=new Xi,Oa=new gn,Su=new z,Dd=new z,An=class extends Tt{constructor(e=new Ge,t=new Bt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)il.fromBufferAttribute(t,i-1),sl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=il.distanceTo(sl);e.setAttribute("lineDistance",new Ue(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(i),Oa.radius+=r,e.ray.intersectsSphere(Oa)===!1)return;Fd.copy(i).invert(),no.copy(e.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=u.getX(x),y=u.getX(x+1),M=Ua(this,e,no,l,p,y,x);M&&t.push(M)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(d),p=Ua(this,e,no,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=d,g=m-1;x<g;x+=c){let p=Ua(this,e,no,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Ua(this,e,no,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ua(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(il.fromBufferAttribute(a,i),sl.fromBufferAttribute(a,r),t.distanceSqToSegment(il,sl,Su,Dd)>n)return;Su.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Su);if(!(c<e.near||c>e.far))return{distance:c,point:Dd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Nd=new z,Od=new z,xn=class extends An{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nd.fromBufferAttribute(t,i),Od.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nd.distanceTo(Od);e.setAttribute("lineDistance",new Ue(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fo=class extends An{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},bn=class extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Xe,Pu=new Xi,Ba=new gn,ka=new z,En=class extends Tt{constructor(e=new Ge,t=new bn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(i),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Ud.copy(i).invert(),Pu.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);ka.fromBufferAttribute(h,g),Bd(ka,g,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,x=d;m<x;m++)ka.fromBufferAttribute(h,m),Bd(ka,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bd(s,e,t,n,i,r,o){let a=Pu.distanceSqToPoint(s);if(a<t){let l=new z;Pu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends Xt{constructor(e=[],t=Ki,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},an=class extends Xt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Xt{constructor(e,t,n=$n,i,r,o,a=Nt,l=Nt,c,u=ti,h=1){if(u!==ti&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},rl=class extends qi{constructor(e,t=$n,n=Ki,i,r,o=Nt,a=Nt,l,c=ti){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mo=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yi=class s extends Ge{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function m(x,g,p,y,M,b,v,S,E,_,w){let R=b/E,T=v/_,L=b/2,I=v/2,C=S/2,F=E+1,N=_+1,U=0,V=0,k=new z;for(let B=0;B<N;B++){let H=B*T-I;for(let ee=0;ee<F;ee++){let Q=ee*R-L;k[x]=Q*y,k[g]=H*M,k[p]=C,c.push(k.x,k.y,k.z),k[x]=0,k[g]=0,k[p]=S>0?1:-1,u.push(k.x,k.y,k.z),h.push(ee/E),h.push(1-B/_),U+=1}}for(let B=0;B<_;B++)for(let H=0;H<E;H++){let ee=f+H+F*B,Q=f+H+F*(B+1),ce=f+(H+1)+F*(B+1),ue=f+(H+1)+F*B;l.push(ee,Q,ue),l.push(Q,ce,ue),V+=6}a.addGroup(d,V,w),d+=V,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function dx(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Bp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=bx(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let u=a,h=l;for(let f=t;f<i;f+=t){let d=s[f],m=s[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return go(r,o,t,a,l,c,0),o}function Bp(s,e,t,n,i){let r;if(i===Cx(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=kd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=kd(o/n|0,s[o],s[o+1],r);return r&&vr(r,r.next)&&(bo(r),r=r.next),r}function vs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(vr(t,t.next)||Pt(t.prev,t,t.next)===0)){if(bo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Sx(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?mx(s,n,i,r):px(s)){e.push(l.i,s.i,c.i),bo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=gx(vs(s),e),go(s,e,t,n,i,r,2)):o===2&&xx(s,e,t,n,i,r):go(vs(s),e,t,n,i,r,1);break}}}function px(s){let e=s.prev,t=s,n=s.next;if(Pt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),h=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&io(i,a,r,l,o,c,m.x,m.y)&&Pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mx(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,u=i.y,h=r.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),x=Math.max(a,l,c),g=Math.max(u,h,f),p=Lu(d,m,e,t,n),y=Lu(x,g,e,t,n),M=s.prevZ,b=s.nextZ;for(;M&&M.z>=p&&b&&b.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&io(a,u,l,h,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&io(a,u,l,h,c,f,b.x,b.y)&&Pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=x&&M.y>=m&&M.y<=g&&M!==i&&M!==o&&io(a,u,l,h,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&io(a,u,l,h,c,f,b.x,b.y)&&Pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function gx(s,e){let t=s;do{let n=t.prev,i=t.next.next;!vr(n,i)&&zp(n,t,t.next,i)&&xo(n,i)&&xo(i,n)&&(e.push(n.i,t.i,i.i),bo(t),bo(t.next),t=s=i),t=t.next}while(t!==s);return vs(t)}function xx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ax(o,a)){let l=Vp(o,a);o=vs(o,o.next),l=vs(l,l.next),go(o,e,t,n,i,r,0),go(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function bx(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Bp(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Tx(c))}i.sort(_x);for(let r=0;r<i.length;r++)t=yx(i[r],t);return t}function _x(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function yx(s,e){let t=vx(s,e);if(!t)return e;let n=Vp(t,s);return vs(n,n.next),vs(t,t.next)}function vx(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(vr(s,t))return t;do{if(vr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&kp(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);xo(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Mx(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Mx(s,e){return Pt(s.prev,s,e.prev)<0&&Pt(e.next,s,s.next)<0}function Sx(s,e,t,n){let i=s;do i.z===0&&(i.z=Lu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wx(i)}function wx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Lu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Tx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function kp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function io(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&kp(s,e,t,n,i,r,o,a)}function Ax(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ex(s,e)&&(xo(s,e)&&xo(e,s)&&Rx(s,e)&&(Pt(s.prev,s,e.prev)||Pt(s,e.prev,e))||vr(s,e)&&Pt(s.prev,s,s.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function vr(s,e){return s.x===e.x&&s.y===e.y}function zp(s,e,t,n){let i=Va(Pt(s,e,t)),r=Va(Pt(s,e,n)),o=Va(Pt(t,n,s)),a=Va(Pt(t,n,e));return!!(i!==r&&o!==a||i===0&&za(s,t,e)||r===0&&za(s,n,e)||o===0&&za(t,s,n)||a===0&&za(t,e,n))}function za(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Va(s){return s>0?1:s<0?-1:0}function Ex(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xo(s,e){return Pt(s.prev,s,s.next)<0?Pt(s,e,s.next)>=0&&Pt(s,s.prev,e)>=0:Pt(s,e,s.prev)<0||Pt(s,s.next,e)<0}function Rx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Vp(s,e){let t=Fu(s.i,s.x,s.y),n=Fu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function kd(s,e,t,n){let i=Fu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function bo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Du=class{static triangulate(e,t,n=2){return dx(e,t,n)}},_o=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];zd(e),Vd(n,e);let o=e.length;t.forEach(zd);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Vd(n,t[l]);let a=Du.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function zd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Fn=class s extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let y=p*f-o;for(let M=0;M<c;M++){let b=M*h-r;m.push(b,-y,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,b=y+c*(p+1),v=y+1+c*(p+1),S=y+1+c*p;d.push(M,b,S),d.push(b,v,S)}this.setIndex(d),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ms=class s extends Ge{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/i,d=new z,m=new Oe;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let y=p+g,M=y,b=y+n+1,v=y+n+2,S=y+1;a.push(M,b,S),a.push(b,v,S)}}this.setIndex(a),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(c,3)),this.setAttribute("uv",new Ue(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var yo=class s extends Ge{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new z,f=new z,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let y=[],M=p/n,b=o+M*a,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),E=0;p===0&&o===0?E=.5/t:p===n&&l===Math.PI&&(E=-.5/t);for(let _=0;_<=t;_++){let w=_/t,R=i+w*r;h.x=-S*Math.cos(R),h.y=v,h.z=S*Math.sin(R),m.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),g.push(w+E,1-M),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let M=u[p][y+1],b=u[p][y],v=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&d.push(M,b,S),(p!==n-1||l<Math.PI)&&d.push(b,v,S)}this.setIndex(d),this.setAttribute("position",new Ue(m,3)),this.setAttribute("normal",new Ue(x,3)),this.setAttribute("uv",new Ue(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Cs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Gd(i))i.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Gd(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function ln(s){let e={};for(let t=0;t<s.length;t++){let n=Cs(s[t]);for(let i in n)e[i]=n[i]}return e}function Gd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ix(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function fh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Gp={clone:Cs,merge:ln},Px=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Px,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Ix(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(i.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(i.value);break;case"m3":this.uniforms[n].value=new We().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ol=class extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new j(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_n=class extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var vo=class extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},al=class extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ll=class extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Gi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Fx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Dx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ru,endingEnd:Ru}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Cu:r=e,a=2*t-n;break;case Iu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Cu:o=e,l=2*n-t;break;case Iu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,y=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,M=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let v=0;v!==a;++v)r[v]=p*o[u+v]+y*o[c+v]+M*o[l+v]+b*o[h+v];return r}},ul=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},hl=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},fl=class extends ri{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(i-t),x=1-m;for(let g=0;g!==a;++g)r[g]=o[c+g]*x+o[l+g]*m;return r}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let x=o[c+m],g=o[l+m],p=d*f+m*2,y=h[p],M=h[p+1],b=e*f+m*2,v=u[b],S=u[b+1],E=Ox(n,t,y,v,i);r[m]=Hp(E,x,M,S,g)}return r}};function Hp(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Nx(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Ox(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=Hp(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Nx(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gi(t,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Gi(e.times,Array),values:Gi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),qa(e.settings)&&(n.settings={inTangents:Gi(e.settings.inTangents,Array),outTangents:Gi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case ps:t=this.InterpolantFactoryMethodLinear;break;case Wa:t=this.InterpolantFactoryMethodSmooth;break;case Eu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return ps;case this.InterpolantFactoryMethodSmooth:return Wa;case this.InterpolantFactoryMethodBezier:return Eu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;qa(this.settings)&&(Wd(this.settings.inTangents,e),Wd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Cg(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,qa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Wd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ps;var Ai=class extends yn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=ds;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Mo.prototype.ValueTypeName="color";var Ei=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName="number";var dl=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let u=c+a;c!==u;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ri=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};Ri.prototype.ValueTypeName="quaternion";Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends yn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ds;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var $i=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};$i.prototype.ValueTypeName="vector";var So=class{constructor(e="",t=-1,n=[],i=Mp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Bx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Fx(l);l=Hd(l,1,u),c=Hd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ei(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ux(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return Mo;case"quaternion":return Ri;case"bool":case"boolean":return Ai;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Bx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ux(s.type);if(s.times===void 0){let n=[],i=[];Dx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),qa(s.settings)&&(t.settings={inTangents:Gi(s.settings.inTangents,Float32Array),outTangents:Gi(s.settings.outTangents,Float32Array)}),t}var ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Xd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Xd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Xd(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var pl=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wp=new pl,oi=class{constructor(e){this.manager=e!==void 0?e:Wp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oi.DEFAULT_MATERIAL_NAME="__DEFAULT";var vi={},Nu=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends oi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ei.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(vi[e]!==void 0){vi[e].push({onLoad:t,onProgress:n,onError:i});return}vi[e]=[],vi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=vi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){y();function y(){h.read().then(({done:M,value:b})=>{if(M)p.close();else{x+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let S=0,E=u.length;S<E;S++){let _=u[S];_.onProgress&&_.onProgress(v)}p.enqueue(b),y()}},M=>{p.error(M)})}}});return new Response(g)}else throw new Nu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{ei.add(`file:${e}`,c);let u=vi[e];delete vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var or=new WeakMap,ml=class extends oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ei.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=or.get(o);h===void 0&&(h=[],or.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=dr("img");function l(){u(),t&&t(this);let h=or.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}or.delete(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),ei.remove(`image:${e}`);let f=or.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}or.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ei.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var wo=class extends oi{constructor(e){super(e)}load(e,t,n,i){let r=new Xt,o=new ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ss=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new j(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},To=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},wu=new Xe,qd=new z,Yd=new z,Sr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yr,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(qd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){wu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(wu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ga=new z,Ha=new Tn,Qn=new z,Ao=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Ha,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,Qn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ga,Ha,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vi=new z,$d=new Oe,Kd=new Oe,Ht=class extends Ao{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(so*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(so*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Kd),t.subVectors(Kd,$d)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(so*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ou=class extends Sr{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Eo=class extends Ss{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Uu=class extends Sr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},ws=class extends Ss{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Uu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Dn=class extends Ao{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bu=class extends Sr{constructor(){super(new Dn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Bu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ii=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Tu=new WeakMap,Ro=class extends oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ei.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Tu.has(o)===!0?(i&&i(Tu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ei.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Tu.set(l,c),ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ei.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ar=-90,lr=1,gl=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(ar,lr,e,t);i.layers=this.layers,this.add(i);let r=new Ht(ar,lr,e,t);r.layers=this.layers,this.add(r);let o=new Ht(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new Ht(ar,lr,e,t);a.layers=this.layers,this.add(a);let l=new Ht(ar,lr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},xl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var dh="\\[\\]\\.:\\/",kx=new RegExp("["+dh+"]","g"),ph="[^"+dh+"]",zx="[^"+dh.replace("\\.","")+"]",Vx=/((?:WC+[\/:])*)/.source.replace("WC",ph),Gx=/(WCOD+)?/.source.replace("WCOD",zx),Hx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),Wx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),Xx=new RegExp("^"+Vx+Gx+Hx+Wx+"$"),qx=["material","materials","bones","map"],ku=class{constructor(e,t,n){let i=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kx,"")}static parseTrackName(e){let t=Xx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);qx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=ku;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ww=new Float32Array(1);var Zd=new Xe,Co=class{constructor(e,t,n=0,i=1/0){this.ray=new Xi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new gr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zd),this}intersectObject(e,t=!0,n=[]){return zu(e,this,n,t),n.sort(Jd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)zu(e[i],this,n,t);return n.sort(Jd),n}};function Jd(s,e){return s.distance-e.distance}function zu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)zu(r[o],e,t,!0)}}var yh=class yh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};yh.prototype.isMatrix2=!0;var Vu=yh;function mh(s,e,t,n){let i=Yx(n);switch(t){case sh:return s*e;case Al:return s*e/i.components*i.byteLength;case El:return s*e/i.components*i.byteLength;case Ji:return s*e*2/i.components*i.byteLength;case Rl:return s*e*2/i.components*i.byteLength;case rh:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Cl:return s*e*4/i.components*i.byteLength;case Fo:case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case No:case Oo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Fl:return Math.max(s,16)*Math.max(e,8)/4;case Il:case Ll:return Math.max(s,8)*Math.max(e,8)/2;case Dl:case Nl:case Ul:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Uo:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case $l:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ec:case tc:case nc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ic:case sc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Bo:case rc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yx(s){switch(s){case vn:case eh:return{byteLength:1,components:1};case Ar:case th:case Kn:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case $n:case Sl:case Cn:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function fm(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Kx(s){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],x=h[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let x=h[d];s.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jx=`#ifdef USE_ALPHAHASH
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
#endif`,jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nb=`#ifdef USE_AOMAP
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
#endif`,ib=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
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
#endif`,rb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ob=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cb=`#ifdef USE_IRIDESCENCE
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
#endif`,ub=`#ifdef USE_BUMPMAP
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_b=`#define PI 3.141592653589793
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
} // validated`,yb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vb=`vec3 transformedNormal = objectNormal;
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
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ab="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ib=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ub=`#ifdef USE_GRADIENTMAP
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
}`,Bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
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
#endif`,$b=`uniform sampler2D dfgLUT;
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
}`,Kb=`
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,__=`#ifdef USE_NORMALMAP
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
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,M_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N_=`float getShadowMask() {
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,B_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J_=`uniform sampler2D t2D;
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
}`,j_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,sy=`#define DISTANCE
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
}`,ry=`#define DISTANCE
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 diffuse;
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
}`,fy=`#define LAMBERT
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
}`,dy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,by=`#define PHONG
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
}`,_y=`#define PHONG
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
}`,yy=`#define STANDARD
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
}`,vy=`#define STANDARD
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
}`,My=`#define TOON
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
}`,Sy=`#define TOON
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
}`,wy=`uniform float size;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Ey=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Zx,alphahash_pars_fragment:Jx,alphamap_fragment:jx,alphamap_pars_fragment:Qx,alphatest_fragment:eb,alphatest_pars_fragment:tb,aomap_fragment:nb,aomap_pars_fragment:ib,batching_pars_vertex:sb,batching_vertex:rb,begin_vertex:ob,beginnormal_vertex:ab,bsdfs:lb,iridescence_fragment:cb,bumpmap_pars_fragment:ub,clipping_planes_fragment:hb,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:db,clipping_planes_vertex:pb,color_fragment:mb,color_pars_fragment:gb,color_pars_vertex:xb,color_vertex:bb,common:_b,cube_uv_reflection_fragment:yb,defaultnormal_vertex:vb,displacementmap_pars_vertex:Mb,displacementmap_vertex:Sb,emissivemap_fragment:wb,emissivemap_pars_fragment:Tb,colorspace_fragment:Ab,colorspace_pars_fragment:Eb,envmap_fragment:Rb,envmap_common_pars_fragment:Cb,envmap_pars_fragment:Ib,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:Gb,envmap_vertex:Lb,fog_vertex:Fb,fog_pars_vertex:Db,fog_fragment:Nb,fog_pars_fragment:Ob,gradientmap_pars_fragment:Ub,lightmap_pars_fragment:Bb,lights_lambert_fragment:kb,lights_lambert_pars_fragment:zb,lights_pars_begin:Vb,lights_toon_fragment:Hb,lights_toon_pars_fragment:Wb,lights_phong_fragment:Xb,lights_phong_pars_fragment:qb,lights_physical_fragment:Yb,lights_physical_pars_fragment:$b,lights_fragment_begin:Kb,lights_fragment_maps:Zb,lights_fragment_end:Jb,lightprobes_pars_fragment:jb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:s_,map_particle_fragment:r_,map_particle_pars_fragment:o_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:l_,morphinstance_vertex:c_,morphcolor_vertex:u_,morphnormal_vertex:h_,morphtarget_pars_vertex:f_,morphtarget_vertex:d_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:g_,normal_pars_vertex:x_,normal_vertex:b_,normalmap_pars_fragment:__,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:M_,iridescence_pars_fragment:S_,opaque_fragment:w_,packing:T_,premultiplied_alpha_fragment:A_,project_vertex:E_,dithering_fragment:R_,dithering_pars_fragment:C_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:L_,shadowmap_pars_vertex:F_,shadowmap_vertex:D_,shadowmask_pars_fragment:N_,skinbase_vertex:O_,skinning_pars_vertex:U_,skinning_vertex:B_,skinnormal_vertex:k_,specularmap_fragment:z_,specularmap_pars_fragment:V_,tonemapping_fragment:G_,tonemapping_pars_fragment:H_,transmission_fragment:W_,transmission_pars_fragment:X_,uv_pars_fragment:q_,uv_pars_vertex:Y_,uv_vertex:$_,worldpos_vertex:K_,background_vert:Z_,background_frag:J_,backgroundCube_vert:j_,backgroundCube_frag:Q_,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distance_vert:sy,distance_frag:ry,equirect_vert:oy,equirect_frag:ay,linedashed_vert:ly,linedashed_frag:cy,meshbasic_vert:uy,meshbasic_frag:hy,meshlambert_vert:fy,meshlambert_frag:dy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:xy,meshphong_vert:by,meshphong_frag:_y,meshphysical_vert:yy,meshphysical_frag:vy,meshtoon_vert:My,meshtoon_frag:Sy,points_vert:wy,points_frag:Ty,shadow_vert:Ay,shadow_frag:Ey,sprite_vert:Ry,sprite_frag:Cy},be={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},hi={basic:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new j(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([be.points,be.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([be.common,be.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([be.sprite,be.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([be.common,be.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([be.lights,be.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var lc={r:0,b:0,g:0},Iy=new Xe,dm=new We;dm.set(-1,0,0,0,1,0,0,0,1);function Py(s,e,t,n,i,r){let o=new j(0),a=i===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let b=y.backgroundBlurriness>0;M=e.get(M,b)}return M}function m(y){let M=!1,b=d(y);b===null?g(o,a):b&&b.isColor&&(g(b,1),M=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(y,M){let b=d(M);b&&(b.isCubeTexture||b.mapping===Lo)?(c===void 0&&(c=new Fe(new Yi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Cs(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(dm),c.material.toneMapped=Je.getTransfer(b.colorSpace)!==dt,(u!==b||h!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Fe(new Fn(2,2),new Rn({name:"BackgroundMaterial",uniforms:Cs(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Je.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,M){y.getRGB(lc,fh(s)),t.buffers.color.setClear(lc.r,lc.g,lc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(o,a)},render:m,addToRenderList:x,dispose:p}}function Ly(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(T,L,I,C,F){let N=!1,U=h(T,C,I,L);r!==U&&(r=U,c(r.object)),N=d(T,C,I,F),N&&m(T,C,I,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,b(T,L,I,C),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function u(T){return s.deleteVertexArray(T)}function h(T,L,I,C){let F=C.wireframe===!0,N=n[L.id];N===void 0&&(N={},n[L.id]=N);let U=T.isInstancedMesh===!0?T.id:0,V=N[U];V===void 0&&(V={},N[U]=V);let k=V[I.id];k===void 0&&(k={},V[I.id]=k);let B=k[F];return B===void 0&&(B=f(l()),k[F]=B),B}function f(T){let L=[],I=[],C=[];for(let F=0;F<t;F++)L[F]=0,I[F]=0,C[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:C,object:T,attributes:{},index:null}}function d(T,L,I,C){let F=r.attributes,N=L.attributes,U=0,V=I.getAttributes();for(let k in V)if(V[k].location>=0){let H=F[k],ee=N[k];if(ee===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ee=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ee=T.instanceColor)),H===void 0||H.attribute!==ee||ee&&H.data!==ee.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function m(T,L,I,C){let F={},N=L.attributes,U=0,V=I.getAttributes();for(let k in V)if(V[k].location>=0){let H=N[k];H===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(H=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(H=T.instanceColor));let ee={};ee.attribute=H,H&&H.data&&(ee.data=H.data),F[k]=ee,U++}r.attributes=F,r.attributesNum=U,r.index=C}function x(){let T=r.newAttributes;for(let L=0,I=T.length;L<I;L++)T[L]=0}function g(T){p(T,0)}function p(T,L){let I=r.newAttributes,C=r.enabledAttributes,F=r.attributeDivisors;I[T]=1,C[T]===0&&(s.enableVertexAttribArray(T),C[T]=1),F[T]!==L&&(s.vertexAttribDivisor(T,L),F[T]=L)}function y(){let T=r.newAttributes,L=r.enabledAttributes;for(let I=0,C=L.length;I<C;I++)L[I]!==T[I]&&(s.disableVertexAttribArray(I),L[I]=0)}function M(T,L,I,C,F,N,U){U===!0?s.vertexAttribIPointer(T,L,I,F,N):s.vertexAttribPointer(T,L,I,C,F,N)}function b(T,L,I,C){x();let F=C.attributes,N=I.getAttributes(),U=L.defaultAttributeValues;for(let V in N){let k=N[V];if(k.location>=0){let B=F[V];if(B===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(B=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(B=T.instanceColor)),B!==void 0){let H=B.normalized,ee=B.itemSize,Q=e.get(B);if(Q===void 0)continue;let ce=Q.buffer,ue=Q.type,Be=Q.bytesPerElement,q=ue===s.INT||ue===s.UNSIGNED_INT||B.gpuType===Sl;if(B.isInterleavedBufferAttribute){let Z=B.data,ae=Z.stride,we=B.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<k.locationSize;ge++)p(k.location+ge,Z.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<k.locationSize;ge++)g(k.location+ge);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let ge=0;ge<k.locationSize;ge++)M(k.location+ge,ee/k.locationSize,ue,H,ae*Be,(we+ee/k.locationSize*ge)*Be,q)}else{if(B.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)p(k.location+Z,B.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let Z=0;Z<k.locationSize;Z++)g(k.location+Z);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Z=0;Z<k.locationSize;Z++)M(k.location+Z,ee/k.locationSize,ue,H,ee*Be,ee/k.locationSize*Z*Be,q)}}else if(U!==void 0){let H=U[V];if(H!==void 0)switch(H.length){case 2:s.vertexAttrib2fv(k.location,H);break;case 3:s.vertexAttrib3fv(k.location,H);break;case 4:s.vertexAttrib4fv(k.location,H);break;default:s.vertexAttrib1fv(k.location,H)}}}}y()}function v(){w();for(let T in n){let L=n[T];for(let I in L){let C=L[I];for(let F in C){let N=C[F];for(let U in N)u(N[U].object),delete N[U];delete C[F]}}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let L=n[T.id];for(let I in L){let C=L[I];for(let F in C){let N=C[F];for(let U in N)u(N[U].object),delete N[U];delete C[F]}}delete n[T.id]}function E(T){for(let L in n){let I=n[L];for(let C in I){let F=I[C];if(F[T.id]===void 0)continue;let N=F[T.id];for(let U in N)u(N[U].object),delete N[U];delete F[T.id]}}}function _(T){for(let L in n){let I=n[L],C=T.isInstancedMesh===!0?T.id:0,F=I[C];if(F!==void 0){for(let N in F){let U=F[N];for(let V in U)u(U[V].object),delete U[V];delete F[N]}delete I[C],Object.keys(I).length===0&&delete n[L]}}}function w(){R(),o=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Fy(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(s.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Dy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==In&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let _=E===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==vn&&E!==Cn&&!_&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:b,maxSamples:v,samples:S}}function Ny(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Vn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):c();else{let y=r?0:n,M=y*4,b=p.clippingState||null;l.value=b,b=u(m,f,M,d);for(let v=0;v!==M;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,b=d;M!==x;++M,b+=4)o.copy(h[M]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}var Ir=4,Oy=6,Uy=20,By=256,Vo=new Dn,Xp=new j,vh=null,Mh=0,Sh=0,wh=!1,ky=new z,Is=new z,Lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=ky}=r;vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,Mh,Sh),this._renderer.xr.enabled=wh,e.scissorTest=!1,Cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Kn,format:In,colorSpace:dn,depthBuffer:!1},i=qp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zy(r)),this._blurMaterial=Gy(r,e,t),this._ggxMaterial=Vy(r,e,t)}return i}_compileMaterial(e){let t=new Fe(new Ge,e);this._renderer.compile(t,Vo)}_sceneToCubeUV(e,t,n,i,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Xp),h.toneMapping=qn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new Yi,new Ye({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Xp),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):b===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));let v=this._cubeSize;Cr(i,b*v,M>2?v:0,v,v),h.setRenderTarget(i),p&&h.render(x,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ki||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Ir?n-m+Ir:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Cr(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,Vo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Cr(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(a,Vo)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],h=3*u*(i>this._lodMax-Ir?i-this._lodMax+Ir:0),f=4*(this._cubeSize-u);Cr(t,h,f,3*u,2*u),o.setRenderTarget(t),o.render(l,Vo)}};function zy(s){let e=[],t=[],n=s,i=s-Ir+1+Oy;for(let r=0;r<i;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),x=new Float32Array(d*f*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,M=p>2?0:-1,b=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];m.set(b,d*f*p);for(let v=0;v<f;v++){let S=u[v*2]*2-1,E=u[v*2+1]*2-1;p===0?Is.set(1,E,S):p===1?Is.set(-S,1,-E):p===2?Is.set(-S,E,1):p===3?Is.set(-1,E,-S):p===4?Is.set(-S,-1,E):Is.set(S,E,-1),Is.toArray(x,(p*f+v)*d)}}let g=new Ge;g.setAttribute("position",new Wt(m,d)),g.setAttribute("outputDirection",new Wt(x,d)),t.push(new Fe(g,null)),n>Ir&&n--}return{lodMeshes:t,sizeLods:e}}function qp(s,e,t){let n=new rn(s,e,t);return n.texture.mapping=Lo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Vy(s,e,t){return new Rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:By,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Gy(s,e,t){return new Rn({name:"SphericalGaussianBlur",defines:{SAMPLES:Uy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Yp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function $p(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var uc=class extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new po(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:li});r.uniforms.tEquirect.value=t;let o=new Fe(i,r),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Ot),new gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};function Hy(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===yl||d===vl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new uc(m.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===yl||d===vl,x=d===Ki||d===Es;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Lr(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Lr(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,d){return d===yl?f.mapping=Ki:d===vl&&(f.mapping=Es),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function Wy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&fs("WebGLRenderer: "+n+" extension not supported."),i}}}function Xy(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,x=0;if(m===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let M=0,b=y.length;M<b;M+=3){let v=y[M+0],S=y[M+1],E=y[M+2];f.push(v,S,S,E,E,v)}}else{let y=m.array;x=m.version;for(let M=0,b=y.length/3-1;M<b;M+=3){let v=M+0,S=M+1,E=M+2;f.push(v,S,S,E,E,v)}}let g=new(m.count>=65535?xs:co)(f,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function qy(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Yy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function $y(s,e,t){let n=new WeakMap,i=new _t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let w=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let b=a.attributes.position.count*M,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*h),E=new lo(S,b,v,h);E.type=Cn,E.needsUpdate=!0;let _=M*4;for(let R=0;R<h;R++){let T=g[R],L=p[R],I=y[R],C=b*v*4*R;for(let F=0;F<T.count;F++){let N=F*_;d===!0&&(i.fromBufferAttribute(T,F),S[C+N+0]=i.x,S[C+N+1]=i.y,S[C+N+2]=i.z,S[C+N+3]=0),m===!0&&(i.fromBufferAttribute(L,F),S[C+N+4]=i.x,S[C+N+5]=i.y,S[C+N+6]=i.z,S[C+N+7]=0),x===!0&&(i.fromBufferAttribute(I,F),S[C+N+8]=i.x,S[C+N+9]=i.y,S[C+N+10]=i.z,S[C+N+11]=I.itemSize===4?i.w:1)}}f={count:h,texture:E,size:new Oe(b,v)},n.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ky(s,e,t,n,i){let r=new WeakMap;function o(c){let u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Zy={[qu]:"LINEAR_TONE_MAPPING",[Yu]:"REINHARD_TONE_MAPPING",[$u]:"CINEON_TONE_MAPPING",[Ku]:"ACES_FILMIC_TONE_MAPPING",[Ju]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[Zu]:"CUSTOM_TONE_MAPPING"};function Jy(s,e,t,n,i,r){let o=new rn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ge;c.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ue([0,2,0,0,2,0],2));let u=new ol({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Fe(c,u),f=new Dn(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,y=[],M=!1;this.setSize=function(b,v){o.setSize(b,v),a!==null&&a.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<y.length;S++){let E=y[S];E.setSize&&E.setSize(b,v)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;let v=o.width,S=o.height;y.length>0&&a===null&&(a=new rn(v,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(v,S,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let _=y[E];_.setSize&&_.setSize(v,S)}},this.begin=function(b,v){if(x||b.toneMapping===qn&&y.length===0)return!1;if(p=v,v!==null){let S=v.width,E=v.height;(o.width!==S||o.height!==E)&&this.setSize(S,E)}return M===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=qn,!0},this.hasRenderPass=function(){return M},this.end=function(b,v){b.toneMapping=g,x=!0;let S=o,E=a;for(let _=0;_<y.length;_++){let w=y[_];w.enabled!==!1&&(w.render(b,E,S,v),w.needsSwap!==!1&&(S=E,E=E===a?l:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},Je.getTransfer(d)===dt&&(u.defines.SRGB_TRANSFER="");let _=Zy[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(h,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var pm=new Xt,Eh=new qi(1,1),mm=new lo,gm=new nl,xm=new po,Kp=[],Zp=[],Jp=new Float32Array(16),jp=new Float32Array(9),Qp=new Float32Array(4);function Dr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Kp[i];if(r===void 0&&(r=new Float32Array(i),Kp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function qt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function fc(s,e){let t=Zp[e];t===void 0&&(t=new Int32Array(e),Zp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2fv(this.addr,e),Yt(t,e)}}function ev(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;s.uniform3fv(this.addr,e),Yt(t,e)}}function tv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4fv(this.addr,e),Yt(t,e)}}function nv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Qp.set(n),s.uniformMatrix2fv(this.addr,!1,Qp),Yt(t,n)}}function iv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;jp.set(n),s.uniformMatrix3fv(this.addr,!1,jp),Yt(t,n)}}function sv(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Jp.set(n),s.uniformMatrix4fv(this.addr,!1,Jp),Yt(t,n)}}function rv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ov(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2iv(this.addr,e),Yt(t,e)}}function av(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3iv(this.addr,e),Yt(t,e)}}function lv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4iv(this.addr,e),Yt(t,e)}}function cv(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function uv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;s.uniform2uiv(this.addr,e),Yt(t,e)}}function hv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;s.uniform3uiv(this.addr,e),Yt(t,e)}}function fv(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;s.uniform4uiv(this.addr,e),Yt(t,e)}}function dv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Eh.compareFunction=t.isReversedDepthBuffer()?ac:oc,r=Eh):r=pm,t.setTexture2D(e||r,i)}function pv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||gm,i)}function mv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||xm,i)}function gv(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||mm,i)}function xv(s){switch(s){case 5126:return jy;case 35664:return Qy;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return uv;case 36295:return hv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function bv(s,e){s.uniform1fv(this.addr,e)}function _v(s,e){let t=Dr(e,this.size,2);s.uniform2fv(this.addr,t)}function yv(s,e){let t=Dr(e,this.size,3);s.uniform3fv(this.addr,t)}function vv(s,e){let t=Dr(e,this.size,4);s.uniform4fv(this.addr,t)}function Mv(s,e){let t=Dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Sv(s,e){let t=Dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function wv(s,e){let t=Dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tv(s,e){s.uniform1iv(this.addr,e)}function Av(s,e){s.uniform2iv(this.addr,e)}function Ev(s,e){s.uniform3iv(this.addr,e)}function Rv(s,e){s.uniform4iv(this.addr,e)}function Cv(s,e){s.uniform1uiv(this.addr,e)}function Iv(s,e){s.uniform2uiv(this.addr,e)}function Pv(s,e){s.uniform3uiv(this.addr,e)}function Lv(s,e){s.uniform4uiv(this.addr,e)}function Fv(s,e,t){let n=this.cache,i=e.length,r=fc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Eh:o=pm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Dv(s,e,t){let n=this.cache,i=e.length,r=fc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||gm,r[o])}function Nv(s,e,t){let n=this.cache,i=e.length,r=fc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||xm,r[o])}function Ov(s,e,t){let n=this.cache,i=e.length,r=fc(t,i);qt(n,r)||(s.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||mm,r[o])}function Uv(s){switch(s){case 5126:return bv;case 35664:return _v;case 35665:return yv;case 35666:return vv;case 35674:return Mv;case 35675:return Sv;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Ev;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Iv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Ov}}var Rh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}},Ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}},Ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Th=/(\w+)(\])?(\[|\.)?/g;function em(s,e){s.seq.push(e),s.map[e.id]=e}function Bv(s,e,t){let n=s.name,i=n.length;for(Th.lastIndex=0;;){let r=Th.exec(n),o=Th.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){em(t,c===void 0?new Rh(a,s,e):new Ch(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Ih(a),em(t,h)),t=h}}}var Pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Bv(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function tm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var kv=37297,zv=0;function Vv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var nm=new We;function Gv(s){Je._getMatrix(nm,Je.workingColorSpace,s);let e=`mat3( ${nm.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case oo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function im(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vv(s.getShaderSource(e),a)}else return r}function Hv(s,e){let t=Gv(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Wv={[qu]:"Linear",[Yu]:"Reinhard",[$u]:"Cineon",[Ku]:"ACESFilmic",[Ju]:"AgX",[ju]:"Neutral",[Zu]:"Custom"};function Xv(s,e){let t=Wv[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var cc=new z;function qv(){Je.getLuminanceCoefficients(cc);let s=cc.x.toFixed(4),e=cc.y.toFixed(4),t=cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function $v(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Kv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ho(s){return s!==""}function sm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(s){return s.replace(Zv,jv)}var Jv=new Map;function jv(s,e){let t=Ke[e];if(t===void 0){let n=Jv.get(e);if(n!==void 0)t=Ke[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ph(t)}var Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(s){return s.replace(Qv,eM)}function eM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function am(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var tM={[Io]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function nM(s){return tM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var iM={[Ki]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Lo]:"ENVMAP_TYPE_CUBE_UV"};function sM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":iM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var rM={[Es]:"ENVMAP_MODE_REFRACTION"};function oM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var aM={[_l]:"ENVMAP_BLENDING_MULTIPLY",[_p]:"ENVMAP_BLENDING_MIX",[yp]:"ENVMAP_BLENDING_ADD"};function lM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":aM[s.combine]||"ENVMAP_BLENDING_NONE"}function cM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function uM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=nM(t),c=sM(t),u=oM(t),h=lM(t),f=cM(t),d=Yv(t),m=$v(r),x=i.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),p.length>0&&(p+=`
`)):(g=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),p=[am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==qn?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Hv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),o=Ph(o),o=sm(o,t),o=rm(o,t),a=Ph(a),a=sm(a,t),a=rm(a,t),o=om(o),a=om(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+g+o,b=y+p+a,v=tm(i,i.VERTEX_SHADER,M),S=tm(i,i.FRAGMENT_SHADER,b);i.attachShader(x,v),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function E(T){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x)||"",I=i.getShaderInfoLog(v)||"",C=i.getShaderInfoLog(S)||"",F=L.trim(),N=I.trim(),U=C.trim(),V=!0,k=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,v,S);else{let B=im(i,v,"vertex"),H=im(i,S,"fragment");Ve("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+B+`
`+H)}else F!==""?Ie("WebGLProgram: Program Info Log:",F):(N===""||U==="")&&(k=!1);k&&(T.diagnostics={runnable:V,programLog:F,vertexShader:{log:N,prefix:g},fragmentShader:{log:U,prefix:p}})}i.deleteShader(v),i.deleteShader(S),_=new Pr(i,x),w=Kv(i,x)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(x,kv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=S,this}var hM=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fh(e),t.set(e,n)),n}},Fh=class{constructor(e){this.id=hM++,this.code=e,this.usedTimes=0}};function fM(s){return s===Ji||s===Uo||s===Bo}function dM(s,e,t,n,i,r){let o=new gr,a=new Lh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,R,T,L,I){let C=T.fog,F=L.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||N,U),k=V&&V.mapping===Lo?V.image.height:null,B=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ee=H!==void 0?H.length:0,Q=0;F.morphAttributes.position!==void 0&&(Q=1),F.morphAttributes.normal!==void 0&&(Q=2),F.morphAttributes.color!==void 0&&(Q=3);let ce,ue,Be,q;if(B){let At=hi[B];ce=At.vertexShader,ue=At.fragmentShader}else{ce=_.vertexShader,ue=_.fragmentShader;let At=a.getVertexShaderStage(_),ut=a.getFragmentShaderStage(_);a.update(_,At,ut),Be=At.id,q=ut.id}let Z=s.getRenderTarget(),ae=s.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,ge=L.isBatchedMesh===!0,ze=!!_.map,st=!!_.matcap,Ne=!!V,Ze=!!_.aoMap,ot=!!_.lightMap,je=!!_.bumpMap&&_.wireframe===!1,Ct=!!_.normalMap,Zt=!!_.displacementMap,mn=!!_.emissiveMap,It=!!_.metalnessMap,zt=!!_.roughnessMap,X=_.anisotropy>0,en=_.clearcoat>0,xt=_.dispersion>0,O=_.retroreflectivity>0,A=_.iridescence>0,Y=_.sheen>0,J=_.transmission>0,ne=X&&!!_.anisotropyMap,le=en&&!!_.clearcoatMap,he=en&&!!_.clearcoatNormalMap,ie=en&&!!_.clearcoatRoughnessMap,re=A&&!!_.iridescenceMap,fe=A&&!!_.iridescenceThicknessMap,Pe=Y&&!!_.sheenColorMap,xe=Y&&!!_.sheenRoughnessMap,de=!!_.specularMap,Le=!!_.specularColorMap,ke=!!_.specularIntensityMap,qe=J&&!!_.transmissionMap,W=J&&!!_.thicknessMap,pe=!!_.gradientMap,se=!!_.alphaMap,me=_.alphaTest>0,ve=!!_.alphaHash,oe=!!_.extensions,De=qn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(De=s.toneMapping);let Re={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:ue,defines:_.defines,customVertexShaderID:Be,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ge,batchingColor:ge&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:st,envMap:Ne,envMapMode:Ne&&V.mapping,envMapCubeUVHeight:k,aoMap:Ze,lightMap:ot,bumpMap:je,normalMap:Ct,displacementMap:Zt,emissiveMap:mn,normalMapObjectSpace:Ct&&_.normalMapType===wp,normalMapTangentSpace:Ct&&_.normalMapType===zo,packedNormalMap:Ct&&_.normalMapType===zo&&fM(_.normalMap.format),metalnessMap:It,roughnessMap:zt,anisotropy:X,anisotropyMap:ne,clearcoat:en,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:ie,dispersion:xt,retroreflection:O,iridescence:A,iridescenceMap:re,iridescenceThicknessMap:fe,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:de,specularColorMap:Le,specularIntensityMap:ke,transmission:J,transmissionMap:qe,thicknessMap:W,gradientMap:pe,opaque:_.transparent===!1&&_.blending===ci&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:me,alphaHash:ve,combine:_.combine,mapUv:ze&&m(_.map.channel),aoMapUv:Ze&&m(_.aoMap.channel),lightMapUv:ot&&m(_.lightMap.channel),bumpMapUv:je&&m(_.bumpMap.channel),normalMapUv:Ct&&m(_.normalMap.channel),displacementMapUv:Zt&&m(_.displacementMap.channel),emissiveMapUv:mn&&m(_.emissiveMap.channel),metalnessMapUv:It&&m(_.metalnessMap.channel),roughnessMapUv:zt&&m(_.roughnessMap.channel),anisotropyMapUv:ne&&m(_.anisotropyMap.channel),clearcoatMapUv:le&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(_.sheenRoughnessMap.channel),specularMapUv:de&&m(_.specularMap.channel),specularColorMapUv:Le&&m(_.specularColorMap.channel),specularIntensityMapUv:ke&&m(_.specularIntensityMap.channel),transmissionMapUv:qe&&m(_.transmissionMap.channel),thicknessMapUv:W&&m(_.thicknessMap.channel),alphaMapUv:se&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ct||X),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(ze||se),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&Ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Q,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:mn&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mt,flipSided:_.side===Qt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(w,_),y(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){let w=d[_.type],R;if(w){let T=hi[w];R=Gp.clone(T.uniforms)}else R=_.uniforms;return R}function b(_,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new uM(s,w,_,i),c.push(R),u.set(w,R)),R}function v(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function E(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:M,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:E}}function pM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function mM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function lm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,x,g,p){let y=s[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},s[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=g,y.group=p),e++,y}function l(f,d,m,x,g,p,y){y.reversedDepth===!0&&(g=-g);let M=a(f,d,m,x,g,p);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(f,d,m,x,g,p){let y=a(f,d,m,x,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||mM),n.length>1&&n.sort(d||lm),i.length>1&&i.sort(d||lm)}function h(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:h,sort:u}}function gM(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new cm,s.set(n,[o])):i>=r.length?(o=new cm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function xM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new z,color:new j};break;case"SpotLight":t={position:new z,direction:new z,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new j,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new j,groundColor:new j};break;case"RectAreaLight":t={color:new j,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function bM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var _M=0;function yM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function vM(s){let e=new xM,t=bM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,r=new Xe,o=new Xe;function a(c){let u=0,h=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,y=0,M=0,b=0,v=0,S=0,E=0,_=0,w=0,R=0;c.sort(yM);for(let L=0,I=c.length;L<I;L++){let C=c[L],F=C.color,N=C.intensity,U=C.distance,V=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ji?V=C.shadow.map.texture:V=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=F.r*N,h+=F.g*N,f+=F.b*N;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],N);R++}else if(C.isSunLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=V;let ee=B.getViewportCount();for(let Q=0;Q<ee;Q++)n.sunShadowMatrix[x+Q]=B.getMatrix(Q),n.sunShadowCascade[x+Q]=B._cascadeData[Q];x+=ee,m++}n.sun[d]=k,d++}else if(C.isDirectionalLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let B=C.shadow,H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.directionalShadow[g]=H,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=C.shadow.matrix,v++}n.directional[g]=k,g++}else if(C.isSpotLight){let k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(F).multiplyScalar(N),k.distance=U,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[y]=k;let B=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,B.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[y]=B.matrix,C.castShadow){let H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=V,E++}y++}else if(C.isRectAreaLight){let k=e.get(C);k.color.copy(F).multiplyScalar(N),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[M]=k,M++}else if(C.isPointLight){let k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let B=C.shadow,H=t.get(C);H.shadowIntensity=B.intensity,H.shadowBias=B.bias,H.shadowNormalBias=B.normalBias,H.shadowRadius=B.radius,H.shadowMapSize=B.mapSize,H.shadowCameraNear=B.camera.near,H.shadowCameraFar=B.camera.far,n.pointShadow[p]=H,n.pointShadowMap[p]=V,n.pointShadowMatrix[p]=C.shadow.matrix,S++}n.point[p]=k,p++}else if(C.isHemisphereLight){let k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(N),k.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[b]=k,b++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let T=n.hash;(T.sunLength!==d||T.directionalLength!==g||T.pointLength!==p||T.spotLength!==y||T.rectAreaLength!==M||T.hemiLength!==b||T.numSunShadows!==m||T.numDirectionalShadows!==v||T.numPointShadows!==S||T.numSpotShadows!==E||T.numSpotMaps!==_||T.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=y,n.rectArea.length=M,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,T.sunLength=d,T.directionalLength=g,T.pointLength=p,T.spotLength=y,T.rectAreaLength=M,T.hemiLength=b,T.numSunShadows=m,T.numDirectionalShadows=v,T.numPointShadows=S,T.numSpotShadows=E,T.numSpotMaps=_,T.numLightProbes=R,n.version=_M++)}function l(c,u){let h=0,f=0,d=0,m=0,x=0,g=0,p=u.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let b=c[y];if(b.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),f++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function um(s){let e=new vM(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function MM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new um(s),e.set(i,[a])):r>=o.length?(a=new um(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`,TM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],AM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],hm=new Xe,Go=new z,Ah=new z;function EM(s,e,t){let n=new yr,i=new Oe,r=new Oe,o=new _t,a=new al,l=new ll,c={},u=t.maxTextureSize,h={[ai]:Qt,[Qt]:ai,[Mt]:Mt},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:SM,fragmentShader:wM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let p=this.type;this.render=function(S,E,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===ep&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Io);let w=s.getRenderTarget(),R=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),L=s.state;L.setBlending(li),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==this.type;I&&E.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(F=>F.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,F=S.length;C<F;C++){let N=S[C],U=N.shadow;if(U===void 0){Ie("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();i.multiply(V),r.copy(U.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/V.y),i.y=r.y*V.y,U.mapSize.y=r.y));let k=s.state.buffers.depth.getReversed();if(U.camera._reversedDepth=k,U.map===null||I===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===wr){if(N.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new rn(i.x,i.y,{format:Ji,type:Kn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new qi(i.x,i.y,Cn),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=ti,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nt,U.map.depthTexture.magFilter=Nt}else N.isPointLight?(U.map=new uc(i.x),U.map.depthTexture=new rl(i.x,$n)):(U.map=new rn(i.x,i.y),U.map.depthTexture=new qi(i.x,i.y,$n)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=ti,this.type===Io?(U.map.depthTexture.compareFunction=k?ac:oc,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Nt,U.map.depthTexture.magFilter=Nt);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==i.x||U.map.height!==i.y)&&U.map.setSize(i.x,i.y);let B=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,_);for(let H=0;H<B;H++){let ee=U.getCamera(H);if(N.isPointLight){let Q=U.camera,ce=U.matrix,ue=N.distance||Q.far;ue!==Q.far&&(Q.far=ue,Q.updateProjectionMatrix()),Go.setFromMatrixPosition(N.matrixWorld),Q.position.copy(Go),Ah.copy(Q.position),Ah.add(TM[H]),Q.up.copy(AM[H]),Q.lookAt(Ah),Q.updateMatrixWorld(),ce.makeTranslation(-Go.x,-Go.y,-Go.z),hm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),U._frustum.setFromProjectionMatrix(hm,Q.coordinateSystem,Q.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)s.setRenderTarget(U.map,H),s.clear();else{H===0&&(s.setRenderTarget(U.map),s.clear());let Q=U.getViewport(H);o.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),L.viewport(o)}n=U.getFrustum(H),b(E,_,ee,N,this.type)}U.isPointLightShadow!==!0&&this.type===wr&&y(U,_),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,R,T)};function y(S,E){let _=e.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new rn(i.x,i.y,{format:Ji,type:Kn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(E,null,_,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(E,null,_,d,x,null)}function M(S,E,_,w){let R=null,T=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)R=T;else if(R=_.isPointLight===!0?l:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=R.uuid,I=E.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let F=C[I];F===void 0&&(F=R.clone(),C[I]=F,E.addEventListener("dispose",v)),R=F}if(R.visible=E.visible,R.wireframe=E.wireframe,w===wr?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:h[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=s.properties.get(R);L.light=_}return R}function b(S,E,_,w,R){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===wr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let I=e.update(S),C=S.material;if(Array.isArray(C)){let F=I.groups;for(let N=0,U=F.length;N<U;N++){let V=F[N],k=C[V.materialIndex];if(k&&k.visible){let B=M(S,k,w,R);S.onBeforeShadow(s,S,E,_,I,B,V),s.renderBufferDirect(_,null,I,B,S,V),S.onAfterShadow(s,S,E,_,I,B,V)}}}else if(C.visible){let F=M(S,C,w,R);S.onBeforeShadow(s,S,E,_,I,F,null),s.renderBufferDirect(_,null,I,F,S,null),S.onAfterShadow(s,S,E,_,I,F,null)}}let L=S.children;for(let I=0,C=L.length;I<C;I++)b(L[I],E,_,w,R)}function v(S){S.target.removeEventListener("dispose",v);for(let _ in c){let w=c[_],R=S.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function RM(s,e){function t(){let W=!1,pe=new _t,se=null,me=new _t(0,0,0,0);return{setMask:function(ve){se!==ve&&!W&&(s.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){W=ve},setClear:function(ve,oe,De,Re,At){At===!0&&(ve*=Re,oe*=Re,De*=Re),pe.set(ve,oe,De,Re),me.equals(pe)===!1&&(s.clearColor(ve,oe,De,Re),me.copy(pe))},reset:function(){W=!1,se=null,me.set(-1,0,0,0)}}}function n(){let W=!1,pe=!1,se=null,me=null,ve=null;return{setReversed:function(oe){if(pe!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),pe=oe;let Re=ve;ve=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(oe){oe?Z(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(oe){se!==oe&&!W&&(s.depthMask(oe),se=oe)},setFunc:function(oe){if(pe&&(oe=Np[oe]),me!==oe){switch(oe){case Ya:s.depthFunc(s.NEVER);break;case $a:s.depthFunc(s.ALWAYS);break;case Ka:s.depthFunc(s.LESS);break;case ur:s.depthFunc(s.LEQUAL);break;case Za:s.depthFunc(s.EQUAL);break;case Ja:s.depthFunc(s.GEQUAL);break;case ja:s.depthFunc(s.GREATER);break;case Qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=oe}},setLocked:function(oe){W=oe},setClear:function(oe){ve!==oe&&(ve=oe,pe&&(oe=1-oe),s.clearDepth(oe))},reset:function(){W=!1,se=null,me=null,ve=null,pe=!1}}}function i(){let W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,At=null;return{setTest:function(ut){W||(ut?Z(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(ut){pe!==ut&&!W&&(s.stencilMask(ut),pe=ut)},setFunc:function(ut,Un,Jn){(se!==ut||me!==Un||ve!==Jn)&&(s.stencilFunc(ut,Un,Jn),se=ut,me=Un,ve=Jn)},setOp:function(ut,Un,Jn){(oe!==ut||De!==Un||Re!==Jn)&&(s.stencilOp(ut,Un,Jn),oe=ut,De=Un,Re=Jn)},setLocked:function(ut){W=ut},setClear:function(ut){At!==ut&&(s.clearStencil(ut),At=ut)},reset:function(){W=!1,pe=null,se=null,me=null,ve=null,oe=null,De=null,Re=null,At=null}}}let r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,M=null,b=null,v=null,S=null,E=null,_=new j(0,0,0),w=0,R=!1,T=null,L=null,I=null,C=null,F=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=V>=2);let B=null,H={},ee=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),ce=new _t().fromArray(ee),ue=new _t().fromArray(Q);function Be(W,pe,se,me){let ve=new Uint8Array(4),oe=s.createTexture();s.bindTexture(W,oe),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<se;De++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(pe+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return oe}let q={};q[s.TEXTURE_2D]=Be(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=Be(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=Be(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=Be(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(ur),je(!1),Ct(Gu),Z(s.CULL_FACE),Ze(li);function Z(W){u[W]!==!0&&(s.enable(W),u[W]=!0)}function ae(W){u[W]!==!1&&(s.disable(W),u[W]=!1)}function we(W,pe){return f[W]!==pe?(s.bindFramebuffer(W,pe),f[W]=pe,W===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=pe),W===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function ge(W,pe){let se=m,me=!1;if(W){se=d.get(pe),se===void 0&&(se=[],d.set(pe,se));let ve=W.textures;if(se.length!==ve.length||se[0]!==s.COLOR_ATTACHMENT0){for(let oe=0,De=ve.length;oe<De;oe++)se[oe]=s.COLOR_ATTACHMENT0+oe;se.length=ve.length,me=!0}}else se[0]!==s.BACK&&(se[0]=s.BACK,me=!0);me&&s.drawBuffers(se)}function ze(W){return x!==W?(s.useProgram(W),x=W,!0):!1}let st={[As]:s.FUNC_ADD,[np]:s.FUNC_SUBTRACT,[ip]:s.FUNC_REVERSE_SUBTRACT};st[sp]=s.MIN,st[rp]=s.MAX;let Ne={[op]:s.ZERO,[ap]:s.ONE,[lp]:s.SRC_COLOR,[Wu]:s.SRC_ALPHA,[pp]:s.SRC_ALPHA_SATURATE,[fp]:s.DST_COLOR,[up]:s.DST_ALPHA,[cp]:s.ONE_MINUS_SRC_COLOR,[Xu]:s.ONE_MINUS_SRC_ALPHA,[dp]:s.ONE_MINUS_DST_COLOR,[hp]:s.ONE_MINUS_DST_ALPHA,[mp]:s.CONSTANT_COLOR,[gp]:s.ONE_MINUS_CONSTANT_COLOR,[xp]:s.CONSTANT_ALPHA,[bp]:s.ONE_MINUS_CONSTANT_ALPHA};function Ze(W,pe,se,me,ve,oe,De,Re,At,ut){if(W===li){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&(Z(s.BLEND),g=!0),W!==tp){if(W!==p||ut!==R){if((y!==As||v!==As)&&(s.blendEquation(s.FUNC_ADD),y=As,v=As),ut)switch(W){case ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pt:s.blendFunc(s.ONE,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Po:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",W);break}else switch(W){case ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Po:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",W);break}M=null,b=null,S=null,E=null,_.set(0,0,0),w=0,p=W,R=ut}return}ve=ve||pe,oe=oe||se,De=De||me,(pe!==y||ve!==v)&&(s.blendEquationSeparate(st[pe],st[ve]),y=pe,v=ve),(se!==M||me!==b||oe!==S||De!==E)&&(s.blendFuncSeparate(Ne[se],Ne[me],Ne[oe],Ne[De]),M=se,b=me,S=oe,E=De),(Re.equals(_)===!1||At!==w)&&(s.blendColor(Re.r,Re.g,Re.b,At),_.copy(Re),w=At),p=W,R=!1}function ot(W,pe){W.side===Mt?ae(s.CULL_FACE):Z(s.CULL_FACE);let se=W.side===Qt;pe&&(se=!se),je(se),W.blending===ci&&W.transparent===!1?Ze(li):Ze(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let me=W.stencilWrite;a.setTest(me),me&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),mn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function je(W){T!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),T=W)}function Ct(W){W!==jd?(Z(s.CULL_FACE),W!==L&&(W===Gu?s.cullFace(s.BACK):W===Qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),L=W}function Zt(W){W!==I&&(U&&s.lineWidth(W),I=W)}function mn(W,pe,se){W?(Z(s.POLYGON_OFFSET_FILL),(C!==pe||F!==se)&&(C=pe,F=se,o.getReversed()&&(pe=-pe),s.polygonOffset(pe,se))):ae(s.POLYGON_OFFSET_FILL)}function It(W){W?Z(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function zt(W){W===void 0&&(W=s.TEXTURE0+N-1),B!==W&&(s.activeTexture(W),B=W)}function X(W,pe,se){se===void 0&&(B===null?se=s.TEXTURE0+N-1:se=B);let me=H[se];me===void 0&&(me={type:void 0,texture:void 0},H[se]=me),(me.type!==W||me.texture!==pe)&&(B!==se&&(s.activeTexture(se),B=se),s.bindTexture(W,pe||q[W]),me.type=W,me.texture=pe)}function en(){let W=H[B];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function xt(){try{s.compressedTexImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function O(){try{s.compressedTexImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function A(){try{s.texSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function Y(){try{s.texSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function J(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ne(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function le(){try{s.texStorage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function he(){try{s.texStorage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function ie(){try{s.texImage2D(...arguments)}catch(W){Ve("WebGLState:",W)}}function re(){try{s.texImage3D(...arguments)}catch(W){Ve("WebGLState:",W)}}function fe(W){return h[W]!==void 0?h[W]:s.getParameter(W)}function Pe(W,pe){h[W]!==pe&&(s.pixelStorei(W,pe),h[W]=pe)}function xe(W){ce.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ce.copy(W))}function de(W){ue.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ue.copy(W))}function Le(W,pe){let se=c.get(pe);se===void 0&&(se=new WeakMap,c.set(pe,se));let me=se.get(W);me===void 0&&(me=s.getUniformBlockIndex(pe,W.name),se.set(W,me))}function ke(W,pe){let me=c.get(pe).get(W);l.get(pe)!==me&&(s.uniformBlockBinding(pe,me,W.__bindingPointIndex),l.set(pe,me))}function qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,H={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,y=null,M=null,b=null,v=null,S=null,E=null,_=new j(0,0,0),w=0,R=!1,T=null,L=null,I=null,C=null,F=null,ce.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ae,bindFramebuffer:we,drawBuffers:ge,useProgram:ze,setBlending:Ze,setMaterial:ot,setFlipSided:je,setCullFace:Ct,setLineWidth:Zt,setPolygonOffset:mn,setScissorTest:It,activeTexture:zt,bindTexture:X,unbindTexture:en,compressedTexImage2D:xt,compressedTexImage3D:O,texImage2D:ie,texImage3D:re,pixelStorei:Pe,getParameter:fe,updateUBOMapping:Le,uniformBlockBinding:ke,texStorage2D:le,texStorage3D:he,texSubImage2D:A,texSubImage3D:Y,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:xe,viewport:de,reset:qe}}function CM(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,A){return m?new OffscreenCanvas(O,A):dr("canvas")}function g(O,A,Y){let J=1,ne=xt(O);if((ne.width>Y||ne.height>Y)&&(J=Y/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let le=Math.floor(J*ne.width),he=Math.floor(J*ne.height);f===void 0&&(f=x(le,he));let ie=A?x(le,he):f;return ie.width=le,ie.height=he,ie.getContext("2d").drawImage(O,0,0,le,he),Ie("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+le+"x"+he+")."),ie}else return"data"in O&&Ie("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),O;return O}function p(O){return O.generateMipmaps}function y(O){s.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(O,A,Y,J,ne,le=!1){if(O!==null){if(s[O]!==void 0)return s[O];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let he;J&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=A;if(A===s.RED&&(Y===s.FLOAT&&(ie=s.R32F),Y===s.HALF_FLOAT&&(ie=s.R16F),Y===s.UNSIGNED_BYTE&&(ie=s.R8),Y===s.UNSIGNED_SHORT&&he&&(ie=he.R16_EXT),Y===s.SHORT&&he&&(ie=he.R16_SNORM_EXT)),A===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.R8UI),Y===s.UNSIGNED_SHORT&&(ie=s.R16UI),Y===s.UNSIGNED_INT&&(ie=s.R32UI),Y===s.BYTE&&(ie=s.R8I),Y===s.SHORT&&(ie=s.R16I),Y===s.INT&&(ie=s.R32I)),A===s.RG&&(Y===s.FLOAT&&(ie=s.RG32F),Y===s.HALF_FLOAT&&(ie=s.RG16F),Y===s.UNSIGNED_BYTE&&(ie=s.RG8),Y===s.UNSIGNED_SHORT&&he&&(ie=he.RG16_EXT),Y===s.SHORT&&he&&(ie=he.RG16_SNORM_EXT)),A===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RG8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RG16UI),Y===s.UNSIGNED_INT&&(ie=s.RG32UI),Y===s.BYTE&&(ie=s.RG8I),Y===s.SHORT&&(ie=s.RG16I),Y===s.INT&&(ie=s.RG32I)),A===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),Y===s.UNSIGNED_INT&&(ie=s.RGB32UI),Y===s.BYTE&&(ie=s.RGB8I),Y===s.SHORT&&(ie=s.RGB16I),Y===s.INT&&(ie=s.RGB32I)),A===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),Y===s.UNSIGNED_INT&&(ie=s.RGBA32UI),Y===s.BYTE&&(ie=s.RGBA8I),Y===s.SHORT&&(ie=s.RGBA16I),Y===s.INT&&(ie=s.RGBA32I)),A===s.RGB&&(Y===s.UNSIGNED_SHORT&&he&&(ie=he.RGB16_EXT),Y===s.SHORT&&he&&(ie=he.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(ie=s.R11F_G11F_B10F)),A===s.RGBA){let re=le?oo:Je.getTransfer(ne);Y===s.FLOAT&&(ie=s.RGBA32F),Y===s.HALF_FLOAT&&(ie=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ie=re===dt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&he&&(ie=he.RGBA16_EXT),Y===s.SHORT&&he&&(ie=he.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(O,A){let Y;return O?A===null||A===$n||A===Er?Y=s.DEPTH24_STENCIL8:A===Cn?Y=s.DEPTH32F_STENCIL8:A===Ar&&(Y=s.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$n||A===Er?Y=s.DEPTH_COMPONENT24:A===Cn?Y=s.DEPTH_COMPONENT32F:A===Ar&&(Y=s.DEPTH_COMPONENT16),Y}function S(O,A){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==Nt&&O.minFilter!==Ot?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function E(O){let A=O.target;A.removeEventListener("dispose",E),w(A),A.isVideoTexture&&u.delete(A),A.isHTMLTexture&&h.delete(A)}function _(O){let A=O.target;A.removeEventListener("dispose",_),T(A)}function w(O){let A=n.get(O);if(A.__webglInit===void 0)return;let Y=O.source,J=d.get(Y);if(J){let ne=J[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(O),Object.keys(J).length===0&&d.delete(Y)}n.remove(O)}function R(O){let A=n.get(O);s.deleteTexture(A.__webglTexture);let Y=O.source,J=d.get(Y);delete J[A.__cacheKey],o.memory.textures--}function T(O){let A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let ne=0;ne<A.__webglFramebuffer[J].length;ne++)s.deleteFramebuffer(A.__webglFramebuffer[J][ne]);else s.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)s.deleteFramebuffer(A.__webglFramebuffer[J]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Y=O.textures;for(let J=0,ne=Y.length;J<ne;J++){let le=n.get(Y[J]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(Y[J])}n.remove(O)}let L=0;function I(){L=0}function C(){return L}function F(O){L=O}function N(){let O=L;return O>=i.maxTextures&&Ie("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,O}function U(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function V(O,A){let Y=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){let J=O.image;if(J===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(Y,O,A);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+A)}function k(O,A){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ae(Y,O,A);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+A)}function B(O,A){let Y=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){ae(Y,O,A);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+A)}function H(O,A){let Y=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){we(Y,O,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+A)}let ee={[Xn]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[hr]:s.MIRRORED_REPEAT},Q={[Nt]:s.NEAREST,[Ml]:s.NEAREST_MIPMAP_NEAREST,[Rs]:s.NEAREST_MIPMAP_LINEAR,[Ot]:s.LINEAR,[Tr]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},ce={[Ap]:s.NEVER,[Pp]:s.ALWAYS,[Ep]:s.LESS,[oc]:s.LEQUAL,[Rp]:s.EQUAL,[ac]:s.GEQUAL,[Cp]:s.GREATER,[Ip]:s.NOTEQUAL};function ue(O,A){if(A.type===Cn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ot||A.magFilter===Tr||A.magFilter===Rs||A.magFilter===Yn||A.minFilter===Ot||A.minFilter===Tr||A.minFilter===Rs||A.minFilter===Yn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,ee[A.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,ee[A.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,ee[A.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,Q[A.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,Q[A.minFilter]),A.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,ce[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Nt||A.minFilter!==Rs&&A.minFilter!==Yn||A.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Be(O,A){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",E));let J=A.source,ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));let le=U(A);if(le!==O.__cacheKey){ne[le]===void 0&&(ne[le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ne[le].usedTimes++;let he=ne[O.__cacheKey];he!==void 0&&(ne[O.__cacheKey].usedTimes--,he.usedTimes===0&&R(A)),O.__cacheKey=le,O.__webglTexture=ne[le].texture}return Y}function q(O,A,Y){return Math.floor(Math.floor(O/Y)/A)}function Z(O,A,Y,J){let le=O.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,Y,J,A.data);else{le.sort((Pe,xe)=>Pe.start-xe.start);let he=0;for(let Pe=1;Pe<le.length;Pe++){let xe=le[he],de=le[Pe],Le=xe.start+xe.count,ke=q(de.start,A.width,4),qe=q(xe.start,A.width,4);de.start<=Le+1&&ke===qe&&q(de.start+de.count-1,A.width,4)===ke?xe.count=Math.max(xe.count,de.start+de.count-xe.start):(++he,le[he]=de)}le.length=he+1;let ie=t.getParameter(s.UNPACK_ROW_LENGTH),re=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Pe=0,xe=le.length;Pe<xe;Pe++){let de=le[Pe],Le=Math.floor(de.start/4),ke=Math.ceil(de.count/4),qe=Le%A.width,W=Math.floor(Le/A.width),pe=ke,se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,qe,W,pe,se,Y,J,A.data)}O.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ie),t.pixelStorei(s.UNPACK_SKIP_PIXELS,re),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function ae(O,A,Y){let J=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=s.TEXTURE_3D);let ne=Be(O,A),le=A.source;t.bindTexture(J,O.__webglTexture,s.TEXTURE0+Y);let he=n.get(le);if(le.version!==he.__version||ne===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let se=Je.getPrimaries(Je.workingColorSpace),me=A.colorSpace===Pi?null:Je.getPrimaries(A.colorSpace),ve=A.colorSpace===Pi||se===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment);let re=g(A.image,!1,i.maxTextureSize);re=en(A,re);let fe=r.convert(A.format,A.colorSpace),Pe=r.convert(A.type),xe=b(A.internalFormat,fe,Pe,A.normalized,A.colorSpace,A.isVideoTexture);ue(J,A);let de,Le=A.mipmaps,ke=A.isVideoTexture!==!0,qe=he.__version===void 0||ne===!0,W=le.dataReady,pe=S(A,re);if(A.isDepthTexture)xe=v(A.format===Zi,A.type),qe&&(ke?t.texStorage2D(s.TEXTURE_2D,1,xe,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Pe,null));else if(A.isDataTexture)if(Le.length>0){ke&&qe&&t.texStorage2D(s.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],ke?W&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,xe,de.width,de.height,0,fe,Pe,de.data);A.generateMipmaps=!1}else ke?(qe&&t.texStorage2D(s.TEXTURE_2D,pe,xe,re.width,re.height),W&&Z(A,re,fe,Pe)):t.texImage2D(s.TEXTURE_2D,0,xe,re.width,re.height,0,fe,Pe,re.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ke&&qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,xe,Le[0].width,Le[0].height,re.depth);for(let se=0,me=Le.length;se<me;se++)if(de=Le[se],A.format!==In)if(fe!==null)if(ke){if(W)if(A.layerUpdates.size>0){let ve=mh(de.width,de.height,A.format,A.type);for(let oe of A.layerUpdates){let De=de.data.subarray(oe*ve/de.data.BYTES_PER_ELEMENT,(oe+1)*ve/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,oe,de.width,de.height,1,fe,De)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,xe,de.width,de.height,re.depth,0,de.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,re.depth,fe,Pe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,xe,de.width,de.height,re.depth,0,fe,Pe,de.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{ke&&qe&&t.texStorage2D(s.TEXTURE_2D,pe,xe,Le[0].width,Le[0].height);for(let se=0,me=Le.length;se<me;se++)de=Le[se],A.format!==In?fe!==null?ke?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,fe,de.data):t.compressedTexImage2D(s.TEXTURE_2D,se,xe,de.width,de.height,0,de.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?W&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,de.width,de.height,fe,Pe,de.data):t.texImage2D(s.TEXTURE_2D,se,xe,de.width,de.height,0,fe,Pe,de.data)}else if(A.isDataArrayTexture)if(ke){if(qe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,xe,re.width,re.height,re.depth),W)if(A.layerUpdates.size>0){let se=mh(re.width,re.height,A.format,A.type);for(let me of A.layerUpdates){let ve=re.data.subarray(me*se/re.data.BYTES_PER_ELEMENT,(me+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,re.width,re.height,1,fe,Pe,ve)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(A.isData3DTexture)ke?(qe&&t.texStorage3D(s.TEXTURE_3D,pe,xe,re.width,re.height,re.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,fe,Pe,re.data)):t.texImage3D(s.TEXTURE_3D,0,xe,re.width,re.height,re.depth,0,fe,Pe,re.data);else if(A.isFramebufferTexture){if(qe)if(ke)t.texStorage2D(s.TEXTURE_2D,pe,xe,re.width,re.height);else{let se=re.width,me=re.height;for(let ve=0;ve<pe;ve++)t.texImage2D(s.TEXTURE_2D,ve,xe,se,me,0,fe,Pe,null),se>>=1,me>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in s){let se=s.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),h.add(A),se.onpaint=me=>{let ve=me.changedElements;for(let oe of h)ve.includes(oe.image)&&(oe.needsUpdate=!0)},se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,re);else{let ve=s.RGBA,oe=s.RGBA,De=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ve,oe,De,re)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Le.length>0){if(ke&&qe){let se=xt(Le[0]);t.texStorage2D(s.TEXTURE_2D,pe,xe,se.width,se.height)}for(let se=0,me=Le.length;se<me;se++)de=Le[se],ke?W&&t.texSubImage2D(s.TEXTURE_2D,se,0,0,fe,Pe,de):t.texImage2D(s.TEXTURE_2D,se,xe,fe,Pe,de);A.generateMipmaps=!1}else if(ke){if(qe){let se=xt(re);t.texStorage2D(s.TEXTURE_2D,pe,xe,se.width,se.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Pe,re)}else t.texImage2D(s.TEXTURE_2D,0,xe,fe,Pe,re);p(A)&&y(J),he.__version=le.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function we(O,A,Y){if(A.image.length!==6)return;let J=Be(O,A),ne=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+Y);let le=n.get(ne);if(ne.version!==le.__version||J===!0){t.activeTexture(s.TEXTURE0+Y);let he=Je.getPrimaries(Je.workingColorSpace),ie=A.colorSpace===Pi?null:Je.getPrimaries(A.colorSpace),re=A.colorSpace===Pi||he===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let fe=A.isCompressedTexture||A.image[0].isCompressedTexture,Pe=A.image[0]&&A.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!fe&&!Pe?xe[oe]=g(A.image[oe],!0,i.maxCubemapSize):xe[oe]=Pe?A.image[oe].image:A.image[oe],xe[oe]=en(A,xe[oe]);let de=xe[0],Le=r.convert(A.format,A.colorSpace),ke=r.convert(A.type),qe=b(A.internalFormat,Le,ke,A.normalized,A.colorSpace),W=A.isVideoTexture!==!0,pe=le.__version===void 0||J===!0,se=ne.dataReady,me=S(A,de);ue(s.TEXTURE_CUBE_MAP,A);let ve;if(fe){W&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,qe,de.width,de.height);for(let oe=0;oe<6;oe++){ve=xe[oe].mipmaps;for(let De=0;De<ve.length;De++){let Re=ve[De];A.format!==In?Le!==null?W?se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Re.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Re.width,Re.height,Le,ke,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,qe,Re.width,Re.height,0,Le,ke,Re.data)}}}else{if(ve=A.mipmaps,W&&pe){ve.length>0&&me++;let oe=xt(xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Pe){W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Le,ke,xe[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,xe[oe].width,xe[oe].height,0,Le,ke,xe[oe].data);for(let De=0;De<ve.length;De++){let At=ve[De].image[oe].image;W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,At.width,At.height,Le,ke,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,At.width,At.height,0,Le,ke,At.data)}}else{W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,ke,xe[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,qe,Le,ke,xe[oe]);for(let De=0;De<ve.length;De++){let Re=ve[De];W?se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Le,ke,Re.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,qe,Le,ke,Re.image[oe])}}}p(A)&&y(s.TEXTURE_CUBE_MAP),le.__version=ne.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ge(O,A,Y,J,ne,le){let he=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),re=b(Y.internalFormat,he,ie,Y.normalized,Y.colorSpace),fe=n.get(A),Pe=n.get(Y);if(Pe.__renderTarget=A,!fe.__hasExternalTextures){let xe=Math.max(1,A.width>>le),de=Math.max(1,A.height>>le);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,le,re,xe,de,A.depth,0,he,ie,null):t.texImage2D(ne,le,re,xe,de,0,he,ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),zt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,ne,Pe.__webglTexture,0,It(A)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,ne,Pe.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(O,A,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,O),A.depthBuffer){let J=A.depthTexture,ne=J&&J.isDepthTexture?J.type:null,le=v(A.stencilBuffer,ne),he=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;zt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(A),le,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(A),le,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,le,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,O)}else{let J=A.textures;for(let ne=0;ne<J.length;ne++){let le=J[ne],he=r.convert(le.format,le.colorSpace),ie=r.convert(le.type),re=b(le.internalFormat,he,ie,le.normalized,le.colorSpace);zt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(A),re,A.width,A.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(A),re,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,re,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(O,A,Y){let J=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(A.depthTexture);if(ne.__renderTarget=A,(!ne.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,A.depthTexture.addEventListener("dispose",E)),ne.__webglTexture===void 0){ne.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),ue(s.TEXTURE_CUBE_MAP,A.depthTexture);let fe=r.convert(A.depthTexture.format),Pe=r.convert(A.depthTexture.type),xe;A.depthTexture.format===ti?xe=s.DEPTH_COMPONENT24:A.depthTexture.format===Zi&&(xe=s.DEPTH24_STENCIL8);for(let de=0;de<6;de++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,xe,A.width,A.height,0,fe,Pe,null)}}else V(A.depthTexture,0);let le=ne.__webglTexture,he=It(A),ie=J?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,re=A.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(A.depthTexture.format===ti)zt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,le,0);else if(A.depthTexture.format===Zi)zt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,le,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(O){let A=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let J=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){let ne=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),A.__depthDisposeCallback=ne}A.__boundDepthTexture=J}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let J=0;J<6;J++)st(A.__webglFramebuffer[J],O,J);else{let J=O.texture.mipmaps;J&&J.length>0?st(A.__webglFramebuffer[0],O,0):st(A.__webglFramebuffer,O,0)}else if(Y){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=s.createRenderbuffer(),ze(A.__webglDepthbuffer[J],O,!1);else{let ne=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,le)}}else{let J=O.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ze(A.__webglDepthbuffer,O,!1);else{let ne=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ze(O,A,Y){let J=n.get(O);A!==void 0&&ge(J.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Ne(O)}function ot(O){let A=O.texture,Y=n.get(O),J=n.get(A);O.addEventListener("dispose",_);let ne=O.textures,le=O.isWebGLCubeRenderTarget===!0,he=ne.length>1;if(he||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=A.version,o.memory.textures++),le){Y.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[ie]=[];for(let re=0;re<A.mipmaps.length;re++)Y.__webglFramebuffer[ie][re]=s.createFramebuffer()}else Y.__webglFramebuffer[ie]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ie=0;ie<A.mipmaps.length;ie++)Y.__webglFramebuffer[ie]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(he)for(let ie=0,re=ne.length;ie<re;ie++){let fe=n.get(ne[ie]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(O.samples>0&&zt(O)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ie=0;ie<ne.length;ie++){let re=ne[ie];Y.__webglColorRenderbuffer[ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[ie]);let fe=r.convert(re.format,re.colorSpace),Pe=r.convert(re.type),xe=b(re.internalFormat,fe,Pe,re.normalized,re.colorSpace,O.isXRRenderTarget===!0),de=It(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,de,xe,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ie,s.RENDERBUFFER,Y.__webglColorRenderbuffer[ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ze(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),ue(s.TEXTURE_CUBE_MAP,A);for(let ie=0;ie<6;ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)ge(Y.__webglFramebuffer[ie][re],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,re);else ge(Y.__webglFramebuffer[ie],O,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(A)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ie=0,re=ne.length;ie<re;ie++){let fe=ne[ie],Pe=n.get(fe),xe=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(xe=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),ue(xe,fe),ge(Y.__webglFramebuffer,O,fe,s.COLOR_ATTACHMENT0+ie,xe,0),p(fe)&&y(xe)}t.unbindTexture()}else{let ie=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ie=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,J.__webglTexture),ue(ie,A),A.mipmaps&&A.mipmaps.length>0)for(let re=0;re<A.mipmaps.length;re++)ge(Y.__webglFramebuffer[re],O,A,s.COLOR_ATTACHMENT0,ie,re);else ge(Y.__webglFramebuffer,O,A,s.COLOR_ATTACHMENT0,ie,0);p(A)&&y(ie),t.unbindTexture()}O.depthBuffer&&Ne(O)}function je(O){let A=O.textures;for(let Y=0,J=A.length;Y<J;Y++){let ne=A[Y];if(p(ne)){let le=M(O),he=n.get(ne).__webglTexture;t.bindTexture(le,he),y(le),t.unbindTexture()}}}let Ct=[],Zt=[];function mn(O){if(O.samples>0){if(zt(O)===!1){let A=O.textures,Y=O.width,J=O.height,ne=s.COLOR_BUFFER_BIT,le=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(O),ie=A.length>1;if(ie)for(let fe=0;fe<A.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);let re=O.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<A.length;fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(A[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,Y,J,0,0,Y,J,ne,s.NEAREST),l===!0&&(Ct.length=0,Zt.length=0,Ct.push(s.COLOR_ATTACHMENT0+fe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Ct.push(le),Zt.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ie)for(let fe=0;fe<A.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);let Pe=n.get(A[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let A=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function It(O){return Math.min(i.maxSamples,O.samples)}function zt(O){let A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(O){let A=o.render.frame;u.get(O)!==A&&(u.set(O,A),O.update())}function en(O,A){let Y=O.colorSpace,J=O.format,ne=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==dn&&Y!==Pi&&(Je.getTransfer(Y)===dt?(J!==In||ne!==vn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",Y)),A}function xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.getTextureUnits=C,this.setTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=B,this.setTextureCube=H,this.rebindTextures=Ze,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IM(s,e){function t(n,i=Pi){let r,o=Je.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===wl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return s.BYTE;if(n===th)return s.SHORT;if(n===Ar)return s.UNSIGNED_SHORT;if(n===Sl)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Kn)return s.HALF_FLOAT;if(n===sh)return s.ALPHA;if(n===rh)return s.RGB;if(n===In)return s.RGBA;if(n===ti)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===Al)return s.RED;if(n===El)return s.RED_INTEGER;if(n===Ji)return s.RG;if(n===Rl)return s.RG_INTEGER;if(n===Cl)return s.RGBA_INTEGER;if(n===Fo||n===Do||n===No||n===Oo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Il||n===Pl||n===Ll||n===Fl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Ol||n===Ul||n===Bl||n===Uo||n===kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Nl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ol)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return r.COMPRESSED_R11_EAC;if(n===Bl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Uo)return r.COMPRESSED_RG11_EAC;if(n===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===Zl||n===Jl||n===jl||n===Ql)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===tc||n===nc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ec)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ic||n===sc||n===Bo||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ic)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LM=`
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

}`,Dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new mo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Rn({vertexShader:PM,fragmentShader:LM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nh=class extends ni{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new Dh,p={},y=t.getContextAttributes(),M=null,b=null,v=[],S=[],E=new Oe,_=null,w=null,R=new Ht;R.viewport=new _t;let T=new Ht;T.viewport=new _t;let L=[R,T],I=new xl,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=v[q];return Z===void 0&&(Z=new xr,v[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=v[q];return Z===void 0&&(Z=new xr,v[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=v[q];return Z===void 0&&(Z=new xr,v[q]=Z),Z.getHandSpace()};function N(q){let Z=S.indexOf(q.inputSource);if(Z===-1)return;let ae=v[Z];ae!==void 0&&(ae.update(q.inputSource,q.frame,c||o),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",V);for(let q=0;q<v.length;q++){let Z=S[q];Z!==null&&(S[q]=null,v[q].disconnect(Z))}C=null,F=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(M),d=null,f=null,h=null,i=null,b=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),w!==null){let q=w.camera;q.fov=w.fov,q.zoom=w.zoom,q.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",U),i.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,we=null,ge=null;y.depth&&(ge=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=y.stencil?Zi:ti,we=y.stencil?Er:$n);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new rn(f.textureWidth,f.textureHeight,{format:In,type:vn,depthTexture:new qi(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ae={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new rn(d.framebufferWidth,d.framebufferHeight,{format:In,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let Z=0;Z<q.removed.length;Z++){let ae=q.removed[Z],we=S.indexOf(ae);we>=0&&(S[we]=null,v[we].disconnect(ae))}for(let Z=0;Z<q.added.length;Z++){let ae=q.added[Z],we=S.indexOf(ae);if(we===-1){for(let ze=0;ze<v.length;ze++)if(ze>=S.length){S.push(ae),we=ze;break}else if(S[ze]===null){S[ze]=ae,we=ze;break}if(we===-1)break}let ge=v[we];ge&&ge.connect(ae)}}let k=new z,B=new z;function H(q,Z,ae){k.setFromMatrixPosition(Z.matrixWorld),B.setFromMatrixPosition(ae.matrixWorld);let we=k.distanceTo(B),ge=Z.projectionMatrix.elements,ze=ae.projectionMatrix.elements,st=ge[14]/(ge[10]-1),Ne=ge[14]/(ge[10]+1),Ze=(ge[9]+1)/ge[5],ot=(ge[9]-1)/ge[5],je=(ge[8]-1)/ge[0],Ct=(ze[8]+1)/ze[0],Zt=st*je,mn=st*Ct,It=we/(-je+Ct),zt=It*-je;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(zt),q.translateZ(It),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ge[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let X=st+It,en=Ne+It,xt=Zt-zt,O=mn+(we-zt),A=Ze*Ne/en*X,Y=ot*Ne/en*X;q.projectionMatrix.makePerspective(xt,O,A,Y,X,en),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ee(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Z=q.near,ae=q.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),I.near=T.near=R.near=Z,I.far=T.far=R.far=ae,(C!==I.near||F!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),C=I.near,F=I.far),I.layers.mask=q.layers.mask|6,R.layers.mask=I.layers.mask&-5,T.layers.mask=I.layers.mask&-3;let we=q.parent,ge=I.cameras;ee(I,we);for(let ze=0;ze<ge.length;ze++)ee(ge[ze],we);ge.length===2?H(I,R,T):I.projectionMatrix.copy(R.projectionMatrix),w===null&&q.isPerspectiveCamera&&(w={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,I,we)};function Q(q,Z,ae){ae===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(q){return p[q]};let ce=null;function ue(q,Z){if(u=Z.getViewerPose(c||o),m=Z,u!==null){let ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let we=!1;ae.length!==I.cameras.length&&(I.cameras.length=0,we=!0);for(let Ne=0;Ne<ae.length;Ne++){let Ze=ae[Ne],ot=null;if(d!==null)ot=d.getViewport(Ze);else{let Ct=h.getViewSubImage(f,Ze);ot=Ct.viewport,Ne===0&&(e.setRenderTargetTextures(b,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(b))}let je=L[Ne];je===void 0&&(je=new Ht,je.layers.enable(Ne),je.viewport=new _t,L[Ne]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Ne===0&&(I.matrix.copy(je.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),we===!0&&I.cameras.push(je)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ne=h.getDepthInformation(ae[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(Ne,i.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ne=0;Ne<ae.length;Ne++){let Ze=ae[Ne].camera;if(Ze){let ot=p[Ze];ot||(ot=new mo,p[Ze]=ot);let je=h.getCameraImage(Ze);ot.sourceTexture=je}}}}for(let ae=0;ae<v.length;ae++){let we=S[ae],ge=v[ae];we!==null&&ge!==void 0&&ge.update(we,Z,c||o)}ce&&ce(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),m=null}let Be=new fm;Be.setAnimationLoop(ue),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}},FM=new Xe,bm=new We;bm.set(-1,0,0,0,1,0,0,0,1);function DM(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,fh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,M,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Qt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Qt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),M=y.envMap,b=y.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(FM.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bm),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function NM(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=i[b.id];S===void 0&&(g(b),S=u(b),i[b.id]=S,b.addEventListener("dispose",y));let E=v.program;n.updateUBOMapping(b,E);let _=e.render.frame;r[b.id]!==_&&(f(b),r[b.id]=_)}function u(b){let v=h();b.__bindingPointIndex=v;let S=s.createBuffer(),E=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,E,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=i[b.id],S=b.uniforms,E=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let _=0,w=S.length;_<w;_++){let R=S[_];if(Array.isArray(R))for(let T=0,L=R.length;T<L;T++)d(R[T],_,T,E);else d(R,_,0,E)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,v,S,E){if(x(b,v,S,E)===!0){let _=b.__offset,w=b.value;if(Array.isArray(w)){let R=0;for(let T=0;T<w.length;T++){let L=w[T],I=p(L);m(L,b.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,b.__data)}}function m(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function x(b,v,S,E){let _=b.value,w=v+"_"+S;if(E[w]===void 0)return typeof _=="number"||typeof _=="boolean"?E[w]=_:ArrayBuffer.isView(_)?E[w]=_.slice():E[w]=_.clone(),!0;{let R=E[w];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return E[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(b){let v=b.uniforms,S=0,E=16;for(let w=0,R=v.length;w<R;w++){let T=Array.isArray(v[w])?v[w]:[v[w]];for(let L=0,I=T.length;L<I;L++){let C=T[L],F=Array.isArray(C.value)?C.value:[C.value];for(let N=0,U=F.length;N<U;N++){let V=F[N],k=p(V),B=S%E,H=B%k.boundary,ee=B+H;S+=H,ee!==0&&E-ee<k.storage&&(S+=E-ee),C.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=S,S+=k.storage}}}let _=S%E;return _>0&&(S+=E-_),b.__size=S,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",b),v}function y(b){let v=b.target;v.removeEventListener("dispose",y);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function M(){for(let b in i)s.deleteBuffer(i[b]);o=[],i={},r={}}return{bind:l,update:c,dispose:M}}var OM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function UM(){return ui===null&&(ui=new _r(OM,16,16,Ji,Kn),ui.name="DFG_LUT",ui.minFilter=Ot,ui.magFilter=Ot,ui.wrapS=fn,ui.wrapT=fn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Fr=class{constructor(e={}){let{canvas:t=Lp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=d,g=new Set([Cl,Rl,El]),p=new Set([vn,$n,Ar,Er,wl,Tl]),y=new Uint32Array(4),M=new Int32Array(4),b=new z,v=null,S=null,E=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,T=!1,L=null,I=null,C=null,F=null;this._outputColorSpace=vt;let N=0,U=0,V=null,k=-1,B=null,H=new _t,ee=new _t,Q=null,ce=new j(0),ue=0,Be=t.width,q=t.height,Z=1,ae=null,we=null,ge=new _t(0,0,Be,q),ze=new _t(0,0,Be,q),st=!1,Ne=new yr,Ze=!1,ot=!1,je=new Xe,Ct=new z,Zt=new _t,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},It=!1;function zt(){return V===null?Z:1}let X=n;function en(P,G){return t.getContext(P,G)}let xt,O,A,Y,J,ne,le,he,ie,re,fe,Pe,xe,de,Le,ke,qe,W,pe,se,me,ve,oe;try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Un,!1),X===null){let G="webgl2";if(X=en(G,P),X===null)throw en(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(P){throw t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),Ve("WebGLRenderer: "+P.message),P}function De(){xt=new Wy(X),xt.init(),me=new IM(X,xt),O=new Dy(X,xt,e,me),A=new RM(X,xt),O.reversedDepthBuffer&&f&&A.buffers.depth.setReversed(!0),I=X.createFramebuffer(),C=X.createFramebuffer(),F=X.createFramebuffer(),Y=new Yy(X),J=new pM,ne=new CM(X,xt,A,J,O,me,Y),le=new Hy(R),he=new Kx(X),ve=new Ly(X,he),ie=new Xy(X,he,Y,ve),re=new Ky(X,ie,he,ve,Y),W=new $y(X,O,ne),Le=new Ny(J),fe=new dM(R,le,xt,O,ve,Le),Pe=new DM(R,J),xe=new gM,de=new MM(xt),qe=new Py(R,le,A,re,m,l),ke=new EM(R,re,O),oe=new NM(X,Y,O,A),pe=new Fy(X,xt,Y),se=new qy(X,xt,Y),Y.programs=fe.programs,R.capabilities=O,R.extensions=xt,R.properties=J,R.renderLists=xe,R.shadowMap=ke,R.state=A,R.info=Y}x!==vn&&(w=new Jy(x,t.width,t.height,a,i,r));let Re=new Nh(R,X);this.xr=Re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let P=xt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=xt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(P){P!==void 0&&(Z=P,this.setSize(Be,q,!1))},this.getSize=function(P){return P.set(Be,q)},this.setSize=function(P,G,te=!0){if(Re.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=P,q=G,t.width=Math.floor(P*Z),t.height=Math.floor(G*Z),te===!0&&(t.style.width=P+"px",t.style.height=G+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(Be*Z,q*Z).floor()},this.setDrawingBufferSize=function(P,G,te){Be=P,q=G,Z=te,t.width=Math.floor(P*te),t.height=Math.floor(G*te),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(x===vn){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(H)},this.getViewport=function(P){return P.copy(ge)},this.setViewport=function(P,G,te,$){P.isVector4?ge.set(P.x,P.y,P.z,P.w):ge.set(P,G,te,$),A.viewport(H.copy(ge).multiplyScalar(Z).round())},this.getScissor=function(P){return P.copy(ze)},this.setScissor=function(P,G,te,$){P.isVector4?ze.set(P.x,P.y,P.z,P.w):ze.set(P,G,te,$),A.scissor(ee.copy(ze).multiplyScalar(Z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(P){A.setScissorTest(st=P)},this.setOpaqueSort=function(P){ae=P},this.setTransparentSort=function(P){we=P},this.getClearColor=function(P){return P.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,te=!0){let $=0;if(P){let K=!1;if(V!==null){let ye=V.texture.format;K=g.has(ye)}if(K){let ye=V.texture.type,Te=p.has(ye),_e=qe.getClearColor(),Ae=qe.getClearAlpha(),Ce=_e.r,$e=_e.g,et=_e.b;Te?(y[0]=Ce,y[1]=$e,y[2]=et,y[3]=Ae,X.clearBufferuiv(X.COLOR,0,y)):(M[0]=Ce,M[1]=$e,M[2]=et,M[3]=Ae,X.clearBufferiv(X.COLOR,0,M))}else $|=X.COLOR_BUFFER_BIT}G&&($|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&X.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),L=P},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Un,!1),qe.dispose(),xe.dispose(),de.dispose(),J.dispose(),le.dispose(),re.dispose(),ve.dispose(),oe.dispose(),fe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Qf),Re.removeEventListener("sessionend",ed),as.stop()};function At(P){P.preventDefault(),ao("WebGLRenderer: Context Lost."),T=!0}function ut(){ao("WebGLRenderer: Context Restored."),T=!1;let P=Y.autoReset,G=ke.enabled,te=ke.autoUpdate,$=ke.needsUpdate,K=ke.type;De(),Y.autoReset=P,ke.enabled=G,ke.autoUpdate=te,ke.needsUpdate=$,ke.type=K}function Un(P){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Jn(P){let G=P.target;G.removeEventListener("dispose",Jn),vg(G)}function vg(P){Mg(P),J.remove(P)}function Mg(P){let G=J.get(P).programs;G!==void 0&&(G.forEach(function(te){fe.releaseProgram(te)}),P.isShaderMaterial&&fe.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,te,$,K,ye){G===null&&(G=mn);let Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,_e=Tg(P,G,te,$,K);A.setMaterial($,Te);let Ae=te.index,Ce=1;if($.wireframe===!0){if(Ae=ie.getWireframeAttribute(te),Ae===void 0)return;Ce=2}let $e=te.drawRange,et=te.attributes.position,Ee=$e.start*Ce,ht=($e.start+$e.count)*Ce;ye!==null&&(Ee=Math.max(Ee,ye.start*Ce),ht=Math.min(ht,(ye.start+ye.count)*Ce)),Ae!==null?(Ee=Math.max(Ee,0),ht=Math.min(ht,Ae.count)):et!=null&&(Ee=Math.max(Ee,0),ht=Math.min(ht,et.count));let Vt=ht-Ee;if(Vt<0||Vt===1/0)return;ve.setup(K,$,_e,te,Ae);let Rt,St=pe;if(Ae!==null&&(Rt=he.get(Ae),St=se,St.setIndex(Rt)),K.isMesh)$.wireframe===!0?(A.setLineWidth($.wireframeLinewidth*zt()),St.setMode(X.LINES)):St.setMode(X.TRIANGLES);else if(K.isLine){let tn=$.linewidth;tn===void 0&&(tn=1),A.setLineWidth(tn*zt()),K.isLineSegments?St.setMode(X.LINES):K.isLineLoop?St.setMode(X.LINE_LOOP):St.setMode(X.LINE_STRIP)}else K.isPoints?St.setMode(X.POINTS):K.isSprite&&St.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let tn=K._multiDrawStarts,Se=K._multiDrawCounts,un=K._multiDrawCount,at=Ae?he.get(Ae).bytesPerElement:1,Pn=J.get($).currentProgram.getUniforms();for(let jn=0;jn<un;jn++)Pn.setValue(X,"_gl_DrawID",jn),St.render(tn[jn]/at,Se[jn])}else if(K.isInstancedMesh)St.renderInstances(Ee,Vt,K.count);else if(te.isInstancedBufferGeometry){let tn=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Se=Math.min(te.instanceCount,tn);St.renderInstances(Ee,Vt,Se)}else St.render(Ee,Vt)};function jf(P,G,te,$){L!==null&&P.isNodeMaterial&&L.setObject($,P),Ze===!0&&Le.setState(P,te,!1),P.transparent===!0&&P.side===Mt&&P.forceSinglePass===!1?(P.side=Qt,P.needsUpdate=!0,da(P,G,$),P.side=ai,P.needsUpdate=!0,da(P,G,$),P.side=Mt):da(P,G,$)}this.compile=function(P,G,te=null){te===null&&(te=P),L!==null&&L.renderStart(P,G,te),S=de.get(te),S.init(G),_.push(S),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),P!==te&&P.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),Ze===!0&&Le.setGlobalState(this.clippingPlanes,G),L!==null&&ke.render(S.state.shadowsArray,te,G);let $=new Set;return P.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let ye=K.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let _e=ye[Te];jf(_e,te,G,K),$.add(_e)}else jf(ye,te,G,K),$.add(ye)}),S=_.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(P,G,te=null){let $=this.compile(P,G,te);return new Promise(K=>{function ye(){if($.forEach(function(Te){let Ae=J.get(Te).currentProgram;(Ae===void 0||Ae.isReady())&&$.delete(Te)}),$.size===0){K(P);return}setTimeout(ye,10)}xt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Qc=null;function Sg(P){Qc&&Qc(P)}function Qf(){as.stop()}function ed(){as.start()}let as=new fm;as.setAnimationLoop(Sg),typeof self<"u"&&as.setContext(self),this.setAnimationLoop=function(P){Qc=P,Re.setAnimationLoop(P),P===null?as.stop():as.start()},Re.addEventListener("sessionstart",Qf),Re.addEventListener("sessionend",ed),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;L!==null&&L.renderStart(P,G);let te=Re.enabled===!0&&Re.isPresenting===!0,$=w!==null&&(V===null||te)&&w.begin(R,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(G),G=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(R,P,G,V),S=de.get(P,_.length),S.init(G),S.state.textureUnits=ne.getTextureUnits(),_.push(S),je.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ne.setFromProjectionMatrix(je,Hn,G.reversedDepth),ot=this.localClippingEnabled,Ze=Le.init(this.clippingPlanes,ot),v=xe.get(P,E.length),v.init(),E.push(v),Re.enabled===!0&&Re.isPresenting===!0){let Te=R.xr.getDepthSensingMesh();Te!==null&&eu(Te,G,-1/0,R.sortObjects)}eu(P,G,0,R.sortObjects),v.finish(),L!==null&&L.updateLights(S.state.lightsArray),R.sortObjects===!0&&v.sort(ae,we),It=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,It&&qe.addToRenderList(v,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Le.beginShadows();let K=S.state.shadowsArray;if(ke.render(K,P,G),Ze===!0&&Le.endShadows(),($&&w.hasRenderPass())===!1){let Te=v.opaque,_e=v.transmissive;if(S.setupLights(),G.isArrayCamera){let Ae=G.cameras;if(_e.length>0)for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];nd(Te,_e,P,et)}It&&qe.render(P);for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce];td(v,P,et,et.viewport)}}else _e.length>0&&nd(Te,_e,P,G),It&&qe.render(P),td(v,P,G)}V!==null&&U===0&&(ne.updateMultisampleRenderTarget(V),ne.updateRenderTargetMipmap(V)),$&&w.end(R),P.isScene===!0&&P.onAfterRender(R,P,G),ve.resetDefaultState(),k=-1,B=null,_.pop(),_.length>0?(S=_[_.length-1],ne.setTextureUnits(S.state.textureUnits),Ze===!0&&Le.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?v=E[E.length-1]:v=null,L!==null&&L.renderEnd()};function eu(P,G,te,$){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLightProbeGrid)S.pushLightProbeGrid(P);else if(P.isLight)S.pushLight(P),P.castShadow&&S.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(Ne)){$&&Zt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(je);let Te=re.update(P),_e=P.material;_e.visible&&v.push(P,Te,_e,te,Zt.z,null,G)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(Ne))){let Te=re.update(P),_e=P.material;if($&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Zt.copy(P.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Zt.copy(Te.boundingSphere.center)),Zt.applyMatrix4(P.matrixWorld).applyMatrix4(je)),Array.isArray(_e)){let Ae=Te.groups;for(let Ce=0,$e=Ae.length;Ce<$e;Ce++){let et=Ae[Ce],Ee=_e[et.materialIndex];Ee&&Ee.visible&&v.push(P,Te,Ee,te,Zt.z,et,G)}}else _e.visible&&v.push(P,Te,_e,te,Zt.z,null,G)}}let ye=P.children;for(let Te=0,_e=ye.length;Te<_e;Te++)eu(ye[Te],G,te,$)}function td(P,G,te,$){let{opaque:K,transmissive:ye,transparent:Te}=P;S.setupLightsView(te),Ze===!0&&Le.setGlobalState(R.clippingPlanes,te),$&&A.viewport(H.copy($)),K.length>0&&fa(K,G,te),ye.length>0&&fa(ye,G,te),Te.length>0&&fa(Te,G,te),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function nd(P,G,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Ee=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new rn(1,1,{generateMipmaps:!0,type:Ee?Kn:vn,minFilter:Yn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ye=S.state.transmissionRenderTarget[$.id],Te=$.viewport||H;ye.setSize(Te.z*R.transmissionResolutionScale,Te.w*R.transmissionResolutionScale);let _e=R.getRenderTarget(),Ae=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(ce),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),It&&qe.render(te);let $e=R.toneMapping;R.toneMapping=qn;let et=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),Ze===!0&&Le.setGlobalState(R.clippingPlanes,$),fa(P,te,$),ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ht=0,Vt=G.length;ht<Vt;ht++){let Rt=G[ht],{object:St,geometry:tn,material:Se,group:un}=Rt;if(Se.side===Mt&&St.layers.test($.layers)){let at=Se.side;Se.side=Qt,Se.needsUpdate=!0,id(St,te,$,tn,Se,un),Se.side=at,Se.needsUpdate=!0,Ee=!0}}Ee===!0&&(ne.updateMultisampleRenderTarget(ye),ne.updateRenderTargetMipmap(ye))}R.setRenderTarget(_e,Ae,Ce),R.setClearColor(ce,ue),et!==void 0&&($.viewport=et),R.toneMapping=$e}function fa(P,G,te){let $=G.isScene===!0?G.overrideMaterial:null;for(let K=0,ye=P.length;K<ye;K++){let Te=P[K],{object:_e,geometry:Ae,group:Ce}=Te,$e=Te.material;$e.allowOverride===!0&&$!==null&&($e=$),_e.layers.test(te.layers)&&id(_e,G,te,Ae,$e,Ce)}}function id(P,G,te,$,K,ye){L!==null&&K.isNodeMaterial&&L.setObject(P,K),P.onBeforeRender(R,G,te,$,K,ye),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),K.onBeforeRender(R,G,te,$,P,ye),K.transparent===!0&&K.side===Mt&&K.forceSinglePass===!1?(K.side=Qt,K.needsUpdate=!0,R.renderBufferDirect(te,G,$,K,P,ye),K.side=ai,K.needsUpdate=!0,R.renderBufferDirect(te,G,$,K,P,ye),K.side=Mt):R.renderBufferDirect(te,G,$,K,P,ye),P.onAfterRender(R,G,te,$,K,ye)}function da(P,G,te){G.isScene!==!0&&(G=mn);let $=J.get(P),K=S.state.lights,ye=S.state.shadowsArray,Te=K.state.version,_e=fe.getParameters(P,K.state,ye,G,te,S.state.lightProbeGridArray),Ae=fe.getProgramCacheKey(_e),Ce=$.programs;$.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;let $e=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;$.envMap=le.get(P.envMap||$.environment,$e),$.envMapRotation=$.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ce===void 0&&(P.addEventListener("dispose",Jn),Ce=new Map,$.programs=Ce);let et=Ce.get(Ae);if(et!==void 0){if($.currentProgram===et&&$.lightsStateVersion===Te)return rd(P,_e),et}else _e.uniforms=fe.getUniforms(P),L!==null&&P.isNodeMaterial&&L.build(P,te,_e),P.onBeforeCompile(_e,R),et=fe.acquireProgram(_e,Ae),Ce.set(Ae,et),$.uniforms=_e.uniforms;let Ee=$.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ee.clippingPlanes=Le.uniform),rd(P,_e),$.needsLights=Eg(P),$.lightsStateVersion=Te,$.needsLights&&(Ee.ambientLightColor.value=K.state.ambient,Ee.lightProbe.value=K.state.probe,Ee.sunLights.value=K.state.sun,Ee.sunLightShadows.value=K.state.sunShadow,Ee.directionalLights.value=K.state.directional,Ee.directionalLightShadows.value=K.state.directionalShadow,Ee.spotLights.value=K.state.spot,Ee.spotLightShadows.value=K.state.spotShadow,Ee.rectAreaLights.value=K.state.rectArea,Ee.ltc_1.value=K.state.rectAreaLTC1,Ee.ltc_2.value=K.state.rectAreaLTC2,Ee.pointLights.value=K.state.point,Ee.pointLightShadows.value=K.state.pointShadow,Ee.hemisphereLights.value=K.state.hemi,Ee.sunShadowMatrix.value=K.state.sunShadowMatrix,Ee.sunShadowCascade.value=K.state.sunShadowCascade,Ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ee.spotLightMatrix.value=K.state.spotLightMatrix,Ee.spotLightMap.value=K.state.spotLightMap,Ee.pointShadowMatrix.value=K.state.pointShadowMatrix),$.lightProbeGrid=S.state.lightProbeGridArray.length>0,$.currentProgram=et,$.uniformsList=null,et}function sd(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=Pr.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function rd(P,G){let te=J.get(P);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function wg(P,G){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;b.setFromMatrixPosition(G.matrixWorld);for(let te=0,$=P.length;te<$;te++){let K=P[te];if(K.texture!==null&&K.boundingBox.containsPoint(b))return K}return null}function Tg(P,G,te,$,K){G.isScene!==!0&&(G=mn),ne.resetTextureUnits();let ye=G.fog,Te=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,_e=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Je.workingColorSpace,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ce=le.get($.envMap||Te,Ae),$e=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ee=!!te.morphAttributes.position,ht=!!te.morphAttributes.normal,Vt=!!te.morphAttributes.color,Rt=qn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Rt=R.toneMapping);let St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,tn=St!==void 0?St.length:0,Se=J.get($),un=S.state.lights;if(Ze===!0&&(ot===!0||P!==B)){let Et=P===B&&$.id===k;Le.setState($,P,Et)}let at=!1;$.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==un.state.version||Se.outputColorSpace!==_e||K.isBatchedMesh&&Se.batching===!1||!K.isBatchedMesh&&Se.batching===!0||K.isBatchedMesh&&Se.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Se.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Se.instancing===!1||!K.isInstancedMesh&&Se.instancing===!0||K.isSkinnedMesh&&Se.skinning===!1||!K.isSkinnedMesh&&Se.skinning===!0||K.isInstancedMesh&&Se.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Se.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Se.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Se.instancingMorph===!1&&K.morphTexture!==null||Se.envMap!==Ce||$.fog===!0&&Se.fog!==ye||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Le.numPlanes||Se.numIntersection!==Le.numIntersection)||Se.vertexAlphas!==$e||Se.vertexTangents!==et||Se.morphTargets!==Ee||Se.morphNormals!==ht||Se.morphColors!==Vt||Se.toneMapping!==Rt||Se.morphTargetsCount!==tn||!!Se.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Se.__version=$.version);let Pn=Se.currentProgram;at===!0&&(Pn=da($,G,K),L&&$.isNodeMaterial&&L.onUpdateProgram($,Pn,Se));let jn=!1,Di=!1,Hs=!1,yt=Pn.getUniforms(),Dt=Se.uniforms;if(A.useProgram(Pn.program)&&(jn=!0,Di=!0,Hs=!0),$.id!==k&&(k=$.id,Di=!0),Se.needsLights){let Et=wg(S.state.lightProbeGridArray,K);Se.lightProbeGrid!==Et&&(Se.lightProbeGrid=Et,Di=!0)}if(jn||B!==P){A.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),yt.setValue(X,"projectionMatrix",P.projectionMatrix),yt.setValue(X,"viewMatrix",P.matrixWorldInverse);let Oi=yt.map.cameraPosition;Oi!==void 0&&Oi.setValue(X,Ct.setFromMatrixPosition(P.matrixWorld)),O.logarithmicDepthBuffer&&yt.setValue(X,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&yt.setValue(X,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,Di=!0,Hs=!0)}if(Se.needsLights&&(un.state.sunShadowMap.length>0&&yt.setValue(X,"sunShadowMap",un.state.sunShadowMap,ne),un.state.directionalShadowMap.length>0&&yt.setValue(X,"directionalShadowMap",un.state.directionalShadowMap,ne),un.state.spotShadowMap.length>0&&yt.setValue(X,"spotShadowMap",un.state.spotShadowMap,ne),un.state.pointShadowMap.length>0&&yt.setValue(X,"pointShadowMap",un.state.pointShadowMap,ne)),K.isSkinnedMesh){yt.setOptional(X,K,"bindMatrix"),yt.setOptional(X,K,"bindMatrixInverse");let Et=K.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),yt.setValue(X,"boneTexture",Et.boneTexture,ne))}K.isBatchedMesh&&(yt.setOptional(X,K,"batchingTexture"),yt.setValue(X,"batchingTexture",K._matricesTexture,ne),yt.setOptional(X,K,"batchingIdTexture"),yt.setValue(X,"batchingIdTexture",K._indirectTexture,ne),yt.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&yt.setValue(X,"batchingColorTexture",K._colorsTexture,ne));let Ni=te.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&W.update(K,te,Pn),(Di||Se.receiveShadow!==K.receiveShadow)&&(Se.receiveShadow=K.receiveShadow,yt.setValue(X,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Dt.envMapIntensity.value=G.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=UM()),Di){if(yt.setValue(X,"toneMappingExposure",R.toneMappingExposure),Se.needsLights&&Ag(Dt,Hs),ye&&$.fog===!0&&Pe.refreshFogUniforms(Dt,ye),Pe.refreshMaterialUniforms(Dt,$,Z,q,S.state.transmissionRenderTarget[P.id]),Se.needsLights&&Se.lightProbeGrid){let Et=Se.lightProbeGrid;Dt.probesSH.value=Et.texture,Dt.probesMin.value.copy(Et.boundingBox.min),Dt.probesMax.value.copy(Et.boundingBox.max),Dt.probesResolution.value.copy(Et.resolution)}Pr.upload(X,sd(Se),Dt,ne)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Pr.upload(X,sd(Se),Dt,ne),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&yt.setValue(X,"center",K.center),yt.setValue(X,"modelViewMatrix",K.modelViewMatrix),yt.setValue(X,"normalMatrix",K.normalMatrix),yt.setValue(X,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){let Et=$.uniformsGroups;for(let Oi=0,Ws=Et.length;Oi<Ws;Oi++){let ad=Et[Oi];oe.update(ad,Pn),oe.bind(ad,Pn)}}return Pn}function Ag(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.sunLights.needsUpdate=G,P.sunLightShadows.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Eg(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,G,te){let $=J.get(P);$.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(P.texture).__webglTexture=G,J.get(P.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){let te=J.get(P);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,te=0){V=P,N=G,U=te;let $=null,K=!1,ye=!1;if(P){let _e=J.get(P);if(_e.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(X.FRAMEBUFFER,_e.__webglFramebuffer),H.copy(P.viewport),ee.copy(P.scissor),Q=P.scissorTest,A.viewport(H),A.scissor(ee),A.setScissorTest(Q),k=-1;return}else if(_e.__webglFramebuffer===void 0)ne.setupRenderTarget(P);else if(_e.__hasExternalTextures)ne.rebindTextures(P,J.get(P.texture).__webglTexture,J.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let $e=P.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&J.has($e)&&(P.width!==$e.image.width||P.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(P)}}let Ae=P.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ye=!0);let Ce=J.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?$=Ce[G][te]:$=Ce[G],K=!0):P.samples>0&&ne.useMultisampledRTT(P)===!1?$=J.get(P).__webglMultisampledFramebuffer:Array.isArray(Ce)?$=Ce[te]:$=Ce,H.copy(P.viewport),ee.copy(P.scissor),Q=P.scissorTest}else H.copy(ge).multiplyScalar(Z).floor(),ee.copy(ze).multiplyScalar(Z).floor(),Q=st;if(te!==0&&($=I),A.bindFramebuffer(X.FRAMEBUFFER,$)&&A.drawBuffers(P,$),A.viewport(H),A.scissor(ee),A.setScissorTest(Q),K){let _e=J.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+G,_e.__webglTexture,te)}else if(ye){let _e=G;for(let Ae=0;Ae<P.textures.length;Ae++){let Ce=J.get(P.textures[Ae]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,te,_e)}}else if(P!==null&&te!==0){let _e=J.get(P.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,_e.__webglTexture,te)}k=-1};function od(P){let G=J.get(P);return(G.__readFormat!==P.format||G.__readType!==P.type)&&(G.__readFormat=P.format,G.__readType=P.type,G.__formatReadable=O.textureFormatReadable(P.format),G.__typeReadable=O.textureTypeReadable(P.type)),G}this.readRenderTargetPixels=function(P,G,te,$,K,ye,Te,_e=0){if(!(P&&P.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae){A.bindFramebuffer(X.FRAMEBUFFER,Ae);try{let Ce=P.textures[_e],$e=Ce.format,et=Ce.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_e);let Ee=od(Ce);if(Ee.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-$&&te>=0&&te<=P.height-K&&X.readPixels(G,te,$,K,me.convert($e),me.convert(et),ye)}finally{let Ce=V!==null?J.get(V).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(P,G,te,$,K,ye,Te,_e=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=J.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ae=Ae[Te]),Ae)if(G>=0&&G<=P.width-$&&te>=0&&te<=P.height-K){A.bindFramebuffer(X.FRAMEBUFFER,Ae);let Ce=P.textures[_e],$e=Ce.format,et=Ce.type;P.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+_e);let Ee=od(Ce);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.bufferData(X.PIXEL_PACK_BUFFER,ye.byteLength,X.STREAM_READ),X.readPixels(G,te,$,K,me.convert($e),me.convert(et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Vt=V!==null?J.get(V).__webglFramebuffer:null;A.bindFramebuffer(X.FRAMEBUFFER,Vt);let Rt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Dp(X,Rt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ht),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ye),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(ht),X.deleteSync(Rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,te=0){let $=Math.pow(2,-te),K=Math.floor(P.image.width*$),ye=Math.floor(P.image.height*$),Te=G!==null?G.x:0,_e=G!==null?G.y:0;ne.setTexture2D(P,0),X.copyTexSubImage2D(X.TEXTURE_2D,te,0,0,Te,_e,K,ye),A.unbindTexture()},this.copyTextureToTexture=function(P,G,te=null,$=null,K=0,ye=0){let Te,_e,Ae,Ce,$e,et,Ee,ht,Vt,Rt=P.isCompressedTexture?P.mipmaps[ye]:P.image;if(te!==null)Te=te.max.x-te.min.x,_e=te.max.y-te.min.y,Ae=te.isBox3?te.max.z-te.min.z:1,Ce=te.min.x,$e=te.min.y,et=te.isBox3?te.min.z:0;else{let Dt=Math.pow(2,-K);Te=Math.floor(Rt.width*Dt),_e=Math.floor(Rt.height*Dt),P.isDataArrayTexture?Ae=Rt.depth:P.isData3DTexture?Ae=Math.floor(Rt.depth*Dt):Ae=1,Ce=0,$e=0,et=0}$!==null?(Ee=$.x,ht=$.y,Vt=$.z):(Ee=0,ht=0,Vt=0);let St=me.convert(G.format),tn=me.convert(G.type),Se;G.isData3DTexture?(ne.setTexture3D(G,0),Se=X.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ne.setTexture2DArray(G,0),Se=X.TEXTURE_2D_ARRAY):(ne.setTexture2D(G,0),Se=X.TEXTURE_2D),A.activeTexture(X.TEXTURE0),A.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,G.flipY),A.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),A.pixelStorei(X.UNPACK_ALIGNMENT,G.unpackAlignment);let un=A.getParameter(X.UNPACK_ROW_LENGTH),at=A.getParameter(X.UNPACK_IMAGE_HEIGHT),Pn=A.getParameter(X.UNPACK_SKIP_PIXELS),jn=A.getParameter(X.UNPACK_SKIP_ROWS),Di=A.getParameter(X.UNPACK_SKIP_IMAGES);A.pixelStorei(X.UNPACK_ROW_LENGTH,Rt.width),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Rt.height),A.pixelStorei(X.UNPACK_SKIP_PIXELS,Ce),A.pixelStorei(X.UNPACK_SKIP_ROWS,$e),A.pixelStorei(X.UNPACK_SKIP_IMAGES,et);let Hs=P.isDataArrayTexture||P.isData3DTexture,yt=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){let Dt=J.get(P),Ni=J.get(G),Et=J.get(Dt.__renderTarget),Oi=J.get(Ni.__renderTarget);A.bindFramebuffer(X.READ_FRAMEBUFFER,Et.__webglFramebuffer),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Ws=0;Ws<Ae;Ws++)Hs&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(P).__webglTexture,K,et+Ws),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,J.get(G).__webglTexture,ye,Vt+Ws)),X.blitFramebuffer(Ce,$e,Te,_e,Ee,ht,Te,_e,X.DEPTH_BUFFER_BIT,X.NEAREST);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||P.isRenderTargetTexture||J.has(P)){let Dt=J.get(P),Ni=J.get(G);A.bindFramebuffer(X.READ_FRAMEBUFFER,C),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,F);for(let Et=0;Et<Ae;Et++)Hs?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Dt.__webglTexture,K,et+Et):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Dt.__webglTexture,K),yt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ni.__webglTexture,ye,Vt+Et):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ni.__webglTexture,ye),K!==0?X.blitFramebuffer(Ce,$e,Te,_e,Ee,ht,Te,_e,X.COLOR_BUFFER_BIT,X.NEAREST):yt?X.copyTexSubImage3D(Se,ye,Ee,ht,Vt+Et,Ce,$e,Te,_e):X.copyTexSubImage2D(Se,ye,Ee,ht,Ce,$e,Te,_e);A.bindFramebuffer(X.READ_FRAMEBUFFER,null),A.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else yt?P.isDataTexture||P.isData3DTexture?X.texSubImage3D(Se,ye,Ee,ht,Vt,Te,_e,Ae,St,tn,Rt.data):G.isCompressedArrayTexture?X.compressedTexSubImage3D(Se,ye,Ee,ht,Vt,Te,_e,Ae,St,Rt.data):X.texSubImage3D(Se,ye,Ee,ht,Vt,Te,_e,Ae,St,tn,Rt):P.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ye,Ee,ht,Te,_e,St,tn,Rt.data):P.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ye,Ee,ht,Rt.width,Rt.height,St,Rt.data):X.texSubImage2D(X.TEXTURE_2D,ye,Ee,ht,Te,_e,St,tn,Rt);A.pixelStorei(X.UNPACK_ROW_LENGTH,un),A.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at),A.pixelStorei(X.UNPACK_SKIP_PIXELS,Pn),A.pixelStorei(X.UNPACK_SKIP_ROWS,jn),A.pixelStorei(X.UNPACK_SKIP_IMAGES,Di),ye===0&&G.generateMipmaps&&X.generateMipmap(Se),A.unbindTexture()},this.initRenderTarget=function(P){J.get(P).__webglFramebuffer===void 0&&ne.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ne.setTextureCube(P,0):P.isData3DTexture?ne.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ne.setTexture2DArray(P,0):ne.setTexture2D(P,0),A.unbindTexture()},this.resetState=function(){N=0,U=0,V=null,A.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function _m(s){let e=s.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let i=s[n*3+1];s[n*3]===0&&s[n*3+2]===0&&i>0&&(t[n]=i)}return t}function ym(s,e,t,n){for(let i=t.start*3;i<t.end*3;i++){let r=e[i];r<=0||(s[i*3]=Math.min(1,n[0]*r),s[i*3+1]=Math.min(1,n[1]*r),s[i*3+2]=Math.min(1,n[2]*r))}}var BM=[],Wo=new Map,kM=0,vm=(s,e)=>`pack:${s}:${e}`,zM=s=>s.startsWith("pack:");function dc(s){BM=s,Wo=new Map;for(let e of s)for(let t of e.items)Wo.set(vm(e.id,t.id),t);kM+=1}var VM={};function $t(s){if(!zM(s))return;let e=Wo.get(s);if(e)return e;let[,t,...n]=s.split(":"),i=VM[t];return i?Wo.get(vm(i,n.join(":"))):void 0}var Mm=s=>$t(s)?.parts.find(e=>e.screen);function Nn(s,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return mc;if(e.type==="led_strip")return Math.max(0,s.height-.04-Math.max(.02,e.h));let t=$t(e.type);if(!t)return Xo(e);switch(t.mount){case"surface":return Rm(s,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,s.height-e.h);default:return 0}}var Sm=null,wm=new Set,Tm=s=>{Sm=s},Am=()=>Sm,Em=s=>{wm.add(s)};function pc(s){let e=Wo.get(s)?.mesh;return e!==void 0&&wm.has(e)}var gc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function Ps(s){return s==="hedge"||s==="fence"||s==="pergola"}function Oh(s,e,t){let n=s.slope??0;if(!n||s.type==="pool")return 0;let i=s.slope_dir??"x",r=(c,u)=>i==="x"?c:i==="-x"?-c:i==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of s.points){let h=r(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-o)/(a-o)));return n*l}function HM(s,e,t,n){return qo(s)+(e.offset??0)+gc[e.type]-Oh(e,t,n)}function qo(s){return s.elevation>.3?0:-.2}function Cm(s,e,t){let n=(s.outdoor??[]).filter(r=>!Ps(r.type)&&r.type!=="pool"&&mt([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?HM(s,i,e,t):qo(s)}var WM={type:"none",pitch:35,overhang:.4},IA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...WM}};var Im=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),mc=1.75;function Pm(s){return Im.has(s)||!!$t(s)?.light}var XM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Xo(s){switch(s.type){case"home_battery":return s.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-s.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Rm(s,e,t){let n=0;for(let i of s.furniture)!(XM.has(i.type)||$t(i.type)?.surface)||!mt([e,t],bc(i))||(n=Math.max(n,i.h));return n}var GM=new Set([...Im,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var qM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],YM=["standard","bars","glass_wall"];function Ls(s,e){return s.type==="door"?s.style&&qM.includes(s.style)?s.style:e?"front":"interior":s.style&&YM.includes(s.style)?s.style:"standard"}function Lm(s,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=s-.04,o=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-o)/(i?2:1),l=n.sidelight_width??a,c=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let u=r-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return i?{panels:[[.02,.02+l],[s-.02-c,s-.02]],x0:.02+l,x1:s-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:s-.02}:{panels:[[s-.02-l,s-.02]],x0:.02,x1:s-.02-l}}function Fm(s){return s==="front"||s==="front_glass"||s==="sidelight"||s==="sidelights"}function Fs(s){let e=0;for(let t=0;t<s.length;t++){let[n,i]=s[t],[r,o]=s[(t+1)%s.length];e+=n*o-r*i}return e/2}function Yo(s){return Math.abs(Fs(s))}function xc(s){let e=Fs(s);if(Math.abs(e)<1e-9){let i=s.length||1;return[s.reduce((r,o)=>r+o[0],0)/i,s.reduce((r,o)=>r+o[1],0)/i]}let t=0,n=0;for(let i=0;i<s.length;i++){let[r,o]=s[i],[a,l]=s[(i+1)%s.length],c=r*l-a*o;t+=(r+a)*c,n+=(o+l)*c}return[t/(6*e),n/(6*e)]}function Dm(s){if(s.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=s[e],[i,r]=s[(e+1)%4];if(Math.abs(t-i)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function Nm(s){let e=1/0,t=1/0,n=-1/0,i=-1/0;for(let[r,o]of s)e=Math.min(e,r),t=Math.min(t,o),n=Math.max(n,r),i=Math.max(i,o);return{x0:e,z0:t,x1:n,z1:i}}function bc(s){let e=s.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=s.w/2,r=s.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([o,a])=>[s.x+o*t-a*n,s.z+o*n+a*t])}function mt(s,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,o]=e[n],[a,l]=e[i];o>s[1]!=l>s[1]&&s[0]<(a-r)*(s[1]-o)/(l-o)+r&&(t=!t)}return t}var Uh=Math.PI/180,Nr=s=>Math.tan(Math.min(80,Math.max(0,s))*Uh);function _c(s){return{x0:Math.min(s.x0,s.x1),x1:Math.max(s.x0,s.x1),z0:Math.min(s.z0,s.z1),z1:Math.max(s.z0,s.z1)}}function Mn(s){let{x0:e,x1:t,z0:n,z1:i}=_c(s);return s.axis==="x"?{u0:e,u1:t,w:i-n,at:(r,o)=>[r,s.flip?i-o:n+o]}:{u0:n,u1:i,w:t-e,at:(r,o)=>[s.flip?t-o:e+o,r]}}function fi(s,e,t){let{x0:n,x1:i,z0:r,z1:o}=_c(s);return s.axis==="x"?[e,s.flip?o-t:t-r]:[t,s.flip?i-e:e-n]}var $o=Math.tan(30*Uh);function Bh(s,e,t,n,i){let r=Math.min(s*.3,n>1e-6?2.4/n:s*.3),o=Math.min(s*.3,i>1e-6?2.4/i:s*.3),a=e+r*n,l=t+o*i,c=Math.min(s-o,Math.max(r,(l-a+$o*(s-o+r))/(2*$o))),u=a+(c-r)*$o;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=r?e+f*n:f<=c?a+(f-r)*$o:f<=s-o?l+(s-o-f)*$o:t+(s-f)*i}}function pn(s){let e=Mn(s).w,[t,n]=[s.eave_a,s.eave_b],[i,r]=[Nr(s.pitch_a),Nr(s.pitch_b)];switch(s.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*i,y:o=>t+o*i};case"mansard":{let o=Bh(e,t,n,i,r);return{vr:o.vr,rh:o.rh,y:o.y}}default:{let o=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2;return{vr:o,rh:t+o*i,y:a=>a<=o?t+a*i:n+(e-a)*r}}}}var kh=s=>pn(s).rh;var jt=(s,e)=>[s[0]-e[0],s[1]-e[1]],ji=(s,e)=>[s[0]+e[0],s[1]+e[1]],Li=(s,e)=>[s[0]*e,s[1]*e],Zo=(s,e)=>s[0]*e[0]+s[1]*e[1],Or=(s,e)=>s[0]*e[1]-s[1]*e[0],Ko=s=>Math.hypot(s[0],s[1]),di=s=>{let e=Ko(s)||1;return[s[0]/e,s[1]/e]},Om=s=>[-s[1],s[0]],Um=s=>[s[1],-s[0]];function Jo(s,e,t=[]){let n=e.eps??.005,i=[],r=t.filter(_=>Math.hypot(_.b[0]-_.a[0],_.b[1]-_.a[1])>.05),o=[],a=_=>{for(let w=0;w<o.length;w++)if(Math.abs(o[w][0]-_[0])<=n&&Math.abs(o[w][1]-_[1])<=n)return w;return o.push([_[0],_[1]]),o.length-1},l=[];for(let _ of s){let w=_.points;if(w.length<3||Math.abs(Fs(w))<1e-6)continue;let R=Fs(w)>0,T=w.map(a);for(let L=0;L<w.length;L++){let I=T[L],C=T[(L+1)%w.length];I!==C&&l.push(R?{u:I,v:C,room:_.id,edge:L,forward:!0}:{u:C,v:I,room:_.id,edge:L,forward:!1})}}let c=r.map(_=>[a(_.a),a(_.b)]),u=new Set;for(let _ of s){let w=_.points;w.length<3||(_.wall_splits??[]).forEach((R,T)=>{if(!R||T>=w.length)return;let L=w[T],I=jt(w[(T+1)%w.length],L),C=Ko(I);for(let F of R)F>n&&F<C-n&&u.add(a(ji(L,Li(I,F/C))))})}let h=[];for(let _ of l){let w=o[_.u],R=o[_.v],T=jt(R,w),L=Ko(T),I=Li(T,1/L),C=[];for(let N=0;N<o.length;N++){if(N===_.u||N===_.v)continue;let U=jt(o[N],w),V=Zo(U,I);V<=n||V>=L-n||Math.abs(Or(I,U))<=n&&C.push({t:V,id:N})}C.sort((N,U)=>N.t-U.t);let F=[{t:0,id:_.u},...C,{t:L,id:_.v}];for(let N=0;N+1<F.length;N++){let U=F[N],V=F[N+1],k=_.forward?U.t:L-V.t,B=_.forward?V.t:L-U.t;h.push({u:U.id,v:V.id,room:_.room,edge:_.edge,t0:k,t1:B})}}let f=new Map;for(let _ of h){let w=_.u<_.v?`${_.u}-${_.v}`:`${_.v}-${_.u}`,R=f.get(w);R||f.set(w,R=[]),R.push(_)}let d=_=>({room_id:_.room,edge:_.edge,t0:_.t0,t1:_.t1}),m=new Map;for(let _ of h){let w=`${_.room}:${_.edge}`;m.set(w,[...m.get(w)??[],_.t0].sort((R,T)=>R-T))}let x=_=>{let w=s.find(T=>T.id===_.room)?.wall_heights?.[_.edge];if(!Array.isArray(w))return w;let R=m.get(`${_.room}:${_.edge}`)??[];return w[R.indexOf(_.t0)]??null},g=_=>{let w=_.map(x).filter(R=>typeof R=="number"&&R>0);return w.length?Math.min(...w):void 0},p=_=>{let w=_.map(R=>s.find(T=>T.id===R.room)?.wall_thickness?.[R.edge]).filter(R=>typeof R=="number"&&R>0);return w.length?Math.max(...w):void 0},y=_=>_.some(w=>x(w)===0),M=[],b=[];for(let _ of f.values()){let w=_[0],R=_.find(T=>T!==w&&T.u===w.v&&T.v===w.u&&T.room!==w.room);for(let T of _)T!==w&&T!==R&&T.room!==w.room&&i.push(`overlap:${w.room}:${T.room}`);if(y(R?[w,R]:[w])){R&&M.push([w.room,R.room]);continue}if(R){let T=p([w,R])??e.interior;b.push({a:w.u,b:w.v,left:T/2,right:T/2,exterior:!1,roomLeft:w.room,roomRight:R.room,sources:[d(w),d(R)],height:g([w,R])})}else b.push({a:w.u,b:w.v,left:0,right:p([w])??e.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[d(w)],height:g([w])})}let v=_=>di(jt(o[_.b],o[_.a]));for(let _ of b){if(_.exterior||_.free)continue;let w=new Set;for(let T of[_.a,_.b])for(let L of b)!L.exterior||L.free||L.a!==T&&L.b!==T||Math.abs(Or(v(_),v(L)))>1e-6||(L.roomLeft===_.roomLeft?w.add("left"):L.roomLeft===_.roomRight&&w.add("right"));if(w.size!==1)continue;let R=_.left+_.right;w.has("left")?(_.left=0,_.right=R):(_.left=R,_.right=0)}r.forEach((_,w)=>{let[R,T]=c[w];if(R===T)return;let L=[(_.a[0]+_.b[0])/2,(_.a[1]+_.b[1])/2],I=s.find(N=>N.points.length>=3&&mt(L,N.points))?.id??null,C=(_.thickness??e.interior)/2,F=typeof _.height=="number"&&_.height>0?_.height:void 0;b.push({free:_.id,a:R,b:T,left:C,right:C,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:F})}),b=KM(b,o,u);let S=JM(b,o);return{walls:b.map((_,w)=>{let R=o[_.a],T=o[_.b],L=S.get(`${w}:a`),I=S.get(`${w}:b`),C=jM([L.right,I.left,T,I.right,L.left,R],1e-6);return{id:$M(R,T),a:[R[0],R[1]],b:[T[0],T[1]],left:_.left,right:_.right,exterior:_.exterior,roomLeft:_.roomLeft,roomRight:_.roomRight,sources:_.sources,footprint:C,..._.free?{free:_.free}:{},..._.height!==void 0?{height:_.height}:{}}}),warnings:[...new Set(i)],open:M}}function $M(s,e){let t=r=>Math.round(r*100),[n,i]=s[0]<e[0]||s[0]===e[0]&&s[1]<=e[1]?[s,e]:[e,s];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function Bm(s){return{...s,a:s.b,b:s.a,left:s.right,right:s.left,roomLeft:s.roomRight,roomRight:s.roomLeft}}function KM(s,e,t=new Set){let n=s.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||t.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Bm(l)),c.a!==o&&(c=Bm(c)),l.a===c.b)continue;let u=di(jt(e[l.b],e[l.a])),h=di(jt(e[c.b],e[c.a]));if(Math.abs(Or(u,h))>1e-6||Zo(u,h)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:ZM(l.sources,c.sources)},d=n.filter((m,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),i=!0;break}}return n}function ZM(s,e){let t=s.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function JM(s,e){let t=new Map;s.forEach((i,r)=>{let o=di(jt(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:o,left:i.left,right:i.right,angle:Math.atan2(o[1],o[0])}],[i.b,{key:`${r}:b`,d:Li(o,-1),left:i.right,right:i.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=t.get(l);u||t.set(l,u=[]),u.push(c)}});let n=new Map;for(let[i,r]of t){let o=e[i];r.sort((c,u)=>c.angle-u.angle);let a=c=>({left:ji(o,Li(Om(c.d),c.left)),right:ji(o,Li(Um(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let u=r[c],h=r[(c+1)%r.length],f=ji(o,Li(Om(u.d),u.left)),d=ji(o,Li(Um(h.d),h.right)),m=Or(u.d,h.d);if(Math.abs(m)<1e-4)continue;let x=Or(jt(d,f),h.d)/m,g=ji(f,Li(u.d,x));Ko(jt(g,o))>l||(n.get(u.key).left=g,n.get(h.key).right=g)}}return n}function jM(s,e){let t=s.filter((i,r)=>Ko(jt(i,s[(r+1)%s.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],o=t[i],a=t[(i+1)%t.length],l=jt(o,r),c=jt(a,o);if(Math.abs(Or(di(l),di(c)))<1e-7&&Zo(l,c)>0){t=t.filter((u,h)=>h!==i),n=!0;break}}}return t}function km(s,e,t){let n=s.points[e],i=s.points[(e+1)%s.points.length],r=di(jt(i,n));return ji(n,Li(r,t))}function zm(s,e,t){if(s.wall){let i=t.find(a=>a.id===s.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=di(jt(i.b,i.a));return{room:{id:s.room_id,name:"",area_id:null,points:[i.a,i.b,ji(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===s.room_id);return n&&s.edge<n.points.length?{room:n,edge:s.edge}:null}function Vm(s,e,t){if(!e.wall)return QM(s,t.room,t.edge,e.offset);let n=s.find(r=>r.free===e.wall);if(!n)return null;let i=km(t.room,0,e.offset);return{wall:n,s:Zo(jt(i,n.a),di(jt(n.b,n.a)))}}function QM(s,e,t,n){for(let i of s){if(!i.sources.find(a=>a.room_id===e.id&&a.edge===t&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=km(e,t,n);return{wall:i,s:Zo(jt(o,i.a),di(jt(i.b,i.a)))}}return null}var Gm=([s,e])=>{let t=Math.hypot(s,e)||1;return[s/t,e/t]};function e1(s){return s.reduce((e,t,n)=>e+(t[0]*s[(n+1)%s.length][1]-s[(n+1)%s.length][0]*t[1]),0)/2}function yc(s,e){let t=s.length;if(t<3||Math.abs(e)<1e-9)return s.map(([i,r])=>[i,r]);let n=e1(s)>=0?1:-1;return s.map((i,r)=>{let o=s[(r+t-1)%t],a=s[(r+1)%t],[l,c]=Gm([i[0]-o[0],i[1]-o[1]]),[u,h]=Gm([a[0]-i[0],a[1]-i[1]]),f=[c*n,-l*n],d=[h*n,-u*n],m=[f[0]+d[0],f[1]+d[1]],x=Math.hypot(m[0],m[1]);if(x<1e-6)return[i[0]+f[0]*e,i[1]+f[1]*e];let g=(m[0]*f[0]+m[1]*f[1])/x,p=Math.min(4,1/Math.max(.25,g));return[i[0]+m[0]/x*e*p,i[1]+m[1]/x*e*p]})}function zh(s,e){if(s.points&&s.points.length>=3)return yc(s.points,e);let t=Math.min(s.x0,s.x1)-e,n=Math.max(s.x0,s.x1)+e,i=Math.min(s.z0,s.z1)-e,r=Math.max(s.z0,s.z1)+e;return[[t,i],[n,i],[n,r],[t,r]]}function Qi(s,e){let t=Mn(s),n=pn(s),i=t.w,[r,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(p,y)=>[p,y,n.y(y)],u=c(a,-r),h=c(l,-r),f=c(l,i+o),d=c(a,i+o),[m,x]=[Nr(s.pitch_a),Nr(s.pitch_b)],g=p=>[p,n.vr,n.rh];switch(s.shape){case"pent":return{faces:[[u,h,f,d]],rim:[u,h,f,d],ridges:[[f,d]],gable:[[0,n.y(0)],[i,n.y(i)]]};case"hip":case"pyramid":{let p=(t.u1-t.u0)/2,y=s.shape==="pyramid"?p:Math.min(p,Math.min(n.vr,i-n.vr)||i/2),M=g(t.u0+y),b=g(t.u1-y);return s.shape==="pyramid"?{faces:[[u,h,M],[h,f,M],[f,d,M],[d,u,M]],rim:[u,h,f,d],ridges:[[u,M],[d,M],[h,M],[f,M]],gable:null}:{faces:[[u,h,b,M],[M,b,f,d],[d,u,M],[h,f,b]],rim:[u,h,f,d],ridges:[[M,b],[u,M],[d,M],[h,b],[f,b]],gable:null}}case"halfhip":{let p=Math.min(n.y(0),n.y(i)),y=p+(n.rh-p)*.55,M=m>1e-6?Math.min(n.vr,(y-s.eave_a)/m):n.vr,b=x>1e-6?Math.max(n.vr,i-(y-s.eave_b)/x):n.vr,v=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),S=g(t.u0+v),E=g(t.u1-v),_=[a,M,y],w=[a,b,y],R=[l,M,y],T=[l,b,y];return{faces:[[u,h,R,E,S,_],[S,E,T,f,d,w],[w,_,S],[R,T,E]],rim:[u,h,R,T,f,d,w,_],ridges:[[S,E],[_,S],[w,S],[R,E],[T,E]],gable:[[0,n.y(0)],[M,y],[b,y],[i,n.y(i)]]}}case"mansard":{let p=Bh(i,s.eave_a,s.eave_b,m,x),y=[a,p.vla,p.yla],M=[l,p.vla,p.yla],b=[a,i-p.vlb,p.ylb],v=[l,i-p.vlb,p.ylb],S=[a,p.vr,p.rh],E=[l,p.vr,p.rh];return{faces:[[u,h,M,y],[y,M,E,S],[S,E,v,b],[b,v,f,d]],rim:[u,h,M,E,v,f,d,b,S,y],ridges:[[S,E],[y,M],[b,v]],gable:[[0,n.y(0)],[p.vla,p.yla],[p.vr,p.rh],[i-p.vlb,p.ylb],[i,n.y(i)]]}}default:{let p=g(a),y=g(l);return{faces:[[u,h,y,p],[p,y,f,d]],rim:[u,h,y,f,d,p],ridges:[[p,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}}}function Ds(s,e,t){let n=null;for(let i of s.faces){if(!mt([e,t],i.map(([f,d])=>[f,d])))continue;let[r,o]=i,a=i.slice(2).find(f=>Math.abs((o[0]-r[0])*(f[1]-r[1])-(o[1]-r[1])*(f[0]-r[0]))>1e-9);if(!a)continue;let l=[o[0]-r[0],o[2]-r[2],o[1]-r[1]],c=[a[0]-r[0],a[2]-r[2],a[1]-r[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let h=r[2]-(u[0]*(e-r[0])+u[2]*(t-r[1]))/u[1];n=n===null?h:Math.min(n,h)}return n}function Ur(s,e,t,n){let i=o=>n?o[e]<=t+1e-9:o[e]>=t-1e-9,r=[];return s.forEach((o,a)=>{let l=s[(a+1)%s.length];if(i(o)&&r.push(o),i(o)!==i(l)){let c=(t-o[e])/(l[e]-o[e]);r.push([o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c])}}),r}function vc(s,e){let t=Ur(Ur(s,0,e.u0,!1),0,e.u1,!0);return[Ur(s,0,e.u0,!0),Ur(s,0,e.u1,!1),Ur(t,1,e.v0,!0),Ur(t,1,e.v1,!1)].filter(i=>i.length>=3&&Math.abs(Yo(i.map(([r,o])=>[r,o])))>1e-6)}function jo(s,e,t){let n=Mn(e),i=s.floors.flatMap(u=>u.rooms.filter(h=>h.points.length>=3&&u.elevation+u.height>e.base+.05)),r=u=>u.some(h=>i.some(f=>mt(h,f.points))),o=.35,a=[.15,.5,.85].map(u=>n.u0+(n.u1-n.u0)*u),l=[.15,.5,.85].map(u=>n.w*u),c=u=>u?0:t;return{a:c(r(a.map(u=>n.at(u,-o)))),b:c(r(a.map(u=>n.at(u,n.w+o)))),u0:c(r(l.map(u=>n.at(n.u0-o,u)))),u1:c(r(l.map(u=>n.at(n.u1+o,u))))}}var Mc=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),Hm=s=>s.shape==="flat"||s.shape==="parapet";function Br(s,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return s.filter(r=>{if(r===e||r.dormer||r.open||Hm(r)||Mc(r)<Mc(e)*1.5)return!1;let o=_c(r);return t>=o.x0&&t<=o.x1&&n>=o.z0&&n<=o.z1}).reduce((r,o)=>r===null||Mc(o)<Mc(r)?o:r,null)}function Wm(s,e){let t=Qi(s,{u0:0,u1:0,a:0,b:0}),n=pn(s);return i=>{let[r,o]=e.at(i,e.w/2),[a,l]=fi(s,r,o);return Ds(t,a,l)??n.y(l)}}function Sc(s,e){if(Hm(e))return e;let t=Mn(e),n=pn(e).rh,i=Wm(s,t),r=i(t.u0)<=i(t.u1),[o,a]=r?[t.u0,t.u1]:[t.u1,t.u0],l=r?1:-1,c=a;for(let f=.5;f<Math.abs(a-o);f+=.05)if(i(o+l*f)>=n-.02){c=o+l*f;break}if(Math.abs(c-a)<.05)return e;let u={...e},h=a===t.u1;return e.axis==="x"?u[h?"x1":"x0"]=c:u[h?"z1":"z0"]=c,u}function Vh(s,e){let t=Sc(s,e),n=Mn(t),i=pn(t),r=Wm(s,n),o=r(n.u0)<=r(n.u1),a=n.u1-n.u0,l=Math.max(1,Math.ceil(a/.15)),c=[];for(let u=0;u<l;u++){let[h,f]=[a*u/l,a*(u+1)/l],[d,m]=o?[n.u0+h,n.u0+f]:[n.u1-h,n.u1-f],x=r(m),g=1/0,p=-1/0;for(let b=0;b<=40;b++){let v=n.w*b/40;i.y(v)>x+.02&&(g=Math.min(g,v),p=Math.max(p,v))}if(!(p-g>.05))continue;let y=fi(s,...n.at(d,g)),M=fi(s,...n.at(m,p));c.push({u0:Math.min(y[0],M[0]),u1:Math.max(y[0],M[0]),v0:Math.min(y[1],M[1]),v1:Math.max(y[1],M[1])})}return c}var Xm=.14,t1=s=>s.shape==="flat"||s.shape==="parapet";function Gh(s,e){return!s.open&&Math.min(s.base,s.eave_a,s.eave_b)<e-.05}function Hh(s,e,t){let n=Math.max(0,s.settings.roof.overhang??0),i=1e-6,r=[];for(let o of s.settings.roof.sections??[]){if(o.open)continue;let[a,l,c,u]=[Math.min(o.x0,o.x1),Math.max(o.x0,o.x1),Math.min(o.z0,o.z1),Math.max(o.z0,o.z1)];if(e<a-i||e>l+i||t<c-i||t>u+i||o.points&&o.points.length>=3&&!mt([e,t],o.points))continue;let[h,f]=fi(o,e,t),d=Math.max(0,o.overhang??n),m=t1(o)?null:Ds(Qi(o,{u0:d,u1:d,a:d,b:d}),h,f);r.push((m??pn(o).y(f))-Xm)}return r.length?Math.max(...r):null}function Wh(s,e){let t=s.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}function Xh(s,e,t){let n=s.settings.roof.sections??[],i=n.filter(l=>t.includes(l.id)).map(l=>Br(n,l)??l);if(i.length===0)return e.id;let r=Math.max(...i.map(kh)),o=l=>l.rooms.some(c=>{if(c.points.length<3)return!1;let u=c.points.reduce((f,d)=>f+d[0],0)/c.points.length,h=c.points.reduce((f,d)=>f+d[1],0)/c.points.length;return i.some(f=>u>=Math.min(f.x0,f.x1)&&u<=Math.max(f.x0,f.x1)&&h>=Math.min(f.z0,f.z1)&&h<=Math.max(f.z0,f.z1))});return s.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<r-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}var Zn=1e-4;function qh(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e/2}function qm(s,e,t,n){let i=[e[0]-s[0],e[1]-s[1]],r=[n[0]-t[0],n[1]-t[1]],o=i[0]*r[1]-i[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((t[0]-s[0])*r[1]-(t[1]-s[1])*r[0])/o,l=((t[0]-s[0])*i[1]-(t[1]-s[1])*i[0])/o;return a>Zn&&a<1-Zn&&l>-Zn&&l<1+Zn?a:null}function Yh(s,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i;if(r<1e-12)return null;let o=((s[0]-e[0])*n+(s[1]-e[1])*i)/r;return o<=Zn||o>=1-Zn?null:Math.abs((s[0]-e[0])*i-(s[1]-e[1])*n)/Math.sqrt(r)<Zn?o:null}function n1(s,e){for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];for(let r=0;r<e.length;r++){let o=e[r],a=e[(r+1)%e.length];if(qm(n,i,o,a)!==null||Yh(o,n,i)!==null||Yh(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Zn)return!0}}return mt(s[0],e)||mt(e[0],s)}function i1(s){let e=s.map(r=>qh(r)>=0?r:[...r].reverse()),t=[];e.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],u=[0,1];e.forEach((h,f)=>{if(f!==o)for(let d=0;d<h.length;d++){let m=h[d],x=h[(d+1)%h.length],g=qm(l,c,m,x)??Yh(m,l,c);g!==null&&u.push(g)}}),u.sort((h,f)=>h-f);for(let h=1;h<u.length;h++){if(u[h]-u[h-1]<Zn)continue;let f=[l[0]+(c[0]-l[0])*u[h-1],l[1]+(c[1]-l[1])*u[h-1]],d=[l[0]+(c[0]-l[0])*u[h],l[1]+(c[1]-l[1])*u[h]],m=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/m*.001,(f[1]+d[1])/2-(d[0]-f[0])/m*.001];e.some((g,p)=>p!==o&&mt(x,g))||t.some(([g,p])=>Math.hypot(g[0]-f[0],g[1]-f[1])<Zn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Zn)||t.push([f,d])}}});let n=[],i=new Set;for(let r=0;r<t.length;r++){if(i.has(r))continue;i.add(r);let o=[t[r][0]],a=t[r][1];for(let l=0;l<t.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=t.findIndex(([u],h)=>!i.has(h)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;i.add(c),o.push(t[c][0]),a=t[c][1]}o.length>=3&&qh(o)>1e-6&&n.push(o)}return n}function $h(s){let e=s.filter(r=>r.length>=3),t=e.map((r,o)=>o),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let r=0;r<e.length;r++)for(let o=r+1;o<e.length;o++)n(r)!==n(o)&&n1(e[r],e[o])&&(t[n(o)]=n(r));let i=new Map;return e.forEach((r,o)=>i.set(n(o),[...i.get(n(o))??[],r])),[...i.values()].flatMap(r=>r.length===1?r:i1(r))}function s1(s,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=n*n+i*i,o=r?Math.max(0,Math.min(1,((s[0]-e[0])*n+(s[1]-e[1])*i)/r)):0;return Math.hypot(s[0]-e[0]-n*o,s[1]-e[1]-i*o)}function Ym(s,e,t=.03){return s.every(n=>mt(n,e)||e.some((i,r)=>s1(n,i,e[(r+1)%e.length])<=t))}function $m(s,e){let t=qh(s)>=0?s:[...s].reverse(),n=(i,r)=>{let o=Math.hypot(r[0]-i[0],r[1]-i[1])||1;return[-(r[1]-i[1])/o,(r[0]-i[0])/o]};return t.map((i,r)=>{let o=n(t[(r-1+t.length)%t.length],i),a=n(i,t[(r+1)%t.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?i:[i[0]+(o[0]+a[0])/l*e,i[1]+(o[1]+a[1])/l*e]})}var Ns=He(3662079,.95),Kh=He(3662079,1),es=He(5995775,.34),Km=He(5995775,.22),kr=[-.55,.83],rt=-1,wc=16,Os=32,Zm=48,Zh=64,gt=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,i,r=i,o=i,a,l=rt,c=[0,1]){this.p.push(...e,...t,...n),this.c.push(i.r,i.g,i.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Ge;return e.setAttribute("position",new Ue(this.p,3)),e.setAttribute("color",new Ue(this.c,3)),e.setAttribute("fold",new Ue(this.f,1)),this.uv&&e.setAttribute("uv",new Ue(this.uv,2)),this.tile&&e.setAttribute("tile",new Ue(this.tile,2)),e.computeBoundingSphere(),e}},cn=class{p=[];c=[];f=[];seg(e,t,n=Ns,i=rt){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(i,i)}segSplit(e,t,n,i,r){let[o,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=i+1e-6||r<0)return this.seg(o,a,n,rt);if(o[1]>=i-1e-6)return this.seg(o,a,n,r);let l=(i-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,i,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,rt),this.seg(c,a,n,r)}geometry(){let e=new Ge;return e.setAttribute("position",new Ue(this.p,3)),e.setAttribute("color",new Ue(this.c,3)),e.setAttribute("fold",new Ue(this.f,1)),e}};function Jm(s,e,t,n){let r=s.uv?2:0,o=(h,f)=>{let d=h*3+f;return{p:s.p.slice(d*3,d*3+3),c:s.c.slice(d*3,d*3+3),uv:s.uv?s.uv.slice(d*2,d*2+2):null,tile:s.tile?s.tile.slice(d*2,d*2+2):null}},a=(h,f,d)=>({p:h.p.map((m,x)=>m+(f.p[x]-m)*d),c:h.c.map((m,x)=>m+(f.c[x]-m)*d),uv:h.uv&&f.uv?h.uv.map((m,x)=>m+(f.uv[x]-m)*d):null,tile:h.tile}),l=(h,f,d)=>{for(let m=0;m<3;m++){let x=h*3+m;for(let g=0;g<3;g++)s.p[x*3+g]=f[m].p[g],s.c[x*3+g]=f[m].c[g];if(s.uv&&f[m].uv)for(let g=0;g<r;g++)s.uv[x*2+g]=f[m].uv[g];if(s.tile&&f[m].tile)for(let g=0;g<2;g++)s.tile[x*2+g]=f[m].tile[g];s.f[x]=d}},c=(h,f)=>{let d=s.p.length/9;for(let m of h)s.p.push(...m.p),s.c.push(...m.c),s.f.push(f),s.uv?.push(...m.uv??[.5,.5]),s.tile?.push(...m.tile??[0,1]);return d},u=s.p.length/9;for(let h=e;h<u;h++){let f=[o(h,0),o(h,1),o(h,2)],d=f.map(_=>_.p[1]>t+1e-6),m=f.map(_=>_.p[1]<t-1e-6);if(!d.some(Boolean))continue;if(!m.some(Boolean)){for(let _=0;_<3;_++)s.f[h*3+_]=n;continue}let x=s.f[h*3],g=(_,w)=>a(_,w,(t-_.p[1])/(w.p[1]-_.p[1])),p=d.filter(Boolean).length,y=p===1?d.indexOf(!0):d.indexOf(!1),M=f[y],b=f[(y+1)%3],v=f[(y+2)%3],S=g(M,b),E=g(v,M);p===1?(l(h,[M,S,E],n),c([S,b,v],x),c([S,v,E],x)):(l(h,[M,S,E],x),c([S,b,v],n),c([S,v,E],n))}}function jm(s,e,t,n){let i=s.p.length/6;for(let r=e;r<i;r++){let o=s.p.slice(r*6,r*6+3),a=s.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){s.f[r*2]=n,s.f[r*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)s.p[r*6+d]=l[d],s.p[r*6+3+d]=h[d];let f=s.c.slice(r*6,r*6+3);s.p.push(...h,...c),s.c.push(...f,...f),s.f.push(n,n)}}var Lt=Math.PI/180;function He(s,e){let t=new j(s).multiplyScalar(e);return t.r=Math.min(1,t.r),t.g=Math.min(1,t.g),t.b=Math.min(1,t.b),t}function r1(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e}function Qo(s,e=[]){let t=s.map(([n,i])=>new Oe(n,i));return _o.triangulateShape(t,e.map(n=>n.map(([i,r])=>new Oe(i,r))))}function Qm(s,e,t,n,i,r,o){let a=new j(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let m=e[d],x=e[(d+1)%4],g=t[d],p=t[(d+1)%4],y=x[0]-m[0],M=x[1]-m[1],b=Math.hypot(y,M);if(b<1e-6)continue;let S=.8+.28*((M/b*kr[0]-y/b*kr[1]+1)/2),E=(g[0]+p[0]-m[0]-x[0])/2*(-M/b)+(g[1]+p[1]-m[1]-x[1])/2*(y/b),_=Math.max(0,Math.min(1,E/Math.max(1e-6,Math.hypot(E,i-n)))),w=He(r,l(n)*S).lerp(a,_),R=He(r,l(i)*S).lerp(a,_);s.tri([m[0],n,m[1]],[g[0],i,g[1]],[p[0],i,p[1]],w,R,R),s.tri([m[0],n,m[1]],[p[0],i,p[1]],[x[0],n,x[1]],w,R,w)}let[c,u,h,f]=t;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(s.tri([c[0],i,c[1]],[h[0],i,h[1]],[u[0],i,u[1]],a),s.tri([c[0],i,c[1]],[f[0],i,f[1]],[h[0],i,h[1]],a))}function e0(s,e,t,n){let i=e.length;if(i<2)return;let r=e[0].length,o=new j(n),a=(m,x)=>[m[0]-x[0],m[1]-x[1],m[2]-x[2]],l=(m,x)=>[m[1]*x[2]-m[2]*x[1],m[2]*x[0]-m[0]*x[2],m[0]*x[1]-m[1]*x[0]],c=m=>{let x=Math.hypot(m[0],m[1],m[2])||1;return[m[0]/x,m[1]/x,m[2]/x]},u=e.map(m=>[0,1,2].map(x=>m.reduce((g,p)=>g+p[x],0)/r)),h=e.map((m,x)=>m.map((g,p)=>{let y=a(e[Math.min(i-1,x+1)][p],e[Math.max(0,x-1)][p]),M=a(m[(p+1)%r],m[(p+r-1)%r]),b=c(l(y,M)),v=a(g,u[x]);return b[0]*v[0]+b[1]*v[1]+b[2]*v[2]<0&&(b=[-b[0],-b[1],-b[2]]),b})),f=(m,x)=>{let g=.5+.5*Math.min(1,Math.max(0,m[1]/1.6)),p=(x[0]*kr[0]+x[2]*kr[1]+1)/2;return He(t,g*(.8+.28*p)).lerp(o,Math.max(0,x[1])*.9)},d=(m,x,g,p,y,M,b)=>{let v=l(a(x,m),a(g,m));v[0]*p[0]+v[1]*p[1]+v[2]*p[2]>=0?s.tri(m,x,g,y,M,b):s.tri(m,g,x,y,b,M)};for(let m=0;m+1<i;m++)for(let x=0;x<r;x++){let g=(x+1)%r,p=e[m][x],y=e[m][g],M=e[m+1][g],b=e[m+1][x],v=h[m][x],S=h[m][g],E=h[m+1][g],_=h[m+1][x],w=f(p,v),R=f(y,S),T=f(M,E),L=f(b,_),I=[v[0]+S[0]+E[0]+_[0],v[1]+S[1]+E[1]+_[1],v[2]+S[2]+E[2]+_[2]];d(p,y,M,I,w,R,T),d(p,M,b,I,w,T,L)}for(let[m,x]of[[0,-1],[i-1,1]]){let g=e[m],p=u[m],y=a(e[m===0?1:i-2][0],g[0]),M=c([y[0]*-x,y[1]*-x,y[2]*-x]),b=f(p,M);for(let v=0;v<r;v++)d(g[v],g[(v+1)%r],p,M,b,b,b)}}function t0(s,e,t,n,i,r,o,a,l,c){let u=new j(l),h=[];for(let d=0;d<c;d++){let m=d/c*Math.PI*2;h.push({y:r+Math.cos(m)*o,s:i+Math.sin(m)*o})}let f=(d,m)=>{let x=e(d,h[m%c].s);return[x[0],h[m%c].y,x[1]]};for(let d=0;d<c;d++){let m=(d+.5)/c*Math.PI*2,x=He(a,.62+.4*Math.max(0,Math.cos(m)));s.tri(f(t,d),f(n,d+1),f(n,d),x),s.tri(f(t,d),f(t,d+1),f(n,d+1),x)}for(let d of[t,n]){let m=e(d,i),x=[m[0],r,m[1]];for(let g=0;g<c;g++)s.tri(x,f(d,g),f(d,g+1),u)}}function Ft(s,e,t,n,i,r,o={}){let a=typeof n=="number"?()=>n:m=>Math.max(t+.002,n(m[0],m[1])),l=o.aoFrom??t,c=o.fold??rt,u=m=>.5+.5*Math.min(1,Math.max(0,(m-l)/1.6)),h=(o.holes??[]).map(m=>r1(m)>0?[...m].reverse():m),f=h.length?[...e,...h.flat()]:e,d=o.topFace===!1&&!o.bottom?[]:Qo(e,h);if(o.topFace!==!1){let m=new j(r);for(let[x,g,p]of d){let y=f[x],M=f[g],b=f[p];s.tri([y[0],a(y),y[1]],[b[0],a(b),b[1]],[M[0],a(M),M[1]],m,m,m,void 0,o.topFold??c)}}if(o.bottom){let m=He(i,.55);for(let[x,g,p]of d){let y=f[x],M=f[g],b=f[p];s.tri([y[0],t,y[1]],[M[0],t,M[1]],[b[0],t,b[1]],m,m,m,void 0,c)}}for(let m of[e,...h])for(let x=0;x<m.length;x++){let g=m[x],p=m[(x+1)%m.length],y=p[0]-g[0],M=p[1]-g[1],b=Math.hypot(y,M);if(b<1e-6||o.skipSide?.(g,p))continue;let S=.8+.28*((M/b*kr[0]-y/b*kr[1]+1)/2),E=a(g),_=a(p),w=He(i,u(t)*S),R=He(i,u(E)*S),T=He(i,u(_)*S);s.tri([g[0],t,g[1]],[g[0],E,g[1]],[p[0],_,p[1]],w,R,T,void 0,c),s.tri([g[0],t,g[1]],[p[0],_,p[1]],[p[0],t,p[1]],w,T,w,void 0,c)}}var D={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},Me=He(5995775,.3),ct=He(5995775,.17),nt=He(3662079,.45),ea=class s{buf;lines;tf;mirrored;constructor(e,t,n){this.buf=e,this.lines=t,this.tf=n,this.mirrored=a0(n)}rotated(e,t,n){let i=n*Lt,r=Math.cos(i),o=Math.sin(i),a=this.tf;return new s(this.buf,this.lines,(l,c)=>a(e+(l-e)*r-(c-t)*o,t+(l-e)*o+(c-t)*r))}box(e,t,n,i,r,o,a,l=a,c=null){if(t-e<1e-4||o-r<1e-4||i-n<1e-4)return;let u=[this.tf(e,r),this.tf(e,o),this.tf(t,o),this.tf(t,r)];Ft(this.buf,Jh(u),n,i,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,i,c)}loft(e,t,n,i,r,o=r,a=null){if(i-n<1e-4)return;let l=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])],c=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])];if(l!==Jh(l)&&(l.reverse(),c.reverse()),Qm(this.buf,l,c,n,i,r,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],i,i,a),this.line(l[u],c[u],n,i,a)}sweep(e,t,n=t,i=16,r=2.6,o=null){if(e.length<2)return;let a=e.map(l=>{let c=Math.max(.004,(l.y1-l.y0)/2),u=Math.max(.004,l.hw),h=(l.y0+l.y1)/2,f=[];for(let d=0;d<i;d++){let m=d/i*Math.PI*2,x=Math.cos(m),g=Math.sin(m),[p,y]=this.tf(l.x+u*Math.sign(x)*Math.abs(x)**(2/r),l.z);f.push([p,h+c*Math.sign(g)*Math.abs(g)**(2/r),y])}return f});if(e0(this.buf,a,t,n),o){let l=Math.round(i/4);for(let c=0;c+1<a.length;c++){let u=a[c][l],h=a[c+1][l];this.lines.seg(u,h,o,rt)}}}pad(e,t,n,i,r,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(t-e)/2-.005,(o-r)/2-.005,(i-n)/2),c<.008)return this.box(e,t,n,i,r,o,a,l,u);this.loft([e+c,t-c,r+c,o-c],[e,t,r,o],n,n+c,a),i-n-2*c>.005&&this.box(e,t,n+c,i-c,r,o,a,a,u),this.loft([e,t,r,o],[e+c,t-c,r+c,o-c],i-c,i,a,l)}lyingCyl(e,t,n,i,r,o,a,l,c=l,u=12,h=null){let f=Math.min(a,r-i)/2;if(f<1e-4||o<1e-4)return;let d=(i+r)/2,m=e==="x"?t:n,x=e==="x"?n:t,g=(y,M)=>e==="x"?this.tf(y,M):this.tf(M,y),p=this.buf.p.length;if(t0(this.buf,g,m-o/2,m+o/2,x,d,f,l,c,u),this.mirrored&&tf(this.buf,p),h)for(let y of[m-o/2,m+o/2])for(let M=0;M<u;M++){let b=M/u*Math.PI*2,v=(M+1)/u*Math.PI*2;this.line(g(y,x+Math.sin(b)*f),g(y,x+Math.sin(v)*f),d+Math.cos(b)*f,d+Math.cos(v)*f,h)}}cyl(e,t,n,i,r,o,a=o,l=10,c=null){let u=[];for(let h=0;h<l;h++){let f=h/l*Math.PI*2;u.push(this.tf(e+Math.cos(f)*n,t+Math.sin(f)*n))}if(Ft(this.buf,Jh(u),i,r,o,a,{aoFrom:0,bottom:i>.05}),c)for(let h=0;h<l;h++)this.line(u[h],u[(h+1)%l],r,r,c)}seg(e,t,n,i,r,o,a=Me){this.line(this.tf(e,n),this.tf(i,o),t,r,a)}line(e,t,n,i,r){this.lines.seg([e[0],n,e[1]],[t[0],i,t[1]],r,rt)}outline(e,t,n,i){for(let r=0;r<4;r++){let o=e[r],a=e[(r+1)%4];this.line(o,a,n,n,i),this.line(o,o,t,n,i)}}};function a0(s){let e=s(0,0),t=s(1,0),n=s(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Jh(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e>=0?s:[...s].reverse()}function Us(s,e,t,n,i,r,o=D.metal,a=!1){let l=e/2-r-i,c=t/2-r-i;for(let u of[-1,1])for(let h of[-1,1]){let f=u*l,d=h*c;a?s.loft([f-i*.3,f+i*.3,d-i*.3,d+i*.3],[f-i/2,f+i/2,d-i/2,d+i/2],0,n,o):s.box(f-i/2,f+i/2,0,n,d-i/2,d+i/2,o)}}function ta(s,e,t,n,i,r,o,a=null,l=!1){let c=(t-e)/o;for(let u=1;u<o;u++){let h=e+c*u;s.seg(h,n,r,h,i,r,ct)}for(let u=0;u<o;u++){let h=e+c*(u+.5),f=a??i-.08;if(l)s.seg(h-Math.min(.1,c/4),f,r+.012,h+Math.min(.1,c/4),f,r+.012,nt);else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;s.seg(d,f-.08,r+.012,d,f+.08,r+.012,nt)}}}function n0(s,e,t,n,i){let r=-e/2,o=e/2,a=-t/2,l=t/2,c=Math.min(.2,e*.12),u=n*.5,h=Math.min(.24,t*.28);Us(s,e,t,.07,.05,.05,D.wood,!0),s.pad(r,o,.07,u-.08,a+.02,l,D.fabric,D.fabricTop,.04,Me),s.loft([r,o,a,a+h],[r+.01,o-.01,a,a+h*.5],u-.08,n,D.fabric,D.fabricTop,Me),s.pad(r,r+c,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me),s.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,D.fabric,D.fabricTop,.04,Me);let d=(o-c-(r+c))/i;for(let m=0;m<i;m++){let x=r+c+d*m+.02,g=x+d-.04;s.pad(x,g,u-.08,u+.05,a+h+.02,l-.06,D.cushion,D.cushion,.04),s.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,D.cushion)}}function o1(s,e,t,n){let i=-t/2,r=t/2,o=-e/2,a=e/2,l=Math.min(.32,n*.36);Us(s,e,t,.08,.06,.03,D.wood,!0),s.box(o,a,.08,l,i+.06,r,D.wood,D.woodTop,Me),s.pad(o+.03,a-.03,l,l+.2,i+.08,r-.03,D.white,D.whiteTop,.03),s.box(o,a,.08,n-.05,i,i+.07,D.wood,D.woodTop,Me),s.box(o,a,n-.05,n,i,i+.09,D.wood,D.woodTop,ct);let c=l+.2,u=i+(t-.1)*.36;s.pad(o+.01,a-.01,c-.1,c+.05,u,r-.01,D.cushion,D.fabricTop,.025,ct),s.lyingCyl("x",0,u+.05,c-.02,c+.09,e-.02,.1,D.cushion,D.fabricTop,8);let h=e>1.2?2:1,f=(e-.2)/h;for(let d=0;d<h;d++){let m=o+.1+f*d,x=i+.12,g=Math.min(.42,t*.2),p=.1;s.loft([m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],[m+.03,m+f-.03,x,x+g],c,c+.06,D.whiteTop),s.loft([m+.03,m+f-.03,x,x+g],[m+.03+p,m+f-.03-p,x+p*.5,x+g-p*.5],c+.06,c+.12,D.whiteTop,D.whiteTop,ct)}}function a1(s,e,t,n){let i=Math.min(.46,n*.52);Us(s,e,t,i-.04,.035,.02,D.wood,!0),s.box(-e/2,e/2,i-.04,i,-t/2,t/2,D.wood,D.woodTop,Me),s.pad(-e/2+.02,e/2-.02,i,i+.04,-t/2+.05,t/2-.03,D.cushion,D.cushion,.015),s.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],i,n,D.wood,D.woodTop,Me)}function l1(s,e,t,n){Us(s,e,t,n-.04,.06,.05,D.wood,!0),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,nt),s.box(-e/2+.08,e/2-.08,n-.1,n-.04,-t/2+.08,t/2-.08,D.body)}function c1(s,e,t,n){let i=-e/2,r=e/2;s.box(i,r,n-.035,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(i,i+.03,0,n-.035,-t/2+.03,t/2-.03,D.metal);let o=Math.min(.42,e*.32);s.box(r-o,r,0,n-.035,-t/2+.03,t/2-.02,D.body,D.bodyTop,Me);let a=t/2-.02;for(let l of[n*.35,n*.66])s.seg(r-o,l,a,r,l,a,ct);for(let l of[n*.2,n*.5,n*.82])s.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,nt);s.box(-.3,.3,n+.08,n+.42,-t/2+.08,-t/2+.11,D.dark,D.dark,nt),s.box(-.03,.03,n,n+.1,-t/2+.09,-t/2+.13,D.metal)}function ts(s,e,t,n,i,r=null,o=!1){s.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),s.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),ta(s,-e/2,e/2,.08,n,t/2-.02,i,r,o)}function u1(s,e,t,n){s.box(-e/2,-e/2+.025,0,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(e/2-.025,e/2,0,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(-e/2+.025,e/2-.025,0,n,-t/2,-t/2+.015,D.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(s.box(-e/2+.025,e/2-.025,a,a+.025,-t/2+.015,t/2,D.wood,D.woodTop,ct),o<r){let l=-e/2+.025+.04,c=o*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,h=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&s.box(l,l+u,a+.025,a+.025+h,-t/2+.04,t/2-.05,c%3?D.fabric:D.cushion,D.fabricTop),l+=u+.006,c++}}}}function h1(s,e,t,n){let i=Math.max(1,Math.round(e/.6));ts(s,e,t-.02,n-.04,i,n-.2),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function f1(s,e,t,n){s.box(-e/2,e/2,0,n,-t/2,t/2,D.white,D.whiteTop,Me);let i=n*.62;s.seg(-e/2,i,t/2,e/2,i,t/2,ct);let r=e/2-.06;s.seg(r,i+.08,t/2+.015,r,i+.4,t/2+.015,nt),s.seg(r,i-.4,t/2+.015,r,i-.08,t/2+.015,nt)}function d1(s,e,t,n){let i=t/2-l0;s.box(-e/2,e/2,.02,n,-t/2,i,D.body,D.bodyTop,Me),s.box(-e/2+.05,e/2-.05,0,.02,-t/2+.05,i-.05,D.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(s.seg(-e/2+.03,r,i+.001,-.03,r,i+.001,ct),s.seg(.03,r,i+.001,e/2-.03,r,i+.001,ct))}var l0=.06;function c0(s,e,t,n,i){let r=s.p.length;p1(s,e,t,n,i),e.mirror&&tf(s,r)}function p1(s,e,t,n,i){let r=e.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(b,v)=>[e.x+l*b*o-v*a,e.z+l*b*a+v*o],u=t+.05,h=t+e.h-.02,f=new j(.75,.1,.14),d=new j(D.dark),m=new j(D.accent),x=e.w/2-.006,g=(b,v,S)=>{let E=S/p,_=new j(2043212).lerp(f,E),w=new j(D.body).lerp(f,E*.8),R=Math.cos(S),T=Math.sin(S),L=(F,N)=>c(b+v*(F*R-N*T),e.d/2+F*T+N*R),I=(F,N,U,V)=>{let[k,B,H,ee]=F;s.tri([k[0],N,k[1]],[B[0],N,B[1]],[H[0],U,H[1]],V),s.tri([k[0],N,k[1]],[H[0],U,H[1]],[ee[0],U,ee[1]],V)},C=(F,N,U,V,k,B,H,ee=H)=>{let Q=[L(F,B),L(N,B),L(N,k),L(F,k)];I([Q[0],Q[1],Q[1],Q[0]],U,V,ee),I([Q[3],Q[2],Q[2],Q[3]],U,V,H),I([Q[0],Q[3],Q[3],Q[0]],U,V,H),I([Q[1],Q[2],Q[2],Q[1]],U,V,H),I([Q[0],Q[1],Q[2],Q[3]],V,V,H),I([Q[3],Q[2],Q[1],Q[0]],U,U,H)};return C(0,x,u,h,-l0,0,w,_),C(x-.05,x-.03,t+e.h*.45,t+e.h*.75,.005,.025,m),C},p=1.83;g(-e.w/2,1,n*p)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,d),g(e.w/2,-1,i*p)(.06,x-.06,t+e.h*.52,t+e.h*.86,.001,.005,d)}function m1(s,e,t,n){ts(s,e,t-.02,n-.04,1,n-.24,!0),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.dark,D.dark,Me);for(let[i,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=i*e/.6,l=r*t/.62;s.cyl(a,l,o,n,n+.004,D.dark,1451583,12,nt)}}function g1(s,e,t,n){ts(s,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let i=Math.min(.5,e-.2);s.box(-e/2,-i/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),s.box(i/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me),s.box(-i/2,i/2,n-.04,n,-t/2,-t/2+.1,D.whiteTop,D.whiteTop),s.box(-i/2,i/2,n-.04,n,t/2-.08,t/2,D.whiteTop,D.whiteTop),s.box(-i/2,i/2,n-.2,n-.17,-t/2+.1,t/2-.08,D.metal,D.metal,nt),s.cyl(0,-t/2+.05,.02,n,n+.28,D.metal,D.metal,8),s.box(-.015,.015,n+.24,n+.28,-t/2+.05,-t/2+.22,D.metal)}function x1(s,e,t,n){s.box(-e/2,e/2,0,n-.02,-t/2,t/2,D.white,D.whiteTop,Me),s.box(-e/2,e/2,n-.02,n,-t/2,-t/2+.07,D.whiteTop),s.box(-e/2,e/2,n-.02,n,t/2-.07,t/2,D.whiteTop),s.box(-e/2,-e/2+.07,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),s.box(e/2-.07,e/2,n-.02,n,-t/2+.07,t/2-.07,D.whiteTop),s.box(-e/2+.07,e/2-.07,n-.03,n-.02,-t/2+.07,t/2-.07,D.glass,D.glass,nt),s.cyl(-e/2+.04,0,.02,n,n+.12,D.metal,D.metal,8)}function b1(s,e,t,n){s.box(-e/2,e/2,0,.05,-t/2,t/2,D.whiteTop,D.whiteTop,Me),s.cyl(0,0,.04,.05,.052,D.metal,D.metal,8);for(let[i,r,o,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])s.seg(i,.05,r,o,.05,a,nt),s.seg(i,n,r,o,n,a,nt),s.seg(o,.05,a,o,n,a,nt);s.cyl(-e/2+.06,-t/2+.06,.015,.05,n-.05,D.metal,D.metal,6),s.cyl(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,D.metal,D.metal,12,nt)}function _1(s,e,t,n){let i=Math.min(.18,t*.3);s.box(-e/2,e/2,.45,n,-t/2,-t/2+i,D.white,D.whiteTop,Me),s.box(-e*.3,e*.3,0,.36,-t/2+i-.02,t/2-.12,D.white,D.whiteTop),s.cyl(0,t/2-.26,Math.min(e/2,.19),.36,.41,D.white,D.whiteTop,12,Me),s.box(-e/2+.02,e/2-.02,.41,.43,-t/2+i,-t/2+i+.05,D.whiteTop)}function y1(s,e,t,n){ts(s,e,t-.02,n-.12,e>.8?2:1,n-.3),s.box(-e/2,e/2,n-.12,n,-t/2,t/2,D.white,D.whiteTop,Me),s.box(-e/2+.07,e/2-.07,n-.005,n,-t/2+.12,t/2-.06,D.glass,D.glass,nt),s.cyl(0,-t/2+.06,.018,n,n+.2,D.metal,D.metal,8),s.box(-e/2+.04,e/2-.04,n+.35,n+1,-t/2,-t/2+.02,D.glass,D.glass,nt)}function v1(s,e,t,n){ts(s,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let i=Math.min(e*.8,1.45),r=i*.56;s.box(-.1,.1,n,n+.02,-t/2+.08,-t/2+.24,D.metal),s.box(-.02,.02,n+.02,n+.12,-t/2+.14,-t/2+.18,D.metal),s.box(-i/2,i/2,n+.1,n+.1+r,-t/2+.12,-t/2+.16,D.dark,D.dark,nt)}function M1(s,e,t,n){let i=Math.min(e,t)/2,r=Math.min(.4,n*.34);s.cyl(0,0,i*.62,0,r,D.pot,D.pot,10,Me),s.cyl(0,0,i*.08,r,n*.55,D.wood,D.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=i*(.95-.55*l),u=r+(n-r)*(.18+.2*a);s.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-r)*.16,D.plant,D.plantTop,8,a===o-1?ct:null)}}function S1(s,e,t){s.box(-e/2,e/2,0,.012,-t/2,t/2,D.fabric,D.fabricTop);let n=Math.min(.12,Math.min(e,t)*.08);for(let[i,r,o,a]of[[-e/2+n,-t/2+n,e/2-n,-t/2+n],[e/2-n,-t/2+n,e/2-n,t/2-n],[e/2-n,t/2-n,-e/2+n,t/2-n],[-e/2+n,t/2-n,-e/2+n,-t/2+n]])s.seg(i,.014,r,o,.014,a,Me)}function w1(s,e,t,n){let i=Math.max(3,Math.round(n/.18)),r=n/i,o=t/i;for(let u=0;u<i;u++){let h=t/2-o*u,f=h-o,d=r*(u+1);s.box(-e/2,e/2,0,d,f,h,D.wood,D.woodTop),s.seg(-e/2,d,h,e/2,d,h,Me)}s.seg(-e/2,0,t/2,-e/2,r,t/2,Me);for(let u of[-e/2,e/2])s.seg(u,r,t/2,u,n,-t/2+o,ct);let a=.9,l=e/2-.03,c=Math.max(1,i-4);s.seg(l,r+a,t/2-o/2,l,r*c+a,t/2-o*(c-.5),nt);for(let u=0;u<c;u+=3){let h=t/2-o*(u+.5),f=r*(u+1);s.seg(l,f,h,l,f+a,h,ct)}}function T1(s,e,t,n){Us(s,e,t,.12,.03,.04,D.metal),s.box(-e/2,e/2,.12,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),ta(s,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function A1(s,e,t,n){s.box(-e/2,e/2,.06,n,-t/2,t/2-.02,D.wood,D.woodTop,Me),s.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.06,D.dark);let i=Math.max(3,Math.round((n-.06)/.22)),r=t/2-.02;for(let o=1;o<i;o++){let a=.06+(n-.06)/i*o;s.seg(-e/2,a,r,e/2,a,r,ct)}for(let o=0;o<i;o++){let a=.06+(n-.06)/i*(o+.5);s.seg(-.08,a,r+.012,.08,a,r+.012,nt)}}function E1(s,e,t,n){s.box(-e/2,e/2,0,.45,-t/2,t/2,D.wood,D.woodTop,Me),ta(s,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),s.box(-e/2,e/2,.45,n,-t/2,-t/2+.03,D.body,D.bodyTop,Me),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.wood,D.woodTop,Me);let i=Math.max(2,Math.round(e/.25));for(let r=0;r<i;r++){let o=-e/2+e/i*(r+.5);s.box(o-.015,o+.015,n-.32,n-.28,-t/2+.03,-t/2+.1,D.metal,D.metal)}}function i0(s,e,t,n,i){let o=Math.min(.5,i?t*.4:t),a=.08;s.box(-e/2,e/2,0,.45-.06,-t/2,-t/2+o,D.wood,D.woodTop,Me),s.box(-e/2,e/2,0,n,-t/2,-t/2+a,D.wood,D.woodTop,Me),s.box(-e/2+(i?o:.02),e/2-.02,.45-.06,.45+.02,-t/2+a,-t/2+o,D.cushion,D.cushion,ct),i&&(s.box(-e/2,-e/2+o,0,.45-.06,-t/2+o,t/2,D.wood,D.woodTop,Me),s.box(-e/2,-e/2+a,0,n,-t/2+a,t/2,D.wood,D.woodTop,Me),s.box(-e/2+a,-e/2+o,.45-.06,.45+.02,-t/2+a,t/2-.02,D.cushion,D.cushion,ct))}function R1(s,e,t,n){let i=Math.min(e,t)/2;s.cyl(0,0,i*.8,0,.02,D.metal,D.metal,12),s.cyl(0,0,.025,.02,n-.05,D.metal,D.metal,6),s.cyl(0,0,i*.75,n*.35,n*.35+.015,D.metal,D.metal,12,ct),s.cyl(0,0,i,n-.05,n,D.cushion,D.fabricTop,14,Me)}function C1(s,e,t,n){let i=Math.min(e,t)/2;s.box(-i,i,.04,.08,-.03,.03,D.metal),s.box(-.03,.03,.04,.08,-i,i,D.metal),s.cyl(0,0,.06,.02,.1,D.dark,D.dark,8),s.cyl(0,0,.025,.1,.44,D.metal,D.metal,6),s.box(-i*.75,i*.75,.44,.52,-i*.7,i*.75,D.fabric,D.cushion,Me),s.box(-i*.7,i*.7,.58,n,-i*.78,-i*.62,D.fabric,D.fabricTop,Me),s.box(-.03,.03,.5,.62,-i*.72,-i*.62,D.metal)}function I1(s,e,t,n){Us(s,e,t,.08,.04,.05,D.wood),s.box(-e/2,e/2,.08,n,-t/2,t/2,D.fabric,D.cushion,Me)}function P1(s,e,t,n){s.box(-e/2,e/2,1.45,1.45+n,-t/2,t/2-.02,D.body,D.bodyTop,Me),ta(s,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function L1(s,e,t,n){s.box(-e/2,e/2,.02,n,-t/2,t/2-.02,D.body,D.bodyTop,Me),s.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark);let i=t/2-.02;s.box(-e/2+.03,e/2-.03,.85,1.45,i,i+.01,D.dark,D.dark,nt),s.seg(-e/2+.08,1.4,i+.02,e/2-.08,1.4,i+.02,nt);for(let r of[.85,1.45])s.seg(-e/2,r,i,e/2,r,i,ct);s.seg(e/2-.06,.5,i+.012,e/2-.06,.7,i+.012,nt),s.seg(e/2-.06,1.6,i+.012,e/2-.06,1.8,i+.012,nt)}function F1(s,e,t,n){let i=t-.3;s.box(-e/2+.05,e/2-.05,.08,n-.04,-t/2+.02,-t/2+i,D.body,D.bodyTop,Me),s.box(-e/2+.07,e/2-.07,0,.08,-t/2+.04,-t/2+i-.04,D.dark),ta(s,-e/2+.05,e/2-.05,.08,n-.04,-t/2+i,Math.max(2,Math.round(e/.6)),n-.2),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function D1(s,e,t,n){s.box(-e/2,e/2,.02,n-.04,-t/2,t/2-.02,D.body,D.bodyTop,Me),s.box(-e/2+.02,e/2-.02,0,.08,-t/2+.02,t/2-.06,D.dark),s.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,nt),s.box(-e/2,e/2,n-.04,n,-t/2,t/2,D.whiteTop,D.whiteTop,Me)}function s0(s,e,t,n,i){s.box(-e/2,e/2,0,n,-t/2,t/2-.02,D.white,D.whiteTop,Me);let r=t/2-.012;s.seg(-e/2,n-.14,r,e/2,n-.14,r,ct),s.seg(e/2-.16,n-.07,r,e/2-.08,n-.07,r,nt);let o=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;s.seg(Math.cos(u)*a,o+Math.sin(u)*a,r,Math.cos(h)*a,o+Math.sin(h)*a,r,nt),i||s.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,r,ct)}}function N1(s,e,t,n){for(let o of[-1,1])for(let a of[-1,1])s.box(o*(e/2)-(o>0?.05:0),o*(e/2)+(o<0?.05:0),0,n,a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0),D.wood,D.woodTop);for(let o of[.25,n-.55])s.box(-e/2,e/2,o,o+.08,-t/2,t/2,D.wood,D.woodTop,Me),s.box(-e/2+.04,e/2-.04,o+.08,o+.24,-t/2+.05,t/2-.05,D.white,D.whiteTop,ct),s.box(-e/2+.05,e/2-.05,o+.24,o+.33,-t/2+.08,-t/2+.4,D.whiteTop,D.whiteTop);s.box(-e/2,e/2,n-.2,n-.15,t/2-.05,t/2,D.wood,D.woodTop);let r=e/2-.35;for(let o of[r-.18,r+.18])s.seg(o,0,t/2+.02,o,n-.15,t/2+.02,Me);for(let o=.3;o<n-.2;o+=.28)s.seg(r-.18,o,t/2+.02,r+.18,o,t/2+.02,ct)}function O1(s,e,t,n){let i=Math.min(e,t)/2;s.cyl(0,0,i*.4,0,.03,D.metal,D.metal,12),s.cyl(0,0,.05,.03,n-.04,D.wood,D.wood,8),s.cyl(0,0,i,n-.04,n,D.wood,D.woodTop,20,Me)}function U1(s,e,t,n){Us(s,e,t,n-.03,.04,.03,D.wood),s.box(-e/2,e/2,n-.03,n,-t/2,t/2,D.wood,D.woodTop,Me),s.box(-e/2+.05,e/2-.05,.1,.13,-t/2+.05,t/2-.05,D.body,D.bodyTop,ct)}function B1(s,e,t,n){let i=1.3-n/2;s.box(-.12,.12,i+n*.3,i+n*.7,-t/2,-t/2+.03,D.metal),s.box(-e/2,e/2,i,i+n,-t/2+.03,t/2,D.dark,D.dark,nt)}function k1(s,e,t,n){let i=Qh;s.box(-e/2+.05,-e/2+.08,0,i,-t/2,-t/2+.03,D.metal),s.box(e/2-.08,e/2-.05,0,i,-t/2,-t/2+.03,D.metal),s.box(-e/2,e/2,i,i+n,-t/2+.02,t/2,D.white,D.whiteTop,Me);let r=Math.max(3,Math.round(e/.1));for(let o=1;o<r;o++){let a=-e/2+e/r*o;s.seg(a,i+.03,t/2+.002,a,i+n-.03,t/2+.002,ct)}}function r0(s,e,t,n,i,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;s.seg(e+Math.cos(a)*n,t+Math.sin(a)*n,i,e+Math.cos(l)*n,t+Math.sin(l)*n,i,nt)}}function z1(s,e,t,n,i){let o=t/2;if(i==="slim"){s.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.dark,D.body,Me),s.seg(-e*.25,1.1+n*.15,o+.004,-e*.25,1.1+n*.85,o+.004,nt),s.box(-e*.1,e*.3,1.1+n*.7,1.1+n*.85,o,o+.005,D.dark);return}if(i==="hybrid"){s.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),r0(s,0,1.1+n*.66,Math.min(e,n)*.22,o+.004),s.seg(-e*.08,1.1+n*.66,o+.005,e*.08,1.1+n*.66,o+.005,nt);for(let a of[-1,1])r0(s,a*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12);return}s.box(-e/2,e/2,1.1,1.1+n,-t/2,t/2,D.white,D.whiteTop,Me),s.box(-e*.28,e*.28,1.1+n*.58,1.1+n*.82,t/2,t/2+.006,D.dark),s.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,nt);for(let a of[-1,1])for(let l=1;l<6;l++)s.seg(a*e/2+a*.002,1.1+n*l/6,-t/2+.03,a*e/2+a*.002,1.1+n*l/6,t/2-.03,ct)}function V1(s,e,t,n){s.box(-e/2,e/2,0,n,-t/2,t/2,D.dark,D.body,Me),s.box(-e/2-.01,e/2+.01,n,n+.03,-t/2-.01,t/2+.01,D.dark,D.body),s.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,nt),s.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,ct)}function G1(s,e,t,n){s.box(-e/2,e/2,1,1+n,-t/2,t/2,D.dark,D.body,Me);let r=Math.min(e,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;s.seg(Math.cos(c)*r,o+Math.sin(c)*r,t/2+.003,Math.cos(u)*r,o+Math.sin(u)*r,t/2+.003,nt)}s.box(-.015,.015,1-.35,1,t/2-.03,t/2,D.dark),s.box(-.06,.06,1-.42,1-.35,t/2-.05,t/2,D.dark,D.body)}function H1(s,e,t,n){s.box(-e/2,e/2,.4,.4+n,-t/2,t/2,D.white,D.whiteTop,Me),s.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,ct),s.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,ct),s.box(e/2-.06,e/2-.035,.4+n*.5-.05,.4+n*.5+.05,t/2,t/2+.012,D.dark),s.box(-e*.3,e*.3,.4+n*.6,.4+n*.8,t/2,t/2+.005,D.dark),s.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,nt)}function W1(s,e,t,n,i){if(i==="wall"){s.box(-e/2,e/2,.5,.5+n,-t/2,t/2,D.white,D.whiteTop,Me),s.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,nt),s.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,ct);return}if(i==="cube"){s.box(-e/2+.01,e/2-.01,0,.03,-t/2+.01,t/2-.01,D.dark),s.box(-e/2,e/2,.03,n,-t/2,t/2,D.dark,D.body,Me),s.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,nt),s.box(-e*.15,e*.15,n,n+.025,-.012,.012,D.dark);return}s.box(-e/2+.02,e/2-.02,0,.06,-t/2+.02,t/2-.02,D.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)s.box(-e/2,e/2,.06+a*o+.004,.06+(a+1)*o,-t/2,t/2,D.white,D.whiteTop,Me);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);s.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,nt)}}var Qh=.12;function ef(s,e){let t=X1(s,e);return t&&s.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}function X1(s,e){let t=Math.max(.05,s.w),n=Math.max(.05,s.d),i=Math.max(.005,s.h),r=Mm(s.type);if(r){let l=e?Nn(e,s):0,c=(r.x-r.w/2)*t,u=(r.x+r.w/2)*t,h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+r.y*i+h,y1:l+(r.y+r.h)*i-h,z:(r.z+r.d/2)*n}}let o=e&&s.type!=="fridge_smart"?Nn(e,s)-Xo(s):0,a=q1(s,t,n,i,e);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function q1(s,e,t,n,i){if(s.type==="tv_board"){let r=Math.min(e*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-t/2+.165}}if(s.type==="tv_wall"){let r=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:r+.02,y1:r+n-.02,z:t/2+.003}}if(s.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};if(s.type==="fridge_smart"){let r=i?Nn(i,s):0;return{x0:.06,x1:e/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:t/2+.006}}if(s.type==="radiator")return{x0:-e/2+.02,x1:e/2-.02,y0:Qh+.02,y1:Qh+n-.02,z:t/2+.004};if(s.type==="washer"||s.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:t/2-.004}}return s.type==="dishwasher"?{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004}:null}function Y1(s,e,t,n,i){let r=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),o=new j(1-i,1-i,1-i),a=new j(1,1,1),l=.003,c=[e(-t/2,-n/2),e(t/2,-n/2),e(t/2,n/2),e(-t/2,n/2)],u=[e(-t/2-r,-n/2-r),e(t/2+r,-n/2-r),e(t/2+r,n/2+r),e(-t/2-r,n/2+r)],h=d=>[d[0],l,d[1]],f=s.p.length;s.tri(h(c[0]),h(c[1]),h(c[2]),o),s.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let m=(d+1)%4;s.tri(h(c[d]),h(u[d]),h(u[m]),o,a,a),s.tri(h(c[d]),h(u[m]),h(c[m]),o,a,o)}a0(e)&&tf(s,f)}function Tc(s,e,t,n,i=0){$1(s,e,t,n,i)}function tf(s,e){let t=(n,i,r)=>{if(n)for(let o=0;o<r;o++){let a=i+r+o,l=i+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=e;n<s.p.length;n+=9){let i=n/9;t(s.p,n,3),t(s.c,n,3),t(s.f,i*3,1),t(s.uv,i*6,2),t(s.tile,i*6,2)}}function $1(s,e,t,n,i){let r=$t(n.type)?0:i-Xo(n);if($t(n.type)||Math.abs(r)<.001)return o0(s,e,t,n,i);let o=s.p.length,a=e.p.length;o0(s,e,i<.05?t:new gt,n,0);for(let l=o+1;l<s.p.length;l+=3)s.p[l]+=r;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=r}function o0(s,e,t,n,i){let r=n.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(m,x)=>[n.x+l*m*o-x*a,n.z+l*m*a+x*o],u=new ea(s,e,c),h=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":n0(u,h,f,d,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":n0(u,h,f,d,1);break;case"bed":o1(u,h,f,d);break;case"chair":a1(u,h,f,d);break;case"table":l1(u,h,f,d);break;case"desk":c1(u,h,f,d);break;case"nightstand":ts(u,h,f,d,1,d*.72,!0),u.seg(-h/2,d*.5,f/2-.02,h/2,d*.5,f/2-.02,ct);break;case"wardrobe":ts(u,h,f,d,Math.max(2,Math.round(h/.5)),d*.5);break;case"shelf":u1(u,h,f,d);break;case"kitchen":h1(u,h,f,d);break;case"fridge":f1(u,h,f,d);break;case"fridge_smart":d1(u,h,f,d);break;case"stove":m1(u,h,f,d);break;case"sink":g1(u,h,f,d);break;case"bathtub":x1(u,h,f,d);break;case"shower":b1(u,h,f,d);break;case"wc":_1(u,h,f,d);break;case"washbasin":y1(u,h,f,d);break;case"tv_board":v1(u,h,f,d);break;case"plant":M1(u,h,f,d);break;case"rug":S1(u,h,f);return;case"stairs":w1(u,h,f,d);break;case"stairwell":return;case"sideboard":T1(u,h,f,d);break;case"dresser":A1(u,h,f,d);break;case"tall_cabinet":ts(u,h,f,d,1,d*.5);break;case"coat_rack":E1(u,h,f,d);break;case"bench":i0(u,h,f,d,!1);break;case"corner_bench":i0(u,h,f,d,!0);break;case"bar_stool":R1(u,h,f,d);break;case"office_chair":C1(u,h,f,d);break;case"stool":I1(u,h,f,d);break;case"kitchen_wall":P1(u,h,f,d);return;case"kitchen_tall":L1(u,h,f,d);break;case"island":F1(u,h,f,d);break;case"worktop":u.box(-h/2,h/2,Math.max(0,d-.04),d,-f/2,f/2,D.whiteTop,D.whiteTop,Me);return;case"dishwasher":D1(u,h,f,d);break;case"washer":s0(u,h,f,d,!1);break;case"dryer":s0(u,h,f,d,!0);break;case"bunk_bed":N1(u,h,f,d);break;case"table_round":O1(u,h,f,d);break;case"coffee_table":U1(u,h,f,d);break;case"tv_wall":B1(u,h,f,d);return;case"parking":{let x=[[-h/2,-f/2],[h/2,-f/2],[h/2,f/2],[-h/2,f/2]];for(let g=0;g<4;g++)u.seg(x[g][0],.012,x[g][1],x[(g+1)%4][0],.012,x[(g+1)%4][1],ct);u.seg(-h*.15,.012,f/2-.45,0,.012,f/2-.2,Me),u.seg(0,.012,f/2-.2,h*.15,.012,f/2-.45,Me);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,d,-f/2,-f/2+f*.3,D.white,D.whiteTop,Me),u.box(-h*.2,h*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,D.accent);return;case"radiator":k1(u,h,f,d);return;case"inverter":z1(u,h,f,d,n.variant??null);return;case"grid_point":V1(u,h,f,d);break;case"wallbox":G1(u,h,f,d);return;case"meter":H1(u,h,f,d);return;case"home_battery":if(W1(u,h,f,d,n.variant??null),n.variant==="wall")return;break;default:{let m=$t(n.type);if(m){if(u0(u,m,h,f,d,i,null,null,n.variant??null),i>.05)return}else u.box(-h/2,h/2,0,d,-f/2,f/2,D.body,D.bodyTop,Me)}}Y1(t,c,h,f,n.type==="plant"?.35:.5)}function jh(s,e){if(!s)return null;if(s.startsWith("#"))return parseInt(s.slice(1),16);let t=D;return(e?t[`${s}Top`]:void 0)??t[s]??null}function u0(s,e,t,n,i,r,o,a=null,l=null){let c=e.colors?.length?(e.colors.find(h=>h.id===l)??e.colors[0]).hex:null,u=!!a;for(let h of e.parts){if(a&&!a(h))continue;let f=u?{...h,glow:!0,w:h.w+.006/t,d:h.d+.006/n,y:Math.max(0,h.y-.002/i),h:h.h+.004/i}:h,d=f.glow&&o!==null,m=f.paint&&c?c:f.color,x=d?o:jh(m,!1)??D.body,g=d?o:jh(f.paint&&c?void 0:f.top,!1)??jh(m,!0)??He(x,1.25).getHex(),p=r+f.y*i,y=r+Math.min(i,(f.y+f.h)*i),M=f.edges==="glow"?Ns:f.edges==="faint"?ct:f.edges?Me:null,b=f.rot?s.rotated(f.x*t,f.z*n,f.rot):s;if(f.shape==="cyl"&&(f.axis==="x"||f.axis==="z"))b.lyingCyl(f.axis,f.x*t,f.z*n,p,y,f.axis==="x"?f.w*t:f.d*n,f.axis==="x"?f.d*n:f.w*t,x,g,14,M);else if(f.shape==="cyl")b.cyl(f.x*t,f.z*n,Math.min(f.w*t,f.d*n)/2,p,y,x,g,14,M);else if(f.shape==="loft"){let v=f.tx??f.x,S=f.tz??f.z,E=f.tw??f.w,_=f.td??f.d;b.loft([(f.x-f.w/2)*t,(f.x+f.w/2)*t,(f.z-f.d/2)*n,(f.z+f.d/2)*n],[(v-E/2)*t,(v+E/2)*t,(S-_/2)*n,(S+_/2)*n],p,y,x,g,M)}else if(f.shape==="sweep"){let v=(f.stations??[]).map(([S,E,_,w])=>({x:f.x*t,z:S*n,y0:r+E*i,y1:r+_*i,hw:w*t/2}));b.sweep(v,x,g,f.n??16,f.exp??2.6,M)}else b.box((f.x-f.w/2)*t,(f.x+f.w/2)*t,p,y,(f.z-f.d/2)*n,(f.z+f.d/2)*n,x,g,M)}}function h0(s,e,t,n,i,r){let o=r*Lt,a=Math.cos(o),l=Math.sin(o),c=(m,x)=>[t+m*a-x*l,i+m*l+x*a],u=new ea(s,new cn,c),h=1713728,f=2373216,d=725279;if(e==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,h,f,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),u.cyl(0,0,.012,n-.075,n-.06,D.accent,D.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,f),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,f),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,f),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,D.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Ac(s,e,t,n,i){let r=t.rotation*Lt,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(u,h)=>[t.x+l*u*o-h*a,t.z+l*u*a+h*o];u0(new ea(s,new cn,c),e,Math.max(.05,t.w),Math.max(.05,t.d),Math.max(.005,t.h),n,i)}var K1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5}};function d0(s,e){return qo(s)+(e.offset??0)+(Ps(e.type)?.01:gc[e.type])}function na(s){return Fs(s)>=0?s:[...s].reverse()}function Z1(s,e){let t=s[e];if(Ps(t.type)||t.type==="pool")return[];let n=[];for(let i=e+1;i<s.length;i++){let r=s[i];!r.cut||r.points.length<3||r.points.every(o=>mt(o,t.points))&&n.push(na(r.points))}return n}function f0(s,e,t,n,i,r,o,a,l=0){let c=t[0]-e[0],u=t[1]-e[1],h=Math.hypot(c,u);if(h<1e-6)return;let f=-u/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Ft(s,na([[e[0]+f,e[1]+d],[t[0]+f,t[1]+d],[t[0]-f,t[1]-d],[e[0]-f,e[1]-d]]),i,r,o,a,{aoFrom:i-1});return}let m=(b,v)=>[e[0]+f*v,b,e[1]+d*v],x=(b,v)=>[t[0]+f*v,b+l,t[1]+d*v],g=(b,v)=>{s.tri(b[0],b[1],b[2],v,v,v,void 0,rt),s.tri(b[0],b[2],b[3],v,v,v,void 0,rt),s.tri(b[0],b[2],b[1],v,v,v,void 0,rt),s.tri(b[0],b[3],b[2],v,v,v,void 0,rt)},p=new j(a),y=new j(He(o,.9)),M=new j(He(o,.6));g([m(r,1),x(r,1),x(r,-1),m(r,-1)],p),g([m(i,1),x(i,1),x(i,-1),m(i,-1)],M),g([m(i,1),x(i,1),x(r,1),m(r,1)],y),g([m(i,-1),x(i,-1),x(r,-1),m(r,-1)],y),g([m(i,1),m(i,-1),m(r,-1),m(r,1)],y),g([x(i,1),x(i,-1),x(r,-1),x(r,1)],y)}function p0(s,e,t){let n=qo(t),i=t.outdoor??[];i.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=(g,p)=>a-Oh(r,g,p),c=a-(r.type==="pool"?0:r.slope??0),u=Ps(r.type)&&r.height?r.height:gc[r.type],h={...K1[r.type],top:u},f=na(r.points),d=He(h.edge,h.edgeAlpha),m=r.open&&(r.type==="fence"||r.type==="pergola")?f.length-1:-1,x=g=>{if(r.outline!==!1)for(let p=0;p<f.length;p++){if(p===m)continue;let y=f[p],M=f[(p+1)%f.length];e.seg([y[0],g(y[0],y[1]),y[1]],[M[0],g(M[0],M[1]),M[1]],d,rt)}};switch(r.type){case"pool":{let g=new j(h.color);for(let[y,M,b]of Qo(f)){let v=f[y],S=f[M],E=f[b];s.tri([v[0],a+h.top,v[1]],[E[0],a+h.top,E[1]],[S[0],a+h.top,S[1]],g,g,g,void 0,rt)}let p=new j(h.side);for(let y=0;y<f.length;y++){let M=f[y],b=f[(y+1)%f.length];s.tri([b[0],a+h.top,b[1]],[b[0],a+.06,b[1]],[M[0],a+.06,M[1]],p,p,p,void 0,rt),s.tri([b[0],a+h.top,b[1]],[M[0],a+.06,M[1]],[M[0],a+h.top,M[1]],p,p,p,void 0,rt)}x(()=>a+.06),x(()=>a+h.top+.005);break}case"fence":{for(let g=0;g<f.length;g++){if(g===m)continue;let p=f[g],y=f[(g+1)%f.length],M=Math.hypot(y[0]-p[0],y[1]-p[1]),b=Math.max(1,Math.round(M/2)),v=m>=0&&g===m-1?b:b-1;for(let S=0;S<=v;S++){let E=S/b,_=p[0]+(y[0]-p[0])*E,w=p[1]+(y[1]-p[1])*E,R=l(_,w);Ft(s,na([[_-.04,w-.04],[_+.04,w-.04],[_+.04,w+.04],[_-.04,w+.04]]),R,R+h.top,h.side,h.color)}for(let S of[.35,.85])e.seg([p[0],l(p[0],p[1])+S*h.top,p[1]],[y[0],l(y[0],y[1])+S*h.top,y[1]],d,rt)}break}case"pergola":{let g=h.top;for(let[p,y]of f){let M=l(p,y);Ft(s,na([[p-.06,y-.06],[p+.06,y-.06],[p+.06,y+.06],[p-.06,y+.06]]),M,M+g,h.side,h.color)}for(let p=0;p<f.length;p++){if(p===m)continue;let y=f[p],M=f[(p+1)%f.length],b=l(y[0],y[1])+g;if(f0(s,y,M,.12,b-.16,b,h.side,h.color,l(M[0],M[1])-l(y[0],y[1])),r.bracing){let v=l(y[0],y[1]),S=l(M[0],M[1]);e.seg([y[0],v+.25,y[1]],[M[0],S+g-.25,M[1]],d,rt),e.seg([M[0],S+.25,M[1]],[y[0],v+g-.25,y[1]],d,rt)}}if(Dm(f)){let p=Nm(f),y=p.x1-p.x0,M=p.z1-p.z0,b=y>=M,v=b?y:M,S=Math.max(1,Math.round(v/.6));for(let E=1;E<S;E++){let _=(b?p.x0:p.z0)+v*E/S,w=b?[_,p.z0+.06]:[p.x0+.06,_],R=b?[_,p.z1-.06]:[p.x1-.06,_],T=l(w[0],w[1])+g;f0(s,w,R,.06,T-.04,T+.08,h.side,h.color,l(R[0],R[1])-l(w[0],w[1]))}}x((p,y)=>l(p,y)+g+.004);break}default:{let g=(y,M)=>l(y,M)+h.top,p=Z1(i,o);if(Ft(s,f,c,r.slope?g:a+h.top,h.side,h.color,{aoFrom:c,holes:p}),x((y,M)=>g(y,M)+.004),r.type==="hedge"&&x((y,M)=>l(y,M)+.004),r.outline!==!1)for(let y of p)for(let M=0;M<y.length;M++){let b=y[M],v=y[(M+1)%y.length];e.seg([b[0],g(b[0],b[1])+.004,b[1]],[v[0],g(v[0],v[1])+.004,v[1]],d,rt)}}}})}var Rc=Math.PI/180,J1=1.13,j1=1.72,nf=.025,Bs=.07,m0=.25;function g0(s,e){let t=[];for(let n of s.floors){if(e&&n.id!==e)continue;let{walls:i}=Jo(n.rooms,{exterior:s.settings.wall_exterior,interior:s.settings.wall_interior},n.walls??[]);for(let r of i){if(!r.exterior&&!r.free)continue;let o=r.b[0]-r.a[0],a=r.b[1]-r.a[1],l=Math.hypot(o,a);if(l<1.2)continue;let c=a/l,u=-o/l,h=Math.min(n.height,r.height??n.height),f=(d,m,x,g)=>t.push({key:d,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:g,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[g[0],g[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${r.id}`,[r.a[0]+c*r.right,n.elevation,r.a[1]+u*r.right],[o/l,0,a/l],[c,0,u]),r.free&&f(`wall:${n.id}:${r.id}:back`,[r.b[0]-c*r.left,n.elevation,r.b[1]-u*r.left],[-o/l,0,-a/l],[-c,0,-u])}}return t}var sf="ground";function rf(s){let e=[...s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??s.floors[0]??null}function x0(s,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=rf(s),o=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:Cm(r,o,a)):e.base??0;return{key:sf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Q1(s){return s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Cc(s){let e=s.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>eS(y,jo(s,y,y.overhang??e.overhang)));let t=Q1(s);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(M=>M[0])),i=t.rooms.flatMap(y=>y.points.map(M=>M[1])),r=s.settings.wall_exterior+e.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,u=t.elevation+t.height;if(e.type==="flat")return[b0("main",null,o,l,a,c,u+m0)];let h=a-o>=c-l,f=e.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,m=d*Math.tan(e.pitch*Rc),x=(y,M,b)=>f?[y,u+b,(l+c)/2+M]:[(o+a)/2+M,u+b,y],[g,p]=f?[o,a]:[l,c];return[-1,1].map(y=>Ec(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",x(g,y*d,0),x(p,y*d,0),x(g,0,m),e.pitch,()=>[0,p-g]))}function eS(s,e){let t=Mn(s),n=pn(s),i=(x,g,p)=>{let[y,M]=t.at(x,g);return[y,p,M]},r=Math.max(0,e.a),o=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a;if(s.shape==="flat"||s.shape==="parapet"){let x=t.at(a,-r),g=t.at(l,t.w+o);return[b0(s.id,s.id,Math.min(x[0],g[0]),Math.min(x[1],g[1]),Math.max(x[0],g[0]),Math.max(x[1],g[1]),s.eave_a+m0)]}if(s.shape==="pent")return[Ec(`${s.id}:a`,s.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+o,n.y(t.w+o)),s.pitch_a,()=>[0,c])];let u=s.shape==="hip"||s.shape==="pyramid",h=s.shape==="pyramid"?(t.u1-t.u0)/2:u?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,f=u?t.u0+h-a:0,d=u?l-(t.u1-h):0,m=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));m.push(Ec(`${s.id}:a`,s.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),s.pitch_a,g=>[f*(g/x),c-d*(g/x)]))}if(t.w-n.vr>.3){let x=Math.hypot(t.w+o-n.vr,n.rh-n.y(t.w+o));m.push(Ec(`${s.id}:b`,s.id,"b",i(l,t.w+o,n.y(t.w+o)),i(a,t.w+o,n.y(t.w+o)),i(l,n.vr,n.rh),s.pitch_b,g=>[d*(g/x),c-f*(g/x)]))}if(u){let x=n.y(-r),g=n.y(t.w+o),p=[[`${s.id}:c`,"c",i(a,t.w+o,g),i(a,-r,x),i(t.u0+h,n.vr,n.rh)],[`${s.id}:d`,"d",i(l,-r,x),i(l,t.w+o,g),i(t.u1-h,n.vr,n.rh)]];for(let[y,M,b,v,S]of p){let E=tS(y,s.id,M,b,v,S);E&&m.push(E)}}return m}function tS(s,e,t,n,i,r){let o=ia(ks(i,n));if(o<.3)return null;let a=ns(ks(i,n)),l=ks(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=ia(u);if(h<.3)return null;let f=ns(u),d=ns(v0(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let m=ns([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Rc;return{key:s,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:h,pitch:x,span:p=>{let y=Math.min(1,Math.max(0,p/h));return[c*y,o-(o-c)*y]},facing:[m[0],m[2]]}}function Ec(s,e,t,n,i,r,o,a){let l=ns(ks(i,n)),c=ns(ks(r,n)),u=ns(v0(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let h=ns([-c[0],0,-c[2]]);return{key:s,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:u,lu:ia(ks(i,n)),ls:ia(ks(r,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function b0(s,e,t,n,i,r,o){let a=i-t>=r-n,l=a?i-t:r-n,c=a?r-n:i-t;return{key:`${s}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function _0(s){let e=s.module_w||J1,t=s.module_h||j1;return s.portrait===!1?[t,e]:[e,t]}function nS(s){return s.layout?.length?s.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,s.rows)},()=>Math.max(1,s.cols))}function y0(s,e){return s.flat?Math.min(45,Math.max(0,e.tilt??15))*Rc:s.wall?Math.min(90,Math.max(0,e.tilt??0))*Rc:0}function iS(s,e){let[,t]=_0(e),n=y0(s,e);return s.wall?t*Math.cos(n)+nf:s.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+nf}function of(s,e,t=!1){let[n,i]=_0(e),r=[],o=y0(s,e),a=i*Math.cos(o),l=iS(s,e),c=nS(e),u=Math.max(1,...c),h=new Set(e.skip??[]),f=(m,x,g)=>[s.o[0]+s.eu[0]*m+s.es[0]*x+s.n[0]*g,s.o[1]+s.eu[1]*m+s.es[1]*x+s.n[1]*g,s.o[2]+s.eu[2]*m+s.es[2]*x+s.n[2]*g],d=(m,x)=>{if(s.unbounded)return!0;if(x<-1e-6||x>s.ls+1e-6)return!1;let[g,p]=s.span(x);return m>=g-1e-6&&m<=p+1e-6};return c.forEach((m,x)=>{let g=e.align==="right"?u-m:e.align==="center"?(u-m)/2:0;for(let p=0;p<m;p++){let y=`${x}:${p}`,M=h.has(y);if(M&&!t)continue;let b=e.u+(p+g)*(n+nf),v=e.v+x*l,S=b+n,E=v+(s.flat||s.wall?a:i);if(![[b,v],[S,v],[S,E],[b,E]].every(([I,C])=>d(I,C)))continue;if(s.wall&&o>.001){let I=Bs+i*Math.sin(o),[C,F]=e.flip?[I,Bs]:[Bs,I],N=[f(b,v,C),f(S,v,C),f(S,E,F),f(b,E,F)],U=e.flip?v:E,V=[b+.05,S-.05].map(k=>[f(k,U,0),f(k,U,I)]);r.push({corners:N,posts:V,cell:y,skipped:M});continue}if(!s.flat){r.push({corners:[f(b,v,Bs),f(S,v,Bs),f(S,E,Bs),f(b,E,Bs)],posts:[],cell:y,skipped:M});continue}let _=.15,w=_+i*Math.sin(o),[R,T]=e.flip?[E,v]:[v,E],L=[f(b,R,_),f(S,R,_),f(S,T,w),f(b,T,w)];r.push({corners:L,posts:[b+.05,S-.05].flatMap(I=>[[f(I,R,0),f(I,R,_)],[f(I,T,0),f(I,T,w)]]),cell:y,skipped:M})}}),r}function ks(s,e){return[s[0]-e[0],s[1]-e[1],s[2]-e[2]]}function ia(s){return Math.hypot(s[0],s[1],s[2])}function ns(s){let e=ia(s)||1;return[s[0]/e,s[1]/e,s[2]/e]}function v0(s,e){return[s[1]*e[2]-s[2]*e[1],s[2]*e[0]-s[0]*e[2],s[0]*e[1]-s[1]*e[0]]}var sS=.78,rS=1.18;function oS(s){return{id:s.id,face:s.face,u:s.u,v:s.v,rows:1,cols:1,portrait:!0,module_w:s.w||sS,module_h:s.h||rS}}function af(s,e){let t=of(s,oS(e))[0];if(!t)return null;let n=i=>[i[0]-s.n[0]*.05,i[1]-s.n[1]*.05,i[2]-s.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}var sa=1712952,ra=2239816,w0=1318193,zs=He(3662079,.9),zr=He(5995775,.45),Kt=.14,aS=9427199,lS=13226982,cS=14936565,uS={black:{glass:new j(329483),edge:He(9082544,.32),cells:He(2766160,.22)},blue:{glass:new j(1386842),edge:He(10467583,.55),cells:He(4025599,.35)}},hS=He(13226982,.5),fS=He(13226982,.85),dS=He(16757575,.95),M0=new j(2845583),S0=new j(3818072);function pS(s){return s.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function T0(s,e=new Map){let t=s.settings.roof,n=t?.type==="custom"?null:xS(s),i=t?.type==="custom"?bS(s,t.sections??[],t.overhang):n?[n]:[];return gS(s,i),mS(s,i,e),i}function mS(s,e,t){let n=s.settings.roof?.windows??[];if(!n.length||!e.length)return;let i=new Map(Cc(s).map(r=>[r.key,r]));for(let r of n){let o=i.get(r.face),a=o?af(o,r):null;if(!o||!a)continue;let l=o.section?e.find(T=>T.sections?.includes(o.section)):e[0];if(!l)continue;let c=l.floor.elevation+l.base,u=T=>[T[0],T[1]-c,T[2]],[h,f,d,m]=a.map(u),x=t.get(r.id)??{open:0,tilt:0,cover:0},g=(T,L)=>[T[0]+o.n[0]*L,T[1]+o.n[1]*L,T[2]+o.n[2]*L],p=(T,L,I)=>[T[0]+(L[0]-T[0])*I,T[1]+(L[1]-T[1])*I,T[2]+(L[2]-T[2])*I],y=x.open>.02||x.tilt>.02?dS:fS,M=[h,f,d,m].map(T=>g(T,.06));for(let T=0;T<4;T++)l.lines.seg(M[T],M[(T+1)%4],y);let b=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*Lt,v=Math.hypot(d[0]-f[0],d[1]-f[1],d[2]-f[2]),S=T=>{let L=o.es;return[T[0]-L[0]*v*Math.cos(b)+o.n[0]*v*Math.sin(b),T[1]-L[1]*v*Math.cos(b)+o.n[1]*v*Math.sin(b),T[2]-L[2]*v*Math.cos(b)+o.n[2]*v*Math.sin(b)]},E=g(m,.065),_=g(d,.065),w=S(E),R=S(_);l.solid.tri(w,R,_,M0),l.solid.tri(w,_,E,M0);for(let[T,L]of[[w,R],[R,_],[_,E],[E,w]])l.lines.seg(T,L,y);if(x.cover>.02){let T=Math.min(1,x.cover),L=g(p(E,w,T),.01),I=g(p(_,R,T),.01),C=g(E,.01),F=g(_,.01);l.solid.tri(L,I,F,S0),l.solid.tri(L,F,C,S0)}}}function gS(s,e){let t=s.settings.roof?.solar??[];if(!t.length||!e.length)return;let n=new Map(Cc(s).map(i=>[i.key,i]));for(let i of t){let r=n.get(i.face);if(!r)continue;let o=r.section?e.find(a=>a.sections?.includes(r.section)):e[0];o&&lf(o.solid,o.lines,r,i,o.floor.elevation+o.base)}}function lf(s,e,t,n,i){let r=c=>[c[0],c[1]-i,c[2]],o=uS[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of of(t,n)){let[u,h,f,d]=c.corners.map(r);s.tri(u,h,f,o.glass),s.tri(u,f,d,o.glass),s.tri(u,f,h,o.glass),s.tri(u,d,f,o.glass);let m=(p,y=.004)=>[p[0]+t.n[0]*y,p[1]+t.n[1]*y,p[2]+t.n[2]*y],x=(p,y,M)=>[p[0]+(y[0]-p[0])*M,p[1]+(y[1]-p[1])*M,p[2]+(y[2]-p[2])*M],g=[u,h,f,d].map(p=>m(p));for(let p=0;p<4;p++)e.seg(g[p],g[(p+1)%4],o.edge);for(let p=1;p<a;p++)e.seg(m(x(u,h,p/a)),m(x(d,f,p/a)),o.cells);for(let p=1;p<l;p++)e.seg(m(x(u,d,p/l)),m(x(h,f,p/l)),o.cells);for(let[p,y]of c.posts)e.seg(r(p),r(y),hS)}}function xS(s){let e=s.settings.roof,t=pS(s);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(R=>R.points.map(T=>T[0])),i=t.rooms.flatMap(R=>R.points.map(T=>T[1])),r=s.settings.wall_exterior+e.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...i)-r,c=Math.max(...i)+r,u=new gt,h=new cn;if(e.type==="flat"){Ft(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,sa,ra,{bottom:!0});let R=.252;for(let[T,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([T[0],R,T[1]],[L[0],R,L[1]],zs),h.seg([T[0],0,T[1]],[L[0],0,L[1]],zr);return{floor:t,base:t.height,solid:u,lines:h,glass:new gt}}let f=a-o>=c-l,d=e.ridge==="short"?!f:f,m=(d?c-l:a-o)/2,x=m*Math.tan(e.pitch*Lt),g=(R,T,L)=>d?[R,L,(l+c)/2+T]:[(o+a)/2+T,L,R],[p,y]=d?[o,a]:[l,c],M=new j(ra),b=new j(sa),v=(R,T,L,I,C)=>{u.tri(R,T,L,C),u.tri(R,L,I,C)};for(let R of[-1,1]){v(g(p,R*m,0),g(y,R*m,0),g(y,0,x),g(p,0,x),M),v(g(p,R*m,-Kt),g(p,0,x-Kt),g(y,0,x-Kt),g(y,R*m,-Kt),b),v(g(p,R*m,-Kt),g(y,R*m,-Kt),g(y,R*m,0),g(p,R*m,0),b);for(let T of[p,y])v(g(T,R*m,-Kt),g(T,R*m,0),g(T,0,x),g(T,0,x-Kt),b);h.seg(g(p,R*m,0),g(y,R*m,0),zr);for(let T of[p,y])h.seg(g(T,R*m,0),g(T,0,x),zr)}let S=e.overhang,E=new j(w0),_=m-S,w=_*Math.tan(e.pitch*Lt);for(let R of[p+S,y-S])u.tri(g(R,-_,-Kt),g(R,_,-Kt),g(R,0,w-Kt),E),u.tri(g(R,_,-Kt),g(R,-_,-Kt),g(R,0,w-Kt),E);return h.seg(g(p,0,x+.004),g(y,0,x+.004),zs),{floor:t,base:t.height,solid:u,lines:h,glass:new gt}}function bS(s,e,t){let n=s.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let i=new Map,r=new Map(Cc(s).map(o=>[o.key,o]));for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Wh(s,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=i.get(l);c||i.set(l,c={floor:a,base:0,solid:new gt,lines:new cn,glass:new gt,sections:[],lift:!o.open}),c.sections.push(o.id);let u=Br(e,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=e.filter(x=>x!==o&&Br(e,x)===o).flatMap(x=>Vh(o,x));for(let x of s.settings.roof.windows??[]){let g=r.get(x.face),p=g&&g.section===o.id?af(g,x):null;if(!p)continue;let y=p.map(M=>fi(o,M[0],M[2]));f.push({u0:Math.min(...y.map(M=>M[0])),u1:Math.max(...y.map(M=>M[0])),v0:Math.min(...y.map(M=>M[1])),v1:Math.max(...y.map(M=>M[1]))})}let d=u?Sc(u,o):o,m=null;if(u){let x=Mn(d),g=Qi(u,{u0:0,u1:0,a:0,b:0}),p=y=>{let[M,b]=x.at(y,x.w/2),[v,S]=fi(u,M,b);return Ds(g,v,S)??pn(u).y(S)};m=p(x.u0)<=p(x.u1)?0:1}_S(c.solid,c.lines,d,jo(s,d,d.overhang??t),a.elevation,c.glass,h,f,m)}return[...i.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function _S(s,e,t,n,i,r=s,o=!1,a=[],l=null){let c=Mn(t),u=pn(t),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,h.a),d=Math.max(0,h.b),m=c.w,x=c.u0-Math.max(0,h.u0),g=c.u1+Math.max(0,h.u1),p=(I,C,F)=>{let[N,U]=c.at(I,C);return[N,F-i,U]},y=new j(ra),M=new j(sa),b=new j(w0),v=(I,C)=>{for(let F=1;F+1<I.length;F++)s.tri(I[0],I[F],I[F+1],C)},S=[],E=[],_=[],w=null;if(t.shape==="flat"||t.shape==="parapet"){let I=t.eave_a,C=t.shape==="parapet",F=t.points&&t.points.length>=3?zh(t,C?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):C?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(x,-f),c.at(g,-f),c.at(g,m+d),c.at(x,m+d)];Ft(s,F,I-i,I-i+.25,sa,ra,{bottom:!0});for(let N=0;N<F.length;N++){let U=F[N],V=F[(N+1)%F.length];e.seg([U[0],I-i+.252,U[1]],[V[0],I-i+.252,V[1]],zs),e.seg([U[0],I-i,U[1]],[V[0],I-i,V[1]],zr)}if(C){let N=B=>Yo(B)>=0?B:[...B].reverse(),U=N(F),V=yc(U,-.2),k=U.length;for(let B=0;B<k;B++){let H=N([U[B],U[(B+1)%k],V[(B+1)%k],V[B]]);Ft(s,H,I-i+.25,I-i+.65,sa,ra),e.seg([U[B][0],I-i+.652,U[B][1]],[U[(B+1)%k][0],I-i+.652,U[(B+1)%k][1]],zs),e.seg([V[B][0],I-i+.652,V[B][1]],[V[(B+1)%k][0],I-i+.652,V[(B+1)%k][1]],zs)}}}else{let I=Qi(t,h);S=I.faces;for(let C of a)S=S.flatMap(F=>vc(F,C));E=I.rim,_=I.ridges,w=I.gable}let R=!!t.open,T=new j(aS);for(let I of S){if(R){for(let C=1;C+1<I.length;C++)r.tri(p(I[0][0],I[0][1],I[0][2]),p(I[C][0],I[C][1],I[C][2]),p(I[C+1][0],I[C+1][1],I[C+1][2]),T);continue}v(I.map(([C,F,N])=>p(C,F,N)),y),v(I.map(([C,F,N])=>p(C,F,N-Kt)),M)}for(let I=0;I<E.length;I++){let[C,F,N]=E[I],[U,V,k]=E[(I+1)%E.length];R||v([p(C,F,N),p(U,V,k),p(U,V,k-Kt),p(C,F,N-Kt)],M),e.seg(p(C,F,N),p(U,V,k),R?zs:zr)}if(R){yS(s,e,c,u,h,p,i);return}for(let[[I,C,F],[N,U,V]]of _)e.seg(p(I,C,F+.004),p(N,U,V+.004),zs);let L=t.base;if(!o){if(w){let I=vS(w,L-Kt),C=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let F of C)v(I.map(([N,U])=>p(F,N,U)),b)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let I of[0,m]){let C=u.y(I)-Kt;C>L+.02&&v([p(c.u0,I,L),p(c.u1,I,L),p(c.u1,I,C),p(c.u0,I,C)],b)}else if(t.eave_a>L+.02)for(let[I,C,F,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,m],[c.u1,m,c.u0,m],[c.u0,m,c.u0,0]])v([p(I,C,L),p(F,N,L),p(F,N,t.eave_a),p(I,C,t.eave_a)],b)}}function yS(s,e,t,n,i,r,o){let a=t.w,l=.12,c=.16,u=i.a>0,h=i.b>0,f=i.u0>0,d=i.u1>0,m=(p,y,M,b,v,S)=>{let E=[t.at(p,M),t.at(y,M),t.at(y,b),t.at(p,b)],_=(E[1][0]-E[0][0])*(E[2][1]-E[0][1])-(E[2][0]-E[0][0])*(E[1][1]-E[0][1]);Ft(s,_<0?[...E].reverse():E,v-o,S-o,lS,cS,{bottom:!0})},x=o;for(let[p,y]of[[0,u],[a,h]]){if(!y)continue;let M=n.y(p)-.03,b=p===0?0:a-l;m(t.u0,t.u1,b,b+l,M-c,M),e.seg(r(t.u0,p,M-c),r(t.u1,p,M-c),zr)}for(let[p,y]of[[t.u0,f],[t.u1-l,d]])if(y)for(let M=0;M<6;M++){let b=a*M/6,v=a*(M+1)/6,S=Math.min(n.y(b),n.y(v))-.03;m(p,p+l,b,v,S-c,S)}let g=[];for(let[p,y]of[[0,u],[a-l,h]]){if(!y)continue;let M=t.u1-t.u0-l,b=Math.max(1,Math.ceil(M/3.5));for(let v=0;v<=b;v++){let S=t.u0+M*v/b;v===0&&!f||v===b&&!d||g.push([S,p])}}if(!u&&!h)for(let p of[t.u0,t.u1-l])(p===t.u0&&f||p!==t.u0&&d)&&g.push([p,a/2-l/2]);for(let[p,y]of g){let M=n.y(y+l/2)-.03-c;m(p,p+l,y,y+l,x,M)}}function vS(s,e){let t=[];for(let r=0;r<s.length;r++){let[o,a]=s[r];a>=e&&t.push([o,a]);let l=s[r+1];if(l&&(a-e)*(l[1]-e)<0){let c=(e-a)/(l[1]-a);t.push([o+(l[0]-o)*c,e])}}if(t.length<2)return[];let n=t[0],i=t[t.length-1];return i[1]>e&&t.push([i[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var oa={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},A0={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},is=.2,aa=8,Ic=.42,cf=.42;function P0(s,e,t,n=[],i=[],r){let{walls:o,open:a}=Jo(s.rooms,{exterior:e,interior:t},s.walls??[]),l=(T,L,I)=>{let C=r?r(T,L):null;return C===null?I:Math.max(.05,Math.min(I,C))},c=(T,L,I,C,F)=>{if(!r)return F;let N=F,U=Math.max(2,Math.ceil((C-I)/.25)+1);for(let V=0;V<U;V++){let k=I+(C-I)*V/(U-1);N=Math.min(N,l(T[0]+L[0]*k,T[1]+L[1]*k,F))}return N},u=new gt(!0,!0),h=[],f=new cn,d=[];for(let T of s.rooms){if(T.points.length<3)continue;let L=I0(T.points),I=A0[T.floor_material]??A0.wood,C=new j(I.color),F=n.filter(B=>Ym(B,L)).map(B=>$m(B,.003));d.push(...F);let N=[...L,...F.flat()],U=u.count;for(let[B,H,ee]of Qo(L,F)){let Q=N[B],ce=N[H],ue=N[ee];u.tri([Q[0],0,Q[1]],[ue[0],0,ue[1]],[ce[0],0,ce[1]],C,C,C,[Q[0],Q[1],ue[0],ue[1],ce[0],ce[1]],rt,I.tile)}h.push({roomId:T.id,start:U,end:u.count,color:I.color});let V=new j(oa.slab),k=B=>{for(let H=0;H<B.length;H++){let ee=B[H],Q=B[(H+1)%B.length];u.tri([ee[0],-is,ee[1]],[ee[0],0,ee[1]],[Q[0],0,Q[1]],V),u.tri([ee[0],-is,ee[1]],[Q[0],0,Q[1]],[Q[0],-is,Q[1]],V)}};k(L);for(let B of F){k([...I0(B)].reverse());for(let H=0;H<B.length;H++){let ee=B[H],Q=B[(H+1)%B.length];f.seg([ee[0],.006,ee[1]],[Q[0],.006,Q[1]],Ns),f.seg([ee[0],-is,ee[1]],[Q[0],-is,Q[1]],es)}}}let m=new Map,x=[],g=new Map;for(let T of o){let L="interior",I=null;if(T.exterior){let F=T.b[0]-T.a[0],N=T.b[1]-T.a[1],U=Math.hypot(F,N)||1,V=[N/U,-F/U],k=(Math.round(Math.atan2(V[1],V[0])/(2*Math.PI)*aa)%aa+aa)%aa;L=`s${k}`;let B=k/aa*2*Math.PI;I=[Math.cos(B),Math.sin(B)]}let C=m.get(L);C===void 0&&(C=x.length,m.set(L,C),x.push(I)),g.set(T,C)}let p=new Map,y=[];for(let T of s.openings){let L=zm(T,s.rooms,s.walls??[]);if(!L)continue;let I=Vm(o,T,L);if(!I)continue;let{wall:C,s:F}=I,N=Fc([C.b[0]-C.a[0],C.b[1]-C.a[1]]),U=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),V=Math.min(T.width,U),k=Math.max(0,Math.min(U-V,F-V/2)),B=L.room.points,H=C.free?N[0]*(B[1][0]-B[0][0])+N[1]*(B[1][1]-B[0][1])>0:C.roomLeft===T.room_id,ee=[-N[1],N[0]],Q=H?ee:[-ee[0],-ee[1]],ce=Math.min(c(C.a,N,k,k+V,Pc(C,s.height))-.02,T.sill+T.height),ue=Math.max(0,Math.min(T.sill,ce-.1)),Be=[Q[1],-Q[0]],q=N[0]*Be[0]+N[1]*Be[1]>0,Z={opening:T,bucket:g.get(C),start:[C.a[0]+N[0]*k,C.a[1]+N[1]*k],axis:N,width:V,toRoom:Q,faceRoom:H?C.left:C.right,faceOut:H?C.right:C.left,sill:ue,top:ce,hingeAtStart:T.hinge==="left"===q,exterior:C.exterior};y.push(Z);let ae=p.get(C);ae||p.set(C,ae=[]),ae.push({s0:k,s1:k+V,sill:ue,top:ce,info:Z})}let M=Math.min(s.cut_height,s.height),b=new gt;for(let T of o){let L=g.get(T),I=Fc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),C=(p.get(T)??[]).sort((ee,Q)=>ee.s0-Q.s0),F=Pc(T,s.height),N=[],U=[-1/0,...new Set(C.flatMap(ee=>[ee.s0,ee.s1])).values(),1/0].sort((ee,Q)=>ee-Q);for(let ee=0;ee+1<U.length;ee++){let Q=U[ee],ce=U[ee+1];if(ce-Q<1e-6)continue;let ue=Number.isFinite(Q)&&Number.isFinite(ce)?(Q+ce)/2:Number.isFinite(Q)?Q+1:ce-1,Be=C.filter(ae=>ae.s0<ue&&ae.s1>ue).map(ae=>[ae.sill,ae.top]).sort((ae,we)=>ae[0]-we[0]),q=[],Z=-is;for(let[ae,we]of Be)ae>Z+1e-4&&q.push([Z,ae]),Z=Math.max(Z,we);F>Z+1e-4&&q.push([Z,F]),N.push({t0:Q,t1:ce,ranges:q})}let V=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),k=r&&c(T.a,I,0,V,F)<F-.001,B=k?N.flatMap(ee=>{let Q=Math.max(ee.t0,-.5),ce=Math.min(ee.t1,V+.5),ue=Math.max(1,Math.ceil((ce-Q)/.3));return Array.from({length:ue},(Be,q)=>({t0:q===0?ee.t0:Q+(ce-Q)*q/ue,t1:q===ue-1?ee.t1:Q+(ce-Q)*(q+1)/ue,ranges:ee.ranges,inner0:q>0,inner1:q<ue-1}))}):N.map(ee=>({...ee,inner0:!1,inner1:!1})),H=ee=>(ee[0]-T.a[0])*I[0]+(ee[1]-T.a[1])*I[1];for(let ee of B){let Q=SS(T.footprint,T.a,I,ee.t0,ee.t1);if(Q.length<3)continue;let ce=(q,Z)=>Math.abs(H(q)-Z)<1e-4,ue=(q,Z)=>ee.inner0&&ce(q,ee.t0)&&ce(Z,ee.t0)||ee.inner1&&ce(q,ee.t1)&&ce(Z,ee.t1),Be=k?Math.min(...Q.map(([q,Z])=>l(q,Z,F))):F;for(let[q,Z]of ee.ranges){let ae=Math.min(Z,k?Math.max(...Q.map(([st,Ne])=>l(st,Ne,F))):Z);if(ae-q<1e-4||Be-q<.01)continue;let we=q>.01,ge=k&&Z>Be,ze=(st,Ne)=>Math.min(Z,l(st,Ne,F));if(q<M-1e-6){let st=ae>M+1e-6?Zm+L:Os+L,Ne=ge&&Be<M?(Ze,ot)=>Math.min(M,ze(Ze,ot)):Math.min(ae,M);Ft(b,Q,q,Ne,oa.wall,oa.wallTop,{aoFrom:0,bottom:we,fold:Os+L,topFold:st,skipSide:ue})}ae>M+1e-6&&Be>M+1e-6&&Ft(b,Q,Math.max(q,M),ge?ze:ae,oa.wall,oa.wallTop,{aoFrom:0,fold:L,bottom:we&&q>=M,skipSide:ue})}}}let v=o.flatMap(T=>T.footprint),S=TS(o,v),E=new cn;E.p.push(...f.p),E.c.push(...f.c),E.f.push(...f.f);let _=(T,L)=>(p.get(T)??[]).filter(L);for(let T of S.edges){let L=g.get(T.wall);for(let[C,F]of Lc(T,_(T.wall,N=>N.sill<=.005)))E.seg([C[0],.004,C[1]],[F[0],.004,F[1]],Km);for(let[C,F]of Lc(T,_(T.wall,N=>N.sill<M&&N.top>M)))E.seg([C[0],M,C[1]],[F[0],M,F[1]],Kh,wc+L);let I=Pc(T.wall,s.height);for(let[C,F]of Lc(T,_(T.wall,N=>N.top>=I-.021))){if(!r){E.seg([C[0],I,C[1]],[F[0],I,F[1]],Ns,I<=M+1e-6?Os+L:L);continue}let N=Math.max(1,Math.ceil(Math.hypot(F[0]-C[0],F[1]-C[1])/.3));for(let U=0;U<N;U++){let V=[C[0]+(F[0]-C[0])*U/N,C[1]+(F[1]-C[1])*U/N],k=[C[0]+(F[0]-C[0])*(U+1)/N,C[1]+(F[1]-C[1])*(U+1)/N],B=l(V[0],V[1],I),H=l(k[0],k[1],I);E.seg([V[0],B,V[1]],[k[0],H,k[1]],Ns,Math.max(B,H)<=M+1e-6?Os+L:L)}}}for(let T of S.corners){let L=l(T.p[0],T.p[1],Pc(T.wall,s.height));E.segSplit([T.p[0],.004,T.p[1]],[T.p[0],L,T.p[1]],es,Math.min(M,L),g.get(T.wall))}for(let T of p.values())for(let L of T)MS(E,L,M);let w=AS(S.edges,s.rooms,p);p0(b,E,s);for(let T of i)lf(b,E,T.face,T.field,s.elevation);let R=[];for(let T of s.furniture){if(Pm(T.type))continue;let L=b.count,I=E.p.length/6,C=Nn(s,T);pc(T.type)||Tc(b,E,w,T,C),C+T.h>M+.05&&(Jm(b,L,M,Zh),jm(E,I,M,Zh)),R.push({id:T.id,start:L,end:b.count})}return{floor:u.geometry(),roomTris:h,holes:d,walls:b.geometry(),lines:E.geometry(),shadow:w.geometry(),buckets:x,openings:y,walls2d:o,openRooms:a,wallBuckets:o.map(T=>g.get(T)),furnitureTris:R,roofUnder:r}}function MS(s,e,t){let{info:n}=e,i=n.bucket,r=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],o=l=>l>t+1e-6?i:rt,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])s.segSplit(r(c,l,a),r(c,l,e.top),es,t,i);s.seg(r(e.s0,l,e.top),r(e.s1,l,e.top),es,o(e.top)),e.sill>.01&&s.seg(r(e.s0,l,e.sill),r(e.s1,l,e.sill),es,o(e.sill))}for(let l of[e.s0,e.s1])s.seg(r(l,n.faceRoom,e.top),r(l,-n.faceOut,e.top),es,o(e.top)),e.sill>.01&&s.seg(r(l,n.faceRoom,e.sill),r(l,-n.faceOut,e.sill),es,o(e.sill)),e.sill<t&&e.top>t&&s.seg(r(l,n.faceRoom,t),r(l,-n.faceOut,t),Kh,wc+i)}function SS(s,e,t,n,i){let r=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],o=s;return Number.isFinite(n)&&(o=E0(o,a=>r(a)-n)),Number.isFinite(i)&&(o=E0(o,a=>i-r(a))),o}function E0(s,e){let t=[];for(let n=0;n<s.length;n++){let i=s[n],r=s[(n+1)%s.length],o=e(i),a=e(r);if(o>=0&&t.push(i),o>=0!=a>=0){let l=o/(o-a);t.push([i[0]+(r[0]-i[0])*l,i[1]+(r[1]-i[1])*l])}}return t}var R0=s=>Math.round(s*1e3),la=s=>`${R0(s[0])},${R0(s[1])}`,C0=(s,e)=>{let t=la(s),n=la(e);return t<n?`${t}|${n}`:`${n}|${t}`};function wS(s,e){let t=[];for(let n=0;n<s.length;n++){let i=s[n],r=s[(n+1)%s.length],o=r[0]-i[0],a=r[1]-i[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of e){let f=((h[0]-i[0])*o+(h[1]-i[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((h[0]-i[0])*a-(h[1]-i[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((h,f)=>h-f);let u=i;for(let h of c){let f=[i[0]+o*h,i[1]+a*h];la(f)!==la(u)&&t.push([u,f]),u=f}t.push([u,r])}return t}function TS(s,e){let t=s.map(l=>({wall:l,edges:wS(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l){let h=C0(c,u);n.set(h,(n.get(h)??0)+1)}let i=[],r=new Map,o=(l,c,u)=>{let h=la(l),f=r.get(h);f||r.set(h,f={p:l,wall:c,d:[]}),f.d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,h]of c){if(n.get(C0(u,h))!==1)continue;let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(f<1e-4)continue;i.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[];for(let{p:l,wall:c,d:u}of r.values())u.some(h=>u.some(f=>Math.abs(h[0]*f[1]-h[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:i,corners:a}}function Lc(s,e){if(!e.length)return[[s.a,s.b]];let t=Fc([s.wall.b[0]-s.wall.a[0],s.wall.b[1]-s.wall.a[1]]),n=Fc([s.b[0]-s.a[0],s.b[1]-s.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[s.a,s.b]];let i=h=>(h[0]-s.wall.a[0])*t[0]+(h[1]-s.wall.a[1])*t[1],r=i(s.a),o=i(s.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let h of e)c=c.flatMap(([f,d])=>{if(h.s1<=f||h.s0>=d)return[[f,d]];let m=[];return h.s0>f&&m.push([f,h.s0]),h.s1<d&&m.push([h.s1,d]),m});let u=h=>{let f=(h-r)/(o-r||1);return[s.a[0]+(s.b[0]-s.a[0])*f,s.a[1]+(s.b[1]-s.a[1])*f]};return c.filter(([h,f])=>f-h>1e-4).map(([h,f])=>r<=o?[u(h),u(f)]:[u(f),u(h)])}function AS(s,e,t){let n=new gt,i=new j(cf,cf,cf),r=new j(1,1,1),o=.002;for(let a of s)for(let[l,c]of Lc(a,(t.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],h=c[1]-l[1],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!e.some(p=>p.points.length>=3&&mt(m,p.points)))continue;let x=[l[0]+d[0]*Ic,l[1]+d[1]*Ic],g=[c[0]+d[0]*Ic,c[1]+d[1]*Ic];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],i,r,r),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],i,r,i)}return n}function L0(s,e){let t=e.furniture.filter(r=>r.type==="stairwell").map(bc),n=s.filter(r=>r.elevation<e.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return $h(t);let i=n.furniture.filter(r=>(r.type==="stairs"||$t(r.type)?.hole)&&n.elevation+r.h>=e.elevation-.3).map(bc);return $h([...t,...i])}function Pc(s,e){return Math.min(e,s.height??e)}function Fc(s){let e=Math.hypot(s[0],s[1])||1;return[s[0]/e,s[1]/e]}function I0(s){let e=0;for(let t=0;t<s.length;t++){let n=s[t],i=s[(t+1)%s.length];e+=n[0]*i[1]-i[0]*n[1]}return e>=0?s:[...s].reverse()}var ES=500,F0=.12,D0=1.35,RS=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Dc=class{view={target:new z,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let i=(r,o,a)=>{e.addEventListener(r,o,a),this.listeners.push([r,o])};i("pointerdown",r=>this.onDown(r)),i("pointermove",r=>this.onMove(r)),i("pointerup",r=>this.onUp(r)),i("pointercancel",r=>this.onUp(r)),i("wheel",r=>this.onWheel(r),{passive:!1}),i("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}update(e){let t=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,h=Math.min(1,(e-c)/u),f=RS(h);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,h>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=uf(this.view.phi+this.velocity.phi,F0,D0),this.velocity.theta*=.9,this.velocity.phi*=.9,t=!0);let{target:n,radius:i,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+i*Math.sin(o)*Math.sin(r),n.y+i*Math.cos(o),n.z+i*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),t}flyTo(e,t=700){let n={...this.view,target:this.view.target.clone()},i=e.theta??n.theta;for(;i-n.theta>Math.PI;)i-=2*Math.PI;for(;i-n.theta<-Math.PI;)i+=2*Math.PI;let r={target:(e.target??n.target).clone(),radius:e.radius??n.radius,theta:i,phi:e.phi??n.phi};this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:t},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}onDown(e){if(this.el.setPointerCapture(e.pointerId),this.pointers.size===0&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0,this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button,type:e.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,i))},ES)}else this.down=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing){this.events.drag?.(...this.local(e));return}let n=e.clientX-t.x,i=e.clientY-t.y;if(this.swiping){this.events.swipeMove?.(e.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let r=this.el.getBoundingClientRect();if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(this.down.x-r.left,this.down.y-r.top,e.clientX-this.down.x,e.clientY-this.down.y)){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},this.events.swipeMove?.(e.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){t.x=e.clientX,t.y=e.clientY;return}if(t.button===1||t.button===2||e.shiftKey)this.pan(n,i);else{let o=this.el.clientHeight||1,a=-n/o*3.2,l=-i/o*2.4;this.view.theta+=a,this.view.phi=uf(this.view.phi+l,F0,D0),this.velocity={theta:a,phi:l}}t.x=e.clientX,t.y=e.clientY}else{t.x=e.clientX,t.y=e.clientY;let r=this.pinchState();this.pinch&&r&&(this.zoom(this.pinch.dist/Math.max(1,r.dist)),this.pan(r.mid[0]-this.pinch.mid[0],r.mid[1]-this.pinch.mid[1])),this.pinch=r}this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(e.pointerId),this.events.drop?.();return}if(this.pointers.delete(e.pointerId),this.swiping){this.swiping=null,this.down=null,this.events.swipeEnd?.();return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&e.type==="pointerup"&&performance.now()-this.down.time<400){let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top,r=performance.now();r-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(n,i)):(this.lastTap=r,this.events.tap(n,i))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=uf(this.view.radius*e,this.minRadius,this.maxRadius)}pan(e,t){let n=this.el.clientHeight||1,i=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new z(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new z(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-e*i),this.view.target.addScaledVector(o,t*i/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let e=[...this.pointers.values()];if(e.length<2)return null;let[t,n]=e;return{dist:Math.hypot(t.x-n.x,t.y-n.y),mid:[(t.x+n.x)/2,(t.y+n.y)/2]}}};function uf(s,e,t){return Math.min(t,Math.max(e,s))}function ss(s,e,t="plain"){return s.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},s.customProgramCacheKey=()=>`nf-fold-${t}`,s}function CS(s,e){let t=$t(e);if(!t)return null;let n=s.scale??1,[i,r,o]=t.size.map(a=>a*n);return{id:`${s.id}:vehicle`,type:e,x:s.x,z:s.z,rotation:s.rotation,w:i,d:r,h:o,variant:s.variant??null,entity:null,power:null}}function Nc(s,e){let t=[],n=!1;for(let i of s.furniture){t.push(i);let r=i.type==="parking"?e.get(i.id):void 0,o=r?CS(i,r):null;o&&(t.push(o),n=!0)}return n?{...s,furniture:t}:s}var N0=["neon","blueprint","day"];function O0(s){return N0.indexOf(s)}var Oc={value:new z(.22,.88,1)},Uc={value:0};function U0(s){let e=/^#?([0-9a-f]{6})$/i.exec(s?.trim()??"");if(!e)return null;let t=parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var IS=`
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
`;function pi(s,e,t=!1){let n=s.onBeforeCompile.bind(s),i=s.customProgramCacheKey.bind(s);return s.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=e,r.uniforms.uAccent=Oc,r.uniforms.uAccentOn=Uc,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${IS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${t?"true":"false"});`)},s.customProgramCacheKey=()=>`${i()}-themed-${t?"l":"s"}`,s}function Bc(s){return s==="day"?ci:pt}var ca=.012,PS=.012;function k0(s,e,t,n,i,r=[],o){let a=[],l=[],c=[],u=[],h=(x,g,p,y,M,b,v)=>{for(let S of[x,g,p,x,p,y])a.push(S[0],S[1],S[2]),l.push(M[0],M[1],M[2]),c.push(b),u.push(v)};s.rooms.forEach((x,g)=>{if(x.points.length<3)return;let p=x.points.map(E=>E[0]),y=x.points.map(E=>E[1]),M=Math.min(...p),b=Math.min(...y),v=Math.max(1,Math.ceil((Math.max(...p)-M)/i)),S=Math.max(1,Math.ceil((Math.max(...y)-b)/i));for(let E=0;E<v;E++)for(let _=0;_<S;_++){let w=M+(E+.5)*i,R=b+(_+.5)*i;if(!mt([w,R],x.points)||r.some(I=>mt([w,R],I)))continue;let T=M+E*i,L=b+_*i;h([T,ca,L],[T,ca,L+i],[T+i,ca,L+i],[T+i,ca,L],[0,1,0],g,-1)}});let f=s.rooms.length;for(let x of s.outdoor??[]){if(x.points.length<3||Ps(x.type))continue;let g=d0(s,x)+ca,p=x.points.map(E=>E[0]),y=x.points.map(E=>E[1]),M=Math.min(...p),b=Math.min(...y),v=Math.max(1,Math.ceil((Math.max(...p)-M)/i)),S=Math.max(1,Math.ceil((Math.max(...y)-b)/i));for(let E=0;E<v;E++)for(let _=0;_<S;_++){if(!mt([M+(E+.5)*i,b+(_+.5)*i],x.points))continue;let w=M+E*i,R=b+_*i;h([w,g,R],[w,g,R+i],[w+i,g,R+i],[w+i,g,R],[0,1,0],f,-1)}}let d=Math.min(s.cut_height,s.height);e.forEach((x,g)=>{let p=Math.min(s.height,x.height??s.height),y=Math.min(d,p-.02),M=x.b[0]-x.a[0],b=x.b[1]-x.a[1],v=Math.hypot(M,b);if(v<.05)return;let S=[M/v,b/v],E=[-S[1],S[0]],_=t[g],w=LS(x,S,v,n),R=(I,C,F)=>[C,F,...I.filter(N=>N>C+.005&&N<F-.005)].sort((N,U)=>N-U).filter((N,U,V)=>U===0||N>V[U-1]+.005),T=R([y,(y+p)/2,...w.flatMap(I=>[I.y0+.01,I.y1-.01])],.02,p-.02),L=R(w.flatMap(I=>[I.s0,I.s1]),0,v);for(let I of[1,-1]){let C=I>0?x.roomLeft:x.roomRight,F=C?s.rooms.findIndex(B=>B.id===C):x.exterior?f:-1;if(F<0)continue;let N=(I>0?x.left:x.right)+PS,U=[E[0]*I,E[1]*I],V=(B,H)=>[x.a[0]+S[0]*B+U[0]*N,H,x.a[1]+S[1]*B+U[1]*N],k=B=>{let H=V(B,0),ee=o?.(H[0],H[2]);return ee==null?1/0:ee-.02};for(let B=0;B<L.length-1;B++){let H=L[B+1]-L[B],ee=Math.max(1,Math.ceil(H/i));for(let Q=0;Q<ee;Q++){let ce=L[B]+H/ee*Q,ue=L[B]+H/ee*(Q+1),Be=(ce+ue)/2;for(let q=0;q<T.length-1;q++){let Z=T[q],ae=T[q+1];if(ae-Z<.01)continue;let we=(Z+ae)/2;if(w.some(Ne=>Be>Ne.s0&&Be<Ne.s1&&we>Ne.y0&&we<Ne.y1))continue;let ge=Z>=d-1e-6?_:Os+_,ze=Math.min(ae,k(ce)),st=Math.min(ae,k(ue));ze<=Z+.005&&st<=Z+.005||h(V(ce,Z),V(ue,Z),V(ue,Math.max(Z,st)),V(ce,Math.max(Z,ze)),[U[0],0,U[1]],F,ge)}}}}});let m=[];for(let x of n){if(x.opening.type!=="door")continue;let g=e.find(M=>z0(M,x));if(!g||!g.roomLeft||!g.roomRight)continue;let p=s.rooms.findIndex(M=>M.id===g.roomLeft),y=s.rooms.findIndex(M=>M.id===g.roomRight);p<0||y<0||m.push({id:x.opening.id,a:p,b:y,x:x.start[0]+x.axis[0]*(x.width/2),y:Math.min(1.1,x.top*.55),z:x.start[1]+x.axis[1]*(x.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:m}}function z0(s,e){let t=s.b[0]-s.a[0],n=s.b[1]-s.a[1],i=Math.hypot(t,n)||1;return Math.abs((e.start[0]-s.a[0])*n-(e.start[1]-s.a[1])*t)/i<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/i)>.99}function LS(s,e,t,n){let i=[];for(let r of n){if(!z0(s,r))continue;let o=(r.start[0]-s.a[0])*e[0]+(r.start[1]-s.a[1])*e[1],l=r.axis[0]*e[0]+r.axis[1]*e[1]>0?o:o-r.width;l>t||l+r.width<0||i.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return i}function FS(s,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(s){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function DS(s){return(s.kind==="spot"?2:s.kind==="wall"?1.4:2.4)*(.55+.45*s.level)}function B0(s,e,t,n,i,r,o){let a=e-s.x,l=t-s.y,c=n-s.z,u=a*a+l*l+c*c,h=Math.sqrt(u)||1e-6,f=DS(s),d=1/(1+u/(f*f)),m=d*Math.sqrt(d),x=Math.max(0,-(a*i+l*r+c*o)/h);return s.level*m*(.2+.8*x)*FS(s.kind,l/h)}function V0(s,e,t=.7,n=[]){let i=[...e];s.doors.forEach((u,h)=>{let f=n[h]??.5;if(!(f<=.01))for(let[d,m]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of e){if(p.room!==d)continue;let y=p.x-u.x,M=p.y-u.y,b=p.z-u.z,v=Math.hypot(y,M,b)||1,S=B0(p,u.x,u.y,u.z,y/v,M/v,b/v);x[0]+=p.color[0]*S,x[1]+=p.color[1]*S,x[2]+=p.color[2]*S}let g=Math.max(x[0],x[1],x[2]);g<.01||i.push({x:u.x,y:u.y,z:u.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*f)),kind:"wall",room:m})}});let r=new Map;for(let u of i){let h={...u,color:u.color.map(f=>Math.pow(f,1.5))};r.set(u.room,[...r.get(u.room)??[],h])}let{pos:o,normal:a,room:l}=s,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let h=r.get(l[u]);if(!h)continue;let f=u*3,d=0,m=0,x=0;for(let g of h){let p=B0(g,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=g.color[0]*p,m+=g.color[1]*p,x+=g.color[2]*p}c[f]=1-Math.exp(-d*t*1.6),c[f+1]=1-Math.exp(-m*t*1.6),c[f+2]=1-Math.exp(-x*t*1.6)}return c}function G0(s,e,t){let n=s.rooms.findIndex(i=>i.points.length>=3&&mt([e,t],i.points));return n<0?s.rooms.length:n}function H0(s,e){return s&&e>=0&&e<s.length?s[e]:e}var zc={open:0,open2:0,tilt:0,tilt2:0,cover:null},W0=2043986,X0=2769520,NS=2242399,hf=1845831,OS=1450554,Fi=16758087,US=1.2,BS=1.5,kS=1846349,zS=2572395,VS=1120816,GS=1845831,q0=5995775,Y0=9085695,Vr=He(3662079,.08),HS=.2;function kc(s,e,t,n,i,r,o,a,l,c,u){let h=(d,m,x)=>e(d,m,x),f=[[h(t,i,a),h(n,i,a),h(n,r,a),h(t,r,a),c],[h(t,i,o),h(n,i,o),h(n,r,o),h(t,r,o),He(l.getHex(),.6)],[h(t,r,o),h(n,r,o),h(n,r,a),h(t,r,a),l],[h(t,i,o),h(n,i,o),h(n,i,a),h(t,i,a),He(l.getHex(),.85)],[h(t,i,o),h(t,r,o),h(t,r,a),h(t,i,a),He(l.getHex(),.92)],[h(n,i,o),h(n,r,o),h(n,r,a),h(n,i,a),He(l.getHex(),.92)]];for(let[d,m,x,g,p]of f)s.tri(d,m,x,p,p,p,void 0,u),s.tri(d,x,g,p,p,p,void 0,u)}function lt(s,e,t,n,i,r,o,a,l,c,u,h){if(a<=u+1e-6)return kc(s,e,t,n,i,r,o,a,l,c,rt);if(o>=u-1e-6)return kc(s,e,t,n,i,r,o,a,l,c,h);kc(s,e,t,n,i,r,o,u,l,c,rt),kc(s,e,t,n,i,r,u,a,l,c,h)}function rs(s,e,t,n,i,r,o,a,l,c,u=0){let h=(f,d,m)=>{let x=b=>u?(o-b)/u:.5,g=e(t,i,f),p=e(n,i,f),y=e(n,i,d),M=e(t,i,d);s.tri(g,p,y,a,a,a,[0,x(f),1,x(f),1,x(d)],m),s.tri(g,y,M,a,a,a,[0,x(f),1,x(d),0,x(d)],m)};o<=l+1e-6?h(r,o,rt):r>=l-1e-6?h(r,o,c):(h(r,l,rt),h(l,o,c))}function WS(s,e,t,n,i,r,o,a,l,c){let u=e(t,i,o),h=e(n,i,o),f=e(n,r,o),d=e(t,r,o),m=0,x=(r-i)/c;s.tri(u,h,f,a,a,a,[0,m,1,m,1,x],l),s.tri(u,f,d,a,a,a,[0,m,1,x,0,x],l)}function $0(s,e,t){let n=new gt,i=new gt,r=new gt(!0),o=new j(W0),a=new j(X0),l=[],c=[],u=[];for(let h of s){let f=n.count,d=i.count,m=r.count,x=e.get(h.opening.id)??zc,g=h.width,{sill:p,top:y,bucket:M}=h,b=(_,w,R)=>[h.start[0]+h.axis[0]*_+h.toRoom[0]*w,R,h.start[1]+h.axis[1]*_+h.toRoom[1]*w],v=(h.faceRoom-h.faceOut)/2,S=h.opening.mark==="closed",E=h.opening.type==="door"&&Ls(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!E||h.opening.type==="garage"){let _=-h.faceOut-.012,w=h.faceRoom+.012,R=h.opening.type==="garage"&&(S?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),T=R?He(Fi,.8):new j(W0),L=R?He(Fi,1):new j(X0);lt(n,b,-.045,.02,_,w,0,y+.045,T,L,t,M),lt(n,b,g-.02,g+.045,_,w,0,y+.045,T,L,t,M),lt(n,b,.02,g-.02,_,w,y-.02,y+.045,T,L,t,M)}if(h.opening.type==="door"){let _=Ls(h.opening,h.exterior),w=Fm(_),R=h.opening.swing==="out"?-1:1,T=R>0?h.faceRoom:-h.faceOut,L=h.opening.leaves===2,I=.02,C=g-.02,F=Lm(g,_,h.hingeAtStart,h.opening);if(F){for(let[k,B]of F.panels)lt(n,b,k,k+.04,v-.03,v+.03,.02,y-.02,o,a,t,M),lt(n,b,B-.04,B,v-.03,v+.03,.02,y-.02,o,a,t,M),lt(n,b,k,B,v-.03,v+.03,.02,.1,o,a,t,M),rs(i,b,k+.04,B-.04,v,.1,y-.02,Vr,t,M);I=F.x0,C=F.x1}let N=L?(C-I)/2-.004:C-I,U=w?.06:.04;w&&(lt(n,b,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new j(hf),a,t,M),h.exterior&&lt(n,b,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,y+.1,y+.17,He(Fi,.55),He(Fi,.85),t,rt));let V=E?[]:[[h.hingeAtStart,x.open]];L&&!E&&V.push([!h.hingeAtStart,x.open2??0]);for(let[k,B]of V){let H=Math.min(1,Math.max(0,B)),ee=_==="sliding"?0:H*BS,Q=_==="sliding"?H*N:0,ce=(st,Ne,Ze)=>{let ot=st*Math.cos(ee)-Ne*Math.sin(ee)-Q,je=T+R*(Ne*Math.cos(ee)+st*Math.sin(ee)+(Q?.05:0));return b(k?I+ot:C-ot,je,Ze)},ue=H>.05?rt:M,Be=S?!!x.sensed&&H<.05:H>.9,q=Be?He(Fi,.7):new j(w?VS:kS),Z=Be?He(Fi,.9):new j(w?GS:zS);_==="glass"?(lt(n,ce,0,.05,-U,0,.01,y-.01,q,Z,t,ue),lt(n,ce,N-.05,N,-U,0,.01,y-.01,q,Z,t,ue),lt(n,ce,.05,N-.05,-U,0,.01,.12,q,Z,t,ue),lt(n,ce,.05,N-.05,-U,0,y-.08,y-.01,q,Z,t,ue),rs(i,ce,.05,N-.05,-U/2,.12,y-.08,Vr,t,ue)):lt(n,ce,0,N,-U,0,.01,y-.01,q,Z,t,ue),_==="front_glass"?rs(i,ce,.12,N-.12,.001,y*.55,y-.18,Vr,t,ue):w&&rs(i,ce,.1,.18,.001,.3,y-.3,Vr,t,ue);let ae=Math.min(1.05,y*.5),we=w?.3:.012,ge=w?N-.11:N-.16,ze=w?N-.08:N-.05;lt(n,ce,ge,ze,.004,.05,ae-we,ae+we,new j(q0),new j(Y0),t,ue),lt(n,ce,ge,ze,-U-.05,-U-.004,ae-we,ae+we,new j(q0),new j(Y0),t,ue)}}else if(h.opening.type==="garage"){let _=Math.min(1,Math.max(0,x.cover??1)),w=new j(13951231),R=h.faceRoom-.03,T=y*(1-_);_>.01&&rs(r,b,.02,g-.02,R,T,y,w,t,M,.5);let L=(1-_)*y;L>.01&&WS(r,b,.02,g-.02,R,R+L,y+.03,w,M,.5)}else if(Ls(h.opening,h.exterior)==="glass_wall"){lt(n,b,0,.04,v-.025,v+.025,p,y,o,a,t,M),lt(n,b,g-.04,g,v-.025,v+.025,p,y,o,a,t,M),lt(n,b,.04,g-.04,v-.025,v+.025,p,p+.03,o,a,t,M),lt(n,b,.04,g-.04,v-.025,v+.025,y-.04,y,o,a,t,M);let R=Math.max(1,Math.round((g-2*.04)/.9)),T=(g-2*.04)/R;for(let L=1;L<R;L++){let I=.04+L*T;lt(n,b,I-.02,I+.02,v-.025,v+.025,p+.03,y-.04,o,a,t,M)}for(let L=0;L<R;L++){let I=.04+L*T+(L?.02:0),C=.04+(L+1)*T-(L<R-1?.02:0);rs(i,b,I,C,v,p+.03,y-.04,Vr,t,M)}}else{lt(n,b,0,.06,v-.035,v+.035,p,y,o,a,t,M),lt(n,b,g-.06,g,v-.035,v+.035,p,y,o,a,t,M),lt(n,b,.06,g-.06,v-.035,v+.035,p,p+(p>.05?.06:.03),o,a,t,M),lt(n,b,.06,g-.06,v-.035,v+.035,y-.06,y,o,a,t,M),p>.3&&(lt(n,b,-.04,g+.04,v+.035,h.faceRoom+.07,p-.03,p,new j(hf),a,t,M),h.exterior&&lt(n,b,-.03,g+.03,-h.faceOut-.06,v-.035,p-.04,p-.02,new j(hf),a,t,M));let R=.055,T=p+(p>.05?.06:.03),L=y-.06,I=v+.035,C=v+.035+.06,N=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let U of N){let V=U.open>.02||U.tilt>.02,k=S?!!x.sensed&&!V:V,B=k?He(Fi,.75):new j(NS),H=k?He(Fi,.95):a,ee=U.x0,Q=U.x1,ce=Q-ee,ue=U.open*US,Be=U.tilt*HS,q=(ae,we,ge)=>{let ze=ge-T,st=we+ze*Math.sin(Be),Ne=T+ze*Math.cos(Be),Ze=ae*Math.cos(ue)-(st-I)*Math.sin(ue);st=I+(st-I)*Math.cos(ue)+ae*Math.sin(ue);let ot=U.atStart?ee+Ze:Q-Ze;return b(ot,st,Ne)},Z=ue>.05?rt:M;if(lt(n,q,0,R,I,C,T,L,B,H,t,Z),lt(n,q,ce-R,ce,I,C,T,L,B,H,t,Z),lt(n,q,R,ce-R,I,C,T,T+R,B,H,t,Z),lt(n,q,R,ce-R,I,C,L-R,L,B,H,t,Z),rs(i,q,R,ce-R,(I+C)/2,T+R,L-R,k?He(Fi,.16):Vr,t,Z),Ls(h.opening,h.exterior)==="bars"){let ae=(T+L)/2,we=(I+C)/2;lt(n,q,R,ce-R,we-.012,we+.012,ae-.012,ae+.012,B,H,t,Z),lt(n,q,ce/2-.012,ce/2+.012,we-.012,we+.012,T+R,L-R,B,H,t,Z)}}}if(x.cover!==null){let _=-h.faceOut,w=y+.2;lt(n,b,-.05,g+.05,_-.15,_,y,w,new j(OS),a,t,M);let R=Math.min(1,Math.max(0,x.cover));if(R>.01){let T=y-R*(y-p);rs(r,b,0,g,_-.07,T,y,new j(16777215),t,M,.045)}}l.push({id:h.opening.id,start:f,end:n.count}),c.push({id:h.opening.id,start:d,end:i.count}),u.push({id:h.opening.id,start:m,end:r.count})}return{frames:n.geometry(),glass:i.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:u}}var ff=Math.PI/180,ua=2400,Gr=1600,df=9;function Vc(s,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),i=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[r,o]of s)i.addColorStop(r,o);return n.fillStyle=i,n.fillRect(0,0,e,e),new an(t)}function XS(s){let t=document.createElement("canvas");t.width=128,t.height=128/2;let n=t.getContext("2d"),i=s*9301+49297,r=()=>(i=(i*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*r()),l=128/2*(.45+.25*r()),c=128*(.12+.14*r()),u=n.createRadialGradient(a,l,0,a,l,c);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.6,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.fillRect(0,0,128,128/2)}return new an(t)}var Gc=class{group=new ft;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(ua*3);snow;snowPhase=new Float32Array(Gr);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(e){this.scene=e,this.group.name="live-weather",this.group.renderOrder=5;let t=new Ge;t.setAttribute("position",new Ue(new Float32Array(ua*6),3)),this.rain=new xn(t,new Bt({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=Vc([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),i=new Ge;i.setAttribute("position",new Ue(new Float32Array(Gr*3),3)),this.snow=new En(i,new bn({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<Gr;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let r=new Ge;r.setAttribute("position",new Ue(new Float32Array(600*3),3)),this.hail=new En(r,new bn({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=Vc([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<df;c++){let u=new _s(new Wi({map:XS(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),h=new Fe(new Fn(1,1),new Ye({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:ci}));h.rotation.x=-Math.PI/2,h.renderOrder=-1,this.clouds.push({sprite:u,shadow:h,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(u,h)}let a=new Ge;a.setAttribute("position",new Ue(new Float32Array(144),3)),this.bolt=new xn(a,new Bt({color:14674175,transparent:!0,opacity:1,blending:pt,depthWrite:!1})),this.bolt.visible=!1;let l=Vc([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new _s(new Wi({map:l,transparent:!0,depthWrite:!1,blending:pt,fog:!1})),this.halo=new _s(new Wi({map:Vc([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:pt,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,e.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(e){this.bounds=e,this.seed()}set(e){let t=this.view;this.view=e,this.group.visible=!!e;let n=e?.weather??null;if(e&&n&&n.fog>.02&&!e.low){let i=new j(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255);this.scene.fog=new gs(i,.008+.04*n.fog)}else this.scene.fog instanceof gs&&(this.scene.fog=null);(!t||t.low!==e?.low||!!t.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let e=this.view?.weather;if(!e)return[0,0];let n=((e.windFrom??270)+(this.view?.north??0)+180)*ff,i=.4+7*e.wind;return[Math.sin(n)*i,-Math.cos(n)*i]}count(e,t){let n=this.view?.low??!1;return Math.round(Math.min(1,e)*t*(n?.3:1))}seed(){let e=this.bounds,t=this.view?.weather,n=()=>e.x0+Math.random()*(e.x1-e.x0),i=()=>e.z0+Math.random()*(e.z1-e.z0),r=()=>e.y0+Math.random()*(e.y1-e.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<ua;c++){let u=n(),h=r(),f=i();o.setXYZ(c*2,u,h,f),o.setXYZ(c*2+1,u,h-.4,f),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<Gr;c++)a.setXYZ(c,n(),r(),i());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),r(),i());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(t?.rain??0,ua)*2),this.snow.geometry.setDrawRange(0,this.count(t?.snow??0,Gr)),this.hail.geometry.setDrawRange(0,this.count(t?.hail??0,600)),this.rain.visible=!!t&&t.rain>.01,this.snow.visible=!!t&&t.snow>.01,this.hail.visible=!!t&&t.hail>.01,this.clouds.forEach((c,u)=>{c.angle=u/df*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=e.x0+Math.random()*(e.x1-e.x0),c.sz=e.z0+Math.random()*(e.z1-e.z0)}),this.placeClouds(0)}placeClouds(e){let t=this.view,n=t?.weather,i=n?.cloud??0,r=this.bounds,o=(r.x0+r.x1)/2,a=(r.z0+r.z1)/2,l=Math.max(r.x1-r.x0,r.z1-r.z0),[c,u]=this.windVector(),h=Math.round(i*df),f=t?.sky??[20,28,44],d=(f[0]+f[1]+f[2])/765,m=n?.rain||n?.lightning?.3:0,x=Math.max(.12,Math.min(1,.28+d*.9-m-.25*Math.max(0,i-.6))),g=Math.hypot(c,u)/Math.max(20,l*4)*e*Math.sign(c||1);this.clouds.forEach((p,y)=>{let M=y<h;p.angle+=g*p.speed;let b=l*p.ring,v=p.sprite.material;v.color.setRGB(x,x*1.02,Math.min(1,x*1.12)),v.opacity=M?.3+.45*i:0,p.sprite.visible=M,p.sprite.position.set(o+Math.cos(p.angle)*b,r.y0+l*p.lift,a+Math.sin(p.angle)*b),p.sprite.scale.set(l*p.scale*1.6,l*p.scale*.6,1),p.sx+=c*.45*p.speed*e,p.sz+=u*.45*p.speed*e;let S=l*.4;p.sx>r.x1+S&&(p.sx=r.x0-S),p.sx<r.x0-S&&(p.sx=r.x1+S),p.sz>r.z1+S&&(p.sz=r.z0-S),p.sz<r.z0-S&&(p.sz=r.z1+S);let E=p.shadow.material;E.opacity=M?.12+.2*i:0,p.shadow.visible=M,p.shadow.position.set(p.sx,r.y0+.03,p.sz),p.shadow.scale.set(l*p.scale*.55,l*p.scale*.35,1)})}placeDisc(){let e=this.view,t=e?.sun,n=e?.weather?.cloud??0,i=!t||t.elevation<-3;if(!e||!t||!e.disc||n>.9||!i&&t.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let r=this.bounds,o=new z((r.x0+r.x1)/2,r.y0,(r.z0+r.z1)/2),a=Math.max(70,Math.max(r.x1-r.x0,r.z1-r.z0)*3.5),l=((i?t.azimuth+180:t.azimuth)+e.north)*ff,c=Math.max(8,Math.abs(t.elevation))*ff,u=new z(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),h=o.addScaledVector(u,a),f=a*(i?.07:.1);this.disc.position.copy(h),this.halo.position.copy(h),this.disc.scale.setScalar(f),this.halo.scale.setScalar(f*3.2);let d=this.disc.material,m=this.halo.material,x=i?0:Math.max(0,1-t.elevation/20);d.color.set(i?14016242:new j(1,.9-.25*x,.6-.35*x)),m.color.copy(d.color),d.opacity=(i?.7:.95)*(1-n),m.opacity=(i?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(e){let t=this.bounds,i=(Math.random()<.5?-1:1)<0?t.x0-2-Math.random()*6:t.x1+2+Math.random()*6,r=t.z0+Math.random()*(t.z1-t.z0),o=t.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let u=0;u<l;u++){let h=o-(u+1)/l*(o-t.y0),f=i+(Math.random()-.5)*1.6,d=r+(Math.random()-.5)*1.6;a.setXYZ(u*2,i,c,r),a.setXYZ(u*2+1,f,h,d),i=f,r=d,c=h}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=e+90+Math.random()*120,this.onFlash?.(!0)}step(e){let t=this.view,n=t?.weather;if(!t||!n)return this.last=0,!1;let i=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e;let r=this.bounds,o=r.y1-r.y0,[a,l]=this.windVector();if(this.rain.visible&&i){let c=this.rain.geometry.getAttribute("position"),u=c.array,h=this.count(n.rain,ua);for(let f=0;f<h;f++){let d=f*6,m=this.rainVel[f*3+1],x=u[d]+a*i,g=u[d+1]-m*i,p=u[d+2]+l*i;g<r.y0&&(g+=o,x=r.x0+Math.random()*(r.x1-r.x0)-a*.4,p=r.z0+Math.random()*(r.z1-r.z0)-l*.4);let y=.05;u[d]=x,u[d+1]=g,u[d+2]=p,u[d+3]=x-a*y,u[d+4]=g+m*y,u[d+5]=p-l*y}c.needsUpdate=!0}if(this.snow.visible&&i){let c=this.snow.geometry.getAttribute("position"),u=c.array,h=this.count(n.snow,Gr),f=e/1e3;for(let d=0;d<h;d++){let m=d*3,x=this.snowPhase[d],g=u[m]+(a*.35+Math.sin(f*1.3+x)*.35)*i,p=u[m+1]-(.7+.5*(x*7%1))*i,y=u[m+2]+(l*.35+Math.cos(f*1.1+x)*.35)*i;p<r.y0&&(p+=o,g=r.x0+Math.random()*(r.x1-r.x0),y=r.z0+Math.random()*(r.z1-r.z0)),u[m]=g,u[m+1]=p,u[m+2]=y}c.needsUpdate=!0}if(this.hail.visible&&i){let c=this.hail.geometry.getAttribute("position"),u=c.array,h=this.count(n.hail,600);for(let f=0;f<h;f++){let d=f*3,m=u[d+1]-14*i;m<r.y0&&(m+=o),u[d]+=a*.5*i,u[d+1]=m,u[d+2]+=l*.5*i}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(i),n.lightning&&!t.low?(this.nextBolt||(this.nextBolt=e+2500+Math.random()*6e3),e>=this.nextBolt&&(this.strike(e),this.nextBolt=e+3500+Math.random()*9e3),this.bolt.visible&&e>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof gs&&(this.scene.fog=null)}};var Hc=46,Vs=900;function qS(){let s=document.createElement("canvas");s.width=s.height=32;let e=s.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new an(s)}var Wc=class{group=new ft;scene;lift;tex=qS();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(Vs*3);sparkField=new Int16Array(Vs);sparkPhase=new Float32Array(Vs);sparkCount=0;last=0;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-energy";let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(Vs*3),3)),n.setAttribute("color",new Ue(new Float32Array(Vs*3),3)),this.sparks=new En(n,new bn({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:pt})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),e.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(e){let t=new Set(e.map(n=>n.key));for(let[n,i]of this.arcs)t.has(n)||(this.group.remove(i.line,i.points),i.line.geometry.dispose(),i.line.material.dispose(),i.points.geometry.dispose(),i.points.material.dispose(),this.arcs.delete(n));for(let n of e){let i=this.arcs.get(n.key);if(!i){let o=new Ge;o.setAttribute("position",new Ue(new Float32Array(99),3));let a=new An(o,new Bt({transparent:!0,opacity:.4,depthWrite:!1,blending:pt})),l=new Ge;l.setAttribute("position",new Ue(new Float32Array(Hc*3),3));let c=new En(l,new bn({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:pt}));a.frustumCulled=c.frustumCulled=!1;let u=new Float32Array(Hc);for(let h=0;h<Hc;h++)u[h]=Math.random();i={arc:n,line:a,points:c,phase:u,count:0,speed:0,a:new z,b:new z,c:new z},this.arcs.set(n.key,i),this.group.add(a,c)}i.arc=n;let r=new j(n.color[0]/255,n.color[1]/255,n.color[2]/255);i.line.material.color.copy(r),i.points.material.color.copy(r),i.count=Math.max(3,Math.min(Hc,Math.round(3+Math.sqrt(n.power)/2.2))),i.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),i.points.geometry.setDrawRange(0,i.count)}this.place()}setSparks(e){this.sparkFields=e;let t=e.reduce((i,r)=>i+r.quads.length*r.level,0),n=0;t>0&&e.forEach((i,r)=>{if(i.level<=0)return;let o=Math.round(Vs*i.quads.length*i.level/Math.max(t,e.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<Vs;a++,n++){let l=i.quads[Math.floor(Math.random()*i.quads.length)],c=Math.random(),u=Math.random();for(let h=0;h<3;h++){let f=l[0][h]+(l[1][h]-l[0][h])*c,d=l[3][h]+(l[2][h]-l[3][h])*c;this.sparkBase[n*3+h]=f+(d-f)*u+(h===1?.12:0)}this.sparkField[n]=r,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(e,t){let n=this.lift(e.floorId);return t.set(e.x,n.y+e.y,e.z),n.visible}place(){for(let e of this.arcs.values()){let t=this.world(e.arc.from,e.a),n=this.world(e.arc.to,e.b),i=e.a.distanceTo(e.b);e.c.copy(e.a).add(e.b).multiplyScalar(.5),e.c.y=Math.max(e.a.y,e.b.y)+.6+i*.22;let r=t&&n;e.line.visible=e.points.visible=r;let o=e.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(e,l))}o.needsUpdate=!0}}bezier(e,t){let n=1-t;return[n*n*e.a.x+2*n*t*e.c.x+t*t*e.b.x,n*n*e.a.y+2*n*t*e.c.y+t*t*e.b.y,n*n*e.a.z+2*n*t*e.c.z+t*t*e.b.z]}step(e){if(!this.active||!this.group.visible)return this.last=0,!1;let t=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let i=n.points.geometry.getAttribute("position");for(let r=0;r<n.count;r++)n.phase[r]=(n.phase[r]+n.speed*t)%1,i.setXYZ(r,...this.bezier(n,n.phase[r]));i.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),i=this.sparks.geometry.getAttribute("color"),r=e/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(r*2.4+this.sparkPhase[o]*3))**6,u=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;i.setXYZ(o,u,u*.86,u*.35)}n.needsUpdate=!0,i.needsUpdate=!0}return!0}setVisible(e){this.group.visible=e}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var K0=3,Xc=class{group=new ft;scene;lift;ringGeo=new Ms(.92,1,48);spots=new Map;links=[];constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-sound",e.add(this.group)}get active(){return this.spots.size>0}set(e,t){let n=new Set(e.map(i=>i.id));for(let[i,r]of this.spots)if(!n.has(i)){for(let o of r.rings)this.group.remove(o),o.material.dispose();this.spots.delete(i)}for(let i of e){let r=this.spots.get(i.id);if(!r){let a=Array.from({length:K0},()=>{let l=new Fe(this.ringGeo,new Ye({transparent:!0,opacity:0,depthWrite:!1,blending:pt,side:Mt}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});r={spot:i,rings:a},this.spots.set(i.id,r)}r.spot=i;let o=new j(i.color[0]/255,i.color[1]/255,i.color[2]/255);for(let a of r.rings)a.material.color.copy(o)}for(let i of this.links)this.group.remove(i.line),i.line.geometry.dispose(),i.line.material.dispose();this.links=t.map(([i,r])=>{let o=new Ge;o.setAttribute("position",new Ue(new Float32Array(51),3));let a=new An(o,new Bt({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:pt}));return a.frustumCulled=!1,this.group.add(a),{a:i,b:r,line:a}})}step(e){if(!this.spots.size&&!this.links.length)return!1;let t=e/1e3;for(let n of this.spots.values()){let i=this.lift(n.spot.at.floorId),r=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(t*.55+a/K0)%1;o.visible=i.visible,o.position.set(n.spot.at.x,i.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*r),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let i=this.lift(n.a.floorId),r=this.lift(n.b.floorId);n.line.visible=i.visible&&r.visible;let o=n.line.geometry.getAttribute("position"),a=i.y+n.a.y,l=r.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let u=0;u<=16;u++){let h=u/16,f=Math.sin(Math.PI*h)*(.3+c*.12)+Math.sin(t*3+h*12)*.03;o.setXYZ(u,n.a.x+(n.b.x-n.a.x)*h,a+(l-a)*h+f,n.a.z+(n.b.z-n.a.z)*h)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var YS=Math.PI/180;function $S(){let s=document.createElement("canvas");s.width=s.height=64;let e=s.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new an(s)}var qc=class{group=new ft;scene;lift;glowTex=$S();views=new Map;onChange=null;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-screens",e.add(this.group)}get active(){return[...this.views.values()].some(e=>e.s.playing)}set(e){let t=new Set(e.map(n=>n.id));for(let[n,i]of this.views)t.has(n)||this.drop(n,i);for(let n of e){let i=this.views.get(n.id);if(!i){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new an(o);a.colorSpace=vt;let l=new Fe(new Fn(1,1),new Ye({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Fe(new Fn(1,1),new Ye({map:this.glowTex,transparent:!0,depthWrite:!1,blending:pt,side:Mt}));c.renderOrder=2,this.group.add(l,c),i={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,i)}i.s=n;let r=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(r!==i.sig){let o=i.sig.split("|")[3]!==(n.picture??"");i.sig=r,o&&this.loadPicture(i),this.draw(i)}this.place(i)}}loadPicture(e){e.image=null;let t=e.s.picture;if(!t)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{e.s.picture!==t||!this.views.has(e.s.id)||(e.image=n,this.draw(e),this.onChange?.())},n.src=t}draw(e){let t=e.s,n=e.canvas.getContext("2d"),i=e.canvas.width,r=e.canvas.height,[o,a,l]=t.color,c=n.createLinearGradient(0,0,i,r);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,i,r);let u=22,h=u;if(e.image){let f=r-u*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let d=e.image.naturalWidth||1,m=e.image.naturalHeight||1,x=Math.max(f/d,f/m),g=f/x,p=f/x;n.drawImage(e.image,(d-g)/2,(m-p)/2,g,p,u,u,f,f),n.restore(),h=u*2+f}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,t.title||t.app||"",h,r/2-18,i-h-u),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,t.subtitle,h,r/2+22,i-h-u),t.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(t.playing?"\u25B6 ":"\u275A\u275A ")+t.app,h,r-u-14,i-h-u)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,r-6,i*(t.playing?1:.4),6),e.texture.needsUpdate=!0}text(e,t,n,i,r){let o=t;for(;o.length>1&&e.measureText(o).width>r;)o=o.slice(0,-2);e.fillText(o===t?o:`${o}\u2026`,n,i)}place(e){let t=e.s,n=t.rect,i=t.rotation*YS,r=this.lift(t.floorId),o=(n.x0+n.x1)/2,a=(m,x)=>[t.x+m*Math.cos(i)-x*Math.sin(i),t.z+m*Math.sin(i)+x*Math.cos(i)],l=n.x1-n.x0,c=n.y1-n.y0,[u,h]=a(o,n.z+.012);e.screen.position.set(u,r.y+(n.y0+n.y1)/2,h),e.screen.rotation.set(0,-i,0),e.screen.scale.set(l,c,1);let[f,d]=a(o,n.z-.18);e.glow.position.set(f,r.y+(n.y0+n.y1)/2,d),e.glow.rotation.set(0,-i,0),e.glow.scale.set(l*2.4,c*2.6,1),e.glow.material.color=new j(t.color[0]/255,t.color[1]/255,t.color[2]/255),e.screen.visible=e.glow.visible=r.visible}step(e){let t=!1;for(let n of this.views.values()){this.place(n);let i=n.glow.material;i.opacity=n.s.playing?.55+.25*Math.sin(e/900+n.s.x):.25,t||=n.s.playing}return t}drop(e,t){this.group.remove(t.screen,t.glow),t.screen.geometry.dispose(),t.screen.material.dispose(),t.texture.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose(),this.views.delete(e)}dispose(){for(let[e,t]of this.views)this.drop(e,t);this.glowTex.dispose(),this.scene.remove(this.group)}};var Z0=new j(.25,.55,1),pf=new j(1,.3,.75),Yc=10,$c=class{group=new ft;scene;lift;points=[];line;comet;rings=[];ringGeo=new Ms(.18,.26,32);constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-trail";let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(3),3)),n.setAttribute("color",new Ue(new Float32Array(3),3)),this.line=new An(n,new Bt({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:pt})),this.line.frustumCulled=!1,this.comet=new Fe(new yo(.12,12,8),new Ye({color:pf,transparent:!0,depthWrite:!1,blending:pt})),this.group.add(this.line,this.comet),this.group.visible=!1,e.add(this.group)}set(e){this.points=e;for(let i of this.rings)this.group.remove(i),i.material.dispose();this.rings=e.map(i=>{let r=new Fe(this.ringGeo,new Ye({color:Z0.clone().lerp(pf,i.age),transparent:!0,opacity:.4+.6*i.age,depthWrite:!1,blending:pt,side:Mt}));return r.rotation.x=-Math.PI/2,this.group.add(r),r});let t=Math.max(1,(e.length-1)*Yc+1);this.line.geometry.dispose();let n=new Ge;n.setAttribute("position",new Ue(new Float32Array(t*3),3)),n.setAttribute("color",new Ue(new Float32Array(t*3),3)),this.line.geometry=n,this.group.visible=e.length>0}at(e,t){let n=this.points[e].at,i=this.points[Math.min(this.points.length-1,e+1)].at,r=this.lift(n.floorId),o=this.lift(i.floorId),a=r.y+n.y,l=o.y+i.y,c=Math.sin(Math.PI*t)*(.25+Math.hypot(n.x-i.x,n.z-i.z)*.08);return[n.x+(i.x-n.x)*t,a+(l-a)*t+c,n.z+(i.z-n.z)*t]}step(e){let t=this.points.length;if(!t)return!1;let n=this.line.geometry.getAttribute("position"),i=this.line.geometry.getAttribute("color"),r=0,o=new j;for(let a=0;a<Math.max(1,t-1);a++)for(let l=0;l<=Yc;l++){if(l===Yc&&a<t-2)continue;if(t===1&&l>0)break;let c=l/Yc;n.setXYZ(r,...this.at(a,t===1?0:c));let u=t===1?1:this.points[a].age+(this.points[Math.min(t-1,a+1)].age-this.points[a].age)*c;o.copy(Z0).lerp(pf,u).multiplyScalar(.3+.7*u),i.setXYZ(r,o.r,o.g,o.b),r++}if(this.line.geometry.setDrawRange(0,r),n.needsUpdate=i.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===t-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(e/250))}),t>1){let a=e/1e3%(1.2*(t-1)+1)/1.2,l=Math.min(t-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var Kc=class extends wi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Yi;e.deleteAttribute("uv");let t=new si({side:Qt}),n=new si,i=new ws(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new Fe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ys(e,n,6),a=new Tt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Fe(e,Hr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Fe(e,Hr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Fe(e,Hr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Fe(e,Hr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Fe(e,Hr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Fe(e,Hr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hr(s){return new vo({color:0,emissive:16777215,emissiveIntensity:s})}function mf(s,e){if(e===oh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Rr||e===ko){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Rr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function J0(s,e=Math.PI/3){let t=s.index?s.toNonIndexed():s,n=t.attributes.position,i=n.count,r;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)r=n.array;else{r=new Float64Array(i*3);for(let b=0;b<i;b++)r[3*b+0]=n.getX(b),r[3*b+1]=n.getY(b),r[3*b+2]=n.getZ(b)}let o=Math.cos(e),a=(1+1e-10)*100,l=i/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let v=9*b,S=r[v+0],E=r[v+1],_=r[v+2],w=r[v+3],R=r[v+4],T=r[v+5],L=r[v+6],I=r[v+7],C=r[v+8],F=L-w,N=I-R,U=C-T,V=S-w,k=E-R,B=_-T,H=N*B-U*k,ee=U*V-F*B,Q=F*k-N*V,ce=1/(Math.sqrt(H*H+ee*ee+Q*Q)||1);c[3*b+0]=H*ce,c[3*b+1]=ee*ce,c[3*b+2]=Q*ce}let u=new Int32Array(i),h=new Float64Array(i*3),f=1;for(;f<i*2;)f<<=1;let d=f-1,m=new Int32Array(f),x=0;for(let b=0;b<i;b++){let v=3*b,S=Math.trunc(r[v+0]*a),E=Math.trunc(r[v+1]*a),_=Math.trunc(r[v+2]*a),w=(Math.imul(S,73856093)^Math.imul(E,19349663)^Math.imul(_,83492791))&d;for(;;){let R=m[w];if(R===0){let L=3*x;h[L+0]=S,h[L+1]=E,h[L+2]=_,m[w]=x+1,u[b]=x++;break}let T=3*(R-1);if(h[T+0]===S&&h[T+1]===E&&h[T+2]===_){u[b]=R-1;break}w=w+1&d}}let g=new Int32Array(x+1);for(let b=0;b<i;b++)g[u[b]+1]++;for(let b=0;b<x;b++)g[b+1]+=g[b];let p=new Int32Array(i),y=g.slice(0,x);for(let b=0;b<l;b++){let v=3*b;p[y[u[v+0]]++]=b,p[y[u[v+1]]++]=b,p[y[u[v+2]]++]=b}let M=new Float32Array(i*3);for(let b=0;b<l;b++){let v=3*b,S=c[v+0],E=c[v+1],_=c[v+2];for(let w=0;w<3;w++){let R=v+w,T=u[R],L=0,I=0,C=0;for(let N=g[T],U=g[T+1];N<U;N++){let V=3*p[N],k=c[V+0],B=c[V+1],H=c[V+2];S*k+E*B+_*H>o&&(L+=k,I+=B,C+=H)}let F=1/(Math.sqrt(L*L+I*I+C*C)||1);M[3*R+0]=L*F,M[3*R+1]=I*F,M[3*R+2]=C*F}}return t.setAttribute("normal",new Wt(M,3,!1)),t}function j0(s){let e=new Map,t=new Map,n=s.clone();return Q0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Q0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Q0(s.children[n],e.children[n],t)}var Zc=class extends oi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new vf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new Jc(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Jc(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ii.extractUrlBase(e);o=Ii.resolveURL(c,this.path)}else o=Ii.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sg){try{o[Qe.KHR_BINARY_GLTF]=new Of(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Hf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Qe.KHR_MATERIALS_UNLIT:o[h]=new yf;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new Uf(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[h]=new Bf;break;case Qe.KHR_MESH_QUANTIZATION:o[h]=new kf;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function KS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function kt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_f=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new j(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],dn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ts(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ws(u),c.distance=h;break;case"spot":c=new Eo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),mi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},yf=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ye}extendParams(e,t,n){let i=[];e.color=new j(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}},vf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Mf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(r,r)}return Promise.all(i)}},Sf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},wf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Tf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new j(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Af=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Ef=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new j().setRGB(r[0],r[1],r[2],dn),Promise.all(i)}},Rf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new j().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}},If=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Pf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?_n:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Lf=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ff=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Df=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Jc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Nf=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==On.TRIANGLES&&c.mode!==On.TRIANGLE_STRIP&&c.mode!==On.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let x=new Xe,g=new z,p=new Tn,y=new z(1,1,1),M=new ys(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),M.setMatrixAt(v,x.compose(g,p,y));let b=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];M.instanceColor=new Ti(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let E=M.geometry;b=new Ge,b.name=E.name;for(let _ in E.attributes)b.setAttribute(_,E.attributes[_]);for(let _ in E.morphAttributes)b.morphAttributes[_]=E.morphAttributes[_];E.index!==null&&b.setIndex(E.index),b.morphTargetsRelative=E.morphTargetsRelative;for(let _ of E.groups)b.addGroup(_.start,_.count,_.materialIndex);E.boundingBox!==null&&(b.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(b.boundingSphere=E.boundingSphere.clone()),b.drawRange.start=E.drawRange.start,b.drawRange.count=E.drawRange.count,b.userData=Object.assign({},E.userData),M.geometry=b}let S=l[v];b.setAttribute(v,new Ti(S.array,S.itemSize,S.normalized))}Tt.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},sg="glTF",ha=12,eg={JSON:1313821514,BIN:5130562},Of=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ha,r=new DataView(e,ha),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===eg.JSON){let c=new Uint8Array(e,ha+o,a);this.content=n.decode(c)}else if(l===eg.BIN){let c=ha+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Uf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Vf[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Vf[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=Wr[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(d)},a,c,dn,f)})})}},Bf=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},kf=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},jc=class extends ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,y=1-g,M=p-f+h;for(let b=0;b!==a;b++){let v=o[x+b+a],S=o[x+b+l]*u,E=o[m+b+a],_=o[m+b]*u;r[b]=y*v+M*S+g*E+p*_}return r}},ZS=new Tn,zf=class extends jc{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return ZS.fromArray(r).normalize().toArray(r),r}},On={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tg={9728:Nt,9729:Ot,9984:Ml,9985:Tr,9986:Rs,9987:Yn},ng={33071:fn,33648:hr,10497:Xn},gf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},os={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JS={CUBICSPLINE:void 0,LINEAR:ps,STEP:ds},xf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function Gs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function ew(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function tw(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bf(t.attributes):e=s.indices+":"+bf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bf(s.targets[n]);return e}function bf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Gf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nw(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var iw=new Xe,Hf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new KS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new wo(this.options.manager):this.textureLoader=new Ro(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Gs(r,a,i),mi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Ii.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=gf[i.type],a=Wr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Wt(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=gf[i.type],c=Wr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,M=t.cache.get(y);M||(x=new c(a,p*d,i.count*d/u),M=new bs(x,d/u),t.cache.add(y,M)),g=new Hi(M,l,f%d/u,m)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),g=new Wt(x,l,m);if(i.sparse!==void 0){let p=gf.SCALAR,y=Wr[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,v=new y(o[1],M,i.sparse.count*p),S=new c(o[2],b,i.sparse.count*l);a!==null&&(g=new Wt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,_=v.length;E<_;E++){let w=v[E];if(g.setX(w,S[E*l]),l>=2&&g.setY(w,S[E*l+1]),l>=3&&g.setZ(w,S[E*l+2]),l>=4&&g.setW(w,S[E*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=tg[f.magFilter]||Ot,u.minFilter=tg[f.minFilter]||Yn,u.wrapS=ng[f.wrapS]||Xn,u.wrapT=ng[f.wrapT]||Xn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Nt&&u.minFilter!==Ot,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Xt(x);g.needsUpdate=!0,f(g)}),t.load(Ii.resolveURL(h,r.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),mi(h,o),h.userData.mimeType=o.mimeType||nw(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new bn,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Bt,on.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return si}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let h=i[Qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new j(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Mt);let u=r.alphaMode||xf.OPAQUE;if(u===xf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===xf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Ye&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ye){let h=r.emissiveFactor;a.emissive=new j().setRGB(h[0],h[1],h[2],dn)}return r.emissiveTexture!==void 0&&o!==Ye&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),mi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Gs(i,h,r),h})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ig(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=tw(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=ig(new Ge,c,t),c.mode===On.TRIANGLE_STRIP?f=f.then(d=>mf(d,ko)):c.mode===On.TRIANGLE_FAN&&(f=f.then(d=>mf(d,Rr))),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?jS(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let x=u[d],g=o[d],p,y=c[d];if(g.mode===On.TRIANGLES||g.mode===On.TRIANGLE_STRIP||g.mode===On.TRIANGLE_FAN||g.mode===void 0){let M=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");M&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=M&&b?new uo(x,y):new Fe(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===On.LINES)p=new xn(x,y);else if(g.mode===On.LINE_STRIP)p=new An(x,y);else if(g.mode===On.LINE_LOOP)p=new fo(x,y);else if(g.mode===On.POINTS)p=new En(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&ew(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),mi(p,r),g.extensions&&Gs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Gs(i,h[0],r),h[0];let f=new ft;r.extensions&&Gs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(hh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Dn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new Xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ho(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let M=0,b=f.length;M<b;M++){let v=f[M],S=d[M],E=m[M],_=x[M],w=g[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,S,E,_,w);if(R)for(let T=0;T<R.length;T++)p.push(R[T])}let y=new So(r,void 0,p);return mi(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,iw)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new z().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new br:c.length>1?u=new ft:c.length===1?u=c[0]:u=new Tt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),mi(u,r),r.extensions&&Gs(n,u,r),r.matrix!==void 0){let h=new Xe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ft;n.name&&(r.name=i.createUniqueName(n.name)),mi(r,n),n.extensions&&Gs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(j0(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof on||f instanceof Xt)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}os[r.path]===os.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(os[r.path]){case os.weights:u=Ei;break;case os.rotation:u=Ri;break;case os.translation:case os.scale:u=$i;break;default:n.itemSize===1?u=Ei:u=$i;break}let h=i.interpolation!==void 0?JS[i.interpolation]:ps,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let x=new u(l[d]+"."+os[r.path],t.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Gf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Ri?zf:jc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function sw(s,e,t){let n=e.attributes,i=new Ut;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){let u=Gf(Wr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new z,l=new z;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Gf(Wr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new gn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function ig(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=Vf[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Je.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),mi(s,e),sw(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?QS(s,e.targets,t):s})}var rg=new Map,og=new Map,rw=50*Math.PI/180;function ow(s){s.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.geometry,i=t.material,r=i.name??"";t.userData.paint=!!i.userData?.paint||/^Paint/.test(r),n.getAttribute("normal")||(t.userData.paint?n.computeVertexNormals():t.geometry=J0(n,rw)),i.flatShading=!1;let o=/glass/i.test(r);i.metalness=t.userData.paint?.55:o?0:Math.min(i.metalness??0,.4),i.roughness=t.userData.paint?.28:o?.05:Math.max(i.roughness??.6,.45),o&&(i.transparent=!0,i.depthWrite=!1,i.opacity=Math.max(i.opacity,.9))})}function ag(s){let e=rg.get(s);if(!e){let t=Am();if(!t)return Promise.resolve(!1);e=t(s).then(n=>n&&new Promise(i=>{new Zc().parse(n,"",r=>{ow(r.scene);let o=new Ut().setFromObject(r.scene),a=[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z];r.scene.position.set(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2);let l=new ft;l.add(r.scene),og.set(s,{root:l,size:a}),Em(s),i({root:l,size:a})},()=>i(null))})).catch(()=>null),rg.set(s,e)}return e.then(t=>!!t)}function lg(s,e){let t=og.get(s);if(!t)return null;let n=t.root.clone(!0),i=[];n.traverse(o=>{let a=o;if(!a.isMesh)return;let l=a.material.clone();a.userData.paint&&e.paint&&(l.color=new j(e.paint)),a.material=l,i.push(l)});let r=new ft;return r.add(n),r.scale.set((e.mirror?-1:1)*(e.w/t.size[0]),e.h/t.size[1],e.d/t.size[2]),r.position.set(e.x,e.y,e.z),r.rotation.y=-e.rotation*Math.PI/180,r.userData.own=i,r}function Wf(s){for(let e of s.userData.own??[])e.dispose()}function cg(s,e){let t=new Lr(e),n=t.fromScene(new Kc,.04).texture;t.dispose();let i=new To(16777215,9081766,.9),r=new Ts(16777215,1.6);return r.position.set(-4,9,6),s.add(i,r),{env:n,dispose:()=>{n.dispose(),i.removeFromParent(),r.removeFromParent()}}}function ug(s,e){for(let t of s.userData.own??[])t.envMap=e,t.envMapIntensity=.9}var aw=.3,hg=2.6;function fg(s,e=.32,t=.22,n=[]){let i=s.map(v=>v[0]),r=s.map(v=>v[1]),o=Math.min(...i),a=Math.max(...i),l=Math.min(...r),c=Math.max(...r),u=c-l>=a-o,h=t*.7071,f=v=>{let S=[v,[v[0]+t,v[1]],[v[0]-t,v[1]],[v[0],v[1]+t],[v[0],v[1]-t]],E=[...S,[v[0]+h,v[1]+h],[v[0]-h,v[1]+h],[v[0]+h,v[1]-h],[v[0]-h,v[1]-h]];return S.every(_=>mt(_,s))&&!n.some(_=>E.some(w=>mt(w,_)))},d=(v,S)=>f(u?[v,S]:[S,v]),m=(v,S)=>{let E=Math.ceil(Math.hypot(S[0]-v[0],S[1]-v[1])/.05);for(let _=1;_<E;_++)if(!f([v[0]+(S[0]-v[0])*_/E,v[1]+(S[1]-v[1])*_/E]))return!1;return!0},[x,g,p,y]=u?[o,a,l,c]:[l,c,o,a],M=[],b=!0;for(let v=x+t;v<=g-t+1e-6;v+=e){let S=null,E=null,_=.05;for(let L=p;L<=y+1e-6;L+=_)if(d(v,L)&&(E??=L),(!d(v,L)||L+_>y+1e-6)&&E!==null){let I=d(v,L)?L:L-_;(!S||I-E>S[1]-S[0])&&(S=[E,I]),E=null}if(!S||S[1]-S[0]<.2)continue;let w=L=>{let[I,C]=L?S:[S[1],S[0]];return[u?[v,I]:[I,v],u?[v,C]:[C,v]]},R=w(b),T=M[M.length-1];if(T&&n.length&&!m(T,R[0])){let L=w(!b);if(!m(T,L[0]))continue;R=L,b=!b}M.push(R[0],R[1]),b=!b}return M}function qf(s,e=.7,t=12){return Array.from({length:t},(n,i)=>{let r=i/t*Math.PI*2;return[s[0]+Math.cos(r)*e,s[1]+Math.sin(r)*e]})}var Xf=s=>Math.atan2(Math.sin(s),Math.cos(s));function dg(s,e,t){let n=null;if(e.mode==="cleaning"){if(!s.path.length)return!1;n=s.path[s.next%s.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let i=n[0]-s.pos[0],r=n[1]-s.pos[1],o=Math.hypot(i,r);if(o<.02){if(e.mode==="cleaning")return s.next=(s.next+1)%s.path.length,!0;let c=Xf(e.restHeading-s.heading);return Math.abs(c)<.02?!1:(s.heading+=Math.sign(c)*Math.min(Math.abs(c),hg*t),!0)}let a=Math.atan2(i,r),l=Xf(a-s.heading);if(s.heading=Xf(s.heading+Math.sign(l)*Math.min(Math.abs(l),hg*t)),Math.abs(l)<.35){let c=Math.min(o,aw*t);s.pos=[s.pos[0]+i/o*c,s.pos[1]+r/o*c]}return!0}var Xr=null,pg=new Map;function lw(s,e=180,t,n=1.3){let i=`${s.type}|${s.w}|${s.d}|${s.h}|${s.variant??""}|${e}|${n}`,r=pg.get(i);if(r)return r;t&&dc(t),Xr??=new Fr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Xr.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Xr.setSize(e,e,!1),Xr.setClearColor(0,0);let o=new gt,a=new cn,l=$t(s.type);if(l?.light)Ac(o,l,{x:0,z:0,rotation:0,w:s.w,d:s.d,h:s.h},0,16758087);else if(s.lamp)Yf(o,{x:0,z:0,size:[s.w,s.d,s.h],base:0,rotation:0,variant:s.variant??null,lamp:s.lamp},Math.max(s.h+.15,.6),16758087);else{let y={id:"preview",type:s.type,x:0,z:0,rotation:0,w:s.w,d:s.d,h:s.h,variant:s.variant??null,entity:null,power:null};Tc(o,a,new gt,y)}let c=new wi,u=new Fe(o.geometry(),new Ye({vertexColors:!0,color:new j(n,n,n)})),h=new xn(a.geometry(),new Bt({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));c.add(u,h);let f=new Ut().setFromObject(u),d=f.getCenter(new z),m=new Dn(-1,1,1,-1,.01,100);m.position.copy(d).add(new z(.9,.75,1.3).normalize().multiplyScalar(20)),m.lookAt(d),m.updateMatrixWorld();let x=.05;for(let y of[f.min.x,f.max.x])for(let M of[f.min.y,f.max.y])for(let b of[f.min.z,f.max.z]){let v=new z(y,M,b).applyMatrix4(m.matrixWorldInverse);x=Math.max(x,Math.abs(v.x),Math.abs(v.y))}let g=x*1.12;m.left=-g,m.right=g,m.top=g,m.bottom=-g,m.updateProjectionMatrix(),Xr.render(c,m);let p=Xr.domElement.toDataURL("image/png");return u.geometry.dispose(),u.material.dispose(),h.geometry.dispose(),h.material.dispose(),pg.set(i,p),p}var gg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},cw=2.4,uw=1.4,hw=.22,xg=140,Kf=32,fw=500,bg=160,it=2767456,dw=1911110,pw=1,_g=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),$f=450,yg=125,mw=.08,Zf={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},gw=new j(1714765);function xw(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Jf=class{host;options;renderer;scene=new wi;camera=new Ht(38,1,.1,400);controls;labels;root=new ft;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;meshes=[];meshLight=null;meshAsked=new Set;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",e.append(this.labels),this.patternTexture=bw(),this.blindTexture=yw(),this.haloTexture=Mw(),this.ground=new Fe(new Fn(1,1),new Ye({transparent:!0,blending:pt,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new Gc(this.scene),this.energyLayer=new Wc(this.scene,this.liftOf),this.soundLayer=new Xc(this.scene,this.liftOf),this.screenLayer=new qc(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new $c(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let i=n.some(r=>r.isIntersecting);i!==this.onScreen&&(this.onScreen=i,i&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,i])=>`${n}=${i}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let i=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=i,this.resize()}setMeshSource(e){Tm(e)}setPacks(e){dc(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(h=>h.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let i=n.start_view;if(i){let u=t.floor.elevation+t.ty,[h,f]=xc(n.points),d=i.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new z(d.x,d.y+u,d.z),radius:i.radius,phi:i.phi,theta:i.theta});return}let[r,o]=xc(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new z(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new z(r,t.floor.elevation+t.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let i=this.devicePins.get(n.id);i||(i={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,i),this.labels.append(i.el));let r=i.el;i.icon!==n.icon&&(i.icon=n.icon,r.querySelector(".nf-dev-icon").innerHTML=n.icon),i.text!==n.text&&(i.text=n.text,r.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";i.caption!==o&&(i.caption=o,r.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";i.watt!==a&&(i.watt=a,r.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;i.label!==l&&(i.label=l,r.title=n.name,r.setAttribute("aria-label",l)),i.active!==n.active&&(i.active=n.active,r.classList.toggle("nf-dev-on",n.active)),i.unavailable!==n.unavailable&&(i.unavailable=n.unavailable,r.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";i.glow!==c&&(i.glow=c,c?r.style.setProperty("--nf-glow",c):r.style.removeProperty("--nf-glow"))}for(let[n,i]of this.devicePins)t.has(n)||(i.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let i=this.personPins.get(n.id);if(i||(i=document.createElement("div"),i.className="nf-person",i.dataset.entity=n.id,this.personPins.set(n.id,i),this.labels.append(i)),i.title=n.name,i.setAttribute("aria-label",n.name),i.dataset.picture!==(n.picture??"")||i.dataset.initials!==n.initials)if(i.dataset.picture=n.picture??"",i.dataset.initials=n.initials,i.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),i.append(r)}else i.textContent=n.initials}for(let[n,i]of this.personPins)t.has(n)||(i.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=U0(e),n=t?1:0;n===Uc.value&&(!t||Oc.value.equals(new z(...t)))||(Uc.value=n,t&&Oc.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=O0(e);let t=Bc(e),n=[...this.floors.map(i=>i.materials.lines),...this.roof?[this.roof.lines]:[]];for(let i of n)i.blending=t,i.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.invalidate()}liftOf=e=>{if(!e)return{y:0,dy:0,visible:!0};let t=this.floorMap.get(e);return t?{y:t.floor.elevation+t.y,dy:t.y,visible:t.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(e,t){this.energyLayer.setArcs(e),this.energyLayer.setSparks(t),this.invalidate()}setLiveSound(e,t){this.soundLayer.set(e,t),this.invalidate()}setLiveTrail(e){this.trailLayer.set(e),this.invalidate()}setLiveScreens(e){let t=[];for(let n of e){let i=this.building?.floors.find(a=>a.id===n.floorId),r=i?.furniture.find(a=>a.id===n.furnitureId),o=r&&i?ef(r,i):null;!r||!o||t.push({...n,x:r.x,z:r.z,rotation:r.rotation,rect:o})}this.screenLayer.set(t),this.invalidate()}setLiveAnchors(e,t){this.liveAnchors=e,this.liveAnchorCb=t,this.invalidate()}placeLhAnchors(){let e=this.liveAnchorCb;if(!e||!this.liveAnchors.length)return;let t=new z;this.liveAnchors.forEach((n,i)=>{let r=this.liftOf(n.floorId);t.set(n.x,r.y+n.y,n.z).project(this.camera);let o=r.visible&&t.z<1&&Math.abs(t.x)<1.15&&Math.abs(t.y)<1.15;e(i,(t.x+1)/2*this.size.w,(1-t.y)/2*this.size.h,o)})}setSky(e){this.skyView=e,this.weatherLayer.set(e?{...e,low:e.low||this.lowQuality}:null);for(let t of this.floors)this.buildSun(t);this.invalidate()}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let i=document.createElement("small");i.textContent=n,e.append(i),e.classList.add("nf-pin-info")}else e.classList.remove("nf-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,i])=>this.roomInfo.get(n)===i))){this.roomInfo=e;for(let n of this.floors)for(let i of n.roomPins)this.fillRoomPin(i.pin,i.room.name,e.get(i.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),i=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==i&&(n.textContent=i,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let i=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};i.tl=n.left?1:0,i.tr=n.right?1:0,this.fridges.set(t,i)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=1-Math.exp(-e/bg),n=new Set;for(let[i,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(i));continue}r[o]+=l*t,n.add(i)}if(!n.size)return!1;for(let i of this.floors)i.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(i);return!0}buildFridges(e){let t=new gt;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let i=this.fridges.get(n.id);c0(t,n,Nn(e.floor,n),i?.l??0,i?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:e.theta,phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.meshLight?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&xw();this.lowQuality=t,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||t}),this.highQuality=e==="high";let n=new Fr({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=vt,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Dc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,i)=>this.swipeStart(e,t,n,i),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.meshes)e.group.removeFromParent(),Wf(e.group);this.meshes=[];for(let e of this.floors){e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(e){let t=document.createElement("button");t.className="nf-dev",t.dataset.entity=e;let n=document.createElement("span");n.className="nf-dev-icon";let i=document.createElement("span");i.className="nf-dev-text";let r=document.createElement("span");r.className="nf-dev-watt";let o=document.createElement("span");o.className="nf-dev-name",t.append(n,i,r,o);let a,l=!1;t.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=e;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{l=!0;let h=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-f.left,h.top+h.height/2-f.top)},fw)});let c=()=>clearTimeout(a);return t.addEventListener("pointerleave",c),t.addEventListener("pointercancel",c),t.addEventListener("pointerup",c),t.addEventListener("contextmenu",u=>u.preventDefault()),t.addEventListener("click",u=>{if(u.stopPropagation(),this.furnish){this.selectDevice(e),this.options.onDeviceSelect?.(e);return}if(l)return;let h=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceTap?.(e,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}),t.addEventListener("keydown",u=>{if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let h=t.getBoundingClientRect(),f=this.host.getBoundingClientRect();this.options.onDeviceHold?.(e,h.left+h.width/2-f.left,h.top+h.height/2-f.top)}}),t}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=k0(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),i=vw(e.floor,e.geo.openRooms);if(e.lightZones=i.some((a,l)=>a!==l)?i:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<i.length&&(n.room[a]=i[l])}for(let a of n.doors)a.a>=0&&a.a<i.length&&(a.a=i[a.a]),a.b>=0&&a.b<i.length&&(a.b=i[a.b])}e.lightSurface=n;let r=new Ge;r.setAttribute("position",new Ue(n.pos,3)),r.setAttribute("color",new Ue(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Ue(n.fold,1));let o=new xs(new Uint32Array(n.pos.length/3),1);o.setUsage(lh),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=r,e.glowSig="",this.buildGlow(e)}lightSources(e){let t=e.floor.height,n=[];for(let i of this.devices){let r=this.glowOf(i);if(i.floorId!==e.floor.id||!r)continue;let o=G0(e.floor,i.x,i.z),a=H0(e.lightZones,o),[l,,c]=i.size??(i.lamp?Zf[i.lamp]:[.3,.3,.3]),u=i.base??0,h={ceiling:[t-.12,"ceiling"],downlight:[t-.03,"spot"],spot:[t-c,"spot"],panel:[t-.05,"ceiling"],pendant:[Math.max(.5,t-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<pw?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[f,d]=i.lamp?h[i.lamp]:[i.y,"omni"],m=i.lightY??f,x=r.color;if(i.lamp==="strip"){let g=(i.rotation??0)*Lt,p=!!i.upright||Math.abs(i.roll??0)>45;for(let y of[-1/3,0,1/3])i.upright?n.push({x:i.x,y:u+l*(.5+y),z:i.z,color:x,level:r.level*.55,kind:"omni",room:a}):n.push({x:i.x+Math.cos(g)*l*y,y:m,z:i.z+Math.sin(g)*l*y,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else n.push({x:i.x,y:m,z:i.z,color:x,level:r.level,kind:d,room:a})}return n}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=this.lightSources(e),i=t.doors.map(h=>{let f=e.geo.openings.find(m=>m.opening.id===h.id);if(f&&Ls(f.opening,f.exterior)==="passage")return 1;let d=e.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+i.map(h=>h.toFixed(1)).join(",");if(r===e.glowSig)return;e.glowSig=r;let o=e.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=V0(t,n,.42,i);if(this.roomTint){let h=e.floor.rooms.length;for(let f=0;f<t.room.length;f++)if(t.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),e.glowMesh.visible=u>0}makeMaterials(e){return{floor:pi(new Ye({vertexColors:!0}),this.themeUniform),pattern:_w(this.patternTexture),wall:pi(ss(new Ye({vertexColors:!0}),e,"solid"),this.themeUniform),glassWall:ss(new Ye({vertexColors:!0,transparent:!0,depthWrite:!1}),e,"glass"),shadow:new Ye({vertexColors:!0,blending:Po,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-1}),lines:pi(ss(new Bt({vertexColors:!0,transparent:!0,blending:Bc(this.theme),depthWrite:!1}),e),this.themeUniform,!0),glow:ss(new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt,polygonOffset:!0,polygonOffsetFactor:-3}),e,"solid"),frames:pi(ss(new Ye({vertexColors:!0,side:Mt}),e),this.themeUniform),glass:ss(new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt}),e),blinds:pi(ss(new Ye({map:this.blindTexture,vertexColors:!0,side:Mt}),e),this.themeUniform),lamps:pi(new Ye({vertexColors:!0}),this.themeUniform),halos:new bn({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1}),cones:new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt}),screens:new Ye({vertexColors:!0,transparent:!0,blending:pt,depthWrite:!1,side:Mt})}}rebuild(){let e=new Map(this.floors.map(r=>[r.floor.id,{y:r.y,o:r.o}])),t=new Map(this.floors.map(r=>[r.floor.id,r.openings]));this.clear();let n=this.building;if(!n)return;let i=[...n.floors].sort((r,o)=>r.elevation-o.elevation);for(let r of n.floors){let o=n.settings.roof?.solar??[],a=rf(n)?.id===r.id?o.filter(B=>B.face===sf).map(B=>({field:B,face:x0(n,B)})):[],l=o.filter(B=>B.face.startsWith(`wall:${r.id}:`));if(l.length){let B=new Map(g0(n,r.id).map(H=>[H.key,H]));for(let H of l){let ee=B.get(H.face);ee&&a.push({field:H,face:ee})}}let u=(n.settings.roof.sections??[]).some(B=>Gh(B,r.elevation+r.height))?(B,H)=>{let ee=Hh(n,B,H);return ee===null?null:ee-r.elevation}:void 0,h=P0(Nc(r,this.parked),n.settings.wall_exterior,n.settings.wall_interior,L0(n.floors,r),a,u),f={standing:{value:65535},glass:{value:0}},d=this.makeMaterials(f),m=new ft,x=new Fe(h.floor,d.floor),g=new Fe(h.shadow,d.shadow);g.renderOrder=1;let p=new Fe(h.floor,d.pattern);p.renderOrder=2;let y=new Fe(new Ge,d.glow);y.renderOrder=3,y.visible=!1;let M=new Fe(new Ge,d.frames),b=new Fe(new Ge,d.blinds),v=new Fe(new Ge,d.glass);v.renderOrder=4;let S=new Fe(new Ge,d.lamps);S.visible=!1;let E=new Fe(new Ge,d.cones);E.visible=!1,E.renderOrder=3;let _=new En(new Ge,d.halos);_.visible=!1,_.renderOrder=7;let w=new Fe(new Ge,d.cones);w.visible=!1,w.renderOrder=7;let R=new Fe(new Ge,d.lamps);R.visible=!1;let T=new Fe(new Ge,d.screens);T.visible=!1,T.renderOrder=5;for(let B of[M,b,v])B.frustumCulled=!1;let L=new Fe(h.walls,d.glassWall),I=new Fe(h.walls,d.wall);L.renderOrder=6,m.add(x,g,p,y,I,new xn(h.lines,d.lines),M,b,v,S,E,_,w,R,T,L),this.root.add(m);let C=document.createElement("button");C.className="nf-pin nf-pin-floor",C.dataset.floor=r.id;let F=document.createElement("b");F.textContent=r.name||"\u2013";let N=document.createElement("span");N.textContent=this.floorInfo.get(r.id)??this.options.floorInfo?.(r)??"",C.append(F,N),C.addEventListener("click",()=>this.options.onFloorTap?.(r.id)),this.labels.append(C);let U=e.get(r.id),V=[],k=null;for(let B of r.rooms){let H=document.createElement("button");H.className="nf-pin",H.dataset.room=B.id,H.dataset.floor=r.id,this.fillRoomPin(H,B.name,this.roomInfo.get(B.id)),H.addEventListener("click",()=>this.options.onRoomTap?.(r.id,B.id)),this.labels.append(H);let[ee,Q]=xc(B.points);V.push({pin:H,room:B,cx:ee,cz:Q});for(let[ce,ue]of B.points)k??={x0:ce,x1:ce,z0:ue,z1:ue},k.x0=Math.min(k.x0,ce),k.x1=Math.max(k.x1,ce),k.z0=Math.min(k.z0,ue),k.z1=Math.max(k.z1,ue)}this.floors.push({floor:r,rank:i.indexOf(r),group:m,geo:h,floorMesh:x,shadowMesh:g,patternMesh:p,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:M,glassMesh:v,blindsMesh:b,lampMesh:S,sunMesh:E,sunSig:"",haloMesh:_,coneMesh:w,fridgeMesh:R,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:I,screenMesh:T,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:k,roomPins:V,labelSize:null,materials:d,mask:f,openings:new Map,y:U?.y??0,o:U?.o??1,ty:0,to:1,appliedO:-1,label:C})}this.floorMap=new Map(this.floors.map(r=>[r.floor.id,r]));for(let r of this.floors)this.buildFridges(r);this.labelsDirty=!0,this.floorId&&!n.floors.some(r=>r.id===this.floorId)&&(this.floorId=null);for(let r of this.floors){this.buildLamps(r),this.buildScreens(r);let o=t.get(r.floor.id);for(let a of r.geo.openings)r.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??zc);this.buildOpenings(r),this.buildLightSurface(r),this.buildSun(r)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost(),this.placeMeshes()}placeMeshes(){for(let e of this.meshes)e.group.removeFromParent(),Wf(e.group);this.meshes=[];for(let e of this.floors)for(let t of Nc(e.floor,this.parked).furniture){let n=$t(t.type);if(!n?.mesh)continue;let i=n.mesh;if(!pc(t.type)){this.meshAsked.has(i)||(this.meshAsked.add(i),ag(i).then(a=>{a&&!this.disposed&&this.rebuild()}));continue}let r=n.colors?.length?(n.colors.find(a=>a.id===t.variant)??n.colors[0]).hex:null,o=lg(i,{x:t.x,z:t.z,y:Nn(e.floor,t),rotation:t.rotation,mirror:t.mirror,w:t.w,d:t.d,h:t.h,paint:r});o&&(this.meshLight||(this.meshLight=cg(this.root,this.renderer)),ug(o,this.meshLight.env),e.group.add(o),this.meshes.push({group:o,furnitureId:t.id}))}this.invalidate()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?T0(this.building,this.roofWindows):[];if(!e.length)return;let t=new ft,n=pi(new Ye({vertexColors:!0,transparent:!0,side:Mt}),this.themeUniform),i=pi(new Bt({vertexColors:!0,transparent:!0,blending:Bc(this.theme),depthWrite:!1}),this.themeUniform,!0),r=pi(new Ye({vertexColors:!0,transparent:!0,side:Mt,depthWrite:!1}),this.themeUniform),o=e.map(a=>{let l=new ft;return l.add(new Fe(a.solid.geometry(),n),new xn(a.lines.geometry(),i)),a.glass.count&&l.add(new Fe(a.glass.geometry(),r)),l.renderOrder=8,t.add(l),{group:l,floorId:a.floor.id,rideId:Xh(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});t.renderOrder=8,this.scene.add(t),this.roof={group:t,parts:o,solid:n,lines:i,glass:r},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-e/xg),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?h*uw:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let i=0,r=1;t?n.rank>t.rank?(i=5+n.rank,r=0):n.rank<t.rank&&(this.floorStack==="stacked"?i=0:(i=-.4,r=this.floorStack==="single"?0:hw)):i=this.explode?n.rank*cw:0,n.ty=i,n.to=r,e&&(n.y=i,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(e){if(e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,Math.abs(e.appliedO-e.o)<.001)return;e.appliedO=e.o;let t=e.materials,n=e.o>.999;for(let i of[t.floor,t.wall,t.frames,t.blinds,t.lamps])i.transparent===n&&(i.transparent=!n,i.depthWrite=n,i.needsUpdate=!0),i.opacity=e.o;t.pattern.opacity=e.o,t.glow.opacity=e.o,t.lines.opacity=e.o,t.glass.opacity=e.o,t.glassWall.opacity=e.o,t.lamps.opacity=e.o,t.halos.opacity=e.o,t.cones.opacity=e.o,t.screens.opacity=e.o}stepFloors(e){let t=!1,n=1-Math.exp(-e/xg);for(let i of this.floors){let r=i.ty-i.y,o=i.to-i.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(i.y=i.ty,i.o=i.to,this.labelsDirty=!0,this.applyFloor(i));continue}i.y+=r*n,i.o+=o*n,t=!0,this.applyFloor(i)}return t}stepOpenings(e){let t=!1,n=1-Math.exp(-e/bg);for(let i of this.floors){let r=!1;for(let[o,a]of i.openings){let l=this.openingTargets.get(o)??zc,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},h=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,m=a[f]??0,x=d-m;Math.abs(x)<.003?u[f]=d:(u[f]=m+x*n,h=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?u.cover=l.cover:(u.cover=a.cover+f*n,h=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(i.openings.set(o,u),r=!0),t||=h}r&&(this.buildOpenings(i),this.buildGlow(i),this.buildSun(i))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new j(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let i=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*mw+i)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=t)return 0;let f=h-t,d=f>$f?.5+.5*Math.sin(f/140):f/$f;return Math.round(d*10)/10},i=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+i.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=i.map(u=>this.glowOf(u)),a=i.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=r,e.lampColorSig="";let u=new gt,h=[],f=[],d=new Map,m=e.floor.height;for(let x of i){let g=x.lamp==="strip"?(x.base??m)>Math.min(e.floor.cut_height,m):x.lamp?_g.has(x.lamp):x.model==="camera_ceiling";if(!x.lamp&&!x.model||g&&this.wallMode==="cut")continue;let p=u.count,y=x.pack?$t(x.pack):void 0,[M,b,v]=x.size??[.3,.3,.3];x.model?h0(u,x.model,x.x,x.model==="camera_ceiling"?m:x.y,x.z,x.rotation??0):y?Ac(u,y,{x:x.x,z:x.z,rotation:x.rotation??0,w:M,d:b,h:v,mirror:x.mirror},x.base??0,65280):Yf(u,{...x,lamp:x.lamp},m,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&h.push({id:x.id,start:p,end:u.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:u.count})}e.lampTris=h,e.lampFurnTris=f,e.lampRanges=d,e.lampShade=_m(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;i.forEach((u,h)=>{let f=e.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],m=d?.55+.45*d.level:0,x=d?new j(...d.color.map(y=>Math.min(1,y*m))):new j(dw),g=n(u.id);g>0&&x.lerp(new j(1,1,1),.7*g);let p=new j(x.getHex());ym(c,e.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=(this.building?.settings.north??0)*Lt,i=this.weatherLayer?.cloud??0,r=t?`${t.elevation.toFixed(1)},${t.azimuth.toFixed(1)},${n},${i.toFixed(2)},${[...e.openings.values()].map(a=>(a.cover??0).toFixed(2)).join(",")}`:"";if(r===e.sunSig)return;e.sunSig=r;let o=new gt;if(t&&t.elevation>2&&i<.97){let a=Math.min(1,t.elevation/12)*(1-.8*i),l=t.elevation*Lt,c=t.azimuth*Lt,u=[Math.sin(n+c),-Math.cos(n+c)],h=1/Math.tan(l);for(let f of e.geo.openings){if(f.opening.type!=="window"||!f.exterior)continue;let d=[-f.toRoom[0],-f.toRoom[1]],m=d[0]*u[0]+d[1]*u[1];if(m<.05)continue;let x=e.openings.get(f.opening.id),g=f.top-(x?.cover??0)*(f.top-f.sill);if(g-f.sill<.05)continue;let p=(_,w)=>{let R=Math.min(7,w*h);return[f.start[0]+f.axis[0]*_+f.toRoom[0]*f.faceRoom-u[0]*R,.02,f.start[1]+f.axis[1]*_+f.toRoom[1]*f.faceRoom-u[1]*R]},y=.14*a*Math.min(1,m*1.5),M=new j(1*y,.82*y,.55*y),b=M.clone().multiplyScalar(.45),v=e.floor.rooms.find(_=>_.id===f.opening.room_id);if(!v||v.points.length<3)continue;let S=Math.max(1,Math.ceil(Math.min(7,g*h)/.25)),E=Math.max(1,Math.ceil(f.width/.3));for(let _=0;_<S;_++){let w=f.sill+(g-f.sill)*_/S,R=f.sill+(g-f.sill)*(_+1)/S,T=_/S,L=(_+1)/S,I=M.clone().lerp(b,T),C=M.clone().lerp(b,L);for(let F=0;F<E;F++){let N=f.width*F/E,U=f.width*(F+1)/E,V=p((N+U)/2,(w+R)/2);if(!mt([V[0],V[2]],v.points))continue;let k=p(N,w),B=p(U,w),H=p(U,R),ee=p(N,R);o.tri(k,B,H,I,I,C),o.tri(k,H,ee,I,C,C)}}}}e.sunMesh.geometry.dispose(),e.sunMesh.geometry=o.geometry(),e.sunMesh.visible=o.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t=e.floor.height,n=[],i=[],r=new gt,o=[];for(let l of this.devices){if(l.model&&l.floorId===e.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let p=(l.rotation??0)*Lt,y=[-Math.sin(p),Math.cos(p)],M=l.model==="camera_ceiling",b=l.reach??(M?3:4.5),v=(l.fov??(M?360:90))*Lt/2,S=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),E=new j(0,0,0),_=Math.max(4,Math.round(v/.15)),w=.015,R=e.geo.walls2d,T=C=>{let F=y[0]*Math.cos(C)-y[1]*Math.sin(C),N=y[1]*Math.cos(C)+y[0]*Math.sin(C),U=b;for(let V of R){let k=V.b[0]-V.a[0],B=V.b[1]-V.a[1],H=F*B-N*k;if(Math.abs(H)<1e-9)continue;let ee=((V.a[0]-l.x)*B-(V.a[1]-l.z)*k)/H,Q=((V.a[0]-l.x)*N-(V.a[1]-l.z)*F)/H;ee>.45&&ee<U&&Q>=0&&Q<=1&&(U=ee)}return U},L=C=>{let F=T(C);return[l.x+(y[0]*Math.cos(C)-y[1]*Math.sin(C))*F,w,l.z+(y[1]*Math.cos(C)+y[0]*Math.sin(C))*F]},I=r.count;for(let C=0;C<_;C++)r.tri([l.x,w,l.z],L(-v+2*v*(C+1)/_),L(-v+2*v*C/_),S,E,E);o.push({id:l.id,start:I,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==e.floor.id||!l.lamp||!c||_g.has(l.lamp)&&this.wallMode==="cut")continue;let[u,h,f]=l.size??Zf[l.lamp],d=l.base??0,m=(l.rotation??0)*Lt,x={ceiling:t-.07,downlight:t-.03,spot:t-f,panel:t-.03,pendant:Math.max(.4,t-f)+.08,floor:d+f-.15,uplight:d+f,table:d+f-.09,wall:d+f/2,strip:d+Math.max(.02,f)-.01,bollard:d+f-.08,garden:d+f-.03}[l.lamp],g=(p,y,M=1)=>{n.push(p,x,y),i.push(...c.color.map(b=>b*c.level*.7*M))};if(l.lamp==="strip")for(let p of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,d+u*(.5+p),l.z),i.push(...c.color.map(y=>y*c.level*.7*.6))):g(l.x+Math.cos(m)*u*p,l.z+Math.sin(m)*u*p,.6);else l.lamp==="wall"?g(l.x-Math.sin(m)*(h/2+.05),l.z+Math.cos(m)*(h/2+.05)):g(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let p=new j(...c.color.map(S=>S*.09*c.level)),y=new j(0,0,0),M=Math.max(.03,u/2),b=.45+.35*c.level,v=16;for(let S=0;S<v;S++){let E=S/v*Math.PI*2,_=(S+1)/v*Math.PI*2,w=[l.x+Math.cos(E)*M,x,l.z+Math.sin(E)*M],R=[l.x+Math.cos(_)*M,x,l.z+Math.sin(_)*M],T=[l.x+Math.cos(E)*b,.02,l.z+Math.sin(E)*b],L=[l.x+Math.cos(_)*b,.02,l.z+Math.sin(_)*b];r.tri(w,T,L,p,y,y),r.tri(w,L,R,p,y,p)}}}let a=new Ge;a.setAttribute("position",new Ue(n,3)),a.setAttribute("color",new Ue(i,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=a,e.haloMesh.visible=n.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=r.geometry(),e.coneMesh.visible=r.count>0,e.coneTris=o}buildScreens(e){let t=Nc(e.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=t.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return;e.screenSig=n;let i=new gt;for(let r of t){let o=this.screens.get(r.id),a=r.rotation*Lt,l=Math.cos(a),c=Math.sin(a),u=(M,b,v)=>[r.x+M*l-v*c,b,r.z+M*c+v*l];if(o.faces){let M=Math.max(.05,r.w)*(r.mirror?-1:1),b=Math.max(.05,r.d),v=Math.max(.005,r.h),S=Nn(e.floor,r);for(let E of o.faces){let _=E.part==="right"?.03:-Math.abs(M)/2+.03,w=E.part==="left"?-.03:Math.abs(M)/2-.03,R=S+(E.part==="bottom"?v*.45:v)+.006,T=new j(...E.color.map(V=>Math.min(1,V*(.35+.65*E.level)))),L=new j(0,0,0),I=(V,k,B=R)=>u(V*Math.sign(M),B,k),C=[I(_,-b/2+.03),I(w,-b/2+.03),I(w,b/2-.03),I(_,b/2-.03)];i.tri(C[0],C[2],C[1],T),i.tri(C[0],C[3],C[2],T);let F=.12+.1*E.level,N=T.clone().multiplyScalar(.5),U=[I(_-F,-b/2-F,R+.004),I(w+F,-b/2-F,R+.004),I(w+F,b/2+F,R+.004),I(_-F,b/2+F,R+.004)];for(let V=0;V<4;V++){let k=(V+1)%4;i.tri(C[V],U[k],U[V],N,L,L),i.tri(C[V],C[k],U[k],N,N,L)}}continue}let h=ef(r,e.floor);if(!h)continue;let f=new j(...o.color.map(M=>Math.min(1,M*(.35+.65*o.level)))),d=new j(0,0,0),m=h.z+.004;i.tri(u(h.x0,h.y0,m),u(h.x1,h.y0,m),u(h.x1,h.y1,m),f),i.tri(u(h.x0,h.y0,m),u(h.x1,h.y1,m),u(h.x0,h.y1,m),f);let x=.18+.12*o.level,g=f.clone().multiplyScalar(.5),p=[u(h.x0,h.y0,m),u(h.x1,h.y0,m),u(h.x1,h.y1,m),u(h.x0,h.y1,m)],y=[u(h.x0-x,h.y0-x,m+.01),u(h.x1+x,h.y0-x,m+.01),u(h.x1+x,h.y1+x,m+.01),u(h.x0-x,h.y1+x,m+.01)];for(let M=0;M<4;M++){let b=(M+1)%4;i.tri(p[M],y[M],y[b],g,d,d),i.tri(p[M],y[b],p[b],g,d,g)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=i.geometry(),e.screenMesh.visible=i.count>0}buildOpenings(e){let t=$0(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,i]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=i,n.visible=i.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let i=new j(n.color),r=this.roomTint?.get(n.roomId);r&&i.lerp(new j(...r).multiplyScalar(.6),.9),n.roomId===this.roomId&&i.lerp(gw,r?.3:.75);for(let o=n.start*3;o<n.end*3;o++)t.setXYZ(o,i.r,i.g,i.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".nf-pin"))e.classList.toggle("nf-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new Ut;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[m,x]of d.points)t.expandByPoint(new z(m,f,x)),t.expandByPoint(new z(m,f+h.floor.height,x))}t.isEmpty()&&t.set(new z(-4,0,-4),new z(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:t.min.x-8,x1:t.max.x+8,z0:t.min.z-8,z1:t.max.z+8,y0:t.min.y,y1:t.max.y+6});let n=t.getCenter(new z),i=t.getSize(new z),r=Math.max(8,this.distanceFor(i)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=t.min.y+i.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new Ut,t=1/0;for(let o of this.floors){t=Math.min(t,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new z(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new z(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=Sw();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=e.getCenter(new z),i=e.getSize(new z),r=Kf*Math.ceil((Math.max(i.x,i.z)+16)/Kf);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,t-is-.02,n.z)}distanceFor(e){let t=this.camera.fov*Lt,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),i=new Co;return i.setFromCamera(new Oe(e/n.width*2-1,-(t/n.height)*2+1),this.camera),i}pick(e,t){let n=this.rayAt(e,t),i=this.activeFloors();if(this.meshes.length){let a=n.intersectObjects(this.meshes.map(l=>l.group),!0)[0];if(a){let l=a.object;for(;l&&!this.meshes.some(u=>u.group===l);)l=l.parent;let c=l?this.pickFurniture.get(this.meshes.find(u=>u.group===l).furnitureId):void 0;if(c)return{entity:c}}}let r=i.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(r,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=i.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??rt;if(f!==rt&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,x=this.wallMode==="cut"&&d===0,g=(c.mask.glass.value&1<<m)!==0;if(!x){let p=n.ray.direction,y=Math.hypot(p.x,p.z)||1,M=[a.point.x-p.x/y*.3,a.point.z-p.z/y*.3],b=c.floor.rooms.find(v=>v.points.length>=3&&mt(M,v.points))?.id??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:c.floor.id,roomId:b}}else if(!g&&b)return{floorId:c.floor.id,roomId:b}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+$f),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),i=this.activeFloors(),r=i.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(r,!1)){if(o.faceIndex==null)continue;let a=i.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let i=this.rayAt(t,n),r=e.floor.elevation+e.y,o=i.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(r-i.ray.origin.y)/o.y;return a<=0?null:[i.ray.origin.x+o.x*a,i.ray.origin.z+o.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let i=this.furnishTypes;if(i){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(e,t),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&i.has(u))&&this.grabItem(c,l,e,t)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,e,t):this.grabItem(a,o,e,t)}let r=this.furnitureAt(e,t);if(!r){let o=this.pick(e,t);return o&&"entity"in o?this.grabDevice(o.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(r.fv,r.id,e,t)}grabItem(e,t,n,i){let r=e.floor.furniture.find(a=>a.id===t),o=this.floorPoint(e,n,i);return!r||!o?!1:r.locked?(this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!1):(this.grab={floorId:e.floor.id,id:r.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectFurniture(r.id),this.options.onFurnitureSelect?.(r.id),!0)}grabDevice(e,t,n){let i=this.devices.find(a=>a.id===e),r=i&&this.floorMap.get(i.floorId),o=r&&this.floorPoint(r,t,n);return!i||!r||!o?!1:i.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:r.floor.id,offset:[i.x-o[0],i.z-o[1]],x:i.x,z:i.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),u=l&&this.floorPoint(l,e,t);if(!l||!c||!u)return;let h=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/h)*h,n.z=c.z=Math.round((u[1]+n.offset[1])/h)*h,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let i=this.grab,r=i&&this.floorMap.get(i.floorId);if(!i||!r)return;let o=this.floorPoint(r,e,t);if(!o)return;let a=this.building?.settings.grid??.05;i.x=Math.round((o[0]+i.offset[0])/a)*a,i.z=Math.round((o[1]+i.offset[1])/a)*a,i.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(p=>p.floor.furniture.some(y=>y.id===e)):void 0,n=t?.floor.furniture.find(p=>p.id===e);if(!t||!n)return;let i=this.grab?.id===n.id?this.grab.x:n.x,r=this.grab?.id===n.id?this.grab.z:n.z,o=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=$t(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Nn(t.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:Nn(t.floor,n),u=n.rotation*Lt,h=Math.cos(u),f=Math.sin(u),d=(p,y,M)=>[i+p*h-y*f,M,r+p*f+y*h],m=new cn,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],g=new j(.25,.9,1);for(let p=0;p<4;p++){let[y,M]=x[p],[b,v]=x[(p+1)%4];m.seg(d(y,M,c+.01),d(b,v,c+.01),g),m.seg(d(y,M,c+l),d(b,v,c+l),g),m.seg(d(y,M,c+.01),d(y,M,c+l),g)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new j(1,1,1)),this.ghost=new xn(m.geometry(),new Bt({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,i){if(this.furnish||Math.abs(i)<Math.abs(n)*1.2)return!1;let r=this.pick(e,t);return!r||!("entity"in r)||this.options.onDeviceSwipe?.(r.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:r.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(p=>p.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let i=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(e*i),o=Math.round(t*i),a=new rn(r,o);a.texture.colorSpace=vt;let l=new Dn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),m=document.createElement("canvas");m.width=r,m.height=o;let x=m.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let I of this.floors)I.group.visible=I===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let y=p.floor.rooms.flatMap(I=>I.points),M=p.floor.elevation,b=new Ut(new z(Math.min(...y.map(I=>I[0]))-.3,M,Math.min(...y.map(I=>I[1]))-.3),new z(Math.max(...y.map(I=>I[0]))+.3,M+Math.min(p.floor.cut_height,p.floor.height),Math.max(...y.map(I=>I[1]))+.3)),v=b.getCenter(new z),S=-.6,E=.8,_=new z(Math.sin(E)*Math.sin(S),Math.cos(E),Math.sin(E)*Math.cos(S));l.position.copy(v).addScaledVector(_,100),l.lookAt(v),l.updateMatrixWorld();let w=.5,R=.5;for(let I of[b.min.x,b.max.x])for(let C of[b.min.y,b.max.y])for(let F of[b.min.z,b.max.z]){let N=new z(I,C,F).applyMatrix4(l.matrixWorldInverse);w=Math.max(w,Math.abs(N.x)),R=Math.max(R,Math.abs(N.y))}let T=r/o;w/R>T?R=w/T:w=R*T,l.left=-w*1.05,l.right=w*1.05,l.top=R*1.05,l.bottom=-R*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let L=x.createImageData(r,o);for(let I=0;I<o;I++)L.data.set(d.subarray((o-1-I)*r*4,(o-I)*r*4),I*r*4);x.putImageData(L,0,0),g.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let i=this.robots.get(n.id);i||(i=this.makeRobot(n),this.robots.set(n.id,i));let r=i.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((i.info.roomId??null)!==(n.roomId??null)||JSON.stringify(i.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(i.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!i.motion.path.length)){let a=n.room?fg(n.room,void 0,void 0,n.obstacles):qf(n.rest),l=a.length?a:qf(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-i.motion.pos[0],u[1]-i.motion.pos[1])<Math.hypot(l[c][0]-i.motion.pos[0],l[c][1]-i.motion.pos[1])&&(c=h)}),i.motion.path=l,i.motion.next=c,n.room&&!mt(i.motion.pos,n.room)&&(i.motion.pos=[l[c][0],l[c][1]])}i.led.color.setHex(gg[n.mode])}for(let[n,i]of this.robots)t.has(n)||(i.group.removeFromParent(),i.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let i=new gt,r=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ft(i,f,l,c,u,h,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=i.geometry(),this.robotMat=new Ye({vertexColors:!0});let o=new gt;Ft(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let t=new ft,n=new Ye({color:gg[e.mode]});return t.add(new Fe(this.robotGeo,this.robotMat),new Fe(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let i of this.robots.values()){let r=this.floorMap.get(i.info.floorId);r&&(i.group.parent!==r.group&&r.group.add(i.group),t>0?n=dg(i.motion,i.info,t)||n:n||=i.info.mode==="cleaning"||i.info.mode==="returning",i.group.position.set(i.motion.pos[0],0,i.motion.pos[1]),i.group.rotation.y=i.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}liveFlyInto(e,t,n=1100){let i=this.floorMap.get(e),r=i?i.floor.elevation+i.ty:0;this.controls.flyTo({target:new z(t.target[0],r+t.target[1],t.target[2]),radius:t.radius,theta:t.theta,phi:Math.max(.08,t.phi)},n)}focus(e,t,n,i,r){let o=this.floorMap.get(e);if(o){if(this.controls.flyTo({target:new z(t,o.floor.elevation+o.ty+i,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(r)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let i=this.controls.update(e),r=this.stepFloors(t),o=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let m=new Set;for(let[x,g]of this.flashes){let p=this.deviceFloor.get(x);p&&m.add(p),g<=e&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(t),c=this.stepRobots(e),h=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(e)).some(Boolean),f=i||r||o||a||l,d=[];if(i&&d.push("camera"),r&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.effectTick&&d.push("effect"),c&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*yg:yg;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let x of this.floors)x.o<.02||!this.effectFloors.has(x.floor.id)||(this.buildLamps(x),this.buildGlow(x));this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/r+u[1]*i/r>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new z,i=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(i&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,u,g).project(this.camera);let p=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||p<l.x)&&(l={x:p,y}),(!c||p>c.x)&&(c={x:p,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),r.push({fv:o,left:Math.max(f,Math.min(e-h-8,d)),y:m,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(e,t);for(let o of this.floors){let a=o.to<.99||o.o<.9||i||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new z,i=this.houseView;for(let r of this.persons){let o=this.personPins.get(r.id),a=this.floorMap.get(r.floorId);if(!o)continue;if(!a||i||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(r.x,a.floor.elevation+a.y+.9,r.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let r of this.devices){let o=this.devicePins.get(r.id)?.el;if(!o)continue;let a=this.floorMap.get(r.floorId),l=r.id.startsWith("detect:");if(!a||i&&!l||a.to<.99||a.o<.9||r.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(r.x,a.floor.elevation+a.y+r.y,r.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?r.full?"full":"":r.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("nf-dev-full",u==="full"),o.classList.toggle("nf-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let i=e-this.fpsStart;if(i>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/i):0,busy:t,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function bw(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(o,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let i=(o,a,l)=>{t.save(),t.beginPath(),t.rect(o*256,a*256,256,256),t.clip(),l(o*256,a*256),t.restore()};i(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),i(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),i(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),i(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),i(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new an(e);return r.flipY=!1,r.wrapS=fn,r.wrapT=fn,r.anisotropy=4,r.colorSpace=vt,r}function _w(s){let e=new Ye({map:s,transparent:!0,blending:pt,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNfTile = tile;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},e.customProgramCacheKey=()=>"nf-pattern",e}function yw(){let s=document.createElement("canvas");s.width=8,s.height=32;let e=s.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new an(s);return t.wrapS=Xn,t.wrapT=Xn,t.colorSpace=vt,t}function vw(s,e){let t=s.rooms.map((i,r)=>r),n=i=>t[i]===i?i:t[i]=n(t[i]);for(let[i,r]of e){let o=s.rooms.findIndex(u=>u.id===i),a=s.rooms.findIndex(u=>u.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((i,r)=>n(r))}function Mw(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let i=new an(e);return i.colorSpace=vt,i}function Sw(){let e=Kf,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=e;o++){let a=Math.round(o/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let i=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,1024,1024);let r=new an(t);return r.anisotropy=4,r.colorSpace=vt,r}function uC(s,e){return new Jf(s,e)}function Yf(s,e,t,n){let[i,r,o]=e.size??Zf[e.lamp],a=e.base??0,l=(e.rotation??0)*Lt,c=Math.cos(l),u=Math.sin(l),h=(x,g)=>[e.x+x*c-g*u,e.z+x*u+g*c],f=(x,g,p,y,M,b=14)=>{let v=[];for(let S=0;S<b;S++){let E=S/b*Math.PI*2;v.push([e.x+Math.cos(E)*x,e.z+Math.sin(E)*x])}Ft(s,v,g,p,y,M,{aoFrom:0,bottom:!0})},d=(x,g,p,y,M,b,v,S=v)=>Ft(s,[h(x,p),h(g,p),h(g,y),h(x,y)],M,b,v,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(i,r)/2);switch(e.lamp){case"ceiling":f(m*.25,t-.04,t,it,it,8),f(m,t-Math.max(.04,o)-.035,t-.04,n,n);break;case"pendant":{let x=Math.max(.4,t-o);f(.06,t-.02,t,it,it,8);let g=e.variant==="globe"?x+2*m:e.variant==="drum"?x+.24:x+.2;if(f(.008,g,t-.02,it,it,5),e.variant==="globe")for(let y=0;y<7;y++){let M=Math.PI*(y/7),b=Math.PI*((y+1)/7);f(m*Math.max(.2,Math.sin((M+b)/2)),x+m-m*Math.cos(M),x+m-m*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)f(m*(.25+.75*(4-y)/4),x+.06*y,x+.06*(y+1),n,n,16);else e.variant==="drum"?f(m,x,x+.24,n,n,18):(f(m*.35,x+.14,x+.2,n,n,12),f(m,x,x+.14,n,n,16));break}case"downlight":f(m,t-.012,t,it,it,12),f(m*.7,t-.02,t-.012,n,n,12);break;case"spot":f(m*.6,t-.02,t,it,it,10),f(m,t-Math.max(.06,o),t-.02,it,it,12),f(m*.8,t-Math.max(.06,o)-.008,t-Math.max(.06,o),n,n,12);break;case"panel":d(-i/2,i/2,-r/2,r/2,t-Math.max(.015,o),t,it,it),d(-i/2+.02,i/2-.02,-r/2+.02,r/2-.02,t-Math.max(.015,o)-.004,t-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,it,it),f(.014,a+.03,a+o-.12,it,it,6),f(m,a+o-.14,a+o-.02,it,it),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,it,it,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,it,it,10);break;case"garden":f(.012,a,a+o-.08,it,it,5),f(m,a+o-.08,a+o-.01,it,it,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,it,it),f(.014,a+.03,a+o-.28,it,it,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,it,it),f(.012,a+.03,a+o-.16,it,it,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let x=e.base??mc;d(-i/2+.03,i/2-.03,-r/2,-r/2+.02,x,x+o,it),d(-i/2,i/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=e.base!=null?e.base+x:t-.04;if(!e.roll&&!e.upright){d(-i/2,i/2,-r/2,r/2,g-x,g,n);break}let p=(e.roll??0)*Lt,y=Math.cos(p),M=Math.sin(p),b=e.upright?a+i/2:g-x/2,v=(R,T,L)=>{let I=R,C=T*y-L*M,F=T*M+L*y;return e.upright&&([I,C]=[-C,I]),[e.x+I*c-F*u,b+C,e.z+I*u+F*c]},S=[v(-i/2,-x/2,-r/2),v(i/2,-x/2,-r/2),v(i/2,-x/2,r/2),v(-i/2,-x/2,r/2),v(-i/2,x/2,-r/2),v(i/2,x/2,-r/2),v(i/2,x/2,r/2),v(-i/2,x/2,r/2)],E=new j(n),_=[e.x,b,e.z],w=(R,T,L,I)=>{let[C,F,N]=[S[R],S[T],S[L]],U=[(F[1]-C[1])*(N[2]-C[2])-(F[2]-C[2])*(N[1]-C[1]),(F[2]-C[2])*(N[0]-C[0])-(F[0]-C[0])*(N[2]-C[2]),(F[0]-C[0])*(N[1]-C[1])-(F[1]-C[1])*(N[0]-C[0])],V=[C[0]-_[0],C[1]-_[1],C[2]-_[2]],k=U[0]*V[0]+U[1]*V[1]+U[2]*V[2]<0,[B,H,ee,Q]=k?[S[I],S[L],S[T],S[R]]:[S[R],S[T],S[L],S[I]];s.tri(B,H,ee,E,E,E),s.tri(B,ee,Q,E,E,E)};w(0,1,2,3),w(4,5,6,7),w(0,1,5,4),w(1,2,6,5),w(2,3,7,6),w(3,0,4,7);break}}}export{Jf as NextFloorViewer,uC as createViewer,lw as furniturePreview,xw as isLowEnd,Yf as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
