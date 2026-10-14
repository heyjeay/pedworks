import{A as e,B as t,C as n,D as r,E as i,F as a,G as o,H as s,I as c,K as l,L as u,M as d,O as f,R as p,S as m,T as h,U as g,V as _,W as v,_ as y,a as b,b as x,c as S,d as C,f as w,g as T,h as E,j as D,k as O,m as k,n as A,o as j,p as M,r as N,s as P,t as F,u as ee,v as I,w as L,x as R,y as z,z as B}from"./index-DzLXh-dc.js";import{a as te,i as ne,n as re,r as V,t as ie}from"./pedNames-C0iNQbXX.js";import{a as ae,c as H,d as U,f as W,i as oe,l as se,m as ce,n as le,o as G,p as K,r as ue,t as q,u as J}from"./Modal-B1kW4XIJ.js";import{t as de}from"./_plugin-vue_export-helper-BDNMzG2s.js";function Y(e){let t=e.toLowerCase(),n=0;for(let e=0;e<t.length;e++)n=n+t.charCodeAt(e)>>>0,n=n+(n<<10)>>>0,n=(n^n>>>6)>>>0;return n=n+(n<<3)>>>0,n=(n^n>>>11)>>>0,n=n+(n<<15)>>>0,n}function X(){let e=new Worker(new URL(`/pedworks/assets/ped.worker-t268GIGl.js`,``+import.meta.url),{type:`module`}),t=new Map,n=1;e.onmessage=e=>{let{id:n,ok:r,result:i,error:a}=e.data,o=t.get(n);o&&(t.delete(n),r?o.resolve(i):o.reject(Error(a)))},e.onerror=e=>{for(let n of t.values())n.reject(Error(e.message||`The worker stopped`));t.clear()};function r(r,i,a=[]){let o=n++;return A(`worker →`,r),new Promise((n,s)=>{t.set(o,{resolve:n,reject:s}),e.postMessage({id:o,op:r,args:i},a)})}function i(){for(let e of t.values())e.reject(Error(`cancelled`));t.clear(),e.terminate()}return{call:r,terminate:i}}var fe={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Z={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pe=`attached`,me=`detached`,he=1e3,ge=1001,_e=1002,ve=1003,ye=1004,be=1005,xe=1006,Se=1007,Ce=1008,we=1009,Te=1010,Ee=1011,De=1012,Oe=1013,ke=1014,Ae=1015,je=1016,Me=1017,Ne=1018,Pe=1020,Fe=35902,Ie=35899,Le=1021,Re=1022,ze=1023,Be=1026,Ve=1027,He=1028,Ue=1029,We=1030,Ge=1031,Ke=1033,qe=33776,Je=33777,Ye=33778,Xe=33779,Ze=35840,Qe=35841,$e=35842,et=35843,tt=36196,nt=37492,rt=37496,it=37488,at=37489,ot=37490,st=37491,ct=37808,lt=37809,ut=37810,dt=37811,ft=37812,pt=37813,mt=37814,ht=37815,gt=37816,_t=37817,vt=37818,yt=37819,bt=37820,xt=37821,St=36492,Ct=36494,wt=36495,Tt=36283,Et=36284,Dt=36285,Ot=36286,kt=2300,At=2301,jt=2302,Mt=2303,Nt=2400,Pt=2401,Ft=2402,It=3200,Lt=`srgb`,Rt=`srgb-linear`,zt=`linear`,Bt=`srgb`,Vt=7680,Ht=35044,Ut=2e3;function Wt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Gt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qt(){let e=Kt(`canvas`);return e.style.display=`block`,e}var Jt={};function Yt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Zt(...e){e=Xt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Qt(...e){e=Xt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function $t(...e){let t=e.join(` `);t in Jt||(Jt[t]=!0,Zt(...e))}function en(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var tn={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},rn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),an=1234567,on=Math.PI/180,sn=180/Math.PI;function cn(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(rn[e&255]+rn[e>>8&255]+rn[e>>16&255]+rn[e>>24&255]+`-`+rn[t&255]+rn[t>>8&255]+`-`+rn[t>>16&15|64]+rn[t>>24&255]+`-`+rn[n&63|128]+rn[n>>8&255]+`-`+rn[n>>16&255]+rn[n>>24&255]+rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]).toLowerCase()}function ln(e,t,n){return Math.max(t,Math.min(n,e))}function un(e,t){return(e%t+t)%t}function dn(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function fn(e,t,n){return e===t?0:(n-e)/(t-e)}function pn(e,t,n){return(1-n)*e+n*t}function mn(e,t,n,r){return pn(e,t,1-Math.exp(-n*r))}function hn(e,t=1){return t-Math.abs(un(e,t*2)-t)}function gn(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function _n(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function vn(e,t){return e+Math.floor(Math.random()*(t-e+1))}function yn(e,t){return e+Math.random()*(t-e)}function bn(e){return e*(.5-Math.random())}function xn(e){e!==void 0&&(an=e);let t=an+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sn(e){return e*on}function Cn(e){return e*sn}function wn(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Tn(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function En(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Dn(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:Zt(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function On(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function kn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var An={DEG2RAD:on,RAD2DEG:sn,generateUUID:cn,clamp:ln,euclideanModulo:un,mapLinear:dn,inverseLerp:fn,lerp:pn,damp:mn,pingpong:hn,smoothstep:gn,smootherstep:_n,randInt:vn,randFloat:yn,randFloatSpread:bn,seededRandom:xn,degToRad:Sn,radToDeg:Cn,isPowerOfTwo:wn,ceilPowerOfTwo:Tn,floorPowerOfTwo:En,setQuaternionFromProperEuler:Dn,normalize:kn,denormalize:On},jn=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ln(this.x,e.x,t.x),this.y=ln(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ln(this.x,e,t),this.y=ln(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ln(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Zt(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Q=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ln(this.x,e.x,t.x),this.y=ln(this.y,e.y,t.y),this.z=ln(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ln(this.x,e,t),this.y=ln(this.y,e,t),this.z=ln(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ln(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nn.copy(this).projectOnVector(e),this.sub(Nn)}reflect(e){return this.sub(Nn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ln(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nn=new Q,Pn=new Mn,Fn=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return $t(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(In.makeScale(e,t)),this}rotate(e){return $t(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(In.makeRotation(-e)),this}translate(e,t){return $t(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(In.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},In=new Fn,Ln=new Fn().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rn=new Fn().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zn(){let e={enabled:!0,workingColorSpace:Rt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Vn(e.r),e.g=Vn(e.g),e.b=Vn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Hn(e.r),e.g=Hn(e.g),e.b=Hn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?zt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return $t(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return $t(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Rt]:{primaries:t,whitePoint:r,transfer:zt,toXYZ:Ln,fromXYZ:Rn,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:t,whitePoint:r,transfer:Bt,toXYZ:Ln,fromXYZ:Rn,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),e}var Bn=zn();function Vn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Hn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Un,Wn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Un===void 0&&(Un=Kt(`canvas`)),Un.width=e.width,Un.height=e.height;let t=Un.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Un}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Kt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vn(t[e]/255)*255):t[e]=Vn(t[e]);return{data:t,width:e.width,height:e.height}}return Zt(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gn=0,Kn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gn++}),this.uuid=cn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qn(r[t].image)):e.push(qn(r[t]))}else e=qn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Zt(`Texture: Unable to serialize Texture.`),{})}var Jn=0,Yn=new Q,Xn=class e extends nn{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ge,i=ge,a=xe,o=Ce,s=ze,c=we,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jn++}),this.uuid=cn(),this.name=``,this.source=new Kn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new jn(0,0),this.repeat=new jn(1,1),this.center=new jn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yn).x}get height(){return this.source.getSize(Yn).y}get depth(){return this.source.getSize(Yn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Zt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Zt(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case he:e.x-=Math.floor(e.x);break;case ge:e.x=e.x<0?0:1;break;case _e:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case he:e.y-=Math.floor(e.y);break;case ge:e.y=e.y<0?0:1;break;case _e:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xn.DEFAULT_IMAGE=null,Xn.DEFAULT_MAPPING=300,Xn.DEFAULT_ANISOTROPY=1;var Zn=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ln(this.x,e.x,t.x),this.y=ln(this.y,e.y,t.y),this.z=ln(this.z,e.z,t.z),this.w=ln(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ln(this.x,e,t),this.y=ln(this.y,e,t),this.z=ln(this.z,e,t),this.w=ln(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ln(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qn=class extends nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zn(0,0,e,t),this.scissorTest=!1,this.viewport=new Zn(0,0,e,t),this.textures=[];let r=new Xn({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:xe,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},$n=class extends Qn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},er=class extends Xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ve,this.minFilter=ve,this.wrapR=ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tr=class extends Xn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ve,this.minFilter=ve,this.wrapR=ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},nr=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),i=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ar,e,or)}lookAt(e,t,n){let r=this.elements;return lr.subVectors(e,t),lr.lengthSq()===0&&(lr.z=1),lr.normalize(),sr.crossVectors(n,lr),sr.lengthSq()===0&&(Math.abs(n.z)===1?lr.x+=1e-4:lr.z+=1e-4,lr.normalize(),sr.crossVectors(n,lr)),sr.normalize(),cr.crossVectors(lr,sr),r[0]=sr.x,r[4]=cr.x,r[8]=lr.x,r[1]=sr.y,r[5]=cr.y,r[9]=lr.y,r[2]=sr.z,r[6]=cr.z,r[10]=lr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=rr.set(r[0],r[1],r[2]).length(),o=rr.set(r[4],r[5],r[6]).length(),s=rr.set(r[8],r[9],r[10]).length();i<0&&(a=-a),ir.copy(this);let c=1/a,l=1/o,u=1/s;return ir.elements[0]*=c,ir.elements[1]*=c,ir.elements[2]*=c,ir.elements[4]*=l,ir.elements[5]*=l,ir.elements[6]*=l,ir.elements[8]*=u,ir.elements[9]*=u,ir.elements[10]*=u,t.setFromRotationMatrix(ir),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ut,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ut,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rr=new Q,ir=new nr,ar=new Q(0,0,0),or=new Q(1,1,1),sr=new Q,cr=new Q,lr=new Q,ur=new nr,dr=new Mn,fr=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ln(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Zt(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ur.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ur,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dr.setFromEuler(this),this.setFromQuaternion(dr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fr.DEFAULT_ORDER=`XYZ`;var pr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},mr=0,hr=new Q,gr=new Mn,_r=new nr,vr=new Q,yr=new Q,br=new Q,xr=new Mn,Sr=new Q(1,0,0),Cr=new Q(0,1,0),wr=new Q(0,0,1),Tr={type:`added`},Er={type:`removed`},Dr={type:`childadded`,child:null},Or={type:`childremoved`,child:null},kr=class e extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mr++}),this.uuid=cn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Q,n=new fr,r=new Mn,i=new Q(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nr},normalMatrix:{value:new Fn}}),this.matrix=new nr,this.matrixWorld=new nr,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Sr,e)}rotateY(e){return this.rotateOnAxis(Cr,e)}rotateZ(e){return this.rotateOnAxis(wr,e)}translateOnAxis(e,t){return hr.copy(e).applyQuaternion(this.quaternion),this.position.add(hr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sr,e)}translateY(e){return this.translateOnAxis(Cr,e)}translateZ(e){return this.translateOnAxis(wr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(yr,vr,this.up):_r.lookAt(vr,yr,this.up),this.quaternion.setFromRotationMatrix(_r),r&&(_r.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(_r),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Qt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tr),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Qt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Er),Or.child=e,this.dispatchEvent(Or),Or.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tr),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,e,br),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yr,xr,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};kr.DEFAULT_UP=new Q(0,1,0),kr.DEFAULT_MATRIX_AUTO_UPDATE=!0,kr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ar=class extends kr{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jr={type:`move`},Mr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jr)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ar;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Ir(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Lr=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bn.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Bn.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bn.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Bn.workingColorSpace){if(e=un(e,1),t=ln(t,0,1),n=ln(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ir(i,r,e+1/3),this.g=Ir(i,r,e),this.b=Ir(i,r,e-1/3)}return Bn.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(t){t!==void 0&&parseFloat(t)<1&&Zt(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Zt(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Zt(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Nr[e.toLowerCase()];return n===void 0?Zt(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Bn.workingToColorSpace(Rr.copy(this),e),Math.round(ln(Rr.r*255,0,255))*65536+Math.round(ln(Rr.g*255,0,255))*256+Math.round(ln(Rr.b*255,0,255))}getHexString(e=Lt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bn.workingColorSpace){Bn.workingToColorSpace(Rr.copy(this),t);let n=Rr.r,r=Rr.g,i=Rr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Bn.workingColorSpace){return Bn.workingToColorSpace(Rr.copy(this),t),e.r=Rr.r,e.g=Rr.g,e.b=Rr.b,e}getStyle(e=Lt){Bn.workingToColorSpace(Rr.copy(this),e);let t=Rr.r,n=Rr.g,r=Rr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(Fr);let n=pn(Pr.h,Fr.h,t),r=pn(Pr.s,Fr.s,t),i=pn(Pr.l,Fr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rr=new Lr;Lr.NAMES=Nr;var zr=class extends kr{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Br=new Q,Vr=new Q,Hr=new Q,Ur=new Q,Wr=new Q,Gr=new Q,Kr=new Q,qr=new Q,Jr=new Q,Yr=new Q,Xr=new Zn,Zr=new Zn,Qr=new Zn,$r=class e{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Br.subVectors(e,t),r.cross(Br);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Br.subVectors(r,t),Vr.subVectors(n,t),Hr.subVectors(e,t);let a=Br.dot(Br),o=Br.dot(Vr),s=Br.dot(Hr),c=Vr.dot(Vr),l=Vr.dot(Hr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ur)!==null&&Ur.x>=0&&Ur.y>=0&&Ur.x+Ur.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ur)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ur.x),s.addScaledVector(a,Ur.y),s.addScaledVector(o,Ur.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xr.setScalar(0),Zr.setScalar(0),Qr.setScalar(0),Xr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,n),Qr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xr,i.x),a.addScaledVector(Zr,i.y),a.addScaledVector(Qr,i.z),a}static isFrontFacing(e,t,n,r){return Br.subVectors(n,t),Vr.subVectors(e,t),Br.cross(Vr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Br.subVectors(this.c,this.b),Vr.subVectors(this.a,this.b),Br.cross(Vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wr.subVectors(r,n),Gr.subVectors(i,n),qr.subVectors(e,n);let s=Wr.dot(qr),c=Gr.dot(qr);if(s<=0&&c<=0)return t.copy(n);Jr.subVectors(e,r);let l=Wr.dot(Jr),u=Gr.dot(Jr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wr,a);Yr.subVectors(e,i);let f=Wr.dot(Yr),p=Gr.dot(Yr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ei=class{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ni):ni.fromBufferAttribute(r,t),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ri.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ri.copy(e.boundingBox)),ri.applyMatrix4(e.matrixWorld),this.union(ri)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ui),di.subVectors(this.max,ui),ii.subVectors(e.a,ui),ai.subVectors(e.b,ui),oi.subVectors(e.c,ui),si.subVectors(ai,ii),ci.subVectors(oi,ai),li.subVectors(ii,oi);let t=[0,-si.z,si.y,0,-ci.z,ci.y,0,-li.z,li.y,si.z,0,-si.x,ci.z,0,-ci.x,li.z,0,-li.x,-si.y,si.x,0,-ci.y,ci.x,0,-li.y,li.x,0];return!mi(t,ii,ai,oi,di)||(t=[1,0,0,0,1,0,0,0,1],!mi(t,ii,ai,oi,di))?!1:(fi.crossVectors(si,ci),t=[fi.x,fi.y,fi.z],mi(t,ii,ai,oi,di))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ni=new Q,ri=new ei,ii=new Q,ai=new Q,oi=new Q,si=new Q,ci=new Q,li=new Q,ui=new Q,di=new Q,fi=new Q,pi=new Q;function mi(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pi.fromArray(e,a);let o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),s=t.dot(pi),c=n.dot(pi),l=r.dot(pi);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hi=new Q,gi=new jn,_i=0,vi=class extends nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_i++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ht,this.updateRanges=[],this.gpuType=Ae,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gi.fromBufferAttribute(this,t),gi.applyMatrix3(e),this.setXY(t,gi.x,gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix3(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),r=kn(r,this.array),i=kn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},yi=class extends vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}},bi=class extends vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xi=class extends vi{constructor(e,t,n){super(new Float32Array(e),t,n)}},Si=new ei,Ci=new Q,wi=new Q,Ti=class{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Si.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);let t=Ci.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Ci,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wi.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(wi)),this.expandByPoint(Ci.copy(e.center).sub(wi))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ei=0,Di=new nr,Oi=new kr,ki=new Q,Ai=new ei,ji=new ei,Mi=new Q,Ni=class e extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ei++}),this.uuid=cn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Wt(e)?bi:yi)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Fn().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return Oi.lookAt(e),Oi.updateMatrix(),this.applyMatrix4(Oi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xi(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Zt(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Qt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ai.setFromBufferAttribute(n),this.morphTargetsRelative?(Mi.addVectors(this.boundingBox.min,Ai.min),this.boundingBox.expandByPoint(Mi),Mi.addVectors(this.boundingBox.max,Ai.max),this.boundingBox.expandByPoint(Mi)):(this.boundingBox.expandByPoint(Ai.min),this.boundingBox.expandByPoint(Ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Qt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Q,1/0);else if(e){let n=this.boundingSphere.center;if(Ai.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ji.setFromBufferAttribute(n),this.morphTargetsRelative?(Mi.addVectors(Ai.min,ji.min),Ai.expandByPoint(Mi),Mi.addVectors(Ai.max,ji.max),Ai.expandByPoint(Mi)):(Ai.expandByPoint(ji.min),Ai.expandByPoint(ji.max))}Ai.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mi.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mi));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mi.fromBufferAttribute(a,t),o&&(ki.fromBufferAttribute(e,t),Mi.add(ki)),r=Math.max(r,n.distanceToSquared(Mi))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Qt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vi(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Q,s[e]=new Q;let c=new Q,l=new Q,u=new Q,d=new jn,f=new jn,p=new jn,m=new Q,h=new Q;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Q,y=new Q,b=new Q,x=new Q;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vi(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Q,i=new Q,a=new Q,o=new Q,s=new Q,c=new Q,l=new Q,u=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mi.fromBufferAttribute(e,t),Mi.normalize(),e.setXYZ(t,Mi.x,Mi.y,Mi.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vi(a,r,i)}if(this.index===null)return Zt(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pi=new Q,Fi=new Q,Ii=new Fn,Li=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Pi.subVectors(n,t).cross(Fi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Pi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ii.getNormalMatrix(e),r=this.coplanarPoint(Pi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ri=0,zi=class extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ri++}),this.uuid=cn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lr(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vt,this.stencilZFail=Vt,this.stencilZPass=Vt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Zt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?Zt(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lr().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Li().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new jn().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jn().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Bi=new Q,Vi=new Q,Hi=new Q,Ui=new Q,Wi=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vi.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Vi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Hi),o=Ui.dot(this.direction),s=-Ui.dot(Hi),c=Ui.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Vi).addScaledVector(Hi,d),f}intersectSphere(e,t){if(e.radius<0)return null;Bi.subVectors(e.center,this.origin);let n=Bi.dot(this.direction),r=Bi.dot(Bi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,ee=1/w,I=T-P*D,L=E-F*D,R=O-P*A,z=k-F*A,B=j-P*N,te=M-F*N,ne=B*z-te*R,re=I*te-L*B,V=R*L-z*I;if(r){if(ne<0||re<0||V<0)return null}else if((ne<0||re<0||V<0)&&(ne>0||re>0||V>0))return null;let ie=ne+re+V;if(ie===0)return null;let ae=ee*(ne*D+re*A+V*N);return(ie>0?ae<0:ae>0)?null:this.at(ae/ie,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gi=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Lr(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ki=new nr,qi=new Wi,Ji=new Ti,Yi=new Q,Xi=new Q,Zi=new Q,Qi=new Q,$i=new Q,ea=new Q,ta=new Q,na=new Q,ra=class extends kr{constructor(e=new Ni,t=new Gi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ea.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($i.fromBufferAttribute(s,e),a?ea.addScaledVector($i,r):ea.addScaledVector($i.sub(t),r))}t.add(ea)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(i),qi.copy(e.ray).recast(e.near),!(Ji.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Ji,Yi)===null||qi.origin.distanceToSquared(Yi)>(e.far-e.near)**2))&&(Ki.copy(i).invert(),qi.copy(e.ray).applyMatrix4(Ki),(n.boundingBox===null||qi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=aa(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=aa(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=aa(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=aa(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ia(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;na.copy(s),na.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(na);return l<n.near||l>n.far?null:{distance:l,point:na.clone(),object:e}}function aa(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xi),e.getVertexPosition(c,Zi),e.getVertexPosition(l,Qi);let u=ia(e,t,n,r,Xi,Zi,Qi,ta);if(u){let e=new Q;$r.getBarycoord(ta,Xi,Zi,Qi,e),i&&(u.uv=$r.getInterpolatedAttribute(i,s,c,l,e,new jn)),a&&(u.uv1=$r.getInterpolatedAttribute(a,s,c,l,e,new jn)),o&&(u.normal=$r.getInterpolatedAttribute(o,s,c,l,e,new Q),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Q,materialIndex:0};$r.getNormal(Xi,Zi,Qi,t.normal),u.face=t,u.barycoord=e}return u}var oa=new Zn,sa=new Zn,ca=new Zn,la=new Zn,ua=new nr,da=new Q,fa=new Ti,pa=new nr,ma=new Wi,ha=class extends ra{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=pe,this.bindMatrix=new nr,this.bindMatrixInverse=new nr,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ei),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(r),e.ray.intersectsSphere(fa)!==!1&&(pa.copy(r).invert(),ma.copy(e.ray).applyMatrix4(pa),(this.boundingBox===null||ma.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zn,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():Zt(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;sa.fromBufferAttribute(r.attributes.skinIndex,e),ca.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(oa.copy(t),t.set(0,0,0,0)):(oa.set(...t,1),t.set(0,0,0)),oa.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=ca.getComponent(e);if(r!==0){let i=sa.getComponent(e);ua.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(la.copy(oa).applyMatrix4(ua),r)}}return t.isVector4&&(t.w=oa.w),t.applyMatrix4(this.bindMatrixInverse)}},ga=class extends kr{constructor(){super(),this.isBone=!0,this.type=`Bone`}},_a=class extends Xn{constructor(e=null,t=1,n=1,r,i,a,o,s,c=ve,l=ve,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},va=new nr,ya=new nr,ba=class e{constructor(e=[],t=[]){this.uuid=cn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Zt(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new nr)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new nr;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:ya;va.multiplyMatrices(i,t[r]),va.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _a(t,e,e,ze,Ae);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(Zt(`Skeleton: No bone found with UUID:`,r),i=new ga),this.bones.push(i),this.boneInverses.push(new nr().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},xa=new Ti,Sa=new jn(.5,.5),Ca=new Q,wa=class{constructor(e=new Li,t=new Li,n=new Li,r=new Li,i=new Li,a=new Li){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ut,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xa)}intersectsSprite(e){return xa.center.set(0,0,0),xa.radius=.7071067811865476+Sa.distanceTo(e.center),xa.applyMatrix4(e.matrixWorld),this.intersectsSphere(xa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ca.x=r.normal.x>0?e.max.x:e.min.x,Ca.y=r.normal.y>0?e.max.y:e.min.y,Ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ta=class extends Xn{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ea=class extends Xn{constructor(e,t,n=ke,r,i,a,o=ve,s=ve,c,l=Be,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Da=class extends Ea{constructor(e,t=ke,n=301,r,i,a=ve,o=ve,s,c=Be){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Oa=class extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ka=class e extends Ni{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xi(c,3)),this.setAttribute(`normal`,new xi(l,3)),this.setAttribute(`uv`,new xi(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Q;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Aa=class e extends Ni{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new Q,l=new jn;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xi(a,3)),this.setAttribute(`normal`,new xi(o,3)),this.setAttribute(`uv`,new xi(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ja=class e extends Ni{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xi(p,3)),this.setAttribute(`normal`,new xi(m,3)),this.setAttribute(`uv`,new xi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ma=class e extends Ni{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Q,d=new Q,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xi(p,3)),this.setAttribute(`normal`,new xi(m,3)),this.setAttribute(`uv`,new xi(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Na(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Fa(i))i.isRenderTargetTexture?(Zt(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Fa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Pa(e){let t={};for(let n=0;n<e.length;n++){let r=Na(e[n]);for(let e in r)t[e]=r[e]}return t}function Fa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ia(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function La(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Bn.workingColorSpace}var Ra={clone:Na,merge:Pa},za=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ba=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Va=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=za,this.fragmentShader=Ba,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Na(e.uniforms),this.uniformsGroups=Ia(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Lr().setHex(r.value);break;case`v2`:this.uniforms[n].value=new jn().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Q().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Zn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Fn().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new nr().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ha=class extends Va{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ua=class extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Lr(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lr(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new jn(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wa=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=It,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ga=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ka(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function qa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ja=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ya=class extends Ja{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nt,endingEnd:Nt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pt:i=e,o=2*t-n;break;case Ft:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Pt:a=e,s=2*n-t;break;case Ft:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xa=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Za=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qa=class extends Ja{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=to(n,t,g,y,r);i[p]=$a(x,o,_,b,m)}return i}};function $a(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function eo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function to(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=$a(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=eo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var no=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),qa(e.settings)&&(n.settings={inTangents:Ka(e.settings.inTangents,Array),outTangents:Ka(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kt:t=this.InterpolantFactoryMethodDiscrete;break;case At:t=this.InterpolantFactoryMethodLinear;break;case jt:t=this.InterpolantFactoryMethodSmooth;break;case Mt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Zt(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kt;case this.InterpolantFactoryMethodLinear:return At;case this.InterpolantFactoryMethodSmooth:return jt;case this.InterpolantFactoryMethodBezier:return Mt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;qa(this.settings)&&(ro(this.settings.inTangents,e),ro(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Qt(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Qt(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Qt(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Qt(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Gt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Qt(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jt,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,qa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ro(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}no.prototype.ValueTypeName=``,no.prototype.TimeBufferType=Float32Array,no.prototype.ValueBufferType=Float32Array,no.prototype.DefaultInterpolation=At;var io=class extends no{constructor(e,t,n){super(e,t,n)}};io.prototype.ValueTypeName=`bool`,io.prototype.ValueBufferType=Array,io.prototype.DefaultInterpolation=kt,io.prototype.InterpolantFactoryMethodLinear=void 0,io.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends no{constructor(e,t,n,r){super(e,t,n,r)}};ao.prototype.ValueTypeName=`color`;var oo=class extends no{constructor(e,t,n,r){super(e,t,n,r)}};oo.prototype.ValueTypeName=`number`;var so=class extends Ja{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Mn.slerpFlat(i,0,a,c-o,a,c,s);return i}},co=class extends no{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}};co.prototype.ValueTypeName=`quaternion`,co.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends no{constructor(e,t,n){super(e,t,n)}};lo.prototype.ValueTypeName=`string`,lo.prototype.ValueBufferType=Array,lo.prototype.DefaultInterpolation=kt,lo.prototype.InterpolantFactoryMethodLinear=void 0,lo.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends no{constructor(e,t,n,r){super(e,t,n,r)}};uo.prototype.ValueTypeName=`vector`;var fo=class extends kr{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Lr(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kr.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lr(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},mo=new nr,ho=new Q,go=new Q,_o=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jn(512,512),this.mapType=we,this.map=null,this.mapPass=null,this.matrix=new nr,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new jn(1,1),this._viewportCount=1,this._viewports=[new Zn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ho.setFromMatrixPosition(e.matrixWorld),t.position.copy(ho),go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(go),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){mo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(mo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vo=new Q,yo=new Mn,bo=new Q,xo=class extends kr{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new nr,this.projectionMatrix=new nr,this.projectionMatrixInverse=new nr,this.coordinateSystem=Ut,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vo,yo,bo),bo.x===1&&bo.y===1&&bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vo,yo,bo),bo.x===1&&bo.y===1&&bo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vo,yo,bo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},So=new Q,Co=new jn,wo=new jn,To=class extends xo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(on*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sn*2*Math.atan(Math.tan(on*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){So.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(So.x,So.y).multiplyScalar(-e/So.z),So.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(So.x,So.y).multiplyScalar(-e/So.z)}getViewSize(e,t){return this.getViewBounds(e,Co,wo),t.subVectors(wo,Co)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(on*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=class extends xo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Do=class extends _o{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kr.DEFAULT_UP),this.updateMatrix(),this.target=new kr,this.shadow=new Do}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ko=-90,Ao=1,jo=class extends kr{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new To(ko,Ao,e,t);r.layers=this.layers,this.add(r);let i=new To(ko,Ao,e,t);i.layers=this.layers,this.add(i);let a=new To(ko,Ao,e,t);a.layers=this.layers,this.add(a);let o=new To(ko,Ao,e,t);o.layers=this.layers,this.add(o);let s=new To(ko,Ao,e,t);s.layers=this.layers,this.add(s);let c=new To(ko,Ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mo=class extends To{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},No=`\\[\\]\\.:\\/`,Po=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fo=`[^\\[\\]\\.:\\/]`,Io=`[^`+No.replace(`\\.`,``)+`]`,Lo=`((?:WC+[\\/:])*)`.replace(`WC`,Fo),Ro=`(WCOD+)?`.replace(`WCOD`,Io),zo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fo),Bo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fo),Vo=RegExp(`^`+Lo+Ro+zo+Bo+`$`),Ho=[`material`,`materials`,`bones`,`map`],Uo=class{constructor(e,t,n){let r=n||Wo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Po,``)}static parseTrackName(e){let t=Vo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ho.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Qt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Qt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Qt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Qt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Qt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Qt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Qt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Qt(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Qt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Qt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wo.Composite=Uo,Wo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wo.prototype.GetterByBindingType=[Wo.prototype._getValue_direct,Wo.prototype._getValue_array,Wo.prototype._getValue_arrayElement,Wo.prototype._getValue_toArray],Wo.prototype.SetterByBindingTypeAndVersioning=[[Wo.prototype._setValue_direct,Wo.prototype._setValue_direct_setNeedsUpdate,Wo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wo.prototype._setValue_array,Wo.prototype._setValue_array_setNeedsUpdate,Wo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wo.prototype._setValue_arrayElement,Wo.prototype._setValue_arrayElement_setNeedsUpdate,Wo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wo.prototype._setValue_fromArray,Wo.prototype._setValue_fromArray_setNeedsUpdate,Wo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Go=new nr,Ko=class{constructor(e,t,n=0,r=1/0){this.ray=new Wi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Qt(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Go),this}intersectObject(e,t=!0,n=[]){return Jo(e,this,n,t),n.sort(qo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Jo(e[r],this,n,t);return n.sort(qo),n}};function qo(e,t){return e.distance-t.distance}function Jo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Jo(r[e],t,n,!0)}}var Yo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=ln(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ln(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Xo=class extends nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Zo(e,t,n,r){let i=Qo(r);switch(n){case Le:return e*t;case He:return e*t/i.components*i.byteLength;case Ue:return e*t/i.components*i.byteLength;case We:return e*t*2/i.components*i.byteLength;case Ge:return e*t*2/i.components*i.byteLength;case Re:return e*t*3/i.components*i.byteLength;case ze:return e*t*4/i.components*i.byteLength;case Ke:return e*t*4/i.components*i.byteLength;case qe:case Je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ye:case Xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Qe:case et:return Math.max(e,16)*Math.max(t,8)/4;case Ze:case $e:return Math.max(e,8)*Math.max(t,8)/2;case tt:case nt:case it:case at:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rt:case ot:case st:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ct:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case lt:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ut:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case dt:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ft:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case pt:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case mt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ht:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case gt:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case _t:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case vt:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case yt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case bt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case St:case Ct:case wt:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Tt:case Et:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Dt:case Ot:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Qo(e){switch(e){case we:case Te:return{byteLength:1,components:1};case De:case Ee:case je:return{byteLength:2,components:1};case Me:case Ne:return{byteLength:2,components:4};case ke:case Oe:case Ae:return{byteLength:4,components:1};case Fe:case Ie:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?Zt(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function $o(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function es(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ts={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},$={common:{diffuse:{value:new Lr(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fn},alphaMap:{value:null},alphaMapTransform:{value:new Fn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fn}},envmap:{envMap:{value:null},envMapRotation:{value:new Fn},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fn},normalScale:{value:new jn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lr(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Lr(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fn},alphaTest:{value:0},uvTransform:{value:new Fn}},sprite:{diffuse:{value:new Lr(16777215)},opacity:{value:1},center:{value:new jn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fn},alphaMap:{value:null},alphaMapTransform:{value:new Fn},alphaTest:{value:0}}},ns={basic:{uniforms:Pa([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.fog]),vertexShader:ts.meshbasic_vert,fragmentShader:ts.meshbasic_frag},lambert:{uniforms:Pa([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Lr(0)},envMapIntensity:{value:1}}]),vertexShader:ts.meshlambert_vert,fragmentShader:ts.meshlambert_frag},phong:{uniforms:Pa([$.common,$.specularmap,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.fog,$.lights,{emissive:{value:new Lr(0)},specular:{value:new Lr(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ts.meshphong_vert,fragmentShader:ts.meshphong_frag},standard:{uniforms:Pa([$.common,$.envmap,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.roughnessmap,$.metalnessmap,$.fog,$.lights,{emissive:{value:new Lr(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ts.meshphysical_vert,fragmentShader:ts.meshphysical_frag},toon:{uniforms:Pa([$.common,$.aomap,$.lightmap,$.emissivemap,$.bumpmap,$.normalmap,$.displacementmap,$.gradientmap,$.fog,$.lights,{emissive:{value:new Lr(0)}}]),vertexShader:ts.meshtoon_vert,fragmentShader:ts.meshtoon_frag},matcap:{uniforms:Pa([$.common,$.bumpmap,$.normalmap,$.displacementmap,$.fog,{matcap:{value:null}}]),vertexShader:ts.meshmatcap_vert,fragmentShader:ts.meshmatcap_frag},points:{uniforms:Pa([$.points,$.fog]),vertexShader:ts.points_vert,fragmentShader:ts.points_frag},dashed:{uniforms:Pa([$.common,$.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ts.linedashed_vert,fragmentShader:ts.linedashed_frag},depth:{uniforms:Pa([$.common,$.displacementmap]),vertexShader:ts.depth_vert,fragmentShader:ts.depth_frag},normal:{uniforms:Pa([$.common,$.bumpmap,$.normalmap,$.displacementmap,{opacity:{value:1}}]),vertexShader:ts.meshnormal_vert,fragmentShader:ts.meshnormal_frag},sprite:{uniforms:Pa([$.sprite,$.fog]),vertexShader:ts.sprite_vert,fragmentShader:ts.sprite_frag},background:{uniforms:{uvTransform:{value:new Fn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ts.background_vert,fragmentShader:ts.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fn}},vertexShader:ts.backgroundCube_vert,fragmentShader:ts.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ts.cube_vert,fragmentShader:ts.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ts.equirect_vert,fragmentShader:ts.equirect_frag},distance:{uniforms:Pa([$.common,$.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ts.distance_vert,fragmentShader:ts.distance_frag},shadow:{uniforms:Pa([$.lights,$.fog,{color:{value:new Lr(0)},opacity:{value:1}}]),vertexShader:ts.shadow_vert,fragmentShader:ts.shadow_frag}};ns.physical={uniforms:Pa([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fn},clearcoatNormalScale:{value:new jn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fn},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fn},sheen:{value:0},sheenColor:{value:new Lr(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fn},transmissionSamplerSize:{value:new jn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fn},attenuationDistance:{value:0},attenuationColor:{value:new Lr(0)},specularColor:{value:new Lr(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fn},anisotropyVector:{value:new jn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fn}}]),vertexShader:ts.meshphysical_vert,fragmentShader:ts.meshphysical_frag};var rs={r:0,b:0,g:0},is=new nr,as=new Fn;as.set(-1,0,0,0,1,0,0,0,1);function os(e,t,n,r,i,a){let o=new Lr(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new ra(new ka(1,1,1),new Va({name:`BackgroundCubeMaterial`,uniforms:Na(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(is.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(as),l.material.toneMapped=Bn.getTransfer(i.colorSpace)!==Bt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ra(new ja(2,2),new Va({name:`BackgroundMaterial`,uniforms:Na(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Bn.getTransfer(i.colorSpace)!==Bt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(rs,La(e)),n.buffers.color.setClear(rs.r,rs.g,rs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function ss(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function cs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ls(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Zt(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Zt(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function us(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Li,s=new Fn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ds=4,fs=6,ps=20,ms=256,hs=new Eo,gs=new Lr,_s=null,vs=0,ys=0,bs=!1,xs=new Q,Ss=new Q,Cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xs}=i;_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=As(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ks(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_s,vs,ys),this._renderer.xr.enabled=bs,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),ys=this._renderer.getActiveMipmapLevel(),bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xe,minFilter:xe,generateMipmaps:!1,type:je,format:ze,colorSpace:Rt,depthBuffer:!1},r=Ts(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ts(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ws(r)),this._blurMaterial=Os(r,e,t),this._ggxMaterial=Ds(r,e,t)}return r}_compileMaterial(e){let t=new ra(new Ni,e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,n,r,i){let a=new To(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(gs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ra(new ka,new Gi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(gs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Es(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=As()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ks());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Es(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,hs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ds?n-d+ds:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Es(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,hs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Es(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,hs)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Es(t,3*l*(r>this._lodMax-ds?r-this._lodMax+ds:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,hs)}};function ws(e){let t=[],n=[],r=e,i=e-ds+1+fs;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?Ss.set(1,r,n):e===1?Ss.set(-n,1,-r):e===2?Ss.set(-n,r,1):e===3?Ss.set(-1,r,-n):e===4?Ss.set(-n,-1,r):Ss.set(n,r,-1),Ss.toArray(l,(e*6+t)*3)}}let u=new Ni;u.setAttribute(`position`,new vi(c,3)),u.setAttribute(`outputDirection`,new vi(l,3)),n.push(new ra(u,null)),r>ds&&r--}return{lodMeshes:n,sizeLods:t}}function Ts(e,t,n){let r=new $n(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Es(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ds(e,t,n){return new Va({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:js(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Os(e,t,n){return new Va({name:`SphericalGaussianBlur`,defines:{SAMPLES:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:js(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ks(){return new Va({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:js(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function As(){return new Va({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function js(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ms=class extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ka(5,5,5),i=new Va({name:`CubemapFromEquirect`,uniforms:Na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ra(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=xe),new jo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Ns(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ms(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Cs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Cs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ps(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&$t(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Fs(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?bi:yi)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Is(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ls(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Qt(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Rs(e,t,n){let r=new WeakMap,i=new Zn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new er(h,p,m,u);g.type=Ae,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new jn(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function zs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Bs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Vs(e,t,n,r,i,a){let o=new $n(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Ni;l.setAttribute(`position`,new xi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new xi([0,2,0,0,2,0],2));let u=new Ha({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ra(l,u),f=new Eo(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new $n(t,n,{type:je,depthBuffer:!1,stencilBuffer:!1}),c=new $n(t,n,{type:je,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Bn.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Bs[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Hs=new Xn,Us=new Ea(1,1),Ws=new er,Gs=new tr,Ks=new Ta,qs=[],Js=[],Ys=new Float32Array(16),Xs=new Float32Array(9),Zs=new Float32Array(4);function Qs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=qs[i];if(a===void 0&&(a=new Float32Array(i),qs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function $s(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ec(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function tc(e,t){let n=Js[t];n===void 0&&(n=new Int32Array(t),Js[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function nc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($s(n,t))return;e.uniform2fv(this.addr,t),ec(n,t)}}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if($s(n,t))return;e.uniform3fv(this.addr,t),ec(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($s(n,t))return;e.uniform4fv(this.addr,t),ec(n,t)}}function oc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($s(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ec(n,t)}else{if($s(n,r))return;Zs.set(r),e.uniformMatrix2fv(this.addr,!1,Zs),ec(n,r)}}function sc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($s(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ec(n,t)}else{if($s(n,r))return;Xs.set(r),e.uniformMatrix3fv(this.addr,!1,Xs),ec(n,r)}}function cc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if($s(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ec(n,t)}else{if($s(n,r))return;Ys.set(r),e.uniformMatrix4fv(this.addr,!1,Ys),ec(n,r)}}function lc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($s(n,t))return;e.uniform2iv(this.addr,t),ec(n,t)}}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($s(n,t))return;e.uniform3iv(this.addr,t),ec(n,t)}}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($s(n,t))return;e.uniform4iv(this.addr,t),ec(n,t)}}function pc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if($s(n,t))return;e.uniform2uiv(this.addr,t),ec(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if($s(n,t))return;e.uniform3uiv(this.addr,t),ec(n,t)}}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if($s(n,t))return;e.uniform4uiv(this.addr,t),ec(n,t)}}function _c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Us.compareFunction=n.isReversedDepthBuffer()?518:515,a=Us):a=Hs,n.setTexture2D(t||a,i)}function vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Gs,i)}function yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ks,i)}function bc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Ws,i)}function xc(e){switch(e){case 5126:return nc;case 35664:return rc;case 35665:return ic;case 35666:return ac;case 35674:return oc;case 35675:return sc;case 35676:return cc;case 5124:case 35670:return lc;case 35667:case 35671:return uc;case 35668:case 35672:return dc;case 35669:case 35673:return fc;case 5125:return pc;case 36294:return mc;case 36295:return hc;case 36296:return gc;case 35678:case 36198:case 36298:case 36306:case 35682:return _c;case 35679:case 36299:case 36307:return vc;case 35680:case 36300:case 36308:case 36293:return yc;case 36289:case 36303:case 36311:case 36292:return bc}}function Sc(e,t){e.uniform1fv(this.addr,t)}function Cc(e,t){let n=Qs(t,this.size,2);e.uniform2fv(this.addr,n)}function wc(e,t){let n=Qs(t,this.size,3);e.uniform3fv(this.addr,n)}function Tc(e,t){let n=Qs(t,this.size,4);e.uniform4fv(this.addr,n)}function Ec(e,t){let n=Qs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Dc(e,t){let n=Qs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Oc(e,t){let n=Qs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function kc(e,t){e.uniform1iv(this.addr,t)}function Ac(e,t){e.uniform2iv(this.addr,t)}function jc(e,t){e.uniform3iv(this.addr,t)}function Mc(e,t){e.uniform4iv(this.addr,t)}function Nc(e,t){e.uniform1uiv(this.addr,t)}function Pc(e,t){e.uniform2uiv(this.addr,t)}function Fc(e,t){e.uniform3uiv(this.addr,t)}function Ic(e,t){e.uniform4uiv(this.addr,t)}function Lc(e,t,n){let r=this.cache,i=t.length,a=tc(n,i);$s(r,a)||(e.uniform1iv(this.addr,a),ec(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Us:Hs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rc(e,t,n){let r=this.cache,i=t.length,a=tc(n,i);$s(r,a)||(e.uniform1iv(this.addr,a),ec(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Gs,a[e])}function zc(e,t,n){let r=this.cache,i=t.length,a=tc(n,i);$s(r,a)||(e.uniform1iv(this.addr,a),ec(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ks,a[e])}function Bc(e,t,n){let r=this.cache,i=t.length,a=tc(n,i);$s(r,a)||(e.uniform1iv(this.addr,a),ec(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ws,a[e])}function Vc(e){switch(e){case 5126:return Sc;case 35664:return Cc;case 35665:return wc;case 35666:return Tc;case 35674:return Ec;case 35675:return Dc;case 35676:return Oc;case 5124:case 35670:return kc;case 35667:case 35671:return Ac;case 35668:case 35672:return jc;case 35669:case 35673:return Mc;case 5125:return Nc;case 36294:return Pc;case 36295:return Fc;case 36296:return Ic;case 35678:case 36198:case 36298:case 36306:case 35682:return Lc;case 35679:case 36299:case 36307:return Rc;case 35680:case 36300:case 36308:case 36293:return zc;case 36289:case 36303:case 36311:case 36292:return Bc}}var Hc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xc(t.type)}},Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vc(t.type)}},Wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gc=/(\w+)(\])?(\[|\.)?/g;function Kc(e,t){e.seq.push(t),e.map[t.id]=t}function qc(e,t,n){let r=e.name,i=r.length;for(Gc.lastIndex=0;;){let a=Gc.exec(r),o=Gc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Kc(n,l===void 0?new Hc(s,e,t):new Uc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Wc(s),Kc(n,e)),n=e}}}var Jc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);qc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Yc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xc=37297,Zc=0;function Qc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $c=new Fn;function el(e){Bn._getMatrix($c,Bn.workingColorSpace,e);let t=`mat3( ${$c.elements.map(e=>e.toFixed(4))} )`;switch(Bn.getTransfer(e)){case zt:return[t,`LinearTransferOETF`];case Bt:return[t,`sRGBTransferOETF`];default:return Zt(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function tl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Qc(e.getShaderSource(t),r)}return i}function nl(e,t){let n=el(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var rl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function il(e,t){let n=rl[t];return n===void 0?(Zt(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var al=new Q;function ol(){return Bn.getLuminanceCoefficients(al),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${al.x.toFixed(4)}, ${al.y.toFixed(4)}, ${al.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function sl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ul).join(`
`)}function cl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ll(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ul(e){return e!==``}function dl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pl=/^[ \t]*#include +<([\w\d./]+)>/gm;function ml(e){return e.replace(pl,gl)}var hl=new Map;function gl(e,t){let n=ts[t];if(n===void 0){let e=hl.get(t);if(e!==void 0)n=ts[e],Zt(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ml(n)}var _l=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(e){return e.replace(_l,yl)}function yl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function bl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var xl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Sl(e){return xl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Cl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function wl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Cl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Tl={302:`ENVMAP_MODE_REFRACTION`};function El(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Tl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Dl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Ol(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Dl[e.combine]||`ENVMAP_BLENDING_NONE`}function kl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Al(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Sl(n),l=wl(n),u=El(n),d=Ol(n),f=kl(n),p=sl(n),m=cl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ul).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ul).join(`
`),_.length>0&&(_+=`
`)):(g=[bl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ul).join(`
`),_=[bl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ts.tonemapping_pars_fragment,n.toneMapping===0?``:il(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ts.colorspace_pars_fragment,nl(`linearToOutputTexel`,n.outputColorSpace),ol(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ul).join(`
`)),o=ml(o),o=dl(o,n),o=fl(o,n),s=ml(s),s=dl(s,n),s=fl(s,n),o=vl(o),s=vl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Yc(i,i.VERTEX_SHADER,y),S=Yc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=tl(i,x,`vertex`),n=tl(i,S,`fragment`);Qt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Zt(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Jc(i,h),T=ll(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Xc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var jl=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nl(e),t.set(e,n)),n}},Nl=class{constructor(e){this.id=jl++,this.code=e,this.usedTimes=0}};function Pl(e){return e===1030||e===37490||e===36285}function Fl(e,t,n,r,i,a){let o=new pr,s=new Ml,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Zt(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ns[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,ee=!!i.matcap,I=!!x,L=!!i.aoMap,R=!!i.lightMap,z=!!i.bumpMap&&i.wireframe===!1,B=!!i.normalMap,te=!!i.displacementMap,ne=!!i.emissiveMap,re=!!i.metalnessMap,V=!!i.roughnessMap,ie=i.anisotropy>0,ae=i.clearcoat>0,H=i.dispersion>0,U=i.retroreflectivity>0,W=i.iridescence>0,oe=i.sheen>0,se=i.transmission>0,ce=ie&&!!i.anisotropyMap,le=ae&&!!i.clearcoatMap,G=ae&&!!i.clearcoatNormalMap,K=ae&&!!i.clearcoatRoughnessMap,ue=W&&!!i.iridescenceMap,q=W&&!!i.iridescenceThicknessMap,J=oe&&!!i.sheenColorMap,de=oe&&!!i.sheenRoughnessMap,Y=!!i.specularMap,X=!!i.specularColorMap,fe=!!i.specularIntensityMap,Z=se&&!!i.transmissionMap,pe=se&&!!i.thicknessMap,me=!!i.gradientMap,he=!!i.alphaMap,ge=i.alphaTest>0,_e=!!i.alphaHash,ve=!!i.extensions,ye=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ye=e.toneMapping);let be={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Bn.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:ee,envMap:I,envMapMode:I&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:R,bumpMap:z,normalMap:B,displacementMap:te,emissiveMap:ne,normalMapObjectSpace:B&&i.normalMapType===1,normalMapTangentSpace:B&&i.normalMapType===0,packedNormalMap:B&&i.normalMapType===0&&Pl(i.normalMap.format),metalnessMap:re,roughnessMap:V,anisotropy:ie,anisotropyMap:ce,clearcoat:ae,clearcoatMap:le,clearcoatNormalMap:G,clearcoatRoughnessMap:K,dispersion:H,retroreflection:U,iridescence:W,iridescenceMap:ue,iridescenceThicknessMap:q,sheen:oe,sheenColorMap:J,sheenRoughnessMap:de,specularMap:Y,specularColorMap:X,specularIntensityMap:fe,transmission:se,transmissionMap:Z,thicknessMap:pe,gradientMap:me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:he,alphaTest:ge,alphaHash:_e,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:L&&m(i.aoMap.channel),lightMapUv:R&&m(i.lightMap.channel),bumpMapUv:z&&m(i.bumpMap.channel),normalMapUv:B&&m(i.normalMap.channel),displacementMapUv:te&&m(i.displacementMap.channel),emissiveMapUv:ne&&m(i.emissiveMap.channel),metalnessMapUv:re&&m(i.metalnessMap.channel),roughnessMapUv:V&&m(i.roughnessMap.channel),anisotropyMapUv:ce&&m(i.anisotropyMap.channel),clearcoatMapUv:le&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:G&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:q&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:J&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(i.sheenRoughnessMap.channel),specularMapUv:Y&&m(i.specularMap.channel),specularColorMapUv:X&&m(i.specularColorMap.channel),specularIntensityMapUv:fe&&m(i.specularIntensityMap.channel),transmissionMapUv:Z&&m(i.transmissionMap.channel),thicknessMapUv:pe&&m(i.thicknessMap.channel),alphaMapUv:he&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(B||ie),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||he),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&B===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ye,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Bn.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ne&&i.emissiveMap.isVideoTexture===!0&&Bn.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ve&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ve&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ns[t];n=Ra.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Al(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Il(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ll(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Rl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ll),r.length>1&&r.sort(t||Rl),i.length>1&&i.sort(t||Rl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Bl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new zl,e.set(t,[i])):n>=r.length?(i=new zl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Vl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new Q,color:new Lr};break;case`SpotLight`:n={position:new Q,direction:new Q,color:new Lr,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Q,color:new Lr,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Q,skyColor:new Lr,groundColor:new Lr};break;case`RectAreaLight`:n={color:new Lr,position:new Q,halfWidth:new Q,halfHeight:new Q}}return e[t.id]=n,n}}}function Hl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jn};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jn};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jn,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Ul=0;function Wl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Gl(e){let t=new Vl,n=Hl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Q);let i=new Q,a=new nr,o=new nr;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Wl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=$.LTC_FLOAT_1,r.rectAreaLTC2=$.LTC_FLOAT_2):(r.rectAreaLTC1=$.LTC_HALF_1,r.rectAreaLTC2=$.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Ul++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Kl(e){let t=new Gl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ql(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Kl(e),t.set(n,[a])):r>=i.length?(a=new Kl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Jl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yl=`uniform sampler2D shadow_pass;
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
}`,Xl=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Zl=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Ql=new nr,$l=new Q,eu=new Q;function tu(e,t,n){let r=new wa,i=new jn,a=new jn,o=new Zn,s=new Wa,c=new Ga,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jn},radius:{value:4}},vertexShader:Jl,fragmentShader:Yl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Ni;m.setAttribute(`position`,new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new ra(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(Zt(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Zt(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Zt(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new $n(i.x,i.y,{format:We,type:je,minFilter:xe,magFilter:xe,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Ea(i.x,i.y,Ae),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Be,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ve,d.map.depthTexture.magFilter=ve}else l.isPointLight?(d.map=new Ms(i.x),d.map.depthTexture=new Da(i.x,ke)):(d.map=new $n(i.x,i.y),d.map.depthTexture=new Ea(i.x,i.y,ke)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Be,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=xe,d.map.depthTexture.magFilter=xe):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=ve,d.map.depthTexture.magFilter=ve);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),$l.setFromMatrixPosition(l.matrixWorld),e.position.copy($l),eu.copy(e.position),eu.add(Xl[t]),e.up.copy(Zl[t]),e.lookAt(eu),e.updateMatrixWorld(),n.makeTranslation(-$l.x,-$l.y,-$l.z),Ql.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Ql,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new $n(i.x,i.y,{format:We,type:je}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function nu(e,t){function n(){let t=!1,n=new Zn,r=null,i=new Zn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?re(e.DEPTH_TEST):V(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=tn[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?re(e.STENCIL_TEST):V(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Lr(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,I={},L=e.getParameter(e.SCISSOR_BOX),R=e.getParameter(e.VIEWPORT),z=new Zn().fromArray(L),B=new Zn().fromArray(R);function te(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ne={};ne[e.TEXTURE_2D]=te(e.TEXTURE_2D,e.TEXTURE_2D,1),ne[e.TEXTURE_CUBE_MAP]=te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[e.TEXTURE_2D_ARRAY]=te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ne[e.TEXTURE_3D]=te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),re(e.DEPTH_TEST),o.setFunc(3),ce(!1),le(1),re(e.CULL_FACE),oe(0);function re(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function V(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ie(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ae(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function H(t){return h!==t&&(e.useProgram(t),h=t,!0)}let U={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};U[103]=e.MIN,U[104]=e.MAX;let W={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function oe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(V(e.BLEND),g=!1);else if(g===!1&&(re(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Qt(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Qt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Qt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Qt(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(U[n],U[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(W[r],W[i],W[o],W[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function se(t,n){t.side===2?V(e.CULL_FACE):re(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ce(r),t.blending===1&&t.transparent===!1?oe(0):oe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),K(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):V(e.SAMPLE_ALPHA_TO_COVERAGE)}function ce(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function le(t){t===0?V(e.CULL_FACE):(re(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function G(t){t!==k&&(N&&e.lineWidth(t),k=t)}function K(t,n,r){t?(re(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):V(e.POLYGON_OFFSET_FILL)}function ue(t){t?re(e.SCISSOR_TEST):V(e.SCISSOR_TEST)}function q(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function J(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=I[r];i===void 0&&(i={type:void 0,texture:void 0},I[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||ne[t]),i.type=t,i.texture=n)}function de(){let t=I[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Y(){try{e.compressedTexImage2D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function X(){try{e.compressedTexImage3D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function fe(){try{e.texSubImage2D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function Z(){try{e.texSubImage3D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function pe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function me(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function he(){try{e.texStorage2D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function ge(){try{e.texStorage3D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function _e(){try{e.texImage2D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function ve(){try{e.texImage3D(...arguments)}catch(e){Qt(`WebGLState:`,e)}}function ye(t){return d[t]===void 0?e.getParameter(t):d[t]}function be(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function xe(t){z.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),z.copy(t))}function Se(t){B.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),B.copy(t))}function Ce(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function we(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Te(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,I={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Lr(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,z.set(0,0,e.canvas.width,e.canvas.height),B.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:re,disable:V,bindFramebuffer:ie,drawBuffers:ae,useProgram:H,setBlending:oe,setMaterial:se,setFlipSided:ce,setCullFace:le,setLineWidth:G,setPolygonOffset:K,setScissorTest:ue,activeTexture:q,bindTexture:J,unbindTexture:de,compressedTexImage2D:Y,compressedTexImage3D:X,texImage2D:_e,texImage3D:ve,pixelStorei:be,getParameter:ye,updateUBOMapping:Ce,uniformBlockBinding:we,texStorage2D:he,texStorage3D:ge,texSubImage2D:fe,texSubImage3D:Z,compressedTexSubImage2D:pe,compressedTexSubImage3D:me,scissor:xe,viewport:Se,reset:Te}}function ru(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new jn,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Kt(`canvas`)}function g(e,t,n){let r=1,i=Y(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Zt(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Zt(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Zt(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Zt(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?zt:Bn.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Zt(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&Zt(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&J(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Zt(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Zt(`WebGLRenderer: Texture marked for update but image is incomplete`);else{V(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?V(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ee(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?V(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version?ie(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let L={[he]:e.REPEAT,[ge]:e.CLAMP_TO_EDGE,[_e]:e.MIRRORED_REPEAT},R={[ve]:e.NEAREST,[ye]:e.NEAREST_MIPMAP_NEAREST,[be]:e.NEAREST_MIPMAP_LINEAR,[xe]:e.LINEAR,[Se]:e.LINEAR_MIPMAP_NEAREST,[Ce]:e.LINEAR_MIPMAP_LINEAR},z={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function B(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Zt(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,L[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,L[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,L[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,R[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,R[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,z[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function te(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ne(e,t,n){return Math.floor(Math.floor(e/n)/t)}function re(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ne(n.start,r.width,4),c=ne(t.start,r.width,4);n.start<=i+1&&a===c&&ne(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function V(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=te(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Bn.getPrimaries(Bn.workingColorSpace),r=o.colorSpace===``?null:Bn.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=de(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);B(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Ve,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&re(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Zo(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Zt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Zt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Zo(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=Y(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=Y(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ie(t,o,s){if(o.image.length!==6)return;let c=te(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Bn.getPrimaries(Bn.workingColorSpace),r=o.colorSpace===``?null:Bn.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=de(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);B(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?Zt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=Y(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ae(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),q(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ue(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function H(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;q(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ue(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ue(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);q(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ue(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ue(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function U(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),B(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=ue(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)q(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)q(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function W(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)U(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?U(i.__webglFramebuffer[0],t,0):U(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),H(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),H(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,i){let a=r.get(t);n!==void 0&&ae(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&W(t)}function se(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&q(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=ue(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),H(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),B(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ae(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),B(c,a),ae(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),B(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ae(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ae(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&W(t)}function ce(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let le=[],G=[];function K(t){if(t.samples>0){if(q(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(le.length=0,G.length=0,le.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(le.push(l),G.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,G)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,le))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ue(e){return Math.min(i.maxSamples,e.samples)}function q(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function J(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function de(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Bn.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Zt(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Qt(`WebGLTextures: Unsupported texture color space:`,n)),t}function Y(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=ee,this.setTextureCube=I,this.rebindTextures=oe,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iu(e,t){function n(n,r=``){let i,a=Bn.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var au=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ou=`
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

}`,su=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Va({vertexShader:au,fragmentShader:ou,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ra(new ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cu=class extends nn{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new su,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new jn,C=null,w=null,T=new To;T.viewport=new Zn;let E=new To;E.viewport=new Zn;let D=[T,E],O=new Mo,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Mr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Mr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Mr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,B.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Zt(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Zt(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Ve:Be,a=_.stencil?Pe:ke);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new $n(d.textureWidth,d.textureHeight,{format:ze,type:we,depthTexture:new Ea(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $n(f.framebufferWidth,f.framebufferHeight,{format:ze,type:we,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),B.setContext(r),B.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let P=new Q,F=new Q;function ee(e,t,n){P.setFromMatrixPosition(t.matrixWorld),F.setFromMatrixPosition(n.matrixWorld);let r=P.distanceTo(F),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;I(O,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?ee(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),L(e,O,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=sn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let R=null;function z(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new To,o.layers.enable(n),o.viewport=new Zn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Oa,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}R&&R(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let B=new $o;B.setAnimationLoop(z),this.setAnimationLoop=function(e){R=e},this.dispose=function(){}}},lu=new nr,uu=new Fn;uu.set(-1,0,0,0,1,0,0,0,1);function du(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,La(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(lu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(uu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function fu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Qt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Zt(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Zt(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var pu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),mu=null;function hu(){return mu===null&&(mu=new _a(pu,16,16,We,je),mu.name=`DFG_LUT`,mu.minFilter=xe,mu.magFilter=xe,mu.wrapS=ge,mu.wrapT=ge,mu.generateMipmaps=!1,mu.needsUpdate=!0),mu}var gu=class{constructor(e={}){let{canvas:t=qt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=we}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Ke,Ge,Ue]),g=new Set([we,ke,De,Pe,Me,Ne]),_=new Uint32Array(4),v=new Int32Array(4),y=new Q,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=Lt;let j=0,M=0,N=null,P=-1,F=null,ee=new Zn,I=new Zn,L=null,R=new Lr(0),z=0,B=t.width,te=t.height,ne=1,re=null,V=null,ie=new Zn(0,0,B,te),ae=new Zn(0,0,B,te),H=!1,U=new wa,W=!1,oe=!1,se=new nr,ce=new Q,le=new Zn,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},K=!1;function ue(){return N===null?ne:1}let q=n;function J(e,n){return t.getContext(e,n)}let de,Y,X,fe,Z,pe,me,he,ge,_e,ve,ye,be,xe,Se,Te,Ee,Oe,Ae,Fe,Ie,Le,Re;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Ve,!1),t.addEventListener(`webglcontextrestored`,He,!1),t.addEventListener(`webglcontextcreationerror`,We,!1),q===null){let t=`webgl2`;if(q=J(t,e),q===null)throw J(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ze()}catch(e){throw t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Qt(`WebGLRenderer: `+e.message),e}function ze(){de=new Ps(q),de.init(),Ie=new iu(q,de),Y=new ls(q,de,e,Ie),X=new nu(q,de),Y.reversedDepthBuffer&&d&&X.buffers.depth.setReversed(!0),O=q.createFramebuffer(),k=q.createFramebuffer(),A=q.createFramebuffer(),fe=new Ls(q),Z=new Il,pe=new ru(q,de,X,Z,Y,Ie,fe),me=new Ns(T),he=new es(q),Le=new ss(q,he),ge=new Fs(q,he,fe,Le),_e=new zs(q,ge,he,Le,fe),Oe=new Rs(q,Y,pe),Se=new us(Z),ve=new Fl(T,me,de,Y,Le,Se),ye=new du(T,Z),be=new Bl,xe=new ql(de),Ee=new os(T,me,X,_e,p,s),Te=new tu(T,_e,Y),Re=new fu(q,fe,Y,X),Ae=new cs(q,de,fe),Fe=new Is(q,de,fe),fe.programs=ve.programs,T.capabilities=Y,T.extensions=de,T.properties=Z,T.renderLists=be,T.shadowMap=Te,T.state=X,T.info=fe}m!==1009&&(w=new Vs(m,t.width,t.height,o,r,i));let Be=new cu(T,q);this.xr=Be,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let e=de.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=de.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(e){e!==void 0&&(ne=e,this.setSize(B,te,!1))},this.getSize=function(e){return e.set(B,te)},this.setSize=function(e,n,r=!0){Be.isPresenting?Zt(`WebGLRenderer: Can't change size while VR device is presenting.`):(B=e,te=n,t.width=Math.floor(e*ne),t.height=Math.floor(n*ne),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(B*ne,te*ne).floor()},this.setDrawingBufferSize=function(e,n,r){B=e,te=n,ne=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)Qt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Zt(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ee)},this.getViewport=function(e){return e.copy(ie)},this.setViewport=function(e,t,n,r){e.isVector4?ie.set(e.x,e.y,e.z,e.w):ie.set(e,t,n,r),X.viewport(ee.copy(ie).multiplyScalar(ne).round())},this.getScissor=function(e){return e.copy(ae)},this.setScissor=function(e,t,n,r){e.isVector4?ae.set(e.x,e.y,e.z,e.w):ae.set(e,t,n,r),X.scissor(I.copy(ae).multiplyScalar(ne).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(e){X.setScissorTest(H=e)},this.setOpaqueSort=function(e){re=e},this.setTransparentSort=function(e){V=e},this.getClearColor=function(e){return e.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Ee.getClearColor(),r=Ee.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,q.clearBufferuiv(q.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,q.clearBufferiv(q.COLOR,0,v))}else r|=q.COLOR_BUFFER_BIT}t&&(r|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&q.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Ve,!1),t.removeEventListener(`webglcontextrestored`,He,!1),t.removeEventListener(`webglcontextcreationerror`,We,!1),Ee.dispose(),be.dispose(),xe.dispose(),Z.dispose(),me.dispose(),_e.dispose(),Le.dispose(),Re.dispose(),ve.dispose(),Be.dispose(),Be.removeEventListener(`sessionstart`,$e),Be.removeEventListener(`sessionend`,et),tt.stop()};function Ve(e){e.preventDefault(),Yt(`WebGLRenderer: Context Lost.`),E=!0}function He(){Yt(`WebGLRenderer: Context Restored.`),E=!1;let e=fe.autoReset,t=Te.enabled,n=Te.autoUpdate,r=Te.needsUpdate,i=Te.type;ze(),fe.autoReset=e,Te.enabled=t,Te.autoUpdate=n,Te.needsUpdate=r,Te.type=i}function We(e){Qt(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),Z.remove(e)}function Ye(e){let t=Z.get(e).programs;t!==void 0&&(t.forEach(function(e){ve.releaseProgram(e)}),e.isShaderMaterial&&ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=G);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=dt(e,t,n,r,i);X.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Le.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=he.get(c),g=Fe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(X.setLineWidth(r.wireframeLinewidth*ue()),g.setMode(q.LINES)):g.setMode(q.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),X.setLineWidth(e*ue()),i.isLineSegments?g.setMode(q.LINES):i.isLineLoop?g.setMode(q.LINE_LOOP):g.setMode(q.LINE_STRIP)}else i.isPoints?g.setMode(q.POINTS):i.isSprite&&g.setMode(q.TRIANGLES);if(i.isBatchedMesh){if(de.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?he.get(c).bytesPerElement:1,o=Z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(q,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),W===!0&&Se.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,st(e,t,r),e.side=0,e.needsUpdate=!0,st(e,t,r),e.side=2):st(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=xe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),oe=this.localClippingEnabled,W=Se.init(this.clippingPlanes,oe),W===!0&&Se.setGlobalState(this.clippingPlanes,t),D!==null&&Te.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Xe(o,n,t,e),r.add(o)}else Xe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=Z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}de.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function Qe(e){Ze&&Ze(e)}function $e(){tt.stop()}function et(){tt.start()}let tt=new $o;tt.setAnimationLoop(Qe),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){Ze=e,Be.setAnimationLoop(e),e===null?tt.stop():tt.start()},Be.addEventListener(`sessionstart`,$e),Be.addEventListener(`sessionend`,et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Qt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Be.enabled===!0&&Be.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(t),t=Be.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=xe.get(e,C.length),x.init(t),x.state.textureUnits=pe.getTextureUnits(),C.push(x),se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),U.setFromProjectionMatrix(se,Ut,t.reversedDepth),oe=this.localClippingEnabled,W=Se.init(this.clippingPlanes,oe),b=be.get(e,S.length),b.init(),S.push(b),Be.enabled===!0&&Be.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&nt(e,t,-1/0,T.sortObjects)}nt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(re,V),K=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,K&&Ee.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&Se.beginShadows();let i=x.state.shadowsArray;if(Te.render(i,e,t),W===!0&&Se.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];it(n,r,e,a)}K&&Ee.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];rt(b,e,n,n.viewport)}}else r.length>0&&it(n,r,e,t),K&&Ee.render(e),rt(b,e,t)}N!==null&&M===0&&(pe.updateMultisampleRenderTarget(N),pe.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Le.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],pe.setTextureUnits(x.state.textureUnits),W===!0&&Se.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(U)){r&&le.setFromMatrixPosition(e.matrixWorld).applyMatrix4(se);let i=_e.update(e),a=e.material;a.visible&&b.push(e,i,a,n,le.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(U))){let i=_e.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),le.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),le.copy(e.boundingSphere.center)),le.applyMatrix4(e.matrixWorld).applyMatrix4(se)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,le.z,s,t)}}else a.visible&&b.push(e,i,a,n,le.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),W===!0&&Se.setGlobalState(T.clippingPlanes,n),r&&X.viewport(ee.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=de.has(`EXT_color_buffer_half_float`)||de.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new $n(1,1,{generateMipmaps:!0,type:e?je:we,minFilter:Ce,samples:Math.max(4,Y.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Bn.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||ee;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(R),z=T.getClearAlpha(),z<1&&T.setClearColor(16777215,.5),T.clear(),K&&Ee.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),W===!0&&Se.setGlobalState(T.clippingPlanes,r),at(e,n,r),pe.updateMultisampleRenderTarget(a),pe.updateRenderTargetMipmap(a),de.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(pe.updateMultisampleRenderTarget(a),pe.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(R,z),d!==void 0&&(r.viewport=d),T.toneMapping=u}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ot(o,t,n,s,l,c)}}function ot(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function st(e,t,n){t.isScene!==!0&&(t=G);let r=Z.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ve.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=me.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return lt(e,s),d}else s.uniforms=ve.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Se.uniform),lt(e,s),r.needsLights=pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function ct(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Jc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function lt(e,t){let n=Z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function dt(e,t,n,r,i){t.isScene!==!0&&(t=G),pe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Bn.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=me.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Z.get(r),y=x.state.lights;if(W===!0&&(oe===!0||e!==F)){let t=e===F&&r.id===P;Se.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Se.numPlanes||v.numIntersection!==Se.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=st(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(X.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=ut(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){X.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(q,`projectionMatrix`,e.projectionMatrix),O.setValue(q,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(q,ce.setFromMatrixPosition(e.matrixWorld)),Y.logarithmicDepthBuffer&&O.setValue(q,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(q,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(q,`sunShadowMap`,y.state.sunShadowMap,pe),y.state.directionalShadowMap.length>0&&O.setValue(q,`directionalShadowMap`,y.state.directionalShadowMap,pe),y.state.spotShadowMap.length>0&&O.setValue(q,`spotShadowMap`,y.state.spotShadowMap,pe),y.state.pointShadowMap.length>0&&O.setValue(q,`pointShadowMap`,y.state.pointShadowMap,pe)),i.isSkinnedMesh){O.setOptional(q,i,`bindMatrix`),O.setOptional(q,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(q,`boneTexture`,e.boneTexture,pe))}i.isBatchedMesh&&(O.setOptional(q,i,`batchingTexture`),O.setValue(q,`batchingTexture`,i._matricesTexture,pe),O.setOptional(q,i,`batchingIdTexture`),O.setValue(q,`batchingIdTexture`,i._indirectTexture,pe),O.setOptional(q,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(q,`batchingColorTexture`,i._colorsTexture,pe));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Oe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(q,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=hu()),w){if(O.setValue(q,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ft(k,E),a&&r.fog===!0&&ye.refreshFogUniforms(k,a),ye.refreshMaterialUniforms(k,r,ne,te,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Jc.upload(q,ct(v),k,pe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Jc.upload(q,ct(v),k,pe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(q,`center`,i.center),O.setValue(q,`modelViewMatrix`,i.modelViewMatrix),O.setValue(q,`normalMatrix`,i.normalMatrix),O.setValue(q,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Re.update(n,S),Re.bind(n,S)}}return S}function ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=Z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Z.get(e.texture).__webglTexture=t,Z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=Z.get(e);if(o.__useDefaultFramebuffer!==void 0){X.bindFramebuffer(q.FRAMEBUFFER,o.__webglFramebuffer),ee.copy(e.viewport),I.copy(e.scissor),L=e.scissorTest,X.viewport(ee),X.scissor(I),X.setScissorTest(L),P=-1;return}if(o.__webglFramebuffer===void 0)pe.setupRenderTarget(e);else if(o.__hasExternalTextures)pe.rebindTextures(e,Z.get(e.texture).__webglTexture,Z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);pe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&pe.useMultisampledRTT(e)===!1?Z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ee.copy(e.viewport),I.copy(e.scissor),L=e.scissorTest}else ee.copy(ie).multiplyScalar(ne).floor(),I.copy(ae).multiplyScalar(ne).floor(),L=H;if(n!==0&&(r=O),X.bindFramebuffer(q.FRAMEBUFFER,r)&&X.drawBuffers(e,r),X.viewport(ee),X.scissor(I),X.setScissorTest(L),i){let r=Z.get(e.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Z.get(e.textures[t]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Z.get(e.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,t.__webglTexture,n)}P=-1};function mt(e){let t=Z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Y.textureFormatReadable(e.format),t.__typeReadable=Y.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Qt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){X.bindFramebuffer(q.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+s);let u=mt(o);if(u.__formatReadable===!1){Qt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Qt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&q.readPixels(t,n,r,i,Ie.convert(c),Ie.convert(l),a)}finally{let e=N===null?null:Z.get(N).__webglFramebuffer;X.bindFramebuffer(q.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){X.bindFramebuffer(q.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+s);let d=mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,f),q.bufferData(q.PIXEL_PACK_BUFFER,a.byteLength,q.STREAM_READ),q.readPixels(t,n,r,i,Ie.convert(l),Ie.convert(u),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let p=N===null?null:Z.get(N).__webglFramebuffer;X.bindFramebuffer(q.FRAMEBUFFER,p);let m=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await en(q,m,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,f),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,a),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(f),q.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;pe.setTexture2D(e,0),q.copyTexSubImage2D(q.TEXTURE_2D,n,0,0,o,s,i,a),X.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ie.convert(t.format),_=Ie.convert(t.type),v;t.isData3DTexture?(pe.setTexture3D(t,0),v=q.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(pe.setTexture2DArray(t,0),v=q.TEXTURE_2D_ARRAY):(pe.setTexture2D(t,0),v=q.TEXTURE_2D),X.activeTexture(q.TEXTURE0),X.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,t.flipY),X.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),X.pixelStorei(q.UNPACK_ALIGNMENT,t.unpackAlignment);let y=X.getParameter(q.UNPACK_ROW_LENGTH),b=X.getParameter(q.UNPACK_IMAGE_HEIGHT),x=X.getParameter(q.UNPACK_SKIP_PIXELS),S=X.getParameter(q.UNPACK_SKIP_ROWS),C=X.getParameter(q.UNPACK_SKIP_IMAGES);X.pixelStorei(q.UNPACK_ROW_LENGTH,h.width),X.pixelStorei(q.UNPACK_IMAGE_HEIGHT,h.height),X.pixelStorei(q.UNPACK_SKIP_PIXELS,l),X.pixelStorei(q.UNPACK_SKIP_ROWS,u),X.pixelStorei(q.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Z.get(e),r=Z.get(t),h=Z.get(n.__renderTarget),g=Z.get(r.__renderTarget);X.bindFramebuffer(q.READ_FRAMEBUFFER,h.__webglFramebuffer),X.bindFramebuffer(q.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Z.get(e).__webglTexture,i,d+n),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Z.get(t).__webglTexture,a,m+n)),q.blitFramebuffer(l,u,o,s,f,p,o,s,q.DEPTH_BUFFER_BIT,q.NEAREST);X.bindFramebuffer(q.READ_FRAMEBUFFER,null),X.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Z.has(e)){let n=Z.get(e),r=Z.get(t);X.bindFramebuffer(q.READ_FRAMEBUFFER,k),X.bindFramebuffer(q.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,n.__webglTexture,i),T?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,r.__webglTexture,a),i===0?T?q.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):q.copyTexSubImage2D(v,a,f,p,l,u,o,s):q.blitFramebuffer(l,u,o,s,f,p,o,s,q.COLOR_BUFFER_BIT,q.NEAREST);X.bindFramebuffer(q.READ_FRAMEBUFFER,null),X.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?q.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?q.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):q.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):q.texSubImage2D(q.TEXTURE_2D,a,f,p,o,s,g,_,h);X.pixelStorei(q.UNPACK_ROW_LENGTH,y),X.pixelStorei(q.UNPACK_IMAGE_HEIGHT,b),X.pixelStorei(q.UNPACK_SKIP_PIXELS,x),X.pixelStorei(q.UNPACK_SKIP_ROWS,S),X.pixelStorei(q.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&q.generateMipmap(v),X.unbindTexture()},this.initRenderTarget=function(e){Z.get(e).__webglFramebuffer===void 0&&pe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?pe.setTextureCube(e,0):e.isData3DTexture?pe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?pe.setTexture2DArray(e,0):pe.setTexture2D(e,0),X.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,X.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ut}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Bn._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bn._getUnpackColorSpace()}},_u=192,vu=300;function yu(e){let t=null,n=null,r=null,i=null,a=new Map,o=new WeakMap,s=1,c=Promise.resolve(),l=!1;function u(){if(t)return;let e=document.createElement(`canvas`);e.width=e.height=_u,t=new gu({canvas:e,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),t.setPixelRatio(1),t.setSize(_u,_u,!1),t.outputColorSpace=Lt,t.toneMapping=4,t.setClearColor(0,0),n=new zr,n.add(new po(16777215,3159613,1.7));let a=new Oo(16777215,2.2);a.position.set(1.2,2,3),n.add(a);let o=new Oo(10217471,.7);o.position.set(-2,1,-2),n.add(o),r=new To(28,1,.001,100),i=new Ar,i.rotation.set(-Math.PI/2,0,0);let s=new Ar;s.rotation.y=-.35,s.add(i),n.add(s)}let d=e=>{let t=e.geometry?.[0]?.geometries?.[0]?.positions;return t?(o.has(t)||o.set(t,s++),o.get(t)):0};async function f(a,o){u();let s=null;if(o)try{let t=await e(o,256);s=new _a(t.rgba,t.width,t.height,ze),s.colorSpace=Lt,s.wrapS=s.wrapT=he,s.flipY=!1,s.generateMipmaps=!0,s.minFilter=Ce,s.needsUpdate=!0,s.userData.hasAlpha=t.hasAlpha}catch{s=null}let c=new Ua({map:s,color:s?16777215:9147550,roughness:.85,metalness:0,side:2,alphaTest:s?.userData.hasAlpha?.35:0}),l=[];for(let e of a.geometry??[])for(let t of e.geometries){let e=new Ni;e.setAttribute(`position`,new vi(t.positions,3)),t.hasNormals&&e.setAttribute(`normal`,new vi(t.normals,3)),e.setAttribute(`uv`,new vi(t.uvs,2)),e.setIndex(new vi(t.indices,1)),t.hasNormals||e.computeVertexNormals();let n=new ra(e,c);l.push(n),i.add(n)}try{n.updateMatrixWorld(!0);let e=new ei;for(let t of l)e.expandByObject(t);if(e.isEmpty())return null;let i=e.getCenter(new Q),a=e.getSize(new Q),o=(Math.max(a.x,a.y,a.z)*.55||.1)/Math.tan(r.fov*Math.PI/360)*1.05;r.position.set(i.x,i.y+a.y*.04,i.z+o),r.near=o/50,r.far=o*50,r.updateProjectionMatrix(),r.lookAt(i),t.render(n,r);let s=await new Promise(e=>t.domElement.toBlob(e,`image/png`));return s?URL.createObjectURL(s):null}finally{for(let e of l)i.remove(e),e.geometry.dispose();c.dispose(),s?.dispose()}}function p(e,t,n=0){let r=`${e.id}|${d(e)}|${t??`-`}|${n}`;if(a.has(r)){let e=a.get(r);return a.delete(r),a.set(r,e),Promise.resolve(e)}let i=c.then(async()=>{if(l)return null;if(a.has(r))return a.get(r);let n=await f(e,t);if(l)return n&&URL.revokeObjectURL(n),null;if(n)for(a.set(r,n);a.size>vu;){let[e,t]=a.entries().next().value;a.delete(e),URL.revokeObjectURL(t)}return n});return c=i.catch(()=>null),i}function m(){l=!0;for(let e of a.values())URL.revokeObjectURL(e);a.clear(),t?.dispose(),t?.forceContextLoss(),t=null}return{render:p,dispose:m}}var bu=e=>(e.polygons?.high??0)<=Math.max(2,e.geometry?.reduce?.((e,t)=>e+t.geometries.length,0)??1);function xu(e,{includeHead:t=!1}={}){let n=new Map;for(let t of e.garments)!t.prop&&t.slot&&(n.get(t.slot)??n.set(t.slot,[]).get(t.slot)).push(t);let r=[];for(let[e,i]of n){if(e===`head`&&!t)continue;let n=i.reduce((e,t)=>t.index<e.index?t:e);n.index===0&&bu(n)||r.push(e)}return r}var Su=Symbol(`editor`),Cu=30,wu=F.historyBudgetBytes,Tu=32;function Eu(){let e=Ou();return D(Su,e),e}function Du(){return i(Su)}function Ou(){let e=S(),n=null,r=null,i=!1,a=t({status:`idle`,error:null,project:null,selectedSlot:null,selectedGarment:null,selectedLetter:{},worn:{},view:`outfit`,fitOpen:!1,pose:`rest`,convertOpen:!1,spaceOpen:!1,noneOpen:!1,saving:!1,saveError:null,busy:!1,textureVersion:{},previewVersion:{},undo:{cursor:0,length:0,label:null,redoLabel:null,locked:!1}}),o={entries:[],cursor:0};function c(){let e=o.entries[o.cursor-1];a.undo={cursor:o.cursor,length:o.entries.length,label:e?.label??null,redoLabel:o.entries[o.cursor]?.label??null,locked:!!e?.locked}}let l=s(null),u=s(null),d=new Map,f=new Map,p=new Map,m=new Map;function h(e,t){t?m.set(e,t):m.delete(e),a.previewVersion[e]=(a.previewVersion[e]??0)+1}function g(e){return m.get(e)??null}let _=I(()=>l.value?.garments??[]),v=I(()=>l.value?.slots??[]),y=I(()=>l.value?.issues??[]),b=I(()=>a.undo.cursor>0&&!a.undo.locked),x=I(()=>a.undo.cursor<a.undo.length),C=e=>e.slot?e.slot:`other:${e.id}`;function w(){let e={};for(let t of v.value){if(t.prop)continue;let n=t.garments.map(e=>d.get(e));if(t.code===`other`)for(let t of n)e[C(t)]={garment:t.id,letter:t.variants[0]?.letter??null};else n[0]&&(e[t.code]={garment:n[0].id,letter:n[0].variants[0]?.letter??null})}return e}async function T(e){De(!1),i=!1,a.status=`loading`,a.error=null;try{let t=await J(e);if(!t){a.status=`error`,a.error={code:`missingProject`};return}if(a.project=t.project,n=X(),r=yu((e,t)=>ie(e,t)),await n.call(`load`,{name:t.project.name,files:t.files}),i)return;for(let e of t.history.entries.slice(0,t.history.cursor))await k(e,`after`);o={entries:t.history.entries,cursor:t.history.cursor},c();let s=await n.call(`summary`);if(i)return;if(O(s),s.fatal){a.status=`error`,a.error={code:`fatal`,issues:s.issues};return}a.worn=t.project.view?.worn??{};for(let[e,t]of Object.entries(a.worn))d.has(t.garment)||delete a.worn[e];if(Object.keys(a.worn).length||(a.worn=w()),a.selectedSlot=v.value[0]?.code??null,t.project.skeleton===void 0&&K(e,{skeleton:s.skeleton??null}).catch(()=>{}),a.status=`ready`,t.project.addNone){K(e,{addNone:!1}).catch(()=>{});let t=xu(s);t.length&&await fe(`addNoneOptions`,{slots:t})}A(`opened`,s.name,s.garments.length,`garments`)}catch(e){console.error(e),a.status=`error`,a.error={code:e.code===`unavailable`?`storageUnavailable`:`openFailed`,message:e.message}}}function E(e){return l.value,d.get(e)??null}function D(e){return l.value,f.get(e)??null}function O(e){let t=new Map;for(let n of e.garments)n.geometry===null&&(n.geometry=d.get(n.id)?.geometry??[]),t.set(n.id,B(n));d.clear();for(let[e,n]of t)d.set(e,n);f.clear();for(let t of e.textures)f.set(t.key,t);l.value=B(e),e.fatal||pe();for(let[e,t]of Object.entries(a.worn))d.has(t.garment)||delete a.worn[e];a.selectedGarment&&!d.has(a.selectedGarment)&&(a.selectedGarment=null),a.selectedSlot&&!v.value.some(e=>e.code===a.selectedSlot)&&(a.selectedSlot=v.value[0]?.code??null)}async function k(e,t){let r=e[t];e.type===`files`?await n.call(`applyFiles`,{changes:r}):await n.call(`writeRaw`,{key:e.key,format:r.format,data:r.data.slice()})}let j=e=>e.split(/[|#@]/)[0];async function M(e){O(await n.call(`summary`));let t=new Set(e);for(let e of new Set([...Object.keys(a.textureVersion),...f.keys()]))t.has(j(e))&&ae(e);for(let e of[...p.keys()])t.has(j(e))&&p.delete(e)}function N(e){a.selectedSlot=e}function P(e){a.selectedGarment=e;let t=E(e);t&&t.slot?a.selectedSlot=t.slot:t&&(a.selectedSlot=`other`)}function F(e){return a.selectedLetter[e.id]??a.worn[C(e)]?.letter??e.variants[0]?.letter??null}function ee(e,t){a.selectedLetter[e.id]=t;let n=a.worn[C(e)];n&&n.garment===e.id&&(n.letter=t,V())}function L(e){return a.worn[C(e)]?.garment===e.id}function R(e){let t=E(e);t&&(a.worn[C(t)]={garment:t.id,letter:F(t)},V())}function z(e){let t=E(e);t&&L(t)&&(delete a.worn[C(t)],V())}function te(e){let t=E(e);t&&(L(t)?z:R)(e)}let ne=I(()=>{if(a.status!==`ready`)return[];if(a.view===`isolate`){let e=E(a.selectedGarment);return e?[{garment:e,texture:(e.variants.find(t=>t.letter===F(e))??e.variants[0])?.texture??null}]:[]}return Object.values(a.worn).map(e=>{let t=E(e.garment);return t?{garment:t,texture:(t.variants.find(t=>t.letter===e.letter)??t.variants[0])?.texture??null}:null}).filter(Boolean)}),re=null;function V(){clearTimeout(re),re=setTimeout(()=>{a.project&&ce(a.project.id,{view:{worn:JSON.parse(JSON.stringify(a.worn))}}).catch(()=>{})},400)}function ie(e,t=1024){if(t>1024)return n.call(`texture`,{key:e,max:t});let r=`${e}@${t}@${a.textureVersion[e]??0}`,i=p.get(r);if(i)p.delete(r),p.set(r,i);else for(i=n.call(`texture`,{key:e,max:t}),p.set(r,i),i.catch(()=>p.delete(r));p.size>Tu;)p.delete(p.keys().next().value);return i}function ae(e){a.textureVersion[e]=(a.textureVersion[e]??0)+1;for(let t of[...p.keys()])t.startsWith(`${e}@`)&&p.delete(t)}let U=e=>{let t=0;for(let n of[e.before,e.after])if(n){if(e.type===`files`)for(let e of Object.values(n))t+=e?.byteLength??0;else t+=n.data?.byteLength??0}return t};async function oe(){let t=o.entries.reduce((e,t)=>e+U(t),0);if(t<=wu||o.cursor<2)return;let r=0;for(;r<o.cursor-1&&t>wu/2;)t-=U(o.entries[r++]);if(!r)return;let i=await J(a.project.id),s=await n.call(`stateAt`,{name:a.project.name,files:i.files,entries:o.entries.slice(0,r)}),l={...i.files};for(let[e,t]of Object.entries(s))t?l[e]=t:delete l[e];o={entries:o.entries.slice(r),cursor:o.cursor-r},c(),await H(a.project.id,l,o.entries,o.cursor),e.show(`The ${r} oldest step${r>1?`s were`:` was`} saved into the ped to keep it small on this device, so ${r>1?`they`:`it`} can no longer be undone.`,{level:`info`,timeout:7e3})}async function se(){a.saving=!0,a.saveError=null;try{await W(a.project.id,o.entries,o.cursor),await oe()}catch(t){a.saveError=t.code===`full`?`full`:`failed`,e.show(t.code===`full`?`There is no room left on this device, so the edit could not be saved.`:`The last edit could not be saved on this device.`,{level:`error`})}finally{a.saving=!1}}async function le(t,{rgba:r,width:i,height:s},l){a.busy=!0;try{let a=await n.call(`readRaw`,{key:t}),u=await n.call(`encode`,{key:t,rgba:r,width:i,height:s});await n.call(`writeRaw`,{key:t,format:u.format,data:u.data.slice()});let d=D(t),f=o.entries.slice(0,o.cursor);f.push({type:`texture`,key:t,label:l??`Edited ${d?.name??`texture`}`,at:Date.now(),before:a,after:u}),ue(f),o={entries:f,cursor:f.length},c(),ae(t),await se(),e.show(f[f.length-1].label,{level:`ok`,action:{label:`Undo`,run:q}})}catch(t){throw e.show(t.message,{level:`error`}),t}finally{a.busy=!1}}function ue(e){let t=e.filter(e=>!e.locked);for(let e=0;e<t.length-Cu;e++)t[e].locked=!0,t[e].before=null;for(let t=e.length-1;t>=0;t--){let n=e[t];n.type===`texture`&&n.locked&&e.slice(t+1).some(e=>e.type===`texture`&&e.key===n.key&&e.locked)&&e.splice(t,1)}}async function q(){if(b.value&&!a.busy){a.busy=!0;try{let e=o.entries[o.cursor-1];await k(e,`before`),o.cursor--,c(),e.type===`files`?await M(Object.keys(e.before)):ae(e.key),await se()}finally{a.busy=!1}}}async function de(){if(x.value&&!a.busy){a.busy=!0;try{let e=o.entries[o.cursor];await k(e,`after`),o.cursor++,c(),e.type===`files`?await M(Object.keys(e.after)):ae(e.key),await se()}finally{a.busy=!1}}}async function Y(t){a.busy=!0;try{let r=await n.call(`addGarments`,{items:t});if(!r.added.length)return r;let i=r.added.length===1?`Added ${r.added[0].label}`:`Added ${r.added.length} garments`;r.fitted&&(i+=`, fitted ${r.fitted===r.added.length?r.fitted===1?`it`:`them`:r.fitted} to this ped's skeleton`);let a=o.entries.slice(0,o.cursor);a.push({type:`files`,label:i,at:Date.now(),before:r.before,after:r.after}),ue(a),o={entries:a,cursor:a.length},c(),await M(Object.keys(r.after)),await se();let s=r.added[0],l=_.value.find(e=>e.slot===s.slot&&e.prop===s.prop&&e.index===s.index);return l&&(R(l.id),P(l.id)),e.show(i,{level:`ok`,action:{label:`Undo`,run:q}}),r}finally{a.busy=!1}}async function fe(t,r,i=()=>n.call(`edit`,{kind:t,args:r})){if(a.busy)return null;a.busy=!0;let s={};for(let[e,t]of Object.entries(a.worn)){let n=E(t.garment);n&&(s[e]={slot:n.slot,prop:n.prop,index:n.index,letter:t.letter})}try{let t=await i(),n=o.entries.slice(0,o.cursor);n.push({type:`files`,label:t.label,at:Date.now(),before:t.before,after:t.after}),ue(n),o={entries:n,cursor:n.length},c(),await M(Object.keys(t.after));let r=e=>_.value.find(t=>t.slot===e.slot&&t.prop===e.prop&&t.index===e.index);for(let[e,n]of Object.entries(s)){let i=(t.renumbers??(t.renumber?[t.renumber]:[])).find(e=>e.slot===n.slot&&e.prop===n.prop),o=i?i.map:null;if(o)delete a.worn[e];else if(a.worn[e])continue;if(o&&o[n.index]===null)continue;let s=o?r({...n,index:o[n.index]??n.index}):(t.focus&&t.focus.slot===n.slot&&t.focus.prop===n.prop?r(t.focus):null)??r(n);s&&(a.worn[C(s)]={garment:s.id,letter:s.variants.some(e=>e.letter===n.letter)?n.letter:s.variants[0]?.letter??null})}let l=t.focus?r(t.focus):null;return l&&(P(l.id),t.focus.letter&&ee(l,t.focus.letter)),V(),await se(),e.show(t.label,{level:`ok`,action:{label:`Undo`,run:q}}),t}catch(t){return e.show(t.message,{level:`warning`,timeout:7e3}),null}finally{a.busy=!1}}let Z=0;async function pe(){let e=++Z;try{let t=await n.call(`space`);e===Z&&!i&&(u.value=B(t))}catch(e){A(`space failed`,e)}}let me=e=>u.value?.garments[e]??null,he=e=>u.value?(u.value.byKey??=new Map(u.value.textures.map(e=>[e.key,e]))).get(e)??null:null,ge=(e,t)=>fe(`shrinkTextures`,{keys:e,action:t});async function _e(){a.busy=!0;try{let e=await n.call(`convertToStreamed`);if(e.garments[1]<e.garments[0]||e.variants[1]<e.variants[0])throw Error(`the streamed copy came out with ${e.garments[1]} of ${e.garments[0]} garments and ${e.variants[1]} of ${e.variants[0]} variants`);let t=a.project;return{project:await G({name:t.name,layout:`streamed`,files:e.files,extras:{exportName:t.exportName,gender:t.gender,convertedFrom:t.id}}),...e,files:null}}finally{a.busy=!1}}let ve=I(()=>y.value.filter(e=>e.code===`SKELETON_MISMATCH`).map(e=>e.garment)),ye=(e,t)=>n.call(`skeletonOf`,{bytes:e,name:t}),be=(e,t)=>n.call(`matchSkeletons`,{garmentIds:e,candidates:t}),xe=(e,t)=>fe(null,null,()=>n.call(`fitSkeletons`,{matches:e,candidates:t}));function Se(e,t){return n.call(`extractGarments`,{name:e,files:t})}async function Ce(e,t=null){a.busy=!0;try{return await n.call(`exportGarments`,{garmentIds:e,name:t})}finally{a.busy=!1}}function we(e,t){return r?r.render(e,t,t?a.textureVersion[t]??0:0):Promise.resolve(null)}function Te(e,t=128){return n.call(`peekTexture`,{bytes:e,max:t})}async function Ee({name:e,gender:t,format:r}){a.busy=!0;try{let i=await n.call(`export`,{newName:e,gender:t,format:r});return await ce(a.project.id,{exportName:e,gender:t,exportedAt:Date.now()}),a.project={...a.project,exportName:e,gender:t},i}finally{a.busy=!1}}function De(e=!0){i=!0,clearTimeout(re),n&&=(n.terminate(),null),r?.dispose(),r=null,p.clear(),m.clear(),d.clear(),f.clear(),u.value=null,Z++,l.value=null,e&&(a.status=`idle`),a.textureVersion={},a.selectedLetter={},a.selectedGarment=null,o={entries:[],cursor:0},c()}return t({state:a,ped:l,garments:_,slots:v,issues:y,visible:ne,canUndo:b,canRedo:x,open:T,dispose:De,garment:E,texture:D,selectSlot:N,selectGarment:P,letterFor:F,setLetter:ee,isWorn:L,wear:R,takeOff:z,toggleWear:te,getTexture:ie,applyTexture:le,undo:q,redo:de,exportPed:Ee,wearKey:C,setPreview:h,getPreview:g,addClothing:Y,peekTexture:Te,runEdit:fe,exportGarments:Ce,extractGarments:Se,modelThumb:we,mismatched:ve,skeletonOf:ye,matchSkeletons:be,fitSkeletons:xe,convertToStreamed:_e,space:u,spaceOf:me,textureSpace:he,shrink:ge,refreshSpace:pe})}function ku(e){let t=window.matchMedia(e),n=_(t.matches),r=e=>{n.value=e.matches};return O(()=>t.addEventListener(`change`,r)),f(()=>t.removeEventListener(`change`,r)),n}var Au={},ju=(function(e,t,n,r,i){var a=new Worker(Au[t]||(Au[t]=URL.createObjectURL(new Blob([e+`;addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})`],{type:`text/javascript`}))));return a.onmessage=function(e){var t=e.data,n=t.$e$;if(n){var r=Error(n[0]);r.code=n[1],r.stack=n[2],i(r,null)}else i(null,t)},a.postMessage(n,r),a}),Mu=Uint8Array,Nu=Uint16Array,Pu=Int32Array,Fu=new Mu([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Iu=new Mu([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Lu=new Mu([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ru=function(e,t){for(var n=new Nu(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Pu(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},zu=Ru(Fu,2),Bu=zu.b,Vu=zu.r;Bu[28]=258,Vu[258]=28;var Hu=Ru(Iu,0),Uu=Hu.b;Hu.r;for(var Wu=new Nu(32768),Gu=0;Gu<32768;++Gu){var Ku=(Gu&43690)>>1|(Gu&21845)<<1;Ku=(Ku&52428)>>2|(Ku&13107)<<2,Ku=(Ku&61680)>>4|(Ku&3855)<<4,Wu[Gu]=((Ku&65280)>>8|(Ku&255)<<8)>>1}for(var qu=(function(e,t,n){for(var r=e.length,i=0,a=new Nu(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new Nu(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new Nu(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Wu[d]>>c]=l}else for(s=new Nu(r),i=0;i<r;++i)e[i]&&(s[i]=Wu[o[e[i]-1]++]>>15-e[i]);return s}),Ju=new Mu(288),Gu=0;Gu<144;++Gu)Ju[Gu]=8;for(var Gu=144;Gu<256;++Gu)Ju[Gu]=9;for(var Gu=256;Gu<280;++Gu)Ju[Gu]=7;for(var Gu=280;Gu<288;++Gu)Ju[Gu]=8;for(var Yu=new Mu(32),Gu=0;Gu<32;++Gu)Yu[Gu]=5;var Xu=qu(Ju,9,1),Zu=qu(Yu,5,1),Qu=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},$u=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},ed=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},td=function(e){return(e+7)/8|0},nd=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Mu(e.subarray(t,n))},rd=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],id=function(e,t,n){var r=Error(t||rd[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,id),!n)throw r;return r},ad=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new Mu(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new Mu(i*3));var l=function(e){var t=n.length;if(e>t){var r=new Mu(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=$u(e,d,1);var v=$u(e,d+1,3);if(d+=3,!v){var y=td(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&id(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}if(v==1)p=Xu,m=Zu,h=9,g=5;else if(v==2){var S=$u(e,d,31)+257,C=$u(e,d+10,15)+4,w=S+$u(e,d+5,31)+1;d+=14;for(var T=new Mu(w),E=new Mu(19),D=0;D<C;++D)E[Lu[D]]=$u(e,d+D*3,7);d+=C*3;for(var O=Qu(E),k=(1<<O)-1,A=qu(E,O,1),D=0;D<w;){var j=A[$u(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,N=0;for(y==16?(N=3+$u(e,d,3),d+=2,M=T[D-1]):y==17?(N=3+$u(e,d,7),d+=3):y==18&&(N=11+$u(e,d,127),d+=7);N--;)T[D++]=M}}var P=T.subarray(0,S),F=T.subarray(S);h=Qu(P),g=Qu(F),p=qu(P,h,1),m=qu(F,g,1)}else id(1);if(d>_){c&&id(0);break}}s&&l(f+131072);for(var ee=(1<<h)-1,I=(1<<g)-1,L=d;;L=d){var M=p[ed(e,d)&ee],R=M>>4;if(d+=M&15,d>_){c&&id(0);break}if(M||id(2),R<256)n[f++]=R;else if(R==256){L=d,p=null;break}else{var z=R-254;if(R>264){var D=R-257,B=Fu[D];z=$u(e,d,(1<<B)-1)+Bu[D],d+=B}var te=m[ed(e,d)&I],ne=te>>4;te||id(3),d+=te&15;var F=Uu[ne];if(ne>3){var B=Iu[ne];F+=ed(e,d)&(1<<B)-1,d+=B}if(d>_){c&&id(0);break}s&&l(f+131072);var re=f+z;if(f<F){var V=a-F,ie=Math.min(F,re);for(V+f<0&&id(3);f<ie;++f)n[f]=r[V+f]}for(;f<re;++f)n[f]=n[f-F]}}t.l=p,t.p=L,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?nd(n,0,f):n.subarray(0,f)},od=new Mu(0),sd=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},cd=function(e,t,n){for(var r=e(),i=e.toString(),a=i.slice(i.indexOf(`[`)+1,i.lastIndexOf(`]`)).replace(/\s+/g,``).split(`,`),o=0;o<r.length;++o){var s=r[o],c=a[o];if(typeof s==`function`){t+=`;`+c+`=`;var l=s.toString();if(s.prototype){if(l.indexOf(`[native code]`)!=-1){var u=l.indexOf(` `,8)+1;t+=l.slice(u,l.indexOf(`(`,u))}else for(var d in t+=l,s.prototype)t+=`;`+c+`.prototype.`+d+`=`+s.prototype[d].toString()}else t+=l}else n[c]=s}return t},ld=[],ud=function(e){var t=[];for(var n in e)e[n].buffer&&t.push((e[n]=new e[n].constructor(e[n])).buffer);return t},dd=function(e,t,n,r){if(!ld[n]){for(var i=``,a={},o=e.length-1,s=0;s<o;++s)i=cd(e[s],i,a);ld[n]={c:cd(e[o],i,a),e:a}}var c=sd({},ld[n].e);return ju(ld[n].c+`;onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=`+t.toString()+`}`,n,c,ud(c),r)},fd=function(){return[Mu,Nu,Pu,Fu,Iu,Lu,Bu,Uu,Xu,Zu,Wu,rd,qu,Qu,$u,ed,td,nd,id,ad,bd,pd,md]},pd=function(e){return postMessage(e,[e.buffer])},md=function(e){return e&&{out:e.size&&new Mu(e.size),dictionary:e.dictionary}},hd=function(e,t,n,r,i,a){var o=dd(n,r,i,function(e,t){o.terminate(),a(e,t)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}},gd=function(e,t){return e[t]|e[t+1]<<8},_d=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},vd=function(e,t){return _d(e,t)+_d(e,t+4)*4294967296};function yd(e,t,n){return n||(n=t,t={}),typeof n!=`function`&&id(7),hd(e,t,[fd],function(e){return pd(bd(e.data[0],md(e.data[1])))},1,n)}function bd(e,t){return ad(e,{i:2},t&&t.out,t&&t.dictionary)}var xd=typeof TextDecoder<`u`&&new TextDecoder;try{xd.decode(od,{stream:!0})}catch{}var Sd=function(e){for(var t=``,n=0;;){var r=e[n++],i=(r>127)+(r>223)+(r>239);if(n+i>e.length)return{s:t,r:nd(e,n-1)};i?i==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function Cd(e,t){if(t){for(var n=``,r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}if(xd)return xd.decode(e);var i=Sd(e),a=i.s,n=i.r;return n.length&&id(8),a}var wd=function(e,t){return t+30+gd(e,t+26)+gd(e,t+28)},Td=function(e,t,n){var r=gd(e,t+28),i=gd(e,t+30),a=Cd(e.subarray(t+46,t+46+r),!(gd(e,t+8)&2048)),o=t+46+r,s=Ed(e,o,i,n,_d(e,t+20),_d(e,t+24),_d(e,t+42)),c=s[0],l=s[1],u=s[2];return[gd(e,t+10),c,l,a,o+i+gd(e,t+32),u]},Ed=function(e,t,n,r,i,a,o){var s=i==4294967295,c=a==4294967295,l=o==4294967295,u=t+n,d=s+c+l;if(r&&d){for(;t+4<u;t+=4+gd(e,t+2))if(gd(e,t)==1)return[s?vd(e,t+4+8*c):i,c?vd(e,t+4):a,l?vd(e,t+4+8*(c+s)):o,1];r<2&&id(13)}return[i,a,o,0]},Dd=typeof queueMicrotask==`function`?queueMicrotask:typeof setTimeout==`function`?setTimeout:function(e){e()};function Od(e,t,n){n||(n=t,t={}),typeof n!=`function`&&id(7);var r=[],i=function(){for(var e=0;e<r.length;++e)r[e]()},a={},o=function(e,t){Dd(function(){n(e,t)})};Dd(function(){o=n});for(var s=e.length-22;_d(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(id(13,0,1),null),i;var c=gd(e,s+8);if(c){var l=c,u=_d(e,s+16),d=_d(e,s-20)==117853008;if(d){var f=_d(e,s-12);d=_d(e,f)==101075792,d&&(l=c=_d(e,f+32),u=_d(e,f+48))}for(var p=t&&t.filter,m=function(t){var n=Td(e,u,d),s=n[0],l=n[1],f=n[2],m=n[3],h=n[4],g=n[5],_=wd(e,g);u=h;var v=function(e,t){e?(i(),o(e,null)):(t&&(a[m]=t),--c||o(null,a))};if(!p||p({name:m,size:l,originalSize:f,compression:s})){if(!s)v(null,nd(e,_,_+l));else if(s==8){var y=e.subarray(_,_+l);if(f<524288||l>.8*f)try{v(null,bd(y,{out:new Mu(f)}))}catch(e){v(e,null)}else r.push(yd(y,{size:f},v))}else v(id(14,`unknown compression type `+s,1),null)}else v(null,null)},h=0;h<l;++h)m(h)}else o(null,{});return i}var kd=e=>(e.charCodeAt(0)|e.charCodeAt(1)<<8|e.charCodeAt(2)<<16|e.charCodeAt(3)<<24)>>>0,Ad={DXT1:kd(`DXT1`),DXT3:kd(`DXT3`),DXT5:kd(`DXT5`),ATI1:kd(`ATI1`),ATI2:kd(`ATI2`),BC7:kd(`BC7 `),A8R8G8B8:21,A1R5G5B5:25,A8:28,A8B8G8R8:32,L8:50};Ad.DXT1,Ad.DXT3,Ad.DXT5,Ad.ATI1,Ad.ATI2,Ad.BC7,Ad.A8R8G8B8,Ad.A8B8G8R8,Ad.A1R5G5B5,Ad.A8,Ad.L8,Y(`diffusesampler`),Y(`bumpsampler`),Y(`specsampler`);function jd(e){let t=0;for(let n=0;n<e.length;n++)t=t+e.charCodeAt(n)>>>0,t=t+(t<<10)>>>0,t=(t^t>>>6)>>>0;return t=t+(t<<3)>>>0,t=(t^t>>>11)>>>0,t+(t<<15)>>>0}new Map(`CPedVariationInfo.bHasTexVariations.bHasDrawblVariations.bHasLowLODs.bIsSuperLOD.availComp.aComponentData3.aSelectionSets.compInfos.propInfo.dlcName.CPVComponentData.numAvailTex.aDrawblData3.CPVDrawblData.propMask.numAlternatives.aTexData.clothData.CPVDrawblData__CPVClothComponentData.ownsCloth.CPVTextureData.texId.distribution.CPedSelectionSet.name.compDrawableId.compTextureId.propAnchorId.propDrawableId.propTextureId.CComponentInfo.pedXml_audioID.pedXml_audioID2.pedXml_expressionMods.flags.inclusions.exclusions.pedXml_vfxComps.pedXml_flags.pedXml_compIdx.pedXml_drawblIdx.CPedPropInfo.numAvailProps.aPropMetaData.CPedPropMetaData.audioId.expressionMods.texData.renderFlags.propFlags.anchorId.propId.stickyness.CPedPropTexData.inclusionId.exclusionId.aAnchors.CAnchorProps.props.anchor`.split(`.`).map(e=>[jd(e),e]));var Md=[{suffix:`.ydd`,role:`ydd`,required:!0},{suffix:`.ymt`,role:`ymt`,required:!0},{suffix:`.ytd`,role:`ytd`,required:!1},{suffix:`.yft`,role:`yft`,required:!1},{suffix:`_p.ydd`,role:`propYdd`,required:!1},{suffix:`_p.ytd`,role:`propYtd`,required:!1}],Nd=e=>e.split(/[\\/]/).pop(),Pd=e=>e.toLowerCase().split(`.`).pop();function Fd(e){let t=new Map;for(let n of e)t.set(Nd(n.path).toLowerCase(),n);let n=[...t.keys()],r=new Set,i=[],a=n.filter(e=>e.endsWith(`.ydd`)&&!e.endsWith(`_p.ydd`)&&!e.includes(`^`)).map(e=>e.slice(0,-4)).filter(e=>t.has(`${e}.ymt`)||t.has(`${e}.yft`)||t.has(`${e}.ytd`));for(let e of a){let n=Md.map(({suffix:n,role:i,required:a})=>{let o=t.get(`${e}${n}`);return o&&r.add(`${e}${n}`),{role:i,name:`${e}${n}`,required:a,file:o??null,empty:o?o.size===0:!1}});i.push({name:e,layout:`packed`,parts:n,blocking:n.some(e=>e.required&&(!e.file||e.empty))})}let o=new Set(n.filter(e=>e.includes(`^`)&&/\.(ydd|ytd)$/.test(e)).map(e=>e.slice(0,e.indexOf(`^`)).replace(/_p$/,``)));for(let e of[...o].sort()){if(a.includes(e))continue;let o=[];for(let[n,i,a]of[[`.ymt`,`ymt`,!0],[`.yft`,`yft`,!1]]){let s=t.get(`${e}${n}`);s&&r.add(`${e}${n}`),o.push({role:i,name:`${e}${n}`,required:a,file:s??null,empty:s?s.size===0:!1})}for(let i of n){if(!(i.startsWith(`${e}^`)||i.startsWith(`${e}_p^`))||!/\.(ydd|ytd)$/.test(i))continue;r.add(i);let n=i.startsWith(`${e}_p^`);o.push({role:`${n?`prop`:``}${Pd(i)===`ydd`?`Ydd`:`Ytd`}`.replace(/^Y/,`y`),name:i,required:!1,file:t.get(i),empty:t.get(i).size===0})}i.push({name:e,layout:`streamed`,parts:o,blocking:o.some(e=>e.required&&(!e.file||e.empty))})}return i.sort((e,t)=>e.name.localeCompare(t.name)),{peds:i,ignored:n.filter(e=>!r.has(e))}}var Id=/\.(ydd|ytd|ymt|yft)$/i,Ld=/\.(png|jpe?g|webp)$/i;function Rd(e){return[...e].map(e=>({path:e.webkitRelativePath||e._path||e.name,size:e.size,read:async()=>new Uint8Array(await e.arrayBuffer())}))}function zd(e){return e.arrayBuffer().then(e=>new Promise((t,n)=>{Od(new Uint8Array(e),{filter:e=>Id.test(e.name)||Ld.test(e.name)},(e,r)=>{if(e)return n(e);t(Object.entries(r).map(([e,t])=>({path:e,size:t.byteLength,read:async()=>t})))})}))}async function Bd(e){let t=[...e.items].map(e=>e.webkitGetAsEntry?.()).filter(Boolean),n=t.length?(await Promise.all(t.map(e=>Vd(e)))).flat():[...e.files];return n.length===1&&/\.zip$/i.test(n[0].name)?{entries:await zd(n[0]),source:n[0].name}:{entries:Rd(n),source:`the dropped files`}}function Vd(e,t=``){if(e.isFile)return new Promise((n,r)=>e.file(e=>{e._path=t+e.name,n([e])},r));let n=e.createReader(),r=()=>new Promise((e,t)=>n.readEntries(e,t));return(async()=>{let n=[];for(let i=await r();i.length;i=await r())for(let r of i)n.push(...await Vd(r,`${t}${e.name}/`));return n})()}function Hd(e){return Object.entries(e).map(([e,t])=>({path:e,size:t.byteLength,read:async()=>t}))}var Ud={class:`relative min-h-dvh`},Wd={class:`flex h-12 items-center gap-3 border-b border-border px-4`},Gd=[`src`],Kd={class:`mx-auto flex max-w-2xl flex-col items-center px-4 pb-20 pt-14 text-center`},qd={class:`mt-6 flex flex-wrap justify-center gap-2`},Jd=[`disabled`],Yd=[`disabled`],Xd=[`disabled`],Zd={class:`mt-2 text-xs text-fg-subtle`},Qd={key:0,class:`mt-10 w-full space-y-3 text-left`},$d={class:`label`},ef={class:`flex items-center gap-3`},tf={class:`min-w-0 flex-1`},nf={class:`truncate font-mono text-sm font-semibold`},rf=[`disabled`,`onClick`],af={class:`mt-1 flex w-full items-center justify-end gap-1.5 text-[11px] text-fg-muted`,title:`An invisible garment at number 0 of each clothing category, so the ped can wear nothing there`},of={key:0,class:`mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs`},sf={class:`text-fg-muted`},cf={class:`ml-auto truncate font-mono text-fg-subtle`},lf={key:1,class:`mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs`},uf={class:`text-fg-muted`},df={key:0,class:`text-xs text-fg-subtle`},ff={key:1,class:`mt-14 w-full text-left`},pf={class:`mb-2 flex items-center justify-between`},mf={class:`divide-y divide-border rounded-panel border border-border`},hf={class:`flex-1 truncate font-mono`},gf={class:`text-xs text-fg-subtle`},_f={key:0,class:`pointer-events-none fixed inset-3 z-40 grid place-items-center rounded-2xl border-2 border-dashed border-accent bg-accent/5 text-lg font-medium text-accent`},vf={__name:`StartScreen`,setup(t){let r=j(),i=S(),a=_(null),o=_(null),s=_(null),p=_(!1),y=_(!1),b=_(null),x=_(null),C=_([]),w={ydd:`Models`,ymt:`Metadata`,ytd:`Textures`,yft:`Skeleton`,propYdd:`Accessory models`,propYtd:`Accessory textures`};O(async()=>{try{C.value=(await se()).slice(0,5)}catch{}window.addEventListener(`dragover`,k),window.addEventListener(`dragleave`,A),window.addEventListener(`drop`,M)}),f(()=>{window.removeEventListener(`dragover`,k),window.removeEventListener(`dragleave`,A),window.removeEventListener(`drop`,M)});async function E(e,t){let n=e.filter(e=>Id.test(e.path)),{peds:r,ignored:a}=Fd(n);x.value={peds:r,ignored:a.length+(e.length-n.length),source:t,entries:n},r.length||i.show(`No ped was found there. Choose the folder or files that hold the ped's .ydd and .ymt files.`,{level:`warning`,timeout:7e3})}async function D(e,t){let n=e.target.files;if(n?.length){y.value=!0;try{t===`zip`?await E(await zd(n[0]),n[0].name):await E(Rd(n),t===`folder`?n[0].webkitRelativePath.split(`/`)[0]||`the folder`:`the selected files`)}catch{i.show(`What you chose could not be read. Choose the files or a ZIP instead.`,{level:`error`})}finally{y.value=!1,e.target.value=``}}}function k(e){e.dataTransfer?.types?.includes(`Files`)&&(e.preventDefault(),p.value=!0)}function A(e){e.relatedTarget===null&&(p.value=!1)}async function M(e){if(e.dataTransfer?.types?.includes(`Files`)){e.preventDefault(),p.value=!1,y.value=!0;try{let{entries:t,source:n}=await Bd(e.dataTransfer);await E(t,n)}catch{i.show(`What you dropped could not be read. Choose the files or a ZIP instead.`,{level:`error`})}finally{y.value=!1}}}let F=_(!0);try{F.value=localStorage.getItem(`pw.addNone`)!==`off`}catch{}async function I(e){b.value=e.name;try{let t={};for(let n of e.parts)n.file&&(t[n.name.toLowerCase()]=await n.file.read());try{localStorage.setItem(`pw.addNone`,F.value?`on`:`off`)}catch{}let n=await G({name:e.name.toLowerCase(),layout:e.layout,files:t,extras:{addNone:F.value}});r.replace({name:`editor`,query:{project:n.id}})}catch(e){i.show(e.code===`full`?`There is no room left on this device to keep the ped.`:e.code===`unavailable`?`This browser is not letting the editor keep files. Private windows often block it.`:`The ped could not be opened: ${e.message}`,{level:`error`,timeout:8e3})}finally{b.value=null}}let B=e=>e.parts.filter(e=>e.file||e.required),te=e=>{let t=(Date.now()-e)/1e3;return t<3600?`${Math.max(1,Math.round(t/60))} min ago`:t<86400?`${Math.round(t/3600)} h ago`:new Date(e).toLocaleDateString()};return(t,r)=>(e(),m(`div`,Ud,[z(`header`,Wd,[h(g(N),{to:`/`,class:`flex items-center gap-2`},{default:c(()=>[z(`img`,{src:`${t.$baseUrl}mark.svg`,alt:``,class:`size-6`},null,8,Gd)]),_:1}),h(g(N),{to:`/projects`,class:`btn-ghost text-xs`},{default:c(()=>[...r[7]||=[L(`Your projects`,-1)]]),_:1})]),z(`main`,Kd,[r[14]||=n(`<svg viewBox="0 0 64 120" class="h-28 text-fg-subtle" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="32" cy="12" r="8"></circle><path d="M20 26h24a4 4 0 0 1 4 4v34h-6v48h-8V76h-4v36h-8V64h-6V30a4 4 0 0 1 4-4z"></path><ellipse cx="32" cy="115" rx="22" ry="3" opacity=".4"></ellipse></svg><h1 class="mt-6 text-2xl font-semibold">Open a ped</h1><p class="mt-2 text-sm text-fg-muted">.ydd, .ytd, .ymt and .yft. Packed or streamed. They never leave this computer.</p>`,3),z(`div`,qd,[z(`button`,{class:`btn`,disabled:y.value,onClick:r[0]||=e=>a.value.click()},[h(P,{name:`folder`}),r[8]||=L(`Choose folder`,-1)],8,Jd),z(`button`,{class:`btn`,disabled:y.value,onClick:r[1]||=e=>o.value.click()},[h(P,{name:`files`}),r[9]||=L(`Choose files`,-1)],8,Yd),z(`button`,{class:`btn`,disabled:y.value,onClick:r[2]||=e=>s.value.click()},[h(P,{name:`zip`}),r[10]||=L(`Open ZIP`,-1)],8,Xd)]),z(`p`,Zd,l(y.value?`Reading the files…`:`Or drop them anywhere here.`),1),z(`input`,{ref_key:`folderInput`,ref:a,type:`file`,webkitdirectory:``,multiple:``,class:`hidden`,"aria-label":`Ped folder`,onChange:r[3]||=e=>D(e,`folder`)},null,544),z(`input`,{ref_key:`filesInput`,ref:o,type:`file`,multiple:``,accept:`.ydd,.ytd,.ymt,.yft`,class:`hidden`,"aria-label":`Ped files`,onChange:r[4]||=e=>D(e,`files`)},null,544),z(`input`,{ref_key:`zipInput`,ref:s,type:`file`,accept:`.zip,application/zip`,class:`hidden`,"aria-label":`Ped ZIP archive`,onChange:r[5]||=e=>D(e,`zip`)},null,544),x.value?.peds.length?(e(),m(`section`,Qd,[z(`p`,$d,l(x.value.peds.length)+` ped`+l(x.value.peds.length>1?`s`:``)+` in `+l(x.value.source),1),(e(!0),m(T,null,d(x.value.peds,t=>(e(),m(`article`,{key:t.name,class:`panel p-4`},[z(`div`,ef,[z(`div`,tf,[z(`h2`,nf,l(t.name),1),z(`p`,{class:v([`text-xs`,t.blocking?`text-danger`:`text-ok`])},l(t.blocking?`Cannot be opened yet: add the missing files.`:t.layout===`streamed`?`Ready to open · streamed, ${t.parts.length-2} garment files`:`Ready to open`),3)]),z(`button`,{class:`btn-primary`,disabled:t.blocking||!!b.value,onClick:e=>I(t)},l(b.value===t.name?`Opening…`:`Open ped`),9,rf),z(`label`,af,[u(z(`input`,{"onUpdate:modelValue":r[6]||=e=>F.value=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,F.value]]),r[11]||=L(`Start every category with "None"`,-1)])]),t.layout===`packed`?(e(),m(`ul`,of,[(e(!0),m(T,null,d(B(t),t=>(e(),m(`li`,{key:t.role,class:`flex items-center gap-2`},[h(P,{name:t.file&&!t.empty?`check`:`x`,size:12,class:v(t.file&&!t.empty?`text-ok`:t.required?`text-danger`:`text-fg-subtle`)},null,8,[`name`,`class`]),z(`span`,sf,l(w[t.role]),1),z(`span`,cf,l(t.file?g(oe)(t.file.size):t.required?`missing`:`—`),1)]))),128))])):(e(),m(`ul`,lf,[(e(!0),m(T,null,d(t.parts.slice(0,2),t=>(e(),m(`li`,{key:t.role,class:`flex items-center gap-1.5`},[h(P,{name:t.file?`check`:`x`,size:12,class:v(t.file?`text-ok`:t.required?`text-danger`:`text-fg-subtle`)},null,8,[`name`,`class`]),z(`span`,uf,l(w[t.role]),1)]))),128))]))]))),128)),x.value.ignored?(e(),m(`p`,df,l(x.value.ignored)+` file`+l(x.value.ignored>1?`s`:``)+` in `+l(x.value.source)+` `+l(x.value.ignored>1?`are`:`is`)+` not part of a ped and will be left alone.`,1)):R(``,!0)])):R(``,!0),C.value.length&&!x.value?.peds.length?(e(),m(`section`,ff,[z(`div`,pf,[r[13]||=z(`p`,{class:`label`},`Recent projects`,-1),h(g(N),{to:`/projects`,class:`text-xs text-accent hover:underline`},{default:c(()=>[...r[12]||=[L(`All projects`,-1)]]),_:1})]),z(`ul`,mf,[(e(!0),m(T,null,d(C.value,t=>(e(),m(`li`,{key:t.id},[h(g(N),{to:{name:`editor`,query:{project:t.id}},class:`flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-raised`},{default:c(()=>[z(`span`,hf,l(t.name),1),z(`span`,gf,l(t.edits?`${t.edits} edits · `:``)+l(te(t.updatedAt)),1),h(P,{name:`chevronRight`,size:14,class:`text-fg-subtle`})]),_:2},1032,[`to`])]))),128))])])):R(``,!0)]),p.value?(e(),m(`div`,_f,`Drop to open`)):R(``,!0)]))}},yf={class:`flex h-full flex-col gap-4 overflow-y-auto p-2`,"aria-label":`Slots`},bf={class:`label px-2 pb-1.5`},xf={class:`flex flex-col gap-0.5`},Sf=[`data-slot`,`aria-current`,`onClick`],Cf={class:`flex-1 truncate`},wf=[`title`],Tf=[`title`],Ef={class:`font-mono text-xs text-fg-subtle`},Df={key:0,class:`p-2 text-sm text-fg-muted`},Of={__name:`SlotRail`,props:{dropSlot:{type:String,default:null}},setup(t){let n=t,r=Du(),i=I(()=>{let e={};for(let t of r.issues){let n=t.garment?r.garment(t.garment):null,i=t.slot??(n?n.slot??`other`:null);i&&(t.level===`error`||t.level===`warning`&&e[i]!==`error`)&&(e[i]=t.level)}return e}),a=I(()=>{let e={};if(!r.space)return e;for(let t of r.garments)e[t.slot]=(e[t.slot]??0)+(r.spaceOf(t.id)?.bytes??0);return e}),o=e=>e>=1048576?`${(e/1048576).toFixed(e>=10485760?0:1)}M`:e>=1024?`${Math.round(e/1024)}K`:``,s=I(()=>n.dropSlot!==null),c=(e,t)=>e.map(e=>r.slots.find(t=>t.code===e.code)??{...e,prop:t,garments:[],empty:!0}),u=I(()=>[{title:`Clothing`,slots:s.value?c(ie,!1):r.slots.filter(e=>!e.prop)},{title:`Accessories`,slots:s.value?c(re,!0):r.slots.filter(e=>e.prop)}].filter(e=>e.slots.length));return(t,s)=>(e(),m(`nav`,yf,[(e(!0),m(T,null,d(u.value,t=>(e(),m(`div`,{key:t.title},[z(`p`,bf,l(t.title),1),z(`ul`,xf,[(e(!0),m(T,null,d(t.slots,t=>(e(),m(`li`,{key:t.code},[z(`button`,{class:v([`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm transition-colors`,[g(r).state.selectedSlot===t.code?`bg-accent/10 text-accent`:`text-fg-muted hover:bg-hover hover:text-fg`,n.dropSlot===t.code?`ring-2 ring-accent`:``,t.empty?`opacity-60`:``]]),"data-slot":t.code,"aria-current":g(r).state.selectedSlot===t.code,onClick:e=>g(r).selectSlot(t.code)},[z(`span`,Cf,l(t.title),1),i.value[t.code]?(e(),m(`span`,{key:0,class:v([`size-1.5 rounded-full`,i.value[t.code]===`error`?`bg-danger`:`bg-warn`]),title:i.value[t.code]===`error`?`Has errors`:`Check this`},null,10,wf)):R(``,!0),a.value[t.code]?(e(),m(`span`,{key:1,class:`font-mono text-[10px] text-fg-subtle`,title:`Textures: ${o(a.value[t.code])}B`},l(o(a.value[t.code])),9,Tf)):R(``,!0),z(`span`,Ef,l(t.garments.length),1)],10,Sf)]))),128))])]))),128)),u.value.length?R(``,!0):(e(),m(`p`,Df,`This ped has no clothing slots.`))]))}},kf={key:0,class:`absolute inset-0 grid place-items-center text-[10px] text-fg-subtle`},Af={__name:`TextureThumb`,props:{textureKey:String,size:{type:Number,default:96},checker:{type:Boolean,default:!0}},setup(t){let n=t,r=Du(),i=_(null),o=_(!1),s=!1,c=null;async function u(){if(s&&n.textureKey&&i.value){o.value=!1;try{let e=n.textureKey,t=await r.getTexture(e,n.size*2);if(e!==n.textureKey||!i.value)return;i.value.width=t.width,i.value.height=t.height,i.value.getContext(`2d`).putImageData(new ImageData(new Uint8ClampedArray(t.rgba),t.width,t.height),0,0)}catch{o.value=!0}}}return O(()=>{c=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(s=!0,c.disconnect(),u())},{rootMargin:`120px`}),c.observe(i.value)}),f(()=>c?.disconnect()),a(()=>[n.textureKey,r.state.textureVersion[n.textureKey]],u),(n,r)=>(e(),m(`div`,{class:v([`relative overflow-hidden rounded-md`,t.checker?`bg-[repeating-conic-gradient(#1c2127_0%_25%,#14181d_0%_50%)] bg-[length:12px_12px]`:`bg-canvas`])},[z(`canvas`,{ref_key:`canvas`,ref:i,class:`block h-full w-full object-contain`},null,512),o.value||!t.textureKey?(e(),m(`span`,kf,l(t.textureKey?`Unreadable`:`No texture`),1)):R(``,!0)],2))}},jf=[`src`],Mf={key:1,class:`absolute inset-0 grid place-items-center`},Nf={key:2,class:`absolute inset-0 grid place-items-center text-[10px] text-fg-subtle`},Pf={__name:`GarmentThumb`,props:{garment:Object,textureKey:String},setup(t){let n=t,r=Du(),i=_(null),o=_(null),s=_(`waiting`),c=!1,l=null,u=0;async function d(){if(!c||!n.garment)return;let e=++u,t=await r.modelThumb(n.garment,n.textureKey);e===u&&(o.value=t,s.value=t?`ok`:`empty`)}return O(()=>{l=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(c=!0,l.disconnect(),d())},{rootMargin:`150px`}),l.observe(i.value)}),f(()=>{u++,l?.disconnect()}),a(()=>[n.garment,n.textureKey,r.state.textureVersion[n.textureKey]],d),(t,n)=>(e(),m(`div`,{ref_key:`host`,ref:i,class:`relative overflow-hidden rounded-md bg-[radial-gradient(circle_at_50%_40%,#1c2229,#0f1216_75%)]`},[o.value?(e(),m(`img`,{key:0,src:o.value,alt:``,class:`block size-full object-contain`,draggable:`false`},null,8,jf)):s.value===`waiting`?(e(),m(`span`,Mf,[...n[0]||=[z(`span`,{class:`size-4 animate-spin rounded-full border-2 border-border-strong border-t-accent`},null,-1)]])):(e(),m(`span`,Nf,`No model`))],512))}},Ff=[`aria-label`],If={class:`flex items-center gap-2 border-b border-border px-3 py-2.5`},Lf={class:`flex-1 truncate text-sm font-semibold`},Rf={class:`relative`},zf=[`aria-expanded`,`disabled`],Bf={key:1,class:`absolute right-0 top-full z-20 mt-1 w-64 overflow-hidden rounded-lg border border-border-strong bg-raised text-sm shadow-xl shadow-black/50`},Vf={key:0,class:`flex rounded-md border border-border p-0.5`,role:`group`,"aria-label":`Card pictures`},Hf={class:`flex rounded-md border border-border p-0.5`,role:`group`,"aria-label":`View`},Uf={key:0,class:`flex items-center gap-2 border-b border-border px-3 py-2 text-xs text-fg-muted`},Wf=[`disabled`],Gf={key:1,class:`flex items-center gap-2 border-b border-border bg-warn/5 px-3 py-2 text-xs text-warn`},Kf=[`disabled`],qf={class:`min-h-0 flex-1 overflow-y-auto p-2`},Jf={key:0,class:`p-2 text-sm text-fg-muted`},Yf={key:1,class:`grid grid-cols-2 gap-2`},Xf=[`title`,`onClick`,`onDblclick`],Zf={key:0,class:`grid aspect-square w-full place-items-center rounded-md border border-dashed border-border-strong text-center`},Qf={class:`mt-1.5 flex items-center gap-1.5 px-0.5`},$f={class:`flex-1 truncate text-xs font-medium`},ep={key:0,class:`text-fg-subtle`},tp={class:`flex items-center gap-1 px-0.5 text-[11px] text-fg-subtle`},np={class:`flex-1 truncate`},rp=[`title`],ip={key:4,class:`absolute right-2.5 top-2.5 rounded bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-accent-ink`},ap={key:2,class:`w-full text-left text-xs`},op=[`onClick`,`onDblclick`],sp={class:`px-2 py-1.5`},cp={class:`inline-flex items-center gap-1.5`},lp={class:`max-w-24 truncate px-2 py-1.5 font-mono text-fg-subtle`},up={class:`px-2 py-1.5 text-right font-mono`},dp={__name:`GarmentPanel`,emits:[`add`],setup(t,{emit:n}){let r=n,i=Du(),a=S(),o=_(!1);async function s(e){o.value=!1;let t=e===`all`,n=t?i.garments.filter(e=>e.slot):w.value.filter(e=>e.slot);if(!n.length)return;let r=i.state.project.name,s=t?`${r}_garments`:`${r}_${C.value.code}`;try{a.show(`Saving ${n.length} garment${n.length>1?`s`:``}…`,{timeout:2500});let e=await i.exportGarments(n.map(e=>e.id),s);le(new Blob([e.zip],{type:`application/zip`}),`${e.name}.zip`),a.show(`${e.name}.zip has ${e.garments} garment${e.garments===1?``:`s`}${e.skipped.length?`; ${e.skipped.length} could not be saved`:``}.`,{level:e.skipped.length?`warning`:`ok`})}catch(e){a.show(e.message,{level:`warning`,timeout:7e3})}}let c=`cards`;try{c=localStorage.getItem(`pw.panelView`)||`cards`}catch{}let u=_(c),f=`model`;try{f=localStorage.getItem(`pw.thumbMode`)||`model`}catch{}let p=_(f);function y(e){p.value=e;try{localStorage.setItem(`pw.thumbMode`,e)}catch{}}function b(e){u.value=e;try{localStorage.setItem(`pw.panelView`,e)}catch{}}let C=I(()=>i.slots.find(e=>e.code===i.state.selectedSlot)),w=I(()=>(C.value?.garments??[]).map(e=>i.garment(e)).filter(Boolean)),E=I(()=>{let e={};for(let t of i.issues)t.garment&&t.level!==`info`&&(e[t.garment]=e[t.garment]===`error`?`error`:t.level);return e}),D=e=>e>=1048576?`${(e/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round(e/1024))} KB`,O=e=>e>=5242880?`text-danger`:e>=2097152?`text-warn`:``;function k(e){let t=i.spaceOf(e.id);return t?t.verdict===`duplicate`?{text:`Duplicate of ${t.sameAs.split(` > `).pop()}`,cls:`bg-danger/15 text-danger`,title:`Same model and colours as ${t.sameAs}: players lose nothing if this one goes.`}:t.advice.huge?{text:`${i.space.textures.filter(t=>t.garment===e.id&&t.advice.some(e=>e.code===`huge`)).sort((e,t)=>t.width-e.width)[0].width} px texture · halve −${D(t.advice.huge.saves)}`,cls:`bg-warn/15 text-warn`,title:`Bigger than a ped needs; at half size it still looks sharp in game.`}:t.advice.uncompressed?{text:`Uncompressed · −${D(t.advice.uncompressed.saves)}`,cls:`bg-warn/15 text-warn`,title:`Stored without compression; compressed it looks the same.`}:null:null}let A=I(()=>{let e=C.value;if(!e||e.prop||!w.value.length)return!1;let t=w.value.reduce((e,t)=>t.index<e.index?t:e);return!(t.index===0&&t.empty)}),j=[`NUMBERING_GAP`,`YMT_EXTRA`,`NOT_IN_YMT`],M=I(()=>{let e=C.value;return!e||e.code===`other`?!1:i.issues.some(t=>j.includes(t.code)&&(t.slot===e.code||i.garment(t.garment)?.slot===e.code))}),N=()=>i.runEdit(`fixNumbering`,{slot:C.value.code,prop:C.value.code.startsWith(`p_`)}),F=e=>(e.variants.find(t=>t.letter===i.letterFor(e))??e.variants[0])?.texture??null;return(t,n)=>(e(),m(`section`,{class:`flex h-full flex-col`,"aria-label":C.value?.title??`Garments`},[z(`header`,If,[z(`h2`,Lf,l(C.value?.title??`Garments`),1),z(`button`,{class:`btn-ghost p-1`,title:`Add clothing`,"aria-label":`Add clothing`,onClick:n[0]||=e=>r(`add`)},[h(P,{name:`plus`,size:14})]),z(`div`,Rf,[z(`button`,{class:`btn-ghost p-1`,title:`Save garment files`,"aria-label":`Save garment files`,"aria-expanded":o.value,disabled:g(i).state.busy||!w.value.length,onClick:n[1]||=e=>o.value=!o.value},[h(P,{name:`download`,size:14})],8,zf),o.value?(e(),m(`div`,{key:0,class:`fixed inset-0 z-10`,"aria-hidden":`true`,onClick:n[2]||=e=>o.value=!1})):R(``,!0),o.value?(e(),m(`div`,Bf,[z(`button`,{class:`block w-full px-3 py-2 text-left hover:bg-hover`,onClick:n[3]||=e=>s(`slot`)},[L(` Save all `+l(w.value.length)+` in `+l(C.value?.title)+` `,1),n[10]||=z(`span`,{class:`block text-xs text-fg-subtle`},`Garment files as a ZIP, for Add clothing`,-1)]),z(`button`,{class:`block w-full px-3 py-2 text-left hover:bg-hover`,onClick:n[4]||=e=>s(`all`)},[L(` Save every garment (`+l(g(i).garments.filter(e=>e.slot).length)+`) `,1),n[11]||=z(`span`,{class:`block text-xs text-fg-subtle`},`All categories in one ZIP`,-1)])])):R(``,!0)]),u.value===`cards`?(e(),m(`div`,Vf,[z(`button`,{class:v([`rounded p-1`,p.value===`model`?`bg-hover text-fg`:`text-fg-subtle`]),title:`Show the garments in 3D`,"aria-label":`Show the garments in 3D`,onClick:n[5]||=e=>y(`model`)},[h(P,{name:`shirt`,size:14})],2),z(`button`,{class:v([`rounded p-1`,p.value===`texture`?`bg-hover text-fg`:`text-fg-subtle`]),title:`Show the textures`,"aria-label":`Show the textures`,onClick:n[6]||=e=>y(`texture`)},[h(P,{name:`image`,size:14})],2)])):R(``,!0),z(`div`,Hf,[z(`button`,{class:v([`rounded p-1`,u.value===`cards`?`bg-hover text-fg`:`text-fg-subtle`]),"aria-label":`Cards`,onClick:n[7]||=e=>b(`cards`)},[h(P,{name:`grid`,size:14})],2),z(`button`,{class:v([`rounded p-1`,u.value===`list`?`bg-hover text-fg`:`text-fg-subtle`]),"aria-label":`List`,onClick:n[8]||=e=>b(`list`)},[h(P,{name:`list`,size:14})],2)])]),A.value?(e(),m(`div`,Uf,[n[12]||=z(`span`,{class:`flex-1`},`No "None" here: the ped always wears something in this category.`,-1),z(`button`,{class:`btn px-2 py-1 text-xs`,disabled:g(i).state.busy,title:`An invisible garment at number 0`,onClick:n[9]||=e=>g(i).state.noneOpen=C.value.code},`Add "None"`,8,Wf)])):R(``,!0),M.value?(e(),m(`div`,Gf,[h(P,{name:`alert`,size:14}),n[13]||=z(`span`,{class:`flex-1`},`The numbers here have gaps or don't match the .ymt.`,-1),z(`button`,{class:`btn px-2 py-1 text-xs`,disabled:g(i).state.busy,onClick:N},`Fix numbering`,8,Kf)])):R(``,!0),z(`div`,qf,[w.value.length?u.value===`cards`?(e(),m(`ul`,Yf,[(e(!0),m(T,null,d(w.value,t=>(e(),m(`li`,{key:t.id},[z(`button`,{class:v([`group relative w-full rounded-lg border p-1.5 text-left transition-colors`,g(i).state.selectedGarment===t.id?`border-accent bg-accent/5`:`border-border hover:border-border-strong hover:bg-raised`]),title:`${t.label}. Double-click to ${g(i).isWorn(t)?`take it off`:`put it on`}.`,onClick:e=>g(i).selectGarment(t.id),onDblclick:e=>g(i).toggleWear(t.id)},[t.empty?(e(),m(`div`,Zf,[...n[14]||=[z(`span`,null,[z(`span`,{class:`block text-2xl text-fg-subtle`},`∅`),z(`span`,{class:`text-[11px] text-fg-muted`},`Shows nothing`)],-1)]])):p.value===`model`?(e(),x(Pf,{key:1,garment:t,"texture-key":F(t),class:`aspect-square w-full`},null,8,[`garment`,`texture-key`])):(e(),x(Af,{key:2,"texture-key":F(t),class:`aspect-square w-full`},null,8,[`texture-key`])),z(`div`,Qf,[z(`span`,$f,[L(l(t.label),1),t.empty?(e(),m(`span`,ep,` · None`)):R(``,!0)]),E.value[t.id]?(e(),m(`span`,{key:0,class:v([`size-1.5 rounded-full`,E.value[t.id]===`error`?`bg-danger`:`bg-warn`])},null,2)):R(``,!0)]),z(`p`,tp,[z(`span`,np,l(t.variants.length?`${t.variants.length} variant${t.variants.length>1?`s`:``}`:`No textures`),1),g(i).spaceOf(t.id)?(e(),m(`span`,{key:0,class:v([`font-mono`,O(g(i).spaceOf(t.id).bytes)])},l(D(g(i).spaceOf(t.id).bytes)),3)):R(``,!0)]),k(t)?(e(),m(`p`,{key:3,class:v([`mt-1 truncate rounded px-1.5 py-0.5 text-[10px]`,k(t).cls]),title:k(t).title},l(k(t).text),11,rp)):R(``,!0),g(i).isWorn(t)?(e(),m(`span`,ip,`Worn`)):R(``,!0)],42,Xf)]))),128))])):(e(),m(`table`,ap,[n[15]||=z(`thead`,{class:`text-fg-subtle`},[z(`tr`,null,[z(`th`,{class:`px-2 py-1.5 font-medium`},`Garment`),z(`th`,{class:`px-2 py-1.5 font-medium`},`File`),z(`th`,{class:`px-2 py-1.5 text-right font-medium`},`Var.`),z(`th`,{class:`px-2 py-1.5 text-right font-medium`},`Size`)])],-1),z(`tbody`,null,[(e(!0),m(T,null,d(w.value,t=>(e(),m(`tr`,{key:t.id,class:v([`cursor-pointer border-t border-border`,g(i).state.selectedGarment===t.id?`bg-accent/5 text-accent`:`hover:bg-raised`]),onClick:e=>g(i).selectGarment(t.id),onDblclick:e=>g(i).toggleWear(t.id)},[z(`td`,sp,[z(`span`,cp,[z(`span`,{class:v([`size-1.5 rounded-full`,g(i).isWorn(t)?`bg-accent`:`bg-transparent`])},null,2),L(l(t.label),1)])]),z(`td`,lp,l(t.name??`—`),1),z(`td`,up,l(t.variants.length),1),z(`td`,{class:v([`px-2 py-1.5 text-right font-mono`,g(i).spaceOf(t.id)?O(g(i).spaceOf(t.id).bytes):``])},l(g(i).spaceOf(t.id)?D(g(i).spaceOf(t.id).bytes):``),3)],42,op))),128))])])):(e(),m(`p`,Jf,`No garments in this category.`))])],8,Ff))}},fp={type:`change`},pp={type:`start`},mp={type:`end`},hp=new Wi,gp=new Li,_p=Math.cos(70*An.DEG2RAD),vp=new Q,yp=2*Math.PI,bp={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xp=1e-6,Sp=class extends Xo{constructor(e,t=null){super(e,t),this.state=bp.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:fe.ROTATE,MIDDLE:fe.DOLLY,RIGHT:fe.PAN},this.touches={ONE:Z.ROTATE,TWO:Z.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new Mn,this._lastTargetPosition=new Q,this._quat=new Mn().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yo,this._sphericalDelta=new Yo,this._scale=1,this._panOffset=new Q,this._rotateStart=new jn,this._rotateEnd=new jn,this._rotateDelta=new jn,this._panStart=new jn,this._panEnd=new jn,this._panDelta=new jn,this._dollyStart=new jn,this._dollyEnd=new jn,this._dollyDelta=new jn,this._dollyDirection=new Q,this._mouse=new jn,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wp.bind(this),this._onPointerDown=Cp.bind(this),this._onPointerUp=Tp.bind(this),this._onContextMenu=Mp.bind(this),this._onMouseWheel=Op.bind(this),this._onKeyDown=kp.bind(this),this._onTouchStart=Ap.bind(this),this._onTouchMove=jp.bind(this),this._onMouseDown=Ep.bind(this),this._onMouseMove=Dp.bind(this),this._interceptControlDown=Np.bind(this),this._interceptControlUp=Pp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=bp.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fp),this.update(),this.state=bp.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;vp.copy(t).sub(this.target),vp.applyQuaternion(this._quat),this._spherical.setFromVector3(vp),this.autoRotate&&this.state===bp.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=yp:n>Math.PI&&(n-=yp),r<-Math.PI?r+=yp:r>Math.PI&&(r-=yp),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(vp.setFromSpherical(this._spherical),vp.applyQuaternion(this._quatInverse),t.copy(this.target).add(vp),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=vp.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new Q(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new Q(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=vp.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(hp.origin.copy(this.object.position),hp.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hp.direction))<_p?this.object.lookAt(this.target):(gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),hp.intersectPlane(gp,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>xp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xp||this._lastTargetPosition.distanceToSquared(this.target)>xp?(this.dispatchEvent(fp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?yp/60/60*this.autoRotateSpeed:yp/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){vp.setFromMatrixColumn(t,0),vp.multiplyScalar(-e),this._panOffset.add(vp)}_panUp(e,t){this.screenSpacePanning===!0?vp.setFromMatrixColumn(t,1):(vp.setFromMatrixColumn(t,0),vp.crossVectors(this.object.up,vp)),vp.multiplyScalar(e),this._panOffset.add(vp)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;vp.copy(r).sub(this.target);let i=vp.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yp*this._rotateDelta.x/t.clientHeight),this._rotateUp(yp*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(yp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-yp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(yp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-yp*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(yp*this._rotateDelta.x/t.clientHeight),this._rotateUp(yp*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new jn,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Cp(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function wp(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Tp(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(mp),this.state=bp.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function Ep(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=bp.DOLLY;break;case fe.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=bp.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=bp.ROTATE}break;case fe.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=bp.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=bp.PAN}break;default:this.state=bp.NONE}this.state!==bp.NONE&&this.dispatchEvent(pp)}function Dp(e){switch(this.state){case bp.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case bp.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case bp.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Op(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===bp.NONE&&(e.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(mp))}function kp(e){this.enabled!==!1&&this._handleKeyDown(e)}function Ap(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Z.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=bp.TOUCH_ROTATE;break;case Z.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=bp.TOUCH_PAN;break;default:this.state=bp.NONE}break;case 2:switch(this.touches.TWO){case Z.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=bp.TOUCH_DOLLY_PAN;break;case Z.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=bp.TOUCH_DOLLY_ROTATE;break;default:this.state=bp.NONE}break;default:this.state=bp.NONE}this.state!==bp.NONE&&this.dispatchEvent(pp)}function jp(e){switch(this._trackPointer(e),this.state){case bp.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case bp.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case bp.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case bp.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=bp.NONE}}function Mp(e){this.enabled!==!1&&e.preventDefault()}function Np(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Pp(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Fp=Math.PI/180,Ip={RB_L_ThighRoll:[`SKEL_L_Thigh`,1],RB_R_ThighRoll:[`SKEL_R_Thigh`,1],MH_L_Knee:[`SKEL_L_Calf`,.5],MH_R_Knee:[`SKEL_R_Calf`,.5],MH_L_Elbow:[`SKEL_L_Forearm`,.5],MH_R_Elbow:[`SKEL_R_Forearm`,.5]},Lp=(e,t)=>{let n=Array.from(e.subarray(t*16,t*16+16));return n[3]=n[7]=n[11]=0,n[15]=1,new nr().fromArray(n)};function Rp(e){let{count:t,parents:n,names:r}=e,i=[],a=[],o=[];for(let n=0;n<t;n++)i.push(Lp(e.inverseBind,n)),a.push(i[n].clone().invert()),o.push(new Q().setFromMatrixPosition(a[n]));let s=new Map(r.map((e,t)=>[e,t])),c=[],l=new Uint8Array(t),u=e=>{l[e]||(l[e]=1,n[e]>=0&&n[e]<t&&u(n[e]),c.push(e))};for(let e=0;e<t;e++)u(e);let d=s.get(`SKEL_L_Foot`),f=s.get(`SKEL_L_Toe0`);return{count:t,parents:n,names:r,index:s,inverseBind:i,bindWorld:a,pos:o,order:c,forward:d!==void 0&&f!==void 0&&o[f].y<o[d].y?-1:1}}var zp=e=>[`x`,e],Bp=(e,t,n=0)=>Math.sin(e/t*2*Math.PI+n),Vp=[{id:`rest`,label:`Rest`,moves:0,at:()=>({rotations:{}})},{id:`walk`,label:`Walk`,moves:1/0,at:e=>{let t=Bp(e,1.1);return{rotations:{SKEL_L_Thigh:zp(28*t),SKEL_R_Thigh:zp(-28*t),SKEL_L_Calf:zp(-(6+38*Math.max(0,-t))),SKEL_R_Calf:zp(-(6+38*Math.max(0,t))),SKEL_L_Foot:zp(10*Math.max(0,t)),SKEL_R_Foot:zp(10*Math.max(0,-t)),SKEL_L_UpperArm:zp(-22*t),SKEL_R_UpperArm:zp(22*t),SKEL_L_Forearm:zp(18+10*Math.max(0,-t)),SKEL_R_Forearm:zp(18+10*Math.max(0,t)),SKEL_Spine2:[`z`,4*t],SKEL_Head:[`z`,-3*t]},lift:.012*Math.abs(Math.cos(e/1.1*2*Math.PI))}}},{id:`arms`,label:`Arms up`,moves:.6,at:e=>{let t=.5-.5*Math.cos(Math.min(1,e/.6)*Math.PI);return{rotations:{SKEL_L_UpperArm:[`y`,-115*t],SKEL_R_UpperArm:[`y`,115*t],SKEL_L_Forearm:[`y`,-25*t],SKEL_R_Forearm:[`y`,25*t],SKEL_L_Clavicle:[`y`,-12*t],SKEL_R_Clavicle:[`y`,12*t]}}}},{id:`crouch`,label:`Crouch`,moves:.7,at:e=>{let t=.5-.5*Math.cos(Math.min(1,e/.7)*Math.PI);return{rotations:{SKEL_L_Thigh:[[`x`,100*t],[`y`,-8*t]],SKEL_R_Thigh:[[`x`,100*t],[`y`,8*t]],SKEL_L_Calf:zp(-115*t),SKEL_R_Calf:zp(-115*t),SKEL_L_Foot:zp(15*t),SKEL_R_Foot:zp(15*t),SKEL_Spine1:zp(-18*t),SKEL_Spine3:zp(-10*t),SKEL_L_UpperArm:zp(40*t),SKEL_R_UpperArm:zp(40*t),SKEL_L_Forearm:zp(50*t),SKEL_R_Forearm:zp(50*t)},lift:-.42*t}}},{id:`look`,label:`Look around`,moves:1/0,at:e=>{let t=Bp(e,3),n=Bp(e,1.5);return{rotations:{SKEL_Neck_1:[[`z`,25*t],[`x`,8*n]],SKEL_Head:[[`z`,30*t],[`x`,10*n]],SKEL_Spine3:[`z`,12*t],SKEL_L_UpperArm:[`y`,-20],SKEL_R_UpperArm:[`y`,20]}}}}],Hp=e=>Vp.find(t=>t.id===e)??Vp[0],Up={x:new Q(1,0,0),y:new Q(0,1,0),z:new Q(0,0,1)};function Wp(e,t,n,r){let{rotations:i,lift:a=0}=t.at(n,e),o=Array(e.count),s=new Mn,c=t=>{if(!t)return null;let n=Array.isArray(t[0])?t:[t],r=new Mn;for(let[t,i]of n){let n=t===`x`?e.forward:1;r.multiply(s.setFromAxisAngle(Up[t],i*Fp*n))}return r};for(let[t,n]of Object.entries(i)){let r=e.index.get(t);r!==void 0&&(o[r]=c(n))}for(let[t,[n,r]]of Object.entries(Ip)){let i=e.index.get(t),a=e.index.get(n);i!==void 0&&a!==void 0&&o[a]&&(o[i]=new Mn().slerp(o[a],r))}let l=e.scratch??={delta:Array.from({length:e.count},()=>new Mn),posed:Array.from({length:e.count},()=>new Q),rot:new nr,back:new nr};for(let t of e.order){let n=e.parents[t],i=n>=0&&n<e.count,s=l.delta[t];i?s.copy(l.delta[n]):s.identity(),o[t]&&s.multiply(o[t]),i?l.posed[t].copy(e.pos[t]).sub(e.pos[n]).applyQuaternion(l.delta[n]).add(l.posed[n]):l.posed[t].copy(e.pos[t]).setZ(e.pos[t].z+a),r[t]=(r[t]??new nr).makeTranslation(l.posed[t].x,l.posed[t].y,l.posed[t].z).multiply(l.rot.makeRotationFromQuaternion(s)).multiply(l.back.makeTranslation(-e.pos[t].x,-e.pos[t].y,-e.pos[t].z)).multiply(e.bindWorld[t])}return r}var Gp={class:`relative h-full w-full overflow-hidden bg-canvas`},Kp={key:0,class:`absolute inset-0 grid place-items-center p-8 text-center`},qp={key:1,class:`absolute inset-0 grid place-items-center bg-canvas/90 p-8 text-center`},Jp={key:2,class:`absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-xs text-fg-muted backdrop-blur`},Yp=24,Xp=32,Zp=280,Qp={__name:`Stage3D`,setup(t,{expose:n}){let r=Du(),i=_(null),o=_(!1),c=_(!1),l=_(!0);try{l.value=localStorage.getItem(`pw.stageHint`)!==`off`}catch{}let u,d,p,g,v,y,b=0,x=new Map,S=new Map,C=s(null),w=!1,T=null,E=``,D=null,k=null,j=[],M=0;function N(){let e=r.ped?.pose,t=e?`${e.count}|${e.names.join(`,`)}|${e.inverseBind.slice(0,64).join(`,`)}`:``;if(t!==E){for(let e of x.values())U(e);x.clear(),D?.dispose(),D=null,T=null,k=null,j.length=0,E=t,e&&(T=Rp(e),k=e.anchorBones,D=new ba(T.inverseBind.map(()=>{let e=new ga;return e.matrixAutoUpdate=!1,e}),T.inverseBind.map(e=>e.clone())),ee(0))}}function ee(e){if(T){Wp(T,Hp(r.state.pose),e,j),D.bones.forEach((e,t)=>e.matrixWorld.copy(j[t]));for(let e of x.values()){let t=e.userData.anchorBone;t!==void 0&&t>=0&&(e.matrix.copy(j[t]),e.matrixWorldNeedsUpdate=!0)}}}let I=e=>T&&Hp(r.state.pose).moves>(e-M)/1e3;function B(){!b&&u&&(b=requestAnimationFrame(()=>{b=0,u.render(d,p)}))}function te(e){let t=new Ar;t.userData.garmentId=e.id,t.userData.geometry=e.geometry;for(let n of e.geometry)for(let r of n.geometries){let n=new Ni;n.setAttribute(`position`,new vi(r.positions,3)),r.hasNormals&&n.setAttribute(`normal`,new vi(r.normals,3)),n.setAttribute(`uv`,new vi(r.uvs,2)),n.setIndex(new vi(r.indices,1)),r.hasNormals||n.computeVertexNormals(),n.computeBoundingSphere();let i;if(D&&!e.prop&&r.blendWeights?.length===r.vertexCount*4){let e=new Uint16Array(r.blendIndices.length);for(let t=0;t<e.length;t++)e[t]=r.blendIndices[t]<D.bones.length?r.blendIndices[t]:0;n.setAttribute(`skinIndex`,new vi(e,4)),n.setAttribute(`skinWeight`,new vi(r.blendWeights,4,!0)),i=new ha(n,C.value),i.bindMode=me,i.bind(D,new nr),i.frustumCulled=!1}else i=new ra(n,C.value);i.userData.garmentId=e.id,t.add(i)}return H(t,e),t}async function ne(e){let t=r.getPreview(e),n=`${e}@${t?`p${r.state.previewVersion[e]}`:r.state.textureVersion[e]??0}`;if(S.has(n))return S.get(n);let i=t??await r.getTexture(e,1024);if(S.has(n))return S.get(n);let a=new _a(i.rgba,i.width,i.height,ze);a.colorSpace=Lt,a.wrapS=a.wrapT=he,a.magFilter=xe,a.minFilter=Ce,a.generateMipmaps=!0,a.anisotropy=Math.min(8,u.capabilities.getMaxAnisotropy()),a.flipY=!1,a.needsUpdate=!0,a.userData.hasAlpha=i.hasAlpha;for(let[t,n]of S)t.startsWith(`${e}@`)&&(n.dispose(),S.delete(t));return S.set(n,a),a}function re(e){return new Ua({map:e,roughness:.85,metalness:0,side:2,alphaTest:e?.userData.hasAlpha?.35:0})}let V=0;async function ie(){if(!u)return;N();let e=++V,t=r.visible,n=new Set(t.map(e=>e.garment.id));for(let[e,t]of x)t.visible=n.has(e);for(let{garment:n,texture:r}of t){let t=x.get(n.id);t&&t.userData.geometry!==n.geometry&&(U(t),x.delete(n.id),t=null),t||(t=te(n),x.set(n.id,t),v.add(t),ee((performance.now()-M)/1e3)),t.visible=!0;let i=null;if(r)try{i=await ne(r)}catch(e){A(`texture failed`,r,e)}if(e!==V)return;for(let e of t.children)(e.material===C.value||e.material.map!==i)&&(e.material!==C.value&&e.material.dispose(),e.material=i?re(i):C.value)}W(n),!w&&t.length&&(Ee(!1),w=!0),B()}let ae=[`p_head`,`p_eyes`,`p_ears`,`p_mouth`,`p_lhand`,`p_rhand`,`p_lwrist`,`p_rwrist`,`p_lhip`,`p_lfoot`,`p_rfoot`];function H(e,t){if(!t.prop)return;let n=ae.indexOf(t.slot);if(k&&k[n]>=0){e.userData.anchorBone=k[n],e.matrixAutoUpdate=!1,j[k[n]]&&e.matrix.copy(j[k[n]]);return}let i=r.ped?.anchors?.[n];if(!i)return;let a=[...i];a[3]=a[7]=a[11]=0,a[15]=1;let o=new nr().fromArray(a).invert();e.matrixAutoUpdate=!1,e.matrix.copy(o)}function U(e){for(let t of e.children)t.geometry.dispose(),t.material!==C.value&&t.material.dispose();e.removeFromParent()}function W(e){let t=[...x.keys()].filter(t=>!e.has(t));for(let e of t.slice(0,Math.max(0,t.length-Yp)))U(x.get(e)),x.delete(e);if(S.size<=Xp)return;let n=new Set;for(let e of x.values())for(let t of e.children)t.material.map&&n.add(t.material.map);for(let[e,t]of S){if(S.size<=Xp)break;n.has(t)||(t.dispose(),S.delete(e))}}function oe(){let e=new ei;v.updateMatrixWorld(!0);for(let t of x.values())t.visible&&e.expandByObject(t);return e}let se=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,ce=0,le=null,G=0,K=new Q,ue=null,q=null,J={min:.05,max:25},de=!1,Y=0;function X(e){ce=0;let t=Math.min(100,le===null?16:e-le||16);le=e,q&&we(t),G&&ye(t);let n=I(e);n&&ee((e-M)/1e3),g.update()?Y=0:Y++;let r=de||Y<3;u.render(d,p),q||G||r||n?ce=requestAnimationFrame(X):le=null}function pe(){!ce&&u&&(ce=requestAnimationFrame(X))}function ge(e){let t=u.domElement.getBoundingClientRect();return new jn((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}function _e(e){let t=new Ko;t.setFromCamera(e,p);let n=t.intersectObjects([...x.values()].filter(e=>e.visible),!0)[0];if(n)return{point:n.point.clone(),hit:n};let r=new Li().setFromNormalAndCoplanarPoint(p.getWorldDirection(new Q),g.target),i=new Q;return{point:t.ray.intersectPlane(r,i)?i:g.target.clone(),hit:null}}function ve(e,t,n,r){let i=e.distanceTo(t),a=An.clamp(i*r,J.min,J.max),o=i>0?a/i:1;return e.sub(n).multiplyScalar(o).add(n),t.sub(n).multiplyScalar(o).add(n),o}function ye(e){let t=se?1:1-2**(-e/30),n=Math.abs(G*(1-t))<.001?G:G*t,r=Math.log(ve(p.position,g.target,K,Math.exp(n)));G=Math.abs(r-n)>1e-9||n===G?0:G-n}function be(e,t){!Number.isFinite(e)||e<=0||e===1||(q?(ve(q.toPosition,q.toTarget,t,e),q.to.setFromVector3(q.toPosition.clone().sub(q.toTarget))):(K.copy(t),G+=Math.log(e),pe()))}function Se(e,t){G=0,se?(p.position.copy(e),g.target.copy(t),g.update(),B()):(q={fromTarget:g.target.clone(),toTarget:t.clone(),from:new Yo().setFromVector3(p.position.clone().sub(g.target)),to:new Yo().setFromVector3(e.clone().sub(t)),toPosition:e.clone(),elapsed:0},pe())}function we(e){let t=q;t.elapsed+=e;let n=Math.min(1,t.elapsed/Zp);if(n>=1){g.target.copy(t.toTarget),p.position.copy(t.toPosition),q=null;return}let r=1-(1-n)**3,i=(t.to.theta-t.from.theta)%(2*Math.PI);i>Math.PI&&(i-=2*Math.PI),i<-Math.PI&&(i+=2*Math.PI);let a=t.from.radius>0&&t.to.radius>0?t.from.radius*(t.to.radius/t.from.radius)**r:t.to.radius,o=new Q().setFromSpherical(new Yo(a,t.from.phi+(t.to.phi-t.from.phi)*r,t.from.theta+i*r));g.target.lerpVectors(t.fromTarget,t.toTarget,r),p.position.copy(g.target).add(o)}function Te(e){if(!g.enabled)return;e.preventDefault();let t=e.deltaMode===1?16:e.deltaMode===2?800:1,n=An.clamp(e.deltaY*t*(e.ctrlKey?8:1),-400,400);Number.isFinite(n)&&n!==0&&((!ue||Math.abs(ue.x-e.clientX)>2||Math.abs(ue.y-e.clientY)>2)&&(ue={x:e.clientX,y:e.clientY,point:_e(ge(e)).point}),be(Math.exp(.0018*n),ue.point))}function Ee(e=!0){let t=oe();if(t.isEmpty())return;let n=t.getCenter(new Q),r=t.getSize(new Q),i=(Math.max(r.x,r.y,r.z)*.6||1)/Math.tan(p.fov*Math.PI/360)*1.15,a=e?p.position.clone().sub(g.target):new Q(0,r.y*.05,i);a.lengthSq()===0&&a.set(0,0,i),a.setLength(i),J.min=Math.max(.01,i*.04),J.max=i*4,p.near=Math.max(.005,J.min/10),p.far=J.max*20,p.updateProjectionMatrix(),ue=null,e?Se(n.clone().add(a),n):(G=0,q=null,g.target.copy(n),p.position.copy(n).add(a),g.update(),B())}let De=null;function Oe(e){De={x:e.clientX,y:e.clientY}}function ke(e){if(!De||Math.hypot(e.clientX-De.x,e.clientY-De.y)>4||e.button!==0)return;let{hit:t}=_e(ge(e));t&&r.selectGarment(t.object.userData.garmentId)}function Ae(e){let{point:t,hit:n}=_e(ge(e));n?(ue=null,Se(p.position.clone().add(t).sub(g.target),t)):Ee()}function je(e,t){let n=q?q.toTarget.clone():g.target.clone(),r=q?q.toPosition:p.position,i=new Yo().setFromVector3(r.clone().sub(n));i.theta-=e,i.phi=An.clamp(i.phi-t,.01,Math.PI-.01),Se(n.clone().add(new Q().setFromSpherical(i)),n)}function Me(e,t){q=null,p.updateMatrixWorld();let n=new Q().setFromMatrixColumn(p.matrixWorld,0).normalize(),r=new Q().setFromMatrixColumn(p.matrixWorld,1).normalize(),i=2*p.position.distanceTo(g.target)*Math.tan(An.degToRad(p.fov)/2)/u.domElement.clientHeight,a=n.multiplyScalar(-e*i).addScaledVector(r,t*i);p.position.add(a),g.target.add(a),g.update(),B()}function Ne(e){if(e.target.closest?.(`input,textarea,select,[contenteditable],[role=dialog]`)||e.ctrlKey||e.metaKey||e.altKey)return;let t=e.key;if(t===`f`||t===`F`||t===`Home`){Ee();return}if(t===`+`||t===`=`){e.preventDefault(),be(1/1.25,g.target.clone());return}if(t===`-`||t===`_`){e.preventDefault(),be(1.25,g.target.clone());return}let n={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[t];n&&(e.preventDefault(),e.shiftKey?Me(n[0]*40,-n[1]*40):je(n[0]*(Math.PI/12),-n[1]*(Math.PI/24)))}function Pe(){de=!1,Y=0,pe()}function Fe(){de=!0,Y=0,G=0,q=null,ue=null,pe()}function Ie(e){e.preventDefault(),c.value=!0}function Le(){c.value=!1;for(let e of S.values())e.needsUpdate=!0;B()}O(()=>{try{u=new gu({antialias:!0,alpha:!1,powerPreference:`high-performance`,preserveDrawingBuffer:!0})}catch{o.value=!0;return}u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.outputColorSpace=Lt,u.toneMapping=4,u.setClearColor(724240),i.value.appendChild(u.domElement),u.domElement.addEventListener(`webglcontextlost`,Ie),u.domElement.addEventListener(`webglcontextrestored`,Le),u.domElement.addEventListener(`pointerdown`,Oe),u.domElement.addEventListener(`pointerup`,ke),u.domElement.addEventListener(`dblclick`,Ae),window.addEventListener(`keydown`,Ne),d=new zr,p=new To(35,1,.01,100),d.add(new po(16777215,3159613,1.6));let e=new Oo(16777215,2.2);e.position.set(1.5,3,2.5),d.add(e);let t=new Oo(10217471,.8);t.position.set(-2,1.5,-2.5),d.add(t);let n=new ra(new Aa(.9,64),new Gi({color:1316893}));n.rotation.x=-Math.PI/2,n.position.y=-1,d.add(n),v=new Ar,v.rotation.set(-Math.PI/2,0,0),d.add(v),C.value=new Ua({color:9147550,roughness:.9,side:2}),g=new Sp(p,u.domElement),g.mouseButtons={LEFT:fe.ROTATE,MIDDLE:fe.PAN,RIGHT:fe.PAN},g.touches={ONE:Z.ROTATE,TWO:Z.DOLLY_PAN},g.enableDamping=!se,g.enableZoom=!1,g.screenSpacePanning=!0,g.addEventListener(`start`,Fe),g.addEventListener(`end`,Pe),g.addEventListener(`change`,B),u.domElement.addEventListener(`wheel`,Te,{passive:!1}),y=new ResizeObserver(()=>{let{clientWidth:e,clientHeight:t}=i.value;e&&t&&(u.setSize(e,t),p.aspect=e/t,p.updateProjectionMatrix(),B())}),y.observe(i.value),F.debug&&(window.__pedStage={scene:d,camera:p,renderer:u,meshes:x,root:v,fit:Ee}),ie()}),a(()=>[r.visible,r.state.textureVersion,r.state.previewVersion],ie,{deep:!0}),a(()=>r.state.view,()=>{w=!1,ie()}),a(()=>r.state.pose,()=>{M=performance.now(),ee(0),B(),pe()}),a(()=>r.visible.length,()=>B()),f(()=>{V++,cancelAnimationFrame(b),cancelAnimationFrame(ce),u?.domElement.removeEventListener(`wheel`,Te),window.removeEventListener(`keydown`,Ne),y?.disconnect(),g?.dispose();for(let e of x.values())for(let t of e.children)t.geometry.dispose(),t.material!==C.value&&t.material.dispose();x.clear();for(let e of S.values())e.dispose();S.clear(),D?.dispose(),D=null,T=null,C.value?.dispose(),d?.traverse(e=>{e.isMesh&&e.parent===d&&(e.geometry.dispose(),e.material.dispose())}),u&&(u.domElement.removeEventListener(`webglcontextlost`,Ie),u.domElement.removeEventListener(`webglcontextrestored`,Le),u.domElement.removeEventListener(`pointerdown`,Oe),u.domElement.removeEventListener(`pointerup`,ke),u.domElement.removeEventListener(`dblclick`,Ae),u.dispose(),u.domElement.remove()),u=null,F.debug&&delete window.__pedStage});function Re(){l.value=!1;try{localStorage.setItem(`pw.stageHint`,`off`)}catch{}}return n({fit:Ee}),(t,n)=>(e(),m(`div`,Gp,[z(`div`,{ref_key:`host`,ref:i,class:`absolute inset-0`,"aria-label":`3D view`,role:`img`},null,512),o.value?(e(),m(`div`,Kp,[...n[0]||=[z(`div`,{class:`max-w-sm`},[z(`p`,{class:`font-medium`},`The 3D preview cannot start`),z(`p`,{class:`mt-2 text-sm text-fg-muted`},`This browser has WebGL turned off, so the ped cannot be drawn. Everything else works. Turn on hardware acceleration in the browser's settings, then reload the page.`)],-1)]])):R(``,!0),c.value?(e(),m(`div`,qp,[...n[1]||=[z(`div`,{class:`max-w-sm`},[z(`p`,{class:`font-medium`},`The 3D view lost the graphics card`),z(`p`,{class:`mt-2 text-sm text-fg-muted`},`The ped and everything you did are still here. It comes back by itself when the browser returns the graphics card.`)],-1)]])):R(``,!0),l.value&&!o.value?(e(),m(`div`,Jp,[n[2]||=L(` Drag to rotate, right-drag to pan, scroll to zoom where you point, double-click to focus, F to reset `,-1),z(`button`,{class:`text-fg-subtle hover:text-fg`,"aria-label":`Hide the tip`,onClick:Re},[h(P,{name:`x`,size:12})])])):R(``,!0)]))}};function $p(e,t,n){e/=255,t/=255,n/=255;let r=Math.max(e,t,n),i=Math.min(e,t,n),a=(r+i)/2;if(r===i)return[0,0,a];let o=r-i,s=a>.5?o/(2-r-i):o/(r+i),c;return c=r===e?(t-n)/o+(t<n?6:0):r===t?(n-e)/o+2:(e-t)/o+4,[c*60,s,a]}function em(e,t,n){if(e=(e%360+360)%360/360,t===0){let e=Math.round(n*255);return[e,e,e]}let r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,a=e=>(e<0&&(e+=1),e>1&&--e,e<1/6?i+(r-i)*6*e:e<1/2?r:e<2/3?i+(r-i)*(2/3-e)*6:i);return[Math.round(a(e+1/3)*255),Math.round(a(e)*255),Math.round(a(e-1/3)*255)]}var tm=e=>{let t=parseInt(e.replace(`#`,``).padEnd(6,`0`).slice(0,6),16);return[t>>16&255,t>>8&255,t&255]},nm=(e,t,n)=>`#`+[e,t,n].map(e=>Math.max(0,Math.min(255,Math.round(e))).toString(16).padStart(2,`0`)).join(``),rm=e=>e<0?0:e>255?255:e;function im(e,t){let n=new Uint8ClampedArray(256);for(let r=0;r<256;r++){let i=r;if(e===`brightnessContrast`){let e=(t.contrast??0)*2.55;i=259*(e+255)/(255*(259-e))*(r-128)+128+(t.brightness??0)*1.5}else if(e===`levels`){let e=t.inBlack??0,n=Math.max(e+1,t.inWhite??255),a=Math.min(1,Math.max(0,(r-e)/(n-e)))**(1/(t.gamma??1));i=(t.outBlack??0)+a*((t.outWhite??255)-(t.outBlack??0))}else e===`invert`&&(i=255-r);n[r]=rm(i)}return n}function am(e,t,n,r){let[i,a,o]=$p(e,t,n);if(r.colorize)i=r.hue??0,a=Math.max(0,Math.min(1,((r.saturation??0)+100)/200));else{i+=r.hue??0;let e=(r.saturation??0)/100;a=e>0?a+(1-a)*e:a*(1+e)}let s=(r.lightness??0)/100;return o=s>0?o+(1-o)*s:o*(1+s),em(i,Math.max(0,Math.min(1,a)),Math.max(0,Math.min(1,o)))}function om(e,t,n,r,i){let a=Math.sqrt((e-r[0])**2+(t-r[1])**2+(n-r[2])**2)/441.7,o=Math.max(.001,i/100);return a>=o?0:a<=o*.5?1:1-(a-o*.5)/(o*.5)}function sm(e,t,n={},r=null){let i=new Uint8ClampedArray(e),a=e.length/4,o=t===`brightnessContrast`||t===`levels`||t===`invert`?im(t,n):null,s=t===`replaceColor`?Array.isArray(n.color)?n.color:tm(n.color??`#ffffff`):null;for(let c=0;c<a;c++){let a=r?r[c]/255:1;if(!a)continue;let l=c*4,u=e[l],d=e[l+1],f=e[l+2],p;if(o)p=[o[u],o[d],o[f]];else if(t===`desaturate`){let e=.299*u+.587*d+.114*f;p=[e,e,e]}else if(t===`hsl`)p=am(u,d,f,n);else if(t===`replaceColor`){if(a*=om(u,d,f,s,n.tolerance??25),!a)continue;p=am(u,d,f,n)}else continue;i[l]=u+(p[0]-u)*a,i[l+1]=d+(p[1]-d)*a,i[l+2]=f+(p[2]-f)*a}return i}function cm(e,t,n,r=null){let i=new Uint8ClampedArray(e);for(let a=0;a<e.length;a+=4){let o=r?r[a>>2]/255:1;if(o)for(let r=0;r<3;r++)i[a+r]=e[a+r]+(e[a+r]-t[a+r])*n*o}return i}function lm(e,t,n){if(!n)return new Uint8ClampedArray(t);let r=new Uint8ClampedArray(e);for(let i=0;i<n.length;i++){let a=n[i]/255;if(!a)continue;let o=i*4;for(let n=0;n<4;n++)r[o+n]=e[o+n]+(t[o+n]-e[o+n])*a}return r}function um(e,t,n,r,i,a,o=!0){let s=new Uint8Array(t*n);if(r=Math.floor(r),i=Math.floor(i),r<0||i<0||r>=t||i>=n)return s;let c=(i*t+r)*4,l=e[c],u=e[c+1],d=e[c+2],f=e[c+3],p=a/100*255,m=t=>{let n=t*4;return Math.abs(e[n]-l)<=p&&Math.abs(e[n+1]-u)<=p&&Math.abs(e[n+2]-d)<=p&&Math.abs(e[n+3]-f)<=p};if(!o){for(let e=0;e<t*n;e++)m(e)&&(s[e]=255);return s}let h=new Int32Array(t*n),g=0;for(h[g++]=i*t+r,s[i*t+r]=255;g;){let e=h[--g],r=e%t,i=[r>0?e-1:-1,r<t-1?e+1:-1,e-t,e+t];for(let e of i)e<0||e>=t*n||s[e]||m(e)&&(s[e]=255,h[g++]=e)}return s}function dm(e,t,n){let r=new Uint8Array(t*n);for(let i=0;i<n;i++)for(let a=0;a<t;a++){let o=i*t+a;e[o]<128||(a===0||i===0||a===t-1||i===n-1||e[o-1]<128||e[o+1]<128||e[o-t]<128||e[o+t]<128)&&(r[o]=1)}return r}function fm(e,t=12){let n=new Map,r=Math.max(1,Math.floor(e.length/4/2e5));for(let t=0;t<e.length;t+=4*r){if(e[t+3]<128)continue;let r=e[t]>>4<<8|e[t+1]>>4<<4|e[t+2]>>4,i=n.get(r);i?(i.n++,i.r+=e[t],i.g+=e[t+1],i.b+=e[t+2]):n.set(r,{n:1,r:e[t],g:e[t+1],b:e[t+2]})}let i=[...n.values()].sort((e,t)=>t.n-e.n).map(e=>[e.r/e.n,e.g/e.n,e.b/e.n]),a=[];for(let e of i)if(a.every(t=>Math.abs(t[0]-e[0])+Math.abs(t[1]-e[1])+Math.abs(t[2]-e[2])>60)&&a.push(e),a.length>=t)break;return a.map(e=>nm(...e))}var pm={class:`grid gap-5 p-5 text-sm md:grid-cols-[1fr_280px]`},mm={class:`space-y-2`},hm={class:`grid grid-cols-2 gap-3`},gm={class:`space-y-1`},_m={class:`text-center text-xs text-fg-subtle`},vm={class:`space-y-1`},ym={key:0,class:`text-xs text-fg-muted`},bm={class:`text-xs text-fg-subtle`},xm={class:`space-y-4`},Sm={class:`flex rounded-lg border border-border p-0.5 text-xs`,role:`group`,"aria-label":`What to change`},Cm={key:0,class:`space-y-2`},wm={class:`flex flex-wrap gap-1`},Tm=[`onClick`],Em={class:`flex items-center gap-2 text-xs text-fg-muted`},Dm={key:1,class:`space-y-2`},Om={class:`flex items-center gap-2 text-xs text-fg-muted`},km={class:`block text-xs text-fg-muted`},Am={class:`block text-xs text-fg-muted`},jm=[`min`,`max`],Mm={class:`block text-xs text-fg-muted`},Nm={class:`block text-xs text-fg-muted`},Pm={class:`space-y-2 border-t border-border pt-3`},Fm={class:`text-xs text-fg-muted`},Im={class:`flex items-center gap-2`},Lm=[`max`],Rm=[`disabled`],zm={key:0,class:`text-[11px] text-fg-subtle`},Bm=[`disabled`],Vm=[`disabled`],Hm=de({__name:`RecolorDialog`,props:{garmentId:{type:String,required:!0},letter:{type:String,required:!0}},emits:[`close`],setup(n,{emit:r}){let i=n,o=r,s=Du(),p=I(()=>s.garment(i.garmentId)),g=I(()=>p.value?.variants.find(e=>e.letter===i.letter)),y=I(()=>g.value?s.texture(g.value.texture):null),b=t({mode:`whole`,hue:0,saturation:0,lightness:0,colorize:!1,color:`#ff0000`,tolerance:25}),S=t({count:6}),C=_(!1),w=_(!0),E=_(null),D=_(null),k=null,A=null,j=0,N=0,F=I(()=>26-(p.value?.variants.length??26)),B=[[`Red`,0,60],[`Orange`,28,60],[`Yellow`,52,60],[`Green`,120,45],[`Teal`,175,45],[`Blue`,215,55],[`Purple`,275,45],[`Pink`,320,55],[`Brown`,25,25],[`Grey`,0,-100]];O(async()=>{let e=await s.getTexture(g.value.texture,16384);k=e;let t=Math.min(1,512/Math.max(e.width,e.height));j=Math.max(1,Math.round(e.width*t)),N=Math.max(1,Math.round(e.height*t));let n=document.createElement(`canvas`);n.width=e.width,n.height=e.height,n.getContext(`2d`).putImageData(new ImageData(new Uint8ClampedArray(e.rgba),e.width,e.height),0,0);for(let e of[E.value,D.value])e.width=j,e.height=N;let r=E.value.getContext(`2d`,{willReadFrequently:!0});r.drawImage(n,0,0,j,N),A=r.getImageData(0,0,j,N),n.width=0,w.value=!1,V()}),f(()=>{cancelAnimationFrame(re),s.setPreview(g.value?.texture,null)});let te=()=>b.mode===`one`?`replaceColor`:`hsl`,ne=(e=0)=>({...b,hue:b.colorize?(b.hue+e)%360:b.hue+e}),re=0;function V(){A&&(cancelAnimationFrame(re),re=requestAnimationFrame(()=>{let e=sm(A.data,te(),ne());D.value.getContext(`2d`).putImageData(new ImageData(e,j,N),0,0),s.setPreview(g.value.texture,{rgba:e,width:j,height:N,hasAlpha:!0})}))}a(b,V,{deep:!0});function ie([,e,t]){b.mode=`whole`,b.colorize=!0,b.hue=e,b.saturation=t,b.lightness=t===-100?0:b.lightness}function ae(e){if(b.mode!==`one`)return;let t=E.value.getBoundingClientRect(),n=Math.floor((e.clientX-t.left)/t.width*j),r=Math.floor((e.clientY-t.top)/t.height*N),i=A.data,a=(r*j+n)*4;b.color=nm(i[a],i[a+1],i[a+2])}let H=(e=0)=>({width:k.width,height:k.height,rgba:sm(k.rgba,te(),ne(e))});async function U(){C.value=!0;try{await s.applyTexture(g.value.texture,H(),`Recoloured ${p.value.label} colour ${i.letter.toUpperCase()}`),o(`close`)}catch{}finally{C.value=!1}}async function W(){C.value=!0;let e=await s.runEdit(`addVariant`,{garmentId:i.garmentId,from:i.letter,pixels:H()});C.value=!1,e&&o(`close`)}async function oe(){C.value=!0;let e=Math.min(S.count,F.value),t=360/(e+1),n=Array.from({length:e},(e,n)=>H(t*(n+1))),r=await s.runEdit(`addVariant`,{garmentId:i.garmentId,from:i.letter,pixelsList:n});C.value=!1,r&&o(`close`)}return(t,r)=>(e(),x(q,{title:`Recolour ${p.value?.label} · colour ${n.letter.toUpperCase()}`,wide:``,onClose:r[10]||=e=>o(`close`)},{footer:c(()=>[z(`button`,{class:`btn`,onClick:r[9]||=e=>o(`close`)},`Cancel`),z(`button`,{class:`btn`,disabled:C.value||w.value||F.value<1,onClick:W},[h(P,{name:`plus`}),r[14]||=L(`Add as new colour`,-1)],8,Bm),z(`button`,{class:`btn-primary`,disabled:C.value||w.value||!y.value?.writable,onClick:U},[h(P,{name:`check`}),L(`Change colour `+l(n.letter.toUpperCase()),1)],8,Vm)]),default:c(()=>[z(`div`,pm,[z(`div`,mm,[z(`div`,hm,[z(`figure`,gm,[z(`canvas`,{ref_key:`beforeEl`,ref:E,class:v([`aspect-square w-full rounded-md border border-border bg-raised object-contain`,b.mode===`one`?`cursor-crosshair`:``]),onClick:ae},null,2),z(`figcaption`,_m,l(b.mode===`one`?`Click the colour to change`:`Now`),1)]),z(`figure`,vm,[z(`canvas`,{ref_key:`afterEl`,ref:D,class:`aspect-square w-full rounded-md border border-border bg-raised`},null,512),r[11]||=z(`figcaption`,{class:`text-center text-xs text-fg-subtle`},`New · also showing on the ped`,-1)])]),w.value?(e(),m(`p`,ym,`Loading the picture…`)):R(``,!0),z(`p`,bm,l(y.value?.width)+` × `+l(y.value?.height)+` `+l(y.value?.formatName)+`. For painting, layers and selections, use Edit texture.`,1)]),z(`div`,xm,[z(`div`,Sm,[z(`button`,{class:v([`flex-1 rounded-md px-2 py-1`,b.mode===`whole`?`bg-hover text-fg`:`text-fg-muted`]),onClick:r[0]||=e=>b.mode=`whole`},`Whole picture`,2),z(`button`,{class:v([`flex-1 rounded-md px-2 py-1`,b.mode===`one`?`bg-hover text-fg`:`text-fg-muted`]),onClick:r[1]||=e=>(b.mode=`one`,b.colorize=!1)},`One colour`,2)]),b.mode===`whole`?(e(),m(`div`,Cm,[z(`div`,wm,[(e(),m(T,null,d(B,e=>z(`button`,{key:e[0],class:`rounded-md border border-border px-2 py-0.5 text-xs hover:border-border-strong`,onClick:t=>ie(e)},l(e[0]),9,Tm)),64))]),z(`label`,Em,[u(z(`input`,{"onUpdate:modelValue":r[2]||=e=>b.colorize=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,b.colorize]]),r[12]||=L(`Colorize: one colour, keeps the shading`,-1)])])):(e(),m(`div`,Dm,[z(`label`,Om,[r[13]||=L(`Colour to change `,-1),u(z(`input`,{"onUpdate:modelValue":r[3]||=e=>b.color=e,type:`color`,class:`h-7 w-10 rounded border border-border-strong bg-transparent`},null,512),[[M,b.color]])]),z(`label`,km,[L(`Range `+l(b.tolerance),1),u(z(`input`,{"onUpdate:modelValue":r[4]||=e=>b.tolerance=e,type:`range`,min:`1`,max:`100`,class:`w-full accent-accent`},null,512),[[M,b.tolerance,void 0,{number:!0}]])])])),z(`label`,Am,[L(`Hue `+l(b.hue)+`°`,1),u((e(),m(`input`,{key:b.colorize?`c`:`s`,"onUpdate:modelValue":r[5]||=e=>b.hue=e,type:`range`,min:b.colorize?0:-180,max:b.colorize?360:180,class:`hue-track w-full`},null,8,jm)),[[M,b.hue,void 0,{number:!0}]])]),z(`label`,Mm,[L(`Saturation `+l(b.saturation),1),u(z(`input`,{"onUpdate:modelValue":r[6]||=e=>b.saturation=e,type:`range`,min:`-100`,max:`100`,class:`w-full accent-accent`},null,512),[[M,b.saturation,void 0,{number:!0}]])]),z(`label`,Nm,[L(`Lightness `+l(b.lightness),1),u(z(`input`,{"onUpdate:modelValue":r[7]||=e=>b.lightness=e,type:`range`,min:`-100`,max:`100`,class:`w-full accent-accent`},null,512),[[M,b.lightness,void 0,{number:!0}]])]),z(`div`,Pm,[z(`p`,Fm,`Make a set of colours: the hue stepped round the colour wheel, each a new colour of `+l(p.value?.label)+`.`,1),z(`div`,Im,[u(z(`input`,{"onUpdate:modelValue":r[8]||=e=>S.count=e,type:`number`,min:`2`,max:Math.max(2,F.value),class:`field w-16 py-1 text-xs`},null,8,Lm),[[M,S.count,void 0,{number:!0}]]),z(`button`,{class:`btn flex-1 text-xs`,disabled:C.value||w.value||F.value<2,onClick:oe},[h(P,{name:`layers`,size:14}),L(`Make `+l(Math.min(S.count,F.value))+` colours`,1)],8,Rm)]),F.value<26?(e(),m(`p`,zm,`Room for `+l(F.value)+` more colour`+l(F.value===1?``:`s`)+` (26 at most).`,1)):R(``,!0)])])])]),_:1},8,[`title`]))}},[[`__scopeId`,`data-v-ba9a58b8`]]),Um={class:`flex h-full flex-col`,"aria-label":`Details`},Wm={key:0,class:`p-4 text-sm text-fg-muted`},Gm={class:`border-b border-border px-4 py-3`},Km={class:`label`},qm={class:`mt-1 flex items-center gap-2`},Jm={class:`flex-1 truncate text-base font-semibold`},Ym={class:`min-h-0 flex-1 space-y-5 overflow-y-auto p-4`},Xm={class:`mb-2 flex items-center justify-between`},Zm={class:`text-xs text-fg-subtle`},Qm={key:0,class:`text-sm text-fg-muted`},$m={class:`grid grid-cols-4 gap-1.5`},eh=[`title`,`onClick`],th={class:`mt-0.5 block text-center font-mono text-[11px] uppercase text-fg-muted`},nh=[`title`],rh={key:0,class:`relative`},ih=[`disabled`],ah={key:1,class:`absolute right-0 top-full z-20 mt-1 w-52 overflow-hidden rounded-lg border border-border-strong bg-raised text-sm shadow-xl shadow-black/50`},oh={key:1,class:`mt-2 flex items-center gap-1`},sh={class:`mr-auto text-xs text-fg-subtle`},ch=[`disabled`],lh=[`disabled`],uh=[`disabled`],dh=[`disabled`],fh=[`disabled`,`title`],ph={key:0,class:`space-y-2`},mh={class:`flex items-center justify-between`},hh={class:`font-mono text-xs text-fg-muted`},gh={class:`mt-0.5 text-fg-muted`},_h=[`disabled`],vh={class:`space-y-1`},yh={class:`min-w-0 flex-1`},bh={class:`truncate`},xh={class:`text-fg-subtle`},Sh=[`title`],Ch={class:`font-mono text-fg-muted`},wh=[`disabled`,`title`,`onClick`],Th=[`disabled`,`title`,`onClick`],Eh={key:0,class:`text-[11px] text-fg-subtle`},Dh={key:1,class:`space-y-2`},Oh=[`title`],kh={class:`grid grid-cols-2 gap-x-3 gap-y-1 text-xs`},Ah={class:`grid grid-cols-2 gap-1.5 pt-1`},jh=[`disabled`],Mh=[`disabled`],Nh=[`disabled`],Ph={key:0,class:`text-xs text-warn`},Fh={key:1,class:`text-xs text-fg-subtle`},Ih={key:2,class:`space-y-1.5`},Lh={class:`min-w-0 flex-1`},Rh={class:`text-xs`},zh={class:`truncate font-mono text-[11px] text-fg-subtle`},Bh=[`onClick`],Vh={class:`space-y-2`},Hh={class:`grid grid-cols-2 gap-x-3 gap-y-1 text-xs`},Uh={class:`truncate font-mono`},Wh=[`title`],Gh={class:`text-fg-subtle`},Kh=[`disabled`],qh={class:`flex flex-wrap items-center gap-1.5 pt-1`},Jh=[`disabled`],Yh={class:`flex items-center gap-1.5 text-xs text-fg-muted`},Xh=[`value`,`disabled`],Zh=[`value`],Qh=[`disabled`],$h={class:`flex w-full items-center gap-1.5 text-xs text-fg-muted`},eg=[`value`,`disabled`],tg=[`value`],ng=[`disabled`],rg={key:3,class:`space-y-1.5`},ig=[`disabled`],ag={class:`p-4 text-sm text-fg-muted`},og={__name:`Inspector`,emits:[`edit-texture`,`edit-shape`],setup(t,{emit:n}){let r=n,i=Du(),a=S(),o=_(null),s=_(null),u=_(!1),f=_(!1),p=_(null),y=I(()=>i.garment(i.state.selectedGarment)),b=I(()=>y.value?i.letterFor(y.value):null),C=I(()=>y.value?.variants.find(e=>e.letter===b.value)??y.value?.variants[0]??null),w=I(()=>y.value&&C.value?y.value.variants.indexOf(C.value):-1),E=I(()=>C.value?i.texture(C.value.texture):null),D=I(()=>[{role:`Normal map`,key:y.value?.normalMap},{role:`Specular map`,key:y.value?.specMap}].filter(e=>e.key&&i.texture(e.key))),O=I(()=>i.issues.filter(e=>e.garment===y.value?.id)),k=I(()=>y.value?i.spaceOf(y.value.id):null),A=I(()=>(i.space?.textures??[]).filter(e=>e.garment===y.value?.id).sort((e,t)=>t.bytes-e.bytes)),j=e=>e>=1048576?`${(e/1048576).toFixed(1)}M`:`${Math.max(1,Math.round(e/1024))}K`,M=e=>e.role===`colour`?`Colour ${e.letter.toUpperCase()}`:e.role===`inside`?`Map inside the model`:`Map`,N=(e,t)=>e.advice.find(e=>e.code===t)?.saves??0,F=I(()=>{let e=k.value;if(!e)return null;if(e.verdict===`duplicate`)return{tone:`danger`,title:`Remove it`,text:`Same model and colours as ${e.sameAs}, so players lose nothing if this one goes. Removing it saves ${oe(e.bytes)}.`};let t=(e.advice.huge?.saves??0)+(e.advice.uncompressed?.saves??0);return t?{tone:`warn`,title:`Shrink it`,text:`It can lose ${oe(t)} and look the same in game. Use the buttons below.`}:e.shares?{tone:`muted`,title:`Keep it`,text:`Some colours are the same picture as another garment's, but the model is different, so it is not a duplicate.`}:{tone:`ok`,title:`Keep it`,text:`Nothing to win here.`}}),ee=I(()=>{let e=y.value?.polygons??{};return[[`High`,e.high],[`Medium`,e.medium],[`Low`,e.low],[`Very low`,e.veryLow]].filter(([,e])=>e)}),B=I(()=>y.value?i.garments.filter(e=>e.slot===y.value.slot&&e.prop===y.value.prop).length:0),H=I(()=>y.value?.slot&&y.value.variants.length&&E.value&&!E.value.embedded),U=I(()=>i.state.busy);async function W(e){let t=i.texture(e),n=await i.getTexture(e,16384);le(await ae(n.rgba,n.width,n.height),`${t.name}.png`)}async function se(e){let t=e.target.files?.[0];if(e.target.value=``,!t||!E.value)return;let n=await ue(t,E.value.width,E.value.height);await i.applyTexture(E.value.key,n,`Replaced ${E.value.name} with ${t.name}`)}async function ce(e){let t=e.target.files?.[0];if(e.target.value=``,!t||!E.value)return;let n=await ue(t,E.value.width,E.value.height);await i.runEdit(`addVariant`,{garmentId:y.value.id,from:C.value.letter,pixels:{width:n.width,height:n.height,rgba:n.rgba}})}function G(){u.value=!1,s.value.click()}function K(){u.value=!1,i.runEdit(`addVariant`,{garmentId:y.value.id,from:C.value.letter})}let J=e=>i.runEdit(`moveVariant`,{garmentId:y.value.id,letter:C.value.letter,to:w.value+e}),de=()=>i.runEdit(`removeVariant`,{garmentId:y.value.id,letter:C.value.letter}),Y=()=>i.runEdit(`duplicateGarment`,{garmentId:y.value.id}),X=e=>i.runEdit(`moveGarment`,{garmentId:y.value.id,to:Number(e)}),fe=e=>i.runEdit(`moveToSlot`,{garmentId:y.value.id,slot:e});async function Z(){try{let e=await i.exportGarments([y.value.id]);le(new Blob([e.zip],{type:`application/zip`}),`${e.name}.zip`)}catch(e){a.show(e.message,{level:`warning`,timeout:7e3})}}async function pe(){f.value=!1,await i.runEdit(`removeGarment`,{garmentId:y.value.id})}return(t,n)=>(e(),m(`aside`,Um,[y.value?(e(),m(T,{key:1},[z(`header`,Gm,[z(`p`,Km,l(y.value.prop?`Accessory`:`Clothing`)+` · `+l(g(ne)[y.value.slot]?.title??`Other`),1),z(`div`,qm,[z(`h2`,Jm,l(y.value.label),1),g(i).isWorn(y.value)?(e(),m(`button`,{key:0,class:`btn`,onClick:n[0]||=e=>g(i).takeOff(y.value.id)},`Take this off`)):(e(),m(`button`,{key:1,class:`btn-primary`,onClick:n[1]||=e=>g(i).wear(y.value.id)},`Wear this`))])]),z(`div`,Ym,[z(`section`,null,[z(`div`,Xm,[n[20]||=z(`h3`,{class:`label`},`Variants`,-1),z(`span`,Zm,l(y.value.variants.length),1)]),y.value.variants.length?R(``,!0):(e(),m(`p`,Qm,`This garment has no variants yet.`)),z(`ul`,$m,[(e(!0),m(T,null,d(y.value.variants,t=>(e(),m(`li`,{key:t.texture},[z(`button`,{class:v([`w-full rounded-md border p-1 transition-colors`,t.letter===b.value?`border-accent`:`border-border hover:border-border-strong`]),title:`Variant ${t.letter.toUpperCase()}${t.race?`, `+(g(V)[t.race]??t.race):``}`,onClick:e=>g(i).setLetter(y.value,t.letter)},[h(Af,{"texture-key":t.texture,size:64,class:`aspect-square w-full`},null,8,[`texture-key`]),z(`span`,th,l(t.letter),1),g(i).textureSpace(t.texture)?(e(),m(`span`,{key:0,class:v([`block text-center font-mono text-[10px]`,g(i).textureSpace(t.texture).advice.some(e=>e.code===`huge`||e.code===`uncompressed`)?`text-warn`:g(i).textureSpace(t.texture).dupOf?`text-fg-subtle line-through`:`text-fg-subtle`]),title:g(i).textureSpace(t.texture).advice.map(e=>e.text).join(` `)||`${g(i).textureSpace(t.texture).width} × ${g(i).textureSpace(t.texture).height} ${g(i).textureSpace(t.texture).format}`},l(j(g(i).textureSpace(t.texture).bytes)),11,nh)):R(``,!0)],10,eh)]))),128)),H.value?(e(),m(`li`,rh,[z(`button`,{class:`grid aspect-square w-full place-items-center rounded-md border border-dashed border-border-strong text-fg-subtle transition-colors hover:border-accent hover:text-accent disabled:opacity-40`,title:`Add a variant`,"aria-label":`Add a variant`,disabled:U.value||y.value.variants.length>=26,onClick:n[2]||=e=>u.value=!u.value},[h(P,{name:`plus`,size:18})],8,ih),u.value?(e(),m(`div`,{key:0,class:`fixed inset-0 z-10`,"aria-hidden":`true`,onClick:n[3]||=e=>u.value=!1})):R(``,!0),u.value?(e(),m(`div`,ah,[z(`button`,{class:`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-hover`,onClick:G},[h(P,{name:`image`}),n[21]||=L(`From a picture…`,-1)]),z(`button`,{class:`flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-hover`,onClick:K},[h(P,{name:`files`}),L(`Copy of variant `+l(C.value.letter.toUpperCase()),1)])])):R(``,!0)])):R(``,!0)]),z(`input`,{ref_key:`variantPicture`,ref:s,type:`file`,accept:`image/png,image/jpeg,image/webp`,class:`hidden`,"aria-label":`Picture for the new variant`,onChange:ce},null,544),H.value&&y.value.variants.length?(e(),m(`div`,oh,[z(`span`,sh,`Variant `+l(C.value.letter.toUpperCase()),1),z(`button`,{class:`btn-ghost px-1.5 py-1 text-xs`,disabled:U.value,title:`Change this colour, or make new colours from it`,onClick:n[4]||=e=>p.value=C.value.letter},[h(P,{name:`pipette`,size:14}),n[22]||=L(`Recolour`,-1)],8,ch),z(`button`,{class:`btn-ghost p-1.5`,disabled:U.value||w.value<=0,title:`Move earlier`,"aria-label":`Move variant earlier`,onClick:n[5]||=e=>J(-1)},[h(P,{name:`chevronLeft`,size:14})],8,lh),z(`button`,{class:`btn-ghost p-1.5`,disabled:U.value||w.value>=y.value.variants.length-1,title:`Move later`,"aria-label":`Move variant later`,onClick:n[6]||=e=>J(1)},[h(P,{name:`chevronRight`,size:14})],8,uh),z(`button`,{class:`btn-ghost p-1.5`,disabled:U.value||y.value.variants.length>=26,title:`Duplicate variant`,"aria-label":`Duplicate variant`,onClick:K},[h(P,{name:`files`,size:14})],8,dh),z(`button`,{class:`btn-ghost p-1.5 hover:text-danger`,disabled:U.value||y.value.variants.length<2,title:y.value.variants.length<2?`A garment needs at least one variant`:`Remove variant`,"aria-label":`Remove variant`,onClick:de},[h(P,{name:`trash`,size:14})],8,fh)])):R(``,!0)]),k.value?(e(),m(`section`,ph,[z(`div`,mh,[n[23]||=z(`h3`,{class:`label`},`Space`,-1),z(`span`,hh,l(g(oe)(k.value.bytes)),1)]),z(`div`,{class:v([`rounded-md border px-2.5 py-2 text-xs`,{danger:`border-danger/30 bg-danger/5`,warn:`border-warn/30 bg-warn/5`,ok:`border-ok/30 bg-ok/5`,muted:`border-border`}[F.value.tone]])},[z(`p`,{class:v([`font-medium`,{danger:`text-danger`,warn:`text-warn`,ok:`text-ok`,muted:`text-fg`}[F.value.tone]])},l(F.value.title),3),z(`p`,gh,l(F.value.text),1),k.value.verdict===`duplicate`?(e(),m(`button`,{key:0,class:`btn mt-2 text-xs hover:text-danger`,disabled:U.value,onClick:n[7]||=e=>f.value=!0},[h(P,{name:`trash`,size:14}),n[24]||=L(`Remove this garment`,-1)],8,_h)):R(``,!0)],2),z(`ul`,vh,[(e(!0),m(T,null,d(A.value.slice(0,8),t=>(e(),m(`li`,{key:t.key,class:`flex items-center gap-2 text-xs`},[z(`div`,yh,[z(`p`,bh,[L(l(M(t))+` `,1),z(`span`,xh,`· `+l(t.width)+`×`+l(t.height)+` `+l(t.format),1)]),(e(!0),m(T,null,d(t.advice,t=>(e(),m(`p`,{key:t.code,class:v([`truncate text-[11px]`,t.code===`duplicate`?`text-fg-subtle`:`text-warn`]),title:t.text},l(t.text),11,Sh))),128))]),z(`span`,Ch,l(j(t.bytes)),1),N(t,`huge`)?(e(),m(`button`,{key:0,class:`btn px-1.5 py-0.5 text-[11px]`,disabled:U.value,title:`Half size: saves ${g(oe)(N(t,`huge`))}`,onClick:e=>g(i).shrink([t.key],`halve`)},`Halve`,8,wh)):R(``,!0),N(t,`uncompressed`)?(e(),m(`button`,{key:1,class:`btn px-1.5 py-0.5 text-[11px]`,disabled:U.value,title:`Saves ${g(oe)(N(t,`uncompressed`))}`,onClick:e=>g(i).shrink([t.key],`compress`)},`Compress`,8,Th)):R(``,!0)]))),128))]),A.value.length>8?(e(),m(`p`,Eh,`and `+l(A.value.length-8)+` smaller textures`,1)):R(``,!0)])):R(``,!0),E.value?(e(),m(`section`,Dh,[n[34]||=z(`h3`,{class:`label`},`Texture`,-1),z(`p`,{class:`truncate font-mono text-xs text-fg-muted`,title:E.value.name},l(E.value.name),9,Oh),z(`dl`,kh,[n[26]||=z(`dt`,{class:`text-fg-subtle`},`Size`,-1),z(`dd`,null,l(E.value.width)+` × `+l(E.value.height),1),n[27]||=z(`dt`,{class:`text-fg-subtle`},`Format`,-1),z(`dd`,null,l(E.value.formatName),1),n[28]||=z(`dt`,{class:`text-fg-subtle`},`Mip levels`,-1),z(`dd`,null,l(E.value.levels),1),n[29]||=z(`dt`,{class:`text-fg-subtle`},`Data`,-1),z(`dd`,null,l(g(oe)(E.value.dataSize)),1),C.value?.race?(e(),m(T,{key:0},[n[25]||=z(`dt`,{class:`text-fg-subtle`},`Skin tone`,-1),z(`dd`,null,l((g(V)[C.value.race]??C.value.race).replace(`Skin tone: `,``)),1)],64)):R(``,!0)]),z(`div`,Ah,[z(`button`,{class:`btn`,disabled:!E.value.writable||U.value,title:`Layers, selections, brushes, colour adjustments`,onClick:n[8]||=e=>r(`edit-texture`,E.value.key)},[h(P,{name:`brush`}),n[30]||=L(`Edit texture`,-1)],8,jh),z(`button`,{class:`btn`,disabled:U.value||!C.value,title:`Change the colour, or make new colours from it`,onClick:n[9]||=e=>p.value=C.value.letter},[h(P,{name:`pipette`}),n[31]||=L(`Recolour`,-1)],8,Mh),z(`button`,{class:`btn`,disabled:!E.value.writable||U.value,onClick:n[10]||=e=>o.value.click()},[h(P,{name:`image`}),n[32]||=L(`Replace`,-1)],8,Nh),z(`button`,{class:`btn`,onClick:n[11]||=e=>W(E.value.key)},[h(P,{name:`download`}),n[33]||=L(`Save PNG`,-1)])]),E.value.writable?E.value.formatName!==`DXT1`&&E.value.formatName!==`DXT5`&&!E.value.formatName.startsWith(`A8`)?(e(),m(`p`,Fh,`Saving writes this `+l(E.value.formatName)+` texture as DXT5 (same size).`,1)):R(``,!0):(e(),m(`p`,Ph,l(E.value.formatName)+` textures can be viewed but not written yet.`,1)),z(`input`,{ref_key:`fileInput`,ref:o,type:`file`,accept:`image/png,image/jpeg,image/webp`,class:`hidden`,onChange:se},null,544)])):R(``,!0),D.value.length?(e(),m(`section`,Ih,[n[35]||=z(`h3`,{class:`label`},`Other maps`,-1),n[36]||=z(`p`,{class:`text-[11px] text-fg-subtle`},`Lighting maps, not pictures of the garment. For the colour picture, use Save PNG under Texture.`,-1),(e(!0),m(T,null,d(D.value,t=>(e(),m(`div`,{key:t.key,class:`flex items-center gap-2 rounded-md border border-border p-1.5`},[h(Af,{"texture-key":t.key,size:40,class:`size-10`},null,8,[`texture-key`]),z(`div`,Lh,[z(`p`,Rh,l(t.role),1),z(`p`,zh,l(g(i).texture(t.key).name),1)]),z(`button`,{class:`btn-ghost`,title:`Save as PNG`,onClick:e=>W(t.key)},[h(P,{name:`download`,size:14})],8,Bh)]))),128))])):R(``,!0),z(`section`,Vh,[n[49]||=z(`h3`,{class:`label`},`Garment`,-1),z(`dl`,Hh,[n[39]||=z(`dt`,{class:`text-fg-subtle`},`Model`,-1),z(`dd`,Uh,l(y.value.name??`—`),1),n[40]||=z(`dt`,{class:`text-fg-subtle`},`File`,-1),z(`dd`,{class:`truncate font-mono`,title:y.value.file},l(y.value.file),9,Wh),n[41]||=z(`dt`,{class:`text-fg-subtle`},`Index`,-1),z(`dd`,null,l(y.value.index),1),n[42]||=z(`dt`,{class:`text-fg-subtle`},`In .ymt`,-1),z(`dd`,null,l(y.value.inYmt?`Yes`:`No`),1),y.value.cloth?(e(),m(T,{key:0},[n[37]||=z(`dt`,{class:`text-fg-subtle`},`Cloth physics`,-1),n[38]||=z(`dd`,null,`Yes`,-1)],64)):R(``,!0),(e(!0),m(T,null,d(ee.value,([t,n])=>(e(),m(T,{key:t},[z(`dt`,Gh,l(t)+` LOD`,1),z(`dd`,null,l(n.toLocaleString())+` polygons`,1)],64))),128))]),y.value.slot?(e(),m(T,{key:0},[z(`button`,{class:`btn mt-1 w-full`,disabled:U.value||!y.value.geometry?.length,title:`Remove parts of the model, or save a part as a new garment in another category`,onClick:n[12]||=e=>r(`edit-shape`,y.value.id)},[h(P,{name:`isolate`}),n[43]||=L(`Edit shape…`,-1)],8,Kh),z(`div`,qh,[z(`button`,{class:`btn`,disabled:U.value,onClick:Y},[h(P,{name:`files`}),n[44]||=L(`Duplicate`,-1)],8,Jh),z(`label`,Yh,[n[45]||=L(` Move to `,-1),z(`select`,{class:`field w-auto py-1 text-xs`,value:y.value.index,disabled:U.value||B.value<2,onChange:n[13]||=e=>X(e.target.value)},[(e(!0),m(T,null,d(B.value,t=>(e(),m(`option`,{key:t,value:t-1},l(g(te)(y.value.slot,t-1)),9,Zh))),128))],40,Xh)]),z(`button`,{class:`btn ml-auto hover:text-danger`,disabled:U.value,onClick:n[14]||=e=>f.value=!0},[h(P,{name:`trash`}),n[46]||=L(`Remove`,-1)],8,Qh),z(`label`,$h,[n[47]||=L(` Category `,-1),z(`select`,{class:`field flex-1 py-1 text-xs`,value:y.value.slot,disabled:U.value,title:`Move it to another category, for example a head into Decals`,onChange:n[15]||=e=>fe(e.target.value)},[(e(!0),m(T,null,d(y.value.prop?g(re):g(ie),t=>(e(),m(`option`,{key:t.code,value:t.code},l(t.title),9,tg))),128))],40,eg)]),z(`button`,{class:`btn w-full`,disabled:U.value,title:`The model, every variant and the .ymt, as a ZIP you can drop into another ped with Add clothing`,onClick:Z},[h(P,{name:`download`}),n[48]||=L(`Save this garment's files (.zip)`,-1)],8,ng)])],64)):R(``,!0)]),O.value.length?(e(),m(`section`,rg,[n[50]||=z(`h3`,{class:`label`},`Issues`,-1),(e(!0),m(T,null,d(O.value,(t,n)=>(e(),m(`p`,{key:n,class:v([`flex gap-2 text-xs`,t.level===`error`?`text-danger`:t.level===`warning`?`text-warn`:`text-fg-muted`])},[h(P,{name:t.level===`info`?`info`:`alert`,size:14,class:`mt-px`},null,8,[`name`]),L(l(t.message),1)],2))),128)),O.value.some(e=>e.code===`SKELETON_MISMATCH`)?(e(),m(`button`,{key:0,class:`btn w-full`,disabled:U.value,onClick:n[16]||=e=>g(i).state.fitOpen=!0},`Fit to this ped's skeleton…`,8,ig)):R(``,!0)])):R(``,!0)])],64)):(e(),m(`p`,Wm,`Select a garment to see its details.`)),p.value&&y.value?(e(),x(Hm,{key:2,"garment-id":y.value.id,letter:p.value,onClose:n[17]||=e=>p.value=null},null,8,[`garment-id`,`letter`])):R(``,!0),f.value&&y.value?(e(),x(q,{key:3,title:`Remove ${y.value.label}?`,onClose:n[19]||=e=>f.value=!1},{footer:c(()=>[z(`button`,{class:`btn`,onClick:n[18]||=e=>f.value=!1},`Cancel`),z(`button`,{class:`btn bg-danger/15 text-danger hover:bg-danger/25`,onClick:pe},`Remove`)]),default:c(()=>[z(`p`,ag,`The garment and its `+l(y.value.variants.length)+` variant`+l(y.value.variants.length===1?``:`s`)+` are taken out of the ped, and the garments after it move down one number. You can undo it in the top bar or with Ctrl+Z.`,1)]),_:1},8,[`title`])):R(``,!0)]))}},sg={class:`absolute right-3 top-full z-30 mt-2 w-[min(460px,calc(100vw-24px))] overflow-hidden rounded-xl border border-border-strong bg-surface shadow-2xl shadow-black/60`},cg={class:`flex items-center gap-3 border-b border-border px-4 py-2.5`},lg={class:`text-xs text-danger`},ug={class:`text-xs text-warn`},dg={class:`text-xs text-fg-muted`},fg={class:`max-h-[60vh] divide-y divide-border overflow-y-auto`},pg={key:0,class:`flex items-center gap-2 px-4 py-6 text-sm text-ok`},mg={class:`min-w-0 flex-1`},hg={class:`text-fg`},gg={class:`mt-0.5 font-mono text-[11px] text-fg-subtle`},_g=[`disabled`,`title`,`onClick`],vg=[`onClick`],yg={__name:`IssuesPanel`,emits:[`close`],setup(t,{emit:n}){let r=n,i=Du(),a={error:0,warning:1,info:2},o=I(()=>[...i.issues].sort((e,t)=>a[e.level]-a[t.level])),s=I(()=>({error:i.issues.filter(e=>e.level===`error`).length,warning:i.issues.filter(e=>e.level===`warning`).length,info:i.issues.filter(e=>e.level===`info`).length})),c=[`NUMBERING_GAP`,`YMT_EXTRA`,`NOT_IN_YMT`],u=e=>e.slot??i.garment(e.garment)?.slot??null,f=[`TOO_BIG_FOR_GAME`,`OVERSIZED`],p=e=>e.code===`SKELETON_MISMATCH`||e.code===`NO_NONE_OPTION`||f.includes(e.code)&&i.ped?.layout===`packed`||c.includes(e.code)&&u(e),_=e=>e.code===`SKELETON_MISMATCH`?`Re-point the garment's bones to this ped's skeleton`:f.includes(e.code)?`Make a streamed copy: every garment in its own files`:e.code===`NO_NONE_OPTION`?`Add an invisible garment at number 0 of those categories`:`Number the slot's garments without gaps and make the .ymt match them`;function y(e){if(e.code===`SKELETON_MISMATCH`||f.includes(e.code)||e.code===`NO_NONE_OPTION`){e.code===`SKELETON_MISMATCH`?i.state.fitOpen=!0:e.code===`NO_NONE_OPTION`?i.state.noneOpen=!0:i.state.convertOpen=!0,r(`close`);return}let t=u(e);i.runEdit(`fixNumbering`,{slot:t,prop:t.startsWith(`p_`)})}function b(e){e.garment?i.selectGarment(e.garment):e.slot&&i.selectSlot(e.slot),r(`close`)}return(t,n)=>(e(),m(`div`,sg,[z(`header`,cg,[n[1]||=z(`h2`,{class:`flex-1 text-sm font-semibold`},`Validation`,-1),z(`span`,lg,l(s.value.error)+` errors`,1),z(`span`,ug,l(s.value.warning)+` warnings`,1),z(`span`,dg,l(s.value.info)+` notes`,1),z(`button`,{class:`btn-ghost`,"aria-label":`Close`,onClick:n[0]||=e=>r(`close`)},[h(P,{name:`x`,size:14})])]),z(`ul`,fg,[o.value.length?R(``,!0):(e(),m(`li`,pg,[h(P,{name:`check`}),n[2]||=L(`No problems found in this ped.`,-1)])),(e(!0),m(T,null,d(o.value,(t,n)=>(e(),m(`li`,{key:n,class:`flex gap-3 px-4 py-2.5 text-sm`},[h(P,{name:t.level===`info`?`info`:`alert`,class:v([`mt-0.5`,t.level===`error`?`text-danger`:t.level===`warning`?`text-warn`:`text-fg-subtle`])},null,8,[`name`,`class`]),z(`div`,mg,[z(`p`,hg,l(t.message),1),z(`p`,gg,l(t.code),1)]),p(t)?(e(),m(`button`,{key:0,class:`btn-ghost self-start text-xs text-accent`,disabled:g(i).state.busy,title:_(t),onClick:e=>y(t)},`Fix`,8,_g)):R(``,!0),t.garment||t.slot?(e(),m(`button`,{key:1,class:`btn-ghost self-start text-xs`,onClick:e=>b(t)},`Show`,8,vg)):R(``,!0)]))),128))])]))}},bg=/^[a-z][a-z0-9_]{0,31}$/;function xg(e){return e?/^[a-z]/.test(e)?bg.test(e)?null:`Use lower case letters a–z, digits and _ only (at most 32).`:`The name has to start with a letter a–z.`:`Give the ped a name.`}var Sg={class:`space-y-5 p-4 text-sm`},Cg={key:0,class:`block space-y-1.5`},wg={class:`space-y-1.5`},Tg={class:`mt-0.5 block text-xs text-fg-muted`},Eg={class:`font-mono text-accent`},Dg={class:`font-medium`},Og={key:1,class:`space-y-1.5`},kg={class:`flex gap-2`},Ag=[`value`],jg={key:0,class:`text-xs text-fg-subtle`},Mg={key:2,class:`flex gap-2 rounded-lg border border-danger/40 bg-danger/5 p-3 text-xs text-danger`},Ng={class:`flex items-center gap-2 text-ok`},Pg={key:0,class:`text-xs text-warn`},Fg={class:`max-h-60 space-y-0.5 overflow-y-auto rounded-lg border border-border bg-canvas p-3 font-mono text-xs text-fg-muted`},Ig={key:1,class:`text-xs text-fg-muted`},Lg={key:2,class:`text-xs text-fg-muted`},Rg={class:`font-mono text-accent`},zg={class:`font-mono text-accent`},Bg=[`disabled`],Vg={__name:`ExportDialog`,emits:[`close`],setup(t,{emit:n}){let r=n,i=Du(),a=S(),o=i.state.project,s=/(^|_)f(_|$)|female/.test(o.name)?`female`:`male`,f=_((o.exportName??o.name).toLowerCase().replace(/[^a-z0-9_]/g,`_`)),p=_(o.gender&&o.exportedAt?o.gender:s),y=_(`resource`),b=_(null),w=I(()=>xg(f.value)),E=I(()=>i.issues.filter(e=>e.level===`error`)),D=I(()=>i.garments.filter(e=>e.slot).length),O=I(()=>y.value===`garments`?`${o.name}_garments`:f.value);async function k(){if(!(w.value&&y.value!==`garments`))try{let e=y.value===`garments`?await i.exportGarments(i.garments.filter(e=>e.slot).map(e=>e.id),O.value):await i.exportPed({name:f.value,gender:p.value,format:y.value});b.value={files:e.fileNames,size:e.zip.byteLength,skipped:e.skipped??[]},le(new Blob([e.zip],{type:`application/zip`}),`${O.value}.zip`)}catch(e){a.show(`The export failed: ${e.message}`,{level:`error`})}}return(t,n)=>(e(),x(q,{title:`Export ${g(o).name}`,onClose:n[7]||=e=>r(`close`)},{footer:c(()=>[b.value?(e(),m(`button`,{key:1,class:`btn-primary`,onClick:n[6]||=e=>r(`close`)},`Done`)):(e(),m(T,{key:0},[z(`button`,{class:`btn`,onClick:n[5]||=e=>r(`close`)},`Cancel`),z(`button`,{class:`btn-primary`,disabled:!!w.value&&y.value!==`garments`||g(i).state.busy,onClick:k},[h(P,{name:`download`}),L(l(g(i).state.busy?`Building…`:`Export`),1)],8,Bg)],64))]),default:c(()=>[z(`div`,Sg,[b.value?(e(),m(T,{key:1},[z(`p`,Ng,[h(P,{name:`check`}),L(l(O.value)+`.zip is downloading (`+l(g(oe)(b.value.size))+`).`,1)]),b.value.skipped.length?(e(),m(`p`,Pg,l(b.value.skipped.length)+` garment(s) could not be saved: `+l(b.value.skipped[0]),1)):R(``,!0),z(`ul`,Fg,[(e(!0),m(T,null,d(b.value.files,t=>(e(),m(`li`,{key:t},l(t),1))),128))]),y.value===`garments`?(e(),m(`p`,Ig,`Drop the ZIP (or the unzipped folder) onto another ped in the editor to add these garments to it.`)):R(``,!0),y.value===`resource`?(e(),m(`p`,Lg,[n[16]||=L(`Unzip it into your server's `,-1),n[17]||=z(`code`,{class:`font-mono`},`resources`,-1),n[18]||=L(` folder, add `,-1),z(`code`,Rg,`ensure `+l(f.value),1),n[19]||=L(` to server.cfg, then spawn the ped with the model name `,-1),z(`code`,zg,l(f.value),1),n[20]||=L(`.`,-1)])):R(``,!0)],64)):(e(),m(T,{key:0},[y.value===`garments`?R(``,!0):(e(),m(`label`,Cg,[n[8]||=z(`span`,{class:`text-xs font-medium text-fg-muted`},`Ped name`,-1),u(z(`input`,{"onUpdate:modelValue":n[0]||=e=>f.value=e,class:`field font-mono`,spellcheck:`false`,autocomplete:`off`},null,512),[[M,f.value,void 0,{trim:!0}]]),z(`span`,{class:v([`block text-xs`,w.value?`text-danger`:`text-fg-subtle`])},l(w.value??(f.value===g(o).name?`The files, the resource folder and peds.meta get this name.`:`The export gets the new name. The project is still called ${g(o).name}.`)),3)])),z(`fieldset`,wg,[n[14]||=z(`legend`,{class:`text-xs font-medium text-fg-muted`},`What to export`,-1),z(`label`,{class:v([`flex cursor-pointer gap-3 rounded-lg border p-3`,y.value===`resource`?`border-accent bg-accent/5`:`border-border`])},[u(z(`input`,{"onUpdate:modelValue":n[1]||=e=>y.value=e,type:`radio`,value:`resource`,class:`mt-0.5 accent-accent`},null,512),[[C,y.value]]),z(`span`,null,[n[11]||=z(`span`,{class:`font-medium`},`FiveM resource`,-1),z(`span`,Tg,[n[9]||=L(`A folder with fxmanifest.lua, peds.meta and the stream files. Put it in your server's resources and add `,-1),z(`code`,Eg,`ensure `+l(f.value||`name`),1),n[10]||=L(` to server.cfg.`,-1)])])],2),z(`label`,{class:v([`flex cursor-pointer gap-3 rounded-lg border p-3`,y.value===`stream`?`border-accent bg-accent/5`:`border-border`])},[u(z(`input`,{"onUpdate:modelValue":n[2]||=e=>y.value=e,type:`radio`,value:`stream`,class:`mt-0.5 accent-accent`},null,512),[[C,y.value]]),n[12]||=z(`span`,null,[z(`span`,{class:`font-medium`},`Stream files only`),z(`span`,{class:`mt-0.5 block text-xs text-fg-muted`},`Just the ped's files, to drop into an existing resource's stream folder in place of the old ones.`)],-1)],2),z(`label`,{class:v([`flex cursor-pointer gap-3 rounded-lg border p-3`,y.value===`garments`?`border-accent bg-accent/5`:`border-border`])},[u(z(`input`,{"onUpdate:modelValue":n[3]||=e=>y.value=e,type:`radio`,value:`garments`,class:`mt-0.5 accent-accent`},null,512),[[C,y.value]]),z(`span`,null,[z(`span`,Dg,`All `+l(D.value)+` garments, as garment files`,1),n[13]||=z(`span`,{class:`mt-0.5 block text-xs text-fg-muted`},`Every garment with its variants, ready to drop into another ped with Add clothing. Their categories are picked for you when you drop them, and you can change any of them.`,-1)])],2)]),y.value===`resource`?(e(),m(`fieldset`,Og,[n[15]||=z(`legend`,{class:`text-xs font-medium text-fg-muted`},`Movement and voice set in peds.meta`,-1),z(`div`,kg,[(e(),m(T,null,d([`male`,`female`],e=>z(`label`,{key:e,class:v([`flex flex-1 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 capitalize`,p.value===e?`border-accent bg-accent/5`:`border-border`])},[u(z(`input`,{"onUpdate:modelValue":n[4]||=e=>p.value=e,type:`radio`,value:e,class:`accent-accent`},null,8,Ag),[[C,p.value]]),L(l(e),1)],2)),64))]),g(i).ped?.layout===`streamed`?(e(),m(`p`,jg,`This ped streams one file per garment, so peds.meta sets IsStreamedGfx to true.`)):R(``,!0)])):R(``,!0),E.value.length?(e(),m(`p`,Mg,[h(P,{name:`alert`,size:14,class:`mt-px`}),L(`This ped has `+l(E.value.length)+` error(s) in the validation list. The export may not work in game. `,1)])):R(``,!0)],64))])]),_:1},8,[`title`]))}},Hg=[[`normal`,`Normal`],[`multiply`,`Multiply`],[`screen`,`Screen`],[`overlay`,`Overlay`],[`soft-light`,`Soft light`],[`hard-light`,`Hard light`],[`color-dodge`,`Colour dodge`],[`color-burn`,`Colour burn`],[`darken`,`Darken`],[`lighten`,`Lighten`],[`difference`,`Difference`],[`hue`,`Hue`],[`saturation`,`Saturation`],[`color`,`Colour`],[`luminosity`,`Luminosity`]],Ug=e=>e===`normal`?`source-over`:e,Wg=1,Gg=(e,t)=>{let n=document.createElement(`canvas`);return n.width=e,n.height=t,n};function Kg(e,n,r,{budgetBytes:i=268435456}={}){let a=t([]),o=_(null),s=I(()=>a.find(e=>e.id===o.value)??null);function c(t,r=null){let i=r??Gg(e,n);return{id:Wg++,name:t,visible:!0,opacity:1,blend:`normal`,canvas:B(i)}}let l=e=>e.canvas.getContext(`2d`,{willReadFrequently:!0}),u=[],d=[],f=_(0),p=0,m=t=>t.type===`pixels`?e*n*4:1024;function h(e){for(u.push(e),p+=m(e);p>i&&u.length>1;)p-=m(u.shift());d.length=0,f.value++}function g(t){h({type:`pixels`,id:t.id,data:l(t).getImageData(0,0,e,n)})}function v(){h({type:`layers`,list:a.map(e=>({...e})),active:o.value})}function y(t){if(t.type===`pixels`){let r=a.find(e=>e.id===t.id);if(!r)return t;let i=l(r),o=i.getImageData(0,0,e,n);return i.putImageData(t.data,0,0),{type:`pixels`,id:t.id,data:o}}let r={type:`layers`,list:a.map(e=>({...e})),active:o.value};return a.splice(0,a.length,...t.list.map(e=>({...e}))),o.value=a.some(e=>e.id===t.active)?t.active:a.at(-1)?.id??null,r}function b(){u.length&&(d.push(y(u.pop())),f.value++)}function x(){d.length&&(u.push(y(d.pop())),f.value++)}let S=I(()=>(f.value,u.length>0)),C=I(()=>(f.value,d.length>0));function w(e,t=null,{above:n=!0}={}){v();let r=c(e,t),i=a.findIndex(e=>e.id===o.value);return a.splice(n&&i>=0?i+1:a.length,0,r),o.value=r.id,f.value++,r}function T(){let t=s.value;if(!t)return;let r=Gg(e,n);r.getContext(`2d`).drawImage(t.canvas,0,0);let i=w(`${t.name} copy`,r);i.opacity=t.opacity,i.blend=t.blend}function E(){if(a.length<2||!s.value)return;v();let e=a.indexOf(s.value);a.splice(e,1),o.value=a[Math.max(0,e-1)].id,f.value++}function D(e){let t=a.indexOf(s.value),n=t+e;t<0||n<0||n>=a.length||(v(),a.splice(n,0,a.splice(t,1)[0]),f.value++)}function O(e,t){v(),Object.assign(e,t),f.value++}function k(){let e=a.indexOf(s.value);if(e<=0)return;let t=a[e],n=a[e-1];v(),g(n);let r=l(n);t.visible&&(r.globalAlpha=t.opacity,r.globalCompositeOperation=Ug(t.blend),r.drawImage(t.canvas,0,0),r.globalAlpha=1,r.globalCompositeOperation=`source-over`),a.splice(e,1),o.value=n.id,f.value++}function A(t,r=null){t.clearRect(0,0,e,n);for(let i of a)i.visible&&(t.globalAlpha=i.opacity,t.globalCompositeOperation=Ug(i.blend),r&&r.id===i.id?t.drawImage(r.canvas??i.canvas,r.dx??0,r.dy??0,e,n):t.drawImage(i.canvas,0,0));t.globalAlpha=1,t.globalCompositeOperation=`source-over`}function j(){let t=Gg(e,n).getContext(`2d`,{willReadFrequently:!0});return A(t),t.getImageData(0,0,e,n)}let M=t({mask:null,edges:null,version:0}),N=B(Gg(e,n));function P(t,r=`replace`){let i=t;if(r!==`replace`&&M.mask&&t){i=new Uint8Array(M.mask);for(let e=0;e<i.length;e++)i[e]=r===`add`?Math.max(i[e],t[e]):Math.max(0,i[e]-t[e])}else r===`subtract`&&!M.mask&&(i=null);i&&!i.some(e=>e)&&(i=null),M.mask=i?B(i):null,M.edges=i?B(dm(i,e,n)):null;let a=N.getContext(`2d`);if(a.clearRect(0,0,e,n),i){let t=a.createImageData(e,n);for(let e=0;e<i.length;e++)t.data[e*4+3]=i[e];a.putImageData(t,0,0)}M.version++}function F(){P(new Uint8Array(e*n).fill(255))}function ee(){P(null)}function L(){let t=new Uint8Array(e*n);for(let e=0;e<t.length;e++)t[e]=255-(M.mask?M.mask[e]:255);P(t)}function R(t){if(!M.mask||t<=0)return;let r=Gg(e,n).getContext(`2d`,{willReadFrequently:!0});r.filter=`blur(${t}px)`,r.drawImage(N,0,0);let i=r.getImageData(0,0,e,n).data,a=new Uint8Array(e*n);for(let e=0;e<a.length;e++)a[e]=i[e*4+3];P(a)}function z(t){let r=Gg(e,n).getContext(`2d`,{willReadFrequently:!0});r.fillStyle=`#fff`,r.strokeStyle=`#fff`,t(r);let i=r.getImageData(0,0,e,n).data,a=new Uint8Array(e*n);for(let e=0;e<a.length;e++)a[e]=i[e*4+3];return a}let te=c(`Texture`);l(te).putImageData(r,0,0),a.push(te),o.value=te.id;function ne(){for(let e of a)e.canvas.width=0,e.canvas.height=0;a.length=0,u.length=0,d.length=0,N.width=N.height=0}return t({width:e,height:n,layers:a,activeId:o,active:s,version:f,canUndo:S,canRedo:C,selection:M,selCanvas:N,ctxOf:l,rememberPixels:g,rememberLayers:v,undo:b,redo:x,addLayer:w,duplicateLayer:T,removeLayer:E,moveLayer:D,setLayer:O,mergeDown:k,composite:A,flatten:j,setSelection:P,selectAll:F,deselect:ee,invertSelection:L,featherSelection:R,maskFromPath:z,dispose:ne,changed:()=>f.value>0})}var qg={class:`hidden text-xs text-fg-subtle md:inline`},Jg={class:`flex h-full min-h-0`},Yg={class:`flex w-12 shrink-0 flex-col items-center gap-0.5 overflow-y-auto border-r border-border py-2`},Xg={key:0,class:`my-1 h-px w-6 bg-border`},Zg=[`title`,`aria-label`,`onClick`],Qg={key:0,class:`font-mono text-sm font-bold`},$g={class:`relative my-1 size-9`,title:`Main and second colour (X swaps, D resets)`},e_={class:`flex min-w-0 flex-1 flex-col`},t_={class:`flex min-h-10 flex-wrap items-center gap-x-4 gap-y-1 border-b border-border px-3 py-1.5 text-xs text-fg-muted`},n_={class:`font-medium text-fg`},r_={class:`flex items-center gap-1.5`},i_={class:`w-12 font-mono`},a_={class:`flex items-center gap-1.5`},o_={class:`w-9 font-mono`},s_={key:0,class:`flex items-center gap-1.5`},c_={class:`flex items-center gap-1.5`},l_={key:1,class:`flex rounded border border-border p-0.5`},u_=[`onClick`],d_={class:`flex items-center gap-1.5`},f_={class:`w-8 font-mono`},p_={class:`flex items-center gap-1.5`},m_={class:`flex items-center gap-1.5`},h_={key:0,class:`flex items-center gap-1.5`},g_={class:`flex items-center gap-1.5`},__=[`value`],v_={class:`flex items-center gap-1.5`},y_={class:`flex items-center gap-1.5`},b_={key:0},x_={key:5},S_={key:6},C_={key:7},w_={key:8},T_={class:`ml-auto`},E_={key:0,class:`absolute inset-0 grid place-items-center text-sm text-fg-muted`},D_={class:`grid min-h-full min-w-full place-items-center p-6`},O_=[`src`],k_={key:0,class:`flex w-72 shrink-0 flex-col overflow-y-auto border-l border-border text-sm`},A_={key:0,class:`space-y-3 border-b border-border p-4`},j_={class:`truncate text-xs text-fg-muted`},M_=[`value`],N_={class:`flex items-center gap-2 text-xs text-fg-muted`},P_={class:`flex gap-2`},F_={key:1,class:`space-y-3 border-b border-border p-4`},I_={class:`label`},L_={class:`text-xs text-fg-subtle`},R_={class:`flex items-center gap-2 text-xs text-fg-muted`},z_={class:`block text-xs text-fg-muted`},B_={key:1,class:`flex items-center gap-2 text-xs text-fg-muted`},V_={class:`block text-xs text-fg-muted`},H_=[`min`,`max`],U_={class:`block text-xs text-fg-muted`},W_={class:`block text-xs text-fg-muted`},G_={class:`block text-xs text-fg-muted`},K_={class:`block text-xs text-fg-muted`},q_={class:`block text-xs text-fg-muted`},J_={class:`block text-xs text-fg-muted`},Y_={class:`block text-xs text-fg-muted`},X_={class:`block text-xs text-fg-muted`},Z_={key:3,class:`block text-xs text-fg-muted`},Q_={class:`block text-xs text-fg-muted`},$_={class:`block text-xs text-fg-muted`},ev={class:`flex gap-2 pt-1`},tv={class:`space-y-2 border-b border-border p-4`},nv={class:`flex items-center gap-2 text-xs`},rv={class:`flex items-center gap-1.5`},iv={class:`flex flex-wrap gap-1`},av=[`title`,`onClick`],ov={class:`flex flex-wrap gap-1`},sv=[`title`,`onClick`],cv={class:`space-y-2 border-b border-border p-4`},lv={class:`flex flex-wrap gap-1.5 text-xs`},uv=[`disabled`],dv=[`disabled`],fv={class:`flex flex-wrap gap-1.5 text-xs`},pv=[`disabled`],mv={class:`text-[11px] text-fg-subtle`},hv={class:`space-y-2 border-b border-border p-4`},gv={class:`grid grid-cols-2 gap-1.5`},_v=[`onClick`],vv={class:`space-y-2 p-4`},yv={class:`flex items-center justify-between`},bv={class:`text-[11px] text-fg-subtle`},xv=[`value`],Sv=[`value`],Cv={class:`flex items-center gap-2 text-xs text-fg-muted`},wv=[`value`],Tv={class:`w-9 text-right font-mono`},Ev={class:`max-h-56 space-y-0.5 overflow-y-auto`},Dv=[`onClick`],Ov=[`title`,`onClick`],kv=[`onDblclick`],Av={class:`font-mono text-[10px] text-fg-subtle`},jv={class:`flex flex-wrap gap-1`},Mv=[`disabled`],Nv=[`disabled`],Pv={class:`flex items-center gap-2 pt-2 text-xs text-fg-muted`},Fv=[`disabled`],Iv=[`disabled`],Lv={class:`ml-auto flex items-center gap-1.5`},Rv={class:`flex gap-1.5 text-xs`},zv=[`disabled`],Bv=[`disabled`],Vv=[`disabled`],Hv=de({__name:`TextureEditor`,props:{textureKey:{type:String,required:!0},garmentId:String},emits:[`close`],setup(n,{emit:i}){let y=n,b=i,S=Du(),C=I(()=>S.texture(y.textureKey)),D=I(()=>S.garment(y.garmentId)),A=I(()=>D.value?.variants.find(e=>e.texture===y.textureKey)??null),j=_(!0),N=_(!1),F=_(null),B=_(null),te=_(null),ne=_(null),re=_(null),V=_(null),ie=_(null),H=s(null),U=0,W=0,oe=null,se=null,ce=[{name:`move`,icon:`move`,label:`Move layer (V)`,key:`v`},{name:`select`,icon:`isolate`,label:`Rectangle / ellipse select (M)`,key:`m`},{name:`lasso`,icon:`eraser`,label:`Lasso select (L)`,key:`l`,glyph:`L`},{name:`wand`,icon:`pipette`,label:`Magic wand: select by colour (W)`,key:`w`,glyph:`W`},{name:`part`,icon:`shirt`,label:`Select a garment part from the UV layout (U)`,key:`u`},null,{name:`brush`,icon:`brush`,label:`Brush (B)`,key:`b`},{name:`eraser`,icon:`eraser`,label:`Eraser: makes see-through (E)`,key:`e`},{name:`restore`,icon:`reset`,label:`Restore original (R)`,key:`r`},{name:`fill`,icon:`layers`,label:`Fill by colour (K)`,key:`k`,glyph:`K`},{name:`gradient`,icon:`layers`,label:`Gradient (G)`,key:`g`,glyph:`G`},{name:`clone`,icon:`files`,label:`Clone stamp: Alt+click picks the source (S)`,key:`s`},null,{name:`text`,icon:`list`,label:`Text (T)`,key:`t`,glyph:`T`},{name:`picture`,icon:`image`,label:`Place a picture (P)`,key:`p`},{name:`pick`,icon:`pipette`,label:`Pick a colour: Alt+click for the second colour (I)`,key:`i`},{name:`hand`,icon:`move`,label:`Hand: drag to scroll, or hold Space (H)`,key:`h`,glyph:`H`}],G=t({name:`brush`,size:24,opacity:1,softness:.3,tolerance:20,contiguous:!0,sampleAll:!1,shape:`rect`,gradient:`fg-bg`,font:`Arial`,fontSize:64,bold:!0,text:`TEXT`,feather:4}),K=t({fg:`#e6e8eb`,bg:`#14181d`,recent:[],palette:[]}),ue=t({zoom:1,uv:!1}),J=t({bitmap:null,url:null,x:0,y:0,w:0,h:0,opacity:1,blend:`normal`,name:``}),de=t({at:null}),Y=t({type:null,p:{}}),X=[{type:`hsl`,label:`Hue / saturation`,p:{hue:0,saturation:0,lightness:0,colorize:!1}},{type:`replaceColor`,label:`Replace colour`,p:{color:`#ff0000`,tolerance:25,hue:0,saturation:0,lightness:0}},{type:`brightnessContrast`,label:`Brightness / contrast`,p:{brightness:0,contrast:0}},{type:`levels`,label:`Levels`,p:{inBlack:0,gamma:1,inWhite:255,outBlack:0,outWhite:255}},{type:`blur`,label:`Blur`,p:{radius:2}},{type:`sharpen`,label:`Sharpen`,p:{radius:1.5,amount:.8}}],fe=[`Arial`,`Arial Black`,`Impact`,`Georgia`,`Times New Roman`,`Courier New`,`Trebuchet MS`,`Verdana`,`Comic Sans MS`];O(async()=>{let e=await S.getTexture(y.textureKey,16384);U=e.width,W=e.height,oe=new ImageData(new Uint8ClampedArray(e.rgba),U,W),se=document.createElement(`canvas`),se.width=U,se.height=W,se.getContext(`2d`).putImageData(oe,0,0),H.value=Kg(U,W,oe),K.palette=fm(oe.data,14),j.value=!1,await r();for(let e of[B.value,te.value,ne.value,re.value,V.value])e.width=U,e.height=W;me(),ge(),Z(),window.addEventListener(`keydown`,ct,!0),window.addEventListener(`keyup`,lt,!0)}),f(()=>{window.removeEventListener(`keydown`,ct,!0),window.removeEventListener(`keyup`,lt,!0),clearTimeout(ve),J.bitmap?.close(),J.url&&URL.revokeObjectURL(J.url),S.setPreview(y.textureKey,null),H.value?.dispose(),oe=null,se&&(se.width=se.height=0)}),a(()=>H.value?.version,()=>{me(),ye()}),a(()=>H.value?.selection.version,he),a(()=>ue.uv,ge);function Z(){let e=F.value.getBoundingClientRect();ue.zoom=Math.min(1,(e.width-48)/U,(e.height-48)/W)}let pe=null;function me(){H.value&&B.value&&H.value.composite(B.value.getContext(`2d`),pe)}function he(){let e=ne.value;if(!e||!H.value)return;let t=e.getContext(`2d`);t.clearRect(0,0,U,W);let n=H.value.selection.edges;if(!n)return;let r=t.createImageData(U,W);for(let e=0;e<n.length;e++){if(!n[e])continue;let t=e*4,i=(e%U+Math.floor(e/U))%8<4;r.data[t]=i?0:34,r.data[t+1]=i?0:211,r.data[t+2]=i?0:238,r.data[t+3]=255}t.putImageData(r,0,0)}function ge(){let e=V.value?.getContext(`2d`);if(e&&(e.clearRect(0,0,U,W),ue.uv)){e.strokeStyle=`rgba(34, 211, 238, 0.55)`,e.lineWidth=Math.max(1,U/1024),e.beginPath();for(let t of xe())e.moveTo(t[0],t[1]),e.lineTo(t[2],t[3]),e.lineTo(t[4],t[5]),e.closePath();e.stroke()}}let _e=()=>{let e=re.value.getContext(`2d`);return e.clearRect(0,0,U,W),e},ve=null;function ye(){clearTimeout(ve),ve=setTimeout(()=>{if(!B.value)return;let e=Math.min(1,1024/Math.max(U,W)),t=Math.max(1,Math.round(U*e)),n=Math.max(1,Math.round(W*e)),r=new OffscreenCanvas(t,n).getContext(`2d`);r.drawImage(B.value,0,0,t,n),S.setPreview(y.textureKey,{rgba:r.getImageData(0,0,t,n).data,width:t,height:n,hasAlpha:!0})},120)}let be=null;function xe(){if(be)return be.tris;let e=[],t=D.value;for(let n of t?.geometry??[])for(let t of n.geometries){let{uvs:n,indices:r}=t;for(let t=0;t<r.length;t+=3){let i=r[t]*2,a=r[t+1]*2,o=r[t+2]*2,s=Math.floor(n[i]),c=Math.floor(n[i+1]);e.push([(n[i]-s)*U,(n[i+1]-c)*W,(n[a]-s)*U,(n[a+1]-c)*W,(n[o]-s)*U,(n[o+1]-c)*W])}}let n=new Int32Array(e.length).map((e,t)=>t),r=e=>{for(;n[e]!==e;)n[e]=n[n[e]],e=n[e];return e},i=new Map;return e.forEach((e,t)=>{for(let a=0;a<6;a+=2){let o=`${Math.round(e[a]*8)},${Math.round(e[a+1]*8)}`,s=i.get(o);if(s===void 0)i.set(o,t);else{let e=r(s),i=r(t);e!==i&&(n[e]=i)}}}),be={tris:e,part:e.map((e,t)=>r(t))},e}function Se(e){let t=xe(),n=t.findIndex(t=>{let n=(t[3]-t[5])*(t[0]-t[4])+(t[4]-t[2])*(t[1]-t[5]);if(!n)return!1;let r=((t[3]-t[5])*(e.x-t[4])+(t[4]-t[2])*(e.y-t[5]))/n,i=((t[5]-t[1])*(e.x-t[4])+(t[0]-t[4])*(e.y-t[5]))/n;return r>=0&&i>=0&&r+i<=1});if(n<0)return null;let r=be.part[n];return H.value.maskFromPath(e=>{e.lineWidth=2,e.lineJoin=`round`,t.forEach((t,n)=>{be.part[n]===r&&(e.beginPath(),e.moveTo(t[0],t[1]),e.lineTo(t[2],t[3]),e.lineTo(t[4],t[5]),e.closePath(),e.fill(),e.stroke())})})}function Ce(e){let t=te.value.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width*U,y:(e.clientY-t.top)/t.height*W}}let we=e=>e.shiftKey?`add`:e.altKey?`subtract`:`replace`,Te=()=>H.value.ctxOf(H.value.active).getImageData(0,0,U,W),Ee=()=>B.value.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,U,W);function De(e){K.recent=[e,...K.recent.filter(t=>t!==e)].slice(0,10)}let Oe=null,ke=_(!1),Ae=I(()=>ke.value?`hand`:G.name);function je(e){if(j.value||!H.value)return;if(e.button===1||Ae.value===`hand`){Oe={kind:`hand`,x:e.clientX,y:e.clientY,sx:F.value.scrollLeft,sy:F.value.scrollTop},e.target.setPointerCapture(e.pointerId);return}if(e.button!==0)return;let t=Ce(e),n=G.name;if(n===`pick`){let n=B.value.getContext(`2d`,{willReadFrequently:!0}).getImageData(Math.floor(t.x),Math.floor(t.y),1,1).data,r=nm(n[0],n[1],n[2]);e.altKey?K.bg=r:(K.fg=r,De(r))}else if(n===`wand`){let n=um(G.sampleAll?Ee().data:Te().data,U,W,t.x,t.y,G.tolerance,G.contiguous);H.value.setSelection(n,we(e))}else if(n===`part`){let n=Se(t);n&&H.value.setSelection(n,we(e))}else n===`fill`?ze(t):n===`text`?(de.at=t,Ge()):n!==`picture`&&(e.target.setPointerCapture(e.pointerId),n===`select`||n===`lasso`||n===`gradient`?Oe={kind:n,start:t,end:t,points:[t],mode:we(e)}:n===`move`?Oe={kind:`move`,start:t,dx:0,dy:0}:n===`clone`&&e.altKey?(Fe.source=t,Fe.offset=null):(n!==`clone`||Fe.source)&&(Oe={kind:`paint`,last:t},n===`clone`&&(Fe.offset||={x:Fe.source.x-t.x,y:Fe.source.y-t.y},Fe.from=document.createElement(`canvas`),Fe.from.width=U,Fe.from.height=W,Fe.from.getContext(`2d`).drawImage(G.sampleAll?B.value:H.value.active.canvas,0,0)),te.value.getContext(`2d`).clearRect(0,0,U,W),Ie(t),Le()))}function Me(e){if(!Oe)return;if(Oe.kind===`hand`){F.value.scrollLeft=Oe.sx-(e.clientX-Oe.x),F.value.scrollTop=Oe.sy-(e.clientY-Oe.y);return}let t=Ce(e);if(Oe.kind===`paint`){let e=Math.hypot(t.x-Oe.last.x,t.y-Oe.last.y),n=Math.max(1,G.size*.15);for(let r=n;r<=e;r+=n)Ie({x:Oe.last.x+(t.x-Oe.last.x)*r/e,y:Oe.last.y+(t.y-Oe.last.y)*r/e});e>=n&&(Oe.last=t,Le());return}if(Oe.kind===`move`){Oe.dx=t.x-Oe.start.x,Oe.dy=t.y-Oe.start.y,pe={id:H.value.activeId,dx:Oe.dx,dy:Oe.dy},me();return}Oe.end=t,Oe.kind===`lasso`&&Oe.points.push(t);let n=_e();n.strokeStyle=`#22d3ee`,n.lineWidth=Math.max(1,U/512),n.setLineDash([U/512*6,U/512*4]),n.beginPath(),Oe.kind===`select`?Pe(n,Oe.start,t):Oe.kind===`lasso`?Oe.points.forEach((e,t)=>t?n.lineTo(e.x,e.y):n.moveTo(e.x,e.y)):(n.moveTo(Oe.start.x,Oe.start.y),n.lineTo(t.x,t.y)),n.stroke()}function Ne(){let e=Oe;if(Oe=null,!e||e.kind===`hand`)return;let t=H.value;if(e.kind===`paint`)return Re();if(_e(),e.kind===`move`){if(pe=null,!e.dx&&!e.dy)return me();let n=t.active;t.rememberPixels(n);let r=document.createElement(`canvas`);r.width=U,r.height=W,r.getContext(`2d`).drawImage(n.canvas,0,0);let i=t.ctxOf(n);i.clearRect(0,0,U,W),i.drawImage(r,e.dx,e.dy),r.width=0,t.version++}else{if(e.kind===`select`)return Math.abs(e.end.x-e.start.x)<2&&Math.abs(e.end.y-e.start.y)<2?e.mode===`replace`&&t.deselect():t.setSelection(t.maskFromPath(t=>{t.beginPath(),Pe(t,e.start,e.end),t.fill()}),e.mode);if(e.kind===`lasso`)return e.points.length<3?void 0:t.setSelection(t.maskFromPath(t=>{t.beginPath(),e.points.forEach((e,n)=>n?t.lineTo(e.x,e.y):t.moveTo(e.x,e.y)),t.closePath(),t.fill()}),e.mode);if(e.kind===`gradient`)return Ue(e.start,e.end)}}function Pe(e,t,n){let r=Math.min(t.x,n.x),i=Math.min(t.y,n.y),a=Math.abs(n.x-t.x),o=Math.abs(n.y-t.y);G.shape===`ellipse`?e.ellipse(r+a/2,i+o/2,a/2,o/2,0,0,Math.PI*2):e.rect(r,i,a,o)}let Fe=t({source:null,offset:null,from:null});function Ie(e){let t=te.value.getContext(`2d`),n=G.size/2;if(G.name===`clone`){t.save(),t.beginPath(),t.arc(e.x,e.y,n,0,Math.PI*2),t.clip(),t.drawImage(Fe.from,Fe.offset.x,Fe.offset.y),t.restore();return}let r=G.name===`brush`?K.fg:`#ffffff`,i=t.createRadialGradient(e.x,e.y,0,e.x,e.y,n);i.addColorStop(0,r),i.addColorStop(Math.max(0,1-G.softness),r),i.addColorStop(1,r+`00`),t.fillStyle=G.softness>0?i:r,t.beginPath(),t.arc(e.x,e.y,n,0,Math.PI*2),t.fill()}function Le(){if(!H.value.selection.mask)return;let e=te.value.getContext(`2d`);e.globalCompositeOperation=`destination-in`,e.drawImage(H.value.selCanvas,0,0),e.globalCompositeOperation=`source-over`}function Re(){let e=H.value,t=e.active,n=te.value;e.rememberPixels(t);let r=e.ctxOf(t);if(r.globalAlpha=G.opacity,G.name===`eraser`)r.globalCompositeOperation=`destination-out`,r.drawImage(n,0,0);else if(G.name===`restore`){let e=document.createElement(`canvas`);e.width=U,e.height=W;let t=e.getContext(`2d`);t.drawImage(se,0,0),t.globalCompositeOperation=`destination-in`,t.drawImage(n,0,0),r.drawImage(e,0,0),e.width=0}else r.drawImage(n,0,0),G.name===`brush`&&De(K.fg);r.globalAlpha=1,r.globalCompositeOperation=`source-over`,n.getContext(`2d`).clearRect(0,0,U,W),Fe.from&&=(Fe.from.width=0,null),e.version++}function ze(e){let t=H.value,n=Te(),r=um(G.sampleAll?Ee().data:n.data,U,W,e.x,e.y,G.tolerance,G.contiguous);if(t.selection.mask){let e=t.selection.mask;r=r.map((t,n)=>t*e[n]/255)}Be(r,K.fg,G.opacity)}function Be(e,t,n=1){let r=H.value,i=r.active,a=Te(),[o,s,c]=tm(t);r.rememberPixels(i);let l=a.data;for(let t=0;t<e.length;t++){let r=e[t]/255*n;if(!r)continue;let i=t*4;l[i]+=(o-l[i])*r,l[i+1]+=(s-l[i+1])*r,l[i+2]+=(c-l[i+2])*r,l[i+3]+=(255-l[i+3])*r}r.ctxOf(i).putImageData(a,0,0),De(t),r.version++}function Ve(e){Be(H.value.selection.mask??new Uint8Array(U*W).fill(255),e)}function He(){let e=H.value;if(!e.selection.mask)return;let t=e.active;e.rememberPixels(t);let n=e.ctxOf(t);n.globalCompositeOperation=`destination-out`,n.drawImage(e.selCanvas,0,0),n.globalCompositeOperation=`source-over`,e.version++}function Ue(e,t){let n=H.value,r=document.createElement(`canvas`);r.width=U,r.height=W;let i=r.getContext(`2d`),a=i.createLinearGradient(e.x,e.y,t.x,t.y);a.addColorStop(0,K.fg),a.addColorStop(1,G.gradient===`fg-bg`?K.bg:K.fg+`00`),i.fillStyle=a,i.fillRect(0,0,U,W),n.selection.mask&&(i.globalCompositeOperation=`destination-in`,i.drawImage(n.selCanvas,0,0));let o=n.active;n.rememberPixels(o);let s=n.ctxOf(o);s.globalAlpha=G.opacity,s.drawImage(r,0,0),s.globalAlpha=1,r.width=0,n.version++}function We(){return`${G.bold?`bold `:``}${G.fontSize}px "${G.font}"`}function Ge(){let e=_e();de.at&&G.name===`text`&&(e.font=We(),e.fillStyle=K.fg,e.textBaseline=`middle`,e.textAlign=`center`,e.fillText(G.text,de.at.x,de.at.y))}a(()=>[G.text,G.font,G.fontSize,G.bold,K.fg,G.name],Ge);function Ke(){if(!de.at||!G.text)return;let e=document.createElement(`canvas`);e.width=U,e.height=W;let t=e.getContext(`2d`);t.font=We(),t.fillStyle=K.fg,t.textBaseline=`middle`,t.textAlign=`center`,t.fillText(G.text,de.at.x,de.at.y),H.value.addLayer(`Text: ${G.text.slice(0,20)}`,e),De(K.fg),de.at=null,_e(),G.name=`move`}async function qe(e){let t=e.target.files?.[0];if(e.target.value=``,!t)return;J.bitmap?.close(),J.url&&URL.revokeObjectURL(J.url),J.bitmap=await createImageBitmap(t),J.url=URL.createObjectURL(t),J.name=t.name;let n=Math.min(1,U*.4/J.bitmap.width,W*.4/J.bitmap.height);J.w=J.bitmap.width*n,J.h=J.bitmap.height*n,J.x=(U-J.w)/2,J.y=(W-J.h)/2,G.name=`picture`}let Je=null;function Ye(e,t){e.preventDefault(),e.stopPropagation(),e.target.setPointerCapture(e.pointerId),Je={mode:t,start:Ce(e),x:J.x,y:J.y,w:J.w,h:J.h}}function Xe(e){if(!Je)return;let t=Ce(e),n=t.x-Je.start.x,r=t.y-Je.start.y;if(Je.mode===`move`)J.x=Je.x+n,J.y=Je.y+r;else{let e=Math.max(8,Je.w+n);J.w=e,J.h=e/(Je.w/Je.h)}}function Ze(){if(!J.bitmap)return;let e=document.createElement(`canvas`);e.width=U,e.height=W,e.getContext(`2d`).drawImage(J.bitmap,J.x,J.y,J.w,J.h);let t=H.value.addLayer(J.name.replace(/\.[a-z]+$/i,``),e);t.opacity=J.opacity,t.blend=J.blend,Qe(),G.name=`move`}function Qe(){J.bitmap?.close(),J.url&&URL.revokeObjectURL(J.url),J.bitmap=null,J.url=null,G.name===`picture`&&(G.name=`brush`)}let $e=null;function et(e){let t=H.value,n=t.active,r=Te(),i=Math.min(1,1024/Math.max(U,W)),a=Math.max(1,Math.round(U*i)),o=Math.max(1,Math.round(W*i)),s=document.createElement(`canvas`);s.width=a,s.height=o;let c=s.getContext(`2d`,{willReadFrequently:!0});c.drawImage(n.canvas,0,0,a,o);let l=c.getImageData(0,0,a,o),u=null;if(t.selection.mask){let e=document.createElement(`canvas`);e.width=a,e.height=o;let n=e.getContext(`2d`,{willReadFrequently:!0});n.drawImage(t.selCanvas,0,0,a,o);let r=n.getImageData(0,0,a,o).data;u=new Uint8Array(a*o);for(let e=0;e<u.length;e++)u[e]=r[e*4+3];e.width=0}$e={full:r,small:l,maskSmall:u,scale:i,canvas:s,w:a,h:o},Y.type=e.type,Y.p={...e.p},it()}let tt=(e,t,n,r)=>{let i=document.createElement(`canvas`);i.width=t,i.height=n;let a=document.createElement(`canvas`);a.width=t,a.height=n,a.getContext(`2d`).putImageData(e,0,0);let o=i.getContext(`2d`,{willReadFrequently:!0});o.filter=`blur(${r}px)`,o.drawImage(a,0,0);let s=o.getImageData(0,0,t,n).data;return i.width=a.width=0,s};function nt(e,t,n,r,i){let{type:a,p:o}=Y;return a===`blur`?lm(e.data,tt(e,t,n,o.radius*i),r):a===`sharpen`?cm(e.data,tt(e,t,n,o.radius*i),o.amount,r):sm(e.data,a,o,r)}let rt=0;function it(){$e&&(cancelAnimationFrame(rt),rt=requestAnimationFrame(()=>{if(!$e)return;let e=nt($e.small,$e.w,$e.h,$e.maskSmall,$e.scale);$e.canvas.getContext(`2d`).putImageData(new ImageData(e,$e.w,$e.h),0,0),pe={id:H.value.activeId,canvas:$e.canvas},me(),ye()}))}a(()=>Y.p,it,{deep:!0});function at(){let e=H.value,t=nt($e.full,U,W,e.selection.mask,1);e.rememberPixels(e.active),e.ctxOf(e.active).putImageData(new ImageData(t,U,W),0,0),ot(),e.version++}function ot(){cancelAnimationFrame(rt),$e&&($e.canvas.width=0),$e=null,Y.type=null,pe=null,me(),ye()}function st(e){let t=H.value,n=sm(Te().data,e,{},t.selection.mask);t.rememberPixels(t.active),t.ctxOf(t.active).putImageData(new ImageData(n,U,W),0,0),t.version++}function ct(e){if(e.target.closest?.(`input,textarea,select`))return;let t=H.value;if(!t)return;let n=e.ctrlKey||e.metaKey,r=e.key.toLowerCase(),i=!0;if(n&&r===`z`)e.shiftKey?t.redo():t.undo();else if(n&&r===`y`)t.redo();else if(n&&r===`a`)t.selectAll();else if(n&&r===`d`)t.deselect();else if(n&&e.shiftKey&&r===`i`)t.invertSelection();else if(n&&r===`j`)t.duplicateLayer();else if(n&&r===`e`)t.mergeDown();else if(n)i=!1;else if(e.key===` `)ke.value=!0;else if(e.key===`Delete`||e.key===`Backspace`&&!e.altKey)He();else if(e.key===`Backspace`&&e.altKey)Ve(K.fg);else if(r===`x`)[K.fg,K.bg]=[K.bg,K.fg];else if(r===`d`)K.fg=`#000000`,K.bg=`#ffffff`;else if(r===`[`)G.size=Math.max(1,Math.round(G.size/1.25));else if(r===`]`)G.size=Math.min(1024,Math.round(G.size*1.25));else if(r===`m`&&G.name===`select`)G.shape=G.shape===`rect`?`ellipse`:`rect`;else{let e=ce.find(e=>e?.key===r);e?e.name===`picture`?ie.value.click():G.name=e.name:i=!1}i&&(e.preventDefault(),e.stopPropagation())}function lt(e){e.key===` `&&(ke.value=!1)}function ut(e){(e.ctrlKey||e.metaKey)&&(e.preventDefault(),ue.zoom=Math.min(16,Math.max(.05,ue.zoom*(e.deltaY<0?1.15:1/1.15))))}function dt(){(!H.value?.changed()||window.confirm(`Close the texture editor? Your changes are not saved.`))&&b(`close`)}async function ft(){N.value=!0;try{let e=H.value.flatten();await S.applyTexture(y.textureKey,{rgba:e.data,width:U,height:W},`Edited ${C.value.name}`),b(`close`)}catch{}finally{N.value=!1}}async function pt(){N.value=!0;try{let e=H.value.flatten();await S.runEdit(`addVariant`,{garmentId:y.garmentId,from:A.value.letter,pixels:{width:U,height:W,rgba:e.data}})&&b(`close`)}finally{N.value=!1}}async function mt(){let e=H.value.flatten();le(await ae(e.data,U,W),`${C.value.name}.png`)}let ht=I(()=>({hand:`grab`,move:`move`,pick:`crosshair`,text:`text`})[Ae.value]??`crosshair`),gt=e=>`${(e*100).toFixed(4)}%`,_t=I(()=>H.value),vt=I(()=>H.value?[...H.value.layers].reverse():[]),yt=I(()=>ce.find(e=>e?.name===G.name)?.label.replace(/ \(.*\)$/,``).replace(/:.*/,``)??``);return(t,n)=>(e(),x(q,{title:`Edit texture · ${C.value?.name??``}`,full:``,onClose:dt},{header:c(()=>[z(`span`,qg,l(C.value?.width)+` × `+l(C.value?.height)+` · `+l(C.value?.formatName),1)]),footer:c(()=>[n[98]||=z(`p`,{class:`mr-auto hidden text-xs text-fg-subtle lg:block`},`Layers are flattened when you save. Ctrl+scroll zooms, Space+drag scrolls.`,-1),z(`button`,{class:`btn`,disabled:j.value,onClick:mt},[h(P,{name:`download`}),n[96]||=L(`PNG`,-1)],8,zv),z(`button`,{class:`btn`,onClick:dt},`Cancel`),A.value?(e(),m(`button`,{key:0,class:`btn`,disabled:j.value||N.value||D.value?.variants.length>=26,title:`Keep this colour as it is and add the edited picture as a new colour`,onClick:pt},[h(P,{name:`plus`}),n[97]||=L(`Save as new colour`,-1)],8,Bv)):R(``,!0),z(`button`,{class:`btn-primary`,disabled:j.value||N.value||!C.value?.writable,onClick:ft},[h(P,{name:`save`}),L(l(N.value?`Saving…`:`Save texture`),1)],8,Vv)]),default:c(()=>[z(`div`,Jg,[z(`div`,Yg,[(e(),m(T,null,d(ce,(t,n)=>(e(),m(T,{key:n},[t?(e(),m(`button`,{key:1,class:v([`relative grid size-9 place-items-center rounded-md`,G.name===t.name?`bg-accent/15 text-accent`:`text-fg-muted hover:bg-hover hover:text-fg`]),title:t.label,"aria-label":t.label,onClick:e=>t.name===`picture`?ie.value.click():G.name=t.name},[t.glyph?(e(),m(`span`,Qg,l(t.glyph),1)):(e(),x(P,{key:1,name:t.icon,size:18},null,8,[`name`]))],10,Zg)):(e(),m(`div`,Xg))],64))),64)),n[64]||=z(`div`,{class:`my-1 h-px w-6 bg-border`},null,-1),z(`div`,$g,[z(`label`,{class:`absolute left-0 top-0 size-6 cursor-pointer rounded border border-border-strong`,style:o({background:K.fg})},[u(z(`input`,{"onUpdate:modelValue":n[0]||=e=>K.fg=e,type:`color`,class:`sr-only`},null,512),[[M,K.fg]])],4),z(`label`,{class:`absolute bottom-0 right-0 size-6 cursor-pointer rounded border border-border-strong`,style:o({background:K.bg})},[u(z(`input`,{"onUpdate:modelValue":n[1]||=e=>K.bg=e,type:`color`,class:`sr-only`},null,512),[[M,K.bg]])],4)]),z(`input`,{ref_key:`pictureInput`,ref:ie,type:`file`,accept:`image/png,image/jpeg,image/webp`,class:`hidden`,onChange:qe},null,544)]),z(`div`,e_,[z(`div`,t_,[z(`span`,n_,l(yt.value),1),[`brush`,`eraser`,`restore`,`clone`].includes(G.name)?(e(),m(T,{key:0},[z(`label`,r_,[n[65]||=L(`Size `,-1),u(z(`input`,{"onUpdate:modelValue":n[2]||=e=>G.size=e,type:`range`,min:`1`,max:`512`,class:`w-24 accent-accent`},null,512),[[M,G.size,void 0,{number:!0}]]),z(`span`,i_,l(G.size)+` px`,1)]),z(`label`,a_,[n[66]||=L(`Opacity `,-1),u(z(`input`,{"onUpdate:modelValue":n[3]||=e=>G.opacity=e,type:`range`,min:`0.05`,max:`1`,step:`0.05`,class:`w-20 accent-accent`},null,512),[[M,G.opacity,void 0,{number:!0}]]),z(`span`,o_,l(Math.round(G.opacity*100))+`%`,1)]),G.name===`clone`?R(``,!0):(e(),m(`label`,s_,[n[67]||=L(`Soft `,-1),u(z(`input`,{"onUpdate:modelValue":n[4]||=e=>G.softness=e,type:`range`,min:`0`,max:`1`,step:`0.05`,class:`w-16 accent-accent`},null,512),[[M,G.softness,void 0,{number:!0}]])])),G.name===`clone`?(e(),m(T,{key:1},[z(`label`,c_,[u(z(`input`,{"onUpdate:modelValue":n[5]||=e=>G.sampleAll=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,G.sampleAll]]),n[68]||=L(`All layers`,-1)]),z(`span`,{class:v(Fe.source?``:`text-warn`)},l(Fe.source?`Source set. Alt+click to move it.`:`Alt+click where to copy from first.`),3)],64)):R(``,!0)],64)):G.name===`select`?(e(),m(`div`,l_,[(e(),m(T,null,d([`rect`,`ellipse`],e=>z(`button`,{key:e,class:v([`rounded px-2 py-0.5`,G.shape===e?`bg-hover text-fg`:``]),onClick:t=>G.shape=e},l(e===`rect`?`Rectangle`:`Ellipse`),11,u_)),64))])):G.name===`wand`||G.name===`fill`?(e(),m(T,{key:2},[z(`label`,d_,[n[69]||=L(`Tolerance `,-1),u(z(`input`,{"onUpdate:modelValue":n[6]||=e=>G.tolerance=e,type:`range`,min:`0`,max:`100`,class:`w-24 accent-accent`},null,512),[[M,G.tolerance,void 0,{number:!0}]]),z(`span`,f_,l(G.tolerance),1)]),z(`label`,p_,[u(z(`input`,{"onUpdate:modelValue":n[7]||=e=>G.contiguous=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,G.contiguous]]),n[70]||=L(`Touching only`,-1)]),z(`label`,m_,[u(z(`input`,{"onUpdate:modelValue":n[8]||=e=>G.sampleAll=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,G.sampleAll]]),n[71]||=L(`All layers`,-1)]),G.name===`fill`?(e(),m(`label`,h_,[n[72]||=L(`Opacity `,-1),u(z(`input`,{"onUpdate:modelValue":n[9]||=e=>G.opacity=e,type:`range`,min:`0.05`,max:`1`,step:`0.05`,class:`w-20 accent-accent`},null,512),[[M,G.opacity,void 0,{number:!0}]])])):R(``,!0)],64)):G.name===`gradient`?(e(),m(T,{key:3},[u(z(`select`,{"onUpdate:modelValue":n[10]||=e=>G.gradient=e,class:`field w-auto py-0.5 text-xs`},[...n[73]||=[z(`option`,{value:`fg-bg`},`Main to second colour`,-1),z(`option`,{value:`fg-clear`},`Main colour to see-through`,-1)]],512),[[w,G.gradient]]),z(`label`,g_,[n[74]||=L(`Opacity `,-1),u(z(`input`,{"onUpdate:modelValue":n[11]||=e=>G.opacity=e,type:`range`,min:`0.05`,max:`1`,step:`0.05`,class:`w-20 accent-accent`},null,512),[[M,G.opacity,void 0,{number:!0}]])]),n[75]||=z(`span`,null,`Drag across the texture.`,-1)],64)):G.name===`text`?(e(),m(T,{key:4},[u(z(`input`,{"onUpdate:modelValue":n[12]||=e=>G.text=e,class:`field w-40 py-0.5 text-xs`,placeholder:`Text`},null,512),[[M,G.text]]),u(z(`select`,{"onUpdate:modelValue":n[13]||=e=>G.font=e,class:`field w-auto py-0.5 text-xs`},[(e(),m(T,null,d(fe,e=>z(`option`,{key:e,value:e},l(e),9,__)),64))],512),[[w,G.font]]),z(`label`,v_,[n[76]||=L(`Size `,-1),u(z(`input`,{"onUpdate:modelValue":n[14]||=e=>G.fontSize=e,type:`number`,min:`4`,max:`2000`,class:`field w-16 py-0.5 text-xs`},null,512),[[M,G.fontSize,void 0,{number:!0}]])]),z(`label`,y_,[u(z(`input`,{"onUpdate:modelValue":n[15]||=e=>G.bold=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,G.bold]]),n[77]||=L(`Bold`,-1)]),de.at?(e(),m(`button`,{key:1,class:`btn-primary px-2 py-0.5 text-xs`,onClick:Ke},`Add text layer`)):(e(),m(`span`,b_,`Click where the text goes.`))],64)):G.name===`lasso`?(e(),m(`span`,x_,`Draw around the area. Shift adds, Alt takes away.`)):G.name===`part`?(e(),m(`span`,S_,`Click a part of the garment's layout (a sleeve, a pocket…) to select it.`)):G.name===`move`?(e(),m(`span`,C_,`Drag to move the layer.`)):G.name===`pick`?(e(),m(`span`,w_,`Click to take a colour. Alt+click sets the second colour.`)):R(``,!0),z(`span`,T_,l(Math.round(ue.zoom*100))+`%`,1)]),z(`div`,{ref_key:`stageEl`,ref:F,class:`relative min-h-0 flex-1 overflow-auto bg-[repeating-conic-gradient(#14181d_0%_25%,#101317_0%_50%)] bg-[length:16px_16px]`,onWheel:ut},[j.value?(e(),m(`div`,E_,`Loading the picture…`)):R(``,!0),u(z(`div`,D_,[z(`div`,{class:`relative shadow-2xl shadow-black/60`,style:o({width:`${g(U)*ue.zoom}px`,height:`${g(W)*ue.zoom}px`})},[z(`canvas`,{ref_key:`viewEl`,ref:B,class:`absolute inset-0 size-full`,style:o({imageRendering:ue.zoom>1?`pixelated`:`auto`})},null,4),u(z(`canvas`,{ref_key:`uvEl`,ref:V,class:`pointer-events-none absolute inset-0 size-full`},null,512),[[k,ue.uv]]),z(`canvas`,{ref_key:`antsEl`,ref:ne,class:`pointer-events-none absolute inset-0 size-full`,style:{"image-rendering":`pixelated`}},null,512),z(`canvas`,{ref_key:`guideEl`,ref:re,class:`pointer-events-none absolute inset-0 size-full`},null,512),z(`canvas`,{ref_key:`strokeEl`,ref:te,class:`absolute inset-0 size-full`,style:o({opacity:[`eraser`,`restore`].includes(G.name)?.35:G.opacity,cursor:ht.value,touchAction:`none`}),onPointerdown:je,onPointermove:Me,onPointerup:Ne,onPointercancel:Ne,onContextmenu:n[16]||=E(()=>{},[`prevent`])},null,36),J.url?(e(),m(`div`,{key:0,class:`absolute cursor-move outline outline-1 outline-accent`,style:o({left:gt(J.x/g(U)),top:gt(J.y/g(W)),width:gt(J.w/g(U)),height:gt(J.h/g(W)),touchAction:`none`}),onPointerdown:n[19]||=e=>Ye(e,`move`),onPointermove:Xe,onPointerup:n[20]||=e=>p(Je)?Je.value=null:Je=null},[z(`img`,{src:J.url,alt:``,class:`pointer-events-none size-full select-none`,style:o({opacity:J.opacity,mixBlendMode:J.blend}),draggable:`false`},null,12,O_),z(`span`,{class:`absolute -bottom-1.5 -right-1.5 size-3 cursor-nwse-resize rounded-sm border border-accent bg-canvas`,onPointerdown:n[17]||=e=>Ye(e,`resize`),onPointermove:Xe,onPointerup:n[18]||=e=>p(Je)?Je.value=null:Je=null},null,32)],36)):R(``,!0)],4)],512),[[k,!j.value]])],544)]),_t.value?(e(),m(`div`,k_,[J.url?(e(),m(`section`,A_,[n[80]||=z(`h3`,{class:`label`},`Picture`,-1),z(`p`,j_,l(J.name)+` · drag to move, corner to resize`,1),u(z(`select`,{"onUpdate:modelValue":n[21]||=e=>J.blend=e,class:`field py-1 text-xs`},[(e(!0),m(T,null,d(g(Hg),([t,n])=>(e(),m(`option`,{key:t,value:t},l(n),9,M_))),128))],512),[[w,J.blend]]),z(`label`,N_,[n[78]||=L(`Opacity `,-1),u(z(`input`,{"onUpdate:modelValue":n[22]||=e=>J.opacity=e,type:`range`,min:`0.05`,max:`1`,step:`0.05`,class:`flex-1 accent-accent`},null,512),[[M,J.opacity,void 0,{number:!0}]])]),z(`div`,P_,[z(`button`,{class:`btn-primary flex-1`,onClick:Ze},[h(P,{name:`check`}),n[79]||=L(`Add as layer`,-1)]),z(`button`,{class:`btn`,onClick:Qe},`Cancel`)])])):Y.type?(e(),m(`section`,F_,[z(`h3`,I_,l(X.find(e=>e.type===Y.type).label),1),z(`p`,L_,`On "`+l(_t.value.active?.name)+`"`+l(_t.value.selection.mask?`, inside the selection`:``)+`. The ped shows it as you go.`,1),Y.type===`hsl`||Y.type===`replaceColor`?(e(),m(T,{key:0},[Y.type===`replaceColor`?(e(),m(T,{key:0},[z(`label`,R_,[n[81]||=L(`Colour to change `,-1),u(z(`input`,{"onUpdate:modelValue":n[23]||=e=>Y.p.color=e,type:`color`,class:`h-7 w-10 rounded border border-border-strong bg-transparent`},null,512),[[M,Y.p.color]]),z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Use the main colour (pick one from the texture with I)`,onClick:n[24]||=e=>Y.p.color=K.fg},`Main colour`)]),z(`label`,z_,[L(`Range `+l(Y.p.tolerance),1),u(z(`input`,{"onUpdate:modelValue":n[25]||=e=>Y.p.tolerance=e,type:`range`,min:`1`,max:`100`,class:`w-full accent-accent`},null,512),[[M,Y.p.tolerance,void 0,{number:!0}]])])],64)):R(``,!0),Y.type===`hsl`?(e(),m(`label`,B_,[u(z(`input`,{"onUpdate:modelValue":n[26]||=e=>Y.p.colorize=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,Y.p.colorize]]),n[82]||=L(`Colorize (one colour, keeps the shading)`,-1)])):R(``,!0),z(`label`,V_,[L(`Hue `+l(Y.p.hue),1),u((e(),m(`input`,{key:Y.p.colorize?`c`:`s`,"onUpdate:modelValue":n[27]||=e=>Y.p.hue=e,type:`range`,min:Y.p.colorize?0:-180,max:Y.p.colorize?360:180,class:`hue-track w-full`},null,8,H_)),[[M,Y.p.hue,void 0,{number:!0}]])]),z(`label`,U_,[L(`Saturation `+l(Y.p.saturation),1),u(z(`input`,{"onUpdate:modelValue":n[28]||=e=>Y.p.saturation=e,type:`range`,min:`-100`,max:`100`,class:`w-full accent-accent`},null,512),[[M,Y.p.saturation,void 0,{number:!0}]])]),z(`label`,W_,[L(`Lightness `+l(Y.p.lightness),1),u(z(`input`,{"onUpdate:modelValue":n[29]||=e=>Y.p.lightness=e,type:`range`,min:`-100`,max:`100`,class:`w-full accent-accent`},null,512),[[M,Y.p.lightness,void 0,{number:!0}]])])],64)):Y.type===`brightnessContrast`?(e(),m(T,{key:1},[z(`label`,G_,[L(`Brightness `+l(Y.p.brightness),1),u(z(`input`,{"onUpdate:modelValue":n[30]||=e=>Y.p.brightness=e,type:`range`,min:`-100`,max:`100`,class:`w-full accent-accent`},null,512),[[M,Y.p.brightness,void 0,{number:!0}]])]),z(`label`,K_,[L(`Contrast `+l(Y.p.contrast),1),u(z(`input`,{"onUpdate:modelValue":n[31]||=e=>Y.p.contrast=e,type:`range`,min:`-100`,max:`100`,class:`w-full accent-accent`},null,512),[[M,Y.p.contrast,void 0,{number:!0}]])])],64)):Y.type===`levels`?(e(),m(T,{key:2},[z(`label`,q_,[L(`Shadows `+l(Y.p.inBlack),1),u(z(`input`,{"onUpdate:modelValue":n[32]||=e=>Y.p.inBlack=e,type:`range`,min:`0`,max:`254`,class:`w-full accent-accent`},null,512),[[M,Y.p.inBlack,void 0,{number:!0}]])]),z(`label`,J_,[L(`Midtones `+l(Y.p.gamma.toFixed(2)),1),u(z(`input`,{"onUpdate:modelValue":n[33]||=e=>Y.p.gamma=e,type:`range`,min:`0.1`,max:`3`,step:`0.01`,class:`w-full accent-accent`},null,512),[[M,Y.p.gamma,void 0,{number:!0}]])]),z(`label`,Y_,[L(`Highlights `+l(Y.p.inWhite),1),u(z(`input`,{"onUpdate:modelValue":n[34]||=e=>Y.p.inWhite=e,type:`range`,min:`1`,max:`255`,class:`w-full accent-accent`},null,512),[[M,Y.p.inWhite,void 0,{number:!0}]])]),z(`label`,X_,[L(`Output from `+l(Y.p.outBlack)+` to `+l(Y.p.outWhite)+` `,1),u(z(`input`,{"onUpdate:modelValue":n[35]||=e=>Y.p.outBlack=e,type:`range`,min:`0`,max:`255`,class:`w-full accent-accent`},null,512),[[M,Y.p.outBlack,void 0,{number:!0}]]),u(z(`input`,{"onUpdate:modelValue":n[36]||=e=>Y.p.outWhite=e,type:`range`,min:`0`,max:`255`,class:`w-full accent-accent`},null,512),[[M,Y.p.outWhite,void 0,{number:!0}]])])],64)):Y.type===`blur`?(e(),m(`label`,Z_,[L(`Radius `+l(Y.p.radius)+` px`,1),u(z(`input`,{"onUpdate:modelValue":n[37]||=e=>Y.p.radius=e,type:`range`,min:`0.5`,max:`40`,step:`0.5`,class:`w-full accent-accent`},null,512),[[M,Y.p.radius,void 0,{number:!0}]])])):Y.type===`sharpen`?(e(),m(T,{key:4},[z(`label`,Q_,[L(`Radius `+l(Y.p.radius)+` px`,1),u(z(`input`,{"onUpdate:modelValue":n[38]||=e=>Y.p.radius=e,type:`range`,min:`0.5`,max:`10`,step:`0.5`,class:`w-full accent-accent`},null,512),[[M,Y.p.radius,void 0,{number:!0}]])]),z(`label`,$_,[L(`Amount `+l(Math.round(Y.p.amount*100))+`%`,1),u(z(`input`,{"onUpdate:modelValue":n[39]||=e=>Y.p.amount=e,type:`range`,min:`0.1`,max:`3`,step:`0.1`,class:`w-full accent-accent`},null,512),[[M,Y.p.amount,void 0,{number:!0}]])])],64)):R(``,!0),z(`div`,ev,[z(`button`,{class:`btn-primary flex-1`,onClick:at},[h(P,{name:`check`}),n[83]||=L(`Apply`,-1)]),z(`button`,{class:`btn`,onClick:ot},`Cancel`)])])):(e(),m(T,{key:2},[z(`section`,tv,[n[85]||=z(`h3`,{class:`label`},`Colours`,-1),z(`div`,nv,[z(`label`,rv,[u(z(`input`,{"onUpdate:modelValue":n[40]||=e=>K.fg=e,type:`color`,class:`h-7 w-9 rounded border border-border-strong bg-transparent`},null,512),[[M,K.fg]]),u(z(`input`,{"onUpdate:modelValue":n[41]||=e=>K.fg=e,class:`field w-20 py-0.5 font-mono text-xs`},null,512),[[M,K.fg,void 0,{lazy:!0}]])]),z(`button`,{class:`btn-ghost px-1 text-xs`,title:`Swap (X)`,onClick:n[42]||=e=>[K.fg,K.bg]=[K.bg,K.fg]},`⇄`),u(z(`input`,{"onUpdate:modelValue":n[43]||=e=>K.bg=e,type:`color`,class:`h-7 w-9 rounded border border-border-strong bg-transparent`,title:`Second colour`},null,512),[[M,K.bg]])]),n[86]||=z(`p`,{class:`text-[11px] text-fg-subtle`},`From this texture`,-1),z(`div`,iv,[(e(!0),m(T,null,d(K.palette,t=>(e(),m(`button`,{key:t,class:`size-5 rounded border border-border`,style:o({background:t}),title:t,onClick:e=>K.fg=t},null,12,av))),128))]),K.recent.length?(e(),m(T,{key:0},[n[84]||=z(`p`,{class:`text-[11px] text-fg-subtle`},`Recent`,-1),z(`div`,ov,[(e(!0),m(T,null,d(K.recent,t=>(e(),m(`button`,{key:t,class:`size-5 rounded border border-border`,style:o({background:t}),title:t,onClick:e=>K.fg=t},null,12,sv))),128))])],64)):R(``,!0)]),z(`section`,cv,[n[87]||=z(`h3`,{class:`label`},`Selection`,-1),z(`div`,lv,[z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Ctrl+A`,onClick:n[44]||=e=>_t.value.selectAll()},`All`),z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Ctrl+D`,disabled:!_t.value.selection.mask,onClick:n[45]||=e=>_t.value.deselect()},`None`,8,uv),z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Ctrl+Shift+I`,onClick:n[46]||=e=>_t.value.invertSelection()},`Invert`),z(`button`,{class:`btn px-2 py-0.5 text-xs`,disabled:!_t.value.selection.mask,onClick:n[47]||=e=>_t.value.featherSelection(G.feather)},`Soften `+l(G.feather)+` px`,9,dv)]),z(`div`,fv,[z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Alt+Backspace`,onClick:n[48]||=e=>Ve(K.fg)},`Fill with colour`),z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Delete`,disabled:!_t.value.selection.mask,onClick:He},`Make see-through`,8,pv)]),z(`p`,mv,l(_t.value.selection.mask?`Painting, fills and adjustments stay inside it.`:`Nothing selected: tools work on the whole layer.`),1)]),z(`section`,hv,[n[88]||=z(`h3`,{class:`label`},`Adjust colours`,-1),z(`div`,gv,[(e(),m(T,null,d(X,e=>z(`button`,{key:e.type,class:`btn px-2 py-1 text-xs`,onClick:t=>et(e)},l(e.label),9,_v)),64)),z(`button`,{class:`btn px-2 py-1 text-xs`,onClick:n[49]||=e=>st(`invert`)},`Invert`),z(`button`,{class:`btn px-2 py-1 text-xs`,onClick:n[50]||=e=>st(`desaturate`)},`Black & white`)])])],64)),z(`section`,vv,[z(`div`,yv,[n[89]||=z(`h3`,{class:`label`},`Layers`,-1),z(`span`,bv,l(_t.value.layers.length),1)]),_t.value.active?(e(),m(T,{key:0},[z(`select`,{value:_t.value.active.blend,class:`field py-1 text-xs`,onChange:n[51]||=e=>_t.value.setLayer(_t.value.active,{blend:e.target.value})},[(e(!0),m(T,null,d(g(Hg),([t,n])=>(e(),m(`option`,{key:t,value:t},l(n),9,Sv))),128))],40,xv),z(`label`,Cv,[n[90]||=L(`Opacity `,-1),z(`input`,{value:_t.value.active.opacity,type:`range`,min:`0`,max:`1`,step:`0.01`,class:`flex-1 accent-accent`,onPointerdown:n[52]||=e=>_t.value.rememberLayers(),onInput:n[53]||=e=>{_t.value.active.opacity=Number(e.target.value),_t.value.version++}},null,40,wv),z(`span`,Tv,l(Math.round(_t.value.active.opacity*100))+`%`,1)])],64)):R(``,!0),z(`ul`,Ev,[(e(!0),m(T,null,d(vt.value,n=>(e(),m(`li`,{key:n.id,class:v([`flex items-center gap-1.5 rounded-md px-1.5 py-1 text-xs`,n.id===_t.value.activeId?`bg-accent/10 text-accent`:`hover:bg-hover`]),onClick:e=>_t.value.activeId=n.id},[z(`button`,{class:v([`grid size-5 place-items-center`,n.visible?`text-fg`:`text-fg-subtle`]),title:n.visible?`Hide`:`Show`,onClick:E(e=>_t.value.setLayer(n,{visible:!n.visible}),[`stop`])},[h(P,{name:n.visible?`eye`:`x`,size:12},null,8,[`name`])],10,Ov),z(`span`,{class:`flex-1 truncate`,onDblclick:E(e=>{(()=>{let e=t.window.prompt(`Layer name`,n.name);e&&_t.value.setLayer(n,{name:e})})()},[`stop`])},l(n.name),41,kv),z(`span`,Av,l(n.blend===`normal`?``:g(Hg).find(e=>e[0]===n.blend)[1]),1)],10,Dv))),128))]),z(`div`,jv,[z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`New empty layer`,onClick:n[54]||=e=>_t.value.addLayer(`Layer ${_t.value.layers.length+1}`)},[h(P,{name:`plus`,size:12}),n[91]||=L(`New`,-1)]),z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Ctrl+J`,onClick:n[55]||=e=>_t.value.duplicateLayer()},[h(P,{name:`files`,size:12}),n[92]||=L(`Copy`,-1)]),z(`button`,{class:`btn px-2 py-0.5 text-xs`,title:`Ctrl+E`,disabled:_t.value.layers.indexOf(_t.value.active)<=0,onClick:n[56]||=e=>_t.value.mergeDown()},`Merge down`,8,Mv),z(`button`,{class:`btn px-1.5 py-0.5 text-xs`,title:`Move up`,onClick:n[57]||=e=>_t.value.moveLayer(1)},`↑`),z(`button`,{class:`btn px-1.5 py-0.5 text-xs`,title:`Move down`,onClick:n[58]||=e=>_t.value.moveLayer(-1)},`↓`),z(`button`,{class:`btn px-1.5 py-0.5 text-xs hover:text-danger`,title:`Delete layer`,disabled:_t.value.layers.length<2,onClick:n[59]||=e=>_t.value.removeLayer()},[h(P,{name:`trash`,size:12})],8,Nv)]),z(`div`,Pv,[z(`button`,{class:`btn px-2 py-0.5 text-xs`,disabled:!_t.value.canUndo,title:`Ctrl+Z`,onClick:n[60]||=e=>_t.value.undo()},[h(P,{name:`undo`,size:12}),n[93]||=L(`Undo`,-1)],8,Fv),z(`button`,{class:`btn px-2 py-0.5 text-xs`,disabled:!_t.value.canRedo,title:`Ctrl+Shift+Z`,onClick:n[61]||=e=>_t.value.redo()},[h(P,{name:`redo`,size:12}),n[94]||=L(`Redo`,-1)],8,Iv),z(`label`,Lv,[u(z(`input`,{"onUpdate:modelValue":n[62]||=e=>ue.uv=e,type:`checkbox`,class:`accent-accent`},null,512),[[ee,ue.uv]]),n[95]||=L(`UV layout`,-1)])]),z(`div`,Rv,[z(`button`,{class:`btn flex-1 px-2 py-0.5 text-xs`,onClick:Z},`Fit`),z(`button`,{class:`btn flex-1 px-2 py-0.5 text-xs`,onClick:n[63]||=e=>ue.zoom=1},`100%`)])])])):R(``,!0)])]),_:1},8,[`title`]))}},[[`__scopeId`,`data-v-08f91897`]]),Uv=/^(?:(.+?)\^)?(?:(p_[a-z]+)_(\d{3})|([a-z]{4})_(\d{3})_([a-z]))\.ydd$/i,Wv=/^(?:(.+?)\^)?(p_[a-z]+|[a-z]{4})_diff_(\d{3})_([a-z])(?:_([a-z]{3}))?\.ytd$/i,Gv=Object.fromEntries(ie.map((e,t)=>[e.code,t])),Kv=Object.fromEntries(re.map((e,t)=>[e.code,t])),qv=e=>{let t=e.split(/[\\/]/);return{dir:t.slice(0,-1).join(`/`),name:t[t.length-1]}},Jv=e=>e?e.toLowerCase().replace(/_p$/,``):``;function Yv(e){let t=new Map,n=[],r=[],i=[];for(let a of e){let{dir:e,name:o}=qv(a.path),s=Uv.exec(o);if(s){let n=!!s[2],i=(s[2]??s[4]).toLowerCase();if(!(n?i in Kv:i in Gv)){r.push({e:a,dir:e,name:o});continue}let c=Number(s[3]??s[5]),l=Jv(s[1]),u=`${e}|${l}|${i}|${c}`;t.set(u,{key:u,dir:e,owner:l,slot:i,prop:n,index:c,kind:n?null:s[6].toLowerCase(),label:te(i,c),model:a,textures:[]})}else s=Wv.exec(o),s?n.push({e:a,dir:e,name:o,owner:Jv(s[1]),slot:s[2].toLowerCase(),index:Number(s[3]),letter:s[4].toLowerCase(),race:s[5]?.toLowerCase()??null}):/\.ytd$/i.test(o)?i.push({e:a,dir:e,name:o}):/\.ydd$/i.test(o)&&r.push({e:a,dir:e,name:o})}for(let e of n){let n=t.get(`${e.dir}|${e.owner}|${e.slot}|${e.index}`);n?n.textures.push({entry:e.e,letter:e.letter,race:e.race}):i.push(e)}let a=[...t.values()];for(let e of a)e.textures.sort((e,t)=>e.letter.localeCompare(t.letter)||(e.race??``).localeCompare(t.race??``));let o=e=>e.prop?100+Kv[e.slot]:Gv[e.slot];a.sort((e,t)=>o(e)-o(t)||e.owner.localeCompare(t.owner)||e.index-t.index||e.dir.localeCompare(t.dir));let s=e=>e.toLowerCase().replace(/\.(ydd|ytd)$/,``);for(let e of r.sort((e,t)=>e.name.localeCompare(t.name))){let t=s(e.name),n=i.filter(n=>n.dir===e.dir&&s(n.name).startsWith(t));!n.length&&r.filter(t=>t.dir===e.dir).length===1&&(n=i.filter(t=>t.dir===e.dir)),n.sort((e,t)=>s(e.name).length-s(t.name).length||s(e.name).localeCompare(s(t.name))),a.push({key:`${e.dir}|?|${t}`,dir:e.dir,owner:``,slot:null,prop:!1,index:0,kind:`u`,label:e.name.replace(/\.ydd$/i,``),unknown:!0,model:e.e,textures:n.map((e,t)=>({entry:e.e,letter:`abcdefghijklmnopqrstuvwxyz`[t]??`z`,race:null}))})}return a}function Xv(e,t){if(!e.owner)return null;let n=`${e.owner}.ymt`;return t.find(t=>qv(t.path).name.toLowerCase()===n&&qv(t.path).dir===e.dir)??null}function Zv(e,t){if(!e.owner)return null;let n=`${e.owner}.yft`;return t.find(t=>qv(t.path).name.toLowerCase()===n&&qv(t.path).dir===e.dir)??null}var Qv={class:`relative overflow-hidden rounded bg-[repeating-conic-gradient(#1c2127_0%_25%,#14181d_0%_50%)] bg-[length:10px_10px]`},$v={key:0,class:`absolute inset-0 grid place-items-center text-[9px] text-fg-subtle`},ey={__name:`SourceThumb`,props:{entry:Object,cache:Map},setup(t){let n=t,r=Du(),i=_(null),a=_(n.entry?`waiting`:`none`),o=null;function s(e){i.value.width=e.width,i.value.height=e.height,i.value.getContext(`2d`).putImageData(e,0,0),a.value=`ok`}async function c(){let e=n.entry.path;try{let t=n.cache.get(e);if(!t){let i=await r.peekTexture(await n.entry.read(),96);t=new ImageData(new Uint8ClampedArray(i.rgba),i.width,i.height),n.cache.set(e,t)}i.value&&s(t)}catch{a.value=`failed`}}return O(()=>{n.entry&&(o=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(o.disconnect(),c())},{rootMargin:`100px`}),o.observe(i.value))}),f(()=>o?.disconnect()),(t,n)=>(e(),m(`div`,Qv,[z(`canvas`,{ref_key:`canvas`,ref:i,class:`block size-full object-contain`},null,512),a.value===`failed`||a.value===`none`?(e(),m(`span`,$v,l(a.value===`none`?`No texture`:`?`),1)):R(``,!0)]))}},ty={key:0,class:`space-y-6 p-6`},ny={class:`mt-5 flex flex-wrap justify-center gap-2`},ry=[`disabled`],iy=[`disabled`],ay=[`disabled`],oy={class:`mt-2 text-xs text-fg-subtle`},sy={key:0},cy={class:`divide-y divide-border rounded-panel border border-border`},ly=[`disabled`,`onClick`],uy={class:`flex-1 truncate font-mono`},dy={key:1,class:`flex max-h-[68vh] flex-col`},fy={class:`flex flex-wrap items-center gap-2 border-b border-border px-4 py-2.5`},py={class:`text-sm`},my={class:`font-mono`},hy={class:`text-fg-subtle`},gy={key:0,class:`ml-auto flex items-center gap-1`},_y=[`disabled`],vy={key:0,label:`Clothing`},yy=[`value`],by={key:1,label:`Accessories`},xy=[`value`],Sy={key:0,class:`space-y-3 border-b border-border px-4 py-3`},Cy={class:`flex flex-wrap items-center gap-2 text-sm`},wy=[`value`],Ty={class:`flex flex-wrap gap-3`},Ey=[`src`,`alt`],Dy=[`title`],Oy={class:`font-mono`},ky={key:0,class:`text-xs text-fg-subtle`},Ay={key:1,class:`text-xs text-danger`},jy={key:2,class:`text-xs text-warn`},My=[`disabled`],Ny={key:1,class:`flex flex-wrap gap-1 border-b border-border px-4 py-2`},Py=[`onClick`],Fy={key:2,class:`min-h-0 flex-1 divide-y divide-border overflow-y-auto`},Iy=[`checked`,`disabled`,`onChange`],Ly={class:`min-w-0 flex-1`},Ry={class:`text-sm font-medium`},zy={key:0,class:`font-normal text-fg-subtle`},By={key:1,class:`font-normal text-warn`},Vy={class:`truncate text-xs text-fg-subtle`},Hy={key:1,class:`text-warn`},Uy=[`value`,`aria-label`,`onChange`],Wy={key:0,value:``,disabled:``},Gy={key:1,label:`Clothing`},Ky=[`value`],qy={key:2,label:`Accessories`},Jy=[`value`],Yy={key:0,class:`w-24 shrink-0 text-right text-xs text-accent`},Xy={key:3,class:`space-y-1 border-t border-border bg-warn/5 px-4 py-2.5 text-xs text-warn`},Zy={key:2,class:`pointer-events-none absolute inset-2 grid place-items-center rounded-xl border-2 border-dashed border-accent bg-canvas/80 text-accent`},Qy={key:0,class:`mr-auto max-w-sm text-xs text-fg-subtle`},$y={key:1,class:`mr-2 text-xs text-warn`},eb=[`disabled`],tb=`abcdefghijklmnopqrstuvwxyz`,nb={__name:`AddClothingDialog`,props:{initial:{type:Object,default:null}},emits:[`close`],setup(n,{emit:r}){let i=r,a=n,o=Du(),s=S(),p=I(()=>o.ped),y=_(null),b=_(null),C=_(null),D=_(!1),k=_(!1),A=_(null),j=_([]),M=_(null),N=t(new Set),F=_(`all`),ee=_([]),B=new Map,V=_([]),ae=_(null);function H(){for(let e of V.value)URL.revokeObjectURL(e.url);V.value=[]}f(H);function W(e){let t=e.toLowerCase();return/normal|_n\.|nrm|bump/.test(t)?`This looks like a normal map (the purple-blue picture). As a variant it shows as a purple-blue texture on the ped. Use the colour picture (the one named _diff_).`:/spec|_s\./.test(t)?`This looks like a specular map, not a colour picture. As a variant it shows dark and purple on the ped. Use the colour picture (the one named _diff_).`:null}let oe=I(()=>{let e=o.garments.filter(e=>{if(!e.slot||!e.variants.length)return!1;let t=o.texture(e.variants[0].texture);return t&&t.writable&&!t.embedded&&e.variants.length<26}),t=[...ie,...re].map(e=>e.code);return e.sort((e,n)=>t.indexOf(e.slot)-t.indexOf(n.slot)||e.index-n.index)});function ce(){let e=oe.value;return(e.find(e=>e.id===o.state.selectedGarment)??e.find(e=>e.slot===`decl`)??e[0])?.id??null}let le=I(()=>o.garment(ae.value)),G=I(()=>{let e=le.value;if(!e)return null;let t=e.variants.find(t=>t.letter===o.letterFor(e))??e.variants[0];return{letter:t.letter,tex:o.texture(t.texture)}}),K=I(()=>le.value&&le.value.variants.length+V.value.length>26),J=I(()=>{let e=le.value;if(!e)return``;let t=tb[e.variants.length]?.toUpperCase()??``,n=tb[Math.min(25,e.variants.length+V.value.length-1)].toUpperCase();return V.value.length>1?`${t}–${n}`:t});async function de(){let e=le.value,t=G.value;if(e&&t&&V.value.length){A.value=`Reading the pictures…`;try{let n=[];for(let e of V.value){let r=await ue(new Blob([await e.entry.read()]),t.tex.width,t.tex.height);n.push({width:r.width,height:r.height,rgba:r.rgba})}A.value=`Adding to the ped…`,await o.runEdit(`addVariant`,{garmentId:e.id,from:t.letter,pixelsList:n})&&i(`close`)}catch(e){s.show(`The pictures could not be added: ${e.message}`,{level:`error`,timeout:8e3})}finally{A.value=null}}}O(async()=>{if(a.initial){D.value=!0;try{await Y(a.initial.entries,a.initial.name),a.initial.slot&&xe(a.initial.slot)}finally{D.value=!1}}try{ee.value=(await se()).filter(e=>e.id!==o.state.project.id)}catch{}});async function Y(e,t){let n=e.filter(e=>Id.test(e.path)),r=Yv(n);H();let i=e.filter(e=>Ld.test(e.path));if(V.value=await Promise.all(i.map(async e=>{let t=e.path.split(`/`).pop();return{entry:e,name:t,url:URL.createObjectURL(new Blob([await e.read()])),warning:W(t)}})),V.value.length&&!ae.value&&(ae.value=ce()),M.value={name:t,entries:n,garments:r},N.clear(),r.length<=12)for(let e of r)e.textures.length&&N.add(e.key);F.value=`all`,B.clear(),!r.length&&!V.value.length&&s.show(`No clothing or pictures were found there. Garment files are named like jbib_003_u.ydd and jbib_diff_003_a_uni.ytd; pictures are PNG, JPG or WebP.`,{level:`warning`,timeout:9e3})}async function X(e,t){let n=e.target.files;if(n?.length){D.value=!0;try{t===`zip`?await Y(await zd(n[0]),n[0].name):await Y(Rd(n),t===`folder`?n[0].webkitRelativePath.split(`/`)[0]||`the folder`:`the selected files`)}catch{s.show(`What you chose could not be read.`,{level:`error`})}finally{D.value=!1,e.target.value=``}}}async function fe(e){D.value=!0;try{let t=await U(e.id);if(!t)return;await Y(Hd(t.project.layout===`packed`?await o.extractGarments(t.project.name,t.files):t.files),t.project.name)}finally{D.value=!1}}function Z(e){e.dataTransfer?.types?.includes(`Files`)&&(e.preventDefault(),e.stopPropagation(),k.value=!0)}async function pe(e){if(e.dataTransfer?.types?.includes(`Files`)){e.preventDefault(),e.stopPropagation(),k.value=!1,D.value=!0;try{let{entries:t,source:n}=await Bd(e.dataTransfer);await Y(t,n)}catch{s.show(`What you dropped could not be read.`,{level:`error`})}finally{D.value=!1}}}let me=I(()=>{let e=new Set((M.value?.garments??[]).map(e=>e.slot).filter(Boolean));return[...ie,...re].filter(t=>e.has(t.code))}),he=I(()=>(M.value?.garments??[]).filter(e=>F.value===`all`||e.slot===F.value)),ge=t({}),_e=e=>ge[e.key]??e.slot,ve=(e,t)=>e.unknown||e.prop===t.startsWith(`p_`),ye=_(``);function be(e){if(e){for(let t of M.value?.garments??[])N.has(t.key)&&ve(t,e)&&(ge[t.key]=e);ye.value=``}}function xe(e){for(let t of M.value?.garments??[])ve(t,e)&&(ge[t.key]=e)}let Se=I(()=>{let e=(M.value?.garments??[]).filter(e=>N.has(e.key));return{clothing:e.some(e=>!e.prop||e.unknown),accessories:e.some(e=>e.prop||e.unknown)}}),Ce=I(()=>(M.value?.garments??[]).filter(e=>N.has(e.key)&&!_e(e)).length),we=I(()=>{let e=[];return M.value?.garments.length&&e.push(`${M.value.garments.length} garments`),V.value.length&&e.push(`${V.value.length} picture${V.value.length>1?`s`:``}`),e.join(` · `)||`nothing usable`}),Te=e=>[e.dir,e.owner].filter(Boolean).join(` · `)||M.value.name,Ee=I(()=>{let e={};if(p.value.layout===`packed`)for(let t of o.garments)t.slot&&(e[t.slot]=(e[t.slot]??0)+1);else{for(let t of p.value.variation?.components??[])e[ie[t.slotIndex]?.code]=t.drawables.length;for(let t of p.value.variation?.props??[]){let n=re[t.anchorId]?.code;n&&(e[n]=Math.max(e[n]??0,t.propId+1))}}let t={};for(let n of M.value?.garments??[]){if(!N.has(n.key))continue;let r=_e(n);if(!r)continue;let i=e[r]??0;t[n.key]=te(r,i),e[r]=i+1}return t});function De(e){N.has(e.key)?N.delete(e.key):N.add(e.key)}function Oe(e){for(let t of he.value)e&&t.textures.length?N.add(t.key):N.delete(t.key)}async function ke(){let e=M.value.garments.filter(e=>N.has(e.key));if(!e.length)return;j.value=[];let t=[],n=new Map,r=new Map;try{for(let[i,a]of e.entries()){A.value=`Reading ${i+1} of ${e.length}…`;let o=Xv(a,M.value.entries);o&&!n.has(o.path)&&n.set(o.path,await o.read());let s=Zv(a,M.value.entries);s&&!r.has(s.path)&&r.set(s.path,await s.read()),t.push({slot:_e(a),sourceSlot:a.slot??_e(a),prop:_e(a).startsWith(`p_`),kind:a.kind,sourceIndex:a.index,label:`${a.label} (${Te(a)})`,model:await a.model.read(),textures:await Promise.all(a.textures.map(async e=>({letter:e.letter,race:e.race,bytes:await e.entry.read()}))),sourceMeta:o?n.get(o.path):null,sourceMetaKey:o?.path??null,sourceYft:s?r.get(s.path):null,sourceYftKey:s?.path??null})}A.value=`Adding to the ped…`;let a=await o.addClothing(t);a.skipped.length?j.value=a.skipped:i(`close`);for(let t of e)N.delete(t.key)}catch(e){s.show(`The clothing could not be added: ${e.message}`,{level:`error`,timeout:8e3})}finally{A.value=null}}return(t,n)=>(e(),x(q,{title:`Add clothing to ${g(o).state.project.name}`,wide:``,onClose:n[16]||=e=>i(`close`)},{footer:c(()=>[M.value?.garments.length?(e(),m(`p`,Qy,`New garments go after the ones the ped already has. Clothes made for another skeleton (for example freemode clothes on a custom ped) may not fit.`)):R(``,!0),Ce.value?(e(),m(`p`,$y,`Choose a category for `+l(Ce.value)+` garment`+l(Ce.value>1?`s`:``)+`.`,1)):R(``,!0),z(`button`,{class:`btn`,onClick:n[15]||=e=>i(`close`)},`Cancel`),M.value?.garments.length?(e(),m(`button`,{key:2,class:`btn-primary`,disabled:!N.size||Ce.value>0||!!A.value||g(o).state.busy,onClick:ke},[h(P,{name:`plus`}),L(l(A.value??`Add ${N.size} garment${N.size===1?``:`s`}`),1)],8,eb)):R(``,!0)]),default:c(()=>[z(`div`,{class:`relative`,onDragover:Z,onDragleave:n[14]||=E(e=>k.value=!1,[`self`]),onDrop:pe},[M.value?(e(),m(`div`,dy,[z(`div`,fy,[z(`p`,py,[n[24]||=z(`span`,{class:`text-fg-muted`},`From`,-1),n[25]||=L(),z(`span`,my,l(M.value.name),1),n[26]||=L(),z(`span`,hy,`· `+l(we.value),1)]),z(`button`,{class:`btn-ghost text-xs`,onClick:n[6]||=e=>{M.value=null,H()}},`Change`),M.value.garments.length?(e(),m(`div`,gy,[u(z(`select`,{"onUpdate:modelValue":n[7]||=e=>ye.value=e,class:`field w-auto py-1 text-xs`,disabled:!N.size,"aria-label":`Put the selected garments in a category`,onChange:n[8]||=e=>be(ye.value)},[n[27]||=z(`option`,{value:``},`Put selected in…`,-1),Se.value.clothing?(e(),m(`optgroup`,vy,[(e(!0),m(T,null,d(g(ie),t=>(e(),m(`option`,{key:t.code,value:t.code},l(t.title),9,yy))),128))])):R(``,!0),Se.value.accessories?(e(),m(`optgroup`,by,[(e(!0),m(T,null,d(g(re),t=>(e(),m(`option`,{key:t.code,value:t.code},l(t.title),9,xy))),128))])):R(``,!0)],40,_y),[[w,ye.value]]),z(`button`,{class:`btn-ghost text-xs`,onClick:n[9]||=e=>Oe(!0)},`Select all`),z(`button`,{class:`btn-ghost text-xs`,onClick:n[10]||=e=>Oe(!1)},`None`)])):R(``,!0)]),V.value.length?(e(),m(`section`,Sy,[z(`div`,Cy,[h(P,{name:`image`,class:`text-accent`}),z(`span`,null,`Add `+l(V.value.length===1?`this picture`:`these ${V.value.length} pictures`)+` as new variant`+l(V.value.length>1?`s`:``)+` of`,1),u(z(`select`,{"onUpdate:modelValue":n[11]||=e=>ae.value=e,class:`field w-auto py-1 text-sm`,"aria-label":`Garment to add the pictures to`},[(e(!0),m(T,null,d(oe.value,t=>(e(),m(`option`,{key:t.id,value:t.id},l(g(ne)[t.slot].title)+` · `+l(t.label)+` (`+l(t.variants.length)+` variant`+l(t.variants.length>1?`s`:``)+`)`,9,wy))),128))],512),[[w,ae.value]])]),z(`ul`,Ty,[(e(!0),m(T,null,d(V.value,t=>(e(),m(`li`,{key:t.url,class:`w-28`},[z(`img`,{src:t.url,alt:t.name,class:v([`aspect-square w-full rounded-md border bg-canvas object-contain`,t.warning?`border-warn`:`border-border`])},null,10,Ey),z(`p`,{class:`mt-1 truncate text-[11px] text-fg-muted`,title:t.name},l(t.name),9,Dy)]))),128))]),(e(!0),m(T,null,d(V.value.filter(e=>e.warning),t=>(e(),m(`p`,{key:`w`+t.url,class:`flex gap-2 text-xs text-warn`},[h(P,{name:`alert`,size:14,class:`mt-px shrink-0`}),z(`span`,null,[z(`span`,Oy,l(t.name),1),L(`: `+l(t.warning),1)])]))),128)),G.value?(e(),m(`p`,ky,` They become variant`+l(V.value.length>1?`s`:``)+` `+l(J.value)+`, stretched to `+l(G.value.tex.width)+` × `+l(G.value.tex.height)+` like variant `+l(G.value.letter.toUpperCase())+`. Lay them out the same way as that texture (Save PNG it to see). `,1)):R(``,!0),K.value?(e(),m(`p`,Ay,`A garment holds at most 26 variants.`)):R(``,!0),oe.value.length?R(``,!0):(e(),m(`p`,jy,`No garment in this ped has a texture that can be written.`)),z(`button`,{class:`btn-primary`,disabled:!le.value||K.value||!!A.value||g(o).state.busy,onClick:de},[h(P,{name:`plus`}),L(l(A.value??`Add ${V.value.length} variant${V.value.length>1?`s`:``}`),1)],8,My)])):R(``,!0),me.value.length>1?(e(),m(`div`,Ny,[z(`button`,{class:v([`rounded-full px-2.5 py-1 text-xs`,F.value===`all`?`bg-accent/15 text-accent`:`text-fg-muted hover:bg-hover`]),onClick:n[12]||=e=>F.value=`all`},`All`,2),(e(!0),m(T,null,d(me.value,t=>(e(),m(`button`,{key:t.code,class:v([`rounded-full px-2.5 py-1 text-xs`,F.value===t.code?`bg-accent/15 text-accent`:`text-fg-muted hover:bg-hover`]),onClick:e=>F.value=t.code},l(t.title),11,Py))),128))])):R(``,!0),M.value.garments.length?(e(),m(`ul`,Fy,[(e(!0),m(T,null,d(he.value,t=>(e(),m(`li`,{key:t.key},[z(`label`,{class:v([`flex cursor-pointer items-center gap-3 px-4 py-2`,N.has(t.key)?`bg-accent/5`:`hover:bg-raised`])},[z(`input`,{type:`checkbox`,class:`accent-accent`,checked:N.has(t.key),disabled:!t.textures.length,onChange:e=>De(t)},null,40,Iy),h(ey,{entry:t.textures[0]?.entry,cache:g(B),class:`size-11 shrink-0`},null,8,[`entry`,`cache`]),z(`div`,Ly,[z(`p`,Ry,[L(l(t.label)+` `,1),t.slot?(e(),m(`span`,zy,`· `+l(g(ne)[t.slot].title),1)):(e(),m(`span`,By,`· category not known from its name`))]),z(`p`,Vy,[t.textures.length?(e(),m(T,{key:0},[L(l(t.textures.length)+` variant`+l(t.textures.length>1?`s`:``),1)],64)):(e(),m(`span`,Hy,`No textures found next to it`)),L(` · `+l(Te(t)),1)])]),z(`select`,{class:v([`field w-auto shrink-0 py-1 text-xs`,_e(t)?_e(t)===t.slot?``:`border-accent text-accent`:`border-warn text-warn`]),value:_e(t)??``,"aria-label":`Category for ${t.label}`,title:`The category it goes in. Its own is chosen by its file name.`,onClick:n[13]||=E(()=>{},[`stop`]),onChange:e=>ge[t.key]=e.target.value},[_e(t)?R(``,!0):(e(),m(`option`,Wy,`Choose a category…`)),!t.prop||t.unknown?(e(),m(`optgroup`,Gy,[(e(!0),m(T,null,d(g(ie),t=>(e(),m(`option`,{key:t.code,value:t.code},l(t.title),9,Ky))),128))])):R(``,!0),t.prop||t.unknown?(e(),m(`optgroup`,qy,[(e(!0),m(T,null,d(g(re),t=>(e(),m(`option`,{key:t.code,value:t.code},l(t.title),9,Jy))),128))])):R(``,!0)],42,Uy),Ee.value[t.key]?(e(),m(`span`,Yy,`→ `+l(Ee.value[t.key]),1)):R(``,!0)],2)]))),128))])):R(``,!0),j.value.length?(e(),m(`div`,Xy,[(e(!0),m(T,null,d(j.value,(t,n)=>(e(),m(`p`,{key:n},l(t.label)+` was not added: `+l(t.reason)+`.`,1))),128))])):R(``,!0)])):(e(),m(`div`,ty,[z(`div`,{class:v([`rounded-xl border-2 border-dashed p-8 text-center transition-colors`,k.value?`border-accent bg-accent/5`:`border-border-strong`])},[h(P,{name:`shirt`,size:28,class:`mx-auto text-fg-subtle`}),n[20]||=z(`p`,{class:`mt-3 font-medium`},`Choose clothing files or pictures`,-1),n[21]||=z(`p`,{class:`mt-1 text-xs text-fg-muted`},[L(`A garment is its model and its textures: `),z(`code`,{class:`font-mono`},`jbib_003_u.ydd`),L(` + `),z(`code`,{class:`font-mono`},`jbib_diff_003_a_uni.ytd`),L(`. Folders exported from OpenIV, another streamed ped or a ZIP all work.`)],-1),n[22]||=z(`p`,{class:`mt-1 text-xs text-fg-muted`},`Pictures (PNG, JPG, WebP) become new variants of a garment you choose, like more decal images.`,-1),z(`div`,ny,[z(`button`,{class:`btn`,disabled:D.value,onClick:n[0]||=e=>y.value.click()},[h(P,{name:`folder`}),n[17]||=L(`Choose folder`,-1)],8,ry),z(`button`,{class:`btn`,disabled:D.value,onClick:n[1]||=e=>b.value.click()},[h(P,{name:`files`}),n[18]||=L(`Choose files`,-1)],8,iy),z(`button`,{class:`btn`,disabled:D.value,onClick:n[2]||=e=>C.value.click()},[h(P,{name:`zip`}),n[19]||=L(`Open ZIP`,-1)],8,ay)]),z(`p`,oy,l(D.value?`Reading the files…`:`Or drop them here.`),1)],2),z(`input`,{ref_key:`folderInput`,ref:y,type:`file`,webkitdirectory:``,multiple:``,class:`hidden`,"aria-label":`Clothing folder`,onChange:n[3]||=e=>X(e,`folder`)},null,544),z(`input`,{ref_key:`filesInput`,ref:b,type:`file`,multiple:``,accept:`.ydd,.ytd,.ymt,image/png,image/jpeg,image/webp`,class:`hidden`,"aria-label":`Clothing files`,onChange:n[4]||=e=>X(e,`files`)},null,544),z(`input`,{ref_key:`zipInput`,ref:C,type:`file`,accept:`.zip,application/zip`,class:`hidden`,"aria-label":`Clothing ZIP`,onChange:n[5]||=e=>X(e,`zip`)},null,544),ee.value.length?(e(),m(`section`,sy,[n[23]||=z(`p`,{class:`label mb-2`},`Or take clothing from another of your peds`,-1),z(`ul`,cy,[(e(!0),m(T,null,d(ee.value,t=>(e(),m(`li`,{key:t.id},[z(`button`,{class:`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-raised disabled:opacity-50`,disabled:D.value,onClick:e=>fe(t)},[z(`span`,uy,l(t.name),1),h(P,{name:`chevronRight`,size:14,class:`text-fg-subtle`})],8,ly)]))),128))])])):R(``,!0)])),k.value&&M.value?(e(),m(`div`,Zy,`Drop to use these files instead`)):R(``,!0)],32)]),_:1},8,[`title`]))}},rb={class:`space-y-4 p-5`},ib={key:0,class:`flex items-center gap-2 rounded-lg border border-ok/30 bg-ok/5 px-3 py-3 text-sm text-ok`},ab={key:1,class:`divide-y divide-border overflow-hidden rounded-lg border border-border`},ob={class:`min-w-0 flex-1`},sb={class:`truncate`},cb={class:`text-fg-subtle`},lb={class:`text-[11px] text-fg-subtle`},ub={key:0,class:`text-xs text-fg-subtle`},db={key:1,class:`flex items-center gap-1.5 text-xs text-ok`},fb={key:2,class:`flex items-center gap-1.5 text-xs text-warn`},pb={key:2,class:`flex items-center gap-2 text-xs text-fg-muted`},mb={key:3,class:`rounded-lg border border-border bg-raised/40 p-3 text-xs text-fg-muted`},hb={class:`text-fg`},gb={key:0,class:`mt-1.5`},_b={key:1,class:`mt-1.5 text-warn`},vb=[`disabled`],yb=[`disabled`],bb={__name:`FixSkeletonDialog`,emits:[`close`],setup(t,{emit:n}){let r=n,i=Du(),a=[],o=_([]),s=_([]),u=_(`searching`),f=_(``),p=_(null),v=_([]),y=I(()=>i.mismatched.map(e=>{let t=i.garment(e),n=s.value.find(t=>t.garmentId===e);return{id:e,label:t?.label??e,slot:ne[t?.slot]?.title??`Other`,far:t?.skinFit?.far??0,source:n?.source??null,from:n?.label??null}})),b=I(()=>y.value.filter(e=>e.source)),S=I(()=>y.value.filter(e=>!e.source));async function C(){let e=[],t=(await se()).filter(e=>e.id!==i.state.project.id);for(let[n,r]of t.entries()){let a=r.skeleton;if(a===void 0){f.value=`Reading ${r.name}'s skeleton (${n+1} of ${t.length})…`;let e=(await U(r.id))?.files[`${r.name.toLowerCase()}.yft`];a=e?await i.skeletonOf(e,`${r.name}.yft`):null,K(r.id,{skeleton:a}).catch(()=>{})}a&&e.push({id:`project:${r.id}`,label:r.name,skeleton:a})}return e}async function w(){u.value=`searching`,f.value=`Matching the garments to skeletons…`,s.value=await i.matchSkeletons([...i.mismatched],a),A(`skeleton matches`,s.value),u.value=`ready`}O(async()=>{try{a=await C(),o.value=[...new Set(a.map(e=>e.label))],await w()}catch(e){console.error(e),u.value=`ready`}});async function E(e){let t=[...e.target.files??[]];e.target.value=``;for(let e of t){let t=await i.skeletonOf(new Uint8Array(await e.arrayBuffer()),e.name);if(!t){v.value.push(e.name);continue}let n=e.name.replace(/\.yft$/i,``);a=[...a.filter(t=>t.id!==`file:${e.name}`),{id:`file:${e.name}`,label:n,skeleton:t}],o.value.includes(n)||o.value.push(n)}await w()}async function D(){u.value=`fitting`,await i.fitSkeletons(b.value.map(e=>({garmentId:e.id,source:e.source})),a)&&!i.mismatched.length?r(`close`):await w()}return(t,n)=>(e(),x(q,{title:`Fit garments to this ped's skeleton`,wide:``,onClose:n[2]||=e=>r(`close`)},{footer:c(()=>[z(`input`,{ref_key:`yftInput`,ref:p,type:`file`,accept:`.yft`,multiple:``,class:`hidden`,onChange:E},null,544),y.value.length?(e(),m(`button`,{key:0,class:`btn mr-auto`,disabled:u.value!==`ready`,onClick:n[0]||=e=>p.value.click()},[h(P,{name:`upload`}),n[9]||=L(`Add a .yft…`,-1)],8,vb)):R(``,!0),z(`button`,{class:`btn`,onClick:n[1]||=e=>r(`close`)},l(y.value.length?`Cancel`:`Close`),1),y.value.length?(e(),m(`button`,{key:1,class:`btn-primary`,disabled:u.value!==`ready`||!b.value.length||g(i).state.busy,onClick:D},l(u.value===`fitting`?`Fitting…`:b.value.length===y.value.length?`Fix all (${b.value.length})`:`Fix ${b.value.length} of ${y.value.length}`),9,yb)):R(``,!0)]),default:c(()=>[z(`div`,rb,[n[8]||=z(`p`,{class:`text-sm text-fg-muted`},` These garments were made for another ped whose bones are numbered differently. They look right here, but in game every vertex follows the wrong bone and the mesh tears apart. Fitting re-points them to this ped's bones by name; their shape and textures stay as they are. `,-1),y.value.length?(e(),m(`ul`,ab,[(e(!0),m(T,null,d(y.value,t=>(e(),m(`li`,{key:t.id,class:`flex items-center gap-3 px-3 py-2 text-sm`},[z(`div`,ob,[z(`p`,sb,[L(l(t.label)+` `,1),z(`span`,cb,`· `+l(t.slot),1)]),z(`p`,lb,l(Math.round(t.far*100))+`% follows bones that sit elsewhere on this ped`,1)]),u.value===`searching`?(e(),m(`span`,ub,`…`)):t.source?(e(),m(`span`,db,[h(P,{name:`check`,size:14}),L(`Made for `+l(t.from),1)])):(e(),m(`span`,fb,[h(P,{name:`alert`,size:14}),n[4]||=L(`Skeleton not found`,-1)]))]))),128))])):(e(),m(`div`,ib,[h(P,{name:`check`}),n[3]||=L(`Every garment fits this ped's skeleton. `,-1)])),u.value===`searching`?(e(),m(`p`,pb,[n[5]||=z(`span`,{class:`size-1.5 animate-pulse rounded-full bg-accent`},null,-1),L(l(f.value),1)])):R(``,!0),y.value.length&&u.value!==`searching`?(e(),m(`div`,mb,[z(`p`,null,[n[6]||=L(` Skeletons checked: `,-1),z(`span`,hb,l(o.value.length?o.value.join(`, `):`none yet`),1),o.value.length?(e(),m(T,{key:0},[L(`, plus any a garment carries itself.`)],64)):R(``,!0)]),S.value.length?(e(),m(`p`,gb,[L(` For the `+l(S.value.length===1?`one`:S.value.length)+` not found, add the `,1),n[7]||=z(`span`,{class:`font-mono text-fg`},`.yft`,-1),L(` of the ped `+l(S.value.length===1?`it`:`they`)+` came from (or open that ped as a project once). `,1)])):R(``,!0),v.value.length?(e(),m(`p`,_b,`No skeleton could be read from `+l(v.value.join(`, `))+`.`,1)):R(``,!0)])):R(``,!0)])]),_:1}))}},xb={class:`space-y-3 p-5 text-sm`},Sb={class:`text-fg-muted`},Cb={class:`font-mono text-fg`},wb={key:0,class:`flex items-center gap-2 text-xs text-fg-muted`},Tb={key:1,class:`rounded-lg border border-ok/30 bg-ok/5 p-3 text-xs`},Eb={class:`flex items-center gap-2 text-ok`},Db={class:`mt-1 text-fg-muted`},Ob={key:0,class:`mt-1 text-warn`},kb={key:2,class:`text-xs text-danger`},Ab=[`disabled`],jb={__name:`ConvertDialog`,emits:[`close`],setup(t,{emit:n}){let r=n,i=Du(),a=j(),o=_(`ready`),s=_(null),u=_(``),d=I(()=>i.issues.some(e=>e.code===`TOO_BIG_FOR_GAME`));async function f(){o.value=`working`;try{s.value=await i.convertToStreamed(),o.value=`done`}catch(e){u.value=e.message,o.value=`failed`}}function p(){let e=s.value.project.id;r(`close`),a.push({name:`editor`,query:{project:e}})}return(t,n)=>(e(),x(q,{title:`Make a streamed copy`,onClose:n[1]||=e=>r(`close`)},{footer:c(()=>[z(`button`,{class:`btn`,onClick:n[0]||=e=>r(`close`)},l(o.value===`done`?`Stay here`:`Cancel`),1),o.value===`done`?(e(),m(`button`,{key:1,class:`btn-primary`,onClick:p},`Open the streamed copy`)):(e(),m(`button`,{key:0,class:`btn-primary`,disabled:o.value===`working`||g(i).state.busy,onClick:f},l(o.value===`working`?`Making the copy…`:`Make streamed copy`),9,Ab))]),default:c(()=>[z(`div`,xb,[z(`p`,Sb,[n[2]||=L(` This ped is `,-1),n[3]||=z(`span`,{class:`text-fg`},`packed`,-1),n[4]||=L(`: every model is in one `,-1),z(`span`,Cb,l(g(i).state.project.name)+`.ydd`,1),n[5]||=L(` and every texture in one `,-1),n[6]||=z(`span`,{class:`font-mono text-fg`},`.ytd`,-1),L(`. The game only loads the first 128 MB of a file, so a big packed ped runs out of room`+l(d.value?` — this one already has, which is why some of its textures come out grey`:``)+`. `,1)]),n[8]||=z(`p`,{class:`text-fg-muted`},[L(` A `),z(`span`,{class:`text-fg`},`streamed`),L(` ped keeps each garment in its own files (the model, and one file per colour variant), so there is no single file to outgrow, and the game only streams what a player is wearing. The models and textures are copied exactly. `)],-1),n[9]||=z(`p`,{class:`text-fg-muted`},`A new project is made; this one stays as it is.`,-1),o.value===`working`?(e(),m(`p`,wb,[...n[7]||=[z(`span`,{class:`size-1.5 animate-pulse rounded-full bg-accent`},null,-1),L(`Cutting every garment into its own files…`,-1)]])):R(``,!0),o.value===`done`?(e(),m(`div`,Tb,[z(`p`,Eb,[h(P,{name:`check`,size:14}),L(`Made a streamed copy: `+l(s.value.fileCount)+` files, the biggest `+l(g(oe)(s.value.biggest))+`.`,1)]),z(`p`,Db,`All `+l(s.value.garments[1])+` garments and `+l(s.value.variants[1])+` colour variants are there.`,1),s.value.skipped.length?(e(),m(`p`,Ob,`Left out: `+l(s.value.skipped.join(`; `)),1)):R(``,!0)])):R(``,!0),o.value===`failed`?(e(),m(`p`,kb,`The copy could not be made: `+l(u.value),1)):R(``,!0)])]),_:1}))}},Mb={key:0,class:`flex items-center gap-2 p-6 text-sm text-fg-muted`},Nb={key:1,class:`space-y-6 p-5 text-sm`},Pb={class:`space-y-2`},Fb={class:`label`},Ib={class:`flex items-baseline gap-2 text-xs`},Lb={class:`font-mono text-fg`},Rb={class:`text-fg-subtle`},zb={class:`h-2 overflow-hidden rounded-full bg-raised`},Bb={key:0,class:`text-xs text-fg-muted`},Vb={key:1,class:`text-xs text-fg-muted`},Hb={class:`space-y-2`},Ub={class:`grid gap-2 sm:grid-cols-2`},Wb={class:`rounded-lg border border-border p-3`},Gb={class:`mt-0.5 text-xs text-fg-muted`},Kb=[`disabled`],qb={class:`rounded-lg border border-border p-3`},Jb={class:`mt-0.5 text-xs text-fg-muted`},Yb=[`disabled`],Xb={class:`rounded-lg border border-border p-3`},Zb={class:`mt-0.5 text-xs text-fg-muted`},Qb=[`disabled`],$b={class:`rounded-lg border border-border p-3`},ex={class:`mt-0.5 text-xs text-fg-muted`},tx={key:0,class:`mt-2 space-y-1 text-xs`},nx={class:`flex-1 truncate`},rx={class:`text-fg-subtle`},ix={class:`text-fg-subtle`},ax=[`onClick`],ox={class:`space-y-1.5`},sx={class:`w-44 truncate`},cx={class:`h-1.5 flex-1 overflow-hidden rounded-full bg-raised`},lx={class:`w-16 text-right font-mono text-fg-muted`},ux={class:`w-20 text-right text-fg-subtle`},dx={class:`space-y-1.5`},fx=[`onClick`],px={class:`flex-1 truncate`},mx={key:0,class:`rounded bg-danger/15 px-1.5 py-0.5 text-[10px] text-danger`},hx={key:1,class:`rounded bg-warn/15 px-1.5 py-0.5 text-[10px] text-warn`},gx={class:`text-fg-subtle`},_x={class:`w-16 text-right font-mono text-fg-muted`},vx={key:0,class:`space-y-1.5`},yx={class:`min-w-0 flex-1`},bx={class:`truncate`},xx={class:`truncate font-mono text-[11px] text-fg-subtle`},Sx={class:`font-mono text-fg-muted`},Cx=[`disabled`,`onClick`],wx=[`disabled`,`onClick`],Tx={key:0,class:`mr-auto flex items-center gap-2 text-xs text-fg-muted`},Ex={__name:`SpacePanel`,emits:[`close`],setup(t,{emit:n}){let r=n,i=Du(),a=I(()=>i.space),s=I(()=>i.state.busy),u=I(()=>(a.value?.files??[]).filter(e=>Math.max(e.data,e.graphics)>=1048576).map(e=>{let t=Math.max(e.data,e.graphics);return{...e,used:t,share:Math.min(1,t/a.value.limit),part:e.graphics>=e.data?e.name.endsWith(`.ytd`)?`textures`:`textures inside models`:`models`}})),f=I(()=>Object.entries(a.value?.categories??{}).map(([e,t])=>({title:e,...t})).sort((e,t)=>t.bytes-e.bytes)),p=I(()=>f.value[0]?.bytes||1),h=I(()=>i.garments.map(e=>({g:e,e:i.spaceOf(e.id)})).filter(e=>e.e)),_=I(()=>[...h.value].sort((e,t)=>t.e.bytes-e.e.bytes).slice(0,12)),y=I(()=>h.value.filter(e=>e.e.verdict===`duplicate`)),b=I(()=>(a.value?.textures??[]).filter(e=>e.advice.some(e=>e.code===`huge`||e.code===`uncompressed`)).sort((e,t)=>t.bytes-e.bytes)),S=e=>{let t=i.garment(e.garment);return t?`${ne[t.slot]?.title??`Other`} > ${t.label}${e.role===`colour`?` colour ${e.letter.toUpperCase()}`:``}`:`Not used by any model`},C=(e,t)=>e.advice.find(e=>e.code===t)?.saves??0,w=e=>e>=1?`bg-danger`:e>=.9?`bg-warn`:`bg-accent`,E=e=>oe(e);function D(e){i.selectGarment(e),r(`close`)}let O=(e,t)=>i.shrink(e,t);function k(){r(`close`),i.state.convertOpen=!0}return(t,n)=>(e(),x(q,{title:`What's using space`,wide:``,onClose:n[4]||=e=>r(`close`)},{footer:c(()=>[s.value?(e(),m(`span`,Tx,[...n[16]||=[z(`span`,{class:`size-1.5 animate-pulse rounded-full bg-accent`},null,-1),L(`Rebuilding the files…`,-1)]])):R(``,!0),z(`button`,{class:`btn`,onClick:n[3]||=e=>r(`close`)},`Close`)]),default:c(()=>[a.value?(e(),m(`div`,Nb,[z(`section`,Pb,[z(`h3`,Fb,`Files against the game's limit (`+l(E(a.value.limit))+` per file)`,1),(e(!0),m(T,null,d(u.value,t=>(e(),m(`div`,{key:t.name,class:`space-y-1`},[z(`div`,Ib,[z(`span`,Lb,l(t.name),1),z(`span`,Rb,l(t.part),1),z(`span`,{class:v([`ml-auto`,t.over?`font-semibold text-danger`:`text-fg-muted`])},l(E(t.used))+` of `+l(E(a.value.limit))+l(t.over?` — over: the part past the limit does not load in game`:``),3)]),z(`div`,zb,[z(`div`,{class:v([`h-full rounded-full`,w(t.used/a.value.limit)]),style:o({width:`${t.share*100}%`})},null,6)])]))),128)),a.value.layout===`packed`?(e(),m(`p`,Bb,[n[6]||=L(` Packed peds keep every texture in one file, so they hit this limit. A streamed copy has no single big file. `,-1),z(`button`,{class:`text-accent hover:underline`,onClick:k},`Make a streamed copy…`)])):(e(),m(`p`,Vb,`Streamed: each garment has its own files, so the limit only matters per garment.`))]),z(`section`,Hb,[n[11]||=z(`h3`,{class:`label`},`Quick wins`,-1),z(`div`,Ub,[z(`div`,Wb,[n[7]||=z(`p`,{class:`font-medium`},`Halve oversized textures`,-1),z(`p`,Gb,l(a.value.wins.huge.keys.length)+` texture`+l(a.value.wins.huge.keys.length===1?``:`s`)+` of 2048 px or more. At half size they still look sharp on a ped in game.`,1),z(`button`,{class:`btn mt-2 text-xs`,disabled:s.value||!a.value.wins.huge.keys.length,onClick:n[0]||=e=>O(a.value.wins.huge.keys,`halve`)},`Halve all · saves `+l(E(a.value.wins.huge.saves)),9,Kb)]),z(`div`,qb,[n[8]||=z(`p`,{class:`font-medium`},`Compress uncompressed textures`,-1),z(`p`,Jb,l(a.value.wins.uncompressed.keys.length)+` stored without compression, 4 to 8 times bigger than they need to be.`,1),z(`button`,{class:`btn mt-2 text-xs`,disabled:s.value||!a.value.wins.uncompressed.keys.length,onClick:n[1]||=e=>O(a.value.wins.uncompressed.keys,`compress`)},`Compress all · saves `+l(E(a.value.wins.uncompressed.saves)),9,Yb)]),z(`div`,Xb,[n[9]||=z(`p`,{class:`font-medium`},`Remove unused textures`,-1),z(`p`,Zb,l(a.value.wins.unused.keys.length)+` texture`+l(a.value.wins.unused.keys.length===1?``:`s`)+` that no model uses.`,1),z(`button`,{class:`btn mt-2 text-xs`,disabled:s.value||!a.value.wins.unused.keys.length,onClick:n[2]||=e=>O(a.value.wins.unused.keys,`remove`)},`Remove · saves `+l(E(a.value.wins.unused.saves)),9,Qb)]),z(`div`,$b,[n[10]||=z(`p`,{class:`font-medium`},`Duplicate garments`,-1),z(`p`,ex,l(y.value.length?`${y.value.length} garment${y.value.length===1?` has`:`s have`} the same model and colours as another one. Players lose nothing if they go.`:`None: every garment is different.`),1),y.value.length?(e(),m(`ul`,tx,[(e(!0),m(T,null,d(y.value,t=>(e(),m(`li`,{key:t.g.id,class:`flex items-center gap-2`},[z(`span`,nx,[L(l(t.g.label)+` `,1),z(`span`,rx,`= `+l(t.e.sameAs),1)]),z(`span`,ix,l(E(t.e.bytes)),1),z(`button`,{class:`text-accent hover:underline`,onClick:e=>D(t.g.id)},`Show`,8,ax)]))),128))])):R(``,!0)])]),n[12]||=z(`p`,{class:`text-xs text-fg-subtle`},`Each one is a single step you can undo.`,-1)]),z(`section`,ox,[n[13]||=z(`h3`,{class:`label`},`By category`,-1),(e(!0),m(T,null,d(f.value,t=>(e(),m(`div`,{key:t.title,class:`flex items-center gap-3 text-xs`},[z(`span`,sx,l(t.title),1),z(`div`,cx,[z(`div`,{class:`h-full rounded-full bg-accent/70`,style:o({width:`${t.bytes/p.value*100}%`})},null,4)]),z(`span`,lx,l(E(t.bytes)),1),z(`span`,ux,l(t.garments)+` garment`+l(t.garments===1?``:`s`),1)]))),128))]),z(`section`,dx,[n[14]||=z(`h3`,{class:`label`},`Biggest garments`,-1),(e(!0),m(T,null,d(_.value,t=>(e(),m(`button`,{key:t.g.id,class:`flex w-full items-center gap-3 rounded-md px-2 py-1 text-left text-xs hover:bg-hover`,onClick:e=>D(t.g.id)},[z(`span`,px,l(g(ne)[t.g.slot]?.title??`Other`)+` > `+l(t.g.label),1),t.e.verdict===`duplicate`?(e(),m(`span`,mx,`Duplicate`)):t.e.verdict===`shrink`?(e(),m(`span`,hx,`Can shrink`)):R(``,!0),z(`span`,gx,l(t.g.variants.length)+` colour`+l(t.g.variants.length===1?``:`s`),1),z(`span`,_x,l(E(t.e.bytes)),1)],8,fx))),128))]),b.value.length?(e(),m(`section`,vx,[n[15]||=z(`h3`,{class:`label`},`Textures to shrink`,-1),(e(!0),m(T,null,d(b.value,t=>(e(),m(`div`,{key:t.key,class:`flex items-center gap-3 rounded-md border border-border px-2 py-1.5 text-xs`},[z(`div`,yx,[z(`p`,bx,l(S(t)),1),z(`p`,xx,l(t.name)+` · `+l(t.width)+`×`+l(t.height)+` `+l(t.format)+l(t.embedded?` · inside the model`:``),1)]),z(`span`,Sx,l(E(t.bytes)),1),C(t,`huge`)?(e(),m(`button`,{key:0,class:`btn px-2 py-1 text-xs`,disabled:s.value,onClick:e=>O([t.key],`halve`)},`Halve · −`+l(E(C(t,`huge`))),9,Cx)):R(``,!0),C(t,`uncompressed`)?(e(),m(`button`,{key:1,class:`btn px-2 py-1 text-xs`,disabled:s.value,onClick:e=>O([t.key],`compress`)},`Compress · −`+l(E(C(t,`uncompressed`))),9,wx)):R(``,!0)]))),128))])):R(``,!0)])):(e(),m(`div`,Mb,[...n[5]||=[z(`span`,{class:`size-1.5 animate-pulse rounded-full bg-accent`},null,-1),L(`Measuring the ped…`,-1)]]))]),_:1}))}},Dx=[`aria-label`],Ox={class:`flex h-12 shrink-0 items-center gap-3 border-b border-border px-3`},kx={class:`text-sm font-semibold`},Ax={class:`text-xs text-fg-subtle`},jx={class:`grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_300px]`},Mx={class:`relative min-h-0`},Nx={class:`pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-border bg-surface/90 px-3 py-1.5 text-xs text-fg-muted`},Px={class:`flex min-h-0 flex-col gap-5 overflow-y-auto border-l border-border p-4 text-sm`},Fx={class:`space-y-2`},Ix={class:`flex rounded-lg border border-border p-0.5 text-xs`,role:`group`,"aria-label":`Tool`},Lx={key:0,class:`flex items-center gap-2 text-xs text-fg-muted`},Rx={class:`w-10 text-right font-mono`},zx={class:`flex flex-wrap gap-1.5`},Bx=[`disabled`],Vx={class:`text-xs text-fg-subtle`},Hx={class:`space-y-2`},Ux=[`disabled`],Wx=[`disabled`],Gx={class:`flex gap-1.5`},Kx=[`disabled`],qx=[`disabled`],Jx={class:`text-xs text-fg-subtle`},Yx={class:`mt-auto space-y-2`},Xx={class:`block text-xs text-fg-muted`},Zx={value:``},Qx=[`value`],$x={class:`text-xs text-fg-subtle`},eS=[`disabled`],tS={__name:`ShapeEditor`,props:{garmentId:{type:String,required:!0}},emits:[`close`],setup(t,{emit:n}){let r=t,i=n,a=Du(),o=a.garment(r.garmentId),s=(o?.geometry??[]).flatMap(e=>e.geometries),c=_(null),p=_(`piece`),b=_(5),S=_(``),C=_(!1),E=_(0),D=o?.prop?re:ie,k=s.map(e=>new Uint8Array(e.indices.length/3)),A=s.map(e=>new Uint8Array(e.indices.length/3)),j=[],N=[],F=s.reduce((e,t)=>e+t.indices.length/3,0),ee=I(()=>{E.value;let e=0,t=0;return k.forEach((n,r)=>{for(let i=0;i<n.length;i++)n[i]?e++:A[r][i]&&t++}),{kept:F-e,removed:e,selected:t}}),B=I(()=>ee.value.removed>0),te=s.map(e=>{let t=e.indices.length/3,n=new Float32Array(t*3),r=e.positions,i=e.indices;for(let e=0;e<t;e++)for(let t=0;t<3;t++)n[e*3+t]=(r[i[e*3]*3+t]+r[i[e*3+1]*3+t]+r[i[e*3+2]*3+t])/3;return n}),V=[];{let e=0;for(let t of s)V.push(e),e+=t.indices.length/3}let ae=(()=>{let e=new Int32Array(F).map((e,t)=>t),t=t=>{for(;e[t]!==t;)e[t]=e[e[t]],t=e[t];return t},n=new Map;s.forEach((r,i)=>{let a=r.positions,o=r.indices;for(let r=0;r<o.length/3;r++){let s=V[i]+r;for(let i=0;i<3;i++){let c=o[r*3+i]*3,l=`${Math.round(a[c]*2e3)},${Math.round(a[c+1]*2e3)},${Math.round(a[c+2]*2e3)}`,u=n.get(l);if(u===void 0)n.set(l,s);else{let n=t(u),r=t(s);n!==r&&(e[n]=r)}}}});let r=new Int32Array(F);for(let e=0;e<F;e++)r[e]=t(e);return r})(),H=new Set(ae).size,U,W,oe,se,ce,le=0,G=null,K=[],ue=[],q=null;function J(){!le&&U&&(le=requestAnimationFrame(()=>{le=0,U.render(W,oe)}))}function de(e){let{kept:t,sel:n,keptMap:r}=K[e],i=s[e].indices,a=k[e],o=A[e],c=t.index.array,l=n.index.array,u=0,d=0;for(let e=0;e<a.length;e++)a[e]||(r[u/3]=e,c[u++]=i[e*3],c[u++]=i[e*3+1],c[u++]=i[e*3+2],o[e]&&(l[d++]=i[e*3],l[d++]=i[e*3+1],l[d++]=i[e*3+2]));t.setDrawRange(0,u),n.setDrawRange(0,d),t.index.needsUpdate=!0,n.index.needsUpdate=!0}function Y(){for(let e=0;e<s.length;e++)de(e);E.value++,J()}let X=new Ko;function Z(e){let t=U.domElement.getBoundingClientRect();X.setFromCamera(new jn((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),oe);let n=X.intersectObjects(K.map(e=>e.keptMesh),!1)[0];if(!n)return null;let r=n.object.userData.gi;return{gi:r,t:K[r].keptMap[n.faceIndex],local:ce.worldToLocal(n.point.clone()),point:n.point}}function pe(e,t){let n=ae[V[e.gi]+e.t];s.forEach((e,r)=>{let i=A[r],a=k[r];for(let e=0;e<i.length;e++)!a[e]&&ae[V[r]+e]===n&&(i[e]=t)})}function me(e,t){let n=(b.value/100)**2,{x:r,y:i,z:a}=e.local;s.forEach((e,o)=>{let s=te[o],c=A[o],l=k[o];for(let e=0;e<c.length;e++)!l[e]&&(s[e*3]-r)**2+(s[e*3+1]-i)**2+(s[e*3+2]-a)**2<=n&&(c[e]=t)})}let ge=null;function _e(e){if(e.button!==0)return;let t=Z(e);if(!t)return;let n=+!e.shiftKey;p.value===`piece`?pe(t,n):(ge={on:n},me(t,n),U.domElement.setPointerCapture(e.pointerId)),Y()}function ve(e){if(p.value!==`brush`){G?.visible&&(G.visible=!1,J());return}let t=Z(e);G&&(G.visible=!!t,t&&(G.position.copy(t.point),G.scale.setScalar(b.value/100))),ge&&t?(me(t,ge.on),Y()):J()}function ye(){ge=null}function be(){j.push(k.map(e=>e.slice())),j.length>50&&j.shift(),N=[]}function xe(){ee.value.selected&&(be(),k.forEach((e,t)=>{let n=A[t];for(let t=0;t<e.length;t++)n[t]&&(e[t]=1,n[t]=0)}),Y())}function Se(){ee.value.selected&&(be(),k.forEach((e,t)=>{let n=A[t];for(let t=0;t<e.length;t++)n[t]||(e[t]=1),n[t]=0}),Y())}function we(){be(),k.forEach(e=>e.fill(0)),Y()}function Te(){k.forEach((e,t)=>{let n=A[t];for(let t=0;t<e.length;t++)n[t]=+!e[t]}),Y()}function Ee(){k.forEach((e,t)=>{let n=A[t];for(let t=0;t<e.length;t++)n[t]=e[t]?0:1-n[t]}),Y()}function De(){A.forEach(e=>e.fill(0)),Y()}function Oe(){j.length&&(N.push(k.map(e=>e.slice())),k=j.pop(),Y())}function ke(){N.length&&(j.push(k.map(e=>e.slice())),k=N.pop(),Y())}async function Ae(){if(!B.value||!ee.value.kept||C.value)return;C.value=!0;let e=await a.runEdit(`cutGarment`,{garmentId:r.garmentId,removed:k.map(e=>e.slice()),slot:S.value||null});C.value=!1,e&&i(`close`)}function je(){(!B.value||window.confirm(`Leave the shape editor? The cuts you made are not saved.`))&&i(`close`)}function Me(e){if(e.target.closest?.(`input,select,textarea`))return;let t=e.ctrlKey||e.metaKey;if(e.key===`Delete`||e.key===`Backspace`)e.preventDefault(),xe();else if(t&&e.key.toLowerCase()===`z`)e.preventDefault(),e.shiftKey?ke():Oe();else if(t&&e.key.toLowerCase()===`y`)e.preventDefault(),ke();else if(t&&e.key.toLowerCase()===`a`)e.preventDefault(),Te();else if(e.key===`b`||e.key===`B`)p.value=`brush`;else if(e.key===`p`||e.key===`P`)p.value=`piece`;else if(e.key===`Escape`&&!B.value)i(`close`);else return;e.stopPropagation()}return O(async()=>{U=new gu({antialias:!0}),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.outputColorSpace=Lt,U.toneMapping=4,U.setClearColor(724240),c.value.appendChild(U.domElement),W=new zr,oe=new To(35,1,.005,50),W.add(new po(16777215,3159613,1.6));let e=new Oo(16777215,2.2);e.position.set(1.5,3,2.5),W.add(e),ce=new Ar,ce.rotation.set(-Math.PI/2,0,0),W.add(ce);let t=new Ua({color:9147550,roughness:.85,side:2}),n=new Gi({color:2282478,transparent:!0,opacity:.55,depthWrite:!1,side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});ue.push(t,n),s.forEach((e,r)=>{let i={position:new vi(e.positions,3),uv:new vi(e.uvs,2)};if(e.hasNormals)i.normal=new vi(e.normals,3);else{let t=new Ni;t.setAttribute(`position`,i.position),t.setIndex(new vi(e.indices,1)),t.computeVertexNormals(),i.normal=t.getAttribute(`normal`),t.dispose()}let a=()=>{let t=new Ni;for(let[e,n]of Object.entries(i))t.setAttribute(e,n);let n=e.vertexCount>65535?Uint32Array:Uint16Array;return t.setIndex(new vi(new n(e.indices.length),1)),t},o=a(),s=a();o.computeBoundingBox();let c=new ra(o,t);c.userData.gi=r;let l=new ra(s,n);l.renderOrder=1,l.frustumCulled=c.frustumCulled=!1,ce.add(c,l),K.push({kept:o,sel:s,keptMesh:c,keptMap:new Int32Array(e.indices.length/3)})}),G=new ra(new Ma(1,24,16),new Gi({color:2282478,wireframe:!0,transparent:!0,opacity:.35,depthTest:!1})),G.visible=!1,W.add(G),se=new Sp(oe,U.domElement),se.mouseButtons={LEFT:null,MIDDLE:fe.PAN,RIGHT:fe.ROTATE},se.addEventListener(`change`,J),U.domElement.addEventListener(`pointerdown`,_e),U.domElement.addEventListener(`pointermove`,ve),U.domElement.addEventListener(`pointerup`,ye),U.domElement.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`keydown`,Me,!0);let r=new ResizeObserver(()=>{let{clientWidth:e,clientHeight:t}=c.value;e&&t&&(U.setSize(e,t),oe.aspect=e/t,oe.updateProjectionMatrix(),J())});r.observe(c.value),c.value._ro=r,Y(),ce.updateMatrixWorld(!0);let i=new ei;for(let e of K)i.expandByObject(e.keptMesh);let l=i.getCenter(new Q),u=i.getSize(new Q),d=Math.max(u.x,u.y,u.z)*.6/Math.tan(oe.fov*Math.PI/360)*1.3;se.target.copy(l),oe.position.copy(l).add(new Q(0,u.y*.1,d||1)),se.update();let f=o?.variants[0]?.texture;if(f)try{let e=await a.getTexture(f,1024);if(!U)return;q=new _a(e.rgba,e.width,e.height,ze),q.colorSpace=Lt,q.wrapS=q.wrapT=he,q.minFilter=Ce,q.generateMipmaps=!0,q.flipY=!1,q.needsUpdate=!0,t.map=q,t.color.set(16777215),t.alphaTest=e.hasAlpha?.35:0,t.needsUpdate=!0,J()}catch{}}),f(()=>{window.removeEventListener(`keydown`,Me,!0),cancelAnimationFrame(le),c.value?._ro?.disconnect(),se?.dispose();for(let e of K)e.kept.dispose(),e.sel.dispose();for(let e of ue)e.dispose();G?.geometry.dispose(),G?.material.dispose(),q?.dispose(),U?.dispose(),U?.domElement.remove(),U=null}),(t,n)=>(e(),x(y,{to:`body`},[z(`div`,{class:`fixed inset-0 z-40 flex flex-col bg-canvas`,role:`dialog`,"aria-modal":`true`,"aria-label":`Edit the shape of ${g(o)?.label}`},[z(`header`,Ox,[z(`h2`,kx,`Edit shape · `+l(g(o)?.label),1),z(`span`,Ax,l(g(ne)[g(o)?.slot]?.title)+` · `+l(g(H))+` piece`+l(g(H)===1?``:`s`)+` · `+l(g(F).toLocaleString())+` triangles`,1),z(`button`,{class:`btn-ghost ml-auto`,"aria-label":`Close`,onClick:je},[h(P,{name:`x`})])]),z(`div`,jx,[z(`div`,Mx,[z(`div`,{ref_key:`host`,ref:c,class:`absolute inset-0`},null,512),z(`p`,Nx,` Left click `+l(p.value===`piece`?`selects a piece`:`and drag paints`)+` · Shift to unselect · right-drag turns · wheel zooms · Delete removes `,1)]),z(`aside`,Px,[z(`section`,Fx,[n[6]||=z(`h3`,{class:`label`},`Select`,-1),z(`div`,Ix,[z(`button`,{class:v([`flex-1 rounded-md px-2 py-1`,p.value===`piece`?`bg-hover text-fg`:`text-fg-muted`]),title:`Click a part to select all of it (P)`,onClick:n[0]||=e=>p.value=`piece`},`Piece`,2),z(`button`,{class:v([`flex-1 rounded-md px-2 py-1`,p.value===`brush`?`bg-hover text-fg`:`text-fg-muted`]),title:`Paint over triangles (B)`,onClick:n[1]||=e=>p.value=`brush`},`Brush`,2)]),p.value===`brush`?(e(),m(`label`,Lx,[n[4]||=L(` Size `,-1),u(z(`input`,{"onUpdate:modelValue":n[2]||=e=>b.value=e,type:`range`,min:`1`,max:`25`,class:`flex-1`},null,512),[[M,b.value,void 0,{number:!0}]]),n[5]||=L(),z(`span`,Rx,l(b.value)+` cm`,1)])):R(``,!0),z(`div`,zx,[z(`button`,{class:`btn px-2 py-1 text-xs`,onClick:Te},`All`),z(`button`,{class:`btn px-2 py-1 text-xs`,onClick:Ee},`Invert`),z(`button`,{class:`btn px-2 py-1 text-xs`,disabled:!ee.value.selected,onClick:De},`Clear`,8,Bx)]),z(`p`,Vx,l(ee.value.selected.toLocaleString())+` triangles selected`,1)]),z(`section`,Hx,[n[11]||=z(`h3`,{class:`label`},`Cut`,-1),z(`button`,{class:`btn w-full`,disabled:!ee.value.selected,title:`Delete`,onClick:xe},[h(P,{name:`trash`}),n[7]||=L(`Remove selected`,-1)],8,Ux),z(`button`,{class:`btn w-full`,disabled:!ee.value.selected,onClick:Se},[h(P,{name:`isolate`}),n[8]||=L(`Keep only selected`,-1)],8,Wx),z(`div`,Gx,[z(`button`,{class:`btn flex-1 px-2 py-1 text-xs`,title:`Ctrl+Z`,disabled:!g(j).length&&!B.value,onClick:Oe},[h(P,{name:`undo`,size:14}),n[9]||=L(`Undo`,-1)],8,Kx),z(`button`,{class:`btn flex-1 px-2 py-1 text-xs`,title:`Ctrl+Shift+Z`,onClick:ke},[h(P,{name:`redo`,size:14}),n[10]||=L(`Redo`,-1)]),z(`button`,{class:`btn flex-1 px-2 py-1 text-xs`,disabled:!B.value,onClick:we},`Restore`,8,qx)]),z(`p`,Jx,l(ee.value.kept.toLocaleString())+` of `+l(g(F).toLocaleString())+` triangles kept. Lower details are cut to match when you save.`,1)]),z(`section`,Yx,[n[13]||=z(`h3`,{class:`label`},`Save`,-1),z(`label`,Xx,[n[12]||=L(` Save as `,-1),u(z(`select`,{"onUpdate:modelValue":n[3]||=e=>S.value=e,class:`field mt-1 w-full py-1 text-xs`},[z(`option`,Zx,`Replace `+l(g(o)?.label),1),(e(!0),m(T,null,d(g(D),t=>(e(),m(`option`,{key:t.code,value:t.code},`New garment in `+l(t.title),9,Qx))),128))],512),[[w,S.value]])]),z(`p`,$x,l(S.value?`${g(o)?.label} stays as it is; the cut becomes a new garment with all its colours. It still moves with the same bones it did before.`:`${g(o)?.label} itself changes. You can undo it in the top bar.`),1),z(`button`,{class:`btn-primary w-full`,disabled:!B.value||!ee.value.kept||C.value||g(a).state.busy,onClick:Ae},l(C.value?`Saving…`:S.value?`Save as new ${g(ne)[S.value]?.title??``} garment`:`Replace ${g(o)?.label}`),9,eS)])])])],8,Dx)]))}},nS={class:`space-y-3 p-5 text-sm`},rS={key:0,class:`flex items-center gap-2 text-ok`},iS={key:1,class:`divide-y divide-border rounded-lg border border-border`},aS=[`id`,`checked`,`onChange`],oS=[`for`],sS={class:`block text-[11px] text-fg-subtle`},cS={key:2,class:`text-xs text-warn`},lS=[`disabled`],uS={__name:`NoneDialog`,props:{only:{type:String,default:null}},emits:[`close`],setup(t,{emit:n}){let r=t,i=n,a=Du(),o=I(()=>xu({garments:a.garments},{includeHead:!0})),s=I(()=>(r.only?[r.only]:o.value).map(e=>{let t=a.garments.filter(t=>t.slot===e&&!t.prop),n=t.length&&Math.min(...t.map(e=>e.index))>0;return{code:e,title:ne[e]?.title??e,count:t.length,gap:n}})),u=_(new Set((r.only?[r.only]:o.value).filter(e=>e!==`head`))),f=e=>{let t=new Set(u.value);t.has(e)?t.delete(e):t.add(e),u.value=t},p=_(!1);async function g(){p.value=!0;let e=await a.runEdit(`addNoneOptions`,{slots:[...u.value]});p.value=!1,e&&i(`close`)}return(t,n)=>(e(),x(q,{title:`Add a "None" option`,onClose:n[1]||=e=>i(`close`)},{footer:c(()=>[z(`button`,{class:`btn`,onClick:n[0]||=e=>i(`close`)},`Cancel`),z(`button`,{class:`btn-primary`,disabled:p.value||!u.value.size,onClick:g},[h(P,{name:`plus`}),L(l(p.value?`Adding…`:`Add "None" to ${u.value.size} categor${u.value.size===1?`y`:`ies`}`),1)],8,lS)]),default:c(()=>[z(`div`,nS,[n[3]||=z(`p`,{class:`text-fg-muted`},` "None" is an invisible garment at number 0 of a category, so the ped can wear nothing there (no mask, no jacket…). Accessories don't need one: the game takes them off. `,-1),s.value.length?(e(),m(`ul`,iS,[(e(!0),m(T,null,d(s.value,t=>(e(),m(`li`,{key:t.code,class:`flex items-center gap-3 px-3 py-2`},[z(`input`,{id:`none-${t.code}`,type:`checkbox`,class:`accent-accent`,checked:u.value.has(t.code),onChange:e=>f(t.code)},null,40,aS),z(`label`,{for:`none-${t.code}`,class:`flex-1`},[L(l(t.title)+` `,1),z(`span`,sS,l(t.gap?`Number 0 is free: None goes there and nothing moves.`:`Its ${t.count} garment${t.count===1?``:`s`} move up one number.`)+` `+l(t.code===`head`?`Not usually wanted: the face would disappear.`:``),1)],8,oS)]))),128))])):(e(),m(`p`,rS,[h(P,{name:`check`}),n[2]||=L(`Every category already starts with "None".`,-1)])),s.value.some(e=>!e.gap)?(e(),m(`p`,cS,` Where garments move up one, outfits players already saved show the garment before the one they picked, so it's best done before the ped goes live. `)):R(``,!0)])]),_:1}))}},dS={class:`relative flex h-12 shrink-0 items-center gap-2 border-b border-border px-3`},fS=[`src`],pS={class:`truncate font-mono text-sm font-medium`},mS={class:`rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-fg-subtle`},hS=[`disabled`],gS={class:`ml-auto flex items-center gap-1`},_S=[`disabled`,`title`],vS=[`disabled`,`title`],yS={class:`mx-1 font-mono text-[11px] text-fg-subtle`,title:`Edits`},bS=[`title`],xS={class:`relative h-1.5 w-10 overflow-hidden rounded-full bg-raised`},SS=[`disabled`],CS=[`aria-expanded`],wS={class:`text-xs`},TS=[`disabled`],ES={key:0,class:`flex shrink-0 items-center gap-2 border-b border-danger/30 bg-danger/10 px-3 py-1.5 text-xs text-danger`},DS={class:`flex-1`},OS=[`disabled`],kS={class:`grid min-h-0 flex-1 grid-cols-[176px_288px_minmax(0,1fr)_320px]`},AS={class:`min-h-0 border-r border-border`},jS={class:`min-h-0 border-r border-border`},MS={class:`relative min-h-0`},NS={class:`absolute left-3 top-3 flex items-center gap-2`},PS={class:`flex rounded-lg border border-border bg-surface/90 p-0.5 text-xs backdrop-blur`,role:`group`,"aria-label":`Preview`},FS=[`disabled`],IS={key:0,class:`absolute bottom-14 left-1/2 flex -translate-x-1/2 rounded-lg border border-border bg-surface/90 p-0.5 text-xs backdrop-blur`,role:`group`,"aria-label":`Pose`},LS=[`aria-pressed`,`onClick`],RS={class:`pointer-events-none absolute right-3 top-3 rounded-md bg-surface/80 px-2 py-1 text-xs text-fg-muted backdrop-blur`},zS={class:`min-h-0 border-l border-border`},BS={key:8,class:`pointer-events-none absolute inset-0 z-30 flex items-end justify-center p-6`},VS={class:`rounded-xl border border-accent bg-surface/95 px-5 py-3 text-sm shadow-2xl shadow-black/50 backdrop-blur`},HS={key:0},US={class:`font-semibold text-accent`},WS={key:1},GS={__name:`Workspace`,setup(t){let n=Du(),r=_(null),i=_(!1),a=_(!1),s=_(!1),u=_(null),p=_(null),y=e=>e.dataTransfer?.types?.includes(`Files`),b=()=>s.value||a.value||n.state.fitOpen||n.state.convertOpen||n.state.spaceOpen||!!n.state.noneOpen||!!D.value||!!k.value;function S(e){y(e)&&!b()&&(e.preventDefault(),p.value=e.target.closest?.(`[data-slot]`)?.dataset.slot??``)}function C(e){e.relatedTarget===null&&(p.value=null)}async function w(e){if(!y(e)||b())return;e.preventDefault();let t=e.target.closest?.(`[data-slot]`)?.dataset.slot??null;p.value=null;let{entries:n,source:r}=await Bd(e.dataTransfer);u.value={entries:n,name:r,slot:t&&t!==`other`?t:null},s.value=!0}function E(){s.value=!1,u.value=null}let D=_(null),k=_(null),A=I(()=>({errors:n.issues.filter(e=>e.level===`error`).length,warnings:n.issues.filter(e=>e.level===`warning`).length})),j=I(()=>{let e=n.space;if(!e)return null;let t=Math.max(0,...e.files.map(e=>Math.max(e.data,e.graphics)));return{used:t,share:t/e.limit}}),M=I(()=>n.state.saving?`Saving…`:n.state.saveError?`Not saved on this device`:`Saved on this device`);function ee(e){if(D.value||k.value||a.value||s.value||n.state.fitOpen||n.state.convertOpen||n.state.spaceOpen||n.state.noneOpen||e.target.closest?.(`input,textarea,select`))return;let t=e.ctrlKey||e.metaKey;t&&e.key.toLowerCase()===`z`?(e.preventDefault(),e.shiftKey?n.redo():n.undo()):t&&e.key.toLowerCase()===`y`&&(e.preventDefault(),n.redo())}function B(e){(n.state.saving||n.state.busy||D.value)&&(e.preventDefault(),e.returnValue=``)}O(()=>{window.addEventListener(`keydown`,ee),window.addEventListener(`beforeunload`,B)}),f(()=>{window.removeEventListener(`keydown`,ee),window.removeEventListener(`beforeunload`,B)});function te(e){D.value={key:e,garment:n.state.selectedGarment}}return(t,f)=>(e(),m(`div`,{class:`relative flex h-dvh flex-col bg-canvas`,onDragover:S,onDragleave:C,onDrop:w},[z(`header`,dS,[h(g(N),{to:`/`,class:`flex items-center gap-2 pr-2`,title:g(F).appName},{default:c(()=>[z(`img`,{src:`${t.$baseUrl}mark.svg`,alt:``,class:`size-6`},null,8,fS)]),_:1},8,[`title`]),h(g(N),{to:`/projects`,class:`btn-ghost hidden text-xs sm:inline-flex`},{default:c(()=>[...f[21]||=[L(`Your projects`,-1)]]),_:1}),h(P,{name:`chevronRight`,size:14,class:`text-fg-subtle`}),z(`h1`,pS,l(g(n).state.project?.name),1),z(`span`,mS,l(g(n).ped?.layout),1),g(n).ped?.layout===`packed`?(e(),m(`button`,{key:0,class:v([`btn-ghost text-xs`,g(n).issues.some(e=>e.code===`TOO_BIG_FOR_GAME`)?`text-danger`:``]),disabled:g(n).state.busy,title:`Every garment in its own files, as a new project`,onClick:f[0]||=e=>g(n).state.convertOpen=!0},`Make streamed copy…`,10,hS)):R(``,!0),z(`span`,{class:v([`ml-2 hidden items-center gap-1.5 text-xs md:flex`,g(n).state.saveError?`text-danger`:`text-fg-subtle`])},[z(`span`,{class:v([`size-1.5 rounded-full`,g(n).state.saving?`animate-pulse bg-warn`:g(n).state.saveError?`bg-danger`:`bg-ok`])},null,2),L(l(M.value),1)],2),z(`div`,gS,[z(`button`,{class:`btn-ghost`,disabled:!g(n).canUndo||g(n).state.busy,title:g(n).state.undo.label?`Undo: ${g(n).state.undo.label} (Ctrl+Z)`:`Undo (Ctrl+Z)`,"aria-label":`Undo`,onClick:f[1]||=e=>g(n).undo()},[h(P,{name:`undo`})],8,_S),z(`button`,{class:`btn-ghost`,disabled:!g(n).canRedo||g(n).state.busy,title:g(n).state.undo.redoLabel?`Redo: ${g(n).state.undo.redoLabel} (Ctrl+Shift+Z)`:`Redo`,"aria-label":`Redo`,onClick:f[2]||=e=>g(n).redo()},[h(P,{name:`redo`})],8,vS),z(`span`,yS,l(g(n).state.undo.cursor)+` edit`+l(g(n).state.undo.cursor===1?``:`s`),1),f[24]||=z(`div`,{class:`mx-1 h-5 w-px bg-border`},null,-1),z(`button`,{class:`btn-ghost`,title:j.value?`Fullest file: ${g(oe)(j.value.used)} of the game's 128 MB limit`:`What is using space`,onClick:f[3]||=e=>g(n).state.spaceOpen=!0},[z(`span`,xS,[z(`span`,{class:v([`absolute inset-y-0 left-0 rounded-full`,j.value?j.value.share>=1?`bg-danger`:j.value.share>=.9?`bg-warn`:`bg-accent`:`bg-fg-subtle`]),style:o({width:`${Math.min(1,j.value?.share??0)*100}%`})},null,6)]),z(`span`,{class:v([`text-xs`,j.value?.share>=1?`text-danger`:``])},`Space`,2)],8,bS),z(`button`,{class:`btn`,disabled:g(n).state.busy,onClick:f[4]||=e=>s.value=!0},[h(P,{name:`plus`}),f[22]||=L(`Add clothing`,-1)],8,SS),z(`button`,{class:`btn-ghost`,"aria-expanded":i.value,onClick:f[5]||=e=>i.value=!i.value},[h(P,{name:`alert`,class:v(A.value.errors?`text-danger`:A.value.warnings?`text-warn`:`text-ok`)},null,8,[`class`]),z(`span`,wS,l(A.value.errors+A.value.warnings?`${A.value.errors+A.value.warnings} issue${A.value.errors+A.value.warnings>1?`s`:``}`:`No issues`),1)],8,CS),z(`button`,{class:`btn-primary ml-1`,disabled:g(n).state.busy,onClick:f[6]||=e=>a.value=!0},[h(P,{name:`download`}),f[23]||=L(`Export`,-1)],8,TS)]),i.value?(e(),x(yg,{key:1,onClose:f[7]||=e=>i.value=!1})):R(``,!0)]),g(n).mismatched.length?(e(),m(`div`,ES,[h(P,{name:`alert`,size:14}),z(`span`,DS,l(g(n).mismatched.length===1?`1 garment is`:`${g(n).mismatched.length} garments are`)+` rigged to another ped's skeleton and will tear apart in game. `,1),z(`button`,{class:`btn px-2 py-1 text-xs`,disabled:g(n).state.busy,onClick:f[8]||=e=>g(n).state.fitOpen=!0},`Fix all…`,8,OS)])):R(``,!0),z(`div`,kS,[z(`div`,AS,[h(Of,{"drop-slot":p.value},null,8,[`drop-slot`])]),z(`div`,jS,[h(dp,{onAdd:f[9]||=e=>s.value=!0})]),z(`div`,MS,[h(Qp,{ref_key:`stage`,ref:r},null,512),z(`div`,NS,[z(`div`,PS,[z(`button`,{class:v([`rounded-md px-2.5 py-1`,g(n).state.view===`outfit`?`bg-hover text-fg`:`text-fg-muted`]),onClick:f[10]||=e=>g(n).state.view=`outfit`},`Outfit`,2),z(`button`,{class:v([`rounded-md px-2.5 py-1 disabled:opacity-40`,g(n).state.view===`isolate`?`bg-hover text-fg`:`text-fg-muted`]),disabled:!g(n).state.selectedGarment,onClick:f[11]||=e=>g(n).state.view=`isolate`},`Isolate`,10,FS)]),z(`button`,{class:`rounded-lg border border-border bg-surface/90 p-1.5 text-fg-muted backdrop-blur hover:text-fg`,title:`Reset view (F or Home)`,"aria-label":`Reset view`,onClick:f[12]||=e=>r.value?.fit()},[h(P,{name:`reset`,size:14})])]),g(n).ped?.pose?(e(),m(`div`,IS,[(e(!0),m(T,null,d(g(Vp),t=>(e(),m(`button`,{key:t.id,class:v([`rounded-md px-2.5 py-1`,g(n).state.pose===t.id?`bg-hover text-fg`:`text-fg-muted hover:text-fg`]),"aria-pressed":g(n).state.pose===t.id,onClick:e=>g(n).state.pose=t.id},l(t.label),11,LS))),128))])):R(``,!0),z(`p`,RS,l(g(n).state.view===`isolate`?`${g(n).garment(g(n).state.selectedGarment)?.label??``} on its own`:`The outfit on ${g(n).state.project?.name}`),1)]),z(`div`,zS,[h(og,{onEditTexture:te,onEditShape:f[13]||=e=>k.value=e})])]),a.value?(e(),x(Vg,{key:1,onClose:f[14]||=e=>a.value=!1})):R(``,!0),s.value?(e(),x(nb,{key:2,initial:u.value,onClose:E},null,8,[`initial`])):R(``,!0),g(n).state.fitOpen?(e(),x(bb,{key:3,onClose:f[15]||=e=>g(n).state.fitOpen=!1})):R(``,!0),g(n).state.convertOpen?(e(),x(jb,{key:4,onClose:f[16]||=e=>g(n).state.convertOpen=!1})):R(``,!0),g(n).state.spaceOpen?(e(),x(Ex,{key:5,onClose:f[17]||=e=>g(n).state.spaceOpen=!1})):R(``,!0),k.value?(e(),x(tS,{key:6,"garment-id":k.value,onClose:f[18]||=e=>k.value=null},null,8,[`garment-id`])):R(``,!0),g(n).state.noneOpen?(e(),x(uS,{key:7,only:g(n).state.noneOpen===!0?null:g(n).state.noneOpen,onClose:f[19]||=e=>g(n).state.noneOpen=!1},null,8,[`only`])):R(``,!0),p.value===null?R(``,!0):(e(),m(`div`,BS,[z(`div`,VS,[p.value&&p.value!==`other`?(e(),m(`span`,HS,[f[25]||=L(`Drop to add to `,-1),z(`span`,US,l(g(ne)[p.value]?.title),1)])):(e(),m(`span`,WS,[...f[26]||=[L(`Drop to add clothing or pictures. `,-1),z(`span`,{class:`text-fg-muted`},`Drop on a category on the left to put everything there.`,-1)]]))])])),D.value?(e(),x(Hv,{key:9,"texture-key":D.value.key,"garment-id":D.value.garment,onClose:f[20]||=e=>D.value=null},null,8,[`texture-key`,`garment-id`])):R(``,!0)],32))}},KS={key:1,class:`grid min-h-dvh place-items-center`},qS={key:2,class:`min-h-dvh`},JS={class:`flex h-12 items-center gap-3 border-b border-border px-4`},YS=[`src`],XS={class:`mx-auto max-w-xl px-6 pt-16`},ZS={key:0,class:`mt-2 text-sm text-fg-muted`},QS={key:1,class:`mt-2 text-sm text-fg-muted`},$S={class:`mt-3 space-y-1.5`},eC={key:3,class:`mt-2 text-sm text-fg-muted`},tC={key:1,class:`grid min-h-dvh place-items-center p-8 text-center`},nC={__name:`EditorView`,setup(t){let n=b(),r=Eu(),i=ku(`(min-width: 1024px)`);return a(()=>n.query.project,e=>e?r.open(String(e)):r.dispose(),{immediate:!0}),f(()=>r.dispose()),(t,a)=>g(n).query.project?g(r).state.status===`loading`?(e(),m(`div`,KS,[...a[0]||=[z(`div`,{class:`flex items-center gap-3 text-sm text-fg-muted`},[z(`span`,{class:`size-4 animate-spin rounded-full border-2 border-border-strong border-t-accent`}),L(`Opening the ped… `)],-1)]])):g(r).state.status===`error`?(e(),m(`div`,qS,[z(`header`,JS,[h(g(N),{to:`/`},{default:c(()=>[z(`img`,{src:`${t.$baseUrl}mark.svg`,alt:``,class:`size-6`},null,8,YS)]),_:1}),h(g(N),{to:`/projects`,class:`btn-ghost text-xs`},{default:c(()=>[...a[1]||=[L(`Your projects`,-1)]]),_:1})]),z(`main`,XS,[h(P,{name:`files`,size:22,class:`text-fg-muted`}),a[4]||=z(`h1`,{class:`mt-4 text-lg font-semibold`},`This project could not be opened`,-1),g(r).state.error?.code===`missingProject`?(e(),m(`p`,ZS,`No project with that address is on this device.`)):g(r).state.error?.code===`storageUnavailable`?(e(),m(`p`,QS,`This browser is not letting the editor use its storage. Private windows often block it. Open the editor in a normal window, or allow site data for this site.`)):g(r).state.error?.code===`fatal`?(e(),m(T,{key:2},[a[2]||=z(`p`,{class:`mt-2 text-sm text-fg-muted`},`The ped's files have problems that stop it from opening:`,-1),z(`ul`,$S,[(e(!0),m(T,null,d(g(r).state.error.issues.filter(e=>e.level===`error`),(t,n)=>(e(),m(`li`,{key:n,class:`flex gap-2 text-sm text-danger`},[h(P,{name:`alert`,size:14,class:`mt-0.5`}),L(l(t.message),1)]))),128))])],64)):(e(),m(`p`,eC,l(g(r).state.error?.message),1)),h(g(N),{to:{name:`editor`},class:`btn-primary mt-6`},{default:c(()=>[...a[3]||=[L(`Import the ped again`,-1)]]),_:1})])])):g(r).state.status===`ready`?(e(),m(T,{key:3},[g(i)?(e(),x(GS,{key:0})):(e(),m(`div`,tC,[z(`div`,null,[a[6]||=z(`p`,{class:`font-medium`},`The editor needs a computer.`,-1),a[7]||=z(`p`,{class:`mt-2 text-sm text-fg-muted`},`Open it on a computer with a larger screen to edit your peds.`,-1),h(g(N),{to:`/`,class:`btn mt-5`},{default:c(()=>[...a[5]||=[L(`Go to the website`,-1)]]),_:1})])]))],64)):R(``,!0):(e(),x(vf,{key:0}))}};export{nC as default};