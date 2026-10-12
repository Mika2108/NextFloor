/*! NextFloor, MIT licence. Includes three.js (MIT) and Lit (BSD-3-Clause); see LICENSE and THIRD_PARTY_NOTICES.md */
var fm=0,Th=1,dm=2;var na=1,pm=2,Gs=3,yi=0,tn=1,_t=2,_i=0,vi=1,St=2,Ah=3,ia=4,mm=5;var Wr=100,gm=101,xm=102,bm=103,ym=104,_m=200,vm=201,Mm=202,Sm=203,Eh=204,Rh=205,wm=206,Tm=207,Am=208,Em=209,Rm=210,Cm=211,Im=212,Pm=213,Lm=214,wl=0,Tl=1,Al=2,Rs=3,El=4,Rl=5,Cl=6,Il=7,Zl=0,Fm=1,Dm=2,jn=0,Ch=1,Ih=2,Ph=3,Lh=4,Fh=5,Dh=6,Oh=7,ch="attached",Om="detached",Nh=300,fr=301,Xr=302,Jl=303,jl=304,ra=306,Jn=1e3,dn=1001,Cs=1002,Ut=1003,Ql=1004;var qr=1005;var Bt=1006,Hs=1007;var Qn=1008;var Sn=1009,Uh=1010,Bh=1011,Ws=1012,ec=1013,ei=1014,Fn=1015,ti=1016,tc=1017,nc=1018,Xs=1020,kh=35902,zh=35899,Vh=1021,Gh=1022,Dn=1023,di=1026,dr=1027,ic=1028,rc=1029,pr=1030,sc=1031;var oc=1033,sa=33776,oa=33777,aa=33778,la=33779,ac=35840,lc=35841,cc=35842,uc=35843,hc=36196,fc=37492,dc=37496,pc=37488,mc=37489,ca=37490,gc=37491,xc=37808,bc=37809,yc=37810,_c=37811,vc=37812,Mc=37813,Sc=37814,wc=37815,Tc=37816,Ac=37817,Ec=37818,Rc=37819,Cc=37820,Ic=37821,Pc=36492,Lc=36494,Fc=36495,Dc=36283,Oc=36284,ua=36285,Nc=36286;var Pr=2300,Lr=2301,vl=2302,uh=2303,hh=2400,fh=2401,dh=2402,Nm=2500;var Hh=0,ha=1,qs=2,Um=3200;var fa=0,Bm=1,Wi="",Mt="srgb",pn="srgb-linear",Fo="linear",gt="srgb";var Ml=7680;var km=519,zm=512,Vm=513,Gm=514,Uc=515,Hm=516,Wm=517,Bc=518,Xm=519,Wh=35044,Xh=35048;var qh="300 es",$n=2e3,Is=2001;function Ay(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ey(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qm(){let i=Ps("canvas");return i.style.display="block",i}var Mp={},Ls=null;function Do(...i){let e="THREE."+i.shift();Ls?Ls("log",e,...i):console.log(e,...i)}function Ym(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ee(...i){i=Ym(i);let e="THREE."+i.shift();if(Ls)Ls("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ue(...i){i=Ym(i);let e="THREE."+i.shift();if(Ls)Ls("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ir(...i){let e=i.join(" ");e in Mp||(Mp[e]=!0,Ee(...i))}function Km(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var $m={[wl]:Tl,[Al]:Cl,[El]:Il,[Rs]:Rl,[Tl]:wl,[Cl]:Al,[Il]:El,[Rl]:Rs},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sp=1234567,Po=Math.PI/180,Fr=180/Math.PI;function Zn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function Yh(i,e){return(i%e+e)%e}function Ry(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Cy(i,e,t){return i!==e?(t-i)/(e-i):0}function Lo(i,e,t){return(1-t)*i+t*e}function Iy(i,e,t,n){return Lo(i,e,1-Math.exp(-t*n))}function Py(i,e=1){return e-Math.abs(Yh(i,e*2)-e)}function Ly(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Dy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Oy(i,e){return i+Math.random()*(e-i)}function Ny(i){return i*(.5-Math.random())}function Uy(i){i!==void 0&&(Sp=i);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function By(i){return i*Po}function ky(i){return i*Fr}function zy(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hy(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*u,a*c);break;default:Ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kh={DEG2RAD:Po,RAD2DEG:Fr,generateUUID:Zn,clamp:it,euclideanModulo:Yh,mapLinear:Ry,inverseLerp:Cy,lerp:Lo,damp:Iy,pingpong:Py,smoothstep:Ly,smootherstep:Fy,randInt:Dy,randFloat:Oy,randFloatSpread:Ny,seededRandom:Uy,degToRad:By,radToDeg:ky,isPowerOfTwo:zy,ceilPowerOfTwo:Vy,floorPowerOfTwo:Gy,setQuaternionFromProperEuler:Hy,normalize:bt,denormalize:Kn},Qh=class Qh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qh.prototype.isVector2=!0;var Fe=Qh,Cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(h!==g||l!==f||c!==d||u!==m){let x=l*f+c*d+u*m+h*g;x<0&&(f=-f,d=-d,m=-m,g=-g,x=-x);let p=1-a;if(x<.9995){let y=Math.acos(x),_=Math.sin(y);p=Math.sin(p*y)/_,a=Math.sin(a*y)/_,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+g*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+g*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ef=class ef{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ef.prototype.isVector3=!0;var O=ef,Bu=new O,wp=new Cn,tf=class tf{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=r[0],x=r[3],p=r[6],y=r[1],_=r[4],b=r[7],v=r[2],S=r[5],A=r[8];return s[0]=o*g+a*y+l*v,s[3]=o*x+a*_+l*S,s[6]=o*p+a*b+l*A,s[1]=c*g+u*y+h*v,s[4]=c*x+u*_+h*S,s[7]=c*p+u*b+h*A,s[2]=f*g+d*y+m*v,s[5]=f*x+d*_+m*S,s[8]=f*p+d*b+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=h*g,e[1]=(r*c-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Ir("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ku.makeScale(e,t)),this}rotate(e){return Ir("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return Ir("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tf.prototype.isMatrix3=!0;var Ve=tf,ku=new Ve,Tp=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ap=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wy(){let i={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=Es(r.r),r.g=Es(r.g),r.b=Es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?Fo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pn]:{primaries:e,whitePoint:n,transfer:Fo,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Tp,fromXYZ:Ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var $e=Wy();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cs,Pl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{cs===void 0&&(cs=Ps("canvas")),cs.width=e.width,cs.height=e.height;let r=cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ps("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xy=0,Fs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zu(r[o].image)):s.push(zu(r[o]))}else s=zu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function zu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ee("Texture: Unable to serialize Texture."),{})}var qy=0,Vu=new O,$t=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=dn,r=dn,s=Bt,o=Qn,a=Dn,l=Sn,c=i.DEFAULT_ANISOTROPY,u=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Zn(),this.name="",this.source=new Fs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ee(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Nh;$t.DEFAULT_ANISOTROPY=1;var nf=class nf{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(d+1)/2,v=(p+1)/2,S=(u+f)/4,A=(h+g)/4,M=(m+x)/4;return _>b&&_>v?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=S/n,s=A/n):b>v?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=S/r,s=M/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=A/s,r=M/s),this.set(n,r,s,t),this}let y=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nf.prototype.isVector4=!0;var yt=nf,Ll=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:n.depth},s=new $t(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Fs(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends Ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oo=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends $t{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $l=class $l{constructor(e,t,n,r,s,o,a,l,c,u,h,f,d,m,g,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,f,d,m,g,x)}set(e,t,n,r,s,o,a,l,c,u,h,f,d,m,g,x){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let f=o*u,d=o*h,m=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f+g*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,m=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,m=a*u,g=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-g*h}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yy,e,Ky)}lookAt(e,t,n){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),er.crossVectors(n,En),er.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),er.crossVectors(n,En)),er.normalize(),Xa.crossVectors(En,er),r[0]=er.x,r[4]=Xa.x,r[8]=En.x,r[1]=er.y,r[5]=Xa.y,r[9]=En.y,r[2]=er.z,r[6]=Xa.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],x=n[10],p=n[14],y=n[3],_=n[7],b=n[11],v=n[15],S=r[0],A=r[4],M=r[8],T=r[12],C=r[1],P=r[5],F=r[9],L=r[13],R=r[2],D=r[6],N=r[10],B=r[14],X=r[3],z=r[7],H=r[11],G=r[15];return s[0]=o*S+a*C+l*R+c*X,s[4]=o*A+a*P+l*D+c*z,s[8]=o*M+a*F+l*N+c*H,s[12]=o*T+a*L+l*B+c*G,s[1]=u*S+h*C+f*R+d*X,s[5]=u*A+h*P+f*D+d*z,s[9]=u*M+h*F+f*N+d*H,s[13]=u*T+h*L+f*B+d*G,s[2]=m*S+g*C+x*R+p*X,s[6]=m*A+g*P+x*D+p*z,s[10]=m*M+g*F+x*N+p*H,s[14]=m*T+g*L+x*B+p*G,s[3]=y*S+_*C+b*R+v*X,s[7]=y*A+_*P+b*D+v*z,s[11]=y*M+_*F+b*N+v*H,s[15]=y*T+_*L+b*B+v*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],g=e[7],x=e[11],p=e[15],y=l*d-c*f,_=a*d-c*h,b=a*f-l*h,v=o*d-c*u,S=o*f-l*u,A=o*h-a*u;return t*(g*y-x*_+p*b)-n*(m*y-x*v+p*S)+r*(m*_-g*v+p*A)-s*(m*b-g*S+x*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],g=e[13],x=e[14],p=e[15],y=t*a-n*o,_=t*l-r*o,b=t*c-s*o,v=n*l-r*a,S=n*c-s*a,A=r*c-s*l,M=u*g-h*m,T=u*x-f*m,C=u*p-d*m,P=h*x-f*g,F=h*p-d*g,L=f*p-d*x,R=y*L-_*F+b*P+v*C-S*T+A*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=(a*L-l*F+c*P)*D,e[1]=(r*F-n*L-s*P)*D,e[2]=(g*A-x*S+p*v)*D,e[3]=(f*S-h*A-d*v)*D,e[4]=(l*C-o*L-c*T)*D,e[5]=(t*L-r*C+s*T)*D,e[6]=(x*b-m*A-p*_)*D,e[7]=(u*A-f*b+d*_)*D,e[8]=(o*F-a*C+c*M)*D,e[9]=(n*C-t*F-s*M)*D,e[10]=(m*S-g*b+p*y)*D,e[11]=(h*b-u*S-d*y)*D,e[12]=(a*T-o*P-l*M)*D,e[13]=(t*P-n*T+r*M)*D,e[14]=(g*_-m*v-x*y)*D,e[15]=(u*v-h*_+f*y)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,g=o*u,x=o*h,p=a*h,y=l*c,_=l*u,b=l*h,v=n.x,S=n.y,A=n.z;return r[0]=(1-(g+p))*v,r[1]=(d+b)*v,r[2]=(m-_)*v,r[3]=0,r[4]=(d-b)*S,r[5]=(1-(f+p))*S,r[6]=(x+y)*S,r[7]=0,r[8]=(m+_)*A,r[9]=(x-y)*A,r[10]=(1-(f+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=us.set(r[0],r[1],r[2]).length(),a=us.set(r[4],r[5],r[6]).length(),l=us.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Wn.copy(this);let c=1/o,u=1/a,h=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=$n,l=!1){let c=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),d=(n+r)/(n-r),m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===$n)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Is)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$n,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),d=-(n+r)/(n-r),m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===$n)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===Is)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$l.prototype.isMatrix4=!0;var He=$l,us=new O,Wn=new He,Yy=new O(0,0,0),Ky=new O(1,1,1),er=new O,Xa=new O,En=new O,Ep=new He,Rp=new Cn,mi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ep,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},$y=0,Cp=new O,hs=new Cn,Ci=new He,qa=new O,yo=new O,Zy=new O,Jy=new Cn,Ip=new O(1,0,0),Pp=new O(0,1,0),Lp=new O(0,0,1),Fp={type:"added"},jy={type:"removed"},fs={type:"childadded",child:null},Gu={type:"childremoved",child:null},At=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new mi,n=new Cn,r=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new He},normalMatrix:{value:new Ve}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,t){return hs.setFromAxisAngle(e,t),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Ip,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,t){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ip,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(yo,qa,this.up):Ci.lookAt(qa,yo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Ci),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),fs.child=e,this.dispatchEvent(fs),fs.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jy),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,Zy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mt=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qy={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,n),p=this._getHandJoint(c,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Hu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=$e.workingColorSpace){if(e=Yh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hu(o,s,e+1/3),this.g=Hu(o,s,e),this.b=Hu(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=Mt){function n(s){s!==void 0&&parseFloat(s)<1&&Ee("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ee("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Ee("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=Zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ee("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return $e.workingToColorSpace(on.copy(this),e),Math.round(it(on.r*255,0,255))*65536+Math.round(it(on.g*255,0,255))*256+Math.round(it(on.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(on.copy(this),t);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=Mt){$e.workingToColorSpace(on.copy(this),e);let t=on.r,n=on.g,r=on.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(Ya);let n=Lo(tr.h,Ya.h,t),r=Lo(tr.s,Ya.s,t),s=Lo(tr.l,Ya.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new K;K.NAMES=Zm;var Dr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ui=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new O,Ii=new O,Wu=new O,Pi=new O,ds=new O,ps=new O,Dp=new O,Xu=new O,qu=new O,Yu=new O,Ku=new yt,$u=new yt,Zu=new yt,Oi=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xn.subVectors(r,t),Ii.subVectors(n,t),Wu.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(Ii),l=Xn.dot(Wu),c=Ii.dot(Ii),u=Ii.dot(Wu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ku.setScalar(0),$u.setScalar(0),Zu.setScalar(0),Ku.fromBufferAttribute(e,t),$u.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ku,s.x),o.addScaledVector($u,s.y),o.addScaledVector(Zu,s.z),o}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),Ii.subVectors(e,t),Xn.cross(Ii).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Xn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ds.subVectors(r,n),ps.subVectors(s,n),Xu.subVectors(e,n);let l=ds.dot(Xu),c=ps.dot(Xu);if(l<=0&&c<=0)return t.copy(n);qu.subVectors(e,r);let u=ds.dot(qu),h=ps.dot(qu);if(u>=0&&h<=u)return t.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ds,o);Yu.subVectors(e,s);let d=ds.dot(Yu),m=ps.dot(Yu);if(m>=0&&d<=m)return t.copy(s);let g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ps,a);let x=u*m-d*h;if(x<=0&&h-u>=0&&d-m>=0)return Dp.subVectors(s,r),a=(h-u)/(h-u+(d-m)),t.copy(r).addScaledVector(Dp,a);let p=1/(x+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ka.copy(n.boundingBox)),Ka.applyMatrix4(e.matrixWorld),this.union(Ka)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),$a.subVectors(this.max,_o),ms.subVectors(e.a,_o),gs.subVectors(e.b,_o),xs.subVectors(e.c,_o),nr.subVectors(gs,ms),ir.subVectors(xs,gs),Ar.subVectors(ms,xs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Ar.z,Ar.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Ar.z,0,-Ar.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Ar.y,Ar.x,0];return!Ju(t,ms,gs,xs,$a)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,ms,gs,xs,$a))?!1:(Za.crossVectors(nr,ir),t=[Za.x,Za.y,Za.z],Ju(t,ms,gs,xs,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new O,new O,new O,new O,new O,new O,new O,new O],qn=new O,Ka=new kt,ms=new O,gs=new O,xs=new O,nr=new O,ir=new O,Ar=new O,_o=new O,$a=new O,Za=new O,Er=new O;function Ju(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Er.fromArray(i,s);let a=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=t.dot(Er),u=n.dot(Er);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Wt=new O,Ja=new Fe,e_=0,qt=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:e_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var No=class extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Or=class extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},t_=new kt,vo=new O,ju=new O,bn=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):t_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);let t=vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(ju)),this.expandByPoint(vo.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},n_=0,Nn=new He,Qu=new At,bs=new O,Rn=new kt,Mo=new kt,en=new O,Be=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ay(e)?Or:No)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Mo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Rn.min,Mo.min),Rn.expandByPoint(en),en.addVectors(Rn.max,Mo.max),Rn.expandByPoint(en)):(Rn.expandByPoint(Mo.min),Rn.expandByPoint(Mo.max))}Rn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)en.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(en));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)en.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(e,c),en.add(bs)),r=Math.max(r,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new O,l[M]=new O;let c=new O,u=new O,h=new O,f=new Fe,d=new Fe,m=new Fe,g=new O,x=new O;function p(M,T,C){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,C),f.fromBufferAttribute(s,M),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),x.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[M].add(g),a[T].add(g),a[C].add(g),l[M].add(x),l[T].add(x),l[C].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let M=0,T=y.length;M<T;++M){let C=y[M],P=C.start,F=C.count;for(let L=P,R=P+F;L<R;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let _=new O,b=new O,v=new O,S=new O;function A(M){v.fromBufferAttribute(r,M),S.copy(v);let T=a[M];_.copy(T),_.sub(v.multiplyScalar(v.dot(T))).normalize(),b.crossVectors(S,T);let P=b.dot(l[M])<0?-1:1;o.setXYZW(M,_.x,_.y,_.z,P)}for(let M=0,T=y.length;M<T;++M){let C=y[M],P=C.start,F=C.count;for(let L=P,R=P+F;L<R;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),g=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let g=0,x=l.length;g<x;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new qt(f,u,h)}if(this.index===null)return Ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},fn=new O,or=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Do("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Do("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},eh=new O,i_=new O,r_=new Ve,Yn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=eh.subVectors(n,t).cross(i_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(eh),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||r_.getNormalMatrix(e),r=this.coplanarPoint(eh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},s_=0,ln=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=vi,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Rh,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=km,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ml,this.stencilZFail=Ml,this.stencilZPass=Ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ee(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Ee(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ar=class extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ys,So=new O,_s=new O,vs=new O,Ms=new Fe,wo=new Fe,Jm=new He,ja=new O,To=new O,Qa=new O,Op=new Fe,th=new Fe,Np=new Fe,Ur=class extends At{constructor(e=new ar){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Be;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nr(t,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new or(n,3,0,!1)),ys.setAttribute("uv",new or(n,2,3,!1))}this.geometry=ys,this.material=e,this.center=new Fe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),Jm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-vs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;el(ja.set(-.5,-.5,0),vs,o,_s,r,s),el(To.set(.5,-.5,0),vs,o,_s,r,s),el(Qa.set(.5,.5,0),vs,o,_s,r,s),Op.set(0,0),th.set(1,0),Np.set(1,1);let a=e.ray.intersectTriangle(ja,To,Qa,!1,So);if(a===null&&(el(To.set(-.5,.5,0),vs,o,_s,r,s),th.set(0,1),a=e.ray.intersectTriangle(ja,Qa,To,!1,So),a===null))return;let l=e.ray.origin.distanceTo(So);l<e.near||l>e.far||t.push({distance:l,point:So.clone(),uv:Oi.getInterpolation(So,ja,To,Qa,Op,th,Np,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function el(i,e,t,n,r,s){Ms.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(wo.x=s*Ms.x-r*Ms.y,wo.y=r*Ms.x+s*Ms.y):wo.copy(Ms),i.copy(e),i.x+=wo.x,i.y+=wo.y,i.applyMatrix4(Jm)}var Fi=new O,nh=new O,tl=new O,nl=new O,lr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nh.copy(e).add(t).multiplyScalar(.5),tl.copy(t).sub(e).normalize(),nl.copy(this.origin).sub(nh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(tl),a=nl.dot(this.direction),l=-nl.dot(tl),c=nl.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(nh).addScaledVector(tl,f),d}intersectSphere(e,t){if(e.radius<0)return null;Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),r=Fi.dot(Fi)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,m=t.x-o.x,g=t.y-o.y,x=t.z-o.z,p=n.x-o.x,y=n.y-o.y,_=n.z-o.z,b=Math.abs(l),v=Math.abs(c),S=Math.abs(u),A,M,T,C,P,F,L,R,D,N,B,X;if(b>=v&&b>=S?(T=l,F=h,D=m,X=p,l>=0?(A=c,M=u,C=f,P=d,L=g,R=x,N=y,B=_):(A=u,M=c,C=d,P=f,L=x,R=g,N=_,B=y)):v>=S?(T=c,F=f,D=g,X=y,c>=0?(A=u,M=l,C=d,P=h,L=x,R=m,N=_,B=p):(A=l,M=u,C=h,P=d,L=m,R=x,N=p,B=_)):(T=u,F=d,D=x,X=_,u>=0?(A=l,M=c,C=h,P=f,L=m,R=g,N=p,B=y):(A=c,M=l,C=f,P=h,L=g,R=m,N=y,B=p)),T===0)return null;let z=A/T,H=M/T,G=1/T,oe=C-z*F,se=P-H*F,ke=L-z*D,Ne=R-H*D,qe=N-z*X,J=B-H*X,ie=qe*Ne-J*ke,ye=oe*J-se*qe,Ge=ke*se-Ne*oe;if(r){if(ie<0||ye<0||Ge<0)return null}else if((ie<0||ye<0||Ge<0)&&(ie>0||ye>0||Ge>0))return null;let ve=ie+ye+Ge;if(ve===0)return null;let Je=G*(ie*F+ye*D+Ge*X);return(ve>0?Je<0:Je>0)?null:this.at(Je/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Up=new He,Rr=new lr,il=new bn,Bp=new O,rl=new O,sl=new O,ol=new O,ih=new O,al=new O,kp=new O,ll=new O,Ie=class extends At{constructor(e=new Be,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(ih.fromBufferAttribute(h,e),o?al.addScaledVector(ih,u):al.addScaledVector(ih.sub(t),u))}t.add(al)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(il.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(il,Bp)===null||Rr.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(Up.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Up),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let x=f[m],p=o[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let b=y,v=_;b<v;b+=3){let S=a.getX(b),A=a.getX(b+1),M=a.getX(b+2);r=cl(this,p,e,n,c,u,h,S,A,M),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let x=m,p=g;x<p;x+=3){let y=a.getX(x),_=a.getX(x+1),b=a.getX(x+2);r=cl(this,o,e,n,c,u,h,y,_,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let x=f[m],p=o[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let b=y,v=_;b<v;b+=3){let S=b,A=b+1,M=b+2;r=cl(this,p,e,n,c,u,h,S,A,M),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let x=m,p=g;x<p;x+=3){let y=x,_=x+1,b=x+2;r=cl(this,o,e,n,c,u,h,y,_,b),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function o_(i,e,t,n,r,s,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===yi,a),l===null)return null;ll.copy(a),ll.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:i}}function cl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,rl),i.getVertexPosition(l,sl),i.getVertexPosition(c,ol);let u=o_(i,e,t,n,rl,sl,ol,kp);if(u){let h=new O;Oi.getBarycoord(kp,rl,sl,ol,h),r&&(u.uv=Oi.getInterpolatedAttribute(r,a,l,c,h,new Fe)),s&&(u.uv1=Oi.getInterpolatedAttribute(s,a,l,c,h,new Fe)),o&&(u.normal=Oi.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};Oi.getNormal(rl,sl,ol,f.normal),u.face=f,u.barycoord=h}return u}var Ao=new yt,zp=new yt,Vp=new yt,a_=new yt,Gp=new He,ul=new O,rh=new bn,Hp=new He,sh=new lr,Uo=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new kt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingBox.expandByPoint(ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ul),this.boundingSphere.expandByPoint(ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rh.copy(this.boundingSphere),rh.applyMatrix4(r),e.ray.intersectsSphere(rh)!==!1&&(Hp.copy(r).invert(),sh.copy(e.ray).applyMatrix4(Hp),!(this.boundingBox!==null&&sh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,sh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Om?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ee("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;zp.fromBufferAttribute(r.attributes.skinIndex,e),Vp.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Ao.copy(t),t.set(0,0,0,0)):(Ao.set(...t,1),t.set(0,0,0)),Ao.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let o=Vp.getComponent(s);if(o!==0){let a=zp.getComponent(s);Gp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(a_.copy(Ao).applyMatrix4(Gp),o)}}return t.isVector4&&(t.w=Ao.w),t.applyMatrix4(this.bindMatrixInverse)}},Ns=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Us=class extends $t{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Ut,u=Ut,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wp=new He,l_=new He,Bo=class i{constructor(e=[],t=[]){this.uuid=Zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ee("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:l_;Wp.multiplyMatrices(a,t[s]),Wp.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Us(t,e,e,Dn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let s=e.bones[n],o=t[s];o===void 0&&(Ee("Skeleton: No bone found with UUID:",s),o=new Ns),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Bi=class extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=new He,Xp=new He,hl=[],qp=new kt,c_=new He,Eo=new Ie,Ro=new bn,Br=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,c_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),qp.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(qp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Ro.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(Ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ro.copy(this.boundingSphere),Ro.applyMatrix4(n),e.ray.intersectsSphere(Ro)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ss),Xp.multiplyMatrices(n,Ss),Eo.matrixWorld=Xp,Eo.raycast(e,hl);for(let o=0,a=hl.length;o<a;o++){let l=hl[o];l.instanceId=s,l.object=this,t.push(l)}hl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Us(new Float32Array(r*this.count),r,this.count,ic,Fn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cr=new bn,u_=new Fe(.5,.5),fl=new O,Bs=class{constructor(e=new Yn,t=new Yn,n=new Yn,r=new Yn,s=new Yn,o=new Yn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],x=s[10],p=s[11],y=s[12],_=s[13],b=s[14],v=s[15];if(r[0].setComponents(c-o,d-u,p-m,v-y).normalize(),r[1].setComponents(c+o,d+u,p+m,v+y).normalize(),r[2].setComponents(c+a,d+h,p+g,v+_).normalize(),r[3].setComponents(c-a,d-h,p-g,v-_).normalize(),n)r[4].setComponents(l,f,x,b).normalize(),r[5].setComponents(c-l,d-f,p-x,v-b).normalize();else if(r[4].setComponents(c-l,d-f,p-x,v-b).normalize(),t===$n)r[5].setComponents(c+l,d+f,p+x,v+b).normalize();else if(t===Is)r[5].setComponents(l,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);let t=u_.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ot=class extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Dl=new O,Ol=new O,Yp=new He,Co=new lr,dl=new bn,oh=new O,Kp=new O,In=class extends At{constructor(e=new Be,t=new Ot){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Dl.fromBufferAttribute(t,r-1),Ol.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Dl.distanceTo(Ol);e.setAttribute("lineDistance",new ze(n,1))}else Ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(r),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;Yp.copy(r).invert(),Co.copy(e.ray).applyMatrix4(Yp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,x=m-1;g<x;g+=c){let p=u.getX(g),y=u.getX(g+1),_=pl(this,e,Co,l,p,y,g);_&&t.push(_)}if(this.isLineLoop){let g=u.getX(m-1),x=u.getX(d),p=pl(this,e,Co,l,g,x,m-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=d,x=m-1;g<x;g+=c){let p=pl(this,e,Co,l,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){let g=pl(this,e,Co,l,m-1,d,m-1);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function pl(i,e,t,n,r,s,o){let a=i.geometry.attributes.position;if(Dl.fromBufferAttribute(a,r),Ol.fromBufferAttribute(a,s),t.distanceSqToSegment(Dl,Ol,oh,Kp)>n)return;oh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(oh);if(!(c<e.near||c>e.far))return{distance:c,point:Kp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var $p=new O,Zp=new O,yn=class extends In{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)$p.fromBufferAttribute(t,r),Zp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$p.distanceTo(Zp);e.setAttribute("lineDistance",new ze(n,1))}else Ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ko=class extends In{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},_n=class extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Jp=new He,ph=new lr,ml=new bn,gl=new O,Pn=class extends At{constructor(e=new Be,t=new _n){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;Jp.copy(r).invert(),ph.copy(e.ray).applyMatrix4(Jp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,g=d;m<g;m++){let x=c.getX(m);gl.fromBufferAttribute(h,x),jp(gl,x,l,r,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,g=d;m<g;m++)gl.fromBufferAttribute(h,m),jp(gl,m,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function jp(i,e,t,n,r,s,o){let a=ph.distanceSqToPoint(i);if(a<t){let l=new O;ph.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var zo=class extends $t{constructor(e=[],t=fr,n,r,s,o,a,l,c,u){super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cn=class extends $t{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var cr=class extends $t{constructor(e,t,n=ei,r,s,o,a=Ut,l=Ut,c,u=di,h=1){if(u!==di&&u!==dr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nl=class extends cr{constructor(e,t=ei,n=fr,r,s,o=Ut,a=Ut,l,c=di){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vo=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ur=class i extends Be{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(h,2));function m(g,x,p,y,_,b,v,S,A,M,T){let C=b/A,P=v/M,F=b/2,L=v/2,R=S/2,D=A+1,N=M+1,B=0,X=0,z=new O;for(let H=0;H<N;H++){let G=H*P-L;for(let oe=0;oe<D;oe++){let se=oe*C-F;z[g]=se*y,z[x]=G*_,z[p]=R,c.push(z.x,z.y,z.z),z[g]=0,z[x]=0,z[p]=S>0?1:-1,u.push(z.x,z.y,z.z),h.push(oe/A),h.push(1-H/M),B+=1}}for(let H=0;H<M;H++)for(let G=0;G<A;G++){let oe=f+G+D*H,se=f+G+D*(H+1),ke=f+(G+1)+D*(H+1),Ne=f+(G+1)+D*H;l.push(oe,se,Ne),l.push(se,ke,Ne),X+=6}a.addGroup(d,X,T),d+=X,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function h_(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=jm(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=g_(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let u=a,h=l;for(let f=t;f<r;f+=t){let d=i[f],m=i[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Go(s,o,t,a,l,c,0),o}function jm(i,e,t,n,r){let s;if(r===E_(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=Qp(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=Qp(o/n|0,i[o],i[o+1],s);return s&&ks(s,s.next)&&(Wo(s),s=s.next),s}function kr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ks(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Go(i,e,t,n,r,s,o){if(!i)return;!o&&s&&v_(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?d_(i,n,r,s):f_(i)){e.push(l.i,i.i,c.i),Wo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=p_(kr(i),e),Go(i,e,t,n,r,s,2)):o===2&&m_(i,e,t,n,r,s):Go(kr(i),e,t,n,r,s,1);break}}}function f_(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&Io(r,a,s,l,o,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function d_(i,e,t,n){let r=i.prev,s=i,o=i.next;if(Dt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),g=Math.max(a,l,c),x=Math.max(u,h,f),p=mh(d,m,e,t,n),y=mh(g,x,e,t,n),_=i.prevZ,b=i.nextZ;for(;_&&_.z>=p&&b&&b.z<=y;){if(_.x>=d&&_.x<=g&&_.y>=m&&_.y<=x&&_!==r&&_!==o&&Io(a,u,l,h,c,f,_.x,_.y)&&Dt(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=d&&b.x<=g&&b.y>=m&&b.y<=x&&b!==r&&b!==o&&Io(a,u,l,h,c,f,b.x,b.y)&&Dt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=g&&_.y>=m&&_.y<=x&&_!==r&&_!==o&&Io(a,u,l,h,c,f,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=y;){if(b.x>=d&&b.x<=g&&b.y>=m&&b.y<=x&&b!==r&&b!==o&&Io(a,u,l,h,c,f,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function p_(i,e){let t=i;do{let n=t.prev,r=t.next.next;!ks(n,r)&&e0(n,t,t.next,r)&&Ho(n,r)&&Ho(r,n)&&(e.push(n.i,t.i,r.i),Wo(t),Wo(t.next),t=i=r),t=t.next}while(t!==i);return kr(t)}function m_(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&w_(o,a)){let l=t0(o,a);o=kr(o,o.next),l=kr(l,l.next),Go(o,e,t,n,r,s,0),Go(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function g_(i,e,t,n){let r=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=jm(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(S_(c))}r.sort(x_);for(let s=0;s<r.length;s++)t=b_(r[s],t);return t}function x_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function b_(i,e){let t=y_(i,e);if(!t)return e;let n=t0(t,i);return kr(n,n.next),kr(t,t.next)}function y_(i,e){let t=e,n=i.x,r=i.y,s=-1/0,o;if(ks(i,t))return t;do{if(ks(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){let h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qm(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){let h=Math.abs(r-t.y)/(n-t.x);Ho(t,i)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&__(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function __(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function v_(i,e,t,n){let r=i;do r.z===0&&(r.z=mh(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,M_(r)}function M_(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function mh(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function S_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Qm(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Io(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&Qm(i,e,t,n,r,s,o,a)}function w_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!T_(i,e)&&(Ho(i,e)&&Ho(e,i)&&A_(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ks(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ks(i,e){return i.x===e.x&&i.y===e.y}function e0(i,e,t,n){let r=bl(Dt(i,e,t)),s=bl(Dt(i,e,n)),o=bl(Dt(t,n,i)),a=bl(Dt(t,n,e));return!!(r!==s&&o!==a||r===0&&xl(i,t,e)||s===0&&xl(i,n,e)||o===0&&xl(t,i,n)||a===0&&xl(t,e,n))}function xl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function bl(i){return i>0?1:i<0?-1:0}function T_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&e0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ho(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function A_(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function t0(i,e){let t=gh(i.i,i.x,i.y),n=gh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qp(i,e,t,n){let r=gh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E_(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var xh=class{static triangulate(e,t,n=2){return h_(e,t,n)}},Xo=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];em(e),tm(n,e);let o=e.length;t.forEach(em);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,tm(n,t[l]);let a=xh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function em(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function tm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Un=class i extends Be{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],g=[],x=[];for(let p=0;p<u;p++){let y=p*f-o;for(let _=0;_<c;_++){let b=_*h-s;m.push(b,-y,0),g.push(0,0,1),x.push(_/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,b=y+c*(p+1),v=y+1+c*(p+1),S=y+1+c*p;d.push(_,b,S),d.push(b,v,S)}this.setIndex(d),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(g,3)),this.setAttribute("uv",new ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zr=class i extends Be{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/r,d=new O,m=new Fe;for(let g=0;g<=r;g++){for(let x=0;x<=n;x++){let p=s+x/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let g=0;g<r;g++){let x=g*(n+1);for(let p=0;p<n;p++){let y=p+x,_=y,b=y+n+1,v=y+n+2,S=y+1;a.push(_,b,S),a.push(b,v,S)}}this.setIndex(a),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var qo=class i extends Be{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new O,f=new O,d=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){let y=[],_=p/n,b=o+_*a,v=e*Math.cos(b),S=Math.sqrt(e*e-v*v),A=0;p===0&&o===0?A=.5/t:p===n&&l===Math.PI&&(A=-.5/t);for(let M=0;M<=t;M++){let T=M/t,C=r+T*s;h.x=-S*Math.cos(C),h.y=v,h.z=S*Math.sin(C),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),x.push(T+A,1-_),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=u[p][y+1],b=u[p][y],v=u[p+1][y],S=u[p+1][y+1];(p!==0||o>0)&&d.push(_,b,S),(p!==n-1||l<Math.PI)&&d.push(b,v,S)}this.setIndex(d),this.setAttribute("position",new ze(m,3)),this.setAttribute("normal",new ze(g,3)),this.setAttribute("uv",new ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];if(nm(r))r.isRenderTargetTexture?(Ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(nm(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function un(i){let e={};for(let t=0;t<i.length;t++){let n=Yr(i[t]);for(let r in n)e[r]=n[r]}return e}function nm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function R_(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var n0={clone:Yr,merge:un},C_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=R_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(r.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[n].value=new He().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ul=class extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},gi=class extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new K(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends gi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new K(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new K(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new K(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Yo=class extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bl=class extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Um,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kl=class extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function sr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function P_(i){function e(r,s){return i[r]-i[s]}let t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function im(i,e,t){let n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){let a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function L_(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}var xi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zl=class extends xi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hh,endingEnd:hh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:s=e,a=2*t-n;break;case dh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=e,l=2*n-t;break;case dh:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),g=m*m,x=g*m,p=-f*x+2*f*g-f*m,y=(1+f)*x+(-1.5-2*f)*g+(-.5+f)*m+1,_=(-1-d)*x+(1.5+d)*g+.5*m,b=d*x-d*g;for(let v=0;v!==a;++v)s[v]=p*o[u+v]+y*o[c+v]+_*o[l+v]+b*o[h+v];return s}},Vl=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Gl=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hl=class extends xi{interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-t)/(r-t),g=1-m;for(let x=0;x!==a;++x)s[x]=o[c+x]*g+o[l+x]*m;return s}let f=a*2,d=e-1;for(let m=0;m!==a;++m){let g=o[c+m],x=o[l+m],p=d*f+m*2,y=h[p],_=h[p+1],b=e*f+m*2,v=u[b],S=u[b+1],A=D_(n,t,y,v,r);s[m]=i0(A,g,_,S,x)}return s}};function i0(i,e,t,n,r){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*r}function F_(i,e,t,n,r){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(r-n)}function D_(i,e,t,n,r){let s=(i-e)/(r-e);for(let o=0;o<8;o++){let a=i0(s,e,t,n,r)-i;if(Math.abs(a)<1e-10)break;let l=F_(s,e,t,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Mn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(t,this.TimeBufferType),this.values=sr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r),Sl(e.settings)&&(n.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case Lr:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break;case uh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ee("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return Lr;case this.InterpolantFactoryMethodSmooth:return vl;case this.InterpolantFactoryMethodBezier:return uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Sl(this.settings)&&(rm(this.settings.inTangents,e),rm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ue("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Ey(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===vl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let g=t[h+m];if(g!==t[f+m]||g!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Sl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function rm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Lr;var ki=class extends Mn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Pr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ko=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};Ko.prototype.ValueTypeName="color";var zi=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};zi.prototype.ValueTypeName="number";var Wl=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Cn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Vi=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends Mn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Pr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var hr=class extends Mn{constructor(e,t,n,r){super(e,t,n,r)}};hr.prototype.ValueTypeName="vector";var $o=class{constructor(e="",t=-1,n=[],r=Nm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(N_(n[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Mn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);let u=P_(l);l=im(l,1,u),c=im(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new zi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(s);if(u&&u.length>1){let h=u[1],f=r[h];f||(r[h]=f=[]),f.push(c)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function O_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zi;case"vector":case"vector2":case"vector3":case"vector4":return hr;case"color":return Ko;case"quaternion":return Vi;case"bool":case"boolean":return ki;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function N_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=O_(i.type);if(i.times===void 0){let n=[],r=[];L_(i.keys,n,r,"value"),i.times=n,i.values=r}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Sl(i.settings)&&(t.settings={inTangents:sr(i.settings.inTangents,Float32Array),outTangents:sr(i.settings.outTangents,Float32Array)}),t}var fi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(sm(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!sm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function sm(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Xl=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},r0=new Xl,bi=class{constructor(e){this.manager=e!==void 0?e:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Di={},bh=class extends Error{constructor(e,t){super(e),this.response=t}},zs=class extends bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=fi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:n,onError:r});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:n,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Di[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,g=0,x=new ReadableStream({start(p){y();function y(){h.read().then(({done:_,value:b})=>{if(_)p.close();else{g+=b.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:d});for(let S=0,A=u.length;S<A;S++){let M=u[S];M.onProgress&&M.onProgress(v)}p.enqueue(b),y()}},_=>{p.error(_)})}}});return new Response(x)}else throw new bh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{fi.add(`file:${e}`,c);let u=Di[e];delete Di[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Di[e];if(u===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ws=new WeakMap,ql=class extends bi{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=fi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=ws.get(o);h===void 0&&(h=[],ws.set(o,h)),h.push({onLoad:t,onError:r})}return o}let a=Ps("img");function l(){u(),t&&t(this);let h=ws.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}ws.delete(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),fi.remove(`image:${e}`);let f=ws.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(h)}ws.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var Zo=class extends bi{constructor(e){super(e)}load(e,t,n,r){let s=new $t,o=new ql(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},Vr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Jo=class extends Vr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ah=new He,om=new O,am=new O,Vs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;om.setFromMatrixPosition(e.matrixWorld),t.position.copy(om),am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(am),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ah,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yl=new O,_l=new Cn,hi=new O,jo=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,_l,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,_l,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yl,_l,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,_l,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rr=new O,lm=new Fe,cm=new Fe,Xt=class extends jo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fr*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,lm,cm),t.subVectors(cm,lm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Po*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yh=class extends Vs{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Fr*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Qo=class extends Vr{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},_h=class extends Vs{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},Gr=class extends Vr{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Bn=class extends jo{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vh=class extends Vs{constructor(){super(new Bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hr=class extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new vh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Hi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var lh=new WeakMap,ea=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ee("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ee("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=fi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{lh.has(o)===!0?(r&&r(lh.get(o)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return fi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),lh.set(l,c),fi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});fi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ts=-90,As=1,Yl=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xt(Ts,As,e,t);r.layers=this.layers,this.add(r);let s=new Xt(Ts,As,e,t);s.layers=this.layers,this.add(s);let o=new Xt(Ts,As,e,t);o.layers=this.layers,this.add(o);let a=new Xt(Ts,As,e,t);a.layers=this.layers,this.add(a);let l=new Xt(Ts,As,e,t);l.layers=this.layers,this.add(l);let c=new Xt(Ts,As,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Kl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zh="\\[\\]\\.:\\/",U_=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",B_="[^"+Zh.replace("\\.","")+"]",k_=/((?:WC+[\/:])*)/.source.replace("WC",Jh),z_=/(WCOD+)?/.source.replace("WCOD",B_),V_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),G_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),H_=new RegExp("^"+k_+z_+V_+G_+"$"),W_=["material","materials","bones","map"],Mh=class{constructor(e,t,n){let r=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(U_,"")}static parseTrackName(e){let t=H_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);W_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Mh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NT=new Float32Array(1);var um=new He,ta=class{constructor(e,t,n=0,r=1/0){this.ray=new lr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ue("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return um.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(um),this}intersectObject(e,t=!0,n=[]){return Sh(e,this,n,t),n.sort(hm),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Sh(e[r],this,n,t);return n.sort(hm),n}};function hm(i,e){return i.distance-e.distance}function Sh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Sh(s[o],e,t,!0)}}var rf=class rf{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};rf.prototype.isMatrix2=!0;var wh=rf;function jh(i,e,t,n){let r=X_(n);switch(t){case Vh:return i*e;case ic:return i*e/r.components*r.byteLength;case rc:return i*e/r.components*r.byteLength;case pr:return i*e*2/r.components*r.byteLength;case sc:return i*e*2/r.components*r.byteLength;case Gh:return i*e*3/r.components*r.byteLength;case Dn:return i*e*4/r.components*r.byteLength;case oc:return i*e*4/r.components*r.byteLength;case sa:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(i,16)*Math.max(e,8)/4;case ac:case cc:return Math.max(i,8)*Math.max(e,8)/2;case hc:case fc:case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dc:case ca:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Lc:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dc:case Oc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ua:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X_(i){switch(i){case Sn:case Uh:return{byteLength:1,components:1};case Ws:case Bh:case ti:return{byteLength:2,components:1};case tc:case nc:return{byteLength:2,components:4};case ei:case ec:case Fn:return{byteLength:4,components:1};case kh:case zh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function A0(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Y_(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let g=h[d];i.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,Z_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,J_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ev=`#ifdef USE_AOMAP
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
#endif`,tv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nv=`#ifdef USE_BATCHING
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
#endif`,iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ov=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,av=`#ifdef USE_IRIDESCENCE
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
#endif`,lv=`#ifdef USE_BUMPMAP
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xv=`#define PI 3.141592653589793
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
} // validated`,bv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yv=`vec3 transformedNormal = objectNormal;
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
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Av=`#ifdef USE_ENVMAP
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
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ov=`#ifdef USE_GRADIENTMAP
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
}`,Nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xv=`PhysicalMaterial material;
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
#endif`,qv=`uniform sampler2D dfgLUT;
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
}`,Yv=`
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
#endif`,Kv=`#if defined( RE_IndirectDiffuse )
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
#endif`,$v=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zv=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rM=`#if defined( USE_POINTS_UV )
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
#endif`,sM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uM=`#ifdef USE_MORPHTARGETS
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
#endif`,hM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
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
#endif`,bM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
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
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UM=`#ifdef USE_SKINNING
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
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#ifdef USE_TRANSMISSION
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$M=`uniform sampler2D t2D;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,n1=`#define DISTANCE
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
}`,i1=`#define DISTANCE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#define LAMBERT
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
}`,h1=`#define LAMBERT
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
}`,f1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,p1=`#define NORMAL
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
}`,m1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,x1=`#define PHONG
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
}`,b1=`#define STANDARD
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
}`,y1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,v1=`#define TOON
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
}`,M1=`uniform float size;
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
}`,S1=`uniform vec3 diffuse;
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
}`,w1=`#include <common>
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
}`,T1=`uniform vec3 color;
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
}`,A1=`uniform float rotation;
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
}`,E1=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:K_,alphahash_pars_fragment:$_,alphamap_fragment:Z_,alphamap_pars_fragment:J_,alphatest_fragment:j_,alphatest_pars_fragment:Q_,aomap_fragment:ev,aomap_pars_fragment:tv,batching_pars_vertex:nv,batching_vertex:iv,begin_vertex:rv,beginnormal_vertex:sv,bsdfs:ov,iridescence_fragment:av,bumpmap_pars_fragment:lv,clipping_planes_fragment:cv,clipping_planes_pars_fragment:uv,clipping_planes_pars_vertex:hv,clipping_planes_vertex:fv,color_fragment:dv,color_pars_fragment:pv,color_pars_vertex:mv,color_vertex:gv,common:xv,cube_uv_reflection_fragment:bv,defaultnormal_vertex:yv,displacementmap_pars_vertex:_v,displacementmap_vertex:vv,emissivemap_fragment:Mv,emissivemap_pars_fragment:Sv,colorspace_fragment:wv,colorspace_pars_fragment:Tv,envmap_fragment:Av,envmap_common_pars_fragment:Ev,envmap_pars_fragment:Rv,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:zv,envmap_vertex:Iv,fog_vertex:Pv,fog_pars_vertex:Lv,fog_fragment:Fv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Ov,lightmap_pars_fragment:Nv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Bv,lights_pars_begin:kv,lights_toon_fragment:Vv,lights_toon_pars_fragment:Gv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Wv,lights_physical_fragment:Xv,lights_physical_pars_fragment:qv,lights_fragment_begin:Yv,lights_fragment_maps:Kv,lights_fragment_end:$v,lightprobes_pars_fragment:Zv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:Qv,logdepthbuf_vertex:eM,map_fragment:tM,map_pars_fragment:nM,map_particle_fragment:iM,map_particle_pars_fragment:rM,metalnessmap_fragment:sM,metalnessmap_pars_fragment:oM,morphinstance_vertex:aM,morphcolor_vertex:lM,morphnormal_vertex:cM,morphtarget_pars_vertex:uM,morphtarget_vertex:hM,normal_fragment_begin:fM,normal_fragment_maps:dM,normal_pars_fragment:pM,normal_pars_vertex:mM,normal_vertex:gM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:bM,clearcoat_normal_fragment_maps:yM,clearcoat_pars_fragment:_M,iridescence_pars_fragment:vM,opaque_fragment:MM,packing:SM,premultiplied_alpha_fragment:wM,project_vertex:TM,dithering_fragment:AM,dithering_pars_fragment:EM,roughnessmap_fragment:RM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:IM,shadowmap_pars_vertex:PM,shadowmap_vertex:LM,shadowmask_pars_fragment:FM,skinbase_vertex:DM,skinning_pars_vertex:OM,skinning_vertex:NM,skinnormal_vertex:UM,specularmap_fragment:BM,specularmap_pars_fragment:kM,tonemapping_fragment:zM,tonemapping_pars_fragment:VM,transmission_fragment:GM,transmission_pars_fragment:HM,uv_pars_fragment:WM,uv_pars_vertex:XM,uv_vertex:qM,worldpos_vertex:YM,background_vert:KM,background_frag:$M,backgroundCube_vert:ZM,backgroundCube_frag:JM,cube_vert:jM,cube_frag:QM,depth_vert:e1,depth_frag:t1,distance_vert:n1,distance_frag:i1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:u1,meshlambert_frag:h1,meshmatcap_vert:f1,meshmatcap_frag:d1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:x1,meshphysical_vert:b1,meshphysical_frag:y1,meshtoon_vert:_1,meshtoon_frag:v1,points_vert:M1,points_frag:S1,shadow_vert:w1,shadow_frag:T1,sprite_vert:A1,sprite_frag:E1},pe={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Si={basic:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new K(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:un([pe.common,pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:un([pe.lights,pe.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Si.physical={uniforms:un([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var kc={r:0,b:0,g:0},R1=new He,E0=new Ve;E0.set(-1,0,0,0,1,0,0,0,1);function C1(i,e,t,n,r,s){let o=new K(0),a=r===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let b=y.backgroundBlurriness>0;_=e.get(_,b)}return _}function m(y){let _=!1,b=d(y);b===null?x(o,a):b&&b.isColor&&(x(b,1),_=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,s):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,_){let b=d(_);b&&(b.isCubeTexture||b.mapping===ra)?(c===void 0&&(c=new Ie(new ur(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Yr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(_.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(E0),c.material.toneMapped=$e.getTransfer(b.colorSpace)!==gt,(u!==b||h!==b.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Ie(new Un(2,2),new Ln({name:"BackgroundMaterial",uniforms:Yr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=$e.getTransfer(b.colorSpace)!==gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,h=b.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,_){y.getRGB(kc,$h(i)),t.buffers.color.setClear(kc.r,kc.g,kc.b,_,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,_=1){o.set(y),a=_,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,x(o,a)},render:m,addToRenderList:g,dispose:p}}function I1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(P,F,L,R,D){let N=!1,B=h(P,R,L,F);s!==B&&(s=B,c(s.object)),N=d(P,R,L,D),N&&m(P,R,L,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,b(P,F,L,R),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function h(P,F,L,R){let D=R.wireframe===!0,N=n[F.id];N===void 0&&(N={},n[F.id]=N);let B=P.isInstancedMesh===!0?P.id:0,X=N[B];X===void 0&&(X={},N[B]=X);let z=X[L.id];z===void 0&&(z={},X[L.id]=z);let H=z[D];return H===void 0&&(H=f(l()),z[D]=H),H}function f(P){let F=[],L=[],R=[];for(let D=0;D<t;D++)F[D]=0,L[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:L,attributeDivisors:R,object:P,attributes:{},index:null}}function d(P,F,L,R){let D=s.attributes,N=F.attributes,B=0,X=L.getAttributes();for(let z in X)if(X[z].location>=0){let G=D[z],oe=N[z];if(oe===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),G===void 0||G.attribute!==oe||oe&&G.data!==oe.data)return!0;B++}return s.attributesNum!==B||s.index!==R}function m(P,F,L,R){let D={},N=F.attributes,B=0,X=L.getAttributes();for(let z in X)if(X[z].location>=0){let G=N[z];G===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(G=P.instanceColor));let oe={};oe.attribute=G,G&&G.data&&(oe.data=G.data),D[z]=oe,B++}s.attributes=D,s.attributesNum=B,s.index=R}function g(){let P=s.newAttributes;for(let F=0,L=P.length;F<L;F++)P[F]=0}function x(P){p(P,0)}function p(P,F){let L=s.newAttributes,R=s.enabledAttributes,D=s.attributeDivisors;L[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),D[P]!==F&&(i.vertexAttribDivisor(P,F),D[P]=F)}function y(){let P=s.newAttributes,F=s.enabledAttributes;for(let L=0,R=F.length;L<R;L++)F[L]!==P[L]&&(i.disableVertexAttribArray(L),F[L]=0)}function _(P,F,L,R,D,N,B){B===!0?i.vertexAttribIPointer(P,F,L,D,N):i.vertexAttribPointer(P,F,L,R,D,N)}function b(P,F,L,R){g();let D=R.attributes,N=L.getAttributes(),B=F.defaultAttributeValues;for(let X in N){let z=N[X];if(z.location>=0){let H=D[X];if(H===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(H=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(H=P.instanceColor)),H!==void 0){let G=H.normalized,oe=H.itemSize,se=e.get(H);if(se===void 0)continue;let ke=se.buffer,Ne=se.type,qe=se.bytesPerElement,J=Ne===i.INT||Ne===i.UNSIGNED_INT||H.gpuType===ec;if(H.isInterleavedBufferAttribute){let ie=H.data,ye=ie.stride,Ge=H.offset;if(ie.isInstancedInterleavedBuffer){for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve,ie.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ve=0;ve<z.locationSize;ve++)x(z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ve=0;ve<z.locationSize;ve++)_(z.location+ve,oe/z.locationSize,Ne,G,ye*qe,(Ge+oe/z.locationSize*ve)*qe,J)}else{if(H.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)p(z.location+ie,H.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ie=0;ie<z.locationSize;ie++)x(z.location+ie);i.bindBuffer(i.ARRAY_BUFFER,ke);for(let ie=0;ie<z.locationSize;ie++)_(z.location+ie,oe/z.locationSize,Ne,G,oe*qe,oe/z.locationSize*ie*qe,J)}}else if(B!==void 0){let G=B[X];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(z.location,G);break;case 3:i.vertexAttrib3fv(z.location,G);break;case 4:i.vertexAttrib4fv(z.location,G);break;default:i.vertexAttrib1fv(z.location,G)}}}}y()}function v(){T();for(let P in n){let F=n[P];for(let L in F){let R=F[L];for(let D in R){let N=R[D];for(let B in N)u(N[B].object),delete N[B];delete R[D]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let F=n[P.id];for(let L in F){let R=F[L];for(let D in R){let N=R[D];for(let B in N)u(N[B].object),delete N[B];delete R[D]}}delete n[P.id]}function A(P){for(let F in n){let L=n[F];for(let R in L){let D=L[R];if(D[P.id]===void 0)continue;let N=D[P.id];for(let B in N)u(N[B].object),delete N[B];delete D[P.id]}}}function M(P){for(let F in n){let L=n[F],R=P.isInstancedMesh===!0?P.id:0,D=L[R];if(D!==void 0){for(let N in D){let B=D[N];for(let X in B)u(B[X].object),delete B[X];delete D[N]}delete L[R],Object.keys(L).length===0&&delete n[F]}}}function T(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:x,disableUnusedAttributes:y}}function P1(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function L1(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let M=A===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==Fn&&!M&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,maxSamples:v,samples:S}}function F1(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Yn,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,p=i.get(h);if(!r||m===null||m.length===0||s&&!x)s?u(null):c();else{let y=s?0:n,_=y*4,b=p.clippingState||null;l.value=b,b=u(m,f,_,d);for(let v=0;v!==_;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){let g=h!==null?h.length:0,x=null;if(g!==0){if(x=l.value,m!==!0||x===null){let p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,b=d;_!==g;++_,b+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(x,b),x[b+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}var Ks=4,D1=6,O1=20,N1=256,da=new Bn,s0=new K,sf=null,of=0,af=0,lf=!1,U1=new O,Kr=new O,Zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=U1}=s;sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,of,af),this._renderer.xr.enabled=lf,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===Xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ti,format:Dn,colorSpace:pn,depthBuffer:!1},r=o0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o0(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=B1(s)),this._blurMaterial=z1(s,e,t),this._ggxMaterial=k1(s,e,t)}return r}_compileMaterial(e){let t=new Ie(new Be,e);this._renderer.compile(t,da)}_sceneToCubeUV(e,t,n,r,s){let l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(s0),h.toneMapping=jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new ur,new lt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,x=g.material,p=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(s0),p=!0);for(let _=0;_<6;_++){let b=_%3;b===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[_],s.y,s.z)):b===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[_]));let v=this._cubeSize;Ys(r,b*v,_>2?v:0,v,v),h.setRenderTarget(r),p&&h.render(g,l),h.render(e,l)}h.toneMapping=d,h.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===fr||e.mapping===Xr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,da)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-Ks?n-m+Ks:0),p=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Ys(s,x,p,3*g,2*g),r.setRenderTarget(s),r.render(a,da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Ys(e,x,p,3*g,2*g),r.setRenderTarget(e),r.render(a,da)}_blur(e,t,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[r],h=3*u*(r>this._lodMax-Ks?r-this._lodMax+Ks:0),f=4*(this._cubeSize-u);Ys(t,h,f,3*u,2*u),o.setRenderTarget(t),o.render(l,da)}};function B1(i){let e=[],t=[],n=i,r=i-Ks+1+D1;for(let s=0;s<r;s++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,m=new Float32Array(d*f*h),g=new Float32Array(d*f*h);for(let p=0;p<h;p++){let y=p%3*2/3-1,_=p>2?0:-1,b=[y,_,0,y+2/3,_,0,y+2/3,_+1,0,y,_,0,y+2/3,_+1,0,y,_+1,0];m.set(b,d*f*p);for(let v=0;v<f;v++){let S=u[v*2]*2-1,A=u[v*2+1]*2-1;p===0?Kr.set(1,A,S):p===1?Kr.set(-S,1,-A):p===2?Kr.set(-S,A,1):p===3?Kr.set(-1,A,-S):p===4?Kr.set(-S,-1,A):Kr.set(S,A,-1),Kr.toArray(g,(p*f+v)*d)}}let x=new Be;x.setAttribute("position",new qt(m,d)),x.setAttribute("outputDirection",new qt(g,d)),t.push(new Ie(x,null)),n>Ks&&n--}return{lodMeshes:t,sizeLods:e}}function o0(i,e,t){let n=new an(i,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function k1(i,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function z1(i,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:O1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function a0(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:_i,depthTest:!1,depthWrite:!1})}function l0(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vc=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ur(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:_i});s.uniforms.tEquirect.value=t;let o=new Ie(r,s),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Bt),new Yl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}};function V1(i){let e=new WeakMap,t=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Jl||d===jl)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let g=new Vc(m.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,m=d===Jl||d===jl,g=d===fr||d===Xr;if(m||g){let x=t.get(f),p=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Zs(i)),x=m?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let y=f.image;return m&&y&&y.height>0||g&&y&&l(y)?(n===null&&(n=new Zs(i)),x=m?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",u),x.texture):null}}}return f}function a(f,d){return d===Jl?f.mapping=fr:d===jl&&(f.mapping=Xr),f}function l(f){let d=0,m=6;for(let g=0;g<m;g++)f[g]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function G1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ir("WebGLRenderer: "+n+" extension not supported."),r}}}function H1(i,e,t,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,g=0;if(m===void 0)return;if(d!==null){let y=d.array;g=d.version;for(let _=0,b=y.length;_<b;_+=3){let v=y[_+0],S=y[_+1],A=y[_+2];f.push(v,S,S,A,A,v)}}else{let y=m.array;g=m.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let v=_+0,S=_+1,A=_+2;f.push(v,S,S,A,A,v)}}let x=new(m.count>=65535?Or:No)(f,1);x.version=g;let p=s.get(h);p&&e.remove(p),s.set(h,x)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function W1(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x];t.update(g,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function X1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function q1(i,e,t){let n=new WeakMap,r=new yt;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),m===!0&&(_=2),g===!0&&(_=3);let b=a.attributes.position.count*_,v=1;b>e.maxTextureSize&&(v=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let S=new Float32Array(b*v*4*h),A=new Oo(S,b,v,h);A.type=Fn,A.needsUpdate=!0;let M=_*4;for(let C=0;C<h;C++){let P=x[C],F=p[C],L=y[C],R=b*v*4*C;for(let D=0;D<P.count;D++){let N=D*M;d===!0&&(r.fromBufferAttribute(P,D),S[R+N+0]=r.x,S[R+N+1]=r.y,S[R+N+2]=r.z,S[R+N+3]=0),m===!0&&(r.fromBufferAttribute(F,D),S[R+N+4]=r.x,S[R+N+5]=r.y,S[R+N+6]=r.z,S[R+N+7]=0),g===!0&&(r.fromBufferAttribute(L,D),S[R+N+8]=r.x,S[R+N+9]=r.y,S[R+N+10]=r.z,S[R+N+11]=L.itemSize===4?r.w:1)}}f={count:h,texture:A,size:new Fe(b,v)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Y1(i,e,t,n,r){let s=new WeakMap;function o(c){let u=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var K1={[Ch]:"LINEAR_TONE_MAPPING",[Ih]:"REINHARD_TONE_MAPPING",[Ph]:"CINEON_TONE_MAPPING",[Lh]:"ACES_FILMIC_TONE_MAPPING",[Dh]:"AGX_TONE_MAPPING",[Oh]:"NEUTRAL_TONE_MAPPING",[Fh]:"CUSTOM_TONE_MAPPING"};function $1(i,e,t,n,r,s){let o=new an(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Be;c.setAttribute("position",new ze([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ze([0,2,0,0,2,0],2));let u=new Ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ie(c,u),f=new Bn(-1,1,1,-1,0,1),d=null,m=null,g=!1,x,p=null,y=[],_=!1;this.setSize=function(b,v){o.setSize(b,v),a!==null&&a.setSize(b,v),l!==null&&l.setSize(b,v);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(b,v)}},this.setEffects=function(b){y=b,_=y.length>0&&y[0].isRenderPass===!0;let v=o.width,S=o.height;y.length>0&&a===null&&(a=new an(v,S,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new an(v,S,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let M=y[A];M.setSize&&M.setSize(v,S)}},this.begin=function(b,v){if(g||b.toneMapping===jn&&y.length===0)return!1;if(p=v,v!==null){let S=v.width,A=v.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return _===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=jn,!0},this.hasRenderPass=function(){return _},this.end=function(b,v){b.toneMapping=x,g=!0;let S=o,A=a;for(let M=0;M<y.length;M++){let T=y[M];T.enabled!==!1&&(T.render(b,A,S,v),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,u.defines={},$e.getTransfer(d)===gt&&(u.defines.SRGB_TRANSFER="");let M=K1[m];M&&(u.defines[M]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(p),b.render(h,f),p=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var R0=new $t,hf=new cr(1,1),C0=new Oo,I0=new Fl,P0=new zo,c0=[],u0=[],h0=new Float32Array(16),f0=new Float32Array(9),d0=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=c0[r];if(s===void 0&&(s=new Float32Array(r),c0[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hc(i,e){let t=u0[e];t===void 0&&(t=new Int32Array(e),u0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function J1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Jt(t,e)}}function j1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Jt(t,e)}}function Q1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Jt(t,e)}}function eS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;d0.set(n),i.uniformMatrix2fv(this.addr,!1,d0),Jt(t,n)}}function tS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;f0.set(n),i.uniformMatrix3fv(this.addr,!1,f0),Jt(t,n)}}function nS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,n))return;h0.set(n),i.uniformMatrix4fv(this.addr,!1,h0),Jt(t,n)}}function iS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Jt(t,e)}}function sS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Jt(t,e)}}function oS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Jt(t,e)}}function aS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Jt(t,e)}}function cS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Jt(t,e)}}function uS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Jt(t,e)}}function hS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=t.isReversedDepthBuffer()?Bc:Uc,s=hf):s=R0,t.setTexture2D(e||s,r)}function fS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||I0,r)}function dS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||P0,r)}function pS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||C0,r)}function mS(i){switch(i){case 5126:return Z1;case 35664:return J1;case 35665:return j1;case 35666:return Q1;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return rS;case 35668:case 35672:return sS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}function gS(i,e){i.uniform1fv(this.addr,e)}function xS(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function bS(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function yS(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function _S(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function vS(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function MS(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function SS(i,e){i.uniform1iv(this.addr,e)}function wS(i,e){i.uniform2iv(this.addr,e)}function TS(i,e){i.uniform3iv(this.addr,e)}function AS(i,e){i.uniform4iv(this.addr,e)}function ES(i,e){i.uniform1uiv(this.addr,e)}function RS(i,e){i.uniform2uiv(this.addr,e)}function CS(i,e){i.uniform3uiv(this.addr,e)}function IS(i,e){i.uniform4uiv(this.addr,e)}function PS(i,e,t){let n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=hf:o=R0;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function LS(i,e,t){let n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||I0,s[o])}function FS(i,e,t){let n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||P0,s[o])}function DS(i,e,t){let n=this.cache,r=e.length,s=Hc(t,r);Zt(n,s)||(i.uniform1iv(this.addr,s),Jt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||C0,s[o])}function OS(i){switch(i){case 5126:return gS;case 35664:return xS;case 35665:return bS;case 35666:return yS;case 35674:return _S;case 35675:return vS;case 35676:return MS;case 5124:case 35670:return SS;case 35667:case 35671:return wS;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return ES;case 36294:return RS;case 36295:return CS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return PS;case 35679:case 36299:case 36307:return LS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return DS}}var ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mS(t.type)}},df=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OS(t.type)}},pf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function p0(i,e){i.seq.push(e),i.map[e.id]=e}function NS(i,e,t){let n=i.name,r=n.length;for(cf.lastIndex=0;;){let s=cf.exec(n),o=cf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){p0(t,c===void 0?new ff(a,i,e):new df(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new pf(a),p0(t,h)),t=h}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);NS(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function m0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var US=37297,BS=0;function kS(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var g0=new Ve;function zS(i){$e._getMatrix(g0,$e.workingColorSpace,i);let e=`mat3( ${g0.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Ee("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function x0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+kS(i.getShaderSource(e),a)}else return s}function VS(i,e){let t=zS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var GS={[Ch]:"Linear",[Ih]:"Reinhard",[Ph]:"Cineon",[Lh]:"ACESFilmic",[Dh]:"AgX",[Oh]:"Neutral",[Fh]:"Custom"};function HS(i,e){let t=GS[e];return t===void 0?(Ee("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zc=new O;function WS(){$e.getLuminanceCoefficients(zc);let i=zc.x.toFixed(4),e=zc.y.toFixed(4),t=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function qS(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YS(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ma(i){return i!==""}function b0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var KS=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(i){return i.replace(KS,ZS)}var $S=new Map;function ZS(i,e){let t=Ke[e];if(t===void 0){let n=$S.get(e);if(n!==void 0)t=Ke[n],Ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mf(t)}var JS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _0(i){return i.replace(JS,jS)}function jS(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function v0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var QS={[na]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function ew(i){return QS[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var tw={[fr]:"ENVMAP_TYPE_CUBE",[Xr]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function nw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var iw={[Xr]:"ENVMAP_MODE_REFRACTION"};function rw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":iw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sw={[Zl]:"ENVMAP_BLENDING_MULTIPLY",[Fm]:"ENVMAP_BLENDING_MIX",[Dm]:"ENVMAP_BLENDING_ADD"};function ow(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sw[i.combine]||"ENVMAP_BLENDING_NONE"}function aw(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function lw(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=ew(t),c=nw(t),u=rw(t),h=ow(t),f=aw(t),d=XS(t),m=qS(s),g=r.createProgram(),x,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(x=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==jn?HS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,VS("linearToOutputTexel",t.outputColorSpace),WS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),o=mf(o),o=b0(o,t),o=y0(o,t),a=mf(a),a=b0(a,t),a=y0(a,t),o=_0(o),a=_0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+x+o,b=y+p+a,v=m0(r,r.VERTEX_SHADER,_),S=m0(r,r.FRAGMENT_SHADER,b);r.attachShader(g,v),r.attachShader(g,S),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){let F=r.getProgramInfoLog(g)||"",L=r.getShaderInfoLog(v)||"",R=r.getShaderInfoLog(S)||"",D=F.trim(),N=L.trim(),B=R.trim(),X=!0,z=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,v,S);else{let H=x0(r,v,"vertex"),G=x0(r,S,"fragment");Ue("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+H+`
`+G)}else D!==""?Ee("WebGLProgram: Program Info Log:",D):(N===""||B==="")&&(z=!1);z&&(P.diagnostics={runnable:X,programLog:D,vertexShader:{log:N,prefix:x},fragmentShader:{log:B,prefix:p}})}r.deleteShader(v),r.deleteShader(S),M=new $s(r,g),T=YS(r,g)}let M;this.getUniforms=function(){return M===void 0&&A(this),M};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(g,US)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=S,this}var cw=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xf(e),t.set(e,n)),n}},xf=class{constructor(e){this.id=cw++,this.code=e,this.usedTimes=0}};function uw(i){return i===pr||i===ca||i===ua}function hw(i,e,t,n,r,s){let o=new Ds,a=new gf,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,T,C,P,F,L){let R=P.fog,D=F.geometry,N=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,X=e.get(M.envMap||N,B),z=X&&X.mapping===ra?X.image.height:null,H=d[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),f!==M.precision&&Ee("WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let G=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=G!==void 0?G.length:0,se=0;D.morphAttributes.position!==void 0&&(se=1),D.morphAttributes.normal!==void 0&&(se=2),D.morphAttributes.color!==void 0&&(se=3);let ke,Ne,qe,J;if(H){let Rt=Si[H];ke=Rt.vertexShader,Ne=Rt.fragmentShader}else{ke=M.vertexShader,Ne=M.fragmentShader;let Rt=a.getVertexShaderStage(M),dt=a.getFragmentShaderStage(M);a.update(M,Rt,dt),qe=Rt.id,J=dt.id}let ie=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,ve=F.isBatchedMesh===!0,Je=!!M.map,Kt=!!M.matcap,tt=!!X,ct=!!M.aoMap,Et=!!M.lightMap,st=!!M.bumpMap&&M.wireframe===!1,Lt=!!M.normalMap,Qt=!!M.displacementMap,xn=!!M.emissiveMap,Ft=!!M.metalnessMap,Gt=!!M.roughnessMap,V=M.anisotropy>0,nn=M.clearcoat>0,xt=M.dispersion>0,I=M.retroreflectivity>0,w=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,Q=V&&!!M.anisotropyMap,ae=nn&&!!M.clearcoatMap,le=nn&&!!M.clearcoatNormalMap,ee=nn&&!!M.clearcoatRoughnessMap,ne=w&&!!M.iridescenceMap,ce=w&&!!M.iridescenceThicknessMap,Re=W&&!!M.sheenColorMap,de=W&&!!M.sheenRoughnessMap,ue=!!M.specularMap,Ce=!!M.specularColorMap,De=!!M.specularIntensityMap,We=$&&!!M.transmissionMap,k=$&&!!M.thicknessMap,he=!!M.gradientMap,te=!!M.alphaMap,fe=M.alphaTest>0,be=!!M.alphaHash,re=!!M.extensions,Le=jn;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Te={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:ke,fragmentShader:Ne,defines:M.defines,customVertexShaderID:qe,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:ve,batchingColor:ve&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Je,matcap:Kt,envMap:tt,envMapMode:tt&&X.mapping,envMapCubeUVHeight:z,aoMap:ct,lightMap:Et,bumpMap:st,normalMap:Lt,displacementMap:Qt,emissiveMap:xn,normalMapObjectSpace:Lt&&M.normalMapType===Bm,normalMapTangentSpace:Lt&&M.normalMapType===fa,packedNormalMap:Lt&&M.normalMapType===fa&&uw(M.normalMap.format),metalnessMap:Ft,roughnessMap:Gt,anisotropy:V,anisotropyMap:Q,clearcoat:nn,clearcoatMap:ae,clearcoatNormalMap:le,clearcoatRoughnessMap:ee,dispersion:xt,retroreflection:I,iridescence:w,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:W,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:ue,specularColorMap:Ce,specularIntensityMap:De,transmission:$,transmissionMap:We,thicknessMap:k,gradientMap:he,opaque:M.transparent===!1&&M.blending===vi&&M.alphaToCoverage===!1,alphaMap:te,alphaTest:fe,alphaHash:be,combine:M.combine,mapUv:Je&&m(M.map.channel),aoMapUv:ct&&m(M.aoMap.channel),lightMapUv:Et&&m(M.lightMap.channel),bumpMapUv:st&&m(M.bumpMap.channel),normalMapUv:Lt&&m(M.normalMap.channel),displacementMapUv:Qt&&m(M.displacementMap.channel),emissiveMapUv:xn&&m(M.emissiveMap.channel),metalnessMapUv:Ft&&m(M.metalnessMap.channel),roughnessMapUv:Gt&&m(M.roughnessMap.channel),anisotropyMapUv:Q&&m(M.anisotropyMap.channel),clearcoatMapUv:ae&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(M.sheenRoughnessMap.channel),specularMapUv:ue&&m(M.specularMap.channel),specularColorMapUv:Ce&&m(M.specularColorMap.channel),specularIntensityMapUv:De&&m(M.specularIntensityMap.channel),transmissionMapUv:We&&m(M.transmissionMap.channel),thicknessMapUv:k&&m(M.thicknessMap.channel),alphaMapUv:te&&m(M.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Lt||V),vertexNormals:!!D.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Je||te),fog:!!R,useFog:M.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||D.attributes.normal===void 0&&Lt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:se,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Je&&M.map.isVideoTexture===!0&&$e.getTransfer(M.map.colorSpace)===gt,decodeVideoTextureEmissive:xn&&M.emissiveMap.isVideoTexture===!0&&$e.getTransfer(M.emissiveMap.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_t,flipSided:M.side===tn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:re&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&M.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function x(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)T.push(C),T.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(p(T,M),y(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function p(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numSunLights),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numSunLightShadows),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function _(M){let T=d[M.type],C;if(T){let P=Si[T];C=n0.clone(P.uniforms)}else C=M.uniforms;return C}function b(M,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new lw(i,T,M,r),c.push(C),u.set(T,C)),C}function v(M){if(--M.usedTimes===0){let T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function S(M){a.remove(M)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:c,dispose:A}}function fw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function dw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function M0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function S0(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,m,g,x,p){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=o(f),y.groupOrder=g,y.renderOrder=f.renderOrder,y.z=x,y.group=p),e++,y}function l(f,d,m,g,x,p,y){y.reversedDepth===!0&&(x=-x);let _=a(f,d,m,g,x,p);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):t.push(_)}function c(f,d,m,g,x,p){let y=a(f,d,m,g,x,p);m.transmission>0?n.unshift(y):m.transparent===!0?r.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||dw),n.length>1&&n.sort(d||M0),r.length>1&&r.sort(d||M0)}function h(){for(let f=e,d=i.length;f<d;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function pw(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new S0,i.set(n,[o])):r>=s.length?(o=new S0,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function mw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new K};break;case"SpotLight":t={position:new O,direction:new O,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new K,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new K,groundColor:new K};break;case"RectAreaLight":t={color:new K,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function gw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var xw=0;function bw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yw(i){let e=new mw,t=gw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let r=new O,s=new He,o=new He;function a(c){let u=0,h=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let d=0,m=0,g=0,x=0,p=0,y=0,_=0,b=0,v=0,S=0,A=0,M=0,T=0,C=0;c.sort(bw);for(let F=0,L=c.length;F<L;F++){let R=c[F],D=R.color,N=R.intensity,B=R.distance,X=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===pr?X=R.shadow.map.texture:X=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=D.r*N,h+=D.g*N,f+=D.b*N;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],N);C++}else if(R.isSunLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,G=t.get(R);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[m]=G,n.sunShadowMap[m]=X;let oe=H.getViewportCount();for(let se=0;se<oe;se++)n.sunShadowMatrix[g+se]=H.getMatrix(se),n.sunShadowCascade[g+se]=H._cascadeData[se];g+=oe,m++}n.sun[d]=z,d++}else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,G=t.get(R);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.directionalShadow[x]=G,n.directionalShadowMap[x]=X,n.directionalShadowMatrix[x]=R.shadow.matrix,v++}n.directional[x]=z,x++}else if(R.isSpotLight){let z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(D).multiplyScalar(N),z.distance=B,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[y]=z;let H=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,H.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[y]=H.matrix,R.castShadow){let G=t.get(R);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=X,A++}y++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(D).multiplyScalar(N),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[_]=z,_++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let H=R.shadow,G=t.get(R);G.shadowIntensity=H.intensity,G.shadowBias=H.bias,G.shadowNormalBias=H.normalBias,G.shadowRadius=H.radius,G.shadowMapSize=H.mapSize,G.shadowCameraNear=H.camera.near,G.shadowCameraFar=H.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=X,n.pointShadowMatrix[p]=R.shadow.matrix,S++}n.point[p]=z,p++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(N),z.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[b]=z,b++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==x||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==_||P.hemiLength!==b||P.numSunShadows!==m||P.numDirectionalShadows!==v||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==M||P.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=x,n.spot.length=y,n.rectArea.length=_,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.sunLength=d,P.directionalLength=x,P.pointLength=p,P.spotLength=y,P.rectAreaLength=_,P.hemiLength=b,P.numSunShadows=m,P.numDirectionalShadows=v,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=M,P.numLightProbes=C,n.version=xw++)}function l(c,u){let h=0,f=0,d=0,m=0,g=0,x=0,p=u.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){let b=c[y];if(b.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),h++}else if(b.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(b.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),o.identity(),s.copy(b.matrixWorld),s.premultiply(p),o.extractRotation(s),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function w0(i){let e=new yw(i),t=[],n=[],r=[];function s(f){h.camera=f,t.length=0,n.length=0,r.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function _w(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new w0(i),e.set(r,[a])):s>=o.length?(a=new w0(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mw=`uniform sampler2D shadow_pass;
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
}`,Sw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ww=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],T0=new He,pa=new O,uf=new O;function Tw(i,e,t){let n=new Bs,r=new Fe,s=new Fe,o=new yt,a=new Bl,l=new kl,c={},u=t.maxTextureSize,h={[yi]:tn,[tn]:yi,[_t]:_t},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:vw,fragmentShader:Mw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Be;m.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ie(m,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let p=this.type;this.render=function(S,A,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;this.type===pm&&(Ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=na);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(_i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let L=p!==this.type;L&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(D=>D.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,D=S.length;R<D;R++){let N=S[R],B=N.shadow;if(B===void 0){Ee("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);let X=B.getFrameExtents();r.multiply(X),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,B.mapSize.y=s.y));let z=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||L===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Gs){if(N.isPointLight){Ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new an(r.x,r.y,{format:pr,type:ti,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new cr(r.x,r.y,Fn),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=di,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut}else N.isPointLight?(B.map=new Vc(r.x),B.map.depthTexture=new Nl(r.x,ei)):(B.map=new an(r.x,r.y),B.map.depthTexture=new cr(r.x,r.y,ei)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=di,this.type===na?(B.map.depthTexture.compareFunction=z?Bc:Uc,B.map.depthTexture.minFilter=Bt,B.map.depthTexture.magFilter=Bt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ut,B.map.depthTexture.magFilter=Ut);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==r.x||B.map.height!==r.y)&&B.map.setSize(r.x,r.y);let H=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();N.isPointLight!==!0&&B.updateMatrices(N,M);for(let G=0;G<H;G++){let oe=B.getCamera(G);if(N.isPointLight){let se=B.camera,ke=B.matrix,Ne=N.distance||se.far;Ne!==se.far&&(se.far=Ne,se.updateProjectionMatrix()),pa.setFromMatrixPosition(N.matrixWorld),se.position.copy(pa),uf.copy(se.position),uf.add(Sw[G]),se.up.copy(ww[G]),se.lookAt(uf),se.updateMatrixWorld(),ke.makeTranslation(-pa.x,-pa.y,-pa.z),T0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),B._frustum.setFromProjectionMatrix(T0,se.coordinateSystem,se.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,G),i.clear();else{G===0&&(i.setRenderTarget(B.map),i.clear());let se=B.getViewport(G);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),F.viewport(o)}n=B.getFrustum(G),b(A,M,oe,N,this.type)}B.isPointLightShadow!==!0&&this.type===Gs&&y(B,M),B.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(T,C,P)};function y(S,A){let M=e.update(g);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new an(r.x,r.y,{format:pr,type:ti}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,M,f,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,M,d,g,null)}function _(S,A,M,T){let C=null,P=M.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)C=P;else if(C=M.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let F=C.uuid,L=A.uuid,R=c[F];R===void 0&&(R={},c[F]=R);let D=R[L];D===void 0&&(D=C.clone(),R[L]=D,A.addEventListener("dispose",v)),C=D}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Gs?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:h[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=M}return C}function b(S,A,M,T,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Gs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,S.matrixWorld);let L=e.update(S),R=S.material;if(Array.isArray(R)){let D=L.groups;for(let N=0,B=D.length;N<B;N++){let X=D[N],z=R[X.materialIndex];if(z&&z.visible){let H=_(S,z,T,C);S.onBeforeShadow(i,S,A,M,L,H,X),i.renderBufferDirect(M,null,L,H,S,X),S.onAfterShadow(i,S,A,M,L,H,X)}}}else if(R.visible){let D=_(S,R,T,C);S.onBeforeShadow(i,S,A,M,L,D,null),i.renderBufferDirect(M,null,L,D,S,null),S.onAfterShadow(i,S,A,M,L,D,null)}}let F=S.children;for(let L=0,R=F.length;L<R;L++)b(F[L],A,M,T,C)}function v(S){S.target.removeEventListener("dispose",v);for(let M in c){let T=c[M],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Aw(i,e){function t(){let k=!1,he=new yt,te=null,fe=new yt(0,0,0,0);return{setMask:function(be){te!==be&&!k&&(i.colorMask(be,be,be,be),te=be)},setLocked:function(be){k=be},setClear:function(be,re,Le,Te,Rt){Rt===!0&&(be*=Te,re*=Te,Le*=Te),he.set(be,re,Le,Te),fe.equals(he)===!1&&(i.clearColor(be,re,Le,Te),fe.copy(he))},reset:function(){k=!1,te=null,fe.set(-1,0,0,0)}}}function n(){let k=!1,he=!1,te=null,fe=null,be=null;return{setReversed:function(re){if(he!==re){let Le=e.get("EXT_clip_control");re?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),he=re;let Te=be;be=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(re){re?ie(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(re){te!==re&&!k&&(i.depthMask(re),te=re)},setFunc:function(re){if(he&&(re=$m[re]),fe!==re){switch(re){case wl:i.depthFunc(i.NEVER);break;case Tl:i.depthFunc(i.ALWAYS);break;case Al:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Il:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=re}},setLocked:function(re){k=re},setClear:function(re){be!==re&&(be=re,he&&(re=1-re),i.clearDepth(re))},reset:function(){k=!1,te=null,fe=null,be=null,he=!1}}}function r(){let k=!1,he=null,te=null,fe=null,be=null,re=null,Le=null,Te=null,Rt=null;return{setTest:function(dt){k||(dt?ie(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(dt){he!==dt&&!k&&(i.stencilMask(dt),he=dt)},setFunc:function(dt,Hn,ci){(te!==dt||fe!==Hn||be!==ci)&&(i.stencilFunc(dt,Hn,ci),te=dt,fe=Hn,be=ci)},setOp:function(dt,Hn,ci){(re!==dt||Le!==Hn||Te!==ci)&&(i.stencilOp(dt,Hn,ci),re=dt,Le=Hn,Te=ci)},setLocked:function(dt){k=dt},setClear:function(dt){Rt!==dt&&(i.clearStencil(dt),Rt=dt)},reset:function(){k=!1,he=null,te=null,fe=null,be=null,re=null,Le=null,Te=null,Rt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,y=null,_=null,b=null,v=null,S=null,A=null,M=new K(0,0,0),T=0,C=!1,P=null,F=null,L=null,R=null,D=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=X>=2);let H=null,G={},oe=i.getParameter(i.SCISSOR_BOX),se=i.getParameter(i.VIEWPORT),ke=new yt().fromArray(oe),Ne=new yt().fromArray(se);function qe(k,he,te,fe){let be=new Uint8Array(4),re=i.createTexture();i.bindTexture(k,re),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<te;Le++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(he+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return re}let J={};J[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(Rs),st(!1),Lt(Th),ie(i.CULL_FACE),ct(_i);function ie(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ye(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ge(k,he){return f[k]!==he?(i.bindFramebuffer(k,he),f[k]=he,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(k,he){let te=m,fe=!1;if(k){te=d.get(he),te===void 0&&(te=[],d.set(he,te));let be=k.textures;if(te.length!==be.length||te[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Le=be.length;re<Le;re++)te[re]=i.COLOR_ATTACHMENT0+re;te.length=be.length,fe=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,fe=!0);fe&&i.drawBuffers(te)}function Je(k){return g!==k?(i.useProgram(k),g=k,!0):!1}let Kt={[Wr]:i.FUNC_ADD,[gm]:i.FUNC_SUBTRACT,[xm]:i.FUNC_REVERSE_SUBTRACT};Kt[bm]=i.MIN,Kt[ym]=i.MAX;let tt={[_m]:i.ZERO,[vm]:i.ONE,[Mm]:i.SRC_COLOR,[Eh]:i.SRC_ALPHA,[Rm]:i.SRC_ALPHA_SATURATE,[Am]:i.DST_COLOR,[wm]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[Rh]:i.ONE_MINUS_SRC_ALPHA,[Em]:i.ONE_MINUS_DST_COLOR,[Tm]:i.ONE_MINUS_DST_ALPHA,[Cm]:i.CONSTANT_COLOR,[Im]:i.ONE_MINUS_CONSTANT_COLOR,[Pm]:i.CONSTANT_ALPHA,[Lm]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(k,he,te,fe,be,re,Le,Te,Rt,dt){if(k===_i){x===!0&&(ye(i.BLEND),x=!1);return}if(x===!1&&(ie(i.BLEND),x=!0),k!==mm){if(k!==p||dt!==C){if((y!==Wr||v!==Wr)&&(i.blendEquation(i.FUNC_ADD),y=Wr,v=Wr),dt)switch(k){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case St:i.blendFunc(i.ONE,i.ONE);break;case Ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",k);break}else switch(k){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case St:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ah:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ia:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",k);break}_=null,b=null,S=null,A=null,M.set(0,0,0),T=0,p=k,C=dt}return}be=be||he,re=re||te,Le=Le||fe,(he!==y||be!==v)&&(i.blendEquationSeparate(Kt[he],Kt[be]),y=he,v=be),(te!==_||fe!==b||re!==S||Le!==A)&&(i.blendFuncSeparate(tt[te],tt[fe],tt[re],tt[Le]),_=te,b=fe,S=re,A=Le),(Te.equals(M)===!1||Rt!==T)&&(i.blendColor(Te.r,Te.g,Te.b,Rt),M.copy(Te),T=Rt),p=k,C=!1}function Et(k,he){k.side===_t?ye(i.CULL_FACE):ie(i.CULL_FACE);let te=k.side===tn;he&&(te=!te),st(te),k.blending===vi&&k.transparent===!1?ct(_i):ct(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let fe=k.stencilWrite;a.setTest(fe),fe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),xn(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function Lt(k){k!==fm?(ie(i.CULL_FACE),k!==F&&(k===Th?i.cullFace(i.BACK):k===dm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),F=k}function Qt(k){k!==L&&(B&&i.lineWidth(k),L=k)}function xn(k,he,te){k?(ie(i.POLYGON_OFFSET_FILL),(R!==he||D!==te)&&(R=he,D=te,o.getReversed()&&(he=-he),i.polygonOffset(he,te))):ye(i.POLYGON_OFFSET_FILL)}function Ft(k){k?ie(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Gt(k){k===void 0&&(k=i.TEXTURE0+N-1),H!==k&&(i.activeTexture(k),H=k)}function V(k,he,te){te===void 0&&(H===null?te=i.TEXTURE0+N-1:te=H);let fe=G[te];fe===void 0&&(fe={type:void 0,texture:void 0},G[te]=fe),(fe.type!==k||fe.texture!==he)&&(H!==te&&(i.activeTexture(te),H=te),i.bindTexture(k,he||J[k]),fe.type=k,fe.texture=he)}function nn(){let k=G[H];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function xt(){try{i.compressedTexImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function w(){try{i.texSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function W(){try{i.texSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ae(){try{i.texStorage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function le(){try{i.texStorage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ee(){try{i.texImage2D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ne(){try{i.texImage3D(...arguments)}catch(k){Ue("WebGLState:",k)}}function ce(k){return h[k]!==void 0?h[k]:i.getParameter(k)}function Re(k,he){h[k]!==he&&(i.pixelStorei(k,he),h[k]=he)}function de(k){ke.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),ke.copy(k))}function ue(k){Ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function Ce(k,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let fe=te.get(k);fe===void 0&&(fe=i.getUniformBlockIndex(he,k.name),te.set(k,fe))}function De(k,he){let fe=c.get(he).get(k);l.get(he)!==fe&&(i.uniformBlockBinding(he,fe,k.__bindingPointIndex),l.set(he,fe))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},H=null,G={},f={},d=new WeakMap,m=[],g=null,x=!1,p=null,y=null,_=null,b=null,v=null,S=null,A=null,M=new K(0,0,0),T=0,C=!1,P=null,F=null,L=null,R=null,D=null,ke.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:ye,bindFramebuffer:Ge,drawBuffers:ve,useProgram:Je,setBlending:ct,setMaterial:Et,setFlipSided:st,setCullFace:Lt,setLineWidth:Qt,setPolygonOffset:xn,setScissorTest:Ft,activeTexture:Gt,bindTexture:V,unbindTexture:nn,compressedTexImage2D:xt,compressedTexImage3D:I,texImage2D:ee,texImage3D:ne,pixelStorei:Re,getParameter:ce,updateUBOMapping:Ce,uniformBlockBinding:De,texStorage2D:ae,texStorage3D:le,texSubImage2D:w,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:de,viewport:ue,reset:We}}function Ew(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,h=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return m?new OffscreenCanvas(I,w):Ps("canvas")}function x(I,w,W){let $=1,Q=xt(I);if((Q.width>W||Q.height>W)&&($=W/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ae=Math.floor($*Q.width),le=Math.floor($*Q.height);f===void 0&&(f=g(ae,le));let ee=w?g(ae,le):f;return ee.width=ae,ee.height=le,ee.getContext("2d").drawImage(I,0,0,ae,le),Ee("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+le+")."),ee}else return"data"in I&&Ee("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function p(I){return I.generateMipmaps}function y(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(I,w,W,$,Q,ae=!1){if(I!==null){if(i[I]!==void 0)return i[I];Ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let le;$&&(le=e.get("EXT_texture_norm16"),le||Ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===i.RED&&(W===i.FLOAT&&(ee=i.R32F),W===i.HALF_FLOAT&&(ee=i.R16F),W===i.UNSIGNED_BYTE&&(ee=i.R8),W===i.UNSIGNED_SHORT&&le&&(ee=le.R16_EXT),W===i.SHORT&&le&&(ee=le.R16_SNORM_EXT)),w===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.R8UI),W===i.UNSIGNED_SHORT&&(ee=i.R16UI),W===i.UNSIGNED_INT&&(ee=i.R32UI),W===i.BYTE&&(ee=i.R8I),W===i.SHORT&&(ee=i.R16I),W===i.INT&&(ee=i.R32I)),w===i.RG&&(W===i.FLOAT&&(ee=i.RG32F),W===i.HALF_FLOAT&&(ee=i.RG16F),W===i.UNSIGNED_BYTE&&(ee=i.RG8),W===i.UNSIGNED_SHORT&&le&&(ee=le.RG16_EXT),W===i.SHORT&&le&&(ee=le.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RG8UI),W===i.UNSIGNED_SHORT&&(ee=i.RG16UI),W===i.UNSIGNED_INT&&(ee=i.RG32UI),W===i.BYTE&&(ee=i.RG8I),W===i.SHORT&&(ee=i.RG16I),W===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),W===i.UNSIGNED_INT&&(ee=i.RGB32UI),W===i.BYTE&&(ee=i.RGB8I),W===i.SHORT&&(ee=i.RGB16I),W===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),W===i.UNSIGNED_INT&&(ee=i.RGBA32UI),W===i.BYTE&&(ee=i.RGBA8I),W===i.SHORT&&(ee=i.RGBA16I),W===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&(W===i.UNSIGNED_SHORT&&le&&(ee=le.RGB16_EXT),W===i.SHORT&&le&&(ee=le.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),w===i.RGBA){let ne=ae?Fo:$e.getTransfer(Q);W===i.FLOAT&&(ee=i.RGBA32F),W===i.HALF_FLOAT&&(ee=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ee=ne===gt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&le&&(ee=le.RGBA16_EXT),W===i.SHORT&&le&&(ee=le.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function v(I,w){let W;return I?w===null||w===ei||w===Xs?W=i.DEPTH24_STENCIL8:w===Fn?W=i.DEPTH32F_STENCIL8:w===Ws&&(W=i.DEPTH24_STENCIL8,Ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ei||w===Xs?W=i.DEPTH_COMPONENT24:w===Fn?W=i.DEPTH_COMPONENT32F:w===Ws&&(W=i.DEPTH_COMPONENT16),W}function S(I,w){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ut&&I.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function A(I){let w=I.target;w.removeEventListener("dispose",A),T(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&h.delete(w)}function M(I){let w=I.target;w.removeEventListener("dispose",M),P(w)}function T(I){let w=n.get(I);if(w.__webglInit===void 0)return;let W=I.source,$=d.get(W);if($){let Q=$[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(I),Object.keys($).length===0&&d.delete(W)}n.remove(I)}function C(I){let w=n.get(I);i.deleteTexture(w.__webglTexture);let W=I.source,$=d.get(W);delete $[w.__cacheKey],o.memory.textures--}function P(I){let w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let Q=0;Q<w.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(w.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)i.deleteFramebuffer(w.__webglFramebuffer[$]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let W=I.textures;for(let $=0,Q=W.length;$<Q;$++){let ae=n.get(W[$]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(W[$])}n.remove(I)}let F=0;function L(){F=0}function R(){return F}function D(I){F=I}function N(){let I=F;return I>=r.maxTextures&&Ee("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,I}function B(I){let w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function X(I,w){let W=n.get(I);if(I.isVideoTexture&&V(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let $=I.image;if($===null)Ee("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ee("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(W,I,w);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+w)}function z(I,w){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ye(W,I,w);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+w)}function H(I,w){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ye(W,I,w);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+w)}function G(I,w){let W=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){Ge(W,I,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+w)}let oe={[Jn]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[Cs]:i.MIRRORED_REPEAT},se={[Ut]:i.NEAREST,[Ql]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[Hs]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},ke={[zm]:i.NEVER,[Xm]:i.ALWAYS,[Vm]:i.LESS,[Uc]:i.LEQUAL,[Gm]:i.EQUAL,[Bc]:i.GEQUAL,[Hm]:i.GREATER,[Wm]:i.NOTEQUAL};function Ne(I,w){if(w.type===Fn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bt||w.magFilter===Hs||w.magFilter===qr||w.magFilter===Qn||w.minFilter===Bt||w.minFilter===Hs||w.minFilter===qr||w.minFilter===Qn)&&Ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,oe[w.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,oe[w.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,oe[w.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,se[w.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,ke[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ut||w.minFilter!==qr&&w.minFilter!==Qn||w.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function qe(I,w){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",A));let $=w.source,Q=d.get($);Q===void 0&&(Q={},d.set($,Q));let ae=B(w);if(ae!==I.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),Q[ae].usedTimes++;let le=Q[I.__cacheKey];le!==void 0&&(Q[I.__cacheKey].usedTimes--,le.usedTimes===0&&C(w)),I.__cacheKey=ae,I.__webglTexture=Q[ae].texture}return W}function J(I,w,W){return Math.floor(Math.floor(I/W)/w)}function ie(I,w,W,$){let ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,W,$,w.data);else{ae.sort((Re,de)=>Re.start-de.start);let le=0;for(let Re=1;Re<ae.length;Re++){let de=ae[le],ue=ae[Re],Ce=de.start+de.count,De=J(ue.start,w.width,4),We=J(de.start,w.width,4);ue.start<=Ce+1&&De===We&&J(ue.start+ue.count-1,w.width,4)===De?de.count=Math.max(de.count,ue.start+ue.count-de.start):(++le,ae[le]=ue)}ae.length=le+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Re=0,de=ae.length;Re<de;Re++){let ue=ae[Re],Ce=Math.floor(ue.start/4),De=Math.ceil(ue.count/4),We=Ce%w.width,k=Math.floor(Ce/w.width),he=De,te=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,We),t.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,We,k,he,te,W,$,w.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,ce)}}function ye(I,w,W){let $=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=i.TEXTURE_3D);let Q=qe(I,w),ae=w.source;t.bindTexture($,I.__webglTexture,i.TEXTURE0+W);let le=n.get(ae);if(ae.version!==le.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let te=$e.getPrimaries($e.workingColorSpace),fe=w.colorSpace===Wi?null:$e.getPrimaries(w.colorSpace),be=w.colorSpace===Wi||te===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ne=x(w.image,!1,r.maxTextureSize);ne=nn(w,ne);let ce=s.convert(w.format,w.colorSpace),Re=s.convert(w.type),de=b(w.internalFormat,ce,Re,w.normalized,w.colorSpace,w.isVideoTexture);Ne($,w);let ue,Ce=w.mipmaps,De=w.isVideoTexture!==!0,We=le.__version===void 0||Q===!0,k=ae.dataReady,he=S(w,ne);if(w.isDepthTexture)de=v(w.format===dr,w.type),We&&(De?t.texStorage2D(i.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,ce,Re,null));else if(w.isDataTexture)if(Ce.length>0){De&&We&&t.texStorage2D(i.TEXTURE_2D,he,de,Ce[0].width,Ce[0].height);for(let te=0,fe=Ce.length;te<fe;te++)ue=Ce[te],De?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,Re,ue.data):t.texImage2D(i.TEXTURE_2D,te,de,ue.width,ue.height,0,ce,Re,ue.data);w.generateMipmaps=!1}else De?(We&&t.texStorage2D(i.TEXTURE_2D,he,de,ne.width,ne.height),k&&ie(w,ne,ce,Re)):t.texImage2D(i.TEXTURE_2D,0,de,ne.width,ne.height,0,ce,Re,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){De&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,Ce[0].width,Ce[0].height,ne.depth);for(let te=0,fe=Ce.length;te<fe;te++)if(ue=Ce[te],w.format!==Dn)if(ce!==null)if(De){if(k)if(w.layerUpdates.size>0){let be=jh(ue.width,ue.height,w.format,w.type);for(let re of w.layerUpdates){let Le=ue.data.subarray(re*be/ue.data.BYTES_PER_ELEMENT,(re+1)*be/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,re,ue.width,ue.height,1,ce,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,ce,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,ue.data,0,0);else Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,ce,Re,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,ce,Re,ue.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{De&&We&&t.texStorage2D(i.TEXTURE_2D,he,de,Ce[0].width,Ce[0].height);for(let te=0,fe=Ce.length;te<fe;te++)ue=Ce[te],w.format!==Dn?ce!==null?De?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,de,ue.width,ue.height,0,ue.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,ce,Re,ue.data):t.texImage2D(i.TEXTURE_2D,te,de,ue.width,ue.height,0,ce,Re,ue.data)}else if(w.isDataArrayTexture)if(De){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,de,ne.width,ne.height,ne.depth),k)if(w.layerUpdates.size>0){let te=jh(ne.width,ne.height,w.format,w.type);for(let fe of w.layerUpdates){let be=ne.data.subarray(fe*te/ne.data.BYTES_PER_ELEMENT,(fe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,ne.width,ne.height,1,ce,Re,be)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ce,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,ce,Re,ne.data);else if(w.isData3DTexture)De?(We&&t.texStorage3D(i.TEXTURE_3D,he,de,ne.width,ne.height,ne.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ce,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,ce,Re,ne.data);else if(w.isFramebufferTexture){if(We)if(De)t.texStorage2D(i.TEXTURE_2D,he,de,ne.width,ne.height);else{let te=ne.width,fe=ne.height;for(let be=0;be<he;be++)t.texImage2D(i.TEXTURE_2D,be,de,te,fe,0,ce,Re,null),te>>=1,fe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let te=i.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),h.add(w),te.onpaint=fe=>{let be=fe.changedElements;for(let re of h)be.includes(re.image)&&(re.needsUpdate=!0)},te.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let be=i.RGBA,re=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,re,Le,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(De&&We){let te=xt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,he,de,te.width,te.height)}for(let te=0,fe=Ce.length;te<fe;te++)ue=Ce[te],De?k&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ce,Re,ue):t.texImage2D(i.TEXTURE_2D,te,de,ce,Re,ue);w.generateMipmaps=!1}else if(De){if(We){let te=xt(ne);t.texStorage2D(i.TEXTURE_2D,he,de,te.width,te.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,de,ce,Re,ne);p(w)&&y($),le.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Ge(I,w,W){if(w.image.length!==6)return;let $=qe(I,w),Q=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let ae=n.get(Q);if(Q.version!==ae.__version||$===!0){t.activeTexture(i.TEXTURE0+W);let le=$e.getPrimaries($e.workingColorSpace),ee=w.colorSpace===Wi?null:$e.getPrimaries(w.colorSpace),ne=w.colorSpace===Wi||le===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ce=w.isCompressedTexture||w.image[0].isCompressedTexture,Re=w.image[0]&&w.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!ce&&!Re?de[re]=x(w.image[re],!0,r.maxCubemapSize):de[re]=Re?w.image[re].image:w.image[re],de[re]=nn(w,de[re]);let ue=de[0],Ce=s.convert(w.format,w.colorSpace),De=s.convert(w.type),We=b(w.internalFormat,Ce,De,w.normalized,w.colorSpace),k=w.isVideoTexture!==!0,he=ae.__version===void 0||$===!0,te=Q.dataReady,fe=S(w,ue);Ne(i.TEXTURE_CUBE_MAP,w);let be;if(ce){k&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,We,ue.width,ue.height);for(let re=0;re<6;re++){be=de[re].mipmaps;for(let Le=0;Le<be.length;Le++){let Te=be[Le];w.format!==Dn?Ce!==null?k?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,We,Te.width,Te.height,0,Te.data):Ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,0,0,Te.width,Te.height,Ce,De,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le,We,Te.width,Te.height,0,Ce,De,Te.data)}}}else{if(be=w.mipmaps,k&&he){be.length>0&&fe++;let re=xt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,We,re.width,re.height)}for(let re=0;re<6;re++)if(Re){k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,Ce,De,de[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,de[re].width,de[re].height,0,Ce,De,de[re].data);for(let Le=0;Le<be.length;Le++){let Rt=be[Le].image[re].image;k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,Rt.width,Rt.height,Ce,De,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,We,Rt.width,Rt.height,0,Ce,De,Rt.data)}}else{k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,De,de[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Ce,De,de[re]);for(let Le=0;Le<be.length;Le++){let Te=be[Le];k?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,0,0,Ce,De,Te.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Le+1,We,Ce,De,Te.image[re])}}}p(w)&&y(i.TEXTURE_CUBE_MAP),ae.__version=Q.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ve(I,w,W,$,Q,ae){let le=s.convert(W.format,W.colorSpace),ee=s.convert(W.type),ne=b(W.internalFormat,le,ee,W.normalized,W.colorSpace),ce=n.get(w),Re=n.get(W);if(Re.__renderTarget=w,!ce.__hasExternalTextures){let de=Math.max(1,w.width>>ae),ue=Math.max(1,w.height>>ae);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,ae,ne,de,ue,w.depth,0,le,ee,null):t.texImage2D(Q,ae,ne,de,ue,0,le,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,Re.__webglTexture,0,Ft(w)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,Re.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(I,w,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),w.depthBuffer){let $=w.depthTexture,Q=$&&$.isDepthTexture?$.type:null,ae=v(w.stencilBuffer,Q),le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(w),ae,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(w),ae,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,I)}else{let $=w.textures;for(let Q=0;Q<$.length;Q++){let ae=$[Q],le=s.convert(ae.format,ae.colorSpace),ee=s.convert(ae.type),ne=b(ae.internalFormat,le,ee,ae.normalized,ae.colorSpace);Gt(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(w),ne,w.width,w.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(w),ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(I,w,W){let $=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,w.depthTexture);let ce=s.convert(w.depthTexture.format),Re=s.convert(w.depthTexture.type),de;w.depthTexture.format===di?de=i.DEPTH_COMPONENT24:w.depthTexture.format===dr&&(de=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,de,w.width,w.height,0,ce,Re,null)}}else X(w.depthTexture,0);let ae=Q.__webglTexture,le=Ft(w),ee=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ne=w.depthTexture.format===dr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===di)Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ae,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ae,0);else if(w.depthTexture.format===dr)Gt(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ee,ae,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,ne,ee,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(I){let w=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let $=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=$}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)Kt(w.__webglFramebuffer[$],I,$);else{let $=I.texture.mipmaps;$&&$.length>0?Kt(w.__webglFramebuffer[0],I,0):Kt(w.__webglFramebuffer,I,0)}else if(W){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=i.createRenderbuffer(),Je(w.__webglDepthbuffer[$],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}}else{let $=I.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Je(w.__webglDepthbuffer,I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(I,w,W){let $=n.get(I);w!==void 0&&ve($.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&tt(I)}function Et(I){let w=I.texture,W=n.get(I),$=n.get(w);I.addEventListener("dispose",M);let Q=I.textures,ae=I.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=w.version,o.memory.textures++),ae){W.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[ee]=[];for(let ne=0;ne<w.mipmaps.length;ne++)W.__webglFramebuffer[ee][ne]=i.createFramebuffer()}else W.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)W.__webglFramebuffer[ee]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(le)for(let ee=0,ne=Q.length;ee<ne;ee++){let ce=n.get(Q[ee]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Gt(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){let ne=Q[ee];W.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ee]);let ce=s.convert(ne.format,ne.colorSpace),Re=s.convert(ne.type),de=b(ne.internalFormat,ce,Re,ne.normalized,ne.colorSpace,I.isXRRenderTarget===!0),ue=Ft(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,de,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,W.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)ve(W.__webglFramebuffer[ee][ne],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ne);else ve(W.__webglFramebuffer[ee],I,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);p(w)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let ee=0,ne=Q.length;ee<ne;ee++){let ce=Q[ee],Re=n.get(ce),de=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,Re.__webglTexture),Ne(de,ce),ve(W.__webglFramebuffer,I,ce,i.COLOR_ATTACHMENT0+ee,de,0),p(ce)&&y(de)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ee=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,$.__webglTexture),Ne(ee,w),w.mipmaps&&w.mipmaps.length>0)for(let ne=0;ne<w.mipmaps.length;ne++)ve(W.__webglFramebuffer[ne],I,w,i.COLOR_ATTACHMENT0,ee,ne);else ve(W.__webglFramebuffer,I,w,i.COLOR_ATTACHMENT0,ee,0);p(w)&&y(ee),t.unbindTexture()}I.depthBuffer&&tt(I)}function st(I){let w=I.textures;for(let W=0,$=w.length;W<$;W++){let Q=w[W];if(p(Q)){let ae=_(I),le=n.get(Q).__webglTexture;t.bindTexture(ae,le),y(ae),t.unbindTexture()}}}let Lt=[],Qt=[];function xn(I){if(I.samples>0){if(Gt(I)===!1){let w=I.textures,W=I.width,$=I.height,Q=i.COLOR_BUFFER_BIT,ae=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(I),ee=w.length>1;if(ee)for(let ce=0;ce<w.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let ne=I.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<w.length;ce++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Re=n.get(w[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Re,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,Q,i.NEAREST),l===!0&&(Lt.length=0,Qt.length=0,Lt.push(i.COLOR_ATTACHMENT0+ce),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Lt.push(ae),Qt.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let ce=0;ce<w.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Re=n.get(w[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,Re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let w=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ft(I){return Math.min(r.maxSamples,I.samples)}function Gt(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function V(I){let w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function nn(I,w){let W=I.colorSpace,$=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==pn&&W!==Wi&&($e.getTransfer(W)===gt?($!==Dn||Q!==Sn)&&Ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",W)),w}function xt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.getTextureUnits=R,this.setTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=G,this.rebindTextures=ct,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=xn,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Rw(i,e){function t(n,r=Wi){let s,o=$e.getTransfer(r);if(n===Sn)return i.UNSIGNED_BYTE;if(n===tc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===ec)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Dn)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===ic)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===pr)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===sa||n===oa||n===aa||n===la)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===oa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===la)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ac||n===lc||n===cc||n===uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===fc||n===dc||n===pc||n===mc||n===ca||n===gc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hc||n===fc)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===pc)return s.COMPRESSED_R11_EAC;if(n===mc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ca)return s.COMPRESSED_RG11_EAC;if(n===gc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===bc||n===yc||n===_c||n===vc||n===Mc||n===Sc||n===wc||n===Tc||n===Ac||n===Ec||n===Rc||n===Cc||n===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Mc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ec)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cc)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pc||n===Lc||n===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Pc)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Oc||n===ua||n===Nc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Iw=`
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

}`,bf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ln({vertexShader:Cw,fragmentShader:Iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends pi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,g=typeof XRWebGLBinding<"u",x=new bf,p={},y=t.getContextAttributes(),_=null,b=null,v=[],S=[],A=new Fe,M=null,T=null,C=new Xt;C.viewport=new yt;let P=new Xt;P.viewport=new yt;let F=[C,P],L=new Kl,R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ie=v[J];return ie===void 0&&(ie=new Os,v[J]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(J){let ie=v[J];return ie===void 0&&(ie=new Os,v[J]=ie),ie.getGripSpace()},this.getHand=function(J){let ie=v[J];return ie===void 0&&(ie=new Os,v[J]=ie),ie.getHandSpace()};function N(J){let ie=S.indexOf(J.inputSource);if(ie===-1)return;let ye=v[ie];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||o),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function B(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",X);for(let J=0;J<v.length;J++){let ie=S[J];ie!==null&&(S[J]=null,v[J].disconnect(ie))}R=null,D=null,x.reset();for(let J in p)delete p[J];if(e.setRenderTarget(_),d=null,f=null,h=null,r=null,b=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",B),r.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ge=null,ve=null;y.depth&&(ve=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?dr:di,Ge=y.stencil?Xs:ei);let Je={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Je),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new an(f.textureWidth,f.textureHeight,{format:Dn,type:Sn,depthTexture:new cr(f.textureWidth,f.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new an(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(J){for(let ie=0;ie<J.removed.length;ie++){let ye=J.removed[ie],Ge=S.indexOf(ye);Ge>=0&&(S[Ge]=null,v[Ge].disconnect(ye))}for(let ie=0;ie<J.added.length;ie++){let ye=J.added[ie],Ge=S.indexOf(ye);if(Ge===-1){for(let Je=0;Je<v.length;Je++)if(Je>=S.length){S.push(ye),Ge=Je;break}else if(S[Je]===null){S[Je]=ye,Ge=Je;break}if(Ge===-1)break}let ve=v[Ge];ve&&ve.connect(ye)}}let z=new O,H=new O;function G(J,ie,ye){z.setFromMatrixPosition(ie.matrixWorld),H.setFromMatrixPosition(ye.matrixWorld);let Ge=z.distanceTo(H),ve=ie.projectionMatrix.elements,Je=ye.projectionMatrix.elements,Kt=ve[14]/(ve[10]-1),tt=ve[14]/(ve[10]+1),ct=(ve[9]+1)/ve[5],Et=(ve[9]-1)/ve[5],st=(ve[8]-1)/ve[0],Lt=(Je[8]+1)/Je[0],Qt=Kt*st,xn=Kt*Lt,Ft=Ge/(-st+Lt),Gt=Ft*-st;if(ie.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Gt),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let V=Kt+Ft,nn=tt+Ft,xt=Qt-Gt,I=xn+(Ge-Gt),w=ct*tt/nn*V,W=Et*tt/nn*V;J.projectionMatrix.makePerspective(xt,I,w,W,V,nn),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function oe(J,ie){ie===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ie.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ie=J.near,ye=J.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),L.near=P.near=C.near=ie,L.far=P.far=C.far=ye,(R!==L.near||D!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),R=L.near,D=L.far),L.layers.mask=J.layers.mask|6,C.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let Ge=J.parent,ve=L.cameras;oe(L,Ge);for(let Je=0;Je<ve.length;Je++)oe(ve[Je],Ge);ve.length===2?G(L,C,P):L.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),se(J,L,Ge)};function se(J,ie,ye){ye===null?J.matrix.copy(ie.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(ie.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ie.projectionMatrix),J.projectionMatrixInverse.copy(ie.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Fr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(L)},this.getCameraTexture=function(J){return p[J]};let ke=null;function Ne(J,ie){if(u=ie.getViewerPose(c||o),m=ie,u!==null){let ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Ge=!1;ye.length!==L.cameras.length&&(L.cameras.length=0,Ge=!0);for(let tt=0;tt<ye.length;tt++){let ct=ye[tt],Et=null;if(d!==null)Et=d.getViewport(ct);else{let Lt=h.getViewSubImage(f,ct);Et=Lt.viewport,tt===0&&(e.setRenderTargetTextures(b,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(b))}let st=F[tt];st===void 0&&(st=new Xt,st.layers.enable(tt),st.viewport=new yt,F[tt]=st),st.matrix.fromArray(ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Et.x,Et.y,Et.width,Et.height),tt===0&&(L.matrix.copy(st.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ge===!0&&L.cameras.push(st)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let tt=h.getDepthInformation(ye[0]);tt&&tt.isValid&&tt.texture&&x.init(tt,r.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let tt=0;tt<ye.length;tt++){let ct=ye[tt].camera;if(ct){let Et=p[ct];Et||(Et=new Vo,p[ct]=Et);let st=h.getCameraImage(ct);Et.sourceTexture=st}}}}for(let ye=0;ye<v.length;ye++){let Ge=S[ye],ve=v[ye];Ge!==null&&ve!==void 0&&ve.update(Ge,ie,c||o)}ke&&ke(J,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}let qe=new A0;qe.setAnimationLoop(Ne),this.setAnimationLoop=function(J){ke=J},this.dispose=function(){}}},Pw=new He,L0=new Ve;L0.set(-1,0,0,0,1,0,0,0,1);function Lw(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,$h(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function r(x,p,y,_,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(x,p):p.isMeshLambertMaterial?(s(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(x,p),h(x,p)):p.isMeshPhongMaterial?(s(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(x,p),f(x,p),p.isMeshPhysicalMaterial&&d(x,p,b)):p.isMeshMatcapMaterial?(s(x,p),m(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),g(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,y,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===tn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===tn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let y=e.get(p),_=y.envMap,b=y.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(Pw.makeRotationFromEuler(b)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(L0),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function h(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){let y=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Fw(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let S=v.program;n.uniformBlockBinding(b,S)}function c(b,v){let S=r[b.id];S===void 0&&(x(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",y));let A=v.program;n.updateUBOMapping(b,A);let M=e.render.frame;s[b.id]!==M&&(f(b),s[b.id]=M)}function u(b){let v=h();b.__bindingPointIndex=v;let S=i.createBuffer(),A=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let v=r[b.id],S=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let M=0,T=S.length;M<T;M++){let C=S[M];if(Array.isArray(C))for(let P=0,F=C.length;P<F;P++)d(C[P],M,P,A);else d(C,M,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,v,S,A){if(g(b,v,S,A)===!0){let M=b.__offset,T=b.value;if(Array.isArray(T)){let C=0;for(let P=0;P<T.length;P++){let F=T[P],L=p(F);m(F,b.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,b.__data)}}function m(b,v,S){typeof b=="number"||typeof b=="boolean"?v[0]=b:b.isMatrix3?(v[0]=b.elements[0],v[1]=b.elements[1],v[2]=b.elements[2],v[3]=0,v[4]=b.elements[3],v[5]=b.elements[4],v[6]=b.elements[5],v[7]=0,v[8]=b.elements[6],v[9]=b.elements[7],v[10]=b.elements[8],v[11]=0):ArrayBuffer.isView(b)?v.set(new b.constructor(b.buffer,b.byteOffset,v.length)):b.toArray(v,S)}function g(b,v,S,A){let M=b.value,T=v+"_"+S;if(A[T]===void 0)return typeof M=="number"||typeof M=="boolean"?A[T]=M:ArrayBuffer.isView(M)?A[T]=M.slice():A[T]=M.clone(),!0;{let C=A[T];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return A[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function x(b){let v=b.uniforms,S=0,A=16;for(let T=0,C=v.length;T<C;T++){let P=Array.isArray(v[T])?v[T]:[v[T]];for(let F=0,L=P.length;F<L;F++){let R=P[F],D=Array.isArray(R.value)?R.value:[R.value];for(let N=0,B=D.length;N<B;N++){let X=D[N],z=p(X),H=S%A,G=H%z.boundary,oe=H+G;S+=G,oe!==0&&A-oe<z.storage&&(S+=A-oe),R.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=z.storage}}}let M=S%A;return M>0&&(S+=A-M),b.__size=S,b.__cache={},this}function p(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?Ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(v.boundary=16,v.storage=b.byteLength):Ee("WebGLRenderer: Unsupported uniform value type.",b),v}function y(b){let v=b.target;v.removeEventListener("dispose",y);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(let b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var Dw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function Ow(){return Mi===null&&(Mi=new Us(Dw,16,16,pr,ti),Mi.name="DFG_LUT",Mi.minFilter=Bt,Mi.magFilter=Bt,Mi.wrapS=dn,Mi.wrapT=dn,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var Js=class{constructor(e={}){let{canvas:t=qm(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Sn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=d,x=new Set([oc,sc,rc]),p=new Set([Sn,ei,Ws,Xs,tc,nc]),y=new Uint32Array(4),_=new Int32Array(4),b=new O,v=null,S=null,A=[],M=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,P=!1,F=null,L=null,R=null,D=null;this._outputColorSpace=Mt;let N=0,B=0,X=null,z=-1,H=null,G=new yt,oe=new yt,se=null,ke=new K(0),Ne=0,qe=t.width,J=t.height,ie=1,ye=null,Ge=null,ve=new yt(0,0,qe,J),Je=new yt(0,0,qe,J),Kt=!1,tt=new Bs,ct=!1,Et=!1,st=new He,Lt=new O,Qt=new yt,xn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ft=!1;function Gt(){return X===null?ie:1}let V=n;function nn(E,U){return t.getContext(E,U)}let xt,I,w,W,$,Q,ae,le,ee,ne,ce,Re,de,ue,Ce,De,We,k,he,te,fe,be,re;try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Hn,!1),V===null){let U="webgl2";if(V=nn(U,E),V===null)throw nn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(E){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),Ue("WebGLRenderer: "+E.message),E}function Le(){xt=new G1(V),xt.init(),fe=new Rw(V,xt),I=new L1(V,xt,e,fe),w=new Aw(V,xt),I.reversedDepthBuffer&&f&&w.buffers.depth.setReversed(!0),L=V.createFramebuffer(),R=V.createFramebuffer(),D=V.createFramebuffer(),W=new X1(V),$=new fw,Q=new Ew(V,xt,w,$,I,fe,W),ae=new V1(C),le=new Y_(V),be=new I1(V,le),ee=new H1(V,le,W,be),ne=new Y1(V,ee,le,be,W),k=new q1(V,I,Q),Ce=new F1($),ce=new hw(C,ae,xt,I,be,Ce),Re=new Lw(C,$),de=new pw,ue=new _w(xt),We=new C1(C,ae,w,ne,m,l),De=new Tw(C,ne,I),re=new Fw(V,W,I,w),he=new P1(V,xt,W),te=new W1(V,xt,W),W.programs=ce.programs,C.capabilities=I,C.extensions=xt,C.properties=$,C.renderLists=de,C.shadowMap=De,C.state=w,C.info=W}g!==Sn&&(T=new $1(g,t.width,t.height,a,r,s));let Te=new yf(C,V);this.xr=Te,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let E=xt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=xt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(qe,J,!1))},this.getSize=function(E){return E.set(qe,J)},this.setSize=function(E,U,Z=!0){if(Te.isPresenting){Ee("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=E,J=U,t.width=Math.floor(E*ie),t.height=Math.floor(U*ie),Z===!0&&(t.style.width=E+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(qe*ie,J*ie).floor()},this.setDrawingBufferSize=function(E,U,Z){qe=E,J=U,ie=Z,t.width=Math.floor(E*Z),t.height=Math.floor(U*Z),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(g===Sn){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,U,Z,q){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,U,Z,q),w.viewport(G.copy(ve).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(Je)},this.setScissor=function(E,U,Z,q){E.isVector4?Je.set(E.x,E.y,E.z,E.w):Je.set(E,U,Z,q),w.scissor(oe.copy(Je).multiplyScalar(ie).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(E){w.setScissorTest(Kt=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){Ge=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Z=!0){let q=0;if(E){let Y=!1;if(X!==null){let ge=X.texture.format;Y=x.has(ge)}if(Y){let ge=X.texture.type,Me=p.has(ge),me=We.getClearColor(),Se=We.getClearAlpha(),Ae=me.r,Ye=me.g,nt=me.b;Me?(y[0]=Ae,y[1]=Ye,y[2]=nt,y[3]=Se,V.clearBufferuiv(V.COLOR,0,y)):(_[0]=Ae,_[1]=Ye,_[2]=nt,_[3]=Se,V.clearBufferiv(V.COLOR,0,_))}else q|=V.COLOR_BUFFER_BIT}U&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Hn,!1),We.dispose(),de.dispose(),ue.dispose(),$.dispose(),ae.dispose(),ne.dispose(),be.dispose(),re.dispose(),ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",dp),Te.removeEventListener("sessionend",pp),Tr.stop()};function Rt(E){E.preventDefault(),Do("WebGLRenderer: Context Lost."),P=!0}function dt(){Do("WebGLRenderer: Context Restored."),P=!1;let E=W.autoReset,U=De.enabled,Z=De.autoUpdate,q=De.needsUpdate,Y=De.type;Le(),W.autoReset=E,De.enabled=U,De.autoUpdate=Z,De.needsUpdate=q,De.type=Y}function Hn(E){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ci(E){let U=E.target;U.removeEventListener("dispose",ci),yy(U)}function yy(E){_y(E),$.remove(E)}function _y(E){let U=$.get(E).programs;U!==void 0&&(U.forEach(function(Z){ce.releaseProgram(Z)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Z,q,Y,ge){U===null&&(U=xn);let Me=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,me=Sy(E,U,Z,q,Y);w.setMaterial(q,Me);let Se=Z.index,Ae=1;if(q.wireframe===!0){if(Se=ee.getWireframeAttribute(Z),Se===void 0)return;Ae=2}let Ye=Z.drawRange,nt=Z.attributes.position,we=Ye.start*Ae,pt=(Ye.start+Ye.count)*Ae;ge!==null&&(we=Math.max(we,ge.start*Ae),pt=Math.min(pt,(ge.start+ge.count)*Ae)),Se!==null?(we=Math.max(we,0),pt=Math.min(pt,Se.count)):nt!=null&&(we=Math.max(we,0),pt=Math.min(pt,nt.count));let Ht=pt-we;if(Ht<0||Ht===1/0)return;be.setup(Y,q,me,Z,Se);let It,wt=he;if(Se!==null&&(It=le.get(Se),wt=te,wt.setIndex(It)),Y.isMesh)q.wireframe===!0?(w.setLineWidth(q.wireframeLinewidth*Gt()),wt.setMode(V.LINES)):wt.setMode(V.TRIANGLES);else if(Y.isLine){let rn=q.linewidth;rn===void 0&&(rn=1),w.setLineWidth(rn*Gt()),Y.isLineSegments?wt.setMode(V.LINES):Y.isLineLoop?wt.setMode(V.LINE_LOOP):wt.setMode(V.LINE_STRIP)}else Y.isPoints?wt.setMode(V.POINTS):Y.isSprite&&wt.setMode(V.TRIANGLES);if(Y.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let rn=Y._multiDrawStarts,_e=Y._multiDrawCounts,hn=Y._multiDrawCount,at=Se?le.get(Se).bytesPerElement:1,On=$.get(q).currentProgram.getUniforms();for(let ui=0;ui<hn;ui++)On.setValue(V,"_gl_DrawID",ui),wt.render(rn[ui]/at,_e[ui])}else if(Y.isInstancedMesh)wt.renderInstances(we,Ht,Y.count);else if(Z.isInstancedBufferGeometry){let rn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,_e=Math.min(Z.instanceCount,rn);wt.renderInstances(we,Ht,_e)}else wt.render(we,Ht)};function fp(E,U,Z,q){F!==null&&E.isNodeMaterial&&F.setObject(q,E),ct===!0&&Ce.setState(E,Z,!1),E.transparent===!0&&E.side===_t&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Wa(E,U,q),E.side=yi,E.needsUpdate=!0,Wa(E,U,q),E.side=_t):Wa(E,U,q)}this.compile=function(E,U,Z=null){Z===null&&(Z=E),F!==null&&F.renderStart(E,U,Z),S=ue.get(Z),S.init(U),M.push(S),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),E!==Z&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),Et=this.localClippingEnabled,ct=Ce.init(this.clippingPlanes,Et),ct===!0&&Ce.setGlobalState(this.clippingPlanes,U),F!==null&&De.render(S.state.shadowsArray,Z,U);let q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ge=Y.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let me=ge[Me];fp(me,Z,U,Y),q.add(me)}else fp(ge,Z,U,Y),q.add(ge)}),S=M.pop(),F!==null&&F.renderEnd(),q},this.compileAsync=function(E,U,Z=null){let q=this.compile(E,U,Z);return new Promise(Y=>{function ge(){if(q.forEach(function(Me){let Se=$.get(Me).currentProgram;(Se===void 0||Se.isReady())&&q.delete(Me)}),q.size===0){Y(E);return}setTimeout(ge,10)}xt.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Nu=null;function vy(E){Nu&&Nu(E)}function dp(){Tr.stop()}function pp(){Tr.start()}let Tr=new A0;Tr.setAnimationLoop(vy),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(E){Nu=E,Te.setAnimationLoop(E),E===null?Tr.stop():Tr.start()},Te.addEventListener("sessionstart",dp),Te.addEventListener("sessionend",pp),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;F!==null&&F.renderStart(E,U);let Z=Te.enabled===!0&&Te.isPresenting===!0,q=T!==null&&(X===null||Z)&&T.begin(C,X);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(U),U=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,U,X),S=ue.get(E,M.length),S.init(U),S.state.textureUnits=Q.getTextureUnits(),M.push(S),st.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(st,$n,U.reversedDepth),Et=this.localClippingEnabled,ct=Ce.init(this.clippingPlanes,Et),v=de.get(E,A.length),v.init(),A.push(v),Te.enabled===!0&&Te.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&Uu(Me,U,-1/0,C.sortObjects)}Uu(E,U,0,C.sortObjects),v.finish(),F!==null&&F.updateLights(S.state.lightsArray),C.sortObjects===!0&&v.sort(ye,Ge),Ft=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Ft&&We.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ce.beginShadows();let Y=S.state.shadowsArray;if(De.render(Y,E,U),ct===!0&&Ce.endShadows(),(q&&T.hasRenderPass())===!1){let Me=v.opaque,me=v.transmissive;if(S.setupLights(),U.isArrayCamera){let Se=U.cameras;if(me.length>0)for(let Ae=0,Ye=Se.length;Ae<Ye;Ae++){let nt=Se[Ae];gp(Me,me,E,nt)}Ft&&We.render(E);for(let Ae=0,Ye=Se.length;Ae<Ye;Ae++){let nt=Se[Ae];mp(v,E,nt,nt.viewport)}}else me.length>0&&gp(Me,me,E,U),Ft&&We.render(E),mp(v,E,U)}X!==null&&B===0&&(Q.updateMultisampleRenderTarget(X),Q.updateRenderTargetMipmap(X)),q&&T.end(C),E.isScene===!0&&E.onAfterRender(C,E,U),be.resetDefaultState(),z=-1,H=null,M.pop(),M.length>0?(S=M[M.length-1],Q.setTextureUnits(S.state.textureUnits),ct===!0&&Ce.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,F!==null&&F.renderEnd()};function Uu(E,U,Z,q){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(tt)){q&&Qt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(st);let Me=ne.update(E),me=E.material;me.visible&&v.push(E,Me,me,Z,Qt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(tt))){let Me=ne.update(E),me=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qt.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qt.copy(Me.boundingSphere.center)),Qt.applyMatrix4(E.matrixWorld).applyMatrix4(st)),Array.isArray(me)){let Se=Me.groups;for(let Ae=0,Ye=Se.length;Ae<Ye;Ae++){let nt=Se[Ae],we=me[nt.materialIndex];we&&we.visible&&v.push(E,Me,we,Z,Qt.z,nt,U)}}else me.visible&&v.push(E,Me,me,Z,Qt.z,null,U)}}let ge=E.children;for(let Me=0,me=ge.length;Me<me;Me++)Uu(ge[Me],U,Z,q)}function mp(E,U,Z,q){let{opaque:Y,transmissive:ge,transparent:Me}=E;S.setupLightsView(Z),ct===!0&&Ce.setGlobalState(C.clippingPlanes,Z),q&&w.viewport(G.copy(q)),Y.length>0&&Ha(Y,U,Z),ge.length>0&&Ha(ge,U,Z),Me.length>0&&Ha(Me,U,Z),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function gp(E,U,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[q.id]===void 0){let we=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[q.id]=new an(1,1,{generateMipmaps:!0,type:we?ti:Sn,minFilter:Qn,samples:Math.max(4,I.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let ge=S.state.transmissionRenderTarget[q.id],Me=q.viewport||G;ge.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let me=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(ke),Ne=C.getClearAlpha(),Ne<1&&C.setClearColor(16777215,.5),C.clear(),Ft&&We.render(Z);let Ye=C.toneMapping;C.toneMapping=jn;let nt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),S.setupLightsView(q),ct===!0&&Ce.setGlobalState(C.clippingPlanes,q),Ha(E,Z,q),Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge),xt.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let pt=0,Ht=U.length;pt<Ht;pt++){let It=U[pt],{object:wt,geometry:rn,material:_e,group:hn}=It;if(_e.side===_t&&wt.layers.test(q.layers)){let at=_e.side;_e.side=tn,_e.needsUpdate=!0,xp(wt,Z,q,rn,_e,hn),_e.side=at,_e.needsUpdate=!0,we=!0}}we===!0&&(Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Se,Ae),C.setClearColor(ke,Ne),nt!==void 0&&(q.viewport=nt),C.toneMapping=Ye}function Ha(E,U,Z){let q=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,ge=E.length;Y<ge;Y++){let Me=E[Y],{object:me,geometry:Se,group:Ae}=Me,Ye=Me.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),me.layers.test(Z.layers)&&xp(me,U,Z,Se,Ye,Ae)}}function xp(E,U,Z,q,Y,ge){F!==null&&Y.isNodeMaterial&&F.setObject(E,Y),E.onBeforeRender(C,U,Z,q,Y,ge),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(C,U,Z,q,E,ge),Y.transparent===!0&&Y.side===_t&&Y.forceSinglePass===!1?(Y.side=tn,Y.needsUpdate=!0,C.renderBufferDirect(Z,U,q,Y,E,ge),Y.side=yi,Y.needsUpdate=!0,C.renderBufferDirect(Z,U,q,Y,E,ge),Y.side=_t):C.renderBufferDirect(Z,U,q,Y,E,ge),E.onAfterRender(C,U,Z,q,Y,ge)}function Wa(E,U,Z){U.isScene!==!0&&(U=xn);let q=$.get(E),Y=S.state.lights,ge=S.state.shadowsArray,Me=Y.state.version,me=ce.getParameters(E,Y.state,ge,U,Z,S.state.lightProbeGridArray),Se=ce.getProgramCacheKey(me),Ae=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let Ye=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=ae.get(E.envMap||q.environment,Ye),q.envMapRotation=q.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ae===void 0&&(E.addEventListener("dispose",ci),Ae=new Map,q.programs=Ae);let nt=Ae.get(Se);if(nt!==void 0){if(q.currentProgram===nt&&q.lightsStateVersion===Me)return yp(E,me),nt}else me.uniforms=ce.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,Z,me),E.onBeforeCompile(me,C),nt=ce.acquireProgram(me,Se),Ae.set(Se,nt),q.uniforms=me.uniforms;let we=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(we.clippingPlanes=Ce.uniform),yp(E,me),q.needsLights=Ty(E),q.lightsStateVersion=Me,q.needsLights&&(we.ambientLightColor.value=Y.state.ambient,we.lightProbe.value=Y.state.probe,we.sunLights.value=Y.state.sun,we.sunLightShadows.value=Y.state.sunShadow,we.directionalLights.value=Y.state.directional,we.directionalLightShadows.value=Y.state.directionalShadow,we.spotLights.value=Y.state.spot,we.spotLightShadows.value=Y.state.spotShadow,we.rectAreaLights.value=Y.state.rectArea,we.ltc_1.value=Y.state.rectAreaLTC1,we.ltc_2.value=Y.state.rectAreaLTC2,we.pointLights.value=Y.state.point,we.pointLightShadows.value=Y.state.pointShadow,we.hemisphereLights.value=Y.state.hemi,we.sunShadowMatrix.value=Y.state.sunShadowMatrix,we.sunShadowCascade.value=Y.state.sunShadowCascade,we.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,we.spotLightMatrix.value=Y.state.spotLightMatrix,we.spotLightMap.value=Y.state.spotLightMap,we.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=S.state.lightProbeGridArray.length>0,q.currentProgram=nt,q.uniformsList=null,nt}function bp(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=$s.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function yp(E,U){let Z=$.get(E);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function My(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let Z=0,q=E.length;Z<q;Z++){let Y=E[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(b))return Y}return null}function Sy(E,U,Z,q,Y){U.isScene!==!0&&(U=xn),Q.resetTextureUnits();let ge=U.fog,Me=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,me=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:$e.workingColorSpace,Se=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ae=ae.get(q.envMap||Me,Se),Ye=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,nt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),we=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,Ht=!!Z.morphAttributes.color,It=jn;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(It=C.toneMapping);let wt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,rn=wt!==void 0?wt.length:0,_e=$.get(q),hn=S.state.lights;if(ct===!0&&(Et===!0||E!==H)){let Ct=E===H&&q.id===z;Ce.setState(q,E,Ct)}let at=!1;q.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==hn.state.version||_e.outputColorSpace!==me||Y.isBatchedMesh&&_e.batching===!1||!Y.isBatchedMesh&&_e.batching===!0||Y.isBatchedMesh&&_e.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&_e.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&_e.instancing===!1||!Y.isInstancedMesh&&_e.instancing===!0||Y.isSkinnedMesh&&_e.skinning===!1||!Y.isSkinnedMesh&&_e.skinning===!0||Y.isInstancedMesh&&_e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&_e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&_e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&_e.instancingMorph===!1&&Y.morphTexture!==null||_e.envMap!==Ae||q.fog===!0&&_e.fog!==ge||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ce.numPlanes||_e.numIntersection!==Ce.numIntersection)||_e.vertexAlphas!==Ye||_e.vertexTangents!==nt||_e.morphTargets!==we||_e.morphNormals!==pt||_e.morphColors!==Ht||_e.toneMapping!==It||_e.morphTargetsCount!==rn||!!_e.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,_e.__version=q.version);let On=_e.currentProgram;at===!0&&(On=Wa(q,U,Y),F&&q.isNodeMaterial&&F.onUpdateProgram(q,On,_e));let ui=!1,Ji=!1,as=!1,vt=On.getUniforms(),Nt=_e.uniforms;if(w.useProgram(On.program)&&(ui=!0,Ji=!0,as=!0),q.id!==z&&(z=q.id,Ji=!0),_e.needsLights){let Ct=My(S.state.lightProbeGridArray,Y);_e.lightProbeGrid!==Ct&&(_e.lightProbeGrid=Ct,Ji=!0)}if(ui||H!==E){w.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),vt.setValue(V,"projectionMatrix",E.projectionMatrix),vt.setValue(V,"viewMatrix",E.matrixWorldInverse);let Qi=vt.map.cameraPosition;Qi!==void 0&&Qi.setValue(V,Lt.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&vt.setValue(V,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(V,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,Ji=!0,as=!0)}if(_e.needsLights&&(hn.state.sunShadowMap.length>0&&vt.setValue(V,"sunShadowMap",hn.state.sunShadowMap,Q),hn.state.directionalShadowMap.length>0&&vt.setValue(V,"directionalShadowMap",hn.state.directionalShadowMap,Q),hn.state.spotShadowMap.length>0&&vt.setValue(V,"spotShadowMap",hn.state.spotShadowMap,Q),hn.state.pointShadowMap.length>0&&vt.setValue(V,"pointShadowMap",hn.state.pointShadowMap,Q)),Y.isSkinnedMesh){vt.setOptional(V,Y,"bindMatrix"),vt.setOptional(V,Y,"bindMatrixInverse");let Ct=Y.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),vt.setValue(V,"boneTexture",Ct.boneTexture,Q))}Y.isBatchedMesh&&(vt.setOptional(V,Y,"batchingTexture"),vt.setValue(V,"batchingTexture",Y._matricesTexture,Q),vt.setOptional(V,Y,"batchingIdTexture"),vt.setValue(V,"batchingIdTexture",Y._indirectTexture,Q),vt.setOptional(V,Y,"batchingColorTexture"),Y._colorsTexture!==null&&vt.setValue(V,"batchingColorTexture",Y._colorsTexture,Q));let ji=Z.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&k.update(Y,Z,On),(Ji||_e.receiveShadow!==Y.receiveShadow)&&(_e.receiveShadow=Y.receiveShadow,vt.setValue(V,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(Nt.envMapIntensity.value=U.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=Ow()),Ji){if(vt.setValue(V,"toneMappingExposure",C.toneMappingExposure),_e.needsLights&&wy(Nt,as),ge&&q.fog===!0&&Re.refreshFogUniforms(Nt,ge),Re.refreshMaterialUniforms(Nt,q,ie,J,S.state.transmissionRenderTarget[E.id]),_e.needsLights&&_e.lightProbeGrid){let Ct=_e.lightProbeGrid;Nt.probesSH.value=Ct.texture,Nt.probesMin.value.copy(Ct.boundingBox.min),Nt.probesMax.value.copy(Ct.boundingBox.max),Nt.probesResolution.value.copy(Ct.resolution)}$s.upload(V,bp(_e),Nt,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($s.upload(V,bp(_e),Nt,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(V,"center",Y.center),vt.setValue(V,"modelViewMatrix",Y.modelViewMatrix),vt.setValue(V,"normalMatrix",Y.normalMatrix),vt.setValue(V,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let Ct=q.uniformsGroups;for(let Qi=0,ls=Ct.length;Qi<ls;Qi++){let vp=Ct[Qi];re.update(vp,On),re.bind(vp,On)}}return On}function wy(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Ty(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(E,U,Z){let q=$.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(E.texture).__webglTexture=U,$.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let Z=$.get(E);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Z=0){X=E,N=U,B=Z;let q=null,Y=!1,ge=!1;if(E){let me=$.get(E);if(me.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(V.FRAMEBUFFER,me.__webglFramebuffer),G.copy(E.viewport),oe.copy(E.scissor),se=E.scissorTest,w.viewport(G),w.scissor(oe),w.setScissorTest(se),z=-1;return}else if(me.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(me.__hasExternalTextures)Q.rebindTextures(E,$.get(E.texture).__webglTexture,$.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ye=E.depthTexture;if(me.__boundDepthTexture!==Ye){if(Ye!==null&&$.has(Ye)&&(E.width!==Ye.image.width||E.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}let Se=E.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Ae=$.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?q=Ae[U][Z]:q=Ae[U],Y=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?q=$.get(E).__webglMultisampledFramebuffer:Array.isArray(Ae)?q=Ae[Z]:q=Ae,G.copy(E.viewport),oe.copy(E.scissor),se=E.scissorTest}else G.copy(ve).multiplyScalar(ie).floor(),oe.copy(Je).multiplyScalar(ie).floor(),se=Kt;if(Z!==0&&(q=L),w.bindFramebuffer(V.FRAMEBUFFER,q)&&w.drawBuffers(E,q),w.viewport(G),w.scissor(oe),w.setScissorTest(se),Y){let me=$.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,Z)}else if(ge){let me=U;for(let Se=0;Se<E.textures.length;Se++){let Ae=$.get(E.textures[Se]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,Z,me)}}else if(E!==null&&Z!==0){let me=$.get(E.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,me.__webglTexture,Z)}z=-1};function _p(E){let U=$.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=I.textureFormatReadable(E.format),U.__typeReadable=I.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Z,q,Y,ge,Me,me=0){if(!(E&&E.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se){w.bindFramebuffer(V.FRAMEBUFFER,Se);try{let Ae=E.textures[me],Ye=Ae.format,nt=Ae.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+me);let we=_p(Ae);if(we.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-q&&Z>=0&&Z<=E.height-Y&&V.readPixels(U,Z,q,Y,fe.convert(Ye),fe.convert(nt),ge)}finally{let Ae=X!==null?$.get(X).__webglFramebuffer:null;w.bindFramebuffer(V.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(E,U,Z,q,Y,ge,Me,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=$.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se)if(U>=0&&U<=E.width-q&&Z>=0&&Z<=E.height-Y){w.bindFramebuffer(V.FRAMEBUFFER,Se);let Ae=E.textures[me],Ye=Ae.format,nt=Ae.type;E.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+me);let we=_p(Ae);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.bufferData(V.PIXEL_PACK_BUFFER,ge.byteLength,V.STREAM_READ),V.readPixels(U,Z,q,Y,fe.convert(Ye),fe.convert(nt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Ht=X!==null?$.get(X).__webglFramebuffer:null;w.bindFramebuffer(V.FRAMEBUFFER,Ht);let It=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Km(V,It,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ge),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(pt),V.deleteSync(It),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Z=0){let q=Math.pow(2,-Z),Y=Math.floor(E.image.width*q),ge=Math.floor(E.image.height*q),Me=U!==null?U.x:0,me=U!==null?U.y:0;Q.setTexture2D(E,0),V.copyTexSubImage2D(V.TEXTURE_2D,Z,0,0,Me,me,Y,ge),w.unbindTexture()},this.copyTextureToTexture=function(E,U,Z=null,q=null,Y=0,ge=0){let Me,me,Se,Ae,Ye,nt,we,pt,Ht,It=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(Z!==null)Me=Z.max.x-Z.min.x,me=Z.max.y-Z.min.y,Se=Z.isBox3?Z.max.z-Z.min.z:1,Ae=Z.min.x,Ye=Z.min.y,nt=Z.isBox3?Z.min.z:0;else{let Nt=Math.pow(2,-Y);Me=Math.floor(It.width*Nt),me=Math.floor(It.height*Nt),E.isDataArrayTexture?Se=It.depth:E.isData3DTexture?Se=Math.floor(It.depth*Nt):Se=1,Ae=0,Ye=0,nt=0}q!==null?(we=q.x,pt=q.y,Ht=q.z):(we=0,pt=0,Ht=0);let wt=fe.convert(U.format),rn=fe.convert(U.type),_e;U.isData3DTexture?(Q.setTexture3D(U,0),_e=V.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),_e=V.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),_e=V.TEXTURE_2D),w.activeTexture(V.TEXTURE0),w.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(V.UNPACK_ALIGNMENT,U.unpackAlignment);let hn=w.getParameter(V.UNPACK_ROW_LENGTH),at=w.getParameter(V.UNPACK_IMAGE_HEIGHT),On=w.getParameter(V.UNPACK_SKIP_PIXELS),ui=w.getParameter(V.UNPACK_SKIP_ROWS),Ji=w.getParameter(V.UNPACK_SKIP_IMAGES);w.pixelStorei(V.UNPACK_ROW_LENGTH,It.width),w.pixelStorei(V.UNPACK_IMAGE_HEIGHT,It.height),w.pixelStorei(V.UNPACK_SKIP_PIXELS,Ae),w.pixelStorei(V.UNPACK_SKIP_ROWS,Ye),w.pixelStorei(V.UNPACK_SKIP_IMAGES,nt);let as=E.isDataArrayTexture||E.isData3DTexture,vt=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Nt=$.get(E),ji=$.get(U),Ct=$.get(Nt.__renderTarget),Qi=$.get(ji.__renderTarget);w.bindFramebuffer(V.READ_FRAMEBUFFER,Ct.__webglFramebuffer),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let ls=0;ls<Se;ls++)as&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(E).__webglTexture,Y,nt+ls),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$.get(U).__webglTexture,ge,Ht+ls)),V.blitFramebuffer(Ae,Ye,Me,me,we,pt,Me,me,V.DEPTH_BUFFER_BIT,V.NEAREST);w.bindFramebuffer(V.READ_FRAMEBUFFER,null),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||$.has(E)){let Nt=$.get(E),ji=$.get(U);w.bindFramebuffer(V.READ_FRAMEBUFFER,R),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,D);for(let Ct=0;Ct<Se;Ct++)as?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nt.__webglTexture,Y,nt+Ct):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nt.__webglTexture,Y),vt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ji.__webglTexture,ge,Ht+Ct):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ji.__webglTexture,ge),Y!==0?V.blitFramebuffer(Ae,Ye,Me,me,we,pt,Me,me,V.COLOR_BUFFER_BIT,V.NEAREST):vt?V.copyTexSubImage3D(_e,ge,we,pt,Ht+Ct,Ae,Ye,Me,me):V.copyTexSubImage2D(_e,ge,we,pt,Ae,Ye,Me,me);w.bindFramebuffer(V.READ_FRAMEBUFFER,null),w.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else vt?E.isDataTexture||E.isData3DTexture?V.texSubImage3D(_e,ge,we,pt,Ht,Me,me,Se,wt,rn,It.data):U.isCompressedArrayTexture?V.compressedTexSubImage3D(_e,ge,we,pt,Ht,Me,me,Se,wt,It.data):V.texSubImage3D(_e,ge,we,pt,Ht,Me,me,Se,wt,rn,It):E.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ge,we,pt,Me,me,wt,rn,It.data):E.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ge,we,pt,It.width,It.height,wt,It.data):V.texSubImage2D(V.TEXTURE_2D,ge,we,pt,Me,me,wt,rn,It);w.pixelStorei(V.UNPACK_ROW_LENGTH,hn),w.pixelStorei(V.UNPACK_IMAGE_HEIGHT,at),w.pixelStorei(V.UNPACK_SKIP_PIXELS,On),w.pixelStorei(V.UNPACK_SKIP_ROWS,ui),w.pixelStorei(V.UNPACK_SKIP_IMAGES,Ji),ge===0&&U.generateMipmaps&&V.generateMipmap(_e),w.unbindTexture()},this.initRenderTarget=function(E){$.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),w.unbindTexture()},this.resetState=function(){N=0,B=0,X=null,w.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};function F0(i){let e=i.length/3,t=new Float32Array(e);for(let n=0;n<e;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(t[n]=r)}return t}function D0(i,e,t,n){for(let r=t.start*3;r<t.end*3;r++){let s=e[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var Nw=[],ga=new Map,Uw=0,O0=(i,e)=>`pack:${i}:${e}`,Bw=i=>i.startsWith("pack:");function Wc(i){Nw=i,ga=new Map;for(let e of i)for(let t of e.items)ga.set(O0(e.id,t.id),t);Uw+=1}var kw={};function jt(i){if(!Bw(i))return;let e=ga.get(i);if(e)return e;let[,t,...n]=i.split(":"),r=kw[t];return r?ga.get(O0(r,n.join(":"))):void 0}var N0=i=>jt(i)?.parts.find(e=>e.screen);function kn(i,e){if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return qc;if(e.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,e.h));let t=jt(e.type);if(!t)return Qs(e);switch(t.mount){case"surface":return G0(i,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,i.height-e.h);default:return 0}}var U0=null,B0=new Set,k0=i=>{U0=i},z0=()=>U0,V0=i=>{B0.add(i)};function Xc(i){let e=ga.get(i)?.mesh;return e!==void 0&&B0.has(e)}var Yc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2};function $r(i){return i==="hedge"||i==="fence"||i==="pergola"}function _f(i,e,t){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,u)=>r==="x"?c:r==="-x"?-c:r==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let h=s(c,u);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(e,t)-o)/(a-o)));return n*l}function Vw(i,e,t,n){return xa(i)+(e.offset??0)+Yc[e.type]-_f(e,t,n)}function xa(i){return i.elevation>.3?0:-.2}function H0(i,e,t){let n=(i.outdoor??[]).filter(s=>!$r(s.type)&&s.type!=="pool"&&ft([e,t],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?Vw(i,r,e,t):xa(i)}var Gw={type:"none",pitch:35,overhang:.4},GR={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Gw}};var W0=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),qc=1.75;function X0(i){return W0.has(i)||!!jt(i)?.light}var Hw=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Qs(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function G0(i,e,t){let n=0;for(let r of i.furniture)!(Hw.has(r.type)||jt(r.type)?.surface)||!ft([e,t],$c(r))||(n=Math.max(n,r.h));return n}var zw=new Set([...W0,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var Ww=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Xw=["standard","bars","glass_wall"];function mr(i,e){return i.type==="door"?i.style&&Ww.includes(i.style)?i.style:e?"front":"interior":i.style&&Xw.includes(i.style)?i.style:"standard"}function q0(i,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let u=s-.5;if(l+c>u){let f=Math.max(0,u)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Y0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Zr(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[s,o]=i[(t+1)%i.length];e+=n*o-s*r}return e/2}function ba(i){return Math.abs(Zr(i))}function Kc(i){let e=Zr(i);if(Math.abs(e)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let t=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;t+=(s+a)*c,n+=(o+l)*c}return[t/(6*e),n/(6*e)]}function K0(i){if(i.length!==4)return!1;for(let e=0;e<4;e++){let[t,n]=i[e],[r,s]=i[(e+1)%4];if(Math.abs(t-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function $0(i){let e=1/0,t=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)e=Math.min(e,s),t=Math.min(t,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:e,z0:t,x1:n,z1:r}}function $c(i){let e=i.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*t-a*n,i.z+o*n+a*t])}function ft(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[s,o]=e[n],[a,l]=e[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(t=!t)}return t}var vf=Math.PI/180,eo=i=>Math.tan(Math.min(80,Math.max(0,i))*vf);function Zc(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function wn(i){let{x0:e,x1:t,z0:n,z1:r}=Zc(i);return i.axis==="x"?{u0:e,u1:t,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:t-e,at:(s,o)=>[i.flip?t-o:e+o,s]}}function wi(i,e,t){let{x0:n,x1:r,z0:s,z1:o}=Zc(i);return i.axis==="x"?[e,i.flip?o-t:t-s]:[t,i.flip?r-e:e-n]}var ya=Math.tan(30*vf);function Mf(i,e,t,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=e+s*n,l=t+o*r,c=Math.min(i-o,Math.max(s,(l-a+ya*(i-o+s))/(2*ya))),u=a+(c-s)*ya;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:f=>f<=s?e+f*n:f<=c?a+(f-s)*ya:f<=i-o?l+(i-o-f)*ya:t+(i-f)*r}}function mn(i){let e=wn(i).w,[t,n]=[i.eave_a,i.eave_b],[r,s]=[eo(i.pitch_a),eo(i.pitch_b)];switch(i.shape){case"flat":case"parapet":return{vr:e/2,rh:t,y:()=>t};case"pent":return{vr:e,rh:t+e*r,y:o=>t+o*r};case"mansard":{let o=Mf(e,t,n,r,s);return{vr:o.vr,rh:o.rh,y:o.y}}default:{let o=r+s>1e-6?Math.min(e,Math.max(0,(n-t+e*s)/(r+s))):e/2;return{vr:o,rh:t+o*r,y:a=>a<=o?t+a*r:n+(e-a)*s}}}}var Sf=i=>mn(i).rh;var ut=(i,e)=>[i[0]-e[0],i[1]-e[1]],Ti=(i,e)=>[i[0]+e[0],i[1]+e[1]],ni=(i,e)=>[i[0]*e,i[1]*e],Tn=(i,e)=>i[0]*e[0]+i[1]*e[1],An=(i,e)=>i[0]*e[1]-i[1]*e[0],zn=i=>Math.hypot(i[0],i[1]),ii=i=>{let e=zn(i)||1;return[i[0]/e,i[1]/e]},wf=i=>[-i[1],i[0]],Tf=i=>[i[1],-i[0]];function Z0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function qw(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Yw(i,e,t){if(i.a===e.b)return!1;let n=ii(ut(t[i.b],t[i.a])),r=ii(ut(t[e.b],t[e.a]));return Math.abs(An(n,r))>1e-6||Tn(n,r)<=0||i.free||e.free?!1:i.height===e.height&&i.exterior===e.exterior&&i.roomLeft===e.roomLeft&&i.roomRight===e.roomRight&&Math.abs(i.left-e.left)<=1e-9&&Math.abs(i.right-e.right)<=1e-9}function J0(i,e,t=new Set){let n=i.slice();for(;;){let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b])r.set(l,[...r.get(l)??[],a])});let s=null;for(let[o,a]of r){if(a.length!==2||t.has(o))continue;let l=n[a[0]].b===o?n[a[0]]:Z0(n[a[0]]),c=n[a[1]].a===o?n[a[1]]:Z0(n[a[1]]);if(!Yw(l,c,e))continue;let u={...l,b:c.b,sources:qw(l.sources,c.sources)};s=[...n.filter((h,f)=>f!==a[0]&&f!==a[1]),u];break}if(!s)return n;n=s}}function j0(i,e){let t=new Map;i.forEach((r,s)=>{let o=ii(ut(e[r.b],e[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:ni(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a)t.set(l,[...t.get(l)??[],c])});let n=new Map;for(let[r,s]of t){let o=e[r];s.sort((l,c)=>l.angle-c.angle);for(let l of s)n.set(l.key,{left:Ti(o,ni(wf(l.d),l.left)),right:Ti(o,ni(Tf(l.d),l.right))});if(s.length<2)continue;let a=4*Math.max(...s.map(l=>Math.max(l.left,l.right)))+1e-9;s.forEach((l,c)=>{let u=s[(c+1)%s.length],h=Ti(o,ni(wf(l.d),l.left)),f=Ti(o,ni(Tf(u.d),u.right)),d=An(l.d,u.d);if(Math.abs(d)<1e-4)return;let m=Ti(h,ni(l.d,An(ut(f,h),u.d)/d));zn(ut(m,o))>a||(n.get(l.key).left=m,n.get(u.key).right=m)})}return n}function Q0(i,e){let t=i.filter((n,r)=>zn(ut(n,i[(r+1)%i.length]))>e);for(;;){if(t.length<=3)return t;let n=t.findIndex((r,s)=>{let o=t[(s+t.length-1)%t.length],a=t[(s+1)%t.length],[l,c]=[ut(r,o),ut(a,r)];return Math.abs(An(ii(l),ii(c)))<1e-7&&Tn(l,c)>0});if(n===-1)return t;t=t.filter((r,s)=>s!==n)}}function Kw(i){let e=[];return{points:e,idOf(t){let n=e.findIndex(r=>Math.abs(r[0]-t[0])<=i&&Math.abs(r[1]-t[1])<=i);return n>=0?n:(e.push([t[0],t[1]]),e.length-1)}}}function $w(i,e){let t=[];for(let n of i){let r=n.points;if(r.length<3||Math.abs(Zr(r))<1e-6)continue;let s=Zr(r)>0,o=r.map(a=>e.idOf(a));o.forEach((a,l)=>{let c=o[(l+1)%o.length];a!==c&&t.push(s?{u:a,v:c,room:n.id,edge:l,forward:!0}:{u:c,v:a,room:n.id,edge:l,forward:!1})})}return t}function Zw(i,e,t){let n=[];for(let r of i){let[s,o]=[e[r.u],e[r.v]],a=ut(o,s),l=zn(a),c=ni(a,1/l),u=e.map((f,d)=>({id:d,rel:ut(f,s)})).filter(({id:f,rel:d})=>f!==r.u&&f!==r.v&&Tn(d,c)>t&&Tn(d,c)<l-t&&Math.abs(An(c,d))<=t).map(({id:f,rel:d})=>({t:Tn(d,c),id:f})).sort((f,d)=>f.t-d.t),h=[{t:0,id:r.u},...u,{t:l,id:r.v}];for(let f=0;f+1<h.length;f++){let[d,m]=[h[f],h[f+1]];n.push({u:d.id,v:m.id,room:r.room,edge:r.edge,t0:r.forward?d.t:l-m.t,t1:r.forward?m.t:l-d.t})}}return n}var eg=i=>({room_id:i.room,edge:i.edge,t0:i.t0,t1:i.t1});function Jw(i,e){let t=new Map(i.map(s=>[s.id,s])),n=new Map;for(let s of e){let o=`${s.room}:${s.edge}`;n.set(o,[...n.get(o)??[],s.t0].sort((a,l)=>a-l))}let r=s=>{let o=t.get(s.room)?.wall_heights?.[s.edge];return Array.isArray(o)?o[(n.get(`${s.room}:${s.edge}`)??[]).indexOf(s.t0)]??null:o};return{heightOf(s){let o=s.map(r).filter(a=>typeof a=="number"&&a>0);return o.length?Math.min(...o):void 0},thicknessOf(s){let o=s.map(a=>t.get(a.room)?.wall_thickness?.[a.edge]).filter(a=>typeof a=="number"&&a>0);return o.length?Math.max(...o):void 0},hasNoWall:s=>s.some(o=>r(o)===0)}}function jw(i,e,t,n){let r=Jw(e,i),s=new Map;for(let l of i){let c=l.u<l.v?`${l.u}-${l.v}`:`${l.v}-${l.u}`;s.set(c,[...s.get(c)??[],l])}let o=[],a=[];for(let l of s.values()){let c=l[0],u=l.find(f=>f!==c&&f.u===c.v&&f.v===c.u&&f.room!==c.room);for(let f of l)f!==c&&f!==u&&f.room!==c.room&&n.push(`overlap:${c.room}:${f.room}`);let h=u?[c,u]:[c];if(r.hasNoWall(h)){u&&a.push([c.room,u.room]);continue}if(u){let f=r.thicknessOf(h)??t.interior;o.push({a:c.u,b:c.v,left:f/2,right:f/2,exterior:!1,roomLeft:c.room,roomRight:u.room,sources:h.map(eg),height:r.heightOf(h)})}else o.push({a:c.u,b:c.v,left:0,right:r.thicknessOf(h)??t.exterior,exterior:!0,roomLeft:c.room,roomRight:null,sources:[eg(c)],height:r.heightOf(h)})}return{drafts:o,open:a}}function Qw(i,e){let t=n=>ii(ut(e[n.b],e[n.a]));for(let n of i){if(n.exterior||n.free)continue;let r=new Set;for(let o of[n.a,n.b])for(let a of i)!a.exterior||a.free||a.a!==o&&a.b!==o||Math.abs(An(t(n),t(a)))>1e-6||(a.roomLeft===n.roomLeft?r.add("left"):a.roomLeft===n.roomRight&&r.add("right"));if(r.size!==1)continue;let s=n.left+n.right;[n.left,n.right]=r.has("left")?[0,s]:[s,0]}}var e2=(i,e)=>{let t=s=>Math.round(s*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`};function _a(i,e,t=[]){let n=e.eps??.005,r=[],s=Kw(n),o=$w(i,s),a=t.filter(p=>Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1])>.05),l=a.map(p=>[s.idOf(p.a),s.idOf(p.b)]),c=new Set;for(let p of i){let y=p.points;y.length<3||(p.wall_splits??[]).forEach((_,b)=>{if(!_||b>=y.length)return;let v=y[b],S=ut(y[(b+1)%y.length],v),A=zn(S);for(let M of _)M>n&&M<A-n&&c.add(s.idOf(Ti(v,ni(S,M/A))))})}let u=Zw(o,s.points,n),{drafts:h,open:f}=jw(u,i,e,r);Qw(h,s.points);let d=h;a.forEach((p,y)=>{let[_,b]=l[y];if(_===b)return;let v=[(p.a[0]+p.b[0])/2,(p.a[1]+p.b[1])/2],S=i.find(M=>M.points.length>=3&&ft(v,M.points))?.id??null,A=(p.thickness??e.interior)/2;d.push({free:p.id,a:_,b,left:A,right:A,exterior:!1,roomLeft:S,roomRight:S,sources:[],height:typeof p.height=="number"&&p.height>0?p.height:void 0})});let m=J0(d,s.points,c),g=j0(m,s.points);return{walls:m.map((p,y)=>{let[_,b]=[s.points[p.a],s.points[p.b]],[v,S]=[g.get(`${y}:a`),g.get(`${y}:b`)],A=Q0([v.right,S.left,b,S.right,v.left,_],1e-6);return{id:e2(_,b),a:[_[0],_[1]],b:[b[0],b[1]],left:p.left,right:p.right,exterior:p.exterior,roomLeft:p.roomLeft,roomRight:p.roomRight,sources:p.sources,footprint:A,...p.free?{free:p.free}:{},...p.height!==void 0?{height:p.height}:{}}}),warnings:[...new Set(r)],open:f}}function tg(i,e,t){let n=i.points[e];return Ti(n,ni(ii(ut(i.points[(e+1)%i.points.length],n)),t))}function ng(i,e,t){if(i.wall){let r=t.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=ii(ut(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Ti(r.a,[-s[1],s[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}var ig=(i,e)=>Tn(ut(e,i.a),ii(ut(i.b,i.a)));function rg(i,e,t){if(!e.wall)return t2(i,t.room,t.edge,e.offset);let n=i.find(r=>r.free===e.wall);return n?{wall:n,s:ig(n,tg(t.room,0,e.offset))}:null}function t2(i,e,t,n){for(let r of i)if(r.sources.some(o=>o.room_id===e.id&&o.edge===t&&n>=o.t0-1e-6&&n<=o.t1+1e-6))return{wall:r,s:ig(r,tg(e,t,n))};return null}var sg=([i,e])=>{let t=Math.hypot(i,e)||1;return[i/t,e/t]};function n2(i){return i.reduce((e,t,n)=>e+(t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1]),0)/2}function Jc(i,e){let t=i.length;if(t<3||Math.abs(e)<1e-9)return i.map(([r,s])=>[r,s]);let n=n2(i)>=0?1:-1;return i.map((r,s)=>{let o=i[(s+t-1)%t],a=i[(s+1)%t],[l,c]=sg([r[0]-o[0],r[1]-o[1]]),[u,h]=sg([a[0]-r[0],a[1]-r[1]]),f=[c*n,-l*n],d=[h*n,-u*n],m=[f[0]+d[0],f[1]+d[1]],g=Math.hypot(m[0],m[1]);if(g<1e-6)return[r[0]+f[0]*e,r[1]+f[1]*e];let x=(m[0]*f[0]+m[1]*f[1])/g,p=Math.min(4,1/Math.max(.25,x));return[r[0]+m[0]/g*e*p,r[1]+m[1]/g*e*p]})}function Af(i,e){if(i.points&&i.points.length>=3)return Jc(i.points,e);let t=Math.min(i.x0,i.x1)-e,n=Math.max(i.x0,i.x1)+e,r=Math.min(i.z0,i.z1)-e,s=Math.max(i.z0,i.z1)+e;return[[t,r],[n,r],[n,s],[t,s]]}function gr(i,e){let t=wn(i),n=mn(i),r=t.w,[s,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=(p,y)=>[p,y,n.y(y)],u=c(a,-s),h=c(l,-s),f=c(l,r+o),d=c(a,r+o),[m,g]=[eo(i.pitch_a),eo(i.pitch_b)],x=p=>[p,n.vr,n.rh];switch(i.shape){case"pent":return{faces:[[u,h,f,d]],rim:[u,h,f,d],ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]};case"hip":case"pyramid":{let p=(t.u1-t.u0)/2,y=i.shape==="pyramid"?p:Math.min(p,Math.min(n.vr,r-n.vr)||r/2),_=x(t.u0+y),b=x(t.u1-y);return i.shape==="pyramid"?{faces:[[u,h,_],[h,f,_],[f,d,_],[d,u,_]],rim:[u,h,f,d],ridges:[[u,_],[d,_],[h,_],[f,_]],gable:null}:{faces:[[u,h,b,_],[_,b,f,d],[d,u,_],[h,f,b]],rim:[u,h,f,d],ridges:[[_,b],[u,_],[d,_],[h,b],[f,b]],gable:null}}case"halfhip":{let p=Math.min(n.y(0),n.y(r)),y=p+(n.rh-p)*.55,_=m>1e-6?Math.min(n.vr,(y-i.eave_a)/m):n.vr,b=g>1e-6?Math.max(n.vr,r-(y-i.eave_b)/g):n.vr,v=Math.min((t.u1-t.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),S=x(t.u0+v),A=x(t.u1-v),M=[a,_,y],T=[a,b,y],C=[l,_,y],P=[l,b,y];return{faces:[[u,h,C,A,S,M],[S,A,P,f,d,T],[T,M,S],[C,P,A]],rim:[u,h,C,P,f,d,T,M],ridges:[[S,A],[M,S],[T,S],[C,A],[P,A]],gable:[[0,n.y(0)],[_,y],[b,y],[r,n.y(r)]]}}case"mansard":{let p=Mf(r,i.eave_a,i.eave_b,m,g),y=[a,p.vla,p.yla],_=[l,p.vla,p.yla],b=[a,r-p.vlb,p.ylb],v=[l,r-p.vlb,p.ylb],S=[a,p.vr,p.rh],A=[l,p.vr,p.rh];return{faces:[[u,h,_,y],[y,_,A,S],[S,A,v,b],[b,v,f,d]],rim:[u,h,_,A,v,f,d,b,S,y],ridges:[[S,A],[y,_],[b,v]],gable:[[0,n.y(0)],[p.vla,p.yla],[p.vr,p.rh],[r-p.vlb,p.ylb],[r,n.y(r)]]}}default:{let p=x(a),y=x(l);return{faces:[[u,h,y,p],[p,y,f,d]],rim:[u,h,y,f,d,p],ridges:[[p,y]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}}}function Jr(i,e,t){let n=null;for(let r of i.faces){if(!ft([e,t],r.map(([f,d])=>[f,d])))continue;let[s,o]=r,a=r.slice(2).find(f=>Math.abs((o[0]-s[0])*(f[1]-s[1])-(o[1]-s[1])*(f[0]-s[0]))>1e-9);if(!a)continue;let l=[o[0]-s[0],o[2]-s[2],o[1]-s[1]],c=[a[0]-s[0],a[2]-s[2],a[1]-s[1]],u=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]];if(Math.abs(u[1])<1e-9)continue;let h=s[2]-(u[0]*(e-s[0])+u[2]*(t-s[1]))/u[1];n=n===null?h:Math.min(n,h)}return n}function to(i,e,t,n){let r=o=>n?o[e]<=t+1e-9:o[e]>=t-1e-9,s=[];return i.forEach((o,a)=>{let l=i[(a+1)%i.length];if(r(o)&&s.push(o),r(o)!==r(l)){let c=(t-o[e])/(l[e]-o[e]);s.push([o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c])}}),s}function jc(i,e){let t=to(to(i,0,e.u0,!1),0,e.u1,!0);return[to(i,0,e.u0,!0),to(i,0,e.u1,!1),to(t,1,e.v0,!0),to(t,1,e.v1,!1)].filter(r=>r.length>=3&&Math.abs(ba(r.map(([s,o])=>[s,o])))>1e-6)}function va(i,e,t){let n=wn(e),r=i.floors.flatMap(u=>u.rooms.filter(h=>h.points.length>=3&&u.elevation+u.height>e.base+.05)),s=u=>u.some(h=>r.some(f=>ft(h,f.points))),o=.35,a=[.15,.5,.85].map(u=>n.u0+(n.u1-n.u0)*u),l=[.15,.5,.85].map(u=>n.w*u),c=u=>u?0:t;return{a:c(s(a.map(u=>n.at(u,-o)))),b:c(s(a.map(u=>n.at(u,n.w+o)))),u0:c(s(l.map(u=>n.at(n.u0-o,u)))),u1:c(s(l.map(u=>n.at(n.u1+o,u))))}}var Qc=i=>Math.abs((i.x1-i.x0)*(i.z1-i.z0)),og=i=>i.shape==="flat"||i.shape==="parapet";function no(i,e){let[t,n]=[(e.x0+e.x1)/2,(e.z0+e.z1)/2];return i.filter(s=>{if(s===e||s.dormer||s.open||og(s)||Qc(s)<Qc(e)*1.5)return!1;let o=Zc(s);return t>=o.x0&&t<=o.x1&&n>=o.z0&&n<=o.z1}).reduce((s,o)=>s===null||Qc(o)<Qc(s)?o:s,null)}function ag(i,e){let t=gr(i,{u0:0,u1:0,a:0,b:0}),n=mn(i);return r=>{let[s,o]=e.at(r,e.w/2),[a,l]=wi(i,s,o);return Jr(t,a,l)??n.y(l)}}function eu(i,e){if(og(e))return e;let t=wn(e),n=mn(e).rh,r=ag(i,t),s=r(t.u0)<=r(t.u1),[o,a]=s?[t.u0,t.u1]:[t.u1,t.u0],l=s?1:-1,c=a;for(let f=.5;f<Math.abs(a-o);f+=.05)if(r(o+l*f)>=n-.02){c=o+l*f;break}if(Math.abs(c-a)<.05)return e;let u={...e},h=a===t.u1;return e.axis==="x"?u[h?"x1":"x0"]=c:u[h?"z1":"z0"]=c,u}function Ef(i,e){let t=eu(i,e),n=wn(t),r=mn(t),s=ag(i,n),o=s(n.u0)<=s(n.u1),a=n.u1-n.u0,l=Math.max(1,Math.ceil(a/.15)),c=[];for(let u=0;u<l;u++){let[h,f]=[a*u/l,a*(u+1)/l],[d,m]=o?[n.u0+h,n.u0+f]:[n.u1-h,n.u1-f],g=s(m),x=1/0,p=-1/0;for(let b=0;b<=40;b++){let v=n.w*b/40;r.y(v)>g+.02&&(x=Math.min(x,v),p=Math.max(p,v))}if(!(p-x>.05))continue;let y=wi(i,...n.at(d,x)),_=wi(i,...n.at(m,p));c.push({u0:Math.min(y[0],_[0]),u1:Math.max(y[0],_[0]),v0:Math.min(y[1],_[1]),v1:Math.max(y[1],_[1])})}return c}var lg=.14,i2=i=>i.shape==="flat"||i.shape==="parapet";function Rf(i,e){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<e-.05}function Cf(i,e,t){let n=Math.max(0,i.settings.roof.overhang??0),r=1e-6,s=[];for(let o of i.settings.roof.sections??[]){if(o.open)continue;let[a,l,c,u]=[Math.min(o.x0,o.x1),Math.max(o.x0,o.x1),Math.min(o.z0,o.z1),Math.max(o.z0,o.z1)];if(e<a-r||e>l+r||t<c-r||t>u+r||o.points&&o.points.length>=3&&!ft([e,t],o.points))continue;let[h,f]=wi(o,e,t),d=Math.max(0,o.overhang??n),m=i2(o)?null:Jr(gr(o,{u0:d,u1:d,a:d,b:d}),h,f);s.push((m??mn(o).y(f))-lg)}return s.length?Math.max(...s):null}function If(i,e){let t=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return t.findLast(n=>n.elevation<e.base-.05)??t[0]}function Pf(i,e,t){let n=i.settings.roof.sections??[],r=n.filter(l=>t.includes(l.id)).map(l=>no(n,l)??l);if(r.length===0)return e.id;let s=Math.max(...r.map(Sf)),o=l=>l.rooms.some(c=>{if(c.points.length<3)return!1;let u=c.points.reduce((f,d)=>f+d[0],0)/c.points.length,h=c.points.reduce((f,d)=>f+d[1],0)/c.points.length;return r.some(f=>u>=Math.min(f.x0,f.x1)&&u<=Math.max(f.x0,f.x1)&&h>=Math.min(f.z0,f.z1)&&h<=Math.max(f.z0,f.z1))});return i.floors.filter(l=>l.elevation>=e.elevation&&l.elevation<s-.3&&o(l)).sort((l,c)=>c.elevation-l.elevation)[0]?.id??e.id}function cg(i,e,t,n){return e===void 0?{y:t?i*2.4:0,opacity:1}:i>e?{y:5+i,opacity:0}:i===e?{y:0,opacity:1}:n==="stacked"?{y:0,opacity:1}:{y:-.4,opacity:n==="single"?0:.22}}function ug(i,e){let[t,n]=[i.ty-i.y,i.to-i.o];if(Math.abs(t)<.004&&Math.abs(n)<.004){let r=t!==0||n!==0;return r&&([i.y,i.o]=[i.ty,i.to]),{moving:!1,settled:r}}return i.y+=t*e,i.o+=n*e,{moving:!0,settled:!1}}function hg(i,e){let t=e>.999;for(let n of[i.floor,i.wall,i.frames,i.blinds,i.lamps])n.transparent===t&&(n.transparent=!t,n.depthWrite=t,n.needsUpdate=!0),n.opacity=e;for(let n of[i.pattern,i.glow,i.lines,i.glass,i.glassWall,i.halos,i.cones,i.screens])n.opacity=e}var Lf=i=>1-Math.exp(-i/140);var dg=["open","open2","tilt","tilt2"],Ff=i=>1-Math.exp(-i/160),fg=(i,e)=>(i??null)===(e??null)||typeof i=="number"&&typeof e=="number"&&Math.abs(i-e)<.003;function pg(i,e){return dg.every(t=>fg(e[t]??0,i[t]??0))&&fg(e.cover,i.cover)&&!!e.sensed==!!i.sensed}function mg(i,e,t){let n={...i,open2:i.open2??0,tilt2:i.tilt2??0,sensed:e.sensed},r=!1,s=(o,a)=>Math.abs(a-o)<.003?a:(r=!0,o+(a-o)*t);for(let o of dg)n[o]=s(i[o]??0,e[o]??0);return n.cover=e.cover===null||i.cover===null?e.cover:s(i.cover,e.cover),{state:n,moving:r}}var ht=Math.PI/180;function Oe(i,e){let t=new K(i).multiplyScalar(e);return t.setRGB(Math.min(1,t.r),Math.min(1,t.g),Math.min(1,t.b))}var Ai=Oe(3662079,.95),tu=Oe(3662079,1),Ei=Oe(5995775,.34),Df=Oe(5995775,.22),Ma=[-.55,.83],Sa=i=>.5+.5*Math.min(1,Math.max(0,i/1.6));function Of(i,e){let t=Math.hypot(i,e);return .8+.28*((e/t*Ma[0]-i/t*Ma[1]+1)/2)}var Ze=-1,wa=16,Xi=32,Nf=48,nu=64,xr=(i,e)=>new ze(i,e),ot=class{p=[];c=[];f=[];uv;tile;constructor(e=!1,t=!1){this.uv=e?[]:null,this.tile=t?[]:null}tri(e,t,n,r,s=r,o=r,a,l=Ze,c=[0,1]){this.p.push(...e,...t,...n);for(let u of[r,s,o])this.c.push(u.r,u.g,u.b);this.f.push(l,l,l),this.uv?.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile?.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let e=new Be;return e.setAttribute("position",xr(this.p,3)),e.setAttribute("color",xr(this.c,3)),e.setAttribute("fold",xr(this.f,1)),this.uv&&e.setAttribute("uv",xr(this.uv,2)),this.tile&&e.setAttribute("tile",xr(this.tile,2)),e.computeBoundingSphere(),e}},Yt=class{p=[];c=[];f=[];seg(e,t,n=Ai,r=Ze){this.p.push(...e,...t),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(e,t,n,r,s){let[o,a]=e[1]<=t[1]?[e,t]:[t,e];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Ze);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Ze),this.seg(c,a,n,s)}geometry(){let e=new Be;return e.setAttribute("position",xr(this.p,3)),e.setAttribute("color",xr(this.c,3)),e.setAttribute("fold",xr(this.f,1)),e}};var Uf=(i,e,t)=>i.map((n,r)=>n+(e[r]-n)*t);function gg(i,e,t){let n=(t-i.p[1])/(e.p[1]-i.p[1]);return{p:Uf(i.p,e.p,n),c:Uf(i.c,e.c,n),uv:i.uv&&e.uv?Uf(i.uv,e.uv,n):null,tile:i.tile}}function r2(i,e){return{p:i.p.slice(e*3,e*3+3),c:i.c.slice(e*3,e*3+3),uv:i.uv?i.uv.slice(e*2,e*2+2):null,tile:i.tile?i.tile.slice(e*2,e*2+2):null}}function s2(i,e,t,n){t.forEach((r,s)=>{let o=e*3+s;r.p.forEach((a,l)=>i.p[o*3+l]=a),r.c.forEach((a,l)=>i.c[o*3+l]=a),i.uv&&r.uv&&r.uv.forEach((a,l)=>i.uv[o*2+l]=a),i.tile&&r.tile&&r.tile.forEach((a,l)=>i.tile[o*2+l]=a),i.f[o]=n})}function xg(i,e,t){for(let n of e)i.p.push(...n.p),i.c.push(...n.c),i.f.push(t),i.uv?.push(...n.uv??[.5,.5]),i.tile?.push(...n.tile??[0,1])}function Bf(i,e,t,n){let r=i.count;for(let s=e;s<r;s++){let o=[0,1,2].map(_=>r2(i,s*3+_)),a=o.map(_=>_.p[1]>t+1e-6),l=o.map(_=>_.p[1]<t-1e-6);if(!a.some(Boolean))continue;if(!l.some(Boolean)){for(let _=0;_<3;_++)i.f[s*3+_]=n;continue}let c=i.f[s*3],u=a.filter(Boolean).length,h=u===1?a.indexOf(!0):a.indexOf(!1),[f,d,m]=[o[h],o[(h+1)%3],o[(h+2)%3]],g=gg(f,d,t),x=gg(m,f,t),[p,y]=u===1?[n,c]:[c,n];s2(i,s,[f,g,x],p),xg(i,[g,d,m],y),xg(i,[g,m,x],y)}}function kf(i,e,t,n){let r=i.p.length/6;for(let s=e;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=t+1e-6)continue;if(l[1]>=t-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let u=(t-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*u,t,l[2]+(c[2]-l[2])*u],f=i.c.slice(s*6,s*6+3);i.p.splice(s*6,6,...l,...h),i.p.push(...h,...c),i.c.push(...f,...f),i.f.push(n,n)}}var o2=i=>i.reduce((e,t,n)=>e+t[0]*i[(n+1)%i.length][1]-i[(n+1)%i.length][0]*t[1],0),bg=([i,e])=>new Fe(i,e);function ro(i,e=[]){return Xo.triangulateShape(i.map(bg),e.map(t=>t.map(bg)))}var io=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],yg=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],_g=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],vg=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function zf(i,e,t,n,r,s,o){let a=new K(o);for(let f=0;f<4;f++){let[d,m]=[e[f],e[(f+1)%4]],[g,x]=[t[f],t[(f+1)%4]],[p,y]=[m[0]-d[0],m[1]-d[1]],_=Math.hypot(p,y);if(_<1e-6)continue;let b=(g[0]+x[0]-d[0]-m[0])/2*(-y/_)+(g[1]+x[1]-d[1]-m[1])/2*(p/_),v=Math.max(0,Math.min(1,b/Math.max(1e-6,Math.hypot(b,r-n)))),S=Of(p,y),A=Oe(s,Sa(n)*S).lerp(a,v),M=Oe(s,Sa(r)*S).lerp(a,v);i.tri([d[0],n,d[1]],[g[0],r,g[1]],[x[0],r,x[1]],A,M,M),i.tri([d[0],n,d[1]],[x[0],r,x[1]],[m[0],n,m[1]],A,M,A)}let[l,c,u,h]=t;Math.hypot(u[0]-l[0],u[1]-l[1])>1e-4&&(i.tri([l[0],r,l[1]],[u[0],r,u[1]],[c[0],r,c[1]],a),i.tri([l[0],r,l[1]],[h[0],r,h[1]],[u[0],r,u[1]],a))}function Vf(i,e,t,n){let r=e.length;if(r<2)return;let s=e[0].length,o=new K(n),a=e.map(h=>[0,1,2].map(f=>h.reduce((d,m)=>d+m[f],0)/s)),l=e.map((h,f)=>h.map((d,m)=>{let g=io(e[Math.min(r-1,f+1)][m],e[Math.max(0,f-1)][m]),x=io(h[(m+1)%s],h[(m+s-1)%s]),p=vg(yg(g,x));return _g(p,io(d,a[f]))<0?p.map(y=>-y):p})),c=(h,f)=>{let d=(f[0]*Ma[0]+f[2]*Ma[1]+1)/2;return Oe(t,Sa(h[1])*(.8+.28*d)).lerp(o,Math.max(0,f[1])*.9)},u=(h,f,d,m,g,x,p)=>{_g(yg(io(f,h),io(d,h)),m)>=0?i.tri(h,f,d,g,x,p):i.tri(h,d,f,g,p,x)};for(let h=0;h+1<r;h++)for(let f=0;f<s;f++){let d=(f+1)%s,m=[e[h][f],e[h][d],e[h+1][d],e[h+1][f]],g=[l[h][f],l[h][d],l[h+1][d],l[h+1][f]],[x,p,y,_]=m.map((v,S)=>c(v,g[S])),b=[0,1,2].map(v=>g.reduce((S,A)=>S+A[v],0));u(m[0],m[1],m[2],b,x,p,y),u(m[0],m[2],m[3],b,x,y,_)}for(let[h,f]of[[0,-1],[r-1,1]]){let d=e[h],m=io(e[h===0?1:r-2][0],d[0]),g=vg(m.map(p=>p*-f)),x=c(a[h],g);for(let p=0;p<s;p++)u(d[p],d[(p+1)%s],a[h],g,x,x,x)}}function Gf(i,e,t,n,r,s,o,a,l,c){let u=new K(l),h=Array.from({length:c},(d,m)=>{let g=m/c*Math.PI*2;return{y:s+Math.cos(g)*o,across:r+Math.sin(g)*o}}),f=(d,m)=>{let{y:g,across:x}=h[m%c],[p,y]=e(d,x);return[p,g,y]};for(let d=0;d<c;d++){let m=Oe(a,.62+.4*Math.max(0,Math.cos((d+.5)/c*Math.PI*2)));i.tri(f(t,d),f(n,d+1),f(n,d),m),i.tri(f(t,d),f(t,d+1),f(n,d+1),m)}for(let d of[t,n]){let[m,g]=e(d,r);for(let x=0;x<c;x++)i.tri([m,s,g],f(d,x),f(d,x+1),u)}}function Pt(i,e,t,n,r,s,o={}){let a=typeof n=="number"?()=>n:g=>Math.max(t+.002,n(g[0],g[1])),l=o.aoFrom??t,c=o.fold??Ze,u=g=>Sa(g-l),h=(o.holes??[]).map(g=>o2(g)>0?[...g].reverse():g),f=h.length?[...e,...h.flat()]:e,d=o.topFace!==!1,m=!d&&!o.bottom?[]:ro(e,h);if(d){let g=new K(s);for(let[x,p,y]of m){let[_,b,v]=[f[x],f[p],f[y]];i.tri([_[0],a(_),_[1]],[v[0],a(v),v[1]],[b[0],a(b),b[1]],g,g,g,void 0,o.topFold??c)}}if(o.bottom){let g=Oe(r,.55);for(let[x,p,y]of m){let[_,b,v]=[f[x],f[p],f[y]];i.tri([_[0],t,_[1]],[b[0],t,b[1]],[v[0],t,v[1]],g,g,g,void 0,c)}}for(let g of[e,...h])g.forEach((x,p)=>{let y=g[(p+1)%g.length];if(Math.hypot(y[0]-x[0],y[1]-x[1])<1e-6||o.skipSide?.(x,y))return;let _=Of(y[0]-x[0],y[1]-x[1]),[b,v]=[a(x),a(y)],S=Oe(r,u(t)*_),A=Oe(r,u(b)*_),M=Oe(r,u(v)*_);i.tri([x[0],t,x[1]],[x[0],b,x[1]],[y[0],v,y[1]],S,A,M,void 0,c),i.tri([x[0],t,x[1]],[y[0],v,y[1]],[y[0],t,y[1]],S,M,S,void 0,c)})}var jr={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},iu=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),a2=1;function Mg(i,e,t,n){switch(i){case"ceiling":return[e-.12,"ceiling"];case"downlight":return[e-.03,"spot"];case"spot":return[e-n,"spot"];case"panel":return[e-.05,"ceiling"];case"pendant":return[Math.max(.5,e-n),"pendant"];case"floor":return[t+n-.15,"omni"];case"uplight":return[t+n,"up"];case"table":return[t+n-.1,"omni"];case"wall":return[t+.1,"wall"];case"strip":return[t+Math.max(.02,n)-.01,t<a2?"up":"ceiling"];case"bollard":return[t+n-.08,"ceiling"];case"garden":return[t+n,"up"]}}var Sg=.015,l2=.45;function c2(i,e,t,n,r){let[s,o]=[Math.cos(n),Math.sin(n)],a=[t[0]*s-t[1]*o,t[1]*s+t[0]*o],l=r;for(let c of i){let u=[c.b[0]-c.a[0],c.b[1]-c.a[1]],h=a[0]*u[1]-a[1]*u[0];if(Math.abs(h)<1e-9)continue;let f=[c.a[0]-e[0],c.a[1]-e[1]],d=(f[0]*u[1]-f[1]*u[0])/h,m=(f[0]*a[1]-f[1]*a[0])/h;d>l2&&d<l&&m>=0&&m<=1&&(l=d)}return l}function wg(i,e,t){let n=(e.rotation??0)*ht,r=[-Math.sin(n),Math.cos(n)],s=e.model==="camera_ceiling",o=e.reach??(s?3:4.5),a=(e.fov??(s?360:90))*ht/2,l=e.motion?new K(.9,.12,.16):new K(.04,.22,.28),c=new K(0,0,0),u=Math.max(4,Math.round(a/.15)),h=[e.x,e.z],f=m=>{let g=c2(t,h,r,m,o);return[e.x+(r[0]*Math.cos(m)-r[1]*Math.sin(m))*g,Sg,e.z+(r[1]*Math.cos(m)+r[0]*Math.sin(m))*g]},d=i.count;for(let m=0;m<u;m++)i.tri([e.x,Sg,e.z],f(-a+2*a*(m+1)/u),f(-a+2*a*m/u),l,c,c);return{start:d,end:i.count}}function Tg(i,e,t,n){switch(i){case"ceiling":return e-.07;case"downlight":return e-.03;case"spot":return e-n;case"panel":return e-.03;case"pendant":return Math.max(.4,e-n)+.08;case"floor":return t+n-.15;case"uplight":return t+n;case"table":return t+n-.09;case"wall":return t+n/2;case"strip":return t+Math.max(.02,n)-.01;case"bollard":return t+n-.08;case"garden":return t+n-.03}}var u2=.7;function Ag(i,e,t,n){let[r,s,o]=e.size??jr[e.lamp],a=e.base??0,l=(e.rotation??0)*ht,c=Tg(e.lamp,n,a,o),u=(h,f,d,m)=>{i.positions.push(h,f,d);for(let g of t.color)i.colours.push(g*t.level*u2*m)};if(e.lamp==="strip")for(let h of[-.4,-.13,.13,.4])e.upright?u(e.x,a+r*(.5+h),e.z,.6):u(e.x+Math.cos(l)*r*h,c,e.z+Math.sin(l)*r*h,.6);else e.lamp==="wall"?u(e.x-Math.sin(l)*(s/2+.05),c,e.z+Math.cos(l)*(s/2+.05),1):u(e.x,c,e.z,1)}function Eg(i,e,t,n){let[r,,s]=e.size??jr[e.lamp],o=Tg(e.lamp,n,e.base??0,s),a=new K(...t.color.map(d=>d*.09*t.level)),l=new K(0,0,0),[c,u]=[Math.max(.03,r/2),.45+.35*t.level],h=16,f=(d,m,g)=>[e.x+Math.cos(d)*m,g,e.z+Math.sin(d)*m];for(let d=0;d<h;d++){let[m,g]=[d/h*Math.PI*2,(d+1)/h*Math.PI*2];i.tri(f(m,c,o),f(m,u,.02),f(g,u,.02),a,l,l),i.tri(f(m,c,o),f(g,u,.02),f(g,c,o),a,l,a)}}var Rg=i=>iu.has(i);var Cg=7,h2=.25,f2=.3,d2=2,Hf=[1,.82,.55],p2=.45;function Ig(i,e,t,n){return i?`${i.elevation.toFixed(1)},${i.azimuth.toFixed(1)},${e*ht},${t.toFixed(2)},${[...n].map(r=>(r.cover??0).toFixed(2)).join(",")}`:""}var m2=(i,e)=>[Math.sin((e+i)*ht),-Math.cos((e+i)*ht)],g2=(i,e)=>Math.min(1,i/12)*(1-.8*e),x2=(i,e)=>-i.toRoom[0]*e[0]+-i.toRoom[1]*e[1];function Pg({floor:i,openings:e,states:t,sun:n,northDegrees:r,cloud:s}){let o=new ot;if(!n||n.elevation<=d2||s>=.97)return o;let a=g2(n.elevation,s),l=m2(n.azimuth,r),c=1/Math.tan(n.elevation*ht);for(let u of e){if(u.opening.type!=="window"||!u.exterior)continue;let h=x2(u,l);if(h<.05)continue;let f=u.top-(t.get(u.opening.id)?.cover??0)*(u.top-u.sill);if(f-u.sill<.05)continue;let d=i.rooms.find(v=>v.id===u.opening.room_id);if(!d||d.points.length<3)continue;let m=(v,S)=>{let A=Math.min(Cg,S*c);return[u.start[0]+u.axis[0]*v+u.toRoom[0]*u.faceRoom-l[0]*A,.02,u.start[1]+u.axis[1]*v+u.toRoom[1]*u.faceRoom-l[1]*A]},g=.14*a*Math.min(1,h*1.5),x=new K(Hf[0]*g,Hf[1]*g,Hf[2]*g),p=x.clone().multiplyScalar(p2),y=Math.max(1,Math.ceil(Math.min(Cg,f*c)/h2)),_=Math.max(1,Math.ceil(u.width/f2)),b=f-u.sill;for(let v=0;v<y;v++){let[S,A]=[u.sill+b*v/y,u.sill+b*(v+1)/y],[M,T]=[x.clone().lerp(p,v/y),x.clone().lerp(p,(v+1)/y)];for(let C=0;C<_;C++){let[P,F]=[u.width*C/_,u.width*(C+1)/_],L=m((P+F)/2,(S+A)/2);if(!ft([L[0],L[2]],d.points))continue;let[R,D,N,B]=[m(P,S),m(F,S),m(F,A),m(P,A)];o.tri(R,D,N,M,M,T),o.tri(R,N,B,M,T,T)}}}return o}var Ta=i=>Zr(i)>=0?i:[...i].reverse();function Wf(i,[e,t],n,r,s,o,a){Pt(i,Ta([[e-n,t-n],[e+n,t-n],[e+n,t+n],[e-n,t+n]]),r,s,o,a)}function Xf(i,e,t,n,r,s,o,a,l=0){let[c,u]=[t[0]-e[0],t[1]-e[1]],h=Math.hypot(c,u);if(h<1e-6)return;let[f,d]=[-u/h*n*.5,c/h*n*.5];if(Math.abs(l)<1e-4){Pt(i,Ta([[e[0]+f,e[1]+d],[t[0]+f,t[1]+d],[t[0]-f,t[1]-d],[e[0]-f,e[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let m=(b,v)=>[e[0]+f*v,b,e[1]+d*v],g=(b,v)=>[t[0]+f*v,b+l,t[1]+d*v],x=(b,v)=>{for(let[S,A,M]of[[0,1,2],[0,2,3],[0,2,1],[0,3,2]])i.tri(b[S],b[A],b[M],v,v,v,void 0,Ze)},p=new K(a),y=Oe(o,.9),_=Oe(o,.6);x([m(s,1),g(s,1),g(s,-1),m(s,-1)],p),x([m(r,1),g(r,1),g(r,-1),m(r,-1)],_),x([m(r,1),g(r,1),g(s,1),m(s,1)],y),x([m(r,-1),g(r,-1),g(s,-1),m(s,-1)],y),x([m(r,1),m(r,-1),m(s,-1),m(s,1)],y),x([g(r,1),g(r,-1),g(s,-1),g(s,1)],y)}var Lg={lawn:{color:927778,side:729115,edge:4121250,edgeAlpha:.16},terrace:{color:1841968,side:1447464,edge:5995775,edgeAlpha:.32},path:{color:1778228,side:1383209,edge:5995775,edgeAlpha:.22},driveway:{color:1514796,side:1185573,edge:5995775,edgeAlpha:.18},pool:{color:736091,side:861497,edge:3662079,edgeAlpha:.6},bed:{color:1775123,side:1380623,edge:4121250,edgeAlpha:.2},wild:{color:1384987,side:1055509,edge:10146383,edgeAlpha:.14},hedge:{color:1524016,side:1126693,edge:4121250,edgeAlpha:.35},fence:{color:1976903,side:1976903,edge:5995775,edgeAlpha:.45},pergola:{color:2827065,side:2104109,edge:5995775,edgeAlpha:.5}};function qf(i,e){return xa(i)+(e.offset??0)+($r(e.type)?.01:Yc[e.type])}function Fg(i,e){let t=i[e];return $r(t.type)||t.type==="pool"?[]:i.slice(e+1).filter(n=>n.cut&&n.points.length>=3&&n.points.every(r=>ft(r,t.points))).map(n=>Ta(n.points))}var ru=(i,e)=>i.map((t,n)=>[n,t,i[(n+1)%i.length]]).filter(([t])=>t!==e);function Aa(i,e){if(i.area.outline!==!1)for(let[,t,n]of ru(i.poly,i.openEdge))i.lines.seg([t[0],e(t[0],t[1]),t[1]],[n[0],e(n[0],n[1]),n[1]],i.edge,Ze)}function b2(i){let{buf:e,poly:t,base:n,top:r,look:s}=i,o=new K(s.color);for(let[l,c,u]of ro(t)){let[h,f,d]=[t[l],t[c],t[u]];e.tri([h[0],n+r,h[1]],[d[0],n+r,d[1]],[f[0],n+r,f[1]],o,o,o,void 0,Ze)}let a=new K(s.side);for(let[,l,c]of ru(t,-1))e.tri([c[0],n+r,c[1]],[c[0],n+.06,c[1]],[l[0],n+.06,l[1]],a,a,a,void 0,Ze),e.tri([c[0],n+r,c[1]],[l[0],n+.06,l[1]],[l[0],n+r,l[1]],a,a,a,void 0,Ze);Aa(i,()=>n+.06),Aa(i,()=>n+r+.005)}function y2(i){let{buf:e,lines:t,poly:n,top:r,look:s,groundAt:o,edge:a,openEdge:l}=i;for(let[c,u,h]of ru(n,l)){let f=Math.max(1,Math.round(Math.hypot(h[0]-u[0],h[1]-u[1])/2)),d=l>=0&&c===l-1?f:f-1;for(let m=0;m<=d;m++){let g=u[0]+(h[0]-u[0])*m/f,x=u[1]+(h[1]-u[1])*m/f,p=o(g,x);Wf(e,[g,x],.04,p,p+r,s.side,s.color)}for(let m of[.35,.85])t.seg([u[0],o(u[0],u[1])+m*r,u[1]],[h[0],o(h[0],h[1])+m*r,h[1]],a,Ze)}}function _2(i){let{buf:e,lines:t,poly:n,area:r,top:s,look:o,groundAt:a,edge:l,openEdge:c}=i;for(let u of n){let h=a(u[0],u[1]);Wf(e,u,.06,h,h+s,o.side,o.color)}for(let[,u,h]of ru(n,c)){let[f,d]=[a(u[0],u[1]),a(h[0],h[1])];Xf(e,u,h,.12,f+s-.16,f+s,o.side,o.color,d-f),r.bracing&&(t.seg([u[0],f+.25,u[1]],[h[0],d+s-.25,h[1]],l,Ze),t.seg([h[0],d+.25,h[1]],[u[0],f+s-.25,u[1]],l,Ze))}if(K0(n)){let u=$0(n),h=u.x1-u.x0>=u.z1-u.z0,[f,d]=h?[u.x0,u.x1-u.x0]:[u.z0,u.z1-u.z0],m=Math.max(1,Math.round(d/.6));for(let g=1;g<m;g++){let x=f+d*g/m,p=h?[x,u.z0+.06]:[u.x0+.06,x],y=h?[x,u.z1-.06]:[u.x1-.06,x],_=a(p[0],p[1]);Xf(e,p,y,.06,_+s-.04,_+s+.08,o.side,o.color,a(y[0],y[1])-_)}}Aa(i,(u,h)=>a(u,h)+s+.004)}function v2(i,e,t){let{buf:n,lines:r,poly:s,area:o,top:a,look:l,groundAt:c,base:u,edge:h}=i,f=u-(o.slope??0),d=(g,x)=>c(g,x)+a,m=Fg(e,t);if(Pt(n,s,f,o.slope?d:u+a,l.side,l.color,{aoFrom:f,holes:m}),Aa(i,(g,x)=>d(g,x)+.004),o.type==="hedge"&&Aa(i,(g,x)=>c(g,x)+.004),o.outline!==!1)for(let g of m)g.forEach((x,p)=>{let y=g[(p+1)%g.length];r.seg([x[0],d(x[0],x[1])+.004,x[1]],[y[0],d(y[0],y[1])+.004,y[1]],h,Ze)})}function Yf(i,e,t){let n=xa(t),r=t.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=n+(s.offset??0),l=Lg[s.type],c=Ta(s.points),u={buf:i,lines:e,area:s,poly:c,base:a,groundAt:(h,f)=>a-_f(s,h,f),top:$r(s.type)&&s.height?s.height:Yc[s.type],look:l,edge:Oe(l.edge,l.edgeAlpha),openEdge:s.open&&(s.type==="fence"||s.type==="pergola")?c.length-1:-1};s.type==="pool"?b2(u):s.type==="fence"?y2(u):s.type==="pergola"?_2(u):v2(u,r,o)})}var Dg=.012,M2=.012;function S2(){let i=[],e=[],t=[],n=[];return{add(r,s,o,a,l,c,u){for(let h of[r,s,o,r,o,a])i.push(h[0],h[1],h[2]),e.push(l[0],l[1],l[2]),t.push(c),n.push(u)},finish:r=>({pos:new Float32Array(i),normal:new Float32Array(e),room:Int16Array.from(t),fold:new Float32Array(n),doors:r})}}function Ug(i,e){let[t,n]=[i.b[0]-i.a[0],i.b[1]-i.a[1]],r=Math.hypot(t,n)||1;return Math.abs((e.start[0]-i.a[0])*n-(e.start[1]-i.a[1])*t)/r<.02&&Math.abs((e.axis[0]*t+e.axis[1]*n)/r)>.99}function w2(i,e,t,n){let r=[];for(let s of n.filter(o=>Ug(i,o))){let o=(s.start[0]-i.a[0])*e[0]+(s.start[1]-i.a[1])*e[1],a=s.axis[0]*e[0]+s.axis[1]*e[1]>0?o:o-s.width;a>t||a+s.width<0||r.push({s0:a,s1:a+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function Og(i,e,t){let n=[e,t,...i.filter(r=>r>e+.005&&r<t-.005)].sort((r,s)=>r-s);return n.filter((r,s)=>s===0||r>n[s-1]+.005)}function Ng(i,e,t=()=>!1){let n=i.map(u=>u[0]),r=i.map(u=>u[1]),[s,o]=[Math.min(...n),Math.min(...r)],[a,l]=[Math.max(1,Math.ceil((Math.max(...n)-s)/e)),Math.max(1,Math.ceil((Math.max(...r)-o)/e))],c=[];for(let u=0;u<a;u++)for(let h=0;h<l;h++){let[f,d]=[s+(u+.5)*e,o+(h+.5)*e];ft([f,d],i)&&!t(f,d)&&c.push({a:s+u*e,b:o+h*e})}return c}function Kf(i,e,t,n,r,s=[],o){let a=S2(),l=(f,d,m,g)=>a.add([f,m,d],[f,m,d+r],[f+r,m,d+r],[f+r,m,d],[0,1,0],g,-1);i.rooms.forEach((f,d)=>{if(!(f.points.length<3))for(let{a:m,b:g}of Ng(f.points,r,(x,p)=>s.some(y=>ft([x,p],y))))l(m,g,Dg,d)});let c=i.rooms.length;for(let f of i.outdoor??[]){if(f.points.length<3||$r(f.type))continue;let d=qf(i,f)+Dg;for(let{a:m,b:g}of Ng(f.points,r))l(m,g,d,c)}let u=Math.min(i.cut_height,i.height);e.forEach((f,d)=>{let m=Math.min(i.height,f.height??i.height),g=Math.min(u,m-.02),[x,p]=[f.b[0]-f.a[0],f.b[1]-f.a[1]],y=Math.hypot(x,p);if(y<.05)return;let _=[x/y,p/y],b=[-_[1],_[0]],v=t[d],S=w2(f,_,y,n),A=Og([g,(g+m)/2,...S.flatMap(T=>[T.y0+.01,T.y1-.01])],.02,m-.02),M=Og(S.flatMap(T=>[T.s0,T.s1]),0,y);for(let T of[1,-1]){let C=T>0?f.roomLeft:f.roomRight,P=C?i.rooms.findIndex(N=>N.id===C):f.exterior?c:-1;if(P<0)continue;let F=(T>0?f.left:f.right)+M2,L=[b[0]*T,b[1]*T],R=(N,B)=>[f.a[0]+_[0]*N+L[0]*F,B,f.a[1]+_[1]*N+L[1]*F],D=N=>{let B=R(N,0),X=o?.(B[0],B[2]);return X==null?1/0:X-.02};for(let N=0;N+1<M.length;N++){let B=M[N+1]-M[N],X=Math.max(1,Math.ceil(B/r));for(let z=0;z<X;z++){let H=M[N]+B/X*z,G=M[N]+B/X*(z+1);for(let oe=0;oe+1<A.length;oe++){let[se,ke]=[A[oe],A[oe+1]];if(ke-se<.01)continue;let[Ne,qe]=[(H+G)/2,(se+ke)/2];if(S.some(ye=>Ne>ye.s0&&Ne<ye.s1&&qe>ye.y0&&qe<ye.y1))continue;let[J,ie]=[Math.min(ke,D(H)),Math.min(ke,D(G))];J<=se+.005&&ie<=se+.005||a.add(R(H,se),R(G,se),R(G,Math.max(se,ie)),R(H,Math.max(se,J)),[L[0],0,L[1]],P,se>=u-1e-6?v:Xi+v)}}}}});let h=[];for(let f of n.filter(d=>d.opening.type==="door")){let d=e.find(x=>Ug(x,f));if(!d?.roomLeft||!d.roomRight)continue;let[m,g]=[i.rooms.findIndex(x=>x.id===d.roomLeft),i.rooms.findIndex(x=>x.id===d.roomRight)];m<0||g<0||h.push({id:f.opening.id,a:m,b:g,x:f.start[0]+f.axis[0]*(f.width/2),y:Math.min(1.1,f.top*.55),z:f.start[1]+f.axis[1]*(f.width/2)})}return a.finish(h)}function T2(i,e){let t=Math.max(0,-e),n=Math.max(0,e);switch(i){case"ceiling":return .3+.7*t;case"spot":return .06+.94*t**5;case"pendant":return .25+.85*t**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(e);default:return 1}}function A2(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Bg(i,e,t){let[n,r,s]=[e[0]-i.x,e[1]-i.y,e[2]-i.z],o=n*n+r*r+s*s,a=Math.sqrt(o)||1e-6,l=A2(i),c=1/(1+o/(l*l)),u=c*Math.sqrt(c),h=Math.max(0,-(n*t[0]+r*t[1]+s*t[2])/a);return i.level*u*(.2+.8*h)*T2(i.kind,r/a)}function E2(i,e,t){let n=[];return i.doors.forEach((r,s)=>{let o=t[s]??.5;if(!(o<=.01))for(let[a,l]of[[r.a,r.b],[r.b,r.a]]){let c=[0,0,0];for(let h of e.filter(f=>f.room===a)){let f=[h.x-r.x,h.y-r.y,h.z-r.z],d=Math.hypot(...f)||1,m=Bg(h,[r.x,r.y,r.z],[f[0]/d,f[1]/d,f[2]/d]);for(let g=0;g<3;g++)c[g]+=h.color[g]*m}let u=Math.max(...c);u<.01||n.push({x:r.x,y:r.y,z:r.z,color:[c[0]/u,c[1]/u,c[2]/u],level:Math.min(1,u*.9*(.35+.65*o)),kind:"wall",room:l})}}),n}function $f(i,e,t=.7,n=[]){let r=new Map;for(let c of[...e,...E2(i,e,n)]){let u={...c,color:c.color.map(h=>h**1.5)};r.set(c.room,[...r.get(c.room)??[],u])}let{pos:s,normal:o,room:a}=i,l=new Float32Array(s.length);for(let c=0;c<a.length;c++){let u=r.get(a[c]);if(!u)continue;let h=c*3,f=[0,0,0];for(let d of u){let m=Bg(d,[s[h],s[h+1],s[h+2]],[o[h],o[h+1],o[h+2]]);for(let g=0;g<3;g++)f[g]+=d.color[g]*m}for(let d=0;d<3;d++)l[h+d]=1-Math.exp(-f[d]*t*1.6)}return l}function Zf(i,e,t){let n=i.rooms.findIndex(r=>r.points.length>=3&&ft([e,t],r.points));return n<0?i.rooms.length:n}var Jf=(i,e)=>i&&e>=0&&e<i.length?i[e]:e;var R2=Math.PI/180,C2=[.3,.3,.3],I2=[-1/3,0,1/3],kg=.55;function zg(i,e,t,n){let r=[];for(let s of t){let o=n(s);if(s.floorId!==i.id||!o)continue;let a=Jf(e,Zf(i,s.x,s.z)),[l,,c]=s.size??(s.lamp?jr[s.lamp]:C2),u=s.base??0,[h,f]=s.lamp?Mg(s.lamp,i.height,u,c):[s.y,"omni"],d=s.lightY??h,{color:m,level:g}=o;if(s.lamp!=="strip"){r.push({x:s.x,y:d,z:s.z,color:m,level:g,kind:f,room:a});continue}let x=(s.rotation??0)*R2,p=!!s.upright||Math.abs(s.roll??0)>45;for(let y of I2)s.upright?r.push({x:s.x,y:u+l*(.5+y),z:s.z,color:m,level:g*kg,kind:"omni",room:a}):r.push({x:s.x+Math.cos(x)*l*y,y:d,z:s.z+Math.sin(x)*l*y,color:m,level:g*kg,kind:p?"omni":f,room:a})}return r}function Vg(i,e,t="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=e.standing,n.uniforms.uGlass=e.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`nf-fold-${t}`,i}var Gg=["neon","blueprint","day"];var Hg=i=>Gg.indexOf(i),su={value:new O(.22,.88,1)},ou={value:0};function Wg(i){let e=/^#?([0-9a-f]{6})$/i.exec(i?.trim()??"");if(!e)return null;let t=Number.parseInt(e[1],16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}var P2=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 nfThemed(vec3 c, bool isLine) {
  float strongest = max(c.r, max(c.g, c.b));
  float weakest = min(c.r, min(c.g, c.b));
  float saturation = strongest > 0.0 ? (strongest - weakest) / strongest : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    bool cyanish = saturation > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6;
    if (uAccentOn == 1 && (isLine || cyanish)) return uAccent * strongest;
    return c;
  }
  // signal colours keep their colour
  if (!isLine && strongest > 0.45 && saturation > 0.45) return c;
  float luma = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: pale lines on shades of blue
    if (isLine) return vec3(0.8, 0.9, 1.0) * min(1.0, strongest * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(luma * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a trace of their hue, dark blue lines
  if (isLine) return vec3(0.08, 0.17, 0.38) * clamp(strongest * 1.4, 0.4, 1.0);
  vec3 grey = vec3(clamp(0.66 + luma * 2.6, 0.0, 0.96));
  return mix(grey, grey * (c / max(strongest, 0.001)), 0.1);
}
`;function ri(i,e,t=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),Object.assign(s.uniforms,{uTheme:e,uAccent:su,uAccentOn:ou}),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${P2}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = nfThemed(diffuseColor.rgb, ${t});`)},i.customProgramCacheKey=()=>`${r()}-themed-${t?"l":"s"}`,i}var Ea=i=>i==="day"?vi:St;var L2=`#include <common>
attribute vec2 tile;
varying vec2 vNfTile;`,F2=`#include <begin_vertex>
vNfTile = tile;`,D2=`#ifdef USE_MAP
        vec2 nfCell = fract(vMapUv);
        vec2 nfUv = (vNfTile + 0.004 + nfCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, nfUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`;function O2(i){let e=new lt({map:i,transparent:!0,blending:St,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return e.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",L2).replace("#include <begin_vertex>",F2),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vNfTile;`).replace("#include <map_fragment>",D2)},e.customProgramCacheKey=()=>"nf-pattern",e}var au=(i={})=>new lt({vertexColors:!0,transparent:!0,blending:St,depthWrite:!1,...i});function Xg({mask:i,look:e,theme:t,textures:n}){let r=(o={})=>new lt({vertexColors:!0,...o}),s=(o,a)=>Vg(o,i,a);return{floor:ri(r(),e),pattern:O2(n.pattern),wall:ri(s(r(),"solid"),e),glassWall:s(r({transparent:!0,depthWrite:!1}),"glass"),shadow:r({blending:ia,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:_t,polygonOffset:!0,polygonOffsetFactor:-1}),lines:ri(s(new Ot({vertexColors:!0,transparent:!0,blending:Ea(t),depthWrite:!1})),e,!0),glow:s(au({side:_t,polygonOffset:!0,polygonOffsetFactor:-3}),"solid"),frames:ri(s(r({side:_t})),e),glass:s(au({side:_t})),blinds:ri(s(r({map:n.blinds,side:_t})),e),lamps:ri(r(),e),halos:new _n({map:n.halo,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:St,depthWrite:!1}),cones:au({side:_t}),screens:au({side:_t})}}var lu=i=>Object.assign(document.createElement("span"),{className:i});function qg(i,e){let t=Object.assign(document.createElement("button"),{className:"nf-dev"});t.dataset.entity=i,t.append(lu("nf-dev-icon"),lu("nf-dev-text"),lu("nf-dev-watt"),lu("nf-dev-name"));let n,r=!1,s=a=>{let{x:l,y:c}=e.centre(t);a(i,l,c)},o=()=>clearTimeout(n);t.addEventListener("pointerdown",a=>{if(e.furnishing())return e.pressedWhileFurnishing(i);a.stopPropagation(),r=!1,o(),n=setTimeout(()=>{r=!0,s(e.hold)},500)});for(let a of["pointerleave","pointercancel","pointerup"])t.addEventListener(a,o);return t.addEventListener("contextmenu",a=>a.preventDefault()),t.addEventListener("click",a=>{if(a.stopPropagation(),e.furnishing())return e.selectWhileFurnishing(i);r||s(e.tap)}),t.addEventListener("keydown",a=>{(a.key==="Enter"&&a.shiftKey||a.key==="ContextMenu")&&(a.preventDefault(),s(e.hold))}),t}var qi=1e-4;function Yg(i){return i.reduce((e,t,n)=>e+An(t,i[(n+1)%i.length]),0)/2}var Kg=i=>Yg(i)>=0?[...i]:[...i].reverse();function $g(i,e,t,n){let r=ut(e,i),s=ut(n,t),o=An(r,s);if(Math.abs(o)<1e-12)return null;let a=An(ut(t,i),s)/o,l=An(ut(t,i),r)/o;return a>qi&&a<1-qi&&l>-qi&&l<1+qi?a:null}function jf(i,e,t){let n=ut(t,e),r=Tn(n,n);if(r<1e-12)return null;let s=Tn(ut(i,e),n)/r;return s<=qi||s>=1-qi?null:Math.abs(An(ut(i,e),n))/Math.sqrt(r)<qi?s:null}var Ra=(i,e,t=qi)=>zn(ut(i,e))<t,Ca=i=>i.map((e,t)=>[e,i[(t+1)%i.length]]);function N2(i,e){for(let[t,n]of Ca(i))for(let[r,s]of Ca(e))if($g(t,n,r,s)!==null||jf(r,t,n)!==null||jf(t,r,s)!==null||Ra(t,r))return!0;return ft(i[0],e)||ft(e[0],i)}function U2(i){let e=i.map(Kg),t=[];e.forEach((s,o)=>{for(let[a,l]of Ca(s)){let c=[0,1];e.forEach((u,h)=>{if(h!==o)for(let[f,d]of Ca(u)){let m=$g(a,l,f,d)??jf(f,a,l);m!==null&&c.push(m)}}),c.sort((u,h)=>u-h);for(let u=1;u<c.length;u++){if(c[u]-c[u-1]<qi)continue;let h=[a[0]+(l[0]-a[0])*c[u-1],a[1]+(l[1]-a[1])*c[u-1]],f=[a[0]+(l[0]-a[0])*c[u],a[1]+(l[1]-a[1])*c[u]],d=zn(ut(f,h)),m=[(h[0]+f[0])/2+(f[1]-h[1])/d*.001,(h[1]+f[1])/2-(f[0]-h[0])/d*.001];e.some((g,x)=>x!==o&&ft(m,g))||t.some(([g,x])=>Ra(g,h)&&Ra(x,f))||t.push([h,f])}}});let n=[],r=new Set;return t.forEach(([s,o],a)=>{if(r.has(a))return;r.add(a);let l=[s],c=o;for(let u=0;u<t.length&&!Ra(c,l[0],.001);u++){let h=t.findIndex(([f],d)=>!r.has(d)&&Ra(f,c,.001));if(h<0)break;r.add(h),l.push(t[h][0]),c=t[h][1]}l.length>=3&&Yg(l)>1e-6&&n.push(l)}),n}function Qf(i){let e=i.filter(s=>s.length>=3),t=e.map((s,o)=>o),n=s=>t[s]===s?s:t[s]=n(t[s]);e.forEach((s,o)=>{for(let a=o+1;a<e.length;a++)n(o)!==n(a)&&N2(s,e[a])&&(t[n(a)]=n(o))});let r=new Map;return e.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:U2(s))}function B2(i,e,t){let n=ut(t,e),r=Tn(n,n),s=r?Math.max(0,Math.min(1,Tn(ut(i,e),n)/r)):0;return zn(ut(i,[e[0]+n[0]*s,e[1]+n[1]*s]))}function Zg(i,e,t=.03){return i.every(n=>ft(n,e)||Ca(e).some(([r,s])=>B2(n,r,s)<=t))}function Jg(i,e){let t=Kg(i),n=(r,s)=>{let o=ut(s,r),a=zn(o)||1;return[-o[1]/a,o[0]/a]};return t.map((r,s)=>{let o=n(t[(s-1+t.length)%t.length],r),a=n(r,t[(s+1)%t.length]),l=1+Tn(o,a);return l<.1?r:[r[0]+(o[0]+a[0])/l*e,r[1]+(o[1]+a[1])/l*e]})}var so=i=>{let e=Math.hypot(i[0],i[1])||1;return[i[0]/e,i[1]/e]};function Qr(i){return i.reduce((t,n,r)=>t+n[0]*i[(r+1)%i.length][1]-i[(r+1)%i.length][0]*n[1],0)>=0?i:[...i].reverse()}function jg(i,e){let t=[];return i.forEach((n,r)=>{let s=i[(r+1)%i.length],[o,a]=[e(n),e(s)];if(o>=0&&t.push(n),o>=0!=a>=0){let l=o/(o-a);t.push([n[0]+(s[0]-n[0])*l,n[1]+(s[1]-n[1])*l])}}),t}function td(i,e,t,n,r){let s=a=>(a[0]-e[0])*t[0]+(a[1]-e[1])*t[1],o=i;return Number.isFinite(n)&&(o=jg(o,a=>s(a)-n)),Number.isFinite(r)&&(o=jg(o,a=>r-s(a))),o}var Qg=i=>Math.round(i*1e3),Ia=i=>`${Qg(i[0])},${Qg(i[1])}`,ed=(i,e)=>{let[t,n]=[Ia(i),Ia(e)];return t<n?`${t}|${n}`:`${n}|${t}`};function k2(i,e){let t=[];return i.forEach((n,r)=>{let s=i[(r+1)%i.length],[o,a]=[s[0]-n[0],s[1]-n[1]],l=o*o+a*a;if(l<1e-8)return;let c=e.map(h=>({t:((h[0]-n[0])*o+(h[1]-n[1])*a)/l,off:Math.abs((h[0]-n[0])*a-(h[1]-n[1])*o)/Math.sqrt(l)})).filter(({t:h,off:f})=>h>1e-6&&h<1-1e-6&&f<1e-4).map(({t:h})=>h).sort((h,f)=>h-f),u=n;for(let h of c){let f=[n[0]+o*h,n[1]+a*h];Ia(f)!==Ia(u)&&t.push([u,f]),u=f}t.push([u,s])}),t}function nd(i,e){let t=i.map(l=>({wall:l,edges:k2(l.footprint,e)})),n=new Map;for(let{edges:l}of t)for(let[c,u]of l)n.set(ed(c,u),(n.get(ed(c,u))??0)+1);let r=[],s=new Map,o=(l,c,u)=>{let h=Ia(l);s.has(h)||s.set(h,{p:l,wall:c,d:[]}),s.get(h).d.push(u)};for(let{wall:l,edges:c}of t)for(let[u,h]of c){let f=Math.hypot(h[0]-u[0],h[1]-u[1]);if(n.get(ed(u,h))!==1||f<1e-4)continue;r.push({a:u,b:h,wall:l});let d=[(h[0]-u[0])/f,(h[1]-u[1])/f];o(u,l,d),o(h,l,d)}let a=[...s.values()].filter(({d:l})=>l.some(c=>l.some(u=>Math.abs(c[0]*u[1]-c[1]*u[0])>.05))).map(({p:l,wall:c})=>({p:l,wall:c}));return{edges:r,corners:a}}function oo(i,e){if(e.length===0)return[[i.a,i.b]];let t=so([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=so([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(t[0]*n[0]+t[1]*n[1])<.99)return[[i.a,i.b]];let r=c=>(c[0]-i.wall.a[0])*t[0]+(c[1]-i.wall.a[1])*t[1],[s,o]=[r(i.a),r(i.b)],a=[[Math.min(s,o),Math.max(s,o)]];for(let c of e)a=a.flatMap(([u,h])=>{if(c.s1<=u||c.s0>=h)return[[u,h]];let f=[];return c.s0>u&&f.push([u,c.s0]),c.s1<h&&f.push([c.s1,h]),f});let l=c=>{let u=(c-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*u,i.a[1]+(i.b[1]-i.a[1])*u]};return a.filter(([c,u])=>u-c>1e-4).map(([c,u])=>s<=o?[l(c),l(u)]:[l(u),l(c)])}var Pe={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},je=(i,e=i)=>({side:i,top:e}),j={body:je(Pe.body,Pe.bodyTop),fabric:je(Pe.fabric,Pe.fabricTop),cushion:je(Pe.cushion),cushionSoft:je(Pe.cushion,Pe.fabricTop),wood:je(Pe.wood,Pe.woodTop),white:je(Pe.white,Pe.whiteTop),worktop:je(Pe.whiteTop),metal:je(Pe.metal),dark:je(Pe.dark),darkBody:je(Pe.dark,Pe.body),glass:je(Pe.glass),accent:je(Pe.accent),pot:je(Pe.pot),plant:je(Pe.plant,Pe.plantTop),bedding:je(Pe.white,Pe.whiteTop),pillow:je(Pe.whiteTop)};var xe=Oe(5995775,.3),Qe=Oe(5995775,.17),Xe=Oe(3662079,.45);function ex(i){let e=i(0,0),t=i(1,0),n=i(0,1);return(t[0]-e[0])*(n[1]-e[1])-(t[1]-e[1])*(n[0]-e[0])<0}function Pa(i,e){let t=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let[a,l]=[r+s+o,r+2*s+o];[n[a],n[l]]=[n[l],n[a]]}};for(let n=e;n<i.p.length;n+=9){let r=n/9;t(i.p,n,3),t(i.c,n,3),t(i.f,r*3,1),t(i.uv,r*6,2),t(i.tile,r*6,2)}}var br=class i{mirrored;buf;lines;plan;constructor(e,t,n){this.buf=e,this.lines=t,this.plan=n,this.mirrored=ex(n)}turned(e,t,n){let[r,s]=[Math.cos(n*ht),Math.sin(n*ht)];return new i(this.buf,this.lines,(o,a)=>this.plan(e+(o-e)*r-(a-t)*s,t+(o-e)*s+(a-t)*r))}seg(e,t,n,r,s,o,a=xe){this.edge(this.plan(e,n),this.plan(r,o),t,s,a)}edge(e,t,n,r,s){this.lines.seg([e[0],n,e[1]],[t[0],r,t[1]],s,Ze)}block({x:[e,t],y:[n,r],z:[s,o]},a,l=null){if(t-e<1e-4||o-s<1e-4||r-n<1e-4)return;let c=[this.plan(e,s),this.plan(e,o),this.plan(t,o),this.plan(t,s)];Pt(this.buf,Qr(c),n,r,a.side,a.top,{aoFrom:0,bottom:n>.05}),l&&c.forEach((u,h)=>{this.edge(u,c[(h+1)%4],r,r,l),this.edge(u,u,n,r,l)})}loft(e,t,n,r,s,o=null){if(r-n<1e-4)return;let a=u=>[this.plan(u[0],u[2]),this.plan(u[0],u[3]),this.plan(u[1],u[3]),this.plan(u[1],u[2])],l=a(e),c=a(t);if(l!==Qr(l)&&(l.reverse(),c.reverse()),zf(this.buf,l,c,n,r,s.side,s.top),o)for(let u=0;u<4;u++)this.edge(c[u],c[(u+1)%4],r,r,o),this.edge(l[u],c[u],n,r,o)}sweep(e,t,n=16,r=2.6,s=null){if(e.length<2)return;let o=e.map(a=>{let[l,c]=[Math.max(.004,(a.y1-a.y0)/2),Math.max(.004,a.hw)],u=(a.y0+a.y1)/2;return Array.from({length:n},(h,f)=>{let d=f/n*Math.PI*2,[m,g]=[Math.cos(d),Math.sin(d)],[x,p]=this.plan(a.x+c*Math.sign(m)*Math.abs(m)**(2/r),a.z);return[x,u+l*Math.sign(g)*Math.abs(g)**(2/r),p]})});if(Vf(this.buf,o,t.side,t.top),s){let a=Math.round(n/4);for(let l=0;l+1<o.length;l++)this.lines.seg(o[l][a],o[l+1][a],s,Ze)}}pad(e,t,n=.03,r=null){let{x:[s,o],y:[a,l],z:[c,u]}=e,h=Math.min(n,(o-s)/2-.005,(u-c)/2-.005,(l-a)/2);if(h<.008)return this.block(e,t,r);let f={side:t.side,top:t.side};this.loft([s+h,o-h,c+h,u-h],[s,o,c,u],a,a+h,f),l-a-2*h>.005&&this.block({x:[s,o],y:[a+h,l-h],z:[c,u]},f,r),this.loft([s,o,c,u],[s+h,o-h,c+h,u-h],l-h,l,t)}lyingCylinder(e,t,n,r,s,o,a,l,c=12,u=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let f=(r+s)/2,[d,m]=e==="x"?[t,n]:[n,t],g=(p,y)=>e==="x"?this.plan(p,y):this.plan(y,p),x=this.buf.p.length;if(Gf(this.buf,g,d-o/2,d+o/2,m,f,h,l.side,l.top,c),this.mirrored&&Pa(this.buf,x),!!u)for(let p of[d-o/2,d+o/2])for(let y=0;y<c;y++){let[_,b]=[y/c*Math.PI*2,(y+1)/c*Math.PI*2];this.edge(g(p,m+Math.sin(_)*h),g(p,m+Math.sin(b)*h),f+Math.cos(_)*h,f+Math.cos(b)*h,u)}}cylinder(e,t,n,r,s,o,a=10,l=null){let c=Array.from({length:a},(u,h)=>this.plan(e+Math.cos(h/a*Math.PI*2)*n,t+Math.sin(h/a*Math.PI*2)*n));Pt(this.buf,Qr(c),r,s,o.side,o.top,{aoFrom:0,bottom:r>.05}),l&&c.forEach((u,h)=>this.edge(u,c[(h+1)%a],s,s,l))}ring(e,t,n,r,s=20,o=xe){for(let a=0;a<s;a++){let[l,c]=[a/s*Math.PI*2,(a+1)/s*Math.PI*2];this.seg(e+Math.cos(l)*n,t+Math.sin(l)*n,r,e+Math.cos(c)*n,t+Math.sin(c)*n,r,o)}}};function tx(i,e,t,n,r){let s=Math.min(.14,Math.max(.06,Math.min(t,n)*.15)),o=new K(1-r,1-r,1-r),a=new K(1,1,1),l=.003,c=m=>[e(-t/2-m,-n/2-m),e(t/2+m,-n/2-m),e(t/2+m,n/2+m),e(-t/2-m,n/2+m)],[u,h]=[c(0),c(s)],f=m=>[m[0],l,m[1]],d=i.p.length;i.tri(f(u[0]),f(u[1]),f(u[2]),o),i.tri(f(u[0]),f(u[2]),f(u[3]),o);for(let m=0;m<4;m++){let g=(m+1)%4;i.tri(f(u[m]),f(h[m]),f(h[g]),o,a,a),i.tri(f(u[m]),f(h[g]),f(u[g]),o,a,o)}ex(e)&&Pa(i,d)}function Yi(i,e,t,n,r,s,o=Pe.metal,a=!1){let[l,c]=[e/2-s-r,t/2-s-r],u=je(o);for(let h of[-1,1])for(let f of[-1,1]){let[d,m]=[h*l,f*c];a?i.loft([d-r*.3,d+r*.3,m-r*.3,m+r*.3],[d-r/2,d+r/2,m-r/2,m+r/2],0,n,u):i.block({x:[d-r/2,d+r/2],y:[0,n],z:[m-r/2,m+r/2]},u)}}function es(i,e,t,n,r,s,o,a=null,l=!1){let c=(t-e)/o;for(let u=1;u<o;u++)i.seg(e+c*u,n,s,e+c*u,r,s,Qe);for(let u=0;u<o;u++){let h=e+c*(u+.5),f=a??r-.08;if(l){let d=Math.min(.1,c/4);i.seg(h-d,f,s+.012,h+d,f,s+.012,Xe)}else{let d=o>1?h+(u%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,Xe)}}}function si(i,e,t,n,r,s=null,o=!1,a=j.body){i.block({x:[-e/2,e/2],y:[.02,n],z:[-t/2,t/2-.02]},a,xe),i.block({x:[-e/2+.02,e/2-.02],y:[0,.08],z:[-t/2+.02,t/2-.06]},je(Pe.dark)),es(i,-e/2,e/2,.08,n,t/2-.02,r,s,o)}function id(i,e,t,n,r){let[s,o,a,l]=[-e/2,e/2,-t/2,t/2],c=Math.min(.2,e*.12),u=n*.5,h=Math.min(.24,t*.28);Yi(i,e,t,.07,.05,.05,Pe.wood,!0),i.pad({x:[s,o],y:[.07,u-.08],z:[a+.02,l]},j.fabric,.04,xe),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],u-.08,n,j.fabric,xe);for(let[d,m]of[[s,s+c],[o-c,o]])i.pad({x:[d,m],y:[u-.08,n*.72],z:[a+.02,l-.02]},j.fabric,.04,xe);let f=(o-c-(s+c))/r;for(let d=0;d<r;d++){let m=s+c+f*d+.02,g=m+f-.04;i.pad({x:[m,g],y:[u-.08,u+.05],z:[a+h+.02,l-.06]},j.cushion,.04),i.loft([m+.01,g-.01,a+h*.55,a+h+.14],[m+.03,g-.03,a+h*.4,a+h*.4+.06],u+.03,n*.93,j.cushion)}}function nx(i,e,t,n){let[r,s,o,a]=[-e/2,e/2,-t/2,t/2],l=Math.min(.32,n*.36);Yi(i,e,t,.08,.06,.03,Pe.wood,!0),i.block({x:[r,s],y:[.08,l],z:[o+.06,a]},j.wood,xe),i.pad({x:[r+.03,s-.03],y:[l,l+.2],z:[o+.08,a-.03]},j.bedding,.03),i.block({x:[r,s],y:[.08,n-.05],z:[o,o+.07]},j.wood,xe),i.block({x:[r,s],y:[n-.05,n],z:[o,o+.09]},j.wood,Qe);let c=l+.2,u=o+(t-.1)*.36;i.pad({x:[r+.01,s-.01],y:[c-.1,c+.05],z:[u,a-.01]},j.cushionSoft,.025,Qe),i.lyingCylinder("x",0,u+.05,c-.02,c+.09,e-.02,.1,j.cushionSoft,8);let h=e>1.2?2:1,f=(e-.2)/h;for(let d=0;d<h;d++){let m=r+.1+f*d,g=o+.12,x=Math.min(.42,t*.2),p=.1;i.loft([m+.03+p,m+f-.03-p,g+p*.5,g+x-p*.5],[m+.03,m+f-.03,g,g+x],c,c+.06,j.pillow),i.loft([m+.03,m+f-.03,g,g+x],[m+.03+p,m+f-.03-p,g+p*.5,g+x-p*.5],c+.06,c+.12,j.pillow,Qe)}}function ix(i,e,t,n){let r=Math.min(.46,n*.52);Yi(i,e,t,r-.04,.035,.02,Pe.wood,!0),i.block({x:[-e/2,e/2],y:[r-.04,r],z:[-t/2,t/2]},j.wood,xe),i.pad({x:[-e/2+.02,e/2-.02],y:[r,r+.04],z:[-t/2+.05,t/2-.03]},j.cushion,.015),i.loft([-e/2,e/2,-t/2+.02,-t/2+.07],[-e/2+.02,e/2-.02,-t/2,-t/2+.03],r,n,j.wood,xe)}function rx(i,e,t,n){let r=Math.min(e,t)/2;i.cylinder(0,0,r*.8,0,.02,j.metal,12),i.cylinder(0,0,.025,.02,n-.05,j.metal,6),i.cylinder(0,0,r*.75,n*.35,n*.35+.015,j.metal,12,Qe),i.cylinder(0,0,r,n-.05,n,j.cushionSoft,14,xe)}function sx(i,e,t,n){let r=Math.min(e,t)/2;i.block({x:[-r,r],y:[.04,.08],z:[-.03,.03]},j.metal),i.block({x:[-.03,.03],y:[.04,.08],z:[-r,r]},j.metal),i.cylinder(0,0,.06,.02,.1,j.dark,8),i.cylinder(0,0,.025,.1,.44,j.metal,6),i.block({x:[-r*.75,r*.75],y:[.44,.52],z:[-r*.7,r*.75]},je(Pe.fabric,Pe.cushion),xe),i.block({x:[-r*.7,r*.7],y:[.58,n],z:[-r*.78,-r*.62]},j.fabric,xe),i.block({x:[-.03,.03],y:[.5,.62],z:[-r*.72,-r*.62]},j.metal)}function ox(i,e,t,n){Yi(i,e,t,.08,.04,.05,Pe.wood),i.block({x:[-e/2,e/2],y:[.08,n],z:[-t/2,t/2]},je(Pe.fabric,Pe.cushion),xe)}function rd(i,e,t,n,r){let o=Math.min(.5,r?t*.4:t),a=.08,l=je(Pe.cushion);i.block({x:[-e/2,e/2],y:[0,.45-.06],z:[-t/2,-t/2+o]},j.wood,xe),i.block({x:[-e/2,e/2],y:[0,n],z:[-t/2,-t/2+a]},j.wood,xe),i.block({x:[-e/2+(r?o:.02),e/2-.02],y:[.45-.06,.45+.02],z:[-t/2+a,-t/2+o]},l,Qe),r&&(i.block({x:[-e/2,-e/2+o],y:[0,.45-.06],z:[-t/2+o,t/2]},j.wood,xe),i.block({x:[-e/2,-e/2+a],y:[0,n],z:[-t/2+a,t/2]},j.wood,xe),i.block({x:[-e/2+a,-e/2+o],y:[.45-.06,.45+.02],z:[-t/2+a,t/2-.02]},l,Qe))}function ax(i,e,t,n){for(let o of[-1,1])for(let a of[-1,1])i.block({x:[o*(e/2)-(o>0?.05:0),o*(e/2)+(o<0?.05:0)],y:[0,n],z:[a*(t/2)-(a>0?.05:0),a*(t/2)+(a<0?.05:0)]},j.wood);for(let o of[.25,n-.55])i.block({x:[-e/2,e/2],y:[o,o+.08],z:[-t/2,t/2]},j.wood,xe),i.block({x:[-e/2+.04,e/2-.04],y:[o+.08,o+.24],z:[-t/2+.05,t/2-.05]},j.bedding,Qe),i.block({x:[-e/2+.05,e/2-.05],y:[o+.24,o+.33],z:[-t/2+.08,-t/2+.4]},j.pillow);i.block({x:[-e/2,e/2],y:[n-.2,n-.15],z:[t/2-.05,t/2]},j.wood);let s=e/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,t/2+.02,o,n-.15,t/2+.02,xe);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,t/2+.02,s+.18,o,t/2+.02,Qe)}var od=(i,e,t,n)=>i.block({x:[-e/2,e/2],y:[n-.04,n],z:[-t/2,t/2]},j.worktop,xe);function lx(i,e,t,n){si(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.6)),n-.2),od(i,e,t,n)}function cx(i,e,t,n){i.block({x:[-e/2,e/2],y:[Math.max(0,n-.04),n],z:[-t/2,t/2]},j.worktop,xe)}function ux(i,e,t,n){i.block({x:[-e/2,e/2],y:[0,n],z:[-t/2,t/2]},j.white,xe);let r=n*.62;i.seg(-e/2,r,t/2,e/2,r,t/2,Qe);let s=e/2-.06;i.seg(s,r+.08,t/2+.015,s,r+.4,t/2+.015,Xe),i.seg(s,r-.4,t/2+.015,s,r-.08,t/2+.015,Xe)}var ad=.06;function hx(i,e,t,n){let r=t/2-ad;i.block({x:[-e/2,e/2],y:[.02,n],z:[-t/2,r]},j.body,xe),i.block({x:[-e/2+.05,e/2-.05],y:[0,.02],z:[-t/2+.05,r-.05]},j.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-e/2+.03,s,r+.001,-.03,s,r+.001,Qe),i.seg(.03,s,r+.001,e/2-.03,s,r+.001,Qe))}var sd=1.83;function z2(i,e,t,n,r){let[s,o]=[Math.cos(e.rotation*ht),Math.sin(e.rotation*ht)],a=e.mirror?-1:1,l=(y,_)=>[e.x+a*y*s-_*o,e.z+a*y*o+_*s],[c,u]=[t+.05,t+e.h-.02],h=new K(.75,.1,.14),f=new K(Pe.dark),d=new K(Pe.accent),m=e.w/2-.006,g=(y,_,b)=>{let v=b/sd,S=new K(2043212).lerp(h,v),A=new K(Pe.body).lerp(h,v*.8),[M,T]=[Math.cos(b),Math.sin(b)],C=(L,R)=>l(y+_*(L*M-R*T),e.d/2+L*T+R*M),P=(L,R,D,N)=>{let[B,X,z,H]=L;i.tri([B[0],R,B[1]],[X[0],R,X[1]],[z[0],D,z[1]],N),i.tri([B[0],R,B[1]],[z[0],D,z[1]],[H[0],D,H[1]],N)},F=(L,R,D,N,B,X,z,H=z)=>{let G=[C(L,X),C(R,X),C(R,B),C(L,B)];P([G[0],G[1],G[1],G[0]],D,N,H),P([G[3],G[2],G[2],G[3]],D,N,z),P([G[0],G[3],G[3],G[0]],D,N,z),P([G[1],G[2],G[2],G[1]],D,N,z),P([G[0],G[1],G[2],G[3]],N,N,z),P([G[3],G[2],G[1],G[0]],D,D,z)};return F(0,m,c,u,-ad,0,A,S),F(m-.05,m-.03,t+e.h*.45,t+e.h*.75,.005,.025,d),F};g(-e.w/2,1,n*sd)(.12,.3,t+e.h*.5,t+e.h*.68,.001,.005,f),g(e.w/2,-1,r*sd)(.06,m-.06,t+e.h*.52,t+e.h*.86,.001,.005,f)}function ld(i,e,t,n,r){let s=i.p.length;z2(i,e,t,n,r),e.mirror&&Pa(i,s)}function fx(i,e,t,n){si(i,e,t-.02,n-.04,1,n-.24,!0),i.block({x:[-e/2,e/2],y:[n-.04,n],z:[-t/2,t/2]},j.dark,xe);let r=[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]];for(let[s,o,a]of r)i.cylinder(s*e/.6,o*t/.62,a,n,n+.004,je(Pe.dark,1451583),12,Xe)}function dx(i,e,t,n){si(i,e,t-.02,n-.04,Math.max(1,Math.round(e/.45)),n-.2);let r=Math.min(.5,e-.2),s=(o,a,l,c,u=!1)=>i.block({x:[o,a],y:[n-.04,n],z:[l,c]},j.worktop,u?xe:null);s(-e/2,-r/2,-t/2,t/2,!0),s(r/2,e/2,-t/2,t/2,!0),s(-r/2,r/2,-t/2,-t/2+.1),s(-r/2,r/2,t/2-.08,t/2),i.block({x:[-r/2,r/2],y:[n-.2,n-.17],z:[-t/2+.1,t/2-.08]},j.metal,Xe),i.cylinder(0,-t/2+.05,.02,n,n+.28,j.metal,8),i.block({x:[-.015,.015],y:[n+.24,n+.28],z:[-t/2+.05,-t/2+.22]},j.metal)}function px(i,e,t,n){i.block({x:[-e/2,e/2],y:[1.45,1.45+n],z:[-t/2,t/2-.02]},j.body,xe),es(i,-e/2,e/2,1.45,1.45+n,t/2-.02,Math.max(1,Math.round(e/.5)),1.45+.08)}function mx(i,e,t,n){i.block({x:[-e/2,e/2],y:[.02,n],z:[-t/2,t/2-.02]},j.body,xe),i.block({x:[-e/2+.02,e/2-.02],y:[0,.08],z:[-t/2+.02,t/2-.06]},j.dark);let r=t/2-.02;i.block({x:[-e/2+.03,e/2-.03],y:[.85,1.45],z:[r,r+.01]},j.dark,Xe),i.seg(-e/2+.08,1.4,r+.02,e/2-.08,1.4,r+.02,Xe);for(let s of[.85,1.45])i.seg(-e/2,s,r,e/2,s,r,Qe);i.seg(e/2-.06,.5,r+.012,e/2-.06,.7,r+.012,Xe),i.seg(e/2-.06,1.6,r+.012,e/2-.06,1.8,r+.012,Xe)}function gx(i,e,t,n){let r=t-.3;i.block({x:[-e/2+.05,e/2-.05],y:[.08,n-.04],z:[-t/2+.02,-t/2+r]},j.body,xe),i.block({x:[-e/2+.07,e/2-.07],y:[0,.08],z:[-t/2+.04,-t/2+r-.04]},j.dark),es(i,-e/2+.05,e/2-.05,.08,n-.04,-t/2+r,Math.max(2,Math.round(e/.6)),n-.2),od(i,e,t,n)}function xx(i,e,t,n){i.block({x:[-e/2,e/2],y:[.02,n-.04],z:[-t/2,t/2-.02]},j.body,xe),i.block({x:[-e/2+.02,e/2-.02],y:[0,.08],z:[-t/2+.02,t/2-.06]},j.dark),i.seg(-e/2+.08,n-.12,t/2-.008,e/2-.08,n-.12,t/2-.008,Xe),od(i,e,t,n)}function cd(i,e,t,n,r){i.block({x:[-e/2,e/2],y:[0,n],z:[-t/2,t/2-.02]},j.white,xe);let s=t/2-.012;i.seg(-e/2,n-.14,s,e/2,n-.14,s,Qe),i.seg(e/2-.16,n-.07,s,e/2-.08,n-.07,s,Xe);let o=(n-.14)/2+.04,a=Math.min(e*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let[u,h]=[c/l*Math.PI*2,(c+1)/l*Math.PI*2],f=(d,m)=>i.seg(Math.cos(u)*a*d,o+Math.sin(u)*a*d,s,Math.cos(h)*a*d,o+Math.sin(h)*a*d,s,m);f(1,Xe),r||f(.72,Qe)}}function bx(i,e,t,n){i.block({x:[-e/2,e/2],y:[0,n-.02],z:[-t/2,t/2]},j.white,xe);let s=(o,a,l,c)=>i.block({x:[o,a],y:[n-.02,n],z:[l,c]},j.worktop);s(-e/2,e/2,-t/2,-t/2+.07),s(-e/2,e/2,t/2-.07,t/2),s(-e/2,-e/2+.07,-t/2+.07,t/2-.07),s(e/2-.07,e/2,-t/2+.07,t/2-.07),i.block({x:[-e/2+.07,e/2-.07],y:[n-.03,n-.02],z:[-t/2+.07,t/2-.07]},j.glass,Xe),i.cylinder(-e/2+.04,0,.02,n,n+.12,j.metal,8)}function yx(i,e,t,n){i.block({x:[-e/2,e/2],y:[0,.05],z:[-t/2,t/2]},j.worktop,xe),i.cylinder(0,0,.04,.05,.052,j.metal,8);for(let[r,s,o,a]of[[-e/2,t/2,e/2,t/2],[e/2,-t/2,e/2,t/2]])i.seg(r,.05,s,o,.05,a,Xe),i.seg(r,n,s,o,n,a,Xe),i.seg(o,.05,a,o,n,a,Xe);i.cylinder(-e/2+.06,-t/2+.06,.015,.05,n-.05,j.metal,6),i.cylinder(-e/2+.2,-t/2+.2,.1,n-.08,n-.06,j.metal,12,Xe)}function _x(i,e,t,n){let r=Math.min(.18,t*.3);i.block({x:[-e/2,e/2],y:[.45,n],z:[-t/2,-t/2+r]},j.white,xe),i.block({x:[-e*.3,e*.3],y:[0,.36],z:[-t/2+r-.02,t/2-.12]},j.white),i.cylinder(0,t/2-.26,Math.min(e/2,.19),.36,.41,j.white,12,xe),i.block({x:[-e/2+.02,e/2-.02],y:[.41,.43],z:[-t/2+r,-t/2+r+.05]},j.worktop)}function vx(i,e,t,n){si(i,e,t-.02,n-.12,e>.8?2:1,n-.3),i.block({x:[-e/2,e/2],y:[n-.12,n],z:[-t/2,t/2]},j.white,xe),i.block({x:[-e/2+.07,e/2-.07],y:[n-.005,n],z:[-t/2+.12,t/2-.06]},j.glass,Xe),i.cylinder(0,-t/2+.06,.018,n,n+.2,j.metal,8),i.block({x:[-e/2+.04,e/2-.04],y:[n+.35,n+1],z:[-t/2,-t/2+.02]},j.glass,Xe)}var La=.12;function Mx(i,e,t,n){let r=La;i.block({x:[-e/2+.05,-e/2+.08],y:[0,r],z:[-t/2,-t/2+.03]},j.metal),i.block({x:[e/2-.08,e/2-.05],y:[0,r],z:[-t/2,-t/2+.03]},j.metal),i.block({x:[-e/2,e/2],y:[r,r+n],z:[-t/2+.02,t/2]},j.white,xe);let s=Math.max(3,Math.round(e/.1));for(let o=1;o<s;o++){let a=-e/2+e/s*o;i.seg(a,r+.03,t/2+.002,a,r+n-.03,t/2+.002,Qe)}}function Sx(i,e,t,n){Yi(i,e,t,n-.04,.06,.05,Pe.wood,!0),i.block({x:[-e/2,e/2],y:[n-.04,n],z:[-t/2,t/2]},j.wood,Xe),i.block({x:[-e/2+.08,e/2-.08],y:[n-.1,n-.04],z:[-t/2+.08,t/2-.08]},je(Pe.body))}function wx(i,e,t,n){let r=Math.min(e,t)/2;i.cylinder(0,0,r*.4,0,.03,j.metal,12),i.cylinder(0,0,.05,.03,n-.04,je(Pe.wood),8),i.cylinder(0,0,r,n-.04,n,j.wood,20,xe)}function Tx(i,e,t,n){Yi(i,e,t,n-.03,.04,.03,Pe.wood),i.block({x:[-e/2,e/2],y:[n-.03,n],z:[-t/2,t/2]},j.wood,xe),i.block({x:[-e/2+.05,e/2-.05],y:[.1,.13],z:[-t/2+.05,t/2-.05]},j.body,Qe)}function Ax(i,e,t,n){let[r,s]=[-e/2,e/2];i.block({x:[r,s],y:[n-.035,n],z:[-t/2,t/2]},j.wood,xe),i.block({x:[r,r+.03],y:[0,n-.035],z:[-t/2+.03,t/2-.03]},j.metal);let o=Math.min(.42,e*.32);i.block({x:[s-o,s],y:[0,n-.035],z:[-t/2+.03,t/2-.02]},j.body,xe);let a=t/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Qe);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Xe);i.block({x:[-.3,.3],y:[n+.08,n+.42],z:[-t/2+.08,-t/2+.11]},j.dark,Xe),i.block({x:[-.03,.03],y:[n,n+.1],z:[-t/2+.09,-t/2+.13]},j.metal)}function Ex(i,e,t,n){si(i,e,t,n,1,n*.72,!0),i.seg(-e/2,n*.5,t/2-.02,e/2,n*.5,t/2-.02,Qe)}function Rx(i,e,t,n){i.block({x:[-e/2,-e/2+.025],y:[0,n],z:[-t/2,t/2]},j.wood,xe),i.block({x:[e/2-.025,e/2],y:[0,n],z:[-t/2,t/2]},j.wood,xe),i.block({x:[-e/2+.025,e/2-.025],y:[0,n],z:[-t/2,-t/2+.015]},je(Pe.body));let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.block({x:[-e/2+.025,e/2-.025],y:[a,a+.025],z:[-t/2+.015,t/2]},j.wood,Qe),o===s)continue;let l=-e/2+.025+.04,c=o*3;for(;l<e/2-.025-.12;){let u=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.block({x:[l,l+u],y:[a+.025,a+.025+h],z:[-t/2+.04,t/2-.05]},c%3?j.fabric:je(Pe.cushion,Pe.fabricTop)),l+=u+.006,c++}}}function Cx(i,e,t,n){Yi(i,e,t,.12,.03,.04,Pe.metal),i.block({x:[-e/2,e/2],y:[.12,n],z:[-t/2,t/2-.02]},j.wood,xe),es(i,-e/2,e/2,.12,n,t/2-.02,Math.max(2,Math.round(e/.45)),n-.1,!0)}function Ix(i,e,t,n){i.block({x:[-e/2,e/2],y:[.06,n],z:[-t/2,t/2-.02]},j.wood,xe),i.block({x:[-e/2+.02,e/2-.02],y:[0,.06],z:[-t/2+.02,t/2-.06]},j.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=t/2-.02,o=(n-.06)/r;for(let a=1;a<r;a++)i.seg(-e/2,.06+o*a,s,e/2,.06+o*a,s,Qe);for(let a=0;a<r;a++)i.seg(-.08,.06+o*(a+.5),s+.012,.08,.06+o*(a+.5),s+.012,Xe)}function Px(i,e,t,n){i.block({x:[-e/2,e/2],y:[0,.45],z:[-t/2,t/2]},j.wood,xe),es(i,-e/2,e/2,.02,.45,t/2,Math.max(2,Math.round(e/.5)),.38,!0),i.block({x:[-e/2,e/2],y:[.45,n],z:[-t/2,-t/2+.03]},j.body,xe),i.block({x:[-e/2,e/2],y:[n-.04,n],z:[-t/2,t/2]},j.wood,xe);let r=Math.max(2,Math.round(e/.25));for(let s=0;s<r;s++){let o=-e/2+e/r*(s+.5);i.block({x:[o-.015,o+.015],y:[n-.32,n-.28],z:[-t/2+.03,-t/2+.1]},j.metal)}}function Lx(i,e,t,n){let r=Math.min(e,t)/2,s=Math.min(.4,n*.34);i.cylinder(0,0,r*.62,0,s,j.pot,10,xe),i.cylinder(0,0,r*.08,s,n*.55,je(Pe.wood),6);let o=4;for(let a=0;a<o;a++){let l=r*(.95-.55*(a/(o-1))),c=s+(n-s)*(.18+.2*a);i.cylinder(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,l,c,c+(n-s)*.16,j.plant,8,a===o-1?Qe:null)}}function Fx(i,e,t){i.block({x:[-e/2,e/2],y:[0,.012],z:[-t/2,t/2]},j.fabric);let n=Math.min(.12,Math.min(e,t)*.08),[r,s,o,a]=[-e/2+n,e/2-n,-t/2+n,t/2-n];for(let[l,c,u,h]of[[r,o,s,o],[s,o,s,a],[s,a,r,a],[r,a,r,o]])i.seg(l,.014,c,u,.014,h,xe)}function Dx(i,e,t,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=t/r;for(let u=0;u<r;u++){let h=t/2-o*u,f=s*(u+1);i.block({x:[-e/2,e/2],y:[0,f],z:[h-o,h]},j.wood),i.seg(-e/2,f,h,e/2,f,h,xe)}i.seg(-e/2,0,t/2,-e/2,s,t/2,xe);for(let u of[-e/2,e/2])i.seg(u,s,t/2,u,n,-t/2+o,Qe);let a=.9,l=e/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,t/2-o/2,l,s*c+a,t/2-o*(c-.5),Xe);for(let u=0;u<c;u+=3){let h=t/2-o*(u+.5);i.seg(l,s*(u+1),h,l,s*(u+1)+a,h,Qe)}}function Ox(i,e,t,n){si(i,e,t,n,Math.max(2,Math.round(e/.6)),n*.55,!0);let r=Math.min(e*.8,1.45);i.block({x:[-.1,.1],y:[n,n+.02],z:[-t/2+.08,-t/2+.24]},j.metal),i.block({x:[-.02,.02],y:[n+.02,n+.12],z:[-t/2+.14,-t/2+.18]},j.metal),i.block({x:[-r/2,r/2],y:[n+.1,n+.1+r*.56],z:[-t/2+.12,-t/2+.16]},j.dark,Xe)}function Nx(i,e,t,n){let r=1.3-n/2;i.block({x:[-.12,.12],y:[r+n*.3,r+n*.7],z:[-t/2,-t/2+.03]},j.metal),i.block({x:[-e/2,e/2],y:[r,r+n],z:[-t/2+.03,t/2]},j.dark,Xe)}function Ux(i,e,t,n,r){let o=t/2,a=l=>i.block({x:[-e/2,e/2],y:[1.1,1.1+n],z:[-t/2,t/2]},l,xe);if(r==="slim"){a(j.darkBody),i.seg(-e*.25,1.1+n*.15,o+.004,-e*.25,1.1+n*.85,o+.004,Xe),i.block({x:[-e*.1,e*.3],y:[1.1+n*.7,1.1+n*.85],z:[o,o+.005]},j.dark);return}if(a(j.white),r==="hybrid"){i.ring(0,1.1+n*.66,Math.min(e,n)*.22,o+.004,20,Xe),i.seg(-e*.08,1.1+n*.66,o+.005,e*.08,1.1+n*.66,o+.005,Xe);for(let l of[-1,1])i.ring(l*e*.22,1.1+n*.2,Math.min(e,n)*.1,-t/2-.002,12,Xe);return}i.block({x:[-e*.28,e*.28],y:[1.1+n*.58,1.1+n*.82],z:[t/2,t/2+.006]},j.dark),i.seg(-e*.3,1.1+n*.45,t/2+.004,e*.3,1.1+n*.45,t/2+.004,Xe);for(let l of[-1,1])for(let c=1;c<6;c++)i.seg(l*e/2+l*.002,1.1+n*c/6,-t/2+.03,l*e/2+l*.002,1.1+n*c/6,t/2-.03,Qe)}function Bx(i,e,t,n){i.block({x:[-e/2,e/2],y:[0,n],z:[-t/2,t/2]},j.darkBody,xe),i.block({x:[-e/2-.01,e/2+.01],y:[n,n+.03],z:[-t/2-.01,t/2+.01]},j.darkBody),i.seg(-e/2,n+.032,t/2+.01,e/2,n+.032,t/2+.01,Xe),i.seg(-e*.3,n*.55,t/2+.003,e*.3,n*.55,t/2+.003,Qe)}function kx(i,e,t,n){i.block({x:[-e/2,e/2],y:[1,1+n],z:[-t/2,t/2]},j.darkBody,xe),i.ring(0,1+n*.58,Math.min(e,n)*.28,t/2+.003,16,Xe),i.block({x:[-.015,.015],y:[1-.35,1],z:[t/2-.03,t/2]},j.dark),i.block({x:[-.06,.06],y:[1-.42,1-.35],z:[t/2-.05,t/2]},j.darkBody)}function zx(i,e,t,n){i.block({x:[-e/2,e/2],y:[.4,.4+n],z:[-t/2,t/2]},j.white,xe),i.seg(-e/2+.025,.4+.025,t/2+.003,-e/2+.025,.4+n-.025,t/2+.003,Qe),i.seg(-e/2+.025,.4+n-.025,t/2+.003,e/2-.025,.4+n-.025,t/2+.003,Qe),i.block({x:[e/2-.06,e/2-.035],y:[.4+n*.5-.05,.4+n*.5+.05],z:[t/2,t/2+.012]},j.dark),i.block({x:[-e*.3,e*.3],y:[.4+n*.6,.4+n*.8],z:[t/2,t/2+.005]},j.dark),i.seg(-e*.22,.4+n*.7,t/2+.008,e*.22,.4+n*.7,t/2+.008,Xe)}function Vx(i,e,t,n,r){if(r==="wall"){i.block({x:[-e/2,e/2],y:[.5,.5+n],z:[-t/2,t/2]},j.white,xe),i.seg(-e*.3,.5+n*.9,t/2+.004,e*.3,.5+n*.9,t/2+.004,Xe),i.seg(-e*.3,.5+n*.08,t/2+.003,e*.3,.5+n*.08,t/2+.003,Qe);return}if(r==="cube"){i.block({x:[-e/2+.01,e/2-.01],y:[0,.03],z:[-t/2+.01,t/2-.01]},j.dark),i.block({x:[-e/2,e/2],y:[.03,n],z:[-t/2,t/2]},j.darkBody,xe),i.seg(-e*.35,n*.85,t/2+.004,e*.35,n*.85,t/2+.004,Xe),i.block({x:[-e*.15,e*.15],y:[n,n+.025],z:[-.012,.012]},j.dark);return}i.block({x:[-e/2+.02,e/2-.02],y:[0,.06],z:[-t/2+.02,t/2-.02]},j.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.block({x:[-e/2,e/2],y:[.06+a*o+.004,.06+(a+1)*o],z:[-t/2,t/2]},j.white,xe);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-e*.04,l,t/2+.003,e*.04,l,t/2+.003,Xe)}}function ud(i,e,t,n,r,s){let[o,a]=[Math.cos(s*ht),Math.sin(s*ht)],l=(f,d)=>[t+f*o-d*a,r+f*a+d*o],c=new br(i,new Yt,l),u=je(1713728,2373216),h=je(725279,1713728);if(e==="camera_ceiling"){c.cylinder(0,0,.07,n-.03,n,u,12),c.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,h),c.cylinder(0,0,.012,n-.075,n-.06,j.accent,6);return}c.block({x:[-.02,.02],y:[n-.02,n+.02],z:[-.06,-.03]},u),c.block({x:[-.01,.01],y:[n-.01,n+.06],z:[-.05,-.03]},u),c.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u),c.lyingCylinder("z",0,.1,n+.03,n+.08,.03,.05,je(725279,Pe.accent),10),c.block({x:[-.006,.006],y:[n+.075,n+.085],z:[.085,.09]},je(16726863))}function hd(i,e){if(!i)return null;if(i.startsWith("#"))return Number.parseInt(i.slice(1),16);let t=Pe;return(e?t[`${i}Top`]:void 0)??t[i]??null}function fd(i,e,t,n,r,s,o,a=null,l=null){let c=e.colors?.length?(e.colors.find(u=>u.id===l)??e.colors[0]).hex:null;for(let u of e.parts){if(a&&!a(u))continue;let h=a?{...u,glow:!0,w:u.w+.006/t,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,f=h.glow&&o!==null,d=!!(h.paint&&c),m=d?c:h.color,g=f?o:hd(m,!1)??Pe.body,x=f?o:hd(d?void 0:h.top,!1)??hd(m,!0)??Oe(g,1.25).getHex(),p=je(g,x),[y,_]=[s+h.y*r,s+Math.min(r,(h.y+h.h)*r)],b=h.edges==="glow"?Ai:h.edges==="faint"?Qe:h.edges?xe:null,v=h.rot?i.turned(h.x*t,h.z*n,h.rot):i,[S,A]=[h.x*t,h.z*n];if(h.shape==="cyl"&&(h.axis==="x"||h.axis==="z"))v.lyingCylinder(h.axis,S,A,y,_,h.axis==="x"?h.w*t:h.d*n,h.axis==="x"?h.d*n:h.w*t,p,14,b);else if(h.shape==="cyl")v.cylinder(S,A,Math.min(h.w*t,h.d*n)/2,y,_,p,14,b);else if(h.shape==="loft"){let[M,T,C,P]=[h.tx??h.x,h.tz??h.z,h.tw??h.w,h.td??h.d];v.loft([(h.x-h.w/2)*t,(h.x+h.w/2)*t,(h.z-h.d/2)*n,(h.z+h.d/2)*n],[(M-C/2)*t,(M+C/2)*t,(T-P/2)*n,(T+P/2)*n],y,_,p,b)}else if(h.shape==="sweep"){let M=(h.stations??[]).map(([T,C,P,F])=>({x:S,z:T*n,y0:s+C*r,y1:s+P*r,hw:F*t/2}));v.sweep(M,p,h.n??16,h.exp??2.6,b)}else v.block({x:[(h.x-h.w/2)*t,(h.x+h.w/2)*t],y:[y,_],z:[(h.z-h.d/2)*n,(h.z+h.d/2)*n]},p,b)}}function dd(i){let[e,t]=[Math.cos(i.rotation*ht),Math.sin(i.rotation*ht)],n=i.mirror?-1:1;return(r,s)=>[i.x+n*r*e-s*t,i.z+n*r*t+s*e]}var V2=i=>[Math.max(.05,i.w),Math.max(.05,i.d),Math.max(.005,i.h)];function Fa(i,e,t,n,r){fd(new br(i,new Yt,dd(t)),e,...V2(t),n,r)}function G2(i,e,t,n,r,s){switch(e.type){case"sofa":return id(i,t,n,r,Math.max(1,Math.round((t-.4)/.62))),"yes";case"armchair":return id(i,t,n,r,1),"yes";case"bed":return nx(i,t,n,r),"yes";case"chair":return ix(i,t,n,r),"yes";case"table":return Sx(i,t,n,r),"yes";case"desk":return Ax(i,t,n,r),"yes";case"nightstand":return Ex(i,t,n,r),"yes";case"wardrobe":return si(i,t,n,r,Math.max(2,Math.round(t/.5)),r*.5),"yes";case"tall_cabinet":return si(i,t,n,r,1,r*.5),"yes";case"shelf":return Rx(i,t,n,r),"yes";case"kitchen":return lx(i,t,n,r),"yes";case"fridge":return ux(i,t,n,r),"yes";case"fridge_smart":return hx(i,t,n,r),"yes";case"stove":return fx(i,t,n,r),"yes";case"sink":return dx(i,t,n,r),"yes";case"bathtub":return bx(i,t,n,r),"yes";case"shower":return yx(i,t,n,r),"yes";case"wc":return _x(i,t,n,r),"yes";case"washbasin":return vx(i,t,n,r),"yes";case"tv_board":return Ox(i,t,n,r),"yes";case"plant":return Lx(i,t,n,r),"yes";case"rug":return Fx(i,t,n),"no";case"stairs":return Dx(i,t,n,r),"yes";case"stairwell":return"no";case"sideboard":return Cx(i,t,n,r),"yes";case"dresser":return Ix(i,t,n,r),"yes";case"coat_rack":return Px(i,t,n,r),"yes";case"bench":return rd(i,t,n,r,!1),"yes";case"corner_bench":return rd(i,t,n,r,!0),"yes";case"bar_stool":return rx(i,t,n,r),"yes";case"office_chair":return sx(i,t,n,r),"yes";case"stool":return ox(i,t,n,r),"yes";case"kitchen_wall":return px(i,t,n,r),"no";case"kitchen_tall":return mx(i,t,n,r),"yes";case"island":return gx(i,t,n,r),"yes";case"worktop":return cx(i,t,n,r),"no";case"dishwasher":return xx(i,t,n,r),"yes";case"washer":return cd(i,t,n,r,!1),"yes";case"dryer":return cd(i,t,n,r,!0),"yes";case"bunk_bed":return ax(i,t,n,r),"yes";case"table_round":return wx(i,t,n,r),"yes";case"coffee_table":return Tx(i,t,n,r),"yes";case"tv_wall":return Nx(i,t,n,r),"no";case"parking":{let a=[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]];return a.forEach(([l,c],u)=>i.seg(l,.012,c,a[(u+1)%4][0],.012,a[(u+1)%4][1],Qe)),i.seg(-t*.15,.012,n/2-.45,0,.012,n/2-.2,xe),i.seg(0,.012,n/2-.2,t*.15,.012,n/2-.45,xe),"no"}case"robot_vacuum":return i.block({x:[-t*.45,t*.45],y:[0,r],z:[-n/2,-n/2+n*.3]},j.white,xe),i.block({x:[-t*.2,t*.2],y:[r*.5,r*.62],z:[-n/2+n*.3,-n/2+n*.31]},j.accent),"no";case"radiator":return Mx(i,t,n,r),"no";case"inverter":return Ux(i,t,n,r,e.variant??null),"no";case"grid_point":return Bx(i,t,n,r),"yes";case"wallbox":return kx(i,t,n,r),"no";case"meter":return zx(i,t,n,r),"no";case"home_battery":return Vx(i,t,n,r,e.variant??null),e.variant==="wall"?"no":"yes";default:{let o=jt(e.type);return o?(fd(i,o,t,n,r,s,null,null,e.variant??null),s>.05?"no":"yes"):(i.block({x:[-t/2,t/2],y:[0,r],z:[-n/2,n/2]},j.body,xe),"yes")}}}function Gx(i,e,t,n,r){let s=dd(n),o=new br(i,e,s),[a,l,c]=[Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h)];G2(o,n,a,l,c,r)==="yes"&&tx(t,s,a,l,n.type==="plant"?.35:.5)}function Da(i,e,t,n,r=0){let s=jt(n.type)?0:r-Qs(n);if(jt(n.type)||Math.abs(s)<.001)return Gx(i,e,t,n,r);let[o,a]=[i.p.length,e.p.length];Gx(i,e,r<.05?t:new ot,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<e.p.length;l+=3)e.p[l]+=s}function H2(i,e,t,n,r){switch(i.type){case"tv_board":{let s=Math.min(e*.8,1.45);return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+s*.56,z:-t/2+.165}}case"tv_wall":{let s=1.3-n/2;return{x0:-e/2+.02,x1:e/2-.02,y0:s+.02,y1:s+n-.02,z:t/2+.003}}case"desk":return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-t/2+.115};case"fridge_smart":{let s=r?kn(r,i):0;return{x0:.06,x1:e/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:t/2+.006}}case"radiator":return{x0:-e/2+.02,x1:e/2-.02,y0:La+.02,y1:La+n-.02,z:t/2+.004};case"washer":case"dryer":{let s=(n-.14)/2+.04,o=Math.min(e*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:t/2-.004}}case"dishwasher":return{x0:-e/2+.06,x1:e/2-.06,y0:n-.16,y1:n-.08,z:t/2-.004};default:return null}}function W2(i,e){let[t,n,r]=[Math.max(.05,i.w),Math.max(.05,i.d),Math.max(.005,i.h)],s=N0(i.type);if(s){let l=e?kn(e,i):0,[c,u]=[(s.x-s.w/2)*t,(s.x+s.w/2)*t],h=Math.min(.02,(u-c)*.05);return{x0:c+h,x1:u-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=e&&i.type!=="fridge_smart"?kn(e,i)-Qs(i):0,a=H2(i,t,n,r,e);return a&&{...a,y0:a.y0+o,y1:a.y1+o}}function cu(i,e){let t=W2(i,e);return t&&i.mirror?{...t,x0:-t.x1,x1:-t.x0}:t}var yr=Math.PI/180,Ki=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]];var ao=i=>Math.hypot(i[0],i[1],i[2]),ts=i=>{let e=ao(i)||1;return[i[0]/e,i[1]/e,i[2]/e]},Hx=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]];var Xx=.25;function qx(i,e,t,n,r,s,o){let a=r-t>=s-n,l=a?r-t:s-n;return{key:`${i}:top`,section:e,side:"top",flat:!0,o:[t,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:a?s-n:r-t,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Yx(i,e){let t=ts(Hx(i,e));return t[1]<0?[-t[0],-t[1],-t[2]]:t}var Kx=i=>{let e=ts([-i[0],0,-i[2]]);return[e[0],e[2]]};function Oa(i,e,t,n,r,s,o,a){let l=ts(Ki(r,n)),c=ts(Ki(s,n));return{key:i,section:e,side:t,flat:!1,o:n,eu:l,es:c,n:Yx(l,c),lu:ao(Ki(r,n)),ls:ao(Ki(s,n)),pitch:o,span:a,facing:Kx(c)}}function Wx(i,e,t,n,r,s){let o=ao(Ki(r,n));if(o<.3)return null;let a=ts(Ki(r,n)),l=Ki(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=ao(u);if(h<.3)return null;let f=ts(u),d=m=>{let g=Math.min(1,Math.max(0,m/h));return[c*g,o-(o-c)*g]};return{key:i,section:e,side:t,flat:!1,o:n,eu:a,es:f,n:Yx(a,f),lu:o,ls:h,pitch:Math.atan2(f[1],Math.hypot(f[0],f[2]))/yr,span:d,facing:Kx(f)}}function X2(i,e){let t=wn(i),n=mn(i),r=(y,_,b)=>{let[v,S]=t.at(y,_);return[v,b,S]},[s,o]=[Math.max(0,e.a),Math.max(0,e.b)],a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),c=l-a,u=n.y(-s),h=n.y(t.w+o);if(i.shape==="flat"||i.shape==="parapet"){let[y,_]=[t.at(a,-s),t.at(l,t.w+o)];return[qx(i.id,i.id,Math.min(y[0],_[0]),Math.min(y[1],_[1]),Math.max(y[0],_[0]),Math.max(y[1],_[1]),i.eave_a+Xx)]}if(i.shape==="pent")return[Oa(`${i.id}:a`,i.id,"a",r(a,-s,u),r(l,-s,u),r(a,t.w+o,h),i.pitch_a,()=>[0,c])];let f=i.shape==="hip"||i.shape==="pyramid",d=(t.u1-t.u0)/2,m=i.shape==="pyramid"?d:f?Math.min(d,Math.min(n.vr,t.w-n.vr)||t.w/2):0,g=f?t.u0+m-a:0,x=f?l-(t.u1-m):0,p=[];if(n.vr>.3){let y=Math.hypot(n.vr+s,n.rh-u);p.push(Oa(`${i.id}:a`,i.id,"a",r(a,-s,u),r(l,-s,u),r(a,n.vr,n.rh),i.pitch_a,_=>[g*(_/y),c-x*(_/y)]))}if(t.w-n.vr>.3){let y=Math.hypot(t.w+o-n.vr,n.rh-h);p.push(Oa(`${i.id}:b`,i.id,"b",r(l,t.w+o,h),r(a,t.w+o,h),r(l,n.vr,n.rh),i.pitch_b,_=>[x*(_/y),c-g*(_/y)]))}if(f){let y=Wx(`${i.id}:c`,i.id,"c",r(a,t.w+o,h),r(a,-s,u),r(t.u0+m,n.vr,n.rh)),_=Wx(`${i.id}:d`,i.id,"d",r(l,-s,u),r(l,t.w+o,h),r(t.u1-m,n.vr,n.rh));p.push(...[y,_].filter(b=>b!==null))}return p}function $x(i){return i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function lo(i){let e=i.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(_=>X2(_,va(i,_,_.overhang??e.overhang)));let t=$x(i);if(!t)return[];let n=t.rooms.flatMap(_=>_.points.map(b=>b[0])),r=t.rooms.flatMap(_=>_.points.map(b=>b[1])),s=i.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-s,Math.max(...n)+s],[l,c]=[Math.min(...r)-s,Math.max(...r)+s],u=t.elevation+t.height;if(e.type==="flat")return[qx("main",null,o,l,a,c,u+Xx)];let h=a-o>=c-l,f=e.ridge==="short"?!h:h,d=(f?c-l:a-o)/2,m=d*Math.tan(e.pitch*yr),g=(_,b,v)=>f?[_,u+v,(l+c)/2+b]:[(o+a)/2+b,u+v,_],[x,p]=f?[o,a]:[l,c],y=()=>[0,p-x];return[Oa("main:a",null,"a",g(x,-d,0),g(p,-d,0),g(x,0,m),e.pitch,y),Oa("main:b",null,"b",g(x,d,0),g(p,d,0),g(x,0,m),e.pitch,y)]}function uu(i,e){let t=[];for(let n of i.floors.filter(r=>!e||r.id===e)){let{walls:r}=_a(n.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},n.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let[o,a]=[s.b[0]-s.a[0],s.b[1]-s.a[1]],l=Math.hypot(o,a);if(l<1.2)continue;let[c,u]=[a/l,-o/l],h=Math.min(n.height,s.height??n.height),f=(d,m,g,x)=>t.push({key:d,section:null,side:"top",flat:!1,o:m,eu:g,es:[0,1,0],n:x,lu:l,ls:h,pitch:90,span:()=>[0,l],facing:[x[0],x[2]],wall:{floorId:n.id}});f(`wall:${n.id}:${s.id}`,[s.a[0]+c*s.right,n.elevation,s.a[1]+u*s.right],[o/l,0,a/l],[c,0,u]),s.free&&f(`wall:${n.id}:${s.id}:back`,[s.b[0]-c*s.left,n.elevation,s.b[1]-u*s.left],[-o/l,0,-a/l],[-c,0,-u])}}return t}var Na="ground";function hu(i){let e=i.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??i.floors[0]??null}function fu(i,e){let t=(e.rotation??0)*yr,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],s=hu(i),o=n[0]*e.u+r[0]*e.v,a=n[2]*e.u+r[2]*e.v,l=s?s.elevation+(e.base!=null?e.base:H0(s,o,a)):e.base??0;return{key:Na,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}var pd=1.13,md=1.72,Ua=.025,_r=.07;function du(i){let e=i.module_w||pd,t=i.module_h||md;return i.portrait===!1?[t,e]:[e,t]}function Zx(i){return i.layout?.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Jx(i,e){return i.flat?Math.min(45,Math.max(0,e.tilt??15))*yr:i.wall?Math.min(90,Math.max(0,e.tilt??0))*yr:0}function gd(i,e){let[,t]=du(e),n=Jx(i,e);return i.wall?t*Math.cos(n)+Ua:i.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Ua}function co(i,e,t=!1){let[n,r]=du(e),s=Jx(i,e),o=r*Math.cos(s),a=gd(i,e),l=Zx(e),c=Math.max(1,...l),u=new Set(e.skip??[]),h=(m,g,x)=>[0,1,2].map(p=>i.o[p]+i.eu[p]*m+i.es[p]*g+i.n[p]*x),f=(m,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[x,p]=i.span(g);return m>=x-1e-6&&m<=p+1e-6},d=[];return l.forEach((m,g)=>{let x=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let p=0;p<m;p++){let y=`${g}:${p}`,_=u.has(y);if(_&&!t)continue;let b=e.u+(p+x)*(n+Ua),v=b+n,S=e.v+g*a,A=S+(i.flat||i.wall?o:r);if([[b,S],[v,S],[v,A],[b,A]].every(([M,T])=>f(M,T)))if(i.wall&&s>.001){let M=_r+r*Math.sin(s),[T,C]=e.flip?[M,_r]:[_r,M],P=[h(b,S,T),h(v,S,T),h(v,A,C),h(b,A,C)],F=e.flip?S:A;d.push({corners:P,posts:[b+.05,v-.05].map(L=>[h(L,F,0),h(L,F,M)]),cell:y,skipped:_})}else if(!i.flat)d.push({corners:[h(b,S,_r),h(v,S,_r),h(v,A,_r),h(b,A,_r)],posts:[],cell:y,skipped:_});else{let T=.15+r*Math.sin(s),[C,P]=e.flip?[A,S]:[S,A],F=[h(b,C,.15),h(v,C,.15),h(v,P,T),h(b,P,T)],L=[b+.05,v-.05].flatMap(R=>[[h(R,C,0),h(R,C,.15)],[h(R,P,0),h(R,P,T)]]);d.push({corners:F,posts:L,cell:y,skipped:_})}}}),d}var xd=.78,bd=1.18,jx=i=>({id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||xd,module_h:i.h||bd});function Ba(i,e){let t=co(i,jx(e))[0];if(!t)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return t.corners.map(n)}var ns=1712952,is=2239816,pu=1318193,$i=Oe(3662079,.9),Zi=Oe(5995775,.45),zt=.14,Qx=9427199,eb=13226982,tb=14936565,nb={black:{glass:new K(329483),edge:Oe(9082544,.32),cells:Oe(2766160,.22)},blue:{glass:new K(1386842),edge:Oe(10467583,.55),cells:Oe(4025599,.35)}},ib=Oe(13226982,.5),rb=Oe(13226982,.85),sb=Oe(16757575,.95),yd=new K(2845583),_d=new K(3818072);var uo=(i,e,t)=>[i[0]+(e[0]-i[0])*t,i[1]+(e[1]-i[1])*t,i[2]+(e[2]-i[2])*t],mu=(i,e,t)=>[i[0]+e[0]*t,i[1]+e[1]*t,i[2]+e[2]*t],ob=(i,e)=>e.section?i.find(t=>t.sections?.includes(e.section)):i[0];function ab(i,e,t){let n=i.settings.roof?.windows??[];if(n.length===0||e.length===0)return;let r=new Map(lo(i).map(s=>[s.key,s]));for(let s of n){let o=r.get(s.face),a=o?Ba(o,s):null,l=o&&a?ob(e,o):void 0;if(!o||!a||!l)continue;let c=l.floor.elevation+l.base,[u,h,f,d]=a.map(T=>[T[0],T[1]-c,T[2]]),m=t.get(s.id)??{open:0,tilt:0,cover:0},g=(T,C)=>mu(T,o.n,C),x=m.open>.02||m.tilt>.02?sb:rb,p=[u,h,f,d].map(T=>g(T,.06));p.forEach((T,C)=>l.lines.seg(T,p[(C+1)%4],x));let y=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*ht,_=Math.hypot(f[0]-h[0],f[1]-h[1],f[2]-h[2]),b=T=>mu(mu(T,o.es,-_*Math.cos(y)),o.n,_*Math.sin(y)),[v,S]=[g(d,.065),g(f,.065)],[A,M]=[b(v),b(S)];l.solid.tri(A,M,S,yd),l.solid.tri(A,S,v,yd);for(let[T,C]of[[A,M],[M,S],[S,v],[v,A]])l.lines.seg(T,C,x);if(m.cover>.02){let T=Math.min(1,m.cover),[C,P]=[g(uo(v,A,T),.01),g(uo(S,M,T),.01)],[F,L]=[g(v,.01),g(S,.01)];l.solid.tri(C,P,L,_d),l.solid.tri(C,L,F,_d)}}}function gu(i,e,t,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=nb[n.look==="blue"?"blue":"black"],[a,l]=n.portrait===!1?[10,6]:[6,10];for(let c of co(t,n)){let[u,h,f,d]=c.corners.map(s);for(let[x,p,y]of[[u,h,f],[u,f,d],[u,f,h],[u,d,f]])i.tri(x,p,y,o.glass);let m=x=>mu(x,t.n,.004),g=[u,h,f,d].map(m);g.forEach((x,p)=>e.seg(x,g[(p+1)%4],o.edge));for(let x=1;x<a;x++)e.seg(m(uo(u,h,x/a)),m(uo(d,f,x/a)),o.cells);for(let x=1;x<l;x++)e.seg(m(uo(u,d,x/l)),m(uo(h,f,x/l)),o.cells);for(let[x,p]of c.posts)e.seg(s(x),s(p),ib)}}function lb(i,e){let t=i.settings.roof?.solar??[];if(t.length===0||e.length===0)return;let n=new Map(lo(i).map(r=>[r.key,r]));for(let r of t){let s=n.get(r.face),o=s?ob(e,s):void 0;s&&o&&gu(o.solid,o.lines,s,r,o.floor.elevation+o.base)}}var Vn=.12,ka=.16;function cb(i,e,t,n,r,s,o){let a=t.w,[l,c,u,h]=[r.a>0,r.b>0,r.u0>0,r.u1>0],f=(m,g,x,p,y,_)=>{let b=[t.at(m,x),t.at(g,x),t.at(g,p),t.at(m,p)],v=(b[1][0]-b[0][0])*(b[2][1]-b[0][1])-(b[2][0]-b[0][0])*(b[1][1]-b[0][1]);Pt(i,v<0?[...b].reverse():b,y-o,_-o,eb,tb,{bottom:!0})};for(let[m,g]of[[0,l],[a,c]]){if(!g)continue;let x=n.y(m)-.03,p=m===0?0:a-Vn;f(t.u0,t.u1,p,p+Vn,x-ka,x),e.seg(s(t.u0,m,x-ka),s(t.u1,m,x-ka),Zi)}for(let[m,g]of[[t.u0,u],[t.u1-Vn,h]])if(g)for(let x=0;x<6;x++){let[p,y]=[a*x/6,a*(x+1)/6],_=Math.min(n.y(p),n.y(y))-.03;f(m,m+Vn,p,y,_-ka,_)}let d=[];for(let[m,g]of[[0,l],[a-Vn,c]]){if(!g)continue;let x=t.u1-t.u0-Vn,p=Math.max(1,Math.ceil(x/3.5));for(let y=0;y<=p;y++)y===0&&!u||y===p&&!h||d.push([t.u0+x*y/p,m])}!l&&!c&&(u&&d.push([t.u0,a/2-Vn/2]),h&&d.push([t.u1-Vn,a/2-Vn/2]));for(let[m,g]of d)f(m,m+Vn,g,g+Vn,o,n.y(g+Vn/2)-.03-ka)}function $2(i,e){let t=[];if(i.forEach(([s,o],a)=>{o>=e&&t.push([s,o]);let l=i[a+1];if(l&&(o-e)*(l[1]-e)<0){let c=(e-o)/(l[1]-o);t.push([s+(l[0]-s)*c,e])}}),t.length<2)return[];let[n,r]=[t[0],t[t.length-1]];return r[1]>e&&t.push([r[0],e]),n[1]>e&&t.unshift([n[0],e]),t}var ub=i=>ba(i)>=0?i:[...i].reverse();function hb(i,e,t,n,r,s=i,o=!1,a=[],l=null){let c=wn(t),u=mn(t),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,[f,d]=[Math.max(0,h.a),Math.max(0,h.b)],m=c.w,g=c.u0-Math.max(0,h.u0),x=c.u1+Math.max(0,h.u1),p=(R,D,N)=>{let[B,X]=c.at(R,D);return[B,N-r,X]},y=new K(is),_=new K(ns),b=new K(pu),v=(R,D)=>{for(let N=1;N+1<R.length;N++)i.tri(R[0],R[N],R[N+1],D)},S=([R,D,N],B=0)=>p(R,D,N-B),A=[],M=[],T=[],C=null;if(t.shape==="flat"||t.shape==="parapet"){let R=t.eave_a-r,D=t.shape==="parapet",N=t.points&&t.points.length>=3?Af(t,D?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):D?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,m),c.at(c.u0,m)]:[c.at(g,-f),c.at(x,-f),c.at(x,m+d),c.at(g,m+d)];if(Pt(i,N,R,R+.25,ns,is,{bottom:!0}),N.forEach((B,X)=>{let z=N[(X+1)%N.length];e.seg([B[0],R+.252,B[1]],[z[0],R+.252,z[1]],$i),e.seg([B[0],R,B[1]],[z[0],R,z[1]],Zi)}),D){let B=ub(N),X=Jc(B,-.2);B.forEach((z,H)=>{let G=(H+1)%B.length;Pt(i,ub([z,B[G],X[G],X[H]]),R+.25,R+.65,ns,is),e.seg([z[0],R+.652,z[1]],[B[G][0],R+.652,B[G][1]],$i),e.seg([X[H][0],R+.652,X[H][1]],[X[G][0],R+.652,X[G][1]],$i)})}}else{let R=gr(t,h);A=a.reduce((D,N)=>D.flatMap(B=>jc(B,N)),R.faces),M=R.rim,T=R.ridges,C=R.gable}let P=!!t.open,F=new K(Qx);for(let R of A)if(P)for(let D=1;D+1<R.length;D++)s.tri(S(R[0]),S(R[D]),S(R[D+1]),F);else v(R.map(D=>S(D)),y),v(R.map(D=>S(D,zt)),_);if(M.forEach((R,D)=>{let N=M[(D+1)%M.length];P||v([S(R),S(N),S(N,zt),S(R,zt)],_),e.seg(S(R),S(N),P?$i:Zi)}),P){cb(i,e,c,u,h,(R,D,N)=>p(R,D,N),r);return}for(let[R,D]of T)e.seg(S([R[0],R[1],R[2]+.004]),S([D[0],D[1],D[2]+.004]),$i);let L=t.base;if(!o){if(C){let R=$2(C,L-zt),D=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(R.length>=3)for(let N of D)v(R.map(([B,X])=>p(N,B,X)),b)}if(t.shape!=="flat"&&t.shape!=="parapet")for(let R of[0,m]){let D=u.y(R)-zt;D>L+.02&&v([p(c.u0,R,L),p(c.u1,R,L),p(c.u1,R,D),p(c.u0,R,D)],b)}else if(t.eave_a>L+.02){let R=[[c.u0,0],[c.u1,0],[c.u1,m],[c.u0,m]];R.forEach(([D,N],B)=>{let[X,z]=R[(B+1)%4];v([p(D,N,L),p(X,z,L),p(X,z,t.eave_a),p(D,N,t.eave_a)],b)})}}}function fb(i,e,t){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(n.length===0)return[];let r=new Map,s=new Map(lo(i).map(o=>[o.key,o]));for(let o of e){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=If(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ot,lines:new Yt,glass:new ot,sections:[],lift:!o.open}),c.sections.push(o.id);let u=no(e,o),h=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,f=e.filter(g=>g!==o&&no(e,g)===o).flatMap(g=>Ef(o,g));for(let g of i.settings.roof.windows??[]){let x=s.get(g.face),p=x&&x.section===o.id?Ba(x,g):null;if(!p)continue;let y=p.map(_=>wi(o,_[0],_[2]));f.push({u0:Math.min(...y.map(_=>_[0])),u1:Math.max(...y.map(_=>_[0])),v0:Math.min(...y.map(_=>_[1])),v1:Math.max(...y.map(_=>_[1]))})}let d=u?eu(u,o):o,m=null;if(u){let g=wn(d),x=gr(u,{u0:0,u1:0,a:0,b:0}),p=y=>{let[_,b]=g.at(y,g.w/2),[v,S]=wi(u,_,b);return Jr(x,v,S)??mn(u).y(S)};m=p(g.u0)<=p(g.u1)?0:1}hb(c.solid,c.lines,d,va(i,d,d.overhang??t),a.elevation,c.glass,h,f,m)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function db(i){return i.floors.filter(e=>e.rooms.some(t=>t.points.length>=3)).sort((e,t)=>t.elevation-e.elevation)[0]??null}function pb(i){let e=i.settings.roof,t=db(i);if(!t||!e||e.type==="none"||e.type==="custom")return null;let n=t.rooms.flatMap(F=>F.points.map(L=>L[0])),r=t.rooms.flatMap(F=>F.points.map(L=>L[1])),s=i.settings.wall_exterior+e.overhang,[o,a]=[Math.min(...n)-s,Math.max(...n)+s],[l,c]=[Math.min(...r)-s,Math.max(...r)+s],u=new ot,h=new Yt,f={floor:t,base:t.height,solid:u,lines:h,glass:new ot};if(e.type==="flat"){let F=[[o,l],[a,l],[a,c],[o,c]];return Pt(u,F,0,.25,ns,is,{bottom:!0}),F.forEach(([L,R],D)=>{let[N,B]=F[(D+1)%4];h.seg([L,.252,R],[N,.252,B],$i),h.seg([L,0,R],[N,0,B],Zi)}),f}let d=a-o>=c-l,m=e.ridge==="short"?!d:d,g=(m?c-l:a-o)/2,x=Math.tan(e.pitch*ht),p=g*x,y=(F,L,R)=>m?[F,R,(l+c)/2+L]:[(o+a)/2+L,R,F],[_,b]=m?[o,a]:[l,c],v=new K(is),S=new K(ns),A=(F,L,R,D,N)=>{u.tri(F,L,R,N),u.tri(F,R,D,N)};for(let F of[-1,1]){A(y(_,F*g,0),y(b,F*g,0),y(b,0,p),y(_,0,p),v),A(y(_,F*g,-zt),y(_,0,p-zt),y(b,0,p-zt),y(b,F*g,-zt),S),A(y(_,F*g,-zt),y(b,F*g,-zt),y(b,F*g,0),y(_,F*g,0),S);for(let L of[_,b])A(y(L,F*g,-zt),y(L,F*g,0),y(L,0,p),y(L,0,p-zt),S);h.seg(y(_,F*g,0),y(b,F*g,0),Zi);for(let L of[_,b])h.seg(y(L,F*g,0),y(L,0,p),Zi)}let M=e.overhang,T=new K(pu),C=g-M,P=C*x;for(let F of[_+M,b-M])u.tri(y(F,-C,-zt),y(F,C,-zt),y(F,0,P-zt),T),u.tri(y(F,C,-zt),y(F,-C,-zt),y(F,0,P-zt),T);return h.seg(y(_,0,p+.004),y(b,0,p+.004),$i),f}function vd(i,e=new Map){let t=i.settings.roof,n=t?.type==="custom"?null:pb(i),r=t?.type==="custom"?fb(i,t.sections??[],t.overhang):n?[n]:[];return lb(i,r),ab(i,r,e),r}var vr={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},xu={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},oi=.2,ho=8;var rs=(i,e)=>Math.min(e,i.height??e);function mb(i){let e=new Map,t=[],n=new Map;for(let r of i){let s="interior",o=null;if(r.exterior){let[a,l]=[r.b[0]-r.a[0],r.b[1]-r.a[1]],c=Math.hypot(a,l)||1,u=[l/c,-a/c],h=(Math.round(Math.atan2(u[1],u[0])/(2*Math.PI)*ho)%ho+ho)%ho;s=`s${h}`;let f=h/ho*2*Math.PI;o=[Math.cos(f),Math.sin(f)]}e.has(s)||(e.set(s,t.length),t.push(o)),n.set(r,e.get(s))}return{buckets:t,wallBucket:n}}function gb(i){let e=(n,r,s)=>{let o=i?i(n,r):null;return o===null?s:Math.max(.05,Math.min(s,o))};return{topAt:e,lowestTop:(n,r,s,o,a)=>{if(!i)return a;let l=Math.max(2,Math.ceil((o-s)/.25)+1),c=a;for(let u=0;u<l;u++){let h=s+(o-s)*u/(l-1);c=Math.min(c,e(n[0]+r[0]*h,n[1]+r[1]*h,a))}return c}}}function xb(i,e,t,n){let r=new Map,s=[];for(let o of i.openings){let a=ng(o,i.rooms,i.walls??[]),l=a&&rg(e,o,a);if(!a||!l)continue;let{wall:c,s:u}=l,h=so([c.b[0]-c.a[0],c.b[1]-c.a[1]]),f=Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1]),d=Math.min(o.width,f),m=Math.max(0,Math.min(f-d,u-d/2)),g=a.room.points,x=c.free?h[0]*(g[1][0]-g[0][0])+h[1]*(g[1][1]-g[0][1])>0:c.roomLeft===o.room_id,p=[-h[1],h[0]],y=x?p:[-p[0],-p[1]],_=Math.min(n(c.a,h,m,m+d,rs(c,i.height))-.02,o.sill+o.height),b=Math.max(0,Math.min(o.sill,_-.1)),v=[y[1],-y[0]],S=h[0]*v[0]+h[1]*v[1]>0,A={opening:o,bucket:t.get(c),start:[c.a[0]+h[0]*m,c.a[1]+h[1]*m],axis:h,width:d,toRoom:y,faceRoom:x?c.left:c.right,faceOut:x?c.right:c.left,sill:b,top:_,hingeAtStart:o.hinge==="left"===S,exterior:c.exterior};s.push(A),r.set(c,[...r.get(c)??[],{s0:m,s1:m+d,sill:b,top:_,info:A}])}return{openings:s,spans:r}}function Z2(i,e,t){let{info:n}=e,r=n.bucket,s=(l,c,u)=>[n.start[0]+n.axis[0]*(l-e.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-e.s0)+n.toRoom[1]*c],o=l=>l>t+1e-6?r:Ze,a=Math.max(e.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[e.s0,e.s1])i.segSplit(s(c,l,a),s(c,l,e.top),Ei,t,r);i.seg(s(e.s0,l,e.top),s(e.s1,l,e.top),Ei,o(e.top)),e.sill>.01&&i.seg(s(e.s0,l,e.sill),s(e.s1,l,e.sill),Ei,o(e.sill))}for(let l of[e.s0,e.s1])i.seg(s(l,n.faceRoom,e.top),s(l,-n.faceOut,e.top),Ei,o(e.top)),e.sill>.01&&i.seg(s(l,n.faceRoom,e.sill),s(l,-n.faceOut,e.sill),Ei,o(e.sill)),e.sill<t&&e.top>t&&i.seg(s(l,n.faceRoom,t),s(l,-n.faceOut,t),tu,wa+r)}function bb(i,e,t,n,r,s,o){let{topAt:a}=s,l=Math.min(e.cut_height,e.height),c=(u,h)=>(r.get(u)??[]).filter(h);for(let u of t.edges){let h=n.get(u.wall);for(let[d,m]of oo(u,c(u.wall,g=>g.sill<=.005)))i.seg([d[0],.004,d[1]],[m[0],.004,m[1]],Df);for(let[d,m]of oo(u,c(u.wall,g=>g.sill<l&&g.top>l)))i.seg([d[0],l,d[1]],[m[0],l,m[1]],tu,wa+h);let f=rs(u.wall,e.height);for(let[d,m]of oo(u,c(u.wall,g=>g.top>=f-.021))){if(!o){i.seg([d[0],f,d[1]],[m[0],f,m[1]],Ai,f<=l+1e-6?Xi+h:h);continue}let g=Math.max(1,Math.ceil(Math.hypot(m[0]-d[0],m[1]-d[1])/.3)),x=p=>[d[0]+(m[0]-d[0])*p/g,d[1]+(m[1]-d[1])*p/g];for(let p=0;p<g;p++){let[y,_]=[x(p),x(p+1)],[b,v]=[a(y[0],y[1],f),a(_[0],_[1],f)];i.seg([y[0],b,y[1]],[_[0],v,_[1]],Ai,Math.max(b,v)<=l+1e-6?Xi+h:h)}}}for(let u of t.corners){let h=a(u.p[0],u.p[1],rs(u.wall,e.height));i.segSplit([u.p[0],.004,u.p[1]],[u.p[0],h,u.p[1]],Ei,Math.min(l,h),n.get(u.wall))}for(let u of r.values())for(let h of u)Z2(i,h,l)}function yb(i,e){let t=new ot(!0,!0),n=[],r=new Yt,s=[],o=new K(vr.slab),a=l=>{l.forEach((c,u)=>{let h=l[(u+1)%l.length];t.tri([c[0],-oi,c[1]],[c[0],0,c[1]],[h[0],0,h[1]],o),t.tri([c[0],-oi,c[1]],[h[0],0,h[1]],[h[0],-oi,h[1]],o)})};for(let l of i.rooms){if(l.points.length<3)continue;let c=Qr(l.points),u=xu[l.floor_material]??xu.wood,h=new K(u.color),f=e.filter(g=>Zg(g,c)).map(g=>Jg(g,.003));s.push(...f);let d=[...c,...f.flat()],m=t.count;for(let[g,x,p]of ro(c,f)){let[y,_,b]=[d[g],d[x],d[p]];t.tri([y[0],0,y[1]],[b[0],0,b[1]],[_[0],0,_[1]],h,h,h,[y[0],y[1],b[0],b[1],_[0],_[1]],Ze,u.tile)}n.push({roomId:l.id,start:m,end:t.count,color:u.color}),a(c);for(let g of f)a([...Qr(g)].reverse()),g.forEach((x,p)=>{let y=g[(p+1)%g.length];r.seg([x[0],.006,x[1]],[y[0],.006,y[1]],Ai),r.seg([x[0],-oi,x[1]],[y[0],-oi,y[1]],Ei)})}return{buffer:t,roomTris:n,holeLines:r,cutHoles:s}}var bu=.42,Md=.42;function _b(i,e,t){let n=new ot,r=new K(Md,Md,Md),s=new K(1,1,1),o=.002;for(let a of i)for(let[l,c]of oo(a,(t.get(a.wall)??[]).filter(u=>u.sill<=.005))){let[u,h]=[c[0]-l[0],c[1]-l[1]],f=Math.hypot(u,h);if(f<.05)continue;let d=[h/f,-u/f],m=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!e.some(p=>p.points.length>=3&&ft(m,p.points)))continue;let g=[l[0]+d[0]*bu,l[1]+d[1]*bu],x=[c[0]+d[0]*bu,c[1]+d[1]*bu];n.tri([l[0],o,l[1]],[g[0],o,g[1]],[x[0],o,x[1]],r,s,s),n.tri([l[0],o,l[1]],[x[0],o,x[1]],[c[0],o,c[1]],r,s,r)}return n}function J2(i,e){let t=[-1/0,...new Set(i.flatMap(r=>[r.s0,r.s1])).values(),1/0].sort((r,s)=>r-s),n=[];for(let r=0;r+1<t.length;r++){let[s,o]=[t[r],t[r+1]];if(o-s<1e-6)continue;let a=Number.isFinite(s)&&Number.isFinite(o)?(s+o)/2:Number.isFinite(s)?s+1:o-1,l=i.filter(h=>h.s0<a&&h.s1>a).map(h=>[h.sill,h.top]).sort((h,f)=>h[0]-f[0]),c=[],u=-oi;for(let[h,f]of l)h>u+1e-4&&c.push([u,h]),u=Math.max(u,f);e>u+1e-4&&c.push([u,e]),n.push({t0:s,t1:o,ranges:c})}return n}function vb(i,e,t,n,r,s,o){let{topAt:a,lowestTop:l}=s,c=Math.min(e.cut_height,e.height);for(let u of t){let h=n.get(u),f=so([u.b[0]-u.a[0],u.b[1]-u.a[1]]),d=(r.get(u)??[]).sort((b,v)=>b.s0-v.s0),m=rs(u,e.height),g=J2(d,m),x=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1]),p=o&&l(u.a,f,0,x,m)<m-.001,y=p?g.flatMap(b=>{let v=Math.max(b.t0,-.5),S=Math.min(b.t1,x+.5),A=Math.max(1,Math.ceil((S-v)/.3));return Array.from({length:A},(M,T)=>({t0:T===0?b.t0:v+(S-v)*T/A,t1:T===A-1?b.t1:v+(S-v)*(T+1)/A,ranges:b.ranges,inner0:T>0,inner1:T<A-1}))}):g.map(b=>({...b,inner0:!1,inner1:!1})),_=b=>(b[0]-u.a[0])*f[0]+(b[1]-u.a[1])*f[1];for(let b of y){let v=td(u.footprint,u.a,f,b.t0,b.t1);if(v.length<3)continue;let S=(T,C)=>Math.abs(_(T)-C)<1e-4,A=(T,C)=>b.inner0&&S(T,b.t0)&&S(C,b.t0)||b.inner1&&S(T,b.t1)&&S(C,b.t1),M=p?Math.min(...v.map(([T,C])=>a(T,C,m))):m;for(let[T,C]of b.ranges){let P=Math.min(C,p?Math.max(...v.map(([D,N])=>a(D,N,m))):C);if(P-T<1e-4||M-T<.01)continue;let F=T>.01,L=p&&C>M,R=(D,N)=>Math.min(C,a(D,N,m));if(T<c-1e-6){let D=P>c+1e-6?Nf+h:Xi+h,N=L&&M<c?(B,X)=>Math.min(c,R(B,X)):Math.min(P,c);Pt(i,v,T,N,vr.wall,vr.wallTop,{aoFrom:0,bottom:F,fold:Xi+h,topFold:D,skipSide:A})}P>c+1e-6&&M>c+1e-6&&Pt(i,v,Math.max(T,c),L?R:P,vr.wall,vr.wallTop,{aoFrom:0,fold:h,bottom:F&&T>=c,skipSide:A})}}}}function Sd(i,e,t,n=[],r=[],s){let{walls:o,open:a}=_a(i.rooms,{exterior:e,interior:t},i.walls??[]),l=gb(s),c=!!s,u=yb(i,n),{buckets:h,wallBucket:f}=mb(o),{openings:d,spans:m}=xb(i,o,f,l.lowestTop),g=new ot;vb(g,i,o,f,m,l,c);let x=nd(o,o.flatMap(v=>v.footprint)),p=new Yt;p.p.push(...u.holeLines.p),p.c.push(...u.holeLines.c),p.f.push(...u.holeLines.f),bb(p,i,x,f,m,l,c);let y=_b(x.edges,i.rooms,m);Yf(g,p,i);for(let v of r)gu(g,p,v.face,v.field,i.elevation);let _=Math.min(i.cut_height,i.height),b=[];for(let v of i.furniture.filter(S=>!X0(S.type))){let S=g.count,A=p.p.length/6,M=kn(i,v);Xc(v.type)||Da(g,p,y,v,M),M+v.h>_+.05&&(Bf(g,S,_,nu),kf(p,A,_,nu)),b.push({id:v.id,start:S,end:g.count})}return{floor:u.buffer.geometry(),roomTris:u.roomTris,holes:u.cutHoles,walls:g.geometry(),lines:p.geometry(),shadow:y.geometry(),buckets:h,openings:d,walls2d:o,openRooms:a,wallBuckets:o.map(v=>f.get(v)),furnitureTris:b,roofUnder:s}}function wd(i,e){let t=e.furniture.filter(s=>s.type==="stairwell").map($c),n=i.filter(s=>s.elevation<e.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Qf(t);let r=n.furniture.filter(s=>(s.type==="stairs"||jt(s.type)?.hole)&&n.elevation+s.h>=e.elevation-.3).map($c);return Qf([...t,...r])}var Mb=.12,Sb=1.35,yu=(i,e,t)=>Math.min(t,Math.max(e,i)),j2=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,wb=i=>({...i,target:i.target.clone()});function Tb({target:i,radius:e,theta:t,phi:n}){return new O(i.x+e*Math.sin(n)*Math.sin(t),i.y+e*Math.cos(n),i.z+e*Math.sin(n)*Math.cos(t))}function Ab(i,e,t){let n=j2(t);return{target:new O().lerpVectors(i.target,e.target,n),radius:i.radius+(e.radius-i.radius)*n,theta:i.theta+(e.theta-i.theta)*n,phi:i.phi+(e.phi-i.phi)*n}}function Eb(i,e){let t=e.theta??i.theta;for(;t-i.theta>Math.PI;)t-=2*Math.PI;for(;t-i.theta<-Math.PI;)t+=2*Math.PI;return{target:(e.target??i.target).clone(),radius:e.radius??i.radius,theta:t,phi:e.phi??i.phi}}function Td(i,e,t,n,r){let s=2*i.radius*Math.tan(r*Math.PI/360)/(n||1),o=new O(Math.cos(i.theta),0,-Math.sin(i.theta)),a=new O(-Math.sin(i.theta),0,-Math.cos(i.theta));i.target.addScaledVector(o,-e*s),i.target.addScaledVector(a,t*s/Math.max(.35,Math.cos(i.phi)))}function Rb(i,e,t,n){let r=n||1,s={theta:-e/r*3.2,phi:-t/r*2.4};return i.theta+=s.theta,i.phi=yu(i.phi+s.phi,Mb,Sb),s}function Cb(i,e){return Math.abs(e.theta)<=1e-4&&Math.abs(e.phi)<=1e-4?!1:(i.theta+=e.theta,i.phi=yu(i.phi+e.phi,Mb,Sb),e.theta*=.9,e.phi*=.9,!0)}var Q2=500,eT=400,tT=320,nT=6,za=class{view={target:new O,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;pointers=new Map;velocity={theta:0,phi:0};flight=null;press=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;listeners=[];el;camera;events;constructor(e,t,n){this.el=e,this.camera=t,this.events=n;let r=(s,o,a)=>{e.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[e,t]of this.listeners)this.el.removeEventListener(e,t)}get active(){return this.pointers.size>0||this.flight!==null}get busy(){return this.active}update(e){let t=!1;if(this.flight){let{from:n,to:r,start:s,duration:o}=this.flight,a=Math.min(1,(e-s)/o);this.view=Ab(n,r,a),a>=1&&(this.flight=null),t=!0}else this.pointers.size===0&&(t=Cb(this.view,this.velocity));return this.camera.position.copy(Tb(this.view)),this.camera.lookAt(this.view.target),t}flyTo(e,t=700){let n=Eb(this.view,e),r=wb(this.view);this.velocity={theta:0,phi:0},t<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=n,this.flight=null):this.flight={from:r,to:n,start:performance.now(),duration:t},this.events.change()}local(e){let t=this.el.getBoundingClientRect();return[e.clientX-t.left,e.clientY-t.top]}stopMotion(){this.flight=null,this.velocity={theta:0,phi:0}}onDown(e){this.el.setPointerCapture(e.pointerId);let t=this.pointers.size===0;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,button:e.button}),this.stopMotion(),t&&e.button===0&&this.events.grab?.(...this.local(e))){this.grabbing=!0;return}if(clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.press={x:e.clientX,y:e.clientY,time:performance.now(),moved:!1};let[n,r]=this.local(e);this.holdTimer=setTimeout(()=>{!this.press||this.press.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},Q2)}else this.press=null,this.pinch=this.pinchState()}onMove(e){let t=this.pointers.get(e.pointerId);if(!t)return;if(this.grabbing)return void this.events.drag?.(...this.local(e));if(this.swiping)return void this.events.swipeMove?.(e.clientY-this.swiping.startY);let[n,r]=[e.clientX-t.x,e.clientY-t.y];if(this.press&&!this.press.moved&&Math.hypot(e.clientX-this.press.x,e.clientY-this.press.y)>nT){this.press.moved=!0,clearTimeout(this.holdTimer);let[s,o]=this.local({clientX:this.press.x,clientY:this.press.y});if(this.pointers.size===1&&t.button===0&&!e.shiftKey&&this.events.swipeStart?.(s,o,e.clientX-this.press.x,e.clientY-this.press.y))return this.swiping={startY:this.press.y},this.velocity={theta:0,phi:0},void this.events.swipeMove?.(e.clientY-this.press.y)}if(this.pointers.size===1)this.press&&!this.press.moved||(t.button===1||t.button===2||e.shiftKey?Td(this.view,n,r,this.el.clientHeight,this.camera.fov):this.velocity=Rb(this.view,n,r,this.el.clientHeight)),[t.x,t.y]=[e.clientX,e.clientY];else{[t.x,t.y]=[e.clientX,e.clientY];let s=this.pinchState();this.pinch&&s&&(this.zoom(this.pinch.dist/Math.max(1,s.dist)),Td(this.view,s.mid[0]-this.pinch.mid[0],s.mid[1]-this.pinch.mid[1],this.el.clientHeight,this.camera.fov)),this.pinch=s}this.pointers.size===1&&this.press&&!this.press.moved||this.events.change()}onUp(e){if(this.pointers.has(e.pointerId)){if(this.pointers.delete(e.pointerId),this.grabbing)return this.grabbing=!1,void this.events.drop?.();if(this.swiping)return this.swiping=null,this.press=null,void this.events.swipeEnd?.();if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.press=null;else if(this.press&&!this.press.moved&&e.type==="pointerup"&&performance.now()-this.press.time<eT){let[t,n]=this.local(e),r=performance.now(),s=r-this.lastTap<tT;this.lastTap=s?0:r,s?this.events.doubleTap(t,n):this.events.tap(t,n)}this.pointers.size===0&&(this.press=null),this.events.change()}}onWheel(e){e.preventDefault(),this.flight=null,this.zoom(Math.exp(e.deltaY*(e.deltaMode===1?.05:.0015))),this.events.change()}zoom(e){this.view.radius=yu(this.view.radius*e,this.minRadius,this.maxRadius)}pinchState(){let[e,t]=[...this.pointers.values()];return t?{dist:Math.hypot(e.x-t.x,e.y-t.y),mid:[(e.x+t.x)/2,(e.y+t.y)/2]}:null}};function iT(i,e){let t=jt(e);if(!t)return null;let n=i.scale??1,[r,s,o]=t.size.map(a=>a*n);return{id:`${i.id}:vehicle`,type:e,x:i.x,z:i.z,rotation:i.rotation,w:r,d:s,h:o,variant:i.variant??null,entity:null,power:null}}function _u(i,e){let t=[],n=!1;for(let r of i.furniture){t.push(r);let s=r.type==="parking"?e.get(r.id):void 0,o=s?iT(r,s):null;o&&(t.push(o),n=!0)}return n?{...i,furniture:t}:i}var fo=2043986,Mr=2769520,Ib=2242399,vu=1845831,Pb=1450554,ai=16758087,Lb=1846349,Fb=2572395,Db=1120816,Ob=1845831,Nb=5995775,Ub=9085695,Sr=Oe(3662079,.08),Bb=1.2,kb=1.5,zb=.2;function Mu(i,e,t,n,r,s){let o=(g,x,p)=>e(g,x,p),{x0:a,x1:l,n0:c,n1:u,y0:h,y1:f}=t,d=g=>Oe(n.getHex(),g),m=[[o(a,c,f),o(l,c,f),o(l,u,f),o(a,u,f),r],[o(a,c,h),o(l,c,h),o(l,u,h),o(a,u,h),d(.6)],[o(a,u,h),o(l,u,h),o(l,u,f),o(a,u,f),n],[o(a,c,h),o(l,c,h),o(l,c,f),o(a,c,f),d(.85)],[o(a,c,h),o(a,u,h),o(a,u,f),o(a,c,f),d(.92)],[o(l,c,h),o(l,u,h),o(l,u,f),o(l,c,f),d(.92)]];for(let[g,x,p,y,_]of m)i.tri(g,x,p,_,_,_,void 0,s),i.tri(g,p,y,_,_,_,void 0,s)}function gn(i,e,t,n,r,{cut:s,bucket:o}){if(t.y1<=s+1e-6)return Mu(i,e,t,n,r,Ze);if(t.y0>=s-1e-6)return Mu(i,e,t,n,r,o);Mu(i,e,{...t,y1:s},n,r,Ze),Mu(i,e,{...t,y0:s},n,r,o)}function li(i,e,t,n,r,s,o,a,{cut:l,bucket:c},u=0){let h=(f,d,m)=>{let g=b=>u?(o-b)/u:.5,[x,p,y,_]=[e(t,r,f),e(n,r,f),e(n,r,d),e(t,r,d)];i.tri(x,p,y,a,a,a,[0,g(f),1,g(f),1,g(d)],m),i.tri(x,y,_,a,a,a,[0,g(f),1,g(d),0,g(d)],m)};o<=l+1e-6?h(s,o,Ze):s>=l-1e-6?h(s,o,c):(h(s,l,Ze),h(l,o,c))}function Vb(i,e,t,n,r,s,o,a,l,c){let[u,h,f,d]=[e(t,r,o),e(n,r,o),e(n,s,o),e(t,s,o)],m=(s-r)/c;i.tri(u,h,f,a,a,a,[0,0,1,0,1,m],l),i.tri(u,f,d,a,a,a,[0,0,1,m,0,m],l)}function Gb(i){let{info:e,state:t,frame:n,fold:r}=i;if(t.cover===null)return;let[s,o,a]=[e.width,e.sill,e.top],l=-e.faceOut;gn(i.frames,n,{x0:-.05,x1:s+.05,n0:l-.15,n1:l,y0:a,y1:a+.2},new K(Pb),new K(Mr),r);let c=Math.min(1,Math.max(0,t.cover));c>.01&&li(i.blinds,n,0,s,l-.07,a-c*(a-o),a,new K(16777215),r,.045)}function Hb(i){let{info:e,state:t,frame:n,fold:r}=i,[s,o]=[e.width,e.top],a=e.opening.type==="garage"&&(i.markClosed?!!t.sensed&&(t.cover??1)>=.95:(t.cover??1)<.95),l=a?Oe(ai,.8):new K(fo),c=a?Oe(ai,1):new K(Mr),[u,h]=[-e.faceOut-.012,e.faceRoom+.012],f=(d,m,g)=>gn(i.frames,n,{x0:d,x1:m,n0:u,n1:h,y0:g,y1:o+.045},l,c,r);f(-.045,.02,0),f(s-.02,s+.045,0),f(.02,s-.02,o-.02)}function Wb(i){let{info:e,state:t,frame:n,fold:r,mid:s}=i,[o,a]=[e.width,e.top],l=mr(e.opening,e.exterior),c=l==="passage",u=Y0(l),h=e.opening.swing==="out"?-1:1,f=h>0?e.faceRoom:-e.faceOut,d=e.opening.leaves===2,m=new K(fo),g=new K(Mr),x=.02,p=o-.02,y=q0(o,l,e.hingeAtStart,e.opening);if(y){for(let[S,A]of y.panels){let M=(T,C,P,F)=>gn(i.frames,n,{x0:T,x1:C,n0:s-.03,n1:s+.03,y0:P,y1:F},m,g,r);M(S,S+.04,.02,a-.02),M(A-.04,A,.02,a-.02),M(S,A,.02,.1),li(i.glass,n,S+.04,A-.04,s,.1,a-.02,Sr,r)}x=y.x0,p=y.x1}let _=d?(p-x)/2-.004:p-x,b=u?.06:.04;u&&(gn(i.frames,n,{x0:.02,x1:o-.02,n0:-e.faceOut-.02,n1:e.faceRoom,y0:0,y1:.02},new K(vu),g,r),e.exterior&&gn(i.frames,n,{x0:o/2-.08,x1:o/2+.08,n0:-e.faceOut-.1,n1:-e.faceOut,y0:a+.1,y1:a+.17},Oe(ai,.55),Oe(ai,.85),{cut:r.cut,bucket:Ze}));let v=c?[]:[[e.hingeAtStart,t.open]];d&&!c&&v.push([!e.hingeAtStart,t.open2??0]);for(let[S,A]of v){let M=Math.min(1,Math.max(0,A)),T=l==="sliding"?0:M*kb,C=l==="sliding"?M*_:0,P=(oe,se,ke)=>{let Ne=oe*Math.cos(T)-se*Math.sin(T)-C,qe=f+h*(se*Math.cos(T)+oe*Math.sin(T)+(C?.05:0));return n(S?x+Ne:p-Ne,qe,ke)},F={cut:r.cut,bucket:M>.05?Ze:r.bucket},L=i.markClosed?!!t.sensed&&M<.05:M>.9,R=L?Oe(ai,.7):new K(u?Db:Lb),D=L?Oe(ai,.9):new K(u?Ob:Fb),N=(oe,se,ke,Ne,qe=-b,J=0)=>gn(i.frames,P,{x0:oe,x1:se,n0:qe,n1:J,y0:ke,y1:Ne},R,D,F);l==="glass"?(N(0,.05,.01,a-.01),N(_-.05,_,.01,a-.01),N(.05,_-.05,.01,.12),N(.05,_-.05,a-.08,a-.01),li(i.glass,P,.05,_-.05,-b/2,.12,a-.08,Sr,F)):N(0,_,.01,a-.01),l==="front_glass"?li(i.glass,P,.12,_-.12,.001,a*.55,a-.18,Sr,F):u&&li(i.glass,P,.1,.18,.001,.3,a-.3,Sr,F);let B=Math.min(1.05,a*.5),X=u?.3:.012,[z,H]=u?[_-.11,_-.08]:[_-.16,_-.05],G=(oe,se)=>gn(i.frames,P,{x0:z,x1:H,n0:oe,n1:se,y0:B-X,y1:B+X},new K(Nb),new K(Ub),F);G(.004,.05),G(-b-.05,-b-.004)}}function Xb(i){let{info:e,state:t,frame:n,fold:r}=i,[s,o]=[e.width,e.top],a=Math.min(1,Math.max(0,t.cover??1)),l=new K(13951231),c=e.faceRoom-.03;a>.01&&li(i.blinds,n,.02,s-.02,c,o*(1-a),o,l,r,.5);let u=(1-a)*o;u>.01&&Vb(i.blinds,n,.02,s-.02,c,c+u,o+.03,l,r.bucket,.5)}var po={open:0,open2:0,tilt:0,tilt2:0,cover:null};function qb(i){let{info:e,frame:t,fold:n,mid:r}=i,[s,o,a]=[e.width,e.sill,e.top],[l,c]=[.04,.025],u=new K(fo),h=new K(Mr),f=(g,x,p,y)=>gn(i.frames,t,{x0:g,x1:x,n0:r-c,n1:r+c,y0:p,y1:y},u,h,n);f(0,l,o,a),f(s-l,s,o,a),f(l,s-l,o,o+.03),f(l,s-l,a-l,a);let d=Math.max(1,Math.round((s-2*l)/.9)),m=(s-2*l)/d;for(let g=1;g<d;g++)f(l+g*m-.02,l+g*m+.02,o+.03,a-l);for(let g=0;g<d;g++){let x=l+g*m+(g?.02:0),p=l+(g+1)*m-(g<d-1?.02:0);li(i.glass,t,x,p,r,o+.03,a-l,Sr,n)}}function Yb(i){let{info:e,state:t,frame:n,fold:r,mid:s}=i,[o,a,l]=[e.width,e.sill,e.top],[c,u]=[.06,.035],h=new K(fo),f=new K(Mr),d=new K(vu),m=(M,T,C,P)=>gn(i.frames,n,{x0:M,x1:T,n0:s-u,n1:s+u,y0:C,y1:P},h,f,r),g=a+(a>.05?c:.03);m(0,c,a,l),m(o-c,o,a,l),m(c,o-c,a,g),m(c,o-c,l-c,l),a>.3&&(gn(i.frames,n,{x0:-.04,x1:o+.04,n0:s+u,n1:e.faceRoom+.07,y0:a-.03,y1:a},d,f,r),e.exterior&&gn(i.frames,n,{x0:-.03,x1:o+.03,n0:-e.faceOut-.06,n1:s-u,y0:a-.04,y1:a-.02},d,f,r));let x=.055,[p,y]=[g,l-c],[_,b]=[s+u,s+u+.06],v=e.hingeAtStart,S=e.opening.leaves===2?[{atStart:v,x0:v?c:o/2,x1:v?o/2:o-c,open:t.open,tilt:t.tilt},{atStart:!v,x0:v?o/2:c,x1:v?o-c:o/2,open:t.open2??0,tilt:t.tilt2??0}]:[{atStart:v,x0:c,x1:o-c,open:t.open,tilt:t.tilt}],A=mr(e.opening,e.exterior);for(let M of S){let T=M.open>.02||M.tilt>.02,C=i.markClosed?!!t.sensed&&!T:T,P=C?Oe(ai,.75):new K(Ib),F=C?Oe(ai,.95):f,L=M.x1-M.x0,R=M.open*Bb,D=M.tilt*zb,N=(z,H,G)=>{let oe=G-p,se=H+oe*Math.sin(D),ke=p+oe*Math.cos(D),Ne=z*Math.cos(R)-(se-_)*Math.sin(R),qe=_+(se-_)*Math.cos(R)+z*Math.sin(R);return n(M.atStart?M.x0+Ne:M.x1-Ne,qe,ke)},B={cut:r.cut,bucket:R>.05?Ze:r.bucket},X=(z,H,G,oe,se=_,ke=b)=>gn(i.frames,N,{x0:z,x1:H,n0:se,n1:ke,y0:G,y1:oe},P,F,B);if(X(0,x,p,y),X(L-x,L,p,y),X(x,L-x,p,p+x),X(x,L-x,y-x,y),li(i.glass,N,x,L-x,(_+b)/2,p+x,y-x,C?Oe(ai,.16):Sr,B),A==="bars"){let[z,H]=[(p+y)/2,(_+b)/2];X(x,L-x,z-.012,z+.012,H-.012,H+.012),X(L/2-.012,L/2+.012,p+x,y-x,H-.012,H+.012)}}}function Ad(i,e,t){let n=new ot,r=new ot,s=new ot(!0),o=[],a=[],l=[];for(let c of i){let u={frames:n.count,glass:r.count,blinds:s.count},h=c.opening.type,f=mr(c.opening,c.exterior),d={info:c,state:e.get(c.opening.id)??po,frame:(m,g,x)=>[c.start[0]+c.axis[0]*m+c.toRoom[0]*g,x,c.start[1]+c.axis[1]*m+c.toRoom[1]*g],mid:(c.faceRoom-c.faceOut)/2,markClosed:c.opening.mark==="closed",fold:{cut:t,bucket:c.bucket},frames:n,glass:r,blinds:s};(h==="door"&&f!=="passage"||h==="garage")&&Hb(d),h==="door"?Wb(d):h==="garage"?Xb(d):f==="glass_wall"?qb(d):Yb(d),Gb(d),o.push({id:c.opening.id,start:u.frames,end:n.count}),a.push({id:c.opening.id,start:u.glass,end:r.count}),l.push({id:c.opening.id,start:u.blinds,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:o,glassTris:a,blindTris:l}}var Ed=Math.PI/180,Va=2400,mo=1600,Rd=9;function Su(i,e=64){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);for(let[s,o]of i)r.addColorStop(s,o);return n.fillStyle=r,n.fillRect(0,0,e,e),new cn(t)}function rT(i){let t=document.createElement("canvas");t.width=128,t.height=128/2;let n=t.getContext("2d"),r=i*9301+49297,s=()=>(r=(r*9301+49297)%233280)/233280;for(let o=0;o<7;o++){let a=128*(.2+.6*s()),l=128/2*(.45+.25*s()),c=128*(.12+.14*s()),u=n.createRadialGradient(a,l,0,a,l,c);u.addColorStop(0,"rgba(255,255,255,0.9)"),u.addColorStop(.6,"rgba(255,255,255,0.45)"),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.fillRect(0,0,128,128/2)}return new cn(t)}var wu=class{group=new mt;scene;bounds={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};view=null;rain;rainVel=new Float32Array(Va*3);snow;snowPhase=new Float32Array(mo);hail;clouds=[];bolt;disc;halo;last=0;nextBolt=0;boltUntil=0;onFlash=null;constructor(e){this.scene=e,this.group.name="live-weather",this.group.renderOrder=5;let t=new Be;t.setAttribute("position",new ze(new Float32Array(Va*6),3)),this.rain=new yn(t,new Ot({color:11128309,transparent:!0,opacity:.5,depthWrite:!1}));let n=Su([[0,"rgba(255,255,255,1)"],[.5,"rgba(255,255,255,0.6)"],[1,"rgba(255,255,255,0)"]],32),r=new Be;r.setAttribute("position",new ze(new Float32Array(mo*3),3)),this.snow=new Pn(r,new _n({color:16185855,size:.16,map:n,transparent:!0,opacity:.9,depthWrite:!1}));for(let c=0;c<mo;c++)this.snowPhase[c]=Math.random()*Math.PI*2;let s=new Be;s.setAttribute("position",new ze(new Float32Array(600*3),3)),this.hail=new Pn(s,new _n({color:15331839,size:.09,transparent:!0,opacity:.95,depthWrite:!1}));let o=Su([[0,"rgba(0,0,0,0.55)"],[.7,"rgba(0,0,0,0.25)"],[1,"rgba(0,0,0,0)"]]);for(let c=0;c<Rd;c++){let u=new Ur(new ar({map:rT(c+1),transparent:!0,opacity:0,depthWrite:!1,fog:!1})),h=new Ie(new Un(1,1),new lt({map:o,transparent:!0,opacity:0,depthWrite:!1,blending:vi}));h.rotation.x=-Math.PI/2,h.renderOrder=-1,this.clouds.push({sprite:u,shadow:h,angle:0,ring:1,lift:1,scale:1,speed:.6+Math.random()*.8,sx:0,sz:0}),this.group.add(u,h)}let a=new Be;a.setAttribute("position",new ze(new Float32Array(144),3)),this.bolt=new yn(a,new Ot({color:14674175,transparent:!0,opacity:1,blending:St,depthWrite:!1})),this.bolt.visible=!1;let l=Su([[0,"rgba(255,255,255,1)"],[.25,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]);this.disc=new Ur(new ar({map:l,transparent:!0,depthWrite:!1,blending:St,fog:!1})),this.halo=new Ur(new ar({map:Su([[0,"rgba(255,255,255,0.35)"],[1,"rgba(255,255,255,0)"]]),transparent:!0,depthWrite:!1,blending:St,fog:!1}));for(let c of[this.rain,this.snow,this.hail,this.bolt,this.disc,this.halo])c.frustumCulled=!1,this.group.add(c);this.group.visible=!1,e.add(this.group)}get cloud(){return this.view?.weather?.cloud??0}setBounds(e){this.bounds=e,this.seed()}set(e){let t=this.view;this.view=e,this.group.visible=!!e;let n=e?.weather??null;if(e&&n&&n.fog>.02&&!e.low){let r=new K(e.sky[0]/255,e.sky[1]/255,e.sky[2]/255);this.scene.fog=new Dr(r,.008+.04*n.fog)}else this.scene.fog instanceof Dr&&(this.scene.fog=null);(!t||t.low!==e?.low||!!t.weather!=!!n)&&this.seed(),this.placeDisc(),n?.lightning||this.endBolt()}windVector(){let e=this.view?.weather;if(!e)return[0,0];let n=((e.windFrom??270)+(this.view?.north??0)+180)*Ed,r=.4+7*e.wind;return[Math.sin(n)*r,-Math.cos(n)*r]}count(e,t){let n=this.view?.low??!1;return Math.round(Math.min(1,e)*t*(n?.3:1))}seed(){let e=this.bounds,t=this.view?.weather,n=()=>e.x0+Math.random()*(e.x1-e.x0),r=()=>e.z0+Math.random()*(e.z1-e.z0),s=()=>e.y0+Math.random()*(e.y1-e.y0),o=this.rain.geometry.getAttribute("position");for(let c=0;c<Va;c++){let u=n(),h=s(),f=r();o.setXYZ(c*2,u,h,f),o.setXYZ(c*2+1,u,h-.4,f),this.rainVel[c*3+1]=8.5+Math.random()*3}o.needsUpdate=!0;let a=this.snow.geometry.getAttribute("position");for(let c=0;c<mo;c++)a.setXYZ(c,n(),s(),r());a.needsUpdate=!0;let l=this.hail.geometry.getAttribute("position");for(let c=0;c<l.count;c++)l.setXYZ(c,n(),s(),r());l.needsUpdate=!0,this.rain.geometry.setDrawRange(0,this.count(t?.rain??0,Va)*2),this.snow.geometry.setDrawRange(0,this.count(t?.snow??0,mo)),this.hail.geometry.setDrawRange(0,this.count(t?.hail??0,600)),this.rain.visible=!!t&&t.rain>.01,this.snow.visible=!!t&&t.snow>.01,this.hail.visible=!!t&&t.hail>.01,this.clouds.forEach((c,u)=>{c.angle=u/Rd*Math.PI*2+Math.random()*.5,c.ring=1.7+Math.random()*.9,c.lift=.35+Math.random()*.35,c.scale=.55+Math.random()*.45,c.sx=e.x0+Math.random()*(e.x1-e.x0),c.sz=e.z0+Math.random()*(e.z1-e.z0)}),this.placeClouds(0)}placeClouds(e){let t=this.view,n=t?.weather,r=n?.cloud??0,s=this.bounds,o=(s.x0+s.x1)/2,a=(s.z0+s.z1)/2,l=Math.max(s.x1-s.x0,s.z1-s.z0),[c,u]=this.windVector(),h=Math.round(r*Rd),f=t?.sky??[20,28,44],d=(f[0]+f[1]+f[2])/765,m=n?.rain||n?.lightning?.3:0,g=Math.max(.12,Math.min(1,.28+d*.9-m-.25*Math.max(0,r-.6))),x=Math.hypot(c,u)/Math.max(20,l*4)*e*Math.sign(c||1);this.clouds.forEach((p,y)=>{let _=y<h;p.angle+=x*p.speed;let b=l*p.ring,v=p.sprite.material;v.color.setRGB(g,g*1.02,Math.min(1,g*1.12)),v.opacity=_?.3+.45*r:0,p.sprite.visible=_,p.sprite.position.set(o+Math.cos(p.angle)*b,s.y0+l*p.lift,a+Math.sin(p.angle)*b),p.sprite.scale.set(l*p.scale*1.6,l*p.scale*.6,1),p.sx+=c*.45*p.speed*e,p.sz+=u*.45*p.speed*e;let S=l*.4;p.sx>s.x1+S&&(p.sx=s.x0-S),p.sx<s.x0-S&&(p.sx=s.x1+S),p.sz>s.z1+S&&(p.sz=s.z0-S),p.sz<s.z0-S&&(p.sz=s.z1+S);let A=p.shadow.material;A.opacity=_?.12+.2*r:0,p.shadow.visible=_,p.shadow.position.set(p.sx,s.y0+.03,p.sz),p.shadow.scale.set(l*p.scale*.55,l*p.scale*.35,1)})}placeDisc(){let e=this.view,t=e?.sun,n=e?.weather?.cloud??0,r=!t||t.elevation<-3;if(!e||!t||!e.disc||n>.9||!r&&t.elevation<.5){this.disc.visible=this.halo.visible=!1;return}let s=this.bounds,o=new O((s.x0+s.x1)/2,s.y0,(s.z0+s.z1)/2),a=Math.max(70,Math.max(s.x1-s.x0,s.z1-s.z0)*3.5),l=((r?t.azimuth+180:t.azimuth)+e.north)*Ed,c=Math.max(8,Math.abs(t.elevation))*Ed,u=new O(Math.sin(l)*Math.cos(c),Math.sin(c),-Math.cos(l)*Math.cos(c)),h=o.addScaledVector(u,a),f=a*(r?.07:.1);this.disc.position.copy(h),this.halo.position.copy(h),this.disc.scale.setScalar(f),this.halo.scale.setScalar(f*3.2);let d=this.disc.material,m=this.halo.material,g=r?0:Math.max(0,1-t.elevation/20);d.color.set(r?14016242:new K(1,.9-.25*g,.6-.35*g)),m.color.copy(d.color),d.opacity=(r?.7:.95)*(1-n),m.opacity=(r?.35:.6)*(1-n),this.disc.visible=this.halo.visible=!0}endBolt(){this.bolt.visible&&(this.bolt.visible=!1,this.onFlash?.(!1))}strike(e){let t=this.bounds,r=(Math.random()<.5?-1:1)<0?t.x0-2-Math.random()*6:t.x1+2+Math.random()*6,s=t.z0+Math.random()*(t.z1-t.z0),o=t.y1+4,a=this.bolt.geometry.getAttribute("position"),l=24,c=o;for(let u=0;u<l;u++){let h=o-(u+1)/l*(o-t.y0),f=r+(Math.random()-.5)*1.6,d=s+(Math.random()-.5)*1.6;a.setXYZ(u*2,r,c,s),a.setXYZ(u*2+1,f,h,d),r=f,s=d,c=h}a.needsUpdate=!0,this.bolt.visible=!0,this.boltUntil=e+90+Math.random()*120,this.onFlash?.(!0)}step(e){let t=this.view,n=t?.weather;if(!t||!n)return this.last=0,!1;let r=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e;let s=this.bounds,o=s.y1-s.y0,[a,l]=this.windVector();if(this.rain.visible&&r){let c=this.rain.geometry.getAttribute("position"),u=c.array,h=this.count(n.rain,Va);for(let f=0;f<h;f++){let d=f*6,m=this.rainVel[f*3+1],g=u[d]+a*r,x=u[d+1]-m*r,p=u[d+2]+l*r;x<s.y0&&(x+=o,g=s.x0+Math.random()*(s.x1-s.x0)-a*.4,p=s.z0+Math.random()*(s.z1-s.z0)-l*.4);let y=.05;u[d]=g,u[d+1]=x,u[d+2]=p,u[d+3]=g-a*y,u[d+4]=x+m*y,u[d+5]=p-l*y}c.needsUpdate=!0}if(this.snow.visible&&r){let c=this.snow.geometry.getAttribute("position"),u=c.array,h=this.count(n.snow,mo),f=e/1e3;for(let d=0;d<h;d++){let m=d*3,g=this.snowPhase[d],x=u[m]+(a*.35+Math.sin(f*1.3+g)*.35)*r,p=u[m+1]-(.7+.5*(g*7%1))*r,y=u[m+2]+(l*.35+Math.cos(f*1.1+g)*.35)*r;p<s.y0&&(p+=o,x=s.x0+Math.random()*(s.x1-s.x0),y=s.z0+Math.random()*(s.z1-s.z0)),u[m]=x,u[m+1]=p,u[m+2]=y}c.needsUpdate=!0}if(this.hail.visible&&r){let c=this.hail.geometry.getAttribute("position"),u=c.array,h=this.count(n.hail,600);for(let f=0;f<h;f++){let d=f*3,m=u[d+1]-14*r;m<s.y0&&(m+=o),u[d]+=a*.5*r,u[d+1]=m,u[d+2]+=l*.5*r}c.needsUpdate=!0}return n.cloud>.01&&this.placeClouds(r),n.lightning&&!t.low?(this.nextBolt||(this.nextBolt=e+2500+Math.random()*6e3),e>=this.nextBolt&&(this.strike(e),this.nextBolt=e+3500+Math.random()*9e3),this.bolt.visible&&e>this.boltUntil&&this.endBolt()):this.nextBolt=0,this.rain.visible||this.snow.visible||this.hail.visible||n.cloud>.01||n.lightning}dispose(){this.endBolt(),this.group.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;n?.map?.dispose(),n?.dispose()}),this.scene.remove(this.group),this.scene.fog instanceof Dr&&(this.scene.fog=null)}};var Tu=46,ss=900;function sT(){let i=document.createElement("canvas");i.width=i.height=32;let e=i.getContext("2d"),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.35,"rgba(255,255,255,0.7)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),new cn(i)}var Au=class{group=new mt;scene;lift;tex=sT();arcs=new Map;sparkFields=[];sparks;sparkBase=new Float32Array(ss*3);sparkField=new Int16Array(ss);sparkPhase=new Float32Array(ss);sparkCount=0;last=0;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-energy";let n=new Be;n.setAttribute("position",new ze(new Float32Array(ss*3),3)),n.setAttribute("color",new ze(new Float32Array(ss*3),3)),this.sparks=new Pn(n,new _n({size:.4,map:this.tex,vertexColors:!0,transparent:!0,depthWrite:!1,blending:St})),this.sparks.frustumCulled=!1,this.group.add(this.sparks),e.add(this.group)}get active(){return this.arcs.size>0||this.sparkCount>0}setArcs(e){let t=new Set(e.map(n=>n.key));for(let[n,r]of this.arcs)t.has(n)||(this.group.remove(r.line,r.points),r.line.geometry.dispose(),r.line.material.dispose(),r.points.geometry.dispose(),r.points.material.dispose(),this.arcs.delete(n));for(let n of e){let r=this.arcs.get(n.key);if(!r){let o=new Be;o.setAttribute("position",new ze(new Float32Array(99),3));let a=new In(o,new Ot({transparent:!0,opacity:.4,depthWrite:!1,blending:St})),l=new Be;l.setAttribute("position",new ze(new Float32Array(Tu*3),3));let c=new Pn(l,new _n({size:.55,map:this.tex,transparent:!0,depthWrite:!1,blending:St}));a.frustumCulled=c.frustumCulled=!1;let u=new Float32Array(Tu);for(let h=0;h<Tu;h++)u[h]=Math.random();r={arc:n,line:a,points:c,phase:u,count:0,speed:0,a:new O,b:new O,c:new O},this.arcs.set(n.key,r),this.group.add(a,c)}r.arc=n;let s=new K(n.color[0]/255,n.color[1]/255,n.color[2]/255);r.line.material.color.copy(s),r.points.material.color.copy(s),r.count=Math.max(3,Math.min(Tu,Math.round(3+Math.sqrt(n.power)/2.2))),r.speed=.18+Math.min(.5,Math.log10(1+n.power)*.1),r.points.geometry.setDrawRange(0,r.count)}this.place()}setSparks(e){this.sparkFields=e;let t=e.reduce((r,s)=>r+s.quads.length*s.level,0),n=0;t>0&&e.forEach((r,s)=>{if(r.level<=0)return;let o=Math.round(ss*r.quads.length*r.level/Math.max(t,e.reduce((a,l)=>a+l.quads.length,0)));for(let a=0;a<o&&n<ss;a++,n++){let l=r.quads[Math.floor(Math.random()*r.quads.length)],c=Math.random(),u=Math.random();for(let h=0;h<3;h++){let f=l[0][h]+(l[1][h]-l[0][h])*c,d=l[3][h]+(l[2][h]-l[3][h])*c;this.sparkBase[n*3+h]=f+(d-f)*u+(h===1?.12:0)}this.sparkField[n]=s,this.sparkPhase[n]=Math.random()*Math.PI*2}}),this.sparkCount=n,this.sparks.geometry.setDrawRange(0,n),this.sparks.visible=n>0}world(e,t){let n=this.lift(e.floorId);return t.set(e.x,n.y+e.y,e.z),n.visible}place(){for(let e of this.arcs.values()){let t=this.world(e.arc.from,e.a),n=this.world(e.arc.to,e.b),r=e.a.distanceTo(e.b);e.c.copy(e.a).add(e.b).multiplyScalar(.5),e.c.y=Math.max(e.a.y,e.b.y)+.6+r*.22;let s=t&&n;e.line.visible=e.points.visible=s;let o=e.line.geometry.getAttribute("position");for(let a=0;a<=32;a++){let l=a/32;o.setXYZ(a,...this.bezier(e,l))}o.needsUpdate=!0}}bezier(e,t){let n=1-t;return[n*n*e.a.x+2*n*t*e.c.x+t*t*e.b.x,n*n*e.a.y+2*n*t*e.c.y+t*t*e.b.y,n*n*e.a.z+2*n*t*e.c.z+t*t*e.b.z]}step(e){if(!this.active||!this.group.visible)return this.last=0,!1;let t=this.last?Math.min(.1,(e-this.last)/1e3):0;this.last=e,this.place();for(let n of this.arcs.values()){if(!n.points.visible)continue;let r=n.points.geometry.getAttribute("position");for(let s=0;s<n.count;s++)n.phase[s]=(n.phase[s]+n.speed*t)%1,r.setXYZ(s,...this.bezier(n,n.phase[s]));r.needsUpdate=!0}if(this.sparkCount){let n=this.sparks.geometry.getAttribute("position"),r=this.sparks.geometry.getAttribute("color"),s=e/1e3;for(let o=0;o<this.sparkCount;o++){let a=this.sparkFields[this.sparkField[o]],l=this.lift(a?.floorId??null);n.setXYZ(o,this.sparkBase[o*3],l.visible?this.sparkBase[o*3+1]+l.dy:-1e3,this.sparkBase[o*3+2]);let c=Math.max(0,Math.sin(s*2.4+this.sparkPhase[o]*3))**6,u=l.visible?(.15+.85*c)*(.4+.6*(a?.level??0)):0;r.setXYZ(o,u,u*.86,u*.35)}n.needsUpdate=!0,r.needsUpdate=!0}return!0}setVisible(e){this.group.visible=e}dispose(){this.setArcs([]),this.sparks.geometry.dispose(),this.sparks.material.dispose(),this.tex.dispose(),this.scene.remove(this.group)}};var Kb=3,Eu=class{group=new mt;scene;lift;ringGeo=new zr(.92,1,48);spots=new Map;links=[];constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-sound",e.add(this.group)}get active(){return this.spots.size>0}set(e,t){let n=new Set(e.map(r=>r.id));for(let[r,s]of this.spots)if(!n.has(r)){for(let o of s.rings)this.group.remove(o),o.material.dispose();this.spots.delete(r)}for(let r of e){let s=this.spots.get(r.id);if(!s){let a=Array.from({length:Kb},()=>{let l=new Ie(this.ringGeo,new lt({transparent:!0,opacity:0,depthWrite:!1,blending:St,side:_t}));return l.rotation.x=-Math.PI/2,l.frustumCulled=!1,this.group.add(l),l});s={spot:r,rings:a},this.spots.set(r.id,s)}s.spot=r;let o=new K(r.color[0]/255,r.color[1]/255,r.color[2]/255);for(let a of s.rings)a.material.color.copy(o)}for(let r of this.links)this.group.remove(r.line),r.line.geometry.dispose(),r.line.material.dispose();this.links=t.map(([r,s])=>{let o=new Be;o.setAttribute("position",new ze(new Float32Array(51),3));let a=new In(o,new Ot({color:12616956,transparent:!0,opacity:.55,depthWrite:!1,blending:St}));return a.frustumCulled=!1,this.group.add(a),{a:r,b:s,line:a}})}step(e){if(!this.spots.size&&!this.links.length)return!1;let t=e/1e3;for(let n of this.spots.values()){let r=this.lift(n.spot.at.floorId),s=.9+1.6*n.spot.level;n.rings.forEach((o,a)=>{let l=(t*.55+a/Kb)%1;o.visible=r.visible,o.position.set(n.spot.at.x,r.y+n.spot.at.y,n.spot.at.z),o.scale.setScalar(.25+l*s),o.material.opacity=(1-l)*(.35+.5*n.spot.level)})}for(let n of this.links){let r=this.lift(n.a.floorId),s=this.lift(n.b.floorId);n.line.visible=r.visible&&s.visible;let o=n.line.geometry.getAttribute("position"),a=r.y+n.a.y,l=s.y+n.b.y,c=Math.hypot(n.a.x-n.b.x,n.a.z-n.b.z);for(let u=0;u<=16;u++){let h=u/16,f=Math.sin(Math.PI*h)*(.3+c*.12)+Math.sin(t*3+h*12)*.03;o.setXYZ(u,n.a.x+(n.b.x-n.a.x)*h,a+(l-a)*h+f,n.a.z+(n.b.z-n.a.z)*h)}o.needsUpdate=!0}return!0}dispose(){this.set([],[]),this.ringGeo.dispose(),this.scene.remove(this.group)}};var oT=Math.PI/180;function aT(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,32);return t.addColorStop(0,"rgba(255,255,255,0.9)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new cn(i)}var Ru=class{group=new mt;scene;lift;glowTex=aT();views=new Map;onChange=null;constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-screens",e.add(this.group)}get active(){return[...this.views.values()].some(e=>e.s.playing)}set(e){let t=new Set(e.map(n=>n.id));for(let[n,r]of this.views)t.has(n)||this.drop(n,r);for(let n of e){let r=this.views.get(n.id);if(!r){let o=document.createElement("canvas");o.width=512,o.height=288;let a=new cn(o);a.colorSpace=Mt;let l=new Ie(new Un(1,1),new lt({map:a,transparent:!0,toneMapped:!1}));l.renderOrder=6;let c=new Ie(new Un(1,1),new lt({map:this.glowTex,transparent:!0,depthWrite:!1,blending:St,side:_t}));c.renderOrder=2,this.group.add(l,c),r={s:n,sig:"",screen:l,glow:c,canvas:o,texture:a,image:null},this.views.set(n.id,r)}r.s=n;let s=[n.title,n.subtitle,n.app,n.picture,n.color.join(","),n.playing].join("|");if(s!==r.sig){let o=r.sig.split("|")[3]!==(n.picture??"");r.sig=s,o&&this.loadPicture(r),this.draw(r)}this.place(r)}}loadPicture(e){e.image=null;let t=e.s.picture;if(!t)return;let n=new Image;n.crossOrigin="anonymous",n.onload=()=>{e.s.picture!==t||!this.views.has(e.s.id)||(e.image=n,this.draw(e),this.onChange?.())},n.src=t}draw(e){let t=e.s,n=e.canvas.getContext("2d"),r=e.canvas.width,s=e.canvas.height,[o,a,l]=t.color,c=n.createLinearGradient(0,0,r,s);c.addColorStop(0,`rgb(${Math.round(o*.35)},${Math.round(a*.35)},${Math.round(l*.35)})`),c.addColorStop(1,"rgb(6,9,18)"),n.fillStyle=c,n.fillRect(0,0,r,s);let u=22,h=u;if(e.image){let f=s-u*2-30;n.save(),n.shadowColor=`rgba(${o},${a},${l},0.7)`,n.shadowBlur=24;let d=e.image.naturalWidth||1,m=e.image.naturalHeight||1,g=Math.max(f/d,f/m),x=f/g,p=f/g;n.drawImage(e.image,(d-x)/2,(m-p)/2,x,p,u,u,f,f),n.restore(),h=u*2+f}n.fillStyle="#ffffff",n.font="600 34px Figtree, Roboto, sans-serif",this.text(n,t.title||t.app||"",h,s/2-18,r-h-u),n.fillStyle="rgba(230,240,255,0.75)",n.font="26px Figtree, Roboto, sans-serif",this.text(n,t.subtitle,h,s/2+22,r-h-u),t.app&&(n.fillStyle=`rgb(${o},${a},${l})`,n.font="700 22px Figtree, Roboto, sans-serif",this.text(n,(t.playing?"\u25B6 ":"\u275A\u275A ")+t.app,h,s-u-14,r-h-u)),n.fillStyle=`rgba(${o},${a},${l},0.9)`,n.fillRect(0,s-6,r*(t.playing?1:.4),6),e.texture.needsUpdate=!0}text(e,t,n,r,s){let o=t;for(;o.length>1&&e.measureText(o).width>s;)o=o.slice(0,-2);e.fillText(o===t?o:`${o}\u2026`,n,r)}place(e){let t=e.s,n=t.rect,r=t.rotation*oT,s=this.lift(t.floorId),o=(n.x0+n.x1)/2,a=(m,g)=>[t.x+m*Math.cos(r)-g*Math.sin(r),t.z+m*Math.sin(r)+g*Math.cos(r)],l=n.x1-n.x0,c=n.y1-n.y0,[u,h]=a(o,n.z+.012);e.screen.position.set(u,s.y+(n.y0+n.y1)/2,h),e.screen.rotation.set(0,-r,0),e.screen.scale.set(l,c,1);let[f,d]=a(o,n.z-.18);e.glow.position.set(f,s.y+(n.y0+n.y1)/2,d),e.glow.rotation.set(0,-r,0),e.glow.scale.set(l*2.4,c*2.6,1),e.glow.material.color=new K(t.color[0]/255,t.color[1]/255,t.color[2]/255),e.screen.visible=e.glow.visible=s.visible}step(e){let t=!1;for(let n of this.views.values()){this.place(n);let r=n.glow.material;r.opacity=n.s.playing?.55+.25*Math.sin(e/900+n.s.x):.25,t||=n.s.playing}return t}drop(e,t){this.group.remove(t.screen,t.glow),t.screen.geometry.dispose(),t.screen.material.dispose(),t.texture.dispose(),t.glow.geometry.dispose(),t.glow.material.dispose(),this.views.delete(e)}dispose(){for(let[e,t]of this.views)this.drop(e,t);this.glowTex.dispose(),this.scene.remove(this.group)}};var $b=new K(.25,.55,1),Cd=new K(1,.3,.75),Cu=10,Iu=class{group=new mt;scene;lift;points=[];line;comet;rings=[];ringGeo=new zr(.18,.26,32);constructor(e,t){this.scene=e,this.lift=t,this.group.name="live-trail";let n=new Be;n.setAttribute("position",new ze(new Float32Array(3),3)),n.setAttribute("color",new ze(new Float32Array(3),3)),this.line=new In(n,new Ot({vertexColors:!0,transparent:!0,opacity:.9,depthWrite:!1,blending:St})),this.line.frustumCulled=!1,this.comet=new Ie(new qo(.12,12,8),new lt({color:Cd,transparent:!0,depthWrite:!1,blending:St})),this.group.add(this.line,this.comet),this.group.visible=!1,e.add(this.group)}set(e){this.points=e;for(let r of this.rings)this.group.remove(r),r.material.dispose();this.rings=e.map(r=>{let s=new Ie(this.ringGeo,new lt({color:$b.clone().lerp(Cd,r.age),transparent:!0,opacity:.4+.6*r.age,depthWrite:!1,blending:St,side:_t}));return s.rotation.x=-Math.PI/2,this.group.add(s),s});let t=Math.max(1,(e.length-1)*Cu+1);this.line.geometry.dispose();let n=new Be;n.setAttribute("position",new ze(new Float32Array(t*3),3)),n.setAttribute("color",new ze(new Float32Array(t*3),3)),this.line.geometry=n,this.group.visible=e.length>0}at(e,t){let n=this.points[e].at,r=this.points[Math.min(this.points.length-1,e+1)].at,s=this.lift(n.floorId),o=this.lift(r.floorId),a=s.y+n.y,l=o.y+r.y,c=Math.sin(Math.PI*t)*(.25+Math.hypot(n.x-r.x,n.z-r.z)*.08);return[n.x+(r.x-n.x)*t,a+(l-a)*t+c,n.z+(r.z-n.z)*t]}step(e){let t=this.points.length;if(!t)return!1;let n=this.line.geometry.getAttribute("position"),r=this.line.geometry.getAttribute("color"),s=0,o=new K;for(let a=0;a<Math.max(1,t-1);a++)for(let l=0;l<=Cu;l++){if(l===Cu&&a<t-2)continue;if(t===1&&l>0)break;let c=l/Cu;n.setXYZ(s,...this.at(a,t===1?0:c));let u=t===1?1:this.points[a].age+(this.points[Math.min(t-1,a+1)].age-this.points[a].age)*c;o.copy($b).lerp(Cd,u).multiplyScalar(.3+.7*u),r.setXYZ(s,o.r,o.g,o.b),s++}if(this.line.geometry.setDrawRange(0,s),n.needsUpdate=r.needsUpdate=!0,this.points.forEach((a,l)=>{let c=this.lift(a.at.floorId);this.rings[l].position.set(a.at.x,c.y+.03,a.at.z),this.rings[l].visible=c.visible,l===t-1&&this.rings[l].scale.setScalar(1+.35*Math.sin(e/250))}),t>1){let a=e/1e3%(1.2*(t-1)+1)/1.2,l=Math.min(t-2,Math.floor(a));this.comet.position.set(...this.at(l,Math.min(1,a-l))),this.comet.visible=!0}else this.comet.visible=!1;return!0}dispose(){this.set([]),this.line.geometry.dispose(),this.line.material.dispose(),this.comet.geometry.dispose(),this.comet.material.dispose(),this.ringGeo.dispose(),this.scene.remove(this.group)}};var Pu=class extends Ui{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ur;e.deleteAttribute("uv");let t=new gi({side:tn}),n=new gi,r=new Gr(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Ie(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Br(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ie(e,go(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ie(e,go(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ie(e,go(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Ie(e,go(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Ie(e,go(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Ie(e,go(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function go(i){return new Yo({color:0,emissive:16777215,emissiveIntensity:i})}function Id(i,e){if(e===Hh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qs||e===ha){let t=i.getIndex();if(t===null){let s=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)s.push(a);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,r=[];if(e===qs)for(let s=1;s<=n;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));return r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(r),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Zb(i,e=Math.PI/3){let t=i.index?i.toNonIndexed():i,n=t.attributes.position,r=n.count,s;if(n.isBufferAttribute===!0&&n.itemSize===3&&n.normalized===!1)s=n.array;else{s=new Float64Array(r*3);for(let b=0;b<r;b++)s[3*b+0]=n.getX(b),s[3*b+1]=n.getY(b),s[3*b+2]=n.getZ(b)}let o=Math.cos(e),a=(1+1e-10)*100,l=r/3,c=new Float64Array(l*3);for(let b=0;b<l;b++){let v=9*b,S=s[v+0],A=s[v+1],M=s[v+2],T=s[v+3],C=s[v+4],P=s[v+5],F=s[v+6],L=s[v+7],R=s[v+8],D=F-T,N=L-C,B=R-P,X=S-T,z=A-C,H=M-P,G=N*H-B*z,oe=B*X-D*H,se=D*z-N*X,ke=1/(Math.sqrt(G*G+oe*oe+se*se)||1);c[3*b+0]=G*ke,c[3*b+1]=oe*ke,c[3*b+2]=se*ke}let u=new Int32Array(r),h=new Float64Array(r*3),f=1;for(;f<r*2;)f<<=1;let d=f-1,m=new Int32Array(f),g=0;for(let b=0;b<r;b++){let v=3*b,S=Math.trunc(s[v+0]*a),A=Math.trunc(s[v+1]*a),M=Math.trunc(s[v+2]*a),T=(Math.imul(S,73856093)^Math.imul(A,19349663)^Math.imul(M,83492791))&d;for(;;){let C=m[T];if(C===0){let F=3*g;h[F+0]=S,h[F+1]=A,h[F+2]=M,m[T]=g+1,u[b]=g++;break}let P=3*(C-1);if(h[P+0]===S&&h[P+1]===A&&h[P+2]===M){u[b]=C-1;break}T=T+1&d}}let x=new Int32Array(g+1);for(let b=0;b<r;b++)x[u[b]+1]++;for(let b=0;b<g;b++)x[b+1]+=x[b];let p=new Int32Array(r),y=x.slice(0,g);for(let b=0;b<l;b++){let v=3*b;p[y[u[v+0]]++]=b,p[y[u[v+1]]++]=b,p[y[u[v+2]]++]=b}let _=new Float32Array(r*3);for(let b=0;b<l;b++){let v=3*b,S=c[v+0],A=c[v+1],M=c[v+2];for(let T=0;T<3;T++){let C=v+T,P=u[C],F=0,L=0,R=0;for(let N=x[P],B=x[P+1];N<B;N++){let X=3*p[N],z=c[X+0],H=c[X+1],G=c[X+2];S*z+A*H+M*G>o&&(F+=z,L+=H,R+=G)}let D=1/(Math.sqrt(F*F+L*L+R*R)||1);_[3*C+0]=F*D,_[3*C+1]=L*D,_[3*C+2]=R*D}}return t.setAttribute("normal",new qt(_,3,!1)),t}function Jb(i){let e=new Map,t=new Map,n=i.clone();return jb(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function jb(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)jb(i.children[n],e.children[n],t)}var Lu=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ud(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new kd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Fu(t,et.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Fu(t,et.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zd(t)})}load(e,t,n,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Hi.extractUrlBase(e);o=Hi.resolveURL(c,this.path)}else o=Hi.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s,o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===iy){try{o[et.KHR_BINARY_GLTF]=new Jd(e)}catch(h){r&&r(h);return}s=JSON.parse(o[et.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new rp(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case et.KHR_MATERIALS_UNLIT:o[h]=new Od;break;case et.KHR_DRACO_MESH_COMPRESSION:o[h]=new jd(s,this.dracoLoader);break;case et.KHR_TEXTURE_TRANSFORM:o[h]=new Qd;break;case et.KHR_MESH_QUANTIZATION:o[h]=new ep;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}};function lT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Vt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var et={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Dd=class{constructor(e){this.parser=e,this.name=et.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,r=t.cache.get(n);if(r)return r;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,u=new K(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],pn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Hr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Gr(u),c.distance=h;break;case"spot":c=new Qo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Od=class{constructor(){this.name=et.KHR_MATERIALS_UNLIT}getMaterialType(){return lt}extendParams(e,t,n){let r=[];e.color=new K(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Mt))}return Promise.all(r)}},Nd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ud=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(s,s)}return Promise.all(r)}},Bd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},kd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(r)}},zd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SHEEN}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new K(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Mt)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(r)}},Vd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(r)}},Gd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_VOLUME}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new K().setRGB(s[0],s[1],s[2],pn),Promise.all(r)}},Hd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_IOR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Wd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new K().setRGB(s[0],s[1],s[2],pn),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Mt)),Promise.all(r)}},Xd=class{constructor(e){this.parser=e,this.name=et.EXT_MATERIALS_BUMP}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(r)}},qd=class{constructor(e){this.parser=e,this.name=et.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Vt(this.parser,e,this.name)!==null?vn:null}extendMaterialParams(e,t){let n=Vt(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(r)}},Yd=class{constructor(e){this.parser=e,this.name=et.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Kd=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},$d=class{constructor(e){this.parser=e,this.name=et.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Fu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}},Zd=class{constructor(e){this.name=et.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let c of r.primitives)if(c.mode!==Gn.TRIANGLES&&c.mode!==Gn.TRIANGLE_STRIP&&c.mode!==Gn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let m of h){let g=new He,x=new O,p=new Cn,y=new O(1,1,1),_=new Br(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&y.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,g.compose(x,p,y));let b=null;for(let v in l)if(v==="_COLOR_0"){let S=l[v];_.instanceColor=new Bi(S.array,S.itemSize,S.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(b===null){let A=_.geometry;b=new Be,b.name=A.name;for(let M in A.attributes)b.setAttribute(M,A.attributes[M]);for(let M in A.morphAttributes)b.morphAttributes[M]=A.morphAttributes[M];A.index!==null&&b.setIndex(A.index),b.morphTargetsRelative=A.morphTargetsRelative;for(let M of A.groups)b.addGroup(M.start,M.count,M.materialIndex);A.boundingBox!==null&&(b.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(b.boundingSphere=A.boundingSphere.clone()),b.drawRange.start=A.drawRange.start,b.drawRange.count=A.drawRange.count,b.userData=Object.assign({},A.userData),_.geometry=b}let S=l[v];b.setAttribute(v,new Bi(S.array,S.itemSize,S.normalized))}At.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),d.push(_)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},iy="glTF",Ga=12,Qb={JSON:1313821514,BIN:5130562},Jd=class{constructor(e){this.name=et.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==iy)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-Ga,s=new DataView(e,Ga),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let l=s.getUint32(o,!0);if(o+=4,l===Qb.JSON){let c=new Uint8Array(e,Ga+o,a);this.content=n.decode(c)}else if(l===Qb.BIN){let c=Ga+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},jd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=et.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=np[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=np[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=xo[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(let m in d.attributes){let g=d.attributes[m],x=l[m];x!==void 0&&(g.normalized=x)}h(d)},a,c,pn,f)})})}},Qd=class{constructor(){this.name=et.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},ep=class{constructor(){this.name=et.KHR_MESH_QUANTIZATION}},Du=class extends xi{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,g=m-c,x=-2*d+3*f,p=d-f,y=1-x,_=p-f+h;for(let b=0;b!==a;b++){let v=o[g+b+a],S=o[g+b+l]*u,A=o[m+b+a],M=o[m+b]*u;s[b]=y*v+_*S+x*A+p*M}return s}},cT=new Cn,tp=class extends Du{interpolate_(e,t,n,r){let s=super.interpolate_(e,t,n,r);return cT.fromArray(s).normalize().toArray(s),s}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ey={9728:Ut,9729:Bt,9984:Ql,9985:Hs,9986:qr,9987:Qn},ty={33071:dn,33648:Cs,10497:Jn},Pd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},np={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uT={CUBICSPLINE:void 0,LINEAR:Lr,STEP:Pr},Ld={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new gi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),i.DefaultMaterial}function os(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fT(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(r){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(s){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function dT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pT(i){let e,t=i.extensions&&i.extensions[et.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Fd(t.attributes):e=i.indices+":"+Fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Fd(i.targets[n]);return e}function Fd(i){let e="",t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ip(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gT=new He,rp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new lT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);r=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&o<98?this.textureLoader=new Zo(this.options.manager):this.textureLoader=new ea(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};return os(s,a,r),Ri(a,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),s=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())s(u,a.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[et.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){n.load(Hi.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=Pd[r.type],a=xo[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new qt(c,o,l))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],l=Pd[r.type],c=xo[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,g,x;if(d&&d!==h){let p=Math.floor(f/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,_=t.cache.get(y);_||(g=new c(a,p*d,r.count*d/u),_=new Nr(g,d/u),t.cache.add(y,_)),x=new or(_,l,f%d/u,m)}else a===null?g=new c(r.count*l):g=new c(a,f,r.count*l),x=new qt(g,l,m);if(r.sparse!==void 0){let p=Pd.SCALAR,y=xo[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,v=new y(o[1],_,r.sparse.count*p),S=new c(o[2],b,r.sparse.count*l);a!==null&&(x=new qt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let A=0,M=v.length;A<M;A++){let T=v[A];if(x.setX(T,S[A*l]),l>=2&&x.setY(T,S[A*l+1]),l>=3&&x.setZ(T,S[A*l+2]),l>=4&&x.setW(T,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){let r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=ey[f.magFilter]||Bt,u.minFilter=ey[f.minFilter]||Qn,u.wrapS=ty[f.wrapS]||Jn,u.wrapT=ty[f.wrapT]||Jn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ut&&u.minFilter!==Bt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=r.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(g){let x=new $t(g);x.needsUpdate=!0,f(x)}),t.load(Hi.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ri(h,o),h.userData.mimeType=o.mimeType||mT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){let s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[et.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[et.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=s.associations.get(o);o=s.extensions[et.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new _n,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ot,ln.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gi}loadMaterial(e){let t=this,n=this.json,r=this.extensions,s=n.materials[e],o,a={},l=s.extensions||{},c=[];if(l[et.KHR_MATERIALS_UNLIT]){let h=r[et.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{let h=s.pbrMetallicRoughness||{};if(a.color=new K(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],pn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Mt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=_t);let u=s.alphaMode||Ld.OPAQUE;if(u===Ld.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ld.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==lt&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Fe(1,1),s.normalTexture.scale!==void 0)){let h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==lt&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==lt){let h=s.emissiveFactor;a.emissive=new K().setRGB(h[0],h[1],h[2],pn)}return s.emissiveTexture!==void 0&&o!==lt&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Mt)),Promise.all(c).then(function(){let h=new o(a);return s.name&&(h.name=s.name),Ri(h,s),t.associations.set(h,{materials:e}),s.extensions&&os(r,h,s),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[et.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return ny(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=pT(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[et.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=ny(new Be,c,t),c.mode===Gn.TRIANGLE_STRIP?f=f.then(d=>Id(d,ha)):c.mode===Gn.TRIANGLE_FAN&&(f=f.then(d=>Id(d,qs))),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?hT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){let g=u[d],x=o[d],p,y=c[d];if(x.mode===Gn.TRIANGLES||x.mode===Gn.TRIANGLE_STRIP||x.mode===Gn.TRIANGLE_FAN||x.mode===void 0){let _=s.isSkinnedMesh===!0,b=g.hasAttribute("skinIndex")&&g.hasAttribute("skinWeight");_&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=_&&b?new Uo(g,y):new Ie(g,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(x.mode===Gn.LINES)p=new yn(g,y);else if(x.mode===Gn.LINE_STRIP)p=new In(g,y);else if(x.mode===Gn.LINE_LOOP)p=new ko(g,y);else if(x.mode===Gn.POINTS)p=new Pn(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&dT(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Ri(p,s),x.extensions&&os(r,p,x),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&os(r,h[0],s),h[0];let f=new mt;s.extensions&&os(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Kh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Bn(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ri(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){let s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new He;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Bo(a,l)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){let d=r.channels[h],m=r.samplers[d.sampler],g=d.target,x=g.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,y=r.parameters!==void 0?r.parameters[m.output]:m.output;g.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],m=h[2],g=h[3],x=h[4],p=[];for(let _=0,b=f.length;_<b;_++){let v=f[_],S=d[_],A=m[_],M=g[_],T=x[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let C=n._createAnimationTracks(v,S,A,M,T);if(C)for(let P=0;P<C.length;P++)p.push(C[P])}let y=new $o(s,void 0,p);return Ri(y,r),y})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){let o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gT)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,m=h[0];u.pivot=new O().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Ns:c.length>1?u=new mt:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ri(u,s),s.extensions&&os(n,u,s),s.matrix!==void 0){let h=new He;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,s=new mt;n.name&&(s.name=r.createUniqueName(n.name)),Ri(s,n),n.extensions&&os(t,s,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?s.add(Jb(f)):s.add(f)}let c=u=>{let h=new Map;for(let[f,d]of r.associations)(f instanceof ln||f instanceof $t)&&h.set(f,d);return u.traverse(f=>{let d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}wr[s.path]===wr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(wr[s.path]){case wr.weights:u=zi;break;case wr.rotation:u=Vi;break;case wr.translation:case wr.scale:u=hr;break;default:n.itemSize===1?u=zi:u=hr;break}let h=r.interpolation!==void 0?uT[r.interpolation]:Lr,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let g=new u(l[d]+"."+wr[s.path],t.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=ip(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let r=this instanceof Vi?tp:Du;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function xT(i,e,t){let n=e.attributes,r=new kt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let u=ip(xo[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new O,l=new O;for(let c=0,u=s.length;c<u;c++){let h=s[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let g=ip(xo[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;let o=new bn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function ny(i,e,t){let n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=np[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return $e.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Ri(i,e),xT(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?fT(i,e.targets,t):i})}var ry=new Map,sy=new Map,bT=50*Math.PI/180;function yT(i){i.traverse(e=>{let t=e;if(!t.isMesh)return;let n=t.geometry,r=t.material,s=r.name??"";t.userData.paint=!!r.userData?.paint||/^Paint/.test(s),n.getAttribute("normal")||(t.userData.paint?n.computeVertexNormals():t.geometry=Zb(n,bT)),r.flatShading=!1;let o=/glass/i.test(s);r.metalness=t.userData.paint?.55:o?0:Math.min(r.metalness??0,.4),r.roughness=t.userData.paint?.28:o?.05:Math.max(r.roughness??.6,.45),o&&(r.transparent=!0,r.depthWrite=!1,r.opacity=Math.max(r.opacity,.9))})}function oy(i){let e=ry.get(i);if(!e){let t=z0();if(!t)return Promise.resolve(!1);e=t(i).then(n=>n&&new Promise(r=>{new Lu().parse(n,"",s=>{yT(s.scene);let o=new kt().setFromObject(s.scene),a=[o.max.x-o.min.x,o.max.y-o.min.y,o.max.z-o.min.z];s.scene.position.set(-(o.max.x+o.min.x)/2,-o.min.y,-(o.max.z+o.min.z)/2);let l=new mt;l.add(s.scene),sy.set(i,{root:l,size:a}),V0(i),r({root:l,size:a})},()=>r(null))})).catch(()=>null),ry.set(i,e)}return e.then(t=>!!t)}function ay(i,e){let t=sy.get(i);if(!t)return null;let n=t.root.clone(!0),r=[];n.traverse(o=>{let a=o;if(!a.isMesh)return;let l=a.material.clone();a.userData.paint&&e.paint&&(l.color=new K(e.paint)),a.material=l,r.push(l)});let s=new mt;return s.add(n),s.scale.set((e.mirror?-1:1)*(e.w/t.size[0]),e.h/t.size[1],e.d/t.size[2]),s.position.set(e.x,e.y,e.z),s.rotation.y=-e.rotation*Math.PI/180,s.userData.own=r,s}function sp(i){for(let e of i.userData.own??[])e.dispose()}function ly(i,e){let t=new Zs(e),n=t.fromScene(new Pu,.04).texture;t.dispose();let r=new Jo(16777215,9081766,.9),s=new Hr(16777215,1.6);return s.position.set(-4,9,6),i.add(r,s),{env:n,dispose:()=>{n.dispose(),r.removeFromParent(),s.removeFromParent()}}}function cy(i,e){for(let t of i.userData.own??[])t.envMap=e,t.envMapIntensity=.9}var _T=.3,uy=2.6,Ou=.05;function vT(i,e,t,n){let r=n*.7071,s=[i,[i[0]+n,i[1]],[i[0]-n,i[1]],[i[0],i[1]+n],[i[0],i[1]-n]],o=[[i[0]+r,i[1]+r],[i[0]-r,i[1]+r],[i[0]+r,i[1]-r],[i[0]-r,i[1]-r]];return s.every(a=>ft(a,e))&&!t.some(a=>[...s,...o].some(l=>ft(l,a)))}function hy(i,e,t){let n=Math.ceil(Math.hypot(e[0]-i[0],e[1]-i[1])/Ou);for(let r=1;r<n;r++)if(!t([i[0]+(e[0]-i[0])*r/n,i[1]+(e[1]-i[1])*r/n]))return!1;return!0}function MT(i,e,t){let n=null,r=null;for(let s=e;s<=t+1e-6;s+=Ou){let o=i(s);if(o&&(r??=s),(!o||s+Ou>t+1e-6)&&r!==null){let a=o?s:s-Ou;(!n||a-r>n[1]-n[0])&&(n=[r,a]),r=null}}return n}function fy(i,e=.32,t=.22,n=[]){let r=i.map(_=>_[0]),s=i.map(_=>_[1]),[o,a,l,c]=[Math.min(...r),Math.max(...r),Math.min(...s),Math.max(...s)],u=c-l>=a-o,h=_=>vT(_,i,n,t),f=(_,b)=>u?[_,b]:[b,_],[d,m,g,x]=u?[o,a,l,c]:[l,c,o,a],p=[],y=!0;for(let _=d+t;_<=m-t+1e-6;_+=e){let b=MT(M=>h(f(_,M)),g,x);if(!b||b[1]-b[0]<.2)continue;let v=M=>M?[f(_,b[0]),f(_,b[1])]:[f(_,b[1]),f(_,b[0])],S=v(y),A=p[p.length-1];if(A&&n.length>0&&!hy(A,S[0],h)){let M=v(!y);if(!hy(A,M[0],h))continue;S=M,y=!y}p.push(...S),y=!y}return p}function ap(i,e=.7,t=12){return Array.from({length:t},(n,r)=>[i[0]+Math.cos(r/t*Math.PI*2)*e,i[1]+Math.sin(r/t*Math.PI*2)*e])}var op=i=>Math.atan2(Math.sin(i),Math.cos(i));function dy(i,e,t){let n;if(e.mode==="cleaning"){if(i.path.length===0)return!1;n=i.path[i.next%i.path.length]}else if(e.mode==="returning"||e.mode==="docked")n=e.rest;else return!1;let[r,s]=[n[0]-i.pos[0],n[1]-i.pos[1]],o=Math.hypot(r,s);if(o<.02){if(e.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let l=op(e.restHeading-i.heading);return Math.abs(l)<.02?!1:(i.heading+=Math.sign(l)*Math.min(Math.abs(l),uy*t),!0)}let a=op(Math.atan2(r,s)-i.heading);if(i.heading=op(i.heading+Math.sign(a)*Math.min(Math.abs(a),uy*t)),Math.abs(a)<.35){let l=Math.min(o,_T*t);i.pos=[i.pos[0]+r/o*l,i.pos[1]+s/o*l]}return!0}var bo=null,py=new Map,my=16758087;function ST(i,e,t){let n=jt(i.type);if(n?.light)Fa(e,n,{x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h},0,my);else if(i.lamp)lp(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:0,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),my);else{let r={id:"preview",type:i.type,x:0,z:0,rotation:0,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Da(e,t,new ot,r)}}function wT(i){let e=i.getCenter(new O),t=new Bn(-1,1,1,-1,.01,100);t.position.copy(e).add(new O(.9,.75,1.3).normalize().multiplyScalar(20)),t.lookAt(e),t.updateMatrixWorld();let n=.05;for(let s of[i.min.x,i.max.x])for(let o of[i.min.y,i.max.y])for(let a of[i.min.z,i.max.z]){let l=new O(s,o,a).applyMatrix4(t.matrixWorldInverse);n=Math.max(n,Math.abs(l.x),Math.abs(l.y))}let r=n*1.12;return Object.assign(t,{left:-r,right:r,top:r,bottom:-r}),t.updateProjectionMatrix(),t}function TT(i,e=180,t,n=1.3){let r=[i.type,i.w,i.d,i.h,i.variant??"",e,n].join("|"),s=py.get(r);if(s)return s;t&&Wc(t),bo??=new Js({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),bo.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),bo.setSize(e,e,!1),bo.setClearColor(0,0);let[o,a]=[new ot,new Yt];ST(i,o,a);let l=new Ie(o.geometry(),new lt({vertexColors:!0,color:new K(n,n,n)})),c=new yn(a.geometry(),new Ot({vertexColors:!0,color:new K(n*1.8,n*1.8,n*1.8)})),u=new Ui;u.add(l,c),bo.render(u,wT(new kt().setFromObject(l)));let h=bo.domElement.toDataURL("image/png");for(let f of[l,c])f.geometry.dispose(),f.material.dispose();return py.set(r,h),h}var xy={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},AT=1.4,up=32,rt=2767456,ET=1911110,cp=450,by=125,RT=.08,CT=new K(1714765);function IT(){let e=navigator.deviceMemory??8,t=navigator.hardwareConcurrency||8;return e<=3||t<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var hp=class{host;options;renderer;scene=new Ui;camera=new Xt(38,1,.1,400);controls;labels;root=new mt;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;meshes=[];meshLight=null;meshAsked=new Set;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;pinHooks={furnishing:()=>this.furnish,pressedWhileFurnishing:e=>this.pendingDevice=e,selectWhileFurnishing:e=>{this.selectDevice(e),this.options.onDeviceSelect?.(e)},centre:e=>{let[t,n]=[e.getBoundingClientRect(),this.host.getBoundingClientRect()];return{x:t.left+t.width/2-n.left,y:t.top+t.height/2-n.top}},tap:(e,t,n)=>this.options.onDeviceTap?.(e,t,n),hold:(e,t,n)=>this.options.onDeviceHold?.(e,t,n)};deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weatherLayer;skyView=null;weatherTimer;energyLayer;soundLayer;screenLayer;trailLayer;liveAnchors=[];liveAnchorCb=null;roomTint=null;houseRadius=20;startView=null;fpsStart=0;constructor(e,t={}){this.host=e,this.options=t,this.explode=t.explode??!0,this.renderer=this.makeRenderer(t.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="nf-labels",e.append(this.labels),this.patternTexture=PT(),this.blindTexture=LT(),this.haloTexture=DT(),this.ground=new Ie(new Un(1,1),new lt({transparent:!0,blending:St,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.weatherLayer=new wu(this.scene),this.energyLayer=new Au(this.scene,this.liftOf),this.soundLayer=new Eu(this.scene,this.liftOf),this.screenLayer=new Ru(this.scene,this.liftOf),this.screenLayer.onChange=()=>this.invalidate(),this.trailLayer=new Iu(this.scene,this.liftOf),this.weatherLayer.onFlash=n=>this.host.classList.toggle("live-flash",n),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(e)),this.resize()}get low(){return this.lowQuality}setParked(e){let t=[...e].map(([n,r])=>`${n}=${r}`).sort().join("|");t!==this.parkedSig&&(this.parkedSig=t,this.parked=e,this.building&&(this.rebuild(),this.invalidate()))}setStats(e){this.statsOn=e}setLabelInset(e){this.labelInset!==e&&(this.labelInset=e,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(e){this.orbitSpeed=e,this.orbitLast=0,this.invalidate()}setQuality(e){let t=this.renderer.domElement,n=this.makeRenderer(e);this.rebuildTier(),this.applyTierFlags(),t.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setMeshSource(e){k0(e)}setPacks(e){Wc(e),this.building&&(this.rebuild(),this.invalidate())}setBuilding(e){let t=this.building===null;this.building=e,this.rebuild(),t&&this.fit(0),this.invalidate()}setFloor(e,t=!0){this.floorId=e,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!t),this.applyHighlight(),this.fit(t?700:0)}setFloorStack(e){e!==this.floorStack&&(this.floorStack=e,this.applyTargets(!1))}setKeepRoof(e){e!==this.keepRoof&&(this.keepRoof=e,this.invalidate())}setExplode(e){e!==this.explode&&(this.explode=e,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(e){if(this.roomId=e,this.labelsDirty=!0,this.applyHighlight(),!e){this.fit(700);return}let t=this.floors.find(u=>u.floor.rooms.some(h=>h.id===e)),n=t?.floor.rooms.find(u=>u.id===e);if(!t||!n)return;let r=n.start_view;if(r){let u=t.floor.elevation+t.ty,[h,f]=Kc(n.points),d=r.target??{x:h,y:.3,z:f};this.controls.flyTo({target:new O(d.x,d.y+u,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=Kc(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new O(Math.max(...a)-Math.min(...a),t.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new O(s,t.floor.elevation+t.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(e){this.wallMode=e;for(let t of this.floors)this.buildLamps(t);this.invalidate()}setDevices(e){this.devices=e,this.labelsDirty=!0,this.effectFloors=new Set(e.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(e.map(n=>[n.id,n.floorId]));let t=new Set;for(let n of e){t.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:qg(n.id,this.pinHooks),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".nf-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".nf-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".nf-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".nf-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("nf-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("nf-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--nf-glow",c):s.style.removeProperty("--nf-glow"))}for(let[n,r]of this.devicePins)t.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(e){let t=JSON.stringify([...e]);t!==this.roofWindowsKey&&(this.roofWindowsKey=t,this.roofWindows=e,this.buildRoofMesh(),this.invalidate())}setPersons(e){this.labelsDirty=!0,this.persons=e;let t=new Set;for(let n of e){t.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="nf-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)t.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(e,t){this.pickFurniture=e,this.pickOpenings=t}setAccent(e){let t=Wg(e),n=t?1:0;n===ou.value&&(!t||su.value.equals(new O(...t)))||(ou.value=n,t&&su.value.set(...t),this.invalidate())}setTheme(e){if(e===this.theme)return;this.theme=e,this.themeUniform.value=Hg(e);let t=Ea(e),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=t,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(e){this.furnish=e,e||this.selectFurniture(null),this.invalidate()}selectFurniture(e){e&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=e,this.updateGhost(),this.invalidate()}setSun(e){this.sun=e;for(let t of this.floors)this.buildSun(t);this.invalidate()}liftOf=e=>{if(!e)return{y:0,dy:0,visible:!0};let t=this.floorMap.get(e);return t?{y:t.floor.elevation+t.y,dy:t.y,visible:t.group.visible}:{y:0,dy:0,visible:!1}};setLiveEnergy(e,t){this.energyLayer.setArcs(e),this.energyLayer.setSparks(t),this.invalidate()}setLiveSound(e,t){this.soundLayer.set(e,t),this.invalidate()}setLiveTrail(e){this.trailLayer.set(e),this.invalidate()}setLiveScreens(e){let t=[];for(let n of e){let r=this.building?.floors.find(a=>a.id===n.floorId),s=r?.furniture.find(a=>a.id===n.furnitureId),o=s&&r?cu(s,r):null;!s||!o||t.push({...n,x:s.x,z:s.z,rotation:s.rotation,rect:o})}this.screenLayer.set(t),this.invalidate()}setLiveAnchors(e,t){this.liveAnchors=e,this.liveAnchorCb=t,this.invalidate()}placeLhAnchors(){let e=this.liveAnchorCb;if(!e||!this.liveAnchors.length)return;let t=new O;this.liveAnchors.forEach((n,r)=>{let s=this.liftOf(n.floorId);t.set(n.x,s.y+n.y,n.z).project(this.camera);let o=s.visible&&t.z<1&&Math.abs(t.x)<1.15&&Math.abs(t.y)<1.15;e(r,(t.x+1)/2*this.size.w,(1-t.y)/2*this.size.h,o)})}setSky(e){this.skyView=e,this.weatherLayer.set(e?{...e,low:e.low||this.lowQuality}:null);for(let t of this.floors)this.buildSun(t);this.invalidate()}setRoomTint(e){let t=!!e!=!!this.roomTint;if(this.roomTint=e,this.tintTick=!0,this.applyHighlight(),t)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(e){this.screens=e;for(let t of this.floors)this.buildScreens(t);this.invalidate()}fillRoomPin(e,t,n){if(e.textContent=t||"\u2013",n){let r=document.createElement("small");r.textContent=n,e.append(r),e.classList.add("nf-pin-info")}else e.classList.remove("nf-pin-info")}setRoomInfo(e){if(!(e.size===this.roomInfo.size&&[...e].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=e;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,e.get(r.room.id))}}setFloorInfo(e){this.floorInfo=e;for(let t of this.floors){let n=t.label.querySelector("span"),r=e.get(t.floor.id)??this.options.floorInfo?.(t.floor)??"";n&&n.textContent!==r&&(n.textContent=r,t.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(e){this.openingTargets=e,this.invalidate()}setFridgeDoors(e){for(let[t,n]of e){let r=this.fridges.get(t)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};r.tl=n.left?1:0,r.tr=n.right?1:0,this.fridges.set(t,r)}for(let t of[...this.fridges.keys()])e.has(t)||this.fridges.delete(t);this.invalidate()}stepFridges(e){let t=Ff(e),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*t,n.add(r)}if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(e){let t=new ot;for(let n of e.floor.furniture){if(n.type!=="fridge_smart")continue;let r=this.fridges.get(n.id);ld(t,n,kn(e.floor,n),r?.l??0,r?.r??0)}e.fridgeMesh.geometry.dispose(),e.fridgeMesh.geometry=t.geometry(),e.fridgeMesh.visible=t.count>0}resetView(){this.fit(700)}setStartView(e){this.startView=e}currentView(){let e=this.controls.view,t=this.floorBase(this.floorId);return{theta:e.theta,phi:e.phi,radius:e.radius,target:{x:e.target.x,y:e.target.y-t,z:e.target.z}}}floorBase(e){let t=e===null?void 0:this.floorMap.get(e);return t?t.floor.elevation+t.ty:0}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer),this.weatherLayer.dispose(),this.energyLayer.dispose(),this.soundLayer.dispose(),this.screenLayer.dispose(),this.trailLayer.dispose(),this.resizeObserver.disconnect(),this.intersection?.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),this.groundTexture?.dispose(),this.haloTexture.dispose();for(let e of this.robots.values())e.led.dispose();this.robots.clear(),this.robotGeo?.dispose(),this.robotLedGeo?.dispose(),this.robotMat?.dispose(),this.meshLight?.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(e=>this.render(e)))}makeRenderer(e){let t=e==="low"||e==="auto"&&IT();this.lowQuality=t,this.weatherLayer&&this.skyView&&this.weatherLayer.set({...this.skyView,low:this.skyView.low||t}),this.highQuality=e==="high";let n=new Js({antialias:!t,alpha:!0,powerPreference:t?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1:e==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Mt,n.domElement.className="nf-canvas",this.host.prepend(n.domElement),n}makeControls(){return new za(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(e,t)=>this.onTap(e,t),hold:(e,t)=>this.onHold(e,t),swipeStart:(e,t,n,r)=>this.swipeStart(e,t,n,r),swipeMove:e=>this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"move",e,this.swipe.x,this.swipe.y),swipeEnd:()=>{this.swipe&&this.options.onDeviceSwipe?.(this.swipe.entity,"end",0,this.swipe.x,this.swipe.y),this.swipe=null},grab:(e,t)=>this.grabFurniture(e,t),drag:(e,t)=>this.dragFurniture(e,t),drop:()=>this.dropFurniture(),doubleTap:(e,t)=>{let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(e,t):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):this.options.onBack?.()}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.size={w:e,h:t},this.labelsDirty=!0,this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.meshes)e.group.removeFromParent(),sp(e.group);this.meshes=[];for(let e of this.floors){e.group.traverse(t=>{t.geometry?.dispose()});for(let t of Object.values(e.materials))t.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}buildLightSurface(e){let t=this.lowQuality?.5:.25,n=Kf(e.floor,e.geo.walls2d,e.geo.wallBuckets,e.geo.openings,t,e.geo.holes,e.geo.roofUnder),r=FT(e.floor,e.geo.openRooms);if(e.lightZones=r.some((a,l)=>a!==l)?r:null,e.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b])}e.lightSurface=n;let s=new Be;s.setAttribute("position",new ze(n.pos,3)),s.setAttribute("color",new ze(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new ze(n.fold,1));let o=new Or(new Uint32Array(n.pos.length/3),1);o.setUsage(Xh),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),e.glowMesh.geometry.dispose(),e.glowMesh.geometry=s,e.glowSig="",this.buildGlow(e)}buildGlow(e){let t=e.lightSurface;if(!t)return;let n=zg(e.floor,e.lightZones,this.devices,h=>this.glowOf(h)),r=t.doors.map(h=>{let f=e.geo.openings.find(m=>m.opening.id===h.id);if(f&&mr(f.opening,f.exterior)==="passage")return 1;let d=e.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===e.glowSig)return;e.glowSig=s;let o=e.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){e.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=$f(t,n,.42,r);if(this.roomTint){let h=e.floor.rooms.length;for(let f=0;f<t.room.length;f++)if(t.room[f]!==h)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let h=0;h<l.length/18;h++){let f=!1;for(let d=h*18;d<h*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[u++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),e.glowMesh.visible=u>0}rebuild(){let e=new Map(this.floors.map(s=>[s.floor.id,{y:s.y,o:s.o}])),t=new Map(this.floors.map(s=>[s.floor.id,s.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((s,o)=>s.elevation-o.elevation);for(let s of n.floors){let o=n.settings.roof?.solar??[],a=hu(n)?.id===s.id?o.filter(H=>H.face===Na).map(H=>({field:H,face:fu(n,H)})):[],l=o.filter(H=>H.face.startsWith(`wall:${s.id}:`));if(l.length){let H=new Map(uu(n,s.id).map(G=>[G.key,G]));for(let G of l){let oe=H.get(G.face);oe&&a.push({field:G,face:oe})}}let u=(n.settings.roof.sections??[]).some(H=>Rf(H,s.elevation+s.height))?(H,G)=>{let oe=Cf(n,H,G);return oe===null?null:oe-s.elevation}:void 0,h=Sd(_u(s,this.parked),n.settings.wall_exterior,n.settings.wall_interior,wd(n.floors,s),a,u),f={standing:{value:65535},glass:{value:0}},d=Xg({mask:f,look:this.themeUniform,theme:this.theme,textures:{pattern:this.patternTexture,blinds:this.blindTexture,halo:this.haloTexture}}),m=new mt,g=new Ie(h.floor,d.floor),x=new Ie(h.shadow,d.shadow);x.renderOrder=1;let p=new Ie(h.floor,d.pattern);p.renderOrder=2;let y=new Ie(new Be,d.glow);y.renderOrder=3,y.visible=!1;let _=new Ie(new Be,d.frames),b=new Ie(new Be,d.blinds),v=new Ie(new Be,d.glass);v.renderOrder=4;let S=new Ie(new Be,d.lamps);S.visible=!1;let A=new Ie(new Be,d.cones);A.visible=!1,A.renderOrder=3;let M=new Pn(new Be,d.halos);M.visible=!1,M.renderOrder=7;let T=new Ie(new Be,d.cones);T.visible=!1,T.renderOrder=7;let C=new Ie(new Be,d.lamps);C.visible=!1;let P=new Ie(new Be,d.screens);P.visible=!1,P.renderOrder=5;for(let H of[_,b,v])H.frustumCulled=!1;let F=new Ie(h.walls,d.glassWall),L=new Ie(h.walls,d.wall);F.renderOrder=6,m.add(g,x,p,y,L,new yn(h.lines,d.lines),_,b,v,S,A,M,T,C,P,F),this.root.add(m);let R=document.createElement("button");R.className="nf-pin nf-pin-floor",R.dataset.floor=s.id;let D=document.createElement("b");D.textContent=s.name||"\u2013";let N=document.createElement("span");N.textContent=this.floorInfo.get(s.id)??this.options.floorInfo?.(s)??"",R.append(D,N),R.addEventListener("click",()=>this.options.onFloorTap?.(s.id)),this.labels.append(R);let B=e.get(s.id),X=[],z=null;for(let H of s.rooms){let G=document.createElement("button");G.className="nf-pin",G.dataset.room=H.id,G.dataset.floor=s.id,this.fillRoomPin(G,H.name,this.roomInfo.get(H.id)),G.addEventListener("click",()=>this.options.onRoomTap?.(s.id,H.id)),this.labels.append(G);let[oe,se]=Kc(H.points);X.push({pin:G,room:H,cx:oe,cz:se});for(let[ke,Ne]of H.points)z??={x0:ke,x1:ke,z0:Ne,z1:Ne},z.x0=Math.min(z.x0,ke),z.x1=Math.max(z.x1,ke),z.z0=Math.min(z.z0,Ne),z.z1=Math.max(z.z1,Ne)}this.floors.push({floor:s,rank:r.indexOf(s),group:m,geo:h,floorMesh:g,shadowMesh:x,patternMesh:p,glowMesh:y,lightSurface:null,lightZones:null,framesMesh:_,glassMesh:v,blindsMesh:b,lampMesh:S,sunMesh:A,sunSig:"",haloMesh:M,coneMesh:T,fridgeMesh:C,lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:L,screenMesh:P,screenSig:"",flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:z,roomPins:X,labelSize:null,materials:d,mask:f,openings:new Map,y:B?.y??0,o:B?.o??1,ty:0,to:1,appliedO:-1,label:R})}this.floorMap=new Map(this.floors.map(s=>[s.floor.id,s]));for(let s of this.floors)this.buildFridges(s);this.labelsDirty=!0,this.floorId&&!n.floors.some(s=>s.id===this.floorId)&&(this.floorId=null);for(let s of this.floors){this.buildLamps(s),this.buildScreens(s);let o=t.get(s.floor.id);for(let a of s.geo.openings)s.openings.set(a.opening.id,o?.get(a.opening.id)??this.openingTargets.get(a.opening.id)??po);this.buildOpenings(s),this.buildLightSurface(s),this.buildSun(s)}this.applyTargets(e.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost(),this.placeMeshes()}placeMeshes(){for(let e of this.meshes)e.group.removeFromParent(),sp(e.group);this.meshes=[];for(let e of this.floors)for(let t of _u(e.floor,this.parked).furniture){let n=jt(t.type);if(!n?.mesh)continue;let r=n.mesh;if(!Xc(t.type)){this.meshAsked.has(r)||(this.meshAsked.add(r),oy(r).then(a=>{a&&!this.disposed&&this.rebuild()}));continue}let s=n.colors?.length?(n.colors.find(a=>a.id===t.variant)??n.colors[0]).hex:null,o=ay(r,{x:t.x,z:t.z,y:kn(e.floor,t),rotation:t.rotation,mirror:t.mirror,w:t.w,d:t.d,h:t.h,paint:s});o&&(this.meshLight||(this.meshLight=ly(this.root,this.renderer)),cy(o,this.meshLight.env),e.group.add(o),this.meshes.push({group:o,furnitureId:t.id}))}this.invalidate()}buildRoofMesh(){this.roof&&(this.roof.group.traverse(a=>a.geometry?.dispose()),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.scene.remove(this.roof.group),this.roof=null);let e=this.building?vd(this.building,this.roofWindows):[];if(!e.length)return;let t=new mt,n=ri(new lt({vertexColors:!0,transparent:!0,side:_t}),this.themeUniform),r=ri(new Ot({vertexColors:!0,transparent:!0,blending:Ea(this.theme),depthWrite:!1}),this.themeUniform,!0),s=ri(new lt({vertexColors:!0,transparent:!0,side:_t,depthWrite:!1}),this.themeUniform),o=e.map(a=>{let l=new mt;return l.add(new Ie(a.solid.geometry(),n),new yn(a.lines.geometry(),r)),a.glass.count&&l.add(new Ie(a.glass.geometry(),s)),l.renderOrder=8,t.add(l),{group:l,floorId:a.floor.id,rideId:Pf(this.building,a.floor,a.sections??[]),base:a.base,lift:a.lift!==!1}});t.renderOrder=8,this.scene.add(t),this.roof={group:t,parts:o,solid:n,lines:r,glass:s},this.placeRoof()}placeRoof(e=1e3){let t=this.roof;if(!t)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=Lf(e),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),t.group.visible=this.roofO>.02;for(let l of t.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,h=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?h*AT:0)}return t.solid.opacity=this.roofO,t.solid.depthWrite=this.roofO>.9,t.lines.opacity=this.roofO,t.glass.opacity=this.roofO*.28,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let e=this.lowQuality;this.ground.visible=!e&&this.theme!=="day"&&this.floors.some(t=>t.floor.rooms.length>0);for(let t of this.floors)t.patternMesh.visible=!e,t.shadowMesh.visible=!e&&t.o>.98;this.invalidate()}rebuildTier(){for(let e of this.floors)e.flowLayout="",this.buildLightSurface(e),e.lampShapeSig="",this.buildLamps(e)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(e){let t=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=cg(n.rank,t?.rank,this.explode,this.floorStack);[n.ty,n.to]=[r.y,r.opacity],e&&([n.y,n.o]=[r.y,r.opacity]),this.applyFloor(n)}this.invalidate()}applyFloor(e){e.group.position.y=e.floor.elevation+e.y,e.group.visible=e.o>.02,e.shadowMesh.visible=e.o>.98&&!this.lowQuality,!(Math.abs(e.appliedO-e.o)<.001)&&(e.appliedO=e.o,hg(e.materials,e.o))}stepFloors(e){let t=!1,n=Lf(e);for(let r of this.floors){let s=ug(r,n);s.settled&&(this.labelsDirty=!0),(s.moving||s.settled)&&this.applyFloor(r),t||=s.moving}return t}stepOpenings(e){let t=!1,n=Ff(e);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??po;if(pg(a,l))continue;let c=mg(a,l,n);r.openings.set(o,c.state),s=!0,t||=c.moving}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return t}glowOf(e){if(!e.glow||!e.effect)return e.glow;let t=new K(...e.glow.color),n={h:0,s:0,l:0};t.getHSL(n);let r=(e.x*.37+e.z*.61)%1;return t.setHSL((n.h+this.effectTime*RT+r)%1,Math.max(.6,n.s),Math.max(.45,n.l)),{color:[t.r,t.g,t.b],level:e.glow.level}}buildLamps(e){let t=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=t)return 0;let f=h-t,d=f>cp?.5+.5*Math.sin(f/140):f/cp;return Math.round(d*10)/10},r=this.devices.filter(u=>u.floorId===e.floor.id&&(u.lamp||u.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.size?.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`).join(";"),o=r.map(u=>this.glowOf(u)),a=r.map((u,h)=>`${n(u.id)},${o[h]?`${o[h].level.toFixed(3)},${o[h].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==e.lampShapeSig||!e.lampMesh.geometry.getAttribute("position")){e.lampShapeSig=s,e.lampColorSig="";let u=new ot,h=[],f=[],d=new Map,m=e.floor.height;for(let g of r){let x=g.lamp==="strip"?(g.base??m)>Math.min(e.floor.cut_height,m):g.lamp?iu.has(g.lamp):g.model==="camera_ceiling";if(!g.lamp&&!g.model||x&&this.wallMode==="cut")continue;let p=u.count,y=g.pack?jt(g.pack):void 0,[_,b,v]=g.size??[.3,.3,.3];g.model?ud(u,g.model,g.x,g.model==="camera_ceiling"?m:g.y,g.z,g.rotation??0):y?Fa(u,y,{x:g.x,z:g.z,rotation:g.rotation??0,w:_,d:b,h:v,mirror:g.mirror},g.base??0,65280):lp(u,{...g,lamp:g.lamp},m,65280),d.set(g.furnitureId??g.id,{start:p,end:u.count}),g.pickable!==!1&&h.push({id:g.id,start:p,end:u.count}),g.furnitureId&&f.push({id:g.furnitureId,start:p,end:u.count})}e.lampTris=h,e.lampFurnTris=f,e.lampRanges=d,e.lampShade=F0(u.c),e.lampMesh.geometry.dispose(),e.lampMesh.geometry=u.geometry(),e.lampMesh.visible=u.count>0}if(a===e.lampColorSig)return;e.lampColorSig=a;let l=e.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((u,h)=>{let f=e.lampRanges.get(u.furnitureId??u.id);if(!f)return;let d=o[h],m=d?.55+.45*d.level:0,g=d?new K(...d.color.map(y=>Math.min(1,y*m))):new K(ET),x=n(u.id);x>0&&g.lerp(new K(1,1,1),.7*x);let p=new K(g.getHex());D0(c,e.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(e)}buildSun(e){let t=this.building?.settings.sun_patches===!1?null:this.sun,n=this.building?.settings.north??0,r=this.weatherLayer?.cloud??0,s=Ig(t,n,r,e.openings.values());if(s===e.sunSig)return;e.sunSig=s;let o=Pg({floor:e.floor,openings:e.geo.openings,states:e.openings,sun:t,northDegrees:n,cloud:r});e.sunMesh.geometry.dispose(),e.sunMesh.geometry=o.geometry(),e.sunMesh.visible=o.count>0}buildHalos(e){if(this.lowQuality){e.haloMesh.visible=!1,e.coneMesh.visible=!1;return}let t={positions:[],colours:[]},n=new ot,r=[],s=this.wallMode==="cut";for(let a of this.devices){if(a.model&&a.floorId===e.floor.id){if(a.model==="camera_ceiling"&&s||a.cone===!1)continue;r.push({id:a.id,...wg(n,a,e.geo.walls2d)});continue}let l=this.glowOf(a);if(a.floorId!==e.floor.id||!a.lamp||!l||s&&Rg(a.lamp))continue;let c=a;Ag(t,c,l,e.floor.height),this.highQuality&&(a.lamp==="downlight"||a.lamp==="spot")&&Eg(n,c,l,e.floor.height)}let o=new Be;o.setAttribute("position",new ze(t.positions,3)),o.setAttribute("color",new ze(t.colours,3)),e.haloMesh.geometry.dispose(),e.haloMesh.geometry=o,e.haloMesh.visible=t.positions.length>0,e.coneMesh.geometry.dispose(),e.coneMesh.geometry=n.geometry(),e.coneMesh.visible=n.count>0,e.coneTris=r}buildScreens(e){let t=_u(e.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=t.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===e.screenSig&&e.screenMesh.geometry.getAttribute("position"))return;e.screenSig=n;let r=new ot;for(let s of t){let o=this.screens.get(s.id),a=s.rotation*ht,l=Math.cos(a),c=Math.sin(a),u=(_,b,v)=>[s.x+_*l-v*c,b,s.z+_*c+v*l];if(o.faces){let _=Math.max(.05,s.w)*(s.mirror?-1:1),b=Math.max(.05,s.d),v=Math.max(.005,s.h),S=kn(e.floor,s);for(let A of o.faces){let M=A.part==="right"?.03:-Math.abs(_)/2+.03,T=A.part==="left"?-.03:Math.abs(_)/2-.03,C=S+(A.part==="bottom"?v*.45:v)+.006,P=new K(...A.color.map(X=>Math.min(1,X*(.35+.65*A.level)))),F=new K(0,0,0),L=(X,z,H=C)=>u(X*Math.sign(_),H,z),R=[L(M,-b/2+.03),L(T,-b/2+.03),L(T,b/2-.03),L(M,b/2-.03)];r.tri(R[0],R[2],R[1],P),r.tri(R[0],R[3],R[2],P);let D=.12+.1*A.level,N=P.clone().multiplyScalar(.5),B=[L(M-D,-b/2-D,C+.004),L(T+D,-b/2-D,C+.004),L(T+D,b/2+D,C+.004),L(M-D,b/2+D,C+.004)];for(let X=0;X<4;X++){let z=(X+1)%4;r.tri(R[X],B[z],B[X],N,F,F),r.tri(R[X],R[z],B[z],N,N,F)}}continue}let h=cu(s,e.floor);if(!h)continue;let f=new K(...o.color.map(_=>Math.min(1,_*(.35+.65*o.level)))),d=new K(0,0,0),m=h.z+.004;r.tri(u(h.x0,h.y0,m),u(h.x1,h.y0,m),u(h.x1,h.y1,m),f),r.tri(u(h.x0,h.y0,m),u(h.x1,h.y1,m),u(h.x0,h.y1,m),f);let g=.18+.12*o.level,x=f.clone().multiplyScalar(.5),p=[u(h.x0,h.y0,m),u(h.x1,h.y0,m),u(h.x1,h.y1,m),u(h.x0,h.y1,m)],y=[u(h.x0-g,h.y0-g,m+.01),u(h.x1+g,h.y0-g,m+.01),u(h.x1+g,h.y1+g,m+.01),u(h.x0-g,h.y1+g,m+.01)];for(let _=0;_<4;_++){let b=(_+1)%4;r.tri(p[_],y[_],y[b],x,d,d),r.tri(p[_],y[b],p[b],x,d,x)}}e.screenMesh.geometry.dispose(),e.screenMesh.geometry=r.geometry(),e.screenMesh.visible=r.count>0}buildOpenings(e){let t=Ad(e.geo.openings,e.openings,Math.min(e.floor.cut_height,e.floor.height));e.frameTris=t.frameTris,e.glassTris=t.glassTris,e.blindTris=t.blindTris;for(let[n,r]of[[e.framesMesh,t.frames],[e.glassMesh,t.glass],[e.blindsMesh,t.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(e=>e.to>.99)}applyHighlight(){for(let e of this.floors){let t=e.geo.floor.getAttribute("color");for(let n of e.geo.roomTris){let r=new K(n.color),s=this.roomTint?.get(n.roomId);s&&r.lerp(new K(...s).multiplyScalar(.6),.9),n.roomId===this.roomId&&r.lerp(CT,s?.3:.75);for(let o=n.start*3;o<n.end*3;o++)t.setXYZ(o,r.r,r.g,r.b)}t.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".nf-pin"))e.classList.toggle("nf-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(e){let t=new kt;for(let h of this.activeFloors()){let f=h.floor.elevation+h.ty;for(let d of h.floor.rooms)for(let[m,g]of d.points)t.expandByPoint(new O(m,f,g)),t.expandByPoint(new O(m,f+h.floor.height,g))}t.isEmpty()&&t.set(new O(-4,0,-4),new O(4,2.5,4)),this.placeGround(),this.weatherLayer.setBounds({x0:t.min.x-8,x1:t.max.x+8,z0:t.min.z-8,z1:t.max.z+8,y0:t.min.y,y1:t.max.y+6});let n=t.getCenter(new O),r=t.getSize(new O),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=t.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:this.floorMap.get(this.floorId)?.floor.start_view??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},e)}placeGround(){let e=new kt,t=1/0;for(let o of this.floors){t=Math.min(t,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)e.expandByPoint(new O(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)e.expandByPoint(new O(l,0,c))}if(this.ground.visible=!e.isEmpty()&&!this.lowQuality&&this.theme!=="day",e.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=OT();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=e.getCenter(new O),r=e.getSize(new O),s=up*Math.ceil((Math.max(r.x,r.z)+16)/up);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,t-oi-.02,n.z)}distanceFor(e){let t=this.camera.fov*ht,n=2*Math.atan(Math.tan(t/2)*this.camera.aspect);return e.length()/2/Math.sin(Math.min(t,n)/2)}rayAt(e,t){let n=this.renderer.domElement.getBoundingClientRect(),r=new ta;return r.setFromCamera(new Fe(e/n.width*2-1,-(t/n.height)*2+1),this.camera),r}pick(e,t){let n=this.rayAt(e,t),r=this.activeFloors();if(this.meshes.length){let a=n.intersectObjects(this.meshes.map(l=>l.group),!0)[0];if(a){let l=a.object;for(;l&&!this.meshes.some(u=>u.group===l);)l=l.parent;let c=l?this.pickFurniture.get(this.meshes.find(u=>u.group===l).furnitureId):void 0;if(c)return{entity:c}}}let s=r.flatMap(a=>[a.lampMesh,a.coneMesh,a.framesMesh,a.glassMesh,a.blindsMesh,a.wallMesh,a.floorMesh].filter(l=>l.visible)),o=(a,l)=>a.find(c=>l>=c.start&&l<c.end)?.id;for(let a of n.intersectObjects(s,!1)){if(a.faceIndex==null)continue;let l=a.faceIndex,c=r.find(u=>u.group===a.object.parent);if(a.object===c.lampMesh||a.object===c.coneMesh){let u=o(a.object===c.lampMesh?c.lampTris:c.coneTris,l);if(u)return{entity:u}}else if(a.object===c.framesMesh||a.object===c.blindsMesh||a.object===c.glassMesh){if(this.wallMode==="cut"&&a.face){let f=a.object.geometry.getAttribute("fold")?.getX(a.face.a)??Ze;if(f!==Ze&&Math.floor(f/16)===0)continue}let u=o(a.object===c.framesMesh?c.frameTris:a.object===c.glassMesh?c.glassTris:c.blindTris,l),h=u?this.pickOpenings.get(u):void 0;if(h)return{entity:h}}else if(a.object===c.wallMesh){let u=o(c.geo.furnitureTris,l),h=u?this.pickFurniture.get(u):void 0;if(h)return{entity:h};if(a.face&&!u){let f=c.wallMesh.geometry.getAttribute("fold")?.getX(a.face.a)??32,d=Math.floor(f/16),m=f%16,g=this.wallMode==="cut"&&d===0,x=(c.mask.glass.value&1<<m)!==0;if(!g){let p=n.ray.direction,y=Math.hypot(p.x,p.z)||1,_=[a.point.x-p.x/y*.3,a.point.z-p.z/y*.3],b=c.floor.rooms.find(v=>v.points.length>=3&&ft(_,v.points))?.id??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:c.floor.id,roomId:b}}else if(!x&&b)return{floorId:c.floor.id,roomId:b}}}}else if(a.object===c.floorMesh)return{floorId:c.floor.id,roomId:o(c.geo.roomTris.map(u=>({id:u.roomId,start:u.start,end:u.end})),l)??null}}return null}onTap(e,t){let n=this.pick(e,t);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),this.options.onDeviceSelect?.(n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+cp),this.invalidate(),this.options.onDeviceTap?.(n.entity,e,t);return}this.options.onRoomTap?.(n?.floorId??this.floorId??"",n?.roomId??null)}furnitureAt(e,t){let n=this.rayAt(e,t),r=this.activeFloors(),s=r.flatMap(o=>[o.lampMesh,o.wallMesh].filter(a=>a.visible));for(let o of n.intersectObjects(s,!1)){if(o.faceIndex==null)continue;let a=r.find(u=>u.group===o.object.parent),c=(o.object===a.lampMesh?a.lampFurnTris:a.geo.furnitureTris).find(u=>o.faceIndex>=u.start&&o.faceIndex<u.end)?.id;if(c)return{fv:a,id:c}}return null}floorPoint(e,t,n){let r=this.rayAt(t,n),s=e.floor.elevation+e.y,o=r.ray.direction;if(Math.abs(o.y)<1e-4)return null;let a=(s-r.ray.origin.y)/o.y;return a<=0?null:[r.ray.origin.x+o.x*a,r.ray.origin.z+o.z*a]}setFurnishTypes(e){this.furnishTypes=e?new Set(e):null}setSurfaceGrab(e){this.surfaceGrab=e}surfaceRay(e,t){let n=this.rayAt(e,t).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(e,t){if(this.surfaceGrab?.start(this.surfaceRay(e,t)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let o=n?this.devices.find(h=>h.id===n)?.furnitureId:void 0,a=o?null:this.furnitureAt(e,t),l=o??a?.id,c=l?this.floors.find(h=>h.floor.furniture.some(f=>f.id===l)):void 0,u=c?.floor.furniture.find(h=>h.id===l)?.type;return!!(c&&l&&u&&r.has(u))&&this.grabItem(c,l,e,t)}if(n){let o=this.devices.find(l=>l.id===n)?.furnitureId,a=o?this.floors.find(l=>l.floor.furniture.some(c=>c.id===o)):void 0;return!o||!a?this.grabDevice(n,e,t):this.grabItem(a,o,e,t)}let s=this.furnitureAt(e,t);if(!s){let o=this.pick(e,t);return o&&"entity"in o?this.grabDevice(o.entity,e,t):(this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice&&(this.selectDevice(null),this.options.onDeviceSelect?.(null)),!1)}return this.grabItem(s.fv,s.id,e,t)}grabItem(e,t,n,r){let s=e.floor.furniture.find(a=>a.id===t),o=this.floorPoint(e,n,r);return!s||!o?!1:s.locked?(this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!1):(this.grab={floorId:e.floor.id,id:s.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectFurniture(s.id),this.options.onFurnitureSelect?.(s.id),!0)}grabDevice(e,t,n){let r=this.devices.find(a=>a.id===e),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,t,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(e),this.options.onDeviceSelect?.(e),!1):(this.deviceGrab={id:e,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(e),this.options.onDeviceSelect?.(e),!0)}setSelectedDevice(e){e!==this.selectedDevice&&this.selectDevice(e)}selectDevice(e){e&&this.selectedFurniture&&(this.selectFurniture(null),this.options.onFurnitureSelect?.(null)),this.selectedDevice=e;for(let[t,n]of this.devicePins)n.el.classList.toggle("nf-dev-sel",t===e)}dragFurniture(e,t){if(this.surfaceDragging){this.surfaceGrab?.move(this.surfaceRay(e,t));return}let n=this.deviceGrab;if(n){let l=this.floorMap.get(n.floorId),c=this.devices.find(f=>f.id===n.id),u=l&&this.floorPoint(l,e,t);if(!l||!c||!u)return;let h=this.building?.settings.grid??.05;n.x=c.x=Math.round((u[0]+n.offset[0])/h)*h,n.z=c.z=Math.round((u[1]+n.offset[1])/h)*h,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=this.floorPoint(s,e,t);if(!o)return;let a=this.building?.settings.grid??.05;r.x=Math.round((o[0]+r.offset[0])/a)*a,r.z=Math.round((o[1]+r.offset[1])/a)*a,r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){if(this.surfaceDragging){this.surfaceDragging=!1,this.surfaceGrab?.end();return}let e=this.deviceGrab;this.deviceGrab=null,e?.moved&&this.options.onDeviceMove?.(e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3);let t=this.grab;this.grab=null,t?.moved&&this.options.onFurnitureMove?.(t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let e=this.selectedFurniture,t=e?this.floors.find(p=>p.floor.furniture.some(y=>y.id===e)):void 0,n=t?.floor.furniture.find(p=>p.id===e);if(!t||!n)return;let r=this.grab?.id===n.id?this.grab.x:n.x,s=this.grab?.id===n.id?this.grab.z:n.z,o=t.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type),l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=jt(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?kn(t.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:kn(t.floor,n),u=n.rotation*ht,h=Math.cos(u),f=Math.sin(u),d=(p,y,_)=>[r+p*h-y*f,_,s+p*f+y*h],m=new Yt,g=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],x=new K(.25,.9,1);for(let p=0;p<4;p++){let[y,_]=g[p],[b,v]=g[(p+1)%4];m.seg(d(y,_,c+.01),d(b,v,c+.01),x),m.seg(d(y,_,c+l),d(b,v,c+l),x),m.seg(d(y,_,c+.01),d(y,_,c+l),x)}m.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new K(1,1,1)),this.ghost=new yn(m.geometry(),new Ot({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=t.floor.elevation+t.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(e,t){let n=this.pick(e,t);n&&"entity"in n&&this.options.onDeviceHold?.(n.entity,e,t)}swipeStart(e,t,n,r){if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(e,t);return!s||!("entity"in s)||this.options.onDeviceSwipe?.(s.entity,"start",0,e,t)!==!0?!1:(this.swipe={entity:s.entity,x:e,y:t},!0)}floorThumbnails(e=200,t=150){let n=this.floors.filter(p=>p.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(e*r),o=Math.round(t*r),a=new an(s,o);a.texture.colorSpace=Mt;let l=new Bn(-1,1,1,-1,.1,400),c=this.floors.map(p=>({fv:p,visible:p.group.visible,y:p.y,o:p.o,standing:p.mask.standing.value,glass:p.mask.glass.value})),u=this.roof?.group.visible??!1,h=this.ghost?.visible??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),m=document.createElement("canvas");m.width=s,m.height=o;let g=m.getContext("2d"),x=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let p of n){for(let L of this.floors)L.group.visible=L===p;p.y=0,p.o=1,this.applyFloor(p),p.group.visible=!0,p.mask.standing.value=0,p.mask.glass.value=0;let y=p.floor.rooms.flatMap(L=>L.points),_=p.floor.elevation,b=new kt(new O(Math.min(...y.map(L=>L[0]))-.3,_,Math.min(...y.map(L=>L[1]))-.3),new O(Math.max(...y.map(L=>L[0]))+.3,_+Math.min(p.floor.cut_height,p.floor.height),Math.max(...y.map(L=>L[1]))+.3)),v=b.getCenter(new O),S=-.6,A=.8,M=new O(Math.sin(A)*Math.sin(S),Math.cos(A),Math.sin(A)*Math.cos(S));l.position.copy(v).addScaledVector(M,100),l.lookAt(v),l.updateMatrixWorld();let T=.5,C=.5;for(let L of[b.min.x,b.max.x])for(let R of[b.min.y,b.max.y])for(let D of[b.min.z,b.max.z]){let N=new O(L,R,D).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(N.x)),C=Math.max(C,Math.abs(N.y))}let P=s/o;T/C>P?C=T/P:T=C*P,l.left=-T*1.05,l.right=T*1.05,l.top=C*1.05,l.bottom=-C*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let F=g.createImageData(s,o);for(let L=0;L<o;L++)F.data.set(d.subarray((o-1-L)*s*4,(o-L)*s*4),L*s*4);g.putImageData(F,0,0),x.push({floorId:p.floor.id,url:m.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let p of c)p.fv.y=p.y,p.fv.o=p.o,p.fv.mask.standing.value=p.standing,p.fv.mask.glass.value=p.glass,this.applyFloor(p.fv),p.fv.group.visible=p.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return x}setRobots(e){let t=new Set;for(let n of e){t.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?fy(n.room,void 0,void 0,n.obstacles):ap(n.rest),l=a.length?a:ap(n.rest),c=0;l.forEach((u,h)=>{Math.hypot(u[0]-r.motion.pos[0],u[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!ft(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(xy[n.mode])}for(let[n,r]of this.robots)t.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(e){if(!this.robotGeo){let r=new ot,s=(a,l,c,u,h)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Pt(r,f,l,c,u,h,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new lt({vertexColors:!0});let o=new ot;Pt(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let t=new mt,n=new lt({color:xy[e.mode]});return t.add(new Ie(this.robotGeo,this.robotMat),new Ie(this.robotLedGeo,n)),{info:e,motion:{pos:[...e.rest],heading:e.restHeading,path:[],next:0},group:t,led:n}}stepRobots(e){if(!this.robots.size)return!1;let t=this.robotLast?Math.min(.2,(e-this.robotLast)/1e3):0;this.robotLast=e;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),t>0?n=dy(r.motion,r.info,t)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(e,t=900){this.controls.flyTo(e,t)}liveFlyInto(e,t,n=1100){let r=this.floorMap.get(e),s=r?r.floor.elevation+r.ty:0;this.controls.flyTo({target:new O(t.target[0],s+t.target[1],t.target[2]),radius:t.radius,theta:t.theta,phi:Math.max(.08,t.phi)},n)}focus(e,t,n,r,s){let o=this.floorMap.get(e);if(o){if(this.controls.flyTo({target:new O(t,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.nf-dev[data-entity="${CSS.escape(s)}"]`);a?.classList.add("nf-dev-found"),setTimeout(()=>a?.classList.remove("nf-dev-found"),2600)}this.invalidate()}}render(e){if(this.frame=0,this.disposed)return;let t=this.lastFrame?Math.min(100,e-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,e-this.orbitLast)/1e3),this.orbitLast=e,n=!0):this.orbitLast=0;let r=this.controls.update(e),s=this.stepFloors(t),o=this.stepOpenings(t)||this.stepFridges(t),a=!1;if(this.flashes.size){let m=new Set;for(let[g,x]of this.flashes){let p=this.deviceFloor.get(g);p&&m.add(p),x<=e&&this.flashes.delete(g)}a=this.flashes.size>0;for(let g of this.floors)m.has(g.floor.id)&&this.buildLamps(g)}let l=this.placeRoof(t),c=this.stepRobots(e),h=[this.weatherLayer,this.energyLayer,this.soundLayer,this.screenLayer,this.trailLayer].map(m=>m.step(e)).some(Boolean),f=r||s||o||a||l,d=[];if(r&&d.push("camera"),s&&d.push("floors"),o&&d.push("openings"),a&&d.push("flash"),l&&d.push("roof"),this.effectTick&&d.push("effect"),c&&d.push("robot"),n&&d.push("orbit"),this.tintTick&&d.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?e:0,this.updateWalls(),this.renderer.render(this.scene,this.camera),this.placeLhAnchors(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(e,d),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let m=this.lowQuality?2*by:by;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.effectTick=!0;for(let g of this.floors)g.o<.02||!this.effectFloors.has(g.floor.id)||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},m)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33))}updateWalls(){let e=this.camera.position,t=this.controls.view.target,n=e.x-t.x,r=e.z-t.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,h)=>{let f=u?u[0]*n/s+u[1]*r/s>=.25:a;!l&&f&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let e=this.controls.view,t=this.viewKey;return t[0]===e.target.x&&t[1]===e.target.y&&t[2]===e.target.z&&t[3]===e.radius&&t[4]===e.theta&&t[5]===e.phi?!1:(t[0]=e.target.x,t[1]=e.target.y,t[2]=e.target.z,t[3]=e.radius,t[4]=e.theta,t[5]=e.phi,!0)}place(e,t){let n=t===null;e.hidden!==n&&(e.hidden=n),t!==null&&this.placed.get(e)!==t&&(this.placed.set(e,t),e.style.transform=t)}updateLabels(){let{w:e,h:t}=this.size,n=new O,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let g of[a.x0,a.x1])for(let x of[a.z0,a.z1]){n.set(g,u,x).project(this.camera);let p=(n.x+1)/2*e,y=(1-n.y)/2*t;(!l||p<l.x)&&(l={x:p,y}),(!c||p>c.x)&&(c={x:p,y})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,f=8+this.labelInset,d=l.x-h-14,m=l.y;d<f&&this.labelInset&&(d=c.x+14,m=c.y),s.push({fv:o,left:Math.max(f,Math.min(e-h-8,d)),y:m,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.updateDevicePins(e,t);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}}otherFloor(e){return this.floorId!==null&&e.floor.id!==this.floorId}updateDevicePins(e,t){let n=new O,r=this.houseView;for(let s of this.persons){let o=this.personPins.get(s.id),a=this.floorMap.get(s.floorId);if(!o)continue;if(!a||r||a.to<.99||a.o<.9||this.otherFloor(a)){this.place(o,null);continue}n.set(s.x,a.floor.elevation+a.y+.9,s.z).project(this.camera);let l=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(o,l?null:`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}for(let s of this.devices){let o=this.devicePins.get(s.id)?.el;if(!o)continue;let a=this.floorMap.get(s.floorId),l=s.id.startsWith("detect:");if(!a||r&&!l||a.to<.99||a.o<.9||s.pin===!1||this.otherFloor(a)){this.place(o,null);continue}if(n.set(s.x,a.floor.elevation+a.y+s.y,s.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(o,null);continue}let u=this.roomId===null?s.full?"full":"":s.roomId===this.roomId?"full":"dim";this.pinMode.get(o)!==u&&(this.pinMode.set(o,u),o.classList.toggle("nf-dev-full",u==="full"),o.classList.toggle("nf-dev-dim",u==="dim")),this.place(o,`translate(${(n.x+1)/2*e}px, ${(1-n.y)/2*t}px) translate(-50%, -50%)`)}}reportStats(e,t){if(!this.statsOn||!this.options.onStats)return;let n=t.length>0;this.fpsStart||(this.fpsStart=e),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,e-this.lastStatsFrame)),this.lastStatsFrame=n?e:0,this.fpsFrames++;let r=e-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:t,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=e,this.worstFrame=0}}};function PT(){let e=document.createElement("canvas");e.width=256*3,e.height=256*2;let t=e.getContext("2d"),n=(o,a,l,c,u)=>{t.strokeStyle=`rgba(55,224,255,${u})`,t.beginPath(),t.moveTo(o,a),t.lineTo(l,c),t.stroke()};t.lineWidth=1.5;let r=(o,a,l)=>{t.save(),t.beginPath(),t.rect(o*256,a*256,256,256),t.clip(),l(o*256,a*256),t.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let h of[u,u+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),t.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)t.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new cn(e);return s.flipY=!1,s.wrapS=dn,s.wrapT=dn,s.anisotropy=4,s.colorSpace=Mt,s}function LT(){let i=document.createElement("canvas");i.width=8,i.height=32;let e=i.getContext("2d");e.fillStyle="#1a2742",e.fillRect(0,0,8,32),e.fillStyle="#223556",e.fillRect(0,4,8,14),e.fillStyle="rgba(55,224,255,0.45)",e.fillRect(0,29,8,2);let t=new cn(i);return t.wrapS=Jn,t.wrapT=Jn,t.colorSpace=Mt,t}function FT(i,e){let t=i.rooms.map((r,s)=>s),n=r=>t[r]===r?r:t[r]=n(t[r]);for(let[r,s]of e){let o=i.rooms.findIndex(u=>u.id===r),a=i.rooms.findIndex(u=>u.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(t[Math.max(l,c)]=Math.min(l,c))}return t.map((r,s)=>n(s))}function DT(){let e=document.createElement("canvas");e.width=64,e.height=64;let t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,64,64);let r=new cn(e);return r.colorSpace=Mt,r}function OT(){let e=up,t=document.createElement("canvas");t.width=1024,t.height=1024;let n=t.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=e;o++){let a=Math.round(o/e*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new cn(t);return s.anisotropy=4,s.colorSpace=Mt,s}function XD(i,e){return new hp(i,e)}function lp(i,e,t,n){let[r,s,o]=e.size??jr[e.lamp],a=e.base??0,l=(e.rotation??0)*ht,c=Math.cos(l),u=Math.sin(l),h=(g,x)=>[e.x+g*c-x*u,e.z+g*u+x*c],f=(g,x,p,y,_,b=14)=>{let v=[];for(let S=0;S<b;S++){let A=S/b*Math.PI*2;v.push([e.x+Math.cos(A)*g,e.z+Math.sin(A)*g])}Pt(i,v,x,p,y,_,{aoFrom:0,bottom:!0})},d=(g,x,p,y,_,b,v,S=v)=>Pt(i,[h(g,p),h(x,p),h(x,y),h(g,y)],_,b,v,S,{aoFrom:0,bottom:!0}),m=Math.max(.05,Math.min(r,s)/2);switch(e.lamp){case"ceiling":f(m*.25,t-.04,t,rt,rt,8),f(m,t-Math.max(.04,o)-.035,t-.04,n,n);break;case"pendant":{let g=Math.max(.4,t-o);f(.06,t-.02,t,rt,rt,8);let x=e.variant==="globe"?g+2*m:e.variant==="drum"?g+.24:g+.2;if(f(.008,x,t-.02,rt,rt,5),e.variant==="globe")for(let y=0;y<7;y++){let _=Math.PI*(y/7),b=Math.PI*((y+1)/7);f(m*Math.max(.2,Math.sin((_+b)/2)),g+m-m*Math.cos(_),g+m-m*Math.cos(b),n,n,14)}else if(e.variant==="cone")for(let y=0;y<4;y++)f(m*(.25+.75*(4-y)/4),g+.06*y,g+.06*(y+1),n,n,16);else e.variant==="drum"?f(m,g,g+.24,n,n,18):(f(m*.35,g+.14,g+.2,n,n,12),f(m,g,g+.14,n,n,16));break}case"downlight":f(m,t-.012,t,rt,rt,12),f(m*.7,t-.02,t-.012,n,n,12);break;case"spot":f(m*.6,t-.02,t,rt,rt,10),f(m,t-Math.max(.06,o),t-.02,rt,rt,12),f(m*.8,t-Math.max(.06,o)-.008,t-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,t-Math.max(.015,o),t,rt,rt),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,t-Math.max(.015,o)-.004,t-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,m*.6),a,a+.03,rt,rt),f(.014,a+.03,a+o-.12,rt,rt,6),f(m,a+o-.14,a+o-.02,rt,rt),f(m*.92,a+o-.02,a+o,n,n);break;case"bollard":f(m,a,a+o-.14,rt,rt,10),f(m*.9,a+o-.14,a+o-.03,n,n,10),f(m*1.1,a+o-.03,a+o,rt,rt,10);break;case"garden":f(.012,a,a+o-.08,rt,rt,5),f(m,a+o-.08,a+o-.01,rt,rt,10),f(m*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,m*.7),a,a+.03,rt,rt),f(.014,a+.03,a+o-.28,rt,rt,6),f(m,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,m*.55),a,a+.03,rt,rt),f(.012,a+.03,a+o-.16,rt,rt,6),f(m,a+o-.18,a+o,n,n);break;case"wall":{let g=e.base??qc;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,g,g+o,rt),d(-r/2,r/2,-s/2+.02,s/2,g+o*.15,g+o*.85,n);break}case"strip":{let g=Math.max(.02,o),x=e.base!=null?e.base+g:t-.04;if(!e.roll&&!e.upright){d(-r/2,r/2,-s/2,s/2,x-g,x,n);break}let p=(e.roll??0)*ht,y=Math.cos(p),_=Math.sin(p),b=e.upright?a+r/2:x-g/2,v=(C,P,F)=>{let L=C,R=P*y-F*_,D=P*_+F*y;return e.upright&&([L,R]=[-R,L]),[e.x+L*c-D*u,b+R,e.z+L*u+D*c]},S=[v(-r/2,-g/2,-s/2),v(r/2,-g/2,-s/2),v(r/2,-g/2,s/2),v(-r/2,-g/2,s/2),v(-r/2,g/2,-s/2),v(r/2,g/2,-s/2),v(r/2,g/2,s/2),v(-r/2,g/2,s/2)],A=new K(n),M=[e.x,b,e.z],T=(C,P,F,L)=>{let[R,D,N]=[S[C],S[P],S[F]],B=[(D[1]-R[1])*(N[2]-R[2])-(D[2]-R[2])*(N[1]-R[1]),(D[2]-R[2])*(N[0]-R[0])-(D[0]-R[0])*(N[2]-R[2]),(D[0]-R[0])*(N[1]-R[1])-(D[1]-R[1])*(N[0]-R[0])],X=[R[0]-M[0],R[1]-M[1],R[2]-M[2]],z=B[0]*X[0]+B[1]*X[1]+B[2]*X[2]<0,[H,G,oe,se]=z?[S[L],S[F],S[P],S[C]]:[S[C],S[P],S[F],S[L]];i.tri(H,G,oe,A,A,A),i.tri(H,oe,se,A,A,A)};T(0,1,2,3),T(4,5,6,7),T(0,1,5,4),T(1,2,6,5),T(2,3,7,6),T(3,0,4,7);break}}}export{hp as NextFloorViewer,XD as createViewer,TT as furniturePreview,IT as isLowEnd,lp as pushLampModel};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
